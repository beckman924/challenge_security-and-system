import React from "react";

import { render } from "@testing-library/react";
import Header from "@components/Header/Header";

test("Header renders with correct class name", () => {
  const { getByRole } = render(<Header />);
  const headerElement = getByRole("banner");

  expect(headerElement).toHaveClass("header");
});

test("Header renders with correct username", () => {
  const { getByText } = render(<Header />);
  const usernameElement = getByText("Braian Carabajal");

  expect(usernameElement).toBeInTheDocument();
});

test("Image component renders with correct props", () => {
  const { getByRole } = render(<Header />);
  const imageElement = getByRole("img");
  const expectedSrc = expect.stringMatching("%2FBraian.webp");

  expect(imageElement).toHaveAttribute("src", expectedSrc);
  expect(imageElement).toHaveAttribute("alt", "Imagen de perfil");
  expect(imageElement).toHaveClass("profileImage");
  expect(imageElement).toHaveAttribute("width", "50");
  expect(imageElement).toHaveAttribute("height", "50");
});
