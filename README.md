# grunt-svn-switch

> Grunt SVN switching support

## Getting Started
This plugin requires Grunt `~0.4.4`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-svn-switch --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-svn-switch');
```

## The "svn_switch" task

### Overview
In your project's Gruntfile, add a section named `svn_switch` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  svn_switch: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.repository
Type: `String`
Default value: `null`

[Required] The URL of the SVN repository.

#### options.username
Type: `String`
Default value: `null`

SVN username to use in Authentication process.

#### options.password
Type: `String`
Default value: `null`

SVN password to use in Authentication process.


#### options.bin
Type: `String`
Default value: `'svn'`

Specifies the location of the SVN binary.

#### options.execOptions
Type: `Object`
Default value: `'{}'`

Specifies any options to pass to the exec command when executing the svn cli statements. For example, it may be necessary to increase the default maxBuffer for larger repositories.

### Usage Examples

You need to specify `svn_target` command line option when invoking task. The `svn_target` option is a target, related to `repository` option URL, that specifies to which bramch/tag or trunk switch to.

```js
grunt.initConfig({
  svn_switch: {
    options: {
      repository:  'http://somedomain.com/svn/myproject/',
      username:    'my_username',
      password:    'my_password'
    },
    default: {
    },
  },
});
```

How to use: `grunt svn_switch --target=branches/mybranch` or `grunt svn_switch --target=trunk` etc.


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
