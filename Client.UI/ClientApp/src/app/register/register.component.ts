import { error } from '@angular/compiler/src/util';
import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'

})

export class RegisterComponent implements OnInit {

  @Output() cancelResgister = new EventEmitter();

  model: any = {};

  constructor(private accountService: AccountService) {

  }

  ngOnInit() {
  
  }


  register() {
    this.accountService.register(this.model).subscribe(response => {
      console.log(response);
      this.cancel();
    }, error => {
        console.log(error);
    })
  }

  cancel() {
    this.cancelResgister.emit(false);
  }
}
