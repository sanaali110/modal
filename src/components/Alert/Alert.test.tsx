import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Alert from "./Alert";
import userEvent from "@testing-library/user-event";

describe("testing alert component", () => {
  test("render alert", async () => {
    const { container } = render(<Alert text={"alert me"} />);
    expect(container).toMatchSnapshot(); // advanced - snapshot testing

    expect(screen.getByText("alert me")).toBeInTheDocument();
    expect(screen.getByText("OK")).toBeInTheDocument();
    expect(screen.getByText("Cancel")).toBeInTheDocument();

    expect(screen.getByText("0")).toBeInTheDocument();
    expect(await screen.findByText("1")).toBeInTheDocument(); // it will wait for the next re-render of the component
    // that will change the value of 0 to 1 - of count state
    // the maximum wait time for this findByText method if 5sec/5000ms

    expect(screen.getByText("Not Submitted")).toBeInTheDocument();
    userEvent.click(screen.getByText("OK")); // this will simulate the click action of user on OK button
    expect(await screen.findByText("Submitted")).toBeInTheDocument();
  });
});
