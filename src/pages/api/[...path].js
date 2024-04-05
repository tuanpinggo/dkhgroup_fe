import { decryptData } from "@/components/crypto/decryptData";
import axios from "axios"
import Cookies from 'cookies'

export default async function handleApi(req, res) {
    const cookies = new Cookies(req, res, {
        secure: process.env.NODE_ENV !== 'development'
    })

    let bodyData;
    
    if(req.body.length){
        bodyData = decryptData(req.body)
    }

    const token = cookies.get('token')

    const endpoint = req.url.slice(5)

    let headers = { 
        'Accept': 'application/json', 
        'Content-Type': 'application/json',
    }

    if(token){
        headers = { 
            'Accept': 'application/json', 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
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
