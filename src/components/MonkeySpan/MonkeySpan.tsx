import React, { HTMLAttributes } from 'react';
import './MonkeySpan.css';
import styles from './MonkeySpan.module.css';

export const MonkeySpanDefaults = {
  children: '🐒',
  label: 'A Monkey Emoji',
  passthrough: {},
  role: 'img',
  scale: 1,
  spinmoji: undefined,
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
   * Properties to spread on the root element
   */
  passthrough?: HTMLAttributes<HTMLSpanElement>;
  /**
   * The aria role (not recommended to change from "img")
   */
  role?: string;
  /**
   * What rem amount to apply for font-size
   */
  scale?: number;
  /**
   * Ability to apply a spin to the emoji
   */
  spinmoji?: 'fast' | 'fast-reverse' | 'slow' | 'slow-reverse';
}

function MonkeySpan(props: MonkeySpanProps): JSX.Element {
  const { children, label, passthrough, role, scale, spinmoji } = props;
  const style = { fontSize: `${scale}rem` };

  return (
    <span
      aria-label={label}
      className={`${styles.spinmoji} spinmoji-${spinmoji}`}
      role={role}
      style={style}
      {...passthrough}
    >
      {children}
    </span>
  );
}

MonkeySpan.defaultProps = {
  children: MonkeySpanDefaults.children,
  label: MonkeySpanDefaults.label,
  passthrough: MonkeySpanDefaults.passthrough,
  role: MonkeySpanDefaults.role,
  scale: MonkeySpanDefaults.scale,
  spinmoji: MonkeySpanDefaults.spinmoji,
};

export default MonkeySpan;
