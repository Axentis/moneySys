import { Component, OnInit } from '@angular/core';
import { ParametersService } from 'src/app/services/parameters.service';
import { DataService } from 'src/app/services/data.service';
import { TypeCarte } from 'src/app/model/type_carte';
import { Router } from '@angular/router';

@Component({
  selector: 'app-type-carte',
  templateUrl: './type-carte.component.html',
  styleUrls: ['./type-carte.component.css']
})
export class TypeCarteComponent implements OnInit {
  type=[this.Parameters.type_carte]
  constructor(
    private Parameters:ParametersService,
    private data:DataService,
    private router:Router
  ) { 
  }

  ngOnInit() {
    this.type=this.data.type_carte
  }
 
  Edit(t){
    this.Parameters.set_type_carte(t)
    this.Parameters.etattt(false)
    this.router.navigateByUrl("/typeFormCarte")
    console.log(t)
  }
  add()
  {
    this.Parameters.etattt(true)
    this.router.navigateByUrl("/typeFormCarte")
  }
  remove(i){
    this.type.splice(i, 1);
  }

}
