import { Button, Stack, Typography } from "@mui/material";
import { IconAddressBook, IconArrowNarrowRight, IconLogout, IconShoppingBagEdit, IconUser } from "@tabler/icons-react";
import { useRouter } from "next/router";

export default function ButtonAccount(){

    const router = useRouter()

    return(
        <Stack spacing={2}>
            <Button 
                variant="contained" 
                color={router.asPath === "/tai-khoan/thong-tin-tai-khoan" ? "secondary" : "grey"}
                size="large"
                onClick={() => router.push('/tai-khoan/thong-tin-tai-khoan')}
            >
                <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} width={"100%"}>
                    <Stack direction={"row"} spacing={1} alignItems={"center"}>
                        <IconUser size={18}/>
                        <Typography variant="body2" fontWeight={700}>
                            Thông tin tài khoản
                        </Typography>
                    </Stack>
                    <IconArrowNarrowRight />
                </Stack>
            </Button>
            <Button 
                variant="contained" 
                color={router.asPath === "/tai-khoan/lich-su-don-hang" ? "secondary" : "grey"}
                size="large"
                onClick={() => router.push('/tai-khoan/lich-su-don-hang')}
            >
                <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} width={"100%"}>
                    <Stack direction={"row"} spacing={1} alignItems={"center"}>
                        <IconShoppingBagEdit size={18}/>
                        <Typography variant="body2" fontWeight={700}>
                            Lịch sử đơn hàng
                        </Typography>
                    </Stack>
                    <IconArrowNarrowRight />
                </Stack>
            </Button>
            <Button 
                variant="contained" 
                color={router.asPath === "/tai-khoan/so-dia-chi" ? "secondary" : "grey"}
                size="large"
                onClick={() => router.push('/tai-khoan/so-dia-chi')}
            >
                <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} width={"100%"}>
                    <Stack direction={"row"} spacing={1} alignItems={"center"}>
                        <IconAddressBook size={18}/>
                        <Typography variant="body2" fontWeight={700}>
                            Sổ địa chỉ
                        </Typography>
                    </Stack>
                    <IconArrowNarrowRight />
                </Stack>
            </Button>
            <Button variant="contained" color="error" size="large">
                <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} width={"100%"}>
                    <Stack direction={"row"} spacing={1} alignItems={"center"}>
                        <IconLogout size={18}/>
                        <Typography variant="body2" fontWeight={700}>
                            Đăng xuất
                        </Typography>
                    </Stack>
                    <IconArrowNarrowRight />
                </Stack>
            </Button>
        </Stack>
    )
}