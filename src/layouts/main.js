import { Box, Stack } from "@mui/material";
import FooterMain from "./main/footer";
import HeaderMain from "./main/header";
import { useAuth } from "@/hooks/useAuth";
import { useSearchProduct } from "@/hooks/useSearchProduct";

export default function MainLayout({children}){

    const {userData, isLoading} = useAuth()
    const {searchProduct} = useSearchProduct()

    return(
        <>
            <Stack 
                direction={"column"} 
                gap={0}
                height={"100vh"}
                width={"100%"}
                flexDirection={"column"}
            >
                <HeaderMain userData={userData}/>
                <Box flex={1}>
                    {children}
                </Box>
                <FooterMain />
            </Stack>
        </>
    )
}