(function() {
	'use strict';
	var $asm = {};
	global.QuickView = global.QuickView || {};
	global.QuickView.Client = global.QuickView.Client || {};
	global.QuickView.Client.UI = global.QuickView.Client.UI || {};
	global.QuickView.Client.UI.Dialogs = global.QuickView.Client.UI.Dialogs || {};
	ss.initAssembly($asm, 'QuickView.Client.UI.Presentation');
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.HistoryDialog
	var $QuickView_Client_UI_HistoryDialog = function() {
		JS.UI.Dialogs.DefaultDialog.call(this);
	};
	$QuickView_Client_UI_HistoryDialog.__typeName = 'QuickView.Client.UI.HistoryDialog';
	$QuickView_Client_UI_HistoryDialog.open = function() {
		(new $QuickView_Client_UI_HistoryDialog()).show();
	};
	global.QuickView.Client.UI.HistoryDialog = $QuickView_Client_UI_HistoryDialog;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Dialogs.ApplicationUpdateDialog
	var $QuickView_Client_UI_Dialogs_ApplicationUpdateDialog = function(newVersion) {
		this.$buttonConfirm = null;
		this.$buttonCancel = null;
		this.$_newVersion = null;
		this.$_timer = null;
		JS.UI.Dialogs.DefaultDialog.call(this);
		this.$_newVersion = newVersion;
	};
	$QuickView_Client_UI_Dialogs_ApplicationUpdateDialog.__typeName = 'QuickView.Client.UI.Dialogs.ApplicationUpdateDialog';
	global.QuickView.Client.UI.Dialogs.ApplicationUpdateDialog = $QuickView_Client_UI_Dialogs_ApplicationUpdateDialog;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Dialogs.FirstRunDialog
	var $QuickView_Client_UI_Dialogs_FirstRunDialog = function() {
		this.$buttonDismiss = null;
		this.$labelChartDataUpdateProgress = null;
		this.$progressBar = null;
		JS.UI.Dialogs.DefaultDialog.call(this);
	};
	$QuickView_Client_UI_Dialogs_FirstRunDialog.__typeName = 'QuickView.Client.UI.Dialogs.FirstRunDialog';
	global.QuickView.Client.UI.Dialogs.FirstRunDialog = $QuickView_Client_UI_Dialogs_FirstRunDialog;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Dialogs.LoginDialog
	var $QuickView_Client_UI_Dialogs_LoginDialog = function() {
		this.$buttonLogIn = null;
		this.$checkBoxPersist = null;
		this.$textBoxUserName = null;
		this.$textBoxPassword = null;
		JS.UI.Dialogs.DefaultDialog.$ctor1.call(this, $((QuickView.Client.Common.AppEnvironment.get_isMobileDevice() ? '.-id-dialog-login-mobile' : '.-id-dialog-login-desktop')));
	};
	$QuickView_Client_UI_Dialogs_LoginDialog.__typeName = 'QuickView.Client.UI.Dialogs.LoginDialog';
	global.QuickView.Client.UI.Dialogs.LoginDialog = $QuickView_Client_UI_Dialogs_LoginDialog;
	ss.initClass($QuickView_Client_UI_HistoryDialog, $asm, {
		onInit: function() {
			JS.UI.Dialogs.Dialog.prototype.onInit.call(this);
			this.set_theme('black');
			this.set_cssClass('history');
			this.set_isModal(true);
			this.set_isFullScreen(QuickView.Client.Common.AppEnvironment.get_isMobileDevice());
		},
		onLoad: function() {
			JS.UI.Dialogs.DefaultDialog.prototype.onLoad.call(this);
			this.get_layout$1().get_header().set_title("WhatsNew");
			this.get_layout$1().get_header().get_icon().setIcon('history');
			this.get_layout$1().get_content().text('Loading...');
			var url = 'Content/History-Mobile.html';//(QuickView.Client.Common.AppEnvironment.get_isMobileDevice() ? 'Content/History-Mobile.html' : 'Content/History-Desktop.html');
			if (false === QuickView.Client.Common.AppEnvironment.get_isApplicationCached()) {
				// Add a random value to the URL to force it be downloaded from the server
				url += '?' + (new Date()).getTime().toString();
			}
			this.get_layout$1().get_content().load(url, ss.mkdel(this, function(data, textStatus, request) {
				if (textStatus === 'error') {
					this.get_layout$1().get_content().addClass('error');
					this.get_layout$1().get_content().text(ss.formatString("Unable to load what's new: {0} - {1}", request.status, request.statusText));
				}
			}));
		},
		onVisibilityChanged: function(e) {
			JS.UI.Dialogs.Dialog.prototype.onVisibilityChanged.call(this, e);
			if (false === this.get_isVisible()) {
				// Automatically close the dialog once it was hidden
				window.setTimeout(ss.mkdel(this, this.close), 100);
			}
		}
	}, JS.UI.Dialogs.DefaultDialog);
	ss.initClass($QuickView_Client_UI_Dialogs_ApplicationUpdateDialog, $asm, {
		onInit: function() {
			this.set_theme('black');
			JS.UI.Dialogs.Dialog.prototype.onInit.call(this);
			this.set_cssClass('application-update');
			this.set_isModal(true);
		},
		onLoad: function() {
			JS.UI.Dialogs.DefaultDialog.prototype.onLoad.call(this);
			this.get_layout$1().get_header().set_title('QuickView');
			this.get_layout$1().get_header().get_icon().setIcon('confirmation');
			var $t1 = new JS.UI.Controls.Button.$ctor1('Yes');
			$t1.set_isDefault(true);
			this.$buttonConfirm = JS.UI.Controls.ControlExtensions.appendTo$1(JS.UI.Controls.Button).call(null, $t1, this.get_layout$1().get_footer());
			this.$buttonCancel = JS.UI.Controls.ControlExtensions.appendTo$1(JS.UI.Controls.Button).call(null, new JS.UI.Controls.Button.$ctor1('No'), this.get_layout$1().get_footer());
			this.$buttonConfirm.add_click(ss.mkdel(this, this.$buttonConfirm_Click));
			this.$buttonCancel.add_click(ss.mkdel(this, this.$buttonCancel_Click));
			var message;
			if (!ss.referenceEquals(this.$_newVersion, QuickView.Client.Models.Applications.VersionInfo.unknown) && ss.referenceEquals(QuickView.Client.Common.AppEnvironment.version.number, this.$_newVersion.number)) {
				// A minor update without a formal new version release
				message = ss.formatString('A minor change has been made to the application.<br />Do you wish to load it?', this.$_newVersion.number);
			}
			else {
				// A new version
				message = ss.formatString('A new version {0}&nbsp;of the application is available.<br />Do you wish to load it?', this.$_newVersion.number);
			}
			this.get_layout$1().get_content().html(message);
			if (QuickView.Client.Common.AppEnvironment.get_isDesktopDevice()) {
				this.$buttonConfirm.element.text(ss.formatString('Yes ({0})', 30));
				this.$_timer = QuickView.Client.Common.AppServices.get_secondTimeManager().createAndStartTimer(30);
				this.$_timer.add_tick(ss.mkdel(this, this.$timer_Tick));
			}
		},
		$timer_Tick: function(sender, e) {
			if (this.$_timer.get_expired()) {
				this.set_dialogResult(true);
			}
			else {
				this.$buttonConfirm.element.text(ss.formatString('Yes ({0})', this.$_timer.get_remainingTicks()));
			}
		},
		onClose: function() {
			JS.UI.Dialogs.Dialog.prototype.onClose.call(this);
			if (ss.isValue(this.$_timer)) {
				this.$_timer.dispose();
				this.$_timer = null;
			}
		},
		$buttonConfirm_Click: function(sender, e) {
			this.set_dialogResult(true);
		},
		$buttonCancel_Click: function(sender, e) {
			this.set_dialogResult(false);
		}
	}, JS.UI.Dialogs.DefaultDialog);
	//ss.initClass($QuickView_Client_UI_Dialogs_FirstRunDialog, $asm, {
	//	onInit: function() {
	//		JS.UI.Dialogs.Dialog.prototype.onInit.call(this);
	//		this.set_theme('black');
	//		this.set_cssClass('application-first-run');
	//		this.set_isModal(true);
	//	},
	//	onLoad: function() {
	//		JS.UI.Dialogs.DefaultDialog.prototype.onLoad.call(this);
	//		this.get_layout$1().get_header().set_title('QuickView');
	//		this.get_layout$1().get_header().get_icon().setIcon('message-info');
	//		var $t1 = new JS.UI.Controls.Button.$ctor1('Dismiss');
	//		$t1.set_isDefault(true);
	//		this.$buttonDismiss = JS.UI.Controls.ControlExtensions.appendTo$1(JS.UI.Controls.Button).call(null, $t1, this.get_layout$1().get_footer());
	//		this.$buttonDismiss.add_click(ss.mkdel(this, this.$buttonDismiss_Click));
	//		this.get_layout$1().get_content().html(JS.UI.UIUtils.textToHtml('Please wait while QuickView downloads all time series data. This will take a few minutes and is a one time operation upon first load. Thereafter data is updated incrementally from the server when available. Data transformations and computations are also done locally.\r\n\r\nNote that data is only loaded while the app is running in the foreground. Switching to another app or putting your device to sleep will suspend the data download.'));
	//		this.$labelChartDataUpdateProgress = $("<div class='" + ('progress-label' || '') + "'></div>").appendTo(this.get_layout$1().get_content()).append('&nbsp;');
	//		this.$progressBar = JS.UI.Controls.ControlExtensions.appendTo$1(JS.UI.Controls.ProgressBar).call(null, new JS.UI.Controls.ProgressBar(), this.get_layout$1().get_content());
	//		this.$progressBar.element.addClass('progress-bar');
	//		QuickView.Client.Services.Charts.ChartDataEvents$TimeSeries.add_endUpdateProcess(ss.mkdel(this, this.$updates_EndTimeSeriesUpdateProcess));
	//		QuickView.Client.Services.Charts.ChartDataEvents$TimeSeries.add_beginTimeSeriesUpdate(ss.mkdel(this, this.$updates_BeginTimeSeriesUpdate));
	//		QuickView.Client.Services.Charts.ChartDataEvents$TimeSeries.add_timeSeriesUpdateError(ss.mkdel(this, this.$updates_EndTimeSeriesUpdateError));
	//	},
	//	$buttonDismiss_Click: function(sender, e) {
	//		this.close();
	//	},
	//	onClose: function() {
	//		JS.UI.Dialogs.Dialog.prototype.onClose.call(this);
	//		QuickView.Client.Services.Charts.ChartDataEvents$TimeSeries.remove_endUpdateProcess(ss.mkdel(this, this.$updates_EndTimeSeriesUpdateProcess));
	//		QuickView.Client.Services.Charts.ChartDataEvents$TimeSeries.remove_beginTimeSeriesUpdate(ss.mkdel(this, this.$updates_BeginTimeSeriesUpdate));
	//		QuickView.Client.Services.Charts.ChartDataEvents$TimeSeries.remove_timeSeriesUpdateError(ss.mkdel(this, this.$updates_EndTimeSeriesUpdateError));
	//	},
	//	$updates_EndTimeSeriesUpdateProcess: function(sender, e) {
	//		// Close the dialog
	//		this.close();
	//	},
	//	$updates_BeginTimeSeriesUpdate: function(sender, e) {
	//		this.$progressBar.set_value((e.I + 1) / e.T);
	//		this.$labelChartDataUpdateProgress.text(ss.formatString('Upd. {0} of {1} ts', e.I + 1, e.T));
	//		this.$labelChartDataUpdateProgress.removeClass('error');
	//		JS.UI.TooltipExtensions.removeTooltip(this.$labelChartDataUpdateProgress);
	//	},
	//	$updates_EndTimeSeriesUpdateError: function(sender, e) {
	//		this.$labelChartDataUpdateProgress.addClass('error');
	//		JS.UI.TooltipExtensions.setTextTooltip(this.$labelChartDataUpdateProgress, e.error.get_message(), 'Update error', 0, null);
	//	}
	//}, JS.UI.Dialogs.DefaultDialog);
	ss.initClass($QuickView_Client_UI_Dialogs_LoginDialog, $asm, {
		get_userName: function() {
			this.ensureLoaded();
			return this.$textBoxUserName.element.val().trim();
		},
		set_userName: function(value) {
			this.ensureLoaded();
			this.$textBoxUserName.element.val(value);
		},
		get_password: function() {
			this.ensureLoaded();
			return this.$textBoxPassword.element.val();
		},
		set_password: function(value) {
			this.ensureLoaded();
			this.$textBoxPassword.element.val(value);
		},
		get_persist: function() {
			this.ensureLoaded();
			return this.$checkBoxPersist.get_isChecked();
		},
		set_persist: function(value) {
			this.ensureLoaded();
			this.$checkBoxPersist.set_isChecked(value);
		},
		onLoad: function() {
			JS.UI.Dialogs.DefaultDialog.prototype.onLoad.call(this);
			if (QuickView.Client.Common.AppEnvironment.get_isMobileDevice()) {
				// Show the dialog at the top to avoid scrolling
				this.get_containerElement().addClass('top-center');
			}
			var titleTextFormat = (QuickView.Client.Common.AppEnvironment.get_isMobileDevice() ? 'QView v{0}' : 'QuickView v{0}');
			this.get_layout$1().get_header().set_title(ss.formatString(titleTextFormat, QuickView.Client.Common.AppEnvironment.version.number));
			this.$buttonLogIn = new JS.UI.Controls.Button.$ctor2(this.get_element().find('.-id-button-login'));
			this.$buttonLogIn.add_click(ss.mkdel(this, this.$buttonLogIn_Click));
			this.$checkBoxPersist = new JS.UI.Controls.CheckBox.$ctor2(this.get_element().find('.-id-checkbox-persist'));
			this.$textBoxUserName = new JS.UI.Controls.TextBox.$ctor1(this.get_element().find('.-id-textbox-user-name'));
			this.$textBoxPassword = new JS.UI.Controls.TextBox.$ctor1(this.get_element().find('.-id-textbox-password'));
			// Reset the form fields in case they where used previously
			this.$textBoxUserName.element.val(null);
			this.$textBoxPassword.element.val(null);
			this.$checkBoxPersist.set_isChecked(false);
			this.$textBoxUserName.focus();
		},
		$buttonLogIn_Click: function(sender, e) {
			// Validate
			if (this.get_userName().length === 0) {
				this.$textBoxUserName.focus();
				return;
			}
			if (this.get_password().length === 0) {
				this.$textBoxPassword.focus();
				return;
			}
			// Close dialog
			this.set_dialogResult(true);
		}
	}, JS.UI.Dialogs.DefaultDialog);
})();
