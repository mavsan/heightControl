/**
 * Контроль изменения высоты блока.
 * https://github.com/mavsan/heightControl
 * Created by mavsan on 07.06.2016.
 * Author: Maksim Klimenko
 * Email: mavsan@gmail.com
 */

(function($){
    jQuery.fn.heightControl = function(callback){

        function main() {
            var el = $(this),
                lastHeight = el.height(),
                newHeight = lastHeight;

            callback = typeof callback == 'undefined' ? $.noop : callback;

            (function run(){
                newHeight = el.height();

                if( lastHeight != newHeight ) {
                    callback(lastHeight, newHeight);
                    el.trigger('heightChanged', [lastHeight, newHeight]);
                    lastHeight = newHeight;
                }

                if( el.onElementHeightChangeTimer )
                    clearTimeout(el.onElementHeightChangeTimer);

                el.onElementHeightChangeTimer = setTimeout(run, 200);
            })();
        }

        return this.each(main);
    };
})(jQuery);
