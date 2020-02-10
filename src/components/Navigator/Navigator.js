import React from "react";
import { Button } from "semantic-ui-react";
import "./Navigator.css";

const Navigator = () => (
  <div className="Navigator">
    <Button
      color="teal"
      content="Previous"
      icon="left arrow"
      labelPosition="left"
      className="Navigate-left-button"
    />
    <div className="Navigate-page-num">1</div>
    <Button
      color="teal"
      content="Next"
      icon="right arrow"
      labelPosition="right"
      className="Navigate-right-button"
    />
  </div>
);

export default Navigator;
