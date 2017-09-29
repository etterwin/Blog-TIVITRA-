var waveBtn = (function () {
    'use strict';
    var btn = document.querySelectorAll('.wave'),i;

    for(i = 0; i < btn.length; i++) {
        btn[i].onmousedown = function (e) {
            var newRound = document.createElement('div'),x,y;

            newRound.className = 'cercle';
            this.appendChild(newRound);

            x = e.pageX - this.offsetLeft;
            y = e.pageY - this.offsetTop;

            newRound.style.left = x + "px";
            newRound.style.top = y + "px";
            newRound.className += " anim";

            setTimeout(function() {
                newRound.remove();
            }, 1500);
        };
    }
}());