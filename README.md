

<p align="center">
<img src="https://raw.githubusercontent.com/mecss/graphic-assets/master/logos/quote/light/logo-quote-light.png" width="500"><br/>
    <a href="https://github.com/mecss/mecss/releases"><img src="https://img.shields.io/github/release-pre/mecss/mecss.svg?logoColor=%2300FF00" alt="mecss last pre-release"/></a>
    <a href="https://github.com/mecss/mecss/blob/master/LICENSE"><img src="https://img.shields.io/github/license/mecss/mecss.svg" alt="mecss license"/></a>
    <a href="https://github.com/mecss/mecss/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc"><img src="https://img.shields.io/github/issues/mecss/mecss.svg" alt="mecss issues"/></a>
    <a href=""><img src="https://img.shields.io/github/languages/top/mecss/mecss.svg" alt="mecss top language"/></a>
    <a href=""><img src="https://img.shields.io/github/package-json/keywords/mecss/mecss.svg?color=%237700ff" alt="mecss keywords"/></a>
</p>

# mecss

🐁 a **Minimalist** & **Effortless CSS** preprocessor, using CSS **properties aliases**, **Sass**-based.

## Concept

**mecss** is a CSS **preprocessor** based on [Sass](https://sass-lang.com/) using css property aliases.

An alias **exist only** if the property **is 5 characters or more**.

> Example:

`Box.me.scss`

```Scss
#Box {
    bg: #666;
    cl: #333;
    font: 16px 600 Montserrat sans-serif;
    pos: fixed;
    top: 0;
    left: 0;
    crs: pointer;

}
```

`style.css`

```CSS
#Box {
    background: #666;
    color: #333;
    font: 16px 600 Montserrat sans-serif;
    position: fixed;
    top: 0;
    left: 0;
    cursor: pointer;

}
```

## Install mecss

```bash
git clone git@github.com:mecss/mecss.git
cd mecss
yarn global add typescript tslint
yarn
```

## Scripts

### Init

```bash
yarn configenv
```

> will copy `.env.example` to `.env` to work with **environment variables**.

### Lint & Build

```bash
yarn lint
```

> will use TypeScript Linter to trigger all warns & errors.

```yarn
yarn build
```

> will lint all files first, then compile then to JavaScript.

### Start & Watch

```bash
yarn start
```

> will build **TS files** first, then compile all **me** files to a `style.css` file **one time**.

```bash
yarn watch
```

> will build **TS files** first, then compile all **me** files to a `style.css` file. **Browser & compilation**** will reload **each time** a file is modified.

## License

Under [MIT](https://github.com/mecss/mecss/blob/master/LICENSE) license.
