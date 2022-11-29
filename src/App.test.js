import {
  getAllByRole,
  getByRole,
  render,
  screen,
} from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("image should be visible", () => {
  render(<App />);
  const imgElement = screen.getByAltText(/Logo/i);
  expect(imgElement).toBeInTheDocument();
});

test("renders 3 list items", () => {
  render(<App />);
  const listitems = screen.getAllByRole("listitem");

  expect(listitems.length).toBe(3);
});
