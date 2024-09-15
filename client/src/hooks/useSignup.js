import axios from "axios";
import { useState } from "react"
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const signup = async ({ fullName, userName, password, gender }) => {
        const success = handleInputErrors({ fullName, userName, password, gender });

        if (!success) return;

        setLoading(true);
        try {
            const {data} = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/auth/signup`, { fullName, userName, password, gender });

            toast.success(data.message);
            navigate("/login")
        } catch (error) {
            if (error.response)
                toast.error(error.response.data.message);
            else toast.error(error.message);
            console.log(error);
        } finally {
            setLoading(false);
        }
    }
    return { loading, signup };
}

function handleInputErrors({ fullName, userName, password, gender }) {
    if (!fullName || !userName || !password || !gender) {
        toast.error("Please fill all fields");
        return false;
    }

    if (password.length < 6) {
        toast.error("Password must be of atleast 6 characters");
        return false;
    }

    return true;
}

export default useSignup;