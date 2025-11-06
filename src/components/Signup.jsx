import React from 'react'

// import Formik in Docs: https://formik.org/docs/overview/getting-started
import { Formik, useFormik } from 'formik';

// Signup name, email, password
const Signup = () => {

    // Replace without Formik part with this:
    // With use Formik
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        // Formik Form data print in console
        onSubmit: values => {
            console.log('Form data', values);
        }
    });
    // Without Formik and Yup
    // const [name, setName] = React.useState('');
    // const [email, setEmail] = React.useState('');
    // const [password, setPassword] = React.useState('');

    // When use formik, no need these handlers
    // const handleNameChange = (e) => {
    //     setName(e.target.value);
    // }
    // const handleEmailChange = (e) => {
    //     setEmail(e.target.value);
    // }
    // const handlePasswordChange = (e) => {
    //     setPassword(e.target.value);
    // }


    // Also no need this handleSubmit function
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const newUser = {
    //         name,
    //         email,
    //         password
    //     };
    //     console.log(newUser);
    // }


    return (
        <div>
            <h2>Signup Form</h2>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default Signup