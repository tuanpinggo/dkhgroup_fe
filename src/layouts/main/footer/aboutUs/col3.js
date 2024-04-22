import LoadingScreen from "@/components/screen/loading";
import { cdnImage } from "@/components/ui/cdnImage";
import { useContact } from "@/hooks/useContact";
import { Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function FooterAboutUsSection3(){
    
    const {contact, isLoading} = useContact()
    if(isLoading) return <LoadingScreen />

    return(
        <Stack 
            direction={"row"}
            spacing={2.5}
        >
            {contact && contact?.data?.attributes?.social?.map(item =>
                <Link href={item.link} key={item.id}>
                    <Image
                        src={cdnImage(item?.icon?.data?.attributes?.url,'/assets/fb.svg')}
                        width={40}
                        height={40}
                        alt="DKGroup Fanpage"
                    />
                </Link>
            )}
            
        </Stack>
    )
}