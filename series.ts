export class series{
    id:number;
    nombre:string;
    canal:string;
    descripcion:string;
    temporadas:number;
    imagen:string;
    link:string;

    constructor(id:number, nombre:string, canal:string, descripcion:string, temporadas:number, imagen:string, link:string){
        this.id=id;
        this.nombre=nombre;
        this.canal=canal;
        this.descripcion=descripcion;
        this.temporadas=temporadas;
        this.imagen=imagen;
        this.link=link;
    }

    getID():number{
        return this.id;
    }
    getNombre():string{
        return this.nombre;
    }       
    getCanal():string{
        return this.canal;
    }
    getDescripcion():string{
        return this.descripcion;
    }
    getTemporadas():number{
        return this.temporadas;
    }
    getImagen():string{
        return this.imagen;
    }
    getLink():string{
        return this.link;
    }
    
}