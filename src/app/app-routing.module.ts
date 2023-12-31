import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageEnderecoComponent } from './page-endereco/page-endereco.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageCadastroClienteComponent } from './page-cadastro-cliente/page-cadastro-cliente.component';
import { ComponentAboutComponent } from './page-home/component-about/component-about.component';
import { PageAdmAmbienteComponent } from './page-adm-ambiente/page-adm-ambiente.component';
import { PageCustomerComponent } from './page-customer/page-customer.component';
const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path: 'home', component: PageHomeComponent},
  {path: 'carrinho', component: PageEnderecoComponent},
  {path: 'login', component: PageLoginComponent},
  {path: 'cadastroCliente', component: PageCadastroClienteComponent},
  {path: 'about', component: ComponentAboutComponent},
  {path: 'admin', component: PageAdmAmbienteComponent},
  {path: 'pagina-do-cliente', component: PageCustomerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
