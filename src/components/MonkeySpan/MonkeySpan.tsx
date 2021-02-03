import React from 'react';

export const MONKEYSPAN_DEFAULTS = {
  children: '🐒',
  label: 'A Monkey Emoji',
  role: 'img',
};

export interface MonkeySpanProps {
  /**
   * The emoji to render
   */
  children?: React.ReactNode;
  /**
   * The aria-label to pass through to describe your emoji
   */
  label?: string;
  /**
   * The aria role (not recommended to change from "img")
   */
  role?: string;
}

function MonkeySpan(props: MonkeySpanProps): JSX.Element {
  const { children, label, role } = props;

  return (
    <span {...props} aria-label={label} role={role}>
      {children}
    </span>
  );
}

MonkeySpan.defaultProps = {
  children: MONKEYSPAN_DEFAULTS.children,
  label: MONKEYSPAN_DEFAULTS.label,
  role: MONKEYSPAN_DEFAULTS.role,
};

export default MonkeySpan;
