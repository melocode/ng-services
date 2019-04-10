import {Component, OnInit} from '@angular/core';
import {UsersService} from "./services/users.service";
import {CounterService} from "./services/counter.service";

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css'],
  providers: [UsersService, CounterService]
})
export class AssignmentComponent implements OnInit {

  ngOnInit() {
  }

}
