import Film from '../models/Films';
import { normalizeSearchRegExp } from '../lib/functions';

const filmsController = (
    () => {
        const checkDirector = (directors,id) => directors.find( e => e.id == id );

        async function getAllFilms (req,res) {
            try {
                const films = await Film.find();
                res.status(200).json( films );
            } catch (error) {
                res.status(500).json( { message: 'It seems that something went wrong' } );
            }
        }
        async function getOneFilm (req,res) {
            try {
                const film = await Film.findById( req.params.id );
                res.status(200).json( film );
            } catch (error) {
                res.status(500).json( { message: 'It seems that something went wrong' } );
            }
        }
        async function searchFilm (req,res) {
            try {
                //console.log( req.query.title );
                const search = normalizeSearchRegExp(req.query.title);
                const films = await Film.find( { title: new RegExp( search, 'i' ) } );
                if (!films.length) return res.status(404).json( { message: 'Film not found' } );
                res.status(200).json( films );
            } catch (error) {
                res.status(500).json( { message: 'It seems that something went wrong' } );
            }
        }
        async function addFilm (req,res) {
            try {
                //console.log( JSON.stringify(req.body) );
                const film = new Film( req.body );
                const filmAdded = await film.save();
                res.status(200).json( filmAdded );
            } catch (error) {
                res.status(500).json( { message: 'It seems that something went wrong' } );
            }
        }
        async function updateFilm (req,res) {
            try {
                const update = await Film.findByIdAndUpdate( req.params.id, req.body );
                //console.log( update );
                if (!update) return res.status(404).json( { message: 'Could not update' } );
                res.status(200).json( { message: 'Updated film' } );
            } catch (error) {
                res.status(500).json( { message: 'It seems that something went wrong' } );
            }
        }
        async function deleteFilm (req,res) {
            try {
                await Film.findByIdAndDelete( req.params.id );
                res.status(200).json( { message: 'Deleted film' } );
            } catch (error) {
                res.status(500).json( { message: 'It seems that something went wrong' } );
            }
        }
        async function getFilmsByDirectorId (req,res) {
            try {
                const films = await Film.find();
                const filmsByDirector = films.filter( e => checkDirector(e.directors, req.params.id) );
                if (!filmsByDirector.length) return res.status(404).json( { message: "Director not found" } );
                res.status(200).json( filmsByDirector );
            } catch (error) {
                res.status(500).json( { message: 'It seems that something went wrong' } );
            }
        }

        return {    //public functions
            getAllFilms: getAllFilms,
            getOneFilm: getOneFilm,
            searchFilm: searchFilm,
            addFilm: addFilm,
            updateFilm: updateFilm,
            deleteFilm: deleteFilm,
            getFilmsByDirectorId: getFilmsByDirectorId
        }
    }
)();

export default filmsController;