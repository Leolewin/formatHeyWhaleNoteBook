/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/pangu/dist/browser/pangu.js":
/*!**************************************************!*\
  !*** ./node_modules/pangu/dist/browser/pangu.js ***!
  \**************************************************/
/***/ ((module) => {

/*!
 * pangu.js
 * --------
 * @version: 4.0.7
 * @homepage: https://github.com/vinta/pangu.js
 * @license: MIT
 * @author: Vinta Chen <vinta.chen@gmail.com> (https://github.com/vinta)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_733__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_733__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_733__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_733__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_733__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_733__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_733__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__nested_webpack_require_733__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_733__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_733__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_733__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_733__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_733__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_733__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_733__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_733__(__nested_webpack_require_733__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __nested_webpack_require_4197__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function () {
  "use strict";

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  var _require = __nested_webpack_require_4197__(1),
      Pangu = _require.Pangu;

  function once(func) {
    var _this = this,
        _arguments = arguments;

    var executed = false;
    return function () {
      if (executed) {
        return;
      }

      var self = _this;
      executed = true;
      func.apply(self, _arguments);
    };
  }

  function debounce(func, delay, mustRunDelay) {
    var _this2 = this,
        _arguments2 = arguments;

    var timer = null;
    var startTime = null;
    return function () {
      var self = _this2;
      var args = _arguments2;
      var currentTime = +new Date();
      clearTimeout(timer);

      if (!startTime) {
        startTime = currentTime;
      }

      if (currentTime - startTime >= mustRunDelay) {
        func.apply(self, args);
        startTime = currentTime;
      } else {
        timer = setTimeout(function () {
          func.apply(self, args);
        }, delay);
      }
    };
  }

  var BrowserPangu = function (_Pangu) {
    _inherits(BrowserPangu, _Pangu);

    function BrowserPangu() {
      var _this3;

      _classCallCheck(this, BrowserPangu);

      _this3 = _possibleConstructorReturn(this, _getPrototypeOf(BrowserPangu).call(this));
      _this3.blockTags = /^(div|p|h1|h2|h3|h4|h5|h6)$/i;
      _this3.ignoredTags = /^(script|code|pre|textarea)$/i;
      _this3.presentationalTags = /^(b|code|del|em|i|s|strong)$/i;
      _this3.spaceLikeTags = /^(br|hr|i|img|pangu)$/i;
      _this3.spaceSensitiveTags = /^(a|del|pre|s|strike|u)$/i;
      _this3.isAutoSpacingPageExecuted = false;
      return _this3;
    }

    _createClass(BrowserPangu, [{
      key: "isContentEditable",
      value: function isContentEditable(node) {
        return node.isContentEditable || node.getAttribute && node.getAttribute('g_editable') === 'true';
      }
    }, {
      key: "isSpecificTag",
      value: function isSpecificTag(node, tagRegex) {
        return node && node.nodeName && node.nodeName.search(tagRegex) >= 0;
      }
    }, {
      key: "isInsideSpecificTag",
      value: function isInsideSpecificTag(node, tagRegex) {
        var checkCurrent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var currentNode = node;

        if (checkCurrent) {
          if (this.isSpecificTag(currentNode, tagRegex)) {
            return true;
          }
        }

        while (currentNode.parentNode) {
          currentNode = currentNode.parentNode;

          if (this.isSpecificTag(currentNode, tagRegex)) {
            return true;
          }
        }

        return false;
      }
    }, {
      key: "canIgnoreNode",
      value: function canIgnoreNode(node) {
        var currentNode = node;

        if (currentNode && (this.isSpecificTag(currentNode, this.ignoredTags) || this.isContentEditable(currentNode))) {
          return true;
        }

        while (currentNode.parentNode) {
          currentNode = currentNode.parentNode;

          if (currentNode && (this.isSpecificTag(currentNode, this.ignoredTags) || this.isContentEditable(currentNode))) {
            return true;
          }
        }

        return false;
      }
    }, {
      key: "isFirstTextChild",
      value: function isFirstTextChild(parentNode, targetNode) {
        var childNodes = parentNode.childNodes;

        for (var i = 0; i < childNodes.length; i++) {
          var childNode = childNodes[i];

          if (childNode.nodeType !== Node.COMMENT_NODE && childNode.textContent) {
            return childNode === targetNode;
          }
        }

        return false;
      }
    }, {
      key: "isLastTextChild",
      value: function isLastTextChild(parentNode, targetNode) {
        var childNodes = parentNode.childNodes;

        for (var i = childNodes.length - 1; i > -1; i--) {
          var childNode = childNodes[i];

          if (childNode.nodeType !== Node.COMMENT_NODE && childNode.textContent) {
            return childNode === targetNode;
          }
        }

        return false;
      }
    }, {
      key: "spacingNodeByXPath",
      value: function spacingNodeByXPath(xPathQuery, contextNode) {
        if (!(contextNode instanceof Node) || contextNode instanceof DocumentFragment) {
          return;
        }

        var textNodes = document.evaluate(xPathQuery, contextNode, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
        var currentTextNode;
        var nextTextNode;

        for (var i = textNodes.snapshotLength - 1; i > -1; --i) {
          currentTextNode = textNodes.snapshotItem(i);

          if (this.isSpecificTag(currentTextNode.parentNode, this.presentationalTags) && !this.isInsideSpecificTag(currentTextNode.parentNode, this.ignoredTags)) {
            var elementNode = currentTextNode.parentNode;

            if (elementNode.previousSibling) {
              var previousSibling = elementNode.previousSibling;

              if (previousSibling.nodeType === Node.TEXT_NODE) {
                var testText = previousSibling.data.substr(-1) + currentTextNode.data.toString().charAt(0);
                var testNewText = this.spacing(testText);

                if (testText !== testNewText) {
                  previousSibling.data = "".concat(previousSibling.data, " ");
                }
              }
            }

            if (elementNode.nextSibling) {
              var nextSibling = elementNode.nextSibling;

              if (nextSibling.nodeType === Node.TEXT_NODE) {
                var _testText = currentTextNode.data.substr(-1) + nextSibling.data.toString().charAt(0);

                var _testNewText = this.spacing(_testText);

                if (_testText !== _testNewText) {
                  nextSibling.data = " ".concat(nextSibling.data);
                }
              }
            }
          }

          if (this.canIgnoreNode(currentTextNode)) {
            nextTextNode = currentTextNode;
            continue;
          }

          var newText = this.spacing(currentTextNode.data);

          if (currentTextNode.data !== newText) {
            currentTextNode.data = newText;
          }

          if (nextTextNode) {
            if (currentTextNode.nextSibling && currentTextNode.nextSibling.nodeName.search(this.spaceLikeTags) >= 0) {
              nextTextNode = currentTextNode;
              continue;
            }

            var _testText2 = currentTextNode.data.toString().substr(-1) + nextTextNode.data.toString().substr(0, 1);

            var _testNewText2 = this.spacing(_testText2);

            if (_testNewText2 !== _testText2) {
              var nextNode = nextTextNode;

              while (nextNode.parentNode && nextNode.nodeName.search(this.spaceSensitiveTags) === -1 && this.isFirstTextChild(nextNode.parentNode, nextNode)) {
                nextNode = nextNode.parentNode;
              }

              var currentNode = currentTextNode;

              while (currentNode.parentNode && currentNode.nodeName.search(this.spaceSensitiveTags) === -1 && this.isLastTextChild(currentNode.parentNode, currentNode)) {
                currentNode = currentNode.parentNode;
              }

              if (currentNode.nextSibling) {
                if (currentNode.nextSibling.nodeName.search(this.spaceLikeTags) >= 0) {
                  nextTextNode = currentTextNode;
                  continue;
                }
              }

              if (currentNode.nodeName.search(this.blockTags) === -1) {
                if (nextNode.nodeName.search(this.spaceSensitiveTags) === -1) {
                  if (nextNode.nodeName.search(this.ignoredTags) === -1 && nextNode.nodeName.search(this.blockTags) === -1) {
                    if (nextTextNode.previousSibling) {
                      if (nextTextNode.previousSibling.nodeName.search(this.spaceLikeTags) === -1) {
                        nextTextNode.data = " ".concat(nextTextNode.data);
                      }
                    } else {
                      if (!this.canIgnoreNode(nextTextNode)) {
                        nextTextNode.data = " ".concat(nextTextNode.data);
                      }
                    }
                  }
                } else if (currentNode.nodeName.search(this.spaceSensitiveTags) === -1) {
                  currentTextNode.data = "".concat(currentTextNode.data, " ");
                } else {
                  var panguSpace = document.createElement('pangu');
                  panguSpace.innerHTML = ' ';

                  if (nextNode.previousSibling) {
                    if (nextNode.previousSibling.nodeName.search(this.spaceLikeTags) === -1) {
                      nextNode.parentNode.insertBefore(panguSpace, nextNode);
                    }
                  } else {
                    nextNode.parentNode.insertBefore(panguSpace, nextNode);
                  }

                  if (!panguSpace.previousElementSibling) {
                    if (panguSpace.parentNode) {
                      panguSpace.parentNode.removeChild(panguSpace);
                    }
                  }
                }
              }
            }
          }

          nextTextNode = currentTextNode;
        }
      }
    }, {
      key: "spacingNode",
      value: function spacingNode(contextNode) {
        var xPathQuery = './/*/text()[normalize-space(.)]';

        if (contextNode.children && contextNode.children.length === 0) {
          xPathQuery = './/text()[normalize-space(.)]';
        }

        this.spacingNodeByXPath(xPathQuery, contextNode);
      }
    }, {
      key: "spacingElementById",
      value: function spacingElementById(idName) {
        var xPathQuery = "id(\"".concat(idName, "\")//text()");
        this.spacingNodeByXPath(xPathQuery, document);
      }
    }, {
      key: "spacingElementByClassName",
      value: function spacingElementByClassName(className) {
        var xPathQuery = "//*[contains(concat(\" \", normalize-space(@class), \" \"), \"".concat(className, "\")]//text()");
        this.spacingNodeByXPath(xPathQuery, document);
      }
    }, {
      key: "spacingElementByTagName",
      value: function spacingElementByTagName(tagName) {
        var xPathQuery = "//".concat(tagName, "//text()");
        this.spacingNodeByXPath(xPathQuery, document);
      }
    }, {
      key: "spacingPageTitle",
      value: function spacingPageTitle() {
        var xPathQuery = '/html/head/title/text()';
        this.spacingNodeByXPath(xPathQuery, document);
      }
    }, {
      key: "spacingPageBody",
      value: function spacingPageBody() {
        var xPathQuery = '/html/body//*/text()[normalize-space(.)]';
        ['script', 'style', 'textarea'].forEach(function (tag) {
          xPathQuery = "".concat(xPathQuery, "[translate(name(..),\"ABCDEFGHIJKLMNOPQRSTUVWXYZ\",\"abcdefghijklmnopqrstuvwxyz\")!=\"").concat(tag, "\"]");
        });
        this.spacingNodeByXPath(xPathQuery, document);
      }
    }, {
      key: "spacingPage",
      value: function spacingPage() {
        this.spacingPageTitle();
        this.spacingPageBody();
      }
    }, {
      key: "autoSpacingPage",
      value: function autoSpacingPage() {
        var pageDelay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
        var nodeDelay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
        var nodeMaxWait = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2000;

        if (!(document.body instanceof Node)) {
          return;
        }

        if (this.isAutoSpacingPageExecuted) {
          return;
        }

        this.isAutoSpacingPageExecuted = true;
        var self = this;
        var onceSpacingPage = once(function () {
          self.spacingPage();
        });
        var videos = document.getElementsByTagName('video');

        if (videos.length === 0) {
          setTimeout(function () {
            onceSpacingPage();
          }, pageDelay);
        } else {
          for (var i = 0; i < videos.length; i++) {
            var video = videos[i];

            if (video.readyState === 4) {
              setTimeout(function () {
                onceSpacingPage();
              }, 3000);
              break;
            }

            video.addEventListener('loadeddata', function () {
              setTimeout(function () {
                onceSpacingPage();
              }, 4000);
            });
          }
        }

        var queue = [];
        var debouncedSpacingNodes = debounce(function () {
          while (queue.length) {
            var node = queue.shift();

            if (node) {
              self.spacingNode(node);
            }
          }
        }, nodeDelay, {
          'maxWait': nodeMaxWait
        });
        var mutationObserver = new MutationObserver(function (mutations, observer) {
          mutations.forEach(function (mutation) {
            switch (mutation.type) {
              case 'childList':
                mutation.addedNodes.forEach(function (node) {
                  if (node.nodeType === Node.ELEMENT_NODE) {
                    queue.push(node);
                  } else if (node.nodeType === Node.TEXT_NODE) {
                    queue.push(node.parentNode);
                  }
                });
                break;

              case 'characterData':
                var node = mutation.target;

                if (node.nodeType === Node.TEXT_NODE) {
                  queue.push(node.parentNode);
                }

                break;

              default:
                break;
            }
          });
          debouncedSpacingNodes();
        });
        mutationObserver.observe(document.body, {
          characterData: true,
          childList: true,
          subtree: true
        });
      }
    }]);

    return BrowserPangu;
  }(Pangu);

  var pangu = new BrowserPangu();
  module.exports = pangu;
  module.exports.default = pangu;
  module.exports.Pangu = BrowserPangu;
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function () {
  "use strict";

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  var CJK = "\u2E80-\u2EFF\u2F00-\u2FDF\u3040-\u309F\u30A0-\u30FA\u30FC-\u30FF\u3100-\u312F\u3200-\u32FF\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF";
  var ANY_CJK = new RegExp("[".concat(CJK, "]"));
  var CONVERT_TO_FULLWIDTH_CJK_SYMBOLS_CJK = new RegExp("([".concat(CJK, "])[ ]*([\\:]+|\\.)[ ]*([").concat(CJK, "])"), 'g');
  var CONVERT_TO_FULLWIDTH_CJK_SYMBOLS = new RegExp("([".concat(CJK, "])[ ]*([~\\!;,\\?]+)[ ]*"), 'g');
  var DOTS_CJK = new RegExp("([\\.]{2,}|\u2026)([".concat(CJK, "])"), 'g');
  var FIX_CJK_COLON_ANS = new RegExp("([".concat(CJK, "])\\:([A-Z0-9\\(\\)])"), 'g');
  var CJK_QUOTE = new RegExp("([".concat(CJK, "])([`\"\u05F4])"), 'g');
  var QUOTE_CJK = new RegExp("([`\"\u05F4])([".concat(CJK, "])"), 'g');
  var FIX_QUOTE_ANY_QUOTE = /([`"\u05f4]+)[ ]*(.+?)[ ]*([`"\u05f4]+)/g;
  var CJK_SINGLE_QUOTE_BUT_POSSESSIVE = new RegExp("([".concat(CJK, "])('[^s])"), 'g');
  var SINGLE_QUOTE_CJK = new RegExp("(')([".concat(CJK, "])"), 'g');
  var FIX_POSSESSIVE_SINGLE_QUOTE = new RegExp("([A-Za-z0-9".concat(CJK, "])( )('s)"), 'g');
  var HASH_ANS_CJK_HASH = new RegExp("([".concat(CJK, "])(#)([").concat(CJK, "]+)(#)([").concat(CJK, "])"), 'g');
  var CJK_HASH = new RegExp("([".concat(CJK, "])(#([^ ]))"), 'g');
  var HASH_CJK = new RegExp("(([^ ])#)([".concat(CJK, "])"), 'g');
  var CJK_OPERATOR_ANS = new RegExp("([".concat(CJK, "])([\\+\\-\\*\\/=&\\|<>])([A-Za-z0-9])"), 'g');
  var ANS_OPERATOR_CJK = new RegExp("([A-Za-z0-9])([\\+\\-\\*\\/=&\\|<>])([".concat(CJK, "])"), 'g');
  var FIX_SLASH_AS = /([/]) ([a-z\-_\./]+)/g;
  var FIX_SLASH_AS_SLASH = /([/\.])([A-Za-z\-_\./]+) ([/])/g;
  var CJK_LEFT_BRACKET = new RegExp("([".concat(CJK, "])([\\(\\[\\{<>\u201C])"), 'g');
  var RIGHT_BRACKET_CJK = new RegExp("([\\)\\]\\}<>\u201D])([".concat(CJK, "])"), 'g');
  var FIX_LEFT_BRACKET_ANY_RIGHT_BRACKET = /([\(\[\{<\u201c]+)[ ]*(.+?)[ ]*([\)\]\}>\u201d]+)/;
  var ANS_CJK_LEFT_BRACKET_ANY_RIGHT_BRACKET = new RegExp("([A-Za-z0-9".concat(CJK, "])[ ]*([\u201C])([A-Za-z0-9").concat(CJK, "\\-_ ]+)([\u201D])"), 'g');
  var LEFT_BRACKET_ANY_RIGHT_BRACKET_ANS_CJK = new RegExp("([\u201C])([A-Za-z0-9".concat(CJK, "\\-_ ]+)([\u201D])[ ]*([A-Za-z0-9").concat(CJK, "])"), 'g');
  var AN_LEFT_BRACKET = /([A-Za-z0-9])([\(\[\{])/g;
  var RIGHT_BRACKET_AN = /([\)\]\}])([A-Za-z0-9])/g;
  var CJK_ANS = new RegExp("([".concat(CJK, "])([A-Za-z\u0370-\u03FF0-9@\\$%\\^&\\*\\-\\+\\\\=\\|/\xA1-\xFF\u2150-\u218F\u2700\u2014\u27BF])"), 'g');
  var ANS_CJK = new RegExp("([A-Za-z\u0370-\u03FF0-9~\\$%\\^&\\*\\-\\+\\\\=\\|/!;:,\\.\\?\xA1-\xFF\u2150-\u218F\u2700\u2014\u27BF])([".concat(CJK, "])"), 'g');
  var S_A = /(%)([A-Za-z])/g;
  var MIDDLE_DOT = /([ ]*)([\u00b7\u2022\u2027])([ ]*)/g;

  var Pangu = function () {
    function Pangu() {
      _classCallCheck(this, Pangu);

      this.version = '4.0.7';
    }

    _createClass(Pangu, [{
      key: "convertToFullwidth",
      value: function convertToFullwidth(symbols) {
        return symbols.replace(/~/g, '～').replace(/!/g, '！').replace(/;/g, '；').replace(/:/g, '：').replace(/,/g, '，').replace(/\./g, '。').replace(/\?/g, '？');
      }
    }, {
      key: "spacing",
      value: function spacing(text) {
        if (typeof text !== 'string') {
          console.warn("spacing(text) only accepts string but got ".concat(_typeof(text)));
          return text;
        }

        if (text.length <= 1 || !ANY_CJK.test(text)) {
          return text;
        }

        var self = this;
        var newText = text;
        newText = newText.replace(CONVERT_TO_FULLWIDTH_CJK_SYMBOLS_CJK, function (match, leftCjk, symbols, rightCjk) {
          var fullwidthSymbols = self.convertToFullwidth(symbols);
          return "".concat(leftCjk).concat(fullwidthSymbols).concat(rightCjk);
        });
        newText = newText.replace(CONVERT_TO_FULLWIDTH_CJK_SYMBOLS, function (match, cjk, symbols) {
          var fullwidthSymbols = self.convertToFullwidth(symbols);
          return "".concat(cjk).concat(fullwidthSymbols);
        });
        newText = newText.replace(DOTS_CJK, '$1 $2');
        newText = newText.replace(FIX_CJK_COLON_ANS, '$1：$2');
        newText = newText.replace(CJK_QUOTE, '$1 $2');
        newText = newText.replace(QUOTE_CJK, '$1 $2');
        newText = newText.replace(FIX_QUOTE_ANY_QUOTE, '$1$2$3');
        newText = newText.replace(CJK_SINGLE_QUOTE_BUT_POSSESSIVE, '$1 $2');
        newText = newText.replace(SINGLE_QUOTE_CJK, '$1 $2');
        newText = newText.replace(FIX_POSSESSIVE_SINGLE_QUOTE, "$1's");
        newText = newText.replace(HASH_ANS_CJK_HASH, '$1 $2$3$4 $5');
        newText = newText.replace(CJK_HASH, '$1 $2');
        newText = newText.replace(HASH_CJK, '$1 $3');
        newText = newText.replace(CJK_OPERATOR_ANS, '$1 $2 $3');
        newText = newText.replace(ANS_OPERATOR_CJK, '$1 $2 $3');
        newText = newText.replace(FIX_SLASH_AS, '$1$2');
        newText = newText.replace(FIX_SLASH_AS_SLASH, '$1$2$3');
        newText = newText.replace(CJK_LEFT_BRACKET, '$1 $2');
        newText = newText.replace(RIGHT_BRACKET_CJK, '$1 $2');
        newText = newText.replace(FIX_LEFT_BRACKET_ANY_RIGHT_BRACKET, '$1$2$3');
        newText = newText.replace(ANS_CJK_LEFT_BRACKET_ANY_RIGHT_BRACKET, '$1 $2$3$4');
        newText = newText.replace(LEFT_BRACKET_ANY_RIGHT_BRACKET_ANS_CJK, '$1$2$3 $4');
        newText = newText.replace(AN_LEFT_BRACKET, '$1 $2');
        newText = newText.replace(RIGHT_BRACKET_AN, '$1 $2');
        newText = newText.replace(CJK_ANS, '$1 $2');
        newText = newText.replace(ANS_CJK, '$1 $2');
        newText = newText.replace(S_A, '$1 $2');
        newText = newText.replace(MIDDLE_DOT, '・');
        return newText;
      }
    }, {
      key: "spacingText",
      value: function spacingText(text) {
        var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
        var newText;

        try {
          newText = this.spacing(text);
        } catch (err) {
          callback(err);
          return;
        }

        callback(null, newText);
      }
    }, {
      key: "spacingTextSync",
      value: function spacingTextSync(text) {
        return this.spacing(text);
      }
    }]);

    return Pangu;
  }();

  var pangu = new Pangu();
  module.exports = pangu;
  module.exports.default = pangu;
  module.exports.Pangu = Pangu;
});

/***/ })
/******/ ]);
});

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var pangu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pangu */ "./node_modules/pangu/dist/browser/pangu.js");
/* harmony import */ var pangu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pangu__WEBPACK_IMPORTED_MODULE_0__);


