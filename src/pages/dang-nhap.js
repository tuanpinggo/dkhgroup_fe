import LoginForm from "@/components/auth/loginForm";
import { Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function LoginPage(){
    return(
        <Container maxWidth={"sm"}>
            <Stack spacing={3} my={8}>
                <Stack spacing={1} >
                    <Typography variant="h1" component={"h1"} fontWeight={700} color="#222">
                        Đăng nhập
                    </Typography>
                    <Typography variant="body2">
                        Đăng nhập để không bỏ lỡ quyền lợi và kiểm tra các đơn hàng bạn đã đặt
                    </Typography>
                </Stack>
                <LoginForm />
                <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                    <Link href="/dang-ky">
                        <Typography variant="body2" fontWeight={500} color="#0068FF">Đăng ký tài khoản mới</Typography>
                    </Link>
                    <Link href="/quen-mat-khau">
                        <Typography variant="body2" fontWeight={500} color="#0068FF">Quên mật khẩu?</Typography>
                    </Link>
                </Stack>
            </Stack>
        </Container>
    )
}