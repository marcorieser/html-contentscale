/*global window, document */

(function () {
    'use strict';

    var html = document.getElementsByTagName('html')[0],
        getVmin = function () {
            var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
                min = Math.min(width, height);
            return min * 0.01;
        },
        setFontSize = function () {
            html.style.fontSize = getVmin() + 'px';
        };
    
    setFontSize();

    window.addEventListener('orientationchange', setFontSize);
    window.addEventListener('resize', setFontSize);
}());