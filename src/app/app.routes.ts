import { Routes } from '@angular/router';

import { Homepage } from './homepage/homepage';
import { Picalc } from './picalc/picalc';

export const routes: Routes = [
    {
        path: '',
        component: Homepage,
    },
    {
        path: 'picalc',
        component: Picalc,
    },
];
