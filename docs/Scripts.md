## Init

```bash
yarn configenv
```

> will copy `.env.example` to `.env` to work with **environment variables**.

## Lint & Build

```bash
yarn lint
```

> will use TypeScript Linter to trigger all warns & errors.

```yarn
yarn build
```

> will lint all files first, then compile then to JavaScript.

## Start & Watch

```bash
yarn start
```

> will build **TS files** first, then compile all **me** files to a `style.css` file **one time**.

```bash
yarn watch
```

> will build **TS files** first, then compile all **me** files to a `style.css` file. **Browser & compilation**** will reload **each time** a file is modified.