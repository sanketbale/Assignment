import { Component, OnChanges, OnInit } from '@angular/core';
import {PostsService} from './posts.service';
import {IPost} from './post';
import { Input } from '@angular/core';
import { IUser } from '../users/user';
import { IComment } from './comment';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnChanges {

  title = 'Please select a user to find their comments:';
  errorMessage = '';
  posts: IPost[] = [];
  comments: IComment[] = [];
  selectedPostId = undefined;
  postsToDisplay  = 4;

  @Input() user: IUser;

constructor(private postsService: PostsService) { }

  ngOnChanges(): void {
    this.posts = [];
    this.postsService.getPosts(this.user.id).subscribe({
      next: posts => {
        this.posts = posts;
        this.postsToDisplay = 4;
      },
      error: err => this.errorMessage = err
    });
  }

  selectPost( id: number): void {

    if (this.selectedPostId === id) {
       this.selectedPostId = null;
       this.comments = [];
    }
    else {
    this.selectedPostId = id;
    this.postsService.getCommentsByPostId(this.selectedPostId).subscribe({
      next: comments => {
        this.comments = comments;
      },
      error: err => this.errorMessage = err
    });
    }
  }

  loadMoreClick(): void{
    this.postsToDisplay = this.posts.length;
  }

}
