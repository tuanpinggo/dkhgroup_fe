import { Box, Button } from "@mui/material";
import { IconUserCog } from "@tabler/icons-react";
import { useRouter } from "next/router";

export default function UserIcon({iconColor = '#422F2C', iconSize=28, userData}){

    const router = useRouter()

    return(
        <Button 
            sx={{minWidth: '40px'}}
            onClick={() => router.push(userData ? '/tai-khoan' : '/dang-nhap')}
        >
            <IconUserCog 
                color={iconColor}
                size={iconSize}
            />
        </Button>
    )
}