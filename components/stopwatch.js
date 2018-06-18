class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 0,
      seconds: 0,
      miliseconds: 0,
      running: false
    };
  }

  start() {
    if (!this.state.running) {
      this.setState({running: true});
      this.watch = setInterval(() => this.step(), 10);
    }
  }

  stop() {
    this.setState({running: false});
    clearInterval(this.watch);
  }

  step() {
    if (!this.state.running) return;
    this.calculate();
  }

  calculate() {
    this.setState.miliseconds += 1;
    if (this.state.miliseconds >= 100) {
      this.setState.seconds += 1;
      this.setState.miliseconds = 0;
    }
    if (this.state.seconds >= 60) {
      this.setState.minutes += 1;
      this.setState.seconds = 0;
    }
  }

  render() {
    return (
      <div className="watch">
        <div className="controls">
          <a href="#" className="button" onClick={this.start.bind(this)} >Start</a>
          <a href="#" className="button" onClick={this.stop.bind(this)} >Stop</a>
        </div>
        <div className="stopwatch">
          <span className="time">MM:SS:MM</span>
          <div>{pad0(this.state.minutes)}:{pad0(this.state.seconds)}:{pad0(Math.floor(this.state.miliseconds))}</div>
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
