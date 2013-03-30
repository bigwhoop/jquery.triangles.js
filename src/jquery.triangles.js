/**
 * This file is part of jquery.triangles.js
 *
 * (c) Philippe Gerber <philippe@bigwhoop.ch>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
$.fn.triangles = function() {
    const TRIANGLE_HEIGHT = 42;
    const COLOR_CLASS_CHANCES = {
        'triangle-col-1' : 40,
        'triangle-col-2' : 14,
        'triangle-col-3' : 6,
        'triangle-empty' : 40
    };
    
    var colors = [];
    for (var colorClass in COLOR_CLASS_CHANCES) {
        for (var i = 0; i < COLOR_CLASS_CHANCES[colorClass]; i++) {
            colors.push(colorClass);
        }
    }

    function getRandomColorClass() {
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
    function generate($container) {
        $container.empty();
        
        var columns = Math.floor($container.width() / TRIANGLE_HEIGHT),
            rows    = Math.ceil($container.height() / TRIANGLE_HEIGHT);
        
        for (var ci = 0; ci < columns; ci += 1) {
            var col = $('<div class="triangles-column"></div>');
            for (var ri = 0; ri < rows; ri += 1) {
                var row = $('<div class="triangle"></div>');
                row.addClass(getRandomColorClass());
                col.append(row);
            }
            $container.append(col);
        }
    }
    
    return this.each(function() {
        var $container = $(this);
        $container.addClass('triangles');
        
        $(window).on('resize', function() {
            generate($container);
        });
        
        generate($container);
    });
};