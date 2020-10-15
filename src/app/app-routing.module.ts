import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyPremiumFeatureComponent } from './buy-premium-feature/buy-premium-feature.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ShopComponent } from './shop/shop.component';

const appRoutes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home',  component: HomeComponent},
    {path: 'shop',  component: ShopComponent},
    {path: 'auth', component: LoginComponent},
    {path: 'premium', component: BuyPremiumFeatureComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}