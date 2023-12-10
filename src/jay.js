// import { useRef } from "react";

// const Login = () => {
//         const login = () => {
//             let user = username.current.value;
//             let pass = password.current.value;
//             fetch("http://localhost:2525/login", {
//                 headers: { 'Content-Type': 'application/json'},
//                 method: 'POST', body: JSON.stringify({username: user, password: pass}),
//                 credentials: 'include'
//             })
//             .then((res) => {
//                 return res.json()
//             })
//             .then((jsonresponse) => console.log(jsonresponse))
    
//         }
//         const register = () => {
//             let user = username1.current.value;
//             let pass = password1.current.value;
//             fetch("http://localhost:2525/register", {
//                 headers: { 'Content-Type': 'application/json'},
//                 method: 'POST', body: JSON.stringify({username: user, password: pass}),
//                 credentials: 'include'
//             })
//             .then((res) => {
//                 return res.json()
//             })
//             .then((jsonresponse) => console.log(jsonresponse))
    
//         }

    
//         const username = useRef();
//         const password = useRef();
//         const username1 = useRef();
//         const password1 = useRef();
//     return <>
//         <div className="container">
//             <div className="row mt-4">
//                 <div className="col-6 mx-auto">
//                     <div className="card p-4">
//                         <div className="from-group">
//                             <label htmlFor="username">Username</label>
//                             <input type="text" id="username" ref={username} placeholder="Enter your username" className="form-control" />
//                         </div>
//                         <div className="from-group my-2">
//                             <label htmlFor="password">Password</label>
//                             <input type="password" id="password" ref={password} placeholder="Enter your password" className="form-control" />
//                         </div>
//                         <button className="btn btn-success" onClick={login}>Login</button>
//                     </div>
//                 </div>
//                 <div className="col-6 mx-auto">
//                     <div className="card p-4">
//                         <div className="from-group">
//                             <label htmlFor="username1">Username</label>
//                             <input type="text" id="username1" ref={username1} placeholder="Enter your username" className="form-control" />
//                         </div>
//                         <div className="from-group my-2">
//                             <label htmlFor="password1">Password</label>
//                             <input type="password" id="password1" ref={password1} placeholder="Enter your password" className="form-control" />
//                         </div>
//                         <button className="btn btn-primary" onClick={()=>register()}>Register</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </>
// }


// export default Login;

import { useRef } from "react";

const Login = () => {
    const login = () => {
        let user = username.current.value;
        let pass = password.current.value;
        fetch("http://localhost:2525/login", {
            headers: { 'Content-Type': 'application/json'},
            method: 'POST', body: JSON.stringify({username: user, password: pass}),
            credentials: 'include'
        })
        .then((res) => {
            return res.json()
        })
        .then((jsonresponse) => console.log(jsonresponse))

    }

    const username = useRef();
    const password = useRef();
    return <>
    <div className="container">
        <div className="row mt-5">
            <div className="col-4 mx-auto">
                <div className="card p-4">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" ref={username} className="form-control" placeholder="Enter your username" />
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" ref={password} className="form-control" placeholder="Enter your password" />
                    </div>
                    <button className="btn btn-primary" onClick={login}>Login</button>
                </div>
            </div>
        </div>
    </div>
    </>
}


export default Login;