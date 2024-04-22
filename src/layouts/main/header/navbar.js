import { mainNav } from "@/components/ui/navbar"
import { Stack } from "@mui/material"
import Link from "next/link"
import { useRouter } from "next/router"

export default function DefaultNavbar(){

    const router = useRouter()

    return(
        <Stack component={"ul"} height={80} p={0} m={0} className="main-nav" direction={"row"} spacing={0.5}>
            {mainNav.map(item =>
                <Stack 
                    key={item.id} 
                    height={"100%"} 
                    justifyContent={"center"} 
                    alignItems={"center"} 
                    className={router?.asPath === item.link && 'active'} 
                    px={3}
                >
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