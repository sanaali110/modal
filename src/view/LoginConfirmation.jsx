const LoginConfirmation = ({onCancel}) => {
    return (<div>
        <p>Are you sure?</p>
        <button className='button login-button'>Yes</button>
        <button className='button' onClick={onCancel}>No</button>
    </div>)
}

export default LoginConfirmation