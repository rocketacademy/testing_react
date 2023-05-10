import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Button from "../Components/ComplexButton";
import axios from "axios";

jest.mock("axios");
describe("Button", () => {
  it("should call onClick and fetch data when clicked", async () => {
    render(<Button />);
    const button = screen.getByText("Click me");
    fireEvent.click(button);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toBeCalledWith(
      "https://pokeapi.co/api/v2/pokemon/geodude"
    );
  });
});
