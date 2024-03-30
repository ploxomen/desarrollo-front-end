const exampleEl = document.getElementById('example')
new bootstrap.Tooltip(exampleEl)
// alert('mensaje');
// confirm('¿desesa eliminar este usuario?')
exampleEl.addEventListener("click",function(){
    // Swal.fire({
    //     title: "Good job!",
    //     text: "You clicked the button!",
    //     icon: "success"
    // }).then;
    Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "assaassa", "info");
        }
    });
})
