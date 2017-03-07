import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChooseClassComponent } from './choose-class/choose-class.component';
import { ClassPageComponent } from './class-page/class-page.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [ {
    path: '',
    component: LoginComponent
  },
  {
    path: 'classes',
    component: ChooseClassComponent
  },
  {
    path: 'classes/:id',
    component: ClassPageComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
