/**
 * Defer loading file until after page is done rendering.
 */
var FRMSloadFile = function(element) {
        var loadDeferredFile = function(el) {
            document.head.appendChild(el);
        };

        if (window.addEventListener) {
            window.addEventListener('load', function() {
                loadDeferredFile(element);
            }, false);
        } else if (window.attachEvent) {
            window.attachEvent('onload', function() {
                loadDeferredFile(element);
            });
        } else {
            window.onload = function() {
                loadDeferredFile(element);
            };
        }
    },

    /**
     * Load a script file after the page has finished rendering.
     */
    FRMSloadScript = function(source) {
        var script = document.createElement('script');
        script.src = source;
        script.type = 'text/javascript';
        script.charset = 'utf-8';
        script.async = true;
        FRMSloadFile(script);
    },

    /**
     * Load a stylesheet after the page has finished rendering.
     */
    FRMSloadStyle = function(source) {
        var stylesheet = document.createElement('link');
        stylesheet.rel = 'stylesheet';
        stylesheet.type = 'text/css';
        stylesheet.href = source;
        FRMSloadFile(stylesheet);
    };

var require = {
    urlArgs: 'r=1001'
};

FRMSloadScript('/js/app.js?1001');