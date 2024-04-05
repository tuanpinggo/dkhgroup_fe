import { Stack, Typography } from "@mui/material";
import Link from "next/link";

const menu = [
    {
        id: 1,
        title: 'Hướng dẫn sử dụng sản phẩm',
        link: '/#'
    },
    {
        id: 2,
        title: 'Hướng dẫn bảo quản đồ da đúng cách',
        link: '/#'
    },
    {
        id: 3,
        title: 'Hướng dẫn ..........',
        link: '/#'
    },
    {
        id: 4,
        title: 'Tuyển dụng',
        link: '/#'
    },

]

export default function FooterInfotSection4(){
    return(
        <Stack spacing={2}>
            <Typography variant="h3" component={"h2"} color={"#fff"} fontSize={16} fontWeight={700}>
                TÀI LIỆU - TUYỂN DỤNG
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