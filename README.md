
# Welcme!

This project demonstrates Angular's localization features, including serving the application in different locales.

## Development Server

To start a local development server for the default locale (`en-US`), run:

```bash
ng serve
```

### Serving in Specific Locales

To serve the application in **Farsi (`fa`)**, run:

```bash
ng serve --configuration=fa
```

To serve the application in **Japanese (`ja`)**, run:

```bash
ng serve --configuration=ja
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.


## Localization Documentation

- [Project Configuration](./docs//config.md)
- [Examples](/docs/demo.md)
