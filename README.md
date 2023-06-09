# Nx + Angular + Rspack

This is a demo of running Angular with Rspack and Nx. It uses an unreleased version of Rspack.

```shell
npm install

# Run with Webpack
nx serve
nx build

# Run with Rspack
nx serve-rs
nx build-rs
```

## Benchmarks

Using [`hyperfine`](https://github.com/sharkdp/hyperfine).

```shell
hyperfine --warmup 3 --min-runs 100 -n "Angular Devkit" "nx build --skip-nx-cache" -n "Rspack" "nx build-rs --skip-nx-cache"
```

After installing Hyperfine, you can also compare the standard Angular Webpack and EsBuilder builder with the rspack CLI Builder

```shell
npm run bench
```