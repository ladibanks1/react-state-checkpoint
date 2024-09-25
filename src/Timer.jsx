import React, { Component } from "react";
class toLocaleTimeString extends Component {
  state = {
    person: {
      fullName: "John Doe",
      bio: "I'm a actor that act lots of movies",
      imgSrc: "https://",
      profession: "Actor",
    },
    show: false,
    time: new Date().toLocaleTimeString(),
    interval:  null
  };

  showProfile = () => {
    this.setState({
      show: !this.state.show
    });
  };
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({time : new Date().toLocaleTimeString()})
    }, 1000);
  }
  componentWillUnmount(){
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h1>Current Time: : {this.state.time}</h1>
        <div>
          <p>{this.state.show ? this.state.person.fullName : ""}</p>
          <p>{this.state.show ? this.state.person.bio : ""}</p>
          <p>{this.state.show ? this.state.person.profession : ""}</p>
          <p>{this.state.show ? <img src={this.state.person.imgSrc} alt="My Pics"/> : ""}</p>
        </div>
        <button onClick={this.showProfile}>{this.state.show ? "Hide Profile" : "Show Profile"}</button>
      </div>
    );
  }
}
export default toLocaleTimeString;
