# react-rust-chrome-extension
Sample project which runs [wasm-game-of-life](https://rustwasm.github.io/docs/book/introduction.html) in Chrome extension.

## How to build
1. yarn install
2. Build wasm and link it
```sh
$ wasm-pack build wasm-game-of-life
$ cd wasm-game-of-life/pkg
$ yarn link
$ cd ../..
$ yarn link wasm-game-of-life
```
3. yarn build

Then, the `dist/` directory is generated. It can be loaded as a unpacked extension.

Next time, the step 1 and the step 2 can be omitted.
