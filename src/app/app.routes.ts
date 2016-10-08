import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
	{ path: 'contact', component: ContactComponent },
	{ path: '', component: HomeComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);