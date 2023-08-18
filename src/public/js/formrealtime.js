const socketClient = io()

let form = document.getElementById("formularioIo")
form.addEventListener("submit", (evt) => {
    
    evt.preventDefault();

    const formData = new FormData(form);



    // let title =form.elements.title.value;
    // let descripcion = form.elements.descripcion.value;
    // let code = form.elements.code.value;
    // let price = form.elements.price.value;
    // let status= form.elements.status.value;
    // let stock=form.elements.stock.value;
    // let category= form.elements.category.value;
    // let file =form.elements.files[0];


    // socketClient.emit("addProduct",{
    //     title,
    //     descripcion,
    //     code,
    //     price,
    //     status,
    //     stock,
    //     category,
    //     file,

    // })

    // form.reset();

// console.log("enviados");

socketClient.emit("addProduct", Object.fromEntries(formData.entries()));


 })

 document.getElementById("buttonDelete").addEventListener("click",function(){
    const borrarinput=document.getElementById("idProducto");
    const borrarid=parseInt(borrarinput.value);
    socketClient.emit("borraProducto",borrarid);
    borrarinput.value="";
 });

 
        // Inicializar Socket.io
        // const socket = io();

        // Obtener elementos del DOM
        const imageInput = document.getElementById('imageInput');
        const previewImage = document.getElementById('previewImage');
        // const uploadButton = document.getElementById('uploadButton');

        // Mostrar vista previa de la imagen seleccionada
        imageInput.addEventListener('change', function(event) {
            const file = event.target.files[0];

            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    previewImage.src = e.target.result;
                    previewImage.style.display = 'block';
                };
                reader.readAsDataURL(file);
            }
        });




 