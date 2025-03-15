const Login = ({ onCancel, onLogin }) => {
    // make and api call
    // fetch("/login") //post call - with request body {username, password}
    return (
        <form>
            <input type="email" className='input-styles' placeholder='type your email' />
            <input type="password" className='input-styles' placeholder='type your password' />
            <button className='button login-button' onClick={onLogin}>Login</button>
            <button className='button' onClick={onCancel}>Cancel</button>
        </form>
    )
}

export default Login