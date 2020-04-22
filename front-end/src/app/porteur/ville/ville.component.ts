import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Ville } from 'src/app/model/ville';

@Component({
  selector: 'app-ville',
  templateUrl: './ville.component.html',
  styleUrls: ['./ville.component.css']
})
export class VilleComponent implements OnInit {

  public villes:Ville[];

  constructor(
    private globalService: GlobalService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.villes = this.globalService.getVilles();
  }

  onVille(ville:Ville){
    // console.log(compte)

    if(this.globalService.porteur){
      this.globalService.porteur.ville  =  ville;
    }
    
    // navigate to handling porteur
    this.router.navigate(['porteur/ajouterPorteur']);

  }

}
