import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import React, { useContext, useEffect } from "react";

// const About = () => {
//   const { loggedInUser } = useContext(UserContext);
//   console.log("About called");
//   useEffect(() => {
//     const timer = setInterval(() => {
//       // console.log("namaste react");
//     }, 1000);
//     return () => {
//       clearInterval(timer);
//     };
//   });
//   return (
//     <div>
//       <h1>{loggedInUser}</h1>
//       <User name={"Chehak (functional)"} location={"Ludhiana (functional)"} />
//       <UserClass />
//     </div>
//   );
// };

class About extends React.Component {
  constructor() {
    super();
    // console.log("parent constructor");
  }

  componentDidMount() {
    // console.log("parent did mount");
  }

  render() {
    // console.log("parent render");
    return (
      <div>
        <div className="font-bold">
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <UserClass name={"Chehak (class)"} location={"Ludhiana (class)"} />
      </div>
    );
  }
}

export default About;
