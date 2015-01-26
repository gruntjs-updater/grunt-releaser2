# grunt-releaser2

> A wrapper task for [grunt-release](https://github.com/geddski/grunt-release)

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-releaser2 --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-releaser2');
```

## The "releaser2" task

### Overview

Dynamically configures `grunt-release` allowing the creation of individual release targets. Targets allows to split the release process of NPM modules in steps steps, for instance:

  1. Version bumping
  2. Releasing (committing, tagging, pushing and publishing to NPM)

In this case, a two steps process allows to run additonal tasks after bumping the project's versions, in case any task depends on the bumped version.

```js
grunt.initConfig({
  releaser: {
    options: {
      // Any valid `grunt-release` option is allowed here
      reloadpkg: true // default: false
    },
    your_target: {
      // Any valid `grunt-release` option is allowed here
      reloadpkg: true // default: false
    },
  },
})
```

### Options

#### Options from `grunt-release`

See [grunt-release](https://github.com/geddski/grunt-release).

#### options.reloadpkg
Type: `Boolean`
Default value: `false`

If `true` reloads `package.json` after running `release:[type]`

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
