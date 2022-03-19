import { Component, OnInit, Input } from '@angular/core';
import { Shinobi } from 'src/app/shinobis/shinobi';

@Component({
  selector: 'app-shinobi-detail',
  templateUrl: './shinobi-detail.component.html',
  styleUrls: ['./shinobi-detail.component.css']
})
export class ShinobiDetailComponent implements OnInit {
  @Input() shinobi? : Shinobi;

  constructor() { }

  ngOnInit(): void {
  }

}
