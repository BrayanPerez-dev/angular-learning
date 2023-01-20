import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';
import { UserComponent } from './users/user/user.component';
import { DetailsComponent } from './users/details/details.component';
import { ListComponent } from './users/list/list.component';
import { PermissionsGuard } from './guards/permissions.guard';
import { DataResolverService } from './resolvers/data-resolver.service';


const routes:Routes = [
{path:'',redirectTo:'/home',pathMatch:'full'},
{path:'contact-reactive',loadChildren:()=> 
import('./contact-reactive/contact-reactive.module').then(m=> m.ContactReactiveModule)},
{path:'contact-template/:id',component:ContactComponent,resolve:{deparments:DataResolverService}},
{path:'home',component:HomeComponent},
{path:'users',component:UserComponent,canActivate:[PermissionsGuard],children:[
{path:'details',component:DetailsComponent},
{path:'list',component:ListComponent}]},
{path:'**',component:PagenotFoundComponent},]
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]

})
export class AppRoutingModule { }
