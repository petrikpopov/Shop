// type UserModel = {
//     email:string;
//     login:string;
//     password:string;
// }

// const Login = () => {

//     const handleSubmit = (e:React.FormEvent) => {
//         e.preventDefault();
    
//         const user = userData.find((user) => user.login === login && user.password === password);
//         if(user) {
//             alert(`Welcome dear, ${user.login}!`);
//         } else {
//             alert(`Invalid email or password.!`);
//             return;
//         }
//     }

//     return (
//         <form onSubmit={handleSubmit} method='POST' className={style.wrapperForm__wrapperIputs}>
//             <div className={style.wrapperForm__wrapperIputs__login}>
//                 <label>Enter your Login</label>
//                 <input type="text" name='login' value={formData.login} placeholder="Login" onChange={handleChange}/>
//             </div>
//             <div className={style.wrapperForm__wrapperIputs__password}>
//                 <label>Enter your Password</label>
//                 <input type="password" name='password' value={formData.password} placeholder="Password" onChange={handleChange}/>
//             </div>
//             <button type="submit" className={style.wrapperForm__btn}>{action}</button>
//         </form>
//     )
// }

// export default Login;