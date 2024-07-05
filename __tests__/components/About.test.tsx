import React from "react";

import { render, screen } from "@testing-library/react";
import About from "@components/About/About";

describe("About component", () => {
  it("renders the title", () => {
    render(<About />);
    const titleElement = screen.getByText(/Sobre mí/i);
    expect(titleElement).toBeInTheDocument();
  });

  it("renders the description section", () => {
    render(<About />);
    const descriptionElement = screen.getByText(
      /Desarrollador Front-end Enfocado en Desafíos Tecnológicos 💡/i
    );
    expect(descriptionElement).toBeInTheDocument();
  });

  it("renders the 'Lo que Ofrezco' section", () => {
    render(<About />);
    const offeringsElement = screen.getByText(/Lo que Ofrezco:/i);
    expect(offeringsElement).toBeInTheDocument();
  });

  it("renders the list of offerings", () => {
    render(<About />);
    const offeringsList = screen.getByRole("list");
    const offerings = [
      "Desarrollo eficiente en ECMAScript 6, React, y Next.js.",
      "Experiencia sólida en la gestión del estado con Redux y en la creación de aplicaciones escalables.",
    ];
    offerings.forEach((offering) => {
      expect(offeringsList).toHaveTextContent(offering);
    });
  });

  it("renders the 'Tecnologías que Manejo' section", () => {
    render(<About />);
    const technologiesElement = screen.getByText(/Tecnologías que Manejo:/i);
    expect(technologiesElement).toBeInTheDocument();
  });

  it("renders the list of technologies", () => {
    render(<About />);
    const technologiesList = screen.getByRole("list");
    const technologies = ["ECMAScript 6", "React", "Next.js", "Redux"];
    technologies.forEach((technology) => {
      expect(technologiesList).toHaveTextContent(technology);
    });
  });

  it("renders the 'Contacto' section", () => {
    render(<About />);
    const contactElement = screen.getByText(/Contacto:/i);
    expect(contactElement).toBeInTheDocument();
  });

  it("renders the contact links", () => {
    render(<About />);
    const emailLink = screen.getByText(/Email:/i);
    expect(emailLink).toHaveAttribute("href", "mailto:braiancarabajal@gmail");
    const githubLink = screen.getByText(/Github:/i);
    expect(githubLink).toHaveAttribute("href", "https://github.com/beckman924");
    const portfolioLink = screen.getByText(/Portfolio:/i);
    expect(portfolioLink).toHaveAttribute(
      "href",
      "https://beckmandev.vercel.app"
    );
  });

  it("renders the closing message", () => {
    render(<About />);
    const closingMessage = screen.getByText(
      /¡Estoy emocionado por nuevas oportunidades y desafíos! ¡Contáctame para explorar cómo puedo aportar a tu equipo! 🚀👨‍💻/i
    );
    expect(closingMessage).toBeInTheDocument();
  });
});
