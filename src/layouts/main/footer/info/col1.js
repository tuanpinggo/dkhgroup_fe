import { Stack, Typography } from "@mui/material";

export default function FooterInfotSection1(){
    return(
        <Stack spacing={2}>
            <Typography variant="h3" component={"h2"} color={"#fff"} fontSize={16} fontWeight={700}>
                ĐỊA CHỈ LIÊN HỆ
            </Typography>
            <Stack spacing={1}>
                <Typography variant="body2" color={"#fff"}>
                    <strong>Văn phòng:</strong>  P.A8 - CT2 tòa nhà The Pride - đường Tố Hữu, phường La Khê, quận Hà Đông, thành phố Hà Nội 
                </Typography>
                <Typography variant="body2" color={"#fff"}>
                    <strong>Xưởng sản xuất:</strong>  Thạch Thất, Hà Nội
                </Typography>
            </Stack>
        </Stack>
    )
}