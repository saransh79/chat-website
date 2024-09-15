import axios from "axios";
import { useState } from "react"
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";


const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();

    const login = async ({ userName, password}) => {
        const success = handleInputErrors({userName, password});

        if (!success) return;

        setLoading(true);
        try {
            const {data} = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/auth/login`, {userName, password}, { withCredentials: true });

            localStorage.setItem("chat-user", JSON.stringify(data));
            setAuthUser(data);
        } catch (error) {
            if (error.response)
                toast.error(error.response.data.message);
            else toast.error(error.message);
            console.log(error);
        } finally {
            setLoading(false);
        }
    }
    return { loading, login };
}

function handleInputErrors({userName, password }) {
    if (!userName || !password) {
        toast.error("Please fill all fields");
        return false;
    }
    return true;
}

export default useLogin;