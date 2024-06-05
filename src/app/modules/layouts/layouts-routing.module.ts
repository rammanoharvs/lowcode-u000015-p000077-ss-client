import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts.component';
import { PageComponent } from './components/page/page.component';

const routes: Routes = [{ path: '', component: LayoutsComponent, children: [{path : 'page', component : PageComponent , pathMatch : "full" }]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
