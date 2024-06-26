import { globalConfig } from "@/theme/globalConfig";
import { Stack, Container, Typography, Box } from "@mui/material";
import WestIcon from '@mui/icons-material/West';
import Link from "next/link";
import Grid from '@mui/material/Unstable_Grid2';

import { createMarkup } from "@/components/createMarkup";
import SeoMetaTag from "@/components/pageConfig/meta";
import { cdnImage } from "@/components/ui/cdnImage";
 
export async function getStaticProps({ params }) {

    const slug = params?.slug

    const id = slug.slice(slug.search('_id=') + 4)

    const res = await fetch(`${globalConfig.api_url}/blogs/${id}?populate[0]=thumbnail&populate[1]=seo&populate[2]=seo.thumbnail&populate[3]=blog_category`)
    const posts = await res.json()
   
    return {
      props: {
        posts,
      },
      revalidate: globalConfig.revalidateTime, // In seconds
    }
}

export async function getStaticPaths() {
    const res = await fetch(`${globalConfig.api_url}/blogs`)
    const posts = await res.json()
   
    // Get the paths we want to pre-render based on posts
    const paths = posts?.data?.map((post) => ({
        params: { 
            id: post.id,
            slug: `${post.slug}_id=${post.id}`
        },
    }))
   
    return { paths, fallback: 'blocking' }
}

export default function BLogPost({posts}){

    return(
        <>
            <SeoMetaTag
                title={posts?.data?.attributes?.seo?.title || posts?.data?.attributes?.title}
                description={posts?.data?.attributes?.seo?.description || posts?.data?.attributes?.description}
                thumbnail={
                    cdnImage(
                        posts?.data?.attributes?.seo?.thumbnail?.data?.attributes?.url ||
                        posts?.data?.attributes?.thumbnail?.data?.attributes?.url
                    )
                }
            />
            <Stack spacing={0}>
                <Box bgcolor={"#f8f8f8"}>
                    <Container maxWidth={globalConfig.maxWidth}>
                        <Stack py={8} spacing={2}>
                            <Link href={`/category/${posts?.data?.attributes?.blog_category?.data?.attributes?.slug}`}>
                                <Stack direction={"row"} alignItems={"center"} spacing={1}>
                                    <WestIcon fontSize="15"/>
                                    <Typography variant="body2" fontWeight={500}>
                                        Quay lại trang {posts?.data?.attributes?.blog_category?.data?.attributes?.name}
                                    </Typography>
                                </Stack>
                            </Link>
                            <Typography variant="h1" component={"h1"}>
                                {posts?.data?.attributes?.title}
                            </Typography>
                        </Stack>
                    </Container>
                </Box>
                <Box py={5}>
                    <Container maxWidth={globalConfig.maxWidth}>
                        <Grid container spacing={2} justifyContent={"space-between"}>
                            <Grid xs={12} md={7}>
                                <Box className="post-content">
                                    <div dangerouslySetInnerHTML={createMarkup(posts?.data?.attributes?.content)} /> 
                                </Box>
                            </Grid>
                            <Grid xs={12} md={4}>
                                <Stack spacing={2} position={"sticky"} top={10} bottom={10} display={{xs: 'none',lg:'block'}}>
                                    <Typography variant="h2" component={"h2"} fontSize={22} fontWeight={700} color="secondary.main" letterSpacing={-1}>
                                        Mục lục
                                    </Typography>
                                    <Box component={"ul"} className="toc">
                                        <Box className="toc" />
                                    </Box>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Stack>
        </>
    )
}

