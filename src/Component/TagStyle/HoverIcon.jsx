import React, { useState } from "react";
import PropTypes from "prop-types";
import IcomoonReact from "icomoon-react";
import iconSet from "../../selection.json";

const HoverIcon = props => {
  const { color, size, icon, className } = props;
  const [isHover, setIsHover] = useState(false)

  const handleOnMoseOver = () => {
    setIsHover(true)
  }

  const handleOnMouseLeave = () => {
    setIsHover(false)
  }
  return (
    <IcomoonReact
      onMouseOver={handleOnMoseOver}
      onMouseLeave={handleOnMouseLeave}
      className={className}
      iconSet={iconSet}
      color={isHover ? "#ffffff" : "#858896"}
      size={size}
      icon={icon}
    />
  );
};

HoverIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

HoverIcon.defaultProps = {
  className: "",
  color: "",
  size: "100%"
};

export default HoverIcon;