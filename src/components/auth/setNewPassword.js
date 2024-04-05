import { Button, Stack, TextField } from "@mui/material";

export default function SetNewPasswordForm(){
    return(
        <Stack spacing={1.5}>
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
                Đặt lại mật khẩu
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