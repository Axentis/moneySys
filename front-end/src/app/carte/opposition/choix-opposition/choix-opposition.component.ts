import { Component, OnInit } from '@angular/core';
import { ParametersService } from 'src/app/services/parameters.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'choix-opposition',
  templateUrl: './choix-opposition.component.html',
  styleUrls: ['./choix-opposition.component.css']
})
export class ChoixOppositionComponent implements OnInit {
  opposition=[this.Parameters.opposition_carte]
  constructor(
    private Parameters:ParametersService,
    private data:DataService,
    private router:Router
  ) { 
  }

  ngOnInit() {
    this.opposition=this.data.opposition
  }
 

}
