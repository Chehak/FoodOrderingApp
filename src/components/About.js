import User from "./User";
import UserClass from "./UserClass";
import React, { useEffect } from "react";

const About = () => {
  console.log("About called");
  useEffect(() => {
    const timer = setInterval(() => {
      // console.log("namaste react");
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });
  return (
    <div>
      <User name={"Chehak (functional)"} location={"Ludhiana (functional)"} />
      <UserClass />
    </div>
  );
};

// class About extends React.Component {
//   constructor() {
//     super();
//     console.log("parent constructor");
//   }

//   componentDidMount() {
//     console.log("parent did mount");
//   }

//   render() {
//     console.log("parent render");
//     return (
//       <div>
//         {/* <User name={"Chehak (functional)"} location={"Ludhiana (functional)"} /> */}
//         <UserClass name={"Chehak (class)"} location={"Ludhiana (class)"} />
//         <UserClass name={"Chehak (class)"} location={"Ludhiana (class)"} />
//         <UserClass name={"Chehak (class)"} location={"Ludhiana (class)"} />
//       </div>
//     );
//   }
// }

export default About;
