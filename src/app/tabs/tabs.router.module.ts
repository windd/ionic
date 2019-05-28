import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';


const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {path: '', redirectTo: '/msite', pathMatch: 'full'},
      {path: 'msite', loadChildren: '../msite/msite.module#MsitePageModule'},
      {path: 'search', loadChildren: '../search/search.module#SearchPageModule'},
      {path: 'order', loadChildren: '../order/order.module#OrderPageModule'},
      {path: 'profile', loadChildren: '../profile/profile.module#ProfilePageModule'},
      {path: 'grid', loadChildren: '../grid/grid.module#GridPageModule' },
      {path: 'data', loadChildren: '../data/data.module#DataPageModule' },
      {path: 'history', loadChildren: '../history/history.module#HistoryPageModule' },
      {path: 'detail/:id', loadChildren: '../detail/detail.module#DetailPageModule' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
