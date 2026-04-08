import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {path: 'login', loadChildren: () => import('@org/auth')},
];
