import React from 'react'
import { useState } from "react"
import Link from 'next/link'

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <div className="parent_div">
                <div className="child_div shadow-lg mb-5 bg-white rounded">
                    <div className="row container">
                    <div className="col-lg-5 my-2 ">
                            <legend className="text-center my-4 h3 text-uppercase"><u>Sign In</u></legend>
                            <div class="form-group ">
                                <div class="form-floating mb-3 my-4">
                                    <input type="email" class="form-control" id="floatingInput" onChange={e => setEmail(e.target.value)} placeholder="name@example.com" />
                                    <label for="floatingInput" class="h6">Email</label>
                                </div>
                                <div class="form-floating mb-3 my-4">
                                    <input type="password" class="form-control" id="floatingInput" onChange={e => setPassword(e.target.value)} placeholder="name@example.com" />
                                    <label for="floatingInput " class="h6">Password</label>
                                </div>
                            </div>
                            <button class="btn  btn-primary mb-3 col-12 mt-1 text-uppercase" type="button">Sign In</button>
                                <h5 className="">Don't have  account ? </h5>
                                <center>
                                    <Link href="/signup" ><a className=" h5 ">SignUp <i class="fas fa-sign-in-alt"></i></a></Link>
                             </center>
                        </div>
                        <div className="col-lg-7 mx-auto my-3">
                            <img src={"/images/login.png"} class="img-fluid rounded-start my-4 mx-3" width="350" alt="signup" />

                        </div>

                    </div>
                </div>
            </div>



        </>
    )
}

export default LogIn
