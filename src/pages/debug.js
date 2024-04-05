import axiosClient from "@/axiosConfig/axiosClient";
import { Button } from "@mui/material";
import { useFormik } from "formik";

export default function DebugPage(){

    const handleClick = async () => {
        try {
            const request = await axiosClient.get('/blogs')
            console.log("🚀 ~ handleClick ~ request:", request)

        } catch (error) {
            console.log("🚀 ~ handleClick ~ error:", error)
            
        }
    }

    return(

        <Button onClick={handleClick}>
            click
        </Button>
    )
}