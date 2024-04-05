import { Box, Stack } from "@mui/material";
import MainNav from "./header/mainNav";
import TopHeader from "./header/topHeader";

export default function HeaderMain(){
    return(
        <Stack borderBottom={"1px solid #f2f2f2"} spacing={0}>
            <TopHeader />
            <MainNav />
        </Stack>
    )
}