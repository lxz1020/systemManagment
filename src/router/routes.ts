import { ComponentType } from 'react'
import Home from './Home/Home'
import Login from './Login/Login'
import NotFound from './NotFound'

interface RouteConfig{
    path : string ;
    exact? : boolean;
    component : ComponentType;
}

export const routeConfig: RouteConfig[] = [
    {
        path : '/',
        exact : true,
        component : Home
    },
    {
        path : '/login',
        exact : true,
        component : Login
    },
    {
        path : '*',
        component :NotFound
    }
]