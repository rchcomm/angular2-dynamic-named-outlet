import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { Router, RouterOutlet, RouterOutletMap } from '@angular/router';

import { DynamicOutletService } from './shared/DynamicOutlet.Service';

@Component({
  selector: 'app-root',
  template: `
      <h1>My App!</h1>
      <a [routerLink]="['/']">Home</a>
      <a [routerLink]="['/page']">Page</a>
      <a [routerLink]="['/page', {outlets: {'aux1Outlet': 'aux1'}}]">Page/aux1</a>
      <a [routerLink]="['/page', {outlets: {'aux2Outlet': 'aux2'}}]">Page/aux2</a>
      <button (click)="createRouterOutlet('aux1Outlet')">add aux1Outlet</button>
      <button (click)="createRouterOutlet('aux2Outlet')">add aux2Outlet</button>
      <div class=outlet>
        <router-outlet></router-outlet>
        <div #rootAux></div>
      </div>
  `,  //<router-outlet name="xyz"></router-outlet>
  styles: ['.outlet{border:1px solid #000;padding:20px;}']
})
export class AppComponent implements OnInit {
  @ViewChild('rootAux', { read: ViewContainerRef }) rootAux: ViewContainerRef;

  constructor(
    private router: Router,
    private parentOutletMap: RouterOutletMap,
    private resolver: ComponentFactoryResolver,
    private dynamicOutletService: DynamicOutletService
  ) { }

  ngOnInit() {
    this.dynamicOutletService.rootAux = this.rootAux;
    this.dynamicOutletService.parentOutletMap = this.parentOutletMap;
    this.dynamicOutletService.resolver = this.resolver;
    
    console.info("App:", [this.router,  this.parentOutletMap, this.dynamicOutletService]);
    //this.createRouterOutlet('xyz');
  }

  createRouterOutlet(name: string) {
        //debugger;
        this.dynamicOutletService.createRouterOutlet(name);
  }
}
