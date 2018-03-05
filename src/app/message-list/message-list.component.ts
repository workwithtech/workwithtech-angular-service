import {Component, OnInit} from '@angular/core';
import {MessageService} from '../Service/message.service';
import {Message} from '../Model/Message';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  constructor(private  messageService: MessageService) {
  }

  ngOnInit() {
    console.log('MessageListComponent -> ' + this.messageService.size() + ' Nachrichten gefunden');

    this.messageService.all().forEach((message: Message) => {
      console.log(message.name + ': ' + message.data);
    });
  }

  getMessages(): Array<Message> {
    return this.messageService.all();
  }

}
