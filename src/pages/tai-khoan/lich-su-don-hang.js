import SeoMetaTag from "@/components/pageConfig/meta";
import AccountLayout from "@/layouts/account";
import { Stack } from "@mui/material";

export default function HistoryOrderPage(){
    return(
        <>
            <SeoMetaTag
                title="Lịch sử đơn hàng"
            />
            <Stack spacing={3}>
                Lịch sử đơn hàng
            </Stack>
        </>
    )
}

HistoryOrderPage.Layout = AccountLayout