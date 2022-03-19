import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/messages.service';
import { ShinobiService } from 'src/app/shinobi.service';
import { Shinobi } from 'src/app/shinobis/shinobi';

@Component({
  selector: 'app-shinobis',
  templateUrl: './shinobis.component.html',
  styleUrls: ['./shinobis.component.css']
})
export class ShinobisComponent implements OnInit {

  shinobis : Shinobi[] = [];
  selectedShinobi? : Shinobi;

  constructor(
    private shinobiService:ShinobiService,
    private messagesService:MessagesService
    ) { }

  ngOnInit(): void {
    this.getShinobis();
  }

  onSelect(shinobi : Shinobi): void {
    this.selectedShinobi =  shinobi;
    this.messagesService.add(`Shinobis Component: selected shinobi id = ${shinobi.id}`);
  }

  getShinobis() : void {
    this.shinobiService.getShinobis()
          .subscribe(shinobis => this.shinobis = shinobis);
  }

}
