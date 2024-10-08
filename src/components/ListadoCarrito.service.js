import Swal from "sweetalert2";

export const notificacionSweetCarrito = () => {
    Swal.fire({
        title: "¡COMPRA EXITOSA!",
        text: "Su compra ha sido aprobada y se le instalará en su hogar en 3 días hábiles.",
        icon: "success"
      })
}

