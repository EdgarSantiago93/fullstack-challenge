import Swal from "sweetalert2";

export const generalError =()=>{
    Swal.fire({
        title: 'Error',
        text: 'Please try again later',
        icon: 'error',
        confirmButtonColor:'#2e58ff',
        confirmButtonText: 'Ok'
    })
}