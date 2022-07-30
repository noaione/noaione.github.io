# N4O Main website

A simple landing page that hotlinks into most of my subdomain and other owned domains.

Deployed Website: [n4o.xyz](https://n4o.xyz/)<br>
Hosted in **GitHub Pages**

This project use [Svelte](https://svelte.dev/) and a custom [build scripts](https://github.com/noaione/n4o.xyz/blob/master/scripts/build.js).

## Build or Deploy
1. `npm install`
2. `npm run deploy`

This will create a `public` folder that you can use on any hosting.

## Acknowledgements
This website use some part of Bootstrap 5 CSS, it was pulled from bootstrap file via Chrome Coverages to the one needed for fast loading.

The generator use the help of [`shelljs`](https://www.npmjs.com/package/shelljs) to help with files copying and [`html-minifier`](https://www.npmjs.com/package/html-minifier) to minify the result.