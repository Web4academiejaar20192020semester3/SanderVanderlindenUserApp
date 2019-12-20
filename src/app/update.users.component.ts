import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-update-users',
  templateUrl: './update.users.component.html',
  styleUrls: ['./update.users.component.css']
})
export class UpdateUsersComponent implements OnInit {

  @Input() userChosen;
  @Input() serviceUpdate;

  constructor() { }

  ngOnInit() {
  }
  update(): void {
    this.serviceUpdate.updatePerson(this.userChosen.email,
      this.userChosen.firstName,
      this.userChosen.lastName,
      this.userChosen.gender,
      this.userChosen.age);
  }
}
