import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { DepartmentComponent } from './pages/department/department.component';

export const routes: Routes = [

{path:"",component:HomeComponent},
{path:'contact',component:ContactusComponent},
{path:'department',component:DepartmentComponent}


];
