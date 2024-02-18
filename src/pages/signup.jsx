import { useNavigate } from "react-router-dom"
import { useState } from "react";


function Signup() {
    const navigate = useNavigate()
    const [userData, setUserData] = useState({name:'hello'});
    const handleSignup = () => {
        // localStorage.setItem('isLoggedIn', true)
        // navigate('/login')
        if(userData.password!==userData.cpassword){
            return alert('password and confirm password donot match')
        }
    }

    const handleData = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }
    // 
    return (
        <div className="h-[100vh] flex flex-col justify-center items-center bg-[#f2f2f2]  ">

            <div className="h-[500px] w-[30%] bg-white text-center flex flex-col items-center gap-6 p-10 rounded shadow-md text-black ">
                <h1 className="text-4xl mb-15">Signup</h1>
                <input className="p-2 bg-white rounded-md border-b-2 outline-none" name="name" onChange={handleData} value={userData.name} placeholder='Name' />
                <input className="p-2 bg-white rounded-md border-b-2 outline-none" name="email" onChange={handleData} value={userData.email} placeholder='Email' />
                <input className="p-2 bg-white rounded-md border-b-2 outline-none" name="password" onChange={handleData} value={userData.password} placeholder='Password' />
                <input className="p-2 bg-white rounded-md border-b-2 outline-none" name="cpassword" onChange={handleData} value={userData.cpassword} placeholder="Confirm Password" />
                <div>
                    <button className="p-3 px-8 rounded-md bg-blue-950 text-white" onClick={handleSignup} >Signup</button>
                    <p className="mt-5">already have an account? <span className="text-blue cursor-pointer" onClick={() => navigate('/login')}>Login</span></p>
                </div>
            </div>

        </div>
    )
}

export default Signup