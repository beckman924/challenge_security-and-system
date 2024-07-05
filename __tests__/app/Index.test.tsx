import React from "react";

import { render, screen } from "@testing-library/react";

import MockIntersectionObserver from "../../__mocks__/intersectionObserverMock";
import MainWrapper from "@components/Main/MainWrapper";

describe("MainWrapper", () => {
  it("renders About, Interests, and Contact sections", () => {
    window.IntersectionObserver = MockIntersectionObserver;
    render(<MainWrapper />);
    expect(
      screen.getByRole("heading", { level: 2, name: /Sobre mí/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: /Intereses/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: /Contacto/i })
    ).toBeInTheDocument();
  });
});
