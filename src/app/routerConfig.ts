import { Routes } from '@angular/router';

import { DashComponent } from './dash/dash.component';
import { LoginComponent } from './login/login.component';
import { QuizMainComponent } from './quiz-main/quiz-main.component';

export const appRoutes: Routes = [
    {
        path: 'quiz',
        component: QuizMainComponent
    },
    {
        path: 'dashboard',
        component: DashComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        redirectTo: 'quiz',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'quiz',
        pathMatch: 'full'
    }
];
