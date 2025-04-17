import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

test("displays a top-level heading with the text `Hi, I'm _______`", () => {

    render(<App />);
  
    const topLevelHeading = screen.getByRole("heading", {
      name: /hi, i'm/i,
      exact: false,
      level: 1,
    });
  
    expect(topLevelHeading).toBeInTheDocument();
  });

  test("displays an image with alt text describing the content", () => {
    render(<App />);
    const image = screen.getByAltText(/image of/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src");
  });

  test("displays a second-level heading with the text 'About Me'", () => {
    render(<App />);
    const aboutHeading = screen.getByRole("heading", {
      name: /about me/i,
      level: 2,
    });
    expect(aboutHeading).toBeInTheDocument();
  });

  test("displays a paragraph with a short biography", () => {
    render(<App />);
    const bio = screen.getByText(/i am a/i, { exact: false });
    expect(bio).toBeInTheDocument();
  });

  test("displays a link to GitHub", () => {
    render(<App />);
    const githubLink = screen.getByRole("link", { name: /github/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute("href", "https://github.com/yourusername");
  });
  
  test("displays a link to LinkedIn", () => {
    render(<App />);
    const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute("href", "https://linkedin.com/in/yourusername");
  });
  
