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
// ==UserScript==
// @name         format heywhale
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.heywhale.com/notebooks/run/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=heywhale.com
// @grant        GM_log
// @grant        unsafeWindow
// ==/UserScript==




window.$pangu = (pangu__WEBPACK_IMPORTED_MODULE_0___default());

const insertPangu = () => {
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pangu/4.0.7/pangu.min.js';
  script.onload = () => {
      GM_log('script loaded')
      unsafeWindow.pangu = (pangu__WEBPACK_IMPORTED_MODULE_0___default());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLHVCQUF1QjtBQUMvQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQSw0Q0FBNEMsUUFBUTtBQUNwRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1EQUFtRCxRQUFRO0FBQzNEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztB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Ozs7O1VDbnNCRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMwQjtBQUMxQjtBQUNBLGdCQUFnQiw4Q0FBSztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDhDQUFLO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9ybWF0aGV5d2hhbGVub3RlYm9vay8uL25vZGVfbW9kdWxlcy9wYW5ndS9kaXN0L2Jyb3dzZXIvcGFuZ3UuanMiLCJ3ZWJwYWNrOi8vZm9ybWF0aGV5d2hhbGVub3RlYm9vay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mb3JtYXRoZXl3aGFsZW5vdGVib29rL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Zvcm1hdGhleXdoYWxlbm90ZWJvb2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Zvcm1hdGhleXdoYWxlbm90ZWJvb2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mb3JtYXRoZXl3aGFsZW5vdGVib29rL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZm9ybWF0aGV5d2hhbGVub3RlYm9vay8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIHBhbmd1LmpzXG4gKiAtLS0tLS0tLVxuICogQHZlcnNpb246IDQuMC43XG4gKiBAaG9tZXBhZ2U6IGh0dHBzOi8vZ2l0aHViLmNvbS92aW50YS9wYW5ndS5qc1xuICogQGxpY2Vuc2U6IE1JVFxuICogQGF1dGhvcjogVmludGEgQ2hlbiA8dmludGEuY2hlbkBnbWFpbC5jb20+IChodHRwczovL2dpdGh1Yi5jb20vdmludGEpXG4gKi9cbihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwicGFuZ3VcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wicGFuZ3VcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wicGFuZ3VcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4vKioqKioqLyBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vKioqKioqLyBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuLyoqKioqKi8gXHRcdHJldHVybiBucztcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0cnVlKSB7XG4gICAgIShfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fID0gW10sIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9IChmYWN0b3J5KSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gPSAodHlwZW9mIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9PT0gJ2Z1bmN0aW9uJyA/XG5cdFx0XHRcdChfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18uYXBwbHkoZXhwb3J0cywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXykpIDogX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fKSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gIT09IHVuZGVmaW5lZCAmJiAobW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXykpO1xuICB9IGVsc2UgeyB2YXIgbW9kOyB9XG59KSh0aGlzLCBmdW5jdGlvbiAoKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbiAgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuICBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbiAgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuICBmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbiAgZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbiAgZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG4gIGZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbiAgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuICB2YXIgX3JlcXVpcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpLFxuICAgICAgUGFuZ3UgPSBfcmVxdWlyZS5QYW5ndTtcblxuICBmdW5jdGlvbiBvbmNlKGZ1bmMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzLFxuICAgICAgICBfYXJndW1lbnRzID0gYXJndW1lbnRzO1xuXG4gICAgdmFyIGV4ZWN1dGVkID0gZmFsc2U7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChleGVjdXRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBzZWxmID0gX3RoaXM7XG4gICAgICBleGVjdXRlZCA9IHRydWU7XG4gICAgICBmdW5jLmFwcGx5KHNlbGYsIF9hcmd1bWVudHMpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBkZWJvdW5jZShmdW5jLCBkZWxheSwgbXVzdFJ1bkRlbGF5KSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXMsXG4gICAgICAgIF9hcmd1bWVudHMyID0gYXJndW1lbnRzO1xuXG4gICAgdmFyIHRpbWVyID0gbnVsbDtcbiAgICB2YXIgc3RhcnRUaW1lID0gbnVsbDtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHNlbGYgPSBfdGhpczI7XG4gICAgICB2YXIgYXJncyA9IF9hcmd1bWVudHMyO1xuICAgICAgdmFyIGN1cnJlbnRUaW1lID0gK25ldyBEYXRlKCk7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuXG4gICAgICBpZiAoIXN0YXJ0VGltZSkge1xuICAgICAgICBzdGFydFRpbWUgPSBjdXJyZW50VGltZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGN1cnJlbnRUaW1lIC0gc3RhcnRUaW1lID49IG11c3RSdW5EZWxheSkge1xuICAgICAgICBmdW5jLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICBzdGFydFRpbWUgPSBjdXJyZW50VGltZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZnVuYy5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICB2YXIgQnJvd3NlclBhbmd1ID0gZnVuY3Rpb24gKF9QYW5ndSkge1xuICAgIF9pbmhlcml0cyhCcm93c2VyUGFuZ3UsIF9QYW5ndSk7XG5cbiAgICBmdW5jdGlvbiBCcm93c2VyUGFuZ3UoKSB7XG4gICAgICB2YXIgX3RoaXMzO1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQnJvd3NlclBhbmd1KTtcblxuICAgICAgX3RoaXMzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKEJyb3dzZXJQYW5ndSkuY2FsbCh0aGlzKSk7XG4gICAgICBfdGhpczMuYmxvY2tUYWdzID0gL14oZGl2fHB8aDF8aDJ8aDN8aDR8aDV8aDYpJC9pO1xuICAgICAgX3RoaXMzLmlnbm9yZWRUYWdzID0gL14oc2NyaXB0fGNvZGV8cHJlfHRleHRhcmVhKSQvaTtcbiAgICAgIF90aGlzMy5wcmVzZW50YXRpb25hbFRhZ3MgPSAvXihifGNvZGV8ZGVsfGVtfGl8c3xzdHJvbmcpJC9pO1xuICAgICAgX3RoaXMzLnNwYWNlTGlrZVRhZ3MgPSAvXihicnxocnxpfGltZ3xwYW5ndSkkL2k7XG4gICAgICBfdGhpczMuc3BhY2VTZW5zaXRpdmVUYWdzID0gL14oYXxkZWx8cHJlfHN8c3RyaWtlfHUpJC9pO1xuICAgICAgX3RoaXMzLmlzQXV0b1NwYWNpbmdQYWdlRXhlY3V0ZWQgPSBmYWxzZTtcbiAgICAgIHJldHVybiBfdGhpczM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEJyb3dzZXJQYW5ndSwgW3tcbiAgICAgIGtleTogXCJpc0NvbnRlbnRFZGl0YWJsZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzQ29udGVudEVkaXRhYmxlKG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIG5vZGUuaXNDb250ZW50RWRpdGFibGUgfHwgbm9kZS5nZXRBdHRyaWJ1dGUgJiYgbm9kZS5nZXRBdHRyaWJ1dGUoJ2dfZWRpdGFibGUnKSA9PT0gJ3RydWUnO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJpc1NwZWNpZmljVGFnXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaXNTcGVjaWZpY1RhZyhub2RlLCB0YWdSZWdleCkge1xuICAgICAgICByZXR1cm4gbm9kZSAmJiBub2RlLm5vZGVOYW1lICYmIG5vZGUubm9kZU5hbWUuc2VhcmNoKHRhZ1JlZ2V4KSA+PSAwO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJpc0luc2lkZVNwZWNpZmljVGFnXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaXNJbnNpZGVTcGVjaWZpY1RhZyhub2RlLCB0YWdSZWdleCkge1xuICAgICAgICB2YXIgY2hlY2tDdXJyZW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBmYWxzZTtcbiAgICAgICAgdmFyIGN1cnJlbnROb2RlID0gbm9kZTtcblxuICAgICAgICBpZiAoY2hlY2tDdXJyZW50KSB7XG4gICAgICAgICAgaWYgKHRoaXMuaXNTcGVjaWZpY1RhZyhjdXJyZW50Tm9kZSwgdGFnUmVnZXgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAoY3VycmVudE5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUucGFyZW50Tm9kZTtcblxuICAgICAgICAgIGlmICh0aGlzLmlzU3BlY2lmaWNUYWcoY3VycmVudE5vZGUsIHRhZ1JlZ2V4KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjYW5JZ25vcmVOb2RlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY2FuSWdub3JlTm9kZShub2RlKSB7XG4gICAgICAgIHZhciBjdXJyZW50Tm9kZSA9IG5vZGU7XG5cbiAgICAgICAgaWYgKGN1cnJlbnROb2RlICYmICh0aGlzLmlzU3BlY2lmaWNUYWcoY3VycmVudE5vZGUsIHRoaXMuaWdub3JlZFRhZ3MpIHx8IHRoaXMuaXNDb250ZW50RWRpdGFibGUoY3VycmVudE5vZGUpKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUgKGN1cnJlbnROb2RlLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLnBhcmVudE5vZGU7XG5cbiAgICAgICAgICBpZiAoY3VycmVudE5vZGUgJiYgKHRoaXMuaXNTcGVjaWZpY1RhZyhjdXJyZW50Tm9kZSwgdGhpcy5pZ25vcmVkVGFncykgfHwgdGhpcy5pc0NvbnRlbnRFZGl0YWJsZShjdXJyZW50Tm9kZSkpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImlzRmlyc3RUZXh0Q2hpbGRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc0ZpcnN0VGV4dENoaWxkKHBhcmVudE5vZGUsIHRhcmdldE5vZGUpIHtcbiAgICAgICAgdmFyIGNoaWxkTm9kZXMgPSBwYXJlbnROb2RlLmNoaWxkTm9kZXM7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIGNoaWxkTm9kZSA9IGNoaWxkTm9kZXNbaV07XG5cbiAgICAgICAgICBpZiAoY2hpbGROb2RlLm5vZGVUeXBlICE9PSBOb2RlLkNPTU1FTlRfTk9ERSAmJiBjaGlsZE5vZGUudGV4dENvbnRlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBjaGlsZE5vZGUgPT09IHRhcmdldE5vZGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJpc0xhc3RUZXh0Q2hpbGRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc0xhc3RUZXh0Q2hpbGQocGFyZW50Tm9kZSwgdGFyZ2V0Tm9kZSkge1xuICAgICAgICB2YXIgY2hpbGROb2RlcyA9IHBhcmVudE5vZGUuY2hpbGROb2RlcztcblxuICAgICAgICBmb3IgKHZhciBpID0gY2hpbGROb2Rlcy5sZW5ndGggLSAxOyBpID4gLTE7IGktLSkge1xuICAgICAgICAgIHZhciBjaGlsZE5vZGUgPSBjaGlsZE5vZGVzW2ldO1xuXG4gICAgICAgICAgaWYgKGNoaWxkTm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5DT01NRU5UX05PREUgJiYgY2hpbGROb2RlLnRleHRDb250ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gY2hpbGROb2RlID09PSB0YXJnZXROb2RlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic3BhY2luZ05vZGVCeVhQYXRoXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc3BhY2luZ05vZGVCeVhQYXRoKHhQYXRoUXVlcnksIGNvbnRleHROb2RlKSB7XG4gICAgICAgIGlmICghKGNvbnRleHROb2RlIGluc3RhbmNlb2YgTm9kZSkgfHwgY29udGV4dE5vZGUgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRleHROb2RlcyA9IGRvY3VtZW50LmV2YWx1YXRlKHhQYXRoUXVlcnksIGNvbnRleHROb2RlLCBudWxsLCBYUGF0aFJlc3VsdC5PUkRFUkVEX05PREVfU05BUFNIT1RfVFlQRSwgbnVsbCk7XG4gICAgICAgIHZhciBjdXJyZW50VGV4dE5vZGU7XG4gICAgICAgIHZhciBuZXh0VGV4dE5vZGU7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IHRleHROb2Rlcy5zbmFwc2hvdExlbmd0aCAtIDE7IGkgPiAtMTsgLS1pKSB7XG4gICAgICAgICAgY3VycmVudFRleHROb2RlID0gdGV4dE5vZGVzLnNuYXBzaG90SXRlbShpKTtcblxuICAgICAgICAgIGlmICh0aGlzLmlzU3BlY2lmaWNUYWcoY3VycmVudFRleHROb2RlLnBhcmVudE5vZGUsIHRoaXMucHJlc2VudGF0aW9uYWxUYWdzKSAmJiAhdGhpcy5pc0luc2lkZVNwZWNpZmljVGFnKGN1cnJlbnRUZXh0Tm9kZS5wYXJlbnROb2RlLCB0aGlzLmlnbm9yZWRUYWdzKSkge1xuICAgICAgICAgICAgdmFyIGVsZW1lbnROb2RlID0gY3VycmVudFRleHROb2RlLnBhcmVudE5vZGU7XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50Tm9kZS5wcmV2aW91c1NpYmxpbmcpIHtcbiAgICAgICAgICAgICAgdmFyIHByZXZpb3VzU2libGluZyA9IGVsZW1lbnROb2RlLnByZXZpb3VzU2libGluZztcblxuICAgICAgICAgICAgICBpZiAocHJldmlvdXNTaWJsaW5nLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgICAgICAgICAgIHZhciB0ZXN0VGV4dCA9IHByZXZpb3VzU2libGluZy5kYXRhLnN1YnN0cigtMSkgKyBjdXJyZW50VGV4dE5vZGUuZGF0YS50b1N0cmluZygpLmNoYXJBdCgwKTtcbiAgICAgICAgICAgICAgICB2YXIgdGVzdE5ld1RleHQgPSB0aGlzLnNwYWNpbmcodGVzdFRleHQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRlc3RUZXh0ICE9PSB0ZXN0TmV3VGV4dCkge1xuICAgICAgICAgICAgICAgICAgcHJldmlvdXNTaWJsaW5nLmRhdGEgPSBcIlwiLmNvbmNhdChwcmV2aW91c1NpYmxpbmcuZGF0YSwgXCIgXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZWxlbWVudE5vZGUubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgICAgICAgdmFyIG5leHRTaWJsaW5nID0gZWxlbWVudE5vZGUubmV4dFNpYmxpbmc7XG5cbiAgICAgICAgICAgICAgaWYgKG5leHRTaWJsaW5nLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgICAgICAgICAgIHZhciBfdGVzdFRleHQgPSBjdXJyZW50VGV4dE5vZGUuZGF0YS5zdWJzdHIoLTEpICsgbmV4dFNpYmxpbmcuZGF0YS50b1N0cmluZygpLmNoYXJBdCgwKTtcblxuICAgICAgICAgICAgICAgIHZhciBfdGVzdE5ld1RleHQgPSB0aGlzLnNwYWNpbmcoX3Rlc3RUZXh0KTtcblxuICAgICAgICAgICAgICAgIGlmIChfdGVzdFRleHQgIT09IF90ZXN0TmV3VGV4dCkge1xuICAgICAgICAgICAgICAgICAgbmV4dFNpYmxpbmcuZGF0YSA9IFwiIFwiLmNvbmNhdChuZXh0U2libGluZy5kYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5jYW5JZ25vcmVOb2RlKGN1cnJlbnRUZXh0Tm9kZSkpIHtcbiAgICAgICAgICAgIG5leHRUZXh0Tm9kZSA9IGN1cnJlbnRUZXh0Tm9kZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBuZXdUZXh0ID0gdGhpcy5zcGFjaW5nKGN1cnJlbnRUZXh0Tm9kZS5kYXRhKTtcblxuICAgICAgICAgIGlmIChjdXJyZW50VGV4dE5vZGUuZGF0YSAhPT0gbmV3VGV4dCkge1xuICAgICAgICAgICAgY3VycmVudFRleHROb2RlLmRhdGEgPSBuZXdUZXh0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChuZXh0VGV4dE5vZGUpIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50VGV4dE5vZGUubmV4dFNpYmxpbmcgJiYgY3VycmVudFRleHROb2RlLm5leHRTaWJsaW5nLm5vZGVOYW1lLnNlYXJjaCh0aGlzLnNwYWNlTGlrZVRhZ3MpID49IDApIHtcbiAgICAgICAgICAgICAgbmV4dFRleHROb2RlID0gY3VycmVudFRleHROb2RlO1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIF90ZXN0VGV4dDIgPSBjdXJyZW50VGV4dE5vZGUuZGF0YS50b1N0cmluZygpLnN1YnN0cigtMSkgKyBuZXh0VGV4dE5vZGUuZGF0YS50b1N0cmluZygpLnN1YnN0cigwLCAxKTtcblxuICAgICAgICAgICAgdmFyIF90ZXN0TmV3VGV4dDIgPSB0aGlzLnNwYWNpbmcoX3Rlc3RUZXh0Mik7XG5cbiAgICAgICAgICAgIGlmIChfdGVzdE5ld1RleHQyICE9PSBfdGVzdFRleHQyKSB7XG4gICAgICAgICAgICAgIHZhciBuZXh0Tm9kZSA9IG5leHRUZXh0Tm9kZTtcblxuICAgICAgICAgICAgICB3aGlsZSAobmV4dE5vZGUucGFyZW50Tm9kZSAmJiBuZXh0Tm9kZS5ub2RlTmFtZS5zZWFyY2godGhpcy5zcGFjZVNlbnNpdGl2ZVRhZ3MpID09PSAtMSAmJiB0aGlzLmlzRmlyc3RUZXh0Q2hpbGQobmV4dE5vZGUucGFyZW50Tm9kZSwgbmV4dE5vZGUpKSB7XG4gICAgICAgICAgICAgICAgbmV4dE5vZGUgPSBuZXh0Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdmFyIGN1cnJlbnROb2RlID0gY3VycmVudFRleHROb2RlO1xuXG4gICAgICAgICAgICAgIHdoaWxlIChjdXJyZW50Tm9kZS5wYXJlbnROb2RlICYmIGN1cnJlbnROb2RlLm5vZGVOYW1lLnNlYXJjaCh0aGlzLnNwYWNlU2Vuc2l0aXZlVGFncykgPT09IC0xICYmIHRoaXMuaXNMYXN0VGV4dENoaWxkKGN1cnJlbnROb2RlLnBhcmVudE5vZGUsIGN1cnJlbnROb2RlKSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChjdXJyZW50Tm9kZS5uZXh0U2libGluZykge1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Tm9kZS5uZXh0U2libGluZy5ub2RlTmFtZS5zZWFyY2godGhpcy5zcGFjZUxpa2VUYWdzKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICBuZXh0VGV4dE5vZGUgPSBjdXJyZW50VGV4dE5vZGU7XG4gICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoY3VycmVudE5vZGUubm9kZU5hbWUuc2VhcmNoKHRoaXMuYmxvY2tUYWdzKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBpZiAobmV4dE5vZGUubm9kZU5hbWUuc2VhcmNoKHRoaXMuc3BhY2VTZW5zaXRpdmVUYWdzKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChuZXh0Tm9kZS5ub2RlTmFtZS5zZWFyY2godGhpcy5pZ25vcmVkVGFncykgPT09IC0xICYmIG5leHROb2RlLm5vZGVOYW1lLnNlYXJjaCh0aGlzLmJsb2NrVGFncykgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0VGV4dE5vZGUucHJldmlvdXNTaWJsaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRUZXh0Tm9kZS5wcmV2aW91c1NpYmxpbmcubm9kZU5hbWUuc2VhcmNoKHRoaXMuc3BhY2VMaWtlVGFncykgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0VGV4dE5vZGUuZGF0YSA9IFwiIFwiLmNvbmNhdChuZXh0VGV4dE5vZGUuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5jYW5JZ25vcmVOb2RlKG5leHRUZXh0Tm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRUZXh0Tm9kZS5kYXRhID0gXCIgXCIuY29uY2F0KG5leHRUZXh0Tm9kZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnROb2RlLm5vZGVOYW1lLnNlYXJjaCh0aGlzLnNwYWNlU2Vuc2l0aXZlVGFncykgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICBjdXJyZW50VGV4dE5vZGUuZGF0YSA9IFwiXCIuY29uY2F0KGN1cnJlbnRUZXh0Tm9kZS5kYXRhLCBcIiBcIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHZhciBwYW5ndVNwYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncGFuZ3UnKTtcbiAgICAgICAgICAgICAgICAgIHBhbmd1U3BhY2UuaW5uZXJIVE1MID0gJyAnO1xuXG4gICAgICAgICAgICAgICAgICBpZiAobmV4dE5vZGUucHJldmlvdXNTaWJsaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0Tm9kZS5wcmV2aW91c1NpYmxpbmcubm9kZU5hbWUuc2VhcmNoKHRoaXMuc3BhY2VMaWtlVGFncykgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgbmV4dE5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUocGFuZ3VTcGFjZSwgbmV4dE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXh0Tm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShwYW5ndVNwYWNlLCBuZXh0Tm9kZSk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGlmICghcGFuZ3VTcGFjZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYW5ndVNwYWNlLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICBwYW5ndVNwYWNlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocGFuZ3VTcGFjZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0VGV4dE5vZGUgPSBjdXJyZW50VGV4dE5vZGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic3BhY2luZ05vZGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzcGFjaW5nTm9kZShjb250ZXh0Tm9kZSkge1xuICAgICAgICB2YXIgeFBhdGhRdWVyeSA9ICcuLy8qL3RleHQoKVtub3JtYWxpemUtc3BhY2UoLildJztcblxuICAgICAgICBpZiAoY29udGV4dE5vZGUuY2hpbGRyZW4gJiYgY29udGV4dE5vZGUuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgeFBhdGhRdWVyeSA9ICcuLy90ZXh0KClbbm9ybWFsaXplLXNwYWNlKC4pXSc7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNwYWNpbmdOb2RlQnlYUGF0aCh4UGF0aFF1ZXJ5LCBjb250ZXh0Tm9kZSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInNwYWNpbmdFbGVtZW50QnlJZFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNwYWNpbmdFbGVtZW50QnlJZChpZE5hbWUpIHtcbiAgICAgICAgdmFyIHhQYXRoUXVlcnkgPSBcImlkKFxcXCJcIi5jb25jYXQoaWROYW1lLCBcIlxcXCIpLy90ZXh0KClcIik7XG4gICAgICAgIHRoaXMuc3BhY2luZ05vZGVCeVhQYXRoKHhQYXRoUXVlcnksIGRvY3VtZW50KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic3BhY2luZ0VsZW1lbnRCeUNsYXNzTmFtZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNwYWNpbmdFbGVtZW50QnlDbGFzc05hbWUoY2xhc3NOYW1lKSB7XG4gICAgICAgIHZhciB4UGF0aFF1ZXJ5ID0gXCIvLypbY29udGFpbnMoY29uY2F0KFxcXCIgXFxcIiwgbm9ybWFsaXplLXNwYWNlKEBjbGFzcyksIFxcXCIgXFxcIiksIFxcXCJcIi5jb25jYXQoY2xhc3NOYW1lLCBcIlxcXCIpXS8vdGV4dCgpXCIpO1xuICAgICAgICB0aGlzLnNwYWNpbmdOb2RlQnlYUGF0aCh4UGF0aFF1ZXJ5LCBkb2N1bWVudCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInNwYWNpbmdFbGVtZW50QnlUYWdOYW1lXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc3BhY2luZ0VsZW1lbnRCeVRhZ05hbWUodGFnTmFtZSkge1xuICAgICAgICB2YXIgeFBhdGhRdWVyeSA9IFwiLy9cIi5jb25jYXQodGFnTmFtZSwgXCIvL3RleHQoKVwiKTtcbiAgICAgICAgdGhpcy5zcGFjaW5nTm9kZUJ5WFBhdGgoeFBhdGhRdWVyeSwgZG9jdW1lbnQpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzcGFjaW5nUGFnZVRpdGxlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc3BhY2luZ1BhZ2VUaXRsZSgpIHtcbiAgICAgICAgdmFyIHhQYXRoUXVlcnkgPSAnL2h0bWwvaGVhZC90aXRsZS90ZXh0KCknO1xuICAgICAgICB0aGlzLnNwYWNpbmdOb2RlQnlYUGF0aCh4UGF0aFF1ZXJ5LCBkb2N1bWVudCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInNwYWNpbmdQYWdlQm9keVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNwYWNpbmdQYWdlQm9keSgpIHtcbiAgICAgICAgdmFyIHhQYXRoUXVlcnkgPSAnL2h0bWwvYm9keS8vKi90ZXh0KClbbm9ybWFsaXplLXNwYWNlKC4pXSc7XG4gICAgICAgIFsnc2NyaXB0JywgJ3N0eWxlJywgJ3RleHRhcmVhJ10uZm9yRWFjaChmdW5jdGlvbiAodGFnKSB7XG4gICAgICAgICAgeFBhdGhRdWVyeSA9IFwiXCIuY29uY2F0KHhQYXRoUXVlcnksIFwiW3RyYW5zbGF0ZShuYW1lKC4uKSxcXFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpcXFwiLFxcXCJhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5elxcXCIpIT1cXFwiXCIpLmNvbmNhdCh0YWcsIFwiXFxcIl1cIik7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNwYWNpbmdOb2RlQnlYUGF0aCh4UGF0aFF1ZXJ5LCBkb2N1bWVudCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInNwYWNpbmdQYWdlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc3BhY2luZ1BhZ2UoKSB7XG4gICAgICAgIHRoaXMuc3BhY2luZ1BhZ2VUaXRsZSgpO1xuICAgICAgICB0aGlzLnNwYWNpbmdQYWdlQm9keSgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJhdXRvU3BhY2luZ1BhZ2VcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBhdXRvU3BhY2luZ1BhZ2UoKSB7XG4gICAgICAgIHZhciBwYWdlRGVsYXkgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDEwMDA7XG4gICAgICAgIHZhciBub2RlRGVsYXkgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDUwMDtcbiAgICAgICAgdmFyIG5vZGVNYXhXYWl0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiAyMDAwO1xuXG4gICAgICAgIGlmICghKGRvY3VtZW50LmJvZHkgaW5zdGFuY2VvZiBOb2RlKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlzQXV0b1NwYWNpbmdQYWdlRXhlY3V0ZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzQXV0b1NwYWNpbmdQYWdlRXhlY3V0ZWQgPSB0cnVlO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBvbmNlU3BhY2luZ1BhZ2UgPSBvbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzZWxmLnNwYWNpbmdQYWdlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgdmlkZW9zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3ZpZGVvJyk7XG5cbiAgICAgICAgaWYgKHZpZGVvcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIG9uY2VTcGFjaW5nUGFnZSgpO1xuICAgICAgICAgIH0sIHBhZ2VEZWxheSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2aWRlb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB2aWRlbyA9IHZpZGVvc1tpXTtcblxuICAgICAgICAgICAgaWYgKHZpZGVvLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgb25jZVNwYWNpbmdQYWdlKCk7XG4gICAgICAgICAgICAgIH0sIDMwMDApO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVkZGF0YScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgb25jZVNwYWNpbmdQYWdlKCk7XG4gICAgICAgICAgICAgIH0sIDQwMDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHF1ZXVlID0gW107XG4gICAgICAgIHZhciBkZWJvdW5jZWRTcGFjaW5nTm9kZXMgPSBkZWJvdW5jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIG5vZGUgPSBxdWV1ZS5zaGlmdCgpO1xuXG4gICAgICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgICBzZWxmLnNwYWNpbmdOb2RlKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgbm9kZURlbGF5LCB7XG4gICAgICAgICAgJ21heFdhaXQnOiBub2RlTWF4V2FpdFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIG11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zLCBvYnNlcnZlcikge1xuICAgICAgICAgIG11dGF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChtdXRhdGlvbikge1xuICAgICAgICAgICAgc3dpdGNoIChtdXRhdGlvbi50eXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgJ2NoaWxkTGlzdCc6XG4gICAgICAgICAgICAgICAgbXV0YXRpb24uYWRkZWROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVldWUucHVzaChub2RlKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVldWUucHVzaChub2RlLnBhcmVudE5vZGUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgJ2NoYXJhY3RlckRhdGEnOlxuICAgICAgICAgICAgICAgIHZhciBub2RlID0gbXV0YXRpb24udGFyZ2V0O1xuXG4gICAgICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgICBxdWV1ZS5wdXNoKG5vZGUucGFyZW50Tm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBkZWJvdW5jZWRTcGFjaW5nTm9kZXMoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCB7XG4gICAgICAgICAgY2hhcmFjdGVyRGF0YTogdHJ1ZSxcbiAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgc3VidHJlZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQnJvd3NlclBhbmd1O1xuICB9KFBhbmd1KTtcblxuICB2YXIgcGFuZ3UgPSBuZXcgQnJvd3NlclBhbmd1KCk7XG4gIG1vZHVsZS5leHBvcnRzID0gcGFuZ3U7XG4gIG1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBwYW5ndTtcbiAgbW9kdWxlLmV4cG9ydHMuUGFuZ3UgPSBCcm93c2VyUGFuZ3U7XG59KTtcblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0cnVlKSB7XG4gICAgIShfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fID0gW10sIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9IChmYWN0b3J5KSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gPSAodHlwZW9mIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9PT0gJ2Z1bmN0aW9uJyA/XG5cdFx0XHRcdChfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18uYXBwbHkoZXhwb3J0cywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXykpIDogX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fKSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gIT09IHVuZGVmaW5lZCAmJiAobW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXykpO1xuICB9IGVsc2UgeyB2YXIgbW9kOyB9XG59KSh0aGlzLCBmdW5jdGlvbiAoKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbiAgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuICBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbiAgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuICB2YXIgQ0pLID0gXCJcXHUyRTgwLVxcdTJFRkZcXHUyRjAwLVxcdTJGREZcXHUzMDQwLVxcdTMwOUZcXHUzMEEwLVxcdTMwRkFcXHUzMEZDLVxcdTMwRkZcXHUzMTAwLVxcdTMxMkZcXHUzMjAwLVxcdTMyRkZcXHUzNDAwLVxcdTREQkZcXHU0RTAwLVxcdTlGRkZcXHVGOTAwLVxcdUZBRkZcIjtcbiAgdmFyIEFOWV9DSksgPSBuZXcgUmVnRXhwKFwiW1wiLmNvbmNhdChDSkssIFwiXVwiKSk7XG4gIHZhciBDT05WRVJUX1RPX0ZVTExXSURUSF9DSktfU1lNQk9MU19DSksgPSBuZXcgUmVnRXhwKFwiKFtcIi5jb25jYXQoQ0pLLCBcIl0pWyBdKihbXFxcXDpdK3xcXFxcLilbIF0qKFtcIikuY29uY2F0KENKSywgXCJdKVwiKSwgJ2cnKTtcbiAgdmFyIENPTlZFUlRfVE9fRlVMTFdJRFRIX0NKS19TWU1CT0xTID0gbmV3IFJlZ0V4cChcIihbXCIuY29uY2F0KENKSywgXCJdKVsgXSooW35cXFxcITssXFxcXD9dKylbIF0qXCIpLCAnZycpO1xuICB2YXIgRE9UU19DSksgPSBuZXcgUmVnRXhwKFwiKFtcXFxcLl17Mix9fFxcdTIwMjYpKFtcIi5jb25jYXQoQ0pLLCBcIl0pXCIpLCAnZycpO1xuICB2YXIgRklYX0NKS19DT0xPTl9BTlMgPSBuZXcgUmVnRXhwKFwiKFtcIi5jb25jYXQoQ0pLLCBcIl0pXFxcXDooW0EtWjAtOVxcXFwoXFxcXCldKVwiKSwgJ2cnKTtcbiAgdmFyIENKS19RVU9URSA9IG5ldyBSZWdFeHAoXCIoW1wiLmNvbmNhdChDSkssIFwiXSkoW2BcXFwiXFx1MDVGNF0pXCIpLCAnZycpO1xuICB2YXIgUVVPVEVfQ0pLID0gbmV3IFJlZ0V4cChcIihbYFxcXCJcXHUwNUY0XSkoW1wiLmNvbmNhdChDSkssIFwiXSlcIiksICdnJyk7XG4gIHZhciBGSVhfUVVPVEVfQU5ZX1FVT1RFID0gLyhbYFwiXFx1MDVmNF0rKVsgXSooLis/KVsgXSooW2BcIlxcdTA1ZjRdKykvZztcbiAgdmFyIENKS19TSU5HTEVfUVVPVEVfQlVUX1BPU1NFU1NJVkUgPSBuZXcgUmVnRXhwKFwiKFtcIi5jb25jYXQoQ0pLLCBcIl0pKCdbXnNdKVwiKSwgJ2cnKTtcbiAgdmFyIFNJTkdMRV9RVU9URV9DSksgPSBuZXcgUmVnRXhwKFwiKCcpKFtcIi5jb25jYXQoQ0pLLCBcIl0pXCIpLCAnZycpO1xuICB2YXIgRklYX1BPU1NFU1NJVkVfU0lOR0xFX1FVT1RFID0gbmV3IFJlZ0V4cChcIihbQS1aYS16MC05XCIuY29uY2F0KENKSywgXCJdKSggKSgncylcIiksICdnJyk7XG4gIHZhciBIQVNIX0FOU19DSktfSEFTSCA9IG5ldyBSZWdFeHAoXCIoW1wiLmNvbmNhdChDSkssIFwiXSkoIykoW1wiKS5jb25jYXQoQ0pLLCBcIl0rKSgjKShbXCIpLmNvbmNhdChDSkssIFwiXSlcIiksICdnJyk7XG4gIHZhciBDSktfSEFTSCA9IG5ldyBSZWdFeHAoXCIoW1wiLmNvbmNhdChDSkssIFwiXSkoIyhbXiBdKSlcIiksICdnJyk7XG4gIHZhciBIQVNIX0NKSyA9IG5ldyBSZWdFeHAoXCIoKFteIF0pIykoW1wiLmNvbmNhdChDSkssIFwiXSlcIiksICdnJyk7XG4gIHZhciBDSktfT1BFUkFUT1JfQU5TID0gbmV3IFJlZ0V4cChcIihbXCIuY29uY2F0KENKSywgXCJdKShbXFxcXCtcXFxcLVxcXFwqXFxcXC89JlxcXFx8PD5dKShbQS1aYS16MC05XSlcIiksICdnJyk7XG4gIHZhciBBTlNfT1BFUkFUT1JfQ0pLID0gbmV3IFJlZ0V4cChcIihbQS1aYS16MC05XSkoW1xcXFwrXFxcXC1cXFxcKlxcXFwvPSZcXFxcfDw+XSkoW1wiLmNvbmNhdChDSkssIFwiXSlcIiksICdnJyk7XG4gIHZhciBGSVhfU0xBU0hfQVMgPSAvKFsvXSkgKFthLXpcXC1fXFwuL10rKS9nO1xuICB2YXIgRklYX1NMQVNIX0FTX1NMQVNIID0gLyhbL1xcLl0pKFtBLVphLXpcXC1fXFwuL10rKSAoWy9dKS9nO1xuICB2YXIgQ0pLX0xFRlRfQlJBQ0tFVCA9IG5ldyBSZWdFeHAoXCIoW1wiLmNvbmNhdChDSkssIFwiXSkoW1xcXFwoXFxcXFtcXFxcezw+XFx1MjAxQ10pXCIpLCAnZycpO1xuICB2YXIgUklHSFRfQlJBQ0tFVF9DSksgPSBuZXcgUmVnRXhwKFwiKFtcXFxcKVxcXFxdXFxcXH08PlxcdTIwMURdKShbXCIuY29uY2F0KENKSywgXCJdKVwiKSwgJ2cnKTtcbiAgdmFyIEZJWF9MRUZUX0JSQUNLRVRfQU5ZX1JJR0hUX0JSQUNLRVQgPSAvKFtcXChcXFtcXHs8XFx1MjAxY10rKVsgXSooLis/KVsgXSooW1xcKVxcXVxcfT5cXHUyMDFkXSspLztcbiAgdmFyIEFOU19DSktfTEVGVF9CUkFDS0VUX0FOWV9SSUdIVF9CUkFDS0VUID0gbmV3IFJlZ0V4cChcIihbQS1aYS16MC05XCIuY29uY2F0KENKSywgXCJdKVsgXSooW1xcdTIwMUNdKShbQS1aYS16MC05XCIpLmNvbmNhdChDSkssIFwiXFxcXC1fIF0rKShbXFx1MjAxRF0pXCIpLCAnZycpO1xuICB2YXIgTEVGVF9CUkFDS0VUX0FOWV9SSUdIVF9CUkFDS0VUX0FOU19DSksgPSBuZXcgUmVnRXhwKFwiKFtcXHUyMDFDXSkoW0EtWmEtejAtOVwiLmNvbmNhdChDSkssIFwiXFxcXC1fIF0rKShbXFx1MjAxRF0pWyBdKihbQS1aYS16MC05XCIpLmNvbmNhdChDSkssIFwiXSlcIiksICdnJyk7XG4gIHZhciBBTl9MRUZUX0JSQUNLRVQgPSAvKFtBLVphLXowLTldKShbXFwoXFxbXFx7XSkvZztcbiAgdmFyIFJJR0hUX0JSQUNLRVRfQU4gPSAvKFtcXClcXF1cXH1dKShbQS1aYS16MC05XSkvZztcbiAgdmFyIENKS19BTlMgPSBuZXcgUmVnRXhwKFwiKFtcIi5jb25jYXQoQ0pLLCBcIl0pKFtBLVphLXpcXHUwMzcwLVxcdTAzRkYwLTlAXFxcXCQlXFxcXF4mXFxcXCpcXFxcLVxcXFwrXFxcXFxcXFw9XFxcXHwvXFx4QTEtXFx4RkZcXHUyMTUwLVxcdTIxOEZcXHUyNzAwXFx1MjAxNFxcdTI3QkZdKVwiKSwgJ2cnKTtcbiAgdmFyIEFOU19DSksgPSBuZXcgUmVnRXhwKFwiKFtBLVphLXpcXHUwMzcwLVxcdTAzRkYwLTl+XFxcXCQlXFxcXF4mXFxcXCpcXFxcLVxcXFwrXFxcXFxcXFw9XFxcXHwvITs6LFxcXFwuXFxcXD9cXHhBMS1cXHhGRlxcdTIxNTAtXFx1MjE4RlxcdTI3MDBcXHUyMDE0XFx1MjdCRl0pKFtcIi5jb25jYXQoQ0pLLCBcIl0pXCIpLCAnZycpO1xuICB2YXIgU19BID0gLyglKShbQS1aYS16XSkvZztcbiAgdmFyIE1JRERMRV9ET1QgPSAvKFsgXSopKFtcXHUwMGI3XFx1MjAyMlxcdTIwMjddKShbIF0qKS9nO1xuXG4gIHZhciBQYW5ndSA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQYW5ndSgpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQYW5ndSk7XG5cbiAgICAgIHRoaXMudmVyc2lvbiA9ICc0LjAuNyc7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFBhbmd1LCBbe1xuICAgICAga2V5OiBcImNvbnZlcnRUb0Z1bGx3aWR0aFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbnZlcnRUb0Z1bGx3aWR0aChzeW1ib2xzKSB7XG4gICAgICAgIHJldHVybiBzeW1ib2xzLnJlcGxhY2UoL34vZywgJ++9nicpLnJlcGxhY2UoLyEvZywgJ++8gScpLnJlcGxhY2UoLzsvZywgJ++8mycpLnJlcGxhY2UoLzovZywgJ++8micpLnJlcGxhY2UoLywvZywgJ++8jCcpLnJlcGxhY2UoL1xcLi9nLCAn44CCJykucmVwbGFjZSgvXFw/L2csICfvvJ8nKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic3BhY2luZ1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNwYWNpbmcodGV4dCkge1xuICAgICAgICBpZiAodHlwZW9mIHRleHQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFwic3BhY2luZyh0ZXh0KSBvbmx5IGFjY2VwdHMgc3RyaW5nIGJ1dCBnb3QgXCIuY29uY2F0KF90eXBlb2YodGV4dCkpKTtcbiAgICAgICAgICByZXR1cm4gdGV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0ZXh0Lmxlbmd0aCA8PSAxIHx8ICFBTllfQ0pLLnRlc3QodGV4dCkpIHtcbiAgICAgICAgICByZXR1cm4gdGV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIG5ld1RleHQgPSB0ZXh0O1xuICAgICAgICBuZXdUZXh0ID0gbmV3VGV4dC5yZXBsYWNlKENPTlZFUlRfVE9fRlVMTFdJRFRIX0NKS19TWU1CT0xTX0NKSywgZnVuY3Rpb24gKG1hdGNoLCBsZWZ0Q2prLCBzeW1ib2xzLCByaWdodENqaykge1xuICAgICAgICAgIHZhciBmdWxsd2lkdGhTeW1ib2xzID0gc2VsZi5jb252ZXJ0VG9GdWxsd2lkdGgoc3ltYm9scyk7XG4gICAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KGxlZnRDamspLmNvbmNhdChmdWxsd2lkdGhTeW1ib2xzKS5jb25jYXQocmlnaHRDamspO1xuICAgICAgICB9KTtcbiAgICAgICAgbmV3VGV4dCA9IG5ld1RleHQucmVwbGFjZShDT05WRVJUX1RPX0ZVTExXSURUSF9DSktfU1lNQk9MUywgZnVuY3Rpb24gKG1hdGNoLCBjamssIHN5bWJvbHMpIHtcbiAgICAgICAgICB2YXIgZnVsbHdpZHRoU3ltYm9scyA9IHNlbGYuY29udmVydFRvRnVsbHdpZHRoKHN5bWJvbHMpO1xuICAgICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChjamspLmNvbmNhdChmdWxsd2lkdGhTeW1ib2xzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG5ld1RleHQgPSBuZXdUZXh0LnJlcGxhY2UoRE9UU19DSkssICckMSAkMicpO1xuICAgICAgICBuZXdUZXh0ID0gbmV3VGV4dC5yZXBsYWNlKEZJWF9DSktfQ09MT05fQU5TLCAnJDHvvJokMicpO1xuICAgICAgICBuZXdUZXh0ID0gbmV3VGV4dC5yZXBsYWNlKENKS19RVU9URSwgJyQxICQyJyk7XG4gICAgICAgIG5ld1RleHQgPSBuZXdUZXh0LnJlcGxhY2UoUVVPVEVfQ0pLLCAnJDEgJDInKTtcbiAgICAgICAgbmV3VGV4dCA9IG5ld1RleHQucmVwbGFjZShGSVhfUVVPVEVfQU5ZX1FVT1RFLCAnJDEkMiQzJyk7XG4gICAgICAgIG5ld1RleHQgPSBuZXdUZXh0LnJlcGxhY2UoQ0pLX1NJTkdMRV9RVU9URV9CVVRfUE9TU0VTU0lWRSwgJyQxICQyJyk7XG4gICAgICAgIG5ld1RleHQgPSBuZXdUZXh0LnJlcGxhY2UoU0lOR0xFX1FVT1RFX0NKSywgJyQxICQyJyk7XG4gICAgICAgIG5ld1RleHQgPSBuZXdUZXh0LnJlcGxhY2UoRklYX1BPU1NFU1NJVkVfU0lOR0xFX1FVT1RFLCBcIiQxJ3NcIik7XG4gICAgICAgIG5ld1RleHQgPSBuZXdUZXh0LnJlcGxhY2UoSEFTSF9BTlNfQ0pLX0hBU0gsICckMSAkMiQzJDQgJDUnKTtcbiAgICAgICAgbmV3VGV4dCA9IG5ld1RleHQucmVwbGFjZShDSktfSEFTSCwgJyQxICQyJyk7XG4gICAgICAgIG5ld1RleHQgPSBuZXdUZXh0LnJlcGxhY2UoSEFTSF9DSkssICckMSAkMycpO1xuICAgICAgICBuZXdUZXh0ID0gbmV3VGV4dC5yZXBsYWNlKENKS19PUEVSQVRPUl9BTlMsICckMSAkMiAkMycpO1xuICAgICAgICBuZXdUZXh0ID0gbmV3VGV4dC5yZXBsYWNlKEFOU19PUEVSQVRPUl9DSkssICckMSAkMiAkMycpO1xuICAgICAgICBuZXdUZXh0ID0gbmV3VGV4dC5yZXBsYWNlKEZJWF9TTEFTSF9BUywgJyQxJDInKTtcbiAgICAgICAgbmV3VGV4dCA9IG5ld1RleHQucmVwbGFjZShGSVhfU0xBU0hfQVNfU0xBU0gsICckMSQyJDMnKTtcbiAgICAgICAgbmV3VGV4dCA9IG5ld1RleHQucmVwbGFjZShDSktfTEVGVF9CUkFDS0VULCAnJDEgJDInKTtcbiAgICAgICAgbmV3VGV4dCA9IG5ld1RleHQucmVwbGFjZShSSUdIVF9CUkFDS0VUX0NKSywgJyQxICQyJyk7XG4gICAgICAgIG5ld1RleHQgPSBuZXdUZXh0LnJlcGxhY2UoRklYX0xFRlRfQlJBQ0tFVF9BTllfUklHSFRfQlJBQ0tFVCwgJyQxJDIkMycpO1xuICAgICAgICBuZXdUZXh0ID0gbmV3VGV4dC5yZXBsYWNlKEFOU19DSktfTEVGVF9CUkFDS0VUX0FOWV9SSUdIVF9CUkFDS0VULCAnJDEgJDIkMyQ0Jyk7XG4gICAgICAgIG5ld1RleHQgPSBuZXdUZXh0LnJlcGxhY2UoTEVGVF9CUkFDS0VUX0FOWV9SSUdIVF9CUkFDS0VUX0FOU19DSkssICckMSQyJDMgJDQnKTtcbiAgICAgICAgbmV3VGV4dCA9IG5ld1RleHQucmVwbGFjZShBTl9MRUZUX0JSQUNLRVQsICckMSAkMicpO1xuICAgICAgICBuZXdUZXh0ID0gbmV3VGV4dC5yZXBsYWNlKFJJR0hUX0JSQUNLRVRfQU4sICckMSAkMicpO1xuICAgICAgICBuZXdUZXh0ID0gbmV3VGV4dC5yZXBsYWNlKENKS19BTlMsICckMSAkMicpO1xuICAgICAgICBuZXdUZXh0ID0gbmV3VGV4dC5yZXBsYWNlKEFOU19DSkssICckMSAkMicpO1xuICAgICAgICBuZXdUZXh0ID0gbmV3VGV4dC5yZXBsYWNlKFNfQSwgJyQxICQyJyk7XG4gICAgICAgIG5ld1RleHQgPSBuZXdUZXh0LnJlcGxhY2UoTUlERExFX0RPVCwgJ+ODuycpO1xuICAgICAgICByZXR1cm4gbmV3VGV4dDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic3BhY2luZ1RleHRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzcGFjaW5nVGV4dCh0ZXh0KSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZnVuY3Rpb24gKCkge307XG4gICAgICAgIHZhciBuZXdUZXh0O1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbmV3VGV4dCA9IHRoaXMuc3BhY2luZyh0ZXh0KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjYWxsYmFjayhudWxsLCBuZXdUZXh0KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic3BhY2luZ1RleHRTeW5jXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc3BhY2luZ1RleHRTeW5jKHRleHQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3BhY2luZyh0ZXh0KTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gUGFuZ3U7XG4gIH0oKTtcblxuICB2YXIgcGFuZ3UgPSBuZXcgUGFuZ3UoKTtcbiAgbW9kdWxlLmV4cG9ydHMgPSBwYW5ndTtcbiAgbW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IHBhbmd1O1xuICBtb2R1bGUuZXhwb3J0cy5QYW5ndSA9IFBhbmd1O1xufSk7XG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcbn0pOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyA9PVVzZXJTY3JpcHQ9PVxyXG4vLyBAbmFtZSAgICAgICAgIGZvcm1hdCBoZXl3aGFsZVxyXG4vLyBAbmFtZXNwYWNlICAgIGh0dHA6Ly90YW1wZXJtb25rZXkubmV0L1xyXG4vLyBAdmVyc2lvbiAgICAgIDAuMVxyXG4vLyBAZGVzY3JpcHRpb24gIHRyeSB0byB0YWtlIG92ZXIgdGhlIHdvcmxkIVxyXG4vLyBAYXV0aG9yICAgICAgIFlvdVxyXG4vLyBAbWF0Y2ggICAgICAgIGh0dHBzOi8vd3d3LmhleXdoYWxlLmNvbS9ub3RlYm9va3MvcnVuLypcclxuLy8gQGljb24gICAgICAgICBodHRwczovL3d3dy5nb29nbGUuY29tL3MyL2Zhdmljb25zP3N6PTY0JmRvbWFpbj1oZXl3aGFsZS5jb21cclxuLy8gQGdyYW50ICAgICAgICBHTV9sb2dcclxuLy8gQGdyYW50ICAgICAgICB1bnNhZmVXaW5kb3dcclxuLy8gPT0vVXNlclNjcmlwdD09XHJcblxyXG5cclxuaW1wb3J0IHBhbmd1IGZyb20gJ3Bhbmd1JztcclxuXHJcbndpbmRvdy4kcGFuZ3UgPSBwYW5ndTtcclxuXHJcbmNvbnN0IGluc2VydFBhbmd1ID0gKCkgPT4ge1xyXG4gIHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcclxuICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcclxuICBzY3JpcHQuc3JjID0gJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3Bhbmd1LzQuMC43L3Bhbmd1Lm1pbi5qcyc7XHJcbiAgc2NyaXB0Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgR01fbG9nKCdzY3JpcHQgbG9hZGVkJylcclxuICAgICAgdW5zYWZlV2luZG93LnBhbmd1ID0gcGFuZ3U7XHJcbiAgfVxyXG4gIGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxufTtcclxuXHJcbmluc2VydFBhbmd1KCk7XHJcblxyXG4oZnVuY3Rpb24oKSB7XHJcbiAgY29uc3QgY3JlYXRlRm9ybWF0QnV0dG9uID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBnaG9zdE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXZ1LWJ0bi1naG9zdCcpO1xyXG4gICAgICBjb25zdCBmb3JtYXROb2RlID0gZ2hvc3ROb2RlLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgZm9ybWF0Tm9kZS5xdWVyeVNlbGVjdG9yKCcub3V0cHV0LW1lbnVfX2J0bi10ZXh0JykuaW5uZXJUZXh0ID0gXCJmb3JtYXRcIjtcclxuICAgICAgZ2hvc3ROb2RlLnBhcmVudE5vZGUucHJlcGVuZChmb3JtYXROb2RlKTtcclxuICAgICAgZm9ybWF0Tm9kZS5vbmNsaWNrID0gZm9ybWF0UGFnZTtcclxuXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZm9ybWF0UGFnZSA9ICgpID0+IHtcclxuICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RlYm9va19fY29udGVudCcpO1xyXG4gICAgICBjb25zdCBjaGlsZHMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGxfX2VkaXRvci13cmFwcGVyJyldO1xyXG5cclxuICAgICAgR01fbG9nKGNoaWxkcy5sZW5ndGgpO1xyXG4gICAgICBmb2N1c1RvSXRlbSgwLCBjaGlsZHMsIGNvbnRlbnQpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZm9jdXNUb0l0ZW0gPSAoaWR4LCBpdGVtcywgY29udGVudCkgPT4ge1xyXG4gICAgICBpZiAoaWR4ID49IGl0ZW1zLmxlbmd0aCkgcmV0dXJuO1xyXG4gICAgICBjb25zdCBjaGlsZCA9IGl0ZW1zW2lkeF07XHJcbiAgICAgIGNoaWxkLnNjcm9sbEludG9WaWV3KCk7XHJcbiAgICAgIGNoaWxkLmNsaWNrKCk7XHJcbiAgICAgIGNvbnRlbnQuc2Nyb2xsVG9wID0gY29udGVudC5zY3JvbGxUb3AgLSAyMDtcclxuICAgICAgR01fbG9nKCdzY3JvbGwgdG86JywgY2hpbGQsIGlkeCk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgY2hpbGQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5jZWxsX190b29sYmFyJykuY2hpbGROb2Rlc1syXS5jbGljaygpO1xyXG4gICAgICB9LCAwKVxyXG5cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBmb2N1c1RvSXRlbShpZHggKyAxLCBpdGVtcywgY29udGVudCk7XHJcbiAgICAgIH0sIDIwMDApXHJcbiAgfVxyXG5cclxuICBzZXRUaW1lb3V0KCgpID0+e1xyXG5cclxuICAgICAgY3JlYXRlRm9ybWF0QnV0dG9uKCk7XHJcblxyXG4gIH0sIDUwMDApXHJcbiAgLy8gWW91ciBjb2RlIGhlcmUuLi5cclxufSkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=