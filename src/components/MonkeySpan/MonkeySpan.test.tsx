import React from 'react';
import { render, screen } from '@testing-library/react';
import MonkeySpan, { MONKEYSPAN_DEFAULTS } from './MonkeySpan';

describe('<MonkeySpan />', () => {
  it('renders with defaults exported', () => {
    render(<MonkeySpan />);

    const monkey = screen.getByText('🐒');

    expect(monkey).toHaveTextContent(MONKEYSPAN_DEFAULTS.children);
    expect(monkey).toHaveAttribute('aria-label', MONKEYSPAN_DEFAULTS.label);
  });
});
