import Router from 'express';
import filmsCtrl from '../controllers/films.controller';

const router = new Router();

router.get('/', filmsCtrl.getAllFilms);

router.post('/', filmsCtrl.addFilm);

router.get('/:id', filmsCtrl.getOneFilm);

router.get('/director/:id', filmsCtrl.getFilmsByDirector);

/* router.get('/:name', filmsCtrl.getOneFilm); */

router.delete('/:id', filmsCtrl.deleteFilm);

router.put('/:id', filmsCtrl.updateFilm);

export default router;