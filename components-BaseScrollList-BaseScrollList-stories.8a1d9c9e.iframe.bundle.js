/*! For license information please see components-BaseScrollList-BaseScrollList-stories.8a1d9c9e.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkcoerger_design=self.webpackChunkcoerger_design||[]).push([[77],{"./src/components/BaseScrollList/BaseScrollList.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BaseScrollListExample:()=>BaseScrollListExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>BaseScrollList_stories});var deepcopy=__webpack_require__("./node_modules/deepcopy/umd/deepcopy.js"),deepcopy_default=__webpack_require__.n(deepcopy),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const BaseScrollList=props=>{const{headerData,headerBg,rowNum=5,baseBg,height,rowsData,time}=props,width=100/headerData.length+"%",length=rowsData.length,[currentRowData,setCurrentRowData]=(0,react.useState)(rowsData.slice(0,rowNum)),currentIndex=(0,react.useRef)(-1),currentHeight=(0,react.useRef)(),ref=(0,react.useRef)(null);let isShow=(0,react.useRef)("show");(0,react.useMemo)((()=>(isShow.current="show"===isShow.current?"hidden":"show",isShow)),[currentRowData]);const startAnimation=async()=>{if(rowNum>length)return;currentIndex.current>=length&&(currentIndex.current=0);const _rowsData=deepcopy_default()(rowsData);setCurrentRowData((()=>(currentIndex.current+=1,_rowsData.slice(currentIndex.current).concat(_rowsData.slice(0,currentIndex.current))))),await new Promise((resolve=>setTimeout(resolve,time))),await startAnimation()};return(0,react.useEffect)((()=>{currentHeight.current=ref.current.offsetHeight,startAnimation()}),[]),(0,jsx_runtime.jsxs)("div",{className:"base-scroll-list",style:{background:baseBg},children:[(0,jsx_runtime.jsx)("div",{className:"base-scroll-list-header",children:headerData.map(((item,index)=>(0,jsx_runtime.jsx)("div",{className:"header-item",style:{height,width,backgroundColor:headerBg},children:item},index)))}),(0,jsx_runtime.jsx)("div",{ref,className:"container",style:{height:currentHeight.current},children:currentRowData.map(((item,index)=>{let color="";return color="show"===isShow.current?index%2==0?"":"white":(index+1)%2==0?"":"white",(0,jsx_runtime.jsx)("div",{className:"base-scroll-list-rows",style:0===index?{height:isShow.current}:{},children:(0,jsx_runtime.jsx)("ul",{style:{background:color},children:Object.values(item).map(((val,i)=>(0,jsx_runtime.jsx)("li",{style:{width},children:val},i)))})},index)}))})]})};BaseScrollList.defaultProps={baseBg:"rgb(90, 90, 90)",headerBg:"yellowgreen",rowNum:5,time:2e3};const BaseScrollList_BaseScrollList=BaseScrollList;BaseScrollList.__docgenInfo={description:"",methods:[],displayName:"BaseScrollList",props:{baseBg:{defaultValue:{value:'"rgb(90, 90, 90)"',computed:!1},required:!1},headerBg:{defaultValue:{value:'"yellowgreen"',computed:!1},required:!1},rowNum:{defaultValue:{value:"5",computed:!1},required:!1},time:{defaultValue:{value:"2000",computed:!1},required:!1}}};const BaseScrollList_stories={title:"components/BaseScrollList",component:BaseScrollList_BaseScrollList,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{}},BaseScrollListExample={render:()=>(0,jsx_runtime.jsx)("div",{style:{minWidth:"500px"},children:(0,jsx_runtime.jsx)(BaseScrollList_BaseScrollList,{headerData:["城市订单量","店铺数","人数","新店铺数量","人均订单量"],rowsData:[{cityOrder:"上海+12%",storyCount:141,userCount:174,newStoryC0unt:152,avenger:376},{cityOrder:"北京+12%",storyCount:141,userCount:174,newStoryC0unt:152,avenger:376},{cityOrder:"广州+15%",storyCount:141,userCount:174,newStoryC0unt:152,avenger:376},{cityOrder:"深圳+12%",storyCount:141,userCount:174,newStoryC0unt:152,avenger:376},{cityOrder:"武汉+21%",storyCount:141,userCount:174,newStoryC0unt:152,avenger:376},{cityOrder:"成都+1%",storyCount:141,userCount:174,newStoryC0unt:152,avenger:376},{cityOrder:"南京+18%",storyCount:141,userCount:174,newStoryC0unt:152,avenger:376},{cityOrder:"杭州+13%",storyCount:141,userCount:174,newStoryC0unt:152,avenger:376},{cityOrder:"重庆+12%",storyCount:141,userCount:174,newStoryC0unt:152,avenger:376},{cityOrder:"安徽+10%",storyCount:141,userCount:174,newStoryC0unt:152,avenger:376},{cityOrder:"上海+12%",storyCount:141,userCount:174,newStoryC0unt:152,avenger:376},{cityOrder:"北京+12%",storyCount:141,userCount:174,newStoryC0unt:152,avenger:376},{cityOrder:"广州+15%",storyCount:141,userCount:174,newStoryC0unt:152,avenger:376},{cityOrder:"深圳+12%",storyCount:141,userCount:174,newStoryC0unt:152,avenger:376},{cityOrder:"武汉+21%",storyCount:141,userCount:174,newStoryC0unt:152,avenger:376},{cityOrder:"深圳+12%",storyCount:141,userCount:174,newStoryC0unt:152,avenger:376},{cityOrder:"武汉+21%",storyCount:141,userCount:174,newStoryC0unt:152,avenger:376},{cityOrder:"成都+1%",storyCount:141,userCount:174,newStoryC0unt:152,avenger:376},{cityOrder:"南京+18%",storyCount:141,userCount:174,newStoryC0unt:152,avenger:376},{cityOrder:"杭州+13%",storyCount:141,userCount:174,newStoryC0unt:152,avenger:376},{cityOrder:"重庆+12%",storyCount:141,userCount:174,newStoryC0unt:152,avenger:376}],rowNum:5,baseBg:"pink",headerBg:"gray",time:2e3})})};BaseScrollListExample.parameters={...BaseScrollListExample.parameters,docs:{...BaseScrollListExample.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const headerData = ["城市订单量", "店铺数", "人数", "新店铺数量", "人均订单量"];\n    const rowsData = [{\n      cityOrder: "上海+12%",\n      storyCount: 141,\n      userCount: 174,\n      newStoryC0unt: 152,\n      avenger: 376\n    }, {\n      cityOrder: "北京+12%",\n      storyCount: 141,\n      userCount: 174,\n      newStoryC0unt: 152,\n      avenger: 376\n    }, {\n      cityOrder: "广州+15%",\n      storyCount: 141,\n      userCount: 174,\n      newStoryC0unt: 152,\n      avenger: 376\n    }, {\n      cityOrder: "深圳+12%",\n      storyCount: 141,\n      userCount: 174,\n      newStoryC0unt: 152,\n      avenger: 376\n    }, {\n      cityOrder: "武汉+21%",\n      storyCount: 141,\n      userCount: 174,\n      newStoryC0unt: 152,\n      avenger: 376\n    }, {\n      cityOrder: "成都+1%",\n      storyCount: 141,\n      userCount: 174,\n      newStoryC0unt: 152,\n      avenger: 376\n    }, {\n      cityOrder: "南京+18%",\n      storyCount: 141,\n      userCount: 174,\n      newStoryC0unt: 152,\n      avenger: 376\n    }, {\n      cityOrder: "杭州+13%",\n      storyCount: 141,\n      userCount: 174,\n      newStoryC0unt: 152,\n      avenger: 376\n    }, {\n      cityOrder: "重庆+12%",\n      storyCount: 141,\n      userCount: 174,\n      newStoryC0unt: 152,\n      avenger: 376\n    }, {\n      cityOrder: "安徽+10%",\n      storyCount: 141,\n      userCount: 174,\n      newStoryC0unt: 152,\n      avenger: 376\n    }, {\n      cityOrder: "上海+12%",\n      storyCount: 141,\n      userCount: 174,\n      newStoryC0unt: 152,\n      avenger: 376\n    }, {\n      cityOrder: "北京+12%",\n      storyCount: 141,\n      userCount: 174,\n      newStoryC0unt: 152,\n      avenger: 376\n    }, {\n      cityOrder: "广州+15%",\n      storyCount: 141,\n      userCount: 174,\n      newStoryC0unt: 152,\n      avenger: 376\n    }, {\n      cityOrder: "深圳+12%",\n      storyCount: 141,\n      userCount: 174,\n      newStoryC0unt: 152,\n      avenger: 376\n    }, {\n      cityOrder: "武汉+21%",\n      storyCount: 141,\n      userCount: 174,\n      newStoryC0unt: 152,\n      avenger: 376\n    }, {\n      cityOrder: "深圳+12%",\n      storyCount: 141,\n      userCount: 174,\n      newStoryC0unt: 152,\n      avenger: 376\n    }, {\n      cityOrder: "武汉+21%",\n      storyCount: 141,\n      userCount: 174,\n      newStoryC0unt: 152,\n      avenger: 376\n    }, {\n      cityOrder: "成都+1%",\n      storyCount: 141,\n      userCount: 174,\n      newStoryC0unt: 152,\n      avenger: 376\n    }, {\n      cityOrder: "南京+18%",\n      storyCount: 141,\n      userCount: 174,\n      newStoryC0unt: 152,\n      avenger: 376\n    }, {\n      cityOrder: "杭州+13%",\n      storyCount: 141,\n      userCount: 174,\n      newStoryC0unt: 152,\n      avenger: 376\n    }, {\n      cityOrder: "重庆+12%",\n      storyCount: 141,\n      userCount: 174,\n      newStoryC0unt: 152,\n      avenger: 376\n    }];\n    return <div style={{\n      minWidth: "500px"\n    }}>\r\n        <BaseScrollList headerData={headerData} rowsData={rowsData} rowNum={5} baseBg="pink" headerBg="gray" time={2000}></BaseScrollList>\r\n      </div>;\n  }\n}',...BaseScrollListExample.parameters?.docs?.source}}};const __namedExportsOrder=["BaseScrollListExample"]},"./node_modules/deepcopy/umd/deepcopy.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=function(){"use strict";var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==__webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{};function createCommonjsModule(fn,module){return fn(module={exports:{}},module.exports),module.exports}var typeDetect=createCommonjsModule((function(module,exports){!function(global,factory){module.exports=factory()}(0,(function(){var promiseExists="function"==typeof Promise,globalObject="object"==typeof self?self:commonjsGlobal,symbolExists="undefined"!=typeof Symbol,mapExists="undefined"!=typeof Map,setExists="undefined"!=typeof Set,weakMapExists="undefined"!=typeof WeakMap,weakSetExists="undefined"!=typeof WeakSet,dataViewExists="undefined"!=typeof DataView,symbolIteratorExists=symbolExists&&void 0!==Symbol.iterator,symbolToStringTagExists=symbolExists&&void 0!==Symbol.toStringTag,setEntriesExists=setExists&&"function"==typeof Set.prototype.entries,mapEntriesExists=mapExists&&"function"==typeof Map.prototype.entries,setIteratorPrototype=setEntriesExists&&Object.getPrototypeOf((new Set).entries()),mapIteratorPrototype=mapEntriesExists&&Object.getPrototypeOf((new Map).entries()),arrayIteratorExists=symbolIteratorExists&&"function"==typeof Array.prototype[Symbol.iterator],arrayIteratorPrototype=arrayIteratorExists&&Object.getPrototypeOf([][Symbol.iterator]()),stringIteratorExists=symbolIteratorExists&&"function"==typeof String.prototype[Symbol.iterator],stringIteratorPrototype=stringIteratorExists&&Object.getPrototypeOf(""[Symbol.iterator]()),toStringLeftSliceLength=8,toStringRightSliceLength=-1;function typeDetect(obj){var typeofObj=typeof obj;if("object"!==typeofObj)return typeofObj;if(null===obj)return"null";if(obj===globalObject)return"global";if(Array.isArray(obj)&&(!1===symbolToStringTagExists||!(Symbol.toStringTag in obj)))return"Array";if("object"==typeof window&&null!==window){if("object"==typeof window.location&&obj===window.location)return"Location";if("object"==typeof window.document&&obj===window.document)return"Document";if("object"==typeof window.navigator){if("object"==typeof window.navigator.mimeTypes&&obj===window.navigator.mimeTypes)return"MimeTypeArray";if("object"==typeof window.navigator.plugins&&obj===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"==typeof window.HTMLElement)&&obj instanceof window.HTMLElement){if("BLOCKQUOTE"===obj.tagName)return"HTMLQuoteElement";if("TD"===obj.tagName)return"HTMLTableDataCellElement";if("TH"===obj.tagName)return"HTMLTableHeaderCellElement"}}var stringTag=symbolToStringTagExists&&obj[Symbol.toStringTag];if("string"==typeof stringTag)return stringTag;var objPrototype=Object.getPrototypeOf(obj);return objPrototype===RegExp.prototype?"RegExp":objPrototype===Date.prototype?"Date":promiseExists&&objPrototype===Promise.prototype?"Promise":setExists&&objPrototype===Set.prototype?"Set":mapExists&&objPrototype===Map.prototype?"Map":weakSetExists&&objPrototype===WeakSet.prototype?"WeakSet":weakMapExists&&objPrototype===WeakMap.prototype?"WeakMap":dataViewExists&&objPrototype===DataView.prototype?"DataView":mapExists&&objPrototype===mapIteratorPrototype?"Map Iterator":setExists&&objPrototype===setIteratorPrototype?"Set Iterator":arrayIteratorExists&&objPrototype===arrayIteratorPrototype?"Array Iterator":stringIteratorExists&&objPrototype===stringIteratorPrototype?"String Iterator":null===objPrototype?"Object":Object.prototype.toString.call(obj).slice(toStringLeftSliceLength,toStringRightSliceLength)}return typeDetect}))}));const isBufferExists="undefined"!=typeof Buffer,isBufferFromExists=isBufferExists&&void 0!==Buffer.from,isBuffer=isBufferExists?function isBuffer(value){return Buffer.isBuffer(value)}:function isBuffer(){return!1},copy=isBufferFromExists?function copy(value){return Buffer.from(value)}:isBufferExists?function copy(value){return new Buffer(value)}:function copy(value){return value};function detectType(value){return isBuffer(value)?"Buffer":typeDetect(value)}const collectionTypeSet=new Set(["Arguments","Array","Map","Object","Set"]);function get(collection,key,type=null){switch(type||detectType(collection)){case"Arguments":case"Array":case"Object":return collection[key];case"Map":return collection.get(key);case"Set":return key}}function isCollection(type){return collectionTypeSet.has(type)}function set(collection,key,value,type=null){switch(type||detectType(collection)){case"Arguments":case"Array":case"Object":collection[key]=value;break;case"Map":collection.set(key,value);break;case"Set":collection.add(value)}return collection}const freeGlobalThis="undefined"!=typeof globalThis&&null!==globalThis&&globalThis.Object===Object&&globalThis,freeGlobal=void 0!==__webpack_require__.g&&null!==__webpack_require__.g&&__webpack_require__.g.Object===Object&&__webpack_require__.g,freeSelf="undefined"!=typeof self&&null!==self&&self.Object===Object&&self,globalObject=freeGlobalThis||freeGlobal||freeSelf||Function("return this")();function copyArrayBuffer(value){return value.slice(0)}function copyBoolean(value){return new Boolean(value.valueOf())}function copyDataView(value){return new DataView(value.buffer)}function copyBuffer(value){return copy(value)}function copyDate(value){return new Date(value.getTime())}function copyNumber(value){return new Number(value)}function copyRegExp(value){return new RegExp(value.source,value.flags)}function copyString(value){return new String(value)}function copyTypedArray(value,type){return globalObject[type].from?globalObject[type].from(value):new globalObject[type](value)}function shallowCopy(value){return value}function getEmptyArray(){return[]}function getEmptyMap(){return new Map}function getEmptyObject(){return{}}function getEmptySet(){return new Set}var copyMap=new Map([["ArrayBuffer",copyArrayBuffer],["Boolean",copyBoolean],["Buffer",copyBuffer],["DataView",copyDataView],["Date",copyDate],["Number",copyNumber],["RegExp",copyRegExp],["String",copyString],["Float32Array",copyTypedArray],["Float64Array",copyTypedArray],["Int16Array",copyTypedArray],["Int32Array",copyTypedArray],["Int8Array",copyTypedArray],["Uint16Array",copyTypedArray],["Uint32Array",copyTypedArray],["Uint8Array",copyTypedArray],["Uint8ClampedArray",copyTypedArray],["Array Iterator",shallowCopy],["Map Iterator",shallowCopy],["Promise",shallowCopy],["Set Iterator",shallowCopy],["String Iterator",shallowCopy],["function",shallowCopy],["global",shallowCopy],["WeakMap",shallowCopy],["WeakSet",shallowCopy],["boolean",shallowCopy],["null",shallowCopy],["number",shallowCopy],["string",shallowCopy],["symbol",shallowCopy],["undefined",shallowCopy],["Arguments",getEmptyArray],["Array",getEmptyArray],["Map",getEmptyMap],["Object",getEmptyObject],["Set",getEmptySet]]);function noop(){}function copy$1(value,type=null,customizer=noop){2===arguments.length&&"function"==typeof type&&(customizer=type,type=null);const valueType=type||detectType(value),copyFunction=copyMap.get(valueType);if("Object"===valueType){const result=customizer(value,valueType);if(void 0!==result)return result}return copyFunction?copyFunction(value,valueType):value}function deepcopy(value,options={}){"function"==typeof options&&(options={customizer:options});const{customizer}=options,valueType=detectType(value);if(!isCollection(valueType))return recursiveCopy(value,null,null,null);const copiedValue=copy$1(value,valueType,customizer);return recursiveCopy(value,copiedValue,new WeakMap([[value,copiedValue]]),new WeakSet([value]))}function recursiveCopy(value,clone,references,visited,customizer){const type=detectType(value),copiedValue=copy$1(value,type);if(!isCollection(type))return copiedValue;let keys;switch(type){case"Arguments":case"Array":keys=Object.keys(value);break;case"Object":keys=Object.keys(value),keys.push(...Object.getOwnPropertySymbols(value));break;case"Map":case"Set":keys=value.keys()}for(let collectionKey of keys){const collectionValue=get(value,collectionKey,type);if(visited.has(collectionValue))set(clone,collectionKey,references.get(collectionValue),type);else{const collectionValueType=detectType(collectionValue),copiedCollectionValue=copy$1(collectionValue,collectionValueType);isCollection(collectionValueType)&&(references.set(collectionValue,copiedCollectionValue),visited.add(collectionValue)),set(clone,collectionKey,recursiveCopy(collectionValue,copiedCollectionValue,references,visited),type)}}return clone}return deepcopy}()},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);