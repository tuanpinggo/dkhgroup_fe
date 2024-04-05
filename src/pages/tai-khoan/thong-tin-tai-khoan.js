import AccountLayout from "@/layouts/account";
import { Box, Button, Stack, Typography } from "@mui/material";

export default function InfoAccountPage(){
    return(
        <>
            <Stack spacing={4} mb={3}>
                <Typography variant="h1" component={"h1"} fontSize={24} fontWeight={700} letterSpacing={-1.5}>
                    Thông tin tài khoản
                </Typography>
                <Stack spacing={2}>
                    <Stack direction={"row"} spacing={3} alignItems={"center"}>
                        <Box width={200}>
                            <Typography fontWeight={400}>Họ và tên</Typography>
                        </Box>
                        <Typography fontWeight={700}>Nguyễn Huy Tuân</Typography>
                    </Stack>
                    <Stack direction={"row"} spacing={3} alignItems={"center"}>
                        <Box width={200}>
                            <Typography fontWeight={400}>Số điện thoại</Typography>
                        </Box>
                        <Typography fontWeight={700}>0968168800</Typography>
                    </Stack>
                    <Stack direction={"row"} spacing={3} alignItems={"center"}>
                        <Box width={200}>
                            <Typography fontWeight={400}>Email</Typography>
                        </Box>
                        <Typography fontWeight={700}>tuannh1090@gmail.com</Typography>
                    </Stack>
                    <Stack direction={"row"} spacing={3} alignItems={"center"}>
                        <Box width={200}>
                            <Typography fontWeight={400}>Giới tính</Typography>
                        </Box>
                        <Typography fontWeight={700}>Nam</Typography>
                    </Stack>
                    <Stack direction={"row"} spacing={3} alignItems={"center"}>
                        <Box width={200}>
                            <Typography fontWeight={400}>Ngày sinh</Typography>
                        </Box>
                        <Typography fontWeight={700}>10/09/1990</Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Button variant="outlined">Cập nhật</Button>

            <Stack spacing={4} mb={3} mt={3}>
                <Typography variant="h2" component={"h2"} fontSize={24} fontWeight={700} letterSpacing={-1.5}>
                    Thông tin đăng nhập
                </Typography>
                <Stack spacing={2}>
                    <Stack direction={"row"} spacing={3} alignItems={"center"}>
                        <Box width={200}>
                            <Typography fontWeight={400}>Email</Typography>
                        </Box>
                        <Typography fontWeight={700}>Nguyễn Huy Tuân</Typography>
                    </Stack>
                    <Stack direction={"row"} spacing={3} alignItems={"center"}>
                        <Box width={200}>
                            <Typography fontWeight={400}>Mật khẩu</Typography>
                        </Box>
                        <Typography fontWeight={700}>****************************</Typography>
                    </Stack>
                </Stack>
            </Stack>

            <Button variant="outlined">Đổi mật khẩu</Button>
        </>
    )
}

InfoAccountPage.Layout = AccountLayout