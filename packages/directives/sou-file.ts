import { DirectiveOptions, DirectiveFunction, DirectiveBinding } from "vue/types/options"
import { install } from "../util/install";
import { VueConstructor } from "vue";

type Directive = DirectiveOptions | DirectiveFunction
let Change: (event: Event) => void
let Click: () => void
const souFile = {
    unbind(el: HTMLElement) {
        // console.log("销毁");
        const input = el.querySelector("#__sou-file__") as HTMLInputElement
        if (input) {
            input.removeEventListener("change", Change, false)
            if (Click) {
                el.removeEventListener("click", Click, false)
            }
        }
    },
    bind: (el: HTMLElement, binding: DirectiveBinding, vnode: any) => {
        // console.log("注册");
        let input = el.querySelector(".__sou-file__") as HTMLInputElement
        if (!input) {
            input = document.createElement("input")
            input.className = "__sou-file__"
            input.type = "file"
            input.multiple = binding.arg == "multiple"
            input.style.display = "none"
            el.appendChild(input)
        }
        Change = (event: Event) => {
            const target = event.target as HTMLInputElement
            console.log(target);
            
            const { files } = target
            target.type = 'text'
            target.type = 'file'
            if (binding.value && typeof binding.value === "function") {
                const handle = (binding.value) as (...params: any) => void
                handle.apply(null, [files, target, el])
            }
        }

        el.addEventListener("change", Change, false)
        Click = () => {
            // console.log(el, binding, vnode);
            // console.dir((el as any).__vue__);
            input.click()
        }
        el.addEventListener("click", Click, false)
    }
} as Directive

export default install((Vue: VueConstructor) => {
    Vue.directive('sou-file', souFile)
})