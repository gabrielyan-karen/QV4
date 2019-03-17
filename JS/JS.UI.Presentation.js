(function() {
	'use strict';
	var $asm = {};
	global.JS = global.JS || {};
	global.JS.UI = global.JS.UI || {};
	global.JS.UI.Controls = global.JS.UI.Controls || {};
	global.JS.UI.Dialogs = global.JS.UI.Dialogs || {};
	global.JS.UI.Windows = global.JS.UI.Windows || {};
	ss.initAssembly($asm, 'JS.UI.Presentation');
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.UIEnvironment.NopDisposable
	var $JS_$UI_UIEnvironment$NopDisposable = function() {
	};
	$JS_$UI_UIEnvironment$NopDisposable.__typeName = 'JS.$UI.UIEnvironment$NopDisposable';
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.UIEventExtensions.DesktopUIEventProvider
	var $JS_$UI_UIEventExtensions$DesktopUIEventProvider = function() {
	};
	$JS_$UI_UIEventExtensions$DesktopUIEventProvider.__typeName = 'JS.$UI.UIEventExtensions$DesktopUIEventProvider';
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.UIEventExtensions.IUIEventProvider
	var $JS_$UI_UIEventExtensions$IUIEventProvider = function() {
	};
	$JS_$UI_UIEventExtensions$IUIEventProvider.__typeName = 'JS.$UI.UIEventExtensions$IUIEventProvider';
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.UIEventExtensions.MobileUIEventProvider
	var $JS_$UI_UIEventExtensions$MobileUIEventProvider = function() {
	};
	$JS_$UI_UIEventExtensions$MobileUIEventProvider.__typeName = 'JS.$UI.UIEventExtensions$MobileUIEventProvider';
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Windows.WindowRenderer.DesktopWindowHandle
	var $JS_$UI_Windows_WindowRenderer$DesktopWindowHandle = function(owner, widgetElement, element) {
		this.$_widgetElement = null;
		$JS_UI_Windows_$WindowHandle.call(this, owner, element);
		this.$_widgetElement = widgetElement;
		// Dialog widget
		// Event names are case-sensitive!!!
		widgetElement.on('dialogresizestop', ss.mkdel(this, this.$window_Resized));
		widgetElement.on('dialogopen', ss.mkdel(this, this.$window_Opened));
		widgetElement.on('dialogclose', ss.mkdel(this, this.$window_Closed));
		// DialogExtend widget
		widgetElement.on('dialogextendcollapse', ss.mkdel(this, this.$window_Collapse));
		widgetElement.on('dialogextendmaximize', ss.mkdel(this, this.$window_Maximize));
		widgetElement.on('dialogextendminimize', ss.mkdel(this, this.$window_Minimize));
		widgetElement.on('dialogextendrestore', ss.mkdel(this, this.$window_Restore));
	};
	$JS_$UI_Windows_WindowRenderer$DesktopWindowHandle.__typeName = 'JS.$UI.Windows.WindowRenderer$DesktopWindowHandle';
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Windows.WindowRenderer.DesktopWindowRenderer
	var $JS_$UI_Windows_WindowRenderer$DesktopWindowRenderer = function() {
	};
	$JS_$UI_Windows_WindowRenderer$DesktopWindowRenderer.__typeName = 'JS.$UI.Windows.WindowRenderer$DesktopWindowRenderer';
	$JS_$UI_Windows_WindowRenderer$DesktopWindowRenderer.$createOptions = function(window) {
		var flags = window.get_flags();
		var options = { appendTo: $JS_UI_UIEnvironment.get_windowManager().windowLayerElement, title: window.get_title(), autoOpen: false, draggable: (flags & 2) !== 0, resizable: (flags & 1) !== 0, modal: window.get_isModal(), closeOnEscape: (flags & 16) !== 0 };
		if (ss.isValue(window.get_width())) {
			options.width = window.get_width();
		}
		if (ss.isValue(window.get_height())) {
			options.height = window.get_height();
		}
		var extendOptions = { closable: (flags & 32) !== 0, minimizable: (flags & 4) !== 0, maximizable: (flags & 8) !== 0, collapsable: false, dblclick: 'maximize', minimizeLocation: 'right' };
		return { item1: options, item2: extendOptions };
	};
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Windows.WindowRenderer.IWindowRenderer
	var $JS_$UI_Windows_WindowRenderer$IWindowRenderer = function() {
	};
	$JS_$UI_Windows_WindowRenderer$IWindowRenderer.__typeName = 'JS.$UI.Windows.WindowRenderer$IWindowRenderer';
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Windows.WindowRenderer.MobileWindowHandle
	var $JS_$UI_Windows_WindowRenderer$MobileWindowHandle = function(owner, widgetElement, element) {
		this.$log = JL('UI.WindowRenderer.MobileWindowHandle');
		this.$_widgetElement = null;
		this.$_resizeExecutor = null;
		$JS_UI_Windows_$WindowHandle.call(this, owner, element);
		this.$_widgetElement = widgetElement;
		$JS_UI_MobileDevice.add_orientationChanged(ss.mkdel(this, this.$mobileDevice_OrientationChanged));
		$JS_UI_MobileDevice.add_resized(ss.mkdel(this, this.$mobileDevice_Resized));
		// Handle the close window event
		$JS_UI_UIEventExtensions$Mobile.closeWindow(element, ss.mkdel(this, this.$window_Closed));
	};
	$JS_$UI_Windows_WindowRenderer$MobileWindowHandle.__typeName = 'JS.$UI.Windows.WindowRenderer$MobileWindowHandle';
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Windows.WindowRenderer.MobileWindowRenderer
	var $JS_$UI_Windows_WindowRenderer$MobileWindowRenderer = function() {
	};
	$JS_$UI_Windows_WindowRenderer$MobileWindowRenderer.__typeName = 'JS.$UI.Windows.WindowRenderer$MobileWindowRenderer';
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.DesktopTooltipService
	var $JS_UI_$DesktopTooltipService = function() {
	};
	$JS_UI_$DesktopTooltipService.__typeName = 'JS.UI.$DesktopTooltipService';
	$JS_UI_$DesktopTooltipService.$removeJQueryObjectTooltip = function(obj) {
		JS.ArgumentHelper.notNull(obj, 'obj');
		// Remove any tooltip
		// Check if the tooltip widget is applied to the element
		// See: http://stackoverflow.com/questions/13596163/jqueryui-1-9-how-to-check-for-widget-initialized-cannot-call-method-prior-to
		if (obj.is(':ui-tooltip')) {
			obj.tooltip('destroy');
		}
	};
	$JS_UI_$DesktopTooltipService.$setJQueryObjectHtmlTooltip = function(obj, content, tooltipClass, displayDuration) {
		JS.ArgumentHelper.notNull(obj, 'obj');
		JS.ArgumentHelper.notNull(content, 'content');
		obj.tooltip({ hide: false, items: '*', content: content, show: { delay: 1000 }, tooltipClass: tooltipClass });
		var tooltipObj = obj;
		// Clear any previous event handler
		obj.unbind('tooltipopen');
		if (displayDuration > 0) {
			tooltipObj.bind('tooltipopen', function(e, uiEvent) {
				window.setTimeout(function() {
					uiEvent.tooltip.hide();
				}, displayDuration);
			});
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.ITooltipService
	var $JS_UI_$ITooltipService = function() {
	};
	$JS_UI_$ITooltipService.__typeName = 'JS.UI.$ITooltipService';
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.MobileTooltipService
	var $JS_UI_$MobileTooltipService = function() {
		this.$_tooltipDialog = null;
	};
	$JS_UI_$MobileTooltipService.__typeName = 'JS.UI.$MobileTooltipService';
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.DeviceOrientation
	var $JS_UI_DeviceOrientation = function() {
	};
	$JS_UI_DeviceOrientation.__typeName = 'JS.UI.DeviceOrientation';
	global.JS.UI.DeviceOrientation = $JS_UI_DeviceOrientation;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.ElementSize
	var $JS_UI_ElementSize = function() {
	};
	$JS_UI_ElementSize.__typeName = 'JS.UI.ElementSize';
	$JS_UI_ElementSize.createInstance = function() {
		return $JS_UI_ElementSize.$ctor();
	};
	$JS_UI_ElementSize.$ctor = function() {
		var $this = {};
		$this.width = 0;
		$this.height = 0;
		return $this;
	};
	$JS_UI_ElementSize.$ctor1 = function(width, height) {
		var $this = {};
		$this.width = 0;
		$this.height = 0;
		$this.width = width;
		$this.height = height;
		return $this;
	};
	$JS_UI_ElementSize.isInstanceOfType = function() {
		return true;
	};
	global.JS.UI.ElementSize = $JS_UI_ElementSize;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.jQueryEventExtensions
	var $JS_UI_jQueryEventExtensions = function() {
	};
	$JS_UI_jQueryEventExtensions.__typeName = 'JS.UI.jQueryEventExtensions';
	$JS_UI_jQueryEventExtensions.onNamespace = function(obj, eventName, namespace1, handler) {
		if (false === ss.isNullOrEmptyString(namespace1)) {
			eventName += '.' + namespace1;
		}
		return obj.on(eventName, handler);
	};
	$JS_UI_jQueryEventExtensions.offNamespace = function(obj, eventName, namespace1) {
		return $JS_UI_jQueryEventExtensions.offNamespace$1(obj, eventName, namespace1, null);
	};
	$JS_UI_jQueryEventExtensions.offNamespace$1 = function(obj, eventName, namespace1, handler) {
		if (false === ss.isNullOrEmptyString(namespace1)) {
			eventName += '.' + namespace1;
		}
		return obj.off(eventName, null, handler);
	};
	global.JS.UI.jQueryEventExtensions = $JS_UI_jQueryEventExtensions;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.jQueryExtensions
	var $JS_UI_jQueryExtensions = function() {
	};
	$JS_UI_jQueryExtensions.__typeName = 'JS.UI.jQueryExtensions';
	$JS_UI_jQueryExtensions.getClasses = function(obj) {
		JS.ArgumentHelper.notNull(obj, 'obj');
		var className = obj.attr('class');
		if (ss.isNullOrEmptyString(className)) {
			return [];
		}
		else {
			return className.split(new RegExp('\\s+'));
		}
	};
	$JS_UI_jQueryExtensions.addClass = function(obj, condition, cssClass) {
		if (condition) {
			obj.addClass(cssClass);
		}
		return obj;
	};
	$JS_UI_jQueryExtensions.existing = function(obj) {
		JS.ArgumentHelper.notNull(obj, 'obj');
		return ((obj.length === 0) ? null : obj);
	};
	$JS_UI_jQueryExtensions.cssWidth = function(element, width) {
		JS.ArgumentHelper.notNull(element, 'element');
		element.css('width', width.toString() + 'px');
	};
	$JS_UI_jQueryExtensions.cssHeight = function(element, height) {
		JS.ArgumentHelper.notNull(element, 'element');
		element.css('height', height.toString() + 'px');
	};
	$JS_UI_jQueryExtensions.removeClasses$1 = function(element, classes) {
		$JS_UI_jQueryExtensions.removeClasses(element, classes);
	};
	$JS_UI_jQueryExtensions.removeClasses = function(element, classes) {
		JS.ArgumentHelper.notNull(element, 'element');
		JS.ArgumentHelper.notNull(classes, 'classes');
		var $t1 = ss.getEnumerator(classes);
		try {
			while ($t1.moveNext()) {
				var item = $t1.current();
				element.removeClass(item);
			}
		}
		finally {
			$t1.dispose();
		}
	};
	global.JS.UI.jQueryExtensions = $JS_UI_jQueryExtensions;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.MobileDevice
	var $JS_UI_MobileDevice = function() {
	};
	$JS_UI_MobileDevice.__typeName = 'JS.UI.MobileDevice';
	$JS_UI_MobileDevice.get_orientation = function() {
		var orientation;
		// CAUTION (Desktop compatibility): If the orientation property is not available assume portrait.
		var orientationNumber = ss.safeCast(window.window.orientation, ss.Int32);
		switch (orientationNumber) {
			case 90:
			case -90: {
				// Landscape (Counterclockwise)
				// Landscape (Clockwise)
				orientation = 2;
				break;
			}
			case 0:
			case 180: {
				// Portrait
				// Portrait (Upside-down)
				orientation = 1;
				break;
			}
			default: {
				// Determine orientation by screen size
				if (window.screen.width >= window.screen.height) {
					orientation = 2;
				}
				else {
					orientation = 1;
				}
				break;
			}
		}
		return orientation;
	};
	$JS_UI_MobileDevice.add_orientationChanged = function(value) {
		$JS_UI_MobileDevice.$1$OrientationChangedField = ss.delegateCombine($JS_UI_MobileDevice.$1$OrientationChangedField, value);
	};
	$JS_UI_MobileDevice.remove_orientationChanged = function(value) {
		$JS_UI_MobileDevice.$1$OrientationChangedField = ss.delegateRemove($JS_UI_MobileDevice.$1$OrientationChangedField, value);
	};
	$JS_UI_MobileDevice.add_resized = function(value) {
		$JS_UI_MobileDevice.$1$ResizedField = ss.delegateCombine($JS_UI_MobileDevice.$1$ResizedField, value);
	};
	$JS_UI_MobileDevice.remove_resized = function(value) {
		$JS_UI_MobileDevice.$1$ResizedField = ss.delegateRemove($JS_UI_MobileDevice.$1$ResizedField, value);
	};
	$JS_UI_MobileDevice.$onOrientationChanged = function(orientation) {
		var temp = $JS_UI_MobileDevice.$1$OrientationChangedField;
		if (!ss.staticEquals(temp, null)) {
			temp(null, new $JS_UI_OrientationChangedEventArgs(orientation));
		}
	};
	$JS_UI_MobileDevice.$onResized = function() {
		JS.EventExtensions.fire($JS_UI_MobileDevice.$1$ResizedField, null, ss.EventArgs.Empty);
	};
	$JS_UI_MobileDevice.$cancelEventHandler = function(e) {
		e.preventDefault();
	};
	$JS_UI_MobileDevice.enableScrolling = function() {
		document.removeEventListener('touchmove', $JS_UI_MobileDevice.$cancelEventHandler, false);
	};
	$JS_UI_MobileDevice.disableScrolling = function() {
		document.addEventListener('touchmove', $JS_UI_MobileDevice.$cancelEventHandler);
	};
	$JS_UI_MobileDevice.enableScrolling$1 = function(element) {
		JS.ArgumentHelper.notNull(element, 'element');
		element.removeEventListener('touchmove', $JS_UI_MobileDevice.$cancelEventHandler, false);
	};
	$JS_UI_MobileDevice.disableScrolling$1 = function(element) {
		JS.ArgumentHelper.notNull(element, 'element');
		element.addEventListener('touchmove', $JS_UI_MobileDevice.$cancelEventHandler, false);
	};
	$JS_UI_MobileDevice.resizeToScreen = function(element) {
		JS.ArgumentHelper.notNull(element, 'element');
		var scrollLeft = $(window).scrollLeft();
		var scrollTop = $(window).scrollTop();
		var screenWidth = window.screen.width;
		var screenHeight = window.screen.height;
		if ($JS_UI_MobileDevice.get_orientation() === 2) {
			var temp = screenWidth;
			screenWidth = screenHeight;
			screenHeight = temp;
		}
		element.css({ left: scrollLeft + 'px', top: scrollTop + 'px', right: null, bottom: null, width: screenWidth + 'px', height: screenHeight + 'px' });
	};
	global.JS.UI.MobileDevice = $JS_UI_MobileDevice;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.MobileEventExtensions
	var $JS_UI_MobileEventExtensions = function() {
	};
	$JS_UI_MobileEventExtensions.__typeName = 'JS.UI.MobileEventExtensions';
	$JS_UI_MobileEventExtensions.touchStart = function(obj, handler) {
		JS.ArgumentHelper.notNull(obj, 'obj');
		JS.ArgumentHelper.notNull(handler, 'handler');
		return obj.on('touchstart', handler);
	};
	$JS_UI_MobileEventExtensions.touchStart$1 = function(obj, namespace1, handler) {
		JS.ArgumentHelper.notNull(obj, 'obj');
		JS.ArgumentHelper.notNull(handler, 'handler');
		return $JS_UI_jQueryEventExtensions.onNamespace(obj, 'touchstart', namespace1, handler);
	};
	$JS_UI_MobileEventExtensions.unbindTouchStart = function(obj, namespace1) {
		JS.ArgumentHelper.notNull(obj, 'obj');
		return $JS_UI_jQueryEventExtensions.offNamespace(obj, 'touchstart', namespace1);
	};
	$JS_UI_MobileEventExtensions.touchEnd = function(obj, handler) {
		JS.ArgumentHelper.notNull(obj, 'obj');
		JS.ArgumentHelper.notNull(handler, 'handler');
		return obj.on('touchend', handler);
	};
	$JS_UI_MobileEventExtensions.touchEnd$1 = function(obj, namespace1, handler) {
		JS.ArgumentHelper.notNull(obj, 'obj');
		JS.ArgumentHelper.notNull(handler, 'handler');
		return $JS_UI_jQueryEventExtensions.onNamespace(obj, 'touchend', namespace1, handler);
	};
	$JS_UI_MobileEventExtensions.unbindTouchEnd = function(obj, namespace1) {
		JS.ArgumentHelper.notNull(obj, 'obj');
		return $JS_UI_jQueryEventExtensions.offNamespace(obj, 'touchend', namespace1);
	};
	$JS_UI_MobileEventExtensions.touchMove = function(obj, handler) {
		JS.ArgumentHelper.notNull(obj, 'obj');
		JS.ArgumentHelper.notNull(handler, 'handler');
		return obj.on('touchmove', handler);
	};
	$JS_UI_MobileEventExtensions.touchMove$1 = function(obj, namespace1, handler) {
		JS.ArgumentHelper.notNull(obj, 'obj');
		JS.ArgumentHelper.notNull(handler, 'handler');
		return $JS_UI_jQueryEventExtensions.onNamespace(obj, 'touchmove', namespace1, handler);
	};
	$JS_UI_MobileEventExtensions.unbindTouchMove = function(obj, namespace1) {
		JS.ArgumentHelper.notNull(obj, 'obj');
		return $JS_UI_jQueryEventExtensions.offNamespace(obj, 'touchmove', namespace1);
	};
	$JS_UI_MobileEventExtensions.swipeUp = function(obj, handler) {
		JS.ArgumentHelper.notNull(obj, 'obj');
		JS.ArgumentHelper.notNull(handler, 'handler');
		return obj.on('swipeup', handler);
	};
	$JS_UI_MobileEventExtensions.swipeDown = function(obj, handler) {
		JS.ArgumentHelper.notNull(obj, 'obj');
		JS.ArgumentHelper.notNull(handler, 'handler');
		return obj.on('swipedown', handler);
	};
	$JS_UI_MobileEventExtensions.swipeLeft = function(obj, handler) {
		JS.ArgumentHelper.notNull(obj, 'obj');
		JS.ArgumentHelper.notNull(handler, 'handler');
		return obj.on('swipeleft', handler);
	};
	$JS_UI_MobileEventExtensions.swipeRight = function(obj, handler) {
		JS.ArgumentHelper.notNull(obj, 'obj');
		JS.ArgumentHelper.notNull(handler, 'handler');
		return obj.on('swiperight', handler);
	};
	$JS_UI_MobileEventExtensions.unbindSwipeUp = function(obj, handler) {
		JS.ArgumentHelper.notNull(obj, 'obj');
		JS.ArgumentHelper.notNull(handler, 'handler');
		return obj.off('swipeup', null, handler);
	};
	$JS_UI_MobileEventExtensions.unbindSwipeDown = function(obj, handler) {
		JS.ArgumentHelper.notNull(obj, 'obj');
		JS.ArgumentHelper.notNull(handler, 'handler');
		return obj.off('swipedown', null, handler);
	};
	$JS_UI_MobileEventExtensions.unbindSwipeLeft = function(obj, handler) {
		JS.ArgumentHelper.notNull(obj, 'obj');
		JS.ArgumentHelper.notNull(handler, 'handler');
		return obj.off('swipeleft', null, handler);
	};
	$JS_UI_MobileEventExtensions.unbindSwipeRight = function(obj, handler) {
		JS.ArgumentHelper.notNull(obj, 'obj');
		JS.ArgumentHelper.notNull(handler, 'handler');
		return obj.off('swiperight', null, handler);
	};
	$JS_UI_MobileEventExtensions.tap = function(obj, handler) {
		JS.ArgumentHelper.notNull(obj, 'obj');
		JS.ArgumentHelper.notNull(handler, 'handler');
		return obj.on('singletap', handler);
	};
	$JS_UI_MobileEventExtensions.tap$1 = function(obj, namespace1, handler) {
		JS.ArgumentHelper.notNull(obj, 'obj');
		JS.ArgumentHelper.notNull(handler, 'handler');
		return $JS_UI_jQueryEventExtensions.onNamespace(obj, 'singletap', namespace1, handler);
	};
	$JS_UI_MobileEventExtensions.tapHold = function(obj, handler) {
		JS.ArgumentHelper.notNull(obj, 'obj');
		JS.ArgumentHelper.notNull(handler, 'handler');
		return obj.on('taphold', handler);
	};
	$JS_UI_MobileEventExtensions.tapHold$1 = function(obj, namespace1, handler) {
		JS.ArgumentHelper.notNull(obj, 'obj');
		JS.ArgumentHelper.notNull(handler, 'handler');
		return $JS_UI_jQueryEventExtensions.onNamespace(obj, 'taphold', namespace1, handler);
	};
	global.JS.UI.MobileEventExtensions = $JS_UI_MobileEventExtensions;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.OrientationChangedEventArgs
	var $JS_UI_OrientationChangedEventArgs = function(orientation) {
		this.orientation = 0;
		ss.EventArgs.call(this);
		this.orientation = orientation;
	};
	$JS_UI_OrientationChangedEventArgs.__typeName = 'JS.UI.OrientationChangedEventArgs';
	global.JS.UI.OrientationChangedEventArgs = $JS_UI_OrientationChangedEventArgs;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.TooltipDuration
	var $JS_UI_TooltipDuration = function() {
	};
	$JS_UI_TooltipDuration.__typeName = 'JS.UI.TooltipDuration';
	global.JS.UI.TooltipDuration = $JS_UI_TooltipDuration;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.TooltipExtensions
	var $JS_UI_TooltipExtensions = function() {
	};
	$JS_UI_TooltipExtensions.__typeName = 'JS.UI.TooltipExtensions';
	$JS_UI_TooltipExtensions.get_$service = function() {
		if (ss.isNullOrUndefined($JS_UI_TooltipExtensions.$_service)) {
			if ($JS_UI_UIEnvironment.isMobileDevice) {
				$JS_UI_TooltipExtensions.$_service = new $JS_UI_$MobileTooltipService();
			}
			else {
				$JS_UI_TooltipExtensions.$_service = new $JS_UI_$DesktopTooltipService();
			}
		}
		return $JS_UI_TooltipExtensions.$_service;
	};
	$JS_UI_TooltipExtensions.setTextTooltip = function(element, content, title, duration, cssClass) {
		$JS_UI_TooltipExtensions.get_$service().$setTextTooltip(element, content, title, duration, cssClass);
		return element;
	};
	$JS_UI_TooltipExtensions.setTextTooltipWithOptions = function(element, content, title, options) {
		if (ss.isNullOrUndefined(options)) {
			options = $JS_UI_TooltipOptions.default$1;
		}
		return $JS_UI_TooltipExtensions.setTextTooltip(element, content, title, options.duration, options.cssClass);
	};
	$JS_UI_TooltipExtensions.setHtmlTooltip$1 = function(element, content, title, duration, cssClass) {
		$JS_UI_TooltipExtensions.get_$service().$setHtmlTooltip(element, content, title, duration, cssClass);
		return element;
	};
	$JS_UI_TooltipExtensions.setHtmlTooltip = function(element, content, title, options) {
		if (ss.isNullOrUndefined(options)) {
			options = $JS_UI_TooltipOptions.default$1;
		}
		return $JS_UI_TooltipExtensions.setHtmlTooltip$1(element, content, title, options.duration, options.cssClass);
	};
	$JS_UI_TooltipExtensions.removeTooltip = function(element) {
		$JS_UI_TooltipExtensions.get_$service().$removeTooltip(element);
		return element;
	};
	global.JS.UI.TooltipExtensions = $JS_UI_TooltipExtensions;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.TooltipOptions
	var $JS_UI_TooltipOptions = function() {
	};
	$JS_UI_TooltipOptions.__typeName = 'JS.UI.TooltipOptions';
	$JS_UI_TooltipOptions.createInstance = function() {
		return $JS_UI_TooltipOptions.$ctor();
	};
	$JS_UI_TooltipOptions.$ctor = function() {
		var $this = {};
		$this.duration = 0;
		$this.cssClass = null;
		$this.duration = 5000;
		return $this;
	};
	$JS_UI_TooltipOptions.isInstanceOfType = function() {
		return true;
	};
	global.JS.UI.TooltipOptions = $JS_UI_TooltipOptions;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.UIEnvironment
	var $JS_UI_UIEnvironment = function() {
	};
	$JS_UI_UIEnvironment.__typeName = 'JS.UI.UIEnvironment';
	$JS_UI_UIEnvironment.get_windowManager = function() {
		if (ss.isNullOrUndefined($JS_UI_UIEnvironment.$_windowManager)) {
			throw new ss.InvalidOperationException('The value is not set.');
		}
		return $JS_UI_UIEnvironment.$_windowManager;
	};
	$JS_UI_UIEnvironment.set_windowManager = function(value) {
		$JS_UI_UIEnvironment.$_windowManager = value;
	};
	$JS_UI_UIEnvironment.get_dialogManager = function() {
		if (ss.isNullOrUndefined($JS_UI_UIEnvironment.$_dialogManager)) {
			throw new ss.InvalidOperationException('The value is not set.');
		}
		return $JS_UI_UIEnvironment.$_dialogManager;
	};
	$JS_UI_UIEnvironment.set_dialogManager = function(value) {
		$JS_UI_UIEnvironment.$_dialogManager = value;
	};
	$JS_UI_UIEnvironment.get_isDesktopDevice = function() {
		return false === $JS_UI_UIEnvironment.isMobileDevice;
	};
	$JS_UI_UIEnvironment.init = function(windowManager, dialogManager, isMobileDevice) {
		$JS_UI_UIEnvironment.set_windowManager(windowManager);
		$JS_UI_UIEnvironment.set_dialogManager(dialogManager);
		$JS_UI_UIEnvironment.isMobileDevice = isMobileDevice;
	};
	$JS_UI_UIEnvironment.disableFastScrolling = function() {
		// TODO Implement if necessary
		return $JS_$UI_UIEnvironment$NopDisposable.$instance;
	};
	global.JS.UI.UIEnvironment = $JS_UI_UIEnvironment;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.UIEventExtensions
	var $JS_UI_UIEventExtensions = function() {
	};
	$JS_UI_UIEventExtensions.__typeName = 'JS.UI.UIEventExtensions';
	$JS_UI_UIEventExtensions.get_$eventProvider = function() {
		if (ss.isNullOrUndefined($JS_UI_UIEventExtensions.$_eventProvider)) {
			$JS_UI_UIEventExtensions.$_eventProvider = ($JS_UI_UIEnvironment.isMobileDevice ? new $JS_$UI_UIEventExtensions$MobileUIEventProvider() : new $JS_$UI_UIEventExtensions$DesktopUIEventProvider());
		}
		return $JS_UI_UIEventExtensions.$_eventProvider;
	};
	$JS_UI_UIEventExtensions.virtualClick = function(obj, handler) {
		JS.ArgumentHelper.notNull(obj, 'obj');
		JS.ArgumentHelper.notNull(handler, 'handler');
		return $JS_UI_UIEventExtensions.get_$eventProvider().$virtualClick(obj, handler);
	};
	$JS_UI_UIEventExtensions.virtualDoubleClick = function(obj, handler) {
		JS.ArgumentHelper.notNull(obj, 'obj');
		JS.ArgumentHelper.notNull(handler, 'handler');
		return $JS_UI_UIEventExtensions.get_$eventProvider().$virtualDoubleClick(obj, handler);
	};
	global.JS.UI.UIEventExtensions = $JS_UI_UIEventExtensions;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.UIEventExtensions.Desktop
	var $JS_UI_UIEventExtensions$Desktop = function() {
	};
	$JS_UI_UIEventExtensions$Desktop.__typeName = 'JS.UI.UIEventExtensions$Desktop';
	global.JS.UI.UIEventExtensions$Desktop = $JS_UI_UIEventExtensions$Desktop;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.UIEventExtensions.Mobile
	var $JS_UI_UIEventExtensions$Mobile = function() {
	};
	$JS_UI_UIEventExtensions$Mobile.__typeName = 'JS.UI.UIEventExtensions$Mobile';
	$JS_UI_UIEventExtensions$Mobile.navigateUp = function(obj, handler) {
		return $JS_UI_MobileEventExtensions.swipeDown(obj, handler);
	};
	$JS_UI_UIEventExtensions$Mobile.navigateDown = function(obj, handler) {
		return $JS_UI_MobileEventExtensions.swipeUp(obj, handler);
	};
	$JS_UI_UIEventExtensions$Mobile.navigateLeft = function(obj, handler) {
		return $JS_UI_MobileEventExtensions.swipeRight(obj, handler);
	};
	$JS_UI_UIEventExtensions$Mobile.navigateRight = function(obj, handler) {
		return $JS_UI_MobileEventExtensions.swipeLeft(obj, handler);
	};
	$JS_UI_UIEventExtensions$Mobile.unbindNavigateUp = function(obj, handler) {
		return $JS_UI_MobileEventExtensions.unbindSwipeDown(obj, handler);
	};
	$JS_UI_UIEventExtensions$Mobile.unbindNavigateDown = function(obj, handler) {
		return $JS_UI_MobileEventExtensions.unbindSwipeUp(obj, handler);
	};
	$JS_UI_UIEventExtensions$Mobile.unbindNavigateLeft = function(obj, handler) {
		return $JS_UI_MobileEventExtensions.unbindSwipeRight(obj, handler);
	};
	$JS_UI_UIEventExtensions$Mobile.unbindNavigateRight = function(obj, handler) {
		return $JS_UI_MobileEventExtensions.unbindSwipeLeft(obj, handler);
	};
	$JS_UI_UIEventExtensions$Mobile.closeWindow = function(obj, handler) {
		// TODO Implement or remove
		return obj;
		// obj.TapHold(handler);
	};
	global.JS.UI.UIEventExtensions$Mobile = $JS_UI_UIEventExtensions$Mobile;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.UIUtils
	var $JS_UI_UIUtils = function() {
	};
	$JS_UI_UIUtils.__typeName = 'JS.UI.UIUtils';
	$JS_UI_UIUtils.resizeToWindow = function(element) {
		JS.ArgumentHelper.notNull(element, 'element');
		$(window).scrollTop(0);
		$(window).scrollLeft(0);
		var windowSize = $JS_UI_UIUtils.getWindowSize();
		element.css({ left: '0px', top: '0px', right: null, bottom: null, width: windowSize.width + 'px', height: windowSize.height + 'px' });
		//
		//            var scrollLeft = jQuery.Window.GetScrollLeft();
		//
		//            var scrollTop = jQuery.Window.GetScrollTop();
		//
		//            // iOS and Android "jQuery.Window.GetHeight()" returns the height of the window minus the height of the
		//
		//            // address bar at the top. However, JQM automatically hides that address bar, thus increasing the height
		//
		//            // of the window while the reported height is less. The workaround is to use "window.innerHeight" which
		//
		//            // is always correct.
		//
		//            // More info: http://bugs.jquery.com/ticket/6724
		//
		//            var height = Window.InnerHeight;
		//
		//            if (height <= 0)
		//
		//            {
		//
		//            height = jQuery.Window.GetHeight();
		//
		//            }
		//
		//            element.CSS(JsDictionary<string, object>.GetDictionary(new
		//
		//            {
		//
		//            left = scrollLeft + "px",
		//
		//            top = scrollTop + "px",
		//
		//            right = (object)null,
		//
		//            bottom = (object)null,
		//
		//            width = jQuery.Window.GetWidth() + "px",
		//
		//            height = height + "px"
		//
		//            }));
	};
	$JS_UI_UIUtils.getWindowSize = function() {
		// iOS and Android "jQuery.Window.GetHeight()" returns the height of the window minus the height of the
		// address bar at the top. However, JQM automatically hides that address bar, thus increasing the height
		// of the window while the reported height is less. The workaround is to use "window.innerHeight" which
		// is always correct.
		// More info: http://bugs.jquery.com/ticket/6724
		var height = window.innerHeight;
		if (height <= 0) {
			height = $(window).height();
		}
		var width = window.innerWidth;
		if (width <= 0) {
			width = $(window).width();
		}
		return $JS_UI_ElementSize.$ctor1(width, height);
	};
	$JS_UI_UIUtils.textToHtml = function(text) {
		if (ss.isNullOrEmptyString(text)) {
			return text;
		}
		return ss.replaceAllString(ss.htmlEncode(text), '\n', '<br/>');
	};
	global.JS.UI.UIUtils = $JS_UI_UIUtils;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Controls.Button
	var $JS_UI_Controls_Button = function() {
		$JS_UI_Controls_Button.$ctor1.call(this, '');
	};
	$JS_UI_Controls_Button.__typeName = 'JS.UI.Controls.Button';
	$JS_UI_Controls_Button.$ctor1 = function(text) {
		$JS_UI_Controls_Button.$ctor2.call(this, $("<div class='" + ('control-text-button' || '') + "'>" + (ss.coalesce(text, '') || '') + '</div>'));
	};
	$JS_UI_Controls_Button.$ctor2 = function(element) {
		$JS_UI_Controls_ButtonBase.call(this, element);
	};
	global.JS.UI.Controls.Button = $JS_UI_Controls_Button;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Controls.ButtonBase
	var $JS_UI_Controls_ButtonBase = function(element) {
		this.$_isDefault = true;
		this.$2$ClickField = null;
		$JS_UI_Controls_Control.$ctor1.call(this, element);
		$JS_UI_UIEventExtensions.virtualClick(element, ss.mkdel(this, this.$element_VirtualClick));
	};
	$JS_UI_Controls_ButtonBase.__typeName = 'JS.UI.Controls.ButtonBase';
	global.JS.UI.Controls.ButtonBase = $JS_UI_Controls_ButtonBase;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Controls.CheckBox
	var $JS_UI_Controls_CheckBox = function() {
		$JS_UI_Controls_CheckBox.$ctor1.call(this, '');
	};
	$JS_UI_Controls_CheckBox.__typeName = 'JS.UI.Controls.CheckBox';
	$JS_UI_Controls_CheckBox.$ctor1 = function(text) {
		$JS_UI_Controls_CheckBox.$ctor2.call(this, $("<span class='" + ('control-checkbox' || '') + "'></span>").append($("<span class='" + (null || '') + "'>" + (text || '') + '</span>')).append($('<' + 'label' + '></' + 'label' + '>')));
	};
	$JS_UI_Controls_CheckBox.$ctor2 = function(element) {
		this.$2$CheckChangedField = null;
		$JS_UI_Controls_Control.$ctor1.call(this, element);
		$JS_UI_UIEventExtensions.virtualClick(this.element, ss.mkdel(this, this.$element_Click));
	};
	global.JS.UI.Controls.CheckBox = $JS_UI_Controls_CheckBox;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Controls.Control
	var $JS_UI_Controls_Control = function() {
		this.element = null;
	};
	$JS_UI_Controls_Control.__typeName = 'JS.UI.Controls.Control';
	$JS_UI_Controls_Control.$ctor1 = function(element) {
		this.element = null;
		JS.ArgumentHelper.notNull(element, 'element');
		this.element = element;
	};
	$JS_UI_Controls_Control.op_Implicit = function(control) {
		if (ss.isNullOrUndefined(control)) {
			return null;
		}
		else {
			return control.element;
		}
	};
	global.JS.UI.Controls.Control = $JS_UI_Controls_Control;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Controls.ControlExtensions
	var $JS_UI_Controls_ControlExtensions = function() {
	};
	$JS_UI_Controls_ControlExtensions.__typeName = 'JS.UI.Controls.ControlExtensions';
	$JS_UI_Controls_ControlExtensions.addClass = function(T) {
		return function(childControl, className) {
			JS.ArgumentHelper.notNull(childControl, 'childControl');
			JS.ArgumentHelper.notNullOrEmpty(className, 'className');
			childControl.element.addClass(className);
			return childControl;
		};
	};
	$JS_UI_Controls_ControlExtensions.removeClass = function(T) {
		return function(childControl, className) {
			JS.ArgumentHelper.notNull(childControl, 'childControl');
			JS.ArgumentHelper.notNullOrEmpty(className, 'className');
			childControl.element.removeClass(className);
			return childControl;
		};
	};
	$JS_UI_Controls_ControlExtensions.toggleClass = function(T) {
		return function(childControl, className, condition) {
			JS.ArgumentHelper.notNull(childControl, 'childControl');
			JS.ArgumentHelper.notNullOrEmpty(className, 'className');
			childControl.element.toggleClass(className, condition);
			return childControl;
		};
	};
	$JS_UI_Controls_ControlExtensions.appendTo = function(T) {
		return function(childControl, parentControl) {
			JS.ArgumentHelper.notNull(childControl, 'childControl');
			JS.ArgumentHelper.notNull(parentControl, 'parentControl');
			childControl.element.appendTo(parentControl.element);
			return childControl;
		};
	};
	$JS_UI_Controls_ControlExtensions.appendTo$1 = function(T) {
		return function(childControl, element) {
			JS.ArgumentHelper.notNull(childControl, 'childControl');
			JS.ArgumentHelper.notNull(element, 'element');
			childControl.element.appendTo(element);
			return childControl;
		};
	};
	global.JS.UI.Controls.ControlExtensions = $JS_UI_Controls_ControlExtensions;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Controls.IconButton
	var $JS_UI_Controls_IconButton = function() {
		$JS_UI_Controls_IconButton.$ctor1.call(this, null);
	};
	$JS_UI_Controls_IconButton.__typeName = 'JS.UI.Controls.IconButton';
	$JS_UI_Controls_IconButton.$ctor1 = function(name) {
		$JS_UI_Controls_IconButton.$ctor2.call(this, $("<div class='" + ('control-icon-button' + (ss.isNullOrEmptyString(name) ? '' : (' icon-' + name)) || '') + "'></div>"));
	};
	$JS_UI_Controls_IconButton.$ctor2 = function(element) {
		this.$_icon = null;
		$JS_UI_Controls_ButtonBase.call(this, element);
	};
	global.JS.UI.Controls.IconButton = $JS_UI_Controls_IconButton;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Controls.IconControl
	var $JS_UI_Controls_IconControl = function() {
		$JS_UI_Controls_IconControl.$ctor1.call(this, null);
	};
	$JS_UI_Controls_IconControl.__typeName = 'JS.UI.Controls.IconControl';
	$JS_UI_Controls_IconControl.$ctor1 = function(name) {
		$JS_UI_Controls_IconControl.$ctor2.call(this, $("<div class='" + ('control-icon' + (ss.isNullOrEmptyString(name) ? '' : (' icon-' + name)) || '') + "'></div>"));
	};
	$JS_UI_Controls_IconControl.$ctor2 = function(element) {
		$JS_UI_Controls_Control.$ctor1.call(this, element);
	};
	global.JS.UI.Controls.IconControl = $JS_UI_Controls_IconControl;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Controls.Label
	var $JS_UI_Controls_Label = function() {
		$JS_UI_Controls_Label.$ctor2.call(this, $("<span class='" + ('control-label' || '') + "'></span>"));
	};
	$JS_UI_Controls_Label.__typeName = 'JS.UI.Controls.Label';
	$JS_UI_Controls_Label.$ctor1 = function(text) {
		$JS_UI_Controls_Label.$ctor2.call(this, $("<span class='" + ('control-label' || '') + "'>" + (text || '') + '</span>'));
	};
	$JS_UI_Controls_Label.$ctor3 = function(text, cssClass) {
		$JS_UI_Controls_Label.$ctor1.call(this, text);
		if (false === ss.isNullOrEmptyString(cssClass)) {
			this.element.addClass(cssClass);
		}
	};
	$JS_UI_Controls_Label.$ctor2 = function(element) {
		$JS_UI_Controls_Control.$ctor1.call(this, element);
	};
	global.JS.UI.Controls.Label = $JS_UI_Controls_Label;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Controls.ListBox
	var $JS_UI_Controls_ListBox = function() {
		$JS_UI_Controls_ListBox.$ctor1.call(this, $("<div class='" + ('control-listbox' || '') + "'></div>"));
	};
	$JS_UI_Controls_ListBox.__typeName = 'JS.UI.Controls.ListBox';
	$JS_UI_Controls_ListBox.$ctor1 = function(element) {
		this.selectionMode = 0;
		this.$_items = null;
		this.$2$SelectedItemsChangedField = null;
		$JS_UI_Controls_Control.$ctor1.call(this, element);
		this.selectionMode = 0;
	};
	global.JS.UI.Controls.ListBox = $JS_UI_Controls_ListBox;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Controls.ListItem
	var $JS_UI_Controls_ListItem = function() {
	};
	$JS_UI_Controls_ListItem.__typeName = 'JS.UI.Controls.ListItem';
	$JS_UI_Controls_ListItem.createInstance = function() {
		return $JS_UI_Controls_ListItem.$ctor();
	};
	$JS_UI_Controls_ListItem.$ctor = function() {
		var $this = {};
		$this.text = null;
		$this.html = null;
		$this.value = null;
		$this.isDisabled = false;
		$this.isSelected = false;
		$this.cssClass = null;
		return $this;
	};
	$JS_UI_Controls_ListItem.$ctor1 = function(text) {
		var $this = {};
		$this.text = null;
		$this.html = null;
		$this.value = null;
		$this.isDisabled = false;
		$this.isSelected = false;
		$this.cssClass = null;
		$this.text = text;
		return $this;
	};
	$JS_UI_Controls_ListItem.$ctor2 = function(text, value) {
		var $this = {};
		$this.text = null;
		$this.html = null;
		$this.value = null;
		$this.isDisabled = false;
		$this.isSelected = false;
		$this.cssClass = null;
		$this.text = text;
		$this.value = value;
		return $this;
	};
	$JS_UI_Controls_ListItem.isInstanceOfType = function() {
		return true;
	};
	global.JS.UI.Controls.ListItem = $JS_UI_Controls_ListItem;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Controls.ListItemCollection
	var $JS_UI_Controls_ListItemCollection = function() {
		this.$_itemList = [];
	};
	$JS_UI_Controls_ListItemCollection.__typeName = 'JS.UI.Controls.ListItemCollection';
	global.JS.UI.Controls.ListItemCollection = $JS_UI_Controls_ListItemCollection;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Controls.ListSelectionMode
	var $JS_UI_Controls_ListSelectionMode = function() {
	};
	$JS_UI_Controls_ListSelectionMode.__typeName = 'JS.UI.Controls.ListSelectionMode';
	global.JS.UI.Controls.ListSelectionMode = $JS_UI_Controls_ListSelectionMode;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Controls.OldButton
	var $JS_UI_Controls_OldButton = function(cssClass) {
		$JS_UI_Controls_OldButton.$ctor1.call(this, cssClass, null);
	};
	$JS_UI_Controls_OldButton.__typeName = 'JS.UI.Controls.OldButton';
	$JS_UI_Controls_OldButton.$ctor1 = function(cssClass, text) {
		this.$2$ClickField = null;
		$JS_UI_Controls_Control.call(this);
		this.element = $("<div class='" + (cssClass || '') + "'>" + (text || '') + '</div>');
		$JS_UI_UIEventExtensions.virtualClick(this.element, ss.mkdel(this, this.$element_Click));
	};
	global.JS.UI.Controls.OldButton = $JS_UI_Controls_OldButton;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Controls.ProgressBar
	var $JS_UI_Controls_ProgressBar = function() {
		this.$_value = 0;
		this.$_bar = null;
		$JS_UI_Controls_Control.$ctor1.call(this, $("<div class='" + ('control-progress-bar' || '') + "'></div>"));
		this.$_bar = $("<div class='" + ('inner' || '') + "'></div>").appendTo(this.element);
	};
	$JS_UI_Controls_ProgressBar.__typeName = 'JS.UI.Controls.ProgressBar';
	global.JS.UI.Controls.ProgressBar = $JS_UI_Controls_ProgressBar;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Controls.TextBox
	var $JS_UI_Controls_TextBox = function() {
		$JS_UI_Controls_TextBox.$ctor1.call(this, $("<input type='text'/>"));
	};
	$JS_UI_Controls_TextBox.__typeName = 'JS.UI.Controls.TextBox';
	$JS_UI_Controls_TextBox.$ctor1 = function(element) {
		this.$2$TextChangedField = null;
		$JS_UI_Controls_Control.$ctor1.call(this, element);
		element.change(ss.mkdel(this, this.$element_Change));
	};
	global.JS.UI.Controls.TextBox = $JS_UI_Controls_TextBox;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Controls.Toolbar
	var $JS_UI_Controls_Toolbar = function(owner) {
		$JS_UI_Controls_Control.call(this);
		JS.ArgumentHelper.notNull(owner, 'owner');
		this.element = $("<div class='toolbar'></div>").appendTo(owner);
	};
	$JS_UI_Controls_Toolbar.__typeName = 'JS.UI.Controls.Toolbar';
	global.JS.UI.Controls.Toolbar = $JS_UI_Controls_Toolbar;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Controls.ToolbarControlPosition
	var $JS_UI_Controls_ToolbarControlPosition = function() {
	};
	$JS_UI_Controls_ToolbarControlPosition.__typeName = 'JS.UI.Controls.ToolbarControlPosition';
	global.JS.UI.Controls.ToolbarControlPosition = $JS_UI_Controls_ToolbarControlPosition;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Controls.VerticalAlignment
	var $JS_UI_Controls_VerticalAlignment = function() {
	};
	$JS_UI_Controls_VerticalAlignment.__typeName = 'JS.UI.Controls.VerticalAlignment';
	global.JS.UI.Controls.VerticalAlignment = $JS_UI_Controls_VerticalAlignment;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Dialogs.ConfirmationDialog
	var $JS_UI_Dialogs_ConfirmationDialog = function() {
		this.$buttonConfirm = null;
		this.$buttonCancel = null;
		$JS_UI_Dialogs_DefaultDialog.call(this);
	};
	$JS_UI_Dialogs_ConfirmationDialog.__typeName = 'JS.UI.Dialogs.ConfirmationDialog';
	$JS_UI_Dialogs_ConfirmationDialog.show = function(title, message) {
		return $JS_UI_Dialogs_ConfirmationDialog.show$1(title, message, false);
	};
	$JS_UI_Dialogs_ConfirmationDialog.show$1 = function(title, message, html) {
		if (ss.isNullOrUndefined($JS_UI_Dialogs_ConfirmationDialog.$_instance)) {
			$JS_UI_Dialogs_ConfirmationDialog.$_instance = new $JS_UI_Dialogs_ConfirmationDialog();
		}
		if ($JS_UI_Dialogs_ConfirmationDialog.$_instance.get_isVisible()) {
			throw new ss.InvalidOperationException('The dialog is already displayed.');
		}
		return $JS_UI_Dialogs_ConfirmationDialog.$_instance.$privateShow$1(title, message, html);
	};
	global.JS.UI.Dialogs.ConfirmationDialog = $JS_UI_Dialogs_ConfirmationDialog;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Dialogs.DefaultDialog
	var $JS_UI_Dialogs_DefaultDialog = function() {
		$JS_UI_Dialogs_Dialog.call(this);
	};
	$JS_UI_Dialogs_DefaultDialog.__typeName = 'JS.UI.Dialogs.DefaultDialog';
	$JS_UI_Dialogs_DefaultDialog.$ctor1 = function(element) {
		$JS_UI_Dialogs_Dialog.$ctor1.call(this, element);
	};
	global.JS.UI.Dialogs.DefaultDialog = $JS_UI_Dialogs_DefaultDialog;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Dialogs.DefaultDialogLayout
	var $JS_UI_Dialogs_DefaultDialogLayout = function(owner) {
		this.$_header = null;
		this.$_footer = null;
		this.$_content = null;
		$JS_UI_Dialogs_DialogLayout.call(this, owner);
	};
	$JS_UI_Dialogs_DefaultDialogLayout.__typeName = 'JS.UI.Dialogs.DefaultDialogLayout';
	global.JS.UI.Dialogs.DefaultDialogLayout = $JS_UI_Dialogs_DefaultDialogLayout;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Dialogs.DefaultDialogLayout.DialogHeader
	var $JS_UI_Dialogs_DefaultDialogLayout$DialogHeader = function(element, ownsElement) {
		this.element = null;
		this.$_titleElement = null;
		this.$_icon = null;
		this.$_closeButton = null;
		this.$_ownsElement = false;
		JS.ArgumentHelper.notNull(element, 'element');
		this.$_ownsElement = ownsElement;
		this.element = element;
	};
	$JS_UI_Dialogs_DefaultDialogLayout$DialogHeader.__typeName = 'JS.UI.Dialogs.DefaultDialogLayout$DialogHeader';
	global.JS.UI.Dialogs.DefaultDialogLayout$DialogHeader = $JS_UI_Dialogs_DefaultDialogLayout$DialogHeader;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Dialogs.Dialog
	var $JS_UI_Dialogs_Dialog = function() {
		this.$log = JL('UI.Dialog');
		this.$_element = null;
		this.$_containerElement = null;
		this.ownsElement = false;
		this.$_propertyChanged = false;
		this.$_theme = null;
		this.$_isModal = false;
		this.$_isFullScreen = false;
		this.$_cssClass = null;
		this.$_isVisible = false;
		this.$1$VisibilityChangedField = null;
		this.$_layout = null;
		this.$_showDialogTaskCompletionSource = null;
		this.$_dialogResult = null;
		this.$_fastScrollingDisabled = null;
		this.state = 0;
		this.state = 0;
		this.set_theme('');
		this.ownsElement = true;
	};
	$JS_UI_Dialogs_Dialog.__typeName = 'JS.UI.Dialogs.Dialog';
	$JS_UI_Dialogs_Dialog.$ctor1 = function(containerElement) {
		this.$log = JL('UI.Dialog');
		this.$_element = null;
		this.$_containerElement = null;
		this.ownsElement = false;
		this.$_propertyChanged = false;
		this.$_theme = null;
		this.$_isModal = false;
		this.$_isFullScreen = false;
		this.$_cssClass = null;
		this.$_isVisible = false;
		this.$1$VisibilityChangedField = null;
		this.$_layout = null;
		this.$_showDialogTaskCompletionSource = null;
		this.$_dialogResult = null;
		this.$_fastScrollingDisabled = null;
		this.state = 0;
		JS.ArgumentHelper.notNull(containerElement, 'containerElement');
		this.$_containerElement = containerElement;
		this.$_element = containerElement.children('.dialog');
		this.$_isModal = containerElement.hasClass('modal');
		this.state = 1;
		this.ownsElement = false;
		this.$_element.on('keydown.dialog', ss.mkdel(this, this.$element_Keydown));
	};
	global.JS.UI.Dialogs.Dialog = $JS_UI_Dialogs_Dialog;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Dialogs.DialogLayout
	var $JS_UI_Dialogs_DialogLayout = function(owner) {
		this.owner = null;
		JS.ArgumentHelper.notNull(owner, 'owner');
		this.owner = owner;
	};
	$JS_UI_Dialogs_DialogLayout.__typeName = 'JS.UI.Dialogs.DialogLayout';
	global.JS.UI.Dialogs.DialogLayout = $JS_UI_Dialogs_DialogLayout;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Dialogs.DialogManager
	var $JS_UI_Dialogs_DialogManager = function(dialogLayerElement) {
		this.currentDialog = null;
		this.dialogLayerElement = null;
		JS.ArgumentHelper.notNull(dialogLayerElement, 'dialogLayerElement');
		this.dialogLayerElement = dialogLayerElement;
	};
	$JS_UI_Dialogs_DialogManager.__typeName = 'JS.UI.Dialogs.DialogManager';
	global.JS.UI.Dialogs.DialogManager = $JS_UI_Dialogs_DialogManager;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Dialogs.DialogTheme
	var $JS_UI_Dialogs_DialogTheme = function() {
	};
	$JS_UI_Dialogs_DialogTheme.__typeName = 'JS.UI.Dialogs.DialogTheme';
	global.JS.UI.Dialogs.DialogTheme = $JS_UI_Dialogs_DialogTheme;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Dialogs.MessageDialog
	var $JS_UI_Dialogs_MessageDialog = function() {
		this.$buttonOK = null;
		$JS_UI_Dialogs_DefaultDialog.call(this);
	};
	$JS_UI_Dialogs_MessageDialog.__typeName = 'JS.UI.Dialogs.MessageDialog';
	$JS_UI_Dialogs_MessageDialog.open = function(icon, title, message) {
		return $JS_UI_Dialogs_MessageDialog.open$1(icon, title, message, false);
	};
	$JS_UI_Dialogs_MessageDialog.open$1 = function(icon, title, message, html) {
		if (ss.isNullOrUndefined($JS_UI_Dialogs_MessageDialog.$_instance)) {
			$JS_UI_Dialogs_MessageDialog.$_instance = new $JS_UI_Dialogs_MessageDialog();
		}
		return $JS_UI_Dialogs_MessageDialog.$_instance.$privateShow$1(icon, title, message, html);
	};
	global.JS.UI.Dialogs.MessageDialog = $JS_UI_Dialogs_MessageDialog;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Dialogs.MessageDialogIcon
	var $JS_UI_Dialogs_MessageDialogIcon = function() {
	};
	$JS_UI_Dialogs_MessageDialogIcon.__typeName = 'JS.UI.Dialogs.MessageDialogIcon';
	global.JS.UI.Dialogs.MessageDialogIcon = $JS_UI_Dialogs_MessageDialogIcon;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Dialogs.TooltipDialog
	var $JS_UI_Dialogs_TooltipDialog = function() {
		this.$_panelTooltipContent = null;
		$JS_UI_Dialogs_DefaultDialog.call(this);
	};
	$JS_UI_Dialogs_TooltipDialog.__typeName = 'JS.UI.Dialogs.TooltipDialog';
	global.JS.UI.Dialogs.TooltipDialog = $JS_UI_Dialogs_TooltipDialog;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Windows.WindowHandle
	var $JS_UI_Windows_$WindowHandle = function(owner, element) {
		this.$owner = null;
		this.$element = null;
		JS.ArgumentHelper.notNull(owner, 'owner');
		this.$element = element;
		this.$owner = owner;
	};
	$JS_UI_Windows_$WindowHandle.__typeName = 'JS.UI.Windows.$WindowHandle';
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Windows.HcfWindowLayout
	var $JS_UI_Windows_HcfWindowLayout = function(window) {
		this.$_header = null;
		this.$_footer = null;
		this.$_content = null;
		$JS_UI_Windows_WindowLayout.call(this, window);
		window.get_element().addClass('layout-hcf');
	};
	$JS_UI_Windows_HcfWindowLayout.__typeName = 'JS.UI.Windows.HcfWindowLayout';
	global.JS.UI.Windows.HcfWindowLayout = $JS_UI_Windows_HcfWindowLayout;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Windows.Window
	var $JS_UI_Windows_Window = function() {
		$JS_UI_Windows_Window.$ctor1.call(this, null);
	};
	$JS_UI_Windows_Window.__typeName = 'JS.UI.Windows.Window';
	$JS_UI_Windows_Window.$ctor1 = function(key) {
		this.$log = JL('UI.Window');
		this.$handle = null;
		this.$_visualState = 0;
		this.$1$MinimizedField = null;
		this.$1$MaximizedField = null;
		this.$1$CollapsedField = null;
		this.$1$RestoredField = null;
		this.$1$ResizedField = null;
		this.$_propertiesChanged = false;
		this.$_isModal = false;
		this.$_flags = 0;
		this.$_title = null;
		this.$_cssClass = null;
		this.$_width = null;
		this.$_height = null;
		this.$_isVisible = false;
		this.$1$VisibilityChangedField = null;
		this.$1$ContentVisibilityChangedField = null;
		this.layout = null;
		this.$_key = null;
		this.state = 0;
		this.$_key = key;
		this.state = 0;
		this.set_visualState(0);
	};
	global.JS.UI.Windows.Window = $JS_UI_Windows_Window;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Windows.WindowExtensions
	var $JS_UI_Windows_WindowExtensions = function() {
	};
	$JS_UI_Windows_WindowExtensions.__typeName = 'JS.UI.Windows.WindowExtensions';
	$JS_UI_Windows_WindowExtensions.$createOrGetLayout = function(T) {
		return function(window) {
			JS.ArgumentHelper.notNull(window, 'window');
			if (ss.isNullOrUndefined(window.layout)) {
				window.layout = new T(window);
			}
			else if (false === ss.isInstanceOfType(window.layout, T)) {
				throw new ss.InvalidOperationException('The layout of the window is already set to a different type.');
			}
			return ss.cast(window.layout, T);
		};
	};
	$JS_UI_Windows_WindowExtensions.hcfLayout = function(window) {
		return $JS_UI_Windows_WindowExtensions.$createOrGetLayout($JS_UI_Windows_HcfWindowLayout).call(null, window);
	};
	global.JS.UI.Windows.WindowExtensions = $JS_UI_Windows_WindowExtensions;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Windows.WindowFlags
	var $JS_UI_Windows_WindowFlags = function() {
	};
	$JS_UI_Windows_WindowFlags.__typeName = 'JS.UI.Windows.WindowFlags';
	global.JS.UI.Windows.WindowFlags = $JS_UI_Windows_WindowFlags;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Windows.WindowLayout
	var $JS_UI_Windows_WindowLayout = function(window) {
		this.window = null;
		JS.ArgumentHelper.notNull(window, 'window');
		this.window = window;
	};
	$JS_UI_Windows_WindowLayout.__typeName = 'JS.UI.Windows.WindowLayout';
	global.JS.UI.Windows.WindowLayout = $JS_UI_Windows_WindowLayout;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Windows.WindowManager
	var $JS_UI_Windows_WindowManager = function(windowLayerElement, mode) {
		this.$_mode = 0;
		this.$_windowDict = null;
		this.windowLayerElement = null;
		JS.ArgumentHelper.notNull(windowLayerElement, 'windowLayerElement');
		this.windowLayerElement = windowLayerElement;
		this.$_mode = mode;
		this.$_windowDict = new (ss.makeGenericType(ss.Dictionary$2, [String, $JS_UI_Windows_Window]))();
	};
	$JS_UI_Windows_WindowManager.__typeName = 'JS.UI.Windows.WindowManager';
	$JS_UI_Windows_WindowManager.createKey = function(windowType, key) {
		JS.ArgumentHelper.notNull(windowType, 'windowType');
		return ss.getTypeFullName(windowType) + ':' + (ss.isNullOrUndefined(key) ? '' : JSON.stringify(key));
	};
	global.JS.UI.Windows.WindowManager = $JS_UI_Windows_WindowManager;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Windows.WindowManagerExtensions
	var $JS_UI_Windows_WindowManagerExtensions = function() {
	};
	$JS_UI_Windows_WindowManagerExtensions.__typeName = 'JS.UI.Windows.WindowManagerExtensions';
	$JS_UI_Windows_WindowManagerExtensions.openOrFocus = function(TWindow) {
		return function(windowManager, key, method) {
			JS.ArgumentHelper.notNull(windowManager, 'windowManager');
			JS.ArgumentHelper.notNull(method, 'method');
			var window = windowManager.getWindow(TWindow).call(windowManager, key);
			if (ss.isValue(window)) {
				window.focus();
			}
			else {
				window = method();
				window.show();
				// Display the window
			}
		};
	};
	$JS_UI_Windows_WindowManagerExtensions.openOrFocus$1 = function(TWindow) {
		return function(windowManager, key, arguments1) {
			$JS_UI_Windows_WindowManagerExtensions.openOrFocus(TWindow).call(null, windowManager, key, function() {
				return ss.applyConstructor(TWindow, arguments1);
			});
		};
	};
	$JS_UI_Windows_WindowManagerExtensions.createOrFocus = function(TWindow) {
		return function(windowManager, key, method) {
			JS.ArgumentHelper.notNull(windowManager, 'windowManager');
			JS.ArgumentHelper.notNull(method, 'method');
			var window = windowManager.getWindow(TWindow).call(windowManager, key);
			if (ss.isValue(window)) {
				window.focus();
			}
			else {
				method().show();
				// Display the window
			}
		};
	};
	$JS_UI_Windows_WindowManagerExtensions.createOrFocus$1 = function(TWindow) {
		return function(windowManager, key, arguments1) {
			$JS_UI_Windows_WindowManagerExtensions.createOrFocus(TWindow).call(null, windowManager, key, function() {
				return ss.applyConstructor(TWindow, arguments1);
			});
		};
	};
	global.JS.UI.Windows.WindowManagerExtensions = $JS_UI_Windows_WindowManagerExtensions;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Windows.WindowManagerMode
	var $JS_UI_Windows_WindowManagerMode = function() {
	};
	$JS_UI_Windows_WindowManagerMode.__typeName = 'JS.UI.Windows.WindowManagerMode';
	global.JS.UI.Windows.WindowManagerMode = $JS_UI_Windows_WindowManagerMode;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Windows.WindowRenderer
	var $JS_UI_Windows_WindowRenderer = function() {
	};
	$JS_UI_Windows_WindowRenderer.__typeName = 'JS.UI.Windows.WindowRenderer';
	$JS_UI_Windows_WindowRenderer.get_$renderer = function() {
		if (ss.isNullOrUndefined($JS_UI_Windows_WindowRenderer.$_renderer)) {
			$JS_UI_Windows_WindowRenderer.$_renderer = ($JS_UI_UIEnvironment.isMobileDevice ? new $JS_$UI_Windows_WindowRenderer$MobileWindowRenderer() : new $JS_$UI_Windows_WindowRenderer$DesktopWindowRenderer());
		}
		return $JS_UI_Windows_WindowRenderer.$_renderer;
	};
	$JS_UI_Windows_WindowRenderer.create = function(window) {
		JS.ArgumentHelper.notNull(window, 'window');
		JS.Diagnostics.Debug.assert$1(ss.isNullOrUndefined(window.$handle), 'The handle of the window must be null.');
		$JS_UI_Windows_WindowRenderer.get_$renderer().$create(window);
	};
	$JS_UI_Windows_WindowRenderer.update = function(window) {
		JS.ArgumentHelper.notNull(window, 'window');
		JS.Diagnostics.Debug.assert$1(ss.isValue(window.$handle), 'The handle of the window must be already set.');
		$JS_UI_Windows_WindowRenderer.get_$renderer().$update(window);
	};
	$JS_UI_Windows_WindowRenderer.destroy = function(window) {
		JS.ArgumentHelper.notNull(window, 'window');
		JS.Diagnostics.Debug.assert$1(ss.isValue(window.$handle), 'The handle of the window must be already set.');
		window.$handle.$close();
	};
	global.JS.UI.Windows.WindowRenderer = $JS_UI_Windows_WindowRenderer;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Windows.WindowState
	var $JS_UI_Windows_WindowState = function() {
	};
	$JS_UI_Windows_WindowState.__typeName = 'JS.UI.Windows.WindowState';
	global.JS.UI.Windows.WindowState = $JS_UI_Windows_WindowState;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.Windows.WindowVisualState
	var $JS_UI_Windows_WindowVisualState = function() {
	};
	$JS_UI_Windows_WindowVisualState.__typeName = 'JS.UI.Windows.WindowVisualState';
	global.JS.UI.Windows.WindowVisualState = $JS_UI_Windows_WindowVisualState;
	ss.initClass($JS_$UI_UIEnvironment$NopDisposable, $asm, {
		dispose: function() {
			// Do nothing
		}
	}, null, [ss.IDisposable]);
	ss.initInterface($JS_$UI_UIEventExtensions$IUIEventProvider, $asm, { $virtualClick: null, $virtualDoubleClick: null });
	ss.initClass($JS_$UI_UIEventExtensions$DesktopUIEventProvider, $asm, {
		$virtualClick: function(obj, handler) {
			return obj.click(handler);
		},
		$virtualDoubleClick: function(obj, handler) {
			return obj.dblclick(handler);
		}
	}, null, [$JS_$UI_UIEventExtensions$IUIEventProvider]);
	ss.initClass($JS_$UI_UIEventExtensions$MobileUIEventProvider, $asm, {
		$virtualClick: function(obj, handler) {
			return $JS_UI_MobileEventExtensions.tap(obj, handler);
		},
		$virtualDoubleClick: function(obj, handler) {
			return $JS_UI_MobileEventExtensions.tapHold(obj, handler);
		}
	}, null, [$JS_$UI_UIEventExtensions$IUIEventProvider]);
	ss.initClass($JS_UI_Windows_$WindowHandle, $asm, {
		$show: null,
		$hide: null,
		$focus: null,
		$close: null,
		$onMinimized: function(e) {
			this.$owner.onMinimized(e);
		},
		$onMaximized: function(e) {
			this.$owner.onMaximized(e);
		},
		$onCollapsed: function(e) {
			this.$owner.onCollapsed(e);
		},
		$onRestored: function(e) {
			this.$owner.onRestored(e);
		},
		$onResized: function(e) {
			this.$owner.onResized(e);
		}
	});
	ss.initClass($JS_$UI_Windows_WindowRenderer$DesktopWindowHandle, $asm, {
		$show: function() {
			this.$_widgetElement.dialog('open');
		},
		$hide: function() {
			this.$_widgetElement.dialog('close');
		},
		$focus: function() {
			// The jQueryApi.UI.Widgets.DialogObject can be used as well
			// Restore the window if minimized
			this.$_widgetElement.dialogExtend('restore');
			var dialog = this.$_widgetElement;
			// Bring to front
			dialog.dialog('moveToTop');
			// Center the dialog
			dialog.dialog('option', 'position', 'center');
		},
		$close: function() {
			this.$_widgetElement.dialog('destroy');
			// Remove the element
			this.$_widgetElement.remove();
		},
		$window_Collapse: function(e) {
			this.$onCollapsed(ss.EventArgs.Empty);
		},
		$window_Maximize: function(e) {
			this.$onMaximized(ss.EventArgs.Empty);
		},
		$window_Minimize: function(e) {
			this.$onMinimized(ss.EventArgs.Empty);
		},
		$window_Restore: function(e) {
			this.$onRestored(ss.EventArgs.Empty);
		},
		$window_Opened: function(e) {
			var widget = this.$_widgetElement.dialog('widget');
			// If the window is modal the close button in the title bar is focused automatically.
			// This causes a tooltip "close" to be displayed. In order to avoid this the button must be deselected
			// when the window is open.
			$('.ui-dialog-titlebar-close', widget).blur();
		},
		$window_Closed: function(e) {
			// Close the window manually
			// This should not have any adverse effect even if the window is already closed by jQuery UI
			window.setTimeout(ss.mkdel(this, function() {
				this.$owner.close();
			}), 10);
		},
		$window_Resized: function(e) {
			this.$onResized(ss.EventArgs.Empty);
		}
	}, $JS_UI_Windows_$WindowHandle);
	ss.initInterface($JS_$UI_Windows_WindowRenderer$IWindowRenderer, $asm, { $create: null, $update: null });
	ss.initClass($JS_$UI_Windows_WindowRenderer$DesktopWindowRenderer, $asm, {
		$create: function(window) {
			// The window panel is required since jQuery mobile sets "display: block" on a call to "element.show()".
			// "show()" seems to be called by jQuery UI
			var element = $("<div class='window'><div class='window-panel'></div></div>");
			if (false === ss.isNullOrEmptyString(window.get_cssClass())) {
				element.addClass(window.get_cssClass());
			}
			var options = $JS_$UI_Windows_WindowRenderer$DesktopWindowRenderer.$createOptions(window);
			element.dialog(options.item1).dialogExtend(options.item2);
			window.$handle = new $JS_$UI_Windows_WindowRenderer$DesktopWindowHandle(window, element, element.children('.window-panel'));
		},
		$update: function(window) {
			JS.ArgumentHelper.notNull(window, 'window');
			var options = $JS_$UI_Windows_WindowRenderer$DesktopWindowRenderer.$createOptions(window);
			window.$handle.$element.dialog(options.item1).dialogExtend(options.item2);
		}
	}, null, [$JS_$UI_Windows_WindowRenderer$IWindowRenderer]);
	ss.initClass($JS_$UI_Windows_WindowRenderer$MobileWindowHandle, $asm, {
		$show: function() {
			this.$_widgetElement.show();
		},
		$hide: function() {
			this.$_widgetElement.hide();
		},
		$focus: function() {
			// Do nothing
		},
		$close: function() {
			this.$log.trace('Close');
			$JS_UI_MobileDevice.remove_orientationChanged(ss.mkdel(this, this.$mobileDevice_OrientationChanged));
			$JS_UI_MobileDevice.remove_resized(ss.mkdel(this, this.$mobileDevice_Resized));
			this.$_widgetElement.remove();
		},
		$window_Closed: function(e) {
			// Close the window manually
			window.setTimeout(ss.mkdel(this, function() {
				this.$owner.close();
			}), 10);
		},
		$mobileDevice_Resized: function(sender, e) {
			// The resize event can be called multiple times in fast succession while the mouse if moving.
			// Therefore, wait some time before firing the event
			if (ss.isNullOrUndefined(this.$_resizeExecutor)) {
				this.$_resizeExecutor = new JS.Threading.PostponeExecutor.$ctor2(ss.mkdel(this, this.$onScreenOrientationOrSizeChanged), 200, true);
			}
			this.$_resizeExecutor.execute();
		},
		$mobileDevice_OrientationChanged: function(sender, e) {
			this.$onScreenOrientationOrSizeChanged();
		},
		$onScreenOrientationOrSizeChanged: function() {
			this.$onResized(ss.EventArgs.Empty);
		}
	}, $JS_UI_Windows_$WindowHandle);
	ss.initClass($JS_$UI_Windows_WindowRenderer$MobileWindowRenderer, $asm, {
		$create: function(window) {
			// The window panel is required since jQuery mobile sets "display: block" on a call to "element.show()".
			// "show()" seems to be called by jQuery UI
			// This is not required on mobile but should be done for compatibility with the desktop version
			var element = $("<div class='window'><div class='window-title'></div><div class='window-panel'></div></div>").appendTo($JS_UI_UIEnvironment.get_windowManager().windowLayerElement);
			if (false === ss.isNullOrEmptyString(window.get_cssClass())) {
				element.addClass(window.get_cssClass());
			}
			if (false === ss.isNullOrEmptyString(window.get_title())) {
				element.children('.window-title').text(window.get_title());
			}
			window.$handle = new $JS_$UI_Windows_WindowRenderer$MobileWindowHandle(window, element, element.children('.window-panel'));
		},
		$update: function(window) {
			JS.ArgumentHelper.notNull(window, 'window');
			// Update the title of the window
			window.get_element().children('.window-title').text(ss.coalesce(window.get_title(), ''));
		}
	}, null, [$JS_$UI_Windows_WindowRenderer$IWindowRenderer]);
	ss.initInterface($JS_UI_$ITooltipService, $asm, { $setTextTooltip: null, $setHtmlTooltip: null, $removeTooltip: null });
	ss.initClass($JS_UI_$DesktopTooltipService, $asm, {
		$setTextTooltip: function(element, content, title, duration, cssClass) {
			JS.ArgumentHelper.notNull(element, 'element');
			JS.ArgumentHelper.notNull(content, 'content');
			// Encode the tooltip
			title = $JS_UI_UIUtils.textToHtml(title);
			if (ss.isInstanceOfType(content, String)) {
				content = $JS_UI_UIUtils.textToHtml(content);
			}
			else {
				var callback = content;
				// CAUTION This will cause infinite recursion if the callback is not stored in a local variable and used
				// directly in the function below
				content = function() {
					return $JS_UI_UIUtils.textToHtml(callback());
				};
			}
			this.$setHtmlTooltip(element, content, title, duration, cssClass);
		},
		$setHtmlTooltip: function(element, content, title, duration, cssClass) {
			JS.ArgumentHelper.notNull(element, 'element');
			JS.ArgumentHelper.notNull(content, 'content');
			if (false === ss.isNullOrEmptyString(title)) {
				if (ss.isInstanceOfType(content, String)) {
					content = "<div class='tooltip-title'>" + title + '</div><br/>' + content;
				}
				else {
					var callback = content;
					// CAUTION This will cause infinite recursion if the callback is not stored in a local variable and used
					// directly in the function below
					content = function() {
						return "<div class='tooltip-title'>" + title + '</div><br/>' + callback();
					};
				}
			}
			$JS_UI_$DesktopTooltipService.$setJQueryObjectHtmlTooltip(element, content, cssClass, duration);
		},
		$removeTooltip: function(element) {
			JS.ArgumentHelper.notNull(element, 'element');
			$JS_UI_$DesktopTooltipService.$removeJQueryObjectTooltip(element);
		}
	}, null, [$JS_UI_$ITooltipService]);
	ss.initClass($JS_UI_$MobileTooltipService, $asm, {
		$setTextTooltip: function(element, content, title, duration, cssClass) {
			JS.ArgumentHelper.notNull(element, 'element');
			JS.ArgumentHelper.notNull(content, 'content');
			// Encode the tooltip
			title = $JS_UI_UIUtils.textToHtml(title);
			if (ss.isInstanceOfType(content, String)) {
				content = $JS_UI_UIUtils.textToHtml(content);
			}
			else {
				var callback = content;
				// CAUTION This will cause infinite recursion if the callback is not stored in a local variable and used
				// directly in the function below
				content = function() {
					return $JS_UI_UIUtils.textToHtml(callback());
				};
			}
			this.$setHtmlTooltip(element, content, title, duration, cssClass);
		},
		$setHtmlTooltip: function(element, content, title, duration, cssClass) {
			JS.ArgumentHelper.notNull(element, 'element');
			element.off('click.tooltip');
			element.on('click.tooltip', ss.mkdel(this, function(e) {
				var html;
				if (ss.isInstanceOfType(content, String)) {
					html = content;
				}
				else {
					html = content();
				}
				this.$showTooltip(title, html, cssClass);
			}));
		},
		$showTooltip: function(title, content, cssClass) {
			if (ss.isNullOrUndefined(this.$_tooltipDialog)) {
				this.$_tooltipDialog = new $JS_UI_Dialogs_TooltipDialog();
			}
			this.$_tooltipDialog.show$4(title, content, cssClass);
		},
		$removeTooltip: function(element) {
			JS.ArgumentHelper.notNull(element, 'element');
			element.off('.tooltip');
		}
	}, null, [$JS_UI_$ITooltipService]);
	ss.initEnum($JS_UI_DeviceOrientation, $asm, { portrait: 1, landscape: 2 });
	ss.initClass($JS_UI_ElementSize, $asm, {});
	ss.initClass($JS_UI_jQueryEventExtensions, $asm, {});
	ss.initClass($JS_UI_jQueryExtensions, $asm, {});
	ss.initClass($JS_UI_MobileDevice, $asm, {});
	ss.initClass($JS_UI_MobileEventExtensions, $asm, {});
	ss.initClass($JS_UI_OrientationChangedEventArgs, $asm, {}, ss.EventArgs);
	ss.initEnum($JS_UI_TooltipDuration, $asm, { persistent: 0, default$1: 5000, short$1: 1000, long$1: 10000 });
	ss.initClass($JS_UI_TooltipExtensions, $asm, {});
	ss.initClass($JS_UI_TooltipOptions, $asm, {});
	ss.initClass($JS_UI_UIEnvironment, $asm, {});
	ss.initClass($JS_UI_UIEventExtensions, $asm, {});
	ss.initClass($JS_UI_UIEventExtensions$Desktop, $asm, {});
	ss.initClass($JS_UI_UIEventExtensions$Mobile, $asm, {});
	ss.initClass($JS_UI_UIUtils, $asm, {});
	ss.initClass($JS_UI_Controls_Control, $asm, {
		set_tooltip: function(value) {
			if ($JS_UI_UIEnvironment.get_isDesktopDevice()) {
				if (ss.isNullOrEmptyString(value)) {
					$JS_UI_TooltipExtensions.removeTooltip(this.element);
				}
				else {
					$JS_UI_TooltipExtensions.setTextTooltip(this.element, value, null, 5000, null);
				}
			}
			else {
				// On mobile devices the tooltip is displayed when tapping on screen which is
				// the same as activating the control. Thus the tooltip should not be displayed.
			}
		},
		get_isVisible: function() {
			return this.element.is(':visible');
		},
		set_isVisible: function(value) {
			if (value) {
				this.element.show();
			}
			else {
				this.element.hide();
			}
		},
		get_isEnabled: function() {
			return false === (this.element.hasClass('disabled') || ss.isValue(this.element.attr('disabled')));
		},
		set_isEnabled: function(value) {
			this.element.toggleClass('disabled', false === value);
			if (value) {
				this.element.removeAttr('disabled');
			}
			else {
				this.element.attr('disabled', 'disabled');
			}
		},
		remove: function() {
			if (ss.isValue(this.element)) {
				this.element.remove();
			}
		},
		dispose: function() {
		},
		focus: function() {
			this.element.focus();
		}
	}, null, [ss.IDisposable]);
	$JS_UI_Controls_Control.$ctor1.prototype = $JS_UI_Controls_Control.prototype;
	ss.initClass($JS_UI_Controls_ButtonBase, $asm, {
		get_isDefault: function() {
			return this.$_isDefault;
		},
		set_isDefault: function(value) {
			this.$_isDefault = value;
			this.element.toggleClass('default-button', this.$_isDefault);
		},
		add_click: function(value) {
			this.$2$ClickField = ss.delegateCombine(this.$2$ClickField, value);
		},
		remove_click: function(value) {
			this.$2$ClickField = ss.delegateRemove(this.$2$ClickField, value);
		},
		onClick: function(e) {
			JS.EventExtensions.fire(this.$2$ClickField, this, e);
		},
		$element_VirtualClick: function(e) {
			// Prevent parents from handling the event
			e.stopPropagation();
			e.preventDefault();
			if (false === this.get_isEnabled()) {
				return;
			}
			this.onClick(ss.EventArgs.Empty);
		}
	}, $JS_UI_Controls_Control, [ss.IDisposable]);
	ss.initClass($JS_UI_Controls_Button, $asm, {}, $JS_UI_Controls_ButtonBase, [ss.IDisposable]);
	$JS_UI_Controls_Button.$ctor1.prototype = $JS_UI_Controls_Button.$ctor2.prototype = $JS_UI_Controls_Button.prototype;
	ss.initClass($JS_UI_Controls_CheckBox, $asm, {
		add_checkChanged: function(value) {
			this.$2$CheckChangedField = ss.delegateCombine(this.$2$CheckChangedField, value);
		},
		remove_checkChanged: function(value) {
			this.$2$CheckChangedField = ss.delegateRemove(this.$2$CheckChangedField, value);
		},
		get_isChecked: function() {
			return this.element.hasClass('checked');
		},
		set_isChecked: function(value) {
			this.element.toggleClass('checked', value);
		},
		$element_Click: function(e) {
			// Prevent parents from handling the event
			e.stopPropagation();
			e.preventDefault();
			if (false === this.get_isEnabled()) {
				return;
			}
			this.element.toggleClass('checked');
			this.onCheckChanged(ss.EventArgs.Empty);
		},
		onCheckChanged: function(e) {
			JS.EventExtensions.fire(this.$2$CheckChangedField, this, e);
		}
	}, $JS_UI_Controls_Control, [ss.IDisposable]);
	$JS_UI_Controls_CheckBox.$ctor1.prototype = $JS_UI_Controls_CheckBox.$ctor2.prototype = $JS_UI_Controls_CheckBox.prototype;
	ss.initClass($JS_UI_Controls_ControlExtensions, $asm, {});
	ss.initClass($JS_UI_Controls_IconButton, $asm, {
		get_icon: function() {
			if (ss.isNullOrUndefined(this.$_icon)) {
				this.$_icon = new $JS_UI_Controls_IconControl.$ctor2($JS_UI_Controls_Control.op_Implicit(this));
			}
			return this.$_icon;
		}
	}, $JS_UI_Controls_ButtonBase, [ss.IDisposable]);
	$JS_UI_Controls_IconButton.$ctor1.prototype = $JS_UI_Controls_IconButton.$ctor2.prototype = $JS_UI_Controls_IconButton.prototype;
	ss.initClass($JS_UI_Controls_IconControl, $asm, {
		setIcon: function(name) {
			var classNameList = $JS_UI_jQueryExtensions.getClasses(this.element);
			for (var $t1 = 0; $t1 < classNameList.length; $t1++) {
				var item = classNameList[$t1];
				if (ss.startsWithString(item, 'icon-')) {
					// Remove the class
					this.element.removeClass(item);
				}
			}
			if (false === ss.isNullOrEmptyString(name)) {
				this.element.addClass('icon-' + name);
			}
		}
	}, $JS_UI_Controls_Control, [ss.IDisposable]);
	$JS_UI_Controls_IconControl.$ctor1.prototype = $JS_UI_Controls_IconControl.$ctor2.prototype = $JS_UI_Controls_IconControl.prototype;
	ss.initClass($JS_UI_Controls_Label, $asm, {}, $JS_UI_Controls_Control, [ss.IDisposable]);
	$JS_UI_Controls_Label.$ctor1.prototype = $JS_UI_Controls_Label.$ctor3.prototype = $JS_UI_Controls_Label.$ctor2.prototype = $JS_UI_Controls_Label.prototype;
	ss.initClass($JS_UI_Controls_ListBox, $asm, {
		get_items: function() {
			if (ss.isNullOrUndefined(this.$_items)) {
				this.$_items = new $JS_UI_Controls_ListItemCollection();
			}
			return this.$_items;
		},
		add_selectedItemsChanged: function(value) {
			this.$2$SelectedItemsChangedField = ss.delegateCombine(this.$2$SelectedItemsChangedField, value);
		},
		remove_selectedItemsChanged: function(value) {
			this.$2$SelectedItemsChangedField = ss.delegateRemove(this.$2$SelectedItemsChangedField, value);
		},
		onSelectedItemsChanged: function(e) {
			JS.EventExtensions.fire(this.$2$SelectedItemsChangedField, this, e);
		},
		get_selectedValue: function() {
			return Enumerable.from(this.get_items()).where(function(x) {
				return x.isSelected;
			}).select(function(x1) {
				return x1.value;
			}).firstOrDefault(null, ss.getDefaultValue(Object));
		},
		set_selectedValue: function(value) {
			if (ss.isNullOrUndefined(value)) {
				// Deselect all items
				this.clearSelection();
				return;
			}
			var $t1 = this.get_items().getEnumerator();
			try {
				while ($t1.moveNext()) {
					var item = $t1.current();
					if (ss.staticEquals(item.value, value)) {
						this.clearSelection();
						// Celar the selection only after a matching item has been found
						item.isSelected = true;
						return;
					}
				}
			}
			finally {
				$t1.dispose();
			}
			throw new ss.InvalidOperationException('No item exists for the specified value.');
		},
		get_selectedItem: function() {
			return Enumerable.from(this.get_items()).firstOrDefault(function(x) {
				return x.isSelected;
			}, ss.getDefaultValue($JS_UI_Controls_ListItem));
		},
		get_selectedValues: function() {
			return Enumerable.from(this.get_items()).where(function(x) {
				return x.isSelected;
			}).select(function(x1) {
				return x1.value;
			}).toArray();
		},
		get_selectedItems: function() {
			return Enumerable.from(this.get_items()).where(function(x) {
				return x.isSelected;
			}).toArray();
		},
		update: function() {
			this.element.empty();
			var $t1 = this.get_items().getEnumerator();
			try {
				while ($t1.moveNext()) {
					var item = $t1.current();
					var itemObj = $("<div class='" + ('item' || '') + "'></div>").appendTo(this.element);
					if (false === ss.isNullOrEmptyString(item.text)) {
						itemObj.text(item.text);
					}
					else if (false === ss.isNullOrEmptyString(item.html)) {
						itemObj.html(item.html);
					}
					if (false === ss.isNullOrEmptyString(item.cssClass)) {
						itemObj.addClass(item.cssClass);
					}
					if (item.isSelected) {
						itemObj.addClass('selected');
					}
					if (item.isDisabled) {
						itemObj.addClass('disabled');
					}
					itemObj.data('ListItem', item);
					// Associate the item with the element
					$JS_UI_UIEventExtensions.virtualClick(itemObj, ss.mkdel(this, this.$item_Click));
				}
			}
			finally {
				$t1.dispose();
			}
		},
		clearSelection: function() {
			var itemElementList = this.element.children('.selected');
			for (var k = 0; k < itemElementList.length; k++) {
				var itemObj = $(itemElementList[k]);
				var item = itemObj.data('ListItem');
				item.isSelected = false;
				itemObj.removeClass('selected');
			}
		},
		$item_Click: function(e) {
			var itemObj = $(e.target);
			var item = itemObj.data('ListItem');
			if (item.isDisabled) {
				return;
			}
			if (this.selectionMode === 0 && false === item.isSelected) {
				// Deselect any other selected item
				this.clearSelection();
			}
			item.isSelected = false === item.isSelected;
			itemObj.toggleClass('selected', item.isSelected);
			this.onSelectedItemsChanged(ss.EventArgs.Empty);
		}
	}, $JS_UI_Controls_Control, [ss.IDisposable]);
	$JS_UI_Controls_ListBox.$ctor1.prototype = $JS_UI_Controls_ListBox.prototype;
	ss.initClass($JS_UI_Controls_ListItem, $asm, {});
	ss.initClass($JS_UI_Controls_ListItemCollection, $asm, {
		indexOf: function(item) {
			return ss.indexOf(this.$_itemList, item);
		},
		insert: function(index, item) {
			ss.insert(this.$_itemList, index, item);
		},
		removeAt: function(index) {
			ss.removeAt(this.$_itemList, index);
		},
		get_item: function(index) {
			return this.$_itemList[index];
		},
		set_item: function(index, value) {
			this.$_itemList[index] = value;
		},
		add: function(item) {
			this.$_itemList.push(item);
		},
		clear: function() {
			ss.clear(this.$_itemList);
		},
		contains: function(item) {
			return ss.contains(this.$_itemList, item);
		},
		get_count: function() {
			return this.$_itemList.length;
		},
		remove: function(item) {
			var result = ss.remove(this.$_itemList, item);
			if (result) {
			}
			return result;
		},
		getEnumerator: function() {
			return ss.getEnumerator(this.$_itemList);
		}
	}, null, [ss.IEnumerable, ss.IEnumerable, ss.ICollection, ss.IList]);
	ss.initEnum($JS_UI_Controls_ListSelectionMode, $asm, { single: 0, multiple: 1 });
	ss.initClass($JS_UI_Controls_OldButton, $asm, {
		add_click: function(value) {
			this.$2$ClickField = ss.delegateCombine(this.$2$ClickField, value);
		},
		remove_click: function(value) {
			this.$2$ClickField = ss.delegateRemove(this.$2$ClickField, value);
		},
		onClick: function(e) {
			JS.EventExtensions.fire(this.$2$ClickField, this, e);
		},
		$element_Click: function(e) {
			// PRevent partents from handling the event
			e.stopPropagation();
			e.preventDefault();
			if (false === this.get_isEnabled()) {
				return;
			}
			this.onClick(ss.EventArgs.Empty);
		}
	}, $JS_UI_Controls_Control, [ss.IDisposable]);
	$JS_UI_Controls_OldButton.$ctor1.prototype = $JS_UI_Controls_OldButton.prototype;
	ss.initClass($JS_UI_Controls_ProgressBar, $asm, {
		get_value: function() {
			return this.$_value;
		},
		set_value: function(value) {
			if (value < 0 || value > 1) {
				throw new ss.ArgumentOutOfRangeException('value', 'Must be between 0 and 1.', null, value);
			}
			this.$_value = value;
			this.$updateBar();
		},
		$updateBar: function() {
			var width = Math.floor(this.$_value * 100).toString() + '%';
			this.$_bar.width(width);
		}
	}, $JS_UI_Controls_Control, [ss.IDisposable]);
	ss.initClass($JS_UI_Controls_TextBox, $asm, {
		add_textChanged: function(value) {
			this.$2$TextChangedField = ss.delegateCombine(this.$2$TextChangedField, value);
		},
		remove_textChanged: function(value) {
			this.$2$TextChangedField = ss.delegateRemove(this.$2$TextChangedField, value);
		},
		$element_Change: function(e) {
			this.onTextChanged(ss.EventArgs.Empty);
		},
		onTextChanged: function(e) {
			JS.EventExtensions.fire(this.$2$TextChangedField, this, e);
		}
	}, $JS_UI_Controls_Control, [ss.IDisposable]);
	$JS_UI_Controls_TextBox.$ctor1.prototype = $JS_UI_Controls_TextBox.prototype;
	ss.initClass($JS_UI_Controls_Toolbar, $asm, {
		dispose: function() {
			this.element.remove();
		},
		add: function(T) {
			return function(control) {
				return this.add$2(T).call(this, control, 0);
			};
		},
		add$2: function(T) {
			return function(control, position) {
				JS.ArgumentHelper.notNull(control, 'control');
				this.add$3(control.element, position);
				return control;
			};
		},
		add$1: function(element) {
			return this.add$3(element, 0);
		},
		add$3: function(element, position) {
			return this.add$4(element, position, 0);
		},
		add$4: function(element, position, verticalAlignment) {
			JS.ArgumentHelper.notNull(element, 'element');
			var cssClass = $JS_UI_Controls_Toolbar.$toolbarControlPositionCssClassList[position];
			element.addClass(cssClass);
			var verticalAlignmentCssClass = $JS_UI_Controls_Toolbar.$toolbarControlVerticalAlignmentCssClassList[verticalAlignment];
			if (false === ss.isNullOrEmptyString(verticalAlignmentCssClass)) {
				element.addClass(verticalAlignmentCssClass);
			}
			element.appendTo(this.element);
			return element;
		},
		clear: function() {
			this.element.empty();
		}
	}, $JS_UI_Controls_Control, [ss.IDisposable]);
	ss.initEnum($JS_UI_Controls_ToolbarControlPosition, $asm, { left: 0, right: 1, fill: 2 });
	ss.initEnum($JS_UI_Controls_VerticalAlignment, $asm, { none: 0, top: 1, center: 2, bottom: 3 });
	ss.initClass($JS_UI_Dialogs_Dialog, $asm, {
		get_element: function() {
			switch (this.state) {
				case 0: {
					throw new ss.InvalidOperationException('The dialog is not initialized.');
				}
				case 1:
				case 2: {
					return this.$_element;
				}
				case 3: {
					throw new ss.InvalidOperationException('The dialog has been closed.');
				}
				default: {
					throw new ss.InvalidOperationException('The element of the dialog cannot be access at this stage.');
				}
			}
		},
		get_containerElement: function() {
			switch (this.state) {
				case 0: {
					throw new ss.InvalidOperationException('The dialog is not initialized.');
				}
				case 1:
				case 2: {
					return this.$_containerElement;
				}
				case 3: {
					throw new ss.InvalidOperationException('The dialog has been closed.');
				}
				default: {
					throw new ss.InvalidOperationException('The element of the dialog cannot be access at this stage.');
				}
			}
		},
		requireOwnElement: function() {
			if (false === this.ownsElement) {
				throw new ss.InvalidOperationException('This operation requires that the dialog is created in code and not from an HTML element.');
			}
		},
		propertyChanged: function() {
			this.$_propertyChanged = true;
		},
		get_theme: function() {
			return this.$_theme;
		},
		set_theme: function(value) {
			if (this.$_theme !== value) {
				this.$_theme = value;
				this.propertyChanged();
			}
		},
		get_isModal: function() {
			return this.$_isModal;
		},
		set_isModal: function(value) {
			this.requireNotInitializedAndOwnElement();
			if (this.$_isModal !== value) {
				this.$_isModal = value;
				this.propertyChanged();
			}
		},
		get_isFullScreen: function() {
			return this.$_isFullScreen;
		},
		set_isFullScreen: function(value) {
			this.requireNotInitializedAndOwnElement();
			if (this.$_isFullScreen !== value) {
				this.$_isFullScreen = value;
				this.propertyChanged();
			}
		},
		get_cssClass: function() {
			return this.$_cssClass;
		},
		set_cssClass: function(value) {
			this.requireNotInitializedAndOwnElement();
			if (!ss.referenceEquals(this.$_cssClass, value)) {
				this.$_cssClass = value;
				this.propertyChanged();
			}
		},
		get_isVisible: function() {
			return this.$_isVisible;
		},
		set_isVisible: function(value) {
			if (this.$_isVisible !== value) {
				this.$_isVisible = value;
				this.onVisibilityChanged(ss.EventArgs.Empty);
			}
		},
		add_visibilityChanged: function(value) {
			this.$1$VisibilityChangedField = ss.delegateCombine(this.$1$VisibilityChangedField, value);
		},
		remove_visibilityChanged: function(value) {
			this.$1$VisibilityChangedField = ss.delegateRemove(this.$1$VisibilityChangedField, value);
		},
		onVisibilityChanged: function(e) {
			this.$log.trace('OnVisibilityChanged');
			JS.EventExtensions.fire(this.$1$VisibilityChangedField, this, e);
		},
		get_layout: function() {
			// Layouts accesses the element of the dialog and it is not accessible until
			// the dialog is initialized
			this.requireInitialized();
			return this.$_layout;
		},
		set_layout: function(value) {
			// Layouts accesses the element of the dialog and it is not accessible until
			// the dialog is initialized
			this.requireInitialized();
			this.$_layout = value;
		},
		get_dialogResult: function() {
			return this.$_dialogResult;
		},
		set_dialogResult: function(value) {
			// CAUTION This property is set to "null" by the "Hide()" method
			// if [_showDialogTaskCompletionSource != null]
			if (ss.isNullOrUndefined(this.$_showDialogTaskCompletionSource)) {
				throw new ss.InvalidOperationException("The dialog was not displayed using the 'ShowDialog' method.");
			}
			// The order of operation is important:
			// - The caller of the dialog can use the "Hidden" event handler to check the value of the dialog result
			// - The dialog must be reset before it is hidden since "TaskCompletionSource" calls the task 
			//   callback immediately.
			this.$_dialogResult = value;
			this.$privateHide();
			var taskCompletionSource = this.$_showDialogTaskCompletionSource;
			this.$_showDialogTaskCompletionSource = null;
			taskCompletionSource.setResult(value);
		},
		show: function() {
			if (ss.isValue(this.$_showDialogTaskCompletionSource)) {
				throw new ss.InvalidOperationException("The dialog is already displayed using the 'ShowDialog' method. It must be closed before it can be shown again.");
			}
			this.$privateShow();
		},
		showDialog: function() {
			if (ss.isValue(this.$_showDialogTaskCompletionSource)) {
				throw new ss.InvalidOperationException("The dialog is already displayed using the 'ShowDialog' method.");
			}
			this.$privateShow();
			this.$_dialogResult = null;
			this.$_showDialogTaskCompletionSource = new ss.TaskCompletionSource();
			return this.$_showDialogTaskCompletionSource.task;
		},
		$privateShow: function() {
			this.ensureLoaded();
			JS.Diagnostics.Debug.assert(this.state === 2);
			if (false === this.get_isVisible()) {
				if (this.get_isModal() && $JS_UI_UIEnvironment.isMobileDevice) {
					// Prevent the content behind the dialog from being scrolled.
					// This happens on iOS 5 and later when the CSS property "-webkit-overflow-scrolling: touch;"
					// is applied to a DIV behind the dialog.
					// When this CSS property is applied DIVs behind the dialog receive a scroll event even if
					// the dialog is modal and thus blocks mouse events. This is a widely discussed bug in iOS Safari
					// https://github.com/scottjehl/Device-Bugs/issues/14
					// http://stackoverflow.com/questions/10904059/webkit-overflow-scrolling-touch-z-index-bug-on-chrome-for-mac-osx
					this.$_fastScrollingDisabled = $JS_UI_UIEnvironment.disableFastScrolling();
					// The next code is required regardless of fast scrolling on order to prevent
					// scrolling of parent DIV elements.
					// Prevent the content behind the dialog from being scrolled.
					// This happens on iOS 5 and later when the CSS property "-webkit-overflow-scrolling: touch;"
					// is applied to a DIV behind the dialog.
					// When this CSS property is applied DIVs behind the dialog receive a scroll event even if
					// the dialog is modal and thus blocks mouse events. This is a widely discussed bug in iOS Safari
					// https://github.com/scottjehl/Device-Bugs/issues/14
					// http://stackoverflow.com/questions/10904059/webkit-overflow-scrolling-touch-z-index-bug-on-chrome-for-mac-osx
					$JS_UI_MobileEventExtensions.touchMove$1(this.$_containerElement, 'dialog-internal', function(e) {
						e.preventDefault();
					});
					// Enable the content of the dialog itself to be scrolled by preventing
					// the container element from blocking the event.
					// Note that if the content of the dialog is not scrollable - the background DIV will still be
					// scrolled. However, visible UI glitches are far less serious than if scrolling is not blocked.
					$JS_UI_MobileEventExtensions.touchMove$1(this.$_element, 'dialog-internal', function(e1) {
						e1.stopPropagation();
					});
				}
				this.get_containerElement().css('z-index', ++$JS_UI_Dialogs_Dialog.$dialogZIndex);
				// Show the dialog above all other dialogs
				this.get_containerElement().css('display', '');
				this.set_isVisible(true);
			}
		},
		hide: function() {
			if (ss.isValue(this.$_showDialogTaskCompletionSource)) {
				// Setting the dialog result will hide the dialog
				this.set_dialogResult(null);
			}
			else {
				this.$privateHide();
			}
		},
		$privateHide: function() {
			if (this.state === 2 && this.get_isVisible()) {
				if (ss.isValue(this.$_fastScrollingDisabled)) {
					this.$_fastScrollingDisabled.dispose();
					this.$_fastScrollingDisabled = null;
				}
				if (this.get_isModal() && $JS_UI_UIEnvironment.isMobileDevice) {
					// The next code is required regardless of fast scrolling on order to prevent
					// scrolling of parent DIV elements.
					// Prevent the content behind the dialog from being scrolled.
					// This happens on iOS 5 and later when the CSS property "-webkit-overflow-scrolling: touch;"
					// is applied to a DIV behind the dialog.
					// When this CSS property is applied DIVs behind the dialog receive a scroll event even if
					// the dialog is modal and thus blocks mouse events. This is a widely discussed bug in iOS Safari
					// https://github.com/scottjehl/Device-Bugs/issues/14
					// http://stackoverflow.com/questions/10904059/webkit-overflow-scrolling-touch-z-index-bug-on-chrome-for-mac-osx
					$JS_UI_MobileEventExtensions.unbindTouchMove(this.$_containerElement, 'dialog-internal');
					// Enable the content of the dialog itself to be scrolled by preventing
					// the container element from blocking the event.
					$JS_UI_MobileEventExtensions.unbindTouchMove(this.$_element, 'dialog-internal');
				}
				this.get_containerElement().css('display', 'none');
				this.set_isVisible(false);
			}
		},
		close: function() {
			if (this.state === 0) {
				this.state = 3;
			}
			else if (this.state !== 3) {
				// Hide the dialog first in order to fire all expected events and call all expected methods
				this.hide();
				try {
					this.onClose();
				}
				finally {
					if (this.ownsElement) {
						this.get_containerElement().remove();
					}
					else {
						this.get_element().off('keydown.dialog');
					}
				}
				this.state = 3;
			}
		},
		requireInitialized: function() {
			if (this.state < 1) {
				throw new ss.InvalidOperationException('The operation cannot be performed after the dialog is initialized.');
			}
			this.requireNotClosed();
		},
		requireNotInitialized: function() {
			if (this.state >= 1) {
				throw new ss.InvalidOperationException('The operation cannot be performed after the dialog is initialized.');
			}
		},
		requireNotLoaded: function() {
			if (this.state >= 2) {
				throw new ss.InvalidOperationException('The operation cannot be performed after the dialog is loaded.');
			}
		},
		requireNotClosed: function() {
			if (this.state >= 3) {
				throw new ss.InvalidOperationException('The operation cannot be performed after the dialog is closed.');
			}
		},
		requireNotInitializedAndOwnElement: function() {
			this.requireNotInitialized();
			this.requireOwnElement();
		},
		ensureLoaded: function() {
			this.requireNotClosed();
			if (this.state === 0) {
				this.onInit();
				// This phase is executed only if the dialog owns the element i.e. it was not passed
				// to the constructor. Therefore, the element must be created at this point.
				this.$_containerElement = this.create();
				this.$_element = this.$_containerElement.children('.dialog');
				this.$_element.on('keydown.dialog', ss.mkdel(this, this.$element_Keydown));
				this.state = 1;
			}
			if (this.state === 1) {
				// Load the dialog
				this.onLoad();
				this.state = 2;
				this.$_propertyChanged = false;
			}
			if (this.$_propertyChanged) {
				this.onPropertiesChanged();
				this.$_propertyChanged = false;
			}
		},
		create: function() {
			this.$log.trace('Create');
			var element = $JS_UI_jQueryExtensions.addClass($("<div class='" + ('dialog' || '') + "'></div>"), this.get_theme() !== '', 'theme-' + this.get_theme().toString()).addClass(ss.coalesce(this.get_cssClass(), ''));
			return $JS_UI_jQueryExtensions.addClass($JS_UI_jQueryExtensions.addClass($("<div class='" + ('dialog-container' || '') + "'></div>"), this.get_isModal(), 'modal'), this.get_isFullScreen(), 'full-screen').appendTo($JS_UI_UIEnvironment.get_dialogManager().dialogLayerElement).css('display', 'none').append(element);
			// Add the dialog's element
		},
		onPropertiesChanged: function() {
			this.$log.trace('OnPropertiesChanged');
		},
		onInit: function() {
			this.$log.trace('OnInit');
		},
		onLoad: function() {
			this.$log.trace('OnLoad');
		},
		onClose: function() {
			this.$log.trace('OnClose');
		},
		$element_Keydown: function(e) {
			if (e.which === 13) {
				this.onKeyEnter();
			}
		},
		onKeyEnter: function() {
			// Click the default button if any
			this.get_element().find('.default-button').first().click();
		}
	});
	$JS_UI_Dialogs_Dialog.$ctor1.prototype = $JS_UI_Dialogs_Dialog.prototype;
	ss.initClass($JS_UI_Dialogs_DefaultDialog, $asm, {
		get_layout$1: function() {
			if (ss.isNullOrUndefined(this.get_layout())) {
				this.set_layout(new $JS_UI_Dialogs_DefaultDialogLayout(this));
			}
			return ss.cast(this.get_layout(), $JS_UI_Dialogs_DefaultDialogLayout);
		},
		onLoad: function() {
			$JS_UI_Dialogs_Dialog.prototype.onLoad.call(this);
			if (ss.isValue(this.get_layout$1().get_header().get_closeButton())) {
				this.get_layout$1().get_header().get_closeButton().add_click(ss.mkdel(this, this.$closeButton_Click));
			}
		},
		onCloseButtonClicked: function(e) {
		},
		$closeButton_Click: function(sender, e) {
			var args = new ss.CancelEventArgs();
			this.onCloseButtonClicked(args);
			if (args.cancel) {
				return;
			}
			// Hide the dialog
			this.hide();
		}
	}, $JS_UI_Dialogs_Dialog);
	$JS_UI_Dialogs_DefaultDialog.$ctor1.prototype = $JS_UI_Dialogs_DefaultDialog.prototype;
	ss.initClass($JS_UI_Dialogs_ConfirmationDialog, $asm, {
		onInit: function() {
			$JS_UI_Dialogs_Dialog.prototype.onInit.call(this);
			this.set_theme('black');
			this.set_cssClass('confirmation');
			this.set_isModal(true);
		},
		onLoad: function() {
			$JS_UI_Dialogs_DefaultDialog.prototype.onLoad.call(this);
			this.get_layout$1().get_header().get_icon().setIcon('confirmation');
			var $t1 = new $JS_UI_Controls_Button.$ctor1('Yes');
			$t1.set_isDefault(true);
			this.$buttonConfirm = $JS_UI_Controls_ControlExtensions.appendTo$1($JS_UI_Controls_Button).call(null, $t1, this.get_layout$1().get_footer());
			this.$buttonCancel = $JS_UI_Controls_ControlExtensions.appendTo$1($JS_UI_Controls_Button).call(null, new $JS_UI_Controls_Button.$ctor1('No'), this.get_layout$1().get_footer());
			this.$buttonConfirm.add_click(ss.mkdel(this, this.$buttonConfirm_Click));
			this.$buttonCancel.add_click(ss.mkdel(this, this.$buttonCancel_Click));
		},
		$buttonConfirm_Click: function(sender, e) {
			this.set_dialogResult(true);
		},
		$buttonCancel_Click: function(sender, e) {
			this.set_dialogResult(false);
		},
		$privateShow$1: function(title, message, html) {
			// The dialog must be loaded before any controls can be accessed
			this.ensureLoaded();
			message = ss.coalesce(message, '');
			this.get_layout$1().get_header().set_title(title);
			if (false === html) {
				message = $JS_UI_UIUtils.textToHtml(message);
			}
			this.get_layout$1().get_content().html(message);
			return this.showDialog();
		}
	}, $JS_UI_Dialogs_DefaultDialog);
	ss.initClass($JS_UI_Dialogs_DialogLayout, $asm, {});
	ss.initClass($JS_UI_Dialogs_DefaultDialogLayout, $asm, {
		get_header: function() {
			if (ss.isNullOrUndefined(this.$_header)) {
				if (this.owner.ownsElement) {
					this.$_header = { item1: new $JS_UI_Dialogs_DefaultDialogLayout$DialogHeader($("<div class='" + ('header' || '') + "'></div>").appendTo(this.owner.get_element()), true) };
				}
				else {
					var headerElement = $JS_UI_jQueryExtensions.existing(this.owner.get_element().children('.header'));
					this.$_header = { item1: (ss.isNullOrUndefined(headerElement) ? null : new $JS_UI_Dialogs_DefaultDialogLayout$DialogHeader(headerElement, false)) };
				}
			}
			return this.$_header.item1;
		},
		get_footer: function() {
			if (ss.isNullOrUndefined(this.$_footer)) {
				if (this.owner.ownsElement) {
					this.$_footer = { item1: $("<div class='" + ('footer' || '') + "'></div>").appendTo(this.owner.get_element()) };
				}
				else {
					this.$_footer = { item1: $JS_UI_jQueryExtensions.existing(this.owner.get_element().children('.footer')) };
				}
			}
			return this.$_footer.item1;
		},
		get_content: function() {
			if (ss.isNullOrUndefined(this.$_content)) {
				if (this.owner.ownsElement) {
					this.$_content = { item1: $("<div class='" + ('content' || '') + "'></div>").appendTo(this.owner.get_element()) };
				}
				else {
					this.$_content = { item1: $JS_UI_jQueryExtensions.existing(this.owner.get_element().children('.content')) };
				}
			}
			return this.$_content.item1;
		}
	}, $JS_UI_Dialogs_DialogLayout);
	ss.initClass($JS_UI_Dialogs_DefaultDialogLayout$DialogHeader, $asm, {
		get_titleElement: function() {
			if (ss.isNullOrUndefined(this.$_titleElement)) {
				if (this.$_ownsElement) {
					this.$_titleElement = { item1: $("<div class='" + ('fill' || '') + "'></div>").appendTo(this.element) };
				}
				else {
					this.$_titleElement = { item1: $JS_UI_jQueryExtensions.existing(this.element.children('.fill')) };
				}
			}
			return this.$_titleElement.item1;
		},
		get_title: function() {
			if (ss.isNullOrUndefined(this.get_titleElement())) {
				return '';
			}
			else {
				return this.get_titleElement().text();
			}
		},
		set_title: function(value) {
			if (ss.isNullOrUndefined(this.get_titleElement())) {
				throw new ss.InvalidOperationException('The dialog does not have a title control.');
			}
			else {
				this.get_titleElement().text(ss.coalesce(value, ''));
			}
		},
		get_icon: function() {
			if (ss.isNullOrUndefined(this.$_icon)) {
				if (this.$_ownsElement) {
					var control = $JS_UI_Controls_ControlExtensions.appendTo$1($JS_UI_Controls_IconControl).call(null, $JS_UI_Controls_ControlExtensions.addClass($JS_UI_Controls_IconControl).call(null, new $JS_UI_Controls_IconControl(), 'left'), this.element);
					this.$_icon = { item1: control };
				}
				else {
					var controlElement = $JS_UI_jQueryExtensions.existing(this.element.children('.left'));
					this.$_icon = { item1: (ss.isNullOrUndefined(controlElement) ? null : new $JS_UI_Controls_IconControl.$ctor2(controlElement)) };
				}
			}
			return this.$_icon.item1;
		},
		get_closeButton: function() {
			if (ss.isNullOrUndefined(this.$_closeButton)) {
				if (this.$_ownsElement) {
					var control = $JS_UI_Controls_ControlExtensions.appendTo$1($JS_UI_Controls_IconButton).call(null, $JS_UI_Controls_ControlExtensions.addClass($JS_UI_Controls_IconButton).call(null, new $JS_UI_Controls_IconButton.$ctor1('close-dialog'), 'right'), this.element);
					this.$_closeButton = { item1: control };
				}
				else {
					var controlElement = $JS_UI_jQueryExtensions.existing(this.element.children('.right'));
					this.$_closeButton = { item1: (ss.isNullOrUndefined(controlElement) ? null : new $JS_UI_Controls_IconButton.$ctor2(controlElement)) };
				}
			}
			return this.$_closeButton.item1;
		}
	});
	ss.initClass($JS_UI_Dialogs_DialogManager, $asm, {
		$showDialog: function(dialog) {
			JS.ArgumentHelper.notNull(dialog, 'dialog');
			if (ss.isValue(this.currentDialog)) {
				// Hide the current dialog through the "Hide" method in order to execute all the
				// required events and methods
				this.currentDialog.hide();
			}
			JS.Diagnostics.Debug.assert$1(ss.isNullOrUndefined(this.currentDialog), 'A current dialog exists while there should be none.');
			this.currentDialog = dialog;
			this.currentDialog.get_element().css('display', '');
			this.dialogLayerElement.css('display', '');
		},
		$hideDialog: function(dialog) {
			JS.ArgumentHelper.notNull(dialog, 'dialog');
			if (ss.referenceEquals(dialog, this.currentDialog)) {
				this.dialogLayerElement.css('display', 'none');
				this.currentDialog.get_element().css('display', 'none');
				this.currentDialog = null;
			}
		}
	});
	ss.initEnum($JS_UI_Dialogs_DialogTheme, $asm, { none: '', black: 'black', cyan: 'cyan' }, true);
	ss.initClass($JS_UI_Dialogs_MessageDialog, $asm, {
		onInit: function() {
			$JS_UI_Dialogs_Dialog.prototype.onInit.call(this);
			this.set_theme('black');
			this.set_cssClass('message');
			this.set_isModal(true);
		},
		onLoad: function() {
			$JS_UI_Dialogs_DefaultDialog.prototype.onLoad.call(this);
			this.get_layout$1().get_header().get_icon().setIcon('message-info');
			var $t1 = new $JS_UI_Controls_Button.$ctor1('OK');
			$t1.set_isDefault(true);
			this.$buttonOK = $JS_UI_Controls_ControlExtensions.appendTo$1($JS_UI_Controls_Button).call(null, $t1, this.get_layout$1().get_footer());
			this.$buttonOK.add_click(ss.mkdel(this, this.$buttonOK_Click));
		},
		$buttonOK_Click: function(sender, e) {
			this.set_dialogResult(true);
		},
		$privateShow$1: function(icon, title, message, html) {
			// The dialog must be loaded before any controls can be accessed
			this.ensureLoaded();
			message = ss.coalesce(message, '');
			this.get_layout$1().get_header().set_title(title);
			if (false === html) {
				message = $JS_UI_UIUtils.textToHtml(message);
			}
			this.get_layout$1().get_content().html(message);
			var iconName;
			switch (icon) {
				case 1: {
					iconName = 'message-error';
					break;
				}
				default: {
					iconName = 'message-info';
					break;
				}
			}
			this.get_layout$1().get_header().get_icon().setIcon(iconName);
			return this.showDialog();
		}
	}, $JS_UI_Dialogs_DefaultDialog);
	ss.initEnum($JS_UI_Dialogs_MessageDialogIcon, $asm, { default$1: 0, info: 0, error: 1 });
	ss.initClass($JS_UI_Dialogs_TooltipDialog, $asm, {
		onInit: function() {
			$JS_UI_Dialogs_Dialog.prototype.onInit.call(this);
			this.set_theme('black');
			this.set_cssClass('tooltip');
			this.set_isModal(true);
		},
		onLoad: function() {
			$JS_UI_Dialogs_DefaultDialog.prototype.onLoad.call(this);
			this.get_layout$1().get_header().get_icon().setIcon('tooltip');
			this.$_panelTooltipContent = $('<div></div>').appendTo(this.get_layout$1().get_content());
		},
		show$1: function() {
			throw new ss.InvalidOperationException('This method cannot be called directly. Use some of the overloads instead.');
		},
		show$2: function(content) {
			this.show$4(null, content, null);
		},
		show$3: function(title, content) {
			this.show$4(title, content, null);
		},
		show$4: function(title, content, cssClass) {
			// Ensure that the dialog is loaded prior to accessing any properties.
			// Some properties can only be accessed after the dialog is loaded.
			this.ensureLoaded();
			this.get_layout$1().get_header().set_title(title);
			this.$_panelTooltipContent.html(ss.coalesce(content, ''));
			this.$_panelTooltipContent.removeClass();
			if (false === ss.isNullOrEmptyString(cssClass)) {
				this.$_panelTooltipContent.addClass(cssClass);
			}
			this.show();
		}
	}, $JS_UI_Dialogs_DefaultDialog);
	ss.initClass($JS_UI_Windows_WindowLayout, $asm, {});
	ss.initClass($JS_UI_Windows_HcfWindowLayout, $asm, {
		get_header: function() {
			if (ss.isNullOrUndefined(this.$_header)) {
				this.$_header = $("<div class='header'></div>").appendTo(this.window.get_element());
			}
			return this.$_header;
		},
		get_footer: function() {
			if (ss.isNullOrUndefined(this.$_footer)) {
				this.$_footer = $("<div class='footer'></div>").appendTo(this.window.get_element());
			}
			return this.$_footer;
		},
		get_content: function() {
			if (ss.isNullOrUndefined(this.$_content)) {
				this.$_content = $("<div class='content'></div>").appendTo(this.window.get_element());
			}
			return this.$_content;
		}
	}, $JS_UI_Windows_WindowLayout);
	ss.initClass($JS_UI_Windows_Window, $asm, {
		get_element: function() {
			switch (this.state) {
				case 0: {
					throw new ss.InvalidOperationException('The window is not initialized.');
				}
				case 1:
				case 2: {
					JS.Diagnostics.Debug.assert$1(ss.isValue(this.$handle), 'The handle of the window is not set.');
					return this.$handle.$element;
				}
				case 3: {
					throw new ss.InvalidOperationException('The window has been closed.');
				}
				default: {
					throw new ss.InvalidOperationException('The element of the window cannot be access at this stage.');
				}
			}
		},
		get_visualState: function() {
			return this.$_visualState;
		},
		set_visualState: function(value) {
			if (this.$_visualState !== value) {
				var oldVisualState = this.$_visualState;
				this.$_visualState = value;
				if (oldVisualState === 1) {
					// The window is restored or maximized
					// The visual state of a window can be changed only while it is displayed,
					// therefore it is safe to trigger the event.
					this.onContentVisibilityChanged(ss.EventArgs.Empty);
				}
				else if (value === 1) {
					// The window is minimized
					// The visual state of a window can be changed only while it is displayed,
					// therefore it is safe to trigger the event.
					this.onContentVisibilityChanged(ss.EventArgs.Empty);
				}
			}
		},
		add_minimized: function(value) {
			this.$1$MinimizedField = ss.delegateCombine(this.$1$MinimizedField, value);
		},
		remove_minimized: function(value) {
			this.$1$MinimizedField = ss.delegateRemove(this.$1$MinimizedField, value);
		},
		onMinimized: function(e) {
			this.$log.trace('OnMinimized');
			this.set_visualState(1);
			JS.EventExtensions.fire(this.$1$MinimizedField, this, e);
		},
		add_maximized: function(value) {
			this.$1$MaximizedField = ss.delegateCombine(this.$1$MaximizedField, value);
		},
		remove_maximized: function(value) {
			this.$1$MaximizedField = ss.delegateRemove(this.$1$MaximizedField, value);
		},
		onMaximized: function(e) {
			this.$log.trace('OnMaximized');
			this.set_visualState(2);
			JS.EventExtensions.fire(this.$1$MaximizedField, this, e);
			// This also resizes the dialog
			this.onResized(e);
		},
		add_collapsed: function(value) {
			this.$1$CollapsedField = ss.delegateCombine(this.$1$CollapsedField, value);
		},
		remove_collapsed: function(value) {
			this.$1$CollapsedField = ss.delegateRemove(this.$1$CollapsedField, value);
		},
		onCollapsed: function(e) {
			this.$log.trace('OnCollapsed');
			// Consider the same as minimized
			this.set_visualState(1);
			JS.EventExtensions.fire(this.$1$CollapsedField, this, e);
		},
		add_restored: function(value) {
			this.$1$RestoredField = ss.delegateCombine(this.$1$RestoredField, value);
		},
		remove_restored: function(value) {
			this.$1$RestoredField = ss.delegateRemove(this.$1$RestoredField, value);
		},
		onRestored: function(e) {
			this.$log.trace('OnRestored');
			this.set_visualState(0);
			JS.EventExtensions.fire(this.$1$RestoredField, this, e);
			// This also resizes the dialog
			this.onResized(e);
		},
		add_resized: function(value) {
			this.$1$ResizedField = ss.delegateCombine(this.$1$ResizedField, value);
		},
		remove_resized: function(value) {
			this.$1$ResizedField = ss.delegateRemove(this.$1$ResizedField, value);
		},
		onResized: function(e) {
			this.$log.trace('OnResized');
			JS.EventExtensions.fire(this.$1$ResizedField, this, e);
		},
		get_isModal: function() {
			return this.$_isModal;
		},
		set_isModal: function(value) {
			if (this.$_isModal !== value) {
				this.$_isModal = value;
				this.$_propertiesChanged = true;
			}
		},
		get_flags: function() {
			return this.$_flags;
		},
		set_flags: function(value) {
			if (this.$_flags !== value) {
				this.$_flags = value;
				this.$_propertiesChanged = true;
			}
		},
		get_title: function() {
			return this.$_title;
		},
		set_title: function(value) {
			if (!ss.referenceEquals(this.$_title, value)) {
				this.$_title = value;
				this.$_propertiesChanged = true;
			}
		},
		get_cssClass: function() {
			return this.$_cssClass;
		},
		set_cssClass: function(value) {
			if (!ss.referenceEquals(this.$_cssClass, value)) {
				this.$_cssClass = value;
				this.$_propertiesChanged = true;
			}
		},
		get_width: function() {
			return this.$_width;
		},
		set_width: function(value) {
			if (ss.isValue(value) && ss.Nullable$1.le(value, 0)) {
				throw new ss.ArgumentOutOfRangeException('value', 'Must be a positive number.', null, value);
			}
			this.$_width = value;
		},
		get_height: function() {
			return this.$_height;
		},
		set_height: function(value) {
			if (ss.isValue(value) && ss.Nullable$1.le(value, 0)) {
				throw new ss.ArgumentOutOfRangeException('value', 'Must be a positive number.', null, value);
			}
			this.$_height = value;
		},
		setSize: function(width, height) {
			this.set_width(width);
			this.set_height(height);
		},
		get_isVisible: function() {
			return this.$_isVisible;
		},
		set_isVisible: function(value) {
			if (this.$_isVisible !== value) {
				this.$_isVisible = value;
				this.onVisibilityChanged(ss.EventArgs.Empty);
				if (this.get_visualState() === 1) {
					// The content remains invisible regardless of if the window is shown or hidden
				}
				else {
					this.onContentVisibilityChanged(ss.EventArgs.Empty);
				}
			}
		},
		add_visibilityChanged: function(value) {
			this.$1$VisibilityChangedField = ss.delegateCombine(this.$1$VisibilityChangedField, value);
		},
		remove_visibilityChanged: function(value) {
			this.$1$VisibilityChangedField = ss.delegateRemove(this.$1$VisibilityChangedField, value);
		},
		onVisibilityChanged: function(e) {
			this.$log.trace('OnVisibilityChanged');
			JS.EventExtensions.fire(this.$1$VisibilityChangedField, this, e);
		},
		get_isContentVisible: function() {
			return this.get_isVisible() && this.get_visualState() !== 1;
		},
		add_contentVisibilityChanged: function(value) {
			this.$1$ContentVisibilityChangedField = ss.delegateCombine(this.$1$ContentVisibilityChangedField, value);
		},
		remove_contentVisibilityChanged: function(value) {
			this.$1$ContentVisibilityChangedField = ss.delegateRemove(this.$1$ContentVisibilityChangedField, value);
		},
		onContentVisibilityChanged: function(e) {
			this.$log.trace('OnContentVisibilityChanged');
			JS.EventExtensions.fire(this.$1$ContentVisibilityChangedField, this, e);
		},
		show: function() {
			this.$ensureLoaded();
			if (this.state === 2) {
				this.$handle.$show();
				this.set_isVisible(true);
			}
		},
		hide: function() {
			if (this.state === 2) {
				this.$handle.$hide();
				this.set_isVisible(false);
			}
		},
		focus: function() {
			if (this.state === 2) {
				this.$handle.$focus();
			}
		},
		close: function() {
			if (this.state === 0) {
				this.state = 3;
			}
			else if (this.state !== 3) {
				try {
					this.onClose();
				}
				finally {
					$JS_UI_Windows_WindowRenderer.destroy(this);
				}
				this.state = 3;
				$JS_UI_UIEnvironment.get_windowManager().$remove(this);
			}
		},
		$ensureLoaded: function() {
			if (this.state === 0) {
				this.onInit();
				$JS_UI_Windows_WindowRenderer.create(this);
				this.state = 1;
			}
			// Register the window with the window manager
			if (ss.isValue(this.$_key)) {
				$JS_UI_UIEnvironment.get_windowManager().$add(this.$_key, this);
			}
			if (this.state === 1) {
				// Load the window
				this.onLoad();
				this.state = 2;
				this.$_propertiesChanged = false;
			}
			if (this.$_propertiesChanged) {
				$JS_UI_Windows_WindowRenderer.update(this);
			}
		},
		onInit: function() {
			this.$log.trace('OnInit');
		},
		onLoad: function() {
			this.$log.trace('OnLoad');
		},
		onClose: function() {
			this.$log.trace('OnClose');
		}
	});
	$JS_UI_Windows_Window.$ctor1.prototype = $JS_UI_Windows_Window.prototype;
	ss.initClass($JS_UI_Windows_WindowExtensions, $asm, {});
	ss.initEnum($JS_UI_Windows_WindowFlags, $asm, { none: 0, canResize: 1, canMove: 2, canMinimize: 4, canMaximize: 8, closeOnEscape: 16, canClose: 32, dialog: 50, window: 47 });
	ss.initClass($JS_UI_Windows_WindowManager, $asm, {
		get_windows: function() {
			return this.$_windowDict;
		},
		getWindow: function(TWindow) {
			return function(key) {
				JS.ArgumentHelper.notNull(key, 'key');
				var result = {};
				this.$_windowDict.tryGetValue($JS_UI_Windows_WindowManager.createKey(TWindow, key), result);
				return ss.cast(result.$, TWindow);
			};
		},
		$add: function(key, window) {
			JS.ArgumentHelper.notNull(key, 'key');
			JS.ArgumentHelper.notNull(window, 'window');
			if (this.$_mode === 1) {
				// Close all windows before adding the new one
				this.closeAll();
			}
			this.$_windowDict.add($JS_UI_Windows_WindowManager.createKey(ss.getInstanceType(window), key), window);
		},
		$remove: function(window) {
			JS.ArgumentHelper.notNull(window, 'window');
			var $t1 = this.$_windowDict.getEnumerator();
			try {
				while ($t1.moveNext()) {
					var entry = $t1.current();
					if (ss.referenceEquals(entry.value, window)) {
						this.$_windowDict.remove(entry.key);
						break;
					}
				}
			}
			finally {
				$t1.dispose();
			}
		},
		$remove$1: function(TWindow) {
			return function(key) {
				JS.ArgumentHelper.notNull(key, 'key');
				this.$_windowDict.remove($JS_UI_Windows_WindowManager.createKey(TWindow, key));
			};
		},
		closeAll: function() {
			var $t1 = Enumerable.from(this.$_windowDict.get_values()).toArray();
			for (var $t2 = 0; $t2 < $t1.length; $t2++) {
				var item = $t1[$t2];
				// A window is automatically removed when it is closed
				item.close();
			}
		}
	});
	ss.initClass($JS_UI_Windows_WindowManagerExtensions, $asm, {});
	ss.initEnum($JS_UI_Windows_WindowManagerMode, $asm, { multipleWindows: 0, singleWindow: 1 });
	ss.initClass($JS_UI_Windows_WindowRenderer, $asm, {});
	ss.initEnum($JS_UI_Windows_WindowState, $asm, { none: 0, initialized: 1, loaded: 2, closed: 3 });
	ss.initEnum($JS_UI_Windows_WindowVisualState, $asm, { normal: 0, minimized: 1, maximized: 2 });
	ss.setMetadata($JS_UI_Windows_WindowFlags, { enumFlags: true });
	(function() {
		$JS_$UI_UIEnvironment$NopDisposable.$instance = new $JS_$UI_UIEnvironment$NopDisposable();
	})();
	(function() {
		$JS_UI_UIEnvironment.$_windowManager = null;
		$JS_UI_UIEnvironment.$_dialogManager = null;
		$JS_UI_UIEnvironment.isMobileDevice = false;
	})();
	(function() {
		$JS_UI_MobileDevice.$1$OrientationChangedField = null;
		$JS_UI_MobileDevice.$1$ResizedField = null;
		$(window).on('orientationchange', function(e) {
			$JS_UI_MobileDevice.$onOrientationChanged($JS_UI_MobileDevice.get_orientation());
		});
		$(window).on('resize', function(e1) {
			$JS_UI_MobileDevice.$onResized();
		});
	})();
	(function() {
		$JS_UI_Dialogs_Dialog.$dialogZIndex = 0;
	})();
	(function() {
		$JS_UI_TooltipOptions.default$1 = $JS_UI_TooltipOptions.$ctor();
	})();
	(function() {
		$JS_UI_UIEventExtensions.$_eventProvider = null;
	})();
	(function() {
		$JS_UI_TooltipExtensions.$_service = null;
	})();
	(function() {
		$JS_UI_Controls_Toolbar.$toolbarControlPositionCssClassList = ['left', 'right', 'fill'];
		$JS_UI_Controls_Toolbar.$toolbarControlVerticalAlignmentCssClassList = [null, 'v-top', 'v-center', 'v-bottom'];
	})();
	(function() {
		$JS_UI_Dialogs_ConfirmationDialog.$_instance = null;
	})();
	(function() {
		$JS_UI_Dialogs_MessageDialog.$_instance = null;
	})();
	(function() {
		$JS_UI_Windows_WindowRenderer.$_renderer = null;
	})();
})();
