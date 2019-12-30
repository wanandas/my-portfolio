import React from "react";
import "./title.styles.scss";

class Title extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <h2 className="title">{this.props.title}</h2>;
  }
}

export default Title;
