!function(){function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c||a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}return a}()({1:[function(a,b,c){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.default=document.querySelectorAll.bind(document),Node.prototype.on=window.on=function(a,b){this.addEventListener(a,b)},NodeList.prototype.forEach=Array.prototype.forEach,NodeList.prototype.on=NodeList.prototype.addEventListener=function(a,b){this.forEach(function(c){c.on(a,b)})}},{}],2:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}a("classlist-polyfill");var e=a("./imports/bling.js"),f=d(e),g=a("modules/macro/portlet/portlet.js"),h=d(g);document.querySelector("html").classList.remove("no-js"),(0,f.default)(".js-portlet").forEach(function(a){(0,h.default)().init({wrap:a})})},{"./imports/bling.js":1,"classlist-polyfill":4,"modules/macro/portlet/portlet.js":3}],3:[function(a,b,c){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(){var a,b;return{init:function(c){a=this,c.wrap&&(b=c.wrap),b&&a.bindUIActions()},bindUIActions:function(){b.on("click",a.events.wrapClick)},events:{wrapClick:function(){console.log("1")}}}}},{}],4:[function(a,b,c){"document"in window.self&&("classList"in document.createElement("_")&&(!document.createElementNS||"classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))||function(a){"use strict";if("Element"in a){var b=a.Element.prototype,c=Object,d=String.prototype.trim||function(){return this.replace(/^\s+|\s+$/g,"")},e=Array.prototype.indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(b in this&&this[b]===a)return b;return-1},f=function(a,b){this.name=a,this.code=DOMException[a],this.message=b},g=function(a,b){if(""===b)throw new f("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(b))throw new f("INVALID_CHARACTER_ERR","String contains an invalid character");return e.call(a,b)},h=function(a){for(var b=d.call(a.getAttribute("class")||""),c=b?b.split(/\s+/):[],e=0,f=c.length;e<f;e++)this.push(c[e]);this._updateClassName=function(){a.setAttribute("class",this.toString())}},i=h.prototype=[],j=function(){return new h(this)};if(f.prototype=Error.prototype,i.item=function(a){return this[a]||null},i.contains=function(a){return a+="",-1!==g(this,a)},i.add=function(){var a,b=arguments,c=0,d=b.length,e=!1;do{a=b[c]+"",-1===g(this,a)&&(this.push(a),e=!0)}while(++c<d);e&&this._updateClassName()},i.remove=function(){var a,b,c=arguments,d=0,e=c.length,f=!1;do{for(a=c[d]+"",b=g(this,a);-1!==b;)this.splice(b,1),f=!0,b=g(this,a)}while(++d<e);f&&this._updateClassName()},i.toggle=function(a,b){a+="";var c=this.contains(a),d=c?!0!==b&&"remove":!1!==b&&"add";return d&&this[d](a),!0===b||!1===b?b:!c},i.toString=function(){return this.join(" ")},c.defineProperty){var k={get:j,enumerable:!0,configurable:!0};try{c.defineProperty(b,"classList",k)}catch(a){void 0!==a.number&&-2146823252!==a.number||(k.enumerable=!1,c.defineProperty(b,"classList",k))}}else c.prototype.__defineGetter__&&b.__defineGetter__("classList",j)}}(window.self),function(){"use strict";var a=document.createElement("_");if(a.classList.add("c1","c2"),!a.classList.contains("c2")){var b=function(a){var b=DOMTokenList.prototype[a];DOMTokenList.prototype[a]=function(a){var c,d=arguments.length;for(c=0;c<d;c++)a=arguments[c],b.call(this,a)}};b("add"),b("remove")}if(a.classList.toggle("c3",!1),a.classList.contains("c3")){var c=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(a,b){return 1 in arguments&&!this.contains(a)==!b?b:c.call(this,a)}}a=null}())},{}]},{},[2]);