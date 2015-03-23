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
    |   ├── _variable.scss
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

    <img src="hero.png" alt="hero" class="u-img-full">

#### Responsive iframe

    <div class="u-iframe-full">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Jg7P8-t5uLE" frameborder="0" allowfullscreen></iframe>
    </div>

## License

The MIT License (MIT)

Copyright (c) 2015 OCHIISHI Koichiro

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
