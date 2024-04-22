import SeoMetaTag from "@/components/pageConfig/meta";
import PostCategoryBreadCrumb from "@/components/post/breakcrumbs"
import FeaturedPost from "@/components/post/featuredPost";
import LastPost from "@/components/post/lastPost";
import MostViewPost from "@/components/post/mostViewPost";
import { globalConfig } from "@/theme/globalConfig"
import { Stack, Container, Typography, Box } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';

const config = {
    title: 'Tin tức - Thông cáo báo chí DKHGroup',
    description: 'Cập nhật các thông tin mới nhất về thương hiệu đồ da cao cấp Martini Leather, DKH Group, các thông cáo đến báo chí.'
}

export default function TinTucPage({ posts, featured,mostview }){
    return(
        <>
            <SeoMetaTag
                title={config.title}
                description={config.description}
            />

            <Stack spacing={0}>
                <Stack spacing={0} py={8} bgcolor={"#F8F8F8"}>
                    <Container maxWidth={globalConfig.maxWidth}>
                        <Stack spacing={3}>
                            <PostCategoryBreadCrumb link={'#'} title="Tin tức - Thông cáo báo chí" />
                            <Stack spacing={1}>
                                <Typography variant="h1" component={"h1"} fontWeight={700} fontSize={38} lineHeight={1.2} letterSpacing={-2} color="secondary.main">
                                    {config.title}
                                </Typography>
                                <Typography variant="body2">
                                    {config.description}
                                </Typography>
                            </Stack>
                        </Stack>
                    </Container>
                </Stack>
                <Stack py={3} spacing={{xs:0,md:5}}>
                    <Box display={{xs:'none',md:'block'}}>
                        <Container maxWidth={globalConfig.maxWidth}>
                            <Grid container spacing={2} justifyContent={"space-between"}>
                                <Grid xs={12} lg={5}>
                                    <FeaturedPost datas={featured?.data}/>
                                </Grid>
                                <Grid xs={12} lg={6.5}>
                                    <MostViewPost datas={mostview?.data}/>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>

                    <Box>
                        <Container maxWidth={globalConfig.maxWidth}>
                            <LastPost datas={posts?.data}/>
                        </Container>
                    </Box>

                </Stack>
            </Stack>
        </>
        
    )
}

export async function getStaticProps() {
    const res = await fetch(`${globalConfig.api_url}/blogs?populate=*&sort[0]=id:desc`)
    const posts = await res.json()

    const res1 = await fetch(`${globalConfig.api_url}/blogs?populate=*&filters[featured][$eq]=true&pagination[limit]=1&sort[0]=id:desc`)
    const featured = await res1.json()

    const res2 = await fetch(`${globalConfig.api_url}/blogs?populate=*&filters[most_view][$eq]=true&pagination[limit]=4&sort[0]=id:desc`)
    const mostview = await res2.json()
   
    return {
      props: {
        posts,
        featured,
        mostview
      },
      revalidate: 10, // In seconds
    }
}