import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Alert from "./Alert";
import userEvent from "@testing-library/user-event";

/*
* Two types of testing - 
* Unit Tests - react testing library
* Integration tests - cypress
*/
// NOTE - the way we write the tests in react tesing library is similar to the way we interact with the application in browser.
// Benefits: 
// 1) Light weight 
// 2) very easy to implement. 
describe("testing alert component", () => {
  // beforeAll
  // afterAll
  // beforeEach
  // afterEach
  beforeAll(() => {
    console.log('will be called once before any tests starts');
  })
  beforeEach(() => {
    console.log('will be called before each test');
  })
  afterEach(() => {
    console.log('will be after running every test');
  })
  afterAll(() => {
    console.log('will be called once after all tests finishes');
  })
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
