import React from 'react'

// Signup name, email, password
const Signup = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            name,
            email,
            password
        };
        console.log(newUser);
    }
    return (
        <div>
            <h2>Signup Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" onChange={handleNameChange} value={name} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" onChange={handleEmailChange} value={email} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" onChange={handlePasswordChange} value={password} />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default Signup