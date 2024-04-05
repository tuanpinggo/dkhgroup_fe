import PostCategoryBreadCrumb from "@/components/post/breakcrumbs"
import FeaturedPost from "@/components/post/featuredPost";
import LastPost from "@/components/post/lastPost";
import MostViewPost from "@/components/post/mostViewPost";
import { globalConfig } from "@/theme/globalConfig"
import { Stack, Container, Typography, Box } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';

export default function CategorySlugPage({posts}){
    return(
        <Stack spacing={0}>
            <Stack spacing={0} py={8} bgcolor={"#F8F8F8"}>
                <Container maxWidth={globalConfig.maxWidth}>
                    <Stack spacing={3}>
                        <PostCategoryBreadCrumb link={'#'} title="Tin tức - Thông cáo báo chí" />
                        <Stack spacing={1}>
                            <Typography variant="h1" component={"h1"} fontWeight={700} fontSize={38} lineHeight={1.2} letterSpacing={-2} color="secondary.main">Tin tức - Thông cáo báo chí</Typography>
                            <Typography variant="body2">Cập nhật các thông tin mới nhất về thương hiệu đồ da cao cấp Martini Leather, DKH Group, các thông cáo đến báo chí.</Typography>
                        </Stack>
                    </Stack>
                </Container>
            </Stack>
            <Stack py={3} spacing={{xs:0,md:5}}>
                <Box display={{xs:'none',md:'block'}}>
                    <Container maxWidth={globalConfig.maxWidth}>
                        <Grid container spacing={2} justifyContent={"space-between"}>
                            <Grid xs={12} lg={5}>
                                <FeaturedPost />
                            </Grid>
                            <Grid xs={12} lg={6.5}>
                                <MostViewPost />
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                <Box>
                    <Container maxWidth={globalConfig.maxWidth}>
                        <LastPost />
                    </Container>
                </Box>

            </Stack>
        </Stack>
    )
}

export async function getStaticProps({ params }) {

    const slug = params?.slug

    const res = await fetch(`${globalConfig.api_url}/blogs?populate=*`)
    const posts = await res.json()
   
    return {
      props: {
        posts,
      },
      revalidate: 10, // In seconds
    }
}

export async function getStaticPaths() {
    const res = await fetch(`${globalConfig.api_url}/blogs`)
    const posts = await res.json()
   
    // Get the paths we want to pre-render based on posts
    const paths = posts?.data?.map((post) => ({
        params: { 
            id: post.id,
            slug: post.attributes.slug
        },
    }))
   
    // We'll pre-render only these paths at build time.
    // { fallback: 'blocking' } will server-render pages
    // on-demand if the path doesn't exist.
    return { paths, fallback: 'blocking' }
}