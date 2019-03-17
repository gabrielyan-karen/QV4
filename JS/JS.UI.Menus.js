(function() {
	'use strict';
	var $asm = {};
	global.JS = global.JS || {};
	global.JS.UI = global.JS.UI || {};
	global.JS.UI.Menus = global.JS.UI.Menus || {};
	ss.initAssembly($asm, 'JS.UI.Menus');
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Menus.ButtonMenuItem
	var $JS_UI_Menus_ButtonMenuItem = function() {
		this.commandID = null;
		this.commandArgument = null;
		this.$4$CommandField = null;
		this.$4$ClickField = null;
		this.control = null;
		this.closeOnClick = false;
		this.$labelTitle = null;
		$JS_UI_Menus_IconedMenuItem.call(this);
		this.closeOnClick = true;
	};
	$JS_UI_Menus_ButtonMenuItem.__typeName = 'JS.UI.Menus.ButtonMenuItem';
	$JS_UI_Menus_ButtonMenuItem.$ctor1 = function(title) {
		$JS_UI_Menus_ButtonMenuItem.call(this);
		this.set_title(title);
	};
	global.JS.UI.Menus.ButtonMenuItem = $JS_UI_Menus_ButtonMenuItem;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Menus.CheckMenuItem
	var $JS_UI_Menus_CheckMenuItem = function() {
		this.checkedIconCssClassProperty = new (ss.makeGenericType($JS_UI_Menus_MenuProperty$1, [String]))();
		this.uncheckedIconCssClassProperty = new (ss.makeGenericType($JS_UI_Menus_MenuProperty$1, [String]))();
		this.isCheckedProperty = new (ss.makeGenericType($JS_UI_Menus_MenuProperty$1, [Boolean]))();
		this.$3$CheckChangedField = null;
		this.control = null;
		this.closeOnClick = false;
		this.$labelTitle = null;
		$JS_UI_Menus_MenuItem.call(this);
	};
	$JS_UI_Menus_CheckMenuItem.__typeName = 'JS.UI.Menus.CheckMenuItem';
	$JS_UI_Menus_CheckMenuItem.$ctor1 = function(title) {
		this.checkedIconCssClassProperty = new (ss.makeGenericType($JS_UI_Menus_MenuProperty$1, [String]))();
		this.uncheckedIconCssClassProperty = new (ss.makeGenericType($JS_UI_Menus_MenuProperty$1, [String]))();
		this.isCheckedProperty = new (ss.makeGenericType($JS_UI_Menus_MenuProperty$1, [Boolean]))();
		this.$3$CheckChangedField = null;
		this.control = null;
		this.closeOnClick = false;
		this.$labelTitle = null;
		$JS_UI_Menus_MenuItem.call(this);
		this.set_title(title);
	};
	global.JS.UI.Menus.CheckMenuItem = $JS_UI_Menus_CheckMenuItem;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Menus.CommandEventArgs
	var $JS_UI_Menus_CommandEventArgs = function(commandID, commandArgument) {
		this.commandID = null;
		this.commandArgument = null;
		ss.EventArgs.call(this);
		this.commandID = commandID;
		this.commandArgument = commandArgument;
	};
	$JS_UI_Menus_CommandEventArgs.__typeName = 'JS.UI.Menus.CommandEventArgs';
	global.JS.UI.Menus.CommandEventArgs = $JS_UI_Menus_CommandEventArgs;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Menus.HtmlMenuItem
	var $JS_UI_Menus_HtmlMenuItem = function() {
		this.htmlProperty = new (ss.makeGenericType($JS_UI_Menus_MenuProperty$1, [String]))();
		this.$labelHtml = null;
		$JS_UI_Menus_MenuItem.call(this);
	};
	$JS_UI_Menus_HtmlMenuItem.__typeName = 'JS.UI.Menus.HtmlMenuItem';
	$JS_UI_Menus_HtmlMenuItem.$ctor1 = function(html) {
		this.htmlProperty = new (ss.makeGenericType($JS_UI_Menus_MenuProperty$1, [String]))();
		this.$labelHtml = null;
		$JS_UI_Menus_MenuItem.call(this);
		this.set_html(html);
	};
	global.JS.UI.Menus.HtmlMenuItem = $JS_UI_Menus_HtmlMenuItem;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Menus.IconedMenuItem
	var $JS_UI_Menus_IconedMenuItem = function() {
		this.iconCssClassProperty = new (ss.makeGenericType($JS_UI_Menus_MenuProperty$1, [String]))();
		this.isIconVisibleProperty = new (ss.makeGenericType($JS_UI_Menus_MenuProperty$1, [Boolean]).$ctor1)(true);
		$JS_UI_Menus_MenuItem.call(this);
	};
	$JS_UI_Menus_IconedMenuItem.__typeName = 'JS.UI.Menus.IconedMenuItem';
	global.JS.UI.Menus.IconedMenuItem = $JS_UI_Menus_IconedMenuItem;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Menus.Menu
	var $JS_UI_Menus_Menu = function() {
		this.$3$OpeningField = null;
		this.$3$OpenedField = null;
		this.$3$ClosingField = null;
		this.$3$ClosedField = null;
		this.$3$ConfirmedField = null;
		this.titleProperty = new (ss.makeGenericType($JS_UI_Menus_MenuProperty$1, [String]))();
		this.rootElement = null;
		this.elementIDProperty = new (ss.makeGenericType($JS_UI_Menus_MenuProperty$1, [String]))();
		this.cssClassProperty = new (ss.makeGenericType($JS_UI_Menus_MenuProperty$1, [String]))();
		this.disableAnimationProperty = new (ss.makeGenericType($JS_UI_Menus_MenuProperty$1, [Boolean]).$ctor1)(false);
		this.positionProperty = new (ss.makeGenericType($JS_UI_Menus_MenuProperty$1, [Object]))();
		this.sizeProperty = new (ss.makeGenericType($JS_UI_Menus_MenuProperty$1, [Object]))();
		this.fullscreenProperty = new (ss.makeGenericType($JS_UI_Menus_MenuProperty$1, [Boolean]).$ctor1)(true);
		this.showConfirmButtonProperty = new (ss.makeGenericType($JS_UI_Menus_MenuProperty$1, [Boolean]).$ctor1)(false);
		this.$labelTitle = null;
		this.$buttonPrev = null;
		this.$buttonClose = null;
		this.$buttonConfirm = null;
		this.$_menuItemDict = null;
		this.$_menuItemGroupDict = null;
		$JS_UI_Menus_MenuBase.call(this);
	};
	$JS_UI_Menus_Menu.__typeName = 'JS.UI.Menus.Menu';
	$JS_UI_Menus_Menu.$ctor1 = function(title) {
		this.$3$OpeningField = null;
		this.$3$OpenedField = null;
		this.$3$ClosingField = null;
		this.$3$ClosedField = null;
		this.$3$ConfirmedField = null;
		this.titleProperty = new (ss.makeGenericType($JS_UI_Menus_MenuProperty$1, [String]))();
		this.rootElement = null;
		this.elementIDProperty = new (ss.makeGenericType($JS_UI_Menus_MenuProperty$1, [String]))();
		this.cssClassProperty = new (ss.makeGenericType($JS_UI_Menus_MenuProperty$1, [String]))();
		this.disableAnimationProperty = new (ss.makeGenericType($JS_UI_Menus_MenuProperty$1, [Boolean]).$ctor1)(false);
		this.positionProperty = new (ss.makeGenericType($JS_UI_Menus_MenuProperty$1, [Object]))();
		this.sizeProperty = new (ss.makeGenericType($JS_UI_Menus_MenuProperty$1, [Object]))();
		this.fullscreenProperty = new (ss.makeGenericType($JS_UI_Menus_MenuProperty$1, [Boolean]).$ctor1)(true);
		this.showConfirmButtonProperty = new (ss.makeGenericType($JS_UI_Menus_MenuProperty$1, [Boolean]).$ctor1)(false);
		this.$labelTitle = null;
		this.$buttonPrev = null;
		this.$buttonClose = null;
		this.$buttonConfirm = null;
		this.$_menuItemDict = null;
		this.$_menuItemGroupDict = null;
		$JS_UI_Menus_MenuBase.call(this);
		this.set_title(title);
	};
	$JS_UI_Menus_Menu.get_globalOptions = function() {
		return $JS_UI_Menus_Menu.$_globalOptions;
	};
	global.JS.UI.Menus.Menu = $JS_UI_Menus_Menu;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Menus.MenuBase
	var $JS_UI_Menus_MenuBase = function() {
		this.$_options = null;
		this.$_items = null;
		$JS_UI_Menus_MenuObject.call(this);
	};
	$JS_UI_Menus_MenuBase.__typeName = 'JS.UI.Menus.MenuBase';
	global.JS.UI.Menus.MenuBase = $JS_UI_Menus_MenuBase;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Menus.MenuExtensions
	var $JS_UI_Menus_MenuExtensions = function() {
	};
	$JS_UI_Menus_MenuExtensions.__typeName = 'JS.UI.Menus.MenuExtensions';
	$JS_UI_Menus_MenuExtensions.onClick = function(item, handler) {
		JS.ArgumentHelper.notNull(item, 'item');
		item.add_click(handler);
		return item;
	};
	$JS_UI_Menus_MenuExtensions.onCommand = function(item, handler) {
		JS.ArgumentHelper.notNull(item, 'item');
		item.add_command(handler);
		return item;
	};
	$JS_UI_Menus_MenuExtensions.onCheckChanged = function(item, handler) {
		JS.ArgumentHelper.notNull(item, 'item');
		item.add_checkChanged(handler);
		return item;
	};
	$JS_UI_Menus_MenuExtensions.onClick$1 = function(item, handler) {
		JS.ArgumentHelper.notNull(item, 'item');
		item.add_click(handler);
		return item;
	};
	$JS_UI_Menus_MenuExtensions.onCommand$1 = function(item, handler) {
		JS.ArgumentHelper.notNull(item, 'item');
		item.add_command(handler);
		return item;
	};
	$JS_UI_Menus_MenuExtensions.onCheckChanged$1 = function(item, handler) {
		JS.ArgumentHelper.notNull(item, 'item');
		item.add_checkChanged(handler);
		return item;
	};
	$JS_UI_Menus_MenuExtensions.add = function (T) {
		return function(menu, item) {
			JS.ArgumentHelper.notNull(menu, 'menu');
			ss.add(menu.get_items(), item);
			return item;
		};
	};
	global.JS.UI.Menus.MenuExtensions = $JS_UI_Menus_MenuExtensions;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Menus.MenuItem
	var $JS_UI_Menus_MenuItem = function() {
		this.idProperty = new (ss.makeGenericType($JS_UI_Menus_MenuProperty$1, [Object]))();
		this.groupIDProperty = new (ss.makeGenericType($JS_UI_Menus_MenuProperty$1, [Object]))();
		this.tag = null;
		this.titleProperty = new (ss.makeGenericType($JS_UI_Menus_MenuProperty$1, [String]))();
		this.tooltipProperty = new (ss.makeGenericType($JS_UI_Menus_MenuProperty$1, [String]))();
		this.tooltipTitleProperty = new (ss.makeGenericType($JS_UI_Menus_MenuProperty$1, [String]))();
		this.isTooltipThumbVisibleProperty = new (ss.makeGenericType($JS_UI_Menus_MenuProperty$1, [Boolean]).$ctor1)(true);
		this.cssClassProperty = new (ss.makeGenericType($JS_UI_Menus_MenuProperty$1, [String]))();
		this.isEnabledProperty = new (ss.makeGenericType($JS_UI_Menus_MenuProperty$1, [Boolean]).$ctor1)(true);
		this.isVisibleProperty = new (ss.makeGenericType($JS_UI_Menus_MenuProperty$1, [Boolean]).$ctor1)(true);
		this.enableIconProperty = new (ss.makeGenericType($JS_UI_Menus_MenuProperty$1, [ss.makeGenericType(ss.Nullable$1, [Boolean])]))();
		this.iconControl = null;
		this.$labelTooltip = null;
		this.$labelTooltipTitle = null;
		this.$_lastSetIconCssClass = null;
		$JS_UI_Menus_MenuObject.call(this);
	};
	$JS_UI_Menus_MenuItem.__typeName = 'JS.UI.Menus.MenuItem';
	global.JS.UI.Menus.MenuItem = $JS_UI_Menus_MenuItem;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Menus.MenuItemGroup
	var $JS_UI_Menus_MenuItemGroup = function(id, items) {
		this.id = null;
		this.items = null;
		this.$_command = null;
		this.$_click = null;
		this.$_checkChanged = null;
		this.$_menuItemDict = null;
		if (ss.isNullOrUndefined(id)) {
			throw new ss.ArgumentNullException('id');
		}
		if (ss.isNullOrUndefined(items)) {
			throw new ss.ArgumentNullException('items');
		}
		this.id = id;
		this.items = items;
	};
	$JS_UI_Menus_MenuItemGroup.__typeName = 'JS.UI.Menus.MenuItemGroup';
	global.JS.UI.Menus.MenuItemGroup = $JS_UI_Menus_MenuItemGroup;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Menus.MenuItemGroupEventArgs
	var $JS_UI_Menus_MenuItemGroupEventArgs$1 = function(TArgs) {
		var $type = function(sender, args) {
			this.sender = null;
			this.args = null;
			ss.EventArgs.call(this);
			this.sender = sender;
			this.args = args;
		};
		ss.registerGenericClassInstance($type, $JS_UI_Menus_MenuItemGroupEventArgs$1, [TArgs], {}, function() {
			return ss.EventArgs;
		}, function() {
			return [];
		});
		return $type;
	};
	$JS_UI_Menus_MenuItemGroupEventArgs$1.__typeName = 'JS.UI.Menus.MenuItemGroupEventArgs$1';
	ss.initGenericClass($JS_UI_Menus_MenuItemGroupEventArgs$1, $asm, 1);
	global.JS.UI.Menus.MenuItemGroupEventArgs$1 = $JS_UI_Menus_MenuItemGroupEventArgs$1;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Menus.MenuObject
	var $JS_UI_Menus_MenuObject = function() {
		this.rootMenu = null;
		this.menu = null;
		this.isBuild = false;
		this.element = null;
	};
	$JS_UI_Menus_MenuObject.__typeName = 'JS.UI.Menus.MenuObject';
	global.JS.UI.Menus.MenuObject = $JS_UI_Menus_MenuObject;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Menus.MenuOptions
	var $JS_UI_Menus_MenuOptions = function() {
		this.$iconCssClassOption = null;
		this.$emptyIconCssClassOption = null;
		this.$enableIconsOption = null;
		this.$checkedIconCssClassOption = null;
		this.$uncheckedIconCssClassOption = null;
		this.$disabledCssClassOption = null;
		this.$invisibleCssClassOption = null;
	};
	$JS_UI_Menus_MenuOptions.__typeName = 'JS.UI.Menus.MenuOptions';
	$JS_UI_Menus_MenuOptions.$createGlobal = function() {
		var $t1 = new $JS_UI_Menus_MenuOptions();
		$t1.set_enableIcons(false);
		$t1.set_disabledCssClass('mm-disabled');
		$t1.set_invisibleCssClass('mm-collapsed');
		return $t1;
	};
	global.JS.UI.Menus.MenuOptions = $JS_UI_Menus_MenuOptions;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Menus.MenuPosition
	var $JS_UI_Menus_MenuPosition = function() {
	};
	$JS_UI_Menus_MenuPosition.__typeName = 'JS.UI.Menus.MenuPosition';
	global.JS.UI.Menus.MenuPosition = $JS_UI_Menus_MenuPosition;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Menus.MenuProperty
	var $JS_UI_Menus_MenuProperty$1 = function(T) {
		var $type = function() {
			this.$1$ChangingField = null;
			this.$1$ChangedField = null;
			this.$_value = ss.getDefaultValue(T);
			this.$_isReadOnly = false;
		};
		$type.$ctor1 = function(initialValue) {
			this.$1$ChangingField = null;
			this.$1$ChangedField = null;
			this.$_value = ss.getDefaultValue(T);
			this.$_isReadOnly = false;
			this.$_value = initialValue;
		};
		ss.registerGenericClassInstance($type, $JS_UI_Menus_MenuProperty$1, [T], {
			add_changing: function(value) {
				this.$1$ChangingField = ss.delegateCombine(this.$1$ChangingField, value);
			},
			remove_changing: function(value) {
				this.$1$ChangingField = ss.delegateRemove(this.$1$ChangingField, value);
			},
			onChanging: function(e) {
				var temp = this.$1$ChangingField;
				if (!ss.staticEquals(temp, null)) {
					temp(this, e);
				}
			},
			add_changed: function(value) {
				this.$1$ChangedField = ss.delegateCombine(this.$1$ChangedField, value);
			},
			remove_changed: function(value) {
				this.$1$ChangedField = ss.delegateRemove(this.$1$ChangedField, value);
			},
			onChanged: function(e) {
				var temp = this.$1$ChangedField;
				if (!ss.staticEquals(temp, null)) {
					temp(this, e);
				}
			},
			get_value: function() {
				return this.$_value;
			},
			set_value: function(value) {
				if (this.$_isReadOnly) {
					throw new ss.InvalidOperationException('The property can no longer be modified.');
				}
				if (ss.staticEquals(this.$_value, value)) {
					return;
				}
				this.onChanging(ss.EventArgs.Empty);
				this.$_value = value;
				this.onChanged(ss.EventArgs.Empty);
			},
			makeReadOnly: function() {
				this.$_isReadOnly = true;
			}
		}, function() {
			return null;
		}, function() {
			return [];
		});
		$type.$ctor1.prototype = $type.prototype;
		return $type;
	};
	$JS_UI_Menus_MenuProperty$1.__typeName = 'JS.UI.Menus.MenuProperty$1';
	ss.initGenericClass($JS_UI_Menus_MenuProperty$1, $asm, 1);
	global.JS.UI.Menus.MenuProperty$1 = $JS_UI_Menus_MenuProperty$1;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Menus.SeparatorMenuItem
	var $JS_UI_Menus_SeparatorMenuItem = function() {
		$JS_UI_Menus_MenuItem.call(this);
	};
	$JS_UI_Menus_SeparatorMenuItem.__typeName = 'JS.UI.Menus.SeparatorMenuItem';
	global.JS.UI.Menus.SeparatorMenuItem = $JS_UI_Menus_SeparatorMenuItem;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Menus.StaticMenuItem
	var $JS_UI_Menus_StaticMenuItem = function() {
		this.control = null;
		this.$labelTitle = null;
		$JS_UI_Menus_IconedMenuItem.call(this);
	};
	$JS_UI_Menus_StaticMenuItem.__typeName = 'JS.UI.Menus.StaticMenuItem';
	$JS_UI_Menus_StaticMenuItem.$ctor1 = function(title) {
		this.control = null;
		this.$labelTitle = null;
		$JS_UI_Menus_IconedMenuItem.call(this);
		this.set_title(title);
	};
	global.JS.UI.Menus.StaticMenuItem = $JS_UI_Menus_StaticMenuItem;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Menus.Submenu
	var $JS_UI_Menus_Submenu = function() {
		$JS_UI_Menus_MenuBase.call(this);
	};
	$JS_UI_Menus_Submenu.__typeName = 'JS.UI.Menus.Submenu';
	global.JS.UI.Menus.Submenu = $JS_UI_Menus_Submenu;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Menus.SubmenuItem
	var $JS_UI_Menus_SubmenuItem = function() {
		this.submenuProperty = new (ss.makeGenericType($JS_UI_Menus_MenuProperty$1, [$JS_UI_Menus_Submenu]))();
		this.headerProperty = new (ss.makeGenericType($JS_UI_Menus_MenuProperty$1, [String]))();
		this.isButtonProperty = new (ss.makeGenericType($JS_UI_Menus_MenuProperty$1, [Boolean]).$ctor1)(false);
		this.control = null;
		this.$labelTitle = null;
		$JS_UI_Menus_IconedMenuItem.call(this);
	};
	$JS_UI_Menus_SubmenuItem.__typeName = 'JS.UI.Menus.SubmenuItem';
	$JS_UI_Menus_SubmenuItem.$ctor1 = function(title, submenu) {
		this.submenuProperty = new (ss.makeGenericType($JS_UI_Menus_MenuProperty$1, [$JS_UI_Menus_Submenu]))();
		this.headerProperty = new (ss.makeGenericType($JS_UI_Menus_MenuProperty$1, [String]))();
		this.isButtonProperty = new (ss.makeGenericType($JS_UI_Menus_MenuProperty$1, [Boolean]).$ctor1)(false);
		this.control = null;
		this.$labelTitle = null;
		$JS_UI_Menus_IconedMenuItem.call(this);
		this.set_title(title);
		this.set_submenu(submenu);
	};
	global.JS.UI.Menus.SubmenuItem = $JS_UI_Menus_SubmenuItem;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Menus.TitleMenuItem
	var $JS_UI_Menus_TitleMenuItem = function() {
		$JS_UI_Menus_MenuItem.call(this);
	};
	$JS_UI_Menus_TitleMenuItem.__typeName = 'JS.UI.Menus.TitleMenuItem';
	$JS_UI_Menus_TitleMenuItem.$ctor1 = function(title) {
		$JS_UI_Menus_MenuItem.call(this);
		this.set_title(title);
	};
	global.JS.UI.Menus.TitleMenuItem = $JS_UI_Menus_TitleMenuItem;
	ss.initClass($JS_UI_Menus_MenuObject, $asm, {
		requireBuilt: function() {
			if (false === this.isBuild) {
				throw new ss.InvalidOperationException('The menu must be build before this method can be called.');
			}
		},
		getOption: function(T) {
			return function(func) {
				if (ss.staticEquals(func, null)) {
					throw new ss.ArgumentNullException('func');
				}
				for (var menu = this.menu; ss.isValue(menu); menu = menu.menu) {
					if (menu.get_$hasOptions()) {
						var value = func(menu.get_options());
						if (ss.isValue(value)) {
							return value.item1;
						}
					}
				}
				{
					var value1 = func($JS_UI_Menus_Menu.get_globalOptions());
					if (ss.isValue(value1)) {
						return value1.item1;
					}
				}
				return ss.getDefaultValue(T);
			};
		}
	});
	ss.initClass($JS_UI_Menus_MenuItem, $asm, {
		get_id: function() {
			return this.idProperty.get_value();
		},
		set_id: function(value) {
			this.idProperty.set_value(value);
		},
		get_groupID: function() {
			return this.groupIDProperty.get_value();
		},
		set_groupID: function(value) {
			this.groupIDProperty.set_value(value);
		},
		get_title: function() {
			return this.titleProperty.get_value();
		},
		set_title: function(value) {
			this.titleProperty.set_value(value);
		},
		get_tooltip: function() {
			return this.tooltipProperty.get_value();
		},
		set_tooltip: function(value) {
			this.tooltipProperty.set_value(value);
		},
		get_tooltipTitle: function() {
			return this.tooltipTitleProperty.get_value();
		},
		set_tooltipTitle: function(value) {
			this.tooltipTitleProperty.set_value(value);
		},
		get_isTooltipThumbVisible: function() {
			return this.isTooltipThumbVisibleProperty.get_value();
		},
		set_isTooltipThumbVisible: function(value) {
			this.isTooltipThumbVisibleProperty.set_value(value);
		},
		get_cssClass: function() {
			return this.cssClassProperty.get_value();
		},
		set_cssClass: function(value) {
			this.cssClassProperty.set_value(value);
		},
		get_isEnabled: function() {
			return this.isEnabledProperty.get_value();
		},
		set_isEnabled: function(value) {
			this.isEnabledProperty.set_value(value);
		},
		get_isVisible: function() {
			return this.isVisibleProperty.get_value();
		},
		set_isVisible: function(value) {
			this.isVisibleProperty.set_value(value);
		},
		get_enableIcon: function() {
			return this.enableIconProperty.get_value();
		},
		set_enableIcon: function(value) {
			this.enableIconProperty.set_value(value);
		},
		$internalBuild: function(parentElement) {
			if (this.isBuild) {
				throw new ss.InvalidOperationException('The menu is already build.');
			}
			this.element = $('<li></li>').appendTo(parentElement);
			this.buildCore();
			this.isBuild = true;
		},
		setupIconControl: function(parent) {
			if (ss.isNullOrUndefined(parent)) {
				throw new ss.ArgumentNullException('parent');
			}
			if (ss.isNullOrUndefined(this.iconControl)) {
				// Icons are not enabled
				return;
			}
			this.iconControl.prependTo(parent);
			// Attach the icon control to DOM
		},
		buildCore: function() {
			// Read-only properties
			// Making the ID and GroupID read-only is required since the result
			// of seached performed by "Menu.Get" and "Menu.GetGroup" is cached for efficiency.
			this.idProperty.makeReadOnly();
			this.groupIDProperty.makeReadOnly();
			this.enableIconProperty.makeReadOnly();
			// Property change event handlers
			this.cssClassProperty.add_changing(ss.mkdel(this, this.$cssClassProperty_Changing));
			this.cssClassProperty.add_changed(ss.mkdel(this, this.$cssClassProperty_Changed));
			this.isEnabledProperty.add_changed(ss.mkdel(this, function(sender, args) {
				this.$updateIsEnabled();
			}));
			this.isVisibleProperty.add_changed(ss.mkdel(this, function(sender1, args1) {
				this.$updateIsVisible();
			}));
			// Apply properies
			this.element.addClass(ss.coalesce(this.get_cssClass(), ''));
			this.$updateIsEnabled();
			this.$updateIsVisible();
			// Options
			var $t1 = this.get_enableIcon();
			if (ss.isNullOrUndefined($t1)) {
				$t1 = ss.coalesce(this.getOption(ss.makeGenericType(ss.Nullable$1, [Boolean])).call(this, function(x) {
					return x.$enableIconsOption;
				}), false);
			}
			var enableIcons = $t1;
			if (enableIcons) {
				var cssClass = this.getOption(String).call(this, function(x1) {
					return x1.$iconCssClassOption;
				});
				// The class to apply to all icons
				// The element will be attached to the DOM by the "SetupIconControl" method (if called).
				// It MUST be creared during the execution of the "Build" method since derived types
				// may depend on that.
				this.iconControl = $('<span></span>').addClass(ss.coalesce(cssClass, ''));
				this.setIcon(null);
			}
			if (false === ss.isNullOrEmptyString(this.get_tooltip())) {
				// The item must have an ID so that the menu can be navigated back from the tooltip
				var menuItemID = 'MMenuItem_' + (++$JS_UI_Menus_MenuItem.$_menuItemID).toString();
				this.element.attr('id', menuItemID);
				this.element.addClass('mm-tooltip');
				// The panel that will contain the tooltip
				var panelTooltip = $("<div class='mm-tooltip'></div>").appendTo(this.element);
				// Add a text for the header 
				this.$labelTooltipTitle = $("<div class='Header mm-tooltip-title'></div>").appendTo(panelTooltip);
				// Add a button to go back from the tooltip to the item
				$(ss.formatString("<a href='#{0}' class='Prev'></a>", menuItemID)).appendTo(panelTooltip);
				// The panel that will contain the text of the tooltip
				this.$labelTooltip = $("<div class='mm-tooltip-content'></div>").appendTo(panelTooltip);
				// Property change event handlers
				this.tooltipProperty.add_changed(ss.mkdel(this, function(sender2, args2) {
					this.$updateTooltip();
				}));
				this.tooltipTitleProperty.add_changed(ss.mkdel(this, function(sender3, args3) {
					this.$updateTooltipTitle();
				}));
				this.titleProperty.add_changed(ss.mkdel(this, function(sender4, args4) {
					this.$updateTooltipTitle();
				}));
				this.isTooltipThumbVisibleProperty.add_changed(ss.mkdel(this, function(sender5, args5) {
					this.$updateIsTooltipThumbVisible();
				}));
				// Apply properties
				this.$updateTooltip();
				this.$updateTooltipTitle();
				this.$updateIsTooltipThumbVisible();
			}
			// Apply enabled
			this.element[0].addEventListener('click', ss.mkdel(this, this.$element_Click), true);
			this.element[0].addEventListener('dblclick', ss.mkdel(this, this.$element_Click), true);
			this.element[0].addEventListener('tap', ss.mkdel(this, this.$element_Click), true);
			// Mobile
		},
		$element_Click: function(e) {
			if (false === this.get_isEnabled()) {
				// Disable the event
				e.preventDefault();
				e.stopImmediatePropagation();
				e.stopPropagation();
			}
		},
		$updateTooltip: function() {
			if (ss.isValue(this.$labelTooltip)) {
				this.$labelTooltip.html(ss.coalesce(this.get_tooltip(), ''));
			}
		},
		$updateTooltipTitle: function() {
			if (ss.isValue(this.$labelTooltipTitle)) {
				var $t2 = this.$labelTooltipTitle;
				var $t1 = this.get_tooltipTitle();
				if (ss.isNullOrUndefined($t1)) {
					$t1 = ss.coalesce(this.get_title(), '');
				}
				$t2.text($t1);
			}
		},
		$updateIsTooltipThumbVisible: function() {
			if (this.get_isTooltipThumbVisible()) {
				this.element.removeClass('mm-tooltip-nothumb');
			}
			else {
				this.element.addClass('mm-tooltip-nothumb');
			}
		},
		$cssClassProperty_Changing: function(sender, e) {
			this.element.removeClass(ss.coalesce(this.get_cssClass(), ''));
		},
		$cssClassProperty_Changed: function(sender, e) {
			this.element.addClass(ss.coalesce(this.get_cssClass(), ''));
		},
		$updateIsEnabled: function() {
			var cssClass = this.getOption(String).call(this, function(x) {
				return x.$disabledCssClassOption;
			});
			if (this.get_isEnabled()) {
				this.element.removeClass(cssClass);
			}
			else {
				this.element.addClass(cssClass);
			}
		},
		$updateIsVisible: function() {
			var cssClass = this.getOption(String).call(this, function(x) {
				return x.$invisibleCssClassOption;
			});
			if (this.get_isVisible()) {
				this.element.removeClass(cssClass);
			}
			else {
				this.element.addClass(cssClass);
			}
		},
		setIcon: function(iconCssClass) {
			if (ss.isNullOrUndefined(this.iconControl)) {
				// Icons are not enabled
				return;
			}
			if (ss.isNullOrEmptyString(iconCssClass)) {
				// Set empty icon
				iconCssClass = this.getOption(String).call(this, function(x) {
					return x.$emptyIconCssClassOption;
				});
			}
			if (ss.isValue(this.$_lastSetIconCssClass)) {
				// Remove previous icon
				this.iconControl.removeClass(this.$_lastSetIconCssClass);
			}
			this.iconControl.addClass(ss.coalesce(iconCssClass, ''));
			this.$_lastSetIconCssClass = iconCssClass;
		},
		removeIcon: function() {
			this.setIcon(null);
		}
	}, $JS_UI_Menus_MenuObject);
	ss.initClass($JS_UI_Menus_IconedMenuItem, $asm, {
		get_iconCssClass: function() {
			return this.iconCssClassProperty.get_value();
		},
		set_iconCssClass: function(value) {
			this.iconCssClassProperty.set_value(value);
		},
		get_isIconVisible: function() {
			return this.isIconVisibleProperty.get_value();
		},
		set_isIconVisible: function(value) {
			this.isIconVisibleProperty.set_value(value);
		},
		buildCore: function() {
			$JS_UI_Menus_MenuItem.prototype.buildCore.call(this);
			// Property change event handlers
			this.iconCssClassProperty.add_changed(ss.mkdel(this, function(sender, args) {
				this.$updateIcon();
			}));
			this.isIconVisibleProperty.add_changed(ss.mkdel(this, function(sender1, args1) {
				this.$updateIcon();
			}));
			this.$updateIcon();
		},
		$updateIcon: function() {
			if (this.get_isIconVisible()) {
				this.setIcon(this.get_iconCssClass());
			}
			else {
				this.removeIcon();
			}
		}
	}, $JS_UI_Menus_MenuItem);
	ss.initClass($JS_UI_Menus_ButtonMenuItem, $asm, {
		add_command: function(value) {
			this.$4$CommandField = ss.delegateCombine(this.$4$CommandField, value);
		},
		remove_command: function(value) {
			this.$4$CommandField = ss.delegateRemove(this.$4$CommandField, value);
		},
		onCommand: function(e) {
			var temp = this.$4$CommandField;
			if (!ss.staticEquals(temp, null)) {
				temp(this, e);
			}
		},
		add_click: function(value) {
			this.$4$ClickField = ss.delegateCombine(this.$4$ClickField, value);
		},
		remove_click: function(value) {
			this.$4$ClickField = ss.delegateRemove(this.$4$ClickField, value);
		},
		onClick: function(e) {
			var temp = this.$4$ClickField;
			if (!ss.staticEquals(temp, null)) {
				temp(this, e);
			}
		},
		buildCore: function() {
			$JS_UI_Menus_IconedMenuItem.prototype.buildCore.call(this);
			// Create controls
			this.control = $("<a href='#'></a>").appendTo(this.element);
			this.$labelTitle = $('<span></span>').appendTo(this.control);
			this.control.click(ss.mkdel(this, this.$control_Click));
			this.setupIconControl(this.control);
			// Property change event handlers
			this.titleProperty.add_changed(ss.mkdel(this, function(sender, args) {
				this.$updateTitle();
			}));
			// Apply properties
			this.$updateTitle();
		},
		$updateTitle: function() {
			this.$labelTitle.text(ss.coalesce(this.get_title(), ''));
		},
		$control_Click: function(e) {
			this.onClick(ss.EventArgs.Empty);
			this.onCommand(new $JS_UI_Menus_CommandEventArgs(this.commandID, this.commandArgument));
			if (this.closeOnClick) {
				this.rootMenu.close();
			}
		}
	}, $JS_UI_Menus_IconedMenuItem);
	$JS_UI_Menus_ButtonMenuItem.$ctor1.prototype = $JS_UI_Menus_ButtonMenuItem.prototype;
	ss.initClass($JS_UI_Menus_CheckMenuItem, $asm, {
		get_checkedIconCssClass: function() {
			return this.checkedIconCssClassProperty.get_value();
		},
		set_checkedIconCssClass: function(value) {
			this.checkedIconCssClassProperty.set_value(value);
		},
		get_uncheckedIconCssClass: function() {
			return this.uncheckedIconCssClassProperty.get_value();
		},
		set_uncheckedIconCssClass: function(value) {
			this.uncheckedIconCssClassProperty.set_value(value);
		},
		get_isChecked: function() {
			return this.isCheckedProperty.get_value();
		},
		set_isChecked: function(value) {
			this.isCheckedProperty.set_value(value);
		},
		add_checkChanged: function(value) {
			this.$3$CheckChangedField = ss.delegateCombine(this.$3$CheckChangedField, value);
		},
		remove_checkChanged: function(value) {
			this.$3$CheckChangedField = ss.delegateRemove(this.$3$CheckChangedField, value);
		},
		onCheckChanged: function(e) {
			var temp = this.$3$CheckChangedField;
			if (!ss.staticEquals(temp, null)) {
				temp(this, e);
			}
		},
		buildCore: function() {
			$JS_UI_Menus_MenuItem.prototype.buildCore.call(this);
			// Create controls
			this.control = $("<a href='#'></a>").appendTo(this.element);
			this.$labelTitle = $('<span></span>').appendTo(this.control);
			this.control.click(ss.mkdel(this, this.$control_Click));
			this.setupIconControl(this.control);
			// Property change event handlers
			this.titleProperty.add_changed(ss.mkdel(this, function(sender, args) {
				this.$updateTitle();
			}));
			this.isCheckedProperty.add_changed(ss.mkdel(this, function(sender1, args1) {
				this.$updateIsChecked();
			}));
			this.checkedIconCssClassProperty.add_changed(ss.mkdel(this, function(sender2, args2) {
				this.$updateIsChecked();
			}));
			this.uncheckedIconCssClassProperty.add_changed(ss.mkdel(this, function(sender3, args3) {
				this.$updateIsChecked();
			}));
			// Apply properties
			this.$updateTitle();
			this.$updateIsChecked();
		},
		$updateTitle: function() {
			this.$labelTitle.text(ss.coalesce(this.get_title(), ''));
		},
		$updateIsChecked: function() {
			var cssClass;
			if (this.get_isChecked()) {
				var $t1 = this.get_checkedIconCssClass();
				if (ss.isNullOrUndefined($t1)) {
					$t1 = this.getOption(String).call(this, function(x) {
						return x.$checkedIconCssClassOption;
					});
				}
				cssClass = $t1;
			}
			else {
				var $t2 = this.get_uncheckedIconCssClass();
				if (ss.isNullOrUndefined($t2)) {
					$t2 = this.getOption(String).call(this, function(x1) {
						return x1.$uncheckedIconCssClassOption;
					});
				}
				cssClass = $t2;
			}
			this.setIcon(cssClass);
		},
		$control_Click: function(e) {
			this.set_isChecked(false === this.get_isChecked());
			// Toggle; this will cause the "UpdateCheckedState" method to be called
			this.onCheckChanged(ss.EventArgs.Empty);
			if (this.closeOnClick) {
				this.rootMenu.close();
			}
		}
	}, $JS_UI_Menus_MenuItem);
	$JS_UI_Menus_CheckMenuItem.$ctor1.prototype = $JS_UI_Menus_CheckMenuItem.prototype;
	ss.initClass($JS_UI_Menus_CommandEventArgs, $asm, {}, ss.EventArgs);
	ss.initClass($JS_UI_Menus_HtmlMenuItem, $asm, {
		get_html: function() {
			return this.htmlProperty.get_value();
		},
		set_html: function(value) {
			this.htmlProperty.set_value(value);
		},
		buildCore: function() {
			$JS_UI_Menus_MenuItem.prototype.buildCore.call(this);
			this.element.addClass('mm-html');
			this.$labelHtml = $('<span></span>').appendTo(this.element);
			// Property change event handlers
			this.htmlProperty.add_changed(ss.mkdel(this, function(sender, args) {
				this.$updateHtml();
			}));
			// Apply properies
			this.$updateHtml();
		},
		$updateHtml: function() {
			this.$labelHtml.html(ss.coalesce(this.get_html(), ''));
		}
	}, $JS_UI_Menus_MenuItem);
	$JS_UI_Menus_HtmlMenuItem.$ctor1.prototype = $JS_UI_Menus_HtmlMenuItem.prototype;
	ss.initClass($JS_UI_Menus_MenuBase, $asm, {
		get_options: function() {
			if (ss.isNullOrUndefined(this.$_options)) {
				this.$_options = new $JS_UI_Menus_MenuOptions();
			}
			return this.$_options;
		},
		set_options: function(value) {
			if (this.isBuild) {
				throw new ss.InvalidOperationException('Changing the options after the menu is build has no effect.');
			}
			this.$_options = value;
		},
		get_$hasOptions: function() {
			return ss.isValue(this.$_options);
		},
		get_items: function() {
			if (ss.isNullOrUndefined(this.$_items)) {
				this.$_items = [];
			}
			return this.$_items;
		},
		$internalBuild: function(parentElement) {
			if (this.isBuild) {
				throw new ss.InvalidOperationException('The menu is already build.');
			}
			this.element = $('<ul></ul>').appendTo(parentElement);
			this.buildCore();
			this.isBuild = true;
			// Make the item collection read-only
			this.$_items = this.$_items || [];
		},
		buildCore: function() {
			var itemList = this.$_items;
			if (ss.isNullOrUndefined(itemList)) {
				return;
			}
			var $t1 = ss.getEnumerator(itemList);
			try {
				while ($t1.moveNext()) {
					var item = $t1.current();
					item.menu = this;
					item.rootMenu = this.rootMenu;
					item.$internalBuild(this.element);
				}
			}
			finally {
				$t1.dispose();
			}
		},
		$findByID: function(menuItemID) {
			if (ss.isNullOrUndefined(this.$_items)) {
				return null;
			}
			// Search this menu
			var $t1 = ss.getEnumerator(this.$_items);
			try {
				while ($t1.moveNext()) {
					var item = $t1.current();
					if (ss.staticEquals(item.get_id(), menuItemID)) {
						return item;
					}
				}
			}
			finally {
				$t1.dispose();
			}
			// Search sub-menus
			var $t2 = ss.getEnumerator(this.$_items);
			try {
				while ($t2.moveNext()) {
					var item1 = $t2.current();
					if (ss.isInstanceOfType(item1, $JS_UI_Menus_SubmenuItem) && ss.isValue(ss.cast(item1, $JS_UI_Menus_SubmenuItem).get_submenu())) {
						var result = ss.cast(item1, $JS_UI_Menus_SubmenuItem).get_submenu().$findByID(menuItemID);
						if (ss.isValue(result)) {
							return result;
						}
					}
				}
			}
			finally {
				$t2.dispose();
			}
			return null;
		},
		$findByGroupID: function(groupID) {
			return new ss.IteratorBlockEnumerable(function() {
				return (function(groupID) {
					var $result, $state = 0, $t1, item, $t2, item1, list, $t3, k;
					var $finally = function() {
						$t1.dispose();
					};
					var $finally1 = function() {
						$t2.dispose();
					};
					var $finally2 = function() {
						$t3.dispose();
					};
					return new ss.IteratorBlockEnumerator(function() {
						$sm1:
						for (;;) {
							switch ($state) {
								case 0: {
									$state = -1;
									if (ss.isNullOrUndefined(this.$_items)) {
										$state = -1;
										break $sm1;
									}
									// Search this menu
									$t1 = ss.getEnumerator(this.$_items);
									$state = 4;
									continue $sm1;
								}
								case 4: {
									$state = 2;
									if (!$t1.moveNext()) {
										$state = 3;
										continue $sm1;
									}
									item = $t1.current();
									if (ss.staticEquals(item.get_groupID(), groupID)) {
										$result = item;
										$state = 4;
										return true;
									}
									$state = 4;
									continue $sm1;
								}
								case 3: {
									$state = -1;
									$finally.call(this);
									$state = 1;
									continue $sm1;
								}
								case 1: {
									$state = -1;
									// Search sub-menus
									$t2 = ss.getEnumerator(this.$_items);
									$state = 7;
									continue $sm1;
								}
								case 7: {
									$state = 5;
									if (!$t2.moveNext()) {
										$state = 6;
										continue $sm1;
									}
									item1 = $t2.current();
									if (ss.isInstanceOfType(item1, $JS_UI_Menus_SubmenuItem) && ss.isValue(ss.cast(item1, $JS_UI_Menus_SubmenuItem).get_submenu())) {
										list = ss.cast(item1, $JS_UI_Menus_SubmenuItem).get_submenu().$findByGroupID(groupID);
										$t3 = ss.getEnumerator(list);
										$state = 10;
										continue $sm1;
									}
									$state = 7;
									continue $sm1;
								}
								case 6: {
									$state = -1;
									$finally1.call(this);
									$state = -1;
									break $sm1;
								}
								case 10: {
									$state = 8;
									if (!$t3.moveNext()) {
										$state = 9;
										continue $sm1;
									}
									k = $t3.current();
									$result = k;
									$state = 10;
									return true;
								}
								case 9: {
									$state = 5;
									$finally2.call(this);
									$state = 7;
									continue $sm1;
								}
								default: {
									break $sm1;
								}
							}
						}
						return false;
					}, function() {
						return $result;
					}, function() {
						try {
							switch ($state) {
								case 2:
								case 3:
								case 4: {
									try {
										break;
									}
									finally {
										$finally.call(this);
									}
								}
								case 5:
								case 6:
								case 7:
								case 8:
								case 9:
								case 10: {
									try {
										switch ($state) {
											case 8:
											case 9:
											case 10: {
												try {
													break;
												}
												finally {
													$finally2.call(this);
												}
											}
										}
										break;
									}
									finally {
										$finally1.call(this);
									}
								}
							}
						}
						finally {
							$state = -1;
						}
					}, this);
				}).call(this, groupID);
			}, this);
		}
	}, $JS_UI_Menus_MenuObject);
	ss.initClass($JS_UI_Menus_Menu, $asm, {
		add_opening: function(value) {
			this.$3$OpeningField = ss.delegateCombine(this.$3$OpeningField, value);
		},
		remove_opening: function(value) {
			this.$3$OpeningField = ss.delegateRemove(this.$3$OpeningField, value);
		},
		onOpening: function(e) {
			var temp = this.$3$OpeningField;
			if (!ss.staticEquals(temp, null)) {
				temp(this, e);
			}
		},
		add_opened: function(value) {
			this.$3$OpenedField = ss.delegateCombine(this.$3$OpenedField, value);
		},
		remove_opened: function(value) {
			this.$3$OpenedField = ss.delegateRemove(this.$3$OpenedField, value);
		},
		onOpened: function(e) {
			var temp = this.$3$OpenedField;
			if (!ss.staticEquals(temp, null)) {
				temp(this, e);
			}
		},
		add_closing: function(value) {
			this.$3$ClosingField = ss.delegateCombine(this.$3$ClosingField, value);
		},
		remove_closing: function(value) {
			this.$3$ClosingField = ss.delegateRemove(this.$3$ClosingField, value);
		},
		onClosing: function(e) {
			var temp = this.$3$ClosingField;
			if (!ss.staticEquals(temp, null)) {
				temp(this, e);
			}
		},
		add_closed: function(value) {
			this.$3$ClosedField = ss.delegateCombine(this.$3$ClosedField, value);
		},
		remove_closed: function(value) {
			this.$3$ClosedField = ss.delegateRemove(this.$3$ClosedField, value);
		},
		onClosed: function(e) {
			var temp = this.$3$ClosedField;
			if (!ss.staticEquals(temp, null)) {
				temp(this, e);
			}
		},
		add_confirmed: function(value) {
			this.$3$ConfirmedField = ss.delegateCombine(this.$3$ConfirmedField, value);
		},
		remove_confirmed: function(value) {
			this.$3$ConfirmedField = ss.delegateRemove(this.$3$ConfirmedField, value);
		},
		onConfirmed: function(e) {
			var temp = this.$3$ConfirmedField;
			if (!ss.staticEquals(temp, null)) {
				temp(this, e);
			}
		},
		get_title: function() {
			return this.titleProperty.get_value();
		},
		set_title: function(value) {
			this.titleProperty.set_value(value);
		},
		get_elementID: function() {
			return this.elementIDProperty.get_value();
		},
		set_elementID: function(value) {
			this.elementIDProperty.set_value(value);
		},
		get_cssClass: function() {
			return this.cssClassProperty.get_value();
		},
		set_cssClass: function(value) {
			this.cssClassProperty.set_value(value);
		},
		get_disableAnimation: function() {
			return this.disableAnimationProperty.get_value();
		},
		set_disableAnimation: function(value) {
			this.disableAnimationProperty.set_value(value);
		},
		get_position: function() {
			return this.positionProperty.get_value();
		},
		set_position: function(value) {
			this.positionProperty.set_value(value);
		},
		get_size: function() {
			return this.sizeProperty.get_value();
		},
		set_size: function(value) {
			this.sizeProperty.set_value(value);
		},
		get_fullscreen: function() {
			return this.fullscreenProperty.get_value();
		},
		set_fullscreen: function(value) {
			this.fullscreenProperty.set_value(value);
		},
		get_showConfirmButton: function() {
			return this.showConfirmButtonProperty.get_value();
		},
		set_showConfirmButton: function(value) {
			this.showConfirmButtonProperty.set_value(value);
		},
		get_prevButton: function() {
			if (false === this.isBuild) {
				throw new ss.InvalidOperationException('This property becomes available after the menu has been built.');
			}
			JS.Diagnostics.Debug.assert(ss.isValue(this.$buttonPrev));
			return this.$buttonPrev;
		},
		get_closeButton: function() {
			if (false === this.isBuild) {
				throw new ss.InvalidOperationException('This property becomes available after the menu has been built.');
			}
			JS.Diagnostics.Debug.assert(ss.isValue(this.$buttonClose));
			return this.$buttonClose;
		},
		get_confirmButton: function() {
			if (false === this.isBuild) {
				throw new ss.InvalidOperationException('This property becomes available after the menu has been built.');
			}
			JS.Diagnostics.Debug.assert(ss.isValue(this.$buttonConfirm));
			return this.$buttonConfirm;
		},
		build: function() {
			if (this.isBuild) {
				throw new ss.InvalidOperationException('The menu is already build.');
			}
			this.rootMenu = this;
			this.menu = null;
			// This is the root menu thus it does not belong to any menu
			// Read-only properties
			this.elementIDProperty.makeReadOnly();
			//TitleProperty.MakeReadOnly(); // The title property can be changed by finding the title label in DOM
			this.positionProperty.makeReadOnly();
			this.sizeProperty.makeReadOnly();
			this.fullscreenProperty.makeReadOnly();
			this.disableAnimationProperty.makeReadOnly();
			this.rootElement = $('<nav></nav>').appendTo($('body'));
			if (false === ss.isNullOrEmptyString(this.get_elementID())) {
				this.rootElement.attr('id', this.get_elementID());
			}
			if (ss.isValue(this.get_size())) {
				this.rootElement.css('width', this.get_size().width);
				this.rootElement.css('height', this.get_size().height);
			}
			var DefaultMenuPosition = 'left';
			var menuPosition;
			if (ss.isValue(this.get_position())) {
				if (ss.isValue(this.get_position().item1)) {
					switch (this.get_position().item1) {
						case 1:
						default: {
							menuPosition = 'left';
							break;
						}
						case 3: {
							menuPosition = 'right';
							break;
						}
						case 2: {
							menuPosition = 'top';
							break;
						}
						case 4: {
							menuPosition = 'bottom';
							break;
						}
					}
				}
				else if (ss.isValue(this.get_position().item2)) {
					this.rootElement.position(this.get_position().item2);
					menuPosition = DefaultMenuPosition;
				}
				else if (ss.isValue(this.get_position().item3)) {
					this.rootElement.css('left', this.get_position().item3.left);
					this.rootElement.css('top', this.get_position().item3.top);
					menuPosition = DefaultMenuPosition;
				}
				else {
					menuPosition = DefaultMenuPosition;
				}
			}
			else {
				menuPosition = DefaultMenuPosition;
			}
			this.rootElement.addClass(ss.coalesce(this.get_cssClass(), ''));
			this.cssClassProperty.add_changing(ss.mkdel(this, this.$cssClassProperty_Changing));
			this.cssClassProperty.add_changed(ss.mkdel(this, this.$cssClassProperty_Changed));
			this.$internalBuild(this.rootElement);
			var options = { counters: false, position: menuPosition, zposition: 'front', moveBackground: false, labels: { collapse: true }, onClick: { setSelected: false, preventDefault: true, close: false }, classes: '' };
			if (this.get_fullscreen()) {
				// Display the menu full-screen
				options.classes += ' mm-fullscreen';
			}
			if (false === ss.isNullOrEmptyString(this.get_title())) {
				options.header = { add: true, update: true, title: this.get_title() };
			}
			var configuration = {};
			if (this.get_disableAnimation()) {
				options.classes += ' mm-no-animation';
				//configuration.transitionDuration = 0; // TODO
			}
			this.rootElement.mmenu(options, configuration);
			this.rootElement.on('opening.mm', ss.mkdel(this, this.$mMenu_Opening));
			this.rootElement.on('opened.mm', ss.mkdel(this, this.$mMenu_Opened));
			this.rootElement.on('closing.mm', ss.mkdel(this, this.$mMenu_Closing));
			this.rootElement.on('closed.mm', ss.mkdel(this, this.$mMenu_Closed));
			this.$labelTitle = $('.mm-header > .mm-title', this.rootElement);
			this.$buttonPrev = $('.mm-header > .mm-prev', this.rootElement);
			this.$buttonClose = $("<span class='mm-close-menu'></span>").appendTo($('.mm-header', this.rootElement)).click(ss.mkdel(this, this.$buttonClose_Click));
			this.$buttonConfirm = $("<span class='mm-confirm-menu'></span>").appendTo($('.mm-header', this.rootElement)).click(ss.mkdel(this, this.$buttonConfirm_Click));
			// Click the "Prev" button when the title is clicked
			this.$labelTitle.click(ss.mkdel(this, function(e) {
				this.$buttonPrev.click();
			}));
			// Property change event handlers
			this.titleProperty.add_changed(ss.mkdel(this, function(sender, args) {
				this.$updateTitle();
			}));
			this.showConfirmButtonProperty.add_changed(ss.mkdel(this, function(sender1, args1) {
				this.$updateConfirmationButton();
			}));
			// Initialize UI
			this.$updateConfirmationButton();
		},
		$updateTitle: function() {
			this.$labelTitle.text(ss.coalesce(this.get_title(), ''));
		},
		$updateConfirmationButton: function() {
			if (this.showConfirmButtonProperty.get_value()) {
				this.$buttonConfirm.show();
			}
			else {
				this.$buttonConfirm.hide();
			}
		},
		$buttonClose_Click: function(e) {
			this.rootElement.trigger('close.mm');
		},
		$buttonConfirm_Click: function(e) {
			var args = new ss.CancelEventArgs();
			this.onConfirmed(args);
			if (args.cancel) {
				return;
			}
			// Close the menu
			this.rootElement.trigger('close.mm');
		},
		$cssClassProperty_Changing: function(sender, e) {
			this.rootElement.removeClass(ss.coalesce(this.get_cssClass(), ''));
		},
		$cssClassProperty_Changed: function(sender, e) {
			this.rootElement.addClass(ss.coalesce(this.get_cssClass(), ''));
		},
		$mMenu_Opening: function(e) {
			this.onOpening(ss.EventArgs.Empty);
		},
		$mMenu_Opened: function(e) {
			this.onOpened(ss.EventArgs.Empty);
		},
		$mMenu_Closing: function(e) {
			this.onClosing(ss.EventArgs.Empty);
		},
		$mMenu_Closed: function(e) {
			this.onClosed(ss.EventArgs.Empty);
		},
		open: function() {
			this.requireBuilt();
			// Require that the menu is built
			//OnOpening(EventArgs.Empty);
			this.rootElement.trigger('open.mm');
			// Open the primary menu in case a sub-menu was open when the user closed the menu the last time
			this.element.trigger('open.mm');
			// Update the title since MMenu resets to the default set in options when open; the title may have changed since then.
			// It is best to do this here since:
			// - If done in "MMenu_Opening" -> No effect
			// - If done in "MMenu_Opened" -> The title is updated after the animation
			// - If done here - the title is updated before the animation
			this.$updateTitle();
			//OnOpened(EventArgs.Empty);
		},
		close: function() {
			this.requireBuilt();
			// Require that the menu is built
			//OnClosing(EventArgs.Empty);
			this.rootElement.trigger('close.mm');
			//OnClosed(EventArgs.Empty);
		},
		destroy: function() {
			this.rootElement.remove();
		},
		get_item: function(menuItemID) {
			var result = this.get(menuItemID);
			if (ss.isNullOrUndefined(result)) {
				throw new ss.KeyNotFoundException('The menu item was not found.');
			}
			else {
				return result;
			}
		},
		get: function(menuItemID) {
			if (ss.isNullOrUndefined(menuItemID)) {
				throw new ss.ArgumentNullException('menuItemID');
			}
			this.requireBuilt();
			// Require that the menu is built
			var result = {};
			// Check if the item is cached
			// If the item does not exist the cache contains "null" for its ID
			if (ss.isValue(this.$_menuItemDict) && this.$_menuItemDict.tryGetValue(menuItemID, result)) {
				// The item is cached
			}
			else {
				// Look for the item
				result.$ = this.$findByID(menuItemID);
				if (ss.isNullOrUndefined(this.$_menuItemDict)) {
					this.$_menuItemDict = new (ss.makeGenericType(ss.Dictionary$2, [Object, $JS_UI_Menus_MenuItem]))();
				}
				this.$_menuItemDict.add(menuItemID, result.$);
			}
			return result.$;
		},
		get$1: function(T) {
			return function(menuItemID) {
				return ss.cast(this.get(menuItemID), T);
			};
		},
		getGroup: function(groupID) {
			if (ss.isNullOrUndefined(groupID)) {
				throw new ss.ArgumentNullException('groupID');
			}
			this.requireBuilt();
			// Require that the menu is built
			var result = {};
			// Check if the group is cached
			if (ss.isValue(this.$_menuItemDict) && this.$_menuItemGroupDict.tryGetValue(groupID, result)) {
				// The group is cached
			}
			else {
				// Find all items of the group
				var list = this.$findByGroupID(groupID);
				result.$ = new $JS_UI_Menus_MenuItemGroup(groupID, Enumerable.from(list).toArray());
				if (ss.isNullOrUndefined(this.$_menuItemGroupDict)) {
					this.$_menuItemGroupDict = new (ss.makeGenericType(ss.Dictionary$2, [Object, $JS_UI_Menus_MenuItemGroup]))();
				}
				this.$_menuItemGroupDict.add(groupID, result.$);
			}
			return result.$;
		}
	}, $JS_UI_Menus_MenuBase);
	$JS_UI_Menus_Menu.$ctor1.prototype = $JS_UI_Menus_Menu.prototype;
	ss.initClass($JS_UI_Menus_MenuExtensions, $asm, {});
	ss.initClass($JS_UI_Menus_MenuItemGroup, $asm, {
		add_command: function(value) {
			if (ss.staticEquals(this.$_command, null)) {
				// Add event handler
				this.$updateEvent$1($JS_UI_Menus_ButtonMenuItem, $JS_UI_Menus_CommandEventArgs).call(this, ss.mkdel(this, this.$buttonMenuItem_Command), function(x, e) {
					x.add_command(e);
				});
			}
			this.$_command = ss.delegateCombine(this.$_command, value);
		},
		remove_command: function(value) {
			this.$_command = ss.delegateRemove(this.$_command, value);
			if (ss.staticEquals(this.$_command, null)) {
				// Remove the event handler
				this.$updateEvent$1($JS_UI_Menus_ButtonMenuItem, $JS_UI_Menus_CommandEventArgs).call(this, ss.mkdel(this, this.$buttonMenuItem_Command), function(x, e) {
					x.remove_command(e);
				});
			}
		},
		onCommand: function(sender, e) {
			var temp = this.$_command;
			if (!ss.staticEquals(temp, null)) {
				temp(this, new (ss.makeGenericType($JS_UI_Menus_MenuItemGroupEventArgs$1, [$JS_UI_Menus_CommandEventArgs]))(sender, e));
			}
		},
		add_click: function(value) {
			if (ss.staticEquals(this.$_click, null)) {
				// Add event handler
				this.$updateEvent($JS_UI_Menus_ButtonMenuItem).call(this, ss.mkdel(this, this.$buttonMenuItem_Click), function(x, e) {
					x.add_click(e);
				});
			}
			this.$_click = ss.delegateCombine(this.$_click, value);
		},
		remove_click: function(value) {
			this.$_click = ss.delegateRemove(this.$_click, value);
			if (ss.staticEquals(this.$_click, null)) {
				// Remove the event handler
				this.$updateEvent($JS_UI_Menus_ButtonMenuItem).call(this, ss.mkdel(this, this.$buttonMenuItem_Click), function(x, e) {
					x.remove_click(e);
				});
			}
		},
		onClick: function(sender, e) {
			var temp = this.$_click;
			if (!ss.staticEquals(temp, null)) {
				temp(this, new (ss.makeGenericType($JS_UI_Menus_MenuItemGroupEventArgs$1, [ss.EventArgs]))(sender, e));
			}
		},
		add_checkChanged: function(value) {
			if (ss.staticEquals(this.$_checkChanged, null)) {
				// Add event handler
				this.$updateEvent($JS_UI_Menus_CheckMenuItem).call(this, ss.mkdel(this, this.$checkMenuItem_Changed), function(x, e) {
					x.add_checkChanged(e);
				});
			}
			this.$_checkChanged = ss.delegateCombine(this.$_checkChanged, value);
		},
		remove_checkChanged: function(value) {
			this.$_checkChanged = ss.delegateRemove(this.$_checkChanged, value);
			if (ss.staticEquals(this.$_checkChanged, null)) {
				// Remove the event handler
				this.$updateEvent($JS_UI_Menus_CheckMenuItem).call(this, ss.mkdel(this, this.$checkMenuItem_Changed), function(x, e) {
					x.remove_checkChanged(e);
				});
			}
		},
		onCheckChanged: function(sender, e) {
			var temp = this.$_checkChanged;
			if (!ss.staticEquals(temp, null)) {
				temp(this, new (ss.makeGenericType($JS_UI_Menus_MenuItemGroupEventArgs$1, [ss.EventArgs]))(sender, e));
			}
		},
		get_item: function(menuItemID) {
			var result = this.get(menuItemID);
			if (ss.isNullOrUndefined(result)) {
				throw new ss.KeyNotFoundException('The menu item was not found.');
			}
			else {
				return result;
			}
		},
		get: function(menuItemID) {
			if (ss.isNullOrUndefined(menuItemID)) {
				throw new ss.ArgumentNullException('menuItemID');
			}
			if (ss.count(this.items) <= 10) {
				// Do not cache items
				return Enumerable.from(this.items).firstOrDefault(function(x) {
					return ss.referenceEquals(x.get_id(), menuItemID);
				}, ss.getDefaultValue($JS_UI_Menus_MenuItem));
			}
			var result = {};
			// Check if the item is cached
			// If the item does not exist the cache contains "null" for its ID
			if (ss.isValue(this.$_menuItemDict) && this.$_menuItemDict.tryGetValue(menuItemID, result)) {
				// The item is cached
			}
			else {
				// Look for the item
				result.$ = Enumerable.from(this.items).firstOrDefault(function(x1) {
					return ss.referenceEquals(x1.get_id(), menuItemID);
				}, ss.getDefaultValue($JS_UI_Menus_MenuItem));
				if (ss.isNullOrUndefined(this.$_menuItemDict)) {
					this.$_menuItemDict = new (ss.makeGenericType(ss.Dictionary$2, [Object, $JS_UI_Menus_MenuItem]))();
				}
				this.$_menuItemDict.add(menuItemID, result.$);
			}
			return result.$;
		},
		get$1: function(T) {
			return function(menuItemID) {
				return ss.cast(this.get(menuItemID), T);
			};
		},
		setIsVisible: function(value) {
			var $t1 = ss.getEnumerator(this.items);
			try {
				while ($t1.moveNext()) {
					var item = $t1.current();
					item.set_isVisible(value);
				}
			}
			finally {
				$t1.dispose();
			}
		},
		setIsEnabled: function(value) {
			var $t1 = ss.getEnumerator(this.items);
			try {
				while ($t1.moveNext()) {
					var item = $t1.current();
					item.set_isEnabled(value);
				}
			}
			finally {
				$t1.dispose();
			}
		},
		setIsChecked: function(value) {
			var $t1 = ss.getEnumerator(this.items);
			try {
				while ($t1.moveNext()) {
					var item = $t1.current();
					if (ss.isInstanceOfType(item, $JS_UI_Menus_CheckMenuItem)) {
						ss.cast(item, $JS_UI_Menus_CheckMenuItem).set_isChecked(value);
					}
				}
			}
			finally {
				$t1.dispose();
			}
		},
		$updateEvent: function(TMenuItem) {
			return function(eventHandler, method) {
				var $t1 = ss.getEnumerator(this.items);
				try {
					while ($t1.moveNext()) {
						var item = $t1.current();
						if (ss.isInstanceOfType(item, TMenuItem)) {
							method(ss.cast(item, TMenuItem), eventHandler);
						}
					}
				}
				finally {
					$t1.dispose();
				}
			};
		},
		$updateEvent$1: function(TMenuItem, TArgs) {
			return function(eventHandler, method) {
				var $t1 = ss.getEnumerator(this.items);
				try {
					while ($t1.moveNext()) {
						var item = $t1.current();
						if (ss.isInstanceOfType(item, TMenuItem)) {
							method(ss.cast(item, TMenuItem), eventHandler);
						}
					}
				}
				finally {
					$t1.dispose();
				}
			};
		},
		$buttonMenuItem_Click: function(sender, e) {
			this.onClick(sender, e);
		},
		$buttonMenuItem_Command: function(sender, e) {
			this.onCommand(sender, e);
		},
		$checkMenuItem_Changed: function(sender, e) {
			this.onCheckChanged(sender, e);
		}
	});
	ss.initClass($JS_UI_Menus_MenuOptions, $asm, {
		get_iconCssClass: function() {
			return (ss.isNullOrUndefined(this.$iconCssClassOption) ? null : this.$iconCssClassOption.item1);
		},
		set_iconCssClass: function(value) {
			this.$iconCssClassOption = { item1: value };
		},
		get_emptyIconCssClass: function() {
			return (ss.isNullOrUndefined(this.$emptyIconCssClassOption) ? null : this.$emptyIconCssClassOption.item1);
		},
		set_emptyIconCssClass: function(value) {
			this.$emptyIconCssClassOption = { item1: value };
		},
		get_enableIcons: function() {
			return (ss.isNullOrUndefined(this.$enableIconsOption) ? null : this.$enableIconsOption.item1);
		},
		set_enableIcons: function(value) {
			this.$enableIconsOption = { item1: value };
		},
		get_checkedIconCssClass: function() {
			return (ss.isNullOrUndefined(this.$checkedIconCssClassOption) ? null : this.$checkedIconCssClassOption.item1);
		},
		set_checkedIconCssClass: function(value) {
			this.$checkedIconCssClassOption = { item1: value };
		},
		get_uncheckedIconCssClass: function() {
			return (ss.isNullOrUndefined(this.$uncheckedIconCssClassOption) ? null : this.$uncheckedIconCssClassOption.item1);
		},
		set_uncheckedIconCssClass: function(value) {
			this.$uncheckedIconCssClassOption = { item1: value };
		},
		get_disabledCssClass: function() {
			return (ss.isNullOrUndefined(this.$disabledCssClassOption) ? null : this.$disabledCssClassOption.item1);
		},
		set_disabledCssClass: function(value) {
			this.$disabledCssClassOption = { item1: value };
		},
		get_invisibleCssClass: function() {
			return (ss.isNullOrUndefined(this.$invisibleCssClassOption) ? null : this.$invisibleCssClassOption.item1);
		},
		set_invisibleCssClass: function(value) {
			this.$invisibleCssClassOption = { item1: value };
		}
	});
	ss.initEnum($JS_UI_Menus_MenuPosition, $asm, { left: 1, top: 2, right: 3, bottom: 4 });
	ss.initClass($JS_UI_Menus_SeparatorMenuItem, $asm, {
		buildCore: function() {
			$JS_UI_Menus_MenuItem.prototype.buildCore.call(this);
			// Create controls
			this.element.addClass('Label Spacer');
		}
	}, $JS_UI_Menus_MenuItem);
	ss.initClass($JS_UI_Menus_StaticMenuItem, $asm, {
		buildCore: function() {
			$JS_UI_Menus_IconedMenuItem.prototype.buildCore.call(this);
			// Create controls
			this.control = $('<span></span>').appendTo(this.element);
			this.$labelTitle = $('<span></span>').appendTo(this.control);
			this.setupIconControl(this.control);
			// Property change event handlers
			this.titleProperty.add_changed(ss.mkdel(this, function(sender, args) {
				this.$updateTitle();
			}));
			// Apply properies
			this.$updateTitle();
		},
		$updateTitle: function() {
			this.$labelTitle.text(ss.coalesce(this.get_title(), ''));
		}
	}, $JS_UI_Menus_IconedMenuItem);
	$JS_UI_Menus_StaticMenuItem.$ctor1.prototype = $JS_UI_Menus_StaticMenuItem.prototype;
	ss.initClass($JS_UI_Menus_Submenu, $asm, {}, $JS_UI_Menus_MenuBase);
	ss.initClass($JS_UI_Menus_SubmenuItem, $asm, {
		get_submenu: function() {
			return this.submenuProperty.get_value();
		},
		set_submenu: function(value) {
			this.submenuProperty.set_value(value);
		},
		get_header: function() {
			return this.headerProperty.get_value();
		},
		set_header: function(value) {
			this.headerProperty.set_value(value);
		},
		get_isButton: function() {
			return this.isButtonProperty.get_value();
		},
		set_isButton: function(value) {
			this.isButtonProperty.set_value(value);
		},
		buildCore: function() {
			$JS_UI_Menus_IconedMenuItem.prototype.buildCore.call(this);
			// Read-only properties
			this.submenuProperty.makeReadOnly();
			// No more changes are allowed
			this.headerProperty.makeReadOnly();
			this.isButtonProperty.makeReadOnly();
			// Create controls
			this.control = $((this.get_isButton() ? "<a href='#'></a>" : '<span></span>')).appendTo(this.element);
			this.$labelTitle = $('<span></span>').appendTo(this.control);
			this.setupIconControl(this.control);
			// Property change event handlers
			this.titleProperty.add_changed(ss.mkdel(this, function(sender, args) {
				this.$updateTitle();
			}));
			// Apply properties
			this.$updateTitle();
			if (ss.isValue(this.get_submenu())) {
				if (ss.isValue(this.get_submenu().menu) || ss.isValue(this.get_submenu().rootMenu)) {
					throw new ss.InvalidOperationException('A sub-menu cannot belong to more than one menu item.');
				}
				this.get_submenu().menu = this.menu;
				this.get_submenu().rootMenu = this.rootMenu;
				this.get_submenu().$internalBuild(this.element);
				if (false === ss.isNullOrEmptyString(this.get_header())) {
					var labelHeader = $("<li class='Header' style='display: none;'></li>").prependTo(this.get_submenu().element);
					labelHeader.text(this.get_header());
				}
			}
		},
		$updateTitle: function() {
			this.$labelTitle.text(ss.coalesce(this.get_title(), ''));
		}
	}, $JS_UI_Menus_IconedMenuItem);
	$JS_UI_Menus_SubmenuItem.$ctor1.prototype = $JS_UI_Menus_SubmenuItem.prototype;
	ss.initClass($JS_UI_Menus_TitleMenuItem, $asm, {
		buildCore: function() {
			$JS_UI_Menus_MenuItem.prototype.buildCore.call(this);
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
		}
	}, $JS_UI_Menus_MenuItem);
	$JS_UI_Menus_TitleMenuItem.$ctor1.prototype = $JS_UI_Menus_TitleMenuItem.prototype;
	(function() {
		$JS_UI_Menus_Menu.$_globalOptions = $JS_UI_Menus_MenuOptions.$createGlobal();
	})();
	(function() {
		$JS_UI_Menus_MenuItem.$_menuItemID = 0;
	})();
})();
