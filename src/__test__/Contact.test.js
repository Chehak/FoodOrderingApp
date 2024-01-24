import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

test("should check if contact component is loaded or not", () => {
  //render something
  render(<Contact />);
  //query something
  const heading = screen.getByRole("heading");
  //assert something
  expect(heading).toBeInTheDocument();
});

test("should contain a submit button", () => {
  render(<Contact />);
  const findButton = screen.getByRole("button");
  expect(findButton).toBeInTheDocument();
});

test("should contain a button with text send", () => {
  render(<Contact />);
  const findButtonByText = screen.getByText("Send");
  expect(findButtonByText).toBeInTheDocument();
});

test("should load two input boxes in contact component", () => {
  render(<Contact />);
  const inputBoxes = screen.getAllByRole("textbox");
  // console.log(inputBoxes.length);
  expect(inputBoxes.length).toBe(2);
});
