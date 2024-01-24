import { MOCK_DATA } from "../mocks/resturantCard";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ResturantCard, { withPromotedLabel } from "../components/ResturantCard";

it("should render resturand card component", () => {
  render(<ResturantCard resObj={MOCK_DATA} />);

  const name = screen.getByText("Domino's Pizza");

  expect(name).toBeInTheDocument();
});

it("should render resturand card component with isopen label", () => {
  const WrappeedComponent = withPromotedLabel(ResturantCard);
  render(<WrappeedComponent isOpen={true} resObj={MOCK_DATA} />);

  const open = screen.getByText("Open");

  expect(open).toBeInTheDocument();
});
