import { useParams } from "react-router-dom";

const ProfilPage =() =>{
    const params = useParams();
    return (
        <div>
            <h1 className="font-semibold flex-col w-screen">Profil Page</h1>
            <p className="text-xl text-red-900">{params.username}</p>
        </div>

    )
}
export default ProfilPage;