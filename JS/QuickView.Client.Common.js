(function() {
	'use strict';
	var $asm = {};
	global.QuickView = global.QuickView || {};
	global.QuickView.Client = global.QuickView.Client || {};
	global.QuickView.Client.Common = global.QuickView.Client.Common || {};
	global.QuickView.Client.Common.Logging = global.QuickView.Client.Common.Logging || {};
	global.QuickView.Client.Common.Settings = global.QuickView.Client.Common.Settings || {};
	ss.initAssembly($asm, 'QuickView.Client.Common');
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Common.AppEnvironment.BrowserInfo
	var $QuickView_$Client_Common_AppEnvironment$BrowserInfo = function() {
		this.$browserType = 0;
	};
	$QuickView_$Client_Common_AppEnvironment$BrowserInfo.__typeName = 'QuickView.$Client.Common.AppEnvironment$BrowserInfo';
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Common.AppContext
	var $QuickView_Client_Common_AppContext = function() {
	};
	$QuickView_Client_Common_AppContext.__typeName = 'QuickView.Client.Common.AppContext';
	$QuickView_Client_Common_AppContext.init = function(application, serviceLocator) {
		JS.ArgumentHelper.notNull(application, 'application');
		JS.ArgumentHelper.notNull(serviceLocator, 'serviceLocator');
		if (ss.isValue($QuickView_Client_Common_AppContext.application)) {
			throw new ss.InvalidOperationException('The application context is already initialized.');
		}
		$QuickView_Client_Common_AppContext.application = application;
		$QuickView_Client_Common_AppContext.serviceLocator = serviceLocator;
	};
	global.QuickView.Client.Common.AppContext = $QuickView_Client_Common_AppContext;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Common.AppEnvironment
	var $QuickView_Client_Common_AppEnvironment = function() {
	};
	$QuickView_Client_Common_AppEnvironment.__typeName = 'QuickView.Client.Common.AppEnvironment';
	$QuickView_Client_Common_AppEnvironment.init = function(environmentType, deviceType, version, config, queryParameters) {
		if ($QuickView_Client_Common_AppEnvironment.$_initialized) {
			throw new ss.InvalidOperationException('The environment is already initialized.');
		}
		$QuickView_Client_Common_AppEnvironment.environmentType = environmentType;
		$QuickView_Client_Common_AppEnvironment.deviceType = deviceType;
		$QuickView_Client_Common_AppEnvironment.version = version;
		$QuickView_Client_Common_AppEnvironment.config = config;
		$QuickView_Client_Common_AppEnvironment.debugOptions = $QuickView_Client_Common_DebugOptions.$ctor(queryParameters);
		$QuickView_Client_Common_AppEnvironment.$_initialized = true;
	};
	$QuickView_Client_Common_AppEnvironment.get_isApplicationCached = function() {
		return ss.isValue(window.applicationCache) && window.applicationCache.status !== 0;
	};
	$QuickView_Client_Common_AppEnvironment.get_isMobileDevice = function() {
		return $QuickView_Client_Common_AppEnvironment.deviceType === 1;
	};
	$QuickView_Client_Common_AppEnvironment.get_isDesktopDevice = function() {
		return $QuickView_Client_Common_AppEnvironment.deviceType === 2;
	};
	$QuickView_Client_Common_AppEnvironment.choose$1 = function(T) {
		return function(mobileValue, desktopValue) {
			switch ($QuickView_Client_Common_AppEnvironment.deviceType) {
				case 1: {
					return mobileValue;
				}
				case 2: {
					return desktopValue;
				}
				default: {
					throw new ss.InvalidOperationException(ss.formatString("Devices of type '{0}' are not supported.", $QuickView_Client_Common_AppEnvironment.deviceType));
				}
			}
		};
	};
	$QuickView_Client_Common_AppEnvironment.choose = function(T) {
		return function(mobileFunc, desktopFunc) {
			switch ($QuickView_Client_Common_AppEnvironment.deviceType) {
				case 1: {
					return (ss.staticEquals(mobileFunc, null) ? ss.getDefaultValue(T) : mobileFunc());
				}
				case 2: {
					return (ss.staticEquals(desktopFunc, null) ? ss.getDefaultValue(T) : desktopFunc());
				}
				default: {
					throw new ss.InvalidOperationException(ss.formatString("Devices of type '{0}' are not supported.", $QuickView_Client_Common_AppEnvironment.deviceType));
				}
			}
		};
	};
	$QuickView_Client_Common_AppEnvironment.get_production = function() {
		return $QuickView_Client_Common_AppEnvironment.environmentType === 'Production';
	};
	$QuickView_Client_Common_AppEnvironment.get_beta = function() {
		return $QuickView_Client_Common_AppEnvironment.environmentType === 'Beta';
	};
	$QuickView_Client_Common_AppEnvironment.get_development = function() {
		return $QuickView_Client_Common_AppEnvironment.environmentType === 'Development';
	};
	$QuickView_Client_Common_AppEnvironment.get_browserType = function() {
		$QuickView_Client_Common_AppEnvironment.$loadBrowserInfo();
		return $QuickView_Client_Common_AppEnvironment.$_info.$browserType;
	};
	$QuickView_Client_Common_AppEnvironment.$loadBrowserInfo = function() {
		if (ss.isValue($QuickView_Client_Common_AppEnvironment.$_info)) {
			return;
		}
		var ua = window.navigator.userAgent.toLowerCase();
		var isChromeOniOS = ua.indexOf('crios') !== -1;
		var isChrome = ua.indexOf('chrome') !== -1;
		var isSafari = ua.indexOf('Safari') !== -1;
		var browserType;
		if (isChrome || isChromeOniOS) {
			browserType = 1;
		}
		else if (isSafari) {
			browserType = 2;
		}
		else {
			browserType = 0;
		}
		var $t1 = new $QuickView_$Client_Common_AppEnvironment$BrowserInfo();
		$t1.$browserType = browserType;
		$QuickView_Client_Common_AppEnvironment.$_info = $t1;
	};
	$QuickView_Client_Common_AppEnvironment.get_OS = function() {
		if (ss.isNullOrUndefined($QuickView_Client_Common_AppEnvironment.$_os)) {
			var platform = window.navigator.platform;
			var os;
			if (platform === 'Win32') {
				os = 2;
			}
			else if (platform === 'iPhone' || platform === 'iPad' || platform === 'iPod') {
				os = 1;
			}
			else {
				os = 0;
			}
			$QuickView_Client_Common_AppEnvironment.$_os = os;
		}
		return ss.unbox($QuickView_Client_Common_AppEnvironment.$_os);
	};
	global.QuickView.Client.Common.AppEnvironment = $QuickView_Client_Common_AppEnvironment;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Common.AppEnvironmentType
	var $QuickView_Client_Common_AppEnvironmentType = function() {
	};
	$QuickView_Client_Common_AppEnvironmentType.__typeName = 'QuickView.Client.Common.AppEnvironmentType';
	global.QuickView.Client.Common.AppEnvironmentType = $QuickView_Client_Common_AppEnvironmentType;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Common.AppServices
	var $QuickView_Client_Common_AppServices = function() {
	};
	$QuickView_Client_Common_AppServices.__typeName = 'QuickView.Client.Common.AppServices';
	$QuickView_Client_Common_AppServices.get_secondTimeManager = function() {
		if (ss.isNullOrUndefined($QuickView_Client_Common_AppServices.$_secondTimeManager)) {
			$QuickView_Client_Common_AppServices.$_secondTimeManager = new JS.Threading.TimeManager(1000);
		}
		return $QuickView_Client_Common_AppServices.$_secondTimeManager;
	};
	$QuickView_Client_Common_AppServices.get_minuteTimeManager = function() {
		if (ss.isNullOrUndefined($QuickView_Client_Common_AppServices.$_minuteTimeManager)) {
			$QuickView_Client_Common_AppServices.$_minuteTimeManager = new JS.Threading.TimeManager(60000);
		}
		return $QuickView_Client_Common_AppServices.$_minuteTimeManager;
	};
	global.QuickView.Client.Common.AppServices = $QuickView_Client_Common_AppServices;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Common.BrowserType
	var $QuickView_Client_Common_BrowserType = function() {
	};
	$QuickView_Client_Common_BrowserType.__typeName = 'QuickView.Client.Common.BrowserType';
	global.QuickView.Client.Common.BrowserType = $QuickView_Client_Common_BrowserType;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Common.DebugOptions
	var $QuickView_Client_Common_DebugOptions = function() {
	};
	$QuickView_Client_Common_DebugOptions.__typeName = 'QuickView.Client.Common.DebugOptions';
	$QuickView_Client_Common_DebugOptions.$ctor = function(queryParameters) {
		var $this = {};
		$this.disableDataDownload = false;
		JS.ArgumentHelper.notNull(queryParameters, 'queryParameters');
		$this.disableDataDownload = queryParameters['debug-updates'] === '0';
		return $this;
	};
	$QuickView_Client_Common_DebugOptions.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Common.DebugOptions = $QuickView_Client_Common_DebugOptions;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Common.DeviceType
	var $QuickView_Client_Common_DeviceType = function() {
	};
	$QuickView_Client_Common_DeviceType.__typeName = 'QuickView.Client.Common.DeviceType';
	global.QuickView.Client.Common.DeviceType = $QuickView_Client_Common_DeviceType;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Common.IApplication
	var $QuickView_Client_Common_IApplication = function() {
	};
	$QuickView_Client_Common_IApplication.__typeName = 'QuickView.Client.Common.IApplication';
	global.QuickView.Client.Common.IApplication = $QuickView_Client_Common_IApplication;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Common.IApplicationConfiguration
	var $QuickView_Client_Common_IApplicationConfiguration = function() {
	};
	$QuickView_Client_Common_IApplicationConfiguration.__typeName = 'QuickView.Client.Common.IApplicationConfiguration';
	global.QuickView.Client.Common.IApplicationConfiguration = $QuickView_Client_Common_IApplicationConfiguration;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Common.IServiceLocator
	var $QuickView_Client_Common_IServiceLocator = function() {
	};
	$QuickView_Client_Common_IServiceLocator.__typeName = 'QuickView.Client.Common.IServiceLocator';
	global.QuickView.Client.Common.IServiceLocator = $QuickView_Client_Common_IServiceLocator;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Common.OperatingSystem
	var $QuickView_Client_Common_OperatingSystem = function() {
	};
	$QuickView_Client_Common_OperatingSystem.__typeName = 'QuickView.Client.Common.OperatingSystem';
	global.QuickView.Client.Common.OperatingSystem = $QuickView_Client_Common_OperatingSystem;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Common.Resources
	var $QuickView_Client_Common_Resources = function() {
	};
	$QuickView_Client_Common_Resources.__typeName = 'QuickView.Client.Common.Resources';
	global.QuickView.Client.Common.Resources = $QuickView_Client_Common_Resources;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Common.Logging.LoggerExtensions
	var $QuickView_Client_Common_Logging_LoggerExtensions = function() {
	};
	$QuickView_Client_Common_Logging_LoggerExtensions.__typeName = 'QuickView.Client.Common.Logging.LoggerExtensions';
	$QuickView_Client_Common_Logging_LoggerExtensions.scope = function(log) {
		return $QuickView_Client_Common_Logging_LoggerScope.$ctor(log, ++$QuickView_Client_Common_Logging_LoggerExtensions.$_scopeID);
	};
	global.QuickView.Client.Common.Logging.LoggerExtensions = $QuickView_Client_Common_Logging_LoggerExtensions;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Common.Logging.LoggerScope
	var $QuickView_Client_Common_Logging_LoggerScope = function() {
	};
	$QuickView_Client_Common_Logging_LoggerScope.__typeName = 'QuickView.Client.Common.Logging.LoggerScope';
	$QuickView_Client_Common_Logging_LoggerScope.trace$1 = function($this, format, values) {
		if ($this._log.level <= JL.getTraceLevel()) {
			$this._log.trace(function() {
				return ss.formatString.apply(null, ['[' + $this._scopeID.toString() + '] ' + format].concat(values));
			});
		}
	};
	$QuickView_Client_Common_Logging_LoggerScope.trace = function($this, message) {
		if ($this._log.level <= JL.getTraceLevel()) {
			$this._log.trace('[' + $this._scopeID.toString() + '] ' + message);
		}
	};
	$QuickView_Client_Common_Logging_LoggerScope.debug$1 = function($this, format, values) {
		if ($this._log.level <= JL.getDebugLevel()) {
			$this._log.debug(function() {
				return ss.formatString.apply(null, ['[' + $this._scopeID.toString() + '] ' + format].concat(values));
			});
		}
	};
	$QuickView_Client_Common_Logging_LoggerScope.debug = function($this, message) {
		if ($this._log.level <= JL.getDebugLevel()) {
			$this._log.debug('[' + $this._scopeID.toString() + '] ' + message);
		}
	};
	$QuickView_Client_Common_Logging_LoggerScope.info$1 = function($this, format, values) {
		if ($this._log.level <= JL.getInfoLevel()) {
			$this._log.info(function() {
				return ss.formatString.apply(null, ['[' + $this._scopeID.toString() + '] ' + format].concat(values));
			});
		}
	};
	$QuickView_Client_Common_Logging_LoggerScope.info = function($this, message) {
		if ($this._log.level <= JL.getInfoLevel()) {
			$this._log.info('[' + $this._scopeID.toString() + '] ' + message);
		}
	};
	$QuickView_Client_Common_Logging_LoggerScope.warn$1 = function($this, format, values) {
		if ($this._log.level <= JL.getWarnLevel()) {
			$this._log.warn(function() {
				return ss.formatString.apply(null, ['[' + $this._scopeID.toString() + '] ' + format].concat(values));
			});
		}
	};
	$QuickView_Client_Common_Logging_LoggerScope.warn = function($this, message) {
		if ($this._log.level <= JL.getWarnLevel()) {
			$this._log.warn('[' + $this._scopeID.toString() + '] ' + message);
		}
	};
	$QuickView_Client_Common_Logging_LoggerScope.error$1 = function($this, format, values) {
		if ($this._log.level <= JL.getErrorLevel()) {
			$this._log.error(function() {
				return ss.formatString.apply(null, ['[' + $this._scopeID.toString() + '] ' + format].concat(values));
			});
		}
	};
	$QuickView_Client_Common_Logging_LoggerScope.error = function($this, message) {
		if ($this._log.level <= JL.getErrorLevel()) {
			$this._log.error('[' + $this._scopeID.toString() + '] ' + message);
		}
	};
	$QuickView_Client_Common_Logging_LoggerScope.fatal$1 = function($this, format, values) {
		if ($this._log.level <= JL.getFatalLevel()) {
			$this._log.fatal(function() {
				return ss.formatString.apply(null, ['[' + $this._scopeID.toString() + '] ' + format].concat(values));
			});
		}
	};
	$QuickView_Client_Common_Logging_LoggerScope.fatal = function($this, message) {
		if ($this._log.level <= JL.getFatalLevel()) {
			$this._log.fatal('[' + $this._scopeID.toString() + '] ' + message);
		}
	};
	$QuickView_Client_Common_Logging_LoggerScope.$ctor = function(log, scopeID) {
		var $this = {};
		$this._log = null;
		$this._scopeID = 0;
		$this._log = log;
		$this._scopeID = scopeID;
		return $this;
	};
	$QuickView_Client_Common_Logging_LoggerScope.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Common.Logging.LoggerScope = $QuickView_Client_Common_Logging_LoggerScope;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Common.Settings.LocalStorageSettingsStorage
	var $QuickView_Client_Common_Settings_LocalStorageSettingsStorage = function() {
		$QuickView_Client_Common_Settings_SettingsStorage.call(this);
	};
	$QuickView_Client_Common_Settings_LocalStorageSettingsStorage.__typeName = 'QuickView.Client.Common.Settings.LocalStorageSettingsStorage';
	global.QuickView.Client.Common.Settings.LocalStorageSettingsStorage = $QuickView_Client_Common_Settings_LocalStorageSettingsStorage;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Common.Settings.SettingsStorage
	var $QuickView_Client_Common_Settings_SettingsStorage = function() {
	};
	$QuickView_Client_Common_Settings_SettingsStorage.__typeName = 'QuickView.Client.Common.Settings.SettingsStorage';
	global.QuickView.Client.Common.Settings.SettingsStorage = $QuickView_Client_Common_Settings_SettingsStorage;
	ss.initClass($QuickView_$Client_Common_AppEnvironment$BrowserInfo, $asm, {});
	ss.initClass($QuickView_Client_Common_AppContext, $asm, {});
	ss.initClass($QuickView_Client_Common_AppEnvironment, $asm, {});
	ss.initEnum($QuickView_Client_Common_AppEnvironmentType, $asm, { None: 'None', Development: 'Development', Beta: 'Beta', Production: 'Production', Unknown: 'Unknown' }, true);
	ss.initClass($QuickView_Client_Common_AppServices, $asm, {});
	ss.initEnum($QuickView_Client_Common_BrowserType, $asm, { unknown: 0, chrome: 1, safari: 2 });
	ss.initClass($QuickView_Client_Common_DebugOptions, $asm, {});
	ss.initEnum($QuickView_Client_Common_DeviceType, $asm, { unknown: 0, mobile: 1, desktop: 2 });
	ss.initInterface($QuickView_Client_Common_IApplication, $asm, { get_connectivityStatus: null, add_connectivityStatusChanged: null, remove_connectivityStatusChanged: null, get_downloadProgress: null, add_downloadProgressChanged: null, remove_downloadProgressChanged: null, add_downloadComplete: null, remove_downloadComplete: null, add_beforeShutdown: null, remove_beforeShutdown: null, shutdown: null });
	ss.initInterface($QuickView_Client_Common_IApplicationConfiguration, $asm, { get_webServiceBaseUrl: null, get_serviceTimeout: null, get_genericServiceErrorRetryInterval: null, get_specificServiceErrorRetryInterval: null, get_chartDataPoolInterval: null, get_chartDataCacheTimeout: null, get_processedChartDataCacheTimeout: null, get_newVersionCheckInterval: null });
	ss.initInterface($QuickView_Client_Common_IServiceLocator, $asm, { getService: null });
	ss.initEnum($QuickView_Client_Common_OperatingSystem, $asm, { unknown: 0, iOS: 1, windows: 2 });
	ss.initClass($QuickView_Client_Common_Resources, $asm, {});
	ss.initClass($QuickView_Client_Common_Logging_LoggerExtensions, $asm, {});
	ss.initClass($QuickView_Client_Common_Logging_LoggerScope, $asm, {});
	ss.initClass($QuickView_Client_Common_Settings_SettingsStorage, $asm, {
		get: function(T) {
			return function(key) {
				JS.ArgumentHelper.notNullOrEmpty(key, 'key');
				return this.get$1(T).call(this, key, ss.getDefaultValue(T));
			};
		},
		get$1: function(T) {
			return function(key, defaultValue) {
				JS.ArgumentHelper.notNullOrEmpty(key, 'key');
				var result = {};
				if (false === this.tryGetCore(T).call(this, key, result)) {
					result.$ = defaultValue;
				}
				return result.$;
			};
		},
		tryGet: function(T) {
			return function(key, value) {
				JS.ArgumentHelper.notNullOrEmpty(key, 'key');
				return this.tryGetCore(T).call(this, key, value);
			};
		},
		tryGetCore: null,
		set: function(T) {
			return function(key, value) {
				JS.ArgumentHelper.notNullOrEmpty(key, 'key');
				this.setCore(T).call(this, key, value);
			};
		},
		setCore: null,
		remove: function(key) {
			this.removeCore(key);
		},
		removeCore: null
	});
	ss.initClass($QuickView_Client_Common_Settings_LocalStorageSettingsStorage, $asm, {
		tryGetCore: function(T) {
			return function(key, value) {
				var text = window.localStorage.getItem(key);
				if (ss.isNullOrUndefined(text)) {
					value.$ = ss.getDefaultValue(T);
					return false;
				}
				else {
					value.$ = JSON.parse(text);
					return true;
				}
			};
		},
		setCore: function(T) {
			return function(key, value) {
				if (ss.isNullOrUndefined(value)) {
					this.removeCore(key);
				}
				else {
					var text = JSON.stringify(value);
					window.localStorage.setItem(key, text);
				}
			};
		},
		removeCore: function(key) {
			window.localStorage.removeItem(key);
		}
	}, $QuickView_Client_Common_Settings_SettingsStorage);
	(function() {
		$QuickView_Client_Common_AppContext.application = null;
		$QuickView_Client_Common_AppContext.serviceLocator = null;
		$QuickView_Client_Common_AppContext.user = null;
		$QuickView_Client_Common_AppContext.metadata = null;
	})();
	(function() {
		$QuickView_Client_Common_AppEnvironment.$_initialized = false;
		$QuickView_Client_Common_AppEnvironment.version = null;
		$QuickView_Client_Common_AppEnvironment.latestVersion = null;
		$QuickView_Client_Common_AppEnvironment.config = null;
		$QuickView_Client_Common_AppEnvironment.debugOptions = null;
		$QuickView_Client_Common_AppEnvironment.deviceType = 0;
		$QuickView_Client_Common_AppEnvironment.environmentType = null;
		$QuickView_Client_Common_AppEnvironment.$_info = null;
		$QuickView_Client_Common_AppEnvironment.$_os = null;
	})();
	(function() {
		$QuickView_Client_Common_AppServices.$_secondTimeManager = null;
		$QuickView_Client_Common_AppServices.$_minuteTimeManager = null;
	})();
	(function() {
		$QuickView_Client_Common_Logging_LoggerExtensions.$_scopeID = 0;
	})();
})();
