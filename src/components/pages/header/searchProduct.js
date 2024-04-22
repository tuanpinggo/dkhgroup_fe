import ProductGrid from '@/components/product/grid';
import Grid from '@mui/material/Unstable_Grid2';

export default function SearchProductDesktop({datas}){
    return(
        <Grid container spacing={2}>
            <Grid xs={12} md={6} lg={3} key={item.id}>
                <ProductGrid 
                    id={item?.id} 
                    data={item?.attributes}
                />
            </Grid>
        </Grid>
    )
}