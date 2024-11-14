import { Component, OnInit } from '@angular/core';
import { Manga } from '../model/manga.model';
import { MangaService } from '../services/manga.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manga',
  templateUrl: './manga.component.html',
})
export class MangasComponent implements OnInit {

  mangas : Manga[];
  

  constructor(private mangaService : MangaService) {
    this.mangas = mangaService.listeManga();
    
  }

  ngOnInit(): void { }


  supprimerManga(prod : Manga){
    let conf = confirm("Etes-vous sûr ?");
    if (conf){
      this.mangaService.supprimerManga(prod);
    }

    
 

  }

}