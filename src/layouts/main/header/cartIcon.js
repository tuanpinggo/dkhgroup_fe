import { Badge } from "@mui/material";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Image from "next/image";

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 18,
      border: `1spx solid ${theme.palette.background.paper}`,
      padding: '0 2px',
      fontSize: '10px'
    },
}));

export default function IconCart(){
    return(
        <StyledBadge badgeContent={4} color="primary">
            <Image
                src="/assets/icon-cart.svg"
                width={24}
                height={24}
                alt="icon cart"
            />
        </StyledBadge>
    )
}