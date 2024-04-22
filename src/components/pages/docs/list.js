import { useDocs } from "@/hooks/useDocs";
import { Divider, Stack, Typography } from "@mui/material";
import { IconCaretRightFilled, IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";

export default function ListDocs(){

    const {listDocs,isLoading} = useDocs()

    if(isLoading) return

    return(
        <Stack 
            spacing={3}
            sx={{
                position: 'sticky',
                top: 10,
                left: 0
            }}
        >
            <Typography 
                variant="h2" 
                component={"h2"}
                fontWeight={700}
                fontSize={20}
                color="primary.main"
            >
                Có thể bạn quan tâm
            </Typography>

            <Stack spacing={1} divider={<Divider />}>
                {listDocs && listDocs?.data?.map(item =>
                    <Link 
                        href={`/huong-dan-su-dung/${item.attributes?.slug}_id=${item.id}`}
                        key={item.id}
                    >
                        <Stack direction={"row"} spacing={1} alignItems={"center"}>
                            <IconCaretRightFilled size={16} />
                            <Typography>{item.attributes?.title}</Typography>
                        </Stack>
                    </Link>
                )}
            </Stack>
        </Stack>
    )
}