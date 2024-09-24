import React from "react";
import { render, screen } from "@testing-library/react";
import KeyMetrics from "../KeyMetrics";
import { convertCamelCaseToLabel, formatCount } from "../../utils/display";
import { keyMetrics } from "../../data/data";

jest.mock("../../utils/display", () => ({
  convertCamelCaseToLabel: jest.fn(),
  formatCount: jest.fn(),
}));

describe("KeyMetrics Component", () => {
  beforeEach(() => {
    (convertCamelCaseToLabel as jest.Mock).mockImplementation((key) => key.replace(/([A-Z])/g, ' $1').toLowerCase());
    (formatCount as jest.Mock).mockImplementation((count) => `${count}+`);
  });

  it("renders the metrics correctly", () => {
    render(<KeyMetrics metrics={keyMetrics} />);

    expect(convertCamelCaseToLabel).toHaveBeenCalledWith("totalUsers");
    expect(convertCamelCaseToLabel).toHaveBeenCalledWith("activeUsers");
    expect(convertCamelCaseToLabel).toHaveBeenCalledWith("totalStreams");

    expect(screen.getByText("total users")).toBeInTheDocument();
    expect(screen.getByText("active users")).toBeInTheDocument();

    expect(formatCount).toBeCalledTimes(4);
    expect(formatCount).toHaveBeenCalledWith(120450);
    expect(screen.getByText("120450+")).toBeInTheDocument();
    expect(screen.getByText("56000+")).toBeInTheDocument();
    expect(formatCount).toHaveBeenCalledWith(56000);
    expect(screen.getByText("56000+")).toBeInTheDocument();
  });
});
