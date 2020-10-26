import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyPremiumFeatureComponent } from './buy-premium-feature/buy-premium-feature.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OpeningExplorerComponent } from './opening-explorer/opening-explorer.component';
import { PawnShopComponent } from './pawn-shop/pawn-shop.component';
import { AuthGuard } from './services/auth-guard';
import { ShopComponent } from './shop/shop.component';
import { TrainersComponent } from './trainers/trainers.component';

const appRoutes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home',  component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'shop',  component: ShopComponent},
    {path: 'auth', component: LoginComponent},
    {path: 'premium', component: BuyPremiumFeatureComponent},
    {path: 'pawnShop', component: PawnShopComponent},
    {path: 'trainers', component: TrainersComponent},
    {path: 'openingExplorer', component: OpeningExplorerComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}