(function() {
	'use strict';
	var $asm = {};
	global.Highcharts = global.Highcharts || {};
	ss.initAssembly($asm, 'Highcharts');
	////////////////////////////////////////////////////////////////////////////////
	// Highcharts.HighchartAxisAlign
	var $Highcharts_HighchartAxisAlign = function() {
	};
	$Highcharts_HighchartAxisAlign.__typeName = 'Highcharts.HighchartAxisAlign';
	global.Highcharts.HighchartAxisAlign = $Highcharts_HighchartAxisAlign;
	////////////////////////////////////////////////////////////////////////////////
	// Highcharts.HighchartAxisName
	var $Highcharts_HighchartAxisName = function() {
	};
	$Highcharts_HighchartAxisName.__typeName = 'Highcharts.HighchartAxisName';
	global.Highcharts.HighchartAxisName = $Highcharts_HighchartAxisName;
	////////////////////////////////////////////////////////////////////////////////
	// Highcharts.HighchartAxisType
	var $Highcharts_HighchartAxisType = function() {
	};
	$Highcharts_HighchartAxisType.__typeName = 'Highcharts.HighchartAxisType';
	global.Highcharts.HighchartAxisType = $Highcharts_HighchartAxisType;
	////////////////////////////////////////////////////////////////////////////////
	// Highcharts.HighchartChartType
	var $Highcharts_HighchartChartType = function() {
	};
	$Highcharts_HighchartChartType.__typeName = 'Highcharts.HighchartChartType';
	global.Highcharts.HighchartChartType = $Highcharts_HighchartChartType;
	////////////////////////////////////////////////////////////////////////////////
	// Highcharts.HighchartConstants
	var $Highcharts_HighchartConstants = function() {
	};
	$Highcharts_HighchartConstants.__typeName = 'Highcharts.HighchartConstants';
	global.Highcharts.HighchartConstants = $Highcharts_HighchartConstants;
	////////////////////////////////////////////////////////////////////////////////
	// Highcharts.HighchartHorizontalAlign
	var $Highcharts_HighchartHorizontalAlign = function() {
	};
	$Highcharts_HighchartHorizontalAlign.__typeName = 'Highcharts.HighchartHorizontalAlign';
	global.Highcharts.HighchartHorizontalAlign = $Highcharts_HighchartHorizontalAlign;
	////////////////////////////////////////////////////////////////////////////////
	// Highcharts.HighchartOptions_Chart_ResetZoomButton_RelativeTo
	var $Highcharts_HighchartOptions_Chart_ResetZoomButton_RelativeTo = function() {
	};
	$Highcharts_HighchartOptions_Chart_ResetZoomButton_RelativeTo.__typeName = 'Highcharts.HighchartOptions_Chart_ResetZoomButton_RelativeTo';
	global.Highcharts.HighchartOptions_Chart_ResetZoomButton_RelativeTo = $Highcharts_HighchartOptions_Chart_ResetZoomButton_RelativeTo;
	////////////////////////////////////////////////////////////////////////////////
	// Highcharts.HighchartsOverflow
	var $Highcharts_HighchartsOverflow = function() {
	};
	$Highcharts_HighchartsOverflow.__typeName = 'Highcharts.HighchartsOverflow';
	global.Highcharts.HighchartsOverflow = $Highcharts_HighchartsOverflow;
	////////////////////////////////////////////////////////////////////////////////
	// Highcharts.HighchartTextAlign
	var $Highcharts_HighchartTextAlign = function() {
	};
	$Highcharts_HighchartTextAlign.__typeName = 'Highcharts.HighchartTextAlign';
	global.Highcharts.HighchartTextAlign = $Highcharts_HighchartTextAlign;
	////////////////////////////////////////////////////////////////////////////////
	// Highcharts.HighchartVerticalAlign
	var $Highcharts_HighchartVerticalAlign = function() {
	};
	$Highcharts_HighchartVerticalAlign.__typeName = 'Highcharts.HighchartVerticalAlign';
	global.Highcharts.HighchartVerticalAlign = $Highcharts_HighchartVerticalAlign;
	////////////////////////////////////////////////////////////////////////////////
	// Highcharts.HighchartZoomType
	var $Highcharts_HighchartZoomType = function() {
	};
	$Highcharts_HighchartZoomType.__typeName = 'Highcharts.HighchartZoomType';
	global.Highcharts.HighchartZoomType = $Highcharts_HighchartZoomType;
	////////////////////////////////////////////////////////////////////////////////
	// Highcharts.LineDashStyle
	var $Highcharts_LineDashStyle = function() {
	};
	$Highcharts_LineDashStyle.__typeName = 'Highcharts.LineDashStyle';
	global.Highcharts.LineDashStyle = $Highcharts_LineDashStyle;
	////////////////////////////////////////////////////////////////////////////////
	// Highcharts.TickPosition
	var $Highcharts_TickPosition = function() {
	};
	$Highcharts_TickPosition.__typeName = 'Highcharts.TickPosition';
	global.Highcharts.TickPosition = $Highcharts_TickPosition;
	ss.initEnum($Highcharts_HighchartAxisAlign, $asm, { low: 'low', middle: 'middle', high: 'high' }, true);
	ss.initEnum($Highcharts_HighchartAxisName, $asm, { x: 'x', y: 'y' }, true);
	ss.initEnum($Highcharts_HighchartAxisType, $asm, { linear: 'linear', logarithmic: 'logarithmic', datetime: 'datetime', category: 'category' }, true);
	ss.initEnum($Highcharts_HighchartChartType, $asm, { area: 'area', arearange: 'arearange', areaspline: 'areaspline', areasplinerange: 'areasplinerange', candlestick: 'candlestick', column: 'column', columnrange: 'columnrange', flags: 'flags', line: 'line', ohlc: 'ohlc', polygon: 'polygon', scatter: 'scatter', series: 'series', spline: 'spline', coloredarea: 'coloredarea' }, true);
	ss.initClass($Highcharts_HighchartConstants, $asm, {});
	ss.initEnum($Highcharts_HighchartHorizontalAlign, $asm, { left: 'left', right: 'right', center: 'center' }, true);
	ss.initEnum($Highcharts_HighchartOptions_Chart_ResetZoomButton_RelativeTo, $asm, { chart: 'chart', plot: 'plot' }, true);
	ss.initEnum($Highcharts_HighchartsOverflow, $asm, { none: 'none', justify: 'justify' }, true);
	ss.initEnum($Highcharts_HighchartTextAlign, $asm, { left: 'left', right: 'right', center: 'center' }, true);
	ss.initEnum($Highcharts_HighchartVerticalAlign, $asm, { top: 'top', middle: 'middle', bottom: 'bottom' }, true);
	ss.initEnum($Highcharts_HighchartZoomType, $asm, { x: 'x', y: 'y', XY: 'XY' }, true);
	ss.initEnum($Highcharts_LineDashStyle, $asm, { Solid: 'Solid', ShortDash: 'ShortDash', ShortDot: 'ShortDot', ShortDashDot: 'ShortDashDot', ShortDashDotDot: 'ShortDashDotDot', Dot: 'Dot', Dash: 'Dash', LongDash: 'LongDash', DashDot: 'DashDot', LongDashDot: 'LongDashDot', LongDashDotDot: 'LongDashDotDot' }, true);
	ss.initEnum($Highcharts_TickPosition, $asm, { inside: 'inside', outside: 'outside' }, true);
	(function() {
		$Highcharts_HighchartConstants.credits_None = { enabled: false };
		$Highcharts_HighchartConstants.legend_None = { enabled: false };
		$Highcharts_HighchartConstants.title_None = { text: null };
		$Highcharts_HighchartConstants.subTitle_None = { text: null };
		$Highcharts_HighchartConstants.axisTitle_None = { text: null };
	})();
})();
