import PropTypes from 'prop-types'

function UserGreeting(props){

    const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>

    const loginPrompt = <h2 className="login-prompt">Please log in to continue</h2>
    return (props.isLoggedIn ? welcomeMessage : loginPrompt)
}

UserGreeting.PropTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: true,
    username: "Bem-vindo usuário",
}

export default UserGreeting