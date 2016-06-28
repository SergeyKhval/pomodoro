'use strict';

const _interval = new WeakMap();

export class MainController {
  constructor($interval) {
    _interval.set(this, $interval);

    this.minLeft = 25;
    this.timeLeft = 1000 * 60 * this.minLeft; //25 minutes
    this.timerStarted = false;
  }

  toggleTimer() {
    if (this.timerStarted) {
      this.stopTimer();
    } else {
      this.startTimer();
    }

    this.timerStarted = !this.timerStarted;
  }

  stopTimer() {
    _interval.get(this).cancel(this.timer)
  }

  startTimer() {
    if (!this.timerStarted) {
      this.timer = _interval.get(this)(() => {
        this.timeLeft = this.timeLeft >= 1000 ? this.timeLeft - 1000 : 0;
        if (this.timeLeft <= 0) {
          _interval.get(this).cancel(this.timer);
        }
      }, 1000)
    }
  }

  resetTimer() {
    this.minLeft = 25;
    this.timeLeft = 1000 * 60 * this.minLeft;
  }
}

MainController.$inject = ['$interval'];
