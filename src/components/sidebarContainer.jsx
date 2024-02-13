import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { newFolder } from "../services/folderServices";
import { useState } from "react";

function SidebarContainer({ children, folderId,refetch }) {
    const [folderName, setFolderName] = useState('New folder');
    const [modal,setModal] = useState(false)

    const navigate = useNavigate()
    const onLogout = () => {
        localStorage.removeItem('isLoggedIn')
        navigate('/login')
    }

    const add = async() => {
      let result = await newFolder({
            name: folderName,
            parent: folderId
        })
        if(result){
            console.log('folder created');
            refetch(folderId)
            setModal(false)
        }
        
    }

    return (
        <div className="h-full min-h-[100vh] bg-[#f8fafd] flex">
            <div className=" w-[20%] pl-10 text-black flex flex-col " >
                <h1 className="text-2xl mt-5">Frames</h1>
                <div onClick={()=>setModal(true)} className="text-md p-4 w-fit shadow-xl bg-white mt-10 rounded-xl flex items-center gap-3 cursor-pointer" ><span className="text-3xl"><FaPlus /></span>Add</div>
                <div className="mt-5 grow  flex flex-col gap-2 ">
                    <div className="cursor-pointer">Home</div>
                    <div className="cursor-pointer">All Images</div>
                    <div className="cursor-pointer">Starred</div>
                    <div className="cursor-pointer">Bin</div>
                    <div className="cursor-pointer">Storage</div>
                    <div className="grow flex flex-col-reverse py-5">
                        <div onClick={onLogout} className="cursor-pointer">Logout</div>
                    </div>
                </div>
            </div>
            <div className=" w-[80%] flex flex-col ">
                <div className="w-full h-[60px] bg-[#f8fafd] flex flex-col justify-center">
                    <div className="bg-[#e9eef6] w-[60%] h-[40px] flex items-center rounded-3xl overflow-hidden px-5 ">
                        <input className="w-full bg-inherit" placeholder="Search" />
                    </div>
                </div>
                <div className="rounded-tl-3xl h-full bg-[#949494] overflow-hidden text-white ">{children}</div>
            </div>
           {modal && <div className="flex flex-col justify-around w-[300px] h-[200px] p-5 fixed mx-auto mt-[50vh] ml-[50vw] bg-white text-black rounded-md shadow-lg -translate-y-[50%] -translate-x-[50%]">
                <p className="text-[26px]">New folder</p>
                <input className="bg-white border-[2px] border-spacing-2" value={folderName} onChange={(e) => setFolderName(e.target.value)} />
                <div className="flex gap-4 justify-end " >
                    <button onClick={()=>setModal(false)}>Cancel</button>
                    <button onClick={()=>add()}>Create</button>
                </div>

            </div>}
        </div>
    )
}

export default SidebarContainer