import { Stack, Typography } from "@mui/material";
import Link from "next/link";

const menu = [
    {
        id: 1,
        title: 'Chính sách khuyến mãi',
        link: '/#'
    },
    {
        id: 2,
        title: 'Chính sách bảo mật',
        link: '/#'
    },
    {
        id: 3,
        title: 'Chính sách giao hàng',
        link: '/#'
    },
    {
        id: 4,
        title: 'Chính sách bảo hành - bảo trì sản phẩm',
        link: '/#'
    },

]

export default function FooterInfotSection3(){
    return(
        <Stack spacing={2}>
            <Typography variant="h3" component={"h2"} color={"#fff"} fontSize={16} fontWeight={700}>
                CHÍNH SÁCH
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