import { Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function SearchBox(){
    return(
        <Stack direction={"row"} bgcolor={"#f2f2f2"} px={2} py="10px" minWidth={"220px"} borderRadius={"30px"} gap={1.5} alignItems={"center"}>
            <Image
                src="/assets/icon-search.svg"
                width={20}
                height={20}
                alt="icon search"
            />
            <Typography variant="body2" component={"span"} color="#666666" fontWeight={600} fontSize={14}>
                Tìm kiếm sản phẩm ...
            </Typography>
        </Stack>
    )
}