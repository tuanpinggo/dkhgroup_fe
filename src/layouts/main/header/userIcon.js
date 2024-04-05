import { Box } from "@mui/material";
import Image from "next/image";

export default function UserIcon(){
    return(
        <Box>
            <Image src="/assets/user.svg" width={27} height={27} alt="User icon" />
        </Box>
    )
}