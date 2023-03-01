/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --Base-color: #36b37e;\n  --Accent-color: #ffc400;\n  --Background-color: #fbfbfb;\n  --Secondary-bg-color: hsl(0, 0%, 85%);\n  --Text-color: #333f50;\n  --Secondary-text-color: #9b9b9b;\n\n  --top-bottom-padding: 16px;\n  --right-left-padding: 16px;\n}\n\n*,\n*::before,\n*::after {\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  min-height: 100vh;\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  color: var(--Text-color);\n  position: relative;\n}\n\n/* .container {\n  max-width: 90%;\n  height: 100%;\n  margin-inline: auto;\n} */\n\nheader {\n  background-color: var(--Base-color);\n  color: var(--Accent-color);\n  padding-block: var(--top-bottom-padding);\n  padding-inline: var(--right-left-padding);\n  /* grid-column: 1 / 3; */\n}\n\nh1 img {\n  width: 30px;\n  height: 28px;\n  vertical-align: middle;\n  color: var(--Accent-color);\n}\n\nmain {\n  /* width: 90%;\n  padding: 16px auto; */\n  background-color: var(--Background-color);\n}\n\nmain .content {\n  min-height: 100%;\n  display: grid;\n  grid-template-columns: minmax(100px, 15%) 1fr;\n  grid-template-rows: 1fr;\n  padding-left: var(--right-left-padding);\n}\n\nmain .side-bar {\n  /* grid-column: 1 / 2; */\n  padding-block: var(--top-bottom-padding);\n}\n\n.side-bar .wrapper {\n  display: flex;\n  gap: 10px;\n  padding: 8px;\n  margin-bottom: var(--top-bottom-padding);\n  margin-right: var(--right-left-padding);\n  border-radius: 10px;\n  cursor: pointer;\n}\n\n.side-bar .wrapper:hover {\n  background-color: var(--Secondary-bg-color);\n}\n.side-bar .wrapper.active {\n  background-color: var(--Secondary-bg-color);\n}\n\n.wrapper h2 {\n  font-size: 16px;\n}\n\n.wrapper img {\n  width: 20px;\n  height: 20px;\n}\n\n.projects h2 {\n  margin-bottom: var(--top-bottom-padding);\n}\n\nmain .main-content {\n  /* grid-column: 2 / 3; */\n  background-color: var(--Secondary-bg-color);\n  display: grid;\n  place-items: center;\n}\n\n.main-content .container {\n  width: 80%;\n  height: 90%;\n}\n\nfooter {\n  /* grid-row: 3 / 4; */\n  /* grid-column: 1 / 3; */\n  text-align: center;\n  padding-block: var(--top-bottom-padding);\n  padding-inline: var(--right-left-padding);\n  background-color: var(--Base-color);\n  color: var(--Accent-color);\n}\n\n.modal {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 9999;\n  background-color: var(--Base-color);\n  color: var(--Background-color);\n  padding: 16px 32px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  border-radius: 12px;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);\n}\n\n.modal input {\n  outline: 0;\n}\n\n.modal .btn-container {\n  align-self: center;\n  display: flex;\n  gap: 8px;\n}\n\n.modal .btn-container button {\n  /* align-self: center; */\n  color: var(--Background-color);\n  background-color: var(--Text-color);\n  outline: 0;\n  border: 0;\n  min-width: 50px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.btn-container button:is(:hover, :focus) {\n  background-color: var(--Accent-color);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,uBAAuB;EACvB,2BAA2B;EAC3B,qCAAqC;EACrC,qBAAqB;EACrB,+BAA+B;;EAE/B,0BAA0B;EAC1B,0BAA0B;AAC5B;;AAEA;;;EAGE,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,iCAAiC;EACjC,wBAAwB;EACxB,kBAAkB;AACpB;;AAEA;;;;GAIG;;AAEH;EACE,mCAAmC;EACnC,0BAA0B;EAC1B,wCAAwC;EACxC,yCAAyC;EACzC,wBAAwB;AAC1B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,0BAA0B;AAC5B;;AAEA;EACE;uBACqB;EACrB,yCAAyC;AAC3C;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,6CAA6C;EAC7C,uBAAuB;EACvB,uCAAuC;AACzC;;AAEA;EACE,wBAAwB;EACxB,wCAAwC;AAC1C;;AAEA;EACE,aAAa;EACb,SAAS;EACT,YAAY;EACZ,wCAAwC;EACxC,uCAAuC;EACvC,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,2CAA2C;AAC7C;AACA;EACE,2CAA2C;AAC7C;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,wBAAwB;EACxB,2CAA2C;EAC3C,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,WAAW;AACb;;AAEA;EACE,qBAAqB;EACrB,wBAAwB;EACxB,kBAAkB;EAClB,wCAAwC;EACxC,yCAAyC;EACzC,mCAAmC;EACnC,0BAA0B;AAC5B;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,aAAa;EACb,mCAAmC;EACnC,8BAA8B;EAC9B,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,mBAAmB;EACnB,2CAA2C;AAC7C;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,wBAAwB;EACxB,8BAA8B;EAC9B,mCAAmC;EACnC,UAAU;EACV,SAAS;EACT,eAAe;EACf,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,qCAAqC;AACvC","sourcesContent":[":root {\n  --Base-color: #36b37e;\n  --Accent-color: #ffc400;\n  --Background-color: #fbfbfb;\n  --Secondary-bg-color: hsl(0, 0%, 85%);\n  --Text-color: #333f50;\n  --Secondary-text-color: #9b9b9b;\n\n  --top-bottom-padding: 16px;\n  --right-left-padding: 16px;\n}\n\n*,\n*::before,\n*::after {\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  min-height: 100vh;\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  color: var(--Text-color);\n  position: relative;\n}\n\n/* .container {\n  max-width: 90%;\n  height: 100%;\n  margin-inline: auto;\n} */\n\nheader {\n  background-color: var(--Base-color);\n  color: var(--Accent-color);\n  padding-block: var(--top-bottom-padding);\n  padding-inline: var(--right-left-padding);\n  /* grid-column: 1 / 3; */\n}\n\nh1 img {\n  width: 30px;\n  height: 28px;\n  vertical-align: middle;\n  color: var(--Accent-color);\n}\n\nmain {\n  /* width: 90%;\n  padding: 16px auto; */\n  background-color: var(--Background-color);\n}\n\nmain .content {\n  min-height: 100%;\n  display: grid;\n  grid-template-columns: minmax(100px, 15%) 1fr;\n  grid-template-rows: 1fr;\n  padding-left: var(--right-left-padding);\n}\n\nmain .side-bar {\n  /* grid-column: 1 / 2; */\n  padding-block: var(--top-bottom-padding);\n}\n\n.side-bar .wrapper {\n  display: flex;\n  gap: 10px;\n  padding: 8px;\n  margin-bottom: var(--top-bottom-padding);\n  margin-right: var(--right-left-padding);\n  border-radius: 10px;\n  cursor: pointer;\n}\n\n.side-bar .wrapper:hover {\n  background-color: var(--Secondary-bg-color);\n}\n.side-bar .wrapper.active {\n  background-color: var(--Secondary-bg-color);\n}\n\n.wrapper h2 {\n  font-size: 16px;\n}\n\n.wrapper img {\n  width: 20px;\n  height: 20px;\n}\n\n.projects h2 {\n  margin-bottom: var(--top-bottom-padding);\n}\n\nmain .main-content {\n  /* grid-column: 2 / 3; */\n  background-color: var(--Secondary-bg-color);\n  display: grid;\n  place-items: center;\n}\n\n.main-content .container {\n  width: 80%;\n  height: 90%;\n}\n\nfooter {\n  /* grid-row: 3 / 4; */\n  /* grid-column: 1 / 3; */\n  text-align: center;\n  padding-block: var(--top-bottom-padding);\n  padding-inline: var(--right-left-padding);\n  background-color: var(--Base-color);\n  color: var(--Accent-color);\n}\n\n.modal {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 9999;\n  background-color: var(--Base-color);\n  color: var(--Background-color);\n  padding: 16px 32px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  border-radius: 12px;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);\n}\n\n.modal input {\n  outline: 0;\n}\n\n.modal .btn-container {\n  align-self: center;\n  display: flex;\n  gap: 8px;\n}\n\n.modal .btn-container button {\n  /* align-self: center; */\n  color: var(--Background-color);\n  background-color: var(--Text-color);\n  outline: 0;\n  border: 0;\n  min-width: 50px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.btn-container button:is(:hover, :focus) {\n  background-color: var(--Accent-color);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom/addProject.js":
/*!*******************************!*\
  !*** ./src/dom/addProject.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addProjectBtnFun)
/* harmony export */ });
const addProjectBtn = document.querySelector('#add-project');

