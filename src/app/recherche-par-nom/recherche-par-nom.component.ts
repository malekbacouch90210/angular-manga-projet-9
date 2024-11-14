import { Component, OnInit } from '@angular/core';
import { Manga } from '../model/manga.model';
import { MangaService } from '../services/manga.service';
import { Demographique } from '../model/demographique.model';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
})
export class RechercheParNomComponent implements OnInit {
  manga: Manga[] = []; 
  demographie: Demographique[] = [];
  IdDemographie: number = 0; 
  allManga: Manga[] = []; // Liste complète de mangas
  searchTerm !: string;

  constructor(private mangaService: MangaService) { }

  ngOnInit(): void {
    this.demographie = this.mangaService.listeDemographique();
    this.allManga = this.mangaService.getAllMangas(); // Populate with all mangas
    this.manga = [...this.allManga]; // Initialize `manga` with all mangas
  }

  onChange(): void {
    this.manga = this.mangaService.rechercherParManga(this.IdDemographie);
  }

  supprimerManga(prod: Manga): void {
    const index = this.manga.indexOf(prod, 0);
    if (index > -1) {
      this.manga.splice(index, 1);
    }
    const conf = confirm("Etes-vous sûr ?");
    if (conf) {
      this.mangaService.supprimerManga(prod);
    }
  }

  onKeyUp(filterText: string): void {
    this.manga = this.allManga.filter(item => item.nomManga.toLowerCase().includes(filterText.toLowerCase()));
  }
}

