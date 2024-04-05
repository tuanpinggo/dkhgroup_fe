import { Box, Stack } from "@mui/material"
import Link from "next/link"

const mainNav = [
    {id:1,title:'Trang chủ',link: '/'},
    {id:2,title:'Túi Golf',link: '#'},
    {id:3,title:'Túi Clutch',link: '#'},
    {id:4,title:'Túi thời trang công sở',link: '#'},
    {id:5,title:'Ví da - Dây lưng',link: '#'},
]
export default function DefaultNavbar(){
    return(
        <Stack component={"ul"} height={80} p={0} m={0} className="main-nav" direction={"row"} spacing={0.5}>
            {mainNav.map(item =>
                <Stack key={item.id} height={"100%"} justifyContent={"center"} alignItems={"center"} className={item.id === 1 && 'active'} px={3}>
                    <Link 
                        href={item.link} 
                        style={{
                            fontWeight:700,
                            textTransform: 'uppercase',
                            color: '#383838',
                            height: '80px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        {item.title}
                    </Link>
                </Stack>
            )}
        </Stack>
    )
}