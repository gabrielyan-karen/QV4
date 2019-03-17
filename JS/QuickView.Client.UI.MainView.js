(function() {
	'use strict';
	var $asm = {};
	global.JS = global.JS || {};
	global.JS.UI = global.JS.UI || {};
	global.QuickView = global.QuickView || {};
	global.QuickView.Client = global.QuickView.Client || {};
	global.QuickView.Client.UI = global.QuickView.Client.UI || {};
	global.QuickView.Client.UI.MainView = global.QuickView.Client.UI.MainView || {};
	global.QuickView.Client.UI.MainView.Gfx = global.QuickView.Client.UI.MainView.Gfx || {};
	global.QuickView.Client.UI.MainView.Grid = global.QuickView.Client.UI.MainView.Grid || {};
	global.QuickView.Client.UI.MainView.Windows = global.QuickView.Client.UI.MainView.Windows || {};
	ss.initAssembly($asm, 'QuickView.Client.UI.MainView');
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.FrameworkElement
	var $JS_UI_FrameworkElement = function(element) {
		this.$2$VisibilityChangedField = null;
		$JS_UI_UIElement.call(this, element);
	};
	$JS_UI_FrameworkElement.__typeName = 'JS.UI.FrameworkElement';
	global.JS.UI.FrameworkElement = $JS_UI_FrameworkElement;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.UIElement
	var $JS_UI_UIElement = function(element) {
		this.state = 0;
		this.$_element = null;
		this.$1$DestroyedField = null;
		JS.ArgumentHelper.notNull(element, 'element');
		this.$_element = element;
		this.state = 0;
	};
	$JS_UI_UIElement.__typeName = 'JS.UI.UIElement';
	global.JS.UI.UIElement = $JS_UI_UIElement;
	////////////////////////////////////////////////////////////////////////////////
	// JS.UI.UIElementState
	var $JS_UI_UIElementState = function() {
	};
	$JS_UI_UIElementState.__typeName = 'JS.UI.UIElementState';
	global.JS.UI.UIElementState = $JS_UI_UIElementState;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.Grid.ChartRowDataCell.ActiveStatInfo
	var $QuickView_$Client_UI_MainView_Grid_$ChartRowDataCell$ActiveStatInfo = function() {
	};
	$QuickView_$Client_UI_MainView_Grid_$ChartRowDataCell$ActiveStatInfo.__typeName = 'QuickView.$Client.UI.MainView.Grid.$ChartRowDataCell$ActiveStatInfo';
	$QuickView_$Client_UI_MainView_Grid_$ChartRowDataCell$ActiveStatInfo.createInstance = function() {
		return $QuickView_$Client_UI_MainView_Grid_$ChartRowDataCell$ActiveStatInfo.$ctor();
	};
	$QuickView_$Client_UI_MainView_Grid_$ChartRowDataCell$ActiveStatInfo.$ctor = function() {
		var $this = {};
		$this.value = null;
		$this.maxAbsValue = null;
		$this.textValue = null;
		$this.name = null;
		$this.shortDisplayName = null;
		$this.fullDisplayName = null;
		return $this;
	};
	$QuickView_$Client_UI_MainView_Grid_$ChartRowDataCell$ActiveStatInfo.isInstanceOfType = function() {
		return true;
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.Grid.ChartRowDataCell.CellHeaderValueSource
	var $QuickView_$Client_UI_MainView_Grid_$ChartRowDataCell$CellHeaderValueSource = function() {
	};
	$QuickView_$Client_UI_MainView_Grid_$ChartRowDataCell$CellHeaderValueSource.__typeName = 'QuickView.$Client.UI.MainView.Grid.$ChartRowDataCell$CellHeaderValueSource';
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.Grid.ChartRowDataCell.Extremes
	var $QuickView_$Client_UI_MainView_Grid_$ChartRowDataCell$Extremes = function() {
	};
	$QuickView_$Client_UI_MainView_Grid_$ChartRowDataCell$Extremes.__typeName = 'QuickView.$Client.UI.MainView.Grid.$ChartRowDataCell$Extremes';
	$QuickView_$Client_UI_MainView_Grid_$ChartRowDataCell$Extremes.createInstance = function() {
		return $QuickView_$Client_UI_MainView_Grid_$ChartRowDataCell$Extremes.$ctor();
	};
	$QuickView_$Client_UI_MainView_Grid_$ChartRowDataCell$Extremes.$ctor = function() {
		var $this = {};
		$this.min = null;
		$this.max = null;
		$this.last = null;
		return $this;
	};
	$QuickView_$Client_UI_MainView_Grid_$ChartRowDataCell$Extremes.isInstanceOfType = function() {
		return true;
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.Grid.ChartRowHeaderCell.IndicatorPositions
	var $QuickView_$Client_UI_MainView_Grid_$ChartRowHeaderCell$IndicatorPositions = function() {
	};
	$QuickView_$Client_UI_MainView_Grid_$ChartRowHeaderCell$IndicatorPositions.__typeName = 'QuickView.$Client.UI.MainView.Grid.$ChartRowHeaderCell$IndicatorPositions';
	$QuickView_$Client_UI_MainView_Grid_$ChartRowHeaderCell$IndicatorPositions.$ctor = function(indicator, short1, long1) {
		var $this = {};
		$this.indicator = null;
		$this.short = null;
		$this.long = null;
		$this.indicator = indicator;
		$this.short = short1;
		$this.long = long1;
		return $this;
	};
	$QuickView_$Client_UI_MainView_Grid_$ChartRowHeaderCell$IndicatorPositions.isInstanceOfType = function() {
		return true;
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.Grid.ChartRowManager.IndicatorComparer
	var $QuickView_$Client_UI_MainView_Grid_$ChartRowManager$IndicatorComparer = function(sortMode) {
		this.$_fundIDOrder = null;
		var fundIDOrder;
		switch (sortMode) {
			case 1: {
				fundIDOrder = $QuickView_$Client_UI_MainView_Grid_$ChartRowManager$IndicatorComparer.$indicatorIDOrder_NetGross;
				break;
			}
			case 2: {
				fundIDOrder = $QuickView_$Client_UI_MainView_Grid_$ChartRowManager$IndicatorComparer.$indicatorIDOrder_GrossNet;
				break;
			}
			default: {
				throw new ss.ArgumentOutOfRangeException('sortMode', 'Invalid value.', null, sortMode);
			}
		}
		this.$_fundIDOrder = fundIDOrder;
	};
	$QuickView_$Client_UI_MainView_Grid_$ChartRowManager$IndicatorComparer.__typeName = 'QuickView.$Client.UI.MainView.Grid.$ChartRowManager$IndicatorComparer';
	$QuickView_$Client_UI_MainView_Grid_$ChartRowManager$IndicatorComparer.$getComparer = function(sortMode) {
		switch (sortMode) {
			case 2: {
				return $QuickView_$Client_UI_MainView_Grid_$ChartRowManager$IndicatorComparer.$netGross;
			}
			case 1: {
				return $QuickView_$Client_UI_MainView_Grid_$ChartRowManager$IndicatorComparer.$grossNet;
			}
			default: {
				throw new ss.ArgumentOutOfRangeException('sortMode', 'Invalid value.', null, sortMode);
			}
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.Grid.ChartRowManager.RowsChangedPendingActions
	var $QuickView_$Client_UI_MainView_Grid_$ChartRowManager$RowsChangedPendingActions = function() {
	};
	$QuickView_$Client_UI_MainView_Grid_$ChartRowManager$RowsChangedPendingActions.__typeName = 'QuickView.$Client.UI.MainView.Grid.$ChartRowManager$RowsChangedPendingActions';
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.Grid.HeaderRowDataCell.TextAndCssClass
	var $QuickView_$Client_UI_MainView_Grid_$HeaderRowDataCell$TextAndCssClass = function() {
	};
	$QuickView_$Client_UI_MainView_Grid_$HeaderRowDataCell$TextAndCssClass.__typeName = 'QuickView.$Client.UI.MainView.Grid.$HeaderRowDataCell$TextAndCssClass';
	$QuickView_$Client_UI_MainView_Grid_$HeaderRowDataCell$TextAndCssClass.createInstance = function() {
		return $QuickView_$Client_UI_MainView_Grid_$HeaderRowDataCell$TextAndCssClass.$ctor();
	};
	$QuickView_$Client_UI_MainView_Grid_$HeaderRowDataCell$TextAndCssClass.$ctor = function() {
		var $this = {};
		$this.text = null;
		$this.cssClass = null;
		return $this;
	};
	$QuickView_$Client_UI_MainView_Grid_$HeaderRowDataCell$TextAndCssClass.$ctor1 = function(text, cssClass) {
		var $this = {};
		$this.text = null;
		$this.cssClass = null;
		$this.text = text;
		$this.cssClass = cssClass;
		return $this;
	};
	$QuickView_$Client_UI_MainView_Grid_$HeaderRowDataCell$TextAndCssClass.isInstanceOfType = function() {
		return true;
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.Grid.HeaderRowDataCellXAxis.XAxisLabel
	var $QuickView_$Client_UI_MainView_Grid_$HeaderRowDataCellXAxis$XAxisLabel = function(label) {
		this.$label = null;
		this.$isCount = false;
		this.$label = label;
	};
	$QuickView_$Client_UI_MainView_Grid_$HeaderRowDataCellXAxis$XAxisLabel.__typeName = 'QuickView.$Client.UI.MainView.Grid.$HeaderRowDataCellXAxis$XAxisLabel';
	$QuickView_$Client_UI_MainView_Grid_$HeaderRowDataCellXAxis$XAxisLabel.$ctor1 = function(label, isCount) {
		this.$label = null;
		this.$isCount = false;
		this.$label = label;
		this.$isCount = isCount;
	};
	$QuickView_$Client_UI_MainView_Grid_$HeaderRowDataCellXAxis$XAxisLabel.$op_Implicit = function(label) {
		return new $QuickView_$Client_UI_MainView_Grid_$HeaderRowDataCellXAxis$XAxisLabel(label);
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.Grid.TableLayout.Dimension
	var $QuickView_$Client_UI_MainView_Grid_$TableLayout$Dimension = function() {
	};
	$QuickView_$Client_UI_MainView_Grid_$TableLayout$Dimension.__typeName = 'QuickView.$Client.UI.MainView.Grid.$TableLayout$Dimension';
	$QuickView_$Client_UI_MainView_Grid_$TableLayout$Dimension.$ctor = function(minimum, maximum, default1) {
		var $this = {};
		$this.minimum = 0;
		$this.maximum = 0;
		$this.default = 0;
		$this.minimum = minimum;
		$this.maximum = maximum;
		$this.default = default1;
		return $this;
	};
	$QuickView_$Client_UI_MainView_Grid_$TableLayout$Dimension.isInstanceOfType = function() {
		return true;
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.Windows.ExtendedChartWindow.ChartFilters
	var $QuickView_$Client_UI_MainView_Windows_$ExtendedChartWindow$ChartFilters = function() {
	};
	$QuickView_$Client_UI_MainView_Windows_$ExtendedChartWindow$ChartFilters.__typeName = 'QuickView.$Client.UI.MainView.Windows.$ExtendedChartWindow$ChartFilters';
	$QuickView_$Client_UI_MainView_Windows_$ExtendedChartWindow$ChartFilters.$ctor = function(topInfoFilter, statsFilter) {
		var $this = {};
		$this.topInfoFilter = null;
		$this.statsFilter = null;
		$this.topInfoFilter = topInfoFilter;
		$this.statsFilter = statsFilter;
		return $this;
	};
	$QuickView_$Client_UI_MainView_Windows_$ExtendedChartWindow$ChartFilters.isInstanceOfType = function() {
		return true;
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.Windows.ExtendedChartWindow.ChartValueFilter
	var $QuickView_$Client_UI_MainView_Windows_$ExtendedChartWindow$ChartValueFilter = function() {
	};
	$QuickView_$Client_UI_MainView_Windows_$ExtendedChartWindow$ChartValueFilter.__typeName = 'QuickView.$Client.UI.MainView.Windows.$ExtendedChartWindow$ChartValueFilter';
	$QuickView_$Client_UI_MainView_Windows_$ExtendedChartWindow$ChartValueFilter.$ctor = function(predicate, min, max, minBoundReached, maxBoundReached) {
		var $this = {};
		$this.predicate = null;
		$this.minBoundReached = false;
		$this.maxBoundReached = false;
		$this.minAndMaxBoundReached = false;
		$this.min = null;
		$this.max = null;
		JS.ArgumentHelper.notNull(predicate, 'predicate');
		$this.predicate = predicate;
		$this.min = min;
		$this.max = max;
		$this.minBoundReached = minBoundReached;
		$this.maxBoundReached = maxBoundReached;
		$this.minAndMaxBoundReached = minBoundReached && maxBoundReached;
		return $this;
	};
	$QuickView_$Client_UI_MainView_Windows_$ExtendedChartWindow$ChartValueFilter.isInstanceOfType = function() {
		return true;
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.Windows.ExtendedChartWindow.StatsParameters
	var $QuickView_$Client_UI_MainView_Windows_$ExtendedChartWindow$StatsParameters = function() {
	};
	$QuickView_$Client_UI_MainView_Windows_$ExtendedChartWindow$StatsParameters.__typeName = 'QuickView.$Client.UI.MainView.Windows.$ExtendedChartWindow$StatsParameters';
	$QuickView_$Client_UI_MainView_Windows_$ExtendedChartWindow$StatsParameters.createInstance = function() {
		return $QuickView_$Client_UI_MainView_Windows_$ExtendedChartWindow$StatsParameters.$ctor();
	};
	$QuickView_$Client_UI_MainView_Windows_$ExtendedChartWindow$StatsParameters.$ctor = function() {
		var $this = {};
		$this.indicator = null;
		$this.cumulative = false;
		$this.resolution = 0;
		$this.data = null;
		$this.highResData = null;
		$this.highResPercentageData = null;
		$this.valueGetter = null;
		return $this;
	};
	$QuickView_$Client_UI_MainView_Windows_$ExtendedChartWindow$StatsParameters.isInstanceOfType = function() {
		return true;
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.Windows.ExtendedChartWindow.TopInfo
	var $QuickView_$Client_UI_MainView_Windows_$ExtendedChartWindow$TopInfo = function() {
	};
	$QuickView_$Client_UI_MainView_Windows_$ExtendedChartWindow$TopInfo.__typeName = 'QuickView.$Client.UI.MainView.Windows.$ExtendedChartWindow$TopInfo';
	$QuickView_$Client_UI_MainView_Windows_$ExtendedChartWindow$TopInfo.createInstance = function() {
		return $QuickView_$Client_UI_MainView_Windows_$ExtendedChartWindow$TopInfo.$ctor();
	};
	$QuickView_$Client_UI_MainView_Windows_$ExtendedChartWindow$TopInfo.$ctor = function() {
		var $this = {};
		$this.first = null;
		$this.last = null;
		$this.max = null;
		$this.min = null;
		return $this;
	};
	$QuickView_$Client_UI_MainView_Windows_$ExtendedChartWindow$TopInfo.isInstanceOfType = function() {
		return true;
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.Windows.TopMarketsWindow.IndicatorData
	var $QuickView_$Client_UI_MainView_Windows_$TopMarketsWindow$IndicatorData = function() {
	};
	$QuickView_$Client_UI_MainView_Windows_$TopMarketsWindow$IndicatorData.__typeName = 'QuickView.$Client.UI.MainView.Windows.$TopMarketsWindow$IndicatorData';
	$QuickView_$Client_UI_MainView_Windows_$TopMarketsWindow$IndicatorData.$getNetPosition = function($this) {
		if (ss.isNullOrUndefined($this.shortPosition)) {
			return $this.longPosition;
		}
		else if (ss.isNullOrUndefined($this.longPosition)) {
			return ss.Nullable$1.neg($this.shortPosition);
		}
		else {
			return ss.Nullable$1.sub($this.longPosition, $this.shortPosition);
		}
	};
	$QuickView_$Client_UI_MainView_Windows_$TopMarketsWindow$IndicatorData.$ctor = function(indicator) {
		var $this = {};
		$this.indicator = null;
		$this.shortPosition = null;
		$this.longPosition = null;
		$this.percentReturns = 0;
		$this.currencyReturns = 0;
		$this.indicator = indicator;
		return $this;
	};
	$QuickView_$Client_UI_MainView_Windows_$TopMarketsWindow$IndicatorData.isInstanceOfType = function() {
		return true;
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.Windows.TopMarketsWindow.SortOrder
	var $QuickView_$Client_UI_MainView_Windows_$TopMarketsWindow$SortOrder = function() {
	};
	$QuickView_$Client_UI_MainView_Windows_$TopMarketsWindow$SortOrder.__typeName = 'QuickView.$Client.UI.MainView.Windows.$TopMarketsWindow$SortOrder';
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.LocalServices
	var $QuickView_Client_UI_MainView_$LocalServices = function() {
	};
	$QuickView_Client_UI_MainView_$LocalServices.__typeName = 'QuickView.Client.UI.MainView.$LocalServices';
	$QuickView_Client_UI_MainView_$LocalServices.get_$dataProvider = function() {
		if (ss.isNullOrUndefined($QuickView_Client_UI_MainView_$LocalServices.$_dataProvider)) {
			$QuickView_Client_UI_MainView_$LocalServices.$_dataProvider = QuickView.Client.Common.AppContext.serviceLocator.getService(QuickView.Client.Services.Charts.IndicatorDataProvider).call(QuickView.Client.Common.AppContext.serviceLocator);
		}
		return $QuickView_Client_UI_MainView_$LocalServices.$_dataProvider;
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.LocalUtils
	var $QuickView_Client_UI_MainView_$LocalUtils = function() {
	};
	$QuickView_Client_UI_MainView_$LocalUtils.__typeName = 'QuickView.Client.UI.MainView.$LocalUtils';
	$QuickView_Client_UI_MainView_$LocalUtils.$openExtendedChart = function(table, indicator, period, chartType) {
		$QuickView_Client_UI_MainView_$LocalUtils.$openExtendedChart$1(table, indicator, period, chartType, 0, null);
	};
	$QuickView_Client_UI_MainView_$LocalUtils.$openExtendedChart$1 = function (table, indicator, period, chartType, displayMode, relatedIndicators) {
	    JS.ArgumentHelper.notNull(table, 'table');
		JS.ArgumentHelper.notNull(indicator, 'indicator');
		JS.ArgumentHelper.notNull(period, 'period');
		var supported = QuickView.Client.UI.Common.Data.DataDescription$ChartPeriods.isSupported(indicator, period.def);
		if (supported) {
			$QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$show$1(table, indicator, period, chartType, displayMode, relatedIndicators);
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.Gfx.Matrix
	var $QuickView_Client_UI_MainView_Gfx_Matrix = function(parent, size, type) {
		this.$1$ZeroCellField = null;
		this.$1$ColumnHeadersField = null;
		this.$1$RowHeadersField = null;
		this.$_parent = null;
		this.$_size = 0;
		this.$_type = 0;
		this.$panelTop = null;
		this.$panelTopContent = null;
		this.$panelLeft = null;
		this.$panelLeftContent = null;
		this.$panelData = null;
		this.$panelDataContent = null;
		this.$_cellMatrix = null;
		JS.ArgumentHelper.notNull(parent, 'parent');
		JS.ArgumentHelper.positive(size, 'size');
		this.$_parent = parent;
		this.$_size = size;
		this.$_type = type;
		parent.addClass('matrix');
		var columnList = [];
		var rowList = [];
		var zeroCell = $("<div class='" + ('zero-cell' || '') + "'></div>").appendTo(parent);
		var panelTop = $("<div class='" + ('top-header header' || '') + "'></div>").appendTo(parent);
		var panelTopContent = $("<div class='" + ('content' || '') + "'></div>").appendTo(panelTop);
		$("<div class='" + ('line-separator' || '') + "'></div>").appendTo(parent);
		var panelLeft = $("<div class='" + ('left-header header' || '') + "'></div>").appendTo(parent);
		var panelLeftContent = $("<div class='" + ('content' || '') + "'></div>").appendTo(panelLeft);
		var panelData = $("<div class='" + ('data' || '') + "'></div>").appendTo(parent);
		var panelDataContent = $("<div class='" + ('content' || '') + "'></div>").appendTo(panelData);
		// Create headers
		for (var k = 0; k < size; k++) {
			columnList.push($("<div class='" + ('cell' || '') + "'></div>").appendTo(panelTopContent));
			rowList.push($("<div class='" + ('cell' || '') + "'></div>").appendTo(panelLeftContent));
		}
		$("<div class='" + ('line-separator' || '') + "'></div>").appendTo(panelTopContent);
		$("<div class='" + ('line-separator' || '') + "'></div>").appendTo(panelLeftContent);
		var cellMatrix = ss.multidimArray(null, size, size);
		if (type === 1) {
			for (var k1 = 0; k1 < size; k1++) {
				for (var p = 0; p < k1; p++) {
					ss.arraySet(cellMatrix, k1, p, $("<div class='" + ('cell' || '') + "'></div>").appendTo(panelDataContent));
				}
				if (k1 + 1 < size) {
					$("<div class='" + ('line-separator' || '') + "'></div>").appendTo(panelDataContent);
				}
			}
		}
		else if (type === 2) {
			for (var k2 = 0; k2 < size; k2++) {
				for (var p1 = 0; p1 < size; p1++) {
					ss.arraySet(cellMatrix, k2, p1, $("<div class='" + (((k2 === p1) ? 'diag-cell' : 'cell') || '') + "'></div>").appendTo(panelDataContent));
				}
				if (k2 + 1 < size) {
					$("<div class='" + ('line-separator' || '') + "'></div>").appendTo(panelDataContent);
				}
			}
		}
		else {
			throw new ss.ArgumentOutOfRangeException('type', 'Invalid value.', null, type);
		}
		{
			// The number of cells is increased by 2 since each header is 3 cells wide
			// The pixels are required to account for margins
			var sizeText = ss.formatString('calc({0}em + {1}px)', size + 2, size);
			panelTopContent.width(sizeText);
		}
		{
			// The pixels are required to account for margins
			var sizeText1 = ss.formatString('calc({0}em + {1}px)', size, size);
			panelLeftContent.height(sizeText1);
		}
		{
			// The pixels are required to account for margins
			var sizeText2 = ss.formatString('calc({0}em + {1}px)', size, size);
			panelDataContent.width(sizeText2);
			panelDataContent.height(sizeText2);
		}
		panelData.scroll(ss.mkdel(this, this.$panelData_Scroll));
		this.set_zeroCell(zeroCell);
		this.set_columnHeaders(columnList);
		this.set_rowHeaders(rowList);
		this.$panelTop = panelTop;
		this.$panelTopContent = panelTopContent;
		this.$panelLeft = panelLeft;
		this.$panelLeftContent = panelLeftContent;
		this.$panelData = panelData;
		this.$panelDataContent = panelDataContent;
		this.$_cellMatrix = cellMatrix;
	};
	$QuickView_Client_UI_MainView_Gfx_Matrix.__typeName = 'QuickView.Client.UI.MainView.Gfx.Matrix';
	$QuickView_Client_UI_MainView_Gfx_Matrix.$calculateRatio = function(parentSize, childSize) {
		if (parentSize < childSize) {
			return parentSize / childSize;
		}
		else {
			return 1;
		}
	};
	global.QuickView.Client.UI.MainView.Gfx.Matrix = $QuickView_Client_UI_MainView_Gfx_Matrix;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.Gfx.MatrixType
	var $QuickView_Client_UI_MainView_Gfx_MatrixType = function() {
	};
	$QuickView_Client_UI_MainView_Gfx_MatrixType.__typeName = 'QuickView.Client.UI.MainView.Gfx.MatrixType';
	global.QuickView.Client.UI.MainView.Gfx.MatrixType = $QuickView_Client_UI_MainView_Gfx_MatrixType;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.Grid.Cell
	var $QuickView_Client_UI_MainView_Grid_$Cell = function(row, column, element) {
		this.$row = null;
		this.$column = null;
		$JS_UI_FrameworkElement.call(this, element);
		JS.ArgumentHelper.notNull(row, 'row');
		JS.ArgumentHelper.notNull(column, 'column');
		this.$row = row;
		this.$column = column;
		this.$column.add_$visibilityChanged(ss.mkdel(this, this.$column_VisibilityChanged));
		this.$updateVisibility();
	};
	$QuickView_Client_UI_MainView_Grid_$Cell.__typeName = 'QuickView.Client.UI.MainView.Grid.$Cell';
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.Grid.ChartColumn
	var $QuickView_Client_UI_MainView_Grid_$ChartColumn = function(index, options) {
		this.$index = 0;
		this.$options = null;
		this.$primaryPeriod = null;
		this.$period = null;
		this.$2$PeriodChangedField = null;
		this.$2$BarHighlightedField = null;
		this.$2$BarUnhighlightedField = null;
		$QuickView_Client_UI_MainView_Grid_$Column.call(this);
		JS.ArgumentHelper.positiveOrDefault(index, 'index');
		JS.ArgumentHelper.notNull(options, 'options');
		this.$index = index;
		this.$options = options;
		this.$primaryPeriod = QuickView.Client.Services.Charts.ChartPeriodProvider.getPeriod(QuickView.Client.Models.Charts.ChartPeriodDef.getPrimary(options.get_period()));
		this.$period = QuickView.Client.Services.Charts.ChartPeriodProvider.getPeriod(options.get_period());
		options.add_periodChanged(ss.mkdel(this, this.$options_PeriodChanged));
		this.$period.add_intervalChanged(ss.mkdel(this, this.$period_IntervalChanged));
	};
	$QuickView_Client_UI_MainView_Grid_$ChartColumn.__typeName = 'QuickView.Client.UI.MainView.Grid.$ChartColumn';
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.Grid.ChartRow
	var $QuickView_Client_UI_MainView_Grid_$ChartRow = function(rowType, indicator, table, element, primaryRow) {
		this.$rowType = 0;
		this.$headerCell = null;
		this.$chartCells = null;
		this.$4$IndicatorField = null;
		this.$4$IndicatorOptionsField = null;
		this.$_benchmarkIndicator = null;
		this.$primaryRow = null;
		this.$_cellList = null;
		this.$_cellPanel = null;
		this.$_benchmarkRow = null;
		this.$isHighlighted = false;
		$QuickView_Client_UI_MainView_Grid_$Row.call(this, table, element);
		JS.ArgumentHelper.notNull(indicator, 'indicator');
		if (rowType === 1) {
			if (ss.isNullOrUndefined(primaryRow)) {
				throw new ss.ArgumentNullException('primaryRow', 'A primary row must be specified if this row is a subordinate row.');
			}
		}
		this.$rowType = rowType;
		this.$primaryRow = primaryRow;
		this.set_$indicator(indicator);
	    // Load the settings of the indicator
		this.set_$indicatorOptions(this.$table.$indicatorOptionsProvider.$get(this.get_$indicator()));
		if (rowType === 0) {
			this.get_element().addClass('sortable fund_row');
		}
		else if (rowType === 1) {
			this.get_element().addClass('benchmark');
		}
		this.$headerCell = $QuickView_Client_UI_MainView_Grid_$ChartRowHeaderCell.$create(this, table.$headerColumn, element);
		this.$_cellPanel = $("<div class='chart_cell_panel'></div>").appendTo(element);
		var chartCellList = this.$_cellList = [];
		for (var $t1 = 0; $t1 < table.$columns.length; $t1++) {
			var column = table.$columns[$t1];
			var chartCell = $QuickView_Client_UI_MainView_Grid_$ChartRowDataCell.$create(this, column, this.$_cellPanel);
			chartCellList.push(chartCell);
		}
		this.$chartCells = chartCellList;
		this.get_$indicatorOptions().add_benchmarksChanged(ss.mkdel(this, this.$indicatorOptions_BenchmarksChanged));
		this.$table.$options.add_displayOptionsChanged(ss.mkdel(this, this.$tableOptions_DisplayOptionsChanged));
		this.$table.add_$columnAdded(ss.mkdel(this, this.$table_ColumnAdded));
		this.$table.add_$columnRemoved(ss.mkdel(this, this.$table_ColumnRemoved));
		this.$table.add_$columnMoved(ss.mkdel(this, this.$table_ColumnMoved));
		// Add a benchmark row if necessary
		this.$updateBenchmarkRow();
		// Track data usage
		QuickView.Client.Services.Charts.IndicatorDataUsage.addIndicator(this.get_$indicator());
	};
	$QuickView_Client_UI_MainView_Grid_$ChartRow.__typeName = 'QuickView.Client.UI.MainView.Grid.$ChartRow';
	$QuickView_Client_UI_MainView_Grid_$ChartRow.$create = function (rowType, indicator, table, parentElement, afterRow, primaryRow) {
		JS.ArgumentHelper.notNull(indicator, 'indicator');
		JS.ArgumentHelper.notNull(table, 'table');
		JS.ArgumentHelper.notNull(parentElement, 'parentElement');
		// The ID is used when moving the row
		var id = 'panelRow_' + (++$QuickView_Client_UI_MainView_Grid_$ChartRow.$_lastID).toString();
		var element = $("<div class='chart_row' id='" + id + "'></div>");
		if (ss.isNullOrUndefined(afterRow)) {
			// Insert the element as the first child of the parent
			element.prependTo(parentElement);
		}
		else {
			// Insert the element after the specified element
			element.insertAfter(afterRow.get_$lastElement());
		}
		//console.log('indicator', indicator);
		return new $QuickView_Client_UI_MainView_Grid_$ChartRow(rowType, indicator, table, element, primaryRow);
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.Grid.ChartRowDataCell
	var $QuickView_Client_UI_MainView_Grid_$ChartRowDataCell = function(row, column, element) {
		this.$_cellHeader = null;
		this.$_chartPanel = null;
		this.$_chart = null;
		this.$_statsSupported = false;
		this.$_stats = null;
		this.$_statsResolution = 0;
		this.$_dataProviderEventSubscription = null;
		this.$_benchmarkDataEventSubscriptionList = null;
		this.$_openDataCellMenuID = null;
		this.$_updateOrReleaseDataExecutor = null;
		this.$_updateOrRemoveDataExecuting = false;
		this.$_updateOrRemoveDataDelayed = false;
		$QuickView_Client_UI_MainView_Grid_$DataCell.call(this, row, column, element);
		this.get_$column().add_$periodChanged(ss.mkdel(this, this.$dataParametersChanged));
		this.get_$column().$options.add_viewModeChanged(ss.mkdel(this, this.$dataParametersChanged));
		this.get_$table().$options.add_displayOptionsChanged(ss.mkdel(this, this.$displayOptionsChanged));
		this.get_$table().$options.add_statsSortSettingsChanged(ss.mkdel(this, this.$statsSortSettingsChanged));
		this.get_$row().get_$indicatorOptions().add_benchmarksChanged(ss.mkdel(this, this.$indicatorOptions_BenchmarksChanged));
		JS.UI.UIEventExtensions.virtualDoubleClick(element, ss.mkdel(this, this.$element_DoubleClick));
		JS.UI.UIEventExtensions.virtualClick(element, ss.mkdel(this, this.$element_Click));
		// Some delay is required in order to create the cell and set its size HC can display the chart.
		// Otherwise, the chart is sized incorrectly (becomes much more larger than the cell).
		// The chart should be displayed AFTER the layout is updated (which has a delay of 50ms).
		// Otherwise, if the data is loaded too fast the chart may be displayed before
		// the layout is updated and thus may not be sized correctly.
		window.setTimeout(ss.mkdel(this, this.$updateOrRemoveDataAsync), 100);
	};
	$QuickView_Client_UI_MainView_Grid_$ChartRowDataCell.__typeName = 'QuickView.Client.UI.MainView.Grid.$ChartRowDataCell';
	$QuickView_Client_UI_MainView_Grid_$ChartRowDataCell.$formatPercentValue = function(value) {
		// Reference: Mantis 0006683
		value *= 100;
		var number = Math.abs(value);
		var precision;
		if (number < 0.1) {
			value = 0;
			precision = 0;
		}
		else if (number < 10) {
			precision = 1;
		}
		else {
			precision = 0;
		}
		return QuickView.Client.UI.Common.Format$Number.unitless$1(value, precision, 0, 1);
	};
	$QuickView_Client_UI_MainView_Grid_$ChartRowDataCell.$formatCurrencyValue = function(value) {
		// Reference: Mantis 0006683
		var number = Math.abs(value);
		var precision;
		if (number < 0.1) {
			value = 0;
			precision = 0;
		}
		else if (number < 10) {
			precision = 1;
		}
		else {
			precision = 0;
		}
		return QuickView.Client.UI.Common.Format$Number.unitless$1(value, precision, 0, 1);
	};
	$QuickView_Client_UI_MainView_Grid_$ChartRowDataCell.$displayStatValue = function(element, text, sign) {
		element.text(text);
		element.removeClass('positive negative');
		if (ss.Nullable$1.gt(sign, 0)) {
			element.addClass('positive');
		}
		else if (ss.Nullable$1.lt(sign, 0)) {
			element.addClass('negative');
		}
	};
	$QuickView_Client_UI_MainView_Grid_$ChartRowDataCell.$create = function (row, column, parentElement) {
		JS.ArgumentHelper.notNull(row, 'row');
		JS.ArgumentHelper.notNull(column, 'column');
		JS.ArgumentHelper.notNull(parentElement, 'element');
		var newElement = $("<div class='chart_cell'></div>").appendTo(parentElement);
		return new $QuickView_Client_UI_MainView_Grid_$ChartRowDataCell(row, column, newElement);
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.Grid.ChartRowHeaderCell
	var $QuickView_Client_UI_MainView_Grid_$ChartRowHeaderCell = function(row, column, element) {
		this.$labelSiteName = null;
		this.$labelFundName = null;
		this.$labelShape = null;
		this.$labelBaseCurrency = null;
		this.$labelDataRecency = null;
		this.$_dragHandle = null;
		this.$panelPositions = null;
		this.$labelPositions_Net = null;
		this.$labelPositions_Short = null;
		this.$labelPositions_Long = null;
		this.$labelFavorite = null;
		this.$labelRowConnector = null;
		this.$_dataProviderEventlyDataEventSubscription = null;
		this.$_dataProviderTimestampEventSubscription = null;
		this.$_dataRecencyLabelTaskID = null;
		this.$_updatePositionsExecutor = null;
		this.$_swipeLeftExecuting = false;
		this.$_dataRecency = null;
		$QuickView_Client_UI_MainView_Grid_$Cell.call(this, row, column, element);
		this.$labelSiteName = $("<div class='category_label'></div>").appendTo(element);
		this.$labelFundName = $("<div class='sub_category_label'></div>").appendTo(element);
		this.$labelShape = $("<div class='shape'></div>").appendTo(element);
		this.$labelRowConnector = $("<div class='row_connector'></div>'").appendTo(element);
		this.$labelBaseCurrency = $("<div class='base_currency_label'></div>").appendTo(element);
		this.$labelDataRecency = $("<div class='data_recency_label'></div>").appendTo(element);
		this.$_dragHandle = $("<div class='drag_handle'></div>").appendTo(element);
		// Must be BELOW the drag handle in order to display the tooltip
		this.$panelPositions = $("<div class='positions'></div>").appendTo(element);
		this.$labelPositions_Long = $("<div class='long'></div>").appendTo(this.$panelPositions);
		this.$labelPositions_Short = $("<div class='short'></div>").appendTo(this.$panelPositions);
		this.$labelPositions_Net = $("<div class='net'></div>").appendTo(this.$panelPositions);
		this.$labelFavorite = $("<div class='favorite hidden'></div>").appendTo(element);
		this.get_$row().$table.add_$favoritesChanged(ss.mkdel(this, this.$table_FavoritesChanged));
		// Subscribe for changes
		this.$_dataProviderTimestampEventSubscription = $QuickView_Client_UI_MainView_$LocalServices.get_$dataProvider().subscribeDataRecencyChanged(row.get_$indicator(), ss.mkdel(this, this.$dataProvider_IndicatorDataTimestampChanged));
		if (ss.isNullOrUndefined($QuickView_Client_UI_MainView_Grid_$ChartRowHeaderCell.$_sanitizedMenuRootNameDict)) {
			$QuickView_Client_UI_MainView_Grid_$ChartRowHeaderCell.$_sanitizedMenuRootNameDict = {};
		}
		var cssClass = $QuickView_Client_UI_MainView_Grid_$ChartRowHeaderCell.$_sanitizedMenuRootNameDict[row.get_$indicator().menuInfo.A];
		if (ss.isNullOrUndefined(cssClass)) {
			cssClass = QuickView.Client.Algorithms.TextAlgorithms.sanitizeVariableName(row.get_$indicator().menuInfo.A);
			$QuickView_Client_UI_MainView_Grid_$ChartRowHeaderCell.$_sanitizedMenuRootNameDict[row.get_$indicator().menuInfo.A] = cssClass;
		}
		// Set the background of the cell according to the name of the company
		this.get_element().addClass(cssClass);
		JS.UI.UIEventExtensions.virtualClick(this.$labelFundName, ss.mkdel(this, this.$labelFundName_Click));
		if (QuickView.Client.Common.AppEnvironment.get_isMobileDevice()) {
			JS.UI.MobileEventExtensions.swipeLeft(this.get_element(), ss.mkdel(this, this.$element_SwipeLeft));
		}
		this.$updateControls();
		this.$updateFavorite();
		window.setTimeout(ss.mkdel(this, this.$updateDataRecency));
		if (QuickView.Client.Models.Charts.Indicator.containsPositions(row.get_$indicator())) {
			// Subscribe for changes
			this.$_dataProviderEventlyDataEventSubscription = $QuickView_Client_UI_MainView_$LocalServices.get_$dataProvider().subscribeDataChanged(row.get_$indicator(), 3, ss.mkdel(this, this.$dataProvider_IndicatorDailyDataChanged));
			if (this.$displayCachedPositions()) {
				// Cached positions has been displayed
			}
			else {
				// Indicate that positions are loading until they are loaded
				this.$panelPositions.addClass('loading');
			}
			this.$updatePositionsAsync();
		}
		else {
			var marketRelationship = QuickView.Client.Models.Charts.Indicator.getRelationship(row.get_$indicator(), 'Market');
			if (ss.isValue(marketRelationship)) {
				// Show market positions and top/bottom 5 markets
				for (var $t1 = 0; $t1 < marketRelationship.indicators.length; $t1++) {
					var indicator = marketRelationship.indicators[$t1];
					var subscriptionList = [];
					subscriptionList.push($QuickView_Client_UI_MainView_$LocalServices.get_$dataProvider().subscribeDataChanged(indicator, 3, ss.mkdel(this, this.$dataProvider_IndicatorDailyDataChanged)));
					this.$_dataProviderEventlyDataEventSubscription = new $QuickView_Client_UI_MainView_Grid_$DisposableCollectionWrapper(subscriptionList);
				}
				if (this.$displayCachedPositions()) {
					// Cached positions has been displayed
				}
				else {
					// Indicate that positions are loading until they are loaded
					this.$panelPositions.addClass('loading');
				}
				this.$updatePositionsAsync();
			}
		}
	};
	$QuickView_Client_UI_MainView_Grid_$ChartRowHeaderCell.__typeName = 'QuickView.Client.UI.MainView.Grid.$ChartRowHeaderCell';
	$QuickView_Client_UI_MainView_Grid_$ChartRowHeaderCell.$getPositions = function(indicator) {
		var $state = 0, $tcs = new ss.TaskCompletionSource(), $t1, dataBag, longData, longDataPoint, shortData, shortDataPoint;
		var $sm = function() {
			try {
				$sm1:
				for (;;) {
					switch ($state) {
						case 0: {
							$state = -1;
							if (ss.isNullOrUndefined($QuickView_Client_UI_MainView_Grid_$ChartRowHeaderCell.$_positionsPeriod)) {
								$QuickView_Client_UI_MainView_Grid_$ChartRowHeaderCell.$_positionsPeriod = QuickView.Client.Services.Charts.ChartPeriodProvider.getPeriod$1(4, -1);
							}
							$t1 = $QuickView_Client_UI_MainView_$LocalServices.get_$dataProvider().getIndicatorData(indicator, $QuickView_Client_UI_MainView_Grid_$ChartRowHeaderCell.$_positionsPeriod, 2, 1);
							$state = 1;
							$t1.continueWith($sm);
							return;
						}
						case 1: {
							$state = -1;
							dataBag = $t1.getAwaitedResult();
							longData = ss.cast(QuickView.Client.Services.Charts.IndicatorDataBag.getDataIfAvailable$1(dataBag, 2, 16, 5), QuickView.Client.Services.Charts.IndicatorChartData);
							longDataPoint = (ss.isNullOrUndefined(longData) ? null : Enumerable.from(longData.get_dataPoints()).lastOrDefault(null, ss.getDefaultValue(QuickView.Client.Models.Charts.ChartDataPoint)));
							shortData = ss.cast(QuickView.Client.Services.Charts.IndicatorDataBag.getDataIfAvailable$1(dataBag, 2, 17, 5), QuickView.Client.Services.Charts.IndicatorChartData);
							shortDataPoint = (ss.isNullOrUndefined(shortData) ? null : Enumerable.from(shortData.get_dataPoints()).lastOrDefault(null, ss.getDefaultValue(QuickView.Client.Models.Charts.ChartDataPoint)));
							if (ss.isValue(longDataPoint) && ss.isValue(shortDataPoint)) {
								// Keep the latest point
								if (JS.DateTimeExt.op_GreaterThan(longDataPoint.T, shortDataPoint.T)) {
									shortDataPoint = null;
								}
								else {
									longDataPoint = null;
								}
							}
							if (ss.isNullOrUndefined(shortDataPoint) && ss.isNullOrUndefined(longDataPoint)) {
								$tcs.setResult(null);
								return;
							}
							else {
								$tcs.setResult($QuickView_$Client_UI_MainView_Grid_$ChartRowHeaderCell$IndicatorPositions.$ctor(indicator, (ss.isNullOrUndefined(shortDataPoint) ? null : shortDataPoint.N), (ss.isNullOrUndefined(longDataPoint) ? null : longDataPoint.N)));
								return;
							}
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
		};
		$sm();
		return $tcs.task;
	};
	$QuickView_Client_UI_MainView_Grid_$ChartRowHeaderCell.$prepareGroupName = function(name) {
		if (ss.isNullOrEmptyString(name)) {
			return name;
		}
		if (ss.endsWithString(name, ' ($)')) {
			name = name.substr(0, name.length - 4);
		}
		name = name.toUpperCase();
		// Names must be case-insensitive
		return name;
	};
	$QuickView_Client_UI_MainView_Grid_$ChartRowHeaderCell.$getShapeCssClass = function(name, partial, alt) {
		var index = $QuickView_Client_UI_MainView_Grid_$ChartRowHeaderCell.$calculateShapeIndex(name);
		var cssClass = $QuickView_Client_UI_MainView_Grid_$ChartRowHeaderCell.$shapeList[index];
		if (partial) {
			cssClass += '-partial';
		}
		if (alt) {
			cssClass += '-alt';
		}
		return cssClass;
	};
	$QuickView_Client_UI_MainView_Grid_$ChartRowHeaderCell.$calculateShapeIndex = function(name) {
		JS.ArgumentHelper.notNullOrEmpty(name, 'name');
		if (ss.isNullOrUndefined($QuickView_Client_UI_MainView_Grid_$ChartRowHeaderCell.$allFundGroupNameDict)) {
			var dict = {};
			var menu = QuickView.Client.Models.Charts.RuntimeChartMetadata.getMenu(QuickView.Client.Common.AppContext.metadata);
			for (var $t1 = 0; $t1 < menu.S.length; $t1++) {
				var set = menu.S[$t1];
				$QuickView_Client_UI_MainView_Grid_$ChartRowHeaderCell.$addFundSubmenuNames(set, dict);
			}
			var list = [];
			ss.arrayAddRange(list, Object.keys(dict));
			list.sort(function(a, b) {
				return ss.compareStrings(a, b, true);
			});
			ss.insert(list, 0, 'Root');
			// Should be always at the top to keep the icon the same
			for (var k = 0; k < list.length; k++) {
				var item = list[k];
				dict[item] = k;
			}
			$QuickView_Client_UI_MainView_Grid_$ChartRowHeaderCell.$allFundGroupNameDict = dict;
		}
		name = $QuickView_Client_UI_MainView_Grid_$ChartRowHeaderCell.$prepareGroupName(name);
		// Names are converted to upper-case for case-insensitive comparison
		// Although this is not possible in C# in JS the returned value will be "undefined" if the name is not
		// found in the dictionary.
		var index = ss.coalesce($QuickView_Client_UI_MainView_Grid_$ChartRowHeaderCell.$allFundGroupNameDict[name], 0);
		return index % $QuickView_Client_UI_MainView_Grid_$ChartRowHeaderCell.$shapeList.length;
	};
	$QuickView_Client_UI_MainView_Grid_$ChartRowHeaderCell.$addFundSubmenuNames = function(submenu, groupNames) {
		JS.ArgumentHelper.notNull(submenu, 'submenu');
		if (ss.isValue(submenu.I)) {
			// 2.6.2 Saltarelle bug: Casing a serializable object to generic type results in an "Cannot cast object to type XXX" exception
			var $t1 = Enumerable.from(submenu.I).where(function(x) {
				return x.T === 1;
			}).select(function(x1) {
				return x1;
			}).getEnumerator();
			try {
				while ($t1.moveNext()) {
					var submenuItem = $t1.current();
					// Add only groups that contain funds
					if (ss.isValue(submenuItem.I) && Enumerable.from(submenuItem.I).any(function(x2) {
						return x2.T === 2;
					})) {
						var subGroupName = $QuickView_Client_UI_MainView_Grid_$ChartRowHeaderCell.$prepareGroupName(submenuItem.N);
						groupNames[subGroupName] = 0;
					}
					$QuickView_Client_UI_MainView_Grid_$ChartRowHeaderCell.$addFundSubmenuNames(submenuItem, groupNames);
				}
			}
			finally {
				$t1.dispose();
			}
		}
	};
	$QuickView_Client_UI_MainView_Grid_$ChartRowHeaderCell.$formatSubCategoryTypeTooltip = function(row) {
		JS.ArgumentHelper.notNull(row, 'row');
		var title = row.get_$indicator().menuInfo.A + ' - ' + row.get_$indicator().N;
		var currencySymbol = QuickView.Client.UI.Common.Data.DataDescription.getSymbol(row.get_$indicator().timeSeriesCurrency);
		var content = ss.formatString('Displayed units: {0}<br/>Base currency: {1}', (QuickView.Client.Models.Charts.Indicator.supportsUnit(row.get_$indicator(), 4) ? '%' : currencySymbol), QuickView.Client.UI.Common.Data.DataDescription.getName$1(row.get_$indicator().timeSeriesCurrency));
		var description = (ss.isNullOrEmptyString(row.get_$indicator().D) ? '' : ss.replaceAllString(row.get_$indicator().D, '\n', '<br/>'));
		var tooltipTemplate;
		if (ss.isNullOrEmptyString(description)) {
			tooltipTemplate = $('#templateRowHeaderTooltip').html();
		}
		else {
			tooltipTemplate = $('#templateRowHeaderTooltip_Description').html();
		}
		var tooltip = ss.replaceAllString(ss.replaceAllString(ss.replaceAllString(tooltipTemplate, '{Title}', title), '{Content}', content), '{Description}', description);
		return tooltip;
	};
	$QuickView_Client_UI_MainView_Grid_$ChartRowHeaderCell.$create = function(row, column, parentElement) {
		JS.ArgumentHelper.notNull(row, 'row');
		JS.ArgumentHelper.notNull(column, 'column');
		JS.ArgumentHelper.notNull(parentElement, 'element');
		var element = $("<div class='chart_row_header'></div>").appendTo(parentElement);
		return new $QuickView_Client_UI_MainView_Grid_$ChartRowHeaderCell(row, column, element);
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.Grid.ChartRowManager
	var $QuickView_Client_UI_MainView_Grid_$ChartRowManager = function(table, chartRowPanel) {
		this.$rows = null;
		this.$_allRows = null;
		this.$1$RowsChangedField = null;
		this.$_table = null;
		this.$_options = null;
		this.$_chartRowPanel = null;
		this.$_chartRowPanelSortable = null;
		this.$_chartRowList = null;
		this.$_allChartRowList = null;
		this.$_chartRowListChanged = false;
		this.$_topRow = null;
		this.$1$TopRowChangedField = null;
		this.$_rowsChangedPendingActions = 0;
		this.$_rowChangedExecutor = null;
		this.$executorChartRowCell_Sort = null;
		JS.ArgumentHelper.notNull(table, 'table');
		JS.ArgumentHelper.notNull(chartRowPanel, 'chartRowPanel');
		this.$_table = table;
		this.$_options = table.$options;
		this.$_chartRowPanel = chartRowPanel;
		this.$rows = this.$_chartRowList = [];
		var $t1 = new QuickView.Client.UI.Menus.DisplayedChartsMenu();
		table.$options.add_syncTopRowChanged(ss.mkdel(this, this.$gridOptions_SyncTopRowChanged));
		table.$options.add_statsSortSettingsChanged(ss.mkdel(this, this.$gridOptions_SortingSettingsChanged));
		table.$options.add_sortModeChanged(ss.mkdel(this, this.$gridOptions_SortingSettingsChanged));
		$(document).bind('keydown', ss.mkdel(this, this.$document_KeyDown));
		QuickView.Client.UI.MainView.Grid.DisplayedCharts.$_chartRowList = this.$_chartRowList;
		this.$_chartRowPanelSortable = this.$_chartRowPanel.sortable({ axis: 'y', cancel: '.category_label, .sub_category_label', cursor: 'url(/App/Css/Images/Icons/up_down.cur), s-resize', handle: (QuickView.Client.Common.AppEnvironment.get_isMobileDevice() ? '.chart_row_header' : '.chart_row_header > .drag_handle'), items: '.chart_row.sortable', opacity: 1, tolerance: 'intersect', start: ss.mkdel(this, this.$sortableChartRowPanel_OnStart), update: ss.mkdel(this, this.$sortableChartRowPanel_OnUpdate) });
	};
	$QuickView_Client_UI_MainView_Grid_$ChartRowManager.__typeName = 'QuickView.Client.UI.MainView.Grid.$ChartRowManager';
    ////////////////////////////////////////////////////////////////////////////////
    // QuickView.Client.UI.MainView.Grid.DisplayedCharts
	var $QuickView_Client_UI_MainView_Grid_DisplayedCharts = function () {
	    this.$rows = null;
	    this.$_chartRowList = null;
	    this.$rows = this.$_chartRowList = [];
	};
	$QuickView_Client_UI_MainView_Grid_DisplayedCharts.__typeName = 'QuickView.Client.UI.MainView.Grid.DisplayedCharts';
	global.QuickView.Client.UI.MainView.Grid.DisplayedCharts = $QuickView_Client_UI_MainView_Grid_DisplayedCharts;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.Grid.Column
	var $QuickView_Client_UI_MainView_Grid_$Column = function() {
		this.$isVisible = false;
		this.$1$VisibilityChangedField = null;
	};
	$QuickView_Client_UI_MainView_Grid_$Column.__typeName = 'QuickView.Client.UI.MainView.Grid.$Column';
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.Grid.DataCell
	var $QuickView_Client_UI_MainView_Grid_$DataCell = function(row, column, element) {
		this.$_oldIsEnabled = false;
		$QuickView_Client_UI_MainView_Grid_$Cell.call(this, row, column, element);
		this.$row.add_visibilityChanged(ss.mkdel(this, this.$rowOrColumn_VisibilityOrIsEnabledChanged));
		this.$row.add_$isEnabledChanged(ss.mkdel(this, this.$rowOrColumn_VisibilityOrIsEnabledChanged));
		this.get_$column().add_$visibilityChanged(ss.mkdel(this, this.$rowOrColumn_VisibilityOrIsEnabledChanged));
		this.$_oldIsEnabled = this.get_$isEnabled();
	};
	$QuickView_Client_UI_MainView_Grid_$DataCell.__typeName = 'QuickView.Client.UI.MainView.Grid.$DataCell';
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.Grid.DisposableCollectionWrapper
	var $QuickView_Client_UI_MainView_Grid_$DisposableCollectionWrapper = function(list) {
		this.$_list = null;
		JS.ArgumentHelper.notNull(list, 'list');
		this.$_list = list;
	};
	$QuickView_Client_UI_MainView_Grid_$DisposableCollectionWrapper.__typeName = 'QuickView.Client.UI.MainView.Grid.$DisposableCollectionWrapper';
	$QuickView_Client_UI_MainView_Grid_$DisposableCollectionWrapper.$ctor1 = function(list) {
		this.$_list = null;
		JS.ArgumentHelper.notNull(list, 'list');
		this.$_list = list;
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.Grid.HeaderColumn
	var $QuickView_Client_UI_MainView_Grid_$HeaderColumn = function() {
		$QuickView_Client_UI_MainView_Grid_$Column.call(this);
	};
	$QuickView_Client_UI_MainView_Grid_$HeaderColumn.__typeName = 'QuickView.Client.UI.MainView.Grid.$HeaderColumn';
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.Grid.HeaderRow
	var $QuickView_Client_UI_MainView_Grid_$HeaderRow = function(table, element) {
		this.$user = null;
		this.$headerCells = null;
		this.$_cellList = null;
		this.$_cellPanel = null;
		$QuickView_Client_UI_MainView_Grid_$Row.call(this, table, element);
		this.$user = $QuickView_Client_UI_MainView_Grid_$HeaderRowUserCell.$create(this, table.$headerColumn, this.get_element());
		this.$_cellPanel = $("<div class='column_header_panel'></div>").appendTo(element);
		var headerCellList = this.$_cellList = [];
		for (var $t1 = 0; $t1 < table.$columns.length; $t1++) {
			var column = table.$columns[$t1];
			var headerCell = $QuickView_Client_UI_MainView_Grid_$HeaderRowDataCell.$create(this, column, this.$_cellPanel);
			headerCellList.push(headerCell);
		}
		this.$headerCells = headerCellList;
		this.$table.add_$columnAdded(ss.mkdel(this, this.$table_ColumnAdded));
		this.$table.add_$columnRemoved(ss.mkdel(this, this.$table_ColumnRemoved));
		this.$table.add_$columnMoved(ss.mkdel(this, this.$table_ColumnMoved));
	};
	$QuickView_Client_UI_MainView_Grid_$HeaderRow.__typeName = 'QuickView.Client.UI.MainView.Grid.$HeaderRow';
	$QuickView_Client_UI_MainView_Grid_$HeaderRow.$create = function(table, element) {
		JS.ArgumentHelper.notNull(table, 'table');
		JS.ArgumentHelper.notNull(element, 'element');
		return new $QuickView_Client_UI_MainView_Grid_$HeaderRow(table, element);
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.Grid.HeaderRowDataCell
	var $QuickView_Client_UI_MainView_Grid_$HeaderRowDataCell = function(row, column, element) {
		this.$_xAxis = null;
		this.$buttonViewMode = null;
		this.$panelTop = null;
		this.$labelDataRecency = null;
		this.$labelHeaderValue = null;
		this.$labelSubHeaderValue = null;
		this.$_menu = null;
		this.$progressBarStats = null;
		this.$_dataProviderEventSubscription = null;
		this.$_dataRecencyLabelTaskID = null;
		this.$_dataRecency = null;
		$QuickView_Client_UI_MainView_Grid_$DataCell.call(this, row, column, element);
		this.$panelTop = $("<div class='top_panel'></div>").appendTo(element);
		this.$labelDataRecency = $("<div class='data-recency'></div>").appendTo(this.$panelTop);
		var labelPanel = $("<div class='title_panel'></div>").appendTo(this.$panelTop);
		this.$labelHeaderValue = $("<div class='title'></div>").appendTo(labelPanel);
		this.$labelSubHeaderValue = $("<div class='sub_title'></div>").appendTo(labelPanel);
		// TODO Remove this progress bar if it is not necessary.
		// Originally it was set since sorting by stats require some time
		this.$progressBarStats = $QuickView_Client_UI_MainView_Grid_$ProgressBar.$create(this.$panelTop);
		this.$progressBarStats.set_$cssClass('stats');
		this.$progressBarStats.hide();
		// The bar should not be visible initially
		this.$_xAxis = $QuickView_Client_UI_MainView_Grid_$HeaderRowDataCellXAxis.$create(this, element, element);
		// Avoid using data not displayed in charts; thus update the data handler when the
		// chart type changes even if the header values are the same
		this.get_$column().$options.add_viewModeChanged(ss.mkdel(this, this.$dataParametersChanged));
		this.get_$row().$table.$chartRows.add_$topRowChanged(ss.mkdel(this, this.$dataParametersChanged));
		this.get_$column().add_$periodChanged(ss.mkdel(this, this.$dataParametersChanged));
		this.$_menu = new ss.Lazy(ss.mkdel(this, this.$createMenu));
		if (QuickView.Client.Common.AppEnvironment.get_isDesktopDevice()) {
			var menu = this.$_menu.value();
		}
		else {
			// To improve startup performance on mobile the menu is initialized on first use
		}
		if (QuickView.Client.Common.AppEnvironment.get_isDesktopDevice()) {
			this.$buttonViewMode = $("<div class='chart_mode_button'></div>").appendTo(this.$panelTop);
			//.SetTextTooltip("Toggle between line charts, bar charts and stats.");
			this.$buttonViewMode.click(ss.mkdel(this, this.$buttonChartMode_Click));
			this.get_$column().$options.add_viewModeChanged(ss.mkdel(this, this.$chartOptions_ViewModeChanged));
			// Update the button based on the current settings
			this.$updateChartModeButton();
		}
		// Show dialog on click
		this.get_$element().click(ss.mkdel(this, this.$element_Click));
		// Show the header values and periodically update them
		window.setTimeout(ss.mkdel(this, this.$updateHeaderValues));
	};
	$QuickView_Client_UI_MainView_Grid_$HeaderRowDataCell.__typeName = 'QuickView.Client.UI.MainView.Grid.$HeaderRowDataCell';
	$QuickView_Client_UI_MainView_Grid_$HeaderRowDataCell.$getHeaderValue = function(indicator, period, unit) {
		var $state = 0, $tcs = new ss.TaskCompletionSource(), isSubRed, $t1, dataBag, data, dataPoint, data1, dataPoint1;
		var $sm = function() {
			try {
				$sm1:
				for (;;) {
					switch ($state) {
						case 0: {
							$state = -1;
							isSubRed = QuickView.Client.Models.Charts.Indicator.containsData$1(indicator, 2, 1001);
							$t1 = $QuickView_Client_UI_MainView_$LocalServices.get_$dataProvider().getIndicatorData(indicator, period, 1, 4);
							$state = 1;
							$t1.continueWith($sm);
							return;
						}
						case 1: {
							$state = -1;
							dataBag = $t1.getAwaitedResult();
							if (isSubRed) {
								data = QuickView.Client.Services.Charts.IndicatorDataBag.getCustomData(dataBag, unit);
								dataPoint = Enumerable.from(data.get_dataPoints()).select(function(x) {
									return x;
								}).lastOrDefault(function(x1) {
									return x1.S !== 0 || x1.R !== 0;
								}, ss.getDefaultValue(QuickView.Client.Models.Charts.SubRedDataPoint));
								if (ss.isNullOrUndefined(dataPoint)) {
									$tcs.setResult(null);
									return;
								}
								else if (dataPoint.S !== 0) {
									$tcs.setResult(dataPoint.S);
									return;
								}
								else {
									$tcs.setResult(dataPoint.R);
									return;
								}
							}
							else {
								data1 = QuickView.Client.Services.Charts.IndicatorDataBag.getChartData(dataBag, unit);
								dataPoint1 = Enumerable.from(data1.get_dataPoints()).lastOrDefault(null, ss.getDefaultValue(QuickView.Client.Models.Charts.ChartDataPoint));
								$tcs.setResult((ss.isNullOrUndefined(dataPoint1) ? null : dataPoint1.C));
								return;
							}
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
		};
		$sm();
		return $tcs.task;
	};
	$QuickView_Client_UI_MainView_Grid_$HeaderRowDataCell.$getHeaderValueTextAndCssClass = function(headerValue, indicator) {
		var textValue;
		var cssClassName;
		if (ss.isNullOrUndefined(headerValue)) {
			cssClassName = null;
			textValue = 'N/A';
		}
		else {
			textValue = $QuickView_Client_UI_MainView_Grid_$HeaderRowDataCell.$formatHeaderValue(headerValue, indicator);
			var value = headerValue.V;
			if (QuickView.Client.Models.Charts.Indicator.isCompleteValue(indicator)) {
				cssClassName = 'complete_value';
			}
			else if (value > 0) {
				cssClassName = 'positive_performance';
			}
			else {
				cssClassName = 'negative_performance';
			}
		}
		return $QuickView_$Client_UI_MainView_Grid_$HeaderRowDataCell$TextAndCssClass.$ctor1(textValue, cssClassName);
	};
	$QuickView_Client_UI_MainView_Grid_$HeaderRowDataCell.$formatHeaderValue = function(value, indicator) {
		JS.ArgumentHelper.notNull(indicator, 'indicator');
		JS.ArgumentHelper.notNull(value, 'value');
		return QuickView.Client.UI.Charts.ChartFormat.formatNumber(value.V, value.U, indicator.timeSeriesCurrency, indicator.settings.D, 0, null, ((value.U === 4) ? 2 : null));
	};
	$QuickView_Client_UI_MainView_Grid_$HeaderRowDataCell.$create = function(row, column, parentElement) {
		JS.ArgumentHelper.notNull(row, 'row');
		JS.ArgumentHelper.notNull(column, 'column');
		JS.ArgumentHelper.notNull(parentElement, 'element');
		var newElement = $("<div class='column_header_cell'></div>").appendTo(parentElement);
		return new $QuickView_Client_UI_MainView_Grid_$HeaderRowDataCell(row, column, newElement);
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.Grid.HeaderRowDataCellXAxis
	var $QuickView_Client_UI_MainView_Grid_$HeaderRowDataCellXAxis = function(parent, element, cellElement) {
		this.$_parent = null;
		this.$_cellElement = null;
		this.$_titleElement = null;
		this.$_itemListElement = null;
		this.$_updateIntervalID = null;
		$JS_UI_FrameworkElement.call(this, element);
		JS.ArgumentHelper.notNull(parent, 'parent');
		JS.ArgumentHelper.notNull(cellElement, 'cellElement');
		this.$_parent = parent;
		this.$_cellElement = cellElement;
		this.$_titleElement = $("<div class='title'></div>").appendTo(element);
		this.$_itemListElement = $("<div class='item_list'></div>").appendTo(element);
		this.$_parent.get_$row().$table.$chartRows.add_$topRowChanged(ss.mkdel(this, this.$updateVisibilityEventHandler));
		this.$_parent.get_$column().add_$periodChanged(ss.mkdel(this, this.$column_PeriodChanged));
		// For TDY the period changes once per day (once per hour for 1D). However, for TDY and 1D
		// the header shows the current hour as the end of the interval. Therefore, the header
		// should be updated accordingly more often in these cases.
		if (this.$_parent.get_$column().$primaryPeriod.def.T === 2) {
			this.$_updateIntervalID = window.setInterval(ss.mkdel(this, this.$update), 300000);
		}
		this.$updateVisibility();
		this.$update();
		// Update the information
	};
	$QuickView_Client_UI_MainView_Grid_$HeaderRowDataCellXAxis.__typeName = 'QuickView.Client.UI.MainView.Grid.$HeaderRowDataCellXAxis';
	$QuickView_Client_UI_MainView_Grid_$HeaderRowDataCellXAxis.$calculateWorkingDaysCount = function(from, to) {
		return $QuickView_Client_UI_MainView_Grid_$HeaderRowDataCellXAxis.$calculateWorkingDaysCount$1(from, to, false, false);
	};
	$QuickView_Client_UI_MainView_Grid_$HeaderRowDataCellXAxis.$calculateWorkingDaysCount$1 = function(from, to, excludeFromAndTo, doNotRound) {
		// http://stackoverflow.com/questions/1617049/calculate-the-number-of-business-days-between-two-dates
		if (false === doNotRound) {
			from = QuickView.Client.Algorithms.TimeExtensions.roundTime$1(from, 5);
			to = QuickView.Client.Algorithms.TimeExtensions.roundTime$1(to, 5);
		}
		var result = 1 + ss.Int32.div(ss.Int32.trunc(to.subtract(from).ticks / 864000000000) * 5 - (from.get_dayOfWeek() - to.get_dayOfWeek()) * 2, 7);
		if (to.get_dayOfWeek() === 6) {
			result--;
		}
		if (from.get_dayOfWeek() === 0) {
			result--;
		}
		if (excludeFromAndTo) {
			if (QuickView.Client.Algorithms.TimeExtensions.isWorkingDay(from)) {
				result--;
			}
			if (QuickView.Client.Algorithms.TimeExtensions.isWorkingDay(to)) {
				result--;
			}
		}
		return result;
	};
	$QuickView_Client_UI_MainView_Grid_$HeaderRowDataCellXAxis.$create = function(parent, parentElement, cellElement) {
		JS.ArgumentHelper.notNull(parent, 'parent');
		JS.ArgumentHelper.notNull(parentElement, 'element');
		JS.ArgumentHelper.notNull(cellElement, 'cellElement');
		var element = $("<div class='x_axis'></div>").appendTo(parentElement);
		return new $QuickView_Client_UI_MainView_Grid_$HeaderRowDataCellXAxis(parent, element, cellElement);
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.Grid.HeaderRowUserCell
	var $QuickView_Client_UI_MainView_Grid_$HeaderRowUserCell = function(row, column, element) {
		this.$panelConnection = null;
		this.$labeUserName = null;
		this.$labelDataSite = null;
		this.$labelDataFund = null;
		this.$labelTotalHistoryDataSize = null;
		this.$buttonMinimize = null;
		this.$labelChartDataUpdateProgress = null;
		$QuickView_Client_UI_MainView_Grid_$Cell.call(this, row, column, element);
		this.$labeUserName = $("<div class='user_name_label' id='buttonUserMenu'></div>").appendTo(element);
		this.$labelDataSite = $("<div class='category_label'></div>").appendTo(element);
		this.$labelDataFund = $("<div class='sub_category_label'></div>").appendTo(element);
		this.$labelTotalHistoryDataSize = $("<div class='history_data_size'></div>").appendTo(element);
		if (QuickView.Client.Common.AppEnvironment.get_isDesktopDevice()) {
			JS.UI.TooltipExtensions.setTextTooltip(this.$labelTotalHistoryDataSize, 'Total data downloaded during the last 5m.', null, 5000, null);
		}
		this.$labelChartDataUpdateProgress = $("<div class='chart-data-update-progress'></div>").appendTo(element);
		JS.UI.UIEventExtensions.virtualClick(this.get_element(), ss.mkdel(this, this.$element_Click));
		var labelVersion = $("<div class='version_label'></div>").appendTo(element);
		labelVersion.text('v' + QuickView.Client.Common.AppEnvironment.version.number);
		if (QuickView.Client.Common.AppEnvironment.get_isDesktopDevice()) {
			this.$buttonMinimize = JS.UI.TooltipExtensions.setTextTooltip($("<div class='minimize_button'></div>").appendTo(element), 'Minimize the application to header only.', null, 5000, null);
			JS.UI.UIEventExtensions.virtualClick(this.$buttonMinimize, ss.mkdel(this, this.$buttonMinimize_Click));
		}
		if (QuickView.Client.Common.AppEnvironment.get_isMobileDevice()) {
			this.$panelConnection = $("<div class='" + ('connection' || '') + "'></div>").appendTo(element);
			QuickView.Client.Common.AppContext.application.add_downloadProgressChanged(ss.mkdel(this, this.$versionChecker_UpdateProgress));
			QuickView.Client.Common.AppContext.application.add_downloadComplete(ss.mkdel(this, this.$versionChecker_DownloadComplete));
			QuickView.Client.Common.AppContext.application.add_connectivityStatusChanged(ss.mkdel(this, this.$versionChecker_ConnectivityStatusChanged));
		}
		// Show user info
		this.$labeUserName.text(QuickView.Client.Common.AppContext.user.N);
		this.get_$row().$table.$chartRows.add_$topRowChanged(ss.mkdel(this, this.$table_TopRowChanged));
		this.$updateControls();
		this.$updateDownloadedDataSize();
		//QuickView.Client.Services.Charts.ChartDataEvents$TimeSeries.add_beginUpdateProcess(ss.mkdel(this, this.$updates_BeginOrEndTimeSeriesUpdateProcess));
		//QuickView.Client.Services.Charts.ChartDataEvents$TimeSeries.add_endUpdateProcess(ss.mkdel(this, this.$updates_BeginOrEndTimeSeriesUpdateProcess));
		//QuickView.Client.Services.Charts.ChartDataEvents$TimeSeries.add_beginTimeSeriesUpdate(ss.mkdel(this, this.$updates_BeginTimeSeriesUpdate));
		//QuickView.Client.Services.Charts.ChartDataEvents$TimeSeries.add_timeSeriesUpdateError(ss.mkdel(this, this.$updates_EndTimeSeriesUpdateError));
	};
	$QuickView_Client_UI_MainView_Grid_$HeaderRowUserCell.__typeName = 'QuickView.Client.UI.MainView.Grid.$HeaderRowUserCell';
	$QuickView_Client_UI_MainView_Grid_$HeaderRowUserCell.$create = function(row, column, parentElement) {
		JS.ArgumentHelper.notNull(row, 'row');
		JS.ArgumentHelper.notNull(column, 'column');
		JS.ArgumentHelper.notNull(parentElement, 'element');
		var element = $("<div class='user_cell'></div>").appendTo(parentElement);
		return new $QuickView_Client_UI_MainView_Grid_$HeaderRowUserCell(row, column, element);
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.Grid.IDataCellMenuListener
	var $QuickView_Client_UI_MainView_Grid_$IDataCellMenuListener = function() {
	};
	$QuickView_Client_UI_MainView_Grid_$IDataCellMenuListener.__typeName = 'QuickView.Client.UI.MainView.Grid.$IDataCellMenuListener';
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.Grid.IndicatorOptionsProvider
	var $QuickView_Client_UI_MainView_Grid_$IndicatorOptionsProvider = function(table) {
		this.$_table = null;
		this.$_itemDict = null;
		JS.ArgumentHelper.notNull(table, 'table');
		this.$_table = table;
		this.$_itemDict = {};
	};
	$QuickView_Client_UI_MainView_Grid_$IndicatorOptionsProvider.__typeName = 'QuickView.Client.UI.MainView.Grid.$IndicatorOptionsProvider';
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.Grid.ProgressBar
	var $QuickView_Client_UI_MainView_Grid_$ProgressBar = function(element) {
		this.$_cssClass = null;
		this.$_value = 0;
		this.$_bar = null;
		$JS_UI_FrameworkElement.call(this, element);
		this.$_bar = $("<div class='inner'></div>").appendTo(element);
		this.$updateBar();
	};
	$QuickView_Client_UI_MainView_Grid_$ProgressBar.__typeName = 'QuickView.Client.UI.MainView.Grid.$ProgressBar';
	$QuickView_Client_UI_MainView_Grid_$ProgressBar.$create = function(parentElement) {
		JS.ArgumentHelper.notNull(parentElement, 'parentElement');
		var element = $("<div class='progress-bar'><div>").appendTo(parentElement);
		return new $QuickView_Client_UI_MainView_Grid_$ProgressBar(element);
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.Grid.Row
	var $QuickView_Client_UI_MainView_Grid_$Row = function(table, element) {
		this.$table = null;
		this.$3$IsEnabledChangedField = null;
		this.$_isEnabled = true;
		$JS_UI_FrameworkElement.call(this, element);
		JS.ArgumentHelper.notNull(table, 'table');
		this.$table = table;
	};
	$QuickView_Client_UI_MainView_Grid_$Row.__typeName = 'QuickView.Client.UI.MainView.Grid.$Row';
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.Grid.Table
	var $QuickView_Client_UI_MainView_Grid_$Table = function(element, parentElement, userService) {
		this.$2$ColumnAddedField = null;
		this.$2$ColumnRemovedField = null;
		this.$2$ColumnMovedField = null;
		this.$headerColumn = null;
		this.$columns = null;
		this.$_columnList = null;
		this.$isVisible = false;
		this.$2$VisibilityChangedField = null;
		this.$options = null;
		this.$indicatorOptionsProvider = null;
		this.$settings = null;
		this.$userSettings = null;
		this.$_tableLayout = null;
		this.$_parentElement = null;
		this.$_mainMenu = null;
		this.$_columnChangedExecutor = null;
		this.$_userService = null;
		this.$_updateLayoutExecutor = null;
		this.$headerRow = null;
		this.$chartRows = null;
		this.$_favorites = null;
		this.$_favoriteDict = null;
		this.$2$FavoritesChangedField = null;
		this.$_rowHeaderMenu = null;
		this.$_dataCellMenu = null;
		this.$_displayedChartsMenu = null;
		this.$_rowHeaderMenuRow = null;
		this.$_chartRowPanel = null;
		this.$_scrollIndicatorUp = null;
		this.$_scrollIndicatorDown = null;
		this.$_rootSubmenuIndicatorCountDict = null;
		this.$_submenuIndicatorCountDict = null;
		this.$_dataCellMenuListener = null;
		this.$_displayedChartsMenuListener = null;
		this.$_scrollStopExecutor = null;
		$JS_UI_UIElement.call(this, element);
		JS.ArgumentHelper.notNull(parentElement, 'parentElement');
		JS.ArgumentHelper.notNull(userService, 'userService');
		this.$_tableLayout = $QuickView_Client_UI_MainView_Grid_$TableLayoutInfo.$ctor();
		this.$_userService = userService;
		this.$_parentElement = parentElement;
		this.$userSettings = (new QuickView.Client.UI.Common.Settings.ApplicationSettings()).getUserSettings(QuickView.Client.Common.AppContext.user.N);
		this.$settings = this.$userSettings.get_grid();
		this.$options = (ss.isNullOrUndefined(this.$settings.get_options()) ? new QuickView.Client.UI.Common.Grid.GridOptions() : new QuickView.Client.UI.Common.Grid.GridOptions.$ctor1(this.$settings.get_options()));
		this.$indicatorOptionsProvider = new $QuickView_Client_UI_MainView_Grid_$IndicatorOptionsProvider(this);
		this.$isVisible = true;
		this.$initColumns();
		{
			this.$options.add_optionChanged(ss.mkdel(this, this.$gridOptions_OptionChanged));
			this.$options.add_displayOptionsChanged(ss.mkdel(this, this.$gridOptions_DisplayOptionsChanged));
			// The option should always be "on" and there is no menu or dialog to turn it off
			this.$options.set_displayOptions(this.$options.get_displayOptions() | 4);
		}
		this.$initRows();
		if (QuickView.Client.Common.AppEnvironment.get_isMobileDevice()) {
			// Update layout on window resize and orientation change
			JS.UI.MobileDevice.add_orientationChanged(ss.mkdel(this, this.$mobileDevice_OrientationChanged));
			JS.UI.MobileDevice.add_resized(ss.mkdel(this, this.$mobileDevice_Resized));
			JS.UI.MobileEventExtensions.swipeLeft(this.get_element(), ss.mkdel(this, this.$mobileDevice_SwipeLeft));
			JS.UI.MobileEventExtensions.swipeRight(this.get_element(), ss.mkdel(this, this.$mobileDevice_SwipeRight));
		}
		else {
			// Create the main menu. Even if the menu is shown from the user cell it is created here
			// in order to subscribe to events.
			$(document).keydown($QuickView_Client_UI_MainView_Grid_$Table.$document_KeyDown);
			QuickView.Client.UI.Common.UIElements.get_application().add_minimized(ss.mkdel(this, this.$application_Minimized));
			QuickView.Client.UI.Common.UIElements.get_application().add_restored(ss.mkdel(this, this.$application_Restored));
			if (!ss.referenceEquals(QuickView.Client.Common.AppEnvironment.version.number, this.$userSettings.get_lastKnownVersionNumber())) {
				// The user has not read the history of the current version
				this.get_element().addClass('new_version');
			}
		}
		this.$_mainMenu = new ss.Lazy(ss.mkdel(this, this.$createMainMenu));
		if (QuickView.Client.Common.AppEnvironment.get_isDesktopDevice()) {
			var menu = this.$_mainMenu.value();
		}
		else {
			// To improve startup performance on mobile the menu is initialized on first use
		}
		// Show or hide the vertical axis
		this.$updateVerticalAxis();
		if (QuickView.Client.Common.AppEnvironment.get_isMobileDevice()) {
			// Restore the last topmost row and leftmost column
			if (false === ss.isNullOrEmptyString(this.$settings.get_leftmostColumnID())) {
				var leftmostColumn = Enumerable.from(this.$columns).firstOrDefault(ss.mkdel(this, function(x) {
					return ss.referenceEquals(x.get_$id(), this.$settings.get_leftmostColumnID());
				}), ss.getDefaultValue($QuickView_Client_UI_MainView_Grid_$ChartColumn));
				if (ss.isValue(leftmostColumn)) {
					this.$_tableLayout.firstVisibleColumnIndex = leftmostColumn.$index;
				}
			}
			// Cache the value as it will change immediately after rows are
			// created and 
			var topmostRowIndicatorID = this.$settings.get_topmostRowIndicatorID();
			window.setTimeout(ss.mkdel(this, function() {
				if (false === ss.isNullOrEmptyString(topmostRowIndicatorID)) {
					for (var k = 0; k < this.$chartRows.$rows.length; k++) {
						var row = this.$chartRows.$rows[k];
						if (ss.referenceEquals(QuickView.Client.Models.Charts.Indicator.idLower(row.get_$indicator()), topmostRowIndicatorID)) {
							this.$chartRows.$setFirstVisibleRowIndex(k);
							break;
						}
					}
				}
			}), 200);
		}
	};
	$QuickView_Client_UI_MainView_Grid_$Table.__typeName = 'QuickView.Client.UI.MainView.Grid.$Table';
	$QuickView_Client_UI_MainView_Grid_$Table.$document_KeyDown = function(e) {
		if (ss.contains($QuickView_Client_UI_MainView_Grid_$Table.$globallyDisabledKeyList, e.which)) {
			e.preventDefault();
		}
	};
	$QuickView_Client_UI_MainView_Grid_$Table.$isRowHeaderOrUserCellDescendant = function(element) {
		JS.ArgumentHelper.notNull(element, 'element');
		return $(element).closest('.chart_row_header, .user_cell').length > 0;
	};
	$QuickView_Client_UI_MainView_Grid_$Table.$isSwipeRowOrColumnAllowed = function(element) {
		// Swiping is not allowed when done on the header of a row or the user cell
		// Reasons:
		// - Swiping left on the header of a row is used to remove the row
		// - Swiping up/down on the header of a row is used to move the row
		// - Swiping on the user cell is illogical
		return false === $QuickView_Client_UI_MainView_Grid_$Table.$isRowHeaderOrUserCellDescendant(element);
	};
	$QuickView_Client_UI_MainView_Grid_$Table.$updateRowOrColumnVisibility = function(T) {
		return function(isColumn, itemList, firstVisibleItemIndex, maximumVisibleItemCount) {
			var lastIndex;
			if (maximumVisibleItemCount < ss.count(itemList)) {
				// Show a subset of the rows
				lastIndex = firstVisibleItemIndex + maximumVisibleItemCount;
				// Mantis 0006525: Allow the last column to be the only one visible
				// 2014-04-11 Dal: Allow the last row to be the only one visible
				//if (isColumn) // 2014-04-11 - Allow the last row to be the only one visible
				{
					if (lastIndex > ss.count(itemList)) {
						lastIndex = ss.count(itemList);
						if (firstVisibleItemIndex >= lastIndex) {
							firstVisibleItemIndex = Math.max(0, lastIndex - 1);
						}
					}
				}
				// // 2014-04-11 - Allow the last row to be the only one visible
				// else
				// {
				// if (lastIndex > itemList.Count)
				// {
				// firstVisibleItemIndex = itemList.Count - maximumVisibleItemCount;
				// lastIndex = itemList.Count;
				// }
				// }
				for (var i = 0; i < ss.count(itemList); i++) {
					var item = ss.getItem(itemList, i);
					var showRowOrColumn = i >= firstVisibleItemIndex && i < lastIndex;
					$QuickView_Client_UI_MainView_Grid_$Table.$setRowOrColumnVisibility(item, showRowOrColumn);
				}
			}
			else {
				// Show all elements
				var $t1 = ss.getEnumerator(itemList);
				try {
					while ($t1.moveNext()) {
						var item1 = $t1.current();
						$QuickView_Client_UI_MainView_Grid_$Table.$setRowOrColumnVisibility(item1, true);
					}
				}
				finally {
					$t1.dispose();
				}
				firstVisibleItemIndex = 0;
				lastIndex = firstVisibleItemIndex + ss.count(itemList);
			}
			// Take care about the case in which "itemList.Count" is zero
			return { item1: firstVisibleItemIndex, item2: Math.max(0, lastIndex - 1) };
		};
	};
	$QuickView_Client_UI_MainView_Grid_$Table.$setRowOrColumnVisibility = function(item, visible) {
		if (ss.isInstanceOfType(item, $QuickView_Client_UI_MainView_Grid_$Row)) {
			// Disable the row instead of hiding it
			ss.cast(item, $QuickView_Client_UI_MainView_Grid_$Row).set_$isEnabled(visible);
		}
		else if (ss.isInstanceOfType(item, $QuickView_Client_UI_MainView_Grid_$Column)) {
			ss.cast(item, $QuickView_Client_UI_MainView_Grid_$Column).$setVisibility(visible);
		}
		else {
			throw new ss.NotSupportedException(ss.formatString("Unsupported item type: '{0}'.", ss.getTypeFullName(ss.getInstanceType(item))));
		}
	};
	$QuickView_Client_UI_MainView_Grid_$Table.$create = function(parentElement, userService) {
		JS.ArgumentHelper.notNull(parentElement, 'parentElement');
		JS.ArgumentHelper.notNull(userService, 'userService');
		var element = $("<div class='table'></div>").appendTo(parentElement);
		return new $QuickView_Client_UI_MainView_Grid_$Table(element, parentElement, userService);
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.Grid.TableDimensionSizes
	var $QuickView_Client_UI_MainView_Grid_$TableDimensionSizes = function() {
	};
	$QuickView_Client_UI_MainView_Grid_$TableDimensionSizes.__typeName = 'QuickView.Client.UI.MainView.Grid.$TableDimensionSizes';
	$QuickView_Client_UI_MainView_Grid_$TableDimensionSizes.$ctor = function(headerSize, cellSize, maximumCellCount) {
		var $this = {};
		$this.headerSize = 0;
		$this.cellSize = 0;
		$this.maximumCellCount = 0;
		$this.headerSize = headerSize;
		$this.cellSize = cellSize;
		$this.maximumCellCount = maximumCellCount;
		return $this;
	};
	$QuickView_Client_UI_MainView_Grid_$TableDimensionSizes.isInstanceOfType = function() {
		return true;
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.Grid.TableLayout
	var $QuickView_Client_UI_MainView_Grid_$TableLayout = function() {
	};
	$QuickView_Client_UI_MainView_Grid_$TableLayout.__typeName = 'QuickView.Client.UI.MainView.Grid.$TableLayout';
	$QuickView_Client_UI_MainView_Grid_$TableLayout.$calculateLayout = function(rows, columns, isMinimized) {
		JS.ArgumentHelper.positiveOrDefault(rows, 'rows');
		JS.ArgumentHelper.positiveOrDefault(columns, 'columns');
		var width;
		var height;
		if (QuickView.Client.Common.AppEnvironment.get_isMobileDevice()) {
			// Calculate sizes according to the size of the screen
			var windowSize = JS.UI.UIUtils.getWindowSize();
			width = $QuickView_Client_UI_MainView_Grid_$TableLayout.$calculateDimensionSizes(windowSize.width - 2 - 2 + 2, $QuickView_Client_UI_MainView_Grid_$TableLayout.$headerColumnWidth, $QuickView_Client_UI_MainView_Grid_$TableLayout.$dataColumnWidth, columns);
			height = $QuickView_Client_UI_MainView_Grid_$TableLayout.$calculateDimensionSizes(windowSize.height - 2, $QuickView_Client_UI_MainView_Grid_$TableLayout.$headerRowHeight, $QuickView_Client_UI_MainView_Grid_$TableLayout.$dataRowHeight, rows);
			height = $QuickView_Client_UI_MainView_Grid_$TableDimensionSizes.$ctor(height.headerSize - 2, height.cellSize - 2, height.maximumCellCount);
		}
		else {
			width = $QuickView_Client_UI_MainView_Grid_$TableDimensionSizes.$ctor($QuickView_Client_UI_MainView_Grid_$TableLayout.$headerColumnWidth.default, $QuickView_Client_UI_MainView_Grid_$TableLayout.$dataColumnWidth.default, columns);
			height = $QuickView_Client_UI_MainView_Grid_$TableDimensionSizes.$ctor($QuickView_Client_UI_MainView_Grid_$TableLayout.$headerRowHeight.default, $QuickView_Client_UI_MainView_Grid_$TableLayout.$dataRowHeight.default, rows);
		}
		// Apply sizes
		var table = $('.table');
		var headerRow = $('.table > .header_row');
		var userCell = $('.table > .header_row > .user_cell');
		var columnHeaders = $('.table > .header_row > .column_header_panel > .column_header_cell');
		var chartRowsPanel = $('.table > .chart_row_panel');
		var rowElements = $('.table > .chart_row_panel > .chart_row');
		var rowHeaders = $('.table > .chart_row_panel > .chart_row > .chart_row_header');
		var chartCells = $('.table > .chart_row_panel > .chart_row > .chart_cell_panel > .chart_cell');
		// $.width takes sets the width of the content regardless of the value of the "box-sizing" property.
		// Therefore, use the css property instead.
		JS.UI.jQueryExtensions.cssWidth(userCell, width.headerSize);
		JS.UI.jQueryExtensions.cssWidth(columnHeaders, width.cellSize);
		JS.UI.jQueryExtensions.cssWidth(rowHeaders, width.headerSize);
		// Compensate for 1px left margin
		JS.UI.jQueryExtensions.cssWidth(chartCells, width.cellSize - 1);
		// Set the height explicitly since all cells are floating left thus the calculated height becomes
		// zero pixel
		JS.UI.jQueryExtensions.cssHeight(headerRow, height.headerSize + 2);
		// Account for 2px margin of cells
		JS.UI.jQueryExtensions.cssHeight(userCell, height.headerSize);
		JS.UI.jQueryExtensions.cssHeight(columnHeaders, height.headerSize);
		// Set the height explicitly since all cells are floating left thus the calculated height becomes
		// zero pixel
		// Rows must have a valid size to move them; by default they have height zero since all
		// divs inside them are "float: left;"
		// Since v3.45.00 the height of the 
		JS.UI.jQueryExtensions.cssHeight(chartRowsPanel, (height.cellSize + 2) * height.maximumCellCount);
		// Account for 1px margin of each cell
		JS.UI.jQueryExtensions.cssHeight(rowElements, height.cellSize + 2);
		// Account for 1px margin of each row
		JS.UI.jQueryExtensions.cssHeight(rowHeaders, height.cellSize);
		// Compensate for 1px top and bottom margin and 1px row border
		JS.UI.jQueryExtensions.cssHeight(chartCells, height.cellSize - 4);
		// CSS
		// Only the last column header must have a right border
		var columnHeaderElements = $('.table > .header_row > .column_header_panel > .column_header_cell > .top_panel, .table > .header_row > .column_header_panel > .column_header_cell > .x_axis');
		columnHeaderElements.css('border-right-width', '0px');
		// Only the last visible cell must have a margin
		chartCells.css('margin-right', '0px');
		// Cells only - without header
		var cellPanelWidth = width.cellSize * width.maximumCellCount + 2;
		// 2px margin
		// v3.45.00 - All table rows are visible on mobile and free scrolling is possible.
		// Thus the size of the table must correspond to all rows.
		var cellPanelHeight = (height.cellSize + 2) * rows;
		// 2px margin per row
		//var cellPanelHeight = (height.CellSize + 2) * height.MaximumCellCount; // 2px margin per row
		var tableWidth = 2 + width.headerSize + 2 + cellPanelWidth;
		if (QuickView.Client.Common.AppEnvironment.get_isMobileDevice()) {
			// There is no horizontal padding on mobile devices (1pxleft and 1px right)
			// The user cell and the header of each row does not have a 1px left margin
			// The column header panel and the chart cells panel does not have a 1px right margin
			tableWidth -= 4;
		}
		var tableHeight = 2 + height.headerSize + 2 + cellPanelHeight;
		JS.UI.jQueryExtensions.cssWidth(table, tableWidth);
		if (isMinimized) {
			// The cell panel is not displayed
			var mimimizedTableHeight = 2 + height.headerSize + 2;
			// Header row margin
			JS.UI.jQueryExtensions.cssHeight(table, mimimizedTableHeight);
		}
		else {
			JS.UI.jQueryExtensions.cssHeight(table, tableHeight);
		}
		return $QuickView_Client_UI_MainView_Grid_$TableLayoutCalculated.$ctor(height.maximumCellCount, width.maximumCellCount, width, height);
	};
	$QuickView_Client_UI_MainView_Grid_$TableLayout.$adjustLayout = function(firstColumnIndex, lastColumnIndex, layout) {
		JS.ArgumentHelper.positiveOrDefault(firstColumnIndex, 'firstColumnIndex');
		JS.ArgumentHelper.positiveOrDefault(lastColumnIndex, 'lastColumnIndex');
		if (firstColumnIndex > lastColumnIndex) {
			throw new ss.ArgumentException('The index of the last column cannot be smaller than the index of the first one.');
		}
		JS.ArgumentHelper.notNull(layout, 'layout');
		var firstChartCells = $(ss.formatString('.table > .chart_row_panel > .chart_row > .chart_cell_panel > .chart_cell:nth-child({0})', firstColumnIndex + 1));
		var lastChartCells = $(ss.formatString('.table > .chart_row_panel > .chart_row > .chart_cell_panel > .chart_cell:nth-child({0})', lastColumnIndex + 1));
		if (firstColumnIndex === lastColumnIndex) {
			// A single column
			// Compensate with one additional pixel for row border
			// Compensate with one additional pixel for row border and 1 pixel for margin
			JS.UI.jQueryExtensions.cssWidth(firstChartCells, layout.width.cellSize - 4);
		}
		else {
			// Compensate with one additional pixel for row border
			JS.UI.jQueryExtensions.cssWidth(firstChartCells, layout.width.cellSize - 2);
			// Compensate with one additional pixel for row border and 1 pixel for margin
			JS.UI.jQueryExtensions.cssWidth(lastChartCells, layout.width.cellSize - 3);
		}
		// CSS
		// Only the last column header must have a right border
		var columnHeaderElements = $(ss.formatString('.table > .header_row > .column_header_panel > .column_header_cell:nth-child({0}) > .top_panel, .table > .header_row > .column_header_panel > .column_header_cell:nth-child({0}) > .x_axis', lastColumnIndex + 1));
		columnHeaderElements.css('border-right-width', '1px');
		// Only the last visible cell must have a margin
		lastChartCells.css('margin-right', '1px');
	};
	$QuickView_Client_UI_MainView_Grid_$TableLayout.$calculateDimensionSizes = function(windowSize, headerDimention, cellDimention, cellCount) {
		var headerSize = headerDimention.minimum;
		var cellSize = cellDimention.minimum;
		var maximumCellCount = cellCount;
		var totalSize = headerSize + maximumCellCount * cellSize;
		while (windowSize < totalSize && maximumCellCount > 0) {
			// Reduce the number of cells until the size fits
			maximumCellCount--;
			totalSize = headerSize + maximumCellCount * cellSize;
		}
		if (totalSize < windowSize) {
			// Extend the sizes to fit the window size
			var averageSize = ss.Int32.div(windowSize, 1 + maximumCellCount);
			cellSize = Math.min(averageSize, cellDimention.maximum);
			var remainingSize = windowSize - maximumCellCount * cellSize;
			headerSize = Math.min(remainingSize, headerDimention.maximum);
		}
		return $QuickView_Client_UI_MainView_Grid_$TableDimensionSizes.$ctor(headerSize, cellSize, maximumCellCount);
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.Grid.TableLayoutCalculated
	var $QuickView_Client_UI_MainView_Grid_$TableLayoutCalculated = function() {
	};
	$QuickView_Client_UI_MainView_Grid_$TableLayoutCalculated.__typeName = 'QuickView.Client.UI.MainView.Grid.$TableLayoutCalculated';
	$QuickView_Client_UI_MainView_Grid_$TableLayoutCalculated.$ctor = function(maximumRows, maximumColumns, width, height) {
		var $this = {};
		$this.maximumRows = 0;
		$this.maximumColumns = 0;
		$this.width = null;
		$this.height = null;
		$this.maximumRows = maximumRows;
		$this.maximumColumns = maximumColumns;
		$this.width = width;
		$this.height = height;
		return $this;
	};
	$QuickView_Client_UI_MainView_Grid_$TableLayoutCalculated.isInstanceOfType = function() {
		return true;
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.Grid.TableLayoutInfo
	var $QuickView_Client_UI_MainView_Grid_$TableLayoutInfo = function() {
	};
	$QuickView_Client_UI_MainView_Grid_$TableLayoutInfo.__typeName = 'QuickView.Client.UI.MainView.Grid.$TableLayoutInfo';
	$QuickView_Client_UI_MainView_Grid_$TableLayoutInfo.$ctor = function() {
		var $this = {};
		$this.headerHeight = 0;
		$this.cellHeight = 0;
		$this.visibleRowCount = 0;
		$this.firstVisibleColumnIndex = 0;
		$this.visibleColumnCount = 0;
		return $this;
	};
	$QuickView_Client_UI_MainView_Grid_$TableLayoutInfo.isInstanceOfType = function() {
		return true;
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.Grid.UpdateXAxisEventArgs
	var $QuickView_Client_UI_MainView_Grid_$UpdateXAxisEventArgs = function() {
		ss.EventArgs.call(this);
	};
	$QuickView_Client_UI_MainView_Grid_$UpdateXAxisEventArgs.__typeName = 'QuickView.Client.UI.MainView.Grid.$UpdateXAxisEventArgs';
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.Grid.BarHighlightEventArgs
	var $QuickView_Client_UI_MainView_Grid_BarHighlightEventArgs = function(source, barID) {
		this.source = null;
		this.barID = null;
		ss.EventArgs.call(this);
		this.source = source;
		this.barID = barID;
	};
	$QuickView_Client_UI_MainView_Grid_BarHighlightEventArgs.__typeName = 'QuickView.Client.UI.MainView.Grid.BarHighlightEventArgs';
	global.QuickView.Client.UI.MainView.Grid.BarHighlightEventArgs = $QuickView_Client_UI_MainView_Grid_BarHighlightEventArgs;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.Grid.ChartRowType
	var $QuickView_Client_UI_MainView_Grid_ChartRowType = function() {
	};
	$QuickView_Client_UI_MainView_Grid_ChartRowType.__typeName = 'QuickView.Client.UI.MainView.Grid.ChartRowType';
	global.QuickView.Client.UI.MainView.Grid.ChartRowType = $QuickView_Client_UI_MainView_Grid_ChartRowType;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.Grid.ColumnIndexEventArgs
	var $QuickView_Client_UI_MainView_Grid_ColumnIndexEventArgs = function(index) {
		this.index = 0;
		ss.EventArgs.call(this);
		this.index = index;
	};
	$QuickView_Client_UI_MainView_Grid_ColumnIndexEventArgs.__typeName = 'QuickView.Client.UI.MainView.Grid.ColumnIndexEventArgs';
	global.QuickView.Client.UI.MainView.Grid.ColumnIndexEventArgs = $QuickView_Client_UI_MainView_Grid_ColumnIndexEventArgs;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.Grid.ColumnMovedEventArgs
	var $QuickView_Client_UI_MainView_Grid_ColumnMovedEventArgs = function(oldIndex, newIndex) {
		this.oldIndex = 0;
		this.newIndex = 0;
		ss.EventArgs.call(this);
		this.oldIndex = oldIndex;
		this.newIndex = newIndex;
	};
	$QuickView_Client_UI_MainView_Grid_ColumnMovedEventArgs.__typeName = 'QuickView.Client.UI.MainView.Grid.ColumnMovedEventArgs';
	global.QuickView.Client.UI.MainView.Grid.ColumnMovedEventArgs = $QuickView_Client_UI_MainView_Grid_ColumnMovedEventArgs;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.Grid.IndicatorDataPriority
	var $QuickView_Client_UI_MainView_Grid_IndicatorDataPriority = function() {
	};
	$QuickView_Client_UI_MainView_Grid_IndicatorDataPriority.__typeName = 'QuickView.Client.UI.MainView.Grid.IndicatorDataPriority';
	global.QuickView.Client.UI.MainView.Grid.IndicatorDataPriority = $QuickView_Client_UI_MainView_Grid_IndicatorDataPriority;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.Grid.MainPanel
	var $QuickView_Client_UI_MainView_Grid_MainPanel = function(userService) {
		this.$_table = null;
		this.$_userService = null;
		$JS_UI_FrameworkElement.call(this, QuickView.Client.UI.Common.UIElements.get_mainPanel());
		JS.ArgumentHelper.notNull(userService, 'userService');
		this.$_userService = userService;
		window.setTimeout(ss.mkdel(this, this.$init));
	};
	$QuickView_Client_UI_MainView_Grid_MainPanel.__typeName = 'QuickView.Client.UI.MainView.Grid.MainPanel';
	global.QuickView.Client.UI.MainView.Grid.MainPanel = $QuickView_Client_UI_MainView_Grid_MainPanel;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.Windows.ExtendedChartWindow
	var $QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow = function(key, table, indicator, period, chartType, displayMode, relatedIndicators) {
		this.$_toolbar = null;
		this.$buttonUnit = null;
		this.$buttonMenu = null;
		this.$buttonChartType = null;
		this.$buttonDataViewMode = null;
		this.$buttonChartMerge = null;
		this.$buttonBenchmarksViewMode = null;
		this.$buttonSelectSeries = null;
		this.$panelTopStats = null;
		this.$panelBottomStats = null;
		this.$panelBottomStats_BenchmarksSeparatorElement = null;
		this.$panelChart = null;
		this.$buttonChart_ResetZoom = null;
		this.$dropDownSelectSeries = null;
		this.$_displayDataUnit = 0;
		this.$_dataViewMode = 0;
		this.$_dataViewModeList = null;
		this.$_benchmarkViewMode = 0;
		this.$_table = null;
		this.$_indicator = null;
		this.$_indicatorOptions = null;
		this.$_indicatorUnitList = null;
		this.$_period = null;
		this.$_chartType = 0;
		this.$_lineResolution = 0;
		this.$_barResolution = 0;
		this.$_chart = null;
		this.$_dataHandle = null;
		this.$_hwmDataHandle = null;
		this.$_slippageDataHandle = null;
		this.$_benchmarkDataHandleList = null;
		this.$_relatedIndicatorDataHandleList = null;
		this.$_relatedIndicatorList = null;
		this.$_newRelatedIndicatorList = null;
		this.$_areAllRelatedIndicatorsSelected = false;
		this.$_displayMode = 0;
		this.$_updateChartExecutor = null;
		this.$_chartPanelInitialized = false;
		this.$_currentChartUnit = 0;
		this.$_updateStatsExecutor = null;
		this.$_displayMode_RelatedIndicators_Resized = false;
		JS.UI.Windows.Window.$ctor1.call(this, key);
		JS.ArgumentHelper.notNull(table, 'table');
		JS.ArgumentHelper.notNull(indicator, 'indicator');
		JS.ArgumentHelper.notNull(period, 'period');
		var areAllRelatedIndicatorsSelected = false;
		if (displayMode === 1 && ss.isNullOrUndefined(relatedIndicators)) {
			// All related indicators should be displayed
			var relationship = QuickView.Client.Models.Charts.Indicator.getSubordinateRelationship(indicator);
			if (ss.isValue(relationship)) {
				relatedIndicators = relationship.indicators;
				areAllRelatedIndicatorsSelected = true;
			}
		}
		this.$_table = table;
		this.$_indicator = indicator;
		this.$_indicatorOptions = table.$indicatorOptionsProvider.$get(indicator);
		this.$_period = period;
		this.$_chartType = chartType;
		this.$_displayMode = displayMode;
		this.$_relatedIndicatorList = relatedIndicators;
		this.$_areAllRelatedIndicatorsSelected = areAllRelatedIndicatorsSelected;
		this.$_lineResolution = period.getResolution(2, 2);
		this.$_barResolution = period.getResolution(1, 2);
	};
	$QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.__typeName = 'QuickView.Client.UI.MainView.Windows.$ExtendedChartWindow';
	$QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$updateSelectSeriesDropDown = function(dropDownSelectSeries, indicators) {
		JS.ArgumentHelper.notNull(dropDownSelectSeries, 'dropDownSelectSeries');
		JS.ArgumentHelper.notNull(indicators, 'indicators');
		// Remove existing entries (if any)
		dropDownSelectSeries.empty();
		var $t1 = ss.getEnumerator(indicators);
		try {
			while ($t1.moveNext()) {
				var item = $t1.current();
				dropDownSelectSeries.append(ss.formatString("<option value='{0}'>{1}</option>", item.I, item.N));
			}
		}
		finally {
			$t1.dispose();
		}
	};
	$QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$formatStatsTime = function(time, resolution) {
		if (JS.DateTimeExt.op_Equality$1(time, null)) {
			return null;
		}
		var dateTimeFormat;
		if (QuickView.Client.Models.Charts.TimeSeriesResolutionExtensions.isIntraday(resolution)) {
			// Display time
			dateTimeFormat = 'MM/dd ha';
		}
		else if (resolution === 5) {
			// Display date
			dateTimeFormat = 'yyyy/MM/dd';
		}
		else if (resolution === 7) {
			dateTimeFormat = 'yyyy/MM';
		}
		else if (resolution === 9) {
			dateTimeFormat = 'yyyy';
		}
		else {
			dateTimeFormat = 'yyyy/MM/dd';
		}
		var formatTime = (QuickView.Client.Models.Charts.TimeSeriesResolutionExtensions.isIntraday(resolution) ? ss.unbox(time).toLocalTime() : ss.unbox(time));
		return formatTime.format(dateTimeFormat);
	};
	$QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$createLineChartFilters = function(extremes, resolution) {
		var filter = $QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$createLineTopInfoAndStatsFilter(extremes, resolution);
		return $QuickView_$Client_UI_MainView_Windows_$ExtendedChartWindow$ChartFilters.$ctor(filter, filter);
	};
	$QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$createLineTopInfoAndStatsFilter = function(extremes, resolution) {
		var min = extremes.I;
		var max = extremes.A;
		var dataMin = (ss.isNullOrUndefined(min) ? ss.unbox(extremes.DI) : ss.unbox(min));
		var dataMax = (ss.isNullOrUndefined(max) ? ss.unbox(extremes.DA) : ss.unbox(max));
		var minTime = QuickView.Client.Algorithms.TimeExtensions.roundTime$1(new JS.DateTimeExt.$ctor2(new Date(ss.Int32.trunc(dataMin)), 1), resolution);
		var maxTime = QuickView.Client.Algorithms.TimeExtensions.advanceTime$1(QuickView.Client.Algorithms.TimeExtensions.roundTime$1(new JS.DateTimeExt.$ctor2(new Date(ss.Int32.trunc(dataMax)), 1), resolution), resolution).addMilliseconds(-1);
		var predicate = function(x, index) {
			return (ss.isNullOrUndefined(min) || JS.DateTimeExt.op_GreaterThanOrEqual(x.T, minTime)) && (ss.isNullOrUndefined(max) || JS.DateTimeExt.op_LessThanOrEqual(x.T, maxTime));
		};
		return $QuickView_$Client_UI_MainView_Windows_$ExtendedChartWindow$ChartValueFilter.$ctor(predicate, minTime.toDateTime().valueOf(), maxTime.toDateTime().valueOf(), ss.isNullOrUndefined(min), ss.isNullOrUndefined(max));
	};
	$QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$createBarChartFilters = function(data, extremes) {
		return $QuickView_$Client_UI_MainView_Windows_$ExtendedChartWindow$ChartFilters.$ctor($QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$createBarTopInfoFilter(extremes), $QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$createBarStatsFilter(data, extremes));
	};
	$QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$createBarTopInfoFilter = function(extremes) {
		var min = extremes.I;
		var max = extremes.A;
		var predicate = function(x, index) {
			return (ss.isNullOrUndefined(min) || ss.Nullable$1.ge(index, min)) && (ss.isNullOrUndefined(max) || ss.Nullable$1.le(index, max));
		};
		return $QuickView_$Client_UI_MainView_Windows_$ExtendedChartWindow$ChartValueFilter.$ctor(predicate, min, max, ss.isNullOrUndefined(min), ss.isNullOrUndefined(max));
	};
	$QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$createBarStatsFilter = function(data, extremes) {
		var itemList = ss.safeCast(data.get_dataPoints(), ss.IList) || Enumerable.from(data.get_dataPoints()).toArray();
		// The filter MUST use the date/time of the first and last bar since stat items may have higher resolution
		// than chart items
		var min;
		var max;
		if (ss.isValue(extremes.I)) {
			var index = ss.Int32.trunc(Math.max(ss.unbox(extremes.I), 0));
			var item = ss.getItem(itemList, index);
			min = item.T;
		}
		else {
			min = null;
		}
		if (ss.isValue(extremes.A)) {
			var index1 = ss.Int32.trunc(Math.min(ss.unbox(extremes.A), ss.count(itemList) - 1));
			var item1 = ss.getItem(itemList, index1);
			max = item1.T;
		}
		else {
			max = null;
		}
		var predicate = function(x, index2) {
			return (JS.DateTimeExt.op_Equality$1(min, null) || ss.Nullable$1.liftcmp(JS.DateTimeExt.op_GreaterThanOrEqual, x.T, min)) && (JS.DateTimeExt.op_Equality$1(max, null) || ss.Nullable$1.liftcmp(JS.DateTimeExt.op_LessThanOrEqual, x.T, max));
		};
		return $QuickView_$Client_UI_MainView_Windows_$ExtendedChartWindow$ChartValueFilter.$ctor(predicate, (JS.DateTimeExt.op_Equality$1(min, null) ? null : ss.unbox(min).toDateTime().valueOf()), (JS.DateTimeExt.op_Equality$1(max, null) ? null : ss.unbox(max).toDateTime().valueOf()), JS.DateTimeExt.op_Equality$1(min, null), JS.DateTimeExt.op_Equality$1(max, null));
	};
	$QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$show = function(table, indicator, period, chartType) {
		$QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$show$1(table, indicator, period, chartType, 0, null);
	};
	$QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$show$1 = function(table, indicator, period, chartType, displayMode, relatedIndicators) {
	    var relatedIndicatorsKey;
	    //console.log('indicator', indicator);
		if (displayMode === 1) {
			// Always show indicators in a new window even if
			// the same window exists. The reason is that the list of indicators can be changed from the menu
			relatedIndicatorsKey = (new Date()).getTime().toString();
			//relatedIndicatorsKey = string.Join("+", relatedIndicators.Select(x => x.ID));
		}
		else {
			relatedIndicatorsKey = '';
		}
		var key = [indicator.I, period.def.N, displayMode, relatedIndicatorsKey].join(':');
		JS.UI.Windows.WindowManagerExtensions.openOrFocus($QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow).call(null, JS.UI.UIEnvironment.get_windowManager(), key, function() {
			return new $QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow(key, table, indicator, period, chartType, displayMode, relatedIndicators);
		});
	};
	$QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$setChartTypeCssClass = function(control, chartType) {
	    JS.ArgumentHelper.notNull(control, 'control');
		JS.UI.Controls.ControlExtensions.removeClass(JS.UI.Controls.Control).call(null, control, 'line bar');
		JS.UI.Controls.ControlExtensions.addClass(JS.UI.Controls.Control).call(null, control, ((chartType === 2) ? 'line' : 'bar'));
	};
	$QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$setUnitCssClass = function(control, unit, currency) {
	    var cssClass;
		switch (unit) {
			case 3: {
				// 2016-04-14 Dal: Display the opposite unit so that people know they can switch between units
				cssClass = 'currency ' + QuickView.Client.UI.Common.Data.DataDescription.getName$1(currency).toLowerCase();
				//cssClass = "percentage";
				break;
			}
			case 4: {
				// 2016-04-14 Dal: Display the opposite unit so that people know they can switch between units
				//cssClass = "currency " + currency.GetName().ToLower();
				cssClass = 'percentage';
				break;
			}
			default: {
				cssClass = null;
				break;
			}
		}
		JS.UI.Controls.ControlExtensions.removeClass(JS.UI.Controls.Control).call(null, control, 'percentage currency usd eur');
		JS.UI.Controls.ControlExtensions.addClass(JS.UI.Controls.Control).call(null, control, cssClass);
	};
	$QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$unitSortCallback = function(a, b) {
		return ss.compare($QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$getUnitOrder(a), $QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$getUnitOrder(b));
	};
	$QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$getUnitOrder = function(unit) {
		switch (unit) {
			case 4: {
				return 1;
			}
			case 3: {
				return 2;
			}
			case 5: {
				return 3;
			}
			default: {
				return 1024 + unit;
			}
		}
	};
	$QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$getCumValue = function(point) {
		return point.C;
	};
	$QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$getNonCumValue = function(point) {
		return point.N;
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.Windows.IndicatorDataHandleList
	var $QuickView_Client_UI_MainView_Windows_$IndicatorDataHandleList = function() {
		this.$1$DataChangedField = null;
		this.$_itemDict = null;
		this.$_itemList = null;
		this.$_itemDict = {};
		this.$_itemList = [];
	};
	$QuickView_Client_UI_MainView_Windows_$IndicatorDataHandleList.__typeName = 'QuickView.Client.UI.MainView.Windows.$IndicatorDataHandleList';
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.Windows.LocalWindowUtils
	var $QuickView_Client_UI_MainView_Windows_$LocalWindowUtils = function() {
	};
	$QuickView_Client_UI_MainView_Windows_$LocalWindowUtils.__typeName = 'QuickView.Client.UI.MainView.Windows.$LocalWindowUtils';
	$QuickView_Client_UI_MainView_Windows_$LocalWindowUtils.$setupHcfWindowLayout = function(window, layout) {
		JS.ArgumentHelper.notNull(window, 'window');
		JS.ArgumentHelper.notNull(layout, 'layout');
		if (QuickView.Client.Common.AppEnvironment.get_isMobileDevice()) {
			// Close the window on mobile when the user swipes to the right on the header or the footer
			// or tap-holds on them
			JS.UI.UIEventExtensions$Mobile.navigateLeft(layout.get_header(), function(e) {
				window.close();
			});
			JS.UI.UIEventExtensions$Mobile.navigateLeft(layout.get_footer(), function(e1) {
				window.close();
			});
			// Tap-hold can conflict with toolbar buttons so do not use it
			// For consistent behavior it should not be used in both the header and the footer
			// even if the footer does not contain a toolbar
			//layout.Header.TapHold(e => window.Close());
			//layout.Footer.TapHold(e => window.Close());
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.Windows.RowCorrelationWindow
	var $QuickView_Client_UI_MainView_Windows_$RowCorrelationWindow = function(key, period) {
		this.$_toolbar = null;
		this.$_period = null;
		JS.UI.Windows.Window.$ctor1.call(this, key);
		JS.ArgumentHelper.notNull(period, 'period');
		this.$_period = period;
	};
	$QuickView_Client_UI_MainView_Windows_$RowCorrelationWindow.__typeName = 'QuickView.Client.UI.MainView.Windows.$RowCorrelationWindow';
	$QuickView_Client_UI_MainView_Windows_$RowCorrelationWindow.$show = function(period) {
		JS.ArgumentHelper.notNull(period, 'period');
		var key = [period.def.N].join(':');
		JS.UI.Windows.WindowManagerExtensions.openOrFocus($QuickView_Client_UI_MainView_Windows_$RowCorrelationWindow).call(null, JS.UI.UIEnvironment.get_windowManager(), key, function() {
			return new $QuickView_Client_UI_MainView_Windows_$RowCorrelationWindow(key, period);
		});
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.Windows.TopMarketsWindow
	var $QuickView_Client_UI_MainView_Windows_$TopMarketsWindow = function(key, indicator, period) {
		this.$_toolbar = null;
		this.$_indicator = null;
		this.$_period = null;
		this.$_sortOrder = 0;
		this.$_dataList = null;
		this.$_dataProviderEventSubscription = null;
		this.$panelData = null;
		this.$_updateDataExecutor = null;
		JS.UI.Windows.Window.$ctor1.call(this, key);
		JS.ArgumentHelper.notNull(indicator, 'indicator');
		JS.ArgumentHelper.notNull(period, 'period');
		this.$_indicator = indicator;
		this.$_period = period;
	};
	$QuickView_Client_UI_MainView_Windows_$TopMarketsWindow.__typeName = 'QuickView.Client.UI.MainView.Windows.$TopMarketsWindow';
	$QuickView_Client_UI_MainView_Windows_$TopMarketsWindow.$getSortMethod = function(sortOrder) {
		switch (sortOrder) {
			case 0: {
				return function(x, y) {
					return -ss.compare(x.percentReturns, y.percentReturns);
				};
			}
			case 1: {
				return function(x1, y1) {
					return -ss.compare(x1.currencyReturns, y1.currencyReturns);
				};
			}
			case 2: {
				return function(x2, y2) {
					return -ss.compare(ss.coalesce($QuickView_$Client_UI_MainView_Windows_$TopMarketsWindow$IndicatorData.$getNetPosition(x2), 0), ss.coalesce($QuickView_$Client_UI_MainView_Windows_$TopMarketsWindow$IndicatorData.$getNetPosition(y2), 0));
				};
			}
			default: {
				throw new ss.ArgumentOutOfRangeException('sortOrder', 'Invalid value.', null, sortOrder);
			}
		}
	};
	$QuickView_Client_UI_MainView_Windows_$TopMarketsWindow.$calculateTotal = function(list) {
		JS.ArgumentHelper.notNull(list, 'list');
		var $t1 = $QuickView_$Client_UI_MainView_Windows_$TopMarketsWindow$IndicatorData.$ctor(null);
		$t1.shortPosition = 0;
		$t1.longPosition = 0;
		var result = $t1;
		var $t2 = ss.getEnumerator(list);
		try {
			while ($t2.moveNext()) {
				var item = $t2.current();
				result.percentReturns += item.percentReturns;
				result.currencyReturns += item.currencyReturns;
				result.shortPosition = ss.Nullable$1.add(result.shortPosition, ss.coalesce(item.shortPosition, 0));
				result.longPosition = ss.Nullable$1.add(result.longPosition, ss.coalesce(item.longPosition, 0));
			}
		}
		finally {
			$t2.dispose();
		}
		if (ss.Nullable$1.le(result.shortPosition, 0)) {
			result.shortPosition = null;
		}
		if (ss.Nullable$1.le(result.longPosition, 0)) {
			result.longPosition = null;
		}
		return result;
	};
	$QuickView_Client_UI_MainView_Windows_$TopMarketsWindow.$show = function(indicator, period) {
		JS.ArgumentHelper.notNull(indicator, 'indicator');
		JS.ArgumentHelper.notNull(period, 'period');
		var key = [indicator.I, period.def.N].join(':');
		JS.UI.Windows.WindowManagerExtensions.openOrFocus($QuickView_Client_UI_MainView_Windows_$TopMarketsWindow).call(null, JS.UI.UIEnvironment.get_windowManager(), key, function() {
			return new $QuickView_Client_UI_MainView_Windows_$TopMarketsWindow(key, indicator, period);
		});
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.Windows.ExtendedChartDisplayMode
	var $QuickView_Client_UI_MainView_Windows_ExtendedChartDisplayMode = function() {
	};
	$QuickView_Client_UI_MainView_Windows_ExtendedChartDisplayMode.__typeName = 'QuickView.Client.UI.MainView.Windows.ExtendedChartDisplayMode';
	global.QuickView.Client.UI.MainView.Windows.ExtendedChartDisplayMode = $QuickView_Client_UI_MainView_Windows_ExtendedChartDisplayMode;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.MainView.Windows.IndicatorDataHandle
	var $QuickView_Client_UI_MainView_Windows_IndicatorDataHandle = function(indicator, period, dataType, dataPriority) {
		this.$1$DataChangedField = null;
		this.indicator = null;
		this.period = null;
		this.dataType = 0;
		this.dataPriority = 0;
		this.$_dataBag = null;
		this.$_eventSubscription = null;
		this.indicator = indicator;
		this.period = period;
		this.dataType = dataType;
		this.dataPriority = dataPriority;
	};
	$QuickView_Client_UI_MainView_Windows_IndicatorDataHandle.__typeName = 'QuickView.Client.UI.MainView.Windows.IndicatorDataHandle';
	global.QuickView.Client.UI.MainView.Windows.IndicatorDataHandle = $QuickView_Client_UI_MainView_Windows_IndicatorDataHandle;
	ss.initClass($JS_UI_UIElement, $asm, {
		get_element: function() {
			return this.$_element;
		},
		get_isDestroyingOrDestroyed: function() {
			return this.state === 1 || this.state === 2;
		},
		add_destroyed: function(value) {
			this.$1$DestroyedField = ss.delegateCombine(this.$1$DestroyedField, value);
		},
		remove_destroyed: function(value) {
			this.$1$DestroyedField = ss.delegateRemove(this.$1$DestroyedField, value);
		},
		destroy: function() {
			if (this.state === 1 || this.state === 2) {
				return;
			}
			var oldState = this.state;
			this.state = 1;
			try {
				this.destroyCore();
			}
			catch ($t1) {
				// Restore the state
				this.state = oldState;
				throw $t1;
			}
			this.state = 2;
			var temp = this.$1$DestroyedField;
			if (!ss.staticEquals(temp, null)) {
				temp(this, ss.EventArgs.Empty);
			}
		},
		destroyCore: function() {
		}
	});
	ss.initClass($JS_UI_FrameworkElement, $asm, {
		get_isDisplayed: function() {
			return this.get_element().is(':visible');
		},
		get_isVisible: function() {
			// The element is considered hidden/visible only if it itself is hidden/visible
			// and not its ancestors
			return false === (ss.compareStrings(this.get_element().css('display'), 'none', true) === 0);
		},
		add_visibilityChanged: function(value) {
			this.$2$VisibilityChangedField = ss.delegateCombine(this.$2$VisibilityChangedField, value);
		},
		remove_visibilityChanged: function(value) {
			this.$2$VisibilityChangedField = ss.delegateRemove(this.$2$VisibilityChangedField, value);
		},
		show: function() {
			if (this.get_isVisible()) {
				return;
			}
			this.showCore();
		},
		showCore: function() {
			this.get_element().show();
			this.onVisibilityChanged(ss.EventArgs.Empty);
		},
		hide: function() {
			if (false === this.get_isVisible()) {
				return;
			}
			this.hideCore();
		},
		hideCore: function() {
			this.get_element().hide();
			this.onVisibilityChanged(ss.EventArgs.Empty);
		},
		onVisibilityChanged: function(e) {
			var temp = this.$2$VisibilityChangedField;
			if (!ss.staticEquals(temp, null)) {
				temp(this, e);
			}
		},
		setVisibility: function(visible) {
			if (visible) {
				this.show();
			}
			else {
				this.hide();
			}
		}
	}, $JS_UI_UIElement);
	ss.initEnum($JS_UI_UIElementState, $asm, { created: 0, destroying: 1, destroyed: 2 });
	ss.initClass($QuickView_$Client_UI_MainView_Grid_$ChartRowDataCell$ActiveStatInfo, $asm, {});
	ss.initEnum($QuickView_$Client_UI_MainView_Grid_$ChartRowDataCell$CellHeaderValueSource, $asm, { $data: 0, $extremes: 1 });
	ss.initClass($QuickView_$Client_UI_MainView_Grid_$ChartRowDataCell$Extremes, $asm, {});
	ss.initClass($QuickView_$Client_UI_MainView_Grid_$ChartRowHeaderCell$IndicatorPositions, $asm, {});
	ss.initClass($QuickView_$Client_UI_MainView_Grid_$ChartRowManager$IndicatorComparer, $asm, {
		compare: function(x, y) {
			// Items in earlier in the list will be processed sooner and thus the
			// method will return -1/1 for them before reaching items later in the list.
			for (var $t1 = 0; $t1 < this.$_fundIDOrder.length; $t1++) {
				var item = this.$_fundIDOrder[$t1];
				if (ss.compareStrings(item, x.I, true) === 0) {
					return -1;
				}
				else if (ss.compareStrings(item, y.I, true) === 0) {
					return 1;
				}
			}
			return ss.compare(x.menuInfo.O, y.menuInfo.O);
		}
	}, null, [ss.IComparer]);
	ss.initEnum($QuickView_$Client_UI_MainView_Grid_$ChartRowManager$RowsChangedPendingActions, $asm, { $none: 0, $sort: 7, $updateLayout: 6, $updateOrder: 4, $updateLayoutAndSort: 7 });
	ss.initClass($QuickView_$Client_UI_MainView_Grid_$HeaderRowDataCell$TextAndCssClass, $asm, {});
	ss.initClass($QuickView_$Client_UI_MainView_Grid_$HeaderRowDataCellXAxis$XAxisLabel, $asm, {});
	$QuickView_$Client_UI_MainView_Grid_$HeaderRowDataCellXAxis$XAxisLabel.$ctor1.prototype = $QuickView_$Client_UI_MainView_Grid_$HeaderRowDataCellXAxis$XAxisLabel.prototype;
	ss.initClass($QuickView_$Client_UI_MainView_Grid_$TableLayout$Dimension, $asm, {});
	ss.initClass($QuickView_$Client_UI_MainView_Windows_$ExtendedChartWindow$ChartFilters, $asm, {});
	ss.initClass($QuickView_$Client_UI_MainView_Windows_$ExtendedChartWindow$ChartValueFilter, $asm, {});
	ss.initClass($QuickView_$Client_UI_MainView_Windows_$ExtendedChartWindow$StatsParameters, $asm, {});
	ss.initClass($QuickView_$Client_UI_MainView_Windows_$ExtendedChartWindow$TopInfo, $asm, {});
	ss.initClass($QuickView_$Client_UI_MainView_Windows_$TopMarketsWindow$IndicatorData, $asm, {});
	ss.initEnum($QuickView_$Client_UI_MainView_Windows_$TopMarketsWindow$SortOrder, $asm, { $percentageReturns: 0, $currencyReturns: 1, $positions: 2 });
	ss.initClass($QuickView_Client_UI_MainView_$LocalServices, $asm, {});
	ss.initClass($QuickView_Client_UI_MainView_$LocalUtils, $asm, {});
	ss.initClass($QuickView_Client_UI_MainView_Gfx_Matrix, $asm, {
		get_zeroCell: function() {
			return this.$1$ZeroCellField;
		},
		set_zeroCell: function(value) {
			this.$1$ZeroCellField = value;
		},
		get_columnHeaders: function() {
			return this.$1$ColumnHeadersField;
		},
		set_columnHeaders: function(value) {
			this.$1$ColumnHeadersField = value;
		},
		get_rowHeaders: function() {
			return this.$1$RowHeadersField;
		},
		set_rowHeaders: function(value) {
			this.$1$RowHeadersField = value;
		},
		get_item: function(row, column) {
			var result = ss.arrayGet(this.$_cellMatrix, row, column);
			if (ss.isNullOrUndefined(result)) {
				throw new ss.ArgumentOutOfRangeException('Invalid coordinates.');
			}
			return result;
		},
		$panelData_Scroll: function(e) {
			// Sync with other panels
			this.$panelTop.scrollLeft(this.$panelData.scrollLeft());
			this.$panelLeft.scrollTop(this.$panelData.scrollTop());
		},
		setSize: function(ratio) {
			JS.ArgumentHelper.range(0, 1, ratio, 'ratio');
			this.$_parent.css('font-size', ratio.toString() + 'px');
		},
		resetSize: function() {
			this.setSize(1);
		},
		autoFit: function() {
			this.autoFit$1(0);
		},
		autoFit$1: function(minimumRatio) {
			JS.ArgumentHelper.range(0, 1, minimumRatio, 'minimumRatio');
			var totalWidth = this.$panelLeftContent.width() + this.$panelDataContent.width();
			var totalHeight = this.$panelTopContent.height() + this.$panelDataContent.height();
			var availableWidth = this.$panelLeft.width() + this.$panelData.width();
			var availableHeight = this.$panelTop.height() + this.$panelData.height();
			var ratioX = $QuickView_Client_UI_MainView_Gfx_Matrix.$calculateRatio(availableWidth, totalWidth);
			var ratioY = $QuickView_Client_UI_MainView_Gfx_Matrix.$calculateRatio(availableHeight, totalHeight);
			var ratio = Math.max(minimumRatio, Math.min(ratioX, ratioY));
			this.setSize(ratio * 0.95);
			// Decrease by 5 percent to account for rounding done by the browser
		}
	});
	ss.initEnum($QuickView_Client_UI_MainView_Gfx_MatrixType, $asm, { triangular: 1, full: 2 });
	ss.initClass($QuickView_Client_UI_MainView_Grid_$Cell, $asm, {
		get_$table: function() {
			return this.$row.$table;
		},
		get_$isEnabled: function() {
			if (this.get_isDestroyingOrDestroyed()) {
				return false;
			}
			else {
				return this.$column.$isVisible && this.$row.get_isVisible() && this.$row.get_$isEnabled();
			}
		},
		destroyCore: function() {
			$JS_UI_UIElement.prototype.destroyCore.call(this);
			this.$column.remove_$visibilityChanged(ss.mkdel(this, this.$column_VisibilityChanged));
		},
		$column_VisibilityChanged: function(sender, e) {
			if (this.get_isDestroyingOrDestroyed()) {
				return;
			}
			this.$updateVisibility();
		},
		$updateVisibility: function() {
			if (this.$column.$isVisible) {
				this.show();
			}
			else {
				this.hide();
			}
		}
	}, $JS_UI_FrameworkElement);
	ss.initClass($QuickView_Client_UI_MainView_Grid_$Column, $asm, {
		add_$visibilityChanged: function(value) {
			this.$1$VisibilityChangedField = ss.delegateCombine(this.$1$VisibilityChangedField, value);
		},
		remove_$visibilityChanged: function(value) {
			this.$1$VisibilityChangedField = ss.delegateRemove(this.$1$VisibilityChangedField, value);
		},
		$show: function() {
			if (this.$isVisible) {
				return;
			}
			this.$isVisible = true;
			this.$onVisibilityChanged(ss.EventArgs.Empty);
		},
		$hide: function() {
			if (false === this.$isVisible) {
				return;
			}
			this.$isVisible = false;
			this.$onVisibilityChanged(ss.EventArgs.Empty);
		},
		$onVisibilityChanged: function(e) {
			var temp = this.$1$VisibilityChangedField;
			if (!ss.staticEquals(temp, null)) {
				temp(this, e);
			}
		},
		$setVisibility: function(visible) {
			if (visible) {
				this.$show();
			}
			else {
				this.$hide();
			}
		}
	});
	ss.initClass($QuickView_Client_UI_MainView_Grid_$ChartColumn, $asm, {
		get_$id: function() {
			return this.$options.id;
		},
		add_$periodChanged: function(value) {
			this.$2$PeriodChangedField = ss.delegateCombine(this.$2$PeriodChangedField, value);
		},
		remove_$periodChanged: function(value) {
			this.$2$PeriodChangedField = ss.delegateRemove(this.$2$PeriodChangedField, value);
		},
		$onPeriodChanged: function(e) {
			JS.EventExtensions.fire(this.$2$PeriodChangedField, this, e);
		},
		$options_PeriodChanged: function(sender, e) {
			this.$period.remove_intervalChanged(ss.mkdel(this, this.$period_IntervalChanged));
			this.$period = QuickView.Client.Services.Charts.ChartPeriodProvider.getPeriod(this.$options.get_period());
			this.$period.add_intervalChanged(ss.mkdel(this, this.$period_IntervalChanged));
			this.$onPeriodChanged(ss.EventArgs.Empty);
		},
		$period_IntervalChanged: function(sender, e) {
			this.$onPeriodChanged(ss.EventArgs.Empty);
		},
		add_$barHighlighted: function(value) {
			this.$2$BarHighlightedField = ss.delegateCombine(this.$2$BarHighlightedField, value);
		},
		remove_$barHighlighted: function(value) {
			this.$2$BarHighlightedField = ss.delegateRemove(this.$2$BarHighlightedField, value);
		},
		add_$barUnhighlighted: function(value) {
			this.$2$BarUnhighlightedField = ss.delegateCombine(this.$2$BarUnhighlightedField, value);
		},
		remove_$barUnhighlighted: function(value) {
			this.$2$BarUnhighlightedField = ss.delegateRemove(this.$2$BarUnhighlightedField, value);
		},
		$fireBarHighlighted: function(source, barID) {
			var temp = this.$2$BarHighlightedField;
			if (!ss.staticEquals(temp, null)) {
				temp(this, new $QuickView_Client_UI_MainView_Grid_BarHighlightEventArgs(source, barID));
			}
		},
		$fireBarUnhighlighted: function(source, barID) {
			var temp = this.$2$BarUnhighlightedField;
			if (!ss.staticEquals(temp, null)) {
				temp(this, new $QuickView_Client_UI_MainView_Grid_BarHighlightEventArgs(source, barID));
			}
		}
	}, $QuickView_Client_UI_MainView_Grid_$Column);
	ss.initClass($QuickView_Client_UI_MainView_Grid_$Row, $asm, {
		add_$isEnabledChanged: function(value) {
			this.$3$IsEnabledChangedField = ss.delegateCombine(this.$3$IsEnabledChangedField, value);
		},
		remove_$isEnabledChanged: function(value) {
			this.$3$IsEnabledChangedField = ss.delegateRemove(this.$3$IsEnabledChangedField, value);
		},
		$onIsEnabledChanged: function(e) {
			JS.EventExtensions.fire(this.$3$IsEnabledChangedField, this, e);
		},
		get_$isEnabled: function() {
			return this.$_isEnabled;
		},
		set_$isEnabled: function(value) {
			if (this.$_isEnabled !== value) {
				this.$_isEnabled = value;
				this.$onIsEnabledChanged(ss.EventArgs.Empty);
			}
		}
	}, $JS_UI_FrameworkElement);
	ss.initClass($QuickView_Client_UI_MainView_Grid_$ChartRow, $asm, {
		get_$id: function() {
			return this.get_element().prop('id');
		},
		get_$firstElement: function() {
			return this.get_element();
		},
		get_$lastElement: function() {
			return (ss.isNullOrUndefined(this.$_benchmarkRow) ? this.get_element() : this.$_benchmarkRow.get_element());
		},
		get_$reverseElements: function() {
			return new ss.IteratorBlockEnumerable(function() {
				return (function() {
					var $result, $state = 0;
					return new ss.IteratorBlockEnumerator(function() {
						$sm1:
						for (;;) {
							switch ($state) {
								case 0: {
									$state = -1;
									if (ss.isValue(this.$_benchmarkRow)) {
										$result = this.$_benchmarkRow.get_element();
										$state = 1;
										return true;
									}
									$state = 1;
									continue $sm1;
								}
								case 1: {
									$state = -1;
									$result = this.get_element();
									$state = -1;
									return true;
								}
								default: {
									break $sm1;
								}
							}
						}
						return false;
					}, function() {
						return $result;
					}, null, this);
				}).call(this);
			}, this);
		},
		$updateAssociatedElements: function() {
			if (ss.isValue(this.$_benchmarkRow)) {
				this.$_benchmarkRow.get_element().insertAfter(this.get_element());
			}
		},
		get_$indicator: function() {
			return this.$4$IndicatorField;
		},
		set_$indicator: function(value) {
			this.$4$IndicatorField = value;
		},
		get_$indicatorOptions: function() {
			return this.$4$IndicatorOptionsField;
		},
		set_$indicatorOptions: function(value) {
			this.$4$IndicatorOptionsField = value;
		},
		get_$benchmarkRow: function() {
			return this.$_benchmarkRow;
		},
		get_$isBenchmarkEnabled: function() {
			return ss.isValue(this.$_benchmarkRow);
		},
		get_$benchmarkIndicator: function() {
			if (ss.isNullOrUndefined(this.$_benchmarkIndicator) && QuickView.Client.Models.Charts.Indicator.supportsBenchmark(this.get_$indicator())) {
				this.$_benchmarkIndicator = { item1: this.get_$indicator().defaultBenchmarkIndicator };
			}
			return this.$_benchmarkIndicator.item1;
		},
		destroyCore: function() {
			$JS_UI_UIElement.prototype.destroyCore.call(this);
			// Remove the benchmark (if any) row before all
			this.$removeBenchmarkRow();
			this.$headerCell.destroy();
			this.$headerCell = null;
			for (var $t1 = 0; $t1 < this.$chartCells.length; $t1++) {
				var item = this.$chartCells[$t1];
				item.destroy();
			}
			this.$chartCells = null;
			this.get_$indicatorOptions().remove_benchmarksChanged(ss.mkdel(this, this.$indicatorOptions_BenchmarksChanged));
			this.$table.$options.remove_displayOptionsChanged(ss.mkdel(this, this.$tableOptions_DisplayOptionsChanged));
			this.$table.remove_$columnAdded(ss.mkdel(this, this.$table_ColumnAdded));
			this.$table.remove_$columnRemoved(ss.mkdel(this, this.$table_ColumnRemoved));
			this.$table.remove_$columnMoved(ss.mkdel(this, this.$table_ColumnMoved));
			this.get_element().remove();
			// Track data usage
			QuickView.Client.Services.Charts.IndicatorDataUsage.removeIndicator(this.get_$indicator());
		},
		$updateBenchmarkRow: function() {
		},
		$removeBenchmarkRow: function() {
		},
		$indicatorOptions_BenchmarksChanged: function(sender, e) {
			// TODO Update the rows
		},
		$tableOptions_DisplayOptionsChanged: function(sender, e) {
			this.$updateBenchmarkRow();
		},
		$table_ColumnAdded: function(sender, e) {
			// Add a new cell at the specified position
			var column = this.$table.$columns[e.index];
			var cell = $QuickView_Client_UI_MainView_Grid_$ChartRowDataCell.$create(this, column, this.$_cellPanel);
			var oldCell = ((e.index < this.$table.$columns.length) ? this.$_cellList[e.index] : null);
			ss.insert(this.$_cellList, e.index, cell);
			if (ss.isValue(oldCell)) {
				// Move the cell to the correct position
				cell.get_$element().insertBefore(oldCell.get_$element());
			}
			else {
				// The cell is added at the end of the row
			}
		},
		$table_ColumnRemoved: function(sender, e) {
			var cell = this.$_cellList[e.index];
			cell.destroy();
			ss.remove(this.$_cellList, cell);
		},
		$table_ColumnMoved: function(sender, e) {
			var cell = this.$_cellList[e.oldIndex];
			ss.removeAt(this.$_cellList, e.oldIndex);
			var oldCell = ((e.newIndex < this.$table.$columns.length) ? this.$_cellList[e.newIndex] : null);
			ss.insert(this.$_cellList, e.newIndex, cell);
			if (ss.isValue(oldCell)) {
				// Move the cell to the correct position
				cell.get_$element().insertBefore(oldCell.get_$element());
			}
			else {
				// The cell is added at the end of the row
				cell.get_$element().appendTo(this.$_cellPanel);
			}
		},
		$highlight: function() {
			if (this.$isHighlighted) {
				return;
			}
			this.$isHighlighted = true;
			this.get_element().addClass('highlighted');
		},
		$unhighlight: function() {
			if (false === this.$isHighlighted) {
				return;
			}
			this.$isHighlighted = false;
			this.get_element().removeClass('highlighted');
		},
		$moveToTop: function(parent) {
			JS.ArgumentHelper.notNull(parent, 'parent');
			var $t1 = ss.getEnumerator(this.get_$reverseElements());
			try {
				while ($t1.moveNext()) {
					var item = $t1.current();
					item.prependTo(parent);
				}
			}
			finally {
				$t1.dispose();
			}
		},
		$setZIndex: function(value) {
			this.get_element().css('z-index', value);
		}
	}, $QuickView_Client_UI_MainView_Grid_$Row);
	ss.initClass($QuickView_Client_UI_MainView_Grid_$DataCell, $asm, {
		get_$column: function() {
			return ss.cast(this.$column, $QuickView_Client_UI_MainView_Grid_$ChartColumn);
		},
		get_$element: function() {
			return this.get_element();
		},
		destroyCore: function() {
			$QuickView_Client_UI_MainView_Grid_$Cell.prototype.destroyCore.call(this);
			this.$row.remove_visibilityChanged(ss.mkdel(this, this.$rowOrColumn_VisibilityOrIsEnabledChanged));
			this.$row.remove_$isEnabledChanged(ss.mkdel(this, this.$rowOrColumn_VisibilityOrIsEnabledChanged));
			this.get_$column().remove_$visibilityChanged(ss.mkdel(this, this.$rowOrColumn_VisibilityOrIsEnabledChanged));
		},
		$rowOrColumn_VisibilityOrIsEnabledChanged: function(sender, e) {
			if (this.get_isDestroyingOrDestroyed()) {
				return;
			}
			var isEnabled = this.get_$isEnabled();
			// Indicates if visibility has changed
			var visibilityChanged = isEnabled !== this.$_oldIsEnabled;
			// The cell has become visible
			this.$_oldIsEnabled = isEnabled;
			if (isEnabled && visibilityChanged) {
				// Update the content of the cell as newer data may have been loaded in the meantime
				this.$onRefresh();
			}
		},
		$onRefresh: null
	}, $QuickView_Client_UI_MainView_Grid_$Cell);
	ss.initInterface($QuickView_Client_UI_MainView_Grid_$IDataCellMenuListener, $asm, { $onOpenExpandedChart: null, $onOpenDrawdownChart: null, $onOpenSlippageChart: null, $onChangeResolution: null, $onShowRelatedIndicators: null, $onShowAllRelatedIndicators: null, $onShowTopBottomMarkets: null });
	ss.initClass($QuickView_Client_UI_MainView_Grid_$ChartRowDataCell, $asm, {
		get_$row: function() {
			return ss.cast(this.$row, $QuickView_Client_UI_MainView_Grid_$ChartRow);
		},
		destroyCore: function() {
			$QuickView_Client_UI_MainView_Grid_$DataCell.prototype.destroyCore.call(this);
			if (ss.isValue(this.$_dataProviderEventSubscription)) {
				this.$_dataProviderEventSubscription.dispose();
				this.$_dataProviderEventSubscription = null;
			}
			if (ss.isValue(this.$_benchmarkDataEventSubscriptionList)) {
				JS.Collections.CollectionExtensions.dispose(this.$_benchmarkDataEventSubscriptionList);
				this.$_benchmarkDataEventSubscriptionList = null;
			}
			this.$removeData();
			this.get_$column().remove_$periodChanged(ss.mkdel(this, this.$dataParametersChanged));
			this.get_$column().$options.remove_viewModeChanged(ss.mkdel(this, this.$dataParametersChanged));
			this.get_$table().$options.remove_displayOptionsChanged(ss.mkdel(this, this.$dataParametersChanged));
			this.get_$table().$options.remove_statsSortSettingsChanged(ss.mkdel(this, this.$statsSortSettingsChanged));
			this.get_$row().get_$indicatorOptions().remove_benchmarksChanged(ss.mkdel(this, this.$indicatorOptions_BenchmarksChanged));
			this.get_$element().remove();
		},
		$onRefresh: function() {
			// Called when the state of the cell has changed: displayed, hidden, etc.
			this.$updateOrRemoveDataAsync();
		},
		$element_Click: function(e) {
			if (ss.isValue(this.$_openDataCellMenuID)) {
				return;
			}
			this.$_openDataCellMenuID = window.setTimeout(ss.mkdel(this, function() {
				this.$_openDataCellMenuID = null;
				this.get_$row().$table.$openDataCellMenu_Collapsed(this, this.get_$row().get_$indicator(), this.get_$column().$period);
			}), 750);
		},
		$element_DoubleClick: function(e) {
			if (ss.isValue(this.$_openDataCellMenuID)) {
				window.clearTimeout(ss.unbox(this.$_openDataCellMenuID));
				this.$_openDataCellMenuID = null;
			}
			this.$openExtendedChart(0);
		},
		$displayOptionsChanged: function(sender, e) {
			if (ss.isValue(this.$_chart)) {
				this.$_chart.set_showTooltips(JS.EnumExtensions.isSet(this.get_$table().$options.get_displayOptions(), 8));
			}
		},
		$dataParametersChanged: function(sender, e) {
			this.$updateOrRemoveDataAsync();
		},
		$dataProvider_IndicatorDataChanged: function(sender, e) {
			this.$updateOrRemoveDataAsync();
		},
		$dataProvider_BenchmarkDataChanged: function(sender, e) {
			this.$updateOrRemoveDataAsync();
		},
		$indicatorOptions_BenchmarksChanged: function(sender, e) {
			this.$updateOrRemoveDataAsync();
		},
		$statsSortSettingsChanged: function(sender, e) {
			this.$updateActiveStat();
		},
		$onOpenExpandedChart: function() {
			this.$openExtendedChart(0);
		},
		$onOpenDrawdownChart: function() {
			// TODO Implement
		},
		$onOpenSlippageChart: function() {
			// TODO Implement
		},
		$onChangeResolution: function(resolution) {
			throw new ss.NotSupportedException();
		},
		$onShowRelatedIndicators: function(indicators) {
			if (ss.count(indicators) === 0) {
				return;
			}
			this.$openExtendedChart$1(this.get_$row().get_$indicator(), 1, indicators);
		},
		$onShowAllRelatedIndicators: function() {
			this.$openExtendedChart(1);
		},
		$onShowTopBottomMarkets: function(mode) {
			if (mode === 1) {
				$QuickView_Client_UI_MainView_Windows_$TopMarketsWindow.$show(this.get_$row().get_$indicator(), this.get_$column().$period);
			}
			else {
				throw new ss.NotSupportedException('Work in progress.');
			}
		},
		$openExtendedChart: function(displayMode) {
			this.$openExtendedChart$1(this.get_$row().get_$indicator(), displayMode, null);
		},
		$openExtendedChart$1: function(indicator, displayMode, relatedIndicators) {
			var viewMode = this.get_$column().$options.get_viewMode();
			if (viewMode === 0 || viewMode === 1) {
				// Extended chart can be open
			}
			else {
				return;
			}
			var chartType = ((viewMode === 0) ? 2 : 1);
			$QuickView_Client_UI_MainView_$LocalUtils.$openExtendedChart$1(this.get_$row().$table, indicator, this.get_$column().$period, chartType, displayMode, relatedIndicators);
		},
		$updateOrRemoveDataAsync: function() {
			if (ss.isNullOrUndefined(this.$_updateOrReleaseDataExecutor)) {
				this.$_updateOrReleaseDataExecutor = new JS.Threading.PostponeExecutor.$ctor2(ss.mkdel(this, this.$updateOrRemoveData), 50, true);
			}
			this.$_updateOrReleaseDataExecutor.execute();
		},
		$updateOrRemoveData: function() {
			var $state = 0, supported, $t1;
			var $sm = ss.mkdel(this, function() {
				var $doFinally = true;
				$sm1:
				for (;;) {
					switch ($state) {
						case 0: {
							$state = -1;
							// Period and/or other parameters changed
							if (false === this.get_$isEnabled()) {
								// Mobile only: The cell will be refreshed once it is enabled
								return;
							}
							// TODO IMPORTANT Cancel all async operations (e.g. data loading) since the user may switch between
							// different modes and options before the chart is loaded or drawn
							if (this.$_updateOrRemoveDataExecuting) {
								this.$_updateOrRemoveDataDelayed = true;
								return;
							}
							// Make sure the method is not executed in parallel. In some cases on mobile
							// this can cause a cell to become empty after the chart is loaded or just
							// the cell header - displayed, etc.
							this.$_updateOrRemoveDataExecuting = true;
							$state = 1;
							continue $sm1;
						}
						case 1:
						case 2:
						case 3: {
							if ($state === 1) {
								$state = 2;
							}
							try {
								$sm2:
								for (;;) {
									switch ($state) {
										case 2: {
											$state = -1;
											supported = QuickView.Client.UI.Common.Data.DataDescription$ChartPeriods.isSupported(this.get_$row().get_$indicator(), this.get_$column().$period.def);
											if (supported) {
												this.get_$element().removeClass('disabled');
												$t1 = this.$updateData();
												$state = 3;
												$t1.continueWith($sm);
												$doFinally = false;
												return;
											}
											else {
												this.get_$element().addClass('disabled');
												this.$removeData();
												$state = -1;
												break $sm2;
											}
										}
										case 3: {
											$state = -1;
											$t1.getAwaitedResult();
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
									this.$_updateOrRemoveDataExecuting = false;
									if (this.$_updateOrRemoveDataDelayed) {
										this.$_updateOrRemoveDataDelayed = false;
										// Execute the method again
										this.$updateOrRemoveDataAsync();
									}
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
		$updateData: function() {
			// Remove previous subscription
			if (ss.isValue(this.$_dataProviderEventSubscription)) {
				this.$_dataProviderEventSubscription.dispose();
				this.$_dataProviderEventSubscription = null;
			}
			if (ss.isValue(this.$_benchmarkDataEventSubscriptionList)) {
				JS.Collections.CollectionExtensions.dispose(this.$_benchmarkDataEventSubscriptionList);
				this.$_benchmarkDataEventSubscriptionList = null;
			}
			var viewMode = this.get_$column().$options.get_viewMode();
			if (viewMode === 0 || viewMode === 1) {
				return this.$updateChart();
			}
			else if (viewMode === 2) {
				return this.$updateStats();
			}
			else {
				throw new ss.NotImplementedException(ss.formatString("Unhandled view mode '{0}'.", viewMode));
			}
		},
		$removeData: function() {
			this.$removeChart();
			this.$removeStats();
			// Remove all children
			this.get_$element().empty();
		},
		$areBenchmarksEnabled: function() {
			var benchmarkOptions = this.get_$row().get_$indicatorOptions().get_benchmarks();
			return this.get_$column().$period.metaResolution === 2 && benchmarkOptions.showBenchmarks && ss.isValue(benchmarkOptions.get_indicators()) && ss.count(benchmarkOptions.get_indicators()) > 0;
		},
		$updateChart: function() {
			var $state = 0, $tcs = new ss.TaskCompletionSource(), viewMode, period, updateExistingChart, indicator, cumulative, chartType, $t1, dataBag, resolution, unit, isSubRed, data, now, start, end, interval, supplementData, hwmIndicator, $t2, hwmDataBag, hwmData, benchmarkDataList, $t3, benchmark, $t4, benchmarkDataBag, benchmarkEventSubscription, benchmarkData;
			var $sm = ss.mkdel(this, function() {
				var $doFinally = true;
				try {
					$sm1:
					for (;;) {
						switch ($state) {
							case 0: {
								$state = -1;
								// CAUTION A local variable MUST be used since the option can be changed until this method
								// completes (due to async execution)
								viewMode = this.get_$column().$options.get_viewMode();
								// CAUTION A local variable MUST be used since the option can be changed until this method
								// completes (due to async execution)
								period = this.get_$column().$period;
								// Clear "Stats", "No-data" and different type of chart
								updateExistingChart = viewMode === 1 && ss.isInstanceOfType(this.$_chart, QuickView.Client.UI.Charts.BarChart) || viewMode === 0 && ss.isInstanceOfType(this.$_chart, QuickView.Client.UI.Charts.LineChart);
								if (false === updateExistingChart) {
									// Clear previous chart or other text
									this.$removeData();
									// Show a message that data is loading
									this.get_$element().html("<div class='loading-data'>Loading...</div>");
								}
								indicator = this.get_$row().get_$indicator();
								cumulative = viewMode === 0;
								chartType = (cumulative ? 2 : 1);
								$t1 = $QuickView_Client_UI_MainView_$LocalServices.get_$dataProvider().getIndicatorData(indicator, period, 1, 2);
								$state = 1;
								$t1.continueWith($sm);
								$doFinally = false;
								return;
							}
							case 1: {
								$state = -1;
								dataBag = $t1.getAwaitedResult();
								// Subscribe for changes
								this.$_dataProviderEventSubscription = $QuickView_Client_UI_MainView_$LocalServices.get_$dataProvider().subscribeDataChanged(indicator, period.metaResolution, ss.mkdel(this, this.$dataProvider_IndicatorDataChanged));
								if (period.metaResolution === 2 && indicator.referencesIntradayTimeSeries) {
									// Subscribe for intraday changes as well
									this.$_dataProviderEventSubscription = new $QuickView_Client_UI_MainView_Grid_$DisposableCollectionWrapper.$ctor1([this.$_dataProviderEventSubscription, $QuickView_Client_UI_MainView_$LocalServices.get_$dataProvider().subscribeDataChanged(indicator, 1, ss.mkdel(this, this.$dataProvider_IndicatorDataChanged))]);
								}
								isSubRed = QuickView.Client.Models.Charts.Indicator.containsData$1(indicator, 2, 1001);
								if (isSubRed) {
									// Subscriptions/Redemptions are handled in a different way
									resolution = period.getResolution(1, 1);
									unit = 3;
									data = QuickView.Client.Services.Charts.IndicatorDataBag.getCustomData$1(dataBag, unit, resolution);
								}
								else {
									resolution = period.getResolution(chartType, 1);
									unit = (QuickView.Client.Models.Charts.Indicator.supportsUnit(indicator, 4) ? 4 : 3);
									data = QuickView.Client.Services.Charts.IndicatorDataBag.getChartData$1(dataBag, unit, resolution);
								}
								if (false === updateExistingChart) {
									// Remove the "Loading" text
									this.get_$element().empty();
								}
								if (ss.isNullOrUndefined(data) || data.get_isEmpty()) {
									// No data
									this.$removeData();
									this.get_$element().html("<div class='no-data'>No data.</div>");
									$tcs.setResult(null);
									return;
								}
								if (JS.EnumExtensions.isSet(this.get_$table().$options.get_displayOptions(), 4)) {
									// Update cell header
									if (isSubRed) {
										this.$updateCellHeader_SubRed(indicator, ss.cast(data, QuickView.Client.Services.Charts.IndicatorCustomData));
									}
									else {
										this.$updateCellHeader_ChartData(indicator, ss.cast(data, QuickView.Client.Services.Charts.IndicatorChartData), cumulative);
									}
								}
								now = QuickView.Client.Algorithms.TimeExtensions.roundTimeUp$1(JS.DateTimeExt.get_utcNow(), data.resolution);
								start = data.changeResolution(period.displayInterval.S);
								end = data.changeResolution(JS.DateTimeHelper.min(now, period.displayInterval.E));
								interval = QuickView.Client.Models.Charts.TimeInterval.$ctor(start, end);
								if (isSubRed) {
									// Update chart
									this.$updateChart_SubRed(indicator, ss.cast(data, QuickView.Client.Services.Charts.IndicatorCustomData), period.def, interval);
									$state = -1;
									break $sm1;
								}
								else {
									// Get supplement data (if any)
									supplementData = QuickView.Client.UI.Charts.ChartSupplementData.$ctor();
									if (ss.referenceEquals(QuickView.Client.Models.Charts.Indicator.idLower(indicator), QuickView.Client.Models.Charts.KnownIndicators.qrNet) && period.metaResolution === 2) {
										// Load HWM
										hwmIndicator = QuickView.Client.Models.Charts.RuntimeChartMetadata.getIndicator(QuickView.Client.Common.AppContext.metadata, QuickView.Client.Models.Charts.KnownIndicators.QRHWM);
										if (ss.isValue(hwmIndicator)) {
											$t2 = $QuickView_Client_UI_MainView_$LocalServices.get_$dataProvider().getIndicatorData(hwmIndicator, period, 1, 2);
											$state = 3;
											$t2.continueWith($sm);
											$doFinally = false;
											return;
										}
										$state = 2;
										continue $sm1;
									}
									$state = 2;
									continue $sm1;
								}
							}
							case 3: {
								$state = -1;
								hwmDataBag = $t2.getAwaitedResult();
								hwmData = QuickView.Client.Services.Charts.IndicatorDataBag.getCustomData(hwmDataBag, 3);
								if (ss.isValue(hwmData) && false === hwmData.get_isEmpty()) {
									// 2015-06 Saltarelle compiler does not support casting of serializable types when
									// generics are used (e.g. LINQ "Cast")
									supplementData.H = Enumerable.from(hwmData.get_dataPoints()).select(function(x) {
										return x;
									}).toArray();
								}
								$state = 2;
								continue $sm1;
							}
							case 2: {
								$state = -1;
								if (this.$areBenchmarksEnabled()) {
									if (ss.isNullOrUndefined(this.$_benchmarkDataEventSubscriptionList)) {
										this.$_benchmarkDataEventSubscriptionList = [];
									}
									benchmarkDataList = [];
									$t3 = ss.getEnumerator(this.get_$row().get_$indicatorOptions().get_benchmarks().get_indicators());
									$state = 5;
									continue $sm1;
								}
								$state = 4;
								continue $sm1;
							}
							case 5:
							case 7:
							case 8: {
								if ($state === 5) {
									$state = 7;
								}
								try {
									$sm2:
									for (;;) {
										switch ($state) {
											case 7: {
												$state = -1;
												if (!$t3.moveNext()) {
													$state = -1;
													break $sm2;
												}
												benchmark = $t3.current();
												$t4 = $QuickView_Client_UI_MainView_$LocalServices.get_$dataProvider().getIndicatorData(benchmark, this.get_$column().$period, 1, 2);
												$state = 8;
												$t4.continueWith($sm);
												$doFinally = false;
												return;
											}
											case 8: {
												$state = -1;
												benchmarkDataBag = $t4.getAwaitedResult();
												benchmarkEventSubscription = $QuickView_Client_UI_MainView_$LocalServices.get_$dataProvider().subscribeDataChanged(benchmark, this.get_$column().$period.metaResolution, ss.mkdel(this, this.$dataProvider_BenchmarkDataChanged));
												benchmarkData = QuickView.Client.Services.Charts.IndicatorDataBag.getChartData$1(benchmarkDataBag, unit, resolution);
												benchmarkDataList.push(ss.makeGenericType(QuickView.Client.UI.Charts.ChartData$1, [QuickView.Client.Models.Charts.DataPointBase]).$ctor(benchmark, benchmarkData.get_dataPoints()));
												$state = 7;
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
										$t3.dispose();
									}
								}
								$state = 6;
								continue $sm1;
							}
							case 4: {
								$state = -1;
								// Update chart
								this.$updateChart$1(indicator, ss.cast(data, QuickView.Client.Services.Charts.IndicatorChartData), supplementData, period.def, interval, viewMode);
								$state = -1;
								break $sm1;
							}
							case 6: {
								$state = -1;
								supplementData.B = benchmarkDataList;
								$state = 4;
								continue $sm1;
							}
							default: {
								break $sm1;
							}
						}
					}
					$tcs.setResult(null);
				}
				catch ($t5) {
					$tcs.setException(ss.Exception.wrap($t5));
				}
			});
			$sm();
			return $tcs.task;
		},
		$updateChart_SubRed: function(indicator, data, period, timeInterval) {
			JS.ArgumentHelper.notNull(indicator, 'indicator');
			JS.ArgumentHelper.notNull(data, 'data');
			JS.ArgumentHelper.notNull(period, 'period');
			JS.ArgumentHelper.notNull(timeInterval, 'timeInterval');
			if (ss.isNullOrUndefined(this.$_chartPanel)) {
				this.$_chartPanel = $("<div class='" + ('chart' || '') + "'></div>").appendTo(this.get_$element());
			}
			if (ss.isNullOrUndefined(this.$_chart)) {
				this.$_chart = new QuickView.Client.UI.Charts.SubRedChart(this.$_chartPanel, 1);
			}
			this.$_chart.set_showTooltips(JS.EnumExtensions.isSet(this.get_$table().$options.get_displayOptions(), 8));
			this.$_chart.update(ss.makeGenericType(QuickView.Client.UI.Charts.ChartData$1, [QuickView.Client.Models.Charts.DataPointBase]).$ctor(indicator, data.get_dataPoints()), period, timeInterval, data.unit, data.resolution, null, null);
		},
		$updateChart$1: function(indicator, data, supplementData, period, timeInterval, viewMode) {
			JS.ArgumentHelper.notNull(indicator, 'indicator');
			JS.ArgumentHelper.notNull(data, 'data');
			JS.ArgumentHelper.notNull(period, 'period');
			JS.ArgumentHelper.notNull(timeInterval, 'timeInterval');
			if (ss.isNullOrUndefined(this.$_chartPanel)) {
				this.$_chartPanel = $("<div class='" + ('chart' || '') + "'></div>").appendTo(this.get_$element());
			}
			if (ss.isValue(this.$_chart)) {
				if (ss.isInstanceOfType(this.$_chart, QuickView.Client.UI.Charts.BarChart) && viewMode !== 1 || ss.isInstanceOfType(this.$_chart, QuickView.Client.UI.Charts.LineChart) && viewMode !== 0) {
					this.$_chart.dispose();
					this.$_chart = null;
				}
			}
			if (ss.isNullOrUndefined(this.$_chart)) {
				if (viewMode === 1) {
					this.$_chart = new QuickView.Client.UI.Charts.BarChart(this.$_chartPanel, 1);
				}
				else if (viewMode === 0) {
					this.$_chart = new QuickView.Client.UI.Charts.LineChart(this.$_chartPanel, 1);
				}
				else {
					throw new ss.ArgumentOutOfRangeException('viewMode', 'Invalid value.', null, viewMode);
				}
			}
			this.$_chart.set_showTooltips(JS.EnumExtensions.isSet(this.get_$table().$options.get_displayOptions(), 8));
			this.$_chart.update(ss.makeGenericType(QuickView.Client.UI.Charts.ChartData$1, [QuickView.Client.Models.Charts.DataPointBase]).$ctor1(indicator, data.get_dataPoints(), data.get_initialValue()), period, timeInterval, data.unit, data.resolution, supplementData, null);
		},
		$removeChart: function() {
			if (ss.isValue(this.$_chart)) {
				this.$_chart.dispose();
				this.$_chart = null;
			}
			if (ss.isValue(this.$_chartPanel)) {
				this.$_chartPanel.remove();
				this.$_chartPanel = null;
			}
			if (ss.isValue(this.$_cellHeader)) {
				this.$_cellHeader.remove();
				this.$_cellHeader = null;
			}
		},
		$updateCellHeader_SubRed: function(indicator, data) {
			JS.ArgumentHelper.notNull(indicator, 'indicator');
			JS.ArgumentHelper.notNull(data, 'data');
			var extremes = $QuickView_$Client_UI_MainView_Grid_$ChartRowDataCell$Extremes.$ctor();
			var $t1 = ss.getEnumerator(data.get_dataPoints());
			try {
				while ($t1.moveNext()) {
					var item = $t1.current();
					var itemMin = Math.min(item.S, item.R);
					var itemMax = Math.max(item.S, item.R);
					if (ss.isNullOrUndefined(extremes.min) || itemMin !== 0 && ss.Nullable$1.lt(itemMin, extremes.min)) {
						extremes.min = itemMin;
					}
					if (ss.isNullOrUndefined(extremes.max) || itemMax !== 0 && ss.Nullable$1.gt(itemMax, extremes.max)) {
						extremes.max = itemMax;
					}
					if (itemMax !== 0) {
						extremes.last = itemMax;
					}
					else if (itemMin !== 0) {
						extremes.last = itemMin;
					}
				}
			}
			finally {
				$t1.dispose();
			}
			this.$updateCellHeader(indicator, data, extremes);
		},
		$updateCellHeader_ChartData: function(indicator, data, cumulative) {
			JS.ArgumentHelper.notNull(indicator, 'indicator');
			JS.ArgumentHelper.notNull(data, 'data');
			var extremes = $QuickView_$Client_UI_MainView_Grid_$ChartRowDataCell$Extremes.$ctor();
			var $t1 = ss.getEnumerator(data.get_dataPoints());
			try {
				while ($t1.moveNext()) {
					var item = $t1.current();
					var value = (cumulative ? item.C : item.N);
					if (ss.isNullOrUndefined(extremes.min) || ss.Nullable$1.lt(value, extremes.min)) {
						extremes.min = value;
					}
					if (ss.isNullOrUndefined(extremes.max) || ss.Nullable$1.gt(value, extremes.max)) {
						extremes.max = value;
					}
					extremes.last = value;
				}
			}
			finally {
				$t1.dispose();
			}
			this.$updateCellHeader(indicator, data, extremes);
		},
		$updateCellHeader: function(indicator, data, extremes) {
			JS.ArgumentHelper.notNull(indicator, 'indicator');
			JS.ArgumentHelper.notNull(data, 'data');
			JS.ArgumentHelper.notNull(extremes, 'extremes');
			var unit = data.unit;
			if (ss.isNullOrUndefined(this.$_cellHeader)) {
				this.$_cellHeader = $("<div class='y_axis'></div>").appendTo(this.get_$element());
			}
			var panelCellHeader = this.$_cellHeader;
			var panelCellHeader_labelHigh;
			var panelCellHeader_labelLow;
			var panelCellHeader_labelLast;
			var panelCellHeader_panelLast;
			panelCellHeader_labelHigh = $("<div class='text'></div>").appendTo($("<div class='item hi'></div>").appendTo(panelCellHeader));
			panelCellHeader_labelLow = $("<div class='text'></div>").appendTo($("<div class='item lo'></div>").appendTo(panelCellHeader));
			panelCellHeader_panelLast = $("<div class='item last'></div>").appendTo(panelCellHeader);
			panelCellHeader_labelLast = $("<div class='text'></div>").appendTo(panelCellHeader_panelLast);
			// Must be updated BEFORE the chart is rendered in order to size it correctly
			// Display values on the y-axis
			var low = extremes.min;
			var high = extremes.max;
			var last = extremes.last;
			var yAxisLow;
			var yAxisHigh;
			{
				yAxisLow = null;
				yAxisHigh = null;
			}
			var lowSource = 0;
			var highSource = 0;
			if (QuickView.Client.Models.Charts.Indicator.isCompleteValue(indicator)) {
				// Always display the min/max for AuM/SharePrice/etc.
			}
			else {
				if (ss.Nullable$1.gt(low, 0) && ss.isValue(yAxisLow)) {
					// If the min value is positive - use the y-axis min instead.
					low = yAxisLow;
					lowSource = 1;
				}
				if (ss.Nullable$1.lt(high, 0) && ss.isValue(yAxisHigh)) {
					// If the max value is negative - use the y-axis max instead.
					high = yAxisHigh;
					highSource = 1;
				}
			}
			var highText;
			var lowText;
			var lastText;
			var highTextTooltip = QuickView.Client.UI.Charts.ChartFormat.formatNumber(high, unit, indicator.timeSeriesCurrency, indicator.settings.D, 0, null, null);
			var lowTextTooltip = QuickView.Client.UI.Charts.ChartFormat.formatNumber(low, unit, indicator.timeSeriesCurrency, indicator.settings.D, 0, null, null);
			var lastTextTooltip = QuickView.Client.UI.Charts.ChartFormat.formatNumber(last, unit, indicator.timeSeriesCurrency, indicator.settings.D, 0, null, null);
			var symbol;
			if (unit === 4) {
				highText = $QuickView_Client_UI_MainView_Grid_$ChartRowDataCell.$formatPercentValue(ss.unbox(high));
				lowText = $QuickView_Client_UI_MainView_Grid_$ChartRowDataCell.$formatPercentValue(ss.unbox(low));
				lastText = $QuickView_Client_UI_MainView_Grid_$ChartRowDataCell.$formatPercentValue(ss.unbox(last));
				symbol = '%';
			}
			else if (unit === 3) {
				var divisor = (JS.EnumExtensions.isSet(indicator.settings.D, 1) ? 1000 : 1);
				var denominator = QuickView.Client.UI.Common.Format$Number.calculateBestDenominator$3([ss.unbox(high) / divisor, ss.unbox(low) / divisor, ss.unbox(last) / divisor]);
				var denominatorSymbol = QuickView.Client.UI.Common.Format$Number.getDenominationSymbol(denominator);
				highText = $QuickView_Client_UI_MainView_Grid_$ChartRowDataCell.$formatCurrencyValue(ss.unbox(high) / divisor / denominator);
				lowText = $QuickView_Client_UI_MainView_Grid_$ChartRowDataCell.$formatCurrencyValue(ss.unbox(low) / divisor / denominator);
				lastText = $QuickView_Client_UI_MainView_Grid_$ChartRowDataCell.$formatCurrencyValue(ss.unbox(last) / divisor / denominator);
				symbol = QuickView.Client.UI.Common.Data.DataDescription$Currencies.getSymbol(indicator.timeSeriesCurrency) + denominatorSymbol;
			}
			else {
				throw new ss.NotImplementedException(ss.formatString('The unit {0} is not implemented.', unit));
			}
			var suffix = '<br/>' + symbol;
			// The unit should be displayed only below the last value
			lastText += suffix;
			panelCellHeader_labelHigh.html(highText);
			panelCellHeader_labelLow.html(lowText);
			panelCellHeader_labelLast.html(lastText);
			panelCellHeader_panelLast.removeClass('positive');
			panelCellHeader_panelLast.removeClass('negative');
			if (ss.Nullable$1.gt(last, 0)) {
				panelCellHeader_panelLast.addClass('positive');
			}
			else if (ss.Nullable$1.lt(last, 0)) {
				panelCellHeader_panelLast.addClass('negative');
			}
			var tooltip = ss.formatString('<table><tr><td>Hi:</td><td>{0}</td></tr><tr><td>Lst:</td><td>{1}</td></tr><tr><td>Lo:</td><td>{2}</td></tr></table>', highTextTooltip, lastTextTooltip, lowTextTooltip);
			// Add explanation for the low and high values
			var lowHighNote = '<hr/>';
			if (highSource === 0) {
				lowHighNote += 'Hi: Largest data point value.';
			}
			else {
				lowHighNote += 'Hi: The top of the chart.';
			}
			lowHighNote += '<br/>';
			if (lowSource === 0) {
				lowHighNote += 'Lo: Smallest data point value.';
			}
			else {
				lowHighNote += 'Lo: The bottom of the chart.';
			}
			tooltip += lowHighNote;
			if (QuickView.Client.Common.AppEnvironment.get_isDesktopDevice()) {
				// The event on mobile is used to open top markets for QR
				JS.UI.TooltipExtensions.setHtmlTooltip$1(panelCellHeader, tooltip, null, 0, null);
			}
		},
		$updateStats: function() {
			var $state = 0, $tcs = new ss.TaskCompletionSource(), period, indicator, $t1, dataBag, data, stats, panel, panelChart, labelChart_Positive, labelChart_Negative, panelContent, $t2, statField, labelStat, value, textValue;
			var $sm = ss.mkdel(this, function() {
				try {
					$sm1:
					for (;;) {
						switch ($state) {
							case 0: {
								$state = -1;
								this.$removeData();
								// CAUTION A local variable MUST be used since the option can be changed until this method
								// completes (due to async execution)
								period = this.get_$column().$period;
								indicator = this.get_$row().get_$indicator();
								if (period.get_supportsStats() && QuickView.Client.Models.Charts.Indicator.supportsStats(indicator)) {
									// Stats are supported
								}
								else {
									// Stats are supported for daily resolution only; percentage data is required
									this.get_$element().html("<div class='no-data'>N/A</div>");
									this.$_statsSupported = false;
									this.$_stats = null;
									this.$_statsResolution = 0;
									$tcs.setResult(null);
									return;
								}
								$t1 = $QuickView_Client_UI_MainView_$LocalServices.get_$dataProvider().getIndicatorData(indicator, period, 1, 2);
								$state = 1;
								$t1.continueWith($sm);
								return;
							}
							case 1: {
								$state = -1;
								dataBag = $t1.getAwaitedResult();
								// Subscribe for changes
								this.$_dataProviderEventSubscription = $QuickView_Client_UI_MainView_$LocalServices.get_$dataProvider().subscribeDataChanged(indicator, period.metaResolution, ss.mkdel(this, this.$dataProvider_IndicatorDataChanged));
								data = QuickView.Client.Services.Charts.IndicatorDataBag.getChartData$1(dataBag, 4, 5);
								if (ss.isNullOrUndefined(data) || data.get_isEmpty()) {
									// Stats are supported for daily resolution only; percentage data is required
									this.get_$element().html("<div class='no-data'>No data.</div>");
									$tcs.setResult(null);
									return;
								}
								stats = QuickView.Client.Algorithms.Stats.StatAlgorithms.calculatePercentageStats(Enumerable.from(data.get_dataPoints()).select(function(x) {
									return x.N;
								}).toArray(), data.resolution);
								panel = $("<div class='stats'></div>").appendTo(this.get_$element());
								// Chart
								panelChart = $("<div class='chart'></div>").appendTo(panel);
								labelChart_Positive = $("<div class='positive'></div>").appendTo(panelChart);
								labelChart_Negative = $("<div class='negative'></div>").appendTo(panelChart);
								// Content
								panelContent = $("<div class='content'></div>").appendTo(panel);
								for ($t2 = 0; $t2 < $QuickView_Client_UI_MainView_Grid_$ChartRowDataCell.$primaryStats.length; $t2++) {
									statField = $QuickView_Client_UI_MainView_Grid_$ChartRowDataCell.$primaryStats[$t2];
									labelStat = $(ss.formatString("<div class='item _id_{0}'><span class='label'>{1}</span>= <span class='value'></span></div>", QuickView.Client.UI.Common.Data.DataDescription.getName$3(statField), QuickView.Client.UI.Common.Data.DataDescription.getShortDisplayName(statField))).appendTo(panelContent).children('.value');
									value = QuickView.Client.UI.Common.Data.DataDescription$ChartStats.getGetter(statField)(stats);
									textValue = QuickView.Client.UI.Common.StatFormat.field(statField, value, data.resolution);
									$QuickView_Client_UI_MainView_Grid_$ChartRowDataCell.$displayStatValue(labelStat, textValue, value);
								}
								// Add a label for the active stat
								$("<div class='item _id_ActiveStat'><span class='label'></span>= <span class='value'></span></div>").appendTo(panelContent).hide();
								// Save the stats for later (in case rows are sorted by a stat)
								this.$_statsSupported = true;
								this.$_stats = stats;
								this.$_statsResolution = data.resolution;
								// Show tooltip and the active stat
								this.$updateActiveStat();
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
				catch ($t3) {
					$tcs.setException(ss.Exception.wrap($t3));
				}
			});
			$sm();
			return $tcs.task;
		},
		$updateActiveStat: function() {
			if (ss.isNullOrUndefined(this.$_stats)) {
				// This happens when sorting another column with stats displayed and
				// this current column displays charts
				return;
			}
			var stats = this.$_stats;
			var resolution = this.$_statsResolution;
			var settings = this.get_$table().$options.get_statsSortOptions();
			var activeChartStat = (ss.isNullOrUndefined(settings) ? 'None' : settings.stat);
			var hasActiveStat = false === (activeChartStat === 'None');
			var activeStatInfo;
			if (activeChartStat !== 'None') {
				var value = QuickView.Client.UI.Common.Data.DataDescription$ChartStats.getGetter(activeChartStat)(stats);
				var textValue = QuickView.Client.UI.Common.StatFormat.field(activeChartStat, value, resolution);
				var $t1 = $QuickView_$Client_UI_MainView_Grid_$ChartRowDataCell$ActiveStatInfo.$ctor();
				$t1.value = value;
				$t1.textValue = textValue;
				$t1.maxAbsValue = QuickView.Client.UI.Common.Data.DataDescription$ChartStats.getMaxAbsValue(activeChartStat);
				$t1.name = QuickView.Client.UI.Common.Data.DataDescription.getName$3(activeChartStat);
				$t1.shortDisplayName = QuickView.Client.UI.Common.Data.DataDescription.getShortDisplayName(activeChartStat);
				$t1.fullDisplayName = QuickView.Client.UI.Common.Data.DataDescription.getFullDisplayName(activeChartStat);
				activeStatInfo = $t1;
			}
			else {
				activeStatInfo = null;
			}
			var panelActiveStat = $('.stats > .content > .item._id_ActiveStat', this.get_$element());
			var isActiveStatPrimary = activeChartStat !== 'None' && ss.contains($QuickView_Client_UI_MainView_Grid_$ChartRowDataCell.$primaryStats, activeChartStat);
			if (false === hasActiveStat || isActiveStatPrimary) {
				// The stat by which rows are sorted is already displayed
				panelActiveStat.hide();
			}
			else {
				// Show the stat by which rows are sorted
				panelActiveStat.show();
				var labelActiveStat_Name = panelActiveStat.children('.label');
				var labelActiveStat_Value = panelActiveStat.children('.value');
				labelActiveStat_Name.text(activeStatInfo.shortDisplayName);
				$QuickView_Client_UI_MainView_Grid_$ChartRowDataCell.$displayStatValue(labelActiveStat_Value, activeStatInfo.textValue, activeStatInfo.value);
			}
			var itemList = $('.stats > .content > .item', this.get_$element());
			itemList.removeClass('sorted');
			var isSorted = hasActiveStat && ss.referenceEquals(settings.columnID, this.get_$column().get_$id());
			if (isSorted) {
				var activeStatName = (isActiveStatPrimary ? activeStatInfo.name : 'ActiveStat');
				var item = itemList.filter('._id_' + activeStatName);
				item.addClass('sorted');
				// Sort the column since the stat has changed
				this.get_$row().$table.$chartRows.$chartRowCell_Sort();
			}
			var labelChart_Positive = $('.stats > .chart > .positive', this.get_$element());
			var labelChart_Negative = $('.stats > .chart > .negative', this.get_$element());
			// Reset previous values / Hide bars
			labelChart_Positive.width(0);
			labelChart_Negative.width(0);
			// Mantis 0007012: The bar should be displayed only for the sorted column
			if (isSorted) {
				// The value to display on the chart
				var chartValue = activeStatInfo.value;
				// The maximum absolute value
				var maxAbsValue = activeStatInfo.maxAbsValue;
				if (ss.isValue(chartValue) && ss.isValue(maxAbsValue)) {
					// Limit to 100%
					var percent = Math.min(1, Math.abs(ss.unbox(chartValue)) / ss.unbox(maxAbsValue));
					// The width of the bar should be between 0% and 45% of the width of the cell
					var barWidth = ss.round(45 * percent).toString() + '%';
					if (ss.Nullable$1.gt(chartValue, 0)) {
						labelChart_Positive.width(barWidth);
					}
					else if (ss.Nullable$1.lt(chartValue, 0)) {
						labelChart_Negative.width(barWidth);
					}
				}
			}
			if (QuickView.Client.Common.AppEnvironment.get_isDesktopDevice()) {
				// Show the active stat in the tooltip
				var panel = $('.stats', this.get_$element());
				var tooltip = new ss.StringBuilder();
				tooltip.append('<table>');
				var $t2 = ss.getEnumerator(QuickView.Client.UI.Common.Data.DataDescription$ChartStats.all);
				try {
					while ($t2.moveNext()) {
						var statField = $t2.current();
						var value1 = QuickView.Client.UI.Common.Data.DataDescription$ChartStats.getGetter(statField)(stats);
						var textValue1 = QuickView.Client.UI.Common.StatFormat.field(statField, value1, resolution);
						if (statField === 'TStat') {
							var tTest = stats.T;
							if (ss.isValue(tTest)) {
								var sign;
								if (tTest.L > 0) {
									sign = '>';
								}
								else if (tTest.L < 0) {
									sign = '<';
								}
								else {
									sign = '=';
								}
								textValue1 += ss.formatString(' (p-val = {0}{1})', QuickView.Client.UI.Common.StatFormat.unitless(tTest.P), (ss.isNullOrUndefined(sign) ? null : ss.formatString(ss.formatString(' [LstVal {0} 0])', sign))));
							}
						}
						else if (statField === 'Autocorrelation') {
							var autocorrelation = stats.A;
							if (ss.isValue(autocorrelation)) {
								textValue1 += ss.formatString(' (95%CI : [{0:N3}, {1:N3}])', autocorrelation.L, autocorrelation.H);
							}
						}
						tooltip.append(ss.formatString("<tr><td class='label'>{0} =</td><td class='value'>{1}</td></tr>", QuickView.Client.UI.Common.Data.DataDescription.getShortDisplayName(statField), textValue1));
					}
				}
				finally {
					$t2.dispose();
				}
				tooltip.append('</table>');
				// BM rows do not participate in sorting
				if (hasActiveStat && ss.referenceEquals(settings.columnID, this.get_$column().get_$id())) {
					tooltip.append(ss.formatString('<br/>Stat bar toggled ON for {0}.<br/>', activeStatInfo.fullDisplayName));
				}
				tooltip.append('<br/>Stats are annualized.');
				JS.UI.TooltipExtensions.setHtmlTooltip$1(panel, tooltip.toString(), null, 0, 'stats_tooltip');
			}
		},
		$removeStats: function() {
			this.$_statsSupported = false;
			this.$_stats = null;
		},
		$tryGetStatValue: function(field, value) {
			if (false === this.$_statsSupported) {
				value.$ = null;
				return true;
			}
			if (ss.isNullOrUndefined(this.$_stats)) {
				// Stats are not loaded yet
				value.$ = null;
				return false;
			}
			else {
				value.$ = QuickView.Client.UI.Common.Data.DataDescription$ChartStats.getGetter(field)(this.$_stats);
				return true;
			}
		},
		$tryGetStatValue$1: function(field, value) {
			// TODO Sorting by a BM stat is no longer supported; remove this code if not necessary
			throw new ss.NotSupportedException();
		},
		$onResize: function() {
			// The chart must always be fit to the cell even if the cell is not visible.
			// Otherwise, the chart may go beyond the size of the cell (or be smaller than the cell)
			// and look like a bug.
			//if (IsEnabled)
			{
				if (ss.isValue(this.$_chart)) {
					this.$_chart.onResize();
				}
			}
		}
	}, $QuickView_Client_UI_MainView_Grid_$DataCell, [$QuickView_Client_UI_MainView_Grid_$IDataCellMenuListener]);
	ss.initClass($QuickView_Client_UI_MainView_Grid_$ChartRowHeaderCell, $asm, {
	    get_$row: function () {
			return ss.cast(this.$row, $QuickView_Client_UI_MainView_Grid_$ChartRow);
		},
		destroyCore: function() {
			$QuickView_Client_UI_MainView_Grid_$Cell.prototype.destroyCore.call(this);
			if (ss.isValue(this.$_dataRecencyLabelTaskID)) {
				window.clearTimeout(ss.unbox(this.$_dataRecencyLabelTaskID));
				this.$_dataRecencyLabelTaskID = null;
			}
			if (ss.isValue(this.$_dataProviderEventlyDataEventSubscription)) {
				this.$_dataProviderEventlyDataEventSubscription.dispose();
				this.$_dataProviderEventlyDataEventSubscription = null;
			}
			if (ss.isValue(this.$_dataProviderTimestampEventSubscription)) {
				this.$_dataProviderTimestampEventSubscription.dispose();
				this.$_dataProviderTimestampEventSubscription = null;
			}
			this.get_$row().$table.remove_$favoritesChanged(ss.mkdel(this, this.$table_FavoritesChanged));
			this.get_element().remove();
		},
		$dataProvider_IndicatorDailyDataChanged: function(sender, e) {
			this.$updatePositionsAsync();
		},
		$dataProvider_IndicatorDataTimestampChanged: function(sender, e) {
			this.$updateDataRecency();
		},
		$table_FavoritesChanged: function(sender, e) {
			this.$updateFavorite();
		},
		$displayCachedPositions: function () {
			var cachedData = this.get_$table().$settings.getIndicatorDataCache(this.get_$row().get_$indicator());
			if (ss.isNullOrUndefined(cachedData) || ss.isNullOrUndefined(cachedData.P)) {
				return false;
			}
			var total = $QuickView_$Client_UI_MainView_Grid_$ChartRowHeaderCell$IndicatorPositions.$ctor(this.get_$row().get_$indicator(), cachedData.P.T.S, cachedData.P.T.L);
			//console.log('total', this.get_$row().get_$indicator(), cachedData.P.T.S, cachedData.P.T.L);
			var positionList;
			if (ss.isNullOrUndefined(cachedData.P.L)) {
				positionList = null;
			}
			else {
				positionList = [];
				for (var $t1 = 0; $t1 < cachedData.P.L.length; $t1++) {
					var item = cachedData.P.L[$t1];
					var indicator = QuickView.Client.Models.Charts.RuntimeChartMetadata.getIndicator(QuickView.Client.Common.AppContext.metadata, item.I);
					if (ss.isNullOrUndefined(indicator)) {
						continue;
					}
					var positions = $QuickView_$Client_UI_MainView_Grid_$ChartRowHeaderCell$IndicatorPositions.$ctor(indicator, item.S, item.L);
					positionList.push(positions);
				}
			}
		    this.$displayPositions(total, positionList);
			return true;
		},
		$updatePositionsAsync: function() {
			if (ss.isNullOrUndefined(this.$_updatePositionsExecutor)) {
				this.$_updatePositionsExecutor = new JS.Threading.PostponeExecutor.$ctor2(ss.mkdel(this, this.$updatePositions), 2000, true);
			}
			this.$_updatePositionsExecutor.execute();
		},
		$updatePositions: function() {
			var $state = 0, positionsPeriod, totalPositions, positionList, $t1, marketRelationship, $t2, positions, indicator, $t3, dataCache, $t4, positions1;
			var $sm = ss.mkdel(this, function() {
				$sm1:
				for (;;) {
					switch ($state) {
						case 0: {
							$state = -1;
							positionsPeriod = QuickView.Client.Services.Charts.ChartPeriodProvider.getPeriod$1(4, -1);
							if (QuickView.Client.Models.Charts.Indicator.containsPositions(this.get_$row().get_$indicator())) {
								$t1 = $QuickView_Client_UI_MainView_Grid_$ChartRowHeaderCell.$getPositions(this.get_$row().get_$indicator());
								$state = 2;
								$t1.continueWith($sm);
								return;
							}
							else {
								marketRelationship = QuickView.Client.Models.Charts.Indicator.getRelationship(this.get_$row().get_$indicator(), 'Market');
								if (ss.isNullOrUndefined(marketRelationship)) {
									return;
								}
								totalPositions = $QuickView_$Client_UI_MainView_Grid_$ChartRowHeaderCell$IndicatorPositions.$ctor(this.get_$row().get_$indicator(), 0, 0);
								positionList = [];
								$t2 = 0;
								$state = 3;
								continue $sm1;
							}
						}
						case 2: {
							$state = -1;
							positions = $t1.getAwaitedResult();
							totalPositions = positions;
							positionList = null;
							$state = 1;
							continue $sm1;
						}
						case 3: {
							$state = -1;
							if (!($t2 < marketRelationship.indicators.length)) {
								$state = 5;
								continue $sm1;
							}
							indicator = marketRelationship.indicators[$t2];
							$t3 = $QuickView_Client_UI_MainView_Grid_$ChartRowHeaderCell.$getPositions(indicator);
							$state = 6;
							$t3.continueWith($sm);
							return;
						}
						case 1: {
							$state = -1;
							{
								dataCache = QuickView.Client.UI.Common.Settings.GridIndicatorDataCache.$ctor();
								if (ss.isValue(totalPositions)) {
									$t4 = QuickView.Client.UI.Common.Settings.GridIndicatorPositionsCache.$ctor();
									$t4.T = QuickView.Client.UI.Common.Settings.GridIndicatorPositions.$ctor(totalPositions.indicator.I, totalPositions.short, totalPositions.long);
									$t4.L = (ss.isNullOrUndefined(positionList) ? null : Enumerable.from(positionList).select(function (x) {
										return QuickView.Client.UI.Common.Settings.GridIndicatorPositions.$ctor(x.indicator.I, x.short, x.long);
									}).toArray());
									dataCache.P = $t4;
									//console.log('$t4', $t4);
								}
								this.get_$table().$settings.setIndicatorDataCache(this.get_$row().get_$indicator(), dataCache);
							}
							this.$displayPositions(totalPositions, positionList);
							$state = -1;
							break $sm1;
						}
						case 6: {
							$state = -1;
							positions1 = $t3.getAwaitedResult();
							if (ss.isNullOrUndefined(positions1)) {
								// No position data is available
								$state = 4;
								continue $sm1;
							}
							positionList.push(positions1);
							totalPositions.short = ss.Nullable$1.add(totalPositions.short, ss.coalesce(positions1.short, 0));
							totalPositions.long = ss.Nullable$1.add(totalPositions.long, ss.coalesce(positions1.long, 0));
							$state = 4;
							continue $sm1;
						}
						case 4: {
							$state = -1;
							$t2++;
							$state = 3;
							continue $sm1;
						}
						case 5: {
							$state = -1;
							if (ss.referenceEquals(totalPositions.short, 0)) {
								totalPositions.short = null;
							}
							if (ss.referenceEquals(totalPositions.long, 0)) {
								totalPositions.long = null;
							}
							if (ss.isNullOrUndefined(totalPositions.short) && ss.isNullOrUndefined(totalPositions.long)) {
								totalPositions = null;
							}
							$state = 1;
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
		$displayPositions: function (totalPositions, positionList) {
		    //console.log('totalPositions', totalPositions);
			// Clear the "Loading" flag
			this.$panelPositions.removeClass('loading');
			this.$panelPositions.hide();
			this.$labelPositions_Net.hide();
			this.$labelPositions_Short.hide();
			this.$labelPositions_Long.hide();
			if (ss.isNullOrUndefined(totalPositions)) {
				// Nothing to display
				return;
			}
			this.$panelPositions.show();
			var tooltip = '';
			if (ss.isValue(totalPositions.long)) {
				this.$labelPositions_Long.text(QuickView.Client.UI.Common.Format$Number.qrUnit$2(totalPositions.long, 2));
				this.$labelPositions_Long.show();
				if (tooltip.length !== 0) {
					tooltip += '<br/>';
				}
				tooltip += ss.formatString("<span class='label'>Long</span>: <span class='value positive'>{0}</span>", QuickView.Client.UI.Common.Format$Number.qrUnit(totalPositions.long));
			}
			if (ss.isValue(totalPositions.short)) {
				// Show negative value
				this.$labelPositions_Short.text(QuickView.Client.UI.Common.Format$Number.qrUnit$2(ss.Nullable$1.neg(totalPositions.short), 2));
				this.$labelPositions_Short.show();
				if (tooltip.length !== 0) {
					tooltip += '<br/>';
				}
				tooltip += ss.formatString("<span class='label'>Short</span>: <span class='value negative'>{0}</span>", QuickView.Client.UI.Common.Format$Number.qrUnit(ss.Nullable$1.neg(totalPositions.short)));
			}
			if (ss.isValue(totalPositions.long) && ss.isValue(totalPositions.short)) {
				var netValue = ss.Nullable$1.sub(totalPositions.long, totalPositions.short);
				this.$labelPositions_Net.text(QuickView.Client.UI.Common.Format$Number.qrUnit$2(netValue, 2));
				this.$labelPositions_Net.show();
				if (tooltip.length !== 0) {
					tooltip += '<br/>';
				}
				tooltip += ss.formatString("<span class='label'>Net</span>: <span class='value neutral'>{0}</span>", QuickView.Client.UI.Common.Format$Number.qrUnit(netValue));
			}
			if (ss.isValue(positionList) && positionList.length > 0) {
				tooltip += '<table>';
				// Long
				{
					positionList.sort(function(x, y) {
						return -ss.compare(ss.coalesce(x.long, 0), ss.coalesce(y.long, 0));
					});
					// Check if there are any long markets
					if (ss.isValue(positionList[0].long)) {
						tooltip += "<tr><td colspan='2'>&nbsp;<br/>Top 5 Mkts (Long)<hr/></td></tr>";
						for (var k = 0; k < 5 && k < positionList.length && ss.isValue(positionList[k].long); k++) {
							var positions = positionList[k];
							tooltip += ss.formatString("<tr><td>{0}</td><td class='positive'>{1}</td></tr>", positions.indicator.N, QuickView.Client.UI.Common.Format$Number.qrUnit(positions.long));
						}
					}
				}
				// Short
				{
					positionList.sort(function(x1, y1) {
						return -ss.compare(ss.coalesce(x1.short, 0), ss.coalesce(y1.short, 0));
					});
					// Check if there are any short markets
					if (ss.isValue(positionList[0].short)) {
						tooltip += "<tr><td colspan='2'>&nbsp;<br/>Top 5 Mkts (Short)<hr/></td></tr>";
						for (var k1 = 0; k1 < 5 && k1 < positionList.length && ss.isValue(positionList[k1].short); k1++) {
							var positions1 = positionList[k1];
							tooltip += ss.formatString("<tr><td>{0}</td><td class='negative'>{1}</td></tr>", positions1.indicator.N, QuickView.Client.UI.Common.Format$Number.qrUnit(ss.Nullable$1.neg(positions1.short)));
						}
					}
				}
				tooltip += '</table>';
			}
			JS.UI.TooltipExtensions.setHtmlTooltip$1(this.$panelPositions, tooltip, this.get_$row().get_$indicator().N + ' Positions', 0, 'positions_tooltip');
			//console.log(tooltip, this.get_$row().get_$indicator().N + ' Positions');
		},
		$showRowConnector: function() {
			this.$labelRowConnector.show();
		},
		$hideRowConnector: function() {
			this.$labelRowConnector.hide();
		},
		$updateControls: function() {
			var indicator = this.get_$row().get_$indicator();
			// The name of the site and indicator group
			if (ss.isNullOrEmptyString(indicator.menuInfo.P)) {
				// The name of the group is the same as the name of the site
				// so its name should not be displayed
				this.$labelSiteName.text(indicator.menuInfo.A);
			}
			else {
				this.$labelSiteName.html(ss.formatString('{0}<sup>{1}</sup>', ss.htmlEncode(indicator.menuInfo.A), ss.htmlEncode(indicator.menuInfo.P)));
			}
			// A border must be displayed around the text (and not the element). Thus it is necessary
			// to surround the text with an element.
			var $t2 = this.$labelFundName;
			var $t1 = indicator.S;
			if (ss.isNullOrUndefined($t1)) {
				$t1 = indicator.N;
			}
			$t2.html(ss.formatString("<span class='text'>{0}</span>", $t1));
			if (QuickView.Client.Common.AppEnvironment.get_isDesktopDevice()) {
				var tooltip = $QuickView_Client_UI_MainView_Grid_$ChartRowHeaderCell.$formatSubCategoryTypeTooltip(this.get_$row());
				JS.UI.TooltipExtensions.setHtmlTooltip$1(this.$labelFundName, tooltip, null, 0, 'row_header_tooltip');
			}
			if (indicator.timeSeriesCurrency === 1) {
				this.$labelBaseCurrency.text('');
			}
			else {
				this.$labelBaseCurrency.text(QuickView.Client.UI.Common.Data.DataDescription.getSymbol(indicator.timeSeriesCurrency));
			}
		},
		$showShape: function(partial, alt) {
			var indicator = this.get_$row().get_$indicator();
			var groupName;
			if (ss.isNullOrEmptyString(indicator.menuInfo.P)) {
				groupName = 'Root';
			}
			else {
				groupName = indicator.menuInfo.P;
			}
			var cssClass = $QuickView_Client_UI_MainView_Grid_$ChartRowHeaderCell.$getShapeCssClass(groupName, partial, alt);
			this.$setShape(cssClass);
		},
		$hideShape: function() {
			this.$labelShape.hide();
		},
		$setShape: function(cssClass) {
			JS.ArgumentHelper.notNull(cssClass, 'cssClass');
			this.$labelShape.removeClass();
			this.$labelShape.addClass('shape');
			this.$labelShape.addClass(cssClass);
			this.$labelShape.show();
			// Ensure the shape is visible
		},
		$updateFavorite: function() {
			if (this.get_$row().$table.$isFavorite(this.get_$row().get_$indicator())) {
				this.$labelFavorite.show();
			}
			else {
				this.$labelFavorite.hide();
			}
		},
		$element_SwipeLeft: function(e) {
			var $state = 0, $t1, result;
			var $sm = ss.mkdel(this, function() {
				var $doFinally = true;
				$sm1:
				for (;;) {
					switch ($state) {
						case 0: {
							$state = -1;
							if (this.$_swipeLeftExecuting) {
								return;
							}
							this.$_swipeLeftExecuting = true;
							$state = 1;
							continue $sm1;
						}
						case 1:
						case 2:
						case 3: {
							if ($state === 1) {
								$state = 2;
							}
							try {
								$sm2:
								for (;;) {
									switch ($state) {
										case 2: {
											$state = -1;
											// Remove the row after user confirmation
											$t1 = JS.UI.Dialogs.ConfirmationDialog.show('Remove row', ss.formatString('Are you sure you want to remove {0} - {1}?', this.get_$row().get_$indicator().menuInfo.A, this.get_$row().get_$indicator().N));
											$state = 3;
											$t1.continueWith($sm);
											$doFinally = false;
											return;
										}
										case 3: {
											$state = -1;
											result = $t1.getAwaitedResult();
											if (result === true) {
												this.$removeRow();
											}
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
									this.$_swipeLeftExecuting = false;
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
		$removeRow: function() {
			window.setTimeout(ss.mkdel(this, function() {
				this.get_$row().$table.$chartRows.$remove$1(this.get_$row());
			}), 100);
		},
		$labelFundName_Click: function(e) {
			this.get_$row().$table.$openRowHeaderMenu(this.get_$row(), this.$_dataRecency);
		},
		$updateDataRecency: function() {
			// Initial clean up
			if (ss.isValue(this.$_dataRecencyLabelTaskID)) {
				window.clearTimeout(ss.unbox(this.$_dataRecencyLabelTaskID));
				this.$_dataRecencyLabelTaskID = null;
			}
			var dataRecency = this.$_dataRecency = $QuickView_Client_UI_MainView_$LocalServices.get_$dataProvider().getChartDataRecency(this.get_$row().get_$indicator());
			if (ss.isNullOrUndefined(dataRecency)) {
				this.$labelDataRecency.empty();
				JS.UI.TooltipExtensions.removeTooltip(this.$labelDataRecency);
				return;
			}
			this.$updateDataRecencyLabel();
			if (QuickView.Client.Common.AppEnvironment.get_isMobileDevice()) {
				// The tooltip should be displayed only on desktop; on mobile it clicking on the label
				// conflicts with showing the row header menu.
				return;
			}
			JS.UI.TooltipExtensions.setTextTooltip(this.$labelDataRecency, ss.mkdel(this, this.$createDataRecencyTooltipText), 'Latest data', 0, null);
		},
		$updateDataRecencyLabel: function() {
			// Clear the variable after each timeout
			if (ss.isValue(this.$_dataRecencyLabelTaskID)) {
				window.clearTimeout(ss.unbox(this.$_dataRecencyLabelTaskID));
				this.$_dataRecencyLabelTaskID = null;
			}
			var dataRecency = this.$_dataRecency;
			JS.Diagnostics.Debug.assert(ss.isValue(dataRecency));
			var now = JS.DateTimeExt.get_utcNow();
			if (JS.DateTimeExt.op_Inequality$1(dataRecency.lastDataPointTime, null)) {
				var difference = JS.DateTimeExt.op_Subtraction(now, ss.unbox(dataRecency.lastDataPointTime));
				this.$labelDataRecency.text(ss.formatString('Last data: {0} ago', QuickView.Client.UI.Common.Format$Time.age$1(difference)));
				// Setup the next update of the label depending on how much time has already passed
				var timeout;
				if (difference.ticks / 36000000000 >= 1) {
					// Update once per hour
					timeout = 3600000;
				}
				else if (difference.ticks / 600000000 >= 1) {
					// Update once per minute
					timeout = 60000;
				}
				else {
					// Update once per 5 seconds
					timeout = 5000;
				}
				this.$_dataRecencyLabelTaskID = window.setTimeout(ss.mkdel(this, this.$updateDataRecencyLabel), timeout);
			}
			else {
				this.$labelDataRecency.text('Last data: N/A');
			}
			this.$labelDataRecency.toggleClass('outdated', dataRecency.recency < 1);
		},
		$createDataRecencyTooltipText: function() {
			var dataRecency = this.$_dataRecency;
			if (ss.isNullOrUndefined(dataRecency)) {
				return '';
			}
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
			return tooltipText;
		}
	}, $QuickView_Client_UI_MainView_Grid_$Cell);
	ss.initClass($QuickView_Client_UI_MainView_Grid_$ChartRowManager, $asm, {
		get_$allRows: function() {
			if (ss.isNullOrUndefined(this.$_allRows)) {
				this.$_allRows = this.$_allChartRowList = [];
			}
			if (this.$_chartRowListChanged) {
				// Update the list of the rows
			    var list = this.$_allChartRowList;
				ss.clear(list);
				for (var $t1 = 0; $t1 < this.$_chartRowList.length; $t1++) {
					var row = this.$_chartRowList[$t1];
					list.push(row);
					if (ss.isValue(row.get_$benchmarkRow())) {
						list.push(row.get_$benchmarkRow());
					}
				}
				this.$_chartRowListChanged = false;
			}
			return this.$_allRows;
		},
		add_$rowsChanged: function(value) {
			this.$1$RowsChangedField = ss.delegateCombine(this.$1$RowsChangedField, value);
		},
		remove_$rowsChanged: function(value) {
			this.$1$RowsChangedField = ss.delegateRemove(this.$1$RowsChangedField, value);
		},
		$onRowsChanged: function(e) {
			var temp = this.$1$RowsChangedField;
			if (!ss.staticEquals(temp, null)) {
				temp(this, e);
			}
		},
		$gridOptions_SyncTopRowChanged: function(sender, e) {
			this.$handleRowChanged(0);
		},
		$gridOptions_SortingSettingsChanged: function(sender, e) {
			this.$handleRowChanged(7);
		},
		$onColumnViewModeChanged: function() {
			this.$handleRowChanged(7);
		},
		get_$topRow: function() {
			return this.$_topRow;
		},
		set_$topRow: function(value) {
			if (!ss.referenceEquals(this.$_topRow, value)) {
				// Set the indicator that is used to display the header row
				QuickView.Client.Services.Charts.IndicatorDataUsage.setHeaderIndicator((ss.isNullOrUndefined(value) ? null : value.get_$indicator()));
				this.$_topRow = value;
				this.$onTopRowChanged(ss.EventArgs.Empty);
			}
		},
		get_$isFirstPhysicalRowVisible: function() {
			if (ss.isNullOrUndefined(this.$rows) || this.$rows.length === 0) {
				return true;
			}
			else {
				return this.$calculateFirstVisibleRowIndex() <= 0;
			}
		},
		add_$topRowChanged: function(value) {
			this.$1$TopRowChangedField = ss.delegateCombine(this.$1$TopRowChangedField, value);
		},
		remove_$topRowChanged: function(value) {
			this.$1$TopRowChangedField = ss.delegateRemove(this.$1$TopRowChangedField, value);
		},
		$onTopRowChanged: function(e) {
			var temp = this.$1$TopRowChangedField;
			if (!ss.staticEquals(temp, null)) {
				temp(this, e);
			}
		},
		$calculateFirstVisibleRowIndex: function() {
			var rowHeight = this.$_table.get_$chartRowManager_TableLayout().cellHeight;
			// 63 = height of the header row + 2px margin + 1px at the top of the page
			// 76 = height of a chart row
			//  2 = margin of a chart row
			// CAUTION The size of the header row should NOT be compensated since:
			// When StrollY = 0 then the first physical row is visible
			// Scrolling down to the next row hides the first row which means the scroll has moved down with
			// the size of a single chart row = 78px
			// Therefore, the size of the header row is not taken into an account at all.
			return ss.Int32.div(QuickView.Client.UI.Common.UIElements.get_application().element.scrollTop(), rowHeight + 2);
		},
		$setFirstVisibleRowIndex: function(index) {
			JS.ArgumentHelper.positiveOrDefault(index, 'index');
			if (index >= this.$rows.length) {
				// Out of bounds
				return;
			}
			var rowHeight = this.$_table.get_$chartRowManager_TableLayout().cellHeight;
			var scrollTop = (rowHeight + 2) * index;
			QuickView.Client.UI.Common.UIElements.get_application().element.scrollTop(scrollTop);
		},
		$updateTopRow_Table: function() {
			this.$updateTopRow();
		},
		$updateTopRow: function() {
			// The index of the top row
			var newTopRow;
			if (ss.isNullOrUndefined(this.$rows) || this.$rows.length === 0) {
				newTopRow = null;
			}
			else if (this.$_options.get_syncTopRow()) {
				var index = this.$calculateFirstVisibleRowIndex();
				if (index >= 0 && index < this.$rows.length) {
					newTopRow = this.$rows[index];
				}
				else {
					// The user may have scrolled below the last row
					newTopRow = null;
				}
			}
			else {
				newTopRow = this.$rows[0];
			}
			this.set_$topRow(newTopRow);
			// Update the x-axis
			// Should be done regardless if the top row has changed since it is possible that
			// the first visible row becomes also the top row after removing the first physical top row
			// for some reason (e.g. by removing multiple rows)
			this.$_table.$chartRowManager_UpdateXAxisTopRowVisible();
		},
		$getIsSortingEnabled: function() {
			return this.$_options.get_sortMode() !== 0 || ss.isValue(this.$_options.get_statsSortOptions());
		},
		$document_KeyDown: function(e) {
			if (e.which === jQuery.ui.keyCode.ESCAPE) {
				// Cancel any sorting
				this.$_chartRowPanel.sortable('cancel');
			}
		},
		$sortableChartRowPanel_OnStart: function(e, uiEvent) {
			if (this.$getIsSortingEnabled()) {
				// 2015-01-27 - Disabled as per request by Dal
				// Remove sorting
				this.$_options.set_statsSortOptions(null);
				this.$_options.set_sortMode(0);
			}
		},
		$sortableChartRowPanel_OnUpdate: function(e, uiEvent) {
			var movedElement = uiEvent.item;
			// Find the old index of the element
			var id = movedElement.prop('id');
			var oldIndex = -1;
			for (var i = 0; i < this.$rows.length; i++) {
				var row = this.$rows[i];
				if (ss.referenceEquals(row.get_$id(), id)) {
					oldIndex = i;
					break;
				}
			}
			if (oldIndex < 0) {
				// Should be impossible
				return;
			}
			// Check if the new item has been dropped at correct position (i.e. it is not between
			// a indicator row and some of its associated rows)
			var nextElement = movedElement.next();
			if (nextElement.length === 0 || nextElement.hasClass('fund_row')) {
				// The row has been moved at the end of the list OR before another row
			}
			else {
				// The row has been moved in between a indicator row and some of its associated rows (e.g. a benchmark row)
				// so move the row after the current indicator row and before the next indicator row
				nextElement = movedElement.nextAll('.fund_row').first();
				if (nextElement.length === 0) {
					// Append the row at the end of the parent
					this.$_chartRowPanel.append(movedElement);
				}
				else {
					// Move the row after the next indicator row and before the next indicator row
					movedElement.insertBefore(nextElement);
				}
			}
			var chartRow = this.$rows[oldIndex];
			// Correctly position the elements associated with the row
			chartRow.$updateAssociatedElements();
			// Find the new index of the row
			var rowElementList = $('.table > .chart_row_panel > .chart_row.fund_row');
			var newIndex = -1;
			for (var i1 = 0; i1 < rowElementList.length; i1++) {
				var element = rowElementList[i1];
				if (ss.referenceEquals(element, movedElement[0])) {
					newIndex = i1;
					break;
				}
			}
			if (newIndex < 0) {
				// Should be impossible
				return;
			}
			this.$moveRow$1(oldIndex, newIndex);
		},
		$findByIndicator: function(indicator) {
			JS.ArgumentHelper.notNull(indicator, 'indicator');
			return Enumerable.from(this.$_chartRowList).firstOrDefault(function(x) {
				return ss.referenceEquals(x.get_$indicator(), indicator);
			}, ss.getDefaultValue($QuickView_Client_UI_MainView_Grid_$ChartRow));
		},
		$findByIndicatorID: function(id) {
			JS.ArgumentHelper.notNullOrEmpty(id, 'id');
			id = id.toLowerCase();
			return Enumerable.from(this.$_chartRowList).firstOrDefault(function(x) {
				return ss.referenceEquals(QuickView.Client.Models.Charts.Indicator.idLower(x.get_$indicator()), id);
			}, ss.getDefaultValue($QuickView_Client_UI_MainView_Grid_$ChartRow));
		},
		$add: function(indicator, afterRow) {
			JS.ArgumentHelper.notNull(indicator, 'indicator');
			JS.ArgumentHelper.notNull(afterRow, 'afterRow');
			var index = ss.indexOf(this.$_chartRowList, afterRow) + 1;
			// If the row is not found the index will be zero
			this.$add$1(indicator, index);
		},
		$add$1: function(indicator, index) {
			JS.ArgumentHelper.notNull(indicator, 'indicator');
			JS.ArgumentHelper.positiveOrDefault(index, 'index');
			this.$privateAdd(indicator, index);
		},
		$addAutoPosition: function(indicator, index) {
			JS.ArgumentHelper.notNull(indicator, 'indicator');
			// Find the last row from the same site
			var lastRowIndex;
			for (lastRowIndex = this.$_chartRowList.length - 1; lastRowIndex >= 0; lastRowIndex--) {
				if (ss.referenceEquals(this.$_chartRowList[lastRowIndex].get_$indicator().menuInfo.I.root, indicator.menuInfo.I.root)) {
					break;
				}
			}
			// This iterates the array as enumerable so it is slower than the code above
			//var lastRowIndex = _chartRowList.LastIndexOf(x => x.DataFundSite == indicator.Site);
			if (lastRowIndex < 0) {
				// Add the row after the last row
				lastRowIndex = this.$_chartRowList.length - 1;
			}
			this.$privateAdd(indicator, lastRowIndex + 1);
		},
		$addRange: function(funds, afterRow) {
			JS.ArgumentHelper.notNull(funds, 'funds');
			JS.ArgumentHelper.notNull(afterRow, 'afterRow');
			var index = ss.indexOf(this.$_chartRowList, afterRow) + 1;
			// If the row is not found the index will be zero
			this.$addRange$1(funds, index);
		},
		$addRange$1: function(funds, index) {
			JS.ArgumentHelper.notNull(funds, 'funds');
			JS.ArgumentHelper.positiveOrDefault(index, 'index');
			var $t1 = ss.getEnumerator(funds);
			try {
				while ($t1.moveNext()) {
					var indicator = $t1.current();
					this.$privateAdd(indicator, index++);
				}
			}
			finally {
				$t1.dispose();
			}
		},
		$addRangeAutoPosition: function(funds) {
			JS.ArgumentHelper.notNull(funds, 'funds');
			var previousRoot = null;
			var previousIndex = 0;
			var $t1 = ss.getEnumerator(funds);
			try {
				while ($t1.moveNext()) {
					var indicator = $t1.current();
					if (!ss.referenceEquals(previousRoot, indicator.menuInfo.I.root)) {
						// Find the last row from the same site
						var lastRowIndex;
						for (lastRowIndex = this.$_chartRowList.length - 1; lastRowIndex >= 0; lastRowIndex--) {
							if (ss.referenceEquals(this.$_chartRowList[lastRowIndex].get_$indicator().menuInfo.I.root, indicator.menuInfo.I.root)) {
								break;
							}
						}
						// This iterates the array as enumerable so it is slower than the code above
						//var lastRowIndex = _chartRowList.LastIndexOf(x => x.DataFundSite == indicator.Site);
						if (lastRowIndex < 0) {
							// Add the row after the last row
							lastRowIndex = this.$_chartRowList.length - 1;
						}
						previousIndex = lastRowIndex + 1;
					}
				    // The row is from the same site so add it at the next index
					this.$privateAdd(indicator, previousIndex++);
				}
			}
			finally {
				$t1.dispose();
			}
		},
		$privateAdd: function(indicator, index) {
			JS.ArgumentHelper.notNull(indicator, 'indicator');
			JS.ArgumentHelper.positiveOrDefault(index, 'index');
			if (Enumerable.from(this.$_chartRowList).any(function(x) {
				return ss.referenceEquals(x.get_$indicator(), indicator);
			})) {
				// A row that displays the specified indicator already exists
				return;
			}
			var afterRow;
			if (index <= 0 || this.$_chartRowList.length === 0) {
				afterRow = null;
				index = 0;
			}
			else if (index >= this.$_chartRowList.length) {
				// Add at the bottom
				afterRow = this.$_chartRowList[this.$_chartRowList.length - 1];
				index = this.$_chartRowList.length;
			}
			else {
				afterRow = this.$_chartRowList[index - 1];
			}
			var row = $QuickView_Client_UI_MainView_Grid_$ChartRow.$create(0, indicator, this.$_table, this.$_chartRowPanel, afterRow, null);

			//console.log('$privateAdd');
			//console.log('chartRowList', this.$_chartRowList);
			//console.log('row', row);

			ss.insert(this.$_chartRowList, index, row);
			this.$_chartRowListChanged = true;
			this.$onRowAdded();
		},
		$remove: function(indicator) {
			JS.ArgumentHelper.notNull(indicator, 'indicator');
			var row = this.$findByIndicator(indicator);
			if (ss.isValue(row)) {
				this.$remove$1(row);
			}
		},
		$removeRange: function(funds) {
			JS.ArgumentHelper.notNull(funds, 'funds');
			var $t1 = ss.getEnumerator(funds);
			try {
				while ($t1.moveNext()) {
					var indicator = $t1.current();
					var row = this.$findByIndicator(indicator);
					if (ss.isValue(row)) {
						this.$remove$1(row);
					}
				}
			}
			finally {
				$t1.dispose();
			}
		},
		$remove$1: function(row) {
			JS.ArgumentHelper.notNull(row, 'row');
			var index = ss.indexOf(this.$_chartRowList, row);
			if (index < 0) {
				// The row was not found
				return;
			}
			row.destroy();
			ss.removeAt(this.$_chartRowList, index);
			this.$_chartRowListChanged = true;
			this.$onRowRemoved();
		},
		$moveRow$1: function(oldIndex, newIndex) {
			JS.ArgumentHelper.positiveOrDefault(oldIndex, 'oldIndex');
			JS.ArgumentHelper.positiveOrDefault(newIndex, 'newIndex');
			var row = this.$_chartRowList[oldIndex];
			ss.removeAt(this.$_chartRowList, oldIndex);
			ss.insert(this.$_chartRowList, newIndex, row);
			this.$_chartRowListChanged = true;
			this.$handleRowChanged(4);
		},
		$moveRow: function(row, position) {
			JS.ArgumentHelper.notNull(row, 'row');
			var index = ss.indexOf(this.$_chartRowList, row);
			if (index < 0) {
				// The row was not found
				return;
			}
			// 2015-01-27 - Disabled as per request by Dal
			if (this.$getIsSortingEnabled()) {
				// Remove sorting
				this.$_options.set_statsSortOptions(null);
				this.$_options.set_sortMode(0);
			}
			var newIndex;
			switch (position) {
				case 3: {
					if (index > 0) {
						newIndex = index - 1;
						break;
					}
					else {
						return;
					}
				}
				case 4: {
					if (index < this.$_chartRowList.length - 1) {
						newIndex = index + 1;
						break;
					}
					else {
						return;
					}
				}
				case 1: {
					if (index > 0) {
						newIndex = 0;
						break;
					}
					else {
						return;
					}
				}
				case 2: {
					if (index < this.$_chartRowList.length - 1) {
						newIndex = this.$_chartRowList.length - 1;
						break;
					}
					else {
						return;
					}
				}
				default: {
					return;
				}
			}
			// Switch the elements
			{
				var rowElementList = $('.table > .chart_row_panel > .chart_row');
				var element = $(rowElementList[index]);
				var targetElement = rowElementList[newIndex];
				if (index > newIndex) {
					// Move up
					element.insertBefore(targetElement);
				}
				else if (index < newIndex) {
					// Move down
					element.insertAfter(targetElement);
				}
			}
			this.$moveRow$1(index, newIndex);
			this.$handleRowChanged(6);
		},
		$onRowAdded: function() {
			this.$handleRowChanged(7);
		},
		$onRowRemoved: function() {
			this.$handleRowChanged(6);
		},
		$onRowMoved: function() {
			this.$handleRowChanged(4);
		},
		$onRowChanged: function() {
			this.$handleRowChanged(7);
		},
		$onBenchmarkRowAdded: function() {
			this.$_chartRowListChanged = true;
			this.$handleRowChanged(6);
		},
		$onBenchmarkRowRemoved: function() {
			this.$_chartRowListChanged = true;
			this.$handleRowChanged(6);
		},
		$handleRowChanged: function(actions) {
			this.$_rowsChangedPendingActions |= actions;
			if (ss.isNullOrUndefined(this.$_rowChangedExecutor)) {
				// Use a delay in case multiple rows are added or deleted
				// The delay should be as short as possible since if the layout should be updated
				// almost immediately after a row is removed or added. The layout sets the size of the row.
				// Otherwise, artifacts are visible on screen.
				this.$_rowChangedExecutor = new JS.Threading.PostponeExecutor.$ctor2(ss.mkdel(this, this.$handleRowChanged_Execute), 100, true);
			}
			// Schedule an execution
			this.$_rowChangedExecutor.execute();
		},
		$handleRowChanged_Execute: function() {
			var actions = this.$_rowsChangedPendingActions;
			this.$_rowsChangedPendingActions = 0;
			if ((actions & 7) === 7) {
				this.$sort();
			}
			if ((actions & 6) === 6) {
				// Update layout
				this.$_table.$chartRowManager_UpdateLayout();
			}
			if ((actions & 4) === 4) {
				// Z-index should be set on mobile as well since when "BM" are visible display clips between rows
				// relies on it
				for (var k = 0; k < this.get_$allRows().length; k++) {
					var zIndex = this.get_$allRows().length + 1 - k;
					this.get_$allRows()[k].$setZIndex(zIndex);
				}
			}
			// This will also fire an event if the top row has changed
			this.$updateTopRow();
			// Fire event
			this.$onRowsChanged(ss.EventArgs.Empty);
		},
		$chartRowCell_Sort: function() {
			// Increase the delay to 500ms to decrease the number of sort operations
			// when stats change in multiple rows
			if (ss.isNullOrUndefined(this.$executorChartRowCell_Sort)) {
				this.$executorChartRowCell_Sort = new JS.Threading.PostponeExecutor.$ctor2(ss.mkdel(this, function() {
					this.$handleRowChanged(7);
				}), 1000, true);
			}
			this.$executorChartRowCell_Sort.execute();
		},
		$sort: function() {
			var settings = this.$_options.get_statsSortOptions();
			var showBenchmarks = false;
			// TODO Set the value if necessary OR remove sorting by BM stats altogether
			if (ss.isValue(settings) && (settings.stat !== 'None' || showBenchmarks && settings.benchmarkStat !== 'None') && Enumerable.from(this.$_table.$columns).any(function(x) {
				return ss.referenceEquals(x.get_$id(), settings.columnID) && x.$options.get_viewMode() === 2;
			})) {
				// Sort by stat
				this.$sortByStat();
			}
			else if (this.$_options.get_sortMode() === 2 || this.$_options.get_sortMode() === 1) {
				// Assume alphabetic order unless turned off
				this.$sortByFundOrder();
			}
		},
		$sortByFundOrder: function() {
			var comparer = $QuickView_$Client_UI_MainView_Grid_$ChartRowManager$IndicatorComparer.$getComparer(this.$_options.get_sortMode());
			this.$sort$1(function(a, b) {
				return comparer.compare(a.get_$indicator(), b.get_$indicator());
			});
			// 2015-01-27 No longer in use after the introduction of multiple sort modes
			//Sort((a, b) => a.Indicator.GlobalSortOrder.CompareTo(b.Indicator.GlobalSortOrder));
		},
		$sortByStat: function() {
			var settings = this.$_options.get_statsSortOptions();
			if (ss.isNullOrUndefined(settings) || false === settings.get_isStatSet()) {
				return;
			}
			var column = Enumerable.from(this.$_table.$columns).where(function(x) {
				return ss.referenceEquals(x.get_$id(), settings.columnID);
			}).firstOrDefault(null, ss.getDefaultValue($QuickView_Client_UI_MainView_Grid_$ChartColumn));
			if (ss.isNullOrUndefined(column)) {
				return;
			}
			var columnIndex = column.$index;
			// Cache all stats
			var statDict = new (ss.makeGenericType(ss.Dictionary$2, [$QuickView_Client_UI_MainView_Grid_$ChartRow, ss.makeGenericType(ss.Nullable$1, [Number])]))();
			var loadedValueCount = 0;
			// The number or rows that has loaded stats; this include errors and rows that do not support stats (null value)
			for (var $t1 = 0; $t1 < this.$_chartRowList.length; $t1++) {
				var row = this.$_chartRowList[$t1];
				var cell = row.$chartCells[columnIndex];
				var value = {};
				if (settings.stat !== 'None') {
					if (cell.$tryGetStatValue(settings.stat, value)) {
						loadedValueCount++;
					}
				}
				else if (settings.benchmarkStat !== 'None') {
					if (cell.$tryGetStatValue$1(settings.benchmarkStat, value)) {
						loadedValueCount++;
					}
				}
				else {
					value.$ = null;
				}
				statDict.set_item(row, value.$);
			}
			var columnCellList = this.$_table.$headerRow.$headerCells;
			var columnCell = columnCellList[columnIndex];
			if (loadedValueCount < this.$_chartRowList.length) {
				// There is at least one row that has not loaded data yet
				var ratio = loadedValueCount / this.$_chartRowList.length;
				columnCell.$setStatProgressBarValue(ratio);
			}
			else {
				// All rows has loaded data
				columnCell.$hideStatProgressBar();
			}
			// Make sure none of the other columns display a progress bar
			for (var k = 0; k < columnCellList.length; k++) {
				if (k !== columnIndex) {
					columnCellList[k].$hideStatProgressBar();
				}
			}
			var sortMethod = function(a, b) {
				var result = ss.Comparer.def.compare(statDict.get_item(a), statDict.get_item(b));
				if (settings.direction === 1) {
					result = -result;
				}
				if (result === 0) {
					// Sort by global order to provide stable sorting;
					// Otherwise, the order of equal rows may change if multiple sort operations
					// are performed in quick succession which leads to flicker on screen
					return ss.compare(a.get_$indicator().menuInfo.O, b.get_$indicator().menuInfo.O);
				}
				return result;
			};
			this.$sort$1(sortMethod);
		},
		$sort$1: function(method) {
			JS.ArgumentHelper.notNull(method, 'method');
			// Check if the array is already sorted
			var isSorted = true;
			for (var k = 1; k < this.$_chartRowList.length; k++) {
				var a = this.$_chartRowList[k - 1];
				var b = this.$_chartRowList[k];
				if (method(a, b) > 0) {
					isSorted = false;
					break;
				}
			}
			if (isSorted) {
				return;
			}
			// Sort the rows
			this.$_chartRowList.sort(method);
			this.$_chartRowListChanged = true;
			// Move each of the HTML rows to the top of the panel in descending order
			// (thus achieving the same order)
			for (var k1 = this.$_chartRowList.length - 1; k1 >= 0; k1--) {
				var item = this.$_chartRowList[k1];
				item.$moveToTop(this.$_chartRowPanel);
			}
		},
		$addBenchmarkRow: function(fundRow, benchmarkIndicator) {
			JS.ArgumentHelper.notNull(fundRow, 'fundRow');
			JS.ArgumentHelper.notNull(benchmarkIndicator, 'benchmarkFund');
			var result = $QuickView_Client_UI_MainView_Grid_$ChartRow.$create(1, benchmarkIndicator, this.$_table, this.$_chartRowPanel, fundRow, fundRow);
			this.$onBenchmarkRowAdded();
			return result;
		},
		$removeBenchmarkRow: function(benchmarkRow) {
			JS.ArgumentHelper.notNull(benchmarkRow, 'benchmarkRow');
			benchmarkRow.destroy();
			this.$onBenchmarkRowRemoved();
		}
	});
	ss.initClass($QuickView_Client_UI_MainView_Grid_$DisposableCollectionWrapper, $asm, {
		dispose: function() {
			JS.Collections.CollectionExtensions.dispose(this.$_list);
		}
	}, null, [ss.IDisposable]);
	$QuickView_Client_UI_MainView_Grid_$DisposableCollectionWrapper.$ctor1.prototype = $QuickView_Client_UI_MainView_Grid_$DisposableCollectionWrapper.prototype;
	ss.initClass($QuickView_Client_UI_MainView_Grid_$HeaderColumn, $asm, {}, $QuickView_Client_UI_MainView_Grid_$Column);
	ss.initClass($QuickView_Client_UI_MainView_Grid_$HeaderRow, $asm, {
		destroyCore: function() {
			$JS_UI_UIElement.prototype.destroyCore.call(this);
			this.$user.destroy();
			for (var $t1 = 0; $t1 < this.$headerCells.length; $t1++) {
				var item = this.$headerCells[$t1];
				item.destroy();
			}
			this.$table.remove_$columnAdded(ss.mkdel(this, this.$table_ColumnAdded));
			this.$table.remove_$columnRemoved(ss.mkdel(this, this.$table_ColumnRemoved));
			this.$table.remove_$columnMoved(ss.mkdel(this, this.$table_ColumnMoved));
			this.get_element().remove();
		},
		$table_ColumnAdded: function(sender, e) {
			// Add a new cell at the specified position
			var column = this.$table.$columns[e.index];
			var cell = $QuickView_Client_UI_MainView_Grid_$HeaderRowDataCell.$create(this, column, this.$_cellPanel);
			var oldCell = ((e.index < this.$table.$columns.length) ? this.$_cellList[e.index] : null);
			ss.insert(this.$_cellList, e.index, cell);
			if (ss.isValue(oldCell)) {
				// Move the cell to the correct position
				cell.get_$element().insertBefore(oldCell.get_$element());
			}
			else {
				// The cell is added at the end of the row
			}
		},
		$table_ColumnRemoved: function(sender, e) {
			var cell = this.$_cellList[e.index];
			cell.destroy();
			ss.remove(this.$_cellList, cell);
		},
		$table_ColumnMoved: function(sender, e) {
			var cell = this.$_cellList[e.oldIndex];
			ss.removeAt(this.$_cellList, e.oldIndex);
			var oldCell = ((e.newIndex < this.$table.$columns.length) ? this.$_cellList[e.newIndex] : null);
			ss.insert(this.$_cellList, e.newIndex, cell);
			if (ss.isValue(oldCell)) {
				// Move the cell to the correct position
				cell.get_$element().insertBefore(oldCell.get_$element());
			}
			else {
				// Move the cell to the end of the row
				cell.get_$element().appendTo(this.$_cellPanel);
			}
		}
	}, $QuickView_Client_UI_MainView_Grid_$Row);
	ss.initClass($QuickView_Client_UI_MainView_Grid_$HeaderRowDataCell, $asm, {
		get_$row: function() {
			return ss.cast(this.$row, $QuickView_Client_UI_MainView_Grid_$HeaderRow);
		},
		destroyCore: function() {
			$QuickView_Client_UI_MainView_Grid_$DataCell.prototype.destroyCore.call(this);
			// Clear the variable after each timeout
			if (ss.isValue(this.$_dataRecencyLabelTaskID)) {
				window.clearTimeout(ss.unbox(this.$_dataRecencyLabelTaskID));
				this.$_dataRecencyLabelTaskID = null;
			}
			if (ss.isValue(this.$_dataProviderEventSubscription)) {
				this.$_dataProviderEventSubscription.dispose();
				this.$_dataProviderEventSubscription = null;
			}
			this.get_$column().$options.remove_viewModeChanged(ss.mkdel(this, this.$dataParametersChanged));
			this.get_$row().$table.$chartRows.remove_$topRowChanged(ss.mkdel(this, this.$dataParametersChanged));
			this.get_$column().remove_$periodChanged(ss.mkdel(this, this.$dataParametersChanged));
			if (this.$_menu.isValueCreated) {
				this.$_menu.value().destroy();
			}
			if (QuickView.Client.Common.AppEnvironment.get_isDesktopDevice()) {
				this.get_$column().$options.remove_viewModeChanged(ss.mkdel(this, this.$chartOptions_ViewModeChanged));
			}
			this.get_$element().unbind('click');
			this.$progressBarStats.destroy();
			this.$_xAxis.destroy();
			this.get_$element().remove();
		},
		$setStatProgressBarValue: function(value) {
			this.$progressBarStats.show();
			// Make sure the progress bar is visible
			this.$progressBarStats.set_$value(value);
		},
		$hideStatProgressBar: function() {
			this.$progressBarStats.hide();
		},
		$createMenu: function() {
			var menu = new QuickView.Client.UI.Menus.ColumnHeaderMenu(this.get_$column().$options, this.get_$row().$table.$options);
			menu.add_addColumn(ss.mkdel(this, this.$menu_AddColumn));
			menu.add_moveColumn(ss.mkdel(this, this.$menu_MoveColumn));
			menu.add_removeColumn(ss.mkdel(this, this.$menu_RemoveColumn));
			menu.add_removeMultipleColumns(ss.mkdel(this, this.$menu_RemoveMultipleColumns));
			menu.add_openRowCorrelation(ss.mkdel(this, this.$menu_OpenRowCorrelation));
			return menu;
		},
		$element_Click: function(e) {
			var menu = this.$_menu.value();
			menu.benchmarksEnabled = false;
			// TODO Remove if not used
			menu.canMoveLeft = this.get_$column().$index > 0;
			menu.canMoveRight = this.get_$column().$index < this.get_$row().$table.$columns.length - 1;
			menu.canRemove = this.get_$row().$table.$columns.length > 1;
			// Add some delay when opening the menu; otherwise on iOS the "click" event on the user cell actually
			// goes to the menu and immediately interacts with its element which could lead to immediately closing
			// the menu in some cases (e.g. if the element is a command).
			window.setTimeout(ss.mkdel(menu, menu.open), 100);
		},
		$menu_AddColumn: function(sender, e) {
			// The new column should have the same view mode as the current one
			this.get_$row().$table.$addColumn(this.get_$column(), e.direction, e.period, this.get_$column().$options.get_viewMode());
		},
		$menu_MoveColumn: function(sender, e) {
			this.get_$row().$table.$moveColumn(this.get_$column(), e.direction);
		},
		$menu_RemoveColumn: function(sender, e) {
			this.get_$row().$table.$removeColumn(this.get_$column());
		},
		$menu_RemoveMultipleColumns: function(sender, e) {
			var columnList = this.get_$row().$table.$columns;
			var index = ss.indexOf(columnList, this.get_$column());
			if (index < 0) {
				// Should not be possible
				return;
			}
			if (e.direction === 0) {
				// Remove all columns that are before the current column
				while (index-- > 0) {
					this.get_$row().$table.$removeColumn(columnList[0]);
				}
			}
			else {
				// Remove all columns that follow the current column
				while (index + 1 < columnList.length) {
					this.get_$row().$table.$removeColumn(columnList[columnList.length - 1]);
				}
			}
		},
		$menu_OpenRowCorrelation: function(sender, e) {
			this.get_$row().$table.$openRowCorrelation(this.get_$column());
		},
		$updateChartModeButton: function() {
			JS.UI.jQueryExtensions.removeClasses$1(this.$buttonViewMode, ['cumulative', 'difference', 'stats']);
			var cssClass;
			switch (this.get_$column().$options.get_viewMode()) {
				case 0: {
					cssClass = 'cumulative';
					break;
				}
				case 1: {
					cssClass = 'difference';
					break;
				}
				case 2: {
					cssClass = 'stats';
					break;
				}
				default: {
					return;
				}
			}
			this.$buttonViewMode.addClass(cssClass);
		},
		$chartOptions_ViewModeChanged: function(sender, e) {
			this.$updateChartModeButton();
		},
		$buttonChartMode_Click: function(e) {
			// Stop propagation to prevent the menu from opening
			e.stopPropagation();
			// Toggle chart data type
			var viewMode = this.get_$column().$options.get_viewMode();
			if (viewMode === 0) {
				viewMode = 1;
			}
			else if (viewMode === 1) {
				if (this.get_$column().$period.get_supportsStats()) {
					viewMode = 2;
				}
				else {
					viewMode = 0;
				}
			}
			else if (viewMode === 2) {
				viewMode = 0;
			}
			else {
				return;
			}
			this.get_$column().$options.set_viewMode(viewMode);
		},
		$dataParametersChanged: function(sender, e) {
			this.$updateHeaderValues();
		},
		$dataProvider_IndicatorDataChanged: function(sender, e) {
			this.$updateHeaderValues();
		},
		$updateTooltips: function() {
			var topRow = this.get_$row().$table.$chartRows.get_$topRow();
			if (ss.isValue(topRow)) {
			}
			else {
				// Remove the tooltip
				this.get_$element().tooltip(null);
			}
		},
		$onRefresh: function() {
			this.$updateHeaderValues();
		},
		$updateHeaderValues: function() {
			var $state = 0, topRow, supported, indicator, unit, headerValues, dataRecency, $t1, primaryPeriodValue, $t2, isOutdated, elementCssClassName, headerValueInfo, subHeaderValueInfo, periodTypeName, headerValueText, periodTypeName1, subPeriodTypeName, headerValueText1, subHeaderValueText, periodValue;
			var $sm = ss.mkdel(this, function() {
				$sm1:
				for (;;) {
					switch ($state) {
						case 0: {
							$state = -1;
							// Remove previous subscription
							if (ss.isValue(this.$_dataProviderEventSubscription)) {
								this.$_dataProviderEventSubscription.dispose();
								this.$_dataProviderEventSubscription = null;
							}
							topRow = this.get_$row().$table.$chartRows.get_$topRow();
							supported = ss.isValue(topRow) && QuickView.Client.UI.Common.Data.DataDescription$ChartPeriods.isSupported(topRow.get_$indicator(), this.get_$column().$period.def);
							indicator = (ss.isNullOrUndefined(topRow) ? null : topRow.get_$indicator());
							if (ss.isValue(indicator)) {
								if (QuickView.Client.Models.Charts.Indicator.supportsUnit(indicator, 4)) {
									unit = 4;
								}
								else if (QuickView.Client.Models.Charts.Indicator.supportsUnit(indicator, 3)) {
									unit = 3;
								}
								else {
									unit = 0;
									supported = false;
								}
							}
							else {
								unit = 0;
								supported = false;
							}
							if (supported) {
								$t1 = $QuickView_Client_UI_MainView_Grid_$HeaderRowDataCell.$getHeaderValue(indicator, this.get_$column().$primaryPeriod, unit);
								$state = 2;
								$t1.continueWith($sm);
								return;
							}
							else {
								headerValues = null;
								dataRecency = null;
								$state = 1;
								continue $sm1;
							}
						}
						case 2: {
							$state = -1;
							primaryPeriodValue = $t1.getAwaitedResult();
							$t2 = $QuickView_Client_UI_MainView_Grid_$HeaderRowDataCell.$getHeaderValue(indicator, this.get_$column().$period, unit);
							$state = 3;
							$t2.continueWith($sm);
							return;
						}
						case 1: {
							$state = -1;
							isOutdated = false;
							elementCssClassName = (isOutdated ? 'outdated' : null);
							// Show info about how recent the data is
							this.$_dataRecency = dataRecency;
							this.$updateDataRecencyLabel();
							if (ss.isValue(headerValues)) {
								headerValueInfo = $QuickView_Client_UI_MainView_Grid_$HeaderRowDataCell.$getHeaderValueTextAndCssClass(headerValues.P, indicator);
								subHeaderValueInfo = $QuickView_Client_UI_MainView_Grid_$HeaderRowDataCell.$getHeaderValueTextAndCssClass(headerValues.S, indicator);
							}
							else {
								headerValueInfo = subHeaderValueInfo = $QuickView_$Client_UI_MainView_Grid_$HeaderRowDataCell$TextAndCssClass.$ctor1('N/A', null);
							}
							JS.UI.jQueryExtensions.removeClasses$1(this.get_$element(), $QuickView_Client_UI_MainView_Grid_$HeaderRowDataCell.$elementCssClassList);
							if (false === ss.isNullOrEmptyString(elementCssClassName)) {
								this.get_$element().addClass(elementCssClassName);
							}
							JS.UI.jQueryExtensions.removeClasses$1(this.get_$element(), $QuickView_Client_UI_MainView_Grid_$HeaderRowDataCell.$performanceCssClassList);
							if (false === ss.isNullOrEmptyString(subHeaderValueInfo.cssClass)) {
								this.get_$element().addClass(subHeaderValueInfo.cssClass);
							}
							JS.UI.jQueryExtensions.removeClasses$1(this.$labelSubHeaderValue, $QuickView_Client_UI_MainView_Grid_$HeaderRowDataCell.$performanceCssClassList);
							if (false === ss.isNullOrEmptyString(headerValueInfo.cssClass) && !ss.referenceEquals(subHeaderValueInfo.cssClass, headerValueInfo.cssClass)) {
								this.$labelSubHeaderValue.addClass(headerValueInfo.cssClass);
							}
							// Header and sub-header
							if (this.get_$column().$period.def.I === 0) {
								periodTypeName = this.get_$column().$period.get_name();
								headerValueText = periodTypeName + ': ' + headerValueInfo.text;
								this.$labelHeaderValue.text(headerValueText);
								// The header value is the same as the sub-header value so hide the label
								this.$labelSubHeaderValue.text('');
								// Hide the label
								this.get_$element().addClass('no_sub_title');
							}
							else {
								periodTypeName1 = QuickView.Client.Models.Charts.ChartPeriodDef.getPrimary(this.get_$column().$period.def).N;
								subPeriodTypeName = this.get_$column().$period.get_name();
								// Mantis 0006685
								// Display the sub-header at the top with large font
								// and the header at the bottom (according to Mantis task)
								// Brackets are displayed around the value on the second line (with the smaller font) 
								headerValueText1 = periodTypeName1 + ' (' + headerValueInfo.text + ')';
								// The span is required to apply the background color to the text only instead of to the entire div
								this.$labelSubHeaderValue.html(ss.formatString('<span>{0}</span>', headerValueText1));
								subHeaderValueText = subPeriodTypeName + ': ' + subHeaderValueInfo.text;
								this.$labelHeaderValue.text(subHeaderValueText);
								// Ensure the label is visible
								this.get_$element().removeClass('no_sub_title');
							}
							$state = -1;
							break $sm1;
						}
						case 3: {
							$state = -1;
							periodValue = $t2.getAwaitedResult();
							headerValues = QuickView.Client.Models.Charts.ColumnHeaderValueList.$ctor((ss.isNullOrUndefined(primaryPeriodValue) ? null : QuickView.Client.Models.Charts.ColumnHeaderValue.$ctor(ss.unbox(primaryPeriodValue), unit)), (ss.isNullOrUndefined(periodValue) ? null : QuickView.Client.Models.Charts.ColumnHeaderValue.$ctor(ss.unbox(periodValue), unit)));
							// Subscribe for changes
							this.$_dataProviderEventSubscription = $QuickView_Client_UI_MainView_$LocalServices.get_$dataProvider().subscribeDataChanged(indicator, this.get_$column().$period.metaResolution, ss.mkdel(this, this.$dataProvider_IndicatorDataChanged));
							if (this.get_$column().$period.metaResolution === 2 && indicator.referencesIntradayTimeSeries) {
								// Subscribe for intraday changes as well
								this.$_dataProviderEventSubscription = new $QuickView_Client_UI_MainView_Grid_$DisposableCollectionWrapper.$ctor1([this.$_dataProviderEventSubscription, $QuickView_Client_UI_MainView_$LocalServices.get_$dataProvider().subscribeDataChanged(indicator, 1, ss.mkdel(this, this.$dataProvider_IndicatorDataChanged))]);
							}
							dataRecency = $QuickView_Client_UI_MainView_$LocalServices.get_$dataProvider().getChartDataRecency(indicator);
							$state = 1;
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
		$updateDataRecencyLabel: function() {
			// Clear the variable after each timeout
			if (ss.isValue(this.$_dataRecencyLabelTaskID)) {
				window.clearTimeout(ss.unbox(this.$_dataRecencyLabelTaskID));
				this.$_dataRecencyLabelTaskID = null;
			}
			var dataRecency = this.$_dataRecency;
			var now = JS.DateTimeExt.get_utcNow();
			if (ss.isNullOrUndefined(dataRecency) || JS.DateTimeExt.op_Equality$1(dataRecency.lastDataPointTime, null)) {
				this.$labelDataRecency.empty();
			}
			else {
				var difference = JS.DateTimeExt.op_Subtraction(now, ss.unbox(dataRecency.lastDataPointTime));
				this.$labelDataRecency.text(QuickView.Client.UI.Common.Format$Time.age$1(difference));
				// Setup the next update of the label depending on how much time has already passed
				var timeout;
				if (difference.ticks / 36000000000 >= 1) {
					// Update once per hour
					timeout = 3600000;
				}
				else if (difference.ticks / 600000000 >= 1) {
					// Update once per minute
					timeout = 60000;
				}
				else {
					// Update once per 5 seconds
					timeout = 5000;
				}
				this.$_dataRecencyLabelTaskID = window.setTimeout(ss.mkdel(this, this.$updateDataRecencyLabel), timeout);
			}
		}
	}, $QuickView_Client_UI_MainView_Grid_$DataCell);
	ss.initClass($QuickView_Client_UI_MainView_Grid_$HeaderRowDataCellXAxis, $asm, {
		destroyCore: function() {
			$JS_UI_UIElement.prototype.destroyCore.call(this);
			if (ss.isValue(this.$_updateIntervalID)) {
				window.clearInterval(ss.unbox(this.$_updateIntervalID));
				this.$_updateIntervalID = null;
			}
			this.$_parent.get_$row().$table.$chartRows.remove_$topRowChanged(ss.mkdel(this, this.$updateVisibilityEventHandler));
			this.$_parent.get_$column().remove_$periodChanged(ss.mkdel(this, this.$column_PeriodChanged));
		},
		$updateVisibilityEventHandler: function(sender, e) {
			this.$updateVisibility();
		},
		$updateVisibility: function() {
			// There must be at least one row visible
			// The x-axis is hidden when the application is minimized
			// and when a full-screen chart is displayed. However, this is handled in CSS.
			var visible = ss.isValue(this.$_parent.get_$row().$table.$chartRows.get_$topRow());
			if (visible) {
				this.$_cellElement.removeClass('no_x_axis');
			}
			else {
				this.$_cellElement.addClass('no_x_axis');
			}
		},
		$column_PeriodChanged: function(sender, e) {
			this.$update();
		},
		$update: function() {
			var period = this.$_parent.get_$column().$period;
			var resolution = ((this.$_parent.get_$column().$options.get_viewMode() === 0) ? period.lineChartResolution.C : period.barChartResolution.C);
			var periodDef = period.def;
			var periodFrom = period.displayInterval.S;
			var periodTo = period.displayInterval.E;
			// TODO Use server-side time if available or appropriate
			var now = JS.DateTimeExt.get_utcNow();
			if (JS.DateTimeExt.op_GreaterThan(periodTo, now)) {
				periodTo = now;
			}
			var labelList = [];
			var title = null;
			if (resolution === 5) {
				// Skip weekends
				var newPeriodFrom = periodFrom;
				while (QuickView.Client.Algorithms.TimeExtensions.isHoliday(newPeriodFrom)) {
					newPeriodFrom = newPeriodFrom.addDays(1);
				}
				var newPeriodTo = periodTo;
				while (QuickView.Client.Algorithms.TimeExtensions.isHoliday(newPeriodTo)) {
					newPeriodTo = newPeriodTo.addDays(-1);
				}
				if (JS.DateTimeExt.op_LessThan(newPeriodFrom, newPeriodTo)) {
					periodFrom = newPeriodFrom;
					periodTo = newPeriodTo;
				}
			}
			var durationYears = JS.DateTimeExt.op_Subtraction(periodTo, periodFrom).ticks / 864000000000 / 365;
			var useYears = (resolution === 5 || resolution === 6 || resolution === 7) && durationYears >= 2;
			if (periodDef.T === 3 && periodDef.I === 0 && periodTo.get_day() <= 9 && periodTo.get_day() > 1) {
				for (var date = periodFrom; JS.DateTimeExt.op_LessThanOrEqual(date, periodTo); date = date.addDays(1)) {
					if (QuickView.Client.Algorithms.TimeExtensions.isWorkingDay(date)) {
						labelList.push(new $QuickView_$Client_UI_MainView_Grid_$HeaderRowDataCellXAxis$XAxisLabel(date.get_day().toString()));
					}
				}
				title = periodFrom.toUniversalTime().format('MMM');
			}
			else if (resolution < 5) {
				var useLocalTime = periodDef.T === 2;
				var formatMethod;
				if (useLocalTime) {
					// Inline code methods cannot be assigned to delegates
					formatMethod = function(time, format) {
						return time.toLocalTime().format(format);
					};
				}
				else {
					// Inline code methods cannot be assigned to delegates
					formatMethod = function(time1, format1) {
						return time1.toUniversalTime().format(format1);
					};
				}
				var difference = periodTo.subtract(periodFrom);
				if (difference.ticks / 36000000000 > 24) {
					// Do NOT round the period to a "day" since the beginning of the period
					// may not be aligned to 12am UTC. Usually it is 9pm UTC - the end of the trading day
					var workingDaysCount = $QuickView_Client_UI_MainView_Grid_$HeaderRowDataCellXAxis.$calculateWorkingDaysCount$1(periodFrom, periodTo, false, true);
					labelList.push($QuickView_$Client_UI_MainView_Grid_$HeaderRowDataCellXAxis$XAxisLabel.$op_Implicit(formatMethod(periodFrom, 'MMM d')));
					if (workingDaysCount > 0) {
						labelList.push(new $QuickView_$Client_UI_MainView_Grid_$HeaderRowDataCellXAxis$XAxisLabel.$ctor1(ss.formatString('{0}d', workingDaysCount), true));
					}
					labelList.push($QuickView_$Client_UI_MainView_Grid_$HeaderRowDataCellXAxis$XAxisLabel.$op_Implicit(formatMethod(periodTo, 'MMM d')));
				}
				else {
					// Display the hour at the beginning, middle and the end of the period
					labelList.push($QuickView_$Client_UI_MainView_Grid_$HeaderRowDataCellXAxis$XAxisLabel.$op_Implicit(formatMethod(periodFrom, 'htt')));
					var hourCount = ss.Int32.trunc(difference.ticks / 36000000000);
					// 2013-09-21 Dal
					// E-mail: 
					// In TDY date header … you have e.g. 2am      5am       8am .
					// instead of the middle value showing time .. show duration between the start and end times .. e.g. 
					// 2am       6h          8am
					labelList.push(new $QuickView_$Client_UI_MainView_Grid_$HeaderRowDataCellXAxis$XAxisLabel.$ctor1(ss.formatString('{0}h', hourCount), true));
					labelList.push($QuickView_$Client_UI_MainView_Grid_$HeaderRowDataCellXAxis$XAxisLabel.$op_Implicit(formatMethod(periodTo, 'htt')));
				}
			}
			else if ((resolution === 5 || resolution === 6) && false === useYears) {
				if (JS.DateTimeExt.op_Equality(periodFrom.get_date(), periodTo.get_date())) {
					// Display a single day
					labelList.push($QuickView_$Client_UI_MainView_Grid_$HeaderRowDataCellXAxis$XAxisLabel.$op_Implicit(periodFrom.toUniversalTime().format('MMM d')));
				}
				else {
					var workingDaysCount1 = $QuickView_Client_UI_MainView_Grid_$HeaderRowDataCellXAxis.$calculateWorkingDaysCount(periodFrom, periodTo);
					labelList.push($QuickView_$Client_UI_MainView_Grid_$HeaderRowDataCellXAxis$XAxisLabel.$op_Implicit(periodFrom.toUniversalTime().format('MMM d')));
					if (workingDaysCount1 > 0) {
						labelList.push(new $QuickView_$Client_UI_MainView_Grid_$HeaderRowDataCellXAxis$XAxisLabel.$ctor1(ss.formatString('{0}d', workingDaysCount1), true));
					}
					labelList.push($QuickView_$Client_UI_MainView_Grid_$HeaderRowDataCellXAxis$XAxisLabel.$op_Implicit(periodTo.toUniversalTime().format('MMM d')));
				}
			}
			else if (resolution === 7 && false === useYears) {
				// Calculate the number of the months
				var monthCount = 1 + (periodTo.get_month() - periodFrom.get_month()) + 12 * (periodTo.get_year() - periodFrom.get_year());
				if (monthCount > 12) {
					// Display start and end date instead of month names
					// This can happen for low res YTD-2 that use month resolution
					// and for BTD
					var workingDaysCount2 = $QuickView_Client_UI_MainView_Grid_$HeaderRowDataCellXAxis.$calculateWorkingDaysCount(periodFrom, periodTo);
					labelList.push($QuickView_$Client_UI_MainView_Grid_$HeaderRowDataCellXAxis$XAxisLabel.$op_Implicit(periodFrom.toUniversalTime().format('MMM d')));
					if (workingDaysCount2 > 0) {
						labelList.push(new $QuickView_$Client_UI_MainView_Grid_$HeaderRowDataCellXAxis$XAxisLabel.$ctor1(ss.formatString('{0}d', workingDaysCount2), true));
					}
					labelList.push($QuickView_$Client_UI_MainView_Grid_$HeaderRowDataCellXAxis$XAxisLabel.$op_Implicit(periodTo.toUniversalTime().format('MMM d')));
				}
				else {
					// Indicates if only the first letter of each month should be displayed
					var firstLetterOnly = monthCount > 5;
					for (var i = 0; i < monthCount; i++) {
						var monthIndex = (periodFrom.get_month() - 1 + i) % 12;
						var monthName = $QuickView_Client_UI_MainView_Grid_$HeaderRowDataCellXAxis.$shortMonthNameList[monthIndex];
						if (firstLetterOnly) {
							labelList.push($QuickView_$Client_UI_MainView_Grid_$HeaderRowDataCellXAxis$XAxisLabel.$op_Implicit(monthName.charAt(0)));
						}
						else {
							labelList.push($QuickView_$Client_UI_MainView_Grid_$HeaderRowDataCellXAxis$XAxisLabel.$op_Implicit(monthName));
						}
					}
				}
			}
			else if (resolution === 9 || useYears) {
				if (periodTo.get_year() - periodFrom.get_year() >= 5) {
					// Display the first and the last year
					var yearCount = periodTo.get_year() - periodFrom.get_year() + 1;
					labelList.push($QuickView_$Client_UI_MainView_Grid_$HeaderRowDataCellXAxis$XAxisLabel.$op_Implicit(periodFrom.get_year().toString()));
					// Use the UTC yer since it can be different from the local one
					labelList.push(new $QuickView_$Client_UI_MainView_Grid_$HeaderRowDataCellXAxis$XAxisLabel.$ctor1(ss.formatString('{0}y', yearCount), true));
					labelList.push($QuickView_$Client_UI_MainView_Grid_$HeaderRowDataCellXAxis$XAxisLabel.$op_Implicit(periodTo.get_year().toString()));
					// Use the UTC yer since it can be different from the local one
				}
				else {
					// Extract the years from the data
					// Fully display the first year
					labelList.push($QuickView_$Client_UI_MainView_Grid_$HeaderRowDataCellXAxis$XAxisLabel.$op_Implicit(periodFrom.get_year().toString()));
					// Use the UTC yer since it can be different from the local one
					// Abbreviate the rest of the years
					for (var i1 = periodFrom.get_year() + 1; i1 <= periodTo.get_year(); i1++) {
						var value = i1 % 100;
						if (value < 10) {
							labelList.push($QuickView_$Client_UI_MainView_Grid_$HeaderRowDataCellXAxis$XAxisLabel.$op_Implicit("'0" + value.toString()));
						}
						else {
							labelList.push($QuickView_$Client_UI_MainView_Grid_$HeaderRowDataCellXAxis$XAxisLabel.$op_Implicit("'" + value.toString()));
						}
					}
				}
			}
			else {
				// The resolution is not supported
			}
			this.$_itemListElement.html('');
			if (ss.isNullOrEmptyString(title)) {
				this.$_titleElement.html('');
			}
			else {
				this.$_titleElement.html(title);
			}
			if (labelList.length <= 0) {
				return;
			}
			// Create elements
			// Using fractional numbers results in a better distribution of space on the screen
			var itemWidth = (100 / labelList.length).toFixed(2) + '%';
			for (var $t1 = 0; $t1 < labelList.length; $t1++) {
				var item = labelList[$t1];
				var itemElement = $("<div class='item'></div>").appendTo(this.$_itemListElement);
				itemElement.text(item.$label);
				itemElement.css('width', itemWidth);
				if (item.$isCount) {
					itemElement.addClass('duration');
				}
			}
		}
	}, $JS_UI_FrameworkElement);
	ss.initClass($QuickView_Client_UI_MainView_Grid_$HeaderRowUserCell, $asm, {
		get_$row: function() {
			return ss.cast(this.$row, $QuickView_Client_UI_MainView_Grid_$HeaderRow);
		},
		$updates_BeginOrEndTimeSeriesUpdateProcess: function (sender, e) {
			this.$labelChartDataUpdateProgress.empty();
			this.$labelChartDataUpdateProgress.removeClass('error');
			JS.UI.TooltipExtensions.removeTooltip(this.$labelChartDataUpdateProgress);
		},
		$updates_BeginTimeSeriesUpdate: function (sender, e) {
			var priorityName;
			switch (e.P) {
				case 1: {
					priorityName = 'Headers';
					break;
				}
				case 2: {
					priorityName = 'Rows';
					break;
				}
				case 3: {
					priorityName = 'Hidden Rows';
					break;
				}
				default: {
					priorityName = e.P.toString();
					break;
				}
			}
			this.$labelChartDataUpdateProgress.text(ss.formatString('Upd {0} of {1} : {2}', e.I + 1, e.T, priorityName));
			this.$labelChartDataUpdateProgress.removeClass('error');
			JS.UI.TooltipExtensions.removeTooltip(this.$labelChartDataUpdateProgress);
		},
		$updates_EndTimeSeriesUpdateError: function(sender, e) {
			this.$labelChartDataUpdateProgress.addClass('error');
			JS.UI.TooltipExtensions.setTextTooltip(this.$labelChartDataUpdateProgress, e.error.get_message(), 'Update error', 0, null);
		},
		$versionChecker_ConnectivityStatusChanged: function(sender, e) {
			if (QuickView.Client.Common.AppContext.application.get_connectivityStatus() === 1) {
				this.$panelConnection.removeClass('downloading').empty();
				this.$panelConnection.addClass('disconnected');
			}
			else {
				this.$panelConnection.removeClass('disconnected');
			}
		},
		$versionChecker_UpdateProgress: function(sender, e) {
			var percent = Math.floor(QuickView.Client.Common.AppContext.application.get_downloadProgress() * 100);
			this.$panelConnection.removeClass('disconnected');
			this.$panelConnection.addClass('downloading');
			var labelText = this.$panelConnection.children('.text');
			if (labelText.length === 0) {
				labelText = $("<div class='" + ('text' || '') + "'></div>").appendTo(this.$panelConnection);
			}
			labelText.text(percent.toString() + '%');
		},
		$versionChecker_DownloadComplete: function(sender, e) {
			this.$panelConnection.removeClass('downloading');
			this.$panelConnection.empty();
		},
		destroyCore: function() {
			$QuickView_Client_UI_MainView_Grid_$Cell.prototype.destroyCore.call(this);
			this.get_$row().$table.$chartRows.remove_$topRowChanged(ss.mkdel(this, this.$table_TopRowChanged));
			QuickView.Client.Common.AppContext.application.remove_downloadProgressChanged(ss.mkdel(this, this.$versionChecker_UpdateProgress));
			QuickView.Client.Common.AppContext.application.remove_downloadComplete(ss.mkdel(this, this.$versionChecker_DownloadComplete));
			QuickView.Client.Common.AppContext.application.remove_connectivityStatusChanged(ss.mkdel(this, this.$versionChecker_ConnectivityStatusChanged));
			this.get_element().remove();
		},
		$buttonMinimize_Click: function(e) {
			// Prevent the user cell from handling the event
			e.stopPropagation();
			if (false === QuickView.Client.UI.Common.UIElements.get_application().isMinimized && this.get_$row().$table.$chartRows.$rows.length === 0) {
				// There is no point to minimize the application if there are no rows
				return;
			}
			QuickView.Client.UI.Common.UIElements.get_application().toggleMinimize();
		},
		$updateDownloadedDataSize: function() {
			// TODO Display the total size of downloaded data since the beginning of the session
		},
		$table_TopRowChanged: function(sender, e) {
			this.$updateControls();
		},
		$element_Click: function(e) {
			this.get_$row().$table.$openMainMenu();
		},
		$updateControls: function() {
			var topRow = this.get_$row().$table.$chartRows.get_$topRow();
			if (ss.isNullOrUndefined(topRow)) {
				this.$labelDataSite.html('');
				this.$labelDataFund.html('');
				if (QuickView.Client.Common.AppEnvironment.get_isDesktopDevice()) {
					JS.UI.TooltipExtensions.removeTooltip(this.$labelDataFund);
				}
			}
			else {
				this.$labelDataSite.html(topRow.get_$indicator().menuInfo.A);
				var $t2 = this.$labelDataFund;
				var $t1 = topRow.get_$indicator().S;
				if (ss.isNullOrUndefined($t1)) {
					$t1 = topRow.get_$indicator().N;
				}
				$t2.html(ss.formatString("<span class='text'>{0}</span>", $t1));
				if (QuickView.Client.Common.AppEnvironment.get_isDesktopDevice()) {
					var tooltip = $QuickView_Client_UI_MainView_Grid_$ChartRowHeaderCell.$formatSubCategoryTypeTooltip(topRow);
					JS.UI.TooltipExtensions.setHtmlTooltip$1(this.$labelDataFund, tooltip, null, 0, 'row_header_tooltip');
				}
			}
		}
	}, $QuickView_Client_UI_MainView_Grid_$Cell);
	ss.initClass($QuickView_Client_UI_MainView_Grid_$IndicatorOptionsProvider, $asm, {
		$get: function(indicator) {
			JS.ArgumentHelper.notNull(indicator, 'indicator');
			var result = this.$_itemDict[indicator.I];
			if (ss.isNullOrUndefined(result)) {
				this.$_itemDict[indicator.I] = result = new QuickView.Client.UI.Common.Grid.GridIndicatorOptions.$ctor1(this.$_table.$settings.getIndicatorSettings(indicator) || QuickView.Client.UI.Common.Grid.GridIndicatorOptions$Settings.$ctor());
				result.add_optionChanged(ss.mkdel(this, function(sender, e) {
					// Save the options
					this.$_table.$settings.setIndicatorSettings(indicator, ss.cast(sender, QuickView.Client.UI.Common.Grid.GridIndicatorOptions).getSettings());
				}));
			}
			return result;
		}
	});
	ss.initClass($QuickView_Client_UI_MainView_Grid_$ProgressBar, $asm, {
		get_$cssClass: function() {
			return this.$_cssClass;
		},
		set_$cssClass: function(value) {
			if (false === ss.isNullOrEmptyString(this.$_cssClass)) {
				this.get_element().removeClass(this.$_cssClass);
			}
			this.$_cssClass = value;
			if (false === ss.isNullOrEmptyString(this.$_cssClass)) {
				this.get_element().addClass(this.$_cssClass);
			}
		},
		get_$value: function() {
			return this.$_value;
		},
		set_$value: function(value) {
			if (value < 0 || value > 1) {
				throw new ss.ArgumentOutOfRangeException('value', 'Must be between 0 and 1.', null, value);
			}
			this.$_value = value;
			this.$updateBar();
		},
		destroyCore: function() {
			$JS_UI_UIElement.prototype.destroyCore.call(this);
			this.get_element().remove();
		},
		$updateBar: function() {
			var width = Math.floor(this.$_value * 100).toString() + '%';
			this.$_bar.width(width);
		}
	}, $JS_UI_FrameworkElement);
	ss.initClass($QuickView_Client_UI_MainView_Grid_$Table, $asm, {
		add_$columnAdded: function(value) {
			this.$2$ColumnAddedField = ss.delegateCombine(this.$2$ColumnAddedField, value);
		},
		remove_$columnAdded: function(value) {
			this.$2$ColumnAddedField = ss.delegateRemove(this.$2$ColumnAddedField, value);
		},
		$onColumnAdded: function(e) {
			var temp = this.$2$ColumnAddedField;
			if (!ss.staticEquals(temp, null)) {
				temp(this, e);
			}
		},
		add_$columnRemoved: function(value) {
			this.$2$ColumnRemovedField = ss.delegateCombine(this.$2$ColumnRemovedField, value);
		},
		remove_$columnRemoved: function(value) {
			this.$2$ColumnRemovedField = ss.delegateRemove(this.$2$ColumnRemovedField, value);
		},
		$onColumnRemoved: function(e) {
			var temp = this.$2$ColumnRemovedField;
			if (!ss.staticEquals(temp, null)) {
				temp(this, e);
			}
		},
		add_$columnMoved: function(value) {
			this.$2$ColumnMovedField = ss.delegateCombine(this.$2$ColumnMovedField, value);
		},
		remove_$columnMoved: function(value) {
			this.$2$ColumnMovedField = ss.delegateRemove(this.$2$ColumnMovedField, value);
		},
		$onColumnMoved: function(e) {
			var temp = this.$2$ColumnMovedField;
			if (!ss.staticEquals(temp, null)) {
				temp(this, e);
			}
		},
		$initColumns: function() {
			// The column is always visible
			this.$headerColumn = new $QuickView_Client_UI_MainView_Grid_$HeaderColumn();
			// TODO Use a header column
			this.$headerColumn.$show();
			var columnSettingsList = this.$settings.get_columns();
			if (ss.isNullOrUndefined(columnSettingsList) || ss.count(columnSettingsList) === 0) {
				// Add standard columns to the list
				var settingsList = [];
				for (var $t1 = 0; $t1 < QuickView.Client.UI.Common.Data.DataDescription$ChartPeriods.allTypes.length; $t1++) {
					var item = QuickView.Client.UI.Common.Data.DataDescription$ChartPeriods.allTypes[$t1];
					var $t2 = new QuickView.Client.UI.Common.Grid.GridColumnOptions();
					$t2.set_period(QuickView.Client.Models.Charts.ChartPeriodDef.$ctor(item, 0));
					settingsList.push($t2.getSettings());
				}
				columnSettingsList = settingsList;
			}
			var columnList = this.$_columnList = [];
			var columnIndex = 0;
			var $t3 = ss.getEnumerator(columnSettingsList);
			try {
				while ($t3.moveNext()) {
					var item1 = $t3.current();
					var column = new $QuickView_Client_UI_MainView_Grid_$ChartColumn(columnIndex++, new QuickView.Client.UI.Common.Grid.GridColumnOptions.$ctor1(item1));
					// Initially all columns are visible
					column.$show();
					// Must be handled on both desktop and mobile in order to persist the changes in the periods
					column.$options.add_viewModeChanged(ss.mkdel(this, this.$column_ViewModeChanged));
					column.$options.add_optionChanged(ss.mkdel(this, this.$column_OptionChanged));
					columnList.push(column);
				}
			}
			finally {
				$t3.dispose();
			}
			this.$columns = columnList;
		},
		$column_ViewModeChanged: function(sender, e) {
			// Update the sort order if necessary
			this.$chartRows.$onColumnViewModeChanged();
		},
		$column_OptionChanged: function(sender, e) {
			if (ss.isNullOrUndefined(this.$_columnChangedExecutor)) {
				this.$_columnChangedExecutor = new JS.Threading.PostponeExecutor(ss.mkdel(this, this.$columnChangedExecutor_Execute), 1000);
			}
			this.$_columnChangedExecutor.execute();
		},
		$columnChangedExecutor_Execute: function() {
			this.$persistColumns();
		},
		$persistColumns: function() {
			this.$settings.set_columns(Enumerable.from(this.$columns).select(function(x) {
				return x.$options.getSettings();
			}).toArray());
		},
		$onColumnsChanged: function() {
			// Updates the indexes of the columns.
			for (var k = 0; k < this.$columns.length; k++) {
				this.$columns[k].$index = k;
			}
			// Update the layout
			this.$updateLayoutAsync();
			// Save configuration
			this.$persistColumns();
		},
		$addColumn: function(anchor, direction, period, viewMode) {
			JS.ArgumentHelper.notNull(anchor, 'anchor');
			JS.ArgumentHelper.notNull(period, 'period');
			var index = ss.indexOf(this.$_columnList, anchor);
			if (index < 0) {
				throw new ss.ArgumentException('The specified column was not found.', 'anchor');
			}
			var $t1 = new QuickView.Client.UI.Common.Grid.GridColumnOptions();
			$t1.set_period(period);
			$t1.set_viewMode(viewMode);
			var newColumn = new $QuickView_Client_UI_MainView_Grid_$ChartColumn(0, $t1);
			// Initially all columns are visible
			newColumn.$show();
			// Must be handled on both desktop and mobile in order to persist the changes in the periods
			newColumn.$options.add_viewModeChanged(ss.mkdel(this, this.$column_ViewModeChanged));
			newColumn.$options.add_optionChanged(ss.mkdel(this, this.$column_OptionChanged));
			if (direction === 1) {
				index++;
			}
			ss.insert(this.$_columnList, index, newColumn);
			this.$onColumnAdded(new $QuickView_Client_UI_MainView_Grid_ColumnIndexEventArgs(index));
			this.$onColumnsChanged();
		},
		$moveColumn: function(column, direction) {
			JS.ArgumentHelper.notNull(column, 'column');
			var index = ss.indexOf(this.$_columnList, column);
			if (index < 0) {
				throw new ss.ArgumentException('The specified column was not found.', 'column');
			}
			if (index === 0 && direction === 0 || index === this.$_columnList.length - 1 && direction === 1) {
				return;
			}
			ss.removeAt(this.$_columnList, index);
			var oldIndex = index;
			if (direction === 0) {
				// Move one position to the left
				index--;
			}
			else {
				// Move one position to the right
				index++;
			}
			ss.insert(this.$_columnList, index, column);
			this.$onColumnMoved(new $QuickView_Client_UI_MainView_Grid_ColumnMovedEventArgs(oldIndex, index));
			this.$onColumnsChanged();
		},
		$removeColumn: function(column) {
			JS.ArgumentHelper.notNull(column, 'column');
			var index = ss.indexOf(this.$_columnList, column);
			if (index < 0) {
				throw new ss.ArgumentException('The specified column was not found.', 'column');
			}
			ss.removeAt(this.$_columnList, index);
			this.$onColumnRemoved(new $QuickView_Client_UI_MainView_Grid_ColumnIndexEventArgs(index));
			this.$onColumnsChanged();
		},
		add_$visibilityChanged: function(value) {
			this.$2$VisibilityChangedField = ss.delegateCombine(this.$2$VisibilityChangedField, value);
		},
		remove_$visibilityChanged: function(value) {
			this.$2$VisibilityChangedField = ss.delegateRemove(this.$2$VisibilityChangedField, value);
		},
		$onVisibilityChanged: function(e) {
			var temp = this.$2$VisibilityChangedField;
			if (!ss.staticEquals(temp, null)) {
				temp(this, e);
			}
		},
		get_$chartRowManager_TableLayout: function() {
			return this.$_tableLayout;
		},
		$updateVerticalAxis: function() {
			if ((this.$options.get_displayOptions() & 4) !== 0) {
				this.get_element().removeClass('no_y_axis');
			}
			else {
				this.get_element().addClass('no_y_axis');
			}
		},
		$gridOptions_DisplayOptionsChanged: function(sender, e) {
			this.$updateVerticalAxis();
		},
		$gridOptions_OptionChanged: function(sender, e) {
			this.$settings.set_options(this.$options.getSettings());
		},
		$application_Minimized: function(sender, e) {
			// Update the layout of the table
			this.$updateLayoutAsync();
		},
		$application_Restored: function(sender, e) {
			// Update the layout of the table
			this.$updateLayoutAsync();
		},
		$mainMenu_GoToTop: function(sender, e) {
			QuickView.Client.UI.Common.UIElements.get_application().element.scrollTop(0);
			this.$updateLayoutAsync();
		},
		$mainMenu_GoToBottom: function(sender, e) {
			QuickView.Client.UI.Common.UIElements.get_application().element.scrollTop(10000);
			this.$updateLayoutAsync();
		},
		$createMainMenu: function() {
			// Main menu
			var mainMenu = new QuickView.Client.UI.Menus.MainMenu(this.$options, QuickView.Client.Models.Charts.RuntimeChartMetadata.getMenu(QuickView.Client.Common.AppContext.metadata));
			// Mini-chart view
			if (QuickView.Client.Common.AppEnvironment.get_isMobileDevice()) {
				mainMenu.add_goToTop(ss.mkdel(this, this.$mainMenu_GoToTop));
				mainMenu.add_goToBottom(ss.mkdel(this, this.$mainMenu_GoToBottom));
			}
			// Commands
			mainMenu.add_openHistory(ss.mkdel(this, this.$mainMenu_OpenHistory));
			mainMenu.add_openQuickView3(ss.mkdel(this, this.$mainMenu_OpenQuickView3));
			mainMenu.add_download(ss.mkdel(this, this.$mainMenu_Download));
			mainMenu.add_openPiwik(ss.mkdel(this, this.$mainMenu_OpenPiwik));
			mainMenu.add_openShareSeries(ss.mkdel(this, this.$mainMenu_OpenShareSeries));
			mainMenu.add_resetView(ss.mkdel(this, this.$mainMenu_ResetView));
			// User
			mainMenu.add_logOut(ss.mkdel(this, this.$mainMenu_LogOut));
			mainMenu.add_changePassword(ss.mkdel(this, this.$mainMenu_ChangePassword));
			mainMenu.add_loadLatestVersion(ss.mkdel(this, this.$mainMenu_LoadLatestVersion));
			// Funds
			mainMenu.visibleRows = this.$getVisibleFunds();
			mainMenu.add_addRows(ss.mkdel(this, this.$mainMenu_AddFunds));
			mainMenu.add_removeRows(ss.mkdel(this, this.$mainMenu_RemoveFunds));
			mainMenu.add_favoritesChanged(ss.mkdel(this, this.$мainMenu_FavoritesChanged));
			return mainMenu;
		},
		$openMainMenu: function() {
			var menu = this.$_mainMenu.value();
			var latestVersion = QuickView.Client.Common.AppEnvironment.latestVersion;
			// Mini-chart view
			if (QuickView.Client.Common.AppEnvironment.get_isMobileDevice()) {
				var index = this.$chartRows.$calculateFirstVisibleRowIndex();
				menu.isFirstRowVisible = index === 0;
				menu.isLastRowVisible = index + this.$_tableLayout.visibleRowCount >= this.$chartRows.get_$allRows().length;
			}
			menu.set_isNewVersion(!ss.referenceEquals(QuickView.Client.Common.AppEnvironment.version.number, this.$userSettings.get_lastKnownVersionNumber()));
			menu.latestVersionNumber = (ss.isNullOrUndefined(latestVersion) ? null : latestVersion.number);
			menu.favorites = this.$settings.get_favorites();
			// Add some delay when opening the menu; otherwise on iOS the "click" event on the user cell actually
			// goes to the menu and immediately interacts with its element which could lead to immediately closing
			// the menu in some cases (e.g. if the element is a command).
			window.setTimeout(ss.mkdel(menu, menu.open), 100);
		},
		$mainMenu_ResetView: function(sender, e) {
			QuickView.Client.UI.Common.UIElements.get_application().element.scrollTop(0);
			// Give time to the menu to close
			this.$resetRowsAsync();
		},
		$mainMenu_OpenShareSeries: function(sender, e) {
			// TODO Implement
		},
		$mainMenu_OpenPiwik: function(sender, e) {
			// TODO Implement
		},
		$mainMenu_Download: function(sender, e) {
			// TODO Implement
		},
		$mainMenu_OpenHistory: function(sender, e) {
			this.$userSettings.set_lastKnownVersionNumber(QuickView.Client.Common.AppEnvironment.version.number);
			QuickView.Client.UI.HistoryDialog.open();
			if (QuickView.Client.Common.AppEnvironment.get_isDesktopDevice()) {
				this.get_element().removeClass('new_version');
			}
		},
		$mainMenu_OpenQuickView3: function(sender, e) {
			window.open('/qv3', '_blank');
		},
		$mainMenu_LoadLatestVersion: function(sender, e) {
			var $state = 0, dialog, $t1, result;
			var $sm = function() {
				$sm1:
				for (;;) {
					switch ($state) {
						case 0: {
							$state = -1;
							dialog = new QuickView.Client.UI.Dialogs.ApplicationUpdateDialog(QuickView.Client.Common.AppEnvironment.latestVersion);
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
		},
		$mainMenu_LogOut: function(sender, e) {
			var $state = 0, $t1, result, $t2;
			var $sm = ss.mkdel(this, function() {
				$sm1:
				for (;;) {
					switch ($state) {
						case 0: {
							$state = -1;
							$t1 = JS.UI.Dialogs.ConfirmationDialog.show('Log out', 'Are you sure you want to log out?');
							$state = 1;
							$t1.continueWith($sm);
							return;
						}
						case 1: {
							$state = -1;
							result = $t1.getAwaitedResult();
							if (result === true) {
								$t2 = this.$_userService.logOut(3);
								$state = 2;
								$t2.continueWith($sm);
								return;
							}
							$state = -1;
							break $sm1;
						}
						case 2: {
							$state = -1;
							$t2.getAwaitedResult();
							QuickView.Client.Common.AppContext.application.shutdown();
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
		$mainMenu_ChangePassword: function(sender, e) {
			// TODO Implement change password
		},
		$mainMenu_AddFunds: function (sender, e) {
			this.$chartRows.$addRangeAutoPosition(e.indicators);
		},
		$mainMenu_RemoveFunds: function(sender, e) {
			this.$chartRows.$removeRange(e.indicators);
		},
		$мainMenu_FavoritesChanged: function(sender, e) {
			this.$settings.set_favorites(this.$_mainMenu.value().favorites);
			this.$setFavorites(this.$settings.get_favorites());
		},
		$mobileDevice_SwipeLeft: function(e) {
			if (false === $QuickView_Client_UI_MainView_Grid_$Table.$isSwipeRowOrColumnAllowed(e.target)) {
				// Ignore the event
				return;
			}
			// Moves the app to the left in relation to the screen:
			// - Hide left-most column
			// - Show a new column o nthe right
			if (this.$_tableLayout.firstVisibleColumnIndex < this.$columns.length - 1) {
				this.$_tableLayout.firstVisibleColumnIndex++;
				this.$updateLayoutAsync();
			}
		},
		$mobileDevice_SwipeRight: function(e) {
			if (false === $QuickView_Client_UI_MainView_Grid_$Table.$isSwipeRowOrColumnAllowed(e.target)) {
				// Ignore the event
				return;
			}
			if (this.$_tableLayout.firstVisibleColumnIndex > 0) {
				this.$_tableLayout.firstVisibleColumnIndex--;
				this.$updateLayoutAsync();
			}
		},
		$mobileDevice_Resized: function(sender, e) {
			this.$onScreenOrientationOrSizeChanged();
		},
		$mobileDevice_OrientationChanged: function(sender, e) {
			this.$onScreenOrientationOrSizeChanged();
		},
		$onScreenOrientationOrSizeChanged: function() {
			this.$updateLayoutAsync();
			window.setTimeout(function() {
				// Update snapping;
				// This should be done AFTER the layout is updated and cells are resized
				QuickView.Client.UI.Common.UIElements.get_application().element.trigger('scroll');
			}, 1000);
		},
		$updateLayoutAsync: function() {
			if (ss.isNullOrUndefined(this.$_updateLayoutExecutor)) {
				this.$_updateLayoutExecutor = new JS.Threading.PostponeExecutor.$ctor2(ss.mkdel(this, function() {
					this.$updateLayout();
				}), 50, true);
			}
			this.$_updateLayoutExecutor.execute();
		},
		$chartRowManager_UpdateLayout: function() {
			this.$updateLayout();
		},
		$updateLayout: function() {
			var rowAndColumnInfo = $QuickView_Client_UI_MainView_Grid_$TableLayout.$calculateLayout(this.$chartRows.get_$allRows().length, this.$columns.length, QuickView.Client.UI.Common.UIElements.get_application().isMinimized);
			// Must be set at the beginning in order to calculate the index of the first row
			this.$_tableLayout.headerHeight = rowAndColumnInfo.height.headerSize;
			this.$_tableLayout.cellHeight = rowAndColumnInfo.height.cellSize;
			var rowCount = rowAndColumnInfo.maximumRows;
			var columnCount = rowAndColumnInfo.maximumColumns;
			if (QuickView.Client.Common.AppEnvironment.get_isMobileDevice()) {
				var index = this.$chartRows.$calculateFirstVisibleRowIndex();
				var rowUpdateResult = $QuickView_Client_UI_MainView_Grid_$Table.$updateRowOrColumnVisibility($QuickView_Client_UI_MainView_Grid_$ChartRow).call(null, false, this.$chartRows.get_$allRows(), index, rowCount);
				var columnUpdateResult = $QuickView_Client_UI_MainView_Grid_$Table.$updateRowOrColumnVisibility($QuickView_Client_UI_MainView_Grid_$ChartColumn).call(null, true, this.$columns, this.$_tableLayout.firstVisibleColumnIndex, columnCount);
				this.$_tableLayout.visibleRowCount = rowUpdateResult.item2 - rowUpdateResult.item1 + 1;
				this.$_tableLayout.firstVisibleColumnIndex = columnUpdateResult.item1;
				this.$_tableLayout.visibleColumnCount = columnUpdateResult.item2 - columnUpdateResult.item1 + 1;
				if (columnCount > 0) {
					// At least one column is visible
					var firstIndex = this.$columns[columnUpdateResult.item1].$index;
					var lastIndex = this.$columns[columnUpdateResult.item2].$index;
					$QuickView_Client_UI_MainView_Grid_$TableLayout.$adjustLayout(firstIndex, lastIndex, rowAndColumnInfo);
					// Update the scroll-snap of the rows
					// Compensate for two pixels border
					this.$initRowScrolling(rowAndColumnInfo.height.headerSize + 2);
				}
				this.$onLayoutUpdated();
			}
			else {
				var firstIndex1 = this.$columns[this.$_tableLayout.firstVisibleColumnIndex].$index;
				var lastIndex1 = this.$columns[this.$_tableLayout.firstVisibleColumnIndex + columnCount - 1].$index;
				$QuickView_Client_UI_MainView_Grid_$TableLayout.$adjustLayout(firstIndex1, lastIndex1, rowAndColumnInfo);
			}
			// Remember the first visible row and column
			{
				{
					var firstVisibleRowIndex = this.$chartRows.$calculateFirstVisibleRowIndex();
					var firstVisibleRow;
					if (firstVisibleRowIndex >= 0 && firstVisibleRowIndex < this.$chartRows.$rows.length) {
						firstVisibleRow = this.$chartRows.$rows[firstVisibleRowIndex];
					}
					else {
						firstVisibleRow = null;
					}
					this.$settings.set_topmostRowIndicatorID((ss.isNullOrUndefined(firstVisibleRow) ? null : QuickView.Client.Models.Charts.Indicator.idLower(firstVisibleRow.get_$indicator())));
				}
				{
					var firstVisibleColumnIndex = this.$_tableLayout.firstVisibleColumnIndex;
					var firstVisibleColumn;
					if (firstVisibleColumnIndex >= 0 && firstVisibleColumnIndex < this.$columns.length) {
						firstVisibleColumn = this.$columns[firstVisibleColumnIndex];
					}
					else {
						firstVisibleColumn = null;
					}
					this.$settings.set_leftmostColumnID((ss.isNullOrUndefined(firstVisibleColumn) ? null : firstVisibleColumn.get_$id()));
				}
			}
		},
		$openRowCorrelation: function(column) {
			// Wait some time until UI elements like menus and dialogs update
			// Otherwise, they may remain on screen and become partially visible
			window.setTimeout(ss.mkdel(this, function() {
				this.$openRowCorrelationPrivate(column);
			}), 100);
		},
		$openRowCorrelationPrivate: function(column) {
			JS.ArgumentHelper.notNull(column, 'column');
			if (this.$chartRows.$rows.length === 0) {
				return;
			}
			var indicatorList = Enumerable.from(this.$chartRows.$rows).where(function(x) {
				return QuickView.Client.Models.Charts.Indicator.supportsCorrelation(x.get_$indicator()) && QuickView.Client.UI.Common.Data.DataDescription$ChartPeriods.isSupported(x.get_$indicator(), column.$period.def);
			}).select(function(x1) {
				return x1.get_$indicator();
			}).toArray();
			if (indicatorList.length < 2) {
				return;
			}
			if (QuickView.Client.Common.AppEnvironment.environmentType === 'Development') {
				$QuickView_Client_UI_MainView_Windows_$RowCorrelationWindow.$show(column.$period);
			}
			else {
				// Disabled in other environments
			}
		},
		$openTopMarkets: function(column, row) {
			// Wait some time until UI elements like menus and dialogs update
			// Otherwise, they may remain on screen and become partially visible
			window.setTimeout(ss.mkdel(this, function() {
				this.$openTopMarketsPrivate(column, row);
			}), 100);
		},
		$openTopMarketsPrivate: function(column, row) {
			JS.ArgumentHelper.notNull(column, 'column');
			// TODO Implement
		},
		get_$favorites: function() {
			return this.$_favorites;
		},
		set_$favorites: function(value) {
			if (!ss.referenceEquals(this.$_favorites, value)) {
				this.$_favorites = value;
				this.$_favoriteDict = null;
			}
		},
		add_$favoritesChanged: function(value) {
			this.$2$FavoritesChangedField = ss.delegateCombine(this.$2$FavoritesChangedField, value);
		},
		remove_$favoritesChanged: function(value) {
			this.$2$FavoritesChangedField = ss.delegateRemove(this.$2$FavoritesChangedField, value);
		},
		$onFavoritesChanged: function(e) {
			var temp = this.$2$FavoritesChangedField;
			if (!ss.staticEquals(temp, null)) {
				temp(this, e);
			}
		},
		$isFavorite: function(indicator) {
			JS.ArgumentHelper.notNull(indicator, 'indicator');
			if (ss.isNullOrUndefined(this.$_favoriteDict)) {
				this.$_favoriteDict = new (ss.makeGenericType(ss.Dictionary$2, [QuickView.Client.Models.Charts.Indicator, Object]))();
				if (ss.isValue(this.get_$favorites())) {
					var $t1 = ss.getEnumerator(this.get_$favorites());
					try {
						while ($t1.moveNext()) {
							var item = $t1.current();
							// Handle duplicates
							this.$_favoriteDict.set_item(item, null);
						}
					}
					finally {
						$t1.dispose();
					}
				}
			}
			return this.$_favoriteDict.containsKey(indicator);
		},
		$setFavorites: function(favorites) {
			JS.ArgumentHelper.notNull(favorites, 'favorites');
			this.set_$favorites(favorites);
			this.$onFavoritesChanged(ss.EventArgs.Empty);
		},
		$initRows: function() {
			if (QuickView.Client.Common.AppEnvironment.get_OS() === 1) {
				// Disable momentum for scrolling on iOS Chrome since it causes serious bugs to occur
				QuickView.Client.UI.Common.UIElements.get_application().element.addClass('fast-scrolling-disabled-permanent');
			}
			// The "UserCell" is dependent on the "ChartRows". However, the header row must be created before
			// the rows panel. Therefore, elements are created first and then controls are initialized.
			var headerRowElement = $("<div class='header_row'></div>").appendTo(this.get_element());
			var chartRowPanel = this.$_chartRowPanel = $("<div class='chart_row_panel'></div>").appendTo(this.get_element());
			// Indication that the user can scroll up/down on mobile
			if (QuickView.Client.Common.AppEnvironment.get_isMobileDevice()) {
				this.$_scrollIndicatorUp = $("<div class='scroll_indicator up hidden'></div>").appendTo(chartRowPanel);
				this.$_scrollIndicatorDown = $("<div class='scroll_indicator down hidden'></div>").appendTo(chartRowPanel);
			}
			this.$chartRows = new $QuickView_Client_UI_MainView_Grid_$ChartRowManager(this, chartRowPanel);
			this.$chartRows.add_$rowsChanged(ss.mkdel(this, this.$chartRows_RowsChanged));
			this.$chartRows.add_$topRowChanged(ss.mkdel(this, this.$chartRows_TopRowChanged));
			// The "UserCell" is dependent on the "ChartRows". However, the header row must be created before
			// the rows panel. Therefore, elements are created first and then controls are initialized.
			this.$headerRow = $QuickView_Client_UI_MainView_Grid_$HeaderRow.$create(this, headerRowElement);
			// Must be loaded BEFORE the rows since at load time a row shows an icon indicating if it is marked as favorite
			this.set_$favorites(this.$settings.get_favorites());
			var list = this.$settings.get_openRows();
			if (ss.isValue(list) && ss.count(list) > 0) {
				// Load the list of previously saved rows
				var index = 0;
				var $t1 = ss.getEnumerator(list);
				try {
					while ($t1.moveNext()) {
						var item = $t1.current();
						this.$chartRows.$add$1(item, index++);
					}
				}
				finally {
					$t1.dispose();
				}
			}
			else {
				// The program is loaded for the first time so
				// add a single row from each of the sites the user has permission to see
				var index1 = 0;
				var menu = QuickView.Client.Models.Charts.RuntimeChartMetadata.getMenu(QuickView.Client.Common.AppContext.metadata);
				if (ss.isValue(menu.S)) {
					for (var $t2 = 0; $t2 < menu.S.length; $t2++) {
						var submenu = menu.S[$t2];
						var defaultRowList = QuickView.Client.Models.Charts.Submenu.getDefaultIndicatorRows(submenu);
						var $t3 = ss.getEnumerator(defaultRowList);
						try {
							while ($t3.moveNext()) {
								var menuItem = $t3.current();
								this.$chartRows.$add$1(menuItem.indicator, index1++);
							}
						}
						finally {
							$t3.dispose();
						}
					}
				}
			}
			if (QuickView.Client.Common.AppEnvironment.get_isDesktopDevice()) {
				this.$initRowScrolling(62);
			}
			this.$_rowHeaderMenu = new ss.Lazy(ss.mkdel(this, this.$createRowHeaderMenu));
			this.$_dataCellMenu = new ss.Lazy(ss.mkdel(this, this.$createDataCellMenu));
			this.$_displayedChartsMenu = new ss.Lazy(ss.mkdel(this, this.$createDisplayedChartsMenu));
			
			if (QuickView.Client.Common.AppEnvironment.get_isDesktopDevice()) {
				// For the creation of the menus
				var menu1;
				menu1 = this.$_rowHeaderMenu.value();
				menu1 = this.$_dataCellMenu.value();
			}
			else {
				// To improve startup performance on mobile the menus is initialized on first use
			}
		},
		$initRowScrolling: function(headerHeight) {
			// Reserve space for the header since it has fixed positioning which does not occupy space
			// in the HTML page
			this.$_chartRowPanel.css('margin-top', headerHeight);
			// jQuery.FromObject(Window.Document); // TODO Remove if no longer in use
			QuickView.Client.UI.Common.UIElements.get_application().element.scrollsnap({ snaps: '.chart_row', proximity: 200, onSnap: ss.mkdel(this, this.$scrollSnap_Snap), latency: 500 });
		},
		$chartRows_TopRowChanged: function(sender, e) {
			this.$settings.set_topmostRowIndicatorID((ss.isNullOrUndefined(this.$chartRows.get_$topRow()) ? null : QuickView.Client.Models.Charts.Indicator.idLower(this.$chartRows.get_$topRow().get_$indicator())));
		},
		$chartRows_RowsChanged: function(sender, e) {
			this.$storeOpenRows();
			this.$updateRowShapes();
		},
		$storeOpenRows: function() {
			this.$settings.set_openRows(Enumerable.from(this.$chartRows.$rows).select(function(x) {
				return x.get_$indicator();
			}).toArray());
		},
		$updateRowShapes: function() {
			this.$updateVisibleDataFundGroupCount();
			var altShape = true;
			var lastFundGroup = null;
			// Find the visible groups
			for (var $t1 = 0; $t1 < this.$chartRows.$rows.length; $t1++) {
				var item = this.$chartRows.$rows[$t1];
				var group = item.get_$indicator().menuInfo.I.parent;
				if (QuickView.Client.Models.Charts.Submenu.isRoot(group)) {
					// Top-level funds do not have shapes
					item.$headerCell.$hideShape();
					continue;
				}
				// The number of visible groups within the set
				var groupCount = this.$getRootSubmenuVisibleIndicatorCount(group.root);
				if (groupCount <= 1) {
					// Shapes are not displayed if only one group is visible for a indicator site
					item.$headerCell.$hideShape();
					continue;
				}
				if (!ss.referenceEquals(lastFundGroup, group)) {
					lastFundGroup = group;
					altShape = false === altShape;
				}
				var fundCount = this.$getVisibleFundCount(group);
				// Indicates if the number of visible funds is less than the total number of funds in the group
				var partialGroup = fundCount < QuickView.Client.Models.Charts.Submenu.getIndicatorRows(group).length;
				item.$headerCell.$showShape(partialGroup, altShape);
			}
		},
		$updateVisibleDataFundGroupCount: function() {
			if (ss.isNullOrUndefined(this.$_rootSubmenuIndicatorCountDict)) {
				this.$_rootSubmenuIndicatorCountDict = new (ss.makeGenericType(ss.Dictionary$2, [QuickView.Client.Models.Charts.Submenu, ss.Int32]))();
				this.$_submenuIndicatorCountDict = new (ss.makeGenericType(ss.Dictionary$2, [QuickView.Client.Models.Charts.Submenu, ss.Int32]))();
			}
			else {
				this.$_rootSubmenuIndicatorCountDict.clear();
				this.$_submenuIndicatorCountDict.clear();
			}
			// Find the visible groups
			for (var $t1 = 0; $t1 < this.$chartRows.$rows.length; $t1++) {
				var item = this.$chartRows.$rows[$t1];
				var group = item.get_$indicator().menuInfo.I.parent;
				var count = {};
				this.$_submenuIndicatorCountDict.tryGetValue(group, count);
				count.$++;
				this.$_submenuIndicatorCountDict.set_item(group, count.$);
			}
			// Count the number of visible groups per site
			var $t2 = ss.getEnumerator(this.$_submenuIndicatorCountDict.get_keys());
			try {
				while ($t2.moveNext()) {
					var item1 = $t2.current();
					var count1 = {};
					this.$_rootSubmenuIndicatorCountDict.tryGetValue(item1.root, count1);
					count1.$++;
					this.$_rootSubmenuIndicatorCountDict.set_item(item1.root, count1.$);
				}
			}
			finally {
				$t2.dispose();
			}
		},
		$getRootSubmenuVisibleIndicatorCount: function(rootSubmenu) {
			if (ss.isNullOrUndefined(this.$_rootSubmenuIndicatorCountDict)) {
				return 0;
			}
			var result = {};
			this.$_rootSubmenuIndicatorCountDict.tryGetValue(rootSubmenu, result);
			return result.$;
		},
		$getVisibleFundCount: function(group) {
			JS.ArgumentHelper.notNull(group, 'group');
			if (ss.isNullOrUndefined(this.$_submenuIndicatorCountDict)) {
				return 0;
			}
			var result = {};
			this.$_submenuIndicatorCountDict.tryGetValue(group, result);
			return result.$;
		},
		$onLayoutUpdated: function() {
			if (QuickView.Client.Common.AppEnvironment.get_isMobileDevice()) {
				var index = this.$chartRows.$calculateFirstVisibleRowIndex();
				if (index > 0) {
					// Position the up indicator below the header since its CSS position is "fixed"
					// (relative to the screen)
					this.$_scrollIndicatorUp.css('top', this.$_tableLayout.headerHeight + 2 + 10 + 'px');
					this.$_scrollIndicatorUp.show();
				}
				else {
					this.$_scrollIndicatorUp.hide();
				}
				if (index + this.$_tableLayout.visibleRowCount < this.$chartRows.get_$allRows().length) {
					this.$_scrollIndicatorDown.show();
				}
				else {
					this.$_scrollIndicatorDown.hide();
				}
				// Update all charts to fit in the cells
				var $t1 = this.$chartRows.get_$allRows();
				for (var $t2 = 0; $t2 < $t1.length; $t2++) {
					var row = $t1[$t2];
					for (var $t3 = 0; $t3 < row.$chartCells.length; $t3++) {
						var cell = row.$chartCells[$t3];
						cell.$onResize();
					}
				}
			}
		},
		$createDataCellMenu: function() {
			var menu = new QuickView.Client.UI.Menus.DataCellMenu();
			menu.add_closed(ss.mkdel(this, this.$dataCellMenu_Closed));
			menu.add_openExpandedChart(ss.mkdel(this, this.$dataCellMenu_OpenExpandedChart));
			menu.add_openDrawdownChart(ss.mkdel(this, this.$dataCellMenu_OpenDrawdownChart));
			menu.add_openSlippageChart(ss.mkdel(this, this.$dataCellMenu_OpenSlippageChart));
			menu.add_changeResolution(ss.mkdel(this, this.$dataCellMenu_ChangeResolution));
			menu.add_showRelatedIndicators(ss.mkdel(this, this.$dataCellMenu_ShowRelatedIndicators));
			menu.add_showAllRelatedIndicators(ss.mkdel(this, this.$dataCellMenu_ShowAllIndicators));
			menu.add_showTopBottomMarkets(ss.mkdel(this, this.$dataCellMenu_ShowTopBottomMarkets));
			return menu;
		},
		$createDisplayedChartsMenu: function () {
		    var menu = new QuickView.Client.UI.Menus.DisplayedChartsMenu();
		    menu.add_closed(ss.mkdel(this, this.$displayedChartsMenu_Closed));
		    menu.add_openDisplayedChart(ss.mkdel(this, this.$displayedChartsMenu_OpenExpandedChart));
		    menu.add_showTopBottomMarkets(ss.mkdel(this, this.$displayedChartsMenu_ShowTopBottomMarkets));
		    return menu;
		},
		$openDataCellMenu_Collapsed: function(listener, indicator, period) {
			JS.ArgumentHelper.notNull(listener, 'listener');
			JS.ArgumentHelper.notNull(indicator, 'indicator');
			JS.ArgumentHelper.notNull(period, 'period');
			this.$_dataCellMenuListener = listener;
			var menu = this.$_dataCellMenu.value();
			menu.indicator = indicator;
			menu.period = period.def;
			menu.chartMode = 1;
			menu.enableShowAllRelatedIndicators = true;
			menu.selectedRelatedIndicators = null;
			menu.open();
		},
		$openDataCellMenu_Extended: function(listener, indicator, period, resolution, enableShowAllRelatedIndicators, selectedRelatedIndicators) {
			JS.ArgumentHelper.notNull(listener, 'listener');
			JS.ArgumentHelper.notNull(indicator, 'indicator');
			JS.ArgumentHelper.notNull(period, 'period');
			this.$_dataCellMenuListener = listener;
			var menu = this.$_dataCellMenu.value();
			menu.indicator = indicator;
			menu.period = period.def;
			menu.chartMode = 2;
			menu.resolution = resolution;
			menu.enableShowAllRelatedIndicators = enableShowAllRelatedIndicators;
			menu.selectedRelatedIndicators = selectedRelatedIndicators;
			menu.open();
		},
		$openDisplayedChartsMenu_Extended: function (listener, indicator, period, resolution, enableShowAllRelatedIndicators, selectedRelatedIndicators) {
		    JS.ArgumentHelper.notNull(listener, 'listener');
		    JS.ArgumentHelper.notNull(indicator, 'indicator');
		    JS.ArgumentHelper.notNull(period, 'period');
		    this.$_displayedChartsMenuListener = listener;
		    var menu = this.$_displayedChartsMenu.value();
		    menu.indicator = indicator;
		    menu.period = period.def;
		    menu.chartMode = 2;
		    menu.resolution = resolution;
		    menu.enableShowAllRelatedIndicators = enableShowAllRelatedIndicators;
		    menu.selectedRelatedIndicators = selectedRelatedIndicators;
		    menu.open();
		},
		$dataCellMenu_Closed: function(sender, e) {
			// Clear the value to avoid memory leaks when the cell or extended chart are removed
			this.$_dataCellMenuListener = null;
		},
		$dataCellMenu_OpenExpandedChart: function(sender, e) {
			if (ss.isNullOrUndefined(this.$_dataCellMenuListener)) {
				return;
			}
			this.$_dataCellMenuListener.$onOpenExpandedChart();
		},
		$dataCellMenu_OpenDrawdownChart: function(sender, e) {
			if (ss.isNullOrUndefined(this.$_dataCellMenuListener)) {
				return;
			}
			this.$_dataCellMenuListener.$onOpenDrawdownChart();
		},
		$dataCellMenu_OpenSlippageChart: function(sender, e) {
			if (ss.isNullOrUndefined(this.$_dataCellMenuListener)) {
				return;
			}
			this.$_dataCellMenuListener.$onOpenSlippageChart();
		},
		$dataCellMenu_ChangeResolution: function(sender, e) {
			if (ss.isNullOrUndefined(this.$_dataCellMenuListener)) {
				return;
			}
			this.$_dataCellMenuListener.$onChangeResolution(e.get_resolution());
		},
		$dataCellMenu_ShowRelatedIndicators: function(sender, e) {
			if (ss.isNullOrUndefined(this.$_dataCellMenuListener)) {
				return;
			}
			this.$_dataCellMenuListener.$onShowRelatedIndicators(e.indicators);
		},
		$dataCellMenu_ShowAllIndicators: function(sender, e) {
			this.$_dataCellMenuListener.$onShowAllRelatedIndicators();
		},
		$dataCellMenu_ShowTopBottomMarkets: function(sender, e) {
			if (ss.isNullOrUndefined(this.$_dataCellMenuListener)) {
				return;
			}
			this.$_dataCellMenuListener.$onShowTopBottomMarkets(e.get_mode());
		},
	    //**************Displayed Charts***************
		$displayedChartsMenu_Closed: function (sender, e) {
		    // Clear the value to avoid memory leaks when the cell or extended chart are removed
		    this.$_displayedChartsMenuListener = null;
		},
		$displayedChartsMenu_OpenExpandedChart: function (sender, e) {
		    if (ss.isNullOrUndefined(this.$_displayedChartsMenuListener)) {
		        return;
		    }
		    this.$_displayedChartsMenuListener.$onOpenExpandedChart();
		},
		$displayedChartsMenu_ShowTopBottomMarkets: function (sender, e) {
		    if (ss.isNullOrUndefined(this.$_displayedChartsMenuListener)) {
		        return;
		    }
		    this.$_displayedChartsMenuListener.$onShowTopBottomMarkets(e.get_mode());
		},
	    //**************
		$createRowHeaderMenu: function() {
			var menu = new QuickView.Client.UI.Menus.RowHeaderMenu(QuickView.Client.Models.Charts.RuntimeChartMetadata.getMenu(QuickView.Client.Common.AppContext.metadata));
			menu.add_moveRow(ss.mkdel(this, this.$rowHeaderMenu_MoveRow));
			menu.add_removeRow(ss.mkdel(this, this.$rowHeaderMenu_RemoveRow));
			menu.add_removeFundGroup(ss.mkdel(this, this.$rowHeaderMenu_RemoveFundGroup));
			menu.add_removeFundSite(ss.mkdel(this, this.$rowHeaderMenu_RemoveFundSite));
			menu.add_isFavoriteChanged(ss.mkdel(this, this.$rowHeaderMenu_IsFavoriteChanged));
			menu.add_goToSilverlight(ss.mkdel(this, this.$rowHeaderMenu_GoToSilverlight));
			return menu;
		},
		$openRowHeaderMenu: function(row, dataRecency) {
			JS.ArgumentHelper.notNull(row, 'row');
			this.$_rowHeaderMenuRow = row;
			var menu = this.$_rowHeaderMenu.value();
			menu.indicator = row.get_$indicator();
			menu.dataRecency = dataRecency;
			menu.set_indicatorOptions(row.get_$indicatorOptions());
			var visibleDataFundsInGroupCount = 0;
			var visibleDataFundsInSiteCount = 0;
			for (var $t1 = 0; $t1 < this.$chartRows.$rows.length; $t1++) {
				var item = this.$chartRows.$rows[$t1];
				if (ss.referenceEquals(item.get_$indicator().menuInfo.P, row.get_$indicator().menuInfo.P)) {
					visibleDataFundsInGroupCount++;
					visibleDataFundsInSiteCount++;
				}
				else if (ss.referenceEquals(item.get_$indicator().menuInfo.I.root, row.get_$indicator().menuInfo.I.root)) {
					visibleDataFundsInSiteCount++;
				}
			}
			menu.set_visibleDataFundsInGroupCount(visibleDataFundsInGroupCount);
			menu.set_visibleDataFundsInSiteCount(visibleDataFundsInSiteCount);
			menu.isFavorite = this.$isFavorite(row.get_$indicator());
			var accessRights = QuickView.Client.Models.Users.UserPermissions.getTimeSeriesSourcesAccessRights(QuickView.Client.Common.AppContext.user.P, row.get_$indicator().timeSeriesSource);
			menu.enableSilverlight = JS.EnumExtensions.isSet(accessRights, 2);
			// Add some delay when opening the menu; otherwise on iOS the "click" event on the user cell actually
			// goes to the menu and immediately interacts with its element which could lead to immediately closing
			// the menu in some cases (e.g. if the element is a command).
			window.setTimeout(ss.mkdel(menu, menu.open), 100);
		},
		$rowHeaderMenu_IsFavoriteChanged: function(sender, e) {
			var menu = this.$_rowHeaderMenu.value();
			var indicator = menu.indicator;
			var list = ss.arrayFromEnumerable(this.get_$favorites() || []);
			if (menu.isFavorite) {
				if (false === ss.contains(list, indicator)) {
					list.push(indicator);
				}
			}
			else {
				ss.remove(list, indicator);
			}
			this.$settings.set_favorites(list);
			this.$setFavorites(list);
		},
		$rowHeaderMenu_GoToSilverlight: function(sender, e) {
			if (ss.isNullOrUndefined(this.$_rowHeaderMenuRow)) {
				return;
			}
			window.setTimeout(function() {
				// Chrome does not support IE any more
				JS.UI.Dialogs.MessageDialog.open$1(0, 'Go to Full Version', "Please open <a target='_blank' href='http://qr.pw/mv'>http://qr.pw/mv</a> in Internet Explorer.", true);
			}, 50);
		},
		$rowHeaderMenu_RemoveRow: function(sender, e) {
			if (ss.isNullOrUndefined(this.$_rowHeaderMenuRow)) {
				return;
			}
			window.setTimeout(ss.mkdel(this, function() {
				this.$chartRows.$remove$1(this.$_rowHeaderMenuRow);
			}), 100);
		},
		$rowHeaderMenu_RemoveFundGroup: function(sender, e) {
			if (ss.isNullOrUndefined(this.$_rowHeaderMenuRow)) {
				return;
			}
			window.setTimeout(ss.mkdel(this, function() {
				this.$removeFundGroup(this.$_rowHeaderMenuRow.get_$indicator().menuInfo.I.parent);
			}), 100);
		},
		$rowHeaderMenu_RemoveFundSite: function(sender, e) {
			if (ss.isNullOrUndefined(this.$_rowHeaderMenuRow)) {
				return;
			}
			window.setTimeout(ss.mkdel(this, function() {
				this.$removeFundSite(this.$_rowHeaderMenuRow.get_$indicator().menuInfo.I.root);
			}), 100);
		},
		$removeFundGroup: function(group) {
			JS.ArgumentHelper.notNull(group, 'group');
			var list = Enumerable.from(this.$chartRows.$rows).where(function(x) {
				return ss.referenceEquals(x.get_$indicator().menuInfo.I.parent, group);
			}).toArray();
			for (var $t1 = 0; $t1 < list.length; $t1++) {
				var item = list[$t1];
				this.$chartRows.$remove$1(item);
			}
		},
		$removeFundSite: function(site) {
			var list = Enumerable.from(this.$chartRows.$rows).where(function(x) {
				return ss.referenceEquals(x.get_$indicator().menuInfo.I.root, site);
			}).toArray();
			for (var $t1 = 0; $t1 < list.length; $t1++) {
				var item = list[$t1];
				this.$chartRows.$remove$1(item);
			}
		},
		$rowHeaderMenu_MoveRow: function(sender, e) {
			if (ss.isNullOrUndefined(this.$_rowHeaderMenuRow)) {
				return;
			}
			this.$chartRows.$moveRow(this.$_rowHeaderMenuRow, e.position);
		},
		$scrollSnap_Snap: function(element, causedByResize) {
			// An executor must be used since tests show the event may occur multiple times in a short period
			// due to the way it works
			if (ss.isNullOrUndefined(this.$_scrollStopExecutor)) {
				this.$_scrollStopExecutor = new JS.Threading.PostponeExecutor.$ctor2(ss.mkdel(this, function() {
					this.$chartRows.$updateTopRow_Table();
					if (QuickView.Client.Common.AppEnvironment.get_isMobileDevice()) {
						// On mobile recalculate the visible rows and set their visibility
						this.$updateLayout();
					}
				}), 500, true);
			}
			// Determine the index of the new top visible row after snapping has completed
			// Handling the "Snap" event is not enough since it is not raised if the scroll has been positioned
			// exactly on a row and thus no snapping has occurred. The delay is required in order to give time to
			// the animation to execute.
			this.$_scrollStopExecutor.execute();
		},
		$updateXAxisTopRowVisible: function() {
			if (false === this.$chartRows.get_$isFirstPhysicalRowVisible()) {
				if (this.$options.get_syncTopRow()) {
					// The top visible row is in sync with the header
					// so the the top row is considered visible
					this.get_element().removeClass('top_row_not_visible');
				}
				else {
					// Indicate that the the top row is not displayed on the screen
					this.get_element().addClass('top_row_not_visible');
				}
			}
			else {
				this.get_element().removeClass('top_row_not_visible');
			}
		},
		$chartRowManager_UpdateXAxisTopRowVisible: function() {
			this.$updateXAxisTopRowVisible();
		},
		$resetRowsAsync: function() {
			window.setTimeout(ss.mkdel(this, this.$resetRows), 500);
		},
		$resetRows: function() {
			var qrNetIndicator = QuickView.Client.Models.Charts.RuntimeChartMetadata.getIndicator(QuickView.Client.Common.AppContext.metadata, QuickView.Client.Models.Charts.KnownIndicators.qrNet);
			// Show QR/Net if not visible
			if (ss.isValue(qrNetIndicator) && false === Enumerable.from(this.$chartRows.$rows).any(function(x) {
				return ss.referenceEquals(x.get_$indicator(), qrNetIndicator);
			})) {
				this.$chartRows.$add$1(qrNetIndicator, 0);
			}
			// Turn-on sorting
			this.$options.set_sortMode(2);
		},
		$getVisibleFunds: function() {
			return Enumerable.from(this.$chartRows.$rows).select(function(x) {
				return x.get_$indicator();
			});
		}
	}, $JS_UI_UIElement);
	ss.initClass($QuickView_Client_UI_MainView_Grid_$TableDimensionSizes, $asm, {});
	ss.initClass($QuickView_Client_UI_MainView_Grid_$TableLayout, $asm, {});
	ss.initClass($QuickView_Client_UI_MainView_Grid_$TableLayoutCalculated, $asm, {});
	ss.initClass($QuickView_Client_UI_MainView_Grid_$TableLayoutInfo, $asm, {});
	ss.initClass($QuickView_Client_UI_MainView_Grid_$UpdateXAxisEventArgs, $asm, {}, ss.EventArgs);
	ss.initClass($QuickView_Client_UI_MainView_Grid_BarHighlightEventArgs, $asm, {}, ss.EventArgs);
	ss.initEnum($QuickView_Client_UI_MainView_Grid_ChartRowType, $asm, { fund: 0, benchmark: 1 });
	ss.initClass($QuickView_Client_UI_MainView_Grid_ColumnIndexEventArgs, $asm, {}, ss.EventArgs);
	ss.initClass($QuickView_Client_UI_MainView_Grid_ColumnMovedEventArgs, $asm, {}, ss.EventArgs);
	ss.initClass($QuickView_Client_UI_MainView_Grid_IndicatorDataPriority, $asm, {});
	ss.initClass($QuickView_Client_UI_MainView_Grid_MainPanel, $asm, {
		$init: function() {
			// Scroll to the top (on mobile due to the large log-in dialog the window may be scrolled
			// which can lead to incorrect alignment of the rows).
			window.scroll(0, 0);
			this.$_table = $QuickView_Client_UI_MainView_Grid_$Table.$create(this.get_element(), this.$_userService);
			// Remove the loading screen after the application has fully loaded
			QuickView.Client.UI.Common.UIElements.get_loadingScreen().hide();
			QuickView.Client.Common.AppContext.application.add_connectivityStatusChanged(ss.mkdel(this, this.$application_ConnectivityStatusChanged));
		},
		destroyCore: function() {
			if (ss.isValue(this.$_table)) {
				this.$_table.destroy();
				this.$_table = null;
			}
			this.destroy();
		},
		$application_ConnectivityStatusChanged: function(sender, e) {
			if (QuickView.Client.Common.AppContext.application.get_connectivityStatus() === 0) {
				QuickView.Client.UI.Common.UIElements.get_noConnectionLayer().css('display', 'none');
			}
			else {
				QuickView.Client.UI.Common.UIElements.get_noConnectionLayer().css('display', '');
			}
		}
	}, $JS_UI_FrameworkElement);
	ss.initClass($QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow, $asm, {
		get_$layout: function() {
			return ss.cast(this.layout, JS.UI.Windows.HcfWindowLayout);
		},
		$disableBarChart: function() {
			return this.$_displayMode === 1;
		},
		onInit: function() {
			JS.UI.Windows.Window.prototype.onInit.call(this);
			this.set_flags(47);
			this.set_width(750);
			this.set_height(450);
			var titleFormat = '{0} - {1} [{2}]';
			if (this.$_displayMode === 1) {
				var relationship = QuickView.Client.Models.Charts.Indicator.getSubordinateRelationship(this.$_indicator);
				var relationshipMetadata = QuickView.Client.UI.Common.Data.DataDescription$IndicatorRelationships.getRelationshipMetadata(relationship.N);
				titleFormat += (this.$_areAllRelatedIndicatorsSelected ? ' : All ' : ' : Selected ') + relationshipMetadata.pluralName.NL;
			}
			this.set_title(ss.formatString(titleFormat, this.$_indicator.menuInfo.R, this.$_indicator.N, this.$_period.get_name()));
			this.set_cssClass('data-window extended-chart');
			// Used as a scope for nested controls
		},
		onLoad: function() {
			JS.UI.Windows.Window.prototype.onLoad.call(this);
			if (this.$disableBarChart()) {
				// Only line charts is supported for related indicators
				this.$_chartType = 2;
			}
			this.layout = new JS.UI.Windows.HcfWindowLayout(this);
			$QuickView_Client_UI_MainView_Windows_$LocalWindowUtils.$setupHcfWindowLayout(this, this.get_$layout());
			this.$_toolbar = new JS.UI.Controls.Toolbar(this.get_$layout().get_header());
			// Display a back button on mobile devices
			if (QuickView.Client.Common.AppEnvironment.get_isMobileDevice()) {
				var buttonClose = this.$_toolbar.add(JS.UI.Controls.OldButton).call(this.$_toolbar, new JS.UI.Controls.OldButton('mobile-window-close-button'));
				// Close the window
				// CAUTION For some reason the method must be called async in order to get good responsiveness
				// on iOS
				buttonClose.add_click(ss.mkdel(this, function(sender, e) {
					window.setTimeout(ss.mkdel(this, this.close));
				}));
			}
			this.$panelChart = $("<div class='" + ('chart' || '') + "'></div>").appendTo(this.get_$layout().get_content());
			if (QuickView.Client.Common.AppEnvironment.get_isMobileDevice()) {
				// On mobile stats should be displayed below the toolbar
				this.get_$layout().get_header().append('<hr/>');
				this.$panelTopStats = $("<div class='" + ('stats-bar' || '') + "'></div>").appendTo(this.get_$layout().get_header());
			}
			else {
				// On desktop there is enough space to show stats in the toolbar after the toolbar buttons
				this.$panelTopStats = this.$_toolbar.add$3($("<div class='" + ('stats-bar' || '') + "'></div>"), 2);
			}
			this.$panelBottomStats = $("<div class='" + ('stats-bar' || '') + "'></div>").appendTo(this.get_$layout().get_footer());
			var $t2 = this.$_toolbar;
			var $t1 = new JS.UI.Controls.OldButton('unit-button');
			$t1.set_tooltip('Change unit.');
			this.$buttonUnit = $t2.add(JS.UI.Controls.OldButton).call($t2, $t1);
			if (false === this.$disableBarChart()) {
				var $t4 = this.$_toolbar;
				var $t3 = new JS.UI.Controls.OldButton('chart-type-button');
				$t3.set_tooltip('Switch between bar and line chart.');
				this.$buttonChartType = $t4.add(JS.UI.Controls.OldButton).call($t4, $t3);
				this.$buttonChartType.add_click(ss.mkdel(this, function(sender1, e1) {
					this.$toggleChartType();
				}));
				$QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$setChartTypeCssClass(this.$buttonChartType, this.$_chartType);
			}
			this.$_dataViewModeList = [];
			this.$_dataViewModeList.push(0);
			if (QuickView.Client.Models.Charts.Indicator.containsReturns(this.$_indicator) && QuickView.Client.Models.Charts.Indicator.supportsUnit(this.$_indicator, 4) && this.$_displayMode === 0) {
				// While drawdown can be calculate for units other then percentage
				// there is a requirements to limit it to percentage only
				this.$_dataViewModeList.push(2);
				if (QuickView.Client.Models.Charts.Indicator.containsSlippage(this.$_indicator)) {
					this.$_dataViewModeList.push(1);
				}
			}
			if (this.$_dataViewModeList.length > 1) {
				var $t6 = this.$_toolbar;
				var $t5 = new JS.UI.Controls.OldButton('data-view-mode-button returns');
				$t5.set_tooltip('Switch between returns, drawdown and slippage.');
				this.$buttonDataViewMode = $t6.add(JS.UI.Controls.OldButton).call($t6, $t5);
				this.$buttonDataViewMode.add_click(ss.mkdel(this, function(sender2, e2) {
					this.$toggleDataViewMode(1);
				}));
				// The button should always be enabled; when in bar mode and clicked then automatically switch to line mode
				//buttonDataViewMode.IsEnabled = _chartType == ChartType.Line;
			}
			var $t8 = this.$_toolbar;
			var $t7 = new JS.UI.Controls.OldButton('menu-button');
			$t7.set_tooltip('Open menu.');
			this.$buttonMenu = $t8.add(JS.UI.Controls.OldButton).call($t8, $t7);
            // chart merge button
			var $t14 = this.$_toolbar;
			var $t13 = new JS.UI.Controls.OldButton('chart-merge-button');
			$t13.set_tooltip("Open chart's list.");
			this.$buttonChartMerge = $t14.add(JS.UI.Controls.OldButton).call($t14, $t13);
			this.$buttonChartMerge.add_click(ss.mkdel(this, function (sender3, e3) {
			    this.$openChartListMenu();
			}));
			// Show a "Reset Zoom" button
			this.$buttonChart_ResetZoom = $("<div class='reset-zoom-button'></div>").appendTo(this.get_element());
			// CAUTION For some reason the method must be called async in order to get good responsiveness
			// on iOS
			JS.UI.UIEventExtensions.virtualClick(this.$buttonChart_ResetZoom, ss.mkdel(this, function(e3) {
				window.setTimeout(ss.mkdel(this.$_chart, this.$_chart.resetZoom));
			}));
			this.$buttonChart_ResetZoom.css('display', 'none');
			this.$_indicatorUnitList = ss.arrayFromEnumerable(QuickView.Client.Models.Charts.Indicator.getUnits(this.$_indicator));
			this.$_indicatorUnitList.sort($QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$unitSortCallback);
			this.$_displayDataUnit = this.$_indicatorUnitList[0];
			$QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$setUnitCssClass(this.$buttonUnit, this.$_displayDataUnit, this.$_indicator.timeSeriesCurrency);
			if (this.$_indicatorUnitList.length > 1) {
				// Multiple units are supported
				// CAUTION For some reason the method must be called async in order to get good responsiveness
				// on iOS
				this.$buttonUnit.add_click(ss.mkdel(this, function(sender3, e4) {
					this.$toggleUnit();
				}));
				var panelYAxis = JS.UI.UIEventExtensions.virtualClick($("<div class='" + ('y-axis-overlay' || '') + "'></div>").appendTo(this.get_$layout().get_content()), ss.mkdel(this, function(e5) {
					this.$toggleUnit();
				}));
			}
			else {
				this.$buttonUnit.set_isEnabled(false);
			}

			if (this.$_indicatorUnitList.indexOf(4) == -1) {
			    this.$buttonUnit.set_isEnabled(false);
			}

			this.$buttonMenu.add_click(ss.mkdel(this, function(sender4, e6) {
				this.$openMenu();
			}));
			if (QuickView.Client.Models.Charts.Indicator.supportsBenchmark(this.$_indicator) && this.$_displayMode === 0) {
				// The benchmark is displayed as well
				var $t10 = this.$_toolbar;
				var $t9 = new JS.UI.Controls.OldButton('benchmarks-view-mode-button');
				$t9.set_tooltip('Show/hide benchmarks.');
				this.$buttonBenchmarksViewMode = $t10.add$2(JS.UI.Controls.OldButton).call($t10, $t9, 0);
				this.$buttonBenchmarksViewMode.add_click(ss.mkdel(this, function(sender5, e7) {
					this.$toggleBenchmarkViewMode();
				}));
				this.$buttonBenchmarksViewMode.set_isVisible(this.$_indicatorOptions.get_benchmarks().showBenchmarks);
				this.$_benchmarkViewMode = 2;
			}
			else {
				// Only the chart itself is displayed
				this.$_benchmarkViewMode = 1;
			}
			if (QuickView.Client.Common.AppEnvironment.get_isMobileDevice()) {
				if (this.$_dataViewModeList.length > 1) {
					// Swipe is used to navigate between data view modes
					JS.UI.MobileEventExtensions.swipeLeft(this.get_$layout().get_header(), ss.mkdel(this, this.$onSwipeLeft));
					JS.UI.MobileEventExtensions.swipeLeft(this.get_$layout().get_footer(), ss.mkdel(this, this.$onSwipeLeft));
					JS.UI.MobileEventExtensions.swipeLeft(this.$panelChart, ss.mkdel(this, this.$onSwipeLeft_Chart));
					JS.UI.MobileEventExtensions.swipeRight(this.get_$layout().get_header(), ss.mkdel(this, this.$onSwipeRight));
					JS.UI.MobileEventExtensions.swipeRight(this.get_$layout().get_footer(), ss.mkdel(this, this.$onSwipeRight));
					JS.UI.MobileEventExtensions.swipeRight(this.$panelChart, ss.mkdel(this, this.$onSwipeRight_Chart));
				}
				if (ss.isValue(this.$_relatedIndicatorList) && ss.count(this.$_relatedIndicatorList) <= 2147483647) {
					if (this.$_displayMode === 0) {
					}
					else if (this.$_displayMode === 1) {
						// This button makes it easer for users to select a series
						var $t12 = this.$_toolbar;
						var $t11 = new JS.UI.Controls.OldButton('select-series-button');
						$t11.set_tooltip('Select a series.');
						this.$buttonSelectSeries = $t12.add(JS.UI.Controls.OldButton).call($t12, $t11);
						// TODO Replace this with a proper selector
						// Display the select over the icon in order for the user to be able to active it by clicking on the icon
						this.$dropDownSelectSeries = $("<select style='width: 100%; height: 100%; opacity: 0;'></select>").appendTo(this.$buttonSelectSeries.element);
						$QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$updateSelectSeriesDropDown(this.$dropDownSelectSeries, this.$_relatedIndicatorList);
						this.$dropDownSelectSeries.change(ss.mkdel(this, function(e8) {
							this.$selectChartDataSeries(this.$dropDownSelectSeries.val());
						}));
					}
				}
			}
			// The chart should be updated as the time flows
			// DEPRECATED - enable if required
			//_period.IntervalChanged += Period_IntervalChanged;
			this.$_indicatorOptions.add_benchmarksChanged(ss.mkdel(this, this.$indicatorOptions_BenchmarksChanged));
			this.$updateChartAsync();
		},
		onClose: function() {
			JS.UI.Windows.Window.prototype.onClose.call(this);
			this.$_indicatorOptions.remove_benchmarksChanged(ss.mkdel(this, this.$indicatorOptions_BenchmarksChanged));
			if (ss.isValue(this.$_dataHandle)) {
				this.$_dataHandle.dispose();
			}
			if (ss.isValue(this.$_hwmDataHandle)) {
				this.$_hwmDataHandle.dispose();
			}
			if (ss.isValue(this.$_slippageDataHandle)) {
				this.$_slippageDataHandle.dispose();
			}
			if (ss.isValue(this.$_relatedIndicatorDataHandleList)) {
				this.$_relatedIndicatorDataHandleList.dispose();
			}
			if (ss.isValue(this.$_benchmarkDataHandleList)) {
				this.$_benchmarkDataHandleList.dispose();
			}
			// DEPRECATED - enable if required
			//_period.IntervalChanged -= Period_IntervalChanged;
			this.$releaseChart();
		},
		$updateChartAsync: function() {
		    //console.log('this', this);
		    if (ss.isNullOrUndefined(this.$_updateChartExecutor)) {
				this.$_updateChartExecutor = new JS.Threading.PostponeExecutor.$ctor2(ss.mkdel(this, this.$updateChart), 500, true);
			}
			this.$_updateChartExecutor.execute();
		},
		$areBenchmarksEnabled: function() {
			var benchmarkOptions = this.$_indicatorOptions.get_benchmarks();
			return this.$_period.metaResolution === 2 && this.$_benchmarkViewMode === 2 && this.$_displayDataUnit === 4 && this.$_displayMode === 0 && benchmarkOptions.showBenchmarks && ss.isValue(benchmarkOptions.get_indicators()) && ss.count(benchmarkOptions.get_indicators()) > 0;
		},
		$updateChart: function() {
			var $state = 0, dataBag, relatedIndicatorDataBagList, $t1, $t2, relationship, relationshipMetadata, $t3, relatedIndicator, $t4, item, $t5, item1, k, progressText, item2, $t6, isSubRed, resolution, unit, now, data, start, end, interval, supplementData, drawdownData, hwmIndicator, $t7, drawdownUnit, percentageChartData, slippageUnit, percentageChartData1, indicatorList, dataList, $t10, item3, data1, start1, end1, interval1, hwmDataHandle, hwmData, benchmarkOptions, benchmarkDataList, $t8, benchmark, $t9, benchmarkDataHandle, benchmarkData;
			var $sm = ss.mkdel(this, function() {
				var $doFinally = true;
				$sm1:
				for (;;) {
					switch ($state) {
						case 0: {
							$state = -1;
							if (this.$_displayDataUnit !== this.$_currentChartUnit) {
								this.$releaseChart();
							}

							if (false === this.$_chartPanelInitialized) {
								this.$buttonChart_ResetZoom.css('display', 'none');
								this.$panelChart.empty();
								this.$_chartPanelInitialized = true;
							}
							dataBag = null;
							relatedIndicatorDataBagList = null;
							if (this.$_displayMode === 0) {
								if (ss.isNullOrUndefined(this.$_dataHandle)) {
									this.$_dataHandle = new $QuickView_Client_UI_MainView_Windows_IndicatorDataHandle(this.$_indicator, this.$_period, 1, 3);
									this.$_dataHandle.add_dataChanged(ss.mkdel(this, this.$dataHandle_DataChanged));
								}
								if (ss.isValue(this.$_slippageDataHandle)) {
									this.$_slippageDataHandle = new $QuickView_Client_UI_MainView_Windows_IndicatorDataHandle(this.$_indicator, this.$_period, 8, 3);
									this.$_slippageDataHandle.add_dataChanged(ss.mkdel(this, this.$slippageDataHandle_DataChanged));
								}
								if (this.$_dataViewMode === 0 || this.$_dataViewMode === 2) {
									$t1 = this.$_dataHandle.getData();
									$state = 2;
									$t1.continueWith($sm);
									$doFinally = false;
									return;
								}
								else if (this.$_dataViewMode === 1) {
									$t2 = this.$_slippageDataHandle.getData();
									$state = 3;
									$t2.continueWith($sm);
									$doFinally = false;
									return;
								}
								else {
									throw new ss.NotImplementedException(ss.formatString('Unsupported view mode: {0}.', this.$_dataViewMode));
								}
							}
							else if (this.$_displayMode === 1) {
								relationship = QuickView.Client.Models.Charts.Indicator.getSubordinateRelationship(this.$_indicator);
								if (ss.isNullOrUndefined(relationship) || ss.isNullOrUndefined(this.$_relatedIndicatorList)) {
									return;
								}
								relationshipMetadata = QuickView.Client.UI.Common.Data.DataDescription$IndicatorRelationships.getRelationshipMetadata(relationship.N);
								if (ss.isNullOrUndefined(this.$_relatedIndicatorDataHandleList)) {
									if (ss.isValue(this.$_newRelatedIndicatorList)) {
										// Should not be possible: The list of related indicators has changed before the data is loaded
										this.$_relatedIndicatorList = this.$_newRelatedIndicatorList;
										this.$_newRelatedIndicatorList = null;
										if (ss.isValue(this.$dropDownSelectSeries)) {
											// Update the list of options
											$QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$updateSelectSeriesDropDown(this.$dropDownSelectSeries, this.$_relatedIndicatorList);
										}
									}
									this.$_relatedIndicatorDataHandleList = new $QuickView_Client_UI_MainView_Windows_$IndicatorDataHandleList();
									this.$_relatedIndicatorDataHandleList.add_$dataChanged(ss.mkdel(this, this.$relatedIndicatorDataHandleList_DataChanged));
									$t3 = ss.getEnumerator(this.$_relatedIndicatorList);
									try {
										while ($t3.moveNext()) {
											relatedIndicator = $t3.current();
											this.$_relatedIndicatorDataHandleList.$add(relatedIndicator, this.$_period, 1, 3);
										}
									}
									finally {
										$t3.dispose();
									}
								}
								else if (ss.isValue(this.$_newRelatedIndicatorList)) {
									// Update the handles
									// Remove deselected indicators
									$t4 = ss.getEnumerator(this.$_relatedIndicatorList);
									try {
										while ($t4.moveNext()) {
											item = $t4.current();
											if (false === ss.contains(this.$_newRelatedIndicatorList, item)) {
												this.$_relatedIndicatorDataHandleList.$remove(item);
											}
										}
									}
									finally {
										$t4.dispose();
									}
									// Add newly selected indicators
									$t5 = ss.getEnumerator(this.$_newRelatedIndicatorList);
									try {
										while ($t5.moveNext()) {
											item1 = $t5.current();
											if (false === ss.contains(this.$_relatedIndicatorList, item1)) {
												this.$_relatedIndicatorDataHandleList.$add(item1, this.$_period, 1, 3);
											}
										}
									}
									finally {
										$t5.dispose();
									}
									this.$_relatedIndicatorList = this.$_newRelatedIndicatorList;
									if (ss.isValue(this.$dropDownSelectSeries)) {
										// Update the list of options
										$QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$updateSelectSeriesDropDown(this.$dropDownSelectSeries, this.$_relatedIndicatorList);
									}
								}
								relatedIndicatorDataBagList = [];
								// 2015-09-14/15 Show progress when loading data
								k = 0;
								$state = 4;
								continue $sm1;
							}
							else {
								return;
							}
						}
						case 2: {
							$state = -1;
							dataBag = $t1.getAwaitedResult();
							$state = 1;
							continue $sm1;
						}
						case 3: {
							$state = -1;
							dataBag = $t2.getAwaitedResult();
							$state = 1;
							continue $sm1;
						}
						case 4: {
							$state = -1;
							if (!(k < ss.count(this.$_relatedIndicatorList))) {
								$state = 1;
								continue $sm1;
							}
							if (ss.isNullOrUndefined(this.$_chart)) {
								// The chart is not visible so show progress
								progressText = ss.formatString('Loading {0} {1} of {2}...', relationshipMetadata.singularName.NL, k + 1, ss.count(this.$_relatedIndicatorList));
								this.$panelChart.text(progressText);
							}
							item2 = ss.getItem(this.$_relatedIndicatorList, k);
							$t6 = this.$_relatedIndicatorDataHandleList.$getData(item2);
							$state = 6;
							$t6.continueWith($sm);
							$doFinally = false;
							return;
						}
						case 1: {
							$state = -1;
							isSubRed = QuickView.Client.Models.Charts.Indicator.containsData$1(this.$_indicator, 2, 1001);
							if (isSubRed) {
								// Subscriptions/Redemptions are handled in a different way
								resolution = this.$_barResolution;
								unit = 3;
							}
							else {
								resolution = ((this.$_chartType === 2) ? this.$_lineResolution : this.$_barResolution);
								unit = this.$_displayDataUnit;
							}
							now = QuickView.Client.Algorithms.TimeExtensions.roundTimeUp$1(JS.DateTimeExt.get_utcNow(), resolution);
							if (this.$_displayMode === 0) {
								JS.Diagnostics.Debug.assert(ss.isValue(dataBag));
								if (isSubRed) {
									// Subscriptions/Redemptions are handled in a different way
									data = QuickView.Client.Services.Charts.IndicatorDataBag.getCustomData$1(dataBag, unit, resolution);
								}
								else {
									data = QuickView.Client.Services.Charts.IndicatorDataBag.getChartData$1(dataBag, unit, resolution);
								}
								if (ss.isNullOrUndefined(data) || data.get_isEmpty()) {
									// No data
									this.$releaseChart();
									this.$panelChart.html("<div class='no-data'>No data.</div>");
									return;
								}
								start = data.changeResolution(this.$_period.displayInterval.S);
								end = data.changeResolution(JS.DateTimeHelper.min(now, this.$_period.displayInterval.E));
								interval = QuickView.Client.Models.Charts.TimeInterval.$ctor(start, end);
								if (isSubRed) {
									// Update chart
									this.$updateChart_SubRed(this.$_indicator, ss.cast(data, QuickView.Client.Services.Charts.IndicatorCustomData), this.$_period.def, interval);
									$state = 7;
									continue $sm1;
								}
								else {
									// Get supplement data (if any)
									supplementData = QuickView.Client.UI.Charts.ChartSupplementData.$ctor();
									// TODO Quick workaround
									drawdownData = null;
									if (this.$_dataViewMode === 0) {
										if (ss.referenceEquals(QuickView.Client.Models.Charts.Indicator.idLower(this.$_indicator), QuickView.Client.Models.Charts.KnownIndicators.qrNet) && this.$_period.metaResolution === 2) {
											// Load HWM
											hwmIndicator = QuickView.Client.Models.Charts.RuntimeChartMetadata.getIndicator(QuickView.Client.Common.AppContext.metadata, QuickView.Client.Models.Charts.KnownIndicators.QRHWM);
											if (ss.isValue(hwmIndicator)) {
												if (ss.isNullOrUndefined(this.$_hwmDataHandle)) {
													this.$_hwmDataHandle = new $QuickView_Client_UI_MainView_Windows_IndicatorDataHandle(hwmIndicator, this.$_period, 1, 3);
												}
												$t7 = this.$_hwmDataHandle.getData();
												$state = 10;
												$t7.continueWith($sm);
												$doFinally = false;
												return;
											}
											$state = 9;
											continue $sm1;
										}
										$state = 9;
										continue $sm1;
									}
									else {
										if (this.$_dataViewMode === 2) {
											drawdownUnit = 4;
											percentageChartData = QuickView.Client.Services.Charts.IndicatorDataBag.getChartData$1(dataBag, drawdownUnit, resolution);
											// Calculate drawdown
											drawdownData = QuickView.Client.Algorithms.Charts.DrawdownAlgorithm.transform(drawdownUnit, percentageChartData.get_dataPoints(), percentageChartData.get_initialValue());
										}
										else if (this.$_dataViewMode === 1) {
											// TODO Load slippage data
											slippageUnit = 4;
											percentageChartData1 = QuickView.Client.Services.Charts.IndicatorDataBag.getChartData$1(dataBag, slippageUnit, resolution);
											debugger;
										}
										$state = 8;
										continue $sm1;
									}
								}
							}
							else {
								if (this.$_displayMode === 1) {
									JS.Diagnostics.Debug.assert(ss.isValue(relatedIndicatorDataBagList));
									indicatorList = [];
									dataList = [];
									$t10 = ss.getEnumerator(relatedIndicatorDataBagList);
									try {
										while ($t10.moveNext()) {
											item3 = $t10.current();
											indicatorList.push(item3.indicator);
											dataList.push(QuickView.Client.Services.Charts.IndicatorDataBag.getChartData$1(item3, unit, resolution));
										}
									}
									finally {
										$t10.dispose();
									}
									if (dataList.length > 0) {
										data1 = dataList[0];
										start1 = data1.changeResolution$1(this.$_period.displayInterval.S, resolution);
										end1 = data1.changeResolution$1(JS.DateTimeHelper.min(now, this.$_period.displayInterval.E), resolution);
										interval1 = QuickView.Client.Models.Charts.TimeInterval.$ctor(start1, JS.DateTimeHelper.min(now, end1));
										this.$updateChart_Markers(indicatorList, dataList, this.$_period.def, interval1, this.$_chartType, unit, resolution);
									}
								}
								else {
									return;
								}
								$state = 7;
								continue $sm1;
							}
						}
						case 6: {
							$state = -1;
							ss.add(relatedIndicatorDataBagList, $t6.getAwaitedResult());
							$state = 5;
							continue $sm1;
						}
						case 5: {
							$state = -1;
							k++;
							$state = 4;
							continue $sm1;
						}
						case 10: {
							$state = -1;
							hwmDataHandle = $t7.getAwaitedResult();
							hwmData = QuickView.Client.Services.Charts.IndicatorDataBag.getCustomData(hwmDataHandle, 3);
							if (ss.isValue(hwmData) && false === hwmData.get_isEmpty()) {
								// 2015-06 Saltarelle compiler does not support casting of serializable types when
								// generics are used (e.g. LINQ "Cast")
								supplementData.H = Enumerable.from(hwmData.get_dataPoints()).select(function(x) {
									return x;
								}).toArray();
							}
							$state = 9;
							continue $sm1;
						}
						case 9: {
							$state = -1;
							benchmarkOptions = this.$_indicatorOptions.get_benchmarks();
							if (this.$areBenchmarksEnabled()) {
								if (ss.isNullOrUndefined(this.$_benchmarkDataHandleList)) {
									this.$_benchmarkDataHandleList = new $QuickView_Client_UI_MainView_Windows_$IndicatorDataHandleList();
									this.$_benchmarkDataHandleList.add_$dataChanged(ss.mkdel(this, this.$benchmarkDataHandleList_DataChanged));
								}
								benchmarkDataList = [];
								$t8 = ss.getEnumerator(benchmarkOptions.get_indicators());
								$state = 11;
								continue $sm1;
							}
							$state = 8;
							continue $sm1;
						}
						case 8: {
							$state = -1;
							// Update chart
							this.$updateChart$1(this.$_indicator, ss.cast(data, QuickView.Client.Services.Charts.IndicatorChartData), drawdownData, supplementData, this.$_period.def, interval, this.$_chartType);
							$state = 7;
							continue $sm1;
						}
						case 7: {
						    $state = -1;
							$QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$setUnitCssClass(this.$buttonUnit, unit, this.$_indicator.timeSeriesCurrency);
							// Remember the unit so that will know if to release the chart before it is displayed
							// the next time.
							this.$_currentChartUnit = unit;
							$state = -1;
							break $sm1;
						}
						case 11:
						case 13:
						case 14: {
							if ($state === 11) {
								$state = 13;
							}
							try {
								$sm2:
								for (;;) {
									switch ($state) {
										case 13: {
											$state = -1;
											if (!$t8.moveNext()) {
												$state = -1;
												break $sm2;
											}
											benchmark = $t8.current();
											// Check if the data for the indicator has been loaded
											if (false === this.$_benchmarkDataHandleList.$contains(benchmark)) {
												this.$_benchmarkDataHandleList.$add(benchmark, this.$_period, 1, 3);
											}
											$t9 = this.$_benchmarkDataHandleList.$getData(benchmark);
											$state = 14;
											$t9.continueWith($sm);
											$doFinally = false;
											return;
										}
										case 14: {
											$state = -1;
											benchmarkDataHandle = $t9.getAwaitedResult();
											benchmarkData = QuickView.Client.Services.Charts.IndicatorDataBag.getChartData$1(benchmarkDataHandle, unit, resolution);
											benchmarkDataList.push(ss.makeGenericType(QuickView.Client.UI.Charts.ChartData$1, [QuickView.Client.Models.Charts.DataPointBase]).$ctor(benchmark, benchmarkData.get_dataPoints()));
											$state = 13;
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
									$t8.dispose();
								}
							}
							$state = 12;
							continue $sm1;
						}
						case 12: {
							$state = -1;
							supplementData.B = benchmarkDataList;
							$state = 8;
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
		$disposeChartIfNecessary: function(chartType) {
			if (ss.isValue(this.$_chart)) {
				if (ss.isInstanceOfType(this.$_chart, QuickView.Client.UI.Charts.BarChart) && chartType !== 1 || ss.isInstanceOfType(this.$_chart, QuickView.Client.UI.Charts.LineChart) && chartType !== 2) {
					this.$_chart.dispose();
					this.$_chart = null;
					this.$_displayMode_RelatedIndicators_Resized = false;
				}
			}
		},
		$updateChart_SubRed: function(indicator, data, period, timeInterval) {
			JS.ArgumentHelper.notNull(indicator, 'indicator');
			JS.ArgumentHelper.notNull(data, 'data');
			JS.ArgumentHelper.notNull(period, 'period');
			JS.ArgumentHelper.notNull(timeInterval, 'timeInterval');
			this.$updateStats();
			if (ss.isNullOrUndefined(this.$_chart)) {
				this.$_chart = new QuickView.Client.UI.Charts.SubRedChart(this.$panelChart, 2);
				this.$_chart.add_zoomIn(ss.mkdel(this, this.$chart_ZoomIn));
				this.$_chart.add_zoomOut(ss.mkdel(this, this.$chart_ZoomOut));
				this.$_chart.add_zoom(ss.mkdel(this, this.$chart_Zoom));
			}
			this.$_chart.update(ss.makeGenericType(QuickView.Client.UI.Charts.ChartData$1, [QuickView.Client.Models.Charts.DataPointBase]).$ctor(indicator, data.get_dataPoints()), period, timeInterval, data.unit, data.resolution, null, null);
		},
		$updateChart$1: function(indicator, data, drawdownData, supplementData, period, timeInterval, chartType) {
			JS.ArgumentHelper.notNull(indicator, 'indicator');
			JS.ArgumentHelper.notNull(data, 'data');
			JS.ArgumentHelper.notNull(period, 'period');
			JS.ArgumentHelper.notNull(timeInterval, 'timeInterval');
			this.$disposeChartIfNecessary(chartType);
			if (ss.isValue(drawdownData)) {
				this.$updateDrawdownStats(drawdownData);
			}
			else {
				// The stats must be updated BEFORE the chart is created as they allocate space at the bottom
				// of the window. After that the chart is fitter into the remaining space.
				this.$updateStats();
			}
			if (ss.isNullOrUndefined(this.$_chart)) {
				if (chartType === 1) {
					this.$_chart = new QuickView.Client.UI.Charts.BarChart(this.$panelChart, 2);
				}
				else if (chartType === 2) {
					this.$_chart = new QuickView.Client.UI.Charts.LineChart(this.$panelChart, 2);
				}
				else {
					throw new ss.ArgumentOutOfRangeException('viewMode', 'Invalid value.', null, chartType);
				}
				this.$_chart.add_zoomIn(ss.mkdel(this, this.$chart_ZoomIn));
				this.$_chart.add_zoomOut(ss.mkdel(this, this.$chart_ZoomOut));
				this.$_chart.add_zoom(ss.mkdel(this, this.$chart_Zoom));
				if (ss.isValue(supplementData) && ss.isValue(supplementData.B) && ss.count(supplementData.B) > 1) {
					this.$_chart.add_benchmarkSeriesMouseOver(ss.mkdel(this, this.$chart_BenchmarkSeriesMouseOver));
					this.$_chart.add_benchmarkSeriesMouseOut(ss.mkdel(this, this.$chart_BenchmarkSeriesMouseOut));
				}
				else {
					// If there is only one benchmark then it is displayed by default
				}
			}
			var $t1 = new QuickView.Client.UI.Charts.ChartOptions();
			$t1.set_U(this.$_indicatorUnitList.length > 1);
			$t1.set_D(drawdownData);
			var chartOptions = $t1;
			this.$_chart.update(ss.makeGenericType(QuickView.Client.UI.Charts.ChartData$1, [QuickView.Client.Models.Charts.DataPointBase]).$ctor1(indicator, data.get_dataPoints(), data.get_initialValue()), period, timeInterval, data.unit, data.resolution, supplementData, chartOptions);
		},
		$updateChart_Markers: function(indicatorList, dataList, period, timeInterval, chartType, unit, resolution) {
			JS.ArgumentHelper.notNull(indicatorList, 'indicatorList');
			JS.ArgumentHelper.notNull(dataList, 'dataList');
			JS.ArgumentHelper.notNull(period, 'period');
			JS.ArgumentHelper.notNull(timeInterval, 'timeInterval');
			if (ss.count(indicatorList) !== ss.count(dataList)) {
				throw new ss.ArgumentNullException("The number of elements of 'indicatorList' and 'dataList' must be the same.");
			}
			this.$disposeChartIfNecessary(chartType);
			// The stats must be updated BEFORE the chart is created as they allocate space at the bottom
			// of the window. After that the chart is fitter into the remaining space.
			this.$clearStatsForMultipleDataSeries();
			if (ss.isNullOrUndefined(this.$_chart)) {
				if (chartType === 1) {
					this.$_chart = new QuickView.Client.UI.Charts.BarChart(this.$panelChart, 2);
				}
				else if (chartType === 2) {
					this.$_chart = new QuickView.Client.UI.Charts.LineChart(this.$panelChart, 2);
				}
				else {
					throw new ss.ArgumentOutOfRangeException('viewMode', 'Invalid value.', null, chartType);
				}
				this.$_chart.add_zoomIn(ss.mkdel(this, this.$chart_ZoomIn));
				this.$_chart.add_zoomOut(ss.mkdel(this, this.$chart_ZoomOut));
				this.$_chart.add_zoom(ss.mkdel(this, this.$chart_Zoom));
				this.$_chart.add_primarySeriesMouseOver(ss.mkdel(this, this.$chart_PrimarySeriesMouseOver));
				this.$_chart.add_primarySeriesMouseOut(ss.mkdel(this, this.$chart_PrimarySeriesMouseOut));
			}
			var chartDataList = [];
			for (var k = 0; k < ss.count(indicatorList); k++) {
				var indicator = ss.getItem(indicatorList, k);
				var data = ss.getItem(dataList, k);
				var chartData = ss.makeGenericType(QuickView.Client.UI.Charts.ChartData$1, [QuickView.Client.Models.Charts.DataPointBase]).$ctor1(indicator, data.get_dataPoints(), data.get_initialValue());
				chartDataList.push(chartData);
			}
			this.$_chart.update(chartDataList, period, timeInterval, unit, resolution, null, null);
		},
		$releaseChart: function() {
			if (ss.isValue(this.$_chart)) {
				this.$_chart.dispose();
				this.$_chart = null;
				this.$_displayMode_RelatedIndicators_Resized = false;
			}
			// Clear content
			this.$panelChart.empty();
			this.$_chartPanelInitialized = false;
		},
		$chart_ZoomIn: function(sender, e) {
			this.$buttonChart_ResetZoom.css('display', '');
		},
		$chart_ZoomOut: function(sender, e) {
			this.$buttonChart_ResetZoom.css('display', 'none');
		},
		$chart_Zoom: function(sender, e) {
			if (this.$_dataViewMode === 2) {
				// Drawdown stats are displayed when the chart is generated and
				// are not updated when zooming
			}
			else {
				this.$updateStatsAsync();
			}
		},
		$chart_PrimarySeriesMouseOver: function(sender, e) {
			this.$onPrimarySeriesSelected(e.I);
		},
		$onPrimarySeriesSelected: function(indicator) {
			JS.ArgumentHelper.notNull(indicator, 'indicator');
			if (ss.isNullOrUndefined(this.$_relatedIndicatorDataHandleList)) {
				return;
			}
			var dataBag = this.$_relatedIndicatorDataHandleList.$getDataIfLoaded(indicator);
			if (ss.isNullOrUndefined(dataBag)) {
				return;
			}
			this.$updateStats$1(indicator, dataBag);
			if (ss.isValue(this.$_chart)) {
				var color = this.$_chart.getDataSeriesColor(indicator);
				this.$_chart.setTitle(indicator.N, color);
			}
		},
		$chart_PrimarySeriesMouseOut: function(sender, e) {
			this.$clearStatsForMultipleDataSeries();
			if (ss.isValue(this.$_chart)) {
				// Hide the name of the indicator
				this.$_chart.setTitle(null, null);
			}
		},
		$chart_BenchmarkSeriesMouseOver: function(sender, e) {
			this.$updateBottomStats_Benchmarks(e.I);
		},
		$chart_BenchmarkSeriesMouseOut: function(sender, e) {
			this.$updateBottomStats_Benchmarks(null);
		},
		$clearStats: function() {
			JS.UI.TooltipExtensions.removeTooltip(this.$panelTopStats);
			this.$panelTopStats.empty();
			this.$panelTopStats.removeClass('zoomed');
			this.$panelBottomStats.empty();
			this.$panelBottomStats.removeClass('zoomed');
			// // This results in glitches
			// if (_chart != null)
			// {
			// _chart.OnResize();
			// }
		},
		$clearStatsForMultipleDataSeries: function() {
			var chartName = ((this.$_chartType === 2) ? 'line' : 'bar');
			var message = (QuickView.Client.Common.AppEnvironment.get_isMobileDevice() ? 'Tap on a {0} to view stats' : 'Hover over a {0} to view stats');
			message = ss.formatString(message, chartName);
			message = "<span class='message'>--- " + message + ' ---</span>';
			this.$panelTopStats.html(message);
			this.$panelBottomStats.html(message);
			// // This results in glitches
			// if (_chart != null)
			// {
			// _chart.OnResize();
			// }
		},
		$updateDrawdownStats: function(data) {
			JS.ArgumentHelper.notNull(data, 'data');
			// Clear stats
			this.$clearStats();
			if (data.I.length === 0) {
				return;
			}
			var maxDrawdown = Enumerable.from(data.I).max(function(x) {
				return x.S.M.V;
			});
			var maxBreakEven = data.I[0];
			for (var $t1 = 0; $t1 < data.I.length; $t1++) {
				var item = data.I[$t1];
				if (item.S.T > maxBreakEven.S.T) {
					maxBreakEven = item;
				}
			}
			// Top stats
			{
				var panel = this.$panelTopStats;
				panel.append(ss.formatString("<span class='item'>Max Drd: <span class='value'>{0}</span></span>", QuickView.Client.UI.Charts.ChartFormat.formatNumber(maxDrawdown, data.U, this.$_indicator.timeSeriesCurrency, this.$_indicator.settings.D, 0, null, null)));
				panel.append(ss.formatString("<span class='item'>Max Bre: <span class='value'>trd:{0}d (cal:{1}d)</span></span>", maxBreakEven.S.T, maxBreakEven.S.C));
				var tooltip = new ss.StringBuilder();
				tooltip.append(ss.formatString("<div><span style='display:inline-block;width:50px;'>Dates</span> {0} - {1}</div>", data.S.S.format('yyyy/MM/dd'), data.S.E.format('yyyy/MM/dd')));
				tooltip.append(ss.formatString("<div><span style='display:inline-block;width:50px;'>#days</span> trd:{0}d (cal:{1}d)</div>", data.S.T, data.S.C));
				{
					var topList = Enumerable.from(data.I).orderBy(function(x1) {
						return x1.S.M.V;
					}).take(5).toArray();
					tooltip.append('<hr/>');
					tooltip.append(ss.formatString("<div class='title'>Top {0} drawdown summary</div>", topList.length));
					tooltip.append('<table><thead><th></th><th>Drd</th><th>Bre</th><th>Start</th><th>End</th></thead>');
					tooltip.append('<tbody>');
					for (var k = 0; k < topList.length; k++) {
						var item1 = topList[k];
						tooltip.append(ss.formatString('<tr><td>{0}</td><td>{1}</td><td>trd:{2}d (cal:{3}d)</td><td>{4}</td><td>{5}</td></tr>', k + 1, QuickView.Client.UI.Charts.ChartFormat.formatNumberPlain(item1.S.M.V, data.U, this.$_indicator.settings.D), item1.S.T, item1.S.C, item1.S.S.format('yyyy/MM/dd'), item1.S.E.format('yyyy/MM/dd')));
					}
					tooltip.append('</tbody></table>');
				}
				{
					var topList1 = Enumerable.from(data.I).orderByDescending(function(x2) {
						return x2.S.T;
					}).take(5).toArray();
					tooltip.append('<hr/>');
					tooltip.append(ss.formatString("<div class='title'>Top {0} break-even summary</div>", topList1.length));
					tooltip.append('<table><thead><th></th><th>Bre</th><th>Drd</th><th>Start</th><th>End</th></thead>');
					tooltip.append('<tbody>');
					for (var k1 = 0; k1 < topList1.length; k1++) {
						var item2 = topList1[k1];
						tooltip.append(ss.formatString('<tr><td>{0}</td><td>trd:{2}d (cal:{3}d)</td><td>{1}</td><td>{4}</td><td>{5}</td></tr>', k1 + 1, QuickView.Client.UI.Charts.ChartFormat.formatNumberPlain(item2.S.M.V, data.U, this.$_indicator.settings.D), item2.S.T, item2.S.C, item2.S.S.format('yyyy/MM/dd'), item2.S.E.format('yyyy/MM/dd')));
					}
					tooltip.append('</tbody></table>');
					JS.UI.TooltipExtensions.setHtmlTooltip$1(this.$panelTopStats, tooltip.toString(), 'Drawdown Stats', 0, 'drawdown-tooltip');
				}
			}
		},
		$updateStatsAsync: function() {
			if (ss.isNullOrUndefined(this.$_updateStatsExecutor)) {
				this.$_updateStatsExecutor = new JS.Threading.PostponeExecutor.$ctor2(ss.mkdel(this, this.$updateStats), 500, true);
			}
			this.$_updateStatsExecutor.execute();
		},
		$updateStats: function() {
			// Stats are NOT supported for sub/red
			// The stats must be updated BEFORE the chart is created as they allocate space at the bottom
			// of the window. After that the chart is fitter into the remaining space.
			var isSubRed = QuickView.Client.Models.Charts.Indicator.containsData$1(this.$_indicator, 2, 1001);
			if (isSubRed) {
				return;
			}
			if (ss.isNullOrUndefined(this.$_dataHandle) || false === this.$_dataHandle.get_isDataLoaded()) {
				return;
			}
			var dataBag = this.$_dataHandle.getDataIfLoaded();
			if (ss.isNullOrUndefined(dataBag)) {
				return;
			}
			this.$updateStats$1(this.$_indicator, dataBag);
		},
		$updateStats$1: function(indicator, dataBag) {
			JS.ArgumentHelper.notNull(indicator, 'indicator');
			JS.ArgumentHelper.notNull(dataBag, 'dataBag');
			var cumulative = this.$_chartType === 2;
			var resolution = this.$_period.getResolution(this.$_chartType, 2);
			var data = QuickView.Client.Services.Charts.IndicatorDataBag.getChartData$1(dataBag, this.$_displayDataUnit, resolution);
			var highResData = QuickView.Client.Services.Charts.IndicatorDataBag.getChartData(dataBag, this.$_displayDataUnit);
			var highestResPercentageData;
			if (this.$_displayDataUnit === 4 || this.$_displayDataUnit === 3) {
				highestResPercentageData = highResData;
			}
			else if (QuickView.Client.Models.Charts.Indicator.supportsUnit(indicator, 4)) {
				highestResPercentageData = QuickView.Client.Services.Charts.IndicatorDataBag.getChartData(dataBag, 4);
			}
			else {
				highestResPercentageData = null;
			}
			var $t1 = $QuickView_$Client_UI_MainView_Windows_$ExtendedChartWindow$StatsParameters.$ctor();
			$t1.indicator = indicator;
			$t1.cumulative = cumulative;
			$t1.resolution = resolution;
			$t1.data = data;
			$t1.highResData = highResData;
			$t1.highResPercentageData = highestResPercentageData;
			$t1.valueGetter = (cumulative ? $QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$getCumValue : $QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$getNonCumValue);
			var statsParameters = $t1;
			// The first time stats are displayed BEFORE the chart as they allocate
			// space. The chart is fitted into the remaining space.
			var extremes = (ss.isNullOrUndefined(this.$_chart) ? null : this.$_chart.getXAxisExtremes());
			var filters = (ss.isNullOrUndefined(extremes) ? $QuickView_$Client_UI_MainView_Windows_$ExtendedChartWindow$ChartFilters.$selectAll : (cumulative ? $QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$createLineChartFilters(extremes, this.$_lineResolution) : $QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$createBarChartFilters(data, extremes)));
			this.$clearStats();
			this.$updateTopStats(filters.topInfoFilter, statsParameters);
			this.$updateBottomStats(filters.statsFilter, statsParameters);
			if (this.$_displayMode === 1 && ss.isValue(this.$_chart) && false === this.$_displayMode_RelatedIndicators_Resized) {
				// Resize the chart only once to avoid glitches after that
				this.$_displayMode_RelatedIndicators_Resized = true;
				// The chart must resize after the new elements are rendered so use an async call.
				// CAUTION Timeouts smaller than 500ms does not work well on iPhone 5
				window.setTimeout(ss.mkdel(this.$_chart, this.$_chart.onResize), 500);
			}
		},
		$updateTopStats: function(filter, parameters) {
			JS.ArgumentHelper.notNull(filter, 'filter');
			JS.ArgumentHelper.notNull(parameters, 'parameters');
			var panel = this.$panelTopStats;
			var data = parameters.data;
			var itemList = ss.safeCast(data.get_dataPoints(), ss.IList) || Enumerable.from(data.get_dataPoints()).toArray();
			var valueGetter = parameters.valueGetter;
			var topInfo = $QuickView_$Client_UI_MainView_Windows_$ExtendedChartWindow$TopInfo.$ctor();
			var $t1 = Enumerable.from(itemList).where(filter.predicate).getEnumerator();
			try {
				while ($t1.moveNext()) {
					var item = $t1.current();
					if (ss.isNullOrUndefined(topInfo.first)) {
						topInfo.first = item;
					}
					topInfo.last = item;
					if (ss.isNullOrUndefined(topInfo.max) || valueGetter(topInfo.max) < valueGetter(item)) {
						topInfo.max = item;
					}
					if (ss.isNullOrUndefined(topInfo.min) || valueGetter(topInfo.min) > valueGetter(item)) {
						topInfo.min = item;
					}
				}
			}
			finally {
				$t1.dispose();
			}
			var indicator = parameters.indicator;
			if (ss.isValue(topInfo.first)) {
				panel.append(ss.formatString("<span class='item'>Fst: <span class='value'>{0}</span> (<span class='value'>{1}</span>)</span>", QuickView.Client.UI.Charts.ChartFormat.formatNumber(valueGetter(topInfo.first), data.unit, indicator.timeSeriesCurrency, indicator.settings.D, 0, null, null), $QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$formatStatsTime(topInfo.first.T, data.resolution)));
			}
			if (ss.isValue(topInfo.max)) {
				panel.append(ss.formatString("<span class='item'>Hi: <span class='value'>{0}</span> (<span class='value'>{1}</span>)</span>", QuickView.Client.UI.Charts.ChartFormat.formatNumber(valueGetter(topInfo.max), data.unit, indicator.timeSeriesCurrency, indicator.settings.D, 0, null, null), $QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$formatStatsTime(topInfo.max.T, data.resolution)));
			}
			if (ss.isValue(topInfo.min)) {
				panel.append(ss.formatString("<span class='item'>Lo: <span class='value'>{0}</span> (<span class='value'>{1}</span>)</span>", QuickView.Client.UI.Charts.ChartFormat.formatNumber(valueGetter(topInfo.min), data.unit, indicator.timeSeriesCurrency, indicator.settings.D, 0, null, null), $QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$formatStatsTime(topInfo.min.T, data.resolution)));
			}
			if (ss.isValue(topInfo.last)) {
				// Mantis 0006678: A complete data should always be displayed for the last point
				// even if the resolution is monthly/yearly
				// However, this should be done only when the last date is available; otherwise,
				// displaying the full date would be incorrect
				var lastValueTimeResolution = Math.min(data.resolution, 5);
				var lastValueTime = Enumerable.from(parameters.highResData.get_dataPoints()).select(function(x) {
					return x.T;
				}).last();
				panel.append(ss.formatString("<span class='item'>Lst: <span class='value'>{0}</span> (<span class='value'>{1}</span>)</span>", QuickView.Client.UI.Charts.ChartFormat.formatNumber(valueGetter(topInfo.last), data.unit, indicator.timeSeriesCurrency, indicator.settings.D, 0, null, null), $QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$formatStatsTime(lastValueTime, lastValueTimeResolution)));
			}
			panel.toggleClass('zoomed', false === filter.minAndMaxBoundReached);
		},
		$updateBottomStats: function (filter, parameters) {
			JS.ArgumentHelper.notNull(filter, 'filter');
			JS.ArgumentHelper.notNull(parameters, 'parameters');
			var panel = this.$panelBottomStats;
			panel.toggleClass('zoomed', false === filter.minAndMaxBoundReached);
			var indicator = parameters.indicator;
			// Stats that can be displayed for both percentage and currency values
			if (QuickView.Client.Models.Charts.Indicator.containsReturns(indicator) && parameters.cumulative) {
				// Mean and median are meaningless for cumulative data
			}
			else {
				var data = parameters.data;
				var stats = QuickView.Client.Algorithms.Stats.StatAlgorithms.calculateUniversalStats(Enumerable.from(data.get_dataPoints()).where(filter.predicate).select(function(x) {
					return parameters.valueGetter(x);
				}).toArray());
				// 2014-02-20 Dal - Must be in alphabetic order
				panel.append(ss.formatString($QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$stats_DefaultTemplate, '#', stats.N.toString() + QuickView.Client.UI.Common.StatFormat.getDataPointCountSuffix(data.resolution)));
				panel.append(ss.formatString($QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$stats_DefaultTemplate, 'Mean', QuickView.Client.UI.Charts.ChartFormat.formatNumber(stats.M, data.unit, indicator.timeSeriesCurrency, indicator.settings.D, 0, null, null)));
				panel.append(ss.formatString($QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$stats_DefaultTemplate, 'Median', QuickView.Client.UI.Charts.ChartFormat.formatNumber(stats.D, data.unit, indicator.timeSeriesCurrency, indicator.settings.D, 0, null, null)));
			}
			if (ss.isValue(parameters.highResPercentageData)) {
			    var data1 = parameters.highResPercentageData;
				var stats1 = QuickView.Client.Algorithms.Stats.StatAlgorithms.calculatePercentageStats(Enumerable.from(data1.get_dataPoints()).where(filter.predicate).select(function(x1) {
					return x1.N;
				}).toArray(), data1.resolution);
				if (false === panel.is(':empty')) {
					panel.append('<hr/>');
				}
				if (filter.minAndMaxBoundReached) {
				}
				else {
					panel.append(ss.formatString("<span class='item'>[{0} - {1}]</span>", (new JS.DateTimeExt.$ctor2(new Date(ss.Int32.trunc(ss.unbox(filter.min))), 1)).format('yyyy-MM-dd'), (new JS.DateTimeExt.$ctor2(new Date(ss.Int32.trunc(ss.unbox(filter.max))), 1)).format('yyyy-MM-dd')));
				}
				panel.append(ss.formatString($QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$stats_DefaultTemplate, QuickView.Client.UI.Common.Data.DataDescription.getShortDisplayName('DataPointCount'), stats1.N.toString() + QuickView.Client.UI.Common.StatFormat.getDataPointCountSuffix(data1.resolution)));
				panel.append(ss.formatString($QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$stats_DefaultTemplate, QuickView.Client.UI.Common.Data.DataDescription.getShortDisplayName('CAGR'), QuickView.Client.UI.Common.StatFormat.field('CAGR', stats1.C, data1.resolution)));
				panel.append(ss.formatString($QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$stats_DefaultTemplate, QuickView.Client.UI.Common.Data.DataDescription.getShortDisplayName('SR'), QuickView.Client.UI.Common.StatFormat.field('SR', stats1.S, data1.resolution)));
				panel.append(ss.formatString($QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$stats_DefaultTemplate, QuickView.Client.UI.Common.Data.DataDescription.getShortDisplayName('V'), QuickView.Client.UI.Common.StatFormat.field('V', stats1.V, data1.resolution)));
				if (ss.isValue(stats1.T)) {
					// Format:  t-stat = 1.61 (pVal = 0.05 [LstVal > 0])
					// "[LstVal > 0]" is displayed only if the sign of the last value displayed in the chart
					// is different from the sign of the last value used to calculate the stat
					var tTest = stats1.T;
					// Depending on the resolution the sign of the last value displayed in the chart
					// may be different from the sign of the last value used to calculate the stat.
					// Therefore, if the sign is different it must be indicated on the chart
					var tTestSign;
					if (tTest.L > 0) {
						tTestSign = '>';
					}
					else if (tTest.L < 0) {
						tTestSign = '<';
					}
					else {
						tTestSign = '=';
					}
					panel.append(ss.formatString("<span class='item'>{0} = <span class='value'>{1}</span> ({2} = <span class='value'>{3}</span> [LstVal <span class='value'>{4}</span> 0])</span>", QuickView.Client.UI.Common.Data.DataDescription.getShortDisplayName('TStat'), QuickView.Client.UI.Common.StatFormat.unitless(tTest.T), 'PValue', QuickView.Client.UI.Common.StatFormat.unitless(tTest.P), tTestSign));
				}
				if (ss.isValue(stats1.A)) {
					var autocorrelation = stats1.A;
					panel.append(ss.formatString("<span class='item'>{0} = <span class='value'>{1}</span> (95%CI : [<span class='value'>{2:N3}</span>, <span class='value'>{3:N3}</span>])</span>", QuickView.Client.UI.Common.Data.DataDescription.getShortDisplayName('Autocorrelation'), QuickView.Client.UI.Common.StatFormat.unitless(autocorrelation.A), autocorrelation.L, autocorrelation.H));
				}
				if (this.$areBenchmarksEnabled()) {
					// CAUTION: A panel cannot be used since the parent uses flex layout to arrange and center
					// elements. Using a panel also makes the elements inside the panel not wrap due to the
					// flex layout.
					this.$panelBottomStats_BenchmarksSeparatorElement = $('<hr/>').appendTo(panel);
					if (ss.count(this.$_indicatorOptions.get_benchmarks().get_indicators()) === 1) {
						// The stats should be displayed by default; there is no need to hover over an line or bar
						this.$updateBottomStats_Benchmarks(ss.getItem(this.$_indicatorOptions.get_benchmarks().get_indicators(), 0));
					}
					else {
						// The stats will be displayed while hovering over a line or bar
						this.$updateBottomStats_Benchmarks(null);
					}
				}
				else {
					this.$panelBottomStats_BenchmarksSeparatorElement = null;
				}
			}
		},
		$updateBottomStats_Benchmarks: function(indicator) {
			if (ss.isNullOrUndefined(this.$panelBottomStats_BenchmarksSeparatorElement)) {
				return;
			}
			// Remove the elements that follow the separator element
			// CAUTION: A panel should not be used since 
			this.$panelBottomStats_BenchmarksSeparatorElement.nextAll().remove();
			if (ss.isNullOrUndefined(indicator)) {
				var chartName = ((this.$_chartType === 2) ? 'line' : 'bar');
				var message = (QuickView.Client.Common.AppEnvironment.get_isMobileDevice() ? 'Tap on a benchmark {0} to view stats' : 'Hover over a benchmark {0} to view stats');
				message = ss.formatString(message, chartName);
				message = "<span class='message'>--- " + message + ' ---</span>';
				this.$panelBottomStats.append(message);
				return;
			}
			var BenchmarkStatsNotAvailableMessage = "<span class='message'>N/A</span>";
			// The first time stats are displayed BEFORE the chart as they allocate
			// space. The chart is fitted into the remaining space.
			var extremes = (ss.isNullOrUndefined(this.$_chart) ? null : this.$_chart.getXAxisExtremes());
			var cumulative = this.$_chartType === 2;
			if (ss.isNullOrUndefined(this.$_dataHandle) || false === this.$_dataHandle.get_isDataLoaded()) {
				return;
			}
			var dataHandle = this.$_dataHandle.getDataIfLoaded();
			var benchmarkDataHandle = this.$_benchmarkDataHandleList.$getDataIfLoaded(indicator);
			if (ss.isNullOrUndefined(dataHandle) || ss.isNullOrUndefined(benchmarkDataHandle)) {
				this.$panelBottomStats.append(BenchmarkStatsNotAvailableMessage);
				return;
			}
			var data = QuickView.Client.Services.Charts.IndicatorDataBag.getChartData(dataHandle, 4);
			var benchmarkData = QuickView.Client.Services.Charts.IndicatorDataBag.getChartData(benchmarkDataHandle, 4);
			if (data.resolution !== benchmarkData.resolution) {
				this.$panelBottomStats.append(BenchmarkStatsNotAvailableMessage);
				return;
			}
			var filters = (ss.isNullOrUndefined(extremes) ? $QuickView_$Client_UI_MainView_Windows_$ExtendedChartWindow$ChartFilters.$selectAll : (cumulative ? $QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$createLineChartFilters(extremes, this.$_lineResolution) : $QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$createBarChartFilters(data, extremes)));
			var benchmarkFilters = (ss.isNullOrUndefined(extremes) ? $QuickView_$Client_UI_MainView_Windows_$ExtendedChartWindow$ChartFilters.$selectAll : (cumulative ? $QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$createLineChartFilters(extremes, this.$_lineResolution) : $QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$createBarChartFilters(benchmarkData, extremes)));
			var dataList = Enumerable.from(data.get_dataPoints()).where(filters.statsFilter.predicate);
			var benchmarkDataList = Enumerable.from(benchmarkData.get_dataPoints()).where(benchmarkFilters.statsFilter.predicate);
			var list = dataList.join(benchmarkDataList, function(x) {
				return x.T;
			}, function(x1) {
				return x1.T;
			}, function(x2, y) {
				return { item1: x2.N, item2: y.N };
			}).toArray();
			var returnList = Enumerable.from(list).select(function(x3) {
				return x3.item1;
			}).toArray();
			var benchmarkList = Enumerable.from(list).select(function(x4) {
				return x4.item2;
			}).toArray();
			var correlationValue = QuickView.Client.Algorithms.Stats.StatAlgorithms.correlation(returnList, benchmarkList, data.resolution);
			if (ss.isNullOrUndefined(correlationValue) || ss.isNullOrUndefined(correlationValue.S)) {
				this.$panelBottomStats.append(BenchmarkStatsNotAvailableMessage);
				return;
			}
			var ab = correlationValue.S;
			var html = new ss.StringBuilder();
			html.append(ss.formatString($QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$stats_DefaultTemplate, 'PrnsCor', QuickView.Client.UI.Common.StatFormat.unitless(correlationValue.V)));
			html.append(ss.formatString($QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$stats_DefaultTemplate, 'SyncCor', QuickView.Client.UI.Common.StatFormat.unitless(correlationValue.Y)));
			html.append(ss.formatString($QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$stats_DefaultTemplate, '# (&alpha;/&beta;)', ab.N.toString()));
			html.append(ss.formatString($QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$stats_DefaultTemplate, '&alpha;', QuickView.Client.UI.Common.StatFormat.unitless(ab.A)));
			html.append(ss.formatString($QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$stats_DefaultTemplate, '&beta;', QuickView.Client.UI.Common.StatFormat.unitless(ab.B)));
			var benchmarkStats = ab.S;
			if (ss.isValue(benchmarkStats)) {
				html.append(ss.formatString($QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$stats_DefaultTemplate, 'Rsq', QuickView.Client.UI.Common.StatFormat.unitless(benchmarkStats.R)));
				html.append(ss.formatString($QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$stats_DefaultTemplate, 't-stat (&alpha;)', QuickView.Client.UI.Common.StatFormat.unitless(benchmarkStats.T)));
				html.append(ss.formatString($QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$stats_DefaultTemplate, 't-stat (&beta;)', QuickView.Client.UI.Common.StatFormat.unitless(benchmarkStats.S)));
				html.append(ss.formatString($QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$stats_DefaultTemplate, 'IR', QuickView.Client.UI.Common.StatFormat.unitless(benchmarkStats.I)));
				html.append(ss.formatString($QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$stats_DefaultTemplate, 'Fund:BM PfOpt', QuickView.Client.UI.Common.StatFormat.unitless(benchmarkStats.A)));
			}
			this.$panelBottomStats.append(html.toString());
		},
		$onSwipeLeft_Chart: function(e) {
			// Since zoom-in/out uses swipe wait for up to 1 second for the swipe to complete
			window.setTimeout(ss.mkdel(this, function() {
				if (ss.isValue(this.$_chart) && this.$_chart.isZoomed()) {
					// The even should be handled by the zoomed chart
					return;
				}
				this.$toggleDataViewMode(-1);
			}), 1000);
		},
		$onSwipeRight_Chart: function(e) {
			// Since zoom-in/out uses swipe wait for up to 1 second for the swipe to complete
			window.setTimeout(ss.mkdel(this, function() {
				if (ss.isValue(this.$_chart) && this.$_chart.isZoomed()) {
					// The even should be handled by the zoomed chart
					return;
				}
				this.$toggleDataViewMode(1);
			}), 1000);
		},
		$onSwipeLeft: function(e) {
			this.$toggleDataViewMode(-1);
		},
		$onSwipeRight: function(e) {
			this.$toggleDataViewMode(1);
		},
		$indicatorOptions_BenchmarksChanged: function(sender, e) {
			this.$buttonBenchmarksViewMode.set_isVisible(this.$_indicatorOptions.get_benchmarks().showBenchmarks);
			this.$updateChartAsync();
		},
		$dataHandle_DataChanged: function(sender, e) {
			if (this.$_dataViewMode === 0 || this.$_dataViewMode === 2) {
				this.$updateChartAsync();
			}
		},
		$slippageDataHandle_DataChanged: function(sender, e) {
			if (this.$_dataViewMode === 1) {
				this.$updateChartAsync();
			}
		},
		$relatedIndicatorDataHandleList_DataChanged: function(sender, e) {
			this.$updateChartAsync();
		},
		$benchmarkDataHandleList_DataChanged: function(sender, e) {
			// If this benchmark is still in use then refresh the chart
			if (this.$areBenchmarksEnabled() && ss.contains(this.$_indicatorOptions.get_benchmarks().get_indicators(), e.indicator)) {
				this.$updateChartAsync();
			}
		},
		$toggleUnit: function() {
			var unitIndex = ss.indexOf(this.$_indicatorUnitList, this.$_displayDataUnit);
			var newUnitIndex = (unitIndex + 1) % this.$_indicatorUnitList.length;
			var newDisplayUnit = this.$_indicatorUnitList[newUnitIndex];
			this.$_displayDataUnit = newDisplayUnit;
			// Reevaluate the data
			this.$updateChartAsync();
		},
		$toggleChartType: function() {
			var newValue;
			if (this.$_chartType === 2) {
				newValue = 1;
			}
			else {
				newValue = 2;
			}
			this.$setChartType(newValue);
			if (ss.isValue(this.$buttonDataViewMode)) {
				// The button should always be enabled; when in bar mode and clicked then automatically switch to line mode
				//buttonDataViewMode.IsEnabled = _chartType == ChartType.Line;
				if (newValue === 1) {
					// Reset to the default data mode
					this.$setDataViewMode(0);
				}
			}
			// Reevaluate the data
			this.$updateChartAsync();
		},
		$setChartType: function(newValue) {
		    this.$_chartType = newValue;
		    //console.log('$_chartType', this.$_chartType);
			$QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$setChartTypeCssClass(this.$buttonChartType, this.$_chartType);
		},
		$toggleDataViewMode: function (direction) {
			if (ss.isNullOrUndefined(this.$_dataViewModeList) || this.$_dataViewModeList.length < 2) {
				return;
			}
			var currentIndex = ss.indexOf(this.$_dataViewModeList, this.$_dataViewMode);
			if (currentIndex < 0) {
				currentIndex = 0;
			}
			currentIndex += direction;
			if (currentIndex < 0) {
				currentIndex = this.$_dataViewModeList.length - 1;
			}
			else if (currentIndex >= this.$_dataViewModeList.length) {
				currentIndex = 0;
			}
			var newValue = this.$_dataViewModeList[currentIndex];
			if (newValue === 2 || newValue === 1) {
				if (this.$_chartType === 1) {
					// Switch to line mode automatically
					this.$setChartType(2);
				}
			}
			this.$setDataViewMode(newValue);
			// Reevaluate the data
			this.$updateChartAsync();
			//console.log('direction', direction, this.$_dataViewModeList, currentIndex, newValue);
		},
		$setDataViewMode: function(newValue) {
			var newCssClass;
			switch (newValue) {
				default:
				case 0: {
					newCssClass = 'returns';
					break;
				}
				case 2: {
					newCssClass = 'drawdown';
					break;
				}
				case 1: {
					newCssClass = 'slippage';
					break;
				}
			}
			this.$_dataViewMode = newValue;
			JS.UI.Controls.ControlExtensions.removeClass(JS.UI.Controls.OldButton).call(null, this.$buttonDataViewMode, 'returns drawdown slippage');
			JS.UI.Controls.ControlExtensions.addClass(JS.UI.Controls.OldButton).call(null, this.$buttonDataViewMode, newCssClass);
		},
		$toggleBenchmarkViewMode: function() {
			if (this.$_benchmarkViewMode === 1) {
				this.$_benchmarkViewMode = 2;
			}
			else {
				this.$_benchmarkViewMode = 1;
			}
			JS.UI.Controls.ControlExtensions.toggleClass(JS.UI.Controls.OldButton).call(null, this.$buttonBenchmarksViewMode, 'hide-benchmarks', this.$_benchmarkViewMode === 1);
			// Reevaluate the data
			this.$updateChartAsync();
		},
		$openMenu: function() {
			var resolution = ((this.$_chartType === 2) ? this.$_lineResolution : this.$_barResolution);
			this.$_table.$openDataCellMenu_Extended(this, this.$_indicator, this.$_period, resolution, this.$_displayMode === 0, this.$_relatedIndicatorList);
		},
		$openChartListMenu: function () {
		    var resolution = ((this.$_chartType === 2) ? this.$_lineResolution : this.$_barResolution);
		    this.$_table.$openDisplayedChartsMenu_Extended(this, this.$_indicator, this.$_period, resolution, this.$_displayMode === 0, this.$_relatedIndicatorList);
		},
		$selectChartDataSeries: function(indicatorID) {
			if (ss.isNullOrEmptyString(indicatorID)) {
				return;
			}
			if (ss.isNullOrUndefined(this.$_chart)) {
				return;
			}
			var indicator = QuickView.Client.Models.Charts.RuntimeChartMetadata.getIndicator(QuickView.Client.Common.AppContext.metadata, indicatorID);
			this.$_chart.selectDataSeries(indicator);
			// Raise the event manually since HC does not raise it when a series is selected programmatically
			this.$onPrimarySeriesSelected(indicator);
		},
		onResized: function(e) {
			JS.UI.Windows.Window.prototype.onResized.call(this, e);
			// Resize the chart
			if (ss.isValue(this.$_chart)) {
				// Reset the value in case no market/book/etc. is selected at the moment (thus after a market/book/etc. is selected
				// for the first time after the resize the chart should be fit again)
				this.$_displayMode_RelatedIndicators_Resized = false;
				this.$_chart.onResize();
			}
		},
		$onOpenExpandedChart: function() {
			throw new ss.NotSupportedException();
		},
		$onOpenDrawdownChart: function() {
			// TODO Implement
		},
		$onOpenSlippageChart: function() {
			// TODO Implement
		},
		$onChangeResolution: function(resolution) {
			if (this.$_chartType === 2) {
				this.$_lineResolution = resolution;
			}
			else if (this.$_chartType === 1) {
				this.$_barResolution = resolution;
			}
			this.$updateChartAsync();
		},
		$onShowRelatedIndicators: function(indicators) {
			if (ss.count(indicators) === 0) {
				return;
			}
			if (this.$_displayMode === 1) {
				// Change the list of indicators
				this.$_newRelatedIndicatorList = indicators;
				this.$updateChartAsync();
			}
			else {
				// Open the selected indicators in a new chart
				$QuickView_Client_UI_MainView_$LocalUtils.$openExtendedChart$1(this.$_table, this.$_indicator, this.$_period, this.$_chartType, 1, indicators);
			}
		},
		$onShowAllRelatedIndicators: function() {
			$QuickView_Client_UI_MainView_$LocalUtils.$openExtendedChart$1(this.$_table, this.$_indicator, this.$_period, this.$_chartType, 1, null);
		},
		$onShowTopBottomMarkets: function(mode) {
			$QuickView_Client_UI_MainView_Windows_$TopMarketsWindow.$show(this.$_indicator, this.$_period);
		}
	}, JS.UI.Windows.Window, [$QuickView_Client_UI_MainView_Grid_$IDataCellMenuListener]);
	ss.initClass($QuickView_Client_UI_MainView_Windows_$IndicatorDataHandleList, $asm, {
		add_$dataChanged: function(value) {
			this.$1$DataChangedField = ss.delegateCombine(this.$1$DataChangedField, value);
		},
		remove_$dataChanged: function(value) {
			this.$1$DataChangedField = ss.delegateRemove(this.$1$DataChangedField, value);
		},
		$onDataChanged: function(e) {
			JS.EventExtensions.fireAsync$2(QuickView.Client.Services.Charts.IndicatorEventArgs).call(null, this.$1$DataChangedField, this, e);
		},
		dispose: function() {
			var $t1 = ss.getEnumerator(this.$_itemList);
			try {
				while ($t1.moveNext()) {
					var item = $t1.current();
					item.dispose();
				}
			}
			finally {
				$t1.dispose();
			}
			this.$_itemDict = {};
			ss.clear(this.$_itemList);
		},
		$add: function(indicator, period, dataType, dataPriority) {
			JS.ArgumentHelper.notNull(indicator, 'indicator');
			if (ss.isValue(this.$_itemDict[QuickView.Client.Models.Charts.Indicator.idLower(indicator)])) {
				throw new ss.InvalidOperationException('The specified indicator is already added.');
			}
			var item = new $QuickView_Client_UI_MainView_Windows_IndicatorDataHandle(indicator, period, dataType, dataPriority);
			item.add_dataChanged(ss.mkdel(this, this.$item_DataChanged));
			this.$_itemDict[QuickView.Client.Models.Charts.Indicator.idLower(item.indicator)] = item;
			ss.add(this.$_itemList, item);
		},
		$remove: function(indicator) {
			JS.ArgumentHelper.notNull(indicator, 'indicator');
			var item = this.$_itemDict[QuickView.Client.Models.Charts.Indicator.idLower(indicator)];
			if (ss.isValue(item)) {
				item.dispose();
				delete this.$_itemDict[QuickView.Client.Models.Charts.Indicator.idLower(indicator)];
				ss.remove(this.$_itemList, item);
			}
		},
		$contains: function(indicator) {
			JS.ArgumentHelper.notNull(indicator, 'indicator');
			return ss.isValue(this.$_itemDict[QuickView.Client.Models.Charts.Indicator.idLower(indicator)]);
		},
		$getData: function(indicator) {
			JS.ArgumentHelper.notNull(indicator, 'indicator');
			var item = this.$_itemDict[QuickView.Client.Models.Charts.Indicator.idLower(indicator)];
			if (ss.isNullOrUndefined(item)) {
				throw new ss.InvalidOperationException('The specified indicator is not managed by this instance.');
			}
			return item.getData();
		},
		$getDataIfLoaded: function(indicator) {
			JS.ArgumentHelper.notNull(indicator, 'indicator');
			var item = this.$_itemDict[QuickView.Client.Models.Charts.Indicator.idLower(indicator)];
			if (ss.isNullOrUndefined(item)) {
				throw new ss.InvalidOperationException('The specified indicator is not managed by this instance.');
			}
			return item.getDataIfLoaded();
		},
		$item_DataChanged: function(sender, e) {
			var item = ss.cast(sender, $QuickView_Client_UI_MainView_Windows_IndicatorDataHandle);
			this.$onDataChanged(new QuickView.Client.Services.Charts.IndicatorEventArgs(item.indicator));
		}
	}, null, [ss.IDisposable]);
	ss.initClass($QuickView_Client_UI_MainView_Windows_$LocalWindowUtils, $asm, {});
	ss.initClass($QuickView_Client_UI_MainView_Windows_$RowCorrelationWindow, $asm, {
		get_$layout: function() {
			return ss.cast(this.layout, JS.UI.Windows.HcfWindowLayout);
		},
		onInit: function() {
			JS.UI.Windows.Window.prototype.onInit.call(this);
			this.set_flags(47);
			this.set_width(750);
			this.set_height(450);
			this.set_title(ss.formatString('Fund Statistics - {0}', this.$_period.get_name()));
			this.set_cssClass('data-window row-statistics');
			// Used as a scope for nested controls
		},
		onLoad: function() {
			JS.UI.Windows.Window.prototype.onLoad.call(this);
			this.layout = new JS.UI.Windows.HcfWindowLayout(this);
			$QuickView_Client_UI_MainView_Windows_$LocalWindowUtils.$setupHcfWindowLayout(this, this.get_$layout());
			this.$_toolbar = new JS.UI.Controls.Toolbar(this.get_$layout().get_header());
			// Display a back button on mobile devices
			if (QuickView.Client.Common.AppEnvironment.get_isMobileDevice()) {
				var buttonClose = this.$_toolbar.add(JS.UI.Controls.OldButton).call(this.$_toolbar, new JS.UI.Controls.OldButton('mobile-window-close-button'));
				// Close the window
				buttonClose.add_click(ss.mkdel(this, function(sender, e) {
					this.close();
				}));
			}
			// Create matrix
			var matrix = new $QuickView_Client_UI_MainView_Gfx_Matrix($('<div></div>').appendTo(this.get_$layout().get_content()), 10, 2);
			//
			//            // The matrix should be resize after it is displayed (thus a delay is required)
			//
			//            Dispatcher.Run(matrix.AutoFit, 500, 0.5);
		},
		onClose: function() {
			JS.UI.Windows.Window.prototype.onClose.call(this);
		}
	}, JS.UI.Windows.Window);
	ss.initClass($QuickView_Client_UI_MainView_Windows_$TopMarketsWindow, $asm, {
		get_$layout: function() {
			return ss.cast(this.layout, JS.UI.Windows.HcfWindowLayout);
		},
		onInit: function() {
			JS.UI.Windows.Window.prototype.onInit.call(this);
			this.set_flags(47);
			this.set_width(750);
			this.set_height(450);
			this.set_title(ss.formatString('Top/Bottom {3} Markets {0} - {1} [{2}]', this.$_indicator.menuInfo.A, this.$_indicator.N, this.$_period.get_name(), 10));
			this.set_cssClass('data-window');
			// Used as a scope for nested controls
			this.$updateDataAsync();
		},
		onLoad: function() {
			JS.UI.Windows.Window.prototype.onLoad.call(this);
			this.layout = new JS.UI.Windows.HcfWindowLayout(this);
			$QuickView_Client_UI_MainView_Windows_$LocalWindowUtils.$setupHcfWindowLayout(this, this.get_$layout());
			this.$_toolbar = new JS.UI.Controls.Toolbar(this.get_$layout().get_header());
			// Display a back button on mobile devices
			if (QuickView.Client.Common.AppEnvironment.get_isMobileDevice()) {
				var buttonClose = this.$_toolbar.add(JS.UI.Controls.OldButton).call(this.$_toolbar, new JS.UI.Controls.OldButton('mobile-window-close-button'));
				// Close the window
				buttonClose.add_click(ss.mkdel(this, function(sender, e) {
					this.close();
				}));
			}
		},
		onClose: function() {
			JS.UI.Windows.Window.prototype.onClose.call(this);
			if (ss.isValue(this.$_dataProviderEventSubscription)) {
				this.$_dataProviderEventSubscription.dispose();
				this.$_dataProviderEventSubscription = null;
			}
		},
		$updateDataAsync: function() {
			if (ss.isNullOrUndefined(this.$_updateDataExecutor)) {
				this.$_updateDataExecutor = new JS.Threading.PostponeExecutor.$ctor2(ss.mkdel(this, this.$updateData), 2000, true);
			}
			this.$_updateDataExecutor.execute();
		},
		$updateData: function() {
			var $state = 0, marketRelationship, indicatorDataList, k, indicator, $t1, dataBag, percentDataPoint, currencyDataPoint, longData, longDataPoint, shortData, shortDataPoint, $t2, data;
			var $sm = ss.mkdel(this, function() {
				$sm1:
				for (;;) {
					switch ($state) {
						case 0: {
							$state = -1;
							// TODO Subscribe for changes
							if (ss.isNullOrUndefined(this.$panelData)) {
								this.$panelData = $("<div class='" + ('top-bottom-markets data-panel' || '') + "'></div>").appendTo(this.get_$layout().get_content());
							}
							marketRelationship = QuickView.Client.Models.Charts.Indicator.getRelationship(this.$_indicator, 'Market');
							if (ss.isNullOrUndefined(marketRelationship)) {
								this.$panelData.text('Not markets are available for this row.');
								return;
							}
							indicatorDataList = [];
							k = 0;
							$state = 1;
							continue $sm1;
						}
						case 1: {
							$state = -1;
							if (!(k < marketRelationship.indicators.length)) {
								$state = 3;
								continue $sm1;
							}
							// Show progress
							this.$panelData.text(ss.formatString('Loading market {0} of {1}...', k + 1, marketRelationship.indicators.length));
							indicator = marketRelationship.indicators[k];
							$t1 = $QuickView_Client_UI_MainView_$LocalServices.get_$dataProvider().getIndicatorData(indicator, this.$_period, 3, 3);
							$state = 4;
							$t1.continueWith($sm);
							return;
						}
						case 4: {
							$state = -1;
							dataBag = $t1.getAwaitedResult();
							percentDataPoint = Enumerable.from(QuickView.Client.Services.Charts.IndicatorDataBag.getChartData(dataBag, 4).get_dataPoints()).lastOrDefault(null, ss.getDefaultValue(QuickView.Client.Models.Charts.ChartDataPoint));
							currencyDataPoint = Enumerable.from(QuickView.Client.Services.Charts.IndicatorDataBag.getChartData(dataBag, 3).get_dataPoints()).lastOrDefault(null, ss.getDefaultValue(QuickView.Client.Models.Charts.ChartDataPoint));
							if (ss.isNullOrUndefined(percentDataPoint) || ss.isNullOrUndefined(currencyDataPoint)) {
								// No data
								$state = 2;
								continue $sm1;
							}
							longData = ss.cast(QuickView.Client.Services.Charts.IndicatorDataBag.getDataIfAvailable$1(dataBag, 2, 16, 5), QuickView.Client.Services.Charts.IndicatorChartData);
							longDataPoint = (ss.isNullOrUndefined(longData) ? null : Enumerable.from(longData.get_dataPoints()).lastOrDefault(null, ss.getDefaultValue(QuickView.Client.Models.Charts.ChartDataPoint)));
							shortData = ss.cast(QuickView.Client.Services.Charts.IndicatorDataBag.getDataIfAvailable$1(dataBag, 2, 17, 5), QuickView.Client.Services.Charts.IndicatorChartData);
							shortDataPoint = (ss.isNullOrUndefined(shortData) ? null : Enumerable.from(shortData.get_dataPoints()).lastOrDefault(null, ss.getDefaultValue(QuickView.Client.Models.Charts.ChartDataPoint)));
							if (ss.isValue(longDataPoint) && ss.isValue(shortDataPoint)) {
								if (JS.DateTimeExt.op_GreaterThan(longDataPoint.T, shortDataPoint.T)) {
									shortDataPoint = null;
								}
								else {
									longDataPoint = null;
								}
							}
							$t2 = $QuickView_$Client_UI_MainView_Windows_$TopMarketsWindow$IndicatorData.$ctor(indicator);
							$t2.percentReturns = percentDataPoint.C;
							$t2.currencyReturns = currencyDataPoint.C;
							$t2.shortPosition = (ss.isNullOrUndefined(shortDataPoint) ? null : shortDataPoint.N);
							$t2.longPosition = (ss.isNullOrUndefined(longDataPoint) ? null : longDataPoint.N);
							data = $t2;
							indicatorDataList.push(data);
							$state = 2;
							continue $sm1;
						}
						case 2: {
							$state = -1;
							k++;
							$state = 1;
							continue $sm1;
						}
						case 3: {
							$state = -1;
							if (indicatorDataList.length === 0) {
								this.$panelData.html("<div class='no-data'>No data.</div>");
								return;
							}
							this.$_dataList = indicatorDataList;
							this.$updateTable();
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
		$updateTable: function() {
			var indicatorDataList = this.$_dataList;
			if (ss.isNullOrUndefined(indicatorDataList)) {
				return;
			}
			// Display all values in a single HTML table in order to align them
			var html = new ss.StringBuilder();
			var sortMethod = $QuickView_Client_UI_MainView_Windows_$TopMarketsWindow.$getSortMethod(this.$_sortOrder);
			indicatorDataList.sort(sortMethod);
			var topDataList = Enumerable.from(indicatorDataList).take(10).toArray();
			var bottomDataList = [];
			for (var k = indicatorDataList.length - 1; k >= 0 && k >= indicatorDataList.length - 10; k--) {
				bottomDataList.push(indicatorDataList[k]);
			}
			var topTotal = $QuickView_Client_UI_MainView_Windows_$TopMarketsWindow.$calculateTotal(topDataList);
			var bottomTotal = $QuickView_Client_UI_MainView_Windows_$TopMarketsWindow.$calculateTotal(bottomDataList);
			var grandTotal = $QuickView_Client_UI_MainView_Windows_$TopMarketsWindow.$calculateTotal(indicatorDataList);
			var denominator = QuickView.Client.UI.Common.Format$Number.calculateBestDenominator$3([grandTotal.currencyReturns]);
			html.append("<table class='list'>");
			this.$displayMarkets(html, 'Top 10 mkts', topDataList, topTotal, denominator);
			html.append("<tr class='separator'></tr>");
			this.$displayMarkets(html, 'Bottom 10 mkts', bottomDataList, bottomTotal, denominator);
			html.append('</table>');
			this.$panelData.html(html.toString());
			// Handle column header clicks
			var columnPercentageReturns = JS.UI.UIEventExtensions.virtualClick(this.$panelData.find('.-id-ret-pct'), ss.mkdel(this, function(e) {
				this.$setSortOrder(0);
			}));
			var columnCurrencyReturns = JS.UI.UIEventExtensions.virtualClick(this.$panelData.find('.-id-ret-cur'), ss.mkdel(this, function(e1) {
				this.$setSortOrder(1);
			}));
			var columnPositions = JS.UI.UIEventExtensions.virtualClick(this.$panelData.find('.-id-ret-pos'), ss.mkdel(this, function(e2) {
				this.$setSortOrder(2);
			}));
			var activeColumn;
			switch (this.$_sortOrder) {
				case 0: {
					activeColumn = columnPercentageReturns;
					break;
				}
				case 1: {
					activeColumn = columnCurrencyReturns;
					break;
				}
				case 2: {
					activeColumn = columnPositions;
					break;
				}
				default: {
					activeColumn = null;
					break;
				}
			}
			if (ss.isValue(activeColumn)) {
				activeColumn.addClass('active');
			}
		},
		$setSortOrder: function(sortOrder) {
			this.$_sortOrder = sortOrder;
			// Update the tabe
			this.$updateTable();
		},
		$displayMarkets: function(html, title, list, total, denominator) {
			html.append(ss.formatString("<tr><th>{0}</th><th class='column -id-ret-pct'>{1}</th><th class='column -id-ret-cur'>{2}</th><th class='column -id-ret-pos'>{3}</th></tr>", title, 'Ret (%)', 'Ret (Cy)', 'Pos'));
			html.append(ss.formatString("<tr class='total'><td>Total:</td><td class='{0}'>{1}</td><td class='{2}'>{3}</td><td class='{4}'>{5}</td></tr>", QuickView.Client.UI.Common.Styles.number(total.percentReturns), QuickView.Client.UI.Common.Format$Number.percent(total.percentReturns), QuickView.Client.UI.Common.Styles.number(total.currencyReturns), QuickView.Client.UI.Common.Format$Number.currency$1(total.currencyReturns, this.$_indicator.timeSeriesCurrency, denominator), QuickView.Client.UI.Common.Styles.number($QuickView_$Client_UI_MainView_Windows_$TopMarketsWindow$IndicatorData.$getNetPosition(total)), QuickView.Client.UI.Common.Format$Number.qrUnit($QuickView_$Client_UI_MainView_Windows_$TopMarketsWindow$IndicatorData.$getNetPosition(total))));
			var $t1 = ss.getEnumerator(list);
			try {
				while ($t1.moveNext()) {
					var item = $t1.current();
					html.append(ss.formatString("<tr><td>{0}</td><td class='{1}'>{2}</td><td class='{3}'>{4}</td><td class='{5}'>{6}</td></tr>", item.indicator.N, QuickView.Client.UI.Common.Styles.number(item.percentReturns), QuickView.Client.UI.Common.Format$Number.percent(item.percentReturns), QuickView.Client.UI.Common.Styles.number(item.currencyReturns), QuickView.Client.UI.Common.Format$Number.currency$1(item.currencyReturns, item.indicator.timeSeriesCurrency, denominator), QuickView.Client.UI.Common.Styles.number($QuickView_$Client_UI_MainView_Windows_$TopMarketsWindow$IndicatorData.$getNetPosition(item)), QuickView.Client.UI.Common.Format$Number.qrUnit($QuickView_$Client_UI_MainView_Windows_$TopMarketsWindow$IndicatorData.$getNetPosition(item))));
				}
			}
			finally {
				$t1.dispose();
			}
		}
	}, JS.UI.Windows.Window);
	ss.initEnum($QuickView_Client_UI_MainView_Windows_ExtendedChartDisplayMode, $asm, { default$1: 0, relatedIndicators: 1 });
	ss.initClass($QuickView_Client_UI_MainView_Windows_IndicatorDataHandle, $asm, {
		add_dataChanged: function(value) {
			this.$1$DataChangedField = ss.delegateCombine(this.$1$DataChangedField, value);
		},
		remove_dataChanged: function(value) {
			this.$1$DataChangedField = ss.delegateRemove(this.$1$DataChangedField, value);
		},
		$onDataChanged: function(e) {
			JS.EventExtensions.fireAsync(this.$1$DataChangedField, this, e);
		},
		get_isDataLoaded: function() {
			return ss.isValue(this.$_dataBag);
		},
		getData: function() {
			var $state = 0, $tcs = new ss.TaskCompletionSource(), $t1;
			var $sm = ss.mkdel(this, function() {
				try {
					$sm1:
					for (;;) {
						switch ($state) {
							case 0: {
								$state = -1;
								if (ss.isNullOrUndefined(this.$_dataBag)) {
									$t1 = $QuickView_Client_UI_MainView_$LocalServices.get_$dataProvider().getIndicatorData(this.indicator, this.period, this.dataType, this.dataPriority);
									$state = 2;
									$t1.continueWith($sm);
									return;
								}
								$state = 1;
								continue $sm1;
							}
							case 2: {
								$state = -1;
								this.$_dataBag = $t1.getAwaitedResult();
								$state = 1;
								continue $sm1;
							}
							case 1: {
								$state = -1;
								if (ss.isNullOrUndefined(this.$_eventSubscription)) {
									this.$_eventSubscription = $QuickView_Client_UI_MainView_$LocalServices.get_$dataProvider().subscribeDataChanged(this.indicator, this.period.metaResolution, ss.mkdel(this, this.$dataProvider_IndicatorDataChanged));
								}
								$tcs.setResult(this.$_dataBag);
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
		getDataIfLoaded: function() {
			return this.$_dataBag;
		},
		$dataProvider_IndicatorDataChanged: function(sender, e) {
			// Clear cached data
			this.$_dataBag = null;
			this.$onDataChanged(ss.EventArgs.Empty);
		},
		dispose: function() {
			this.$_dataBag = null;
			if (ss.isValue(this.$_eventSubscription)) {
				this.$_eventSubscription.dispose();
				this.$_eventSubscription = null;
			}
		}
	}, null, [ss.IDisposable]);
	ss.setMetadata($QuickView_$Client_UI_MainView_Grid_$ChartRowManager$RowsChangedPendingActions, { enumFlags: true });
	(function() {
		$QuickView_$Client_UI_MainView_Grid_$ChartRowManager$IndicatorComparer.$indicatorIDOrder_NetGross = ['QR-Net', 'QR-Gross'];
		$QuickView_$Client_UI_MainView_Grid_$ChartRowManager$IndicatorComparer.$indicatorIDOrder_GrossNet = ['QR-Gross', 'QR-Net'];
		$QuickView_$Client_UI_MainView_Grid_$ChartRowManager$IndicatorComparer.$netGross = new $QuickView_$Client_UI_MainView_Grid_$ChartRowManager$IndicatorComparer(1);
		$QuickView_$Client_UI_MainView_Grid_$ChartRowManager$IndicatorComparer.$grossNet = new $QuickView_$Client_UI_MainView_Grid_$ChartRowManager$IndicatorComparer(2);
	})();
	(function() {
		$QuickView_$Client_UI_MainView_Windows_$ExtendedChartWindow$ChartValueFilter.$selectAll = $QuickView_$Client_UI_MainView_Windows_$ExtendedChartWindow$ChartValueFilter.$ctor(function(x, index) {
			return true;
		}, null, null, true, true);
	})();
	(function() {
		$QuickView_$Client_UI_MainView_Windows_$ExtendedChartWindow$ChartFilters.$selectAll = $QuickView_$Client_UI_MainView_Windows_$ExtendedChartWindow$ChartFilters.$ctor($QuickView_$Client_UI_MainView_Windows_$ExtendedChartWindow$ChartValueFilter.$selectAll, $QuickView_$Client_UI_MainView_Windows_$ExtendedChartWindow$ChartValueFilter.$selectAll);
	})();
	(function() {
		$QuickView_Client_UI_MainView_$LocalServices.$_dataProvider = null;
	})();
	(function() {
		$QuickView_Client_UI_MainView_Windows_$ExtendedChartWindow.$stats_DefaultTemplate = "<span class='item'>{0} = <span class='value'>{1}</span></span>";
	})();
	(function() {
		$QuickView_Client_UI_MainView_Grid_$ChartRowHeaderCell.$shapeList = ['circle-double', 'circle-half', 'circle', 'clover', 'diamond', 'heart', 'hexagon', 'misc-3', 'pentagon', 'plus', 'square', 'star-4', 'star-5', 'star-ray-6', 'triangle'];
		$QuickView_Client_UI_MainView_Grid_$ChartRowHeaderCell.$_sanitizedMenuRootNameDict = null;
		$QuickView_Client_UI_MainView_Grid_$ChartRowHeaderCell.$_positionsPeriod = null;
		$QuickView_Client_UI_MainView_Grid_$ChartRowHeaderCell.$allFundGroupNameDict = null;
	})();
	(function() {
		$QuickView_Client_UI_MainView_Grid_$ChartRowDataCell.$primaryStats = ['DataPointCount', 'CAGR', 'SR', 'V'];
	})();
	(function() {
		$QuickView_Client_UI_MainView_Grid_$ChartRow.$_lastID = 0;
	})();
	(function() {
		$QuickView_Client_UI_MainView_Grid_$HeaderRowDataCellXAxis.$shortMonthNameList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	})();
	(function() {
		$QuickView_Client_UI_MainView_Grid_$HeaderRowDataCell.$performanceCssClassList = ['complete_value', 'positive_performance', 'negative_performance'];
		$QuickView_Client_UI_MainView_Grid_$HeaderRowDataCell.$elementCssClassList = ['outdated'];
	})();
	(function() {
		$QuickView_Client_UI_MainView_Grid_$TableLayout.$headerRowHeight = $QuickView_$Client_UI_MainView_Grid_$TableLayout$Dimension.$ctor(60, 90, 60);
		$QuickView_Client_UI_MainView_Grid_$TableLayout.$headerColumnWidth = $QuickView_$Client_UI_MainView_Grid_$TableLayout$Dimension.$ctor(130, 260, 145);
		$QuickView_Client_UI_MainView_Grid_$TableLayout.$dataRowHeight = $QuickView_$Client_UI_MainView_Grid_$TableLayout$Dimension.$ctor(76, 114, 76);
		$QuickView_Client_UI_MainView_Grid_$TableLayout.$dataColumnWidth = $QuickView_$Client_UI_MainView_Grid_$TableLayout$Dimension.$ctor(130, 260, 130);
		$QuickView_Client_UI_MainView_Grid_$TableLayout.$minimumFullScreenSize = { width: 388, height: 230 };
		$QuickView_Client_UI_MainView_Grid_$TableLayout.$maximumFullScreenSize = { width: 778, height: 308 };
	})();
	(function() {
		$QuickView_Client_UI_MainView_Grid_$Table.$globallyDisabledKeyList = [32];
	})();
})();
