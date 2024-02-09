
function SidebarContainer({ children }) {
    const onLogout = () => localStorage.removeItem('isLoggedIn')
    return (
        <div className="h-full min-h-[100vh] bg-[#f8fafd] flex">
            <div className=" w-[20%] pl-10 text-black flex flex-col " >
                <h1 className="text-2xl mt-5">Frames</h1>
                <div className="text-md p-4 w-fit shadow-xl bg-white mt-10 rounded-xl " ><span className="text-3xl">+</span>Add</div>
                <div className="mt-5 grow  flex flex-col gap-2">
                    <div>Home</div>
                    <div>All Images</div>
                    <div>Starred</div>
                    <div>Bin</div>
                    <div>Storage</div>
                    <div className="grow flex flex-col-reverse py-5">
                        <div onClick={onLogout} >Logout</div>
                    </div>
                </div>
            </div>
            <div className=" w-[80%] flex flex-col ">
                <div className="w-full h-[60px] bg-[#f8fafd] flex flex-col justify-center">
                    <div className="bg-[#e9eef6] w-[60%] h-[40px] flex items-center rounded-3xl overflow-hidden px-5 ">
                        <input className="w-full bg-inherit" placeholder="Search" />
                    </div>
                </div>
                <div className="rounded-tl-3xl h-full bg-white overflow-hidden ">{children}</div>
            </div>
        </div>
    )
}

export default SidebarContainer