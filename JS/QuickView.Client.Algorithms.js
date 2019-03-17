(function() {
	'use strict';
	var $asm = {};
	global.QuickView = global.QuickView || {};
	global.QuickView.Client = global.QuickView.Client || {};
	global.QuickView.Client.Algorithms = global.QuickView.Client.Algorithms || {};
	global.QuickView.Client.Algorithms.Charts = global.QuickView.Client.Algorithms.Charts || {};
	global.QuickView.Client.Algorithms.Colors = global.QuickView.Client.Algorithms.Colors || {};
	global.QuickView.Client.Algorithms.Stats = global.QuickView.Client.Algorithms.Stats || {};
	ss.initAssembly($asm, 'QuickView.Client.Algorithms');
	////////////////////////////////////////////////////////////////////////////////
	// ExtensionMethods
	var $$ExtensionMethods = function() {
	};
	$$ExtensionMethods.__typeName = '$ExtensionMethods';
	$$ExtensionMethods.$copy = function(T) {
		return function(sourceArray, destinationArray, length) {
			for (var k = 0; k < length; k++) {
				destinationArray[k] = sourceArray[k];
			}
		};
	};
	$$ExtensionMethods.$clone = function(T) {
		return function(array) {
			if (ss.isNullOrUndefined(array)) {
				return null;
			}
			else {
				var c0 = ss.arrayLength(array, 0);
				var c1 = ss.arrayLength(array, 1);
				var result = ss.multidimArray(ss.getDefaultValue(T), c0, c1);
				for (var k = 0; k < c0; k++) {
					for (var p = 0; p < c1; p++) {
						ss.arraySet(result, k, p, ss.arrayGet(array, k, p));
					}
				}
				return result;
			}
		};
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Algorithms.Charts.AggregationAlgorithm.ItemData
	var $QuickView_$Client_Algorithms_Charts_AggregationAlgorithm$ItemData = function() {
	};
	$QuickView_$Client_Algorithms_Charts_AggregationAlgorithm$ItemData.__typeName = 'QuickView.$Client.Algorithms.Charts.AggregationAlgorithm$ItemData';
	$QuickView_$Client_Algorithms_Charts_AggregationAlgorithm$ItemData.$ctor = function(timeSeriesID, dataPoints) {
		var $this = {};
		$this.timeSeriesID = null;
		$this.dataPoints = null;
		$this.index = 0;
		$this.timeSeriesID = timeSeriesID;
		$this.dataPoints = dataPoints;
		return $this;
	};
	$QuickView_$Client_Algorithms_Charts_AggregationAlgorithm$ItemData.isInstanceOfType = function() {
		return true;
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Algorithms.Charts.QRReturnsAlgorithm.CalculationMethod
	var $QuickView_$Client_Algorithms_Charts_QRReturnsAlgorithm$CalculationMethod = function() {
	};
	$QuickView_$Client_Algorithms_Charts_QRReturnsAlgorithm$CalculationMethod.__typeName = 'QuickView.$Client.Algorithms.Charts.QRReturnsAlgorithm$CalculationMethod';
    ////////////////////////////////////////////////////////////////////////////////
    // QuickView.Client.Algorithms.Charts.QRPositionsAlgorithm.CalculationMethod
	var $QuickView_$Client_Algorithms_Charts_QRPositionsAlgorithm$CalculationMethod = function () {
	};
	$QuickView_$Client_Algorithms_Charts_QRPositionsAlgorithm$CalculationMethod.__typeName = 'QuickView.$Client.Algorithms.Charts.QRPositionsAlgorithm$CalculationMethod';
    ////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Algorithms.Colors.ColorInterpolation.RgbColorInterpolator
	var $QuickView_$Client_Algorithms_Colors_ColorInterpolation$RgbColorInterpolator = function() {
	};
	$QuickView_$Client_Algorithms_Colors_ColorInterpolation$RgbColorInterpolator.__typeName = 'QuickView.$Client.Algorithms.Colors.ColorInterpolation$RgbColorInterpolator';
	$QuickView_$Client_Algorithms_Colors_ColorInterpolation$RgbColorInterpolator.$interpolate = function(min, max, value, spectrumType) {
		if (ss.isNullOrUndefined(value)) {
			return $QuickView_$Client_Algorithms_Colors_ColorInterpolation$RgbColorInterpolator.$null;
		}
		if (min > max) {
			throw new ss.ArgumentException('The minimum value must be smaller than or equal to the maximum one.');
		}
		var colorIndex;
		if (min === max) {
			// Take the medium color
			colorIndex = 255;
		}
		else {
			var ratio;
			if (ss.Nullable$1.lt(value, min)) {
				// Handle -INF; otherwise, the multiplication becomes incorrect
				ratio = 0;
			}
			else if (ss.Nullable$1.gt(value, max)) {
				// Handle INF; otherwise, the multiplication becomes incorrect
				ratio = 1;
			}
			else {
				ratio = (ss.unbox(value) - min) / (max - min);
			}
			colorIndex = ss.Int32.trunc(0.5 + 510 * ratio);
		}
		var darkColorType = 70 <= colorIndex && colorIndex <= 440;
		var foreground = (darkColorType ? $QuickView_$Client_Algorithms_Colors_ColorInterpolation$RgbColorInterpolator.$blackColor : $QuickView_$Client_Algorithms_Colors_ColorInterpolation$RgbColorInterpolator.$whiteColor);
		var foregroundType = (darkColorType ? 1 : 0);
		var background = $QuickView_$Client_Algorithms_Colors_ColorInterpolation$RgbColorInterpolator.$fillColor(colorIndex, spectrumType);
		return $QuickView_Client_Algorithms_Colors_RgbColorPair.$ctor(foreground, foregroundType, background);
	};
	$QuickView_$Client_Algorithms_Colors_ColorInterpolation$RgbColorInterpolator.$fillColor = function(index, spectrumType) {
		if (index > 510) {
			index = 510;
		}
		else if (index < 0) {
			index = 0;
		}
		var red = ((index >= 255) ? (index - 255) : 0);
		var blue = ((index <= 255) ? (255 - index) : 0);
		var green = ((spectrumType === 1) ? 0 : ((index <= 255) ? index : (510 - index)));
		var whiteness = 255 - Math.max(red, Math.max(green, blue));
		if (red !== 0) {
			red += whiteness;
		}
		if (blue !== 0) {
			blue += whiteness;
		}
		if (spectrumType === 1) {
			green = whiteness;
		}
		else if (green !== 0) {
			green += whiteness;
		}
		return $QuickView_Client_Algorithms_Colors_RgbColor.$ctor(red, green, blue);
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Algorithms.Stats.StatAlgorithms.AlgLib
	var $QuickView_$Client_Algorithms_Stats_StatAlgorithms$AlgLib = function() {
	};
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$AlgLib.__typeName = 'QuickView.$Client.Algorithms.Stats.StatAlgorithms$AlgLib';
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$AlgLib.$studentTTest1 = function(x, n, mean, bothtails, lefttail, righttail) {
		bothtails.$ = 0;
		lefttail.$ = 0;
		righttail.$ = 0;
		var i = 0;
		var xmean = 0;
		var xvariance = 0;
		var xstddev = 0;
		var v1 = 0;
		var v2 = 0;
		var stat;
		var s = 0;
		bothtails.$ = 0;
		lefttail.$ = 0;
		righttail.$ = 0;
		if (n <= 1) {
			bothtails.$ = 1;
			lefttail.$ = 1;
			righttail.$ = 1;
			return null;
		}
		//
		// Mean
		//
		xmean = 0;
		for (i = 0; i <= n - 1; i++) {
			xmean = xmean + ss.getItem(x, i);
		}
		xmean = xmean / n;
		//
		// Variance (using corrected two-pass algorithm)
		//
		xvariance = 0;
		xstddev = 0;
		if (n !== 1) {
			v1 = 0;
			for (i = 0; i <= n - 1; i++) {
				var $t1 = ss.getItem(x, i) - xmean;
				v1 = v1 + $t1 * $t1;
			}
			v2 = 0;
			for (i = 0; i <= n - 1; i++) {
				v2 = v2 + (ss.getItem(x, i) - xmean);
			}
			v2 = v2 * v2 / n;
			xvariance = (v1 - v2) / (n - 1);
			if (xvariance < 0) {
				xvariance = 0;
			}
			xstddev = Math.sqrt(xvariance);
		}
		if (xstddev === 0) {
			bothtails.$ = 1;
			lefttail.$ = 1;
			righttail.$ = 1;
			return null;
		}
		//
		// Statistic
		//
		stat = (xmean - mean) / (xstddev / Math.sqrt(n));
		s = $QuickView_$Client_Algorithms_Stats_StatAlgorithms$AlgLib.$studentTDistribution(n - 1, stat);
		bothtails.$ = 2 * Math.min(s, 1 - s);
		lefttail.$ = s;
		righttail.$ = 1 - s;
		return stat;
	};
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$AlgLib.$studentTDistribution = function(k, t) {
		var result = 0;
		var x = 0;
		var rk = 0;
		var z = 0;
		var f = 0;
		var tz = 0;
		var p = 0;
		var xsqk = 0;
		var j = 0;
		if (t === 0) {
			result = 0.5;
			return result;
		}
		if (t < -2) {
			rk = k;
			z = rk / (rk + t * t);
			result = 0.5 * $QuickView_$Client_Algorithms_Stats_StatAlgorithms$AlgLib.$incompleteBeta(0.5 * rk, 0.5, z);
			return result;
		}
		if (t < 0) {
			x = -t;
		}
		else {
			x = t;
		}
		rk = k;
		z = 1 + x * x / rk;
		if (k % 2 !== 0) {
			xsqk = x / Math.sqrt(rk);
			p = Math.atan(xsqk);
			if (k > 1) {
				f = 1;
				tz = 1;
				j = 3;
				while (!!(j <= k - 2 & tz / f > 5E-16)) {
					tz = tz * ((j - 1) / (z * j));
					f = f + tz;
					j = j + 2;
				}
				p = p + f * xsqk / z;
			}
			p = p * 2 / Math.PI;
		}
		else {
			f = 1;
			tz = 1;
			j = 2;
			while (!!(j <= k - 2 & tz / f > 5E-16)) {
				tz = tz * ((j - 1) / (z * j));
				f = f + tz;
				j = j + 2;
			}
			p = f * x / Math.sqrt(z * rk);
		}
		if (t < 0) {
			p = -p;
		}
		result = 0.5 + 0.5 * p;
		return result;
	};
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$AlgLib.$incompleteBeta = function(a, b, x) {
		var result = 0;
		var t = 0;
		var xc = 0;
		var w = 0;
		var y = 0;
		var flag = 0;
		var sg = { $: 0 };
		var big = 0;
		var biginv = 0;
		var maxgam = 0;
		var minlog = 0;
		var maxlog = 0;
		big = 4.5035996273705E+15;
		biginv = 2.22044604925031E-16;
		maxgam = 171.624376956303;
		minlog = Math.log(1E-300);
		maxlog = Math.log(1E+300);
		if (x === 0) {
			result = 0;
			return result;
		}
		if (x === 1) {
			result = 1;
			return result;
		}
		flag = 0;
		if (!!(b * x <= 1 & x <= 0.95)) {
			result = $QuickView_$Client_Algorithms_Stats_StatAlgorithms$AlgLib.$incompleteBetaPs(a, b, x, maxgam);
			return result;
		}
		w = 1 - x;
		if (x > a / (a + b)) {
			flag = 1;
			t = a;
			a = b;
			b = t;
			xc = x;
			x = w;
		}
		else {
			xc = w;
		}
		if (!!(!!(flag === 1 & b * x <= 1) & x <= 0.95)) {
			t = $QuickView_$Client_Algorithms_Stats_StatAlgorithms$AlgLib.$incompleteBetaPs(a, b, x, maxgam);
			if (t <= 5E-16) {
				result = 0.999999999999999;
			}
			else {
				result = 1 - t;
			}
			return result;
		}
		y = x * (a + b - 2) - (a - 1);
		if (y < 0) {
			w = $QuickView_$Client_Algorithms_Stats_StatAlgorithms$AlgLib.$incompleteBetaFe(a, b, x, big, biginv);
		}
		else {
			w = $QuickView_$Client_Algorithms_Stats_StatAlgorithms$AlgLib.$incompleteBetaFe2(a, b, x, big, biginv) / xc;
		}
		y = a * Math.log(x);
		t = b * Math.log(xc);
		if (!!(!!(a + b < maxgam & Math.abs(y) < maxlog) & Math.abs(t) < maxlog)) {
			t = Math.pow(xc, b);
			t = t * Math.pow(x, a);
			t = t / a;
			t = t * w;
			t = t * ($QuickView_$Client_Algorithms_Stats_StatAlgorithms$AlgLib.$gammaFunction(a + b) / ($QuickView_$Client_Algorithms_Stats_StatAlgorithms$AlgLib.$gammaFunction(a) * $QuickView_$Client_Algorithms_Stats_StatAlgorithms$AlgLib.$gammaFunction(b)));
			if (flag === 1) {
				if (t <= 5E-16) {
					result = 0.999999999999999;
				}
				else {
					result = 1 - t;
				}
			}
			else {
				result = t;
			}
			return result;
		}
		y = y + t + $QuickView_$Client_Algorithms_Stats_StatAlgorithms$AlgLib.$lnGamma(a + b, sg) - $QuickView_$Client_Algorithms_Stats_StatAlgorithms$AlgLib.$lnGamma(a, sg) - $QuickView_$Client_Algorithms_Stats_StatAlgorithms$AlgLib.$lnGamma(b, sg);
		y = y + Math.log(w / a);
		if (y < minlog) {
			t = 0;
		}
		else {
			t = Math.exp(y);
		}
		if (flag === 1) {
			if (t <= 5E-16) {
				t = 0.999999999999999;
			}
			else {
				t = 1 - t;
			}
		}
		result = t;
		return result;
	};
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$AlgLib.$gammaFunction = function(x) {
		var result = 0;
		var p = 0;
		var pp = 0;
		var q = 0;
		var qq = 0;
		var z = 0;
		var i = 0;
		var sgngam = 0;
		sgngam = 1;
		q = Math.abs(x);
		if (q > 33) {
			if (x < 0) {
				p = ss.Int32.trunc(Math.floor(q));
				i = ss.Int32.trunc(ss.round(p));
				if (i % 2 === 0) {
					sgngam = -1;
				}
				z = q - p;
				if (z > 0.5) {
					p = p + 1;
					z = q - p;
				}
				z = q * Math.sin(Math.PI * z);
				z = Math.abs(z);
				z = Math.PI / (z * $QuickView_$Client_Algorithms_Stats_StatAlgorithms$AlgLib.$gammaStirF(q));
			}
			else {
				z = $QuickView_$Client_Algorithms_Stats_StatAlgorithms$AlgLib.$gammaStirF(x);
			}
			result = sgngam * z;
			return result;
		}
		z = 1;
		while (x >= 3) {
			x = x - 1;
			z = z * x;
		}
		while (x < 0) {
			if (x > -1E-09) {
				result = z / ((1 + 0.577215664901533 * x) * x);
				return result;
			}
			z = z / x;
			x = x + 1;
		}
		while (x < 2) {
			if (x < 1E-09) {
				result = z / ((1 + 0.577215664901533 * x) * x);
				return result;
			}
			z = z / x;
			x = x + 1;
		}
		if (x === 2) {
			result = z;
			return result;
		}
		x = x - 2;
		pp = 0.000160119522476752;
		pp = 0.00119135147006586 + x * pp;
		pp = 0.0104213797561762 + x * pp;
		pp = 0.0476367800457137 + x * pp;
		pp = 0.207448227648436 + x * pp;
		pp = 0.494214826801497 + x * pp;
		pp = 1 + x * pp;
		qq = -2.3158187332412E-05;
		qq = 0.000539605580493303 + x * qq;
		qq = -0.00445641913851797 + x * qq;
		qq = 0.011813978522206 + x * qq;
		qq = 0.0358236398605499 + x * qq;
		qq = -0.234591795718243 + x * qq;
		qq = 0.0714304917030273 + x * qq;
		qq = 1 + x * qq;
		result = z * pp / qq;
		return result;
	};
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$AlgLib.$incompleteBetaFe = function(a, b, x, big, biginv) {
		var result = 0;
		var xk = 0;
		var pk = 0;
		var pkm1 = 0;
		var pkm2 = 0;
		var qk = 0;
		var qkm1 = 0;
		var qkm2 = 0;
		var k1 = 0;
		var k2 = 0;
		var k3 = 0;
		var k4 = 0;
		var k5 = 0;
		var k6 = 0;
		var k7 = 0;
		var k8 = 0;
		var r = 0;
		var t = 0;
		var ans = 0;
		var thresh = 0;
		var n = 0;
		k1 = a;
		k2 = a + b;
		k3 = a;
		k4 = a + 1;
		k5 = 1;
		k6 = b - 1;
		k7 = k4;
		k8 = a + 2;
		pkm2 = 0;
		qkm2 = 1;
		pkm1 = 1;
		qkm1 = 1;
		ans = 1;
		r = 1;
		n = 0;
		thresh = 1.5E-15;
		do {
			xk = -(x * k1 * k2 / (k3 * k4));
			pk = pkm1 + pkm2 * xk;
			qk = qkm1 + qkm2 * xk;
			pkm2 = pkm1;
			pkm1 = pk;
			qkm2 = qkm1;
			qkm1 = qk;
			xk = x * k5 * k6 / (k7 * k8);
			pk = pkm1 + pkm2 * xk;
			qk = qkm1 + qkm2 * xk;
			pkm2 = pkm1;
			pkm1 = pk;
			qkm2 = qkm1;
			qkm1 = qk;
			if (qk !== 0) {
				r = pk / qk;
			}
			if (r !== 0) {
				t = Math.abs((ans - r) / r);
				ans = r;
			}
			else {
				t = 1;
			}
			if (t < thresh) {
				break;
			}
			k1 = k1 + 1;
			k2 = k2 + 1;
			k3 = k3 + 2;
			k4 = k4 + 2;
			k5 = k5 + 1;
			k6 = k6 - 1;
			k7 = k7 + 2;
			k8 = k8 + 2;
			if (Math.abs(qk) + Math.abs(pk) > big) {
				pkm2 = pkm2 * biginv;
				pkm1 = pkm1 * biginv;
				qkm2 = qkm2 * biginv;
				qkm1 = qkm1 * biginv;
			}
			if (!!(Math.abs(qk) < biginv | Math.abs(pk) < biginv)) {
				pkm2 = pkm2 * big;
				pkm1 = pkm1 * big;
				qkm2 = qkm2 * big;
				qkm1 = qkm1 * big;
			}
			n = n + 1;
		} while (n !== 300);
		result = ans;
		return result;
	};
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$AlgLib.$incompleteBetaFe2 = function(a, b, x, big, biginv) {
		var result = 0;
		var xk = 0;
		var pk = 0;
		var pkm1 = 0;
		var pkm2 = 0;
		var qk = 0;
		var qkm1 = 0;
		var qkm2 = 0;
		var k1 = 0;
		var k2 = 0;
		var k3 = 0;
		var k4 = 0;
		var k5 = 0;
		var k6 = 0;
		var k7 = 0;
		var k8 = 0;
		var r = 0;
		var t = 0;
		var ans = 0;
		var z = 0;
		var thresh = 0;
		var n = 0;
		k1 = a;
		k2 = b - 1;
		k3 = a;
		k4 = a + 1;
		k5 = 1;
		k6 = a + b;
		k7 = a + 1;
		k8 = a + 2;
		pkm2 = 0;
		qkm2 = 1;
		pkm1 = 1;
		qkm1 = 1;
		z = x / (1 - x);
		ans = 1;
		r = 1;
		n = 0;
		thresh = 1.5E-15;
		do {
			xk = -(z * k1 * k2 / (k3 * k4));
			pk = pkm1 + pkm2 * xk;
			qk = qkm1 + qkm2 * xk;
			pkm2 = pkm1;
			pkm1 = pk;
			qkm2 = qkm1;
			qkm1 = qk;
			xk = z * k5 * k6 / (k7 * k8);
			pk = pkm1 + pkm2 * xk;
			qk = qkm1 + qkm2 * xk;
			pkm2 = pkm1;
			pkm1 = pk;
			qkm2 = qkm1;
			qkm1 = qk;
			if (qk !== 0) {
				r = pk / qk;
			}
			if (r !== 0) {
				t = Math.abs((ans - r) / r);
				ans = r;
			}
			else {
				t = 1;
			}
			if (t < thresh) {
				break;
			}
			k1 = k1 + 1;
			k2 = k2 - 1;
			k3 = k3 + 2;
			k4 = k4 + 2;
			k5 = k5 + 1;
			k6 = k6 + 1;
			k7 = k7 + 2;
			k8 = k8 + 2;
			if (Math.abs(qk) + Math.abs(pk) > big) {
				pkm2 = pkm2 * biginv;
				pkm1 = pkm1 * biginv;
				qkm2 = qkm2 * biginv;
				qkm1 = qkm1 * biginv;
			}
			if (!!(Math.abs(qk) < biginv | Math.abs(pk) < biginv)) {
				pkm2 = pkm2 * big;
				pkm1 = pkm1 * big;
				qkm2 = qkm2 * big;
				qkm1 = qkm1 * big;
			}
			n = n + 1;
		} while (n !== 300);
		result = ans;
		return result;
	};
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$AlgLib.$incompleteBetaPs = function(a, b, x, maxgam) {
		var result = 0;
		var s = 0;
		var t = 0;
		var u = 0;
		var v = 0;
		var n = 0;
		var t1 = 0;
		var z = 0;
		var ai = 0;
		var sg = { $: 0 };
		ai = 1 / a;
		u = (1 - b) * x;
		v = u / (a + 1);
		t1 = v;
		t = u;
		n = 2;
		s = 0;
		z = 5E-16 * ai;
		while (Math.abs(v) > z) {
			u = (n - b) * x / n;
			t = t * u;
			v = t / (a + n);
			s = s + v;
			n = n + 1;
		}
		s = s + t1;
		s = s + ai;
		u = a * Math.log(x);
		if (!!(a + b < maxgam & Math.abs(u) < Math.log(1E+300))) {
			t = $QuickView_$Client_Algorithms_Stats_StatAlgorithms$AlgLib.$gammaFunction(a + b) / ($QuickView_$Client_Algorithms_Stats_StatAlgorithms$AlgLib.$gammaFunction(a) * $QuickView_$Client_Algorithms_Stats_StatAlgorithms$AlgLib.$gammaFunction(b));
			s = s * t * Math.pow(x, a);
		}
		else {
			t = $QuickView_$Client_Algorithms_Stats_StatAlgorithms$AlgLib.$lnGamma(a + b, sg) - $QuickView_$Client_Algorithms_Stats_StatAlgorithms$AlgLib.$lnGamma(a, sg) - $QuickView_$Client_Algorithms_Stats_StatAlgorithms$AlgLib.$lnGamma(b, sg) + u + Math.log(s);
			if (t < Math.log(1E-300)) {
				s = 0;
			}
			else {
				s = Math.exp(t);
			}
		}
		result = s;
		return result;
	};
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$AlgLib.$lnGamma = function(x, sgngam) {
		var result = 0;
		var a = 0;
		var b = 0;
		var c = 0;
		var p = 0;
		var q = 0;
		var u = 0;
		var w = 0;
		var z = 0;
		var i = 0;
		var logpi = 0;
		var ls2pi = 0;
		var tmp = { $: 0 };
		sgngam.$ = 0;
		sgngam.$ = 1;
		logpi = 1.1447298858494;
		ls2pi = 0.918938533204673;
		if (x < -34) {
			q = -x;
			w = $QuickView_$Client_Algorithms_Stats_StatAlgorithms$AlgLib.$lnGamma(q, tmp);
			p = ss.Int32.trunc(Math.floor(q));
			i = ss.Int32.trunc(ss.round(p));
			if (i % 2 === 0) {
				sgngam.$ = -1;
			}
			else {
				sgngam.$ = 1;
			}
			z = q - p;
			if (z > 0.5) {
				p = p + 1;
				z = p - q;
			}
			z = q * Math.sin(Math.PI * z);
			result = logpi - Math.log(z) - w;
			return result;
		}
		if (x < 13) {
			z = 1;
			p = 0;
			u = x;
			while (u >= 3) {
				p = p - 1;
				u = x + p;
				z = z * u;
			}
			while (u < 2) {
				z = z / u;
				p = p + 1;
				u = x + p;
			}
			if (z < 0) {
				sgngam.$ = -1;
				z = -z;
			}
			else {
				sgngam.$ = 1;
			}
			if (u === 2) {
				result = Math.log(z);
				return result;
			}
			p = p - 2;
			x = x + p;
			b = -1378.25152569121;
			b = -38801.6315134638 + x * b;
			b = -331612.992738871 + x * b;
			b = -1162370.97492762 + x * b;
			b = -1721737.0082084 + x * b;
			b = -853555.664245765 + x * b;
			c = 1;
			c = -351.815701436523 + x * c;
			c = -17064.2106651881 + x * c;
			c = -220528.590553854 + x * c;
			c = -1139334.44367983 + x * c;
			c = -2532523.07177583 + x * c;
			c = -2018891.41433533 + x * c;
			p = x * b / c;
			result = Math.log(z) + p;
			return result;
		}
		q = (x - 0.5) * Math.log(x) - x + ls2pi;
		if (x > 100000000) {
			result = q;
			return result;
		}
		p = 1 / (x * x);
		if (x >= 1000) {
			q = q + ((0.000793650793650794 * p - 0.00277777777777778) * p + 0.0833333333333333) / x;
		}
		else {
			a = 0.000811614167470508;
			a = -0.000595061904284301 + p * a;
			a = 0.000793650340457717 + p * a;
			a = -0.002777777777301 + p * a;
			a = 0.0833333333333332 + p * a;
			q = q + a / x;
		}
		result = q;
		return result;
	};
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$AlgLib.$gammaStirF = function(x) {
		var result = 0;
		var y = 0;
		var w = 0;
		var v = 0;
		var stir = 0;
		w = 1 / x;
		stir = 0.000787311395793094;
		stir = -0.000229549961613378 + w * stir;
		stir = -0.00268132617805781 + w * stir;
		stir = 0.00347222221605459 + w * stir;
		stir = 0.0833333333333482 + w * stir;
		w = 1 + w * stir;
		y = Math.exp(x);
		if (x > 143.01608) {
			v = Math.pow(x, 0.5 * x - 0.25);
			y = v * (v / y);
		}
		else {
			y = Math.pow(x, x - 0.5) / y;
		}
		result = 2.506628274631 * y * w;
		return result;
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Algorithms.Stats.StatAlgorithms.AlgLib.LocalMath
	var $QuickView_$Client_Algorithms_Stats_StatAlgorithms$AlgLib$LocalMath = function() {
	};
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$AlgLib$LocalMath.__typeName = 'QuickView.$Client.Algorithms.Stats.StatAlgorithms$AlgLib$LocalMath';
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$AlgLib$LocalMath.$isFinite = function(d) {
		return !isFinite(d) && !$System_$Double2.$isInfinity(d);
	};
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$AlgLib$LocalMath.$getRandomReal = function() {
		$QuickView_$Client_Algorithms_Stats_StatAlgorithms$AlgLib$LocalMath.$rndObject;
		{
			return $QuickView_$Client_Algorithms_Stats_StatAlgorithms$AlgLib$LocalMath.$rndObject.nextDouble();
		}
	};
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$AlgLib$LocalMath.$getRandomInteger = function(maxValue) {
		$QuickView_$Client_Algorithms_Stats_StatAlgorithms$AlgLib$LocalMath.$rndObject;
		{
			return $QuickView_$Client_Algorithms_Stats_StatAlgorithms$AlgLib$LocalMath.$rndObject.nextMax(maxValue);
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Algorithms.Stats.StatAlgorithms.StatMethods
	var $QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods = function() {
	};
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.__typeName = 'QuickView.$Client.Algorithms.Stats.StatAlgorithms$StatMethods';
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$getValuesPerYear = function(resolution) {
		switch (resolution) {
			case 1: {
				return 362880;
			}
			case 2: {
				return 72576;
			}
			case 3: {
				return 36288;
			}
			case 4: {
				return 6048;
			}
			case 5: {
				return 252;
			}
			case 6: {
				return 52;
			}
			case 7: {
				return 12;
			}
			case 8: {
				return 4;
			}
			case 9: {
				return 1;
			}
			default: {
				throw new ss.ArgumentOutOfRangeException('resolution', 'Invalid value.', null, resolution);
			}
		}
	};
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$median = function(values) {
		JS.ArgumentHelper.notNull(values, 'values');
		var count = ss.count(values);
		if (count === 0) {
			return null;
		}
		var list = ss.arrayFromEnumerable(values);
		list.sort();
		if ((count & 1) === 1) {
			// The number of elements is odd so return the middle element
			return list[ss.Int32.div(count, 2)];
		}
		else {
			// The number of elements is even so return the average of the two elements in the middle
			var n1 = list[ss.Int32.div(count, 2) - 1];
			var n2 = list[ss.Int32.div(count, 2)];
			return (n1 + n2) / 2;
		}
	};
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$mean = function(values) {
		JS.ArgumentHelper.notNull(values, 'values');
		if (ss.count(values) === 0) {
			return null;
		}
		var sum = 0;
		var $t1 = ss.getEnumerator(values);
		try {
			while ($t1.moveNext()) {
				var item = $t1.current();
				sum += item;
			}
		}
		finally {
			$t1.dispose();
		}
		return sum / ss.count(values);
	};
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$annualizedMean = function(values, valuesPerYear) {
		// Saltarelle compiler matches the behavior of C# - returns null if one of the values is null
		return ss.Nullable$1.mul($QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$mean(values), valuesPerYear);
	};
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$sampleVariance = function(values) {
		JS.ArgumentHelper.notNull(values, 'values');
		if (ss.count(values) === 0) {
			return null;
		}
		return $QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$sampleVariance$1(values, ss.unbox($QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$mean(values)));
	};
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$sampleVariance$1 = function(values, mean) {
		JS.ArgumentHelper.notNull(values, 'values');
		if (ss.count(values) === 0) {
			return null;
		}
		if (ss.count(values) === 1) {
			return 0;
		}
		return $QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$privateVariance(values, mean, ss.count(values) - 1);
	};
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$populationVariance = function(values) {
		JS.ArgumentHelper.notNull(values, 'values');
		if (ss.count(values) === 0) {
			return null;
		}
		return $QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$populationVariance$1(values, ss.unbox($QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$mean(values)));
	};
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$populationVariance$1 = function(values, mean) {
		JS.ArgumentHelper.notNull(values, 'values');
		if (ss.count(values) === 0) {
			return null;
		}
		return $QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$privateVariance(values, mean, ss.count(values));
	};
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$privateVariance = function(values, mean, divisor) {
		var deviationList = Enumerable.from(values).select(function(x) {
			return Math.pow(x - mean, 2);
		});
		var sum = 0;
		var $t1 = deviationList.getEnumerator();
		try {
			while ($t1.moveNext()) {
				var item = $t1.current();
				sum += item;
			}
		}
		finally {
			$t1.dispose();
		}
		return sum / divisor;
	};
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$sampleCovariance = function(x, y) {
		JS.ArgumentHelper.notNull(x, 'x');
		JS.ArgumentHelper.notNull(y, 'y');
		var count = Math.min(ss.count(x), ss.count(y));
		if (count === 0) {
			return null;
		}
		if (count === 1) {
			return 0;
		}
		return $QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$privateCovariance(x, y, count, count - 1);
	};
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$populationCovariance = function(x, y) {
		JS.ArgumentHelper.notNull(x, 'x');
		JS.ArgumentHelper.notNull(y, 'y');
		var count = Math.min(ss.count(x), ss.count(y));
		if (count === 0) {
			return null;
		}
		return $QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$privateCovariance(x, y, count, count);
	};
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$privateCovariance = function(x, y, count, divisor) {
		var meanX = ss.unbox($QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$mean(x));
		var meanY = ss.unbox($QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$mean(y));
		var sum = 0;
		for (var i = 0; i < count; i++) {
			sum += (ss.getItem(x, i) - meanX) * (ss.getItem(y, i) - meanY);
		}
		return sum / divisor;
	};
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$sampleStDev = function(values) {
		JS.ArgumentHelper.notNull(values, 'values');
		var variance = $QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$sampleVariance(values);
		return (ss.isNullOrUndefined(variance) ? null : Math.sqrt(ss.unbox(variance)));
	};
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$sampleStErr = function(stDev, count) {
		JS.ArgumentHelper.positive(count, 'count');
		return stDev / Math.sqrt(count);
	};
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$cor95CILo = function(correlation, sampleCount) {
		if (Math.abs(correlation) > 1) {
			return null;
		}
		if (sampleCount <= 3) {
			return -1;
		}
		if (correlation === -1) {
			return -1;
		}
		if (correlation === 1) {
			return 1;
		}
		var Z = 0.5 * Math.log((1 + correlation + 2.2250738585072E-308) / (1 - correlation + 2.2250738585072E-308));
		var ZStDev = 1 / Math.sqrt(sampleCount - 3);
		var ZLo = Z - 1.95996398454005 * ZStDev;
		var exp2ZLo = Math.exp(2 * ZLo);
		var corrLo = (exp2ZLo - 1) / (1 + exp2ZLo);
		return corrLo;
	};
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$cor95CIHi = function(correlation, sampleCount) {
		if (Math.abs(correlation) > 1) {
			return null;
		}
		if (sampleCount <= 3) {
			return -1;
		}
		if (correlation === -1) {
			return -1;
		}
		if (correlation === 1) {
			return 1;
		}
		var Z = 0.5 * Math.log((1 + correlation + 2.2250738585072E-308) / (1 - correlation + 2.2250738585072E-308));
		var ZStDev = 1 / Math.sqrt(sampleCount - 3);
		var ZHi = Z + 1.95996398454005 * ZStDev;
		var exp2ZHi = Math.exp(2 * ZHi);
		var corrHi = (exp2ZHi - 1) / (1 + exp2ZHi);
		return corrHi;
	};
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$correlationConfidenceInterval = function(correlationResult) {
		JS.ArgumentHelper.notNull(correlationResult, 'correlationResult');
		return $QuickView_Client_Algorithms_Stats_$ConfidenceIntervalResult.$ctor($QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$cor95CILo(correlationResult.value, correlationResult.sampleCount), $QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$cor95CIHi(correlationResult.value, correlationResult.sampleCount));
	};
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$autocorrelation = function(values, lag) {
		JS.ArgumentHelper.notNull(values, 'values');
		JS.ArgumentHelper.positive(lag, 'lag');
		if (ss.count(values) <= lag) {
			return null;
		}
		var sampleCount = ss.count(values) - lag;
		var x = JS.Collections.CollectionExtensions.getView(Number).call(null, values, 0, sampleCount);
		var y = JS.Collections.CollectionExtensions.getView(Number).call(null, values, lag, sampleCount);
		return $QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$asyncCorrelation(x, y);
	};
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$correlationTStat = function(correlationResult) {
		JS.ArgumentHelper.notNull(correlationResult, 'correlationResult');
		var sampleCount = correlationResult.sampleCount;
		if (sampleCount > 2) {
			var correlation = correlationResult.value;
			if (Math.abs(Math.abs(correlation) - 1) > 0.001) {
				return correlation / Math.sqrt((1 - correlation * correlation) / (sampleCount - 2));
			}
			else {
				return Number.POSITIVE_INFINITY;
			}
		}
		else {
			return null;
		}
	};
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$asyncCorrelation = function(x, y) {
		JS.ArgumentHelper.notNull(x, 'x');
		JS.ArgumentHelper.notNull(y, 'y');
		var sampleCount = Math.min(ss.count(x), ss.count(y));
		if (sampleCount <= 1) {
			return null;
		}
		var sumX = 0, sumY = 0, sumXX = 0, sumXY = 0, sumYY = 0;
		for (var i = 0; i < sampleCount; ++i) {
			sumX += ss.getItem(x, i);
			sumY += ss.getItem(y, i);
			sumXX += ss.getItem(x, i) * ss.getItem(x, i);
			sumYY += ss.getItem(y, i) * ss.getItem(y, i);
			sumXY += ss.getItem(x, i) * ss.getItem(y, i);
		}
		var coVar = (sumXY - sumX * sumY / sampleCount) / sampleCount;
		var varX = (sumXX - sumX * sumX / sampleCount) / sampleCount;
		var varY = (sumYY - sumY * sumY / sampleCount) / sampleCount;
		if (varX === 0 || varY === 0) {
			return $QuickView_Client_Algorithms_Stats_$CorrelationResult.$ctor(0, sampleCount);
		}
		var correlation = coVar / Math.sqrt(varX * varY);
		return $QuickView_Client_Algorithms_Stats_$CorrelationResult.$ctor(correlation, sampleCount);
	};
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$syncCorrelation = function(x, y) {
		JS.ArgumentHelper.notNull(x, 'x');
		JS.ArgumentHelper.notNull(y, 'y');
		var sampleCount = Math.min(ss.count(x), ss.count(y));
		if (sampleCount <= 1) {
			return null;
		}
		var l1Samples = sampleCount - 1;
		var sumX = 0, sumY = 0, sumXX = 0, sumYY = 0, sumXY = 0;
		var l1XsumX = 0, l1XsumY = 0, l1XsumXX = 0, l1XsumYY = 0, l1XsumXY = 0;
		var l1YsumX = 0, l1YsumY = 0, l1YsumXX = 0, l1YsumYY = 0, l1YsumXY = 0;
		sumX += ss.getItem(x, 0);
		sumY += ss.getItem(y, 0);
		sumXX += ss.getItem(x, 0) * ss.getItem(x, 0);
		sumYY += ss.getItem(y, 0) * ss.getItem(y, 0);
		sumXY += ss.getItem(x, 0) * ss.getItem(y, 0);
		for (var i = 1; i < sampleCount; ++i) {
			sumX += ss.getItem(x, i);
			sumY += ss.getItem(y, i);
			sumXX += ss.getItem(x, i) * ss.getItem(x, i);
			sumYY += ss.getItem(y, i) * ss.getItem(y, i);
			sumXY += ss.getItem(x, i) * ss.getItem(y, i);
			l1XsumX += ss.getItem(x, i - 1);
			l1XsumXX += ss.getItem(x, i - 1) * ss.getItem(x, i - 1);
			l1XsumXY += ss.getItem(x, i - 1) * ss.getItem(y, i);
			l1XsumY += ss.getItem(y, i);
			l1XsumYY += ss.getItem(y, i) * ss.getItem(y, i);
			l1YsumX += ss.getItem(x, i);
			l1YsumXX += ss.getItem(x, i) * ss.getItem(x, i);
			l1YsumXY += ss.getItem(x, i) * ss.getItem(y, i - 1);
			l1YsumY += ss.getItem(y, i - 1);
			l1YsumYY += ss.getItem(y, i - 1) * ss.getItem(y, i - 1);
		}
		var coVar = (sumXY - sumX * sumY / sampleCount) / sampleCount;
		var varX = (sumXX - sumX * sumX / sampleCount) / sampleCount;
		var varY = (sumYY - sumY * sumY / sampleCount) / sampleCount;
		if (varX === 0 || varY === 0) {
			return $QuickView_Client_Algorithms_Stats_$CorrelationResult.$ctor(0, sampleCount);
		}
		var corr = coVar / Math.sqrt(varX * varY);
		var rho = 0;
		// max autocorrelation
		var l1XcoVar = (l1XsumXY - l1XsumX * l1XsumY / l1Samples) / l1Samples;
		var l1XvarX = (l1XsumXX - l1XsumX * l1XsumX / l1Samples) / l1Samples;
		var l1XvarY = (l1XsumYY - l1XsumY * l1XsumY / l1Samples) / l1Samples;
		var l1Xcorr = l1XcoVar / Math.sqrt(l1XvarX * l1XvarY);
		if (!isNaN(l1Xcorr) && l1Xcorr * ((corr > 0) ? 1 : ((corr < 0) ? -1 : 0)) >= Math.abs(rho)) {
			rho = l1Xcorr;
		}
		var l1YcoVar = (l1YsumXY - l1YsumX * l1YsumY / l1Samples) / l1Samples;
		var l1YvarX = (l1YsumXX - l1YsumX * l1YsumX / l1Samples) / l1Samples;
		var l1YvarY = (l1YsumYY - l1YsumY * l1YsumY / l1Samples) / l1Samples;
		var l1Ycorr = l1YcoVar / Math.sqrt(l1YvarX * l1YvarY);
		if (!isNaN(l1Ycorr) && l1Ycorr * ((corr > 0) ? 1 : ((corr < 0) ? -1 : 0)) >= Math.abs(rho)) {
			rho = l1Ycorr;
		}
		var syncCorr = $QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$roundToOne(corr + rho);
		var correlation = $QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$forceToRange(-1, 1, syncCorr);
		return $QuickView_Client_Algorithms_Stats_$CorrelationResult.$ctor(correlation, sampleCount);
	};
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$CAGR = function(values, perPerYear) {
		JS.ArgumentHelper.notNull(values, 'values');
		JS.ArgumentHelper.positive(perPerYear, 'perPerYear');
		if (ss.count(values) === 0) {
			return null;
		}
		var mean = ss.unbox($QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$mean(values));
		var lag1Cor = $QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$asyncCorrelation(JS.Collections.CollectionExtensions.getView(Number).call(null, values, 0, ss.count(values) - 1), JS.Collections.CollectionExtensions.getView(Number).call(null, values, 1, ss.count(values) - 1));
		if (ss.isNullOrUndefined(lag1Cor)) {
			return null;
		}
		var syncSDAdjFct = $QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$syncSDAdjFct$1(lag1Cor.value, lag1Cor.sampleCount);
		if (ss.isNullOrUndefined(syncSDAdjFct)) {
			return null;
		}
		// Subtract mean from each of the values, then multiply with syncSDAdjFct, then add back mean
		var processedList = Enumerable.from(values).select(function(x) {
			return (x - mean) * ss.unbox(syncSDAdjFct) + mean;
		}).toArray();
		return $QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$growthRate(processedList, perPerYear);
	};
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$growthRate = function(values, perPerYear) {
		JS.ArgumentHelper.notNull(values, 'values');
		JS.ArgumentHelper.positive(perPerYear, 'perPerYear');
		if (ss.count(values) === 0) {
			return null;
		}
		if (ss.count(values) === 1) {
			return null;
			// The original function returns null
			//return 0;
		}
		var sumLogPlus1 = 0;
		var minNegativeRet = 0;
		var $t1 = ss.getEnumerator(values);
		try {
			while ($t1.moveNext()) {
				var item = $t1.current();
				sumLogPlus1 += Math.log(item + 1);
				if (item < minNegativeRet) {
					minNegativeRet = item;
				}
			}
		}
		finally {
			$t1.dispose();
		}
		if (minNegativeRet <= -1 || sumLogPlus1 < -3.40282346638529E+38) {
			return -1;
		}
		return Math.exp(perPerYear * (sumLogPlus1 / ss.count(values))) - 1;
	};
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$SR = function(values, perPerYear) {
		JS.ArgumentHelper.notNull(values, 'values');
		JS.ArgumentHelper.positive(perPerYear, 'perPerYear');
		var count = ss.count(values);
		if (count === 0) {
			return null;
		}
		if (count === 1) {
			return 0;
		}
		var sum = 0, sumSqr = 0;
		var $t1 = ss.getEnumerator(values);
		try {
			while ($t1.moveNext()) {
				var ret = $t1.current();
				sum += ret;
				sumSqr += ret * ret;
			}
		}
		finally {
			$t1.dispose();
		}
		var numUsedSqrVarProd = count / perPerYear * (count * sumSqr - sum * sum) / (count - 1);
		return sum / Math.sqrt(numUsedSqrVarProd);
	};
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$volatility = function(values, perPerYear) {
		JS.ArgumentHelper.notNull(values, 'values');
		JS.ArgumentHelper.positive(perPerYear, 'perPerYear');
		if (ss.count(values) <= 2) {
			return null;
		}
		return ss.Nullable$1.mul($QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$sampleStDev(values), Math.sqrt(perPerYear));
	};
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$informationRatio = function(returnValues, benchmarkValues, perPerYear) {
		JS.ArgumentHelper.notNull(returnValues, 'returnValues');
		JS.ArgumentHelper.notNull(benchmarkValues, 'benchmarkValues');
		JS.ArgumentHelper.positive(perPerYear, 'perPerYear');
		if (ss.count(returnValues) !== ss.count(benchmarkValues)) {
			throw new ss.ArgumentException('The number of return values must be the same as that of the benchmark values.');
		}
		if (ss.count(returnValues) === 0) {
			return null;
		}
		var differenceList = new Array(ss.count(returnValues));
		var sum = 0;
		for (var k = 0; k < differenceList.length; k++) {
			var value = ss.getItem(returnValues, k) - ss.getItem(benchmarkValues, k);
			differenceList[k] = value;
			sum += value;
		}
		return ss.Nullable$1.mul(ss.Nullable$1.div(sum / differenceList.length, $QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$sampleStDev(differenceList)), Math.sqrt(perPerYear));
	};
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$alphaBeta = function(x, y, rf, perPerYear) {
		JS.ArgumentHelper.notNull(x, 'x');
		JS.ArgumentHelper.notNull(y, 'y');
		if (ss.count(x) !== ss.count(y)) {
			throw new ss.ArgumentException('The lists must have the same number of elements.');
		}
		var count = ss.count(x);
		if (count < 2) {
			return null;
		}
		var ysum = 0, xsum = 0, x2sum = 0, xysum = 0;
		for (var i = 0; i < count; ++i) {
			var xi = ss.getItem(x, i) - rf;
			var yi = ss.getItem(y, i) - rf;
			xsum += xi;
			ysum += yi;
			x2sum += xi * xi;
			xysum += xi * yi;
		}
		var denominator = count * x2sum - xsum * xsum;
		var alpha;
		var beta;
		var r2;
		var tStatAlpha;
		var tStatBeta;
		alpha = (x2sum * ysum - xsum * xysum) / denominator;
		beta = (count * xysum - xsum * ysum) / denominator;
		// compute R2 = 1 - sum_of_squared_erros_estimate / sum_of_squared_erros_mean
		// R2=1-SSEe/SSEm
		var sser = 0, ssem = 0;
		// sum of squared errors for the estimated values and for the mean values
		var diff = new Array(count);
		// array to hold difference between actual and estimated values
		var mean = ss.unbox($QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$mean(y));
		for (var i1 = 0; i1 < count; ++i1) {
			var estimate = alpha + beta * ss.getItem(x, i1);
			// y = alpha + beta * x
			var observed = ss.getItem(y, i1);
			sser += Math.pow(estimate - observed, 2);
			ssem += Math.pow(mean - observed, 2);
			diff[i1] = observed - estimate;
		}
		r2 = 1 - sser / ssem;
		// annualize alpha:
		var annualAlpha = Math.pow(1 + alpha, perPerYear) - 1;
		var annualDiffVolatility = ss.unbox($QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$sampleStDev(diff)) * Math.sqrt(perPerYear);
		if ($QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$areAlmostEqual(annualDiffVolatility, 0)) {
			tStatAlpha = tStatBeta = Number.POSITIVE_INFINITY;
		}
		else {
			tStatAlpha = Math.abs(annualAlpha / annualDiffVolatility);
			tStatBeta = Math.abs(beta / annualDiffVolatility);
		}
		return $QuickView_Client_Algorithms_Stats_$AlphaBetaResult.$ctor(alpha, beta, r2, tStatAlpha, tStatBeta);
	};
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$pfOpt = function(fund1Returns, fund2Returns, perPerYear) {
		JS.ArgumentHelper.notNull(fund1Returns, 'fund1Returns');
		JS.ArgumentHelper.notNull(fund2Returns, 'fund2Returns');
		JS.ArgumentHelper.positive(perPerYear, 'perPerYear');
		if (ss.count(fund1Returns) === 0 || ss.count(fund2Returns) === 0) {
			return null;
		}
		var mean1 = ss.unbox($QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$mean(fund1Returns));
		var mean2 = ss.unbox($QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$mean(fund2Returns));
		// Annualize returns
		//double annualizedRet1 = mean1 * perPerYear;
		//double annualizedRet2 = mean2 * perPerYear;
		var var1 = ss.unbox($QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$sampleVariance(fund1Returns));
		var var2 = ss.unbox($QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$sampleVariance(fund2Returns));
		var covar = ss.unbox($QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$sampleCovariance(fund1Returns, fund2Returns));
		var z = (mean1 - mean2 - 6.8 * (covar - var2)) / (6.8 * (var1 - 2 * covar + var2));
		var x1 = Math.min(Math.max(z, 0), 1);
		var x2 = 1 - x1;
		return { item1: x1, item2: x2 };
	};
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$pfOpt2 = function(fund1Returns, fund2Returns) {
		JS.ArgumentHelper.notNull(fund1Returns, 'fund1Returns');
		JS.ArgumentHelper.notNull(fund2Returns, 'fund2Returns');
		if (ss.count(fund1Returns) === 0 || ss.count(fund2Returns) === 0) {
			return null;
		}
		var var1 = ss.unbox($QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$sampleVariance(fund1Returns));
		var var2 = ss.unbox($QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$sampleVariance(fund2Returns));
		var covar = ss.unbox($QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$sampleCovariance(fund1Returns, fund2Returns));
		var z = (var2 - covar) / (var1 + var2 - 2 * covar);
		var x1 = Math.min(Math.max(z, 0), 1);
		var x2 = 1 - x1;
		return { item1: x1, item2: x2 };
	};
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$meanTTest = function(values) {
		JS.ArgumentHelper.notNull(values, 'values');
		if (ss.count(values) === 0) {
			return null;
		}
		var bothtails = {}, lefttail = {}, righttail = {};
		var tStat = $QuickView_$Client_Algorithms_Stats_StatAlgorithms$AlgLib.$studentTTest1(values, ss.count(values), 0, bothtails, lefttail, righttail);
		if (ss.isNullOrUndefined(tStat)) {
			return null;
		}
		var lastValue = ss.getItem(values, ss.count(values) - 1);
		var pVal = ((lastValue < 0) ? righttail.$ : lefttail.$);
		return $QuickView_Client_Algorithms_Stats_$MeanTTestResult.$ctor(ss.unbox(tStat), pVal, ((lastValue > 0) ? 1 : ((lastValue < 0) ? -1 : 0)));
	};
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$syncSDAdjFct$1 = function(dLag1Cor, nNumUsedCor) {
		var dBayesianPriorLag1CorMean = 0;
		var dBayesianPriorLag1CorStDev = 0.3;
		var dBayesianLag1Cor;
		if (isNaN(dLag1Cor)) {
			dBayesianLag1Cor = dBayesianPriorLag1CorMean;
		}
		if (dBayesianPriorLag1CorStDev > 3.40282346638529E+38) {
			dBayesianLag1Cor = dLag1Cor;
		}
		else if (dBayesianPriorLag1CorStDev <= 0) {
			dBayesianLag1Cor = dBayesianPriorLag1CorMean;
		}
		else if (nNumUsedCor > 3 && !isNaN(dLag1Cor)) {
			var dFAC1 = $QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$fisherZTransform(dLag1Cor);
			if (ss.isNullOrUndefined(dFAC1)) {
				return null;
			}
			var dBayesianPriorZMean = $QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$fisherZTransform(dBayesianPriorLag1CorMean);
			// The prior is typically 0
			if (ss.isNullOrUndefined(dBayesianPriorZMean)) {
				return null;
			}
			var dBayesianPriorZStDev = dBayesianPriorLag1CorStDev;
			// The prior is typically ± 0.3
			var dBF = 1 - (nNumUsedCor - 3) / (nNumUsedCor - 3 + 1 / (dBayesianPriorZStDev * dBayesianPriorZStDev));
			// Basically combine the Z±1/Sqrt(N-3) with the prior
			var dFBAC1 = ss.unbox(dFAC1) + dBF * (ss.unbox(dBayesianPriorZMean) - ss.unbox(dFAC1));
			var dBayesianLag1CorLocal = $QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$fisherInvZTransform(dFBAC1);
			if (ss.isNullOrUndefined(dBayesianLag1CorLocal)) {
				return null;
			}
			dBayesianLag1Cor = ss.unbox(dBayesianLag1CorLocal);
		}
		else {
			dBayesianLag1Cor = dBayesianPriorLag1CorMean;
		}
		if (isNaN(dBayesianLag1Cor)) {
			return null;
		}
		return $QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$syncSDAdjFct(dBayesianLag1Cor);
	};
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$syncSDAdjFct = function(dLag1Cor) {
		if (isNaN(dLag1Cor) || dLag1Cor <= -0.5 || dLag1Cor >= 0.5) {
			return null;
		}
		var dSDAC1Correction = Math.sqrt(1 + 2 * dLag1Cor);
		if (isNaN(dSDAC1Correction)) {
			return null;
		}
		else {
			return dSDAC1Correction;
		}
	};
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$fisherZTransform = function(dC) {
		if (isNaN(dC) || dC <= -1 || dC >= 1) {
			return null;
		}
		var dFisherZTransform = 0.5 * Math.log((1 + dC) / (1 - dC));
		if (isNaN(dFisherZTransform) || dFisherZTransform < -3.40282346638529E+38 || dFisherZTransform > 3.40282346638529E+38) {
			return null;
		}
		else {
			return dFisherZTransform;
		}
	};
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$fisherInvZTransform = function(dZ) {
		if (isNaN(dZ) || dZ < -3.40282346638529E+38 || dZ > 3.40282346638529E+38) {
			return null;
		}
		var dExp2Z = Math.exp(2 * dZ);
		var dFisherInvZTransform = (dExp2Z - 1) / (dExp2Z + 1);
		if (isNaN(dFisherInvZTransform) || dFisherInvZTransform < -1 || dFisherInvZTransform > 1) {
			return null;
		}
		else {
			return dFisherInvZTransform;
		}
	};
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$powerUtilCE = function(values, alpha, perPerYear, CE) {
		JS.ArgumentHelper.notNull(values, 'values');
		JS.ArgumentHelper.positive(perPerYear, 'perPerYear');
		if (ss.count(values) === 0) {
			CE.$ = null;
			return null;
		}
		var utilFunc = new $QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods$CPowerUtilFunc(alpha, perPerYear, 1E-05);
		var utilSum = 0;
		var $t1 = ss.getEnumerator(values);
		try {
			while ($t1.moveNext()) {
				var item = $t1.current();
				utilSum += utilFunc.$util(1 + item);
			}
		}
		finally {
			$t1.dispose();
		}
		if (utilSum === 0) {
			CE.$ = 0;
			return 0;
		}
		else {
			var powerUtil = utilSum / ss.count(values);
			CE.$ = utilFunc.$certaintyEquivalent(powerUtil);
			if (ss.Nullable$1.lt(CE.$, 0)) {
				CE.$ = -1;
			}
			return powerUtil;
		}
	};
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$CE = function(values, riskAversion, perPerYear) {
		JS.ArgumentHelper.notNull(values, 'values');
		JS.ArgumentHelper.positive(perPerYear, 'perPerYear');
		if (ss.count(values) === 0) {
			return null;
		}
		var mean = ss.unbox($QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$mean(values));
		var lag1Cor = $QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$asyncCorrelation(JS.Collections.CollectionExtensions.getView(Number).call(null, values, 0, ss.count(values) - 1), JS.Collections.CollectionExtensions.getView(Number).call(null, values, 1, ss.count(values) - 1));
		if (ss.isNullOrUndefined(lag1Cor)) {
			return null;
		}
		var syncSDAdjFct = $QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$syncSDAdjFct$1(lag1Cor.value, lag1Cor.sampleCount);
		if (ss.isNullOrUndefined(syncSDAdjFct)) {
			return null;
		}
		// Subtract mean from each of the values, then multiply with syncSDAdjFct, then add back mean
		var processedList = Enumerable.from(values).select(function(x) {
			return (x - mean) * ss.unbox(syncSDAdjFct) + mean;
		}).toArray();
		var CE = {};
		$QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$powerUtilCE(processedList, riskAversion, perPerYear, CE);
		return CE.$;
	};
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$workingDayCount = function(start, end) {
		var count = 0;
		var dt = start;
		while (new Date(dt.getFullYear(), dt.getMonth(), dt.getDate()) <= new Date(end.getFullYear(), end.getMonth(), end.getDate())) {
			if (dt.getDay() !== 0 && dt.getDay() !== 6) {
				count++;
			}
			dt = new Date(dt.valueOf() + Math.round(1 * 86400000));
		}
		return count;
	};
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$areAlmostEqual = function(d1, d2) {
		return Math.abs(d1 - d2) < 1E-05;
	};
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$roundToOne = function(d) {
		if ($QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$areAlmostEqual(Math.abs(d), 1)) {
			return ((d < 0) ? -1 : 1);
		}
		else {
			return d;
		}
	};
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$forceToRange = function(range1, range2, val) {
		var min = Math.min(range1, range2);
		var max = Math.max(range1, range2);
		if (val < min) {
			return min;
		}
		else if (val > max) {
			return max;
		}
		else {
			return val;
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Algorithms.Stats.StatAlgorithms.StatMethods.CPowerUtilFunc
	var $QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods$CPowerUtilFunc = function(alpha, perPerYear, zeroWealthThreshold) {
		this.$_alpha = 0;
		this.$_perPerYear = 0;
		this.$_zeroWealthThreshold = 0;
		this.$_threshUtil = 0;
		this.$_coef1 = 0;
		this.$_coef2 = 0;
		this.$_dCoef2 = 0;
		if (alpha <= 0) {
			this.$_alpha = alpha;
		}
		else {
			this.$_alpha = -1;
		}
		if (zeroWealthThreshold > 0 && zeroWealthThreshold < 1) {
			this.$_zeroWealthThreshold = zeroWealthThreshold;
		}
		else {
			this.$_zeroWealthThreshold = 1E-05;
		}
		if (perPerYear > 0) {
			this.$_perPerYear = perPerYear;
		}
		else {
			this.$_perPerYear = 252;
		}
		if (this.$_alpha === 0) {
			this.$_threshUtil = Math.log(this.$_zeroWealthThreshold);
		}
		else {
			this.$_threshUtil = (Math.pow(this.$_zeroWealthThreshold, this.$_alpha) - 1) / this.$_alpha;
		}
		this.$_coef1 = Math.pow(this.$_zeroWealthThreshold, this.$_alpha - 1);
		this.$_coef2 = 0.5 * (this.$_alpha - 1) * Math.pow(this.$_zeroWealthThreshold, this.$_alpha - 2);
		this.$_dCoef2 = (this.$_alpha - 1) * Math.pow(this.$_zeroWealthThreshold, this.$_alpha - 2);
	};
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods$CPowerUtilFunc.__typeName = 'QuickView.$Client.Algorithms.Stats.StatAlgorithms$StatMethods$CPowerUtilFunc';
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Algorithms.Stats.StatAlgorithms.StatMethods.StandardNormalTable
	var $QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods$StandardNormalTable = function() {
	};
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods$StandardNormalTable.__typeName = 'QuickView.$Client.Algorithms.Stats.StatAlgorithms$StatMethods$StandardNormalTable';
	$QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods$StandardNormalTable.$getProbability = function(value) {
		if (value < 0) {
			return 1 - $QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods$StandardNormalTable.$getProbability(-value);
		}
		else if (value > 3.09) {
			return 1;
		}
		else {
			var idx = ss.Int32.trunc(value * 100);
			return $QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods$StandardNormalTable.$zTable[idx];
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Algorithms.DateTimeExtensions
	var $QuickView_Client_Algorithms_DateTimeExtensions = function() {
	};
	$QuickView_Client_Algorithms_DateTimeExtensions.__typeName = 'QuickView.Client.Algorithms.DateTimeExtensions';
	$QuickView_Client_Algorithms_DateTimeExtensions.isSameDay = function(a, b) {
		a = a.toUniversalTime();
		b = b.toUniversalTime();
		return a.get_year() === b.get_year() && a.get_month() === b.get_month() && a.get_day() === b.get_day();
	};
	$QuickView_Client_Algorithms_DateTimeExtensions.getMonthIndex = function(a) {
		return a.get_year() * 12 + a.get_month();
	};
	$QuickView_Client_Algorithms_DateTimeExtensions.isSameMonth = function(a, b) {
		a = a.toUniversalTime();
		b = b.toUniversalTime();
		return a.get_year() === b.get_year() && a.get_month() === b.get_month();
	};
	$QuickView_Client_Algorithms_DateTimeExtensions.isLastDayOfMonth = function(a) {
		return a.get_day() === (new Date(a.get_year(), a.get_month(), -1)).getDate() + 1;
	};
	$QuickView_Client_Algorithms_DateTimeExtensions.toLastDayOfMonth = function(a) {
		var daysInMonth = (new Date(a.get_year(), a.get_month(), -1)).getDate() + 1;
		if (a.get_day() === daysInMonth) {
			return a;
		}
		else {
			return new JS.DateTimeExt.$ctor7(a.get_year(), a.get_month(), daysInMonth, a.get_hour(), a.get_minute(), a.get_second(), a.get_millisecond(), a.get_kind());
		}
	};
	global.QuickView.Client.Algorithms.DateTimeExtensions = $QuickView_Client_Algorithms_DateTimeExtensions;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Algorithms.TextAlgorithms
	var $QuickView_Client_Algorithms_TextAlgorithms = function() {
	};
	$QuickView_Client_Algorithms_TextAlgorithms.__typeName = 'QuickView.Client.Algorithms.TextAlgorithms';
	$QuickView_Client_Algorithms_TextAlgorithms.$isAsciiLetterOrDigit = function(ch) {
		return ch >= 48 && ch <= 57 || ch >= 65 && ch <= 90 || ch >= 97 && ch <= 122;
	};
	$QuickView_Client_Algorithms_TextAlgorithms.sanitizeVariableName = function(value) {
		if (ss.isNullOrEmptyString(value)) {
			return value;
		}
		var result = new Array(value.length);
		var invalidCharFound = false;
		for (var k = 0; k < value.length; k++) {
			var ch = value.charCodeAt(k);
			// Check if the character is an ASCII letter or digit
			if (ch < 128 && $QuickView_Client_Algorithms_TextAlgorithms.$isAsciiLetterOrDigit(ch)) {
				// The character is allowed
			}
			else {
				// Replace the character
				ch = 95;
				invalidCharFound = true;
			}
			result[k] = ch;
		}
		return (invalidCharFound ? String.fromCharCode.apply(null, result) : value);
	};
	global.QuickView.Client.Algorithms.TextAlgorithms = $QuickView_Client_Algorithms_TextAlgorithms;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Algorithms.TimeExtensions
	var $QuickView_Client_Algorithms_TimeExtensions = function() {
	};
	$QuickView_Client_Algorithms_TimeExtensions.__typeName = 'QuickView.Client.Algorithms.TimeExtensions';
	$QuickView_Client_Algorithms_TimeExtensions.advanceTime$2 = function(value, resolution) {
		return $QuickView_Client_Algorithms_TimeExtensions.advanceTime$1(new JS.DateTimeExt.$ctor2(value, 1), resolution).toDateTime();
	};
	$QuickView_Client_Algorithms_TimeExtensions.advanceTime$1 = function(value, resolution) {
		return $QuickView_Client_Algorithms_TimeExtensions.advanceTime$4(value, resolution, 1);
	};
	$QuickView_Client_Algorithms_TimeExtensions.advanceTime$5 = function(value, resolution, numberOfUnits) {
		return $QuickView_Client_Algorithms_TimeExtensions.advanceTime$4(new JS.DateTimeExt.$ctor2(value, 1), resolution, numberOfUnits).toDateTime();
	};
	$QuickView_Client_Algorithms_TimeExtensions.advanceTime$4 = function(value, resolution, numberOfUnits) {
		switch (resolution) {
			case 1: {
				return value.addMinutes(1 * numberOfUnits);
			}
			case 2: {
				return value.addMinutes(5 * numberOfUnits);
			}
			case 3: {
				return value.addMinutes(10 * numberOfUnits);
			}
			case 4: {
				return value.addHours(1 * numberOfUnits);
			}
			case 5: {
				return value.addDays(1 * numberOfUnits);
			}
			case 6: {
				return value.addDays(7 * numberOfUnits);
			}
			case 7: {
				return value.addMonths(1 * numberOfUnits);
			}
			case 8: {
				return value.addMonths(3 * numberOfUnits);
			}
			case 9: {
				return value.addYears(1 * numberOfUnits);
			}
			default: {
				throw new ss.ArgumentOutOfRangeException('resolution', 'Unsupported value.', null, resolution);
			}
		}
	};
	$QuickView_Client_Algorithms_TimeExtensions.advanceTime = function(value, metaResolution) {
		return $QuickView_Client_Algorithms_TimeExtensions.advanceTime$3(value, metaResolution, 1);
	};
	$QuickView_Client_Algorithms_TimeExtensions.advanceTime$3 = function(value, metaResolution, numberOfUnits) {
		var resolution;
		switch (metaResolution) {
			case 1: {
				resolution = 5;
				break;
			}
			case 2:
			case 3:
			case 0: {
				resolution = 9;
				break;
			}
			default: {
				throw new ss.ArgumentOutOfRangeException('metaResolution', 'Invalid value.', null, metaResolution);
			}
		}
		return $QuickView_Client_Algorithms_TimeExtensions.advanceTime$4(value, resolution, numberOfUnits);
	};
	$QuickView_Client_Algorithms_TimeExtensions.roundTime$2 = function(time, resolution) {
		return $QuickView_Client_Algorithms_TimeExtensions.roundTime$1(new JS.DateTimeExt.$ctor2(time, 1), resolution).toDateTime();
	};
	$QuickView_Client_Algorithms_TimeExtensions.roundTimeUp = function(time, metaResolution) {
		var result = $QuickView_Client_Algorithms_TimeExtensions.roundTime(time, metaResolution);
		if (JS.DateTimeExt.op_LessThan(result, time)) {
			result = $QuickView_Client_Algorithms_TimeExtensions.advanceTime(result, metaResolution);
		}
		return result;
	};
	$QuickView_Client_Algorithms_TimeExtensions.roundTime = function(time, metaResolution) {
		switch (metaResolution) {
			case 1: {
				return $QuickView_Client_Algorithms_TimeExtensions.roundTime$1(time, 5);
			}
			case 2:
			case 3:
			case 0: {
				return $QuickView_Client_Algorithms_TimeExtensions.roundTime$1(time, 9);
			}
			default: {
				throw new ss.ArgumentOutOfRangeException('metaResolution', 'Invalid value.', null, metaResolution);
			}
		}
	};
	$QuickView_Client_Algorithms_TimeExtensions.roundTimeUp$1 = function(time, resolution) {
		var result = $QuickView_Client_Algorithms_TimeExtensions.roundTime$1(time, resolution);
		if (JS.DateTimeExt.op_LessThan(result, time)) {
			result = $QuickView_Client_Algorithms_TimeExtensions.advanceTime$1(result, resolution);
		}
		return result;
	};
	$QuickView_Client_Algorithms_TimeExtensions.roundTime$1 = function(time, resolution) {
		switch (resolution) {
			case 1: {
				return new JS.DateTimeExt.$ctor5(time.get_year(), time.get_month(), time.get_day(), time.get_hour(), time.get_minute(), 0, time.get_kind());
			}
			case 2: {
				return new JS.DateTimeExt.$ctor5(time.get_year(), time.get_month(), time.get_day(), time.get_hour(), ss.Int32.div(time.get_minute(), 5) * 5, 0, time.get_kind());
			}
			case 3: {
				return new JS.DateTimeExt.$ctor5(time.get_year(), time.get_month(), time.get_day(), time.get_hour(), ss.Int32.div(time.get_minute(), 10) * 10, 0, time.get_kind());
			}
			case 4: {
				return new JS.DateTimeExt.$ctor5(time.get_year(), time.get_month(), time.get_day(), time.get_hour(), 0, 0, time.get_kind());
			}
			case 5: {
				return time.get_date();
			}
			case 7: {
				return new JS.DateTimeExt.$ctor5(time.get_year(), time.get_month(), 1, 0, 0, 0, time.get_kind());
			}
			case 9: {
				return new JS.DateTimeExt.$ctor5(time.get_year(), 1, 1, 0, 0, 0, time.get_kind());
			}
			case 8: {
				var quearter = ss.Int32.div(time.get_month() - 1, 3);
				var quarterMonth = quearter * 3 + 1;
				return new JS.DateTimeExt.$ctor5(time.get_year(), quarterMonth, 1, 0, 0, 0, time.get_kind());
			}
			case 6: {
				return $QuickView_Client_Algorithms_TimeExtensions.getFirstDateOfWeek(time.get_date(), 1);
			}
			default: {
				throw new ss.ArgumentOutOfRangeException('resolution', 'Invalid value.', null, resolution);
			}
		}
	};
	$QuickView_Client_Algorithms_TimeExtensions.getFirstDateOfWeek = function(date, firstDayOfWeek) {
		var delta = firstDayOfWeek - date.get_dayOfWeek();
		if (delta > 0) {
			delta -= 7;
		}
		return date.addDays(delta);
	};
	$QuickView_Client_Algorithms_TimeExtensions.isHoliday$1 = function(value) {
		return value.getDay() === 6 || value.getDay() === 0;
	};
	$QuickView_Client_Algorithms_TimeExtensions.isWorkingDay$1 = function(value) {
		return false === $QuickView_Client_Algorithms_TimeExtensions.isHoliday$1(value);
	};
	$QuickView_Client_Algorithms_TimeExtensions.isHoliday = function(value) {
		return value.get_dayOfWeek() === 6 || value.get_dayOfWeek() === 0;
	};
	$QuickView_Client_Algorithms_TimeExtensions.isWorkingDay = function(value) {
		return false === $QuickView_Client_Algorithms_TimeExtensions.isHoliday(value);
	};
	global.QuickView.Client.Algorithms.TimeExtensions = $QuickView_Client_Algorithms_TimeExtensions;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Algorithms.TimeUtils
	var $QuickView_Client_Algorithms_TimeUtils = function() {
	};
	$QuickView_Client_Algorithms_TimeUtils.__typeName = 'QuickView.Client.Algorithms.TimeUtils';
	$QuickView_Client_Algorithms_TimeUtils.difference = function(a, b, resolution) {
		if (resolution <= 5) {
			var span = JS.DateTimeExt.op_Subtraction(b, a);
			switch (resolution) {
				case 1: {
					return ss.Int32.trunc(span.ticks / 600000000);
				}
				case 2: {
					return ss.Int32.div(ss.Int32.trunc(span.ticks / 600000000), 5);
				}
				case 3: {
					return ss.Int32.div(ss.Int32.trunc(span.ticks / 600000000), 10);
				}
				case 4: {
					return ss.Int32.trunc(span.ticks / 36000000000);
				}
				case 5: {
					return span.ticks / 864000000000 | 0;
				}
				default: {
					throw new ss.ArgumentOutOfRangeException('resolution', 'Invalid value.', null, resolution);
				}
			}
		}
		else {
			switch (resolution) {
				case 6: {
					return ss.Int32.div(JS.DateTimeExt.op_Subtraction($QuickView_Client_Algorithms_TimeExtensions.roundTime$1(b, resolution), $QuickView_Client_Algorithms_TimeExtensions.roundTime$1(a, resolution)).ticks / 864000000000 | 0, 7);
				}
				case 7: {
					return b.get_month() - a.get_month() + 12 * (b.get_year() - a.get_year());
				}
				case 8: {
					a = $QuickView_Client_Algorithms_TimeExtensions.roundTime$1(a, resolution);
					b = $QuickView_Client_Algorithms_TimeExtensions.roundTime$1(b, resolution);
					return ss.Int32.div(b.get_month() - a.get_month() + 12 * (b.get_year() - a.get_year()), 3);
				}
				case 9: {
					return b.get_year() - a.get_year();
				}
				default: {
					throw new ss.ArgumentOutOfRangeException('resolution', 'Invalid value.', null, resolution);
				}
			}
		}
	};
	global.QuickView.Client.Algorithms.TimeUtils = $QuickView_Client_Algorithms_TimeUtils;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Algorithms.Charts.CallbackResolutionTransformation
	var $QuickView_Client_Algorithms_Charts_$CallbackResolutionTransformation$1 = function(T) {
		var $type = function(dataCallback, timeCallback) {
			this.$_dataCallback = null;
			this.$_timeCallback = null;
			JS.ArgumentHelper.notNull(dataCallback, 'dataCallback');
			JS.ArgumentHelper.notNull(timeCallback, 'timeCallback');
			this.$_dataCallback = dataCallback;
			this.$_timeCallback = timeCallback;
		};
		ss.registerGenericClassInstance($type, $QuickView_Client_Algorithms_Charts_$CallbackResolutionTransformation$1, [T], {
			transform$1: function(points, currentResolution, targetResolution) {
				return this.$_dataCallback(points, currentResolution, targetResolution);
			},
			transform: function(time, currentResolution, targetResolution) {
				return this.$_timeCallback(time, currentResolution, targetResolution);
			}
		}, function() {
			return null;
		}, function() {
			return [ss.makeGenericType($QuickView_Client_Algorithms_Charts_IResolutionTransformation$1, [T])];
		});
		return $type;
	};
	$QuickView_Client_Algorithms_Charts_$CallbackResolutionTransformation$1.__typeName = 'QuickView.Client.Algorithms.Charts.$CallbackResolutionTransformation$1';
	ss.initGenericClass($QuickView_Client_Algorithms_Charts_$CallbackResolutionTransformation$1, $asm, 1);
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Algorithms.Charts.LocalUtils
	var $QuickView_Client_Algorithms_Charts_$LocalUtils = function() {
	};
	$QuickView_Client_Algorithms_Charts_$LocalUtils.__typeName = 'QuickView.Client.Algorithms.Charts.$LocalUtils';
	$QuickView_Client_Algorithms_Charts_$LocalUtils.$advanceDataPointsIndex = function(list, time, index) {
		while (index.$ < ss.count(list) && JS.DateTimeExt.op_LessThan(ss.getItem(list, index.$).T, time)) {
			index.$++;
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Algorithms.Charts.AccumulationAlgorithm
	var $QuickView_Client_Algorithms_Charts_AccumulationAlgorithm = function() {
		$QuickView_Client_Algorithms_Charts_ChartAlgorithmBase.call(this);
	};
	$QuickView_Client_Algorithms_Charts_AccumulationAlgorithm.__typeName = 'QuickView.Client.Algorithms.Charts.AccumulationAlgorithm';
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Algorithms.Charts.AggregationAlgorithm
	var $QuickView_Client_Algorithms_Charts_AggregationAlgorithm = function() {
		$QuickView_Client_Algorithms_Charts_ChartAlgorithmBase.call(this);
	};
	$QuickView_Client_Algorithms_Charts_AggregationAlgorithm.__typeName = 'QuickView.Client.Algorithms.Charts.AggregationAlgorithm';
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Algorithms.Charts.AlgorithmParameterList
	var $QuickView_Client_Algorithms_Charts_AlgorithmParameterList = function() {
	};
	$QuickView_Client_Algorithms_Charts_AlgorithmParameterList.__typeName = 'QuickView.Client.Algorithms.Charts.AlgorithmParameterList';
	$QuickView_Client_Algorithms_Charts_AlgorithmParameterList.getValue = function($this, name) {
		JS.ArgumentHelper.notNullOrEmpty(name, 'name');
		var parameter = Enumerable.from($this._parameters).firstOrDefault(function(x) {
			return ss.compareStrings(x.N, name, true) === 0;
		}, ss.getDefaultValue(QuickView.Client.Models.Charts.AlgorithmParameter));
		if (ss.isNullOrUndefined(parameter)) {
			throw new ss.InvalidOperationException(ss.formatString("A parameter named '{0}' was not found.", name));
		}
		return parameter.V;
	};
	$QuickView_Client_Algorithms_Charts_AlgorithmParameterList.getValue$1 = function($this, name, defaultValue) {
		JS.ArgumentHelper.notNullOrEmpty(name, 'name');
		var parameter = Enumerable.from($this._parameters).firstOrDefault(function(x) {
			return ss.compareStrings(x.N, name, true) === 0;
		}, ss.getDefaultValue(QuickView.Client.Models.Charts.AlgorithmParameter));
		return (ss.isNullOrUndefined(parameter) ? defaultValue : parameter.V);
	};
	$QuickView_Client_Algorithms_Charts_AlgorithmParameterList.$ctor = function(parameters) {
		var $this = {};
		$this._parameters = null;
		JS.ArgumentHelper.notNull(parameters, 'parameters');
		$this._parameters = parameters;
		return $this;
	};
	$QuickView_Client_Algorithms_Charts_AlgorithmParameterList.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Algorithms.Charts.AlgorithmParameterList = $QuickView_Client_Algorithms_Charts_AlgorithmParameterList;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Algorithms.Charts.BMReturnsAlgorithm
	var $QuickView_Client_Algorithms_Charts_BMReturnsAlgorithm = function() {
		$QuickView_Client_Algorithms_Charts_ChartAlgorithmBase.call(this);
	};
	$QuickView_Client_Algorithms_Charts_BMReturnsAlgorithm.__typeName = 'QuickView.Client.Algorithms.Charts.BMReturnsAlgorithm';
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Algorithms.Charts.CallbackChartDataPointsTransformation
	var $QuickView_Client_Algorithms_Charts_CallbackChartDataPointsTransformation$1 = function(T) {
		var $type = function(callback) {
			this.$_callback = null;
			JS.ArgumentHelper.notNull(callback, 'callback');
			this.$_callback = callback;
		};
		ss.registerGenericClassInstance($type, $QuickView_Client_Algorithms_Charts_CallbackChartDataPointsTransformation$1, [T], {
			transform: function(input) {
				return this.$_callback(input);
			}
		}, function() {
			return null;
		}, function() {
			return [ss.makeGenericType($QuickView_Client_Algorithms_Charts_IDataPointsTransformation$1, [T])];
		});
		return $type;
	};
	$QuickView_Client_Algorithms_Charts_CallbackChartDataPointsTransformation$1.__typeName = 'QuickView.Client.Algorithms.Charts.CallbackChartDataPointsTransformation$1';
	ss.initGenericClass($QuickView_Client_Algorithms_Charts_CallbackChartDataPointsTransformation$1, $asm, 1);
	global.QuickView.Client.Algorithms.Charts.CallbackChartDataPointsTransformation$1 = $QuickView_Client_Algorithms_Charts_CallbackChartDataPointsTransformation$1;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Algorithms.Charts.ChartAlgorithmBase
	var $QuickView_Client_Algorithms_Charts_ChartAlgorithmBase = function() {
		this.$_name = null;
	};
	$QuickView_Client_Algorithms_Charts_ChartAlgorithmBase.__typeName = 'QuickView.Client.Algorithms.Charts.ChartAlgorithmBase';
	global.QuickView.Client.Algorithms.Charts.ChartAlgorithmBase = $QuickView_Client_Algorithms_Charts_ChartAlgorithmBase;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Algorithms.Charts.ChartAlgorithmInput
	var $QuickView_Client_Algorithms_Charts_ChartAlgorithmInput = function() {
	};
	$QuickView_Client_Algorithms_Charts_ChartAlgorithmInput.__typeName = 'QuickView.Client.Algorithms.Charts.ChartAlgorithmInput';
	$QuickView_Client_Algorithms_Charts_ChartAlgorithmInput.$ctor = function(dataPoints, resolution) {
		var $this = $QuickView_Client_Algorithms_Charts_ChartAlgorithmInput.$ctor1(dataPoints, resolution, null);
		return $this;
	};
	$QuickView_Client_Algorithms_Charts_ChartAlgorithmInput.$ctor1 = function(dataPoints, resolution, initialValue) {
		var $this = {};
		$this.dataPoints = null;
		$this.initialValue = null;
		$this.resolution = 0;
		JS.ArgumentHelper.notNull(dataPoints, 'dataPoints');
		$this.dataPoints = dataPoints;
		$this.initialValue = initialValue;
		$this.resolution = resolution;
		return $this;
	};
	$QuickView_Client_Algorithms_Charts_ChartAlgorithmInput.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Algorithms.Charts.ChartAlgorithmInput = $QuickView_Client_Algorithms_Charts_ChartAlgorithmInput;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Algorithms.Charts.ChartAlgorithmResult
	var $QuickView_Client_Algorithms_Charts_ChartAlgorithmResult = function() {
	};
	$QuickView_Client_Algorithms_Charts_ChartAlgorithmResult.__typeName = 'QuickView.Client.Algorithms.Charts.ChartAlgorithmResult';
	$QuickView_Client_Algorithms_Charts_ChartAlgorithmResult.$ctor = function(type) {
		var $this = {};
		$this.T = 0;
		$this.T = type;
		return $this;
	};
	$QuickView_Client_Algorithms_Charts_ChartAlgorithmResult.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Algorithms.Charts.ChartAlgorithmResult = $QuickView_Client_Algorithms_Charts_ChartAlgorithmResult;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Algorithms.Charts.ChartAlgorithmResult
	var $QuickView_Client_Algorithms_Charts_ChartAlgorithmResult$1 = function(T) {
		var $type = function() {
		};
		$type.changeResolution = function($this, targetResolution) {
			if ($this.R === targetResolution) {
				return $this;
			}
			if (ss.isNullOrUndefined($this.F)) {
				throw new ss.InvalidOperationException('Changing resolution is not supported for this type of data.');
			}
			var newDataPoins = $this.F.transform$1($this.D.dataPoints, $this.R, targetResolution);
			var newOutput = ss.makeGenericType($QuickView_Client_Algorithms_Charts_DataPointsTransformationOutput$1, [T]).$ctor1(newDataPoins, $this.D.initialValue);
			return $type.$ctor2($this.T, newOutput, targetResolution, $this.F, $this._initialResolution);
		};
		$type.changeResolution$1 = function($this, time, targetResolution) {
			return $this.F.transform(time, $this._initialResolution, targetResolution);
		};
		$type.$ctor = function(type, output, resolution) {
			var $this = $type.$ctor1(type, output, resolution, null);
			return $this;
		};
		$type.$ctor1 = function(type, output, resolution, resolutionTransformation) {
			var $this = $type.$ctor2(type, output, resolution, resolutionTransformation, resolution);
			return $this;
		};
		$type.$ctor2 = function(type, output, resolution, resolutionTransformation, initialResolution) {
			var $this = $QuickView_Client_Algorithms_Charts_ChartAlgorithmResult.$ctor(type);
			$this.D = null;
			$this.R = 0;
			$this.F = null;
			$this._initialResolution = 0;
			JS.ArgumentHelper.notNull(output, 'output');
			$this.D = output;
			$this.R = resolution;
			$this.F = resolutionTransformation;
			$this._initialResolution = initialResolution;
			return $this;
		};
		$type.isInstanceOfType = function() {
			return true;
		};
		ss.registerGenericClassInstance($type, $QuickView_Client_Algorithms_Charts_ChartAlgorithmResult$1, [T], {}, function() {
			return $QuickView_Client_Algorithms_Charts_ChartAlgorithmResult;
		}, function() {
			return [];
		});
		return $type;
	};
	$QuickView_Client_Algorithms_Charts_ChartAlgorithmResult$1.__typeName = 'QuickView.Client.Algorithms.Charts.ChartAlgorithmResult$1';
	ss.initGenericClass($QuickView_Client_Algorithms_Charts_ChartAlgorithmResult$1, $asm, 1);
	global.QuickView.Client.Algorithms.Charts.ChartAlgorithmResult$1 = $QuickView_Client_Algorithms_Charts_ChartAlgorithmResult$1;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Algorithms.Charts.ChartAlgorithmResultType
	var $QuickView_Client_Algorithms_Charts_ChartAlgorithmResultType = function() {
	};
	$QuickView_Client_Algorithms_Charts_ChartAlgorithmResultType.__typeName = 'QuickView.Client.Algorithms.Charts.ChartAlgorithmResultType';
	global.QuickView.Client.Algorithms.Charts.ChartAlgorithmResultType = $QuickView_Client_Algorithms_Charts_ChartAlgorithmResultType;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Algorithms.Charts.ChartAlgorithms
	var $QuickView_Client_Algorithms_Charts_ChartAlgorithms = function() {
	};
	$QuickView_Client_Algorithms_Charts_ChartAlgorithms.__typeName = 'QuickView.Client.Algorithms.Charts.ChartAlgorithms';
	$QuickView_Client_Algorithms_Charts_ChartAlgorithms.getAlgorithm = function(algorithmName) {
		JS.ArgumentHelper.notNullOrEmpty(algorithmName, 'algorithmName');
		if (ss.isNullOrUndefined($QuickView_Client_Algorithms_Charts_ChartAlgorithms.$_algorithmDict)) {
			// Load the list of algorithms
			$QuickView_Client_Algorithms_Charts_ChartAlgorithms.$_algorithmDict = {};
			var typeList = ss.getAssemblyTypes($asm);
			for (var $t1 = 0; $t1 < typeList.length; $t1++) {
				var item = typeList[$t1];
				if (item.prototype instanceof $QuickView_Client_Algorithms_Charts_ChartAlgorithmBase) {
					var instance = ss.cast(ss.createInstance(item), $QuickView_Client_Algorithms_Charts_ChartAlgorithmBase);
					var key = instance.get_name().toLowerCase();
					$QuickView_Client_Algorithms_Charts_ChartAlgorithms.$_algorithmDict[key] = instance;
				}
			}
		}
		{
			var key1 = algorithmName.toLowerCase();
			var result = $QuickView_Client_Algorithms_Charts_ChartAlgorithms.$_algorithmDict[key1];
			if (ss.isNullOrUndefined(result)) {
				throw new ss.ArgumentOutOfRangeException('algorithmName', 'Unknown algorithm.', null, algorithmName);
			}
			return result;
		}
	};
	global.QuickView.Client.Algorithms.Charts.ChartAlgorithms = $QuickView_Client_Algorithms_Charts_ChartAlgorithms;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Algorithms.Charts.DataPointsTransformationInput
	var $QuickView_Client_Algorithms_Charts_DataPointsTransformationInput = function() {
	};
	$QuickView_Client_Algorithms_Charts_DataPointsTransformationInput.__typeName = 'QuickView.Client.Algorithms.Charts.DataPointsTransformationInput';
	$QuickView_Client_Algorithms_Charts_DataPointsTransformationInput.$ctor = function(dataPoints) {
		var $this = $QuickView_Client_Algorithms_Charts_DataPointsTransformationInput.$ctor1(dataPoints, null);
		return $this;
	};
	$QuickView_Client_Algorithms_Charts_DataPointsTransformationInput.$ctor1 = function(dataPoints, initialValue) {
		var $this = {};
		$this.dataPoints = null;
		$this.initialValue = null;
		JS.ArgumentHelper.notNull(dataPoints, 'dataPoints');
		$this.dataPoints = dataPoints;
		$this.initialValue = initialValue;
		return $this;
	};
	$QuickView_Client_Algorithms_Charts_DataPointsTransformationInput.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Algorithms.Charts.DataPointsTransformationInput = $QuickView_Client_Algorithms_Charts_DataPointsTransformationInput;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Algorithms.Charts.DataPointsTransformationOutput
	var $QuickView_Client_Algorithms_Charts_DataPointsTransformationOutput$1 = function(T) {
		var $type = function() {
		};
		$type.$ctor = function(dataPoints) {
			var $this = $type.$ctor1(dataPoints, null);
			return $this;
		};
		$type.$ctor1 = function(dataPoints, initialValue) {
			var $this = {};
			$this.dataPoints = null;
			$this.initialValue = null;
			JS.ArgumentHelper.notNull(dataPoints, 'dataPoints');
			$this.dataPoints = dataPoints;
			$this.initialValue = initialValue;
			return $this;
		};
		$type.isInstanceOfType = function() {
			return true;
		};
		ss.registerGenericClassInstance($type, $QuickView_Client_Algorithms_Charts_DataPointsTransformationOutput$1, [T], {}, function() {
			return null;
		}, function() {
			return [];
		});
		return $type;
	};
	$QuickView_Client_Algorithms_Charts_DataPointsTransformationOutput$1.__typeName = 'QuickView.Client.Algorithms.Charts.DataPointsTransformationOutput$1';
	ss.initGenericClass($QuickView_Client_Algorithms_Charts_DataPointsTransformationOutput$1, $asm, 1);
	global.QuickView.Client.Algorithms.Charts.DataPointsTransformationOutput$1 = $QuickView_Client_Algorithms_Charts_DataPointsTransformationOutput$1;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Algorithms.Charts.DataPointsTransformations
	var $QuickView_Client_Algorithms_Charts_DataPointsTransformations = function() {
	};
	$QuickView_Client_Algorithms_Charts_DataPointsTransformations.__typeName = 'QuickView.Client.Algorithms.Charts.DataPointsTransformations';
	$QuickView_Client_Algorithms_Charts_DataPointsTransformations.$accumulationCallback = function(input) {
		return ss.makeGenericType($QuickView_Client_Algorithms_Charts_DataPointsTransformationOutput$1, [QuickView.Client.Models.Charts.ChartDataPoint]).$ctor1($QuickView_Client_Algorithms_Charts_DataPointsTransformations.$accumulationMethod(input.dataPoints), 0);
	};
	$QuickView_Client_Algorithms_Charts_DataPointsTransformations.$accumulationMethod = function(points) {
		return new ss.IteratorBlockEnumerable(function() {
			return (function(points) {
				var $result, $state = 0, sum, $t1, item;
				var $finally = function() {
					$t1.dispose();
				};
				return new ss.IteratorBlockEnumerator(function() {
					$sm1:
					for (;;) {
						switch ($state) {
							case 0: {
								$state = -1;
								JS.ArgumentHelper.notNull(points, 'points');
								sum = 0;
								$t1 = ss.getEnumerator(points);
								$state = 3;
								continue $sm1;
							}
							case 3: {
								$state = 1;
								if (!$t1.moveNext()) {
									$state = 2;
									continue $sm1;
								}
								item = $t1.current();
								sum += item.V;
								$result = QuickView.Client.Models.Charts.ChartDataPoint.$ctor(item.T, sum, item.V);
								$state = 3;
								return true;
							}
							case 2: {
								$state = -1;
								$finally.call(this);
								$state = -1;
								break $sm1;
							}
							default: {
								break $sm1;
							}
						}
					}
					return false;
				}, function() {
					return $result;
				}, function() {
					try {
						switch ($state) {
							case 1:
							case 2:
							case 3: {
								try {
									break;
								}
								finally {
									$finally.call(this);
								}
							}
						}
					}
					finally {
						$state = -1;
					}
				}, this);
			}).call(this, points);
		}, this);
	};
	$QuickView_Client_Algorithms_Charts_DataPointsTransformations.$compoundingAccumulationCallback = function(input) {
		return ss.makeGenericType($QuickView_Client_Algorithms_Charts_DataPointsTransformationOutput$1, [QuickView.Client.Models.Charts.ChartDataPoint]).$ctor1($QuickView_Client_Algorithms_Charts_DataPointsTransformations.$compoundingAccumulationMethod(input.dataPoints), 0);
	};
	$QuickView_Client_Algorithms_Charts_DataPointsTransformations.$compoundingAccumulationMethod = function(points) {
		return new ss.IteratorBlockEnumerable(function() {
			return (function(points) {
				var $result, $state = 0, value, $t1, item;
				var $finally = function() {
					$t1.dispose();
				};
				return new ss.IteratorBlockEnumerator(function() {
					$sm1:
					for (;;) {
						switch ($state) {
							case 0: {
								$state = -1;
								JS.ArgumentHelper.notNull(points, 'points');
								value = 0;
								$t1 = ss.getEnumerator(points);
								$state = 3;
								continue $sm1;
							}
							case 3: {
								$state = 1;
								if (!$t1.moveNext()) {
									$state = 2;
									continue $sm1;
								}
								item = $t1.current();
								value = (value + 1) * (item.V + 1) - 1;
								$result = QuickView.Client.Models.Charts.ChartDataPoint.$ctor(item.T, value, item.V);
								$state = 3;
								return true;
							}
							case 2: {
								$state = -1;
								$finally.call(this);
								$state = -1;
								break $sm1;
							}
							default: {
								break $sm1;
							}
						}
					}
					return false;
				}, function() {
					return $result;
				}, function() {
					try {
						switch ($state) {
							case 1:
							case 2:
							case 3: {
								try {
									break;
								}
								finally {
									$finally.call(this);
								}
							}
						}
					}
					finally {
						$state = -1;
					}
				}, this);
			}).call(this, points);
		}, this);
	};
	$QuickView_Client_Algorithms_Charts_DataPointsTransformations.$monthlyCompoundingAccumulationCallback = function(input) {
		return ss.makeGenericType($QuickView_Client_Algorithms_Charts_DataPointsTransformationOutput$1, [QuickView.Client.Models.Charts.ChartDataPoint]).$ctor1($QuickView_Client_Algorithms_Charts_DataPointsTransformations.$monthlyCompoundingAccumulationMethod(input.dataPoints), 0);
	};
	$QuickView_Client_Algorithms_Charts_DataPointsTransformations.$monthlyCompoundingAccumulationMethod = function(points) {
		return new ss.IteratorBlockEnumerable(function() {
			return (function(points) {
				var $result, $state = 0, sum, previousMonthValue, previousValue, month, $t1, item, value;
				var $finally = function() {
					$t1.dispose();
				};
				return new ss.IteratorBlockEnumerator(function() {
					$sm1:
					for (;;) {
						switch ($state) {
							case 0: {
								$state = -1;
								JS.ArgumentHelper.notNull(points, 'points');
								sum = 0;
								previousMonthValue = 0;
								previousValue = null;
								month = null;
								$t1 = ss.getEnumerator(points);
								$state = 3;
								continue $sm1;
							}
							case 3: {
								$state = 1;
								if (!$t1.moveNext()) {
									$state = 2;
									continue $sm1;
								}
								item = $t1.current();
								if (JS.DateTimeExt.op_Equality$1(month, null) || ss.unbox(month).get_year() !== item.T.get_year() || ss.unbox(month).get_month() !== item.T.get_month()) {
									month = item.T;
									sum = 0;
									previousMonthValue = ss.coalesce(previousValue, 0);
								}
								sum += item.V;
								value = (previousMonthValue + 1) * (sum + 1) - 1;
								$result = QuickView.Client.Models.Charts.ChartDataPoint.$ctor(item.T, value, item.V);
								$state = 4;
								return true;
							}
							case 2: {
								$state = -1;
								$finally.call(this);
								$state = -1;
								break $sm1;
							}
							case 4: {
								$state = 1;
								previousValue = value;
								$state = 3;
								continue $sm1;
							}
							default: {
								break $sm1;
							}
						}
					}
					return false;
				}, function() {
					return $result;
				}, function() {
					try {
						switch ($state) {
							case 1:
							case 2:
							case 3:
							case 4: {
								try {
									break;
								}
								finally {
									$finally.call(this);
								}
							}
						}
					}
					finally {
						$state = -1;
					}
				}, this);
			}).call(this, points);
		}, this);
	};
	$QuickView_Client_Algorithms_Charts_DataPointsTransformations.$differenceCallback = function(input) {
		return ss.makeGenericType($QuickView_Client_Algorithms_Charts_DataPointsTransformationOutput$1, [QuickView.Client.Models.Charts.ChartDataPoint]).$ctor1($QuickView_Client_Algorithms_Charts_DataPointsTransformations.$differenceMethod(input.dataPoints, input.initialValue), input.initialValue);
	};
	$QuickView_Client_Algorithms_Charts_DataPointsTransformations.$differenceMethod = function(points, initialValue) {
		return new ss.IteratorBlockEnumerable(function() {
			return (function(points, initialValue) {
				var $result, $state = 0, prevValue, $t1, item, value;
				var $finally = function() {
					$t1.dispose();
				};
				return new ss.IteratorBlockEnumerator(function() {
					$sm1:
					for (;;) {
						switch ($state) {
							case 0: {
								$state = -1;
								JS.ArgumentHelper.notNull(points, 'points');
								prevValue = initialValue;
								$t1 = ss.getEnumerator(points);
								$state = 3;
								continue $sm1;
							}
							case 3: {
								$state = 1;
								if (!$t1.moveNext()) {
									$state = 2;
									continue $sm1;
								}
								item = $t1.current();
								if (ss.isNullOrUndefined(prevValue)) {
									prevValue = item.V;
								}
								value = item.V - ss.unbox(prevValue);
								$result = QuickView.Client.Models.Charts.ChartDataPoint.$ctor(item.T, item.V, value);
								$state = 4;
								return true;
							}
							case 2: {
								$state = -1;
								$finally.call(this);
								$state = -1;
								break $sm1;
							}
							case 4: {
								$state = 1;
								prevValue = item.V;
								$state = 3;
								continue $sm1;
							}
							default: {
								break $sm1;
							}
						}
					}
					return false;
				}, function() {
					return $result;
				}, function() {
					try {
						switch ($state) {
							case 1:
							case 2:
							case 3:
							case 4: {
								try {
									break;
								}
								finally {
									$finally.call(this);
								}
							}
						}
					}
					finally {
						$state = -1;
					}
				}, this);
			}).call(this, points, initialValue);
		}, this);
	};
	global.QuickView.Client.Algorithms.Charts.DataPointsTransformations = $QuickView_Client_Algorithms_Charts_DataPointsTransformations;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Algorithms.Charts.DefaultTradingSession
	var $QuickView_Client_Algorithms_Charts_DefaultTradingSession = function() {
		$QuickView_Client_Algorithms_Charts_TradingSession.call(this);
	};
	$QuickView_Client_Algorithms_Charts_DefaultTradingSession.__typeName = 'QuickView.Client.Algorithms.Charts.DefaultTradingSession';
	global.QuickView.Client.Algorithms.Charts.DefaultTradingSession = $QuickView_Client_Algorithms_Charts_DefaultTradingSession;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Algorithms.Charts.DifferenceAlgorithm
	var $QuickView_Client_Algorithms_Charts_DifferenceAlgorithm = function() {
		$QuickView_Client_Algorithms_Charts_ChartAlgorithmBase.call(this);
	};
	$QuickView_Client_Algorithms_Charts_DifferenceAlgorithm.__typeName = 'QuickView.Client.Algorithms.Charts.DifferenceAlgorithm';
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Algorithms.Charts.DrawdownAlgorithm
	var $QuickView_Client_Algorithms_Charts_DrawdownAlgorithm = function() {
	};
	$QuickView_Client_Algorithms_Charts_DrawdownAlgorithm.__typeName = 'QuickView.Client.Algorithms.Charts.DrawdownAlgorithm';
	$QuickView_Client_Algorithms_Charts_DrawdownAlgorithm.transform = function(unit, list, initialValue) {
		JS.ArgumentHelper.notNull(list, 'list');
		return $QuickView_Client_Algorithms_Charts_DrawdownAlgorithm.transform$1(unit, Enumerable.from(list).toArray(), initialValue);
	};
	$QuickView_Client_Algorithms_Charts_DrawdownAlgorithm.transform$1 = function(unit, list, initialValue) {
		JS.ArgumentHelper.notNull(list, 'list');
		var previousValue = ss.coalesce(initialValue, 0);
		var previousDrawdownValue = previousValue;
		// The value that started
		var sectionStartValue = null;
		// The last point that was outside a section
		var lastOutsidePoint = null;
		var intervalList = [];
		var currentInterval = null;
		var currentDataPointList = null;
		var totalTradingDays = 0;
		for (var k = 0; k < list.length; k++) {
			var item = list[k];
			if (item.P === 0) {
				// Count only normal points at 12am to handle intraday resolution
				var time = item.T;
				if (time.get_hour() === 0 && time.get_minute() === 0 && time.get_second() === 0) {
					totalTradingDays++;
				}
			}
			if (item.P !== 0) {
				if (ss.isValue(sectionStartValue)) {
					// Keep the previous value if inside a section
					currentDataPointList.push(QuickView.Client.Models.Charts.DrawdownDataPoint.$ctor(item, previousDrawdownValue));
				}
				continue;
			}
			var drawdownValue;
			var isInsideSection;
			if (ss.isValue(sectionStartValue)) {
				// Inside a section
				if (ss.Nullable$1.ge(item.C, sectionStartValue)) {
					// End of section
					drawdownValue = 0;
					sectionStartValue = null;
				}
				else {
					// Still in the section
					drawdownValue = item.C - ss.unbox(sectionStartValue);
				}
				// The point at the end of the section is included in it
				isInsideSection = true;
			}
			else if (previousValue > item.C) {
				// This is the beginning of a drawdown section
				sectionStartValue = previousValue;
				drawdownValue = item.C - previousValue;
				// Create a new interval
				currentDataPointList = [];
				var $t1 = QuickView.Client.Models.Charts.DrawdownInterval.$ctor();
				$t1.P = JS.Collections.CollectionExtensions.asArray(QuickView.Client.Models.Charts.DrawdownDataPoint).call(null, currentDataPointList);
				currentInterval = $t1;
				intervalList.push(currentInterval);
				// The point at the beginning of the section is included in it
				isInsideSection = true;
			}
			else {
				// Outside a section
				drawdownValue = 0;
				isInsideSection = false;
			}
			if (isInsideSection) {
				if (ss.isValue(lastOutsidePoint)) {
					// This is the beginning of a new section so include the last outside point
					currentDataPointList.push(QuickView.Client.Models.Charts.DrawdownDataPoint.$ctor(lastOutsidePoint, 0));
				}
				currentDataPointList.push(QuickView.Client.Models.Charts.DrawdownDataPoint.$ctor(item, drawdownValue));
				lastOutsidePoint = null;
			}
			else {
				lastOutsidePoint = item;
			}
			previousValue = item.C;
			previousDrawdownValue = drawdownValue;
		}
		// Calculate stats
		for (var $t2 = 0; $t2 < intervalList.length; $t2++) {
			var item1 = intervalList[$t2];
			item1.S = $QuickView_Client_Algorithms_Charts_DrawdownAlgorithm.$calculateStats(item1.P);
		}
		var stats;
		if (list.length > 0) {
			var start = list[0].T;
			var end = list[list.length - 1].T;
			var $t3 = QuickView.Client.Models.Charts.DrawdownStats.$ctor();
			$t3.S = start;
			$t3.E = end;
			$t3.C = ss.Int32.trunc(JS.DateTimeExt.op_Subtraction(end, start).ticks / 864000000000);
			$t3.T = totalTradingDays;
			stats = $t3;
		}
		else {
			stats = null;
		}
		var $t4 = QuickView.Client.Models.Charts.DrawdownData.$ctor();
		$t4.S = stats;
		$t4.U = unit;
		$t4.I = JS.Collections.CollectionExtensions.asArray(QuickView.Client.Models.Charts.DrawdownInterval).call(null, intervalList);
		var result = $t4;
		return result;
	};
	$QuickView_Client_Algorithms_Charts_DrawdownAlgorithm.$calculateStats = function(dataPoints) {
		JS.ArgumentHelper.notNull(dataPoints, 'dataPoints');
		if (dataPoints.length === 0) {
			return null;
		}
		var start = dataPoints[0].P.T;
		var end = dataPoints[dataPoints.length - 1].P.T;
		var $t1 = QuickView.Client.Models.Charts.DrawdownIntervalStats.$ctor();
		$t1.S = start;
		$t1.E = end;
		$t1.C = ss.Int32.trunc(JS.DateTimeExt.op_Subtraction(end, start).ticks / 864000000000) + 1;
		var result = $t1;
		var tradingDays = 0;
		var maxValue = 0;
		var maxDataPoint = null;
		for (var k = 0; k < dataPoints.length; k++) {
			var item = dataPoints[k];
			if (item.P.P === 0) {
				// Count only normal points at 12am to handle intraday resolution
				var time = item.P.T;
				if (time.get_hour() === 0 && time.get_minute() === 0 && time.get_second() === 0) {
					tradingDays++;
				}
			}
			if (item.V < maxValue) {
				maxValue = item.V;
				maxDataPoint = item;
			}
		}
		result.T = tradingDays;
		result.M = maxDataPoint;
		return result;
	};
	global.QuickView.Client.Algorithms.Charts.DrawdownAlgorithm = $QuickView_Client_Algorithms_Charts_DrawdownAlgorithm;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Algorithms.Charts.IDataPointsTransformation
	var $QuickView_Client_Algorithms_Charts_IDataPointsTransformation$1 = function(T) {
		var $type = function() {
		};
		ss.registerGenericInterfaceInstance($type, $QuickView_Client_Algorithms_Charts_IDataPointsTransformation$1, [T], { transform: null }, function() {
			return [];
		});
		return $type;
	};
	$QuickView_Client_Algorithms_Charts_IDataPointsTransformation$1.__typeName = 'QuickView.Client.Algorithms.Charts.IDataPointsTransformation$1';
	ss.initGenericInterface($QuickView_Client_Algorithms_Charts_IDataPointsTransformation$1, $asm, 1);
	global.QuickView.Client.Algorithms.Charts.IDataPointsTransformation$1 = $QuickView_Client_Algorithms_Charts_IDataPointsTransformation$1;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Algorithms.Charts.IdentityAlgorithm
	var $QuickView_Client_Algorithms_Charts_IdentityAlgorithm = function() {
		$QuickView_Client_Algorithms_Charts_ChartAlgorithmBase.call(this);
	};
	$QuickView_Client_Algorithms_Charts_IdentityAlgorithm.__typeName = 'QuickView.Client.Algorithms.Charts.IdentityAlgorithm';
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Algorithms.Charts.IONReturnsAlgorithm
	var $QuickView_Client_Algorithms_Charts_IONReturnsAlgorithm = function() {
		$QuickView_Client_Algorithms_Charts_ChartAlgorithmBase.call(this);
	};
	$QuickView_Client_Algorithms_Charts_IONReturnsAlgorithm.__typeName = 'QuickView.Client.Algorithms.Charts.IONReturnsAlgorithm';
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Algorithms.Charts.IResolutionTransformation
	var $QuickView_Client_Algorithms_Charts_IResolutionTransformation$1 = function(T) {
		var $type = function() {
		};
		ss.registerGenericInterfaceInstance($type, $QuickView_Client_Algorithms_Charts_IResolutionTransformation$1, [T], { transform$1: null, transform: null }, function() {
			return [];
		});
		return $type;
	};
	$QuickView_Client_Algorithms_Charts_IResolutionTransformation$1.__typeName = 'QuickView.Client.Algorithms.Charts.IResolutionTransformation$1';
	ss.initGenericInterface($QuickView_Client_Algorithms_Charts_IResolutionTransformation$1, $asm, 1);
	global.QuickView.Client.Algorithms.Charts.IResolutionTransformation$1 = $QuickView_Client_Algorithms_Charts_IResolutionTransformation$1;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Algorithms.Charts.QRHighWaterMarkAlgorithm
	var $QuickView_Client_Algorithms_Charts_QRHighWaterMarkAlgorithm = function() {
		$QuickView_Client_Algorithms_Charts_ChartAlgorithmBase.call(this);
	};
	$QuickView_Client_Algorithms_Charts_QRHighWaterMarkAlgorithm.__typeName = 'QuickView.Client.Algorithms.Charts.QRHighWaterMarkAlgorithm';
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Algorithms.Charts.QRInitialValueAlgorithm
	var $QuickView_Client_Algorithms_Charts_QRInitialValueAlgorithm = function() {
		$QuickView_Client_Algorithms_Charts_ChartAlgorithmBase.call(this);
	};
	$QuickView_Client_Algorithms_Charts_QRInitialValueAlgorithm.__typeName = 'QuickView.Client.Algorithms.Charts.QRInitialValueAlgorithm';
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Algorithms.Charts.QRReturnsAlgorithm
	var $QuickView_Client_Algorithms_Charts_QRReturnsAlgorithm = function() {
		$QuickView_Client_Algorithms_Charts_ChartAlgorithmBase.call(this);
	};
	$QuickView_Client_Algorithms_Charts_QRReturnsAlgorithm.__typeName = 'QuickView.Client.Algorithms.Charts.QRReturnsAlgorithm';
    ////////////////////////////////////////////////////////////////////////////////
    // QuickView.Client.Algorithms.Charts.QRPositionsAlgorithm
	var $QuickView_Client_Algorithms_Charts_QRPositionsAlgorithm = function () {
	    $QuickView_Client_Algorithms_Charts_ChartAlgorithmBase.call(this);
	};
	$QuickView_Client_Algorithms_Charts_QRPositionsAlgorithm.__typeName = 'QuickView.Client.Algorithms.Charts.QRPositionsAlgorithm';
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Algorithms.Charts.QRSubRedAlgorithm
	var $QuickView_Client_Algorithms_Charts_QRSubRedAlgorithm = function() {
		$QuickView_Client_Algorithms_Charts_ChartAlgorithmBase.call(this);
	};
	$QuickView_Client_Algorithms_Charts_QRSubRedAlgorithm.__typeName = 'QuickView.Client.Algorithms.Charts.QRSubRedAlgorithm';
	$QuickView_Client_Algorithms_Charts_QRSubRedAlgorithm.$resolutionTransformationCallback = function(points, currentResolution, targetResolution) {
		return $QuickView_Client_Algorithms_Charts_ResolutionTransformations.$custom(QuickView.Client.Models.Charts.SubRedDataPoint).call(null, points, currentResolution, targetResolution, $QuickView_Client_Algorithms_Charts_QRSubRedAlgorithm.$createDataPoint, $QuickView_Client_Algorithms_Charts_QRSubRedAlgorithm.$addDataPoints);
	};
	$QuickView_Client_Algorithms_Charts_QRSubRedAlgorithm.$createDataPoint = function(time) {
		return QuickView.Client.Models.Charts.SubRedDataPoint.$ctor(time);
	};
	$QuickView_Client_Algorithms_Charts_QRSubRedAlgorithm.$addDataPoints = function(addTo, addFrom) {
		addTo.S += addFrom.S;
		addTo.R += addFrom.R;
		addTo.F += addFrom.F;
	};
	$QuickView_Client_Algorithms_Charts_QRSubRedAlgorithm.$getPoint = function(time, pointDict, pointList) {
		var key = time.toDateTime().valueOf().toString();
		var point = pointDict[key];
		if (ss.isNullOrUndefined(point)) {
			pointDict[key] = point = QuickView.Client.Models.Charts.SubRedDataPoint.$ctor(time);
			pointList.push(point);
		}
		return point;
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Algorithms.Charts.ResolutionTransformations
	var $QuickView_Client_Algorithms_Charts_ResolutionTransformations = function() {
	};
	$QuickView_Client_Algorithms_Charts_ResolutionTransformations.__typeName = 'QuickView.Client.Algorithms.Charts.ResolutionTransformations';
	$QuickView_Client_Algorithms_Charts_ResolutionTransformations.$validateParameters = function(points, currentResolution, targetResolution) {
		JS.ArgumentHelper.notNull(points, 'points');
		if (false === QuickView.Client.Models.Charts.TimeSeriesResolutionExtensions.isTimePeriod(currentResolution)) {
			throw new ss.ArgumentOutOfRangeException('currentResolution', 'The resolution must be time-based (e.g. hourly, daily, monthly, etc.).', null, currentResolution);
		}
		if (false === QuickView.Client.Models.Charts.TimeSeriesResolutionExtensions.isTimePeriod(targetResolution)) {
			throw new ss.ArgumentOutOfRangeException('targetResolution', 'The resolution must be time-based (e.g. hourly, daily, monthly, etc.).', null, targetResolution);
		}
		if (currentResolution > targetResolution) {
			throw new ss.ArgumentException('The current resolution must be higher than the target one.');
		}
		if (currentResolution === 6) {
			throw new ss.ArgumentOutOfRangeException('currentResolution', 'Converting from weekly resolution is not supported.', null, currentResolution);
		}
		if (targetResolution === 6) {
			throw new ss.ArgumentOutOfRangeException('targetResolution', 'Converting to weekly resolution is not supported.', null, targetResolution);
		}
	};
	$QuickView_Client_Algorithms_Charts_ResolutionTransformations.timeCallback = function(time, currentResolution, targetResolution) {
		if (currentResolution < 5 && targetResolution >= 5) {
			// Convert the time of the point to a date first and then round it
			return $QuickView_Client_Algorithms_TimeExtensions.roundTime$1($QuickView_Client_Algorithms_Charts_TradingSession.default$1.getTradingDateByTime(time), targetResolution);
		}
		else {
			return $QuickView_Client_Algorithms_TimeExtensions.roundTime$1(time, targetResolution);
		}
	};
	$QuickView_Client_Algorithms_Charts_ResolutionTransformations.qrTimeCallback = function(time, currentResolution, targetResolution) {
		if (currentResolution < 5 && targetResolution >= 5) {
			// Convert the time of the point to a date first and then round it
			return $QuickView_Client_Algorithms_TimeExtensions.roundTime$1($QuickView_Client_Algorithms_Charts_TradingSession.standard.getTradingDateByTime(time), targetResolution);
		}
		else {
			return $QuickView_Client_Algorithms_TimeExtensions.roundTime$1(time, targetResolution);
		}
	};
	$QuickView_Client_Algorithms_Charts_ResolutionTransformations.$defaultCallback = function(points, currentResolution, targetResolution) {
		$QuickView_Client_Algorithms_Charts_ResolutionTransformations.$validateParameters(points, currentResolution, targetResolution);
		if (currentResolution === targetResolution) {
			// A collection cannot be returned by an iterator 
			return points;
		}
		// "yield" cannot be mixed with directly returned "IEnumerable" instances.
		return $QuickView_Client_Algorithms_Charts_ResolutionTransformations.$privateDefaultCallback(points, currentResolution, targetResolution, $QuickView_Client_Algorithms_Charts_TradingSession.default$1);
	};
	$QuickView_Client_Algorithms_Charts_ResolutionTransformations.$qrDefaultCallback = function(points, currentResolution, targetResolution) {
		$QuickView_Client_Algorithms_Charts_ResolutionTransformations.$validateParameters(points, currentResolution, targetResolution);
		if (currentResolution === targetResolution) {
			// A collection cannot be returned by an iterator 
			return points;
		}
		// "yield" cannot be mixed with directly returned "IEnumerable" instances.
		return $QuickView_Client_Algorithms_Charts_ResolutionTransformations.$privateDefaultCallback(points, currentResolution, targetResolution, $QuickView_Client_Algorithms_Charts_TradingSession.standard);
	};
	$QuickView_Client_Algorithms_Charts_ResolutionTransformations.$privateDefaultCallback = function(points, currentResolution, targetResolution, tradingSession) {
		return new ss.IteratorBlockEnumerable(function() {
			return (function(points, currentResolution, targetResolution, tradingSession) {
				var $result, $state = 0, start, end, checkStart, checkEnd, convertedCumulativeValue, convertedNonCumulativeValue, $t1, point;
				var $finally = function() {
					$t1.dispose();
				};
				return new ss.IteratorBlockEnumerator(function() {
					$sm1:
					for (;;) {
						switch ($state) {
							case 0: {
								$state = -1;
								start = null;
								end = null;
								checkStart = null;
								checkEnd = null;
								convertedCumulativeValue = 0;
								convertedNonCumulativeValue = 0;
								$t1 = ss.getEnumerator(points);
								$state = 4;
								continue $sm1;
							}
							case 4: {
								$state = 2;
								if (!$t1.moveNext()) {
									$state = 3;
									continue $sm1;
								}
								point = $t1.current();
								if (point.P !== 0) {
									// Ignore the point
									$state = 4;
									continue $sm1;
								}
								// This is the first point or the points is outside of the previous period
								if (JS.DateTimeExt.op_Equality$1(start, null) || ss.Nullable$1.liftcmp(JS.DateTimeExt.op_LessThan, point.T, checkStart) || ss.Nullable$1.liftcmp(JS.DateTimeExt.op_GreaterThanOrEqual, point.T, checkEnd)) {
									if (JS.DateTimeExt.op_Inequality$1(start, null)) {
										// This is not the first point so a value exists
										$result = QuickView.Client.Models.Charts.ChartDataPoint.$ctor(ss.unbox(start), convertedCumulativeValue, convertedNonCumulativeValue);
										$state = 6;
										return true;
									}
									$state = 6;
									continue $sm1;
								}
								$state = 5;
								continue $sm1;
							}
							case 3: {
								$state = -1;
								$finally.call(this);
								$state = 1;
								continue $sm1;
							}
							case 1: {
								$state = -1;
								if (JS.DateTimeExt.op_Inequality$1(start, null)) {
									// A value exists
									$result = QuickView.Client.Models.Charts.ChartDataPoint.$ctor(ss.unbox(start), convertedCumulativeValue, convertedNonCumulativeValue);
									$state = -1;
									return true;
								}
								else {
									// The collection was empty
									$state = -1;
									break $sm1;
								}
							}
							case 6: {
								$state = 2;
								if (currentResolution < 5 && targetResolution >= 5) {
									// Convert the time of the point to a date first and then round it
									start = $QuickView_Client_Algorithms_TimeExtensions.roundTime$1(tradingSession.getTradingDateByTime(point.T), targetResolution);
									end = $QuickView_Client_Algorithms_TimeExtensions.advanceTime$1(ss.unbox(start), targetResolution);
									checkStart = tradingSession.getOpenTimeByDate(ss.unbox(start));
									checkEnd = tradingSession.getOpenTimeByDate(ss.unbox(end));
								}
								else {
									start = $QuickView_Client_Algorithms_TimeExtensions.roundTime$1(point.T, targetResolution);
									end = $QuickView_Client_Algorithms_TimeExtensions.advanceTime$1(ss.unbox(start), targetResolution);
									checkStart = start;
									checkEnd = end;
								}
								convertedCumulativeValue = 0;
								convertedNonCumulativeValue = 0;
								$state = 5;
								continue $sm1;
							}
							case 5: {
								$state = 2;
								// The target cumulative value is the last cumulative value of the period
								convertedCumulativeValue = point.C;
								// The target non-cumulative value is sum of all non-cumulative values of the period
								convertedNonCumulativeValue += point.N;
								$state = 4;
								continue $sm1;
							}
							default: {
								break $sm1;
							}
						}
					}
					return false;
				}, function() {
					return $result;
				}, function() {
					try {
						switch ($state) {
							case 2:
							case 3:
							case 4:
							case 5:
							case 6: {
								try {
									break;
								}
								finally {
									$finally.call(this);
								}
							}
						}
					}
					finally {
						$state = -1;
					}
				}, this);
			}).call(this, points, currentResolution, targetResolution, tradingSession);
		}, this);
	};
	$QuickView_Client_Algorithms_Charts_ResolutionTransformations.$monthlyCompoundingCallback = function(points, currentResolution, targetResolution) {
		$QuickView_Client_Algorithms_Charts_ResolutionTransformations.$validateParameters(points, currentResolution, targetResolution);
		if (currentResolution === targetResolution) {
			// A collection cannot be returned by an iterator 
			return points;
		}
		if (targetResolution <= 7) {
			// The implementation is the same
			return $QuickView_Client_Algorithms_Charts_ResolutionTransformations.$defaultCallback(points, currentResolution, targetResolution);
		}
		return $QuickView_Client_Algorithms_Charts_ResolutionTransformations.$privateMonthlyCompoundingCallback(points, currentResolution, targetResolution, $QuickView_Client_Algorithms_Charts_TradingSession.default$1);
	};
	$QuickView_Client_Algorithms_Charts_ResolutionTransformations.$qrMonthlyCompoundingCallback = function(points, currentResolution, targetResolution) {
		$QuickView_Client_Algorithms_Charts_ResolutionTransformations.$validateParameters(points, currentResolution, targetResolution);
		if (currentResolution === targetResolution) {
			// A collection cannot be returned by an iterator 
			return points;
		}
		if (targetResolution <= 7) {
			// The implementation is the same
			return $QuickView_Client_Algorithms_Charts_ResolutionTransformations.$qrDefaultCallback(points, currentResolution, targetResolution);
		}
		return $QuickView_Client_Algorithms_Charts_ResolutionTransformations.$privateMonthlyCompoundingCallback(points, currentResolution, targetResolution, $QuickView_Client_Algorithms_Charts_TradingSession.standard);
	};
	$QuickView_Client_Algorithms_Charts_ResolutionTransformations.$privateMonthlyCompoundingCallback = function(points, currentResolution, targetResolution, tradingSession) {
		return new ss.IteratorBlockEnumerable(function() {
			return (function(points, currentResolution, targetResolution, tradingSession) {
				var $result, $state = 0, monthlyResolutionPoints, start, end, checkStart, checkEnd, convertedCumulativeValue, convertedNonCumulativeValue, $t1, point;
				var $finally = function() {
					$t1.dispose();
				};
				return new ss.IteratorBlockEnumerator(function() {
					$sm1:
					for (;;) {
						switch ($state) {
							case 0: {
								$state = -1;
								// Use compounding
								monthlyResolutionPoints = $QuickView_Client_Algorithms_Charts_ResolutionTransformations.$defaultCallback(points, currentResolution, 7);
								start = null;
								end = null;
								checkStart = null;
								checkEnd = null;
								convertedCumulativeValue = 0;
								convertedNonCumulativeValue = 0;
								$t1 = ss.getEnumerator(monthlyResolutionPoints);
								$state = 4;
								continue $sm1;
							}
							case 4: {
								$state = 2;
								if (!$t1.moveNext()) {
									$state = 3;
									continue $sm1;
								}
								point = $t1.current();
								if (point.P !== 0) {
									// Ignore the point
									$state = 4;
									continue $sm1;
								}
								// This is the first point or the points is outside of the previous period
								if (JS.DateTimeExt.op_Equality$1(start, null) || ss.Nullable$1.liftcmp(JS.DateTimeExt.op_LessThan, point.T, checkStart) || ss.Nullable$1.liftcmp(JS.DateTimeExt.op_GreaterThanOrEqual, point.T, checkEnd)) {
									if (JS.DateTimeExt.op_Inequality$1(start, null)) {
										// This is not the first point so a value exists
										$result = QuickView.Client.Models.Charts.ChartDataPoint.$ctor(ss.unbox(start), convertedCumulativeValue, convertedNonCumulativeValue);
										$state = 6;
										return true;
									}
									$state = 6;
									continue $sm1;
								}
								$state = 5;
								continue $sm1;
							}
							case 3: {
								$state = -1;
								$finally.call(this);
								$state = 1;
								continue $sm1;
							}
							case 1: {
								$state = -1;
								if (JS.DateTimeExt.op_Inequality$1(start, null)) {
									// A value exists
									$result = QuickView.Client.Models.Charts.ChartDataPoint.$ctor(ss.unbox(start), convertedCumulativeValue, convertedNonCumulativeValue);
									$state = -1;
									return true;
								}
								else {
									// The collection was empty
									$state = -1;
									break $sm1;
								}
							}
							case 6: {
								$state = 2;
								if (currentResolution < 5 && targetResolution >= 5) {
									// Convert the time of the point to a date first and then round it
									start = $QuickView_Client_Algorithms_TimeExtensions.roundTime$1(tradingSession.getTradingDateByTime(point.T), targetResolution);
									end = $QuickView_Client_Algorithms_TimeExtensions.advanceTime$1(ss.unbox(start), targetResolution);
									checkStart = tradingSession.getOpenTimeByDate(ss.unbox(start));
									checkEnd = tradingSession.getOpenTimeByDate(ss.unbox(end));
								}
								else {
									start = $QuickView_Client_Algorithms_TimeExtensions.roundTime$1(point.T, targetResolution);
									end = $QuickView_Client_Algorithms_TimeExtensions.advanceTime$1(ss.unbox(start), targetResolution);
									checkStart = start;
									checkEnd = end;
								}
								convertedCumulativeValue = 0;
								convertedNonCumulativeValue = 0;
								$state = 5;
								continue $sm1;
							}
							case 5: {
								$state = 2;
								// The target cumulative value is the last cumulative value of the period
								convertedCumulativeValue = point.C;
								// The target non-cumulative value is sum of all non-cumulative values of the period
								convertedNonCumulativeValue = (convertedNonCumulativeValue + 1) * (point.N + 1) - 1;
								$state = 4;
								continue $sm1;
							}
							default: {
								break $sm1;
							}
						}
					}
					return false;
				}, function() {
					return $result;
				}, function() {
					try {
						switch ($state) {
							case 2:
							case 3:
							case 4:
							case 5:
							case 6: {
								try {
									break;
								}
								finally {
									$finally.call(this);
								}
							}
						}
					}
					finally {
						$state = -1;
					}
				}, this);
			}).call(this, points, currentResolution, targetResolution, tradingSession);
		}, this);
	};
	$QuickView_Client_Algorithms_Charts_ResolutionTransformations.$custom = function(T) {
		return function(points, currentResolution, targetResolution, createEmptyPoint, addPoint) {
			$QuickView_Client_Algorithms_Charts_ResolutionTransformations.$validateParameters(points, currentResolution, targetResolution);
			JS.ArgumentHelper.notNull(createEmptyPoint, 'createEmptyPoint');
			JS.ArgumentHelper.notNull(addPoint, 'accumulatePoints');
			if (currentResolution === targetResolution) {
				// A collection cannot be returned by an iterator 
				return points;
			}
			// "yield" cannot be mixed with directly returned "IEnumerable" instances.
			return $QuickView_Client_Algorithms_Charts_ResolutionTransformations.$privateCustomCallback(T).call(null, points, currentResolution, targetResolution, createEmptyPoint, addPoint);
		};
	};
	$QuickView_Client_Algorithms_Charts_ResolutionTransformations.$privateCustomCallback = function(T) {
		return function(points, currentResolution, targetResolution, createEmptyPoint, addPoint) {
			return new ss.IteratorBlockEnumerable(function() {
				return (function(points, currentResolution, targetResolution, createEmptyPoint, addPoint) {
					var $result, $state = 0, start, end, cumulativePoint, $t1, point;
					var $finally = function() {
						$t1.dispose();
					};
					return new ss.IteratorBlockEnumerator(function() {
						$sm1:
						for (;;) {
							switch ($state) {
								case 0: {
									$state = -1;
									start = null;
									end = null;
									cumulativePoint = null;
									$t1 = ss.getEnumerator(points);
									$state = 4;
									continue $sm1;
								}
								case 4: {
									$state = 2;
									if (!$t1.moveNext()) {
										$state = 3;
										continue $sm1;
									}
									point = $t1.current();
									// This is the first point or the points is outside of the previous period
									if (JS.DateTimeExt.op_Equality$1(start, null) || ss.Nullable$1.liftcmp(JS.DateTimeExt.op_LessThan, point.T, start) || ss.Nullable$1.liftcmp(JS.DateTimeExt.op_GreaterThanOrEqual, point.T, end)) {
										if (JS.DateTimeExt.op_Inequality$1(start, null)) {
											// This is not the first point so a value exists
											$result = cumulativePoint;
											$state = 6;
											return true;
										}
										$state = 6;
										continue $sm1;
									}
									$state = 5;
									continue $sm1;
								}
								case 3: {
									$state = -1;
									$finally.call(this);
									$state = 1;
									continue $sm1;
								}
								case 1: {
									$state = -1;
									if (JS.DateTimeExt.op_Inequality$1(start, null)) {
										// A value exists
										$result = cumulativePoint;
										$state = -1;
										return true;
									}
									else {
										// The collection was empty
										$state = -1;
										break $sm1;
									}
								}
								case 6: {
									$state = 2;
									start = $QuickView_Client_Algorithms_TimeExtensions.roundTime$1(point.T, targetResolution);
									end = $QuickView_Client_Algorithms_TimeExtensions.advanceTime$1(ss.unbox(start), targetResolution);
									cumulativePoint = createEmptyPoint(ss.unbox(start));
									$state = 5;
									continue $sm1;
								}
								case 5: {
									$state = 2;
									addPoint(cumulativePoint, point);
									$state = 4;
									continue $sm1;
								}
								default: {
									break $sm1;
								}
							}
						}
						return false;
					}, function() {
						return $result;
					}, function() {
						try {
							switch ($state) {
								case 2:
								case 3:
								case 4:
								case 5:
								case 6: {
									try {
										break;
									}
									finally {
										$finally.call(this);
									}
								}
							}
						}
						finally {
							$state = -1;
						}
					}, this);
				}).call(this, points, currentResolution, targetResolution, createEmptyPoint, addPoint);
			}, this);
		};
	};
	global.QuickView.Client.Algorithms.Charts.ResolutionTransformations = $QuickView_Client_Algorithms_Charts_ResolutionTransformations;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Algorithms.Charts.StandardTradingSession
	var $QuickView_Client_Algorithms_Charts_StandardTradingSession = function() {
		$QuickView_Client_Algorithms_Charts_TradingSession.call(this);
	};
	$QuickView_Client_Algorithms_Charts_StandardTradingSession.__typeName = 'QuickView.Client.Algorithms.Charts.StandardTradingSession';
	$QuickView_Client_Algorithms_Charts_StandardTradingSession.$getTradingStartAndEndHourByDate = function(date) {
		if (JS.DateTimeExt.op_GreaterThanOrEqual(date, $QuickView_Client_Algorithms_Charts_StandardTradingSession.$trading2016Date)) {
			return $QuickView_Client_Algorithms_Charts_StandardTradingSession.$tradingDateStartAndEndHour2016;
		}
		else {
			return $QuickView_Client_Algorithms_Charts_StandardTradingSession.$tradingDateStartAndEndHour;
		}
	};
	$QuickView_Client_Algorithms_Charts_StandardTradingSession.$getTradingStartAndEndHourByTime = function(time) {
		if (JS.DateTimeExt.op_GreaterThanOrEqual(time, $QuickView_Client_Algorithms_Charts_StandardTradingSession.$trading2016StartTime)) {
			return $QuickView_Client_Algorithms_Charts_StandardTradingSession.$tradingDateStartAndEndHour2016;
		}
		else {
			return $QuickView_Client_Algorithms_Charts_StandardTradingSession.$tradingDateStartAndEndHour;
		}
	};
	$QuickView_Client_Algorithms_Charts_StandardTradingSession.$getHour = function(time) {
		return time.get_hour() + time.get_minute() / 60;
	};
	global.QuickView.Client.Algorithms.Charts.StandardTradingSession = $QuickView_Client_Algorithms_Charts_StandardTradingSession;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Algorithms.Charts.TradingSession
	var $QuickView_Client_Algorithms_Charts_TradingSession = function() {
	};
	$QuickView_Client_Algorithms_Charts_TradingSession.__typeName = 'QuickView.Client.Algorithms.Charts.TradingSession';
	$QuickView_Client_Algorithms_Charts_TradingSession.get = function(type) {
		switch (type) {
			case 0: {
				return $QuickView_Client_Algorithms_Charts_TradingSession.default$1;
			}
			case 1: {
				return $QuickView_Client_Algorithms_Charts_TradingSession.standard;
			}
			default: {
				throw new ss.ArgumentOutOfRangeException('type', 'Invalid value.', null, type);
			}
		}
	};
	$QuickView_Client_Algorithms_Charts_TradingSession.get$1 = function(timeSeries) {
		JS.ArgumentHelper.notNull(timeSeries, 'timeSeries');
		if (timeSeries.S === 'QR') {
			return $QuickView_Client_Algorithms_Charts_TradingSession.standard;
		}
		else {
			return $QuickView_Client_Algorithms_Charts_TradingSession.default$1;
		}
	};
	global.QuickView.Client.Algorithms.Charts.TradingSession = $QuickView_Client_Algorithms_Charts_TradingSession;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Algorithms.Charts.TradingSessionType
	var $QuickView_Client_Algorithms_Charts_TradingSessionType = function() {
	};
	$QuickView_Client_Algorithms_Charts_TradingSessionType.__typeName = 'QuickView.Client.Algorithms.Charts.TradingSessionType';
	global.QuickView.Client.Algorithms.Charts.TradingSessionType = $QuickView_Client_Algorithms_Charts_TradingSessionType;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Algorithms.Colors.ColorInterpolation
	var $QuickView_Client_Algorithms_Colors_ColorInterpolation = function() {
	};
	$QuickView_Client_Algorithms_Colors_ColorInterpolation.__typeName = 'QuickView.Client.Algorithms.Colors.ColorInterpolation';
	$QuickView_Client_Algorithms_Colors_ColorInterpolation.calculateRGBColor = function(minValue, maxValue, value) {
		return $QuickView_Client_Algorithms_Colors_ColorInterpolation.calculateRGBColor$1(minValue, maxValue, value, 0);
	};
	$QuickView_Client_Algorithms_Colors_ColorInterpolation.calculateRGBColor$1 = function(minValue, maxValue, value, spectrumType) {
		return $QuickView_$Client_Algorithms_Colors_ColorInterpolation$RgbColorInterpolator.$interpolate(minValue, maxValue, value, spectrumType);
	};
	global.QuickView.Client.Algorithms.Colors.ColorInterpolation = $QuickView_Client_Algorithms_Colors_ColorInterpolation;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Algorithms.Colors.ColorSpectrumType
	var $QuickView_Client_Algorithms_Colors_ColorSpectrumType = function() {
	};
	$QuickView_Client_Algorithms_Colors_ColorSpectrumType.__typeName = 'QuickView.Client.Algorithms.Colors.ColorSpectrumType';
	global.QuickView.Client.Algorithms.Colors.ColorSpectrumType = $QuickView_Client_Algorithms_Colors_ColorSpectrumType;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Algorithms.Colors.RgbColor
	var $QuickView_Client_Algorithms_Colors_RgbColor = function() {
	};
	$QuickView_Client_Algorithms_Colors_RgbColor.__typeName = 'QuickView.Client.Algorithms.Colors.RgbColor';
	$QuickView_Client_Algorithms_Colors_RgbColor.toHtmlColor = function($this) {
		// For performance reasons String.Format is not used
		return 'rgb(' + $this.red + ',' + $this.green + ',' + $this.blue + ')';
		//return "#" + Red.ToString("X2") + Green.ToString("X2") + Blue.ToString("X2");
	};
	$QuickView_Client_Algorithms_Colors_RgbColor.toHtmlColor$1 = function($this, transparency) {
		// For performance reasons String.Format is not used
		return 'rgba(' + $this.red + ',' + $this.green + ',' + $this.blue + ',' + transparency + ')';
		//return "#" + Red.ToString("X2") + Green.ToString("X2") + Blue.ToString("X2");
	};
	$QuickView_Client_Algorithms_Colors_RgbColor.$ctor = function(red, green, blue) {
		var $this = {};
		$this.red = 0;
		$this.green = 0;
		$this.blue = 0;
		$this.red = red;
		$this.green = green;
		$this.blue = blue;
		return $this;
	};
	$QuickView_Client_Algorithms_Colors_RgbColor.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Algorithms.Colors.RgbColor = $QuickView_Client_Algorithms_Colors_RgbColor;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Algorithms.Colors.RgbColorPair
	var $QuickView_Client_Algorithms_Colors_RgbColorPair = function() {
	};
	$QuickView_Client_Algorithms_Colors_RgbColorPair.__typeName = 'QuickView.Client.Algorithms.Colors.RgbColorPair';
	$QuickView_Client_Algorithms_Colors_RgbColorPair.$ctor = function(foreground, foregroundType, background) {
		var $this = {};
		$this.foreground = null;
		$this.foregroundType = 0;
		$this.background = null;
		$this.foreground = foreground;
		$this.foregroundType = foregroundType;
		$this.background = background;
		return $this;
	};
	$QuickView_Client_Algorithms_Colors_RgbColorPair.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Algorithms.Colors.RgbColorPair = $QuickView_Client_Algorithms_Colors_RgbColorPair;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Algorithms.Colors.RgbColorType
	var $QuickView_Client_Algorithms_Colors_RgbColorType = function() {
	};
	$QuickView_Client_Algorithms_Colors_RgbColorType.__typeName = 'QuickView.Client.Algorithms.Colors.RgbColorType';
	global.QuickView.Client.Algorithms.Colors.RgbColorType = $QuickView_Client_Algorithms_Colors_RgbColorType;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Algorithms.Stats.AlphaBetaResult
	var $QuickView_Client_Algorithms_Stats_$AlphaBetaResult = function() {
	};
	$QuickView_Client_Algorithms_Stats_$AlphaBetaResult.__typeName = 'QuickView.Client.Algorithms.Stats.$AlphaBetaResult';
	$QuickView_Client_Algorithms_Stats_$AlphaBetaResult.$ctor = function(alpha, beta, regression, tStatAlpha, tStatBeta) {
		var $this = {};
		$this.alpha = 0;
		$this.beta = 0;
		$this.regression = 0;
		$this.tStatAlpha = 0;
		$this.tStatBeta = 0;
		$this.alpha = alpha;
		$this.beta = beta;
		$this.regression = regression;
		$this.tStatAlpha = tStatAlpha;
		$this.tStatBeta = tStatBeta;
		return $this;
	};
	$QuickView_Client_Algorithms_Stats_$AlphaBetaResult.isInstanceOfType = function() {
		return true;
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Algorithms.Stats.ConfidenceIntervalResult
	var $QuickView_Client_Algorithms_Stats_$ConfidenceIntervalResult = function() {
	};
	$QuickView_Client_Algorithms_Stats_$ConfidenceIntervalResult.__typeName = 'QuickView.Client.Algorithms.Stats.$ConfidenceIntervalResult';
	$QuickView_Client_Algorithms_Stats_$ConfidenceIntervalResult.$ctor = function(low, high) {
		var $this = {};
		$this.low = null;
		$this.high = null;
		$this.low = low;
		$this.high = high;
		return $this;
	};
	$QuickView_Client_Algorithms_Stats_$ConfidenceIntervalResult.isInstanceOfType = function() {
		return true;
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Algorithms.Stats.CorrelationResult
	var $QuickView_Client_Algorithms_Stats_$CorrelationResult = function() {
	};
	$QuickView_Client_Algorithms_Stats_$CorrelationResult.__typeName = 'QuickView.Client.Algorithms.Stats.$CorrelationResult';
	$QuickView_Client_Algorithms_Stats_$CorrelationResult.$ctor = function(value, sampleCount) {
		var $this = {};
		$this.value = 0;
		$this.sampleCount = 0;
		$this.value = value;
		$this.sampleCount = sampleCount;
		return $this;
	};
	$QuickView_Client_Algorithms_Stats_$CorrelationResult.isInstanceOfType = function() {
		return true;
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Algorithms.Stats.MeanTTestResult
	var $QuickView_Client_Algorithms_Stats_$MeanTTestResult = function() {
	};
	$QuickView_Client_Algorithms_Stats_$MeanTTestResult.__typeName = 'QuickView.Client.Algorithms.Stats.$MeanTTestResult';
	$QuickView_Client_Algorithms_Stats_$MeanTTestResult.$ctor = function(tStat, pValue, lastValueSign) {
		var $this = {};
		$this.tStat = 0;
		$this.pValue = 0;
		$this.lastValueSign = 0;
		$this.tStat = tStat;
		$this.pValue = pValue;
		$this.lastValueSign = lastValueSign;
		return $this;
	};
	$QuickView_Client_Algorithms_Stats_$MeanTTestResult.isInstanceOfType = function() {
		return true;
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Algorithms.Stats.StatAlgorithms
	var $QuickView_Client_Algorithms_Stats_StatAlgorithms = function() {
	};
	$QuickView_Client_Algorithms_Stats_StatAlgorithms.__typeName = 'QuickView.Client.Algorithms.Stats.StatAlgorithms';
	$QuickView_Client_Algorithms_Stats_StatAlgorithms.calculatePercentageStats = function(values, resolution) {
		JS.ArgumentHelper.notNull(values, 'values');
		var perPerYear = $QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$getValuesPerYear(resolution);
		var $t1 = QuickView.Client.Models.Stats.PercentageStats.$ctor1(ss.count(values));
		$t1.C = $QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$CAGR(values, perPerYear);
		$t1.S = $QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$SR(values, perPerYear);
		$t1.V = $QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$volatility(values, perPerYear);
		$t1.A = $QuickView_Client_Algorithms_Stats_StatAlgorithms.$autocorrelation(values);
		var result = $t1;
		var tTest = $QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$meanTTest(values);
		if (ss.isValue(tTest)) {
			result.T = QuickView.Client.Models.Stats.TTestStat.$ctor1(tTest.tStat, tTest.pValue, tTest.lastValueSign);
		}
		return result;
	};
	$QuickView_Client_Algorithms_Stats_StatAlgorithms.calculateUniversalStats = function(values) {
		if (ss.isNullOrUndefined(values)) {
			throw new ss.ArgumentNullException('values');
		}
		var $t1 = QuickView.Client.Models.Stats.UniversalStats.$ctor1(ss.count(values));
		$t1.M = $QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$mean(values);
		$t1.D = $QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$median(values);
		return $t1;
	};
	$QuickView_Client_Algorithms_Stats_StatAlgorithms.correlation = function(returnValues, benchmarkValues, resolution) {
		JS.ArgumentHelper.notNull(returnValues, 'returnValues');
		JS.ArgumentHelper.notNull(benchmarkValues, 'benchmarkValues');
		if (resolution !== 5) {
			throw new ss.ArgumentOutOfRangeException('resolution', 'Only daily resolution is supported.', null, resolution);
		}
		if (ss.count(returnValues) !== ss.count(benchmarkValues)) {
			throw new ss.ArgumentException('The number of elements must be the same in both lists.');
		}
		var count = ss.count(returnValues);
		if (count === 0) {
			return null;
		}
		var pearsonCorrelation = $QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$asyncCorrelation(returnValues, benchmarkValues);
		if (ss.isNullOrUndefined(pearsonCorrelation)) {
			return null;
		}
		var syncCorrelation = $QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$syncCorrelation(returnValues, benchmarkValues);
		if (ss.isNullOrUndefined(syncCorrelation)) {
			return null;
		}
		var pearsonTStat = $QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$correlationTStat(pearsonCorrelation);
		var syncTStat = $QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$correlationTStat(syncCorrelation);
		// Calculate alpha and beta
		var straightAB = null;
		var reverseAB = null;
		{
			// The "perPerYear" argument should be "252" for daily returns.
			// Information from Mihai
			var perPerYear = $QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$getValuesPerYear(resolution);
			var rf = 0;
			// Risk-free rate
			var straight = $QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$alphaBeta(benchmarkValues, returnValues, rf, perPerYear);
			var reverse = $QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$alphaBeta(returnValues, benchmarkValues, rf, perPerYear);
			if (ss.isNullOrUndefined(straight) || ss.isNullOrUndefined(reverse)) {
				return null;
			}
			var $t1 = QuickView.Client.Models.Stats.AlphaBetaStats.$ctor();
			$t1.R = straight.regression;
			$t1.T = straight.tStatAlpha;
			$t1.S = straight.tStatBeta;
			var straightStats = $t1;
			var $t2 = QuickView.Client.Models.Stats.AlphaBetaStats.$ctor();
			$t2.R = reverse.regression;
			$t2.T = reverse.tStatAlpha;
			$t2.S = reverse.tStatBeta;
			var reverseStats = $t2;
			straightStats.I = $QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$informationRatio(returnValues, benchmarkValues, perPerYear);
			reverseStats.I = $QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$informationRatio(benchmarkValues, returnValues, perPerYear);
			var pfOpt = $QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$pfOpt(returnValues, benchmarkValues, perPerYear);
			if (ss.isValue(pfOpt)) {
				straightStats.A = pfOpt.item1;
				straightStats.B = pfOpt.item2;
				reverseStats.A = pfOpt.item2;
				reverseStats.B = pfOpt.item1;
			}
			straightAB = QuickView.Client.Models.Stats.AlphaBetaValue.$ctor1(Math.pow(1 + straight.alpha, perPerYear) - 1, straight.beta, ss.count(returnValues), straightStats);
			reverseAB = QuickView.Client.Models.Stats.AlphaBetaValue.$ctor1(Math.pow(1 + reverse.alpha, perPerYear) - 1, reverse.beta, ss.count(returnValues), reverseStats);
		}
		var covariance = $QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$sampleCovariance(returnValues, benchmarkValues);
		// Covariance is a symmetric function
		var correlationStats = QuickView.Client.Models.Stats.CorrelationStats.$ctor1(covariance, pearsonTStat, syncTStat);
		return QuickView.Client.Models.Stats.CorrelationValue.$ctor1(pearsonCorrelation.value, syncCorrelation.value, count, correlationStats, straightAB, reverseAB);
	};
	$QuickView_Client_Algorithms_Stats_StatAlgorithms.$autocorrelation = function(list) {
		var Lag = 1;
		if (ss.isNullOrUndefined(list)) {
			throw new ss.ArgumentNullException('list');
		}
		if (ss.count(list) <= Lag) {
			return null;
		}
		var autocorrelation = $QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$autocorrelation(Enumerable.from(list).toArray(), Lag);
		if (ss.isNullOrUndefined(autocorrelation)) {
			return null;
		}
		else {
			var confidenceInterval = $QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods.$correlationConfidenceInterval(autocorrelation);
			return QuickView.Client.Models.Stats.AutocorrelationStat.$ctor1(autocorrelation.value, autocorrelation.sampleCount, confidenceInterval.low, confidenceInterval.high);
		}
	};
	global.QuickView.Client.Algorithms.Stats.StatAlgorithms = $QuickView_Client_Algorithms_Stats_StatAlgorithms;
	////////////////////////////////////////////////////////////////////////////////
	// System.Array2
	var $System_$Array2 = function() {
	};
	$System_$Array2.__typeName = 'System.$Array2';
	$System_$Array2.$reverse = function(T) {
		return function(array) {
			if (ss.isNullOrUndefined(array)) {
				return null;
			}
			var result = ss.arrayClone(array);
			result.reverse();
			return result;
		};
	};
	$System_$Array2.$copy = function(T) {
		return function(sourceArray, destinationArray, length) {
			for (var k = 0; k < length; k++) {
				destinationArray[k] = sourceArray[k];
			}
		};
	};
	$System_$Array2.$copy$1 = function(T) {
		return function(sourceArray, sourceIndex, destinationArray, destinationIndex, length) {
			for (var k = 0; k < length; k++) {
				destinationArray[k + destinationIndex] = sourceArray[k + sourceIndex];
			}
		};
	};
	////////////////////////////////////////////////////////////////////////////////
	// System.BitConverter
	var $System_$BitConverter = function() {
	};
	$System_$BitConverter.__typeName = 'System.$BitConverter';
	$System_$BitConverter.get_$isLittleEndian = function() {
		throw new ss.NotImplementedException();
	};
	$System_$BitConverter.$getBytes$1 = function(value) {
		throw new ss.NotImplementedException();
	};
	$System_$BitConverter.$getBytes = function(value) {
		throw new ss.NotImplementedException();
	};
	$System_$BitConverter.$toDouble = function(array, index) {
		throw new ss.NotImplementedException();
	};
	$System_$BitConverter.$toInt32 = function(array, index) {
		throw new ss.NotImplementedException();
	};
	////////////////////////////////////////////////////////////////////////////////
	// System.Double2
	var $System_$Double2 = function() {
	};
	$System_$Double2.__typeName = 'System.$Double2';
	$System_$Double2.$isInfinity = function(value) {
		return false === isFinite(value);
	};
	$System_$Double2.$isPositiveInfinity = function(value) {
		return value === Number.POSITIVE_INFINITY;
	};
	$System_$Double2.$isNegativeInfinity = function(value) {
		return value === Number.NEGATIVE_INFINITY;
	};
	////////////////////////////////////////////////////////////////////////////////
	// System.HashSet
	var $System_$HashSet$1 = function(T) {
		var $type = function() {
			this.$_dict = null;
			this.$_dict = new (ss.makeGenericType(ss.Dictionary$2, [T, Object]))();
		};
		ss.registerGenericClassInstance($type, $System_$HashSet$1, [T], {
			$add: function(value) {
				this.$_dict.set_item(value, $type.$dbNull);
			},
			getEnumerator: function() {
				return null;
			}
		}, function() {
			return null;
		}, function() {
			return [ss.IEnumerable, ss.IEnumerable];
		});
		$type.$dbNull = new Object();
		return $type;
	};
	$System_$HashSet$1.__typeName = 'System.$HashSet$1';
	ss.initGenericClass($System_$HashSet$1, $asm, 1);
	ss.initClass($$ExtensionMethods, $asm, {});
	ss.initClass($QuickView_$Client_Algorithms_Charts_AggregationAlgorithm$ItemData, $asm, {});
	ss.initEnum($QuickView_$Client_Algorithms_Charts_QRReturnsAlgorithm$CalculationMethod, $asm, { default: 'default' }, true);
	ss.initEnum($QuickView_$Client_Algorithms_Charts_QRPositionsAlgorithm$CalculationMethod, $asm, { default: 'default' }, true);
	ss.initClass($QuickView_$Client_Algorithms_Colors_ColorInterpolation$RgbColorInterpolator, $asm, {});
	ss.initClass($QuickView_$Client_Algorithms_Stats_StatAlgorithms$AlgLib, $asm, {});
	ss.initClass($QuickView_$Client_Algorithms_Stats_StatAlgorithms$AlgLib$LocalMath, $asm, {});
	ss.initClass($QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods, $asm, {});
	ss.initClass($QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods$CPowerUtilFunc, $asm, {
		$certaintyEquivalent: function(dUtil) {
			var dCE;
			dUtil /= this.$_perPerYear;
			if (dUtil < this.$_threshUtil) {
				var a = this.$_coef2, b = this.$_coef1, c = this.$_threshUtil - dUtil;
				var dDescriminant = b * (b - 4 * c * (a / b));
				if (!isNaN(dDescriminant) && dDescriminant < Number.MAX_VALUE && dDescriminant > 0) {
					var dQ = -0.5 * (b + ((b > 0) ? 1 : ((b < 0) ? -1 : 0)) * Math.sqrt(dDescriminant));
					var dX1 = dQ / a;
					var dX2 = c / dQ;
					var dW1 = dX1 + this.$_zeroWealthThreshold;
					var dW2 = dX2 + this.$_zeroWealthThreshold;
					dCE = Math.min(dW1, dW2);
				}
				else {
					dCE = 0;
				}
			}
			else if (this.$_alpha === -1) {
				dCE = -1 / (dUtil - 1);
			}
			else if (this.$_alpha === 0) {
				dCE = Math.exp(dUtil);
			}
			else {
				dCE = Math.pow(this.$_alpha * dUtil + 1, 1 / this.$_alpha);
			}
			if (isNaN(dCE)) {
				return null;
			}
			// Handle bankruptcy by setting the certainty equivalent of loosing more than the entire wealth equivalent to the certainty equivalent of loosing the entire wealth
			if (dCE < 0) {
				dCE = 0;
			}
			dCE = Math.pow(dCE, this.$_perPerYear) - 1;
			return dCE;
		},
		$util: function(dWealth) {
			var dUtil;
			if (dWealth < this.$_zeroWealthThreshold) {
				var dW0 = dWealth - this.$_zeroWealthThreshold;
				dUtil = this.$_threshUtil + this.$_coef1 * dW0 + this.$_coef2 * dW0 * dW0;
			}
			else if (this.$_alpha === -1) {
				dUtil = 1 - 1 / dWealth;
			}
			else if (this.$_alpha === 0) {
				dUtil = Math.log(dWealth);
			}
			else {
				dUtil = (Math.pow(dWealth, this.$_alpha) - 1) / this.$_alpha;
			}
			dUtil *= this.$_perPerYear;
			return dUtil;
		},
		$utilAndDUtil: function(dWealth, dUtilDWealth) {
			var dUtil;
			if (dWealth < this.$_zeroWealthThreshold) {
				var dW0 = dWealth - this.$_zeroWealthThreshold;
				dUtilDWealth.$ = this.$_coef1 + this.$_dCoef2 * dW0;
				dUtil = this.$_threshUtil + this.$_coef1 * dW0 + this.$_coef2 * dW0 * dW0;
			}
			else if (this.$_alpha === -1) {
				dUtilDWealth.$ = 1 / (dWealth * dWealth);
				dUtil = 1 - 1 / dWealth;
			}
			else if (this.$_alpha === 0) {
				dUtilDWealth.$ = 1 / dWealth;
				dUtil = Math.log(dWealth);
			}
			else {
				dUtilDWealth.$ = Math.pow(dWealth, this.$_alpha - 1);
				dUtil = (Math.pow(dWealth, this.$_alpha) - 1) / this.$_alpha;
			}
			dUtil *= this.$_perPerYear;
			dUtilDWealth.$ *= this.$_perPerYear;
			return dUtil;
		}
	});
	ss.initClass($QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods$StandardNormalTable, $asm, {});
	ss.initClass($QuickView_Client_Algorithms_DateTimeExtensions, $asm, {});
	ss.initClass($QuickView_Client_Algorithms_TextAlgorithms, $asm, {});
	ss.initClass($QuickView_Client_Algorithms_TimeExtensions, $asm, {});
	ss.initClass($QuickView_Client_Algorithms_TimeUtils, $asm, {});
	ss.initClass($QuickView_Client_Algorithms_Charts_$LocalUtils, $asm, {});
	ss.initClass($QuickView_Client_Algorithms_Charts_ChartAlgorithmBase, $asm, {
		get_name: function() {
			if (ss.isNullOrUndefined(this.$_name)) {
				var typeName = ss.getTypeName(ss.getInstanceType(this));
				if (ss.endsWithString(typeName, 'Algorithm')) {
					typeName = typeName.substr(0, typeName.length - 'Algorithm'.length);
				}
				if (ss.startsWithString(typeName, '$')) {
					typeName = typeName.substring(1);
				}
				this.$_name = typeName;
			}
			return this.$_name;
		},
		run: function(parameters, start, end, resolution, dataPoints) {
			JS.ArgumentHelper.notNull(parameters, 'parameters');
			JS.ArgumentHelper.notNull(dataPoints, 'dataPoints');
			return this.runCore($QuickView_Client_Algorithms_Charts_AlgorithmParameterList.$ctor(parameters), start, end, resolution, dataPoints);
		},
		runCore: null
	});
	ss.initClass($QuickView_Client_Algorithms_Charts_AccumulationAlgorithm, $asm, {
		runCore: function(parameters, start, end, resolution, dataPoints) {
			var seriesID = $QuickView_Client_Algorithms_Charts_AlgorithmParameterList.getValue(parameters, 'Series');
			var seriesDataPoints = dataPoints[seriesID];
			JS.Diagnostics.Debug.assert(ss.isValue(seriesDataPoints));
			var dataPointList = seriesDataPoints.dataPoints;
			return ss.makeGenericType($QuickView_Client_Algorithms_Charts_ChartAlgorithmResult$1, [QuickView.Client.Models.Charts.ChartDataPoint]).$ctor1(2, $QuickView_Client_Algorithms_Charts_DataPointsTransformations.accumulation.transform($QuickView_Client_Algorithms_Charts_DataPointsTransformationInput.$ctor(dataPointList)), resolution, $QuickView_Client_Algorithms_Charts_ResolutionTransformations.default$1);
		}
	}, $QuickView_Client_Algorithms_Charts_ChartAlgorithmBase);
	ss.initClass($QuickView_Client_Algorithms_Charts_AggregationAlgorithm, $asm, {
		runCore: function(parameters, start, end, resolution, dataPoints) {
			var timeSeriesIDListText = $QuickView_Client_Algorithms_Charts_AlgorithmParameterList.getValue(parameters, 'Series');
			var timeSeriesIDList = timeSeriesIDListText.split(String.fromCharCode(44));
			var resolutionParameter;
			var resolutionParameterText = $QuickView_Client_Algorithms_Charts_AlgorithmParameterList.getValue$1(parameters, 'Resolution', null);
			if (ss.isNullOrEmptyString(resolutionParameterText)) {
				resolutionParameter = resolution;
			}
			else {
				resolutionParameter = QuickView.Client.Models.Charts.TimeSeriesResolutionHelpers.fromName(resolutionParameterText);
			}
			var result = [];
			// Performance optimization (proved by tests)
			var itemList = new Array(timeSeriesIDList.length);
			for (var k = 0; k < timeSeriesIDList.length; k++) {
				var timeSeriesID = timeSeriesIDList[k];
				// Dictionary lookup is slow so it should be avoided in a cycle
				var itemDataPointList = dataPoints[timeSeriesID].dataPoints;
				itemList[k] = $QuickView_$Client_Algorithms_Charts_AggregationAlgorithm$ItemData.$ctor(timeSeriesID, itemDataPointList);
			}
			// Checks if the resolution of the time series is a time period or evently
			var isTimePeriodResolution = QuickView.Client.Models.Charts.TimeSeriesResolutionExtensions.isTimePeriod(resolution);
			for (var time = start, nextTime = $QuickView_Client_Algorithms_TimeExtensions.advanceTime$1(start, resolutionParameter); JS.DateTimeExt.op_LessThan(time, end); time = nextTime, nextTime = $QuickView_Client_Algorithms_TimeExtensions.advanceTime$1(nextTime, resolutionParameter)) {
				var sum = 0;
				var sumExists = false;
				for (var k1 = 0; k1 < itemList.length; k1++) {
					var itemData = itemList[k1];
					var itemIndex = itemData.index;
					// Performance optimization (proved by tests)
					var itemDataPointList1 = itemData.dataPoints;
					// Performance optimization (proved by tests)
					while (itemIndex < ss.count(itemDataPointList1) && JS.DateTimeExt.op_LessThan(ss.getItem(itemDataPointList1, itemIndex).T, time)) {
						itemIndex++;
					}
					itemData.index = itemIndex;
					if (itemIndex >= ss.count(itemDataPointList1)) {
						// There are no more points for these series
						continue;
					}
					if (isTimePeriodResolution) {
						// Supports only time period resolution - this is implemented separately for
						// performance reasons
						var itemDataPoint = ss.getItem(itemDataPointList1, itemIndex);
						if (JS.DateTimeExt.op_GreaterThanOrEqual(itemDataPoint.T, time) && JS.DateTimeExt.op_LessThan(itemDataPoint.T, nextTime)) {
							sum += itemDataPoint.V;
							sumExists = true;
						}
					}
					else {
						// New implementation - supports both time period and evently resolution
						while (itemIndex < ss.count(itemDataPointList1) && JS.DateTimeExt.op_LessThan(ss.getItem(itemDataPointList1, itemIndex).T, nextTime)) {
							var itemDataPoint1 = ss.getItem(itemDataPointList1, itemIndex);
							sum += itemDataPoint1.V;
							sumExists = true;
							itemIndex++;
						}
					}
				}
				if (sumExists) {
					var dataPoint = QuickView.Client.Models.Charts.TimeSeriesDataPoint.$ctor(time, sum);
					result.push(dataPoint);
				}
			}
			return ss.makeGenericType($QuickView_Client_Algorithms_Charts_ChartAlgorithmResult$1, [QuickView.Client.Models.Charts.TimeSeriesDataPoint]).$ctor(1, ss.makeGenericType($QuickView_Client_Algorithms_Charts_DataPointsTransformationOutput$1, [QuickView.Client.Models.Charts.TimeSeriesDataPoint]).$ctor(result), resolutionParameter);
		}
	}, $QuickView_Client_Algorithms_Charts_ChartAlgorithmBase);
	ss.initClass($QuickView_Client_Algorithms_Charts_AlgorithmParameterList, $asm, {});
	ss.initClass($QuickView_Client_Algorithms_Charts_BMReturnsAlgorithm, $asm, {
		runCore: function(parameters, start, end, resolution, dataPoints) {
			var timeSeriesID = $QuickView_Client_Algorithms_Charts_AlgorithmParameterList.getValue(parameters, 'Series');
			var itemDataPointList = dataPoints[timeSeriesID].dataPoints;
			return ss.makeGenericType($QuickView_Client_Algorithms_Charts_ChartAlgorithmResult$1, [QuickView.Client.Models.Charts.ChartDataPoint]).$ctor1(2, $QuickView_Client_Algorithms_Charts_DataPointsTransformations.monthlyCompoundingAccumulation.transform($QuickView_Client_Algorithms_Charts_DataPointsTransformationInput.$ctor(itemDataPointList)), resolution, $QuickView_Client_Algorithms_Charts_ResolutionTransformations.monthlyCompounding);
		}
	}, $QuickView_Client_Algorithms_Charts_ChartAlgorithmBase);
	ss.initClass($QuickView_Client_Algorithms_Charts_ChartAlgorithmInput, $asm, {});
	ss.initClass($QuickView_Client_Algorithms_Charts_ChartAlgorithmResult, $asm, {});
	ss.initEnum($QuickView_Client_Algorithms_Charts_ChartAlgorithmResultType, $asm, { unspecified: 0, timeSeriesDataPoints: 1, chartDataPoints: 2, customDataPoints: 3 });
	ss.initClass($QuickView_Client_Algorithms_Charts_ChartAlgorithms, $asm, {});
	ss.initClass($QuickView_Client_Algorithms_Charts_DataPointsTransformationInput, $asm, {});
	ss.initClass($QuickView_Client_Algorithms_Charts_DataPointsTransformations, $asm, {});
	ss.initClass($QuickView_Client_Algorithms_Charts_TradingSession, $asm, { getOpenTimeByDate: null, getClosingTimeByDate: null, getOpenTimeByTime: null, getClosingTimeByTime: null, getTradingDateByTime: null });
	ss.initClass($QuickView_Client_Algorithms_Charts_DefaultTradingSession, $asm, {
		getOpenTimeByDate: function(date) {
			date = date.toUniversalTime();
			return date.get_date();
		},
		getClosingTimeByDate: function(date) {
			date = date.toUniversalTime();
			return date.get_date().addDays(1);
		},
		getOpenTimeByTime: function(time) {
			time = time.toUniversalTime();
			return time.get_date();
		},
		getClosingTimeByTime: function(time) {
			time = time.toUniversalTime();
			return time.get_date().addDays(1);
		},
		getTradingDateByTime: function(time) {
			time = time.toUniversalTime();
			return time.get_date();
		}
	}, $QuickView_Client_Algorithms_Charts_TradingSession);
	ss.initClass($QuickView_Client_Algorithms_Charts_DifferenceAlgorithm, $asm, {
		runCore: function(parameters, start, end, resolution, dataPoints) {
			var seriesID = $QuickView_Client_Algorithms_Charts_AlgorithmParameterList.getValue(parameters, 'Series');
			var seriesDataPoints = dataPoints[seriesID];
			JS.Diagnostics.Debug.assert(ss.isValue(seriesDataPoints));
			var dataPointList = seriesDataPoints.dataPoints;
			return ss.makeGenericType($QuickView_Client_Algorithms_Charts_ChartAlgorithmResult$1, [QuickView.Client.Models.Charts.ChartDataPoint]).$ctor1(2, $QuickView_Client_Algorithms_Charts_DataPointsTransformations.difference.transform($QuickView_Client_Algorithms_Charts_DataPointsTransformationInput.$ctor1(dataPointList, seriesDataPoints.initialValue)), resolution, $QuickView_Client_Algorithms_Charts_ResolutionTransformations.default$1);
		}
	}, $QuickView_Client_Algorithms_Charts_ChartAlgorithmBase);
	ss.initClass($QuickView_Client_Algorithms_Charts_DrawdownAlgorithm, $asm, {});
	ss.initClass($QuickView_Client_Algorithms_Charts_IdentityAlgorithm, $asm, {
		runCore: function(parameters, start, end, resolution, dataPoints) {
			var timeSeriesID = $QuickView_Client_Algorithms_Charts_AlgorithmParameterList.getValue(parameters, 'Series');
			var itemDataPointList = dataPoints[timeSeriesID].dataPoints;
			var returnValue = ss.makeGenericType($QuickView_Client_Algorithms_Charts_ChartAlgorithmResult$1, [QuickView.Client.Models.Charts.TimeSeriesDataPoint]).$ctor(1, ss.makeGenericType($QuickView_Client_Algorithms_Charts_DataPointsTransformationOutput$1, [QuickView.Client.Models.Charts.TimeSeriesDataPoint]).$ctor(itemDataPointList), resolution);
			return returnValue;
		}
	}, $QuickView_Client_Algorithms_Charts_ChartAlgorithmBase);
	ss.initClass($QuickView_Client_Algorithms_Charts_IONReturnsAlgorithm, $asm, {
		runCore: function(parameters, start, end, resolution, dataPoints) {
			var returnsTimeSeriesID = $QuickView_Client_Algorithms_Charts_AlgorithmParameterList.getValue(parameters, 'Returns');
			var aumTimeSeriesID = $QuickView_Client_Algorithms_Charts_AlgorithmParameterList.getValue(parameters, 'AuM');
			var returnsDataPoints = dataPoints[returnsTimeSeriesID];
			var aumDataPoints = dataPoints[aumTimeSeriesID];
			JS.Diagnostics.Debug.assert(ss.isValue(returnsDataPoints));
			JS.Diagnostics.Debug.assert(ss.isValue(aumDataPoints));
			var dataPointList = returnsDataPoints.dataPoints;
			var aumDataPointList = aumDataPoints.dataPoints;
			var result = [];
			var aumIndex = { $: 0 };
			var $t1 = ss.getEnumerator(dataPointList);
			try {
				while ($t1.moveNext()) {
					var item = $t1.current();
					var time = item.T;
					$QuickView_Client_Algorithms_Charts_$LocalUtils.$advanceDataPointsIndex(aumDataPointList, time, aumIndex);
					if (aumIndex.$ >= ss.count(aumDataPointList)) {
						// No more points
						break;
					}
					var aumItem = ss.getItem(aumDataPointList, aumIndex.$);
					if (JS.DateTimeExt.op_Equality(aumItem.T, time) && aumItem.V > 0) {
						var value = item.V / aumItem.V;
						var dataPoint = QuickView.Client.Models.Charts.TimeSeriesDataPoint.$ctor(time, value);
						result.push(dataPoint);
					}
				}
			}
			finally {
				$t1.dispose();
			}
			return ss.makeGenericType($QuickView_Client_Algorithms_Charts_ChartAlgorithmResult$1, [QuickView.Client.Models.Charts.ChartDataPoint]).$ctor1(2, $QuickView_Client_Algorithms_Charts_DataPointsTransformations.compoundingAccumulation.transform($QuickView_Client_Algorithms_Charts_DataPointsTransformationInput.$ctor(result)), resolution, $QuickView_Client_Algorithms_Charts_ResolutionTransformations.default$1);
		}
	}, $QuickView_Client_Algorithms_Charts_ChartAlgorithmBase);
	ss.initClass($QuickView_Client_Algorithms_Charts_QRHighWaterMarkAlgorithm, $asm, {
		get_name: function() {
			return 'QRHWM';
		},
		runCore: function(parameters, start, end, resolution, dataPoints) {
			var hwmTimeSeriesID = $QuickView_Client_Algorithms_Charts_AlgorithmParameterList.getValue(parameters, 'HWM');
			var performanceFeesTimeSeriesID = $QuickView_Client_Algorithms_Charts_AlgorithmParameterList.getValue(parameters, 'PerformanceFees');
			var sharesCountTimeSeriesID = $QuickView_Client_Algorithms_Charts_AlgorithmParameterList.getValue(parameters, 'SharesCount');
			var hwmTimeSeries = dataPoints[hwmTimeSeriesID];
			var performanceFeesTimeSeries = dataPoints[performanceFeesTimeSeriesID];
			var sharesCountTimeSeries = dataPoints[sharesCountTimeSeriesID];
			JS.Diagnostics.Debug.assert(ss.isValue(hwmTimeSeries));
			JS.Diagnostics.Debug.assert(ss.isValue(performanceFeesTimeSeries));
			JS.Diagnostics.Debug.assert(ss.isValue(sharesCountTimeSeries));
			var hwmTimeSeriesDataPointList = hwmTimeSeries.dataPoints;
			var performanceFeesTimeSeriesDataPointList = performanceFeesTimeSeries.dataPoints;
			var sharesCountTimeSeriesDataPointList = sharesCountTimeSeries.dataPoints;
			if (ss.count(hwmTimeSeriesDataPointList) === 0 || ss.count(performanceFeesTimeSeriesDataPointList) === 0 || ss.count(sharesCountTimeSeriesDataPointList) === 0) {
				return ss.makeGenericType($QuickView_Client_Algorithms_Charts_ChartAlgorithmResult$1, [QuickView.Client.Models.Charts.HwmDataPoint]).$ctor(3, ss.makeGenericType($QuickView_Client_Algorithms_Charts_DataPointsTransformationOutput$1, [QuickView.Client.Models.Charts.HwmDataPoint]).$ctor([]), resolution);
			}
			var result = [];
			var hwmIndex = { $: 0 };
			var sharesCountIndex = { $: 0 };
			var $t1 = ss.getEnumerator(performanceFeesTimeSeriesDataPointList);
			try {
				while ($t1.moveNext()) {
					var feesItem = $t1.current();
					if (feesItem.V <= 0) {
						// Process only months where there is performance fee
						continue;
					}
					// Compare months instead of exact time as "Shares Count" can be in daily resolution
					// while the rest of the data does not have a resolution
					var time = $QuickView_Client_Algorithms_TimeExtensions.roundTime$1(feesItem.T, 7);
					$QuickView_Client_Algorithms_Charts_$LocalUtils.$advanceDataPointsIndex(hwmTimeSeriesDataPointList, time, hwmIndex);
					$QuickView_Client_Algorithms_Charts_$LocalUtils.$advanceDataPointsIndex(sharesCountTimeSeriesDataPointList, time, sharesCountIndex);
					if (hwmIndex.$ >= ss.count(hwmTimeSeriesDataPointList) || sharesCountIndex.$ >= ss.count(sharesCountTimeSeriesDataPointList)) {
						// No more points
						break;
					}
					var hwmDataPoint = ss.getItem(hwmTimeSeriesDataPointList, hwmIndex.$);
					var sharesCountDataPoint = ss.getItem(sharesCountTimeSeriesDataPointList, sharesCountIndex.$);
					if ($QuickView_Client_Algorithms_DateTimeExtensions.isSameMonth(hwmDataPoint.T, time) && $QuickView_Client_Algorithms_DateTimeExtensions.isSameMonth(sharesCountDataPoint.T, time)) {
						var hwm = hwmDataPoint.V;
						var perfFees = feesItem.V;
						var totalPerfFees = perfFees * sharesCountDataPoint.V;
						var dataPoint = QuickView.Client.Models.Charts.HwmDataPoint.$ctor(time, hwm, perfFees, totalPerfFees);
						result.push(dataPoint);
					}
				}
			}
			finally {
				$t1.dispose();
			}
			return ss.makeGenericType($QuickView_Client_Algorithms_Charts_ChartAlgorithmResult$1, [QuickView.Client.Models.Charts.HwmDataPoint]).$ctor(3, ss.makeGenericType($QuickView_Client_Algorithms_Charts_DataPointsTransformationOutput$1, [QuickView.Client.Models.Charts.HwmDataPoint]).$ctor(result), resolution);
		}
	}, $QuickView_Client_Algorithms_Charts_ChartAlgorithmBase);
	ss.initClass($QuickView_Client_Algorithms_Charts_QRInitialValueAlgorithm, $asm, {
		runCore: function(parameters, start, end, resolution, dataPoints) {
			var timeSeriesID = $QuickView_Client_Algorithms_Charts_AlgorithmParameterList.getValue(parameters, 'Series');
			var intradayTimeSeriesID = $QuickView_Client_Algorithms_Charts_AlgorithmParameterList.getValue$1(parameters, 'IntradaySeries', null);
			var initialTimeSeriesID = $QuickView_Client_Algorithms_Charts_AlgorithmParameterList.getValue(parameters, 'InitialValueSeries');
			var timeSeriesData = dataPoints[timeSeriesID];
			var intradayTimeSeriesData = (ss.isNullOrEmptyString(intradayTimeSeriesID) ? null : dataPoints[intradayTimeSeriesID]);
			var initialTimeSeriesData = dataPoints[initialTimeSeriesID];
			JS.Diagnostics.Debug.assert(ss.isValue(timeSeriesData));
			JS.Diagnostics.Debug.assert(ss.isValue(initialTimeSeriesData));
			var dataPointList = timeSeriesData.dataPoints;
			var intradayDataPointList = (ss.isNullOrUndefined(intradayTimeSeriesData) ? null : intradayTimeSeriesData.dataPoints);
			var initialDataPointList = initialTimeSeriesData.dataPoints;
			var isIntradayDataAvailable = ss.isValue(intradayDataPointList) && ss.count(intradayDataPointList) > 0;
			if (ss.count(dataPointList) === 0 && false === isIntradayDataAvailable || ss.count(initialDataPointList) === 0) {
				// No changes to the data
				return ss.makeGenericType($QuickView_Client_Algorithms_Charts_ChartAlgorithmResult$1, [QuickView.Client.Models.Charts.ChartDataPoint]).$ctor1(2, $QuickView_Client_Algorithms_Charts_DataPointsTransformations.difference.transform($QuickView_Client_Algorithms_Charts_DataPointsTransformationInput.$ctor(dataPointList)), resolution, $QuickView_Client_Algorithms_Charts_ResolutionTransformations.qrDefault);
			}
			var intradayStart = null;
			var intradayEnd = null;
			var dataPointEnum;
			if (isIntradayDataAvailable && resolution === 5) {
				intradayStart = $QuickView_Client_Algorithms_Charts_TradingSession.standard.getTradingDateByTime(ss.getItem(intradayDataPointList, 0).T);
				intradayEnd = $QuickView_Client_Algorithms_Charts_TradingSession.standard.getTradingDateByTime(ss.getItem(intradayDataPointList, ss.count(intradayDataPointList) - 1).T);
				// If dataPointList.Count == 0 then all data must come from the intraday values.
				// It is possible that a daily value is not supplied for the same date as for the intraday data.
				var lastDataPoint = ((ss.count(dataPointList) === 0) ? null : ss.getItem(dataPointList, ss.count(dataPointList) - 1));
				var newList = [];
				for (var time = ss.unbox(intradayStart); JS.DateTimeExt.op_LessThanOrEqual(time, ss.unbox(intradayEnd)); time = $QuickView_Client_Algorithms_TimeExtensions.advanceTime$1(time, 5)) {
					// Add points that cover the intraday data; it is possible that a daily value is not supplied
					// for the same date as for the intraday data.
					if (ss.isNullOrUndefined(lastDataPoint) || JS.DateTimeExt.op_LessThan(lastDataPoint.T, time)) {
						// The value of the point will be calculated in the cycle below
						var dataPoint = QuickView.Client.Models.Charts.TimeSeriesDataPoint.$ctor(time, 0);
						newList.push(dataPoint);
					}
				}
				dataPointEnum = Enumerable.from(dataPointList).concat(newList);
			}
			else {
				dataPointEnum = dataPointList;
			}
			var resultList = [];
			var initialValue = null;
			// The current month
			var month = null;
			// Indicates if the initial value has been added for the current month
			var monthIntialValueAdded = false;
			// The data point from the previous iteration
			var previousDataPoint = null;
			var $t1 = ss.getEnumerator(dataPointEnum);
			try {
				while ($t1.moveNext()) {
					var item = $t1.current();
					var monthTestTime = {};
					if (QuickView.Client.Models.Charts.TimeSeriesResolutionExtensions.isIntraday(resolution)) {
						monthTestTime.$ = $QuickView_Client_Algorithms_Charts_TradingSession.standard.getTradingDateByTime(item.T);
					}
					else {
						monthTestTime.$ = item.T;
					}
					if (JS.DateTimeExt.op_Equality$1(month, null) || false === $QuickView_Client_Algorithms_DateTimeExtensions.isSameMonth(ss.unbox(month), monthTestTime.$)) {
						month = monthTestTime.$;
						monthIntialValueAdded = false;
					}
					// By default use the previous data point to calculate the difference
					var previousDataPointForDifference = previousDataPoint;
					if (false === monthIntialValueAdded) {
						// Find the value for the current month
						var initialDataPoint = Enumerable.from(initialDataPointList).firstOrDefault(ss.mkdel({ monthTestTime: monthTestTime }, function(x) {
							return $QuickView_Client_Algorithms_DateTimeExtensions.isSameMonth(x.T, this.monthTestTime.$);
						}), ss.getDefaultValue(QuickView.Client.Models.Charts.TimeSeriesDataPoint));
						if (ss.isValue(initialDataPoint)) {
							if (resultList.length === 0) {
								// This is the first data point so use set the initial value instead of adding a data point
								initialValue = initialDataPoint.V;
							}
							else {
								var additionalDataPointTime = previousDataPoint.T;
								if (false === QuickView.Client.Models.Charts.TimeSeriesResolutionExtensions.isIntraday(resolution)) {
									if ($QuickView_Client_Algorithms_DateTimeExtensions.isLastDayOfMonth(additionalDataPointTime)) {
										// There is no need to add any additional value except the additional point
									}
									else {
										// Move to the last day of the month
										additionalDataPointTime = $QuickView_Client_Algorithms_DateTimeExtensions.toLastDayOfMonth(additionalDataPointTime);
										// Add an additional point at the end of the month that duplicates the previous point
										resultList.push(QuickView.Client.Models.Charts.ChartDataPoint.$ctor1(additionalDataPointTime, previousDataPoint.V, 0, 1));
									}
								}
								// Add a data point with the time of the previous point
								resultList.push(QuickView.Client.Models.Charts.ChartDataPoint.$ctor1(additionalDataPointTime, initialDataPoint.V, initialDataPoint.V - previousDataPoint.V, 1));
							}
							// Use the initial data point to calculate the difference
							previousDataPointForDifference = initialDataPoint;
						}
						monthIntialValueAdded = true;
					}
					if (ss.isNullOrUndefined(previousDataPointForDifference)) {
						// If this is the first data point and there is no initial data point then use the
						// current data point as to calculate the difference (the result will obviously be zero).
						previousDataPointForDifference = item;
					}
					var itemTime = item.T;
					var itemValue;
					if (JS.DateTimeExt.op_Inequality$1(intradayStart, null) && JS.DateTimeExt.op_Inequality$1(intradayEnd, null) && ss.Nullable$1.liftcmp(JS.DateTimeExt.op_LessThanOrEqual, intradayStart, itemTime) && ss.Nullable$1.liftcmp(JS.DateTimeExt.op_LessThanOrEqual, itemTime, intradayEnd)) {
						// Calculate the current data point out of intraday data
						var tradingSessionStart = { $: $QuickView_Client_Algorithms_Charts_TradingSession.standard.getOpenTimeByDate(itemTime) };
						var tradingSessionEnd = { $: $QuickView_Client_Algorithms_Charts_TradingSession.standard.getClosingTimeByDate(itemTime) };
						var lastIntradayDataPoint = Enumerable.from(intradayDataPointList).where(ss.mkdel({ tradingSessionStart: tradingSessionStart, tradingSessionEnd: tradingSessionEnd }, function(x1) {
							return JS.DateTimeExt.op_GreaterThanOrEqual(x1.T, this.tradingSessionStart.$) && JS.DateTimeExt.op_LessThan(x1.T, this.tradingSessionEnd.$);
						})).lastOrDefault(null, ss.getDefaultValue(QuickView.Client.Models.Charts.TimeSeriesDataPoint));
						itemValue = (ss.isNullOrUndefined(lastIntradayDataPoint) ? item.V : lastIntradayDataPoint.V);
					}
					else {
						itemValue = item.V;
					}
					var chartDataPoint = QuickView.Client.Models.Charts.ChartDataPoint.$ctor(itemTime, itemValue, itemValue - previousDataPointForDifference.V);
					resultList.push(chartDataPoint);
					previousDataPoint = item;
				}
			}
			finally {
				$t1.dispose();
			}
			return ss.makeGenericType($QuickView_Client_Algorithms_Charts_ChartAlgorithmResult$1, [QuickView.Client.Models.Charts.ChartDataPoint]).$ctor1(2, ss.makeGenericType($QuickView_Client_Algorithms_Charts_DataPointsTransformationOutput$1, [QuickView.Client.Models.Charts.ChartDataPoint]).$ctor1(resultList, initialValue), resolution, $QuickView_Client_Algorithms_Charts_ResolutionTransformations.qrDefault);
		}
	}, $QuickView_Client_Algorithms_Charts_ChartAlgorithmBase);
	ss.initClass($QuickView_Client_Algorithms_Charts_QRReturnsAlgorithm, $asm, {
		runCore: function(parameters, start, end, resolution, dataPoints) {
			var method = ss.cast(ss.Enum.parse($QuickView_$Client_Algorithms_Charts_QRReturnsAlgorithm$CalculationMethod, $QuickView_Client_Algorithms_Charts_AlgorithmParameterList.getValue$1(parameters, 'Method', 'default'.toString()).toLowerCase()), String);
			var returnsTimeSeriesID = $QuickView_Client_Algorithms_Charts_AlgorithmParameterList.getValue(parameters, 'Returns');
		    // Intraday data to be used to calculate up-to-the-minute daily value when the current resolution is daily
			var intradayReturnsTimeSeriesID = $QuickView_Client_Algorithms_Charts_AlgorithmParameterList.getValue$1(parameters, 'IntradayReturns', null);
			var investmentIntialValueTimeSeriesID = $QuickView_Client_Algorithms_Charts_AlgorithmParameterList.getValue(parameters, 'InvestmentInitialValue');
			var returnsDataPoints = dataPoints[returnsTimeSeriesID];
			var intradayReturnsDataPoints = (ss.isNullOrEmptyString(intradayReturnsTimeSeriesID) ? null : dataPoints[intradayReturnsTimeSeriesID]);
			var investmentIntialValueDataPoints = dataPoints[investmentIntialValueTimeSeriesID];
			JS.Diagnostics.Debug.assert(ss.isValue(returnsDataPoints));
			JS.Diagnostics.Debug.assert(ss.isValue(investmentIntialValueDataPoints));
			var dataPointList = returnsDataPoints.dataPoints;
			var intradayDataPointList = (ss.isNullOrUndefined(intradayReturnsDataPoints) ? null : intradayReturnsDataPoints.dataPoints);
			var investmentIntialValueDataPointList = investmentIntialValueDataPoints.dataPoints;
			var isIntradayDataAvailable = ss.isValue(intradayDataPointList) && ss.count(intradayDataPointList) > 0;
			if (method !== 'default') {
				throw new ss.ArgumentException(ss.formatString("The specified calculation method '{0}' is not supported.", method), 'parameters');
			}
			var intradayStart = null;
			var intradayEnd = null;
			var dataPointEnum;
			if (isIntradayDataAvailable && resolution === 5) {
				intradayStart = $QuickView_Client_Algorithms_Charts_TradingSession.standard.getTradingDateByTime(ss.getItem(intradayDataPointList, 0).T);
				intradayEnd = $QuickView_Client_Algorithms_Charts_TradingSession.standard.getTradingDateByTime(ss.getItem(intradayDataPointList, ss.count(intradayDataPointList) - 1).T);
				// If dataPointList.Count == 0 then all data must come from the intraday values.
				// It is possible that a daily value is not supplied for the same date as for the intraday data.
				var lastDataPoint = ((ss.count(dataPointList) === 0) ? null : ss.getItem(dataPointList, ss.count(dataPointList) - 1));
				var newList = [];
				for (var time = ss.unbox(intradayStart); JS.DateTimeExt.op_LessThanOrEqual(time, ss.unbox(intradayEnd)); time = $QuickView_Client_Algorithms_TimeExtensions.advanceTime$1(time, 5)) {
					// Add points that cover the intraday data; it is possible that a daily value is not supplied
					// for the same date as for the intraday data.
					if (ss.isNullOrUndefined(lastDataPoint) || JS.DateTimeExt.op_LessThan(lastDataPoint.T, time)) {
						// The value of the point will be calculated in the cycle below
						var dataPoint = QuickView.Client.Models.Charts.TimeSeriesDataPoint.$ctor(time, 0);
						newList.push(dataPoint);
					}
				}
				dataPointEnum = Enumerable.from(dataPointList).concat(newList);
			}
			else {
				dataPointEnum = dataPointList;
			}
			var result = [];
			// The current month
			var month = null;
			// The initial investment data point for the current month
			var monthInitialInvestmentDataPoint = null;
			var $t1 = ss.getEnumerator(dataPointEnum);
			try {
				while ($t1.moveNext()) {
					var item = $t1.current();
					var time1 = item.T;
					var monthTestTime = {};
					if (QuickView.Client.Models.Charts.TimeSeriesResolutionExtensions.isIntraday(resolution)) {
						monthTestTime.$ = $QuickView_Client_Algorithms_Charts_TradingSession.standard.getTradingDateByTime(time1);
					}
					else {
						monthTestTime.$ = time1;
					}
					if (JS.DateTimeExt.op_Equality$1(month, null) || false === $QuickView_Client_Algorithms_DateTimeExtensions.isSameMonth(ss.unbox(month), monthTestTime.$)) {
						month = monthTestTime.$;
						if (QuickView.Client.Models.Charts.TimeSeriesResolutionExtensions.isTimePeriod(investmentIntialValueDataPoints.resolution)) {
							// Get the last value from the previous period
							monthInitialInvestmentDataPoint = Enumerable.from(investmentIntialValueDataPointList).lastOrDefault(ss.mkdel({ monthTestTime: monthTestTime }, function(x) {
								return JS.DateTimeExt.op_LessThan(x.T, this.monthTestTime.$);
							}), ss.getDefaultValue(QuickView.Client.Models.Charts.TimeSeriesDataPoint));
							if (ss.isNullOrUndefined(monthInitialInvestmentDataPoint) && ss.isValue(investmentIntialValueDataPoints.initialValue)) {
								// Use the initial value
								// The time is irrelevant so any value can be used
								monthInitialInvestmentDataPoint = QuickView.Client.Models.Charts.TimeSeriesDataPoint.$ctor(JS.DateTimeExt.get_utcNow(), ss.unbox(investmentIntialValueDataPoints.initialValue));
								// TODO Debug: Remove
								//ExtConsole.Info("INITIAL VALUE USED: " + investmentIntialValueDataPoints.InitialValue);
							}
							else if (ss.isValue(monthInitialInvestmentDataPoint)) {
								// TODO Debug: Remove
								//ExtConsole.Info(string.Format("VALUE USED: {0} - {1}", monthInitialInvestmentDataPoint.Time, monthInitialInvestmentDataPoint.Value));
							}
						}
						else {
							// Get the first value from the same month
							monthInitialInvestmentDataPoint = Enumerable.from(investmentIntialValueDataPointList).firstOrDefault(ss.mkdel({ monthTestTime: monthTestTime }, function(x1) {
								return $QuickView_Client_Algorithms_DateTimeExtensions.isSameMonth(x1.T, this.monthTestTime.$);
							}), ss.getDefaultValue(QuickView.Client.Models.Charts.TimeSeriesDataPoint));
						}
						if (ss.isNullOrUndefined(monthInitialInvestmentDataPoint)) {
							// Find the last available value whose time is before the current value
							for (var k = 0; k < ss.count(investmentIntialValueDataPointList); k++) {
								var x2 = ss.getItem(investmentIntialValueDataPointList, k);
								if (JS.DateTimeExt.op_GreaterThan(x2.T, monthTestTime.$)) {
									// Ignore values that are after the current value
									break;
								}
								monthInitialInvestmentDataPoint = x2;
							}
						}
					}
					if (ss.isNullOrUndefined(monthInitialInvestmentDataPoint)) {
						// Returns cannot be calculated
						continue;
					}
					var initialInvestmentDataPoint = monthInitialInvestmentDataPoint;
					if (initialInvestmentDataPoint.V !== 0) {
						var returnsDataPointValue;
						if (JS.DateTimeExt.op_Inequality$1(intradayStart, null) && JS.DateTimeExt.op_Inequality$1(intradayEnd, null) && ss.Nullable$1.liftcmp(JS.DateTimeExt.op_LessThanOrEqual, intradayStart, time1) && ss.Nullable$1.liftcmp(JS.DateTimeExt.op_LessThanOrEqual, time1, intradayEnd)) {
							// Calculate the current data point out of intraday data
							var tradingSessionStart = { $: $QuickView_Client_Algorithms_Charts_TradingSession.standard.getOpenTimeByDate(time1) };
							var tradingSessionEnd = { $: $QuickView_Client_Algorithms_Charts_TradingSession.standard.getClosingTimeByDate(time1) };
							returnsDataPointValue = Enumerable.from(intradayDataPointList).where(ss.mkdel({ tradingSessionStart: tradingSessionStart, tradingSessionEnd: tradingSessionEnd }, function(x3) {
								return JS.DateTimeExt.op_GreaterThanOrEqual(x3.T, this.tradingSessionStart.$) && JS.DateTimeExt.op_LessThan(x3.T, this.tradingSessionEnd.$);
							})).sum(function(x4) {
								return x4.V;
							});
						}
						else {
							returnsDataPointValue = item.V;
						}
						var value = returnsDataPointValue / initialInvestmentDataPoint.V;
						var dataPoint1 = QuickView.Client.Models.Charts.TimeSeriesDataPoint.$ctor(time1, value);
						result.push(dataPoint1);
					}
				}
			}
			finally {
				$t1.dispose();
			}
			return ss.makeGenericType($QuickView_Client_Algorithms_Charts_ChartAlgorithmResult$1, [QuickView.Client.Models.Charts.ChartDataPoint]).$ctor1(2, $QuickView_Client_Algorithms_Charts_DataPointsTransformations.monthlyCompoundingAccumulation.transform($QuickView_Client_Algorithms_Charts_DataPointsTransformationInput.$ctor(result)), resolution, $QuickView_Client_Algorithms_Charts_ResolutionTransformations.qrMonthlyCompounding);
		}
	}, $QuickView_Client_Algorithms_Charts_ChartAlgorithmBase);
	ss.initClass($QuickView_Client_Algorithms_Charts_QRPositionsAlgorithm, $asm, {
	    runCore: function(parameters, start, end, resolution, dataPoints) {
	        var timeSeriesID = $QuickView_Client_Algorithms_Charts_AlgorithmParameterList.getValue(parameters, 'Series');
	        var itemDataPointList = dataPoints[timeSeriesID].dataPoints;
	        var returnValue = ss.makeGenericType($QuickView_Client_Algorithms_Charts_ChartAlgorithmResult$1, [QuickView.Client.Models.Charts.TimeSeriesDataPoint]).$ctor(1, ss.makeGenericType($QuickView_Client_Algorithms_Charts_DataPointsTransformationOutput$1, [QuickView.Client.Models.Charts.TimeSeriesDataPoint]).$ctor(itemDataPointList), resolution);
	        return returnValue;
	    }
	}, $QuickView_Client_Algorithms_Charts_ChartAlgorithmBase);
	ss.initClass($QuickView_Client_Algorithms_Charts_QRSubRedAlgorithm, $asm, {
		get_name: function() {
			return 'QRSubscriptionsRedemptions';
		},
		runCore: function(parameters, start, end, resolution, dataPoints) {
			var subTimeSeriesID = $QuickView_Client_Algorithms_Charts_AlgorithmParameterList.getValue(parameters, 'Subscriptions');
			var redTimeSeriesID = $QuickView_Client_Algorithms_Charts_AlgorithmParameterList.getValue(parameters, 'Redemptions');
			var feeTimeSeriesID = $QuickView_Client_Algorithms_Charts_AlgorithmParameterList.getValue(parameters, 'FeeReinvestment');
			var subTimeSeries = dataPoints[subTimeSeriesID];
			var redTimeSeries = dataPoints[redTimeSeriesID];
			var feeTimeSeries = dataPoints[feeTimeSeriesID];
			JS.Diagnostics.Debug.assert(ss.isValue(subTimeSeries));
			JS.Diagnostics.Debug.assert(ss.isValue(redTimeSeries));
			JS.Diagnostics.Debug.assert(ss.isValue(feeTimeSeries));
			var subTimeSeriesDataPointList = subTimeSeries.dataPoints;
			var redTimeSeriesDataPointList = redTimeSeries.dataPoints;
			var feeTimeSeriesDataPointList = feeTimeSeries.dataPoints;
			var pointDict = {};
			var pointList = [];
			var $t1 = ss.getEnumerator(subTimeSeriesDataPointList);
			try {
				while ($t1.moveNext()) {
					var item = $t1.current();
					var point = $QuickView_Client_Algorithms_Charts_QRSubRedAlgorithm.$getPoint(item.T, pointDict, pointList);
					point.S += item.V;
				}
			}
			finally {
				$t1.dispose();
			}
			var $t2 = ss.getEnumerator(redTimeSeriesDataPointList);
			try {
				while ($t2.moveNext()) {
					var item1 = $t2.current();
					// Values returned by the API are always for the first day of a month, e.g. 2014-10-01 12:00am.
					// However, redemption should be considered for the previous month since they have taken place at its end.
					// Subscriptions also takes place at the end of the previous month, however, they are for the next month.
					var time = $QuickView_Client_Algorithms_TimeExtensions.advanceTime$4(item1.T, 7, -1);
					if (JS.DateTimeExt.op_LessThan(time, start)) {
						continue;
					}
					var point1 = $QuickView_Client_Algorithms_Charts_QRSubRedAlgorithm.$getPoint(time, pointDict, pointList);
					point1.R += item1.V;
				}
			}
			finally {
				$t2.dispose();
			}
			var $t3 = ss.getEnumerator(feeTimeSeriesDataPointList);
			try {
				while ($t3.moveNext()) {
					var item2 = $t3.current();
					var point2 = $QuickView_Client_Algorithms_Charts_QRSubRedAlgorithm.$getPoint(item2.T, pointDict, pointList);
					point2.F += item2.V;
				}
			}
			finally {
				$t3.dispose();
			}
			// Sort the list
			pointList.sort(function(a, b) {
				return a.T.compareTo(b.T);
			});
			return ss.makeGenericType($QuickView_Client_Algorithms_Charts_ChartAlgorithmResult$1, [QuickView.Client.Models.Charts.SubRedDataPoint]).$ctor1(3, ss.makeGenericType($QuickView_Client_Algorithms_Charts_DataPointsTransformationOutput$1, [QuickView.Client.Models.Charts.SubRedDataPoint]).$ctor(pointList), 5, $QuickView_Client_Algorithms_Charts_QRSubRedAlgorithm.$resolutionTransformation);
		}
	}, $QuickView_Client_Algorithms_Charts_ChartAlgorithmBase);
	ss.initClass($QuickView_Client_Algorithms_Charts_ResolutionTransformations, $asm, {});
	ss.initClass($QuickView_Client_Algorithms_Charts_StandardTradingSession, $asm, {
		getOpenTimeByDate: function(date) {
			var startAndEndHour = $QuickView_Client_Algorithms_Charts_StandardTradingSession.$getTradingStartAndEndHourByDate(date);
			date = date.toUniversalTime();
			// The open time is set to 9pm UTC on the previous day
			return date.get_date().addHours(-24 + startAndEndHour);
		},
		getClosingTimeByDate: function(date) {
			var startAndEndHour = $QuickView_Client_Algorithms_Charts_StandardTradingSession.$getTradingStartAndEndHourByDate(date);
			date = date.toUniversalTime();
			// The close time is set to 9pm UTC on the current day
			return date.get_date().addHours(startAndEndHour);
		},
		getOpenTimeByTime: function(time) {
			var startAndEndHour = $QuickView_Client_Algorithms_Charts_StandardTradingSession.$getTradingStartAndEndHourByTime(time);
			time = time.toUniversalTime();
			var hour = $QuickView_Client_Algorithms_Charts_StandardTradingSession.$getHour(time);
			if (hour < startAndEndHour) {
				// The open time is set to 9pm UTC on the previous day
				return time.get_date().addHours(-24 + startAndEndHour);
			}
			else {
				return time.get_date().addHours(startAndEndHour);
			}
		},
		getClosingTimeByTime: function(time) {
			var startAndEndHour = $QuickView_Client_Algorithms_Charts_StandardTradingSession.$getTradingStartAndEndHourByTime(time);
			time = time.toUniversalTime();
			var hour = $QuickView_Client_Algorithms_Charts_StandardTradingSession.$getHour(time);
			if (hour < startAndEndHour) {
				// The close time is set to 9pm UTC on the current day
				return time.get_date().addHours(startAndEndHour);
			}
			else {
				return time.get_date().addHours(24 + startAndEndHour);
			}
		},
		getTradingDateByTime: function(time) {
			var startAndEndHour = $QuickView_Client_Algorithms_Charts_StandardTradingSession.$getTradingStartAndEndHourByTime(time);
			time = time.toUniversalTime();
			var hour = $QuickView_Client_Algorithms_Charts_StandardTradingSession.$getHour(time);
			if (hour < startAndEndHour) {
				return time.get_date();
			}
			else {
				return time.get_date().addHours(24);
			}
		}
	}, $QuickView_Client_Algorithms_Charts_TradingSession);
	ss.initEnum($QuickView_Client_Algorithms_Charts_TradingSessionType, $asm, { default$1: 0, standard: 1 });
	ss.initClass($QuickView_Client_Algorithms_Colors_ColorInterpolation, $asm, {});
	ss.initEnum($QuickView_Client_Algorithms_Colors_ColorSpectrumType, $asm, { normal: 0, twoTone: 1 });
	ss.initClass($QuickView_Client_Algorithms_Colors_RgbColor, $asm, {});
	ss.initClass($QuickView_Client_Algorithms_Colors_RgbColorPair, $asm, {});
	ss.initEnum($QuickView_Client_Algorithms_Colors_RgbColorType, $asm, { light: 0, dark: 1 });
	ss.initClass($QuickView_Client_Algorithms_Stats_$AlphaBetaResult, $asm, {});
	ss.initClass($QuickView_Client_Algorithms_Stats_$ConfidenceIntervalResult, $asm, {});
	ss.initClass($QuickView_Client_Algorithms_Stats_$CorrelationResult, $asm, {});
	ss.initClass($QuickView_Client_Algorithms_Stats_$MeanTTestResult, $asm, {});
	ss.initClass($QuickView_Client_Algorithms_Stats_StatAlgorithms, $asm, {});
	ss.initClass($System_$Array2, $asm, {});
	ss.initClass($System_$BitConverter, $asm, {});
	ss.initClass($System_$Double2, $asm, {});
	(function() {
		$QuickView_$Client_Algorithms_Colors_ColorInterpolation$RgbColorInterpolator.$blackColor = $QuickView_Client_Algorithms_Colors_RgbColor.$ctor(0, 0, 0);
		$QuickView_$Client_Algorithms_Colors_ColorInterpolation$RgbColorInterpolator.$whiteColor = $QuickView_Client_Algorithms_Colors_RgbColor.$ctor(255, 255, 255);
		$QuickView_$Client_Algorithms_Colors_ColorInterpolation$RgbColorInterpolator.$lightGrayColor = $QuickView_Client_Algorithms_Colors_RgbColor.$ctor(211, 211, 211);
		$QuickView_$Client_Algorithms_Colors_ColorInterpolation$RgbColorInterpolator.$null = $QuickView_Client_Algorithms_Colors_RgbColorPair.$ctor($QuickView_$Client_Algorithms_Colors_ColorInterpolation$RgbColorInterpolator.$blackColor, 1, $QuickView_$Client_Algorithms_Colors_ColorInterpolation$RgbColorInterpolator.$lightGrayColor);
	})();
	(function() {
		$QuickView_$Client_Algorithms_Stats_StatAlgorithms$AlgLib$LocalMath.$rndObject = new ss.Random((new Date()).getMilliseconds() + 1000 * (new Date()).getSeconds() + 60000 * (new Date()).getMinutes());
	})();
	(function() {
		$QuickView_$Client_Algorithms_Stats_StatAlgorithms$StatMethods$StandardNormalTable.$zTable = [0.5, 0.504, 0.508, 0.512, 0.516, 0.5199, 0.5239, 0.5279, 0.5319, 0.5359, 0.5398, 0.5438, 0.5478, 0.5517, 0.5557, 0.5596, 0.5636, 0.5675, 0.5714, 0.5753, 0.5793, 0.5832, 0.5871, 0.591, 0.5948, 0.5987, 0.6026, 0.6064, 0.6103, 0.6141, 0.6179, 0.6217, 0.6255, 0.6293, 0.6331, 0.6368, 0.6406, 0.6443, 0.648, 0.6517, 0.6554, 0.6591, 0.6628, 0.6664, 0.67, 0.6736, 0.6772, 0.6808, 0.6844, 0.6879, 0.6915, 0.695, 0.6985, 0.7019, 0.7054, 0.7088, 0.7123, 0.7157, 0.719, 0.7224, 0.7257, 0.7291, 0.7324, 0.7357, 0.7389, 0.7422, 0.7454, 0.7486, 0.7517, 0.7549, 0.758, 0.7611, 0.7642, 0.7673, 0.7704, 0.7734, 0.7764, 0.7794, 0.7823, 0.7852, 0.7881, 0.791, 0.7939, 0.7967, 0.7995, 0.8023, 0.8051, 0.8078, 0.8106, 0.8133, 0.8159, 0.8186, 0.8212, 0.8238, 0.8264, 0.8289, 0.8315, 0.834, 0.8365, 0.8389, 0.8413, 0.8438, 0.8461, 0.8485, 0.8508, 0.8531, 0.8554, 0.8577, 0.8599, 0.8621, 0.8643, 0.8665, 0.8686, 0.8708, 0.8729, 0.8749, 0.877, 0.879, 0.881, 0.883, 0.8849, 0.8869, 0.8888, 0.8907, 0.8925, 0.8944, 0.8962, 0.898, 0.8997, 0.9015, 0.9032, 0.9049, 0.9066, 0.9082, 0.9099, 0.9115, 0.9131, 0.9147, 0.9162, 0.9177, 0.9192, 0.9207, 0.9222, 0.9236, 0.9251, 0.9265, 0.9279, 0.9292, 0.9306, 0.9319, 0.9332, 0.9345, 0.9357, 0.937, 0.9382, 0.9394, 0.9406, 0.9418, 0.9429, 0.9441, 0.9452, 0.9463, 0.9474, 0.9484, 0.9495, 0.9505, 0.9515, 0.9525, 0.9535, 0.9545, 0.9554, 0.9564, 0.9573, 0.9582, 0.9591, 0.9599, 0.9608, 0.9616, 0.9625, 0.9633, 0.9641, 0.9649, 0.9656, 0.9664, 0.9671, 0.9678, 0.9686, 0.9693, 0.9699, 0.9706, 0.9713, 0.9719, 0.9726, 0.9732, 0.9738, 0.9744, 0.975, 0.9756, 0.9761, 0.9767, 0.9772, 0.9778, 0.9783, 0.9788, 0.9793, 0.9798, 0.9803, 0.9808, 0.9812, 0.9817, 0.9821, 0.9826, 0.983, 0.9834, 0.9838, 0.9842, 0.9846, 0.985, 0.9854, 0.9857, 0.9861, 0.9864, 0.9868, 0.9871, 0.9875, 0.9878, 0.9881, 0.9884, 0.9887, 0.989, 0.9893, 0.9896, 0.9898, 0.9901, 0.9904, 0.9906, 0.9909, 0.9911, 0.9913, 0.9916, 0.9918, 0.992, 0.9922, 0.9925, 0.9927, 0.9929, 0.9931, 0.9932, 0.9934, 0.9936, 0.9938, 0.994, 0.9941, 0.9943, 0.9945, 0.9946, 0.9948, 0.9949, 0.9951, 0.9952, 0.9953, 0.9955, 0.9956, 0.9957, 0.9959, 0.996, 0.9961, 0.9962, 0.9963, 0.9964, 0.9965, 0.9966, 0.9967, 0.9968, 0.9969, 0.997, 0.9971, 0.9972, 0.9973, 0.9974, 0.9974, 0.9975, 0.9976, 0.9977, 0.9977, 0.9978, 0.9979, 0.9979, 0.998, 0.9981, 0.9981, 0.9982, 0.9982, 0.9983, 0.9984, 0.9984, 0.9985, 0.9985, 0.9986, 0.9986, 0.9987, 0.9987, 0.9987, 0.9988, 0.9988, 0.9989, 0.9989, 0.9989, 0.999, 0.999];
	})();
	(function() {
		$QuickView_Client_Algorithms_Charts_DataPointsTransformations.accumulation = new (ss.makeGenericType($QuickView_Client_Algorithms_Charts_CallbackChartDataPointsTransformation$1, [QuickView.Client.Models.Charts.ChartDataPoint]))($QuickView_Client_Algorithms_Charts_DataPointsTransformations.$accumulationCallback);
		$QuickView_Client_Algorithms_Charts_DataPointsTransformations.compoundingAccumulation = new (ss.makeGenericType($QuickView_Client_Algorithms_Charts_CallbackChartDataPointsTransformation$1, [QuickView.Client.Models.Charts.ChartDataPoint]))($QuickView_Client_Algorithms_Charts_DataPointsTransformations.$compoundingAccumulationCallback);
		$QuickView_Client_Algorithms_Charts_DataPointsTransformations.monthlyCompoundingAccumulation = new (ss.makeGenericType($QuickView_Client_Algorithms_Charts_CallbackChartDataPointsTransformation$1, [QuickView.Client.Models.Charts.ChartDataPoint]))($QuickView_Client_Algorithms_Charts_DataPointsTransformations.$monthlyCompoundingAccumulationCallback);
		$QuickView_Client_Algorithms_Charts_DataPointsTransformations.difference = new (ss.makeGenericType($QuickView_Client_Algorithms_Charts_CallbackChartDataPointsTransformation$1, [QuickView.Client.Models.Charts.ChartDataPoint]))($QuickView_Client_Algorithms_Charts_DataPointsTransformations.$differenceCallback);
	})();
	(function() {
		$QuickView_Client_Algorithms_Charts_StandardTradingSession.$tradingDateStartAndEndHour = 21;
		$QuickView_Client_Algorithms_Charts_StandardTradingSession.$tradingDateStartAndEndHour2016 = 21.5;
		$QuickView_Client_Algorithms_Charts_StandardTradingSession.$trading2016Date = new JS.DateTimeExt.$ctor5(2016, 1, 1, 0, 0, 0, 1);
		$QuickView_Client_Algorithms_Charts_StandardTradingSession.$trading2016StartTime = new JS.DateTimeExt.$ctor5(2015, 12, 31, 9, 30, 0, 1);
	})();
	(function() {
		$QuickView_Client_Algorithms_Charts_TradingSession.default$1 = new $QuickView_Client_Algorithms_Charts_DefaultTradingSession();
		$QuickView_Client_Algorithms_Charts_TradingSession.standard = new $QuickView_Client_Algorithms_Charts_StandardTradingSession();
	})();
	(function() {
		$QuickView_Client_Algorithms_Charts_ResolutionTransformations.default$1 = new (ss.makeGenericType($QuickView_Client_Algorithms_Charts_$CallbackResolutionTransformation$1, [QuickView.Client.Models.Charts.ChartDataPoint]))($QuickView_Client_Algorithms_Charts_ResolutionTransformations.$defaultCallback, $QuickView_Client_Algorithms_Charts_ResolutionTransformations.timeCallback);
		$QuickView_Client_Algorithms_Charts_ResolutionTransformations.monthlyCompounding = new (ss.makeGenericType($QuickView_Client_Algorithms_Charts_$CallbackResolutionTransformation$1, [QuickView.Client.Models.Charts.ChartDataPoint]))($QuickView_Client_Algorithms_Charts_ResolutionTransformations.$monthlyCompoundingCallback, $QuickView_Client_Algorithms_Charts_ResolutionTransformations.timeCallback);
		$QuickView_Client_Algorithms_Charts_ResolutionTransformations.qrDefault = new (ss.makeGenericType($QuickView_Client_Algorithms_Charts_$CallbackResolutionTransformation$1, [QuickView.Client.Models.Charts.ChartDataPoint]))($QuickView_Client_Algorithms_Charts_ResolutionTransformations.$qrDefaultCallback, $QuickView_Client_Algorithms_Charts_ResolutionTransformations.qrTimeCallback);
		$QuickView_Client_Algorithms_Charts_ResolutionTransformations.qrMonthlyCompounding = new (ss.makeGenericType($QuickView_Client_Algorithms_Charts_$CallbackResolutionTransformation$1, [QuickView.Client.Models.Charts.ChartDataPoint]))($QuickView_Client_Algorithms_Charts_ResolutionTransformations.$qrMonthlyCompoundingCallback, $QuickView_Client_Algorithms_Charts_ResolutionTransformations.qrTimeCallback);
	})();
	(function() {
		$QuickView_Client_Algorithms_Charts_ChartAlgorithms.$_algorithmDict = null;
	})();
	(function() {
		$QuickView_Client_Algorithms_Charts_QRSubRedAlgorithm.$resolutionTransformation = new (ss.makeGenericType($QuickView_Client_Algorithms_Charts_$CallbackResolutionTransformation$1, [QuickView.Client.Models.Charts.SubRedDataPoint]))($QuickView_Client_Algorithms_Charts_QRSubRedAlgorithm.$resolutionTransformationCallback, $QuickView_Client_Algorithms_Charts_ResolutionTransformations.qrTimeCallback);
	})();
})();
