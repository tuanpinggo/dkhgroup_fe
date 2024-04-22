import { Box, Container } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import DefaultLogo from "./logo";
import SearchBox from "./searchBox";
import IconHeader from "./icon";
import { globalConfig } from "@/theme/globalConfig";
import DefaultNavbar from "./navbar";

export default function MainNav({userData}){
    return(
        <Box component={"header"} bgcolor="#ffffff" >
            <Container maxWidth={globalConfig.maxWidth}>
                <Grid container spacing={2} alignItems={"center"} >
                    <Grid xs={1.5}>
                        <DefaultLogo />
                    </Grid>
                    <Grid xs={7.5}>
                        <DefaultNavbar />
                    </Grid>
                    <Grid xs={2}>
                        <SearchBox />
                    </Grid>
                    <Grid xs={1}>
                        <IconHeader userData={userData}/>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}