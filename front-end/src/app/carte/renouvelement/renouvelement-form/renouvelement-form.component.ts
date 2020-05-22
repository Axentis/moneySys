import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ParametersService } from 'src/app/services/parameters.service';
import { Carte } from 'src/app/model/Carte';
import { Renouvelement } from 'src/app/model/RenouvelementCarte';

@Component({
  selector: 'app-renouvelement-form',
  templateUrl: './renouvelement-form.component.html',
  styleUrls: ['./renouvelement-form.component.css']
})
export class RenouvelementFormComponent implements OnInit {
  carte:Carte=this.Parameters.carte
  etat:boolean
  durée:Date
  date:Date=new Date();
  dateFix:Date=new Date()
  index:number

  checked:number
  constructor(private Parameters:ParametersService,
    private data:DataService,
    private router:Router) { }

  ngOnInit() {
  }
 
  
  renouveller(){
    let dateDeb:Date=new Date();
    let dateFin:Date
    this.data.carte.forEach(element=>{
      if(element.Num==this.carte.Num ){
        if(this.checked==3){
          dateFin=this.carte.date_renouvelement[0].dateFin
        }
        else{
        dateFin=this.date
        }
        /* let year:number=this.dateFix.getFullYear()
        let month= this.dateFix.getMonth()
        let day= this.dateFix.getDate()+1
        dateDeb.setFullYear(year)
        dateDeb.setMonth(month);
        dateDeb.setDate(day) */
        dateDeb=this.dateFix
        alert(dateDeb)
        alert(dateFin)
        this.data.pushRenouvellement(new Renouvelement(this.index,dateDeb,dateFin))
       element.date_renouvelement.unshift(new Renouvelement(this.data.renouvelement.length,dateDeb,dateFin))
  
      }

    }),
    this.router.navigateByUrl("/renouvelementCarte")
    
  }
  // Renouveller 1 ans
  un(){
    this.checked=1;
    let year:number=this.dateFix.getFullYear()+1
    let month= this.dateFix.getMonth()
    let day= this.dateFix.getDate()-1
    this.date.setFullYear(year)
    this.date.setMonth(month);
    this.date.setDate(day)
    //this.dateFix.setDate(day+1)
  }
  //Renouveller 2 ans
  deux(){
    this.checked=2;
    let year:number=this.dateFix.getFullYear()+2
    let month= this.dateFix.getMonth()
    let day= this.dateFix.getDate()-1
    this.date.setFullYear(year)
    this.date.setMonth(month);
    this.date.setDate(day)
    //this.dateFix.setDate(day+1)
  }

  // définir la date de renouvellement
  definir(){
    this.checked=3;
    this.carte.date_renouvelement[0].dateDebut=this.dateFix 
  }
  validation(){
    let i=0
    this.data.carte.forEach(element => {
      if(element.Num==this.carte.Num
        && element.renouvelement!="non renouvelable"){
        i=1;
        //this.index=element.date_renouvelement.length
        let date=element.date_renouvelement[0].dateFin
        let year:number=date.getFullYear()
        let month= date.getMonth()
        let day= date.getDate()+1
        this.dateFix.setFullYear(year)
        this.dateFix.setMonth(month);
        this.dateFix.setDate(day)
        //this.dateFix=date
      }
    });
    if(i==1)
    {
      this.etat=true;
      i=0
    }
    else{
      this.etat=false
    }
  }
   
}
