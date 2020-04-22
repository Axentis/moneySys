import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { Banque } from 'src/app/model/banque';

@Component({
  selector: 'app-show-banque',
  templateUrl: './show-banque.component.html',
  styleUrls: ['./show-banque.component.css']
})
export class ShowBanqueComponent implements OnInit {

  banques:Banque[];
  
  constructor(
    private globalService:GlobalService
  ) { }

  ngOnInit() {
    this.banques = this.globalService.getBanques()
  }

}
