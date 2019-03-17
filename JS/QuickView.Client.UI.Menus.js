(function() {
	'use strict';
	var $asm = {};
	global.QuickView = global.QuickView || {};
	global.QuickView.Client = global.QuickView.Client || {};
	global.QuickView.Client.UI = global.QuickView.Client.UI || {};
	global.QuickView.Client.UI.Menus = global.QuickView.Client.UI.Menus || {};
	ss.initAssembly($asm, 'QuickView.Client.UI.Menus');
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Menus.FundGroupMenuItem.FundMenu
	var $QuickView_$Client_UI_Menus_$FundGroupMenuItem$FundMenu = function() {
		this.$4$OpenParentField = null;
		this.$4$CloseMenuField = null;
		this.$isSubmenuOpening = false;
		this.$_eventInitialized = false;
		this.$_closedByPrevButton = false;
		JS.UI.Menus.Menu.call(this);
		this.set_showConfirmButton(true);
	};
	$QuickView_$Client_UI_Menus_$FundGroupMenuItem$FundMenu.__typeName = 'QuickView.$Client.UI.Menus.$FundGroupMenuItem$FundMenu';
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Menus.MainMenu.AddAndRemoveFundsAndFavoritesMode
	var $QuickView_$Client_UI_Menus_MainMenu$AddAndRemoveFundsAndFavoritesMode = function() {
	};
	$QuickView_$Client_UI_Menus_MainMenu$AddAndRemoveFundsAndFavoritesMode.__typeName = 'QuickView.$Client.UI.Menus.MainMenu$AddAndRemoveFundsAndFavoritesMode';
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Menus.MainMenu.CustomMenu
	var $QuickView_$Client_UI_Menus_MainMenu$CustomMenu = function() {
		this.$isSubmenuOpening = false;
		JS.UI.Menus.Menu.call(this);
	};
	$QuickView_$Client_UI_Menus_MainMenu$CustomMenu.__typeName = 'QuickView.$Client.UI.Menus.MainMenu$CustomMenu';
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Menus.FavoritesMenuItem
	var $QuickView_Client_UI_Menus_$FavoritesMenuItem = function() {
		this.$addFavorites = false;
		this.$removeFavorites = false;
		this.$visibleFundCount = 0;
		this.$nonVisibleFundCount = 0;
		this.$controlAdd = null;
		this.$controlRemove = null;
		this.$control = null;
		JS.UI.Menus.IconedMenuItem.call(this);
		this.set_title('Favorites');
		// Must have a title in order to be used for the tooltip
		this.set_cssClass('fund-menu-item');
		this.set_tooltip('Used to add all favorite funds that are not visible on screen as well as to remove all favorite funds that are visible.');
	};
	$QuickView_Client_UI_Menus_$FavoritesMenuItem.__typeName = 'QuickView.Client.UI.Menus.$FavoritesMenuItem';
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Menus.FundGroupMenuItem
	var $QuickView_Client_UI_Menus_$FundGroupMenuItem = function (rootMenu, chartSubmenu, useSeparateMenus, enableFavorites) {
	    //console.log('FundGroupMenuItem', rootMenu, chartSubmenu, useSeparateMenus, enableFavorites);
		this.$addFunds = false;
		this.$removeFunds = false;
		this.$5$VisibleFundCountField = 0;
		this.$5$NonVisibleFundCountField = 0;
		this.$5$IsFavoriteField = false;
		this.$5$VisibleFavoriteCountField = 0;
		this.$5$NonVisibleFavoriteCountField = 0;
		this.$5$FavoriteCountChangedField = null;
		this.$controlAdd = null;
		this.$controlRemove = null;
		this.$_chartSubmenu = null;
		this.$_submenu = null;
		this.$buttonOpenSubmenu = null;
		this.$_rootMenu = null;
		this.$_useSeparateMenus = false;
		this.$_enableFavorites = false;
		JS.UI.Menus.SubmenuItem.call(this);
		JS.ArgumentHelper.notNull(chartSubmenu, 'chartSubmenu');
		this.$_enableFavorites = enableFavorites;
		useSeparateMenus = false;
		this.$_useSeparateMenus = useSeparateMenus;
		if (useSeparateMenus) {
			JS.ArgumentHelper.notNull(rootMenu, 'rootMenu');
			this.$_rootMenu = rootMenu;
		}
		//console.log('chartSubmenu', chartSubmenu);
		this.$_chartSubmenu = chartSubmenu;
		this.set_cssClass('fund-menu-item');
		this.set_title(this.$_chartSubmenu.N);
		var headerText = $QuickView_Client_UI_Menus_$FundMenuUtils.$formatFullPath($QuickView_Client_UI_Menus_$FundMenuUtils.$getFullPath(chartSubmenu), QuickView.Client.Common.AppEnvironment.get_isMobileDevice());
		this.set_header(headerText);
		if (this.$_enableFavorites) {
			this.set_iconCssClass('favorite');
			this.set_isIconVisible(false);
			this.set_isButton(true);
			// Clicking the text toggles the favorites
		}
		var submenu;
		if (useSeparateMenus) {
			var $t1 = new $QuickView_$Client_UI_Menus_$FundGroupMenuItem$FundMenu();
			$t1.set_title(headerText);
			$t1.set_position({ item1: 1 });
			$t1.set_cssClass('mm-light menu ' + (QuickView.Client.Common.AppEnvironment.get_isMobileDevice() ? 'AppEnvironment.IsMobileDevice' : 'desktop'));
			$t1.set_fullscreen(QuickView.Client.Common.AppEnvironment.get_isMobileDevice());
			$t1.set_disableAnimation(QuickView.Client.Common.AppEnvironment.get_isMobileDevice());
			submenu = this.$_submenu = $t1;
			ss.cast(submenu, $QuickView_$Client_UI_Menus_$FundGroupMenuItem$FundMenu).add_confirmed(ss.mkdel(this, this.$submenu_Confirmed));
			ss.cast(submenu, $QuickView_$Client_UI_Menus_$FundGroupMenuItem$FundMenu).add_$openParent(ss.mkdel(this, this.$submenu_OpenParent));
			ss.cast(submenu, $QuickView_$Client_UI_Menus_$FundGroupMenuItem$FundMenu).add_$closeMenu(ss.mkdel(this, this.$submenu_CloseMenu));
		}
		else {
			var $t2 = new JS.UI.Menus.Submenu();
			this.set_submenu($t2);
			submenu = $t2;
		}
		submenu.get_options().set_enableIcons(this.$_enableFavorites);
		// Icons should be enabled since they are used for favorites
		ss.add(submenu.get_items(), new $QuickView_Client_UI_Menus_$FundTitleItem.$ctor1(String.fromCharCode(160)));
	    // Display a non-breaking space char; otherwise, the line will not be displayed at all
	    //console.log('fund', this.$_chartSubmenu.I.length, ':', this.$_chartSubmenu.I[1]);
		//console.log('chartsubmenu', this.$_chartSubmenu.I);
		if (ss.isValue(this.$_chartSubmenu.I)) {
			for (var $t3 = 0; $t3 < this.$_chartSubmenu.I.length; $t3++) {
			    var fund = this.$_chartSubmenu.I[$t3];
				if (fund.T === 1) {
				    var itemSubmenu = fund;
				    var item = new $QuickView_Client_UI_Menus_$FundGroupMenuItem(this.$_rootMenu, itemSubmenu, this.$_useSeparateMenus, this.$_enableFavorites);
					JS.UI.Menus.MenuExtensions.add($QuickView_Client_UI_Menus_$FundGroupMenuItem).call(null, submenu, item);
					if (this.$_enableFavorites) {
						item.add_$favoriteCountChanged(ss.mkdel(this, this.$menuItem_FavoriteCountChanged));
					}
				}
				else if (fund.T === 2) {
				    var item1 = new $QuickView_Client_UI_Menus_$FundMenuItem(fund, this.$_enableFavorites);
					JS.UI.Menus.MenuExtensions.add($QuickView_Client_UI_Menus_$FundMenuItem).call(null, submenu, item1);
					if (this.$_enableFavorites) {
						item1.add_$favoriteCountChanged(ss.mkdel(this, this.$menuItem_FavoriteCountChanged));
					}
				}
			}
		}
	};
	$QuickView_Client_UI_Menus_$FundGroupMenuItem.__typeName = 'QuickView.Client.UI.Menus.$FundGroupMenuItem';
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Menus.FundMenuItem
	var $QuickView_Client_UI_Menus_$FundMenuItem = function(fund, enableFavorites) {
		this.$isFundVisible = false;
		this.$newIsFundVisible = null;
		this.$4$IsFavoriteField = false;
		this.$_wasFavorite = false;
		this.$4$FavoriteCountChangedField = null;
		this.$controlAdd = null;
		this.$controlRemove = null;
		this.$control = null;
		this.$labelTitle = null;
		this.$_fund = null;
		this.$_enableFavorites = false;
		JS.UI.Menus.IconedMenuItem.call(this);
		JS.ArgumentHelper.notNull(fund, 'fund');
		this.$_fund = fund;
		this.$_enableFavorites = enableFavorites;
		this.set_cssClass('fund-menu-item');
		this.set_title(fund.N);
		this.set_id(fund.I);
		this.set_tooltip(ss.replaceAllString(ss.coalesce(fund.D, ''), '\n', '<br/>'));
		var fundPath = $QuickView_Client_UI_Menus_$FundMenuUtils.$getFullPath(fund.parent);
		fundPath.push(fund.N);
		var headerText = $QuickView_Client_UI_Menus_$FundMenuUtils.$formatFullPath(fundPath, QuickView.Client.Common.AppEnvironment.get_isMobileDevice());
		this.set_tooltipTitle(headerText);
		if (this.$_enableFavorites) {
			this.set_iconCssClass('favorite');
			this.set_isIconVisible(false);
		}
        //console.log(fund);
	};
	$QuickView_Client_UI_Menus_$FundMenuItem.__typeName = 'QuickView.Client.UI.Menus.$FundMenuItem';
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Menus.FundMenuItemUpdateState
	var $QuickView_Client_UI_Menus_$FundMenuItemUpdateState = function() {
	};
	$QuickView_Client_UI_Menus_$FundMenuItemUpdateState.__typeName = 'QuickView.Client.UI.Menus.$FundMenuItemUpdateState';
	$QuickView_Client_UI_Menus_$FundMenuItemUpdateState.$ctor = function(visibleFunds, favorites) {
		var $this = {};
		$this.visibleFunds = null;
		$this.favorites = null;
		$this.visibleFunds = visibleFunds;
		$this.favorites = favorites;
		return $this;
	};
	$QuickView_Client_UI_Menus_$FundMenuItemUpdateState.isInstanceOfType = function() {
		return true;
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Menus.FundMenuUtils
	var $QuickView_Client_UI_Menus_$FundMenuUtils = function() {
	};
	$QuickView_Client_UI_Menus_$FundMenuUtils.__typeName = 'QuickView.Client.UI.Menus.$FundMenuUtils';
	$QuickView_Client_UI_Menus_$FundMenuUtils.$getFullPath = function(chartSubmenu) {
		JS.ArgumentHelper.notNull(chartSubmenu, 'group');
		var result = [];
		for (var menuItem = chartSubmenu; ss.isValue(menuItem); menuItem = menuItem.parent) {
			ss.insert(result, 0, menuItem.N);
		}
		return result;
	};
	$QuickView_Client_UI_Menus_$FundMenuUtils.$formatFullPath = function(components, mobile) {
		JS.ArgumentHelper.notNull(components, 'components');
		var menuWidth;
		var windowWidth = JS.UI.UIUtils.getWindowSize().width;
		if (mobile) {
			// The menu is full-screen
			menuWidth = windowWidth;
		}
		else {
			// The menu is 80% of the screen width but no more than 440px
			menuWidth = Math.min(440, ss.Int32.div(windowWidth * 4, 5));
		}
		menuWidth -= 80;
		// There are 40px space at each side of the menu header (occupied by the back button and the close button)
		var maxCharCount = ss.Int32.div(menuWidth, 11);
		// A character is 11px wide
		var totalLength = Enumerable.from(components).sum(function(x) {
			return x.length;
		});
		var excludeComponents = null;
		if (totalLength > maxCharCount) {
			// Replace intermediate components with ellipsis
			excludeComponents = new Array(ss.count(components));
			for (var k = ss.count(components) - 2; k > 0 && totalLength > maxCharCount; k--) {
				totalLength -= ss.getItem(components, k).length - 1;
				// Consider the ellipsis a single character
				excludeComponents[k] = true;
			}
		}
		var result = new ss.StringBuilder();
		for (var k1 = 0; k1 < ss.count(components); k1++) {
			if (result.length > 0) {
				result.append('/');
			}
			if (ss.isValue(excludeComponents) && excludeComponents[k1]) {
				result.append('…');
			}
			else {
				result.append(ss.getItem(components, k1));
			}
		}
		return result.toString();
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Menus.FundTitleItem
	var $QuickView_Client_UI_Menus_$FundTitleItem = function() {
		JS.UI.Menus.MenuItem.call(this);
	};
	$QuickView_Client_UI_Menus_$FundTitleItem.__typeName = 'QuickView.Client.UI.Menus.$FundTitleItem';
	$QuickView_Client_UI_Menus_$FundTitleItem.$ctor1 = function(title) {
		JS.UI.Menus.MenuItem.call(this);
		this.set_title(title);
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Menus.IFundMenuItem
	var $QuickView_Client_UI_Menus_$IFundMenuItem = function() {
	};
	$QuickView_Client_UI_Menus_$IFundMenuItem.__typeName = 'QuickView.Client.UI.Menus.$IFundMenuItem';
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Menus.IndicatorTitleItem
	var $QuickView_Client_UI_Menus_$IndicatorTitleItem = function() {
		JS.UI.Menus.MenuItem.call(this);
	};
	$QuickView_Client_UI_Menus_$IndicatorTitleItem.__typeName = 'QuickView.Client.UI.Menus.$IndicatorTitleItem';
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Menus.AddColumnEventArgs
	var $QuickView_Client_UI_Menus_AddColumnEventArgs = function(direction, period) {
		this.period = null;
		$QuickView_Client_UI_Menus_ColumnDirectionEventArgs.call(this, direction);
		this.period = period;
	};
	$QuickView_Client_UI_Menus_AddColumnEventArgs.__typeName = 'QuickView.Client.UI.Menus.AddColumnEventArgs';
	global.QuickView.Client.UI.Menus.AddColumnEventArgs = $QuickView_Client_UI_Menus_AddColumnEventArgs;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Menus.ChangeResolutionEventArgs
	var $QuickView_Client_UI_Menus_ChangeResolutionEventArgs = function(resolution) {
		this.$2$ResolutionField = 0;
		ss.EventArgs.call(this);
		this.set_resolution(resolution);
	};
	$QuickView_Client_UI_Menus_ChangeResolutionEventArgs.__typeName = 'QuickView.Client.UI.Menus.ChangeResolutionEventArgs';
	global.QuickView.Client.UI.Menus.ChangeResolutionEventArgs = $QuickView_Client_UI_Menus_ChangeResolutionEventArgs;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Menus.ColumnDirection
	var $QuickView_Client_UI_Menus_ColumnDirection = function() {
	};
	$QuickView_Client_UI_Menus_ColumnDirection.__typeName = 'QuickView.Client.UI.Menus.ColumnDirection';
	global.QuickView.Client.UI.Menus.ColumnDirection = $QuickView_Client_UI_Menus_ColumnDirection;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Menus.ColumnDirectionEventArgs
	var $QuickView_Client_UI_Menus_ColumnDirectionEventArgs = function(direction) {
		this.direction = 0;
		ss.EventArgs.call(this);
		this.direction = direction;
	};
	$QuickView_Client_UI_Menus_ColumnDirectionEventArgs.__typeName = 'QuickView.Client.UI.Menus.ColumnDirectionEventArgs';
	global.QuickView.Client.UI.Menus.ColumnDirectionEventArgs = $QuickView_Client_UI_Menus_ColumnDirectionEventArgs;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Menus.ColumnHeaderMenu
	var $QuickView_Client_UI_Menus_ColumnHeaderMenu = function(columnOptions, gridOptions) {
		this.$1$OpenRowCorrelationField = null;
		this.$1$AddColumnField = null;
		this.$1$MoveColumnField = null;
		this.$1$RemoveColumnField = null;
		this.$1$RemoveMultipleColumnsField = null;
		this.benchmarksEnabled = false;
		this.canMoveLeft = false;
		this.canMoveRight = false;
		this.canRemove = false;
		this.$_columnOptions = null;
		this.$_gridOptions = null;
		this.$_menu = null;
		this.$_groupViewMode = null;
		this.$_subPeriodGroup = null;
		this.$_statGroup = null;
		this.$_benchmarkStatGroup = null;
		this.$buttonMoveLeft = null;
		this.$buttonMoveRight = null;
		this.$buttonRemove = null;
		this.$buttonRemoveMultiple = null;
		JS.ArgumentHelper.notNull(columnOptions, 'columnOptions');
		JS.ArgumentHelper.notNull(gridOptions, 'gridOptions');
		this.$_columnOptions = columnOptions;
		this.$_gridOptions = gridOptions;
		var $t1 = new JS.UI.Menus.Menu();
		$t1.set_title(columnOptions.get_period().N);
		$t1.set_position({ item1: 1 });
		$t1.set_cssClass('mm-light menu ' + (QuickView.Client.Common.AppEnvironment.get_isMobileDevice() ? 'mobile' : 'desktop'));
		$t1.set_fullscreen(QuickView.Client.Common.AppEnvironment.get_isMobileDevice());
		$t1.set_disableAnimation(QuickView.Client.Common.AppEnvironment.get_isMobileDevice());
		var menu = this.$_menu = $t1;
		menu.get_options().set_enableIcons(true);
		menu.get_options().set_iconCssClass('icon');
		menu.get_options().set_checkedIconCssClass('check');
		var $t2 = QuickView.Client.UI.Common.Data.DataDescription$ChartPeriods.getPeriodsInDisplayOrder(columnOptions.get_period().T);
		for (var $t3 = 0; $t3 < $t2.length; $t3++) {
			var period = $t2[$t3];
			var $t4 = new JS.UI.Menus.CheckMenuItem.$ctor1(period.N);
			$t4.set_id('SubPeriod:' + period.I.toString());
			$t4.set_groupID('SubPeriod');
			$t4.tag = period;
			$t4.closeOnClick = true;
			JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.CheckMenuItem).call(null, menu, $t4);
		}
		var enableStats = this.$_columnOptions.get_period().T > 2;
		// Mini-chart view
		JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.TitleMenuItem).call(null, menu, new JS.UI.Menus.TitleMenuItem.$ctor1('View Options'));
		var $t5 = new JS.UI.Menus.CheckMenuItem.$ctor1('Line');
		$t5.closeOnClick = true;
		$t5.set_groupID('ViewMode');
		$t5.set_id('ViewMode_' + (0).toString());
		$t5.tag = 0;
		$t5.set_tooltip('Displays cumulative values in mini-chart cells.');
		JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.CheckMenuItem).call(null, menu, $t5);
		var $t6 = new JS.UI.Menus.CheckMenuItem.$ctor1('Bar');
		$t6.closeOnClick = true;
		$t6.set_groupID('ViewMode');
		$t6.set_id('ViewMode_' + (1).toString());
		$t6.tag = 1;
		$t6.set_tooltip('Displays difference values in mini-chart cells.');
		JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.CheckMenuItem).call(null, menu, $t6);
		if (enableStats) {
			var $t7 = new JS.UI.Menus.CheckMenuItem.$ctor1('Stats');
			$t7.closeOnClick = true;
			$t7.set_groupID('ViewMode');
			$t7.set_id('ViewMode_' + (2).toString());
			$t7.tag = 2;
			$t7.set_tooltip('Displays various stats in mini-chart cells.');
			JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.CheckMenuItem).call(null, menu, $t7);
		}
		var $t8 = new JS.UI.Menus.SeparatorMenuItem();
		$t8.set_cssClass('line');
		JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.SeparatorMenuItem).call(null, menu, $t8);
		// Stats
		if (enableStats) {
			var submenu = new JS.UI.Menus.Submenu();
			JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.SubmenuItem).call(null, menu, new JS.UI.Menus.SubmenuItem.$ctor1('Sort by Stat', submenu));
			var $t9 = ss.getEnumerator(QuickView.Client.UI.Common.Data.DataDescription$ChartStats.all);
			try {
				while ($t9.moveNext()) {
					var item = $t9.current();
					var $t10 = new JS.UI.Menus.CheckMenuItem.$ctor1(QuickView.Client.UI.Common.Data.DataDescription.getFullDisplayName(item));
					$t10.set_id('Stat:' + item.toString());
					$t10.set_groupID('Stat');
					$t10.tag = item;
					$t10.closeOnClick = true;
					JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.CheckMenuItem).call(null, submenu, $t10);
				}
			}
			finally {
				$t9.dispose();
			}
			var $t11 = new JS.UI.Menus.SeparatorMenuItem();
			$t11.set_cssClass('line');
			$t11.set_groupID('BenchmarkStat');
			JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.SeparatorMenuItem).call(null, submenu, $t11);
			var $t12 = ss.getEnumerator(QuickView.Client.UI.Common.Data.DataDescription$CorrelationStats.all);
			try {
				while ($t12.moveNext()) {
					var item1 = $t12.current();
					var $t13 = new JS.UI.Menus.CheckMenuItem.$ctor1(QuickView.Client.UI.Common.Data.DataDescription.getFullDisplayName$1(item1));
					$t13.set_id('BenchmarkStat:' + item1.toString());
					$t13.set_groupID('BenchmarkStat');
					$t13.tag = item1;
					$t13.closeOnClick = true;
					JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.CheckMenuItem).call(null, submenu, $t13);
				}
			}
			finally {
				$t12.dispose();
			}
		}
		JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.TitleMenuItem).call(null, menu, new JS.UI.Menus.TitleMenuItem.$ctor1('Column'));
		{
			var submenu1 = new JS.UI.Menus.Submenu();
			for (var $t14 = 0; $t14 < QuickView.Client.UI.Common.Data.DataDescription$ChartPeriods.allTypes.length; $t14++) {
				var item2 = QuickView.Client.UI.Common.Data.DataDescription$ChartPeriods.allTypes[$t14];
				var $t15 = new JS.UI.Menus.ButtonMenuItem.$ctor1(QuickView.Client.Models.Charts.ChartPeriodDef.getTypeName(item2));
				$t15.commandArgument = item2;
				JS.UI.Menus.MenuExtensions.onCommand(JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.ButtonMenuItem).call(null, submenu1, $t15), ss.mkdel(this, function(sender, e) {
					this.$onAddColumn(new $QuickView_Client_UI_Menus_AddColumnEventArgs(0, QuickView.Client.Models.Charts.ChartPeriodDef.$ctor(ss.cast(e.commandArgument, ss.Int32), 0)));
				}));
			}
			var $t16 = new JS.UI.Menus.SubmenuItem.$ctor1('Add to the Left', submenu1);
			$t16.set_iconCssClass('add-column');
			JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.SubmenuItem).call(null, menu, $t16);
		}
		{
			var submenu2 = new JS.UI.Menus.Submenu();
			for (var $t17 = 0; $t17 < QuickView.Client.UI.Common.Data.DataDescription$ChartPeriods.allTypes.length; $t17++) {
				var item3 = QuickView.Client.UI.Common.Data.DataDescription$ChartPeriods.allTypes[$t17];
				var $t18 = new JS.UI.Menus.ButtonMenuItem.$ctor1(QuickView.Client.Models.Charts.ChartPeriodDef.getTypeName(item3));
				$t18.commandArgument = item3;
				JS.UI.Menus.MenuExtensions.onCommand(JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.ButtonMenuItem).call(null, submenu2, $t18), ss.mkdel(this, function(sender1, e1) {
					this.$onAddColumn(new $QuickView_Client_UI_Menus_AddColumnEventArgs(1, QuickView.Client.Models.Charts.ChartPeriodDef.$ctor(ss.cast(e1.commandArgument, ss.Int32), 0)));
				}));
			}
			var $t19 = new JS.UI.Menus.SubmenuItem.$ctor1('Add to the Right', submenu2);
			$t19.set_iconCssClass('add-column');
			JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.SubmenuItem).call(null, menu, $t19);
		}
		var $t20 = new JS.UI.Menus.ButtonMenuItem.$ctor1('Move to the Left');
		$t20.set_iconCssClass('move-left');
		$t20.set_tooltip('Moves the column one position to the left.');
		this.$buttonMoveLeft = JS.UI.Menus.MenuExtensions.onCommand(JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.ButtonMenuItem).call(null, menu, $t20), ss.mkdel(this, function(sender2, e2) {
			this.$onMoveColumn(new $QuickView_Client_UI_Menus_ColumnDirectionEventArgs(0));
		}));
		var $t21 = new JS.UI.Menus.ButtonMenuItem.$ctor1('Move to the Right');
		$t21.set_iconCssClass('move-right');
		$t21.set_tooltip('Moves the column one position to the right.');
		this.$buttonMoveRight = JS.UI.Menus.MenuExtensions.onCommand(JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.ButtonMenuItem).call(null, menu, $t21), ss.mkdel(this, function(sender3, e3) {
			this.$onMoveColumn(new $QuickView_Client_UI_Menus_ColumnDirectionEventArgs(1));
		}));
		var $t22 = new JS.UI.Menus.ButtonMenuItem.$ctor1('Remove');
		$t22.set_iconCssClass('remove-column');
		$t22.set_tooltip('Removes the column.');
		this.$buttonRemove = JS.UI.Menus.MenuExtensions.onCommand(JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.ButtonMenuItem).call(null, menu, $t22), ss.mkdel(this, function(sender4, e4) {
			this.$onRemoveColumn(ss.EventArgs.Empty);
		}));
		var $t23 = new JS.UI.Menus.ButtonMenuItem.$ctor1('Remove All to the Right');
		$t23.set_iconCssClass('remove-column');
		$t23.set_tooltip('Removes all columns to the right of the current column.');
		this.$buttonRemoveMultiple = JS.UI.Menus.MenuExtensions.onCommand(JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.ButtonMenuItem).call(null, menu, $t23), ss.mkdel(this, function(sender5, e5) {
			this.$onRemoveMultipleColumns(new $QuickView_Client_UI_Menus_ColumnDirectionEventArgs(1));
		}));
		JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.TitleMenuItem).call(null, menu, new JS.UI.Menus.TitleMenuItem.$ctor1('Charts and Matrices'));
		var $t24 = new JS.UI.Menus.ButtonMenuItem.$ctor1('Fund Statistics [WIP]');
		$t24.set_isEnabled(false);
		$t24.set_iconCssClass('top-fund-stats');
		$t24.set_tooltip('Opens correlation matrix for all rows for the selected period.');
		JS.UI.Menus.MenuExtensions.onClick(JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.ButtonMenuItem).call(null, menu, $t24), ss.mkdel(this, function(sender6, e6) {
			this.$onOpenRowCorrelation(ss.EventArgs.Empty);
		}));
		menu.build();
		this.$_subPeriodGroup = JS.UI.Menus.MenuExtensions.onCheckChanged$1(menu.getGroup('SubPeriod'), ss.mkdel(this, this.$subPeriod_CheckChanged));
		if (enableStats) {
			this.$_statGroup = JS.UI.Menus.MenuExtensions.onCheckChanged$1(menu.getGroup('Stat'), ss.mkdel(this, this.$stat_CheckChanged));
			this.$_benchmarkStatGroup = JS.UI.Menus.MenuExtensions.onCheckChanged$1(menu.getGroup('BenchmarkStat'), ss.mkdel(this, this.$benchmarkStat_CheckChanged));
		}
		this.$_groupViewMode = JS.UI.Menus.MenuExtensions.onCheckChanged$1(menu.getGroup('ViewMode'), ss.mkdel(this, this.$viewMode_CheckChanged));
	};
	$QuickView_Client_UI_Menus_ColumnHeaderMenu.__typeName = 'QuickView.Client.UI.Menus.ColumnHeaderMenu';
	global.QuickView.Client.UI.Menus.ColumnHeaderMenu = $QuickView_Client_UI_Menus_ColumnHeaderMenu;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Menus.DataCellMenu
	var $QuickView_Client_UI_Menus_DataCellMenu = function() {
		this.$1$ClosedField = null;
		this.$1$ChangeResolutionField = null;
		this.$1$OpenExpandedChartField = null;
		this.$1$OpenDrawdownChartField = null;
		this.$1$OpenSlippageChartField = null;
		this.$1$ShowTopBottomMarketsField = null;
		this.$1$ShowRelatedIndicatorsField = null;
		this.$1$ShowAllRelatedIndicatorsField = null;
		this.chartMode = 0;
		this.indicator = null;
		this.period = null;
		this.resolution = null;
		this.enableShowAllRelatedIndicators = false;
		this.selectedRelatedIndicators = null;
		this.$_menu = null;
		this.$buttonExpandedChart = null;
		this.$groupIntradayResolution = null;
		this.$groupResolution = null;
		this.$groupTopBottomMarkets = null;
		this.$groupRelatedIndicator = null;
		this.$buttonShowAllRelatedIndicators = null;
		this.$titleRelationship = null;
		this.$submenuRelatedIndicators = null;
		this.$fundTitleIndicators = null;
		this.$relatedIndicatorButtonList = null;
		var $t1 = new JS.UI.Menus.Menu();
		$t1.set_title(String.fromCharCode(160));
		$t1.set_position({ item1: 1 });
		$t1.set_cssClass('mm-light menu cell-menu ' + (QuickView.Client.Common.AppEnvironment.get_isMobileDevice() ? 'mobile' : 'desktop'));
		$t1.set_fullscreen(QuickView.Client.Common.AppEnvironment.get_isMobileDevice());
		$t1.set_disableAnimation(QuickView.Client.Common.AppEnvironment.get_isMobileDevice());
		var menu = this.$_menu = $t1;
		menu.get_options().set_enableIcons(true);
		menu.get_options().set_iconCssClass('icon');
		menu.get_options().set_checkedIconCssClass('check');
		menu.add_closed(ss.mkdel(this, this.$menu_Closed));
		var $t2 = new JS.UI.Menus.ButtonMenuItem.$ctor1('Expanded chart');
		$t2.set_iconCssClass('open-extended-chart');
		this.$buttonExpandedChart = JS.UI.Menus.MenuExtensions.onClick(JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.ButtonMenuItem).call(null, menu, $t2), ss.mkdel(this, function(sender, e) {
			this.$onOpenExpandedChart(ss.EventArgs.Empty);
		}));
		var $t3 = new JS.UI.Menus.TitleMenuItem.$ctor1('Resolution');
		$t3.set_groupID('IntradayResolution');
		JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.TitleMenuItem).call(null, menu, $t3);
		var $t4 = new JS.UI.Menus.CheckMenuItem.$ctor1('5m');
		$t4.set_groupID('IntradayResolution');
		$t4.closeOnClick = true;
		$t4.tag = 2;
		JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.CheckMenuItem).call(null, menu, $t4);
		var $t5 = new JS.UI.Menus.CheckMenuItem.$ctor1('10m');
		$t5.set_groupID('IntradayResolution');
		$t5.closeOnClick = true;
		$t5.tag = 3;
		JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.CheckMenuItem).call(null, menu, $t5);
		var $t6 = new JS.UI.Menus.CheckMenuItem.$ctor1('Hourly');
		$t6.set_groupID('IntradayResolution');
		$t6.closeOnClick = true;
		$t6.tag = 4;
		JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.CheckMenuItem).call(null, menu, $t6);
		var $t7 = new JS.UI.Menus.CheckMenuItem.$ctor1('Daily');
		$t7.set_groupID('IntradayResolution');
		$t7.closeOnClick = true;
		$t7.tag = 5;
		JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.CheckMenuItem).call(null, menu, $t7);
		var $t8 = new JS.UI.Menus.TitleMenuItem.$ctor1('Resolution');
		$t8.set_groupID('Resolution');
		JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.TitleMenuItem).call(null, menu, $t8);
		var $t9 = new JS.UI.Menus.CheckMenuItem.$ctor1('Daily');
		$t9.set_groupID('Resolution');
		$t9.closeOnClick = true;
		$t9.tag = 5;
		JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.CheckMenuItem).call(null, menu, $t9);
		var $t10 = new JS.UI.Menus.CheckMenuItem.$ctor1('Monthly');
		$t10.set_groupID('Resolution');
		$t10.closeOnClick = true;
		$t10.tag = 7;
		JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.CheckMenuItem).call(null, menu, $t10);
		var $t11 = new JS.UI.Menus.CheckMenuItem.$ctor1('Quarterly');
		$t11.set_groupID('Resolution');
		$t11.closeOnClick = true;
		$t11.tag = 8;
		JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.CheckMenuItem).call(null, menu, $t11);
		var $t12 = new JS.UI.Menus.CheckMenuItem.$ctor1('Yearly');
		$t12.set_groupID('Resolution');
		$t12.closeOnClick = true;
		$t12.tag = 9;
		JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.CheckMenuItem).call(null, menu, $t12);
		this.$titleRelationship = JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.TitleMenuItem).call(null, menu, new JS.UI.Menus.TitleMenuItem.$ctor1('Markets'));
		{
			var $t13 = new JS.UI.Menus.ButtonMenuItem.$ctor1('Top/Bottom 10 markets (Ret)');
			$t13.set_groupID('TopBottomMarkets');
			$t13.commandArgument = 1;
			JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.ButtonMenuItem).call(null, menu, $t13);
			var $t14 = new JS.UI.Menus.ButtonMenuItem.$ctor1('Top/Bottom 10 markets (Slp) [WIP]');
			$t14.set_isEnabled(false);
			$t14.set_groupID('TopBottomMarkets');
			$t14.commandArgument = 2;
			JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.ButtonMenuItem).call(null, menu, $t14);
			var $t15 = new JS.UI.Menus.ButtonMenuItem.$ctor1('Top/Bottom 10 markets (Pos) [WIP]');
			$t15.set_isEnabled(false);
			$t15.set_groupID('TopBottomMarkets');
			$t15.commandArgument = 3;
			JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.ButtonMenuItem).call(null, menu, $t15);
		}
		{
			var $t16 = new JS.UI.Menus.ButtonMenuItem.$ctor1('Show all indicators');
			$t16.set_tooltip('Displays all markets/books/etc. in a single chart.');
			this.$buttonShowAllRelatedIndicators = JS.UI.Menus.MenuExtensions.onClick(JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.ButtonMenuItem).call(null, menu, $t16), ss.mkdel(this, function(sender1, e1) {
				this.$onShowAllRelatedIndicators(ss.EventArgs.Empty);
			}));
			var $t17 = new JS.UI.Menus.Submenu();
			var $t18 = new JS.UI.Menus.MenuOptions();
			$t18.set_enableIcons(false);
			$t17.set_options($t18);
			var submenu = $t17;
			this.$submenuRelatedIndicators = JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.SubmenuItem).call(null, menu, new JS.UI.Menus.SubmenuItem.$ctor1('Previous', submenu));
			this.$fundTitleIndicators = JS.UI.Menus.MenuExtensions.add($QuickView_Client_UI_Menus_$IndicatorTitleItem).call(null, submenu, new $QuickView_Client_UI_Menus_$IndicatorTitleItem());
			var relatedIndicatorButtonList = [];
			for (var k = 0; k < 200; k++) {
				// A tooltip must be set in order to create a sub-menu for it
				var $t19 = new $QuickView_Client_UI_Menus_IndicatorMenuItem();
				$t19.set_groupID('RelatedIndicator');
				$t19.set_tooltip('N/A');
				relatedIndicatorButtonList.push(JS.UI.Menus.MenuExtensions.add($QuickView_Client_UI_Menus_IndicatorMenuItem).call(null, submenu, $t19));
			}
			this.$relatedIndicatorButtonList = relatedIndicatorButtonList;
		}
		menu.add_confirmed(ss.mkdel(this, this.$menu_Confirmed));
		menu.build();
		this.$groupIntradayResolution = menu.getGroup('IntradayResolution');
		this.$groupIntradayResolution.add_checkChanged(ss.mkdel(this, this.$groupResolution_CheckChanged));
		this.$groupResolution = menu.getGroup('Resolution');
		this.$groupResolution.add_checkChanged(ss.mkdel(this, this.$groupResolution_CheckChanged));
		this.$groupTopBottomMarkets = menu.getGroup('TopBottomMarkets');
		this.$groupTopBottomMarkets.add_command(ss.mkdel(this, this.$groupTopBottomMarkets_Command));
		this.$groupRelatedIndicator = menu.getGroup('RelatedIndicator');
	};
	$QuickView_Client_UI_Menus_DataCellMenu.__typeName = 'QuickView.Client.UI.Menus.DataCellMenu';
	global.QuickView.Client.UI.Menus.DataCellMenu = $QuickView_Client_UI_Menus_DataCellMenu;
    ////////////////////////////////////////////////////////////////////////////////
    // QuickView.Client.UI.Menus.DisplayedChartsMenu
	var $QuickView_Client_UI_Menus_DisplayedChartsMenu = function () {
	    this.$1$ClosedField = null;
	    this.$1$ChangeResolutionField = null;
	    this.$1$OpenDisplayedChartField = null;
	    this.$1$OpenDrawdownChartField = null;
	    this.$1$OpenSlippageChartField = null;
	    this.$1$ShowTopBottomMarketsField = null;
	    this.$1$ShowRelatedIndicatorsField = null;
	    this.$1$ShowAllRelatedIndicatorsField = null;
	    this.chartMode = 0;
	    this.indicator = null;
	    this.period = null;
	    this.charts = null;
	    this.enableShowAllRelatedIndicators = false;
	    this.selectedRelatedIndicators = null;
	    this.$_menu = null;
	    this.$buttonExpandedChart = null;
	    this.$groupDisplayedCharts = null;
	    this.$groupResolution = null;
	    this.$groupTopBottomMarkets = null;
	    this.$groupRelatedIndicator = null;
	    this.$buttonShowAllRelatedIndicators = null;
	    this.$titleRelationship = null;
	    this.$submenuRelatedIndicators = null;
	    this.$fundTitleIndicators = null;
	    this.$relatedIndicatorButtonList = null;
	    this.$_chartRowList = null;
	    var $t1 = new JS.UI.Menus.Menu();
	    var $t50 = new QuickView.Client.UI.MainView.Grid.DisplayedCharts();

	    $t1.set_title(String.fromCharCode(160));
	    $t1.set_position({ item1: 1 });
	    $t1.set_cssClass('mm-light menu cell-menu ' + (QuickView.Client.Common.AppEnvironment.get_isMobileDevice() ? 'mobile' : 'desktop'));
	    $t1.set_fullscreen(QuickView.Client.Common.AppEnvironment.get_isMobileDevice());
	    $t1.set_disableAnimation(QuickView.Client.Common.AppEnvironment.get_isMobileDevice());
	    var menu = this.$_menu = $t1;
	    menu.get_options().set_enableIcons(true);
	    menu.get_options().set_iconCssClass('icon');
	    menu.get_options().set_checkedIconCssClass('check');
	    menu.add_closed(ss.mkdel(this, this.$menu_Closed));
	    var $t2 = new JS.UI.Menus.ButtonMenuItem.$ctor1('Displayed charts');
	    $t2.set_iconCssClass('open-extended-chart');
	    this.$buttonExpandedChart = JS.UI.Menus.MenuExtensions.onClick(JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.ButtonMenuItem).call(null, menu, $t2), ss.mkdel(this, function (sender, e) {
	        this.$onOpenExpandedChart(ss.EventArgs.Empty);
	    }));
	    var $t3 = new JS.UI.Menus.TitleMenuItem.$ctor1('Available Charts');
	    $t3.set_groupID('Charts');
	    JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.TitleMenuItem).call(null, menu, $t3);
	    var $t4 = new JS.UI.Menus.CheckMenuItem.$ctor1('List of available charts is currently disabled for viewing.');
	    //var item1 = new $QuickView_Client_UI_Menus_$FundMenuItem(fund, this.$_enableFavorites);
	    //JS.UI.Menus.MenuExtensions.add($QuickView_Client_UI_Menus_$FundGroupMenuItem).call(null, submenu, item);
	    $t4.set_groupID('Charts');
	    $t4.closeOnClick = true;
	    $t4.tag = 4;
	    JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.CheckMenuItem).call(null, menu, $t4);
	    menu.add_confirmed(ss.mkdel(this, this.$menu_Confirmed));
	    menu.build();
	    this.$groupDisplayedCharts = menu.getGroup('DisplayedCharts');
	    this.$groupDisplayedCharts.add_checkChanged(ss.mkdel(this, this.$groupCharts_CheckChanged));
	    this.$groupCharts = menu.getGroup('AvailableCharts');
	    this.$groupCharts.add_checkChanged(ss.mkdel(this, this.$groupCharts_CheckChanged));
	    //this.$groupTopBottomMarkets = menu.getGroup('TopBottomMarkets');
	    //this.$groupTopBottomMarkets.add_command(ss.mkdel(this, this.$groupTopBottomMarkets_Command));
	    //this.$groupRelatedIndicator = menu.getGroup('RelatedIndicator');
	    //console.log('DisplayedCharts', QuickView.Client.UI.MainView.Grid.DisplayedCharts.$_chartRowList);
	    var indicatorList = Enumerable.from(QuickView.Client.UI.MainView.Grid.DisplayedCharts.$_chartRowList).select(function (x) {
	        return x.$4$IndicatorField;
	    }).toArray();
	    //console.log('indicatorList', indicatorList);

	};
	$QuickView_Client_UI_Menus_DisplayedChartsMenu.__typeName = 'QuickView.Client.UI.Menus.DisplayedChartsMenu';
	global.QuickView.Client.UI.Menus.DisplayedChartsMenu = $QuickView_Client_UI_Menus_DisplayedChartsMenu;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Menus.IndicatorMenuItem
	var $QuickView_Client_UI_Menus_IndicatorMenuItem = function() {
		this.isSelectedProperty = new (ss.makeGenericType(JS.UI.Menus.MenuProperty$1, [Boolean]))();
		this.$3$SelectedChangedField = null;
		this.indicator = null;
		this.controlSelect = null;
		this.control = null;
		this.$labelTitle = null;
		JS.UI.Menus.MenuItem.call(this);
		this.set_cssClass('fund-menu-item');
	};
	$QuickView_Client_UI_Menus_IndicatorMenuItem.__typeName = 'QuickView.Client.UI.Menus.IndicatorMenuItem';
	global.QuickView.Client.UI.Menus.IndicatorMenuItem = $QuickView_Client_UI_Menus_IndicatorMenuItem;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Menus.IndicatorsEventArgs
	var $QuickView_Client_UI_Menus_IndicatorsEventArgs = function(indicators) {
		this.indicators = null;
		ss.EventArgs.call(this);
		this.indicators = indicators;
	};
	$QuickView_Client_UI_Menus_IndicatorsEventArgs.__typeName = 'QuickView.Client.UI.Menus.IndicatorsEventArgs';
	global.QuickView.Client.UI.Menus.IndicatorsEventArgs = $QuickView_Client_UI_Menus_IndicatorsEventArgs;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Menus.MainMenu
	var $QuickView_Client_UI_Menus_MainMenu = function(gridOptions, chartMenu) {
		this.visibleRows = null;
		this.$1$AddRowsField = null;
		this.$1$RemoveRowsField = null;
		this.favorites = null;
		this.$1$FavoritesChangedField = null;
		this.isFirstRowVisible = false;
		this.isLastRowVisible = false;
		this.$1$GoToTopField = null;
		this.$1$GoToBottomField = null;
		this.$1$DownloadField = null;
		this.$1$OpenPiwikField = null;
		this.$1$OpenShareSeriesField = null;
		this.$1$OpenHistoryField = null;
		this.$1$OpenQuickView3Field = null;
		this.$1$ChangePasswordField = null;
		this.$1$LogOutField = null;
		this.$1$ResetViewField = null;
		this.$_isNewVersion = false;
		this.latestVersionNumber = null;
		this.$1$LoadLatestVersionField = null;
		this.$_gridOptions = null;
		this.$_menu = null;
		this.$_chartMenu = null;
		this.$_fundItemList = null;
		this.$_item_Favorites = null;
		this.$_itemMini_MoveToTop = null;
		this.$_itemMini_MoveToBottom = null;
		this.$_itemMini_OrderAlphabeticallyGrossFirst = null;
		this.$_itemMini_OrderAlphabeticallyNetFirst = null;
		this.$_itemMini_SyncTopRow = null;
		this.$_itemMini_ShowTooltips = null;
		this.$_itemHistory = null;
		this.$_itemQuickView3 = null;
		this.$_itemNewVersionAvailable = null;
		JS.ArgumentHelper.notNull(gridOptions, 'gridOptions');
		JS.ArgumentHelper.notNull(chartMenu, 'chartMenu');
		this.$_gridOptions = gridOptions;
		this.$_chartMenu = chartMenu;
		var menu;
		if ($QuickView_Client_UI_Menus_MainMenu.get_$useSeparateMenus()) {
			menu = new $QuickView_$Client_UI_Menus_MainMenu$CustomMenu();
        }
		else {
			menu = new JS.UI.Menus.Menu();
		}
		// Initialize menu
		menu.set_title(ss.formatString('{0} {1}', 'QuickView', QuickView.Client.Common.AppEnvironment.version.number));
		menu.set_position({ item1: 1 });
		menu.set_cssClass('mm-light menu ' + (QuickView.Client.Common.AppEnvironment.get_isMobileDevice() ? 'mobile' : 'desktop'));
		menu.set_fullscreen(QuickView.Client.Common.AppEnvironment.get_isMobileDevice());
		menu.set_disableAnimation(QuickView.Client.Common.AppEnvironment.get_isMobileDevice());
		// Disable animation on mobile devices
		menu.set_showConfirmButton(true);
		menu.get_options().set_enableIcons(true);
		menu.get_options().set_iconCssClass('icon');
		menu.get_options().set_checkedIconCssClass('check');
	    //console.log('menu', menu);
		JS.UI.Menus.MenuExtensions.add($QuickView_Client_UI_Menus_$FundTitleItem).call(null, menu, new $QuickView_Client_UI_Menus_$FundTitleItem.$ctor1(String.fromCharCode(160)));
		this.$_fundItemList = [];
		for (var $t1 = 0; $t1 < chartMenu.S.length; $t1++) {
			var submenu = chartMenu.S[$t1];
			// Only a single top-level favorite item is available
			var item;
			if ($QuickView_Client_UI_Menus_MainMenu.get_$useSeparateMenus()) {
			    item = JS.UI.Menus.MenuExtensions.add($QuickView_Client_UI_Menus_$FundGroupMenuItem).call(null, menu, new $QuickView_Client_UI_Menus_$FundGroupMenuItem(ss.cast(menu, $QuickView_$Client_UI_Menus_MainMenu$CustomMenu), submenu, true, true));
			    //console.log(item);
			}
			else {
			    item = JS.UI.Menus.MenuExtensions.add($QuickView_Client_UI_Menus_$FundGroupMenuItem).call(null, menu, new $QuickView_Client_UI_Menus_$FundGroupMenuItem(null, submenu, false, true));
			    //console.log(item);
			}
			item.add_$favoriteCountChanged(ss.mkdel(this, this.$siteMenuItem_FavoriteCountChanged));
			ss.add(this.$_fundItemList, item);
		}
		this.$_item_Favorites = JS.UI.Menus.MenuExtensions.add($QuickView_Client_UI_Menus_$FavoritesMenuItem).call(null, menu, new $QuickView_Client_UI_Menus_$FavoritesMenuItem());
		// Mini-chart view
		JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.TitleMenuItem).call(null, menu, new JS.UI.Menus.TitleMenuItem.$ctor1('View Options'));
		if (QuickView.Client.Common.AppEnvironment.get_isMobileDevice()) {
			var $t2 = new JS.UI.Menus.ButtonMenuItem.$ctor1('Go to Top');
			$t2.set_iconCssClass('move-top');
			$t2.set_tooltip('Mobile only: Scrolls to the first row.');
			this.$_itemMini_MoveToTop = JS.UI.Menus.MenuExtensions.onClick(JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.ButtonMenuItem).call(null, menu, $t2), ss.mkdel(this, function(sender, e) {
				this.$onGoToTop(ss.EventArgs.Empty);
			}));
			var $t3 = new JS.UI.Menus.ButtonMenuItem.$ctor1('Go to Bottom');
			$t3.set_iconCssClass('move-bottom');
			$t3.set_tooltip('Mobile only: Scrolls to the last row.');
			this.$_itemMini_MoveToBottom = JS.UI.Menus.MenuExtensions.onClick(JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.ButtonMenuItem).call(null, menu, $t3), ss.mkdel(this, function(sender1, e1) {
				this.$onGoToBottom(ss.EventArgs.Empty);
			}));
		}
		// Mini-chart options
		var $t4 = new JS.UI.Menus.CheckMenuItem.$ctor1('Order w/Gross first');
		$t4.set_tooltip("\r\nIf set (and not in Stats mode) then rows are ordered alphabetically within the following predefined fund sequence:\r\n<ul class='mm-nolist' style='padding-left:20px;'>\r\n    <li>QR-F w/Gross row shown as the first row</li>\r\n    <li>QR-F w/Net as second row</li>\r\n    <li>QR-S</li>\r\n    <li>Remaining fund rows alphabetically</li>\r\n</ul>");
		this.$_itemMini_OrderAlphabeticallyGrossFirst = JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.CheckMenuItem).call(null, menu, $t4);
		var $t5 = new JS.UI.Menus.CheckMenuItem.$ctor1('Order w/Net first');
		$t5.set_tooltip("\r\nIf set (and not in Stats mode) then rows are ordered alphabetically within the following predefined fund sequence:\r\n<ul class='mm-nolist' style='padding-left:20px;'>\r\n    <li>QR-F w/Net row shown as the first row</li>\r\n    <li>QR-F w/Gross as second row</li>\r\n    <li>QR-S</li>\r\n    <li>Remaining fund rows alphabetically</li>\r\n</ul>");
		this.$_itemMini_OrderAlphabeticallyNetFirst = JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.CheckMenuItem).call(null, menu, $t5);
		var $t6 = new JS.UI.Menus.CheckMenuItem.$ctor1('Sync Top Row');
		$t6.set_tooltip("If 'on' the values in the column headers are for the fund in the top visible row. Otherwise, the values in the column headers are for the top open row that may not be visible due to scrolling. In this case the time axis in the header has red background.");
		this.$_itemMini_SyncTopRow = JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.CheckMenuItem).call(null, menu, $t6);
		if (QuickView.Client.Common.AppEnvironment.get_isDesktopDevice()) {
			var $t7 = new JS.UI.Menus.CheckMenuItem.$ctor1('Show Tooltips');
			$t7.set_tooltip('Desktop only: Shows tooltips over mini-charts.');
			this.$_itemMini_ShowTooltips = JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.CheckMenuItem).call(null, menu, $t7);
		}
		// Commands
		var $t8 = new JS.UI.Menus.ButtonMenuItem.$ctor1('Reset View');
		$t8.set_iconCssClass('reset-view');
		$t8.set_tooltip('Turns on alphabetical ordering and reorders the rows.');
		JS.UI.Menus.MenuExtensions.onClick(JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.ButtonMenuItem).call(null, menu, $t8), ss.mkdel(this, function(sender2, e2) {
			this.$onResetView(ss.EventArgs.Empty);
		}));
		// Commands
		JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.TitleMenuItem).call(null, menu, new JS.UI.Menus.TitleMenuItem.$ctor1('Miscellaneous'));
		if (QuickView.Client.Common.AppEnvironment.get_isDesktopDevice()) {
			// Desktop only commands
			var user = QuickView.Client.Common.AppContext.user;
			var enableShareSeries = JS.EnumExtensions.isSet(user.P.U, 2);
			if (enableShareSeries) {
				var $t9 = new JS.UI.Menus.ButtonMenuItem.$ctor1('Share Series... [WIP]');
				$t9.set_isEnabled(false);
				$t9.set_tooltip('Displays information about QR Share Series.');
				JS.UI.Menus.MenuExtensions.onClick(JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.ButtonMenuItem).call(null, menu, $t9), ss.mkdel(this, function(sender3, e3) {
					this.$onOpenShareSeries(ss.EventArgs.Empty);
				}));
			}
			if (JS.EnumExtensions.isSet(user.P.U, 2)) {
				var $t10 = new JS.UI.Menus.ButtonMenuItem.$ctor1('Web Analytics... [WIP]');
				$t10.set_isEnabled(false);
				$t10.set_iconCssClass('piwik');
				$t10.set_tooltip('Displays web analytics for QV.');
				JS.UI.Menus.MenuExtensions.onClick(JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.ButtonMenuItem).call(null, menu, $t10), ss.mkdel(this, function(sender4, e4) {
					this.$onOpenPiwik(ss.EventArgs.Empty);
				}));
			}
			var $t11 = new JS.UI.Menus.ButtonMenuItem.$ctor1('Download [WIP]');
			$t11.set_isEnabled(false);
			$t11.set_iconCssClass('download');
			$t11.set_tooltip('Downloads a small application on your desktop that can be used as a shortcut to open QuickView in Google Chrome.');
			JS.UI.Menus.MenuExtensions.onClick(JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.ButtonMenuItem).call(null, menu, $t11), ss.mkdel(this, function(sender5, e5) {
				this.$onDownload(ss.EventArgs.Empty);
			}));
		}
		var $t12 = new JS.UI.Menus.ButtonMenuItem.$ctor1(ss.formatString("WhatsNew"/*"What's New ({0})"*/, QuickView.Client.Common.AppEnvironment.version.number));
		$t12.set_iconCssClass('history');
		$t12.set_tooltip('[Tooltip]');
		this.$_itemHistory = JS.UI.Menus.MenuExtensions.onClick(JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.ButtonMenuItem).call(null, menu, $t12), ss.mkdel(this, function(sender6, e6) {
			this.$onOpenHistory(ss.EventArgs.Empty);
		}));
		var $t13 = new JS.UI.Menus.ButtonMenuItem.$ctor1(ss.formatString('Open QuickView 3', QuickView.Client.Common.AppEnvironment.version.number));
		$t13.set_tooltip('Opens QuickView 3 in a new tab.');
		this.$_itemQuickView3 = JS.UI.Menus.MenuExtensions.onClick(JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.ButtonMenuItem).call(null, menu, $t13), ss.mkdel(this, function(sender7, e7) {
			this.$onOpenQuickView3(ss.EventArgs.Empty);
		}));
		var $t14 = new JS.UI.Menus.ButtonMenuItem.$ctor1('New Version Available');
		$t14.set_cssClass('new-version-available');
		$t14.set_iconCssClass('new-version-available');
		$t14.set_tooltip('Indicates that a new version is available on the server.');
		this.$_itemNewVersionAvailable = JS.UI.Menus.MenuExtensions.onClick(JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.ButtonMenuItem).call(null, menu, $t14), ss.mkdel(this, function(sender8, e8) {
			this.$onLoadLatestVersion(ss.EventArgs.Empty);
		}));
		var $t15 = new JS.UI.Menus.ButtonMenuItem.$ctor1('Change Password');
		$t15.set_iconCssClass('change-password');
		JS.UI.Menus.MenuExtensions.onClick(JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.ButtonMenuItem).call(null, menu, $t15), ss.mkdel(this, function(sender9, e9) {
			this.$onChangePassword(ss.EventArgs.Empty);
		}));
		var $t16 = new JS.UI.Menus.ButtonMenuItem.$ctor1('Log Out');
		$t16.set_iconCssClass('log-out');
		JS.UI.Menus.MenuExtensions.onClick(JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.ButtonMenuItem).call(null, menu, $t16), ss.mkdel(this, function(sender10, e10) {
			this.$onLogOut(ss.EventArgs.Empty);
		}));
		menu.build();
		menu.add_confirmed(ss.mkdel(this, this.$menu_Confirmed));
		this.$_menu = menu;
	};
	$QuickView_Client_UI_Menus_MainMenu.__typeName = 'QuickView.Client.UI.Menus.MainMenu';
	$QuickView_Client_UI_Menus_MainMenu.get_$useSeparateMenus = function() {
		return QuickView.Client.Common.AppEnvironment.get_OS() === 1;
	};
	$QuickView_Client_UI_Menus_MainMenu.$getVersionAgeText = function(releaseTime) {
		var versionAge = new ss.TimeSpan((new Date() - releaseTime) * 10000);
		if (versionAge.ticks >= (new ss.TimeSpan(0)).ticks) {
			var list = [];
			if ((versionAge.ticks / 864000000000 | 0) > 1) {
				list.push(ss.formatString('{0}d', versionAge.ticks / 864000000000 | 0));
			}
			if ((versionAge.ticks / 36000000000 % 24 | 0) > 0) {
				list.push(ss.formatString('{0}h', versionAge.ticks / 36000000000 % 24 | 0));
			}
			if ((versionAge.ticks / 600000000 % 60 | 0) > 0) {
				list.push(ss.formatString('{0}m', versionAge.ticks / 600000000 % 60 | 0));
			}
			if (list.length === 0) {
				list.push(ss.formatString('{0}s', versionAge.ticks / 10000000 % 60 | 0));
			}
			return '(' + ss.arrayFromEnumerable(list).join(' ') + ' ago)';
		}
		else {
			return '';
		}
	};
	global.QuickView.Client.UI.Menus.MainMenu = $QuickView_Client_UI_Menus_MainMenu;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Menus.MoveRowEventArgs
	var $QuickView_Client_UI_Menus_MoveRowEventArgs = function(position) {
		this.position = 0;
		ss.EventArgs.call(this);
		this.position = position;
	};
	$QuickView_Client_UI_Menus_MoveRowEventArgs.__typeName = 'QuickView.Client.UI.Menus.MoveRowEventArgs';
	global.QuickView.Client.UI.Menus.MoveRowEventArgs = $QuickView_Client_UI_Menus_MoveRowEventArgs;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Menus.MoveRowPosition
	var $QuickView_Client_UI_Menus_MoveRowPosition = function() {
	};
	$QuickView_Client_UI_Menus_MoveRowPosition.__typeName = 'QuickView.Client.UI.Menus.MoveRowPosition';
	global.QuickView.Client.UI.Menus.MoveRowPosition = $QuickView_Client_UI_Menus_MoveRowPosition;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Menus.RowHeaderMenu
	var $QuickView_Client_UI_Menus_RowHeaderMenu = function(chartMenu) {
		this.indicator = null;
		this.dataRecency = null;
		this.$1$IndicatorOptionsField = null;
		this.$_visibleDataFundsInGroupCount = 0;
		this.$_visibleDataFundsInSiteCount = 0;
		this.isFavorite = false;
		this.$1$IsFavoriteChangedField = null;
		this.enableSilverlight = false;
		this.$1$GoToSilverlightField = null;
		this.$1$MoveRowField = null;
		this.$1$RemoveRowField = null;
		this.$1$RemoveFundGroupField = null;
		this.$1$RemoveFundSiteField = null;
		this.$_menu = null;
		this.$buttonAddToFavorites = null;
		this.$buttonRemoveFromFavorites = null;
		this.$buttonSilverlight = null;
		this.$buttonRemoveFund = null;
		this.$buttonRemoveFundGroup = null;
		this.$buttonRemoveFundSite = null;
		this.$htmlFundInfo = null;
		this.$htmlUpdateInfo = null;
		this.$checkBoxShowBenchmarks = null;
		this.$menuItemBenchmarks = null;
		this.$groupBenchmarks = null;
		JS.ArgumentHelper.notNull(chartMenu, 'chartMenu');
		var $t1 = new JS.UI.Menus.Menu();
		$t1.set_title(String.fromCharCode(160));
		$t1.set_position({ item1: 1 });
		$t1.set_cssClass('mm-light menu ' + (QuickView.Client.Common.AppEnvironment.get_isMobileDevice() ? 'mobile' : 'desktop'));
		$t1.set_fullscreen(QuickView.Client.Common.AppEnvironment.get_isMobileDevice());
		$t1.set_disableAnimation(QuickView.Client.Common.AppEnvironment.get_isMobileDevice());
		$t1.set_showConfirmButton(true);
		var menu = this.$_menu = $t1;
		menu.get_options().set_enableIcons(true);
		menu.get_options().set_iconCssClass('icon');
		menu.get_options().set_checkedIconCssClass('check');
		var $t2 = new JS.UI.Menus.ButtonMenuItem.$ctor1('Move to Top');
		$t2.set_iconCssClass('move-top');
		$t2.set_groupID('Move');
		$t2.commandArgument = 1;
		JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.ButtonMenuItem).call(null, menu, $t2);
		var $t3 = new JS.UI.Menus.ButtonMenuItem.$ctor1('Move Up');
		$t3.set_iconCssClass('move-up');
		$t3.set_groupID('Move');
		$t3.commandArgument = 3;
		JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.ButtonMenuItem).call(null, menu, $t3);
		var $t4 = new JS.UI.Menus.ButtonMenuItem.$ctor1('Move Down');
		$t4.set_iconCssClass('move-down');
		$t4.set_groupID('Move');
		$t4.commandArgument = 4;
		JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.ButtonMenuItem).call(null, menu, $t4);
		var $t5 = new JS.UI.Menus.ButtonMenuItem.$ctor1('Move to Bottom');
		$t5.set_iconCssClass('move-bottom');
		$t5.set_groupID('Move');
		$t5.commandArgument = 2;
		JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.ButtonMenuItem).call(null, menu, $t5);
		var bmSubmenu = Enumerable.from(chartMenu.S).where(function(x) {
			return x.N.toLowerCase() === 'bm';
		}).firstOrDefault(null, ss.getDefaultValue(QuickView.Client.Models.Charts.Submenu));
		if (ss.isValue(bmSubmenu)) {
			var $t6 = new JS.UI.Menus.SeparatorMenuItem();
			$t6.set_groupID('Benchmarks');
			JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.SeparatorMenuItem).call(null, menu, $t6);
			var $t7 = new JS.UI.Menus.CheckMenuItem.$ctor1('Show Benchmarks');
			$t7.set_tooltip('Show the selected benchmarks in collapsed and extended charts.');
			$t7.set_groupID('Benchmarks');
			this.$checkBoxShowBenchmarks = JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.CheckMenuItem).call(null, menu, $t7);
			var $t8 = new $QuickView_Client_UI_Menus_$FundGroupMenuItem(null, bmSubmenu, false, false);
			$t8.set_groupID('Benchmarks');
			this.$menuItemBenchmarks = JS.UI.Menus.MenuExtensions.add($QuickView_Client_UI_Menus_$FundGroupMenuItem).call(null, menu, $t8);
		}
		JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.SeparatorMenuItem).call(null, menu, new JS.UI.Menus.SeparatorMenuItem());
		var $t9 = new JS.UI.Menus.ButtonMenuItem.$ctor1('Remove');
		$t9.set_iconCssClass('remove-row');
		this.$buttonRemoveFund = JS.UI.Menus.MenuExtensions.onClick(JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.ButtonMenuItem).call(null, menu, $t9), ss.mkdel(this, function(sender, e) {
			this.$onRemoveRow(ss.EventArgs.Empty);
		}));
		var $t10 = new JS.UI.Menus.ButtonMenuItem.$ctor1('Remove Category (#)');
		$t10.set_iconCssClass('remove-row');
		this.$buttonRemoveFundGroup = JS.UI.Menus.MenuExtensions.onClick(JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.ButtonMenuItem).call(null, menu, $t10), ss.mkdel(this, function(sender1, e1) {
			this.$onRemoveFundGroup(ss.EventArgs.Empty);
		}));
		var $t11 = new JS.UI.Menus.ButtonMenuItem.$ctor1('Remove Site (#)');
		$t11.set_iconCssClass('remove-row');
		this.$buttonRemoveFundSite = JS.UI.Menus.MenuExtensions.onClick(JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.ButtonMenuItem).call(null, menu, $t11), ss.mkdel(this, function(sender2, e2) {
			this.$onRemoveFundSite(ss.EventArgs.Empty);
		}));
		JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.SeparatorMenuItem).call(null, menu, new JS.UI.Menus.SeparatorMenuItem());
		var $t12 = new JS.UI.Menus.ButtonMenuItem.$ctor1('Add to Favorites');
		$t12.set_iconCssClass('add-to-favorites');
		this.$buttonAddToFavorites = JS.UI.Menus.MenuExtensions.onClick(JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.ButtonMenuItem).call(null, menu, $t12), ss.mkdel(this, function(sender3, e3) {
			this.$setIsFavorite(true);
		}));
		var $t13 = new JS.UI.Menus.ButtonMenuItem.$ctor1('Remove from Favorites');
		$t13.set_iconCssClass('remove-from-favorites');
		this.$buttonRemoveFromFavorites = JS.UI.Menus.MenuExtensions.onClick(JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.ButtonMenuItem).call(null, menu, $t13), ss.mkdel(this, function(sender4, e4) {
			this.$setIsFavorite(false);
		}));
		if (false === QuickView.Client.Common.AppEnvironment.get_isMobileDevice()) {
			JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.SeparatorMenuItem).call(null, menu, new JS.UI.Menus.SeparatorMenuItem());
			var $t14 = new JS.UI.Menus.ButtonMenuItem.$ctor1('Go to Full Version');
			$t14.set_iconCssClass('silverlight');
			this.$buttonSilverlight = JS.UI.Menus.MenuExtensions.onClick(JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.ButtonMenuItem).call(null, menu, $t14), ss.mkdel(this, function(sender5, e5) {
				this.$onGoToSilverlight(ss.EventArgs.Empty);
			}));
		}
		this.$htmlFundInfo = JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.HtmlMenuItem).call(null, menu, new JS.UI.Menus.HtmlMenuItem());
		this.$htmlUpdateInfo = JS.UI.Menus.MenuExtensions.add(JS.UI.Menus.HtmlMenuItem).call(null, menu, new JS.UI.Menus.HtmlMenuItem());
		menu.build();
		menu.add_confirmed(ss.mkdel(this, this.$menu_Confirmed));
		menu.getGroup('Move').add_command(ss.mkdel(this, this.$move_Command));
		this.$groupBenchmarks = menu.getGroup('Benchmarks');
	};
	$QuickView_Client_UI_Menus_RowHeaderMenu.__typeName = 'QuickView.Client.UI.Menus.RowHeaderMenu';
	global.QuickView.Client.UI.Menus.RowHeaderMenu = $QuickView_Client_UI_Menus_RowHeaderMenu;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Menus.ShowTopBottomMarketsEventArgs
	var $QuickView_Client_UI_Menus_ShowTopBottomMarketsEventArgs = function(mode) {
		this.$2$ModeField = 0;
		ss.EventArgs.call(this);
		this.set_mode(mode);
	};
	$QuickView_Client_UI_Menus_ShowTopBottomMarketsEventArgs.__typeName = 'QuickView.Client.UI.Menus.ShowTopBottomMarketsEventArgs';
	global.QuickView.Client.UI.Menus.ShowTopBottomMarketsEventArgs = $QuickView_Client_UI_Menus_ShowTopBottomMarketsEventArgs;
	ss.initClass($QuickView_$Client_UI_Menus_$FundGroupMenuItem$FundMenu, $asm, {
		add_$openParent: function(value) {
			this.$4$OpenParentField = ss.delegateCombine(this.$4$OpenParentField, value);
		},
		remove_$openParent: function(value) {
			this.$4$OpenParentField = ss.delegateRemove(this.$4$OpenParentField, value);
		},
		$onOpenParent: function(e) {
			var temp = this.$4$OpenParentField;
			if (!ss.staticEquals(temp, null)) {
				temp(this, e);
			}
		},
		add_$closeMenu: function(value) {
			this.$4$CloseMenuField = ss.delegateCombine(this.$4$CloseMenuField, value);
		},
		remove_$closeMenu: function(value) {
			this.$4$CloseMenuField = ss.delegateRemove(this.$4$CloseMenuField, value);
		},
		$onCloseMenu: function(e) {
			var temp = this.$4$CloseMenuField;
			if (!ss.staticEquals(temp, null)) {
				temp(this, e);
			}
		},
		onOpened: function(e) {
			JS.UI.Menus.Menu.prototype.onOpened.call(this, e);
			// Prepares the prev button
			this.$setupPrevButton();
			if (false === this.$_eventInitialized) {
				this.get_prevButton().click(ss.mkdel(this, this.$prevButton_Click));
				this.$_eventInitialized = true;
			}
		},
		$setupPrevButton: function() {
			// Make sure the "prev" button is visible
			this.get_prevButton().attr('href', '#');
			// Reset to default value; this value is updated by MMenu when going into a real sub menu or a tooltip
			this.get_prevButton().show();
		},
		$prevButton_Click: function(e) {
			$QuickView_Client_UI_Menus_$FundGroupMenuItem.$log.trace('FundMenu.PrevButton_Click');
			{
				var href = this.get_prevButton().attr('href');
				if (href === '' || href === '#') {
					// The button was pressed while in the primary menu
					$QuickView_Client_UI_Menus_$FundGroupMenuItem.$log.trace('  -> Return to previous menu');
				}
				else {
					// The button was pressed to navigate back from a real sub-menu or a tooltip
					// so do nothing
					$QuickView_Client_UI_Menus_$FundGroupMenuItem.$log.trace('  -> Return from a sub-menu or a tooltip');
					// Reset the button after the menu transition has completed
					// MMenu hides the button and does not resets the "href" attribute;
					// Because of the reset only one level of sub-menus (e.g. a tooltip) is supported.
					window.setTimeout(ss.mkdel(this, this.$setupPrevButton), 600);
					return;
				}
			}
			this.$_closedByPrevButton = true;
			// The menu will be closed automatically when the parent is open
			this.$onOpenParent(ss.EventArgs.Empty);
		},
		onClosed: function(e) {
			JS.UI.Menus.Menu.prototype.onClosed.call(this, e);
			$QuickView_Client_UI_Menus_$FundGroupMenuItem.$log.trace(ss.formatString('FundMenu.OnClosed (_closedByPrevButton = {0}, IsSubmenuOpening = {1})', this.$_closedByPrevButton, this.$isSubmenuOpening));
			if (this.$_closedByPrevButton || this.$isSubmenuOpening) {
				this.$_closedByPrevButton = false;
				this.$isSubmenuOpening = false;
			}
			else {
				// The menu has been closed by clicking on the "Close" button or
				// outside of the menu. Thus the whole main menu should be considered closed
				this.$onCloseMenu(ss.EventArgs.Empty);
			}
		}
	}, JS.UI.Menus.Menu);
	ss.initEnum($QuickView_$Client_UI_Menus_MainMenu$AddAndRemoveFundsAndFavoritesMode, $asm, { $none: 0, $addFavorites: 1, $removeFavorites: 2, $removeNonFavorites: 4 });
	ss.initClass($QuickView_$Client_UI_Menus_MainMenu$CustomMenu, $asm, {
		onClosed: function(e) {
			if (this.$isSubmenuOpening) {
				$QuickView_Client_UI_Menus_MainMenu.$log.trace('CustomMenu.OnClosed (IsSubmenuOpening = true)');
				// Do NOT raise the event since the main menu should not be considered closed
				// if it is being closed because a sub-menu is opening
				this.$isSubmenuOpening = false;
				return;
			}
			$QuickView_Client_UI_Menus_MainMenu.$log.trace('CustomMenu.OnClosed (IsSubmenuOpening = false)');
			JS.UI.Menus.Menu.prototype.onClosed.call(this, e);
		},
		$closeMainMenu: function() {
			// Fire the "Closed" event
			$QuickView_Client_UI_Menus_MainMenu.$log.trace('CustomMenu.CloseMainMenu');
			JS.UI.Menus.Menu.prototype.onClosed.call(this, ss.EventArgs.Empty);
		},
		$confirmMainMenu: function() {
			// Fire the "Confirmed" event
			$QuickView_Client_UI_Menus_MainMenu.$log.trace('CustomMenu.ConfirmMainMenu');
			JS.UI.Menus.Menu.prototype.onConfirmed.call(this, new ss.CancelEventArgs());
		}
	}, JS.UI.Menus.Menu);
	ss.initClass($QuickView_Client_UI_Menus_$FavoritesMenuItem, $asm, {
		buildCore: function() {
			JS.UI.Menus.IconedMenuItem.prototype.buildCore.call(this);
			this.$control = $("<span class='label'></span>").appendTo(this.element);
			$('<span></span>').appendTo(this.$control).text(this.get_title());
			this.setupIconControl(this.$control);
			this.$controlAdd = $("<var class='add'></var>").prependTo(this.element);
			this.$controlAdd.click(ss.mkdel(this, this.$controlAdd_Click));
			this.$controlRemove = $("<var class='remove'></var>").prependTo(this.element);
			this.$controlRemove.click(ss.mkdel(this, this.$controlRemove_Click));
		},
		$controlAdd_Click: function(e) {
			// Do not propagate event to the main button
			e.preventDefault();
			e.stopPropagation();
			if (this.$nonVisibleFundCount <= 0) {
				// The button is disabled
				return;
			}
			this.$addFavorites = false === this.$addFavorites;
			this.$controlAdd.toggleClass('selected');
		},
		$controlRemove_Click: function(e) {
			// Do not propagate event to the main button
			e.preventDefault();
			e.stopPropagation();
			if (this.$visibleFundCount <= 0) {
				// The button is disabled
				return;
			}
			this.$removeFavorites = false === this.$removeFavorites;
			this.$controlRemove.toggleClass('selected');
		},
		$updateState: function(visibleFavoriteCount, nonVisibleFavoriteCount) {
			var visibileFundCount = visibleFavoriteCount;
			var nonVisibleFundCount = nonVisibleFavoriteCount;
			this.$addFavorites = false;
			this.$removeFavorites = false;
			this.$visibleFundCount = visibileFundCount;
			this.$nonVisibleFundCount = nonVisibleFundCount;
			this.$controlAdd.removeClass('disabled selected');
			this.$controlRemove.removeClass('disabled selected');
			if (this.$nonVisibleFundCount > 0) {
				this.$controlAdd.text(this.$nonVisibleFundCount.toString());
			}
			else {
				this.$controlAdd.text('---');
				this.$controlAdd.addClass('disabled');
			}
			if (this.$visibleFundCount > 0) {
				this.$controlRemove.text(this.$visibleFundCount.toString());
			}
			else {
				this.$controlRemove.text('---');
				this.$controlRemove.addClass('disabled');
			}
		}
	}, JS.UI.Menus.IconedMenuItem);
	ss.initInterface($QuickView_Client_UI_Menus_$IFundMenuItem, $asm, { get_$visibleFundCount: null, get_$nonVisibleFundCount: null, get_$fundCount: null, get_$isFavorite: null, get_$favoriteCount: null, get_$visibleFavoriteCount: null, get_$nonVisibleFavoriteCount: null, add_$favoriteCountChanged: null, remove_$favoriteCountChanged: null, $setIsFavorite: null, $getState: null, $updateState: null });
	ss.initClass($QuickView_Client_UI_Menus_$FundGroupMenuItem, $asm, {
		get_$visibleFundCount: function() {
			return this.$5$VisibleFundCountField;
		},
		set_$visibleFundCount: function(value) {
			this.$5$VisibleFundCountField = value;
		},
		get_$nonVisibleFundCount: function() {
			return this.$5$NonVisibleFundCountField;
		},
		set_$nonVisibleFundCount: function(value) {
			this.$5$NonVisibleFundCountField = value;
		},
		get_$fundCount: function() {
			return this.get_$visibleFundCount() + this.get_$nonVisibleFundCount();
		},
		get_$isFavorite: function() {
			return this.$5$IsFavoriteField;
		},
		set_$isFavorite: function(value) {
			this.$5$IsFavoriteField = value;
		},
		get_$visibleFavoriteCount: function() {
			return this.$5$VisibleFavoriteCountField;
		},
		set_$visibleFavoriteCount: function(value) {
			this.$5$VisibleFavoriteCountField = value;
		},
		get_$nonVisibleFavoriteCount: function() {
			return this.$5$NonVisibleFavoriteCountField;
		},
		set_$nonVisibleFavoriteCount: function(value) {
			this.$5$NonVisibleFavoriteCountField = value;
		},
		get_$favoriteCount: function() {
			return this.get_$visibleFavoriteCount() + this.get_$nonVisibleFavoriteCount();
		},
		add_$favoriteCountChanged: function(value) {
			this.$5$FavoriteCountChangedField = ss.delegateCombine(this.$5$FavoriteCountChangedField, value);
		},
		remove_$favoriteCountChanged: function(value) {
			this.$5$FavoriteCountChangedField = ss.delegateRemove(this.$5$FavoriteCountChangedField, value);
		},
		$onFavoriteCountChanged: function(e) {
			var temp = this.$5$FavoriteCountChangedField;
			if (!ss.staticEquals(temp, null)) {
				temp(this, e);
			}
		},
		get_$submenu: function() {
			return this.$_submenu || this.get_submenu();
			// If "UseSeparateMenus" is "false" then "_submenu" is null and the real sub-menu should be used
		},
		buildCore: function() {
			JS.UI.Menus.SubmenuItem.prototype.buildCore.call(this);
			this.$controlAdd = $("<var class='add'></var>").prependTo(this.element);
			this.$controlAdd.click(ss.mkdel(this, this.$controlAdd_Click));
			this.$controlRemove = $("<var class='remove'></var>").prependTo(this.element);
			this.$controlRemove.click(ss.mkdel(this, this.$controlRemove_Click));
			if (this.$_enableFavorites) {
				this.control.click(ss.mkdel(this, this.$control_Click));
				this.control.addClass('label');
			}
			if (this.$_useSeparateMenus) {
				this.$buttonOpenSubmenu = $("<a class='mm-subopen' href='#'></a>").prependTo(this.element);
				this.$buttonOpenSubmenu.click(ss.mkdel(this, this.$buttonOpenSubmenu_Click));
				// Copy the options; the "RootMenu" property is initialized during the build so the options cannot be set earlier
				this.$_submenu.set_options(this.rootMenu.get_options());
				this.$_submenu.build();
			}
		},
		$buttonOpenSubmenu_Click: function(e) {
			// Do not follow the link
			e.preventDefault();
			// Prevent the main-menu from raising the "Closed" event
			//if (this.RootMenu == this.Menu) // This would not work since each item is in a new menu
			if (ss.isInstanceOfType(this.menu, $QuickView_$Client_UI_Menus_MainMenu$CustomMenu)) {
				// Top-level item;
				// The falg should be set only for top level items since they
				// are the only ones that may cause the root menu to close.
				// Setting the flag in other situations will prevent the menu from firing the "Close"
				// event when the menu is closed by clicking the close button on the root or by clicking
				// outside of the menu when the root is open.
				ss.cast(this.menu, $QuickView_$Client_UI_Menus_MainMenu$CustomMenu).$isSubmenuOpening = true;
			}
			else {
				// Notify the parent that a sub-menu is opening; this way the parent would know that the
				// reason that it is closed is not because the user explicitly closed the menu.
				ss.cast(this.menu, $QuickView_$Client_UI_Menus_$FundGroupMenuItem$FundMenu).$isSubmenuOpening = true;
			}
			this.$_submenu.open();
		},
		$submenu_OpenParent: function(sender, e) {
			$QuickView_Client_UI_Menus_$FundGroupMenuItem.$log.trace('FundGroupMenuItem.Submenu_OpenParent');
			// When going back to the root of the main menu it DOES NOT process favs or funds since
			// the open method of the "Menu" option is called directly. Favs and funds are processed
			// in the "MainMenu.Open" method which is different.
			this.rootMenu.open();
		},
		$submenu_CloseMenu: function(sender, e) {
			$QuickView_Client_UI_Menus_$FundGroupMenuItem.$log.trace('FundGroupMenuItem.Submenu_CloseMenu');
			// Notify the main menu that the sub-menu has been closed explicitly
			this.$_rootMenu.$closeMainMenu();
		},
		$submenu_Confirmed: function(sender, e) {
			$QuickView_Client_UI_Menus_$FundGroupMenuItem.$log.trace('FundGroupMenuItem.Submenu_Confirmed');
			// Notify the main menu that the sub-menu has been closed explicitly
			this.$_rootMenu.$confirmMainMenu();
		},
		$control_Click: function(e) {
			this.$privateSetIsFavorite(false === this.get_$isFavorite(), true);
		},
		$controlAdd_Click: function(e) {
			// Do not propagate event to the main button
			e.preventDefault();
			e.stopPropagation();
			if (this.get_$nonVisibleFundCount() <= 0) {
				// The button is disabled
				return;
			}
			this.$addFunds = false === this.$addFunds;
			this.$controlAdd.toggleClass('selected');
		},
		$controlRemove_Click: function(e) {
			// Do not propagate event to the main button
			e.preventDefault();
			e.stopPropagation();
			if (this.get_$visibleFundCount() <= 0) {
				// The button is disabled
				return;
			}
			this.$removeFunds = false === this.$removeFunds;
			this.$controlRemove.toggleClass('selected');
		},
		$getState: function(addFunds, removeFunds, mustAddFunds, mustRemoveFunds, mustAddFundsIfFavorite, mustRemoveFundsIfFavorite, mustRemoveFundsIfNotFavorite, addFavorites, removeFavorites) {
			mustAddFunds = !!(mustAddFunds | this.$addFunds);
			mustRemoveFunds = !!(mustRemoveFunds | this.$removeFunds);
			var $t1 = ss.getEnumerator(this.get_$submenu().get_items());
			try {
				while ($t1.moveNext()) {
					var item = $t1.current();
					if (ss.isInstanceOfType(item, $QuickView_Client_UI_Menus_$IFundMenuItem)) {
						ss.cast(item, $QuickView_Client_UI_Menus_$IFundMenuItem).$getState(addFunds, removeFunds, mustAddFunds, mustRemoveFunds, mustAddFundsIfFavorite, mustRemoveFundsIfFavorite, mustRemoveFundsIfNotFavorite, addFavorites, removeFavorites);
					}
				}
			}
			finally {
				$t1.dispose();
			}
		},
		$updateState: function(state) {
			var visibleFundCount = 0;
			var nonVisibleFundCount = 0;
			var visibleFavoriteCount = 0;
			var nonVisibleFavoriteCount = 0;
			var $t1 = Enumerable.from(this.get_$submenu().get_items()).ofType($QuickView_Client_UI_Menus_$IFundMenuItem).getEnumerator();
			try {
				while ($t1.moveNext()) {
					var item = $t1.current();
					item.$updateState(state);
					// Get the number of funds that can be added/removed by the group
					visibleFundCount += item.get_$visibleFundCount();
					nonVisibleFundCount += item.get_$nonVisibleFundCount();
					visibleFavoriteCount += item.get_$visibleFavoriteCount();
					nonVisibleFavoriteCount += item.get_$nonVisibleFavoriteCount();
				}
			}
			finally {
				$t1.dispose();
			}
			this.$addFunds = false;
			this.$removeFunds = false;
			this.set_$nonVisibleFundCount(nonVisibleFundCount);
			this.set_$visibleFundCount(visibleFundCount);
			this.$controlAdd.removeClass('disabled selected');
			this.$controlRemove.removeClass('disabled selected');
			if (this.get_$nonVisibleFundCount() > 0) {
				this.$controlAdd.text(this.get_$nonVisibleFundCount().toString());
			}
			else {
				this.$controlAdd.text('---');
				this.$controlAdd.addClass('disabled');
			}
			if (this.get_$visibleFundCount() > 0) {
				this.$controlRemove.text(this.get_$visibleFundCount().toString());
			}
			else {
				this.$controlRemove.text('---');
				this.$controlRemove.addClass('disabled');
			}
			if (this.$_enableFavorites) {
				this.$setFavoriteCount(visibleFavoriteCount, nonVisibleFavoriteCount, false);
			}
		},
		$setIsFavorite: function(isFavorite) {
			this.$privateSetIsFavorite(isFavorite, false);
		},
		$privateSetIsFavorite: function(isFavorite, raiseEvent) {
			if (false === this.$_enableFavorites) {
				throw new ss.InvalidOperationException('Favorites are not enabled for this menu item.');
			}
			if (this.get_$isFavorite() === isFavorite) {
				// No changes
				return;
			}
			var visibleFavoriteCount = 0;
			var nonVisibleFavoriteCount = 0;
			// Update the values of children
			var $t1 = Enumerable.from(this.get_$submenu().get_items()).ofType($QuickView_Client_UI_Menus_$IFundMenuItem).getEnumerator();
			try {
				while ($t1.moveNext()) {
					var item = $t1.current();
					item.$setIsFavorite(isFavorite);
					visibleFavoriteCount += item.get_$visibleFavoriteCount();
					nonVisibleFavoriteCount += item.get_$nonVisibleFavoriteCount();
				}
			}
			finally {
				$t1.dispose();
			}
			this.$setFavoriteCount(visibleFavoriteCount, nonVisibleFavoriteCount, raiseEvent);
		},
		$menuItem_FavoriteCountChanged: function(sender, e) {
			var visibleFavoriteCount = 0;
			var nonVisibleFavoriteCount = 0;
			// Update the values of children
			var $t1 = Enumerable.from(this.get_$submenu().get_items()).ofType($QuickView_Client_UI_Menus_$IFundMenuItem).getEnumerator();
			try {
				while ($t1.moveNext()) {
					var item = $t1.current();
					visibleFavoriteCount += item.get_$visibleFavoriteCount();
					nonVisibleFavoriteCount += item.get_$nonVisibleFavoriteCount();
				}
			}
			finally {
				$t1.dispose();
			}
			this.$setFavoriteCount(visibleFavoriteCount, nonVisibleFavoriteCount, true);
		},
		$setFavoriteCount: function(visible, nonVisible, raiseEvent) {
			this.set_$visibleFavoriteCount(visible);
			this.set_$nonVisibleFavoriteCount(nonVisible);
			this.set_$isFavorite(this.get_$favoriteCount() >= this.get_$fundCount());
			this.set_isIconVisible(this.get_$favoriteCount() > 0);
			this.set_iconCssClass(((this.get_$favoriteCount() < this.get_$fundCount()) ? 'favorite-partial' : 'favorite'));
			if (raiseEvent) {
				this.$onFavoriteCountChanged(ss.EventArgs.Empty);
			}
			this.iconControl.text(((this.get_$favoriteCount() > 0) ? this.get_$favoriteCount().toString() : ''));
		}
	}, JS.UI.Menus.SubmenuItem, [$QuickView_Client_UI_Menus_$IFundMenuItem]);
	ss.initClass($QuickView_Client_UI_Menus_$FundMenuItem, $asm, {
		get_$visibleFundCount: function() {
			return (this.$isFundVisible ? 1 : 0);
		},
		get_$nonVisibleFundCount: function() {
			return this.get_$fundCount() - this.get_$visibleFundCount();
		},
		get_$fundCount: function() {
			return 1;
		},
		get_$isFavorite: function() {
			return this.$4$IsFavoriteField;
		},
		set_$isFavorite: function(value) {
			this.$4$IsFavoriteField = value;
		},
		get_$visibleFavoriteCount: function() {
			return ((this.get_$isFavorite() && this.$isFundVisible) ? 1 : 0);
		},
		get_$nonVisibleFavoriteCount: function() {
			return ((this.get_$isFavorite() && false === this.$isFundVisible) ? 1 : 0);
		},
		get_$favoriteCount: function() {
			return (this.get_$isFavorite() ? 1 : 0);
		},
		add_$favoriteCountChanged: function(value) {
			this.$4$FavoriteCountChangedField = ss.delegateCombine(this.$4$FavoriteCountChangedField, value);
		},
		remove_$favoriteCountChanged: function(value) {
			this.$4$FavoriteCountChangedField = ss.delegateRemove(this.$4$FavoriteCountChangedField, value);
		},
		$onFavoriteFundCountChanged: function(e) {
			var temp = this.$4$FavoriteCountChangedField;
			if (!ss.staticEquals(temp, null)) {
				temp(this, e);
			}
		},
		buildCore: function() {
			JS.UI.Menus.IconedMenuItem.prototype.buildCore.call(this);
			this.$control = $("<a href='#' class='label'></a>").appendTo(this.element);
			this.$labelTitle = $('<span></span>').appendTo(this.$control).text(ss.coalesce(this.get_title(), ''));
			if (this.$_enableFavorites) {
				this.$control.click(ss.mkdel(this, this.$control_Click));
				this.setupIconControl(this.$control);
			}
			this.$controlAdd = $("<var class='add'></var>").prependTo(this.element);
			this.$controlAdd.click(ss.mkdel(this, this.$controlAdd_Click));
			this.$controlRemove = $("<var class='remove'></var>").prependTo(this.element);
			this.$controlRemove.click(ss.mkdel(this, this.$controlRemove_Click));
		},
		$control_Click: function(e) {
			this.set_$isFavorite(false === this.get_$isFavorite());
			this.set_isIconVisible(this.get_$isFavorite());
			this.$onFavoriteFundCountChanged(ss.EventArgs.Empty);
		},
		$controlAdd_Click: function(e) {
			// Do not propagate event to the main button
			e.preventDefault();
			e.stopPropagation();
			if (this.$isFundVisible) {
				// The button is disabled
				return;
			}
			this.$toggleNewIsFundVisible(true);
		},
		$controlRemove_Click: function(e) {
			// Do not propagate event to the main button
			e.preventDefault();
			e.stopPropagation();
			if (false === this.$isFundVisible) {
				// The button is disabled
				return;
			}
			this.$toggleNewIsFundVisible(false);
		},
		$toggleNewIsFundVisible: function(newValue) {
			if (ss.isValue(this.$newIsFundVisible)) {
				this.$newIsFundVisible = null;
			}
			else {
				this.$newIsFundVisible = newValue;
			}
			this.$onNewIsFundVisibleChanged();
		},
		$onNewIsFundVisibleChanged: function() {
			this.$controlAdd.removeClass('selected');
			this.$controlRemove.removeClass('selected');
			if (this.$newIsFundVisible === true) {
				this.$controlAdd.addClass('selected');
			}
			else if (this.$newIsFundVisible === false) {
				this.$controlRemove.addClass('selected');
			}
		},
		$setIsFavorite: function(isFavorite) {
			if (false === this.$_enableFavorites) {
				throw new ss.InvalidOperationException('Favorites are not enabled for this menu item.');
			}
			if (this.get_$isFavorite() === isFavorite) {
				// No change
				return;
			}
			this.set_$isFavorite(isFavorite);
			this.set_isIconVisible(this.get_$isFavorite());
		},
		$getState: function(addFunds, removeFunds, mustAddFunds, mustRemoveFunds, mustAddFundsIfFavorite, mustRemoveFundsIfFavorite, mustRemoveFundsIfNotFavorite, addFavorites, removeFavorites) {
			if (this.$isFundVisible) {
				if (mustRemoveFunds || this.$newIsFundVisible === false || this.get_$isFavorite() && mustRemoveFundsIfFavorite || false === this.get_$isFavorite() && mustRemoveFundsIfNotFavorite) {
					removeFunds.set_item(this.$_fund.indicator, JS.DBNull.get_value());
					// Remove the fund if it is visible and should no longer be visible
				}
			}
			else if (mustAddFunds || this.$newIsFundVisible === true || this.get_$isFavorite() && mustAddFundsIfFavorite) {
				addFunds.set_item(this.$_fund.indicator, JS.DBNull.get_value());
				// Add the fund if it is visible and should no longer be visible
			}
			if (this.$_enableFavorites) {
				if (this.get_$isFavorite() !== this.$_wasFavorite) {
					if (this.get_$isFavorite()) {
						addFavorites.set_item(this.$_fund.indicator, JS.DBNull.get_value());
					}
					else {
						removeFavorites.set_item(this.$_fund.indicator, JS.DBNull.get_value());
					}
				}
			}
		},
		$updateState: function(state) {
		    var isVisible = state.visibleFunds.containsKey(this.$_fund.indicator);
		    //console.log('isVisible', this.$_fund.indicator, this.$_fund);
			this.$isFundVisible = isVisible;
			this.$newIsFundVisible = null;
			if (this.$_enableFavorites) {
				var isFavorite = state.favorites.containsKey(this.$_fund.indicator);
				this.set_$isFavorite(isFavorite);
				this.$_wasFavorite = isFavorite;
				this.set_isIconVisible(this.get_$isFavorite());
			}
			this.$controlAdd.removeClass('disabled selected');
			this.$controlRemove.removeClass('disabled selected');
			if (isVisible) {
				// The fund can be removed
				this.$controlAdd.text('---');
				this.$controlAdd.addClass('disabled');
				this.$controlRemove.text('1');
			}
			else {
				// The fund can be added
				this.$controlAdd.text('1');
				this.$controlRemove.text('---');
				this.$controlRemove.addClass('disabled');
			}
		}
	}, JS.UI.Menus.IconedMenuItem, [$QuickView_Client_UI_Menus_$IFundMenuItem]);
	ss.initClass($QuickView_Client_UI_Menus_$FundMenuItemUpdateState, $asm, {});
	ss.initClass($QuickView_Client_UI_Menus_$FundMenuUtils, $asm, {});
	ss.initClass($QuickView_Client_UI_Menus_$FundTitleItem, $asm, {
		buildCore: function() {
			JS.UI.Menus.MenuItem.prototype.buildCore.call(this);
			// Create controls
			this.element.addClass('Label');
			// Property change event handlers
			this.titleProperty.add_changed(ss.mkdel(this, function(sender, args) {
				this.$updateTitle();
			}));
			// Apply properties
			this.$updateTitle();
		},
		$updateTitle: function() {
			this.element.text(ss.coalesce(this.get_title(), ''));
			$("<var class='icon-add-fund'></var>").prependTo(this.element);
			$("<var class='icon-remove-fund'></var>").prependTo(this.element);
		}
	}, JS.UI.Menus.MenuItem);
	$QuickView_Client_UI_Menus_$FundTitleItem.$ctor1.prototype = $QuickView_Client_UI_Menus_$FundTitleItem.prototype;
	ss.initClass($QuickView_Client_UI_Menus_$IndicatorTitleItem, $asm, {
		buildCore: function() {
			JS.UI.Menus.MenuItem.prototype.buildCore.call(this);
			// Create controls
			this.element.addClass('Label');
			// Property change event handlers
			this.titleProperty.add_changed(ss.mkdel(this, function(sender, args) {
				this.$updateTitle();
			}));
			// Apply properties
			this.$updateTitle();
		},
		$updateTitle: function() {
			this.element.text(ss.coalesce(this.get_title(), ''));
			$("<var class='icon-selected-indicator'></var>").prependTo(this.element);
		}
	}, JS.UI.Menus.MenuItem);
	ss.initClass($QuickView_Client_UI_Menus_ColumnDirectionEventArgs, $asm, {}, ss.EventArgs);
	ss.initClass($QuickView_Client_UI_Menus_AddColumnEventArgs, $asm, {}, $QuickView_Client_UI_Menus_ColumnDirectionEventArgs);
	ss.initClass($QuickView_Client_UI_Menus_ChangeResolutionEventArgs, $asm, {
		get_resolution: function() {
			return this.$2$ResolutionField;
		},
		set_resolution: function(value) {
			this.$2$ResolutionField = value;
		}
	}, ss.EventArgs);
	ss.initEnum($QuickView_Client_UI_Menus_ColumnDirection, $asm, { left: 0, right: 1 });
	ss.initClass($QuickView_Client_UI_Menus_ColumnHeaderMenu, $asm, {
		add_openRowCorrelation: function(value) {
			this.$1$OpenRowCorrelationField = ss.delegateCombine(this.$1$OpenRowCorrelationField, value);
		},
		remove_openRowCorrelation: function(value) {
			this.$1$OpenRowCorrelationField = ss.delegateRemove(this.$1$OpenRowCorrelationField, value);
		},
		$onOpenRowCorrelation: function(e) {
			var temp = this.$1$OpenRowCorrelationField;
			if (!ss.staticEquals(temp, null)) {
				temp(this, e);
			}
		},
		add_addColumn: function(value) {
			this.$1$AddColumnField = ss.delegateCombine(this.$1$AddColumnField, value);
		},
		remove_addColumn: function(value) {
			this.$1$AddColumnField = ss.delegateRemove(this.$1$AddColumnField, value);
		},
		$onAddColumn: function(e) {
			var temp = this.$1$AddColumnField;
			if (!ss.staticEquals(temp, null)) {
				temp(this, e);
			}
		},
		add_moveColumn: function(value) {
			this.$1$MoveColumnField = ss.delegateCombine(this.$1$MoveColumnField, value);
		},
		remove_moveColumn: function(value) {
			this.$1$MoveColumnField = ss.delegateRemove(this.$1$MoveColumnField, value);
		},
		$onMoveColumn: function(e) {
			var temp = this.$1$MoveColumnField;
			if (!ss.staticEquals(temp, null)) {
				temp(this, e);
			}
		},
		add_removeColumn: function(value) {
			this.$1$RemoveColumnField = ss.delegateCombine(this.$1$RemoveColumnField, value);
		},
		remove_removeColumn: function(value) {
			this.$1$RemoveColumnField = ss.delegateRemove(this.$1$RemoveColumnField, value);
		},
		$onRemoveColumn: function(e) {
			var temp = this.$1$RemoveColumnField;
			if (!ss.staticEquals(temp, null)) {
				temp(this, e);
			}
		},
		add_removeMultipleColumns: function(value) {
			this.$1$RemoveMultipleColumnsField = ss.delegateCombine(this.$1$RemoveMultipleColumnsField, value);
		},
		remove_removeMultipleColumns: function(value) {
			this.$1$RemoveMultipleColumnsField = ss.delegateRemove(this.$1$RemoveMultipleColumnsField, value);
		},
		$onRemoveMultipleColumns: function(e) {
			var temp = this.$1$RemoveMultipleColumnsField;
			if (!ss.staticEquals(temp, null)) {
				temp(this, e);
			}
		},
		$subPeriod_CheckChanged: function(sender, e) {
			var item = ss.cast(e.sender, JS.UI.Menus.CheckMenuItem);
			if (item.get_isChecked()) {
				var period = item.tag;
				this.$_columnOptions.set_period(period);
				// The menu will close so there is no need to uncheck/check items
			}
		},
		$stat_CheckChanged: function(sender, e) {
			var item = ss.cast(e.sender, JS.UI.Menus.CheckMenuItem);
			if (item.get_isChecked()) {
				this.$setChartStatsSortSettings(ss.cast(item.tag, String), 'None');
			}
		},
		$benchmarkStat_CheckChanged: function(sender, e) {
			var item = ss.cast(e.sender, JS.UI.Menus.CheckMenuItem);
			if (item.get_isChecked()) {
				this.$setChartStatsSortSettings('None', ss.cast(item.tag, String));
			}
		},
		$setChartStatsSortSettings: function(chartStat, benchmarkStat) {
			this.$_gridOptions.set_statsSortOptions(new QuickView.Client.UI.Common.Grid.ChartStatsSortOptions.$ctor1(this.$_columnOptions.id, chartStat, benchmarkStat, 1));
			// Switch the column to stat mode
			this.$_columnOptions.set_viewMode(2);
			// The menu will close so there is no need to uncheck/check items
		},
		$viewMode_CheckChanged: function(sender, e) {
			var item = ss.cast(e.sender, JS.UI.Menus.CheckMenuItem);
			if (item.get_isChecked()) {
				var viewMode = ss.cast(item.tag, ss.Int32);
				this.$_columnOptions.set_viewMode(viewMode);
				// Uncheck other items and check this one
				this.$_groupViewMode.setIsChecked(false);
				item.set_isChecked(true);
			}
			else {
				// Do not allow a selected item to be unchecked since at least one item must always be checked
				item.set_isChecked(true);
			}
		},
		open: function() {
			this.$buttonMoveLeft.set_isEnabled(this.canMoveLeft);
			this.$buttonMoveRight.set_isEnabled(this.canMoveRight);
			this.$buttonRemove.set_isEnabled(this.canRemove);
			this.$buttonRemoveMultiple.set_isEnabled(this.canRemove && this.canMoveRight);
			// Sub-period
			this.$_subPeriodGroup.setIsChecked(false);
			this.$_subPeriodGroup.get$1(JS.UI.Menus.CheckMenuItem).call(this.$_subPeriodGroup, 'SubPeriod:' + this.$_columnOptions.get_period().I.toString()).set_isChecked(true);
			if (ss.isValue(this.$_statGroup) && ss.isValue(this.$_benchmarkStatGroup)) {
				this.$_statGroup.setIsChecked(false);
				this.$_benchmarkStatGroup.setIsChecked(false);
				this.$_benchmarkStatGroup.setIsVisible(this.benchmarksEnabled);
				var sortSettings = this.$_gridOptions.get_statsSortOptions();
				if (ss.isValue(sortSettings) && ss.referenceEquals(sortSettings.columnID, this.$_columnOptions.id)) {
					if (sortSettings.stat !== 'None') {
						var item = this.$_statGroup.get$1(JS.UI.Menus.CheckMenuItem).call(this.$_statGroup, 'Stat:' + sortSettings.stat.toString());
						if (ss.isValue(item)) {
							item.set_isChecked(true);
						}
					}
					else if (sortSettings.benchmarkStat !== 'None') {
						var item1 = this.$_benchmarkStatGroup.get$1(JS.UI.Menus.CheckMenuItem).call(this.$_benchmarkStatGroup, 'BenchmarkStat:' + sortSettings.benchmarkStat.toString());
						if (ss.isValue(item1)) {
							item1.set_isChecked(true);
						}
					}
				}
			}
			// View mode
			this.$_groupViewMode.setIsChecked(false);
			// BUG: It is possible that the "Stats" option is selected even it was never available in the menu
			var menuItem = this.$_menu.get$1(JS.UI.Menus.CheckMenuItem).call(this.$_menu, 'ViewMode_' + this.$_columnOptions.get_viewMode().toString());
			if (ss.isValue(menuItem)) {
				menuItem.set_isChecked(true);
			}
			this.$_menu.open();
		},
		destroy: function() {
			this.$_menu.destroy();
		}
	});
	ss.initClass($QuickView_Client_UI_Menus_DataCellMenu, $asm, {
		add_closed: function(value) {
			this.$1$ClosedField = ss.delegateCombine(this.$1$ClosedField, value);
		},
		remove_closed: function(value) {
			this.$1$ClosedField = ss.delegateRemove(this.$1$ClosedField, value);
		},
		$onClosed: function(e) {
			JS.EventExtensions.fire(this.$1$ClosedField, this, e);
		},
		add_changeResolution: function(value) {
			this.$1$ChangeResolutionField = ss.delegateCombine(this.$1$ChangeResolutionField, value);
		},
		remove_changeResolution: function(value) {
			this.$1$ChangeResolutionField = ss.delegateRemove(this.$1$ChangeResolutionField, value);
		},
		$onChangeResolution: function(e) {
			JS.EventExtensions.fire$2($QuickView_Client_UI_Menus_ChangeResolutionEventArgs).call(null, this.$1$ChangeResolutionField, this, e);
		},
		add_openExpandedChart: function(value) {
			this.$1$OpenExpandedChartField = ss.delegateCombine(this.$1$OpenExpandedChartField, value);
		},
		remove_openExpandedChart: function(value) {
			this.$1$OpenExpandedChartField = ss.delegateRemove(this.$1$OpenExpandedChartField, value);
		},
		$onOpenExpandedChart: function(e) {
			JS.EventExtensions.fire(this.$1$OpenExpandedChartField, this, e);
		},
		add_openDrawdownChart: function(value) {
			this.$1$OpenDrawdownChartField = ss.delegateCombine(this.$1$OpenDrawdownChartField, value);
		},
		remove_openDrawdownChart: function(value) {
			this.$1$OpenDrawdownChartField = ss.delegateRemove(this.$1$OpenDrawdownChartField, value);
		},
		$onOpenDrawdownChart: function(e) {
			JS.EventExtensions.fire(this.$1$OpenDrawdownChartField, this, e);
		},
		add_openSlippageChart: function(value) {
			this.$1$OpenSlippageChartField = ss.delegateCombine(this.$1$OpenSlippageChartField, value);
		},
		remove_openSlippageChart: function(value) {
			this.$1$OpenSlippageChartField = ss.delegateRemove(this.$1$OpenSlippageChartField, value);
		},
		$onOpenSlippageChart: function(e) {
			JS.EventExtensions.fire(this.$1$OpenSlippageChartField, this, e);
		},
		add_showTopBottomMarkets: function(value) {
			this.$1$ShowTopBottomMarketsField = ss.delegateCombine(this.$1$ShowTopBottomMarketsField, value);
		},
		remove_showTopBottomMarkets: function(value) {
			this.$1$ShowTopBottomMarketsField = ss.delegateRemove(this.$1$ShowTopBottomMarketsField, value);
		},
		$onShowTopBottomMarkets: function(e) {
			JS.EventExtensions.fire$2($QuickView_Client_UI_Menus_ShowTopBottomMarketsEventArgs).call(null, this.$1$ShowTopBottomMarketsField, this, e);
		},
		add_showRelatedIndicators: function(value) {
			this.$1$ShowRelatedIndicatorsField = ss.delegateCombine(this.$1$ShowRelatedIndicatorsField, value);
		},
		remove_showRelatedIndicators: function(value) {
			this.$1$ShowRelatedIndicatorsField = ss.delegateRemove(this.$1$ShowRelatedIndicatorsField, value);
		},
		$onShowRelatedIndicators: function(e) {
			JS.EventExtensions.fire$2($QuickView_Client_UI_Menus_IndicatorsEventArgs).call(null, this.$1$ShowRelatedIndicatorsField, this, e);
		},
		add_showAllRelatedIndicators: function(value) {
			this.$1$ShowAllRelatedIndicatorsField = ss.delegateCombine(this.$1$ShowAllRelatedIndicatorsField, value);
		},
		remove_showAllRelatedIndicators: function(value) {
			this.$1$ShowAllRelatedIndicatorsField = ss.delegateRemove(this.$1$ShowAllRelatedIndicatorsField, value);
		},
		$onShowAllRelatedIndicators: function(e) {
			JS.EventExtensions.fire(this.$1$ShowAllRelatedIndicatorsField, this, e);
		},
		$menu_Closed: function(sender, e) {
			this.$onClosed(ss.EventArgs.Empty);
		},
		$menu_Confirmed: function(sender, e) {
			var indicatorList = Enumerable.from(this.$relatedIndicatorButtonList).where(function(x) {
				return x.get_isVisible() && x.get_isSelected();
			}).select(function(x1) {
				return x1.indicator;
			}).toArray();
			if (indicatorList.length > 0) {
				this.$onShowRelatedIndicators(new $QuickView_Client_UI_Menus_IndicatorsEventArgs(indicatorList));
			}
		},
		open: function() {
			// Set title
			if (ss.isNullOrUndefined(this.indicator)) {
				throw new ss.InvalidOperationException('An indicator must be specified.');
			}
			if (ss.isNullOrUndefined(this.period)) {
				throw new ss.InvalidOperationException('A period must be specified.');
			}
			var title = ss.formatString('{0} - {1} [{2}]', this.indicator.menuInfo.A, this.indicator.N, this.period.N);
			this.$buttonExpandedChart.set_isVisible(this.chartMode === 1);
			this.$groupIntradayResolution.setIsVisible(false);
			this.$groupResolution.setIsVisible(false);
			if (this.chartMode === 2) {
				var group;
				if (this.period.T === 2) {
					group = this.$groupIntradayResolution;
					this.$groupIntradayResolution.setIsVisible(true);
				}
				else {
					group = this.$groupResolution;
					this.$groupResolution.setIsVisible(true);
				}
				group.setIsChecked(false);
				if (ss.isValue(this.resolution)) {
					var menuItem = Enumerable.from(group.items).ofType(JS.UI.Menus.CheckMenuItem).where(ss.mkdel(this, function(x) {
						return ss.cast(x.tag, ss.Int32) === ss.unbox(this.resolution);
					})).firstOrDefault(null, ss.getDefaultValue(JS.UI.Menus.CheckMenuItem));
					if (ss.isValue(menuItem)) {
						menuItem.set_isChecked(true);
					}
				}
			}
			var relationship = QuickView.Client.Models.Charts.Indicator.getSubordinateRelationship(this.indicator);
			var relationshipMetadata = (ss.isNullOrUndefined(relationship) ? null : QuickView.Client.UI.Common.Data.DataDescription$IndicatorRelationships.getRelationshipMetadata(relationship.N));
			var relationshipAvailable = ss.isValue(relationship);
			var marketsAvailable = relationshipAvailable && ss.referenceEquals(QuickView.Client.Models.Charts.IndicatorRelationship.nameLower(relationship), 'Market'.toLowerCase());
			this.$titleRelationship.set_isVisible(relationshipAvailable);
			this.$titleRelationship.set_title((ss.isNullOrUndefined(relationshipMetadata) ? null : relationshipMetadata.pluralName.N));
			this.$submenuRelatedIndicators.set_isVisible(relationshipAvailable);
			this.$buttonShowAllRelatedIndicators.set_isVisible(this.enableShowAllRelatedIndicators && relationshipAvailable);
			// Markets only
			this.$groupTopBottomMarkets.setIsVisible(marketsAvailable);
			if (relationshipAvailable) {
				this.$fundTitleIndicators.set_title(relationshipMetadata.pluralName.N);
				if (this.$buttonShowAllRelatedIndicators.get_isVisible()) {
					this.$buttonShowAllRelatedIndicators.set_isEnabled(relationship.indicators.length <= 2147483647);
					if (this.$buttonShowAllRelatedIndicators.get_isEnabled()) {
						this.$buttonShowAllRelatedIndicators.set_title(ss.formatString('Show all {0}', relationshipMetadata.pluralName.NL));
					}
					else {
						this.$buttonShowAllRelatedIndicators.set_title(ss.formatString('Show all {1} (N/A > {0} {2})', 2147483647, relationshipMetadata.pluralName.NL, relationshipMetadata.pluralName.NAL));
					}
				}
				var indicatorList = relationship.indicators;
				for (var k = 0; k < indicatorList.length && k < this.$relatedIndicatorButtonList.length; k++) {
					var indicator = indicatorList[k];
					var button = this.$relatedIndicatorButtonList[k];
					button.set_title(JS.StringExtensions.or(indicator.M, indicator.N));
					button.set_tooltip(ss.replaceAllString(ss.coalesce(indicator.D, 'N/A'), '\n', '<br/>'));
					button.indicator = indicator;
					button.set_isVisible(true);
					button.set_isSelected(ss.isValue(this.selectedRelatedIndicators) && ss.contains(this.selectedRelatedIndicators, indicator));
				}
				// Hide the rest of the buttons
				for (var k1 = indicatorList.length; k1 < this.$relatedIndicatorButtonList.length; k1++) {
					var button1 = this.$relatedIndicatorButtonList[k1];
					button1.set_isVisible(false);
				}
				// Show the number of relationship items
				this.$submenuRelatedIndicators.set_title(ss.formatString('{1} ({0})', indicatorList.length, relationshipMetadata.pluralName.N));
			}
			this.$_menu.set_title(title);
			this.$_menu.set_showConfirmButton(relationshipAvailable);
			this.$_menu.open();
		},
		$groupResolution_CheckChanged: function(sender, e) {
			var resolution = ss.cast(ss.cast(e.sender, JS.UI.Menus.MenuItem).tag, ss.Int32);
			this.$onChangeResolution(new $QuickView_Client_UI_Menus_ChangeResolutionEventArgs(resolution));
		},
		$groupTopBottomMarkets_Command: function(sender, e) {
			this.$onShowTopBottomMarkets(new $QuickView_Client_UI_Menus_ShowTopBottomMarketsEventArgs(ss.cast(e.args.commandArgument, ss.Int32)));
		}
	});
	ss.initClass($QuickView_Client_UI_Menus_DisplayedChartsMenu, $asm, {
	    add_closed: function (value) {
	        this.$1$ClosedField = ss.delegateCombine(this.$1$ClosedField, value);
	    },
	    remove_closed: function (value) {
	        this.$1$ClosedField = ss.delegateRemove(this.$1$ClosedField, value);
	    },
	    $onClosed: function (e) {
	        JS.EventExtensions.fire(this.$1$ClosedField, this, e);
	    },
	    add_changeResolution: function (value) {
	        this.$1$ChangeResolutionField = ss.delegateCombine(this.$1$ChangeResolutionField, value);
	    },
	    remove_changeResolution: function (value) {
	        this.$1$ChangeResolutionField = ss.delegateRemove(this.$1$ChangeResolutionField, value);
	    },
	    $onChangeResolution: function (e) {
	        JS.EventExtensions.fire$2($QuickView_Client_UI_Menus_ChangeResolutionEventArgs).call(null, this.$1$ChangeResolutionField, this, e);
	    },
	    add_openExpandedChart: function (value) {
	        this.$1$OpenExpandedChartField = ss.delegateCombine(this.$1$OpenExpandedChartField, value);
	    },
	    remove_openExpandedChart: function (value) {
	        this.$1$OpenExpandedChartField = ss.delegateRemove(this.$1$OpenExpandedChartField, value);
	    },
	    $onOpenExpandedChart: function (e) {
	        JS.EventExtensions.fire(this.$1$OpenExpandedChartField, this, e);
	    },
	    add_openDisplayedChart: function (value) {
	        this.$1$OpenDisplayedChartField = ss.delegateCombine(this.$1$OpenDisplayedChartField, value);
	    },
	    remove_openDisplayedChart: function (value) {
	        this.$1$OpenDisplayedChartField = ss.delegateRemove(this.$1$OpenDisplayedChartField, value);
	    },
	    $onOpenDisplayedChart: function (e) {
	        JS.EventExtensions.fire(this.$1$OpenDisplayedChartField, this, e);
	    },
	    add_openDrawdownChart: function (value) {
	        this.$1$OpenDrawdownChartField = ss.delegateCombine(this.$1$OpenDrawdownChartField, value);
	    },
	    remove_openDrawdownChart: function (value) {
	        this.$1$OpenDrawdownChartField = ss.delegateRemove(this.$1$OpenDrawdownChartField, value);
	    },
	    $onOpenDrawdownChart: function (e) {
	        JS.EventExtensions.fire(this.$1$OpenDrawdownChartField, this, e);
	    },
	    add_openSlippageChart: function (value) {
	        this.$1$OpenSlippageChartField = ss.delegateCombine(this.$1$OpenSlippageChartField, value);
	    },
	    remove_openSlippageChart: function (value) {
	        this.$1$OpenSlippageChartField = ss.delegateRemove(this.$1$OpenSlippageChartField, value);
	    },
	    $onOpenSlippageChart: function (e) {
	        JS.EventExtensions.fire(this.$1$OpenSlippageChartField, this, e);
	    },
	    add_showTopBottomMarkets: function (value) {
	        this.$1$ShowTopBottomMarketsField = ss.delegateCombine(this.$1$ShowTopBottomMarketsField, value);
	    },
	    remove_showTopBottomMarkets: function (value) {
	        this.$1$ShowTopBottomMarketsField = ss.delegateRemove(this.$1$ShowTopBottomMarketsField, value);
	    },
	    $onShowTopBottomMarkets: function (e) {
	        JS.EventExtensions.fire$2($QuickView_Client_UI_Menus_ShowTopBottomMarketsEventArgs).call(null, this.$1$ShowTopBottomMarketsField, this, e);
	    },
	    add_showRelatedIndicators: function (value) {
	        this.$1$ShowRelatedIndicatorsField = ss.delegateCombine(this.$1$ShowRelatedIndicatorsField, value);
	    },
	    remove_showRelatedIndicators: function (value) {
	        this.$1$ShowRelatedIndicatorsField = ss.delegateRemove(this.$1$ShowRelatedIndicatorsField, value);
	    },
	    $onShowRelatedIndicators: function (e) {
	        JS.EventExtensions.fire$2($QuickView_Client_UI_Menus_IndicatorsEventArgs).call(null, this.$1$ShowRelatedIndicatorsField, this, e);
	    },
	    add_showAllRelatedIndicators: function (value) {
	        this.$1$ShowAllRelatedIndicatorsField = ss.delegateCombine(this.$1$ShowAllRelatedIndicatorsField, value);
	    },
	    remove_showAllRelatedIndicators: function (value) {
	        this.$1$ShowAllRelatedIndicatorsField = ss.delegateRemove(this.$1$ShowAllRelatedIndicatorsField, value);
	    },
	    $onShowAllRelatedIndicators: function (e) {
	        JS.EventExtensions.fire(this.$1$ShowAllRelatedIndicatorsField, this, e);
	    },
	    $menu_Closed: function (sender, e) {
	        this.$onClosed(ss.EventArgs.Empty);
	    },
	    $menu_Confirmed: function (sender, e) {
	        var indicatorList = Enumerable.from(this.$relatedIndicatorButtonList).where(function (x) {
	            return x.get_isVisible() && x.get_isSelected();
	        }).select(function (x1) {
	            return x1.indicator;
	        }).toArray();
	        if (indicatorList.length > 0) {
	            this.$onShowRelatedIndicators(new $QuickView_Client_UI_Menus_IndicatorsEventArgs(indicatorList));
	        }
	    },
	    open: function () {
	        // Set title
	        if (ss.isNullOrUndefined(this.indicator)) {
	            throw new ss.InvalidOperationException('An indicator must be specified.');
	        }
	        if (ss.isNullOrUndefined(this.period)) {
	            throw new ss.InvalidOperationException('A period must be specified.');
	        }
	        var title = ss.formatString('{0} - {1} [{2}]', this.indicator.menuInfo.A, this.indicator.N, this.period.N);
	        this.$buttonExpandedChart.set_isVisible(this.chartMode === 1);
	        this.$groupDisplayedCharts.setIsVisible(false);
	        this.$groupCharts.setIsVisible(false);
	        if (this.chartMode === 2) {
	            var group;
	            if (this.period.T === 2) {
	                group = this.$groupDisplayedCharts;
	                this.$groupDisplayedCharts.setIsVisible(true);
	            }
	            else {
	                group = this.$groupCharts;
	                this.$groupCharts.setIsVisible(true);
	            }
	            group.setIsChecked(false);
	            if (ss.isValue(this.resolution)) {
	                var menuItem = Enumerable.from(group.items).ofType(JS.UI.Menus.CheckMenuItem).where(ss.mkdel(this, function (x) {
	                    return ss.cast(x.tag, ss.Int32) === ss.unbox(this.resolution);
	                })).firstOrDefault(null, ss.getDefaultValue(JS.UI.Menus.CheckMenuItem));
	                if (ss.isValue(menuItem)) {
	                    menuItem.set_isChecked(true);
	                }
	            }
	        }
	        this.$_menu.set_title(title);
	        this.$_menu.open();
	    },
	    $groupCharts_CheckChanged: function (sender, e) {
	        var resolution = ss.cast(ss.cast(e.sender, JS.UI.Menus.MenuItem).tag, ss.Int32);
	        this.$onChangeResolution(new $QuickView_Client_UI_Menus_ChangeResolutionEventArgs(resolution));
	    },
	    $updateState: function (state) {
	        //console.log('state', state);
	    },
	    $groupTopBottomMarkets_Command: function (sender, e) {
	        this.$onShowTopBottomMarkets(new $QuickView_Client_UI_Menus_ShowTopBottomMarketsEventArgs(ss.cast(e.args.commandArgument, ss.Int32)));
	    }
	});
	ss.initClass($QuickView_Client_UI_Menus_IndicatorMenuItem, $asm, {
		get_isSelected: function() {
			return this.isSelectedProperty.get_value();
		},
		set_isSelected: function(value) {
			this.isSelectedProperty.set_value(value);
		},
		add_selectedChanged: function(value) {
			this.$3$SelectedChangedField = ss.delegateCombine(this.$3$SelectedChangedField, value);
		},
		remove_selectedChanged: function(value) {
			this.$3$SelectedChangedField = ss.delegateRemove(this.$3$SelectedChangedField, value);
		},
		onSelectedChanged: function(e) {
			var temp = this.$3$SelectedChangedField;
			if (!ss.staticEquals(temp, null)) {
				temp(this, e);
			}
		},
		buildCore: function() {
			JS.UI.Menus.MenuItem.prototype.buildCore.call(this);
			this.control = $("<a href='#' class='label'></a>").appendTo(this.element);
			this.$labelTitle = $('<span></span>').appendTo(this.control).text(ss.coalesce(this.get_title(), ''));
			// Property change event handlers
			this.titleProperty.add_changed(ss.mkdel(this, function(sender, args) {
				this.$updateTitle();
			}));
			this.isSelectedProperty.add_changed(ss.mkdel(this, function(sender1, args1) {
				this.$updateIsSelected();
			}));
			this.controlSelect = $("<var class='select'></var>").prependTo(this.element);
			this.controlSelect.click(ss.mkdel(this, this.$controlSelect_Click));
		},
		$updateTitle: function() {
			this.$labelTitle.text(ss.coalesce(this.get_title(), ''));
		},
		$updateIsSelected: function() {
			this.controlSelect.toggleClass('selected', this.get_isSelected());
		},
		$controlSelect_Click: function(e) {
			// Do not propagate event to the main button
			e.preventDefault();
			e.stopPropagation();
			this.set_isSelected(false === this.get_isSelected());
			this.onSelectedChanged(ss.EventArgs.Empty);
		}
	}, JS.UI.Menus.MenuItem);
	ss.initClass($QuickView_Client_UI_Menus_IndicatorsEventArgs, $asm, {}, ss.EventArgs);
	ss.initClass($QuickView_Client_UI_Menus_MainMenu, $asm, {
		add_addRows: function(value) {
			this.$1$AddRowsField = ss.delegateCombine(this.$1$AddRowsField, value);
		},
		remove_addRows: function(value) {
			this.$1$AddRowsField = ss.delegateRemove(this.$1$AddRowsField, value);
		},
		$onAddRows: function(e) {
			var temp = this.$1$AddRowsField;
			if (!ss.staticEquals(temp, null)) {
				temp(this, e);
			}
		},
		add_removeRows: function(value) {
			this.$1$RemoveRowsField = ss.delegateCombine(this.$1$RemoveRowsField, value);
		},
		remove_removeRows: function(value) {
			this.$1$RemoveRowsField = ss.delegateRemove(this.$1$RemoveRowsField, value);
		},
		$onRemoveRows: function(e) {
			var temp = this.$1$RemoveRowsField;
			if (!ss.staticEquals(temp, null)) {
				temp(this, e);
			}
		},
		add_favoritesChanged: function(value) {
			this.$1$FavoritesChangedField = ss.delegateCombine(this.$1$FavoritesChangedField, value);
		},
		remove_favoritesChanged: function(value) {
			this.$1$FavoritesChangedField = ss.delegateRemove(this.$1$FavoritesChangedField, value);
		},
		$onFavoritesChanged: function(e) {
			var temp = this.$1$FavoritesChangedField;
			if (!ss.staticEquals(temp, null)) {
				temp(this, e);
			}
		},
		add_goToTop: function(value) {
			this.$1$GoToTopField = ss.delegateCombine(this.$1$GoToTopField, value);
		},
		remove_goToTop: function(value) {
			this.$1$GoToTopField = ss.delegateRemove(this.$1$GoToTopField, value);
		},
		$onGoToTop: function(e) {
			var temp = this.$1$GoToTopField;
			if (!ss.staticEquals(temp, null)) {
				temp(this, e);
			}
		},
		add_goToBottom: function(value) {
			this.$1$GoToBottomField = ss.delegateCombine(this.$1$GoToBottomField, value);
		},
		remove_goToBottom: function(value) {
			this.$1$GoToBottomField = ss.delegateRemove(this.$1$GoToBottomField, value);
		},
		$onGoToBottom: function(e) {
			var temp = this.$1$GoToBottomField;
			if (!ss.staticEquals(temp, null)) {
				temp(this, e);
			}
		},
		add_download: function(value) {
			this.$1$DownloadField = ss.delegateCombine(this.$1$DownloadField, value);
		},
		remove_download: function(value) {
			this.$1$DownloadField = ss.delegateRemove(this.$1$DownloadField, value);
		},
		$onDownload: function(e) {
			var temp = this.$1$DownloadField;
			if (!ss.staticEquals(temp, null)) {
				temp(this, e);
			}
		},
		add_openPiwik: function(value) {
			this.$1$OpenPiwikField = ss.delegateCombine(this.$1$OpenPiwikField, value);
		},
		remove_openPiwik: function(value) {
			this.$1$OpenPiwikField = ss.delegateRemove(this.$1$OpenPiwikField, value);
		},
		$onOpenPiwik: function(e) {
			var temp = this.$1$OpenPiwikField;
			if (!ss.staticEquals(temp, null)) {
				temp(this, e);
			}
		},
		add_openShareSeries: function(value) {
			this.$1$OpenShareSeriesField = ss.delegateCombine(this.$1$OpenShareSeriesField, value);
		},
		remove_openShareSeries: function(value) {
			this.$1$OpenShareSeriesField = ss.delegateRemove(this.$1$OpenShareSeriesField, value);
		},
		$onOpenShareSeries: function(e) {
			var temp = this.$1$OpenShareSeriesField;
			if (!ss.staticEquals(temp, null)) {
				temp(this, e);
			}
		},
		add_openHistory: function(value) {
			this.$1$OpenHistoryField = ss.delegateCombine(this.$1$OpenHistoryField, value);
		},
		remove_openHistory: function(value) {
			this.$1$OpenHistoryField = ss.delegateRemove(this.$1$OpenHistoryField, value);
		},
		$onOpenHistory: function(e) {
			var temp = this.$1$OpenHistoryField;
			if (!ss.staticEquals(temp, null)) {
				temp(this, e);
			}
		},
		add_openQuickView3: function(value) {
			this.$1$OpenQuickView3Field = ss.delegateCombine(this.$1$OpenQuickView3Field, value);
		},
		remove_openQuickView3: function(value) {
			this.$1$OpenQuickView3Field = ss.delegateRemove(this.$1$OpenQuickView3Field, value);
		},
		$onOpenQuickView3: function(e) {
			var temp = this.$1$OpenQuickView3Field;
			if (!ss.staticEquals(temp, null)) {
				temp(this, e);
			}
		},
		add_changePassword: function(value) {
			this.$1$ChangePasswordField = ss.delegateCombine(this.$1$ChangePasswordField, value);
		},
		remove_changePassword: function(value) {
			this.$1$ChangePasswordField = ss.delegateRemove(this.$1$ChangePasswordField, value);
		},
		$onChangePassword: function(e) {
			var temp = this.$1$ChangePasswordField;
			if (!ss.staticEquals(temp, null)) {
				temp(this, e);
			}
		},
		add_logOut: function(value) {
			this.$1$LogOutField = ss.delegateCombine(this.$1$LogOutField, value);
		},
		remove_logOut: function(value) {
			this.$1$LogOutField = ss.delegateRemove(this.$1$LogOutField, value);
		},
		$onLogOut: function(e) {
			var temp = this.$1$LogOutField;
			if (!ss.staticEquals(temp, null)) {
				temp(this, e);
			}
		},
		add_resetView: function(value) {
			this.$1$ResetViewField = ss.delegateCombine(this.$1$ResetViewField, value);
		},
		remove_resetView: function(value) {
			this.$1$ResetViewField = ss.delegateRemove(this.$1$ResetViewField, value);
		},
		$onResetView: function(e) {
			var temp = this.$1$ResetViewField;
			if (!ss.staticEquals(temp, null)) {
				temp(this, e);
			}
		},
		get_isNewVersion: function() {
			return this.$_isNewVersion;
		},
		set_isNewVersion: function(value) {
			if (this.$_isNewVersion !== value) {
				this.$_isNewVersion = value;
			}
		},
		add_loadLatestVersion: function(value) {
			this.$1$LoadLatestVersionField = ss.delegateCombine(this.$1$LoadLatestVersionField, value);
		},
		remove_loadLatestVersion: function(value) {
			this.$1$LoadLatestVersionField = ss.delegateRemove(this.$1$LoadLatestVersionField, value);
		},
		$onLoadLatestVersion: function(e) {
			var temp = this.$1$LoadLatestVersionField;
			if (!ss.staticEquals(temp, null)) {
				temp(this, e);
			}
		},
		$siteMenuItem_FavoriteCountChanged: function(sender, e) {
			this.$updateFavoriteCount();
		},
		$updateFavoriteCount: function() {
			var visibleFavoriteCount = 0;
			var nonVisibleFavoriteCount = 0;
			var $t1 = ss.getEnumerator(this.$_fundItemList);
			try {
				while ($t1.moveNext()) {
					var item = $t1.current();
					visibleFavoriteCount += item.get_$visibleFavoriteCount();
					nonVisibleFavoriteCount += item.get_$nonVisibleFavoriteCount();
				}
			}
			finally {
				$t1.dispose();
			}
			this.$_item_Favorites.$updateState(visibleFavoriteCount, nonVisibleFavoriteCount);
		},
		$menu_Confirmed: function(sender, e) {
			// Mini-chart options
			var sortMode;
			if (this.$_itemMini_OrderAlphabeticallyGrossFirst.get_isChecked()) {
				sortMode = 1;
			}
			else if (this.$_itemMini_OrderAlphabeticallyNetFirst.get_isChecked()) {
				sortMode = 2;
			}
			else {
				sortMode = 0;
			}
			this.$_gridOptions.set_sortMode(sortMode);
			this.$_gridOptions.set_syncTopRow(this.$_itemMini_SyncTopRow.get_isChecked());
			var displayOptions = this.$_gridOptions.get_displayOptions();
			if (QuickView.Client.Common.AppEnvironment.get_isDesktopDevice()) {
				displayOptions = JS.EnumExtensions.set(QuickView.Client.UI.Common.Grid.GridDisplayOptions).call(null, displayOptions, 8, this.$_itemMini_ShowTooltips.get_isChecked());
			}
			this.$_gridOptions.set_displayOptions(displayOptions);
			// BUG Adding or removing rows from the menu causes weird bugs on iOS 8 Safari when
			// "-webkit-overflow-scrolling" is set to "touch" on the ".app" element which is used to scroll rows.
			// Disabling the CSS attr prior to making changes to the rows avoids this issue.
			var fastScrolling = QuickView.Client.UI.Common.UIServices.disableFastScrolling();
			window.setTimeout(ss.mkdel(this, function() {
				// Funds and favorites
				this.$addAndRemoveFundsAndFavorites((this.$_item_Favorites.$addFavorites ? 1 : 0) | (this.$_item_Favorites.$removeFavorites ? 2 : 0));
				window.setTimeout(function() {
					// Revert to default behavior
					fastScrolling.dispose();
				}, 500);
			}), 500);
		},
		$addAndRemoveFundsAndFavorites: function(mode) {
			// The list of selected funds
			var addFundDict = new (ss.makeGenericType(ss.Dictionary$2, [QuickView.Client.Models.Charts.Indicator, Object]))();
			var removeFundDict = new (ss.makeGenericType(ss.Dictionary$2, [QuickView.Client.Models.Charts.Indicator, Object]))();
			// The list of favorites
			var addFavoriteDict = new (ss.makeGenericType(ss.Dictionary$2, [QuickView.Client.Models.Charts.Indicator, Object]))();
			var removeFavoriteDict = new (ss.makeGenericType(ss.Dictionary$2, [QuickView.Client.Models.Charts.Indicator, Object]))();
			var $t1 = ss.getEnumerator(this.$_fundItemList);
			try {
				while ($t1.moveNext()) {
					var item = $t1.current();
					item.$getState(addFundDict, removeFundDict, false, false, (mode & 1) !== 0, (mode & 2) !== 0, (mode & 4) !== 0, addFavoriteDict, removeFavoriteDict);
				}
			}
			finally {
				$t1.dispose();
			}
			// Performance: Funds should be removed first to reduce the number of rows before new funds are added
			if (removeFundDict.get_count() > 0) {
				this.$onRemoveRows(new $QuickView_Client_UI_Menus_IndicatorsEventArgs(Enumerable.from(removeFundDict.get_keys()).toArray()));
			}
			if (addFundDict.get_count() > 0) {
				this.$onAddRows(new $QuickView_Client_UI_Menus_IndicatorsEventArgs(Enumerable.from(addFundDict.get_keys()).toArray()));
			}
			if (addFavoriteDict.get_count() > 0 || removeFavoriteDict.get_count() > 0) {
				var list = ss.arrayFromEnumerable(this.favorites);
				var $t2 = ss.getEnumerator(removeFavoriteDict.get_keys());
				try {
					while ($t2.moveNext()) {
						var item1 = $t2.current();
						ss.remove(list, item1);
					}
				}
				finally {
					$t2.dispose();
				}
				ss.arrayAddRange(list, addFavoriteDict.get_keys());
				this.favorites = list;
				// Fire an event
				this.$onFavoritesChanged(ss.EventArgs.Empty);
			}
		},
		open: function() {
			// Funds
			{
				var visibleFundDict = Enumerable.from(this.visibleRows || []).toDictionary(function(x) {
					return x;
				}, function(x1) {
					return JS.DBNull.get_value();
				}, QuickView.Client.Models.Charts.Indicator, Object);
				var favoriteDict = Enumerable.from(this.favorites || []).toDictionary(function(x2) {
					return x2;
				}, function(x3) {
					return JS.DBNull.get_value();
				}, QuickView.Client.Models.Charts.Indicator, Object);
				// The update process usually takes less than 100ms so there is no point
				// executing is async; probably the size of the menu is the primary reason
				// for the delay on iPhone
				var updateState = $QuickView_Client_UI_Menus_$FundMenuItemUpdateState.$ctor(visibleFundDict, favoriteDict);
				var $t1 = ss.getEnumerator(this.$_fundItemList);
				try {
					while ($t1.moveNext()) {
						var item = $t1.current();
						item.$updateState(updateState);
					}
				}
				finally {
					$t1.dispose();
				}
				// Update the number of favorites shown in the top-level item
				this.$updateFavoriteCount();
			}
			// Mini-chart view options
			if (QuickView.Client.Common.AppEnvironment.get_isMobileDevice()) {
				this.$_itemMini_MoveToTop.set_isEnabled(false === this.isFirstRowVisible);
				this.$_itemMini_MoveToBottom.set_isEnabled(false === this.isLastRowVisible);
			}
			this.$_itemMini_OrderAlphabeticallyGrossFirst.set_isChecked(this.$_gridOptions.get_sortMode() === 1);
			this.$_itemMini_OrderAlphabeticallyGrossFirst.add_checkChanged(ss.mkdel(this, function(sender, e) {
				if (this.$_itemMini_OrderAlphabeticallyGrossFirst.get_isChecked()) {
					this.$_itemMini_OrderAlphabeticallyNetFirst.set_isChecked(false);
				}
			}));
			this.$_itemMini_OrderAlphabeticallyNetFirst.set_isChecked(this.$_gridOptions.get_sortMode() === 2);
			this.$_itemMini_OrderAlphabeticallyNetFirst.add_checkChanged(ss.mkdel(this, function(sender1, e1) {
				if (this.$_itemMini_OrderAlphabeticallyNetFirst.get_isChecked()) {
					this.$_itemMini_OrderAlphabeticallyGrossFirst.set_isChecked(false);
				}
			}));
			this.$_itemMini_SyncTopRow.set_isChecked(this.$_gridOptions.get_syncTopRow());
			if (ss.isValue(this.$_itemMini_ShowTooltips)) {
				this.$_itemMini_ShowTooltips.set_isChecked((this.$_gridOptions.get_displayOptions() & 8) !== 0);
			}
			// History
			if (this.get_isNewVersion()) {
				this.$_itemHistory.set_iconCssClass('history-new');
				this.$_itemHistory.set_cssClass('history-new');
			}
			else {
				this.$_itemHistory.set_iconCssClass('history');
				this.$_itemHistory.set_cssClass('');
			}
			var versionText = ss.formatString('Updated: {0} {1}', QuickView.Client.Common.AppEnvironment.version.releaseTime, $QuickView_Client_UI_Menus_MainMenu.$getVersionAgeText(QuickView.Client.Common.AppEnvironment.version.releaseTime));
			this.$_itemHistory.set_tooltip(versionText);
			// Latest version
			if (ss.isValue(this.latestVersionNumber)) {
				this.$_itemNewVersionAvailable.set_title(ss.formatString('New Version {0}', this.latestVersionNumber));
				this.$_itemNewVersionAvailable.set_isVisible(true);
			}
			else {
				this.$_itemNewVersionAvailable.set_isVisible(false);
			}
			this.$_menu.open();
		}
	});
	ss.initClass($QuickView_Client_UI_Menus_MoveRowEventArgs, $asm, {}, ss.EventArgs);
	ss.initEnum($QuickView_Client_UI_Menus_MoveRowPosition, $asm, { none: 0, top: 1, bottom: 2, up: 3, down: 4 });
	ss.initClass($QuickView_Client_UI_Menus_RowHeaderMenu, $asm, {
		get_indicatorOptions: function() {
			return this.$1$IndicatorOptionsField;
		},
		set_indicatorOptions: function(value) {
			this.$1$IndicatorOptionsField = value;
		},
		get_visibleDataFundsInGroupCount: function() {
			return this.$_visibleDataFundsInGroupCount;
		},
		set_visibleDataFundsInGroupCount: function(value) {
			JS.ArgumentHelper.positiveOrDefault(value, 'value');
			this.$_visibleDataFundsInGroupCount = value;
		},
		get_visibleDataFundsInSiteCount: function() {
			return this.$_visibleDataFundsInSiteCount;
		},
		set_visibleDataFundsInSiteCount: function(value) {
			JS.ArgumentHelper.positiveOrDefault(value, 'value');
			this.$_visibleDataFundsInSiteCount = value;
		},
		add_isFavoriteChanged: function(value) {
			this.$1$IsFavoriteChangedField = ss.delegateCombine(this.$1$IsFavoriteChangedField, value);
		},
		remove_isFavoriteChanged: function(value) {
			this.$1$IsFavoriteChangedField = ss.delegateRemove(this.$1$IsFavoriteChangedField, value);
		},
		$onIsFavoriteChanged: function(e) {
			var temp = this.$1$IsFavoriteChangedField;
			if (!ss.staticEquals(temp, null)) {
				temp(this, e);
			}
		},
		add_goToSilverlight: function(value) {
			this.$1$GoToSilverlightField = ss.delegateCombine(this.$1$GoToSilverlightField, value);
		},
		remove_goToSilverlight: function(value) {
			this.$1$GoToSilverlightField = ss.delegateRemove(this.$1$GoToSilverlightField, value);
		},
		$onGoToSilverlight: function(e) {
			var temp = this.$1$GoToSilverlightField;
			if (!ss.staticEquals(temp, null)) {
				temp(this, e);
			}
		},
		add_moveRow: function(value) {
			this.$1$MoveRowField = ss.delegateCombine(this.$1$MoveRowField, value);
		},
		remove_moveRow: function(value) {
			this.$1$MoveRowField = ss.delegateRemove(this.$1$MoveRowField, value);
		},
		$onMoveRow: function(e) {
			var temp = this.$1$MoveRowField;
			if (!ss.staticEquals(temp, null)) {
				temp(this, e);
			}
		},
		add_removeRow: function(value) {
			this.$1$RemoveRowField = ss.delegateCombine(this.$1$RemoveRowField, value);
		},
		remove_removeRow: function(value) {
			this.$1$RemoveRowField = ss.delegateRemove(this.$1$RemoveRowField, value);
		},
		$onRemoveRow: function(e) {
			var temp = this.$1$RemoveRowField;
			if (!ss.staticEquals(temp, null)) {
				temp(this, e);
			}
		},
		add_removeFundGroup: function(value) {
			this.$1$RemoveFundGroupField = ss.delegateCombine(this.$1$RemoveFundGroupField, value);
		},
		remove_removeFundGroup: function(value) {
			this.$1$RemoveFundGroupField = ss.delegateRemove(this.$1$RemoveFundGroupField, value);
		},
		$onRemoveFundGroup: function(e) {
			var temp = this.$1$RemoveFundGroupField;
			if (!ss.staticEquals(temp, null)) {
				temp(this, e);
			}
		},
		add_removeFundSite: function(value) {
			this.$1$RemoveFundSiteField = ss.delegateCombine(this.$1$RemoveFundSiteField, value);
		},
		remove_removeFundSite: function(value) {
			this.$1$RemoveFundSiteField = ss.delegateRemove(this.$1$RemoveFundSiteField, value);
		},
		$onRemoveFundSite: function(e) {
			var temp = this.$1$RemoveFundSiteField;
			if (!ss.staticEquals(temp, null)) {
				temp(this, e);
			}
		},
		$setIsFavorite: function(isFavorite) {
			if (isFavorite !== this.isFavorite) {
				this.isFavorite = isFavorite;
				this.$onIsFavoriteChanged(ss.EventArgs.Empty);
			}
		},
		$move_Command: function(sender, e) {
			this.$onMoveRow(new $QuickView_Client_UI_Menus_MoveRowEventArgs(ss.cast(e.args.commandArgument, ss.Int32)));
		},
		$menu_Confirmed: function(sender, e) {
			var addIndicatorDict = new (ss.makeGenericType(ss.Dictionary$2, [QuickView.Client.Models.Charts.Indicator, Object]))();
			var removeIndicatorDict = new (ss.makeGenericType(ss.Dictionary$2, [QuickView.Client.Models.Charts.Indicator, Object]))();
			this.$menuItemBenchmarks.$getState(addIndicatorDict, removeIndicatorDict, false, false, false, false, false, null, null);
			var oldShowBenchmarks = this.get_indicatorOptions().get_benchmarks().showBenchmarks;
			var newShowBenchmarks = this.$checkBoxShowBenchmarks.get_isChecked();
			var indicatorsChanged = addIndicatorDict.get_count() > 0 || removeIndicatorDict.get_count() > 0;
			if (oldShowBenchmarks !== newShowBenchmarks || indicatorsChanged) {
				var newIndicatorIDList;
				if (indicatorsChanged) {
					var indicatorList = [];
					if (ss.isValue(this.get_indicatorOptions().get_benchmarks().indicatorIDs)) {
						var $t1 = this.get_indicatorOptions().get_benchmarks().indicatorIDs;
						for (var $t2 = 0; $t2 < $t1.length; $t2++) {
							var indicatorID = $t1[$t2];
							var indicator = QuickView.Client.Models.Charts.RuntimeChartMetadata.getIndicator(QuickView.Client.Common.AppContext.metadata, indicatorID);
							if (ss.isNullOrUndefined(indicator)) {
								// The indicator has been removed
								continue;
							}
							// The indicators contained in the "addIndicatorDict" will be added later
							if (false === addIndicatorDict.containsKey(indicator) && false === removeIndicatorDict.containsKey(indicator)) {
								indicatorList.push(indicator);
							}
						}
					}
					ss.arrayAddRange(indicatorList, addIndicatorDict.get_keys());
					// The indicators must be sorted when they are used since it is possible that an indicator is renamed
					// and thus the order change.
					//indicatorList.Sort((a, b) => a.Name.CompareTo(b.Name));
					newIndicatorIDList = Enumerable.from(indicatorList).select(function(x) {
						return x.I;
					}).toArray();
				}
				else {
					newIndicatorIDList = (ss.isNullOrUndefined(this.get_indicatorOptions().get_benchmarks()) ? null : this.get_indicatorOptions().get_benchmarks().indicatorIDs);
				}
				if (ss.isValue(newIndicatorIDList) && newIndicatorIDList.length > 10) {
					// No more than 10 benchmarks are permitted
					JS.UI.Dialogs.MessageDialog.open(1, 'Benchmarks', ss.formatString('Please select up to 10 benchmarks. At present {0} are selected.', newIndicatorIDList.length));
					e.cancel = true;
					return;
				}
				// Set both options at the same time to avoid various race conditions
				// when both options are updated.
				this.get_indicatorOptions().set_benchmarks(new QuickView.Client.UI.Common.Grid.GridIndicatorBenchmarkOptions.$ctor2(newShowBenchmarks, newIndicatorIDList));
			}
		},
		open: function() {
			// Validation
			if (ss.isNullOrUndefined(this.get_indicatorOptions())) {
				throw new ss.InvalidOperationException("The 'IndicatorOptions' property must be set before the menu is open.");
			}
			var title = '';
			if (ss.isValue(this.indicator)) {
				title = ss.formatString('{0} - {1}', this.indicator.menuInfo.A, this.indicator.N);
			}
			this.$buttonAddToFavorites.set_isVisible(false === this.isFavorite);
			this.$buttonRemoveFromFavorites.set_isVisible(this.isFavorite);
			if (ss.isValue(this.$buttonSilverlight)) {
				this.$buttonSilverlight.set_isVisible(this.enableSilverlight);
			}
			if (ss.isNullOrUndefined(this.indicator) || ss.isNullOrEmptyString(this.indicator.D)) {
				this.$htmlFundInfo.set_isVisible(false);
			}
			else {
				this.$htmlFundInfo.set_isVisible(true);
				this.$htmlFundInfo.set_html(ss.formatString("<div class='row-info'><div class='title'>Info</div>{0}</div>", this.indicator.D));
			}
			var dataRecency = this.dataRecency;
			if (ss.isNullOrUndefined(dataRecency)) {
				this.$htmlUpdateInfo.set_isVisible(false);
			}
			else {
				var now = JS.DateTimeExt.get_utcNow();
				var lastDataPointTimeText;
				if (JS.DateTimeExt.op_Equality$1(dataRecency.lastDataPointTime, null)) {
					lastDataPointTimeText = 'N/A';
				}
				else if (dataRecency.timeSeries.M === 1) {
					// Display local time with hour
					lastDataPointTimeText = ss.unbox(dataRecency.lastDataPointTime).toLocalTime().format('MMM d yyyy ddd hh:mm') + ' (' + JS.TimeZoneInfo.get_local().name + ')';
				}
				else {
					// Display UTC time - date only
					lastDataPointTimeText = ss.unbox(dataRecency.lastDataPointTime).format('MMM d yyyy ddd') + ' (UTC)';
				}
				var tooltipText = ss.formatString('Lst point loaded: {0}\nUpdated locally: {2} ago\nUpdated on server: {1} ago', lastDataPointTimeText, QuickView.Client.UI.Common.Format$Time.age$1(JS.DateTimeExt.op_Subtraction(now, dataRecency.timeDataUpdated)), QuickView.Client.UI.Common.Format$Time.age$1(JS.DateTimeExt.op_Subtraction(now, dataRecency.timeUpdated)));
				this.$htmlUpdateInfo.set_isVisible(true);
				this.$htmlUpdateInfo.set_html(ss.formatString("<div class='row-info'><div class='title'>Latest data</div>{0}</div>", ss.replaceAllString(tooltipText, '\n', '<br/>')));
			}
			if (QuickView.Client.Models.Charts.Submenu.isRoot(this.indicator.menuInfo.I.parent)) {
				// Display just the name of the root and fund
				this.$buttonRemoveFund.set_title(ss.formatString('Remove {0}-{1} (1)', this.indicator.menuInfo.I.root.N, this.indicator.N));
			}
			else {
				// Include the name of the group as well
				this.$buttonRemoveFund.set_title(ss.formatString('Remove {0}-{1}-{2} (1)', this.indicator.menuInfo.I.root.N, this.indicator.menuInfo.I.parent.N, this.indicator.N));
			}
			if (this.get_visibleDataFundsInGroupCount() > 0 && false === QuickView.Client.Models.Charts.Submenu.isRoot(this.indicator.menuInfo.I.parent)) {
				this.$buttonRemoveFundGroup.set_isVisible(true);
				this.$buttonRemoveFundGroup.set_title(ss.formatString('Remove {0}-{1} ({2})', this.indicator.menuInfo.I.root.N, this.indicator.menuInfo.I.parent.N, this.get_visibleDataFundsInGroupCount()));
			}
			else {
				this.$buttonRemoveFundGroup.set_isVisible(false);
			}
			if (this.get_visibleDataFundsInSiteCount() > 0) {
				this.$buttonRemoveFundSite.set_isVisible(true);
				this.$buttonRemoveFundSite.set_title(ss.formatString('Remove {0} ({1})', this.indicator.menuInfo.I.root.N, this.get_visibleDataFundsInSiteCount()));
			}
			else {
				this.$buttonRemoveFundSite.set_isVisible(false);
			}
			if (QuickView.Client.Models.Charts.Indicator.supportsBenchmark(this.indicator)) {
				var selectedIndicatorDict;
				if (ss.isValue(this.get_indicatorOptions().get_benchmarks().indicatorIDs)) {
					selectedIndicatorDict = Enumerable.from(this.get_indicatorOptions().get_benchmarks().indicatorIDs).select(function(x) {
						return QuickView.Client.Models.Charts.RuntimeChartMetadata.getIndicator(QuickView.Client.Common.AppContext.metadata, x);
					}).where(function(x1) {
						return ss.isValue(x1);
					}).toDictionary(function(x2) {
						return x2;
					}, function(x3) {
						return JS.DBNull.get_value();
					}, QuickView.Client.Models.Charts.Indicator, Object);
				}
				else {
					selectedIndicatorDict = new (ss.makeGenericType(ss.Dictionary$2, [QuickView.Client.Models.Charts.Indicator, Object]))();
				}
				// The update process usually takes less than 100ms so there is no point
				// executing is async; probably the size of the menu is the primary reason
				// for the delay on iPhone
				var updateState = $QuickView_Client_UI_Menus_$FundMenuItemUpdateState.$ctor(selectedIndicatorDict, new (ss.makeGenericType(ss.Dictionary$2, [QuickView.Client.Models.Charts.Indicator, Object]))());
				this.$menuItemBenchmarks.$updateState(updateState);
				this.$checkBoxShowBenchmarks.set_isChecked(this.get_indicatorOptions().get_benchmarks().showBenchmarks);
				this.$groupBenchmarks.setIsVisible(true);
			}
			else {
				this.$groupBenchmarks.setIsVisible(false);
			}
			this.$_menu.set_title(title);
			this.$_menu.open();
		},
		destroy: function() {
			this.$_menu.destroy();
		}
	});
	ss.initClass($QuickView_Client_UI_Menus_ShowTopBottomMarketsEventArgs, $asm, {
		get_mode: function() {
			return this.$2$ModeField;
		},
		set_mode: function(value) {
			this.$2$ModeField = value;
		}
	}, ss.EventArgs);
	ss.setMetadata($QuickView_$Client_UI_Menus_MainMenu$AddAndRemoveFundsAndFavoritesMode, { enumFlags: true });
	(function() {
		$QuickView_Client_UI_Menus_MainMenu.$log = JL('Menus.Main');
	})();
	(function() {
		$QuickView_Client_UI_Menus_$FundGroupMenuItem.$log = JL('Menus.FundGroupMenuItem');
	})();
	(function() {
	    $QuickView_Client_UI_Menus_DataCellMenu.$log = JL('Menus.DataCell');
	    $QuickView_Client_UI_Menus_DisplayedChartsMenu.$log = JL('Menus.DisplayedCharts');
	})();
})();
