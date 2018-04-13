# Pixel&Code Susy Grid

:warning: This Susy 3 based grid is used **internally** by development agency Pixel&Code. Changes might break your code. Use it at your own risk.

It is inspired by the Bootstrap 3 way of responsive breakpoints (mobile, tablet, desktop, large-desktop), so if you're
used to Bootstrap but want to use a more refined Grid-only solution without thousands of CSS lines, this might be it!

## Dependencies

* Normalize SCSS
* Susy 3
* Susy 3 SVG-grid plugin (for debugging)

## Installation

Import the 'src/_grid.scss' file and the necessary dependencies into your own SCSS project:

```scss
// Import Pixel&Code Grid
@import '**Your packages path**/normalize-scss/_normalize.scss';
@import '**Your packages path**/susy/sass/susy';
@import '**Your packages path**/susy/sass/plugins/svg-grid';
@import '**Your packages path**/pixelcode-grid/src/grid';
```

#### Grid setup

This package relies on the following 4 grid variables, which need to be present in your SCSS setup:

````scss
// -----
// Grids
// -----

$susy: (
    // Large desktop
    'columns': susy-repeat(12),
    'gutters': 40px,
    'container-spread': 'wide'
);

$susy-desktop: (
    // Desktop
    'columns': susy-repeat(12),
    'gutters': 30px,
    'container-spread': 'wide'
);

$susy-tablet: (
    // Tablet
    'columns': susy-repeat(12),
    'gutters': 20px,
    'container-spread': 'wide'
);

$susy-mobile: (
    // Mobile
    'columns': susy-repeat(12),
    'gutters': 20px,
    'container-spread': 'wide'
);
````

###### Note
Of course you can change the settings as you please, but our helpers/mixins will only work properly using
the **'wide' container-spread**, see [disclaimer](#disclaimer) section.

## Settings

Below are the default settings. You can overwrite these variables in your project:

##### Debug-mode

````scss
/* This will make the grid visible if you are using our .container class */
$grid-debug: false;
````

##### Container sizes
```scss
$container-tablet-width: 720px;
$container-desktop-width: 940px;
$container-large-width: 1100px;
```

##### Breakpoints
````scss
// Mobile
$breakpoint-mobile-max: 768px;

// Tablet
$breakpoint-tablet-max: 992px;

// Desktop
$breakpoint-desktop-max: 1200px;
````

## Usage

_Work in progress to explain the following options:_

- Column
- Row
- Container
- Push/pull
- Clearfix
- Responsive utilities (hidden-xs etc.)
- Custom grids

### Browser compatibility

* All modern browsers
* IE10+

_We are working on IE9 compatibility. IE9 seems to have some issues with the calc() function in combination with
box-sizing: border-box; This will result in a 1px calculation error, so with 3 columns, the third one possibly
might not fit on the same row. Suggestions are more than welcome!_

## <a name="disclaimer"></a>Disclaimer

###### Flexbox
We are not yet using **flexbox**, because some of our websites need to work in IE9/IE10.
If you're not intending to support IE9 and IE10, you are better off using just Susy 3 instead of this package.

###### 'Wide' container-spread
Sometimes you have 3 columns that need to become 2 columns on tablets, and you can't always use the '.row' class
to wrap them in, because that will break your layout. With the 'wide' container-spread and negative margins on rows,
this problem is fixed. Bootstrap uses this logic as well, for probably the same reason.

## Roadmap

Work in progress:

* Finish the 'usage' section in this README file
* IE9 compatibility (thank you IE for still being a pain in the ***)
* Migrate to Yarn since Bower is 'deprecated' (https://bower.io/blog/2017/how-to-migrate-away-from-bower/)
