# Mi Proyecto Next.js

Este es un proyecto creado con Next.js y React. A continuación se detallan los archivos y su propósito dentro de la aplicación.
Se requiere npm y node en su version minima de 20.17

## Estructura del Proyecto

```

├── pages
│   ├── index.tsx          # Página principal de la aplicación
│   └── _app.tsx           # Personalización del componente de aplicación
├── public
│   └── favicon.ico        # Ícono de la aplicación
├── styles
│   ├── globals.css        # Estilos globales
│   └── Home.module.css    # Estilos específicos para la página de inicio
├── components
│   └── Header.tsx         # Componente de cabecera
├── package.json           # Configuración de npm y dependencias
├── tsconfig.json          # Configuración de TypeScript
├── next.config.js         # Configuración personalizada de Next.js
└── README.md              # Documentación del proyecto
```

## Instalación

Para instalar las dependencias del proyecto, ejecuta el siguiente comando en la raíz del proyecto:

```
npm install
```

## Ejecución

Para iniciar la aplicación en modo de desarrollo, utiliza el siguiente comando:

```
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`.

## Construcción

Para construir la aplicación para producción, ejecuta:

```
npm run build
```

## Licencia

Este proyecto está bajo la licencia MIT.
