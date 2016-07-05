// This script reused and adapted form http://stackoverflow.com/questions/12199363/scrollto-with-animation

// first add raf shim
// http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

// main function
function scrollToX(scrollTargetX, speed, easing) {
    // scrollTargetX: the target scrollX property of the window
    // speed: time in pixels per second
    // easing: easing equation to use

    var scrollX = window.scrollX,
        scrollTargetX = scrollTargetX || 0,
        speed = speed || 2000,
        easing = easing || 'easeOutSine',
        currentTime = 0;

    // min time 0.1, max time 5.0 seconds
    var time = Math.max(0.1, Math.min(Math.abs(scrollX - scrollTargetX) / speed, 5.0));

    // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
    var PI_D2 = Math.PI / 2,
        easingEquations = {
            easeOutSine: function (pos) {
                return Math.sin(pos * (Math.PI / 2));
            },
            easeInOutSine: function (pos) {
                return (-0.5 * (Math.cos(Math.PI * pos) - 1));
            },
            easeInOutQuint: function (pos) {
                if ((pos /= 0.5) < 1) {
                    return 0.5 * Math.pow(pos, 5);
                }
                return 0.5 * (Math.pow((pos - 2), 5) + 2);
            }
        };

    // add animation loop
    function tick() {
        currentTime += 1 / 60;
        var p = currentTime / time;
        var t = easingEquations[easing](p);
        if (p < 1) {
            requestAnimFrame(tick);
            window.scrollTo(scrollX + ((scrollTargetX - scrollX) * t), 0);
        } else {
            window.scrollTo(scrollTargetX, 0);
        }
    }

    // call it once to get started
    tick();
}
