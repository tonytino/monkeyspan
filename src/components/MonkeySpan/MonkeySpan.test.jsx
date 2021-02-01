import React from "react";
import { render, screen } from "@testing-library/react";
import MonkeySpan, { MONKEYSPAN_DEFAULTS } from ".";

describe("<MonkeySpan />", () => {
  it("renders with defaults exported", () => {
    render(<MonkeySpan />);

    const monkey = screen.getByRole("img");

    expect(monkey).toHaveTextContent(MONKEYSPAN_DEFAULTS.children);
    expect(monkey).toHaveAttribute("aria-label", MONKEYSPAN_DEFAULTS.label);
  });
});
