import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ci-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent implements OnInit {

  @Input()
  data: any;
  @Input()
  title: string='';
  @Input()
  subTitle: string=''; 

  constructor() { }

  ngOnInit(): void {
  }

}
