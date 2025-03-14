import User from "./User";
import UserClass from "./UserClass";
import React from "react";

// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       {/* <User /> */}
//       <UserClass name={"Ranjith Satla"} location={"Hyderabad"} />
//     </div>
//   );
// };

class About extends React.Component {
  constructor() {
    super();
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent ComponentDidMount");
  }

  render() {
    console.log("Parent Render");

    return (
      <div>
        <h1>About Us</h1>
        <UserClass name={"First"} location={"Hyderabad"} />
      </div>
    );
  }
}
export default About;
