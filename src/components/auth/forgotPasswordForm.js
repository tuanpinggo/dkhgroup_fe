import { Button, Stack, TextField } from "@mui/material";

export default function ForgotPasswordForm(){
    return(
        <Stack spacing={1.5}>
            <TextField 
                id="usename" 
                hiddenLabel
                variant="outlined"
                sx={styles.input}
                placeholder="Số điện thoại của bạn"
                size="small"
            />
            <Button type="submit" variant="contained" size="large">
                Kiểm tra
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