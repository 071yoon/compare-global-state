import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders state management link", () => {
  render(<App />);
  const linkElement = screen.getByText(
    /Compare all react state management tools/i
  );
  expect(linkElement).toBeInTheDocument();
});
