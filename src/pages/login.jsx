

function Login() {
    const handleLogin=()=>localStorage.setItem('isLoggedIn',true)
  return (
    <div><button onClick={handleLogin} >Login</button></div>
  )
}

export default Login