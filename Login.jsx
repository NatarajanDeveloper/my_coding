// import React, { useState } from 'react';
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'
// import './App.css';
// const Login = () => {
//     const navigate = useNavigate()
//     const [input, setInput] = useState({ password: "", email: "" });

//     const handelChange = (e) => {
//         setInput({ ...input, [e.target.name]: e.target.value });
//     };
//     useEffect(() => {
//         if (localStorage.getItem('auth')) {
//             navigate("/about")
//         }
//     }, [])
//     const handelSubmite = (e) => {
//         e.preventDefault();
//         if (input.password === "12345" && input.email === "nataraj@24.com") {
//             console.log("15");
//             localStorage.setItem('auth', true)
//         }
//     }
//     console.log(input);
//     return (
//         <>
//             <div className='card'>
//                 <div className="Auth-form-container">
//                     <form className="Auth-form">
//                         <div className="Auth-form-content">
//                             <h3 className="Auth-form-title">Sign In</h3>
//                             <div className="form-group mt-3">
//                                 <label>Email address</label>
//                                 <input
//                                     name="email"
//                                     value={input.email}
//                                     onChange={(e) => handelChange(e)}
//                                     type="email"
//                                     className="form-control mt-1"
//                                     placeholder="Enter email"
//                                 />
//                             </div>
//                             <br></br>
//                             <div className="form-group mt-3">
//                                 <label>Password</label>
//                                 <input
//                                     name="password"
//                                     onChange={(e) => handelChange(e)}
//                                     value={input.password}
//                                     type="password"
//                                     className="form-control mt-1"
//                                     placeholder="Enter password"
//                                 />
//                             </div>
//                             <div className="d-grid gap-2 mt-3">
//                                 <button type="submit" className="btn btn-primary" onClick={(e) => handelSubmite(e)}>
//                                     Submit
//                                 </button>
//                             </div>
//                             <p className="forgot-password text-right mt-2">
//                                 Forgot <a href="#">password?</a>
//                             </p>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </>
//     );
// }
// export default Login;