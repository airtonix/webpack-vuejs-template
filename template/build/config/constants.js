import PKG from '../../package.json';

export const CWD = process.cwd();

export const Banner = ```
/**
 * v${PKG.version}
 * ${PKG.homepage}
 * Released under the ${PKG.license} License
 **/
```
