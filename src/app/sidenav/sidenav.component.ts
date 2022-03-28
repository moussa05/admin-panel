import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(private matIconRegistry: MatIconRegistry,
    private domSanitzer:DomSanitizer){
      this.matIconRegistry.addSvgIcon(
        'article',
        this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/article.svg')
      );
      this.matIconRegistry.addSvgIcon(
        'magasin',
        this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/magasins.svg')
      );
      this.matIconRegistry.addSvgIcon(
        'vente',
        this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/vente.svg')
      );
      this.matIconRegistry.addSvgIcon(
        'transaction',
        this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/transaction.svg')
      );
      this.matIconRegistry.addSvgIcon(
        'entreprise',
        this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/entrepris.svg')
      );
      this.matIconRegistry.addSvgIcon(
        'entreprises',
        this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/entreprisess.svg')
      );

}

  ngOnInit(): void {
  }

}
