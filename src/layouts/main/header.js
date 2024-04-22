import { Box, Stack } from "@mui/material";
import MainNav from "./header/mainNav";
import TopHeader from "./header/topHeader";
import HeaderMobile from "./header-mobile";

export default function HeaderMain({userData}){
    return(
        <>
            <Box display={{xs: 'none', lg: "block"}}>
                <Stack 
                    spacing={0}
                    sx={{xs: 'none', lg: "block"}}
                >
                    <TopHeader userData={userData}/>
                    <MainNav userData={userData}/>
                </Stack>
            </Box>
            <Box display={{xs: 'block', lg: "none"}}>
                <HeaderMobile userData={userData}/>
            </Box>
        </>
    )
}