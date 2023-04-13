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

## Notes

- `artifacts` folder has a build of Rspack with missing compiler hooks. This will be released to npm soon.
- Some features are missing, such as external templates and styles.
- Sorting entry chunks is not working, thus `import 'zone.js'` is added to `src/main.ts`. This has been [fixed](https://github.com/web-infra-dev/rspack/pull/2634) but not released.
