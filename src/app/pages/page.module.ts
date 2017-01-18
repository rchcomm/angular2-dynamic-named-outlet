import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PageComponent } from './page.component';
import { Aux1Component, Aux2Component } from './aus.component';

// export const routing: ModuleWithProviders = RouterModule.forChild([
//   { path: '', component: PageComponent },
//   {
//     path: 'wrap', component: PageComponent, children: [
//       { path: 'test', component: AuxComponent, outlet: 'test' }
//     ]
//   },
// ]);
export const routing: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: PageComponent,
    children: [
      // {
      //   path: '',
      //   redirectTo: 'altro',
      //   pathMatch: 'full'
      // },
      // {
      //   path: 'altro',
      //   component: AuxComponent,
      // }
    ]
  },
  {
    path: 'aux1',
    component: Aux1Component,
    outlet: 'aux1Outlet'
  },
  {
    path: 'aux2',
    component: Aux2Component,
    outlet: 'aux2Outlet'
  }
]);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [PageComponent, Aux1Component, Aux2Component],
  exports: [PageComponent]
})
export default class PageModule {

}
