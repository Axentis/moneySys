import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Banque } from 'src/app/model/banque';

@Component({
  selector: 'app-banque',
  templateUrl: './banque.component.html',
  styleUrls: ['./banque.component.css']
})
export class BanqueComponent implements OnInit {

  // get this data from BD
  banques: Banque[] ;
  constructor(
    private globalService: GlobalService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.banques = this.globalService.getBanques();
  }

  onBanque(banque:Banque){
    // console.log(compte)

    if(this.globalService.porteur){
      this.globalService.porteur.banque  =  banque
    }
    
    // navigate to handling porteur
    this.router.navigate(['porteur/ajouterPorteur']);

  }

  


}
