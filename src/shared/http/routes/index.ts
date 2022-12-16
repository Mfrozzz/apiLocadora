import moviesRouter from '@modules/movies/routes/movies.routes';
import {Router} from 'express';

const routes = Router();

routes.use('/products', moviesRouter)

export default routes;