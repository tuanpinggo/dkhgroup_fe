import { Button } from "@mui/material";
import { IconSearch } from "@tabler/icons-react";

export default function SearchIconMobile(){
    return(
        <>
            <Button sx={{minWidth: '40px'}}>
                <IconSearch color="#fff" size={28}/>
            </Button>
        </>
    )
}