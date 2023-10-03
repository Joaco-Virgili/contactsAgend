import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'login', 
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path:'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule)
  },
  {
    path:'contacts',
    loadChildren: () => import('./pages/contacts/contacts.module').then(m => m.ContactsModule)
  },
  {
    path:'contacts/:id',
    loadChildren: () => import('./pages/detalle-contacto/detalle-contacto.module').then(m => m.DetalleContactoModule)
  },
  {
    path:'**',
    redirectTo: 'error'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
