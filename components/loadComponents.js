function ready(fn) {
    if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

var thisScript = document.scripts[document.scripts.length - 1];
var pathParts = thisScript.src.split('/');
var rootParts = pathParts.slice(0, pathParts.length - 2);
window.tlan = {};
window.tlan.rootUrl = rootParts.join('/');
var polyfillsScript = document.createElement('script');
polyfillsScript.src = window.tlan.rootUrl + '/bower_components/webcomponentsjs/webcomponents-loader.js';
polyfillsScript.onload = function() {
    var mainLink = document.createElement('link');
    mainLink.rel = 'import';
    mainLink.href = window.tlan.rootUrl + '/components/myComponent.html';
    mainLink.crossorigin = 'anonymous';
    mainLink.onload = function() {
        var script = document.createElement('script');
        script.src = window.tlan.rootUrl + '/components/myComponent.js';
        ready(function() { document.querySelector('head').appendChild(script); });
    };
    document.querySelector('head').appendChild(mainLink);
};
document.querySelector('head').appendChild(polyfillsScript);
