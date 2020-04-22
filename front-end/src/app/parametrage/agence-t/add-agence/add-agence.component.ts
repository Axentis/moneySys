import { Component, OnInit } from '@angular/core';
import { Agence } from 'src/app/model/agence';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-add-agence',
  templateUrl: './add-agence.component.html',
  styleUrls: ['./add-agence.component.css']
})
export class AddAgenceComponent implements OnInit {

  agence:Agence = new Agence();
  
  constructor(
    private route:Router,
    private globalService: GlobalService
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    // console.log(this.agence);
    this.globalService.addAgence(this.agence);
    this.route.navigate(['parametrage/agence']);
  }

}
