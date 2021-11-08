import { error } from '@angular/compiler/src/util';
import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'

})

export class RegisterComponent implements OnInit {

  @Output() cancelResgister = new EventEmitter();

  model: any = {};

  constructor(private accountService: AccountService, private toastr: ToastrService) {

  }

  ngOnInit() {
  
  }


  register() {
    this.accountService.register(this.model).subscribe(response => {
      console.log(response);
      this.cancel();
    }, error => {
        console.log(error);
        this.toastr.error(error.error);
    })
  }

  cancel() {
    this.cancelResgister.emit(false);
  }
}
