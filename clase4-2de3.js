/* 
    POLIMORFISMO
    HERENCIA
    ABSTRACCION
    ENCAPSULAMIENTO
*/
class Humano {
    nombre;
    apellidos;
    constructor(txtNombre,txtApellido) {
        this.nombre = txtNombre;
        this.apellidos = txtApellido;
    }
    identificar(){
        return {
            nombre: this.nombre,
            apellidos: this.apellidos
        }
    }
}
class Mujer extends Humano{
    constructor(edad) {
        super.identificar()
    }
}
const persona = new Persona('Jean Pier','Apellidos');
const identificaciones = persona.identificar();
console.log(identificaciones);