import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { DocumentComponent } from './routes/document/document.component';


const routes: Routes = [
      {
            path: '',
            component: HomeComponent
      },
      {
            path: 'docs',
            component: DocumentComponent
      }
];

@NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
})
export class AppRoutingModule { }
