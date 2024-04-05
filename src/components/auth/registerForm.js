import { Button, Stack, TextField } from "@mui/material";

export default function RegisterForm(){
    return(
        <Stack spacing={1.5}>
            <TextField 
                id="fullname" 
                hiddenLabel
                variant="outlined"
                sx={styles.input}
                placeholder="Họ tên của bạn"
                size="small"
            />
            <TextField 
                id="usename" 
                hiddenLabel
                variant="outlined"
                sx={styles.input}
                placeholder="Số điện thoại của bạn"
                size="small"
            />
            <TextField 
                id="email" 
                hiddenLabel
                variant="outlined"
                sx={styles.input}
                placeholder="Địa chỉ email"
                size="small"
            />
            <TextField 
                id="password" 
                hiddenLabel
                variant="outlined"
                sx={styles.input}
                placeholder="Mật khẩu"
                size="small"
            />
            <TextField 
                id="repeatPassword" 
                hiddenLabel
                variant="outlined"
                sx={styles.input}
                placeholder="Nhập lại mật khẩu"
                size="small"
            />
            <Button type="submit" variant="contained" size="large">
                Đăng ký
            </Button>
        </Stack>
    )
}

const styles = {
    input: {
        '& input': '10px 30px',
        '& fieldset': {
            borderRadius: 20
        }
    }
}