function createAddProjectModal() {
  const modalContainer = document.createElement('div');
  modalContainer.classList.add('modal');
  const modalLabel = document.createElement('label');
  modalLabel.textContent = 'Write Project name';
  const modalInput = document.createElement('input');
  const btnContainer = document.createElement('div');
  btnContainer.classList.add('btn-container');
  const addBtn = document.createElement('button');
  addBtn.textContent = 'Add';
  addBtn.id = 'add-btn';
  const cancelBtn = document.createElement('button');
  cancelBtn.textContent = 'Cancel';
  cancelBtn.id = 'cancel-btn';
  btnContainer.append(addBtn, cancelBtn);
  modalContainer.append(modalLabel, modalInput, btnContainer);
  return modalContainer;
}

function dispalyProjectModal() {
  addProjectBtn.addEventListener('click', () => {
    let projectModal = document.querySelector('.modal');
    if (projectModal === null) {
      projectModal = createAddProjectModal();
      document.querySelector('body').appendChild(projectModal);
    }
    projectModal.style.display = 'flex';
  });
}

function changeProjectModalDisplay(display) {
  document.querySelector('.modal').style.display = display;
}

function canelAddingProject() {
  const cancelBtn = document.querySelector('#cancel-btn');
  console.log(cancelBtn);
  cancelBtn.addEventListener('click', changeProjectModalDisplay('none'));
}

