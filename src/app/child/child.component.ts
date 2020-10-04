import { EventHandlerVars } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() message: string;
  @Output() messageEvent = new EventEmitter<string>();
  
  message2: string = 'sasageyo! sasageyo! shinzou wo sasageyo!';

  constructor() { }

  ngOnInit() {
    console.log(this.message)
  }

  sendMessage(){
    this.messageEvent.emit(this.message2)
  }

}
