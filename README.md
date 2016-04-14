# Angular Repository Viewer

> Sample project for viewing github users and repositories using Angular + gulp

### Install

Ensure that the following global dependencies are installed:

##### Install required tools `gulp` and `bower`:
```
npm install -g gulp bower
```
##### Install `sass`:
```
gem install sass
```
#### Install project dependencies:
```
npm install && bower install
```

### How to use

### `serve`

For the development phase, the command `gulp serve` launches a local server which supports live reload of your modifications.

### `test`

Run `gulp test` to run all `jasmine` unit tests via Karma and end-to-end tests via `gulp protractor`.

### `build`

Creates a "production" build of our application where the following processes are applied:

* Concatenation of vendor scripts, application scripts and app styles
* Minification and obfuscation of styles and scripts via `uglify`
* Content hashes are appended to script and style file names for cache busting (allowing us to deploy new versions and without worrying about content expiry)
* Minification of html and template caching via `gulp-angular-templatecache`

### `inject`

Automatically injects scripts and styles into the built
`index.html` file (found at `dist/index.html`).

### TODO

- [x] github user search
- [x] list repositories for found user
- [x] repository detail view
- [ ] unit test coverage
- [ ] end-to-end tests
