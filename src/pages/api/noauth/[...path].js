import { decryptData } from "@/components/crypto/decryptData";
import axios from "axios"

export default async function handleApi(req, res) {

    let bodyData;

    if(req?.method === "POST" || req?.method === "PUT" || req?.method === "PATCH"){
        bodyData = decryptData(req.body)
    }

    const endpoint = req.url.slice(12)

    let headers = { 
        'Accept': 'application/json', 
        'Content-Type': 'application/json',
    }

    let config = {
        method: req.method,
        maxBodyLength: Infinity,
        url: `${process.env.API_URL}/${endpoint}`,
        headers: headers,
        data : bodyData
    };

    try {
        const request = await axios(config)
        return res.status(200).json(request.data)
    } catch (error) {
        return res.status(403).json(error?.response?.data || [])
    }
}
