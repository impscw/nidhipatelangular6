import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page-component/home-page.component';
import { AboutPageComponent } from './about-page-component/about-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CustomMaterialModule} from '../core/material.module';
import { BooksComponent } from './books/books.component';
import { MoviesComponent } from './movies/movies.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import {Angular2ImageGalleryModule} from 'angular2-image-gallery';
import { FooterComponent } from './footer/footer.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatPaginatorModule} from '@angular/material/paginator';



const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: HomePageComponent },
      { path: 'home', component: HomePageComponent },
      { path: 'about', component: AboutPageComponent},
      {path: 'book', component: BooksComponent},
      {path: 'movies' , component : MoviesComponent},
      {path: 'entertainment' , component: EntertainmentComponent}
    ]
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    NavigationComponent,
    BooksComponent,
    MoviesComponent,
    EntertainmentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    CustomMaterialModule,
    MatTabsModule,
    MatExpansionModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
