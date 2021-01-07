import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  getUserList() {
    return JSON.parse(localStorage.getItem('userList'));
  }
  addUser(postArray: any): any {
    let userInfo: any = [];
    if (localStorage.getItem('userList') !== null) {
      userInfo = JSON.parse(localStorage.getItem('userList'));
    } else {
      localStorage.setItem('userList', JSON.stringify([]));
    }
    userInfo.push(postArray);
    localStorage.setItem('userList', JSON.stringify(userInfo))
    return true;
  }
  deleteUser(id:any) {
    let userInfos:any = JSON.parse(localStorage.getItem('userList'));
    console.log(userInfos);
    return userInfos.splice(userInfos.indexOf(id),1);
    // userInfos.forEach((item,_key) => {
    //   if(item.id==id){
    //     console.log(item);
    //     console.log(_key);
      
    //     item.splice(,1);
    //     return true;
    //   }
    // });
  }
  updateUser() {

  }

}
