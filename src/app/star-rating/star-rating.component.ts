import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnChanges {

  @Input() rating: number;
  starWidth: number;

  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    this.starWidth = this.rating * 150 / 5;
  }

  onclick(): void {
    this.ratingClicked.emit(`the rating ${this.rating} was clicked!`);
  }

}
