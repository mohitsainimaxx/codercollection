import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { randomBytes } from 'crypto';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
 
  myForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });
  postId: Number = 0;
  constructor(private service: UserService,private route: ActivatedRoute,private router:Router ) { }
  ngOnInit() {
   
    // this.route.paramMap.subscribe(params => {
    //   this.postId = parseInt(params.get('id'));
    // });
  }
  addForm(e): void {
    e.preventDefault();
    let params = {
      id:Math.random().toFixed(5),
      name: this.myForm.get('name').value,
      email: this.myForm.get('email').value,
      password: this.myForm.get('password').value
    };  console.log(params);
    
     if(this.service.addUser(params)){
       
       this.router.navigateByUrl('users');
     }
  
    
  }
}
