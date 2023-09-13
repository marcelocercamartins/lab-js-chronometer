class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        this.currentTime++;
        printTimeCallback(this.currentTime);

        if (this.currentTime === 3) {
          this.stop();
        }
      }, 1000); 
    }
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    return value < 10 ? `0${value}` : `${value}`;
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  reset() {
    this.stop();
    this.currentTime = 0;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }
}


const myChronometer = new Chronometer();

const printTimeCallback = (currentTime) => {
  console.log(`Current Time: ${myChronometer.split()}`);
};

myChronometer.start(printTimeCallback);
