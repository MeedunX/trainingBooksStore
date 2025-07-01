import { Main } from '../../pages/main'
import { Cart } from '../../pages/cart'
import { Info } from '../../pages/info'
export const routes = [
    { path: '/cart', element: Cart },
    { path: '/info/:id', element: Info },
    { path: '/*', element: Main }
]