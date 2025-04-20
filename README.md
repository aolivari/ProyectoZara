# Mi Proyecto Next.js

Este es un proyecto creado con Next.js y React. A continuación se detallan los archivos y su propósito dentro de la aplicación.  
Se requiere **npm** y **Node.js** en su versión mínima de 20.17.

## Estructura del Proyecto

```
├── pages
│   ├── _app.tsx           # Personalización del componente de aplicación
│   ├── index.tsx          # Página principal de la aplicación
│   ├── cart
│   │   └── index.tsx      # Página del carrito de compras
│   └── details
│       └── [id].tsx       # Página de detalles de un smartphone
├── public
│   ├── favicon.ico        # Ícono de la aplicación
│   ├── fonts              # Fuentes públicas
│   │   └── HelveticaNeue-Bold.otf
│   └── images             # Imágenes públicas
├── src
│   ├── _components        # Componentes reutilizables
│   ├── _hooks             # Hooks personalizados
│   ├── context            # Contextos de React
│   ├── CSS.modules        # Estilos CSS en módulos
│   ├── domain             # Tipos y modelos de datos
│   ├── services           # Servicios y llamadas a APIs
│   └── views              # Vistas principales de la aplicación
├── styles
│   └── globals.css        # Estilos globales
├── .env                   # Variables de entorno
├── .eslintrc.json         # Configuración de ESLint
├── .gitignore             # Archivos ignorados por Git
├── jest.config.js         # Configuración de Jest
├── next.config.js         # Configuración personalizada de Next.js
├── package.json           # Configuración de npm y dependencias
├── tsconfig.json          # Configuración de TypeScript
└── README.md              # Documentación del proyecto
```

## Instalación

Para instalar las dependencias del proyecto, ejecuta el siguiente comando en la raíz del proyecto:

```bash
npm install
```

## Ejecución

Para iniciar la aplicación en modo de desarrollo, utiliza el siguiente comando:

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`.

## Construcción

Para construir la aplicación para producción, ejecuta:

```bash
npm run build
```

Los archivos generados estarán en la carpeta `.next`.

## Licencia

Este proyecto está bajo la licencia MIT.
