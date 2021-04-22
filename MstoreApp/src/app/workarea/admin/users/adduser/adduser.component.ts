import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';
import { User } from '../User';
import { Router } from '@angular/router';
import { HttpClientService } from 'src/app/service/http-client.service';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  @Input()
  user: User;

  @Output()
  userAddedEvent = new EventEmitter();

  
  constructor(private httpClientService: HttpClientService,
    private router: Router) { }

  ngOnInit(): void {
  }
  addUser() {
    this.httpClientService.addUser(this.user).subscribe(
      (user) => {
        this.userAddedEvent.emit();
        this.router.navigate(['admin', 'users']);
      }
    );
  }

}
