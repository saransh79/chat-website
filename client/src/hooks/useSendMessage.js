import { useState } from "react"
import useConversation from "../zustand/useConversation";
import axios from "axios";
import { toast } from "react-hot-toast";

const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();

    const sendMessage = async (message) => {
        setLoading(true);
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/messages/send/${selectedConversation._id}`, { message }, {withCredentials: true});

            setMessages([...messages, data]);
        } catch (error) {
            if (error.response)
                toast.error(error.response.data.message);
            else toast.error(error.message);
            console.log(error);
        } finally{
            setLoading(false);
        }
    }
    return {loading, sendMessage};
}

export default useSendMessage