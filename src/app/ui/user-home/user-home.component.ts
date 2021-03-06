import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'ci-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  constructor(private userService: UserService) { }
  user: any;
  username$ !: Observable<string>

  ngOnInit(): void {
    this.user = this.userService.getCurrentUserFullDetails();
    this.username$ = this.userService.getUserName();
  }

}
