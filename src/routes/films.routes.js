import Router from 'express';
import filmsCtrl from '../controllers/films.controller';

const router = new Router();

router.get('/', filmsCtrl.getAllFilms);

router.post('/', filmsCtrl.addFilm);

router.get('/search', filmsCtrl.searchFilm);

router.get('/director/:id', filmsCtrl.getFilmsByDirectorId);

router.get('/:id', filmsCtrl.getOneFilm);

router.delete('/:id', filmsCtrl.deleteFilm);

router.put('/:id', filmsCtrl.updateFilm);

export default router;