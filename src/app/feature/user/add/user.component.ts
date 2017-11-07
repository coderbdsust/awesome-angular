import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserDTO} from "../../../dto/UserDTO";
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserAddComponent {
  @Input() user:UserDTO=new UserDTO();
  isNew=true;

  constructor(private router:Router, private userService:UserService) {
  }

  ngOnChanges(changes) {
    if (changes.user.currentValue === null) {
      this.isNew = true;
      this.user = new UserDTO();
    } else {
      this.isNew = false;
    }
  }

  onSubmit() {
    console.log('UserAddComponent:OnSubmit');
    console.log(this.user);

      console.log('validOnSubmit');
      let nUser = new UserDTO();
      nUser.fullName = this.user.fullName;
      nUser.age = this.user.age;
      nUser.occupation = this.user.occupation;
      nUser.joiningDate = this.user.joiningDate;
      nUser.married = this.user.married;

      if (!this.isNew) {
        console.log('UserAddComponent:Edit');
        this.userService.editUser(this.user, nUser);
        this.onClear();
      } else {
        console.log('UserAddComponent:New');
        this.userService.addUser(nUser);
        }

  }

  onDelete(){
    console.log('UserAddComponent:onDelete');
    this.userService.deleteUser(this.user);
    this.onClear();
  }

  onClear(){
    console.log('UserAddComponent:onClear');
    this.isNew=true;
    this.user=new UserDTO();
  }

  onCancel(){
    console.log('UserAddComponent:onCancel');
  }

}
