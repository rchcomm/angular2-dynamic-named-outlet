import { Router, RouterOutlet, RouterOutletMap } from '@angular/router';
import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { DynamicOutletService } from '../shared/DynamicOutlet.Service';

@Component({
    template: `Page 
        <hr>
        <button (click)="createRouterOutlet('xyz')">add</button>
        <button (click)="go()">go</button>`
})
export class PageComponent implements OnInit {
    constructor(private router: Router,
        private parentOutletMap: RouterOutletMap,
        private resolver: ComponentFactoryResolver,
        private dynamicOutletService: DynamicOutletService
    ) { }

    ngOnInit() {
        console.info([this.router, this.parentOutletMap]);
    }

    createRouterOutlet(name: string) {
        this.dynamicOutletService.createRouterOutlet(name);
    }

    go() {
        this.router.navigateByUrl('/page/(xyz:aux)');
    }
}