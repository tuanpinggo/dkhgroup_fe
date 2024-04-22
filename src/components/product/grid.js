import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import FormatCurrency from "../format/money";
import TagProduct from "./tag";
import Attribute from "./attributes";
import { globalConfig } from "@/theme/globalConfig";
import Link from "next/link";
import { useState } from "react";
import AddToCart from "./addToCart";

export default function ProductGrid({data,id}){

    const [selectAttribute,setSelectAttribute] = useState()

    const [thumbnail,setThumbnail] = useState(
        data?.thumbnail?.data?.attributes?.url
        ? `${globalConfig.img_url}${data?.thumbnail?.data?.attributes?.url}`
        : "/assets/default-product-thumbnail.png"
    )

    return(
        <>
        <Stack spacing={0} sx={{
            width: '100%',
            height: '100%',
            mb: 2,
            bgcolor: '#fff',
            borderRadius: 2
        }}>
            <Link href={`${data?.slug}_id=${id}`}>
                <Box
                    bgcolor={`#${data?.bg_color_thumbnail}`}
                    sx={{
                        width: '100%',
                        height: '100%',
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        position: 'relative',
                        '& img': {
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%'
                        }
                    }}
                    className="blog-cat-thumbnail"
                >
                    <Image
                        src={thumbnail}
                        width={500}
                        height={500}
                        alt={data?.thumbnail?.data?.attributes?.alternativeText || "Ảnh sản phẩm DKH Group"}
                    />

                    <Stack sx={styles.tag} direction={"row"} justifyContent={"center"} alignItems={"center"} spacing={1}>
                        {data?.tag && <TagProduct datas={data?.tag}/>}
                    </Stack>
                    {data?.tag_img?.data &&
                        <Box 
                            position={"absolute"} 
                            bottom={"5px"} 
                            left={"10px"}
                            width={200}
                            height={47}
                        >
                            <Image
                                src={`${globalConfig.img_url}${data?.tag_img?.data?.attributes?.url}`}
                                width={200}
                                height={47}
                                alt={data?.thumbnail?.data?.attributes?.alternativeText || "Khuyến mại DKH Group"}
                            />
                        </Box>
                    }
                </Box>
            </Link>

            <Box sx={styles.content}>
                <Stack 
                    direction={"row"} 
                    justifyContent={"flex-start"} 
                    alignItems={"center"} 
                    spacing={.5}
                >
                    {data?.attributes && data?.attributes?.map(item => 
                        <Attribute 
                            key={item?.id} 
                            item={item} 
                            selectAttribute={selectAttribute}
                            setSelectAttribute={setSelectAttribute}
                            setThumbnail={setThumbnail}
                        />
                    )}
                    
                </Stack>

                <Stack spacing={0} my={2}>
                    <Link href={`${data?.slug}_id=${id}`}>
                        <Typography 
                            variant="h3" 
                            component={"h3"} 
                            sx={styles.title}
                            className="product-name"
                        >
                            {data?.name}
                        </Typography>
                    </Link>
                    <Typography variant="body2" sx={styles.feature}>
                        {data?.expert}
                    </Typography>
                </Stack>

                <Stack direction={"row"} justifyContent="space-between" alignItems="center">
                    <Stack direction={"row"} spacing={1} alignItems={"flex-end"}>
                        <Typography variant="h4" component={"h4"} sx={styles.price}>
                            <FormatCurrency data={data?.price} />
                        </Typography>
                    </Stack>
                    <AddToCart />
                </Stack>
            </Box>
        </Stack>
        </>
    )
}

const styles = {
    tag: {
        position: 'absolute',
        top: '15px',
        right: '15px',
        '& > div': {
            height: 20,
            minWidth: 50,
        }
    },
    content: {
        p: 1.5,
        bgcolor: '#fff',
    },
    title: {
        fontSize: 16,
        fontWeight: 700,
        lineHeight: 1.25,
        letterSpacing: -0.5,
        color: '#422F2C'
    },
    feature: {
        letterSpacing: -0.5
    },
    price: {
        fontSize: 20,
        fontWeight: 700,
        letterSpacing: -1,
        color: '#222',
        lineHeight: 1
    },
    oldPrice: {
        fontSize: 14,
        fontWeight: 500,
        letterSpacing: -1,
        textDecoration: 'line-through',
        color: '#666',
        lineHeight: 1
    }
}