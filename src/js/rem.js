/* global jQuery */

(function ($) {
    var $window = $(window),
        $html,
        getVmin = function () {
            var width = $window.width(),
                height = $window.height(),
                min = Math.min(width, height);

            return min * 0.01;
        },
        setFontSize = function () {
            $html.css('font-size', getVmin() + 'px');
        };
    $(function () {
        $html = $('html');

        $window.on('resize orientationchange', setFontSize);

        setFontSize();
    });
}(jQuery));