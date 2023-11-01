import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path';

const app = express();
const port = 2000;

// Configurar de handlebars
app.engine('.hbs', engine({extname:'.hbs'}));
app.set('view engine', '.hbs'); //motor de vistas
app.set('views', path.join(__dirname, 'views'));


// Crear primer ruta, configuracion >Ruta Home
app.get('/', (req, res) => {
    const tareas= ['Trabajar', 'Estudiar', 'Escuchar musica'];
    res.render('home', {tareas, isAdmin: false});
});

app.get('/mi', (req, res) => {
	const skills= ['Java', 'Linux', 'Javascript'];
	res.render('perfil',{
		nombre: 'Cintia',
		edad:'41', 
		isAdmin: true,
		skills,
	});
});
app.get('/ingresar', (req, res) => {
	res.render('ingresar',{layout:false});
});
	
app.listen(port, () => {
	console.log(`Servidor corriendo en el puerto: ${port}`); // para que la muestre
});