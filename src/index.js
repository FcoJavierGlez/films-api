import app from './app';

/* Init */
app.listen( app.get('port'), () => {
    console.log( 'Server on port:', app.get('port') );
});