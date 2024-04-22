import SearchFormProduct from "@/components/product/search/searchForm";
import { Dialog, DialogContent, DialogTitle, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export default function SearchBox(){
    const [open,setOpen] = useState(false)
    return(
        <>
        
            <Stack 
                direction={"row"} 
                bgcolor={"#f2f2f2"} 
                px={2} 
                py="10px" 
                minWidth={"220px"} 
                borderRadius={"30px"} 
                gap={1.5} 
                alignItems={"center"}
                sx={{cursor: 'pointer'}}
                onClick={() => setOpen(true)}
            >
                <Image
                    src="/assets/icon-search.svg"
                    width={20}
                    height={20}
                    alt="icon search"
                />
                <Typography variant="body2" component={"span"} color="#666666" fontWeight={600} fontSize={14}>
                    Tìm kiếm sản phẩm ...
                </Typography>
            </Stack>

            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="search-product-title"
                aria-describedby="search-product-description"
                maxWidth={"lg"}

            >
                <DialogContent>
                    <SearchFormProduct />
                </DialogContent>
            </Dialog>
        </>
    )
}