## Init

```bash
yarn config-env
```

> will copy `.env.example` to `.env` to work with **environment variables**.

## Build

```yarn
yarn build
```

> will use TypeScript Linter to trigger all warns & errors, then compile then to JavaScript.

## Start & Watch

```bash
yarn start
```

> will build **TS files** first, then compile all **me** files to a `style.css` file **one time**.

```bash
yarn watch
```

> will build **TS files** first, then compile all **me** files to a `style.css` file. **Browser & compilation**** will reload **each time** a file is modified.