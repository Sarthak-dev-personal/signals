# 25BindRouterDataComponentInputs

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.0.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


TODO:

# Try it yourself - Router Input Bindings

## 1. Add the feature
In the [`app.config.ts`](./src/app/app.config.ts) file, Add the required router feature to the configuration

## 2. Receiving the inputs
In the [`name-details.component.ts`](./src/app/pages/name-details/name-details.component.ts) file, receive the name parameter into a required input signal

## 3. Derive computed signals
In the same file, derive the computed signals, as per the instructions in that file

## 4. Display in Template
In the [`name-details.component.html`](./src/app/pages/name-details/name-details.component.html) file, bind to the signals in the instructed locations
