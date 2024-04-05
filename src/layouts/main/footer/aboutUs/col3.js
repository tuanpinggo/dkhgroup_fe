import { Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function FooterAboutUsSection3(){
    return(
        <Stack 
            direction={"row"}
            spacing={2.5}
        >
            <Link href="#">
                <Image
                    src={'/assets/fb.svg'}
                    width={40}
                    height={40}
                    alt="DKGroup Fanpage"
                />
            </Link>
            <Link href="#">
                <Image
                    src={'/assets/youtube.svg'}
                    width={40}
                    height={40}
                    alt="DKGroup Fanpage"
                />
            </Link>
            <Link href="#">
                <Image
                    src={'/assets/zalo.svg'}
                    width={40}
                    height={40}
                    alt="DKGroup Fanpage"
                />
            </Link>
            <Link href="#">
                <Image
                    src={'/assets/insta.svg'}
                    width={40}
                    height={40}
                    alt="DKGroup Fanpage"
                />
            </Link>
            <Link href="#">
                <Image
                    src={'/assets/tiktok.svg'}
                    width={40}
                    height={40}
                    alt="DKGroup Fanpage"
                />
            </Link>
        </Stack>
    )
}