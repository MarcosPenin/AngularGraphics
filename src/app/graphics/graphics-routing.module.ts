import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarsComponent } from './pages/bars/bars.component';
import { DoublebarsComponent } from './pages/doublebars/doublebars.component';
import { DonaComponent } from './pages/dona/dona.component';
import { DonahttpComponent } from './pages/donahttp/donahttp.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'bars', component: BarsComponent },
      { path: 'doublebars', component: DoublebarsComponent },
      { path: 'dona', component: DonaComponent },
      { path: 'donahttp', component: DonahttpComponent },
      { path: '**', redirectTo: 'bars' },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphicsRoutingModule { }
