import SeoMetaTag from "@/components/pageConfig/meta";
import BestSaleSection from "@/components/pages/homepage/bestSale";
import ProductCategoriesSection from "@/components/pages/homepage/categories";
import FeatureProductSection from "@/components/pages/homepage/featuredProduct";
import SlideHome from "@/components/pages/homepage/slide";
import { globalConfig } from "@/theme/globalConfig";
import { Container } from "@mui/material";

export default function Home({slides,featuredProducts,bestSaleProducts,productCategories,allProducts}) {
  return (
    <>
      <SeoMetaTag
        title="DKH Group"
        description="DKH Group được thành lập với một mục đích rất rõ ràng: chúng tôi muốn mang đến cho thị trường những sản phẩm chất lượng cao về đồ da, thời trang và dược phẩm"
      />
      <SlideHome datas={slides} />
      <Container maxWidth={globalConfig.maxWidth}>
        <FeatureProductSection datas={featuredProducts}/>
        <BestSaleSection datas={bestSaleProducts}/>
        <ProductCategoriesSection 
          datas={productCategories} 
          allProducts={allProducts}
        />
      </Container>
    </>
  );
}

export async function getStaticProps() {
  
  const getFeaturedProducts = await fetch(`${globalConfig.api_url}/products?populate[0]=thumbnail&fields[0]=name&fields[1]=expert&fields[2]=price&fields[3]=old_price&populate[1]=tag&populate[2]=tag_img&fields[4]=bg_color_thumbnail&populate[3]=attributes&populate[4]=attributes.property&filters[featured]=true&populate[5]=tag_img&fields[5]=slug&populate[6]=attributes.thumbnail&pagination[page]=1&pagination[pageSize]=4`)

  const getBestSaleProducts = await fetch(`${globalConfig.api_url}/products?populate[0]=thumbnail&fields[0]=name&fields[1]=expert&fields[2]=price&fields[3]=old_price&populate[1]=tag&populate[2]=tag_img&fields[4]=bg_color_thumbnail&populate[3]=attributes&populate[4]=attributes.property&filters[featured]=true&populate[5]=tag_img&fields[5]=slug&populate[6]=attributes.thumbnail&pagination[page]=1&pagination[pageSize]=4`)

  const getSlide = await fetch(`${globalConfig.api_url}/slides?populate=*`)

  const getProductCategories = await fetch(`${globalConfig.api_url}/product-categories?populate[0]=thumbnail`)

  const getAllProducts = await fetch(`${globalConfig.api_url}/products?populate[0]=thumbnail&fields[0]=name&fields[1]=expert&fields[2]=price&fields[3]=old_price&populate[1]=tag&populate[2]=tag_img&fields[4]=bg_color_thumbnail&populate[3]=attributes&populate[4]=attributes.property&filters[featured]=true&populate[5]=tag_img&fields[5]=slug&populate[6]=attributes.thumbnail&pagination[page]=1&pagination[pageSize]=8`)

  const featuredProducts = await getFeaturedProducts.json()
  const bestSaleProducts = await getBestSaleProducts.json()
  const slides = await getSlide.json()
  const productCategories = await getProductCategories.json()
  const allProducts = await getAllProducts.json()
 
  return {
    props: {
      featuredProducts,
      bestSaleProducts,
      slides,
      productCategories,
      allProducts
    },
    revalidate: 10, // In seconds
  }
}
