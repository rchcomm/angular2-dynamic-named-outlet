import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'aux1',
    template: '-Aux 1-'
})
export class Aux1Component implements OnInit {
    ngOnInit() {
        console.log("AuxComponent OnInit");
    }
}

@Component({
    selector: 'aux2',
    template: '-Aux 2-'
})
export class Aux2Component implements OnInit {
    ngOnInit() {
        console.log("AuxComponent OnInit");
    }
}