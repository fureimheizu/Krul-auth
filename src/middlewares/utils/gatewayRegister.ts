import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const gatewayUrl = process.env.GATEWAY_URL;

export const registerGateway = async (name: string, url: string) => {
    try {
        console.log(`[Gateway-Register]: Registering gateway ${name}...`);
        const response = await axios({
            method: "post",
            url: `${gatewayUrl}/register`,
            data: {
                name,
                url
            }
        });

        if (response.status === 200) {
            console.log(`[Gateway-Register]: Gateway ${name} registered successfully!`);
        }
    } catch (error) {
        console.error("[Gateway-Register]: Unable to register gateway:", error);
    }
};