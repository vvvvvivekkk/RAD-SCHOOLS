/*! For license information please see homepage.bundle.js.LICENSE */
!function(e){var t={};function A(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,A),n.l=!0,n.exports}A.m=e,A.c=t,A.d=function(e,t,i){A.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},A.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},A.t=function(e,t){if(1&t&&(e=A(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(A.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)A.d(i,n,function(t){return e[t]}.bind(null,n));return i},A.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return A.d(t,"a",t),t},A.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},A.p="dist/",A(A.s=211)}({1:function(e,t,A){"use strict";A.d(t,"c",(function(){return b})),A.d(t,"e",(function(){return v})),A.d(t,"d",(function(){return g.f})),A.d(t,"f",(function(){return g.j})),A.d(t,"b",(function(){return S})),A.d(t,"a",(function(){return j}));var i=A(14),n=A(7);function o(e,t){const{element:{content:A},parts:i}=e,n=document.createTreeWalker(A,133,null,!1);let o=s(i),r=i[o],a=-1,l=0;const c=[];let g=null;for(;n.nextNode();){a++;const e=n.currentNode;for(e.previousSibling===g&&(g=null),t.has(e)&&(c.push(e),null===g&&(g=e)),null!==g&&l++;void 0!==r&&r.index===a;)r.index=null!==g?-1:r.index-l,o=s(i,o),r=i[o]}c.forEach(e=>e.parentNode.removeChild(e))}const r=e=>{let t=11===e.nodeType?0:1;const A=document.createTreeWalker(e,133,null,!1);for(;A.nextNode();)t++;return t},s=(e,t=-1)=>{for(let A=t+1;A<e.length;A++){const t=e[A];if(Object(n.d)(t))return A}return-1};var a=A(24),l=A(22),c=A(31),g=A(5);const d=(e,t)=>`${e}--${t}`;let C=!0;void 0===window.ShadyCSS?C=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),C=!1);const p=e=>t=>{const A=d(t.type,e);let i=l.a.get(A);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},l.a.set(A,i));let o=i.stringsArray.get(t.strings);if(void 0!==o)return o;const r=t.strings.join(n.f);if(o=i.keyString.get(r),void 0===o){const A=t.getTemplateElement();C&&window.ShadyCSS.prepareTemplateDom(A,e),o=new n.a(t,A),i.keyString.set(r,o)}return i.stringsArray.set(t.strings,o),o},h=["html","svg"],u=new Set,f=(e,t,A)=>{u.add(e);const i=A?A.element:document.createElement("template"),n=t.querySelectorAll("style"),{length:a}=n;if(0===a)return void window.ShadyCSS.prepareTemplateStyles(i,e);const c=document.createElement("style");for(let e=0;e<a;e++){const t=n[e];t.parentNode.removeChild(t),c.textContent+=t.textContent}(e=>{h.forEach(t=>{const A=l.a.get(d(t,e));void 0!==A&&A.keyString.forEach(e=>{const{element:{content:t}}=e,A=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{A.add(e)}),o(e,A)})})})(e);const g=i.content;A?function(e,t,A=null){const{element:{content:i},parts:n}=e;if(null==A)return void i.appendChild(t);const o=document.createTreeWalker(i,133,null,!1);let a=s(n),l=0,c=-1;for(;o.nextNode();){c++;for(o.currentNode===A&&(l=r(t),A.parentNode.insertBefore(t,A));-1!==a&&n[a].index===c;){if(l>0){for(;-1!==a;)n[a].index+=l,a=s(n,a);return}a=s(n,a)}}}(A,c,g.firstChild):g.insertBefore(c,g.firstChild),window.ShadyCSS.prepareTemplateStyles(i,e);const C=g.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==C)t.insertBefore(C.cloneNode(!0),t.firstChild);else if(A){g.insertBefore(c,g.firstChild);const e=new Set;e.add(c),o(A,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const E={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},I=(e,t)=>t!==e&&(t==t||e==e),Q={attribute:!0,type:String,converter:E,reflect:!1,hasChanged:I};class B extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,A)=>{const i=this._attributeNameForProperty(A,t);void 0!==i&&(this._attributeToPropertyMap.set(i,A),e.push(i))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=Q){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const A="symbol"==typeof e?Symbol():"__"+e,i=this.getPropertyDescriptor(e,A,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}static getPropertyDescriptor(e,t,A){return{get(){return this[t]},set(i){const n=this[e];this[t]=i,this.requestUpdateInternal(e,n,A)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||Q}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const A of t)this.createProperty(A,e[A])}}static _attributeNameForProperty(e,t){const A=t.attribute;return!1===A?void 0:"string"==typeof A?A:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,A=I){return A(e,t)}static _propertyValueFromAttribute(e,t){const A=t.type,i=t.converter||E,n="function"==typeof i?i:i.fromAttribute;return n?n(e,A):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const A=t.type,i=t.converter;return(i&&i.toAttribute||E.toAttribute)(e,A)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,A){t!==A&&this._attributeToProperty(e,A)}_propertyToAttribute(e,t,A=Q){const i=this.constructor,n=i._attributeNameForProperty(e,A);if(void 0!==n){const e=i._propertyValueToAttribute(t,A);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(n):this.setAttribute(n,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const A=this.constructor,i=A._attributeToPropertyMap.get(e);if(void 0!==i){const e=A.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=A._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,A){let i=!0;if(void 0!==e){const n=this.constructor;A=A||n.getPropertyOptions(e),n._valueHasChanged(this[e],t,A.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==A.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,A))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}B.finalized=!0;const b=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:A,elements:i}=t;return{kind:A,elements:i,finisher(t){window.customElements.define(e,t)}}})(e,t),m=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(A){A.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(A){A.createProperty(t.key,e)}};function v(e){return(t,A)=>void 0!==A?((e,t,A)=>{t.constructor.createProperty(A,e)})(e,t,A):m(e,t)}const w=Element.prototype;w.msMatchesSelector||w.webkitMatchesSelector;const y=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,k=Symbol();class x{constructor(e,t){if(t!==k)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(y?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const S=(e,...t)=>{const A=t.reduce((t,A,i)=>t+(e=>{if(e instanceof x)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(A)+e[i+1],e[0]);return new x(A,k)};(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const O={};class j extends B{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,A)=>e.reduceRight((e,A)=>Array.isArray(A)?t(A,e):(e.add(A),e),A),A=t(e,new Set),i=[];A.forEach(e=>i.unshift(e)),this._styles=i}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map(e=>{if(e instanceof CSSStyleSheet&&!y){const t=Array.prototype.slice.call(e.cssRules).reduce((e,t)=>e+t.cssText,"");return new x(String(t),k)}return e})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?y?this.renderRoot.adoptedStyleSheets=e.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==O&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return O}}j.finalized=!0,j.render=(e,t,A)=>{if(!A||"object"!=typeof A||!A.scopeName)throw new Error("The `scopeName` option is required.");const n=A.scopeName,o=a.a.has(t),r=C&&11===t.nodeType&&!!t.host,s=r&&!u.has(n),l=s?document.createDocumentFragment():t;if(Object(a.b)(e,l,Object.assign({templateFactory:p(n)},A)),s){const e=a.a.get(l);a.a.delete(l);const A=e.value instanceof c.a?e.value.template:void 0;f(n,l,A),Object(i.b)(t,t.firstChild),t.appendChild(l),a.a.set(t,e)}!o&&r&&window.ShadyCSS.styleElement(t.host)},j.shadowRootOptions={mode:"open"}},10:function(e,t,A){"use strict";A.d(t,"h",(function(){return l})),A.d(t,"a",(function(){return g})),A.d(t,"b",(function(){return d})),A.d(t,"e",(function(){return C})),A.d(t,"c",(function(){return p})),A.d(t,"f",(function(){return h})),A.d(t,"g",(function(){return u})),A.d(t,"d",(function(){return E}));var i=A(23),n=A(14),o=A(11),r=A(31),s=A(27),a=A(7);const l=e=>null===e||!("object"==typeof e||"function"==typeof e),c=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class g{constructor(e,t,A){this.dirty=!0,this.element=e,this.name=t,this.strings=A,this.parts=[];for(let e=0;e<A.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new d(this)}_getValue(){const e=this.strings,t=e.length-1,A=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=A[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!c(e))return e}let i="";for(let n=0;n<t;n++){i+=e[n];const t=A[n];if(void 0!==t){const e=t.value;if(l(e)||!c(e))i+="string"==typeof e?e:String(e);else for(const t of e)i+="string"==typeof t?t:String(t)}}return i+=e[t],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class d{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===o.a||l(e)&&e===this.value||(this.value=e,Object(i.b)(e)||(this.committer.dirty=!0))}commit(){for(;Object(i.b)(this.value);){const e=this.value;this.value=o.a,e(this)}this.value!==o.a&&this.committer.commit()}}class C{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(Object(a.c)()),this.endNode=e.appendChild(Object(a.c)())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=Object(a.c)()),e.__insert(this.endNode=Object(a.c)())}insertAfterPart(e){e.__insert(this.startNode=Object(a.c)()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;Object(i.b)(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=o.a,e(this)}const e=this.__pendingValue;e!==o.a&&(l(e)?e!==this.value&&this.__commitText(e):e instanceof s.b?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):c(e)?this.__commitIterable(e):e===o.b?(this.value=o.b,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,A="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=A:this.__commitNode(document.createTextNode(A)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof r.a&&this.value.template===t)this.value.update(e.values);else{const A=new r.a(t,e.processor,this.options),i=A._clone();A.update(e.values),this.__commitNode(i),this.value=A}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let A,i=0;for(const n of e)A=t[i],void 0===A&&(A=new C(this.options),t.push(A),0===i?A.appendIntoPart(this):A.insertAfterPart(t[i-1])),A.setValue(n),A.commit(),i++;i<t.length&&(t.length=i,this.clear(A&&A.endNode))}clear(e=this.startNode){Object(n.b)(this.startNode.parentNode,e.nextSibling,this.endNode)}}class p{constructor(e,t,A){if(this.value=void 0,this.__pendingValue=void 0,2!==A.length||""!==A[0]||""!==A[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=A}setValue(e){this.__pendingValue=e}commit(){for(;Object(i.b)(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=o.a,e(this)}if(this.__pendingValue===o.a)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=o.a}}class h extends g{constructor(e,t,A){super(e,t,A),this.single=2===A.length&&""===A[0]&&""===A[1]}_createPart(){return new u(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class u extends d{}let f=!1;(()=>{try{const e={get capture(){return f=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class E{constructor(e,t,A){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=A,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;Object(i.b)(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=o.a,e(this)}if(this.__pendingValue===o.a)return;const e=this.__pendingValue,t=this.value,A=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),n=null!=e&&(null==t||A);A&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=I(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=o.a}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const I=e=>e&&(f?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)},101:function(e,t,A){"use strict";var i=A(1),n=A(4),o=A(13),r=A(56);class s extends r.EventEmitter{constructor(){return super(),this.keyboardFocus=!1,s.instance||(this.emitter=new r.EventEmitter,s.instance=this,document.addEventListener("keydown",e=>{this.emit("change",{keyboardFocus:!0})},!0),document.addEventListener("mousedown",e=>{this.emit("change",{keyboard:!1})},!0),document.addEventListener("touchstart",e=>{this.emit("change",{keyboard:!1})},!0)),s.instance}}const a=new s;var l=A(17),c=A(2),g=function(e,t,A,i){var n,o=arguments.length,r=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,A):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,A,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,A,r):n(t,A))||r);return o>3&&r&&Object.defineProperty(t,A,r),r},d=function(e,t,A,i){return new(A||(A=Promise))((function(n,o){function r(e){try{a(i.next(e))}catch(e){o(e)}}function s(e){try{a(i.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?n(e.value):(t=e.value,t instanceof A?t:new A((function(e){e(t)}))).then(r,s)}a((i=i.apply(e,t||[])).next())}))};let C=class extends i.a{constructor(){super(...arguments),this.open=!1,this.disableDriveSave=!1,this.disableFileSave=!1,this.disableDriveView=!1,this.disableSignOut=!0,this.hideAppNameWhenNarrow=!1,this.keyboardFocus=!1,this.linkTarget="_blank",this.modelName=""}__mouseClick(e){let t=!1;const A=e.path||e.composedPath&&e.composedPath();A&&A.forEach(e=>{t=e===this||t}),!t&&this.open&&(this.open=!1)}connectedCallback(){return document.addEventListener("click",this.__mouseClick),super.connectedCallback()}disconnectedCallback(){return document.removeEventListener("click",this.__mouseClick),super.disconnectedCallback()}firstUpdated(){this.shadowRoot.querySelector("#main-menu").addEventListener("keyup",e=>{32!==e.keyCode&&13!==e.keyCode||e.target.click()}),a.on("change",e=>{this.keyboardFocus=e.keyboardFocus})}update(e){e.has("open")&&this.open&&this._updateDriveState(),super.update(e)}_updateDriveState(){return d(this,void 0,void 0,(function*(){yield o.b.initialize();const e=yield o.b.isSignedIn();this.disableSignOut=!e}))}__openOnboardModal(e){this.open=!1,this.dispatchEvent(new CustomEvent("onboardOpen",{bubbles:!0,composed:!0,detail:{videoId:e}}))}render(){const e=e=>{this.open=!1,this.dispatchEvent(new CustomEvent(e,{bubbles:!0}))},t=t=>A=>{A.target.hasAttribute("disabled")||e(t)},A=i.f`<svg id="hamburger-menu-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3 8V6H21V8H3ZM3 13H21V11H3V13ZM3 18H21V16H3V18Z" fill="#5F6368"/>
            </svg>`,n=i.f`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.06 3.59L20.41 4.94C21.2 5.72 21.2 6.99 20.41 7.77L17.64 10.54L7.18 21H3V16.82L13.4 6.41L16.23 3.59C17.01 2.81 18.28 2.81 19.06 3.59ZM5 19L6.41 19.06L16.23 9.23L14.82 7.82L5 17.64V19Z" fill="#9AA0A6"/>
        </svg>
        `,o=i.f`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.2799 14L15.4199 2H8.5799V2.01L15.4299 14H22.2799ZM9.7299 15L6.2999 21H19.4199L22.8499 15H9.7299ZM7.7099 3.52L1.1499 15L4.5799 20.99L11.1399 9.52C11.1399 9.53 7.7099 3.52 7.7099 3.52Z" fill="#1967D2"/>
        </svg>
        `,r=i.f`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5 3H17L21 7V19C21 20.1 20.1 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.9 3.89 3 5 3ZM19 19V7.83L16.17 5H5V19H19ZM12 18C13.6569 18 15 16.6569 15 15C15 13.3431 13.6569 12 12 12C10.3431 12 9 13.3431 9 15C9 16.6569 10.3431 18 12 18ZM15 6H6V10H15V6Z" fill="#3C4043"/>
        </svg>
        `,s=i.f`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6H20C21.1 6 22 6.9 22 8V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18L2.01 6C2.01 4.9 2.9 4 4 4H10L12 6ZM4 8V18H20V8H4Z" fill="#3C4043"/>
        </svg>
        `,a=i.f`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M21 17V3C21 1.9 20.1 1 19 1H8C6.9 1 6 1.9 6 3V17C6 18.1 6.9 19 8 19H19C20.1 19 21 18.1 21 17ZM18 21H4V7H2V21C2 22.1 2.9 23 4 23H18V21ZM8 17H19V3H8V17Z" fill="#3C4043"/>
        </svg>
        `,g=(i.f`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM7.07 18.28C7.5 17.38 10.12 16.5 12 16.5C13.88 16.5 16.51 17.38 16.93 18.28C15.57 19.36 13.86 20 12 20C10.14 20 8.43 19.36 7.07 18.28ZM12 14.5C13.46 14.5 16.93 15.09 18.36 16.83C19.38 15.49 20 13.82 20 12C20 7.59 16.41 4 12 4C7.59 4 4 7.59 4 12C4 13.82 4.62 15.49 5.64 16.83C7.07 15.09 10.54 14.5 12 14.5ZM12 6C10.06 6 8.5 7.56 8.5 9.5C8.5 11.44 10.06 13 12 13C13.94 13 15.5 11.44 15.5 9.5C15.5 7.56 13.94 6 12 6ZM10.5 9.5C10.5 10.33 11.17 11 12 11C12.83 11 13.5 10.33 13.5 9.5C13.5 8.67 12.83 8 12 8C11.17 8 10.5 8.67 10.5 9.5Z" fill="#3C4043"/>
        </svg>
        `,i.f`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4 2H20C21.1 2 22 2.9 22 4V16C22 17.1 21.1 18 20 18H6L2 22L2.01 4C2.01 2.9 2.9 2 4 2ZM6 16H20V4H4V17.17L4.58 16.59L5.17 16H6ZM11 12H13V14H11V12ZM13 6H11V10H13V6Z" fill="#3C4043"/>
        </svg>
        `),d=i.f`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 13H13V20H11V13H4V11H11V4H13V11H20V13Z" fill="#3C4043"/>
        </svg>
        `,C=i.f`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4 9L12 3L20 9V21H4V9ZM15 19H18V10L12 5.5L6 10V19H9V13H15V19Z" fill="#5F6368"/>
        </svg>
        `,p=i.f`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 16.5L16 12L10 7.5V16.5ZM4 12C4 16.41 7.59 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.59 4 4 7.59 4 12Z" fill="#3C4043"/>
        </svg>
        `,h=i.f`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM13 16V18H11V16H13ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM8 10C8 7.79 9.79 6 12 6C14.21 6 16 7.79 16 10C16 11.2829 15.21 11.9733 14.4408 12.6455C13.711 13.2833 13 13.9046 13 15H11C11 13.1787 11.9421 12.4566 12.7704 11.8217C13.4202 11.3236 14 10.8792 14 10C14 8.9 13.1 8 12 8C10.9 8 10 8.9 10 10H8Z" fill="#3C4043"/>
        </svg>
        `,u=i.f`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM7.07 18.28C7.5 17.38 10.12 16.5 12 16.5C13.88 16.5 16.51 17.38 16.93 18.28C15.57 19.36 13.86 20 12 20C10.14 20 8.43 19.36 7.07 18.28ZM12 14.5C13.46 14.5 16.93 15.09 18.36 16.83C19.38 15.49 20 13.82 20 12C20 7.59 16.41 4 12 4C7.59 4 4 7.59 4 12C4 13.82 4.62 15.49 5.64 16.83C7.07 15.09 10.54 14.5 12 14.5ZM12 6C10.06 6 8.5 7.56 8.5 9.5C8.5 11.44 10.06 13 12 13C13.94 13 15.5 11.44 15.5 9.5C15.5 7.56 13.94 6 12 6ZM10.5 9.5C10.5 10.33 11.17 11 12 11C12.83 11 13.5 10.33 13.5 9.5C13.5 8.67 12.83 8 12 8C11.17 8 10.5 8.67 10.5 9.5Z" fill="#3C4043"/>
        </svg>
        `,f=i.f`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13 12.17L15.59 9.59L17 11L12 16L7 11L8.41 9.59L11 12.17V4H13V12.17ZM6 15H4V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V15H18V18H6V15Z" fill="#3C4043"/>
        </svg>`;return i.d`
            <style>
                :host {
                    display: inline-block;
                    z-index: 1000;
                    max-height: calc(100vh - 5vh);
                    display: flex;
                    flex-direction: column;
                    color: ${"#3C4043"};
                }

                #menu-holder {
                    position: relative;
                    padding: 20px;
                    width: ${305}px;
                    display: flex;
                    cursor: pointer;
                    border-radius: ${this.open?"0 10px 0px 0px":"0 10px 10px 10px"};
                    background: ${this.open?"#fff":"var(--menu-holder-closed-background, #fff)"};
                    box-shadow: ${this.open?"var(--menu-holder-open-box-shadow, 0 2px 5px rgba(0, 0,0, 0.3))":"var(--menu-holder-closed-box-shadow, 0 2px 5px rgba(0, 0,0, 0.3))"};
                }

                #menu-holder:focus {
                    outline: 0;
                }

                #menu-holder:focus:after {
                    content: '';
                    position: absolute;
                    top: -2px;
                    left: -2px;
                    height: 100%;
                    width: 100%;
                    border-radius: inherit;
                    border: 2px solid #8AB4F8;
                    z-index: 1;
                }

                #app-name {
                    font-family: 'BoingSemiBold', Helvetica, Arial, sans-serif;
                    font-size: 24px;
                    line-height: 28px;
                    font-weight: 500;
                    color: #1967D2;
                    opacity: ${this.open?1:"var(--app-name-closed-opacity, 1)"};
                }

                #hamburger-menu-icon {
                    display: inline-block;
                    vertical-align: middle;
                }

                #main-menu {
                    border-top: 1px solid #BDC1C6;
                    /* width: ${305}px; */
                    display: none;
                    width: 100%;
                    overflow-y: auto;
                    border-radius: 0 0px 10px 10px;
                    background: var(--main-menu-background, #fff);
                    box-shadow: var(--main-menu-box-shadow, 0 4px 5px rgba(0, 0,0, 0.3));
                    max-height: calc(100vh - 100px);
                }

                :host([open]) #main-menu {
                    display: block;
                }

                svg {
                    padding-right: 10px;
                }

                svg > path {
                    fill: ${"#3C4043"};
                }

                ul {
                    list-style: none;
                    padding-left: 0;
                    border-bottom: 1px solid #DADCE0;
                    padding-bottom: 10px;
                }

                ul:last-child {
                    border-bottom: 0;
                    padding-bottom: 0;
                }

                li {
                    cursor: pointer;
                    padding: 10px 0;
                    background: transparent;
                    border: 0;
                    outline: 0;
                    padding-left: 18px;
                    display: flex;
                    align-items: center;
                }
                li:focus {
                    outline: 2px solid var(--focus-color);
                }

                li:last-child{
                    margin-bottom: 0;
                }

                li svg{
                    padding-right: 12px;
                }

                li:hover {
                    background-color: #E8F0FE;
                    color: ${"#1967D2"};
                }

                li:hover svg > path {
                    fill: ${"#1967D2"};
                }

                #model-name {
                    font-size: 16px;
                    padding: 8px 18px 0px 18px;
                    display: flex;
                    align-items: center;
                }

                #model-name svg {
                    width: 18px;
                    height: 18px;
                    padding-left: 10px;
                    padding-right: 0;
                }

                #model-name svg path {
                    fill: #9AA0A6;
                }

                #model-name > *  {
                    /* display: flex; */
                    cursor: pointer;
                    word-wrap: break-word;
                }

                #model-name > *:hover, #model-name > *:hover path {
                    color:#1967D2;
                    fill: #1967D2;
                }

                [disabled] {
                    color: var(--disabled-color, #c9c9c9);
                    cursor: default;
                }
                [disabled]:hover {
                    color: var(--disabled-color, #c9c9c9);
                    background: none;
                }
                [disabled]:hover svg > path {
                    fill: var(--disabled-color, #c9c9c9);
                }
                [disabled] svg > path {
                    fill: var(--disabled-color, #c9c9c9);
                }

                :host([disableDriveView]) #model-name {
                    display: none;
                }



            </style>
            ${this.hideAppNameWhenNarrow?i.d`
            <style>
                @media only screen and (max-width: 768px) {
                    .collapsed #app-name {
                        width: 0;
                        height: 0;
                        overflow: hidden;
                    }
                    #menu-holder.collapsed {
                        width: 40px;
                    }
                }
            </style>
            `:""}
            <div
                id="menu-holder"
                class="${this.open?"open":"collapsed"} ${this.keyboardFocus?"keyboard-focus":""}"
                role="button"
                tabindex="0"
                aria-label="${this.open?Object(c.b)("menu_aria-label-close"):Object(c.b)("menu_aria-label-open")}"
                @keydown=${e=>{32!==e.keyCode&&13!==e.keyCode||(this.open=!this.open)}}
                @click=${()=>this.open=!this.open}>
                <span>${A}</span>
                <span id="app-name">Teachable Machine</span>
            </div>

            <div
                id="main-menu"
                style="${this.open?"":"display: none"}"
                aria-hidden="${this.open?"false":"true"}"
                >
                <ul>
                    <li role="button" tabindex="0" @click=${t("newmodel")}>
                            ${d}
                            ${Object(c.b)("menu_new-project")}
                    </li>
                </ul>
                <div id='model-name'>
                    <span role="button" tabindex="0" @click=${t("editModelName")} style='max-width: 200px;'>
                        ${this.modelName}
                    </span>

                    <div title="${Object(c.b)("menu_edit-project-title")}" role="button" tabindex="0" @click=${t("editModelName")}> ${n} </div>
                    <div title="${Object(c.b)("menu_show-project-drive")}" role="button" tabindex="0" @click=${t("openInDrive")}> ${o} </div>
                </div>
                <ul>
                    <li role="button" tabindex="0" id="drive-open" @click=${t("driveOpen")}>
                            ${o}
                            ${Object(c.b)("menu_open-project-drive")}
                    </li>
                    <li role="button" tabindex="0" id='drive-save' @click=${t("driveSave")} ?disabled=${this.disableDriveSave}>
                            ${r}
                            ${Object(c.b)("menu_save-project-drive")}
                    </li>
                    <li role="button" tabindex="0" id='drive-open' @click=${t("openInDrive")} ?disabled=${this.disableDriveView}>
                            ${s}
                            ${Object(c.b)("menu_view-project-drive")}
                    </li>
                    <li role="button" tabindex="0" id='drive-copy' @click=${t("copyProject")} ?disabled=${this.disableDriveView}>
                            ${a}
                            ${Object(c.b)("menu_make-copy-drive")}
                    </li>
                    <li role="button" tabindex="0" id='sign-out' @click=${t("signout")} ?disabled=${this.disableSignOut}>
                            ${u}
                            ${Object(c.b)("menu_sign-out-drive")}
                    </li>
                </ul>
                <ul>
                    <li role="button" tabindex="0" id='drive-open' @click=${t("fileOpen")}>
                            ${s}
                            ${Object(c.b)("menu_open-project-file")}
                    </li>
                    <li role="button" tabindex="0" id='file-save' @click=${t("fileSave")} ?disabled=${this.disableFileSave}>
                            ${f}
                            ${Object(c.b)("menu_download-project-file")}
                    </li>

                </ul>
                <ul>
                    <li role="button" tabindex="0" @click=${()=>window.open("/",this.linkTarget)}>
                            ${C}
                            ${Object(c.b)("menu_about-tm")}
                    </li>
                    <li role="button" tabindex="0" @click=${()=>window.open("/faq",this.linkTarget)}>
                            ${h}
                            ${Object(c.b)("app_abstract_faq")}
                    </li>
                </ul>
                <ul>
                    <li role="button" tabindex="0" @click=${()=>{this.__openOnboardModal(l.a.data)}}>
                            ${p}
                            ${Object(c.b)("menu_onboard-video1")}
                    </li>
                    <li role="button" tabindex="0" @click=${()=>{this.__openOnboardModal(l.a.train)}}>
                            ${p}
                            ${Object(c.b)("menu_onboard-video2")}
                    </li>
                    <li role="button" tabindex="0" @click=${()=>{this.__openOnboardModal(l.a.run)}}>
                            ${p}
                            ${Object(c.b)("menu_onboard-video3")}
                    </li>
                </ul>
                <ul>
                    <li role="button" tabindex="0" @click=${t("sendfeedback")}>
                            ${g}
                            ${Object(c.b)("menu_feedback")}
                    </li>

                </ul>
            </div>`}};g([Object(i.e)({type:Boolean,reflect:!0})],C.prototype,"open",void 0),g([Object(i.e)({type:Boolean,reflect:!0})],C.prototype,"disableDriveSave",void 0),g([Object(i.e)({type:Boolean,reflect:!0})],C.prototype,"disableFileSave",void 0),g([Object(i.e)({type:Boolean,reflect:!0})],C.prototype,"disableDriveView",void 0),g([Object(i.e)({type:Boolean,reflect:!0})],C.prototype,"disableSignOut",void 0),g([Object(i.e)({type:Boolean,reflect:!0})],C.prototype,"hideAppNameWhenNarrow",void 0),g([Object(i.e)({type:Boolean,reflect:!0})],C.prototype,"keyboardFocus",void 0),g([Object(i.e)({type:String})],C.prototype,"linkTarget",void 0),g([Object(i.e)({type:String})],C.prototype,"modelName",void 0),g([n.default],C.prototype,"__mouseClick",null),C=g([Object(i.c)("tm-hamburger-menu")],C)},11:function(e,t,A){"use strict";A.d(t,"a",(function(){return i})),A.d(t,"b",(function(){return n}));const i={},n={}},13:function(e,t,A){"use strict";A.d(t,"a",(function(){return c})),A.d(t,"b",(function(){return g}));var i=A(4),n=A(9),o=function(e,t,A,i){var n,o=arguments.length,r=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,A):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,A,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,A,r):n(t,A))||r);return o>3&&r&&Object.defineProperty(t,A,r),r},r=function(e,t,A,i){return new(A||(A=Promise))((function(n,o){function r(e){try{a(i.next(e))}catch(e){o(e)}}function s(e){try{a(i.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?n(e.value):(t=e.value,t instanceof A?t:new A((function(e){e(t)}))).then(r,s)}a((i=i.apply(e,t||[])).next())}))};const s=["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],a=["https://www.googleapis.com/auth/drive.file","https://www.googleapis.com/auth/drive.install"],l="#b741ee1b870496eda4e1b144dbbce95bc23384c4cbc0bc42#";class c{get isInitialized(){return this.__isInitialized}constructor(e,t,A){this.appFileExtension="tm",this.__isInitialized=!1,this.apiClientId=e+".apps.googleusercontent.com",this.apiKey=t,this.appMimeType=A||"application/json"}initialize(){return this.isInitialized?Promise.resolve():this.__loadApis().then(this._initializeClient).then(()=>{this.__isInitialized=!0})}_initializeClient(){return r(this,void 0,void 0,(function*(){const e={apiKey:this.apiKey,clientId:this.apiClientId,discoveryDocs:s,scope:a.join(" ")};return gapi.client.init(e)}))}__loadApis(){return r(this,void 0,void 0,(function*(){return Promise.all([new Promise((e,t)=>gapi.load("client:auth2",e)),new Promise(e=>gapi.load("picker",e))])}))}handleSignIn(){return gapi.auth2.getAuthInstance().signIn()}isSessionValid(){return gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().expires_at>(new Date).getTime()}isSignedIn(){if(!gapi.auth2.getAuthInstance().isSignedIn.get())return!1;const e=gapi.auth2.getAuthInstance().currentUser.get().getGrantedScopes();for(const t of a)if(-1===e.indexOf(t))return!1;return!0}reloadAuthToken(){return gapi.auth2.getAuthInstance().currentUser.get().reloadAuthResponse()}handleSignOut(){gapi.auth2.getAuthInstance().signOut()}getBasicProfile(){return gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile()}listFolderContents(e,t,A){return r(this,void 0,void 0,(function*(){return this.listFiles(t,void 0,e,A)}))}createFolder(e,t){return r(this,void 0,void 0,(function*(){const A={name:e,mimeType:"application/vnd.google-apps.folder",folderColorRgb:t||void 0},i=gapi.client.drive.files.create;return new Promise((e,t)=>{i(A).then((function(t){e(t.result.id)}),(function(e){t(e)}))})}))}getFile(e,t){return new Promise((A,i)=>{gapi.client.drive.files.get({fileId:e,fields:t}).then((function(e){A(e.result)}),(function(e){i(e.result)}))})}loadFile(e){return r(this,void 0,void 0,(function*(){const t={fileId:e,alt:"media"};return new Promise((e,A)=>{gapi.client.drive.files.get(t).then((function(t){e(t.body)}),(function(e){A(e.result)}))})}))}loadFileAsBlob(e){return r(this,void 0,void 0,(function*(){const t=yield this.loadFile(e.id),A=new Array(t.length);for(let e=0;e<t.length;e++)A[e]=t.charCodeAt(e);const i=new Uint8Array(A);return new Blob([i],{type:e.mimeType})}))}createZipFile(e,t,A){return r(this,void 0,void 0,(function*(){return this.createFile(e,t,"application/zip",A)}))}createTMFile(e,t,A,i,n){return r(this,void 0,void 0,(function*(){return this.createFile(e+"."+this.appFileExtension,t,this.appMimeType,n,A,i)}))}updateTMFile(e,t,A,i){return r(this,void 0,void 0,(function*(){return this.updateMultiPartFile(e,t,this.appMimeType,A,i)}))}updateProjectFileName(e,t){return r(this,void 0,void 0,(function*(){return this.updateFileName(e,t+"."+this.appFileExtension,this.appMimeType)}))}createFile(e,t,A,i,n,o){return r(this,void 0,void 0,(function*(){const r={name:e,parents:i?[i]:void 0,mimeType:A};n&&(r.contentHints={thumbnail:{image:this._webSafe64(n),mimeType:o}});const s=["","--"+l,"Content-Type: application/json; charset=UTF-8","",JSON.stringify(r),"","--"+l,"Content-Type: "+A,"Content-Transfer-Encoding: base64","",t,"--"+l+"--"],a={path:"/upload/drive/v3/files",method:"POST",params:{uploadType:"multipart"},headers:{"Content-Type":'multipart/related; boundary="'+l+'"'},body:s.join("\r\n")};return new Promise((e,t)=>{gapi.client.request(a).then((function(t){e(t.result.id)}),(function(e){t(e.result)}))})}))}updateFileName(e,t,A){const i={fileId:e,name:t,uploadType:"media",mimeType:A};return new Promise((e,t)=>{gapi.client.drive.files.update(i).then((function(t){e(t.result.name)}),(function(e){t(e.result)}))})}updateMultiPartFile(e,t,A,i,n){return r(this,void 0,void 0,(function*(){const o={mimeType:A};i&&(o.contentHints={thumbnail:{image:this._webSafe64(i),mimeType:n}});const r=["","--"+l,"Content-Type: application/json; charset=UTF-8","",JSON.stringify(o),"","--"+l,"Content-Type: "+A,"Content-Transfer-Encoding: base64","",t,"--"+l+"--"],s={path:"/upload/drive/v3/files/"+e,method:"PATCH",params:{uploadType:"multipart"},headers:{"Content-Type":'multipart/related; boundary="'+l+'"'},body:r.join("\r\n")};return new Promise((e,t)=>{gapi.client.request(s).then((function(t){e(t.result.id)}),(function(e){t(e.result)}))})}))}listFiles(e,t,A,i){return r(this,void 0,void 0,(function*(){const n=["trashed = false"];t&&n.push('mimeType="'+t+'"'),A&&n.push('"'+A+'" in parents');const o={q:n.length?n.join(" and "):void 0,pageSize:e,pageToken:i||void 0,fields:"nextPageToken, files(id, mimeType, name, parents)"};return new Promise((e,t)=>{gapi.client.drive.files.list(o).then((function(t){e(t.result)}),(function(e){t(e)}))})}))}getCurrentUserAccessToken(){return gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse(!0).access_token}createTMPicker(e){if(!this.isSignedIn())return this.handleSignIn().then(()=>{this.createTMPicker(e)});if(!this.isSessionValid())return this.reloadAuthToken().then(()=>{this.createTMPicker(e)});if(this.tmPicker)return void this.tmPicker.setVisible(!0);const t=this.getCurrentUserAccessToken();this.tmPicker=(new google.picker.PickerBuilder).setSelectableMimeTypes(this.appMimeType).setOAuthToken(t).addView((new google.picker.DocsView).setMode(google.picker.DocsViewMode.LIST).setMimeTypes(this.appMimeType)).setDeveloperKey(n.a.DRIVE_API_KEY).setCallback(e).setAppId(n.a.CLOUD_APP_ID).build(),this.tmPicker.setVisible(!0)}createFilePicker(e,t,A){return r(this,void 0,void 0,(function*(){if(yield this.initialize(),!this.isSignedIn())return this.handleSignIn().then(()=>{this.createFilePicker(e,t,A)});if(!this.isSessionValid())return this.reloadAuthToken().then(()=>{this.createFilePicker(e,t,A)});const i=this.getCurrentUserAccessToken();this.classPicker=(new google.picker.PickerBuilder).addView((new google.picker.DocsView).setIncludeFolders(!0).setMode(google.picker.DocsViewMode.LIST).setMimeTypes(t.replace(/\s/g,"")).setSelectFolderEnabled(!0)).addView(new google.picker.DocsUploadView).setOAuthToken(i).setDeveloperKey(n.a.DRIVE_API_KEY).setCallback(e=>A(e)).enableFeature(e?google.picker.Feature.MULTISELECT_ENABLED:"").setAppId(n.a.CLOUD_APP_ID).build(),this.classPicker.setVisible(!0)}))}_webSafe64(e=""){return e.replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}}o([i.default],c.prototype,"initialize",null),o([i.default],c.prototype,"_initializeClient",null);const g=new c(n.a.DRIVE_CLIENT_ID,n.a.DRIVE_API_KEY,"application/vnd.google.drive.tm")},14:function(e,t,A){"use strict";A.d(t,"a",(function(){return i})),A.d(t,"c",(function(){return n})),A.d(t,"b",(function(){return o}));const i="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,n=(e,t,A=null,i=null)=>{for(;t!==A;){const A=t.nextSibling;e.insertBefore(t,i),t=A}},o=(e,t,A=null)=>{for(;t!==A;){const A=t.nextSibling;e.removeChild(t),t=A}}},154:function(e,t,A){"use strict";var i=A(1),n=A(40),o=A(8),r=A(2),s=A(50),a=function(e,t,A,i){var n,o=arguments.length,r=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,A):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,A,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,A,r):n(t,A))||r);return o>3&&r&&Object.defineProperty(t,A,r),r},l=function(e,t,A,i){return new(A||(A=Promise))((function(n,o){function r(e){try{a(i.next(e))}catch(e){o(e)}}function s(e){try{a(i.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?n(e.value):(t=e.value,t instanceof A?t:new A((function(e){e(t)}))).then(r,s)}a((i=i.apply(e,t||[])).next())}))};let c=class extends i.a{constructor(){super(),this.defaultLang=Object(n.a)(),this.sendAnalyticsEvents=Object(s.b)("language"),this.sendAnalyticsEvents("language-selection",{event_label:this.defaultLang})}onChange(e){return l(this,void 0,void 0,(function*(){const t=e.target.value;t&&(e.target.blur(),o.a.setSetting("lang",{selected:t,browser:window.navigator.language.slice(0,2)}),yield Object(r.d)(t),window.location.reload(),window.scrollTo(0,0))}))}render(){return i.d`
      <style>
        :host {
          margin-right: 15px;
        }

        #container {
          display: flex;
          align-items: center;
          position: relative;
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          border: 0;
        }

        select {
          -webkit-appearance: none;
          appearance: none;
          padding: 3px 23px;
          padding-left: 25px;
          border-color: #c9c9c9;
          font-family: 'Google Sans', Helvetica, Arial, sans-serif;
          color: #4c5157;
          font-size: 12px;
        }

        select:focus-within + .select-arrow svg {
          transform: rotate(-180deg);
        }

        .select-icon {
          position: absolute;
          top: 5px;
          left: 6px;
          width: 14px;
          height: 14px;
        }

        .select-arrow {
          position: absolute;
          top: 50%;
          right: 7px;
          width: 15px;
          transform: translateY(calc(-50% + 1px));
          height: 15px;
        }

        .select-arrow svg {
          transition: transform 0.2s ease;
          transform-origin: 50% 50%;
        }

        .select-icon svg,
        .select-arrow svg {
          width: 100%;
          height: 100%;
        }
      </style>
      <div id="container">
        <label class="sr-only" for="languages">Select a language</label>
        <div class="select-icon">
          ${i.f`
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path fill="#ababab" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/></svg>
                    `}
        </div>
        <select id="languages" @change="${this.onChange}">
          ${n.b&&n.b.map(e=>i.d` <option
              value=${e.value}
              ?selected=${e.value===this.defaultLang}
            >
              ${e.name}
            </option>`)}
        </select>
        <div class="select-arrow">
          ${i.f`
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path fill="#969696" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/><path d="M0 0h24v24H0V0z" fill="none"/></svg>
                    `}
        </div>
      </div>
    `}};a([Object(i.e)({type:String})],c.prototype,"defaultLang",void 0),c=a([Object(i.c)("tm-language-select")],c)},17:function(e,t,A){"use strict";A.d(t,"a",(function(){return r}));var i=A(1),n=A(8),o=function(e,t,A,i){var n,o=arguments.length,r=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,A):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,A,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,A,r):n(t,A))||r);return o>3&&r&&Object.defineProperty(t,A,r),r};const r={data:"DFBbSTvtpy4",train:"CO67EQ0ZWgA",run:"n-zeeRLBgd0"};class s extends i.a{constructor(){super(...arguments),this.visible=!1,this.flag="",this.top=0,this.title="",this.text="",this.left=0,this.alignment="center",this.videoId=r.data,this.__width=280}show(){(null===n.a.getOnboardSetting(this.flag)||n.a.getOnboardSetting(this.flag))&&(this.visible=!0,n.a.setOnboardSetting(this.flag,!1))}__videoURL(){return`https://img.youtube.com/vi/${this.videoId}/mqdefault.jpg`}__openModal(){this.dispatchEvent(new CustomEvent("onboardOpen",{bubbles:!0,composed:!0,detail:{videoId:this.videoId}}))}render(){return i.d`
            <style>
                :host {
                    width: ${this.__width+6}px;
                    height: 314px;
                    position: absolute;
                    z-index: 200;
                    display: none;
                    top: ${this.top}px;
                    left: ${this.left}px;
                }

                :host([visible]) {
                    display: block;
                }

                .row {
                    display: flex;
                    flex-direction: row;
                }

                .column {
                    display: flex;
                    flex-direction: column;
                }

                #arrow {
                    justify-content: ${"left"===this.alignment?"flex-start":"right"===this.alignment?"flex-end":"center"};
                    margin-bottom: -2px;
                }

                #onboard-container {
                    background: #1967D2;
                    border: 3px solid #1967D2;
                    border-radius: 4px;
                    width: ${this.__width}px;
                    height: 100%;
                    color: white;
                }

                #text-container {
                    padding: 12px;
                }

                #exit-container {
                    padding-top: 4px;
                    cursor: pointer;
                }

                .title {
                    padding-bottom: 6px;
                    font-size:18px;
                    font-weight:500;
                }

                .text {
                    font-size: 14px;
                    font-weight: 400;
                }

                #play-icon {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    margin-top: 27px;
                    margin-left: -27px;
                    cursor: pointer;
                }
            </style>
            <div id='arrow' class='row'>
                ${i.f`
                    <svg width="33" height="46" viewBox="0 0 33 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5 43L16.5 3" stroke="#1967D2" stroke-width="5" stroke-miterlimit="3.99933" stroke-linecap="round"/>
                    <path d="M29.3937 20.4254C30.7331 20.7602 32.0905 19.9458 32.4254 18.6063C32.7602 17.2669 31.9458 15.9095 30.6063 15.5746L29.3937 20.4254ZM14.0881 3.65779C15.6734 9.4707 20.0703 18.0945 29.3937 20.4254L30.6063 15.5746C23.9297 13.9055 20.3266 7.5293 18.9119 2.34221L14.0881 3.65779Z" fill="#1967D2"/>
                    <path d="M3.60634 20.4254C2.26685 20.7602 0.909515 19.9458 0.574644 18.6063C0.239773 17.2669 1.05417 15.9095 2.39366 15.5746L3.60634 20.4254ZM18.9119 3.65779C17.3266 9.4707 12.9297 18.0945 3.60634 20.4254L2.39366 15.5746C9.07031 13.9055 12.6734 7.5293 14.0881 2.34221L18.9119 3.65779Z" fill="#1967D2"/>
                </svg>`}
            </div>
            <div style='position: absolute;'>
                <div id='onboard-container' class='column'>
                    <div id='text-container' class='row'>
                        <div class='column'>
                            <div class='title'>${this.title}</div>
                            <div class='text'>${this.text}</div>
                        </div>
                        <div id='exit-container' class='column' @click=${()=>this.visible=!1}>
                            ${i.f`
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="white"/>
                                </svg>
                            </svg>`}
                        </div>
                    </div>
                    <div class='row'>
                        <img src=${this.__videoURL()} alt='videoURL' width='100%'>
                        ${i.f`
                            <svg id='play-icon' @click=${this.__openModal} width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.6667 0C11.9467 0 0 11.9467 0 26.6667C0 41.3867 11.9467 53.3333 26.6667 53.3333C41.3867 53.3333 53.3333 41.3867 53.3333 26.6667C53.3333 11.9467 41.3867 0 26.6667 0Z" fill="#1967D2"/>
                            <path d="M21.334 38.6667V14.6667L37.334 26.6667L21.334 38.6667Z" fill="white"/>
                        </svg>`}
                    </div>
                </div>
            </div>
        `}}o([Object(i.e)({type:Boolean,reflect:!0})],s.prototype,"visible",void 0),o([Object(i.e)({type:String})],s.prototype,"flag",void 0),o([Object(i.e)({type:Number})],s.prototype,"top",void 0),o([Object(i.e)({type:String})],s.prototype,"title",void 0),o([Object(i.e)({type:String})],s.prototype,"text",void 0),o([Object(i.e)({type:Number})],s.prototype,"left",void 0),o([Object(i.e)({type:String})],s.prototype,"alignment",void 0),o([Object(i.e)({type:String})],s.prototype,"videoId",void 0),customElements.define("tm-onboard-box",s)},19:function(e,t,A){(function(t){e.exports=function(){"use strict";var e=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)},A=h,i=a,n=function(e){return l(a(e))},o=l,r=p,s=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function a(e){for(var t,A=[],i=0,n=0,o="";null!=(t=s.exec(e));){var r=t[0],a=t[1],l=t.index;if(o+=e.slice(n,l),n=l+r.length,a)o+=a[1];else{o&&(A.push(o),o="");var c=t[2],d=t[3],C=t[4],p=t[5],h=t[6],u=t[7],f="+"===h||"*"===h,E="?"===h||"*"===h,I=c||"/",Q=C||p||(u?".*":"[^"+I+"]+?");A.push({name:d||i++,prefix:c||"",delimiter:I,optional:E,repeat:f,pattern:g(Q)})}}return n<e.length&&(o+=e.substr(n)),o&&A.push(o),A}function l(t){for(var A=new Array(t.length),i=0;i<t.length;i++)"object"==typeof t[i]&&(A[i]=new RegExp("^"+t[i].pattern+"$"));return function(i){for(var n="",o=i||{},r=0;r<t.length;r++){var s=t[r];if("string"!=typeof s){var a,l=o[s.name];if(null==l){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to be defined')}if(e(l)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but received "'+l+'"');if(0===l.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var c=0;c<l.length;c++){if(a=encodeURIComponent(l[c]),!A[r].test(a))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'", but received "'+a+'"');n+=(0===c?s.prefix:s.delimiter)+a}}else{if(a=encodeURIComponent(l),!A[r].test(a))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but received "'+a+'"');n+=s.prefix+a}}else n+=s}return n}}function c(e){return e.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function g(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function d(e,t){return e.keys=t,e}function C(e){return e.sensitive?"":"i"}function p(e,t){for(var A=(t=t||{}).strict,i=!1!==t.end,n="",o=e[e.length-1],r="string"==typeof o&&/\/$/.test(o),s=0;s<e.length;s++){var a=e[s];if("string"==typeof a)n+=c(a);else{var l=c(a.prefix),g=a.pattern;a.repeat&&(g+="(?:"+l+g+")*"),n+=g=a.optional?l?"(?:"+l+"("+g+"))?":"("+g+")?":l+"("+g+")"}}return A||(n=(r?n.slice(0,-2):n)+"(?:\\/(?=$))?"),n+=i?"$":A&&r?"":"(?=\\/|$)",new RegExp("^"+n,C(t))}function h(t,A,i){return e(A=A||[])?i||(i={}):(i=A,A=[]),t instanceof RegExp?function(e,t){var A=e.source.match(/\((?!\?)/g);if(A)for(var i=0;i<A.length;i++)t.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return d(e,t)}(t,A):e(t)?function(e,t,A){for(var i=[],n=0;n<e.length;n++)i.push(h(e[n],t,A).source);return d(new RegExp("(?:"+i.join("|")+")",C(A)),t)}(t,A,i):function(e,t,A){for(var i=a(e),n=p(i,A),o=0;o<i.length;o++)"string"!=typeof i[o]&&t.push(i[o]);return d(n,t)}(t,A,i)}A.parse=i,A.compile=n,A.tokensToFunction=o,A.tokensToRegExp=r;var u,f="undefined"!=typeof document,E="undefined"!=typeof window,I="undefined"!=typeof history,Q=void 0!==t,B=f&&document.ontouchstart?"touchstart":"click",b=E&&!(!window.history.location&&!window.location);function m(){this.callbacks=[],this.exits=[],this.current="",this.len=0,this._decodeURLComponents=!0,this._base="",this._strict=!1,this._running=!1,this._hashbang=!1,this.clickHandler=this.clickHandler.bind(this),this._onpopstate=this._onpopstate.bind(this)}function v(e,t){if("function"==typeof e)return v.call(this,"*",e);if("function"==typeof t)for(var A=new k(e,null,this),i=1;i<arguments.length;++i)this.callbacks.push(A.middleware(arguments[i]));else"string"==typeof e?this["string"==typeof t?"redirect":"show"](e,t):this.start(e)}function w(e){if(!e.handled){var t=this._window;(this._hashbang?b&&this._getBase()+t.location.hash.replace("#!",""):b&&t.location.pathname+t.location.search)!==e.canonicalPath&&(this.stop(),e.handled=!1,b&&(t.location.href=e.canonicalPath))}}function y(e,t,A){var i=this.page=A||v,n=i._window,o=i._hashbang,r=i._getBase();"/"===e[0]&&0!==e.indexOf(r)&&(e=r+(o?"#!":"")+e);var s=e.indexOf("?");this.canonicalPath=e;var a=new RegExp("^"+r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"));if(this.path=e.replace(a,"")||"/",o&&(this.path=this.path.replace("#!","")||"/"),this.title=f&&n.document.title,this.state=t||{},this.state.path=e,this.querystring=~s?i._decodeURLEncodedURIComponent(e.slice(s+1)):"",this.pathname=i._decodeURLEncodedURIComponent(~s?e.slice(0,s):e),this.params={},this.hash="",!o){if(!~this.path.indexOf("#"))return;var l=this.path.split("#");this.path=this.pathname=l[0],this.hash=i._decodeURLEncodedURIComponent(l[1])||"",this.querystring=this.querystring.split("#")[0]}}function k(e,t,i){var n=this.page=i||x,o=t||{};o.strict=o.strict||n._strict,this.path="*"===e?"(.*)":e,this.method="GET",this.regexp=A(this.path,this.keys=[],o)}m.prototype.configure=function(e){var t=e||{};this._window=t.window||E&&window,this._decodeURLComponents=!1!==t.decodeURLComponents,this._popstate=!1!==t.popstate&&E,this._click=!1!==t.click&&f,this._hashbang=!!t.hashbang;var A=this._window;this._popstate?A.addEventListener("popstate",this._onpopstate,!1):E&&A.removeEventListener("popstate",this._onpopstate,!1),this._click?A.document.addEventListener(B,this.clickHandler,!1):f&&A.document.removeEventListener(B,this.clickHandler,!1),this._hashbang&&E&&!I?A.addEventListener("hashchange",this._onpopstate,!1):E&&A.removeEventListener("hashchange",this._onpopstate,!1)},m.prototype.base=function(e){if(0===arguments.length)return this._base;this._base=e},m.prototype._getBase=function(){var e=this._base;if(e)return e;var t=E&&this._window&&this._window.location;return E&&this._hashbang&&t&&"file:"===t.protocol&&(e=t.pathname),e},m.prototype.strict=function(e){if(0===arguments.length)return this._strict;this._strict=e},m.prototype.start=function(e){var t=e||{};if(this.configure(t),!1!==t.dispatch){var A;if(this._running=!0,b){var i=this._window.location;A=this._hashbang&&~i.hash.indexOf("#!")?i.hash.substr(2)+i.search:this._hashbang?i.search+i.hash:i.pathname+i.search+i.hash}this.replace(A,null,!0,t.dispatch)}},m.prototype.stop=function(){if(this._running){this.current="",this.len=0,this._running=!1;var e=this._window;this._click&&e.document.removeEventListener(B,this.clickHandler,!1),E&&e.removeEventListener("popstate",this._onpopstate,!1),E&&e.removeEventListener("hashchange",this._onpopstate,!1)}},m.prototype.show=function(e,t,A,i){var n=new y(e,t,this),o=this.prevContext;return this.prevContext=n,this.current=n.path,!1!==A&&this.dispatch(n,o),!1!==n.handled&&!1!==i&&n.pushState(),n},m.prototype.back=function(e,t){var A=this;if(this.len>0){var i=this._window;I&&i.history.back(),this.len--}else e?setTimeout((function(){A.show(e,t)})):setTimeout((function(){A.show(A._getBase(),t)}))},m.prototype.redirect=function(e,t){var A=this;"string"==typeof e&&"string"==typeof t&&v.call(this,e,(function(e){setTimeout((function(){A.replace(t)}),0)})),"string"==typeof e&&void 0===t&&setTimeout((function(){A.replace(e)}),0)},m.prototype.replace=function(e,t,A,i){var n=new y(e,t,this),o=this.prevContext;return this.prevContext=n,this.current=n.path,n.init=A,n.save(),!1!==i&&this.dispatch(n,o),n},m.prototype.dispatch=function(e,t){var A=0,i=0,n=this;function o(){var t=n.callbacks[A++];if(e.path===n.current)return t?void t(e,o):w.call(n,e);e.handled=!1}t?function e(){var A=n.exits[i++];if(!A)return o();A(t,e)}():o()},m.prototype.exit=function(e,t){if("function"==typeof e)return this.exit("*",e);for(var A=new k(e,null,this),i=1;i<arguments.length;++i)this.exits.push(A.middleware(arguments[i]))},m.prototype.clickHandler=function(e){if(1===this._which(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)){var t=e.target,A=e.path||(e.composedPath?e.composedPath():null);if(A)for(var i=0;i<A.length;i++)if(A[i].nodeName&&"A"===A[i].nodeName.toUpperCase()&&A[i].href){t=A[i];break}for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;if(t&&"A"===t.nodeName.toUpperCase()){var n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name;if(!t.hasAttribute("download")&&"external"!==t.getAttribute("rel")){var o=t.getAttribute("href");if((this._hashbang||!this._samePath(t)||!t.hash&&"#"!==o)&&!(o&&o.indexOf("mailto:")>-1)&&!(n?t.target.baseVal:t.target)&&(n||this.sameOrigin(t.href))){var r=n?t.href.baseVal:t.pathname+t.search+(t.hash||"");r="/"!==r[0]?"/"+r:r,Q&&r.match(/^\/[a-zA-Z]:\//)&&(r=r.replace(/^\/[a-zA-Z]:\//,"/"));var s=r,a=this._getBase();0===r.indexOf(a)&&(r=r.substr(a.length)),this._hashbang&&(r=r.replace("#!","")),(!a||s!==r||b&&"file:"===this._window.location.protocol)&&(e.preventDefault(),this.show(s))}}}}},m.prototype._onpopstate=(u=!1,E?(f&&"complete"===document.readyState?u=!0:window.addEventListener("load",(function(){setTimeout((function(){u=!0}),0)})),function(e){if(u)if(e.state){var t=e.state.path;this.replace(t,e.state)}else if(b){var A=this._window.location;this.show(A.pathname+A.search+A.hash,void 0,void 0,!1)}}):function(){}),m.prototype._which=function(e){return null==(e=e||E&&this._window.event).which?e.button:e.which},m.prototype._toURL=function(e){var t=this._window;if("function"==typeof URL&&b)return new URL(e,t.location.toString());if(f){var A=t.document.createElement("a");return A.href=e,A}},m.prototype.sameOrigin=function(e){if(!e||!b)return!1;var t=this._toURL(e),A=this._window.location;return A.protocol===t.protocol&&A.hostname===t.hostname&&(A.port===t.port||""===A.port&&(80==t.port||443==t.port))},m.prototype._samePath=function(e){if(!b)return!1;var t=this._window.location;return e.pathname===t.pathname&&e.search===t.search},m.prototype._decodeURLEncodedURIComponent=function(e){return"string"!=typeof e?e:this._decodeURLComponents?decodeURIComponent(e.replace(/\+/g," ")):e},y.prototype.pushState=function(){var e=this.page,t=e._window,A=e._hashbang;e.len++,I&&t.history.pushState(this.state,this.title,A&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},y.prototype.save=function(){var e=this.page;I&&e._window.history.replaceState(this.state,this.title,e._hashbang&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},k.prototype.middleware=function(e){var t=this;return function(A,i){if(t.match(A.path,A.params))return A.routePath=t.path,e(A,i);i()}},k.prototype.match=function(e,t){var A=this.keys,i=e.indexOf("?"),n=~i?e.slice(0,i):e,o=this.regexp.exec(decodeURIComponent(n));if(!o)return!1;delete t[0];for(var r=1,s=o.length;r<s;++r){var a=A[r-1],l=this.page._decodeURLEncodedURIComponent(o[r]);void 0===l&&hasOwnProperty.call(t,a.name)||(t[a.name]=l)}return!0};var x=function e(){var t=new m;function A(){return v.apply(t,arguments)}return A.callbacks=t.callbacks,A.exits=t.exits,A.base=t.base.bind(t),A.strict=t.strict.bind(t),A.start=t.start.bind(t),A.stop=t.stop.bind(t),A.show=t.show.bind(t),A.back=t.back.bind(t),A.redirect=t.redirect.bind(t),A.replace=t.replace.bind(t),A.dispatch=t.dispatch.bind(t),A.exit=t.exit.bind(t),A.configure=t.configure.bind(t),A.sameOrigin=t.sameOrigin.bind(t),A.clickHandler=t.clickHandler.bind(t),A.create=e,Object.defineProperty(A,"len",{get:function(){return t.len},set:function(e){t.len=e}}),Object.defineProperty(A,"current",{get:function(){return t.current},set:function(e){t.current=e}}),A.Context=y,A.Route=k,A}(),S=x,O=x;return S.default=O,S}()}).call(this,A(43))},2:function(e,t,A){"use strict";A.d(t,"c",(function(){return s})),A.d(t,"d",(function(){return l})),A.d(t,"b",(function(){return c})),A.d(t,"a",(function(){return o}));function i(e,t,A){return Object.entries(o(t||{})).reduce((e,[t,A])=>e.replace(new RegExp(`{{[  ]*${t}[  ]*}}`,"gm"),String(o(A))),e)}function n(e,t){const A=e.split(".");let i=t.strings;for(;null!=i&&A.length>0;)i=i[A.shift()];return null!=i?i.toString():null}function o(e){return"function"==typeof e?e():e}let r={loader:()=>Promise.resolve({}),empty:e=>`[${e}]`,lookup:n,interpolate:i,translationCache:{}};function s(e){return r=Object.assign(Object.assign({},r),e)}function a(e,t,A=r){var i;i={previousStrings:A.strings,previousLang:A.lang,lang:A.lang=e,strings:A.strings=t},window.dispatchEvent(new CustomEvent("langChanged",{detail:i}))}async function l(e,t=r){const A=await t.loader(e,t);t.translationCache={},a(e,A,t)}function c(e,t,A=r){let i=A.translationCache[e]||(A.translationCache[e]=A.lookup(e,A)||A.empty(e,A));return null!=(t=null!=t?o(t):null)?A.interpolate(i,t,A):i}var g=A(5);function d(e){return e instanceof g.b?e.startNode.isConnected:e instanceof g.a?e.committer.element.isConnected:e.element.isConnected}const C=new Map;var p;function h(e,t,A){const i=t(A);e.value!==i&&(e.setValue(i),e.commit())}!function(e,t){const A=t=>e(t.detail);window.addEventListener("langChanged",A,t)}(e=>{for(const[t,A]of C)d(t)&&h(t,A,e)}),p=C,setInterval(()=>{return e=()=>function(e){for(const[t]of e)d(t)||e.delete(t)}(p),void("requestIdleCallback"in window?window.requestIdleCallback(e):setTimeout(e));var e},6e4);Object(g.e)(e=>t=>{C.set(t,e),h(t,e)});A(6)},211:function(e,t,A){"use strict";A.r(t);var i=A(19),n=A.n(i),o=A(1),r=A(5);const s=()=>o.f`
    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <title>TensorFlow</title>
        <rect width="32" height="33" fill="url(#pattern0)"/>
        <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlink:href="#image0" transform="translate(-0.011158) scale(0.0012763)"/>
        </pattern>
        <image id="image0" width="801" height="808" xlink:href="data:image/png;base64,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ABBKhAAAAKFECAAAEEqEAAAAoUQIAAAQSoQAAAChRAgAABBKhAAAAKFECAAAEEqEAAAAoUQIAAAQSoQAAAChRAgAABBKhAAAAKFECAAAEEqEAAAAoUQIAAAQSoQAAAChRAgAABBKhAAAAKFECAAAEEqEAAAAoUQIAAAQSoQAAAChRAgAABBKhAAAAKFECAAAEEqEAAAAoUQIAAAQSoQAAAChRAgAABBKhAAAAKFECAAAEEqEAAAAoUQIAAAQSoQAAAChRAgAABBKhAAAAKFECAAAEEqEAAAAoUQIAAAQSoQAAAChRAgAABBKhAAAAKFECAAAEEqEAAAAoUQIAAAQSoQAAAChRAgAABBKhAAAAKFECAAAEEqEAAAAoUQIAAAQSoQAAAChRAgAABBKhAAAAKFECAAAEEqEAAAAoUQIAAAQSoQAAAChRAgAABBKhAAAAKFECAAAEEqEAAAAoUQIAAAQSoQAAAChRAgAABBKhAAAAKFECAAAEEqEAAAAoUQIAAAQSoQAAAChRAgAABBKhAAAAKFECAAAEEqEAAAAoUQIAAAQSoQAAAChRAgAABBKhAAAAKFECAAAEEqEAAAAoUQIAAAQSoQAAAChRAgAABBKhAAAAKFECAAAEEqEAAAAoUQIAAAQSoQAAAChRAgAABBKhAAAAKFECAAAEEqEAAAAoUQIAAAQSoQAAAChRAgAABBKhAAAAKFECAAAEEqEAAAAoUQIAAAQSoQAAAChRAgAABBKhAAAAKFECAAAEEqEAAAAoUQIAAAQSoQAAAChRAgAABBKhAAAAKFECAAAEEqEAAAAoUQIAAAQSoQAAAChRAgAABBKhAAAAKFECAAAEEqEAAAAoUQIAAAQSoQAAAChRAgAABBKhAAAAKFECAAAEEqEAAAAoUQIAAAQSoQAAAChRAgAABBKhAAAAKFECAAAEEqEAAAAoUQIAAAQSoQAAAChRAgAABBKhAAAAKFECAAAEEqEAAAAoUQIAAAQSoQAAAChRAgAABBKhAAAAKFECAAAEEqEAAAAoUQIAAAQJ6X0/wGNBE9AQgbU/wAAAABJRU5ErkJggg=="/>
        </defs>
    </svg>
    `,a=()=>o.f`
    <svg width="45" height="17" viewBox="0 0 45 17" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <title>ML</title>
        <rect width="45" height="17" fill="url(#pattern1)"/>
        <defs>
        <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlink:href="#image1" transform="translate(0 -0.00427743) scale(0.000600962 0.00159078)"/>
        </pattern>
        <image id="image1" width="1664" height="634" xlink:href="data:image/png;base64,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"/>
        </defs>
    </svg>`,l=()=>o.f`
    <svg width="38" height="17" viewBox="0 0 38 17" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <title>p5.js</title>
        <rect width="38" height="17" fill="url(#pattern2)"/>
        <defs>
        <pattern id="pattern2" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlink:href="#image2" transform="translate(0 -0.00964706) scale(0.004 0.00894118)"/>
        </pattern>
        <image id="image2" width="250" height="114" xlink:href="data:image/png;base64,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"/>
        </defs>
    </svg>`,c=()=>o.f`
    <svg width="56" height="17" viewBox="0 0 56 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title>Coral</title>
        <path d="M20.3017 5.62305C17.1681 5.62305 14.6523 8.10766 14.6523 11.2025C14.6523 14.2974 17.1681 16.782 20.3017 16.782C23.4354 16.782 25.9511 14.2974 25.9511 11.2025C25.9511 8.10766 23.3912 5.62305 20.3017 5.62305ZM20.3017 14.1666C18.6246 14.1666 17.3005 12.8589 17.3005 11.2025C17.3005 9.54612 18.6246 8.23843 20.3017 8.23843C21.9789 8.23843 23.303 9.54612 23.303 11.2025C23.303 12.8589 21.9347 14.1666 20.3017 14.1666Z" fill="#FF5E4D"/>
        <path d="M33.8515 9.63331C34.9728 9.63331 35.8818 8.73558 35.8818 7.62818C35.8818 6.52077 34.9728 5.62305 33.8515 5.62305C32.7303 5.62305 31.8213 6.52077 31.8213 7.62818C31.8213 8.73558 32.7303 9.63331 33.8515 9.63331Z" fill="#FF5E4D"/>
        <path d="M30.7624 5.88477H27.8936V16.6514H30.7624V5.88477Z" fill="#FF5E4D"/>
        <path d="M52.7419 0.915283H49.873V16.6512H52.7419V0.915283Z" fill="#FF5E4D"/>
        <path d="M42.1494 5.62305C39.0157 5.62305 36.5 8.10766 36.5 11.2025C36.5 14.2974 38.4861 16.782 41.6198 16.782C42.8556 16.782 44.4003 16.1282 45.0623 14.9948C45.0623 15.2128 45.0623 16.6513 45.0623 16.6513H47.7546C47.7546 16.6513 47.7546 11.2025 47.7546 11.1589C47.7546 8.10766 45.283 5.62305 42.1494 5.62305ZM42.1052 14.1666C40.4281 14.1666 39.104 12.8589 39.104 11.2025C39.104 9.54612 40.4281 8.23843 42.1052 8.23843C43.7824 8.23843 45.1065 9.54612 45.1065 11.2025C45.1065 12.8589 43.7383 14.1666 42.1052 14.1666Z" fill="#FF5E4D"/>
        <path d="M8.34131 13.9052C5.47248 13.9052 3.17742 11.5949 3.17742 8.80516C3.17742 6.01542 5.47248 3.70516 8.34131 3.70516C9.84192 3.70516 11.2543 4.35901 12.2694 5.49234L14.4762 3.70516C12.8873 1.87439 10.6805 0.871826 8.34131 0.871826C3.88359 0.871826 0.308594 4.44619 0.308594 8.80516C0.308594 13.1641 3.92773 16.7385 8.34131 16.7385C10.2391 16.7385 12.0928 16.0846 13.5052 14.8641L11.6515 12.7282C10.7246 13.5129 9.53297 13.9052 8.34131 13.9052Z" fill="#FF5E4D"/>
    </svg> `,g=()=>o.f`
    <svg width="14" height="21" viewBox="0 0 14 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title>Framr</title>
        <path d="M0 0H14V7H7L0 0Z" fill="black"/>
        <path d="M0 7H7L14 14H0V7Z" fill="black"/>
        <path d="M0 14H7V21L0 14Z" fill="black"/>
    </svg>
    `,d=()=>o.f`
    <svg width="40" height="25" viewBox="0 0 40 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title>node.js</title>
        <path d="M19.7646 25.0001C19.6289 25.0001 19.5023 24.9631 19.3848 24.8985L18.1823 24.1695C18.0014 24.068 18.0919 24.0311 18.1461 24.0126C18.3902 23.9296 18.4354 23.9111 18.6886 23.7634C18.7157 23.745 18.7519 23.7542 18.779 23.7727L19.7013 24.3356C19.7374 24.3541 19.7826 24.3541 19.8098 24.3356L23.4174 22.2038C23.4535 22.1854 23.4716 22.1484 23.4716 22.1023V17.848C23.4716 17.8018 23.4535 17.7649 23.4174 17.7465L19.8098 15.6239C19.7736 15.6054 19.7284 15.6054 19.7013 15.6239L16.0937 17.7465C16.0575 17.7649 16.0394 17.8111 16.0394 17.848V22.1023C16.0394 22.1392 16.0575 22.1854 16.0937 22.2038L17.0792 22.7852C17.6127 23.0621 17.9472 22.7391 17.9472 22.4161V18.2171C17.9472 18.1617 17.9924 18.1064 18.0557 18.1064H18.5168C18.5711 18.1064 18.6253 18.1525 18.6253 18.2171V22.4161C18.6253 23.1451 18.2365 23.5696 17.5584 23.5696C17.3504 23.5696 17.1877 23.5696 16.7266 23.3389L15.7772 22.7852C15.5421 22.6468 15.3975 22.3884 15.3975 22.1115V17.8572C15.3975 17.5803 15.5421 17.3219 15.7772 17.1835L19.3848 15.0517C19.6108 14.9225 19.9183 14.9225 20.1443 15.0517L23.7519 17.1835C23.987 17.3219 24.1316 17.5803 24.1316 17.8572V22.1115C24.1316 22.3884 23.987 22.6468 23.7519 22.7852L20.1443 24.917C20.0358 24.9631 19.9002 25.0001 19.7646 25.0001Z" fill="#679E63"/>
        <path d="M20.8853 22.0748C19.303 22.0748 18.9775 21.3365 18.9775 20.7089C18.9775 20.6536 19.0227 20.5982 19.086 20.5982H19.5562C19.6105 20.5982 19.6557 20.6351 19.6557 20.6905C19.728 21.1796 19.9359 21.4195 20.8944 21.4195C21.6538 21.4195 21.9793 21.2442 21.9793 20.8289C21.9793 20.589 21.8889 20.4136 20.7045 20.2937C19.7189 20.1921 19.1041 19.9707 19.1041 19.1678C19.1041 18.4203 19.7189 17.9773 20.7497 17.9773C21.907 17.9773 22.4766 18.3833 22.549 19.2693C22.549 19.297 22.5399 19.3247 22.5218 19.3523C22.5038 19.3708 22.4766 19.3893 22.4495 19.3893H21.9703C21.9251 19.3893 21.8799 19.3523 21.8708 19.3062C21.7623 18.7986 21.4821 18.6325 20.7406 18.6325C19.9088 18.6325 19.8094 18.9278 19.8094 19.1493C19.8094 19.4169 19.9269 19.5 21.0481 19.6477C22.1602 19.7953 22.6846 20.0076 22.6846 20.8012C22.6846 21.6133 22.0246 22.0748 20.8853 22.0748Z" fill="#679E63"/>
        <path d="M26.0936 17.6081C26.0936 17.9957 25.7771 18.3186 25.3974 18.3186C25.0176 18.3186 24.7012 18.0049 24.7012 17.6081C24.7012 17.202 25.0267 16.8975 25.3974 16.8975C25.7681 16.8975 26.0936 17.2112 26.0936 17.6081ZM24.8097 17.6081C24.8097 17.9403 25.0719 18.2079 25.3883 18.2079C25.7138 18.2079 25.976 17.9311 25.976 17.6081C25.976 17.2758 25.7138 17.0174 25.3883 17.0174C25.0809 17.0174 24.8097 17.2758 24.8097 17.6081ZM25.1352 17.2112H25.4064C25.4968 17.2112 25.6777 17.2112 25.6777 17.4235C25.6777 17.5711 25.5872 17.5988 25.533 17.6173C25.6415 17.6265 25.6505 17.7003 25.6596 17.8019C25.6686 17.8665 25.6777 17.9772 25.6957 18.0141H25.533C25.533 17.9772 25.5059 17.7742 25.5059 17.7649C25.4968 17.7188 25.4787 17.7003 25.4245 17.7003H25.2889V18.0233H25.1352V17.2112ZM25.2798 17.5619H25.3974C25.4968 17.5619 25.5149 17.4881 25.5149 17.4512C25.5149 17.3404 25.4426 17.3404 25.3974 17.3404H25.2708V17.5619H25.2798Z" fill="#679E63"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.58047 8.36103C8.58047 8.19492 8.49005 8.03803 8.34539 7.95498L4.5208 5.69399C4.4575 5.65708 4.38517 5.63862 4.31284 5.62939C4.3038 5.62939 4.27667 5.62939 4.27667 5.62939C4.20434 5.62939 4.13201 5.65708 4.06872 5.69399L0.235081 7.94575C0.0904159 8.0288 0 8.18569 0 8.36103L0.00904159 14.4149C0.00904159 14.498 0.0542495 14.581 0.126582 14.6179C0.198915 14.6641 0.289331 14.6641 0.352622 14.6179L2.6311 13.289C2.77577 13.206 2.86618 13.0491 2.86618 12.883V10.0498C2.86618 9.88373 2.9566 9.72685 3.10127 9.64379L4.06872 9.07162C4.14105 9.02548 4.22242 9.00702 4.3038 9.00702C4.38517 9.00702 4.46655 9.02548 4.52984 9.07162L5.49729 9.64379C5.64195 9.72685 5.73237 9.88373 5.73237 10.0498V12.883C5.73237 13.0491 5.82278 13.206 5.96745 13.289L8.22785 14.6179C8.30018 14.6641 8.3906 14.6641 8.46293 14.6179C8.53526 14.581 8.58047 14.498 8.58047 14.4149V8.36103Z" fill="#333333"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M27.0076 0.0276855C26.9353 -0.0092285 26.8449 -0.0092285 26.7816 0.0276855C26.7092 0.073828 26.664 0.147656 26.664 0.230712V6.22924C26.664 6.28461 26.6369 6.33998 26.5826 6.37689C26.5284 6.40458 26.4741 6.40458 26.4199 6.37689L25.4615 5.81395C25.3168 5.7309 25.145 5.7309 25.0004 5.81395L21.1667 8.07494C21.0221 8.15799 20.9316 8.31488 20.9316 8.48099V12.9937C20.9316 13.1598 21.0221 13.3167 21.1667 13.3998L25.0004 15.6608C25.145 15.7438 25.3168 15.7438 25.4615 15.6608L29.2951 13.3998C29.4398 13.3167 29.5302 13.1598 29.5302 12.9937V1.74419C29.5302 1.56884 29.4398 1.41196 29.2951 1.3289L27.0076 0.0276855ZM26.655 11.5079C26.655 11.5541 26.6369 11.591 26.6007 11.6095L25.2897 12.3846C25.2535 12.4031 25.2083 12.4031 25.1722 12.3846L23.8611 11.6095C23.825 11.591 23.8069 11.5449 23.8069 11.5079V9.95755C23.8069 9.91141 23.825 9.87449 23.8611 9.85604L25.1722 9.08084C25.2083 9.06238 25.2535 9.06238 25.2897 9.08084L26.6007 9.85604C26.6369 9.87449 26.655 9.92064 26.655 9.95755V11.5079Z" fill="#333333"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M39.765 9.92064C39.9097 9.83758 39.9911 9.68069 39.9911 9.51458V8.41639C39.9911 8.25028 39.9007 8.09339 39.765 8.01034L35.9585 5.75858C35.8139 5.67552 35.6421 5.67552 35.4974 5.75858L31.6638 8.01956C31.5191 8.10262 31.4287 8.25951 31.4287 8.42562V12.9384C31.4287 13.1045 31.5191 13.2614 31.6638 13.3444L35.4703 15.5593C35.615 15.6423 35.7867 15.6423 35.9224 15.5593L38.228 14.2488C38.3003 14.2119 38.3455 14.1288 38.3455 14.0458C38.3455 13.9627 38.3003 13.8797 38.228 13.8428L34.3763 11.5818C34.3039 11.5356 34.2587 11.4618 34.2587 11.3787V9.96678C34.2587 9.88372 34.3039 9.80067 34.3763 9.76375L35.5788 9.06239C35.6511 9.01624 35.7415 9.01624 35.8139 9.06239L37.0164 9.76375C37.0887 9.80989 37.1339 9.88372 37.1339 9.96678V11.0742C37.1339 11.1573 37.1792 11.2403 37.2515 11.2772C37.3238 11.3234 37.4142 11.3234 37.4866 11.2772L39.765 9.92064Z" fill="#333333"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M35.6692 9.70842C35.6963 9.68997 35.7325 9.68997 35.7596 9.70842L36.492 10.1422C36.5191 10.1606 36.5372 10.1883 36.5372 10.2252V11.0927C36.5372 11.1296 36.5191 11.1573 36.492 11.1758L35.7596 11.6095C35.7325 11.628 35.6963 11.628 35.6692 11.6095L34.9368 11.1758C34.9097 11.1573 34.8916 11.1296 34.8916 11.0927V10.2252C34.8916 10.1883 34.9097 10.1606 34.9368 10.1422L35.6692 9.70842Z" fill="#679E63"/>
        <path d="M14.9907 5.77689C14.8461 5.69384 14.6743 5.69384 14.5296 5.77689L10.7231 8.01942C10.5784 8.10247 10.4971 8.25936 10.4971 8.42547V12.9198C10.4971 13.0859 10.5875 13.2428 10.7231 13.3258L14.5296 15.5683C14.6743 15.6514 14.8461 15.6514 14.9907 15.5683L18.7973 13.3258C18.9419 13.2428 19.0233 13.0859 19.0233 12.9198V8.42547C19.0233 8.25936 18.9329 8.10247 18.7973 8.01942L14.9907 5.77689Z" fill="url(#paint0_linear)"/>
        <path d="M18.806 8.01865L14.9814 5.77612C14.9452 5.75767 14.9 5.73921 14.8638 5.72998L10.5781 13.2143C10.6143 13.2604 10.6595 13.2973 10.7047 13.325L14.5293 15.5676C14.6378 15.6322 14.7644 15.6506 14.8819 15.6137L18.9054 8.10171C18.8783 8.06479 18.8421 8.03711 18.806 8.01865Z" fill="url(#paint1_linear)"/>
        <path d="M14.4029 4.95557L14.3486 4.98325H14.421L14.4029 4.95557Z" fill="url(#paint2_linear)"/>
        <path d="M18.8058 13.3258C18.9143 13.2612 18.9957 13.1505 19.0319 13.0305L14.8456 5.72153C14.7371 5.70308 14.6196 5.7123 14.5201 5.7769L10.7227 8.0102L14.8185 15.6329C14.8727 15.6237 14.936 15.6053 14.9903 15.5776L18.8058 13.3258Z" fill="url(#paint3_linear)"/>
        <path d="M19.1678 13.2519L19.1406 13.2058V13.2704L19.1678 13.2519Z" fill="url(#paint4_linear)"/>
        <path d="M18.8067 13.3258L14.9911 15.5683C14.9369 15.596 14.8826 15.6144 14.8193 15.6237L14.8917 15.7621L19.1231 13.2612V13.2058L19.0146 13.0212C19.0056 13.1504 18.9242 13.2612 18.8067 13.3258Z" fill="url(#paint5_linear)"/>
        <path d="M18.8067 13.3258L14.9911 15.5683C14.9369 15.596 14.8826 15.6144 14.8193 15.6237L14.8917 15.7621L19.1231 13.2612V13.2058L19.0146 13.0212C19.0056 13.1504 18.9242 13.2612 18.8067 13.3258Z" fill="url(#paint6_linear)"/>
        <defs>
        <linearGradient id="paint0_linear" x1="16.3104" y1="7.44703" x2="12.7538" y2="14.5557" gradientUnits="userSpaceOnUse">
        <stop stop-color="#3F873F"/>
        <stop offset="0.3296" stop-color="#3F8B3D"/>
        <stop offset="0.6367" stop-color="#3E9638"/>
        <stop offset="0.9341" stop-color="#3DA92E"/>
        <stop offset="1" stop-color="#3DAE2B"/>
        </linearGradient>
        <linearGradient id="paint1_linear" x1="14.1814" y1="11.1966" x2="23.9771" y2="4.10556" gradientUnits="userSpaceOnUse">
        <stop offset="0.1376" stop-color="#3F873F"/>
        <stop offset="0.4016" stop-color="#52A044"/>
        <stop offset="0.7129" stop-color="#64B749"/>
        <stop offset="0.9081" stop-color="#6ABF4B"/>
        </linearGradient>
        <linearGradient id="paint2_linear" x1="10.357" y1="4.9664" x2="19.1658" y2="4.9664" gradientUnits="userSpaceOnUse">
        <stop offset="0.0919165" stop-color="#6ABF4B"/>
        <stop offset="0.2871" stop-color="#64B749"/>
        <stop offset="0.5984" stop-color="#52A044"/>
        <stop offset="0.8624" stop-color="#3F873F"/>
        </linearGradient>
        <linearGradient id="paint3_linear" x1="10.3571" y1="10.6712" x2="19.1651" y2="10.6712" gradientUnits="userSpaceOnUse">
        <stop offset="0.0919165" stop-color="#6ABF4B"/>
        <stop offset="0.2871" stop-color="#64B749"/>
        <stop offset="0.5984" stop-color="#52A044"/>
        <stop offset="0.8624" stop-color="#3F873F"/>
        </linearGradient>
        <linearGradient id="paint4_linear" x1="10.3568" y1="13.2377" x2="19.1654" y2="13.2377" gradientUnits="userSpaceOnUse">
        <stop offset="0.0919165" stop-color="#6ABF4B"/>
        <stop offset="0.2871" stop-color="#64B749"/>
        <stop offset="0.5984" stop-color="#52A044"/>
        <stop offset="0.8624" stop-color="#3F873F"/>
        </linearGradient>
        <linearGradient id="paint5_linear" x1="10.3579" y1="14.3977" x2="19.1659" y2="14.3977" gradientUnits="userSpaceOnUse">
        <stop offset="0.0919165" stop-color="#6ABF4B"/>
        <stop offset="0.2871" stop-color="#64B749"/>
        <stop offset="0.5984" stop-color="#52A044"/>
        <stop offset="0.8624" stop-color="#3F873F"/>
        </linearGradient>
        <linearGradient id="paint6_linear" x1="20.4492" y1="7.23455" x2="14.8354" y2="18.4546" gradientUnits="userSpaceOnUse">
        <stop stop-color="#3F873F"/>
        <stop offset="0.3296" stop-color="#3F8B3D"/>
        <stop offset="0.6367" stop-color="#3E9638"/>
        <stop offset="0.9341" stop-color="#3DA92E"/>
        <stop offset="1" stop-color="#3DAE2B"/>
        </linearGradient>
        </defs>
    </svg> `,C=()=>o.f`
    <svg width="35" height="28" viewBox="0 0 35 28" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <title>Glitch</title>
        <rect width="35" height="28" fill="url(#pattern3)"/>
        <defs>
        <pattern id="pattern3" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlink:href="#image3" transform="translate(0 -0.0178571) scale(0.00357143 0.00446429)"/>
        </pattern>
        <image id="image3" width="280" height="232" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAADoCAYAAAA0a/shAAAACXBIWXMAACxKAAAsSgF3enRNAAAgAElEQVR4nO2dCXhV1bn3/weSkJCQgVmmBBBBUQlOIKgEbW21VoJ1Kk6xtbXY8hl7ve13n7a3cO/ztffrU2/xxq/pba3G2qLFgdDWqbeVYGVQHBIRBQVJGAMEyEyAcPb3rD2cs/d+373PkDPsc876Pc8iYe299rCy13+/77uG7VMUBRKJRBIPBslalUgk8UIKjEQiiRtSYCQSSdyQAiORSOKGFBiJRBI3pMBIJJK4kSWr1vscWIIZAMbqF9ou0rhVaM70epF4HzkOxsMcWILlAKoAlDpcZQuARj01iJ/jVqkCJJF4AikwHmT/EpQDqHcRFjdazIIzfpX6UyJJClJgPMbeJagG8IsYX1WTITji50TpXkkShBQYj7DnqygGsBLAPQm4IrOV0zDpGfV3iSTmSIHxAC2auIjGPitJV9NhiI1IpVJwJDFCCkySaU6+uHBYBKdMCo4kSqTAJJHd3hQXDkNwROC5YfIzMoYjCQ8pMEnis9QRF44WQ2ymPKP+lEhYpMAkgV2pLS4caw0LZ6q0biQmpMAkmJ3pJy52jC7xurNl7CbjkQKTYD69XXUpFmXI7RquVN20Z6XYZCJSYBLIJ7ejLkHjXLyIITYrz3lWulGZghSYBLHj9riM0E1VmvRBhfXTn5Vzp9IZKTAJYPvtqASwJu1vNHI6dKtm+Qxp1aQlUmDizMe3qxMXRdCzKK1vdOA8JYTmXCk0aYUUmDjy0e1qj1FjlLOiMxUhNNXnSdcpLZAr2sURBahTgFJF+12m8NI9CtC87XZUpO2DkUFICyZGfHib6goVm44m4i4PpvRNJZ+F5/9RrmeTymTskplbb7O8Ie1vSyEU5aSQlidjKYlDdOuXZcrNpiNpb8E0aUJSrifxsC4gO0m8zIpZf1SXDpWkIGknMLqgGEmKSXowe9Yf5UjgVCQtBKbxNjXeYSTpwqQfYrxMWfkfZc9SqpGyAvP+baq7U62vui9FJf0Ro38rZkuRSSlSTmDeu1UVlCrp/mQkwpKpuGi1dJdShZQQmHduVXt1hPuzXA5akwB46JLV6lwmicfxtMBs0YSlWk/SDZKYES5T9aWr5TgZL+NZgXn7VlVUlkthkYRgvXCZL1st5zAlmrc1A6BC9y4qTN7FistWa0MLPCcwb92qXuxK6QpJIkQITbOeRIymeY6M1cSFt7Q4aKXLwmktc1ZrAyQ9IzCbb1UHwq2UwVtJjGkyf0p3rhSdqNh8q2qhVEUwFCR77mr0J11gNmlm1nI5b0eSIDrMX7W8XMZwHNl0q2qFGL22kXoUJZevRntSBWbjLdIdkniC9YbgzHtOCs7GW2IyFKRk3nNJEpgNt6hWS52LDyeRJBNDcOrnP5cZLtWGW9QQRXUMR8NPnv8cmhMuMG9qVkud7B2SpAjGsp6q4FzxXPqMJH7zlsD4suo4fEZn8hWJFJh/SKslPLKBSXOAklF07452wH/amtctHvf+4P/7TwGnOq3rcJzq1ZIkJqzXBaf+yudSs2v8H7cEArbx/MLF5CsTJTBvSKslbKYsBAqLY3QwB06fBrraAZ9pc/sRIMuU0XEEyNX/f+Y0cKKDP1aGE/g6wlUet2zeuGVAAdtomHxVvAVm/S2yhygSckYCM6/09jX29gIne7TfhQgN9gG9HcCg0xlvKYnP59YveE59kXqC9UEXyG3MSryYvCCeAtNwsxo0qkvjT6Q6UjQBGHceMCgL6GwF9r7ntKeV7BHABWkwCqi3BzjZC5zoAfp7NQEa3A90HSG7piNGzKa+4nn1Z8JpuNkTy5eUVDwfp16kdTerZtjKTHSJ8kcAM2wi0XYAaNlMdiUMygNmX0ey0wrDPevTxae7DTiTvpZPQGwWxlls1mkvdGMgnBeGfZQsjLXAvH6zapKtzODPo2L61cAwJobS+KrWoEJReiUwignwZgJHj2julxCbnjbA36tZQmnEWmO8zdXPD7z7+3XviYqZkqtjKTB/z2CXyEz5l4HsbJKN3m5g219JNmHIWODCeSQ7YzEsHhGEPiHCqCc0lysN6DCmLxg/r3nePVD895vVQG2FaYKhZz2Ea57X+hBiIjB/y2CXyM6Mq517gbatB3qOkmzCzC8A+fkkGz09wM53tN9PK4BfxG1yghZTv/6nHJqvJfU7RHre6NHkcCmNsHaE6JzsAE60aT1daUCLLjiG6JTpyVi0PlVGvHd87nntEz4DFpi/3qwKi+wl0skfDlzg8MkwYcV8EIYVM2IGMO08kq3ywRtAbxvJDptTCnBGAQqKgaxs4Ay0/+eZREkIlfg93yRSXhcoMUZIjAnqbAP62tLOtUo11l/7vPYpoKi/i/TazckdODesDCicDOTZ4hWdzcCxbUB/DymSELqPaW/XEUwcZWiBFgTuDmHFtIv3mIPADJ+kxSeiJdunpf5Oy/g89BwDzFVmt9V36cKTNRTIHaoJ1fDRmjgVCbHKAYqLefcwEYhrEGm8/hUl0ZN17Ahw/ADQdxToTw8LJ1UIzOeKSmBe/YoqLg2Jjrdk5wOlNwDjF1JhsSNEZv86LSWa3e8AIxx6g6ZeDDS+RrItnO4Fjhzhg71jxgN73iXZCWGwsGZE97NuHRzRhfKY6eRChHKLtS76fPEzGxgxWrOWih1cx3hguIkTdMHp0OM4QnAGYgFKwiIQwI7YRXolSeIy5jLgwmXaGzQShNB8/CTQuTuRVwucexUwnBEIwZZXQnfLFk0Czr+UZKts3Qh0HiTZqcFQICcPKB4FDMrR4lWJtnxE4PjoYeDoAa0e7dMvJAOm5LoXNCM4IoF5OUniIoRlQgXQ03UCz7+4Go2NjWoSFBcXo6KiApWVlSgt5WNgonv4oyeAfQm0ZnKGApc5WDHHjwDb3iDZFsSbf96NJFvls0+BAx+Q7JTGnwUMLQKGFmvxIRET4iy4eCCsmwPNmuvZJ6dEDJSm618IfnY5bIF5KUniMmsZMOKSk/jZI/+BlStXor3duSdPCI3YZ9Ys/hKbHkusyJx3FR+LEVX+5oskm3D2XOCs8SRbjS+8+yrJTktyioC8Ii3uUzI6/taOqNvDB4AjLVJsouShL70Q/OJDWALzlySJy8yvAf4pe/G5669Cc3P4E1eFyDz4IN+x9cbDiXOXsvKAedeTbJXm7cCebSTbQvEk4EIHN+ntv2VuA8gt0pJwswwXKx6IYQGHDgBtUmwiYfINLwRnmYcV5FWSMIBuxExg0NmtuGjuha5WC0d1dbUqSL/4xS/I1ku/D6z/J+B0AnqZTp8AerqB/AKyCWPLgJYQAtPhEmcpGJm5M5zFfYt0fI/2f18WMGwUUDRKi3vFSnBEN/2UaVoSls3+Fs2yOR0ifpbBrP3yC9YlLAYvX77ctTr+9BV1NvT9ZEOcOedb7Si/clrE4mKwefNmzJ49GzNmzLDki54oMSirLUTjjhUnTwJjJtCDZWUBB1rcB4gpfqB4HJCbSzah/wzQto9kZySink52Ax2HgNbdwJ6dwLGjwOkzWu9VTs7Aa0UMaBTu7sRp2t9EGaSNaxLnlgRYOv02q8C4ukhrb1IHyyS8o3fk+cAfDz2Mml8/QrZFgggAC0umqMg6wFi8gV6+MzH3IrhqMTB4MMnG3s+AnSFmWo87F5g+k2SrPSFvriXZEgYRcBeiIKybkaNjG8M5uB842AJ0HCCbMo31i14EGWLqaMHU36TGXcQcYOb9GV8GX7od3/nxHQM+R19fH3Jzc9Xgr+Wms4GOZqBrPykSF/JLgIJCeuQhecDeT0i2BSH/xuAxyz0M1h7u/pNkk8SGsBLFQEJh8e3ZAQijuLcPGJI7cOtmWCFw1kRgdCkwOB/o7XK3StOYe2fcRlf4G+R0vwqwUgzSVPSHPJFp44dhjKcPk7o6fv2fkTMTd087m8jpVYTrw+1vTl0ug8Lyi+j+MoVOxw4AzU3A5leATf8DbGvURGcgiHjN1GnAFddra/qMmJRRf4u1lS/yX2Ngg7wvaq5RUpZcEDGSDTEUGOEitbS0kDEyRZO1ykkEfb2aS8OZ5uPOBvbvJNkWxMPPBS6H5CfuHtKVng4tHdypuVIjxmmjf4uY+g4XMX5HpJ6ZwN5m4HBL2q/0V01ydFiBUbRlLpOC/6xWvPb7l2J6aiEydoHJTnDjbDvMj2kZNR7YF0JgxNwmTmDEEPy9H5NsSZSICZIHdmopNx8YftbAxEZYNTNmaqmlWRvM1+1ikaYoa7/yInWNDIjAPH/TgD+4NCDs413KysrUUboiYFtfXx8YwTtQisoSKzCte3mBEQ9vqOs44dClPnSotGDihahzYVnu1y2bs0qBiWXa/KZoKC3TkrBGd38CHN5jXXQ9hXFdqY8IjKIkz3oRHD/YF/i9qqoKTz75ZOD/P/7xj7FixQo4BaYjob05uFZKIji8F8BceiLhNoW6ji6H+IC6nEKIspKBI1bZa/5IS2Iaw4RpwLjxvMsbCmGJzr4s6D7t+zTlg8Js7MXA0k29enFyuqXNfNTWgLXdD6mWDNfFLBDjWyKxZMRYGvtxjmwD1v2Q7BpXrqnkH8pN64AOF9NZmOsVDiOCX32OZEkSxNhSYPzkgc2ZErG5nZ8ArS3BrzWkEreucTfELBaMoq3vmVTOHVmBlrPLVZeIExeBcJnCFZjy8nL2OMd3J969EJPqRjIPY2EJ0O4iME4uEiBdpGQixr+IJF4A40q1eA23EqEb4oVz7kwtiejArm0pFRBuITk2AgLz7GJ13IsnFuu+cs7n0Nz8OMmPBjFtgOPwh4lvnD1dvMCIMTLRXosUmOQjXgC7PtLSqHFA2TnRWTVlZVoSQvPptpSYkhAy/B0QGEVbRNgTDOmcgIKCAnR0dLDWh9PYFjsiQHzPPVQzxR9u71skO+50dfJnyB8mBSZdEDOxRRLLTUyapgV2ObfYDUNoDh8GdnykfeDO1Q9JHrRx2ggMtFOACmYATVLSmXfL8fDDD6vWhxAZM/feey/paXJC9DpxbP9z8u7NCW5fIw12eUC5/WVKfhKTI7c3Aq+/BLz3tjYzO1LEOshXVgALrwfGlGrrJ3vtb7tqMZhx5kHMFgyZR5AsBp8qwqEPFXWIv72bOlxxEVYOty5Mz5GgwHiFUOJT4GKIupWTJJ9Tp7VZ2CKJ5U4nT4vcfRJxnUv0nicxnqbZWz1PQmAcG6UqME9Xqr4UvxxckuhZPxvXPjJdFQrRXR3urGpDiBYs4IfyNPwE6Osm2QnBrUvZ77It2nISb3Fwn5bEAMkJuhsUCUJozpsJTDsH2PSmtjKiB6hw66pWXSQFKOfMn2QmYcW8/hMFCysWqj1GQmTcEMIixscIC8dJXDb8F3B0d/Luq9DBYz3WRvc1pzyHnglhdnP7y+TtJEZ1N74NvPaSZpFEiojpXH6F5jp74F5dPR91HMxTlWqAdw3Z6gFOjdqB2x8Zj2GFWtC3oaGBdFELV8pJVASnehRs+a0PO18nmxLKFQt58/iD94Fdn5LsAOfMBGYySzaIIOAGx3eHJFUYqi9sVTY5soDwxje1Ffc8QMk99eRLNyqqi6QguEiv18g+Mh311Z2Ydf9OXDjnbCxatEhN4dK6DXj7cR+OJfirAhx5eUymuqyEeyzFaXi6GKTlVk6SGghLdGsjsH0bMPUczQUKR2iGemeya4XTlAFDYDxN/7FCvPvTQnw0rRXn3dytCk0odm8+jc/WZWNPErqjnRgyhN+wdy/JspDv8KkWEZaSApM+iIDwx9u0JLq3xeA7t4F7bUc88/evTGmBMej9dCze+SmwfTRQcE4bcoZbo7WFuWPR1ZKLgx8KtyhJnxh0gXsriQBuqPp3+mxr+3EpMOmK6CwVadRoLbBrd63Fh/kGuoZNDHGMw2gCo6hR4KpU+bh21yGRRoplo8g2rzJhIn9h/f3uvURuSwWoQV6XspLU5/AhLYlJkqWTtZ8H9gOfhlgJMcGU/nYRyr6+lnZXqwLz9bXal/wfX6TGYqp1k8ehz0MSDWPG8oWOh3BzRjlYL4Cn3mBxp3zU22oC/GqF+Yw+DMX8E9Y8U75PL6fl+d33VWz9JMaxuXKKQq8FsP4eKw5pSQQIrhrnrb/PJ71zfwjccZ893zLZ8b616jdl1f7g3yxSfyZ1bZh04iyHB2L/PvfHkFtoCnoPklu59ESxiQtsjdguGFquz7KvXYhg2Zd0wlry6Tl8FkGB6ffM+usMHdzOuklkPRiDb6xVv4VU9+tF6ki9al1spFUTJXkOS6fvCyEwTvGXUJZPuqGQBg0Ha8G63UcEw974reLjU+gxaLlQ4pN55A7qGcHdtKPAGHxT86uEwFT/t2bVLE+VWI1XmHUhfyFnzgDdLjNmRQ+CUy9CRlownJVBLAfzdliFgOyrWPa1iIv5GKQceDeNXmjGMDJ7L2trO35VgOP+tai7fy3KFGCxAjQxo/pkYtJEhwDvwVa6rzk5WS+CQ4fp/umepGuUekQkMAbfWov6b61VpxfcqwAtUlTc0zDm07GC5hb3cqOZUb/Q3aOTp+n+6ZyC1oT5d5twmLZL18gbRCUwBkvXok5RUC5mGyh6HctkTXMcPl4v3KPmPXR/cxrjYMGo1guzfzonqyUiXaNUIayP37vxwJ/UOQhV/+9GdSe6ulOGU+rgHh1odX8ch7nEX45n4AA7xfpPMFe6Rp7G9dvUkfD6P2P8xPGI8+fY7eaw6Y8e2GQeqwDbA8TkG79zb8HA8W37kH2t+cY4igNt+ejPHk7uYpBPwaTiPfD395venta38r5jJWjr5X2k2RM/hiK+fg/TvQJsY9PMf3sD8DONze4q8HVtL6c1ONMX4B2ugboasH45npSzNuhhWZ0Ylt1Bj2Ucw/wsmPfhxqaYBUNB8PrJmBjzOexd5Ex9ZDq1NWThvQFbMILdj2Fk+QVYlxWTo4WA/OFtA6OYh8jagOz5tofLdiwaWOQeruAgLp9p+4atY9Fzgt7O1HHtGD2xw3Q9dmFU0PjZWTjEDKQbW9yJsQXH6LWYj2F/41qEkbuH4D36QjY2a56PHMu9Tqmg2uvRWqfODZoTegTuw7rddj8wXgSwlnO0TsBfS3An8nfKNE75897lPvM9oBiMoHMVqkYMxztZWZhGNsYU/uGyBPPYtyRsD5Y9H0w589vKdgzu4bKIi/b7sc4h6DnBTD4S3dZTDpkaG6zn1u/rUPswUg6qwHTYrsVaH5YGZLciyD1Y68NnrwPLcWkj9TnVB1un4MUlgN96DDmgLqXIGXTiTe56o7Y5hLAkbkwM/3DRtzNsv1sfNB/3cFnK+YObI2xs9nKnTvPaPaakBwV5p1wb254j7JAClUkjjjrWB2kolnPAdr82NyqsxhYs53OrD5IfTj3CoUGD2W7OY66fqVN7fcheo5jDrkwUkcB0rlLnKlUlZVQv+cPD5Q9PHwxrgwbz8FkfKh9zDHZf89vT9JAOL+xDTpYfp/qtQjNr6qGQja21ne/Xzsk6g+EF3SHqw3b9lnzz/TrUh2NjY8px9UHq1Nyg3eqR1ikVDHM9cddh386/CKRrFHM6UFvjvFyDG52r1KnYlXpKwghe/uGKqWtE4hDMMbiHy/z2NPbVry8nqx+XzmjFhg+Dk5CmjjuOsSVdIRvb3iMlpBZgtl6Y+rA0INdGSutDukbc38Is1E71IdFhxQWcwHSuUuceVegpybOq+Ycr5q4RERTbMcg5aCMl16oLypiSbnSfyFYFZ/iwEyEam4Jj3UPR3cevTDW2uN2yL9fYrA2TCp99X+kaceXCqQ+JiZVOlWERmM5V6tcFGj01qZH84eHyh6cPRqJdI3tjE/GWgtyTjChxjU1B6zE+uCuYNPKoS33Yrt+Sb75fh/pwbGxMOa4+SJ2aG7RbPdI6pYJhrifuOuzb+RdBeK5RMA4nXaOwEO6R43ecLQGCwiXqoLkKtVDS4R8utkta28H0gz5c7BsxDq4R3TeCxgZgVys/9mV4QQ9yBps+hsM0NukaMXXK1QfJp+WkaxQ2juICrpu6cIlaIMkiwz9c1rczFR/7g5Ys1yjyxqb93n0iR3WROM4ec4jUB2kolnPAdr/SNaJ/N+4lJV2jCGF7jwyIwMArIkP+8HD5w9MHI9muUfAeTNdhyaONtLW9kFSDwdiidof64MSXu1+H+nBsbEw5rj5InZobNFeP9npysDJIPblcB9lXsewrXaPkwQoMrCLTQjbGFf7hSnfXCOr4F773qCC3z9Y9Dcs9ppZrROs0etfIpU65+iD5tJx0jWKLo8AgKDJi7EsT2RgX+Icr3V0jkX+qfzD2tvECY+2eZhqK5Ryw3a90jejfjXtJSdcoHrgKDPTAb+ESVWQeJRvjAfnDw+UPTx+MVHSNBE6xF6jxl1amPjjx5e7XoT4cG1uwnOXYpO7sdWpu0Fw92uvJwcog9WSrR/M+ZF/Fsq90jZJP2HORCpeoy2Yujl9chn+4MsE1Er8XDOkjNQKze8Q0NuoqMPdpusdIXSPH+rDsG8yTrlFG4voJ/4gmOxYuUUfsiQOuJRsHBP9wZYJrZGwXQqJNZLSi9h4xjc3aMB2Ez7SvdI24cuHUhyQEsRMYBF2myphbM+QPD5c/PH0wUtM1Mr9BgatnbreIzHnj96O8tJltKNQ1ouNK2PpwbGzBctI1st+LxAXXzxoNaMEpfeSvmFH9INkYNvaHz3hgHRojs+ZJcH+HRkxcI+YY3JvWbEkZjThwrQNY88RWjjzgTH2Y8y0fESPlbMdQ7NaLrR6ZcqTXiBzXegznv5US4n75+rALo4/kM3VqFl/mGLSc/bnh6kMSJgtRW8OOhyFzkSJBH/lb3blK/YbSysg/0sa/ETPJNaINgdYHeetbzgHb/UrXiP7dqMUYuj6SRos+eM34DGu5nrz8qaBKpwF3MVsyE5pFU6kLTZiVEcEbkTQ2p7eV2xtxYCvU8Y0tkjcivV+f+VqZ7bBtpxM93e43MmvN2ZJyPgcrqORcGOAnX8Op03A/+Rq8F3ItlnpKKGIYSJ06K7m2hnzfWWXpMg9NQia0oLaGjcXEVGAM9MWoVrpXAv9wseICvrFBukaO+0rXyL2e3F8ECSG0qLixdJmxNlOSllEhLObWhImLwCAYn6nWk01o3Bq02x/e+nC5N2iFiJLPfowQ5+AbUDSNjbtGm4Ax9WFvKLQB0TVsnfflrgFWyyJEfUTWSJ325bYjxN/KoU6JuLu8QMjLhttuejbjw8BExQlviM1a1NZU2jPjJjAGutBU6UKj3zx9uMjMWIcHw7kBuTVS6RrRc3B1w9SHwzmcxZ05Rma7RvERFSeSKzaT7fcYd4Exo7lOynIoChEaZwuAaSjSNVJ//mrTHIdGweSxf2fj+LZyCt2HKxf8NcQ+gXsL4zrJNbjso+NzuTfyf9fjRsdlxZsxp+Qtc9nEiooTS5dVmlajdAlXxIxHUVtTbT5YQgXGoPMP/gpdaBbQt7P720q6RggI3z+/fD2pW0niuW70K7hu9MveEBUnli4zrJpFDnvEgg514F1tTWDpxaQIjEHn70+X+VShETeuFHGNMazGBqdGmt6ukRSY5DI1f1frqJwjL00v2P6Di1dVHfLytQZYuqxYFxphacwi2wfOvaitqTOOklSBMeh6+mQxoFRCUaoBRbtpprFJ18j68+GXvkTqUhI/irPb+yfm7f2wKKvj1dv+dMW/pHxVa13fldb46IBpQm1NuXEQTwiMma7f9ZbpQiOsmlLpGnHH0o7xTy/dQOpPEjtyB/Up4/P2HxqefWxzcXb7I4vWfJ79uFhaENvgcCDY6zmBMdNV11UOKCIwXOlTA8PSNTJf43dflgITaybm7W0fldPWVJjVWX/L2gWOq+WnNQMXm4dQW6PWnacFxkz3k8fL1RtWVMtmFhWMzHGNjN8fevnLpJ4kkSEEpSS7vVm4PflZPb+68cUvJHgFR48TndisQG2NmKOYOgJjZvvP2kcqfuV6v+K72q8o5yt+ZYYC5AcbKNOQjZ+mvHHFfcjL8fOuCBEl77hGxr7VUmAiZlLe3vaROW1NRVmd9bdmqoUSLZrYGFMV3OYdBgK9KSkwgue/3Vva2TvoR7sPZy050pGVR3ZIAYYP7VNTUFzs2POsY0l2HhtBSkiCFGd39I/LbW0ZltW1dVhW17M3r1n4R1k9MWTpsgp9ImaZ/hP6Z0yWG13VKScwT36979K2jsE/23c066qTp30Rr2cjSU+EmIzMOdZWmN25oyi7qz53UN+aRS98Tro7SSZlBOb+K1TTTPiC95CNkozj7ILm1qLsrh0iGJs7uG9N5fPXSDHxIANaDyYRfHO+KizLQ/h8kgzjSN/wkRNy9//f29fMl3EUD+NZC+YbUlgkYTCtYHfrtILP5i5+QVowyeAb81GuB30rTG11xW82wJu9SPdpFxzF6niSTCVvcJ8yIe/AoaKsrh1Zvv7j+Vm960UMZvGLn5eiEwfumx8IVzhNomx5fIO2GLhnBObr89ULWi5jLJJYIYRndM6RDjFwriCrZ1PB4J5fLV4jx7lEg94+qyMYD1Py2w1oT7rAfH2+28JUEklsyfadbs0b3Ld5yKCTDTmDTm/5t7+ftVFWMY/eNqOdGLnwtxvQkFSB+dr8SNfwlUhiToe+YLWantigjuPIaL42PyY9tgufSJbA3KuZWyvjvDaFRBINhuCI9WUbntwA763tEgf0Nlmlp1i88B96cgNWJrybumqeam4tl+6QxKMU6S8+9eVXNU/9jIgqNnUbQRa1TnWq5iFeC1EJ9ypx42DumacqZJ3sHZKkGKX6hwUfvGeeat3UGxbOUxvRnop/TL0tVuvWSlxf9Alxke6WVkvY5A0B5pUD82doJQ53ax9zM+ZEHOnSklj+YbD+p9vbBvSe0v6fped9ut+795hGiG+01/0uBSybu+cNKGAbDSt+txHL42rB3KXdVJ2MtYTPvV8CzhsX3H30MGvRc6M87uGuoFgZi3x/dED7mW0Tqmy/ts++NuDESXIoSRDVlRgFGWEAABs+SURBVLoraNnUPb2R/8JhsrhrXmDR76QM/4ibBXPXPDUSXS+tlvAZOwr40W3evDYhPJ8dBQYpQEsb0HcS6DsF7DuiCZS0mAK0mMQmKT1Sd82LeMxKPFj89EbUx0Vg7pynukM/JhsyhOHDgJuuAvKHAH/eDHx2ILz7Lp0IfD/Fbb3dRzWrR4jQyZOaVXSmD/gkMwUoIDa/j7PY3KmJSqUeV0mECxSKhb/fGONu6jukS4SSYcDyO4Ack/P58nvAn8MYzjWsEPjZ3SQ7bRBW0O42oK0LONapiU9Xh+aKZQAtpvE29X+IQYD4Du+JipmFf4ilwCyZp84hqvPgjSaUr38JuHSy9Yxn/MC/Pg0c7Qp9Jd/7KjAlA9eREpbP0U5gT5smOEJ49qa38DTpizMJwWlcFaaFs2ReYEW5Ci+3tVUbtVBfTATmq5fLeIvBf94P5OeQbHx8AFj5AskmXDQTuP9qkp2xbDugWTz7j2jxnl370rom1uuiI5IxwM+8YlyqDPHoeGZTjMbBfPVyNZj0C7IhQzncCUweSe99xjjNfToewop5Zxtw5xW8SPWcAv7zFW1l36FDgDL9PP369jHD9F4nX2D1X1x4FjlMSjHT6FGbHrxqYe2olo4uOEJ80oQFaTJOLGCNDUhgbr9cdYnk7GcTf3gD+OFNJFu1F+++NrQVI/Zbtx244UKySRWd0yeAVr1Bffop2cWRU0J0fMDIYcCoQk2A+vX+6vPGaz8NobpAb9R+fbvXRGryCC2ZRUdYOtv3a4KzM72tnFRgYAJz2+Wq+dOQLB9w1FnApVcBMy8ChtrGiTR/ArR8CmxZD/R0k6Jxp2W/FsjkrJhzxwHFYVgx6xp5gRHMOQ+oX0+yQ5Ktf5xAxDZEMrNvj/X/rzMHEwKVmwtMHKkJk7CecodoFpMQLCF+yYwdCUtHtXYu1f5vCM5OKTjJIDAWKOIYzK1JFBchKLfcB5w3m2wi9HYDW94AVj8OHDlINseVokLg5/cEB7SZEYPb/jOEFSP4wRL9LW1DuEkP/jfJ9gTCKhLfd5g0EhiSq/0UFtPoQk18OLcvUQjBee8zzcLZlz4ulVcpWb0JkX9V4JYkiUt+AfDtH2lWS6QIoREi81KCP1jx3a+Y4gcmRG1/vy50j9LFM4EHHIK9j74MfLCLZHue0z5g+gQgOxcoHalZQWJqRKJdMDGqWQh90y7NuumVo5VjSdNzmxD5t6lvTqK4rPglUDYN+POfXsaLa55DQ0MDmpu1IHtxcTEqKirUVFVVhaIiviOr4WXgsX8n2XGjuBB4xMGK2bIbqP0LybaQkwv86hskW+UvHwAvRuEmeRVh+RQXASVFwPTxmns5aljiXC5h3bz7GfDhLqCtk2yWRMZDz29CYCH2sAXmK3PVwE1ixWWYEJczaD28HQ985040NroPFRBis3z5cjz44INkm6DhJaAmgSLzTzcD5zNWjBgXc99jJJtw/43A3DKSrb6Bv/8kyU47zviAaROBkkJg0ihNeC6Is7UjeqiE2AjrZt9hslkSmskvbA6uoROWwNw0Nzm9Rf/2y35s/fgVLLnzRrLNDWHN1NfXs9bMEyuBvzxLsuOCaBi/qOKPvPZdYM0Gkm3h0vOBbzu4ST98NjMbgBCd8aOBCaOAc8cD548HxhSQ3WKCEPJ3PgM2fizFJkzWv7hZHRMXIKTA3DQ3OeNcbrgdGDr6VXz1juvItnAoLy/H+++/T/YUMZnv3gUcTlDg96f3AGdRncPBDuBfniLZFkSg9L+/SbJVnnoTWPceyc5IBucBMyZoScS94uFaCbFZvx3Y9BFwrINslmjc++Jm1RgJMFi4FE4snqsGa9Y4bI4bwjW6evEu3Lh4TtSnaG1tRUdHB774xS9a8rNztOO/9QYpEheO9wFzzqZHHpYLvPGRNj/Hif5+oPxsoGQo3eGkH9iyg2RnJP5+4PAx4KNmYP1W4KUPgO2HgWN9QHE+UBCD3isxcXXmeOAL5cCss4FB2cChY8DpM2TXTKVlzWYQe93RgqmcqwZ1G5Mx3XvBdb1Y9acv4J333iTbIkUEg0tL6S3c8XmgJ0RPTqx4/AHr5EeD1z8C6v5Gsi1cPw+4/RKSrXZXL/0VyZYwFBVrvVeXTNEGEcayu/yt3cD7wo3aRjZlGovrN9OFtxwtmGcex38A+ALZkAAmzngfT63615icqL29HZWVlSR/fwvwWQQjYQfC8GJgyih6APF2fSWEm6P4gIoZJBs5g4G3dwOdPWSTxEZfH7D/sGbx/fldoOkg0HUayM7ircNImFCiCde1s4GCAqCzF+jIvL/J+rWb8b9JrtNI3hs114jvikkALQe4saTRIYK9Tz5Ju1zOvwj420skOy7UvwVcwyxFJx5u3n4M8slekhVABDr3yuBjZCjArj1aWg2gsBi4eCpw2ZSB9VAJq+hLF2pJ9ES90gg07syYMTbENTJgBUYBkvZB8dFnAW9uit2oOGHBNDU1YdYsaw/76HGhG3esEGufCJeGM80/Pxv4K41FB1GArQf5h1903cqvhg2Mjnbg9Xe1NCRPi3mJ5TYuZ4YHhIsYgf3ANUDPldq8sv95H2hL38Dw+j9vdv60CxGYL8+xfMQ64RSU7ERjvft4l0gRImNn8jQkTmEAfLgPmDOFZKtvz7+GcJOaj/ACo86m9tanxVOak73AWx9o6TeG2EyJXmzEC0XMKRPpwwPAq+8D7+8ku6U6dW7XTwRG0Vb/Txpvb7LOTBOjc0WC7u6sXBkb40qMEE5k29z0KS8wYvBYqOtodpg7I5ZnkPoSH/pOAJu3aunXecDss4EbZkXfBS4GXIokurtfbgTe3JY27pPrIucWgflSkq0X2F7IdXV1uOee4Pi+BQsWqAFbMZBuoGx9L7GN863tgPIFOnVAvOVCXYeTeT1aCkxCEGKzaauWSoqBK2cC10ynX3wIB1Gm6krgljnAuo+B11LcfXrpLWf3CHaBUVyCNYkib0iZKiCie9ksLgaGyAhrJlxEGY5EN872Xr7XYtp490Wx9zhYMJAeUsI51g6s3QDUbwTOmQgsOA+4fDIfX3NDdZ9maen1HcBr7wEtqRewbyE5NgICc92cwIeZkkrukDLMKC93vQQxSjdcgeG6qAUfJNiCEexv5wVm8hhgh4vA9PaRrABSYJKEAnyyR0u/zwXKpwE3RulCXT1dSyJO8/xm4GOXnsNUIyAwiraIMDOoPfGMHzsHjS5rIHNBWyeqq6vZLRvXJ75x7jjIT36cOCL6a5ECk3zEC2DjVi1NGANcPzs6q0aN09ykCU3DR8Ab3h+8R0ew2hhk+i//qk8C7UcnoKysDC0t1AITw/9FbCYchKvFuUeHW4Fdn5DsuCMGYXGMLWYyJSnJvkPAr18FHngSWPm6FtSNFCE03/kc8NjXgC9epE1T8Cpf1DwfR4IWjIKBR05jxJaGK/Dzx0fggQcewPe+972ASAjBES5POBaMWLrByY16+tfq/SYct1O6Xc8oF7vSrZwkefSeADZ8ALy5FZg+CbhhduTd3SIg/LUrgdvmAK9/rI36PuK9gHC5W0+SKjDXXqb+TNYnJlme+8MJ/OQnP1GtkEhcIujiIhal4pZrELGX10Is9hQv3LTAbdtwehthlZN4AAXY0aKl4SXArXMjd5/Evl+epaW/b9c+5OehgHCFm8CoLpICFOhrQnsmbVp3EVoPnFEXmYqkW1pYOKIHyj5yVyAWAf/xPyfvHp3g9g2nHJh9ZfJuOnocqH0FuP8JYNUWbXR3pFwzA3hkCXDlBZ65T9fGaQhMFlMw6an25xehs/Mk1q1bp8ZdnIRGWCxiMJ6wWtasWcNaLkJcvvstoKsrefc1czy5LJW3dtF9zWkkvR0V8TF6bn+ZvJ1EUPj5DcAdtcDKv0cXp3nwGu258MC9LvjcZc5xGNVFEhYM2eIBhBj8sPoc/O9/366OiTHGxaxfH1yQVogLZ62Y2fUp8LMVwM4kBHbN5OeSrABulopYlZ+j56R7OYm38Sna+jUNHwILzgcWlUfWzX3eRKDBGzEZ48uuBENgPIsQmR9Uz8Atd23HkrvHo6hoGNszxNHdfQYvPDMYT/2G2ZgERubz59x5yP1vMIX5xpLgUJd7OUmKoAuNSOeWAl+dG96XFsRSHh75+7sLTCrw3NMz8Eo9cF3ldlx1dT5mzpzoeNWf7jiBv76ch9f+MhjdCVpUKhxGOAjM9hAfBnOyYA7LFfDTjo9bgH9tAUaUALfPBT4/3fkOt+0hWclCDHFhB5wZFozopunw+sfrhTWz+ukZWP00UDAMOPscsgsa3xX/5pF8L8CtaneqP/RbyMls3rpXWjDpSttx4LFXgCfWATdcDFTOsvY8/WELcNg7XdalCy9D2bq36bwk9ZFf97YqMMUVl6pKJOYjLSKH8BhdncD773j9KoN8+WKSpdJ9yn0sy0yXwQPiAXMrGy1Vc7o7hmQp7ap8KWKCpimkFzgh93/o/7fm+wK/+637GOUUxSVf+79PlFXM5wU5jyWf+b/P2D+QZz2Pjzmv5f9O92o6T9j3yt6Hfg3m4wr2AOtacgadHF1eUpCfl3X48NGTZ/V+2L7M2YhPOIdODr8euPqX9vNa3qkNW1Q/qn7BpWpUuEpP7hFUSVicP4Hfa3uruxXiVE50cR6ObHhQ2Nxc3lME+IvEg+6zNDC/qTH41Z8+0+/BRhP8v8+lrJFPzmFp0OIYXNlQ5zDExDg+dwync9Bz+Vyuj70HcgyHc5jy6HXan4z/AcRo8ALkosBz3sY5AP3GDmO0A+u3qBaNWHhl5VWXqiP1qpPxXaR04kIHofhwP32MzDiV+yBEuYHhd37gTY3C59DgXRsUKy60rPUctMG7nsO10frdz2Hsa9pf3e5Q1irC9vuwiTBzfcFjMHWQWrAzlAeRHBtvbEHjG1tQpQAlCrBCAVqYvnCZXJIY6s+N3BTb1r7jXE5x6UHa1Ub3jVXyqQ3fb20Iij+YXMXFrzdKpqxNGHyKXVyMfezn8NNzKQp/DkvD94cnLvayCOaFFhd6b8Hj2eqJiIvfVNe2Y6ce0QmMwT+2oP0fW7D8H1sgZlTcG85aEBIN0RvAcdxh8qOBWMaBEybBh3Gd0u/eaH1cg4+o0TqX5c9hbbSWNz7TaME2WpvlpJiu01Y2IA4OZck1wHa/FuuKu0d/0DKyl01dWJctbIEx848tqBNCowAPKUCHtF7c0xXMh9cEbze7l7vAJYj3QQvdP1bJ642W7GOzUHz2sjbB5GM23Dlo2cA+AYGz5rMWnOVYnAgbf7n0IyqBMXhzC1YqUIVmbaaLiFM6b7yzFfLMZudyilv85QDdN7YCQxsea5WY/h9eMJcva3njm60Sm4vkU6wWgF0AfIbbZC9rumYfV9YSzOWuz2+5h+B18iJiPQcVIirC6SkucAryRsIGLSBcOe+S5Hwg3+vcPZ+/wGO9wKEQvUAXOsxdUgO8cX0mZTCXs5BkMDdyYjaSd9oY/DQ3RwqMnZnMCnaCbQfcXaARhc6Wz6EOBRdMMManGCimZ9X+0CqmHwrNN343/muxKvgGH16jVULGW+g5bI3YaJQRNVp6Lt5qCIoeLx72YC4jjo73YA/mMmUzgJgJTM0d+BeSmeFsbAauY+ZBCeF4Wky5d4jNCF7cClz7a5Ktbbu7H8Oy7Q9yOI3W3KC832jpPtRCcR5/EnSb6Db7OfiyJN7CXB9vXTHxFnvZ9GM9d0cDFpjOVepEp5VyQB5FiATHvDKgwME6MfjgIMlSmTJcCSEuDm/LtGm09us0N1rOtePL8ueg12wJ5jLXw7t2oUQ4LWEX0Y5aYHRhWZ7s7yh5lV1HnUXipgtIFmEjmdWhMb/UoQcGbnGEcMTDFkdgLJJwGi24Ua2u4kFdKP4cQQGg4hVpXMgrI3PTCnZVu4gEpnOVOgbGmELgMktG0u3w1T4xDX+qw+RFg6YDJCvArLPOsI2Cb7RhPPDkjU8bPH8O/lzEquDe6KSsDOamOB1RC4wuKpVyXlJkTHUYgXuXw6RHM07WS36Ogllj+0mj4ButeTttAMQVcGjw7DlIo5XBXGoZmbenPfWorWH7RFmB6VylCkqFLizSUokCEWN5uAL4uUnXP38OMMuhVymIgqaD9g/Maswaax+/wT3w9gYlg7nO1o9NPJxcT0frKiODuRzsYlOwC0znKnUWdbPTsF9JZFx7juYOCYtE/JwX8rMVCg51+vHZ0cFki2D+pP7Qb8u0abT265TBXM9SWxOewBQuQbsevH2f7CmJCiEsoWIu5odyQzNvvUC1YPoDDzj7tjSLA9NIYtlo2XO4igd1ofhzBK+DipcM5noQtnvagEwVKFyidjfdS/aUxAnrA+7U8zRluB9jCs6YZiHbG43Ru2RumDaXynBpLGX1fRS/SVyYsqy4mMtaryO0uDDnMB2PNtoQ5whcv01cQtaTQq/DFMxlz0Hcv4wVFzh1TxsQgYEmMnW6yHjvO3JphVVcek4p2NjC/kkwa+xph0arWISBPPBEPPgGH16jlcssBMXLYdJl5sEGdw34pzkoMhVSZOIFjXdsbHb8c+CLU08xjdZslYRutHKZBds1OFhh7D1YRJgpK2FxfqKD7pJYSKaJbJQMAJs7ECL+MqbAj6nDTzs2ilRptGQfx7gQb4XxMRvuHLRsYB9zMJexwqiVyPQU2ctKHHEVGF1kmnVL5imyURIh9OE0xyI27uF7j2aNOc02Wl48YttoEVGj5V0n50YbjJX4mHvjXTvuOuUyC14lrPVgRO9S4RJ1oJ2My0SNQhqtuVE4jX2B2j19kjRaJC2Ya3cXTOICf4SN1s80Wodz2MvKYK5XcPxsLCJdcEqPy5SH6pqS2LGLC7UExhbwfrwYvTt/wkkZzDWXlcFcL8GuxWsQ8Yp2wmUqXKK6TA9JayYcbOJCHmTt4R+T348LxTgXG/MnmsRFBnOt4uBQllwDscJkMDeGuE52jnrJzMIl6hINQr3Wko0SHcYdIA9ysPF8b34Ppg4/Eyh94ZjTeODiTlODSo1GS/aRwdz0ZumyCqf78ynKwCtOH/1bJ+ctGZitFvPbUqGNFgp5W7Z2DUJBzhkUZJuDlEqYjdY4plWIIh+Za9/XJnCMiDgPpzfHSph6sNQTX9ZyDIfrYwWQHMPpHCYrkZRNqLgYM5NFD26ZnlytBA/wKGpr2G9Tx0RgDDpXqR9oW57Zc5kc4i12AWCFh28c7ANPxINza7hz8OciAhWWeNjdDf76+Hug98qKBxEovmzwHFwd2OItzPXxApUwcWnRJwzWobaGHxm7dFm5aQKy1wSnBbU17Ey7mAoMghMmq/WUYULjIC7kQWYaFNNo5DILdquCL8ufwyqY9B5oVzkpG19Ci4oTS5cVm8Sm0iPtbCFqa8iaMDEXGIPMExqbuJAHOZxGa25Q3m+0dB9qoRALLmQ90Xqh1o9NPEhciBFR9joY9zG+Vkv0ouLG0mWVHhCbp1BbU2XPjJvAGGSG0HBvS/ogu74t06bR2q8z+rgQPQe95hRYZqFDF5WVMRUVJ5IrNiX2hafiLjAG6Sk0SngNL/DgenGZBdrAZDB3wBiWSoPbWilxRXOjDKFZlKCzrkBtzXJzRsIExkznKnVUcHVqL8EZQhhchYdvHOwDT8SDi5lw5+DPRQQqLPGQwdwwiI/7Ews0salKwLK3HaitsYzsTYrAGOjd21Wp90VIB3EhDzLToJhGI4O5dquCL8ufwyqY9B7iGsxt0odnNHhOVJxYuizeC/ffi9qaOuM/SRUYA919Mqwaj4+lsYkLeZBlMJdcC1tPtF6o9WMTj+QHc40xKvVuC12nDFrXtyE2sQpbNKG2JjB9wBMCY8Zk1Xil+80E97akD7Lr2zJtGq39OtM2mNtkiqeQbti0IbbB4cmorVG/jeE5gTGjf93AA339SngNL/DgymCuuwXn6WBui8lKaUh5KyUaBi42ATfJ0wJjxiQ2FYl1o5QmKEojoDRD8Vf6oMxya7QxDVIyZZ0bFCcuDo3OUTwyMphrCEqDLigOX6XKUKITm0BvUsoIjBn9Y3AVeiofYGS8SV9XtN20gLF42Jr1xbYCdP3+VBUU5Un6IDMNimk0Mphrtyr4svw5bK6dS1liGQW2B/7ejVJQokCb1Gi85N3a3EOorRGToVNTYDh00WHnQ9ho15cCjYqu351oBpRSGcxlrsV7wdwO3fpsCEwgzESXJx4EpysYc6QMmtXOGr2e00ZgEkXX73orofjXhHxbpk2jtV+np4O5631CUBS/EJVG/PLR1Og6TmOkwERBV11XA6AskMHcMN2u2AdzO1QB0awTVVB8j/1ciokHYb9NLQmFUgX4d3snmEvLsg2bie3w57C7XXyD589B9x9gPTX5FKUZ8GuujqI0+/7rpzJukiJICyZKup88vhyK8mOu0chgrl2g+LK2c6yHKiRqb52wTpoHrVwhrZIURwrMAOh+ok28URdYG5QM5jJxISPYCl082oVr44O/XeQPeuQHMvCapkgXaSAo/iq94RQlodGy4kGuwSY01Lryr9ddD3tcqByKUszEhZo1l4W9TlEX7cY5Bv9HdfqOfJWEhbRgBkj3460VUPzrnMXD88Hcppwf3eL66QmJJFqi/qqARKPgvrENPij3BhstFQj2+0KK39bw+bJEXGxlg4FUTlyczmE59qxTK54NZ/yQRBIxUmBiQP43xtcB/keJAJCeIrMw+IPCYB77YRMA6wfQrGWDx+DEwxTM5c5hvkb4K1P+jyDxJFJgYkT+NydVQ/E/ZQ6iptAH0KTASOKCFJgYkv+tyVVQ/I+SQKvd3fHeB9BkDEYSF2SQNw70/nKHNinSW8FcU7yGHhOKf3L2v1XJAWySmCItmDgw9IHpdYCyUJts5xRo5QQgrsHcYFc4Ob/6fxnolcQcKTBxYui3z21QG63iX+uhYC4jLgEBkgIjiTlSYOLI0O+c3z502YWVPkVZbLdmkhTMdYsLSYGRxBwpMAkg73+V12vWjLICMAlN4oO51u1mtwkyFieJPVJgEkTegxe351VfIiZIlkEdmOdvIi6LXTzsVonNAqHfWqKzmH22Y7oP8pNIYouci5Rg8h6a065/S6eu75E3RYymElAqoCgVxpwmugQCdaH4mdIKYxlx8RZyjg51FrNEEmNkN7WH6PvZ38sBpdynKOWAOtmw3Cw6FrfJoQubulVCPNQZzIYA6RMS1d9FILo56/98S4qLJC5IgUkBTv7kL+W6WIz1wT82RLylFYrSKvKzl98p11ORJBUpMBKJJG7IIK9EIokbUmAkEknckAIjkUjihhQYiUQSN6TASCSSuCEFRiKRxAcA/x8YJTfNY++DUAAAAABJRU5ErkJggg=="/>
        </defs>
    </svg> `,p=(e="down",t="#ff0000")=>{let A="";switch(e){case"up":A="transform: translateY(10px) rotate(180deg);";break;case"left":A="transform: translateX(-5px) rotate(270deg);";break;case"right":A="transform: translateX(2px) rotate(-270deg);";break;default:A=""}return o.f`
    <svg
        style="${A}"
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <title>${e} arrow</title>
        <path d="M22.7979 12.8995L12.8984 22.799L2.99894 12.8995" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`},h=()=>o.f`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<title>play icon</title>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 16.5L16 12L10 7.5V16.5ZM4 12C4 16.41 7.59 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.59 4 4 7.59 4 12Z" fill="#1967D2"/>
