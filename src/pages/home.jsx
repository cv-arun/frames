

function Home() {
    const onLogout = () => localStorage.removeItem('isLoggedIn')
    return (
        <div>
            <button onClick={onLogout}>Logout</button>
            <p>Hello how are you</p>
            <p>Hello how are you</p>
            <p>Hello how are you</p>
            <p>Hello how are you</p>
            <p>Hello how are you</p>
        </div>
    )
}

export default Home