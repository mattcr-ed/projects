import { Routes } from '@angular/router';

import { Picalc } from './pages/maths/picalc/picalc';
import { Homepage } from './pages/homepage/homepage';
import { WeatherChecker } from './pages/misc/weather-checker/weather-checker';
import { Todolist } from './pages/misc/todolist/todolist';

export const routes: Routes = [
    {
        path: '',
        component: Homepage,
    },
    {
        path: 'maths/picalc',
        component: Picalc,
    },
    {
        path: 'misc/weatherchecker',
        component: WeatherChecker
    },
    {
        path: 'misc/todolist',
        component: Todolist
    },
];
