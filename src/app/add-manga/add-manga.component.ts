import { Component, OnInit } from '@angular/core';
import { Manga } from '../model/manga.model';
import { MangaService } from '../services/manga.service';
import { Demographique } from '../model/demographique.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-manga',
  templateUrl: './add-manga.component.html',
})
export class AddMangaComponent implements OnInit {
  mangaForm!: FormGroup;
  demographique!: Demographique[];
  newManga = new Manga();
  newIdCat!: number;
  newDemographique!: Demographique;

  constructor(private mangaService: MangaService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.demographique = this.mangaService.listeDemographique();
    this.mangaForm = this.fb.group({
      idManga: ['', Validators.required],
      nomManga: ['', Validators.required],
      mangakaManga: ['', Validators.required],
      salaireManga: ['', [Validators.required]],
      dateCreation: ['', Validators.required],
      demographique: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  addManga() {
    this.newDemographique = this.mangaService.consulterDemographique(this.newIdCat);
    this.newManga.demographique = this.newDemographique;
    this.mangaService.ajouterManga(this.newManga);
    this.newManga = new Manga();
  }
  
  onSubmit() {
    if (this.mangaForm.valid) {
      const newManga: Manga = {
        ...this.mangaForm.value, 
        demographique: this.mangaService.consulterDemographique(this.mangaForm.get('demographique')?.value),
      };

      console.log('Manga to be added:', newManga);
      this.mangaService.ajouterManga(newManga);
      this.mangaForm.reset();
      console.log('Form reset. Current form values:', this.mangaForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
