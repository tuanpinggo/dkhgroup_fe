import ListCategories from "@/components/product/listCategories";
import { Divider, Stack, Typography } from "@mui/material";
import { useState } from "react";
import Grid from '@mui/material/Unstable_Grid2';
import ProductGrid from "@/components/product/grid";
import LoadingProductGridItem from "@/components/screen/loadingProductGrid";

export default function ProductCategoriesSection({datas, allProducts}){

    const [select,setSelect] = useState("all")
    const [loading,setLoading] = useState(false)

    const [products,setProducts] = useState(allProducts)

    return(
        <Stack spacing={2} mb={3}>
            <ListCategories 
                datas={datas}
                select={select}
                setSelect={setSelect}
                loading={loading}
                setLoading={setLoading}
                setProducts={setProducts}
            />

            {loading &&
                <Grid container spacing={2}>
                    <Grid xs={6} md={3}>
                        <LoadingProductGridItem imgWidth={'100%'} imgHeight={230} />
                    </Grid>
                    <Grid xs={6} md={3}>
                        <LoadingProductGridItem imgWidth={'100%'} imgHeight={230} />
                    </Grid>
                    <Grid xs={6} md={3}>
                        <LoadingProductGridItem imgWidth={'100%'} imgHeight={230} />
                    </Grid>
                    <Grid xs={6} md={3}>
                        <LoadingProductGridItem imgWidth={'100%'} imgHeight={230} />
                    </Grid>
                </Grid>
            }

            {!loading &&
                <Stack spacing={2}>
                    <Grid container spacing={2}>
                        {products && products?.data?.map(item =>
                            <Grid xs={12} md={6} lg={3} key={item.id}>
                                <ProductGrid id={item?.id} data={item?.attributes}/>
                            </Grid>
                        )}
                    </Grid>
                    <Divider />
                    <Typography variant="body1" textAlign={"center"}>
                        Hiển thị {products?.meta?.pagination?.pageSize} trên tổng số {products?.meta?.pagination?.total} sản phẩm
                    </Typography>
                </Stack>
            }
        </Stack>
    )
}