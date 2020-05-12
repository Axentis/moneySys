import { Component, OnInit } from '@angular/core';
import { ParametersService } from 'src/app/services/parameters.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { TypeCarte } from 'src/app/model/type_carte';

@Component({
  selector: 'app-type-form',
  templateUrl: './type-form.component.html',
  styleUrls: ['./type-form.component.css']
})
export class TypeFormComponent implements OnInit {
  etat:boolean= this.Parameters.etat;
  type:TypeCarte=this.Parameters.type_carte
  constructor(
    private Parameters:ParametersService,
    private data:DataService,
    private router:Router
  ) { }

  ngOnInit() {
    this.type = this.Parameters.type()
    this.Parameters.type_cartee=this.Parameters.type_carte
    console.log(this.Parameters.etat)
  }
  add()
  {
    this.data.pushType(this.type);
    this.router.navigateByUrl("/typeCarte");
  }
}
