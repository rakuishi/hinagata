# Undercoat
> A gulp-based HTML &amp; SASS Boilerplate.

## Getting Started

### Download

There are a couple ways to download Undercoat:

* [Download the zip](https://github.com/rakuishi/undercoat/archive/master.zip)
* Clone the repo: `$ git clone https://github.com/rakuishi/undercoat.git`

### Install & Build

[Node.js](http://nodejs.org/) is required.

    $ [sudo] npm install
    $ gulp

### What's in the download?

The download includes Undercoat's CSS, [HTML5-Reset](https://github.com/murtaugh/HTML5-Reset) as reset and index.html as a starting point.

    undercoat/
    ├── index.html
    ├── scss/
    │   ├── _grid.scss
    │   ├── _reset.scss
    │   ├── _util.scss
    │   ├── _variable.scss
    │   └── style.scss
    ├── css/
    ├── images/
    ├── js/
    ├── package.json
    ├── gulpfile.js
    └── README.md

## SCSS

### _grid.scss

Example 1/2 + 1/2:

    <div class="l-container">
      <div class="l-row">
        <div class="l-column l-one-half">
            Column 1
        </div>
        <div class="l-column l-one-half">
            Column 2
        </div>
      </div>
    </div>

Example 1/3 + 2/3:

    <div class="l-container">
      <div class="l-row">
        <div class="l-column l-one-third">
            Column 1
        </div>
        <div class="l-column l-two-thirds">
            Column 2
        </div>
      </div>
    </div>

### _reset.scss

[HTML5-Reset](https://github.com/murtaugh/HTML5-Reset)

### _variable.scss

* Spacing
* Color
* Width
* Media Query

### _util.scss

#### Responsive img

    <img src="hero.png" class="u-img-full">

#### Responsive iframe

    <div class="u-iframe-full">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Jg7P8-t5uLE" frameborder="0" allowfullscreen></iframe>
    </div>

## BrowserSync

Undercoat runs a local server by [BrowserSync](http://www.browsersync.io/).

## License

MIT License
