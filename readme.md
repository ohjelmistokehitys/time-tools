# Time related tools

This package contains tools for time related operations, such as converting times between formats and timezones. The project is not meant to be used in production, but rather as an example of how to create packages.

The best way to understand the contents of the package is to take a look at the [tools.ts](src/tools.ts) file, which contains the "production code", as well as the [tools.test.ts](src/tools.test.ts) file, which contains unit tests.

You can find the published package on https://www.npmjs.com/package/@ohjelmistokehitys/time-tools.


## How to build this package

As this package is written in TypeScript, you need to compile it to JavaScript before you can use it. The compiled JS files will be generated in the `dist` folder, which is included in the package with the `files` field in `package.json`. Test files are excluded from compilation and therefore from the package with the `tsconfig.json` file.

```bash
# Install dependencies
npm install

# Run tests
npm test

# Compile the JavaScript files
npx tsc

# Create the package (for local testing)
npm pack
```

Finally, when you have tested the package locally and verified that it only contains the files you want, you can publish it to npm with:

```bash
npm publish --access public
```

Publishing the package requires an npm account and that you are logged in with the cli tool. You also need permissions to publish the package with the given name, so you might want to change the package name in `package.json` to something unique to you.
