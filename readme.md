# Mini Material

## About
Mini Material is a simple library of Material Design based elements. It uses only CSS, thus it's small and light. Mini Material is not meant to build your entire site; think of it as a collection of elements to use when needed.

The main concept while creating MM was to interfere with your HTML code structure and semantics as little as possible. Mini material affects only the look of your site and doesn't force you to create giant non semantic stuctures.

## Demo
You can see demo [here](http://sajran.github.io/mini-material/).

## Usage
Table of contents:

1. [Layout](#layout)
2. [Header](#header)
3. [Footer](#footer)
4. [Cards](#cards)
5. [Buttons](#buttons)
6. [Grid](#grid)
7. [Tables](#tables)
8. [Forms](#forms)
9. [Text Styles](#text-styles)
10. [Headings](#headings)
11. [Colors](#colors)
12. [Media Queries](#media-queries)
13. [Ripple](#ripple)
14. [SASS VAriables](#sass-variables)

### Layout
Classes:
* `page`
  * `page__content`

Example:
```html
<body class="page">
    <main class="page__content">
    </main>
</body>
```

### Header
Classes:
* `header`
  * `header--large`
  * `header--compact`
  * `header__title`
    * `header__link`
  * `nav`
    * `nav__list`
      * `nav__item`
        * `nav__link`
          * `nav__link--active`

Example:
```html
<header class="header header--large">
    <h1 class="header__title">
        <a href="#" class="header__link">Page Title</a>
    </h1>
    
    <nav class="nav">
        <ul class="nav__list">
            <li class="nav__item"><a class="nav__link nav__link--active" href="#">Link 1</a></li>
            <li class="nav__item"><a class="nav__link" href="#">Link 2</a></li>
            <li class="nav__item"><a class="nav__link" href="#">Link 3</a></li>
        </ul>
    </nav>
</header>
```
*large* and *compact* header structure is the same.

### Footer
Classes:
* `footer`
  * `footer__left`
  * `footer__right`

Example:
```html
<footer class="footer">
    <div class="footer__left">
        Left content
    </div>
    <div class="footer__right">
        Right content
    </div>
</footer>
```

### Cards
Classes:
* `card`
  * `card__image`
    * `card__image--left`
    * `card__image--right`
    * `card__image--responsive`
    * `card__img`
  * `card__title`
  * `card__content`
  * `card__actions`
    * `card__button`

Example:
```html
<article class="card">
    <div class="card__image">
        <img src="images/image.jpg" alt="Pretty image" class="card__img">
    </div>

    <h3 class="card__title">Card</h3>

    <div class="card__content">
        <p>Content</p>
    </div>

    <div class="card__actions">
        <a href="#" class="card__button">Action 1</a>
        <a href="#" class="card__button">Action 2</a>
    </div>
</article>
```
`card__image` and `card__actions` are optional.

`card__image--responsive` can be used only with`card__image--left` or`card__image--right` and means that on screen smaller than specified breakpoint image will be displayed on top and not on the side of card.

### Buttons
Classes:
* `button`
  * `button--large`
  * `button--flat`
  * `button--disabled`
* `fab`
  * `fab--disabled`

Example:
```html
<button class="button">Hi there!</button>

<button class="button button--large">Hello sir!</button>

<button class="button button--flat">What's up?</button>

<button class="fab">FAB</button>

<button class="button button--disabled">Disabled</button>
```
Every button can be disabled.

### Grid
Classes:
* `grid`
  * `grid__col`
    * `grid__col--1`
    * `grid__col--fraction`

Example:
```html
<div class="grid">
    <div class="grid__col grid__col--1 grid__col--m--1-2 grid__col--l--1-3">
    </div>

    <div class="grid__col grid__col--1 grid__col--m--1-2 grid__col--l--1-3">
    </div>

    <div class="grid__col grid__col--1 grid__col--l--1-3">
    </div>
</div>
```
Width of the column is expressed as fraction separated by dash. There is no *2-2* or *3-3* classes, use 1 instead. By default grid has three columns.

### Tables
Classes:
* `table`
  * `table__head`
  * `table__body`
  * `table__row`
    * `table__row--head`
    * `table__cell`
      * `table__cell--head`
      * `table__cell--non-numeric`

Example:
```html
<table class="table">
    <thead class="table__head">
        <tr class="table__row--head">
            <th class="table__cell table__cell--head table__cell--non-numeric">Header 1</th>
            <th class="table__cell table__cell--head">Header 2</th>
        </tr>
    </thead>
    <tbody class="table__body">
        <tr class="table__row">
            <td class="table__cell table__cell--non-numeric">Something</td>
            <td class="table__cell">100</td>
        </tr>
        <tr class="table__row">
            <td class="table__cell table__cell--non-numeric">Anything</td>
            <td class="table__cell">200</td>
        </tr>
    </tbody>
</table>
```
All cells are treated as numeric (text aligned to right) unless they have `table__cell--non-numeric` class.

### Forms
Classes:
* `text-field`
  * `text-field__input`
    * `text-field__input--textarea`
  * `text-field__label`
* `checkbox`
  * `checkbox__input`
  * `checkbox__label`
* `radio`
  * `radio__input`
  * `radio__label`
* `switch`
  * `switch__input`
  * `switch__label`

Example:
```html
<!-- text input -->
<div class="text-field">
    <input type="text" class="text-field__input" placeholder="John Doe" id="name">
    <label for="name" class="text-field__label">Last Name</label>
</div>

<!-- textarea -->
<div class="text-field">
    <textarea type="text" class="text-field__input text-field__input--textarea" id="about">I'm awesome!</textarea>
    <label for="about" class="text-field__label">Something about you</label>
</div>

<!-- switch (checkbox) -->
<div class="switch">
    <input type="checkbox" id="switch1" class="switch__input" checked>
    <label for="switch1" class="switch__label">Switch 1</label>
</div>

<!-- radio button -->
<div class="radio">
    <input type="radio" name="radio" id="radio1" class="radio__input" checked>
    <label for="radio1" class="radio__label">Radio 1</label>
</div>
```
Both `.checkbox` and `.switch` classes are intended for checkboxes.

### Tooltips
Classes:
* `tooltip--top`
* `tooltip--right`
* `tooltip--bottom`
* `tooltip--left`

Example:
```html
<span class="tooltip--top" data-tooltip="I'm at the top!">tooltip--top</span>

<span class="tooltip--right" data-tooltip="I'm on the right!">tooltip--right</span>

<span class="tooltip--bottom" data-tooltip="I'm at the bottom!">tooltip--bottom</span>

<span class="tooltip--left" data-tooltip="I'm on the left!">tooltip--left</span>
```

### Text Styles
Classes:
* `typography--strong`
* `typography--emphasis`
* `typography--underline`
* `typography--blockquote`
* `typography--link`
* `typography--align-left`
* `typography--align-center`
* `typography--align-right`


Example:
```html
<strong class="typography--strong">strong text</strong>

<em class="typography--emphasis">emphasis</em>

<span class="typography--underline">underline</span> and block quote:</p>

<blockquote class="typography--blockquote">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</blockquote>

<a href="#" class="typography--link">link</a>
```

### Headings
Classes:
* `heading--1`
* `heading--2`
* `heading--3`
* `heading--4`
* `heading--5`
* `heading--6`

Example:
```html
<h1 class="heading--1">heading--1</h1>
<h2 class="heading--2">heading--2</h1>
<h3 class="heading--3">heading--3</h1>
<h4 class="heading--4">heading--4</h1>
<h5 class="heading--5">heading--5</h1>
<h6 class="heading--6">heading--6</h1>
```

### Colors
Classes:
* `color--color-name` (background color)
* `text--color-name` (text color)

All colors from [Google Material Design color palette](https://www.google.com/design/spec/style/color.html#color-color-palette) are available.

Color names are created in the following pattern: `color-shade`. Google's Red 900 is `red-900` so if you want to set background color to it you should use `.color--red-900`.

Example:
```html
<span class="color--red text--white">white on red</span>

<span class="color--white text--black">black on white</span>

<span class="color--orange-600 text--white">white on orange 600</span>

<span class="color--white text--blue-a700">blue accent 700 on white</span>
```
You can use this classes on basically every element.

### Media Queries
Classes:
* `hide--s`
  * `hide--s--down`
* `hide--m`
  * `hide--m--up`
  * `hide--m--down`
* `hide--l--up`
  * `hide--l--up`
  * `hide--l--down`
* `hide--xl`
  * `hide--xl--up`

Example:
```html
<div class="hide--s">hide--s</div>

<div class="hide--m--down">hide--m--down</div>

<div class="hide--m--up">hide--m--up</div>

<div class="hide--l--down">hide--l--down</div>

<div class="hide--l">hide--l</div>
```
*hide* classes can be confusing. For example `hide--m--up` doesn't mean *hide above medium* but *hide on medium and above*.
If you watch behavior of `hide--m--up` and `hide--m--down` while resizing browser window, you will see that `hide--m--down` triggers at the top breakpoint and `hide--m--up` at the bottom one. Thus on the the m-sized screen both of them will be hidden.

There are no *show* classes.

### Ripple
Classes:
* `ripple`

Example:
```html
<button class="button ripple">Ripple!</button>
```

`.ripple` is universal class which theoretically works with all elements with :active pseudo-class. However it's not even remotely as good as other implementations using JS. It should work fine on buttons and menu items but be careful when using it on other elements.

### SASS Variables
If you are using SASS you can adjust many aspects of library using variables.


## Special Thanks
Special thanks to [Nilorea](https://www.facebook.com/niloreaart) for huge help with English translation.
