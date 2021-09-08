import React from 'react'
import {useState} from "react"
import signup from "../public/Images/signup.png"

const SignUp = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

    return (
        <>
        <div className="parent_div">
            <div className="child_div shadow-lg mb-5 bg-white rounded">
                <div className="row container">
                  <div className="col-lg-7 mx-auto my-3">
      <img src={"/images/shop.png"} class="img-fluid rounded-start my-4 mx-3" width="350" alt="signup"/>
                    
                  </div>
                  <div className="col-lg-5 my-2">
                  <legend className="text-center my-4 h3 text-uppercase"><u>Sign Up</u></legend>
                  <div class="form-group ">
                    {/* <label class="form-label mt-4 h4">Create New Product</label> */}
                    <div class="form-floating my-3">
                        <input type="text" class="form-control" id="floatingInput" onChange={e=>setName(e.target.value)} placeholder="name@example.com"/>
                        <label for="floatingInput" class="h6">Name</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" onChange={e=>setEmail(e.target.value)} placeholder="name@example.com"/>
                        <label for="floatingInput" class="h6">Email</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="password" class="form-control" id="floatingInput" onChange={e=>setPassword(e.target.value)} placeholder="name@example.com"/>
                        <label for="floatingInput " class="h6">Password</label>
                    </div>
                    </div>
                    <button class="btn  btn-primary mb-3 col-12 mt-1 text-uppercase"  type="button">Sign Up</button>

                  </div>
                </div>
            </div>
        </div>



        </>
    )
}

export default SignUp
