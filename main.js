!function(e){function t(t){for(var a,l,o=t[0],s=t[1],u=t[2],m=0,E=[];m<o.length;m++)l=o[m],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&E.push(r[l][0]),r[l]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);for(i&&i(t);E.length;)E.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(a=!1)}a&&(c.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},r={0:0},c=[];function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var o=window.webpackJsonp=window.webpackJsonp||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var i=s;c.push([746,2,1]),n()}({557:function(e,t,n){},746:function(e,t,n){"use strict";n.r(t),n.d(t,"store",(function(){return Qe}));n(320),n(256);var a=n(0),r=n.n(a),c=n(96),l=n.n(c),o=n(89),s=n(20),u=n(304),i=n(61),m=n(305),E=n.n(m),p=n(116),f=n(57);p.b.add(f.b,f.a,f.c,f.d,f.e,f.f,f.g,f.h,f.i,f.j);n(557);var d=n(24),b=n(97),h=n(755),O=n(756),v=n(27);function y(){return r.a.createElement(h.a,{bg:"primary"},r.a.createElement(h.a.Brand,{as:o.b,to:"/"},r.a.createElement(v.a,{icon:"lightbulb"})," Hew"),r.a.createElement(h.a.Toggle,null),r.a.createElement(h.a.Collapse,null,r.a.createElement(O.a,null,r.a.createElement(O.a.Link,{as:o.b,to:"/"},r.a.createElement(v.a,{icon:"sliders-h"})," Control"),r.a.createElement(O.a.Link,{as:o.b,to:"/devices"},r.a.createElement(v.a,{icon:"server"})," Devices"))))}var g=n(752),j=n(749),C=n(316),S=n(70),_=n.n(S),T=n(90),w=n.n(T),D=n(757),k=n(754),x=n(751),R=n(750),N=n(315),P=n(5),I=n.n(P),A=n(758),L=n(157),G=n.n(L);function V(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return M(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,r,c=!0,l=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return c=e.done,e},e:function(e){l=!0,r=e},f:function(){try{c||null==a.return||a.return()}finally{if(l)throw r}}}}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach((function(t){G()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var U=function(e,t){var n,a={},r=V(t);try{for(r.s();!(n=r.n()).done;){var c=n.value;a[c]="".concat(e,"/").concat(c)}}catch(e){r.e(e)}finally{r.f()}return a}("application",["ADD_DEVICE","ADD_PENDING_REQUEST","APPEND_NETWORK_LOG","CLEAR_NETWORK_LOG","CONTROL_DEVICE","CONTROL_DEVICE_FAILURE","CONTROL_DEVICE_SUCCESS","EDIT_DEVICE","REMOVE_DEVICE","REMOVE_PENDING_REQUEST","SET_BRIGHTNESS","SET_START_COLOR","SET_END_COLOR","SET_PATTERN","SET_SPEED"]),F=function(e){return{type:U.ADD_DEVICE,device:e}},H=function(e){return{type:U.ADD_PENDING_REQUEST,hostname:e}},W=function(e){return{type:U.APPEND_NETWORK_LOG,message:e}},Q=function(){return{type:U.CLEAR_NETWORK_LOG}},K=function(e){return{type:U.CONTROL_DEVICE,hostname:e}},z=function(e,t){return{type:U.EDIT_DEVICE,hostname:e,device:t}},J=function(e){return{type:U.REMOVE_DEVICE,hostname:e}},X=function(e){return{type:U.REMOVE_PENDING_REQUEST,hostname:e}},$=function(e){return{type:U.SET_BRIGHTNESS,brightness:e}},Y=function(e){return{type:U.SET_START_COLOR,color:e}},Z=function(e){return{type:U.SET_END_COLOR,color:e}},ee=function(e){return{type:U.SET_PATTERN,pattern:e}},te=function(e){return{type:U.SET_SPEED,speed:e}},ne={SOLID:"Solid",GRADIENT:"Gradient",MARQUEE:"Marquee"},ae={brightness:0,startColor:"FF0000",endColor:"0000FF",speed:127,pattern:ne.SOLID,devices:[],networkLog:[],pendingRequests:[]},re=n(71),ce=function(e){return e.application},le=Object(re.a)(ce,(function(e){return e.brightness})),oe=Object(re.a)(ce,(function(e){return e.startColor})),se=Object(re.a)(ce,(function(e){return e.endColor})),ue=Object(re.a)(ce,(function(e){return e.devices})),ie=Object(re.a)(ce,(function(e){return e.networkLog})),me=Object(re.a)(ce,(function(e){return e.pattern})),Ee=Object(re.a)(ce,(function(e){return e.pendingRequests})),pe=Object(re.a)(ce,(function(e){return e.speed}));function fe(e){var t=e.color,n=Object(s.b)(),c=Object(s.c)(oe),l=Object(s.c)(se),o=Object(a.useCallback)((function(e){n(e?Y(t):Z(t))}),[t,n]);return r.a.createElement(a.Fragment,null,r.a.createElement(A.a,{name},r.a.createElement(A.a,{style:{background:"linear-gradient(90deg, #".concat(c,", #").concat(l,")")},now:100})),r.a.createElement(j.a,null,r.a.createElement(C.a,{xs:6},r.a.createElement(R.a,{onClick:function(){return o(!0)}},"Start")),r.a.createElement(C.a,{className:"text-right"},r.a.createElement(R.a,{onClick:function(){return o(!1)}},"End"))))}function de(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return be(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return be(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,r,c=!0,l=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return c=e.done,e},e:function(e){l=!0,r=e},f:function(){try{c||null==a.return||a.return()}finally{if(l)throw r}}}}function be(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function he(){var e=Object(s.b)(),t=Object(s.c)(le),n=Object(s.c)(ue),c=Object(s.c)(me),l=Object(s.c)(pe),o=Object(s.c)(oe),u=Object(s.c)(Ee)||[],i=Object(a.useState)("all"),m=w()(i,2),E=m[0],p=m[1],f=Object(a.useState)([]),d=w()(f,2),b=d[0],h=d[1],O=Object(a.useState)(o),y=w()(O,2),g=y[0],S=y[1],T=Object(a.useCallback)((function(){var t=[];switch(E){case"all":t=n;break;case"some":t=n.filter((function(e){return b.includes(e.hostname)}))}var a,r=de(t);try{for(r.s();!(a=r.n()).done;){var c=a.value;e(K(c.hostname))}}catch(e){r.e(e)}finally{r.f()}}),[n,e,E,b]),P=Object(a.useCallback)((function(e){return p(e.target.value)}),[p]),I=Object(a.useCallback)((function(t){return e($(parseInt(t.target.value,10)))}),[e]),A=Object(a.useCallback)((function(e){return S(e.hex.replace("#",""))}),[S]),L=Object(a.useCallback)((function(t){return e(ee(t.target.value))}),[e]),G=Object(a.useCallback)((function(t){return e(te(t.target.value))}),[e]),V=Object(a.useCallback)((function(e){return h(_()(e.target.options).filter((function(e){return e.selected})).map((function(e){return e.value})))}),[h]),M="success";t>=200?M="danger":t>=160&&(M="warning");var q=u.length>0,B={disabled:q,icon:q?"spinner":"upload",spin:q,variant:q?"warning":"success"};return r.a.createElement(D.a,{className:"mt-2"},r.a.createElement(D.a.Body,null,r.a.createElement(D.a.Title,null,"Update Settings"),r.a.createElement(k.a,null,r.a.createElement(j.a,null,r.a.createElement(C.a,{md:4},r.a.createElement(k.a.Group,{as:C.a},r.a.createElement(k.a.Label,null,"Device(s)"),r.a.createElement(j.a,null,r.a.createElement(C.a,null,r.a.createElement(k.a.Check,{type:"radio",inline:!0,name:"recipientType",value:"all",label:"All",checked:"all"===E,onChange:P}))),r.a.createElement(j.a,null,r.a.createElement(C.a,null,r.a.createElement(k.a.Check,{type:"radio",inline:!0,name:"recipientType",value:"some",label:"Some",checked:"some"===E,onChange:P}))),"some"===E?r.a.createElement(k.a.Control,{as:"select",multiple:!0,onChange:V,value:b},n.map((function(e){return r.a.createElement("option",{key:e.hostname,value:e.hostname},e.hostname)}))):null),r.a.createElement(k.a.Group,{as:C.a},r.a.createElement(k.a.Label,null,"Pattern"),r.a.createElement(k.a.Control,{as:"select",value:c,onChange:L},Object.entries(ne).map((function(e){var t=w()(e,2),n=t[0],a=t[1];return r.a.createElement("option",{key:n,value:n},a)})))),r.a.createElement(k.a.Group,{as:C.a},r.a.createElement(k.a.Label,null,"Brightness"),r.a.createElement(x.a,null,r.a.createElement(k.a.Control,{className:"hew-range",type:"range",min:"0",max:"255",step:"5",value:t,onChange:I}),r.a.createElement(x.a.Append,null,r.a.createElement(x.a.Text,{className:"bg-".concat(M," text-dark")},Math.floor(t/255*100),"%"))),t>=160&&t<200?r.a.createElement("span",{className:"text-warning"},"Prolonged use at this power level will reduce lifespan."):null,t>=200?r.a.createElement("span",{className:"text-danger"},"Warning! Do not look directly at LEDs!"):null),r.a.createElement(k.a.Group,{as:C.a},r.a.createElement(k.a.Label,null,"Speed"),r.a.createElement(x.a,null,r.a.createElement(k.a.Control,{className:"hew-range",type:"range",min:"5",max:"255",step:"5",value:l,onChange:G}),r.a.createElement(x.a.Append,null,r.a.createElement(x.a.Text,null,Math.floor(l/127*100),"%"))))),r.a.createElement(C.a,{md:4},r.a.createElement(k.a.Group,null,r.a.createElement(k.a.Label,null,"Gradient"),r.a.createElement(fe,{color:g})),r.a.createElement(k.a.Group,null,r.a.createElement(k.a.Label,null,"Color"),r.a.createElement(N.SketchPicker,{width:"90%",disableAlpha:!0,color:g,onChangeComplete:A}))),r.a.createElement(C.a,{md:4},r.a.createElement(R.a,{disabled:B.disabled,variant:B.variant,onClick:T,block:!0,className:"hew-send","aria-label":"Send",title:"Send"},r.a.createElement(v.a,{icon:B.icon,spin:B.spin,size:"4x"})))))))}fe.propTypes={color:I.a.string.isRequired};var Oe=n(753);function ve(){var e=Object(s.b)(),t=Object(s.c)(ie),n=Object(a.useCallback)((function(){return e(Q())}),[e]);return r.a.createElement(D.a,{className:"my-4"},r.a.createElement(D.a.Body,null,r.a.createElement(D.a.Title,null,r.a.createElement(j.a,null,r.a.createElement(C.a,{xs:11},"Network Log"),r.a.createElement(C.a,{xs:1,className:"text-right"},r.a.createElement(R.a,{variant:"warning","aria-label":"Clear",title:"Clear",onClick:n},r.a.createElement(v.a,{icon:"eraser"}))))),r.a.createElement(g.a,null,t.length?t.map((function(e){return r.a.createElement(j.a,{key:e.timestamp},r.a.createElement(C.a,{xs:2},Object(Oe.a)(e.timestamp,"yyyy-MM-dd HH:mm:ss")),r.a.createElement(C.a,{xs:10},e.message))})):r.a.createElement(j.a,null,r.a.createElement(C.a,null,"No network log entries.")))))}function ye(){return r.a.createElement(g.a,null,r.a.createElement(b.a,{title:"Control"}),r.a.createElement(j.a,{className:"mt-4"},r.a.createElement(C.a,null,r.a.createElement("h1",null,r.a.createElement(v.a,{icon:"sliders-h"})," Control"))),r.a.createElement(he,null),r.a.createElement(ve,null))}var ge=n(160);function je(){var e=Object(s.c)(ue),t=Object(s.b)(),n=Object(a.useCallback)((function(e){var n=e.hostname,a=e.passphrase;t(F({hostname:"".concat(n,".local"),passphrase:a}))}),[t]),c=Object(a.useCallback)((function(t){var n=t.hostname,a=t.passphrase,r={};return n&&""!==n.trim()||(r.hostname="Hostname is required."),e.find((function(e){return e.hostname==="".concat(n,".local")}))&&(r.hostname="That device already exists."),a?a.length<8&&(r.passphrase="Passphrase must be at least eight characters."):r.passphrase="Passphrase is required.",r}),[e]);return r.a.createElement(D.a,{className:"my-4"},r.a.createElement(D.a.Body,null,r.a.createElement(D.a.Title,null,"Add Device"),r.a.createElement(ge.a,{initialValues:{hostname:"",passphrase:""},validate:c,onSubmit:n},(function(e){var t=e.values,n=e.errors,a=e.touched,c=e.handleChange,l=e.handleBlur,o=e.handleSubmit;return r.a.createElement(k.a,null,r.a.createElement(k.a.Group,null,r.a.createElement(x.a,null,r.a.createElement(k.a.Control,{isInvalid:n.hostname,onChange:c,onBlur:l,name:"hostname",placeholder:"hostname",type:"text",value:t.hostname}),r.a.createElement(x.a.Append,null,r.a.createElement(x.a.Text,null,".local")),a.hostname&&n.hostname&&r.a.createElement(k.a.Control.Feedback,{type:"invalid"},n.hostname))),r.a.createElement(k.a.Group,null,r.a.createElement(k.a.Control,{isInvalid:n.passphrase,onChange:c,onBlur:l,name:"passphrase",type:"text",value:t.passphrase}),a.passphrase&&n.passphrase&&r.a.createElement(k.a.Control.Feedback,{type:"invalid"},n.passphrase)),r.a.createElement(R.a,{onClick:o,variant:"success"},r.a.createElement(v.a,{icon:"plus-circle"})," Add"))}))))}function Ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Se(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ce(Object(n),!0).forEach((function(t){G()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ce(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _e(e){var t=e.device,n=t.hostname,c=t.passphrase,l=Object(s.b)(),o=Object(a.useState)(!1),u=w()(o,2),i=u[0],m=u[1],E=Object(a.useCallback)((function(){l(J(n))}),[l,n]),p=Object(a.useCallback)((function(){return m(!i)}),[i,m]),f=Object(a.useCallback)((function(e){l(z(n,Se(Se({},t),{},{passphrase:e.passphrase}))),m(!1)}),[t,l,n,m]),d={passphrase:c},b=i?"outline-primary":"primary";return r.a.createElement(D.a,null,r.a.createElement(D.a.Body,null,r.a.createElement(D.a.Title,null,r.a.createElement(j.a,null,r.a.createElement(C.a,null,n),r.a.createElement(C.a,{className:"text-right"},r.a.createElement(R.a,{variant:b,onClick:p},r.a.createElement(v.a,{icon:"edit"}))," ",r.a.createElement(R.a,{variant:"danger",onClick:E,title:"Delete"},r.a.createElement(v.a,{icon:"trash"})))),i&&r.a.createElement(ge.a,{onSubmit:f,validate:function(e){var t=e.passphrase,n={};return t?t.length<8&&(n.password="Passphrase must be at least eight characters."):n.password="Passphrase is required.",n},initialValues:d},(function(e){var t=e.values,n=e.handleChange,a=e.handleBlur,c=e.handleSubmit;return r.a.createElement(k.a,null,r.a.createElement(k.a.Group,null,r.a.createElement(k.a.Label,null,"Passphrase"),r.a.createElement(k.a.Control,{onBlur:a,onChange:n,name:"passphrase",type:"text",value:t.passphrase})),r.a.createElement(R.a,{variant:"success",onClick:c},r.a.createElement(v.a,{icon:"save"})))})))))}function Te(){var e=Object(s.c)(ue),t=Array.isArray(e)&&e.length;return r.a.createElement(g.a,null,r.a.createElement(b.a,{title:"Devices"}),r.a.createElement(j.a,{className:"mt-4"},r.a.createElement(C.a,null,r.a.createElement("h1",null,r.a.createElement(v.a,{icon:"server"})," Devices"))),r.a.createElement(j.a,null,r.a.createElement(C.a,null,r.a.createElement(je,null))),t?r.a.createElement(j.a,null,e.map((function(e){return r.a.createElement(C.a,{key:e.hostname,sm:4},r.a.createElement(_e,{device:e}))}))):null)}function we(){return r.a.createElement(a.Fragment,null,r.a.createElement(b.a,{titleTemplate:"Hew - %s"}),r.a.createElement(y,null),r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/"},r.a.createElement(ye,null)),r.a.createElement(d.a,{exact:!0,path:"/devices"},r.a.createElement(Te,null))))}_e.propTypes={device:I.a.shape({hostname:I.a.string.isRequired,passphrase:I.a.string.isRequired}).isRequired};var De=n(62),ke=n.n(De),xe=n(28),Re=n(319),Ne=n.n(Re),Pe=ke.a.mark(Le),Ie=ke.a.mark(Ge),Ae=ke.a.mark(Me);function Le(e){var t,n,a,r,c,l,o,s,u;return ke.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.hostname,i.prev=1,i.next=4,Object(xe.e)(oe);case 4:return n=i.sent,i.next=7,Object(xe.e)(se);case 7:return a=i.sent,i.next=10,Object(xe.e)(le);case 10:return r=i.sent,i.next=13,Object(xe.e)(me);case 13:return c=i.sent,i.next=16,Object(xe.e)(pe);case 16:return l=i.sent,i.next=19,Object(xe.e)(ue);case 19:if(o=i.sent,s=o.find((function(e){return e.hostname===t}))){i.next=23;break}throw new Error("Invalid device ".concat(t," specified"));case 23:return i.next=25,Object(xe.d)(W("Sending update to ".concat(t,"...")));case 25:return i.next=27,Object(xe.d)(H(t));case 27:return i.next=29,Object(xe.b)(Ne.a,{url:"http://".concat(t,"/"),method:"POST",headers:{Authorization:s.passphrase},data:{startColor:n,endColor:a,brightness:r,pattern:c,speed:l}});case 29:return u=i.sent,i.next=32,Object(xe.d)(X(t));case 32:if(200===u.status){i.next=34;break}throw new Error(u.body);case 34:return i.next=36,Object(xe.d)(W("".concat(t," updated successfully!")));case 36:i.next=44;break;case 38:return i.prev=38,i.t0=i.catch(1),i.next=42,Object(xe.d)(W("Error updating ".concat(t,": ").concat(i.t0.message)));case 42:return i.next=44,Object(xe.d)(X(t));case 44:case"end":return i.stop()}}),Pe,null,[[1,38]])}function Ge(){return ke.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(xe.f)(U.CONTROL_DEVICE,Le);case 2:case"end":return e.stop()}}),Ie)}var Ve={controlDeviceWatcher:Ge};function Me(){return ke.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(xe.a)(Object.values(Ve).map((function(e){return e()})));case 2:case"end":return e.stop()}}),Ae)}var qe=ke.a.mark(Be);function Be(){return ke.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(xe.c)(Me);case 2:case"end":return e.stop()}}),qe)}var Ue=Object(i.c)({application:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case U.ADD_PENDING_REQUEST:return e.pendingRequests.includes(t.hostname)?e:B(B({},e),{},{pendingRequests:[].concat(_()(e.pendingRequests),[t.hostname])});case U.REMOVE_PENDING_REQUEST:var n=_()(e.pendingRequests),a=n.findIndex((function(e){return e===t.hostname}));return-1===a?e:(n.splice(a,1),B(B({},e),{},{pendingRequests:n}));case U.APPEND_NETWORK_LOG:var r={message:t.message,timestamp:Date.now()},c=[r].concat(_()(e.networkLog)).slice(0,Math.min(20,e.networkLog.length+1));return B(B({},e),{},{networkLog:c});case U.CLEAR_NETWORK_LOG:return B(B({},e),{},{networkLog:[]});case U.ADD_DEVICE:var l=e.devices.find((function(e){return e.hostname===t.device.hostname}));return l?e:B(B({},e),{},{devices:[].concat(_()(e.devices),[t.device])});case U.EDIT_DEVICE:var o=_()(e.devices),s=e.devices.findIndex((function(e){return e.hostname===t.hostname}));return-1===s?e:(o.splice(s,1,t.device),B(B({},e),{},{devices:o}));case U.REMOVE_DEVICE:var u=_()(e.devices),i=e.devices.findIndex((function(e){return e.hostname===t.hostname}));return-1===i?e:(u.splice(i,1),B(B({},e),{},{devices:u}));case U.SET_BRIGHTNESS:return B(B({},e),{},{brightness:t.brightness});case U.SET_START_COLOR:return B(B({},e),{},{startColor:t.color});case U.SET_END_COLOR:return B(B({},e),{},{endColor:t.color});case U.SET_PATTERN:return B(B({},e),{},{pattern:t.pattern});case U.SET_SPEED:return B(B({},e),{},{speed:t.speed});default:return e}}}),Fe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,He=Object(u.a)(),We=Fe(Object(i.a)(He),E()()),Qe=Object(i.e)(Ue,{},We);He.run(Be),l.a.render(r.a.createElement(o.a,null,r.a.createElement(s.a,{store:Qe},r.a.createElement(we,null))),document.getElementById("root"));t.default=we}});