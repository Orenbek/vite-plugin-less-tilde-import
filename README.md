# vite-plugin-less-tilde-import

Add support for import less or css file in node_modules using ~ symbol in less file.
for instance, `@import '~packages_from_node_modules';`. This kind of syntax originally supported by webpack. Therefore, some third-party component libraries use this way of importing files.
I did some compatibility, now you can use this plugin to safely use `~` import symbol.

## configuration

```ts
// vite.config.ts
import LessTildeImport from "vite-plugin-less-tilde-import";
import { defineConfig } from "vite";

export default defineConfig(({ command }) => {
  return {
    // ...
    css: {
      preprocessorOptions: {
        less: {
          plugins: [new LessTildeImport()],
        },
      },
    },
  };
});
```
