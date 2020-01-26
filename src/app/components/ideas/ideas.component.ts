import { Component, OnInit } from '@angular/core';
import { Idea } from '@app/models/idea';
import { User } from '@app/models/user';
import { ApiService } from '@app/services/api.service';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.scss']
})
export class IdeasComponent implements OnInit {
  
  ideas: Idea[];
  loader: boolean;
  currentUser: User;

  constructor( private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getIdeas().subscribe(
      (ideas: Idea[])=>{
        if(ideas) {
          this.ideas = ideas;
        }
      }
    );

  }

  upvote(id: string) {
  }
  downvote(id: string) {
  }

}
