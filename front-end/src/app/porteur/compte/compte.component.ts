import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Compte } from 'src/app/model/compte';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {

  // get this data from BD 
  comptes = [
    {
      bin:"12344",
      client: "Badr" 
    },
    {
      bin:"12345",
      client: "Amine" 
    },
    {
      bin:"12346",
      client: "Chouhab" 
    },
    {
      bin:"12347",
      client: "Akkar" 
    },
  ]
  constructor(
    private globalService: GlobalService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit() {
  }

  onCompte(compte:Compte){
    // console.log(compte)

    if(this.globalService.porteur){
      this.globalService.porteur.compte  =  compte
    }
    
    // navigate to handling porteur
    this.router.navigate(['porteur']);

  }

}
