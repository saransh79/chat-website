import axios from "axios";
import { useEffect, useState } from "react"
import { toast } from "react-hot-toast";


const useGetConversations = () => {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        const getConversations = async () => {
            setLoading(true);
            try {
                const {data} = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/users`, { withCredentials: true });

                setConversations(data);
            } catch (error) {
                if (error.response)
                    toast.error(error.response.data.message);
                else toast.error(error.message);
                console.log(error);
            } finally{
                setLoading(false);
            }
        }

        getConversations();
    }, [])

    return { loading, conversations };
}

export default useGetConversations;