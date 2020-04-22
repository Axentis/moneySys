import { Component, OnInit } from '@angular/core';
import { Ville } from 'src/app/model/ville';
import { GlobalService } from 'src/app/services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-ville',
  templateUrl: './show-ville.component.html',
  styleUrls: ['./show-ville.component.css']
})
export class ShowVilleComponent implements OnInit {

  villes:Ville[];
  constructor(
    private globalService:GlobalService,
    private router:Router
  ) { }

  ngOnInit() {
    this.villes = this.globalService.getVilles();
  }

}
