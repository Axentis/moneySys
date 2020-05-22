import { Component, OnInit } from '@angular/core';
import { ParametersService } from 'src/app/services/parameters.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'opposition-param',
  templateUrl: './opposition-param.component.html',
  styleUrls: ['./opposition-param.component.css']
})
export class OppositionParamComponent implements OnInit {

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
 
  Edit(o){
    this.Parameters.set_opposition_carte(o)
    this.Parameters.etattt(false)
    this.router.navigateByUrl("/oppositionParamFormCarte")
    console.log(o)
  }
  add()
  {
    this.Parameters.etattt(true)
    this.router.navigateByUrl("/oppositionParamFormCarte")
  }
  remove(i){
    this.opposition.splice(i, 1);
  }

}
