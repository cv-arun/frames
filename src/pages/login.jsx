import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { login } from "../services/userServices";


function Login() {
  const [userData, setUserData] = useState();
  const navigate = useNavigate()
  const handleLogin = async () => {
    try {
      console.log(userData)
      let result = await login(userData)
      console.log(result.token)
      localStorage.setItem('auth', JSON.stringify(result.token))
      navigate('/');
    } catch (err) {
      alert('Wrong credentails')
    }
    // localStorage.setItem('isLoggedIn', true)
  }

  const handleData = (e) => {
    console.log(userData)
    setUserData({ ...userData, [e.target.name]: e.target.value.trim() })
  }
  // 
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center bg-[#f2f2f2]  ">

      <div className="h-[400px] md:w-[30%] bg-white text-center flex flex-col items-center gap-10 p-10 rounded shadow-md text-black ">
        <h1 className="text-4xl mb-15">Login</h1>
        <input className="p-2 bg-white rounded-md border-b-2 outline-none" name="email" onChange={handleData} placeholder='Email' />
        <input className="p-2 bg-white rounded-md border-b-2 outline-none" name="password" onChange={handleData} placeholder="Password" />
        <div>
          <button className="p-3 px-8 rounded-md bg-blue-950 text-white" onClick={handleLogin} >Login</button>
          <p className="mt-5">Don&apos;t have an account? <span className="text-blue cursor-pointer" onClick={() => navigate('/signup')}>Signup</span></p>
        </div>
      </div>

    </div>
  )
}

export default Login