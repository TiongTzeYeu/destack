'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ReactDOM = require('react-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var React__namespace = /*#__PURE__*/_interopNamespace(React);
var ReactDOM__namespace = /*#__PURE__*/_interopNamespace(ReactDOM);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "/*\n! tailwindcss v3.3.2 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n6. Use the user's configured `sans` font-variation-settings by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\r\n.container {\n  width: 100%;\n}\r\n@media (min-width: 640px) {\n\n  .container {\n    max-width: 640px;\n  }\n}\r\n@media (min-width: 768px) {\n\n  .container {\n    max-width: 768px;\n  }\n}\r\n@media (min-width: 1024px) {\n\n  .container {\n    max-width: 1024px;\n  }\n}\r\n@media (min-width: 1280px) {\n\n  .container {\n    max-width: 1280px;\n  }\n}\r\n@media (min-width: 1536px) {\n\n  .container {\n    max-width: 1536px;\n  }\n}\r\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\r\n.pointer-events-none {\n  pointer-events: none;\n}\r\n.\\!visible {\n  visibility: visible !important;\n}\r\n.visible {\n  visibility: visible;\n}\r\n.invisible {\n  visibility: hidden;\n}\r\n.static {\n  position: static;\n}\r\n.fixed {\n  position: fixed;\n}\r\n.absolute {\n  position: absolute;\n}\r\n.\\!relative {\n  position: relative !important;\n}\r\n.relative {\n  position: relative;\n}\r\n.sticky {\n  position: sticky;\n}\r\n.inset-0 {\n  inset: 0px;\n}\r\n.inset-x-0 {\n  left: 0px;\n  right: 0px;\n}\r\n.inset-y-0 {\n  top: 0px;\n  bottom: 0px;\n}\r\n.\\!bottom-0 {\n  bottom: 0px !important;\n}\r\n.-left-20 {\n  left: -5rem;\n}\r\n.-right-20 {\n  right: -5rem;\n}\r\n.-right-28 {\n  right: -7rem;\n}\r\n.-top-10 {\n  top: -2.5rem;\n}\r\n.-top-12 {\n  top: -3rem;\n}\r\n.-top-3 {\n  top: -0.75rem;\n}\r\n.-top-4 {\n  top: -1rem;\n}\r\n.-top-96 {\n  top: -24rem;\n}\r\n.bottom-0 {\n  bottom: 0px;\n}\r\n.bottom-12 {\n  bottom: 3rem;\n}\r\n.bottom-2 {\n  bottom: 0.5rem;\n}\r\n.bottom-6 {\n  bottom: 1.5rem;\n}\r\n.left-0 {\n  left: 0px;\n}\r\n.left-1\\/2 {\n  left: 50%;\n}\r\n.left-12 {\n  left: 3rem;\n}\r\n.left-2 {\n  left: 0.5rem;\n}\r\n.left-4 {\n  left: 1rem;\n}\r\n.left-auto {\n  left: auto;\n}\r\n.right-0 {\n  right: 0px;\n}\r\n.right-1 {\n  right: 0.25rem;\n}\r\n.right-1\\.5 {\n  right: 0.375rem;\n}\r\n.right-3 {\n  right: 0.75rem;\n}\r\n.right-3\\.5 {\n  right: 0.875rem;\n}\r\n.right-4 {\n  right: 1rem;\n}\r\n.right-full {\n  right: 100%;\n}\r\n.top-0 {\n  top: 0px;\n}\r\n.top-1 {\n  top: 0.25rem;\n}\r\n.top-1\\/2 {\n  top: 50%;\n}\r\n.top-12 {\n  top: 3rem;\n}\r\n.top-16 {\n  top: 4rem;\n}\r\n.top-2 {\n  top: 0.5rem;\n}\r\n.top-2\\/4 {\n  top: 50%;\n}\r\n.top-24 {\n  top: 6rem;\n}\r\n.top-3 {\n  top: 0.75rem;\n}\r\n.top-3\\.5 {\n  top: 0.875rem;\n}\r\n.top-4 {\n  top: 1rem;\n}\r\n.top-full {\n  top: 100%;\n}\r\n.-z-\\[1\\] {\n  z-index: -1;\n}\r\n.z-10 {\n  z-index: 10;\n}\r\n.z-20 {\n  z-index: 20;\n}\r\n.z-50 {\n  z-index: 50;\n}\r\n.z-\\[1\\] {\n  z-index: 1;\n}\r\n.z-\\[2\\] {\n  z-index: 2;\n}\r\n.z-\\[60\\] {\n  z-index: 60;\n}\r\n.order-1 {\n  order: 1;\n}\r\n.order-2 {\n  order: 2;\n}\r\n.order-first {\n  order: -9999;\n}\r\n.order-last {\n  order: 9999;\n}\r\n.col-span-1 {\n  grid-column: span 1 / span 1;\n}\r\n.col-span-12 {\n  grid-column: span 12 / span 12;\n}\r\n.col-span-2 {\n  grid-column: span 2 / span 2;\n}\r\n.col-span-3 {\n  grid-column: span 3 / span 3;\n}\r\n.col-span-4 {\n  grid-column: span 4 / span 4;\n}\r\n.col-span-5 {\n  grid-column: span 5 / span 5;\n}\r\n.col-span-6 {\n  grid-column: span 6 / span 6;\n}\r\n.col-span-full {\n  grid-column: 1 / -1;\n}\r\n.col-start-4 {\n  grid-column-start: 4;\n}\r\n.-m-0 {\n  margin: -0px;\n}\r\n.-m-0\\.5 {\n  margin: -0.125rem;\n}\r\n.-m-1 {\n  margin: -0.25rem;\n}\r\n.-m-12 {\n  margin: -3rem;\n}\r\n.-m-2 {\n  margin: -0.5rem;\n}\r\n.-m-4 {\n  margin: -1rem;\n}\r\n.m-0 {\n  margin: 0px;\n}\r\n.m-0\\.5 {\n  margin: 0.125rem;\n}\r\n.m-1 {\n  margin: 0.25rem;\n}\r\n.m-2 {\n  margin: 0.5rem;\n}\r\n.\\!mx-\\[10px\\] {\n  margin-left: 10px !important;\n  margin-right: 10px !important;\n}\r\n.-mx-1 {\n  margin-left: -0.25rem;\n  margin-right: -0.25rem;\n}\r\n.-mx-1\\.5 {\n  margin-left: -0.375rem;\n  margin-right: -0.375rem;\n}\r\n.-mx-2 {\n  margin-left: -0.5rem;\n  margin-right: -0.5rem;\n}\r\n.-mx-3 {\n  margin-left: -0.75rem;\n  margin-right: -0.75rem;\n}\r\n.-mx-4 {\n  margin-left: -1rem;\n  margin-right: -1rem;\n}\r\n.-mx-6 {\n  margin-left: -1.5rem;\n  margin-right: -1.5rem;\n}\r\n.-my-4 {\n  margin-top: -1rem;\n  margin-bottom: -1rem;\n}\r\n.-my-8 {\n  margin-top: -2rem;\n  margin-bottom: -2rem;\n}\r\n.mx-1 {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n}\r\n.mx-1\\.5 {\n  margin-left: 0.375rem;\n  margin-right: 0.375rem;\n}\r\n.mx-10 {\n  margin-left: 2.5rem;\n  margin-right: 2.5rem;\n}\r\n.mx-2 {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\r\n.mx-3 {\n  margin-left: 0.75rem;\n  margin-right: 0.75rem;\n}\r\n.mx-4 {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\r\n.mx-5 {\n  margin-left: 1.25rem;\n  margin-right: 1.25rem;\n}\r\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\r\n.my-1 {\n  margin-top: 0.25rem;\n  margin-bottom: 0.25rem;\n}\r\n.my-10 {\n  margin-top: 2.5rem;\n  margin-bottom: 2.5rem;\n}\r\n.my-12 {\n  margin-top: 3rem;\n  margin-bottom: 3rem;\n}\r\n.my-2 {\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n}\r\n.my-4 {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\r\n.my-5 {\n  margin-top: 1.25rem;\n  margin-bottom: 1.25rem;\n}\r\n.my-6 {\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n}\r\n.my-8 {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n}\r\n.-mb-1 {\n  margin-bottom: -0.25rem;\n}\r\n.-mb-10 {\n  margin-bottom: -2.5rem;\n}\r\n.-mb-4 {\n  margin-bottom: -1rem;\n}\r\n.-mb-px {\n  margin-bottom: -1px;\n}\r\n.-ml-1 {\n  margin-left: -0.25rem;\n}\r\n.-ml-12 {\n  margin-left: -3rem;\n}\r\n.-ml-4 {\n  margin-left: -1rem;\n}\r\n.-mr-1 {\n  margin-right: -0.25rem;\n}\r\n.-mr-2 {\n  margin-right: -0.5rem;\n}\r\n.-mr-6 {\n  margin-right: -1.5rem;\n}\r\n.-mt-0 {\n  margin-top: -0px;\n}\r\n.-mt-0\\.5 {\n  margin-top: -0.125rem;\n}\r\n.-mt-20 {\n  margin-top: -5rem;\n}\r\n.-mt-4 {\n  margin-top: -1rem;\n}\r\n.-mt-6 {\n  margin-top: -1.5rem;\n}\r\n.mb-0 {\n  margin-bottom: 0px;\n}\r\n.mb-0\\.5 {\n  margin-bottom: 0.125rem;\n}\r\n.mb-1 {\n  margin-bottom: 0.25rem;\n}\r\n.mb-10 {\n  margin-bottom: 2.5rem;\n}\r\n.mb-12 {\n  margin-bottom: 3rem;\n}\r\n.mb-16 {\n  margin-bottom: 4rem;\n}\r\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\r\n.mb-20 {\n  margin-bottom: 5rem;\n}\r\n.mb-24 {\n  margin-bottom: 6rem;\n}\r\n.mb-3 {\n  margin-bottom: 0.75rem;\n}\r\n.mb-4 {\n  margin-bottom: 1rem;\n}\r\n.mb-5 {\n  margin-bottom: 1.25rem;\n}\r\n.mb-6 {\n  margin-bottom: 1.5rem;\n}\r\n.mb-7 {\n  margin-bottom: 1.75rem;\n}\r\n.mb-8 {\n  margin-bottom: 2rem;\n}\r\n.mb-auto {\n  margin-bottom: auto;\n}\r\n.ml-1 {\n  margin-left: 0.25rem;\n}\r\n.ml-1\\.5 {\n  margin-left: 0.375rem;\n}\r\n.ml-2 {\n  margin-left: 0.5rem;\n}\r\n.ml-2\\.5 {\n  margin-left: 0.625rem;\n}\r\n.ml-20 {\n  margin-left: 5rem;\n}\r\n.ml-3 {\n  margin-left: 0.75rem;\n}\r\n.ml-4 {\n  margin-left: 1rem;\n}\r\n.ml-5 {\n  margin-left: 1.25rem;\n}\r\n.ml-6 {\n  margin-left: 1.5rem;\n}\r\n.ml-8 {\n  margin-left: 2rem;\n}\r\n.ml-auto {\n  margin-left: auto;\n}\r\n.mr-1 {\n  margin-right: 0.25rem;\n}\r\n.mr-2 {\n  margin-right: 0.5rem;\n}\r\n.mr-20 {\n  margin-right: 5rem;\n}\r\n.mr-3 {\n  margin-right: 0.75rem;\n}\r\n.mr-4 {\n  margin-right: 1rem;\n}\r\n.mr-5 {\n  margin-right: 1.25rem;\n}\r\n.mr-6 {\n  margin-right: 1.5rem;\n}\r\n.mr-auto {\n  margin-right: auto;\n}\r\n.mr-px {\n  margin-right: 1px;\n}\r\n.mt-0 {\n  margin-top: 0px;\n}\r\n.mt-0\\.5 {\n  margin-top: 0.125rem;\n}\r\n.mt-1 {\n  margin-top: 0.25rem;\n}\r\n.mt-1\\.5 {\n  margin-top: 0.375rem;\n}\r\n.mt-10 {\n  margin-top: 2.5rem;\n}\r\n.mt-12 {\n  margin-top: 3rem;\n}\r\n.mt-16 {\n  margin-top: 4rem;\n}\r\n.mt-2 {\n  margin-top: 0.5rem;\n}\r\n.mt-20 {\n  margin-top: 5rem;\n}\r\n.mt-3 {\n  margin-top: 0.75rem;\n}\r\n.mt-32 {\n  margin-top: 8rem;\n}\r\n.mt-4 {\n  margin-top: 1rem;\n}\r\n.mt-5 {\n  margin-top: 1.25rem;\n}\r\n.mt-6 {\n  margin-top: 1.5rem;\n}\r\n.mt-7 {\n  margin-top: 1.75rem;\n}\r\n.mt-8 {\n  margin-top: 2rem;\n}\r\n.mt-auto {\n  margin-top: auto;\n}\r\n.block {\n  display: block;\n}\r\n.inline-block {\n  display: inline-block;\n}\r\n.inline {\n  display: inline;\n}\r\n.flex {\n  display: flex;\n}\r\n.inline-flex {\n  display: inline-flex;\n}\r\n.table {\n  display: table;\n}\r\n.flow-root {\n  display: flow-root;\n}\r\n.grid {\n  display: grid;\n}\r\n.hidden {\n  display: none;\n}\r\n.aspect-square {\n  aspect-ratio: 1 / 1;\n}\r\n.h-0 {\n  height: 0px;\n}\r\n.h-0\\.5 {\n  height: 0.125rem;\n}\r\n.h-1 {\n  height: 0.25rem;\n}\r\n.h-10 {\n  height: 2.5rem;\n}\r\n.h-11 {\n  height: 2.75rem;\n}\r\n.h-12 {\n  height: 3rem;\n}\r\n.h-14 {\n  height: 3.5rem;\n}\r\n.h-16 {\n  height: 4rem;\n}\r\n.h-2 {\n  height: 0.5rem;\n}\r\n.h-2\\.5 {\n  height: 0.625rem;\n}\r\n.h-20 {\n  height: 5rem;\n}\r\n.h-24 {\n  height: 6rem;\n}\r\n.h-28 {\n  height: 7rem;\n}\r\n.h-3 {\n  height: 0.75rem;\n}\r\n.h-3\\.5 {\n  height: 0.875rem;\n}\r\n.h-32 {\n  height: 8rem;\n}\r\n.h-36 {\n  height: 9rem;\n}\r\n.h-4 {\n  height: 1rem;\n}\r\n.h-40 {\n  height: 10rem;\n}\r\n.h-44 {\n  height: 11rem;\n}\r\n.h-48 {\n  height: 12rem;\n}\r\n.h-5 {\n  height: 1.25rem;\n}\r\n.h-5\\/6 {\n  height: 83.333333%;\n}\r\n.h-52 {\n  height: 13rem;\n}\r\n.h-56 {\n  height: 14rem;\n}\r\n.h-6 {\n  height: 1.5rem;\n}\r\n.h-60 {\n  height: 15rem;\n}\r\n.h-64 {\n  height: 16rem;\n}\r\n.h-7 {\n  height: 1.75rem;\n}\r\n.h-72 {\n  height: 18rem;\n}\r\n.h-8 {\n  height: 2rem;\n}\r\n.h-80 {\n  height: 20rem;\n}\r\n.h-9 {\n  height: 2.25rem;\n}\r\n.h-96 {\n  height: 24rem;\n}\r\n.h-\\[2\\.375rem\\] {\n  height: 2.375rem;\n}\r\n.h-\\[2\\.875rem\\] {\n  height: 2.875rem;\n}\r\n.h-\\[200px\\] {\n  height: 200px;\n}\r\n.h-\\[28rem\\] {\n  height: 28rem;\n}\r\n.h-\\[300px\\] {\n  height: 300px;\n}\r\n.h-\\[32rem\\] {\n  height: 32rem;\n}\r\n.h-\\[350px\\] {\n  height: 350px;\n}\r\n.h-\\[44rem\\] {\n  height: 44rem;\n}\r\n.h-\\[46px\\] {\n  height: 46px;\n}\r\n.h-\\[50rem\\] {\n  height: 50rem;\n}\r\n.h-\\[62px\\] {\n  height: 62px;\n}\r\n.h-auto {\n  height: auto;\n}\r\n.h-fit {\n  height: -moz-fit-content;\n  height: fit-content;\n}\r\n.h-full {\n  height: 100%;\n}\r\n.h-px {\n  height: 1px;\n}\r\n.h-screen {\n  height: 100vh;\n}\r\n.max-h-72 {\n  max-height: 18rem;\n}\r\n.min-h-\\[15rem\\] {\n  min-height: 15rem;\n}\r\n.min-h-screen {\n  min-height: 100vh;\n}\r\n.w-0 {\n  width: 0px;\n}\r\n.w-1 {\n  width: 0.25rem;\n}\r\n.w-1\\/12 {\n  width: 8.333333%;\n}\r\n.w-1\\/2 {\n  width: 50%;\n}\r\n.w-1\\/3 {\n  width: 33.333333%;\n}\r\n.w-1\\/4 {\n  width: 25%;\n}\r\n.w-1\\/6 {\n  width: 16.666667%;\n}\r\n.w-10 {\n  width: 2.5rem;\n}\r\n.w-11\\/12 {\n  width: 91.666667%;\n}\r\n.w-12 {\n  width: 3rem;\n}\r\n.w-14 {\n  width: 3.5rem;\n}\r\n.w-16 {\n  width: 4rem;\n}\r\n.w-2 {\n  width: 0.5rem;\n}\r\n.w-2\\.5 {\n  width: 0.625rem;\n}\r\n.w-2\\/3 {\n  width: 66.666667%;\n}\r\n.w-2\\/4 {\n  width: 50%;\n}\r\n.w-20 {\n  width: 5rem;\n}\r\n.w-24 {\n  width: 6rem;\n}\r\n.w-28 {\n  width: 7rem;\n}\r\n.w-3 {\n  width: 0.75rem;\n}\r\n.w-3\\.5 {\n  width: 0.875rem;\n}\r\n.w-3\\/4 {\n  width: 75%;\n}\r\n.w-32 {\n  width: 8rem;\n}\r\n.w-36 {\n  width: 9rem;\n}\r\n.w-4 {\n  width: 1rem;\n}\r\n.w-40 {\n  width: 10rem;\n}\r\n.w-48 {\n  width: 12rem;\n}\r\n.w-5 {\n  width: 1.25rem;\n}\r\n.w-5\\/6 {\n  width: 83.333333%;\n}\r\n.w-52 {\n  width: 13rem;\n}\r\n.w-56 {\n  width: 14rem;\n}\r\n.w-6 {\n  width: 1.5rem;\n}\r\n.w-60 {\n  width: 15rem;\n}\r\n.w-64 {\n  width: 16rem;\n}\r\n.w-7 {\n  width: 1.75rem;\n}\r\n.w-72 {\n  width: 18rem;\n}\r\n.w-8 {\n  width: 2rem;\n}\r\n.w-80 {\n  width: 20rem;\n}\r\n.w-9 {\n  width: 2.25rem;\n}\r\n.w-96 {\n  width: 24rem;\n}\r\n.w-\\[1036px\\] {\n  width: 1036px;\n}\r\n.w-\\[2\\.375rem\\] {\n  width: 2.375rem;\n}\r\n.w-\\[2\\.875rem\\] {\n  width: 2.875rem;\n}\r\n.w-\\[25rem\\] {\n  width: 25rem;\n}\r\n.w-\\[28rem\\] {\n  width: 28rem;\n}\r\n.w-\\[3\\.25rem\\] {\n  width: 3.25rem;\n}\r\n.w-\\[46px\\] {\n  width: 46px;\n}\r\n.w-\\[50rem\\] {\n  width: 50rem;\n}\r\n.w-\\[62px\\] {\n  width: 62px;\n}\r\n.w-\\[90rem\\] {\n  width: 90rem;\n}\r\n.w-\\[95vw\\] {\n  width: 95vw;\n}\r\n.w-auto {\n  width: auto;\n}\r\n.w-full {\n  width: 100%;\n}\r\n.w-px {\n  width: 1px;\n}\r\n.min-w-\\[3\\.5rem\\] {\n  min-width: 3.5rem;\n}\r\n.max-w-2xl {\n  max-width: 42rem;\n}\r\n.max-w-3xl {\n  max-width: 48rem;\n}\r\n.max-w-4xl {\n  max-width: 56rem;\n}\r\n.max-w-5xl {\n  max-width: 64rem;\n}\r\n.max-w-6xl {\n  max-width: 72rem;\n}\r\n.max-w-7xl {\n  max-width: 80rem;\n}\r\n.max-w-\\[10rem\\] {\n  max-width: 10rem;\n}\r\n.max-w-\\[1140px\\] {\n  max-width: 1140px;\n}\r\n.max-w-\\[1340px\\] {\n  max-width: 1340px;\n}\r\n.max-w-\\[50rem\\] {\n  max-width: 50rem;\n}\r\n.max-w-\\[85rem\\] {\n  max-width: 85rem;\n}\r\n.max-w-full {\n  max-width: 100%;\n}\r\n.max-w-lg {\n  max-width: 32rem;\n}\r\n.max-w-md {\n  max-width: 28rem;\n}\r\n.max-w-screen-2xl {\n  max-width: 1536px;\n}\r\n.max-w-screen-lg {\n  max-width: 1024px;\n}\r\n.max-w-screen-md {\n  max-width: 768px;\n}\r\n.max-w-screen-sm {\n  max-width: 640px;\n}\r\n.max-w-screen-xl {\n  max-width: 1280px;\n}\r\n.max-w-sm {\n  max-width: 24rem;\n}\r\n.max-w-xl {\n  max-width: 36rem;\n}\r\n.max-w-xs {\n  max-width: 20rem;\n}\r\n.flex-1 {\n  flex: 1 1 0%;\n}\r\n.flex-\\[0_0_auto\\] {\n  flex: 0 0 auto;\n}\r\n.flex-\\[1_0_0\\%\\] {\n  flex: 1 0 0%;\n}\r\n.flex-auto {\n  flex: 1 1 auto;\n}\r\n.flex-none {\n  flex: none;\n}\r\n.flex-shrink-0 {\n  flex-shrink: 0;\n}\r\n.shrink-0 {\n  flex-shrink: 0;\n}\r\n.flex-grow {\n  flex-grow: 1;\n}\r\n.grow {\n  flex-grow: 1;\n}\r\n.basis-full {\n  flex-basis: 100%;\n}\r\n.table-auto {\n  table-layout: auto;\n}\r\n.origin-top-left {\n  transform-origin: top left;\n}\r\n.-translate-x-1\\/2 {\n  --tw-translate-x: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.-translate-x-14 {\n  --tw-translate-x: -3.5rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.-translate-x-16 {\n  --tw-translate-x: -4rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.-translate-x-32 {\n  --tw-translate-x: -8rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.-translate-x-40 {\n  --tw-translate-x: -10rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.-translate-x-6 {\n  --tw-translate-x: -1.5rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.-translate-x-8 {\n  --tw-translate-x: -2rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.-translate-x-\\[10rem\\] {\n  --tw-translate-x: -10rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.-translate-x-\\[15rem\\] {\n  --tw-translate-x: -15rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.-translate-x-full {\n  --tw-translate-x: -100%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.-translate-y-1 {\n  --tw-translate-y: -0.25rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.-translate-y-1\\/2 {\n  --tw-translate-y: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.-translate-y-12 {\n  --tw-translate-y: -3rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.-translate-y-2\\/4 {\n  --tw-translate-y: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.-translate-y-4 {\n  --tw-translate-y: -1rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.-translate-y-8 {\n  --tw-translate-y: -2rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.translate-x-0 {\n  --tw-translate-x: 0px;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.translate-x-16 {\n  --tw-translate-x: 4rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.translate-x-20 {\n  --tw-translate-x: 5rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.translate-x-40 {\n  --tw-translate-x: 10rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.translate-y-10 {\n  --tw-translate-y: 2.5rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.translate-y-16 {\n  --tw-translate-y: 4rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.-rotate-12 {\n  --tw-rotate: -12deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.-rotate-180 {\n  --tw-rotate: -180deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.rotate-180 {\n  --tw-rotate: 180deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.rotate-\\[-60deg\\] {\n  --tw-rotate: -60deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.transform {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n@keyframes ping {\n\n  75%, 100% {\n    transform: scale(2);\n    opacity: 0;\n  }\n}\r\n.animate-ping {\n  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;\n}\r\n.cursor-default {\n  cursor: default;\n}\r\n.cursor-grab {\n  cursor: grab;\n}\r\n.cursor-move {\n  cursor: move;\n}\r\n.cursor-not-allowed {\n  cursor: not-allowed;\n}\r\n.cursor-pointer {\n  cursor: pointer;\n}\r\n.select-none {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\r\n.resize-none {\n  resize: none;\n}\r\n.list-inside {\n  list-style-position: inside;\n}\r\n.list-outside {\n  list-style-position: outside;\n}\r\n.list-disc {\n  list-style-type: disc;\n}\r\n.list-none {\n  list-style-type: none;\n}\r\n.appearance-none {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\r\n.grid-cols-1 {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}\r\n.grid-cols-12 {\n  grid-template-columns: repeat(12, minmax(0, 1fr));\n}\r\n.grid-cols-2 {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\r\n.grid-cols-3 {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\r\n.grid-cols-6 {\n  grid-template-columns: repeat(6, minmax(0, 1fr));\n}\r\n.flex-row {\n  flex-direction: row;\n}\r\n.flex-col {\n  flex-direction: column;\n}\r\n.flex-wrap {\n  flex-wrap: wrap;\n}\r\n.content-start {\n  align-content: flex-start;\n}\r\n.items-start {\n  align-items: flex-start;\n}\r\n.items-end {\n  align-items: flex-end;\n}\r\n.items-center {\n  align-items: center;\n}\r\n.items-baseline {\n  align-items: baseline;\n}\r\n.justify-start {\n  justify-content: flex-start;\n}\r\n.justify-end {\n  justify-content: flex-end;\n}\r\n.justify-center {\n  justify-content: center;\n}\r\n.justify-between {\n  justify-content: space-between;\n}\r\n.gap-0 {\n  gap: 0px;\n}\r\n.gap-0\\.5 {\n  gap: 0.125rem;\n}\r\n.gap-1 {\n  gap: 0.25rem;\n}\r\n.gap-1\\.5 {\n  gap: 0.375rem;\n}\r\n.gap-10 {\n  gap: 2.5rem;\n}\r\n.gap-12 {\n  gap: 3rem;\n}\r\n.gap-16 {\n  gap: 4rem;\n}\r\n.gap-2 {\n  gap: 0.5rem;\n}\r\n.gap-2\\.5 {\n  gap: 0.625rem;\n}\r\n.gap-3 {\n  gap: 0.75rem;\n}\r\n.gap-4 {\n  gap: 1rem;\n}\r\n.gap-5 {\n  gap: 1.25rem;\n}\r\n.gap-6 {\n  gap: 1.5rem;\n}\r\n.gap-8 {\n  gap: 2rem;\n}\r\n.gap-px {\n  gap: 1px;\n}\r\n.gap-x-0 {\n  -moz-column-gap: 0px;\n       column-gap: 0px;\n}\r\n.gap-x-1 {\n  -moz-column-gap: 0.25rem;\n       column-gap: 0.25rem;\n}\r\n.gap-x-1\\.5 {\n  -moz-column-gap: 0.375rem;\n       column-gap: 0.375rem;\n}\r\n.gap-x-16 {\n  -moz-column-gap: 4rem;\n       column-gap: 4rem;\n}\r\n.gap-x-2 {\n  -moz-column-gap: 0.5rem;\n       column-gap: 0.5rem;\n}\r\n.gap-x-20 {\n  -moz-column-gap: 5rem;\n       column-gap: 5rem;\n}\r\n.gap-x-3 {\n  -moz-column-gap: 0.75rem;\n       column-gap: 0.75rem;\n}\r\n.gap-x-3\\.5 {\n  -moz-column-gap: 0.875rem;\n       column-gap: 0.875rem;\n}\r\n.gap-x-4 {\n  -moz-column-gap: 1rem;\n       column-gap: 1rem;\n}\r\n.gap-x-5 {\n  -moz-column-gap: 1.25rem;\n       column-gap: 1.25rem;\n}\r\n.gap-x-6 {\n  -moz-column-gap: 1.5rem;\n       column-gap: 1.5rem;\n}\r\n.gap-x-7 {\n  -moz-column-gap: 1.75rem;\n       column-gap: 1.75rem;\n}\r\n.gap-x-8 {\n  -moz-column-gap: 2rem;\n       column-gap: 2rem;\n}\r\n.gap-y-10 {\n  row-gap: 2.5rem;\n}\r\n.gap-y-12 {\n  row-gap: 3rem;\n}\r\n.gap-y-2 {\n  row-gap: 0.5rem;\n}\r\n.gap-y-3 {\n  row-gap: 0.75rem;\n}\r\n.gap-y-4 {\n  row-gap: 1rem;\n}\r\n.gap-y-5 {\n  row-gap: 1.25rem;\n}\r\n.gap-y-6 {\n  row-gap: 1.5rem;\n}\r\n.gap-y-8 {\n  row-gap: 2rem;\n}\r\n.-space-x-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(-0.5rem * var(--tw-space-x-reverse));\n  margin-left: calc(-0.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\r\n.-space-x-3 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(-0.75rem * var(--tw-space-x-reverse));\n  margin-left: calc(-0.75rem * calc(1 - var(--tw-space-x-reverse)));\n}\r\n.space-x-1 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.25rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));\n}\r\n.space-x-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.5rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\r\n.space-x-2\\.5 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.625rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.625rem * calc(1 - var(--tw-space-x-reverse)));\n}\r\n.space-x-3 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.75rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));\n}\r\n.space-x-4 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(1rem * var(--tw-space-x-reverse));\n  margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));\n}\r\n.space-x-6 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(1.5rem * var(--tw-space-x-reverse));\n  margin-left: calc(1.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\r\n.space-y-0 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0px * var(--tw-space-y-reverse));\n}\r\n.space-y-0\\.5 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.125rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.125rem * var(--tw-space-y-reverse));\n}\r\n.space-y-1 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));\n}\r\n.space-y-1\\.5 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.375rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.375rem * var(--tw-space-y-reverse));\n}\r\n.space-y-12 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(3rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(3rem * var(--tw-space-y-reverse));\n}\r\n.space-y-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));\n}\r\n.space-y-2\\.5 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.625rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.625rem * var(--tw-space-y-reverse));\n}\r\n.space-y-24 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(6rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(6rem * var(--tw-space-y-reverse));\n}\r\n.space-y-3 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.75rem * var(--tw-space-y-reverse));\n}\r\n.space-y-4 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(1rem * var(--tw-space-y-reverse));\n}\r\n.space-y-5 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(1.25rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(1.25rem * var(--tw-space-y-reverse));\n}\r\n.space-y-6 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));\n}\r\n.space-y-8 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(2rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(2rem * var(--tw-space-y-reverse));\n}\r\n.divide-x > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-x-reverse: 0;\n  border-right-width: calc(1px * var(--tw-divide-x-reverse));\n  border-left-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));\n}\r\n.divide-x-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-x-reverse: 0;\n  border-right-width: calc(2px * var(--tw-divide-x-reverse));\n  border-left-width: calc(2px * calc(1 - var(--tw-divide-x-reverse)));\n}\r\n.divide-y > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-y-reverse: 0;\n  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));\n  border-bottom-width: calc(1px * var(--tw-divide-y-reverse));\n}\r\n.divide-y-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-y-reverse: 0;\n  border-top-width: calc(2px * calc(1 - var(--tw-divide-y-reverse)));\n  border-bottom-width: calc(2px * var(--tw-divide-y-reverse));\n}\r\n.divide-gray-100 > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(243 244 246 / var(--tw-divide-opacity));\n}\r\n.divide-gray-200 > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(229 231 235 / var(--tw-divide-opacity));\n}\r\n.divide-gray-500 > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(107 114 128 / var(--tw-divide-opacity));\n}\r\n.divide-gray-700 > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(55 65 81 / var(--tw-divide-opacity));\n}\r\n.place-self-center {\n  place-self: center;\n}\r\n.self-start {\n  align-self: flex-start;\n}\r\n.self-center {\n  align-self: center;\n}\r\n.overflow-auto {\n  overflow: auto;\n}\r\n.\\!overflow-hidden {\n  overflow: hidden !important;\n}\r\n.overflow-hidden {\n  overflow: hidden;\n}\r\n.overflow-scroll {\n  overflow: scroll;\n}\r\n.overflow-x-auto {\n  overflow-x: auto;\n}\r\n.overflow-y-auto {\n  overflow-y: auto;\n}\r\n.overflow-y-hidden {\n  overflow-y: hidden;\n}\r\n.overflow-y-scroll {\n  overflow-y: scroll;\n}\r\n.truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\r\n.whitespace-nowrap {\n  white-space: nowrap;\n}\r\n.rounded {\n  border-radius: 0.25rem;\n}\r\n.rounded-3xl {\n  border-radius: 1.5rem;\n}\r\n.rounded-\\[1\\.25rem\\] {\n  border-radius: 1.25rem;\n}\r\n.rounded-\\[36px\\] {\n  border-radius: 36px;\n}\r\n.rounded-full {\n  border-radius: 9999px;\n}\r\n.rounded-lg {\n  border-radius: 0.5rem;\n}\r\n.rounded-md {\n  border-radius: 0.375rem;\n}\r\n.rounded-sm {\n  border-radius: 0.125rem;\n}\r\n.rounded-xl {\n  border-radius: 0.75rem;\n}\r\n.rounded-b-lg {\n  border-bottom-right-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\r\n.rounded-b-xl {\n  border-bottom-right-radius: 0.75rem;\n  border-bottom-left-radius: 0.75rem;\n}\r\n.rounded-r-lg {\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\r\n.rounded-t {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\r\n.rounded-t-lg {\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n}\r\n.rounded-t-xl {\n  border-top-left-radius: 0.75rem;\n  border-top-right-radius: 0.75rem;\n}\r\n.rounded-bl {\n  border-bottom-left-radius: 0.25rem;\n}\r\n.rounded-bl-xl {\n  border-bottom-left-radius: 0.75rem;\n}\r\n.rounded-br {\n  border-bottom-right-radius: 0.25rem;\n}\r\n.rounded-br-lg {\n  border-bottom-right-radius: 0.5rem;\n}\r\n.rounded-br-xl {\n  border-bottom-right-radius: 0.75rem;\n}\r\n.rounded-tl {\n  border-top-left-radius: 0.25rem;\n}\r\n.rounded-tr {\n  border-top-right-radius: 0.25rem;\n}\r\n.rounded-tr-xl {\n  border-top-right-radius: 0.75rem;\n}\r\n.border {\n  border-width: 1px;\n}\r\n.border-0 {\n  border-width: 0px;\n}\r\n.border-2 {\n  border-width: 2px;\n}\r\n.border-4 {\n  border-width: 4px;\n}\r\n.border-x {\n  border-left-width: 1px;\n  border-right-width: 1px;\n}\r\n.border-b {\n  border-bottom-width: 1px;\n}\r\n.border-b-2 {\n  border-bottom-width: 2px;\n}\r\n.border-b-4 {\n  border-bottom-width: 4px;\n}\r\n.border-l {\n  border-left-width: 1px;\n}\r\n.border-l-2 {\n  border-left-width: 2px;\n}\r\n.border-l-4 {\n  border-left-width: 4px;\n}\r\n.border-r {\n  border-right-width: 1px;\n}\r\n.border-r-2 {\n  border-right-width: 2px;\n}\r\n.border-t {\n  border-top-width: 1px;\n}\r\n.border-t-2 {\n  border-top-width: 2px;\n}\r\n.border-t-4 {\n  border-top-width: 4px;\n}\r\n.border-dashed {\n  border-style: dashed;\n}\r\n.border-none {\n  border-style: none;\n}\r\n.border-blue-400 {\n  --tw-border-opacity: 1;\n  border-color: rgb(96 165 250 / var(--tw-border-opacity));\n}\r\n.border-blue-50 {\n  --tw-border-opacity: 1;\n  border-color: rgb(239 246 255 / var(--tw-border-opacity));\n}\r\n.border-blue-500 {\n  --tw-border-opacity: 1;\n  border-color: rgb(59 130 246 / var(--tw-border-opacity));\n}\r\n.border-blue-600 {\n  --tw-border-opacity: 1;\n  border-color: rgb(37 99 235 / var(--tw-border-opacity));\n}\r\n.border-current {\n  border-color: currentColor;\n}\r\n.border-gray-100 {\n  --tw-border-opacity: 1;\n  border-color: rgb(243 244 246 / var(--tw-border-opacity));\n}\r\n.border-gray-200 {\n  --tw-border-opacity: 1;\n  border-color: rgb(229 231 235 / var(--tw-border-opacity));\n}\r\n.border-gray-300 {\n  --tw-border-opacity: 1;\n  border-color: rgb(209 213 219 / var(--tw-border-opacity));\n}\r\n.border-gray-400 {\n  --tw-border-opacity: 1;\n  border-color: rgb(156 163 175 / var(--tw-border-opacity));\n}\r\n.border-gray-500 {\n  --tw-border-opacity: 1;\n  border-color: rgb(107 114 128 / var(--tw-border-opacity));\n}\r\n.border-gray-600 {\n  --tw-border-opacity: 1;\n  border-color: rgb(75 85 99 / var(--tw-border-opacity));\n}\r\n.border-gray-700 {\n  --tw-border-opacity: 1;\n  border-color: rgb(55 65 81 / var(--tw-border-opacity));\n}\r\n.border-gray-800 {\n  --tw-border-opacity: 1;\n  border-color: rgb(31 41 55 / var(--tw-border-opacity));\n}\r\n.border-gray-900 {\n  --tw-border-opacity: 1;\n  border-color: rgb(17 24 39 / var(--tw-border-opacity));\n}\r\n.border-green-500 {\n  --tw-border-opacity: 1;\n  border-color: rgb(34 197 94 / var(--tw-border-opacity));\n}\r\n.border-indigo-100 {\n  --tw-border-opacity: 1;\n  border-color: rgb(224 231 255 / var(--tw-border-opacity));\n}\r\n.border-indigo-500 {\n  --tw-border-opacity: 1;\n  border-color: rgb(99 102 241 / var(--tw-border-opacity));\n}\r\n.border-indigo-600 {\n  --tw-border-opacity: 1;\n  border-color: rgb(79 70 229 / var(--tw-border-opacity));\n}\r\n.border-pink-600 {\n  --tw-border-opacity: 1;\n  border-color: rgb(219 39 119 / var(--tw-border-opacity));\n}\r\n.border-transparent {\n  border-color: transparent;\n}\r\n.border-white {\n  --tw-border-opacity: 1;\n  border-color: rgb(255 255 255 / var(--tw-border-opacity));\n}\r\n.border-white\\/10 {\n  border-color: rgb(255 255 255 / 0.1);\n}\r\n.border-white\\/20 {\n  border-color: rgb(255 255 255 / 0.2);\n}\r\n.border-white\\/25 {\n  border-color: rgb(255 255 255 / 0.25);\n}\r\n.border-white\\/\\[\\.05\\] {\n  border-color: rgb(255 255 255 / .05);\n}\r\n.border-white\\/\\[\\.3\\] {\n  border-color: rgb(255 255 255 / .3);\n}\r\n.border-white\\/\\[\\.5\\] {\n  border-color: rgb(255 255 255 / .5);\n}\r\n.border-x-gray-200 {\n  --tw-border-opacity: 1;\n  border-left-color: rgb(229 231 235 / var(--tw-border-opacity));\n  border-right-color: rgb(229 231 235 / var(--tw-border-opacity));\n}\r\n.border-b-transparent {\n  border-bottom-color: transparent;\n}\r\n.border-r-gray-200 {\n  --tw-border-opacity: 1;\n  border-right-color: rgb(229 231 235 / var(--tw-border-opacity));\n}\r\n.border-r-white\\/\\[\\.7\\] {\n  border-right-color: rgb(255 255 255 / .7);\n}\r\n.border-opacity-50 {\n  --tw-border-opacity: 0.5;\n}\r\n.border-opacity-60 {\n  --tw-border-opacity: 0.6;\n}\r\n.bg-amber-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(245 158 11 / var(--tw-bg-opacity));\n}\r\n.bg-black {\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity));\n}\r\n.bg-black\\/60 {\n  background-color: rgb(0 0 0 / 0.6);\n}\r\n.bg-blue-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(219 234 254 / var(--tw-bg-opacity));\n}\r\n.bg-blue-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(96 165 250 / var(--tw-bg-opacity));\n}\r\n.bg-blue-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(59 130 246 / var(--tw-bg-opacity));\n}\r\n.bg-blue-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(37 99 235 / var(--tw-bg-opacity));\n}\r\n.bg-blue-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(29 78 216 / var(--tw-bg-opacity));\n}\r\n.bg-emerald-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(5 150 105 / var(--tw-bg-opacity));\n}\r\n.bg-gray-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity));\n}\r\n.bg-gray-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(229 231 235 / var(--tw-bg-opacity));\n}\r\n.bg-gray-300 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(209 213 219 / var(--tw-bg-opacity));\n}\r\n.bg-gray-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(156 163 175 / var(--tw-bg-opacity));\n}\r\n.bg-gray-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(249 250 251 / var(--tw-bg-opacity));\n}\r\n.bg-gray-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(107 114 128 / var(--tw-bg-opacity));\n}\r\n.bg-gray-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(75 85 99 / var(--tw-bg-opacity));\n}\r\n.bg-gray-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(55 65 81 / var(--tw-bg-opacity));\n}\r\n.bg-gray-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity));\n}\r\n.bg-gray-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(17 24 39 / var(--tw-bg-opacity));\n}\r\n.bg-green-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(34 197 94 / var(--tw-bg-opacity));\n}\r\n.bg-green-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(22 163 74 / var(--tw-bg-opacity));\n}\r\n.bg-indigo-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(224 231 255 / var(--tw-bg-opacity));\n}\r\n.bg-indigo-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(199 210 254 / var(--tw-bg-opacity));\n}\r\n.bg-indigo-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(129 140 248 / var(--tw-bg-opacity));\n}\r\n.bg-indigo-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(238 242 255 / var(--tw-bg-opacity));\n}\r\n.bg-indigo-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(99 102 241 / var(--tw-bg-opacity));\n}\r\n.bg-indigo-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(79 70 229 / var(--tw-bg-opacity));\n}\r\n.bg-pink-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(236 72 153 / var(--tw-bg-opacity));\n}\r\n.bg-pink-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(219 39 119 / var(--tw-bg-opacity));\n}\r\n.bg-primary {\n  --tw-bg-opacity: 1;\n  background-color: rgb(38 128 235 / var(--tw-bg-opacity));\n}\r\n.bg-purple-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(233 213 255 / var(--tw-bg-opacity));\n}\r\n.bg-red-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(239 68 68 / var(--tw-bg-opacity));\n}\r\n.bg-red-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(220 38 38 / var(--tw-bg-opacity));\n}\r\n.bg-red-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(185 28 28 / var(--tw-bg-opacity));\n}\r\n.bg-rose-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(244 63 94 / var(--tw-bg-opacity));\n}\r\n.bg-slate-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(248 250 252 / var(--tw-bg-opacity));\n}\r\n.bg-slate-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(30 41 59 / var(--tw-bg-opacity));\n}\r\n.bg-slate-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(15 23 42 / var(--tw-bg-opacity));\n}\r\n.bg-teal-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(45 212 191 / var(--tw-bg-opacity));\n}\r\n.bg-teal-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(20 184 166 / var(--tw-bg-opacity));\n}\r\n.bg-transparent {\n  background-color: transparent;\n}\r\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\r\n.bg-white\\/10 {\n  background-color: rgb(255 255 255 / 0.1);\n}\r\n.bg-white\\/60 {\n  background-color: rgb(255 255 255 / 0.6);\n}\r\n.bg-white\\/75 {\n  background-color: rgb(255 255 255 / 0.75);\n}\r\n.bg-white\\/\\[\\.03\\] {\n  background-color: rgb(255 255 255 / .03);\n}\r\n.bg-white\\/\\[\\.05\\] {\n  background-color: rgb(255 255 255 / .05);\n}\r\n.bg-white\\/\\[\\.075\\] {\n  background-color: rgb(255 255 255 / .075);\n}\r\n.bg-white\\/\\[\\.6\\] {\n  background-color: rgb(255 255 255 / .6);\n}\r\n.bg-yellow-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(250 204 21 / var(--tw-bg-opacity));\n}\r\n.bg-opacity-50 {\n  --tw-bg-opacity: 0.5;\n}\r\n.bg-opacity-75 {\n  --tw-bg-opacity: 0.75;\n}\r\n.bg-\\[url\\(\\'https\\:\\/\\/images\\.unsplash\\.com\\/photo-1606868306217-dbf5046868d2\\?ixlib\\=rb-4\\.0\\.3\\&ixid\\=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\\&auto\\=format\\&fit\\=crop\\&w\\=1981\\&q\\=80\\'\\)\\] {\n  background-image: url('https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80');\n}\r\n.bg-\\[url\\(\\'https\\:\\/\\/images\\.unsplash\\.com\\/photo-1634017839464-5c339ebe3cb4\\?ixlib\\=rb-4\\.0\\.3\\&ixid\\=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\\&auto\\=format\\&fit\\=crop\\&w\\=3000\\&q\\=80\\'\\)\\] {\n  background-image: url('https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80');\n}\r\n.bg-\\[url\\(\\'https\\:\\/\\/preline\\.co\\/assets\\/svg\\/component\\/abstract-1\\.svg\\'\\)\\] {\n  background-image: url('https://preline.co/assets/svg/component/abstract-1.svg');\n}\r\n.bg-\\[url\\(https\\:\\/\\/images\\.unsplash\\.com\\/photo-1604014237800-1c9102c219da\\?ixlib\\=rb-1\\.2\\.1\\&ixid\\=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\\&auto\\=format\\&fit\\=crop\\&w\\=1770\\&q\\=80\\)\\] {\n  background-image: url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80);\n}\r\n.bg-gradient-to-b {\n  background-image: linear-gradient(to bottom, var(--tw-gradient-stops));\n}\r\n.bg-gradient-to-br {\n  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));\n}\r\n.bg-gradient-to-r {\n  background-image: linear-gradient(to right, var(--tw-gradient-stops));\n}\r\n.bg-gradient-to-t {\n  background-image: linear-gradient(to top, var(--tw-gradient-stops));\n}\r\n.bg-gradient-to-tl {\n  background-image: linear-gradient(to top left, var(--tw-gradient-stops));\n}\r\n.bg-gradient-to-tr {\n  background-image: linear-gradient(to top right, var(--tw-gradient-stops));\n}\r\n.from-blue-50 {\n  --tw-gradient-from: #eff6ff var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(239 246 255 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\r\n.from-blue-500 {\n  --tw-gradient-from: #3b82f6 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(59 130 246 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\r\n.from-blue-600 {\n  --tw-gradient-from: #2563eb var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(37 99 235 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\r\n.from-blue-700 {\n  --tw-gradient-from: #1d4ed8 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(29 78 216 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\r\n.from-gray-200 {\n  --tw-gradient-from: #e5e7eb var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(229 231 235 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\r\n.from-gray-700 {\n  --tw-gradient-from: #374151 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(55 65 81 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\r\n.from-gray-800 {\n  --tw-gradient-from: #1f2937 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(31 41 55 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\r\n.from-green-300 {\n  --tw-gradient-from: #86efac var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(134 239 172 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\r\n.from-indigo-500 {\n  --tw-gradient-from: #6366f1 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(99 102 241 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\r\n.from-orange-500 {\n  --tw-gradient-from: #f97316 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(249 115 22 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\r\n.from-pink-500 {\n  --tw-gradient-from: #ec4899 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(236 72 153 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\r\n.from-purple-600 {\n  --tw-gradient-from: #9333ea var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(147 51 234 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\r\n.from-red-500 {\n  --tw-gradient-from: #ef4444 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(239 68 68 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\r\n.from-teal-500 {\n  --tw-gradient-from: #14b8a6 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(20 184 166 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\r\n.from-violet-300\\/50 {\n  --tw-gradient-from: rgb(196 181 253 / 0.5) var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(196 181 253 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\r\n.from-violet-600\\/\\[\\.15\\] {\n  --tw-gradient-from: rgb(124 58 237 / .15) var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(124 58 237 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\r\n.via-blue-100 {\n  --tw-gradient-to: rgb(219 234 254 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #dbeafe var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\r\n.via-blue-500 {\n  --tw-gradient-to: rgb(59 130 246 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #3b82f6 var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\r\n.via-blue-800 {\n  --tw-gradient-to: rgb(30 64 175 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #1e40af var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\r\n.via-indigo-500 {\n  --tw-gradient-to: rgb(99 102 241 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #6366f1 var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\r\n.via-pink-500 {\n  --tw-gradient-to: rgb(236 72 153 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #ec4899 var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\r\n.via-purple-400 {\n  --tw-gradient-to: rgb(192 132 252 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #c084fc var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\r\n.via-red-500 {\n  --tw-gradient-to: rgb(239 68 68 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #ef4444 var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\r\n.via-transparent {\n  --tw-gradient-to: rgb(0 0 0 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), transparent var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\r\n.via-white\\/0 {\n  --tw-gradient-to: rgb(255 255 255 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), rgb(255 255 255 / 0) var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\r\n.to-blue-400 {\n  --tw-gradient-to: #60a5fa var(--tw-gradient-to-position);\n}\r\n.to-blue-50 {\n  --tw-gradient-to: #eff6ff var(--tw-gradient-to-position);\n}\r\n.to-blue-500 {\n  --tw-gradient-to: #3b82f6 var(--tw-gradient-to-position);\n}\r\n.to-blue-900 {\n  --tw-gradient-to: #1e3a8a var(--tw-gradient-to-position);\n}\r\n.to-cyan-400 {\n  --tw-gradient-to: #22d3ee var(--tw-gradient-to-position);\n}\r\n.to-gray-900 {\n  --tw-gradient-to: #111827 var(--tw-gradient-to-position);\n}\r\n.to-purple-100 {\n  --tw-gradient-to: #f3e8ff var(--tw-gradient-to-position);\n}\r\n.to-purple-600 {\n  --tw-gradient-to: #9333ea var(--tw-gradient-to-position);\n}\r\n.to-red-500 {\n  --tw-gradient-to: #ef4444 var(--tw-gradient-to-position);\n}\r\n.to-sky-500 {\n  --tw-gradient-to: #0ea5e9 var(--tw-gradient-to-position);\n}\r\n.to-transparent {\n  --tw-gradient-to: transparent var(--tw-gradient-to-position);\n}\r\n.to-violet-400 {\n  --tw-gradient-to: #a78bfa var(--tw-gradient-to-position);\n}\r\n.to-violet-500 {\n  --tw-gradient-to: #8b5cf6 var(--tw-gradient-to-position);\n}\r\n.to-violet-600 {\n  --tw-gradient-to: #7c3aed var(--tw-gradient-to-position);\n}\r\n.to-white {\n  --tw-gradient-to: #fff var(--tw-gradient-to-position);\n}\r\n.to-white\\/0 {\n  --tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position);\n}\r\n.to-yellow-500 {\n  --tw-gradient-to: #eab308 var(--tw-gradient-to-position);\n}\r\n.bg-cover {\n  background-size: cover;\n}\r\n.bg-clip-text {\n  -webkit-background-clip: text;\n          background-clip: text;\n}\r\n.bg-center {\n  background-position: center;\n}\r\n.bg-no-repeat {\n  background-repeat: no-repeat;\n}\r\n.fill-black {\n  fill: #000;\n}\r\n.fill-blue-600 {\n  fill: #2563eb;\n}\r\n.fill-current {\n  fill: currentColor;\n}\r\n.fill-cyan-500 {\n  fill: #06b6d4;\n}\r\n.fill-cyan-600 {\n  fill: #0891b2;\n}\r\n.fill-gray-300 {\n  fill: #d1d5db;\n}\r\n.fill-gray-500 {\n  fill: #6b7280;\n}\r\n.fill-gray-600 {\n  fill: #4b5563;\n}\r\n.fill-gray-800 {\n  fill: #1f2937;\n}\r\n.fill-orange-500 {\n  fill: #f97316;\n}\r\n.fill-white {\n  fill: #fff;\n}\r\n.object-cover {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\r\n.object-center {\n  -o-object-position: center;\n     object-position: center;\n}\r\n.p-0 {\n  padding: 0px;\n}\r\n.p-0\\.5 {\n  padding: 0.125rem;\n}\r\n.p-1 {\n  padding: 0.25rem;\n}\r\n.p-1\\.5 {\n  padding: 0.375rem;\n}\r\n.p-10 {\n  padding: 2.5rem;\n}\r\n.p-12 {\n  padding: 3rem;\n}\r\n.p-2 {\n  padding: 0.5rem;\n}\r\n.p-2\\.5 {\n  padding: 0.625rem;\n}\r\n.p-3 {\n  padding: 0.75rem;\n}\r\n.p-4 {\n  padding: 1rem;\n}\r\n.p-5 {\n  padding: 1.25rem;\n}\r\n.p-6 {\n  padding: 1.5rem;\n}\r\n.p-8 {\n  padding: 2rem;\n}\r\n.p-px {\n  padding: 1px;\n}\r\n.px-1 {\n  padding-left: 0.25rem;\n  padding-right: 0.25rem;\n}\r\n.px-1\\.5 {\n  padding-left: 0.375rem;\n  padding-right: 0.375rem;\n}\r\n.px-10 {\n  padding-left: 2.5rem;\n  padding-right: 2.5rem;\n}\r\n.px-12 {\n  padding-left: 3rem;\n  padding-right: 3rem;\n}\r\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\r\n.px-2\\.5 {\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n}\r\n.px-24 {\n  padding-left: 6rem;\n  padding-right: 6rem;\n}\r\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\r\n.px-3\\.5 {\n  padding-left: 0.875rem;\n  padding-right: 0.875rem;\n}\r\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\r\n.px-5 {\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n}\r\n.px-6 {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\r\n.px-8 {\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\r\n.py-0 {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\r\n.py-0\\.5 {\n  padding-top: 0.125rem;\n  padding-bottom: 0.125rem;\n}\r\n.py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\r\n.py-1\\.5 {\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n}\r\n.py-10 {\n  padding-top: 2.5rem;\n  padding-bottom: 2.5rem;\n}\r\n.py-12 {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n}\r\n.py-16 {\n  padding-top: 4rem;\n  padding-bottom: 4rem;\n}\r\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\r\n.py-2\\.5 {\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem;\n}\r\n.py-20 {\n  padding-top: 5rem;\n  padding-bottom: 5rem;\n}\r\n.py-24 {\n  padding-top: 6rem;\n  padding-bottom: 6rem;\n}\r\n.py-3 {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\r\n.py-32 {\n  padding-top: 8rem;\n  padding-bottom: 8rem;\n}\r\n.py-4 {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\r\n.py-5 {\n  padding-top: 1.25rem;\n  padding-bottom: 1.25rem;\n}\r\n.py-6 {\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n}\r\n.py-8 {\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n}\r\n.py-\\[\\.4125rem\\] {\n  padding-top: .4125rem;\n  padding-bottom: .4125rem;\n}\r\n.pb-0 {\n  padding-bottom: 0px;\n}\r\n.pb-1 {\n  padding-bottom: 0.25rem;\n}\r\n.pb-1\\.5 {\n  padding-bottom: 0.375rem;\n}\r\n.pb-10 {\n  padding-bottom: 2.5rem;\n}\r\n.pb-12 {\n  padding-bottom: 3rem;\n}\r\n.pb-16 {\n  padding-bottom: 4rem;\n}\r\n.pb-2 {\n  padding-bottom: 0.5rem;\n}\r\n.pb-20 {\n  padding-bottom: 5rem;\n}\r\n.pb-24 {\n  padding-bottom: 6rem;\n}\r\n.pb-3 {\n  padding-bottom: 0.75rem;\n}\r\n.pb-4 {\n  padding-bottom: 1rem;\n}\r\n.pb-5 {\n  padding-bottom: 1.25rem;\n}\r\n.pb-6 {\n  padding-bottom: 1.5rem;\n}\r\n.pb-8 {\n  padding-bottom: 2rem;\n}\r\n.pe-4 {\n  padding-inline-end: 1rem;\n}\r\n.pl-0 {\n  padding-left: 0px;\n}\r\n.pl-10 {\n  padding-left: 2.5rem;\n}\r\n.pl-2 {\n  padding-left: 0.5rem;\n}\r\n.pl-3 {\n  padding-left: 0.75rem;\n}\r\n.pl-4 {\n  padding-left: 1rem;\n}\r\n.pl-5 {\n  padding-left: 1.25rem;\n}\r\n.pl-6 {\n  padding-left: 1.5rem;\n}\r\n.pr-0 {\n  padding-right: 0px;\n}\r\n.pr-10 {\n  padding-right: 2.5rem;\n}\r\n.pr-12 {\n  padding-right: 3rem;\n}\r\n.pr-16 {\n  padding-right: 4rem;\n}\r\n.pr-3 {\n  padding-right: 0.75rem;\n}\r\n.pr-32 {\n  padding-right: 8rem;\n}\r\n.pr-4 {\n  padding-right: 1rem;\n}\r\n.pr-6 {\n  padding-right: 1.5rem;\n}\r\n.pr-8 {\n  padding-right: 2rem;\n}\r\n.ps-11 {\n  padding-inline-start: 2.75rem;\n}\r\n.ps-4 {\n  padding-inline-start: 1rem;\n}\r\n.pt-0 {\n  padding-top: 0px;\n}\r\n.pt-10 {\n  padding-top: 2.5rem;\n}\r\n.pt-12 {\n  padding-top: 3rem;\n}\r\n.pt-16 {\n  padding-top: 4rem;\n}\r\n.pt-2 {\n  padding-top: 0.5rem;\n}\r\n.pt-24 {\n  padding-top: 6rem;\n}\r\n.pt-3 {\n  padding-top: 0.75rem;\n}\r\n.pt-32 {\n  padding-top: 8rem;\n}\r\n.pt-4 {\n  padding-top: 1rem;\n}\r\n.pt-5 {\n  padding-top: 1.25rem;\n}\r\n.pt-6 {\n  padding-top: 1.5rem;\n}\r\n.pt-7 {\n  padding-top: 1.75rem;\n}\r\n.pt-8 {\n  padding-top: 2rem;\n}\r\n.pt-\\[50\\%\\] {\n  padding-top: 50%;\n}\r\n.text-left {\n  text-align: left;\n}\r\n.text-center {\n  text-align: center;\n}\r\n.text-right {\n  text-align: right;\n}\r\n.align-middle {\n  vertical-align: middle;\n}\r\n.font-mono {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\r\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\r\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\r\n.text-4xl {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\r\n.text-5xl {\n  font-size: 3rem;\n  line-height: 1;\n}\r\n.text-6xl {\n  font-size: 3.75rem;\n  line-height: 1;\n}\r\n.text-7xl {\n  font-size: 4.5rem;\n  line-height: 1;\n}\r\n.text-\\[\\.25rem\\] {\n  font-size: .25rem;\n}\r\n.text-\\[11px\\] {\n  font-size: 11px;\n}\r\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\r\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\r\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\r\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\r\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\r\n.font-bold {\n  font-weight: 700;\n}\r\n.font-extrabold {\n  font-weight: 800;\n}\r\n.font-light {\n  font-weight: 300;\n}\r\n.font-medium {\n  font-weight: 500;\n}\r\n.font-normal {\n  font-weight: 400;\n}\r\n.font-semibold {\n  font-weight: 600;\n}\r\n.uppercase {\n  text-transform: uppercase;\n}\r\n.capitalize {\n  text-transform: capitalize;\n}\r\n.italic {\n  font-style: italic;\n}\r\n.not-italic {\n  font-style: normal;\n}\r\n.leading-10 {\n  line-height: 2.5rem;\n}\r\n.leading-3 {\n  line-height: .75rem;\n}\r\n.leading-4 {\n  line-height: 1rem;\n}\r\n.leading-5 {\n  line-height: 1.25rem;\n}\r\n.leading-6 {\n  line-height: 1.5rem;\n}\r\n.leading-7 {\n  line-height: 1.75rem;\n}\r\n.leading-8 {\n  line-height: 2rem;\n}\r\n.leading-\\[4rem\\] {\n  line-height: 4rem;\n}\r\n.leading-loose {\n  line-height: 2;\n}\r\n.leading-none {\n  line-height: 1;\n}\r\n.leading-normal {\n  line-height: 1.5;\n}\r\n.leading-relaxed {\n  line-height: 1.625;\n}\r\n.leading-tight {\n  line-height: 1.25;\n}\r\n.tracking-tight {\n  letter-spacing: -0.025em;\n}\r\n.tracking-wide {\n  letter-spacing: 0.025em;\n}\r\n.tracking-wider {\n  letter-spacing: 0.05em;\n}\r\n.tracking-widest {\n  letter-spacing: 0.1em;\n}\r\n.text-\\[\\#00acee\\] {\n  --tw-text-opacity: 1;\n  color: rgb(0 172 238 / var(--tw-text-opacity));\n}\r\n.text-\\[\\#39569c\\] {\n  --tw-text-opacity: 1;\n  color: rgb(57 86 156 / var(--tw-text-opacity));\n}\r\n.text-\\[\\#ea4c89\\] {\n  --tw-text-opacity: 1;\n  color: rgb(234 76 137 / var(--tw-text-opacity));\n}\r\n.text-amber-500 {\n  --tw-text-opacity: 1;\n  color: rgb(245 158 11 / var(--tw-text-opacity));\n}\r\n.text-black {\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n}\r\n.text-blue-200 {\n  --tw-text-opacity: 1;\n  color: rgb(191 219 254 / var(--tw-text-opacity));\n}\r\n.text-blue-300 {\n  --tw-text-opacity: 1;\n  color: rgb(147 197 253 / var(--tw-text-opacity));\n}\r\n.text-blue-400 {\n  --tw-text-opacity: 1;\n  color: rgb(96 165 250 / var(--tw-text-opacity));\n}\r\n.text-blue-500 {\n  --tw-text-opacity: 1;\n  color: rgb(59 130 246 / var(--tw-text-opacity));\n}\r\n.text-blue-600 {\n  --tw-text-opacity: 1;\n  color: rgb(37 99 235 / var(--tw-text-opacity));\n}\r\n.text-blue-700 {\n  --tw-text-opacity: 1;\n  color: rgb(29 78 216 / var(--tw-text-opacity));\n}\r\n.text-blue-800 {\n  --tw-text-opacity: 1;\n  color: rgb(30 64 175 / var(--tw-text-opacity));\n}\r\n.text-cyan-500 {\n  --tw-text-opacity: 1;\n  color: rgb(6 182 212 / var(--tw-text-opacity));\n}\r\n.text-gray-100 {\n  --tw-text-opacity: 1;\n  color: rgb(243 244 246 / var(--tw-text-opacity));\n}\r\n.text-gray-200 {\n  --tw-text-opacity: 1;\n  color: rgb(229 231 235 / var(--tw-text-opacity));\n}\r\n.text-gray-300 {\n  --tw-text-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-text-opacity));\n}\r\n.text-gray-400 {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity));\n}\r\n.text-gray-500 {\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity));\n}\r\n.text-gray-600 {\n  --tw-text-opacity: 1;\n  color: rgb(75 85 99 / var(--tw-text-opacity));\n}\r\n.text-gray-700 {\n  --tw-text-opacity: 1;\n  color: rgb(55 65 81 / var(--tw-text-opacity));\n}\r\n.text-gray-800 {\n  --tw-text-opacity: 1;\n  color: rgb(31 41 55 / var(--tw-text-opacity));\n}\r\n.text-gray-900 {\n  --tw-text-opacity: 1;\n  color: rgb(17 24 39 / var(--tw-text-opacity));\n}\r\n.text-green-500 {\n  --tw-text-opacity: 1;\n  color: rgb(34 197 94 / var(--tw-text-opacity));\n}\r\n.text-green-600 {\n  --tw-text-opacity: 1;\n  color: rgb(22 163 74 / var(--tw-text-opacity));\n}\r\n.text-indigo-100 {\n  --tw-text-opacity: 1;\n  color: rgb(224 231 255 / var(--tw-text-opacity));\n}\r\n.text-indigo-200 {\n  --tw-text-opacity: 1;\n  color: rgb(199 210 254 / var(--tw-text-opacity));\n}\r\n.text-indigo-300 {\n  --tw-text-opacity: 1;\n  color: rgb(165 180 252 / var(--tw-text-opacity));\n}\r\n.text-indigo-400 {\n  --tw-text-opacity: 1;\n  color: rgb(129 140 248 / var(--tw-text-opacity));\n}\r\n.text-indigo-50 {\n  --tw-text-opacity: 1;\n  color: rgb(238 242 255 / var(--tw-text-opacity));\n}\r\n.text-indigo-500 {\n  --tw-text-opacity: 1;\n  color: rgb(99 102 241 / var(--tw-text-opacity));\n}\r\n.text-indigo-600 {\n  --tw-text-opacity: 1;\n  color: rgb(79 70 229 / var(--tw-text-opacity));\n}\r\n.text-indigo-800 {\n  --tw-text-opacity: 1;\n  color: rgb(55 48 163 / var(--tw-text-opacity));\n}\r\n.text-orange-500 {\n  --tw-text-opacity: 1;\n  color: rgb(249 115 22 / var(--tw-text-opacity));\n}\r\n.text-pink-500 {\n  --tw-text-opacity: 1;\n  color: rgb(236 72 153 / var(--tw-text-opacity));\n}\r\n.text-pink-600 {\n  --tw-text-opacity: 1;\n  color: rgb(219 39 119 / var(--tw-text-opacity));\n}\r\n.text-red-400 {\n  --tw-text-opacity: 1;\n  color: rgb(248 113 113 / var(--tw-text-opacity));\n}\r\n.text-red-500 {\n  --tw-text-opacity: 1;\n  color: rgb(239 68 68 / var(--tw-text-opacity));\n}\r\n.text-red-600 {\n  --tw-text-opacity: 1;\n  color: rgb(220 38 38 / var(--tw-text-opacity));\n}\r\n.text-red-700 {\n  --tw-text-opacity: 1;\n  color: rgb(185 28 28 / var(--tw-text-opacity));\n}\r\n.text-rose-600 {\n  --tw-text-opacity: 1;\n  color: rgb(225 29 72 / var(--tw-text-opacity));\n}\r\n.text-rose-700 {\n  --tw-text-opacity: 1;\n  color: rgb(190 18 60 / var(--tw-text-opacity));\n}\r\n.text-slate-400 {\n  --tw-text-opacity: 1;\n  color: rgb(148 163 184 / var(--tw-text-opacity));\n}\r\n.text-slate-600 {\n  --tw-text-opacity: 1;\n  color: rgb(71 85 105 / var(--tw-text-opacity));\n}\r\n.text-teal-300 {\n  --tw-text-opacity: 1;\n  color: rgb(94 234 212 / var(--tw-text-opacity));\n}\r\n.text-transparent {\n  color: transparent;\n}\r\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\r\n.text-white\\/50 {\n  color: rgb(255 255 255 / 0.5);\n}\r\n.text-white\\/90 {\n  color: rgb(255 255 255 / 0.9);\n}\r\n.text-white\\/\\[\\.5\\] {\n  color: rgb(255 255 255 / .5);\n}\r\n.text-white\\/\\[\\.8\\] {\n  color: rgb(255 255 255 / .8);\n}\r\n.text-white\\/\\[\\.9\\] {\n  color: rgb(255 255 255 / .9);\n}\r\n.text-yellow-400 {\n  --tw-text-opacity: 1;\n  color: rgb(250 204 21 / var(--tw-text-opacity));\n}\r\n.underline {\n  text-decoration-line: underline;\n}\r\n.line-through {\n  text-decoration-line: line-through;\n}\r\n.decoration-blue-500 {\n  text-decoration-color: #3b82f6;\n}\r\n.decoration-2 {\n  text-decoration-thickness: 2px;\n}\r\n.underline-offset-2 {\n  text-underline-offset: 2px;\n}\r\n.antialiased {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\r\n.placeholder-gray-300::-moz-placeholder {\n  --tw-placeholder-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-placeholder-opacity));\n}\r\n.placeholder-gray-300::placeholder {\n  --tw-placeholder-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-placeholder-opacity));\n}\r\n.placeholder-gray-400::-moz-placeholder {\n  --tw-placeholder-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-placeholder-opacity));\n}\r\n.placeholder-gray-400::placeholder {\n  --tw-placeholder-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-placeholder-opacity));\n}\r\n.placeholder-gray-500::-moz-placeholder {\n  --tw-placeholder-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-placeholder-opacity));\n}\r\n.placeholder-gray-500::placeholder {\n  --tw-placeholder-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-placeholder-opacity));\n}\r\n.placeholder-indigo-100::-moz-placeholder {\n  --tw-placeholder-opacity: 1;\n  color: rgb(224 231 255 / var(--tw-placeholder-opacity));\n}\r\n.placeholder-indigo-100::placeholder {\n  --tw-placeholder-opacity: 1;\n  color: rgb(224 231 255 / var(--tw-placeholder-opacity));\n}\r\n.caret-white {\n  caret-color: #fff;\n}\r\n.opacity-0 {\n  opacity: 0;\n}\r\n.opacity-100 {\n  opacity: 1;\n}\r\n.opacity-20 {\n  opacity: 0.2;\n}\r\n.opacity-25 {\n  opacity: 0.25;\n}\r\n.opacity-50 {\n  opacity: 0.5;\n}\r\n.opacity-75 {\n  opacity: 0.75;\n}\r\n.mix-blend-multiply {\n  mix-blend-mode: multiply;\n}\r\n.shadow {\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\r\n.shadow-2xl {\n  --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);\n  --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\r\n.shadow-\\[0_2\\.75rem_3\\.5rem_-2rem_rgb\\(45_55_75_\\/_20\\%\\)\\2c _0_0_5rem_-2rem_rgb\\(45_55_75_\\/_15\\%\\)\\] {\n  --tw-shadow: 0 2.75rem 3.5rem -2rem rgb(45 55 75 / 20%), 0 0 5rem -2rem rgb(45 55 75 / 15%);\n  --tw-shadow-colored: 0 2.75rem 3.5rem -2rem var(--tw-shadow-color), 0 0 5rem -2rem var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\r\n.shadow-\\[0_2\\.75rem_5\\.5rem_-3\\.5rem_rgb\\(0_0_0_\\/_20\\%\\)\\2c _0_2rem_4rem_-2rem_rgb\\(0_0_0_\\/_30\\%\\)\\2c _inset_0_-0\\.1875rem_0\\.3125rem_0_rgb\\(0_0_0_\\/_20\\%\\)\\] {\n  --tw-shadow: 0 2.75rem 5.5rem -3.5rem rgb(0 0 0 / 20%), 0 2rem 4rem -2rem rgb(0 0 0 / 30%), inset 0 -0.1875rem 0.3125rem 0 rgb(0 0 0 / 20%);\n  --tw-shadow-colored: 0 2.75rem 5.5rem -3.5rem var(--tw-shadow-color), 0 2rem 4rem -2rem var(--tw-shadow-color), inset 0 -0.1875rem 0.3125rem 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\r\n.shadow-\\[0_2\\.75rem_5\\.5rem_-3\\.5rem_rgb\\(45_55_75_\\/_20\\%\\)\\2c _0_2rem_4rem_-2rem_rgb\\(45_55_75_\\/_30\\%\\)\\2c _inset_0_-0\\.1875rem_0\\.3125rem_0_rgb\\(45_55_75_\\/_20\\%\\)\\] {\n  --tw-shadow: 0 2.75rem 5.5rem -3.5rem rgb(45 55 75 / 20%), 0 2rem 4rem -2rem rgb(45 55 75 / 30%), inset 0 -0.1875rem 0.3125rem 0 rgb(45 55 75 / 20%);\n  --tw-shadow-colored: 0 2.75rem 5.5rem -3.5rem var(--tw-shadow-color), 0 2rem 4rem -2rem var(--tw-shadow-color), inset 0 -0.1875rem 0.3125rem 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\r\n.shadow-lg {\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\r\n.shadow-md {\n  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\r\n.shadow-sm {\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\r\n.shadow-xl {\n  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\r\n.shadow-gray-100 {\n  --tw-shadow-color: #f3f4f6;\n  --tw-shadow: var(--tw-shadow-colored);\n}\r\n.shadow-gray-200 {\n  --tw-shadow-color: #e5e7eb;\n  --tw-shadow: var(--tw-shadow-colored);\n}\r\n.shadow-gray-300\\/50 {\n  --tw-shadow-color: rgb(209 213 219 / 0.5);\n  --tw-shadow: var(--tw-shadow-colored);\n}\r\n.shadow-transparent {\n  --tw-shadow-color: transparent;\n  --tw-shadow: var(--tw-shadow-colored);\n}\r\n.outline-none {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\r\n.outline {\n  outline-style: solid;\n}\r\n.ring {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\r\n.ring-1 {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\r\n.ring-2 {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\r\n.ring-4 {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\r\n.ring-blue-200 {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(191 219 254 / var(--tw-ring-opacity));\n}\r\n.ring-blue-300 {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(147 197 253 / var(--tw-ring-opacity));\n}\r\n.ring-gray-300 {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity));\n}\r\n.ring-gray-800 {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(31 41 55 / var(--tw-ring-opacity));\n}\r\n.ring-indigo-300 {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(165 180 252 / var(--tw-ring-opacity));\n}\r\n.ring-transparent {\n  --tw-ring-color: transparent;\n}\r\n.ring-white {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(255 255 255 / var(--tw-ring-opacity));\n}\r\n.ring-offset-1 {\n  --tw-ring-offset-width: 1px;\n}\r\n.ring-offset-white {\n  --tw-ring-offset-color: #fff;\n}\r\n.blur-3xl {\n  --tw-blur: blur(64px);\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\r\n.grayscale {\n  --tw-grayscale: grayscale(100%);\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\r\n.sepia {\n  --tw-sepia: sepia(100%);\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\r\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\r\n.backdrop-blur {\n  --tw-backdrop-blur: blur(8px);\n  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\r\n.backdrop-blur-lg {\n  --tw-backdrop-blur: blur(16px);\n  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\r\n.backdrop-blur-md {\n  --tw-backdrop-blur: blur(12px);\n  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\r\n.backdrop-blur-sm {\n  --tw-backdrop-blur: blur(4px);\n  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\r\n.transition {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\r\n.transition-\\[height\\] {\n  transition-property: height;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\r\n.transition-\\[opacity\\2c margin\\] {\n  transition-property: opacity,margin;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\r\n.transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\r\n.transition-colors {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\r\n.transition-opacity {\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\r\n.transition-transform {\n  transition-property: transform;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\r\n.duration-100 {\n  transition-duration: 100ms;\n}\r\n.duration-150 {\n  transition-duration: 150ms;\n}\r\n.duration-200 {\n  transition-duration: 200ms;\n}\r\n.duration-300 {\n  transition-duration: 300ms;\n}\r\n.duration-500 {\n  transition-duration: 500ms;\n}\r\n.duration-700 {\n  transition-duration: 700ms;\n}\r\n.duration-\\[0\\.1ms\\] {\n  transition-duration: 0.1ms;\n}\r\n.ease-in-out {\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\r\n.ease-out {\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\r\n.\\[--adaptive\\:none\\] {\n  --adaptive: none;\n}\r\n.\\[--placement\\:bottom\\] {\n  --placement: bottom;\n}\r\n.\\[--placement\\:top-left\\] {\n  --placement: top-left;\n}\r\n.\\[--strategy\\:static\\] {\n  --strategy: static;\n}\r\n.\\[--trigger\\:hover\\] {\n  --trigger: hover;\n}\r\n.\\[column-fill\\:_balance\\] {\n  -moz-column-fill: balance;\n       column-fill: balance;\n}\r\n\r\n.ease-animation {\r\n  transition-timing-function: ease-in;\r\n  transition: 0.2s cubic-bezier(0.2, 1, 0.2, 1);\r\n}\r\n\r\n.rotate-animation {\r\n  transition-timing-function: linear;\r\n  transition: 0.2s;\r\n}\r\n\r\n.placeholder\\:text-white::-moz-placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\r\n\r\n.placeholder\\:text-white::placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\r\n\r\n.before\\:absolute::before {\n  content: var(--tw-content);\n  position: absolute;\n}\r\n\r\n.before\\:-inset-px::before {\n  content: var(--tw-content);\n  inset: -1px;\n}\r\n\r\n.before\\:inset-0::before {\n  content: var(--tw-content);\n  inset: 0px;\n}\r\n\r\n.before\\:inset-x-0::before {\n  content: var(--tw-content);\n  left: 0px;\n  right: 0px;\n}\r\n\r\n.before\\:-right-5::before {\n  content: var(--tw-content);\n  right: -1.25rem;\n}\r\n\r\n.before\\:-top-5::before {\n  content: var(--tw-content);\n  top: -1.25rem;\n}\r\n\r\n.before\\:left-0::before {\n  content: var(--tw-content);\n  left: 0px;\n}\r\n\r\n.before\\:left-1\\/2::before {\n  content: var(--tw-content);\n  left: 50%;\n}\r\n\r\n.before\\:right-2::before {\n  content: var(--tw-content);\n  right: 0.5rem;\n}\r\n\r\n.before\\:right-3::before {\n  content: var(--tw-content);\n  right: 0.75rem;\n}\r\n\r\n.before\\:top-0::before {\n  content: var(--tw-content);\n  top: 0px;\n}\r\n\r\n.before\\:top-1\\/2::before {\n  content: var(--tw-content);\n  top: 50%;\n}\r\n\r\n.before\\:-z-\\[1\\]::before {\n  content: var(--tw-content);\n  z-index: -1;\n}\r\n\r\n.before\\:z-\\[1\\]::before {\n  content: var(--tw-content);\n  z-index: 1;\n}\r\n\r\n.before\\:mr-6::before {\n  content: var(--tw-content);\n  margin-right: 1.5rem;\n}\r\n\r\n.before\\:inline-block::before {\n  content: var(--tw-content);\n  display: inline-block;\n}\r\n\r\n.before\\:h-1::before {\n  content: var(--tw-content);\n  height: 0.25rem;\n}\r\n\r\n.before\\:h-5::before {\n  content: var(--tw-content);\n  height: 1.25rem;\n}\r\n\r\n.before\\:h-6::before {\n  content: var(--tw-content);\n  height: 1.5rem;\n}\r\n\r\n.before\\:h-full::before {\n  content: var(--tw-content);\n  height: 100%;\n}\r\n\r\n.before\\:w-1::before {\n  content: var(--tw-content);\n  width: 0.25rem;\n}\r\n\r\n.before\\:w-5::before {\n  content: var(--tw-content);\n  width: 1.25rem;\n}\r\n\r\n.before\\:w-6::before {\n  content: var(--tw-content);\n  width: 1.5rem;\n}\r\n\r\n.before\\:w-full::before {\n  content: var(--tw-content);\n  width: 100%;\n}\r\n\r\n.before\\:flex-\\[1_1_0\\%\\]::before {\n  content: var(--tw-content);\n  flex: 1 1 0%;\n}\r\n\r\n.before\\:-translate-x-1\\/2::before {\n  content: var(--tw-content);\n  --tw-translate-x: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n\r\n.before\\:-translate-y-1\\/2::before {\n  content: var(--tw-content);\n  --tw-translate-y: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n\r\n.before\\:translate-x-0::before {\n  content: var(--tw-content);\n  --tw-translate-x: 0px;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n\r\n.before\\:transform::before {\n  content: var(--tw-content);\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n\r\n.before\\:rounded-full::before {\n  content: var(--tw-content);\n  border-radius: 9999px;\n}\r\n\r\n.before\\:rounded-xl::before {\n  content: var(--tw-content);\n  border-radius: 0.75rem;\n}\r\n\r\n.before\\:border-t::before {\n  content: var(--tw-content);\n  border-top-width: 1px;\n}\r\n\r\n.before\\:border-gray-200::before {\n  content: var(--tw-content);\n  --tw-border-opacity: 1;\n  border-color: rgb(229 231 235 / var(--tw-border-opacity));\n}\r\n\r\n.before\\:bg-gray-300::before {\n  content: var(--tw-content);\n  --tw-bg-opacity: 1;\n  background-color: rgb(209 213 219 / var(--tw-bg-opacity));\n}\r\n\r\n.before\\:bg-white::before {\n  content: var(--tw-content);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\r\n\r\n.before\\:bg-\\[radial-gradient\\(closest-side\\2c \\#cbd5e1\\2c transparent\\)\\]::before {\n  content: var(--tw-content);\n  background-image: radial-gradient(closest-side,#cbd5e1,transparent);\n}\r\n\r\n.before\\:bg-\\[url\\(\\'https\\:\\/\\/preline\\.co\\/assets\\/svg\\/component\\/squared-bg-element-dark\\.svg\\'\\)\\]::before {\n  content: var(--tw-content);\n  background-image: url('https://preline.co/assets/svg/component/squared-bg-element-dark.svg');\n}\r\n\r\n.before\\:bg-gradient-to-br::before {\n  content: var(--tw-content);\n  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));\n}\r\n\r\n.before\\:bg-gradient-to-t::before {\n  content: var(--tw-content);\n  background-image: linear-gradient(to top, var(--tw-gradient-stops));\n}\r\n\r\n.before\\:from-blue-600::before {\n  content: var(--tw-content);\n  --tw-gradient-from: #2563eb var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(37 99 235 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\r\n\r\n.before\\:from-gray-900\\/\\[\\.7\\]::before {\n  content: var(--tw-content);\n  --tw-gradient-from: rgb(17 24 39 / .7) var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(17 24 39 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\r\n\r\n.before\\:via-transparent::before {\n  content: var(--tw-content);\n  --tw-gradient-to: rgb(0 0 0 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), transparent var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\r\n\r\n.before\\:to-violet-600::before {\n  content: var(--tw-content);\n  --tw-gradient-to: #7c3aed var(--tw-gradient-to-position);\n}\r\n\r\n.before\\:bg-cover::before {\n  content: var(--tw-content);\n  background-size: cover;\n}\r\n\r\n.before\\:bg-top::before {\n  content: var(--tw-content);\n  background-position: top;\n}\r\n\r\n.before\\:bg-no-repeat::before {\n  content: var(--tw-content);\n  background-repeat: no-repeat;\n}\r\n\r\n.before\\:text-gray-300::before {\n  content: var(--tw-content);\n  --tw-text-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-text-opacity));\n}\r\n\r\n.before\\:shadow::before {\n  content: var(--tw-content);\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\r\n\r\n.before\\:ring-0::before {\n  content: var(--tw-content);\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\r\n\r\n.before\\:transition::before {\n  content: var(--tw-content);\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\r\n\r\n.before\\:duration-200::before {\n  content: var(--tw-content);\n  transition-duration: 200ms;\n}\r\n\r\n.before\\:ease-in-out::before {\n  content: var(--tw-content);\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\r\n\r\n.before\\:content-\\[\\'\\/\\'\\]::before {\n  --tw-content: '/';\n  content: var(--tw-content);\n}\r\n\r\n.after\\:absolute::after {\n  content: var(--tw-content);\n  position: absolute;\n}\r\n\r\n.after\\:inset-x-0::after {\n  content: var(--tw-content);\n  left: 0px;\n  right: 0px;\n}\r\n\r\n.after\\:bottom-0::after {\n  content: var(--tw-content);\n  bottom: 0px;\n}\r\n\r\n.after\\:z-10::after {\n  content: var(--tw-content);\n  z-index: 10;\n}\r\n\r\n.after\\:ml-6::after {\n  content: var(--tw-content);\n  margin-left: 1.5rem;\n}\r\n\r\n.after\\:h-48::after {\n  content: var(--tw-content);\n  height: 12rem;\n}\r\n\r\n.after\\:w-full::after {\n  content: var(--tw-content);\n  width: 100%;\n}\r\n\r\n.after\\:flex-\\[1_1_0\\%\\]::after {\n  content: var(--tw-content);\n  flex: 1 1 0%;\n}\r\n\r\n.after\\:border-t::after {\n  content: var(--tw-content);\n  border-top-width: 1px;\n}\r\n\r\n.after\\:border-gray-200::after {\n  content: var(--tw-content);\n  --tw-border-opacity: 1;\n  border-color: rgb(229 231 235 / var(--tw-border-opacity));\n}\r\n\r\n.after\\:bg-gradient-to-t::after {\n  content: var(--tw-content);\n  background-image: linear-gradient(to top, var(--tw-gradient-stops));\n}\r\n\r\n.after\\:from-white::after {\n  content: var(--tw-content);\n  --tw-gradient-from: #fff var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\r\n\r\n.after\\:via-white\\/70::after {\n  content: var(--tw-content);\n  --tw-gradient-to: rgb(255 255 255 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), rgb(255 255 255 / 0.7) var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\r\n\r\n.first\\:pt-0:first-child {\n  padding-top: 0px;\n}\r\n\r\n.last\\:border-b-0:last-child {\n  border-bottom-width: 0px;\n}\r\n\r\n.last\\:pb-0:last-child {\n  padding-bottom: 0px;\n}\r\n\r\n.last\\:pr-0:last-child {\n  padding-right: 0px;\n}\r\n\r\n.last-of-type\\:before\\:hidden:last-of-type::before {\n  content: var(--tw-content);\n  display: none;\n}\r\n\r\n.checked\\:bg-blue-600:checked {\n  --tw-bg-opacity: 1;\n  background-color: rgb(37 99 235 / var(--tw-bg-opacity));\n}\r\n\r\n.checked\\:bg-none:checked {\n  background-image: none;\n}\r\n\r\n.checked\\:before\\:translate-x-full:checked::before {\n  content: var(--tw-content);\n  --tw-translate-x: 100%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n\r\n.checked\\:before\\:bg-blue-200:checked::before {\n  content: var(--tw-content);\n  --tw-bg-opacity: 1;\n  background-color: rgb(191 219 254 / var(--tw-bg-opacity));\n}\r\n\r\n.focus-within\\:border-blue-400:focus-within {\n  --tw-border-opacity: 1;\n  border-color: rgb(96 165 250 / var(--tw-border-opacity));\n}\r\n\r\n.focus-within\\:ring:focus-within {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\r\n\r\n.focus-within\\:ring-blue-300:focus-within {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(147 197 253 / var(--tw-ring-opacity));\n}\r\n\r\n.focus-within\\:ring-opacity-40:focus-within {\n  --tw-ring-opacity: 0.4;\n}\r\n\r\n.hover\\:-translate-y-1:hover {\n  --tw-translate-y: -0.25rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n\r\n.hover\\:border-blue-100:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(219 234 254 / var(--tw-border-opacity));\n}\r\n\r\n.hover\\:border-blue-500:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(59 130 246 / var(--tw-border-opacity));\n}\r\n\r\n.hover\\:border-current:hover {\n  border-color: currentColor;\n}\r\n\r\n.hover\\:border-gray-200:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(229 231 235 / var(--tw-border-opacity));\n}\r\n\r\n.hover\\:border-gray-300:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(209 213 219 / var(--tw-border-opacity));\n}\r\n\r\n.hover\\:border-gray-400:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(156 163 175 / var(--tw-border-opacity));\n}\r\n\r\n.hover\\:border-gray-500:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(107 114 128 / var(--tw-border-opacity));\n}\r\n\r\n.hover\\:border-gray-600:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(75 85 99 / var(--tw-border-opacity));\n}\r\n\r\n.hover\\:border-gray-800:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(31 41 55 / var(--tw-border-opacity));\n}\r\n\r\n.hover\\:border-pink-500\\/10:hover {\n  border-color: rgb(236 72 153 / 0.1);\n}\r\n\r\n.hover\\:border-red-700:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(185 28 28 / var(--tw-border-opacity));\n}\r\n\r\n.hover\\:border-transparent:hover {\n  border-color: transparent;\n}\r\n\r\n.hover\\:border-white\\/\\[\\.1\\]:hover {\n  border-color: rgb(255 255 255 / .1);\n}\r\n\r\n.hover\\:bg-blue-200:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(191 219 254 / var(--tw-bg-opacity));\n}\r\n\r\n.hover\\:bg-blue-400:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(96 165 250 / var(--tw-bg-opacity));\n}\r\n\r\n.hover\\:bg-blue-50:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(239 246 255 / var(--tw-bg-opacity));\n}\r\n\r\n.hover\\:bg-blue-500:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(59 130 246 / var(--tw-bg-opacity));\n}\r\n\r\n.hover\\:bg-blue-600:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(37 99 235 / var(--tw-bg-opacity));\n}\r\n\r\n.hover\\:bg-blue-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(29 78 216 / var(--tw-bg-opacity));\n}\r\n\r\n.hover\\:bg-blue-800:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(30 64 175 / var(--tw-bg-opacity));\n}\r\n\r\n.hover\\:bg-emerald-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(4 120 87 / var(--tw-bg-opacity));\n}\r\n\r\n.hover\\:bg-gray-100:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity));\n}\r\n\r\n.hover\\:bg-gray-200:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(229 231 235 / var(--tw-bg-opacity));\n}\r\n\r\n.hover\\:bg-gray-300:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(209 213 219 / var(--tw-bg-opacity));\n}\r\n\r\n.hover\\:bg-gray-50:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(249 250 251 / var(--tw-bg-opacity));\n}\r\n\r\n.hover\\:bg-gray-500:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(107 114 128 / var(--tw-bg-opacity));\n}\r\n\r\n.hover\\:bg-gray-600:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(75 85 99 / var(--tw-bg-opacity));\n}\r\n\r\n.hover\\:bg-gray-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(55 65 81 / var(--tw-bg-opacity));\n}\r\n\r\n.hover\\:bg-gray-800:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity));\n}\r\n\r\n.hover\\:bg-gray-900:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(17 24 39 / var(--tw-bg-opacity));\n}\r\n\r\n.hover\\:bg-green-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(21 128 61 / var(--tw-bg-opacity));\n}\r\n\r\n.hover\\:bg-indigo-300:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(165 180 252 / var(--tw-bg-opacity));\n}\r\n\r\n.hover\\:bg-indigo-600:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(79 70 229 / var(--tw-bg-opacity));\n}\r\n\r\n.hover\\:bg-indigo-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(67 56 202 / var(--tw-bg-opacity));\n}\r\n\r\n.hover\\:bg-pink-600:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(219 39 119 / var(--tw-bg-opacity));\n}\r\n\r\n.hover\\:bg-red-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(185 28 28 / var(--tw-bg-opacity));\n}\r\n\r\n.hover\\:bg-rose-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(190 18 60 / var(--tw-bg-opacity));\n}\r\n\r\n.hover\\:bg-transparent:hover {\n  background-color: transparent;\n}\r\n\r\n.hover\\:bg-white:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\r\n\r\n.hover\\:bg-white\\/10:hover {\n  background-color: rgb(255 255 255 / 0.1);\n}\r\n\r\n.hover\\:bg-white\\/20:hover {\n  background-color: rgb(255 255 255 / 0.2);\n}\r\n\r\n.hover\\:bg-white\\/\\[\\.1\\]:hover {\n  background-color: rgb(255 255 255 / .1);\n}\r\n\r\n.hover\\:from-blue-600:hover {\n  --tw-gradient-from: #2563eb var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(37 99 235 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\r\n\r\n.hover\\:from-gray-600:hover {\n  --tw-gradient-from: #4b5563 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(75 85 99 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\r\n\r\n.hover\\:from-violet-600:hover {\n  --tw-gradient-from: #7c3aed var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(124 58 237 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\r\n\r\n.hover\\:to-blue-600:hover {\n  --tw-gradient-to: #2563eb var(--tw-gradient-to-position);\n}\r\n\r\n.hover\\:to-gray-600:hover {\n  --tw-gradient-to: #4b5563 var(--tw-gradient-to-position);\n}\r\n\r\n.hover\\:text-blue-400:hover {\n  --tw-text-opacity: 1;\n  color: rgb(96 165 250 / var(--tw-text-opacity));\n}\r\n\r\n.hover\\:text-blue-500:hover {\n  --tw-text-opacity: 1;\n  color: rgb(59 130 246 / var(--tw-text-opacity));\n}\r\n\r\n.hover\\:text-blue-500\\/75:hover {\n  color: rgb(59 130 246 / 0.75);\n}\r\n\r\n.hover\\:text-blue-600:hover {\n  --tw-text-opacity: 1;\n  color: rgb(37 99 235 / var(--tw-text-opacity));\n}\r\n\r\n.hover\\:text-blue-600\\/75:hover {\n  color: rgb(37 99 235 / 0.75);\n}\r\n\r\n.hover\\:text-blue-700:hover {\n  --tw-text-opacity: 1;\n  color: rgb(29 78 216 / var(--tw-text-opacity));\n}\r\n\r\n.hover\\:text-blue-700\\/75:hover {\n  color: rgb(29 78 216 / 0.75);\n}\r\n\r\n.hover\\:text-blue-800:hover {\n  --tw-text-opacity: 1;\n  color: rgb(30 64 175 / var(--tw-text-opacity));\n}\r\n\r\n.hover\\:text-gray-200:hover {\n  --tw-text-opacity: 1;\n  color: rgb(229 231 235 / var(--tw-text-opacity));\n}\r\n\r\n.hover\\:text-gray-300:hover {\n  --tw-text-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-text-opacity));\n}\r\n\r\n.hover\\:text-gray-300\\/75:hover {\n  color: rgb(209 213 219 / 0.75);\n}\r\n\r\n.hover\\:text-gray-400:hover {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity));\n}\r\n\r\n.hover\\:text-gray-500:hover {\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity));\n}\r\n\r\n.hover\\:text-gray-500\\/75:hover {\n  color: rgb(107 114 128 / 0.75);\n}\r\n\r\n.hover\\:text-gray-600:hover {\n  --tw-text-opacity: 1;\n  color: rgb(75 85 99 / var(--tw-text-opacity));\n}\r\n\r\n.hover\\:text-gray-600\\/75:hover {\n  color: rgb(75 85 99 / 0.75);\n}\r\n\r\n.hover\\:text-gray-700:hover {\n  --tw-text-opacity: 1;\n  color: rgb(55 65 81 / var(--tw-text-opacity));\n}\r\n\r\n.hover\\:text-gray-700\\/75:hover {\n  color: rgb(55 65 81 / 0.75);\n}\r\n\r\n.hover\\:text-gray-800:hover {\n  --tw-text-opacity: 1;\n  color: rgb(31 41 55 / var(--tw-text-opacity));\n}\r\n\r\n.hover\\:text-gray-900:hover {\n  --tw-text-opacity: 1;\n  color: rgb(17 24 39 / var(--tw-text-opacity));\n}\r\n\r\n.hover\\:text-gray-900\\/75:hover {\n  color: rgb(17 24 39 / 0.75);\n}\r\n\r\n.hover\\:text-indigo-100:hover {\n  --tw-text-opacity: 1;\n  color: rgb(224 231 255 / var(--tw-text-opacity));\n}\r\n\r\n.hover\\:text-indigo-500:hover {\n  --tw-text-opacity: 1;\n  color: rgb(99 102 241 / var(--tw-text-opacity));\n}\r\n\r\n.hover\\:text-indigo-600:hover {\n  --tw-text-opacity: 1;\n  color: rgb(79 70 229 / var(--tw-text-opacity));\n}\r\n\r\n.hover\\:text-red-500:hover {\n  --tw-text-opacity: 1;\n  color: rgb(239 68 68 / var(--tw-text-opacity));\n}\r\n\r\n.hover\\:text-red-700:hover {\n  --tw-text-opacity: 1;\n  color: rgb(185 28 28 / var(--tw-text-opacity));\n}\r\n\r\n.hover\\:text-rose-700:hover {\n  --tw-text-opacity: 1;\n  color: rgb(190 18 60 / var(--tw-text-opacity));\n}\r\n\r\n.hover\\:text-slate-500:hover {\n  --tw-text-opacity: 1;\n  color: rgb(100 116 139 / var(--tw-text-opacity));\n}\r\n\r\n.hover\\:text-white:hover {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\r\n\r\n.hover\\:text-white\\/75:hover {\n  color: rgb(255 255 255 / 0.75);\n}\r\n\r\n.hover\\:text-white\\/80:hover {\n  color: rgb(255 255 255 / 0.8);\n}\r\n\r\n.hover\\:text-white\\/\\[\\.8\\]:hover {\n  color: rgb(255 255 255 / .8);\n}\r\n\r\n.hover\\:underline:hover {\n  text-decoration-line: underline;\n}\r\n\r\n.hover\\:no-underline:hover {\n  text-decoration-line: none;\n}\r\n\r\n.hover\\:decoration-gray-400:hover {\n  text-decoration-color: #9ca3af;\n}\r\n\r\n.hover\\:opacity-100:hover {\n  opacity: 1;\n}\r\n\r\n.hover\\:opacity-50:hover {\n  opacity: 0.5;\n}\r\n\r\n.hover\\:opacity-70:hover {\n  opacity: 0.7;\n}\r\n\r\n.hover\\:opacity-75:hover {\n  opacity: 0.75;\n}\r\n\r\n.hover\\:opacity-80:hover {\n  opacity: 0.8;\n}\r\n\r\n.hover\\:shadow-lg:hover {\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\r\n\r\n.hover\\:shadow-md:hover {\n  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\r\n\r\n.hover\\:shadow-sm:hover {\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\r\n\r\n.hover\\:shadow-blue-700\\/50:hover {\n  --tw-shadow-color: rgb(29 78 216 / 0.5);\n  --tw-shadow: var(--tw-shadow-colored);\n}\r\n\r\n.hover\\:shadow-pink-500\\/10:hover {\n  --tw-shadow-color: rgb(236 72 153 / 0.1);\n  --tw-shadow: var(--tw-shadow-colored);\n}\r\n\r\n.hover\\:ring-1:hover {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\r\n\r\n.hover\\:ring-gray-200:hover {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(229 231 235 / var(--tw-ring-opacity));\n}\r\n\r\n.focus\\:z-10:focus {\n  z-index: 10;\n}\r\n\r\n.focus\\:border-blue-400:focus {\n  --tw-border-opacity: 1;\n  border-color: rgb(96 165 250 / var(--tw-border-opacity));\n}\r\n\r\n.focus\\:border-blue-500:focus {\n  --tw-border-opacity: 1;\n  border-color: rgb(59 130 246 / var(--tw-border-opacity));\n}\r\n\r\n.focus\\:border-blue-600:focus {\n  --tw-border-opacity: 1;\n  border-color: rgb(37 99 235 / var(--tw-border-opacity));\n}\r\n\r\n.focus\\:border-indigo-500:focus {\n  --tw-border-opacity: 1;\n  border-color: rgb(99 102 241 / var(--tw-border-opacity));\n}\r\n\r\n.focus\\:border-white\\/30:focus {\n  border-color: rgb(255 255 255 / 0.3);\n}\r\n\r\n.focus\\:bg-blue-400:focus {\n  --tw-bg-opacity: 1;\n  background-color: rgb(96 165 250 / var(--tw-bg-opacity));\n}\r\n\r\n.focus\\:bg-blue-500:focus {\n  --tw-bg-opacity: 1;\n  background-color: rgb(59 130 246 / var(--tw-bg-opacity));\n}\r\n\r\n.focus\\:bg-blue-600:focus {\n  --tw-bg-opacity: 1;\n  background-color: rgb(37 99 235 / var(--tw-bg-opacity));\n}\r\n\r\n.focus\\:bg-gray-100:focus {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity));\n}\r\n\r\n.focus\\:bg-gray-600:focus {\n  --tw-bg-opacity: 1;\n  background-color: rgb(75 85 99 / var(--tw-bg-opacity));\n}\r\n\r\n.focus\\:bg-gray-800:focus {\n  --tw-bg-opacity: 1;\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity));\n}\r\n\r\n.focus\\:bg-pink-600:focus {\n  --tw-bg-opacity: 1;\n  background-color: rgb(219 39 119 / var(--tw-bg-opacity));\n}\r\n\r\n.focus\\:bg-transparent:focus {\n  background-color: transparent;\n}\r\n\r\n.focus\\:bg-white:focus {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\r\n\r\n.focus\\:text-gray-600:focus {\n  --tw-text-opacity: 1;\n  color: rgb(75 85 99 / var(--tw-text-opacity));\n}\r\n\r\n.focus\\:text-gray-700:focus {\n  --tw-text-opacity: 1;\n  color: rgb(55 65 81 / var(--tw-text-opacity));\n}\r\n\r\n.focus\\:text-white:focus {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\r\n\r\n.focus\\:placeholder-transparent:focus::-moz-placeholder {\n  color: transparent;\n}\r\n\r\n.focus\\:placeholder-transparent:focus::placeholder {\n  color: transparent;\n}\r\n\r\n.focus\\:outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\r\n\r\n.focus\\:ring:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\r\n\r\n.focus\\:ring-0:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\r\n\r\n.focus\\:ring-2:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\r\n\r\n.focus\\:ring-4:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\r\n\r\n.focus\\:ring-blue-200:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(191 219 254 / var(--tw-ring-opacity));\n}\r\n\r\n.focus\\:ring-blue-300:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(147 197 253 / var(--tw-ring-opacity));\n}\r\n\r\n.focus\\:ring-blue-400:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(96 165 250 / var(--tw-ring-opacity));\n}\r\n\r\n.focus\\:ring-blue-500:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity));\n}\r\n\r\n.focus\\:ring-blue-600:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(37 99 235 / var(--tw-ring-opacity));\n}\r\n\r\n.focus\\:ring-blue-900:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(30 58 138 / var(--tw-ring-opacity));\n}\r\n\r\n.focus\\:ring-gray-100:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(243 244 246 / var(--tw-ring-opacity));\n}\r\n\r\n.focus\\:ring-gray-200:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(229 231 235 / var(--tw-ring-opacity));\n}\r\n\r\n.focus\\:ring-gray-300:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity));\n}\r\n\r\n.focus\\:ring-gray-400:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(156 163 175 / var(--tw-ring-opacity));\n}\r\n\r\n.focus\\:ring-gray-800:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(31 41 55 / var(--tw-ring-opacity));\n}\r\n\r\n.focus\\:ring-indigo-200:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(199 210 254 / var(--tw-ring-opacity));\n}\r\n\r\n.focus\\:ring-white:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(255 255 255 / var(--tw-ring-opacity));\n}\r\n\r\n.focus\\:ring-white\\/30:focus {\n  --tw-ring-color: rgb(255 255 255 / 0.3);\n}\r\n\r\n.focus\\:ring-white\\/\\[\\.5\\]:focus {\n  --tw-ring-color: rgb(255 255 255 / .5);\n}\r\n\r\n.focus\\:ring-yellow-400:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(250 204 21 / var(--tw-ring-opacity));\n}\r\n\r\n.focus\\:ring-opacity-40:focus {\n  --tw-ring-opacity: 0.4;\n}\r\n\r\n.focus\\:ring-opacity-50:focus {\n  --tw-ring-opacity: 0.5;\n}\r\n\r\n.focus\\:ring-opacity-80:focus {\n  --tw-ring-opacity: 0.8;\n}\r\n\r\n.focus\\:ring-offset-2:focus {\n  --tw-ring-offset-width: 2px;\n}\r\n\r\n.focus\\:ring-offset-blue-600:focus {\n  --tw-ring-offset-color: #2563eb;\n}\r\n\r\n.focus\\:ring-offset-gray-800:focus {\n  --tw-ring-offset-color: #1f2937;\n}\r\n\r\n.focus\\:ring-offset-gray-900:focus {\n  --tw-ring-offset-color: #111827;\n}\r\n\r\n.focus\\:ring-offset-slate-900:focus {\n  --tw-ring-offset-color: #0f172a;\n}\r\n\r\n.focus\\:ring-offset-white:focus {\n  --tw-ring-offset-color: #fff;\n}\r\n\r\n.focus-visible\\:ring:focus-visible {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\r\n\r\n.active\\:bg-blue-500:active {\n  --tw-bg-opacity: 1;\n  background-color: rgb(59 130 246 / var(--tw-bg-opacity));\n}\r\n\r\n.active\\:bg-blue-700:active {\n  --tw-bg-opacity: 1;\n  background-color: rgb(29 78 216 / var(--tw-bg-opacity));\n}\r\n\r\n.active\\:bg-gray-200:active {\n  --tw-bg-opacity: 1;\n  background-color: rgb(229 231 235 / var(--tw-bg-opacity));\n}\r\n\r\n.active\\:bg-gray-600:active {\n  --tw-bg-opacity: 1;\n  background-color: rgb(75 85 99 / var(--tw-bg-opacity));\n}\r\n\r\n.active\\:bg-indigo-400:active {\n  --tw-bg-opacity: 1;\n  background-color: rgb(129 140 248 / var(--tw-bg-opacity));\n}\r\n\r\n.active\\:bg-indigo-700:active {\n  --tw-bg-opacity: 1;\n  background-color: rgb(67 56 202 / var(--tw-bg-opacity));\n}\r\n\r\n.active\\:bg-indigo-800:active {\n  --tw-bg-opacity: 1;\n  background-color: rgb(55 48 163 / var(--tw-bg-opacity));\n}\r\n\r\n.active\\:bg-red-500:active {\n  --tw-bg-opacity: 1;\n  background-color: rgb(239 68 68 / var(--tw-bg-opacity));\n}\r\n\r\n.active\\:bg-rose-500:active {\n  --tw-bg-opacity: 1;\n  background-color: rgb(244 63 94 / var(--tw-bg-opacity));\n}\r\n\r\n.active\\:bg-white\\/90:active {\n  background-color: rgb(255 255 255 / 0.9);\n}\r\n\r\n.active\\:text-gray-300:active {\n  --tw-text-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-text-opacity));\n}\r\n\r\n.active\\:text-gray-600:active {\n  --tw-text-opacity: 1;\n  color: rgb(75 85 99 / var(--tw-text-opacity));\n}\r\n\r\n.active\\:text-gray-700:active {\n  --tw-text-opacity: 1;\n  color: rgb(55 65 81 / var(--tw-text-opacity));\n}\r\n\r\n.active\\:text-indigo-200:active {\n  --tw-text-opacity: 1;\n  color: rgb(199 210 254 / var(--tw-text-opacity));\n}\r\n\r\n.active\\:text-indigo-500:active {\n  --tw-text-opacity: 1;\n  color: rgb(99 102 241 / var(--tw-text-opacity));\n}\r\n\r\n.active\\:text-indigo-600:active {\n  --tw-text-opacity: 1;\n  color: rgb(79 70 229 / var(--tw-text-opacity));\n}\r\n\r\n.active\\:text-indigo-700:active {\n  --tw-text-opacity: 1;\n  color: rgb(67 56 202 / var(--tw-text-opacity));\n}\r\n\r\n.active\\:text-pink-500:active {\n  --tw-text-opacity: 1;\n  color: rgb(236 72 153 / var(--tw-text-opacity));\n}\r\n\r\n.active\\:text-red-500:active {\n  --tw-text-opacity: 1;\n  color: rgb(239 68 68 / var(--tw-text-opacity));\n}\r\n\r\n.active\\:text-rose-500:active {\n  --tw-text-opacity: 1;\n  color: rgb(244 63 94 / var(--tw-text-opacity));\n}\r\n\r\n.active\\:text-opacity-75:active {\n  --tw-text-opacity: 0.75;\n}\r\n\r\n.group[open] .group-open\\:-rotate-180 {\n  --tw-rotate: -180deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n\r\n.group[open] .group-open\\:-rotate-45 {\n  --tw-rotate: -45deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n\r\n.group[open] .group-open\\:opacity-0 {\n  opacity: 0;\n}\r\n\r\n.group[open] .group-open\\:opacity-100 {\n  opacity: 1;\n}\r\n\r\n.group:hover .group-hover\\:translate-x-1 {\n  --tw-translate-x: 0.25rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n\r\n.group:hover .group-hover\\:rotate-180 {\n  --tw-rotate: 180deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n\r\n.group:hover .group-hover\\:rotate-6 {\n  --tw-rotate: 6deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n\r\n.group:hover .group-hover\\:scale-105 {\n  --tw-scale-x: 1.05;\n  --tw-scale-y: 1.05;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n\r\n.group:hover .group-hover\\:scale-110 {\n  --tw-scale-x: 1.1;\n  --tw-scale-y: 1.1;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n\r\n.group:hover .group-hover\\:bg-white\\/\\[\\.1\\] {\n  background-color: rgb(255 255 255 / .1);\n}\r\n\r\n.group:hover .group-hover\\:text-blue-600 {\n  --tw-text-opacity: 1;\n  color: rgb(37 99 235 / var(--tw-text-opacity));\n}\r\n\r\n.group:hover .group-hover\\:text-blue-700 {\n  --tw-text-opacity: 1;\n  color: rgb(29 78 216 / var(--tw-text-opacity));\n}\r\n\r\n.group:hover .group-hover\\:text-gray-300 {\n  --tw-text-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-text-opacity));\n}\r\n\r\n.group:hover .group-hover\\:text-gray-500 {\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity));\n}\r\n\r\n.group:hover .group-hover\\:text-gray-600 {\n  --tw-text-opacity: 1;\n  color: rgb(75 85 99 / var(--tw-text-opacity));\n}\r\n\r\n.group:hover .group-hover\\:text-gray-700\\/75 {\n  color: rgb(55 65 81 / 0.75);\n}\r\n\r\n.group:hover .group-hover\\:text-gray-800 {\n  --tw-text-opacity: 1;\n  color: rgb(31 41 55 / var(--tw-text-opacity));\n}\r\n\r\n.group:hover .group-hover\\:text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\r\n\r\n.group:hover .group-hover\\:text-white\\/75 {\n  color: rgb(255 255 255 / 0.75);\n}\r\n\r\n.group:hover .group-hover\\:text-white\\/\\[\\.7\\] {\n  color: rgb(255 255 255 / .7);\n}\r\n\r\n.group:hover .group-hover\\:text-white\\/\\[\\.8\\] {\n  color: rgb(255 255 255 / .8);\n}\r\n\r\n.group:hover .group-hover\\:underline {\n  text-decoration-line: underline;\n}\r\n\r\n.group:hover .group-hover\\:opacity-90 {\n  opacity: 0.9;\n}\r\n\r\n:is([dir=\"rtl\"] .rtl\\:-scale-x-100) {\n  --tw-scale-x: -1;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n\r\n@media (prefers-color-scheme: dark) {\n\n  .dark\\:block {\n    display: block;\n  }\n\n  .dark\\:hidden {\n    display: none;\n  }\n\n  .dark\\:divide-gray-700 > :not([hidden]) ~ :not([hidden]) {\n    --tw-divide-opacity: 1;\n    border-color: rgb(55 65 81 / var(--tw-divide-opacity));\n  }\n\n  .dark\\:divide-gray-800 > :not([hidden]) ~ :not([hidden]) {\n    --tw-divide-opacity: 1;\n    border-color: rgb(31 41 55 / var(--tw-divide-opacity));\n  }\n\n  .dark\\:border {\n    border-width: 1px;\n  }\n\n  .dark\\:border-blue-300 {\n    --tw-border-opacity: 1;\n    border-color: rgb(147 197 253 / var(--tw-border-opacity));\n  }\n\n  .dark\\:border-blue-400 {\n    --tw-border-opacity: 1;\n    border-color: rgb(96 165 250 / var(--tw-border-opacity));\n  }\n\n  .dark\\:border-blue-500 {\n    --tw-border-opacity: 1;\n    border-color: rgb(59 130 246 / var(--tw-border-opacity));\n  }\n\n  .dark\\:border-blue-600 {\n    --tw-border-opacity: 1;\n    border-color: rgb(37 99 235 / var(--tw-border-opacity));\n  }\n\n  .dark\\:border-blue-700 {\n    --tw-border-opacity: 1;\n    border-color: rgb(29 78 216 / var(--tw-border-opacity));\n  }\n\n  .dark\\:border-blue-900 {\n    --tw-border-opacity: 1;\n    border-color: rgb(30 58 138 / var(--tw-border-opacity));\n  }\n\n  .dark\\:border-gray-200 {\n    --tw-border-opacity: 1;\n    border-color: rgb(229 231 235 / var(--tw-border-opacity));\n  }\n\n  .dark\\:border-gray-400 {\n    --tw-border-opacity: 1;\n    border-color: rgb(156 163 175 / var(--tw-border-opacity));\n  }\n\n  .dark\\:border-gray-600 {\n    --tw-border-opacity: 1;\n    border-color: rgb(75 85 99 / var(--tw-border-opacity));\n  }\n\n  .dark\\:border-gray-700 {\n    --tw-border-opacity: 1;\n    border-color: rgb(55 65 81 / var(--tw-border-opacity));\n  }\n\n  .dark\\:border-gray-800 {\n    --tw-border-opacity: 1;\n    border-color: rgb(31 41 55 / var(--tw-border-opacity));\n  }\n\n  .dark\\:border-slate-700 {\n    --tw-border-opacity: 1;\n    border-color: rgb(51 65 85 / var(--tw-border-opacity));\n  }\n\n  .dark\\:border-transparent {\n    border-color: transparent;\n  }\n\n  .dark\\:border-x-gray-700 {\n    --tw-border-opacity: 1;\n    border-left-color: rgb(55 65 81 / var(--tw-border-opacity));\n    border-right-color: rgb(55 65 81 / var(--tw-border-opacity));\n  }\n\n  .dark\\:border-r-gray-700 {\n    --tw-border-opacity: 1;\n    border-right-color: rgb(55 65 81 / var(--tw-border-opacity));\n  }\n\n  .dark\\:bg-black {\n    --tw-bg-opacity: 1;\n    background-color: rgb(0 0 0 / var(--tw-bg-opacity));\n  }\n\n  .dark\\:bg-blue-500 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(59 130 246 / var(--tw-bg-opacity));\n  }\n\n  .dark\\:bg-blue-600 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(37 99 235 / var(--tw-bg-opacity));\n  }\n\n  .dark\\:bg-blue-800 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(30 64 175 / var(--tw-bg-opacity));\n  }\n\n  .dark\\:bg-blue-900 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(30 58 138 / var(--tw-bg-opacity));\n  }\n\n  .dark\\:bg-gray-700 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(55 65 81 / var(--tw-bg-opacity));\n  }\n\n  .dark\\:bg-gray-800 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(31 41 55 / var(--tw-bg-opacity));\n  }\n\n  .dark\\:bg-gray-800\\/60 {\n    background-color: rgb(31 41 55 / 0.6);\n  }\n\n  .dark\\:bg-gray-900 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(17 24 39 / var(--tw-bg-opacity));\n  }\n\n  .dark\\:bg-purple-900 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(88 28 135 / var(--tw-bg-opacity));\n  }\n\n  .dark\\:bg-slate-700 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(51 65 85 / var(--tw-bg-opacity));\n  }\n\n  .dark\\:bg-slate-800 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(30 41 59 / var(--tw-bg-opacity));\n  }\n\n  .dark\\:bg-slate-900 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(15 23 42 / var(--tw-bg-opacity));\n  }\n\n  .dark\\:bg-slate-900\\/60 {\n    background-color: rgb(15 23 42 / 0.6);\n  }\n\n  .dark\\:bg-slate-900\\/\\[\\.6\\] {\n    background-color: rgb(15 23 42 / .6);\n  }\n\n  .dark\\:bg-white\\/\\[\\.05\\] {\n    background-color: rgb(255 255 255 / .05);\n  }\n\n  .dark\\:bg-white\\/\\[\\.075\\] {\n    background-color: rgb(255 255 255 / .075);\n  }\n\n  .dark\\:from-blue-400 {\n    --tw-gradient-from: #60a5fa var(--tw-gradient-from-position);\n    --tw-gradient-to: rgb(96 165 250 / 0) var(--tw-gradient-to-position);\n    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n  }\n\n  .dark\\:from-gray-700 {\n    --tw-gradient-from: #374151 var(--tw-gradient-from-position);\n    --tw-gradient-to: rgb(55 65 81 / 0) var(--tw-gradient-to-position);\n    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n  }\n\n  .dark\\:from-indigo-900\\/70 {\n    --tw-gradient-from: rgb(49 46 129 / 0.7) var(--tw-gradient-from-position);\n    --tw-gradient-to: rgb(49 46 129 / 0) var(--tw-gradient-to-position);\n    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n  }\n\n  .dark\\:from-sky-300 {\n    --tw-gradient-from: #7dd3fc var(--tw-gradient-from-position);\n    --tw-gradient-to: rgb(125 211 252 / 0) var(--tw-gradient-to-position);\n    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n  }\n\n  .dark\\:from-slate-800 {\n    --tw-gradient-from: #1e293b var(--tw-gradient-from-position);\n    --tw-gradient-to: rgb(30 41 59 / 0) var(--tw-gradient-to-position);\n    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n  }\n\n  .dark\\:from-teal-200 {\n    --tw-gradient-from: #99f6e4 var(--tw-gradient-from-position);\n    --tw-gradient-to: rgb(153 246 228 / 0) var(--tw-gradient-to-position);\n    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n  }\n\n  .dark\\:from-violet-900\\/50 {\n    --tw-gradient-from: rgb(76 29 149 / 0.5) var(--tw-gradient-from-position);\n    --tw-gradient-to: rgb(76 29 149 / 0) var(--tw-gradient-to-position);\n    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n  }\n\n  .dark\\:via-gray-800 {\n    --tw-gradient-to: rgb(31 41 55 / 0)  var(--tw-gradient-to-position);\n    --tw-gradient-stops: var(--tw-gradient-from), #1f2937 var(--tw-gradient-via-position), var(--tw-gradient-to);\n  }\n\n  .dark\\:via-indigo-300 {\n    --tw-gradient-to: rgb(165 180 252 / 0)  var(--tw-gradient-to-position);\n    --tw-gradient-stops: var(--tw-gradient-from), #a5b4fc var(--tw-gradient-via-position), var(--tw-gradient-to);\n  }\n\n  .dark\\:via-indigo-900\\/70 {\n    --tw-gradient-to: rgb(49 46 129 / 0)  var(--tw-gradient-to-position);\n    --tw-gradient-stops: var(--tw-gradient-from), rgb(49 46 129 / 0.7) var(--tw-gradient-via-position), var(--tw-gradient-to);\n  }\n\n  .dark\\:via-pink-300 {\n    --tw-gradient-to: rgb(249 168 212 / 0)  var(--tw-gradient-to-position);\n    --tw-gradient-stops: var(--tw-gradient-from), #f9a8d4 var(--tw-gradient-via-position), var(--tw-gradient-to);\n  }\n\n  .dark\\:via-slate-900\\/0 {\n    --tw-gradient-to: rgb(15 23 42 / 0)  var(--tw-gradient-to-position);\n    --tw-gradient-stops: var(--tw-gradient-from), rgb(15 23 42 / 0) var(--tw-gradient-via-position), var(--tw-gradient-to);\n  }\n\n  .dark\\:to-blue-900\\/70 {\n    --tw-gradient-to: rgb(30 58 138 / 0.7) var(--tw-gradient-to-position);\n  }\n\n  .dark\\:to-gray-900 {\n    --tw-gradient-to: #111827 var(--tw-gradient-to-position);\n  }\n\n  .dark\\:to-purple-900 {\n    --tw-gradient-to: #581c87 var(--tw-gradient-to-position);\n  }\n\n  .dark\\:to-red-500 {\n    --tw-gradient-to: #ef4444 var(--tw-gradient-to-position);\n  }\n\n  .dark\\:to-sky-500 {\n    --tw-gradient-to: #0ea5e9 var(--tw-gradient-to-position);\n  }\n\n  .dark\\:to-slate-900 {\n    --tw-gradient-to: #0f172a var(--tw-gradient-to-position);\n  }\n\n  .dark\\:to-slate-900\\/0 {\n    --tw-gradient-to: rgb(15 23 42 / 0) var(--tw-gradient-to-position);\n  }\n\n  .dark\\:to-violet-400 {\n    --tw-gradient-to: #a78bfa var(--tw-gradient-to-position);\n  }\n\n  .dark\\:fill-gray-200 {\n    fill: #e5e7eb;\n  }\n\n  .dark\\:fill-gray-700 {\n    fill: #374151;\n  }\n\n  .dark\\:fill-slate-900 {\n    fill: #0f172a;\n  }\n\n  .dark\\:fill-white {\n    fill: #fff;\n  }\n\n  .dark\\:text-blue-300 {\n    --tw-text-opacity: 1;\n    color: rgb(147 197 253 / var(--tw-text-opacity));\n  }\n\n  .dark\\:text-blue-400 {\n    --tw-text-opacity: 1;\n    color: rgb(96 165 250 / var(--tw-text-opacity));\n  }\n\n  .dark\\:text-blue-500 {\n    --tw-text-opacity: 1;\n    color: rgb(59 130 246 / var(--tw-text-opacity));\n  }\n\n  .dark\\:text-blue-600 {\n    --tw-text-opacity: 1;\n    color: rgb(37 99 235 / var(--tw-text-opacity));\n  }\n\n  .dark\\:text-gray-100 {\n    --tw-text-opacity: 1;\n    color: rgb(243 244 246 / var(--tw-text-opacity));\n  }\n\n  .dark\\:text-gray-200 {\n    --tw-text-opacity: 1;\n    color: rgb(229 231 235 / var(--tw-text-opacity));\n  }\n\n  .dark\\:text-gray-300 {\n    --tw-text-opacity: 1;\n    color: rgb(209 213 219 / var(--tw-text-opacity));\n  }\n\n  .dark\\:text-gray-400 {\n    --tw-text-opacity: 1;\n    color: rgb(156 163 175 / var(--tw-text-opacity));\n  }\n\n  .dark\\:text-gray-500 {\n    --tw-text-opacity: 1;\n    color: rgb(107 114 128 / var(--tw-text-opacity));\n  }\n\n  .dark\\:text-gray-600 {\n    --tw-text-opacity: 1;\n    color: rgb(75 85 99 / var(--tw-text-opacity));\n  }\n\n  .dark\\:text-gray-700 {\n    --tw-text-opacity: 1;\n    color: rgb(55 65 81 / var(--tw-text-opacity));\n  }\n\n  .dark\\:text-gray-800 {\n    --tw-text-opacity: 1;\n    color: rgb(31 41 55 / var(--tw-text-opacity));\n  }\n\n  .dark\\:text-green-400 {\n    --tw-text-opacity: 1;\n    color: rgb(74 222 128 / var(--tw-text-opacity));\n  }\n\n  .dark\\:text-rose-500 {\n    --tw-text-opacity: 1;\n    color: rgb(244 63 94 / var(--tw-text-opacity));\n  }\n\n  .dark\\:text-slate-400 {\n    --tw-text-opacity: 1;\n    color: rgb(148 163 184 / var(--tw-text-opacity));\n  }\n\n  .dark\\:text-slate-700 {\n    --tw-text-opacity: 1;\n    color: rgb(51 65 85 / var(--tw-text-opacity));\n  }\n\n  .dark\\:text-slate-900 {\n    --tw-text-opacity: 1;\n    color: rgb(15 23 42 / var(--tw-text-opacity));\n  }\n\n  .dark\\:text-white {\n    --tw-text-opacity: 1;\n    color: rgb(255 255 255 / var(--tw-text-opacity));\n  }\n\n  .dark\\:placeholder-gray-400::-moz-placeholder {\n    --tw-placeholder-opacity: 1;\n    color: rgb(156 163 175 / var(--tw-placeholder-opacity));\n  }\n\n  .dark\\:placeholder-gray-400::placeholder {\n    --tw-placeholder-opacity: 1;\n    color: rgb(156 163 175 / var(--tw-placeholder-opacity));\n  }\n\n  .dark\\:placeholder-gray-500::-moz-placeholder {\n    --tw-placeholder-opacity: 1;\n    color: rgb(107 114 128 / var(--tw-placeholder-opacity));\n  }\n\n  .dark\\:placeholder-gray-500::placeholder {\n    --tw-placeholder-opacity: 1;\n    color: rgb(107 114 128 / var(--tw-placeholder-opacity));\n  }\n\n  .dark\\:placeholder-gray-600::-moz-placeholder {\n    --tw-placeholder-opacity: 1;\n    color: rgb(75 85 99 / var(--tw-placeholder-opacity));\n  }\n\n  .dark\\:placeholder-gray-600::placeholder {\n    --tw-placeholder-opacity: 1;\n    color: rgb(75 85 99 / var(--tw-placeholder-opacity));\n  }\n\n  .dark\\:opacity-20 {\n    opacity: 0.2;\n  }\n\n  .dark\\:shadow-\\[0_2\\.75rem_3\\.5rem_-2rem_rgb\\(0_0_0_\\/_20\\%\\)\\2c _0_0_5rem_-2rem_rgb\\(0_0_0_\\/_15\\%\\)\\] {\n    --tw-shadow: 0 2.75rem 3.5rem -2rem rgb(0 0 0 / 20%), 0 0 5rem -2rem rgb(0 0 0 / 15%);\n    --tw-shadow-colored: 0 2.75rem 3.5rem -2rem var(--tw-shadow-color), 0 0 5rem -2rem var(--tw-shadow-color);\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  }\n\n  .dark\\:shadow-\\[0_2\\.75rem_5\\.5rem_-3\\.5rem_rgb\\(0_0_0_\\/_20\\%\\)\\2c _0_2rem_4rem_-2rem_rgb\\(0_0_0_\\/_30\\%\\)\\2c _inset_0_-0\\.1875rem_0\\.3125rem_0_rgb\\(0_0_0_\\/_20\\%\\)\\] {\n    --tw-shadow: 0 2.75rem 5.5rem -3.5rem rgb(0 0 0 / 20%), 0 2rem 4rem -2rem rgb(0 0 0 / 30%), inset 0 -0.1875rem 0.3125rem 0 rgb(0 0 0 / 20%);\n    --tw-shadow-colored: 0 2.75rem 5.5rem -3.5rem var(--tw-shadow-color), 0 2rem 4rem -2rem var(--tw-shadow-color), inset 0 -0.1875rem 0.3125rem 0 var(--tw-shadow-color);\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  }\n\n  .dark\\:shadow-black\\/50 {\n    --tw-shadow-color: rgb(0 0 0 / 0.5);\n    --tw-shadow: var(--tw-shadow-colored);\n  }\n\n  .dark\\:shadow-gray-900\\/\\[\\.2\\] {\n    --tw-shadow-color: rgb(17 24 39 / .2);\n    --tw-shadow: var(--tw-shadow-colored);\n  }\n\n  .dark\\:shadow-slate-700\\/\\[\\.7\\] {\n    --tw-shadow-color: rgb(51 65 85 / .7);\n    --tw-shadow: var(--tw-shadow-colored);\n  }\n\n  .dark\\:ring-gray-700 {\n    --tw-ring-opacity: 1;\n    --tw-ring-color: rgb(55 65 81 / var(--tw-ring-opacity));\n  }\n\n  .dark\\:ring-gray-800 {\n    --tw-ring-opacity: 1;\n    --tw-ring-color: rgb(31 41 55 / var(--tw-ring-opacity));\n  }\n\n  .dark\\:ring-offset-gray-800 {\n    --tw-ring-offset-color: #1f2937;\n  }\n\n  .dark\\:ring-offset-slate-900 {\n    --tw-ring-offset-color: #0f172a;\n  }\n\n  .dark\\:before\\:border-gray-600::before {\n    content: var(--tw-content);\n    --tw-border-opacity: 1;\n    border-color: rgb(75 85 99 / var(--tw-border-opacity));\n  }\n\n  .dark\\:before\\:bg-gray-400::before {\n    content: var(--tw-content);\n    --tw-bg-opacity: 1;\n    background-color: rgb(156 163 175 / var(--tw-bg-opacity));\n  }\n\n  .dark\\:before\\:bg-gray-600::before {\n    content: var(--tw-content);\n    --tw-bg-opacity: 1;\n    background-color: rgb(75 85 99 / var(--tw-bg-opacity));\n  }\n\n  .dark\\:before\\:bg-\\[radial-gradient\\(closest-side\\2c \\#334155\\2c transparent\\)\\]::before {\n    content: var(--tw-content);\n    background-image: radial-gradient(closest-side,#334155,transparent);\n  }\n\n  .dark\\:before\\:bg-\\[url\\(\\'\\.\\.\\/svg\\/component\\/polygon-dark\\.svg\\'\\)\\]::before {\n    content: var(--tw-content);\n    background-image: url('../svg/component/polygon-dark.svg');\n  }\n\n  .dark\\:before\\:bg-\\[url\\(\\'https\\:\\/\\/preline\\.co\\/assets\\/svg\\/component\\/squared-bg-element-dark\\.svg\\'\\)\\]::before {\n    content: var(--tw-content);\n    background-image: url('https://preline.co/assets/svg/component/squared-bg-element-dark.svg');\n  }\n\n  .dark\\:before\\:text-gray-600::before {\n    content: var(--tw-content);\n    --tw-text-opacity: 1;\n    color: rgb(75 85 99 / var(--tw-text-opacity));\n  }\n\n  .dark\\:after\\:border-gray-600::after {\n    content: var(--tw-content);\n    --tw-border-opacity: 1;\n    border-color: rgb(75 85 99 / var(--tw-border-opacity));\n  }\n\n  .dark\\:after\\:from-slate-900::after {\n    content: var(--tw-content);\n    --tw-gradient-from: #0f172a var(--tw-gradient-from-position);\n    --tw-gradient-to: rgb(15 23 42 / 0) var(--tw-gradient-to-position);\n    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n  }\n\n  .dark\\:after\\:via-slate-900\\/95::after {\n    content: var(--tw-content);\n    --tw-gradient-to: rgb(15 23 42 / 0)  var(--tw-gradient-to-position);\n    --tw-gradient-stops: var(--tw-gradient-from), rgb(15 23 42 / 0.95) var(--tw-gradient-via-position), var(--tw-gradient-to);\n  }\n\n  .dark\\:checked\\:border-blue-500:checked {\n    --tw-border-opacity: 1;\n    border-color: rgb(59 130 246 / var(--tw-border-opacity));\n  }\n\n  .dark\\:checked\\:bg-blue-500:checked {\n    --tw-bg-opacity: 1;\n    background-color: rgb(59 130 246 / var(--tw-bg-opacity));\n  }\n\n  .dark\\:checked\\:bg-blue-600:checked {\n    --tw-bg-opacity: 1;\n    background-color: rgb(37 99 235 / var(--tw-bg-opacity));\n  }\n\n  .dark\\:checked\\:before\\:bg-blue-200:checked::before {\n    content: var(--tw-content);\n    --tw-bg-opacity: 1;\n    background-color: rgb(191 219 254 / var(--tw-bg-opacity));\n  }\n\n  .dark\\:focus-within\\:border-blue-300:focus-within {\n    --tw-border-opacity: 1;\n    border-color: rgb(147 197 253 / var(--tw-border-opacity));\n  }\n\n  .dark\\:focus-within\\:border-blue-400:focus-within {\n    --tw-border-opacity: 1;\n    border-color: rgb(96 165 250 / var(--tw-border-opacity));\n  }\n\n  .dark\\:hover\\:border-blue-500:hover {\n    --tw-border-opacity: 1;\n    border-color: rgb(59 130 246 / var(--tw-border-opacity));\n  }\n\n  .dark\\:hover\\:border-blue-700:hover {\n    --tw-border-opacity: 1;\n    border-color: rgb(29 78 216 / var(--tw-border-opacity));\n  }\n\n  .dark\\:hover\\:border-gray-400:hover {\n    --tw-border-opacity: 1;\n    border-color: rgb(156 163 175 / var(--tw-border-opacity));\n  }\n\n  .dark\\:hover\\:border-gray-600:hover {\n    --tw-border-opacity: 1;\n    border-color: rgb(75 85 99 / var(--tw-border-opacity));\n  }\n\n  .dark\\:hover\\:border-gray-900:hover {\n    --tw-border-opacity: 1;\n    border-color: rgb(17 24 39 / var(--tw-border-opacity));\n  }\n\n  .dark\\:hover\\:border-transparent:hover {\n    border-color: transparent;\n  }\n\n  .dark\\:hover\\:border-white:hover {\n    --tw-border-opacity: 1;\n    border-color: rgb(255 255 255 / var(--tw-border-opacity));\n  }\n\n  .dark\\:hover\\:bg-blue-500:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(59 130 246 / var(--tw-bg-opacity));\n  }\n\n  .dark\\:hover\\:bg-blue-600\\/\\[\\.3\\]:hover {\n    background-color: rgb(37 99 235 / .3);\n  }\n\n  .dark\\:hover\\:bg-blue-700:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(29 78 216 / var(--tw-bg-opacity));\n  }\n\n  .dark\\:hover\\:bg-blue-800\\/20:hover {\n    background-color: rgb(30 64 175 / 0.2);\n  }\n\n  .dark\\:hover\\:bg-gray-600:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(75 85 99 / var(--tw-bg-opacity));\n  }\n\n  .dark\\:hover\\:bg-gray-700:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(55 65 81 / var(--tw-bg-opacity));\n  }\n\n  .dark\\:hover\\:bg-gray-800:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(31 41 55 / var(--tw-bg-opacity));\n  }\n\n  .dark\\:hover\\:bg-slate-800:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(30 41 59 / var(--tw-bg-opacity));\n  }\n\n  .dark\\:hover\\:bg-white:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n  }\n\n  .dark\\:hover\\:bg-white\\/\\[\\.05\\]:hover {\n    background-color: rgb(255 255 255 / .05);\n  }\n\n  .dark\\:hover\\:bg-white\\/\\[\\.075\\]:hover {\n    background-color: rgb(255 255 255 / .075);\n  }\n\n  .dark\\:hover\\:text-blue-400:hover {\n    --tw-text-opacity: 1;\n    color: rgb(96 165 250 / var(--tw-text-opacity));\n  }\n\n  .dark\\:hover\\:text-blue-500:hover {\n    --tw-text-opacity: 1;\n    color: rgb(59 130 246 / var(--tw-text-opacity));\n  }\n\n  .dark\\:hover\\:text-blue-700:hover {\n    --tw-text-opacity: 1;\n    color: rgb(29 78 216 / var(--tw-text-opacity));\n  }\n\n  .dark\\:hover\\:text-gray-200:hover {\n    --tw-text-opacity: 1;\n    color: rgb(229 231 235 / var(--tw-text-opacity));\n  }\n\n  .dark\\:hover\\:text-gray-300:hover {\n    --tw-text-opacity: 1;\n    color: rgb(209 213 219 / var(--tw-text-opacity));\n  }\n\n  .dark\\:hover\\:text-gray-400:hover {\n    --tw-text-opacity: 1;\n    color: rgb(156 163 175 / var(--tw-text-opacity));\n  }\n\n  .dark\\:hover\\:text-gray-500:hover {\n    --tw-text-opacity: 1;\n    color: rgb(107 114 128 / var(--tw-text-opacity));\n  }\n\n  .dark\\:hover\\:text-gray-800:hover {\n    --tw-text-opacity: 1;\n    color: rgb(31 41 55 / var(--tw-text-opacity));\n  }\n\n  .dark\\:hover\\:text-slate-300:hover {\n    --tw-text-opacity: 1;\n    color: rgb(203 213 225 / var(--tw-text-opacity));\n  }\n\n  .dark\\:hover\\:text-white:hover {\n    --tw-text-opacity: 1;\n    color: rgb(255 255 255 / var(--tw-text-opacity));\n  }\n\n  .dark\\:hover\\:shadow-black\\/\\[\\.4\\]:hover {\n    --tw-shadow-color: rgb(0 0 0 / .4);\n    --tw-shadow: var(--tw-shadow-colored);\n  }\n\n  .dark\\:hover\\:shadow-slate-700\\/\\[\\.7\\]:hover {\n    --tw-shadow-color: rgb(51 65 85 / .7);\n    --tw-shadow: var(--tw-shadow-colored);\n  }\n\n  .dark\\:focus\\:border-blue-300:focus {\n    --tw-border-opacity: 1;\n    border-color: rgb(147 197 253 / var(--tw-border-opacity));\n  }\n\n  .dark\\:focus\\:border-blue-400:focus {\n    --tw-border-opacity: 1;\n    border-color: rgb(96 165 250 / var(--tw-border-opacity));\n  }\n\n  .dark\\:focus\\:border-blue-500:focus {\n    --tw-border-opacity: 1;\n    border-color: rgb(59 130 246 / var(--tw-border-opacity));\n  }\n\n  .dark\\:focus\\:bg-gray-700:focus {\n    --tw-bg-opacity: 1;\n    background-color: rgb(55 65 81 / var(--tw-bg-opacity));\n  }\n\n  .dark\\:focus\\:bg-slate-800:focus {\n    --tw-bg-opacity: 1;\n    background-color: rgb(30 41 59 / var(--tw-bg-opacity));\n  }\n\n  .dark\\:focus\\:text-gray-400:focus {\n    --tw-text-opacity: 1;\n    color: rgb(156 163 175 / var(--tw-text-opacity));\n  }\n\n  .dark\\:focus\\:placeholder-transparent:focus::-moz-placeholder {\n    color: transparent;\n  }\n\n  .dark\\:focus\\:placeholder-transparent:focus::placeholder {\n    color: transparent;\n  }\n\n  .dark\\:focus\\:ring-blue-500:focus {\n    --tw-ring-opacity: 1;\n    --tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity));\n  }\n\n  .dark\\:focus\\:ring-blue-600:focus {\n    --tw-ring-opacity: 1;\n    --tw-ring-color: rgb(37 99 235 / var(--tw-ring-opacity));\n  }\n\n  .dark\\:focus\\:ring-blue-800:focus {\n    --tw-ring-opacity: 1;\n    --tw-ring-color: rgb(30 64 175 / var(--tw-ring-opacity));\n  }\n\n  .dark\\:focus\\:ring-blue-900:focus {\n    --tw-ring-opacity: 1;\n    --tw-ring-color: rgb(30 58 138 / var(--tw-ring-opacity));\n  }\n\n  .dark\\:focus\\:ring-gray-600:focus {\n    --tw-ring-opacity: 1;\n    --tw-ring-color: rgb(75 85 99 / var(--tw-ring-opacity));\n  }\n\n  .dark\\:focus\\:ring-gray-700:focus {\n    --tw-ring-opacity: 1;\n    --tw-ring-color: rgb(55 65 81 / var(--tw-ring-opacity));\n  }\n\n  .dark\\:focus\\:ring-gray-800:focus {\n    --tw-ring-opacity: 1;\n    --tw-ring-color: rgb(31 41 55 / var(--tw-ring-opacity));\n  }\n\n  .dark\\:focus\\:ring-gray-900:focus {\n    --tw-ring-opacity: 1;\n    --tw-ring-color: rgb(17 24 39 / var(--tw-ring-opacity));\n  }\n\n  .dark\\:focus\\:ring-slate-900:focus {\n    --tw-ring-opacity: 1;\n    --tw-ring-color: rgb(15 23 42 / var(--tw-ring-opacity));\n  }\n\n  .dark\\:focus\\:ring-white:focus {\n    --tw-ring-opacity: 1;\n    --tw-ring-color: rgb(255 255 255 / var(--tw-ring-opacity));\n  }\n\n  .dark\\:focus\\:ring-offset-black:focus {\n    --tw-ring-offset-color: #000;\n  }\n\n  .dark\\:focus\\:ring-offset-blue-500:focus {\n    --tw-ring-offset-color: #3b82f6;\n  }\n\n  .dark\\:focus\\:ring-offset-gray-800:focus {\n    --tw-ring-offset-color: #1f2937;\n  }\n\n  .dark\\:focus\\:ring-offset-slate-900:focus {\n    --tw-ring-offset-color: #0f172a;\n  }\n\n  .dark\\:focus-visible\\:ring-offset-gray-800:focus-visible {\n    --tw-ring-offset-color: #1f2937;\n  }\n\n  .group:hover .dark\\:group-hover\\:text-blue-400 {\n    --tw-text-opacity: 1;\n    color: rgb(96 165 250 / var(--tw-text-opacity));\n  }\n\n  .group:hover .dark\\:group-hover\\:text-blue-500 {\n    --tw-text-opacity: 1;\n    color: rgb(59 130 246 / var(--tw-text-opacity));\n  }\n\n  .group:hover .dark\\:group-hover\\:text-gray-400 {\n    --tw-text-opacity: 1;\n    color: rgb(156 163 175 / var(--tw-text-opacity));\n  }\n\n  .group:hover .dark\\:group-hover\\:text-white {\n    --tw-text-opacity: 1;\n    color: rgb(255 255 255 / var(--tw-text-opacity));\n  }\n}\r\n\r\n@media (min-width: 640px) {\n\n  .sm\\:static {\n    position: static;\n  }\n\n  .sm\\:absolute {\n    position: absolute;\n  }\n\n  .sm\\:right-0 {\n    right: 0px;\n  }\n\n  .sm\\:right-6 {\n    right: 1.5rem;\n  }\n\n  .sm\\:top-0 {\n    top: 0px;\n  }\n\n  .sm\\:top-6 {\n    top: 1.5rem;\n  }\n\n  .sm\\:z-40 {\n    z-index: 40;\n  }\n\n  .sm\\:order-1 {\n    order: 1;\n  }\n\n  .sm\\:order-2 {\n    order: 2;\n  }\n\n  .sm\\:order-3 {\n    order: 3;\n  }\n\n  .sm\\:order-first {\n    order: -9999;\n  }\n\n  .sm\\:order-none {\n    order: 0;\n  }\n\n  .sm\\:col-span-1 {\n    grid-column: span 1 / span 1;\n  }\n\n  .sm\\:col-span-2 {\n    grid-column: span 2 / span 2;\n  }\n\n  .sm\\:col-span-4 {\n    grid-column: span 4 / span 4;\n  }\n\n  .sm\\:col-span-5 {\n    grid-column: span 5 / span 5;\n  }\n\n  .sm\\:col-span-6 {\n    grid-column: span 6 / span 6;\n  }\n\n  .sm\\:col-span-7 {\n    grid-column: span 7 / span 7;\n  }\n\n  .sm\\:-m-4 {\n    margin: -1rem;\n  }\n\n  .sm\\:-mx-0 {\n    margin-left: -0px;\n    margin-right: -0px;\n  }\n\n  .sm\\:-mx-0\\.5 {\n    margin-left: -0.125rem;\n    margin-right: -0.125rem;\n  }\n\n  .sm\\:-mx-2 {\n    margin-left: -0.5rem;\n    margin-right: -0.5rem;\n  }\n\n  .sm\\:-mx-4 {\n    margin-left: -1rem;\n    margin-right: -1rem;\n  }\n\n  .sm\\:mx-0 {\n    margin-left: 0px;\n    margin-right: 0px;\n  }\n\n  .sm\\:mx-0\\.5 {\n    margin-left: 0.125rem;\n    margin-right: 0.125rem;\n  }\n\n  .sm\\:mx-2 {\n    margin-left: 0.5rem;\n    margin-right: 0.5rem;\n  }\n\n  .sm\\:mx-3 {\n    margin-left: 0.75rem;\n    margin-right: 0.75rem;\n  }\n\n  .sm\\:mx-4 {\n    margin-left: 1rem;\n    margin-right: 1rem;\n  }\n\n  .sm\\:mx-6 {\n    margin-left: 1.5rem;\n    margin-right: 1.5rem;\n  }\n\n  .sm\\:mx-auto {\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  .sm\\:my-6 {\n    margin-top: 1.5rem;\n    margin-bottom: 1.5rem;\n  }\n\n  .sm\\:mb-0 {\n    margin-bottom: 0px;\n  }\n\n  .sm\\:mb-1 {\n    margin-bottom: 0.25rem;\n  }\n\n  .sm\\:mb-10 {\n    margin-bottom: 2.5rem;\n  }\n\n  .sm\\:mb-12 {\n    margin-bottom: 3rem;\n  }\n\n  .sm\\:mb-2 {\n    margin-bottom: 0.5rem;\n  }\n\n  .sm\\:mb-4 {\n    margin-bottom: 1rem;\n  }\n\n  .sm\\:mb-5 {\n    margin-bottom: 1.25rem;\n  }\n\n  .sm\\:mb-8 {\n    margin-bottom: 2rem;\n  }\n\n  .sm\\:ml-0 {\n    margin-left: 0px;\n  }\n\n  .sm\\:ml-10 {\n    margin-left: 2.5rem;\n  }\n\n  .sm\\:ml-3 {\n    margin-left: 0.75rem;\n  }\n\n  .sm\\:ml-4 {\n    margin-left: 1rem;\n  }\n\n  .sm\\:ml-6 {\n    margin-left: 1.5rem;\n  }\n\n  .sm\\:ml-8 {\n    margin-left: 2rem;\n  }\n\n  .sm\\:ml-auto {\n    margin-left: auto;\n  }\n\n  .sm\\:mr-1 {\n    margin-right: 0.25rem;\n  }\n\n  .sm\\:mr-10 {\n    margin-right: 2.5rem;\n  }\n\n  .sm\\:mr-2 {\n    margin-right: 0.5rem;\n  }\n\n  .sm\\:mr-4 {\n    margin-right: 1rem;\n  }\n\n  .sm\\:mr-8 {\n    margin-right: 2rem;\n  }\n\n  .sm\\:mt-0 {\n    margin-top: 0px;\n  }\n\n  .sm\\:mt-1 {\n    margin-top: 0.25rem;\n  }\n\n  .sm\\:mt-10 {\n    margin-top: 2.5rem;\n  }\n\n  .sm\\:mt-12 {\n    margin-top: 3rem;\n  }\n\n  .sm\\:mt-16 {\n    margin-top: 4rem;\n  }\n\n  .sm\\:mt-2 {\n    margin-top: 0.5rem;\n  }\n\n  .sm\\:mt-20 {\n    margin-top: 5rem;\n  }\n\n  .sm\\:mt-3 {\n    margin-top: 0.75rem;\n  }\n\n  .sm\\:mt-4 {\n    margin-top: 1rem;\n  }\n\n  .sm\\:mt-6 {\n    margin-top: 1.5rem;\n  }\n\n  .sm\\:mt-8 {\n    margin-top: 2rem;\n  }\n\n  .sm\\:mt-auto {\n    margin-top: auto;\n  }\n\n  .sm\\:block {\n    display: block;\n  }\n\n  .sm\\:inline-block {\n    display: inline-block;\n  }\n\n  .sm\\:inline {\n    display: inline;\n  }\n\n  .sm\\:flex {\n    display: flex;\n  }\n\n  .sm\\:inline-flex {\n    display: inline-flex;\n  }\n\n  .sm\\:grid {\n    display: grid;\n  }\n\n  .sm\\:hidden {\n    display: none;\n  }\n\n  .sm\\:h-14 {\n    height: 3.5rem;\n  }\n\n  .sm\\:h-16 {\n    height: 4rem;\n  }\n\n  .sm\\:h-20 {\n    height: 5rem;\n  }\n\n  .sm\\:h-24 {\n    height: 6rem;\n  }\n\n  .sm\\:h-3\\/4 {\n    height: 75%;\n  }\n\n  .sm\\:h-32 {\n    height: 8rem;\n  }\n\n  .sm\\:h-40 {\n    height: 10rem;\n  }\n\n  .sm\\:h-48 {\n    height: 12rem;\n  }\n\n  .sm\\:h-56 {\n    height: 14rem;\n  }\n\n  .sm\\:h-60 {\n    height: 15rem;\n  }\n\n  .sm\\:h-7 {\n    height: 1.75rem;\n  }\n\n  .sm\\:h-8 {\n    height: 2rem;\n  }\n\n  .sm\\:h-80 {\n    height: 20rem;\n  }\n\n  .sm\\:h-9 {\n    height: 2.25rem;\n  }\n\n  .sm\\:h-96 {\n    height: 24rem;\n  }\n\n  .sm\\:h-\\[2\\.875rem\\] {\n    height: 2.875rem;\n  }\n\n  .sm\\:h-\\[28rem\\] {\n    height: 28rem;\n  }\n\n  .sm\\:h-\\[350px\\] {\n    height: 350px;\n  }\n\n  .sm\\:h-\\[480px\\] {\n    height: 480px;\n  }\n\n  .sm\\:h-\\[calc\\(100\\%_-_2rem\\)\\] {\n    height: calc(100% - 2rem);\n  }\n\n  .sm\\:h-auto {\n    height: auto;\n  }\n\n  .sm\\:h-full {\n    height: 100%;\n  }\n\n  .sm\\:max-h-full {\n    max-height: 100%;\n  }\n\n  .sm\\:w-1\\/2 {\n    width: 50%;\n  }\n\n  .sm\\:w-1\\/3 {\n    width: 33.333333%;\n  }\n\n  .sm\\:w-1\\/4 {\n    width: 25%;\n  }\n\n  .sm\\:w-14 {\n    width: 3.5rem;\n  }\n\n  .sm\\:w-16 {\n    width: 4rem;\n  }\n\n  .sm\\:w-2\\/3 {\n    width: 66.666667%;\n  }\n\n  .sm\\:w-2\\/5 {\n    width: 40%;\n  }\n\n  .sm\\:w-20 {\n    width: 5rem;\n  }\n\n  .sm\\:w-24 {\n    width: 6rem;\n  }\n\n  .sm\\:w-28 {\n    width: 7rem;\n  }\n\n  .sm\\:w-3\\/5 {\n    width: 60%;\n  }\n\n  .sm\\:w-32 {\n    width: 8rem;\n  }\n\n  .sm\\:w-48 {\n    width: 12rem;\n  }\n\n  .sm\\:w-56 {\n    width: 14rem;\n  }\n\n  .sm\\:w-64 {\n    width: 16rem;\n  }\n\n  .sm\\:w-7 {\n    width: 1.75rem;\n  }\n\n  .sm\\:w-72 {\n    width: 18rem;\n  }\n\n  .sm\\:w-9 {\n    width: 2.25rem;\n  }\n\n  .sm\\:w-96 {\n    width: 24rem;\n  }\n\n  .sm\\:w-\\[2\\.875rem\\] {\n    width: 2.875rem;\n  }\n\n  .sm\\:w-\\[250px\\] {\n    width: 250px;\n  }\n\n  .sm\\:w-\\[28rem\\] {\n    width: 28rem;\n  }\n\n  .sm\\:w-\\[auto\\] {\n    width: auto;\n  }\n\n  .sm\\:w-auto {\n    width: auto;\n  }\n\n  .sm\\:w-fit {\n    width: -moz-fit-content;\n    width: fit-content;\n  }\n\n  .sm\\:w-full {\n    width: 100%;\n  }\n\n  .sm\\:max-w-lg {\n    max-width: 32rem;\n  }\n\n  .sm\\:max-w-md {\n    max-width: 28rem;\n  }\n\n  .sm\\:max-w-none {\n    max-width: none;\n  }\n\n  .sm\\:max-w-xl {\n    max-width: 36rem;\n  }\n\n  .sm\\:max-w-xs {\n    max-width: 20rem;\n  }\n\n  .sm\\:flex-\\[0_0_auto\\] {\n    flex: 0 0 auto;\n  }\n\n  .sm\\:flex-\\[1_0_0\\%\\] {\n    flex: 1 0 0%;\n  }\n\n  .sm\\:flex-none {\n    flex: none;\n  }\n\n  .sm\\:flex-shrink-0 {\n    flex-shrink: 0;\n  }\n\n  .sm\\:basis-auto {\n    flex-basis: auto;\n  }\n\n  .sm\\:translate-x-0 {\n    --tw-translate-x: 0px;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n\n  .sm\\:-rotate-90 {\n    --tw-rotate: -90deg;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n\n  .sm\\:columns-2 {\n    -moz-columns: 2;\n         columns: 2;\n  }\n\n  .sm\\:break-inside-avoid {\n    -moz-column-break-inside: avoid;\n         break-inside: avoid;\n  }\n\n  .sm\\:grid-cols-12 {\n    grid-template-columns: repeat(12, minmax(0, 1fr));\n  }\n\n  .sm\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .sm\\:grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n\n  .sm\\:grid-cols-4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n\n  .sm\\:flex-row {\n    flex-direction: row;\n  }\n\n  .sm\\:flex-col {\n    flex-direction: column;\n  }\n\n  .sm\\:flex-nowrap {\n    flex-wrap: nowrap;\n  }\n\n  .sm\\:content-evenly {\n    align-content: space-evenly;\n  }\n\n  .sm\\:items-start {\n    align-items: flex-start;\n  }\n\n  .sm\\:items-center {\n    align-items: center;\n  }\n\n  .sm\\:justify-start {\n    justify-content: flex-start;\n  }\n\n  .sm\\:justify-end {\n    justify-content: flex-end;\n  }\n\n  .sm\\:justify-center {\n    justify-content: center;\n  }\n\n  .sm\\:justify-between {\n    justify-content: space-between;\n  }\n\n  .sm\\:gap-0 {\n    gap: 0px;\n  }\n\n  .sm\\:gap-10 {\n    gap: 2.5rem;\n  }\n\n  .sm\\:gap-12 {\n    gap: 3rem;\n  }\n\n  .sm\\:gap-16 {\n    gap: 4rem;\n  }\n\n  .sm\\:gap-3 {\n    gap: 0.75rem;\n  }\n\n  .sm\\:gap-4 {\n    gap: 1rem;\n  }\n\n  .sm\\:gap-6 {\n    gap: 1.5rem;\n  }\n\n  .sm\\:gap-8 {\n    gap: 2rem;\n  }\n\n  .sm\\:gap-x-12 {\n    -moz-column-gap: 3rem;\n         column-gap: 3rem;\n  }\n\n  .sm\\:gap-x-2 {\n    -moz-column-gap: 0.5rem;\n         column-gap: 0.5rem;\n  }\n\n  .sm\\:gap-x-3 {\n    -moz-column-gap: 0.75rem;\n         column-gap: 0.75rem;\n  }\n\n  .sm\\:gap-x-6 {\n    -moz-column-gap: 1.5rem;\n         column-gap: 1.5rem;\n  }\n\n  .sm\\:gap-x-7 {\n    -moz-column-gap: 1.75rem;\n         column-gap: 1.75rem;\n  }\n\n  .sm\\:gap-y-0 {\n    row-gap: 0px;\n  }\n\n  .sm\\:gap-y-10 {\n    row-gap: 2.5rem;\n  }\n\n  .sm\\:gap-y-12 {\n    row-gap: 3rem;\n  }\n\n  .sm\\:gap-y-8 {\n    row-gap: 2rem;\n  }\n\n  .sm\\:space-x-3 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-x-reverse: 0;\n    margin-right: calc(0.75rem * var(--tw-space-x-reverse));\n    margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));\n  }\n\n  .sm\\:space-x-4 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-x-reverse: 0;\n    margin-right: calc(1rem * var(--tw-space-x-reverse));\n    margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));\n  }\n\n  .sm\\:space-y-0 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-y-reverse: 0;\n    margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom: calc(0px * var(--tw-space-y-reverse));\n  }\n\n  .sm\\:space-y-1 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-y-reverse: 0;\n    margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));\n  }\n\n  .sm\\:space-y-10 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-y-reverse: 0;\n    margin-top: calc(2.5rem * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom: calc(2.5rem * var(--tw-space-y-reverse));\n  }\n\n  .sm\\:space-y-4 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-y-reverse: 0;\n    margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom: calc(1rem * var(--tw-space-y-reverse));\n  }\n\n  .sm\\:space-y-8 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-y-reverse: 0;\n    margin-top: calc(2rem * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom: calc(2rem * var(--tw-space-y-reverse));\n  }\n\n  .sm\\:self-end {\n    align-self: flex-end;\n  }\n\n  .sm\\:overflow-visible {\n    overflow: visible;\n  }\n\n  .sm\\:rounded-full {\n    border-radius: 9999px;\n  }\n\n  .sm\\:rounded-none {\n    border-radius: 0px;\n  }\n\n  .sm\\:rounded-l-lg {\n    border-top-left-radius: 0.5rem;\n    border-bottom-left-radius: 0.5rem;\n  }\n\n  .sm\\:rounded-r-lg {\n    border-top-right-radius: 0.5rem;\n    border-bottom-right-radius: 0.5rem;\n  }\n\n  .sm\\:rounded-r-none {\n    border-top-right-radius: 0px;\n    border-bottom-right-radius: 0px;\n  }\n\n  .sm\\:rounded-tl-\\[30px\\] {\n    border-top-left-radius: 30px;\n  }\n\n  .sm\\:border {\n    border-width: 1px;\n  }\n\n  .sm\\:border-b-2 {\n    border-bottom-width: 2px;\n  }\n\n  .sm\\:border-l {\n    border-left-width: 1px;\n  }\n\n  .sm\\:border-l-2 {\n    border-left-width: 2px;\n  }\n\n  .sm\\:border-t-0 {\n    border-top-width: 0px;\n  }\n\n  .sm\\:border-gray-200 {\n    --tw-border-opacity: 1;\n    border-color: rgb(229 231 235 / var(--tw-border-opacity));\n  }\n\n  .sm\\:border-gray-300 {\n    --tw-border-opacity: 1;\n    border-color: rgb(209 213 219 / var(--tw-border-opacity));\n  }\n\n  .sm\\:border-transparent {\n    border-color: transparent;\n  }\n\n  .sm\\:border-white\\/\\[\\.3\\] {\n    border-color: rgb(255 255 255 / .3);\n  }\n\n  .sm\\:border-r-transparent {\n    border-right-color: transparent;\n  }\n\n  .sm\\:bg-transparent {\n    background-color: transparent;\n  }\n\n  .sm\\:bg-gradient-to-r {\n    background-image: linear-gradient(to right, var(--tw-gradient-stops));\n  }\n\n  .sm\\:from-white\\/95 {\n    --tw-gradient-from: rgb(255 255 255 / 0.95) var(--tw-gradient-from-position);\n    --tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position);\n    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n  }\n\n  .sm\\:to-white\\/25 {\n    --tw-gradient-to: rgb(255 255 255 / 0.25) var(--tw-gradient-to-position);\n  }\n\n  .sm\\:p-16 {\n    padding: 4rem;\n  }\n\n  .sm\\:p-3 {\n    padding: 0.75rem;\n  }\n\n  .sm\\:p-4 {\n    padding: 1rem;\n  }\n\n  .sm\\:p-5 {\n    padding: 1.25rem;\n  }\n\n  .sm\\:p-6 {\n    padding: 1.5rem;\n  }\n\n  .sm\\:p-7 {\n    padding: 1.75rem;\n  }\n\n  .sm\\:p-8 {\n    padding: 2rem;\n  }\n\n  .sm\\:px-0 {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n\n  .sm\\:px-10 {\n    padding-left: 2.5rem;\n    padding-right: 2.5rem;\n  }\n\n  .sm\\:px-16 {\n    padding-left: 4rem;\n    padding-right: 4rem;\n  }\n\n  .sm\\:px-2 {\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n  }\n\n  .sm\\:px-3 {\n    padding-left: 0.75rem;\n    padding-right: 0.75rem;\n  }\n\n  .sm\\:px-4 {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n\n  .sm\\:px-5 {\n    padding-left: 1.25rem;\n    padding-right: 1.25rem;\n  }\n\n  .sm\\:px-6 {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n\n  .sm\\:px-7 {\n    padding-left: 1.75rem;\n    padding-right: 1.75rem;\n  }\n\n  .sm\\:py-0 {\n    padding-top: 0px;\n    padding-bottom: 0px;\n  }\n\n  .sm\\:py-1 {\n    padding-top: 0.25rem;\n    padding-bottom: 0.25rem;\n  }\n\n  .sm\\:py-10 {\n    padding-top: 2.5rem;\n    padding-bottom: 2.5rem;\n  }\n\n  .sm\\:py-16 {\n    padding-top: 4rem;\n    padding-bottom: 4rem;\n  }\n\n  .sm\\:py-2 {\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n  }\n\n  .sm\\:py-24 {\n    padding-top: 6rem;\n    padding-bottom: 6rem;\n  }\n\n  .sm\\:py-3 {\n    padding-top: 0.75rem;\n    padding-bottom: 0.75rem;\n  }\n\n  .sm\\:py-3\\.5 {\n    padding-top: 0.875rem;\n    padding-bottom: 0.875rem;\n  }\n\n  .sm\\:py-4 {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n\n  .sm\\:py-6 {\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n  }\n\n  .sm\\:py-8 {\n    padding-top: 2rem;\n    padding-bottom: 2rem;\n  }\n\n  .sm\\:pb-0 {\n    padding-bottom: 0px;\n  }\n\n  .sm\\:pb-16 {\n    padding-bottom: 4rem;\n  }\n\n  .sm\\:pb-8 {\n    padding-bottom: 2rem;\n  }\n\n  .sm\\:pl-10 {\n    padding-left: 2.5rem;\n  }\n\n  .sm\\:pl-3 {\n    padding-left: 0.75rem;\n  }\n\n  .sm\\:pl-4 {\n    padding-left: 1rem;\n  }\n\n  .sm\\:pl-5 {\n    padding-left: 1.25rem;\n  }\n\n  .sm\\:pl-6 {\n    padding-left: 1.5rem;\n  }\n\n  .sm\\:pl-7 {\n    padding-left: 1.75rem;\n  }\n\n  .sm\\:pl-8 {\n    padding-left: 2rem;\n  }\n\n  .sm\\:pr-10 {\n    padding-right: 2.5rem;\n  }\n\n  .sm\\:pr-16 {\n    padding-right: 4rem;\n  }\n\n  .sm\\:pr-5 {\n    padding-right: 1.25rem;\n  }\n\n  .sm\\:pr-6 {\n    padding-right: 1.5rem;\n  }\n\n  .sm\\:pr-8 {\n    padding-right: 2rem;\n  }\n\n  .sm\\:ps-11 {\n    padding-inline-start: 2.75rem;\n  }\n\n  .sm\\:pt-0 {\n    padding-top: 0px;\n  }\n\n  .sm\\:pt-10 {\n    padding-top: 2.5rem;\n  }\n\n  .sm\\:pt-2 {\n    padding-top: 0.5rem;\n  }\n\n  .sm\\:pt-6 {\n    padding-top: 1.5rem;\n  }\n\n  .sm\\:pt-8 {\n    padding-top: 2rem;\n  }\n\n  .sm\\:pt-\\[100\\%\\] {\n    padding-top: 100%;\n  }\n\n  .sm\\:pt-\\[70\\%\\] {\n    padding-top: 70%;\n  }\n\n  .sm\\:text-left {\n    text-align: left;\n  }\n\n  .sm\\:text-center {\n    text-align: center;\n  }\n\n  .sm\\:text-right {\n    text-align: right;\n  }\n\n  .sm\\:text-2xl {\n    font-size: 1.5rem;\n    line-height: 2rem;\n  }\n\n  .sm\\:text-3xl {\n    font-size: 1.875rem;\n    line-height: 2.25rem;\n  }\n\n  .sm\\:text-4xl {\n    font-size: 2.25rem;\n    line-height: 2.5rem;\n  }\n\n  .sm\\:text-5xl {\n    font-size: 3rem;\n    line-height: 1;\n  }\n\n  .sm\\:text-6xl {\n    font-size: 3.75rem;\n    line-height: 1;\n  }\n\n  .sm\\:text-9xl {\n    font-size: 8rem;\n    line-height: 1;\n  }\n\n  .sm\\:text-\\[\\.5rem\\] {\n    font-size: .5rem;\n  }\n\n  .sm\\:text-base {\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\n\n  .sm\\:text-lg {\n    font-size: 1.125rem;\n    line-height: 1.75rem;\n  }\n\n  .sm\\:text-sm {\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n  }\n\n  .sm\\:text-xl {\n    font-size: 1.25rem;\n    line-height: 1.75rem;\n  }\n\n  .sm\\:leading-relaxed {\n    line-height: 1.625;\n  }\n\n  .sm\\:text-gray-600 {\n    --tw-text-opacity: 1;\n    color: rgb(75 85 99 / var(--tw-text-opacity));\n  }\n\n  .sm\\:shadow-md {\n    --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n    --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  }\n\n  .sm\\:shadow-none {\n    --tw-shadow: 0 0 #0000;\n    --tw-shadow-colored: 0 0 #0000;\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  }\n\n  .sm\\:transition-none {\n    transition-property: none;\n  }\n\n  .sm\\:duration-\\[150ms\\] {\n    transition-duration: 150ms;\n  }\n\n  .sm\\:\\[--strategy\\:absolute\\] {\n    --strategy: absolute;\n  }\n\n  .sm\\:\\[--strategy\\:fixed\\] {\n    --strategy: fixed;\n  }\n\n  .sm\\:\\[--trigger\\:hover\\] {\n    --trigger: hover;\n  }\n\n  @media (prefers-color-scheme: dark) {\n\n    .sm\\:dark\\:border {\n      border-width: 1px;\n    }\n\n    .sm\\:dark\\:border-r-transparent {\n      border-right-color: transparent;\n    }\n  }\n}\r\n\r\n@media (min-width: 768px) {\n\n  .md\\:absolute {\n    position: absolute;\n  }\n\n  .md\\:relative {\n    position: relative;\n  }\n\n  .md\\:left-1\\/2 {\n    left: 50%;\n  }\n\n  .md\\:left-16 {\n    left: 4rem;\n  }\n\n  .md\\:right-0 {\n    right: 0px;\n  }\n\n  .md\\:top-0 {\n    top: 0px;\n  }\n\n  .md\\:top-16 {\n    top: 4rem;\n  }\n\n  .md\\:order-2 {\n    order: 2;\n  }\n\n  .md\\:order-last {\n    order: 9999;\n  }\n\n  .md\\:col-span-2 {\n    grid-column: span 2 / span 2;\n  }\n\n  .md\\:col-span-3 {\n    grid-column: span 3 / span 3;\n  }\n\n  .md\\:col-span-4 {\n    grid-column: span 4 / span 4;\n  }\n\n  .md\\:col-span-8 {\n    grid-column: span 8 / span 8;\n  }\n\n  .md\\:-m-2 {\n    margin: -0.5rem;\n  }\n\n  .md\\:m-0 {\n    margin: 0px;\n  }\n\n  .md\\:-mx-4 {\n    margin-left: -1rem;\n    margin-right: -1rem;\n  }\n\n  .md\\:-mx-5 {\n    margin-left: -1.25rem;\n    margin-right: -1.25rem;\n  }\n\n  .md\\:-mx-6 {\n    margin-left: -1.5rem;\n    margin-right: -1.5rem;\n  }\n\n  .md\\:-mx-8 {\n    margin-left: -2rem;\n    margin-right: -2rem;\n  }\n\n  .md\\:mx-0 {\n    margin-left: 0px;\n    margin-right: 0px;\n  }\n\n  .md\\:mx-1 {\n    margin-left: 0.25rem;\n    margin-right: 0.25rem;\n  }\n\n  .md\\:mx-10 {\n    margin-left: 2.5rem;\n    margin-right: 2.5rem;\n  }\n\n  .md\\:mx-2 {\n    margin-left: 0.5rem;\n    margin-right: 0.5rem;\n  }\n\n  .md\\:mx-24 {\n    margin-left: 6rem;\n    margin-right: 6rem;\n  }\n\n  .md\\:mx-4 {\n    margin-left: 1rem;\n    margin-right: 1rem;\n  }\n\n  .md\\:mx-5 {\n    margin-left: 1.25rem;\n    margin-right: 1.25rem;\n  }\n\n  .md\\:mx-6 {\n    margin-left: 1.5rem;\n    margin-right: 1.5rem;\n  }\n\n  .md\\:mx-8 {\n    margin-left: 2rem;\n    margin-right: 2rem;\n  }\n\n  .md\\:my-0 {\n    margin-top: 0px;\n    margin-bottom: 0px;\n  }\n\n  .md\\:my-16 {\n    margin-top: 4rem;\n    margin-bottom: 4rem;\n  }\n\n  .md\\:my-6 {\n    margin-top: 1.5rem;\n    margin-bottom: 1.5rem;\n  }\n\n  .md\\:mb-0 {\n    margin-bottom: 0px;\n  }\n\n  .md\\:mb-10 {\n    margin-bottom: 2.5rem;\n  }\n\n  .md\\:mb-12 {\n    margin-bottom: 3rem;\n  }\n\n  .md\\:mb-16 {\n    margin-bottom: 4rem;\n  }\n\n  .md\\:mb-2 {\n    margin-bottom: 0.5rem;\n  }\n\n  .md\\:mb-3 {\n    margin-bottom: 0.75rem;\n  }\n\n  .md\\:mb-4 {\n    margin-bottom: 1rem;\n  }\n\n  .md\\:mb-6 {\n    margin-bottom: 1.5rem;\n  }\n\n  .md\\:mb-8 {\n    margin-bottom: 2rem;\n  }\n\n  .md\\:ml-0 {\n    margin-left: 0px;\n  }\n\n  .md\\:ml-4 {\n    margin-left: 1rem;\n  }\n\n  .md\\:ml-5 {\n    margin-left: 1.25rem;\n  }\n\n  .md\\:ml-6 {\n    margin-left: 1.5rem;\n  }\n\n  .md\\:ml-auto {\n    margin-left: auto;\n  }\n\n  .md\\:mr-0 {\n    margin-right: 0px;\n  }\n\n  .md\\:mr-6 {\n    margin-right: 1.5rem;\n  }\n\n  .md\\:mr-auto {\n    margin-right: auto;\n  }\n\n  .md\\:mt-0 {\n    margin-top: 0px;\n  }\n\n  .md\\:mt-10 {\n    margin-top: 2.5rem;\n  }\n\n  .md\\:mt-12 {\n    margin-top: 3rem;\n  }\n\n  .md\\:mt-16 {\n    margin-top: 4rem;\n  }\n\n  .md\\:mt-2 {\n    margin-top: 0.5rem;\n  }\n\n  .md\\:mt-4 {\n    margin-top: 1rem;\n  }\n\n  .md\\:mt-8 {\n    margin-top: 2rem;\n  }\n\n  .md\\:block {\n    display: block;\n  }\n\n  .md\\:flex {\n    display: flex;\n  }\n\n  .md\\:grid {\n    display: grid;\n  }\n\n  .md\\:hidden {\n    display: none;\n  }\n\n  .md\\:h-10 {\n    height: 2.5rem;\n  }\n\n  .md\\:h-14 {\n    height: 3.5rem;\n  }\n\n  .md\\:h-24 {\n    height: 6rem;\n  }\n\n  .md\\:h-32 {\n    height: 8rem;\n  }\n\n  .md\\:h-36 {\n    height: 9rem;\n  }\n\n  .md\\:h-48 {\n    height: 12rem;\n  }\n\n  .md\\:h-56 {\n    height: 14rem;\n  }\n\n  .md\\:h-6 {\n    height: 1.5rem;\n  }\n\n  .md\\:h-64 {\n    height: 16rem;\n  }\n\n  .md\\:h-7 {\n    height: 1.75rem;\n  }\n\n  .md\\:h-8 {\n    height: 2rem;\n  }\n\n  .md\\:h-80 {\n    height: 20rem;\n  }\n\n  .md\\:h-96 {\n    height: 24rem;\n  }\n\n  .md\\:h-\\[calc\\(100\\%_-_4rem\\)\\] {\n    height: calc(100% - 4rem);\n  }\n\n  .md\\:h-auto {\n    height: auto;\n  }\n\n  .md\\:h-full {\n    height: 100%;\n  }\n\n  .md\\:h-screen {\n    height: 100vh;\n  }\n\n  .md\\:w-1\\/2 {\n    width: 50%;\n  }\n\n  .md\\:w-1\\/3 {\n    width: 33.333333%;\n  }\n\n  .md\\:w-1\\/4 {\n    width: 25%;\n  }\n\n  .md\\:w-10 {\n    width: 2.5rem;\n  }\n\n  .md\\:w-14 {\n    width: 3.5rem;\n  }\n\n  .md\\:w-2\\/3 {\n    width: 66.666667%;\n  }\n\n  .md\\:w-2\\/5 {\n    width: 40%;\n  }\n\n  .md\\:w-20 {\n    width: 5rem;\n  }\n\n  .md\\:w-24 {\n    width: 6rem;\n  }\n\n  .md\\:w-3\\/4 {\n    width: 75%;\n  }\n\n  .md\\:w-3\\/5 {\n    width: 60%;\n  }\n\n  .md\\:w-3\\/6 {\n    width: 50%;\n  }\n\n  .md\\:w-32 {\n    width: 8rem;\n  }\n\n  .md\\:w-48 {\n    width: 12rem;\n  }\n\n  .md\\:w-6 {\n    width: 1.5rem;\n  }\n\n  .md\\:w-64 {\n    width: 16rem;\n  }\n\n  .md\\:w-7 {\n    width: 1.75rem;\n  }\n\n  .md\\:w-8 {\n    width: 2rem;\n  }\n\n  .md\\:w-9 {\n    width: 2.25rem;\n  }\n\n  .md\\:w-96 {\n    width: 24rem;\n  }\n\n  .md\\:w-auto {\n    width: auto;\n  }\n\n  .md\\:w-full {\n    width: 100%;\n  }\n\n  .md\\:max-w-md {\n    max-width: 28rem;\n  }\n\n  .md\\:max-w-screen-md {\n    max-width: 768px;\n  }\n\n  .md\\:max-w-screen-xl {\n    max-width: 1280px;\n  }\n\n  .md\\:flex-grow {\n    flex-grow: 1;\n  }\n\n  .md\\:grow {\n    flex-grow: 1;\n  }\n\n  .md\\:translate-x-0 {\n    --tw-translate-x: 0px;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n\n  .md\\:-rotate-90 {\n    --tw-rotate: -90deg;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n\n  .md\\:grid-cols-1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n\n  .md\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .md\\:grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n\n  .md\\:grid-cols-4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n\n  .md\\:grid-cols-5 {\n    grid-template-columns: repeat(5, minmax(0, 1fr));\n  }\n\n  .md\\:grid-cols-6 {\n    grid-template-columns: repeat(6, minmax(0, 1fr));\n  }\n\n  .md\\:flex-row {\n    flex-direction: row;\n  }\n\n  .md\\:flex-col {\n    flex-direction: column;\n  }\n\n  .md\\:flex-nowrap {\n    flex-wrap: nowrap;\n  }\n\n  .md\\:items-start {\n    align-items: flex-start;\n  }\n\n  .md\\:items-end {\n    align-items: flex-end;\n  }\n\n  .md\\:items-center {\n    align-items: center;\n  }\n\n  .md\\:justify-start {\n    justify-content: flex-start;\n  }\n\n  .md\\:justify-end {\n    justify-content: flex-end;\n  }\n\n  .md\\:justify-center {\n    justify-content: center;\n  }\n\n  .md\\:justify-between {\n    justify-content: space-between;\n  }\n\n  .md\\:gap-0 {\n    gap: 0px;\n  }\n\n  .md\\:gap-10 {\n    gap: 2.5rem;\n  }\n\n  .md\\:gap-12 {\n    gap: 3rem;\n  }\n\n  .md\\:gap-16 {\n    gap: 4rem;\n  }\n\n  .md\\:gap-20 {\n    gap: 5rem;\n  }\n\n  .md\\:gap-3 {\n    gap: 0.75rem;\n  }\n\n  .md\\:gap-4 {\n    gap: 1rem;\n  }\n\n  .md\\:gap-6 {\n    gap: 1.5rem;\n  }\n\n  .md\\:gap-8 {\n    gap: 2rem;\n  }\n\n  .md\\:gap-x-4 {\n    -moz-column-gap: 1rem;\n         column-gap: 1rem;\n  }\n\n  .md\\:gap-x-5 {\n    -moz-column-gap: 1.25rem;\n         column-gap: 1.25rem;\n  }\n\n  .md\\:gap-x-6 {\n    -moz-column-gap: 1.5rem;\n         column-gap: 1.5rem;\n  }\n\n  .md\\:gap-x-7 {\n    -moz-column-gap: 1.75rem;\n         column-gap: 1.75rem;\n  }\n\n  .md\\:gap-y-0 {\n    row-gap: 0px;\n  }\n\n  .md\\:space-y-0 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-y-reverse: 0;\n    margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom: calc(0px * var(--tw-space-y-reverse));\n  }\n\n  .md\\:space-y-2 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-y-reverse: 0;\n    margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));\n  }\n\n  .md\\:space-y-4 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-y-reverse: 0;\n    margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom: calc(1rem * var(--tw-space-y-reverse));\n  }\n\n  .md\\:space-y-5 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-y-reverse: 0;\n    margin-top: calc(1.25rem * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom: calc(1.25rem * var(--tw-space-y-reverse));\n  }\n\n  .md\\:space-y-6 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-y-reverse: 0;\n    margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));\n  }\n\n  .md\\:space-y-8 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-y-reverse: 0;\n    margin-top: calc(2rem * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom: calc(2rem * var(--tw-space-y-reverse));\n  }\n\n  .md\\:divide-x > :not([hidden]) ~ :not([hidden]) {\n    --tw-divide-x-reverse: 0;\n    border-right-width: calc(1px * var(--tw-divide-x-reverse));\n    border-left-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));\n  }\n\n  .md\\:rounded-xl {\n    border-radius: 0.75rem;\n  }\n\n  .md\\:rounded-tl-\\[60px\\] {\n    border-top-left-radius: 60px;\n  }\n\n  .md\\:border {\n    border-width: 1px;\n  }\n\n  .md\\:border-b-0 {\n    border-bottom-width: 0px;\n  }\n\n  .md\\:border-l {\n    border-left-width: 1px;\n  }\n\n  .md\\:border-r {\n    border-right-width: 1px;\n  }\n\n  .md\\:border-gray-300 {\n    --tw-border-opacity: 1;\n    border-color: rgb(209 213 219 / var(--tw-border-opacity));\n  }\n\n  .md\\:border-gray-400 {\n    --tw-border-opacity: 1;\n    border-color: rgb(156 163 175 / var(--tw-border-opacity));\n  }\n\n  .md\\:bg-gray-700 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(55 65 81 / var(--tw-bg-opacity));\n  }\n\n  .md\\:bg-transparent {\n    background-color: transparent;\n  }\n\n  .md\\:via-transparent {\n    --tw-gradient-to: rgb(0 0 0 / 0)  var(--tw-gradient-to-position);\n    --tw-gradient-stops: var(--tw-gradient-from), transparent var(--tw-gradient-via-position), var(--tw-gradient-to);\n  }\n\n  .md\\:p-0 {\n    padding: 0px;\n  }\n\n  .md\\:p-10 {\n    padding: 2.5rem;\n  }\n\n  .md\\:p-12 {\n    padding: 3rem;\n  }\n\n  .md\\:p-16 {\n    padding: 4rem;\n  }\n\n  .md\\:p-2 {\n    padding: 0.5rem;\n  }\n\n  .md\\:p-4 {\n    padding: 1rem;\n  }\n\n  .md\\:p-5 {\n    padding: 1.25rem;\n  }\n\n  .md\\:p-6 {\n    padding: 1.5rem;\n  }\n\n  .md\\:p-7 {\n    padding: 1.75rem;\n  }\n\n  .md\\:p-8 {\n    padding: 2rem;\n  }\n\n  .md\\:px-12 {\n    padding-left: 3rem;\n    padding-right: 3rem;\n  }\n\n  .md\\:px-3 {\n    padding-left: 0.75rem;\n    padding-right: 0.75rem;\n  }\n\n  .md\\:px-4 {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n\n  .md\\:px-6 {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n\n  .md\\:px-7 {\n    padding-left: 1.75rem;\n    padding-right: 1.75rem;\n  }\n\n  .md\\:px-8 {\n    padding-left: 2rem;\n    padding-right: 2rem;\n  }\n\n  .md\\:py-0 {\n    padding-top: 0px;\n    padding-bottom: 0px;\n  }\n\n  .md\\:py-1 {\n    padding-top: 0.25rem;\n    padding-bottom: 0.25rem;\n  }\n\n  .md\\:py-14 {\n    padding-top: 3.5rem;\n    padding-bottom: 3.5rem;\n  }\n\n  .md\\:py-16 {\n    padding-top: 4rem;\n    padding-bottom: 4rem;\n  }\n\n  .md\\:py-20 {\n    padding-top: 5rem;\n    padding-bottom: 5rem;\n  }\n\n  .md\\:py-24 {\n    padding-top: 6rem;\n    padding-bottom: 6rem;\n  }\n\n  .md\\:py-3 {\n    padding-top: 0.75rem;\n    padding-bottom: 0.75rem;\n  }\n\n  .md\\:py-4 {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n\n  .md\\:py-6 {\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n  }\n\n  .md\\:py-8 {\n    padding-top: 2rem;\n    padding-bottom: 2rem;\n  }\n\n  .md\\:py-\\[\\.688rem\\] {\n    padding-top: .688rem;\n    padding-bottom: .688rem;\n  }\n\n  .md\\:pb-6 {\n    padding-bottom: 1.5rem;\n  }\n\n  .md\\:pl-12 {\n    padding-left: 3rem;\n  }\n\n  .md\\:pl-16 {\n    padding-left: 4rem;\n  }\n\n  .md\\:pl-20 {\n    padding-left: 5rem;\n  }\n\n  .md\\:pl-4 {\n    padding-left: 1rem;\n  }\n\n  .md\\:pl-6 {\n    padding-left: 1.5rem;\n  }\n\n  .md\\:pl-7 {\n    padding-left: 1.75rem;\n  }\n\n  .md\\:pl-8 {\n    padding-left: 2rem;\n  }\n\n  .md\\:pr-10 {\n    padding-right: 2.5rem;\n  }\n\n  .md\\:pr-12 {\n    padding-right: 3rem;\n  }\n\n  .md\\:pr-16 {\n    padding-right: 4rem;\n  }\n\n  .md\\:pr-20 {\n    padding-right: 5rem;\n  }\n\n  .md\\:pr-8 {\n    padding-right: 2rem;\n  }\n\n  .md\\:pt-8 {\n    padding-top: 2rem;\n  }\n\n  .md\\:text-left {\n    text-align: left;\n  }\n\n  .md\\:text-right {\n    text-align: right;\n  }\n\n  .md\\:text-2xl {\n    font-size: 1.5rem;\n    line-height: 2rem;\n  }\n\n  .md\\:text-3xl {\n    font-size: 1.875rem;\n    line-height: 2.25rem;\n  }\n\n  .md\\:text-4xl {\n    font-size: 2.25rem;\n    line-height: 2.5rem;\n  }\n\n  .md\\:text-5xl {\n    font-size: 3rem;\n    line-height: 1;\n  }\n\n  .md\\:text-6xl {\n    font-size: 3.75rem;\n    line-height: 1;\n  }\n\n  .md\\:text-base {\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\n\n  .md\\:text-lg {\n    font-size: 1.125rem;\n    line-height: 1.75rem;\n  }\n\n  .md\\:text-sm {\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n  }\n\n  .md\\:text-xl {\n    font-size: 1.25rem;\n    line-height: 1.75rem;\n  }\n\n  .md\\:leading-normal {\n    line-height: 1.5;\n  }\n\n  .md\\:leading-tight {\n    line-height: 1.25;\n  }\n\n  .md\\:text-blue-300 {\n    --tw-text-opacity: 1;\n    color: rgb(147 197 253 / var(--tw-text-opacity));\n  }\n\n  .md\\:text-gray-100 {\n    --tw-text-opacity: 1;\n    color: rgb(243 244 246 / var(--tw-text-opacity));\n  }\n\n  .md\\:text-gray-400 {\n    --tw-text-opacity: 1;\n    color: rgb(156 163 175 / var(--tw-text-opacity));\n  }\n\n  .md\\:opacity-100 {\n    opacity: 1;\n  }\n\n  .md\\:shadow-md {\n    --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n    --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  }\n\n  .md\\:duration-\\[150ms\\] {\n    transition-duration: 150ms;\n  }\n\n  .md\\:\\[--strategy\\:absolute\\] {\n    --strategy: absolute;\n  }\n\n  .md\\:\\[--strategy\\:fixed\\] {\n    --strategy: fixed;\n  }\n\n  .md\\:\\[--trigger\\:hover\\] {\n    --trigger: hover;\n  }\n\n  @media (prefers-color-scheme: dark) {\n\n    .md\\:dark\\:border {\n      border-width: 1px;\n    }\n\n    .md\\:dark\\:bg-gray-800 {\n      --tw-bg-opacity: 1;\n      background-color: rgb(31 41 55 / var(--tw-bg-opacity));\n    }\n\n    .md\\:dark\\:bg-transparent {\n      background-color: transparent;\n    }\n  }\n}\r\n\r\n@media (min-width: 1024px) {\n\n  .lg\\:absolute {\n    position: absolute;\n  }\n\n  .lg\\:relative {\n    position: relative;\n  }\n\n  .lg\\:inset-x-0 {\n    left: 0px;\n    right: 0px;\n  }\n\n  .lg\\:inset-y-0 {\n    top: 0px;\n    bottom: 0px;\n  }\n\n  .lg\\:-left-16 {\n    left: -4rem;\n  }\n\n  .lg\\:right-8 {\n    right: 2rem;\n  }\n\n  .lg\\:top-0 {\n    top: 0px;\n  }\n\n  .lg\\:top-8 {\n    top: 2rem;\n  }\n\n  .lg\\:order-1 {\n    order: 1;\n  }\n\n  .lg\\:order-2 {\n    order: 2;\n  }\n\n  .lg\\:order-last {\n    order: 9999;\n  }\n\n  .lg\\:order-none {\n    order: 0;\n  }\n\n  .lg\\:col-span-1 {\n    grid-column: span 1 / span 1;\n  }\n\n  .lg\\:col-span-2 {\n    grid-column: span 2 / span 2;\n  }\n\n  .lg\\:col-span-3 {\n    grid-column: span 3 / span 3;\n  }\n\n  .lg\\:col-span-4 {\n    grid-column: span 4 / span 4;\n  }\n\n  .lg\\:col-span-5 {\n    grid-column: span 5 / span 5;\n  }\n\n  .lg\\:col-span-6 {\n    grid-column: span 6 / span 6;\n  }\n\n  .lg\\:col-span-7 {\n    grid-column: span 7 / span 7;\n  }\n\n  .lg\\:col-span-8 {\n    grid-column: span 8 / span 8;\n  }\n\n  .lg\\:col-start-1 {\n    grid-column-start: 1;\n  }\n\n  .lg\\:col-start-3 {\n    grid-column-start: 3;\n  }\n\n  .lg\\:col-start-6 {\n    grid-column-start: 6;\n  }\n\n  .lg\\:col-start-8 {\n    grid-column-start: 8;\n  }\n\n  .lg\\:col-end-13 {\n    grid-column-end: 13;\n  }\n\n  .lg\\:row-span-2 {\n    grid-row: span 2 / span 2;\n  }\n\n  .lg\\:-mx-10 {\n    margin-left: -2.5rem;\n    margin-right: -2.5rem;\n  }\n\n  .lg\\:-mx-12 {\n    margin-left: -3rem;\n    margin-right: -3rem;\n  }\n\n  .lg\\:-mx-2 {\n    margin-left: -0.5rem;\n    margin-right: -0.5rem;\n  }\n\n  .lg\\:-mx-4 {\n    margin-left: -1rem;\n    margin-right: -1rem;\n  }\n\n  .lg\\:-mx-6 {\n    margin-left: -1.5rem;\n    margin-right: -1.5rem;\n  }\n\n  .lg\\:mx-0 {\n    margin-left: 0px;\n    margin-right: 0px;\n  }\n\n  .lg\\:mx-10 {\n    margin-left: 2.5rem;\n    margin-right: 2.5rem;\n  }\n\n  .lg\\:mx-12 {\n    margin-left: 3rem;\n    margin-right: 3rem;\n  }\n\n  .lg\\:mx-2 {\n    margin-left: 0.5rem;\n    margin-right: 0.5rem;\n  }\n\n  .lg\\:mx-4 {\n    margin-left: 1rem;\n    margin-right: 1rem;\n  }\n\n  .lg\\:mx-6 {\n    margin-left: 1.5rem;\n    margin-right: 1.5rem;\n  }\n\n  .lg\\:mx-8 {\n    margin-left: 2rem;\n    margin-right: 2rem;\n  }\n\n  .lg\\:mx-auto {\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  .lg\\:my-0 {\n    margin-top: 0px;\n    margin-bottom: 0px;\n  }\n\n  .lg\\:my-8 {\n    margin-top: 2rem;\n    margin-bottom: 2rem;\n  }\n\n  .lg\\:-mb-6 {\n    margin-bottom: -1.5rem;\n  }\n\n  .lg\\:-ml-6 {\n    margin-left: -1.5rem;\n  }\n\n  .lg\\:-mt-2 {\n    margin-top: -0.5rem;\n  }\n\n  .lg\\:mb-0 {\n    margin-bottom: 0px;\n  }\n\n  .lg\\:mb-12 {\n    margin-bottom: 3rem;\n  }\n\n  .lg\\:mb-14 {\n    margin-bottom: 3.5rem;\n  }\n\n  .lg\\:mb-16 {\n    margin-bottom: 4rem;\n  }\n\n  .lg\\:mb-20 {\n    margin-bottom: 5rem;\n  }\n\n  .lg\\:mb-3 {\n    margin-bottom: 0.75rem;\n  }\n\n  .lg\\:mb-6 {\n    margin-bottom: 1.5rem;\n  }\n\n  .lg\\:mb-8 {\n    margin-bottom: 2rem;\n  }\n\n  .lg\\:ml-0 {\n    margin-left: 0px;\n  }\n\n  .lg\\:ml-4 {\n    margin-left: 1rem;\n  }\n\n  .lg\\:ml-auto {\n    margin-left: auto;\n  }\n\n  .lg\\:mr-0 {\n    margin-right: 0px;\n  }\n\n  .lg\\:mr-6 {\n    margin-right: 1.5rem;\n  }\n\n  .lg\\:mt-0 {\n    margin-top: 0px;\n  }\n\n  .lg\\:mt-10 {\n    margin-top: 2.5rem;\n  }\n\n  .lg\\:mt-12 {\n    margin-top: 3rem;\n  }\n\n  .lg\\:mt-14 {\n    margin-top: 3.5rem;\n  }\n\n  .lg\\:mt-16 {\n    margin-top: 4rem;\n  }\n\n  .lg\\:mt-2 {\n    margin-top: 0.5rem;\n  }\n\n  .lg\\:mt-20 {\n    margin-top: 5rem;\n  }\n\n  .lg\\:mt-24 {\n    margin-top: 6rem;\n  }\n\n  .lg\\:mt-32 {\n    margin-top: 8rem;\n  }\n\n  .lg\\:mt-5 {\n    margin-top: 1.25rem;\n  }\n\n  .lg\\:mt-6 {\n    margin-top: 1.5rem;\n  }\n\n  .lg\\:mt-8 {\n    margin-top: 2rem;\n  }\n\n  .lg\\:mt-px {\n    margin-top: 1px;\n  }\n\n  .lg\\:block {\n    display: block;\n  }\n\n  .lg\\:inline-block {\n    display: inline-block;\n  }\n\n  .lg\\:inline {\n    display: inline;\n  }\n\n  .lg\\:flex {\n    display: flex;\n  }\n\n  .lg\\:grid {\n    display: grid;\n  }\n\n  .lg\\:hidden {\n    display: none;\n  }\n\n  .lg\\:h-1 {\n    height: 0.25rem;\n  }\n\n  .lg\\:h-10 {\n    height: 2.5rem;\n  }\n\n  .lg\\:h-12 {\n    height: 3rem;\n  }\n\n  .lg\\:h-40 {\n    height: 10rem;\n  }\n\n  .lg\\:h-48 {\n    height: 12rem;\n  }\n\n  .lg\\:h-6 {\n    height: 1.5rem;\n  }\n\n  .lg\\:h-60 {\n    height: 15rem;\n  }\n\n  .lg\\:h-80 {\n    height: 20rem;\n  }\n\n  .lg\\:h-96 {\n    height: 24rem;\n  }\n\n  .lg\\:h-\\[32rem\\] {\n    height: 32rem;\n  }\n\n  .lg\\:h-\\[36rem\\] {\n    height: 36rem;\n  }\n\n  .lg\\:h-auto {\n    height: auto;\n  }\n\n  .lg\\:h-full {\n    height: 100%;\n  }\n\n  .lg\\:h-screen {\n    height: 100vh;\n  }\n\n  .lg\\:w-0 {\n    width: 0px;\n  }\n\n  .lg\\:w-1\\/2 {\n    width: 50%;\n  }\n\n  .lg\\:w-1\\/3 {\n    width: 33.333333%;\n  }\n\n  .lg\\:w-1\\/4 {\n    width: 25%;\n  }\n\n  .lg\\:w-1\\/6 {\n    width: 16.666667%;\n  }\n\n  .lg\\:w-10 {\n    width: 2.5rem;\n  }\n\n  .lg\\:w-12 {\n    width: 3rem;\n  }\n\n  .lg\\:w-16 {\n    width: 4rem;\n  }\n\n  .lg\\:w-2\\/3 {\n    width: 66.666667%;\n  }\n\n  .lg\\:w-2\\/5 {\n    width: 40%;\n  }\n\n  .lg\\:w-2\\/6 {\n    width: 33.333333%;\n  }\n\n  .lg\\:w-24 {\n    width: 6rem;\n  }\n\n  .lg\\:w-3\\/4 {\n    width: 75%;\n  }\n\n  .lg\\:w-3\\/5 {\n    width: 60%;\n  }\n\n  .lg\\:w-4\\/5 {\n    width: 80%;\n  }\n\n  .lg\\:w-4\\/6 {\n    width: 66.666667%;\n  }\n\n  .lg\\:w-40 {\n    width: 10rem;\n  }\n\n  .lg\\:w-48 {\n    width: 12rem;\n  }\n\n  .lg\\:w-6 {\n    width: 1.5rem;\n  }\n\n  .lg\\:w-60 {\n    width: 15rem;\n  }\n\n  .lg\\:w-64 {\n    width: 16rem;\n  }\n\n  .lg\\:w-72 {\n    width: 18rem;\n  }\n\n  .lg\\:w-96 {\n    width: 24rem;\n  }\n\n  .lg\\:w-\\[32rem\\] {\n    width: 32rem;\n  }\n\n  .lg\\:w-auto {\n    width: auto;\n  }\n\n  .lg\\:w-full {\n    width: 100%;\n  }\n\n  .lg\\:max-w-2xl {\n    max-width: 42rem;\n  }\n\n  .lg\\:max-w-5xl {\n    max-width: 64rem;\n  }\n\n  .lg\\:max-w-lg {\n    max-width: 32rem;\n  }\n\n  .lg\\:max-w-none {\n    max-width: none;\n  }\n\n  .lg\\:max-w-screen-lg {\n    max-width: 1024px;\n  }\n\n  .lg\\:max-w-sm {\n    max-width: 24rem;\n  }\n\n  .lg\\:max-w-xl {\n    max-width: 36rem;\n  }\n\n  .lg\\:flex-1 {\n    flex: 1 1 0%;\n  }\n\n  .lg\\:flex-grow {\n    flex-grow: 1;\n  }\n\n  .lg\\:-translate-x-10 {\n    --tw-translate-x: -2.5rem;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n\n  .lg\\:-translate-x-80 {\n    --tw-translate-x: -20rem;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n\n  .lg\\:translate-x-0 {\n    --tw-translate-x: 0px;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n\n  .lg\\:translate-x-20 {\n    --tw-translate-x: 5rem;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n\n  .lg\\:translate-x-32 {\n    --tw-translate-x: 8rem;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n\n  .lg\\:translate-x-80 {\n    --tw-translate-x: 20rem;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n\n  .lg\\:columns-3 {\n    -moz-columns: 3;\n         columns: 3;\n  }\n\n  .lg\\:grid-cols-1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n\n  .lg\\:grid-cols-12 {\n    grid-template-columns: repeat(12, minmax(0, 1fr));\n  }\n\n  .lg\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .lg\\:grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n\n  .lg\\:grid-cols-4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n\n  .lg\\:grid-cols-5 {\n    grid-template-columns: repeat(5, minmax(0, 1fr));\n  }\n\n  .lg\\:grid-cols-6 {\n    grid-template-columns: repeat(6, minmax(0, 1fr));\n  }\n\n  .lg\\:grid-cols-7 {\n    grid-template-columns: repeat(7, minmax(0, 1fr));\n  }\n\n  .lg\\:grid-rows-2 {\n    grid-template-rows: repeat(2, minmax(0, 1fr));\n  }\n\n  .lg\\:flex-row {\n    flex-direction: row;\n  }\n\n  .lg\\:flex-col {\n    flex-direction: column;\n  }\n\n  .lg\\:flex-wrap {\n    flex-wrap: wrap;\n  }\n\n  .lg\\:items-start {\n    align-items: flex-start;\n  }\n\n  .lg\\:items-end {\n    align-items: flex-end;\n  }\n\n  .lg\\:items-center {\n    align-items: center;\n  }\n\n  .lg\\:items-stretch {\n    align-items: stretch;\n  }\n\n  .lg\\:justify-start {\n    justify-content: flex-start;\n  }\n\n  .lg\\:justify-end {\n    justify-content: flex-end;\n  }\n\n  .lg\\:justify-center {\n    justify-content: center;\n  }\n\n  .lg\\:justify-between {\n    justify-content: space-between;\n  }\n\n  .lg\\:gap-10 {\n    gap: 2.5rem;\n  }\n\n  .lg\\:gap-12 {\n    gap: 3rem;\n  }\n\n  .lg\\:gap-16 {\n    gap: 4rem;\n  }\n\n  .lg\\:gap-32 {\n    gap: 8rem;\n  }\n\n  .lg\\:gap-4 {\n    gap: 1rem;\n  }\n\n  .lg\\:gap-6 {\n    gap: 1.5rem;\n  }\n\n  .lg\\:gap-8 {\n    gap: 2rem;\n  }\n\n  .lg\\:gap-x-12 {\n    -moz-column-gap: 3rem;\n         column-gap: 3rem;\n  }\n\n  .lg\\:gap-x-16 {\n    -moz-column-gap: 4rem;\n         column-gap: 4rem;\n  }\n\n  .lg\\:gap-x-20 {\n    -moz-column-gap: 5rem;\n         column-gap: 5rem;\n  }\n\n  .lg\\:gap-x-24 {\n    -moz-column-gap: 6rem;\n         column-gap: 6rem;\n  }\n\n  .lg\\:gap-x-6 {\n    -moz-column-gap: 1.5rem;\n         column-gap: 1.5rem;\n  }\n\n  .lg\\:gap-x-8 {\n    -moz-column-gap: 2rem;\n         column-gap: 2rem;\n  }\n\n  .lg\\:gap-y-0 {\n    row-gap: 0px;\n  }\n\n  .lg\\:gap-y-12 {\n    row-gap: 3rem;\n  }\n\n  .lg\\:gap-y-16 {\n    row-gap: 4rem;\n  }\n\n  .lg\\:space-x-8 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-x-reverse: 0;\n    margin-right: calc(2rem * var(--tw-space-x-reverse));\n    margin-left: calc(2rem * calc(1 - var(--tw-space-x-reverse)));\n  }\n\n  .lg\\:space-y-0 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-y-reverse: 0;\n    margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom: calc(0px * var(--tw-space-y-reverse));\n  }\n\n  .lg\\:space-y-10 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-y-reverse: 0;\n    margin-top: calc(2.5rem * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom: calc(2.5rem * var(--tw-space-y-reverse));\n  }\n\n  .lg\\:space-y-3 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-y-reverse: 0;\n    margin-top: calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom: calc(0.75rem * var(--tw-space-y-reverse));\n  }\n\n  .lg\\:space-y-8 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-y-reverse: 0;\n    margin-top: calc(2rem * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom: calc(2rem * var(--tw-space-y-reverse));\n  }\n\n  .lg\\:divide-x > :not([hidden]) ~ :not([hidden]) {\n    --tw-divide-x-reverse: 0;\n    border-right-width: calc(1px * var(--tw-divide-x-reverse));\n    border-left-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));\n  }\n\n  .lg\\:rounded-lg {\n    border-radius: 0.5rem;\n  }\n\n  .lg\\:border-0 {\n    border-width: 0px;\n  }\n\n  .lg\\:border-b-0 {\n    border-bottom-width: 0px;\n  }\n\n  .lg\\:border-l {\n    border-left-width: 1px;\n  }\n\n  .lg\\:border-r {\n    border-right-width: 1px;\n  }\n\n  .lg\\:bg-gray-100 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(243 244 246 / var(--tw-bg-opacity));\n  }\n\n  .lg\\:bg-transparent {\n    background-color: transparent;\n  }\n\n  .lg\\:bg-gradient-to-r {\n    background-image: linear-gradient(to right, var(--tw-gradient-stops));\n  }\n\n  .lg\\:from-gray-50 {\n    --tw-gradient-from: #f9fafb var(--tw-gradient-from-position);\n    --tw-gradient-to: rgb(249 250 251 / 0) var(--tw-gradient-to-position);\n    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n  }\n\n  .lg\\:via-transparent {\n    --tw-gradient-to: rgb(0 0 0 / 0)  var(--tw-gradient-to-position);\n    --tw-gradient-stops: var(--tw-gradient-from), transparent var(--tw-gradient-via-position), var(--tw-gradient-to);\n  }\n\n  .lg\\:to-transparent {\n    --tw-gradient-to: transparent var(--tw-gradient-to-position);\n  }\n\n  .lg\\:p-0 {\n    padding: 0px;\n  }\n\n  .lg\\:p-10 {\n    padding: 2.5rem;\n  }\n\n  .lg\\:p-12 {\n    padding: 3rem;\n  }\n\n  .lg\\:p-24 {\n    padding: 6rem;\n  }\n\n  .lg\\:p-4 {\n    padding: 1rem;\n  }\n\n  .lg\\:p-6 {\n    padding: 1.5rem;\n  }\n\n  .lg\\:p-8 {\n    padding: 2rem;\n  }\n\n  .lg\\:px-0 {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n\n  .lg\\:px-10 {\n    padding-left: 2.5rem;\n    padding-right: 2.5rem;\n  }\n\n  .lg\\:px-12 {\n    padding-left: 3rem;\n    padding-right: 3rem;\n  }\n\n  .lg\\:px-16 {\n    padding-left: 4rem;\n    padding-right: 4rem;\n  }\n\n  .lg\\:px-36 {\n    padding-left: 9rem;\n    padding-right: 9rem;\n  }\n\n  .lg\\:px-5 {\n    padding-left: 1.25rem;\n    padding-right: 1.25rem;\n  }\n\n  .lg\\:px-6 {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n\n  .lg\\:px-8 {\n    padding-left: 2rem;\n    padding-right: 2rem;\n  }\n\n  .lg\\:py-0 {\n    padding-top: 0px;\n    padding-bottom: 0px;\n  }\n\n  .lg\\:py-12 {\n    padding-top: 3rem;\n    padding-bottom: 3rem;\n  }\n\n  .lg\\:py-14 {\n    padding-top: 3.5rem;\n    padding-bottom: 3.5rem;\n  }\n\n  .lg\\:py-16 {\n    padding-top: 4rem;\n    padding-bottom: 4rem;\n  }\n\n  .lg\\:py-2 {\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n  }\n\n  .lg\\:py-2\\.5 {\n    padding-top: 0.625rem;\n    padding-bottom: 0.625rem;\n  }\n\n  .lg\\:py-20 {\n    padding-top: 5rem;\n    padding-bottom: 5rem;\n  }\n\n  .lg\\:py-24 {\n    padding-top: 6rem;\n    padding-bottom: 6rem;\n  }\n\n  .lg\\:py-3 {\n    padding-top: 0.75rem;\n    padding-bottom: 0.75rem;\n  }\n\n  .lg\\:py-32 {\n    padding-top: 8rem;\n    padding-bottom: 8rem;\n  }\n\n  .lg\\:py-5 {\n    padding-top: 1.25rem;\n    padding-bottom: 1.25rem;\n  }\n\n  .lg\\:py-6 {\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n  }\n\n  .lg\\:pb-12 {\n    padding-bottom: 3rem;\n  }\n\n  .lg\\:pb-24 {\n    padding-bottom: 6rem;\n  }\n\n  .lg\\:pb-32 {\n    padding-bottom: 8rem;\n  }\n\n  .lg\\:pb-48 {\n    padding-bottom: 12rem;\n  }\n\n  .lg\\:pl-10 {\n    padding-left: 2.5rem;\n  }\n\n  .lg\\:pl-12 {\n    padding-left: 3rem;\n  }\n\n  .lg\\:pl-24 {\n    padding-left: 6rem;\n  }\n\n  .lg\\:pl-4 {\n    padding-left: 1rem;\n  }\n\n  .lg\\:pl-6 {\n    padding-left: 1.5rem;\n  }\n\n  .lg\\:pl-8 {\n    padding-left: 2rem;\n  }\n\n  .lg\\:pr-0 {\n    padding-right: 0px;\n  }\n\n  .lg\\:pr-10 {\n    padding-right: 2.5rem;\n  }\n\n  .lg\\:pr-12 {\n    padding-right: 3rem;\n  }\n\n  .lg\\:pr-24 {\n    padding-right: 6rem;\n  }\n\n  .lg\\:pr-4 {\n    padding-right: 1rem;\n  }\n\n  .lg\\:pr-6 {\n    padding-right: 1.5rem;\n  }\n\n  .lg\\:pr-8 {\n    padding-right: 2rem;\n  }\n\n  .lg\\:pt-10 {\n    padding-top: 2.5rem;\n  }\n\n  .lg\\:pt-12 {\n    padding-top: 3rem;\n  }\n\n  .lg\\:pt-16 {\n    padding-top: 4rem;\n  }\n\n  .lg\\:pt-20 {\n    padding-top: 5rem;\n  }\n\n  .lg\\:pt-24 {\n    padding-top: 6rem;\n  }\n\n  .lg\\:pt-32 {\n    padding-top: 8rem;\n  }\n\n  .lg\\:pt-48 {\n    padding-top: 12rem;\n  }\n\n  .lg\\:pt-8 {\n    padding-top: 2rem;\n  }\n\n  .lg\\:text-left {\n    text-align: left;\n  }\n\n  .lg\\:text-center {\n    text-align: center;\n  }\n\n  .lg\\:text-right {\n    text-align: right;\n  }\n\n  .lg\\:text-2xl {\n    font-size: 1.5rem;\n    line-height: 2rem;\n  }\n\n  .lg\\:text-3xl {\n    font-size: 1.875rem;\n    line-height: 2.25rem;\n  }\n\n  .lg\\:text-4xl {\n    font-size: 2.25rem;\n    line-height: 2.5rem;\n  }\n\n  .lg\\:text-5xl {\n    font-size: 3rem;\n    line-height: 1;\n  }\n\n  .lg\\:text-6xl {\n    font-size: 3.75rem;\n    line-height: 1;\n  }\n\n  .lg\\:text-7xl {\n    font-size: 4.5rem;\n    line-height: 1;\n  }\n\n  .lg\\:text-9xl {\n    font-size: 8rem;\n    line-height: 1;\n  }\n\n  .lg\\:text-base {\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\n\n  .lg\\:text-lg {\n    font-size: 1.125rem;\n    line-height: 1.75rem;\n  }\n\n  .lg\\:text-xl {\n    font-size: 1.25rem;\n    line-height: 1.75rem;\n  }\n\n  .lg\\:text-xs {\n    font-size: 0.75rem;\n    line-height: 1rem;\n  }\n\n  .lg\\:font-bold {\n    font-weight: 700;\n  }\n\n  .lg\\:font-normal {\n    font-weight: 400;\n  }\n\n  .lg\\:uppercase {\n    text-transform: uppercase;\n  }\n\n  .lg\\:leading-normal {\n    line-height: 1.5;\n  }\n\n  .lg\\:leading-tight {\n    line-height: 1.25;\n  }\n\n  .lg\\:tracking-wide {\n    letter-spacing: 0.025em;\n  }\n\n  .lg\\:text-blue-700 {\n    --tw-text-opacity: 1;\n    color: rgb(29 78 216 / var(--tw-text-opacity));\n  }\n\n  .lg\\:text-gray-500 {\n    --tw-text-opacity: 1;\n    color: rgb(107 114 128 / var(--tw-text-opacity));\n  }\n\n  .lg\\:opacity-100 {\n    opacity: 1;\n  }\n\n  .lg\\:shadow-lg {\n    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  }\n\n  .lg\\:shadow-none {\n    --tw-shadow: 0 0 #0000;\n    --tw-shadow-colored: 0 0 #0000;\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  }\n\n  .lg\\:before\\:absolute::before {\n    content: var(--tw-content);\n    position: absolute;\n  }\n\n  .lg\\:before\\:-left-12::before {\n    content: var(--tw-content);\n    left: -3rem;\n  }\n\n  .lg\\:before\\:top-0::before {\n    content: var(--tw-content);\n    top: 0px;\n  }\n\n  .lg\\:before\\:h-full::before {\n    content: var(--tw-content);\n    height: 100%;\n  }\n\n  .lg\\:before\\:w-px::before {\n    content: var(--tw-content);\n    width: 1px;\n  }\n\n  .lg\\:before\\:bg-gray-200::before {\n    content: var(--tw-content);\n    --tw-bg-opacity: 1;\n    background-color: rgb(229 231 235 / var(--tw-bg-opacity));\n  }\n\n  .lg\\:hover\\:bg-transparent:hover {\n    background-color: transparent;\n  }\n\n  .lg\\:hover\\:text-blue-700:hover {\n    --tw-text-opacity: 1;\n    color: rgb(29 78 216 / var(--tw-text-opacity));\n  }\n\n  @media (prefers-color-scheme: dark) {\n\n    .lg\\:dark\\:bg-gray-800 {\n      --tw-bg-opacity: 1;\n      background-color: rgb(31 41 55 / var(--tw-bg-opacity));\n    }\n\n    .lg\\:dark\\:bg-transparent {\n      background-color: transparent;\n    }\n\n    .lg\\:before\\:dark\\:bg-gray-700::before {\n      content: var(--tw-content);\n      --tw-bg-opacity: 1;\n      background-color: rgb(55 65 81 / var(--tw-bg-opacity));\n    }\n\n    .lg\\:dark\\:hover\\:bg-transparent:hover {\n      background-color: transparent;\n    }\n\n    .lg\\:dark\\:hover\\:text-white:hover {\n      --tw-text-opacity: 1;\n      color: rgb(255 255 255 / var(--tw-text-opacity));\n    }\n  }\n}\r\n\r\n@media (min-width: 1280px) {\n\n  .xl\\:-mx-8 {\n    margin-left: -2rem;\n    margin-right: -2rem;\n  }\n\n  .xl\\:mx-4 {\n    margin-left: 1rem;\n    margin-right: 1rem;\n  }\n\n  .xl\\:mx-8 {\n    margin-left: 2rem;\n    margin-right: 2rem;\n  }\n\n  .xl\\:mx-auto {\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  .xl\\:mb-12 {\n    margin-bottom: 3rem;\n  }\n\n  .xl\\:mb-16 {\n    margin-bottom: 4rem;\n  }\n\n  .xl\\:mr-3 {\n    margin-right: 0.75rem;\n  }\n\n  .xl\\:mr-4 {\n    margin-right: 1rem;\n  }\n\n  .xl\\:mt-0 {\n    margin-top: 0px;\n  }\n\n  .xl\\:mt-12 {\n    margin-top: 3rem;\n  }\n\n  .xl\\:mt-16 {\n    margin-top: 4rem;\n  }\n\n  .xl\\:mt-6 {\n    margin-top: 1.5rem;\n  }\n\n  .xl\\:flex {\n    display: flex;\n  }\n\n  .xl\\:h-6 {\n    height: 1.5rem;\n  }\n\n  .xl\\:h-96 {\n    height: 24rem;\n  }\n\n  .xl\\:h-\\[28rem\\] {\n    height: 28rem;\n  }\n\n  .xl\\:h-\\[34rem\\] {\n    height: 34rem;\n  }\n\n  .xl\\:w-1\\/2 {\n    width: 50%;\n  }\n\n  .xl\\:w-1\\/3 {\n    width: 33.333333%;\n  }\n\n  .xl\\:w-1\\/4 {\n    width: 25%;\n  }\n\n  .xl\\:w-10\\/12 {\n    width: 83.333333%;\n  }\n\n  .xl\\:w-2\\/4 {\n    width: 50%;\n  }\n\n  .xl\\:w-5\\/12 {\n    width: 41.666667%;\n  }\n\n  .xl\\:w-6 {\n    width: 1.5rem;\n  }\n\n  .xl\\:w-\\[34rem\\] {\n    width: 34rem;\n  }\n\n  .xl\\:min-w-\\[18rem\\] {\n    min-width: 18rem;\n  }\n\n  .xl\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .xl\\:grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n\n  .xl\\:grid-cols-4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n\n  .xl\\:flex-row {\n    flex-direction: row;\n  }\n\n  .xl\\:flex-nowrap {\n    flex-wrap: nowrap;\n  }\n\n  .xl\\:items-start {\n    align-items: flex-start;\n  }\n\n  .xl\\:items-center {\n    align-items: center;\n  }\n\n  .xl\\:gap-0 {\n    gap: 0px;\n  }\n\n  .xl\\:gap-10 {\n    gap: 2.5rem;\n  }\n\n  .xl\\:gap-12 {\n    gap: 3rem;\n  }\n\n  .xl\\:gap-16 {\n    gap: 4rem;\n  }\n\n  .xl\\:gap-20 {\n    gap: 5rem;\n  }\n\n  .xl\\:gap-32 {\n    gap: 8rem;\n  }\n\n  .xl\\:gap-6 {\n    gap: 1.5rem;\n  }\n\n  .xl\\:gap-8 {\n    gap: 2rem;\n  }\n\n  .xl\\:gap-x-12 {\n    -moz-column-gap: 3rem;\n         column-gap: 3rem;\n  }\n\n  .xl\\:border-x {\n    border-left-width: 1px;\n    border-right-width: 1px;\n  }\n\n  .xl\\:p-0 {\n    padding: 0px;\n  }\n\n  .xl\\:p-8 {\n    padding: 2rem;\n  }\n\n  .xl\\:px-24 {\n    padding-left: 6rem;\n    padding-right: 6rem;\n  }\n\n  .xl\\:px-32 {\n    padding-left: 8rem;\n    padding-right: 8rem;\n  }\n\n  .xl\\:px-48 {\n    padding-left: 12rem;\n    padding-right: 12rem;\n  }\n\n  .xl\\:py-24 {\n    padding-top: 6rem;\n    padding-bottom: 6rem;\n  }\n\n  .xl\\:py-48 {\n    padding-top: 12rem;\n    padding-bottom: 12rem;\n  }\n\n  .xl\\:py-64 {\n    padding-top: 16rem;\n    padding-bottom: 16rem;\n  }\n\n  .xl\\:pr-0 {\n    padding-right: 0px;\n  }\n\n  .xl\\:pr-12 {\n    padding-right: 3rem;\n  }\n\n  .xl\\:text-2xl {\n    font-size: 1.5rem;\n    line-height: 2rem;\n  }\n\n  .xl\\:text-3xl {\n    font-size: 1.875rem;\n    line-height: 2.25rem;\n  }\n\n  .xl\\:text-4xl {\n    font-size: 2.25rem;\n    line-height: 2.5rem;\n  }\n\n  .xl\\:text-5xl {\n    font-size: 3rem;\n    line-height: 1;\n  }\n\n  .xl\\:text-6xl {\n    font-size: 3.75rem;\n    line-height: 1;\n  }\n\n  .xl\\:text-lg {\n    font-size: 1.125rem;\n    line-height: 1.75rem;\n  }\n\n  .xl\\:text-xl {\n    font-size: 1.25rem;\n    line-height: 1.75rem;\n  }\n\n  .xl\\:leading-normal {\n    line-height: 1.5;\n  }\n\n  .xl\\:leading-tight {\n    line-height: 1.25;\n  }\n}\r\n\r\n@media (min-width: 1536px) {\n\n  .\\32xl\\:ml-16 {\n    margin-left: 4rem;\n  }\n\n  .\\32xl\\:block {\n    display: block;\n  }\n\n  .\\32xl\\:grid-cols-4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n\n  .\\32xl\\:text-8xl {\n    font-size: 6rem;\n    line-height: 1;\n  }\n}\r\n";
styleInject(css_248z,{"insertAt":"top"});

const getElementProperty = (element, property, defaultValue) => {
  const value = window.getComputedStyle(element)[property];
  if (value !== defaultValue)
    return value;
  else if (!element || element.childNodes.length === 0)
    return defaultValue;
  else
    return getElementProperty(element == null ? void 0 : element.childNodes[0], property, defaultValue);
};
const waitForElement = (target, selector) => {
  return new Promise((r) => {
    const e = target.querySelector(selector);
    if (e)
      return r(e);
    const observer = new MutationObserver(async (m) => {
      const e2 = target.querySelector(selector);
      await new Promise((r2) => setTimeout(r2, 100));
      if (e2) {
        r(e2);
        observer.disconnect();
      }
    });
    observer.observe(target, { childList: true, subtree: true });
  });
};
const isDarkBackground = (bgColor) => {
  const [r, g, b] = bgColor.match(/\(([^()]+)\)/)[1].split(",").map((v) => parseInt(v));
  const hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));
  return hsp < 127.5;
};
const PoweredBy = () => {
  const [textColor, setTextColor] = React.useState(null);
  const [bgColor, setBgColor] = React.useState(null);
  const loadTheme = async () => {
    await waitForElement(window.document.body, "#page > :last-child");
    const container = window.document.querySelector("#page");
    const lastComponent = container.querySelector("#page > :last-child");
    const bgColor2 = getElementProperty(lastComponent, "backgroundColor", "rgba(0, 0, 0, 0)");
    setBgColor(bgColor2);
    const textColor2 = isDarkBackground(bgColor2) ? "white" : "grey";
    setTextColor(textColor2);
  };
  React.useEffect(() => {
    loadTheme();
  }, []);
  if (!textColor || !bgColor)
    return null;
  return /* @__PURE__ */ React__default["default"].createElement(
    "div",
    {
      id: "powered-by",
      style: {
        width: "100%",
        padding: "8px 0",
        textAlign: "center",
        color: textColor,
        backgroundColor: bgColor
      }
    },
    "Powered by\xA0",
    /* @__PURE__ */ React__default["default"].createElement("a", { rel: "dofollow", href: "https://www.getdestack.com/", target: "_blank", className: "font-bold hover:opacity-80" }, "Destack"),
    "\xA0 | The open source page builder"
  );
};

function TrashIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React__namespace.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
  }));
}
const ForwardRef$a = React__namespace.forwardRef(TrashIcon);
var TrashIcon$1 = ForwardRef$a;

function ArrowDownIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React__namespace.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
  }));
}
const ForwardRef$9 = React__namespace.forwardRef(ArrowDownIcon);
var ArrowDownIcon$1 = ForwardRef$9;

function ArrowUpIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React__namespace.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
  }));
}
const ForwardRef$8 = React__namespace.forwardRef(ArrowUpIcon);
var ArrowUpIcon$1 = ForwardRef$8;

function CursorArrowRippleIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React__namespace.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5"
  }));
}
const ForwardRef$7 = React__namespace.forwardRef(CursorArrowRippleIcon);
var CursorArrowRippleIcon$1 = ForwardRef$7;

function Squares2X2Icon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React__namespace.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
  }));
}
const ForwardRef$6 = React__namespace.forwardRef(Squares2X2Icon);
var Squares2X2Icon$1 = ForwardRef$6;

function ArrowSmallUpIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React__namespace.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
  }));
}
const ForwardRef$5 = React__namespace.forwardRef(ArrowSmallUpIcon);
var ArrowSmallUpIcon$1 = ForwardRef$5;

function ChevronDownIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React__namespace.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
  }));
}
const ForwardRef$4 = React__namespace.forwardRef(ChevronDownIcon);
var ChevronDownIcon$1 = ForwardRef$4;

function ComputerDesktopIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React__namespace.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
  }));
}
const ForwardRef$3 = React__namespace.forwardRef(ComputerDesktopIcon);
var ComputerDesktopIcon$1 = ForwardRef$3;

function PencilIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React__namespace.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
  }));
}
const ForwardRef$2 = React__namespace.forwardRef(PencilIcon);
var PencilIcon$1 = ForwardRef$2;

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

function $ae6933e535247d3d$export$7d15b64cf5a3a4c4(value, [min, max]) {
    return Math.min(max, Math.max(min, value));
}

function $e42e1063c40fb3ef$export$b9ecd428b558ff10(originalEventHandler, ourEventHandler, { checkForDefaultPrevented: checkForDefaultPrevented = true  } = {}) {
    return function handleEvent(event) {
        originalEventHandler === null || originalEventHandler === void 0 || originalEventHandler(event);
        if (checkForDefaultPrevented === false || !event.defaultPrevented) return ourEventHandler === null || ourEventHandler === void 0 ? void 0 : ourEventHandler(event);
    };
}

/* -------------------------------------------------------------------------------------------------
 * createContextScope
 * -----------------------------------------------------------------------------------------------*/ function $c512c27ab02ef895$export$50c7b4e9d9f19c1(scopeName, createContextScopeDeps = []) {
    let defaultContexts = [];
    /* -----------------------------------------------------------------------------------------------
   * createContext
   * ---------------------------------------------------------------------------------------------*/ function $c512c27ab02ef895$export$fd42f52fd3ae1109(rootComponentName, defaultContext) {
        const BaseContext = /*#__PURE__*/ React.createContext(defaultContext);
        const index = defaultContexts.length;
        defaultContexts = [
            ...defaultContexts,
            defaultContext
        ];
        function Provider(props) {
            const { scope: scope , children: children , ...context } = props;
            const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index]) || BaseContext; // Only re-memoize when prop values change
            // eslint-disable-next-line react-hooks/exhaustive-deps
            const value = React.useMemo(()=>context
            , Object.values(context));
            return /*#__PURE__*/ React.createElement(Context.Provider, {
                value: value
            }, children);
        }
        function useContext(consumerName, scope) {
            const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index]) || BaseContext;
            const context = React.useContext(Context);
            if (context) return context;
            if (defaultContext !== undefined) return defaultContext; // if a defaultContext wasn't specified, it's a required context.
            throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
        }
        Provider.displayName = rootComponentName + 'Provider';
        return [
            Provider,
            useContext
        ];
    }
    /* -----------------------------------------------------------------------------------------------
   * createScope
   * ---------------------------------------------------------------------------------------------*/ const createScope = ()=>{
        const scopeContexts = defaultContexts.map((defaultContext)=>{
            return /*#__PURE__*/ React.createContext(defaultContext);
        });
        return function useScope(scope) {
            const contexts = (scope === null || scope === void 0 ? void 0 : scope[scopeName]) || scopeContexts;
            return React.useMemo(()=>({
                    [`__scope${scopeName}`]: {
                        ...scope,
                        [scopeName]: contexts
                    }
                })
            , [
                scope,
                contexts
            ]);
        };
    };
    createScope.scopeName = scopeName;
    return [
        $c512c27ab02ef895$export$fd42f52fd3ae1109,
        $c512c27ab02ef895$var$composeContextScopes(createScope, ...createContextScopeDeps)
    ];
}
/* -------------------------------------------------------------------------------------------------
 * composeContextScopes
 * -----------------------------------------------------------------------------------------------*/ function $c512c27ab02ef895$var$composeContextScopes(...scopes) {
    const baseScope = scopes[0];
    if (scopes.length === 1) return baseScope;
    const createScope1 = ()=>{
        const scopeHooks = scopes.map((createScope)=>({
                useScope: createScope(),
                scopeName: createScope.scopeName
            })
        );
        return function useComposedScopes(overrideScopes) {
            const nextScopes1 = scopeHooks.reduce((nextScopes, { useScope: useScope , scopeName: scopeName  })=>{
                // We are calling a hook inside a callback which React warns against to avoid inconsistent
                // renders, however, scoping doesn't have render side effects so we ignore the rule.
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const scopeProps = useScope(overrideScopes);
                const currentScope = scopeProps[`__scope${scopeName}`];
                return {
                    ...nextScopes,
                    ...currentScope
                };
            }, {});
            return React.useMemo(()=>({
                    [`__scope${baseScope.scopeName}`]: nextScopes1
                })
            , [
                nextScopes1
            ]);
        };
    };
    createScope1.scopeName = baseScope.scopeName;
    return createScope1;
}

/**
 * Set a given ref to a given value
 * This utility takes care of different types of refs: callback refs and RefObject(s)
 */ function $6ed0406888f73fc4$var$setRef(ref, value) {
    if (typeof ref === 'function') ref(value);
    else if (ref !== null && ref !== undefined) ref.current = value;
}
/**
 * A utility to compose multiple refs together
 * Accepts callback refs and RefObject(s)
 */ function $6ed0406888f73fc4$export$43e446d32b3d21af(...refs) {
    return (node)=>refs.forEach((ref)=>$6ed0406888f73fc4$var$setRef(ref, node)
        )
    ;
}
/**
 * A custom hook that composes multiple refs
 * Accepts callback refs and RefObject(s)
 */ function $6ed0406888f73fc4$export$c7b2cbe3552a0d05(...refs) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return React.useCallback($6ed0406888f73fc4$export$43e446d32b3d21af(...refs), refs);
}

/* -------------------------------------------------------------------------------------------------
 * Slot
 * -----------------------------------------------------------------------------------------------*/ const $5e63c961fc1ce211$export$8c6ed5c666ac1360 = /*#__PURE__*/ React.forwardRef((props, forwardedRef)=>{
    const { children: children , ...slotProps } = props;
    const childrenArray = React.Children.toArray(children);
    const slottable = childrenArray.find($5e63c961fc1ce211$var$isSlottable);
    if (slottable) {
        // the new element to render is the one passed as a child of `Slottable`
        const newElement = slottable.props.children;
        const newChildren = childrenArray.map((child)=>{
            if (child === slottable) {
                // because the new element will be the one rendered, we are only interested
                // in grabbing its children (`newElement.props.children`)
                if (React.Children.count(newElement) > 1) return React.Children.only(null);
                return /*#__PURE__*/ React.isValidElement(newElement) ? newElement.props.children : null;
            } else return child;
        });
        return /*#__PURE__*/ React.createElement($5e63c961fc1ce211$var$SlotClone, _extends({}, slotProps, {
            ref: forwardedRef
        }), /*#__PURE__*/ React.isValidElement(newElement) ? /*#__PURE__*/ React.cloneElement(newElement, undefined, newChildren) : null);
    }
    return /*#__PURE__*/ React.createElement($5e63c961fc1ce211$var$SlotClone, _extends({}, slotProps, {
        ref: forwardedRef
    }), children);
});
$5e63c961fc1ce211$export$8c6ed5c666ac1360.displayName = 'Slot';
/* -------------------------------------------------------------------------------------------------
 * SlotClone
 * -----------------------------------------------------------------------------------------------*/ const $5e63c961fc1ce211$var$SlotClone = /*#__PURE__*/ React.forwardRef((props, forwardedRef)=>{
    const { children: children , ...slotProps } = props;
    if (/*#__PURE__*/ React.isValidElement(children)) return /*#__PURE__*/ React.cloneElement(children, {
        ...$5e63c961fc1ce211$var$mergeProps(slotProps, children.props),
        ref: forwardedRef ? $6ed0406888f73fc4$export$43e446d32b3d21af(forwardedRef, children.ref) : children.ref
    });
    return React.Children.count(children) > 1 ? React.Children.only(null) : null;
});
$5e63c961fc1ce211$var$SlotClone.displayName = 'SlotClone';
/* -------------------------------------------------------------------------------------------------
 * Slottable
 * -----------------------------------------------------------------------------------------------*/ const $5e63c961fc1ce211$export$d9f1ccf0bdb05d45 = ({ children: children  })=>{
    return /*#__PURE__*/ React.createElement(React.Fragment, null, children);
};
/* ---------------------------------------------------------------------------------------------- */ function $5e63c961fc1ce211$var$isSlottable(child) {
    return /*#__PURE__*/ React.isValidElement(child) && child.type === $5e63c961fc1ce211$export$d9f1ccf0bdb05d45;
}
function $5e63c961fc1ce211$var$mergeProps(slotProps, childProps) {
    // all child props should override
    const overrideProps = {
        ...childProps
    };
    for(const propName in childProps){
        const slotPropValue = slotProps[propName];
        const childPropValue = childProps[propName];
        const isHandler = /^on[A-Z]/.test(propName);
        if (isHandler) {
            // if the handler exists on both, we compose them
            if (slotPropValue && childPropValue) overrideProps[propName] = (...args)=>{
                childPropValue(...args);
                slotPropValue(...args);
            };
            else if (slotPropValue) overrideProps[propName] = slotPropValue;
        } else if (propName === 'style') overrideProps[propName] = {
            ...slotPropValue,
            ...childPropValue
        };
        else if (propName === 'className') overrideProps[propName] = [
            slotPropValue,
            childPropValue
        ].filter(Boolean).join(' ');
    }
    return {
        ...slotProps,
        ...overrideProps
    };
}

// We have resorted to returning slots directly rather than exposing primitives that can then
// be slotted like `<CollectionItem as={Slot}>…</CollectionItem>`.
// This is because we encountered issues with generic types that cannot be statically analysed
// due to creating them dynamically via createCollection.
function $e02a7d9cb1dc128c$export$c74125a8e3af6bb2(name) {
    /* -----------------------------------------------------------------------------------------------
   * CollectionProvider
   * ---------------------------------------------------------------------------------------------*/ const PROVIDER_NAME = name + 'CollectionProvider';
    const [createCollectionContext, createCollectionScope] = $c512c27ab02ef895$export$50c7b4e9d9f19c1(PROVIDER_NAME);
    const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(PROVIDER_NAME, {
        collectionRef: {
            current: null
        },
        itemMap: new Map()
    });
    const CollectionProvider = (props)=>{
        const { scope: scope , children: children  } = props;
        const ref = React__default["default"].useRef(null);
        const itemMap = React__default["default"].useRef(new Map()).current;
        return /*#__PURE__*/ React__default["default"].createElement(CollectionProviderImpl, {
            scope: scope,
            itemMap: itemMap,
            collectionRef: ref
        }, children);
    };
    /* -----------------------------------------------------------------------------------------------
   * CollectionSlot
   * ---------------------------------------------------------------------------------------------*/ const COLLECTION_SLOT_NAME = name + 'CollectionSlot';
    const CollectionSlot = /*#__PURE__*/ React__default["default"].forwardRef((props, forwardedRef)=>{
        const { scope: scope , children: children  } = props;
        const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
        const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.collectionRef);
        return /*#__PURE__*/ React__default["default"].createElement($5e63c961fc1ce211$export$8c6ed5c666ac1360, {
            ref: composedRefs
        }, children);
    });
    /* -----------------------------------------------------------------------------------------------
   * CollectionItem
   * ---------------------------------------------------------------------------------------------*/ const ITEM_SLOT_NAME = name + 'CollectionItemSlot';
    const ITEM_DATA_ATTR = 'data-radix-collection-item';
    const CollectionItemSlot = /*#__PURE__*/ React__default["default"].forwardRef((props, forwardedRef)=>{
        const { scope: scope , children: children , ...itemData } = props;
        const ref = React__default["default"].useRef(null);
        const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
        const context = useCollectionContext(ITEM_SLOT_NAME, scope);
        React__default["default"].useEffect(()=>{
            context.itemMap.set(ref, {
                ref: ref,
                ...itemData
            });
            return ()=>void context.itemMap.delete(ref)
            ;
        });
        return /*#__PURE__*/ React__default["default"].createElement($5e63c961fc1ce211$export$8c6ed5c666ac1360, {
            [ITEM_DATA_ATTR]: '',
            ref: composedRefs
        }, children);
    });
    /* -----------------------------------------------------------------------------------------------
   * useCollection
   * ---------------------------------------------------------------------------------------------*/ function useCollection(scope) {
        const context = useCollectionContext(name + 'CollectionConsumer', scope);
        const getItems = React__default["default"].useCallback(()=>{
            const collectionNode = context.collectionRef.current;
            if (!collectionNode) return [];
            const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
            const items = Array.from(context.itemMap.values());
            const orderedItems = items.sort((a, b)=>orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current)
            );
            return orderedItems;
        }, [
            context.collectionRef,
            context.itemMap
        ]);
        return getItems;
    }
    return [
        {
            Provider: CollectionProvider,
            Slot: CollectionSlot,
            ItemSlot: CollectionItemSlot
        },
        useCollection,
        createCollectionScope
    ];
}

const $f631663db3294ace$var$DirectionContext = /*#__PURE__*/ React.createContext(undefined);
/* -----------------------------------------------------------------------------------------------*/ function $f631663db3294ace$export$b39126d51d94e6f3(localDir) {
    const globalDir = React.useContext($f631663db3294ace$var$DirectionContext);
    return localDir || globalDir || 'ltr';
}

const $8927f6f2acc4f386$var$NODES = [
    'a',
    'button',
    'div',
    'form',
    'h2',
    'h3',
    'img',
    'input',
    'label',
    'li',
    'nav',
    'ol',
    'p',
    'span',
    'svg',
    'ul'
]; // Temporary while we await merge of this fix:
// https://github.com/DefinitelyTyped/DefinitelyTyped/pull/55396
// prettier-ignore
/* -------------------------------------------------------------------------------------------------
 * Primitive
 * -----------------------------------------------------------------------------------------------*/ const $8927f6f2acc4f386$export$250ffa63cdc0d034 = $8927f6f2acc4f386$var$NODES.reduce((primitive, node)=>{
    const Node = /*#__PURE__*/ React.forwardRef((props, forwardedRef)=>{
        const { asChild: asChild , ...primitiveProps } = props;
        const Comp = asChild ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : node;
        React.useEffect(()=>{
            window[Symbol.for('radix-ui')] = true;
        }, []);
        return /*#__PURE__*/ React.createElement(Comp, _extends({}, primitiveProps, {
            ref: forwardedRef
        }));
    });
    Node.displayName = `Primitive.${node}`;
    return {
        ...primitive,
        [node]: Node
    };
}, {});
/* -------------------------------------------------------------------------------------------------
 * Utils
 * -----------------------------------------------------------------------------------------------*/ /**
 * Flush custom event dispatch
 * https://github.com/radix-ui/primitives/pull/1378
 *
 * React batches *all* event handlers since version 18, this introduces certain considerations when using custom event types.
 *
 * Internally, React prioritises events in the following order:
 *  - discrete
 *  - continuous
 *  - default
 *
 * https://github.com/facebook/react/blob/a8a4742f1c54493df00da648a3f9d26e3db9c8b5/packages/react-dom/src/events/ReactDOMEventListener.js#L294-L350
 *
 * `discrete` is an  important distinction as updates within these events are applied immediately.
 * React however, is not able to infer the priority of custom event types due to how they are detected internally.
 * Because of this, it's possible for updates from custom events to be unexpectedly batched when
 * dispatched by another `discrete` event.
 *
 * In order to ensure that updates from custom events are applied predictably, we need to manually flush the batch.
 * This utility should be used when dispatching a custom event from within another `discrete` event, this utility
 * is not nessesary when dispatching known event types, or if dispatching a custom type inside a non-discrete event.
 * For example:
 *
 * dispatching a known click 👎
 * target.dispatchEvent(new Event(‘click’))
 *
 * dispatching a custom type within a non-discrete event 👎
 * onScroll={(event) => event.target.dispatchEvent(new CustomEvent(‘customType’))}
 *
 * dispatching a custom type within a `discrete` event 👍
 * onPointerDown={(event) => dispatchDiscreteCustomEvent(event.target, new CustomEvent(‘customType’))}
 *
 * Note: though React classifies `focus`, `focusin` and `focusout` events as `discrete`, it's  not recommended to use
 * this utility with them. This is because it's possible for those handlers to be called implicitly during render
 * e.g. when focus is within a component as it is unmounted, or when managing focus on mount.
 */ function $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, event) {
    if (target) ReactDOM.flushSync(()=>target.dispatchEvent(event)
    );
}

/**
 * A custom hook that converts a callback to a ref to avoid triggering re-renders when passed as a
 * prop or avoid re-executing effects when passed as a dependency
 */ function $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(callback) {
    const callbackRef = React.useRef(callback);
    React.useEffect(()=>{
        callbackRef.current = callback;
    }); // https://github.com/facebook/react/issues/19240
    return React.useMemo(()=>(...args)=>{
            var _callbackRef$current;
            return (_callbackRef$current = callbackRef.current) === null || _callbackRef$current === void 0 ? void 0 : _callbackRef$current.call(callbackRef, ...args);
        }
    , []);
}

/**
 * Listens for when the escape key is down
 */ function $addc16e1bbe58fd0$export$3a72a57244d6e765(onEscapeKeyDownProp, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
    const onEscapeKeyDown = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onEscapeKeyDownProp);
    React.useEffect(()=>{
        const handleKeyDown = (event)=>{
            if (event.key === 'Escape') onEscapeKeyDown(event);
        };
        ownerDocument.addEventListener('keydown', handleKeyDown);
        return ()=>ownerDocument.removeEventListener('keydown', handleKeyDown)
        ;
    }, [
        onEscapeKeyDown,
        ownerDocument
    ]);
}

const $5cb92bef7577960e$var$CONTEXT_UPDATE = 'dismissableLayer.update';
const $5cb92bef7577960e$var$POINTER_DOWN_OUTSIDE = 'dismissableLayer.pointerDownOutside';
const $5cb92bef7577960e$var$FOCUS_OUTSIDE = 'dismissableLayer.focusOutside';
let $5cb92bef7577960e$var$originalBodyPointerEvents;
const $5cb92bef7577960e$var$DismissableLayerContext = /*#__PURE__*/ React.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set()
});
const $5cb92bef7577960e$export$177fb62ff3ec1f22 = /*#__PURE__*/ React.forwardRef((props, forwardedRef)=>{
    var _node$ownerDocument;
    const { disableOutsidePointerEvents: disableOutsidePointerEvents = false , onEscapeKeyDown: onEscapeKeyDown , onPointerDownOutside: onPointerDownOutside , onFocusOutside: onFocusOutside , onInteractOutside: onInteractOutside , onDismiss: onDismiss , ...layerProps } = props;
    const context = React.useContext($5cb92bef7577960e$var$DismissableLayerContext);
    const [node1, setNode] = React.useState(null);
    const ownerDocument = (_node$ownerDocument = node1 === null || node1 === void 0 ? void 0 : node1.ownerDocument) !== null && _node$ownerDocument !== void 0 ? _node$ownerDocument : globalThis === null || globalThis === void 0 ? void 0 : globalThis.document;
    const [, force] = React.useState({});
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, (node)=>setNode(node)
    );
    const layers = Array.from(context.layers);
    const [highestLayerWithOutsidePointerEventsDisabled] = [
        ...context.layersWithOutsidePointerEventsDisabled
    ].slice(-1); // prettier-ignore
    const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled); // prettier-ignore
    const index = node1 ? layers.indexOf(node1) : -1;
    const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
    const isPointerEventsEnabled = index >= highestLayerWithOutsidePointerEventsDisabledIndex;
    const pointerDownOutside = $5cb92bef7577960e$var$usePointerDownOutside((event)=>{
        const target = event.target;
        const isPointerDownOnBranch = [
            ...context.branches
        ].some((branch)=>branch.contains(target)
        );
        if (!isPointerEventsEnabled || isPointerDownOnBranch) return;
        onPointerDownOutside === null || onPointerDownOutside === void 0 || onPointerDownOutside(event);
        onInteractOutside === null || onInteractOutside === void 0 || onInteractOutside(event);
        if (!event.defaultPrevented) onDismiss === null || onDismiss === void 0 || onDismiss();
    }, ownerDocument);
    const focusOutside = $5cb92bef7577960e$var$useFocusOutside((event)=>{
        const target = event.target;
        const isFocusInBranch = [
            ...context.branches
        ].some((branch)=>branch.contains(target)
        );
        if (isFocusInBranch) return;
        onFocusOutside === null || onFocusOutside === void 0 || onFocusOutside(event);
        onInteractOutside === null || onInteractOutside === void 0 || onInteractOutside(event);
        if (!event.defaultPrevented) onDismiss === null || onDismiss === void 0 || onDismiss();
    }, ownerDocument);
    $addc16e1bbe58fd0$export$3a72a57244d6e765((event)=>{
        const isHighestLayer = index === context.layers.size - 1;
        if (!isHighestLayer) return;
        onEscapeKeyDown === null || onEscapeKeyDown === void 0 || onEscapeKeyDown(event);
        if (!event.defaultPrevented && onDismiss) {
            event.preventDefault();
            onDismiss();
        }
    }, ownerDocument);
    React.useEffect(()=>{
        if (!node1) return;
        if (disableOutsidePointerEvents) {
            if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
                $5cb92bef7577960e$var$originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
                ownerDocument.body.style.pointerEvents = 'none';
            }
            context.layersWithOutsidePointerEventsDisabled.add(node1);
        }
        context.layers.add(node1);
        $5cb92bef7577960e$var$dispatchUpdate();
        return ()=>{
            if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1) ownerDocument.body.style.pointerEvents = $5cb92bef7577960e$var$originalBodyPointerEvents;
        };
    }, [
        node1,
        ownerDocument,
        disableOutsidePointerEvents,
        context
    ]);
    /**
   * We purposefully prevent combining this effect with the `disableOutsidePointerEvents` effect
   * because a change to `disableOutsidePointerEvents` would remove this layer from the stack
   * and add it to the end again so the layering order wouldn't be _creation order_.
   * We only want them to be removed from context stacks when unmounted.
   */ React.useEffect(()=>{
        return ()=>{
            if (!node1) return;
            context.layers.delete(node1);
            context.layersWithOutsidePointerEventsDisabled.delete(node1);
            $5cb92bef7577960e$var$dispatchUpdate();
        };
    }, [
        node1,
        context
    ]);
    React.useEffect(()=>{
        const handleUpdate = ()=>force({})
        ;
        document.addEventListener($5cb92bef7577960e$var$CONTEXT_UPDATE, handleUpdate);
        return ()=>document.removeEventListener($5cb92bef7577960e$var$CONTEXT_UPDATE, handleUpdate)
        ;
    }, []);
    return /*#__PURE__*/ React.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, layerProps, {
        ref: composedRefs,
        style: {
            pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? 'auto' : 'none' : undefined,
            ...props.style
        },
        onFocusCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocusCapture, focusOutside.onFocusCapture),
        onBlurCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onBlurCapture, focusOutside.onBlurCapture),
        onPointerDownCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownCapture, pointerDownOutside.onPointerDownCapture)
    }));
});
/* -----------------------------------------------------------------------------------------------*/ /**
 * Listens for `pointerdown` outside a react subtree. We use `pointerdown` rather than `pointerup`
 * to mimic layer dismissing behaviour present in OS.
 * Returns props to pass to the node we want to check for outside events.
 */ function $5cb92bef7577960e$var$usePointerDownOutside(onPointerDownOutside, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
    const handlePointerDownOutside = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onPointerDownOutside);
    const isPointerInsideReactTreeRef = React.useRef(false);
    const handleClickRef = React.useRef(()=>{});
    React.useEffect(()=>{
        const handlePointerDown = (event)=>{
            if (event.target && !isPointerInsideReactTreeRef.current) {
                const eventDetail = {
                    originalEvent: event
                };
                function handleAndDispatchPointerDownOutsideEvent() {
                    $5cb92bef7577960e$var$handleAndDispatchCustomEvent($5cb92bef7577960e$var$POINTER_DOWN_OUTSIDE, handlePointerDownOutside, eventDetail, {
                        discrete: true
                    });
                }
                /**
         * On touch devices, we need to wait for a click event because browsers implement
         * a ~350ms delay between the time the user stops touching the display and when the
         * browser executres events. We need to ensure we don't reactivate pointer-events within
         * this timeframe otherwise the browser may execute events that should have been prevented.
         *
         * Additionally, this also lets us deal automatically with cancellations when a click event
         * isn't raised because the page was considered scrolled/drag-scrolled, long-pressed, etc.
         *
         * This is why we also continuously remove the previous listener, because we cannot be
         * certain that it was raised, and therefore cleaned-up.
         */ if (event.pointerType === 'touch') {
                    ownerDocument.removeEventListener('click', handleClickRef.current);
                    handleClickRef.current = handleAndDispatchPointerDownOutsideEvent;
                    ownerDocument.addEventListener('click', handleClickRef.current, {
                        once: true
                    });
                } else handleAndDispatchPointerDownOutsideEvent();
            }
            isPointerInsideReactTreeRef.current = false;
        };
        /**
     * if this hook executes in a component that mounts via a `pointerdown` event, the event
     * would bubble up to the document and trigger a `pointerDownOutside` event. We avoid
     * this by delaying the event listener registration on the document.
     * This is not React specific, but rather how the DOM works, ie:
     * ```
     * button.addEventListener('pointerdown', () => {
     *   console.log('I will log');
     *   document.addEventListener('pointerdown', () => {
     *     console.log('I will also log');
     *   })
     * });
     */ const timerId = window.setTimeout(()=>{
            ownerDocument.addEventListener('pointerdown', handlePointerDown);
        }, 0);
        return ()=>{
            window.clearTimeout(timerId);
            ownerDocument.removeEventListener('pointerdown', handlePointerDown);
            ownerDocument.removeEventListener('click', handleClickRef.current);
        };
    }, [
        ownerDocument,
        handlePointerDownOutside
    ]);
    return {
        // ensures we check React component tree (not just DOM tree)
        onPointerDownCapture: ()=>isPointerInsideReactTreeRef.current = true
    };
}
/**
 * Listens for when focus happens outside a react subtree.
 * Returns props to pass to the root (node) of the subtree we want to check.
 */ function $5cb92bef7577960e$var$useFocusOutside(onFocusOutside, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
    const handleFocusOutside = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onFocusOutside);
    const isFocusInsideReactTreeRef = React.useRef(false);
    React.useEffect(()=>{
        const handleFocus = (event)=>{
            if (event.target && !isFocusInsideReactTreeRef.current) {
                const eventDetail = {
                    originalEvent: event
                };
                $5cb92bef7577960e$var$handleAndDispatchCustomEvent($5cb92bef7577960e$var$FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
                    discrete: false
                });
            }
        };
        ownerDocument.addEventListener('focusin', handleFocus);
        return ()=>ownerDocument.removeEventListener('focusin', handleFocus)
        ;
    }, [
        ownerDocument,
        handleFocusOutside
    ]);
    return {
        onFocusCapture: ()=>isFocusInsideReactTreeRef.current = true
        ,
        onBlurCapture: ()=>isFocusInsideReactTreeRef.current = false
    };
}
function $5cb92bef7577960e$var$dispatchUpdate() {
    const event = new CustomEvent($5cb92bef7577960e$var$CONTEXT_UPDATE);
    document.dispatchEvent(event);
}
function $5cb92bef7577960e$var$handleAndDispatchCustomEvent(name, handler, detail, { discrete: discrete  }) {
    const target = detail.originalEvent.target;
    const event = new CustomEvent(name, {
        bubbles: false,
        cancelable: true,
        detail: detail
    });
    if (handler) target.addEventListener(name, handler, {
        once: true
    });
    if (discrete) $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, event);
    else target.dispatchEvent(event);
}

/** Number of components which have requested interest to have focus guards */ let $3db38b7d1fb3fe6a$var$count = 0;
/**
 * Injects a pair of focus guards at the edges of the whole DOM tree
 * to ensure `focusin` & `focusout` events can be caught consistently.
 */ function $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c() {
    React.useEffect(()=>{
        var _edgeGuards$, _edgeGuards$2;
        const edgeGuards = document.querySelectorAll('[data-radix-focus-guard]');
        document.body.insertAdjacentElement('afterbegin', (_edgeGuards$ = edgeGuards[0]) !== null && _edgeGuards$ !== void 0 ? _edgeGuards$ : $3db38b7d1fb3fe6a$var$createFocusGuard());
        document.body.insertAdjacentElement('beforeend', (_edgeGuards$2 = edgeGuards[1]) !== null && _edgeGuards$2 !== void 0 ? _edgeGuards$2 : $3db38b7d1fb3fe6a$var$createFocusGuard());
        $3db38b7d1fb3fe6a$var$count++;
        return ()=>{
            if ($3db38b7d1fb3fe6a$var$count === 1) document.querySelectorAll('[data-radix-focus-guard]').forEach((node)=>node.remove()
            );
            $3db38b7d1fb3fe6a$var$count--;
        };
    }, []);
}
function $3db38b7d1fb3fe6a$var$createFocusGuard() {
    const element = document.createElement('span');
    element.setAttribute('data-radix-focus-guard', '');
    element.tabIndex = 0;
    element.style.cssText = 'outline: none; opacity: 0; position: fixed; pointer-events: none';
    return element;
}

const $d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT = 'focusScope.autoFocusOnMount';
const $d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT = 'focusScope.autoFocusOnUnmount';
const $d3863c46a17e8a28$var$EVENT_OPTIONS = {
    bubbles: false,
    cancelable: true
};
const $d3863c46a17e8a28$export$20e40289641fbbb6 = /*#__PURE__*/ React.forwardRef((props, forwardedRef)=>{
    const { loop: loop = false , trapped: trapped = false , onMountAutoFocus: onMountAutoFocusProp , onUnmountAutoFocus: onUnmountAutoFocusProp , ...scopeProps } = props;
    const [container1, setContainer] = React.useState(null);
    const onMountAutoFocus = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onMountAutoFocusProp);
    const onUnmountAutoFocus = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onUnmountAutoFocusProp);
    const lastFocusedElementRef = React.useRef(null);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, (node)=>setContainer(node)
    );
    const focusScope = React.useRef({
        paused: false,
        pause () {
            this.paused = true;
        },
        resume () {
            this.paused = false;
        }
    }).current; // Takes care of trapping focus if focus is moved outside programmatically for example
    React.useEffect(()=>{
        if (trapped) {
            function handleFocusIn(event) {
                if (focusScope.paused || !container1) return;
                const target = event.target;
                if (container1.contains(target)) lastFocusedElementRef.current = target;
                else $d3863c46a17e8a28$var$focus(lastFocusedElementRef.current, {
                    select: true
                });
            }
            function handleFocusOut(event) {
                if (focusScope.paused || !container1) return;
                const relatedTarget = event.relatedTarget; // A `focusout` event with a `null` `relatedTarget` will happen in at least two cases:
                //
                // 1. When the user switches app/tabs/windows/the browser itself loses focus.
                // 2. In Google Chrome, when the focused element is removed from the DOM.
                //
                // We let the browser do its thing here because:
                //
                // 1. The browser already keeps a memory of what's focused for when the page gets refocused.
                // 2. In Google Chrome, if we try to focus the deleted focused element (as per below), it
                //    throws the CPU to 100%, so we avoid doing anything for this reason here too.
                if (relatedTarget === null) return; // If the focus has moved to an actual legitimate element (`relatedTarget !== null`)
                // that is outside the container, we move focus to the last valid focused element inside.
                if (!container1.contains(relatedTarget)) $d3863c46a17e8a28$var$focus(lastFocusedElementRef.current, {
                    select: true
                });
            } // When the focused element gets removed from the DOM, browsers move focus
            // back to the document.body. In this case, we move focus to the container
            // to keep focus trapped correctly.
            function handleMutations(mutations) {
                const focusedElement = document.activeElement;
                for (const mutation of mutations){
                    if (mutation.removedNodes.length > 0) {
                        if (!(container1 !== null && container1 !== void 0 && container1.contains(focusedElement))) $d3863c46a17e8a28$var$focus(container1);
                    }
                }
            }
            document.addEventListener('focusin', handleFocusIn);
            document.addEventListener('focusout', handleFocusOut);
            const mutationObserver = new MutationObserver(handleMutations);
            if (container1) mutationObserver.observe(container1, {
                childList: true,
                subtree: true
            });
            return ()=>{
                document.removeEventListener('focusin', handleFocusIn);
                document.removeEventListener('focusout', handleFocusOut);
                mutationObserver.disconnect();
            };
        }
    }, [
        trapped,
        container1,
        focusScope.paused
    ]);
    React.useEffect(()=>{
        if (container1) {
            $d3863c46a17e8a28$var$focusScopesStack.add(focusScope);
            const previouslyFocusedElement = document.activeElement;
            const hasFocusedCandidate = container1.contains(previouslyFocusedElement);
            if (!hasFocusedCandidate) {
                const mountEvent = new CustomEvent($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, $d3863c46a17e8a28$var$EVENT_OPTIONS);
                container1.addEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
                container1.dispatchEvent(mountEvent);
                if (!mountEvent.defaultPrevented) {
                    $d3863c46a17e8a28$var$focusFirst($d3863c46a17e8a28$var$removeLinks($d3863c46a17e8a28$var$getTabbableCandidates(container1)), {
                        select: true
                    });
                    if (document.activeElement === previouslyFocusedElement) $d3863c46a17e8a28$var$focus(container1);
                }
            }
            return ()=>{
                container1.removeEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, onMountAutoFocus); // We hit a react bug (fixed in v17) with focusing in unmount.
                // We need to delay the focus a little to get around it for now.
                // See: https://github.com/facebook/react/issues/17894
                setTimeout(()=>{
                    const unmountEvent = new CustomEvent($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, $d3863c46a17e8a28$var$EVENT_OPTIONS);
                    container1.addEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
                    container1.dispatchEvent(unmountEvent);
                    if (!unmountEvent.defaultPrevented) $d3863c46a17e8a28$var$focus(previouslyFocusedElement !== null && previouslyFocusedElement !== void 0 ? previouslyFocusedElement : document.body, {
                        select: true
                    });
                     // we need to remove the listener after we `dispatchEvent`
                    container1.removeEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
                    $d3863c46a17e8a28$var$focusScopesStack.remove(focusScope);
                }, 0);
            };
        }
    }, [
        container1,
        onMountAutoFocus,
        onUnmountAutoFocus,
        focusScope
    ]); // Takes care of looping focus (when tabbing whilst at the edges)
    const handleKeyDown = React.useCallback((event)=>{
        if (!loop && !trapped) return;
        if (focusScope.paused) return;
        const isTabKey = event.key === 'Tab' && !event.altKey && !event.ctrlKey && !event.metaKey;
        const focusedElement = document.activeElement;
        if (isTabKey && focusedElement) {
            const container = event.currentTarget;
            const [first, last] = $d3863c46a17e8a28$var$getTabbableEdges(container);
            const hasTabbableElementsInside = first && last; // we can only wrap focus if we have tabbable edges
            if (!hasTabbableElementsInside) {
                if (focusedElement === container) event.preventDefault();
            } else {
                if (!event.shiftKey && focusedElement === last) {
                    event.preventDefault();
                    if (loop) $d3863c46a17e8a28$var$focus(first, {
                        select: true
                    });
                } else if (event.shiftKey && focusedElement === first) {
                    event.preventDefault();
                    if (loop) $d3863c46a17e8a28$var$focus(last, {
                        select: true
                    });
                }
            }
        }
    }, [
        loop,
        trapped,
        focusScope.paused
    ]);
    return /*#__PURE__*/ React.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
        tabIndex: -1
    }, scopeProps, {
        ref: composedRefs,
        onKeyDown: handleKeyDown
    }));
});
/* -------------------------------------------------------------------------------------------------
 * Utils
 * -----------------------------------------------------------------------------------------------*/ /**
 * Attempts focusing the first element in a list of candidates.
 * Stops when focus has actually moved.
 */ function $d3863c46a17e8a28$var$focusFirst(candidates, { select: select = false  } = {}) {
    const previouslyFocusedElement = document.activeElement;
    for (const candidate of candidates){
        $d3863c46a17e8a28$var$focus(candidate, {
            select: select
        });
        if (document.activeElement !== previouslyFocusedElement) return;
    }
}
/**
 * Returns the first and last tabbable elements inside a container.
 */ function $d3863c46a17e8a28$var$getTabbableEdges(container) {
    const candidates = $d3863c46a17e8a28$var$getTabbableCandidates(container);
    const first = $d3863c46a17e8a28$var$findVisible(candidates, container);
    const last = $d3863c46a17e8a28$var$findVisible(candidates.reverse(), container);
    return [
        first,
        last
    ];
}
/**
 * Returns a list of potential tabbable candidates.
 *
 * NOTE: This is only a close approximation. For example it doesn't take into account cases like when
 * elements are not visible. This cannot be worked out easily by just reading a property, but rather
 * necessitate runtime knowledge (computed styles, etc). We deal with these cases separately.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker
 * Credit: https://github.com/discord/focus-layers/blob/master/src/util/wrapFocus.tsx#L1
 */ function $d3863c46a17e8a28$var$getTabbableCandidates(container) {
    const nodes = [];
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
        acceptNode: (node)=>{
            const isHiddenInput = node.tagName === 'INPUT' && node.type === 'hidden';
            if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP; // `.tabIndex` is not the same as the `tabindex` attribute. It works on the
            // runtime's understanding of tabbability, so this automatically accounts
            // for any kind of element that could be tabbed to.
            return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        }
    });
    while(walker.nextNode())nodes.push(walker.currentNode); // we do not take into account the order of nodes with positive `tabIndex` as it
    // hinders accessibility to have tab order different from visual order.
    return nodes;
}
/**
 * Returns the first visible element in a list.
 * NOTE: Only checks visibility up to the `container`.
 */ function $d3863c46a17e8a28$var$findVisible(elements, container) {
    for (const element of elements){
        // we stop checking if it's hidden at the `container` level (excluding)
        if (!$d3863c46a17e8a28$var$isHidden(element, {
            upTo: container
        })) return element;
    }
}
function $d3863c46a17e8a28$var$isHidden(node, { upTo: upTo  }) {
    if (getComputedStyle(node).visibility === 'hidden') return true;
    while(node){
        // we stop at `upTo` (excluding it)
        if (upTo !== undefined && node === upTo) return false;
        if (getComputedStyle(node).display === 'none') return true;
        node = node.parentElement;
    }
    return false;
}
function $d3863c46a17e8a28$var$isSelectableInput(element) {
    return element instanceof HTMLInputElement && 'select' in element;
}
function $d3863c46a17e8a28$var$focus(element, { select: select = false  } = {}) {
    // only focus if that element is focusable
    if (element && element.focus) {
        const previouslyFocusedElement = document.activeElement; // NOTE: we prevent scrolling on focus, to minimize jarring transitions for users
        element.focus({
            preventScroll: true
        }); // only select if its not the same element, it supports selection and we need to select
        if (element !== previouslyFocusedElement && $d3863c46a17e8a28$var$isSelectableInput(element) && select) element.select();
    }
}
/* -------------------------------------------------------------------------------------------------
 * FocusScope stack
 * -----------------------------------------------------------------------------------------------*/ const $d3863c46a17e8a28$var$focusScopesStack = $d3863c46a17e8a28$var$createFocusScopesStack();
function $d3863c46a17e8a28$var$createFocusScopesStack() {
    /** A stack of focus scopes, with the active one at the top */ let stack = [];
    return {
        add (focusScope) {
            // pause the currently active focus scope (at the top of the stack)
            const activeFocusScope = stack[0];
            if (focusScope !== activeFocusScope) activeFocusScope === null || activeFocusScope === void 0 || activeFocusScope.pause();
             // remove in case it already exists (because we'll re-add it at the top of the stack)
            stack = $d3863c46a17e8a28$var$arrayRemove(stack, focusScope);
            stack.unshift(focusScope);
        },
        remove (focusScope) {
            var _stack$;
            stack = $d3863c46a17e8a28$var$arrayRemove(stack, focusScope);
            (_stack$ = stack[0]) === null || _stack$ === void 0 || _stack$.resume();
        }
    };
}
function $d3863c46a17e8a28$var$arrayRemove(array, item) {
    const updatedArray = [
        ...array
    ];
    const index = updatedArray.indexOf(item);
    if (index !== -1) updatedArray.splice(index, 1);
    return updatedArray;
}
function $d3863c46a17e8a28$var$removeLinks(items) {
    return items.filter((item)=>item.tagName !== 'A'
    );
}

/**
 * On the server, React emits a warning when calling `useLayoutEffect`.
 * This is because neither `useLayoutEffect` nor `useEffect` run on the server.
 * We use this safe version which suppresses the warning by replacing it with a noop on the server.
 *
 * See: https://reactjs.org/docs/hooks-reference.html#uselayouteffect
 */ const $9f79659886946c16$export$e5c5a5f917a5871c = Boolean(globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) ? React.useLayoutEffect : ()=>{};

const $1746a345f3d73bb7$var$useReactId = React__namespace['useId'.toString()] || (()=>undefined
);
let $1746a345f3d73bb7$var$count = 0;
function $1746a345f3d73bb7$export$f680877a34711e37(deterministicId) {
    const [id, setId] = React__namespace.useState($1746a345f3d73bb7$var$useReactId()); // React versions older than 18 will have client-side ids only.
    $9f79659886946c16$export$e5c5a5f917a5871c(()=>{
        if (!deterministicId) setId((reactId)=>reactId !== null && reactId !== void 0 ? reactId : String($1746a345f3d73bb7$var$count++)
        );
    }, [
        deterministicId
    ]);
    return deterministicId || (id ? `radix-${id}` : '');
}

function getAlignment(placement) {
  return placement.split('-')[1];
}

function getLengthFromAxis(axis) {
  return axis === 'y' ? 'height' : 'width';
}

function getSide(placement) {
  return placement.split('-')[0];
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].includes(getSide(placement)) ? 'x' : 'y';
}

function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  const commonAlign = reference[length] / 2 - floating[length] / 2;
  const side = getSide(placement);
  const isVertical = mainAxis === 'x';
  let coords;
  switch (side) {
    case 'top':
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case 'bottom':
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case 'right':
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case 'left':
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case 'start':
      coords[mainAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case 'end':
      coords[mainAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a reference element when it is given a certain positioning strategy.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */
const computePosition$1 = async (reference, floating, config) => {
  const {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
  let rects = await platform.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === 'object') {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
      continue;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};

function evaluate(value, param) {
  return typeof value === 'function' ? value(param) : value;
}

function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}

function getSideObjectFromPadding(padding) {
  return typeof padding !== 'number' ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}

function rectToClientRect(rect) {
  return {
    ...rect,
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  };
}

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = 'clippingAncestors',
    rootBoundary = 'viewport',
    elementContext = 'floating',
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getSideObjectFromPadding(padding);
  const altContext = elementContext === 'floating' ? 'reference' : 'floating';
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform.getClippingRect({
    element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || (await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating))),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === 'floating' ? {
    ...rects.floating,
    x,
    y
  } : rects.reference;
  const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
  const offsetScale = (await (platform.isElement == null ? void 0 : platform.isElement(offsetParent))) ? (await (platform.getScale == null ? void 0 : platform.getScale(offsetParent))) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}

const min$1 = Math.min;
const max$1 = Math.max;

function within(min$1$1, value, max$1$1) {
  return max$1(min$1$1, min$1(value, max$1$1));
}

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow$1 = options => ({
  name: 'arrow',
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform,
      elements
    } = state;
    // Since `element` is required, we don't Partial<> the type.
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getSideObjectFromPadding(padding);
    const coords = {
      x,
      y
    };
    const axis = getMainAxisFromPlacement(placement);
    const length = getLengthFromAxis(axis);
    const arrowDimensions = await platform.getDimensions(element);
    const isYAxis = axis === 'y';
    const minProp = isYAxis ? 'top' : 'left';
    const maxProp = isYAxis ? 'bottom' : 'right';
    const clientProp = isYAxis ? 'clientHeight' : 'clientWidth';
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;

    // DOM platform can return `window` as the `offsetParent`.
    if (!clientSize || !(await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent)))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;

    // If the padding is large enough that it causes the arrow to no longer be
    // centered, modify the padding so that it is centered.
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min$1(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min$1(paddingObject[maxProp], largestPossiblePadding);

    // Make sure the arrow doesn't overflow the floating element if the center
    // point is outside the floating element's bounds.
    const min$1$1 = minPadding;
    const max = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset = within(min$1$1, center, max);

    // If the reference is small enough that the arrow's padding causes it to
    // to point to nothing for an aligned placement, adjust the offset of the
    // floating element itself. This stops `shift()` from taking action, but can
    // be worked around by calling it again after the `arrow()` if desired.
    const shouldAddOffset = getAlignment(placement) != null && center != offset && rects.reference[length] / 2 - (center < min$1$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1$1 ? min$1$1 - center : max - center : 0;
    return {
      [axis]: coords[axis] - alignmentOffset,
      data: {
        [axis]: offset,
        centerOffset: center - offset
      }
    };
  }
});

const sides = ['top', 'right', 'bottom', 'left'];

const oppositeSideMap = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, side => oppositeSideMap[side]);
}

function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  let mainAlignmentSide = mainAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return {
    main: mainAlignmentSide,
    cross: getOppositePlacement(mainAlignmentSide)
  };
}

const oppositeAlignmentMap = {
  start: 'end',
  end: 'start'
};
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, alignment => oppositeAlignmentMap[alignment]);
}

function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}

function getSideList(side, isStart, rtl) {
  const lr = ['left', 'right'];
  const rl = ['right', 'left'];
  const tb = ['top', 'bottom'];
  const bt = ['bottom', 'top'];
  switch (side) {
    case 'top':
    case 'bottom':
      if (rtl) return isStart ? rl : lr;
      return isStart ? lr : rl;
    case 'left':
    case 'right':
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === 'start', rtl);
  if (alignment) {
    list = list.map(side => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'flip',
    options,
    async fn(state) {
      var _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = 'bestFit',
        fallbackAxisSideDirection = 'none',
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      const side = getSide(placement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== 'none') {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const {
          main,
          cross
        } = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[main], overflow[cross]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];

      // One or more sides is overflowing.
      if (!overflows.every(side => side <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          // Try next placement and re-run the lifecycle.
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }

        // First, find the candidates that fit on the mainAxis side of overflow,
        // then find the placement that fits the best on the main crossAxis side.
        let resetPlacement = (_overflowsData$filter = overflowsData.filter(d => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;

        // Otherwise fallback.
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case 'bestFit':
              {
                var _overflowsData$map$so;
                const placement = (_overflowsData$map$so = overflowsData.map(d => [d.placement, d.overflows.filter(overflow => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
                if (placement) {
                  resetPlacement = placement;
                }
                break;
              }
            case 'initialPlacement':
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};

function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some(side => overflow[side] >= 0);
}
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */
const hide = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'hide',
    options,
    async fn(state) {
      const {
        rects
      } = state;
      const {
        strategy = 'referenceHidden',
        ...detectOverflowOptions
      } = evaluate(options, state);
      switch (strategy) {
        case 'referenceHidden':
          {
            const overflow = await detectOverflow(state, {
              ...detectOverflowOptions,
              elementContext: 'reference'
            });
            const offsets = getSideOffsets(overflow, rects.reference);
            return {
              data: {
                referenceHiddenOffsets: offsets,
                referenceHidden: isAnySideFullyClipped(offsets)
              }
            };
          }
        case 'escaped':
          {
            const overflow = await detectOverflow(state, {
              ...detectOverflowOptions,
              altBoundary: true
            });
            const offsets = getSideOffsets(overflow, rects.floating);
            return {
              data: {
                escapedOffsets: offsets,
                escaped: isAnySideFullyClipped(offsets)
              }
            };
          }
        default:
          {
            return {};
          }
      }
    }
  };
};

async function convertValueToCoords(state, options) {
  const {
    placement,
    platform,
    elements
  } = state;
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getMainAxisFromPlacement(placement) === 'x';
  const mainAxisMulti = ['left', 'top'].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);

  // eslint-disable-next-line prefer-const
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === 'number' ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };
  if (alignment && typeof alignmentAxis === 'number') {
    crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
const offset = function (options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: 'offset',
    options,
    async fn(state) {
      const {
        x,
        y
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: diffCoords
      };
    }
  };
};

function getCrossAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const shift = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'shift',
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: _ref => {
            let {
              x,
              y
            } = _ref;
            return {
              x,
              y
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const mainAxis = getMainAxisFromPlacement(getSide(placement));
      const crossAxis = getCrossAxis(mainAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === 'y' ? 'top' : 'left';
        const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
        const min = mainAxisCoord + overflow[minSide];
        const max = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = within(min, mainAxisCoord, max);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === 'y' ? 'top' : 'left';
        const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
        const min = crossAxisCoord + overflow[minSide];
        const max = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = within(min, crossAxisCoord, max);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y
        }
      };
    }
  };
};
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */
const limitShift = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options,
    fn(state) {
      const {
        x,
        y,
        placement,
        rects,
        middlewareData
      } = state;
      const {
        offset = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const mainAxis = getMainAxisFromPlacement(placement);
      const crossAxis = getCrossAxis(mainAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = evaluate(offset, state);
      const computedOffset = typeof rawOffset === 'number' ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...rawOffset
      };
      if (checkMainAxis) {
        const len = mainAxis === 'y' ? 'height' : 'width';
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === 'y' ? 'width' : 'height';
        const isOriginSide = ['top', 'left'].includes(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};

/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */
const size = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'size',
    options,
    async fn(state) {
      const {
        placement,
        rects,
        platform,
        elements
      } = state;
      const {
        apply = () => {},
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const axis = getMainAxisFromPlacement(placement);
      const isXAxis = axis === 'x';
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === 'top' || side === 'bottom') {
        heightSide = side;
        widthSide = alignment === ((await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating))) ? 'start' : 'end') ? 'left' : 'right';
      } else {
        widthSide = side;
        heightSide = alignment === 'end' ? 'top' : 'bottom';
      }
      const overflowAvailableHeight = height - overflow[heightSide];
      const overflowAvailableWidth = width - overflow[widthSide];
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if (isXAxis) {
        const maximumClippingWidth = width - overflow.left - overflow.right;
        availableWidth = alignment || noShift ? min$1(overflowAvailableWidth, maximumClippingWidth) : maximumClippingWidth;
      } else {
        const maximumClippingHeight = height - overflow.top - overflow.bottom;
        availableHeight = alignment || noShift ? min$1(overflowAvailableHeight, maximumClippingHeight) : maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max$1(overflow.left, 0);
        const xMax = max$1(overflow.right, 0);
        const yMin = max$1(overflow.top, 0);
        const yMax = max$1(overflow.bottom, 0);
        if (isXAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max$1(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max$1(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};

function getWindow(node) {
  var _node$ownerDocument;
  return ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}

function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}

function isNode(value) {
  return value instanceof getWindow(value).Node;
}
function getNodeName(node) {
  return isNode(node) ? (node.nodeName || '').toLowerCase() : '';
}

function isHTMLElement(value) {
  return value instanceof getWindow(value).HTMLElement;
}
function isElement(value) {
  return value instanceof getWindow(value).Element;
}
function isShadowRoot(node) {
  // Browsers without `ShadowRoot` support.
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }
  const OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !['inline', 'contents'].includes(display);
}
function isTableElement(element) {
  return ['table', 'td', 'th'].includes(getNodeName(element));
}
function isContainingBlock(element) {
  const safari = isSafari();
  const css = getComputedStyle$1(element);

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  return css.transform !== 'none' || css.perspective !== 'none' || !safari && (css.backdropFilter ? css.backdropFilter !== 'none' : false) || !safari && (css.filter ? css.filter !== 'none' : false) || ['transform', 'perspective', 'filter'].some(value => (css.willChange || '').includes(value)) || ['paint', 'layout', 'strict', 'content'].some(value => (css.contain || '').includes(value));
}
function isSafari() {
  if (typeof CSS === 'undefined' || !CSS.supports) return false;
  return CSS.supports('-webkit-backdrop-filter', 'none');
}
function isLastTraversableNode(node) {
  return ['html', 'body', '#document'].includes(getNodeName(node));
}

const min = Math.min;
const max = Math.max;
const round = Math.round;

function getCssDimensions(element) {
  const css = getComputedStyle$1(element);
  // In testing environments, the `width` and `height` properties are empty
  // strings for SVG elements, returning NaN. Fallback to `0` in this case.
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    fallback: shouldFallback
  };
}

function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}

const FALLBACK_SCALE = {
  x: 1,
  y: 1
};
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return FALLBACK_SCALE;
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    fallback
  } = getCssDimensions(domElement);
  let x = (fallback ? round(rect.width) : rect.width) / width;
  let y = (fallback ? round(rect.height) : rect.height) / height;

  // 0, NaN, or Infinity should always fallback to 1.

  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}

const noOffsets = {
  x: 0,
  y: 0
};
function getVisualOffsets(element, isFixed, floatingOffsetParent) {
  var _win$visualViewport, _win$visualViewport2;
  if (isFixed === void 0) {
    isFixed = true;
  }
  if (!isSafari()) {
    return noOffsets;
  }
  const win = element ? getWindow(element) : window;
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== win) {
    return noOffsets;
  }
  return {
    x: ((_win$visualViewport = win.visualViewport) == null ? void 0 : _win$visualViewport.offsetLeft) || 0,
    y: ((_win$visualViewport2 = win.visualViewport) == null ? void 0 : _win$visualViewport2.offsetTop) || 0
  };
}

function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = FALLBACK_SCALE;
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = getVisualOffsets(domElement, isFixedStrategy, offsetParent);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentIFrame = win.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== win) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle(currentIFrame);
      iframeRect.x += (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      iframeRect.y += (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += iframeRect.x;
      y += iframeRect.y;
      currentIFrame = getWindow(currentIFrame).frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}

function getDocumentElement(node) {
  return ((isNode(node) ? node.ownerDocument : node.document) || window.document).documentElement;
}

function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}

function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  if (offsetParent === documentElement) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = {
    x: 1,
    y: 1
  };
  const offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== 'fixed') {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}

// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable.
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === 'rtl') {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

function getParentNode(node) {
  if (getNodeName(node) === 'html') {
    return node;
  }
  const result =
  // Step into the shadow DOM of the parent of a slotted node.
  node.assignedSlot ||
  // DOM Element detected.
  node.parentNode ||
  // ShadowRoot detected.
  isShadowRoot(node) && node.host ||
  // Fallback.
  getDocumentElement(node);
  return isShadowRoot(result) ? result.host : result;
}

function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    // `getParentNode` will never return a `Document` due to the fallback
    // check, so it's either the <html> or <body> element.
    return parentNode.ownerDocument.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}

function getOverflowAncestors(node, list) {
  var _node$ownerDocument;
  if (list === void 0) {
    list = [];
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor));
}

function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isSafari();
    if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}

// Returns the inner client rect, subtracting scrollbars if present.
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : {
    x: 1,
    y: 1
  };
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === 'viewport') {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === 'document') {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle$1(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
}

// A "clipping ancestor" is an `overflow` element with the characteristic of
// clipping (or hiding) child elements. This returns all clipping ancestors
// of the given element up the tree.
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element).filter(el => isElement(el) && getNodeName(el) !== 'body');
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle$1(element).position === 'fixed';
  let currentNode = elementIsFixed ? getParentNode(element) : element;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle$1(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && ['absolute', 'fixed'].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      // Drop non-containing blocks.
      result = result.filter(ancestor => ancestor !== currentNode);
    } else {
      // Record last containing block for next iteration.
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}

// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors.
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === 'clippingAncestors' ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}

function getDimensions(element) {
  return getCssDimensions(element);
}

function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle$1(element).position === 'fixed') {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = getParentNode(currentNode);
    }
  }
  return null;
}

// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element, polyfill) {
  const window = getWindow(element);
  if (!isHTMLElement(element)) {
    return window;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static' && !isContainingBlock(offsetParent))) {
    return window;
  }
  return offsetParent || getContainingBlock(element) || window;
}

function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === 'fixed';
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

const platform = {
  getClippingRect,
  convertOffsetParentRelativeRectToViewportRelativeRect,
  isElement,
  getDimensions,
  getOffsetParent,
  getDocumentElement,
  getScale,
  async getElementRects(_ref) {
    let {
      reference,
      floating,
      strategy
    } = _ref;
    const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
    const getDimensionsFn = this.getDimensions;
    return {
      reference: getRectRelativeToOffsetParent(reference, await getOffsetParentFn(floating), strategy),
      floating: {
        x: 0,
        y: 0,
        ...(await getDimensionsFn(floating))
      }
    };
  },
  getClientRects: element => Array.from(element.getClientRects()),
  isRTL: element => getComputedStyle$1(element).direction === 'rtl'
};

/**
 * Automatically updates the position of the floating element when necessary.
 * Should only be called when the floating element is mounted on the DOM or
 * visible on the screen.
 * @returns cleanup function that should be invoked when the floating element is
 * removed from the DOM or hidden from the screen.
 * @see https://floating-ui.com/docs/autoUpdate
 */
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = true,
    animationFrame = false
  } = options;
  const ancestors = ancestorScroll || ancestorResize ? [...(isElement(reference) ? getOverflowAncestors(reference) : reference.contextElement ? getOverflowAncestors(reference.contextElement) : []), ...getOverflowAncestors(floating)] : [];
  ancestors.forEach(ancestor => {
    // ignores Window, checks for [object VisualViewport]
    const isVisualViewport = !isElement(ancestor) && ancestor.toString().includes('V');
    if (ancestorScroll && (animationFrame ? isVisualViewport : true)) {
      ancestor.addEventListener('scroll', update, {
        passive: true
      });
    }
    ancestorResize && ancestor.addEventListener('resize', update);
  });
  let observer = null;
  if (elementResize) {
    observer = new ResizeObserver(() => {
      update();
    });
    isElement(reference) && !animationFrame && observer.observe(reference);
    if (!isElement(reference) && reference.contextElement && !animationFrame) {
      observer.observe(reference.contextElement);
    }
    observer.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _observer;
    ancestors.forEach(ancestor => {
      ancestorScroll && ancestor.removeEventListener('scroll', update);
      ancestorResize && ancestor.removeEventListener('resize', update);
    });
    (_observer = observer) == null ? void 0 : _observer.disconnect();
    observer = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a reference element when it is given a certain CSS positioning
 * strategy.
 */
const computePosition = (reference, floating, options) => {
  // This caches the expensive `getClippingElementAncestors` function so that
  // multiple lifecycle resets re-use the same result. It only lives for a
  // single call. If other functions become expensive, we can add them as well.
  const cache = new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition$1(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * This wraps the core `arrow` middleware to allow React refs as the element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow = options => {
  function isRef(value) {
    return {}.hasOwnProperty.call(value, 'current');
  }
  return {
    name: 'arrow',
    options,
    fn(state) {
      const {
        element,
        padding
      } = typeof options === 'function' ? options(state) : options;
      if (element && isRef(element)) {
        if (element.current != null) {
          return arrow$1({
            element: element.current,
            padding
          }).fn(state);
        }
        return {};
      } else if (element) {
        return arrow$1({
          element,
          padding
        }).fn(state);
      }
      return {};
    }
  };
};

var index = typeof document !== 'undefined' ? React.useLayoutEffect : React.useEffect;

// Fork of `fast-deep-equal` that only does the comparisons we need and compares
// functions
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a === 'function' && a.toString() === b.toString()) {
    return true;
  }
  let length, i, keys;
  if (a && b && typeof a == 'object') {
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;) {
        if (!deepEqual(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (i = length; i-- !== 0;) {
      if (!{}.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }
    for (i = length; i-- !== 0;) {
      const key = keys[i];
      if (key === '_owner' && a.$$typeof) {
        continue;
      }
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
}

function getDPR(element) {
  if (typeof window === 'undefined') {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}

function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}

function useLatestRef(value) {
  const ref = React__namespace.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}

/**
 * Provides data to position a floating element.
 * @see https://floating-ui.com/docs/react
 */
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = React__namespace.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = React__namespace.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = React__namespace.useState(null);
  const [_floating, _setFloating] = React__namespace.useState(null);
  const setReference = React__namespace.useCallback(node => {
    if (node != referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, [_setReference]);
  const setFloating = React__namespace.useCallback(node => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, [_setFloating]);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = React__namespace.useRef(null);
  const floatingRef = React__namespace.useRef(null);
  const dataRef = React__namespace.useRef(data);
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform);
  const update = React__namespace.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    computePosition(referenceRef.current, floatingRef.current, config).then(data => {
      const fullData = {
        ...data,
        isPositioned: true
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        ReactDOM__namespace.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData(data => ({
        ...data,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = React__namespace.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (referenceEl) referenceRef.current = referenceEl;
    if (floatingEl) floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update);
      } else {
        update();
      }
    }
  }, [referenceEl, floatingEl, update, whileElementsMountedRef]);
  const refs = React__namespace.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = React__namespace.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = React__namespace.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x = roundByDPR(elements.floating, data.x);
    const y = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x + "px, " + y + "px)",
        ...(getDPR(elements.floating) >= 1.5 && {
          willChange: 'transform'
        })
      };
    }
    return {
      position: strategy,
      left: x,
      top: y
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return React__namespace.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    floatingStyles
  }), [data, update, refs, elements, floatingStyles]);
}

function $db6c3485150b8e66$export$1ab7ae714698c4b8(element) {
    const [size, setSize] = React.useState(undefined);
    $9f79659886946c16$export$e5c5a5f917a5871c(()=>{
        if (element) {
            // provide size as early as possible
            setSize({
                width: element.offsetWidth,
                height: element.offsetHeight
            });
            const resizeObserver = new ResizeObserver((entries)=>{
                if (!Array.isArray(entries)) return;
                 // Since we only observe the one element, we don't need to loop over the
                // array
                if (!entries.length) return;
                const entry = entries[0];
                let width;
                let height;
                if ('borderBoxSize' in entry) {
                    const borderSizeEntry = entry['borderBoxSize']; // iron out differences between browsers
                    const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
                    width = borderSize['inlineSize'];
                    height = borderSize['blockSize'];
                } else {
                    // for browsers that don't support `borderBoxSize`
                    // we calculate it ourselves to get the correct border box.
                    width = element.offsetWidth;
                    height = element.offsetHeight;
                }
                setSize({
                    width: width,
                    height: height
                });
            });
            resizeObserver.observe(element, {
                box: 'border-box'
            });
            return ()=>resizeObserver.unobserve(element)
            ;
        } else // We only want to reset to `undefined` when the element becomes `null`,
        // not if it changes to another element.
        setSize(undefined);
    }, [
        element
    ]);
    return size;
}

/* -------------------------------------------------------------------------------------------------
 * Popper
 * -----------------------------------------------------------------------------------------------*/ const $cf1ac5d9fe0e8206$var$POPPER_NAME = 'Popper';
const [$cf1ac5d9fe0e8206$var$createPopperContext, $cf1ac5d9fe0e8206$export$722aac194ae923] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($cf1ac5d9fe0e8206$var$POPPER_NAME);
const [$cf1ac5d9fe0e8206$var$PopperProvider, $cf1ac5d9fe0e8206$var$usePopperContext] = $cf1ac5d9fe0e8206$var$createPopperContext($cf1ac5d9fe0e8206$var$POPPER_NAME);
const $cf1ac5d9fe0e8206$export$badac9ada3a0bdf9 = (props)=>{
    const { __scopePopper: __scopePopper , children: children  } = props;
    const [anchor, setAnchor] = React.useState(null);
    return /*#__PURE__*/ React.createElement($cf1ac5d9fe0e8206$var$PopperProvider, {
        scope: __scopePopper,
        anchor: anchor,
        onAnchorChange: setAnchor
    }, children);
};
/* -------------------------------------------------------------------------------------------------
 * PopperContent
 * -----------------------------------------------------------------------------------------------*/ const $cf1ac5d9fe0e8206$var$CONTENT_NAME = 'PopperContent';
const [$cf1ac5d9fe0e8206$var$PopperContentProvider, $cf1ac5d9fe0e8206$var$useContentContext] = $cf1ac5d9fe0e8206$var$createPopperContext($cf1ac5d9fe0e8206$var$CONTENT_NAME);
const $cf1ac5d9fe0e8206$export$bc4ae5855d3c4fc = /*#__PURE__*/ React.forwardRef((props, forwardedRef)=>{
    var _arrowSize$width, _arrowSize$height, _middlewareData$arrow, _middlewareData$arrow2, _middlewareData$arrow3, _middlewareData$trans, _middlewareData$trans2, _middlewareData$hide;
    const { __scopePopper: __scopePopper , side: side = 'bottom' , sideOffset: sideOffset = 0 , align: align = 'center' , alignOffset: alignOffset = 0 , arrowPadding: arrowPadding = 0 , collisionBoundary: collisionBoundary = [] , collisionPadding: collisionPaddingProp = 0 , sticky: sticky = 'partial' , hideWhenDetached: hideWhenDetached = false , avoidCollisions: avoidCollisions = true , onPlaced: onPlaced , ...contentProps } = props;
    const context = $cf1ac5d9fe0e8206$var$usePopperContext($cf1ac5d9fe0e8206$var$CONTENT_NAME, __scopePopper);
    const [content, setContent] = React.useState(null);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, (node)=>setContent(node)
    );
    const [arrow$1, setArrow] = React.useState(null);
    const arrowSize = $db6c3485150b8e66$export$1ab7ae714698c4b8(arrow$1);
    const arrowWidth = (_arrowSize$width = arrowSize === null || arrowSize === void 0 ? void 0 : arrowSize.width) !== null && _arrowSize$width !== void 0 ? _arrowSize$width : 0;
    const arrowHeight = (_arrowSize$height = arrowSize === null || arrowSize === void 0 ? void 0 : arrowSize.height) !== null && _arrowSize$height !== void 0 ? _arrowSize$height : 0;
    const desiredPlacement = side + (align !== 'center' ? '-' + align : '');
    const collisionPadding = typeof collisionPaddingProp === 'number' ? collisionPaddingProp : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...collisionPaddingProp
    };
    const boundary = Array.isArray(collisionBoundary) ? collisionBoundary : [
        collisionBoundary
    ];
    const hasExplicitBoundaries = boundary.length > 0;
    const detectOverflowOptions = {
        padding: collisionPadding,
        boundary: boundary.filter($cf1ac5d9fe0e8206$var$isNotNull),
        // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
        altBoundary: hasExplicitBoundaries
    };
    const { refs: refs , floatingStyles: floatingStyles , placement: placement , isPositioned: isPositioned , middlewareData: middlewareData  } = useFloating({
        // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
        strategy: 'fixed',
        placement: desiredPlacement,
        whileElementsMounted: autoUpdate,
        elements: {
            reference: context.anchor
        },
        middleware: [
            offset({
                mainAxis: sideOffset + arrowHeight,
                alignmentAxis: alignOffset
            }),
            avoidCollisions && shift({
                mainAxis: true,
                crossAxis: false,
                limiter: sticky === 'partial' ? limitShift() : undefined,
                ...detectOverflowOptions
            }),
            avoidCollisions && flip({
                ...detectOverflowOptions
            }),
            size({
                ...detectOverflowOptions,
                apply: ({ elements: elements , rects: rects , availableWidth: availableWidth , availableHeight: availableHeight  })=>{
                    const { width: anchorWidth , height: anchorHeight  } = rects.reference;
                    const contentStyle = elements.floating.style;
                    contentStyle.setProperty('--radix-popper-available-width', `${availableWidth}px`);
                    contentStyle.setProperty('--radix-popper-available-height', `${availableHeight}px`);
                    contentStyle.setProperty('--radix-popper-anchor-width', `${anchorWidth}px`);
                    contentStyle.setProperty('--radix-popper-anchor-height', `${anchorHeight}px`);
                }
            }),
            arrow$1 && arrow({
                element: arrow$1,
                padding: arrowPadding
            }),
            $cf1ac5d9fe0e8206$var$transformOrigin({
                arrowWidth: arrowWidth,
                arrowHeight: arrowHeight
            }),
            hideWhenDetached && hide({
                strategy: 'referenceHidden'
            })
        ]
    });
    const [placedSide, placedAlign] = $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement);
    const handlePlaced = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onPlaced);
    $9f79659886946c16$export$e5c5a5f917a5871c(()=>{
        if (isPositioned) handlePlaced === null || handlePlaced === void 0 || handlePlaced();
    }, [
        isPositioned,
        handlePlaced
    ]);
    const arrowX = (_middlewareData$arrow = middlewareData.arrow) === null || _middlewareData$arrow === void 0 ? void 0 : _middlewareData$arrow.x;
    const arrowY = (_middlewareData$arrow2 = middlewareData.arrow) === null || _middlewareData$arrow2 === void 0 ? void 0 : _middlewareData$arrow2.y;
    const cannotCenterArrow = ((_middlewareData$arrow3 = middlewareData.arrow) === null || _middlewareData$arrow3 === void 0 ? void 0 : _middlewareData$arrow3.centerOffset) !== 0;
    const [contentZIndex, setContentZIndex] = React.useState();
    $9f79659886946c16$export$e5c5a5f917a5871c(()=>{
        if (content) setContentZIndex(window.getComputedStyle(content).zIndex);
    }, [
        content
    ]);
    return /*#__PURE__*/ React.createElement("div", {
        ref: refs.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...floatingStyles,
            transform: isPositioned ? floatingStyles.transform : 'translate(0, -200%)',
            // keep off the page when measuring
            minWidth: 'max-content',
            zIndex: contentZIndex,
            ['--radix-popper-transform-origin']: [
                (_middlewareData$trans = middlewareData.transformOrigin) === null || _middlewareData$trans === void 0 ? void 0 : _middlewareData$trans.x,
                (_middlewareData$trans2 = middlewareData.transformOrigin) === null || _middlewareData$trans2 === void 0 ? void 0 : _middlewareData$trans2.y
            ].join(' ')
        } // Floating UI interally calculates logical alignment based the `dir` attribute on
        ,
        dir: props.dir
    }, /*#__PURE__*/ React.createElement($cf1ac5d9fe0e8206$var$PopperContentProvider, {
        scope: __scopePopper,
        placedSide: placedSide,
        onArrowChange: setArrow,
        arrowX: arrowX,
        arrowY: arrowY,
        shouldHideArrow: cannotCenterArrow
    }, /*#__PURE__*/ React.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
        "data-side": placedSide,
        "data-align": placedAlign
    }, contentProps, {
        ref: composedRefs,
        style: {
            ...contentProps.style,
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: !isPositioned ? 'none' : undefined,
            // hide the content if using the hide middleware and should be hidden
            opacity: (_middlewareData$hide = middlewareData.hide) !== null && _middlewareData$hide !== void 0 && _middlewareData$hide.referenceHidden ? 0 : undefined
        }
    }))));
});
/* -----------------------------------------------------------------------------------------------*/ function $cf1ac5d9fe0e8206$var$isNotNull(value) {
    return value !== null;
}
const $cf1ac5d9fe0e8206$var$transformOrigin = (options)=>({
        name: 'transformOrigin',
        options: options,
        fn (data) {
            var _middlewareData$arrow4, _middlewareData$arrow5, _middlewareData$arrow6, _middlewareData$arrow7, _middlewareData$arrow8;
            const { placement: placement , rects: rects , middlewareData: middlewareData  } = data;
            const cannotCenterArrow = ((_middlewareData$arrow4 = middlewareData.arrow) === null || _middlewareData$arrow4 === void 0 ? void 0 : _middlewareData$arrow4.centerOffset) !== 0;
            const isArrowHidden = cannotCenterArrow;
            const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
            const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
            const [placedSide, placedAlign] = $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement);
            const noArrowAlign = {
                start: '0%',
                center: '50%',
                end: '100%'
            }[placedAlign];
            const arrowXCenter = ((_middlewareData$arrow5 = (_middlewareData$arrow6 = middlewareData.arrow) === null || _middlewareData$arrow6 === void 0 ? void 0 : _middlewareData$arrow6.x) !== null && _middlewareData$arrow5 !== void 0 ? _middlewareData$arrow5 : 0) + arrowWidth / 2;
            const arrowYCenter = ((_middlewareData$arrow7 = (_middlewareData$arrow8 = middlewareData.arrow) === null || _middlewareData$arrow8 === void 0 ? void 0 : _middlewareData$arrow8.y) !== null && _middlewareData$arrow7 !== void 0 ? _middlewareData$arrow7 : 0) + arrowHeight / 2;
            let x = '';
            let y = '';
            if (placedSide === 'bottom') {
                x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
                y = `${-arrowHeight}px`;
            } else if (placedSide === 'top') {
                x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
                y = `${rects.floating.height + arrowHeight}px`;
            } else if (placedSide === 'right') {
                x = `${-arrowHeight}px`;
                y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
            } else if (placedSide === 'left') {
                x = `${rects.floating.width + arrowHeight}px`;
                y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
            }
            return {
                data: {
                    x: x,
                    y: y
                }
            };
        }
    })
;
function $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement) {
    const [side, align = 'center'] = placement.split('-');
    return [
        side,
        align
    ];
}
const $cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9 = $cf1ac5d9fe0e8206$export$badac9ada3a0bdf9;
const $cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2 = $cf1ac5d9fe0e8206$export$bc4ae5855d3c4fc;

const $f1701beae083dbae$export$602eac185826482c = /*#__PURE__*/ React.forwardRef((props, forwardedRef)=>{
    var _globalThis$document;
    const { container: container = globalThis === null || globalThis === void 0 ? void 0 : (_globalThis$document = globalThis.document) === null || _globalThis$document === void 0 ? void 0 : _globalThis$document.body , ...portalProps } = props;
    return container ? /*#__PURE__*/ ReactDOM__default["default"].createPortal(/*#__PURE__*/ React.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, portalProps, {
        ref: forwardedRef
    })), container) : null;
});

function $71cd76cc60e0454e$export$6f32135080cb4c3({ prop: prop , defaultProp: defaultProp , onChange: onChange = ()=>{}  }) {
    const [uncontrolledProp, setUncontrolledProp] = $71cd76cc60e0454e$var$useUncontrolledState({
        defaultProp: defaultProp,
        onChange: onChange
    });
    const isControlled = prop !== undefined;
    const value1 = isControlled ? prop : uncontrolledProp;
    const handleChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);
    const setValue = React.useCallback((nextValue)=>{
        if (isControlled) {
            const setter = nextValue;
            const value = typeof nextValue === 'function' ? setter(prop) : nextValue;
            if (value !== prop) handleChange(value);
        } else setUncontrolledProp(nextValue);
    }, [
        isControlled,
        prop,
        setUncontrolledProp,
        handleChange
    ]);
    return [
        value1,
        setValue
    ];
}
function $71cd76cc60e0454e$var$useUncontrolledState({ defaultProp: defaultProp , onChange: onChange  }) {
    const uncontrolledState = React.useState(defaultProp);
    const [value] = uncontrolledState;
    const prevValueRef = React.useRef(value);
    const handleChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);
    React.useEffect(()=>{
        if (prevValueRef.current !== value) {
            handleChange(value);
            prevValueRef.current = value;
        }
    }, [
        value,
        prevValueRef,
        handleChange
    ]);
    return uncontrolledState;
}

function $010c2913dbd2fe3d$export$5cae361ad82dce8b(value) {
    const ref = React.useRef({
        value: value,
        previous: value
    }); // We compare values before making an update to ensure that
    // a change has been made. This ensures the previous value is
    // persisted correctly between renders.
    return React.useMemo(()=>{
        if (ref.current.value !== value) {
            ref.current.previous = ref.current.value;
            ref.current.value = value;
        }
        return ref.current.previous;
    }, [
        value
    ]);
}

const $ea1ef594cf570d83$export$439d29a4e110a164 = /*#__PURE__*/ React.forwardRef((props, forwardedRef)=>{
    return /*#__PURE__*/ React.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({}, props, {
        ref: forwardedRef,
        style: {
            // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
            position: 'absolute',
            border: 0,
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: 'hidden',
            clip: 'rect(0, 0, 0, 0)',
            whiteSpace: 'nowrap',
            wordWrap: 'normal',
            ...props.style
        }
    }));
});

var getDefaultParent = function (originalTarget) {
    if (typeof document === 'undefined') {
        return null;
    }
    var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
    return sampleTarget.ownerDocument.body;
};
var counterMap = new WeakMap();
var uncontrolledNodes = new WeakMap();
var markerMap = {};
var lockCount = 0;
var unwrapHost = function (node) {
    return node && (node.host || unwrapHost(node.parentNode));
};
var correctTargets = function (parent, targets) {
    return targets
        .map(function (target) {
        if (parent.contains(target)) {
            return target;
        }
        var correctedTarget = unwrapHost(target);
        if (correctedTarget && parent.contains(correctedTarget)) {
            return correctedTarget;
        }
        console.error('aria-hidden', target, 'in not contained inside', parent, '. Doing nothing');
        return null;
    })
        .filter(function (x) { return Boolean(x); });
};
/**
 * Marks everything except given node(or nodes) as aria-hidden
 * @param {Element | Element[]} originalTarget - elements to keep on the page
 * @param [parentNode] - top element, defaults to document.body
 * @param {String} [markerName] - a special attribute to mark every node
 * @param {String} [controlAttribute] - html Attribute to control
 * @return {Undo} undo command
 */
var applyAttributeToOthers = function (originalTarget, parentNode, markerName, controlAttribute) {
    var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
    if (!markerMap[markerName]) {
        markerMap[markerName] = new WeakMap();
    }
    var markerCounter = markerMap[markerName];
    var hiddenNodes = [];
    var elementsToKeep = new Set();
    var elementsToStop = new Set(targets);
    var keep = function (el) {
        if (!el || elementsToKeep.has(el)) {
            return;
        }
        elementsToKeep.add(el);
        keep(el.parentNode);
    };
    targets.forEach(keep);
    var deep = function (parent) {
        if (!parent || elementsToStop.has(parent)) {
            return;
        }
        Array.prototype.forEach.call(parent.children, function (node) {
            if (elementsToKeep.has(node)) {
                deep(node);
            }
            else {
                var attr = node.getAttribute(controlAttribute);
                var alreadyHidden = attr !== null && attr !== 'false';
                var counterValue = (counterMap.get(node) || 0) + 1;
                var markerValue = (markerCounter.get(node) || 0) + 1;
                counterMap.set(node, counterValue);
                markerCounter.set(node, markerValue);
                hiddenNodes.push(node);
                if (counterValue === 1 && alreadyHidden) {
                    uncontrolledNodes.set(node, true);
                }
                if (markerValue === 1) {
                    node.setAttribute(markerName, 'true');
                }
                if (!alreadyHidden) {
                    node.setAttribute(controlAttribute, 'true');
                }
            }
        });
    };
    deep(parentNode);
    elementsToKeep.clear();
    lockCount++;
    return function () {
        hiddenNodes.forEach(function (node) {
            var counterValue = counterMap.get(node) - 1;
            var markerValue = markerCounter.get(node) - 1;
            counterMap.set(node, counterValue);
            markerCounter.set(node, markerValue);
            if (!counterValue) {
                if (!uncontrolledNodes.has(node)) {
                    node.removeAttribute(controlAttribute);
                }
                uncontrolledNodes.delete(node);
            }
            if (!markerValue) {
                node.removeAttribute(markerName);
            }
        });
        lockCount--;
        if (!lockCount) {
            // clear
            counterMap = new WeakMap();
            counterMap = new WeakMap();
            uncontrolledNodes = new WeakMap();
            markerMap = {};
        }
    };
};
/**
 * Marks everything except given node(or nodes) as aria-hidden
 * @param {Element | Element[]} originalTarget - elements to keep on the page
 * @param [parentNode] - top element, defaults to document.body
 * @param {String} [markerName] - a special attribute to mark every node
 * @return {Undo} undo command
 */
var hideOthers = function (originalTarget, parentNode, markerName) {
    if (markerName === void 0) { markerName = 'data-aria-hidden'; }
    var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
    var activeParentNode = parentNode || getDefaultParent(originalTarget);
    if (!activeParentNode) {
        return function () { return null; };
    }
    // we should not hide ariaLive elements - https://github.com/theKashey/aria-hidden/issues/10
    targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll('[aria-live]')));
    return applyAttributeToOthers(targets, activeParentNode, markerName, 'aria-hidden');
};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  };
  return __assign.apply(this, arguments);
};

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

var zeroRightClassName = 'right-scroll-bar-position';
var fullWidthClassName = 'width-before-scroll-bar';
var noScrollbarsClassName = 'with-scroll-bars-hidden';
/**
 * Name of a CSS variable containing the amount of "hidden" scrollbar
 * ! might be undefined ! use will fallback!
 */
var removedBarSizeVariable = '--removed-body-scroll-bar-size';

/**
 * Assigns a value for a given ref, no matter of the ref format
 * @param {RefObject} ref - a callback function or ref object
 * @param value - a new value
 *
 * @see https://github.com/theKashey/use-callback-ref#assignref
 * @example
 * const refObject = useRef();
 * const refFn = (ref) => {....}
 *
 * assignRef(refObject, "refValue");
 * assignRef(refFn, "refValue");
 */
function assignRef(ref, value) {
    if (typeof ref === 'function') {
        ref(value);
    }
    else if (ref) {
        ref.current = value;
    }
    return ref;
}

/**
 * creates a MutableRef with ref change callback
 * @param initialValue - initial ref value
 * @param {Function} callback - a callback to run when value changes
 *
 * @example
 * const ref = useCallbackRef(0, (newValue, oldValue) => console.log(oldValue, '->', newValue);
 * ref.current = 1;
 * // prints 0 -> 1
 *
 * @see https://reactjs.org/docs/hooks-reference.html#useref
 * @see https://github.com/theKashey/use-callback-ref#usecallbackref---to-replace-reactuseref
 * @returns {MutableRefObject}
 */
function useCallbackRef(initialValue, callback) {
    var ref = React.useState(function () { return ({
        // value
        value: initialValue,
        // last callback
        callback: callback,
        // "memoized" public interface
        facade: {
            get current() {
                return ref.value;
            },
            set current(value) {
                var last = ref.value;
                if (last !== value) {
                    ref.value = value;
                    ref.callback(value, last);
                }
            },
        },
    }); })[0];
    // update callback
    ref.callback = callback;
    return ref.facade;
}

/**
 * Merges two or more refs together providing a single interface to set their value
 * @param {RefObject|Ref} refs
 * @returns {MutableRefObject} - a new ref, which translates all changes to {refs}
 *
 * @see {@link mergeRefs} a version without buit-in memoization
 * @see https://github.com/theKashey/use-callback-ref#usemergerefs
 * @example
 * const Component = React.forwardRef((props, ref) => {
 *   const ownRef = useRef();
 *   const domRef = useMergeRefs([ref, ownRef]); // 👈 merge together
 *   return <div ref={domRef}>...</div>
 * }
 */
function useMergeRefs(refs, defaultValue) {
    return useCallbackRef(defaultValue || null, function (newValue) { return refs.forEach(function (ref) { return assignRef(ref, newValue); }); });
}

function ItoI(a) {
    return a;
}
function innerCreateMedium(defaults, middleware) {
    if (middleware === void 0) { middleware = ItoI; }
    var buffer = [];
    var assigned = false;
    var medium = {
        read: function () {
            if (assigned) {
                throw new Error('Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.');
            }
            if (buffer.length) {
                return buffer[buffer.length - 1];
            }
            return defaults;
        },
        useMedium: function (data) {
            var item = middleware(data, assigned);
            buffer.push(item);
            return function () {
                buffer = buffer.filter(function (x) { return x !== item; });
            };
        },
        assignSyncMedium: function (cb) {
            assigned = true;
            while (buffer.length) {
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
            }
            buffer = {
                push: function (x) { return cb(x); },
                filter: function () { return buffer; },
            };
        },
        assignMedium: function (cb) {
            assigned = true;
            var pendingQueue = [];
            if (buffer.length) {
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
                pendingQueue = buffer;
            }
            var executeQueue = function () {
                var cbs = pendingQueue;
                pendingQueue = [];
                cbs.forEach(cb);
            };
            var cycle = function () { return Promise.resolve().then(executeQueue); };
            cycle();
            buffer = {
                push: function (x) {
                    pendingQueue.push(x);
                    cycle();
                },
                filter: function (filter) {
                    pendingQueue = pendingQueue.filter(filter);
                    return buffer;
                },
            };
        },
    };
    return medium;
}
// eslint-disable-next-line @typescript-eslint/ban-types
function createSidecarMedium(options) {
    if (options === void 0) { options = {}; }
    var medium = innerCreateMedium(null);
    medium.options = __assign({ async: true, ssr: false }, options);
    return medium;
}

var SideCar$1 = function (_a) {
    var sideCar = _a.sideCar, rest = __rest(_a, ["sideCar"]);
    if (!sideCar) {
        throw new Error('Sidecar: please provide `sideCar` property to import the right car');
    }
    var Target = sideCar.read();
    if (!Target) {
        throw new Error('Sidecar medium not found');
    }
    return React__namespace.createElement(Target, __assign({}, rest));
};
SideCar$1.isSideCarExport = true;
function exportSidecar(medium, exported) {
    medium.useMedium(exported);
    return SideCar$1;
}

var effectCar = createSidecarMedium();

var nothing = function () {
    return;
};
/**
 * Removes scrollbar from the page and contain the scroll within the Lock
 */
var RemoveScroll = React__namespace.forwardRef(function (props, parentRef) {
    var ref = React__namespace.useRef(null);
    var _a = React__namespace.useState({
        onScrollCapture: nothing,
        onWheelCapture: nothing,
        onTouchMoveCapture: nothing,
    }), callbacks = _a[0], setCallbacks = _a[1];
    var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? 'div' : _b, rest = __rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]);
    var SideCar = sideCar;
    var containerRef = useMergeRefs([ref, parentRef]);
    var containerProps = __assign(__assign({}, rest), callbacks);
    return (React__namespace.createElement(React__namespace.Fragment, null,
        enabled && (React__namespace.createElement(SideCar, { sideCar: effectCar, removeScrollBar: removeScrollBar, shards: shards, noIsolation: noIsolation, inert: inert, setCallbacks: setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref })),
        forwardProps ? (React__namespace.cloneElement(React__namespace.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef }))) : (React__namespace.createElement(Container, __assign({}, containerProps, { className: className, ref: containerRef }), children))));
});
RemoveScroll.defaultProps = {
    enabled: true,
    removeScrollBar: true,
    inert: false,
};
RemoveScroll.classNames = {
    fullWidth: fullWidthClassName,
    zeroRight: zeroRightClassName,
};

var getNonce = function () {
    if (typeof __webpack_nonce__ !== 'undefined') {
        return __webpack_nonce__;
    }
    return undefined;
};

function makeStyleTag() {
    if (!document)
        return null;
    var tag = document.createElement('style');
    tag.type = 'text/css';
    var nonce = getNonce();
    if (nonce) {
        tag.setAttribute('nonce', nonce);
    }
    return tag;
}
function injectStyles(tag, css) {
    // @ts-ignore
    if (tag.styleSheet) {
        // @ts-ignore
        tag.styleSheet.cssText = css;
    }
    else {
        tag.appendChild(document.createTextNode(css));
    }
}
function insertStyleTag(tag) {
    var head = document.head || document.getElementsByTagName('head')[0];
    head.appendChild(tag);
}
var stylesheetSingleton = function () {
    var counter = 0;
    var stylesheet = null;
    return {
        add: function (style) {
            if (counter == 0) {
                if ((stylesheet = makeStyleTag())) {
                    injectStyles(stylesheet, style);
                    insertStyleTag(stylesheet);
                }
            }
            counter++;
        },
        remove: function () {
            counter--;
            if (!counter && stylesheet) {
                stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
                stylesheet = null;
            }
        },
    };
};

/**
 * creates a hook to control style singleton
 * @see {@link styleSingleton} for a safer component version
 * @example
 * ```tsx
 * const useStyle = styleHookSingleton();
 * ///
 * useStyle('body { overflow: hidden}');
 */
var styleHookSingleton = function () {
    var sheet = stylesheetSingleton();
    return function (styles, isDynamic) {
        React__namespace.useEffect(function () {
            sheet.add(styles);
            return function () {
                sheet.remove();
            };
        }, [styles && isDynamic]);
    };
};

/**
 * create a Component to add styles on demand
 * - styles are added when first instance is mounted
 * - styles are removed when the last instance is unmounted
 * - changing styles in runtime does nothing unless dynamic is set. But with multiple components that can lead to the undefined behavior
 */
var styleSingleton = function () {
    var useStyle = styleHookSingleton();
    var Sheet = function (_a) {
        var styles = _a.styles, dynamic = _a.dynamic;
        useStyle(styles, dynamic);
        return null;
    };
    return Sheet;
};

var zeroGap = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0,
};
var parse = function (x) { return parseInt(x || '', 10) || 0; };
var getOffset = function (gapMode) {
    var cs = window.getComputedStyle(document.body);
    var left = cs[gapMode === 'padding' ? 'paddingLeft' : 'marginLeft'];
    var top = cs[gapMode === 'padding' ? 'paddingTop' : 'marginTop'];
    var right = cs[gapMode === 'padding' ? 'paddingRight' : 'marginRight'];
    return [parse(left), parse(top), parse(right)];
};
var getGapWidth = function (gapMode) {
    if (gapMode === void 0) { gapMode = 'margin'; }
    if (typeof window === 'undefined') {
        return zeroGap;
    }
    var offsets = getOffset(gapMode);
    var documentWidth = document.documentElement.clientWidth;
    var windowWidth = window.innerWidth;
    return {
        left: offsets[0],
        top: offsets[1],
        right: offsets[2],
        gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0]),
    };
};

var Style = styleSingleton();
// important tip - once we measure scrollBar width and remove them
// we could not repeat this operation
// thus we are using style-singleton - only the first "yet correct" style will be applied.
var getStyles = function (_a, allowRelative, gapMode, important) {
    var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
    if (gapMode === void 0) { gapMode = 'margin'; }
    return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
        allowRelative && "position: relative ".concat(important, ";"),
        gapMode === 'margin' &&
            "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
        gapMode === 'padding' && "padding-right: ".concat(gap, "px ").concat(important, ";"),
    ]
        .filter(Boolean)
        .join(''), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
/**
 * Removes page scrollbar and blocks page scroll when mounted
 */
var RemoveScrollBar = function (props) {
    var noRelative = props.noRelative, noImportant = props.noImportant, _a = props.gapMode, gapMode = _a === void 0 ? 'margin' : _a;
    /*
     gap will be measured on every component mount
     however it will be used only by the "first" invocation
     due to singleton nature of <Style
     */
    var gap = React__namespace.useMemo(function () { return getGapWidth(gapMode); }, [gapMode]);
    return React__namespace.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? '!important' : '') });
};

var passiveSupported = false;
if (typeof window !== 'undefined') {
    try {
        var options = Object.defineProperty({}, 'passive', {
            get: function () {
                passiveSupported = true;
                return true;
            },
        });
        // @ts-ignore
        window.addEventListener('test', options, options);
        // @ts-ignore
        window.removeEventListener('test', options, options);
    }
    catch (err) {
        passiveSupported = false;
    }
}
var nonPassive = passiveSupported ? { passive: false } : false;

var alwaysContainsScroll = function (node) {
    // textarea will always _contain_ scroll inside self. It only can be hidden
    return node.tagName === 'TEXTAREA';
};
var elementCanBeScrolled = function (node, overflow) {
    var styles = window.getComputedStyle(node);
    return (
    // not-not-scrollable
    styles[overflow] !== 'hidden' &&
        // contains scroll inside self
        !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === 'visible'));
};
var elementCouldBeVScrolled = function (node) { return elementCanBeScrolled(node, 'overflowY'); };
var elementCouldBeHScrolled = function (node) { return elementCanBeScrolled(node, 'overflowX'); };
var locationCouldBeScrolled = function (axis, node) {
    var current = node;
    do {
        // Skip over shadow root
        if (typeof ShadowRoot !== 'undefined' && current instanceof ShadowRoot) {
            current = current.host;
        }
        var isScrollable = elementCouldBeScrolled(axis, current);
        if (isScrollable) {
            var _a = getScrollVariables(axis, current), s = _a[1], d = _a[2];
            if (s > d) {
                return true;
            }
        }
        current = current.parentNode;
    } while (current && current !== document.body);
    return false;
};
var getVScrollVariables = function (_a) {
    var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
    return [
        scrollTop,
        scrollHeight,
        clientHeight,
    ];
};
var getHScrollVariables = function (_a) {
    var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
    return [
        scrollLeft,
        scrollWidth,
        clientWidth,
    ];
};
var elementCouldBeScrolled = function (axis, node) {
    return axis === 'v' ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function (axis, node) {
    return axis === 'v' ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function (axis, direction) {
    /**
     * If the element's direction is rtl (right-to-left), then scrollLeft is 0 when the scrollbar is at its rightmost position,
     * and then increasingly negative as you scroll towards the end of the content.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft
     */
    return axis === 'h' && direction === 'rtl' ? -1 : 1;
};
var handleScroll = function (axis, endTarget, event, sourceDelta, noOverscroll) {
    var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
    var delta = directionFactor * sourceDelta;
    // find scrollable target
    var target = event.target;
    var targetInLock = endTarget.contains(target);
    var shouldCancelScroll = false;
    var isDeltaPositive = delta > 0;
    var availableScroll = 0;
    var availableScrollTop = 0;
    do {
        var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
        var elementScroll = scroll_1 - capacity - directionFactor * position;
        if (position || elementScroll) {
            if (elementCouldBeScrolled(axis, target)) {
                availableScroll += elementScroll;
                availableScrollTop += position;
            }
        }
        target = target.parentNode;
    } while (
    // portaled content
    (!targetInLock && target !== document.body) ||
        // self content
        (targetInLock && (endTarget.contains(target) || endTarget === target)));
    if (isDeltaPositive && ((noOverscroll && availableScroll === 0) || (!noOverscroll && delta > availableScroll))) {
        shouldCancelScroll = true;
    }
    else if (!isDeltaPositive &&
        ((noOverscroll && availableScrollTop === 0) || (!noOverscroll && -delta > availableScrollTop))) {
        shouldCancelScroll = true;
    }
    return shouldCancelScroll;
};

var getTouchXY = function (event) {
    return 'changedTouches' in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function (event) { return [event.deltaX, event.deltaY]; };
var extractRef = function (ref) {
    return ref && 'current' in ref ? ref.current : ref;
};
var deltaCompare = function (x, y) { return x[0] === y[0] && x[1] === y[1]; };
var generateStyle = function (id) { return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n"); };
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
    var shouldPreventQueue = React__namespace.useRef([]);
    var touchStartRef = React__namespace.useRef([0, 0]);
    var activeAxis = React__namespace.useRef();
    var id = React__namespace.useState(idCounter++)[0];
    var Style = React__namespace.useState(function () { return styleSingleton(); })[0];
    var lastProps = React__namespace.useRef(props);
    React__namespace.useEffect(function () {
        lastProps.current = props;
    }, [props]);
    React__namespace.useEffect(function () {
        if (props.inert) {
            document.body.classList.add("block-interactivity-".concat(id));
            var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
            allow_1.forEach(function (el) { return el.classList.add("allow-interactivity-".concat(id)); });
            return function () {
                document.body.classList.remove("block-interactivity-".concat(id));
                allow_1.forEach(function (el) { return el.classList.remove("allow-interactivity-".concat(id)); });
            };
        }
        return;
    }, [props.inert, props.lockRef.current, props.shards]);
    var shouldCancelEvent = React__namespace.useCallback(function (event, parent) {
        if ('touches' in event && event.touches.length === 2) {
            return !lastProps.current.allowPinchZoom;
        }
        var touch = getTouchXY(event);
        var touchStart = touchStartRef.current;
        var deltaX = 'deltaX' in event ? event.deltaX : touchStart[0] - touch[0];
        var deltaY = 'deltaY' in event ? event.deltaY : touchStart[1] - touch[1];
        var currentAxis;
        var target = event.target;
        var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? 'h' : 'v';
        // allow horizontal touch move on Range inputs. They will not cause any scroll
        if ('touches' in event && moveDirection === 'h' && target.type === 'range') {
            return false;
        }
        var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
        if (!canBeScrolledInMainDirection) {
            return true;
        }
        if (canBeScrolledInMainDirection) {
            currentAxis = moveDirection;
        }
        else {
            currentAxis = moveDirection === 'v' ? 'h' : 'v';
            canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
            // other axis might be not scrollable
        }
        if (!canBeScrolledInMainDirection) {
            return false;
        }
        if (!activeAxis.current && 'changedTouches' in event && (deltaX || deltaY)) {
            activeAxis.current = currentAxis;
        }
        if (!currentAxis) {
            return true;
        }
        var cancelingAxis = activeAxis.current || currentAxis;
        return handleScroll(cancelingAxis, parent, event, cancelingAxis === 'h' ? deltaX : deltaY, true);
    }, []);
    var shouldPrevent = React__namespace.useCallback(function (_event) {
        var event = _event;
        if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) {
            // not the last active
            return;
        }
        var delta = 'deltaY' in event ? getDeltaXY(event) : getTouchXY(event);
        var sourceEvent = shouldPreventQueue.current.filter(function (e) { return e.name === event.type && e.target === event.target && deltaCompare(e.delta, delta); })[0];
        // self event, and should be canceled
        if (sourceEvent && sourceEvent.should) {
            if (event.cancelable) {
                event.preventDefault();
            }
            return;
        }
        // outside or shard event
        if (!sourceEvent) {
            var shardNodes = (lastProps.current.shards || [])
                .map(extractRef)
                .filter(Boolean)
                .filter(function (node) { return node.contains(event.target); });
            var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
            if (shouldStop) {
                if (event.cancelable) {
                    event.preventDefault();
                }
            }
        }
    }, []);
    var shouldCancel = React__namespace.useCallback(function (name, delta, target, should) {
        var event = { name: name, delta: delta, target: target, should: should };
        shouldPreventQueue.current.push(event);
        setTimeout(function () {
            shouldPreventQueue.current = shouldPreventQueue.current.filter(function (e) { return e !== event; });
        }, 1);
    }, []);
    var scrollTouchStart = React__namespace.useCallback(function (event) {
        touchStartRef.current = getTouchXY(event);
        activeAxis.current = undefined;
    }, []);
    var scrollWheel = React__namespace.useCallback(function (event) {
        shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    var scrollTouchMove = React__namespace.useCallback(function (event) {
        shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    React__namespace.useEffect(function () {
        lockStack.push(Style);
        props.setCallbacks({
            onScrollCapture: scrollWheel,
            onWheelCapture: scrollWheel,
            onTouchMoveCapture: scrollTouchMove,
        });
        document.addEventListener('wheel', shouldPrevent, nonPassive);
        document.addEventListener('touchmove', shouldPrevent, nonPassive);
        document.addEventListener('touchstart', scrollTouchStart, nonPassive);
        return function () {
            lockStack = lockStack.filter(function (inst) { return inst !== Style; });
            document.removeEventListener('wheel', shouldPrevent, nonPassive);
            document.removeEventListener('touchmove', shouldPrevent, nonPassive);
            document.removeEventListener('touchstart', scrollTouchStart, nonPassive);
        };
    }, []);
    var removeScrollBar = props.removeScrollBar, inert = props.inert;
    return (React__namespace.createElement(React__namespace.Fragment, null,
        inert ? React__namespace.createElement(Style, { styles: generateStyle(id) }) : null,
        removeScrollBar ? React__namespace.createElement(RemoveScrollBar, { gapMode: "margin" }) : null));
}

var SideCar = exportSidecar(effectCar, RemoveScrollSideCar);

var ReactRemoveScroll = React__namespace.forwardRef(function (props, ref) { return (React__namespace.createElement(RemoveScroll, __assign({}, props, { ref: ref, sideCar: SideCar }))); });
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var $67UHm$RemoveScroll = ReactRemoveScroll;

const $cc7e05a45900e73f$var$SELECTION_KEYS = [
    ' ',
    'Enter'
];
/* -------------------------------------------------------------------------------------------------
 * Select
 * -----------------------------------------------------------------------------------------------*/ const $cc7e05a45900e73f$var$SELECT_NAME = 'Select';
const [$cc7e05a45900e73f$var$Collection, $cc7e05a45900e73f$var$useCollection, $cc7e05a45900e73f$var$createCollectionScope] = $e02a7d9cb1dc128c$export$c74125a8e3af6bb2($cc7e05a45900e73f$var$SELECT_NAME);
const [$cc7e05a45900e73f$var$createSelectContext, $cc7e05a45900e73f$export$286727a75dc039bd] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($cc7e05a45900e73f$var$SELECT_NAME, [
    $cc7e05a45900e73f$var$createCollectionScope,
    $cf1ac5d9fe0e8206$export$722aac194ae923
]);
const $cc7e05a45900e73f$var$usePopperScope = $cf1ac5d9fe0e8206$export$722aac194ae923();
const [$cc7e05a45900e73f$var$SelectProvider, $cc7e05a45900e73f$var$useSelectContext] = $cc7e05a45900e73f$var$createSelectContext($cc7e05a45900e73f$var$SELECT_NAME);
const [$cc7e05a45900e73f$var$SelectNativeOptionsProvider, $cc7e05a45900e73f$var$useSelectNativeOptionsContext] = $cc7e05a45900e73f$var$createSelectContext($cc7e05a45900e73f$var$SELECT_NAME);
const $cc7e05a45900e73f$export$ef9b1a59e592288f = (props)=>{
    const { __scopeSelect: __scopeSelect , children: children , open: openProp , defaultOpen: defaultOpen , onOpenChange: onOpenChange , value: valueProp , defaultValue: defaultValue , onValueChange: onValueChange , dir: dir , name: name , autoComplete: autoComplete , disabled: disabled , required: required  } = props;
    const popperScope = $cc7e05a45900e73f$var$usePopperScope(__scopeSelect);
    const [trigger, setTrigger] = React.useState(null);
    const [valueNode, setValueNode] = React.useState(null);
    const [valueNodeHasChildren, setValueNodeHasChildren] = React.useState(false);
    const direction = $f631663db3294ace$export$b39126d51d94e6f3(dir);
    const [open = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: onOpenChange
    });
    const [value, setValue] = $71cd76cc60e0454e$export$6f32135080cb4c3({
        prop: valueProp,
        defaultProp: defaultValue,
        onChange: onValueChange
    });
    const triggerPointerDownPosRef = React.useRef(null); // We set this to true by default so that events bubble to forms without JS (SSR)
    const isFormControl = trigger ? Boolean(trigger.closest('form')) : true;
    const [nativeOptionsSet, setNativeOptionsSet] = React.useState(new Set()); // The native `select` only associates the correct default value if the corresponding
    // `option` is rendered as a child **at the same time** as itself.
    // Because it might take a few renders for our items to gather the information to build
    // the native `option`(s), we generate a key on the `select` to make sure React re-builds it
    // each time the options change.
    const nativeSelectKey = Array.from(nativeOptionsSet).map((option)=>option.props.value
    ).join(';');
    return /*#__PURE__*/ React.createElement($cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9, popperScope, /*#__PURE__*/ React.createElement($cc7e05a45900e73f$var$SelectProvider, {
        required: required,
        scope: __scopeSelect,
        trigger: trigger,
        onTriggerChange: setTrigger,
        valueNode: valueNode,
        onValueNodeChange: setValueNode,
        valueNodeHasChildren: valueNodeHasChildren,
        onValueNodeHasChildrenChange: setValueNodeHasChildren,
        contentId: $1746a345f3d73bb7$export$f680877a34711e37(),
        value: value,
        onValueChange: setValue,
        open: open,
        onOpenChange: setOpen,
        dir: direction,
        triggerPointerDownPosRef: triggerPointerDownPosRef,
        disabled: disabled
    }, /*#__PURE__*/ React.createElement($cc7e05a45900e73f$var$Collection.Provider, {
        scope: __scopeSelect
    }, /*#__PURE__*/ React.createElement($cc7e05a45900e73f$var$SelectNativeOptionsProvider, {
        scope: props.__scopeSelect,
        onNativeOptionAdd: React.useCallback((option)=>{
            setNativeOptionsSet((prev)=>new Set(prev).add(option)
            );
        }, []),
        onNativeOptionRemove: React.useCallback((option)=>{
            setNativeOptionsSet((prev)=>{
                const optionsSet = new Set(prev);
                optionsSet.delete(option);
                return optionsSet;
            });
        }, [])
    }, children)), isFormControl ? /*#__PURE__*/ React.createElement($cc7e05a45900e73f$var$BubbleSelect, {
        key: nativeSelectKey,
        "aria-hidden": true,
        required: required,
        tabIndex: -1,
        name: name,
        autoComplete: autoComplete,
        value: value // enable form autofill
        ,
        onChange: (event)=>setValue(event.target.value)
        ,
        disabled: disabled
    }, value === undefined ? /*#__PURE__*/ React.createElement("option", {
        value: ""
    }) : null, Array.from(nativeOptionsSet)) : null));
};
/* -------------------------------------------------------------------------------------------------
 * SelectContent
 * -----------------------------------------------------------------------------------------------*/ const $cc7e05a45900e73f$var$CONTENT_NAME = 'SelectContent';
const $cc7e05a45900e73f$export$c973a4b3cb86a03d = /*#__PURE__*/ React.forwardRef((props, forwardedRef)=>{
    const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$CONTENT_NAME, props.__scopeSelect);
    const [fragment, setFragment] = React.useState(); // setting the fragment in `useLayoutEffect` as `DocumentFragment` doesn't exist on the server
    $9f79659886946c16$export$e5c5a5f917a5871c(()=>{
        setFragment(new DocumentFragment());
    }, []);
    if (!context.open) {
        const frag = fragment;
        return frag ? /*#__PURE__*/ ReactDOM.createPortal(/*#__PURE__*/ React.createElement($cc7e05a45900e73f$var$SelectContentProvider, {
            scope: props.__scopeSelect
        }, /*#__PURE__*/ React.createElement($cc7e05a45900e73f$var$Collection.Slot, {
            scope: props.__scopeSelect
        }, /*#__PURE__*/ React.createElement("div", null, props.children))), frag) : null;
    }
    return /*#__PURE__*/ React.createElement($cc7e05a45900e73f$var$SelectContentImpl, _extends({}, props, {
        ref: forwardedRef
    }));
});
/* -------------------------------------------------------------------------------------------------
 * SelectContentImpl
 * -----------------------------------------------------------------------------------------------*/ const $cc7e05a45900e73f$var$CONTENT_MARGIN = 10;
const [$cc7e05a45900e73f$var$SelectContentProvider, $cc7e05a45900e73f$var$useSelectContentContext] = $cc7e05a45900e73f$var$createSelectContext($cc7e05a45900e73f$var$CONTENT_NAME);
const $cc7e05a45900e73f$var$SelectContentImpl = /*#__PURE__*/ React.forwardRef((props, forwardedRef)=>{
    const { __scopeSelect: __scopeSelect , position: position = 'item-aligned' , onCloseAutoFocus: onCloseAutoFocus , onEscapeKeyDown: onEscapeKeyDown , onPointerDownOutside: onPointerDownOutside , side: //
    // PopperContent props
    side , sideOffset: sideOffset , align: align , alignOffset: alignOffset , arrowPadding: arrowPadding , collisionBoundary: collisionBoundary , collisionPadding: collisionPadding , sticky: sticky , hideWhenDetached: hideWhenDetached , avoidCollisions: avoidCollisions , //
    ...contentProps } = props;
    const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$CONTENT_NAME, __scopeSelect);
    const [content, setContent] = React.useState(null);
    const [viewport, setViewport] = React.useState(null);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, (node)=>setContent(node)
    );
    const [selectedItem, setSelectedItem] = React.useState(null);
    const [selectedItemText, setSelectedItemText] = React.useState(null);
    const getItems = $cc7e05a45900e73f$var$useCollection(__scopeSelect);
    const [isPositioned, setIsPositioned] = React.useState(false);
    const firstValidItemFoundRef = React.useRef(false); // aria-hide everything except the content (better supported equivalent to setting aria-modal)
    React.useEffect(()=>{
        if (content) return hideOthers(content);
    }, [
        content
    ]); // Make sure the whole tree has focus guards as our `Select` may be
    // the last element in the DOM (because of the `Portal`)
    $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c();
    const focusFirst = React.useCallback((candidates)=>{
        const [firstItem, ...restItems] = getItems().map((item)=>item.ref.current
        );
        const [lastItem] = restItems.slice(-1);
        const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
        for (const candidate of candidates){
            // if focus is already where we want to go, we don't want to keep going through the candidates
            if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
            candidate === null || candidate === void 0 || candidate.scrollIntoView({
                block: 'nearest'
            }); // viewport might have padding so scroll to its edges when focusing first/last items.
            if (candidate === firstItem && viewport) viewport.scrollTop = 0;
            if (candidate === lastItem && viewport) viewport.scrollTop = viewport.scrollHeight;
            candidate === null || candidate === void 0 || candidate.focus();
            if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
        }
    }, [
        getItems,
        viewport
    ]);
    const focusSelectedItem = React.useCallback(()=>focusFirst([
            selectedItem,
            content
        ])
    , [
        focusFirst,
        selectedItem,
        content
    ]); // Since this is not dependent on layout, we want to ensure this runs at the same time as
    // other effects across components. Hence why we don't call `focusSelectedItem` inside `position`.
    React.useEffect(()=>{
        if (isPositioned) focusSelectedItem();
    }, [
        isPositioned,
        focusSelectedItem
    ]); // prevent selecting items on `pointerup` in some cases after opening from `pointerdown`
    // and close on `pointerup` outside.
    const { onOpenChange: onOpenChange , triggerPointerDownPosRef: triggerPointerDownPosRef  } = context;
    React.useEffect(()=>{
        if (content) {
            let pointerMoveDelta = {
                x: 0,
                y: 0
            };
            const handlePointerMove = (event)=>{
                var _triggerPointerDownPo, _triggerPointerDownPo2, _triggerPointerDownPo3, _triggerPointerDownPo4;
                pointerMoveDelta = {
                    x: Math.abs(Math.round(event.pageX) - ((_triggerPointerDownPo = (_triggerPointerDownPo2 = triggerPointerDownPosRef.current) === null || _triggerPointerDownPo2 === void 0 ? void 0 : _triggerPointerDownPo2.x) !== null && _triggerPointerDownPo !== void 0 ? _triggerPointerDownPo : 0)),
                    y: Math.abs(Math.round(event.pageY) - ((_triggerPointerDownPo3 = (_triggerPointerDownPo4 = triggerPointerDownPosRef.current) === null || _triggerPointerDownPo4 === void 0 ? void 0 : _triggerPointerDownPo4.y) !== null && _triggerPointerDownPo3 !== void 0 ? _triggerPointerDownPo3 : 0))
                };
            };
            const handlePointerUp = (event)=>{
                // If the pointer hasn't moved by a certain threshold then we prevent selecting item on `pointerup`.
                if (pointerMoveDelta.x <= 10 && pointerMoveDelta.y <= 10) event.preventDefault();
                else // otherwise, if the event was outside the content, close.
                if (!content.contains(event.target)) onOpenChange(false);
                document.removeEventListener('pointermove', handlePointerMove);
                triggerPointerDownPosRef.current = null;
            };
            if (triggerPointerDownPosRef.current !== null) {
                document.addEventListener('pointermove', handlePointerMove);
                document.addEventListener('pointerup', handlePointerUp, {
                    capture: true,
                    once: true
                });
            }
            return ()=>{
                document.removeEventListener('pointermove', handlePointerMove);
                document.removeEventListener('pointerup', handlePointerUp, {
                    capture: true
                });
            };
        }
    }, [
        content,
        onOpenChange,
        triggerPointerDownPosRef
    ]);
    React.useEffect(()=>{
        const close = ()=>onOpenChange(false)
        ;
        window.addEventListener('blur', close);
        window.addEventListener('resize', close);
        return ()=>{
            window.removeEventListener('blur', close);
            window.removeEventListener('resize', close);
        };
    }, [
        onOpenChange
    ]);
    const [searchRef, handleTypeaheadSearch] = $cc7e05a45900e73f$var$useTypeaheadSearch((search)=>{
        const enabledItems = getItems().filter((item)=>!item.disabled
        );
        const currentItem = enabledItems.find((item)=>item.ref.current === document.activeElement
        );
        const nextItem = $cc7e05a45900e73f$var$findNextItem(enabledItems, search, currentItem);
        if (nextItem) /**
       * Imperative focus during keydown is risky so we prevent React's batching updates
       * to avoid potential bugs. See: https://github.com/facebook/react/issues/20332
       */ setTimeout(()=>nextItem.ref.current.focus()
        );
    });
    const itemRefCallback = React.useCallback((node, value, disabled)=>{
        const isFirstValidItem = !firstValidItemFoundRef.current && !disabled;
        const isSelectedItem = context.value !== undefined && context.value === value;
        if (isSelectedItem || isFirstValidItem) {
            setSelectedItem(node);
            if (isFirstValidItem) firstValidItemFoundRef.current = true;
        }
    }, [
        context.value
    ]);
    const handleItemLeave = React.useCallback(()=>content === null || content === void 0 ? void 0 : content.focus()
    , [
        content
    ]);
    const itemTextRefCallback = React.useCallback((node, value, disabled)=>{
        const isFirstValidItem = !firstValidItemFoundRef.current && !disabled;
        const isSelectedItem = context.value !== undefined && context.value === value;
        if (isSelectedItem || isFirstValidItem) setSelectedItemText(node);
    }, [
        context.value
    ]);
    const SelectPosition = position === 'popper' ? $cc7e05a45900e73f$var$SelectPopperPosition : $cc7e05a45900e73f$var$SelectItemAlignedPosition; // Silently ignore props that are not supported by `SelectItemAlignedPosition`
    const popperContentProps = SelectPosition === $cc7e05a45900e73f$var$SelectPopperPosition ? {
        side: side,
        sideOffset: sideOffset,
        align: align,
        alignOffset: alignOffset,
        arrowPadding: arrowPadding,
        collisionBoundary: collisionBoundary,
        collisionPadding: collisionPadding,
        sticky: sticky,
        hideWhenDetached: hideWhenDetached,
        avoidCollisions: avoidCollisions
    } : {};
    return /*#__PURE__*/ React.createElement($cc7e05a45900e73f$var$SelectContentProvider, {
        scope: __scopeSelect,
        content: content,
        viewport: viewport,
        onViewportChange: setViewport,
        itemRefCallback: itemRefCallback,
        selectedItem: selectedItem,
        onItemLeave: handleItemLeave,
        itemTextRefCallback: itemTextRefCallback,
        focusSelectedItem: focusSelectedItem,
        selectedItemText: selectedItemText,
        position: position,
        isPositioned: isPositioned,
        searchRef: searchRef
    }, /*#__PURE__*/ React.createElement($67UHm$RemoveScroll, {
        as: $5e63c961fc1ce211$export$8c6ed5c666ac1360,
        allowPinchZoom: true
    }, /*#__PURE__*/ React.createElement($d3863c46a17e8a28$export$20e40289641fbbb6, {
        asChild: true // we make sure we're not trapping once it's been closed
        ,
        trapped: context.open,
        onMountAutoFocus: (event)=>{
            // we prevent open autofocus because we manually focus the selected item
            event.preventDefault();
        },
        onUnmountAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(onCloseAutoFocus, (event)=>{
            var _context$trigger;
            (_context$trigger = context.trigger) === null || _context$trigger === void 0 || _context$trigger.focus({
                preventScroll: true
            });
            event.preventDefault();
        })
    }, /*#__PURE__*/ React.createElement($5cb92bef7577960e$export$177fb62ff3ec1f22, {
        asChild: true,
        disableOutsidePointerEvents: true,
        onEscapeKeyDown: onEscapeKeyDown,
        onPointerDownOutside: onPointerDownOutside // When focus is trapped, a focusout event may still happen.
        ,
        onFocusOutside: (event)=>event.preventDefault()
        ,
        onDismiss: ()=>context.onOpenChange(false)
    }, /*#__PURE__*/ React.createElement(SelectPosition, _extends({
        role: "listbox",
        id: context.contentId,
        "data-state": context.open ? 'open' : 'closed',
        dir: context.dir,
        onContextMenu: (event)=>event.preventDefault()
    }, contentProps, popperContentProps, {
        onPlaced: ()=>setIsPositioned(true)
        ,
        ref: composedRefs,
        style: {
            // flex layout so we can place the scroll buttons properly
            display: 'flex',
            flexDirection: 'column',
            // reset the outline by default as the content MAY get focused
            outline: 'none',
            ...contentProps.style
        },
        onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(contentProps.onKeyDown, (event)=>{
            const isModifierKey = event.ctrlKey || event.altKey || event.metaKey; // select should not be navigated using tab key so we prevent it
            if (event.key === 'Tab') event.preventDefault();
            if (!isModifierKey && event.key.length === 1) handleTypeaheadSearch(event.key);
            if ([
                'ArrowUp',
                'ArrowDown',
                'Home',
                'End'
            ].includes(event.key)) {
                const items = getItems().filter((item)=>!item.disabled
                );
                let candidateNodes = items.map((item)=>item.ref.current
                );
                if ([
                    'ArrowUp',
                    'End'
                ].includes(event.key)) candidateNodes = candidateNodes.slice().reverse();
                if ([
                    'ArrowUp',
                    'ArrowDown'
                ].includes(event.key)) {
                    const currentElement = event.target;
                    const currentIndex = candidateNodes.indexOf(currentElement);
                    candidateNodes = candidateNodes.slice(currentIndex + 1);
                }
                /**
         * Imperative focus during keydown is risky so we prevent React's batching updates
         * to avoid potential bugs. See: https://github.com/facebook/react/issues/20332
         */ setTimeout(()=>focusFirst(candidateNodes)
                );
                event.preventDefault();
            }
        })
    }))))));
});
const $cc7e05a45900e73f$var$SelectItemAlignedPosition = /*#__PURE__*/ React.forwardRef((props, forwardedRef)=>{
    const { __scopeSelect: __scopeSelect , onPlaced: onPlaced , ...popperProps } = props;
    const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$CONTENT_NAME, __scopeSelect);
    const contentContext = $cc7e05a45900e73f$var$useSelectContentContext($cc7e05a45900e73f$var$CONTENT_NAME, __scopeSelect);
    const [contentWrapper, setContentWrapper] = React.useState(null);
    const [content, setContent] = React.useState(null);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, (node)=>setContent(node)
    );
    const getItems = $cc7e05a45900e73f$var$useCollection(__scopeSelect);
    const shouldExpandOnScrollRef = React.useRef(false);
    const shouldRepositionRef = React.useRef(true);
    const { viewport: viewport , selectedItem: selectedItem , selectedItemText: selectedItemText , focusSelectedItem: focusSelectedItem  } = contentContext;
    const position = React.useCallback(()=>{
        if (context.trigger && context.valueNode && contentWrapper && content && viewport && selectedItem && selectedItemText) {
            const triggerRect = context.trigger.getBoundingClientRect(); // -----------------------------------------------------------------------------------------
            //  Horizontal positioning
            // -----------------------------------------------------------------------------------------
            const contentRect = content.getBoundingClientRect();
            const valueNodeRect = context.valueNode.getBoundingClientRect();
            const itemTextRect = selectedItemText.getBoundingClientRect();
            if (context.dir !== 'rtl') {
                const itemTextOffset = itemTextRect.left - contentRect.left;
                const left = valueNodeRect.left - itemTextOffset;
                const leftDelta = triggerRect.left - left;
                const minContentWidth = triggerRect.width + leftDelta;
                const contentWidth = Math.max(minContentWidth, contentRect.width);
                const rightEdge = window.innerWidth - $cc7e05a45900e73f$var$CONTENT_MARGIN;
                const clampedLeft = $ae6933e535247d3d$export$7d15b64cf5a3a4c4(left, [
                    $cc7e05a45900e73f$var$CONTENT_MARGIN,
                    rightEdge - contentWidth
                ]);
                contentWrapper.style.minWidth = minContentWidth + 'px';
                contentWrapper.style.left = clampedLeft + 'px';
            } else {
                const itemTextOffset = contentRect.right - itemTextRect.right;
                const right = window.innerWidth - valueNodeRect.right - itemTextOffset;
                const rightDelta = window.innerWidth - triggerRect.right - right;
                const minContentWidth = triggerRect.width + rightDelta;
                const contentWidth = Math.max(minContentWidth, contentRect.width);
                const leftEdge = window.innerWidth - $cc7e05a45900e73f$var$CONTENT_MARGIN;
                const clampedRight = $ae6933e535247d3d$export$7d15b64cf5a3a4c4(right, [
                    $cc7e05a45900e73f$var$CONTENT_MARGIN,
                    leftEdge - contentWidth
                ]);
                contentWrapper.style.minWidth = minContentWidth + 'px';
                contentWrapper.style.right = clampedRight + 'px';
            } // -----------------------------------------------------------------------------------------
            // Vertical positioning
            // -----------------------------------------------------------------------------------------
            const items = getItems();
            const availableHeight = window.innerHeight - $cc7e05a45900e73f$var$CONTENT_MARGIN * 2;
            const itemsHeight = viewport.scrollHeight;
            const contentStyles = window.getComputedStyle(content);
            const contentBorderTopWidth = parseInt(contentStyles.borderTopWidth, 10);
            const contentPaddingTop = parseInt(contentStyles.paddingTop, 10);
            const contentBorderBottomWidth = parseInt(contentStyles.borderBottomWidth, 10);
            const contentPaddingBottom = parseInt(contentStyles.paddingBottom, 10);
            const fullContentHeight = contentBorderTopWidth + contentPaddingTop + itemsHeight + contentPaddingBottom + contentBorderBottomWidth; // prettier-ignore
            const minContentHeight = Math.min(selectedItem.offsetHeight * 5, fullContentHeight);
            const viewportStyles = window.getComputedStyle(viewport);
            const viewportPaddingTop = parseInt(viewportStyles.paddingTop, 10);
            const viewportPaddingBottom = parseInt(viewportStyles.paddingBottom, 10);
            const topEdgeToTriggerMiddle = triggerRect.top + triggerRect.height / 2 - $cc7e05a45900e73f$var$CONTENT_MARGIN;
            const triggerMiddleToBottomEdge = availableHeight - topEdgeToTriggerMiddle;
            const selectedItemHalfHeight = selectedItem.offsetHeight / 2;
            const itemOffsetMiddle = selectedItem.offsetTop + selectedItemHalfHeight;
            const contentTopToItemMiddle = contentBorderTopWidth + contentPaddingTop + itemOffsetMiddle;
            const itemMiddleToContentBottom = fullContentHeight - contentTopToItemMiddle;
            const willAlignWithoutTopOverflow = contentTopToItemMiddle <= topEdgeToTriggerMiddle;
            if (willAlignWithoutTopOverflow) {
                const isLastItem = selectedItem === items[items.length - 1].ref.current;
                contentWrapper.style.bottom = "0px";
                const viewportOffsetBottom = content.clientHeight - viewport.offsetTop - viewport.offsetHeight;
                const clampedTriggerMiddleToBottomEdge = Math.max(triggerMiddleToBottomEdge, selectedItemHalfHeight + (isLastItem ? viewportPaddingBottom : 0) + viewportOffsetBottom + contentBorderBottomWidth);
                const height = contentTopToItemMiddle + clampedTriggerMiddleToBottomEdge;
                contentWrapper.style.height = height + 'px';
            } else {
                const isFirstItem = selectedItem === items[0].ref.current;
                contentWrapper.style.top = "0px";
                const clampedTopEdgeToTriggerMiddle = Math.max(topEdgeToTriggerMiddle, contentBorderTopWidth + viewport.offsetTop + (isFirstItem ? viewportPaddingTop : 0) + selectedItemHalfHeight);
                const height = clampedTopEdgeToTriggerMiddle + itemMiddleToContentBottom;
                contentWrapper.style.height = height + 'px';
                viewport.scrollTop = contentTopToItemMiddle - topEdgeToTriggerMiddle + viewport.offsetTop;
            }
            contentWrapper.style.margin = `${$cc7e05a45900e73f$var$CONTENT_MARGIN}px 0`;
            contentWrapper.style.minHeight = minContentHeight + 'px';
            contentWrapper.style.maxHeight = availableHeight + 'px'; // -----------------------------------------------------------------------------------------
            onPlaced === null || onPlaced === void 0 || onPlaced(); // we don't want the initial scroll position adjustment to trigger "expand on scroll"
            // so we explicitly turn it on only after they've registered.
            requestAnimationFrame(()=>shouldExpandOnScrollRef.current = true
            );
        }
    }, [
        getItems,
        context.trigger,
        context.valueNode,
        contentWrapper,
        content,
        viewport,
        selectedItem,
        selectedItemText,
        context.dir,
        onPlaced
    ]);
    $9f79659886946c16$export$e5c5a5f917a5871c(()=>position()
    , [
        position
    ]); // copy z-index from content to wrapper
    const [contentZIndex, setContentZIndex] = React.useState();
    $9f79659886946c16$export$e5c5a5f917a5871c(()=>{
        if (content) setContentZIndex(window.getComputedStyle(content).zIndex);
    }, [
        content
    ]); // When the viewport becomes scrollable at the top, the scroll up button will mount.
    // Because it is part of the normal flow, it will push down the viewport, thus throwing our
    // trigger => selectedItem alignment off by the amount the viewport was pushed down.
    // We wait for this to happen and then re-run the positining logic one more time to account for it.
    const handleScrollButtonChange = React.useCallback((node)=>{
        if (node && shouldRepositionRef.current === true) {
            position();
            focusSelectedItem === null || focusSelectedItem === void 0 || focusSelectedItem();
            shouldRepositionRef.current = false;
        }
    }, [
        position,
        focusSelectedItem
    ]);
    return /*#__PURE__*/ React.createElement($cc7e05a45900e73f$var$SelectViewportProvider, {
        scope: __scopeSelect,
        contentWrapper: contentWrapper,
        shouldExpandOnScrollRef: shouldExpandOnScrollRef,
        onScrollButtonChange: handleScrollButtonChange
    }, /*#__PURE__*/ React.createElement("div", {
        ref: setContentWrapper,
        style: {
            display: 'flex',
            flexDirection: 'column',
            position: 'fixed',
            zIndex: contentZIndex
        }
    }, /*#__PURE__*/ React.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, popperProps, {
        ref: composedRefs,
        style: {
            // When we get the height of the content, it includes borders. If we were to set
            // the height without having `boxSizing: 'border-box'` it would be too big.
            boxSizing: 'border-box',
            // We need to ensure the content doesn't get taller than the wrapper
            maxHeight: '100%',
            ...popperProps.style
        }
    }))));
});
const $cc7e05a45900e73f$var$SelectPopperPosition = /*#__PURE__*/ React.forwardRef((props, forwardedRef)=>{
    const { __scopeSelect: __scopeSelect , align: align = 'start' , collisionPadding: collisionPadding = $cc7e05a45900e73f$var$CONTENT_MARGIN , ...popperProps } = props;
    const popperScope = $cc7e05a45900e73f$var$usePopperScope(__scopeSelect);
    return /*#__PURE__*/ React.createElement($cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2, _extends({}, popperScope, popperProps, {
        ref: forwardedRef,
        align: align,
        collisionPadding: collisionPadding,
        style: {
            // Ensure border-box for floating-ui calculations
            boxSizing: 'border-box',
            ...popperProps.style,
            '--radix-select-content-transform-origin': 'var(--radix-popper-transform-origin)',
            '--radix-select-content-available-width': 'var(--radix-popper-available-width)',
            '--radix-select-content-available-height': 'var(--radix-popper-available-height)',
            '--radix-select-trigger-width': 'var(--radix-popper-anchor-width)',
            '--radix-select-trigger-height': 'var(--radix-popper-anchor-height)'
        }
    }));
});
/* -------------------------------------------------------------------------------------------------
 * SelectViewport
 * -----------------------------------------------------------------------------------------------*/ const [$cc7e05a45900e73f$var$SelectViewportProvider, $cc7e05a45900e73f$var$useSelectViewportContext] = $cc7e05a45900e73f$var$createSelectContext($cc7e05a45900e73f$var$CONTENT_NAME, {});
const $cc7e05a45900e73f$var$VIEWPORT_NAME = 'SelectViewport';
const $cc7e05a45900e73f$export$9ed6e7b40248d36d = /*#__PURE__*/ React.forwardRef((props, forwardedRef)=>{
    const { __scopeSelect: __scopeSelect , ...viewportProps } = props;
    const contentContext = $cc7e05a45900e73f$var$useSelectContentContext($cc7e05a45900e73f$var$VIEWPORT_NAME, __scopeSelect);
    const viewportContext = $cc7e05a45900e73f$var$useSelectViewportContext($cc7e05a45900e73f$var$VIEWPORT_NAME, __scopeSelect);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, contentContext.onViewportChange);
    const prevScrollTopRef = React.useRef(0);
    return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement("style", {
        dangerouslySetInnerHTML: {
            __html: `[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}`
        }
    }), /*#__PURE__*/ React.createElement($cc7e05a45900e73f$var$Collection.Slot, {
        scope: __scopeSelect
    }, /*#__PURE__*/ React.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
        "data-radix-select-viewport": "",
        role: "presentation"
    }, viewportProps, {
        ref: composedRefs,
        style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: 'relative',
            flex: 1,
            overflow: 'auto',
            ...viewportProps.style
        },
        onScroll: $e42e1063c40fb3ef$export$b9ecd428b558ff10(viewportProps.onScroll, (event)=>{
            const viewport = event.currentTarget;
            const { contentWrapper: contentWrapper , shouldExpandOnScrollRef: shouldExpandOnScrollRef  } = viewportContext;
            if (shouldExpandOnScrollRef !== null && shouldExpandOnScrollRef !== void 0 && shouldExpandOnScrollRef.current && contentWrapper) {
                const scrolledBy = Math.abs(prevScrollTopRef.current - viewport.scrollTop);
                if (scrolledBy > 0) {
                    const availableHeight = window.innerHeight - $cc7e05a45900e73f$var$CONTENT_MARGIN * 2;
                    const cssMinHeight = parseFloat(contentWrapper.style.minHeight);
                    const cssHeight = parseFloat(contentWrapper.style.height);
                    const prevHeight = Math.max(cssMinHeight, cssHeight);
                    if (prevHeight < availableHeight) {
                        const nextHeight = prevHeight + scrolledBy;
                        const clampedNextHeight = Math.min(availableHeight, nextHeight);
                        const heightDiff = nextHeight - clampedNextHeight;
                        contentWrapper.style.height = clampedNextHeight + 'px';
                        if (contentWrapper.style.bottom === '0px') {
                            viewport.scrollTop = heightDiff > 0 ? heightDiff : 0; // ensure the content stays pinned to the bottom
                            contentWrapper.style.justifyContent = 'flex-end';
                        }
                    }
                }
            }
            prevScrollTopRef.current = viewport.scrollTop;
        })
    }))));
});
/* -------------------------------------------------------------------------------------------------
 * SelectGroup
 * -----------------------------------------------------------------------------------------------*/ const $cc7e05a45900e73f$var$GROUP_NAME = 'SelectGroup';
const [$cc7e05a45900e73f$var$SelectGroupContextProvider, $cc7e05a45900e73f$var$useSelectGroupContext] = $cc7e05a45900e73f$var$createSelectContext($cc7e05a45900e73f$var$GROUP_NAME);
const $cc7e05a45900e73f$export$ee25a334c55de1f4 = /*#__PURE__*/ React.forwardRef((props, forwardedRef)=>{
    const { __scopeSelect: __scopeSelect , ...groupProps } = props;
    const groupId = $1746a345f3d73bb7$export$f680877a34711e37();
    return /*#__PURE__*/ React.createElement($cc7e05a45900e73f$var$SelectGroupContextProvider, {
        scope: __scopeSelect,
        id: groupId
    }, /*#__PURE__*/ React.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
        role: "group",
        "aria-labelledby": groupId
    }, groupProps, {
        ref: forwardedRef
    })));
});
/* -------------------------------------------------------------------------------------------------
 * SelectItem
 * -----------------------------------------------------------------------------------------------*/ const $cc7e05a45900e73f$var$ITEM_NAME = 'SelectItem';
const [$cc7e05a45900e73f$var$SelectItemContextProvider, $cc7e05a45900e73f$var$useSelectItemContext] = $cc7e05a45900e73f$var$createSelectContext($cc7e05a45900e73f$var$ITEM_NAME);
const $cc7e05a45900e73f$export$13ef48a934230896 = /*#__PURE__*/ React.forwardRef((props, forwardedRef)=>{
    const { __scopeSelect: __scopeSelect , value: value , disabled: disabled = false , textValue: textValueProp , ...itemProps } = props;
    const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$ITEM_NAME, __scopeSelect);
    const contentContext = $cc7e05a45900e73f$var$useSelectContentContext($cc7e05a45900e73f$var$ITEM_NAME, __scopeSelect);
    const isSelected = context.value === value;
    const [textValue, setTextValue] = React.useState(textValueProp !== null && textValueProp !== void 0 ? textValueProp : '');
    const [isFocused, setIsFocused] = React.useState(false);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, (node)=>{
        var _contentContext$itemR;
        return (_contentContext$itemR = contentContext.itemRefCallback) === null || _contentContext$itemR === void 0 ? void 0 : _contentContext$itemR.call(contentContext, node, value, disabled);
    });
    const textId = $1746a345f3d73bb7$export$f680877a34711e37();
    const handleSelect = ()=>{
        if (!disabled) {
            context.onValueChange(value);
            context.onOpenChange(false);
        }
    };
    return /*#__PURE__*/ React.createElement($cc7e05a45900e73f$var$SelectItemContextProvider, {
        scope: __scopeSelect,
        value: value,
        disabled: disabled,
        textId: textId,
        isSelected: isSelected,
        onItemTextChange: React.useCallback((node)=>{
            setTextValue((prevTextValue)=>{
                var _node$textContent;
                return prevTextValue || ((_node$textContent = node === null || node === void 0 ? void 0 : node.textContent) !== null && _node$textContent !== void 0 ? _node$textContent : '').trim();
            });
        }, [])
    }, /*#__PURE__*/ React.createElement($cc7e05a45900e73f$var$Collection.ItemSlot, {
        scope: __scopeSelect,
        value: value,
        disabled: disabled,
        textValue: textValue
    }, /*#__PURE__*/ React.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
        role: "option",
        "aria-labelledby": textId,
        "data-highlighted": isFocused ? '' : undefined // `isFocused` caveat fixes stuttering in VoiceOver
        ,
        "aria-selected": isSelected && isFocused,
        "data-state": isSelected ? 'checked' : 'unchecked',
        "aria-disabled": disabled || undefined,
        "data-disabled": disabled ? '' : undefined,
        tabIndex: disabled ? undefined : -1
    }, itemProps, {
        ref: composedRefs,
        onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(itemProps.onFocus, ()=>setIsFocused(true)
        ),
        onBlur: $e42e1063c40fb3ef$export$b9ecd428b558ff10(itemProps.onBlur, ()=>setIsFocused(false)
        ),
        onPointerUp: $e42e1063c40fb3ef$export$b9ecd428b558ff10(itemProps.onPointerUp, handleSelect),
        onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(itemProps.onPointerMove, (event)=>{
            if (disabled) {
                var _contentContext$onIte;
                (_contentContext$onIte = contentContext.onItemLeave) === null || _contentContext$onIte === void 0 || _contentContext$onIte.call(contentContext);
            } else // even though safari doesn't support this option, it's acceptable
            // as it only means it might scroll a few pixels when using the pointer.
            event.currentTarget.focus({
                preventScroll: true
            });
        }),
        onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(itemProps.onPointerLeave, (event)=>{
            if (event.currentTarget === document.activeElement) {
                var _contentContext$onIte2;
                (_contentContext$onIte2 = contentContext.onItemLeave) === null || _contentContext$onIte2 === void 0 || _contentContext$onIte2.call(contentContext);
            }
        }),
        onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(itemProps.onKeyDown, (event)=>{
            var _contentContext$searc;
            const isTypingAhead = ((_contentContext$searc = contentContext.searchRef) === null || _contentContext$searc === void 0 ? void 0 : _contentContext$searc.current) !== '';
            if (isTypingAhead && event.key === ' ') return;
            if ($cc7e05a45900e73f$var$SELECTION_KEYS.includes(event.key)) handleSelect(); // prevent page scroll if using the space key to select an item
            if (event.key === ' ') event.preventDefault();
        })
    }))));
});
/* -------------------------------------------------------------------------------------------------
 * SelectItemText
 * -----------------------------------------------------------------------------------------------*/ const $cc7e05a45900e73f$var$ITEM_TEXT_NAME = 'SelectItemText';
const $cc7e05a45900e73f$export$3572fb0fb821ff49 = /*#__PURE__*/ React.forwardRef((props, forwardedRef)=>{
    // We ignore `className` and `style` as this part shouldn't be styled.
    const { __scopeSelect: __scopeSelect , className: className , style: style , ...itemTextProps } = props;
    const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$ITEM_TEXT_NAME, __scopeSelect);
    const contentContext = $cc7e05a45900e73f$var$useSelectContentContext($cc7e05a45900e73f$var$ITEM_TEXT_NAME, __scopeSelect);
    const itemContext = $cc7e05a45900e73f$var$useSelectItemContext($cc7e05a45900e73f$var$ITEM_TEXT_NAME, __scopeSelect);
    const nativeOptionsContext = $cc7e05a45900e73f$var$useSelectNativeOptionsContext($cc7e05a45900e73f$var$ITEM_TEXT_NAME, __scopeSelect);
    const [itemTextNode, setItemTextNode] = React.useState(null);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, (node)=>setItemTextNode(node)
    , itemContext.onItemTextChange, (node)=>{
        var _contentContext$itemT;
        return (_contentContext$itemT = contentContext.itemTextRefCallback) === null || _contentContext$itemT === void 0 ? void 0 : _contentContext$itemT.call(contentContext, node, itemContext.value, itemContext.disabled);
    });
    const textContent = itemTextNode === null || itemTextNode === void 0 ? void 0 : itemTextNode.textContent;
    const nativeOption = React.useMemo(()=>/*#__PURE__*/ React.createElement("option", {
            key: itemContext.value,
            value: itemContext.value,
            disabled: itemContext.disabled
        }, textContent)
    , [
        itemContext.disabled,
        itemContext.value,
        textContent
    ]);
    const { onNativeOptionAdd: onNativeOptionAdd , onNativeOptionRemove: onNativeOptionRemove  } = nativeOptionsContext;
    $9f79659886946c16$export$e5c5a5f917a5871c(()=>{
        onNativeOptionAdd(nativeOption);
        return ()=>onNativeOptionRemove(nativeOption)
        ;
    }, [
        onNativeOptionAdd,
        onNativeOptionRemove,
        nativeOption
    ]);
    return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({
        id: itemContext.textId
    }, itemTextProps, {
        ref: composedRefs
    })), itemContext.isSelected && context.valueNode && !context.valueNodeHasChildren ? /*#__PURE__*/ ReactDOM.createPortal(itemTextProps.children, context.valueNode) : null);
});
/* -------------------------------------------------------------------------------------------------
 * SelectItemIndicator
 * -----------------------------------------------------------------------------------------------*/ const $cc7e05a45900e73f$var$ITEM_INDICATOR_NAME = 'SelectItemIndicator';
const $cc7e05a45900e73f$export$6b9198de19accfe6 = /*#__PURE__*/ React.forwardRef((props, forwardedRef)=>{
    const { __scopeSelect: __scopeSelect , ...itemIndicatorProps } = props;
    const itemContext = $cc7e05a45900e73f$var$useSelectItemContext($cc7e05a45900e73f$var$ITEM_INDICATOR_NAME, __scopeSelect);
    return itemContext.isSelected ? /*#__PURE__*/ React.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({
        "aria-hidden": true
    }, itemIndicatorProps, {
        ref: forwardedRef
    })) : null;
});
/* -----------------------------------------------------------------------------------------------*/ const $cc7e05a45900e73f$var$BubbleSelect = /*#__PURE__*/ React.forwardRef((props, forwardedRef)=>{
    const { value: value , ...selectProps } = props;
    const ref = React.useRef(null);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
    const prevValue = $010c2913dbd2fe3d$export$5cae361ad82dce8b(value); // Bubble value change to parents (e.g form change event)
    React.useEffect(()=>{
        const select = ref.current;
        const selectProto = window.HTMLSelectElement.prototype;
        const descriptor = Object.getOwnPropertyDescriptor(selectProto, 'value');
        const setValue = descriptor.set;
        if (prevValue !== value && setValue) {
            const event = new Event('change', {
                bubbles: true
            });
            setValue.call(select, value);
            select.dispatchEvent(event);
        }
    }, [
        prevValue,
        value
    ]);
    /**
   * We purposefully use a `select` here to support form autofill as much
   * as possible.
   *
   * We purposefully do not add the `value` attribute here to allow the value
   * to be set programatically and bubble to any parent form `onChange` event.
   * Adding the `value` will cause React to consider the programatic
   * dispatch a duplicate and it will get swallowed.
   *
   * We use `VisuallyHidden` rather than `display: "none"` because Safari autofill
   * won't work otherwise.
   */ return /*#__PURE__*/ React.createElement($ea1ef594cf570d83$export$439d29a4e110a164, {
        asChild: true
    }, /*#__PURE__*/ React.createElement("select", _extends({}, selectProps, {
        ref: composedRefs,
        defaultValue: value
    })));
});
$cc7e05a45900e73f$var$BubbleSelect.displayName = 'BubbleSelect';
function $cc7e05a45900e73f$var$useTypeaheadSearch(onSearchChange) {
    const handleSearchChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onSearchChange);
    const searchRef = React.useRef('');
    const timerRef = React.useRef(0);
    const handleTypeaheadSearch = React.useCallback((key)=>{
        const search = searchRef.current + key;
        handleSearchChange(search);
        (function updateSearch(value) {
            searchRef.current = value;
            window.clearTimeout(timerRef.current); // Reset `searchRef` 1 second after it was last updated
            if (value !== '') timerRef.current = window.setTimeout(()=>updateSearch('')
            , 1000);
        })(search);
    }, [
        handleSearchChange
    ]);
    const resetTypeahead = React.useCallback(()=>{
        searchRef.current = '';
        window.clearTimeout(timerRef.current);
    }, []);
    React.useEffect(()=>{
        return ()=>window.clearTimeout(timerRef.current)
        ;
    }, []);
    return [
        searchRef,
        handleTypeaheadSearch,
        resetTypeahead
    ];
}
/**
 * This is the "meat" of the typeahead matching logic. It takes in a list of items,
 * the search and the current item, and returns the next item (or `undefined`).
 *
 * We normalize the search because if a user has repeatedly pressed a character,
 * we want the exact same behavior as if we only had that one character
 * (ie. cycle through items starting with that character)
 *
 * We also reorder the items by wrapping the array around the current item.
 * This is so we always look forward from the current item, and picking the first
 * item will always be the correct one.
 *
 * Finally, if the normalized search is exactly one character, we exclude the
 * current item from the values because otherwise it would be the first to match always
 * and focus would never move. This is as opposed to the regular case, where we
 * don't want focus to move if the current item still matches.
 */ function $cc7e05a45900e73f$var$findNextItem(items, search, currentItem) {
    const isRepeated = search.length > 1 && Array.from(search).every((char)=>char === search[0]
    );
    const normalizedSearch = isRepeated ? search[0] : search;
    const currentItemIndex = currentItem ? items.indexOf(currentItem) : -1;
    let wrappedItems = $cc7e05a45900e73f$var$wrapArray(items, Math.max(currentItemIndex, 0));
    const excludeCurrentItem = normalizedSearch.length === 1;
    if (excludeCurrentItem) wrappedItems = wrappedItems.filter((v)=>v !== currentItem
    );
    const nextItem = wrappedItems.find((item)=>item.textValue.toLowerCase().startsWith(normalizedSearch.toLowerCase())
    );
    return nextItem !== currentItem ? nextItem : undefined;
}
/**
 * Wraps an array around itself at a given start index
 * Example: `wrapArray(['a', 'b', 'c', 'd'], 2) === ['c', 'd', 'a', 'b']`
 */ function $cc7e05a45900e73f$var$wrapArray(array, startIndex) {
    return array.map((_, index)=>array[(startIndex + index) % array.length]
    );
}
const $cc7e05a45900e73f$export$be92b6f5f03c0fe9 = $cc7e05a45900e73f$export$ef9b1a59e592288f;
const $cc7e05a45900e73f$export$7c6e2c02157bb7d2 = $cc7e05a45900e73f$export$c973a4b3cb86a03d;
const $cc7e05a45900e73f$export$d5c6c08dc2d3ca7 = $cc7e05a45900e73f$export$9ed6e7b40248d36d;
const $cc7e05a45900e73f$export$eb2fcfdbd7ba97d4 = $cc7e05a45900e73f$export$ee25a334c55de1f4;
const $cc7e05a45900e73f$export$6d08773d2e66f8f2 = $cc7e05a45900e73f$export$13ef48a934230896;
const $cc7e05a45900e73f$export$d6e5bf9c43ea9319 = $cc7e05a45900e73f$export$3572fb0fb821ff49;
const $cc7e05a45900e73f$export$c3468e2714d175fa = $cc7e05a45900e73f$export$6b9198de19accfe6;

function CheckIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React__namespace.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M4.5 12.75l6 6 9-13.5"
  }));
}
const ForwardRef$1 = React__namespace.forwardRef(CheckIcon);
var CheckIcon$1 = ForwardRef$1;

var classnamesExports = {};
var classnames = {
  get exports(){ return classnamesExports; },
  set exports(v){ classnamesExports = v; },
};

/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

(function (module) {
	/* global define */

	(function () {

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg) && arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else {
			window.classNames = classNames;
		}
	}());
} (classnames));

var cx = classnamesExports;

const Select = ({ defaultValue, values, open, setOpen, onChange }) => {
  return /* @__PURE__ */ React__default["default"].createElement(
    $cc7e05a45900e73f$export$be92b6f5f03c0fe9,
    {
      defaultValue,
      onValueChange: onChange,
      open,
      onOpenChange: (e) => setOpen(e)
    },
    /* @__PURE__ */ React__default["default"].createElement($cc7e05a45900e73f$export$7c6e2c02157bb7d2, { className: "z-50 top-2" }, /* @__PURE__ */ React__default["default"].createElement($cc7e05a45900e73f$export$d5c6c08dc2d3ca7, { className: "bg-white p-2 rounded-lg shadow-lg" }, /* @__PURE__ */ React__default["default"].createElement($cc7e05a45900e73f$export$eb2fcfdbd7ba97d4, null, values.map((f, i) => /* @__PURE__ */ React__default["default"].createElement(
      $cc7e05a45900e73f$export$6d08773d2e66f8f2,
      {
        key: i,
        value: f,
        className: cx(
          "relative flex items-center px-8 py-2 rounded-md text-sm text-gray-700 font-medium",
          "hover:opacity-70 cursor-pointer select-none"
        )
      },
      /* @__PURE__ */ React__default["default"].createElement($cc7e05a45900e73f$export$d6e5bf9c43ea9319, null, f),
      /* @__PURE__ */ React__default["default"].createElement($cc7e05a45900e73f$export$c3468e2714d175fa, { className: "absolute left-2 inline-flex items-center" }, /* @__PURE__ */ React__default["default"].createElement(CheckIcon$1, null))
    )))))
  );
};

function $fe963b355347cc68$export$3e6543de14f8614f(initialState, machine) {
    return React.useReducer((state, event)=>{
        const nextState = machine[state][event];
        return nextState !== null && nextState !== void 0 ? nextState : state;
    }, initialState);
}


const $921a889cee6df7e8$export$99c2b779aa4e8b8b = (props)=>{
    const { present: present , children: children  } = props;
    const presence = $921a889cee6df7e8$var$usePresence(present);
    const child = typeof children === 'function' ? children({
        present: presence.isPresent
    }) : React.Children.only(children);
    const ref = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(presence.ref, child.ref);
    const forceMount = typeof children === 'function';
    return forceMount || presence.isPresent ? /*#__PURE__*/ React.cloneElement(child, {
        ref: ref
    }) : null;
};
$921a889cee6df7e8$export$99c2b779aa4e8b8b.displayName = 'Presence';
/* -------------------------------------------------------------------------------------------------
 * usePresence
 * -----------------------------------------------------------------------------------------------*/ function $921a889cee6df7e8$var$usePresence(present) {
    const [node1, setNode] = React.useState();
    const stylesRef = React.useRef({});
    const prevPresentRef = React.useRef(present);
    const prevAnimationNameRef = React.useRef('none');
    const initialState = present ? 'mounted' : 'unmounted';
    const [state, send] = $fe963b355347cc68$export$3e6543de14f8614f(initialState, {
        mounted: {
            UNMOUNT: 'unmounted',
            ANIMATION_OUT: 'unmountSuspended'
        },
        unmountSuspended: {
            MOUNT: 'mounted',
            ANIMATION_END: 'unmounted'
        },
        unmounted: {
            MOUNT: 'mounted'
        }
    });
    React.useEffect(()=>{
        const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
        prevAnimationNameRef.current = state === 'mounted' ? currentAnimationName : 'none';
    }, [
        state
    ]);
    $9f79659886946c16$export$e5c5a5f917a5871c(()=>{
        const styles = stylesRef.current;
        const wasPresent = prevPresentRef.current;
        const hasPresentChanged = wasPresent !== present;
        if (hasPresentChanged) {
            const prevAnimationName = prevAnimationNameRef.current;
            const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(styles);
            if (present) send('MOUNT');
            else if (currentAnimationName === 'none' || (styles === null || styles === void 0 ? void 0 : styles.display) === 'none') // If there is no exit animation or the element is hidden, animations won't run
            // so we unmount instantly
            send('UNMOUNT');
            else {
                /**
         * When `present` changes to `false`, we check changes to animation-name to
         * determine whether an animation has started. We chose this approach (reading
         * computed styles) because there is no `animationrun` event and `animationstart`
         * fires after `animation-delay` has expired which would be too late.
         */ const isAnimating = prevAnimationName !== currentAnimationName;
                if (wasPresent && isAnimating) send('ANIMATION_OUT');
                else send('UNMOUNT');
            }
            prevPresentRef.current = present;
        }
    }, [
        present,
        send
    ]);
    $9f79659886946c16$export$e5c5a5f917a5871c(()=>{
        if (node1) {
            /**
       * Triggering an ANIMATION_OUT during an ANIMATION_IN will fire an `animationcancel`
       * event for ANIMATION_IN after we have entered `unmountSuspended` state. So, we
       * make sure we only trigger ANIMATION_END for the currently active animation.
       */ const handleAnimationEnd = (event)=>{
                const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
                const isCurrentAnimation = currentAnimationName.includes(event.animationName);
                if (event.target === node1 && isCurrentAnimation) // With React 18 concurrency this update is applied
                // a frame after the animation ends, creating a flash of visible content.
                // By manually flushing we ensure they sync within a frame, removing the flash.
                ReactDOM.flushSync(()=>send('ANIMATION_END')
                );
            };
            const handleAnimationStart = (event)=>{
                if (event.target === node1) // if animation occurred, store its name as the previous animation.
                prevAnimationNameRef.current = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
            };
            node1.addEventListener('animationstart', handleAnimationStart);
            node1.addEventListener('animationcancel', handleAnimationEnd);
            node1.addEventListener('animationend', handleAnimationEnd);
            return ()=>{
                node1.removeEventListener('animationstart', handleAnimationStart);
                node1.removeEventListener('animationcancel', handleAnimationEnd);
                node1.removeEventListener('animationend', handleAnimationEnd);
            };
        } else // Transition to the unmounted state if the node is removed prematurely.
        // We avoid doing so during cleanup as the node may change but still exist.
        send('ANIMATION_END');
    }, [
        node1,
        send
    ]);
    return {
        isPresent: [
            'mounted',
            'unmountSuspended'
        ].includes(state),
        ref: React.useCallback((node)=>{
            if (node) stylesRef.current = getComputedStyle(node);
            setNode(node);
        }, [])
    };
}
/* -----------------------------------------------------------------------------------------------*/ function $921a889cee6df7e8$var$getAnimationName(styles) {
    return (styles === null || styles === void 0 ? void 0 : styles.animationName) || 'none';
}

/* -------------------------------------------------------------------------------------------------
 * Dialog
 * -----------------------------------------------------------------------------------------------*/ const $5d3850c4d0b4e6c7$var$DIALOG_NAME = 'Dialog';
const [$5d3850c4d0b4e6c7$var$createDialogContext, $5d3850c4d0b4e6c7$export$cc702773b8ea3e41] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($5d3850c4d0b4e6c7$var$DIALOG_NAME);
const [$5d3850c4d0b4e6c7$var$DialogProvider, $5d3850c4d0b4e6c7$var$useDialogContext] = $5d3850c4d0b4e6c7$var$createDialogContext($5d3850c4d0b4e6c7$var$DIALOG_NAME);
const $5d3850c4d0b4e6c7$export$3ddf2d174ce01153 = (props)=>{
    const { __scopeDialog: __scopeDialog , children: children , open: openProp , defaultOpen: defaultOpen , onOpenChange: onOpenChange , modal: modal = true  } = props;
    const triggerRef = React.useRef(null);
    const contentRef = React.useRef(null);
    const [open = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: onOpenChange
    });
    return /*#__PURE__*/ React.createElement($5d3850c4d0b4e6c7$var$DialogProvider, {
        scope: __scopeDialog,
        triggerRef: triggerRef,
        contentRef: contentRef,
        contentId: $1746a345f3d73bb7$export$f680877a34711e37(),
        titleId: $1746a345f3d73bb7$export$f680877a34711e37(),
        descriptionId: $1746a345f3d73bb7$export$f680877a34711e37(),
        open: open,
        onOpenChange: setOpen,
        onOpenToggle: React.useCallback(()=>setOpen((prevOpen)=>!prevOpen
            )
        , [
            setOpen
        ]),
        modal: modal
    }, children);
};
/* -------------------------------------------------------------------------------------------------
 * DialogPortal
 * -----------------------------------------------------------------------------------------------*/ const $5d3850c4d0b4e6c7$var$PORTAL_NAME = 'DialogPortal';
const [$5d3850c4d0b4e6c7$var$PortalProvider, $5d3850c4d0b4e6c7$var$usePortalContext] = $5d3850c4d0b4e6c7$var$createDialogContext($5d3850c4d0b4e6c7$var$PORTAL_NAME, {
    forceMount: undefined
});
const $5d3850c4d0b4e6c7$export$dad7c95542bacce0 = (props)=>{
    const { __scopeDialog: __scopeDialog , forceMount: forceMount , children: children , container: container  } = props;
    const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$PORTAL_NAME, __scopeDialog);
    return /*#__PURE__*/ React.createElement($5d3850c4d0b4e6c7$var$PortalProvider, {
        scope: __scopeDialog,
        forceMount: forceMount
    }, React.Children.map(children, (child)=>/*#__PURE__*/ React.createElement($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
            present: forceMount || context.open
        }, /*#__PURE__*/ React.createElement($f1701beae083dbae$export$602eac185826482c, {
            asChild: true,
            container: container
        }, child))
    ));
};
/* -------------------------------------------------------------------------------------------------
 * DialogOverlay
 * -----------------------------------------------------------------------------------------------*/ const $5d3850c4d0b4e6c7$var$OVERLAY_NAME = 'DialogOverlay';
const $5d3850c4d0b4e6c7$export$bd1d06c79be19e17 = /*#__PURE__*/ React.forwardRef((props, forwardedRef)=>{
    const portalContext = $5d3850c4d0b4e6c7$var$usePortalContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, props.__scopeDialog);
    const { forceMount: forceMount = portalContext.forceMount , ...overlayProps } = props;
    const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, props.__scopeDialog);
    return context.modal ? /*#__PURE__*/ React.createElement($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
        present: forceMount || context.open
    }, /*#__PURE__*/ React.createElement($5d3850c4d0b4e6c7$var$DialogOverlayImpl, _extends({}, overlayProps, {
        ref: forwardedRef
    }))) : null;
});
const $5d3850c4d0b4e6c7$var$DialogOverlayImpl = /*#__PURE__*/ React.forwardRef((props, forwardedRef)=>{
    const { __scopeDialog: __scopeDialog , ...overlayProps } = props;
    const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, __scopeDialog);
    return(/*#__PURE__*/ // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    React.createElement($67UHm$RemoveScroll, {
        as: $5e63c961fc1ce211$export$8c6ed5c666ac1360,
        allowPinchZoom: true,
        shards: [
            context.contentRef
        ]
    }, /*#__PURE__*/ React.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
        "data-state": $5d3850c4d0b4e6c7$var$getState(context.open)
    }, overlayProps, {
        ref: forwardedRef // We re-enable pointer-events prevented by `Dialog.Content` to allow scrolling the overlay.
        ,
        style: {
            pointerEvents: 'auto',
            ...overlayProps.style
        }
    }))));
});
/* -------------------------------------------------------------------------------------------------
 * DialogContent
 * -----------------------------------------------------------------------------------------------*/ const $5d3850c4d0b4e6c7$var$CONTENT_NAME = 'DialogContent';
const $5d3850c4d0b4e6c7$export$b6d9565de1e068cf = /*#__PURE__*/ React.forwardRef((props, forwardedRef)=>{
    const portalContext = $5d3850c4d0b4e6c7$var$usePortalContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
    const { forceMount: forceMount = portalContext.forceMount , ...contentProps } = props;
    const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
    return /*#__PURE__*/ React.createElement($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
        present: forceMount || context.open
    }, context.modal ? /*#__PURE__*/ React.createElement($5d3850c4d0b4e6c7$var$DialogContentModal, _extends({}, contentProps, {
        ref: forwardedRef
    })) : /*#__PURE__*/ React.createElement($5d3850c4d0b4e6c7$var$DialogContentNonModal, _extends({}, contentProps, {
        ref: forwardedRef
    })));
});
/* -----------------------------------------------------------------------------------------------*/ const $5d3850c4d0b4e6c7$var$DialogContentModal = /*#__PURE__*/ React.forwardRef((props, forwardedRef)=>{
    const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
    const contentRef = React.useRef(null);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.contentRef, contentRef); // aria-hide everything except the content (better supported equivalent to setting aria-modal)
    React.useEffect(()=>{
        const content = contentRef.current;
        if (content) return hideOthers(content);
    }, []);
    return /*#__PURE__*/ React.createElement($5d3850c4d0b4e6c7$var$DialogContentImpl, _extends({}, props, {
        ref: composedRefs // we make sure focus isn't trapped once `DialogContent` has been closed
        ,
        trapFocus: context.open,
        disableOutsidePointerEvents: true,
        onCloseAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onCloseAutoFocus, (event)=>{
            var _context$triggerRef$c;
            event.preventDefault();
            (_context$triggerRef$c = context.triggerRef.current) === null || _context$triggerRef$c === void 0 || _context$triggerRef$c.focus();
        }),
        onPointerDownOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownOutside, (event)=>{
            const originalEvent = event.detail.originalEvent;
            const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
            const isRightClick = originalEvent.button === 2 || ctrlLeftClick; // If the event is a right-click, we shouldn't close because
            // it is effectively as if we right-clicked the `Overlay`.
            if (isRightClick) event.preventDefault();
        }) // When focus is trapped, a `focusout` event may still happen.
        ,
        onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocusOutside, (event)=>event.preventDefault()
        )
    }));
});
/* -----------------------------------------------------------------------------------------------*/ const $5d3850c4d0b4e6c7$var$DialogContentNonModal = /*#__PURE__*/ React.forwardRef((props, forwardedRef)=>{
    const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
    const hasInteractedOutsideRef = React.useRef(false);
    const hasPointerDownOutsideRef = React.useRef(false);
    return /*#__PURE__*/ React.createElement($5d3850c4d0b4e6c7$var$DialogContentImpl, _extends({}, props, {
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (event)=>{
            var _props$onCloseAutoFoc;
            (_props$onCloseAutoFoc = props.onCloseAutoFocus) === null || _props$onCloseAutoFoc === void 0 || _props$onCloseAutoFoc.call(props, event);
            if (!event.defaultPrevented) {
                var _context$triggerRef$c2;
                if (!hasInteractedOutsideRef.current) (_context$triggerRef$c2 = context.triggerRef.current) === null || _context$triggerRef$c2 === void 0 || _context$triggerRef$c2.focus(); // Always prevent auto focus because we either focus manually or want user agent focus
                event.preventDefault();
            }
            hasInteractedOutsideRef.current = false;
            hasPointerDownOutsideRef.current = false;
        },
        onInteractOutside: (event)=>{
            var _props$onInteractOuts, _context$triggerRef$c3;
            (_props$onInteractOuts = props.onInteractOutside) === null || _props$onInteractOuts === void 0 || _props$onInteractOuts.call(props, event);
            if (!event.defaultPrevented) {
                hasInteractedOutsideRef.current = true;
                if (event.detail.originalEvent.type === 'pointerdown') hasPointerDownOutsideRef.current = true;
            } // Prevent dismissing when clicking the trigger.
            // As the trigger is already setup to close, without doing so would
            // cause it to close and immediately open.
            const target = event.target;
            const targetIsTrigger = (_context$triggerRef$c3 = context.triggerRef.current) === null || _context$triggerRef$c3 === void 0 ? void 0 : _context$triggerRef$c3.contains(target);
            if (targetIsTrigger) event.preventDefault(); // On Safari if the trigger is inside a container with tabIndex={0}, when clicked
            // we will get the pointer down outside event on the trigger, but then a subsequent
            // focus outside event on the container, we ignore any focus outside event when we've
            // already had a pointer down outside event.
            if (event.detail.originalEvent.type === 'focusin' && hasPointerDownOutsideRef.current) event.preventDefault();
        }
    }));
});
/* -----------------------------------------------------------------------------------------------*/ const $5d3850c4d0b4e6c7$var$DialogContentImpl = /*#__PURE__*/ React.forwardRef((props, forwardedRef)=>{
    const { __scopeDialog: __scopeDialog , trapFocus: trapFocus , onOpenAutoFocus: onOpenAutoFocus , onCloseAutoFocus: onCloseAutoFocus , ...contentProps } = props;
    const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, __scopeDialog);
    const contentRef = React.useRef(null);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, contentRef); // Make sure the whole tree has focus guards as our `Dialog` will be
    // the last element in the DOM (beacuse of the `Portal`)
    $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c();
    return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement($d3863c46a17e8a28$export$20e40289641fbbb6, {
        asChild: true,
        loop: true,
        trapped: trapFocus,
        onMountAutoFocus: onOpenAutoFocus,
        onUnmountAutoFocus: onCloseAutoFocus
    }, /*#__PURE__*/ React.createElement($5cb92bef7577960e$export$177fb62ff3ec1f22, _extends({
        role: "dialog",
        id: context.contentId,
        "aria-describedby": context.descriptionId,
        "aria-labelledby": context.titleId,
        "data-state": $5d3850c4d0b4e6c7$var$getState(context.open)
    }, contentProps, {
        ref: composedRefs,
        onDismiss: ()=>context.onOpenChange(false)
    }))), false);
});
/* -------------------------------------------------------------------------------------------------
 * DialogTitle
 * -----------------------------------------------------------------------------------------------*/ const $5d3850c4d0b4e6c7$var$TITLE_NAME = 'DialogTitle';
const $5d3850c4d0b4e6c7$export$16f7638e4a34b909 = /*#__PURE__*/ React.forwardRef((props, forwardedRef)=>{
    const { __scopeDialog: __scopeDialog , ...titleProps } = props;
    const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$TITLE_NAME, __scopeDialog);
    return /*#__PURE__*/ React.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.h2, _extends({
        id: context.titleId
    }, titleProps, {
        ref: forwardedRef
    }));
});
/* -------------------------------------------------------------------------------------------------
 * DialogDescription
 * -----------------------------------------------------------------------------------------------*/ const $5d3850c4d0b4e6c7$var$DESCRIPTION_NAME = 'DialogDescription';
const $5d3850c4d0b4e6c7$export$94e94c2ec2c954d5 = /*#__PURE__*/ React.forwardRef((props, forwardedRef)=>{
    const { __scopeDialog: __scopeDialog , ...descriptionProps } = props;
    const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$DESCRIPTION_NAME, __scopeDialog);
    return /*#__PURE__*/ React.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.p, _extends({
        id: context.descriptionId
    }, descriptionProps, {
        ref: forwardedRef
    }));
});
/* -------------------------------------------------------------------------------------------------
 * DialogClose
 * -----------------------------------------------------------------------------------------------*/ const $5d3850c4d0b4e6c7$var$CLOSE_NAME = 'DialogClose';
const $5d3850c4d0b4e6c7$export$fba2fb7cd781b7ac = /*#__PURE__*/ React.forwardRef((props, forwardedRef)=>{
    const { __scopeDialog: __scopeDialog , ...closeProps } = props;
    const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CLOSE_NAME, __scopeDialog);
    return /*#__PURE__*/ React.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
        type: "button"
    }, closeProps, {
        ref: forwardedRef,
        onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, ()=>context.onOpenChange(false)
        )
    }));
});
/* -----------------------------------------------------------------------------------------------*/ function $5d3850c4d0b4e6c7$var$getState(open) {
    return open ? 'open' : 'closed';
}
const $5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9 = $5d3850c4d0b4e6c7$export$3ddf2d174ce01153;
const $5d3850c4d0b4e6c7$export$602eac185826482c = $5d3850c4d0b4e6c7$export$dad7c95542bacce0;
const $5d3850c4d0b4e6c7$export$c6fdb837b070b4ff = $5d3850c4d0b4e6c7$export$bd1d06c79be19e17;
const $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2 = $5d3850c4d0b4e6c7$export$b6d9565de1e068cf;
const $5d3850c4d0b4e6c7$export$f99233281efd08a0 = $5d3850c4d0b4e6c7$export$16f7638e4a34b909;
const $5d3850c4d0b4e6c7$export$393edc798c47379d = $5d3850c4d0b4e6c7$export$94e94c2ec2c954d5;
const $5d3850c4d0b4e6c7$export$f39c2d165cd861fe = $5d3850c4d0b4e6c7$export$fba2fb7cd781b7ac;

function XMarkIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React__namespace.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 18L18 6M6 6l12 12"
  }));
}
const ForwardRef = React__namespace.forwardRef(XMarkIcon);
var XMarkIcon$1 = ForwardRef;

const Dialog$3 = ({ open, setOpen, selectedElement, baseUrl }) => {
  const [url, setUrl] = React.useState("");
  const [urlText, setUrlText] = React.useState("");
  const [file, setFile] = React.useState(null);
  const input = React.useRef(null);
  React.useEffect(() => {
    var _a;
    setUrl((_a = selectedElement == null ? void 0 : selectedElement.getAttribute("src")) != null ? _a : "");
  }, [open]);
  const onUpload = async (e) => {
    e.preventDefault();
    const file2 = e.target.files[0];
    setFile(file2);
    const reader = new FileReader();
    reader.onload = (e2) => setUrl(e2.target.result);
    reader.readAsDataURL(file2);
  };
  const onSave = async () => {
    if (url === urlText) {
      selectedElement.src = url;
    } else {
      const formData = new FormData();
      formData.append("file-0", file);
      const uploadOptions = { method: "POST", body: formData };
      const res = await fetch(`${baseUrl}/api/builder/handle?type=data`, uploadOptions);
      const urls = await res.json();
      selectedElement.src = urls[0];
    }
    setOpen(false);
  };
  return /* @__PURE__ */ React__default["default"].createElement($5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9, { open, onOpenChange: setOpen }, /* @__PURE__ */ React__default["default"].createElement($5d3850c4d0b4e6c7$export$602eac185826482c, null, /* @__PURE__ */ React__default["default"].createElement($5d3850c4d0b4e6c7$export$c6fdb837b070b4ff, null, /* @__PURE__ */ React__default["default"].createElement(
    $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2,
    {
      className: cx(
        "fixed shadow bg-white rounded-lg p-4",
        "w-[95vw] max-w-md md:w-full",
        "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      )
    },
    /* @__PURE__ */ React__default["default"].createElement($5d3850c4d0b4e6c7$export$f99233281efd08a0, { className: "text-sm font-medium text-gray-900 dark:text-gray-100" }, "Upload Image"),
    /* @__PURE__ */ React__default["default"].createElement("div", { className: "mt-4 mb-4" }, !url ? /* @__PURE__ */ React__default["default"].createElement("div", null, /* @__PURE__ */ React__default["default"].createElement("div", { className: "flex justify-center mt-8 mb-4" }, /* @__PURE__ */ React__default["default"].createElement("input", { ref: input, type: "file", onChange: onUpload, style: { display: "none" } }), /* @__PURE__ */ React__default["default"].createElement(
      "button",
      {
        className: "rounded-md px-4 py-2 text-sm font-medium bg-transparent border-blue-500 text-blue-500 hover:bg-blue-700 hover:text-white border border-transparent",
        onClick: () => {
          var _a;
          (_a = input.current) == null ? void 0 : _a.click();
        }
      },
      "Upload"
    )), /* @__PURE__ */ React__default["default"].createElement("div", { className: "flex justify-center mb-4" }, "OR"), /* @__PURE__ */ React__default["default"].createElement("div", { className: "flex justify-center mb-4" }, /* @__PURE__ */ React__default["default"].createElement(
      "input",
      {
        type: "text",
        className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5",
        placeholder: "Eg. https://www.w3schools.com/html/pic_trulli.jpg",
        onChange: (e) => setUrlText(e.target.value)
      }
    ), /* @__PURE__ */ React__default["default"].createElement(
      "button",
      {
        onClick: () => setUrl(urlText),
        className: cx(
          "rounded-md px-4 py-2 text-sm font-medium bg-transparent border",
          "text-blue-500 hover:opacity-50 border border-transparent",
          `${urlText !== "" ? "hover:opacity-50" : "opacity-50 cursor-not-allowed"}`
        ),
        disabled: urlText === ""
      },
      "Set"
    ))) : /* @__PURE__ */ React__default["default"].createElement("img", { src: url })),
    /* @__PURE__ */ React__default["default"].createElement("div", { className: "mt-4 flex justify-end" }, /* @__PURE__ */ React__default["default"].createElement(
      "button",
      {
        style: { marginRight: "auto" },
        className: cx(
          "rounded-md px-4 py-2 text-sm font-medium bg-transparent border",
          "text-blue-500 hover:opacity-50 border border-transparent"
        ),
        onClick: () => {
          setUrl("");
          setUrlText("");
        }
      },
      "Replace"
    ), /* @__PURE__ */ React__default["default"].createElement(
      $5d3850c4d0b4e6c7$export$f39c2d165cd861fe,
      {
        onClick: () => {
          onSave();
        },
        className: cx(
          "inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium",
          `bg-blue-600 text-white border border-transparent ${url ? "hover:bg-blue-700" : "opacity-50 cursor-not-allowed"}`
        ),
        disabled: !url
      },
      "Save"
    )),
    /* @__PURE__ */ React__default["default"].createElement(
      $5d3850c4d0b4e6c7$export$f39c2d165cd861fe,
      {
        onClick: () => setOpen(false),
        className: cx("absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1")
      },
      /* @__PURE__ */ React__default["default"].createElement(XMarkIcon$1, { className: "h-4 w-4 text-gray-500 hover:text-gray-700" })
    )
  ))));
};

const capitalize = (text) => text[0].toUpperCase() + text.substring(1, text.length);
const typeOptions = ["url", "email", "submit"];
const methodOptions = ["GET", "POST"];
const Dialog$2 = ({ open, setOpen, selectedElement }) => {
  const [openSelect, setOpenSelect] = React.useState(false);
  const [url, setUrl] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [submitUrl, setSubmitUrl] = React.useState("");
  const [submitMethod, setSubmitMethod] = React.useState("GET");
  const [submitAsync, setSubmitAsync] = React.useState(true);
  const [methodSelect, setMethodSelect] = React.useState(true);
  const [newTab, setNewTab] = React.useState(true);
  const [type, setType] = React.useState("url");
  const onSave = () => {
    setOpen(false);
    if (type === "url") {
      if (newTab) {
        const source = `window.open('${url}', '_blank')`;
        selectedElement.setAttribute("onclick", source);
        selectedElement.setAttribute("type", "button");
      } else {
        const source = `window.location.href = '${url}'`;
        selectedElement.setAttribute("onclick", source);
        selectedElement.setAttribute("type", "button");
      }
    } else if (type === "email") {
      const source = `window.location.href = 'mailto:${email}'`;
      selectedElement.setAttribute("onclick", source);
      selectedElement.setAttribute("type", "button");
    } else if (type === "submit") {
      if (submitAsync) {
        const source = `
          const form = e.target.closest('form')

          const formData = new FormData()
          for (let e of form.elements) {
            if (e.type !== 'submit') {
              formData.append(e.id, e.type === 'radio' ? e.checked : e.value)
            }
          }

          const options = { method: '${submitMethod}', ...('${submitMethod}' !== 'GET' ? { body: formData } : {}), }
          fetch('${submitUrl}', options)
            .then((e) => e.text().then((d) => ({ ok: e.ok, text: d })))
            .then(({ ok, text }) => {
              alert(ok ? text ?? 'Success' : 'Something went wrong')
          })
        `;
        selectedElement.setAttribute("onclick", source);
        selectedElement.setAttribute("type", "button");
      } else {
        const source = `
          const form = e.target.closest('form')
          form.submit()
        `;
        selectedElement.setAttribute("onclick", source);
        selectedElement.setAttribute("type", "button");
      }
    }
  };
  return /* @__PURE__ */ React__default["default"].createElement($5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9, { open, onOpenChange: setOpen }, /* @__PURE__ */ React__default["default"].createElement($5d3850c4d0b4e6c7$export$602eac185826482c, null, /* @__PURE__ */ React__default["default"].createElement($5d3850c4d0b4e6c7$export$c6fdb837b070b4ff, null, /* @__PURE__ */ React__default["default"].createElement(
    $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2,
    {
      className: cx(
        "fixed shadow bg-white rounded-lg p-4",
        "w-[95vw] max-w-md md:w-full",
        "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      )
    },
    /* @__PURE__ */ React__default["default"].createElement($5d3850c4d0b4e6c7$export$f99233281efd08a0, { className: "text-sm font-medium text-gray-900 dark:text-gray-100" }, "Update Button"),
    /* @__PURE__ */ React__default["default"].createElement($5d3850c4d0b4e6c7$export$393edc798c47379d, { className: "mt-2 text-sm font-normal text-gray-700 dark:text-gray-400" }, /* @__PURE__ */ React__default["default"].createElement("div", { className: "mt-4 mb-4" }, /* @__PURE__ */ React__default["default"].createElement("div", null, /* @__PURE__ */ React__default["default"].createElement(
      "div",
      {
        className: "flex rounded py-2 px-4 transition cursor-pointer items-center ml-2 mb-4",
        onClick: () => setOpenSelect(true)
      },
      capitalize(type),
      " ",
      /* @__PURE__ */ React__default["default"].createElement(ChevronDownIcon$1, { className: "h-4 w-4 ml-2" })
    ), /* @__PURE__ */ React__default["default"].createElement(
      Select,
      {
        defaultValue: type,
        values: typeOptions.map((o) => capitalize(o)),
        open: openSelect,
        setOpen: setOpenSelect,
        onChange: (e) => setType(e.toLowerCase())
      }
    ), /* @__PURE__ */ React__default["default"].createElement("div", null, type === "url" && /* @__PURE__ */ React__default["default"].createElement("div", { className: "flex justify-center mb-4 flex-col" }, /* @__PURE__ */ React__default["default"].createElement(
      "input",
      {
        type: "text",
        className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-4",
        placeholder: "Eg. https://github.com/LiveDuo/destack",
        defaultValue: url,
        onChange: (e) => setUrl(e.target.value)
      }
    ), /* @__PURE__ */ React__default["default"].createElement("div", { className: "flex items-center ml-4" }, /* @__PURE__ */ React__default["default"].createElement("p", null, "Open in new tab"), /* @__PURE__ */ React__default["default"].createElement(
      "input",
      {
        defaultChecked: newTab,
        type: "checkbox",
        onChange: (e) => setNewTab(e.target.checked),
        className: "ml-4 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
      }
    ))), type === "email" && /* @__PURE__ */ React__default["default"].createElement("div", { className: "flex justify-center mb-4" }, /* @__PURE__ */ React__default["default"].createElement(
      "input",
      {
        type: "text",
        className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5",
        placeholder: "Eg. matt@mullenweg.com",
        defaultValue: email,
        onChange: (e) => setEmail(e.target.value)
      }
    )), type === "submit" && /* @__PURE__ */ React__default["default"].createElement("div", { className: "flex justify-center mb-4 flex-col" }, /* @__PURE__ */ React__default["default"].createElement("div", { className: "flex justify-end mb-4" }, /* @__PURE__ */ React__default["default"].createElement(
      "input",
      {
        type: "text",
        className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5",
        placeholder: "Eg. /api/submit",
        defaultValue: submitUrl,
        onChange: (e) => setSubmitUrl(e.target.value)
      }
    ), /* @__PURE__ */ React__default["default"].createElement(
      "div",
      {
        className: "flex rounded py-2 px-4 transition cursor-pointer items-center ml-2",
        onClick: () => setMethodSelect(true)
      },
      submitMethod,
      " ",
      /* @__PURE__ */ React__default["default"].createElement(ChevronDownIcon$1, { className: "h-4 w-4 ml-2" })
    ), /* @__PURE__ */ React__default["default"].createElement(
      Select,
      {
        defaultValue: submitMethod,
        values: methodOptions,
        open: methodSelect,
        setOpen: setMethodSelect,
        onChange: (e) => setSubmitMethod(e)
      }
    )), /* @__PURE__ */ React__default["default"].createElement("div", { className: "flex items-center ml-4" }, /* @__PURE__ */ React__default["default"].createElement("p", null, "Async"), /* @__PURE__ */ React__default["default"].createElement(
      "input",
      {
        defaultChecked: submitAsync,
        type: "checkbox",
        onChange: (e) => setSubmitAsync(e.target.checked),
        className: "ml-4 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
      }
    ))))))),
    /* @__PURE__ */ React__default["default"].createElement("div", { className: "mt-4 flex justify-end" }, /* @__PURE__ */ React__default["default"].createElement(
      $5d3850c4d0b4e6c7$export$f39c2d165cd861fe,
      {
        onClick: () => {
          onSave();
        },
        className: cx(
          "inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium",
          "bg-blue-600 text-white hover:bg-blue-700 border border-transparent"
        )
      },
      "Save"
    )),
    /* @__PURE__ */ React__default["default"].createElement(
      $5d3850c4d0b4e6c7$export$f39c2d165cd861fe,
      {
        onClick: () => setOpen(false),
        className: cx("absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1")
      },
      /* @__PURE__ */ React__default["default"].createElement(XMarkIcon$1, { className: "h-4 w-4 text-gray-500 hover:text-gray-700" })
    )
  ))));
};

const Dialog$1 = ({ open, setOpen, selectedElement }) => {
  const [link, setLink] = React.useState("");
  const [newTab, setNewTab] = React.useState(true);
  React.useEffect(() => {
    var _a;
    setLink((_a = selectedElement == null ? void 0 : selectedElement.href) != null ? _a : "");
  }, [open]);
  const onSave = () => {
    setOpen(false);
    selectedElement.href = link;
    selectedElement.target = newTab ? "_blank" : "_self";
  };
  return /* @__PURE__ */ React__default["default"].createElement($5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9, { open, onOpenChange: setOpen }, /* @__PURE__ */ React__default["default"].createElement($5d3850c4d0b4e6c7$export$602eac185826482c, null, /* @__PURE__ */ React__default["default"].createElement($5d3850c4d0b4e6c7$export$c6fdb837b070b4ff, null, /* @__PURE__ */ React__default["default"].createElement(
    $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2,
    {
      className: cx(
        "fixed shadow bg-white rounded-lg p-4",
        "w-[95vw] max-w-md md:w-full",
        "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      )
    },
    /* @__PURE__ */ React__default["default"].createElement($5d3850c4d0b4e6c7$export$f99233281efd08a0, { className: "text-sm font-medium text-gray-900 dark:text-gray-100" }, "Update Link"),
    /* @__PURE__ */ React__default["default"].createElement("div", { className: "mt-8 mb-4" }, /* @__PURE__ */ React__default["default"].createElement("div", null, /* @__PURE__ */ React__default["default"].createElement("div", null, /* @__PURE__ */ React__default["default"].createElement("div", { className: "flex justify-center mb-4 flex-col" }, /* @__PURE__ */ React__default["default"].createElement(
      "input",
      {
        type: "text",
        className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-4",
        placeholder: "Eg. https://github.com/LiveDuo/destack",
        defaultValue: link,
        onChange: (e) => setLink(e.target.value)
      }
    ), /* @__PURE__ */ React__default["default"].createElement("div", { className: "flex items-center ml-4" }, /* @__PURE__ */ React__default["default"].createElement("p", null, "Open in new tab"), /* @__PURE__ */ React__default["default"].createElement(
      "input",
      {
        defaultChecked: newTab,
        type: "checkbox",
        onChange: (e) => setNewTab(e.target.checked),
        className: "ml-4 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
      }
    )))))),
    /* @__PURE__ */ React__default["default"].createElement("div", { className: "mt-4 flex justify-end" }, /* @__PURE__ */ React__default["default"].createElement(
      $5d3850c4d0b4e6c7$export$f39c2d165cd861fe,
      {
        onClick: () => {
          onSave();
        },
        className: cx(
          "inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium",
          "bg-blue-600 text-white hover:bg-blue-700 border border-transparent"
        )
      },
      "Save"
    )),
    /* @__PURE__ */ React__default["default"].createElement(
      $5d3850c4d0b4e6c7$export$f39c2d165cd861fe,
      {
        onClick: () => setOpen(false),
        className: cx("absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1")
      },
      /* @__PURE__ */ React__default["default"].createElement(XMarkIcon$1, { className: "h-4 w-4 text-gray-500 hover:text-gray-700" })
    )
  ))));
};

const Dialog = ({ open, setOpen, selectedElement }) => {
  const [path, setPath] = React.useState("");
  React.useEffect(() => {
    var _a, _b;
    if (open) {
      if (selectedElement.tagName === "path") {
        setPath((_a = selectedElement == null ? void 0 : selectedElement.getAttribute("d")) != null ? _a : "");
      } else if (selectedElement.tagName === "svg") {
        const pathElement = selectedElement.querySelector("path");
        setPath((_b = pathElement == null ? void 0 : pathElement.getAttribute("d")) != null ? _b : "");
      } else {
        setPath("");
      }
    } else {
      setPath("");
    }
  }, [open]);
  const onSave = () => {
    setOpen(false);
    if (selectedElement.tagName === "path") {
      selectedElement.setAttribute("d", path);
    } else if (selectedElement.tagName === "svg") {
      const pathElement = selectedElement.querySelector("path");
      pathElement.setAttribute("d", path);
    }
  };
  return /* @__PURE__ */ React__default["default"].createElement($5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9, { open, onOpenChange: setOpen }, /* @__PURE__ */ React__default["default"].createElement($5d3850c4d0b4e6c7$export$602eac185826482c, null, /* @__PURE__ */ React__default["default"].createElement($5d3850c4d0b4e6c7$export$c6fdb837b070b4ff, null, /* @__PURE__ */ React__default["default"].createElement(
    $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2,
    {
      className: cx(
        "fixed shadow bg-white rounded-lg p-4",
        "w-[95vw] max-w-md md:w-full",
        "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      )
    },
    /* @__PURE__ */ React__default["default"].createElement($5d3850c4d0b4e6c7$export$f99233281efd08a0, { className: "text-sm font-medium text-gray-900 dark:text-gray-100" }, "Update SVG Path"),
    /* @__PURE__ */ React__default["default"].createElement("div", { className: "mt-8 mb-4" }, /* @__PURE__ */ React__default["default"].createElement("div", null, /* @__PURE__ */ React__default["default"].createElement("div", null, /* @__PURE__ */ React__default["default"].createElement("div", { className: "flex justify-center mb-4 flex-col" }, /* @__PURE__ */ React__default["default"].createElement(
      "input",
      {
        type: "text",
        className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-4",
        placeholder: "Eg. d = 'M150 0 L75 200 L225 200 Z'",
        defaultValue: path,
        onChange: (e) => setPath(e.target.value)
      }
    ))))),
    /* @__PURE__ */ React__default["default"].createElement("div", { className: "mt-4 flex justify-end" }, /* @__PURE__ */ React__default["default"].createElement(
      $5d3850c4d0b4e6c7$export$f39c2d165cd861fe,
      {
        onClick: () => {
          onSave();
        },
        className: cx(
          "inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium",
          "bg-blue-600 text-white hover:bg-blue-700 border border-transparent"
        )
      },
      "Save"
    )),
    /* @__PURE__ */ React__default["default"].createElement(
      $5d3850c4d0b4e6c7$export$f39c2d165cd861fe,
      {
        onClick: () => setOpen(false),
        className: cx("absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1")
      },
      /* @__PURE__ */ React__default["default"].createElement(XMarkIcon$1, { className: "h-4 w-4 text-gray-500 hover:text-gray-700" })
    )
  ))));
};

const standaloneServerPort = 12785;
const themes = [
  { name: "Hyper UI", folder: "hyperui" },
  { name: "Tailblocks", folder: "tailblocks" },
  { name: "Flowrift", folder: "flowrift" },
  { name: "Meraki UI", folder: "meraki-light" },
  { name: "Preline", folder: "preline" },
  { name: "Flowbite", folder: "flowbite" },
  { name: "New UI", folder: "aNewUI" }
];
function debounce(callback, timeout = 1e3) {
  let timeoutFn;
  return (...args) => {
    const context = this;
    clearTimeout(timeoutFn);
    timeoutFn = setTimeout(() => callback.apply(context, args), timeout);
  };
}
const getBaseUrl = (standaloneServer) => {
  return standaloneServer ? `http://localhost:${standaloneServerPort}` : "";
};
const getImageUrl = (standaloneServer, imageSrc) => {
  const baseUrl = getBaseUrl(standaloneServer);
  return `${baseUrl}/api/builder/handle?type=asset&path=${imageSrc}`;
};
const isEventOnElement = (element, event) => {
  if (!element)
    return;
  const rect = element.getBoundingClientRect();
  const isX = rect.top < event.clientY && rect.bottom > event.clientY;
  const isY = rect.left < event.clientX && rect.right > event.clientX;
  return isX && isY;
};
const isElementTopHalf = (element, event) => {
  if (!element)
    return;
  const rect = element.getBoundingClientRect();
  return rect.top + (rect.bottom - rect.top) / 2 > event.clientY;
};
const Category = ({ themeIndex, category, components, standaloneServer }) => {
  const [show, setShow] = React.useState(false);
  return /* @__PURE__ */ React__default["default"].createElement("div", { id: category.toLowerCase() }, /* @__PURE__ */ React__default["default"].createElement(
    "div",
    {
      onClick: () => setShow((i) => !i),
      className: `h-12 cursor-pointer bg-white border-b last:border-b-0 flex items-center px-2 ${show ? "shadow-sm" : ""}`
    },
    /* @__PURE__ */ React__default["default"].createElement("div", { className: "flex-1 flex items-center" }, /* @__PURE__ */ React__default["default"].createElement(Squares2X2Icon$1, { className: "h-4 w-4 ml-2 mr-4" }), " ", /* @__PURE__ */ React__default["default"].createElement("h2", { className: "text-xs uppercase" }, category)),
    /* @__PURE__ */ React__default["default"].createElement("a", { className: "rotate-animation", style: { transform: `rotate(${show ? 180 : 0}deg)` } }, /* @__PURE__ */ React__default["default"].createElement(ArrowSmallUpIcon$1, { className: "h-4 w-4" }))
  ), show && /* @__PURE__ */ React__default["default"].createElement("div", null, components.map((c, i) => /* @__PURE__ */ React__default["default"].createElement(
    "img",
    {
      key: i,
      className: "cursor-grab mb-2",
      src: getImageUrl(standaloneServer, `/themes/${themes[themeIndex].folder}/${c.folder}/preview.png`),
      draggable: "true",
      onDragStart: (e) => e.dataTransfer.setData("component", `${category}-${i}`)
    }
  ))));
};
function Editor({ standaloneServer = false }) {
  const canvasRef = React.useRef(null);
  const popoverRef = React.useRef(null);
  const moveUpRef = React.useRef(null);
  const moveDownRef = React.useRef(null);
  const deleteRef = React.useRef(null);
  const popoverElementRef = React.useRef(null);
  const optionsRef = React.useRef(null);
  const [isPreview, setIsPreview] = React.useState(false);
  const [hoveredComponent, setHoveredComponent] = React.useState(null);
  const [hoveredElement, setHoveredElement] = React.useState(null);
  const [selectedElement, setSelectedElement] = React.useState(null);
  const [components, setComponents] = React.useState({});
  const [selectOpen, setSelectOpen] = React.useState(false);
  const [themeIndex, setThemeIndex] = React.useState(0);
  const [openImage, setOpenImage] = React.useState(false);
  const [openButton, setOpenButton] = React.useState(false);
  const [openLink, setOpenLink] = React.useState(false);
  const [openSvg, setOpenSvg] = React.useState(false);
  const loadTheme = async (index) => {
    const baseUrl = getBaseUrl(standaloneServer);
    const url = `${baseUrl}/api/builder/handle?type=theme&name=${themes[index].folder}`;
    const componentsList = await fetch(url).then((r) => r.json());
    return componentsList;
  };


  const loadThemeComponents = async (index) => {
    const componentsList = await loadTheme(index);
    const _components = componentsList.reduce((r, c) => {
      const category = c.folder.replace(/[0-9]/g, "");
      if (!r[category])
        r[category] = [];
      r[category].push(c);
      return r;
    }, {});
    setComponents(_components);
  };
  const loadPage = async () => {
    const baseUrl = getBaseUrl(standaloneServer);
    const url = `${baseUrl}/api/builder/handle?type=data&path=${location.pathname}`;
    const data = await fetch(url).then((r) => r.text());
    return data;
  };
  const savePage = async (html) => {
    const baseUrl = getBaseUrl(standaloneServer);
    const url = `${baseUrl}/api/builder/handle?type=data&path=${location.pathname}`;
    await fetch(url, { method: "post", body: html });
  };
  const onDomChange = () => {
    const config = { attributes: true, childList: true, subtree: true };
    const observer = new MutationObserver(
      debounce(() => {
        console.log("dom changed");
        const html = canvasRef.current.innerHTML;
        savePage(html);
      })
    );
    observer.observe(canvasRef.current, config);
    return observer;
  };
  React.useEffect(() => {
    loadPage().then((html) => canvasRef.current.innerHTML = html);
    loadThemeComponents(themeIndex);
    const observer = onDomChange();
    return () => observer.disconnect();
  }, []);
  const onCanvasDrop = async (e) => {
    e.preventDefault();
    const [categoryId, componentId] = e.dataTransfer.getData("component").split("-");
    const component = components[categoryId][componentId];
    const html = component.source;
    const _components = getComponents();
    if (_components.length === 0) {
      canvasRef.current.innerHTML = html;
    } else if (isElementTopHalf(hoveredComponent, e)) {
      hoveredComponent.insertAdjacentHTML("beforebegin", html);
    } else if (!isElementTopHalf(hoveredComponent, e)) {
      hoveredComponent.insertAdjacentHTML("afterend", html);
    }
    removeBorders();
    setHoveredComponent(null);
  };
  const onCanvasMouseOver = (e) => {
    if (!popoverRef.current)
      return;
    const target = e.target;
    if (target.tagName === "A") {
      setHoveredElement(target);
      popoverElementRef.current.style.top = `${target.offsetTop}px`;
      popoverElementRef.current.style.left = `${target.offsetLeft}px`;
    } else if (target.tagName === "BUTTON") {
      setHoveredElement(target);
      popoverElementRef.current.style.top = `${target.offsetTop}px`;
      popoverElementRef.current.style.left = `${target.offsetLeft}px`;
    }
    const components2 = getComponents();
    const component = components2.find((c) => c.matches(":hover"));
    if (!component)
      return;
    setHoveredComponent(component);
    popoverRef.current.style.top = `${component.offsetTop}px`;
    popoverRef.current.style.left = `${component.offsetLeft}px`;
  };
  const onCanvasMouseLeave = (e) => {
    if (!isEventOnElement(popoverRef.current, e)) {
      setHoveredComponent(null);
    }
  };
  const onCanvasMouseOut = (e) => {
    if (!isEventOnElement(popoverElementRef.current, e)) {
      setHoveredElement(null);
    }
  };
  const onCanvasClickCapture = (e) => {
    if (isPreview)
      return;
    e.preventDefault();
    e.stopPropagation();
    const target = e.target;
    setSelectedElement(target);
    if (target.tagName === "IMG") {
      setOpenImage(true);
    } else if (target.tagName === "path") {
      setOpenSvg(true);
    } else if (target.tagName === "svg") {
      setOpenSvg(true);
    }
    if (isEventOnElement(deleteRef.current, e)) {
      const clickEvent = new MouseEvent("click", { bubbles: true });
      deleteRef.current.dispatchEvent(clickEvent);
    } else if (isEventOnElement(moveUpRef.current, e)) {
      const clickEvent = new MouseEvent("click", { bubbles: true });
      moveUpRef.current.dispatchEvent(clickEvent);
    } else if (isEventOnElement(moveDownRef.current, e)) {
      const clickEvent = new MouseEvent("click", { bubbles: true });
      moveDownRef.current.dispatchEvent(clickEvent);
    }
  };
  const onComponentDelete = () => {
    canvasRef.current.removeChild(hoveredComponent);
    setHoveredComponent(null);
  };
  const onComponentMoveUp = () => {
    canvasRef.current.insertBefore(hoveredComponent, hoveredComponent.previousElementSibling);
  };
  const onComponentMoveDown = () => {
    canvasRef.current.insertBefore(hoveredComponent.nextElementSibling, hoveredComponent);
  };
  const onCanvasDragOver = (e) => {
    e.preventDefault();
    const components2 = getComponents();
    const component = components2.find((c) => isEventOnElement(c, e));
    if (!component)
      return;
    const isTopHalf = isElementTopHalf(component, e);
    component.style.setProperty(`border-${isTopHalf ? "top" : "bottom"}`, "4px solid cornflowerblue");
    component.style.setProperty(`border-${!isTopHalf ? "top" : "bottom"}`, "");
    if (component.isEqualNode(hoveredComponent))
      return;
    setHoveredComponent(component);
  };
  const removeBorders = () => {
    const components2 = getComponents();
    components2.forEach((c) => {
      c.style.setProperty("border-top", "");
      c.style.setProperty("border-bottom", "");
    });
  };
  const onCanvasDragLeave = () => {
    setHoveredComponent(null);
    removeBorders();
  };
  const getComponents = () => {
    var _a, _b;
    return Array.from((_b = (_a = canvasRef.current) == null ? void 0 : _a.children) != null ? _b : []).filter((c) => c.tagName !== "SCRIPT");
  };
  const handleExport = () => {
    const html = document.documentElement.outerHTML;
    const blob = new Blob([html], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", "page.html");
    link.click();
  };


  return /* @__PURE__ */ React__default["default"].createElement("div", { className: "flex flex-row bg-white" }, !isPreview && /* @__PURE__ */ React__default["default"].createElement("div", { className: "w-56 p-2 shrink-0 overflow-y-scroll h-screen" }, Object.keys(components).map((c, i) => /* @__PURE__ */ React__default["default"].createElement(
    Category,
    {
      key: i,
      category: c,
      themeIndex,
      components: components[c],
      standaloneServer
    }
  ))), /* @__PURE__ */ React__default["default"].createElement("div", { className: "w-full h-screen flex flex-col" }, /* @__PURE__ */ React__default["default"].createElement("div", { className: "flex items-center m-2" }, !isPreview && /* @__PURE__ */ React__default["default"].createElement("div", { className: "mr-auto ml-auto" }, /* @__PURE__ */ React__default["default"].createElement(
    "div",
    {
      className: "flex rounded py-2 px-4 transition cursor-pointer items-center justify-center mr-auto ml-auto",
      onClick: () => setSelectOpen(true)
    },
    themes[themeIndex].name,
    /* @__PURE__ */ React__default["default"].createElement(ChevronDownIcon$1, { className: "h-4 w-4 ml-2" })
  ), /* @__PURE__ */ React__default["default"].createElement(
    Select,
    {
      defaultValue: themes[themeIndex].name,
      values: themes.map((c) => c.name),
      open: selectOpen,
      setOpen: setSelectOpen,
      onChange: (e) => {
        const index = themes.findIndex((r) => r.name === e);
        loadThemeComponents(index);
        setThemeIndex(index);
      }
    }
  )), !isPreview ? /* @__PURE__ */ React__default["default"].createElement(
    "button",
    {
      className: "bg-green-500 hover:bg-green-700 text-white px-4 py-2 ml-6 mr-6 rounded-md flex items-center",
      onClick: () => setIsPreview((s) => !s)
    },
    /* @__PURE__ */ React__default["default"].createElement(ComputerDesktopIcon$1, { className: "h-4 w-4 mr-2" }),
    "Preview"
  ) : /* @__PURE__ */ React__default["default"].createElement(
    "button",
    {
      className: "bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 ml-6 mr-6 rounded-md flex items-center",
      style: { marginLeft: isPreview ? "auto" : "" },
      onClick: () => setIsPreview((s) => !s)
    },
    /* @__PURE__ */ React__default["default"].createElement(PencilIcon$1, { className: "h-4 w-4 mr-2" }),
    "Editor"
  ), isPreview && /* @__PURE__ */ React__default["default"].createElement(
    "button",
    {
      className: "bg-green-500 hover:bg-green-700 text-white px-4 py-2 ml-6 mr-6 rounded-md flex items-center",
      style: { marginLeft: isPreview ? "auto" : "" },
      onClick: () => handleExport()
    },
    /* @__PURE__ */ React__default["default"].createElement(ComputerDesktopIcon$1, { className: "h-4 w-4 mr-2" }),
    "Export"
  )), /* @__PURE__ */ React__default["default"].createElement("div", { className: "flex justify-center h-fit bg-gray-200 overflow-y-scroll", style: { position: "relative" } }, /* @__PURE__ */ React__default["default"].createElement(
    Dialog$3,
    {
      open: openImage,
      setOpen: setOpenImage,
      selectedElement,
      baseUrl: getBaseUrl(standaloneServer)
    }
  ), /* @__PURE__ */ React__default["default"].createElement(
    Dialog$2,
    {
      open: openButton,
      setOpen: setOpenButton,
      selectedElement
    }
  ), /* @__PURE__ */ React__default["default"].createElement(
    Dialog$1,
    {
      open: openLink,
      setOpen: setOpenLink,
      selectedElement
    }
  ), /* @__PURE__ */ React__default["default"].createElement(
    Dialog,
    {
      open: openSvg,
      setOpen: setOpenSvg,
      selectedElement
    }
  ), !isPreview && /* @__PURE__ */ React__default["default"].createElement(
    "div",
    {
      ref: popoverElementRef,
      className: "absolute z-10-none bg-gray-500",
      style: { display: hoveredElement ? "block" : "none" }
    },
    /* @__PURE__ */ React__default["default"].createElement("div", { className: "flex flex-row p-1" }, /* @__PURE__ */ React__default["default"].createElement(
      CursorArrowRippleIcon$1,
      {
        ref: optionsRef,
        onClick: () => {
          setSelectedElement(hoveredElement);
          if ((hoveredElement == null ? void 0 : hoveredElement.tagName) === "BUTTON") {
            setOpenButton(true);
          } else if ((hoveredElement == null ? void 0 : hoveredElement.tagName) === "A") {
            setOpenLink(true);
          }
        },
        className: "h-7 w-7 text-white p-1 cursor-pointer"
      }
    ))
  ), !isPreview && /* @__PURE__ */ React__default["default"].createElement(
    "div",
    {
      ref: popoverRef,
      onMouseLeave: (e) => {
        var _a;
        if (!((_a = canvasRef.current) == null ? void 0 : _a.isSameNode(e.target))) {
          setHoveredComponent(null);
        }
      },
      className: "absolute z-10-none bg-gray-500",
      style: { display: hoveredComponent ? "block" : "none" }
    },
    /* @__PURE__ */ React__default["default"].createElement("div", { className: "flex flex-row p-1" }, getComponents().indexOf(hoveredComponent) < getComponents().length - 1 && /* @__PURE__ */ React__default["default"].createElement(
      ArrowDownIcon$1,
      {
        ref: moveDownRef,
        onClick: onComponentMoveDown,
        className: "h-7 w-7 text-white p-1 cursor-pointer"
      }
    ), getComponents().indexOf(hoveredComponent) > 0 && /* @__PURE__ */ React__default["default"].createElement(
      ArrowUpIcon$1,
      {
        ref: moveUpRef,
        onClick: onComponentMoveUp,
        className: "h-7 w-7 text-white p-1 cursor-pointer"
      }
    ), /* @__PURE__ */ React__default["default"].createElement(
      TrashIcon$1,
      {
        id: "delete",
        ref: deleteRef,
        onClick: onComponentDelete,
        className: "h-7 w-7 text-white p-1 cursor-pointer"
      }
    ))
  ), /* @__PURE__ */ React__default["default"].createElement(
    "div",
    {
      id: "editor",
      ref: canvasRef,
      className: "bg-white flex-1 ease-animation",
      onMouseOver: onCanvasMouseOver,
      onMouseLeave: onCanvasMouseLeave,
      onMouseOut: onCanvasMouseOut,
      onDrop: onCanvasDrop,
      onDragOver: onCanvasDragOver,
      onDragLeave: onCanvasDragLeave,
      onClickCapture: onCanvasClickCapture,
      style: {
        margin: isPreview ? "0px" : "20px",
        maxWidth: isPreview ? "100%" : "868px",
        minHeight: "1024px",
        // no tailwind class
        outline: "none"
        // prevent focus
      },
      contentEditable: !isPreview
    }
  ))));
}

const ContentProvider = ({ data, standaloneServer }) => {
  const [templateData, setTemplateData] = React.useState();
  React.useEffect(() => {
    if (data) {
      const _templateData = data == null ? void 0 : data.find(({ name }) => name === location.pathname);
      setTemplateData(_templateData.content);
    }
  }, []);
  if (data)
    return /* @__PURE__ */ React__default["default"].createElement(React__default["default"].Fragment, null, /* @__PURE__ */ React__default["default"].createElement("div", { id: "page", dangerouslySetInnerHTML: { __html: templateData } }), /* @__PURE__ */ React__default["default"].createElement(PoweredBy, null));
  else
    return /* @__PURE__ */ React__default["default"].createElement(Editor, { standaloneServer });
};
const ContentProviderReact = () => {
  const mounted = React.useRef(false);
  const [loaded, setLoaded] = React.useState(false);
  const [data, setData] = React.useState();
  const loadData = async () => {
    const isDev = "_self" in React__default["default"].createElement("div");
    if (isDev) {
      setData(void 0);
      setLoaded(true);
      return;
    }
    const url = location.pathname === "/" ? "/default.html" : `${location.pathname}.html`;
    const _data = await fetch(`/data/${url}`).then((r) => r.text());
    setData([{ content: _data, name: location.pathname }]);
    setLoaded(true);
  };
  React.useEffect(() => {
    if (mounted.current)
      return;
    loadData();
    mounted.current = true;
  }, []);
  return loaded && /* @__PURE__ */ React__default["default"].createElement(ContentProvider, { data, standaloneServer: true });
};

exports.ContentProvider = ContentProvider;
exports.ContentProviderReact = ContentProviderReact;
