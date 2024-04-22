import LoadingProductGridItem from "@/components/screen/loadingProductGrid";
import { Stack, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import ProductGrid from "../grid";
import Image from "next/image";

export default function ResultSearch({...props}){

    return(
        <Stack spacing={1.5}>
            <Typography variant="body2" fontWeight={600} color={'#555'}>
                {props?.isResult ? "Kết quả tìm kiếm" : "Sản phẩm gợi ý cho bạn"}
            </Typography>

            {props?.loading &&
                <Grid container spacing={2}>
                    <Grid xs={6} md={3}>
                        <LoadingProductGridItem imgWidth={280} imgHeight={230} />
                    </Grid>
                    <Grid xs={6} md={3}>
                        <LoadingProductGridItem imgWidth={280} imgHeight={230} />
                    </Grid>
                    <Grid xs={6} md={3}>
                        <LoadingProductGridItem imgWidth={280} imgHeight={230} />
                    </Grid>
                    <Grid xs={6} md={3}>
                        <LoadingProductGridItem imgWidth={280} imgHeight={230} />
                    </Grid>
                </Grid>
            }

            {!props?.loading && props?.products &&
                <Grid container spacing={2}>
                    {props?.products?.map(item => 
                        <Grid xs={6} md={3} key={item.id}>
                            <ProductGrid 
                                id={item?.id} 
                                data={item?.attributes}
                            />
                        </Grid>
                    )}
                </Grid>
            }

            {!props?.loading && props?.products?.length < 1 && 
                <Stack justifyContent={"center"} alignItems={"center"} py={5}>
                    <Image
                        src="/assets/not-found.svg"
                        width={500}
                        height={333}
                        alt="search not found"
                    />
                    <Typography variant="body1" fontWeight={300} fontSize={16}>
                        Xin lỗi nhưng không có sản phẩm nào phù hợp với từ khóa bạn đang tìm kiếm
                    </Typography>
                </Stack>
            }

        </Stack>
    )
}