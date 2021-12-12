## Getting Started

### Prerequisites

    * Docker en la máquina local
    * Nodejs 14.13.1
    * Visual Studio Code

### Installation

1. Clonar repositorio
```sh
git clone git@github.com:samydavd/threepoints-cowsay.gitt
```
2. Instalar las dependencias correspondientes
```sh
npm install
```

3. Iniciar proyecto
```sh
npm run start
```

4. Para iniciar el proyecto con docker ejecutar en terminal, con docker instalado, el siguiente comando para crear la imagen
```sh
docker build . -t samydavd/cowsay
```

5. Posteriormente, para ejecutar la imagen
```sh
docker run -p 8000:8000 -d samydavd/cowsay
```

## Usage
Para poder realizar una llamada a la API se debe utilizar el endpoint de http://localhost:8000/cowsay con el metodo POST y nuestra vaca respondera con un mensaje. En caso de requerir mostrar un mensaje personalizado, entonces se puede enviar el siguiente parametro en la peticion:

    { 
        "message": "Hola, soy un mensaje personalizado"
    }

Y posteriormente la vaca mostrara el mensaje enviado