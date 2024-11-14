import { Injectable } from '@angular/core';
import { Manga } from '../model/manga.model';
import { UpdateMangaComponent } from '../update-manga/update-manga.component';
import { Demographique } from '../model/demographique.model';
import { Pipe, PipeTransform } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MangaService {


  mangas: Manga[];
  manga! :Manga;
  demographique! :Demographique[];
  mangaRecherche! : Manga[];

  

  constructor() { 
    this.demographique=[
      {idCat:1 , nomCat: "shonen"},
      {idCat:2 , nomCat: "seinen"},
      {idCat:3 , nomCat: "shojo"},
      {idCat:4 , nomCat: "children"}
    ]
    this.mangas = [
      { idManga: 1, nomManga: "Dragon ball", mangakaManga: "Akira Toriyama", salaireManga: 260000, dateCreation: new Date("1984-11-20"), demographique: { idCat: 1, nomCat: "shonen" }, email: 'dragonball@example.com', password: 'password123' },
      { idManga: 2, nomManga: "HXH", mangakaManga: "Yoshihiro Togashi", salaireManga: 86000, dateCreation: new Date("1998-03-03"), demographique: { idCat: 1, nomCat: "shonen" }, email: 'hxh@example.com', password: 'password456' },
      { idManga: 3, nomManga: "Detective conan", mangakaManga: "Gosho Aoyama", salaireManga: 270000, dateCreation: new Date("1994-01-05"), demographique: { idCat: 1, nomCat: "shonen" }, email: 'detectiveconan@example.com', password: 'password789' },
      { idManga: 4, nomManga: "One piece", mangakaManga: "Eiichiro Oda", salaireManga: 516600, dateCreation: new Date("1997-07-22"), demographique: { idCat: 1, nomCat: "shonen" }, email: 'onepiece@example.com', password: 'password101' },
      { idManga: 5, nomManga: "Naruto", mangakaManga: "Masashi Kishimoto", salaireManga: 250000, dateCreation: new Date("1999-09-21"), demographique: { idCat: 1, nomCat: "shonen" }, email: 'naruto@example.com', password: 'password102' },
      { idManga: 6, nomManga: "Attack on Titan", mangakaManga: "Hajime Isayama", salaireManga: 140000, dateCreation: new Date("2009-09-09"), demographique: { idCat: 1, nomCat: "shonen" }, email: 'attackontitan@example.com', password: 'password103' },
      { idManga: 7, nomManga: "20th century boys", mangakaManga: "Naoki Urasawa", salaireManga: 36000, dateCreation: new Date("1999-10-04"), demographique: { idCat: 2, nomCat: "seinen" }, email: '20thcenturyboys@example.com', password: 'password104' },
      { idManga: 8, nomManga: "Homunculus", mangakaManga: "Hideo Yamamoto", salaireManga: 5120, dateCreation: new Date("2003-03-17"), demographique: { idCat: 2, nomCat: "seinen" }, email: 'homunculus@example.com', password: 'password105' },
      { idManga: 9, nomManga: "Sailer moon", mangakaManga: "Naoko Takeuchi", salaireManga: 13.36, dateCreation: new Date("1991-02-06"), demographique: { idCat: 3, nomCat: "shojo" }, email: 'sailormoon@example.com', password: 'password106' },
      { idManga: 10, nomManga: "Berserk", mangakaManga: "Kentaru miura", salaireManga: 60000, dateCreation: new Date("1989-08-25"), demographique: { idCat: 2, nomCat: "seinen" }, email: 'berserk@example.com', password: 'password107' },
      { idManga: 11, nomManga: "Monster", mangakaManga: "Naoki Urasawa", salaireManga: 20000, dateCreation: new Date("1994-12-05"), demographique: { idCat: 2, nomCat: "seinen" }, email: 'monster@example.com', password: 'password108' },
      { idManga: 12, nomManga: "Vagabond", mangakaManga: "Takehiko Inoue", salaireManga: 82402, dateCreation: new Date("1998-09-03"), demographique: { idCat: 2, nomCat: "seinen" }, email: 'vagabond@example.com', password: 'password109' },
      { idManga: 13, nomManga: "Bleach", mangakaManga: "Tite Kubo", salaireManga: 130000, dateCreation: new Date("2001-08-07"), demographique: { idCat: 1, nomCat: "shonen" }, email: 'bleach@example.com', password: 'password110' },
      { idManga: 14, nomManga: "Fullmetal Alchemist", mangakaManga: "Hiromu Arakawa", salaireManga: 80.12, dateCreation: new Date("2001-07-12"), demographique: { idCat: 1, nomCat: "shonen" }, email: 'fullmetalalchemist@example.com', password: 'password111' }
    ];
    
  }


  listeManga(): Manga[] {
    return this.mangas;
  }
  listeDemographique():Demographique[] {
    return this.demographique;

  }

  consulterDemographique(id:number): Demographique{ 
    return this.demographique.find(cat => cat.idCat == id)!;
  }
    
  

  ajouterManga(manga : Manga){
    this.mangas.push(manga);
    
  }


  supprimerManga( prod: Manga){
    //supprimer le produit prod du tableau produits
    const index = this.mangas.indexOf(prod, 0);
    if (index > -1) {
      this.mangas.splice(index, 1);
    }
    //ou Bien
    /* this.mangas.forEach((cur, index) => {
    if(prod.nomManga === cur.nomManga) {
    this.mangas.splice(index, 1);
    }
    }); */
    }
    consulterManga(id:string): Manga{
      this.manga = this.mangas.find(p => p.nomManga == id)!;
      return this.manga;
    }
    trierManga(){
      this.mangas = this.mangas.sort((n1,n2) => {
        if (n1.idManga! > n2.idManga!) {
        return 1;
      }
      if (n1.idManga! < n2.idManga!) {
        return -1;
      }
      return 0;
      });
    }
    rechercherParManga(idCat: number): Manga[]{
      this.mangaRecherche = [];
      this.mangas.forEach((cur, index) => {
      if(idCat == cur.demographique.idCat) {
      console.log("cur "+cur);
      this.mangaRecherche.push(cur);
      }
      });
      return this.mangaRecherche;
    }

    updateManga(p:Manga){
      this.supprimerManga(p);
      this.ajouterManga(p);
      this.trierManga();

    }
    getAllMangas(): Manga[] {
      return this.mangas;
    }



}
