import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ResMenu from "../components/ResturantMenu";
import MOCK_DATA from "../mocks/resMenuMock.json";
import { act } from "react-dom/test-utils";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

test("test if restraunt menu is render", async () => {
  await act(async () => render(<ResMenu />));

  //   const resHeading = screen.getByText("WINTER SPECIAL (5)");
  //   console.log(resHeading);
});
