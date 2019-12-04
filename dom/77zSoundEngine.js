//This audio engine was customized for this projects needs

//77Z™ (TM)

function se77z() {
    const se = {};

    var audio;

    se.startTrack = function(src, loop) {
        audio = new Audio(src);
        audio.play();
        if (loop) {
            audio.loop = true;
        }
        this.log('Track: ' + src + ' Is loaded and playing');
    };
    se.pause = function() {
        audio.pause();
    };
    se.isPaused = function() {
        return audio.paused();
    };
    se.log = function(msg) {
        console.log(`%c[77Z Audio Engine] %c${msg}`, 'color: violet', 'color: normal');
    }
    return se;
}