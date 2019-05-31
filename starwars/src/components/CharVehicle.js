import React from "react";

class CharVehicle extends React.Component {
  constructor(props) {
    super();
    this.state = {
      link: props.vehicle,
      name: null
    };
  }

  componentDidMount() {
    this.findName(this.state.link);
  }

  findName = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          name: data.name
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <li>
        <span>Name: </span>
        <span>{this.state.name}</span>
      </li>
    );
  }
}

export default CharVehicle;
