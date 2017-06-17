import { join, basename, dirname } from 'path';
import { generateSharedDepsMergeStrategy,
       generateCountingSharedBundleUrlMapper } from 'polymer-bundler';

export default ({
  entry = '',
  dest = '',
  fragments = [],
  inlineJs = true,
  inlineCss = true,
  sharedBundlePrefix = 'shared/bundle_',
  sharedDepsMergeStrategy = 3
}) => {

  // do something with the options (in this case dest)
  const base = basename(dest);
  const root = dirname(entry);

  // return an array or object as preset, each object is an build
  return [{
    entry: entry,
    dest: `build/bundled/${base}`,
    fragments: fragments.map(url => {
      return join(root, url);
    }),
    cwd: join(process.cwd(), root),
    inlineJs: inlineJs,
    inlineCss: inlineCss,
    bundle: true,
    // Merge shared dependencies into a single bundle when
    // they have at least three dependents.
    strategy: generateSharedDepsMergeStrategy(sharedDepsMergeStrategy),
    // Shared bundles will be named:
    // `shared/bundle_1.html`, `shared/bundle_2.html`, etc...
    urlMapper: generateCountingSharedBundleUrlMapper(sharedBundlePrefix)
  }];
}
