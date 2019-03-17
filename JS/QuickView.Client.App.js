(function() {
	'use strict';
	var $asm = {};
	global.QuickView = global.QuickView || {};
	global.QuickView.Client = global.QuickView.Client || {};
	global.QuickView.Client.App = global.QuickView.Client.App || {};
	ss.initAssembly($asm, 'QuickView.Client.App');
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.App.Application.ServiceLocator
	var $QuickView_$Client_App_Application$ServiceLocator = function() {
	};
	$QuickView_$Client_App_Application$ServiceLocator.__typeName = 'QuickView.$Client.App.Application$ServiceLocator';
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.App.LogConfiguration
	var $QuickView_Client_App_$LogConfiguration = function() {
	};
	$QuickView_Client_App_$LogConfiguration.__typeName = 'QuickView.Client.App.$LogConfiguration';
	$QuickView_Client_App_$LogConfiguration.get_$loggers = function() {
		if (ss.isNullOrUndefined($QuickView_Client_App_$LogConfiguration.$_loggerList)) {
			$QuickView_Client_App_$LogConfiguration.$_loggerList = [$QuickView_Client_App_$LoggerConfiguration.$ctor1('Services.ChartService', JL.getWarnLevel()), $QuickView_Client_App_$LoggerConfiguration.$ctor1('Services.ChartDataStorage', JL.getWarnLevel()), $QuickView_Client_App_$LoggerConfiguration.$ctor1('Services.IndicatorDataProvider', JL.getWarnLevel()), $QuickView_Client_App_$LoggerConfiguration.$ctor1('Services.IndicatorDataWorker', JL.getWarnLevel()), $QuickView_Client_App_$LoggerConfiguration.$ctor1('Services.DataStorage', JL.getWarnLevel()), $QuickView_Client_App_$LoggerConfiguration.$ctor1('Services.SqlDatabase', JL.getWarnLevel()), $QuickView_Client_App_$LoggerConfiguration.$ctor1('Services.UserService', JL.getWarnLevel()), $QuickView_Client_App_$LoggerConfiguration.$ctor1('ApiClient', JL.getWarnLevel())];
		}
		return $QuickView_Client_App_$LogConfiguration.$_loggerList;
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.App.LoggerConfiguration
	var $QuickView_Client_App_$LoggerConfiguration = function() {
	};
	$QuickView_Client_App_$LoggerConfiguration.__typeName = 'QuickView.Client.App.$LoggerConfiguration';
	$QuickView_Client_App_$LoggerConfiguration.createInstance = function() {
		return $QuickView_Client_App_$LoggerConfiguration.$ctor();
	};
	$QuickView_Client_App_$LoggerConfiguration.$ctor = function() {
		var $this = {};
		$this.N = null;
		$this.L = 0;
		return $this;
	};
	$QuickView_Client_App_$LoggerConfiguration.$ctor1 = function(name, minLevel) {
		var $this = {};
		$this.N = null;
		$this.L = 0;
		$this.N = name;
		$this.L = minLevel;
		return $this;
	};
	$QuickView_Client_App_$LoggerConfiguration.isInstanceOfType = function() {
		return true;
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.App.Application
	var $QuickView_Client_App_Application = function(apiClient, userService, chartService) {
		this.$_apiClient = null;
		this.$_userService = null;
		this.$_chartService = null;
		this.$_mainPanel = null;
		this.$_chartMetadataChangedDialogShown = false;
		this.$1$ConnectivityStatusField = 0;
		this.$1$ConnectivityStatusChangedField = null;
		this.$1$DownloadProgressField = 0;
		this.$1$DownloadProgressChangedField = null;
		this.$1$DownloadCompleteField = null;
		this.$1$BeforeShutdownField = null;
		JS.ArgumentHelper.notNull(apiClient, 'apiClient');
		JS.ArgumentHelper.notNull(userService, 'userService');
		JS.ArgumentHelper.notNull(chartService, 'chartService');
		window.onerror = ss.mkdel(this, this.$onUnhandledException);
		this.$_apiClient = apiClient;
		this.$_userService = userService;
		this.$_chartService = chartService;
	};
	$QuickView_Client_App_Application.__typeName = 'QuickView.Client.App.Application';
	$QuickView_Client_App_Application.$getStackTrace = function() {
		return (new Error()).stack;
	};
	$QuickView_Client_App_Application.run = function(startupInfo) {
		JS.ArgumentHelper.notNull(startupInfo, 'startupInfo');
		if (ss.isValue(QuickView.Client.Common.AppContext.application)) {
			throw new ss.InvalidOperationException('The application is already started.');
		}
		// Available query parameters:
		// debug-log        - if "1" then log level is set to "All" for all logs
		// debug-updates    - if "0" then no new data is downloaded from the server
		var queryParameters = $QuickView_Client_App_Application.$getQueryParameters();
		var enableDebugLog = queryParameters['debug-log'] === '1';
		// Initialize logging
		$QuickView_Client_App_Application.$initializeLogging((enableDebugLog ? JL.getAllLevel() : null));
		$QuickView_Client_App_Application.$log = JL('Application');
		// Initialize culture
		// HACK This relies on the current implementation of Saltarelle compiler
		// Use lower case for AM/PM
		var dateTimeFormat = ss.CultureInfo.currentCulture.dateTimeFormat;
		// Ensure the fields exist
		if (!!(ss.isValue(dateTimeFormat.amDesignator) && ss.isValue(dateTimeFormat.pmDesignator))) {
			dateTimeFormat.amDesignator = 'am';
			dateTimeFormat.pmDesignator = 'pm';
		}
		var config = new $QuickView_Client_App_ApplicationConfiguration();
		// Initialize environment
		QuickView.Client.Common.AppEnvironment.init(startupInfo.environmentType, (startupInfo.mobile ? 1 : 2), startupInfo.version, config, queryParameters);
		// Initialize UI
		JS.UI.UIEnvironment.init(new JS.UI.Windows.WindowManager($('#panelWindowLayer'), (QuickView.Client.Common.AppEnvironment.get_isMobileDevice() ? 1 : 0)), new JS.UI.Dialogs.DialogManager($('#panelDialogLayer')), QuickView.Client.Common.AppEnvironment.get_isMobileDevice());
		// Must be executed BEFORE the IOC is initialized since it may trigger database initialization
		if (false === QuickView.Client.Services.Data.DataStorage.get_isSupported()) {
			// Local data storage is not supported
			QuickView.Client.UI.Common.UIElements.get_browserNotSupportedScreen().css('display', '');
			return;
		}
		// Create an IOC container
		$QuickView_Client_App_Application.$iocContainer = $QuickView_Client_App_Application.$createIocContainer();
		var application = $QuickView_Client_App_Application.$iocContainer.resolve($QuickView_Client_App_Application).call($QuickView_Client_App_Application.$iocContainer);
		QuickView.Client.Common.AppContext.init(application, new $QuickView_$Client_App_Application$ServiceLocator());
		// Start the application
		window.setTimeout(ss.mkdel(application, application.$start));
	};
	$QuickView_Client_App_Application.$initializeLogging = function(logLevel) {
		var appenderList = [JL.createConsoleAppender('Root')];
		var rootOptions = { level: JL.getAllLevel(), appenders: appenderList };
		JL().setOptions(rootOptions);
		// Apply configuration
		var $t1 = $QuickView_Client_App_$LogConfiguration.get_$loggers();
		for (var $t2 = 0; $t2 < $t1.length; $t2++) {
			var item = $t1[$t2];
			var $t4 = JL(item.N);
			var $t3 = logLevel;
			if (ss.isNullOrUndefined($t3)) {
				$t3 = item.L;
			}
			$t4.setOptions({ level: $t3 });
		}
		if (QuickView.Client.Common.AppEnvironment.get_production()) {
			// Set the minimum level on production
			var $t6 = JL();
			var $t5 = logLevel;
			if (ss.isNullOrUndefined($t5)) {
				$t5 = JL.getWarnLevel();
			}
			$t6.setOptions({ level: $t5 });
		}
	};
	$QuickView_Client_App_Application.$createIocContainer = function() {
		var log = JL('Application.IOC');
		var $t1 = new JS.Composition.IocContainer();
		$t1.enableTrace = true;
		var container = $t1;
		$QuickView_Client_App_Application.$log.trace('Registering individual types.');
		container.registerAsSingle$1(QuickView.Client.Common.Settings.SettingsStorage, QuickView.Client.Common.Settings.LocalStorageSettingsStorage).call(container);
		var assemblyList = ss.getAssemblies();
		for (var $t2 = 0; $t2 < assemblyList.length; $t2++) {
			var assembly = assemblyList[$t2];
			if (false === ss.startsWithString(assembly.toString(), 'QuickView.')) {
				// Ignore non-application and core assemblies
				continue;
			}
			log.trace(function() {
				return ss.formatString("Processing assembly '{0}'.", assembly.toString());
			});
			var typeList = ss.getAssemblyTypes(assembly);
			for (var $t3 = 0; $t3 < typeList.length; $t3++) {
				var type = typeList[$t3];
				var exportAttributeList = Enumerable.from(ss.getAttributes(type, JS.Composition.ExportAttribute, false)).select(function(x) {
					return ss.cast(x, JS.Composition.ExportAttribute);
				}).toArray();
				if (exportAttributeList.length === 0) {
					continue;
				}
				var policyAttribute = ss.cast(Enumerable.from(ss.getAttributes(type, JS.Composition.PartCreationPolicyAttribute, false)).firstOrDefault(null, ss.getDefaultValue(Object)), JS.Composition.PartCreationPolicyAttribute);
				for (var $t4 = 0; $t4 < exportAttributeList.length; $t4++) {
					var exportAttribute = exportAttributeList[$t4];
					var contractType = exportAttribute.contractType || type;
					var creationPolicy = (ss.isNullOrUndefined(policyAttribute) ? 2 : policyAttribute.creationPolicy);
					if (creationPolicy === 1) {
						container.registerAsSingle$7(contractType, type);
						log.trace(function() {
							return ss.formatString("Type '{0}' registered as a singleton.", ss.getTypeFullName(type));
						});
					}
					else {
						log.trace(function() {
							return ss.formatString("Type '{0}' registered as non-shared.", ss.getTypeFullName(type));
						});
						container.register$5(contractType, type);
					}
				}
			}
		}
		return container;
	};
	$QuickView_Client_App_Application.$getQueryParameters = function() {
		var result = {};
		var queryString = document.location.search;
		if (ss.isNullOrEmptyString(queryString)) {
			return result;
		}
		var argList = document.location.search.substring(1).split(String.fromCharCode(38));
		for (var k = 0; k < argList.length; k++) {
			var arg = ss.replaceAllString(decodeURIComponent(argList[k]), String.fromCharCode(43), String.fromCharCode(32));
			var key;
			var value;
			if (arg.indexOf(String.fromCharCode(61)) === -1) {
				key = arg.trim();
				value = '';
			}
			else {
				var kvp = arg.split(String.fromCharCode(61));
				key = kvp[0].trim();
				value = kvp[1].trim();
			}
			result[key.toLowerCase()] = value;
		}
		return result;
	};
	global.QuickView.Client.App.Application = $QuickView_Client_App_Application;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.App.ApplicationConfiguration
	var $QuickView_Client_App_ApplicationConfiguration = function() {
	};
	$QuickView_Client_App_ApplicationConfiguration.__typeName = 'QuickView.Client.App.ApplicationConfiguration';
	global.QuickView.Client.App.ApplicationConfiguration = $QuickView_Client_App_ApplicationConfiguration;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.App.ApplicationStartupInfo
	var $QuickView_Client_App_ApplicationStartupInfo = function() {
	};
	$QuickView_Client_App_ApplicationStartupInfo.__typeName = 'QuickView.Client.App.ApplicationStartupInfo';
	$QuickView_Client_App_ApplicationStartupInfo.$ctor = function() {
		var $this = {};
		$this.mobile = false;
		$this.version = null;
		$this.environmentType = null;
		return $this;
	};
	$QuickView_Client_App_ApplicationStartupInfo.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.App.ApplicationStartupInfo = $QuickView_Client_App_ApplicationStartupInfo;
	ss.initClass($QuickView_$Client_App_Application$ServiceLocator, $asm, {
		getService: function(T) {
			return function() {
				return $QuickView_Client_App_Application.$iocContainer.resolve(T).call($QuickView_Client_App_Application.$iocContainer);
			};
		}
	}, null, [QuickView.Client.Common.IServiceLocator]);
	ss.initClass($QuickView_Client_App_$LogConfiguration, $asm, {});
	ss.initClass($QuickView_Client_App_$LoggerConfiguration, $asm, {});
	ss.initClass($QuickView_Client_App_Application, $asm, {
		$start: function() {
			var $state = 0, $t1, dataStorage, $t2, $t3, databaseContainsTimeSeriesData, chartDataStorage, $t4, $t5, item, controllerList, $t6, item1, $t7, item2, metadataRecord, $t8;
			var $sm = ss.mkdel(this, function () {
				$sm1:
				for (;;) {
					switch ($state) {
						case 0: {
							$state = -1;
							// Hide the loading screen since the application is loaded
							QuickView.Client.UI.Common.UIElements.get_loadingScreen().hide();
							// Initialize UI
							QuickView.Client.UI.Common.UIElements.get_application().element.addClass((QuickView.Client.Common.AppEnvironment.get_isMobileDevice() ? 'mobile' : 'desktop'));
							$QuickView_Client_App_Application.$log.info(function() {
								return ss.formatString('Starting application v{0}', QuickView.Client.Common.AppEnvironment.version.number);
							});
							$t1 = this.$logIn();
							$state = 1;
							$t1.continueWith($sm);
							return;
						}
						case 1: {
							$state = -1;
							$t1.getAwaitedResult();
							// Database
							$QuickView_Client_App_Application.$log.trace('Initializing database...');
							QuickView.Client.UI.Common.UIElements.get_loadingScreen().show$1('Initializing database...');
							dataStorage = $QuickView_Client_App_Application.$iocContainer.resolve(QuickView.Client.Services.Data.DataStorage).call($QuickView_Client_App_Application.$iocContainer);
							$t2 = dataStorage.upgrade();
							$state = 2;
							$t2.continueWith($sm);
							return;
						}
						case 2: {
							$state = -1;
							$t2.getAwaitedResult();
							$t3 = dataStorage.containsTimeSeriesData();
							$state = 3;
							$t3.continueWith($sm);
							return;
						}
						case 3: {
							$state = -1;
							databaseContainsTimeSeriesData = $t3.getAwaitedResult();
							$QuickView_Client_App_Application.$log.trace('Loading data from database...');
							chartDataStorage = $QuickView_Client_App_Application.$iocContainer.resolve(QuickView.Client.Services.Charts.ChartDataStorage).call($QuickView_Client_App_Application.$iocContainer);
							$t4 = chartDataStorage.initialize();
							$state = 4;
							$t4.continueWith($sm);
							return;
						}
						case 4: {
							$state = -1;
							$t4.getAwaitedResult();
							// Start workers
							$QuickView_Client_App_Application.$log.trace('Starting workers...');
							QuickView.Client.UI.Common.UIElements.get_loadingScreen().show$1('Starting workers...');
							$t5 = ss.getEnumerator($QuickView_Client_App_Application.$iocContainer.resolveAll(QuickView.Client.Services.Worker).call($QuickView_Client_App_Application.$iocContainer));
							try {
								while ($t5.moveNext()) {
									item = $t5.current();
									$QuickView_Client_App_Application.$log.trace(function() {
										return ss.formatString("Starting worker '{0}'.", ss.getTypeFullName(ss.getInstanceType(item)));
									});
									item.start();
								}
							}
							finally {
								$t5.dispose();
							}
							// Start controllers
							$QuickView_Client_App_Application.$log.trace('Starting controllers...');
							QuickView.Client.UI.Common.UIElements.get_loadingScreen().show$1('Starting controllers...');
							controllerList = $QuickView_Client_App_Application.$iocContainer.resolveAll(QuickView.Client.Controllers.IController).call($QuickView_Client_App_Application.$iocContainer);
							$t6 = ss.getEnumerator(controllerList);
							try {
								while ($t6.moveNext()) {
									item1 = $t6.current();
									$QuickView_Client_App_Application.$log.trace(function() {
										return ss.formatString("Initializing controller '{0}'.", ss.getTypeFullName(ss.getInstanceType(item1)));
									});
									item1.initialize();
								}
							}
							finally {
								$t6.dispose();
							}
							$t7 = ss.getEnumerator(controllerList);
							try {
								while ($t7.moveNext()) {
									item2 = $t7.current();
									$QuickView_Client_App_Application.$log.trace(function() {
										return ss.formatString("Starting controller '{0}'.", ss.getTypeFullName(ss.getInstanceType(item2)));
									});
									item2.run();
								}
							}
							finally {
								$t7.dispose();
							}
							// Load metadata
							$QuickView_Client_App_Application.$log.trace('Loading metadata...');
							QuickView.Client.UI.Common.UIElements.get_loadingScreen().show$1('Loading metadata...');
							$state = 5;
							continue $sm1;
						}
						case 5: {
							$state = -1;
							if (!ss.isNullOrUndefined(metadataRecord = this.$_chartService.getMetadata())) {
								$state = 6;
								continue $sm1;
							}
							// Wait until metadata becomes available
							$t8 = ss.Task.delay(1000);
							$state = 7;
							$t8.continueWith($sm);
							return;
						}
						case 7: {
							$state = -1;
							$t8.getAwaitedResult();
							$state = 5;
							continue $sm1;
						}
						case 6: {
							$state = -1;
							QuickView.Client.Common.AppContext.metadata = QuickView.Client.Models.Charts.RuntimeChartMetadata.$ctor(metadataRecord.V);
							QuickView.Client.Services.Charts.ChartDataEvents$Metadata.add_changed(ss.mkdel(this, this.$chartService_ChartMetadataChanged));
							$QuickView_Client_App_Application.$log.trace('Loading rows...');
							QuickView.Client.UI.Common.UIElements.get_loadingScreen().show$1('Loading rows...');
							this.$_mainPanel = new QuickView.Client.UI.MainView.Grid.MainPanel(this.$_userService);
							if (false === databaseContainsTimeSeriesData) {
								window.setTimeout(function() {
									(new QuickView.Client.UI.Dialogs.FirstRunDialog()).show();
								}, 3000);
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
		$chartService_ChartMetadataChanged: function(sender, e) {
			var $state = 0, result, $t1;
			var $sm = ss.mkdel(this, function() {
				var $doFinally = true;
				$sm1:
				for (;;) {
					switch ($state) {
						case 0: {
							$state = -1;
							// Although rarely this can happen when the chart metadata has been modified again
							// while the dialog is displayed. Showing the same dialog a second type will cause an exception.
							if (this.$_chartMetadataChangedDialogShown) {
								// A dialog is already displayed
								return;
							}
							this.$_chartMetadataChangedDialogShown = true;
							$state = 1;
							continue $sm1;
						}
						case 1:
						case 3:
						case 4: {
							if ($state === 1) {
								$state = 3;
							}
							try {
								$sm2:
								for (;;) {
									switch ($state) {
										case 3: {
											$state = -1;
											$t1 = JS.UI.Dialogs.ConfirmationDialog.show('QuickView', 'New rows have become available. The application must be reloaded in order to access them.\n\nReload now?');
											$state = 4;
											$t1.continueWith($sm);
											$doFinally = false;
											return;
										}
										case 4: {
											$state = -1;
											result = $t1.getAwaitedResult();
											$state = -1;
											break $sm2;
										}
										default: {
											break $sm2;
										}
									}
								}
							}
							finally {
								if ($doFinally) {
									this.$_chartMetadataChangedDialogShown = false;
								}
							}
							$state = 2;
							continue $sm1;
						}
						case 2: {
							$state = -1;
							if (result === true) {
								this.shutdown();
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
		$logIn: function() {
			var $state = 0, $tcs = new ss.TaskCompletionSource(), $t1, user, dialog, loginSettings, $t2, userName, password, persist, error, $t3, exc, $t5, $t6;
			var $sm = ss.mkdel(this, function() {
				var $doFinally = true;
				try {
					$sm1:
					for (;;) {
						switch ($state) {
							case 0: {
								$state = -1;
								$t1 = this.$_userService.autoLogIn();
								$state = 1;
								$t1.continueWith($sm);
								$doFinally = false;
								return;
							}
							case 1: {
								$state = -1;
								user = $t1.getAwaitedResult();
								if (ss.isNullOrUndefined(user)) {
									dialog = new QuickView.Client.UI.Dialogs.LoginDialog();
									$state = 3;
									continue $sm1;
								}
								$state = 2;
								continue $sm1;
							}
							case 3:
							case 4:
							case 5:
							case 6:
							case 7:
							case 8:
							case 9:
							case 10:
							case 11:
							case 12: {
								if ($state === 3) {
									$state = 4;
								}
								try {
									$sm2:
									for (;;) {
										switch ($state) {
											case 4: {
												$state = -1;
												// Load persisted user name if available
												loginSettings = this.$_userService.getLoginSettings();
												if (ss.isValue(loginSettings)) {
													dialog.set_userName(loginSettings.userName);
													dialog.set_persist(true);
												}
												$state = 5;
												continue $sm2;
											}
											case 5: {
												$state = -1;
												$t2 = dialog.showDialog();
												$state = 6;
												$t2.continueWith($sm);
												$doFinally = false;
												return;
											}
											case 6: {
												$state = -1;
												$t2.getAwaitedResult();
												// Log-in
												// Read user name and password
												userName = dialog.get_userName();
												password = dialog.get_password();
												persist = dialog.get_persist();
												QuickView.Client.UI.Common.UIElements.get_loadingScreen().show$1('Logging you in...');
												$state = 7;
												continue $sm2;
											}
											case 7:
											case 9:
											case 10: {
												if ($state === 7) {
													$state = 9;
												}
												try {
													$sm3:
													for (;;) {
														switch ($state) {
															case 9: {
																$state = -1;
																$t3 = this.$_userService.logIn(userName, password, persist);
																$state = 10;
																$t3.continueWith($sm);
																$doFinally = false;
																return;
															}
															case 10: {
																$state = -1;
																user = $t3.getAwaitedResult();
																error = null;
																$state = -1;
																break $sm3;
															}
															default: {
																break $sm3;
															}
														}
													}
												}
												catch ($t4) {
													exc = ss.Exception.wrap($t4);
													error = exc;
												}
												$state = 8;
												continue $sm2;
											}
											case 8: {
												$state = -1;
												QuickView.Client.UI.Common.UIElements.get_loadingScreen().hide();
												if (ss.isValue(error)) {
													$t5 = JS.UI.Dialogs.MessageDialog.open(1, 'Log-in', 'An unexpected error occurred:\n' + error.get_message());
													$state = 11;
													$t5.continueWith($sm);
													$doFinally = false;
													return;
												}
												else if (ss.isNullOrUndefined(user)) {
													$t6 = JS.UI.Dialogs.MessageDialog.open(1, 'Log-in', 'Invalid user name or password.');
													$state = 12;
													$t6.continueWith($sm);
													$doFinally = false;
													return;
												}
												else {
													$state = -1;
													break $sm2;
												}
											}
											case 11: {
												$state = -1;
												$t5.getAwaitedResult();
												$state = 5;
												continue $sm2;
											}
											case 12: {
												$state = -1;
												$t6.getAwaitedResult();
												$state = 5;
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
										dialog.close();
									}
								}
								$state = 2;
								continue $sm1;
							}
							case 2: {
								$state = -1;
								QuickView.Client.Common.AppContext.user = user;
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
		$onUnhandledException: function(event, source, lineno, column, error) {
			$QuickView_Client_App_Application.$log.error('An unhandled application error occurred.');
			$QuickView_Client_App_Application.$log.error(error);
			if (QuickView.Client.Common.AppEnvironment.get_isMobileDevice() && QuickView.Client.Common.AppEnvironment.environmentType === 'Development') {
				var message;
				if (ss.isInstanceOfType(error, ss.Exception)) {
					message = ss.cast(error, ss.Exception).get_message();
				}
				else if (ss.isValue(error)) {
					message = JSON.stringify(error);
				}
				else if (ss.isInstanceOfType(event, String)) {
					message = ss.cast(event, String);
				}
				else {
					message = JSON.stringify(event);
				}
				window.alert(ss.formatString('Unhandled application error: {0}\nAt {1}, Ln {2}, Col {3}\n{4}', message, source, lineno, column, $QuickView_Client_App_Application.$getStackTrace()));
			}
			return false;
			// Fire the default event handler
		},
		get_connectivityStatus: function() {
			return this.$1$ConnectivityStatusField;
		},
		set_connectivityStatus: function(value) {
			this.$1$ConnectivityStatusField = value;
		},
		add_connectivityStatusChanged: function(value) {
			this.$1$ConnectivityStatusChangedField = ss.delegateCombine(this.$1$ConnectivityStatusChangedField, value);
		},
		remove_connectivityStatusChanged: function(value) {
			this.$1$ConnectivityStatusChangedField = ss.delegateRemove(this.$1$ConnectivityStatusChangedField, value);
		},
		$onConnectivityStatusChanged: function(e) {
			JS.EventExtensions.fire(this.$1$ConnectivityStatusChangedField, this, e);
		},
		setConnectivityStatus: function(connectivityStatus) {
			if (this.get_connectivityStatus() === connectivityStatus) {
				return;
			}
			this.set_connectivityStatus(connectivityStatus);
			this.$onConnectivityStatusChanged(ss.EventArgs.Empty);
		},
		get_downloadProgress: function() {
			return this.$1$DownloadProgressField;
		},
		set_downloadProgress: function(value) {
			this.$1$DownloadProgressField = value;
		},
		add_downloadProgressChanged: function(value) {
			this.$1$DownloadProgressChangedField = ss.delegateCombine(this.$1$DownloadProgressChangedField, value);
		},
		remove_downloadProgressChanged: function(value) {
			this.$1$DownloadProgressChangedField = ss.delegateRemove(this.$1$DownloadProgressChangedField, value);
		},
		add_downloadComplete: function(value) {
			this.$1$DownloadCompleteField = ss.delegateCombine(this.$1$DownloadCompleteField, value);
		},
		remove_downloadComplete: function(value) {
			this.$1$DownloadCompleteField = ss.delegateRemove(this.$1$DownloadCompleteField, value);
		},
		setDownloadProgress: function(progress) {
			this.set_downloadProgress(progress);
			JS.EventExtensions.fire(this.$1$DownloadProgressChangedField, this, ss.EventArgs.Empty);
		},
		onDownloadComplete: function() {
			JS.EventExtensions.fire(this.$1$DownloadCompleteField, this, ss.EventArgs.Empty);
		},
		add_beforeShutdown: function(value) {
			this.$1$BeforeShutdownField = ss.delegateCombine(this.$1$BeforeShutdownField, value);
		},
		remove_beforeShutdown: function(value) {
			this.$1$BeforeShutdownField = ss.delegateRemove(this.$1$BeforeShutdownField, value);
		},
		$onBeforeShutdown: function(e) {
			JS.EventExtensions.fire(this.$1$BeforeShutdownField, this, e);
		},
		shutdown: function() {
			this.$onBeforeShutdown(ss.EventArgs.Empty);
			// Reload the application
			var url = window.location.href;
			var index = url.lastIndexOf(String.fromCharCode(35));
			if (index >= 0) {
				url = url.substr(0, index);
			}
			window.location.assign(url);
			//Window.Location.Reload(true);
		}
	}, null, [QuickView.Client.Common.IApplication, QuickView.Client.Services.Applications.IApplicationServiceAccess]);
	ss.initClass($QuickView_Client_App_ApplicationConfiguration, $asm, {
		get_webServiceBaseUrl: function() {
			return 'api';
		},
		get_serviceTimeout: function() {
			// Some calls may take long time if data is not already cached on the server.
			// Thus 60s could be too short.
			return 180000;
		},
		get_genericServiceErrorRetryInterval: function() {
			return 30000;
		},
		get_specificServiceErrorRetryInterval: function() {
			return 60000;
		},
		get_chartDataPoolInterval: function() {
			return 60000;
		},
		get_chartDataCacheTimeout: function() {
			return 300000;
		},
		get_processedChartDataCacheTimeout: function() {
			return 300000;
		},
		get_newVersionCheckInterval: function() {
			return 30;
		}
	}, null, [QuickView.Client.Common.IApplicationConfiguration]);
	ss.initClass($QuickView_Client_App_ApplicationStartupInfo, $asm, {});
	ss.setMetadata($QuickView_Client_App_Application, { attr: [new JS.Composition.ExportAttribute(), new JS.Composition.PartCreationPolicyAttribute(1)], members: [{ attr: [new JS.Composition.ImportingConstructorAttribute()], name: '.ctor', type: 1, params: [QuickView.Client.Api.ApiClient, QuickView.Client.Services.Users.UserService, QuickView.Client.Services.Charts.ChartService] }] });
	(function() {
		$QuickView_Client_App_$LogConfiguration.$_loggerList = null;
	})();
	(function() {
		$QuickView_Client_App_Application.$log = null;
		$QuickView_Client_App_Application.$iocContainer = null;
	})();
})();
