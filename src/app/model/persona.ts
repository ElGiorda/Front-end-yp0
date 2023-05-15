export class Persona{
    id?: number;
    nombre: string;
    apellido: string;
    descripcion: string;
    acercade:string;
    imgperfil: string;
    imgbaner: string;
    ubicacion: string;


    constructor(nombre: string,apellido: string, imgperfil: string, descripcion: string, imgbaner: string, acercade: string, ubicacion: string){
        this.nombre = nombre;
        this.apellido =apellido;
        this.imgperfil = imgperfil;
        this.descripcion = descripcion;
        this.imgbaner = imgbaner;
        this.acercade = acercade;
        this.ubicacion = ubicacion;
    }
}