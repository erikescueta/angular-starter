import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
    {
        path: 'home',
        canActivate: [AuthGuard],
        loadChildren: () =>
            import('./components/home/home.module').then((m) => m.HomeModule),
    },
    {
        path: 'login',
        loadChildren: () =>
            import('./components/login/login.module').then((m) => m.LoginModule),
    },
    {
        path: 'error',
        loadChildren: () =>
            import('./components/error/error.module').then((m) => m.ErrorModule),
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/error',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule],
})
export class AppRoutingModule {}