</svg>`,u=()=>o.f`<svg width="27" height="33" viewBox="0 0 27 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<title>file icon</title>
<path d="M2 2V0.5C1.17157 0.5 0.5 1.17157 0.5 2L2 2ZM25 31V32.5C25.8284 32.5 26.5 31.8284 26.5 31H25ZM2 31H0.5C0.5 31.8284 1.17157 32.5 2 32.5L2 31ZM15 3.5C15.8284 3.5 16.5 2.82843 16.5 2C16.5 1.17157 15.8284 0.5 15 0.5V3.5ZM25 29.5H2V32.5H25V29.5ZM3.5 31V2H0.5V31H3.5ZM23.5 12V31H26.5V12H23.5ZM2 3.5H15V0.5H2V3.5Z" fill="#1967D2"/>
<line x1="8.5" y1="9.5" x2="13.5" y2="9.5" stroke="#1967D2" stroke-width="3" stroke-linecap="round"/>
<line x1="8.5" y1="16.5" x2="18.5" y2="16.5" stroke="#1967D2" stroke-width="3" stroke-linecap="round"/>
<line x1="8.5" y1="23.5" x2="18.5" y2="23.5" stroke="#1967D2" stroke-width="3" stroke-linecap="round"/>
<path d="M15 12L25 12L15 2L15 12Z" stroke="#1967D2" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,f=(e="black")=>o.f`<svg style="display: inline-block; vertical-align: middle; margin-right: 5px;" width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<title>Twitter logo</title>
<path d="M23.954 2.56909C23.069 2.95809 22.124 3.22309 21.129 3.34409C22.143 2.73309 22.923 1.77009 23.292 0.621094C22.341 1.17609 21.287 1.58009 20.165 1.80509C19.269 0.846094 17.992 0.246094 16.574 0.246094C13.857 0.246094 11.654 2.44909 11.654 5.16309C11.654 5.55309 11.699 5.92809 11.781 6.28709C7.691 6.09409 4.066 4.13009 1.64 1.16109C1.213 1.88309 0.974 2.72209 0.974 3.63609C0.974 5.34609 1.844 6.84909 3.162 7.73209C2.355 7.70609 1.596 7.48409 0.934 7.11609V7.17709C0.934 9.56209 2.627 11.5511 4.88 12.0041C4.467 12.1151 4.031 12.1751 3.584 12.1751C3.27 12.1751 2.969 12.1451 2.668 12.0891C3.299 14.0421 5.113 15.4661 7.272 15.5061C5.592 16.8251 3.463 17.6111 1.17 17.6111C0.78 17.6111 0.391 17.5881 0 17.5441C2.189 18.9381 4.768 19.7531 7.557 19.7531C16.611 19.7531 21.556 12.2571 21.556 5.76709C21.556 5.55809 21.556 5.34709 21.541 5.13709C22.502 4.44809 23.341 3.57709 24.001 2.58909L23.954 2.56909Z" fill="${e}"/>
</svg>`;var E=A(2),I=A(6),Q=function(e,t,A,i){var n,o=arguments.length,r=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,A):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,A,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,A,r):n(t,A))||r);return o>3&&r&&Object.defineProperty(t,A,r),r};class B extends o.a{constructor(){super(),this.open=!1}render(){return r.f`
            <style>
                h3 {
                    font-family: 'BoingSemiBold', Helvetica, Arial, sans-serif;
                    font-size: 23px;
                    margin-bottom: 6px;
                    cursor: pointer;
                    transition: color 0.25s ease-out;
                    position: relative;
                    padding-right: 35px;
                    line-height: 1.35em;
                }
                h3 span {
                    position: absolute;
                    top: 50%;
                    right: 0;
                    transform: translateY(-50%);
                }
                h3:hover {
                    color: #1967d2;
                }
                a,
                a:visited {
                    color: #1967d2;
                }
                p {
                    font-family: 'Google Sans', Helvetica, Arial, sans-serif;
                    font-weight: 100;
                    font-size: 18px;
                    line-height: 1.8;
                    width: 80%;
                }

                @media all and (max-width: 900px) {
                    p {
                        width: 100%;
                    }
                }

                .faq.active h3 {
                    color: #1967d2;
                }
                ul {
                    padding-inline-start: 1.5em;
                }
                ol {
                    padding-inline-start: 0;
                    list-style-position: inside;
                }
                li.faq {
                    border-bottom: 3px solid #dadce0;
                    list-style: none;
                    margin-bottom: 40px;
                    padding-bottom: 10px;
                }
                li.faq.active {
                    border-bottom-color: #1967d2;
                }
                li.faq li {
                    margin-bottom: 30px;
                }
                .icon {
                    margin-left: 10px;
                }
            </style>
            <li class="${this.open?"active":""} faq">
                <h3
                    role="button"
                    @click=${()=>{this.open=!this.open}}
                >
                    ${this.q}
                    <span class="icon"
                        >${p(this.open?"up":"down",this.open?"#1967d2":"#dadce0")}
                    </span>
                </h3>
                <p
                    style="${this.open?"":"display: none"}"
                    aria-hidden="${this.open?"false":"true"}"
                >
                    ${this.a}
                </p>
            </li>
        `}}function b(e){const t=[{title:Object(E.b)("faq_basics_title"),qs:[{q:Object(E.b)("faq_basics_qa1_question"),a:Object(E.b)("faq_basics_qa1_answer")},{q:Object(E.b)("faq_basics_qa2_question"),a:Object(E.b)("faq_basics_qa2_answer")},{q:Object(E.b)("faq_basics_qa3_question"),a:Object(E.b)("faq_basics_qa3_answer")}]},{title:Object(E.b)("faq_gettingstarted_title"),qs:[{q:Object(E.b)("faq_gettingstarted_qa1_question"),a:r.f`${Object(I.a)(Object(E.b)("faq_gettingstarted_qa1_answer"))}`},{q:Object(E.b)("faq_gettingstarted_qa2_question"),a:r.f`${Object(I.a)(Object(E.b)("faq_gettingstarted_qa2_answer"))}`},{q:Object(E.b)("faq_gettingstarted_qa3_question"),a:Object(E.b)("faq_gettingstarted_qa3_answer")}]},{title:Object(E.b)("faq_tweaking_title"),qs:[{q:Object(E.b)("faq_tweaking_qa1_question"),a:r.f`${Object(I.a)(Object(E.b)("faq_tweaking_qa1_answer"))}
                    <ul>
                        <li>${Object(I.a)(Object(E.b)("faq_tweaking_qa1_answer-li-1"))}</li>
                        <li>${Object(I.a)(Object(E.b)("faq_tweaking_qa1_answer-li-2"))}</li>
                        <li>${Object(I.a)(Object(E.b)("faq_tweaking_qa1_answer-li-3"))}</li>
                        <li>${Object(I.a)(Object(E.b)("faq_tweaking_qa1_answer-li-4"))}</li>
                        <li>${Object(I.a)(Object(E.b)("faq_tweaking_qa1_answer-li-5"))}</li>
                        <li>${Object(I.a)(Object(E.b)("faq_tweaking_qa1_answer-li-6"))}</li>
                    </ul>`},{q:Object(E.b)("faq_tweaking_qa2_question"),a:r.f`${Object(I.a)(Object(E.b)("faq_tweaking_qa2_answer"))}`}]},{title:Object(E.b)("faq_saving_title"),qs:[{q:Object(E.b)("faq_saving_qa1_question"),a:r.f`${Object(I.a)(Object(E.b)("faq_saving_qa1_answer"))}
                        <ol>
                            <li>${Object(I.a)(Object(E.b)("faq_saving_qa1_answer-li-1"))}</li>
                            <li>${Object(I.a)(Object(E.b)("faq_saving_qa1_answer-li-2"))}</li>
                            <li>${Object(I.a)(Object(E.b)("faq_saving_qa1_answer-li-3"))}</li>
                            <li>${Object(I.a)(Object(E.b)("faq_saving_qa1_answer-li-4"))}</li>
                        </ol>`},{q:Object(E.b)("faq_saving_q2_question"),a:Object(E.b)("faq_saving_q2_answer")},{q:Object(E.b)("faq_saving_q3_question"),a:r.f`${Object(I.a)(Object(E.b)("faq_saving_q3_answer"))}`},{q:Object(E.b)("faq_saving_q4_question"),a:Object(E.b)("faq_saving_q4_answer")},{q:Object(E.b)("faq_saving_q5_question"),a:r.f`
                        ${Object(I.a)(Object(E.b)("faq_saving_q5_answer-1"))}
                        <br><br>
                        ${Object(I.a)(Object(E.b)("faq_saving_q5_answer-2"))}
                        <br><br>
                        ${Object(I.a)(Object(E.b)("faq_saving_q5_answer-3"))}`},{q:Object(E.b)("faq_saving_q6_question"),a:r.f`${Object(I.a)(Object(E.b)("faq_saving_q6_answer"))}`},{q:Object(E.b)("faq_saving_q7_question"),a:r.f`${Object(I.a)(Object(E.b)("faq_saving_q7_answer"))}`}]},{title:Object(E.b)("faq_divingdeeper_title"),qs:[{q:Object(E.b)("faq_divingdeeper_qa1_question"),a:r.f`${Object(I.a)(Object(E.b)("faq_divingdeeper_qa1_answer"))}`},{q:Object(E.b)("faq_divingdeeper_qa2_question"),a:r.f`
                        ${Object(I.a)(Object(E.b)("faq_divingdeeper_qa2_answer-1"))}
                        <br><br>
                        ${Object(I.a)(Object(E.b)("faq_divingdeeper_qa2_answer-2"))}`},{q:Object(E.b)("faq_divingdeeper_qa3_question"),a:Object(E.b)("faq_divingdeeper_qa3_answer")},{q:Object(E.b)("faq_divingdeeper_qa4_question"),a:r.f`${Object(I.a)(Object(E.b)("faq_divingdeeper_qa4_answer"))}`}]},{title:Object(E.b)("faq_tools_title"),qs:[{q:Object(E.b)("faq_tools_qa1_question"),a:r.f`${Object(I.a)(Object(E.b)("faq_tools_qa1_answer"))}`},{q:Object(E.b)("faq_tools_qa2_question"),a:r.f`${Object(I.a)(Object(E.b)("faq_tools_qa2_answer"))}`},{q:Object(E.b)("faq_tools_qa3_question"),a:r.f`${Object(I.a)(Object(E.b)("faq_tools_qa3_answer"))}
                    <ol>
                        <li>${Object(I.a)(Object(E.b)("faq_tools_qa3_answer-li-1"))}</li>
                        <li>${Object(I.a)(Object(E.b)("faq_tools_qa3_answer-li-2"))}</li>
                        <li>${Object(I.a)(Object(E.b)("faq_tools_qa3_answer-li-3"))}</li>
                    </ol>`},{q:Object(E.b)("faq_tools_qa4_question"),a:r.f`
                        ${Object(I.a)(Object(E.b)("faq_tools_qa4_answer-1"))}
                        <br><br>
                        ${Object(I.a)(Object(E.b)("faq_tools_qa4_answer-2"))}`},{q:Object(E.b)("faq_tools_qa5_question"),a:r.f`${Object(I.a)(Object(E.b)("faq_tools_qa5_answer"))}
                    <ol>
                        <li>${Object(I.a)(Object(E.b)("faq_tools_qa5_answer-li-1"))}</li>
                        <li>${Object(I.a)(Object(E.b)("faq_tools_qa5_answer-li-2"))}</li>
                        <li>${Object(I.a)(Object(E.b)("faq_tools_qa5_answer-li-3"))}</li>
                        <li>${Object(I.a)(Object(E.b)("faq_tools_qa5_answer-li-4"))}</li>
                        <li>${Object(I.a)(Object(E.b)("faq_tools_qa5_answer-li-5"))}</li>
                    </ol>`},{q:Object(E.b)("faq_tools_qa6_question"),a:r.f`${Object(I.a)(Object(E.b)("faq_tools_qa6_answer"))}`}]}];e.hash&&setTimeout(()=>{document.getElementById(e.hash).scrollIntoView()},1),Object(r.h)(r.f`
            <style>
                h1 {
                    color: black;
                    font-size: 64px;
                    margin-top: 110px;
                }
                h2 {
                    padding-top: 80px;
                    font-size: 48px;
                    color: #1967d2;
                    line-height: 1.15em;
                }
                .group {
                    max-width: 1120px;
                    width: 100%;
                    height: 100%;
                    margin: 0 auto;
                    padding: 0 5%;
                    display: flex;
                    align-items: flex-start;
                    position: relative;
                }
                .group > h1 {
                    display: none;
                }
                nav {
                    width: 25%;
                    position: sticky;
                    top: 181px;
                    margin-right: 8.25%;
                }
                nav ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                nav li {
                    margin-bottom: 1.4em;
                }
                nav a, nav a:link, nav a:visited {
                    color: #1967d2;
                    border: none;
                    font-size: 20px;
                    font-family: 'Google Sans', Helvetica, Arial, sans-serif;
                    font-weight: 100;
                    line-height: 1.4em;
                    text-decoration: underline;
                }

                ul {
                    margin: 0;
                    padding: 0;
                }
                #container {
                    width: 50%;
                    margin-bottom: 200px;
                }
                h2 {
                    text-align: left;
                }

                @media only screen and (max-width: 900px) {
                    h2 {
                        padding-top: 20px;
                    }
                    .group {
                        padding: 0;
                        flex-direction: column;
                    }
                    .group > h1 {
                        display: block;
                        margin-bottom: 40px;
                    }
                    #container > h1 {
                        display: none;
                    }

                    nav {
                        width: 100%;
                        position: relative;
                        top: 0;
                    }
                    #container {
                        width: 100%;
                    }
                }

                @media only screen and (max-height: 660px) {
                    nav {
                        top: 100px;
                    }
                }
            </style>
            <div class="group">
                <h1>FAQ</h1>
                <nav role="menu">
                    <ul>
                        ${t.map(e=>r.f`
                                    <li>
                                        <a href="/faq#${e.title.replace(/\s/gi,"-")}">
                                            ${e.title}
                                        </a>
                                    </li>
                                `)}
                    </ul>
                </nav>
                <div id="container">
                    <h1>FAQ</h1>
                    ${t.map(e=>r.f`
                                <div>
                                    <h2 id="${e.title.replace(/\s/gi,"-")}">${e.title}</h2>
                                    <ul>
                                        ${e.qs.map(e=>r.f`
                                                    <faq-item
                                                        q=${e.q}
                                                        .a=${e.a}
                                                    ></faq-item>
                                                `)}
                                    </ul>
                                </div>
                            `)}
                </div>
            </div>
        `,document.querySelector("#main-container")||document.body)}Q([Object(o.e)({type:String})],B.prototype,"q",void 0),Q([Object(o.e)({})],B.prototype,"a",void 0),Q([Object(o.e)({type:Boolean,reflect:!0})],B.prototype,"open",void 0),customElements.define("faq-item",B);A(101);var m=function(e,t,A,i){var n,o=arguments.length,r=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,A):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,A,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,A,r):n(t,A))||r);return o>3&&r&&Object.defineProperty(t,A,r),r};class v extends o.a{constructor(){super(...arguments),this.minimalNav=!0,this.page="/",this.hideAppNameWhenNarrow=!1,this.scrollHander=(()=>{window.scrollY>340?this.minimalNav=!1:this.minimalNav=!0}).bind(this)}disconnectedCallback(){window.removeEventListener("scroll",this.scrollHander)}firstUpdated(){window.addEventListener("scroll",this.scrollHander)}render(){return r.f`
      <style>
        a {
          text-decoration: none;
          color: inherit;
          border-bottom: 1px solid #000;
        }
        tm-hamburger-menu {
          position: absolute;
          left: 0;
          top: 0;
          user-select: none;
        }

        .menu-item {
          font-size: 18px;
          display: inline-block;
          vertical-align: middle;
          margin-left: 35px;
          border-bottom: none;
        }
        @media only screen and (max-width: 900px) {
          .menu-item {
            margin-left: 15px;
          }
        }

        .menu-item.active {
          border-bottom: 1px solid #000;
        }

        .menu-item.button {
          background-color: #0b50c1;
          color: #fff;
          padding: 8px 15px 6px;
        }

        .button {
          background: #0b50c1;
          color: #fff;
          border-bottom: none;
          border-radius: 8px;
          padding: 15px 50px;
          display: inline-block;
          font-family: 'BoingSemiBold', Helvetica, Arial, sans-serif;
        }
        a.button:hover {
          background: #1967d2;
        }
        a.button:focus {
          background: #1967d2;
        }
        a.button:active {
          background: #174ea6;
        }

        @media (max-width: 768px) {
          #menu-holder {
            text-align: right;
            padding-left: 24px;
          }
        }

        header {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding: 17.5px 20px;
          background: #f8f9fa;
          width: 100%;
          box-sizing: border-box;
          position: fixed;
          left: 0;
          top: 0;
          z-index: 100;
          animation: appear 0.25s ease-in-out;
          border-bottom: 1px solid #dadce0;
          --menu-holder-open-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
          --menu-holder-closed-box-shadow: none;
          --menu-holder-closed-background: transparent;
        }

        header.minimal {
          background: transparent;
          position: absolute;
          border-bottom: 1px solid transparent;
          box-shadow: none;
          animation: none;
          --app-name-closed-opacity: 0;
        }
        header.basic-page.minimal {
          --app-name-closed-opacity: 1;
        }
        @keyframes appear {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      </style>
      <header
        class="${"/"===this.page?"home":"basic-page"} ${this.minimalNav?"minimal":""}"
      >
        <tm-hamburger-menu
          linkTarget="_self"
          ?disableDriveView=${!0}
          ?disableDriveSave=${!0}
          ?disableFileSave=${!0}
          ?hideAppNameWhenNarrow=${this.hideAppNameWhenNarrow}
          @onboardOpen=${e=>{w("onboardOpen",e.detail.videoId)}}
          @newmodel=${()=>window.open("/train","_self")}
          @driveOpen=${()=>w("driveOpen")}
          @driveSave=${()=>w("driveSave")}
          @fileSave=${()=>w("fileSave")}
          @fileOpen=${()=>{w("fileOpen")}}
          @openInDrive=${()=>w("openInDrive")}
          @copyProject=${()=>w("copyProject")}
          @editModelName=${()=>w("editModelName")}
          @signout=${()=>w("signout")}
          @sendfeedback=${()=>{const e={productId:"5117587",productVersion:"2.4.19#"+"e1ad968d9e77ac2b8f380250c34bcac6cc83096c".slice(0,6),enableAnonymousFeedback:!0};window.userfeedback.api.startFeedback(e)}}
        ></tm-hamburger-menu>

        <div id="menu-holder">
          <a class="menu-item ${"/"===this.page?"active":""}" href="/"
            >${Object(E.b)("nav_about")}</a
          >
          <a
            class="menu-item ${"/faq"===this.page?"active":""}"
            href="/faq"
            >${Object(E.b)("app_abstract_faq")}</a
          >
          <a class="menu-item button" href="/train">${Object(E.b)("nav_getstarted")}</a>
        </div>
      </header>
    `}}function w(e,t=null){window.location.href=`/train?action=${e}${null!==t?"&id="+t:""}`}m([Object(o.e)({type:Boolean,reflect:!0})],v.prototype,"minimalNav",void 0),m([Object(o.e)({type:String,reflect:!0})],v.prototype,"page",void 0),m([Object(o.e)({type:Boolean,reflect:!0})],v.prototype,"hideAppNameWhenNarrow",void 0),customElements.define("site-nav",v);var y=A(17),k=(A(154),A(40)),x=function(e,t,A,i){var n,o=arguments.length,r=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,A):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,A,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,A,r):n(t,A))||r);return o>3&&r&&Object.defineProperty(t,A,r),r},S=function(e,t,A,i){return new(A||(A=Promise))((function(n,o){function r(e){try{a(i.next(e))}catch(e){o(e)}}function s(e){try{a(i.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?n(e.value):(t=e.value,t instanceof A?t:new A((function(e){e(t)}))).then(r,s)}a((i=i.apply(e,t||[])).next())}))};Object(E.c)({loader:e=>(k.b.some(t=>t.value===e)||(e="en"),fetch(`/assets/i18n/${e}.json`).then(e=>e.json())),interpolate:(e,t)=>{for(const[A,i]of Object.entries(Object(E.a)(t)))e=e.replace(new RegExp(`\\\${${A}}`,"gm"),String(Object(E.a)(i)));return e}}),function(){S(this,void 0,void 0,(function*(){const e=new URLSearchParams(window.location.search).get("lang")||Object(k.a)();yield Object(E.d)(e),n()("/faq",L,b),n()("/",L,j),n()({hashbang:!1})}))}();const O=[{user:"pushmatrix",link:"https://twitter.com/pushmatrix/status/1227717703990857728",content:r.f`Google's Teachable Machine is a magical ML tool. ✨
      <br /><br />
      In 2 minutes I trained my computer to recognize what part of my shoe it
      was looking at.
      <br /><br />
      You have to try it: https://teachablemachine.withgoogle.com`},{user:"thecodingtrain",link:"https://twitter.com/thecodingtrain/status/1321996802476879872",content:r.f`we've been in zoom land for how long now? 😭 we just released
      a new video showing you how to augment your video calls using @p5xjs
      @ml5js Teachable Machine + OBS. ty for the idea @cameronhunter 🌟
      <br /><br />
      🎥 https://youtu.be/9z9mbiOZqSs
      <br />
      💻 https://thecodingtrain.com/CodingChallenges/157-zoom-annotations.html`},{user:"blakeleyhpayne",link:"https://twitter.com/blakeleyhpayne/status/1169973763200430080?s=20",content:r.f`“Kids are given images of both and use Google’s Teachable
      Machines to train the data.” <br /><br />
      It was a joy to collaborate with @WarronBebster, @ire_alva,
      @alexanderchen, and @hapticdata and have them in our classroom. You can
      check out the tool here: teachablemachine.withgoogle.com `},{user:"yining_shi",link:"https://twitter.com/yining_shi/status/1129232616945856513?s=20",content:r.f`Teachable Machine is so helpful to people who have creative
    ideas and beginners to machine learning or programming! Here are some very
    cool projects students made with Teachable Machine + @p5xjs in Machine
    Learning for the Web class at @ITP_NYU:
    https://github.com/yining1023/teachable-machine-p5`},{user:"jetscott",link:"https://twitter.com/jetscott/status/1126186415535022080?s=20",content:r.f`Teachable Machine: a project training sound recognition to win
    a tractor race! By Steve Saling, who created it to explore how to train for
    non standard speech interactions for ALS, stroke and others who need
    assistance #io19`},{user:"anildash",link:"https://twitter.com/anildash/status/1192515679641055233",content:r.f`Really extraordinary set of tools from Google Creative Lab,
    including this @Glitch app that’s a starter for Teachable Machine — letting
    you train your own machine learning projects right in a web browser. This is
    what helped me finally understand this stuff!`}];function j(){Object(r.h)(r.f`
      <div class="content-block">
        <div class="wrapper">
          <div class="block-holder hero">
            <div class="block">
              <h1>Teachable Machine</h1>
              <h2 class="small">${Object(E.b)("home_subtitle")}</h2>
              <p>${Object(E.b)("home_description")}</p>

              <a class="button" href="/train" style="margin-top: 30px;"
                >${Object(E.b)("home_cta")}</a
              >

              <div class="icon-holder">
                <a href="https://www.tensorflow.org/js" target="_blank"
                  >${s()}</a
                >
                <a href="https://ml5js.org/" target="_blank">${a()}</a>
                <a href="https://p5js.org/" target="_blank">${l()}</a>
                <a href="https://coral.ai/" target="_blank">${c()}</a>
                <a href="https://www.framer.com/" target="_blank"
                  >${g()}</a
                >
                <a href="https://nodejs.org/" target="_blank"
                  >${d()}</a
                >
                <a
                  href="https://glitch.com?utm_medium=partner&utm_source=teachable_machine"
                  target="_blank"
                  >${C()}</a
                >
                <a href="https://www.arduino.cc/" target="_blank"
                  >${o.f`
    <svg width="36" height="25" viewBox="0 0 36 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title>Arduino</title>
        <path d="M27.1282 16.8641C31.873 16.8444 35.727 13.093 35.727 8.48381C35.727 3.86479 31.8533 0.103516 27.0888 0.103516C24.4802 0.103516 22.2849 0.966193 20.3801 2.74577C19.4646 3.59859 18.6919 4.58944 17.9831 5.62465C17.2793 4.58944 16.5016 3.59859 15.5861 2.74577C13.6813 0.966193 11.4861 0.103516 8.87739 0.103516C4.11288 0.103516 0.239258 3.86479 0.239258 8.48381C0.239258 13.093 4.09319 16.8444 8.83801 16.8641C11.3285 16.9874 13.4302 16.2282 15.2612 14.5472C16.3145 13.581 17.1857 12.393 17.9831 11.1655C18.7805 12.3979 19.6517 13.581 20.705 14.5472C22.4129 16.1148 24.3473 16.8789 26.6163 16.8789C26.7886 16.8789 26.9559 16.874 27.1282 16.8641ZM13.2678 12.3634C12.0078 13.5219 10.6739 14 8.95614 13.9064H8.87739C5.74207 13.9064 3.19246 11.4761 3.19246 8.48381C3.19246 5.49155 5.74207 3.06127 8.87739 3.06127C10.7281 3.06127 12.2194 3.64789 13.5779 4.90986C14.5869 5.85141 15.4237 7.05916 16.2506 8.37043C15.3055 9.90846 14.3851 11.338 13.2678 12.3634ZM22.7033 12.3634C21.586 11.338 20.6656 9.90846 19.7206 8.37043C20.5475 7.05916 21.3793 5.85141 22.3932 4.90986C23.7468 3.64789 25.2382 3.06127 27.0888 3.06127C30.2241 3.06127 32.7738 5.49155 32.7738 8.48381C32.7738 11.4761 30.2241 13.9064 27.0888 13.9064H27.0101C25.2923 14 23.9634 13.5219 22.7033 12.3634Z" fill="#00979C"/>
        <path d="M27.484 9.07027H29.0837V7.409H27.484V5.80688H25.8155V7.409H24.2158V9.07027H25.8155V10.6872H27.484V9.07027Z" fill="#00979C"/>
        <path d="M34.4828 1.04045L34.6502 1.57285H34.8027L34.9603 1.05524V1.57285H35.1325V0.739746H34.9012L34.724 1.30665L34.5468 0.739746H34.3105V1.57285H34.4828V1.04045Z" fill="#00979C"/>
        <path d="M33.837 1.57285H34.0191V0.902422H34.2701V0.739746H33.5811V0.902422H33.837V1.57285Z" fill="#00979C"/>
        <path d="M2.39392 18.3872L0.631836 24.145H1.84265L2.17243 23.0309H4.11662L4.43655 24.145H5.77041L4.01326 18.3872H2.39392ZM3.84099 22.045H2.47267L3.16175 19.6935L3.84099 22.045Z" fill="#00979C"/>
        <path d="M9.27512 21.6015C9.20621 21.5276 9.13238 21.4684 9.05363 21.424C9.16684 21.3945 9.27512 21.355 9.37848 21.3106C9.54091 21.2367 9.68365 21.1381 9.80178 21.0149C9.91991 20.8916 10.0134 20.7487 10.0774 20.5811C10.1414 20.4135 10.1759 20.2212 10.1759 20.0092C10.1759 19.7135 10.1217 19.4571 10.0183 19.255C9.91498 19.048 9.7624 18.8804 9.57537 18.7473C9.38341 18.6191 9.15207 18.5254 8.88628 18.4712C8.6205 18.417 8.32517 18.3923 8.00032 18.3923H6.24316V24.1501H7.4589V21.8184H7.61148C7.78868 21.8184 7.94126 21.8578 8.06923 21.9416C8.1972 22.0205 8.29564 22.1437 8.36947 22.3064L9.20621 24.155H10.6287L9.65412 22.1783C9.52122 21.9268 9.39817 21.7346 9.27512 21.6015ZM8.90105 20.1078C8.90105 20.2311 8.87644 20.3395 8.82722 20.4332C8.778 20.5268 8.70909 20.6057 8.6205 20.6698C8.52698 20.7339 8.41869 20.7832 8.2858 20.8177C8.1529 20.8522 8.00032 20.867 7.8379 20.867H7.44906V19.393H7.87235C8.22181 19.393 8.48268 19.4522 8.65495 19.5656C8.8223 19.674 8.90105 19.8515 8.90105 20.1078Z" fill="#00979C"/>
        <path d="M14.9016 19.0677C14.6752 18.836 14.3848 18.6635 14.0402 18.555C13.7006 18.4466 13.3019 18.3923 12.854 18.3923H11.0723V24.1501H12.6129C13.1297 24.1501 13.5825 24.0811 13.9566 23.943C14.3306 23.805 14.6456 23.6029 14.8868 23.3466C15.128 23.0902 15.3101 22.7747 15.4233 22.4099C15.5365 22.0501 15.5907 21.6409 15.5907 21.2022C15.5907 20.7191 15.5316 20.3001 15.4184 19.9501C15.3052 19.5902 15.1329 19.2944 14.9016 19.0677ZM12.288 19.398H12.7851C13.0755 19.398 13.3216 19.4423 13.5136 19.5212C13.7055 19.605 13.8581 19.7233 13.9713 19.8811C14.0845 20.0388 14.1682 20.236 14.2174 20.4628C14.2667 20.6945 14.2913 20.9656 14.2913 21.2663C14.2913 21.917 14.1534 22.3952 13.8877 22.6909C13.6219 22.9867 13.2232 23.1395 12.7064 23.1395H12.2831V19.398H12.288Z" fill="#00979C"/>
        <path d="M19.2526 22.0795C19.2526 22.2964 19.2329 22.4788 19.1935 22.6316C19.1542 22.7795 19.0951 22.8978 19.0163 22.9914C18.9425 23.0802 18.8441 23.1492 18.7309 23.1886C18.6127 23.233 18.4651 23.2527 18.2928 23.2527C18.1107 23.2527 17.9532 23.2281 17.8351 23.1788C17.7169 23.1295 17.6185 23.0605 17.5397 22.9668C17.461 22.8731 17.4068 22.7548 17.3724 22.6168C17.3379 22.4738 17.3232 22.3112 17.3232 22.1238V18.3872H16.1074V22.1879C16.1074 22.4985 16.1468 22.7844 16.2206 23.0358C16.2994 23.2921 16.4224 23.509 16.5947 23.6914C16.767 23.8689 16.9934 24.0069 17.269 24.1055C17.5397 24.1992 17.8695 24.2485 18.2485 24.2485C18.5881 24.2485 18.8933 24.1992 19.1689 24.1055C19.4446 24.0119 19.6808 23.8689 19.8728 23.6816C20.0647 23.4943 20.2124 23.2576 20.3158 22.9816C20.4191 22.7055 20.4683 22.3802 20.4683 22.0154V18.3921H19.2526V22.0795Z" fill="#00979C"/>
        <path d="M21.4141 19.3731H22.6938V23.1492H21.4141V24.145H25.2089V23.1492H23.9292V19.3731H25.2089V18.3872H21.4141V19.3731Z" fill="#00979C"/>
        <path d="M29.4065 22.2027L29.2391 21.8083L27.6296 18.3872H26.1875V24.145H27.3048V20.2752L27.5115 20.7435L29.0866 24.145H30.5238V18.3872H29.4065V22.2027Z" fill="#00979C"/>
        <path d="M35.1761 19.0529C34.7824 18.55 34.1819 18.2937 33.3993 18.2937C33.0646 18.2937 32.7447 18.3529 32.4493 18.4712C32.154 18.5895 31.8882 18.7719 31.6717 19.0184C31.4502 19.2599 31.2779 19.5754 31.1499 19.955C31.0269 20.3296 30.9629 20.7831 30.9629 21.2958C30.9629 22.2472 31.1598 22.9817 31.5535 23.4845C31.9473 23.9923 32.5478 24.2486 33.3304 24.2486C33.6651 24.2486 33.985 24.1895 34.2803 24.0712C34.5756 23.9529 34.8414 23.7705 35.058 23.524C35.2795 23.2824 35.4518 22.9669 35.5797 22.5874C35.7028 22.2127 35.7668 21.7592 35.7668 21.2465C35.7668 20.2902 35.5699 19.5557 35.1761 19.0529ZM33.8767 23.0507C33.734 23.1296 33.5617 23.1691 33.3648 23.1691C32.9661 23.1691 32.6856 23.0162 32.5084 22.7057C32.3263 22.3902 32.2377 21.8972 32.2377 21.2416C32.2377 20.936 32.2623 20.6599 32.3017 20.4282C32.346 20.1965 32.4149 19.9993 32.5084 19.8416C32.597 19.6888 32.7151 19.5705 32.8529 19.4916C32.9908 19.4127 33.163 19.3733 33.3648 19.3733C33.7684 19.3733 34.049 19.5261 34.2213 19.8367C34.3985 20.1522 34.492 20.6451 34.492 21.3007C34.492 21.6064 34.4674 21.8824 34.428 22.1141C34.3837 22.3458 34.3148 22.543 34.2262 22.7007C34.1327 22.8536 34.0145 22.9719 33.8767 23.0507Z" fill="#00979C"/>
        <path d="M11.7411 7.3894H6.47949V9.1049H11.7411V7.3894Z" fill="#00979C"/>
    </svg>
    `}</a
                >
              </div>
            </div>
            <div class="block cell prediction-lockup">
              <video
                src="/assets/prediction.mp4"
                autoplay
                loop
                muted
                playsinline
                type="video/mp4"
              ></video>
            </div>
          </div>
        </div>
      </div>

      <div class="content-block">
        <div class="wrapper center">
          <h2>${Object(E.b)("home_hero_title")}</h2>
          <div style="margin: 0 auto;">
            <div
              class="videoPoster"
              @click=${()=>{const e=document.querySelector("#mainVideo");e.src="https://www.youtube.com/embed/T2qQGqZxkD0?autoplay=1&rel=0",e.style.display="block";document.querySelector("#posterImage").opacity=0}}
            >
              <div class="playIcon">${o.f`<svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M45 0C20.16 0 0 20.16 0 45C0 69.84 20.16 90 45 90C69.84 90 90 69.84 90 45C90 20.16 69.84 0 45 0Z" class="background" fill="#4285F4"/><path d="M36 65.25V24.75L63 45L36 65.25Z" fill="white"/></svg>`}</div>
              <img
                class="fullwidth"
                id="posterImage"
                src="assets/img/contentpage/home/poster.jpg"
                alt="${Object(E.b)("home_hero_img_alt")}"
              />
              <iframe
                width="100%"
                id="mainVideo"
                height="auto"
                src="https://www.youtube.com/embed/T2qQGqZxkD0?rel=0"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <p class="description">
              ${Object(I.a)(Object(E.b)("home_hero_description"))}
            </p>
          </div>
        </div>
      </div>

      <div class="content-block">
        <div class="wrapper">
          <h2>${Object(E.b)("home_howdoiuse_title")}</h2>
          <div class="block-holder">
            <div class="block">
              <div class="block-img illustration">
                <img
                  height="200px"
                  src="assets/img/contentpage/home/collect.svg"
                  alt="${Object(E.b)("home_howdoiuse_bullet1_img_alt")}"
                />
              </div>
              <div class="block-copy">
                <h3 class="numeral">
                  ${Object(I.a)(Object(E.b)("home_howdoiuse_bullet1_title"))}
                </h3>
                <p>${Object(E.b)("home_howdoiuse_bullet1_description")}</p>
                <a
                  class="block-link"
                  href="/train?action=onboardOpen&id=${y.a.data}"
                  >${Object(E.b)("home_howdoiuse_bullet1_cta")}${h()}</a
                >
              </div>
            </div>

            <div class="block">
              <div class="block-img illustration">
                <img
                  height="200px"
                  src="assets/img/contentpage/home/train.svg"
                  alt="${Object(E.b)("home_howdoiuse_bullet2_img_alt")}"
                />
              </div>
              <div class="block-copy">
                <h3 class="numeral">
                  ${Object(I.a)(Object(E.b)("home_howdoiuse_bullet2_title"))}
                </h3>
                <p>${Object(E.b)("home_howdoiuse_bullet2_description")}</p>
                <a
                  class="block-link"
                  href="/train?action=onboardOpen&id=${y.a.train}"
                  >${Object(E.b)("home_howdoiuse_bullet2_cta")}${h()}</a
                >
              </div>
            </div>

            <div class="block">
              <div class="block-img illustration">
                <img
                  height="200px"
                  class="fullwidth"
                  src="assets/img/contentpage/home/export.svg"
                  alt="${Object(E.b)("home_howdoiuse_bullet3_img_alt")}"
                />
              </div>
              <div class="block-copy">
                <h3 class="numeral">
                  ${Object(I.a)(Object(E.b)("home_howdoiuse_bullet3_title"))}
                </h3>
                <p>${Object(E.b)("home_howdoiuse_bullet3_description")}</p>
                <a
                  class="block-link"
                  href="/train?action=onboardOpen&id=${y.a.run}"
                  >${Object(E.b)("home_howdoiuse_bullet3_cta")}${h()}</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="content-block">
        <div class="wrapper">
          <h2>${Object(E.b)("home_whatcaniuse_title")}</h2>
          <p class="center">${Object(E.b)("home_whatcaniuse_description")}</p>
          <div class="block-holder" style="margin-top: 70px;">
            <div class="block">
              <div class="block-img">
                <img
                  alt="${Object(E.b)("home_whatcaniuse_block1_img_alt")}"
                  src="assets/img/contentpage/home/teach-images.png"
                />
              </div>
              <div class="block-copy">
                <h3>${Object(E.b)("home_whatcaniuse_block1_title")}</h3>
                <p>${Object(E.b)("home_whatcaniuse_block1_description")}</p>
              </div>
            </div>

            <div class="block">
              <div class="block-img">
                <img
                  alt="${Object(E.b)("home_whatcaniuse_block2_img_alt")}"
                  src="assets/img/contentpage/home/teach-sounds.png"
                />
              </div>
              <div class="block-copy">
                <h3>${Object(E.b)("home_whatcaniuse_block2_title")}</h3>
                <p>${Object(E.b)("home_whatcaniuse_block2_description")}</p>
              </div>
            </div>

            <div class="block">
              <div class="block-img">
                <img
                  alt="${Object(E.b)("home_whatcaniuse_block3_img_alt")}"
                  src="assets/img/contentpage/home/teach-poses.png"
                />
              </div>
              <div class="block-copy">
                <h3>${Object(E.b)("home_whatcaniuse_block3_title")}</h3>
                <p>${Object(E.b)("home_whatcaniuse_block3_description")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="content-block">
        <div class="wrapper">
          <h2>${Object(E.b)("home_tutorials_title")}</h2>
          <div class="block-holder">
            <div class="block">
              <div class="block-copy">
                <h3>
                  <a
                    class="block-link-pronounced"
                    href="https://medium.com/@warronbebster/4bfffa765866"
                    target="_blank"
                    >${Object(E.b)("home_tutorials_block1_title")}</a
                  >
                </h3>
                <p>${Object(E.b)("home_tutorials_block1_description")}</p>
              </div>
            </div>

            <div class="block">
              <div class="block-copy">
                <h3>
                  <a
                    class="block-link-pronounced"
                    href="https://medium.com/@warronbebster/4212fd7f3555"
                    target="_blank"
                    >${Object(E.b)("home_tutorials_block2_title")}</a
                  >
                </h3>
                <p>${Object(E.b)("home_tutorials_block2_description")}</p>
              </div>
            </div>

            <div class="block">
              <div class="block-copy">
                <h3>
                  <a
                    class="block-link-pronounced"
                    href="https://medium.com/@warronbebster/f4f6116f491"
                    target="_blank"
                    >${Object(E.b)("home_tutorials_block3_title")}</a
                  >
                </h3>
                <p>${Object(E.b)("home_tutorials_block3_description")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="content-block">
        <div class="wrapper">
          <h2>${Object(E.b)("home_madewith_title")}</h2>
          <carousel-element
            class="made-with"
            alignSelector="div.block[aria-hidden='false'] div.block-img"
            loadImage
          >
            <div class="block carousel-slide">
              <div class="block-img">
                <img
                  alt="A smiling diy cardboard robot sitting on top of a webcam"
                  src="assets/img/contentpage/home/madewith-sorter.jpg"
                />
              </div>
              <div class="block-copy">
                <h3 class="block-copy__header">Tiny Sorter</h3>
                <p class="block-copy__desc">
                  ${Object(E.b)("home_madewith_block1_description")}
                </p>
                <a
                  class="block-link"
                  href="https://experiments.withgoogle.com/tiny-sorter/view"
                  target="_blank"
                  >${Object(E.b)("home_madewith_block_cta_learn")}</a
                >
              </div>
            </div>

            <div class="block carousel-slide">
              <div class="block-img">
                <img
                  alt="${Object(E.b)("home_madewith_block2_img_alt")}"
                  src="assets/img/contentpage/home/madewith-euphonia.jpg"
                />
              </div>
              <div class="block-copy">
                <h3 class="block-copy__header">Project Euphonia</h3>
                <p class="block-copy__desc">
                  ${Object(E.b)("home_madewith_block2_description")}
                </p>
                <a
                  class="block-link"
                  href="https://www.youtube.com/watch?v=OAdegPmkK-o"
                  target="_blank"
                  >${Object(E.b)("home_madewith_block_cta_watch")}</a
                >
              </div>
            </div>

            <div class="block carousel-slide">
              <div class="block-img">
                <img
                  alt="${Object(E.b)("home_madewith_block3_img_alt")}"
                  src="assets/img/contentpage/home/madewith-snake.jpg"
                />
              </div>
              <div class="block-copy">
                <h3 class="block-copy__header">Teachable Snake</h3>
                <p class="block-copy__desc">
                  ${Object(E.b)("home_madewith_block3_description")}
                </p>
                <a
                  class="block-link"
                  href="https://experiments.withgoogle.com/teachable-snake"
                  target="_blank"
                  >${Object(E.b)("home_madewith_block_cta_learn")}</a
                >
              </div>
            </div>

            <div class="block carousel-slide">
              <div class="block-img">
                <img
                  alt="${Object(E.b)("home_madewith_block4_img_alt")}"
                  src="assets/img/contentpage/home/madewith-singulator.jpg"
                />
              </div>
              <div class="block-copy">
                <h3 class="block-copy__header">Teachable Sorter</h3>
                <p class="block-copy__desc">
                  ${Object(E.b)("home_madewith_block4_description")}
                </p>
                <a
                  class="block-link"
                  href="https://coral.ai/projects/teachable-sorter"
                  target="_blank"
                  >${Object(E.b)("home_madewith_block_cta_learn")}</a
                >
              </div>
            </div>

            <div class="block carousel-slide">
              <div class="block-img">
                <img
                  alt="${Object(E.b)("home_madewith_block5_img_alt")}"
                  src="assets/img/contentpage/home/madewith-arcade.jpg"
                />
              </div>
              <div class="block-copy">
                <h3 class="block-copy__header">Teachable Arcade</h3>
                <p class="block-copy__desc">
                  ${Object(E.b)("home_madewith_block5_description")}
                </p>
                <a
                  class="block-link"
                  href="https://teachable-arcade.glitch.me/"
                  target="_blank"
                  >${Object(E.b)("home_madewith_block_cta_learn")}</a
                >
              </div>
            </div>
          </carousel-element>

          <p class="center" style="margin-top: 70px;">
            ${Object(I.a)(Object(E.b)("home_madewith_description"))}
          </p>
        </div>
      </div>

      <div class="content-block">
        <div class="wrapper works-with">
          <h2>${Object(E.b)("home_workswith_title")}</h2>

          <div class="icon-holder">
            <a href="https://www.tensorflow.org/js" target="_blank"
              >${s()}</a
            >
            <a href="https://ml5js.org/" target="_blank">${a()}</a>
            <a href="https://p5js.org/" target="_blank">${l()}</a>
            <a href="https://coral.ai/" target="_blank">${c()}</a>
            <a href="https://www.framer.com/" target="_blank">${g()}</a>
            <a href="https://nodejs.org/" target="_blank">${d()}</a>
            <a
              href="https://glitch.com?utm_medium=partner&utm_source=teachable_machine"
              target="_blank"
              >${C()}</a
            >
          </div>

          <div class="block-holder single">
            <div class="block">
              <div class="block-copy">
                <p>${Object(I.a)(Object(E.b)("home_workswith_description-1"))}</p>
                <p>${Object(I.a)(Object(E.b)("home_workswith_description-2"))}</p>
                <a class="block-link" href="/faq#Saving-&-Exporting"
                  >${Object(E.b)("app_abstract_faq")}: ${Object(E.b)("faq_saving_title")}</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="content-block">
        <div class="wrapper">
          <h2>${Object(E.b)("home_forlearning_title")}</h2>
          <p class="center" style="margin-bottom: 0;">
            ${Object(I.a)(Object(E.b)("home_forlearning_description-1"))}
          </p>
          <p class="center" style="margin-bottom: 40px;">
            ${Object(I.a)(Object(E.b)("home_forlearning_description-2"))}
          </p>
          <div class="block-holder">
            <div class="block">
              <div class="block-copy">
                <h3>
                  <a
                    href="https://docs.google.com/document/d/1e9wx9oBg7CR0s5O7YnYHVmX7H7pnITfoDxNdrSGkp60/view"
                    target="_blank"
                    >AI + Ethics</a
                  >
                  ${u()}
                </h3>
                <p>${Object(I.a)(Object(E.b)("home_forlearning_block1_credits"))}</p>
                <p>${Object(E.b)("home_forlearning_block1_description")}</p>
                <p>${Object(E.b)("home_forlearning_block1_subtitle")}</p>
              </div>
            </div>

            <div class="block">
              <div class="block-copy">
                <h3>
                  <a href="https://dancingwithai.media.mit.edu/" target="_blank"
                    >Dancing with AI</a
                  >
                  ${u()}
                </h3>
                <p>${Object(I.a)(Object(E.b)("home_forlearning_block2_credits"))}</p>
                <p>${Object(E.b)("home_forlearning_block2_description")}</p>
                <p>${Object(E.b)("home_forlearning_block2_subtitle")}</p>
              </div>
            </div>

            <div class="block">
              <div class="block-copy">
                <h3>
                  <a href="https://edu.readyai.org/courses/teachable-machine/"
                    >Ready AI Lesson</a
                  >
                  ${u()}
                </h3>
                <p>${Object(I.a)(Object(E.b)("home_forlearning_block3_credits"))}</p>
                <p>${Object(E.b)("home_forlearning_block3_description")}</p>
                <p>${Object(E.b)("home_forlearning_block3_subtitle")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="content-block">
        <div class="wrapper">
          <h2>Tweets</h2>
          <carousel-element
            class="tweet-holder"
            alignSelector="a.tweet-block[aria-hidden='false']"
          >
            ${O.map(e=>r.f` <a
                href="${e.link}"
                target="_blank"
                class="tweet-block carousel-slide"
              >
                <div class="tweet-content">
                  <p class="tweet-header">
                    ${f("#174EA6")} @${e.user}
                  </p>
                  <p>${e.content}</p>
                </div>
              </a>`)}
          </carousel-element>
          <p class="center" style="margin-top: 70px;">
            ${f()} ${Object(I.a)(Object(E.b)("home_tweets_description"))}
          </p>
        </div>
      </div>

      <div class="content-block">
        <div class="wrapper center section-2017">
          <h2>${Object(E.b)("home_lookingfor_title")}</h2>
          <a
            href="/v1"
            aria-label="Teachable Machine V1"
            style="display:block;"
          >
            <img
              alt="Teachable Machine v1"
              class="fullwidth img-2017"
              src="assets/img/contentpage/home/2017-version.jpg"
            />
          </a>
          <br />
          <a
            class="block-link"
            href="/v1"
            aria-label="Link to Teachable Machine V1"
            >${Object(E.b)("home_lookingfor_cta")}</a
          >
        </div>
      </div>

      <div class="content-block">
        <div class="wrapper center">
          <h2>${Object(E.b)("home_morequestions_title")}</h2>
          <a class="block-link" href="/faq">${Object(E.b)("home_morequestions_cta")}</a>
        </div>
      </div>

      <!-- <div class="content-block">
            <div class="wrapper two-col">
                <div class="block">
                </div>
            </div>
        </div> -->
    `,document.querySelector("#main-container")||document.body)}function L(e,t){window.scrollTo(0,0),Object(r.h)(r.f`
      <style>
        html {
          overflow-x: hidden;
        }
        body {
          overflow-x: hidden;
          background-color: #f8f9fa;
        }
        * {
          -webkit-user-select: auto;
          -khtml-user-select: auto;
          -moz-user-select: -moz-auto;
          -o-user-select: auto;
          user-select: auto;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        p a {
          text-decoration: underline;
        }

        a.blue,
        a:visited.blue {
          border: none;
          color: #1967d2;
          text-decoration: underline;
        }

        footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 50px;
          padding: 12px 25px;
          text-align: center;
          position: relative;
        }

        p {
          margin: 0 0 1em 0;
          line-height: 1.6em;
          font-size: 18px;
          font-family: 'Google Sans', Helvetica, Arial, sans-serif;
        }
        .hero p {
          max-width: 500px;
        }

        h1,
        h2,
        h3,
        h4 {
          margin: 0;
          padding: 0;
          font-family: 'BoingSemiBold', Helvetica, Arial, sans-serif;
          line-height: 1.4em;
          font-weight: normal;
        }

        h1 {
          font-size: 64px;
          color: #1a73e8;
          line-height: 1em;
        }

        h2 {
          font-family: 'BoingSemiBold', Helvetica, Arial, sans-serif;
          font-weight: normal;
          font-size: 48px;
          margin: 70px 0;
          text-align: center;
        }

        h2.small {
          max-width: 500px;
          margin: 0.8em 0;
          font-size: 28px;
          text-align: left;
        }

        h3 {
          font-family: 'Google Sans', Helvetica, Arial, sans-serif;
          font-weight: 600;
          font-size: 24px;
          margin: 0 0 15px 0;
        }

        h3 a,
        h3 a:link,
        h3 a:visited {
          color: #1967d2;
          border-bottom: 3px solid #1967d2;
          text-decoration: none;
        }

        @media only screen and (max-width: 900px) {
          h1 {
            font-size: 42px;
          }
          h2 {
            font-size: 30px;
            margin: 0.5em 0;
          }
          h2.small {
            font-size: 24px;
            max-width: 440px;
          }
          h3 {
            font-size: 20px;
          }
          p {
            font-size: 16px;
          }
          .hero p {
            max-width: 440px;
          }
        }

        .icon-holder {
          display: flex;
          align-items: center;
          flex-flow: row wrap;
          justify-content: space-around;
          width: calc(100% / 14 * 8);
          margin: 0 auto;
        }

        .hero .icon-holder {
          margin: 0;
          width: 100%;
          justify-content: flex-start;
        }

        .icon-holder svg {
          margin: 30px 20px 0 0;
        }

        a.button {
          background: #0b50c1;
          color: #fff;
          border-radius: 8px;
          font-size: 20px;
          padding: 18px 50px 16px;
          display: inline-block;
          font-family: 'BoingSemiBold', Helvetica, Arial, sans-serif;
          transition: background-color 0.25s ease-out;
        }
        a.button:hover {
          background: #1967d2;
        }
        a.button:focus {
          background: #1967d2;
        }
        a.button:active {
          background: #174ea6;
        }

        .numeral {
          position: relative;
        }
        .numeral .numeral-no {
          font-weight: normal;
          display: inline-block;
          position: absolute;
          left: -30px;
        }
        @media only screen and (max-width: 900px) {
          .numeral .numeral-no {
            left: -26px;
            position: relative;
            margin-right: -10px;
          }
        }

        #footer-menu {
          position: absolute;
          left: 0;
          right: 0;
          margin: 0 auto;
          width: 50%;
        }

        @media only screen and (max-width: 768px) {
          #footer-menu {
            position: relative;
            left: auto;
            right: auto;
            margin: auto;
            width: auto;
          }
        }

        .footer-menuitem {
          display: inline-block;
          vertical-align: middle;
          margin: 0 10px;
          color: #4c5157;
          font-size: 16px;
        }

        a.footer-menuitem {
          color: #4c5157;
          text-decoration: underline;
        }

        #google-logo {
          width: 110px;
        }

        #aix-logo {
          width: 130px;
        }

        #logo {
          font-size: 24px;
          font-family: 'BoingSemiBold', Helvetica, Arial, sans-serif;
          color: #1967d2;
          margin-top: 5px;
        }

        img.fullwidth {
          width: 100%;
        }

        .made-with img {
          border-radius: 8px;
        }

        img.fullwidth.img-2017 {
          max-width: 500px;
          border-radius: 8px;
          box-shadow: 0px -3px 11px rgba(128, 134, 139, 0.09),
            0px 6px 11px rgba(128, 134, 139, 0.06),
            0px 1px 3px rgba(60, 64, 67, 0.3),
            0px 4px 8px rgba(60, 64, 67, 0.15);
        }

        .menu-item {
          display: inline-block;
          vertical-align: middle;
          margin-left: 35px;
        }

        .menu-item.active {
          border-bottom: 1px solid #000;
        }

        .menu-item.button {
          background-color: #1967d2;
          color: #fff;
          padding: 8px 15px 6px;
          border-radius: 8px;
        }
        .tweet-holder {
          display: flex;
          width: 100%;
          justify-content: space-between;
          margin-top: 30px;
        }
        .tweet-block {
          text-decoration: none;
          display: block;
          color: #174ea6;
          background: #e8f0fe;
          border-radius: 8px;
          max-width: calc(100% / 14 * 4);
          border-radius: 8px;
          transition: background-color 0.25s ease-out;
          min-height: 410px;
        }
        .tweet-block:hover {
          box-shadow: 0px -2px 8px rgba(128, 134, 139, 0.09),
            0px 4px 8px rgba(128, 134, 139, 0.06),
            0px 1px 2px rgba(60, 64, 67, 0.3),
            0px 2px 6px rgba(60, 64, 67, 0.15);
          border-radius: 8px;
        }
        .tweet-block:active {
          box-shadow: 0px -2px 8px rgba(128, 134, 139, 0.09),
            0px 4px 8px rgba(128, 134, 139, 0.06),
            0px 1px 2px rgba(60, 64, 67, 0.3),
            0px 2px 6px rgba(60, 64, 67, 0.15);
          border-radius: 8px;
          background: #d2e3fc;
        }
        @media only screen and (max-width: 1250px) {
          .tweet-block {
            min-height: 550px;
          }
        }
        @media only screen and (max-width: 1080px) {
          .tweet-block {
            min-height: 580px;
          }
        }
        @media only screen and (max-width: 1000px) {
          .tweet-block {
            min-height: 620px;
          }
        }
        @media only screen and (max-width: 900px) {
          .tweet-block {
            max-width: 100%;
            min-height: 250px;
          }
        }
        @media only screen and (max-width: 800px) {
          .tweet-block {
            min-height: 275px;
          }
        }
        @media only screen and (max-width: 600px) {
          .tweet-block {
            min-height: 320px;
          }
        }
        @media only screen and (max-width: 500px) {
          .tweet-block {
            min-height: 350px;
          }
        }
        @media only screen and (max-width: 380px) {
          .tweet-block {
            min-height: 420px;
          }
        }

        .tweet-content {
          padding: 18px;
        }
        .tweet-header {
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          font-weight: 500;
          color: #174ea6;
        }
        .tweet-header svg {
          height: 15px;
        }
        .tweet-content p {
          text-overflow: ellipsis;
          overflow: hidden;
          color: #174ea6;
        }

        .content-block {
          background-color: #f8f9fa;
          margin: 260px 0;
        }
        .content-block:first-child,
        .content-block:nth-child(2) {
          margin: 120px 0;
        }

        #main-container {
          padding: 0 calc(100% / 18 * 2);
          background-color: #f8f9fa;
        }

        .block-img,
        .block-copy {
          margin-bottom: 10px;
        }

        .wrapper.center {
          text-align: center;
        }

        .block-img img {
          width: 100%;
        }

        @media only screen and (max-width: 900px) {
          carousel-element.made-width {
            margin-top: 40px;
          }

          .block-img img {
            width: 100%;
            height: auto;
          }
          .illustration {
            display: flex;
          }
          .illustration img {
            margin-left: auto;
            margin-right: auto;
            width: calc(100% / 14 * 10);
          }
        }

        a.block-link {
          color: #1967d2;
          font-size: 18px;
          text-decoration: underline;
          border: none;
          font-family: 'Google Sans', Helvetica, Arial, sans-serif;
          font-weight: 500;
          line-height: 1.4em;
        }

        a.block-link svg {
          position: relative;
          top: 6px;
          left: 5px;
          width: 20px;
        }

        .block-copy svg {
          position: relative;
          top: 10px;
          left: 5px;
          width: 23px;
        }

        .block-copy__header {
          margin: 15px 0 10px 0;
        }

        .block-copy__desc {
          margin: 0 0 10px 0;
        }

        a.block-link-pronounced {
          color: #1a73e8;
          text-decoration: underline;
          border: none;
          font-family: 'BoingSemiBold', Helvetica, Arial, sans-serif;
          line-height: 1.4em;
        }

        .videoPoster {
          cursor: pointer;
          position: relative;
        }

        #posterImage {
          border-radius: 8px;
        }

        .videoPoster .playIcon {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          transition: fill 0.25s ease-out;
        }

        #mainVideo {
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 100%;
          display: none;
        }

        .videoPoster .playIcon .background {
          transition: fill 0.25s ease-out;
        }
        .videoPoster:hover .playIcon .background {
          fill: #1967d2;
        }

        #main-container {
          margin-top: 70px;
        }

        .prediction-lockup {
          position: relative;
          mix-blend-mode: darken;
        }

        .prediction-lockup video {
          width: 100%;
        }

        .wrapper {
          max-width: 1120px;
          margin: 0 auto;
        }

        .img-illustration-block {
          height: 200px;
          width: 100%;
        }

        @media only screen and (max-width: 900px) {
          .content-block {
            margin: 130px 0;
          }

          .content-block:first-child {
            margin-top: 130px;
          }

          .works-with .icon-holder svg {
            width: 55px;
          }

          .img-illustration-block {
            height: auto;
            width: 100%;
          }
        }
        @media only screen and (max-width: 768px) {
          .icon-holder {
            align-items: center;
            flex-flow: row wrap;
            justify-content: flex-start;
            width: 100%;
          }
          .icon-holder svg {
            margin-right: 14px;
          }
          .prediction-lockup-score {
            left: calc(100% / 10 * 2);
            width: 100%;
            bottom: -40px;
          }
        }

        /* GRIDS */
        .block-holder {
          display: flex;
          width: 100%;
          justify-content: space-between;
          align-items: flex-start;
          margin-top: 30px;
        }

        .block {
          width: calc(100% / 14 * 4);
        }

        .block-holder.hero .block:first-child {
          width: calc(100% / 14 * 8);
        }

        .block-holder.hero .block:last-child {
          width: calc(100% / 14 * 6);
          right: calc(100% / 14 * -1.3);

          /* width: 42%;
                    right: -8%; */
        }

        .block-holder.single {
          justify-content: space-around;
        }

        .block-holder.single .block {
          width: calc(100% / 14 * 6);
        }

        .center {
          text-align: center;
          width: calc(100% / 14 * 10);
          margin: 0 auto;
        }

        .center.section-2017 {
          width: calc(100% / 14 * 11);
        }

        .description {
          width: calc(100% / 10 * 8);
          max-width: 650px;
          margin: 1.2em auto 0;
        }

        @media only screen and (max-width: 1400px) {
          .block-holder.hero .block:first-child {
            width: calc(100% / 14 * 8);
          }
          .block-holder.hero .block:last-child {
            right: calc(100% / 14 * -1);
          }
        }

        @media only screen and (max-width: 900px) {
          .block-holder {
            flex-direction: column;
            align-items: center;
          }
          .center,
          .made-with .block,
          .block-holder.single .block,
          .block-holder .block {
            width: 100%;
          }
          .block-holder.hero .block:first-child {
            width: calc(100% / 14 * 11);
            order: 2;
          }
          .block-holder.hero .block:last-child {
            width: calc(100% / 14 * 10);
            order: 1;
            margin-bottom: 20px;
            right: 0;
          }
          .block {
            margin-bottom: 60px;
          }
        }

        @media only screen and (max-width: 768px) {
          .block-holder.hero .block:first-child,
          .block-holder.hero .block:last-child {
            width: 100%;
          }
          .block-holder.hero .block:first-child {
            width: calc(100% / 14 * 13);
          }
          .block-holder.hero .block:last-child {
            width: calc(100% / 14 * 13);
          }
          .description {
            text-align: left;
            margin-left: 0;
            margin-right: 0;
            width: 100%;
          }
          .center {
            text-align: left;
          }
          .center br {
            display: none;
          }
        }

        .brand-wrapper {
          display: flex;
          align-items: center;
        }

        @media only screen and (max-width: 768px) {
          .brand-wrapper {
            display: block;
            margin-top: -40px;
          }

          .brand-wrapper tm-language-select {
            margin-bottom: 15px;
            margin-right: 0;
            display: block;
          }
        }
      </style>

      <site-nav ?hideAppNameWhenNarrow=${!0} page=${e.path}></site-nav>

      <div id="main-container"></div>

      <footer>
        ${o.f`
    <svg id="aix-logo" width="173" height="98" viewBox="0 0 173 98" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title>This is an A.I. Experiment</title>
        <path d="M15.9916 54.5901L14.9255 51.3933H5.41256L4.34645 54.5901H0L8.69289 29.3442H11.6452L20.4201 54.5901H15.9916ZM10.251 36.2294L6.72468 47.7048H13.6954L10.251 36.2294ZM25.5866 49.0163C27.2268 49.0163 28.5389 50.3278 28.5389 51.9671C28.5389 53.5245 27.2268 54.836 25.5866 54.836C24.0285 54.836 22.7163 53.5245 22.7163 51.9671C22.6343 50.3278 23.9464 49.0163 25.5866 49.0163ZM32.5573 29.3442H36.8218V54.5901H32.5573V29.3442ZM43.4644 49.0163C45.1046 49.0163 46.4167 50.3278 46.4167 51.9671C46.4167 53.5245 45.1046 54.836 43.4644 54.836C41.9063 54.836 40.5941 53.5245 40.5941 51.9671C40.5941 50.3278 41.8243 49.0163 43.4644 49.0163ZM6.64268 67.213V74.3442H17.1397V78.0327H6.64268V84.9999H17.1397V88.7704H2.54226V63.4425H17.1397V67.213H6.64268ZM35.1816 88.7704H30.6711L27.3908 83.3605L24.1925 88.7704H19.682L25.1766 80.2458L19.764 71.8851H24.3565L27.3908 77.213L30.5071 71.8851H35.0996L29.687 80.2458L35.1816 88.7704ZM41.4962 74.1802C42.5623 72.4589 44.7766 71.4753 46.6628 71.4753C51.7473 71.4753 55.2736 75.5737 55.2736 80.3278C55.2736 85.0819 51.7473 89.1802 46.6628 89.1802C44.6946 89.1802 42.4803 88.1966 41.4962 86.4753V97.213H37.5598V71.8851H41.4962V74.1802ZM41.4962 80.3278C41.4962 83.1966 43.4644 85.6556 46.4988 85.6556C49.4511 85.6556 51.4193 83.1966 51.4193 80.3278C51.4193 77.4589 49.4511 74.9999 46.4988 74.9999C43.4644 74.9999 41.4962 77.4589 41.4962 80.3278ZM61.0142 81.5573C61.1782 84.0163 62.2443 85.9015 65.5247 85.9015C67.7389 85.9015 68.641 84.9179 69.133 83.6884H73.0695C72.5774 86.5573 69.7891 89.1802 65.5247 89.1802C59.8661 89.1802 57.0778 85.2458 57.0778 80.3278C57.0778 75.2458 60.1121 71.4753 65.3607 71.4753C69.7071 71.4753 73.1515 74.754 73.1515 79.0163C73.1515 79.5901 73.1515 80.4097 72.9874 81.4753H61.0142V81.5573ZM61.0142 78.6065H69.3791C69.3791 76.0655 67.6569 74.4261 65.2787 74.4261C62.9004 74.4261 61.0142 75.8196 61.0142 78.6065ZM86.9289 75.5737C86.3548 75.4097 86.0268 75.4097 85.3707 75.4097C82.0084 75.4097 80.2042 77.295 80.2042 81.4753V88.6884H76.2678V71.8851H80.2042V74.5901C80.9422 73.0327 83.1565 71.6392 85.3707 71.6392C85.9448 71.6392 86.5188 71.7212 86.9289 71.8851V75.5737ZM91.7674 62.8687C93.4075 62.8687 94.7197 64.1802 94.7197 65.8196C94.7197 67.3769 93.4075 68.6884 91.7674 68.6884C90.2092 68.6884 88.8971 67.3769 88.8971 65.8196C88.8971 64.1802 90.2092 62.8687 91.7674 62.8687ZM89.8812 71.8851H93.8176V88.6884H89.8812V71.8851ZM118.666 88.7704V79.3442C118.666 76.6392 117.764 74.9999 115.55 74.9999C113.582 74.9999 112.023 76.2294 112.023 80.2458V88.7704H108.087V79.2622C108.087 76.5573 107.185 74.9179 105.053 74.9179C103.085 74.9179 101.444 76.1474 101.444 80.1638V88.6884H97.5079V71.8851H101.444V74.2622C102.182 72.7048 103.905 71.4753 106.119 71.4753C109.153 71.4753 110.711 72.7868 111.449 74.5081C112.269 72.7868 114.238 71.4753 116.616 71.4753C121.7 71.4753 122.685 74.9179 122.685 78.1147V88.7704H118.666ZM128.999 81.5573C129.163 84.0163 130.229 85.9015 133.51 85.9015C135.724 85.9015 136.626 84.9179 137.118 83.6884H141.054C140.562 86.5573 137.774 89.1802 133.51 89.1802C127.851 89.1802 125.063 85.2458 125.063 80.3278C125.063 75.2458 128.097 71.4753 133.346 71.4753C137.692 71.4753 141.136 74.754 141.136 79.0163C141.136 79.5901 141.136 80.4097 140.972 81.4753H128.999V81.5573ZM128.999 78.6065H137.364C137.364 76.0655 135.642 74.4261 133.264 74.4261C130.885 74.4261 128.999 75.8196 128.999 78.6065ZM144.253 71.8851H148.189V74.2622C149.255 72.4589 151.223 71.4753 153.684 71.4753C156.062 71.4753 157.784 72.3769 158.768 73.7704C159.588 74.9999 159.834 76.4753 159.834 78.7704V88.7704H155.816V79.9999C155.816 77.1311 154.996 74.9179 152.208 74.9179C149.501 74.9179 148.189 77.1311 148.189 79.9999V88.6884H144.253V71.8851ZM172.956 88.7704C172.382 88.8524 171.151 89.0163 170.003 89.0163C168.117 89.0163 164.591 88.7704 164.591 83.1147V75.3278H161.721V72.0491H164.591V66.9671H168.527V72.0491H172.382V75.3278H168.527V82.213C168.527 85.1638 169.429 85.4917 170.987 85.4917C171.562 85.4917 172.546 85.4097 172.956 85.3278V88.7704ZM3.19832 2.62285H0.0820134V0.819563H8.44686V2.62285H5.24853V13.4425H3.19832V2.62285ZM9.841 0.819563H11.8092V6.2294C12.3013 5.32776 13.2854 4.83596 14.5155 4.83596C15.7456 4.83596 16.5657 5.2458 17.0577 5.9835C17.4678 6.63924 17.6318 7.29498 17.6318 8.44252V13.4425H15.6636V9.09826C15.6636 7.62285 15.2536 6.55727 13.8594 6.55727C12.4653 6.55727 11.8092 7.62285 11.8092 9.09826V13.4425H9.841V0.819563ZM20.9941 0.491699C21.8142 0.491699 22.4703 1.14743 22.4703 1.96711C22.4703 2.78678 21.8142 3.44252 20.9941 3.44252C20.1741 3.44252 19.518 2.78678 19.518 1.96711C19.518 1.14743 20.1741 0.491699 20.9941 0.491699ZM20.01 4.9999H21.9782V13.4425H20.01V4.9999ZM30.5891 11.0655C30.5891 12.7868 29.113 13.6065 27.2268 13.6065C25.4226 13.6065 23.7824 12.5409 23.7824 10.5737H25.6686C25.6686 11.6392 26.3247 12.0491 27.3088 12.0491C28.0469 12.0491 28.7029 11.8032 28.7029 11.0655C28.7029 10.2458 27.8828 10.2458 26.0787 9.50809C24.9305 9.01629 24.1105 8.60645 24.1105 7.13104C24.1105 5.57367 25.5866 4.67203 27.2268 4.67203C29.031 4.67203 30.4251 5.90153 30.4251 7.54088H28.5389C28.5389 6.72121 28.1289 6.2294 27.1448 6.2294C26.4887 6.2294 25.9146 6.55727 25.9146 7.13104C25.9146 7.86875 26.6527 7.95071 28.2109 8.52448C29.523 9.09825 30.5891 9.50809 30.5891 11.0655ZM37.9699 0.491699C38.79 0.491699 39.446 1.14743 39.446 1.96711C39.446 2.78678 38.79 3.44252 37.9699 3.44252C37.1498 3.44252 36.4937 2.78678 36.4937 1.96711C36.5757 1.14743 37.2318 0.491699 37.9699 0.491699ZM36.9858 4.9999H38.954V13.4425H36.9858V4.9999ZM47.6469 11.0655C47.6469 12.7868 46.1707 13.6065 44.2845 13.6065C42.4803 13.6065 40.8402 12.5409 40.8402 10.5737H42.7264C42.7264 11.6392 43.3824 12.0491 44.3665 12.0491C45.1046 12.0491 45.7607 11.8032 45.7607 11.0655C45.7607 10.2458 44.9406 10.2458 43.1364 9.50809C41.9883 9.01629 41.1682 8.60645 41.1682 7.13104C41.1682 5.57367 42.6444 4.67203 44.2845 4.67203C46.0887 4.67203 47.4828 5.90153 47.4828 7.54088H45.5967C45.5967 6.72121 45.1866 6.2294 44.2025 6.2294C43.5464 6.2294 42.9724 6.55727 42.9724 7.13104C42.9724 7.86875 43.7105 7.95071 45.2686 8.52448C46.4988 9.09825 47.6469 9.50809 47.6469 11.0655ZM62.3264 4.9999V13.4425H60.3582V12.295C59.8661 13.1146 58.718 13.6884 57.7339 13.6884C55.1916 13.6884 53.3875 11.6392 53.3875 9.26219C53.3875 6.88514 55.1096 4.83596 57.7339 4.83596C58.718 4.83596 59.7841 5.32776 60.3582 6.2294V4.9999H62.3264ZM60.3582 9.18022C60.3582 7.70481 59.3741 6.4753 57.8979 6.4753C56.4218 6.4753 55.4377 7.70481 55.4377 9.18022C55.4377 10.6556 56.4218 11.8851 57.8979 11.8851C59.3741 11.8851 60.3582 10.6556 60.3582 9.18022ZM64.8686 4.9999H66.8368V6.14743C67.3289 5.24579 68.313 4.75399 69.5431 4.75399C70.7732 4.75399 71.5933 5.16383 72.0854 5.90153C72.4954 6.55727 72.6594 7.21301 72.6594 8.36055V13.3605H70.6912V9.01628C70.6912 7.54087 70.2812 6.4753 68.887 6.4753C67.4929 6.4753 66.8368 7.54087 66.8368 9.01628V13.3605H64.8686V4.9999Z" fill="#9AA0A6"/>
    </svg>`}
        <div id="footer-menu">
          <a
            class="footer-menuitem"
            href=${"https://policies.google.com?hl="+Object(k.a)()}
            target="_blank"
            >${Object(E.b)("home_footer_privacy")}</a
          >
        </div>
        <div class="brand-wrapper">
          <tm-language-select></tm-language-select>
          ${o.f`
    <svg id="google-logo" width="156" height="52" viewBox="0 0 156 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title>Google</title>
        <path d="M20.3394 39.768C16.7874 39.768 13.4754 38.888 10.4034 37.128C7.33137 35.336 4.88337 32.936 3.05937 29.928C1.26737 26.92 0.371369 23.64 0.371369 20.088C0.371369 16.536 1.26737 13.256 3.05937 10.248C4.88337 7.24 7.33137 4.856 10.4034 3.096C13.4754 1.304 16.7874 0.407999 20.3394 0.407999C25.5554 0.407999 30.0514 2.216 33.8274 5.832L30.0354 9.624C27.3154 7.064 24.0834 5.784 20.3394 5.784C17.7474 5.784 15.3634 6.424 13.1874 7.704C11.0434 8.984 9.34737 10.728 8.09937 12.936C6.85137 15.112 6.22737 17.496 6.22737 20.088C6.22737 22.68 6.85137 25.08 8.09937 27.288C9.34737 29.464 11.0434 31.192 13.1874 32.472C15.3634 33.752 17.7474 34.392 20.3394 34.392C22.6434 34.392 24.5794 34.024 26.1474 33.288C27.7474 32.552 29.1234 31.608 30.2754 30.456C31.8434 28.888 32.8194 26.632 33.2034 23.688H20.3394V18.312H38.4354C38.6274 19.272 38.7234 20.392 38.7234 21.672C38.7234 23.944 38.3554 26.2 37.6194 28.44C36.8834 30.68 35.6994 32.616 34.0674 34.248C30.5474 37.928 25.9714 39.768 20.3394 39.768ZM124.259 1.752H129.827V39H124.259V1.752ZM53.3634 39.768C51.0594 39.768 48.9314 39.224 46.9794 38.136C45.0274 37.016 43.4754 35.496 42.3234 33.576C41.2034 31.624 40.6434 29.464 40.6434 27.096C40.6434 24.696 41.2034 22.536 42.3234 20.616C43.4754 18.664 45.0274 17.144 46.9794 16.056C48.9314 14.968 51.0594 14.424 53.3634 14.424C55.6674 14.424 57.7954 14.968 59.7474 16.056C61.6994 17.144 63.2354 18.664 64.3554 20.616C65.5074 22.536 66.0834 24.696 66.0834 27.096C66.0834 29.464 65.5074 31.624 64.3554 33.576C63.2354 35.496 61.6994 37.016 59.7474 38.136C57.7954 39.224 55.6674 39.768 53.3634 39.768ZM81.1074 39.768C78.8034 39.768 76.6754 39.224 74.7234 38.136C72.7714 37.016 71.2194 35.496 70.0674 33.576C68.9474 31.624 68.3874 29.464 68.3874 27.096C68.3874 24.696 68.9474 22.536 70.0674 20.616C71.2194 18.664 72.7714 17.144 74.7234 16.056C76.6754 14.968 78.8034 14.424 81.1074 14.424C83.4114 14.424 85.5394 14.968 87.4914 16.056C89.4434 17.144 90.9794 18.664 92.0994 20.616C93.2514 22.536 93.8274 24.696 93.8274 27.096C93.8274 29.464 93.2514 31.624 92.0994 33.576C90.9794 35.496 89.4434 37.016 87.4914 38.136C85.5394 39.224 83.4114 39.768 81.1074 39.768ZM108.371 51.144C105.555 51.144 103.187 50.392 101.267 48.888C99.3474 47.384 97.9714 45.64 97.1394 43.656L101.987 41.64C102.499 42.856 103.299 43.912 104.387 44.808C105.475 45.704 106.803 46.152 108.371 46.152C110.483 46.152 112.131 45.512 113.315 44.232C114.531 42.952 115.139 41.112 115.139 38.712V36.888H114.947C114.275 37.72 113.347 38.408 112.163 38.952C111.011 39.496 109.715 39.768 108.275 39.768C106.163 39.768 104.179 39.208 102.323 38.088C100.467 36.968 98.9634 35.448 97.8114 33.528C96.6914 31.576 96.1314 29.448 96.1314 27.144C96.1314 24.808 96.6914 22.68 97.8114 20.76C98.9634 18.808 100.467 17.272 102.323 16.152C104.211 15 106.195 14.424 108.275 14.424C109.715 14.424 111.011 14.696 112.163 15.24C113.347 15.784 114.275 16.456 114.947 17.256H115.139V15.192H120.419V37.944C120.419 42.36 119.283 45.656 117.011 47.832C114.771 50.04 111.891 51.144 108.371 51.144ZM145.091 39.768C142.723 39.768 140.579 39.208 138.659 38.088C136.739 36.968 135.235 35.448 134.147 33.528C133.059 31.576 132.515 29.432 132.515 27.096C132.515 24.632 133.043 22.44 134.099 20.52C135.187 18.6 136.643 17.112 138.467 16.056C140.291 14.968 142.291 14.424 144.467 14.424C147.379 14.424 149.731 15.272 151.523 16.968C153.315 18.664 154.579 20.504 155.315 22.488L155.891 23.928L138.947 30.936C140.259 33.496 142.307 34.776 145.091 34.776C147.651 34.776 149.731 33.608 151.331 31.272L155.651 34.152C154.691 35.592 153.331 36.888 151.571 38.04C149.811 39.192 147.651 39.768 145.091 39.768ZM149.363 22.008C149.043 21.208 148.451 20.568 147.587 20.088C146.723 19.576 145.747 19.32 144.659 19.32C143.667 19.32 142.643 19.608 141.587 20.184C140.531 20.76 139.667 21.608 138.995 22.728C138.323 23.848 138.003 25.176 138.035 26.712L149.363 22.008ZM53.3634 34.776C54.6434 34.776 55.8274 34.456 56.9154 33.816C58.0034 33.144 58.8674 32.232 59.5074 31.08C60.1794 29.896 60.5154 28.568 60.5154 27.096C60.5154 25.624 60.1794 24.312 59.5074 23.16C58.8674 21.976 58.0034 21.064 56.9154 20.424C55.8274 19.752 54.6434 19.416 53.3634 19.416C52.0834 19.416 50.8994 19.752 49.8114 20.424C48.7234 21.064 47.8434 21.976 47.1714 23.16C46.5314 24.312 46.2114 25.624 46.2114 27.096C46.2114 28.568 46.5314 29.896 47.1714 31.08C47.8434 32.232 48.7234 33.144 49.8114 33.816C50.8994 34.456 52.0834 34.776 53.3634 34.776ZM81.1074 34.776C82.3874 34.776 83.5714 34.456 84.6594 33.816C85.7474 33.144 86.6114 32.232 87.2514 31.08C87.9234 29.896 88.2594 28.568 88.2594 27.096C88.2594 25.624 87.9234 24.312 87.2514 23.16C86.6114 21.976 85.7474 21.064 84.6594 20.424C83.5714 19.752 82.3874 19.416 81.1074 19.416C79.8274 19.416 78.6434 19.752 77.5554 20.424C76.4674 21.064 75.5874 21.976 74.9154 23.16C74.2754 24.312 73.9554 25.624 73.9554 27.096C73.9554 28.568 74.2754 29.896 74.9154 31.08C75.5874 32.232 76.4674 33.144 77.5554 33.816C78.6434 34.456 79.8274 34.776 81.1074 34.776ZM108.755 34.776C110.003 34.776 111.139 34.456 112.163 33.816C113.219 33.144 114.035 32.232 114.611 31.08C115.219 29.896 115.523 28.584 115.523 27.144C115.523 25.672 115.219 24.36 114.611 23.208C114.035 22.024 113.219 21.096 112.163 20.424C111.139 19.752 110.003 19.416 108.755 19.416C107.475 19.416 106.291 19.752 105.203 20.424C104.147 21.096 103.299 22.024 102.659 23.208C102.019 24.392 101.699 25.704 101.699 27.144C101.699 28.584 102.019 29.896 102.659 31.08C103.299 32.232 104.147 33.144 105.203 33.816C106.291 34.456 107.475 34.776 108.755 34.776Z" fill="#9AA0A6"/>
    </svg>`}
        </div>
      </footer>
    `,document.body),t()}class M extends o.a{constructor(){super(),this.page=1,this.perPage=3,this.alignSelector=null,this.loadImage=!1}firstUpdated(){const e=this.shadowRoot.querySelector("slot").assignedNodes();this.slides=e.filter(e=>{if(e.classList)return e.classList.contains("carousel-slide")}),this.size(),window.addEventListener("resize",e=>{this.size()})}size(){window.innerWidth>900?this.perPage=3:this.perPage=1,this.updateSlides()}updateSlides(){this.maxPages=Math.ceil(this.slides.length/this.perPage);let e=0;this.slides.forEach((t,A)=>{t.style.display="block",t.style.opacity="0",t.style.transform="translateX(-10px)",t.style.transition="transform 0.25s ease-out, opacity 0.55s ease-in-out",t.setAttribute("aria-hidden",!1),A>=this.page*this.perPage||A<this.page*this.perPage-this.perPage?(t.style.display="none",t.setAttribute("aria-hidden",!0)):(e++,setTimeout(()=>{t.style.opacity="1",t.style.transform="translateX(0)"},100*e))}),this.alignSelector&&this.updateButtonPosition()}loadImageSrc(e){return new Promise((t,A)=>{const i=new Image;i.onload=()=>{t(!0)},i.onerror=A,i.src=e})}updateButtonPosition(){return S(this,void 0,void 0,(function*(){const e=this.querySelector(this.alignSelector);if(e&&this.loadImage){const t=e.querySelector("img");yield this.loadImageSrc(t.src)}const t=e.getBoundingClientRect().height/2;this.shadowRoot.querySelectorAll("button").forEach(e=>{e.style.top=t+"px"})}))}next(){this.page++,this.page>this.maxPages&&(this.page=1),this.updateSlides()}previous(){this.page--,0===this.page&&(this.page=this.maxPages),this.updateSlides()}render(){return r.f`
      <style>
        :host {
          display: flex;
          width: 100%;
          justify-content: space-between;
          align-items: end;
          flex-direction: row;
          position: relative;
        }
        .previous {
          left: -42px;
          z-index: 1;
        }
        .next {
          right: -45px;
          z-index: 1;
        }

        .container {
          display: flex;
          width: 100%;
          justify-content: space-around;
        }
        button {
          background: transparent;
          border: none;
          outline: 0;
          position: absolute;
          cursor: pointer;
          top: 100px;
          z-index: 1;
          transform: translateY(-50%);
        }

        @media only screen and (max-width: 900px) {
          button {
            top: 110px;
          }
        }

        button::after {
          content: '';
          position: absolute;
          width: 40px;
          height: 40px;
          border: 1px solid transparent;
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          margin-top: -2px;
          margin-left: -2px;
          opacity: 0;
          z-index: -1;
        }
        button:hover::after {
          background: #d2e3fc;
          border: 1px solid transparent;
        }
        button:focus::after {
          opacity: 1;
          background: transparent;
          border: 1px solid var(--focus-color);
          border-radius: 50%;
        }

        @media only screen and (max-width: 900px) {
          button:focus::after,
          button:focus::after {
            border: none;
          }
        }
        @keyframes appear {
          from {
            opacity: 0;
          }

          to {
            opacity: 100%;
          }
        }
      </style>
      <button
        class="previous"
        aria-label="previous"
        @click=${()=>this.previous()}
      >
        ${p("right","#1967D2")}
      </button>

      <div class="container">
        <slot></slot>
      </div>
      <button class="next" aria-label="next" @click=${()=>this.next()}>
        ${p("left","#1967D2")}
      </button>
    `}}x([Object(o.e)({type:String})],M.prototype,"alignSelector",void 0),x([Object(o.e)({type:Boolean})],M.prototype,"loadImage",void 0),customElements.define("carousel-element",M)},22:function(e,t,A){"use strict";A.d(t,"b",(function(){return n})),A.d(t,"a",(function(){return o}));var i=A(7);function n(e){let t=o.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},o.set(e.type,t));let A=t.stringsArray.get(e.strings);if(void 0!==A)return A;const n=e.strings.join(i.f);return A=t.keyString.get(n),void 0===A&&(A=new i.a(e,e.getTemplateElement()),t.keyString.set(n,A)),t.stringsArray.set(e.strings,A),A}const o=new Map},23:function(e,t,A){"use strict";A.d(t,"a",(function(){return n})),A.d(t,"b",(function(){return o}));const i=new WeakMap,n=e=>(...t)=>{const A=e(...t);return i.set(A,!0),A},o=e=>"function"==typeof e&&i.has(e)},24:function(e,t,A){"use strict";A.d(t,"a",(function(){return r})),A.d(t,"b",(function(){return s}));var i=A(14),n=A(10),o=A(22);const r=new WeakMap,s=(e,t,A)=>{let s=r.get(t);void 0===s&&(Object(i.b)(t,t.firstChild),r.set(t,s=new n.e(Object.assign({templateFactory:o.b},A))),s.appendInto(t)),s.setValue(e),s.commit()}},27:function(e,t,A){"use strict";A.d(t,"b",(function(){return s})),A.d(t,"a",(function(){return a}));var i=A(14),n=A(7);const o=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),r=` ${n.f} `;class s{constructor(e,t,A,i){this.strings=e,this.values=t,this.type=A,this.processor=i}getHTML(){const e=this.strings.length-1;let t="",A=!1;for(let i=0;i<e;i++){const e=this.strings[i],o=e.lastIndexOf("\x3c!--");A=(o>-1||A)&&-1===e.indexOf("--\x3e",o+1);const s=n.e.exec(e);t+=null===s?e+(A?r:n.g):e.substr(0,s.index)+s[1]+s[2]+n.b+s[3]+n.f}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==o&&(t=o.createHTML(t)),e.innerHTML=t,e}}class a extends s{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,A=t.firstChild;return t.removeChild(A),Object(i.c)(t,A.firstChild),e}}},31:function(e,t,A){"use strict";A.d(t,"a",(function(){return o}));var i=A(14),n=A(7);class o{constructor(e,t,A){this.__parts=[],this.template=e,this.processor=t,this.options=A}update(e){let t=0;for(const A of this.__parts)void 0!==A&&A.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=i.a?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],A=this.template.parts,o=document.createTreeWalker(e,133,null,!1);let r,s=0,a=0,l=o.nextNode();for(;s<A.length;)if(r=A[s],Object(n.d)(r)){for(;a<r.index;)a++,"TEMPLATE"===l.nodeName&&(t.push(l),o.currentNode=l.content),null===(l=o.nextNode())&&(o.currentNode=t.pop(),l=o.nextNode());if("node"===r.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,r.name,r.strings,this.options));s++}else this.__parts.push(void 0),s++;return i.a&&(document.adoptNode(e),customElements.upgrade(e)),e}}},4:function(e,t,A){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t,A){var n=A.value;if("function"!=typeof n)throw new TypeError("@boundMethod decorator can only be applied to methods not: ".concat(i(n)));var o=!1;return{configurable:!0,get:function(){if(o||this===e.prototype||this.hasOwnProperty(t)||"function"!=typeof n)return n;var A=n.bind(this);return o=!0,Object.defineProperty(this,t,{configurable:!0,get:function(){return A},set:function(e){n=e,delete this[t]}}),o=!1,A},set:function(e){n=e}}}function o(e){var t;return"undefined"!=typeof Reflect&&"function"==typeof Reflect.ownKeys?t=Reflect.ownKeys(e.prototype):(t=Object.getOwnPropertyNames(e.prototype),"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(e.prototype)))),t.forEach((function(t){if("constructor"!==t){var A=Object.getOwnPropertyDescriptor(e.prototype,t);"function"==typeof A.value&&Object.defineProperty(e.prototype,t,n(e,t,A))}})),e}function r(){return 1===arguments.length?o.apply(void 0,arguments):n.apply(void 0,arguments)}A.r(t),A.d(t,"boundMethod",(function(){return n})),A.d(t,"boundClass",(function(){return o})),A.d(t,"default",(function(){return r}))},40:function(e,t,A){"use strict";A.d(t,"b",(function(){return o})),A.d(t,"a",(function(){return r}));var i=A(8);const n=A(97),o=Object.entries(n).map(([e,t])=>({value:e,name:t.name})),r=()=>{const e=window.navigator.language.slice(0,2),t=i.a.getSetting("lang","selected",null);return t||(o.filter(t=>t.value===e).length>0?e:"en")}},43:function(e,t){var A,i,n=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function s(e){if(A===setTimeout)return setTimeout(e,0);if((A===o||!A)&&setTimeout)return A=setTimeout,setTimeout(e,0);try{return A(e,0)}catch(t){try{return A.call(null,e,0)}catch(t){return A.call(this,e,0)}}}!function(){try{A="function"==typeof setTimeout?setTimeout:o}catch(e){A=o}try{i="function"==typeof clearTimeout?clearTimeout:r}catch(e){i=r}}();var a,l=[],c=!1,g=-1;function d(){c&&a&&(c=!1,a.length?l=a.concat(l):g=-1,l.length&&C())}function C(){if(!c){var e=s(d);c=!0;for(var t=l.length;t;){for(a=l,l=[];++g<t;)a&&a[g].run();g=-1,t=l.length}a=null,c=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===r||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var A=1;A<arguments.length;A++)t[A-1]=arguments[A];l.push(new p(e,t)),1!==l.length||c||s(C)},p.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=h,n.addListener=h,n.once=h,n.off=h,n.removeListener=h,n.removeAllListeners=h,n.emit=h,n.prependListener=h,n.prependOnceListener=h,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},5:function(e,t,A){"use strict";A.d(t,"e",(function(){return r.a})),A.d(t,"g",(function(){return s.b})),A.d(t,"i",(function(){return s.c})),A.d(t,"a",(function(){return i.b})),A.d(t,"b",(function(){return i.e})),A.d(t,"c",(function(){return i.g})),A.d(t,"h",(function(){return a.b})),A.d(t,"d",(function(){return l.c})),A.d(t,"f",(function(){return c})),A.d(t,"j",(function(){return g}));var i=A(10);const n=new class{handleAttributeExpressions(e,t,A,n){const o=t[0];if("."===o){return new i.f(e,t.slice(1),A).parts}if("@"===o)return[new i.d(e,t.slice(1),n.eventContext)];if("?"===o)return[new i.c(e,t.slice(1),A)];return new i.a(e,t,A).parts}handleTextExpression(e){return new i.e(e)}};var o=A(27),r=A(23),s=A(14),a=(A(11),A(24)),l=(A(22),A(31),A(7));"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const c=(e,...t)=>new o.b(e,t,"html",n),g=(e,...t)=>new o.a(e,t,"svg",n)},50:function(e,t,A){"use strict";function i(e,t){window.dataLayer.push(Object.assign({event:e},t))}function n(e){return function(t,A={}){i(t,Object.assign({event_category:e},A))}}A.d(t,"a",(function(){return i})),A.d(t,"b",(function(){return n}))},56:function(e,t,A){"use strict";var i,n="object"==typeof Reflect?Reflect:null,o=n&&"function"==typeof n.apply?n.apply:function(e,t,A){return Function.prototype.apply.call(e,t,A)};i=n&&"function"==typeof n.ownKeys?n.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var r=Number.isNaN||function(e){return e!=e};function s(){s.init.call(this)}e.exports=s,e.exports.once=function(e,t){return new Promise((function(A,i){function n(A){e.removeListener(t,o),i(A)}function o(){"function"==typeof e.removeListener&&e.removeListener("error",n),A([].slice.call(arguments))}f(e,t,o,{once:!0}),"error"!==t&&function(e,t,A){"function"==typeof e.on&&f(e,"error",t,A)}(e,n,{once:!0})}))},s.EventEmitter=s,s.prototype._events=void 0,s.prototype._eventsCount=0,s.prototype._maxListeners=void 0;var a=10;function l(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function c(e){return void 0===e._maxListeners?s.defaultMaxListeners:e._maxListeners}function g(e,t,A,i){var n,o,r,s;if(l(A),void 0===(o=e._events)?(o=e._events=Object.create(null),e._eventsCount=0):(void 0!==o.newListener&&(e.emit("newListener",t,A.listener?A.listener:A),o=e._events),r=o[t]),void 0===r)r=o[t]=A,++e._eventsCount;else if("function"==typeof r?r=o[t]=i?[A,r]:[r,A]:i?r.unshift(A):r.push(A),(n=c(e))>0&&r.length>n&&!r.warned){r.warned=!0;var a=new Error("Possible EventEmitter memory leak detected. "+r.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");a.name="MaxListenersExceededWarning",a.emitter=e,a.type=t,a.count=r.length,s=a,console&&console.warn&&console.warn(s)}return e}function d(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function C(e,t,A){var i={fired:!1,wrapFn:void 0,target:e,type:t,listener:A},n=d.bind(i);return n.listener=A,i.wrapFn=n,n}function p(e,t,A){var i=e._events;if(void 0===i)return[];var n=i[t];return void 0===n?[]:"function"==typeof n?A?[n.listener||n]:[n]:A?function(e){for(var t=new Array(e.length),A=0;A<t.length;++A)t[A]=e[A].listener||e[A];return t}(n):u(n,n.length)}function h(e){var t=this._events;if(void 0!==t){var A=t[e];if("function"==typeof A)return 1;if(void 0!==A)return A.length}return 0}function u(e,t){for(var A=new Array(t),i=0;i<t;++i)A[i]=e[i];return A}function f(e,t,A,i){if("function"==typeof e.on)i.once?e.once(t,A):e.on(t,A);else{if("function"!=typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function n(o){i.once&&e.removeEventListener(t,n),A(o)}))}}Object.defineProperty(s,"defaultMaxListeners",{enumerable:!0,get:function(){return a},set:function(e){if("number"!=typeof e||e<0||r(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");a=e}}),s.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},s.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||r(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},s.prototype.getMaxListeners=function(){return c(this)},s.prototype.emit=function(e){for(var t=[],A=1;A<arguments.length;A++)t.push(arguments[A]);var i="error"===e,n=this._events;if(void 0!==n)i=i&&void 0===n.error;else if(!i)return!1;if(i){var r;if(t.length>0&&(r=t[0]),r instanceof Error)throw r;var s=new Error("Unhandled error."+(r?" ("+r.message+")":""));throw s.context=r,s}var a=n[e];if(void 0===a)return!1;if("function"==typeof a)o(a,this,t);else{var l=a.length,c=u(a,l);for(A=0;A<l;++A)o(c[A],this,t)}return!0},s.prototype.addListener=function(e,t){return g(this,e,t,!1)},s.prototype.on=s.prototype.addListener,s.prototype.prependListener=function(e,t){return g(this,e,t,!0)},s.prototype.once=function(e,t){return l(t),this.on(e,C(this,e,t)),this},s.prototype.prependOnceListener=function(e,t){return l(t),this.prependListener(e,C(this,e,t)),this},s.prototype.removeListener=function(e,t){var A,i,n,o,r;if(l(t),void 0===(i=this._events))return this;if(void 0===(A=i[e]))return this;if(A===t||A.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete i[e],i.removeListener&&this.emit("removeListener",e,A.listener||t));else if("function"!=typeof A){for(n=-1,o=A.length-1;o>=0;o--)if(A[o]===t||A[o].listener===t){r=A[o].listener,n=o;break}if(n<0)return this;0===n?A.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(A,n),1===A.length&&(i[e]=A[0]),void 0!==i.removeListener&&this.emit("removeListener",e,r||t)}return this},s.prototype.off=s.prototype.removeListener,s.prototype.removeAllListeners=function(e){var t,A,i;if(void 0===(A=this._events))return this;if(void 0===A.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==A[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete A[e]),this;if(0===arguments.length){var n,o=Object.keys(A);for(i=0;i<o.length;++i)"removeListener"!==(n=o[i])&&this.removeAllListeners(n);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=A[e]))this.removeListener(e,t);else if(void 0!==t)for(i=t.length-1;i>=0;i--)this.removeListener(e,t[i]);return this},s.prototype.listeners=function(e){return p(this,e,!0)},s.prototype.rawListeners=function(e){return p(this,e,!1)},s.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):h.call(e,t)},s.prototype.listenerCount=h,s.prototype.eventNames=function(){return this._eventsCount>0?i(this._events):[]}},6:function(e,t,A){"use strict";A.d(t,"a",(function(){return r}));var i=A(10),n=A(5);const o=new WeakMap,r=Object(n.e)(e=>t=>{if(!(t instanceof n.b))throw new Error("unsafeHTML can only be used in text bindings");const A=o.get(t);if(void 0!==A&&Object(i.h)(e)&&e===A.value&&t.value===A.fragment)return;const r=document.createElement("template");r.innerHTML=e;const s=document.importNode(r.content,!0);t.setValue(s),o.set(t,{value:e,fragment:s})})},7:function(e,t,A){"use strict";A.d(t,"f",(function(){return i})),A.d(t,"g",(function(){return n})),A.d(t,"b",(function(){return r})),A.d(t,"a",(function(){return s})),A.d(t,"d",(function(){return l})),A.d(t,"c",(function(){return c})),A.d(t,"e",(function(){return g}));const i=`{{lit-${String(Math.random()).slice(2)}}}`,n=`\x3c!--${i}--\x3e`,o=new RegExp(`${i}|${n}`),r="$lit$";class s{constructor(e,t){this.parts=[],this.element=t;const A=[],n=[],s=document.createTreeWalker(t.content,133,null,!1);let l=0,d=-1,C=0;const{strings:p,values:{length:h}}=e;for(;C<h;){const e=s.nextNode();if(null!==e){if(d++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:A}=t;let i=0;for(let e=0;e<A;e++)a(t[e].name,r)&&i++;for(;i-- >0;){const t=p[C],A=g.exec(t)[2],i=A.toLowerCase()+r,n=e.getAttribute(i);e.removeAttribute(i);const s=n.split(o);this.parts.push({type:"attribute",index:d,name:A,strings:s}),C+=s.length-1}}"TEMPLATE"===e.tagName&&(n.push(e),s.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(i)>=0){const i=e.parentNode,n=t.split(o),s=n.length-1;for(let t=0;t<s;t++){let A,o=n[t];if(""===o)A=c();else{const e=g.exec(o);null!==e&&a(e[2],r)&&(o=o.slice(0,e.index)+e[1]+e[2].slice(0,-r.length)+e[3]),A=document.createTextNode(o)}i.insertBefore(A,e),this.parts.push({type:"node",index:++d})}""===n[s]?(i.insertBefore(c(),e),A.push(e)):e.data=n[s],C+=s}}else if(8===e.nodeType)if(e.data===i){const t=e.parentNode;null!==e.previousSibling&&d!==l||(d++,t.insertBefore(c(),e)),l=d,this.parts.push({type:"node",index:d}),null===e.nextSibling?e.data="":(A.push(e),d--),C++}else{let t=-1;for(;-1!==(t=e.data.indexOf(i,t+1));)this.parts.push({type:"node",index:-1}),C++}}else s.currentNode=n.pop()}for(const e of A)e.parentNode.removeChild(e)}}const a=(e,t)=>{const A=e.length-t.length;return A>=0&&e.slice(A)===t},l=e=>-1!==e.index,c=()=>document.createComment(""),g=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/},8:function(e,t,A){"use strict";const i=new class{constructor(){this.__storageKey="tm2Settings";null===this.__getSettings()&&this.__saveSettings({})}__getSettings(){return JSON.parse(localStorage.getItem(this.__storageKey))}__getSettingsNamespace(e){const t=this.__getSettings();return t.hasOwnProperty(e)||(t[e]={}),t[e]}__saveSettings(e){localStorage.setItem(this.__storageKey,JSON.stringify(e))}getSetting(e,t,A=null){const i=this.__getSettingsNamespace(e);return i.hasOwnProperty(t)?i[t]:A}setSetting(e,t){const A=this.__getSettings();A[e]=t,this.__saveSettings(A)}getWebcamSetting(e){return this.getSetting("webcam",e)}getMicrophoneSetting(e){return this.getSetting("microphone",e)}getOnboardSetting(e){return this.getSetting("onboard",e)}getWarningsSetting(e){return!1!==this.getSetting("warnings",e)}setWebcamSetting(e){this.setSetting("webcam",e)}setMicrophoneSetting(e){this.setSetting("microphone",e)}setOnboardSetting(e,t){const A=this.__getSettingsNamespace("onboard");A[e]=t,this.setSetting("onboard",A)}setWarningsSetting(e,t){const A=this.__getSettingsNamespace("warnings");A[e]=t,this.setSetting("warnings",A)}};t.a=i},9:function(e,t,A){"use strict";const i={ENV:"release-2-4-19",CONVERT_URL:"/convert",PUBLISH_URL:"/publish",SNIPPET_URL:"https://teachable-machine-snippets.storage.googleapis.com/github",ENABLE_NETWORK_INPUT:function(e){const t=function(e,t){return new URL(location.href).searchParams.get(e)||t}(e,"false").toLowerCase();return"true"===t||"1"===t}("network"),ENABLE_AUDIO_EXPORT:function(e,t){const A=new URL(location.href),i=A.searchParams.get(e);let n=!1;return"true"!==i&&"1"!==i||(n=!0),A.pathname.endsWith(t)&&n||!1}("audio_export","audio"),DRIVE_API_KEY:"AIzaSyCT54NfxnNEpgQc8QCoPjzdWjmKNl73hd8",DRIVE_CLIENT_ID:"508246411369-cu3us2udegb66vchbt73j1m99sn8dsdd",CLOUD_APP_ID:"508246411369",VERSION:"2.4.19"};t.a=i},97:function(e){e.exports=JSON.parse('{"de":{"name":"Deutsch","en_name":"German"},"en":{"name":"English","en_name":"English"},"es":{"name":"español","en_name":"Spanish"},"es-419":{"name":"español latinoamericano","en_name":"Latin American Spanish"},"fr":{"name":"français","en_name":"French"},"it":{"name":"italiano","en_name":"Italian"},"ja":{"name":"日本語","en_name":"Japanese"},"ko":{"name":"한국어","en_name":"Korean"},"nl":{"name":"Nederlands","en_name":"Dutch"},"pl":{"name":"polski","en_name":"Polish"},"pt-PT":{"name":"português europeu","en_name":"European Portuguese"},"ru":{"name":"русский","en_name":"Russian"},"th":{"name":"ไทย","en_name":"Thai"},"zh-CN":{"name":"中文 (中国)","en_name":"Chinese (China)"},"zh-TW":{"name":"中文 (台灣)","en_name":"Chinese (Taiwan)"}}')}});