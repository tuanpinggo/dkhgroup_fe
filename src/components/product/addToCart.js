import { LoadingButton } from "@mui/lab";
import { IconGardenCart } from "@tabler/icons-react";

export default function AddToCart(){
    return(
        <LoadingButton
            loading={false}
            startIcon={<IconGardenCart size={15} />}
            size="small"
        >
                Thêm giỏ hàng
        </LoadingButton>
)
}