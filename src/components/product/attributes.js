import { globalConfig } from "@/theme/globalConfig";
import { Stack, Typography } from "@mui/material";

export default function Attribute({item,selectAttribute,setSelectAttribute,setThumbnail}){
    
    const handleChangeAttribute = () => {
        setSelectAttribute(item?.property?.data?.id)
        if(item?.thumbnail?.data?.attributes?.url){
            setThumbnail(globalConfig.img_url + item?.thumbnail?.data?.attributes?.url)
        }
    }
    
    return(
        <Stack 
            justifyContent={"center"} 
            alignItems={"center"}
            border={item?.property?.data?.id == selectAttribute && "1px solid #000"}
            borderRadius={2}
            onClick={handleChangeAttribute}
        >
            <Stack 
                justifyContent={"center"}
                alignItems={"center"}
                bgcolor={item?.property?.data?.attributes?.color || "#d30000"}
                px={2}
                py={0.6}
                borderRadius={1}
                key={item.id}
                sx={{cursor: 'pointer'}}
                m={"2px"}
            >
                <Typography textTransform={"uppercase"} variant="body2" fontSize={10} fontWeight={600} color={"#fff"}>
                    {item?.property?.data?.attributes?.name}
                </Typography>
            </Stack>
        </Stack>
    )
}