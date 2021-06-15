/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var randu = require( '@stdlib/random-iter-randu' );
var beta = require( '@stdlib/math-base-special-beta' );
var linspace = require( '@stdlib/iter-linspace' );
var iterBeta = require( './../lib' );


// FUNCTIONS //

function createIterator( arr ) {
	var len;
	var it;
	var i;

	len = arr.length;
	i = -1;

	it = {};
	it.next = next;

	return it;

	function next() {
		var out;
		i += 1;
		if ( i < len ) {
			out = {};
			out.value = arr[ i ];
			out.done = ( i === len-1 );
			return out;
		}
		return {
			'done': true
		};
	}
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof iterBeta, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not an iterator protocol-compliant object or number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterBeta( value, randu() );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not an iterator protocol-compliant object or number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterBeta( randu(), value );
		};
	}
});

tape( 'the function returns an iterator protocol-compliant object (iterator, iterator)', function test( t ) {
	var it;
	var r;
	var i;

	it = iterBeta( randu(), randu() );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < 100; i++ ) {
		r = it.next();
		t.equal( typeof r.value, 'number', 'returns a number' );
		t.equal( typeof r.done, 'boolean', 'returns a boolean' );
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object (iterator, scalar)', function test( t ) {
	var it;
	var r;
	var i;

	it = iterBeta( randu(), 2.0 );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < 100; i++ ) {
		r = it.next();
		t.equal( typeof r.value, 'number', 'returns a number' );
		t.equal( typeof r.done, 'boolean', 'returns a boolean' );
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object (scalar, iterator)', function test( t ) {
	var it;
	var r;
	var i;

	it = iterBeta( 2.0, randu() );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < 100; i++ ) {
		r = it.next();
		t.equal( typeof r.value, 'number', 'returns a number' );
		t.equal( typeof r.done, 'boolean', 'returns a boolean' );
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object (scalar, scalar)', function test( t ) {
	var it;
	var r;
	var i;

	it = iterBeta( 2.0, 2.0 );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < 100; i++ ) {
		r = it.next();
		t.equal( typeof r.value, 'number', 'returns a number' );
		t.equal( typeof r.done, 'boolean', 'returns a boolean' );
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object (value+done; iterator, iterator)', function test( t ) {
	var values;
	var it;
	var r;
	var i;

	values = [ 0.0, 0.5, 1.0 ];
	it = iterBeta( createIterator( values ), randu() );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < values.length; i++ ) {
		r = it.next();
		t.equal( typeof r.value, 'number', 'returns a number' );
		t.equal( typeof r.done, 'boolean', 'returns a boolean' );
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object (value+done; iterator, scalar)', function test( t ) {
	var values;
	var it;
	var r;
	var i;

	values = [ 0.0, 0.5, 1.0 ];
	it = iterBeta( createIterator( values ), 2.0 );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < values.length; i++ ) {
		r = it.next();
		t.equal( typeof r.value, 'number', 'returns a number' );
		t.equal( typeof r.done, 'boolean', 'returns a boolean' );
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object (value+done; scalar, iterator)', function test( t ) {
	var values;
	var it;
	var r;
	var i;

	values = [ 0.0, 0.5, 1.0 ];
	it = iterBeta( 2.0, createIterator( values ) );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < values.length; i++ ) {
		r = it.next();
		t.equal( typeof r.value, 'number', 'returns a number' );
		t.equal( typeof r.done, 'boolean', 'returns a boolean' );
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which evaluates the beta function for each iterated value (iterator, iterator)', function test( t ) {
	var expected;
	var it;
	var N;
	var x;
	var y;
	var r;
	var i;

	N = 101;
	it = iterBeta( linspace( 0.1, 2.0, N ), linspace( 0.1, 2.0, N ) );
	t.equal( it.next.length, 0, 'has zero arity' );

	y = linspace( 0.1, 2.0, N );
	x = linspace( 0.1, 2.0, N );
	for ( i = 0; i < N; i++ ) {
		r = it.next();
		expected = beta( x.next().value, y.next().value );
		t.equal( r.value, expected, 'returns expected value' );
		t.equal( typeof r.done, 'boolean', 'returns a boolean' );
	}
	r = it.next();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which evaluates the beta function for each iterated value (iterator, scalar)', function test( t ) {
	var expected;
	var it;
	var N;
	var x;
	var r;
	var i;

	N = 101;
	it = iterBeta( linspace( 0.1, 2.0, N ), 2.0 );
	t.equal( it.next.length, 0, 'has zero arity' );

	x = linspace( 0.1, 2.0, N );
	for ( i = 0; i < N; i++ ) {
		r = it.next();
		expected = beta( x.next().value, 2.0 );
		t.equal( r.value, expected, 'returns expected value' );
		t.equal( typeof r.done, 'boolean', 'returns a boolean' );
	}
	r = it.next();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which evaluates the beta function for each iterated value (scalar, iterator)', function test( t ) {
	var expected;
	var it;
	var N;
	var y;
	var r;
	var i;

	N = 101;
	it = iterBeta( 2.0, linspace( 0.1, 2.0, N ) );
	t.equal( it.next.length, 0, 'has zero arity' );

	y = linspace( 0.1, 2.0, N );
	for ( i = 0; i < N; i++ ) {
		r = it.next();
		expected = beta( 2.0, y.next().value );
		t.equal( r.value, expected, 'returns expected value' );
		t.equal( typeof r.done, 'boolean', 'returns a boolean' );
	}
	r = it.next();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which evaluates the beta function for each iterated value (scalar, scalar)', function test( t ) {
	var expected;
	var actual;
	var it;
	var i;

	it = iterBeta( 2.0, 2.0 );
	t.equal( it.next.length, 0, 'has zero arity' );

	expected = {
		'value': beta( 2.0, 2.0 ),
		'done': false
	};
	for ( i = 0; i < 100; i++ ) {
		actual = it.next();
		t.deepEqual( actual, expected, 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which evaluates the beta function for each iterated value (value+done; iterator, iterator)', function test( t ) {
	var expected;
	var actual;
	var it;
	var x;
	var y;
	var i;

	x = [ 1.0, 0.5, 0.1, 0.5 ];
	y = [ 1.0, 1.5, 0.1, 2.5 ];
	expected = [
		{
			'value': beta( x[ 0 ], y[ 0 ] ),
			'done': false
		},
		{
			'value': beta( x[ 1 ], y[ 1 ] ),
			'done': false
		},
		{
			'value': beta( x[ 2 ], y[ 2 ] ),
			'done': false
		},
		{
			'value': beta( x[ 3 ], y[ 3 ] ),
			'done': false
		},
		{
			'done': true
		}
	];

	it = iterBeta( createIterator( x ), createIterator( y ) );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		actual = it.next();
		t.deepEqual( actual, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which evaluates the beta function for each iterated value (value+done; iterator, scalar)', function test( t ) {
	var expected;
	var actual;
	var it;
	var x;
	var i;

	x = [ 1.0, 1.5, 0.1, 0.5 ];
	expected = [
		{
			'value': beta( x[ 0 ], 2.0 ),
			'done': false
		},
		{
			'value': beta( x[ 1 ], 2.0 ),
			'done': false
		},
		{
			'value': beta( x[ 2 ], 2.0 ),
			'done': false
		},
		{
			'value': beta( x[ 3 ], 2.0 ),
			'done': false
		},
		{
			'done': true
		}
	];

	it = iterBeta( createIterator( x ), 2.0 );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		actual = it.next();
		t.deepEqual( actual, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which evaluates the beta function for each iterated value (value+done; scalar, iterator)', function test( t ) {
	var expected;
	var actual;
	var it;
	var y;
	var i;

	y = [ 1.0, 0.5, 0.1, 1.5 ];
	expected = [
		{
			'value': beta( 2.0, y[ 0 ] ),
			'done': false
		},
		{
			'value': beta( 2.0, y[ 1 ] ),
			'done': false
		},
		{
			'value': beta( 2.0, y[ 2 ] ),
			'done': false
		},
		{
			'value': beta( 2.0, y[ 3 ] ),
			'done': false
		},
		{
			'done': true
		}
	];

	it = iterBeta( 2.0, createIterator( y ) );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		actual = it.next();
		t.deepEqual( actual, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which evaluates the beta function for each iterated value (value+done; scalar, scalar)', function test( t ) {
	var expected;
	var actual;
	var it;
	var i;

	it = iterBeta( 2.0, 2.0 );
	t.equal( it.next.length, 0, 'has zero arity' );

	expected = {
		'value': beta( 2.0, 2.0 ),
		'done': false
	};
	for ( i = 0; i < 100; i++ ) {
		actual = it.next();
		t.deepEqual( actual, expected, 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which returns `NaN` if provided a non-numeric value (value+done)', function test( t ) {
	var expected;
	var values;
	var actual;
	var it;
	var r;
	var i;

	values = [ 'abc', null, true, false, [], {} ];
	expected = [
		{
			'value': NaN,
			'done': false
		},
		{
			'value': NaN,
			'done': false
		},
		{
			'value': NaN,
			'done': false
		},
		{
			'value': NaN,
			'done': false
		},
		{
			'value': NaN,
			'done': false
		},
		{
			'value': NaN,
			'done': false
		},
		{
			'done': true
		}
	];

	it = iterBeta( createIterator( values ), randu() );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		actual = it.next();
		r = expected[ i ].value;
		if ( r === r ) {
			t.equal( actual.value, r, 'returns expected value' );
		} else {
			t.notEqual( actual.value, actual.value, 'returns expected value' );
		}
		t.equal( actual.done, expected[ i ].done, 'returns a boolean' );
	}
	t.end();
});

tape( 'the returned iterator has a `return` method for closing an iterator (no argument)', function test( t ) {
	var it;
	var r;

	it = iterBeta( randu(), randu() );

	r = it.next();
	t.equal( typeof r.value, 'number', 'returns a number' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.next();
	t.equal( typeof r.value, 'number', 'returns a number' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.return();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	r = it.next();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	t.end();
});

tape( 'the returned iterator has a `return` method for closing an iterator (argument)', function test( t ) {
	var it;
	var r;

	it = iterBeta( randu(), randu() );

	r = it.next();
	t.equal( typeof r.value, 'number', 'returns a number' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.next();
	t.equal( typeof r.value, 'number', 'returns a number' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.return( 'finished' );
	t.equal( r.value, 'finished', 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	r = it.next();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	t.end();
});
