import { Stack } from "@mui/material";
import IconCart from "./cartIcon";
import UserIcon from "./userIcon";

export default function IconHeader({userData}){
    return(
        <Stack
            direction={"row"} 
            justifyContent={"flex-end"} 
            alignItems={"flex-start"} 
            spacing={1}
        >
            <UserIcon userData={userData}/>
            <IconCart />
        </Stack>
    )
}