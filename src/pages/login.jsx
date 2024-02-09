import { useNavigate } from "react-router-dom"


function Login() {
  const navigate = useNavigate()
  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', true)
    navigate('/')
  }
  // 
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center  ">

      <div className="h-[400px] w-[30%] bg-blue-500 text-center flex flex-col items-center gap-10 p-10 rounded shadow-md ">
        <h1 className="text-4xl mb-15">Login</h1>
        <input className="p-2 bg-white rounded-md" placeholder='Email' />
        <input className="p-2 bg-white rounded-md" placeholder="Password" />
        <button className="p-3 px-8 rounded-md bg-blue-950" onClick={handleLogin} >Login</button>
      </div>

    </div>
  )
}

export default Login