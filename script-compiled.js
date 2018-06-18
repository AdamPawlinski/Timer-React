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
      this.setState.running = true;
      this.watch = setInterval(() => this.step(), 10);
    }
  }

  stop() {
    this.setState.running = false;
    clearInterval(this.watch);
  }

  step() {
    if (!this.state.running) return;
    this.calculate();
  }

  calculate() {
    this.setState.time.miliseconds += 1;
    if (this.state.time.miliseconds >= 100) {
      this.setState.time.seconds += 1;
      this.setState.time.miliseconds = 0;
    }
    if (this.state.time.seconds >= 60) {
      this.setState.time.minutes += 1;
      this.setState.time.seconds = 0;
    }
  }

  render() {
    return React.createElement(
      "div",
      { className: "watch" },
      React.createElement(
        "div",
        { className: "controls" },
        React.createElement(
          "a",
          { href: "#", className: "button", onClick: this.start.bind(this) },
          "Start"
        ),
        React.createElement(
          "a",
          { href: "#", className: "button", onClick: this.stop.bind(this) },
          "Stop"
        )
      ),
      React.createElement(
        "div",
        { className: "stopwatch" },
        React.createElement(
          "span",
          { className: "time" },
          "MM:SS:MM"
        ),
        React.createElement(
          "div",
          null,
          pad0(this.state.time.minutes),
          ":",
          pad0(this.state.time.seconds),
          ":",
          pad0(Math.floor(this.state.time.miliseconds))
        )
      )
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
