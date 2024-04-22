import axiosClient from "@/axiosConfig/axiosClient";
import { Chip, Stack } from "@mui/material";

export default function ListCategories({...props}){

    const handleChange = async (value,id) => {
        props.setSelect(value)
        props.setLoading(true)
        try {

            let filter = `filters[product_categories][id][$eq]=${id}`

            if(id === 0) filter = ""

            const req = await axiosClient.get(`/noauth/products?populate[0]=thumbnail&fields[0]=name&fields[1]=expert&fields[2]=price&fields[3]=old_price&populate[1]=tag&populate[2]=tag_img&fields[4]=bg_color_thumbnail&populate[3]=attributes&populate[4]=attributes.property&populate[5]=tag_img&fields[5]=slug&populate[6]=attributes.thumbnail&pagination[page]=1&pagination[pageSize]=8&${filter}`)
            props.setProducts(req)

        } catch (error) {
            console.log("🚀 ~ handleChange ~ r:", error)
        }
        props.setLoading(false)
    }

    return(
        <Stack 
            direction={"row"} 
            justifyContent={"center"} 
            alignItems={"center"} 
            spacing={1}
        >
            <Chip 
                label="Tất cả" 
                color={props.select === "all" ? "primary" : "secondary"}
                sx={styles.chip}
                onClick={() => handleChange("all",0)}
            />
            {props.datas && props.datas?.data?.map(item => 
                <Chip 
                    label={item?.attributes?.name}
                    key={item.id}
                    color={props.select === item?.attributes?.name ? "primary" : "secondary"}
                    sx={styles.chip}
                    onClick={() => handleChange(item?.attributes?.name,item.id)}
                />
            )}
        </Stack>
    )
}

const styles = {
    chip: {
        cursor: 'pointer',
        px: 3,
        py: 2.2,
        fontWeight: 700
    }
}