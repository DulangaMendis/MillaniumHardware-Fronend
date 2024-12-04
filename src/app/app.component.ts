import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomerComponent } from './routes/customer/customer.component';
import { ItemComponent } from "./routes/item/item.component";
import { RentalComponent } from "./routes/rental/rental.component";
import { RentalDetailComponent } from "./routes/rental-detail/rental-detail.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RentalDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
