(function() {
	'use strict';
	var $asm = {};
	global.QuickView = global.QuickView || {};
	global.QuickView.Client = global.QuickView.Client || {};
	global.QuickView.Client.Controllers = global.QuickView.Client.Controllers || {};
	ss.initAssembly($asm, 'QuickView.Client.Controllers');
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Controllers.ApplicationController
	var $QuickView_Client_Controllers_ApplicationController = function(updateWorker) {
		this.$_updateWorker = null;
		JS.ArgumentHelper.notNull(updateWorker, 'updateWorker');
		this.$_updateWorker = updateWorker;
	};
	$QuickView_Client_Controllers_ApplicationController.__typeName = 'QuickView.Client.Controllers.ApplicationController';
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.Controllers.IController
	var $QuickView_Client_Controllers_IController = function() {
	};
	$QuickView_Client_Controllers_IController.__typeName = 'QuickView.Client.Controllers.IController';
	global.QuickView.Client.Controllers.IController = $QuickView_Client_Controllers_IController;
	ss.initInterface($QuickView_Client_Controllers_IController, $asm, { initialize: null, run: null, shutdown: null });
	ss.initClass($QuickView_Client_Controllers_ApplicationController, $asm, {
		initialize: function() {
			this.$_updateWorker.add_newVersion(ss.mkdel(this, this.$updateWorker_NewVersion));
		},
		run: function() {
		},
		shutdown: function() {
			this.$_updateWorker.remove_newVersion(ss.mkdel(this, this.$updateWorker_NewVersion));
		},
		$updateWorker_NewVersion: function(sender, e) {
			var $state = 0, dialog, $t1, result;
			var $sm = function() {
				$sm1:
				for (;;) {
					switch ($state) {
						case 0: {
							$state = -1;
							dialog = new QuickView.Client.UI.Dialogs.ApplicationUpdateDialog(e.version);
							$t1 = dialog.showDialog();
							$state = 1;
							$t1.continueWith($sm);
							return;
						}
						case 1: {
							$state = -1;
							result = $t1.getAwaitedResult();
							dialog.close();
							if (result === true) {
								// Reload the application
								QuickView.Client.Common.AppContext.application.shutdown();
							}
							$state = -1;
							break $sm1;
						}
						default: {
							break $sm1;
						}
					}
				}
			};
			$sm();
		}
	}, null, [$QuickView_Client_Controllers_IController]);
	ss.setMetadata($QuickView_Client_Controllers_ApplicationController, { attr: [new JS.Composition.ExportAttribute.$ctor1($QuickView_Client_Controllers_IController), new JS.Composition.PartCreationPolicyAttribute(1)], members: [{ attr: [new JS.Composition.ImportingConstructorAttribute()], name: '.ctor', type: 1, params: [QuickView.Client.Services.Applications.ApplicationUpdateWorker] }] });
})();
