import { Box, Stack } from "@mui/material";
import FooterMain from "./main/footer";
import HeaderMain from "./main/header";

export default function MainLayout({children}){
    return(
        <Stack 
            direction={"column"} 
            gap={0}
            height={"100vh"}
            width={"100%"}
            flexDirection={"column"}
        >
            <HeaderMain />
            <Box flex={1}>
                {children}
            </Box>
            <FooterMain />
        </Stack>
    )
}