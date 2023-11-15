# PHP - UF1. Examen 2: Login con Sessions

### Como se evalua cada pregunta

1. Penalización de 50% de la puntación si NO funciona lo que pide en cada pregunta. Pero podreis tener algo de nota por el codigo desarrollado aunque no funcione
2. Penalización de 25% por desarrollar un codigo deficiente (repetir bloques de codigo, algoritmos espaguetis, etc)
3. Penalización 10% por no utilizar correctamente los recursos
- Descargar el proyecto del repositorio
[https://gitlab.inf-edt.org/daw/m7/uf1/php-examen-2-login-sessions](https://gitlab.inf-edt.org/daw/m7/uf1/php-examen-2-login-sessions)


## Instrucciones de la aplicación

Durante el examen deberás conseguir lo siguiente:
- Comparar el usuario y contraseña introducido por el usuario con las opciones en la base de datos users.db
- Si el usuario introducido en **login.php** es correcto guardar la autenticación en la sesión.
- Si el usuario le da a logout borra la sesión de login i el carrito de compra

### Cosas que puede hacer un usuario autenticado:
- Visitar las paginas index.php y resumen.php
- Añadir un producto al carrito. Acciones de comprar y alquilar
- Vaciar el carrito
- Aparece el nombre del usuario al lado del boton de logout


### Comportamiento de la web si el usuario NO está autenticado:
- Al intentar visiar las paginas index.php y resumen.php se le redirige siempre a la pagina de login y no le permite abrirlas
- La sesión que gestiona el carrito siempre estará vacia
- En la pagina de login.php NO se debe ver los botones del menu. Debe salir solo el Logo "Tienda"

## Ejecución

Lanzar docker-compose para arrancar los servicios necesarios
Podeis cambiar el puerto en .env si teneis el 1080 ocupado
Teneis disponible el modulo de depuración en el proyecto (si teneis los plugins instalados)

http://localhost:1080/index.php?XDEBUG_SESSION_START=1
