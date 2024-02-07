import { PluginObject, VueConstructor } from "vue"

export type InstallCallback = {
    (Vue: VueConstructor): void
}

export type Install = {
    (callback: InstallCallback): PluginObject<InstallCallback>,
    installed?: boolean
}
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，那么所有的组件都会被注册
export const install: Install = function (callback: InstallCallback) {
    // 判断是否安装
    if (install.installed){
        throw new Error('请勿重复注册插件')
    }
    install.installed = true
    return {
        install: function (Vue: VueConstructor, options: any) {
            callback(Vue)
        }
    }
}

