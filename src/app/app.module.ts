import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    // eslint-disable-next-line arrow-body-style
    loadChildren: ()=>import('./anonymous/anonymous.module').then(m=>m.AnonymousModule),
    path:'anonymous'
  },
  {
    // eslint-disable-next-line arrow-body-style
    loadChildren: ()=>import('./admin/admin.module').then(m=>m.AdminModule),
    path:'admin'
  }
];

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: []
})
export class AppModule { }
