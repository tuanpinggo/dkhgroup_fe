import { Box, Stack, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import Image from "next/image";

export default function FooterCopyRight(){
    return(
        <Box component={"section"} py={4}>
            <Grid 
                container 
                spacing={5} 
                justifyContent={"center"} 
                alignItems={"center"}
            >
                <Grid xs={12} md={8}>
                    <Typography variant="body1" color={"#fff"} fontWeight={700}>
                        @ CÔNG TY TNHH DKH GROUP VIỆT NAM
                    </Typography>
                    <Typography variant="body2" color={"#fff"}>
                        Mã số doanh nghiệp: 0109598490. Giấy chứng nhận đăng ký doanh nghiệp do Sở Kế hoạch và Đầu tư TP Hà Nội cấp lần đầu ngày 00/00/2019.
                    </Typography>
                </Grid>
                <Grid xs={12} md={4}>
                    <Stack 
                        direction={"row"} 
                        spacing={2} 
                        justifyContent={{xs: "flex-start", md: "flex-end"}} 
                        alignItems={"center"}
                    >
                        <Image
                            src={'/assets/ncsc.png'}
                            width={73}
                            height={33}
                            alt="Tín nhiệm mạng - DKH Group"
                        />
                        <Image
                            src={'/assets/bct.png'}
                            width={93}
                            height={35}
                            alt="Thông báo bộ công thương - DKH Group"
                        />
                    </Stack>
                </Grid>  
            </Grid>
        </Box>
    )
}