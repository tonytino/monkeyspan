import React from "react";
import PropTypes from "prop-types";

export const MONKEYSPAN_DEFAULTS = {
  ariaLabel: "A Monkey Emoji",
  children: "🐒",
  role: "img",
};

function MonkeySpan(props) {
  const {
    ariaLabel = MONKEYSPAN_DEFAULTS.ariaLabel,
    children = MONKEYSPAN_DEFAULTS.children,
    role = MONKEYSPAN_DEFAULTS.role,
  } = props;

  return (
    <span role={role} aria-label={ariaLabel} {...props}>
      {children}
    </span>
  );
}

MonkeySpan.propTypes = {
  /**
   * The aria-label to pass through to describe your emoji
   */
  ariaLabel: PropTypes.string,
  /**
   * The emoji to render
   */
  children: PropTypes.node,
  /**
   * The aria role (not recommended to change from "img")
   */
  role: PropTypes.string,
};

MonkeySpan.defaultProps = {
  ariaLabel: MONKEYSPAN_DEFAULTS.ariaLabel,
  children: MONKEYSPAN_DEFAULTS.children,
  role: MONKEYSPAN_DEFAULTS.role,
};

export default MonkeySpan;
