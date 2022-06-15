import { render, screen } from "@testing-library/react";
import Nav from ".";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SearchIcon from "@mui/icons-material/Search";

describe("Nav", () => {
  test("render the nav molecule", () => {
    render(<Nav />);
    expect(screen.getByTestId("nav")).toBeInTheDocument();
  });
});

describe("Nav with left Icon", () => {
  test("Nav with left icon", () => {
    render(
      <Nav
        label="nav"
        leftIcon={<CheckCircleIcon data-testid="check-icon" />}
      />
    );
    expect(screen.getByTestId("nav")).toBeInTheDocument();
    expect(screen.getByTestId("check-icon")).toBeInTheDocument();
  });
});

describe("Nav with left and Right Icon", () => {
  test("Render nav with left & right icon", () => {
    render(
      <Nav
        data-testid="nav"
        leftIcon={<CheckCircleIcon data-testid="check-icon" />}
        rightIcon={<SearchIcon data-testid="search-icon" />}
      />
    );
    expect(screen.getByTestId("nav")).toBeInTheDocument();
    expect(screen.getByTestId("search-icon")).toBeInTheDocument();
    expect(screen.getByTestId("check-icon")).toBeInTheDocument();
  });
});
