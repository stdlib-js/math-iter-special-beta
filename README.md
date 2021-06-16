<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# iterBeta

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Create an [iterator][mdn-iterator-protocol] which iteratively evaluates the [beta function][@stdlib/math/base/special/beta].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-iter-special-beta
```

</section>

<section class="usage">

## Usage

```javascript
var iterBeta = require( '@stdlib/math-iter-special-beta' );
```

#### iterBeta( x, y )

Returns an [iterator][mdn-iterator-protocol] which iteratively evaluates the [beta function][@stdlib/math/base/special/beta].

```javascript
var array2iterator = require( '@stdlib/array-to-iterator' );

var x = array2iterator( [ 1.0, 5.0, 4.0 ] );
var y = array2iterator( [ 1.0, 0.2, 1.0 ] );

var it = iterBeta( x, y );
// returns <Object>

var r = it.next().value;
// returns 1.0

r = it.next().value;
// returns ~3.382

r = it.next().value;
// returns 0.25

// ...
```

The returned [iterator][mdn-iterator-protocol] protocol-compliant object has the following properties:

-   **next**: function which returns an [iterator][mdn-iterator-protocol] protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the iterator is finished.
-   **return**: function which closes an [iterator][mdn-iterator-protocol] and returns a single (optional) argument in an [iterator][mdn-iterator-protocol] protocol-compliant object.

If provided a numeric value as an [`iterator`][mdn-iterator-protocol] argument, the value is broadcast as an **infinite** [iterator][mdn-iterator-protocol] which **always** returns the provided value.

```javascript
var array2iterator = require( '@stdlib/array-to-iterator' );

var x = array2iterator( [ 1.0, 5.0 ] );

var it = iterBeta( x, 2.0 );
// returns <Object>

var v = it.next().value;
// returns 0.5

v = it.next().value;
// returns ~0.0333

var bool = it.next().done;
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an iterated value is non-numeric (including `NaN`), the returned [iterator][mdn-iterator-protocol] returns `NaN`. If non-numeric iterated values are possible, you are advised to provide an [`iterator`][mdn-iterator-protocol] which type checks and handles non-numeric values accordingly.
-   The length of the returned [iterator][mdn-iterator-protocol] is equal to the length of the shortest provided [iterator][mdn-iterator-protocol]. In other words, the returned [iterator][mdn-iterator-protocol] ends once **one** of the provided [iterators][mdn-iterator-protocol] ends.
-   If an environment supports `Symbol.iterator` **and** a provided [iterator][mdn-iterator-protocol] is iterable, the returned [iterator][mdn-iterator-protocol] is iterable.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random-iter-uniform' );
var iterBeta = require( '@stdlib/math-iter-special-beta' );

// Create seeded iterators for generating pseudorandom numbers:
var x = uniform( 0.0, 2.0, {
    'seed': 1234,
    'iter': 10
});

var y = uniform( 0.0, 2.0, {
    'seed': 4567,
    'iter': 10
});

// Create an iterator which consumes the pseudorandom number iterators:
var it = iterBeta( x, y );

// Perform manual iteration...
var r;
while ( true ) {
    r = it.next();
    if ( r.done ) {
        break;
    }
    console.log( r.value );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-iter-special-beta.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-iter-special-beta

[test-image]: https://github.com/stdlib-js/math-iter-special-beta/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/math-iter-special-beta/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-iter-special-beta/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-iter-special-beta?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-iter-special-beta
[dependencies-url]: https://david-dm.org/stdlib-js/math-iter-special-beta/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-iter-special-beta/main/LICENSE

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

[@stdlib/math/base/special/beta]: https://github.com/stdlib-js/math-base-special-beta

</section>

<!-- /.links -->