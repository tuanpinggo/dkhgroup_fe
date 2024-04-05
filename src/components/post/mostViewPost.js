import { Divider, Stack, Typography } from "@mui/material";
import PostList from "./list";
import { format } from "date-fns";
export default function MostViewPost({datas}){
    return(
        <Stack spacing={2}>
            <Typography variant="h2" component={"h2"} fontSize={22} fontWeight={700} color="secondary.main" letterSpacing={-1}>
                Xem nhiều nhất
            </Typography>
            <Stack direction={"column"} spacing={2} divider={<Divider />}>
                {datas?.map(item => 
                    <PostList
                        key={item.id}
                        link={`/blog/${item?.attributes?.slug}_id=${item.id}`}
                        thumbnail={`http://localhost:1337${item?.attributes?.thumbnail?.data?.attributes?.url}`}
                        width={item?.attributes?.thumbnail?.data?.attributes?.width || 599}
                        height={item?.attributes?.thumbnail?.data?.attributes?.height || 300}
                        linkCat={'/'}
                        title={item?.attributes?.title}
                        category_title={item?.attributes?.blog_categories?.data[0]?.attributes?.name}
                        date={format(new Date(item?.attributes?.createdAt), 'dd/MM/yyyy')}
                        description={item?.attributes?.excerpt}
                    />
                )}
            </Stack>
        </Stack>
    )
}