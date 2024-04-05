import {Button, CircularProgress, Stack, Typography } from "@mui/material";
import VerificationInput from "react-verification-input";

export default function FormOtp({ ...props }) { 

    return (
        <Stack spacing={1.5} justifyContent={"space-between"} alignItems={"center"}>

                <VerificationInput
                    onComplete={(value) => props.handleCheckOtp(value)}
                    validChars="0-9"
                    inputProps={{ inputMode: "numeric" }}
                    autoFocus
                />

                {props.loading &&
                    <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        width="100%"
                        position="absolute"
                        top={0}
                        left={0}
                        height="100%"
                        bgcolor="rgb(0,0,0,0.3)"
                    >
                        <CircularProgress size={20}/>
                    </Stack>
                }
        </Stack>
    );
}
