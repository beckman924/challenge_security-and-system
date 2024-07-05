import React from "react";

import { render, screen } from "@testing-library/react";
import Interests from "@components/Interests/Interests";
import MockIntersectionObserver from "../../__mocks__/intersectionObserverMock";

test("IntersectionObserver is created and container is observed", () => {
  window.IntersectionObserver = MockIntersectionObserver;
  render(<Interests />);
  const container = screen.getByTestId("interests-container");
  expect(container).toBeInTheDocument();
});

test("Items have fadeIn class added after a delay", () => {
  render(<Interests />);
  const items = screen.getAllByTestId("interest-item");
  items.forEach((item, index) => {
    setTimeout(() => {
      expect(item).toHaveClass("fadeIn");
    }, index * 450);
  });
});
