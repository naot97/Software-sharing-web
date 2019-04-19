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
  	constructor(private http: Http) {}
  	base_link = 'http://www.localhost/Software-sharing-website';
  	ngOnInit() {
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
                Validators.maxLength(255),
            ])),
			confirm : new FormControl("",Validators.compose([
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(255),
            ]))
		});    
  	}

  	regist(){
  		//if (this.signupform.valid){
        console.log(this.signupform.value);
  			this.http.post(this.base_link + '/Back-End/index.php?controller=Register&action=sign_up'
  				,this.signupform.value).map(response => response).subscribe(
          data => {
            console.log(data)
          },
          err => {
            console.log("Error occured.");
          }
        );
  		}	
  	//}
  	passwordMatch(control1: AbstractControl, control2 : AbstractControl){
     	if (!control1 || !control2) return null;
     	if (control1.value === control2.value)
     		return  null;
     	return {confirm : false};
 	}

}
