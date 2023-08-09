# Palitos APP
Para ejecutar localmente se necesita la base de datos corriendo en un docker.
Recomiendo tener la imagen de mongo en docker descargada previamente.
```
Para construir todo el entorno de docker la primera vez, ejecutar: docker-compose up -d
```
* El -d, significa __detached__ (ejecuta el contenedor en segunda plano)

* MongoDB URL Local:
```
mongodb://localhost:27017/palitosdb
```

* Para iniciar la aplicación en modo desarrollo:
```
npm run dev
```

* Para construir el buil de producción:
```
npm run build  -> Construye la aplicación como mismo se hará en producción.
npm run start  -> Inicia la aplicación construida en modo producción.
```

* Para ejecutar los test unitarios:
```
npm run test
```