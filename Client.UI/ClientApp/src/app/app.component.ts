import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { error } from 'protractor';
import { AccountService } from './services/account.service';
import { User } from './models/users';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any;
  currentUser$: Observable<User>;

  constructor(private accountService : AccountService ) {

  }


  ngOnInit() { 
    this.currentUser$ = this.accountService.currentUser$;
  }

  setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurretUser(user);
  }

}
