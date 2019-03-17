(function() {
	'use strict';
	var $asm = {};
	global.QuickView = global.QuickView || {};
	global.QuickView.Client = global.QuickView.Client || {};
	global.QuickView.Client.Services = global.QuickView.Client.Services || {};
	global.QuickView.Client.Services.Applications = global.QuickView.Client.Services.Applications || {};
	global.QuickView.Client.Services.Caching = global.QuickView.Client.Services.Caching || {};
	global.QuickView.Client.Services.Charts = global.QuickView.Client.Services.Charts || {};
	global.QuickView.Client.Services.Data = global.QuickView.Client.Services.Data || {};
	global.QuickView.Client.Services.Users = global.QuickView.Client.Services.Users || {};
	ss.initAssembly($asm, 'QuickView.Client.Services');
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Charts.MemoryDataCache.TimeSeriesCacheData
	var $QuickView_$Client_Services_Charts_$MemoryDataCache$TimeSeriesCacheData = function() {
	};
	$QuickView_$Client_Services_Charts_$MemoryDataCache$TimeSeriesCacheData.__typeName = 'QuickView.$Client.Services.Charts.$MemoryDataCache$TimeSeriesCacheData';
	$QuickView_$Client_Services_Charts_$MemoryDataCache$TimeSeriesCacheData.createInstance = function() {
		return $QuickView_$Client_Services_Charts_$MemoryDataCache$TimeSeriesCacheData.$ctor();
	};
	$QuickView_$Client_Services_Charts_$MemoryDataCache$TimeSeriesCacheData.$ctor = function() {
		var $this = {};
		$this.N = null;
		$this.P = null;
		return $this;
	};
	$QuickView_$Client_Services_Charts_$MemoryDataCache$TimeSeriesCacheData.isInstanceOfType = function() {
		return true;
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Charts.IndicatorDataProvider.LoadedData
	var $QuickView_$Client_Services_Charts_IndicatorDataProvider$LoadedData = function() {
	};
	$QuickView_$Client_Services_Charts_IndicatorDataProvider$LoadedData.__typeName = 'QuickView.$Client.Services.Charts.IndicatorDataProvider$LoadedData';
	$QuickView_$Client_Services_Charts_IndicatorDataProvider$LoadedData.createInstance = function() {
		return $QuickView_$Client_Services_Charts_IndicatorDataProvider$LoadedData.$ctor();
	};
	$QuickView_$Client_Services_Charts_IndicatorDataProvider$LoadedData.$ctor = function() {
		var $this = {};
		$this.timeSeries = null;
		$this.derivedTimeSeries = null;
		$this.timeSeries = {};
		$this.derivedTimeSeries = {};
		return $this;
	};
	$QuickView_$Client_Services_Charts_IndicatorDataProvider$LoadedData.isInstanceOfType = function() {
		return true;
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Charts.IndicatorDataProvider.Subscription
	var $QuickView_$Client_Services_Charts_IndicatorDataProvider$Subscription$1 = function(TEventArgs) {
		var $type = function(handlerList, handler) {
			this.$_handlerList = null;
			this.$_handler = null;
			this.$_handlerList = handlerList;
			this.$_handler = handler;
		};
		ss.registerGenericClassInstance($type, $QuickView_$Client_Services_Charts_IndicatorDataProvider$Subscription$1, [TEventArgs], {
			dispose: function() {
				if (ss.isValue(this.$_handlerList)) {
					this.$_handlerList.handlers = ss.delegateRemove(this.$_handlerList.handlers, this.$_handler);
					this.$_handlerList = null;
				}
			}
		}, function() {
			return null;
		}, function() {
			return [ss.IDisposable];
		});
		return $type;
	};
	$QuickView_$Client_Services_Charts_IndicatorDataProvider$Subscription$1.__typeName = 'QuickView.$Client.Services.Charts.IndicatorDataProvider$Subscription$1';
	ss.initGenericClass($QuickView_$Client_Services_Charts_IndicatorDataProvider$Subscription$1, $asm, 1);
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Charts.IndicatorDataProvider.SubscriptionHandlers
	var $QuickView_$Client_Services_Charts_IndicatorDataProvider$SubscriptionHandlers$1 = function(TEventArgs) {
		var $type = function() {
		};
		$type.$execute = function($this) {
			if (ss.isNullOrUndefined($this._executor)) {
				// Delay the event with up to one second; this is suitable when the data changes
				// multiple times in quick succession
				$this._executor = new JS.Threading.PostponeExecutor.$ctor2(ss.mkdel($this, function() {
					$type.$fireEvent(this);
				}), 1000, true);
			}
			$this._executor.execute();
		};
		$type.$fireEvent = function($this) {
			if (!ss.staticEquals($this.handlers, null)) {
				$this.handlers($this._sender, $this._args);
			}
		};
		$type.$ctor = function(provider, args) {
			var $this = {};
			$this.handlers = null;
			$this._executor = null;
			$this._sender = null;
			$this._args = null;
			$this._sender = provider;
			$this._args = args;
			return $this;
		};
		$type.isInstanceOfType = function() {
			return true;
		};
		ss.registerGenericClassInstance($type, $QuickView_$Client_Services_Charts_IndicatorDataProvider$SubscriptionHandlers$1, [TEventArgs], {}, function() {
			return null;
		}, function() {
			return [];
		});
		return $type;
	};
	$QuickView_$Client_Services_Charts_IndicatorDataProvider$SubscriptionHandlers$1.__typeName = 'QuickView.$Client.Services.Charts.IndicatorDataProvider$SubscriptionHandlers$1';
	ss.initGenericClass($QuickView_$Client_Services_Charts_IndicatorDataProvider$SubscriptionHandlers$1, $asm, 1);
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Charts.IndicatorDataWorker.TimeSeriesBatchItem
	var $QuickView_$Client_Services_Charts_IndicatorDataWorker$TimeSeriesBatchItem = function() {
	};
	$QuickView_$Client_Services_Charts_IndicatorDataWorker$TimeSeriesBatchItem.__typeName = 'QuickView.$Client.Services.Charts.IndicatorDataWorker$TimeSeriesBatchItem';
	$QuickView_$Client_Services_Charts_IndicatorDataWorker$TimeSeriesBatchItem.$ctor = function(timeSeries, localTimestamp, update, index) {
		var $this = {};
		$this.timeSeries = null;
		$this.localTimestamp = null;
		$this.update = null;
		$this.index = 0;
		$this.timeSeries = timeSeries;
		$this.localTimestamp = localTimestamp;
		$this.update = update;
		$this.index = index;
		return $this;
	};
	$QuickView_$Client_Services_Charts_IndicatorDataWorker$TimeSeriesBatchItem.isInstanceOfType = function() {
		return true;
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.ModelExtensions
	var $QuickView_Client_Services_$ModelExtensions = function() {
	};
	$QuickView_Client_Services_$ModelExtensions.__typeName = 'QuickView.Client.Services.$ModelExtensions';
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Worker
	var $QuickView_Client_Services_Worker = function() {
		this.status = 0;
		this.$1$CompleteField = null;
		this.$_disposing = false;
	};
	$QuickView_Client_Services_Worker.__typeName = 'QuickView.Client.Services.Worker';
	global.QuickView.Client.Services.Worker = $QuickView_Client_Services_Worker;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.WorkerStatus
	var $QuickView_Client_Services_WorkerStatus = function() {
	};
	$QuickView_Client_Services_WorkerStatus.__typeName = 'QuickView.Client.Services.WorkerStatus';
	global.QuickView.Client.Services.WorkerStatus = $QuickView_Client_Services_WorkerStatus;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Applications.AppCacheVersionChecker
	var $QuickView_Client_Services_Applications_$AppCacheVersionChecker = function() {
		this.$_url = null;
		this.$_versionType = 0;
		this.$_request = null;
		$QuickView_Client_Services_Applications_$VersionChecker.call(this);
	};
	$QuickView_Client_Services_Applications_$AppCacheVersionChecker.__typeName = 'QuickView.Client.Services.Applications.$AppCacheVersionChecker';
	$QuickView_Client_Services_Applications_$AppCacheVersionChecker.$ctor1 = function(url, versionType) {
		this.$_url = null;
		this.$_versionType = 0;
		this.$_request = null;
		$QuickView_Client_Services_Applications_$VersionChecker.call(this);
		this.$_url = url;
		this.$_versionType = versionType;
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Applications.ApplicationDownloadProgressEventArgs
	var $QuickView_Client_Services_Applications_$ApplicationDownloadProgressEventArgs = function(progress) {
		this.$progress = 0;
		ss.EventArgs.call(this);
		this.$progress = progress;
	};
	$QuickView_Client_Services_Applications_$ApplicationDownloadProgressEventArgs.__typeName = 'QuickView.Client.Services.Applications.$ApplicationDownloadProgressEventArgs';
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Applications.UrlVersionChecker
	var $QuickView_Client_Services_Applications_$UrlVersionChecker = function(oldVersion, url, versionType) {
		this.$_oldVersion = null;
		this.$_url = null;
		this.$_versionType = 0;
		this.$_request = null;
		this.$_ignoreVersionList = null;
		$QuickView_Client_Services_Applications_$VersionChecker.call(this);
		JS.ArgumentHelper.notNull(oldVersion, 'oldVersion');
		JS.ArgumentHelper.notNullOrEmpty(url, 'url');
		this.$_oldVersion = oldVersion;
		this.$_url = url;
		this.$_versionType = versionType;
	};
	$QuickView_Client_Services_Applications_$UrlVersionChecker.__typeName = 'QuickView.Client.Services.Applications.$UrlVersionChecker';
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Applications.VersionChecker
	var $QuickView_Client_Services_Applications_$VersionChecker = function() {
		this.$1$VersionChangedField = null;
		this.$_connectionStatus = 0;
		this.$1$ConnectivityStatusChangedField = null;
		this.$1$DownloadProgressField = null;
		this.$1$DownloadCompleteField = null;
		this.$_intervalID = null;
		// Consider the app connected initially
		this.set_$connectivityStatus(0);
	};
	$QuickView_Client_Services_Applications_$VersionChecker.__typeName = 'QuickView.Client.Services.Applications.$VersionChecker';
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Applications.VersionData
	var $QuickView_Client_Services_Applications_$VersionData = function() {
	};
	$QuickView_Client_Services_Applications_$VersionData.__typeName = 'QuickView.Client.Services.Applications.$VersionData';
	$QuickView_Client_Services_Applications_$VersionData.createInstance = function() {
		return $QuickView_Client_Services_Applications_$VersionData.$ctor();
	};
	$QuickView_Client_Services_Applications_$VersionData.$ctor = function() {
		var $this = {};
		$this.number = null;
		$this.lastCompatibleVersionNumber = null;
		return $this;
	};
	$QuickView_Client_Services_Applications_$VersionData.$ctor1 = function(number) {
		var $this = {};
		$this.number = null;
		$this.lastCompatibleVersionNumber = null;
		$this.number = number;
		return $this;
	};
	$QuickView_Client_Services_Applications_$VersionData.$ctor2 = function(number, lastCompatibleVersionNumber) {
		var $this = {};
		$this.number = null;
		$this.lastCompatibleVersionNumber = null;
		$this.number = number;
		$this.lastCompatibleVersionNumber = lastCompatibleVersionNumber;
		return $this;
	};
	$QuickView_Client_Services_Applications_$VersionData.isInstanceOfType = function() {
		return true;
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Applications.VersionType
	var $QuickView_Client_Services_Applications_$VersionType = function() {
	};
	$QuickView_Client_Services_Applications_$VersionType.__typeName = 'QuickView.Client.Services.Applications.$VersionType';
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Applications.VersionUtils
	var $QuickView_Client_Services_Applications_$VersionUtils = function() {
	};
	$QuickView_Client_Services_Applications_$VersionUtils.__typeName = 'QuickView.Client.Services.Applications.$VersionUtils';
	$QuickView_Client_Services_Applications_$VersionUtils.$getVersionFromServer = function(url, versionType, callback) {
		JS.ArgumentHelper.notNull(url, 'url');
		JS.ArgumentHelper.notNull(callback, 'callback');
		// Add a random argument to force a refresh of the file
		if (url.indexOf(String.fromCharCode(63)) >= 0) {
			// The URL contains at least one argument
			url += '&';
		}
		else {
			url += '?';
		}
		url += '_timestamp=' + (new Date()).valueOf().toString();
		var ajaxOptions = { type: 'GET', url: url, contentType: ((versionType === 0) ? 'text/plain' : 'application/json'), dataType: ((versionType === 0) ? 'text' : 'json'), async: true };
		var result = null;
		ajaxOptions.success = function(data, textStatus, request) {
			if (ss.isNullOrUndefined(data)) {
				return;
			}
			var versionData;
			if (versionType === 0) {
				// Remove any whitespace
				var number = ss.cast(data, String).trim();
				versionData = $QuickView_Client_Services_Applications_$VersionData.$ctor1(number);
			}
			else {
				versionData = data;
			}
			if (ss.isNullOrUndefined(versionData) || ss.isNullOrEmptyString(versionData.number)) {
				return;
			}
			var releaseTimeText = request.getResponseHeader('Last-Modified');
			var releaseTime;
			if (ss.isNullOrEmptyString(releaseTimeText)) {
				releaseTime = new Date();
			}
			else {
				releaseTime = new Date(releaseTimeText);
			}
			var version = QuickView.Client.Models.Applications.VersionInfo.$ctor1(versionData.number, releaseTime, versionData.lastCompatibleVersionNumber);
			result = version;
		};
		ajaxOptions.complete = function(request1, textStatus1) {
			callback(result);
		};
		return $.ajax(ajaxOptions);
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Applications.ApplicationUpdateWorker
	var $QuickView_Client_Services_Applications_ApplicationUpdateWorker = function() {
		this.$2$NewVersionField = null;
		this.$_versionChecker = null;
		$QuickView_Client_Services_Worker.call(this);
	};
	$QuickView_Client_Services_Applications_ApplicationUpdateWorker.__typeName = 'QuickView.Client.Services.Applications.ApplicationUpdateWorker';
	global.QuickView.Client.Services.Applications.ApplicationUpdateWorker = $QuickView_Client_Services_Applications_ApplicationUpdateWorker;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Applications.IApplicationServiceAccess
	var $QuickView_Client_Services_Applications_IApplicationServiceAccess = function() {
	};
	$QuickView_Client_Services_Applications_IApplicationServiceAccess.__typeName = 'QuickView.Client.Services.Applications.IApplicationServiceAccess';
	global.QuickView.Client.Services.Applications.IApplicationServiceAccess = $QuickView_Client_Services_Applications_IApplicationServiceAccess;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Applications.VersionEventArgs
	var $QuickView_Client_Services_Applications_VersionEventArgs = function(version) {
		this.version = null;
		ss.EventArgs.call(this);
		this.version = version;
	};
	$QuickView_Client_Services_Applications_VersionEventArgs.__typeName = 'QuickView.Client.Services.Applications.VersionEventArgs';
	global.QuickView.Client.Services.Applications.VersionEventArgs = $QuickView_Client_Services_Applications_VersionEventArgs;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Caching.CacheItem
	var $QuickView_Client_Services_Caching_CacheItem = function() {
	};
	$QuickView_Client_Services_Caching_CacheItem.__typeName = 'QuickView.Client.Services.Caching.CacheItem';
	$QuickView_Client_Services_Caching_CacheItem.$onAccess = function($this) {
		$this._lastAccessTime = new Date();
	};
	$QuickView_Client_Services_Caching_CacheItem.$hasExpired = function($this) {
		if ($this.timeout <= 0) {
			// The item does not expire
			return false;
		}
		else {
			return new Date() - $this._lastAccessTime >= $this.timeout;
		}
	};
	$QuickView_Client_Services_Caching_CacheItem.$ctor = function(value, timeout) {
		var $this = {};
		$this.value = null;
		$this.timeout = 0;
		$this._lastAccessTime = new Date(0);
		JS.ArgumentHelper.positiveOrDefault(timeout, 'timeout');
		$this.value = value;
		$this.timeout = timeout;
		$this._lastAccessTime = new Date();
		return $this;
	};
	$QuickView_Client_Services_Caching_CacheItem.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Services.Caching.CacheItem = $QuickView_Client_Services_Caching_CacheItem;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Caching.ObjectCache
	var $QuickView_Client_Services_Caching_ObjectCache = function() {
		this.$_dict = null;
		this.$_purgeTaskID = null;
		this.$_dict = new (ss.makeGenericType(ss.Dictionary$2, [String, $QuickView_Client_Services_Caching_CacheItem]))();
	};
	$QuickView_Client_Services_Caching_ObjectCache.__typeName = 'QuickView.Client.Services.Caching.ObjectCache';
	global.QuickView.Client.Services.Caching.ObjectCache = $QuickView_Client_Services_Caching_ObjectCache;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Charts.IndicatorDataUtils
	var $QuickView_Client_Services_Charts_$IndicatorDataUtils = function() {
	};
	$QuickView_Client_Services_Charts_$IndicatorDataUtils.__typeName = 'QuickView.Client.Services.Charts.$IndicatorDataUtils';
	$QuickView_Client_Services_Charts_$IndicatorDataUtils.$createApiDataPoints = function(list, metaResolution, baseTime) {
		JS.ArgumentHelper.notNull(list, 'list');
		var timeConversionMethod = $QuickView_Client_Services_Data_$TimeSeriesDataUtils.$getTimeConversionMethod(metaResolution);
		var result = new Array(ss.Int32.div(list.length, 2));
		var p = 0;
		for (var k = 0; k < list.length;) {
			result[p++] = QuickView.Client.Models.Charts.TimeSeriesDataPoint.$ctor(timeConversionMethod(baseTime, ss.Int32.trunc(list[k++])), list[k++]);
		}
		return result;
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Charts.LocalUtils
	var $QuickView_Client_Services_Charts_$LocalUtils = function() {
	};
	$QuickView_Client_Services_Charts_$LocalUtils.__typeName = 'QuickView.Client.Services.Charts.$LocalUtils';
	$QuickView_Client_Services_Charts_$LocalUtils.$isMatch = function(dataType, fullType) {
		if (JS.EnumExtensions.isSet(dataType, 2) && QuickView.Client.Models.Charts.TimeSeriesFullType.isPosition(fullType)) {
			return true;
		}
		else if (JS.EnumExtensions.isSet(dataType, 4) && QuickView.Client.Models.Charts.TimeSeriesFullType.isOrder(fullType)) {
			return true;
		}
		else if (JS.EnumExtensions.isSet(dataType, 8) && QuickView.Client.Models.Charts.TimeSeriesFullType.isSlippage(fullType)) {
			return true;
		}
		else if (JS.EnumExtensions.isSet(dataType, 1)) {
			// All other series should be considered part of the primary ones. This includes series
			// that does not have a type.
			return true;
		}
		else {
			return false;
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Charts.MemoryDataCache
	var $QuickView_Client_Services_Charts_$MemoryDataCache = function() {
		this.$_timeSeriesDataDict = null;
		this.$_timeSeriesDataDict = {};
	};
	$QuickView_Client_Services_Charts_$MemoryDataCache.__typeName = 'QuickView.Client.Services.Charts.$MemoryDataCache';
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Charts.RefCount
	var $QuickView_Client_Services_Charts_$RefCount = function() {
	};
	$QuickView_Client_Services_Charts_$RefCount.__typeName = 'QuickView.Client.Services.Charts.$RefCount';
	$QuickView_Client_Services_Charts_$RefCount.createInstance = function() {
		return $QuickView_Client_Services_Charts_$RefCount.$ctor();
	};
	$QuickView_Client_Services_Charts_$RefCount.$increase = function($this) {
		var result = $this.count <= 0;
		$this.count++;
		return result;
	};
	$QuickView_Client_Services_Charts_$RefCount.$decrease = function($this) {
		if ($this.count <= 0) {
			throw new ss.InvalidOperationException('The number of references cannot become negative.');
		}
		$this.count--;
		return $this.count <= 0;
	};
	$QuickView_Client_Services_Charts_$RefCount.$ctor = function() {
		var $this = {};
		$this.count = 0;
		return $this;
	};
	$QuickView_Client_Services_Charts_$RefCount.$ctor1 = function(count) {
		var $this = {};
		$this.count = 0;
		JS.ArgumentHelper.positiveOrDefault(count, 'count');
		$this.count = count;
		return $this;
	};
	$QuickView_Client_Services_Charts_$RefCount.isInstanceOfType = function() {
		return true;
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Charts.ChartDataEvents
	var $QuickView_Client_Services_Charts_ChartDataEvents = function() {
	};
	$QuickView_Client_Services_Charts_ChartDataEvents.__typeName = 'QuickView.Client.Services.Charts.ChartDataEvents';
	global.QuickView.Client.Services.Charts.ChartDataEvents = $QuickView_Client_Services_Charts_ChartDataEvents;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Charts.ChartDataEvents.Metadata
	var $QuickView_Client_Services_Charts_ChartDataEvents$Metadata = function() {
	};
	$QuickView_Client_Services_Charts_ChartDataEvents$Metadata.__typeName = 'QuickView.Client.Services.Charts.ChartDataEvents$Metadata';
	$QuickView_Client_Services_Charts_ChartDataEvents$Metadata.add_changed = function(value) {
		$QuickView_Client_Services_Charts_ChartDataEvents$Metadata.$1$ChangedField = ss.delegateCombine($QuickView_Client_Services_Charts_ChartDataEvents$Metadata.$1$ChangedField, value);
	};
	$QuickView_Client_Services_Charts_ChartDataEvents$Metadata.remove_changed = function(value) {
		$QuickView_Client_Services_Charts_ChartDataEvents$Metadata.$1$ChangedField = ss.delegateRemove($QuickView_Client_Services_Charts_ChartDataEvents$Metadata.$1$ChangedField, value);
	};
	$QuickView_Client_Services_Charts_ChartDataEvents$Metadata.$onChanged = function(sender, e) {
		JS.EventExtensions.fire($QuickView_Client_Services_Charts_ChartDataEvents$Metadata.$1$ChangedField, sender, e);
	};
	global.QuickView.Client.Services.Charts.ChartDataEvents$Metadata = $QuickView_Client_Services_Charts_ChartDataEvents$Metadata;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Charts.ChartDataEvents.TimeSeries
	var $QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries = function() {
	};
	$QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.__typeName = 'QuickView.Client.Services.Charts.ChartDataEvents$TimeSeries';
	$QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.add_dataChanged = function(value) {
		$QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.$1$DataChangedField = ss.delegateCombine($QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.$1$DataChangedField, value);
	};
	$QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.remove_dataChanged = function(value) {
		$QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.$1$DataChangedField = ss.delegateRemove($QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.$1$DataChangedField, value);
	};
	$QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.$onDataChanged = function(sender, e) {
		JS.EventExtensions.fire$2($QuickView_Client_Services_Charts_TimeSeriesDataChangedEventArgs).call(null, $QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.$1$DataChangedField, sender, e);
	};
	$QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.add_beginUpdateProcess = function(value) {
		$QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.$1$BeginUpdateProcessField = ss.delegateCombine($QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.$1$BeginUpdateProcessField, value);
	};
	$QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.remove_beginUpdateProcess = function(value) {
		$QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.$1$BeginUpdateProcessField = ss.delegateRemove($QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.$1$BeginUpdateProcessField, value);
	};
	$QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.$onUpdateProcess = function(sender, e) {
		JS.EventExtensions.fire($QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.$1$BeginUpdateProcessField, sender, e);
	};
	$QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.add_endUpdateProcess = function(value) {
		$QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.$1$EndUpdateProcessField = ss.delegateCombine($QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.$1$EndUpdateProcessField, value);
	};
	$QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.remove_endUpdateProcess = function(value) {
		$QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.$1$EndUpdateProcessField = ss.delegateRemove($QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.$1$EndUpdateProcessField, value);
	};
	$QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.$onEndUpdateProcess = function(sender, e) {
		JS.EventExtensions.fire($QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.$1$EndUpdateProcessField, sender, e);
	};
	$QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.add_beginTimeSeriesUpdate = function(value) {
		$QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.$1$BeginTimeSeriesUpdateField = ss.delegateCombine($QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.$1$BeginTimeSeriesUpdateField, value);
	};
	$QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.remove_beginTimeSeriesUpdate = function(value) {
		$QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.$1$BeginTimeSeriesUpdateField = ss.delegateRemove($QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.$1$BeginTimeSeriesUpdateField, value);
	};
	$QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.$onBeginTimeSeriesUpdate = function(sender, e) {
		JS.EventExtensions.fire$2($QuickView_Client_Services_Charts_TimeSeriesUpdateEventArgs).call(null, $QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.$1$BeginTimeSeriesUpdateField, sender, e);
	};
	$QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.add_endTimeSeriesUpdate = function(value) {
		$QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.$1$EndTimeSeriesUpdateField = ss.delegateCombine($QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.$1$EndTimeSeriesUpdateField, value);
	};
	$QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.remove_endTimeSeriesUpdate = function(value) {
		$QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.$1$EndTimeSeriesUpdateField = ss.delegateRemove($QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.$1$EndTimeSeriesUpdateField, value);
	};
	$QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.$onEndTimeSeriesUpdate = function(sender, e) {
		JS.EventExtensions.fire$2($QuickView_Client_Services_Charts_TimeSeriesUpdateEventArgs).call(null, $QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.$1$EndTimeSeriesUpdateField, sender, e);
	};
	$QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.add_timeSeriesUpdateError = function(value) {
		$QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.$1$TimeSeriesUpdateErrorField = ss.delegateCombine($QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.$1$TimeSeriesUpdateErrorField, value);
	};
	$QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.remove_timeSeriesUpdateError = function(value) {
		$QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.$1$TimeSeriesUpdateErrorField = ss.delegateRemove($QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.$1$TimeSeriesUpdateErrorField, value);
	};
	$QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.$onTimeSeriesUpdateError = function(sender, e) {
		JS.EventExtensions.fire$1($QuickView_Client_Services_Charts_TimeSeriesUpdateErrorEventArgs).call(null, $QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.$1$TimeSeriesUpdateErrorField, sender, e);
	};
	global.QuickView.Client.Services.Charts.ChartDataEvents$TimeSeries = $QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Charts.ChartDataStorage
	var $QuickView_Client_Services_Charts_ChartDataStorage = function(dataStorage) {
		this.$_dataStorage = null;
		this.$_chartMetadata = null;
		this.$_timeSeriesTimestampList = null;
		this.$_timeSeriesTimestampDict = null;
		this.$_dataCache = null;
		this.$_dataUpdateQueue = null;
		this.$_timestampUpdateQueue = null;
		this.$_isPrivateUpdateMultipleTimeSeriesDataRunning = false;
		JS.ArgumentHelper.notNull(dataStorage, 'dataStorage');
		this.$_dataStorage = dataStorage;
	};
	$QuickView_Client_Services_Charts_ChartDataStorage.__typeName = 'QuickView.Client.Services.Charts.ChartDataStorage';
	$QuickView_Client_Services_Charts_ChartDataStorage.$mergeInterval = function(list, interval) {
		JS.ArgumentHelper.notNull(list, 'list');
		JS.ArgumentHelper.notNull(interval, 'interval');
		var initialCount = list.length;
		// Remove the elements that do not belong to the interval
		var firstItemIndexInclusive = list.length;
		// By default all values are considered before the interval
		for (var k = 0; k < list.length; k++, k++) {
			if (list[k] >= interval.S) {
				// The beginning of the interval has been reached
				firstItemIndexInclusive = k;
				break;
			}
		}
		var lastItemIndexExclusive = list.length;
		// By default all values are considered before the interval
		for (var k1 = firstItemIndexInclusive; k1 < list.length; k1++, k1++) {
			if (list[k1] >= interval.E) {
				lastItemIndexExclusive = k1;
				break;
			}
		}
		if (lastItemIndexExclusive > firstItemIndexInclusive) {
			ss.arrayRemoveRange(list, firstItemIndexInclusive, lastItemIndexExclusive - firstItemIndexInclusive);
		}
		ss.arrayInsertRange(list, firstItemIndexInclusive, interval.P);
		$QuickView_Client_Services_Charts_ChartDataStorage.$log.trace(function() {
			return ss.formatString('[MergeInterval] Initial data point count: {0}, Merged data point count: {1}', initialCount, list.length);
		});
	};
	global.QuickView.Client.Services.Charts.ChartDataStorage = $QuickView_Client_Services_Charts_ChartDataStorage;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Charts.ChartPeriod
	var $QuickView_Client_Services_Charts_ChartPeriod = function(def, time) {
		this.def = null;
		this.$1$IntervalChangedField = null;
		this.displayInterval = null;
		this.dataInterval = null;
		this.metaResolution = 0;
		this.barChartResolution = null;
		this.lineChartResolution = null;
		JS.ArgumentHelper.notNull(def, 'def');
		this.def = def;
		var metaResolution;
		var barResolution;
		var lineResolution;
		// Set resolutions
		// TODO Move this to a more appropriate location
		if (def.T === 2) {
			metaResolution = 1;
		}
		else {
			metaResolution = 2;
		}
		switch (def.T) {
			case 2: {
				if (def.I >= 0) {
					barResolution = $QuickView_Client_Services_Charts_ChartResolution.$ctor(4, 4);
					lineResolution = $QuickView_Client_Services_Charts_ChartResolution.$ctor(2, 2);
				}
				else if (def.I >= -2) {
					barResolution = $QuickView_Client_Services_Charts_ChartResolution.$ctor(5, 4);
					lineResolution = $QuickView_Client_Services_Charts_ChartResolution.$ctor(4, 2);
				}
				else {
					barResolution = $QuickView_Client_Services_Charts_ChartResolution.$ctor(5, 5);
					lineResolution = $QuickView_Client_Services_Charts_ChartResolution.$ctor(4, 4);
				}
				break;
			}
			case 3: {
				if (def.I >= 0) {
					barResolution = $QuickView_Client_Services_Charts_ChartResolution.$ctor(5, 5);
					lineResolution = $QuickView_Client_Services_Charts_ChartResolution.$ctor(5, 5);
				}
				else if (def.I >= -2) {
					barResolution = $QuickView_Client_Services_Charts_ChartResolution.$ctor(7, 5);
					lineResolution = $QuickView_Client_Services_Charts_ChartResolution.$ctor(5, 5);
				}
				else {
					barResolution = $QuickView_Client_Services_Charts_ChartResolution.$ctor(7, 7);
					lineResolution = $QuickView_Client_Services_Charts_ChartResolution.$ctor(5, 5);
				}
				break;
			}
			case 4: {
				if (def.I >= 0) {
					barResolution = $QuickView_Client_Services_Charts_ChartResolution.$ctor(7, 7);
					lineResolution = $QuickView_Client_Services_Charts_ChartResolution.$ctor(5, 5);
				}
				else if (def.I >= -2) {
					barResolution = $QuickView_Client_Services_Charts_ChartResolution.$ctor(9, 7);
					lineResolution = $QuickView_Client_Services_Charts_ChartResolution.$ctor(7, 5);
				}
				else {
					barResolution = $QuickView_Client_Services_Charts_ChartResolution.$ctor(9, 9);
					lineResolution = $QuickView_Client_Services_Charts_ChartResolution.$ctor(7, 7);
				}
				break;
			}
			case 5: {
				if (def.I === 0) {
					barResolution = $QuickView_Client_Services_Charts_ChartResolution.$ctor(7, 7);
					lineResolution = $QuickView_Client_Services_Charts_ChartResolution.$ctor(5, 5);
				}
				else if (def.I >= -2) {
					barResolution = $QuickView_Client_Services_Charts_ChartResolution.$ctor(7, 7);
					lineResolution = $QuickView_Client_Services_Charts_ChartResolution.$ctor(7, 5);
				}
				else {
					barResolution = $QuickView_Client_Services_Charts_ChartResolution.$ctor(7, 7);
					lineResolution = $QuickView_Client_Services_Charts_ChartResolution.$ctor(7, 7);
				}
				break;
			}
			default: {
				throw new ss.ArgumentOutOfRangeException('def', 'Invalid type.', null, def.T);
			}
		}
		this.metaResolution = metaResolution;
		this.barChartResolution = barResolution;
		this.lineChartResolution = lineResolution;
		this.$privateUpdate(time, false);
	};
	$QuickView_Client_Services_Charts_ChartPeriod.__typeName = 'QuickView.Client.Services.Charts.ChartPeriod';
	$QuickView_Client_Services_Charts_ChartPeriod.$calculateIntervals = function(time, type, index) {
		var displayInterval;
		var dataInterval;
		if (type === 2) {
			var start;
			var end;
			var dataStart;
			var dataEnd;
			if (index > 0) {
				// Round time up to an hour
				time = QuickView.Client.Algorithms.TimeExtensions.roundTime$1(time, 4);
				start = time.addHours(1).addDays(-index);
				// The end of the period is the end of the current hour
				end = time.addHours(1);
			}
			else {
				start = time.addDays(index);
				end = time.addDays(1);
				// Adjust to trading session
				start = QuickView.Client.Algorithms.Charts.TradingSession.standard.getOpenTimeByTime(start);
				end = QuickView.Client.Algorithms.Charts.TradingSession.standard.getOpenTimeByTime(end);
				// The end is exclusive; therefore we need its opening time
			}
			dataStart = QuickView.Client.Algorithms.Charts.TradingSession.standard.getTradingDateByTime(start);
			dataEnd = QuickView.Client.Algorithms.Charts.TradingSession.standard.getTradingDateByTime(end);
			displayInterval = QuickView.Client.Models.Charts.TimeInterval.$ctor(start, end);
			dataInterval = QuickView.Client.Models.Charts.TimeInterval.$ctor(dataStart, dataEnd);
		}
		else {
			var start1;
			var end1;
			if (type === 3) {
				if (index > 0) {
					// Round time up to a day
					time = QuickView.Client.Algorithms.TimeExtensions.roundTime$1(time, 5);
					start1 = time.addDays(1).addMonths(-index);
					end1 = time.addDays(1);
				}
				else {
					// Round time up to a month
					time = QuickView.Client.Algorithms.TimeExtensions.roundTime$1(time, 7);
					start1 = time.addMonths(index);
					end1 = time.addMonths(1);
				}
			}
			else if (type === 4) {
				if (index > 0) {
					// Round time up to a day
					time = QuickView.Client.Algorithms.TimeExtensions.roundTime$1(time, 5);
					start1 = time.addDays(1).addYears(-index);
					end1 = time.addDays(1);
				}
				else {
					// Round time up to an year
					time = QuickView.Client.Algorithms.TimeExtensions.roundTime$1(time, 9);
					start1 = time.addYears(index);
					end1 = time.addYears(1);
				}
			}
			else if (type === 5) {
				if (index > 0 || -index > QuickView.Client.Models.Charts.ChartPeriodHelper.get_btdStartList().length - 1) {
					throw new ss.ArgumentOutOfRangeException('index', 'Invalid value.', null, index);
				}
				else {
					// Round time up to a month
					time = QuickView.Client.Algorithms.TimeExtensions.roundTime$1(time, 7);
					start1 = QuickView.Client.Models.Charts.ChartPeriodHelper.get_btdStartList()[-index];
					end1 = time.addMonths(1);
				}
			}
			else {
				throw new ss.ArgumentOutOfRangeException('type', 'Invalid value.', null, type);
			}
			displayInterval = dataInterval = QuickView.Client.Models.Charts.TimeInterval.$ctor(start1, end1);
		}
		return { item1: displayInterval, item2: dataInterval };
	};
	$QuickView_Client_Services_Charts_ChartPeriod.$maximumDataPointCount = function(interval, resolution) {
		JS.ArgumentHelper.notNull(interval, 'interval');
		var duration = JS.DateTimeExt.op_Subtraction(interval.E, interval.S);
		switch (resolution) {
			case 1: {
				return ss.Int32.trunc(duration.ticks / 600000000);
			}
			case 2: {
				return ss.Int32.div(ss.Int32.trunc(duration.ticks / 600000000), 5);
			}
			case 3: {
				return ss.Int32.div(ss.Int32.trunc(duration.ticks / 600000000), 10);
			}
			case 4: {
				return ss.Int32.trunc(duration.ticks / 36000000000);
			}
			case 5: {
				return ss.Int32.trunc(duration.ticks / 864000000000);
			}
			case 6: {
				return ss.Int32.div(ss.Int32.trunc(duration.ticks / 864000000000), 7);
			}
			case 7: {
				return ss.Int32.div(ss.Int32.trunc(duration.ticks / 864000000000), 30);
			}
			case 8: {
				return ss.Int32.div(ss.Int32.trunc(duration.ticks / 864000000000), 90);
			}
			case 9: {
				return ss.Int32.div(ss.Int32.trunc(duration.ticks / 864000000000), 365);
			}
			default: {
				throw new ss.ArgumentOutOfRangeException('resolution', 'Invalid value.', null, resolution);
			}
		}
	};
	global.QuickView.Client.Services.Charts.ChartPeriod = $QuickView_Client_Services_Charts_ChartPeriod;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Charts.ChartPeriodProvider
	var $QuickView_Client_Services_Charts_ChartPeriodProvider = function() {
	};
	$QuickView_Client_Services_Charts_ChartPeriodProvider.__typeName = 'QuickView.Client.Services.Charts.ChartPeriodProvider';
	$QuickView_Client_Services_Charts_ChartPeriodProvider.$ensureInitialized = function() {
		if ($QuickView_Client_Services_Charts_ChartPeriodProvider.$_initialized) {
			return;
		}
		$QuickView_Client_Services_Charts_ChartPeriodProvider.$_lastUpdateTime = QuickView.Client.Algorithms.TimeExtensions.roundTime$1(JS.DateTimeExt.get_utcNow(), $QuickView_Client_Services_Charts_ChartPeriodProvider.$updateResolution);
		window.setTimeout($QuickView_Client_Services_Charts_ChartPeriodProvider.$updatePeriods);
		$QuickView_Client_Services_Charts_ChartPeriodProvider.$_initialized = true;
	};
	$QuickView_Client_Services_Charts_ChartPeriodProvider.$updatePeriods = function() {
		var $state = 0, time, nextUpdate, delay, $t1, updateTime, keyList, $t2, key, period;
		var $sm = function() {
			$sm1:
			for (;;) {
				switch ($state) {
					case 0: {
						$state = -1;
						time = JS.DateTimeExt.get_utcNow();
						nextUpdate = QuickView.Client.Algorithms.TimeExtensions.advanceTime$1(QuickView.Client.Algorithms.TimeExtensions.roundTime$1(time, $QuickView_Client_Services_Charts_ChartPeriodProvider.$updateResolution), $QuickView_Client_Services_Charts_ChartPeriodProvider.$updateResolution);
						delay = JS.DateTimeExt.op_Subtraction(nextUpdate, time);
						$t1 = ss.Task.delay(ss.Int32.trunc(delay.ticks / 10000));
						$state = 1;
						$t1.continueWith($sm);
						return;
					}
					case 1: {
						$state = -1;
						$t1.getAwaitedResult();
						if (ss.isValue($QuickView_Client_Services_Charts_ChartPeriodProvider.$_periodDict)) {
							updateTime = QuickView.Client.Algorithms.TimeExtensions.roundTime$1(JS.DateTimeExt.get_utcNow(), $QuickView_Client_Services_Charts_ChartPeriodProvider.$updateResolution);
							keyList = Object.keys($QuickView_Client_Services_Charts_ChartPeriodProvider.$_periodDict);
							$t2 = ss.getEnumerator(keyList);
							try {
								while ($t2.moveNext()) {
									key = $t2.current();
									period = $QuickView_Client_Services_Charts_ChartPeriodProvider.$_periodDict[key];
									period.$update(updateTime);
								}
							}
							finally {
								$t2.dispose();
							}
						}
						$state = 0;
						continue $sm1;
					}
					default: {
						break $sm1;
					}
				}
			}
		};
		$sm();
	};
	$QuickView_Client_Services_Charts_ChartPeriodProvider.getPeriod$1 = function(type, index) {
		return $QuickView_Client_Services_Charts_ChartPeriodProvider.getPeriod(QuickView.Client.Models.Charts.ChartPeriodDef.$ctor(type, index));
	};
	$QuickView_Client_Services_Charts_ChartPeriodProvider.getPeriod = function(def) {
		JS.ArgumentHelper.notNull(def, 'def');
		// Ensure the provider is initialized
		$QuickView_Client_Services_Charts_ChartPeriodProvider.$ensureInitialized();
		var key = def.T.toString() + '|' + def.I.toString();
		if (ss.isNullOrUndefined($QuickView_Client_Services_Charts_ChartPeriodProvider.$_periodDict)) {
			$QuickView_Client_Services_Charts_ChartPeriodProvider.$_periodDict = {};
		}
		var result = $QuickView_Client_Services_Charts_ChartPeriodProvider.$_periodDict[key];
		if (ss.isNullOrUndefined(result)) {
			$QuickView_Client_Services_Charts_ChartPeriodProvider.$_periodDict[key] = result = new $QuickView_Client_Services_Charts_ChartPeriod(def, $QuickView_Client_Services_Charts_ChartPeriodProvider.$_lastUpdateTime);
		}
		return result;
	};
	global.QuickView.Client.Services.Charts.ChartPeriodProvider = $QuickView_Client_Services_Charts_ChartPeriodProvider;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Charts.ChartResolution
	var $QuickView_Client_Services_Charts_ChartResolution = function() {
	};
	$QuickView_Client_Services_Charts_ChartResolution.__typeName = 'QuickView.Client.Services.Charts.ChartResolution';
	$QuickView_Client_Services_Charts_ChartResolution.$ctor = function(collapsed, extended) {
		var $this = {};
		$this.C = 0;
		$this.E = 0;
		$this.C = collapsed;
		$this.E = extended;
		return $this;
	};
	$QuickView_Client_Services_Charts_ChartResolution.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Services.Charts.ChartResolution = $QuickView_Client_Services_Charts_ChartResolution;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Charts.ChartService
	var $QuickView_Client_Services_Charts_ChartService = function(chartStorage) {
		this.$_chartStorage = null;
		JS.ArgumentHelper.notNull(chartStorage, 'chartStorage');
		this.$_chartStorage = chartStorage;
	};
	$QuickView_Client_Services_Charts_ChartService.__typeName = 'QuickView.Client.Services.Charts.ChartService';
	global.QuickView.Client.Services.Charts.ChartService = $QuickView_Client_Services_Charts_ChartService;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Charts.ChartSize
	var $QuickView_Client_Services_Charts_ChartSize = function() {
	};
	$QuickView_Client_Services_Charts_ChartSize.__typeName = 'QuickView.Client.Services.Charts.ChartSize';
	global.QuickView.Client.Services.Charts.ChartSize = $QuickView_Client_Services_Charts_ChartSize;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Charts.ChartType
	var $QuickView_Client_Services_Charts_ChartType = function() {
	};
	$QuickView_Client_Services_Charts_ChartType.__typeName = 'QuickView.Client.Services.Charts.ChartType';
	global.QuickView.Client.Services.Charts.ChartType = $QuickView_Client_Services_Charts_ChartType;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Charts.IndicatorChartData
	var $QuickView_Client_Services_Charts_IndicatorChartData = function(fullType, unit, algorithmResult, timeUpdated) {
		this.$_algorithmResult = null;
		$QuickView_Client_Services_Charts_IndicatorData.call(this, fullType, unit, algorithmResult.R, timeUpdated);
		JS.ArgumentHelper.notNull(fullType, 'fullType');
		JS.ArgumentHelper.notNull(algorithmResult, 'algorithmResult');
		this.$_algorithmResult = algorithmResult;
	};
	$QuickView_Client_Services_Charts_IndicatorChartData.__typeName = 'QuickView.Client.Services.Charts.IndicatorChartData';
	global.QuickView.Client.Services.Charts.IndicatorChartData = $QuickView_Client_Services_Charts_IndicatorChartData;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Charts.IndicatorCustomData
	var $QuickView_Client_Services_Charts_IndicatorCustomData = function(fullType, unit, algorithmResult, timeUpdated) {
		this.$_algorithmResult = null;
		$QuickView_Client_Services_Charts_IndicatorData.call(this, fullType, unit, algorithmResult.R, timeUpdated);
		JS.ArgumentHelper.notNull(algorithmResult, 'algorithmResult');
		this.$_algorithmResult = algorithmResult;
	};
	$QuickView_Client_Services_Charts_IndicatorCustomData.__typeName = 'QuickView.Client.Services.Charts.IndicatorCustomData';
	global.QuickView.Client.Services.Charts.IndicatorCustomData = $QuickView_Client_Services_Charts_IndicatorCustomData;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Charts.IndicatorData
	var $QuickView_Client_Services_Charts_IndicatorData = function(fulltype, unit, resolution, timeUpdated) {
		this.fullType = null;
		this.unit = 0;
		this.resolution = 0;
		this.timeUpdated = null;
		this.fullType = fulltype;
		this.unit = unit;
		this.resolution = resolution;
		this.timeUpdated = timeUpdated;
	};
	$QuickView_Client_Services_Charts_IndicatorData.__typeName = 'QuickView.Client.Services.Charts.IndicatorData';
	global.QuickView.Client.Services.Charts.IndicatorData = $QuickView_Client_Services_Charts_IndicatorData;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Charts.IndicatorDataBag
	var $QuickView_Client_Services_Charts_IndicatorDataBag = function() {
	};
	$QuickView_Client_Services_Charts_IndicatorDataBag.__typeName = 'QuickView.Client.Services.Charts.IndicatorDataBag';
	$QuickView_Client_Services_Charts_IndicatorDataBag.getDataIfAvailable = function($this, type, unit) {
		var $t1 = ss.getEnumerator($this._list);
		try {
			while ($t1.moveNext()) {
				var item = $t1.current();
				if ($QuickView_Client_Services_Charts_$LocalUtils.$isMatch(type, item.fullType) && item.unit === unit) {
					return item;
				}
			}
		}
		finally {
			$t1.dispose();
		}
		return null;
	};
	$QuickView_Client_Services_Charts_IndicatorDataBag.getDataIfAvailable$1 = function($this, type, subtype, unit) {
		var $t1 = ss.getEnumerator($this._list);
		try {
			while ($t1.moveNext()) {
				var item = $t1.current();
				if ($QuickView_Client_Services_Charts_$LocalUtils.$isMatch(type, item.fullType) && item.fullType.S === subtype && item.unit === unit) {
					return item;
				}
			}
		}
		finally {
			$t1.dispose();
		}
		return null;
	};
	$QuickView_Client_Services_Charts_IndicatorDataBag.getChartData = function($this, unit) {
		var $t1 = Enumerable.from($this._list).ofType($QuickView_Client_Services_Charts_IndicatorChartData).getEnumerator();
		try {
			while ($t1.moveNext()) {
				var item = $t1.current();
				if (item.unit === unit) {
					return item;
				}
			}
		}
		finally {
			$t1.dispose();
		}
		throw new ss.ArgumentOutOfRangeException('unit', 'Data is not available for the specified unit.', null, unit);
	};
	$QuickView_Client_Services_Charts_IndicatorDataBag.getChartData$1 = function($this, unit, resolution) {
		var data = $QuickView_Client_Services_Charts_IndicatorDataBag.getChartData($this, unit);
		if (data.resolution === resolution) {
			return data;
		}
		else {
			return data.$changeResolution(resolution);
		}
	};
	$QuickView_Client_Services_Charts_IndicatorDataBag.getCustomData = function($this, unit) {
		var $t1 = Enumerable.from($this._list).ofType($QuickView_Client_Services_Charts_IndicatorCustomData).getEnumerator();
		try {
			while ($t1.moveNext()) {
				var item = $t1.current();
				if (item.unit === unit) {
					return item;
				}
			}
		}
		finally {
			$t1.dispose();
		}
		throw new ss.ArgumentOutOfRangeException('unit', 'Data is not available for the specified unit.', null, unit);
	};
	$QuickView_Client_Services_Charts_IndicatorDataBag.getCustomData$1 = function($this, unit, resolution) {
		var data = $QuickView_Client_Services_Charts_IndicatorDataBag.getCustomData($this, unit);
		if (data.resolution === resolution) {
			return data;
		}
		else {
			return data.$changeResolution(resolution);
		}
	};
	$QuickView_Client_Services_Charts_IndicatorDataBag.$ctor = function(indicator, list) {
		var $this = {};
		$this.indicator = null;
		$this._list = null;
		JS.ArgumentHelper.notNull(indicator, 'indicator');
		JS.ArgumentHelper.notNull(list, 'list');
		$this.indicator = indicator;
		$this._list = list;
		return $this;
	};
	$QuickView_Client_Services_Charts_IndicatorDataBag.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Services.Charts.IndicatorDataBag = $QuickView_Client_Services_Charts_IndicatorDataBag;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Charts.IndicatorDataChangedEventArgs
	var $QuickView_Client_Services_Charts_IndicatorDataChangedEventArgs = function(indicator, metaResolution) {
		this.indicator = null;
		this.metaResolution = 0;
		ss.EventArgs.call(this);
		this.indicator = indicator;
		this.metaResolution = metaResolution;
	};
	$QuickView_Client_Services_Charts_IndicatorDataChangedEventArgs.__typeName = 'QuickView.Client.Services.Charts.IndicatorDataChangedEventArgs';
	global.QuickView.Client.Services.Charts.IndicatorDataChangedEventArgs = $QuickView_Client_Services_Charts_IndicatorDataChangedEventArgs;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Charts.IndicatorDataProvider
	var $QuickView_Client_Services_Charts_IndicatorDataProvider = function(chartService) {
		this.$_chartService = null;
		this.$_dataDataRecencyChangedHandlerDict = null;
		this.$_dataChangedHandlerDict = null;
		this.$_getIndicatorDataTaskQueue = null;
		this.$_dataRecencyDict = {};
		JS.ArgumentHelper.notNull(chartService, 'chartService');
		this.$_chartService = chartService;
		$QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.add_dataChanged(ss.mkdel(this, this.$timeSeries_DataChanged));
		this.$_dataDataRecencyChangedHandlerDict = {};
		this.$_dataChangedHandlerDict = {};
	};
	$QuickView_Client_Services_Charts_IndicatorDataProvider.__typeName = 'QuickView.Client.Services.Charts.IndicatorDataProvider';
	$QuickView_Client_Services_Charts_IndicatorDataProvider.$calculateRecencyFactor = function(timeCalculated, metaResolution, options) {
		// The minimum age of data to be considered old
		var minimumDataAge;
		// The maximum allowed age of data to use for the data recency scale.
		// Data older than this value is considered 100% old.
		var maximumDataAge;
		if (metaResolution === 1) {
			// Intraday data is supported
			if (JS.EnumExtensions.isSet(options, 1)) {
				minimumDataAge = 1440;
				maximumDataAge = 2880;
			}
			else {
				minimumDataAge = 60;
				maximumDataAge = 1440;
			}
		}
		else if (metaResolution === 2) {
			minimumDataAge = 1440;
			maximumDataAge = 43200;
			// One month
		}
		else if (metaResolution === 3 || metaResolution === 0) {
			minimumDataAge = 1440;
			maximumDataAge = 43200;
			// One month
		}
		else {
			throw new ss.ArgumentOutOfRangeException('metaResolution', 'Invalid value.', null, metaResolution);
		}
		var now = JS.DateTimeExt.get_utcNow();
		var result;
		// How long ago the last value is from
		var lastValueAge = ss.Int32.trunc(now.subtract(timeCalculated).ticks / 600000000);
		// The value could be negative for data with daily and higher resolution
		// as "PeriodTo" of a value may be aligned to the end of the current day/month/year
		if (lastValueAge >= minimumDataAge) {
			result = Math.max(0, maximumDataAge - lastValueAge) / maximumDataAge;
		}
		else {
			// The data is the latest available
			result = 1;
		}
		return result;
	};
	$QuickView_Client_Services_Charts_IndicatorDataProvider.$getKey = function(indicator, metaResolution) {
		return indicator.I + '|' + metaResolution.toString();
	};
	$QuickView_Client_Services_Charts_IndicatorDataProvider.get_$intradayTimeSeriesPeriod = function() {
		if (ss.isNullOrUndefined($QuickView_Client_Services_Charts_IndicatorDataProvider.$_intradayTimeSeriesPeriod)) {
			$QuickView_Client_Services_Charts_IndicatorDataProvider.$_intradayTimeSeriesPeriod = $QuickView_Client_Services_Charts_ChartPeriodProvider.getPeriod$1(2, -1);
		}
		return $QuickView_Client_Services_Charts_IndicatorDataProvider.$_intradayTimeSeriesPeriod;
	};
	global.QuickView.Client.Services.Charts.IndicatorDataProvider = $QuickView_Client_Services_Charts_IndicatorDataProvider;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Charts.IndicatorDataType
	var $QuickView_Client_Services_Charts_IndicatorDataType = function() {
	};
	$QuickView_Client_Services_Charts_IndicatorDataType.__typeName = 'QuickView.Client.Services.Charts.IndicatorDataType';
	global.QuickView.Client.Services.Charts.IndicatorDataType = $QuickView_Client_Services_Charts_IndicatorDataType;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Charts.IndicatorDataUsage
	var $QuickView_Client_Services_Charts_IndicatorDataUsage = function() {
	};
	$QuickView_Client_Services_Charts_IndicatorDataUsage.__typeName = 'QuickView.Client.Services.Charts.IndicatorDataUsage';
	$QuickView_Client_Services_Charts_IndicatorDataUsage.$getIndicatorRefCount = function(indicator) {
		var key = QuickView.Client.Models.Charts.Indicator.idLower(indicator);
		var refCount = $QuickView_Client_Services_Charts_IndicatorDataUsage.$_indicatorDict[key];
		if (ss.isNullOrUndefined(refCount)) {
			$QuickView_Client_Services_Charts_IndicatorDataUsage.$_indicatorDict[key] = refCount = $QuickView_Client_Services_Charts_$RefCount.$ctor();
		}
		return refCount;
	};
	$QuickView_Client_Services_Charts_IndicatorDataUsage.$getTimeSeriesRefCount = function(timeSeries) {
		var key = QuickView.Client.Models.Charts.TimeSeries.idLower(timeSeries);
		var refCount = $QuickView_Client_Services_Charts_IndicatorDataUsage.$_timeSeriesDict[key];
		if (ss.isNullOrUndefined(refCount)) {
			$QuickView_Client_Services_Charts_IndicatorDataUsage.$_timeSeriesDict[key] = refCount = $QuickView_Client_Services_Charts_$RefCount.$ctor();
		}
		return refCount;
	};
	$QuickView_Client_Services_Charts_IndicatorDataUsage.setHeaderIndicator = function(indicator) {
		if (ss.referenceEquals($QuickView_Client_Services_Charts_IndicatorDataUsage.$_headerIndicator, indicator)) {
			return;
		}
		$QuickView_Client_Services_Charts_IndicatorDataUsage.$_headerIndicator = indicator;
		// There is NO reason to increase the version if the new indicator is null
		// as there is no time series to be prioritized
		if (ss.isValue(indicator)) {
			$QuickView_Client_Services_Charts_IndicatorDataUsage.version++;
		}
	};
	$QuickView_Client_Services_Charts_IndicatorDataUsage.addIndicator = function(indicator) {
		JS.ArgumentHelper.notNull(indicator, 'indicator');
		if ($QuickView_Client_Services_Charts_$RefCount.$increase($QuickView_Client_Services_Charts_IndicatorDataUsage.$getIndicatorRefCount(indicator))) {
			// Register all time series referenced by the indicator
			for (var $t1 = 0; $t1 < indicator.allTimeSeries.length; $t1++) {
				var item = indicator.allTimeSeries[$t1];
				$QuickView_Client_Services_Charts_$RefCount.$increase($QuickView_Client_Services_Charts_IndicatorDataUsage.$getTimeSeriesRefCount(item));
			}
			$QuickView_Client_Services_Charts_IndicatorDataUsage.version++;
		}
	};
	$QuickView_Client_Services_Charts_IndicatorDataUsage.removeIndicator = function(indicator) {
		JS.ArgumentHelper.notNull(indicator, 'indicator');
		if ($QuickView_Client_Services_Charts_$RefCount.$decrease($QuickView_Client_Services_Charts_IndicatorDataUsage.$getIndicatorRefCount(indicator))) {
			// Unregister all time series referenced by the indicator
			for (var $t1 = 0; $t1 < indicator.allTimeSeries.length; $t1++) {
				var item = indicator.allTimeSeries[$t1];
				$QuickView_Client_Services_Charts_$RefCount.$decrease($QuickView_Client_Services_Charts_IndicatorDataUsage.$getTimeSeriesRefCount(item));
			}
			$QuickView_Client_Services_Charts_IndicatorDataUsage.version++;
		}
	};
	$QuickView_Client_Services_Charts_IndicatorDataUsage.$isHeader = function(timeSeries) {
		JS.ArgumentHelper.notNull(timeSeries, 'timeSeries');
		return $QuickView_Client_Services_Charts_IndicatorDataUsage.$isHeader$1(QuickView.Client.Models.Charts.TimeSeries.idLower(timeSeries));
	};
	$QuickView_Client_Services_Charts_IndicatorDataUsage.$isHeader$1 = function(timeSeriesID) {
		JS.ArgumentHelper.notNullOrEmpty(timeSeriesID, 'timeSeriesID');
		if (ss.isNullOrUndefined($QuickView_Client_Services_Charts_IndicatorDataUsage.$_headerIndicator)) {
			return false;
		}
		else {
			timeSeriesID = timeSeriesID.toLowerCase();
			return Enumerable.from($QuickView_Client_Services_Charts_IndicatorDataUsage.$_headerIndicator.allTimeSeries).any(function(x) {
				return ss.referenceEquals(QuickView.Client.Models.Charts.TimeSeries.idLower(x), timeSeriesID);
			});
		}
	};
	$QuickView_Client_Services_Charts_IndicatorDataUsage.$isInUse = function(timeSeries) {
		JS.ArgumentHelper.notNull(timeSeries, 'timeSeries');
		return $QuickView_Client_Services_Charts_IndicatorDataUsage.$isInUse$1(QuickView.Client.Models.Charts.TimeSeries.idLower(timeSeries));
	};
	$QuickView_Client_Services_Charts_IndicatorDataUsage.$isInUse$1 = function(timeSeriesID) {
		JS.ArgumentHelper.notNullOrEmpty(timeSeriesID, 'timeSeriesID');
		var refCount = $QuickView_Client_Services_Charts_IndicatorDataUsage.$_timeSeriesDict[timeSeriesID.toLowerCase()];
		return ss.isValue(refCount) && refCount.count > 0;
	};
	global.QuickView.Client.Services.Charts.IndicatorDataUsage = $QuickView_Client_Services_Charts_IndicatorDataUsage;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Charts.IndicatorDataWorker
	var $QuickView_Client_Services_Charts_IndicatorDataWorker = function(apiClient, chartStorage) {
		this.$_apiClient = null;
		this.$_chartStorage = null;
		$QuickView_Client_Services_Worker.call(this);
		JS.ArgumentHelper.notNull(apiClient, 'apiClient');
		JS.ArgumentHelper.notNull(chartStorage, 'chartStorage');
		this.$_apiClient = apiClient;
		this.$_chartStorage = chartStorage;
	};
	$QuickView_Client_Services_Charts_IndicatorDataWorker.__typeName = 'QuickView.Client.Services.Charts.IndicatorDataWorker';
	global.QuickView.Client.Services.Charts.IndicatorDataWorker = $QuickView_Client_Services_Charts_IndicatorDataWorker;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Charts.IndicatorEventArgs
	var $QuickView_Client_Services_Charts_IndicatorEventArgs = function(indicator) {
		this.indicator = null;
		ss.EventArgs.call(this);
		this.indicator = indicator;
	};
	$QuickView_Client_Services_Charts_IndicatorEventArgs.__typeName = 'QuickView.Client.Services.Charts.IndicatorEventArgs';
	global.QuickView.Client.Services.Charts.IndicatorEventArgs = $QuickView_Client_Services_Charts_IndicatorEventArgs;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Charts.TimeSeriesDataChangedEventArgs
	var $QuickView_Client_Services_Charts_TimeSeriesDataChangedEventArgs = function(timeSeries, date) {
		this.timeSeries = null;
		this.date = new Date(0);
		ss.EventArgs.call(this);
		this.timeSeries = timeSeries;
		this.date = date;
	};
	$QuickView_Client_Services_Charts_TimeSeriesDataChangedEventArgs.__typeName = 'QuickView.Client.Services.Charts.TimeSeriesDataChangedEventArgs';
	global.QuickView.Client.Services.Charts.TimeSeriesDataChangedEventArgs = $QuickView_Client_Services_Charts_TimeSeriesDataChangedEventArgs;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Charts.TimeSeriesDataIntervalUpdate
	var $QuickView_Client_Services_Charts_TimeSeriesDataIntervalUpdate = function() {
	};
	$QuickView_Client_Services_Charts_TimeSeriesDataIntervalUpdate.__typeName = 'QuickView.Client.Services.Charts.TimeSeriesDataIntervalUpdate';
	$QuickView_Client_Services_Charts_TimeSeriesDataIntervalUpdate.$ctor = function(date, intervals) {
		var $this = {};
		$this.D = new Date(0);
		$this.I = null;
		JS.ArgumentHelper.notNull(intervals, 'intervals');
		$this.D = date;
		$this.I = intervals;
		return $this;
	};
	$QuickView_Client_Services_Charts_TimeSeriesDataIntervalUpdate.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Services.Charts.TimeSeriesDataIntervalUpdate = $QuickView_Client_Services_Charts_TimeSeriesDataIntervalUpdate;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Charts.TimeSeriesDataIntervalUpdateList
	var $QuickView_Client_Services_Charts_TimeSeriesDataIntervalUpdateList = function() {
	};
	$QuickView_Client_Services_Charts_TimeSeriesDataIntervalUpdateList.__typeName = 'QuickView.Client.Services.Charts.TimeSeriesDataIntervalUpdateList';
	$QuickView_Client_Services_Charts_TimeSeriesDataIntervalUpdateList.$ctor = function(timeSeries, updates, timestamp, timeDataUpdated) {
		var $this = {};
		$this.T = null;
		$this.U = null;
		$this.S = null;
		$this.D = new Date(0);
		JS.ArgumentHelper.notNull(timeSeries, 'timeSeries');
		JS.ArgumentHelper.notNull(updates, 'updates');
		JS.ArgumentHelper.notNullOrEmpty(timestamp, 'timestamp');
		$this.T = timeSeries;
		$this.U = updates;
		$this.S = timestamp;
		$this.D = timeDataUpdated;
		return $this;
	};
	$QuickView_Client_Services_Charts_TimeSeriesDataIntervalUpdateList.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Services.Charts.TimeSeriesDataIntervalUpdateList = $QuickView_Client_Services_Charts_TimeSeriesDataIntervalUpdateList;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Charts.TimeSeriesDataPointRetrieval
	var $QuickView_Client_Services_Charts_TimeSeriesDataPointRetrieval = function() {
	};
	$QuickView_Client_Services_Charts_TimeSeriesDataPointRetrieval.__typeName = 'QuickView.Client.Services.Charts.TimeSeriesDataPointRetrieval';
	$QuickView_Client_Services_Charts_TimeSeriesDataPointRetrieval.$ctor = function(timeSeries, date, data, prevPeriodDataPoint) {
		var $this = {};
		$this.T = null;
		$this.D = ss.getDefaultValue(JS.DateTimeExt);
		$this.A = null;
		$this.P = null;
		JS.ArgumentHelper.notNull(timeSeries, 'timeSeries');
		$this.T = timeSeries;
		$this.D = date;
		$this.A = data;
		$this.P = prevPeriodDataPoint;
		return $this;
	};
	$QuickView_Client_Services_Charts_TimeSeriesDataPointRetrieval.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Services.Charts.TimeSeriesDataPointRetrieval = $QuickView_Client_Services_Charts_TimeSeriesDataPointRetrieval;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Charts.TimeSeriesEventArgs
	var $QuickView_Client_Services_Charts_TimeSeriesEventArgs = function(timeSeriesID) {
		this.timeSeriesID = null;
		ss.EventArgs.call(this);
		this.timeSeriesID = timeSeriesID;
	};
	$QuickView_Client_Services_Charts_TimeSeriesEventArgs.__typeName = 'QuickView.Client.Services.Charts.TimeSeriesEventArgs';
	global.QuickView.Client.Services.Charts.TimeSeriesEventArgs = $QuickView_Client_Services_Charts_TimeSeriesEventArgs;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Charts.TimeSeriesPeriodData
	var $QuickView_Client_Services_Charts_TimeSeriesPeriodData = function() {
	};
	$QuickView_Client_Services_Charts_TimeSeriesPeriodData.__typeName = 'QuickView.Client.Services.Charts.TimeSeriesPeriodData';
	$QuickView_Client_Services_Charts_TimeSeriesPeriodData.getPrevPeriodValue = function($this) {
		return (ss.isNullOrUndefined($this.P) ? null : $this.P.V);
	};
	$QuickView_Client_Services_Charts_TimeSeriesPeriodData.$ctor = function(timeSeries, dataPoints, prevPeriodDataPoint) {
		var $this = {};
		$this.T = null;
		$this.D = null;
		$this.P = null;
		JS.ArgumentHelper.notNull(timeSeries, 'timeSeries');
		$this.T = timeSeries;
		$this.D = dataPoints;
		$this.P = prevPeriodDataPoint;
		return $this;
	};
	$QuickView_Client_Services_Charts_TimeSeriesPeriodData.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Services.Charts.TimeSeriesPeriodData = $QuickView_Client_Services_Charts_TimeSeriesPeriodData;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Charts.TimeSeriesPeriodDataRequest
	var $QuickView_Client_Services_Charts_TimeSeriesPeriodDataRequest = function() {
	};
	$QuickView_Client_Services_Charts_TimeSeriesPeriodDataRequest.__typeName = 'QuickView.Client.Services.Charts.TimeSeriesPeriodDataRequest';
	$QuickView_Client_Services_Charts_TimeSeriesPeriodDataRequest.$ctor = function(timeSeries, start, end) {
		var $this = {};
		$this.T = null;
		$this.S = ss.getDefaultValue(JS.DateTimeExt);
		$this.E = ss.getDefaultValue(JS.DateTimeExt);
		JS.ArgumentHelper.notNull(timeSeries, 'timeSeries');
		$this.T = timeSeries;
		$this.S = start;
		$this.E = end;
		return $this;
	};
	$QuickView_Client_Services_Charts_TimeSeriesPeriodDataRequest.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Services.Charts.TimeSeriesPeriodDataRequest = $QuickView_Client_Services_Charts_TimeSeriesPeriodDataRequest;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Charts.TimeSeriesUpdateDataPriority
	var $QuickView_Client_Services_Charts_TimeSeriesUpdateDataPriority = function() {
	};
	$QuickView_Client_Services_Charts_TimeSeriesUpdateDataPriority.__typeName = 'QuickView.Client.Services.Charts.TimeSeriesUpdateDataPriority';
	global.QuickView.Client.Services.Charts.TimeSeriesUpdateDataPriority = $QuickView_Client_Services_Charts_TimeSeriesUpdateDataPriority;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Charts.TimeSeriesUpdateErrorEventArgs
	var $QuickView_Client_Services_Charts_TimeSeriesUpdateErrorEventArgs = function(index, count, totalCount, dataPriority, error) {
		this.error = null;
		$QuickView_Client_Services_Charts_TimeSeriesUpdateEventArgs.call(this, index, count, totalCount, dataPriority);
		this.error = error;
	};
	$QuickView_Client_Services_Charts_TimeSeriesUpdateErrorEventArgs.__typeName = 'QuickView.Client.Services.Charts.TimeSeriesUpdateErrorEventArgs';
	global.QuickView.Client.Services.Charts.TimeSeriesUpdateErrorEventArgs = $QuickView_Client_Services_Charts_TimeSeriesUpdateErrorEventArgs;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Charts.TimeSeriesUpdateEventArgs
	var $QuickView_Client_Services_Charts_TimeSeriesUpdateEventArgs = function(index, count, totalCount, dataPriority) {
		this.I = 0;
		this.C = 0;
		this.T = 0;
		this.P = 0;
		ss.EventArgs.call(this);
		this.I = index;
		this.C = count;
		this.T = totalCount;
		this.P = dataPriority;
	};
	$QuickView_Client_Services_Charts_TimeSeriesUpdateEventArgs.__typeName = 'QuickView.Client.Services.Charts.TimeSeriesUpdateEventArgs';
	global.QuickView.Client.Services.Charts.TimeSeriesUpdateEventArgs = $QuickView_Client_Services_Charts_TimeSeriesUpdateEventArgs;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Data.TimeSeriesDataUtils
	var $QuickView_Client_Services_Data_$TimeSeriesDataUtils = function() {
	};
	$QuickView_Client_Services_Data_$TimeSeriesDataUtils.__typeName = 'QuickView.Client.Services.Data.$TimeSeriesDataUtils';
	$QuickView_Client_Services_Data_$TimeSeriesDataUtils.$convertTime = function(metaResolution, baseTime, value) {
		return $QuickView_Client_Services_Data_$TimeSeriesDataUtils.$getTimeConversionMethod(metaResolution)(baseTime, value);
	};
	$QuickView_Client_Services_Data_$TimeSeriesDataUtils.$getTimeConversionMethod = function(metaResolution) {
		switch (metaResolution) {
			case 1: {
				return $QuickView_Client_Services_Data_$TimeSeriesDataUtils.$convertIntradayTime;
			}
			case 2: {
				return $QuickView_Client_Services_Data_$TimeSeriesDataUtils.$convertDailyTime;
			}
			case 3:
			case 0: {
				return $QuickView_Client_Services_Data_$TimeSeriesDataUtils.$convertEventlyTime;
			}
			default: {
				throw new ss.ArgumentOutOfRangeException('metaResolution', 'Invalid value.', null, metaResolution);
			}
		}
	};
	$QuickView_Client_Services_Data_$TimeSeriesDataUtils.$convertEventlyTime = function(time, value) {
		return time.addSeconds(value);
	};
	$QuickView_Client_Services_Data_$TimeSeriesDataUtils.$convertIntradayTime = function(time, value) {
		return time.addMinutes(value);
	};
	$QuickView_Client_Services_Data_$TimeSeriesDataUtils.$convertDailyTime = function(time, value) {
		return time.addDays(value);
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Data.WebSqlDatabaseUpgrade
	var $QuickView_Client_Services_Data_$WebSqlDatabaseUpgrade = function() {
	};
	$QuickView_Client_Services_Data_$WebSqlDatabaseUpgrade.__typeName = 'QuickView.Client.Services.Data.$WebSqlDatabaseUpgrade';
	$QuickView_Client_Services_Data_$WebSqlDatabaseUpgrade.$ctor = function(oldVersion, newVersion, method) {
		var $this = {};
		$this.oldVersion = null;
		$this.newVersion = null;
		$this.method = null;
		JS.ArgumentHelper.notNull(oldVersion, 'oldVersion');
		JS.ArgumentHelper.notNull(newVersion, 'newVersion');
		JS.ArgumentHelper.notNull(method, 'method');
		$this.oldVersion = oldVersion;
		$this.newVersion = newVersion;
		$this.method = method;
		return $this;
	};
	$QuickView_Client_Services_Data_$WebSqlDatabaseUpgrade.isInstanceOfType = function() {
		return true;
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Data.DataFormat
	var $QuickView_Client_Services_Data_DataFormat = function() {
	};
	$QuickView_Client_Services_Data_DataFormat.__typeName = 'QuickView.Client.Services.Data.DataFormat';
	global.QuickView.Client.Services.Data.DataFormat = $QuickView_Client_Services_Data_DataFormat;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Data.DataRecord
	var $QuickView_Client_Services_Data_DataRecord = function() {
	};
	$QuickView_Client_Services_Data_DataRecord.__typeName = 'QuickView.Client.Services.Data.DataRecord';
	$QuickView_Client_Services_Data_DataRecord.create = function(T) {
		return function(timestamp, timeUpdated, value) {
			return ss.makeGenericType($QuickView_Client_Services_Data_DataRecord$1, [T]).$ctor(timestamp, timeUpdated, value);
		};
	};
	global.QuickView.Client.Services.Data.DataRecord = $QuickView_Client_Services_Data_DataRecord;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Data.DataRecord
	var $QuickView_Client_Services_Data_DataRecord$1 = function(T) {
		var $type = function() {
		};
		$type.$ctor = function(timestamp, timeUpdated, value) {
			var $this = {};
			$this.T = null;
			$this.U = null;
			$this.V = ss.getDefaultValue(T);
			$this.V = value;
			$this.T = timestamp;
			$this.U = timeUpdated;
			return $this;
		};
		$type.isInstanceOfType = function() {
			return true;
		};
		ss.registerGenericClassInstance($type, $QuickView_Client_Services_Data_DataRecord$1, [T], {}, function() {
			return null;
		}, function() {
			return [];
		});
		return $type;
	};
	$QuickView_Client_Services_Data_DataRecord$1.__typeName = 'QuickView.Client.Services.Data.DataRecord$1';
	ss.initGenericClass($QuickView_Client_Services_Data_DataRecord$1, $asm, 1);
	global.QuickView.Client.Services.Data.DataRecord$1 = $QuickView_Client_Services_Data_DataRecord$1;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Data.DataStorage
	var $QuickView_Client_Services_Data_DataStorage = function() {
		this.$_database = null;
		if (false === $QuickView_Client_Services_Data_DataStorage.get_isSupported()) {
			throw new ss.InvalidOperationException('Support for WebSQL is required. This browser does not support WebSQL.');
		}
		// Use "QuickView4" to avoid conflicts with existing database
		// The "version" parameter MUST be exactly the same as the initial version parameter in the
		// upgrade list (e.g. both null or both empty string). Otherwise, the arguments may not be matched!
		// NEVER use "null" since it is converted to the string 'null' which will not match with any upgrade version number!!!
		this.$_database = window.openDatabase('QuickView4', '', 'QuickView 4 Database', 47185920);
	};
	$QuickView_Client_Services_Data_DataStorage.__typeName = 'QuickView.Client.Services.Data.DataStorage';
	$QuickView_Client_Services_Data_DataStorage.get_isSupported = function() {
		return typeof(window.openDatabase) == typeof(Function);
	};
	$QuickView_Client_Services_Data_DataStorage.$convertToDbDateTime = function(value) {
		return (ss.staticEquals(value, null) ? null : ss.unbox(value).valueOf());
	};
	$QuickView_Client_Services_Data_DataStorage.$convertToDbDateTime$1 = function(value) {
		return (JS.DateTimeExt.op_Equality$1(value, null) ? null : ss.unbox(value).toDateTime().valueOf());
	};
	$QuickView_Client_Services_Data_DataStorage.$convertFromDbDateTime = function(value) {
		return new Date(value);
	};
	$QuickView_Client_Services_Data_DataStorage.$convertFromDbDateTime$1 = function(value) {
		return (ss.isNullOrUndefined(value) ? null : new Date(ss.unbox(value)));
	};
	$QuickView_Client_Services_Data_DataStorage.$convertToDbFormat = function(format, value) {
		var jsonString = (ss.isNullOrUndefined(value) ? null : JSON.stringify(value));
		var data;
		switch (format) {
			case 0:
			default: {
				throw new ss.ArgumentOutOfRangeException('format', 'Invalid value.', null, format);
			}
			case 1: {
				data = jsonString;
				break;
			}
			case 2: {
				if (ss.isNullOrEmptyString(jsonString)) {
					data = jsonString;
				}
				else {
					data = LZString.compressToUTF16(jsonString);
					$QuickView_Client_Services_Data_DataStorage.$log.trace(function() {
						return ss.formatString('[LZStringJson] Original size: {0}, Compressed size: {1}, Compressed bytes: {2}, Ratio: {3}%.', jsonString.length, data.length, data.length << 1, ss.round(data.length / jsonString.length * 100));
					});
				}
				break;
			}
		}
		return data;
	};
	$QuickView_Client_Services_Data_DataStorage.$convertFromDbFormat = function(T) {
		return function(format, data) {
			var jsonString;
			switch (format) {
				case 0:
				default: {
					throw new ss.ArgumentOutOfRangeException('format', 'Invalid value.', null, format);
				}
				case 1: {
					jsonString = data;
					break;
				}
				case 2: {
					if (ss.isNullOrEmptyString(data)) {
						jsonString = data;
					}
					else {
						jsonString = LZString.decompressFromUTF16(data);
					}
					break;
				}
			}
			return JSON.parse(jsonString);
		};
	};
	global.QuickView.Client.Services.Data.DataStorage = $QuickView_Client_Services_Data_DataStorage;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Data.TimeSeriesDataRetrieval
	var $QuickView_Client_Services_Data_TimeSeriesDataRetrieval = function() {
	};
	$QuickView_Client_Services_Data_TimeSeriesDataRetrieval.__typeName = 'QuickView.Client.Services.Data.TimeSeriesDataRetrieval';
	$QuickView_Client_Services_Data_TimeSeriesDataRetrieval.$ctor = function(timeSeriesID, date, data) {
		var $this = {};
		$this.T = null;
		$this.D = new Date(0);
		$this.A = null;
		JS.ArgumentHelper.notNullOrEmpty(timeSeriesID, 'timeSeriesID');
		$this.T = timeSeriesID;
		$this.D = date;
		$this.A = data;
		return $this;
	};
	$QuickView_Client_Services_Data_TimeSeriesDataRetrieval.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Services.Data.TimeSeriesDataRetrieval = $QuickView_Client_Services_Data_TimeSeriesDataRetrieval;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Data.TimeSeriesDataUpdate
	var $QuickView_Client_Services_Data_TimeSeriesDataUpdate = function() {
	};
	$QuickView_Client_Services_Data_TimeSeriesDataUpdate.__typeName = 'QuickView.Client.Services.Data.TimeSeriesDataUpdate';
	$QuickView_Client_Services_Data_TimeSeriesDataUpdate.$ctor = function(timeSeries, date, data) {
		var $this = {};
		$this.T = null;
		$this.D = new Date(0);
		$this.A = null;
		JS.ArgumentHelper.notNull(timeSeries, 'timeSeries');
		JS.ArgumentHelper.notNull(data, 'data');
		$this.T = timeSeries;
		$this.D = date;
		$this.A = data;
		return $this;
	};
	$QuickView_Client_Services_Data_TimeSeriesDataUpdate.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Services.Data.TimeSeriesDataUpdate = $QuickView_Client_Services_Data_TimeSeriesDataUpdate;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Data.WebSqlDatabase
	var $QuickView_Client_Services_Data_WebSqlDatabase = function() {
	};
	$QuickView_Client_Services_Data_WebSqlDatabase.__typeName = 'QuickView.Client.Services.Data.WebSqlDatabase';
	global.QuickView.Client.Services.Data.WebSqlDatabase = $QuickView_Client_Services_Data_WebSqlDatabase;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Data.WebSqlDatabaseExtensions
	var $QuickView_Client_Services_Data_WebSqlDatabaseExtensions = function() {
	};
	$QuickView_Client_Services_Data_WebSqlDatabaseExtensions.__typeName = 'QuickView.Client.Services.Data.WebSqlDatabaseExtensions';
	$QuickView_Client_Services_Data_WebSqlDatabaseExtensions.$upgrade = function(database, upgrades) {
		JS.ArgumentHelper.notNull(database, 'database');
		JS.ArgumentHelper.notNull(upgrades, 'upgrades');
		var taskCompletionSource = new ss.TaskCompletionSource();
		$QuickView_Client_Services_Data_WebSqlDatabaseExtensions.$upgrade$1(database, upgrades, taskCompletionSource);
		return taskCompletionSource.task;
	};
	$QuickView_Client_Services_Data_WebSqlDatabaseExtensions.$upgrade$1 = function(database, upgrades, taskCompletionSource) {
		JS.ArgumentHelper.notNull(database, 'database');
		JS.ArgumentHelper.notNull(upgrades, 'upgrades');
		JS.ArgumentHelper.notNull(taskCompletionSource, 'taskCompletionSource');
		$QuickView_Client_Services_Data_WebSqlDatabaseExtensions.$log.trace('[Upgrade]');
		var version = ss.coalesce(database.version, '');
		// Assume that a "null" value is an empty string. "WebSqlDatabaseUpgrade" does not allow null for a version number.
		$QuickView_Client_Services_Data_WebSqlDatabaseExtensions.$log.trace(function() {
			return ss.formatString("Current database version: '{0}'.", version);
		});
		var upgrade = Enumerable.from(upgrades).firstOrDefault(function(x) {
			return ss.compareStrings(x.oldVersion, version, true) === 0;
		}, ss.getDefaultValue($QuickView_Client_Services_Data_$WebSqlDatabaseUpgrade));
		if (ss.isNullOrUndefined(upgrade)) {
			$QuickView_Client_Services_Data_WebSqlDatabaseExtensions.$log.trace('No more upgrades found.');
			// The database is upgraded to the latest version
			taskCompletionSource.setResult(null);
		}
		else {
			$QuickView_Client_Services_Data_WebSqlDatabaseExtensions.$log.trace(function() {
				return ss.formatString('Upgrading from v{0} to v{1}.', upgrade.oldVersion, upgrade.newVersion);
			});
			database.changeVersion(upgrade.oldVersion, upgrade.newVersion, function(x1) {
				upgrade.method(x1);
				return true;
			}, function(x2) {
				$QuickView_Client_Services_Data_WebSqlDatabaseExtensions.$log.trace(function() {
					return ss.formatString('Upgrade error: {0}', x2.message);
				});
				JS.Threading.TaskCompletionSourceExtensions.setExceptionAsync(Object).call(null, taskCompletionSource, new $QuickView_Client_Services_Data_WebSqlException.$ctor1(x2.message));
				return true;
			}, function() {
				$QuickView_Client_Services_Data_WebSqlDatabaseExtensions.$log.trace('Upgrade successful. Proceeding with the next upgrade.');
				// Do the next upgrade
				window.setTimeout(function() {
					$QuickView_Client_Services_Data_WebSqlDatabaseExtensions.$upgrade$1(database, upgrades, taskCompletionSource);
				});
			});
		}
	};
	$QuickView_Client_Services_Data_WebSqlDatabaseExtensions.transaction = function(TResult) {
		return function(db, callback) {
			JS.ArgumentHelper.notNull(db, 'db');
			var taskCompletionSource = new ss.TaskCompletionSource();
			var webSqlTransaction = null;
			db.transaction(function(tran) {
				webSqlTransaction = new (ss.makeGenericType($QuickView_Client_Services_Data_WebSqlTransaction$1, [TResult]))(tran);
				callback(webSqlTransaction);
				return true;
			}, function(error) {
				// Execute the method async in order to return control to WebSQL
				JS.Threading.TaskCompletionSourceExtensions.setExceptionAsync(TResult).call(null, taskCompletionSource, new $QuickView_Client_Services_Data_WebSqlException.$ctor1(error.message));
				return true;
			}, function() {
				// Execute the method async in order to return control to WebSQL
				JS.Threading.TaskCompletionSourceExtensions.setResultAsync(TResult).call(null, taskCompletionSource, webSqlTransaction.result);
			});
			return taskCompletionSource.task;
		};
	};
	$QuickView_Client_Services_Data_WebSqlDatabaseExtensions.readTransaction = function(TResult) {
		return function(db, callback) {
			JS.ArgumentHelper.notNull(db, 'db');
			var taskCompletionSource = new ss.TaskCompletionSource();
			var webSqlTransaction = null;
			db.readTransaction(function(tran) {
				webSqlTransaction = new (ss.makeGenericType($QuickView_Client_Services_Data_WebSqlTransaction$1, [TResult]))(tran);
				callback(webSqlTransaction);
				return true;
			}, function(error) {
				// Execute the method async in order to return control to WebSQL
				JS.Threading.TaskCompletionSourceExtensions.setExceptionAsync(TResult).call(null, taskCompletionSource, new $QuickView_Client_Services_Data_WebSqlException.$ctor1(error.message));
				return true;
			}, function() {
				// Execute the method async in order to return control to WebSQL
				JS.Threading.TaskCompletionSourceExtensions.setResultAsync(TResult).call(null, taskCompletionSource, webSqlTransaction.result);
			});
			return taskCompletionSource.task;
		};
	};
	global.QuickView.Client.Services.Data.WebSqlDatabaseExtensions = $QuickView_Client_Services_Data_WebSqlDatabaseExtensions;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Data.WebSqlException
	var $QuickView_Client_Services_Data_WebSqlException = function() {
		ss.Exception.call(this);
	};
	$QuickView_Client_Services_Data_WebSqlException.__typeName = 'QuickView.Client.Services.Data.WebSqlException';
	$QuickView_Client_Services_Data_WebSqlException.$ctor1 = function(message) {
		ss.Exception.call(this, message);
	};
	$QuickView_Client_Services_Data_WebSqlException.$ctor2 = function(message, inner) {
		ss.Exception.call(this, message, inner);
	};
	global.QuickView.Client.Services.Data.WebSqlException = $QuickView_Client_Services_Data_WebSqlException;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Data.WebSqlTransaction
	var $QuickView_Client_Services_Data_WebSqlTransaction$1 = function(TResult) {
		var $type = function(transaction) {
			this.result = ss.getDefaultValue(TResult);
			this.$_transaction = null;
			JS.ArgumentHelper.notNull(transaction, 'transaction');
			this.$_transaction = transaction;
		};
		ss.registerGenericClassInstance($type, $QuickView_Client_Services_Data_WebSqlTransaction$1, [TResult], {
			executeSql: function(sql, arguments1) {
				this.executeSql$1(sql, arguments1, null);
			},
			executeSql$1: function(sql, arguments1, callback) {
				JS.ArgumentHelper.notNullOrEmpty(sql, 'sql');
				this.$_transaction.executeSql(sql, arguments1, function(t, resultSet) {
					if (!ss.staticEquals(callback, null)) {
						callback(resultSet);
					}
					return true;
				}, null);
			}
		}, function() {
			return null;
		}, function() {
			return [];
		});
		return $type;
	};
	$QuickView_Client_Services_Data_WebSqlTransaction$1.__typeName = 'QuickView.Client.Services.Data.WebSqlTransaction$1';
	ss.initGenericClass($QuickView_Client_Services_Data_WebSqlTransaction$1, $asm, 1);
	global.QuickView.Client.Services.Data.WebSqlTransaction$1 = $QuickView_Client_Services_Data_WebSqlTransaction$1;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Users.UserLoginSettings
	var $QuickView_Client_Services_Users_UserLoginSettings = function() {
	};
	$QuickView_Client_Services_Users_UserLoginSettings.__typeName = 'QuickView.Client.Services.Users.UserLoginSettings';
	$QuickView_Client_Services_Users_UserLoginSettings.createInstance = function() {
		return $QuickView_Client_Services_Users_UserLoginSettings.$ctor();
	};
	$QuickView_Client_Services_Users_UserLoginSettings.$ctor = function() {
		var $this = {};
		$this.userName = null;
		$this.loginResponse = null;
		return $this;
	};
	$QuickView_Client_Services_Users_UserLoginSettings.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Services.Users.UserLoginSettings = $QuickView_Client_Services_Users_UserLoginSettings;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Users.UserLogOutPolicy
	var $QuickView_Client_Services_Users_UserLogOutPolicy = function() {
	};
	$QuickView_Client_Services_Users_UserLogOutPolicy.__typeName = 'QuickView.Client.Services.Users.UserLogOutPolicy';
	global.QuickView.Client.Services.Users.UserLogOutPolicy = $QuickView_Client_Services_Users_UserLogOutPolicy;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Services.Users.UserService
	var $QuickView_Client_Services_Users_UserService = function(apiClient, settingsStorage, chartDataStorage) {
		this.$_apiClient = null;
		this.$_settingsStorage = null;
		this.$_chartDataStorage = null;
		JS.ArgumentHelper.notNull(apiClient, 'apiClient');
		JS.ArgumentHelper.notNull(settingsStorage, 'settingsStorage');
		JS.ArgumentHelper.notNull(chartDataStorage, 'chartDataStorage');
		this.$_apiClient = apiClient;
		this.$_settingsStorage = settingsStorage;
		this.$_chartDataStorage = chartDataStorage;
	};
	$QuickView_Client_Services_Users_UserService.__typeName = 'QuickView.Client.Services.Users.UserService';
	global.QuickView.Client.Services.Users.UserService = $QuickView_Client_Services_Users_UserService;
	ss.initClass($QuickView_$Client_Services_Charts_$MemoryDataCache$TimeSeriesCacheData, $asm, {});
	ss.initClass($QuickView_$Client_Services_Charts_IndicatorDataProvider$LoadedData, $asm, {});
	ss.initClass($QuickView_$Client_Services_Charts_IndicatorDataWorker$TimeSeriesBatchItem, $asm, {});
	ss.initClass($QuickView_Client_Services_$ModelExtensions, $asm, {});
	ss.initClass($QuickView_Client_Services_Worker, $asm, {
		add_complete: function(value) {
			this.$1$CompleteField = ss.delegateCombine(this.$1$CompleteField, value);
		},
		remove_complete: function(value) {
			this.$1$CompleteField = ss.delegateRemove(this.$1$CompleteField, value);
		},
		onComplete: function(e) {
			JS.EventExtensions.fire(this.$1$CompleteField, this, e);
		},
		start: function() {
			if (this.status !== 0) {
				throw new ss.InvalidOperationException('The worker is already started or has completed its work.');
			}
			window.setTimeout(ss.mkdel(this, this.run));
			this.status = 1;
		},
		run: null,
		stop: null,
		completeSelf: function() {
			if (this.$_disposing) {
				// Ignore the call since the dispose method is called
				return;
			}
			if (this.status === 1) {
				this.status = 2;
				this.onComplete(ss.EventArgs.Empty);
			}
		},
		dispose: function() {
			if (this.status === 0) {
				this.status = 2;
			}
			else if (this.status === 1) {
				this.$_disposing = true;
				this.stop();
				this.status = 2;
				this.onComplete(ss.EventArgs.Empty);
			}
		}
	}, null, [ss.IDisposable]);
	ss.initEnum($QuickView_Client_Services_WorkerStatus, $asm, { notStarted: 0, running: 1, stopped: 2 });
	ss.initClass($QuickView_Client_Services_Applications_$VersionChecker, $asm, {
		add_$versionChanged: function(value) {
			this.$1$VersionChangedField = ss.delegateCombine(this.$1$VersionChangedField, value);
		},
		remove_$versionChanged: function(value) {
			this.$1$VersionChangedField = ss.delegateRemove(this.$1$VersionChangedField, value);
		},
		$onVersionChanged: function(e) {
			JS.EventExtensions.fire$2($QuickView_Client_Services_Applications_VersionEventArgs).call(null, this.$1$VersionChangedField, this, e);
		},
		get_$connectivityStatus: function() {
			return this.$_connectionStatus;
		},
		set_$connectivityStatus: function(value) {
			if (value !== this.$_connectionStatus) {
				this.$_connectionStatus = value;
				this.$onConnectivityStatusChanged(ss.EventArgs.Empty);
			}
		},
		add_$connectivityStatusChanged: function(value) {
			this.$1$ConnectivityStatusChangedField = ss.delegateCombine(this.$1$ConnectivityStatusChangedField, value);
		},
		remove_$connectivityStatusChanged: function(value) {
			this.$1$ConnectivityStatusChangedField = ss.delegateRemove(this.$1$ConnectivityStatusChangedField, value);
		},
		$onConnectivityStatusChanged: function(e) {
			JS.EventExtensions.fire(this.$1$ConnectivityStatusChangedField, this, e);
		},
		add_$downloadProgress: function(value) {
			this.$1$DownloadProgressField = ss.delegateCombine(this.$1$DownloadProgressField, value);
		},
		remove_$downloadProgress: function(value) {
			this.$1$DownloadProgressField = ss.delegateRemove(this.$1$DownloadProgressField, value);
		},
		$onDownloadProgress: function(e) {
			JS.EventExtensions.fire$2($QuickView_Client_Services_Applications_$ApplicationDownloadProgressEventArgs).call(null, this.$1$DownloadProgressField, this, e);
		},
		add_$downloadComplete: function(value) {
			this.$1$DownloadCompleteField = ss.delegateCombine(this.$1$DownloadCompleteField, value);
		},
		remove_$downloadComplete: function(value) {
			this.$1$DownloadCompleteField = ss.delegateRemove(this.$1$DownloadCompleteField, value);
		},
		$onDownloadComplete: function(e) {
			JS.EventExtensions.fire(this.$1$DownloadCompleteField, this, e);
		},
		$start: function(seconds) {
			JS.ArgumentHelper.positive(seconds, 'seconds');
			// Stop checks if already started
			this.$stop();
			// Start checks
			this.$_intervalID = window.setInterval(ss.mkdel(this, this.$checkVersion), seconds * 1000);
			window.setTimeout(ss.mkdel(this, this.$checkVersion), 1000);
			// Check for a new version initally
			this.$onStarted();
		},
		$stop: function() {
			if (ss.isNullOrUndefined(this.$_intervalID)) {
				return;
			}
			window.clearInterval(ss.unbox(this.$_intervalID));
			this.$_intervalID = null;
			this.$onStopped();
		},
		$onStarted: function() {
		},
		$onStopped: function() {
		},
		$checkVersion: null
	});
	ss.initClass($QuickView_Client_Services_Applications_$AppCacheVersionChecker, $asm, {
		$checkVersion: function() {
			if (ss.isNullOrUndefined(window.applicationCache)) {
				// Not supported
				return;
			}
			if (window.applicationCache.status === 2 || window.applicationCache.status === 3 || window.applicationCache.status === 0) {
				// Busy or not yet cached
			}
			else {
				// Check for a new version
				window.applicationCache.update();
			}
		},
		$onStarted: function() {
			$QuickView_Client_Services_Applications_$VersionChecker.prototype.$onStarted.call(this);
			// Attach to events
			// Reference: http://www.html5rocks.com/en/tutorials/appcache/beginner/
			// Fires on the first download; sometimes fired by Google Chrome and iOS Safari without
			// firing the "Updateready" event.
			window.applicationCache.addEventListener('cached', ss.mkdel(this, this.$onUpdateReady));
			// Fires after an update is downloaded for a cached version.
			window.applicationCache.addEventListener('updateready', ss.mkdel(this, this.$onUpdateReady));
			window.applicationCache.addEventListener('progress', ss.mkdel(this, this.$onProgress));
			window.applicationCache.addEventListener('noupdate', ss.mkdel(this, this.$onNoupdate));
			window.applicationCache.addEventListener('error', ss.mkdel(this, this.$onError));
		},
		$onStopped: function() {
			$QuickView_Client_Services_Applications_$VersionChecker.prototype.$onStopped.call(this);
			// Detach from events
			window.applicationCache.removeEventListener('cached', ss.mkdel(this, this.$onUpdateReady));
			window.applicationCache.removeEventListener('updateready', ss.mkdel(this, this.$onUpdateReady));
			window.applicationCache.removeEventListener('progress', ss.mkdel(this, this.$onProgress));
			window.applicationCache.removeEventListener('noupdate', ss.mkdel(this, this.$onNoupdate));
			window.applicationCache.removeEventListener('error', ss.mkdel(this, this.$onError));
			if (ss.isValue(this.$_request)) {
				this.$_request.abort();
				this.$_request = null;
			}
		},
		$onProgress: function(e) {
			this.set_$connectivityStatus(0);
			var data = e;
			var totalFileCount = ss.unbox(ss.cast(data.total, ss.Int32));
			var loadedFileCount = ss.unbox(ss.cast(data.loaded, ss.Int32));
			var progress;
			if (totalFileCount === 0) {
				progress = 1;
			}
			else {
				progress = loadedFileCount / totalFileCount;
			}
			$QuickView_Client_Services_Applications_$VersionChecker.prototype.$onDownloadProgress.call(this, new $QuickView_Client_Services_Applications_$ApplicationDownloadProgressEventArgs(progress));
		},
		$onError: function(e) {
			this.set_$connectivityStatus(1);
		},
		$onNoupdate: function(e) {
			this.set_$connectivityStatus(0);
		},
		$onUpdateReady: function(e) {
			this.set_$connectivityStatus(0);
			// Try to get the version of the application
			// Add a random argument to force a refresh of the file
			var url = this.$_url;
			if (ss.isNullOrUndefined(url)) {
				this.$onDownloadComplete(ss.EventArgs.Empty);
				this.$onVersionChanged(new $QuickView_Client_Services_Applications_VersionEventArgs(QuickView.Client.Models.Applications.VersionInfo.unknown));
			}
			else {
				this.$_request = $QuickView_Client_Services_Applications_$VersionUtils.$getVersionFromServer(this.$_url, this.$_versionType, ss.mkdel(this, function(version) {
					// Raise an event
					// "version" is null if getting the version from the server fails
					this.$onDownloadComplete(ss.EventArgs.Empty);
					this.$onVersionChanged(new $QuickView_Client_Services_Applications_VersionEventArgs(version || QuickView.Client.Models.Applications.VersionInfo.unknown));
				}));
			}
		}
	}, $QuickView_Client_Services_Applications_$VersionChecker);
	$QuickView_Client_Services_Applications_$AppCacheVersionChecker.$ctor1.prototype = $QuickView_Client_Services_Applications_$AppCacheVersionChecker.prototype;
	ss.initClass($QuickView_Client_Services_Applications_$ApplicationDownloadProgressEventArgs, $asm, {}, ss.EventArgs);
	ss.initClass($QuickView_Client_Services_Applications_$UrlVersionChecker, $asm, {
		$ignoreVersionNumber: function(number) {
			JS.ArgumentHelper.notNullOrEmpty(number, 'number');
			if (ss.isNullOrUndefined(this.$_ignoreVersionList)) {
				this.$_ignoreVersionList = [];
			}
			if (false === ss.contains(this.$_ignoreVersionList, number)) {
				this.$_ignoreVersionList.push(number);
			}
		},
		$checkVersion: function() {
			this.$_request = $QuickView_Client_Services_Applications_$VersionUtils.$getVersionFromServer(this.$_url, this.$_versionType, ss.mkdel(this, function(version) {
				if (ss.isNullOrUndefined(version)) {
					return;
				}
				if (ss.isValue(this.$_ignoreVersionList) && ss.contains(this.$_ignoreVersionList, version.number)) {
					// The version should be ignored
					return;
				}
				if (ss.isValue(this.$_oldVersion) && !ss.referenceEquals(this.$_oldVersion, QuickView.Client.Models.Applications.VersionInfo.unknown)) {
					// Check if the current and the new version are the same. Both the version number and the
					// release time should be compated. The release time can be different if files
					// on the server have been updated without a formal new version release.
					if (ss.referenceEquals(this.$_oldVersion.number, version.number) && ss.staticEquals(this.$_oldVersion.releaseTime, version.releaseTime)) {
						// The version is the same
						return;
					}
				}
				// Raise an event
				this.$onVersionChanged(new $QuickView_Client_Services_Applications_VersionEventArgs(version));
			}));
			// Update the connection status based on if the request succeeded
			this.$_request.done(ss.mkdel(this, function() {
				this.set_$connectivityStatus(0);
			}));
			this.$_request.fail(ss.mkdel(this, function() {
				this.set_$connectivityStatus(1);
			}));
		},
		$onStopped: function() {
			$QuickView_Client_Services_Applications_$VersionChecker.prototype.$onStopped.call(this);
			if (ss.isValue(this.$_request)) {
				this.$_request.abort();
				this.$_request = null;
			}
		}
	}, $QuickView_Client_Services_Applications_$VersionChecker);
	ss.initClass($QuickView_Client_Services_Applications_$VersionData, $asm, {});
	ss.initEnum($QuickView_Client_Services_Applications_$VersionType, $asm, { $text: 0, $json: 1 });
	ss.initClass($QuickView_Client_Services_Applications_$VersionUtils, $asm, {});
	ss.initClass($QuickView_Client_Services_Applications_ApplicationUpdateWorker, $asm, {
		add_newVersion: function(value) {
			this.$2$NewVersionField = ss.delegateCombine(this.$2$NewVersionField, value);
		},
		remove_newVersion: function(value) {
			this.$2$NewVersionField = ss.delegateRemove(this.$2$NewVersionField, value);
		},
		$onNewVersion: function(e) {
			JS.EventExtensions.fireAsync$2($QuickView_Client_Services_Applications_VersionEventArgs).call(null, this.$2$NewVersionField, this, e);
		},
		run: function() {
			if (QuickView.Client.Common.AppEnvironment.get_isApplicationCached()) {
				this.$_versionChecker = new $QuickView_Client_Services_Applications_$AppCacheVersionChecker.$ctor1('Version.json', 1);
			}
			else {
				this.$_versionChecker = new $QuickView_Client_Services_Applications_$UrlVersionChecker(QuickView.Client.Common.AppEnvironment.version, 'Version.json', 1);
			}
			this.$_versionChecker.add_$versionChanged(ss.mkdel(this, this.$versionChecker_VersionChanged));
			this.$_versionChecker.add_$connectivityStatusChanged(ss.mkdel(this, this.$versionChecker_ConnectivityStatusChanged));
			this.$_versionChecker.add_$downloadProgress(ss.mkdel(this, this.$versionChecker_DownloadProgress));
			this.$_versionChecker.add_$downloadComplete(ss.mkdel(this, this.$versionChecker_DownloadComplete));
			// Enable new version checks
			this.$_versionChecker.$start(QuickView.Client.Common.AppEnvironment.config.get_newVersionCheckInterval());
		},
		stop: function() {
			this.$_versionChecker.$stop();
			this.$_versionChecker = null;
		},
		$versionChecker_VersionChanged: function(sender, e) {
			// Ignore the version in future checks. This is done for two reasons:
			// 1. To avoid showing the dialog again and again if versions are checked in less than 30s (the timeout of the dialog).
			//    Otherwise, the old dialog will be closed and a new dialog will be open before it expires.
			// 2. There is no way to detect if the user has closed the dialog with the "X" button and so the version should be
			//    ignored.
			if (!ss.referenceEquals(e.version, QuickView.Client.Models.Applications.VersionInfo.unknown) && ss.isInstanceOfType(this.$_versionChecker, $QuickView_Client_Services_Applications_$UrlVersionChecker)) {
				ss.cast(this.$_versionChecker, $QuickView_Client_Services_Applications_$UrlVersionChecker).$ignoreVersionNumber(e.version.number);
			}
			QuickView.Client.Common.AppEnvironment.latestVersion = e.version;
			this.$onNewVersion(e);
		},
		$versionChecker_ConnectivityStatusChanged: function(sender, e) {
			ss.cast(QuickView.Client.Common.AppContext.application, $QuickView_Client_Services_Applications_IApplicationServiceAccess).setConnectivityStatus(this.$_versionChecker.get_$connectivityStatus());
		},
		$versionChecker_DownloadProgress: function(sender, e) {
			ss.cast(QuickView.Client.Common.AppContext.application, $QuickView_Client_Services_Applications_IApplicationServiceAccess).setDownloadProgress(e.$progress);
		},
		$versionChecker_DownloadComplete: function(sender, e) {
			ss.cast(QuickView.Client.Common.AppContext.application, $QuickView_Client_Services_Applications_IApplicationServiceAccess).onDownloadComplete();
		}
	}, $QuickView_Client_Services_Worker, [ss.IDisposable]);
	ss.initInterface($QuickView_Client_Services_Applications_IApplicationServiceAccess, $asm, { setConnectivityStatus: null, setDownloadProgress: null, onDownloadComplete: null });
	ss.initClass($QuickView_Client_Services_Applications_VersionEventArgs, $asm, {}, ss.EventArgs);
	ss.initClass($QuickView_Client_Services_Caching_CacheItem, $asm, {});
	ss.initClass($QuickView_Client_Services_Caching_ObjectCache, $asm, {
		set: function(key, value) {
			JS.ArgumentHelper.notNullOrEmpty(key, 'key');
			this.set$1(key, value, 0);
		},
		set$1: function(key, value, timeout) {
			JS.ArgumentHelper.notNullOrEmpty(key, 'key');
			var cacheItem = $QuickView_Client_Services_Caching_CacheItem.$ctor(value, timeout);
			this.$_dict.set_item(key, cacheItem);
			if (ss.isNullOrUndefined(this.$_purgeTaskID)) {
				this.$_purgeTaskID = window.setTimeout(ss.mkdel(this, this.$privatePurge), $QuickView_Client_Services_Caching_ObjectCache.$purgeInterval);
			}
		},
		get: function(key) {
			JS.ArgumentHelper.notNullOrEmpty(key, 'key');
			var cacheItem = {};
			if (this.$_dict.tryGetValue(key, cacheItem)) {
				$QuickView_Client_Services_Caching_CacheItem.$onAccess(cacheItem.$);
			}
			return (ss.isNullOrUndefined(cacheItem.$) ? null : cacheItem.$.value);
		},
		get$1: function(T) {
			return function(key) {
				var value = this.get(key);
				// Saltarelle does not permit casting an object to a generic type parameter that is marked with the
				// "SerializableAttribute". Therefore, direct casing must be used.
				// CAUTION Casting to generic type parameter has been a source of several bugs (runtime exceptions).
				// Take notice if similar code is used anywhere in the application.
				return value;
			};
		},
		contains: function(key) {
			JS.ArgumentHelper.notNullOrEmpty(key, 'key');
			return this.$_dict.containsKey(key);
		},
		remove: function(key) {
			JS.ArgumentHelper.notNullOrEmpty(key, 'key');
			this.$_dict.remove(key);
		},
		purge: function() {
			var keyList = [];
			var $t1 = this.$_dict.getEnumerator();
			try {
				while ($t1.moveNext()) {
					var item = $t1.current();
					if ($QuickView_Client_Services_Caching_CacheItem.$hasExpired(item.value)) {
						keyList.push(item.key);
					}
				}
			}
			finally {
				$t1.dispose();
			}
			for (var $t2 = 0; $t2 < keyList.length; $t2++) {
				var key = keyList[$t2];
				this.$_dict.remove(key);
			}
		},
		$privatePurge: function() {
			this.purge();
			if (this.$_dict.get_count() > 0) {
				this.$_purgeTaskID = window.setTimeout(ss.mkdel(this, this.$privatePurge), $QuickView_Client_Services_Caching_ObjectCache.$purgeInterval);
			}
			else {
				this.$_purgeTaskID = null;
			}
		},
		dispose: function() {
			if (ss.isValue(this.$_purgeTaskID)) {
				window.clearTimeout(ss.unbox(this.$_purgeTaskID));
				this.$_purgeTaskID = null;
			}
		}
	}, null, [ss.IDisposable]);
	ss.initClass($QuickView_Client_Services_Charts_$IndicatorDataUtils, $asm, {});
	ss.initClass($QuickView_Client_Services_Charts_$LocalUtils, $asm, {});
	ss.initClass($QuickView_Client_Services_Charts_$MemoryDataCache, $asm, {
		$updateTimeSeriesData: function(timeSeriesID, date, dataPoints) {
			JS.ArgumentHelper.notNullOrEmpty(timeSeriesID, 'timeSeriesID');
			JS.ArgumentHelper.notNull(dataPoints, 'dataPoints');
			var data = this.$getTimeSeriesCacheData(timeSeriesID, date, true);
			data.N = dataPoints;
			data.P = null;
		},
		$getTimeSeriesData: function(timeSeriesID, date) {
			JS.ArgumentHelper.notNullOrEmpty(timeSeriesID, 'timeSeriesID');
			var data = this.$getTimeSeriesCacheData(timeSeriesID, date, false);
			if (ss.isNullOrUndefined(data)) {
				return null;
			}
			else {
				return data.N;
			}
		},
		$getTimeSeriesDataPointData: function(timeSeriesID, metaResolution, date) {
			JS.ArgumentHelper.notNullOrEmpty(timeSeriesID, 'timeSeriesID');
			var data = this.$getTimeSeriesCacheData(timeSeriesID, date.toDateTime(), false);
			if (ss.isNullOrUndefined(data)) {
				return null;
			}
			else {
				if (ss.isNullOrUndefined(data.P)) {
					var nativeData = data.N;
					var dataPointList = $QuickView_Client_Services_Charts_$IndicatorDataUtils.$createApiDataPoints(nativeData.V, metaResolution, date);
					data.P = $QuickView_Client_Services_Data_DataRecord.create(Array).call(null, nativeData.T, nativeData.U, dataPointList);
				}
				return data.P;
			}
		},
		$getTimeSeriesCacheData: function(timeSeriesID, date, createIfNotExisting) {
			JS.ArgumentHelper.notNullOrEmpty(timeSeriesID, 'timeSeriesID');
			var timeSeriesDataCollection = this.$getTimeSeriesCacheDataCollection(timeSeriesID);
			var key = date.valueOf();
			var data = timeSeriesDataCollection[key];
			if (ss.isNullOrUndefined(data) && createIfNotExisting) {
				timeSeriesDataCollection[key] = data = $QuickView_$Client_Services_Charts_$MemoryDataCache$TimeSeriesCacheData.$ctor();
			}
			return data;
		},
		$getTimeSeriesCacheDataCollection: function(timeSeriesID) {
			JS.ArgumentHelper.notNullOrEmpty(timeSeriesID, 'timeSeriesID');
			var key = timeSeriesID.toLowerCase();
			var timeSeriesDataCollection = this.$_timeSeriesDataDict[key];
			if (ss.isNullOrUndefined(timeSeriesDataCollection)) {
				this.$_timeSeriesDataDict[key] = timeSeriesDataCollection = {};
			}
			return timeSeriesDataCollection;
		}
	});
	ss.initClass($QuickView_Client_Services_Charts_$RefCount, $asm, {});
	ss.initClass($QuickView_Client_Services_Charts_ChartDataEvents, $asm, {});
	ss.initClass($QuickView_Client_Services_Charts_ChartDataEvents$Metadata, $asm, {});
	ss.initClass($QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries, $asm, {});
	ss.initClass($QuickView_Client_Services_Charts_ChartDataStorage, $asm, {
		initialize: function() {
			var $state = 0, $tcs = new ss.TaskCompletionSource(), $t1, $t2, $t3, item, $t4, $t5, timeSeriesDataList, $t6, item1;
			var $sm = ss.mkdel(this, function() {
				try {
					$sm1:
					for (;;) {
						switch ($state) {
							case 0: {
								$state = -1;
								if (ss.isValue(this.$_dataCache)) {
									throw new ss.InvalidOperationException('This method was already called. It can be called only once.');
								}
								this.$_dataCache = new $QuickView_Client_Services_Charts_$MemoryDataCache();
								// Load metadata
								$t1 = this.$_dataStorage.getChartMetadata();
								$state = 1;
								$t1.continueWith($sm);
								return;
							}
							case 1: {
								$state = -1;
								this.$_chartMetadata = $t1.getAwaitedResult();
								// Load time series timestamps
								$t2 = this.$_dataStorage.getAllTimeSeriesTimestamps();
								$state = 2;
								$t2.continueWith($sm);
								return;
							}
							case 2: {
								$state = -1;
								this.$_timeSeriesTimestampList = $t2.getAwaitedResult();
								this.$_timeSeriesTimestampDict = {};
								$t3 = ss.getEnumerator(this.$_timeSeriesTimestampList);
								try {
									while ($t3.moveNext()) {
										item = $t3.current();
										this.$_timeSeriesTimestampDict[item.I.toLowerCase()] = item;
									}
								}
								finally {
									$t3.dispose();
								}
								// Delete old data
								$t4 = this.$_dataStorage.purgeOldData();
								$state = 3;
								$t4.continueWith($sm);
								return;
							}
							case 3: {
								$state = -1;
								$t4.getAwaitedResult();
								// Load time series data
								$t5 = this.$_dataStorage.getAllTimeSeriesData();
								$state = 4;
								$t5.continueWith($sm);
								return;
							}
							case 4: {
								$state = -1;
								timeSeriesDataList = $t5.getAwaitedResult();
								$t6 = ss.getEnumerator(timeSeriesDataList);
								try {
									while ($t6.moveNext()) {
										item1 = $t6.current();
										this.$_dataCache.$updateTimeSeriesData(item1.T, item1.D, item1.A);
									}
								}
								finally {
									$t6.dispose();
								}
								$state = -1;
								break $sm1;
							}
							default: {
								break $sm1;
							}
						}
					}
					$tcs.setResult(null);
				}
				catch ($t7) {
					$tcs.setException(ss.Exception.wrap($t7));
				}
			});
			$sm();
			return $tcs.task;
		},
		$checkInitialized: function() {
			if (ss.isNullOrUndefined(this.$_dataCache)) {
				throw new ss.InvalidOperationException("The 'Initialize' method is not called yet.");
			}
		},
		getChartMetadata: function() {
			$QuickView_Client_Services_Charts_ChartDataStorage.$log.trace('[GetChartMetadata]');
			this.$checkInitialized();
			return this.$_chartMetadata;
		},
		setChartMetadata: function (timestamp, metadata) {
			$QuickView_Client_Services_Charts_ChartDataStorage.$log.trace('[SetChartMetadata]');
			this.$checkInitialized();
			// Cache the metadata locally
			this.$_chartMetadata = $QuickView_Client_Services_Data_DataRecord.create(QuickView.Client.Models.Charts.ChartMetadata).call(null, timestamp, new Date(), metadata);
			$QuickView_Client_Services_Charts_ChartDataEvents$Metadata.$onChanged(this, ss.EventArgs.Empty);
			return this.$_dataStorage.setChartMetadata(timestamp, metadata);
		},
		setChartMetadataTimestamp: function(timestamp) {
			$QuickView_Client_Services_Charts_ChartDataStorage.$log.trace('[SetChartMetadataTimestamp]');
			this.$checkInitialized();
			return this.$_dataStorage.setChartMetadataTimestamp(timestamp);
		},
		getAllTimeSeriesTimestamps: function() {
			this.$checkInitialized();
			return this.$_timeSeriesTimestampList;
		},
		getTimeSeriesTimestamp: function(timeSeries) {
			JS.ArgumentHelper.notNull(timeSeries, 'timeSeries');
			this.$checkInitialized();
			return this.$_timeSeriesTimestampDict[QuickView.Client.Models.Charts.TimeSeries.idLower(timeSeries)];
		},
		getTimeSeriesData: function(timeSeries, date) {
			JS.ArgumentHelper.notNull(timeSeries, 'timeSeries');
			this.$checkInitialized();
			var timeSeriesData = this.$_dataCache.$getTimeSeriesDataPointData(timeSeries.I, timeSeries.M, date);
			if (ss.isValue(timeSeriesData)) {
				var previousDate = QuickView.Client.Algorithms.TimeExtensions.advanceTime$3(date, timeSeries.M, -1);
				var previousTimeSeriesData = this.$_dataCache.$getTimeSeriesDataPointData(timeSeries.I, timeSeries.M, previousDate);
				var prevPeriodDataPoint;
				if (ss.isValue(previousTimeSeriesData) && previousTimeSeriesData.V.length > 0) {
					prevPeriodDataPoint = previousTimeSeriesData.V[previousTimeSeriesData.V.length - 1];
				}
				else {
					prevPeriodDataPoint = null;
				}
				return $QuickView_Client_Services_Charts_TimeSeriesDataPointRetrieval.$ctor(timeSeries, date, timeSeriesData, prevPeriodDataPoint);
			}
			else {
				return null;
			}
		},
		updateMultipleTimeSeriesData: function(list) {
			$QuickView_Client_Services_Charts_ChartDataStorage.$log.trace('[UpdateMultipleTimeSeriesData]');
			this.$checkInitialized();
			this.$privateUpdateMultipleTimeSeriesData(list);
		},
		get_isDataPending: function() {
			return ss.isValue(this.$_dataUpdateQueue) && this.$_dataUpdateQueue.length > 0;
		},
		$privateUpdateMultipleTimeSeriesData: function(list) {
			var $state = 0, newDataUpdateList, newTimestampList, $t1, item, $t2, update, existingData, isMergeRequired, dataPointList, mergeDataPointList, $t3, updateInterval, dataRecord, lastDataPointTime, dataUpdate, newTimestamp, eventRaisedDict, $t4, item1, key, dataUpdateQueue, timestampUpdateQueue, count, $t5, itemCount, $t6, $t7;
			var $sm = ss.mkdel(this, function() {
				var $doFinally = true;
				$sm1:
				for (;;) {
					switch ($state) {
						case 0: {
							$state = -1;
							JS.ArgumentHelper.notNull(list, 'list');
							// CAUTION Since all updates of data and timestamps are done sync there is no
							// way for any of the data methods to be called in the mean time. Thus all changes will
							// be committed before any event if fired.
							// The list of data to be persisted to the database
							newDataUpdateList = [];
							// A list of new timestamps that must be stored in the database
							newTimestampList = [];
							$t1 = ss.getEnumerator(list);
							try {
								while ($t1.moveNext()) {
									item = $t1.current();
									$t2 = ss.getEnumerator(item.U);
									try {
										while ($t2.moveNext()) {
											update = $t2.current();
											existingData = this.$_dataCache.$getTimeSeriesData(item.T.I, update.D);
											// A data merge is required if there already is locally cached data for the same date
											// OR if multiple intervals have been received
											isMergeRequired = ss.isValue(existingData) && existingData.V.length > 0 || update.I.length > 0;
											if (isMergeRequired) {
												// Data needs to be merged
												mergeDataPointList = [];
												if (ss.isValue(existingData)) {
													ss.arrayAddRange(mergeDataPointList, existingData.V);
												}
												for ($t3 = 0; $t3 < update.I.length; $t3++) {
													updateInterval = update.I[$t3];
													$QuickView_Client_Services_Charts_ChartDataStorage.$mergeInterval(mergeDataPointList, updateInterval);
												}
												dataPointList = JS.Collections.CollectionExtensions.asArray(Number).call(null, mergeDataPointList);
											}
											else {
												dataPointList = update.I[0].P;
											}
											// Update the local memory cache
											// CAUTION It is very important to update the local memory cache as soon as data
											// has been merged/update. This way if there are multiple updates for the
											// same time series and date the previous data can be found in the memory cache
											// and data can be merged correctly 
											dataRecord = $QuickView_Client_Services_Data_DataRecord.create(Array).call(null, item.S, new Date(), dataPointList);
											this.$_dataCache.$updateTimeSeriesData(item.T.I, update.D, dataRecord);
											// The time of the last data point
											if (dataPointList.length > 0) {
												lastDataPointTime = $QuickView_Client_Services_Data_$TimeSeriesDataUtils.$convertTime(item.T.M, JS.DateTimeExtensions.toUtcExt(update.D), ss.Int32.trunc(dataPointList[dataPointList.length - 2])).toDateTime();
											}
											else {
												lastDataPointTime = null;
											}
											// CAUTION Even if there are multiple updates for the same time series and date
											// that code is still correct since the last timestamp will overwrite all previous
											// timestamps.
											dataUpdate = $QuickView_Client_Services_Data_TimeSeriesDataUpdate.$ctor(item.T, update.D, dataPointList);
											newDataUpdateList.push(dataUpdate);
											// CAUTION Even if there are multiple updates for the same time series and date
											// that code is still correct since the last timestamp will overwrite all previous
											// timestamps.
											newTimestamp = QuickView.Client.Models.Charts.TimeSeriesTimestamp.$ctor(item.T.I, item.S, new Date(), item.D, lastDataPointTime);
											newTimestampList.push(newTimestamp);
											// Update timestamp cache
											this.$_timeSeriesTimestampDict[newTimestamp.I.toLowerCase()] = newTimestamp;
										}
									}
									finally {
										$t2.dispose();
									}
								}
							}
							finally {
								$t1.dispose();
							}
							{
								// Avoid raising the same event more the once
								eventRaisedDict = {};
								for ($t4 = 0; $t4 < newDataUpdateList.length; $t4++) {
									item1 = newDataUpdateList[$t4];
									key = QuickView.Client.Models.Charts.TimeSeries.idLower(item1.T) + '|' + item1.D.valueOf();
									if (false === ss.keyExists(eventRaisedDict, key)) {
										eventRaisedDict[key] = JS.DBNull.get_value();
										$QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.$onDataChanged(this, new $QuickView_Client_Services_Charts_TimeSeriesDataChangedEventArgs(item1.T, item1.D));
									}
								}
							}
							if (ss.isNullOrUndefined(this.$_dataUpdateQueue)) {
								this.$_dataUpdateQueue = [];
							}
							if (ss.isNullOrUndefined(this.$_timestampUpdateQueue)) {
								this.$_timestampUpdateQueue = [];
							}
							// Only local variables can be accessed in a "Log.XXX" method because of the way formatting methods
							// are implemented. Inside a formatting method callback "this" refers to "Window" instead of
							// to the class that owns the field.
							dataUpdateQueue = this.$_dataUpdateQueue;
							timestampUpdateQueue = this.$_timestampUpdateQueue;
							{
								// CAUTION There is a bug in Saltarelle compiler 2.6.2 when "foreach" is used with "IList" or "IEnumerable"
								// after a call to asynchronous method wrapped in a "try-finally" block.
								// The workaround is to use "for" instead.
								// More information: https://github.com/Saltarelle/SaltarelleCompiler/issues/429
								count = dataUpdateQueue.length;
								ss.arrayAddRange(dataUpdateQueue, newDataUpdateList);
								ss.arrayAddRange(timestampUpdateQueue, newTimestampList);
								$QuickView_Client_Services_Charts_ChartDataStorage.$log.trace(function() {
									return ss.formatString('[PrivateUpdateMultipleTimeSeriesData] Added {0} items to the queue.', dataUpdateQueue.length - count);
								});
							}
							if (this.$_isPrivateUpdateMultipleTimeSeriesDataRunning) {
								// The update process is already running asynchronously
								return;
							}
							this.$_isPrivateUpdateMultipleTimeSeriesDataRunning = true;
							$state = 1;
							continue $sm1;
						}
						case 1:
						case 2:
						case 3:
						case 4:
						case 5:
						case 6: {
							if ($state === 1) {
								$state = 2;
							}
							try {
								$sm2:
								for (;;) {
									switch ($state) {
										case 2: {
											$state = -1;
											// Delete old data
											$t5 = this.$_dataStorage.purgeOldData();
											$state = 3;
											$t5.continueWith($sm);
											$doFinally = false;
											return;
										}
										case 3: {
											$state = -1;
											$t5.getAwaitedResult();
											$state = 4;
											continue $sm2;
										}
										case 4: {
											$state = -1;
											if (!(dataUpdateQueue.length > 0)) {
												$state = -1;
												break $sm2;
											}
											JS.Diagnostics.Debug.assert(dataUpdateQueue.length === timestampUpdateQueue.length);
											// The number of items to persist in a single transaction (in one go)
											itemCount = Math.min($QuickView_Client_Services_Charts_ChartDataStorage.$timeSeriesDataUpdateBatchSize, dataUpdateQueue.length);
											$t6 = this.$_dataStorage.updateMultipleTimeSeriesData(Enumerable.from(dataUpdateQueue).take(itemCount));
											$state = 5;
											$t6.continueWith($sm);
											$doFinally = false;
											return;
										}
										case 5: {
											$state = -1;
											$t6.getAwaitedResult();
											$t7 = this.$_dataStorage.setMultipleTimeSeriesDataTimestamps(Enumerable.from(timestampUpdateQueue).take(itemCount));
											$state = 6;
											$t7.continueWith($sm);
											$doFinally = false;
											return;
										}
										case 6: {
											$state = -1;
											$t7.getAwaitedResult();
											ss.arrayRemoveRange(dataUpdateQueue, 0, itemCount);
											ss.arrayRemoveRange(timestampUpdateQueue, 0, itemCount);
											$state = 4;
											continue $sm2;
										}
										default: {
											break $sm2;
										}
									}
								}
							}
							finally {
								if ($doFinally) {
									this.$_isPrivateUpdateMultipleTimeSeriesDataRunning = false;
								}
							}
							$state = -1;
							break $sm1;
						}
						default: {
							break $sm1;
						}
					}
				}
			});
			$sm();
		},
		clear: function() {
			this.$checkInitialized();
			return this.$_dataStorage.clear();
		}
	});
	ss.initClass($QuickView_Client_Services_Charts_ChartPeriod, $asm, {
		get_name: function() {
			return this.def.N;
		},
		get_supportsStats: function() {
			return this.metaResolution === 2;
		},
		add_intervalChanged: function(value) {
			this.$1$IntervalChangedField = ss.delegateCombine(this.$1$IntervalChangedField, value);
		},
		remove_intervalChanged: function(value) {
			this.$1$IntervalChangedField = ss.delegateRemove(this.$1$IntervalChangedField, value);
		},
		$onIntervalChanged: function(e) {
			// The event should be async in order to avoid blocking the thread that updates the intervals
			JS.EventExtensions.fireAsync(this.$1$IntervalChangedField, this, e);
		},
		getResolution: function(chartType, chartSize) {
			var chartResolution;
			switch (chartType) {
				case 1: {
					chartResolution = this.barChartResolution;
					break;
				}
				case 2: {
					chartResolution = this.lineChartResolution;
					break;
				}
				default: {
					throw new ss.ArgumentOutOfRangeException('chartType', 'Invalid value.', null, chartType);
				}
			}
			switch (chartSize) {
				case 1: {
					return chartResolution.C;
				}
				case 2: {
					return chartResolution.E;
				}
				default: {
					throw new ss.ArgumentOutOfRangeException('chartSize', 'Invalid value.', null, chartSize);
				}
			}
		},
		$update: function(time) {
			this.$privateUpdate(time, true);
		},
		$privateUpdate: function(time, raiseEvent) {
			var intervals = $QuickView_Client_Services_Charts_ChartPeriod.$calculateIntervals(time, this.def.T, this.def.I);
			var newDisplayInterval = intervals.item1;
			var newDataInterval = intervals.item2;
			var changed = false;
			if (QuickView.Client.Models.Charts.TimeInterval.equals(this.displayInterval, newDisplayInterval) && QuickView.Client.Models.Charts.TimeInterval.equals(this.dataInterval, newDataInterval)) {
				// No changes to the interval
			}
			else {
				this.displayInterval = newDisplayInterval;
				this.dataInterval = newDataInterval;
				changed = true;
			}
			if (changed && raiseEvent) {
				this.$onIntervalChanged(ss.EventArgs.Empty);
			}
		}
	});
	ss.initClass($QuickView_Client_Services_Charts_ChartPeriodProvider, $asm, {});
	ss.initClass($QuickView_Client_Services_Charts_ChartResolution, $asm, {});
	ss.initClass($QuickView_Client_Services_Charts_ChartService, $asm, {
		getMetadata: function() {
			return this.$_chartStorage.getChartMetadata();
		},
		getTimeSeriesTimestamp: function(timeSeries) {
			return this.$_chartStorage.getTimeSeriesTimestamp(timeSeries);
		},
		getMultipleTimeSeriesData: function(list) {
			JS.ArgumentHelper.notNull(list, 'list');
			var log = QuickView.Client.Common.Logging.LoggerExtensions.scope($QuickView_Client_Services_Charts_ChartService.$log);
			QuickView.Client.Common.Logging.LoggerScope.trace(log, '[GetMultipleTimeSeriesData]');
			var result = [];
			var $t1 = ss.getEnumerator(list);
			try {
				while ($t1.moveNext()) {
					var periodRequest = $t1.current();
					var timeSeries = periodRequest.T;
					var start = periodRequest.S;
					var end = periodRequest.E;
					var dataStart = QuickView.Client.Algorithms.TimeExtensions.roundTime(start, timeSeries.M);
					var dataEnd = QuickView.Client.Algorithms.TimeExtensions.roundTimeUp(end, timeSeries.M);
					var dataPointList = [];
					var timeUpdated = null;
					// The starting and the ending time used to limit the results; due to the way data points
					// are stored in the data storage in groups a call to "ChartDataStorage.GetTimeSeriesData"
					// can return data points outside of the start/end time range.
					var rangeStart = {};
					var rangeEnd;
					if (QuickView.Client.Models.Charts.TimeSeriesResolutionExtensions.isIntraday(timeSeries.R)) {
						rangeStart.$ = QuickView.Client.Algorithms.Charts.TradingSession.standard.getOpenTimeByDate(start);
						rangeEnd = QuickView.Client.Algorithms.Charts.TradingSession.standard.getOpenTimeByDate(end);
						// The end is exclusive so open time should be used
					}
					else {
						rangeStart.$ = start;
						rangeEnd = end;
					}
					var prevPeriodDataPoint = null;
					var firstIteration = true;
					// "date" switches between different periods
					for (var date = dataStart; JS.DateTimeExt.op_LessThan(date, dataEnd); date = QuickView.Client.Algorithms.TimeExtensions.advanceTime(date, timeSeries.M)) {
						try {
							var timeSeriesData = this.$_chartStorage.getTimeSeriesData(periodRequest.T, date);
							if (ss.isValue(timeSeriesData)) {
								if (firstIteration) {
									// Get the last value that is BEFORE the requested range
									prevPeriodDataPoint = Enumerable.from(timeSeriesData.A.V).lastOrDefault(ss.mkdel({ rangeStart: rangeStart }, function(x) {
										return JS.DateTimeExt.op_LessThan(x.T, this.rangeStart.$);
									}), ss.getDefaultValue(QuickView.Client.Models.Charts.TimeSeriesDataPoint));
									if (ss.isNullOrUndefined(prevPeriodDataPoint)) {
										// All values are within the requested range so get the last value of the previous period
										prevPeriodDataPoint = timeSeriesData.P;
									}
								}
								if (ss.compareStrings(timeSeries.I, 'QR2SharesSummaryOpeningAssetValue', true) === 0 || ss.compareStrings(timeSeries.I, 'QR2SharesSummaryOpeningSharePrice', true) === 0) {
									// CAUTION Move this to the server side OR put it in dependents to the
									// algorithm used
									// DO NOT TRIM THE PERIOD
									ss.arrayAddRange(dataPointList, timeSeriesData.A.V);
								}
								else {
									// Append to list
									// CAUTION The list can be modified by the caller of this method so do NOT cache it
									for (var $t2 = 0; $t2 < timeSeriesData.A.V.length; $t2++) {
										var item = timeSeriesData.A.V[$t2];
										if (JS.DateTimeExt.op_GreaterThanOrEqual(item.T, rangeStart.$) && JS.DateTimeExt.op_LessThan(item.T, rangeEnd)) {
											dataPointList.push(item);
										}
									}
								}
								if (ss.staticEquals(timeUpdated, null) || !ss.staticEquals(timeSeriesData.A.U, null) && ss.Nullable$1.lt(timeUpdated, timeSeriesData.A.U)) {
									timeUpdated = timeSeriesData.A.U;
								}
							}
						}
						finally {
							firstIteration = false;
						}
					}
					var dataRecord = $QuickView_Client_Services_Data_DataRecord.create(ss.IList).call(null, null, timeUpdated, dataPointList);
					var periodData = $QuickView_Client_Services_Charts_TimeSeriesPeriodData.$ctor(periodRequest.T, dataRecord, prevPeriodDataPoint);
					result.push(periodData);
				}
			}
			finally {
				$t1.dispose();
			}
			return result;
		}
	});
	ss.initEnum($QuickView_Client_Services_Charts_ChartSize, $asm, { none: 0, collapsed: 1, extended: 2 });
	ss.initEnum($QuickView_Client_Services_Charts_ChartType, $asm, { none: 0, bar: 1, line: 2 });
	ss.initClass($QuickView_Client_Services_Charts_IndicatorData, $asm, {
		get_isEmpty: null,
		changeResolution: function(time) {
			return this.changeResolution$1(time, this.resolution);
		},
		changeResolution$1: null
	});
	ss.initClass($QuickView_Client_Services_Charts_IndicatorChartData, $asm, {
		get_isEmpty: function() {
			return false === Enumerable.from(this.$_algorithmResult.D.dataPoints).any();
		},
		get_dataPoints: function() {
			return this.$_algorithmResult.D.dataPoints;
		},
		get_initialValue: function() {
			return this.$_algorithmResult.D.initialValue;
		},
		$changeResolution: function(targetResolution) {
			if (this.resolution === targetResolution) {
				return this;
			}
			else {
				var result = ss.makeGenericType(QuickView.Client.Algorithms.Charts.ChartAlgorithmResult$1, [QuickView.Client.Models.Charts.ChartDataPoint]).changeResolution(this.$_algorithmResult, targetResolution);
				return new $QuickView_Client_Services_Charts_IndicatorChartData(this.fullType, this.unit, result, this.timeUpdated);
			}
		},
		changeResolution$1: function(time, targetResolution) {
			// // The resolution of this data can be different from the resolution of the algorithm result; therefore,
			// * // the check must NOT be used.
			// if (this.Resolution == targetResolution)
			// {
			// return time;
			// }
			// else
			{
				return ss.makeGenericType(QuickView.Client.Algorithms.Charts.ChartAlgorithmResult$1, [QuickView.Client.Models.Charts.ChartDataPoint]).changeResolution$1(this.$_algorithmResult, time, targetResolution);
			}
		}
	}, $QuickView_Client_Services_Charts_IndicatorData);
	ss.initClass($QuickView_Client_Services_Charts_IndicatorCustomData, $asm, {
		get_isEmpty: function() {
			return false === Enumerable.from(this.$_algorithmResult.D.dataPoints).any();
		},
		get_dataPoints: function() {
			return this.$_algorithmResult.D.dataPoints;
		},
		$changeResolution: function(targetResolution) {
			if (this.resolution === targetResolution) {
				return this;
			}
			else {
				var result = ss.makeGenericType(QuickView.Client.Algorithms.Charts.ChartAlgorithmResult$1, [QuickView.Client.Models.Charts.CustomDataPoint]).changeResolution(this.$_algorithmResult, targetResolution);
				return new $QuickView_Client_Services_Charts_IndicatorCustomData(this.fullType, this.unit, result, this.timeUpdated);
			}
		},
		changeResolution$1: function(time, targetResolution) {
			// // The resolution of this data can be different from the resolution of the algorithm result; therefore,
			// * // the check must NOT be used.
			// if (this.Resolution == targetResolution)
			// {
			// return time;
			// }
			// else
			{
				return ss.makeGenericType(QuickView.Client.Algorithms.Charts.ChartAlgorithmResult$1, [QuickView.Client.Models.Charts.CustomDataPoint]).changeResolution$1(this.$_algorithmResult, time, targetResolution);
			}
		}
	}, $QuickView_Client_Services_Charts_IndicatorData);
	ss.initClass($QuickView_Client_Services_Charts_IndicatorDataBag, $asm, {});
	ss.initClass($QuickView_Client_Services_Charts_IndicatorDataChangedEventArgs, $asm, {}, ss.EventArgs);
	ss.initClass($QuickView_Client_Services_Charts_IndicatorDataProvider, $asm, {
		$timeSeries_DataChanged: function(sender, e) {
			// Get the indicators that reference the time series
			var indicatorList = QuickView.Client.Models.Charts.RuntimeChartMetadata.getIndicatorsForTimeSeries(QuickView.Client.Common.AppContext.metadata, e.timeSeries.I);
			if (ss.isValue(indicatorList)) {
				for (var $t1 = 0; $t1 < indicatorList.length; $t1++) {
					var item = indicatorList[$t1];
					this.$onIndicatorDataRecencyChanged(item);
					this.$onIndicatorDataChanged(item, e.timeSeries.M);
				}
			}
		},
		getIndicatorData: function(indicator, period, dataType, priority) {
			var $state = 0, $tcs = new ss.TaskCompletionSource(), $t1;
			var $sm = ss.mkdel(this, function() {
				try {
					$sm1:
					for (;;) {
						switch ($state) {
							case 0: {
								$state = -1;
								JS.ArgumentHelper.notNull(indicator, 'indicator');
								JS.ArgumentHelper.notNull(period, 'period');
								if (ss.isNullOrUndefined(this.$_getIndicatorDataTaskQueue)) {
									// Add some delay between tasks
									// CAUTION As strange as it is 20ms delay delivers better UI responsiveness than 50ms delay?!?
									this.$_getIndicatorDataTaskQueue = new JS.Threading.AsyncTaskQueue.$ctor1(1, 20);
								}
								$t1 = this.$_getIndicatorDataTaskQueue.add$1(ss.mkdel(this, function() {
									return ss.Task.run(ss.mkdel(this, function() {
										return this.$privateGetIndicatorData(indicator, period, dataType);
									}));
								}), priority);
								$state = 1;
								$t1.continueWith($sm);
								return;
							}
							case 1: {
								$state = -1;
								$tcs.setResult($t1.getAwaitedResult());
								return;
							}
							default: {
								break $sm1;
							}
						}
					}
				}
				catch ($t2) {
					$tcs.setException(ss.Exception.wrap($t2));
				}
			});
			$sm();
			return $tcs.task;
		},
		$privateGetIndicatorData: function(indicator, period, dataType) {
			var log = QuickView.Client.Common.Logging.LoggerExtensions.scope($QuickView_Client_Services_Charts_IndicatorDataProvider.$log);
			QuickView.Client.Common.Logging.LoggerScope.trace$1(log, '[PrivateGetIndicatorData] Indicator: {0}, Period: {1}, Data type: {2}', [indicator.I, period.get_name(), dataType]);
			var loadedData = $QuickView_$Client_Services_Charts_IndicatorDataProvider$LoadedData.$ctor();
			var chartDataList = [];
			// Load time series data first since it can be used by derived time series
			{
				var timeSeriesList = Enumerable.from(indicator.timeSeries).where(function(timeSeries) {
					if (false === $QuickView_Client_Services_Charts_$LocalUtils.$isMatch(dataType, QuickView.Client.Models.Charts.TimeSeries.fullType(timeSeries))) {
						// Skip the series
						return false;
					}
					if (timeSeries.M === 3 || timeSeries.M === 0 || timeSeries.M === period.metaResolution) {
						// Should be used
					}
					else {
						// Ignore the series
						return false;
					}
					return true;
				});
				var dataList = this.$getMultipleTimeSeriesData(log, loadedData, timeSeriesList, period);
				ss.arrayAddRange(chartDataList, dataList);
			}
			for (var $t1 = 0; $t1 < indicator.derivedTimeSeries.length; $t1++) {
				var derivedTimeSeries = indicator.derivedTimeSeries[$t1];
				if (false === $QuickView_Client_Services_Charts_$LocalUtils.$isMatch(dataType, QuickView.Client.Models.Charts.DerivedTimeSeries.fullType(derivedTimeSeries))) {
					// Skip the series
					continue;
				}
				if (derivedTimeSeries.metaResolution === 3 || derivedTimeSeries.metaResolution === 0 || derivedTimeSeries.metaResolution === period.metaResolution) {
					// Should be used
				}
				else {
					// Ignore the series
					continue;
				}
				var chartData = this.$getDerivedTimeSeriesData(log, loadedData, derivedTimeSeries, period);
				if (ss.isValue(chartData)) {
					chartDataList.push(chartData);
					QuickView.Client.Common.Logging.LoggerScope.trace$1(log, 'Data loaded for derived series ID {0}.', [derivedTimeSeries.I]);
				}
				else {
					QuickView.Client.Common.Logging.LoggerScope.trace$1(log, 'Data not found for derived series ID {0}.', [derivedTimeSeries.I]);
				}
			}
			return $QuickView_Client_Services_Charts_IndicatorDataBag.$ctor(indicator, chartDataList);
		},
		$getDerivedTimeSeriesData: function(log, loadedData, derivedTimeSeries, period) {
			var result = this.$getDerivedTimeSeriesDataInternal(log, loadedData, derivedTimeSeries, period);
			if (ss.isNullOrUndefined(result)) {
				return null;
			}
			if (result.V.T === 2) {
				return new $QuickView_Client_Services_Charts_IndicatorChartData(QuickView.Client.Models.Charts.DerivedTimeSeries.fullType(derivedTimeSeries), derivedTimeSeries.unit, result.V, result.U);
			}
			else if (result.V.T === 1) {
				var algorithmResult = result.V;
				var input = QuickView.Client.Algorithms.Charts.DataPointsTransformationInput.$ctor1(algorithmResult.D.dataPoints, algorithmResult.D.initialValue);
				var output;
				if (QuickView.Client.Models.Charts.TimeSeriesFullType.isCompleteValue(QuickView.Client.Models.Charts.DerivedTimeSeries.fullType(derivedTimeSeries))) {
					output = QuickView.Client.Algorithms.Charts.DataPointsTransformations.difference.transform(input);
				}
				else {
					output = QuickView.Client.Algorithms.Charts.DataPointsTransformations.accumulation.transform(input);
				}
				var chartDataPoints = ss.makeGenericType(QuickView.Client.Algorithms.Charts.ChartAlgorithmResult$1, [QuickView.Client.Models.Charts.ChartDataPoint]).$ctor1(2, output, algorithmResult.R, QuickView.Client.Algorithms.Charts.ResolutionTransformations.default$1);
				return new $QuickView_Client_Services_Charts_IndicatorChartData(QuickView.Client.Models.Charts.DerivedTimeSeries.fullType(derivedTimeSeries), derivedTimeSeries.unit, chartDataPoints, result.U);
			}
			else if (result.V.T === 3) {
				return new $QuickView_Client_Services_Charts_IndicatorCustomData(QuickView.Client.Models.Charts.DerivedTimeSeries.fullType(derivedTimeSeries), derivedTimeSeries.unit, result.V, result.U);
			}
			else {
				throw new ss.InvalidOperationException(ss.formatString("Unknown type of the data '{0}' returned for derived time series ID '{1}'.", result.V.T, derivedTimeSeries.I));
			}
		},
		$getDerivedTimeSeriesDataInternal: function(log, loadedData, derivedTimeSeries, period) {
			JS.ArgumentHelper.notNull(derivedTimeSeries, 'derivedTimeSeries');
			var loadedResult = loadedData.derivedTimeSeries[QuickView.Client.Models.Charts.DerivedTimeSeries.idLower(derivedTimeSeries)];
			if (ss.isValue(loadedResult)) {
				QuickView.Client.Common.Logging.LoggerScope.trace$1(log, 'Derived time series ID {0} already loaded.', [derivedTimeSeries.I]);
				return loadedResult;
			}
			QuickView.Client.Common.Logging.LoggerScope.trace$1(log, "Loading data for derived time series ID {0}, algorithm '{1}'.", [derivedTimeSeries.I, derivedTimeSeries.A]);
			var dataPointDict = {};
			// The value is the oldest time of any time series
			var timeUpdated = null;
			var dataRequestList = [];
			for (var $t1 = 0; $t1 < derivedTimeSeries.referencedTimeSeries.length; $t1++) {
				var timeSeries = derivedTimeSeries.referencedTimeSeries[$t1];
				var dataIntervalStart;
				var dataIntervalEnd;
				if (QuickView.Client.Models.Charts.DerivedTimeSeries.isIntradayTimeSeries(derivedTimeSeries, QuickView.Client.Models.Charts.TimeSeries.idLower(timeSeries))) {
					var intradayPeriod = $QuickView_Client_Services_Charts_IndicatorDataProvider.get_$intradayTimeSeriesPeriod();
					// 2015-07-01 [BUGFIX] The intraday period (TDY-1) should not go to the previous month for MTD
					dataIntervalStart = JS.DateTimeHelper.max(period.dataInterval.S, intradayPeriod.dataInterval.S);
					dataIntervalEnd = JS.DateTimeHelper.min(period.dataInterval.E, intradayPeriod.dataInterval.E);
				}
				else {
					dataIntervalStart = period.dataInterval.S;
					dataIntervalEnd = period.dataInterval.E;
				}
				var dataPointList = loadedData.timeSeries[QuickView.Client.Models.Charts.TimeSeries.idLower(timeSeries)];
				if (ss.isNullOrUndefined(dataPointList)) {
					dataRequestList.push($QuickView_Client_Services_Charts_TimeSeriesPeriodDataRequest.$ctor(timeSeries, dataIntervalStart, dataIntervalEnd));
				}
			}
			// Load data
			var storageDataList;
			if (dataRequestList.length > 0) {
				QuickView.Client.Common.Logging.LoggerScope.trace$1(log, '[GetDerivedTimeSeriesDataInternal] Loading data for {0} items from storage.', [dataRequestList.length]);
				storageDataList = this.$_chartService.getMultipleTimeSeriesData(dataRequestList);
			}
			else {
				storageDataList = null;
			}
			for (var $t2 = 0; $t2 < derivedTimeSeries.referencedTimeSeries.length; $t2++) {
				var timeSeries1 = { $: derivedTimeSeries.referencedTimeSeries[$t2] };
				var timeSeriesPeriod;
				if (QuickView.Client.Models.Charts.DerivedTimeSeries.isIntradayTimeSeries(derivedTimeSeries, QuickView.Client.Models.Charts.TimeSeries.idLower(timeSeries1.$))) {
					timeSeriesPeriod = $QuickView_Client_Services_Charts_IndicatorDataProvider.get_$intradayTimeSeriesPeriod();
				}
				else {
					timeSeriesPeriod = period;
				}
				var timeSeriesData = loadedData.timeSeries[QuickView.Client.Models.Charts.TimeSeries.idLower(timeSeries1.$)];
				if (ss.isNullOrUndefined(timeSeriesData)) {
					timeSeriesData = (ss.isNullOrUndefined(storageDataList) ? null : Enumerable.from(storageDataList).firstOrDefault(ss.mkdel({ timeSeries1: timeSeries1 }, function(x) {
						return ss.referenceEquals(x.T, this.timeSeries1.$);
					}), ss.getDefaultValue($QuickView_Client_Services_Charts_TimeSeriesPeriodData)));
				}
				else {
					QuickView.Client.Common.Logging.LoggerScope.trace$1(log, 'Time series ID {0} already loaded.', [timeSeries1.$.I]);
				}
				if (ss.isValue(timeSeriesData)) {
					loadedData.timeSeries[QuickView.Client.Models.Charts.TimeSeries.idLower(timeSeries1.$)] = timeSeriesData;
					if (ss.staticEquals(timeUpdated, null) || ss.Nullable$1.gt(timeUpdated, timeSeriesData.D.U)) {
						timeUpdated = timeSeriesData.D.U;
					}
					dataPointDict[timeSeries1.$.I] = QuickView.Client.Algorithms.Charts.ChartAlgorithmInput.$ctor1(timeSeriesData.D.V, timeSeries1.$.R, $QuickView_Client_Services_Charts_TimeSeriesPeriodData.getPrevPeriodValue(timeSeriesData));
					QuickView.Client.Common.Logging.LoggerScope.trace$1(log, 'Data loaded for referenced series ID {0}. Data point count: {1}.', [timeSeries1.$.I, ss.count(timeSeriesData.D.V)]);
				}
				else {
					QuickView.Client.Common.Logging.LoggerScope.trace$1(log, 'Data not found for referenced series ID {0}. Derived time series cannot be calculated.', [timeSeries1.$.I]);
					return null;
				}
			}
			for (var $t3 = 0; $t3 < derivedTimeSeries.referencedDerivedTimeSeries.length; $t3++) {
				var timeSeries2 = derivedTimeSeries.referencedDerivedTimeSeries[$t3];
				var timeSeriesPeriod1;
				if (QuickView.Client.Models.Charts.DerivedTimeSeries.isIntradayTimeSeries(derivedTimeSeries, QuickView.Client.Models.Charts.DerivedTimeSeries.idLower(timeSeries2))) {
					timeSeriesPeriod1 = $QuickView_Client_Services_Charts_IndicatorDataProvider.get_$intradayTimeSeriesPeriod();
				}
				else {
					timeSeriesPeriod1 = period;
				}
				// The "GetDerivedTimeSeriesDataInternal" checks if the time series has been already calculated
				// at its beginning
				var algorithmResult = this.$getDerivedTimeSeriesDataInternal(log, loadedData, timeSeries2, timeSeriesPeriod1);
				if (ss.isValue(algorithmResult)) {
					if (ss.staticEquals(timeUpdated, null) || ss.Nullable$1.gt(timeUpdated, algorithmResult.U)) {
						timeUpdated = algorithmResult.U;
					}
					if (algorithmResult.V.T === 1) {
						var dataPointList1 = algorithmResult.V;
						dataPointDict[timeSeries2.I] = QuickView.Client.Algorithms.Charts.ChartAlgorithmInput.$ctor1(Enumerable.from(dataPointList1.D.dataPoints).toArray(), dataPointList1.R, dataPointList1.D.initialValue);
						QuickView.Client.Common.Logging.LoggerScope.trace$1(log, 'Data loaded for referenced derived time series ID {0}.', [timeSeries2.I]);
					}
					else {
						$QuickView_Client_Services_Charts_IndicatorDataProvider.$log.error(function() {
							return ss.formatString("The expected type of the data returned by the algorithm is '{0}'. It is '{1}' instead. Derived time series cannot be calculated.", 1, algorithmResult.V.T);
						});
						throw new ss.InvalidOperationException(ss.formatString("The expected type of the data returned by the algorithm is '{0}'. It is '{1}' instead. Derived time series cannot be calculated.", 1, algorithmResult.V.T));
					}
				}
				else {
					QuickView.Client.Common.Logging.LoggerScope.trace$1(log, 'Data not found for referenced series ID {0}. Derived time series cannot be calculated.', [timeSeries2.I]);
					return null;
				}
			}
			var algorithm = QuickView.Client.Algorithms.Charts.ChartAlgorithms.getAlgorithm(derivedTimeSeries.A);
			var result = algorithm.run(derivedTimeSeries.P, period.displayInterval.S, period.displayInterval.E, derivedTimeSeries.resolution, dataPointDict);
			QuickView.Client.Common.Logging.LoggerScope.trace(log, 'Derived time series calculated.');
			var dataRecord = $QuickView_Client_Services_Data_DataRecord.create(QuickView.Client.Algorithms.Charts.ChartAlgorithmResult).call(null, null, timeUpdated, result);
			// Cache the result
			loadedData.derivedTimeSeries[QuickView.Client.Models.Charts.DerivedTimeSeries.idLower(derivedTimeSeries)] = dataRecord;
			return dataRecord;
		},
		$getMultipleTimeSeriesData: function(log, loadedData, timeSeriesList, period) {
			var dataRequestList = [];
			var $t1 = ss.getEnumerator(timeSeriesList);
			try {
				while ($t1.moveNext()) {
					var timeSeries = $t1.current();
					var dataPointList = loadedData.timeSeries[QuickView.Client.Models.Charts.TimeSeries.idLower(timeSeries)];
					if (ss.isNullOrUndefined(dataPointList)) {
						dataRequestList.push($QuickView_Client_Services_Charts_TimeSeriesPeriodDataRequest.$ctor(timeSeries, period.dataInterval.S, period.dataInterval.E));
					}
				}
			}
			finally {
				$t1.dispose();
			}
			// Load data
			var storageDataList;
			if (dataRequestList.length > 0) {
				QuickView.Client.Common.Logging.LoggerScope.trace$1(log, '[GetMultipleTimeSeriesData] Loading data for {0} items from storage.', [dataRequestList.length]);
				storageDataList = this.$_chartService.getMultipleTimeSeriesData(dataRequestList);
			}
			else {
				storageDataList = null;
			}
			var resultList = [];
			var $t2 = ss.getEnumerator(timeSeriesList);
			try {
				while ($t2.moveNext()) {
					var timeSeries1 = { $: $t2.current() };
					var timeSeriesData = loadedData.timeSeries[QuickView.Client.Models.Charts.TimeSeries.idLower(timeSeries1.$)];
					if (ss.isNullOrUndefined(timeSeriesData)) {
						timeSeriesData = (ss.isNullOrUndefined(storageDataList) ? null : Enumerable.from(storageDataList).firstOrDefault(ss.mkdel({ timeSeries1: timeSeries1 }, function(x) {
							return ss.referenceEquals(x.T, this.timeSeries1.$);
						}), ss.getDefaultValue($QuickView_Client_Services_Charts_TimeSeriesPeriodData)));
					}
					else {
						QuickView.Client.Common.Logging.LoggerScope.trace$1(log, 'Time series ID {0} already loaded.', [timeSeries1.$.I]);
					}
					if (ss.isNullOrUndefined(timeSeriesData)) {
						continue;
					}
					loadedData.timeSeries[QuickView.Client.Models.Charts.TimeSeries.idLower(timeSeries1.$)] = timeSeriesData;
					var output;
					if (QuickView.Client.Models.Charts.TimeSeriesFullType.isCompleteValue(QuickView.Client.Models.Charts.TimeSeries.fullType(timeSeries1.$))) {
						output = QuickView.Client.Algorithms.Charts.DataPointsTransformations.difference.transform(QuickView.Client.Algorithms.Charts.DataPointsTransformationInput.$ctor1(timeSeriesData.D.V, $QuickView_Client_Services_Charts_TimeSeriesPeriodData.getPrevPeriodValue(timeSeriesData)));
					}
					else {
						output = QuickView.Client.Algorithms.Charts.DataPointsTransformations.accumulation.transform(QuickView.Client.Algorithms.Charts.DataPointsTransformationInput.$ctor1(timeSeriesData.D.V, $QuickView_Client_Services_Charts_TimeSeriesPeriodData.getPrevPeriodValue(timeSeriesData)));
					}
					var result = ss.makeGenericType(QuickView.Client.Algorithms.Charts.ChartAlgorithmResult$1, [QuickView.Client.Models.Charts.ChartDataPoint]).$ctor1(2, output, timeSeries1.$.R, QuickView.Client.Algorithms.Charts.ResolutionTransformations.default$1);
					resultList.push(new $QuickView_Client_Services_Charts_IndicatorChartData(QuickView.Client.Models.Charts.TimeSeries.fullType(timeSeries1.$), timeSeries1.$.U, result, timeSeriesData.D.U));
				}
			}
			finally {
				$t2.dispose();
			}
			return resultList;
		},
		getChartDataRecency: function(indicator) {
			JS.ArgumentHelper.notNull(indicator, 'indicator');
			// Get the cached value if available
			var result = this.$_dataRecencyDict[QuickView.Client.Models.Charts.Indicator.idLower(indicator)];
			if (ss.isValue(result)) {
				return result;
			}
			// The time of the last data point
			var lastDataPointTime = null;
			// The time series for which the data is the latest one
			var latestTimeSeries = null;
			// The recency of the oldest time series data
			var latestTimeSeriesTimestamp = null;
			for (var $t1 = 0; $t1 < indicator.allTimeSeries.length; $t1++) {
				var timeSeries = indicator.allTimeSeries[$t1];
				var timeSeriesTimestamp = this.$_chartService.getTimeSeriesTimestamp(timeSeries);
				if (ss.isNullOrUndefined(timeSeriesTimestamp)) {
					continue;
				}
				// The algorithm is to get the latest timestamp; initially it was the oldest timestamp;
				// However, according to requirements the latest timestamp should be used instead.
				//if (latestTimeSeriesTimestamp == null)
				{
					// The transformation is done here since it is possible to have future values for QR daily resolution;
					// Between the end of a trading day and UTC 00:00 there is a daily value with for the future day.
					// Since it is the latest it is chosen instead of minutely data points
					var thisLastDataPointTime = JS.DateTimeExtensions.toUtcExt$1(timeSeriesTimestamp.L);
					if (JS.DateTimeExt.op_Inequality$1(thisLastDataPointTime, null)) {
						// Update the last data point time
						if (timeSeries.M === 2) {
							var tradingSession = QuickView.Client.Algorithms.Charts.TradingSession.get$1(timeSeries);
							var currentTradingDate = tradingSession.getTradingDateByTime(JS.DateTimeExt.get_utcNow());
							var newLastDataPointTime;
							if (ss.Nullable$1.liftcmp(JS.DateTimeExt.op_LessThan, thisLastDataPointTime, currentTradingDate)) {
								// The date is in the past so use the closing time of the session
								newLastDataPointTime = tradingSession.getClosingTimeByDate(ss.unbox(thisLastDataPointTime));
							}
							else {
								// The date is the current trading day so use the beginning of the current trading session
								newLastDataPointTime = tradingSession.getOpenTimeByDate(ss.unbox(thisLastDataPointTime));
							}
							// Replace the time
							thisLastDataPointTime = newLastDataPointTime;
						}
					}
					if (JS.DateTimeExt.op_Equality$1(lastDataPointTime, null) || ss.Nullable$1.liftcmp(JS.DateTimeExt.op_LessThan, lastDataPointTime, thisLastDataPointTime)) {
						lastDataPointTime = thisLastDataPointTime;
						latestTimeSeries = timeSeries;
						latestTimeSeriesTimestamp = timeSeriesTimestamp;
					}
				}
			}
			if (ss.isNullOrUndefined(latestTimeSeriesTimestamp)) {
				return null;
			}
			else {
				var options = 0;
				// TODO: This is a temporary solution that would break if 
				if (ss.isValue(indicator.F) && JS.EnumExtensions.isSet(indicator.F, 1)) {
					options |= 1;
				}
				result = QuickView.Client.Models.Charts.IndicatorDataRecency.$ctor(latestTimeSeries, JS.DateTimeExtensions.toUtcExt(latestTimeSeriesTimestamp.U), JS.DateTimeExtensions.toUtcExt(latestTimeSeriesTimestamp.D), lastDataPointTime, (JS.DateTimeExt.op_Equality$1(lastDataPointTime, null) ? 0 : $QuickView_Client_Services_Charts_IndicatorDataProvider.$calculateRecencyFactor(ss.unbox(lastDataPointTime), latestTimeSeries.M, options)));
				// Cache the result
				this.$_dataRecencyDict[QuickView.Client.Models.Charts.Indicator.idLower(indicator)] = result;
				return result;
			}
		},
		$onIndicatorDataRecencyChanged: function(indicator) {
			$QuickView_Client_Services_Charts_IndicatorDataProvider.$log.trace(function() {
				return ss.formatString('[OnIndicatorDataRecencyChanged] IndicatorID: {0}', indicator.I);
			});
			// Clear cached value (if any)
			this.$_dataRecencyDict[QuickView.Client.Models.Charts.Indicator.idLower(indicator)] = null;
			if (ss.isNullOrUndefined(this.$_dataDataRecencyChangedHandlerDict)) {
				return;
			}
			var key = indicator.I;
			;
			var handler = this.$_dataDataRecencyChangedHandlerDict[key];
			if (ss.isValue(handler)) {
				ss.makeGenericType($QuickView_$Client_Services_Charts_IndicatorDataProvider$SubscriptionHandlers$1, [$QuickView_Client_Services_Charts_IndicatorEventArgs]).$execute(handler);
			}
		},
		$onIndicatorDataChanged: function(indicator, metaResolution) {
			JS.ArgumentHelper.notNull(indicator, 'indicator');
			$QuickView_Client_Services_Charts_IndicatorDataProvider.$log.trace(function() {
				return ss.formatString('[OnIndicatorDataChanged] IndicatorID: {0}, Meta resolution: {1}', indicator.I, metaResolution);
			});
			if (ss.isNullOrUndefined(this.$_dataChangedHandlerDict)) {
				return;
			}
			var key = $QuickView_Client_Services_Charts_IndicatorDataProvider.$getKey(indicator, metaResolution);
			var handler = this.$_dataChangedHandlerDict[key];
			if (ss.isValue(handler)) {
				ss.makeGenericType($QuickView_$Client_Services_Charts_IndicatorDataProvider$SubscriptionHandlers$1, [$QuickView_Client_Services_Charts_IndicatorDataChangedEventArgs]).$execute(handler);
			}
		},
		subscribeDataRecencyChanged: function(indicator, handler) {
			JS.ArgumentHelper.notNull(indicator, 'indicator');
			JS.ArgumentHelper.notNull(handler, 'handler');
			$QuickView_Client_Services_Charts_IndicatorDataProvider.$log.trace(function() {
				return ss.formatString('[SubscribeDataRecencyChanged] Indicator: {0}', indicator.I);
			});
			if (ss.isNullOrUndefined(this.$_dataDataRecencyChangedHandlerDict)) {
				this.$_dataDataRecencyChangedHandlerDict = {};
			}
			var key = indicator.I;
			var handlerList = this.$_dataDataRecencyChangedHandlerDict[key];
			if (ss.isNullOrUndefined(handlerList)) {
				this.$_dataDataRecencyChangedHandlerDict[key] = handlerList = ss.makeGenericType($QuickView_$Client_Services_Charts_IndicatorDataProvider$SubscriptionHandlers$1, [$QuickView_Client_Services_Charts_IndicatorEventArgs]).$ctor(this, new $QuickView_Client_Services_Charts_IndicatorEventArgs(indicator));
			}
			handlerList.handlers = ss.delegateCombine(handlerList.handlers, handler);
			return new (ss.makeGenericType($QuickView_$Client_Services_Charts_IndicatorDataProvider$Subscription$1, [$QuickView_Client_Services_Charts_IndicatorEventArgs]))(handlerList, handler);
		},
		unsubscribeDataRecencyChanged: function(indicator, handler) {
			JS.ArgumentHelper.notNull(indicator, 'indicator');
			JS.ArgumentHelper.notNull(handler, 'handler');
			$QuickView_Client_Services_Charts_IndicatorDataProvider.$log.trace(function() {
				return ss.formatString('[UnsubscribeDataRecencyChanged] Indicator: {0}', indicator.I);
			});
			if (ss.isNullOrUndefined(this.$_dataDataRecencyChangedHandlerDict)) {
				return;
			}
			var key = indicator.I;
			var handlerList = this.$_dataDataRecencyChangedHandlerDict[key];
			if (ss.isValue(handlerList)) {
				handlerList.handlers = ss.delegateRemove(handlerList.handlers, handler);
			}
		},
		subscribeDataChanged: function(indicator, metaResolution, handler) {
			JS.ArgumentHelper.notNull(indicator, 'indicator');
			JS.ArgumentHelper.notNull(handler, 'handler');
			$QuickView_Client_Services_Charts_IndicatorDataProvider.$log.trace(function() {
				return ss.formatString('[SubscribeDataChanged] Indicator: {0}, Meta-resolution: {1}', indicator.I, metaResolution);
			});
			if (ss.isNullOrUndefined(this.$_dataChangedHandlerDict)) {
				this.$_dataChangedHandlerDict = {};
			}
			var key = $QuickView_Client_Services_Charts_IndicatorDataProvider.$getKey(indicator, metaResolution);
			var handlerList = this.$_dataChangedHandlerDict[key];
			if (ss.isNullOrUndefined(handlerList)) {
				this.$_dataChangedHandlerDict[key] = handlerList = ss.makeGenericType($QuickView_$Client_Services_Charts_IndicatorDataProvider$SubscriptionHandlers$1, [$QuickView_Client_Services_Charts_IndicatorDataChangedEventArgs]).$ctor(this, new $QuickView_Client_Services_Charts_IndicatorDataChangedEventArgs(indicator, metaResolution));
			}
			handlerList.handlers = ss.delegateCombine(handlerList.handlers, handler);
			return new (ss.makeGenericType($QuickView_$Client_Services_Charts_IndicatorDataProvider$Subscription$1, [$QuickView_Client_Services_Charts_IndicatorDataChangedEventArgs]))(handlerList, handler);
		},
		unsubscribeDataChanged: function(indicator, metaResolution, handler) {
			JS.ArgumentHelper.notNull(indicator, 'indicator');
			JS.ArgumentHelper.notNull(handler, 'handler');
			$QuickView_Client_Services_Charts_IndicatorDataProvider.$log.trace(function() {
				return ss.formatString('[UnsubscribeDataChanged] Indicator: {0}, Meta-resolution: {1}', indicator.I, metaResolution);
			});
			if (ss.isNullOrUndefined(this.$_dataChangedHandlerDict)) {
				return;
			}
			var key = $QuickView_Client_Services_Charts_IndicatorDataProvider.$getKey(indicator, metaResolution);
			var handlerList = this.$_dataChangedHandlerDict[key];
			if (ss.isValue(handlerList)) {
				handlerList.handlers = ss.delegateRemove(handlerList.handlers, handler);
			}
		}
	});
	ss.initEnum($QuickView_Client_Services_Charts_IndicatorDataType, $asm, { none: 0, primary: 1, positions: 2, orders: 4, slippage: 8 });
	ss.initClass($QuickView_Client_Services_Charts_IndicatorDataUsage, $asm, {});
	ss.initClass($QuickView_Client_Services_Charts_IndicatorDataWorker, $asm, {
		run: function() {
			var $state = 0, chartMetadata, timeSeriesTimestampDict, timeSeriesTimestampList, $t1, item, timeSeriesUpdatesTimestamp, firstIteration, localChartMetadata, serverChartMetadata, timeSeriesUpdates, $t2, exc, $t5, newChartMetadata, $t6, $t4, $t7, exc1, index, updateCount, processedTimeSeriesDict, processedTimeSeriesCount, chartDataUsageVersion, timeSeriesBatchList, updateList, headerListLastIndex, inUseListLastIndex, $t9, chartDataUsageChanged, headerList, inUseList, notInUseList, $t10, update, dataPriority, updateIndex, $t11, update1, timestamp, timeSeries, timeSeriesDataList, eventArgs, $t12, exc2, localExc, $t15, item1, updateDataList, $t16, timeSeriesData2, timeSeries1, batchItem, $t17, $t14;
			var $sm = ss.mkdel(this, function() {
				$sm1:
				for (;;) {
					switch ($state) {
						case 0: {
							$state = -1;
							if (QuickView.Client.Common.AppEnvironment.debugOptions.disableDataDownload) {
								$QuickView_Client_Services_Charts_IndicatorDataWorker.$log.info('Data updates are disabled. The worker will now exist.');
								return;
							}
							$QuickView_Client_Services_Charts_IndicatorDataWorker.$log.trace('Started.');
							// Workflow:
							// - Refresh chart metadata
							// - Get the list of updated time series
							// - Refresh all time series
							// - Repeat
							chartMetadata = null;
							// Contains key = TimeSeries.IDLower(), value = Timestamp
							timeSeriesTimestampDict = {};
							{
								timeSeriesTimestampList = this.$_chartStorage.getAllTimeSeriesTimestamps();
								$t1 = ss.getEnumerator(timeSeriesTimestampList);
								try {
									while ($t1.moveNext()) {
										item = $t1.current();
										timeSeriesTimestampDict[item.I.toLowerCase()] = item.T;
									}
								}
								finally {
									$t1.dispose();
								}
							}
							timeSeriesUpdatesTimestamp = null;
							// Indicates if the outermost cycle is in its first iteration
							firstIteration = true;
							$state = 1;
							continue $sm1;
						}
						case 1: {
							$state = -1;
							if (this.status !== 1) {
								return;
							}
							if (ss.isNullOrUndefined(chartMetadata)) {
								$QuickView_Client_Services_Charts_IndicatorDataWorker.$log.trace('[ChartMetadata] Loading from local storage.');
								localChartMetadata = this.$_chartStorage.getChartMetadata();
								if (ss.isNullOrUndefined(localChartMetadata)) {
									$QuickView_Client_Services_Charts_IndicatorDataWorker.$log.trace('[ChartMetadata] Not available locally.');
								}
								else {
									chartMetadata = $QuickView_Client_Services_Data_DataRecord.create(QuickView.Client.Models.Charts.RuntimeChartMetadata).call(null, localChartMetadata.T, localChartMetadata.U, QuickView.Client.Models.Charts.RuntimeChartMetadata.$ctor(localChartMetadata.V));
									$QuickView_Client_Services_Charts_IndicatorDataWorker.$log.trace('[ChartMetadata] Loaded from local storage.');
								}
							}
							if (firstIteration && ss.isValue(chartMetadata)) {
								// Use the cached metadata to retrieve the rows as soon as possible.
								// This is useful on mobile where the application can be started and
								// shut down frequently.
								$state = 2;
								continue $sm1;
							}
							else {
								$QuickView_Client_Services_Charts_IndicatorDataWorker.$log.trace('[ChartMetadata] Refreshing from server.');
								$state = 3;
								continue $sm1;
							}
						}
						case 3: {
							$state = -1;
							if (this.status !== 1) {
								return;
							}
							$state = 5;
							continue $sm1;
						}
						case 2: {
							$state = -1;
							JS.Diagnostics.Debug.assert$1(ss.isValue(chartMetadata), "The 'chartMetadata' variable must have a value.");
							// The variable is used only while metadata is retrieved
							firstIteration = false;
							$QuickView_Client_Services_Charts_IndicatorDataWorker.$log.trace('[TimeSeries] Retrieving information about updated time series.');
							$state = 6;
							continue $sm1;
						}
						case 5:
						case 8:
						case 9: {
							if ($state === 5) {
								$state = 8;
							}
							try {
								$sm2:
								for (;;) {
									switch ($state) {
										case 8: {
											$state = -1;
											$t2 = this.$_apiClient.charts.getChartMetadata((ss.isNullOrUndefined(chartMetadata) ? null : chartMetadata.T));
											$state = 9;
											$t2.continueWith($sm);
											return;
										}
										case 9: {
											$state = -1;
											serverChartMetadata = $t2.getAwaitedResult();
											$state = 4;
											continue $sm1;
										}
										default: {
											break $sm2;
										}
									}
								}
							}
							catch ($t3) {
								$t3 = ss.Exception.wrap($t3);
								if (ss.isInstanceOfType($t3, QuickView.Client.Api.ServiceException)) {
									exc = ss.cast($t3, QuickView.Client.Api.ServiceException);
									$QuickView_Client_Services_Charts_IndicatorDataWorker.$log.error(function() {
										return ss.formatString('An error occurred during a request to the server. Will retry after {0}ms.', QuickView.Client.Common.AppEnvironment.config.get_genericServiceErrorRetryInterval());
									});
									$QuickView_Client_Services_Charts_IndicatorDataWorker.$log.error(exc);
								}
								else {
									throw $t3;
								}
							}
							$state = 7;
							continue $sm1;
						}
						case 4: {
							$state = -1;
							if (ss.isNullOrUndefined(serverChartMetadata)) {
								// Data has not changed since the last time it was downloaded
								$state = 2;
								continue $sm1;
							}
							else if (serverChartMetadata.X) {
								// Data has not changed since the last time it was downloaded. However the timestamp did change.
								$t5 = this.$_chartStorage.setChartMetadataTimestamp(serverChartMetadata.T);
								$state = 10;
								$t5.continueWith($sm);
								return;
							}
							else {
								// Data changed
								newChartMetadata = QuickView.Client.Models.Charts.ChartMetadata.$ctor(ss.cast(serverChartMetadata.S, Array), ss.cast(serverChartMetadata.D, Array), ss.cast(serverChartMetadata.I, Array), ss.cast(serverChartMetadata.IS, Array), serverChartMetadata.M);
								// Save data
								$t6 = this.$_chartStorage.setChartMetadata(serverChartMetadata.T, newChartMetadata);
								$state = 11;
								$t6.continueWith($sm);
								return;
							}
						}
						case 6: {
							$state = -1;
							if (this.status !== 1) {
								return;
							}
							$state = 13;
							continue $sm1;
						}
						case 7: {
							$state = -1;
							$t4 = ss.Task.delay(QuickView.Client.Common.AppEnvironment.config.get_genericServiceErrorRetryInterval());
							$state = 14;
							$t4.continueWith($sm);
							return;
						}
						case 10: {
							$state = -1;
							$t5.getAwaitedResult();
							$state = 2;
							continue $sm1;
						}
						case 11: {
							$state = -1;
							$t6.getAwaitedResult();
							// Update the "chartMetadata" variable
							chartMetadata = $QuickView_Client_Services_Data_DataRecord.create(QuickView.Client.Models.Charts.RuntimeChartMetadata).call(null, serverChartMetadata.T, new Date(), QuickView.Client.Models.Charts.RuntimeChartMetadata.$ctor(newChartMetadata));
							$state = 2;
							continue $sm1;
						}
						case 13:
						case 16:
						case 17: {
							if ($state === 13) {
								$state = 16;
							}
							try {
								$sm3:
								for (;;) {
									switch ($state) {
										case 16: {
											$state = -1;
											$t7 = this.$_apiClient.charts.getTimeSeriesUpdates(timeSeriesUpdatesTimestamp);
											$state = 17;
											$t7.continueWith($sm);
											return;
										}
										case 17: {
											$state = -1;
											timeSeriesUpdates = $t7.getAwaitedResult();
											$state = 12;
											continue $sm1;
										}
										default: {
											break $sm3;
										}
									}
								}
							}
							catch ($t8) {
								$t8 = ss.Exception.wrap($t8);
								if (ss.isInstanceOfType($t8, QuickView.Client.Api.ServiceException)) {
									exc1 = ss.cast($t8, QuickView.Client.Api.ServiceException);
									$QuickView_Client_Services_Charts_IndicatorDataWorker.$log.error(function() {
										return ss.formatString('An error occurred during a request to the server. Will retry after {0}ms.', QuickView.Client.Common.AppEnvironment.config.get_genericServiceErrorRetryInterval());
									});
									$QuickView_Client_Services_Charts_IndicatorDataWorker.$log.error(exc1);
								}
								else {
									throw $t8;
								}
							}
							$state = 15;
							continue $sm1;
						}
						case 12: {
							$state = -1;
							if (ss.isNullOrUndefined(timeSeriesUpdates) || ss.isNullOrUndefined(timeSeriesUpdates.S) || timeSeriesUpdates.S.length === 0) {
								if (ss.isValue(timeSeriesUpdates)) {
									// Remember the timestamp for the next check
									timeSeriesUpdatesTimestamp = timeSeriesUpdates.T;
								}
								// No changes on the server
								$QuickView_Client_Services_Charts_IndicatorDataWorker.$log.trace('[TimeSeries] No updates on the server.');
								$state = 24;
								continue $sm1;
							}
							else {
								$QuickView_Client_Services_Charts_IndicatorDataWorker.$log.trace(function() {
									return ss.formatString('[TimeSeries] The server returned information about {0} updated time series.', timeSeriesUpdates.S.length);
								});
								timeSeriesUpdatesTimestamp = timeSeriesUpdates.T;
							}
							$QuickView_Client_Services_Charts_IndicatorDataWorker.$log.trace('[TimeSeries] Updating time series.');
							$QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.$onUpdateProcess(this, ss.EventArgs.Empty);
							// The index of the time series being updated
							index = { $: -1 };
							// The total number of time series being updated
							updateCount = { $: timeSeriesUpdates.S.length };
							processedTimeSeriesDict = {};
							// Using JsDictionary.Count is very ineffective thus a separate counter should be used.
							processedTimeSeriesCount = 0;
							// The last inspected value of ChartDataUsage.Version
							chartDataUsageVersion = 0;
							// The IDs of the time series to load in a batch
							timeSeriesBatchList = { $: [] };
							updateList = timeSeriesUpdates.S;
							headerListLastIndex = 0;
							inUseListLastIndex = 0;
							$state = 18;
							continue $sm1;
						}
						case 14: {
							$state = -1;
							$t4.getAwaitedResult();
							$state = 3;
							continue $sm1;
						}
						case 15: {
							$state = -1;
							$t9 = ss.Task.delay(QuickView.Client.Common.AppEnvironment.config.get_genericServiceErrorRetryInterval());
							$state = 19;
							$t9.continueWith($sm);
							return;
						}
						case 18: {
							$state = -1;
							if (!(processedTimeSeriesCount < timeSeriesUpdates.S.length)) {
								$state = 20;
								continue $sm1;
							}
							// Indicates if time series that are in use should have priority over
							// the rest of the time series
							chartDataUsageChanged = chartDataUsageVersion < $QuickView_Client_Services_Charts_IndicatorDataUsage.version;
							chartDataUsageVersion = $QuickView_Client_Services_Charts_IndicatorDataUsage.version;
							if (chartDataUsageChanged) {
								// The list of displayed indicator has changed
								// Build three list of time series
								// - In use (header)
								// - In use (not header)
								// - Not in use
								headerList = [];
								inUseList = [];
								notInUseList = [];
								for ($t10 = 0; $t10 < timeSeriesUpdates.S.length; $t10++) {
									update = timeSeriesUpdates.S[$t10];
									if (ss.isValue(processedTimeSeriesDict[update.I])) {
										// The time series are already processed
										continue;
									}
									if ($QuickView_Client_Services_Charts_IndicatorDataUsage.$isInUse$1(update.I)) {
										if ($QuickView_Client_Services_Charts_IndicatorDataUsage.$isHeader$1(update.I)) {
											headerList.push(update);
										}
										else {
											inUseList.push(update);
										}
									}
									else {
										notInUseList.push(update);
									}
								}
								headerListLastIndex = headerList.length;
								inUseListLastIndex = headerList.length + inUseList.length;
								updateList = Enumerable.from(headerList).concat(inUseList).concat(notInUseList);
							}
							// Select time series for the batch
							ss.clear(timeSeriesBatchList.$);
							dataPriority = { $: 3 };
							// The index is used to determine the priority of the data
							updateIndex = -1;
							$t11 = ss.getEnumerator(updateList);
							try {
								while ($t11.moveNext()) {
									update1 = $t11.current();
									updateIndex++;
									if (ss.isValue(processedTimeSeriesDict[update1.I])) {
										// The time series are already processed
										continue;
									}
									// MUST be done here instead of the end of the iteration since there are a lot of conditions
									// to skip the download
									processedTimeSeriesDict[update1.I] = JS.DBNull.get_value();
									processedTimeSeriesCount++;
									index.$++;
									$QuickView_Client_Services_Charts_IndicatorDataWorker.$log.trace(function() {
										return ss.formatString('[TimeSeries] Updating time series ID {0}.', update1.I);
									});
									if (ss.isNullOrEmptyString(update1.T)) {
										$QuickView_Client_Services_Charts_IndicatorDataWorker.$log.trace(function() {
											return ss.formatString('[TimeSeries] The server does not have any data for time series ID {0}. Skipping.', update1.I);
										});
										continue;
									}
									timestamp = timeSeriesTimestampDict[update1.I.toLowerCase()];
									if (ss.referenceEquals(timestamp, update1.T)) {
										$QuickView_Client_Services_Charts_IndicatorDataWorker.$log.trace(function() {
											return ss.formatString('[TimeSeries] No new data available for time series ID {0}. Skipping.', update1.I);
										});
										continue;
									}
									timeSeries = QuickView.Client.Models.Charts.RuntimeChartMetadata.getTimeSeries(chartMetadata.V, update1.I);
									if (ss.isNullOrUndefined(timeSeries)) {
										// Can happen if the list of time series changes on the server in the mean time
										continue;
									}
									if (timeSeries.M === 1 || timeSeries.M === 2 || timeSeries.M === 3 || timeSeries.M === 0) {
										// Valid
									}
									else {
										// This should never happen
										$QuickView_Client_Services_Charts_IndicatorDataWorker.$log.error(function() {
											return ss.formatString('Invalid meta resolution set for time series ID {0}.', timeSeries.I, timeSeries.M);
										});
										// Move to the next update
										continue;
									}
									timeSeriesBatchList.$.push($QuickView_$Client_Services_Charts_IndicatorDataWorker$TimeSeriesBatchItem.$ctor(timeSeries, timestamp, update1, index.$));
									// The priority of the data is determined by the highest priority in the batch,
									// that is the first time series added to the batch
									if (dataPriority.$ === 0) {
										if (updateIndex < headerListLastIndex) {
											dataPriority.$ = 1;
										}
										else if (updateIndex < inUseListLastIndex) {
											dataPriority.$ = 2;
										}
										else {
											dataPriority.$ = 3;
										}
									}
									if (timeSeriesBatchList.$.length >= 20) {
										break;
									}
								}
							}
							finally {
								$t11.dispose();
							}
							if (timeSeriesBatchList.$.length === 0) {
								// No time series has been loaded; this is possible if there are not prioritized time series
								// or if all time series has been skipped
								$state = 18;
								continue $sm1;
							}
							// Use the ID of the first time series
							eventArgs = new $QuickView_Client_Services_Charts_TimeSeriesUpdateEventArgs(index.$, timeSeriesBatchList.$.length, updateCount.$, dataPriority.$);
							$QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.$onBeginTimeSeriesUpdate(this, eventArgs);
							// Download data
							$state = 21;
							continue $sm1;
						}
						case 19: {
							$state = -1;
							$t9.getAwaitedResult();
							$state = 6;
							continue $sm1;
						}
						case 21: {
							$state = -1;
							if (this.status !== 1) {
								return;
							}
							$state = 23;
							continue $sm1;
						}
						case 20: {
							$state = -1;
							$QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.$onEndUpdateProcess(this, ss.EventArgs.Empty);
							$state = 24;
							continue $sm1;
						}
						case 23:
						case 26:
						case 27: {
							if ($state === 23) {
								$state = 26;
							}
							try {
								$sm4:
								for (;;) {
									switch ($state) {
										case 26: {
											$state = -1;
											$QuickView_Client_Services_Charts_IndicatorDataWorker.$log.trace(function() {
												return ss.formatString('[TimeSeries] Downloading data for {0} time series.', timeSeriesBatchList.$.length);
											});
											$t12 = this.$_apiClient.charts.getMultipleTimeSeriesData(Enumerable.from(timeSeriesBatchList.$).select(function(x) {
												return QuickView.Client.Api.TimeSeriesRequestInfo.$ctor(x.timeSeries.I, x.localTimestamp);
											}));
											$state = 27;
											$t12.continueWith($sm);
											return;
										}
										case 27: {
											$state = -1;
											timeSeriesDataList = $t12.getAwaitedResult();
											$state = 22;
											continue $sm1;
										}
										default: {
											break $sm4;
										}
									}
								}
							}
							catch ($t13) {
								$t13 = ss.Exception.wrap($t13);
								if (ss.isInstanceOfType($t13, QuickView.Client.Api.ServiceException)) {
									exc2 = ss.cast($t13, QuickView.Client.Api.ServiceException);
									// Saltarelle compiler bug workaround
									// https://github.com/erik-kallen/SaltarelleCompiler/issues/417
									localExc = { $: exc2 };
									$QuickView_Client_Services_Charts_IndicatorDataWorker.$log.error(function() {
										return ss.formatString('An error occurred during a request to the server. Will retry after {0}ms.', QuickView.Client.Common.AppEnvironment.config.get_genericServiceErrorRetryInterval());
									});
									$QuickView_Client_Services_Charts_IndicatorDataWorker.$log.error(localExc.$);
									// Use the ID of the first time series
									$QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.$onTimeSeriesUpdateError(this, ss.mkdel({ index: index, timeSeriesBatchList: timeSeriesBatchList, updateCount: updateCount, dataPriority: dataPriority, localExc: localExc }, function() {
										return new $QuickView_Client_Services_Charts_TimeSeriesUpdateErrorEventArgs(this.index.$, this.timeSeriesBatchList.$.length, this.updateCount.$, this.dataPriority.$, this.localExc.$);
									}));
								}
								else {
									throw $t13;
								}
							}
							$state = 25;
							continue $sm1;
						}
						case 22: {
							$state = -1;
							$QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.$onEndTimeSeriesUpdate(this, eventArgs);
							$QuickView_Client_Services_Charts_IndicatorDataWorker.$log.trace(function() {
								return ss.formatString('[TimeSeries] Data loaded for {0} time series.', timeSeriesBatchList.$.length);
							});
							if (ss.isNullOrUndefined(timeSeriesDataList) || ss.isNullOrUndefined(timeSeriesDataList.S) || timeSeriesDataList.S.length === 0) {
								// No data is available so move to the next time series
								$state = 18;
								continue $sm1;
							}
							for ($t15 = 0; $t15 < timeSeriesBatchList.$.length; $t15++) {
								item1 = timeSeriesBatchList.$[$t15];
								timeSeriesTimestampDict[QuickView.Client.Models.Charts.TimeSeries.idLower(item1.timeSeries)] = item1.update.T;
							}
							{
								updateDataList = [];
								for ($t16 = 0; $t16 < timeSeriesDataList.S.length; $t16++) {
									timeSeriesData2 = timeSeriesDataList.S[$t16];
									if (ss.isNullOrUndefined(timeSeriesData2.I) || timeSeriesData2.I.length === 0) {
										// No data
										continue;
									}
									timeSeries1 = { $: QuickView.Client.Models.Charts.RuntimeChartMetadata.getTimeSeries(chartMetadata.V, timeSeriesData2.T) };
									JS.Diagnostics.Debug.assert(ss.isValue(timeSeries1.$));
									batchItem = Enumerable.from(timeSeriesBatchList.$).first(ss.mkdel({ timeSeries1: timeSeries1 }, function(x1) {
										return ss.referenceEquals(x1.timeSeries, this.timeSeries1.$);
									}));
									updateDataList.push($QuickView_Client_Services_Charts_TimeSeriesDataIntervalUpdateList.$ctor(timeSeries1.$, Enumerable.from(timeSeriesData2.I).select(function(x2) {
										return $QuickView_Client_Services_Charts_TimeSeriesDataIntervalUpdate.$ctor(new Date(x2.D), x2.I);
									}).toArray(), batchItem.update.T, new Date(batchItem.update.D)));
								}
								this.$_chartStorage.updateMultipleTimeSeriesData(updateDataList);
							}
							$state = 18;
							continue $sm1;
						}
						case 24: {
							$state = -1;
							// Wait at least once and after than until all data is persisted to the database
							$t17 = ss.Task.delay(QuickView.Client.Common.AppEnvironment.config.get_chartDataPoolInterval());
							$state = 29;
							$t17.continueWith($sm);
							return;
						}
						case 25: {
							$state = -1;
							$t14 = ss.Task.delay(QuickView.Client.Common.AppEnvironment.config.get_genericServiceErrorRetryInterval());
							$state = 30;
							$t14.continueWith($sm);
							return;
						}
						case 29: {
							$state = -1;
							$t17.getAwaitedResult();
							$state = 28;
							continue $sm1;
						}
						case 28: {
							$state = -1;
							if (this.$_chartStorage.get_isDataPending()) {
								$state = 24;
								continue $sm1;
							}
							$state = 1;
							continue $sm1;
						}
						case 30: {
							$state = -1;
							$t14.getAwaitedResult();
							$state = 21;
							continue $sm1;
						}
						default: {
							break $sm1;
						}
					}
				}
			});
			$sm();
		},
		stop: function() {
			// So nothing. The thread periodically checks if the process is still running and will exit accordingly.
		}
	}, $QuickView_Client_Services_Worker, [ss.IDisposable]);
	ss.initClass($QuickView_Client_Services_Charts_IndicatorEventArgs, $asm, {}, ss.EventArgs);
	ss.initClass($QuickView_Client_Services_Charts_TimeSeriesDataChangedEventArgs, $asm, {}, ss.EventArgs);
	ss.initClass($QuickView_Client_Services_Charts_TimeSeriesDataIntervalUpdate, $asm, {});
	ss.initClass($QuickView_Client_Services_Charts_TimeSeriesDataIntervalUpdateList, $asm, {});
	ss.initClass($QuickView_Client_Services_Charts_TimeSeriesDataPointRetrieval, $asm, {});
	ss.initClass($QuickView_Client_Services_Charts_TimeSeriesEventArgs, $asm, {}, ss.EventArgs);
	ss.initClass($QuickView_Client_Services_Charts_TimeSeriesPeriodData, $asm, {});
	ss.initClass($QuickView_Client_Services_Charts_TimeSeriesPeriodDataRequest, $asm, {});
	ss.initEnum($QuickView_Client_Services_Charts_TimeSeriesUpdateDataPriority, $asm, { none: 0, header: 1, inUse: 2, notInUse: 3 });
	ss.initClass($QuickView_Client_Services_Charts_TimeSeriesUpdateEventArgs, $asm, {}, ss.EventArgs);
	ss.initClass($QuickView_Client_Services_Charts_TimeSeriesUpdateErrorEventArgs, $asm, {}, $QuickView_Client_Services_Charts_TimeSeriesUpdateEventArgs);
	ss.initClass($QuickView_Client_Services_Data_$TimeSeriesDataUtils, $asm, {});
	ss.initClass($QuickView_Client_Services_Data_$WebSqlDatabaseUpgrade, $asm, {});
	ss.initEnum($QuickView_Client_Services_Data_DataFormat, $asm, { none: 0, json: 1, lzStringJson: 2 });
	ss.initClass($QuickView_Client_Services_Data_DataRecord, $asm, {});
	ss.initClass($QuickView_Client_Services_Data_DataStorage, $asm, {
		upgrade: function() {
			$QuickView_Client_Services_Data_DataStorage.$log.trace('[Upgrade]');
			return $QuickView_Client_Services_Data_WebSqlDatabaseExtensions.$upgrade(this.$_database, $QuickView_Client_Services_Data_DataStorage.$upgradeList);
		},
		containsTimeSeriesData: function() {
			$QuickView_Client_Services_Data_DataStorage.$log.trace('[ContainsTimeSeriesData]');
			return $QuickView_Client_Services_Data_WebSqlDatabaseExtensions.readTransaction(Boolean).call(null, this.$_database, function(tran) {
				tran.executeSql$1("select count(*) as 'Count' from TimeSeriesData", null, function(resultSet) {
					var row = resultSet.rows.item(0);
					var count = row['Count'];
					tran.result = count > 0;
				});
			});
		},
		getChartMetadata: function() {
		    $QuickView_Client_Services_Data_DataStorage.$log.trace('[GetChartMetadata]');
		    var returnValue = $QuickView_Client_Services_Data_WebSqlDatabaseExtensions.readTransaction(ss.makeGenericType($QuickView_Client_Services_Data_DataRecord$1, [QuickView.Client.Models.Charts.ChartMetadata])).call(null, this.$_database, function (tran) {
		        tran.executeSql$1('select * from Metadata', null, function (resultSet) {
		            if (resultSet.rows.length === 0) {
		                // No data found
		                tran.result = null;
		            }
		            else {
		                var row = resultSet.rows.item(0);
		                var timestamp = row['Timestamp'];
		                var format = row['Format'];
		                var data = row['Data'];
		                var timeUpdated = $QuickView_Client_Services_Data_DataStorage.$convertFromDbDateTime(row['TimeUpdated']);
		                var chartMetadata = $QuickView_Client_Services_Data_DataStorage.$convertFromDbFormat(QuickView.Client.Models.Charts.ChartMetadata).call(null, format, data);
		                var result = $QuickView_Client_Services_Data_DataRecord.create(QuickView.Client.Models.Charts.ChartMetadata).call(null, timestamp, timeUpdated, chartMetadata);
		                tran.result = result;
		            }
		        });
		    });
		    console.log(returnValue);
		    return returnValue;
		},
		setChartMetadata: function(timestamp, metadata) {
			JS.ArgumentHelper.notNullOrEmpty(timestamp, 'timestamp');
			JS.ArgumentHelper.notNull(metadata, 'metadata');
			$QuickView_Client_Services_Data_DataStorage.$log.trace('[SetChartMetadata]');
			return $QuickView_Client_Services_Data_WebSqlDatabaseExtensions.transaction(Object).call(null, this.$_database, function(tran) {
				tran.executeSql('delete from Metadata', []);
				var dbData = $QuickView_Client_Services_Data_DataStorage.$convertToDbFormat(1, metadata);
				tran.executeSql('insert into Metadata(Timestamp, Format, Data, DataSize, TimeUpdated) values (?, ?, ?, ?, ?)', [timestamp, 1, dbData, dbData.length, $QuickView_Client_Services_Data_DataStorage.$convertToDbDateTime(new Date())]);
			});
		},
		setChartMetadataTimestamp: function(timestamp) {
			JS.ArgumentHelper.notNullOrEmpty(timestamp, 'timestamp');
			$QuickView_Client_Services_Data_DataStorage.$log.trace('[SetChartMetadataTimestamp]');
			return $QuickView_Client_Services_Data_WebSqlDatabaseExtensions.transaction(Object).call(null, this.$_database, function(tran) {
				tran.executeSql('update Metadata set Timestamp = ?', [timestamp]);
			});
		},
		getAllTimeSeriesTimestamps: function() {
			$QuickView_Client_Services_Data_DataStorage.$log.trace('[GetTimeSeriesTimestamps]');
			return $QuickView_Client_Services_Data_WebSqlDatabaseExtensions.readTransaction(ss.IList).call(null, this.$_database, function(tran) {
				tran.executeSql$1('select TimeSeriesID, Timestamp, TimeUpdated, TimeDataUpdated, LastDataPointTime from TimeSeriesTimestamp', null, function(resultSet) {
					var result = [];
					for (var k = 0; k < resultSet.rows.length; k++) {
						var row = resultSet.rows.item(k);
						var timestamp = QuickView.Client.Models.Charts.TimeSeriesTimestamp.$ctor(row['TimeSeriesID'], row['Timestamp'], $QuickView_Client_Services_Data_DataStorage.$convertFromDbDateTime(row['TimeUpdated']), $QuickView_Client_Services_Data_DataStorage.$convertFromDbDateTime(row['TimeDataUpdated']), $QuickView_Client_Services_Data_DataStorage.$convertFromDbDateTime$1(row['LastDataPointTime']));
						result.push(timestamp);
					}
					tran.result = result;
				});
			});
		},
		setMultipleTimeSeriesDataTimestamps: function(list) {
			JS.ArgumentHelper.notNull(list, 'list');
			$QuickView_Client_Services_Data_DataStorage.$log.trace('[SetMultipleTimeSeriesDataTimestamp]');
			return $QuickView_Client_Services_Data_WebSqlDatabaseExtensions.transaction(String).call(null, this.$_database, function(tran) {
				var $t1 = ss.getEnumerator(list);
				try {
					while ($t1.moveNext()) {
						var item = $t1.current();
						tran.executeSql('insert or replace into TimeSeriesTimestamp (TimeSeriesID, Timestamp, TimeDataUpdated, TimeUpdated) values (?, ?, ?, ?)', [item.I, item.T, $QuickView_Client_Services_Data_DataStorage.$convertToDbDateTime(item.D), $QuickView_Client_Services_Data_DataStorage.$convertToDbDateTime(new Date())]);
						if (!ss.staticEquals(item.L, null)) {
							var dbTime = $QuickView_Client_Services_Data_DataStorage.$convertToDbDateTime(item.L);
							tran.executeSql('update TimeSeriesTimestamp set LastDataPointTime = ? where TimeSeriesID = ? and (LastDataPointTime is null or LastDataPointTime < ?)', [dbTime, item.I, dbTime]);
						}
					}
				}
				finally {
					$t1.dispose();
				}
			});
		},
		getAllTimeSeriesData: function() {
			return $QuickView_Client_Services_Data_WebSqlDatabaseExtensions.readTransaction(ss.IList).call(null, this.$_database, function(tran) {
				var resultList = [];
				tran.executeSql$1('select TimeSeriesID, Date, MetaResolution, Format, Data, LastDataPointTime, LastDataPointValue, TimeUpdated from TimeSeriesData', null, function(resultSet) {
					for (var k = 0; k < resultSet.rows.length; k++) {
						var row = resultSet.rows.item(k);
						var timeSeriesID = row['TimeSeriesID'];
						var format = row['Format'];
						var date = $QuickView_Client_Services_Data_DataStorage.$convertFromDbDateTime(row['Date']);
						var data = row['Data'];
						var timeUpdated = $QuickView_Client_Services_Data_DataStorage.$convertFromDbDateTime(row['TimeUpdated']);
						var result = $QuickView_Client_Services_Data_DataStorage.$convertFromDbFormat(Array).call(null, format, data);
						var record = $QuickView_Client_Services_Data_DataRecord.create(Array).call(null, null, timeUpdated, result);
						resultList.push($QuickView_Client_Services_Data_TimeSeriesDataRetrieval.$ctor(timeSeriesID, date, record));
					}
				});
				tran.result = resultList;
			});
		},
		updateMultipleTimeSeriesData: function(dataList) {
			JS.ArgumentHelper.notNull(dataList, 'dataList');
			$QuickView_Client_Services_Data_DataStorage.$log.trace('[UpdateMultipleTimeSeriesData]');
			return $QuickView_Client_Services_Data_WebSqlDatabaseExtensions.transaction(String).call(null, this.$_database, function(tran) {
				var $t1 = ss.getEnumerator(dataList);
				try {
					while ($t1.moveNext()) {
						var item = $t1.current();
						var dataFormat = 1;
						var lastDataPointTime = null;
						var lastDataPointValue = null;
						if (ss.isValue(item.A) && item.A.length > 0) {
							var encodedLastDataPointTime = ss.Int32.trunc(item.A[item.A.length - 2]);
							lastDataPointTime = $QuickView_Client_Services_Data_$TimeSeriesDataUtils.$convertTime(item.T.M, JS.DateTimeExtensions.toUtcExt(item.D), encodedLastDataPointTime).toDateTime().valueOf();
							lastDataPointValue = item.A[item.A.length - 1];
						}
						var dbData = $QuickView_Client_Services_Data_DataStorage.$convertToDbFormat(dataFormat, item.A);
						tran.executeSql('\r\ninsert or replace into TimeSeriesData \r\n(TimeSeriesID, Date, MetaResolution, Format, Data, DataSize, LastDataPointTime, LastDataPointValue, TimeUpdated) \r\nvalues (?, ?, ?, ?, ?, ?, ?, ?, ?)\r\n', [item.T.I, $QuickView_Client_Services_Data_DataStorage.$convertToDbDateTime(item.D), item.T.M, dataFormat, dbData, dbData.length, lastDataPointTime, lastDataPointValue, $QuickView_Client_Services_Data_DataStorage.$convertToDbDateTime(new Date())]);
					}
				}
				finally {
					$t1.dispose();
				}
			});
		},
		purgeOldData: function() {
			return $QuickView_Client_Services_Data_WebSqlDatabaseExtensions.transaction(Object).call(null, this.$_database, function(tran) {
				tran.executeSql('delete from TimeSeriesData where MetaResolution = ? and Date < ?', [1, $QuickView_Client_Services_Data_DataStorage.$convertToDbDateTime$1(JS.DateTimeExt.get_utcNow().addDays(-15))]);
			});
		},
		clear: function() {
			return $QuickView_Client_Services_Data_WebSqlDatabaseExtensions.transaction(Object).call(null, this.$_database, function(tran) {
				tran.executeSql('delete from Metadata', []);
				tran.executeSql('delete from TimeSeriesTimestamp', []);
				tran.executeSql('delete from TimeSeriesData', []);
			});
		}
	});
	ss.initClass($QuickView_Client_Services_Data_TimeSeriesDataRetrieval, $asm, {});
	ss.initClass($QuickView_Client_Services_Data_TimeSeriesDataUpdate, $asm, {});
	ss.initClass($QuickView_Client_Services_Data_WebSqlDatabase, $asm, {});
	ss.initClass($QuickView_Client_Services_Data_WebSqlDatabaseExtensions, $asm, {});
	ss.initClass($QuickView_Client_Services_Data_WebSqlException, $asm, {}, ss.Exception);
	$QuickView_Client_Services_Data_WebSqlException.$ctor1.prototype = $QuickView_Client_Services_Data_WebSqlException.$ctor2.prototype = $QuickView_Client_Services_Data_WebSqlException.prototype;
	ss.initClass($QuickView_Client_Services_Users_UserLoginSettings, $asm, {});
	ss.initEnum($QuickView_Client_Services_Users_UserLogOutPolicy, $asm, { default$1: 3, clearData: 1, clearUserName: 2 });
	ss.initClass($QuickView_Client_Services_Users_UserService, $asm, {
		autoLogIn: function() {
			var loginSettings = this.$_settingsStorage.get($QuickView_Client_Services_Users_UserLoginSettings).call(this.$_settingsStorage, 'QuickView4.User.Login');
			// If loginSettings != null and loginSettings.LoginResponse = null then only the user name is available
			if (ss.isNullOrUndefined(loginSettings) || ss.isNullOrUndefined(loginSettings.loginResponse)) {
				$QuickView_Client_Services_Users_UserService.$log.trace('AutoLogIn: Fail');
				return ss.Task.fromResult(null);
			}
			else {
				$QuickView_Client_Services_Users_UserService.$log.trace('AutoLogIn: Success');
				// Set the auth token to the service
				this.$_apiClient.userAuthToken = loginSettings.loginResponse.T;
				return ss.Task.fromResult(this.$createUser(loginSettings.loginResponse));
			}
		},
		getLoginSettings: function() {
			return this.$_settingsStorage.get($QuickView_Client_Services_Users_UserLoginSettings).call(this.$_settingsStorage, 'QuickView4.User.Login');
		},
		logIn: function(userName, password, persist) {
			var $state = 0, $tcs = new ss.TaskCompletionSource(), $t1, loginResponse, $t2, loginSettings;
			var $sm = ss.mkdel(this, function() {
				try {
					$sm1:
					for (;;) {
						switch ($state) {
							case 0: {
								$state = -1;
								JS.ArgumentHelper.notNullOrEmpty(userName, 'userName');
								JS.ArgumentHelper.notNullOrEmpty(password, 'password');
								$t1 = this.$_apiClient.users.logIn(userName, password);
								$state = 1;
								$t1.continueWith($sm);
								return;
							}
							case 1: {
								$state = -1;
								loginResponse = $t1.getAwaitedResult();
								if (ss.isNullOrUndefined(loginResponse)) {
									$QuickView_Client_Services_Users_UserService.$log.trace('LogIn: Fail');
									// Invalid user name or password
									$tcs.setResult(null);
									return;
								}
								else {
									$QuickView_Client_Services_Users_UserService.$log.trace('LogIn: Success');
									if (persist) {
										$t2 = $QuickView_Client_Services_Users_UserLoginSettings.$ctor();
										$t2.userName = loginResponse.U.N;
										$t2.loginResponse = loginResponse;
										loginSettings = $t2;
										this.$_settingsStorage.set($QuickView_Client_Services_Users_UserLoginSettings).call(this.$_settingsStorage, 'QuickView4.User.Login', loginSettings);
									}
									else {
										this.$_settingsStorage.remove('QuickView4.User.Login');
									}
									// Set the auth token to the service
									this.$_apiClient.userAuthToken = loginResponse.T;
									$tcs.setResult(this.$createUser(loginResponse));
									return;
								}
							}
							default: {
								break $sm1;
							}
						}
					}
				}
				catch ($t3) {
					$tcs.setException(ss.Exception.wrap($t3));
				}
			});
			$sm();
			return $tcs.task;
		},
		$createUser: function(loginResponse) {
			JS.ArgumentHelper.notNull(loginResponse, 'loginResponse');
			var user = loginResponse.U;
			return user;
		},
		logOut: function(policy) {
			var $state = 0, $tcs = new ss.TaskCompletionSource(), loginSettings, $t1;
			var $sm = ss.mkdel(this, function() {
				try {
					$sm1:
					for (;;) {
						switch ($state) {
							case 0: {
								$state = -1;
								$QuickView_Client_Services_Users_UserService.$log.trace('LogOut');
								if (JS.EnumExtensions.isSet(policy, 2)) {
									this.$_settingsStorage.remove('QuickView4.User.Login');
								}
								else {
									loginSettings = this.$_settingsStorage.get($QuickView_Client_Services_Users_UserLoginSettings).call(this.$_settingsStorage, 'QuickView4.User.Login');
									if (ss.isValue(loginSettings)) {
										// Keep the user name
										loginSettings.loginResponse = null;
									}
									this.$_settingsStorage.set($QuickView_Client_Services_Users_UserLoginSettings).call(this.$_settingsStorage, 'QuickView4.User.Login', loginSettings);
								}
								if (JS.EnumExtensions.isSet(policy, 1)) {
									$QuickView_Client_Services_Users_UserService.$log.trace('LogOut: Clear data');
									$t1 = this.$_chartDataStorage.clear();
									$state = 2;
									$t1.continueWith($sm);
									return;
								}
								$state = 1;
								continue $sm1;
							}
							case 2: {
								$state = -1;
								$t1.getAwaitedResult();
								$state = 1;
								continue $sm1;
							}
							case 1: {
								$state = -1;
								this.$_apiClient.userAuthToken = null;
								$state = -1;
								break $sm1;
							}
							default: {
								break $sm1;
							}
						}
					}
					$tcs.setResult(null);
				}
				catch ($t2) {
					$tcs.setException(ss.Exception.wrap($t2));
				}
			});
			$sm();
			return $tcs.task;
		}
	});
	ss.setMetadata($QuickView_Client_Services_Applications_ApplicationUpdateWorker, { attr: [new JS.Composition.PartCreationPolicyAttribute(1), new JS.Composition.ExportAttribute.$ctor1($QuickView_Client_Services_Worker), new JS.Composition.ExportAttribute.$ctor1($QuickView_Client_Services_Applications_ApplicationUpdateWorker)], members: [{ attr: [new JS.Composition.ImportingConstructorAttribute()], name: '.ctor', type: 1, params: [] }] });
	ss.setMetadata($QuickView_Client_Services_Caching_ObjectCache, { attr: [new JS.Composition.ExportAttribute(), new JS.Composition.PartCreationPolicyAttribute(2)] });
	ss.setMetadata($QuickView_Client_Services_Charts_$MemoryDataCache, { members: [{ attr: [new JS.Composition.ImportingConstructorAttribute()], name: '.ctor', type: 1, params: [] }] });
	ss.setMetadata($QuickView_Client_Services_Charts_ChartDataStorage, { attr: [new JS.Composition.ExportAttribute(), new JS.Composition.PartCreationPolicyAttribute(1)], members: [{ attr: [new JS.Composition.ImportingConstructorAttribute()], name: '.ctor', type: 1, params: [$QuickView_Client_Services_Data_DataStorage] }] });
	ss.setMetadata($QuickView_Client_Services_Charts_ChartService, { attr: [new JS.Composition.ExportAttribute(), new JS.Composition.PartCreationPolicyAttribute(1)], members: [{ attr: [new JS.Composition.ImportingConstructorAttribute()], name: '.ctor', type: 1, params: [$QuickView_Client_Services_Charts_ChartDataStorage] }] });
	ss.setMetadata($QuickView_Client_Services_Charts_IndicatorDataProvider, { attr: [new JS.Composition.ExportAttribute(), new JS.Composition.PartCreationPolicyAttribute(1)], members: [{ attr: [new JS.Composition.ImportingConstructorAttribute()], name: '.ctor', type: 1, params: [$QuickView_Client_Services_Charts_ChartService] }] });
	ss.setMetadata($QuickView_Client_Services_Charts_IndicatorDataType, { enumFlags: true });
	ss.setMetadata($QuickView_Client_Services_Charts_IndicatorDataWorker, { attr: [new JS.Composition.ExportAttribute.$ctor1($QuickView_Client_Services_Worker), new JS.Composition.PartCreationPolicyAttribute(1)], members: [{ attr: [new JS.Composition.ImportingConstructorAttribute()], name: '.ctor', type: 1, params: [QuickView.Client.Api.ApiClient, $QuickView_Client_Services_Charts_ChartDataStorage] }] });
	ss.setMetadata($QuickView_Client_Services_Data_DataStorage, { attr: [new JS.Composition.ExportAttribute(), new JS.Composition.PartCreationPolicyAttribute(1)], members: [{ attr: [new JS.Composition.ImportingConstructorAttribute()], name: '.ctor', type: 1, params: [] }] });
	ss.setMetadata($QuickView_Client_Services_Users_UserLogOutPolicy, { enumFlags: true });
	ss.setMetadata($QuickView_Client_Services_Users_UserService, { attr: [new JS.Composition.ExportAttribute(), new JS.Composition.PartCreationPolicyAttribute(1)], members: [{ attr: [new JS.Composition.ImportingConstructorAttribute()], name: '.ctor', type: 1, params: [QuickView.Client.Api.ApiClient, QuickView.Client.Common.Settings.SettingsStorage, $QuickView_Client_Services_Charts_ChartDataStorage] }] });
	(function() {
		$QuickView_Client_Services_Caching_ObjectCache.$purgeInterval = 60000;
	})();
	(function() {
		$QuickView_Client_Services_Charts_ChartDataEvents$Metadata.$1$ChangedField = null;
	})();
	(function() {
		$QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.$1$DataChangedField = null;
		$QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.$1$BeginUpdateProcessField = null;
		$QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.$1$EndUpdateProcessField = null;
		$QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.$1$BeginTimeSeriesUpdateField = null;
		$QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.$1$EndTimeSeriesUpdateField = null;
		$QuickView_Client_Services_Charts_ChartDataEvents$TimeSeries.$1$TimeSeriesUpdateErrorField = null;
	})();
	(function() {
		$QuickView_Client_Services_Charts_ChartDataStorage.$log = JL('Services.ChartDataStorage');
		$QuickView_Client_Services_Charts_ChartDataStorage.$timeSeriesDataUpdateBatchSize = 20;
	})();
	(function() {
		$QuickView_Client_Services_Charts_ChartPeriodProvider.$updateResolution = 2;
		$QuickView_Client_Services_Charts_ChartPeriodProvider.$_periodDict = null;
		$QuickView_Client_Services_Charts_ChartPeriodProvider.$_lastUpdateTime = ss.getDefaultValue(JS.DateTimeExt);
		$QuickView_Client_Services_Charts_ChartPeriodProvider.$_initialized = false;
	})();
	(function() {
		$QuickView_Client_Services_Charts_ChartService.$log = JL('Services.ChartService');
		$QuickView_Client_Services_Charts_ChartService.$emptyRecord = $QuickView_Client_Services_Data_DataRecord.create(Array).call(null, null, null, null);
	})();
	(function() {
		$QuickView_Client_Services_Charts_IndicatorDataProvider.$log = JL('Services.IndicatorDataProvider');
		$QuickView_Client_Services_Charts_IndicatorDataProvider.$_intradayTimeSeriesPeriod = null;
	})();
	(function() {
		$QuickView_Client_Services_Charts_IndicatorDataUsage.$_indicatorDict = {};
		$QuickView_Client_Services_Charts_IndicatorDataUsage.$_timeSeriesDict = {};
		$QuickView_Client_Services_Charts_IndicatorDataUsage.version = 0;
		$QuickView_Client_Services_Charts_IndicatorDataUsage.$_headerIndicator = null;
	})();
	(function() {
		$QuickView_Client_Services_Charts_IndicatorDataWorker.$log = JL('Services.IndicatorDataWorker');
	})();
	(function() {
		$QuickView_Client_Services_Data_WebSqlDatabaseExtensions.$log = JL('Services.SqlDatabase');
	})();
	(function() {
		$QuickView_Client_Services_Data_DataStorage.$upgradeList = [$QuickView_Client_Services_Data_$WebSqlDatabaseUpgrade.$ctor('', '1.0', function(x) {
			x.executeSql('\r\ncreate table if not exists Metadata\r\n(\r\n    Timestamp text not null,\r\n    Format integer not null,\r\n    DataSize integer not null,\r\n    Data text,\r\n    TimeUpdated integer not null\r\n)', []);
			x.executeSql('\r\ncreate table if not exists TimeSeriesTimestamp\r\n(\r\n    TimeSeriesID text not null primary key,\r\n    Timestamp text not null,\r\n    TimeDataUpdated integer not null,\r\n    LastDataPointTime integer null,\r\n    TimeUpdated integer not null\r\n)', []);
			x.executeSql('\r\ncreate table if not exists TimeSeriesData\r\n(\r\n    TimeSeriesID text not null,\r\n    Date integer not null,\r\n    MetaResolution integer not null,\r\n    Format integer not null,\r\n    DataSize integer not null,\r\n    Data text not null,\r\n    TimeUpdated integer not null,\r\n    primary key (TimeSeriesID, Date, MetaResolution)\r\n)', []);
			x.executeSql('create index IX_TimeSeriesData_Date on TimeSeriesData (Date)', []);
		}), $QuickView_Client_Services_Data_$WebSqlDatabaseUpgrade.$ctor('1.0', '1.1', function(x1) {
			// Recreate the database
			x1.executeSql('drop table Metadata', []);
			x1.executeSql('drop table TimeSeriesTimestamp', []);
			x1.executeSql('drop table TimeSeriesData', []);
			x1.executeSql('\r\ncreate table if not exists Metadata\r\n(\r\n    Timestamp text not null,\r\n    Format integer not null,\r\n    DataSize integer not null,\r\n    Data text,\r\n    TimeUpdated integer not null\r\n)', []);
			// TimeSeriesID - The ID of the series.
			// Timestamp - The timestamp of the data
			// TimeDataUpdated - The time data was uploaded to PerfAPI for the last time.
			// LastDataPointTime - The time of the last data point.
			// TimeUpdated - The last time the data has been downloaded from the server.
			x1.executeSql('\r\ncreate table if not exists TimeSeriesTimestamp\r\n(\r\n    TimeSeriesID text not null primary key,\r\n    Timestamp text not null,\r\n    TimeDataUpdated integer not null,\r\n    LastDataPointTime integer null,\r\n    TimeUpdated integer not null\r\n)', []);
			// TimeSeriesID - The ID of the series.
			// Date - the day (for intraday resolution) or year (daily resolution) of the data.
			// MetaResolution - the meta-resolution of the data.
			// Format - the ID of the data format.
			// DataSize - the size of the data.
			// Data - serialized data.
			// TimeUpdated - The last time the data has been downloaded from the server.
			x1.executeSql('\r\ncreate table if not exists TimeSeriesData\r\n(\r\n    TimeSeriesID text not null,\r\n    Date integer not null,\r\n    MetaResolution integer not null,\r\n    Format integer not null,\r\n    DataSize integer not null,\r\n    Data text not null,\r\n    LastDataPointTime integer null,\r\n    LastDataPointValue real null,\r\n    TimeUpdated integer not null,\r\n    primary key (TimeSeriesID, Date, MetaResolution)\r\n)', []);
			x1.executeSql('create index IX_TimeSeriesData_Date on TimeSeriesData (Date)', []);
		}), $QuickView_Client_Services_Data_$WebSqlDatabaseUpgrade.$ctor('1.1', '1.2', function(x2) {
			// Recreate the database
			x2.executeSql("delete from TimeSeriesTimestamp where TimeSeriesID like 'QR20%'", []);
			x2.executeSql("delete from TimeSeriesData where TimeSeriesID like 'QR20%'", []);
		}), $QuickView_Client_Services_Data_$WebSqlDatabaseUpgrade.$ctor('1.2', '1.3', function(x3) {
			// Recreate the database
			x3.executeSql('delete from TimeSeriesTimestamp', []);
			x3.executeSql('delete from TimeSeriesData', []);
		})];
		$QuickView_Client_Services_Data_DataStorage.$log = JL('Services.DataStorage');
	})();
	(function() {
		$QuickView_Client_Services_Users_UserService.$log = JL('Services.UserService');
	})();
})();
