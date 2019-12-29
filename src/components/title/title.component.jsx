import React from "react";
import "./title.styles.scss";

class Title extends React.Component {
  render() {
    return (
      <h2 className="title" id={this.props.id}>
        {this.props.title}
      </h2>
    );
  }
}

export default Title;
