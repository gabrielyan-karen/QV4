(function() {
	'use strict';
	var $asm = {};
	global.QuickView = global.QuickView || {};
	global.QuickView.Client = global.QuickView.Client || {};
	global.QuickView.Client.UI = global.QuickView.Client.UI || {};
	global.QuickView.Client.UI.Common = global.QuickView.Client.UI.Common || {};
	global.QuickView.Client.UI.Common.Data = global.QuickView.Client.UI.Common.Data || {};
	global.QuickView.Client.UI.Common.Grid = global.QuickView.Client.UI.Common.Grid || {};
	global.QuickView.Client.UI.Common.Settings = global.QuickView.Client.UI.Common.Settings || {};
	ss.initAssembly($asm, 'QuickView.Client.UI.Common');
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.UIServices.FastScrollingDisabled
	var $QuickView_$Client_UI_Common_UIServices$FastScrollingDisabled = function() {
		this.$_disposed = false;
	};
	$QuickView_$Client_UI_Common_UIServices$FastScrollingDisabled.__typeName = 'QuickView.$Client.UI.Common.UIServices$FastScrollingDisabled';
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.UIServices.NopDisposable
	var $QuickView_$Client_UI_Common_UIServices$NopDisposable = function() {
	};
	$QuickView_$Client_UI_Common_UIServices$NopDisposable.__typeName = 'QuickView.$Client.UI.Common.UIServices$NopDisposable';
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.Data.DataDescription.ChartStats.StatInfo
	var $QuickView_$Client_UI_Common_Data_DataDescription$ChartStats$StatInfo = function() {
	};
	$QuickView_$Client_UI_Common_Data_DataDescription$ChartStats$StatInfo.__typeName = 'QuickView.$Client.UI.Common.Data.DataDescription$ChartStats$StatInfo';
	$QuickView_$Client_UI_Common_Data_DataDescription$ChartStats$StatInfo.$ctor = function(maxAbsValue, getter) {
		var $this = {};
		$this.maxAbsValue = null;
		$this.getter = null;
		$this.maxAbsValue = maxAbsValue;
		$this.getter = getter;
		return $this;
	};
	$QuickView_$Client_UI_Common_Data_DataDescription$ChartStats$StatInfo.isInstanceOfType = function() {
		return true;
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.Data.DataDescription.CorrelationStats.StatInfo
	var $QuickView_$Client_UI_Common_Data_DataDescription$CorrelationStats$StatInfo = function() {
	};
	$QuickView_$Client_UI_Common_Data_DataDescription$CorrelationStats$StatInfo.__typeName = 'QuickView.$Client.UI.Common.Data.DataDescription$CorrelationStats$StatInfo';
	$QuickView_$Client_UI_Common_Data_DataDescription$CorrelationStats$StatInfo.$ctor = function(maxAbsValue, getter) {
		var $this = {};
		$this.maxAbsValue = null;
		$this.getter = null;
		$this.maxAbsValue = maxAbsValue;
		$this.getter = getter;
		return $this;
	};
	$QuickView_$Client_UI_Common_Data_DataDescription$CorrelationStats$StatInfo.isInstanceOfType = function() {
		return true;
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.ApplicationElement
	var $QuickView_Client_UI_Common_ApplicationElement = function(element) {
		this.element = null;
		this.isMinimized = false;
		this.$1$MinimizedField = null;
		this.$1$RestoredField = null;
		JS.ArgumentHelper.notNull(element, 'element');
		this.element = element;
	};
	$QuickView_Client_UI_Common_ApplicationElement.__typeName = 'QuickView.Client.UI.Common.ApplicationElement';
	global.QuickView.Client.UI.Common.ApplicationElement = $QuickView_Client_UI_Common_ApplicationElement;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.FontWeight
	var $QuickView_Client_UI_Common_FontWeight = function() {
	};
	$QuickView_Client_UI_Common_FontWeight.__typeName = 'QuickView.Client.UI.Common.FontWeight';
	global.QuickView.Client.UI.Common.FontWeight = $QuickView_Client_UI_Common_FontWeight;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.Format
	var $QuickView_Client_UI_Common_Format = function() {
	};
	$QuickView_Client_UI_Common_Format.__typeName = 'QuickView.Client.UI.Common.Format';
	$QuickView_Client_UI_Common_Format.dataSize = function(dataSize) {
		JS.ArgumentHelper.positiveOrDefault(dataSize, 'dataSize');
		var result;
		if (dataSize >= 10485760) {
			// More than 10MB
			result = $QuickView_Client_UI_Common_Format.$dataSizeInteger(dataSize, 1048576) + 'M';
		}
		else if (dataSize >= 1048576) {
			// More than 1MB
			result = $QuickView_Client_UI_Common_Format.$dataSizeFractional(dataSize, 1048576) + 'M';
		}
		else if (dataSize >= 10240) {
			// More than 10KB
			result = $QuickView_Client_UI_Common_Format.$dataSizeInteger(dataSize, 1024) + 'K';
		}
		else {
			result = $QuickView_Client_UI_Common_Format.$dataSizeFractional(dataSize, 1024) + 'K';
		}
		return result;
	};
	$QuickView_Client_UI_Common_Format.$dataSizeInteger = function(dataSize, divisor) {
		return ss.round(dataSize / divisor).toFixed();
	};
	$QuickView_Client_UI_Common_Format.$dataSizeFractional = function(dataSize, divisor) {
		// Use multiplication and division by 10 to round to one decimal place
		var value = ss.round(dataSize / divisor * 10) / 10;
		var result;
		// Do not display zero after the decimal point
		if (Math.floor(value) !== value) {
			result = value.toFixed(1);
		}
		else {
			result = value.toFixed(0);
		}
		return result;
	};
	global.QuickView.Client.UI.Common.Format = $QuickView_Client_UI_Common_Format;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.Format.Number
	var $QuickView_Client_UI_Common_Format$Number = function() {
	};
	$QuickView_Client_UI_Common_Format$Number.__typeName = 'QuickView.Client.UI.Common.Format$Number';
	$QuickView_Client_UI_Common_Format$Number.currency = function(number, currency) {
		return $QuickView_Client_UI_Common_Format$Number.currency$3(number, currency, 0, 1);
	};
	$QuickView_Client_UI_Common_Format$Number.currency$2 = function(number, currency, options) {
		return $QuickView_Client_UI_Common_Format$Number.currency$3(number, currency, options, 1);
	};
	$QuickView_Client_UI_Common_Format$Number.currency$1 = function(number, currency, denominator) {
		return $QuickView_Client_UI_Common_Format$Number.currency$3(number, currency, 0, denominator);
	};
	$QuickView_Client_UI_Common_Format$Number.currency$3 = function(number, currency, options, denominator) {
		return $QuickView_Client_UI_Common_Format$Number.currency$4(number, currency, options, denominator, 2);
	};
	$QuickView_Client_UI_Common_Format$Number.currency$4 = function(number, currency, options, denominator, precision) {
		var result = {};
		if (false === $QuickView_Client_UI_Common_Format$Number.$privateUnitless(result, number, precision, options, denominator)) {
			return result.$;
		}
		var currencySymbol = $QuickView_Client_UI_Common_Data_DataDescription$Currencies.getSymbol(currency);
		if (ss.isNullOrEmptyString(currencySymbol)) {
			return result.$ + ' ' + $QuickView_Client_UI_Common_Data_DataDescription.getDisplayName$1(currency);
		}
		else if (result.$.length > 0 && (result.$.charCodeAt(0) === 45 || result.$.charCodeAt(0) === 43)) {
			return String.fromCharCode(result.$.charCodeAt(0)) + currencySymbol + result.$.substring(1);
		}
		else {
			return currencySymbol + result.$;
		}
	};
	$QuickView_Client_UI_Common_Format$Number.percent = function(number) {
		return $QuickView_Client_UI_Common_Format$Number.percent$3(number, 2, 0);
	};
	$QuickView_Client_UI_Common_Format$Number.percent$2 = function(number, precision) {
		return $QuickView_Client_UI_Common_Format$Number.percent$3(number, precision, 0);
	};
	$QuickView_Client_UI_Common_Format$Number.percent$1 = function(number, options) {
		return $QuickView_Client_UI_Common_Format$Number.percent$3(number, 2, options);
	};
	$QuickView_Client_UI_Common_Format$Number.percent$3 = function(number, precision, options) {
		var result = {};
		if (false === $QuickView_Client_UI_Common_Format$Number.$privateUnitless(result, ss.Nullable$1.mul(number, 100), precision, options, 1)) {
			return result.$;
		}
		return result.$ + '%';
	};
	$QuickView_Client_UI_Common_Format$Number.qrUnit = function(number) {
		return $QuickView_Client_UI_Common_Format$Number.qrUnit$3(number, 2, 0);
	};
	$QuickView_Client_UI_Common_Format$Number.qrUnit$2 = function(number, precision) {
		return $QuickView_Client_UI_Common_Format$Number.qrUnit$3(number, precision, 0);
	};
	$QuickView_Client_UI_Common_Format$Number.qrUnit$1 = function(number, options) {
		return $QuickView_Client_UI_Common_Format$Number.qrUnit$3(number, 2, options);
	};
	$QuickView_Client_UI_Common_Format$Number.qrUnit$3 = function(number, precision, options) {
		var result = {};
		if (false === $QuickView_Client_UI_Common_Format$Number.$privateUnitless(result, number, precision, options, 1)) {
			return result.$;
		}
		return result.$ + 'u';
	};
	$QuickView_Client_UI_Common_Format$Number.unitless = function(number, precision) {
		return $QuickView_Client_UI_Common_Format$Number.unitless$1(number, precision, 0, 1);
	};
	$QuickView_Client_UI_Common_Format$Number.unitless$1 = function(number, precision, options, denominator) {
		var result = {};
		$QuickView_Client_UI_Common_Format$Number.$privateUnitless(result, number, precision, options, denominator);
		return result.$;
	};
	$QuickView_Client_UI_Common_Format$Number.$privateUnitless = function(result, number, precision, options, denominator) {
		JS.ArgumentHelper.positiveOrDefault(precision, 'precision');
		if (ss.isNullOrUndefined(number)) {
			result.$ = 'N/A';
			return false;
		}
		// BUG In Saltarelle compiler; translates to "ss.referenceEquals(number, 0)"
		// instead of "ss.referenceEquals(number, Number.POSITIVE_INFINITY)"
		//if (double.PositiveInfinity == number)
		if (ss.staticEquals(Number.POSITIVE_INFINITY, number)) {
			result.$ = 'INF';
			return false;
		}
		else if (ss.staticEquals(Number.NEGATIVE_INFINITY, number)) {
			result.$ = '-INF';
			return false;
		}
		if (denominator === 0) {
			denominator = $QuickView_Client_UI_Common_Format$Number.calculateBestDenominator$3([ss.unbox(number)]);
		}
		var suffix;
		if (JS.EnumExtensions.isSet(options, 4)) {
			suffix = '';
		}
		else {
			suffix = $QuickView_Client_UI_Common_Format$Number.getDenominationSymbol(denominator);
		}
		number = ss.Nullable$1.div(number, denominator);
		var formatString = 'N' + precision.toString();
		result.$ = ss.formatNumber(ss.unbox(number), formatString);
		if ((options & 2) !== 0) {
			result.$ = $QuickView_Client_UI_Common_Format$Number.$removeTrailingZeros(result.$);
		}
		result.$ += suffix;
		if ((options & 1) !== 0 && ss.Nullable$1.gt(number, 0)) {
			result.$ = '+' + result.$;
		}
		return true;
	};
	$QuickView_Client_UI_Common_Format$Number.$removeTrailingZeros = function(numberText) {
		if (ss.isNullOrEmptyString(numberText)) {
			throw new ss.ArgumentNullException('numberText');
		}
		if (numberText.indexOf(String.fromCharCode(46)) >= 0) {
			// The number has fractional digits
			var result = ss.trimEndString(ss.trimEndString(numberText, [48]), [46]);
			if (result.length === 0) {
				result = '0';
			}
			return result;
		}
		else {
			// The number does not have fractional digits
			return numberText;
		}
	};
	$QuickView_Client_UI_Common_Format$Number.getDenominationSymbol = function(denominator) {
		switch (denominator) {
			case 0:
			default: {
				throw new ss.ArgumentOutOfRangeException('denominator', 'This value is not supported.', null, denominator);
			}
			case 1: {
				return '';
			}
			case 1000: {
				return 'K';
			}
			case 1000000: {
				return 'M';
			}
			case 1000000000: {
				return 'B';
			}
		}
	};
	$QuickView_Client_UI_Common_Format$Number.calculateBestDenominator$3 = function(numbers) {
		return $QuickView_Client_UI_Common_Format$Number.calculateBestDenominator(numbers);
	};
	$QuickView_Client_UI_Common_Format$Number.calculateBestDenominator = function(numbers) {
		JS.ArgumentHelper.notNull(numbers, 'numbers');
		var result = 1;
		var $t1 = ss.getEnumerator(numbers);
		try {
			while ($t1.moveNext()) {
				var number = $t1.current();
				if (number >= 1000000000 || number <= -1000000000) {
					result = 1000000000;
					// The largest divisor should be used
					break;
				}
				else if (number >= 1000000 || number <= -1000000) {
					if (result < 1000000) {
						result = 1000000;
					}
				}
				else if (number >= 1000 || number <= -1000) {
					if (result < 1000) {
						result = 1000;
					}
				}
			}
		}
		finally {
			$t1.dispose();
		}
		return result;
	};
	$QuickView_Client_UI_Common_Format$Number.calculateBestDenominator$4 = function(numbers) {
		return $QuickView_Client_UI_Common_Format$Number.calculateBestDenominator$1(numbers);
	};
	$QuickView_Client_UI_Common_Format$Number.calculateBestDenominator$1 = function(numbers) {
		return $QuickView_Client_UI_Common_Format$Number.calculateBestDenominator(Enumerable.from(numbers).where(function(x) {
			return ss.isValue(x);
		}).select(function(x1) {
			return ss.unbox(x1);
		}));
	};
	$QuickView_Client_UI_Common_Format$Number.calculateBestDenominator$2 = function(numbers) {
		JS.ArgumentHelper.notNull(numbers, 'numbers');
		var result = 1;
		for (var $t1 = 0; $t1 < numbers.length; $t1++) {
			var list = numbers[$t1];
			var denominator = $QuickView_Client_UI_Common_Format$Number.calculateBestDenominator$1(list);
			if (denominator > result) {
				result = denominator;
			}
		}
		return result;
	};
	$QuickView_Client_UI_Common_Format$Number.ordinal = function(number) {
		JS.ArgumentHelper.positiveOrDefault(number, 'number');
		var remainder = number % 10;
		var suffix;
		switch (remainder) {
			case 1: {
				suffix = 'st';
				break;
			}
			case 2: {
				suffix = 'nd';
				break;
			}
			case 3: {
				suffix = 'rd';
				break;
			}
			default: {
				suffix = 'th';
				break;
			}
		}
		return number.toString() + suffix;
	};
	global.QuickView.Client.UI.Common.Format$Number = $QuickView_Client_UI_Common_Format$Number;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.Format.Time
	var $QuickView_Client_UI_Common_Format$Time = function() {
	};
	$QuickView_Client_UI_Common_Format$Time.__typeName = 'QuickView.Client.UI.Common.Format$Time';
	$QuickView_Client_UI_Common_Format$Time.age = function(seconds) {
		return $QuickView_Client_UI_Common_Format$Time.age$1(new ss.TimeSpan(seconds * 10000000));
	};
	$QuickView_Client_UI_Common_Format$Time.age$1 = function(duration) {
		// Negative values MUST be supported (parts of the code rely on this)
		var negative = duration.ticks < (new ss.TimeSpan(0)).ticks;
		if (negative) {
			duration = new ss.TimeSpan(-duration.ticks);
		}
		var result;
		if (duration.ticks / 864000000000 >= 1) {
			result = ss.Int32.trunc(duration.ticks / 864000000000).toString() + 'd';
		}
		else if (duration.ticks / 36000000000 >= 1) {
			result = ss.Int32.trunc(duration.ticks / 36000000000).toString() + 'h';
		}
		else if (duration.ticks / 600000000 >= 1) {
			result = ss.Int32.trunc(duration.ticks / 600000000).toString() + 'm';
		}
		else {
			result = ss.Int32.trunc(duration.ticks / 10000000).toString() + 's';
		}
		if (negative) {
			result = '-' + result;
		}
		return result;
	};
	global.QuickView.Client.UI.Common.Format$Time = $QuickView_Client_UI_Common_Format$Time;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.FormatNumberDenominator
	var $QuickView_Client_UI_Common_FormatNumberDenominator = function() {
	};
	$QuickView_Client_UI_Common_FormatNumberDenominator.__typeName = 'QuickView.Client.UI.Common.FormatNumberDenominator';
	global.QuickView.Client.UI.Common.FormatNumberDenominator = $QuickView_Client_UI_Common_FormatNumberDenominator;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.FormatNumberOptions
	var $QuickView_Client_UI_Common_FormatNumberOptions = function() {
	};
	$QuickView_Client_UI_Common_FormatNumberOptions.__typeName = 'QuickView.Client.UI.Common.FormatNumberOptions';
	global.QuickView.Client.UI.Common.FormatNumberOptions = $QuickView_Client_UI_Common_FormatNumberOptions;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.HtmlColor
	var $QuickView_Client_UI_Common_HtmlColor = function() {
	};
	$QuickView_Client_UI_Common_HtmlColor.__typeName = 'QuickView.Client.UI.Common.HtmlColor';
	global.QuickView.Client.UI.Common.HtmlColor = $QuickView_Client_UI_Common_HtmlColor;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.LoadingScreen
	var $QuickView_Client_UI_Common_LoadingScreen = function(element) {
		this.$_element = null;
		this.$_contentElement = null;
		JS.ArgumentHelper.notNull(element, 'element');
		this.$_element = element;
		this.$_contentElement = element.find('.content');
	};
	$QuickView_Client_UI_Common_LoadingScreen.__typeName = 'QuickView.Client.UI.Common.LoadingScreen';
	global.QuickView.Client.UI.Common.LoadingScreen = $QuickView_Client_UI_Common_LoadingScreen;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.SortDirection
	var $QuickView_Client_UI_Common_SortDirection = function() {
	};
	$QuickView_Client_UI_Common_SortDirection.__typeName = 'QuickView.Client.UI.Common.SortDirection';
	global.QuickView.Client.UI.Common.SortDirection = $QuickView_Client_UI_Common_SortDirection;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.StatFormat
	var $QuickView_Client_UI_Common_StatFormat = function() {
	};
	$QuickView_Client_UI_Common_StatFormat.__typeName = 'QuickView.Client.UI.Common.StatFormat';
	$QuickView_Client_UI_Common_StatFormat.getDataPointCountSuffix = function(resolution) {
		if (resolution < 5) {
			return 'h';
		}
		else if (resolution >= 5 && resolution < 7) {
			return 'd';
		}
		else if (resolution >= 7 && resolution < 9) {
			return 'm';
		}
		else {
			return 'y';
		}
	};
	$QuickView_Client_UI_Common_StatFormat.field = function(field, value, resolution) {
		return $QuickView_Client_UI_Common_StatFormat.field$2(field, value, resolution, 2);
	};
	$QuickView_Client_UI_Common_StatFormat.field$2 = function(field, value, resolution, precision) {
		switch (field) {
			case 'CAGR':
			case 'V': {
				return $QuickView_Client_UI_Common_StatFormat.percent$1(value, precision);
			}
			case 'SR':
			case 'Autocorrelation':
			case 'TStat': {
				return $QuickView_Client_UI_Common_StatFormat.unitless$1(value, precision);
			}
			case 'DataPointCount': {
				return $QuickView_Client_UI_Common_StatFormat.unitless$1(value, 0) + $QuickView_Client_UI_Common_StatFormat.getDataPointCountSuffix(resolution);
			}
			default: {
				throw new ss.ArgumentOutOfRangeException('field', 'Unsupported value.', null, field);
			}
		}
	};
	$QuickView_Client_UI_Common_StatFormat.field$1 = function(field, value, resolution) {
		return $QuickView_Client_UI_Common_StatFormat.field$3(field, value, resolution, 2);
	};
	$QuickView_Client_UI_Common_StatFormat.field$3 = function(field, value, resolution, precision) {
		switch (field) {
			case 'PearsonCorrelation':
			case 'SyncCorrelation':
			case 'Covariance':
			case 'PearsonTStat':
			case 'SyncTStat':
			case 'AlphaBeta_Alpha':
			case 'AlphaBeta_Beta':
			case 'AlphaBeta_Regression':
			case 'AlphaBeta_TStatAlpha':
			case 'AlphaBeta_TStatBeta':
			case 'AlphaBeta_InformationRatio':
			case 'AlphaBeta_PfOptFund': {
				return $QuickView_Client_UI_Common_StatFormat.unitless$1(value, precision);
			}
			case 'DataPointCount':
			case 'AlphaBeta_DataPointCount': {
				return $QuickView_Client_UI_Common_StatFormat.unitless$1(value, 0) + $QuickView_Client_UI_Common_StatFormat.getDataPointCountSuffix(resolution);
			}
			default: {
				throw new ss.ArgumentOutOfRangeException('field', 'Unsupported value.', null, field);
			}
		}
	};
	$QuickView_Client_UI_Common_StatFormat.percent = function(value) {
		return $QuickView_Client_UI_Common_StatFormat.percent$1(value, 2);
	};
	$QuickView_Client_UI_Common_StatFormat.percent$1 = function(value, precision) {
		return $QuickView_Client_UI_Common_Format$Number.percent$2(value, precision);
	};
	$QuickView_Client_UI_Common_StatFormat.unitless = function(value) {
		return $QuickView_Client_UI_Common_StatFormat.unitless$1(value, 2);
	};
	$QuickView_Client_UI_Common_StatFormat.unitless$1 = function(value, precision) {
		return $QuickView_Client_UI_Common_Format$Number.unitless(ss.unbox(value), precision);
	};
	global.QuickView.Client.UI.Common.StatFormat = $QuickView_Client_UI_Common_StatFormat;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.Styles
	var $QuickView_Client_UI_Common_Styles = function() {
	};
	$QuickView_Client_UI_Common_Styles.__typeName = 'QuickView.Client.UI.Common.Styles';
	$QuickView_Client_UI_Common_Styles.number = function(value) {
		return $QuickView_Client_UI_Common_Styles.number$1(value, 0);
	};
	$QuickView_Client_UI_Common_Styles.number$1 = function(value, zeroValue) {
		if (ss.isNullOrUndefined(value) || ss.referenceEquals(value, 0)) {
			return 'neutral-value';
		}
		else {
			return (ss.Nullable$1.ge(value, zeroValue) ? 'positive-value' : 'negative-value');
		}
	};
	global.QuickView.Client.UI.Common.Styles = $QuickView_Client_UI_Common_Styles;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.Styles.Window
	var $QuickView_Client_UI_Common_Styles$Window = function() {
	};
	$QuickView_Client_UI_Common_Styles$Window.__typeName = 'QuickView.Client.UI.Common.Styles$Window';
	global.QuickView.Client.UI.Common.Styles$Window = $QuickView_Client_UI_Common_Styles$Window;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.UIActivity
	var $QuickView_Client_UI_Common_UIActivity = function() {
		this.$1$ActivityField = null;
		this.lastActivityTime = new Date(0);
		// Attach to events
		this.$attachUIEvents();
		// Initial value
		this.lastActivityTime = new Date();
	};
	$QuickView_Client_UI_Common_UIActivity.__typeName = 'QuickView.Client.UI.Common.UIActivity';
	global.QuickView.Client.UI.Common.UIActivity = $QuickView_Client_UI_Common_UIActivity;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.UIConstants
	var $QuickView_Client_UI_Common_UIConstants = function() {
	};
	$QuickView_Client_UI_Common_UIConstants.__typeName = 'QuickView.Client.UI.Common.UIConstants';
	global.QuickView.Client.UI.Common.UIConstants = $QuickView_Client_UI_Common_UIConstants;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.UIElements
	var $QuickView_Client_UI_Common_UIElements = function() {
	};
	$QuickView_Client_UI_Common_UIElements.__typeName = 'QuickView.Client.UI.Common.UIElements';
	$QuickView_Client_UI_Common_UIElements.get_application = function() {
		return $QuickView_Client_UI_Common_UIElements.$_application.value();
	};
	$QuickView_Client_UI_Common_UIElements.get_mainPanel = function() {
		return $QuickView_Client_UI_Common_UIElements.$_mainPanel.value();
	};
	$QuickView_Client_UI_Common_UIElements.get_grid = function() {
		return $QuickView_Client_UI_Common_UIElements.$_grid.value();
	};
	$QuickView_Client_UI_Common_UIElements.get_noConnectionLayer = function() {
		return $QuickView_Client_UI_Common_UIElements.$_noConnectionLayer.value();
	};
	$QuickView_Client_UI_Common_UIElements.get_loadingScreen = function() {
		return $QuickView_Client_UI_Common_UIElements.$_loadingScreen.value();
	};
	$QuickView_Client_UI_Common_UIElements.get_browserNotSupportedScreen = function() {
		return $QuickView_Client_UI_Common_UIElements.$_browserNotSupportedScreen.value();
	};
	$QuickView_Client_UI_Common_UIElements.get_windowLayer = function() {
		return $QuickView_Client_UI_Common_UIElements.$_windowLayer.value();
	};
	$QuickView_Client_UI_Common_UIElements.get_dialogLayer = function() {
		return $QuickView_Client_UI_Common_UIElements.$_dialogLayer.value();
	};
	global.QuickView.Client.UI.Common.UIElements = $QuickView_Client_UI_Common_UIElements;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.UIServices
	var $QuickView_Client_UI_Common_UIServices = function() {
	};
	$QuickView_Client_UI_Common_UIServices.__typeName = 'QuickView.Client.UI.Common.UIServices';
	$QuickView_Client_UI_Common_UIServices.disableFastScrolling = function() {
		if (QuickView.Client.Common.AppEnvironment.get_isMobileDevice()) {
			if ($QuickView_Client_UI_Common_UIServices.$_disableFastScrollingCount++ === 0) {
				$QuickView_Client_UI_Common_UIElements.get_application().element.addClass('fast-scrolling-disabled');
			}
			return new $QuickView_$Client_UI_Common_UIServices$FastScrollingDisabled();
		}
		else {
			return $QuickView_$Client_UI_Common_UIServices$NopDisposable.$instance;
		}
	};
	$QuickView_Client_UI_Common_UIServices.$enableFastScrolling = function() {
		if (--$QuickView_Client_UI_Common_UIServices.$_disableFastScrollingCount <= 0) {
			$QuickView_Client_UI_Common_UIElements.get_application().element.removeClass('fast-scrolling-disabled');
		}
	};
	global.QuickView.Client.UI.Common.UIServices = $QuickView_Client_UI_Common_UIServices;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.Data.DataDescription
	var $QuickView_Client_UI_Common_Data_DataDescription = function() {
	};
	$QuickView_Client_UI_Common_Data_DataDescription.__typeName = 'QuickView.Client.UI.Common.Data.DataDescription';
	$QuickView_Client_UI_Common_Data_DataDescription.getName = function(type) {
		return QuickView.Client.Models.Charts.ChartPeriodDef.getTypeName(type);
	};
	$QuickView_Client_UI_Common_Data_DataDescription.getDisplayName = function(type) {
		return $QuickView_Client_UI_Common_Data_DataDescription.getName(type);
	};
	$QuickView_Client_UI_Common_Data_DataDescription.getName$3 = function(value) {
		return value.toString();
		// Values are represented as string so there is no need to convert them
	};
	$QuickView_Client_UI_Common_Data_DataDescription.getShortDisplayName = function(value) {
		switch (value) {
			case 'DataPointCount': {
				return '#';
			}
			case 'TStat': {
				return 't-stat';
			}
			case 'PValue': {
				return 'p-val';
			}
			case 'Autocorrelation': {
				return 'AutoCor';
			}
			default: {
				return $QuickView_Client_UI_Common_Data_DataDescription.getName$3(value);
			}
		}
	};
	$QuickView_Client_UI_Common_Data_DataDescription.getFullDisplayName = function(value) {
		switch (value) {
			case 'Autocorrelation': {
				return 'Autocorrelation';
			}
			default: {
				return $QuickView_Client_UI_Common_Data_DataDescription.getShortDisplayName(value);
			}
		}
	};
	$QuickView_Client_UI_Common_Data_DataDescription.getName$4 = function(value) {
		return value.toString();
		// Values are represented as string so there is no need to convert them
	};
	$QuickView_Client_UI_Common_Data_DataDescription.getShortDisplayName$1 = function(value) {
		switch (value) {
			case 'DataPointCount': {
				return '# (Cor)';
			}
			case 'PearsonCorrelation': {
				return 'PrsnCor';
			}
			case 'SyncCorrelation': {
				return 'SyncCor';
			}
			case 'Covariance': {
				return 'Cov';
			}
			case 'PearsonTStat': {
				return 'Prsn (t-stat)';
			}
			case 'SyncTStat': {
				return 'Sync (t-stat)';
			}
			case 'AlphaBeta_Alpha': {
				return 'α';
			}
			case 'AlphaBeta_Beta': {
				return 'β';
			}
			case 'AlphaBeta_DataPointCount': {
				return '# (α/β)';
			}
			case 'AlphaBeta_Regression': {
				return 'Rsq';
			}
			case 'AlphaBeta_TStatAlpha': {
				return 't-stat (α)';
			}
			case 'AlphaBeta_TStatBeta': {
				return 't-stat (β)';
			}
			case 'AlphaBeta_InformationRatio': {
				return 'IR';
			}
			case 'AlphaBeta_PfOptFund': {
				return 'Fund:BM PfOpt';
			}
			default: {
				return $QuickView_Client_UI_Common_Data_DataDescription.getName$4(value);
			}
		}
	};
	$QuickView_Client_UI_Common_Data_DataDescription.getFullDisplayName$1 = function(value) {
		switch (value) {
			case 'DataPointCount': {
				return '# (Correlation)';
			}
			case 'PearsonCorrelation': {
				return 'Pearson Correlation';
			}
			case 'SyncCorrelation': {
				return 'Sync Correlation';
			}
			case 'Covariance': {
				return 'Covariance';
			}
			case 'PearsonTStat': {
				return 'Pearson (t-stat)';
			}
			case 'AlphaBeta_Regression': {
				return 'Regression';
			}
			case 'AlphaBeta_InformationRatio': {
				return 'Information Ratio';
			}
			default: {
				return $QuickView_Client_UI_Common_Data_DataDescription.getShortDisplayName$1(value);
			}
		}
	};
	$QuickView_Client_UI_Common_Data_DataDescription.getName$1 = function(value) {
		return $QuickView_Client_UI_Common_Data_DataDescription$Currencies.getName(value);
	};
	$QuickView_Client_UI_Common_Data_DataDescription.getDisplayName$1 = function(value) {
		return $QuickView_Client_UI_Common_Data_DataDescription$Currencies.getDisplayName(value);
	};
	$QuickView_Client_UI_Common_Data_DataDescription.getSymbol = function(value) {
		return $QuickView_Client_UI_Common_Data_DataDescription$Currencies.getSymbol(value);
	};
	$QuickView_Client_UI_Common_Data_DataDescription.getName$2 = function(value) {
		switch (value) {
			case 1: {
				return 'Minute';
			}
			case 2: {
				return 'FiveMinutes';
			}
			case 3: {
				return 'TenMinutes';
			}
			case 4: {
				return 'Hour';
			}
			case 5: {
				return 'Day';
			}
			case 6: {
				return 'Week';
			}
			case 7: {
				return 'Month';
			}
			case 8: {
				return 'Quarter';
			}
			case 9: {
				return 'Year';
			}
			default: {
				throw new ss.NotSupportedException(ss.formatString("Unhandled value: '{0}'.", value));
			}
		}
	};
	$QuickView_Client_UI_Common_Data_DataDescription.getDisplayName$2 = function(value) {
		switch (value) {
			case 1: {
				return 'minutely';
			}
			case 2: {
				return '5m';
			}
			case 3: {
				return '10m';
			}
			case 4: {
				return 'hourly';
			}
			case 5: {
				return 'daily';
			}
			case 6: {
				return 'weekly';
			}
			case 7: {
				return 'monthly';
			}
			case 8: {
				return 'quarterly';
			}
			case 9: {
				return 'yearly';
			}
			default: {
				throw new ss.NotSupportedException(ss.formatString("Unhandled value: '{0}'.", value));
			}
		}
	};
	$QuickView_Client_UI_Common_Data_DataDescription.getSymbol$1 = function(unit, currency) {
		return $QuickView_Client_UI_Common_Data_DataDescription$Units.getSymbol(unit, currency);
	};
	global.QuickView.Client.UI.Common.Data.DataDescription = $QuickView_Client_UI_Common_Data_DataDescription;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.Data.DataDescription.ChartPeriods
	var $QuickView_Client_UI_Common_Data_DataDescription$ChartPeriods = function() {
	};
	$QuickView_Client_UI_Common_Data_DataDescription$ChartPeriods.__typeName = 'QuickView.Client.UI.Common.Data.DataDescription$ChartPeriods';
	$QuickView_Client_UI_Common_Data_DataDescription$ChartPeriods.getPeriodsInDisplayOrder = function(type) {
		return $QuickView_Client_UI_Common_Data_DataDescription$ChartPeriods.get_$supportedPeriodTypes()[type];
		// Creating a read-only collection is equivalent to casting
	};
	$QuickView_Client_UI_Common_Data_DataDescription$ChartPeriods.get_$supportedPeriodTypes = function() {
		if (ss.isNullOrUndefined($QuickView_Client_UI_Common_Data_DataDescription$ChartPeriods.$_supportedPeriodTypes)) {
			var dict = {};
			dict[2] = [QuickView.Client.Models.Charts.ChartPeriodDef.$ctor(2, 0), QuickView.Client.Models.Charts.ChartPeriodDef.$ctor(2, 1), QuickView.Client.Models.Charts.ChartPeriodDef.$ctor(2, -1), QuickView.Client.Models.Charts.ChartPeriodDef.$ctor(2, -2), QuickView.Client.Models.Charts.ChartPeriodDef.$ctor(2, -3), QuickView.Client.Models.Charts.ChartPeriodDef.$ctor(2, -4), QuickView.Client.Models.Charts.ChartPeriodDef.$ctor(2, -5), QuickView.Client.Models.Charts.ChartPeriodDef.$ctor(2, -10)];
			dict[3] = [QuickView.Client.Models.Charts.ChartPeriodDef.$ctor(3, 0), QuickView.Client.Models.Charts.ChartPeriodDef.$ctor(3, 1), QuickView.Client.Models.Charts.ChartPeriodDef.$ctor(3, -1), QuickView.Client.Models.Charts.ChartPeriodDef.$ctor(3, -2), QuickView.Client.Models.Charts.ChartPeriodDef.$ctor(3, -3), QuickView.Client.Models.Charts.ChartPeriodDef.$ctor(3, -4), QuickView.Client.Models.Charts.ChartPeriodDef.$ctor(3, -5), QuickView.Client.Models.Charts.ChartPeriodDef.$ctor(3, -10), QuickView.Client.Models.Charts.ChartPeriodDef.$ctor(3, -15), QuickView.Client.Models.Charts.ChartPeriodDef.$ctor(3, -20)];
			dict[4] = [QuickView.Client.Models.Charts.ChartPeriodDef.$ctor(4, 0), QuickView.Client.Models.Charts.ChartPeriodDef.$ctor(4, 1), QuickView.Client.Models.Charts.ChartPeriodDef.$ctor(4, -1), QuickView.Client.Models.Charts.ChartPeriodDef.$ctor(4, -2), QuickView.Client.Models.Charts.ChartPeriodDef.$ctor(4, -3), QuickView.Client.Models.Charts.ChartPeriodDef.$ctor(4, -4), QuickView.Client.Models.Charts.ChartPeriodDef.$ctor(4, -5), QuickView.Client.Models.Charts.ChartPeriodDef.$ctor(4, -10), QuickView.Client.Models.Charts.ChartPeriodDef.$ctor(4, -15), QuickView.Client.Models.Charts.ChartPeriodDef.$ctor(4, -20)];
			{
				var list = new Array(QuickView.Client.Models.Charts.ChartPeriodHelper.get_btdStartList().length);
				for (var k = 0; k < QuickView.Client.Models.Charts.ChartPeriodHelper.get_btdStartList().length; k++) {
					list[k] = QuickView.Client.Models.Charts.ChartPeriodDef.$ctor(5, -k);
				}
				dict[5] = list;
			}
			$QuickView_Client_UI_Common_Data_DataDescription$ChartPeriods.$_supportedPeriodTypes = dict;
		}
		return $QuickView_Client_UI_Common_Data_DataDescription$ChartPeriods.$_supportedPeriodTypes;
	};
	$QuickView_Client_UI_Common_Data_DataDescription$ChartPeriods.isSupported = function(indicator, period) {
		JS.ArgumentHelper.notNull(indicator, 'indicator');
		JS.ArgumentHelper.notNull(period, 'period');
		var subPeriodTypeData = $QuickView_Client_UI_Common_Data_DataDescription$ChartPeriods.get_$supportedPeriodTypes()[period.T];
		if (ss.isValue(subPeriodTypeData)) {
			var result = Enumerable.from(subPeriodTypeData).any(function(x) {
				return x.I === period.I;
			});
			if (result && period.T === 2 && false === QuickView.Client.Models.Charts.Indicator.supportsResolution(indicator, 1)) {
				result = false;
			}
			return result;
		}
		else {
			return false;
		}
	};
	global.QuickView.Client.UI.Common.Data.DataDescription$ChartPeriods = $QuickView_Client_UI_Common_Data_DataDescription$ChartPeriods;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.Data.DataDescription.ChartStats
	var $QuickView_Client_UI_Common_Data_DataDescription$ChartStats = function() {
	};
	$QuickView_Client_UI_Common_Data_DataDescription$ChartStats.__typeName = 'QuickView.Client.UI.Common.Data.DataDescription$ChartStats';
	$QuickView_Client_UI_Common_Data_DataDescription$ChartStats.get_$statInfoDict = function() {
		if (ss.isNullOrUndefined($QuickView_Client_UI_Common_Data_DataDescription$ChartStats.$_statInfoDict)) {
			var dict = {};
			dict['CAGR'] = $QuickView_$Client_UI_Common_Data_DataDescription$ChartStats$StatInfo.$ctor(1, function(x) {
				return x.C;
			});
			dict['SR'] = $QuickView_$Client_UI_Common_Data_DataDescription$ChartStats$StatInfo.$ctor(5, function(x1) {
				return x1.S;
			});
			dict['V'] = $QuickView_$Client_UI_Common_Data_DataDescription$ChartStats$StatInfo.$ctor(1, function(x2) {
				return x2.V;
			});
			dict['DataPointCount'] = $QuickView_$Client_UI_Common_Data_DataDescription$ChartStats$StatInfo.$ctor(null, function(x3) {
				return x3.N;
			});
			dict['Autocorrelation'] = $QuickView_$Client_UI_Common_Data_DataDescription$ChartStats$StatInfo.$ctor(1, function(x4) {
				return (ss.isNullOrUndefined(x4.A) ? null : x4.A.A);
			});
			dict['TStat'] = $QuickView_$Client_UI_Common_Data_DataDescription$ChartStats$StatInfo.$ctor(5, function(x5) {
				return (ss.isNullOrUndefined(x5.T) ? null : x5.T.T);
			});
			$QuickView_Client_UI_Common_Data_DataDescription$ChartStats.$_statInfoDict = dict;
		}
		return $QuickView_Client_UI_Common_Data_DataDescription$ChartStats.$_statInfoDict;
	};
	$QuickView_Client_UI_Common_Data_DataDescription$ChartStats.getGetter = function(field) {
		var info = $QuickView_Client_UI_Common_Data_DataDescription$ChartStats.get_$statInfoDict()[field];
		if (ss.isNullOrUndefined(info)) {
			throw new ss.ArgumentOutOfRangeException('field', 'Unsupported value.', null, field);
		}
		else {
			return info.getter;
		}
	};
	$QuickView_Client_UI_Common_Data_DataDescription$ChartStats.getMaxAbsValue = function(field) {
		var info = $QuickView_Client_UI_Common_Data_DataDescription$ChartStats.get_$statInfoDict()[field];
		if (ss.isNullOrUndefined(info)) {
			throw new ss.ArgumentOutOfRangeException('field', 'Unsupported value.', null, field);
		}
		else {
			return info.maxAbsValue;
		}
	};
	$QuickView_Client_UI_Common_Data_DataDescription$ChartStats.fromName = function(name) {
		return ss.cast(ss.Enum.parse(QuickView.Client.Models.Stats.ChartStatsField, name), String);
	};
	global.QuickView.Client.UI.Common.Data.DataDescription$ChartStats = $QuickView_Client_UI_Common_Data_DataDescription$ChartStats;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.Data.DataDescription.CorrelationStats
	var $QuickView_Client_UI_Common_Data_DataDescription$CorrelationStats = function() {
	};
	$QuickView_Client_UI_Common_Data_DataDescription$CorrelationStats.__typeName = 'QuickView.Client.UI.Common.Data.DataDescription$CorrelationStats';
	$QuickView_Client_UI_Common_Data_DataDescription$CorrelationStats.get_$statInfoDict = function() {
		if (ss.isNullOrUndefined($QuickView_Client_UI_Common_Data_DataDescription$CorrelationStats.$_statInfoDict)) {
			var dict = {};
			dict['DataPointCount'] = $QuickView_$Client_UI_Common_Data_DataDescription$CorrelationStats$StatInfo.$ctor(365, function(x) {
				return x.C;
			});
			dict['PearsonCorrelation'] = $QuickView_$Client_UI_Common_Data_DataDescription$CorrelationStats$StatInfo.$ctor(1, function(x1) {
				return x1.V;
			});
			dict['SyncCorrelation'] = $QuickView_$Client_UI_Common_Data_DataDescription$CorrelationStats$StatInfo.$ctor(1, function(x2) {
				return x2.Y;
			});
			dict['Covariance'] = $QuickView_$Client_UI_Common_Data_DataDescription$CorrelationStats$StatInfo.$ctor(1, function(x3) {
				return (ss.isValue(x3.T) ? x3.T.C : null);
			});
			dict['PearsonTStat'] = $QuickView_$Client_UI_Common_Data_DataDescription$CorrelationStats$StatInfo.$ctor(5, function(x4) {
				return (ss.isValue(x4.T) ? x4.T.T : null);
			});
			dict['SyncTStat'] = $QuickView_$Client_UI_Common_Data_DataDescription$CorrelationStats$StatInfo.$ctor(5, function(x5) {
				return (ss.isValue(x5.T) ? x5.T.Y : null);
			});
			dict['AlphaBeta_Alpha'] = $QuickView_$Client_UI_Common_Data_DataDescription$CorrelationStats$StatInfo.$ctor(100, function(x6) {
				return (QuickView.Client.Models.Stats.CorrelationValue.hasAlphaBeta(x6) ? x6.S.A : null);
			});
			dict['AlphaBeta_Beta'] = $QuickView_$Client_UI_Common_Data_DataDescription$CorrelationStats$StatInfo.$ctor(100, function(x7) {
				return (QuickView.Client.Models.Stats.CorrelationValue.hasAlphaBeta(x7) ? x7.S.B : null);
			});
			dict['AlphaBeta_DataPointCount'] = $QuickView_$Client_UI_Common_Data_DataDescription$CorrelationStats$StatInfo.$ctor(365, function(x8) {
				return (QuickView.Client.Models.Stats.CorrelationValue.hasAlphaBeta(x8) ? x8.S.N : null);
			});
			dict['AlphaBeta_Regression'] = $QuickView_$Client_UI_Common_Data_DataDescription$CorrelationStats$StatInfo.$ctor(1, function(x9) {
				return ((QuickView.Client.Models.Stats.CorrelationValue.hasAlphaBeta(x9) && ss.isValue(x9.S.S)) ? x9.S.S.R : null);
			});
			dict['AlphaBeta_TStatAlpha'] = $QuickView_$Client_UI_Common_Data_DataDescription$CorrelationStats$StatInfo.$ctor(5, function(x10) {
				return ((QuickView.Client.Models.Stats.CorrelationValue.hasAlphaBeta(x10) && ss.isValue(x10.S.S)) ? x10.S.S.T : null);
			});
			dict['AlphaBeta_TStatBeta'] = $QuickView_$Client_UI_Common_Data_DataDescription$CorrelationStats$StatInfo.$ctor(5, function(x11) {
				return ((QuickView.Client.Models.Stats.CorrelationValue.hasAlphaBeta(x11) && ss.isValue(x11.S.S)) ? x11.S.S.S : null);
			});
			dict['AlphaBeta_InformationRatio'] = $QuickView_$Client_UI_Common_Data_DataDescription$CorrelationStats$StatInfo.$ctor(5, function(x12) {
				return ((QuickView.Client.Models.Stats.CorrelationValue.hasAlphaBeta(x12) && ss.isValue(x12.S.S)) ? x12.S.S.I : null);
			});
			dict['AlphaBeta_PfOptFund'] = $QuickView_$Client_UI_Common_Data_DataDescription$CorrelationStats$StatInfo.$ctor(1, function(x13) {
				return ((QuickView.Client.Models.Stats.CorrelationValue.hasAlphaBeta(x13) && ss.isValue(x13.S.S)) ? x13.S.S.A : null);
			});
			$QuickView_Client_UI_Common_Data_DataDescription$CorrelationStats.$_statInfoDict = dict;
		}
		return $QuickView_Client_UI_Common_Data_DataDescription$CorrelationStats.$_statInfoDict;
	};
	$QuickView_Client_UI_Common_Data_DataDescription$CorrelationStats.getGetter = function(field) {
		var info = $QuickView_Client_UI_Common_Data_DataDescription$CorrelationStats.get_$statInfoDict()[field];
		if (ss.isNullOrUndefined(info)) {
			throw new ss.ArgumentOutOfRangeException('field', 'Unsupported value.', null, field);
		}
		else {
			return info.getter;
		}
	};
	$QuickView_Client_UI_Common_Data_DataDescription$CorrelationStats.getMaxAbsValue = function(field) {
		var info = $QuickView_Client_UI_Common_Data_DataDescription$CorrelationStats.get_$statInfoDict()[field];
		if (ss.isNullOrUndefined(info)) {
			throw new ss.ArgumentOutOfRangeException('field', 'Unsupported value.', null, field);
		}
		else {
			return info.maxAbsValue;
		}
	};
	$QuickView_Client_UI_Common_Data_DataDescription$CorrelationStats.fromName = function(name) {
		return ss.cast(ss.Enum.parse(QuickView.Client.Models.Stats.CorrelationStatsField, name), String);
	};
	global.QuickView.Client.UI.Common.Data.DataDescription$CorrelationStats = $QuickView_Client_UI_Common_Data_DataDescription$CorrelationStats;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.Data.DataDescription.Currencies
	var $QuickView_Client_UI_Common_Data_DataDescription$Currencies = function() {
	};
	$QuickView_Client_UI_Common_Data_DataDescription$Currencies.__typeName = 'QuickView.Client.UI.Common.Data.DataDescription$Currencies';
	$QuickView_Client_UI_Common_Data_DataDescription$Currencies.fromName = function(name) {
		if (ss.isNullOrEmptyString(name)) {
			throw new ss.ArgumentNullException('name');
		}
		switch (name) {
			case 'USD': {
				return 1;
			}
			case 'EUR': {
				return 2;
			}
			default: {
				throw new ss.NotSupportedException(ss.formatString("Unhandled value: '{0}'.", name));
			}
		}
		//return (TimeSeriesCurrency)Enum.Parse(typeof(TimeSeriesCurrency), name);
	};
	$QuickView_Client_UI_Common_Data_DataDescription$Currencies.getSymbol = function(currency) {
		switch (currency) {
			case 1: {
				return '$';
			}
			case 2: {
				return '€';
			}
			case 0: {
				return '';
			}
			default: {
				throw new ss.NotSupportedException(ss.formatString("Unhandled value: '{0}'.", currency));
			}
		}
	};
	$QuickView_Client_UI_Common_Data_DataDescription$Currencies.getName = function(currency) {
		switch (currency) {
			case 1: {
				return 'USD';
			}
			case 2: {
				return 'EUR';
			}
			default: {
				throw new ss.NotSupportedException(ss.formatString("Unhandled value: '{0}'.", currency));
			}
		}
	};
	$QuickView_Client_UI_Common_Data_DataDescription$Currencies.getDisplayName = function(currency) {
		return $QuickView_Client_UI_Common_Data_DataDescription$Currencies.getName(currency);
	};
	global.QuickView.Client.UI.Common.Data.DataDescription$Currencies = $QuickView_Client_UI_Common_Data_DataDescription$Currencies;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.Data.DataDescription.IndicatorRelationships
	var $QuickView_Client_UI_Common_Data_DataDescription$IndicatorRelationships = function() {
	};
	$QuickView_Client_UI_Common_Data_DataDescription$IndicatorRelationships.__typeName = 'QuickView.Client.UI.Common.Data.DataDescription$IndicatorRelationships';
	$QuickView_Client_UI_Common_Data_DataDescription$IndicatorRelationships.getRelationshipMetadata = function(relationshipName) {
		JS.ArgumentHelper.notNullOrEmpty(relationshipName, 'relationshipName');
		if (ss.isNullOrUndefined($QuickView_Client_UI_Common_Data_DataDescription$IndicatorRelationships.$_metadataDict)) {
			var dict = {};
			dict['Market'.toLowerCase()] = $QuickView_Client_UI_Common_Data_IndicatorRelationshipMetadata.$ctor($QuickView_Client_UI_Common_Data_IndicatorRelationshipMetadataNames.$ctor('Market', 'Mkt'), $QuickView_Client_UI_Common_Data_IndicatorRelationshipMetadataNames.$ctor('Markets', 'Mkts'));
			dict['Book'.toLowerCase()] = $QuickView_Client_UI_Common_Data_IndicatorRelationshipMetadata.$ctor($QuickView_Client_UI_Common_Data_IndicatorRelationshipMetadataNames.$ctor('Book', 'Book'), $QuickView_Client_UI_Common_Data_IndicatorRelationshipMetadataNames.$ctor('Books', 'Books'));
			$QuickView_Client_UI_Common_Data_DataDescription$IndicatorRelationships.$_metadataDict = dict;
		}
		var result = $QuickView_Client_UI_Common_Data_DataDescription$IndicatorRelationships.$_metadataDict[relationshipName.toLowerCase()];
		if (ss.isNullOrUndefined(result)) {
			throw new ss.ArgumentOutOfRangeException('result', 'Invalid value.', null, result);
		}
		return result;
	};
	global.QuickView.Client.UI.Common.Data.DataDescription$IndicatorRelationships = $QuickView_Client_UI_Common_Data_DataDescription$IndicatorRelationships;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.Data.DataDescription.Resolutions
	var $QuickView_Client_UI_Common_Data_DataDescription$Resolutions = function() {
	};
	$QuickView_Client_UI_Common_Data_DataDescription$Resolutions.__typeName = 'QuickView.Client.UI.Common.Data.DataDescription$Resolutions';
	$QuickView_Client_UI_Common_Data_DataDescription$Resolutions.fromName = function(name) {
		if (ss.isNullOrEmptyString(name)) {
			throw new ss.ArgumentNullException('name');
		}
		return ss.cast(ss.Enum.parse(QuickView.Client.Models.Charts.TimeSeriesResolution, name), ss.Int32);
	};
	global.QuickView.Client.UI.Common.Data.DataDescription$Resolutions = $QuickView_Client_UI_Common_Data_DataDescription$Resolutions;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.Data.DataDescription.Units
	var $QuickView_Client_UI_Common_Data_DataDescription$Units = function() {
	};
	$QuickView_Client_UI_Common_Data_DataDescription$Units.__typeName = 'QuickView.Client.UI.Common.Data.DataDescription$Units';
	$QuickView_Client_UI_Common_Data_DataDescription$Units.getSymbol = function(unit, currency) {
		switch (unit) {
			case 4: {
				return '%';
			}
			case 3: {
				return $QuickView_Client_UI_Common_Data_DataDescription$Currencies.getSymbol(currency);
			}
			case 5: {
				return 'u';
			}
			default: {
				throw new ss.NotSupportedException(ss.formatString("Unhandled value: '{0}'.", unit));
			}
		}
	};
	global.QuickView.Client.UI.Common.Data.DataDescription$Units = $QuickView_Client_UI_Common_Data_DataDescription$Units;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.Data.IndicatorRelationshipMetadata
	var $QuickView_Client_UI_Common_Data_IndicatorRelationshipMetadata = function() {
	};
	$QuickView_Client_UI_Common_Data_IndicatorRelationshipMetadata.__typeName = 'QuickView.Client.UI.Common.Data.IndicatorRelationshipMetadata';
	$QuickView_Client_UI_Common_Data_IndicatorRelationshipMetadata.$ctor = function(singularName, pluralName) {
		var $this = {};
		$this.singularName = null;
		$this.pluralName = null;
		$this.singularName = singularName;
		$this.pluralName = pluralName;
		return $this;
	};
	$QuickView_Client_UI_Common_Data_IndicatorRelationshipMetadata.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.UI.Common.Data.IndicatorRelationshipMetadata = $QuickView_Client_UI_Common_Data_IndicatorRelationshipMetadata;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.Data.IndicatorRelationshipMetadataNames
	var $QuickView_Client_UI_Common_Data_IndicatorRelationshipMetadataNames = function() {
	};
	$QuickView_Client_UI_Common_Data_IndicatorRelationshipMetadataNames.__typeName = 'QuickView.Client.UI.Common.Data.IndicatorRelationshipMetadataNames';
	$QuickView_Client_UI_Common_Data_IndicatorRelationshipMetadataNames.$ctor = function(name, nameAbbr) {
		var $this = {};
		$this.N = null;
		$this.NL = null;
		$this.NA = null;
		$this.NAL = null;
		JS.ArgumentHelper.notNull(name, 'name');
		JS.ArgumentHelper.notNull(nameAbbr, 'nameAbbr');
		$this.N = name;
		$this.NL = name.toLowerCase();
		$this.NA = nameAbbr;
		$this.NAL = nameAbbr.toLowerCase();
		return $this;
	};
	$QuickView_Client_UI_Common_Data_IndicatorRelationshipMetadataNames.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.UI.Common.Data.IndicatorRelationshipMetadataNames = $QuickView_Client_UI_Common_Data_IndicatorRelationshipMetadataNames;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.Grid.ChartMode
	var $QuickView_Client_UI_Common_Grid_ChartMode = function() {
	};
	$QuickView_Client_UI_Common_Grid_ChartMode.__typeName = 'QuickView.Client.UI.Common.Grid.ChartMode';
	global.QuickView.Client.UI.Common.Grid.ChartMode = $QuickView_Client_UI_Common_Grid_ChartMode;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.Grid.ChartStatsSortOptions
	var $QuickView_Client_UI_Common_Grid_ChartStatsSortOptions = function(settings) {
		this.columnID = null;
		this.stat = null;
		this.benchmarkStat = null;
		this.direction = 0;
		JS.ArgumentHelper.notNull(settings, 'settings');
		this.columnID = settings.columnID;
		this.stat = settings.stat;
		this.benchmarkStat = settings.benchmarkStat;
		this.direction = settings.direction;
		// Fix for the new field "BenchmarkStat" if it is not set in "Settings"
		if (ss.isNullOrUndefined(this.benchmarkStat)) {
			this.benchmarkStat = 'None';
		}
	};
	$QuickView_Client_UI_Common_Grid_ChartStatsSortOptions.__typeName = 'QuickView.Client.UI.Common.Grid.ChartStatsSortOptions';
	$QuickView_Client_UI_Common_Grid_ChartStatsSortOptions.$ctor1 = function(columnID, stat, benchmarkStat, direction) {
		this.columnID = null;
		this.stat = null;
		this.benchmarkStat = null;
		this.direction = 0;
		this.columnID = columnID;
		this.stat = stat;
		this.benchmarkStat = benchmarkStat;
		this.direction = direction;
	};
	global.QuickView.Client.UI.Common.Grid.ChartStatsSortOptions = $QuickView_Client_UI_Common_Grid_ChartStatsSortOptions;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.Grid.ChartStatsSortOptions.Settings
	var $QuickView_Client_UI_Common_Grid_ChartStatsSortOptions$Settings = function() {
	};
	$QuickView_Client_UI_Common_Grid_ChartStatsSortOptions$Settings.__typeName = 'QuickView.Client.UI.Common.Grid.ChartStatsSortOptions$Settings';
	$QuickView_Client_UI_Common_Grid_ChartStatsSortOptions$Settings.createInstance = function() {
		return $QuickView_Client_UI_Common_Grid_ChartStatsSortOptions$Settings.$ctor();
	};
	$QuickView_Client_UI_Common_Grid_ChartStatsSortOptions$Settings.$ctor = function() {
		var $this = {};
		$this.columnID = null;
		$this.stat = null;
		$this.benchmarkStat = null;
		$this.direction = 0;
		return $this;
	};
	$QuickView_Client_UI_Common_Grid_ChartStatsSortOptions$Settings.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.UI.Common.Grid.ChartStatsSortOptions$Settings = $QuickView_Client_UI_Common_Grid_ChartStatsSortOptions$Settings;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.Grid.ExtendedChartBenchmarkViewMode
	var $QuickView_Client_UI_Common_Grid_ExtendedChartBenchmarkViewMode = function() {
	};
	$QuickView_Client_UI_Common_Grid_ExtendedChartBenchmarkViewMode.__typeName = 'QuickView.Client.UI.Common.Grid.ExtendedChartBenchmarkViewMode';
	global.QuickView.Client.UI.Common.Grid.ExtendedChartBenchmarkViewMode = $QuickView_Client_UI_Common_Grid_ExtendedChartBenchmarkViewMode;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.Grid.ExtendedChartDataViewMode
	var $QuickView_Client_UI_Common_Grid_ExtendedChartDataViewMode = function() {
	};
	$QuickView_Client_UI_Common_Grid_ExtendedChartDataViewMode.__typeName = 'QuickView.Client.UI.Common.Grid.ExtendedChartDataViewMode';
	global.QuickView.Client.UI.Common.Grid.ExtendedChartDataViewMode = $QuickView_Client_UI_Common_Grid_ExtendedChartDataViewMode;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.Grid.GridColumnOptions
	var $QuickView_Client_UI_Common_Grid_GridColumnOptions = function() {
		$QuickView_Client_UI_Common_Grid_GridColumnOptions.$ctor1.call(this, $QuickView_Client_UI_Common_Grid_GridColumnOptions$Settings.$ctor());
	};
	$QuickView_Client_UI_Common_Grid_GridColumnOptions.__typeName = 'QuickView.Client.UI.Common.Grid.GridColumnOptions';
	$QuickView_Client_UI_Common_Grid_GridColumnOptions.$ctor1 = function(settings) {
		this.id = null;
		this.$2$PeriodChangedField = null;
		this.$2$ViewModeChangedField = null;
		$QuickView_Client_UI_Common_Grid_OptionsBase.call(this);
		JS.ArgumentHelper.notNull(settings, 'settings');
		this.id = settings.id;
		this.set_period(settings.period);
		this.set_viewMode(settings.viewMode);
	};
	global.QuickView.Client.UI.Common.Grid.GridColumnOptions = $QuickView_Client_UI_Common_Grid_GridColumnOptions;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.Grid.GridColumnOptions.Settings
	var $QuickView_Client_UI_Common_Grid_GridColumnOptions$Settings = function() {
	};
	$QuickView_Client_UI_Common_Grid_GridColumnOptions$Settings.__typeName = 'QuickView.Client.UI.Common.Grid.GridColumnOptions$Settings';
	$QuickView_Client_UI_Common_Grid_GridColumnOptions$Settings.createInstance = function() {
		return $QuickView_Client_UI_Common_Grid_GridColumnOptions$Settings.$ctor();
	};
	$QuickView_Client_UI_Common_Grid_GridColumnOptions$Settings.$ctor = function() {
		var $this = {};
		$this.id = null;
		$this.period = null;
		$this.viewMode = 0;
		// The defaults MUST be set in the serialized version since they must
		// be present during deserialization
		$this.id = ss.Guid.newGuid().toString();
		$this.period = QuickView.Client.Models.Charts.ChartPeriodDef.$ctor(3, 0);
		$this.viewMode = 1;
		return $this;
	};
	$QuickView_Client_UI_Common_Grid_GridColumnOptions$Settings.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.UI.Common.Grid.GridColumnOptions$Settings = $QuickView_Client_UI_Common_Grid_GridColumnOptions$Settings;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.Grid.GridDisplayOptions
	var $QuickView_Client_UI_Common_Grid_GridDisplayOptions = function() {
	};
	$QuickView_Client_UI_Common_Grid_GridDisplayOptions.__typeName = 'QuickView.Client.UI.Common.Grid.GridDisplayOptions';
	global.QuickView.Client.UI.Common.Grid.GridDisplayOptions = $QuickView_Client_UI_Common_Grid_GridDisplayOptions;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.Grid.GridIndicatorBenchmarkOptions
	var $QuickView_Client_UI_Common_Grid_GridIndicatorBenchmarkOptions = function() {
		$QuickView_Client_UI_Common_Grid_GridIndicatorBenchmarkOptions.$ctor1.call(this, $QuickView_Client_UI_Common_Grid_GridIndicatorBenchmarkOptions$Settings.$ctor());
	};
	$QuickView_Client_UI_Common_Grid_GridIndicatorBenchmarkOptions.__typeName = 'QuickView.Client.UI.Common.Grid.GridIndicatorBenchmarkOptions';
	$QuickView_Client_UI_Common_Grid_GridIndicatorBenchmarkOptions.$ctor2 = function(showBenchmarks, indicatorIDs) {
		this.showBenchmarks = false;
		this.indicatorIDs = null;
		this.$_indicatorList = null;
		this.showBenchmarks = showBenchmarks;
		this.indicatorIDs = indicatorIDs;
	};
	$QuickView_Client_UI_Common_Grid_GridIndicatorBenchmarkOptions.$ctor1 = function(settings) {
		this.showBenchmarks = false;
		this.indicatorIDs = null;
		this.$_indicatorList = null;
		JS.ArgumentHelper.notNull(settings, 'settings');
		this.showBenchmarks = settings.S;
		this.indicatorIDs = settings.I;
	};
	global.QuickView.Client.UI.Common.Grid.GridIndicatorBenchmarkOptions = $QuickView_Client_UI_Common_Grid_GridIndicatorBenchmarkOptions;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.Grid.GridIndicatorBenchmarkOptions.Settings
	var $QuickView_Client_UI_Common_Grid_GridIndicatorBenchmarkOptions$Settings = function() {
	};
	$QuickView_Client_UI_Common_Grid_GridIndicatorBenchmarkOptions$Settings.__typeName = 'QuickView.Client.UI.Common.Grid.GridIndicatorBenchmarkOptions$Settings';
	$QuickView_Client_UI_Common_Grid_GridIndicatorBenchmarkOptions$Settings.createInstance = function() {
		return $QuickView_Client_UI_Common_Grid_GridIndicatorBenchmarkOptions$Settings.$ctor();
	};
	$QuickView_Client_UI_Common_Grid_GridIndicatorBenchmarkOptions$Settings.$ctor = function() {
		var $this = {};
		$this.S = false;
		$this.I = null;
		return $this;
	};
	$QuickView_Client_UI_Common_Grid_GridIndicatorBenchmarkOptions$Settings.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.UI.Common.Grid.GridIndicatorBenchmarkOptions$Settings = $QuickView_Client_UI_Common_Grid_GridIndicatorBenchmarkOptions$Settings;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.Grid.GridIndicatorOptions
	var $QuickView_Client_UI_Common_Grid_GridIndicatorOptions = function() {
		$QuickView_Client_UI_Common_Grid_GridIndicatorOptions.$ctor1.call(this, $QuickView_Client_UI_Common_Grid_GridIndicatorOptions$Settings.$ctor());
	};
	$QuickView_Client_UI_Common_Grid_GridIndicatorOptions.__typeName = 'QuickView.Client.UI.Common.Grid.GridIndicatorOptions';
	$QuickView_Client_UI_Common_Grid_GridIndicatorOptions.$ctor1 = function(settings) {
		this.$2$BenchmarksChangedField = null;
		$QuickView_Client_UI_Common_Grid_OptionsBase.call(this);
		JS.ArgumentHelper.notNull(settings, 'settings');
		this.set_benchmarks((ss.isNullOrUndefined(settings.B) ? null : new $QuickView_Client_UI_Common_Grid_GridIndicatorBenchmarkOptions.$ctor1(settings.B)));
	};
	global.QuickView.Client.UI.Common.Grid.GridIndicatorOptions = $QuickView_Client_UI_Common_Grid_GridIndicatorOptions;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.Grid.GridIndicatorOptions.Settings
	var $QuickView_Client_UI_Common_Grid_GridIndicatorOptions$Settings = function() {
	};
	$QuickView_Client_UI_Common_Grid_GridIndicatorOptions$Settings.__typeName = 'QuickView.Client.UI.Common.Grid.GridIndicatorOptions$Settings';
	$QuickView_Client_UI_Common_Grid_GridIndicatorOptions$Settings.createInstance = function() {
		return $QuickView_Client_UI_Common_Grid_GridIndicatorOptions$Settings.$ctor();
	};
	$QuickView_Client_UI_Common_Grid_GridIndicatorOptions$Settings.$ctor = function() {
		var $this = {};
		$this.B = null;
		return $this;
	};
	$QuickView_Client_UI_Common_Grid_GridIndicatorOptions$Settings.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.UI.Common.Grid.GridIndicatorOptions$Settings = $QuickView_Client_UI_Common_Grid_GridIndicatorOptions$Settings;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.Grid.GridOptions
	var $QuickView_Client_UI_Common_Grid_GridOptions = function() {
		$QuickView_Client_UI_Common_Grid_GridOptions.$ctor1.call(this, $QuickView_Client_UI_Common_Grid_GridOptions$Settings.$ctor());
	};
	$QuickView_Client_UI_Common_Grid_GridOptions.__typeName = 'QuickView.Client.UI.Common.Grid.GridOptions';
	$QuickView_Client_UI_Common_Grid_GridOptions.$ctor1 = function(settings) {
		this.$2$StatsSortSettingsChangedField = null;
		this.$2$DisplayOptionsChangedField = null;
		this.$2$SortModeChangedField = null;
		this.$2$SyncTopRowChangedField = null;
		this.$2$ExtendedChartUnitChangedField = null;
		$QuickView_Client_UI_Common_Grid_OptionsBase.call(this);
		JS.ArgumentHelper.notNull(settings, 'settings');
		this.set_statsSortOptions((ss.isNullOrUndefined(settings.statsSortSettings) ? null : new $QuickView_Client_UI_Common_Grid_ChartStatsSortOptions(settings.statsSortSettings)));
		// BUG fix - ensure the tooltips are always visible; REMOVE in next version
		this.set_displayOptions(settings.displayOptions | 8);
		this.set_sortMode(settings.enableSorting);
		this.set_syncTopRow(settings.syncTopRow);
	};
	global.QuickView.Client.UI.Common.Grid.GridOptions = $QuickView_Client_UI_Common_Grid_GridOptions;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.Grid.GridOptions.Settings
	var $QuickView_Client_UI_Common_Grid_GridOptions$Settings = function() {
	};
	$QuickView_Client_UI_Common_Grid_GridOptions$Settings.__typeName = 'QuickView.Client.UI.Common.Grid.GridOptions$Settings';
	$QuickView_Client_UI_Common_Grid_GridOptions$Settings.createInstance = function() {
		return $QuickView_Client_UI_Common_Grid_GridOptions$Settings.$ctor();
	};
	$QuickView_Client_UI_Common_Grid_GridOptions$Settings.$ctor = function() {
		var $this = {};
		$this.statsSortSettings = null;
		$this.displayOptions = 0;
		$this.enableSorting = 0;
		$this.syncTopRow = false;
		// The defaults MUST be set in the serialized version since they must
		// be present during deserialization
		$this.displayOptions = 12;
		$this.enableSorting = 2;
		return $this;
	};
	$QuickView_Client_UI_Common_Grid_GridOptions$Settings.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.UI.Common.Grid.GridOptions$Settings = $QuickView_Client_UI_Common_Grid_GridOptions$Settings;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.Grid.GridSortMode
	var $QuickView_Client_UI_Common_Grid_GridSortMode = function() {
	};
	$QuickView_Client_UI_Common_Grid_GridSortMode.__typeName = 'QuickView.Client.UI.Common.Grid.GridSortMode';
	global.QuickView.Client.UI.Common.Grid.GridSortMode = $QuickView_Client_UI_Common_Grid_GridSortMode;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.Grid.GridViewMode
	var $QuickView_Client_UI_Common_Grid_GridViewMode = function() {
	};
	$QuickView_Client_UI_Common_Grid_GridViewMode.__typeName = 'QuickView.Client.UI.Common.Grid.GridViewMode';
	global.QuickView.Client.UI.Common.Grid.GridViewMode = $QuickView_Client_UI_Common_Grid_GridViewMode;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.Grid.OptionsBase
	var $QuickView_Client_UI_Common_Grid_OptionsBase = function() {
		this.$_valueDict = null;
		this.$1$OptionChangedField = null;
		this.$_onOptionChangedExecutor = null;
		this.$_valueDict = {};
	};
	$QuickView_Client_UI_Common_Grid_OptionsBase.__typeName = 'QuickView.Client.UI.Common.Grid.OptionsBase';
	global.QuickView.Client.UI.Common.Grid.OptionsBase = $QuickView_Client_UI_Common_Grid_OptionsBase;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.Grid.RowSortMode
	var $QuickView_Client_UI_Common_Grid_RowSortMode = function() {
	};
	$QuickView_Client_UI_Common_Grid_RowSortMode.__typeName = 'QuickView.Client.UI.Common.Grid.RowSortMode';
	global.QuickView.Client.UI.Common.Grid.RowSortMode = $QuickView_Client_UI_Common_Grid_RowSortMode;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.Grid.TopBottomMarketsViewMode
	var $QuickView_Client_UI_Common_Grid_TopBottomMarketsViewMode = function() {
	};
	$QuickView_Client_UI_Common_Grid_TopBottomMarketsViewMode.__typeName = 'QuickView.Client.UI.Common.Grid.TopBottomMarketsViewMode';
	global.QuickView.Client.UI.Common.Grid.TopBottomMarketsViewMode = $QuickView_Client_UI_Common_Grid_TopBottomMarketsViewMode;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.Settings.ApplicationSettings
	var $QuickView_Client_UI_Common_Settings_ApplicationSettings = function() {
		$QuickView_Client_UI_Common_Settings_ApplicationSettings.$ctor1.call(this, 'QuickView4');
	};
	$QuickView_Client_UI_Common_Settings_ApplicationSettings.__typeName = 'QuickView.Client.UI.Common.Settings.ApplicationSettings';
	$QuickView_Client_UI_Common_Settings_ApplicationSettings.$ctor1 = function(applicationName) {
		$QuickView_Client_UI_Common_Settings_SettingsBase.call(this, applicationName);
	};
	global.QuickView.Client.UI.Common.Settings.ApplicationSettings = $QuickView_Client_UI_Common_Settings_ApplicationSettings;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.Settings.GridIndicatorDataCache
	var $QuickView_Client_UI_Common_Settings_GridIndicatorDataCache = function() {
	};
	$QuickView_Client_UI_Common_Settings_GridIndicatorDataCache.__typeName = 'QuickView.Client.UI.Common.Settings.GridIndicatorDataCache';
	$QuickView_Client_UI_Common_Settings_GridIndicatorDataCache.createInstance = function() {
		return $QuickView_Client_UI_Common_Settings_GridIndicatorDataCache.$ctor();
	};
	$QuickView_Client_UI_Common_Settings_GridIndicatorDataCache.$ctor = function() {
		var $this = {};
		$this.P = null;
		return $this;
	};
	$QuickView_Client_UI_Common_Settings_GridIndicatorDataCache.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.UI.Common.Settings.GridIndicatorDataCache = $QuickView_Client_UI_Common_Settings_GridIndicatorDataCache;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.Settings.GridIndicatorPositions
	var $QuickView_Client_UI_Common_Settings_GridIndicatorPositions = function() {
	};
	$QuickView_Client_UI_Common_Settings_GridIndicatorPositions.__typeName = 'QuickView.Client.UI.Common.Settings.GridIndicatorPositions';
	$QuickView_Client_UI_Common_Settings_GridIndicatorPositions.$ctor = function(indicatorID, short1, long1) {
		var $this = {};
		$this.I = null;
		$this.S = null;
		$this.L = null;
		$this.I = indicatorID;
		$this.S = short1;
		$this.L = long1;
		return $this;
	};
	$QuickView_Client_UI_Common_Settings_GridIndicatorPositions.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.UI.Common.Settings.GridIndicatorPositions = $QuickView_Client_UI_Common_Settings_GridIndicatorPositions;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.Settings.GridIndicatorPositionsCache
	var $QuickView_Client_UI_Common_Settings_GridIndicatorPositionsCache = function() {
	};
	$QuickView_Client_UI_Common_Settings_GridIndicatorPositionsCache.__typeName = 'QuickView.Client.UI.Common.Settings.GridIndicatorPositionsCache';
	$QuickView_Client_UI_Common_Settings_GridIndicatorPositionsCache.createInstance = function() {
		return $QuickView_Client_UI_Common_Settings_GridIndicatorPositionsCache.$ctor();
	};
	$QuickView_Client_UI_Common_Settings_GridIndicatorPositionsCache.$ctor = function() {
		var $this = {};
		$this.T = null;
		$this.L = null;
		return $this;
	};
	$QuickView_Client_UI_Common_Settings_GridIndicatorPositionsCache.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.UI.Common.Settings.GridIndicatorPositionsCache = $QuickView_Client_UI_Common_Settings_GridIndicatorPositionsCache;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.Settings.GridSettings
	var $QuickView_Client_UI_Common_Settings_GridSettings = function(nameSpace) {
		this.$_options = null;
		this.$_columns = null;
		this.$_openRows = null;
		this.$_favorites = null;
		$QuickView_Client_UI_Common_Settings_SettingsBase.call(this, nameSpace);
	};
	$QuickView_Client_UI_Common_Settings_GridSettings.__typeName = 'QuickView.Client.UI.Common.Settings.GridSettings';
	$QuickView_Client_UI_Common_Settings_GridSettings.$indicatorListToText = function(list) {
		if (ss.isNullOrUndefined(list) || ss.count(list) === 0) {
			return null;
		}
		else {
			var refList = Enumerable.from(list).select(function(x) {
				return x.I;
			}).toArray();
			return JSON.stringify(refList);
		}
	};
	$QuickView_Client_UI_Common_Settings_GridSettings.$indicatorListFromText = function(text) {
		if (ss.isNullOrEmptyString(text)) {
			return [];
		}
		else {
			var refList;
			try {
				refList = JSON.parse(text);
			}
			catch ($t1) {
				refList = [];
			}
			var result = [];
			for (var $t2 = 0; $t2 < refList.length; $t2++) {
				var indicatorID = refList[$t2];
				var indicator = QuickView.Client.Models.Charts.RuntimeChartMetadata.getIndicator(QuickView.Client.Common.AppContext.metadata, indicatorID);
				if (ss.isValue(indicator)) {
					ss.add(result, indicator);
				}
			}
			return result;
		}
	};
	global.QuickView.Client.UI.Common.Settings.GridSettings = $QuickView_Client_UI_Common_Settings_GridSettings;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.Settings.SettingsBase
	var $QuickView_Client_UI_Common_Settings_SettingsBase = function(nameSpace) {
		this.$_nameSpace = null;
		if (ss.isNullOrEmptyString(nameSpace)) {
			throw new ss.ArgumentNullException('nameSpace');
		}
		this.$_nameSpace = nameSpace;
	};
	$QuickView_Client_UI_Common_Settings_SettingsBase.__typeName = 'QuickView.Client.UI.Common.Settings.SettingsBase';
	global.QuickView.Client.UI.Common.Settings.SettingsBase = $QuickView_Client_UI_Common_Settings_SettingsBase;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Common.Settings.UserSettings
	var $QuickView_Client_UI_Common_Settings_UserSettings = function(nameSpace) {
		this.$_grid = null;
		$QuickView_Client_UI_Common_Settings_SettingsBase.call(this, nameSpace);
	};
	$QuickView_Client_UI_Common_Settings_UserSettings.__typeName = 'QuickView.Client.UI.Common.Settings.UserSettings';
	global.QuickView.Client.UI.Common.Settings.UserSettings = $QuickView_Client_UI_Common_Settings_UserSettings;
	ss.initClass($QuickView_$Client_UI_Common_UIServices$FastScrollingDisabled, $asm, {
		dispose: function() {
			if (this.$_disposed) {
				return;
			}
			$QuickView_Client_UI_Common_UIServices.$enableFastScrolling();
			this.$_disposed = true;
		}
	}, null, [ss.IDisposable]);
	ss.initClass($QuickView_$Client_UI_Common_UIServices$NopDisposable, $asm, {
		dispose: function() {
			// Do nothing
		}
	}, null, [ss.IDisposable]);
	ss.initClass($QuickView_$Client_UI_Common_Data_DataDescription$ChartStats$StatInfo, $asm, {});
	ss.initClass($QuickView_$Client_UI_Common_Data_DataDescription$CorrelationStats$StatInfo, $asm, {});
	ss.initClass($QuickView_Client_UI_Common_ApplicationElement, $asm, {
		add_minimized: function(value) {
			this.$1$MinimizedField = ss.delegateCombine(this.$1$MinimizedField, value);
		},
		remove_minimized: function(value) {
			this.$1$MinimizedField = ss.delegateRemove(this.$1$MinimizedField, value);
		},
		$onMinimized: function(e) {
			var temp = this.$1$MinimizedField;
			if (!ss.staticEquals(temp, null)) {
				temp(this, e);
			}
		},
		add_restored: function(value) {
			this.$1$RestoredField = ss.delegateCombine(this.$1$RestoredField, value);
		},
		remove_restored: function(value) {
			this.$1$RestoredField = ss.delegateRemove(this.$1$RestoredField, value);
		},
		$onRestored: function(e) {
			var temp = this.$1$RestoredField;
			if (!ss.staticEquals(temp, null)) {
				temp(this, e);
			}
		},
		minimize: function() {
			if (this.isMinimized) {
				return;
			}
			this.isMinimized = true;
			this.element.addClass('minimized');
			this.$onMinimized(ss.EventArgs.Empty);
		},
		restore: function() {
			if (false === this.isMinimized) {
				return;
			}
			this.isMinimized = false;
			this.element.removeClass('minimized');
			this.$onRestored(ss.EventArgs.Empty);
		},
		toggleMinimize: function() {
			if (this.isMinimized) {
				this.restore();
			}
			else {
				this.minimize();
			}
		}
	});
	ss.initEnum($QuickView_Client_UI_Common_FontWeight, $asm, { normal: 'normal', bold: 'bold' }, true);
	ss.initClass($QuickView_Client_UI_Common_Format, $asm, {});
	ss.initClass($QuickView_Client_UI_Common_Format$Number, $asm, {});
	ss.initClass($QuickView_Client_UI_Common_Format$Time, $asm, {});
	ss.initEnum($QuickView_Client_UI_Common_FormatNumberDenominator, $asm, { auto: 0, none: 1, thousands: 1000, millions: 1000000, billions: 1000000000 });
	ss.initEnum($QuickView_Client_UI_Common_FormatNumberOptions, $asm, { none: 0, displaySign: 1, removeTrailingZeros: 2, doNotDisplayDenominationSymbol: 4 });
	ss.initEnum($QuickView_Client_UI_Common_HtmlColor, $asm, { transparent: 'transparent', black: 'black', white: 'white' }, true);
	ss.initClass($QuickView_Client_UI_Common_LoadingScreen, $asm, {
		get_message: function() {
			return this.$_contentElement.text();
		},
		set_message: function(value) {
			this.$_contentElement.text(value);
		},
		show: function() {
			this.$_element.css('display', '');
		},
		show$1: function(message) {
			this.set_message(message);
			this.show();
		},
		hide: function() {
			this.$_element.css('display', 'none');
		}
	});
	ss.initEnum($QuickView_Client_UI_Common_SortDirection, $asm, { ascending: 0, descending: 1 });
	ss.initClass($QuickView_Client_UI_Common_StatFormat, $asm, {});
	ss.initClass($QuickView_Client_UI_Common_Styles, $asm, {});
	ss.initClass($QuickView_Client_UI_Common_Styles$Window, $asm, {});
	ss.initClass($QuickView_Client_UI_Common_UIActivity, $asm, {
		add_activity: function(value) {
			this.$1$ActivityField = ss.delegateCombine(this.$1$ActivityField, value);
		},
		remove_activity: function(value) {
			this.$1$ActivityField = ss.delegateRemove(this.$1$ActivityField, value);
		},
		get_inactivityDuration: function() {
			return new ss.TimeSpan((new Date() - this.lastActivityTime) * 10000);
		},
		$onActivity: function(e) {
			var temp = this.$1$ActivityField;
			if (!ss.staticEquals(temp, null)) {
				temp(this, e);
			}
		},
		$attachUIEvents: function() {
			var window1 = $(window.window);
			for (var $t1 = 0; $t1 < $QuickView_Client_UI_Common_UIActivity.$eventList.length; $t1++) {
				var eventName = $QuickView_Client_UI_Common_UIActivity.$eventList[$t1];
				window1.on(eventName + '.ui-activity', ss.mkdel(this, this.$uiEventHandler));
			}
		},
		$detachUIEvents: function() {
			var window1 = $(window.window);
			window1.off('.ui-activity');
		},
		$uiEventHandler: function(e) {
			this.lastActivityTime = new Date();
		}
	});
	ss.initClass($QuickView_Client_UI_Common_UIConstants, $asm, {});
	ss.initClass($QuickView_Client_UI_Common_UIElements, $asm, {});
	ss.initClass($QuickView_Client_UI_Common_UIServices, $asm, {});
	ss.initClass($QuickView_Client_UI_Common_Data_DataDescription, $asm, {});
	ss.initClass($QuickView_Client_UI_Common_Data_DataDescription$ChartPeriods, $asm, {});
	ss.initClass($QuickView_Client_UI_Common_Data_DataDescription$ChartStats, $asm, {});
	ss.initClass($QuickView_Client_UI_Common_Data_DataDescription$CorrelationStats, $asm, {});
	ss.initClass($QuickView_Client_UI_Common_Data_DataDescription$Currencies, $asm, {});
	ss.initClass($QuickView_Client_UI_Common_Data_DataDescription$IndicatorRelationships, $asm, {});
	ss.initClass($QuickView_Client_UI_Common_Data_DataDescription$Resolutions, $asm, {});
	ss.initClass($QuickView_Client_UI_Common_Data_DataDescription$Units, $asm, {});
	ss.initClass($QuickView_Client_UI_Common_Data_IndicatorRelationshipMetadata, $asm, {});
	ss.initClass($QuickView_Client_UI_Common_Data_IndicatorRelationshipMetadataNames, $asm, {});
	ss.initEnum($QuickView_Client_UI_Common_Grid_ChartMode, $asm, { collapsed: 1, extended: 2 });
	ss.initClass($QuickView_Client_UI_Common_Grid_ChartStatsSortOptions, $asm, {
		get_isStatSet: function() {
			if (this.stat === 'None' && this.benchmarkStat === 'None') {
				return false;
			}
			else {
				return true;
			}
		},
		equals: function(o) {
			var other = ss.safeCast(o, $QuickView_Client_UI_Common_Grid_ChartStatsSortOptions);
			if (ss.isNullOrUndefined(other)) {
				return false;
			}
			else {
				return ss.referenceEquals(this.columnID, other.columnID) && this.stat === other.stat && this.benchmarkStat === other.benchmarkStat && this.direction === other.direction;
			}
		},
		getHashCode: function() {
			return ss.getHashCode(this.columnID) ^ ss.getHashCode(this.stat) ^ ss.getHashCode(this.benchmarkStat) ^ ss.getHashCode(this.direction);
		},
		getSettings: function() {
			var $t1 = $QuickView_Client_UI_Common_Grid_ChartStatsSortOptions$Settings.$ctor();
			$t1.columnID = this.columnID;
			$t1.stat = this.stat;
			$t1.benchmarkStat = this.benchmarkStat;
			$t1.direction = this.direction;
			return $t1;
		}
	});
	$QuickView_Client_UI_Common_Grid_ChartStatsSortOptions.$ctor1.prototype = $QuickView_Client_UI_Common_Grid_ChartStatsSortOptions.prototype;
	ss.initClass($QuickView_Client_UI_Common_Grid_ChartStatsSortOptions$Settings, $asm, {});
	ss.initEnum($QuickView_Client_UI_Common_Grid_ExtendedChartBenchmarkViewMode, $asm, { unknown: 0, indicator: 1, indicatorAndBenchmark: 2 });
	ss.initEnum($QuickView_Client_UI_Common_Grid_ExtendedChartDataViewMode, $asm, { default$1: 0, slippage: 1, drawdown: 2 });
	ss.initClass($QuickView_Client_UI_Common_Grid_OptionsBase, $asm, {
		add_optionChanged: function(value) {
			this.$1$OptionChangedField = ss.delegateCombine(this.$1$OptionChangedField, value);
		},
		remove_optionChanged: function(value) {
			this.$1$OptionChangedField = ss.delegateRemove(this.$1$OptionChangedField, value);
		},
		$onOptionChanged_Postponed: function() {
			var temp = this.$1$OptionChangedField;
			if (!ss.staticEquals(temp, null)) {
				temp(this, ss.EventArgs.Empty);
			}
		},
		$onOptionChanged: function(e) {
			if (ss.isNullOrUndefined(this.$_onOptionChangedExecutor)) {
				this.$_onOptionChangedExecutor = new JS.Threading.PostponeExecutor(ss.mkdel(this, this.$onOptionChanged_Postponed), 500);
			}
			this.$_onOptionChangedExecutor.execute();
		},
		getValue: function(T) {
			return function(fieldName) {
				var value = this.$_valueDict[fieldName];
				return (ss.isNullOrUndefined(value) ? ss.getDefaultValue(T) : value);
			};
		},
		setValue: function(T) {
			return function(fieldName, newValue, eventHandler, beforeEventHandler) {
				var oldValue = this.getValue(T).call(this, fieldName);
				if (false === ss.staticEquals(oldValue, newValue)) {
					this.$_valueDict[fieldName] = newValue;
					window.setTimeout(ss.mkdel(this, function() {
						// The event handler must be called asynchronously after a delay. Since
						// options are primely changed by menus and since changes to options affect
						// the UI immediately this gives time to menus to close or otherwise to not
						// block them until option's event handlers are executed
						// However the value MUST be set immediately since the code that changes values
						// usually relies that they change immediately (since they are properties).
						if (!ss.staticEquals(beforeEventHandler, null)) {
							beforeEventHandler();
						}
						if (!ss.staticEquals(eventHandler, null)) {
							eventHandler(this, ss.EventArgs.Empty);
						}
						this.$onOptionChanged(ss.EventArgs.Empty);
					}), 100);
				}
			};
		}
	});
	ss.initClass($QuickView_Client_UI_Common_Grid_GridColumnOptions, $asm, {
		get_period: function() {
			return this.getValue(QuickView.Client.Models.Charts.ChartPeriodDef).call(this, 'Period');
		},
		set_period: function(value) {
			this.setValue(QuickView.Client.Models.Charts.ChartPeriodDef).call(this, 'Period', value, this.$2$PeriodChangedField, null);
		},
		add_periodChanged: function(value) {
			this.$2$PeriodChangedField = ss.delegateCombine(this.$2$PeriodChangedField, value);
		},
		remove_periodChanged: function(value) {
			this.$2$PeriodChangedField = ss.delegateRemove(this.$2$PeriodChangedField, value);
		},
		get_viewMode: function() {
			return this.getValue($QuickView_Client_UI_Common_Grid_GridViewMode).call(this, 'ViewMode');
		},
		set_viewMode: function(value) {
			this.setValue($QuickView_Client_UI_Common_Grid_GridViewMode).call(this, 'ViewMode', value, this.$2$ViewModeChangedField, null);
		},
		add_viewModeChanged: function(value) {
			this.$2$ViewModeChangedField = ss.delegateCombine(this.$2$ViewModeChangedField, value);
		},
		remove_viewModeChanged: function(value) {
			this.$2$ViewModeChangedField = ss.delegateRemove(this.$2$ViewModeChangedField, value);
		},
		getSettings: function() {
			var $t1 = $QuickView_Client_UI_Common_Grid_GridColumnOptions$Settings.$ctor();
			$t1.id = this.id;
			$t1.period = this.get_period();
			$t1.viewMode = this.get_viewMode();
			return $t1;
		}
	}, $QuickView_Client_UI_Common_Grid_OptionsBase);
	$QuickView_Client_UI_Common_Grid_GridColumnOptions.$ctor1.prototype = $QuickView_Client_UI_Common_Grid_GridColumnOptions.prototype;
	ss.initClass($QuickView_Client_UI_Common_Grid_GridColumnOptions$Settings, $asm, {});
	ss.initEnum($QuickView_Client_UI_Common_Grid_GridDisplayOptions, $asm, { none: 0, showLastValue: 1, showDataSize: 2, showCellHeader: 4, showTooltips: 8 });
	ss.initClass($QuickView_Client_UI_Common_Grid_GridIndicatorBenchmarkOptions, $asm, {
		get_indicators: function() {
			if (ss.isNullOrUndefined(this.$_indicatorList)) {
				var list;
				if (ss.isNullOrUndefined(this.indicatorIDs) || this.indicatorIDs.length === 0) {
					list = null;
				}
				else {
					list = [];
					for (var $t1 = 0; $t1 < this.indicatorIDs.length; $t1++) {
						var indicatorID = this.indicatorIDs[$t1];
						var indicator = QuickView.Client.Models.Charts.RuntimeChartMetadata.getIndicator(QuickView.Client.Common.AppContext.metadata, indicatorID);
						if (ss.isValue(indicator)) {
							ss.add(list, indicator);
						}
					}
					if (ss.count(list) === 0) {
						list = null;
					}
				}
				this.$_indicatorList = JS.MTuple.create(ss.IList).call(null, list);
			}
			return this.$_indicatorList.item1;
		},
		$getSettings: function() {
			var $t1 = $QuickView_Client_UI_Common_Grid_GridIndicatorBenchmarkOptions$Settings.$ctor();
			$t1.S = this.showBenchmarks;
			$t1.I = this.indicatorIDs;
			return $t1;
		}
	});
	$QuickView_Client_UI_Common_Grid_GridIndicatorBenchmarkOptions.$ctor2.prototype = $QuickView_Client_UI_Common_Grid_GridIndicatorBenchmarkOptions.$ctor1.prototype = $QuickView_Client_UI_Common_Grid_GridIndicatorBenchmarkOptions.prototype;
	ss.initClass($QuickView_Client_UI_Common_Grid_GridIndicatorBenchmarkOptions$Settings, $asm, {});
	ss.initClass($QuickView_Client_UI_Common_Grid_GridIndicatorOptions, $asm, {
		get_benchmarks: function() {
			return this.getValue($QuickView_Client_UI_Common_Grid_GridIndicatorBenchmarkOptions).call(this, 'Benchmarks') || $QuickView_Client_UI_Common_Grid_GridIndicatorBenchmarkOptions.$empty;
		},
		set_benchmarks: function(value) {
			this.setValue($QuickView_Client_UI_Common_Grid_GridIndicatorBenchmarkOptions).call(this, 'Benchmarks', value, this.$2$BenchmarksChangedField, null);
		},
		get_$privateBenchmarks: function() {
			return this.getValue($QuickView_Client_UI_Common_Grid_GridIndicatorBenchmarkOptions).call(this, 'Benchmarks');
		},
		add_benchmarksChanged: function(value) {
			this.$2$BenchmarksChangedField = ss.delegateCombine(this.$2$BenchmarksChangedField, value);
		},
		remove_benchmarksChanged: function(value) {
			this.$2$BenchmarksChangedField = ss.delegateRemove(this.$2$BenchmarksChangedField, value);
		},
		getSettings: function() {
			var $t1 = $QuickView_Client_UI_Common_Grid_GridIndicatorOptions$Settings.$ctor();
			$t1.B = (ss.isNullOrUndefined(this.get_$privateBenchmarks()) ? null : this.get_$privateBenchmarks().$getSettings());
			return $t1;
		}
	}, $QuickView_Client_UI_Common_Grid_OptionsBase);
	$QuickView_Client_UI_Common_Grid_GridIndicatorOptions.$ctor1.prototype = $QuickView_Client_UI_Common_Grid_GridIndicatorOptions.prototype;
	ss.initClass($QuickView_Client_UI_Common_Grid_GridIndicatorOptions$Settings, $asm, {});
	ss.initClass($QuickView_Client_UI_Common_Grid_GridOptions, $asm, {
		get_statsSortOptions: function() {
			return this.getValue($QuickView_Client_UI_Common_Grid_ChartStatsSortOptions).call(this, 'StatsSortOptions');
		},
		set_statsSortOptions: function(value) {
			this.setValue($QuickView_Client_UI_Common_Grid_ChartStatsSortOptions).call(this, 'StatsSortOptions', value, this.$2$StatsSortSettingsChangedField, null);
		},
		add_statsSortSettingsChanged: function(value) {
			this.$2$StatsSortSettingsChangedField = ss.delegateCombine(this.$2$StatsSortSettingsChangedField, value);
		},
		remove_statsSortSettingsChanged: function(value) {
			this.$2$StatsSortSettingsChangedField = ss.delegateRemove(this.$2$StatsSortSettingsChangedField, value);
		},
		get_displayOptions: function() {
			return this.getValue($QuickView_Client_UI_Common_Grid_GridDisplayOptions).call(this, 'DisplayOptions');
		},
		set_displayOptions: function(value) {
			this.setValue($QuickView_Client_UI_Common_Grid_GridDisplayOptions).call(this, 'DisplayOptions', value, this.$2$DisplayOptionsChangedField, null);
		},
		add_displayOptionsChanged: function(value) {
			this.$2$DisplayOptionsChangedField = ss.delegateCombine(this.$2$DisplayOptionsChangedField, value);
		},
		remove_displayOptionsChanged: function(value) {
			this.$2$DisplayOptionsChangedField = ss.delegateRemove(this.$2$DisplayOptionsChangedField, value);
		},
		get_sortMode: function() {
			return this.getValue($QuickView_Client_UI_Common_Grid_GridSortMode).call(this, 'SortMode');
		},
		set_sortMode: function(value) {
			this.setValue($QuickView_Client_UI_Common_Grid_GridSortMode).call(this, 'SortMode', value, this.$2$SortModeChangedField, null);
		},
		add_sortModeChanged: function(value) {
			this.$2$SortModeChangedField = ss.delegateCombine(this.$2$SortModeChangedField, value);
		},
		remove_sortModeChanged: function(value) {
			this.$2$SortModeChangedField = ss.delegateRemove(this.$2$SortModeChangedField, value);
		},
		get_syncTopRow: function() {
			return this.getValue(Boolean).call(this, 'SyncTopRow');
		},
		set_syncTopRow: function(value) {
			this.setValue(Boolean).call(this, 'SyncTopRow', value, this.$2$SyncTopRowChangedField, null);
		},
		add_syncTopRowChanged: function(value) {
			this.$2$SyncTopRowChangedField = ss.delegateCombine(this.$2$SyncTopRowChangedField, value);
		},
		remove_syncTopRowChanged: function(value) {
			this.$2$SyncTopRowChangedField = ss.delegateRemove(this.$2$SyncTopRowChangedField, value);
		},
		get_extendedChartUnit: function() {
			return this.getValue(QuickView.Client.Models.Charts.TimeSeriesUnit).call(this, 'ExtendedChartUnit');
		},
		set_extendedChartUnit: function(value) {
			this.setValue(QuickView.Client.Models.Charts.TimeSeriesUnit).call(this, 'ExtendedChartUnit', value, this.$2$ExtendedChartUnitChangedField, null);
		},
		add_extendedChartUnitChanged: function(value) {
			this.$2$ExtendedChartUnitChangedField = ss.delegateCombine(this.$2$ExtendedChartUnitChangedField, value);
		},
		remove_extendedChartUnitChanged: function(value) {
			this.$2$ExtendedChartUnitChangedField = ss.delegateRemove(this.$2$ExtendedChartUnitChangedField, value);
		},
		getSettings: function() {
			var $t1 = $QuickView_Client_UI_Common_Grid_GridOptions$Settings.$ctor();
			$t1.statsSortSettings = (ss.isNullOrUndefined(this.get_statsSortOptions()) ? null : this.get_statsSortOptions().getSettings());
			$t1.displayOptions = this.get_displayOptions();
			$t1.enableSorting = this.get_sortMode();
			$t1.syncTopRow = this.get_syncTopRow();
			return $t1;
		}
	}, $QuickView_Client_UI_Common_Grid_OptionsBase);
	$QuickView_Client_UI_Common_Grid_GridOptions.$ctor1.prototype = $QuickView_Client_UI_Common_Grid_GridOptions.prototype;
	ss.initClass($QuickView_Client_UI_Common_Grid_GridOptions$Settings, $asm, {});
	ss.initEnum($QuickView_Client_UI_Common_Grid_GridSortMode, $asm, { default$1: 2, unsorted: 0, alphabeticallyGrossFirst: 1, alphabeticallyNetFirst: 2 });
	ss.initEnum($QuickView_Client_UI_Common_Grid_GridViewMode, $asm, { line: 0, bar: 1, stats: 2 });
	ss.initEnum($QuickView_Client_UI_Common_Grid_RowSortMode, $asm, { netGross: 1, grossNet: 2 });
	ss.initEnum($QuickView_Client_UI_Common_Grid_TopBottomMarketsViewMode, $asm, { none: 0, returns: 1, slippage: 2, positions: 3 });
	ss.initClass($QuickView_Client_UI_Common_Settings_SettingsBase, $asm, {
		getChildSettingsName: function(name) {
			if (ss.isNullOrEmptyString(name)) {
				throw new ss.ArgumentNullException('name');
			}
			return this.$_nameSpace + '.' + name;
		},
		$getSettingName: function(name) {
			if (ss.isNullOrEmptyString(name)) {
				throw new ss.ArgumentNullException('name');
			}
			return this.$_nameSpace + ':' + name;
		},
		get: function(name) {
			return this.get$1(name, null);
		},
		get$1: function(name, defaultValue) {
			name = this.$getSettingName(name);
			return ss.coalesce(window.localStorage.getItem(name), defaultValue);
		},
		set: function(name, value) {
			name = this.$getSettingName(name);
			if (ss.isNullOrEmptyString(value)) {
				window.localStorage.removeItem(name);
			}
			else {
				window.localStorage.setItem(name, value);
			}
		}
	});
	ss.initClass($QuickView_Client_UI_Common_Settings_ApplicationSettings, $asm, {
		getUserSettings: function(userName) {
			if (ss.isNullOrEmptyString(userName)) {
				throw new ss.ArgumentNullException('userName');
			}
			return new $QuickView_Client_UI_Common_Settings_UserSettings(this.getChildSettingsName('[' + userName + ']'));
		}
	}, $QuickView_Client_UI_Common_Settings_SettingsBase);
	$QuickView_Client_UI_Common_Settings_ApplicationSettings.$ctor1.prototype = $QuickView_Client_UI_Common_Settings_ApplicationSettings.prototype;
	ss.initClass($QuickView_Client_UI_Common_Settings_GridIndicatorDataCache, $asm, {});
	ss.initClass($QuickView_Client_UI_Common_Settings_GridIndicatorPositions, $asm, {});
	ss.initClass($QuickView_Client_UI_Common_Settings_GridIndicatorPositionsCache, $asm, {});
	ss.initClass($QuickView_Client_UI_Common_Settings_GridSettings, $asm, {
		get_options: function() {
			if (ss.isNullOrUndefined(this.$_options)) {
				var result;
				var text = this.get('Options');
				if (ss.isNullOrEmptyString(text)) {
					result = null;
				}
				else {
					// Merge with default instances to ensure that any newly added properties are
					// set to their default values
					try {
						result = JSON.parse(text);
					}
					catch ($t1) {
						result = $QuickView_Client_UI_Common_Grid_GridOptions$Settings.$ctor();
					}
					result = $.extend($QuickView_Client_UI_Common_Grid_GridOptions$Settings.$ctor(), result);
					if (ss.isValue(result.statsSortSettings)) {
						result.statsSortSettings = $.extend($QuickView_Client_UI_Common_Grid_ChartStatsSortOptions$Settings.$ctor(), result.statsSortSettings);
					}
				}
				this.$_options = { item1: result };
			}
			return this.$_options.item1;
		},
		set_options: function(value) {
			this.set('Options', (ss.isNullOrUndefined(value) ? '' : JSON.stringify(value)));
			this.$_options = { item1: value };
		},
		get_leftmostColumnID: function() {
			var text = this.get('Columns.LeftmostColumnID');
			if (ss.isNullOrEmptyString(text)) {
				return null;
			}
			else {
				return text;
			}
		},
		set_leftmostColumnID: function(value) {
			this.set('Columns.LeftmostColumnID', ss.coalesce(value, ''));
		},
		get_columns: function() {
			if (ss.isNullOrUndefined(this.$_columns)) {
				var result;
				var text = this.get('Columns');
				if (ss.isNullOrEmptyString(text)) {
					result = null;
				}
				else {
					try {
						result = JSON.parse(text);
						for (var k = 0; k < ss.count(result); k++) {
							ss.setItem(result, k, $.extend($QuickView_Client_UI_Common_Grid_GridColumnOptions$Settings.$ctor(), ss.getItem(result, k)));
						}
					}
					catch ($t1) {
						result = null;
					}
				}
				this.$_columns = { item1: result };
			}
			return this.$_columns.item1;
		},
		set_columns: function(value) {
			this.set('Columns', (ss.isNullOrUndefined(value) ? '' : JSON.stringify(value)));
			this.$_columns = { item1: value };
		},
		get_topmostRowIndicatorID: function() {
			var text = this.get('OpenRows.TopmostRowIndicatorID');
			if (ss.isNullOrEmptyString(text)) {
				return null;
			}
			else {
				return text;
			}
		},
		set_topmostRowIndicatorID: function(value) {
			this.set('OpenRows.TopmostRowIndicatorID', ss.coalesce(value, ''));
		},
		get_openRows: function() {
			if (ss.isNullOrUndefined(this.$_openRows)) {
				var valueText = this.get('OpenRows');
				this.$_openRows = { item1: $QuickView_Client_UI_Common_Settings_GridSettings.$indicatorListFromText(valueText) };
			}
			return this.$_openRows.item1;
		},
		set_openRows: function(value) {
			this.set('OpenRows', $QuickView_Client_UI_Common_Settings_GridSettings.$indicatorListToText(value));
			this.$_openRows = { item1: value || [] };
		},
		getIndicatorSettings: function(indicator) {
			JS.ArgumentHelper.notNull(indicator, 'indicator');
			var key = ss.formatString('RowSettings[{0}]', QuickView.Client.Models.Charts.Indicator.idLower(indicator));
			var text = this.get(key);
			if (ss.isNullOrEmptyString(text)) {
				return null;
			}
			else {
				try {
					return JSON.parse(text);
				}
				catch ($t1) {
					return null;
				}
			}
		},
		setIndicatorSettings: function(indicator, settings) {
			JS.ArgumentHelper.notNull(indicator, 'indicator');
			var key = ss.formatString('RowSettings[{0}]', QuickView.Client.Models.Charts.Indicator.idLower(indicator));
			if (ss.isNullOrUndefined(settings)) {
				this.set(key, null);
			}
			else {
				this.set(key, JSON.stringify(settings));
			}
		},
		getIndicatorDataCache: function(indicator) {
			JS.ArgumentHelper.notNull(indicator, 'indicator');
			var key = ss.formatString('RowCache[{0}]', QuickView.Client.Models.Charts.Indicator.idLower(indicator));
			var text = this.get(key);
			if (ss.isNullOrEmptyString(text)) {
				return null;
			}
			else {
			    try {
					return JSON.parse(text);
				}
				catch ($t1) {
					return null;
				}
			}
		},
		setIndicatorDataCache: function(indicator, data) {
			JS.ArgumentHelper.notNull(indicator, 'indicator');
			var key = ss.formatString('RowCache[{0}]', QuickView.Client.Models.Charts.Indicator.idLower(indicator));
			if (ss.isNullOrUndefined(data)) {
				this.set(key, null);
			}
			else {
				this.set(key, JSON.stringify(data));
			}
		},
		get_favorites: function() {
			if (ss.isNullOrUndefined(this.$_favorites)) {
				var valueText = this.get('Favorites');
				this.$_favorites = { item1: $QuickView_Client_UI_Common_Settings_GridSettings.$indicatorListFromText(valueText) };
			}
			return this.$_favorites.item1;
		},
		set_favorites: function(value) {
			this.set('Favorites', $QuickView_Client_UI_Common_Settings_GridSettings.$indicatorListToText(value));
			this.$_favorites = { item1: value || [] };
		}
	}, $QuickView_Client_UI_Common_Settings_SettingsBase);
	ss.initClass($QuickView_Client_UI_Common_Settings_UserSettings, $asm, {
		get_grid: function() {
			if (ss.isNullOrUndefined(this.$_grid)) {
				this.$_grid = new $QuickView_Client_UI_Common_Settings_GridSettings(this.getChildSettingsName('Charts'));
			}
			return this.$_grid;
		},
		get_lastKnownVersionNumber: function() {
			return this.get('LastKnownVersionNumber');
		},
		set_lastKnownVersionNumber: function(value) {
			this.set('LastKnownVersionNumber', value);
		}
	}, $QuickView_Client_UI_Common_Settings_SettingsBase);
	ss.setMetadata($QuickView_Client_UI_Common_Grid_GridDisplayOptions, { enumFlags: true });
	(function() {
		$QuickView_Client_UI_Common_UIElements.$_application = new ss.Lazy(function() {
			return new $QuickView_Client_UI_Common_ApplicationElement($('#panelApplication'));
		});
		$QuickView_Client_UI_Common_UIElements.$_mainPanel = new ss.Lazy(function() {
			return $('#panelMain');
		});
		$QuickView_Client_UI_Common_UIElements.$_grid = new ss.Lazy(function() {
			return $('#panelMain > .table');
		});
		$QuickView_Client_UI_Common_UIElements.$_noConnectionLayer = new ss.Lazy(function() {
			return $('#panelNoConnectionLayer');
		});
		$QuickView_Client_UI_Common_UIElements.$_loadingScreen = new ss.Lazy(function() {
			return new $QuickView_Client_UI_Common_LoadingScreen($('#panelLoadingScreen'));
		});
		$QuickView_Client_UI_Common_UIElements.$_browserNotSupportedScreen = new ss.Lazy(function() {
			return $('#panelBrowserNotSupportedScreen');
		});
		$QuickView_Client_UI_Common_UIElements.$_windowLayer = new ss.Lazy(function() {
			return $('#panelWindowLayer');
		});
		$QuickView_Client_UI_Common_UIElements.$_dialogLayer = new ss.Lazy(function() {
			return $('#panelDialogLayer');
		});
	})();
	(function() {
		$QuickView_$Client_UI_Common_UIServices$NopDisposable.$instance = new $QuickView_$Client_UI_Common_UIServices$NopDisposable();
	})();
	(function() {
		$QuickView_Client_UI_Common_UIServices.$_disableFastScrollingCount = 0;
	})();
	(function() {
		$QuickView_Client_UI_Common_UIActivity.$eventList = ['mousemove', 'mouseup', 'mousedown', 'keyup', 'keydown'];
		$QuickView_Client_UI_Common_UIActivity.instance = new $QuickView_Client_UI_Common_UIActivity();
	})();
	(function() {
		$QuickView_Client_UI_Common_Data_DataDescription$ChartPeriods.allTypes = [2, 3, 4, 5];
		$QuickView_Client_UI_Common_Data_DataDescription$ChartPeriods.$_supportedPeriodTypes = null;
	})();
	(function() {
		$QuickView_Client_UI_Common_Data_DataDescription$ChartStats.all = ['DataPointCount', 'CAGR', 'SR', 'V', 'TStat', 'Autocorrelation'];
		$QuickView_Client_UI_Common_Data_DataDescription$ChartStats.$_statInfoDict = null;
	})();
	(function() {
		$QuickView_Client_UI_Common_Data_DataDescription$CorrelationStats.all = ['DataPointCount', 'PearsonCorrelation', 'SyncCorrelation', 'Covariance', 'PearsonTStat', 'SyncTStat', 'AlphaBeta_Alpha', 'AlphaBeta_Beta', 'AlphaBeta_DataPointCount', 'AlphaBeta_Regression', 'AlphaBeta_TStatAlpha', 'AlphaBeta_TStatBeta', 'AlphaBeta_InformationRatio', 'AlphaBeta_PfOptFund'];
		$QuickView_Client_UI_Common_Data_DataDescription$CorrelationStats.$_statInfoDict = null;
	})();
	(function() {
		$QuickView_Client_UI_Common_Data_DataDescription$IndicatorRelationships.$_metadataDict = null;
	})();
	(function() {
		$QuickView_Client_UI_Common_Data_DataDescription$Resolutions.all = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	})();
	(function() {
		$QuickView_Client_UI_Common_Grid_GridIndicatorBenchmarkOptions.$empty = new $QuickView_Client_UI_Common_Grid_GridIndicatorBenchmarkOptions();
	})();
})();
