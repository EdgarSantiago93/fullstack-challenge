import Swal from "sweetalert2";

export const exampleDescriptions=[
    {
        desc:'The first rule of Fight Club is: You do not talk about Fight Club.',
        vid:'https://www.youtube.com/embed/YJVGD6eTZ7g?start=6'
    },
    {
        desc:'Why so serious?',
        vid:'https://www.youtube.com/embed/0nvlkVjrrx8?start=33'
    },

    {
        desc:'Say hello to my little friend!',
        vid:'https://www.youtube.com/embed/AVQ8byG2mY8?start=10'
    },
    // 'Leave the gun. Take the cannoli.',
    // 'Carpe diem. Seize the day, boys.',

    {
        desc:'Antonio Magheretti!',
        vid:'https://www.youtube.com/embed/kRinCyay1kI'
    },
]

export const  deleteThis=(el)=>{
    const parent =el.target.closest(".ot_tr")
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        cancelButtonColor:'#2e58ff',
        confirmButtonColor: '#d33',
        confirmButtonText: 'Delete'
    }).then((result) => {
        if (result.value) {
            parent.remove();
        }
    })
}
