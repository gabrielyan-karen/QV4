(function() {
	'use strict';
	var $asm = {};
	global.QuickView = global.QuickView || {};
	global.QuickView.Api = global.QuickView.Api || {};
	global.QuickView.Api.Charts = global.QuickView.Api.Charts || {};
	global.QuickView.Api.Users = global.QuickView.Api.Users || {};
	ss.initAssembly($asm, 'QuickView.Api');
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Api.Charts.AlgorithmParameter
	var $QuickView_Api_Charts_AlgorithmParameter = function() {
	};
	$QuickView_Api_Charts_AlgorithmParameter.__typeName = 'QuickView.Api.Charts.AlgorithmParameter';
	$QuickView_Api_Charts_AlgorithmParameter.createInstance = function() {
		return $QuickView_Api_Charts_AlgorithmParameter.$ctor();
	};
	$QuickView_Api_Charts_AlgorithmParameter.$ctor = function() {
		var $this = {};
		$this.N = null;
		$this.V = null;
		$this.T = 0;
		$this.O = 0;
		return $this;
	};
	$QuickView_Api_Charts_AlgorithmParameter.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Api.Charts.AlgorithmParameter = $QuickView_Api_Charts_AlgorithmParameter;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Api.Charts.AlgorithmParameterOptions
	var $QuickView_Api_Charts_AlgorithmParameterOptions = function() {
	};
	$QuickView_Api_Charts_AlgorithmParameterOptions.__typeName = 'QuickView.Api.Charts.AlgorithmParameterOptions';
	global.QuickView.Api.Charts.AlgorithmParameterOptions = $QuickView_Api_Charts_AlgorithmParameterOptions;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Api.Charts.AlgorithmParameterType
	var $QuickView_Api_Charts_AlgorithmParameterType = function() {
	};
	$QuickView_Api_Charts_AlgorithmParameterType.__typeName = 'QuickView.Api.Charts.AlgorithmParameterType';
	global.QuickView.Api.Charts.AlgorithmParameterType = $QuickView_Api_Charts_AlgorithmParameterType;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Api.Charts.ChartMetadata
	var $QuickView_Api_Charts_ChartMetadata = function() {
	};
	$QuickView_Api_Charts_ChartMetadata.__typeName = 'QuickView.Api.Charts.ChartMetadata';
	$QuickView_Api_Charts_ChartMetadata.createInstance = function() {
		return $QuickView_Api_Charts_ChartMetadata.$ctor();
	};
	$QuickView_Api_Charts_ChartMetadata.$ctor = function() {
		var $this = {};
		$this.T = null;
		$this.X = false;
		$this.S = null;
		$this.D = null;
		$this.I = null;
		$this.IS = null;
		$this.M = null;
		return $this;
	};
	$QuickView_Api_Charts_ChartMetadata.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Api.Charts.ChartMetadata = $QuickView_Api_Charts_ChartMetadata;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Api.Charts.DerivedTimeSeries
	var $QuickView_Api_Charts_DerivedTimeSeries = function() {
	};
	$QuickView_Api_Charts_DerivedTimeSeries.__typeName = 'QuickView.Api.Charts.DerivedTimeSeries';
	$QuickView_Api_Charts_DerivedTimeSeries.createInstance = function() {
		return $QuickView_Api_Charts_DerivedTimeSeries.$ctor();
	};
	$QuickView_Api_Charts_DerivedTimeSeries.$ctor = function() {
		var $this = {};
		$this.I = null;
		$this.A = null;
		$this.P = null;
		$this.O = 0;
		return $this;
	};
	$QuickView_Api_Charts_DerivedTimeSeries.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Api.Charts.DerivedTimeSeries = $QuickView_Api_Charts_DerivedTimeSeries;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Api.Charts.DerivedTimeSeriesOptions
	var $QuickView_Api_Charts_DerivedTimeSeriesOptions = function() {
	};
	$QuickView_Api_Charts_DerivedTimeSeriesOptions.__typeName = 'QuickView.Api.Charts.DerivedTimeSeriesOptions';
	global.QuickView.Api.Charts.DerivedTimeSeriesOptions = $QuickView_Api_Charts_DerivedTimeSeriesOptions;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Api.Charts.Indicator
	var $QuickView_Api_Charts_Indicator = function() {
	};
	$QuickView_Api_Charts_Indicator.__typeName = 'QuickView.Api.Charts.Indicator';
	$QuickView_Api_Charts_Indicator.createInstance = function() {
		return $QuickView_Api_Charts_Indicator.$ctor();
	};
	$QuickView_Api_Charts_Indicator.$ctor = function() {
		var $this = {};
		$this.I = null;
		$this.N = null;
		$this.D = null;
		$this.B = null;
		$this.L = null;
		$this.S = null;
		$this.M = null;
		$this.T = null;
		$this.P = null;
		$this.G = null;
		$this.R = null;
		return $this;
	};
	$QuickView_Api_Charts_Indicator.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Api.Charts.Indicator = $QuickView_Api_Charts_Indicator;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Api.Charts.IndicatorDisplayOptions
	var $QuickView_Api_Charts_IndicatorDisplayOptions = function() {
	};
	$QuickView_Api_Charts_IndicatorDisplayOptions.__typeName = 'QuickView.Api.Charts.IndicatorDisplayOptions';
	global.QuickView.Api.Charts.IndicatorDisplayOptions = $QuickView_Api_Charts_IndicatorDisplayOptions;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Api.Charts.IndicatorRelationship
	var $QuickView_Api_Charts_IndicatorRelationship = function() {
	};
	$QuickView_Api_Charts_IndicatorRelationship.__typeName = 'QuickView.Api.Charts.IndicatorRelationship';
	$QuickView_Api_Charts_IndicatorRelationship.createInstance = function() {
		return $QuickView_Api_Charts_IndicatorRelationship.$ctor();
	};
	$QuickView_Api_Charts_IndicatorRelationship.$ctor = function() {
		var $this = {};
		$this.N = null;
		$this.I = null;
		return $this;
	};
	$QuickView_Api_Charts_IndicatorRelationship.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Api.Charts.IndicatorRelationship = $QuickView_Api_Charts_IndicatorRelationship;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Api.Charts.IndicatorRowMenuItem
	var $QuickView_Api_Charts_IndicatorRowMenuItem = function() {
	};
	$QuickView_Api_Charts_IndicatorRowMenuItem.__typeName = 'QuickView.Api.Charts.IndicatorRowMenuItem';
	$QuickView_Api_Charts_IndicatorRowMenuItem.createInstance = function() {
		return $QuickView_Api_Charts_IndicatorRowMenuItem.$ctor();
	};
	$QuickView_Api_Charts_IndicatorRowMenuItem.$ctor = function() {
		var $this = $QuickView_Api_Charts_MenuItem.$ctor();
		$this.I = null;
		$this.P = 0;
		return $this;
	};
	$QuickView_Api_Charts_IndicatorRowMenuItem.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Api.Charts.IndicatorRowMenuItem = $QuickView_Api_Charts_IndicatorRowMenuItem;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Api.Charts.IndicatorRowOptions
	var $QuickView_Api_Charts_IndicatorRowOptions = function() {
	};
	$QuickView_Api_Charts_IndicatorRowOptions.__typeName = 'QuickView.Api.Charts.IndicatorRowOptions';
	global.QuickView.Api.Charts.IndicatorRowOptions = $QuickView_Api_Charts_IndicatorRowOptions;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Api.Charts.IndicatorSettings
	var $QuickView_Api_Charts_IndicatorSettings = function() {
	};
	$QuickView_Api_Charts_IndicatorSettings.__typeName = 'QuickView.Api.Charts.IndicatorSettings';
	$QuickView_Api_Charts_IndicatorSettings.createInstance = function() {
		return $QuickView_Api_Charts_IndicatorSettings.$ctor();
	};
	$QuickView_Api_Charts_IndicatorSettings.$ctor = function() {
		var $this = {};
		$this.I = null;
		$this.D = 0;
		return $this;
	};
	$QuickView_Api_Charts_IndicatorSettings.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Api.Charts.IndicatorSettings = $QuickView_Api_Charts_IndicatorSettings;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Api.Charts.Menu
	var $QuickView_Api_Charts_Menu = function() {
	};
	$QuickView_Api_Charts_Menu.__typeName = 'QuickView.Api.Charts.Menu';
	$QuickView_Api_Charts_Menu.createInstance = function() {
		return $QuickView_Api_Charts_Menu.$ctor();
	};
	$QuickView_Api_Charts_Menu.$ctor = function() {
		var $this = {};
		$this.S = null;
		return $this;
	};
	$QuickView_Api_Charts_Menu.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Api.Charts.Menu = $QuickView_Api_Charts_Menu;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Api.Charts.MenuItem
	var $QuickView_Api_Charts_MenuItem = function() {
	};
	$QuickView_Api_Charts_MenuItem.__typeName = 'QuickView.Api.Charts.MenuItem';
	$QuickView_Api_Charts_MenuItem.$ctor = function() {
		var $this = {};
		$this.T = 0;
		$this.N = null;
		$this.D = null;
		$this.O = null;
		return $this;
	};
	$QuickView_Api_Charts_MenuItem.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Api.Charts.MenuItem = $QuickView_Api_Charts_MenuItem;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Api.Charts.MenuItemType
	var $QuickView_Api_Charts_MenuItemType = function() {
	};
	$QuickView_Api_Charts_MenuItemType.__typeName = 'QuickView.Api.Charts.MenuItemType';
	global.QuickView.Api.Charts.MenuItemType = $QuickView_Api_Charts_MenuItemType;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Api.Charts.Submenu
	var $QuickView_Api_Charts_Submenu = function() {
	};
	$QuickView_Api_Charts_Submenu.__typeName = 'QuickView.Api.Charts.Submenu';
	$QuickView_Api_Charts_Submenu.createInstance = function() {
		return $QuickView_Api_Charts_Submenu.$ctor();
	};
	$QuickView_Api_Charts_Submenu.$ctor = function() {
		var $this = $QuickView_Api_Charts_MenuItem.$ctor();
		$this.A = null;
		$this.I = null;
		return $this;
	};
	$QuickView_Api_Charts_Submenu.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Api.Charts.Submenu = $QuickView_Api_Charts_Submenu;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Api.Charts.TimeSeries
	var $QuickView_Api_Charts_TimeSeries = function() {
	};
	$QuickView_Api_Charts_TimeSeries.__typeName = 'QuickView.Api.Charts.TimeSeries';
	$QuickView_Api_Charts_TimeSeries.createInstance = function() {
		return $QuickView_Api_Charts_TimeSeries.$ctor();
	};
	$QuickView_Api_Charts_TimeSeries.$ctor = function() {
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
		return $this;
	};
	$QuickView_Api_Charts_TimeSeries.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Api.Charts.TimeSeries = $QuickView_Api_Charts_TimeSeries;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Api.Charts.TimeSeriesContext
	var $QuickView_Api_Charts_TimeSeriesContext = function() {
	};
	$QuickView_Api_Charts_TimeSeriesContext.__typeName = 'QuickView.Api.Charts.TimeSeriesContext';
	global.QuickView.Api.Charts.TimeSeriesContext = $QuickView_Api_Charts_TimeSeriesContext;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Api.Charts.TimeSeriesCurrency
	var $QuickView_Api_Charts_TimeSeriesCurrency = function() {
	};
	$QuickView_Api_Charts_TimeSeriesCurrency.__typeName = 'QuickView.Api.Charts.TimeSeriesCurrency';
	global.QuickView.Api.Charts.TimeSeriesCurrency = $QuickView_Api_Charts_TimeSeriesCurrency;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Api.Charts.TimeSeriesData
	var $QuickView_Api_Charts_TimeSeriesData = function() {
	};
	$QuickView_Api_Charts_TimeSeriesData.__typeName = 'QuickView.Api.Charts.TimeSeriesData';
	$QuickView_Api_Charts_TimeSeriesData.createInstance = function() {
		return $QuickView_Api_Charts_TimeSeriesData.$ctor();
	};
	$QuickView_Api_Charts_TimeSeriesData.$ctor = function() {
		var $this = {};
		$this.T = null;
		$this.I = null;
		return $this;
	};
	$QuickView_Api_Charts_TimeSeriesData.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Api.Charts.TimeSeriesData = $QuickView_Api_Charts_TimeSeriesData;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Api.Charts.TimeSeriesDataItem
	var $QuickView_Api_Charts_TimeSeriesDataItem = function() {
	};
	$QuickView_Api_Charts_TimeSeriesDataItem.__typeName = 'QuickView.Api.Charts.TimeSeriesDataItem';
	$QuickView_Api_Charts_TimeSeriesDataItem.createInstance = function() {
		return $QuickView_Api_Charts_TimeSeriesDataItem.$ctor();
	};
	$QuickView_Api_Charts_TimeSeriesDataItem.$ctor = function() {
		var $this = {};
		$this.D = null;
		$this.I = null;
		return $this;
	};
	$QuickView_Api_Charts_TimeSeriesDataItem.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Api.Charts.TimeSeriesDataItem = $QuickView_Api_Charts_TimeSeriesDataItem;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Api.Charts.TimeSeriesDataList
	var $QuickView_Api_Charts_TimeSeriesDataList = function() {
	};
	$QuickView_Api_Charts_TimeSeriesDataList.__typeName = 'QuickView.Api.Charts.TimeSeriesDataList';
	$QuickView_Api_Charts_TimeSeriesDataList.createInstance = function() {
		return $QuickView_Api_Charts_TimeSeriesDataList.$ctor();
	};
	$QuickView_Api_Charts_TimeSeriesDataList.$ctor = function() {
		var $this = {};
		$this.S = null;
		return $this;
	};
	$QuickView_Api_Charts_TimeSeriesDataList.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Api.Charts.TimeSeriesDataList = $QuickView_Api_Charts_TimeSeriesDataList;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Api.Charts.TimeSeriesIntervalData
	var $QuickView_Api_Charts_TimeSeriesIntervalData = function() {
	};
	$QuickView_Api_Charts_TimeSeriesIntervalData.__typeName = 'QuickView.Api.Charts.TimeSeriesIntervalData';
	$QuickView_Api_Charts_TimeSeriesIntervalData.createInstance = function() {
		return $QuickView_Api_Charts_TimeSeriesIntervalData.$ctor();
	};
	$QuickView_Api_Charts_TimeSeriesIntervalData.$ctor = function() {
		var $this = {};
		$this.S = 0;
		$this.E = 0;
		$this.P = null;
		return $this;
	};
	$QuickView_Api_Charts_TimeSeriesIntervalData.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Api.Charts.TimeSeriesIntervalData = $QuickView_Api_Charts_TimeSeriesIntervalData;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Api.Charts.TimeSeriesMetaResolution
	var $QuickView_Api_Charts_TimeSeriesMetaResolution = function() {
	};
	$QuickView_Api_Charts_TimeSeriesMetaResolution.__typeName = 'QuickView.Api.Charts.TimeSeriesMetaResolution';
	global.QuickView.Api.Charts.TimeSeriesMetaResolution = $QuickView_Api_Charts_TimeSeriesMetaResolution;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Api.Charts.TimeSeriesResolution
	var $QuickView_Api_Charts_TimeSeriesResolution = function() {
	};
	$QuickView_Api_Charts_TimeSeriesResolution.__typeName = 'QuickView.Api.Charts.TimeSeriesResolution';
	global.QuickView.Api.Charts.TimeSeriesResolution = $QuickView_Api_Charts_TimeSeriesResolution;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Api.Charts.TimeSeriesSubtype
	var $QuickView_Api_Charts_TimeSeriesSubtype = function() {
	};
	$QuickView_Api_Charts_TimeSeriesSubtype.__typeName = 'QuickView.Api.Charts.TimeSeriesSubtype';
	global.QuickView.Api.Charts.TimeSeriesSubtype = $QuickView_Api_Charts_TimeSeriesSubtype;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Api.Charts.TimeSeriesTimestamp
	var $QuickView_Api_Charts_TimeSeriesTimestamp = function() {
	};
	$QuickView_Api_Charts_TimeSeriesTimestamp.__typeName = 'QuickView.Api.Charts.TimeSeriesTimestamp';
	$QuickView_Api_Charts_TimeSeriesTimestamp.createInstance = function() {
		return $QuickView_Api_Charts_TimeSeriesTimestamp.$ctor();
	};
	$QuickView_Api_Charts_TimeSeriesTimestamp.$ctor = function() {
		var $this = {};
		$this.I = null;
		$this.T = null;
		$this.D = null;
		return $this;
	};
	$QuickView_Api_Charts_TimeSeriesTimestamp.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Api.Charts.TimeSeriesTimestamp = $QuickView_Api_Charts_TimeSeriesTimestamp;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Api.Charts.TimeSeriesType
	var $QuickView_Api_Charts_TimeSeriesType = function() {
	};
	$QuickView_Api_Charts_TimeSeriesType.__typeName = 'QuickView.Api.Charts.TimeSeriesType';
	global.QuickView.Api.Charts.TimeSeriesType = $QuickView_Api_Charts_TimeSeriesType;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Api.Charts.TimeSeriesUnit
	var $QuickView_Api_Charts_TimeSeriesUnit = function() {
	};
	$QuickView_Api_Charts_TimeSeriesUnit.__typeName = 'QuickView.Api.Charts.TimeSeriesUnit';
	global.QuickView.Api.Charts.TimeSeriesUnit = $QuickView_Api_Charts_TimeSeriesUnit;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Api.Charts.TimeSeriesUpdates
	var $QuickView_Api_Charts_TimeSeriesUpdates = function() {
	};
	$QuickView_Api_Charts_TimeSeriesUpdates.__typeName = 'QuickView.Api.Charts.TimeSeriesUpdates';
	$QuickView_Api_Charts_TimeSeriesUpdates.createInstance = function() {
		return $QuickView_Api_Charts_TimeSeriesUpdates.$ctor();
	};
	$QuickView_Api_Charts_TimeSeriesUpdates.$ctor = function() {
		var $this = {};
		$this.T = null;
		$this.S = null;
		return $this;
	};
	$QuickView_Api_Charts_TimeSeriesUpdates.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Api.Charts.TimeSeriesUpdates = $QuickView_Api_Charts_TimeSeriesUpdates;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Api.Users.LoginResponse
	var $QuickView_Api_Users_LoginResponse = function() {
	};
	$QuickView_Api_Users_LoginResponse.__typeName = 'QuickView.Api.Users.LoginResponse';
	$QuickView_Api_Users_LoginResponse.createInstance = function() {
		return $QuickView_Api_Users_LoginResponse.$ctor();
	};
	$QuickView_Api_Users_LoginResponse.$ctor = function() {
		var $this = {};
		$this.T = null;
		$this.U = null;
		return $this;
	};
	$QuickView_Api_Users_LoginResponse.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Api.Users.LoginResponse = $QuickView_Api_Users_LoginResponse;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Api.Users.User
	var $QuickView_Api_Users_User = function() {
	};
	$QuickView_Api_Users_User.__typeName = 'QuickView.Api.Users.User';
	$QuickView_Api_Users_User.createInstance = function() {
		return $QuickView_Api_Users_User.$ctor();
	};
	$QuickView_Api_Users_User.$ctor = function() {
		var $this = {};
		$this.N = null;
		$this.P = null;
		return $this;
	};
	$QuickView_Api_Users_User.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Api.Users.User = $QuickView_Api_Users_User;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Api.Users.UserPermissions
	var $QuickView_Api_Users_UserPermissions = function() {
	};
	$QuickView_Api_Users_UserPermissions.__typeName = 'QuickView.Api.Users.UserPermissions';
	$QuickView_Api_Users_UserPermissions.createInstance = function() {
		return $QuickView_Api_Users_UserPermissions.$ctor();
	};
	$QuickView_Api_Users_UserPermissions.$ctor = function() {
		var $this = {};
		$this.U = 0;
		$this.С = null;
		return $this;
	};
	$QuickView_Api_Users_UserPermissions.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Api.Users.UserPermissions = $QuickView_Api_Users_UserPermissions;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Api.Users.UserTimeSeriesSourceAccessRights
	var $QuickView_Api_Users_UserTimeSeriesSourceAccessRights = function() {
	};
	$QuickView_Api_Users_UserTimeSeriesSourceAccessRights.__typeName = 'QuickView.Api.Users.UserTimeSeriesSourceAccessRights';
	global.QuickView.Api.Users.UserTimeSeriesSourceAccessRights = $QuickView_Api_Users_UserTimeSeriesSourceAccessRights;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Api.Users.UserTimeSeriesSourcePermission
	var $QuickView_Api_Users_UserTimeSeriesSourcePermission = function() {
	};
	$QuickView_Api_Users_UserTimeSeriesSourcePermission.__typeName = 'QuickView.Api.Users.UserTimeSeriesSourcePermission';
	$QuickView_Api_Users_UserTimeSeriesSourcePermission.createInstance = function() {
		return $QuickView_Api_Users_UserTimeSeriesSourcePermission.$ctor();
	};
	$QuickView_Api_Users_UserTimeSeriesSourcePermission.$ctor = function() {
		var $this = {};
		$this.S = null;
		$this.R = 0;
		return $this;
	};
	$QuickView_Api_Users_UserTimeSeriesSourcePermission.$ctor1 = function(source, accessRights) {
		var $this = {};
		$this.S = null;
		$this.R = 0;
		$this.S = source;
		$this.R = accessRights;
		return $this;
	};
	$QuickView_Api_Users_UserTimeSeriesSourcePermission.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Api.Users.UserTimeSeriesSourcePermission = $QuickView_Api_Users_UserTimeSeriesSourcePermission;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Api.Users.UserUIAccessRights
	var $QuickView_Api_Users_UserUIAccessRights = function() {
	};
	$QuickView_Api_Users_UserUIAccessRights.__typeName = 'QuickView.Api.Users.UserUIAccessRights';
	global.QuickView.Api.Users.UserUIAccessRights = $QuickView_Api_Users_UserUIAccessRights;
	ss.initClass($QuickView_Api_Charts_AlgorithmParameter, $asm, {});
	ss.initEnum($QuickView_Api_Charts_AlgorithmParameterOptions, $asm, { none: 0, intraday: 1 });
	ss.initEnum($QuickView_Api_Charts_AlgorithmParameterType, $asm, { other: 0, timeSeriesID: 1, primaryTimeSeriesID: 2, timeSeriesIDList: 3, primaryTimeSeriesIDList: 4 });
	ss.initClass($QuickView_Api_Charts_ChartMetadata, $asm, {});
	ss.initClass($QuickView_Api_Charts_DerivedTimeSeries, $asm, {});
	ss.initEnum($QuickView_Api_Charts_DerivedTimeSeriesOptions, $asm, { none: 0 });
	ss.initClass($QuickView_Api_Charts_Indicator, $asm, {});
	ss.initEnum($QuickView_Api_Charts_IndicatorDisplayOptions, $asm, { none: 0, scaleCurrency: 1, doNotAbbreviateCurrency: 2 });
	ss.initClass($QuickView_Api_Charts_IndicatorRelationship, $asm, {});
	ss.initClass($QuickView_Api_Charts_MenuItem, $asm, {});
	ss.initClass($QuickView_Api_Charts_IndicatorRowMenuItem, $asm, {}, $QuickView_Api_Charts_MenuItem);
	ss.initEnum($QuickView_Api_Charts_IndicatorRowOptions, $asm, { none: 0, showByDefault: 1 });
	ss.initClass($QuickView_Api_Charts_IndicatorSettings, $asm, {});
	ss.initClass($QuickView_Api_Charts_Menu, $asm, {});
	ss.initEnum($QuickView_Api_Charts_MenuItemType, $asm, { none: 0, submenu: 1, indicatorRow: 2 });
	ss.initClass($QuickView_Api_Charts_Submenu, $asm, {}, $QuickView_Api_Charts_MenuItem);
	ss.initClass($QuickView_Api_Charts_TimeSeries, $asm, {});
	ss.initEnum($QuickView_Api_Charts_TimeSeriesContext, $asm, { none: 0, historical: 1, simulated: 2 });
	ss.initEnum($QuickView_Api_Charts_TimeSeriesCurrency, $asm, { none: 0, USD: 1, EUR: 2 });
	ss.initClass($QuickView_Api_Charts_TimeSeriesData, $asm, {});
	ss.initClass($QuickView_Api_Charts_TimeSeriesDataItem, $asm, {});
	ss.initClass($QuickView_Api_Charts_TimeSeriesDataList, $asm, {});
	ss.initClass($QuickView_Api_Charts_TimeSeriesIntervalData, $asm, {});
	ss.initEnum($QuickView_Api_Charts_TimeSeriesMetaResolution, $asm, { none: 0, intraday: 1, day: 2, event: 3 });
	ss.initEnum($QuickView_Api_Charts_TimeSeriesResolution, $asm, { none: 0, minute: 1, fiveMinutes: 2, tenMinutes: 3, hour: 4, day: 5, week: 6, month: 7, quarter: 8, year: 9, event: 10 });
	ss.initEnum($QuickView_Api_Charts_TimeSeriesSubtype, $asm, { none: 0, cumComp: 1, cumUnComp: 2, nonCumComp: 3, nonCumUnComp: 4, AUM: 5, NAV: 6, pnL: 7, share: 8, subRed: 9, revenue: 10, feeReinvestment: 11, subscriptions: 12, redemptions: 13, ordBuy: 14, ordSell: 15, posLng: 16, posSht: 17 });
	ss.initClass($QuickView_Api_Charts_TimeSeriesTimestamp, $asm, {});
	ss.initEnum($QuickView_Api_Charts_TimeSeriesType, $asm, { raw: 0, return$1: 1, equity: 2, price: 3 });
	ss.initEnum($QuickView_Api_Charts_TimeSeriesUnit, $asm, { none: 0, bps: 1, numberOfContracts: 2, baseCurrency: 3, percent: 4, qrUnit: 5 });
	ss.initClass($QuickView_Api_Charts_TimeSeriesUpdates, $asm, {});
	ss.initClass($QuickView_Api_Users_LoginResponse, $asm, {});
	ss.initClass($QuickView_Api_Users_User, $asm, {});
	ss.initClass($QuickView_Api_Users_UserPermissions, $asm, {});
	ss.initEnum($QuickView_Api_Users_UserTimeSeriesSourceAccessRights, $asm, { none: 0, read: 1, perfView: 2 });
	ss.initClass($QuickView_Api_Users_UserTimeSeriesSourcePermission, $asm, {});
	ss.initEnum($QuickView_Api_Users_UserUIAccessRights, $asm, { none: 0, export$1: 1, piwik: 2, shareSeries: 2 });
	ss.setMetadata($QuickView_Api_Charts_AlgorithmParameterOptions, { enumFlags: true });
	ss.setMetadata($QuickView_Api_Charts_DerivedTimeSeriesOptions, { enumFlags: true });
	ss.setMetadata($QuickView_Api_Users_UserTimeSeriesSourceAccessRights, { enumFlags: true });
	ss.setMetadata($QuickView_Api_Users_UserUIAccessRights, { enumFlags: true });
})();
