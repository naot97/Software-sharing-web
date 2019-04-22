import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import 'rxjs/Rx';

@Component({
  selector: 'app-dashboard',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit{ 
	base_link = 'http://www.localhost/Software-sharing-website/Back-End/index.php';
	login_form : FormGroup
	constructor(private http: Http){
		this.login_form = new FormGroup({
			username : new FormControl("",Validators.compose([
	                Validators.required,
	                Validators.minLength(3),
	                Validators.maxLength(255)
              	])),
			password : new FormControl("",Validators.compose([
					Validators.required,
					Validators.minLength(3),
					Validators.maxLength(255)
				]))
		});
	}
	ngOnInit() {}
	login(){
		if (this.login_form.valid) {
			console.log(this.login_form.value);
			this.http.post(this.base_link + '?controller=Login&action=login',this.login_form.value)
			.map(response => response).toPromise().then(
				data => {
            		console.log(data)
          		},
         		err => {
            		console.log(err);
          		}
			);
		}
	}
}
