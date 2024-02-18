import { useNavigate } from "react-router-dom"


function Login() {
  const navigate = useNavigate()
  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', true)
    navigate('/')
  }
  // 
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center bg-[#f2f2f2]  ">

      <div className="h-[400px] w-[30%] bg-white text-center flex flex-col items-center gap-10 p-10 rounded shadow-md text-black ">
        <h1 className="text-4xl mb-15">Login</h1>
        <input className="p-2 bg-white rounded-md border-b-2 outline-none" placeholder='Email' />
        <input className="p-2 bg-white rounded-md border-b-2 outline-none" placeholder="Password" />
        <div>
          <button className="p-3 px-8 rounded-md bg-blue-950 text-white" onClick={handleLogin} >Login</button>
          <p className="mt-5">Don&apos;t have an account? <span className="text-blue cursor-pointer" onClick={() => navigate('/signup')}>Signup</span></p>
        </div>
      </div>

    </div>
  )
}

export default Login