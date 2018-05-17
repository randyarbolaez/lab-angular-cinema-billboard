import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { AboutMovieComponent } from './about-movie/about-movie.component';
import { MovieService } from './services/movie.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: MovieComponent },
  { path: 'movie/:id', component: AboutMovieComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    AboutMovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
