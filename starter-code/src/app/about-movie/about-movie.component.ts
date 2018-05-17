import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { log } from 'util';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-movie',
  templateUrl: './about-movie.component.html',
  styleUrls: ['./about-movie.component.css']
})
export class AboutMovieComponent implements OnInit {

  theMovie: any = {};

  constructor(private route: ActivatedRoute,
    private myService: MovieService) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        const theID = Number(params['id']);
        this.theMovie = this.myService.getMovie(theID);
      });
  }
}
