//// [jsxJsxsCjsTransformCustomImport.tsx]
/// <reference path="/.lib/react16.d.ts" />
const a = <>
  <p></p>
  text
  <div className="foo"></div>
</>

export {};

//// [jsxJsxsCjsTransformCustomImport.js]
"use strict";
exports.__esModule = true;
var jsx_dev_runtime_js_1 = require("preact/jsx-dev-runtime.js");
var _jsxFileName = "tests/cases/conformance/jsx/jsxs/jsxJsxsCjsTransformCustomImport.tsx";
/// <reference path="react16.d.ts" />
var a = jsx_dev_runtime_js_1.jsxDEV(jsx_dev_runtime_js_1.Fragment, { children: [jsx_dev_runtime_js_1.jsxDEV("p", {}, void 0, false, { fileName: _jsxFileName, lineNumber: 3, columnNumber: 3 }, this), "text", jsx_dev_runtime_js_1.jsxDEV("div", { className: "foo" }, void 0, false, { fileName: _jsxFileName, lineNumber: 5, columnNumber: 3 }, this)] }, void 0, true, { fileName: _jsxFileName, lineNumber: 2, columnNumber: 10 }, this);
