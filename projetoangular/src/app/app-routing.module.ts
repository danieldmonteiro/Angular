import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatComponent } from './views/contat/contat.component';
import { JogadorComponent } from './views/jogador/jogador.component';

const routes: Routes = [
  {path: "contat", component: ContatComponent},
  {path: "jogador", component: JogadorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
