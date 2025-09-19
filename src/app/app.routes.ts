import { Routes } from '@angular/router';

import { Picalc } from './pages/maths/picalc/picalc';
import { Homepage } from './pages/homepage/homepage';

export const routes: Routes = [
    {
        path: '',
        component: Homepage,
    },
    {
        path: 'maths/picalc',
        component: Picalc,
    },
];
