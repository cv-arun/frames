import SidebarContainer from "../components/sidebarContainer";
import { FaFolder } from "react-icons/fa";
import { getFolderById } from "../services/folderServices";
import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

function Home() {


    const [childFolders, setChildFolders] = useState([])
    const [folder, setFolder] = useState({})
    const [stack, setStack] = useState(['65c8f294babaf34d852186b4'])


    const stackPush = (folder) => {
        stack.push(folder)
        setStack(stack)
    }
    const stackPop = () => {
        stack.pop()
        setStack(stack)
    }


    useEffect(() => {
        fetchFolders('65c8f294babaf34d852186b4')
    }, [])

    const fetchFolders = async (id) => {
        let data = await getFolderById(id)
        setFolder(data?.folder[0])
        setChildFolders(data?.children)
        console.log(data)
    }

    const openFolder = (id) => {
        fetchFolders(id)
        stackPush(id)
    }

    const goBack = () => {
        fetchFolders(stack[stack.length - 2])
        stackPop()
    }

    return (
        <SidebarContainer folderId={folder._id} refetch={fetchFolders}>
            <div className=" p-5 flex items-baseline ">
                <IoIosArrowBack onClick={goBack} size={30} />
                <h1 className="text-[40px]">{folder.name}</h1>
            </div>
            <hr />
            <div className="flex flex-wrap">
                {childFolders.map(f => <div key={f._id} onClick={() => openFolder(f._id)} className="w-[120px] h-[120px] flex justify-center items-center" >
                    <div className="w-fit cursor-pointer ">
                        <FaFolder fontSize={70} color="#5f6368" />
                        <p>{f.name}</p>
                    </div>
                </div>)}
            </div>
        </SidebarContainer>
    )
}
export default Home