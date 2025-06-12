# Website

The website reachable at <https://pagopa.github.io/digital-identity-wallet> is automatically built by this tool using [Docusaurus](https://docusaurus.io/). All .md files that are present inside the root of the repository are automatically built.

### Installation

```
yarn
```

### Local Development

```
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server. The docs folder is automatically populated via the `yarn copy-md` command which is automatically executed at startup.

### Build

```
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.
