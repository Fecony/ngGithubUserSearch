import { Component, OnInit } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchStr: string = '';
  minLength: number = 3;
  
  isLoaded: boolean = false;
  error403: boolean = false;
  user: any;
  
  constructor(private service: UserService) { }

  handleChange() {
    if(this.minLength <= this.searchStr.length) {
      this.service.getUser(this.searchStr)
        .subscribe(user => {
          this.error403 = false;
          this.user = user;
          this.isLoaded = true;
        }, error => { 
        /* 
          FIX
          403 -> Github request limit
          404 -> user not found 
        */
          this.error403 = true;
        })
    }
  }

  ngOnInit() {
  }

}
