import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExhibitionsComponent } from './exhibitions/exhibitions.component'
import { SceneComponent } from './scene/scene.component'

const routes: Routes = [
	{ path: '', redirectTo: '/exhibitions', pathMatch: 'full' },
	{ path: 'exhibitions/:id', component: SceneComponent },
	{ path: 'exhibitions', component: ExhibitionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }