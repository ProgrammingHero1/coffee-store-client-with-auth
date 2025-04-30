import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Swal from 'sweetalert2';

const SignUp = () => {

    const { createUser } = use(AuthContext);
    console.log(createUser)

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const { email, password, ...restFormData } = Object.fromEntries(formData.entries());

       

        // create user in the firebase 
        createUser(email, password)
            .then(result => {
                console.log(result.user);

                const userProfile = {
                    email, 
                    ...restFormData,
                    creationTime: result.user?.metadata?.creationTime,
                    lastSignInTime: result.user?.metadata?.lastSignInTime
                }

                // save profile info in the db
                fetch('https://coffee-store-server-mocha-eight.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userProfile)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Your account is created.",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })

            })
            .catch(error => {
                console.log(error)
            })

    }

    return (
        <div className="card bg-base-100 max-w-sm mx-auto shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-5xl font-bold">Sign Up now!</h1>
                <form onSubmit={handleSignUp} className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" name="name" className="input" placeholder="Name" />
                    <label className="label">Address</label>
                    <input type="text" name="address" className="input" placeholder="Address" />
                    <label className="label">Phone</label>
                    <input type="text" name="phone" className="input" placeholder="Phone NUmber" />
                    <label className="label">photo</label>
                    <input type="text" name="photo" className="input" placeholder="Photo URL" />
                    <label className="label">Email</label>
                    <input type="email" name="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Sign up</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;