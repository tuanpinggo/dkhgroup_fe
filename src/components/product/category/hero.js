import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import localFont from 'next/font/local'

// Font files can be colocated inside of `pages`
const myFont = localFont({ src: '../../../fonts/poppins.ttf' })

export default function ProductCategoryHeroSection({title,image}){
    return(
        <Stack className={"dkh-bg-radian"} width={"100%"} minHeight={400} position={"relative"} justifyContent={"center"} alignItems={"center"} py={10} overflow={"hidden"}>
            <Typography variant="h1" component={"h1"} className={myFont.className + ' text'} >
                {title}
            </Typography>
            <Box sx={{
                position: 'absolute',
                bottom: '-80px',
                zIndex: 1
            }}>
                <Image
                    src="/assets/default-product-thumbnail.png"
                    width={500}
                    height={500}
                    alt="thumbnail"
                />
            </Box>
        </Stack>
    )
}