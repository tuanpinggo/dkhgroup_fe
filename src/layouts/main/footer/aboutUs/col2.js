import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function FooterAboutUsSection2(){
    return(
        <Stack spacing={1}>
            <Stack 
                direction={"row"} 
                spacing={2} 
                alignItems={"center"} 
                justifyContent={"flex-start"}
            >
                <Image
                    src={'/assets/phone.svg'}
                    width={24}
                    height={24}
                    alt="phone icon"
                />
                <Stack spacing={0}>
                    <Typography variant="body2" component={"span"} color="#fff">
                        Hotline
                    </Typography>
                    <Link href="tel:0962663459">
                        <Typography fontWeight={700} color="#fff">
                            0962663459 - Mr Khoa
                        </Typography>
                    </Link>
                    <Link href="tel:0963863459">
                        <Typography fontWeight={700} color="#fff">
                            0963863459 - Mr Hải - GĐ Kinh Doanh
                        </Typography>
                    </Link>
                </Stack>
            </Stack>
            <Stack 
                direction={"row"} 
                spacing={2} 
                alignItems={"center"} 
                justifyContent={"flex-start"}
            >
                <Image
                    src={'/assets/email.svg'}
                    width={24}
                    height={24}
                    alt="phone icon"
                />
                <Link href="mailto:contact@dkhgroup.com.vn">
                    <Stack spacing={0}>
                        <Typography variant="body2" component={"span"} color="#fff">
                            Email
                        </Typography>
                        <Typography fontWeight={700} color="#fff">
                            contact@dkhgroup.com.vn
                        </Typography>
                    </Stack>
                </Link>
            </Stack>
        </Stack>
    )
}