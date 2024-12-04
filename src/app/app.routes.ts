import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './routes/customer/customer.component';
import { ItemComponent } from './routes/item/item.component';
import { RentalComponent } from './routes/rental/rental.component';
import { RentalDetailComponent } from './routes/rental-detail/rental-detail.component';
import { HomeComponent } from './routes/home/home.component';

export const routes: Routes = [
    {
        path : "home",
        component: HomeComponent
      },
      {
        path : "manage-customer",
        component: CustomerComponent
      },
      {
        path : "manage-item",
        component: ItemComponent
      },
      {
        path : "rental",
        component: RentalComponent
      },
      {
        path : "rental-details",
        component: RentalDetailComponent
      }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
