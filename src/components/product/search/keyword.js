import axiosClient from "@/axiosConfig/axiosClient";
import { Chip, Stack, Typography } from "@mui/material";

export default function KeywordSearchProduct({...props}){

    const handleClick = async (keyword) => {
        props.formik.setFieldValue('keyword',keyword)
        props.setLoading(true)
        try {
            const request = await axiosClient.get(`/noauth/products?populate[0]=thumbnail&fields[0]=name&fields[1]=expert&fields[2]=price&fields[3]=old_price&populate[1]=tag&populate[2]=tag_img&fields[4]=bg_color_thumbnail&populate[3]=attributes&populate[4]=attributes.property&populate[5]=tag_img&fields[5]=slug&populate[6]=attributes.thumbnail&fields[6]=id&filters[name][$contains]=${keyword}`)
            props.setProducts(request?.data)
        } catch (error) {
            console.log("🚀 ~ handleClick ~ error:", error)
        }
        props.setLoading(false)
    }

    return(
        <Stack spacing={1.5}>
            <Typography variant="body2" fontWeight={600} color={'#555'}>
                {props?.datas?.title_keyword || "Từ khóa nổi bật"}
            </Typography>
            <Stack direction={"row"} alignItems={"center"} spacing={1}>

                {props?.datas?.keyword && props?.datas?.keyword?.map(item =>
                    <Chip 
                        variant="outlined" 
                        label={item?.keyword}
                        size="small"
                        key={item.id}
                        sx={{cursor: 'pointer'}}
                        onClick={() => handleClick(item?.keyword)}
                    />
                )}
            </Stack>
        </Stack>
    )
}