import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";
import Contact from "@components/Contact/Contact";

describe("Contact component", () => {
  test("renders the contact form", () => {
    render(<Contact />);
    const form = screen.getByTestId("contact-form");
    expect(form).toBeInTheDocument();
  });

  test("renders the contact form with the correct labels and inputs", () => {
    render(<Contact />);
    const nameInput = screen.getByLabelText("Nombre:");
    const emailInput = screen.getByLabelText("Email:");
    const messageInput = screen.getByLabelText("Mensaje:");
    const submitButton = screen.getByRole("button", { name: "Enviar" });
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test("updates the name state when the form is submitted", () => {
    render(<Contact />);
    const nameInput = screen.getByLabelText("Nombre:");
    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    const submitButton = screen.getByRole("button", { name: "Enviar" });
    fireEvent.submit(submitButton);
    expect(
      screen.getByText("Mensaje enviado, gracias por contactarme,")
    ).toBeInTheDocument();
    expect(screen.getByText("John Doe!")).toBeInTheDocument();
  });
});
