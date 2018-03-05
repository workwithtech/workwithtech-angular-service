import {Component, OnInit} from '@angular/core';
import {MessageService} from '../Service/message.service';
import {Message} from '../Model/Message';

@Component({
  selector: 'app-message-add',
  templateUrl: './message-add.component.html',
  styleUrls: ['./message-add.component.css']
})
export class MessageAddComponent implements OnInit {

  model: Message = new Message('', '');

  constructor(private  messageService: MessageService) {
  }

  ngOnInit() {
    console.log('MessageAddComponent');

    const m1 = new Message('John Doe', 'Moin, wie gehts?');
    const m2 = new Message('Jane Doe', 'Hallo, sehr gut!');

    this.messageService.add(m1);
    console.log('neue Nachricht von John Doe');
    this.messageService.add(m2);
    console.log('neue Nachricht von Jane Doe');

  }

  add() {

    this.messageService.add(this.model);
    this.model = new Message('', '');
  }


}
