import { Component, OnInit } from '@angular/core';
import { Opposition } from 'src/app/model/opposition';
import { ParametersService } from 'src/app/services/parameters.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-oppsition-param-form',
  templateUrl: './oppsition-param-form.component.html',
  styleUrls: ['./oppsition-param-form.component.css']
})
export class OppsitionParamFormComponent implements OnInit {

  etat:boolean= this.Parameters.etat;
  opposition:Opposition=this.Parameters.opposition_carte
  constructor(
    private Parameters:ParametersService,
    private data:DataService,
    private router:Router
  ) { }

  ngOnInit() {
    if(this.etat==true){
      this.opposition.code_opposition=this.data.opposition[this.data.opposition.length-1].code_opposition+1
    }
    else{
      this.opposition = this.Parameters.opposition()
    }
    this.Parameters.opposition_cartee=this.Parameters.opposition_carte
    console.log(this.Parameters.etat)
  }
  add()
  {
    this.data.pushOpposition(this.opposition);
    this.router.navigateByUrl("/oppositionParamCarte");
  }


}
