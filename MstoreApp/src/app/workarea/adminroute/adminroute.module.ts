import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from '../admin/product/product.component';
import { UsersComponent } from '../admin/users/users.component';


const routes: Routes = [
  
      { path: 'workarea/admin/users', component: UsersComponent },
      { path: 'workarea/admin/products', component: ProductComponent }
]
    
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminrouteModule { }
