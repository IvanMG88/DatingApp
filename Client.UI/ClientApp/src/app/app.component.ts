import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { error } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any;

  constructor(private http: HttpClient) {

  }


  ngOnInit() {
    this.getusers();
  }


  getusers() {

    this.http.get('https://localhost:44343/api/users').subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error);
    })

  }
  
}
