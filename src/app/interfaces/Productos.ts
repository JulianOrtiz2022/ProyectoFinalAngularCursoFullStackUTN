//Nosotros armamos la interface
export interface Productos{
    title:string;
    price:number;
    thumbnail:string;
    id:string;
    //attributes es un objeto que adentro tiene un array
    // con objetos y dentro de esos objetos
    // nose que valor tienen, pueden ser string o number
    attributes?: [
        {
            [k:string]:string | number;
        }
    ]
} 

export interface ResponseProductos{
    site_id:string;
    results:Productos[];
    query:string;

}