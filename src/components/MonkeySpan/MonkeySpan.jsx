import React from "react";

export const EMOJISPAN_DEFAULTS = {
  ariaLabel: "a smiling emoji",
  children: "🙂",
  role: "img",
};

function EmojiSpan(props) {
  const {
    ariaLabel = EMOJISPAN_DEFAULTS.ariaLabel,
    children = EMOJISPAN_DEFAULTS.children,
    role = EMOJISPAN_DEFAULTS.role,
  } = props;

  return (
    <span role={role} aria-label={ariaLabel}>
      {children}
    </span>
  );
}

export default EmojiSpan;
