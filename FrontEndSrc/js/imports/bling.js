/* bling.js */

'use strict';

export default document.querySelectorAll.bind(document);

Node.prototype.on = window.on = function (name, fn) {
    this.addEventListener(name, fn);
};

NodeList.prototype.forEach = Array.prototype.forEach;

NodeList.prototype.on = NodeList.prototype.addEventListener = function (name, fn) {
    this.forEach(function (elem) {
        elem.on(name, fn);
    });
};