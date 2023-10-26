import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NgxMaskModule,IConfig} from 'ngx-mask'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentHeaderComponent } from './component-header/component-header.component';
import { ComponentFooterComponent } from './component-footer/component-footer.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { ComponentHeroComponent } from './page-home/component-hero/component-hero.component';
import { ComponentAboutComponent } from './page-home/component-about/component-about.component';
import { ComponentMenuComponent } from './page-home/component-menu/component-menu.component';
import { ComponentWishListComponent } from './page-home/component-wish-list/component-wish-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PageEnderecoComponent } from './page-endereco/page-endereco.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageCadastroClienteComponent } from './page-cadastro-cliente/page-cadastro-cliente.component';
import { PageAdmAmbienteComponent } from './page-adm-ambiente/page-adm-ambiente.component';
import { HeaderAdminComponent } from './page-adm-ambiente/header-admin/header-admin.component';
import { SectionCadastraSoveteComponent } from './page-adm-ambiente/section-cadastra-sovete/section-cadastra-sovete.component';
import { SectionEditarSorveteComponent } from './page-adm-ambiente/section-editar-sorvete/section-editar-sorvete.component';
import { SectionEditarFotoComponent } from './page-adm-ambiente/section-editar-foto/section-editar-foto.component';
import { SectionExcluirSorveteComponent } from './page-adm-ambiente/section-excluir-sorvete/section-excluir-sorvete.component';



@NgModule({
  declarations: [
    AppComponent,
    ComponentHeaderComponent,
    ComponentFooterComponent,
    PageHomeComponent,
    ComponentHeroComponent,
    ComponentAboutComponent,
    ComponentMenuComponent,
    ComponentWishListComponent,
    PageEnderecoComponent,
    PageLoginComponent,
    PageCadastroClienteComponent,
    PageAdmAmbienteComponent,
    HeaderAdminComponent,
    SectionCadastraSoveteComponent,
    SectionEditarSorveteComponent,
    SectionEditarFotoComponent,
    SectionExcluirSorveteComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
