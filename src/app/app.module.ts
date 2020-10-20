import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { ShopComponent } from './shop/shop.component';
import { DecimalRatingComponent } from './decimal-rating/decimal-rating.component';
import { BuyPremiumFeatureComponent } from './buy-premium-feature/buy-premium-feature.component';
import { PawnShopComponent } from './pawn-shop/pawn-shop.component';
import { TrainersComponent } from './trainers/trainers.component';
import { OpeningExplorerComponent } from './opening-explorer/opening-explorer.component';
import { ChessBoardComponent } from './chess-board/chess-board.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    ShopComponent,
    DecimalRatingComponent,
    BuyPremiumFeatureComponent,
    PawnShopComponent,
    TrainersComponent,
    OpeningExplorerComponent,
    ChessBoardComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
