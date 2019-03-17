(function() {
	'use strict';
	var $asm = {};
	global.QuickView = global.QuickView || {};
	global.QuickView.Client = global.QuickView.Client || {};
	global.QuickView.Client.Models = global.QuickView.Client.Models || {};
	global.QuickView.Client.Models.Applications = global.QuickView.Client.Models.Applications || {};
	global.QuickView.Client.Models.Charts = global.QuickView.Client.Models.Charts || {};
	global.QuickView.Client.Models.Stats = global.QuickView.Client.Models.Stats || {};
	global.QuickView.Client.Models.Users = global.QuickView.Client.Models.Users || {};
	ss.initAssembly($asm, 'QuickView.Client.Models');
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Applications.AppConnectivityStatus
	var $QuickView_Client_Models_Applications_AppConnectivityStatus = function() {
	};
	$QuickView_Client_Models_Applications_AppConnectivityStatus.__typeName = 'QuickView.Client.Models.Applications.AppConnectivityStatus';
	global.QuickView.Client.Models.Applications.AppConnectivityStatus = $QuickView_Client_Models_Applications_AppConnectivityStatus;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Applications.VersionInfo
	var $QuickView_Client_Models_Applications_VersionInfo = function() {
	};
	$QuickView_Client_Models_Applications_VersionInfo.__typeName = 'QuickView.Client.Models.Applications.VersionInfo';
	$QuickView_Client_Models_Applications_VersionInfo.$ctor = function(number, releaseTime) {
		var $this = $QuickView_Client_Models_Applications_VersionInfo.$ctor1(number, releaseTime, null);
		return $this;
	};
	$QuickView_Client_Models_Applications_VersionInfo.$ctor1 = function(number, releaseTime, lastCompatibleVersionNumber) {
		var $this = {};
		$this.number = null;
		$this.lastCompatibleVersionNumber = null;
		$this.releaseTime = new Date(0);
		$this.number = number;
		$this.releaseTime = releaseTime;
		$this.lastCompatibleVersionNumber = lastCompatibleVersionNumber;
		return $this;
	};
	$QuickView_Client_Models_Applications_VersionInfo.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Models.Applications.VersionInfo = $QuickView_Client_Models_Applications_VersionInfo;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.TimeSeriesHelper
	var $QuickView_Client_Models_Charts_$TimeSeriesHelper = function() {
	};
	$QuickView_Client_Models_Charts_$TimeSeriesHelper.__typeName = 'QuickView.Client.Models.Charts.$TimeSeriesHelper';
	$QuickView_Client_Models_Charts_$TimeSeriesHelper.$isCompleteValue = function(type, subtype) {
		return type === 2 || type === 3;
	};
	$QuickView_Client_Models_Charts_$TimeSeriesHelper.$isPosition = function(type, subtype) {
		return type === 0 && (subtype === 16 || subtype === 17);
	};
	$QuickView_Client_Models_Charts_$TimeSeriesHelper.$isOrder = function(type, subtype) {
		return type === 0 && (subtype === 14 || subtype === 15);
	};
	$QuickView_Client_Models_Charts_$TimeSeriesHelper.$isSlippage = function(type, subtype) {
		return type === 0 && (subtype === 18 || subtype === 19);
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.AlgorithmExtensions
	var $QuickView_Client_Models_Charts_AlgorithmExtensions = function() {
	};
	$QuickView_Client_Models_Charts_AlgorithmExtensions.__typeName = 'QuickView.Client.Models.Charts.AlgorithmExtensions';
	$QuickView_Client_Models_Charts_AlgorithmExtensions.isTimeSeriesID = function(value) {
		return value === 1 || value === 2;
	};
	$QuickView_Client_Models_Charts_AlgorithmExtensions.isTimeSeriesIDList = function(value) {
		return value === 3 || value === 4;
	};
	$QuickView_Client_Models_Charts_AlgorithmExtensions.isPrimaryTimeSeriesIDRef = function(value) {
		return value === 2 || value === 4;
	};
	global.QuickView.Client.Models.Charts.AlgorithmExtensions = $QuickView_Client_Models_Charts_AlgorithmExtensions;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.AlgorithmParameter
	var $QuickView_Client_Models_Charts_AlgorithmParameter = function() {
	};
	$QuickView_Client_Models_Charts_AlgorithmParameter.__typeName = 'QuickView.Client.Models.Charts.AlgorithmParameter';
	$QuickView_Client_Models_Charts_AlgorithmParameter.createInstance = function() {
		return $QuickView_Client_Models_Charts_AlgorithmParameter.$ctor();
	};
	$QuickView_Client_Models_Charts_AlgorithmParameter.$ctor = function() {
		var $this = {};
		$this.N = null;
		$this.V = null;
		$this.T = 0;
		$this.O = 0;
		return $this;
	};
	$QuickView_Client_Models_Charts_AlgorithmParameter.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Models.Charts.AlgorithmParameter = $QuickView_Client_Models_Charts_AlgorithmParameter;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.AlgorithmParameterOptions
	var $QuickView_Client_Models_Charts_AlgorithmParameterOptions = function() {
	};
	$QuickView_Client_Models_Charts_AlgorithmParameterOptions.__typeName = 'QuickView.Client.Models.Charts.AlgorithmParameterOptions';
	global.QuickView.Client.Models.Charts.AlgorithmParameterOptions = $QuickView_Client_Models_Charts_AlgorithmParameterOptions;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.AlgorithmParameterType
	var $QuickView_Client_Models_Charts_AlgorithmParameterType = function() {
	};
	$QuickView_Client_Models_Charts_AlgorithmParameterType.__typeName = 'QuickView.Client.Models.Charts.AlgorithmParameterType';
	global.QuickView.Client.Models.Charts.AlgorithmParameterType = $QuickView_Client_Models_Charts_AlgorithmParameterType;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.ChartAlgorithmInfo
	var $QuickView_Client_Models_Charts_ChartAlgorithmInfo = function() {
	};
	$QuickView_Client_Models_Charts_ChartAlgorithmInfo.__typeName = 'QuickView.Client.Models.Charts.ChartAlgorithmInfo';
	$QuickView_Client_Models_Charts_ChartAlgorithmInfo.createInstance = function() {
		return $QuickView_Client_Models_Charts_ChartAlgorithmInfo.$ctor();
	};
	$QuickView_Client_Models_Charts_ChartAlgorithmInfo.get = function(algorithmName) {
		JS.ArgumentHelper.notNullOrEmpty(algorithmName, 'algorithmName');
		switch (algorithmName.toLowerCase()) {
			case 'qrreturns': {
				return $QuickView_Client_Models_Charts_ChartAlgorithmInfo.$qrReturnsInfo;
			}
			case 'qrhwm': {
				return $QuickView_Client_Models_Charts_ChartAlgorithmInfo.$qrhwmInfo;
			}
			case 'qrsubscriptionsredemptions': {
				return $QuickView_Client_Models_Charts_ChartAlgorithmInfo.$qrSubRedInfo;
			}
			case 'ionreturns': {
				return $QuickView_Client_Models_Charts_ChartAlgorithmInfo.$ionReturnsInfo;
			}
			default: {
				throw new ss.ArgumentOutOfRangeException('algorithmName', 'Unknown algorithm.', null, algorithmName);
			}
		}
	};
	$QuickView_Client_Models_Charts_ChartAlgorithmInfo.$ctor = function() {
		var $this = {};
		$this.type = 0;
		$this.subtype = 0;
		$this.unit = 0;
		$this.isCustom = false;
		return $this;
	};
	$QuickView_Client_Models_Charts_ChartAlgorithmInfo.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Models.Charts.ChartAlgorithmInfo = $QuickView_Client_Models_Charts_ChartAlgorithmInfo;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.ChartDataPoint
	var $QuickView_Client_Models_Charts_ChartDataPoint = function() {
	};
	$QuickView_Client_Models_Charts_ChartDataPoint.__typeName = 'QuickView.Client.Models.Charts.ChartDataPoint';
	$QuickView_Client_Models_Charts_ChartDataPoint.$ctor = function(time, cumValue, nonCumValue) {
		var $this = $QuickView_Client_Models_Charts_ChartDataPoint.$ctor1(time, cumValue, nonCumValue, 0);
		return $this;
	};
	$QuickView_Client_Models_Charts_ChartDataPoint.$ctor1 = function(time, cumValue, nonCumValue, type) {
		var $this = $QuickView_Client_Models_Charts_DataPointBase.$ctor(time);
		$this.C = 0;
		$this.N = 0;
		$this.P = 0;
		$this.C = cumValue;
		$this.N = nonCumValue;
		$this.P = type;
		return $this;
	};
	$QuickView_Client_Models_Charts_ChartDataPoint.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Models.Charts.ChartDataPoint = $QuickView_Client_Models_Charts_ChartDataPoint;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.ChartDataPointType
	var $QuickView_Client_Models_Charts_ChartDataPointType = function() {
	};
	$QuickView_Client_Models_Charts_ChartDataPointType.__typeName = 'QuickView.Client.Models.Charts.ChartDataPointType';
	global.QuickView.Client.Models.Charts.ChartDataPointType = $QuickView_Client_Models_Charts_ChartDataPointType;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.ChartMetadata
	var $QuickView_Client_Models_Charts_ChartMetadata = function() {
	};
	$QuickView_Client_Models_Charts_ChartMetadata.__typeName = 'QuickView.Client.Models.Charts.ChartMetadata';
	$QuickView_Client_Models_Charts_ChartMetadata.$ctor = function(timeSeries, derivedTimeSeries, indicators, indicatorSettings, menu) {
		var $this = {};
		$this.S = null;
		$this.D = null;
		$this.I = null;
		$this.IS = null;
		$this.M = null;
		$this.S = JS.Collections.CollectionExtensions.asReadOnly($QuickView_Client_Models_Charts_TimeSeries).call(null, timeSeries);
		$this.D = JS.Collections.CollectionExtensions.asReadOnly($QuickView_Client_Models_Charts_DerivedTimeSeries).call(null, derivedTimeSeries);
		$this.I = JS.Collections.CollectionExtensions.asReadOnly($QuickView_Client_Models_Charts_Indicator).call(null, indicators);
		$this.IS = JS.Collections.CollectionExtensions.asReadOnly($QuickView_Client_Models_Charts_IndicatorSettings).call(null, indicatorSettings);
		$this.M = menu;
		//console.log('derivedTimeSeries', derivedTimeSeries, $this);
		return $this;
	};
	$QuickView_Client_Models_Charts_ChartMetadata.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Models.Charts.ChartMetadata = $QuickView_Client_Models_Charts_ChartMetadata;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.ChartPeriodDef
	var $QuickView_Client_Models_Charts_ChartPeriodDef = function() {
	};
	$QuickView_Client_Models_Charts_ChartPeriodDef.__typeName = 'QuickView.Client.Models.Charts.ChartPeriodDef';
	$QuickView_Client_Models_Charts_ChartPeriodDef.getPrimary = function($this) {
		if ($this.I === 0) {
			return $this;
		}
		else {
			return $QuickView_Client_Models_Charts_ChartPeriodDef.$ctor($this.T, 0);
		}
	};
	$QuickView_Client_Models_Charts_ChartPeriodDef.$getPeriodName = function(type, index) {
		if (index > 0) {
			return index.toString() + $QuickView_Client_Models_Charts_ChartPeriodDef.$getSuffix(type);
		}
		else if (index === 0) {
			return $QuickView_Client_Models_Charts_ChartPeriodDef.getTypeName(type);
		}
		else {
			return $QuickView_Client_Models_Charts_ChartPeriodDef.getTypeName(type) + index.toString();
		}
	};
	$QuickView_Client_Models_Charts_ChartPeriodDef.$getSuffix = function(type) {
		switch (type) {
			case 2: {
				return 'D';
			}
			case 3: {
				return 'M';
			}
			case 4: {
				return 'Y';
			}
			default: {
				throw new ss.ArgumentOutOfRangeException('type', 'Invalid value.', null, type);
			}
		}
	};
	$QuickView_Client_Models_Charts_ChartPeriodDef.getTypeName = function(type) {
		switch (type) {
			case 2: {
				return 'TDY';
			}
			case 3: {
				return 'MTD';
			}
			case 4: {
				return 'YTD';
			}
			case 5: {
				return 'BTD';
			}
			default: {
				throw new ss.ArgumentOutOfRangeException('type', 'Invalid value.', null, type);
			}
		}
	};
	$QuickView_Client_Models_Charts_ChartPeriodDef.$ctor = function(type, index) {
		var $this = {};
		$this.T = 0;
		$this.I = 0;
		$this.N = null;
		$this.T = type;
		$this.I = index;
		$this.N = $QuickView_Client_Models_Charts_ChartPeriodDef.$getPeriodName($this.T, $this.I);
		return $this;
	};
	$QuickView_Client_Models_Charts_ChartPeriodDef.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Models.Charts.ChartPeriodDef = $QuickView_Client_Models_Charts_ChartPeriodDef;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.ChartPeriodHelper
	var $QuickView_Client_Models_Charts_ChartPeriodHelper = function() {
	};
	$QuickView_Client_Models_Charts_ChartPeriodHelper.__typeName = 'QuickView.Client.Models.Charts.ChartPeriodHelper';
	$QuickView_Client_Models_Charts_ChartPeriodHelper.get_btdStartList = function() {
		if (ss.isNullOrUndefined($QuickView_Client_Models_Charts_ChartPeriodHelper.$_btdStartList)) {
			var $t1 = [];
			$t1.push(new JS.DateTimeExt.$ctor5(2012, 9, 1, 0, 0, 0, 1));
			var list = $t1;
			var now = JS.DateTimeExt.get_utcNow();
			for (var time = new JS.DateTimeExt.$ctor5(2013, 7, 1, 0, 0, 0, 1); JS.DateTimeExt.op_LessThan(time, now); time = time.addYears(1)) {
				list.push(time);
			}
			list.reverse();
			$QuickView_Client_Models_Charts_ChartPeriodHelper.$_btdStartList = list;
		}
		return $QuickView_Client_Models_Charts_ChartPeriodHelper.$_btdStartList;
	};
	global.QuickView.Client.Models.Charts.ChartPeriodHelper = $QuickView_Client_Models_Charts_ChartPeriodHelper;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.ChartPeriodType
	var $QuickView_Client_Models_Charts_ChartPeriodType = function() {
	};
	$QuickView_Client_Models_Charts_ChartPeriodType.__typeName = 'QuickView.Client.Models.Charts.ChartPeriodType';
	global.QuickView.Client.Models.Charts.ChartPeriodType = $QuickView_Client_Models_Charts_ChartPeriodType;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.ColumnHeaderValue
	var $QuickView_Client_Models_Charts_ColumnHeaderValue = function() {
	};
	$QuickView_Client_Models_Charts_ColumnHeaderValue.__typeName = 'QuickView.Client.Models.Charts.ColumnHeaderValue';
	$QuickView_Client_Models_Charts_ColumnHeaderValue.$ctor = function(value, unit) {
		var $this = {};
		$this.V = 0;
		$this.U = 0;
		$this.V = value;
		$this.U = unit;
		return $this;
	};
	$QuickView_Client_Models_Charts_ColumnHeaderValue.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Models.Charts.ColumnHeaderValue = $QuickView_Client_Models_Charts_ColumnHeaderValue;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.ColumnHeaderValueList
	var $QuickView_Client_Models_Charts_ColumnHeaderValueList = function() {
	};
	$QuickView_Client_Models_Charts_ColumnHeaderValueList.__typeName = 'QuickView.Client.Models.Charts.ColumnHeaderValueList';
	$QuickView_Client_Models_Charts_ColumnHeaderValueList.$ctor = function(primaryPeriodHeaderValue, selectedPeriodHeaderValue) {
		var $this = {};
		$this.P = null;
		$this.S = null;
		$this.P = primaryPeriodHeaderValue;
		$this.S = selectedPeriodHeaderValue;
		return $this;
	};
	$QuickView_Client_Models_Charts_ColumnHeaderValueList.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Models.Charts.ColumnHeaderValueList = $QuickView_Client_Models_Charts_ColumnHeaderValueList;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.CustomDataPoint
	var $QuickView_Client_Models_Charts_CustomDataPoint = function() {
	};
	$QuickView_Client_Models_Charts_CustomDataPoint.__typeName = 'QuickView.Client.Models.Charts.CustomDataPoint';
	$QuickView_Client_Models_Charts_CustomDataPoint.$ctor = function(time) {
		var $this = $QuickView_Client_Models_Charts_DataPointBase.$ctor(time);
		return $this;
	};
	$QuickView_Client_Models_Charts_CustomDataPoint.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Models.Charts.CustomDataPoint = $QuickView_Client_Models_Charts_CustomDataPoint;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.DataPointBase
	var $QuickView_Client_Models_Charts_DataPointBase = function() {
	};
	$QuickView_Client_Models_Charts_DataPointBase.__typeName = 'QuickView.Client.Models.Charts.DataPointBase';
	$QuickView_Client_Models_Charts_DataPointBase.$ctor = function(time) {
		var $this = {};
		$this.T = ss.getDefaultValue(JS.DateTimeExt);
		$this.T = time;
		return $this;
	};
	$QuickView_Client_Models_Charts_DataPointBase.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Models.Charts.DataPointBase = $QuickView_Client_Models_Charts_DataPointBase;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.DbTimeSeriesDataPoint
	var $QuickView_Client_Models_Charts_DbTimeSeriesDataPoint = function() {
	};
	$QuickView_Client_Models_Charts_DbTimeSeriesDataPoint.__typeName = 'QuickView.Client.Models.Charts.DbTimeSeriesDataPoint';
	$QuickView_Client_Models_Charts_DbTimeSeriesDataPoint.createInstance = function() {
		return $QuickView_Client_Models_Charts_DbTimeSeriesDataPoint.$ctor();
	};
	$QuickView_Client_Models_Charts_DbTimeSeriesDataPoint.$ctor = function() {
		var $this = {};
		$this.T = new Date(0);
		$this.V = 0;
		return $this;
	};
	$QuickView_Client_Models_Charts_DbTimeSeriesDataPoint.$ctor1 = function(time, value) {
		var $this = {};
		$this.T = new Date(0);
		$this.V = 0;
		$this.T = time;
		$this.V = value;
		return $this;
	};
	$QuickView_Client_Models_Charts_DbTimeSeriesDataPoint.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Models.Charts.DbTimeSeriesDataPoint = $QuickView_Client_Models_Charts_DbTimeSeriesDataPoint;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.DerivedTimeSeries
	var $QuickView_Client_Models_Charts_DerivedTimeSeries = function() {
	};
	$QuickView_Client_Models_Charts_DerivedTimeSeries.__typeName = 'QuickView.Client.Models.Charts.DerivedTimeSeries';
	$QuickView_Client_Models_Charts_DerivedTimeSeries.createInstance = function() {
		return $QuickView_Client_Models_Charts_DerivedTimeSeries.$ctor();
	};
	$QuickView_Client_Models_Charts_DerivedTimeSeries.idLower = function($this) {
		if (ss.isNullOrUndefined($this._idLower)) {
			$this._idLower = $this.I.toLowerCase();
		}
		return $this._idLower;
	};
	$QuickView_Client_Models_Charts_DerivedTimeSeries.fullType = function($this) {
		if (ss.isNullOrUndefined($this._fullType)) {
			$this._fullType = $QuickView_Client_Models_Charts_TimeSeriesFullType.$ctor($this.type, $this.subtype);
		}
		return $this._fullType;
	};
	$QuickView_Client_Models_Charts_DerivedTimeSeries.isIntradayTimeSeries = function($this, timeSeriesID) {
		JS.ArgumentHelper.notNullOrEmpty(timeSeriesID, 'timeSeriesID');
		return ss.isValue($this._intradayTimeSeriesDict) && ss.isValue($this._intradayTimeSeriesDict[timeSeriesID.toLowerCase()]);
	};
	$QuickView_Client_Models_Charts_DerivedTimeSeries.$initTimeSeries = function($this, timeSeries, derivedTimeSeries) {
		JS.ArgumentHelper.notNull(timeSeries, 'timeSeries');
		JS.ArgumentHelper.notNull(derivedTimeSeries, 'derivedTimeSeries');
		// The list of directly referenced normal time series
		var referencedTimeSeriesList = [];
		// The list of directly or indirectly (by derived time series) referenced time series
		var referencedAllTimeSeriesList = [];
		// The list of directly referenced derived time series
		var referencedDerivedTimeSeriesList = [];
		// Secondary time series are an exception and does not participate in the resolution validation
		// Initially these were intended to be used for "Intraday" referenced time series
		// when combining daily and intraday data
		var intradayTimeSeriesDict = {};
		var intradayTimeSeriesDictEmpty = true;
		var ignoreResolutionCheckDict = {};
		// The time series from which this derived time series inherit its type, sub-type, etc.
		var primaryTimeSeries = null;
		var derivedPrimaryTimeSeries = null;
		if (ss.isValue($this.P)) {
			for (var $t1 = 0; $t1 < $this.P.length; $t1++) {
				var parameter = $this.P[$t1];
				var parameterTimeSeriesIDList;
				if ($QuickView_Client_Models_Charts_AlgorithmExtensions.isTimeSeriesID(parameter.T)) {
					parameterTimeSeriesIDList = [parameter.V.toLowerCase()];
				}
				else if ($QuickView_Client_Models_Charts_AlgorithmExtensions.isTimeSeriesIDList(parameter.T)) {
					parameterTimeSeriesIDList = parameter.V.toLowerCase().split(String.fromCharCode(44));
				}
				else {
					// Skip the parameter
					continue;
				}
				for (var $t2 = 0; $t2 < parameterTimeSeriesIDList.length; $t2++) {
					var parameterTimeSeriesID = parameterTimeSeriesIDList[$t2];
					if (JS.EnumExtensions.isSet(parameter.O, 1)) {
						intradayTimeSeriesDict[parameterTimeSeriesID] = JS.DBNull.get_value();
						intradayTimeSeriesDictEmpty = false;
					}
					if (JS.EnumExtensions.isSet(parameter.O, 2)) {
						ignoreResolutionCheckDict[parameterTimeSeriesID] = JS.DBNull.get_value();
					}
					var parameterTimeSeries = timeSeries[parameterTimeSeriesID];
					if (ss.isValue(parameterTimeSeries)) {
						referencedTimeSeriesList.push(parameterTimeSeries);
						referencedAllTimeSeriesList.push(parameterTimeSeries);
						if (ss.isNullOrUndefined(primaryTimeSeries) && $QuickView_Client_Models_Charts_AlgorithmExtensions.isPrimaryTimeSeriesIDRef(parameter.T)) {
							primaryTimeSeries = parameterTimeSeries;
						}
					}
					else {
						var parameterDerivedTimeSeries = derivedTimeSeries[parameterTimeSeriesID];
						if (ss.isValue(parameterDerivedTimeSeries)) {
							referencedDerivedTimeSeriesList.push(parameterDerivedTimeSeries);
							ss.arrayAddRange(referencedAllTimeSeriesList, parameterDerivedTimeSeries.referencedAllTimeSeries);
							if (ss.isNullOrUndefined(derivedPrimaryTimeSeries) && $QuickView_Client_Models_Charts_AlgorithmExtensions.isPrimaryTimeSeriesIDRef(parameter.T)) {
								derivedPrimaryTimeSeries = parameterDerivedTimeSeries;
							}
						}
						else {
							throw new ss.InvalidOperationException(ss.formatString("A referenced time series ID '{0}' was not found.", parameter.V));
						}
					}
				}
			}
		}
		var source;
		var resolution;
		var metaResolution;
		var currency;
		{
			// Get the first non-secondary time series that have a time-based resolution; otherwise, fallback to any resolution
			var referencedTimeSeries = Enumerable.from(referencedTimeSeriesList).firstOrDefault(function(x) {
				return ss.isNullOrUndefined(intradayTimeSeriesDict[$QuickView_Client_Models_Charts_TimeSeries.idLower(x)]) && ss.isNullOrUndefined(ignoreResolutionCheckDict[$QuickView_Client_Models_Charts_TimeSeries.idLower(x)]) && $QuickView_Client_Models_Charts_TimeSeriesResolutionExtensions.isTimePeriod(x.R);
			}, ss.getDefaultValue($QuickView_Client_Models_Charts_TimeSeries));
			if (ss.isValue(referencedTimeSeries)) {
				source = referencedTimeSeries.S;
				resolution = referencedTimeSeries.R;
				metaResolution = referencedTimeSeries.M;
				currency = referencedTimeSeries.C;
			}
			else {
				// Get the first non-secondary time series that have a time-based resolution; otherwise, fallback to any resolution
				var referencedDerivedTimeSeries = Enumerable.from(referencedDerivedTimeSeriesList).firstOrDefault(function(x1) {
					return ss.isNullOrUndefined(intradayTimeSeriesDict[$QuickView_Client_Models_Charts_DerivedTimeSeries.idLower(x1)]) && ss.isNullOrUndefined(ignoreResolutionCheckDict[$QuickView_Client_Models_Charts_DerivedTimeSeries.idLower(x1)]) && $QuickView_Client_Models_Charts_TimeSeriesResolutionExtensions.isTimePeriod(x1.resolution);
				}, ss.getDefaultValue($QuickView_Client_Models_Charts_DerivedTimeSeries));
				if (ss.isValue(referencedDerivedTimeSeries)) {
					source = referencedDerivedTimeSeries.source;
					resolution = referencedDerivedTimeSeries.resolution;
					metaResolution = referencedDerivedTimeSeries.metaResolution;
					currency = referencedDerivedTimeSeries.currency;
				}
				else {
					referencedTimeSeries = Enumerable.from(referencedTimeSeriesList).firstOrDefault(function(x2) {
						return ss.isNullOrUndefined(intradayTimeSeriesDict[$QuickView_Client_Models_Charts_TimeSeries.idLower(x2)]) && ss.isNullOrUndefined(ignoreResolutionCheckDict[$QuickView_Client_Models_Charts_TimeSeries.idLower(x2)]);
					}, ss.getDefaultValue($QuickView_Client_Models_Charts_TimeSeries));
					if (ss.isValue(referencedTimeSeries)) {
						source = referencedTimeSeries.S;
						resolution = referencedTimeSeries.R;
						metaResolution = referencedTimeSeries.M;
						currency = referencedTimeSeries.C;
					}
					else {
						// Get the first non-secondary time series that have a time-based resolution; otherwise, fallback to any resolution
						referencedDerivedTimeSeries = Enumerable.from(referencedDerivedTimeSeriesList).firstOrDefault(function(x3) {
							return ss.isNullOrUndefined(intradayTimeSeriesDict[$QuickView_Client_Models_Charts_DerivedTimeSeries.idLower(x3)]) && ss.isNullOrUndefined(ignoreResolutionCheckDict[$QuickView_Client_Models_Charts_DerivedTimeSeries.idLower(x3)]);
						}, ss.getDefaultValue($QuickView_Client_Models_Charts_DerivedTimeSeries));
						if (ss.isValue(referencedDerivedTimeSeries)) {
							source = referencedDerivedTimeSeries.source;
							resolution = referencedDerivedTimeSeries.resolution;
							metaResolution = referencedDerivedTimeSeries.metaResolution;
							currency = referencedDerivedTimeSeries.currency;
						}
						else {
							throw new ss.InvalidOperationException('The derived time series does not reference any other time series.');
						}
					}
				}
			}
		}
		for (var $t3 = 0; $t3 < referencedTimeSeriesList.length; $t3++) {
			var item = referencedTimeSeriesList[$t3];
			if (false === (ss.compareStrings(item.S, source, true) === 0)) {
				throw new ss.InvalidOperationException('All referenced time series must have the same source.');
			}
			if ($QuickView_Client_Models_Charts_TimeSeriesResolutionExtensions.isTimePeriod(item.R)) {
				if (ss.isValue(intradayTimeSeriesDict[$QuickView_Client_Models_Charts_TimeSeries.idLower(item)]) || ss.isValue(ignoreResolutionCheckDict[$QuickView_Client_Models_Charts_TimeSeries.idLower(item)])) {
					// Skip resolution validation
					continue;
				}
				if (item.M !== metaResolution || item.R !== resolution) {
					throw new ss.InvalidOperationException('All referenced time series must have the same resolution.');
				}
			}
			if (currency !== 0 && item.C !== 0 && item.C !== currency) {
				throw new ss.InvalidOperationException('All referenced time series must have the same currency.');
			}
		}
		for (var $t4 = 0; $t4 < referencedDerivedTimeSeriesList.length; $t4++) {
			var item1 = referencedDerivedTimeSeriesList[$t4];
			if (false === (ss.compareStrings(item1.source, source, true) === 0)) {
				throw new ss.InvalidOperationException('All referenced time series must have the same source.');
			}
			if ($QuickView_Client_Models_Charts_TimeSeriesResolutionExtensions.isTimePeriod(item1.resolution)) {
				if (ss.isValue(intradayTimeSeriesDict[$QuickView_Client_Models_Charts_DerivedTimeSeries.idLower(item1)]) || ss.isValue(ignoreResolutionCheckDict[$QuickView_Client_Models_Charts_DerivedTimeSeries.idLower(item1)])) {
					// Skip resolution validation
					continue;
				}
				if (item1.metaResolution !== metaResolution || item1.resolution !== resolution) {
					throw new ss.InvalidOperationException('All referenced time series must have the same resolution.');
				}
			}
			if (currency !== 0 && item1.currency !== 0 && item1.currency !== currency) {
				throw new ss.InvalidOperationException('All referenced time series must have the same currency.');
			}
		}
		// Set properties
		$this.source = source;
		$this.resolution = resolution;
		$this.metaResolution = metaResolution;
		$this.currency = currency;
		// Factually is simulated if any of the time series is simulated
		$this.context = ((Enumerable.from(referencedTimeSeriesList).any(function(x4) {
			return x4.F === 2;
		}) || Enumerable.from(referencedDerivedTimeSeriesList).any(function(x5) {
			return x5.context === 2;
		})) ? 2 : 1);
		if (ss.isValue(primaryTimeSeries)) {
			$this.unit = primaryTimeSeries.U;
			$this.type = primaryTimeSeries.T;
			$this.subtype = primaryTimeSeries.B;
		}
		else if (ss.isValue(derivedPrimaryTimeSeries)) {
			$this.unit = derivedPrimaryTimeSeries.unit;
			$this.type = derivedPrimaryTimeSeries.type;
			$this.subtype = derivedPrimaryTimeSeries.subtype;
		}
		else {
			var algorithmInfo = $QuickView_Client_Models_Charts_ChartAlgorithmInfo.get($this.A);
			$this.unit = algorithmInfo.unit;
			$this.type = algorithmInfo.type;
			$this.subtype = algorithmInfo.subtype;
		}
		$this.referencedTimeSeries = referencedTimeSeriesList;
		$this.referencedAllTimeSeries = referencedAllTimeSeriesList;
		$this.referencedDerivedTimeSeries = referencedDerivedTimeSeriesList;
		$this._intradayTimeSeriesDict = (intradayTimeSeriesDictEmpty ? null : intradayTimeSeriesDict);
		$this.referencesIntradayTimeSeries = false === intradayTimeSeriesDictEmpty || Enumerable.from(referencedDerivedTimeSeriesList).any(function(x6) {
			return x6.referencesIntradayTimeSeries;
		});
	};
	$QuickView_Client_Models_Charts_DerivedTimeSeries.$ctor = function() {
		var $this = {};
		$this.I = null;
		$this.A = null;
		$this.P = null;
		$this.O = 0;
		$this._idLower = null;
		$this._fullType = null;
		$this.referencedTimeSeries = null;
		$this.referencedAllTimeSeries = null;
		$this.referencedDerivedTimeSeries = null;
		$this.referencesIntradayTimeSeries = false;
		$this.type = 0;
		$this.subtype = 0;
		$this.unit = 0;
		$this.currency = 0;
		$this.resolution = 0;
		$this.metaResolution = 0;
		$this.source = null;
		$this.context = 0;
		$this._intradayTimeSeriesDict = null;
		return $this;
	};
	$QuickView_Client_Models_Charts_DerivedTimeSeries.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Models.Charts.DerivedTimeSeries = $QuickView_Client_Models_Charts_DerivedTimeSeries;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.DerivedTimeSeriesOptions
	var $QuickView_Client_Models_Charts_DerivedTimeSeriesOptions = function() {
	};
	$QuickView_Client_Models_Charts_DerivedTimeSeriesOptions.__typeName = 'QuickView.Client.Models.Charts.DerivedTimeSeriesOptions';
	global.QuickView.Client.Models.Charts.DerivedTimeSeriesOptions = $QuickView_Client_Models_Charts_DerivedTimeSeriesOptions;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.DrawdownData
	var $QuickView_Client_Models_Charts_DrawdownData = function() {
	};
	$QuickView_Client_Models_Charts_DrawdownData.__typeName = 'QuickView.Client.Models.Charts.DrawdownData';
	$QuickView_Client_Models_Charts_DrawdownData.createInstance = function() {
		return $QuickView_Client_Models_Charts_DrawdownData.$ctor();
	};
	$QuickView_Client_Models_Charts_DrawdownData.$ctor = function() {
		var $this = {};
		$this.U = 0;
		$this.I = null;
		$this.S = null;
		return $this;
	};
	$QuickView_Client_Models_Charts_DrawdownData.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Models.Charts.DrawdownData = $QuickView_Client_Models_Charts_DrawdownData;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.DrawdownDataPoint
	var $QuickView_Client_Models_Charts_DrawdownDataPoint = function() {
	};
	$QuickView_Client_Models_Charts_DrawdownDataPoint.__typeName = 'QuickView.Client.Models.Charts.DrawdownDataPoint';
	$QuickView_Client_Models_Charts_DrawdownDataPoint.$ctor = function(originalPoint, value) {
		var $this = {};
		$this.P = null;
		$this.V = 0;
		$this.P = originalPoint;
		$this.V = value;
		return $this;
	};
	$QuickView_Client_Models_Charts_DrawdownDataPoint.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Models.Charts.DrawdownDataPoint = $QuickView_Client_Models_Charts_DrawdownDataPoint;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.DrawdownInterval
	var $QuickView_Client_Models_Charts_DrawdownInterval = function() {
	};
	$QuickView_Client_Models_Charts_DrawdownInterval.__typeName = 'QuickView.Client.Models.Charts.DrawdownInterval';
	$QuickView_Client_Models_Charts_DrawdownInterval.createInstance = function() {
		return $QuickView_Client_Models_Charts_DrawdownInterval.$ctor();
	};
	$QuickView_Client_Models_Charts_DrawdownInterval.$ctor = function() {
		var $this = {};
		$this.S = null;
		$this.P = null;
		return $this;
	};
	$QuickView_Client_Models_Charts_DrawdownInterval.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Models.Charts.DrawdownInterval = $QuickView_Client_Models_Charts_DrawdownInterval;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.DrawdownIntervalStats
	var $QuickView_Client_Models_Charts_DrawdownIntervalStats = function() {
	};
	$QuickView_Client_Models_Charts_DrawdownIntervalStats.__typeName = 'QuickView.Client.Models.Charts.DrawdownIntervalStats';
	$QuickView_Client_Models_Charts_DrawdownIntervalStats.createInstance = function() {
		return $QuickView_Client_Models_Charts_DrawdownIntervalStats.$ctor();
	};
	$QuickView_Client_Models_Charts_DrawdownIntervalStats.$ctor = function() {
		var $this = {};
		$this.S = ss.getDefaultValue(JS.DateTimeExt);
		$this.E = ss.getDefaultValue(JS.DateTimeExt);
		$this.C = 0;
		$this.T = 0;
		$this.M = null;
		return $this;
	};
	$QuickView_Client_Models_Charts_DrawdownIntervalStats.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Models.Charts.DrawdownIntervalStats = $QuickView_Client_Models_Charts_DrawdownIntervalStats;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.DrawdownStats
	var $QuickView_Client_Models_Charts_DrawdownStats = function() {
	};
	$QuickView_Client_Models_Charts_DrawdownStats.__typeName = 'QuickView.Client.Models.Charts.DrawdownStats';
	$QuickView_Client_Models_Charts_DrawdownStats.createInstance = function() {
		return $QuickView_Client_Models_Charts_DrawdownStats.$ctor();
	};
	$QuickView_Client_Models_Charts_DrawdownStats.$ctor = function() {
		var $this = {};
		$this.S = ss.getDefaultValue(JS.DateTimeExt);
		$this.E = ss.getDefaultValue(JS.DateTimeExt);
		$this.C = 0;
		$this.T = 0;
		return $this;
	};
	$QuickView_Client_Models_Charts_DrawdownStats.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Models.Charts.DrawdownStats = $QuickView_Client_Models_Charts_DrawdownStats;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.HwmDataPoint
	var $QuickView_Client_Models_Charts_HwmDataPoint = function() {
	};
	$QuickView_Client_Models_Charts_HwmDataPoint.__typeName = 'QuickView.Client.Models.Charts.HwmDataPoint';
	$QuickView_Client_Models_Charts_HwmDataPoint.$ctor = function(time, hwm, performanceFeesPerShare, totalPerformanceFees) {
		var $this = $QuickView_Client_Models_Charts_CustomDataPoint.$ctor(time);
		$this.H = 0;
		$this.F = 0;
		$this.E = 0;
		$this.H = hwm;
		$this.F = performanceFeesPerShare;
		$this.E = totalPerformanceFees;
		return $this;
	};
	$QuickView_Client_Models_Charts_HwmDataPoint.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Models.Charts.HwmDataPoint = $QuickView_Client_Models_Charts_HwmDataPoint;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.Indicator
	var $QuickView_Client_Models_Charts_Indicator = function() {
	};
	$QuickView_Client_Models_Charts_Indicator.__typeName = 'QuickView.Client.Models.Charts.Indicator';
	$QuickView_Client_Models_Charts_Indicator.createInstance = function() {
		return $QuickView_Client_Models_Charts_Indicator.$ctor();
	};
	$QuickView_Client_Models_Charts_Indicator.idLower = function($this) {
		if (ss.isNullOrUndefined($this._idLower)) {
			$this._idLower = $this.I.toLowerCase();
		}
		return $this._idLower;
	};
	$QuickView_Client_Models_Charts_Indicator.$initTimeSeries = function($this, timeSeriesDict, derivedTimeSeriesDict, timeSeriesToIndicatorsDict) {
		JS.ArgumentHelper.notNull(timeSeriesDict, 'timeSeries');
		JS.ArgumentHelper.notNull(derivedTimeSeriesDict, 'derivedTimeSeriesDict');
		JS.ArgumentHelper.notNull(timeSeriesToIndicatorsDict, 'timeSeriesToIndicatorsDict');
		// The list of all time series directly or indirectly referenced by the indicator
		var indicatorAllTimeSeriesList = [];
		var timeSeriesIDList = $this.T || [];
		var indicatorTimeSeriesList = [];
		var indicatorDerivedTimeSeriesList = [];
		$QuickView_Client_Models_Charts_Indicator.$processTimeSeriesIDs($this, timeSeriesIDList, timeSeriesDict, derivedTimeSeriesDict, indicatorTimeSeriesList, indicatorDerivedTimeSeriesList);
		if (indicatorTimeSeriesList.length === 0 && indicatorDerivedTimeSeriesList.length === 0) {
			throw new ss.InvalidOperationException('Time series are not defined for the indicator.');
		}
		ss.arrayAddRange(indicatorAllTimeSeriesList, indicatorTimeSeriesList);
		for (var $t1 = 0; $t1 < indicatorDerivedTimeSeriesList.length; $t1++) {
			var item = indicatorDerivedTimeSeriesList[$t1];
			ss.arrayAddRange(indicatorAllTimeSeriesList, item.referencedAllTimeSeries);
		}
		var supplementTimeSeriesIDList = $this.P || [];
		var indicatorSupplementTimeSeriesList = [];
		var indicatorSupplementDerivedTimeSeriesList = [];
		$QuickView_Client_Models_Charts_Indicator.$processTimeSeriesIDs($this, supplementTimeSeriesIDList, timeSeriesDict, derivedTimeSeriesDict, indicatorSupplementTimeSeriesList, indicatorSupplementDerivedTimeSeriesList);
		ss.arrayAddRange(indicatorAllTimeSeriesList, indicatorSupplementTimeSeriesList);
		for (var $t2 = 0; $t2 < indicatorSupplementDerivedTimeSeriesList.length; $t2++) {
			var item1 = indicatorSupplementDerivedTimeSeriesList[$t2];
			ss.arrayAddRange(indicatorAllTimeSeriesList, item1.referencedAllTimeSeries);
		}
		$this.allTimeSeries = indicatorAllTimeSeriesList;
		$this.timeSeries = indicatorTimeSeriesList;
		$this.derivedTimeSeries = indicatorDerivedTimeSeriesList;
		$this.supplementTimeSeries = indicatorSupplementTimeSeriesList;
		$this.supplementDerivedTimeSeries = indicatorSupplementDerivedTimeSeriesList;
		$this.referencesIntradayTimeSeries = Enumerable.from(indicatorDerivedTimeSeriesList).any(function(x) {
			return x.referencesIntradayTimeSeries;
		}) || Enumerable.from(indicatorSupplementDerivedTimeSeriesList).any(function(x1) {
			return x1.referencesIntradayTimeSeries;
		});
		var arePropertiesSet = false;
		var source = null;
		var currency = null;
		if (indicatorTimeSeriesList.length > 0) {
			for (var $t3 = 0; $t3 < indicatorTimeSeriesList.length; $t3++) {
				var item2 = indicatorTimeSeriesList[$t3];
				if (false === arePropertiesSet) {
					source = item2.S;
					currency = item2.C;
					arePropertiesSet = true;
				}
				if (false === (ss.compareStrings(source, item2.S, true) === 0)) {
					throw new ss.InvalidOperationException('Mixing multiple sources in a single indicator is not permitted.');
				}
				if (currency !== 0 && item2.C !== 0 && item2.C !== currency) {
					throw new ss.InvalidOperationException('Mixing multiple currencies in a single indicator is not permitted.');
				}
			}
		}
		if (indicatorDerivedTimeSeriesList.length > 0) {
			for (var $t4 = 0; $t4 < indicatorDerivedTimeSeriesList.length; $t4++) {
				var item3 = indicatorDerivedTimeSeriesList[$t4];
				if (false === arePropertiesSet) {
					source = item3.source;
					currency = item3.currency;
					arePropertiesSet = true;
				}
				if (false === (ss.compareStrings(source, item3.source, true) === 0)) {
					throw new ss.InvalidOperationException('Mixing multiple sources in a single indicator is not permitted.');
				}
				if (currency !== 0 && item3.currency !== 0 && item3.currency !== currency) {
					throw new ss.InvalidOperationException('Mixing multiple currencies in a single indicator is not permitted.');
				}
			}
		}
		if (false === arePropertiesSet) {
			// Should never happen
			throw new ss.NotImplementedException('Incorrect implementation.');
		}
		$this.timeSeriesSource = source;
		$this.timeSeriesCurrency = ss.unbox(currency);
		// Add the IDs of both directly and indirectly referenced time series
		// as well as derived time series
		for (var $t5 = 0; $t5 < indicatorAllTimeSeriesList.length; $t5++) {
			var item4 = indicatorAllTimeSeriesList[$t5];
			$QuickView_Client_Models_Charts_Indicator.$addIndicatorToDictionary($this, timeSeriesToIndicatorsDict, item4.I);
		}
		for (var $t6 = 0; $t6 < indicatorDerivedTimeSeriesList.length; $t6++) {
			var item5 = indicatorDerivedTimeSeriesList[$t6];
			$QuickView_Client_Models_Charts_Indicator.$addIndicatorToDictionary($this, timeSeriesToIndicatorsDict, item5.I);
		}
	};
	$QuickView_Client_Models_Charts_Indicator.$processTimeSeriesIDs = function($this, timeSeriesIDList, timeSeriesDict, derivedTimeSeriesDict, indicatorTimeSeriesList, indicatorDerivedTimeSeriesList) {
		var $t1 = ss.getEnumerator(timeSeriesIDList);
		try {
			while ($t1.moveNext()) {
				var timeSeriesID = $t1.current();
				var itemKey = timeSeriesID.toLowerCase();
				var itemTimeSeries = timeSeriesDict[itemKey];
				var timeSeriesFound = false;
				if (ss.isValue(itemTimeSeries)) {
					indicatorTimeSeriesList.push(itemTimeSeries);
					timeSeriesFound = true;
				}
				else {
					var itemDerivedTimeSeries = derivedTimeSeriesDict[itemKey];
					if (ss.isValue(itemDerivedTimeSeries)) {
						indicatorDerivedTimeSeriesList.push(itemDerivedTimeSeries);
						timeSeriesFound = true;
					}
				}
				if (false === timeSeriesFound) {
					throw new ss.InvalidOperationException(ss.formatString("A referenced time series ID '{0}' was not found.", timeSeriesID));
				}
			}
		}
		finally {
			$t1.dispose();
		}
	};
	$QuickView_Client_Models_Charts_Indicator.$addIndicatorToDictionary = function($this, timeSeriesToIndicatorsDict, timeSeriesID) {
		var itemKey = timeSeriesID.toLowerCase();
		// Fill the dictionary
		var list = timeSeriesToIndicatorsDict[itemKey];
		if (ss.isNullOrUndefined(list)) {
			timeSeriesToIndicatorsDict[itemKey] = list = [];
		}
		if (false === ss.contains(list, $this)) {
			list.push($this);
		}
	};
	$QuickView_Client_Models_Charts_Indicator.isCompleteValue = function($this) {
		if (ss.isNullOrUndefined($this._isCompleteValue)) {
			$this._isCompleteValue = Enumerable.from($QuickView_Client_Models_Charts_Indicator.getTypes($this)).any(function(x) {
				return $QuickView_Client_Models_Charts_TimeSeriesFullType.isCompleteValue(x);
			});
		}
		return ss.unbox($this._isCompleteValue);
	};
	$QuickView_Client_Models_Charts_Indicator.getHighestMetaResolution = function($this) {
		if ($QuickView_Client_Models_Charts_Indicator.supportsResolution($this, 1)) {
			return 1;
		}
		else if ($QuickView_Client_Models_Charts_Indicator.supportsResolution($this, 2)) {
			return 2;
		}
		else {
			throw new ss.InvalidOperationException('Unsupported resolution.');
		}
	};
	$QuickView_Client_Models_Charts_Indicator.hasRelationship = function($this, name) {
		return ss.isValue($QuickView_Client_Models_Charts_Indicator.getRelationship($this, name));
	};
	$QuickView_Client_Models_Charts_Indicator.getRelationship = function($this, name) {
		JS.ArgumentHelper.notNullOrEmpty(name, 'name');
		if (ss.isNullOrUndefined($this.R) || $this.R.length === 0) {
			return null;
		}
		else {
			name = name.toLowerCase();
			return Enumerable.from($this.R).firstOrDefault(function(x) {
				return ss.referenceEquals($QuickView_Client_Models_Charts_IndicatorRelationship.nameLower(x), name);
			}, ss.getDefaultValue($QuickView_Client_Models_Charts_IndicatorRelationship));
		}
	};
	$QuickView_Client_Models_Charts_Indicator.getSubordinateRelationship = function($this) {
		return JS.Collections.CollectionUtils.coalesce$1($QuickView_Client_Models_Charts_IndicatorRelationship).call(null, [$QuickView_Client_Models_Charts_Indicator.getRelationship($this, 'Market'), $QuickView_Client_Models_Charts_Indicator.getRelationship($this, 'Book')]);
	};
	$QuickView_Client_Models_Charts_Indicator.supportsResolution = function($this, metaResolution) {
		return Enumerable.from($this.timeSeries).any(function(x) {
			return x.M === metaResolution;
		}) || Enumerable.from($this.derivedTimeSeries).any(function(x1) {
			return x1.metaResolution === metaResolution;
		});
	};
	$QuickView_Client_Models_Charts_Indicator.getUnits = function($this) {
		if (ss.isNullOrUndefined($this._unitList)) {
			var list = [];
			ss.arrayAddRange(list, Enumerable.from($this.timeSeries).select(function(x) {
				return x.U;
			}).distinct());
			ss.arrayAddRange(list, Enumerable.from($this.derivedTimeSeries).select(function(x1) {
				return x1.unit;
			}).distinct());
			$this._unitList = list;
		}
		return $this._unitList;
	};
	$QuickView_Client_Models_Charts_Indicator.supportsUnit = function($this, unit) {
		return ss.contains($QuickView_Client_Models_Charts_Indicator.getUnits($this), unit);
	};
	$QuickView_Client_Models_Charts_Indicator.getTypes = function($this) {
		if (ss.isNullOrUndefined($this._typeList)) {
			var list = [];
			ss.arrayAddRange(list, Enumerable.from($this.timeSeries).select(function(x) {
				return $QuickView_Client_Models_Charts_TimeSeries.fullType(x);
			}).distinct());
			ss.arrayAddRange(list, Enumerable.from($this.derivedTimeSeries).select(function(x1) {
				return $QuickView_Client_Models_Charts_DerivedTimeSeries.fullType(x1);
			}).distinct());
			$this._typeList = list;
		}
		return $this._typeList;
	};
	$QuickView_Client_Models_Charts_Indicator.containsReturns = function($this) {
		return Enumerable.from($QuickView_Client_Models_Charts_Indicator.getTypes($this)).any(function(x) {
			return x.T === 1;
		});
	};
	$QuickView_Client_Models_Charts_Indicator.containsPositions = function($this) {
		return Enumerable.from($QuickView_Client_Models_Charts_Indicator.getTypes($this)).any(function(x) {
			return $QuickView_Client_Models_Charts_TimeSeriesFullType.isPosition(x);
		});
	};
	$QuickView_Client_Models_Charts_Indicator.containsSlippage = function($this) {
		return Enumerable.from($QuickView_Client_Models_Charts_Indicator.getTypes($this)).any(function(x) {
			return $QuickView_Client_Models_Charts_TimeSeriesFullType.isSlippage(x);
		});
	};
	$QuickView_Client_Models_Charts_Indicator.containsData$1 = function($this, type, subtype) {
		return Enumerable.from($QuickView_Client_Models_Charts_Indicator.getTypes($this)).any(function(x) {
			return x.T === type && x.S === subtype;
		});
	};
	$QuickView_Client_Models_Charts_Indicator.containsData = function($this, fullType) {
		JS.ArgumentHelper.notNull(fullType, 'fullType');
		return Enumerable.from($QuickView_Client_Models_Charts_Indicator.getTypes($this)).any(function(x) {
			return x.T === fullType.T && x.S === fullType.S;
		});
	};
	$QuickView_Client_Models_Charts_Indicator.supportsCorrelation = function($this) {
		return $QuickView_Client_Models_Charts_Indicator.supportsUnit($this, 4);
	};
	$QuickView_Client_Models_Charts_Indicator.supportsBenchmark = function($this) {
		return $QuickView_Client_Models_Charts_Indicator.supportsUnit($this, 4);
	};
	$QuickView_Client_Models_Charts_Indicator.supportsStats = function($this) {
		return $QuickView_Client_Models_Charts_Indicator.supportsUnit($this, 4);
	};
	$QuickView_Client_Models_Charts_Indicator.$ctor = function() {
		var $this = {};
		$this.I = null;
		$this.N = null;
		$this.D = null;
		$this.B = null;
		$this.L = null;
		$this.F = null;
		$this.S = null;
		$this.M = null;
		$this.T = null;
		$this.P = null;
		$this.G = null;
		$this.R = null;
		$this._idLower = null;
		$this.settings = null;
		$this.menuInfo = null;
		$this.defaultBenchmarkIndicator = null;
		$this.timeSeries = null;
		$this.supplementTimeSeries = null;
		$this.allTimeSeries = null;
		$this.derivedTimeSeries = null;
		$this.supplementDerivedTimeSeries = null;
		$this.referencesIntradayTimeSeries = false;
		$this.timeSeriesSource = null;
		$this.timeSeriesCurrency = 0;
		$this.dependsOnMetaResolutions = null;
		$this._isCompleteValue = null;
		$this._unitList = null;
		$this._typeList = null;
		return $this;
	};
	$QuickView_Client_Models_Charts_Indicator.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Models.Charts.Indicator = $QuickView_Client_Models_Charts_Indicator;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.IndicatorDataRecency
	var $QuickView_Client_Models_Charts_IndicatorDataRecency = function() {
	};
	$QuickView_Client_Models_Charts_IndicatorDataRecency.__typeName = 'QuickView.Client.Models.Charts.IndicatorDataRecency';
	$QuickView_Client_Models_Charts_IndicatorDataRecency.$ctor = function(timeSeries, timeUpdated, timeDataUpdated, lastDataPointTime, recency) {
		var $this = {};
		$this.timeSeries = null;
		$this.timeUpdated = ss.getDefaultValue(JS.DateTimeExt);
		$this.timeDataUpdated = ss.getDefaultValue(JS.DateTimeExt);
		$this.lastDataPointTime = null;
		$this.recency = 0;
		$this.timeSeries = timeSeries;
		$this.timeUpdated = timeUpdated;
		$this.timeDataUpdated = timeDataUpdated;
		$this.lastDataPointTime = lastDataPointTime;
		$this.recency = recency;
		return $this;
	};
	$QuickView_Client_Models_Charts_IndicatorDataRecency.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Models.Charts.IndicatorDataRecency = $QuickView_Client_Models_Charts_IndicatorDataRecency;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.IndicatorDisplayOptions
	var $QuickView_Client_Models_Charts_IndicatorDisplayOptions = function() {
	};
	$QuickView_Client_Models_Charts_IndicatorDisplayOptions.__typeName = 'QuickView.Client.Models.Charts.IndicatorDisplayOptions';
	global.QuickView.Client.Models.Charts.IndicatorDisplayOptions = $QuickView_Client_Models_Charts_IndicatorDisplayOptions;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.IndicatorFlags
	var $QuickView_Client_Models_Charts_IndicatorFlags = function() {
	};
	$QuickView_Client_Models_Charts_IndicatorFlags.__typeName = 'QuickView.Client.Models.Charts.IndicatorFlags';
	global.QuickView.Client.Models.Charts.IndicatorFlags = $QuickView_Client_Models_Charts_IndicatorFlags;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.IndicatorMenuInfo
	var $QuickView_Client_Models_Charts_IndicatorMenuInfo = function() {
	};
	$QuickView_Client_Models_Charts_IndicatorMenuInfo.__typeName = 'QuickView.Client.Models.Charts.IndicatorMenuInfo';
	$QuickView_Client_Models_Charts_IndicatorMenuInfo.$ctor = function(menuItem, rootName, rootShortName, intermediatePath) {
		var $this = {};
		$this.I = null;
		$this.R = null;
		$this.A = null;
		$this.P = null;
		$this.O = 0;
		$this.I = menuItem;
		$this.R = rootName;
		$this.A = rootShortName;
		$this.P = intermediatePath;
		return $this;
	};
	$QuickView_Client_Models_Charts_IndicatorMenuInfo.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Models.Charts.IndicatorMenuInfo = $QuickView_Client_Models_Charts_IndicatorMenuInfo;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.IndicatorRelationship
	var $QuickView_Client_Models_Charts_IndicatorRelationship = function() {
	};
	$QuickView_Client_Models_Charts_IndicatorRelationship.__typeName = 'QuickView.Client.Models.Charts.IndicatorRelationship';
	$QuickView_Client_Models_Charts_IndicatorRelationship.createInstance = function() {
		return $QuickView_Client_Models_Charts_IndicatorRelationship.$ctor();
	};
	$QuickView_Client_Models_Charts_IndicatorRelationship.nameLower = function($this) {
		if (ss.isNullOrUndefined($this._nameLower)) {
			$this._nameLower = $this.N.toLowerCase();
		}
		return $this._nameLower;
	};
	$QuickView_Client_Models_Charts_IndicatorRelationship.$ctor = function() {
		var $this = {};
		$this.N = null;
		$this.I = null;
		$this._nameLower = null;
		$this.indicators = null;
		return $this;
	};
	$QuickView_Client_Models_Charts_IndicatorRelationship.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Models.Charts.IndicatorRelationship = $QuickView_Client_Models_Charts_IndicatorRelationship;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.IndicatorRowMenuItem
	var $QuickView_Client_Models_Charts_IndicatorRowMenuItem = function() {
	};
	$QuickView_Client_Models_Charts_IndicatorRowMenuItem.__typeName = 'QuickView.Client.Models.Charts.IndicatorRowMenuItem';
	$QuickView_Client_Models_Charts_IndicatorRowMenuItem.createInstance = function() {
		return $QuickView_Client_Models_Charts_IndicatorRowMenuItem.$ctor();
	};
	$QuickView_Client_Models_Charts_IndicatorRowMenuItem.$ctor = function() {
		var $this = $QuickView_Client_Models_Charts_MenuItem.$ctor();
		$this.I = null;
		$this.P = 0;
		$this.indicator = null;
		return $this;
	};
	$QuickView_Client_Models_Charts_IndicatorRowMenuItem.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Models.Charts.IndicatorRowMenuItem = $QuickView_Client_Models_Charts_IndicatorRowMenuItem;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.IndicatorRowOptions
	var $QuickView_Client_Models_Charts_IndicatorRowOptions = function() {
	};
	$QuickView_Client_Models_Charts_IndicatorRowOptions.__typeName = 'QuickView.Client.Models.Charts.IndicatorRowOptions';
	global.QuickView.Client.Models.Charts.IndicatorRowOptions = $QuickView_Client_Models_Charts_IndicatorRowOptions;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.IndicatorSettings
	var $QuickView_Client_Models_Charts_IndicatorSettings = function() {
	};
	$QuickView_Client_Models_Charts_IndicatorSettings.__typeName = 'QuickView.Client.Models.Charts.IndicatorSettings';
	$QuickView_Client_Models_Charts_IndicatorSettings.createInstance = function() {
		return $QuickView_Client_Models_Charts_IndicatorSettings.$ctor();
	};
	$QuickView_Client_Models_Charts_IndicatorSettings.idLower = function($this) {
		if (ss.isNullOrUndefined($this._idLower)) {
			$this._idLower = $this.I.toLowerCase();
		}
		return $this._idLower;
	};
	$QuickView_Client_Models_Charts_IndicatorSettings.$ctor = function() {
		var $this = {};
		$this.I = null;
		$this.D = 0;
		$this._idLower = null;
		return $this;
	};
	$QuickView_Client_Models_Charts_IndicatorSettings.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Models.Charts.IndicatorSettings = $QuickView_Client_Models_Charts_IndicatorSettings;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.KnownIndicators
	var $QuickView_Client_Models_Charts_KnownIndicators = function() {
	};
	$QuickView_Client_Models_Charts_KnownIndicators.__typeName = 'QuickView.Client.Models.Charts.KnownIndicators';
	global.QuickView.Client.Models.Charts.KnownIndicators = $QuickView_Client_Models_Charts_KnownIndicators;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.Menu
	var $QuickView_Client_Models_Charts_Menu = function() {
	};
	$QuickView_Client_Models_Charts_Menu.__typeName = 'QuickView.Client.Models.Charts.Menu';
	$QuickView_Client_Models_Charts_Menu.createInstance = function() {
		return $QuickView_Client_Models_Charts_Menu.$ctor();
	};
	$QuickView_Client_Models_Charts_Menu.$ctor = function() {
		var $this = {};
		$this.S = null;
		return $this;
	};
	$QuickView_Client_Models_Charts_Menu.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Models.Charts.Menu = $QuickView_Client_Models_Charts_Menu;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.MenuItem
	var $QuickView_Client_Models_Charts_MenuItem = function() {
	};
	$QuickView_Client_Models_Charts_MenuItem.__typeName = 'QuickView.Client.Models.Charts.MenuItem';
	$QuickView_Client_Models_Charts_MenuItem.$ctor = function() {
		var $this = {};
		$this.root = null;
		$this.parent = null;
		$this.T = 0;
		$this.N = null;
		$this.D = null;
		$this.O = null;
		return $this;
	};
	$QuickView_Client_Models_Charts_MenuItem.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Models.Charts.MenuItem = $QuickView_Client_Models_Charts_MenuItem;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.MenuItemType
	var $QuickView_Client_Models_Charts_MenuItemType = function() {
	};
	$QuickView_Client_Models_Charts_MenuItemType.__typeName = 'QuickView.Client.Models.Charts.MenuItemType';
	global.QuickView.Client.Models.Charts.MenuItemType = $QuickView_Client_Models_Charts_MenuItemType;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.RecencyFactorOptions
	var $QuickView_Client_Models_Charts_RecencyFactorOptions = function() {
	};
	$QuickView_Client_Models_Charts_RecencyFactorOptions.__typeName = 'QuickView.Client.Models.Charts.RecencyFactorOptions';
	global.QuickView.Client.Models.Charts.RecencyFactorOptions = $QuickView_Client_Models_Charts_RecencyFactorOptions;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.RuntimeChartMetadata
	var $QuickView_Client_Models_Charts_RuntimeChartMetadata = function() {
	};
	$QuickView_Client_Models_Charts_RuntimeChartMetadata.__typeName = 'QuickView.Client.Models.Charts.RuntimeChartMetadata';
	$QuickView_Client_Models_Charts_RuntimeChartMetadata.getTimeSeries = function($this, id) {
		JS.ArgumentHelper.notNullOrEmpty(id, 'id');
		$QuickView_Client_Models_Charts_RuntimeChartMetadata.$ensurePostProcessed($this);
		return $this._timeSeriesDict[id.toLowerCase()];
	};
	$QuickView_Client_Models_Charts_RuntimeChartMetadata.getIndicatorsForTimeSeries = function($this, id) {
		JS.ArgumentHelper.notNullOrEmpty(id, 'id');
		$QuickView_Client_Models_Charts_RuntimeChartMetadata.$ensurePostProcessed($this);
		return $this._timeSeriesToIndicatorsDict[id.toLowerCase()];
	};
	$QuickView_Client_Models_Charts_RuntimeChartMetadata.getDerivedTimeSeries = function($this, id) {
		JS.ArgumentHelper.notNullOrEmpty(id, 'id');
		$QuickView_Client_Models_Charts_RuntimeChartMetadata.$ensurePostProcessed($this);
		return $this._derivedTimeSeriesDict[id.toLowerCase()];
	};
	$QuickView_Client_Models_Charts_RuntimeChartMetadata.getIndicator = function($this, id) {
		JS.ArgumentHelper.notNullOrEmpty(id, 'id');
		$QuickView_Client_Models_Charts_RuntimeChartMetadata.$ensurePostProcessed($this);
		return $this._indicatorDict[id.toLowerCase()];
	};
	$QuickView_Client_Models_Charts_RuntimeChartMetadata.$privateGetIndicator = function($this, id) {
		JS.ArgumentHelper.notNullOrEmpty(id, 'id');
		JS.Diagnostics.Debug.assert(ss.isValue($this._indicatorDict));
		return $this._indicatorDict[id.toLowerCase()];
	};
	$QuickView_Client_Models_Charts_RuntimeChartMetadata.getMenu = function($this) {
		$QuickView_Client_Models_Charts_RuntimeChartMetadata.$ensurePostProcessed($this);
		return $this._metadata.M;
	};
	$QuickView_Client_Models_Charts_RuntimeChartMetadata.$ensurePostProcessed = function($this) {
		if ($this.isPostProcessed) {
			return;
		}
		$QuickView_Client_Models_Charts_RuntimeChartMetadata.$postProcessTimeSeries($this);
		$QuickView_Client_Models_Charts_RuntimeChartMetadata.$postProcessDerivedTimeSeries($this);
		// Depends on time series post-processing
		$QuickView_Client_Models_Charts_RuntimeChartMetadata.$postProcessIndicators($this);
		// Depends on time series and derived time series post-processing
		$QuickView_Client_Models_Charts_RuntimeChartMetadata.$postProcessMenu($this);
		// Depends on indicator post-processing
		$this.isPostProcessed = true;
	};
	$QuickView_Client_Models_Charts_RuntimeChartMetadata.$postProcessTimeSeries = function($this) {
		$this._timeSeriesDict = {};
		if (ss.isValue($this._metadata.S)) {
			for (var $t1 = 0; $t1 < $this._metadata.S.length; $t1++) {
				var item = $this._metadata.S[$t1];
				$this._timeSeriesDict[$QuickView_Client_Models_Charts_TimeSeries.idLower(item)] = item;
			}
		}
	};
	$QuickView_Client_Models_Charts_RuntimeChartMetadata.$postProcessDerivedTimeSeries = function($this) {
		$this._derivedTimeSeriesDict = {};
		if (ss.isValue($this._metadata.D)) {
			for (var $t1 = 0; $t1 < $this._metadata.D.length; $t1++) {
				var item = $this._metadata.D[$t1];
				// A derived time series can reference another derived time series only if the latter
				// was declared before it.
				try {
					$QuickView_Client_Models_Charts_DerivedTimeSeries.$initTimeSeries(item, $this._timeSeriesDict, $this._derivedTimeSeriesDict);
				}
				catch ($t2) {
					// Ignore errors and thus ignore the time series; otherwise, this will make the app unusable
					// CAUTION Such errors should be investigated during development through the use of JS debugging
					continue;
				}
				// Do not allow a time series to reference itself
				$this._derivedTimeSeriesDict[item.I.toLowerCase()] = item;
			}
		}
	};
	$QuickView_Client_Models_Charts_RuntimeChartMetadata.$postProcessIndicators = function($this) {
		$this._indicatorDict = {};
		$this._timeSeriesToIndicatorsDict = {};
		var indicatorSettingsDict = {};
		if (ss.isValue($this._metadata.IS)) {
			for (var $t1 = 0; $t1 < $this._metadata.IS.length; $t1++) {
				var item = $this._metadata.IS[$t1];
				indicatorSettingsDict[item.I.toLowerCase()] = item;
			}
		}
		if (ss.isValue($this._metadata.I)) {
			for (var $t2 = 0; $t2 < $this._metadata.I.length; $t2++) {
				var item1 = $this._metadata.I[$t2];
				try {
					$QuickView_Client_Models_Charts_Indicator.$initTimeSeries(item1, $this._timeSeriesDict, $this._derivedTimeSeriesDict, $this._timeSeriesToIndicatorsDict);
				}
				catch ($t3) {
					// Ignore errors and thus ignore the indicator; otherwise, this will make the app unusable
					// CAUTION Such errors should be investigated during development through the use of JS debugging
					continue;
				}
				$this._indicatorDict[item1.I.toLowerCase()] = item1;
			}
			for (var $t4 = 0; $t4 < $this._metadata.I.length; $t4++) {
				var item2 = $this._metadata.I[$t4];
				if (false === ss.isNullOrEmptyString(item2.B)) {
					item2.defaultBenchmarkIndicator = $this._indicatorDict[item2.B.toLowerCase()];
				}
				if (false === ss.isNullOrEmptyString(item2.G)) {
					item2.settings = indicatorSettingsDict[item2.G.toLowerCase()] || $QuickView_Client_Models_Charts_IndicatorSettings.$empty;
				}
				else {
					item2.settings = $QuickView_Client_Models_Charts_IndicatorSettings.$empty;
				}
				if (ss.isValue(item2.R)) {
					for (var $t5 = 0; $t5 < item2.R.length; $t5++) {
						var relationship = item2.R[$t5];
						if (ss.isValue(relationship.I) && relationship.I.length > 0) {
							var indicatorList = [];
							for (var $t6 = 0; $t6 < relationship.I.length; $t6++) {
								var indicatorID = relationship.I[$t6];
								var relatedIndicator = $this._indicatorDict[indicatorID.toLowerCase()];
								if (ss.isValue(relatedIndicator)) {
									indicatorList.push(relatedIndicator);
								}
							}
							if (indicatorList.length > 0) {
								// Sort the indicators since they may be displayed in menus and lists
								indicatorList.sort(function(x, y) {
									return ss.compareStrings(x.N, y.N, true);
								});
								relationship.indicators = indicatorList;
							}
						}
					}
				}
			}
		}
	};
	$QuickView_Client_Models_Charts_RuntimeChartMetadata.$postProcessMenu = function($this) {
		if (ss.isValue($this._metadata.M) && ss.isValue($this._metadata.M.S)) {
			for (var $t1 = 0; $t1 < $this._metadata.M.S.length; $t1++) {
				var item = $this._metadata.M.S[$t1];
				$QuickView_Client_Models_Charts_RuntimeChartMetadata.$postProcessMenuItem_Phase1($this, item, null, item);
			}
			var globalSortOrder = new (ss.makeGenericType(JS.MTuple$1, [ss.Int32]).$ctor1)(0);
			for (var $t2 = 0; $t2 < $this._metadata.M.S.length; $t2++) {
				var item1 = $this._metadata.M.S[$t2];
				$QuickView_Client_Models_Charts_RuntimeChartMetadata.$postProcessMenuItem_Phase2($this, item1, null, item1, globalSortOrder);
			}
		}
	};
	$QuickView_Client_Models_Charts_RuntimeChartMetadata.$postProcessMenuItem_Phase1 = function($this, menuItem, parent, root) {
		JS.ArgumentHelper.notNull(menuItem, 'menuItem');
		menuItem.parent = parent;
		menuItem.root = root;
		if (menuItem.T === 1) {
			var submenu = menuItem;
			if (ss.isValue(submenu.I)) {
				for (var $t1 = 0; $t1 < submenu.I.length; $t1++) {
					var item = submenu.I[$t1];
					$QuickView_Client_Models_Charts_RuntimeChartMetadata.$postProcessMenuItem_Phase1($this, item, submenu, root);
				}
				// Sort the items of the submenu
				// The items must be sorted AFTER post-processing since this can affect their names
				// (the indicator row items in particular) and thus the new names must be used
				// when sorting.
				// At the same time sorting must be done BEFORE the processing in order to have a
				// a correct global order. Therefore, the global order is set in a separate step.
			}
		}
		else if (menuItem.T === 2) {
			var indicatorRowMenuItem = menuItem;
			if (false === ss.isNullOrEmptyString(indicatorRowMenuItem.I)) {
				var indicator = $QuickView_Client_Models_Charts_RuntimeChartMetadata.$privateGetIndicator($this, indicatorRowMenuItem.I);
				indicatorRowMenuItem.indicator = indicator;
				if (ss.isValue(indicator)) {
					var fullPath = $QuickView_Client_Models_Charts_RuntimeChartMetadata.$getAltPathWithoutRoot(parent);
					var intermediatePath = ss.arrayFromEnumerable(fullPath).join('/');
					// Set the menu info
					indicator.menuInfo = $QuickView_Client_Models_Charts_IndicatorMenuInfo.$ctor(indicatorRowMenuItem, root.N, JS.StringExtensions.or(root.A, root.N), intermediatePath);
					if (ss.isNullOrEmptyString(indicatorRowMenuItem.N)) {
						indicatorRowMenuItem.N = JS.StringExtensions.or(indicator.M, indicator.N);
					}
					if (ss.isNullOrEmptyString(indicatorRowMenuItem.D)) {
						indicatorRowMenuItem.D = indicator.D;
					}
				}
			}
		}
	};
	$QuickView_Client_Models_Charts_RuntimeChartMetadata.$postProcessMenuItem_Phase2 = function($this, menuItem, parent, root, globalSortOrder) {
		JS.ArgumentHelper.notNull(menuItem, 'menuItem');
		menuItem.parent = parent;
		menuItem.root = root;
		if (menuItem.T === 1) {
			var submenu = menuItem;
			if (ss.isValue(submenu.I)) {
				submenu.I.sort($QuickView_Client_Models_Charts_RuntimeChartMetadata.$compareMenuItems);
				for (var $t1 = 0; $t1 < submenu.I.length; $t1++) {
					var item = submenu.I[$t1];
					$QuickView_Client_Models_Charts_RuntimeChartMetadata.$postProcessMenuItem_Phase2($this, item, submenu, root, globalSortOrder);
				}
			}
		}
		else if (menuItem.T === 2) {
			var indicatorRowMenuItem = menuItem;
			if (false === ss.isNullOrEmptyString(indicatorRowMenuItem.I)) {
				var indicator = $QuickView_Client_Models_Charts_RuntimeChartMetadata.$privateGetIndicator($this, indicatorRowMenuItem.I);
				indicatorRowMenuItem.indicator = indicator;
				if (ss.isValue(indicator)) {
					indicator.menuInfo.O = ++globalSortOrder.item1;
				}
			}
		}
	};
	$QuickView_Client_Models_Charts_RuntimeChartMetadata.$compareMenuItems = function(a, b) {
		JS.ArgumentHelper.notNull(a, 'a');
		JS.ArgumentHelper.notNull(b, 'b');
		if (a.T === b.T) {
			// Ignore
		}
		else {
			// Indicator rows are displayed at the top of the menu
			return ((a.T === 2) ? -1 : 1);
		}
		var aOrder = ss.coalesce(a.O, 2147483647);
		var bOrder = ss.coalesce(b.O, 2147483647);
		if (aOrder < bOrder) {
			return -1;
		}
		else if (aOrder > bOrder) {
			return 1;
		}
		else {
			if (a.T === 2) {
				var aItem = a;
				var bItem = b;
				// Rows are ordered by the name of the indicator; the order of menu items must be
				// the same. What's more the sorting of menu items is used to calculate the global
				// order of indicator rows which is then used to order rows.
				// If the order of menu items and rows is different then two separate sorts
				// should be used - one to sort menu items and one - to calculate the global order.
				if (ss.isValue(aItem.indicator) && ss.isValue(bItem.indicator)) {
					return ss.Comparer.def.compare(aItem.indicator.N, bItem.indicator.N);
				}
			}
			// Compare the names of the items alphabetically
			return ss.Comparer.def.compare(a.N, b.N);
		}
	};
	$QuickView_Client_Models_Charts_RuntimeChartMetadata.$getAltPathWithoutRoot = function(submenu) {
		JS.ArgumentHelper.notNull(submenu, 'submenu');
		var result = [];
		// Ignore the root
		for (; ss.isValue(submenu) && ss.isValue(submenu.parent); submenu = submenu.parent) {
			var name = JS.StringExtensions.or(submenu.A, submenu.N);
			if ($QuickView_Client_Models_Charts_RuntimeChartMetadata.$isCommonWord(name)) {
				// Ignore the name
				continue;
			}
			ss.insert(result, 0, name);
		}
		return result;
	};
	$QuickView_Client_Models_Charts_RuntimeChartMetadata.$isCommonWord = function(value) {
		if (ss.isNullOrEmptyString(value)) {
			return false;
		}
		else {
			value = value.toLowerCase();
			for (var $t1 = 0; $t1 < $QuickView_Client_Models_Charts_RuntimeChartMetadata.$commonWords.length; $t1++) {
				var item = $QuickView_Client_Models_Charts_RuntimeChartMetadata.$commonWords[$t1];
				if (value.indexOf(item) !== -1) {
					return true;
				}
			}
			return false;
		}
	};
	$QuickView_Client_Models_Charts_RuntimeChartMetadata.$ctor = function(metadata) {
		var $this = {};
		$this._metadata = null;
		$this.isPostProcessed = false;
		$this._timeSeriesDict = null;
		$this._derivedTimeSeriesDict = null;
		$this._indicatorDict = null;
		$this._timeSeriesToIndicatorsDict = null;
		JS.ArgumentHelper.notNull(metadata, 'metadata');
		$this._metadata = JS.ObjectHelper.cloneSerializable($QuickView_Client_Models_Charts_ChartMetadata).call(null, metadata);
		return $this;
	};
	$QuickView_Client_Models_Charts_RuntimeChartMetadata.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Models.Charts.RuntimeChartMetadata = $QuickView_Client_Models_Charts_RuntimeChartMetadata;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.Submenu
	var $QuickView_Client_Models_Charts_Submenu = function() {
	};
	$QuickView_Client_Models_Charts_Submenu.__typeName = 'QuickView.Client.Models.Charts.Submenu';
	$QuickView_Client_Models_Charts_Submenu.createInstance = function() {
		return $QuickView_Client_Models_Charts_Submenu.$ctor();
	};
	$QuickView_Client_Models_Charts_Submenu.getIndicatorRows = function($this) {
		if (ss.isNullOrUndefined($this._indicatorRowList) && ss.isValue($this.I)) {
			$this._indicatorRowList = Enumerable.from($this.I).where(function(x) {
				return x.T === 2;
			}).select(function(x1) {
				return x1;
			}).toArray();
		}
		return $this._indicatorRowList;
	};
	$QuickView_Client_Models_Charts_Submenu.isRoot = function($this) {
		return ss.isNullOrUndefined($this.parent);
	};
	$QuickView_Client_Models_Charts_Submenu.getDefaultIndicatorRows = function($this) {
		if (ss.isNullOrUndefined($this.I)) {
			return null;
		}
		if (ss.isNullOrUndefined($this._defaultIndicatorRowsList)) {
			var result = [];
			$QuickView_Client_Models_Charts_Submenu.$addDefaultIndicatorRows($this, result);
			if (result.length === 0) {
				var firstIndicatorRow = $QuickView_Client_Models_Charts_Submenu.$getFirstIndicatorRow($this);
				if (ss.isValue(firstIndicatorRow)) {
					result.push(firstIndicatorRow);
				}
			}
			$this._defaultIndicatorRowsList = result;
		}
		return $this._defaultIndicatorRowsList;
	};
	$QuickView_Client_Models_Charts_Submenu.$addDefaultIndicatorRows = function($this, result) {
		ss.arrayAddRange(result, Enumerable.from($this.I).where(function(x) {
			return x.T === 2 && JS.EnumExtensions.isSet(x.P, 1);
		}).select(function(x1) {
			return x1;
		}));
		for (var $t1 = 0; $t1 < $this.I.length; $t1++) {
			var item = $this.I[$t1];
			if (item.T === 1) {
				$QuickView_Client_Models_Charts_Submenu.$addDefaultIndicatorRows(item, result);
			}
		}
	};
	$QuickView_Client_Models_Charts_Submenu.$getFirstIndicatorRow = function($this) {
		if (ss.isNullOrUndefined($this.I)) {
			return null;
		}
		var result = Enumerable.from($this.I).firstOrDefault(function(x) {
			return x.T === 2;
		}, ss.getDefaultValue($QuickView_Client_Models_Charts_MenuItem));
		if (ss.isNullOrUndefined(result)) {
			for (var $t1 = 0; $t1 < $this.I.length; $t1++) {
				var item = $this.I[$t1];
				if (item.T === 1) {
					result = $QuickView_Client_Models_Charts_Submenu.$getFirstIndicatorRow(item);
					if (ss.isValue(result)) {
						break;
					}
				}
			}
		}
		return result;
	};
	$QuickView_Client_Models_Charts_Submenu.$ctor = function() {
		var $this = $QuickView_Client_Models_Charts_MenuItem.$ctor();
		$this.A = null;
		$this.I = null;
		$this._indicatorRowList = null;
		$this._defaultIndicatorRowsList = null;
		return $this;
	};
	$QuickView_Client_Models_Charts_Submenu.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Models.Charts.Submenu = $QuickView_Client_Models_Charts_Submenu;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.SubRedDataPoint
	var $QuickView_Client_Models_Charts_SubRedDataPoint = function() {
	};
	$QuickView_Client_Models_Charts_SubRedDataPoint.__typeName = 'QuickView.Client.Models.Charts.SubRedDataPoint';
	$QuickView_Client_Models_Charts_SubRedDataPoint.$ctor = function(time) {
		var $this = $QuickView_Client_Models_Charts_CustomDataPoint.$ctor(time);
		$this.S = 0;
		$this.R = 0;
		$this.F = 0;
		return $this;
	};
	$QuickView_Client_Models_Charts_SubRedDataPoint.$ctor1 = function(time, subscriptions, redemptions, feeReinvestment) {
		var $this = $QuickView_Client_Models_Charts_CustomDataPoint.$ctor(time);
		$this.S = 0;
		$this.R = 0;
		$this.F = 0;
		$this.S = subscriptions;
		$this.R = redemptions;
		$this.F = feeReinvestment;
		return $this;
	};
	$QuickView_Client_Models_Charts_SubRedDataPoint.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Models.Charts.SubRedDataPoint = $QuickView_Client_Models_Charts_SubRedDataPoint;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.TimeInterval
	var $QuickView_Client_Models_Charts_TimeInterval = function() {
	};
	$QuickView_Client_Models_Charts_TimeInterval.__typeName = 'QuickView.Client.Models.Charts.TimeInterval';
	$QuickView_Client_Models_Charts_TimeInterval.equals = function(a, b) {
		if (ss.isNullOrUndefined(a) || ss.isNullOrUndefined(b)) {
			return ss.referenceEquals(a, b);
		}
		else {
			return JS.DateTimeExt.op_Equality(a.S, b.S) && JS.DateTimeExt.op_Equality(a.E, b.E);
		}
	};
	$QuickView_Client_Models_Charts_TimeInterval.$ctor = function(start, end) {
		var $this = {};
		$this.S = ss.getDefaultValue(JS.DateTimeExt);
		$this.E = ss.getDefaultValue(JS.DateTimeExt);
		if (JS.DateTimeExt.op_GreaterThan(start, end)) {
			throw new ss.ArgumentException('The beginning of the interval cannot be after its end.');
		}
		$this.S = start;
		$this.E = end;
		return $this;
	};
	$QuickView_Client_Models_Charts_TimeInterval.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Models.Charts.TimeInterval = $QuickView_Client_Models_Charts_TimeInterval;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.TimeSeries
	var $QuickView_Client_Models_Charts_TimeSeries = function() {
	};
	$QuickView_Client_Models_Charts_TimeSeries.__typeName = 'QuickView.Client.Models.Charts.TimeSeries';
	$QuickView_Client_Models_Charts_TimeSeries.createInstance = function() {
		return $QuickView_Client_Models_Charts_TimeSeries.$ctor();
	};
	$QuickView_Client_Models_Charts_TimeSeries.idLower = function($this) {
		if (ss.isNullOrUndefined($this._idLower)) {
			$this._idLower = $this.I.toLowerCase();
		}
		return $this._idLower;
	};
	$QuickView_Client_Models_Charts_TimeSeries.fullType = function($this) {
		if (ss.isNullOrUndefined($this._fullType)) {
			$this._fullType = $QuickView_Client_Models_Charts_TimeSeriesFullType.$ctor($this.T, $this.B);
		}
		return $this._fullType;
	};
	$QuickView_Client_Models_Charts_TimeSeries.$ctor = function() {
		var $this = {};
		$this.I = null;
		$this.T = 0;
		$this.B = 0;
		$this.U = 0;
		$this.C = 0;
		$this.R = 0;
		$this.M = 0;
		$this.S = null;
		$this.F = 0;
		$this._idLower = null;
		$this._fullType = null;
		return $this;
	};
	$QuickView_Client_Models_Charts_TimeSeries.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Models.Charts.TimeSeries = $QuickView_Client_Models_Charts_TimeSeries;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.TimeSeriesContext
	var $QuickView_Client_Models_Charts_TimeSeriesContext = function() {
	};
	$QuickView_Client_Models_Charts_TimeSeriesContext.__typeName = 'QuickView.Client.Models.Charts.TimeSeriesContext';
	global.QuickView.Client.Models.Charts.TimeSeriesContext = $QuickView_Client_Models_Charts_TimeSeriesContext;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.TimeSeriesCurrency
	var $QuickView_Client_Models_Charts_TimeSeriesCurrency = function() {
	};
	$QuickView_Client_Models_Charts_TimeSeriesCurrency.__typeName = 'QuickView.Client.Models.Charts.TimeSeriesCurrency';
	global.QuickView.Client.Models.Charts.TimeSeriesCurrency = $QuickView_Client_Models_Charts_TimeSeriesCurrency;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.TimeSeriesDataPoint
	var $QuickView_Client_Models_Charts_TimeSeriesDataPoint = function() {
	};
	$QuickView_Client_Models_Charts_TimeSeriesDataPoint.__typeName = 'QuickView.Client.Models.Charts.TimeSeriesDataPoint';
	$QuickView_Client_Models_Charts_TimeSeriesDataPoint.$ctor = function(time, value) {
		var $this = $QuickView_Client_Models_Charts_DataPointBase.$ctor(time);
		$this.V = 0;
		$this.V = value;
		return $this;
	};
	$QuickView_Client_Models_Charts_TimeSeriesDataPoint.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Models.Charts.TimeSeriesDataPoint = $QuickView_Client_Models_Charts_TimeSeriesDataPoint;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.TimeSeriesFullType
	var $QuickView_Client_Models_Charts_TimeSeriesFullType = function() {
	};
	$QuickView_Client_Models_Charts_TimeSeriesFullType.__typeName = 'QuickView.Client.Models.Charts.TimeSeriesFullType';
	$QuickView_Client_Models_Charts_TimeSeriesFullType.isCompleteValue = function($this) {
		return $QuickView_Client_Models_Charts_$TimeSeriesHelper.$isCompleteValue($this.T, $this.S);
	};
	$QuickView_Client_Models_Charts_TimeSeriesFullType.isPosition = function($this) {
		return $QuickView_Client_Models_Charts_$TimeSeriesHelper.$isPosition($this.T, $this.S);
	};
	$QuickView_Client_Models_Charts_TimeSeriesFullType.isOrder = function($this) {
		return $QuickView_Client_Models_Charts_$TimeSeriesHelper.$isOrder($this.T, $this.S);
	};
	$QuickView_Client_Models_Charts_TimeSeriesFullType.isSlippage = function($this) {
		return $QuickView_Client_Models_Charts_$TimeSeriesHelper.$isSlippage($this.T, $this.S);
	};
	$QuickView_Client_Models_Charts_TimeSeriesFullType.$ctor = function(type, subtype) {
		var $this = {};
		$this.T = 0;
		$this.S = 0;
		$this.T = type;
		$this.S = subtype;
		return $this;
	};
	$QuickView_Client_Models_Charts_TimeSeriesFullType.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Models.Charts.TimeSeriesFullType = $QuickView_Client_Models_Charts_TimeSeriesFullType;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.TimeSeriesMetaResolution
	var $QuickView_Client_Models_Charts_TimeSeriesMetaResolution = function() {
	};
	$QuickView_Client_Models_Charts_TimeSeriesMetaResolution.__typeName = 'QuickView.Client.Models.Charts.TimeSeriesMetaResolution';
	global.QuickView.Client.Models.Charts.TimeSeriesMetaResolution = $QuickView_Client_Models_Charts_TimeSeriesMetaResolution;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.TimeSeriesMetaResolutionExtensions
	var $QuickView_Client_Models_Charts_TimeSeriesMetaResolutionExtensions = function() {
	};
	$QuickView_Client_Models_Charts_TimeSeriesMetaResolutionExtensions.__typeName = 'QuickView.Client.Models.Charts.TimeSeriesMetaResolutionExtensions';
	$QuickView_Client_Models_Charts_TimeSeriesMetaResolutionExtensions.isTimePeriod = function(value) {
		return value === 1 || value === 2;
	};
	global.QuickView.Client.Models.Charts.TimeSeriesMetaResolutionExtensions = $QuickView_Client_Models_Charts_TimeSeriesMetaResolutionExtensions;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.TimeSeriesResolution
	var $QuickView_Client_Models_Charts_TimeSeriesResolution = function() {
	};
	$QuickView_Client_Models_Charts_TimeSeriesResolution.__typeName = 'QuickView.Client.Models.Charts.TimeSeriesResolution';
	global.QuickView.Client.Models.Charts.TimeSeriesResolution = $QuickView_Client_Models_Charts_TimeSeriesResolution;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.TimeSeriesResolutionExtensions
	var $QuickView_Client_Models_Charts_TimeSeriesResolutionExtensions = function() {
	};
	$QuickView_Client_Models_Charts_TimeSeriesResolutionExtensions.__typeName = 'QuickView.Client.Models.Charts.TimeSeriesResolutionExtensions';
	$QuickView_Client_Models_Charts_TimeSeriesResolutionExtensions.isIntraday = function(value) {
		return value < 5;
	};
	$QuickView_Client_Models_Charts_TimeSeriesResolutionExtensions.isTimePeriod = function(value) {
		switch (value) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9: {
				return true;
			}
			default: {
				return false;
			}
		}
	};
	$QuickView_Client_Models_Charts_TimeSeriesResolutionExtensions.getMetaResolution = function(resolution) {
		if (false === $QuickView_Client_Models_Charts_TimeSeriesResolutionExtensions.isTimePeriod(resolution)) {
			throw new ss.ArgumentOutOfRangeException('resolution', 'Invalid value.', null, resolution);
		}
		if (resolution < 5) {
			return 1;
		}
		else {
			return 2;
		}
	};
	$QuickView_Client_Models_Charts_TimeSeriesResolutionExtensions.getHighestResolution = function(metaResolution) {
		if (metaResolution === 1) {
			return 2;
		}
		else if (metaResolution === 2) {
			return 5;
		}
		else {
			throw new ss.ArgumentOutOfRangeException('metaResolution', 'Invalid value.', null, metaResolution);
		}
	};
	global.QuickView.Client.Models.Charts.TimeSeriesResolutionExtensions = $QuickView_Client_Models_Charts_TimeSeriesResolutionExtensions;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.TimeSeriesResolutionHelpers
	var $QuickView_Client_Models_Charts_TimeSeriesResolutionHelpers = function() {
	};
	$QuickView_Client_Models_Charts_TimeSeriesResolutionHelpers.__typeName = 'QuickView.Client.Models.Charts.TimeSeriesResolutionHelpers';
	$QuickView_Client_Models_Charts_TimeSeriesResolutionHelpers.fromName = function(name) {
		JS.ArgumentHelper.notNullOrEmpty(name, 'name');
		name = name.toLowerCase();
		switch (name) {
			case 'none': {
				return 0;
			}
			case 'minute': {
				return 1;
			}
			case 'fiveminutes': {
				return 2;
			}
			case 'tenminutes': {
				return 3;
			}
			case 'hour': {
				return 4;
			}
			case 'day': {
				return 5;
			}
			case 'week': {
				return 6;
			}
			case 'month': {
				return 7;
			}
			case 'quarter': {
				return 8;
			}
			case 'year': {
				return 9;
			}
			default: {
				throw new ss.ArgumentOutOfRangeException('name', 'Invalid value.', null, name);
			}
		}
	};
	global.QuickView.Client.Models.Charts.TimeSeriesResolutionHelpers = $QuickView_Client_Models_Charts_TimeSeriesResolutionHelpers;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.TimeSeriesSubtype
	var $QuickView_Client_Models_Charts_TimeSeriesSubtype = function() {
	};
	$QuickView_Client_Models_Charts_TimeSeriesSubtype.__typeName = 'QuickView.Client.Models.Charts.TimeSeriesSubtype';
	global.QuickView.Client.Models.Charts.TimeSeriesSubtype = $QuickView_Client_Models_Charts_TimeSeriesSubtype;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.TimeSeriesTimestamp
	var $QuickView_Client_Models_Charts_TimeSeriesTimestamp = function() {
	};
	$QuickView_Client_Models_Charts_TimeSeriesTimestamp.__typeName = 'QuickView.Client.Models.Charts.TimeSeriesTimestamp';
	$QuickView_Client_Models_Charts_TimeSeriesTimestamp.$ctor = function(timeSeriesID, timestamp, timeUpdated, timeDataUpdated, lastDataPointTime) {
		var $this = {};
		$this.I = null;
		$this.T = null;
		$this.U = new Date(0);
		$this.D = new Date(0);
		$this.L = null;
		$this.I = timeSeriesID;
		$this.T = timestamp;
		$this.U = timeUpdated;
		$this.D = timeDataUpdated;
		$this.L = lastDataPointTime;
		return $this;
	};
	$QuickView_Client_Models_Charts_TimeSeriesTimestamp.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Models.Charts.TimeSeriesTimestamp = $QuickView_Client_Models_Charts_TimeSeriesTimestamp;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.TimeSeriesType
	var $QuickView_Client_Models_Charts_TimeSeriesType = function() {
	};
	$QuickView_Client_Models_Charts_TimeSeriesType.__typeName = 'QuickView.Client.Models.Charts.TimeSeriesType';
	global.QuickView.Client.Models.Charts.TimeSeriesType = $QuickView_Client_Models_Charts_TimeSeriesType;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Charts.TimeSeriesUnit
	var $QuickView_Client_Models_Charts_TimeSeriesUnit = function() {
	};
	$QuickView_Client_Models_Charts_TimeSeriesUnit.__typeName = 'QuickView.Client.Models.Charts.TimeSeriesUnit';
	global.QuickView.Client.Models.Charts.TimeSeriesUnit = $QuickView_Client_Models_Charts_TimeSeriesUnit;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Stats.AlphaBetaStats
	var $QuickView_Client_Models_Stats_AlphaBetaStats = function() {
	};
	$QuickView_Client_Models_Stats_AlphaBetaStats.__typeName = 'QuickView.Client.Models.Stats.AlphaBetaStats';
	$QuickView_Client_Models_Stats_AlphaBetaStats.createInstance = function() {
		return $QuickView_Client_Models_Stats_AlphaBetaStats.$ctor();
	};
	$QuickView_Client_Models_Stats_AlphaBetaStats.$ctor = function() {
		var $this = {};
		$this.R = null;
		$this.T = null;
		$this.S = null;
		$this.I = null;
		$this.A = null;
		$this.B = null;
		return $this;
	};
	$QuickView_Client_Models_Stats_AlphaBetaStats.$ctor1 = function(regression, tStatAlpha, tStatBeta, informationRatio, pfOptFund, pfOptBM) {
		var $this = {};
		$this.R = null;
		$this.T = null;
		$this.S = null;
		$this.I = null;
		$this.A = null;
		$this.B = null;
		$this.R = regression;
		$this.T = tStatAlpha;
		$this.S = tStatBeta;
		$this.I = informationRatio;
		$this.A = pfOptFund;
		$this.B = pfOptBM;
		return $this;
	};
	$QuickView_Client_Models_Stats_AlphaBetaStats.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Models.Stats.AlphaBetaStats = $QuickView_Client_Models_Stats_AlphaBetaStats;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Stats.AlphaBetaValue
	var $QuickView_Client_Models_Stats_AlphaBetaValue = function() {
	};
	$QuickView_Client_Models_Stats_AlphaBetaValue.__typeName = 'QuickView.Client.Models.Stats.AlphaBetaValue';
	$QuickView_Client_Models_Stats_AlphaBetaValue.createInstance = function() {
		return $QuickView_Client_Models_Stats_AlphaBetaValue.$ctor();
	};
	$QuickView_Client_Models_Stats_AlphaBetaValue.$ctor = function() {
		var $this = {};
		$this.A = 0;
		$this.B = 0;
		$this.N = 0;
		$this.S = null;
		return $this;
	};
	$QuickView_Client_Models_Stats_AlphaBetaValue.$ctor1 = function(alpha, beta, dataPointCount, stats) {
		var $this = {};
		$this.A = 0;
		$this.B = 0;
		$this.N = 0;
		$this.S = null;
		$this.A = alpha;
		$this.B = beta;
		$this.N = dataPointCount;
		$this.S = stats;
		return $this;
	};
	$QuickView_Client_Models_Stats_AlphaBetaValue.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Models.Stats.AlphaBetaValue = $QuickView_Client_Models_Stats_AlphaBetaValue;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Stats.AutocorrelationStat
	var $QuickView_Client_Models_Stats_AutocorrelationStat = function() {
	};
	$QuickView_Client_Models_Stats_AutocorrelationStat.__typeName = 'QuickView.Client.Models.Stats.AutocorrelationStat';
	$QuickView_Client_Models_Stats_AutocorrelationStat.createInstance = function() {
		return $QuickView_Client_Models_Stats_AutocorrelationStat.$ctor();
	};
	$QuickView_Client_Models_Stats_AutocorrelationStat.$ctor = function() {
		var $this = {};
		$this.A = 0;
		$this.C = 0;
		$this.L = null;
		$this.H = null;
		return $this;
	};
	$QuickView_Client_Models_Stats_AutocorrelationStat.$ctor1 = function(autocorrelation, dataPointCount, confidenceIntervalLo, confidenceIntervalHi) {
		var $this = {};
		$this.A = 0;
		$this.C = 0;
		$this.L = null;
		$this.H = null;
		$this.A = autocorrelation;
		$this.C = dataPointCount;
		$this.L = confidenceIntervalLo;
		$this.H = confidenceIntervalHi;
		return $this;
	};
	$QuickView_Client_Models_Stats_AutocorrelationStat.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Models.Stats.AutocorrelationStat = $QuickView_Client_Models_Stats_AutocorrelationStat;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Stats.ChartStatsField
	var $QuickView_Client_Models_Stats_ChartStatsField = function() {
	};
	$QuickView_Client_Models_Stats_ChartStatsField.__typeName = 'QuickView.Client.Models.Stats.ChartStatsField';
	global.QuickView.Client.Models.Stats.ChartStatsField = $QuickView_Client_Models_Stats_ChartStatsField;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Stats.CorrelationStats
	var $QuickView_Client_Models_Stats_CorrelationStats = function() {
	};
	$QuickView_Client_Models_Stats_CorrelationStats.__typeName = 'QuickView.Client.Models.Stats.CorrelationStats';
	$QuickView_Client_Models_Stats_CorrelationStats.createInstance = function() {
		return $QuickView_Client_Models_Stats_CorrelationStats.$ctor();
	};
	$QuickView_Client_Models_Stats_CorrelationStats.$ctor = function() {
		var $this = {};
		$this.C = null;
		$this.T = null;
		$this.Y = null;
		return $this;
	};
	$QuickView_Client_Models_Stats_CorrelationStats.$ctor1 = function(covariance, pearsonTStat, syncTStat) {
		var $this = {};
		$this.C = null;
		$this.T = null;
		$this.Y = null;
		$this.C = covariance;
		$this.T = pearsonTStat;
		$this.Y = syncTStat;
		return $this;
	};
	$QuickView_Client_Models_Stats_CorrelationStats.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Models.Stats.CorrelationStats = $QuickView_Client_Models_Stats_CorrelationStats;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Stats.CorrelationStatsField
	var $QuickView_Client_Models_Stats_CorrelationStatsField = function() {
	};
	$QuickView_Client_Models_Stats_CorrelationStatsField.__typeName = 'QuickView.Client.Models.Stats.CorrelationStatsField';
	global.QuickView.Client.Models.Stats.CorrelationStatsField = $QuickView_Client_Models_Stats_CorrelationStatsField;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Stats.CorrelationValue
	var $QuickView_Client_Models_Stats_CorrelationValue = function() {
	};
	$QuickView_Client_Models_Stats_CorrelationValue.__typeName = 'QuickView.Client.Models.Stats.CorrelationValue';
	$QuickView_Client_Models_Stats_CorrelationValue.createInstance = function() {
		return $QuickView_Client_Models_Stats_CorrelationValue.$ctor();
	};
	$QuickView_Client_Models_Stats_CorrelationValue.hasAlphaBeta = function($this) {
		return ss.isValue($this.S) && ss.isValue($this.R);
	};
	$QuickView_Client_Models_Stats_CorrelationValue.$ctor = function() {
		var $this = {};
		$this.V = 0;
		$this.Y = 0;
		$this.C = 0;
		$this.T = null;
		$this.S = null;
		$this.R = null;
		return $this;
	};
	$QuickView_Client_Models_Stats_CorrelationValue.$ctor1 = function(pearsonCorrelation, syncCorrelation, dataPointCount, stats, straightAB, reverseAB) {
		var $this = {};
		$this.V = 0;
		$this.Y = 0;
		$this.C = 0;
		$this.T = null;
		$this.S = null;
		$this.R = null;
		$this.V = pearsonCorrelation;
		$this.Y = syncCorrelation;
		$this.C = dataPointCount;
		$this.T = stats;
		$this.S = straightAB;
		$this.R = reverseAB;
		return $this;
	};
	$QuickView_Client_Models_Stats_CorrelationValue.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Models.Stats.CorrelationValue = $QuickView_Client_Models_Stats_CorrelationValue;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Stats.PercentageStats
	var $QuickView_Client_Models_Stats_PercentageStats = function() {
	};
	$QuickView_Client_Models_Stats_PercentageStats.__typeName = 'QuickView.Client.Models.Stats.PercentageStats';
	$QuickView_Client_Models_Stats_PercentageStats.createInstance = function() {
		return $QuickView_Client_Models_Stats_PercentageStats.$ctor();
	};
	$QuickView_Client_Models_Stats_PercentageStats.$ctor = function() {
		var $this = {};
		$this.N = 0;
		$this.C = null;
		$this.S = null;
		$this.V = null;
		$this.T = null;
		$this.A = null;
		return $this;
	};
	$QuickView_Client_Models_Stats_PercentageStats.$ctor1 = function(dataPointCount) {
		var $this = {};
		$this.N = 0;
		$this.C = null;
		$this.S = null;
		$this.V = null;
		$this.T = null;
		$this.A = null;
		$this.N = dataPointCount;
		return $this;
	};
	$QuickView_Client_Models_Stats_PercentageStats.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Models.Stats.PercentageStats = $QuickView_Client_Models_Stats_PercentageStats;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Stats.TTestStat
	var $QuickView_Client_Models_Stats_TTestStat = function() {
	};
	$QuickView_Client_Models_Stats_TTestStat.__typeName = 'QuickView.Client.Models.Stats.TTestStat';
	$QuickView_Client_Models_Stats_TTestStat.createInstance = function() {
		return $QuickView_Client_Models_Stats_TTestStat.$ctor();
	};
	$QuickView_Client_Models_Stats_TTestStat.$ctor = function() {
		var $this = {};
		$this.T = 0;
		$this.P = 0;
		$this.L = 0;
		return $this;
	};
	$QuickView_Client_Models_Stats_TTestStat.$ctor1 = function(tStat, pValue, lastValueSign) {
		var $this = {};
		$this.T = 0;
		$this.P = 0;
		$this.L = 0;
		$this.T = tStat;
		$this.P = pValue;
		$this.L = lastValueSign;
		return $this;
	};
	$QuickView_Client_Models_Stats_TTestStat.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Models.Stats.TTestStat = $QuickView_Client_Models_Stats_TTestStat;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Stats.UniversalStats
	var $QuickView_Client_Models_Stats_UniversalStats = function() {
	};
	$QuickView_Client_Models_Stats_UniversalStats.__typeName = 'QuickView.Client.Models.Stats.UniversalStats';
	$QuickView_Client_Models_Stats_UniversalStats.createInstance = function() {
		return $QuickView_Client_Models_Stats_UniversalStats.$ctor();
	};
	$QuickView_Client_Models_Stats_UniversalStats.$ctor = function() {
		var $this = {};
		$this.N = 0;
		$this.M = null;
		$this.D = null;
		return $this;
	};
	$QuickView_Client_Models_Stats_UniversalStats.$ctor1 = function(dataPointCount) {
		var $this = {};
		$this.N = 0;
		$this.M = null;
		$this.D = null;
		$this.N = dataPointCount;
		return $this;
	};
	$QuickView_Client_Models_Stats_UniversalStats.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Models.Stats.UniversalStats = $QuickView_Client_Models_Stats_UniversalStats;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Users.User
	var $QuickView_Client_Models_Users_User = function() {
	};
	$QuickView_Client_Models_Users_User.__typeName = 'QuickView.Client.Models.Users.User';
	$QuickView_Client_Models_Users_User.$ctor = function(userName, permissions) {
		var $this = {};
		$this.N = null;
		$this.P = null;
		$this.N = userName;
		$this.P = permissions;
		return $this;
	};
	$QuickView_Client_Models_Users_User.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Models.Users.User = $QuickView_Client_Models_Users_User;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Users.UserPermissions
	var $QuickView_Client_Models_Users_UserPermissions = function() {
	};
	$QuickView_Client_Models_Users_UserPermissions.__typeName = 'QuickView.Client.Models.Users.UserPermissions';
	$QuickView_Client_Models_Users_UserPermissions.getTimeSeriesSourcesAccessRights = function($this, source) {
		JS.ArgumentHelper.notNull(source, 'source');
		if (ss.isNullOrUndefined($this.С)) {
			return 0;
		}
		else {
			var item = Enumerable.from($this.С).firstOrDefault(function(x) {
				return ss.compareStrings(x.S, source, true) === 0;
			}, ss.getDefaultValue($QuickView_Client_Models_Users_UserTimeSeriesSourcePermission));
			if (ss.isNullOrUndefined(item)) {
				return 0;
			}
			else {
				return item.R;
			}
		}
	};
	$QuickView_Client_Models_Users_UserPermissions.$ctor = function(ui, timeSeriesSources) {
		var $this = {};
		$this.U = 0;
		$this.С = null;
		$this.U = ui;
		$this.С = (ss.isNullOrUndefined(timeSeriesSources) ? null : timeSeriesSources);
		return $this;
	};
	$QuickView_Client_Models_Users_UserPermissions.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Models.Users.UserPermissions = $QuickView_Client_Models_Users_UserPermissions;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Users.UserTimeSeriesSourceAccessRights
	var $QuickView_Client_Models_Users_UserTimeSeriesSourceAccessRights = function() {
	};
	$QuickView_Client_Models_Users_UserTimeSeriesSourceAccessRights.__typeName = 'QuickView.Client.Models.Users.UserTimeSeriesSourceAccessRights';
	global.QuickView.Client.Models.Users.UserTimeSeriesSourceAccessRights = $QuickView_Client_Models_Users_UserTimeSeriesSourceAccessRights;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Users.UserTimeSeriesSourcePermission
	var $QuickView_Client_Models_Users_UserTimeSeriesSourcePermission = function() {
	};
	$QuickView_Client_Models_Users_UserTimeSeriesSourcePermission.__typeName = 'QuickView.Client.Models.Users.UserTimeSeriesSourcePermission';
	$QuickView_Client_Models_Users_UserTimeSeriesSourcePermission.$ctor = function(source, accessRights) {
		var $this = {};
		$this.S = null;
		$this.R = 0;
		$this.S = source;
		$this.R = accessRights;
		return $this;
	};
	$QuickView_Client_Models_Users_UserTimeSeriesSourcePermission.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Models.Users.UserTimeSeriesSourcePermission = $QuickView_Client_Models_Users_UserTimeSeriesSourcePermission;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Models.Users.UserUIAccessRights
	var $QuickView_Client_Models_Users_UserUIAccessRights = function() {
	};
	$QuickView_Client_Models_Users_UserUIAccessRights.__typeName = 'QuickView.Client.Models.Users.UserUIAccessRights';
	global.QuickView.Client.Models.Users.UserUIAccessRights = $QuickView_Client_Models_Users_UserUIAccessRights;
	ss.initEnum($QuickView_Client_Models_Applications_AppConnectivityStatus, $asm, { online: 0, offline: 1 });
	ss.initClass($QuickView_Client_Models_Applications_VersionInfo, $asm, {});
	ss.initClass($QuickView_Client_Models_Charts_$TimeSeriesHelper, $asm, {});
	ss.initClass($QuickView_Client_Models_Charts_AlgorithmExtensions, $asm, {});
	ss.initClass($QuickView_Client_Models_Charts_AlgorithmParameter, $asm, {});
	ss.initEnum($QuickView_Client_Models_Charts_AlgorithmParameterOptions, $asm, { none: 0, intraday: 1, ignoreResolutionCheck: 2 });
	ss.initEnum($QuickView_Client_Models_Charts_AlgorithmParameterType, $asm, { other: 0, timeSeriesID: 1, primaryTimeSeriesID: 2, timeSeriesIDList: 3, primaryTimeSeriesIDList: 4 });
	ss.initClass($QuickView_Client_Models_Charts_ChartAlgorithmInfo, $asm, {});
	ss.initClass($QuickView_Client_Models_Charts_DataPointBase, $asm, {});
	ss.initClass($QuickView_Client_Models_Charts_ChartDataPoint, $asm, {}, $QuickView_Client_Models_Charts_DataPointBase);
	ss.initEnum($QuickView_Client_Models_Charts_ChartDataPointType, $asm, { normal: 0, extra: 1 });
	ss.initClass($QuickView_Client_Models_Charts_ChartMetadata, $asm, {});
	ss.initClass($QuickView_Client_Models_Charts_ChartPeriodDef, $asm, {});
	ss.initClass($QuickView_Client_Models_Charts_ChartPeriodHelper, $asm, {});
	ss.initEnum($QuickView_Client_Models_Charts_ChartPeriodType, $asm, { TDY: 2, MTD: 3, YTD: 4, BTD: 5 });
	ss.initClass($QuickView_Client_Models_Charts_ColumnHeaderValue, $asm, {});
	ss.initClass($QuickView_Client_Models_Charts_ColumnHeaderValueList, $asm, {});
	ss.initClass($QuickView_Client_Models_Charts_CustomDataPoint, $asm, {}, $QuickView_Client_Models_Charts_DataPointBase);
	ss.initClass($QuickView_Client_Models_Charts_DbTimeSeriesDataPoint, $asm, {});
	ss.initClass($QuickView_Client_Models_Charts_DerivedTimeSeries, $asm, {});
	ss.initEnum($QuickView_Client_Models_Charts_DerivedTimeSeriesOptions, $asm, { none: 0 });
	ss.initClass($QuickView_Client_Models_Charts_DrawdownData, $asm, {});
	ss.initClass($QuickView_Client_Models_Charts_DrawdownDataPoint, $asm, {});
	ss.initClass($QuickView_Client_Models_Charts_DrawdownInterval, $asm, {});
	ss.initClass($QuickView_Client_Models_Charts_DrawdownIntervalStats, $asm, {});
	ss.initClass($QuickView_Client_Models_Charts_DrawdownStats, $asm, {});
	ss.initClass($QuickView_Client_Models_Charts_HwmDataPoint, $asm, {}, $QuickView_Client_Models_Charts_CustomDataPoint);
	ss.initClass($QuickView_Client_Models_Charts_Indicator, $asm, {});
	ss.initClass($QuickView_Client_Models_Charts_IndicatorDataRecency, $asm, {});
	ss.initEnum($QuickView_Client_Models_Charts_IndicatorDisplayOptions, $asm, { none: 0, scaleCurrency: 1, doNotAbbreviateCurrency: 2 });
	ss.initEnum($QuickView_Client_Models_Charts_IndicatorFlags, $asm, { none: 0, noTodayData: 1 });
	ss.initClass($QuickView_Client_Models_Charts_IndicatorMenuInfo, $asm, {});
	ss.initClass($QuickView_Client_Models_Charts_IndicatorRelationship, $asm, {});
	ss.initClass($QuickView_Client_Models_Charts_MenuItem, $asm, {});
	ss.initClass($QuickView_Client_Models_Charts_IndicatorRowMenuItem, $asm, {}, $QuickView_Client_Models_Charts_MenuItem);
	ss.initEnum($QuickView_Client_Models_Charts_IndicatorRowOptions, $asm, { none: 0, showByDefault: 1 });
	ss.initClass($QuickView_Client_Models_Charts_IndicatorSettings, $asm, {});
	ss.initClass($QuickView_Client_Models_Charts_KnownIndicators, $asm, {});
	ss.initClass($QuickView_Client_Models_Charts_Menu, $asm, {});
	ss.initEnum($QuickView_Client_Models_Charts_MenuItemType, $asm, { none: 0, submenu: 1, indicatorRow: 2 });
	ss.initEnum($QuickView_Client_Models_Charts_RecencyFactorOptions, $asm, { none: 0, ignoreLastWorkingDay: 1 });
	ss.initClass($QuickView_Client_Models_Charts_RuntimeChartMetadata, $asm, {});
	ss.initClass($QuickView_Client_Models_Charts_Submenu, $asm, {}, $QuickView_Client_Models_Charts_MenuItem);
	ss.initClass($QuickView_Client_Models_Charts_SubRedDataPoint, $asm, {}, $QuickView_Client_Models_Charts_CustomDataPoint);
	ss.initClass($QuickView_Client_Models_Charts_TimeInterval, $asm, {});
	ss.initClass($QuickView_Client_Models_Charts_TimeSeries, $asm, {});
	ss.initEnum($QuickView_Client_Models_Charts_TimeSeriesContext, $asm, { none: 0, historical: 1, simulated: 2 });
	ss.initEnum($QuickView_Client_Models_Charts_TimeSeriesCurrency, $asm, { none: 0, USD: 1, EUR: 2, primary: 1 });
	ss.initClass($QuickView_Client_Models_Charts_TimeSeriesDataPoint, $asm, {}, $QuickView_Client_Models_Charts_DataPointBase);
	ss.initClass($QuickView_Client_Models_Charts_TimeSeriesFullType, $asm, {});
	ss.initEnum($QuickView_Client_Models_Charts_TimeSeriesMetaResolution, $asm, { none: 0, intraday: 1, daily: 2, evently: 3 });
	ss.initClass($QuickView_Client_Models_Charts_TimeSeriesMetaResolutionExtensions, $asm, {});
	ss.initEnum($QuickView_Client_Models_Charts_TimeSeriesResolution, $asm, { none: 0, minute: 1, fiveMinutes: 2, tenMinutes: 3, hour: 4, day: 5, week: 6, month: 7, quarter: 8, year: 9, event: 10 });
	ss.initClass($QuickView_Client_Models_Charts_TimeSeriesResolutionExtensions, $asm, {});
	ss.initClass($QuickView_Client_Models_Charts_TimeSeriesResolutionHelpers, $asm, {});
	ss.initEnum($QuickView_Client_Models_Charts_TimeSeriesSubtype, $asm, { none: 0, cumComp: 1, cumUnComp: 2, nonCumComp: 3, nonCumUnComp: 4, AUM: 5, NAV: 6, pnL: 7, share: 8, subRed: 9, revenue: 10, feeReinvestment: 11, subscriptions: 12, redemptions: 13, ordBuy: 14, ordSell: 15, posLng: 16, posSht: 17, slpAct: 18, slpExp: 19, subRed_Custom: 1001 });
	ss.initClass($QuickView_Client_Models_Charts_TimeSeriesTimestamp, $asm, {});
	ss.initEnum($QuickView_Client_Models_Charts_TimeSeriesType, $asm, { raw: 0, return$1: 1, equity: 2, price: 3 });
	ss.initEnum($QuickView_Client_Models_Charts_TimeSeriesUnit, $asm, { none: 0, bps: 1, numberOfContracts: 2, baseCurrency: 3, percent: 4, qrUnit: 5 });
	ss.initClass($QuickView_Client_Models_Stats_AlphaBetaStats, $asm, {});
	ss.initClass($QuickView_Client_Models_Stats_AlphaBetaValue, $asm, {});
	ss.initClass($QuickView_Client_Models_Stats_AutocorrelationStat, $asm, {});
	ss.initEnum($QuickView_Client_Models_Stats_ChartStatsField, $asm, { None: 'None', CAGR: 'CAGR', SR: 'SR', V: 'V', DataPointCount: 'DataPointCount', Autocorrelation: 'Autocorrelation', TStat: 'TStat', PValue: 'PValue' }, true);
	ss.initClass($QuickView_Client_Models_Stats_CorrelationStats, $asm, {});
	ss.initEnum($QuickView_Client_Models_Stats_CorrelationStatsField, $asm, { None: 'None', PearsonCorrelation: 'PearsonCorrelation', SyncCorrelation: 'SyncCorrelation', DataPointCount: 'DataPointCount', Covariance: 'Covariance', PearsonTStat: 'PearsonTStat', SyncTStat: 'SyncTStat', AlphaBeta_Alpha: 'AlphaBeta_Alpha', AlphaBeta_Beta: 'AlphaBeta_Beta', AlphaBeta_DataPointCount: 'AlphaBeta_DataPointCount', AlphaBeta_Regression: 'AlphaBeta_Regression', AlphaBeta_TStatAlpha: 'AlphaBeta_TStatAlpha', AlphaBeta_TStatBeta: 'AlphaBeta_TStatBeta', AlphaBeta_InformationRatio: 'AlphaBeta_InformationRatio', AlphaBeta_PfOptFund: 'AlphaBeta_PfOptFund' }, true);
	ss.initClass($QuickView_Client_Models_Stats_CorrelationValue, $asm, {});
	ss.initClass($QuickView_Client_Models_Stats_PercentageStats, $asm, {});
	ss.initClass($QuickView_Client_Models_Stats_TTestStat, $asm, {});
	ss.initClass($QuickView_Client_Models_Stats_UniversalStats, $asm, {});
	ss.initClass($QuickView_Client_Models_Users_User, $asm, {});
	ss.initClass($QuickView_Client_Models_Users_UserPermissions, $asm, {});
	ss.initEnum($QuickView_Client_Models_Users_UserTimeSeriesSourceAccessRights, $asm, { none: 0, read: 1, perfView: 2 });
	ss.initClass($QuickView_Client_Models_Users_UserTimeSeriesSourcePermission, $asm, {});
	ss.initEnum($QuickView_Client_Models_Users_UserUIAccessRights, $asm, { none: 0, export$1: 1, piwik: 2, shareSeries: 2 });
	ss.setMetadata($QuickView_Client_Models_Charts_AlgorithmParameterOptions, { enumFlags: true });
	ss.setMetadata($QuickView_Client_Models_Charts_DerivedTimeSeriesOptions, { enumFlags: true });
	ss.setMetadata($QuickView_Client_Models_Charts_IndicatorFlags, { enumFlags: true });
	ss.setMetadata($QuickView_Client_Models_Charts_RecencyFactorOptions, { enumFlags: true });
	(function() {
		$QuickView_Client_Models_Applications_VersionInfo.unknown = $QuickView_Client_Models_Applications_VersionInfo.$ctor('', new Date(1900, 1 - 1, 1));
	})();
	(function() {
		var $t1 = $QuickView_Client_Models_Charts_ChartAlgorithmInfo.$ctor();
		$t1.unit = 4;
		$t1.type = 1;
		$t1.subtype = 3;
		$QuickView_Client_Models_Charts_ChartAlgorithmInfo.$qrReturnsInfo = $t1;
		var $t1 = $QuickView_Client_Models_Charts_ChartAlgorithmInfo.$ctor();
		$t1.unit = 3;
		$t1.type = 0;
		$t1.subtype = 0;
		$t1.isCustom = true;
		$QuickView_Client_Models_Charts_ChartAlgorithmInfo.$qrhwmInfo = $t1;
		var $t1 = $QuickView_Client_Models_Charts_ChartAlgorithmInfo.$ctor();
		$t1.unit = 3;
		$t1.type = 2;
		$t1.subtype = 1001;
		$t1.isCustom = true;
		$QuickView_Client_Models_Charts_ChartAlgorithmInfo.$qrSubRedInfo = $t1;
		var $t1 = $QuickView_Client_Models_Charts_ChartAlgorithmInfo.$ctor();
		$t1.unit = 4;
		$t1.type = 1;
		$t1.subtype = 4;
		$QuickView_Client_Models_Charts_ChartAlgorithmInfo.$ionReturnsInfo = $t1;
	})();
	(function() {
		$QuickView_Client_Models_Charts_IndicatorSettings.$empty = $QuickView_Client_Models_Charts_IndicatorSettings.$ctor();
	})();
	(function() {
		$QuickView_Client_Models_Charts_ChartPeriodHelper.dateTimeMinValue = new JS.DateTimeExt.$ctor5(1901, 1, 1, 0, 0, 0, 1);
		$QuickView_Client_Models_Charts_ChartPeriodHelper.$_btdStartList = null;
	})();
	(function() {
		$QuickView_Client_Models_Charts_KnownIndicators.qrNet = 'qr-net';
		$QuickView_Client_Models_Charts_KnownIndicators.QRHWM = 'qr-hwm';
	})();
	(function() {
		$QuickView_Client_Models_Charts_RuntimeChartMetadata.$commonWords = ['aggregation'];
	})();
})();
