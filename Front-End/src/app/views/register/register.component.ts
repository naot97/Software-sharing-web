import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import 'rxjs/Rx';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})

export class RegisterComponent implements OnInit{
  	signupform : FormGroup;
    //passwordFormGroup : FormGroup;
    base_link = 'http://www.localhost/Software-sharing-website/Back-End/index.php';
  	constructor(private http: Http){
      this.signupform = new FormGroup({
        username : new FormControl("",Validators.compose([
                  Validators.required,
                  Validators.minLength(3),
                  Validators.maxLength(255)
              ])),
        email : new FormControl("",Validators.compose([
                  Validators.required,
                  Validators.minLength(3),
                  Validators.maxLength(255),
                  Validators.email
        ])),
        password : new FormControl("",Validators.compose([
                  Validators.required,
                  Validators.minLength(3),
                  Validators.maxLength(255)
                  
              ])),
        confirm : new FormControl("",Validators.compose([
                  //Validators.required,
                  //Validators.minLength(3),
                  //Validators.maxLength(255),
                  //RegisterComponent.match_confirm.bind(this)
              ]))
      });    
    }
  	ngOnInit() {}

    static match_confirm(control) {
      //password = control.controls;
      //confirmPassword = control.controls.get('confirm');
      return null;
    }

  	regist(){
        //if (this.signupform.valid) {
  			this.http.post(this.base_link + '?controller=Register&action=sign_up'
  				,this.signupform.value).map(response => response.json()).toPromise().then(
          data => {	
            console.log(data);
          },
          err => {
            console.log(err);
          }
        );
  		//}	
  	}
}
