import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

test('should load conatact us component', () => { 
   render(<Contact/>);
  let heading= screen.getByRole("heading");
 
  expect(heading).toBeInTheDocument()
  
 })

 test('should load input  component', () => { 
    render(<Contact/>);
    let placeholdertext=screen.getByPlaceholderText("name");
    expect(placeholdertext).toBeInTheDocument()
  })