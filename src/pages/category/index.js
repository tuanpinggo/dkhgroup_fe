import SeoMetaTag from "@/components/pageConfig/meta"
import LastPost from "@/components/post/lastPost"
import { globalConfig } from "@/theme/globalConfig"
import { Box, Container } from "@mui/material"

export default function CategoryPage({ posts }){
    return(
        <>
            <SeoMetaTag
                title={"Tin tức - Thông cáo báo chí DKHGroup"}
                description={'Tin tức - Thông cáo báo chí mới nhất từ DKHGroup'}
            />
            <Box py={5}>
                <Container maxWidth={globalConfig.maxWidth}>
                    <LastPost datas={posts?.data}/>
                </Container>
            </Box>
        </>
    )
}

export async function getStaticProps() {
    const res = await fetch(`${globalConfig.api_url}/blogs?populate=*`)
    const posts = await res.json()
   
    return {
      props: {
        posts,
      },
      revalidate: 10, // In seconds
    }
}