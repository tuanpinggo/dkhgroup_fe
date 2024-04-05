import { Stack, Typography } from "@mui/material";
import Link from "next/link";

const menu = [
    {
        id: 1,
        title: 'Về chúng tôi',
        link: '/ve-chung-toi'
    },
    {
        id: 2,
        title: 'Tin tức - báo chí',
        link: '/#'
    },
    {
        id: 3,
        title: 'Liên hệ - hỗ trợ',
        link: '/#'
    },

]

export default function FooterInfotSection2(){
    return(
        <Stack spacing={2}>
            <Typography variant="h3" component={"h2"} color={"#fff"} fontSize={16} fontWeight={700}>
                CÂU CHUYỆN DKHGROUP
            </Typography>
            <Stack spacing={1}>
                {menu.map(item =>
                    <Link href={item.link} key={item.id}>
                        <Typography variant="body2" color={"#fff"}>
                            {item.title}
                        </Typography>
                    </Link>
                )}
            </Stack>
        </Stack>
    )
}