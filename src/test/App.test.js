import { render } from "@testing-library/react";
import App from "../App";
import Header from "../components/layout/Header";

describe("Testing", () => {
  test("renders content", async () => {
    const comp = render(<App />);
    console.log(comp);
    // const res = comp.getByText("HOME");
    // expect(res).toBeInTheDocument();
  });
});
