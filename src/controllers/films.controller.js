import Film from '../models/Films';

/* const filmsController = {
    getAllFilms: async function (req,res) {
        const films = await Film.find();
        res.status(200).json( films );
    },
    getOneFilm: async function (req,res) {
        const film = await Film.findById( req.params.id );
        res.status(200).json( film );
    },
    addFilm: async function (req,res) {
        console.log( JSON.stringify(req.body) );
        const film = new Film( req.body );
        const filmAdded = await film.save();
        res.status(200).json( filmAdded );
    },
    updateFilm: async function (req,res) {
        const update = await Film.findByIdAndUpdate( req.params.id, req.body );
        console.log( update );
        res.status(200).json( { message: 'Updated film' } );
    },
    deleteFilm: async function (req,res) {
        await Film.findByIdAndDelete( req.params.id );
        res.status(200).json( { message: 'Deleted film' } );
    },
    getFilmsByDirector: async function (req,res) {
        const films = await Film.find(  );
        res.status(200).json( films );
    }
} */

const filmsController = (() => {
    const checkDirector = (directors,id) => directors.find( e => e.id == id );

    async function getAllFilms (req,res) {
        const films = await Film.find();
        res.status(200).json( films );
    }
    async function getOneFilm (req,res) {
        const film = await Film.findById( req.params.id );
        res.status(200).json( film );
    }
    async function addFilm (req,res) {
        console.log( JSON.stringify(req.body) );
        const film = new Film( req.body );
        const filmAdded = await film.save();
        res.status(200).json( filmAdded );
    }
    async function updateFilm (req,res) {
        const update = await Film.findByIdAndUpdate( req.params.id, req.body );
        console.log( update );
        res.status(200).json( { message: 'Updated film' } );
    }
    async function deleteFilm (req,res) {
        await Film.findByIdAndDelete( req.params.id );
        res.status(200).json( { message: 'Deleted film' } );
    }
    async function getFilmsByDirector (req,res) {
        const films = await Film.find();
        const filmsByDirector = films.filter( e => checkDirector(e.directors, req.params.id) );
        if (!filmsByDirector.length) return res.status(404).json( { message: "Director not found" } );
        res.status(200).json( filmsByDirector );
    }


    return {
        getAllFilms: getAllFilms,
        getOneFilm: getOneFilm,
        addFilm: addFilm,
        updateFilm: updateFilm,
        deleteFilm: deleteFilm,
        getFilmsByDirector: getFilmsByDirector
    }
})();

export default filmsController;