import { useContext } from "react"
import { ModalContext } from "../App"
import LoginConfirmation from "./LoginConfirmation"

const Login = ({ onCancel, onLogin }) => {
    const modalContext = useContext(ModalContext)

    const onLoginClick = () => {
        modalContext.setModalContent(
            <LoginConfirmation
              onCancel={() => {
                modalContext.setModalContent(undefined);
                onCancel()
              }}
            />
          );
        onLogin()
    }
    // make and api call
    // fetch("/login") //post call - with request body {username, password}
    return (
        <form>
            <input type="email" className='input-styles' placeholder='type your email' />
            <input type="password" className='input-styles' placeholder='type your password' />
            <button className='button login-button' onClick={onLoginClick}>Login</button>
            <button className='button' onClick={onCancel}>Cancel</button>
        </form>
    )
}

export default Login