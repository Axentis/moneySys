import { Component, OnInit } from '@angular/core';
import { Ville } from 'src/app/model/ville';
import { GlobalService } from 'src/app/services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-ville',
  templateUrl: './add-ville.component.html',
  styleUrls: ['./add-ville.component.css']
})
export class AddVilleComponent implements OnInit {
  
  ville:Ville = new Ville();

  constructor(
    private globalService:GlobalService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    this.globalService.addVille(this.ville);
    this.router.navigate(["parametrage/ville"]);
  }

}
