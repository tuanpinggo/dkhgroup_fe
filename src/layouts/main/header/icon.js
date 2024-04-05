import { Stack } from "@mui/material";
import IconCart from "./cartIcon";
import UserIcon from "./userIcon";

export default function IconHeader(){
    return(
        <Stack direction={"row"} justifyContent={"flex-end"} alignItems={"flex-start"} spacing={2.5}>
            <UserIcon />
            <IconCart />
        </Stack>
    )
}