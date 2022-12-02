# Qwik City Todo App ⚡️

A simple Todo app using Qwik City and React ( integration ) and Valtio for a shared state management.

- [Qwik](https://qwik.builder.io/)
- [Valtio](https://valtio.pmnd.rs/) ( state management )
- [Qwik React](https://qwik.builder.io/qwikcity/integrations/react/)
- [TailwindCSS](https://tailwindcss.com/)

---

## Development

Development mode uses [Vite's development server](https://vitejs.dev/). During development, the `dev` command will server-side render (SSR) the output.

```shell
npm start # or `yarn start`
```

> Note: during dev mode, Vite may request a significant number of `.js` files. This does not represent a Qwik production build.

## Preview

The preview command will create a production build of the client modules, a production build of `src/entry.preview.tsx`, and run a local server. The preview server is only for convenience to locally preview a production build, and it should not be used as a production server.

```shell
npm run preview # or `yarn preview`
```

## Production

The production build will generate client and server modules by running both client and server build commands. Additionally, the build command will use Typescript to run a type check on the source code.

```shell
npm run build # or `yarn build`
```
