const Form = ({ active }) => {
    return (
        <div className={`formBx ${active ? 'active' : ''}`}>
            <div className="form signinForm">
                <form>
                    <h3>Sign In</h3>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <input type="submit" value="Login" />
                    <p className="forgot">Forgot password</p>
                </form>
            </div>

            <div className={`form signupForm `}>
                <form>
                    <h3>Sign Up</h3>
                    <input type="text" placeholder="Username" />
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confirm" />
                    <input type="submit" value="Register" />
                </form>
            </div>
        </div>
    );
}

export default Form;