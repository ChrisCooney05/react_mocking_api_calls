import React, { Compornent } from "react";
import { screen, render, waitFor } from "@testing-library/react";

import Header from "./Header";

test("Renders my name on the screen from api call", async () => {
  render(<Header />);
  const myName = await waitFor(screen.getByText("Chris Cooney"));
  expect(myName).toBeInTheDocument();
});
