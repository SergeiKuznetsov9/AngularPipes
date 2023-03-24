import { Component, OnInit } from '@angular/core';

interface IPost {
  title: string,
  text: string
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  e: number = Math.E;
  str = 'test for pipes';
  date: Date = new Date();
  float: number = 0.42;

  posts: IPost[] = [
    {title: 'Beer', text: 'Самое лучшее пиво в мире'},
    {title: 'Bread', text: 'The best bread in the world'},
    {title: 'JavaScript', text: 'The best language in the world'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
