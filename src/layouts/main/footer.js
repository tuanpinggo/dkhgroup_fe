import { globalConfig } from "@/theme/globalConfig"
import { Stack, Container, Divider } from "@mui/material"
import FooterAboutUs from "./footer/aboutUs"
import FooterInfo from "./footer/info"
import FooterCopyRight from "./footer/copyRight"
import SpeedDialButtonDefault from "./footer/speedDial/default"

export default function FooterMain(){
    return(
        <Stack 
            gap={0}
            sx={{
                bgcolor: "secondary.main"
            }}
        >
            <Container maxWidth={globalConfig.maxWidth}>
                <FooterAboutUs />
                <Divider sx={{my: .5,bgcolor: '#666666'}}/>
                <FooterInfo />
                <Divider sx={{my: .5,bgcolor: '#666666'}}/>
                <FooterCopyRight />
            </Container>
            <SpeedDialButtonDefault />
        </Stack>
    )
}