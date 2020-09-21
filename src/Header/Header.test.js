import React, { Compornent } from "react";
import { screen, render, waitForElement } from "@testing-library/react";
import Header from "./Header";
import mockResponse from "../__mocks__/github_response.json";

// mock fetch and return the mock response json
global.fetch = jest.fn().mockImplementation(() => {
  return Promise.resolve({
    json: () => Promise.resolve(mockResponse),
  });
});

test("Renders my name on the screen from api call", async () => {
  render(<Header />);
  const myName = await waitForElement(() => screen.getByText("Chris Cooney"));
  //Should use waitFor instead of waitForElement but it requires updating testing libraries
  expect(myName).toBeInTheDocument();
});
