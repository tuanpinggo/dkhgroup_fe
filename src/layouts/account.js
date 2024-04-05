import { Box, Container, Stack } from "@mui/material";
import FooterMain from "./main/footer";
import HeaderMain from "./main/header";
import Grid from '@mui/material/Unstable_Grid2';
import { globalConfig } from "@/theme/globalConfig";
import ButtonAccount from "./account/button";

export default function AccountLayout({children}){
    return(
        <Stack 
            direction={"column"} 
            gap={0}
            height={"100vh"}
            width={"100%"}
            flexDirection={"column"}
        >
            <HeaderMain />
            <Box flex={1} py={8}>
                <Container maxWidth={globalConfig.maxWidth}>
                    <Grid container spacing={2} justifyContent={"space-between"}>
                        <Grid xs={12} md={5} lg={3}>
                            <ButtonAccount />
                        </Grid>
                        <Grid xs={12} md={7} lg={8}>
                            {children}
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <FooterMain />
        </Stack>
    )
}