import { useContact } from "@/hooks/useContact";
import { Stack, Typography } from "@mui/material";

export default function FooterAboutUsSection1(){

    const {contact, isLoading} = useContact()

    return(
        <Stack spacing={1}>
            <Typography variant="h2" component={"h2"} color={"#fff"}>
                {contact?.data?.attributes?.footer_name || "DKHGROUP"}
            </Typography>
            <Typography variant="body2" color={"#fff"}>
                {contact?.data?.attributes?.footer_description || "DKH Group được thành lập với một mục đích rất rõ ràng: chúng tôi muốn mang đến cho thị trường những sản phẩm về đồ da, thời trang và dược phẩm phù hợp nhu cầu với chất lượng tốt nhất và giá cả hợp lí nhất."}
            </Typography>
        </Stack>
    )
}