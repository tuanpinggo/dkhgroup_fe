import ForgotPasswordForm from "@/components/auth/forgotPasswordForm";
import FormOtp from "@/components/auth/otp";
import SetNewPasswordForm from "@/components/auth/setNewPassword";
import { Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function ForgotPasswordPage(){
    return(
        <Container maxWidth={"sm"}>
            <Stack spacing={3} my={8}>
                <Stack spacing={1} >
                    <Typography variant="h1" component={"h1"} fontWeight={700} color="#222">
                        Quên mật khẩu
                    </Typography>
                    <Typography variant="body2">
                        Để đặt lại mật khẩu cho tài khoản của bạn, vui lòng nhập thông tin theo form sau
                    </Typography>
                </Stack>
                <ForgotPasswordForm />
                <FormOtp loading={false} />
                <SetNewPasswordForm />
                <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                    <Link href="/dang-nhap">
                        <Typography variant="body2" fontWeight={500} color="#0068FF">Quay lại trang đăng nhập</Typography>
                    </Link>
                </Stack>
            </Stack>
        </Container>
    )
}