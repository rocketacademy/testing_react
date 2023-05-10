import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import Button from "../Components/Button";

describe("Button", () => {
  it("should call onClick when clicked", () => {
    render(<Button />);
    const button = screen.getByText("Click me");
    expect(screen.getByText("Please click above")).toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.queryByText("Please click above")).not.toBeInTheDocument();
    expect(screen.getByText("Clicked = 1")).toBeInTheDocument();
  });
});
