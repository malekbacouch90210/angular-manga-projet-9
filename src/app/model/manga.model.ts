import { Demographique } from "./demographique.model";

export class Manga {
    idManga! : number;
    nomManga! : string;
    mangakaManga! : string;
    salaireManga! : number;
    dateCreation! : Date ;
    demographique! : Demographique;
    email!: string ;
    password!:string;
}