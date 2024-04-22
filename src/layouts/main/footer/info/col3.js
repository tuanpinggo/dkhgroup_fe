import LoadingScreen from "@/components/screen/loading";
import { useStaticPage } from "@/hooks/useStaticPage";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function FooterInfotSection3(){

    const {listPage,isLoading} = useStaticPage()

    if(isLoading) return <LoadingScreen />

    return(
        <Stack spacing={2}>
            <Typography variant="h3" component={"h2"} color={"#fff"} fontSize={16} fontWeight={700}>
                CHÍNH SÁCH
            </Typography>
            <Stack spacing={1}>
                {listPage && listPage?.data?.map(item =>
                    <Link 
                        href={`/page/${item.attributes?.slug}_id=${item.id}`}
                        key={item.id}
                    >
                        <Typography variant="body2" color={"#fff"}>
                            {item.attributes?.title}
                        </Typography>
                    </Link>
                )}
            </Stack>
        </Stack>
    )
}