import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "dummy",
        location: "dummy",
      },
    };
    console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + "Child ComponentDidMount");
    const data = await fetch("https://api.github.com/users/ranjith");
    const response = await data.json();
    this.setState({ user: response });
  }

  componentDidUpdate() {
    console.log(this.props.name + "Child ComponentDidUpdate");
    // Reference setInterval with this. this is shared between all lifecycle methods
    this.timer = setInterval(() => {
      console.log("Interval");
    }, 1000);
  }

  componentWillUnmount() {
    console.log(this.props.name + "Child ComponentWillUnmount");
    clearInterval(this.timer);
  }

  render() {
    const { name, location } = this.state.user;
    // const { location } = this.props;
    console.log(this.props.name + "Child Render");

    return (
      <div className="usercard">
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : @ranjithsatla327</h4>
      </div>
    );
  }
}

export default UserClass;
