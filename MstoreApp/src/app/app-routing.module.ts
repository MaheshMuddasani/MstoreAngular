import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './workarea/admin/users/users.component';
import { ProductComponent } from './workarea/admin/product/product.component';
import { LoginComponent } from './login/login.component';
import { WorkareaComponent } from './workarea/workarea.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'workarea', component: WorkareaComponent,
    children: [
      { path: 'admin/users', component: UsersComponent },
      { path: 'admin/products', component: ProductComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
