import moviesRouter from '@modules/movies/routes/movies.routes';
import {Router} from 'express';

const routes = Router();

routes.use('/movies', moviesRouter)

export default routes;