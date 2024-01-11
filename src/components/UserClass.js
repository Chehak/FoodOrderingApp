import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
      userInfo: {
        type: "Dummy",
        company: "Dummy",
      },
    };
    console.log("child constructor");
    // console.log(this.props.name);
  }

  async componentDidMount() {
    console.log("component did mount");
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("Component is updated");
  }

  componentWillUnmount() {
    console.log("Component will mount called");
  }

  render() {
    console.log("child render");
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    const { type, company } = this.state.userInfo;
    return (
      <div>
        <h2>Count:{count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase count by 1
        </button>
        <h2>Count:{count2}</h2>
        <h1>{name}</h1>
        <p>{location}</p>
        <p>{type}</p>
        <p>{company}</p>
      </div>
    );
  }
}

export default UserClass;
