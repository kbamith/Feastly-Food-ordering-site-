import Restrocard from "../Restrocard"
import { render,screen } from "@testing-library/react"
import mockdata from '../Mocks/mockrestaurants.json'
import '@testing-library/jest-dom'

test('Test for the restaurant card', () => { 
  render(<Restrocard resdata={mockdata}/>)
  let title=screen.getByText("McDonald's");
  expect(title).toBeInTheDocument()
 })
