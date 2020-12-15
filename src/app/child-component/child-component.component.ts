import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent  {
    Likes : number =0 ;
    Dislikes : number = 0 ;

    @Output()
    childComponentlike : EventEmitter<number> = new EventEmitter<number>();
    @Output()
    childComponentdislike : EventEmitter <number> = new EventEmitter<number>();

    handleClick() {
      this.childComponentlike.emit(this.Likes =1);
      this.childComponentdislike.emit(this.Dislikes =1);
    }

    handleLike(){
      this.childComponentlike.emit(this.Likes++);
      
    }

    handleDislike(){
      this.childComponentdislike.emit(this.Dislikes++);
    }
}
