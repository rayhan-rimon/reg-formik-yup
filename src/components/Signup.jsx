import React from 'react'

// import yup for validation in future
import * as Yup from 'yup';

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
        // Validation schema with Yup in future
        validationSchema: Yup.object({
            name: Yup.string().min(3, 'name at least 3 characters').required(),
            email: Yup.string().email().required(),
            password: Yup.string().min(6, 'at least 6 characters').required()
        }),

        // When click submit button it's print form data in console
        onSubmit: (values, { resetForm }) => {
            console.log('Form data', values);
            resetForm({ values: "" });
        }
    });

    // Error messages Name, Email, Password using in formik.touched and formik.errors with Form
    const nameError = formik.touched.name && formik.errors.name && (<span>{formik.errors.name}</span>);
    const emailError = formik.touched.email && formik.errors.email && (<span>{formik.errors.email}</span>);
    const passwordError = formik.touched.password && formik.errors.password && (<span>{formik.errors.password}</span>);
    // For debugging purpose
    // console.error(formik.errors);
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
        <div className="container bg-primery">
            <h2 className='sign-up'>Signup Form</h2>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    {/* <label htmlFor="name">Name:</label> */}
                    <input
                        placeholder="Name:"
                        type="text"
                        id="name"
                        name="name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                    {nameError}
                </div>
                <div>
                    {/* <label htmlFor="email">Email:</label> */}
                    <input
                        placeholder="Email:"
                        type="email"
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    {emailError}
                </div>
                <div>
                    {/* <label htmlFor="password">Password:</label> */}
                    <input
                        placeholder="Password:"
                        type="password"
                        id="password"
                        name="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    {passwordError}
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default Signup