// function getProjectModalData() {
//   const modalInput = document.querySelector('.modal input');
// }

function addProjectBtnFun() {
  dispalyProjectModal();
  canelAddingProject();
}


/***/ }),

/***/ "./src/dom/switchPlanItem.js":
/*!***********************************!*\
  !*** ./src/dom/switchPlanItem.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ switchItems)
/* harmony export */ });
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
const planItems = document.querySelectorAll('.plan-items .wrapper');
const planItemsList = Array.from(planItems);
const itemTitle = document.querySelector('.container #plan-item-title');

function switchItemActiveState(items) {
  items.forEach((item) => {
    item.addEventListener('click', () => {
      items.forEach((itm) => {
        itm.classList.remove('active');
      });
      item.classList.add('active');
    });
  });
}

function getSelectedItemName(items) {
  let selectedItemName;
  items.forEach((item) => {
    if (item.classList.contains('active')) {
      selectedItemName = item.lastElementChild.textContent;
    }
  });
  return selectedItemName;
}

function changeItemTitle(items, itmTitle) {
  items.forEach((item) => {
    item.addEventListener('click', () => {
      const selectedName = getSelectedItemName(items);
      if (selectedName == null) return;
      itmTitle.textContent = selectedName;
    });
  });
}

function switchItems() {
  switchItemActiveState(planItemsList);
  changeItemTitle(planItemsList, itemTitle);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_addProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/addProject */ "./src/dom/addProject.js");
/* harmony import */ var _dom_switchPlanItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/switchPlanItem */ "./src/dom/switchPlanItem.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




(0,_dom_switchPlanItem__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_dom_addProject__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=bundle31492e5be715253a2da3.js.map