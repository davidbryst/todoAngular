import { Routes } from '@angular/router';
import { TestComponent } from './components/test.component';
import { P404Component } from './components/404.component';
import { HomeComponent } from './components/home.component';
import { AddComponent } from './components/add.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'TUDU | home',
    pathMatch: 'full',
  },
  {
    path: 'add',
    component: AddComponent,
    title: 'TUDU | Add',
  },
  {
    path: 'test',
    component: TestComponent,
    title: 'TUDU | Test',
  },
  {
    path: '**',
    component: P404Component,
    title: 'TUDU | Page not found',
  }
];
