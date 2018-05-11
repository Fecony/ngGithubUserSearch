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
          this.user = user
          this.isLoaded = true
        }, error => {
          this.error403 = true;
        })
    }
  }

  ngOnInit() {
  }

}
