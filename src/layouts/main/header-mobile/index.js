import { Box, Stack } from "@mui/material";
import NavbarMobile from "./navbar";
import SearchIconMobile from "./search";
import LogoMobile from "./logo";
import Link from "next/link";
import IconCart from "../header/cartIcon";
import UserIcon from "../header/userIcon";

export default function HeaderMobile({userData}){
    return(
        <Stack 
            direction={"row"} 
            justifyContent={"space-between"} 
            alignItems={"center"}
            bgcolor={"secondary.main"}
            p={1}
        >
            <Stack direction={"row"} spacing={0}>
                <NavbarMobile />
                <SearchIconMobile />
            </Stack>
            <Stack flex={1} justifyContent={"center"} alignItems={"center"}>
                <Link href={"/"}>
                    <LogoMobile />
                </Link>
            </Stack>
            <Stack direction={"row"} spacing={0}>
                <UserIcon 
                    iconColor="#fff"
                    iconSize={28}
                    userData={userData}
                />
                <IconCart 
                    iconColor="#fff"
                    iconSize={28}
                />
            </Stack>
        </Stack>
    )
}