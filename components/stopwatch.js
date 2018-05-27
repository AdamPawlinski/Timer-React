class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: {
        minutes: 0,
        seconds: 0,
        miliseconds: 0
      },
      running: false
    };
  }

  start() {
    if (!this.state.running) {
      this.state.running = true;
      this.watch = setInterval(() => this.step(), 10);
    }
  }

  stop() {
    this.state.running = false;
    clearInterval(this.watch);
  }

  step() {
    if (!this.state.running) return;
    this.calculate();
  }

  calculate() {
    this.state.time.miliseconds += 1;
    if (this.state.time.miliseconds >= 100) {
      this.state.time.seconds += 1;
      this.state.time.miliseconds = 0;
    }
    if (this.state.time.seconds >= 60) {
      this.state.time.minutes += 1;
      this.state.time.seconds = 0;
    }
  }

  render() {
    // const styleControls = {
    //   display: 'flex',
    //   justifyContent: 'space-around',
    //   flexDirection: 'row',
    //   marginBottom: '50px'
    // }
    //
    // const styleStopwatch = {
    //   margin: '5px 115px 50px 115px',
    //   textShadow: '3px 3px 3px #000',
    //   border: '1px solid #000',
    //   borderRadius: '5px',
    //   background: '#4c4c4a',
    //   color: '#f9e71d',
    //   padding: '5px'
    // }
    //
    // const styleTime = {
    //   display: 'flex',
    //   justifyContent: 'center',
    //   fontSize: '20px'
    // }
    // //
    // // const styleButton

    return (
      <div className="watch">
        <div className="controls">
          <a href="#" className="button" onClick={this.start} >Start</a>
          <a href="#" className="button" onClick={this.stop} >Stop</a>
        </div>
        <div className="stopwatch">
          <span className="time">MM:SS:MM</span>
          <div>{pad0(this.state.time.minutes)}:{pad0(this.state.time.seconds)}:{pad0(Math.floor(this.state.time.miliseconds))}</div>
        </div>
      </div>
    );
  }
}

function pad0(value) {
  let result = value.toString();
  if (result.length < 2) {
    result = '0' + result;
  }
  return result;
}

let stopwatch = React.createElement(Stopwatch);
ReactDOM.render(stopwatch, document.getElementById('stopwatch'));
