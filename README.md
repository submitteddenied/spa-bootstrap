SPAT - Single Page App Template
===============================
A base template for building "single page" javascript apps using the Grunt build
tool and frameworks such as Angular.js and Backbone (you pick!)

##Directory Structure

    SPAT
    ├── build
    │   ├── dev
    │   │   ├── assets
    │   │   └── index.html
    │   └── dist
    │       ├── assets
    │       └── index.html
    ├── Gruntfile.js
    ├── package.json
    ├── spec
    └── src
        ├── css
        ├── js
        ├── fonts
        ├── html
        ├── images
        └── etc...

**package.json** Standard NPM package file. Similar to the Gemfile in Ruby projects.

**Gruntfile.js** Standard Gruntfile. Defines build commands and tools.

**src/** Stores all your source files. This is where you do half of your work

**spec/** Stores your JS specs (by default, Jasmine). This is the other half of your work

**build/dev** The target directory for development build tasks, contains un-minified JS, CSS and images, as well as HTML that is compiled in "dev mode"

**build/dist** The target directory for production build tasks. Everything is minified and compressed. You could (should?) deploy this folder to your webserver!