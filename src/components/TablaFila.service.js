import Swal from "sweetalert2";

export const notificacionSweet = (nombre, callback) => {
    Swal.fire({
        title: `¿Estás seguro de querer borrar el producto con el nombre: ${nombre}?`,
        text: "No podrás reversar o cambiar lo que hagas.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí",
        cancelButtonText: "No"
      }).then((result) => {
        if (result.isConfirmed) {
          callback()
          Swal.fire({
            title: "Borrado!",
            text: "El producto se borró satisfactoriamente.",
            icon: "success"
          })
        }
      })
}