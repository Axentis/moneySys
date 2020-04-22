import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { Porteur } from 'src/app/model/porteur';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-home-porteur',
  templateUrl: './home-porteur.component.html',
  styleUrls: ['./home-porteur.component.css']
})
export class HomePorteurComponent implements OnInit {

  // get data from bd 
  porteurs:Porteur[] ;

  constructor(
    private globalService: GlobalService
  ) { }

  ngOnInit() {
    this.porteurs = this.globalService.getPorteurs();
    console.log(this.porteurs);
  }

}
