import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  message = 'amakakeru ryu no hirameki';
  message2: string;
  
  constructor() { }

  ngOnInit() {
  }

  receiveMessage($event){
    this.message2 = $event;
    console.log(this.message2)
  }

}
