import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
    };
    console.log(this.props.name + "Child Constructor");
  }

  componentDidMount() {
    console.log(this.props.name + "Child ComponentDidMount");
  }

  render() {
    const { location } = this.props;
    console.log(this.props.name + "Child Render");

    return (
      <div className="usercard">
        <h2>Name : {this.props.name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : @ranjithsatla327</h4>
        <h4>Count : {this.state.count}</h4>
        <h4>Count2:{this.state.count2}</h4>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 2,
            });
          }}
        >
          Inc Count
        </button>
      </div>
    );
  }
}

export default UserClass;
