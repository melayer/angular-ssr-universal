import { Observable } from 'rxjs/Observable';
import { AppService } from './app.service';
import { Component, OnInit } from '@angular/core';
import { Joke } from './joke';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';

  constructor(
    private service: AppService
  ) {

  }

  ngOnInit(): void {
    this.service.jokes( jk => {
      console.log(jk)
    })
  }
}
