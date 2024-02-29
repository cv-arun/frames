import { useNavigate } from "react-router-dom";
import { newFolder } from "../services/folderServices";
import { uploadImage } from "../services/imageService";
import { useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { TiFolderAdd } from "react-icons/ti";
import { GoHome } from "react-icons/go";
import { IoMdImages } from "react-icons/io";

function SidebarContainer({ children, folderId, refetch }) {
    const [folderName, setFolderName] = useState('New folder');
    const [modal, setModal] = useState(false);
    // const [image, setImage] = useState(null)

    const navigate = useNavigate()
    const onLogout = () => {
        localStorage.removeItem('auth')
        navigate('/login')
    }

    const add = async () => {
        let result = await newFolder({
            name: folderName,
            parent: folderId
        })
        if (result) {
            console.log('folder created');
            refetch(folderId)
            setModal(false)
        }

    }
    const handleFileChange = async (e) => {
        // setImage(e.target.files[0])
        if (!e.target?.files[0]) return null
        const formData = new FormData()
        formData.append('photos', e.target.files[0])
        formData.append('folderId', folderId)
        await uploadImage(formData)
    }



    return (
        <div className=" min-h-[100vh] h-[100vh] max-h-[100vh] bg-[#f8fafd] flex overflow-y-hidden">
            <div className=" w-[20%] pl-10 text-black md:flex flex-col  hidden h-[100vh] " >
                <h1 className="text-2xl mt-5">Frames</h1>
                {/* <div onClick={() => setModal(true)} className="text-md p-4 w-fit shadow-xl bg-white mt-10 rounded-xl flex items-center gap-3 cursor-pointer" ><span className="text-3xl"><FaPlus /></span>Add</div> */}
                <div className="mt-5 grow  flex flex-col gap-2 ">
                    <div className="flex gap-5 mb-10">
                        <div className=" overflow-hidden w-[50px] h-[50px] cursor-pointer">
                            <input className="opacity-0 absolute w-[50px] h-[50px] cursor-pointer " type="file" onChange={handleFileChange} />
                            <BiImageAdd size={50} />
                        </div>
                        <div onClick={() => setModal(true)} className=" overflow-hidden w-[50px] h-[50px] cursor-pointer">
                            <TiFolderAdd size={50} />
                        </div>
                    </div>
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
            <div className=" md:w-[80%] w-[100%] flex flex-col h-full ">
                <div className="w-full h-[60px] bg-[#f8fafd] flex flex-col justify-center">
                    <div className="bg-[#e9eef6] w-[60%] h-[40px] flex items-center rounded-3xl overflow-hidden px-5 ">
                        <input className="w-full bg-inherit" placeholder="Search" />
                    </div>
                </div>
                <div className="md:rounded-tl-3xl h-full rounded-none bg-[#949494] overflow-hidden text-white p-10 ">
                    {children}
                </div>
                <div className=" md:hidden bg-white shadow-sm flex justify-around py-4 text-black rounded-t-md overflow-hidden">
                    <div  className=" overflow-hidden  h-[30px] cursor-pointer">
                        <GoHome size={30} />
                    </div>
                    <div  className=" overflow-hidden h-[30px] cursor-pointer">
                        <IoMdImages size={30} />
                    </div>
                    <div className=" overflow-hidden w-[30px] h-[30px] cursor-pointer">
                        <input className="opacity-0 absolute w-[30px] h-[30px] cursor-pointer " type="file" onChange={handleFileChange} />
                        <BiImageAdd size={30} />
                    </div>
                    <div onClick={() => setModal(true)} className=" overflow-hidden w-[30px] h-[30px] cursor-pointer">
                        <TiFolderAdd size={30} />
                    </div>
                </div>
            </div>
            {modal && <div className="flex flex-col justify-around w-[300px] h-[200px] p-5 fixed mx-auto mt-[50vh] ml-[50vw] bg-white text-black rounded-md shadow-lg -translate-y-[50%] -translate-x-[50%]">
                <p className="text-[26px]">New folder</p>
                <input className="bg-white border-[2px] border-spacing-2" value={folderName} onChange={(e) => setFolderName(e.target.value)} />
                <div className="flex gap-4 justify-end " >
                    <button onClick={() => setModal(false)}>Cancel</button>
                    <button onClick={() => add()}>Create</button>
                </div>

            </div>}
        </div>
    )
}

export default SidebarContainer