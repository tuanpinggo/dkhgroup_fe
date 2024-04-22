import { useDocs } from "@/hooks/useDocs";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function FooterInfotSection4(){

    const {listDocs,isLoading} = useDocs()

    return(
        <Stack spacing={2}>
            <Typography variant="h3" component={"h2"} color={"#fff"} fontSize={16} fontWeight={700}>
                TÀI LIỆU
            </Typography>
            <Stack spacing={1}>
                {listDocs && listDocs?.data?.map(item =>
                    <Link 
                        href={`/huong-dan-su-dung/${item?.attributes?.slug}_id=${item.id}`} 
                        key={item.id}
                    >
                        <Typography variant="body2" color={"#fff"}>
                            {item?.attributes?.title}
                        </Typography>
                    </Link>
                )}
            </Stack>
        </Stack>
    )
}