
import { PageComponent } from './pages/page.component';

import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'page',
        pathMatch: 'full'
    },
    {
        path: 'page',
        //loadChildren: './pages/page.module#PageModule',
        loadChildren: () => new Promise(function (resolve) {
            (require as any).ensure([], function (require: any) {
                resolve(require('./pages/page.module').default);
            });
        })
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class routing { }