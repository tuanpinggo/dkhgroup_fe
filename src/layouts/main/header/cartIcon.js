import { Badge, Button } from "@mui/material";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Image from "next/image";
import { IconColorFilter, IconShoppingBag } from "@tabler/icons-react";

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 18,
      border: `1spx solid ${theme.palette.background.paper}`,
      padding: '0 2px',
      fontSize: '10px'
    },
}));

export default function IconCart({iconSize = 28, iconColor = "#422F2C"}){
    return(
        <Button sx={{minWidth: '40px', mr: 1}}>
            <StyledBadge badgeContent={4} color="primary">
                <IconShoppingBag 
                    size={iconSize}
                    color={iconColor}
                />
            </StyledBadge>
        </Button>
    )
}