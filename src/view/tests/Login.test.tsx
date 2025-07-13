import { render, screen } from "@testing-library/react"
import Login from "../Login"
import { ModalContext } from "../../App";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
// import App from "../../index"

const mockOnCancel = jest.fn();
const mockOnLogin = jest.fn();
const mockOnSignUp = jest.fn()
const mockSetModalContent = jest.fn()

// This will not be a test for login it will become a test for your whole app. 
// const renderApp = () => {
//     return render(<App />)
// }


const renderLogin = () => {
    return render(
        <BrowserRouter>
            <ModalContext.Provider value={mockSetModalContent}>
                <Login onCancel={mockOnCancel} onLogin={mockOnLogin} onSignup={mockOnSignUp} />
            </ModalContext.Provider>
        </BrowserRouter>
    )
}

describe("login component", () => {
    test("should render properly", () => {
        renderLogin()

        expect(screen.getByTestId('email')).toBeInTheDocument()
        expect(screen.getByTestId('password')).toBeInTheDocument()
    })

    test("should simulate oncancel click", () => {
        renderLogin()

        expect(screen.getByTestId('email')).toBeInTheDocument()
        expect(screen.getByTestId('password')).toBeInTheDocument()
    })
})