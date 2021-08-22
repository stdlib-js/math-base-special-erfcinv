<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# erfcinv

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> [Inverse complementary error function][erfcinv].

<section class="intro">

The [inverse complementary error function][erfcinv] is defined as

<!-- <equation class="equation" label="eq:inverse_complementary_error_function" align="center" raw="\operatorname{erfc}^{-1}(1-z) = \operatorname{erf}^{-1}(z)" alt="Inverse complementary error function."> -->

<div class="equation" align="center" data-raw-text="\operatorname{erfc}^{-1}(1-z) = \operatorname{erf}^{-1}(z)" data-equation="eq:inverse_complementary_error_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/erfcinv/docs/img/equation_inverse_complementary_error_function.svg" alt="Inverse complementary error function.">
    <br>
</div>

<!-- </equation> -->

where `erf^{-1}(z)` is the [inverse error function][@stdlib/math/base/special/erfinv].

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-erfcinv
```

</section>

<section class="usage">

## Usage

```javascript
var erfcinv = require( '@stdlib/math-base-special-erfcinv' );
```

#### erfcinv( x )

Evaluates the [inverse complementary error function][erfcinv].

```javascript
var y = erfcinv( 0.5 );
// returns ~0.4769

y = erfcinv( 0.8 );
// returns ~0.1791

y = erfcinv( 0.0 );
// returns Infinity

y = erfcinv( 2.0 );
// returns -Infinity
```

The domain of `x` is restricted to `[0,2]`. If `x` is outside this interval, the function returns `NaN`.

```javascript
var y = erfcinv( -3.14 );
// returns NaN
```

If provided `NaN`, the function returns `NaN`.

```javascript
var y = erfcinv( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array-linspace' );
var erfcinv = require( '@stdlib/math-base-special-erfcinv' );

var x = linspace( 0.0, 2.0, 100 );
var y;
var i;

for ( i = 0; i < x.length; i++ ) {
    y = erfcinv( x[ i ] );
    console.log( 'x: %d, erfcinv(x): %d', x[ i ], y );
}
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-erfcinv.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-erfcinv

[test-image]: https://github.com/stdlib-js/math-base-special-erfcinv/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/math-base-special-erfcinv/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-erfcinv/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-erfcinv?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-erfcinv.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-erfcinv/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-erfcinv/main/LICENSE

[erfcinv]: https://en.wikipedia.org/wiki/Error_function#Inverse_functions

[@stdlib/math/base/special/erfinv]: https://github.com/stdlib-js/math-base-special-erfinv

</section>

<!-- /.links -->
