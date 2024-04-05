import ProductFilter from "@/components/product/category/filter";
import ProductCategoryHeroSection from "@/components/product/category/hero";
import ListProductCategory from "@/components/product/category/list";
import { Stack } from "@mui/material";

export default function ProductCategory(){
    return(
        <Stack spacing={0}>
            <ProductCategoryHeroSection title="Túi da thời trang" />
            <ProductFilter />
            <ListProductCategory />
        </Stack>
    )
}