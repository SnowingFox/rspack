(self['webpackChunkwebpack'] = self['webpackChunkwebpack'] || []).push([["main"], {
"./Layout.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "defaults", {
    enumerable: true,
    get: ()=>defaults
});
const defaults = {
    test: 1000
};
},
"./export.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Something", {
    enumerable: true,
    get: ()=>Something
});
const _layoutJs = __webpack_require__("./Layout.js");
function callit() {
    _layoutJs.defaults.test;
}
callit();
var Something = 20000;
},
"./index.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _exportJs = __webpack_require__("./export.js");
(0, _exportJs.Something)();
},

},function(__webpack_require__) {
__webpack_require__("./index.js");
}
]);