import SidebarContainer from "../components/sidebarContainer";
import { FaFolder } from "react-icons/fa";
import { getFolderById } from "../services/folderServices";
import { getImages } from "../services/imageService";
import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Home() {


    const [childFolders, setChildFolders] = useState([])
    const [folder, setFolder] = useState({})
    const [stack, setStack] = useState([])
    const [images, setImages] = useState([])
    const navigate = useNavigate()


    const stackPush = (folder) => {
        stack.push(folder)
        setStack(stack)
    }
    const stackPop = () => {
        stack.pop()
        setStack(stack)
    }


    useEffect(() => {
        fetchFolders()
    }, [])

    const fetchFolders = async (id) => {
        try {

            let data = await getFolderById(id)
            setFolder(data?.folder)
            setChildFolders(data?.children)
            fetchImages()

            console.log(data)
        } catch (err) {
            setFolder({})
            setChildFolders([])
            if (err.response.status === 401) {
                localStorage.removeItem('auth')
                navigate('/login')
            }
        }
    }

    const fetchImages = async () => {
        let images = await getImages(folder._id)
        setImages(images)
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
            <div className="flex items-baseline ">
                {stack.length >= 1 ? <IoIosArrowBack className="cursor-pointer" onClick={goBack} size={30} /> : null}
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
                {images.map((img) => <div key={img.uri}><img src={img.uri} alt="img" /></div>)}
            </div>
        </SidebarContainer>
    )
}
export default Home