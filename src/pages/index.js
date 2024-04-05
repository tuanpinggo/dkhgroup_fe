import ProductGrid from "@/components/product/grid";
import { globalConfig } from "@/theme/globalConfig";
import { Box, Container, Stack, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';

export default function Home() {
  return (
      <Container maxWidth={globalConfig.maxWidth}>

        <Stack width={'100%'} p={3} className="dkh-bg-linear" my={3} borderRadius={1.5}>
          <Typography variant="h2" component={"h2"} color={"#fff"} fontWeight={700} fontSize={20} lineHeight={1.3} textTransform={"uppercase"} mb={2}>
            SẢN PHẨM NỔI BẬT
          </Typography>
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
        </Stack>

        <Stack width={'100%'} my={5} borderRadius={1.5}>
          <Typography variant="h2" component={"h2"} fontWeight={700} fontSize={20} lineHeight={1.3} textTransform={"uppercase"} mb={2}>
            BÁN CHẠY NHẤT
          </Typography>
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
        </Stack>
      </Container>
  );
}
