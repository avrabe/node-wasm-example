# node-wasm-example

Preparations

```sh
# Append nvm to zsh on Mac OS X
touch ~/.zshrc
# Install node version manager
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
# Reopen shell/terminal
nvm install node
```

Example without typescript

```sh
# Install rustup
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
# Add WASM-WASI as build target
rustup target add wasm32-wasi
# Install cargo component
cargo install cargo-component
```

```sh
npm run jco
node src/hello.mjs
```

Example using typescript

```sh
npm run start
```
