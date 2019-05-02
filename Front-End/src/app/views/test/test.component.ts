import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import 'rxjs/Rx';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class TestComponent implements OnInit {
	base_link = 'http://www.localhost/Software-sharing-website/Back-End/index.php';
	profile_form : FormGroup;
	constructor(private http : Http) {
  		
  	}

  	ngOnInit() {
  	}

  	change(){

  	}
}
