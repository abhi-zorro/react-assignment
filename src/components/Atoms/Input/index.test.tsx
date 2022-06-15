import { Close } from "@mui/icons-material";
import { render, screen } from "@testing-library/react";
import SearchIcon from "@mui/icons-material/Search";
import Input from ".";

describe("Input", () => {
  test("Renders Input field", () => {
    render(
      <Input
        startIcon={<SearchIcon />}
        endIcon={<Close />}
        data-testid="input"
      />
    );
    expect(screen.getByTestId("input")).toBeInTheDocument();
  });
});
