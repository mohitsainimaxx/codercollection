import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  myForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  postId: Number = 0;
  constructor(private service: UserService,private route: ActivatedRoute,private router:Router ) { }
  ngOnInit() {
  
  }
  LoggedIn(){
    
  }

}
