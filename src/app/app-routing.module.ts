import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { heroesComponent } from './heroes/heroes.component';

const routes:Routes = [
{path: 'heroes' , component: heroesComponent },
{path :'hero' , component: HeroComponent }
];

@NgModule({
imports:[RouterModule.forRoot(routes)],
exports: [RouterModule]

})

export class AppRoutingModule{}
