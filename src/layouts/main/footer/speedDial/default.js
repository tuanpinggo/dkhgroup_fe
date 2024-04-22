import SpeedDialAction from '@mui/material/SpeedDialAction';
import { Box, SpeedDial } from '@mui/material';
import Image from 'next/image';
import { IconPhone } from '@tabler/icons-react';
import { useRouter } from 'next/router';
import { useContact } from '@/hooks/useContact';

export default function SpeedDialButtonDefault(){

    const {contact, isLoading} = useContact()
    
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
                <SpeedDialAction
                    icon={<IconPhone color='#ED3237'/>}
                    tooltipTitle={`Hotline: ${contact?.data?.attributes?.hotline_main || '0963863459'}`}
                    onClick={() => router.push(`tel:${contact?.data?.attributes?.hotline_main1 || '0963863459'}`)}
                />

                <SpeedDialAction
                    icon={<Image src={"/assets/zalo-icon.svg"} width={30} height={30} alt="Zalo"/>}
                    tooltipTitle={`Zalo: ${contact?.data?.attributes?.zalo_main}`}
                    onClick={() => router.push(`https://zalo.me/${contact?.data?.attributes?.zalo_main}`)}
                />

            </SpeedDial>
        </Box>
    )
}