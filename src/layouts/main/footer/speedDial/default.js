import SpeedDialAction from '@mui/material/SpeedDialAction';
import { Box, SpeedDial } from '@mui/material';
import Image from 'next/image';
import { IconPhone } from '@tabler/icons-react';
import { useRouter } from 'next/router';


const actions = [
  { icon: <IconPhone color='#ED3237'/>, name: 'Hotline: 0962663459', href: 'tel:0962663459' },
  { icon: <Image src={"/assets/zalo-icon.svg"} width={30} height={30} alt="Zalo"/>, name: 'Zalo: 0962663459', href:"https://zalo.me/0962663459" },
];

export default function SpeedDialButtonDefault(){

    const router = useRouter()

    return(
        <Box 
            sx={{ 
                height: 320, 
                transform: 'translateZ(0px)', 
                flexGrow: 1,
                position: 'fixed',
                bottom: 20,
                right: 20
            }}
        >
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ 
                    position: 'absolute', 
                    bottom: 16, right: 16, 
                    '& > button': {bgcolor: 'transparent'},
                    '& > button:hover': {
                        bgcolor: 'transparent'
                    }
                }}
                icon={<Image src="/assets/icon-hotline.svg" width={90} height={92} alt="icon-hotline" />}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={() => router.push(action.href)}
                    />
                ))}
            </SpeedDial>
        </Box>
    )
}