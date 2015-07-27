'use strict';

// MODULES //

var gammainc = require( 'compute-gammainc' );


// FUNCTIONS //

var floor = Math.floor;


// CDF //

/**
* FUNCTION: cdf( x, lambda )
*	Evaluates the cumulative distribution function (CDF) for a Poisson distribution with mean parameter `lambda` at a value `x`.
*
* @param {Number} x - input value
* @param {Number} lambda - mean parameter
* @returns {Number} evaluated CDF
*/
function cdf( x, lambda ) {
	if ( x < 0 ) {
		return 0;
	}
	return gammainc( lambda, floor( x ) + 1, {
		'tail': 'upper',
		'regularized': true
	});
} // end FUNCTION cdf()


// EXPORTS //

module.exports = cdf;
