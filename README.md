
# Express IP Parser API

## Descripción

Este es un proyecto de API básico construido con Express que proporciona información sobre la dirección IP, el idioma y el software del usuario que realiza la solicitud. La API expone un endpoint `/api/whoami` que devuelve estos detalles en formato JSON.

## Tecnologías Utilizadas

- [Node.js](https://nodejs.org/) - Entorno de ejecución de JavaScript
- [Express](https://expressjs.com/) - Framework para Node.js
- [CORS](https://www.npmjs.com/package/cors) - Middleware para habilitar CORS

## Instalación

1. Clona el repositorio:

    ```bash
    git clone https://github.com/DarkSevenX/Req-Header-ParserJs.git
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd Req-Header-ParserJs
    ```

3. Instala las dependencias:

    ```bash
    npm install
    ```

## Uso

1. Inicia el servidor:

    ```bash
    npm start
    ```

   El servidor se ejecutará en `http://localhost:8000`.

2. Accede al endpoint `/api/whoami` usando tu navegador o herramientas como `curl` o [Postman](https://www.postman.com/):

    ```bash
    curl http://localhost:8000/api/whoami
    ```

   La respuesta será un JSON con los detalles de la solicitud:

    ```json
    {
      "ipaddress": "tu_direccion_ip",
      "language": "idioma_de_solicitud",
      "software": "informacion_del_usuario"
    }
    ```

## Estructura del Proyecto

- `index.js`: Archivo principal que configura y ejecuta el servidor Express.
- `route/parserRoute.js`: Archivo de rutas que define el endpoint `/api/whoami`.

## Contribuciones

Si deseas contribuir a este proyecto, por favor abre un [issue](https://github.com/tu_usuario/tu_repositorio/issues) o envía un pull request.

## Licencia

Este proyecto está licenciado bajo la [MIT License](LICENSE).
