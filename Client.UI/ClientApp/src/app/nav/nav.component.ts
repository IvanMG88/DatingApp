import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/users';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
})
export class NavComponent implements OnInit {

  model: any = {};
  currentUser$: Observable<User>;

  constructor(public accountService: AccountService) {
  }

  ngOnInit() {
    this.currentUser$ = this.accountService.currentUser$;
  }

  login() {
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
    
    }, error => {
      console.log(error);
    })
  }



  logout() {
    this.accountService.logout();  
  }


}
