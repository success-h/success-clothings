/** @format */

import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

import DIRECTORY_DATA from "./directory-data";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: DIRECTORY_DATA,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem title={title} key={id} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
