import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { Agence } from 'src/app/model/agence';

@Component({
  selector: 'app-show-agence',
  templateUrl: './show-agence.component.html',
  styleUrls: ['./show-agence.component.css']
})
export class ShowAgenceComponent implements OnInit {

  agences:Agence[] ;
  constructor(
    private globalService:GlobalService
  ) { }

  ngOnInit() {
    this.agences = this.globalService.getAgences();
  }
  

}
