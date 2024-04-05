import { globalConfig } from "@/theme/globalConfig";
import { Button, Container, Divider, Stack, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import ProductGrid from "../grid";

export default function ListProductCategory(){
    return(
        <Container maxWidth={globalConfig.maxWidth}>
            <Grid container spacing={2}>
                <Grid xs={12} md={6} lg={3}>
                    <ProductGrid />
                </Grid>
                <Grid xs={12} md={6} lg={3}>
                    <ProductGrid />
                </Grid>
                <Grid xs={12} md={6} lg={3}>
                    <ProductGrid />
                </Grid>
                <Grid xs={12} md={6} lg={3}>
                    <ProductGrid />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid xs={12} md={6} lg={3}>
                    <ProductGrid />
                </Grid>
                <Grid xs={12} md={6} lg={3}>
                    <ProductGrid />
                </Grid>
                <Grid xs={12} md={6} lg={3}>
                    <ProductGrid />
                </Grid>
                <Grid xs={12} md={6} lg={3}>
                    <ProductGrid />
                </Grid>
            </Grid>
            <Divider sx={{my:2}}/>
            <Stack direction={"row"} justifyContent={"center"} alignItems={"center"}>
                <Button variant="contained" color="secondary">Xem thêm</Button>
            </Stack>
            <Typography variant="body2" fontWeight={300} textAlign={"center"} mt={1.5} mb={4}>
                Hiển thị 8 trên tổng số 100 sản phẩm
            </Typography>
        </Container>
    )
}