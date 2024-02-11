import SidebarContainer from "../components/sidebarContainer";
import { FaFolder } from "react-icons/fa";
import { getFolderById } from "../services/folderServices";
import { useEffect,useState } from "react";

function Home() {


    const [childFolders, setChildFolders] = useState([])
    const data = [
        { id: '1', name: 'myfolder', parent: '' },
        { id: '2', name: 'myfolder', parent: '' },
        { id: '3', name: 'myfolder', parent: '' },
        { id: '4', name: 'myfolder', parent: '' },
    ]

    useEffect(() => {
        fetchFolders()
    }, [])

    const fetchFolders = async () => {
        let data = await getFolderById('65c8f294babaf34d852186b4')
        console.log(data)
    }

    return (
        <SidebarContainer>
            <div className=" p-5 ">
                <h1 className="text-[40px]">Home</h1>
                <hr />
            </div>
            <div className="flex flex-wrap">
                {data.map(f => <div key={f.id} className="w-[120px] h-[120px] flex justify-center items-center" >
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