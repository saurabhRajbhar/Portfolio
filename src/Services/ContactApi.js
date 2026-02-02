import axios from "axios";

const API_URL = "http://localhost:5000";
export const sendMessage = async (userData) => {
    try {
        const response = await axios.post(
            `${API_URL}/api/contact`,
            userData,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        return response.data;
    } catch (error) {
        throw error.response?.data || {
            message: "Server not reachable",
        };
    }
};