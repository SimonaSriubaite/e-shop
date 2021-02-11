import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Button.scss";

const Button = (props) => (
  <button
    className={classNames(
      "button",
      `button--${props.type}`,
      props.buttonClassNames
    )}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string,
  buttonClassNames: PropTypes.string,
};

export default Button;
