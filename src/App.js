import { useState } from "react";

import Form from './component/Form';
import "./App.css";

const App = () => {
    const [active, setActive] = useState(false);

    const handleToggle = () => {
        setActive(!active);
    }

    console.log('Render');
    return (
        <div className={`body ${active ? 'active' : ''}`}>
            <div className="container">
                <div className="blueBg">
                    <div className="box signin">
                        <h2>Already have an account</h2>
                        <button
                            className="signinBtn"
                            onClick={handleToggle}
                        >Sign in</button>
                    </div>
                    <div className="box signup">
                        <h2>Don't have an account</h2>
                        <button
                            className="signupBtn"
                            onClick={handleToggle}
                        >Sign up</button>
                    </div>
                </div>

                <Form active={active} />
            </div>
        </div>
    );
}

export default App;
