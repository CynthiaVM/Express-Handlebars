🪄 Guia 👀

🔖​Crear carpeta "express-handlebars"
🔖​Ingresar cd express-handlebars
🔖​Ejecutar comando npm init -y
🔖​Instalar todas la dependencias necesarias para iniciar el proyecto
npm install node
npm install express ejs typescript ts-node @types/express @types/node
npm install
npm start
npm install express-handlebars


🔖​Crear archivo tsconfig.json 👍

🔖​Crear estructura 👍
test-mvc-express/
  ├─ src/
  │   ├─ app.ts
  │   ├─ views/
  │   │     ├─ home.hbs
             -perfil.hbs
             -ingresar.hbs
  ├─ package.json
  ├─ tsconfig.json

🔖​agregar script en el package.json 👍
		"start": "ts-node src/app.ts"