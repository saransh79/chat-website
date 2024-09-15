import { useEffect, useState } from "react"
import useConversation from "../zustand/useConversation";
import axios from "axios";
import { toast } from "react-hot-toast";

const useGetMessages = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();

    useEffect(() => {
        const getMessages = async () => {
            setLoading(true);
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/messages/${selectedConversation._id}`,{ withCredentials: true });

                setMessages(data);
            } catch (error) {
                if (error.response)
                    toast.error(error.response.data.message);
                else toast.error(error.message);
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        if(selectedConversation?._id) getMessages();
    }, [selectedConversation?._id, setMessages]);

    return { loading, messages };
}

export default useGetMessages