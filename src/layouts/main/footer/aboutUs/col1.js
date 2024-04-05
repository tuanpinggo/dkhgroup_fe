import { Stack, Typography } from "@mui/material";

export default function FooterAboutUsSection1(){
    return(
        <Stack spacing={1}>
            <Typography variant="h2" component={"h2"} color={"#fff"}>
                DKHGROUP
            </Typography>
            <Typography variant="body2" color={"#fff"}>
                <strong>DKH Group</strong> được thành lập với một mục đích rất rõ ràng: chúng tôi muốn mang đến cho thị trường những sản phẩm về đồ da, thời trang và dược phẩm phù hợp nhu cầu với chất lượng tốt nhất và giá cả hợp lí nhất.
            </Typography>
        </Stack>
    )
}