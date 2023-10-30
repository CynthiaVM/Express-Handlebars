import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path';

const app = express();
const port = 2000;

// Configurar de handlebars
app.engine('.hbs', engine({extname:'.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));


// Crear primer ruta, configuracion >Ruta Home
app.get('/', (req, res) => {
    const tareas= ['Jugar', 'Estudiar', 'Limpiar'];
    res.render('home',{tareas, isAdmin: false});
});

    //app.get('/', (req: Request, res: Response) => {
	//res.render('home', { /// home es el nombre de la vista que quiero renderizar
		//titulo: 'Primera noticia 📎',
		//subtitulo: 'Comenzando con mvc, sera? 🤔',
		//contenido: 'Configurando mi primer vista con express y mvc 🔥',
		//titulodepagina: 'MVC - TEST 🐉 ',
		//numero: 0,
	
app.listen(port, () => {
	console.log(`Servidor corriendo en el puerto: ${port}`); // para que la muestre
});