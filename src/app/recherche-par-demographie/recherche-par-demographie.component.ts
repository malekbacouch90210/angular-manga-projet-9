import { Component, OnInit } from '@angular/core';
import { Manga } from '../model/manga.model';
import { MangaService } from '../services/manga.service';
import { Demographique } from '../model/demographique.model';

@Component({
  selector: 'app-recherche-par-demographie',
  templateUrl: './recherche-par-demographie.component.html'
})
export class RechercheParDemographieComponent implements OnInit {

  manga: Manga[] = []; 
  demographie: Demographique[] = [];
  IdDemographie: number =0; 

  constructor(private mangaService: MangaService) { }

  ngOnInit(): void {
    this.demographie = this.mangaService.listeDemographique();
    this.manga=[];

  }
  onChange(){
    this.manga=this.mangaService.rechercherParManga(this.IdDemographie);
  }
  supprimerManga( prod: Manga){
    //supprimer le produit prod du tableau produits
    const index = this.manga.indexOf(prod, 0);
    if (index > -1) {
      this.manga.splice(index, 1);
    }
    let conf = confirm("Etes-vous sûr ?");
    if (conf){
      this.mangaService.supprimerManga(prod);
    }
    //ou Bien
    /* this.mangas.forEach((cur, index) => {
    if(prod.nomManga === cur.nomManga) {
    this.mangas.splice(index, 1);
    }
    }); */
    }
     
}
