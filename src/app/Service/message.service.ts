import {Injectable} from '@angular/core';
import {Message} from '../Model/Message';

@Injectable()
export class MessageService {

  private messages: Array<Message> = new Array<Message>();

  constructor() {
  }

  /**
   * Neue Nachricht hinzufügen
   * @param {Message} m
   */
  add(m: Message): void {
    console.log('MessageService -> neue Nachricht');
    this.messages.push(m);
  }

  /**
   * Wieviele Nachrichten sind hinterlegt.
   * @returns {number}
   */
  size(): number {
    return this.messages.length;
  }

  /**
   * Gibt alle Nachrichten zurück
   * @returns {Array<Message>}
   */
  all(): Array<Message> {
    return this.messages;
  }

  /**
   * Gibt Nachricht anhand von index zurück
   * @param {number} index
   * @returns {Message}
   */
  get(index: number): Message {
    if (this.messages[index]) {
      return this.messages[index];
    }
  }

  /**
   * entfernt Nachricht anhand von index
   * @param {number} index
   */
  removeByIndex(index: number) {
    if (this.messages[index]) {
      this.messages.splice(index, 1);

    }
  }

  /**
   * entfernt Nachricht anhand von Objekt
   * @param {Message} key
   */
  remove(m: Message): void {
    const index = this.messages.indexOf(m, 0);
    if (index > -1) {
      this.messages.splice(index, 1);
    }
  }
}
