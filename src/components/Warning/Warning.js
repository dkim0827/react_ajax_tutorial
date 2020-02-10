import React, { Component } from "react";
import "./Warning.css";

class Warning extends Component {
  constructor(props) {
    super(props);
    this.state = {
      closing: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.visible && !nextProps.visible) {
      // visible props is changing from true -> false

      this.setState({
        closing: true
      });

      // 1sec after
      setTimeout(() => {
        this.setState({
          closing: false
        });
      }, 1000);
    }
  }

  render() {
    const { message, visible } = this.props;
    const { closing } = this.state;

    if (!visible && !closing) return null;
    return (
      <div className="Warning-wrapper">
        <div
          className={`Warning ${closing ? "bounceOut" : "bounceIn"} animated`}
        >
          {message}
        </div>
      </div>
    );
  }
}

export default Warning;

/*
this component receive message and visible as props
message = error message
visible = set visibility of component

At css why make .Warning-wrapper?
in Animation css it uses transform.
If fadeIn is added to Warning previous transform that helps to place at center
get overwrite therefore
with Warning-wrapper = place at center
Warning = animation

if don't render anything when visible is false cannot add bounceOut animation.
therefore made closing state,
at componentWillReceiveProps
when visible changes from true to false
set closing to true and after 1 sec set back to false

after when both visible && closing value are false don't render
either one of them are true keep render

when render
if closing is true set bounceOut class
else set bounceIn class



*/
