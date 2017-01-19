import { Component, Injectable, ComponentFactoryResolver, ViewContainerRef, Compiler, AfterViewInit, NgModule } from '@angular/core';
import { RouterOutletMap, RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser'

import { routing } from '../app.routing';

@Injectable()
export class DynamicOutletService {
    rootAux: ViewContainerRef;
    parentOutletMap: RouterOutletMap;
    resolver: ComponentFactoryResolver;
    constructor(private compiler: Compiler){

    }

    createRouterOutlet(name: string) {
        let template = '<h1>' + name + '</h1>' + '<router-outlet name="' + name + '"></router-outlet>';
        console.info('router-outlet name : ' , [template]);
        @Component({
            template: template,
            selector: 'dynamicOutletChildern',
        })
        class TemplateComponent {}

        @NgModule({
            imports: [BrowserModule, routing],
            declarations: [TemplateComponent],
        })
        class TemplateModule { }

        this.compiler.compileModuleSync(TemplateModule);
        const mod = this.compiler.compileModuleAndAllComponentsSync(TemplateModule);
        // We create a factory out of the component we want to create
        //let factory = this.resolver.resolveComponentFactory(componentclass);
        const factory = mod.componentFactories.find((comp) =>
                comp.componentType === TemplateComponent
            );
        let componentRef = this.rootAux.createComponent(factory);
        if(componentRef.instance.close){
            componentRef.instance.close.subscribe(() => {
                componentRef.destroy();
            });
        }

        let ro: RouterOutlet = new RouterOutlet(this.parentOutletMap, this.rootAux, this.resolver, name);
        console.info('by DynamicOutletService : ', [this.parentOutletMap]);
    }
}