import { mainNav } from "@/components/ui/navbar";
import { useContact } from "@/hooks/useContact";
import { Box, Button, Divider, Drawer, Stack, Typography } from "@mui/material";
import { IconChevronRight, IconMenu2 } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function NavbarMobile(){

    const [open,setOpen] = useState(false)

    const router = useRouter()

    const {contact, isLoading} = useContact()

    const handleClick = (link) => {
        router.push(link)
        setOpen(false)
    }

    return(
        <>
            <Button 
                variant="text" 
                sx={{minWidth: '40px'}} 
                onClick={() => setOpen(true)}
            >
                <IconMenu2 size={28} color="#fff"/>
            </Button>
            <Drawer open={open} onClose={() => setOpen(false)}>
                <Stack 
                    width={350} 
                    p={3} 
                    spacing={4}
                >
                    <Stack spacing={2}>
                        {mainNav.map(item =>
                            <Stack
                                key={item.id}
                                direction={"row"}
                                justifyContent={"space-between"}
                                alignItems={"center"}
                                px={2}
                                py={2}
                                bgcolor={router.asPath === item.link ? 'primary.main' :"#f2f2f2"}
                                borderRadius={1.5}
                                onClick={() => handleClick(item.link)}
                                
                            >
                                <Typography 
                                    variant="body1" 
                                    fontWeight={router.asPath === item.link ? 700 :500}
                                    color={router.asPath === item.link ? '#fff' :"#222"}
                                >
                                    {item.title}
                                </Typography>
                                <Stack 
                                    justifyContent={"center"} 
                                    alignItems={"center"}
                                    bgcolor={"#fff"}
                                    width={30}
                                    height={30}
                                    borderRadius={10}
                                >
                                    <IconChevronRight size={15}/>
                                </Stack>
                            </Stack>
                        )}
                    </Stack>
                    <Divider sx={{my:3}} />
                    <Stack flex={1} spacing={2}>
                        <Image
                            src="/assets/ngang.svg"
                            width={200}
                            height={36}
                            alt="DKH Group Logo"
                        />
                        <Typography variant="body2">
                            {contact?.data?.attributes?.footer_description || "DKH Group được thành lập với một mục đích rất rõ ràng: chúng tôi muốn mang đến cho thị trường những sản phẩm về đồ da, thời trang và dược phẩm phù hợp nhu cầu với chất lượng tốt nhất và giá cả hợp lí nhất."}
                        </Typography>

                        <Stack spacing={0}>
                            <Typography variant="body2" component={"span"}>
                                Hotline
                            </Typography>

                            {contact && contact?.data?.attributes?.Hotline?.map(item =>
                                <Link href={`tel:${item?.phone}`} key={item.id}>
                                    <Typography fontWeight={700}>
                                        {item?.phone} - {item?.text}
                                    </Typography>
                                </Link>
                            )}
                        </Stack>

                        <Link href="mailto:contact@dkhgroup.com.vn">
                            <Stack spacing={0}>
                                <Typography variant="body2" component={"span"}>
                                    Email
                                </Typography>
                                {contact && contact?.data?.attributes?.Email?.map(item =>
                                    <Link href={`mailto:${item.email}`} key={item.id}>
                                        <Typography fontWeight={700}>
                                            {item.email}
                                        </Typography>
                                    </Link>
                                )}
                            </Stack>
                        </Link>
                    </Stack>
                </Stack>
            </Drawer>
        </>
    )
}