/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; },
  souFile: function() { return /* reexport */ sou_file; }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/@vue+cli-service@5.0.1_sass-loader@12.0.0_vue-template-compiler@2.6.14_vue@2.6.14/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./packages/util/install.ts
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，那么所有的组件都会被注册
const install = function (callback) {
  // 判断是否安装
  if (install.installed) {
    throw new Error('请勿重复注册插件');
  }
  install.installed = true;
  return {
    install: function (Vue, options) {
      callback(Vue);
    }
  };
};
;// CONCATENATED MODULE: ./packages/directives/sou-file.ts

let Change;
let Click;
const souFile = {
  unbind(el) {
    // console.log("销毁");
    const input = el.querySelector("#__sou-file__");
    if (input) {
      input.removeEventListener("change", Change, false);
      if (Click) {
        el.removeEventListener("click", Click, false);
      }
    }
  },
  bind: (el, binding, vnode) => {
    // console.log("注册");
    let input = el.querySelector(".__sou-file__");
    if (!input) {
      input = document.createElement("input");
      input.className = "__sou-file__";
      input.type = "file";
      input.multiple = binding.arg == "multiple";
      input.style.display = "none";
      el.appendChild(input);
    }
    Change = event => {
      const target = event.target;
      console.log(target);
      const {
        files
      } = target;
      target.type = 'text';
      target.type = 'file';
      if (binding.value && typeof binding.value === "function") {
        const handle = binding.value;
        handle.apply(null, [files, target, el]);
      }
    };
    el.addEventListener("change", Change, false);
    Click = () => {
      // console.log(el, binding, vnode);
      // console.dir((el as any).__vue__);
      input.click();
    };
    el.addEventListener("click", Click, false);
  }
};
/* harmony default export */ var sou_file = (install(Vue => {
  Vue.directive('sou-file', souFile);
}));
;// CONCATENATED MODULE: ./packages/index.ts


console.log(sou_file);
// 把组件保存到一个数组中,可有多个
const components = [];
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，那么所有的组件都会被注册
const packages_install = function (Vue) {
  // 判断是否安装
  if (packages_install.installed) return;
  packages_install.installed = true;
  // 遍历组件列表并注册全局组件
  components.map(component => {
    Vue.component(component.name, component);
  });
};
// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  packages_install(window.Vue);
}
/* harmony default export */ var packages_0 = ({
  // 导出的对象必须具备一个 install 方法，才能被 Vue.use() 方法安装
  install: packages_install,
  // 组件列表
  ...components
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/@vue+cli-service@5.0.1_sass-loader@12.0.0_vue-template-compiler@2.6.14_vue@2.6.14/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (packages_0);


module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=vue-sou-tool.common.js.map