const insertPangu = () => {
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pangu/4.0.7/pangu.min.js';
  script.onload = () => {
      GM_log('script loaded')
      unsafeWindow.window.$pangu = (pangu__WEBPACK_IMPORTED_MODULE_0___default());
  }
  head.appendChild(script);
};

insertPangu();

(function() {
  const createFormatButton = () => {
      const ghostNode = document.querySelector('.ivu-btn-ghost');
      const formatNode = ghostNode.cloneNode(true);
      formatNode.querySelector('.output-menu__btn-text').innerText = "format";
      ghostNode.parentNode.prepend(formatNode);
      formatNode.onclick = formatPage;

  };

  const formatPage = () => {
      const content = document.querySelector('.notebook__content');
      const childs = [...document.querySelectorAll('.cell__editor-wrapper')];

      GM_log(childs.length);
      focusToItem(0, childs, content);
  }

  const focusToItem = (idx, items, content) => {
      if (idx >= items.length) return;
      const child = items[idx];
      child.scrollIntoView();
      child.click();
      content.scrollTop = content.scrollTop - 20;
      GM_log('scroll to:', child, idx);
      setTimeout(() => {
          child.parentNode.parentNode.querySelector('.cell__toolbar').childNodes[2].click();
      }, 0)

      setTimeout(() => {
          focusToItem(idx + 1, items, content);
      }, 2000)
  }

  setTimeout(() =>{

      createFormatButton();

  }, 5000)
  // Your code here...
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLHVCQUF1QjtBQUMvQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQSw0Q0FBNEMsUUFBUTtBQUNwRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1EQUFtRCxRQUFRO0FBQzNEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztB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Ozs7O1VDbnNCRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyw4Q0FBSztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUMsSSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvcm1hdGhleXdoYWxlbm90ZWJvb2svLi9ub2RlX21vZHVsZXMvcGFuZ3UvZGlzdC9icm93c2VyL3Bhbmd1LmpzIiwid2VicGFjazovL2Zvcm1hdGhleXdoYWxlbm90ZWJvb2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZm9ybWF0aGV5d2hhbGVub3RlYm9vay93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9mb3JtYXRoZXl3aGFsZW5vdGVib29rL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mb3JtYXRoZXl3aGFsZW5vdGVib29rL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZm9ybWF0aGV5d2hhbGVub3RlYm9vay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Zvcm1hdGhleXdoYWxlbm90ZWJvb2svLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBwYW5ndS5qc1xuICogLS0tLS0tLS1cbiAqIEB2ZXJzaW9uOiA0LjAuN1xuICogQGhvbWVwYWdlOiBodHRwczovL2dpdGh1Yi5jb20vdmludGEvcGFuZ3UuanNcbiAqIEBsaWNlbnNlOiBNSVRcbiAqIEBhdXRob3I6IFZpbnRhIENoZW4gPHZpbnRhLmNoZW5AZ21haWwuY29tPiAoaHR0cHM6Ly9naXRodWIuY29tL3ZpbnRhKVxuICovXG4oZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcInBhbmd1XCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInBhbmd1XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInBhbmd1XCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLyoqKioqKi8gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gbnM7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXzsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICBpZiAodHJ1ZSkge1xuICAgICEoX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXyA9IFtdLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPSAoZmFjdG9yeSksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fID0gKHR5cGVvZiBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPT09ICdmdW5jdGlvbicgP1xuXHRcdFx0XHQoX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLmFwcGx5KGV4cG9ydHMsIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18pKSA6IF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fICE9PSB1bmRlZmluZWQgJiYgKG1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18pKTtcbiAgfSBlbHNlIHsgdmFyIG1vZDsgfVxufSkodGhpcywgZnVuY3Rpb24gKCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG4gIGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbiAgZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG4gIGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbiAgZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG4gIGZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG4gIGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuICBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG4gIGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbiAgdmFyIF9yZXF1aXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKSxcbiAgICAgIFBhbmd1ID0gX3JlcXVpcmUuUGFuZ3U7XG5cbiAgZnVuY3Rpb24gb25jZShmdW5jKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcyxcbiAgICAgICAgX2FyZ3VtZW50cyA9IGFyZ3VtZW50cztcblxuICAgIHZhciBleGVjdXRlZCA9IGZhbHNlO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZXhlY3V0ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2VsZiA9IF90aGlzO1xuICAgICAgZXhlY3V0ZWQgPSB0cnVlO1xuICAgICAgZnVuYy5hcHBseShzZWxmLCBfYXJndW1lbnRzKTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgZGVsYXksIG11c3RSdW5EZWxheSkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzLFxuICAgICAgICBfYXJndW1lbnRzMiA9IGFyZ3VtZW50cztcblxuICAgIHZhciB0aW1lciA9IG51bGw7XG4gICAgdmFyIHN0YXJ0VGltZSA9IG51bGw7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzZWxmID0gX3RoaXMyO1xuICAgICAgdmFyIGFyZ3MgPSBfYXJndW1lbnRzMjtcbiAgICAgIHZhciBjdXJyZW50VGltZSA9ICtuZXcgRGF0ZSgpO1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcblxuICAgICAgaWYgKCFzdGFydFRpbWUpIHtcbiAgICAgICAgc3RhcnRUaW1lID0gY3VycmVudFRpbWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChjdXJyZW50VGltZSAtIHN0YXJ0VGltZSA+PSBtdXN0UnVuRGVsYXkpIHtcbiAgICAgICAgZnVuYy5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgc3RhcnRUaW1lID0gY3VycmVudFRpbWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGZ1bmMuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICAgIH0sIGRlbGF5KTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgdmFyIEJyb3dzZXJQYW5ndSA9IGZ1bmN0aW9uIChfUGFuZ3UpIHtcbiAgICBfaW5oZXJpdHMoQnJvd3NlclBhbmd1LCBfUGFuZ3UpO1xuXG4gICAgZnVuY3Rpb24gQnJvd3NlclBhbmd1KCkge1xuICAgICAgdmFyIF90aGlzMztcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJyb3dzZXJQYW5ndSk7XG5cbiAgICAgIF90aGlzMyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihCcm93c2VyUGFuZ3UpLmNhbGwodGhpcykpO1xuICAgICAgX3RoaXMzLmJsb2NrVGFncyA9IC9eKGRpdnxwfGgxfGgyfGgzfGg0fGg1fGg2KSQvaTtcbiAgICAgIF90aGlzMy5pZ25vcmVkVGFncyA9IC9eKHNjcmlwdHxjb2RlfHByZXx0ZXh0YXJlYSkkL2k7XG4gICAgICBfdGhpczMucHJlc2VudGF0aW9uYWxUYWdzID0gL14oYnxjb2RlfGRlbHxlbXxpfHN8c3Ryb25nKSQvaTtcbiAgICAgIF90aGlzMy5zcGFjZUxpa2VUYWdzID0gL14oYnJ8aHJ8aXxpbWd8cGFuZ3UpJC9pO1xuICAgICAgX3RoaXMzLnNwYWNlU2Vuc2l0aXZlVGFncyA9IC9eKGF8ZGVsfHByZXxzfHN0cmlrZXx1KSQvaTtcbiAgICAgIF90aGlzMy5pc0F1dG9TcGFjaW5nUGFnZUV4ZWN1dGVkID0gZmFsc2U7XG4gICAgICByZXR1cm4gX3RoaXMzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhCcm93c2VyUGFuZ3UsIFt7XG4gICAgICBrZXk6IFwiaXNDb250ZW50RWRpdGFibGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc0NvbnRlbnRFZGl0YWJsZShub2RlKSB7XG4gICAgICAgIHJldHVybiBub2RlLmlzQ29udGVudEVkaXRhYmxlIHx8IG5vZGUuZ2V0QXR0cmlidXRlICYmIG5vZGUuZ2V0QXR0cmlidXRlKCdnX2VkaXRhYmxlJykgPT09ICd0cnVlJztcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiaXNTcGVjaWZpY1RhZ1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzU3BlY2lmaWNUYWcobm9kZSwgdGFnUmVnZXgpIHtcbiAgICAgICAgcmV0dXJuIG5vZGUgJiYgbm9kZS5ub2RlTmFtZSAmJiBub2RlLm5vZGVOYW1lLnNlYXJjaCh0YWdSZWdleCkgPj0gMDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiaXNJbnNpZGVTcGVjaWZpY1RhZ1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzSW5zaWRlU3BlY2lmaWNUYWcobm9kZSwgdGFnUmVnZXgpIHtcbiAgICAgICAgdmFyIGNoZWNrQ3VycmVudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogZmFsc2U7XG4gICAgICAgIHZhciBjdXJyZW50Tm9kZSA9IG5vZGU7XG5cbiAgICAgICAgaWYgKGNoZWNrQ3VycmVudCkge1xuICAgICAgICAgIGlmICh0aGlzLmlzU3BlY2lmaWNUYWcoY3VycmVudE5vZGUsIHRhZ1JlZ2V4KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUgKGN1cnJlbnROb2RlLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLnBhcmVudE5vZGU7XG5cbiAgICAgICAgICBpZiAodGhpcy5pc1NwZWNpZmljVGFnKGN1cnJlbnROb2RlLCB0YWdSZWdleCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY2FuSWdub3JlTm9kZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNhbklnbm9yZU5vZGUobm9kZSkge1xuICAgICAgICB2YXIgY3VycmVudE5vZGUgPSBub2RlO1xuXG4gICAgICAgIGlmIChjdXJyZW50Tm9kZSAmJiAodGhpcy5pc1NwZWNpZmljVGFnKGN1cnJlbnROb2RlLCB0aGlzLmlnbm9yZWRUYWdzKSB8fCB0aGlzLmlzQ29udGVudEVkaXRhYmxlKGN1cnJlbnROb2RlKSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChjdXJyZW50Tm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5wYXJlbnROb2RlO1xuXG4gICAgICAgICAgaWYgKGN1cnJlbnROb2RlICYmICh0aGlzLmlzU3BlY2lmaWNUYWcoY3VycmVudE5vZGUsIHRoaXMuaWdub3JlZFRhZ3MpIHx8IHRoaXMuaXNDb250ZW50RWRpdGFibGUoY3VycmVudE5vZGUpKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJpc0ZpcnN0VGV4dENoaWxkXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaXNGaXJzdFRleHRDaGlsZChwYXJlbnROb2RlLCB0YXJnZXROb2RlKSB7XG4gICAgICAgIHZhciBjaGlsZE5vZGVzID0gcGFyZW50Tm9kZS5jaGlsZE5vZGVzO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBjaGlsZE5vZGUgPSBjaGlsZE5vZGVzW2ldO1xuXG4gICAgICAgICAgaWYgKGNoaWxkTm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5DT01NRU5UX05PREUgJiYgY2hpbGROb2RlLnRleHRDb250ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gY2hpbGROb2RlID09PSB0YXJnZXROb2RlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiaXNMYXN0VGV4dENoaWxkXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaXNMYXN0VGV4dENoaWxkKHBhcmVudE5vZGUsIHRhcmdldE5vZGUpIHtcbiAgICAgICAgdmFyIGNoaWxkTm9kZXMgPSBwYXJlbnROb2RlLmNoaWxkTm9kZXM7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IGNoaWxkTm9kZXMubGVuZ3RoIC0gMTsgaSA+IC0xOyBpLS0pIHtcbiAgICAgICAgICB2YXIgY2hpbGROb2RlID0gY2hpbGROb2Rlc1tpXTtcblxuICAgICAgICAgIGlmIChjaGlsZE5vZGUubm9kZVR5cGUgIT09IE5vZGUuQ09NTUVOVF9OT0RFICYmIGNoaWxkTm9kZS50ZXh0Q29udGVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGNoaWxkTm9kZSA9PT0gdGFyZ2V0Tm9kZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInNwYWNpbmdOb2RlQnlYUGF0aFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNwYWNpbmdOb2RlQnlYUGF0aCh4UGF0aFF1ZXJ5LCBjb250ZXh0Tm9kZSkge1xuICAgICAgICBpZiAoIShjb250ZXh0Tm9kZSBpbnN0YW5jZW9mIE5vZGUpIHx8IGNvbnRleHROb2RlIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0ZXh0Tm9kZXMgPSBkb2N1bWVudC5ldmFsdWF0ZSh4UGF0aFF1ZXJ5LCBjb250ZXh0Tm9kZSwgbnVsbCwgWFBhdGhSZXN1bHQuT1JERVJFRF9OT0RFX1NOQVBTSE9UX1RZUEUsIG51bGwpO1xuICAgICAgICB2YXIgY3VycmVudFRleHROb2RlO1xuICAgICAgICB2YXIgbmV4dFRleHROb2RlO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSB0ZXh0Tm9kZXMuc25hcHNob3RMZW5ndGggLSAxOyBpID4gLTE7IC0taSkge1xuICAgICAgICAgIGN1cnJlbnRUZXh0Tm9kZSA9IHRleHROb2Rlcy5zbmFwc2hvdEl0ZW0oaSk7XG5cbiAgICAgICAgICBpZiAodGhpcy5pc1NwZWNpZmljVGFnKGN1cnJlbnRUZXh0Tm9kZS5wYXJlbnROb2RlLCB0aGlzLnByZXNlbnRhdGlvbmFsVGFncykgJiYgIXRoaXMuaXNJbnNpZGVTcGVjaWZpY1RhZyhjdXJyZW50VGV4dE5vZGUucGFyZW50Tm9kZSwgdGhpcy5pZ25vcmVkVGFncykpIHtcbiAgICAgICAgICAgIHZhciBlbGVtZW50Tm9kZSA9IGN1cnJlbnRUZXh0Tm9kZS5wYXJlbnROb2RlO1xuXG4gICAgICAgICAgICBpZiAoZWxlbWVudE5vZGUucHJldmlvdXNTaWJsaW5nKSB7XG4gICAgICAgICAgICAgIHZhciBwcmV2aW91c1NpYmxpbmcgPSBlbGVtZW50Tm9kZS5wcmV2aW91c1NpYmxpbmc7XG5cbiAgICAgICAgICAgICAgaWYgKHByZXZpb3VzU2libGluZy5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGVzdFRleHQgPSBwcmV2aW91c1NpYmxpbmcuZGF0YS5zdWJzdHIoLTEpICsgY3VycmVudFRleHROb2RlLmRhdGEudG9TdHJpbmcoKS5jaGFyQXQoMCk7XG4gICAgICAgICAgICAgICAgdmFyIHRlc3ROZXdUZXh0ID0gdGhpcy5zcGFjaW5nKHRlc3RUZXh0KTtcblxuICAgICAgICAgICAgICAgIGlmICh0ZXN0VGV4dCAhPT0gdGVzdE5ld1RleHQpIHtcbiAgICAgICAgICAgICAgICAgIHByZXZpb3VzU2libGluZy5kYXRhID0gXCJcIi5jb25jYXQocHJldmlvdXNTaWJsaW5nLmRhdGEsIFwiIFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGVsZW1lbnROb2RlLm5leHRTaWJsaW5nKSB7XG4gICAgICAgICAgICAgIHZhciBuZXh0U2libGluZyA9IGVsZW1lbnROb2RlLm5leHRTaWJsaW5nO1xuXG4gICAgICAgICAgICAgIGlmIChuZXh0U2libGluZy5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgICAgICAgICAgICB2YXIgX3Rlc3RUZXh0ID0gY3VycmVudFRleHROb2RlLmRhdGEuc3Vic3RyKC0xKSArIG5leHRTaWJsaW5nLmRhdGEudG9TdHJpbmcoKS5jaGFyQXQoMCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgX3Rlc3ROZXdUZXh0ID0gdGhpcy5zcGFjaW5nKF90ZXN0VGV4dCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoX3Rlc3RUZXh0ICE9PSBfdGVzdE5ld1RleHQpIHtcbiAgICAgICAgICAgICAgICAgIG5leHRTaWJsaW5nLmRhdGEgPSBcIiBcIi5jb25jYXQobmV4dFNpYmxpbmcuZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMuY2FuSWdub3JlTm9kZShjdXJyZW50VGV4dE5vZGUpKSB7XG4gICAgICAgICAgICBuZXh0VGV4dE5vZGUgPSBjdXJyZW50VGV4dE5vZGU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgbmV3VGV4dCA9IHRoaXMuc3BhY2luZyhjdXJyZW50VGV4dE5vZGUuZGF0YSk7XG5cbiAgICAgICAgICBpZiAoY3VycmVudFRleHROb2RlLmRhdGEgIT09IG5ld1RleHQpIHtcbiAgICAgICAgICAgIGN1cnJlbnRUZXh0Tm9kZS5kYXRhID0gbmV3VGV4dDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobmV4dFRleHROb2RlKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFRleHROb2RlLm5leHRTaWJsaW5nICYmIGN1cnJlbnRUZXh0Tm9kZS5uZXh0U2libGluZy5ub2RlTmFtZS5zZWFyY2godGhpcy5zcGFjZUxpa2VUYWdzKSA+PSAwKSB7XG4gICAgICAgICAgICAgIG5leHRUZXh0Tm9kZSA9IGN1cnJlbnRUZXh0Tm9kZTtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBfdGVzdFRleHQyID0gY3VycmVudFRleHROb2RlLmRhdGEudG9TdHJpbmcoKS5zdWJzdHIoLTEpICsgbmV4dFRleHROb2RlLmRhdGEudG9TdHJpbmcoKS5zdWJzdHIoMCwgMSk7XG5cbiAgICAgICAgICAgIHZhciBfdGVzdE5ld1RleHQyID0gdGhpcy5zcGFjaW5nKF90ZXN0VGV4dDIpO1xuXG4gICAgICAgICAgICBpZiAoX3Rlc3ROZXdUZXh0MiAhPT0gX3Rlc3RUZXh0Mikge1xuICAgICAgICAgICAgICB2YXIgbmV4dE5vZGUgPSBuZXh0VGV4dE5vZGU7XG5cbiAgICAgICAgICAgICAgd2hpbGUgKG5leHROb2RlLnBhcmVudE5vZGUgJiYgbmV4dE5vZGUubm9kZU5hbWUuc2VhcmNoKHRoaXMuc3BhY2VTZW5zaXRpdmVUYWdzKSA9PT0gLTEgJiYgdGhpcy5pc0ZpcnN0VGV4dENoaWxkKG5leHROb2RlLnBhcmVudE5vZGUsIG5leHROb2RlKSkge1xuICAgICAgICAgICAgICAgIG5leHROb2RlID0gbmV4dE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHZhciBjdXJyZW50Tm9kZSA9IGN1cnJlbnRUZXh0Tm9kZTtcblxuICAgICAgICAgICAgICB3aGlsZSAoY3VycmVudE5vZGUucGFyZW50Tm9kZSAmJiBjdXJyZW50Tm9kZS5ub2RlTmFtZS5zZWFyY2godGhpcy5zcGFjZVNlbnNpdGl2ZVRhZ3MpID09PSAtMSAmJiB0aGlzLmlzTGFzdFRleHRDaGlsZChjdXJyZW50Tm9kZS5wYXJlbnROb2RlLCBjdXJyZW50Tm9kZSkpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoY3VycmVudE5vZGUubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudE5vZGUubmV4dFNpYmxpbmcubm9kZU5hbWUuc2VhcmNoKHRoaXMuc3BhY2VMaWtlVGFncykgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgbmV4dFRleHROb2RlID0gY3VycmVudFRleHROb2RlO1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKGN1cnJlbnROb2RlLm5vZGVOYW1lLnNlYXJjaCh0aGlzLmJsb2NrVGFncykgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5leHROb2RlLm5vZGVOYW1lLnNlYXJjaCh0aGlzLnNwYWNlU2Vuc2l0aXZlVGFncykgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICBpZiAobmV4dE5vZGUubm9kZU5hbWUuc2VhcmNoKHRoaXMuaWdub3JlZFRhZ3MpID09PSAtMSAmJiBuZXh0Tm9kZS5ub2RlTmFtZS5zZWFyY2godGhpcy5ibG9ja1RhZ3MpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dFRleHROb2RlLnByZXZpb3VzU2libGluZykge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0VGV4dE5vZGUucHJldmlvdXNTaWJsaW5nLm5vZGVOYW1lLnNlYXJjaCh0aGlzLnNwYWNlTGlrZVRhZ3MpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFRleHROb2RlLmRhdGEgPSBcIiBcIi5jb25jYXQobmV4dFRleHROb2RlLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY2FuSWdub3JlTm9kZShuZXh0VGV4dE5vZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0VGV4dE5vZGUuZGF0YSA9IFwiIFwiLmNvbmNhdChuZXh0VGV4dE5vZGUuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50Tm9kZS5ub2RlTmFtZS5zZWFyY2godGhpcy5zcGFjZVNlbnNpdGl2ZVRhZ3MpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgY3VycmVudFRleHROb2RlLmRhdGEgPSBcIlwiLmNvbmNhdChjdXJyZW50VGV4dE5vZGUuZGF0YSwgXCIgXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICB2YXIgcGFuZ3VTcGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Bhbmd1Jyk7XG4gICAgICAgICAgICAgICAgICBwYW5ndVNwYWNlLmlubmVySFRNTCA9ICcgJztcblxuICAgICAgICAgICAgICAgICAgaWYgKG5leHROb2RlLnByZXZpb3VzU2libGluZykge1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dE5vZGUucHJldmlvdXNTaWJsaW5nLm5vZGVOYW1lLnNlYXJjaCh0aGlzLnNwYWNlTGlrZVRhZ3MpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgIG5leHROb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHBhbmd1U3BhY2UsIG5leHROb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dE5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUocGFuZ3VTcGFjZSwgbmV4dE5vZGUpO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBpZiAoIXBhbmd1U3BhY2UucHJldmlvdXNFbGVtZW50U2libGluZykge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGFuZ3VTcGFjZS5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcGFuZ3VTcGFjZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHBhbmd1U3BhY2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dFRleHROb2RlID0gY3VycmVudFRleHROb2RlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInNwYWNpbmdOb2RlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc3BhY2luZ05vZGUoY29udGV4dE5vZGUpIHtcbiAgICAgICAgdmFyIHhQYXRoUXVlcnkgPSAnLi8vKi90ZXh0KClbbm9ybWFsaXplLXNwYWNlKC4pXSc7XG5cbiAgICAgICAgaWYgKGNvbnRleHROb2RlLmNoaWxkcmVuICYmIGNvbnRleHROb2RlLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHhQYXRoUXVlcnkgPSAnLi8vdGV4dCgpW25vcm1hbGl6ZS1zcGFjZSguKV0nO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zcGFjaW5nTm9kZUJ5WFBhdGgoeFBhdGhRdWVyeSwgY29udGV4dE5vZGUpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzcGFjaW5nRWxlbWVudEJ5SWRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzcGFjaW5nRWxlbWVudEJ5SWQoaWROYW1lKSB7XG4gICAgICAgIHZhciB4UGF0aFF1ZXJ5ID0gXCJpZChcXFwiXCIuY29uY2F0KGlkTmFtZSwgXCJcXFwiKS8vdGV4dCgpXCIpO1xuICAgICAgICB0aGlzLnNwYWNpbmdOb2RlQnlYUGF0aCh4UGF0aFF1ZXJ5LCBkb2N1bWVudCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInNwYWNpbmdFbGVtZW50QnlDbGFzc05hbWVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzcGFjaW5nRWxlbWVudEJ5Q2xhc3NOYW1lKGNsYXNzTmFtZSkge1xuICAgICAgICB2YXIgeFBhdGhRdWVyeSA9IFwiLy8qW2NvbnRhaW5zKGNvbmNhdChcXFwiIFxcXCIsIG5vcm1hbGl6ZS1zcGFjZShAY2xhc3MpLCBcXFwiIFxcXCIpLCBcXFwiXCIuY29uY2F0KGNsYXNzTmFtZSwgXCJcXFwiKV0vL3RleHQoKVwiKTtcbiAgICAgICAgdGhpcy5zcGFjaW5nTm9kZUJ5WFBhdGgoeFBhdGhRdWVyeSwgZG9jdW1lbnQpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzcGFjaW5nRWxlbWVudEJ5VGFnTmFtZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNwYWNpbmdFbGVtZW50QnlUYWdOYW1lKHRhZ05hbWUpIHtcbiAgICAgICAgdmFyIHhQYXRoUXVlcnkgPSBcIi8vXCIuY29uY2F0KHRhZ05hbWUsIFwiLy90ZXh0KClcIik7XG4gICAgICAgIHRoaXMuc3BhY2luZ05vZGVCeVhQYXRoKHhQYXRoUXVlcnksIGRvY3VtZW50KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic3BhY2luZ1BhZ2VUaXRsZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNwYWNpbmdQYWdlVGl0bGUoKSB7XG4gICAgICAgIHZhciB4UGF0aFF1ZXJ5ID0gJy9odG1sL2hlYWQvdGl0bGUvdGV4dCgpJztcbiAgICAgICAgdGhpcy5zcGFjaW5nTm9kZUJ5WFBhdGgoeFBhdGhRdWVyeSwgZG9jdW1lbnQpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzcGFjaW5nUGFnZUJvZHlcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzcGFjaW5nUGFnZUJvZHkoKSB7XG4gICAgICAgIHZhciB4UGF0aFF1ZXJ5ID0gJy9odG1sL2JvZHkvLyovdGV4dCgpW25vcm1hbGl6ZS1zcGFjZSguKV0nO1xuICAgICAgICBbJ3NjcmlwdCcsICdzdHlsZScsICd0ZXh0YXJlYSddLmZvckVhY2goZnVuY3Rpb24gKHRhZykge1xuICAgICAgICAgIHhQYXRoUXVlcnkgPSBcIlwiLmNvbmNhdCh4UGF0aFF1ZXJ5LCBcIlt0cmFuc2xhdGUobmFtZSguLiksXFxcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaXFxcIixcXFwiYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpcXFwiKSE9XFxcIlwiKS5jb25jYXQodGFnLCBcIlxcXCJdXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zcGFjaW5nTm9kZUJ5WFBhdGgoeFBhdGhRdWVyeSwgZG9jdW1lbnQpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzcGFjaW5nUGFnZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNwYWNpbmdQYWdlKCkge1xuICAgICAgICB0aGlzLnNwYWNpbmdQYWdlVGl0bGUoKTtcbiAgICAgICAgdGhpcy5zcGFjaW5nUGFnZUJvZHkoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiYXV0b1NwYWNpbmdQYWdlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gYXV0b1NwYWNpbmdQYWdlKCkge1xuICAgICAgICB2YXIgcGFnZURlbGF5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAxMDAwO1xuICAgICAgICB2YXIgbm9kZURlbGF5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiA1MDA7XG4gICAgICAgIHZhciBub2RlTWF4V2FpdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogMjAwMDtcblxuICAgICAgICBpZiAoIShkb2N1bWVudC5ib2R5IGluc3RhbmNlb2YgTm9kZSkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc0F1dG9TcGFjaW5nUGFnZUV4ZWN1dGVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc0F1dG9TcGFjaW5nUGFnZUV4ZWN1dGVkID0gdHJ1ZTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgb25jZVNwYWNpbmdQYWdlID0gb25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2VsZi5zcGFjaW5nUGFnZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHZpZGVvcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCd2aWRlbycpO1xuXG4gICAgICAgIGlmICh2aWRlb3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBvbmNlU3BhY2luZ1BhZ2UoKTtcbiAgICAgICAgICB9LCBwYWdlRGVsYXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmlkZW9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdmlkZW8gPSB2aWRlb3NbaV07XG5cbiAgICAgICAgICAgIGlmICh2aWRlby5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIG9uY2VTcGFjaW5nUGFnZSgpO1xuICAgICAgICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlZGRhdGEnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIG9uY2VTcGFjaW5nUGFnZSgpO1xuICAgICAgICAgICAgICB9LCA0MDAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBxdWV1ZSA9IFtdO1xuICAgICAgICB2YXIgZGVib3VuY2VkU3BhY2luZ05vZGVzID0gZGVib3VuY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHdoaWxlIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gcXVldWUuc2hpZnQoKTtcblxuICAgICAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgICAgc2VsZi5zcGFjaW5nTm9kZShub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIG5vZGVEZWxheSwge1xuICAgICAgICAgICdtYXhXYWl0Jzogbm9kZU1heFdhaXRcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBtdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucywgb2JzZXJ2ZXIpIHtcbiAgICAgICAgICBtdXRhdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAobXV0YXRpb24pIHtcbiAgICAgICAgICAgIHN3aXRjaCAobXV0YXRpb24udHlwZSkge1xuICAgICAgICAgICAgICBjYXNlICdjaGlsZExpc3QnOlxuICAgICAgICAgICAgICAgIG11dGF0aW9uLmFkZGVkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXVlLnB1c2gobm9kZSk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXVlLnB1c2gobm9kZS5wYXJlbnROb2RlKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlICdjaGFyYWN0ZXJEYXRhJzpcbiAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IG11dGF0aW9uLnRhcmdldDtcblxuICAgICAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgICAgICAgICAgICAgcXVldWUucHVzaChub2RlLnBhcmVudE5vZGUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZGVib3VuY2VkU3BhY2luZ05vZGVzKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuYm9keSwge1xuICAgICAgICAgIGNoYXJhY3RlckRhdGE6IHRydWUsXG4gICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgIHN1YnRyZWU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEJyb3dzZXJQYW5ndTtcbiAgfShQYW5ndSk7XG5cbiAgdmFyIHBhbmd1ID0gbmV3IEJyb3dzZXJQYW5ndSgpO1xuICBtb2R1bGUuZXhwb3J0cyA9IHBhbmd1O1xuICBtb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gcGFuZ3U7XG4gIG1vZHVsZS5leHBvcnRzLlBhbmd1ID0gQnJvd3NlclBhbmd1O1xufSk7XG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXzsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICBpZiAodHJ1ZSkge1xuICAgICEoX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXyA9IFtdLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPSAoZmFjdG9yeSksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fID0gKHR5cGVvZiBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPT09ICdmdW5jdGlvbicgP1xuXHRcdFx0XHQoX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLmFwcGx5KGV4cG9ydHMsIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18pKSA6IF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fICE9PSB1bmRlZmluZWQgJiYgKG1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18pKTtcbiAgfSBlbHNlIHsgdmFyIG1vZDsgfVxufSkodGhpcywgZnVuY3Rpb24gKCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG4gIGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbiAgZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG4gIGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbiAgdmFyIENKSyA9IFwiXFx1MkU4MC1cXHUyRUZGXFx1MkYwMC1cXHUyRkRGXFx1MzA0MC1cXHUzMDlGXFx1MzBBMC1cXHUzMEZBXFx1MzBGQy1cXHUzMEZGXFx1MzEwMC1cXHUzMTJGXFx1MzIwMC1cXHUzMkZGXFx1MzQwMC1cXHU0REJGXFx1NEUwMC1cXHU5RkZGXFx1RjkwMC1cXHVGQUZGXCI7XG4gIHZhciBBTllfQ0pLID0gbmV3IFJlZ0V4cChcIltcIi5jb25jYXQoQ0pLLCBcIl1cIikpO1xuICB2YXIgQ09OVkVSVF9UT19GVUxMV0lEVEhfQ0pLX1NZTUJPTFNfQ0pLID0gbmV3IFJlZ0V4cChcIihbXCIuY29uY2F0KENKSywgXCJdKVsgXSooW1xcXFw6XSt8XFxcXC4pWyBdKihbXCIpLmNvbmNhdChDSkssIFwiXSlcIiksICdnJyk7XG4gIHZhciBDT05WRVJUX1RPX0ZVTExXSURUSF9DSktfU1lNQk9MUyA9IG5ldyBSZWdFeHAoXCIoW1wiLmNvbmNhdChDSkssIFwiXSlbIF0qKFt+XFxcXCE7LFxcXFw/XSspWyBdKlwiKSwgJ2cnKTtcbiAgdmFyIERPVFNfQ0pLID0gbmV3IFJlZ0V4cChcIihbXFxcXC5dezIsfXxcXHUyMDI2KShbXCIuY29uY2F0KENKSywgXCJdKVwiKSwgJ2cnKTtcbiAgdmFyIEZJWF9DSktfQ09MT05fQU5TID0gbmV3IFJlZ0V4cChcIihbXCIuY29uY2F0KENKSywgXCJdKVxcXFw6KFtBLVowLTlcXFxcKFxcXFwpXSlcIiksICdnJyk7XG4gIHZhciBDSktfUVVPVEUgPSBuZXcgUmVnRXhwKFwiKFtcIi5jb25jYXQoQ0pLLCBcIl0pKFtgXFxcIlxcdTA1RjRdKVwiKSwgJ2cnKTtcbiAgdmFyIFFVT1RFX0NKSyA9IG5ldyBSZWdFeHAoXCIoW2BcXFwiXFx1MDVGNF0pKFtcIi5jb25jYXQoQ0pLLCBcIl0pXCIpLCAnZycpO1xuICB2YXIgRklYX1FVT1RFX0FOWV9RVU9URSA9IC8oW2BcIlxcdTA1ZjRdKylbIF0qKC4rPylbIF0qKFtgXCJcXHUwNWY0XSspL2c7XG4gIHZhciBDSktfU0lOR0xFX1FVT1RFX0JVVF9QT1NTRVNTSVZFID0gbmV3IFJlZ0V4cChcIihbXCIuY29uY2F0KENKSywgXCJdKSgnW15zXSlcIiksICdnJyk7XG4gIHZhciBTSU5HTEVfUVVPVEVfQ0pLID0gbmV3IFJlZ0V4cChcIignKShbXCIuY29uY2F0KENKSywgXCJdKVwiKSwgJ2cnKTtcbiAgdmFyIEZJWF9QT1NTRVNTSVZFX1NJTkdMRV9RVU9URSA9IG5ldyBSZWdFeHAoXCIoW0EtWmEtejAtOVwiLmNvbmNhdChDSkssIFwiXSkoICkoJ3MpXCIpLCAnZycpO1xuICB2YXIgSEFTSF9BTlNfQ0pLX0hBU0ggPSBuZXcgUmVnRXhwKFwiKFtcIi5jb25jYXQoQ0pLLCBcIl0pKCMpKFtcIikuY29uY2F0KENKSywgXCJdKykoIykoW1wiKS5jb25jYXQoQ0pLLCBcIl0pXCIpLCAnZycpO1xuICB2YXIgQ0pLX0hBU0ggPSBuZXcgUmVnRXhwKFwiKFtcIi5jb25jYXQoQ0pLLCBcIl0pKCMoW14gXSkpXCIpLCAnZycpO1xuICB2YXIgSEFTSF9DSksgPSBuZXcgUmVnRXhwKFwiKChbXiBdKSMpKFtcIi5jb25jYXQoQ0pLLCBcIl0pXCIpLCAnZycpO1xuICB2YXIgQ0pLX09QRVJBVE9SX0FOUyA9IG5ldyBSZWdFeHAoXCIoW1wiLmNvbmNhdChDSkssIFwiXSkoW1xcXFwrXFxcXC1cXFxcKlxcXFwvPSZcXFxcfDw+XSkoW0EtWmEtejAtOV0pXCIpLCAnZycpO1xuICB2YXIgQU5TX09QRVJBVE9SX0NKSyA9IG5ldyBSZWdFeHAoXCIoW0EtWmEtejAtOV0pKFtcXFxcK1xcXFwtXFxcXCpcXFxcLz0mXFxcXHw8Pl0pKFtcIi5jb25jYXQoQ0pLLCBcIl0pXCIpLCAnZycpO1xuICB2YXIgRklYX1NMQVNIX0FTID0gLyhbL10pIChbYS16XFwtX1xcLi9dKykvZztcbiAgdmFyIEZJWF9TTEFTSF9BU19TTEFTSCA9IC8oWy9cXC5dKShbQS1aYS16XFwtX1xcLi9dKykgKFsvXSkvZztcbiAgdmFyIENKS19MRUZUX0JSQUNLRVQgPSBuZXcgUmVnRXhwKFwiKFtcIi5jb25jYXQoQ0pLLCBcIl0pKFtcXFxcKFxcXFxbXFxcXHs8PlxcdTIwMUNdKVwiKSwgJ2cnKTtcbiAgdmFyIFJJR0hUX0JSQUNLRVRfQ0pLID0gbmV3IFJlZ0V4cChcIihbXFxcXClcXFxcXVxcXFx9PD5cXHUyMDFEXSkoW1wiLmNvbmNhdChDSkssIFwiXSlcIiksICdnJyk7XG4gIHZhciBGSVhfTEVGVF9CUkFDS0VUX0FOWV9SSUdIVF9CUkFDS0VUID0gLyhbXFwoXFxbXFx7PFxcdTIwMWNdKylbIF0qKC4rPylbIF0qKFtcXClcXF1cXH0+XFx1MjAxZF0rKS87XG4gIHZhciBBTlNfQ0pLX0xFRlRfQlJBQ0tFVF9BTllfUklHSFRfQlJBQ0tFVCA9IG5ldyBSZWdFeHAoXCIoW0EtWmEtejAtOVwiLmNvbmNhdChDSkssIFwiXSlbIF0qKFtcXHUyMDFDXSkoW0EtWmEtejAtOVwiKS5jb25jYXQoQ0pLLCBcIlxcXFwtXyBdKykoW1xcdTIwMURdKVwiKSwgJ2cnKTtcbiAgdmFyIExFRlRfQlJBQ0tFVF9BTllfUklHSFRfQlJBQ0tFVF9BTlNfQ0pLID0gbmV3IFJlZ0V4cChcIihbXFx1MjAxQ10pKFtBLVphLXowLTlcIi5jb25jYXQoQ0pLLCBcIlxcXFwtXyBdKykoW1xcdTIwMURdKVsgXSooW0EtWmEtejAtOVwiKS5jb25jYXQoQ0pLLCBcIl0pXCIpLCAnZycpO1xuICB2YXIgQU5fTEVGVF9CUkFDS0VUID0gLyhbQS1aYS16MC05XSkoW1xcKFxcW1xce10pL2c7XG4gIHZhciBSSUdIVF9CUkFDS0VUX0FOID0gLyhbXFwpXFxdXFx9XSkoW0EtWmEtejAtOV0pL2c7XG4gIHZhciBDSktfQU5TID0gbmV3IFJlZ0V4cChcIihbXCIuY29uY2F0KENKSywgXCJdKShbQS1aYS16XFx1MDM3MC1cXHUwM0ZGMC05QFxcXFwkJVxcXFxeJlxcXFwqXFxcXC1cXFxcK1xcXFxcXFxcPVxcXFx8L1xceEExLVxceEZGXFx1MjE1MC1cXHUyMThGXFx1MjcwMFxcdTIwMTRcXHUyN0JGXSlcIiksICdnJyk7XG4gIHZhciBBTlNfQ0pLID0gbmV3IFJlZ0V4cChcIihbQS1aYS16XFx1MDM3MC1cXHUwM0ZGMC05flxcXFwkJVxcXFxeJlxcXFwqXFxcXC1cXFxcK1xcXFxcXFxcPVxcXFx8LyE7OixcXFxcLlxcXFw/XFx4QTEtXFx4RkZcXHUyMTUwLVxcdTIxOEZcXHUyNzAwXFx1MjAxNFxcdTI3QkZdKShbXCIuY29uY2F0KENKSywgXCJdKVwiKSwgJ2cnKTtcbiAgdmFyIFNfQSA9IC8oJSkoW0EtWmEtel0pL2c7XG4gIHZhciBNSURETEVfRE9UID0gLyhbIF0qKShbXFx1MDBiN1xcdTIwMjJcXHUyMDI3XSkoWyBdKikvZztcblxuICB2YXIgUGFuZ3UgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUGFuZ3UoKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGFuZ3UpO1xuXG4gICAgICB0aGlzLnZlcnNpb24gPSAnNC4wLjcnO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhQYW5ndSwgW3tcbiAgICAgIGtleTogXCJjb252ZXJ0VG9GdWxsd2lkdGhcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb252ZXJ0VG9GdWxsd2lkdGgoc3ltYm9scykge1xuICAgICAgICByZXR1cm4gc3ltYm9scy5yZXBsYWNlKC9+L2csICfvvZ4nKS5yZXBsYWNlKC8hL2csICfvvIEnKS5yZXBsYWNlKC87L2csICfvvJsnKS5yZXBsYWNlKC86L2csICfvvJonKS5yZXBsYWNlKC8sL2csICfvvIwnKS5yZXBsYWNlKC9cXC4vZywgJ+OAgicpLnJlcGxhY2UoL1xcPy9nLCAn77yfJyk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInNwYWNpbmdcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzcGFjaW5nKHRleHQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0ZXh0ICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcInNwYWNpbmcodGV4dCkgb25seSBhY2NlcHRzIHN0cmluZyBidXQgZ290IFwiLmNvbmNhdChfdHlwZW9mKHRleHQpKSk7XG4gICAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGV4dC5sZW5ndGggPD0gMSB8fCAhQU5ZX0NKSy50ZXN0KHRleHQpKSB7XG4gICAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBuZXdUZXh0ID0gdGV4dDtcbiAgICAgICAgbmV3VGV4dCA9IG5ld1RleHQucmVwbGFjZShDT05WRVJUX1RPX0ZVTExXSURUSF9DSktfU1lNQk9MU19DSkssIGZ1bmN0aW9uIChtYXRjaCwgbGVmdENqaywgc3ltYm9scywgcmlnaHRDamspIHtcbiAgICAgICAgICB2YXIgZnVsbHdpZHRoU3ltYm9scyA9IHNlbGYuY29udmVydFRvRnVsbHdpZHRoKHN5bWJvbHMpO1xuICAgICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChsZWZ0Q2prKS5jb25jYXQoZnVsbHdpZHRoU3ltYm9scykuY29uY2F0KHJpZ2h0Q2prKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG5ld1RleHQgPSBuZXdUZXh0LnJlcGxhY2UoQ09OVkVSVF9UT19GVUxMV0lEVEhfQ0pLX1NZTUJPTFMsIGZ1bmN0aW9uIChtYXRjaCwgY2prLCBzeW1ib2xzKSB7XG4gICAgICAgICAgdmFyIGZ1bGx3aWR0aFN5bWJvbHMgPSBzZWxmLmNvbnZlcnRUb0Z1bGx3aWR0aChzeW1ib2xzKTtcbiAgICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQoY2prKS5jb25jYXQoZnVsbHdpZHRoU3ltYm9scyk7XG4gICAgICAgIH0pO1xuICAgICAgICBuZXdUZXh0ID0gbmV3VGV4dC5yZXBsYWNlKERPVFNfQ0pLLCAnJDEgJDInKTtcbiAgICAgICAgbmV3VGV4dCA9IG5ld1RleHQucmVwbGFjZShGSVhfQ0pLX0NPTE9OX0FOUywgJyQx77yaJDInKTtcbiAgICAgICAgbmV3VGV4dCA9IG5ld1RleHQucmVwbGFjZShDSktfUVVPVEUsICckMSAkMicpO1xuICAgICAgICBuZXdUZXh0ID0gbmV3VGV4dC5yZXBsYWNlKFFVT1RFX0NKSywgJyQxICQyJyk7XG4gICAgICAgIG5ld1RleHQgPSBuZXdUZXh0LnJlcGxhY2UoRklYX1FVT1RFX0FOWV9RVU9URSwgJyQxJDIkMycpO1xuICAgICAgICBuZXdUZXh0ID0gbmV3VGV4dC5yZXBsYWNlKENKS19TSU5HTEVfUVVPVEVfQlVUX1BPU1NFU1NJVkUsICckMSAkMicpO1xuICAgICAgICBuZXdUZXh0ID0gbmV3VGV4dC5yZXBsYWNlKFNJTkdMRV9RVU9URV9DSkssICckMSAkMicpO1xuICAgICAgICBuZXdUZXh0ID0gbmV3VGV4dC5yZXBsYWNlKEZJWF9QT1NTRVNTSVZFX1NJTkdMRV9RVU9URSwgXCIkMSdzXCIpO1xuICAgICAgICBuZXdUZXh0ID0gbmV3VGV4dC5yZXBsYWNlKEhBU0hfQU5TX0NKS19IQVNILCAnJDEgJDIkMyQ0ICQ1Jyk7XG4gICAgICAgIG5ld1RleHQgPSBuZXdUZXh0LnJlcGxhY2UoQ0pLX0hBU0gsICckMSAkMicpO1xuICAgICAgICBuZXdUZXh0ID0gbmV3VGV4dC5yZXBsYWNlKEhBU0hfQ0pLLCAnJDEgJDMnKTtcbiAgICAgICAgbmV3VGV4dCA9IG5ld1RleHQucmVwbGFjZShDSktfT1BFUkFUT1JfQU5TLCAnJDEgJDIgJDMnKTtcbiAgICAgICAgbmV3VGV4dCA9IG5ld1RleHQucmVwbGFjZShBTlNfT1BFUkFUT1JfQ0pLLCAnJDEgJDIgJDMnKTtcbiAgICAgICAgbmV3VGV4dCA9IG5ld1RleHQucmVwbGFjZShGSVhfU0xBU0hfQVMsICckMSQyJyk7XG4gICAgICAgIG5ld1RleHQgPSBuZXdUZXh0LnJlcGxhY2UoRklYX1NMQVNIX0FTX1NMQVNILCAnJDEkMiQzJyk7XG4gICAgICAgIG5ld1RleHQgPSBuZXdUZXh0LnJlcGxhY2UoQ0pLX0xFRlRfQlJBQ0tFVCwgJyQxICQyJyk7XG4gICAgICAgIG5ld1RleHQgPSBuZXdUZXh0LnJlcGxhY2UoUklHSFRfQlJBQ0tFVF9DSkssICckMSAkMicpO1xuICAgICAgICBuZXdUZXh0ID0gbmV3VGV4dC5yZXBsYWNlKEZJWF9MRUZUX0JSQUNLRVRfQU5ZX1JJR0hUX0JSQUNLRVQsICckMSQyJDMnKTtcbiAgICAgICAgbmV3VGV4dCA9IG5ld1RleHQucmVwbGFjZShBTlNfQ0pLX0xFRlRfQlJBQ0tFVF9BTllfUklHSFRfQlJBQ0tFVCwgJyQxICQyJDMkNCcpO1xuICAgICAgICBuZXdUZXh0ID0gbmV3VGV4dC5yZXBsYWNlKExFRlRfQlJBQ0tFVF9BTllfUklHSFRfQlJBQ0tFVF9BTlNfQ0pLLCAnJDEkMiQzICQ0Jyk7XG4gICAgICAgIG5ld1RleHQgPSBuZXdUZXh0LnJlcGxhY2UoQU5fTEVGVF9CUkFDS0VULCAnJDEgJDInKTtcbiAgICAgICAgbmV3VGV4dCA9IG5ld1RleHQucmVwbGFjZShSSUdIVF9CUkFDS0VUX0FOLCAnJDEgJDInKTtcbiAgICAgICAgbmV3VGV4dCA9IG5ld1RleHQucmVwbGFjZShDSktfQU5TLCAnJDEgJDInKTtcbiAgICAgICAgbmV3VGV4dCA9IG5ld1RleHQucmVwbGFjZShBTlNfQ0pLLCAnJDEgJDInKTtcbiAgICAgICAgbmV3VGV4dCA9IG5ld1RleHQucmVwbGFjZShTX0EsICckMSAkMicpO1xuICAgICAgICBuZXdUZXh0ID0gbmV3VGV4dC5yZXBsYWNlKE1JRERMRV9ET1QsICfjg7snKTtcbiAgICAgICAgcmV0dXJuIG5ld1RleHQ7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInNwYWNpbmdUZXh0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc3BhY2luZ1RleHQodGV4dCkge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICB2YXIgbmV3VGV4dDtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIG5ld1RleHQgPSB0aGlzLnNwYWNpbmcodGV4dCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FsbGJhY2sobnVsbCwgbmV3VGV4dCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInNwYWNpbmdUZXh0U3luY1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNwYWNpbmdUZXh0U3luYyh0ZXh0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNwYWNpbmcodGV4dCk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFBhbmd1O1xuICB9KCk7XG5cbiAgdmFyIHBhbmd1ID0gbmV3IFBhbmd1KCk7XG4gIG1vZHVsZS5leHBvcnRzID0gcGFuZ3U7XG4gIG1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBwYW5ndTtcbiAgbW9kdWxlLmV4cG9ydHMuUGFuZ3UgPSBQYW5ndTtcbn0pO1xuXG4vKioqLyB9KVxuLyoqKioqKi8gXSk7XG59KTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHBhbmd1IGZyb20gJ3Bhbmd1JztcclxuXHJcbmNvbnN0IGluc2VydFBhbmd1ID0gKCkgPT4ge1xyXG4gIHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcclxuICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcclxuICBzY3JpcHQuc3JjID0gJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3Bhbmd1LzQuMC43L3Bhbmd1Lm1pbi5qcyc7XHJcbiAgc2NyaXB0Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgR01fbG9nKCdzY3JpcHQgbG9hZGVkJylcclxuICAgICAgdW5zYWZlV2luZG93LndpbmRvdy4kcGFuZ3UgPSBwYW5ndTtcclxuICB9XHJcbiAgaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG59O1xyXG5cclxuaW5zZXJ0UGFuZ3UoKTtcclxuXHJcbihmdW5jdGlvbigpIHtcclxuICBjb25zdCBjcmVhdGVGb3JtYXRCdXR0b24gPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGdob3N0Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdnUtYnRuLWdob3N0Jyk7XHJcbiAgICAgIGNvbnN0IGZvcm1hdE5vZGUgPSBnaG9zdE5vZGUuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICBmb3JtYXROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5vdXRwdXQtbWVudV9fYnRuLXRleHQnKS5pbm5lclRleHQgPSBcImZvcm1hdFwiO1xyXG4gICAgICBnaG9zdE5vZGUucGFyZW50Tm9kZS5wcmVwZW5kKGZvcm1hdE5vZGUpO1xyXG4gICAgICBmb3JtYXROb2RlLm9uY2xpY2sgPSBmb3JtYXRQYWdlO1xyXG5cclxuICB9O1xyXG5cclxuICBjb25zdCBmb3JtYXRQYWdlID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGVib29rX19jb250ZW50Jyk7XHJcbiAgICAgIGNvbnN0IGNoaWxkcyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbF9fZWRpdG9yLXdyYXBwZXInKV07XHJcblxyXG4gICAgICBHTV9sb2coY2hpbGRzLmxlbmd0aCk7XHJcbiAgICAgIGZvY3VzVG9JdGVtKDAsIGNoaWxkcywgY29udGVudCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBmb2N1c1RvSXRlbSA9IChpZHgsIGl0ZW1zLCBjb250ZW50KSA9PiB7XHJcbiAgICAgIGlmIChpZHggPj0gaXRlbXMubGVuZ3RoKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IGNoaWxkID0gaXRlbXNbaWR4XTtcclxuICAgICAgY2hpbGQuc2Nyb2xsSW50b1ZpZXcoKTtcclxuICAgICAgY2hpbGQuY2xpY2soKTtcclxuICAgICAgY29udGVudC5zY3JvbGxUb3AgPSBjb250ZW50LnNjcm9sbFRvcCAtIDIwO1xyXG4gICAgICBHTV9sb2coJ3Njcm9sbCB0bzonLCBjaGlsZCwgaWR4KTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBjaGlsZC5wYXJlbnROb2RlLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLmNlbGxfX3Rvb2xiYXInKS5jaGlsZE5vZGVzWzJdLmNsaWNrKCk7XHJcbiAgICAgIH0sIDApXHJcblxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGZvY3VzVG9JdGVtKGlkeCArIDEsIGl0ZW1zLCBjb250ZW50KTtcclxuICAgICAgfSwgMjAwMClcclxuICB9XHJcblxyXG4gIHNldFRpbWVvdXQoKCkgPT57XHJcblxyXG4gICAgICBjcmVhdGVGb3JtYXRCdXR0b24oKTtcclxuXHJcbiAgfSwgNTAwMClcclxuICAvLyBZb3VyIGNvZGUgaGVyZS4uLlxyXG59KSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==