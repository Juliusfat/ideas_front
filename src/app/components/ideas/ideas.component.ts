import { Component, OnInit } from '@angular/core';
import { User } from '@app/models/user';
import { ApiService } from '@app/services/api.service';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.scss']
})
export class IdeasComponent implements OnInit {
  
  //ideas: Idea[];
  loader: boolean;
  currentUser: User;
  page=1;
  ideas: any;

  constructor( private apiService: ApiService) {}

  ngOnInit() {
  this.apiService.getIdeas(this.page).subscribe(
    result => {
      this.ideas = result;
    }
  );


  }

  upvote(id: string) {
  }
  downvote(id: string) {
  }

}
