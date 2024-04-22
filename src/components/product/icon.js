import { Box, Icon, SvgIcon } from "@mui/material"

function createMarkup(icon) {
    return {__html: icon};
}

export default function DkhIcon({icon}){

    let thisIcon;

    if(icon?.icon) thisIcon = JSON.parse(icon?.icon).component

    return (
        <Box className="svg-icon">
            {thisIcon && 
                <Box 
                    width={20} 
                    height={20} 
                    color="#d30000"
                    dangerouslySetInnerHTML={createMarkup(thisIcon)} 
                />
            }
        </Box>
    )
}
