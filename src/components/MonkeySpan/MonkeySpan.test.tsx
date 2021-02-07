import React from 'react';
import { render, screen } from '@testing-library/react';
import MonkeySpan, { MonkeySpanDefaults } from './index';

describe('<MonkeySpan />', () => {
  it('renders with defaults exported', () => {
    render(<MonkeySpan />);

    const emoji = screen.getByText(MonkeySpanDefaults.children);

    expect(emoji).toHaveAttribute('aria-label', MonkeySpanDefaults.label);
    expect(emoji).toHaveAttribute('role', MonkeySpanDefaults.role);
  });

  it('props: passthrough - applies html span element attributes provided', () => {
    render(<MonkeySpan passthrough={{ 'aria-labelledby': 'example' }} />);

    const emoji = screen.getByText(MonkeySpanDefaults.children);

    expect(emoji).toHaveAttribute('aria-labelledby', 'example');
  });

  it('props: scale - applies font-size of rem equal to number passed', () => {
    render(<MonkeySpan scale={5} />);

    const emoji = screen.getByText(MonkeySpanDefaults.children);

    expect(emoji).toHaveStyle('font-size: 5rem');
  });

  describe('prop: spinmoji', () => {
    const options = ['fast', 'fast-reverse', 'slow', 'slow-reverse'];
    options.forEach((option) => {
      it(`props: spinmoji - '${option}' applies the corresponding class name`, () => {
        // @ts-expect-error TS doesn't see these are valid spinmoji options
        render(<MonkeySpan spinmoji={option} />);

        const emoji = screen.getByText(MonkeySpanDefaults.children);

        expect(emoji).toHaveClass(`spinmoji-${option}`);
      });
    });
  });
});
