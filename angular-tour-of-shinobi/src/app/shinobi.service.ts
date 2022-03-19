import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessagesService } from 'src/app/messages.service';
import { SHINOBIS } from 'src/app/mock-shinobis';
import { Shinobi } from 'src/app/shinobis/shinobi';

@Injectable({
  providedIn: 'root'
})
export class ShinobiService {

  constructor(private messagesService: MessagesService) { }

  getShinobis(): Observable<Shinobi[]> {
    const shinobis = of(SHINOBIS);
    this.messagesService.add("Shinobi Service: fetched shinobis");
    return shinobis;
  }
}
