import axios from "axios";
import { useState } from "react"
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";


const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();

    const logout = async () => {
        setLoading(true);
        try {
            const {data} = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/auth/logout`);

            localStorage.removeItem("chat-user");
            setAuthUser(null);
            toast.success(data.message);
        } catch (error) {
            if (error.response)
                toast.error(error.response.data.message);
            else toast.error(error.message);
            console.log(error);
        } finally {
            setLoading(false);
        }
    }
    return { loading, logout };
}

export default useLogout;