(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"1OyB":function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return a}))},"8NOC":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("MX0m"),r=n.n(a),i=n("q1tI"),o=n.n(i).a.createElement,s=function(e){var t=[],n=[],a=o("div",{className:"flex-item"});return e.keyTable&&(t=e.keyTable.header.sort((function(e,t){var n=e.key,a=t.key;return n<a?-1:n>a?1:0})).map((function(e){return o("th",{key:e.key,className:e.classNames},e.value)})),n=e.keyTable.rows.map((function(e,t){return o("tr",{key:t},e.sort((function(e,t){var n=e.key,a=t.key;return n<a?-1:n>a?1:0})).map((function(e){return o("td",{key:e.key+""+t,className:e.classNames},e.value)})))})),t&&(e.header1||e.header2)&&(a=o("div",{className:"flex-item"},o("h3",{className:"right-h3"},e.header1),o("h3",{className:"right-h3"},e.header2)))),o("div",{className:"jsx-197444861 flex-container"},a,o("div",{className:"jsx-197444861 flex-item"},o("table",{className:"jsx-197444861"},o("thead",{className:"jsx-197444861"},o("tr",{className:"jsx-197444861"},t)),o("tbody",{className:"jsx-197444861"},n))),o(r.a,{id:"1745020273"},[".flex-container.jsx-197444861{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}",".flex-item.jsx-197444861{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}","h3.jsx-197444861{margin:0 1em 0 0;text-align:right;font-size:1em;display:block;}","table.jsx-197444861{border:solid;border-radius:10px;border-collapse:collapse;table-layout:fixed;}","tr.jsx-197444861{border-bottom:solid;}","thead.jsx-197444861{text-align:center;}","tbody.jsx-197444861{text-align:center;}",".color-red.jsx-197444861{color:red;}"]),o(r.a,{id:"1061125253"},[".color-red{color:red;border:solid;}",".brd-right{border-right:solid;}",".brd-bottom{border-bottom:solid;}",".font-bold{font-weight:bold;}",".font-sm{font-size:.75em;}",".right-h3{margin:0 1em 0 0;text-align:right;font-size:1em;display:block;}",".animate{color:black;-webkit-animation-name:red;animation-name:red;-webkit-animation-duration:.5s;animation-duration:.5s;}","@-webkit-keyframes red{from{color:black;font-size:2em;font-weight:bold;}to{color:red;}}","@keyframes red{from{color:black;font-size:2em;font-weight:bold;}to{color:red;}}"]))}},JX7q:function(e,t,n){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return a}))},Ji7U:function(e,t,n){"use strict";function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}n.d(t,"a",(function(){return r}))},foSv:function(e,t,n){"use strict";function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return a}))},fyDi:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var a=n("1OyB"),r=n("vuIU"),i=n("JX7q"),o=n("Ji7U"),s=n("md7G"),c=n("foSv"),l=n("rePB"),u=n("MX0m"),d=n.n(u),p=n("q1tI"),f=n.n(p),h=f.a.createElement,b=function(e){var t=e.id,n=e.input,a=e.label,r=e.handleChangeProp;return h("div",{className:"jsx-180001737 input-container"},h("label",{htmlFor:t,className:"jsx-180001737"},a,":"),h("textarea",{name:t,value:n,onChange:r,className:"jsx-180001737"}),h(d.a,{id:"180001737"},[".input-container.jsx-180001737{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0.5em;}"]))},y=f.a.createElement,m=function(e){var t=e.id,n=e.input,a=e.label,r=e.handleChangeProp;return y("div",{className:"jsx-3106375073 seed-input"},y("label",{htmlFor:t,className:"jsx-3106375073"},a,":"),y("input",{name:t,value:n,onChange:r,className:"jsx-3106375073"}),y(d.a,{id:"3106375073"},[".seed-input.jsx-3106375073{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0.5em;}"]))},x=f.a.createElement;function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(c.a)(e);if(t){var r=Object(c.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(s.a)(this,n)}}var v=function(e){Object(o.a)(n,e);var t=g(n);function n(e){var r;return Object(a.a)(this,n),r=t.call(this,e),Object(l.a)(Object(i.a)(r),"handleSeedChange",(function(e){var t="",n="",a=r.state.input,i=r.state.output;r.props.encodeFn(e.target.value),""!==a?(t=r.props.encryptFn(a,e.target.value),n=a):""!==i&&(n=r.props.encryptFn(i,e.target.value),t=i),r.setState({seed:r.props.upperCaseSeedOnly?e.target.value.toUpperCase():e.target.value,input:n,output:t})})),Object(l.a)(Object(i.a)(r),"handleInputChange",(function(e){var t=r.props.encryptFn(e.target.value.toUpperCase(),r.state.seed);r.setState({seed:r.state.seed,input:e.target.value.toUpperCase(),output:t})})),Object(l.a)(Object(i.a)(r),"handleOutputChange",(function(e){var t="";t=r.state.seed.length>0?r.props.decryptFn(e.target.value):"",r.setState({seed:r.state.seed,input:t,output:e.target.value})})),r.state={seed:r.props.seed?r.props.upperCaseSeedOnly?r.props.seed.toUpperCase():r.props.seed:"",input:r.props.input?r.props.input:"",output:r.props.output?r.props.output:""},r}return Object(r.a)(n,[{key:"render",value:function(){return x("div",{className:"jsx-2952718154"},x("h1",{className:"jsx-2952718154"},this.props.heading?this.props.heading:"Substitution"),this.props.children,x(m,{label:"Key Seed",input:this.state.seed,id:"seed",handleChangeProp:this.handleSeedChange}),x(b,{label:"Input",input:this.state.input,id:"input",handleChangeProp:this.handleInputChange}),x(b,{label:"Output",input:this.state.output,id:"output",handleChangeProp:this.handleOutputChange}),x(d.a,{id:"2952718154"},["h1.jsx-2952718154{text-align:center;}"]))}}]),n}(f.a.Component)},md7G:function(e,t,n){"use strict";function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return i}));var r=n("JX7q");function i(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?Object(r.a)(e):t}},q9r8:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var a=n("1OyB"),r=n("vuIU"),i=n("JX7q"),o=n("Ji7U"),s=n("md7G"),c=n("foSv"),l=n("rePB"),u=n("MX0m"),d=n.n(u),p=n("q1tI"),f=n.n(p),h=n("apO0"),b=n("fyDi"),y=function(){function e(){Object(a.a)(this,e),Object(l.a)(this,"encodeMapTable",void 0),Object(l.a)(this,"decodeMapTable",void 0),Object(l.a)(this,"keyDisplayTable",void 0),this.encodeMapTable=new Map,this.decodeMapTable=new Map;for(var t=0;t<26;t++){for(var n=new Map,r=new Map,i=65,o=65;o<91;o++)o+t<91?(n.set(String.fromCharCode(o),String.fromCharCode(o+t)),r.set(String.fromCharCode(o+t),String.fromCharCode(o))):(n.set(String.fromCharCode(o),String.fromCharCode(i)),r.set(String.fromCharCode(i),String.fromCharCode(o)),i++);this.encodeMapTable.set(String.fromCharCode(t+65),n),this.decodeMapTable.set(String.fromCharCode(t+65),r)}this.generateKeyTableDisplay(this.encodeMapTable)}return Object(r.a)(e,[{key:"encrypt",value:function(e,t){var n="";e=e.replace(/\s/g,""),t=t.replace(/[^a-zA-Z]/g,"").toUpperCase();for(var a=1,r=0;r<e.length;r++)this.encodeMapTable.get(e.charAt(r))&&t?n+=this.encodeMapTable.get(e.charAt(r)).get(t.charAt(r%t.length)):n+=e.charAt(r),a%5===0&&(n+=" "),a++;for(;a%5!==1;)n+=String.fromCharCode(65+Math.floor(26*Math.random())),a++;return n}},{key:"decrypt",value:function(e,t){var n="";e=e.replace(/\s/g,""),t=t.replace(/[^a-zA-Z]/g,"").toUpperCase();for(var a=0;a<e.length;a++)this.decodeMapTable.get(e.charAt(a))&&t?n+=this.decodeMapTable.get(t.charAt(a%t.length)).get(e.charAt(a)):n+=e.charAt(a);return n}},{key:"generateKeyTableDisplay",value:function(e){var t=[],n=[[]],a=[],r=0;t.push({key:"-1",value:""}),e.forEach((function(e,i){t.push({key:i,value:i,classNames:"brd-bottom font-bold font-sm"}),n[r]=[{key:"-1"+i,value:i,classNames:"brd-right font-bold font-sm"}],a=[],e.forEach((function(e,t){a.push({key:t+r,value:e,classNames:"font-sm"})})),n[r]=n[r].concat(a),r++})),this.keyDisplayTable={header:t,rows:n}}}]),e}(),m=n("8NOC"),x=f.a.createElement;function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(c.a)(e);if(t){var r=Object(c.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(s.a)(this,n)}}var v=function(e){Object(o.a)(n,e);var t=g(n);function n(e){var r;return Object(a.a)(this,n),r=t.call(this,e),Object(l.a)(Object(i.a)(r),"header",[]),Object(l.a)(Object(i.a)(r),"body",[]),Object(l.a)(Object(i.a)(r),"cypher",new y),Object(l.a)(Object(i.a)(r),"generateEncoding",(function(e){r.setState({seed:e.toUpperCase()})})),Object(l.a)(Object(i.a)(r),"encrypt",(function(e,t){if(e=e.replace(/\s/g,""),t=t.replace(/[^a-zA-Z]/g,"").toUpperCase()){for(var n=r.state.cypher.keyDisplayTable.rows,a=e.charAt(e.length-1),i=t.charAt((e.length-1)%t.length),o=n[a.charCodeAt(0)-65],s=0;s<o.length;s++)o[s].key.charAt(0)===i&&(o[s]={key:o[s].key,value:o[s].value,classNames:o[s].classNames?o[s].classNames+" animate":""});return r.setState({cypher:r.cypher}),r.cypher.encrypt(e,t)}return r.cypher.encrypt(e,r.state.seed)})),Object(l.a)(Object(i.a)(r),"decrypt",(function(e,t){return t?r.cypher.decrypt(e,t):r.cypher.decrypt(e,r.state.seed)})),r.state={seed:"",cypher:r.cypher,label:"Vigen\xe8re Table"},r}return Object(r.a)(n,[{key:"render",value:function(){return x(h.a,{title:"Cypher|Vigen\xe8re"},x(b.a,{type:"vegenere",heading:"Vigen\xe8re",upperCaseSeedOnly:!0,encodeFn:this.generateEncoding,encryptFn:this.encrypt,decryptFn:this.decrypt},x("div",{className:"jsx-2507999977 flex-container-row"},x("div",{className:"jsx-2507999977 flex-container-col"},x("p",{className:"jsx-2507999977"},"The Vigen\xe8re cipher uses a table where the available characters are shifted. A key seed is used in combination with the plaintext to determine the cipher. More details can be found on \xa0",x("a",{href:"https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher",target:"_blank",className:"jsx-2507999977"},x("i",{className:"jsx-2507999977"},"Wikipedia")),"."),x("p",{className:"jsx-2507999977"},"Input a seed key below using characters A-Z. The fields are case insensitive and all input and output is in all caps. To decrypt a previously entered value, input the Key Seed and paste/enter the encrypted value in the output textbox."),x("p",{className:"jsx-2507999977"},"The plaintext is encoded by using the key seed letter to determine the row on the table and the plaintext letter for the column. The resulting junction is the cipher character. If the key seed is shorter than the plaintext, then it is repeated to construct a key the same length as the plaintext input.")),x(m.a,{label:this.state.label,keyTable:this.state.cypher.keyDisplayTable}))),x(d.a,{id:"2507999977"},[".flex-container-row.jsx-2507999977{padding:0 0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:100%;}",".flex-container-col.jsx-2507999977{padding:0 0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%;}","a.jsx-2507999977{-webkit-text-decoration:underline dotted;text-decoration:underline dotted;color:gray;}","h1.jsx-2507999977{text-align:center;}","p.jsx-2507999977{text-align:left;}","@media only screen and (max-width:800px){.flex-container-row.jsx-2507999977{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}"]))}}]),n}(f.a.Component)},rePB:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))},uJBN:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/vigenere",function(){return n("q9r8")}])},vuIU:function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}n.d(t,"a",(function(){return r}))}},[["uJBN",0,2,1,3]]]);