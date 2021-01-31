import React from "react";
import PropTypes from "prop-types";

export const EMOJISPAN_DEFAULTS = {
  ariaLabel: "an emoji",
  children: "🐒",
  role: "img",
};

function EmojiSpan(props) {
  const {
    ariaLabel = EMOJISPAN_DEFAULTS.ariaLabel,
    children = EMOJISPAN_DEFAULTS.children,
    role = EMOJISPAN_DEFAULTS.role,
  } = props;

  return (
    <span role={role} aria-label={ariaLabel} {...props}>
      {children}
    </span>
  );
}

EmojiSpan.propTypes = {
  ariaLabel: PropTypes.string,
  children: PropTypes.node,
  role: PropTypes.string,
};

export default EmojiSpan;
