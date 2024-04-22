import Swal from "sweetalert2";

export function globalError(){
    return Swal.fire({
        icon:'error',
        title: 'Lỗi',
        text: 'Có lỗi, vui lòng thử lại sau'
    })
}