import { Component, OnInit } from '@angular/core';
import { Banque } from 'src/app/model/banque';
import { GlobalService } from 'src/app/services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-banque',
  templateUrl: './add-banque.component.html',
  styleUrls: ['./add-banque.component.css']
})
export class AddBanqueComponent implements OnInit {

  banque:Banque = new Banque();
  constructor(
    private globalService:GlobalService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    // add banque to db 
    console.log(this.banque)
    this.globalService.addBanque(this.banque);

    // navigation 
    this.router.navigate(['/parametrage/banque']);
  }

}
