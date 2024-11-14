import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MangasComponent } from './manga/manga.component';
import { AddMangaComponent } from './add-manga/add-manga.component';
import { UpdateMangaComponent } from './update-manga/update-manga.component';
import { RechercheParDemographieComponent } from './recherche-par-demographie/recherche-par-demographie.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { Pipe, PipeTransform } from '@angular/core';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  { path: 'mangas', component: MangasComponent },
  { path: 'add-manga', component: AddMangaComponent },
  { path: 'updateManga/:id', component: UpdateMangaComponent },
  { path: 'rechercheParDemographiqe', component : RechercheParDemographieComponent},
  {path: "rechercheParNom",component:RechercheParNomComponent},
  { path: '', redirectTo: '/mangas', pathMatch: 'full' },
  { path: '**', redirectTo: '/mangas' },
  {path:'register',component:RegisterComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
