import { fireEvent, render,screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux";
import Appstore from "../../utility/Appstore";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom'

test("This is an test for the header component",()=>{
    
    render(
        <BrowserRouter>
        <Provider store={Appstore}>
        <Header/>
        </Provider>
        </BrowserRouter>
        );
        const loginbutton=screen.getByRole("button");
        expect(loginbutton).toBeInTheDocument()
})

test("This is an test for the login component",()=>{
    
    render(
        <BrowserRouter>
        <Provider store={Appstore}>
        <Header/>
        </Provider>
        </BrowserRouter>
        );
        const loginbutton=screen.getByRole("button",{name:"Login"});
        fireEvent.click(loginbutton);
        const logoutbutton=screen.getByRole("button",{name:"Logout"})
        expect(logoutbutton).toBeInTheDocument()
})