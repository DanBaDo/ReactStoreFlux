const express = require('express');
const multer  = require('multer');

const mimeParser = multer();

const appPort = 3000;

var app = express();

app.post('/login/',mimeParser.none(), (req,res)=>{
    res.send(JSON.stringify(validates));
});

app.post('/logout/',autenticatedSession,(req,res)=>{
    console.log('Cerrando sesión.')
    req.session.authenticated = false;
    res.sendStatus(200);
});

app.get( '/private/', autenticatedSession, function( req, res ) {
    /**
     * Si el middleware de autenticación lo permite muestra el área privada.
     */
    const secret = [
        'https://www.jesusda.com/docs/ebooks/ebook_memorias%20de%20un%20ingeniero.pdf',
        '42',
        'https://es.wikipedia.org/wiki/El_sentido_de_la_vida,_el_universo_y_todo_lo_dem%C3%A1s#El_n%C3%BAmero_42',
        'https://es.wikipedia.org/wiki/Bastard_Operator_from_Hell',
        'https://es.wikipedia.org/wiki/The_IT_Crowd',
    ];
    console.log('Dando respuestas a la vida.')
    return res.send( JSON.stringify(secret) ) ;
});

app.listen( appPort , ()=>{
    console.log(`Listo!: http://localhost:${appPort}/`)
}) ;
