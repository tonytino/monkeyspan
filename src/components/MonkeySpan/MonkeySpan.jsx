import React from "react";
import PropTypes from "prop-types";

export const MONKEYSPAN_DEFAULTS = {
  children: "🐒",
  label: "A Monkey Emoji",
  role: "img",
};

function MonkeySpan(props) {
  const {
    children = MONKEYSPAN_DEFAULTS.children,
    label = MONKEYSPAN_DEFAULTS.label,
    role = MONKEYSPAN_DEFAULTS.role,
  } = props;

  return (
    <span role={role} aria-label={label} {...props}>
      {children}
    </span>
  );
}

MonkeySpan.propTypes = {
  /**
   * The emoji to render
   */
  children: PropTypes.node,
  /**
   * The aria-label to pass through to describe your emoji
   */
  label: PropTypes.string,
  /**
   * The aria role (not recommended to change from "img")
   */
  role: PropTypes.string,
};

MonkeySpan.defaultProps = {
  children: MONKEYSPAN_DEFAULTS.children,
  label: MONKEYSPAN_DEFAULTS.label,
  role: MONKEYSPAN_DEFAULTS.role,
};

export default MonkeySpan;
