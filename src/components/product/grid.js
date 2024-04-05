import { Box, Chip, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function ProductGrid({name,attributes,thumbnail,feature,price,old_price,tag}){
    return(
        <Stack spacing={0} sx={{
            width: '100%',
            height: 'auto',
            mb: 2
        }}>
            <Box
                sx={{
                    bgcolor: '#F5F5F5',
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
            >
                <Image
                    src="/assets/default-product-thumbnail.png"
                    width={500}
                    height={500}
                    bgcolor="#F5F5F5"
                />

                <Stack sx={styles.tag} direction={"row"} justifyContent={"center"} alignItems={"center"} spacing={1}>
                    <Chip label="NEW" size="small" sx={{
                        bgcolor: 'primary.main',
                        borderRadius: 1.5,
                        minWidth: '60px',
                        fontSize: '10px',
                        fontWeight: 500,
                        color: '#fff',
                    }}/>
                </Stack>
            </Box>

            <Box sx={styles.content}>
                <Stack direction={"row"} justifyContent={"flex-start"} alignItems={"center"} spacing={1}>
                    <Chip label="Đen" size="small" sx={{
                        bgcolor: '#464646',
                        borderRadius: 1.5,
                        minWidth: '60px',
                        fontSize: '11px',
                        fontWeight: 500,
                        color: '#fff'
                    }}/>
                    <Chip label="Xanh Navi" size="small" sx={{
                        bgcolor: '#5D72AB',
                        borderRadius: 1.5,
                        minWidth: '60px',
                        fontSize: '11px',
                        fontWeight: 500,
                        color: '#fff'
                    }}/>
                    <Chip label="Nâu" size="small" sx={{
                        bgcolor: '#422F2C',
                        borderRadius: 1.5,
                        minWidth: '60px',
                        fontSize: '11px',
                        fontWeight: 500,
                        color: '#fff'
                    }}/>
                </Stack>

                <Stack spacing={0} my={2}>
                    <Typography variant="body1" component={"h3"} sx={styles.title}>
                        Túi Boston M3 thương hiệu Maldini
                    </Typography>
                    <Typography variant="body2" sx={styles.feature}>
                        Da bò Y nhập khẩu 100%
                    </Typography>
                </Stack>

                <Stack direction={"row"} spacing={2}>
                    <Typography variant="h4" component={"h4"} sx={styles.price}>
                        2,850,000 ₫
                    </Typography>
                </Stack>
            </Box>
        </Stack>
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
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8
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
    }
}