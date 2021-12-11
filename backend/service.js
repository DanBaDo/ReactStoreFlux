const express = require('express');

// DB mockup

const news = [
    {
        title: "Juan Bedoian, el periodista que escribió cultura con ‘Ñ'",
        //date: "30 NOV 2021 - 19:27 CET",
        date: 1638296820000,
        author: "Raquel Garzón",
        shortContent:
            "El editor de la revista de cultura referencia en el periodismo iberoamericano fallece en Buenos Aires a los 74 años",
        photoURL:
            "https://imagenes.elpais.com/resizer/WgSTZiuUQBUPxvRBoZ--DF3R51g=/828x466/filters:focal(945x1070:955x1080)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/SF77NEVDYRF5FHGH3AQYKCMGXM.Jpg",
        fullContent:
            "El domingo 28, mientras sacudía la ciudad un temporal inusual para Buenos Aires en noviembre, murió Juan Bedoain, periodista argentino y primer editor de Ñ, la revista de cultura de Clarín, que desde 2003 se convirtió en referencia en el periodismo iberoamericano. Se despidió con 74 años, rodeado por el amor de los más suyos —Beatriz, su mujer; sus hijos, María, Laura y Joaquín, y sus nietos, Nina y Olivo—, cuando el cáncer de pulmón contra el que venía batallando le ganó la pulseada."
    },
    {
        title: "Diego Boneta, el Luis Miguel de Netflix en la portada de ICON de noviembre",
        //date: "04 NOV 2021 - 18:33 CET",
        date: 1636047180000,
        author: "ICON",
        shortContent:
            "Anna Castillo, Josie, Brian Cox o Agathe Rousselle son otros de los nombres que se encontrará en las páginas de este número otoñal",
        photoURL:
            "https://imagenes.elpais.com/resizer/KpoySqgSdxOGL6gsY2C3bYvxWro=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/QLYGYQFJMFGSDCQJJQQQY7MQOY.jpg",
        fullContent:
            "“De chico, me llevaban a conciertos en el Auditorio Nacional de Ciudad de México. Sting, Luis Miguel… Viendo el escenario, yo sabía que había nacido para eso. ‘Quiero hacerlo y sé que estoy en esta vida para hacerlo”. Le cuenta Diego Boneta a Tom C. Avendaño en la entrevista de portada de nuestro número de noviembre. La definición de eso andaba en algún punto entre el canto y la interpretación."
    },
    {
        title:
            "Esther Doña: “¿Por qué no iba a publicar los ‘whatsapps’ con los que Carlos Falcó me conquistó? ¡Si estaba orgullosísimo!”",
        //date: "28 OCT 2021 - 05:20 CEST",
        date: 1635394800000,
        author: "Jesús Ruiz Mantilla",
        shortContent:
            "La viuda del marqués de Griñón ha escrito ‘La vida de un gran hombre a través de mis ojos’, publicado por Planeta, que se ha convertido en su terapia y su forma de superar la pérdida",
        photoURL:
            "https://imagenes.elpais.com/resizer/Ri3555vGhWSUXVDh7bvvx1MlvqI=/1960x0/filters:focal(2423x737:2433x747)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/CDEAVKPW7JCJFLK2VKZE5SWENU.jpg",
        fullContent:
            "La pandemia se llevó en marzo de 2020 a su marido, Carlos Falcó, el marqués de Griñón. Y también le quitó a su padre. Esa es la razón por la que Esther Doña (Málaga, 43 años) ha escrito como terapia el libro La vida de un gran hombre a través de mis ojos, que ha publicado Planeta. En él, la modelo cuenta cómo fue su historia de amor: desde los whatsapps que se escribieron al principio hasta su salida del luto. Ahora ella ha rehecho su vida junto al juez Santiago Pedraz (Salamanca, 63 años). Se sabe por la revista ¡Hola!, pero también porque antes de esta entrevista ha comido con ella en el Hotel Palace de Madrid y se acerca a saludar. Esther Doña se queda a posar con su perrita, Chloe, que quiere salir en la foto y a veces pareciera que también responde."
    },
    {
        title:
            "Juan Herreros y Jens Richter, artífices del museo Munch, protagonizan el nuevo número de ICON Design",
        //date: "27 OCT 2021 - 11:28 CEST",
        date: 1635330480000,
        author: "ICON Design",
        shortContent:
            "También hablamos con el artista Damien Hirst, visitamos la casa de Menorca de Luis Laplace, charlamos con el empresario Tatxo Benet y con la francesa Saraï Delfendahl, repasamos la pasión anticuaria de Andy Warhol y la vida y obra de Josep Grau-Garriga y, como siempre, hay mucho más",
        photoURL:
            "https://imagenes.elpais.com/resizer/4DClVXzb8wIQMr-GFCBEhybvFpo=/1960x0/filters:focal(1294x1983:1304x1993)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/K5W2CIMD4RF5JIAJJPRIHSLXIE.jpg",
        fullContent:
            "La portada del nuevo número de ICON Design, la revista de arquitectura, diseño, arte y decoración de EL PAÍS (el sábado 30 de octubre gratis con El País en todos los quioscos), está dedicada al primer gran museo europeo del futuro. Está en Oslo, fue concebido para custodiar la obra de Edvard Munch y lleva la firma del madrileño Estudio Herreros, que lleva 13 años trabajando en el proyecto. Lo visitamos con Juan Herreros y Jens Richter, sus artífices, durante su primer viaje tras dos años de pandemia. “Hemos intentado manipular el tiempo, que cuando llegues te tengas que detener”, explica Herreros a Daniel García. “Que pares y observes”."
    }
]

const appPort = 5000;

var app = express();

const newsItem2JSON = {
    outputFormat: "json",
    encode: (data) => {
        try {
            if (data) {
                return JSON.stringify(data);
            } else {
                return null;
            }
        } catch (err) {
            console.error(err);
        }
    }
}


function itemFromArrayIdx(idx, array) {
    return array[idx]
}

function itemExtractorFactory( method, data ) {
    return (key) => method(key, data)
}

function sendResponseFromURLParameter (URLParameter, itemExtractor, encoder ) {
    return (req, res) => {
        try {
            const data = encoder.encode(itemExtractor(req.params[URLParameter]));
            if (data) {
                res.type(encoder.outputFormat);
                res.send(data);
            } else {
                res.status(404);
                res.type("json")
                res.send(`{"status": 404, msg: "No data found for ${req.params[URLParameter]}"}`);
            }
        } catch (err) {
            res.status(500);
            res.send(`{"status": 500, msg: "${err}"}`);
        }
    }
}

const itemExtractor = itemExtractorFactory(itemFromArrayIdx,news);

app.get("/",(req,res)=>res.send("Your backend is running"));

app.get("/news/?idx=:idx", sendResponseFromURLParameter("idx",itemExtractor,newsItem2JSON));

app.listen( appPort , ()=>{
    console.log(`Listo!: http://localhost:${appPort}/`)
}) ;
