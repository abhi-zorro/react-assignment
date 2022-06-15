import { render, screen } from "@testing-library/react";
import Icon from ".";
import CheckIcon from "@mui/icons-material/Check";

describe("Icon", () => {
  test("the Icon atom", () => {
    render(<Icon icon={<CheckIcon data-testid="check-icon" />} />);
    expect(screen.getByTestId("check-icon")).toBeInTheDocument();
  });
});
