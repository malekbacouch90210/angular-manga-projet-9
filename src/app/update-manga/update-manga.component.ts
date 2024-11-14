import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router  } from '@angular/router';
import { MangaService} from '../services/manga.service';
import { Manga } from '../model/manga.model';
import { Demographique } from '../model/demographique.model';


@Component({
  selector: 'app-update-manga',
  templateUrl: './update-manga.component.html',
  styles: []
})
export class UpdateMangaComponent implements OnInit {
  demographique! : Demographique[];
  updatedCatId! : number;
  currentManga = new Manga();
  constructor(private activatedRoute: ActivatedRoute, private  router :Router,private mangaService: MangaService) { 

  }
  ngOnInit() {
  // console.log(this.route.snapshot.params.id);
  this.currentManga = this.mangaService.consulterManga(this.activatedRoute.snapshot. params['id']);
  this.updatedCatId=this.currentManga.demographique.idCat;
  }
  updateManga() {
    this.currentManga.demographique=this.mangaService.consulterDemographique(this.updatedCatId);
    this.mangaService.updateManga(this.currentManga);
    this.router.navigate(['mangas']);
  }
  

}
