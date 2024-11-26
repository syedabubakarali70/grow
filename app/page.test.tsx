import { render, screen } from "@testing-library/react"
import Web from "./page"

describe("Web Component", () => {
  it("renders the title", () => {
    render(<Web />)

    // Check if the title is rendered
    const titleElement = screen.getByRole("heading", { name: /Nest Grow Project/i })
    expect(titleElement).toBeInTheDocument()
  })
})
