(function() {
	'use strict';
	var $asm = {};
	global.QuickView = global.QuickView || {};
	global.QuickView.Client = global.QuickView.Client || {};
	global.QuickView.Client.Api = global.QuickView.Client.Api || {};
	ss.initAssembly($asm, 'QuickView.Client.Api');
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Api.ApiClient
	var $QuickView_Client_Api_ApiClient = function() {
		this.userAuthToken = null;
		this.services = null;
		this.charts = null;
		this.users = null;
		this.services = new $QuickView_Client_Api_ServiceApiClient(this);
		this.charts = new $QuickView_Client_Api_ChartApiClient(this);
		this.users = new $QuickView_Client_Api_UserApiClient(this);
	};
	$QuickView_Client_Api_ApiClient.__typeName = 'QuickView.Client.Api.ApiClient';
	global.QuickView.Client.Api.ApiClient = $QuickView_Client_Api_ApiClient;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Api.ApiHelper
	var $QuickView_Client_Api_ApiHelper = function() {
	};
	$QuickView_Client_Api_ApiHelper.__typeName = 'QuickView.Client.Api.ApiHelper';
	$QuickView_Client_Api_ApiHelper.isMethodCallSpecificError = function(exc) {
		JS.ArgumentHelper.notNull(exc, 'exc');
		return ss.contains($QuickView_Client_Api_ApiHelper.$genericServiceExceptionTypeList.value(), ss.getInstanceType(exc));
	};
	global.QuickView.Client.Api.ApiHelper = $QuickView_Client_Api_ApiHelper;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Api.ChartApiClient
	var $QuickView_Client_Api_ChartApiClient = function(apiClient) {
		$QuickView_Client_Api_PartApiClient.call(this, apiClient, 'chart');
	};
	$QuickView_Client_Api_ChartApiClient.__typeName = 'QuickView.Client.Api.ChartApiClient';
	global.QuickView.Client.Api.ChartApiClient = $QuickView_Client_Api_ChartApiClient;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Api.jQueryAjaxTextStatus
	var $QuickView_Client_Api_jQueryAjaxTextStatus = function() {
	};
	$QuickView_Client_Api_jQueryAjaxTextStatus.__typeName = 'QuickView.Client.Api.jQueryAjaxTextStatus';
	global.QuickView.Client.Api.jQueryAjaxTextStatus = $QuickView_Client_Api_jQueryAjaxTextStatus;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Api.PartApiClient
	var $QuickView_Client_Api_PartApiClient = function(apiClient, path) {
		this.apiClient = null;
		this.path = null;
		this.$_baseUrl = null;
		JS.ArgumentHelper.notNull(apiClient, 'apiClient');
		this.apiClient = apiClient;
		this.path = path;
		var isSSL = window.location.protocol.toUpperCase() === 'HTTPS:';
		var baseUrl = $QuickView_Client_Api_PartApiClient.$addTrailingSlash(QuickView.Client.Common.AppEnvironment.config.get_webServiceBaseUrl()) + $QuickView_Client_Api_PartApiClient.$addTrailingSlash(this.path);
		this.$_baseUrl = baseUrl;
	};
	$QuickView_Client_Api_PartApiClient.__typeName = 'QuickView.Client.Api.PartApiClient';
	$QuickView_Client_Api_PartApiClient.$addTrailingSlash = function(url) {
		if (ss.isNullOrEmptyString(url)) {
			return url;
		}
		if (url.charCodeAt(url.length - 1) !== 47) {
			url += '/';
		}
		return url;
	};
	global.QuickView.Client.Api.PartApiClient = $QuickView_Client_Api_PartApiClient;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Api.ServiceAccessDeniedException
	var $QuickView_Client_Api_ServiceAccessDeniedException = function(serviceError) {
		$QuickView_Client_Api_ServiceException.call(this, serviceError);
	};
	$QuickView_Client_Api_ServiceAccessDeniedException.__typeName = 'QuickView.Client.Api.ServiceAccessDeniedException';
	$QuickView_Client_Api_ServiceAccessDeniedException.$ctor1 = function(serviceError, message) {
		$QuickView_Client_Api_ServiceException.$ctor1.call(this, serviceError, message);
	};
	$QuickView_Client_Api_ServiceAccessDeniedException.$ctor2 = function(serviceError, message, inner) {
		$QuickView_Client_Api_ServiceException.$ctor2.call(this, serviceError, message, inner);
	};
	global.QuickView.Client.Api.ServiceAccessDeniedException = $QuickView_Client_Api_ServiceAccessDeniedException;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Api.ServiceApiClient
	var $QuickView_Client_Api_ServiceApiClient = function(apiClient) {
		$QuickView_Client_Api_PartApiClient.call(this, apiClient, 'service');
	};
	$QuickView_Client_Api_ServiceApiClient.__typeName = 'QuickView.Client.Api.ServiceApiClient';
	global.QuickView.Client.Api.ServiceApiClient = $QuickView_Client_Api_ServiceApiClient;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Api.ServiceArgumentException
	var $QuickView_Client_Api_ServiceArgumentException = function(serviceError) {
		$QuickView_Client_Api_ServiceException.call(this, serviceError);
	};
	$QuickView_Client_Api_ServiceArgumentException.__typeName = 'QuickView.Client.Api.ServiceArgumentException';
	$QuickView_Client_Api_ServiceArgumentException.$ctor1 = function(serviceError, message) {
		$QuickView_Client_Api_ServiceException.$ctor1.call(this, serviceError, message);
	};
	$QuickView_Client_Api_ServiceArgumentException.$ctor2 = function(serviceError, message, inner) {
		$QuickView_Client_Api_ServiceException.$ctor2.call(this, serviceError, message, inner);
	};
	global.QuickView.Client.Api.ServiceArgumentException = $QuickView_Client_Api_ServiceArgumentException;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Api.ServiceError
	var $QuickView_Client_Api_ServiceError = function() {
	};
	$QuickView_Client_Api_ServiceError.__typeName = 'QuickView.Client.Api.ServiceError';
	$QuickView_Client_Api_ServiceError.createInstance = function() {
		return $QuickView_Client_Api_ServiceError.$ctor();
	};
	$QuickView_Client_Api_ServiceError.$ctor = function() {
		var $this = {};
		$this.message = null;
		$this.messageDetail = null;
		return $this;
	};
	$QuickView_Client_Api_ServiceError.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Api.ServiceError = $QuickView_Client_Api_ServiceError;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Api.ServiceException
	var $QuickView_Client_Api_ServiceException = function(serviceError) {
		this.seviceError = null;
		ss.Exception.call(this);
		this.seviceError = serviceError;
	};
	$QuickView_Client_Api_ServiceException.__typeName = 'QuickView.Client.Api.ServiceException';
	$QuickView_Client_Api_ServiceException.$ctor1 = function(serviceError, message) {
		this.seviceError = null;
		ss.Exception.call(this, message);
		this.seviceError = serviceError;
	};
	$QuickView_Client_Api_ServiceException.$ctor2 = function(serviceError, message, inner) {
		this.seviceError = null;
		ss.Exception.call(this, message, inner);
		this.seviceError = serviceError;
	};
	global.QuickView.Client.Api.ServiceException = $QuickView_Client_Api_ServiceException;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Api.ServiceGenericException
	var $QuickView_Client_Api_ServiceGenericException = function(serviceError) {
		$QuickView_Client_Api_ServiceException.call(this, serviceError);
	};
	$QuickView_Client_Api_ServiceGenericException.__typeName = 'QuickView.Client.Api.ServiceGenericException';
	$QuickView_Client_Api_ServiceGenericException.$ctor1 = function(serviceError, message) {
		$QuickView_Client_Api_ServiceException.$ctor1.call(this, serviceError, message);
	};
	$QuickView_Client_Api_ServiceGenericException.$ctor2 = function(serviceError, message, inner) {
		$QuickView_Client_Api_ServiceException.$ctor2.call(this, serviceError, message, inner);
	};
	global.QuickView.Client.Api.ServiceGenericException = $QuickView_Client_Api_ServiceGenericException;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Api.ServiceNotFoundException
	var $QuickView_Client_Api_ServiceNotFoundException = function(serviceError) {
		$QuickView_Client_Api_ServiceException.call(this, serviceError);
	};
	$QuickView_Client_Api_ServiceNotFoundException.__typeName = 'QuickView.Client.Api.ServiceNotFoundException';
	$QuickView_Client_Api_ServiceNotFoundException.$ctor1 = function(serviceError, message) {
		$QuickView_Client_Api_ServiceException.$ctor1.call(this, serviceError, message);
	};
	$QuickView_Client_Api_ServiceNotFoundException.$ctor2 = function(serviceError, message, inner) {
		$QuickView_Client_Api_ServiceException.$ctor2.call(this, serviceError, message, inner);
	};
	global.QuickView.Client.Api.ServiceNotFoundException = $QuickView_Client_Api_ServiceNotFoundException;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Api.ServiceOfflineException
	var $QuickView_Client_Api_ServiceOfflineException = function() {
		$QuickView_Client_Api_ServiceException.call(this, null);
	};
	$QuickView_Client_Api_ServiceOfflineException.__typeName = 'QuickView.Client.Api.ServiceOfflineException';
	$QuickView_Client_Api_ServiceOfflineException.$ctor1 = function(message) {
		$QuickView_Client_Api_ServiceException.$ctor1.call(this, null, message);
	};
	$QuickView_Client_Api_ServiceOfflineException.$ctor2 = function(message, inner) {
		$QuickView_Client_Api_ServiceException.$ctor2.call(this, null, message, inner);
	};
	global.QuickView.Client.Api.ServiceOfflineException = $QuickView_Client_Api_ServiceOfflineException;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Api.ServiceTimeoutException
	var $QuickView_Client_Api_ServiceTimeoutException = function() {
		$QuickView_Client_Api_ServiceException.call(this, null);
	};
	$QuickView_Client_Api_ServiceTimeoutException.__typeName = 'QuickView.Client.Api.ServiceTimeoutException';
	$QuickView_Client_Api_ServiceTimeoutException.$ctor1 = function(message) {
		$QuickView_Client_Api_ServiceException.$ctor1.call(this, null, message);
	};
	$QuickView_Client_Api_ServiceTimeoutException.$ctor2 = function(message, inner) {
		$QuickView_Client_Api_ServiceException.$ctor2.call(this, null, message, inner);
	};
	global.QuickView.Client.Api.ServiceTimeoutException = $QuickView_Client_Api_ServiceTimeoutException;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Api.TimeSeriesRequestInfo
	var $QuickView_Client_Api_TimeSeriesRequestInfo = function() {
	};
	$QuickView_Client_Api_TimeSeriesRequestInfo.__typeName = 'QuickView.Client.Api.TimeSeriesRequestInfo';
	$QuickView_Client_Api_TimeSeriesRequestInfo.$encode = function($this) {
		var result = $this.I;
		if (false === ss.isNullOrEmptyString($this.T)) {
			result += ':' + $this.T;
		}
		return result;
	};
	$QuickView_Client_Api_TimeSeriesRequestInfo.$ctor = function(timeSeriesID, timestamp) {
		var $this = {};
		$this.I = null;
		$this.T = null;
		$this.I = timeSeriesID;
		$this.T = timestamp;
		return $this;
	};
	$QuickView_Client_Api_TimeSeriesRequestInfo.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.Api.TimeSeriesRequestInfo = $QuickView_Client_Api_TimeSeriesRequestInfo;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Api.UserApiClient
	var $QuickView_Client_Api_UserApiClient = function(apiClient) {
		$QuickView_Client_Api_PartApiClient.call(this, apiClient, 'user');
	};
	$QuickView_Client_Api_UserApiClient.__typeName = 'QuickView.Client.Api.UserApiClient';
	global.QuickView.Client.Api.UserApiClient = $QuickView_Client_Api_UserApiClient;
	ss.initClass($QuickView_Client_Api_ApiClient, $asm, {});
	ss.initClass($QuickView_Client_Api_ApiHelper, $asm, {});
	ss.initClass($QuickView_Client_Api_PartApiClient, $asm, {
		invokeGet: function(method, arguments1) {
			return this.$invoke(Object).call(this, 'GET', method, arguments1);
		},
		invokePost: function(method, arguments1) {
			return this.$invoke(Object).call(this, 'POST', method, arguments1);
		},
		invokeGet$1: function(T) {
			return function(method, arguments1) {
				return this.$invoke(T).call(this, 'GET', method, arguments1);
			};
		},
		invokePost$1: function(T) {
			return function(method, arguments1) {
				return this.$invoke(T).call(this, 'POST', method, arguments1);
			};
		},
		$invoke: function(T) {
			return function(httpMethod, methodName, arguments1) {
				JS.ArgumentHelper.notNullOrEmpty(httpMethod, 'httpMethod');
				JS.ArgumentHelper.notNullOrEmpty(methodName, 'method');
				var ajaxOptions = { type: httpMethod, url: this.$getMethodUrl(methodName), contentType: 'application/json', data: (ss.isNullOrUndefined(arguments1) ? null : arguments1), dataType: 'json', processData: true, cache: false, async: true, timeout: QuickView.Client.Common.AppEnvironment.config.get_serviceTimeout() };
				if (false === ss.isNullOrEmptyString(this.apiClient.userAuthToken)) {
					ajaxOptions.headers = { Authorization: 'QuickView ' + this.apiClient.userAuthToken };
				}
				$QuickView_Client_Api_PartApiClient.log.trace(function() {
					return { Method: methodName, Url: ajaxOptions.url, Arguments: arguments1 };
				});
				var taskCompletionSource = new ss.TaskCompletionSource();
				ajaxOptions.complete = function(request, textStatus) {
					var statusCode = request.status;
					$QuickView_Client_Api_PartApiClient.log.trace(function() {
						return { HttpStatusCode: statusCode, AjaxTextStatus: textStatus };
					});
					if (statusCode === 200) {
						JS.Threading.TaskCompletionSourceExtensions.setResultAsync(T).call(null, taskCompletionSource, $.parseJSON(request.responseText));
					}
					else if (statusCode === 204) {
						// The server did not return any content
						JS.Threading.TaskCompletionSourceExtensions.setResultAsync(T).call(null, taskCompletionSource, ss.getDefaultValue(T));
					}
					else {
						var serviceError;
						if (ss.isNullOrEmptyString(request.responseText)) {
							serviceError = null;
						}
						else {
							try {
								serviceError = $.parseJSON(request.responseText);
							}
							catch ($t1) {
								// In some cases the server can return an HTML page displaying the error.
								// In this case a deserialization error will occur
								var $t2 = $QuickView_Client_Api_ServiceError.$ctor();
								$t2.message = 'Unknown error.';
								$t2.messageDetail = 'Unknown error.';
								serviceError = $t2;
							}
							$QuickView_Client_Api_PartApiClient.log.trace(function() {
								return { ServiceError: serviceError };
							});
						}
						var methodInfo = ss.formatString(" Method name: '{0}'. Arguments: '{1}'", methodName, (ss.isNullOrUndefined(arguments1) ? null : $.param(arguments1)));
						try {
							if (ss.referenceEquals(textStatus, 'timeout'.toString())) {
								// Timeout
								throw new $QuickView_Client_Api_ServiceTimeoutException.$ctor1('The operation did not complete within the alloted time.' + methodInfo);
							}
							else if (statusCode === 0) {
								// An error occurred while sending the request; the most likely reason is that there is no connection
								// to the Internet or a connection to the server cannot be established.
								throw new $QuickView_Client_Api_ServiceOfflineException.$ctor1('No Internet access on the local machine or the server cannot be reached.');
							}
							else if (statusCode === 404) {
								// Invalid URL or invalid arguments
								throw new $QuickView_Client_Api_ServiceNotFoundException.$ctor1(serviceError, 'Invalid method name or invalid arguments.' + methodInfo);
							}
							else if (statusCode === 400) {
								throw new $QuickView_Client_Api_ServiceArgumentException.$ctor1(serviceError, 'Invalid arguments were passed to the server.' + methodInfo);
							}
							else if (statusCode === 401) {
								throw new $QuickView_Client_Api_ServiceAccessDeniedException.$ctor1(serviceError, 'Access is denied.' + methodInfo);
							}
							else if (statusCode === 500) {
								throw new $QuickView_Client_Api_ServiceGenericException.$ctor1(serviceError, 'An unknown error occurred on the server.' + methodInfo);
							}
							else {
								throw new $QuickView_Client_Api_ServiceGenericException.$ctor1(serviceError, ss.formatString('An unknown error occurred on the server. HTTP status: {0}.', request.statusText) + methodInfo);
							}
						}
						catch ($t3) {
							var exc = ss.Exception.wrap($t3);
							// Run the method async in order to return control to AJAX
							JS.Threading.TaskCompletionSourceExtensions.setExceptionAsync(T).call(null, taskCompletionSource, exc);
						}
					}
				};
				$.ajax(ajaxOptions);
				return taskCompletionSource.task;
			};
		},
		$getMethodUrl: function(methodName) {
			JS.ArgumentHelper.notNullOrEmpty(methodName, 'methodName');
			return this.$_baseUrl + methodName;
		}
	});
	ss.initClass($QuickView_Client_Api_ChartApiClient, $asm, {
		getChartMetadata: function(timestamp) {
			var $state = 0, $tcs = new ss.TaskCompletionSource(), $t1;
			var $sm = ss.mkdel(this, function() {
				try {
					$sm1:
					for (;;) {
						switch ($state) {
							case 0: {
								$state = -1;
								$t1 = this.invokeGet$1(QuickView.Api.Charts.ChartMetadata).call(this, 'GetChartMetadata', { timestamp: timestamp });
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
		getTimeSeriesUpdates: function(timestamp) {
			var $state = 0, $tcs = new ss.TaskCompletionSource(), $t1;
			var $sm = ss.mkdel(this, function() {
				try {
					$sm1:
					for (;;) {
						switch ($state) {
							case 0: {
								$state = -1;
								$t1 = this.invokeGet$1(QuickView.Api.Charts.TimeSeriesUpdates).call(this, 'GetTimeSeriesUpdates', { timestamp: timestamp });
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
		getTimeSeriesData: function(seriesID, tag, timestamp) {
			var $state = 0, $tcs = new ss.TaskCompletionSource(), $t1;
			var $sm = ss.mkdel(this, function() {
				try {
					$sm1:
					for (;;) {
						switch ($state) {
							case 0: {
								$state = -1;
								$t1 = this.invokeGet$1(QuickView.Api.Charts.TimeSeriesData).call(this, 'GetTimeSeriesData', { seriesID: seriesID, tag: tag, timestamp: timestamp });
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
		getMultipleTimeSeriesData: function(series) {
			var $state = 0, $tcs = new ss.TaskCompletionSource(), parameter, $t1;
			var $sm = ss.mkdel(this, function() {
				try {
					$sm1:
					for (;;) {
						switch ($state) {
							case 0: {
								$state = -1;
								JS.ArgumentHelper.notNull(series, 'series');
								parameter = ss.arrayFromEnumerable(Enumerable.from(series).select(function(x) {
									return $QuickView_Client_Api_TimeSeriesRequestInfo.$encode(x);
								})).join(';');
								$t1 = this.invokeGet$1(QuickView.Api.Charts.TimeSeriesDataList).call(this, 'GetMultipleTimeSeriesData', { series: parameter });
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
		}
	}, $QuickView_Client_Api_PartApiClient);
	ss.initEnum($QuickView_Client_Api_jQueryAjaxTextStatus, $asm, { success: 'success', notmodified: 'notmodified', nocontent: 'nocontent', error: 'error', timeout: 'timeout', abort: 'abort', parsererror: 'parsererror' }, true);
	ss.initClass($QuickView_Client_Api_ServiceException, $asm, {}, ss.Exception);
	$QuickView_Client_Api_ServiceException.$ctor1.prototype = $QuickView_Client_Api_ServiceException.$ctor2.prototype = $QuickView_Client_Api_ServiceException.prototype;
	ss.initClass($QuickView_Client_Api_ServiceAccessDeniedException, $asm, {}, $QuickView_Client_Api_ServiceException);
	$QuickView_Client_Api_ServiceAccessDeniedException.$ctor1.prototype = $QuickView_Client_Api_ServiceAccessDeniedException.$ctor2.prototype = $QuickView_Client_Api_ServiceAccessDeniedException.prototype;
	ss.initClass($QuickView_Client_Api_ServiceApiClient, $asm, {
		ping: function() {
			var $state = 0, $tcs = new ss.TaskCompletionSource(), $t1;
			var $sm = ss.mkdel(this, function() {
				try {
					$sm1:
					for (;;) {
						switch ($state) {
							case 0: {
								$state = -1;
								$t1 = this.invokeGet('Ping', null);
								$state = 1;
								$t1.continueWith($sm);
								return;
							}
							case 1: {
								$state = -1;
								$t1.getAwaitedResult();
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
	}, $QuickView_Client_Api_PartApiClient);
	ss.initClass($QuickView_Client_Api_ServiceArgumentException, $asm, {}, $QuickView_Client_Api_ServiceException);
	$QuickView_Client_Api_ServiceArgumentException.$ctor1.prototype = $QuickView_Client_Api_ServiceArgumentException.$ctor2.prototype = $QuickView_Client_Api_ServiceArgumentException.prototype;
	ss.initClass($QuickView_Client_Api_ServiceError, $asm, {});
	ss.initClass($QuickView_Client_Api_ServiceGenericException, $asm, {}, $QuickView_Client_Api_ServiceException);
	$QuickView_Client_Api_ServiceGenericException.$ctor1.prototype = $QuickView_Client_Api_ServiceGenericException.$ctor2.prototype = $QuickView_Client_Api_ServiceGenericException.prototype;
	ss.initClass($QuickView_Client_Api_ServiceNotFoundException, $asm, {}, $QuickView_Client_Api_ServiceException);
	$QuickView_Client_Api_ServiceNotFoundException.$ctor1.prototype = $QuickView_Client_Api_ServiceNotFoundException.$ctor2.prototype = $QuickView_Client_Api_ServiceNotFoundException.prototype;
	ss.initClass($QuickView_Client_Api_ServiceOfflineException, $asm, {}, $QuickView_Client_Api_ServiceException);
	$QuickView_Client_Api_ServiceOfflineException.$ctor1.prototype = $QuickView_Client_Api_ServiceOfflineException.$ctor2.prototype = $QuickView_Client_Api_ServiceOfflineException.prototype;
	ss.initClass($QuickView_Client_Api_ServiceTimeoutException, $asm, {}, $QuickView_Client_Api_ServiceException);
	$QuickView_Client_Api_ServiceTimeoutException.$ctor1.prototype = $QuickView_Client_Api_ServiceTimeoutException.$ctor2.prototype = $QuickView_Client_Api_ServiceTimeoutException.prototype;
	ss.initClass($QuickView_Client_Api_TimeSeriesRequestInfo, $asm, {});
	ss.initClass($QuickView_Client_Api_UserApiClient, $asm, {
		logIn: function(userName, password) {
			var $state = 0, $tcs = new ss.TaskCompletionSource(), $t1;
			var $sm = ss.mkdel(this, function() {
				try {
					$sm1:
					for (;;) {
						switch ($state) {
							case 0: {
								$state = -1;
								$t1 = this.invokeGet$1(QuickView.Api.Users.LoginResponse).call(this, 'LogIn', { userName: userName, password: password });
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
		get: function() {
			var $state = 0, $tcs = new ss.TaskCompletionSource(), $t1;
			var $sm = ss.mkdel(this, function() {
				try {
					$sm1:
					for (;;) {
						switch ($state) {
							case 0: {
								$state = -1;
								$t1 = this.invokeGet$1(QuickView.Api.Users.User).call(this, 'Get', null);
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
		changePassword: function(currentPassword, newPassword) {
			var $state = 0, $tcs = new ss.TaskCompletionSource(), $t1;
			var $sm = ss.mkdel(this, function() {
				try {
					$sm1:
					for (;;) {
						switch ($state) {
							case 0: {
								$state = -1;
								$t1 = this.invokeGet$1(Boolean).call(this, 'ChangePassword', { currentPassword: currentPassword, newPassword: newPassword });
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
		logOutAllSessions: function() {
			var $state = 0, $tcs = new ss.TaskCompletionSource(), $t1;
			var $sm = ss.mkdel(this, function() {
				try {
					$sm1:
					for (;;) {
						switch ($state) {
							case 0: {
								$state = -1;
								$t1 = this.invokeGet('LogOutAllSessions', null);
								$state = 1;
								$t1.continueWith($sm);
								return;
							}
							case 1: {
								$state = -1;
								$t1.getAwaitedResult();
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
	}, $QuickView_Client_Api_PartApiClient);
	ss.setMetadata($QuickView_Client_Api_ApiClient, { attr: [new JS.Composition.ExportAttribute(), new JS.Composition.PartCreationPolicyAttribute(1)], members: [{ attr: [new JS.Composition.ImportingConstructorAttribute()], name: '.ctor', type: 1, params: [] }] });
	(function() {
		$QuickView_Client_Api_PartApiClient.log = JL('ApiClient');
	})();
	(function() {
		$QuickView_Client_Api_ApiHelper.$genericServiceExceptionTypeList = new ss.Lazy(function() {
			return [$QuickView_Client_Api_ServiceOfflineException, $QuickView_Client_Api_ServiceAccessDeniedException, $QuickView_Client_Api_ServiceGenericException];
		});
	})();
})();
