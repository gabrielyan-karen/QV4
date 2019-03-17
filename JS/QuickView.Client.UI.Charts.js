(function() {
	'use strict';
	var $asm = {};
	global.QuickView = global.QuickView || {};
	global.QuickView.Client = global.QuickView.Client || {};
	global.QuickView.Client.UI = global.QuickView.Client.UI || {};
	global.QuickView.Client.UI.Charts = global.QuickView.Client.UI.Charts || {};
	ss.initAssembly($asm, 'QuickView.Client.UI.Charts');
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Charts.BarChart.DataSeriesInfo
	var $QuickView_$Client_UI_Charts_BarChart$DataSeriesInfo = function() {
		this.$1$SeriesField = null;
	};
	$QuickView_$Client_UI_Charts_BarChart$DataSeriesInfo.__typeName = 'QuickView.$Client.UI.Charts.BarChart$DataSeriesInfo';
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Charts.AreaChartColor
	var $QuickView_Client_UI_Charts_$AreaChartColor = function() {
	};
	$QuickView_Client_UI_Charts_$AreaChartColor.__typeName = 'QuickView.Client.UI.Charts.$AreaChartColor';
	$QuickView_Client_UI_Charts_$AreaChartColor.createInstance = function() {
		return $QuickView_Client_UI_Charts_$AreaChartColor.$ctor();
	};
	$QuickView_Client_UI_Charts_$AreaChartColor.$ctor = function() {
		var $this = {};
		$this.L = null;
		$this.F = null;
		return $this;
	};
	$QuickView_Client_UI_Charts_$AreaChartColor.$ctor1 = function(line) {
		var $this = $QuickView_Client_UI_Charts_$AreaChartColor.$ctor2(line, null);
		return $this;
	};
	$QuickView_Client_UI_Charts_$AreaChartColor.$ctor2 = function(line, fill) {
		var $this = {};
		$this.L = null;
		$this.F = null;
		$this.L = line;
		$this.F = fill;
		return $this;
	};
	$QuickView_Client_UI_Charts_$AreaChartColor.isInstanceOfType = function() {
		return true;
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Charts.BarChartColor
	var $QuickView_Client_UI_Charts_$BarChartColor = function() {
	};
	$QuickView_Client_UI_Charts_$BarChartColor.__typeName = 'QuickView.Client.UI.Charts.$BarChartColor';
	$QuickView_Client_UI_Charts_$BarChartColor.createInstance = function() {
		return $QuickView_Client_UI_Charts_$BarChartColor.$ctor();
	};
	$QuickView_Client_UI_Charts_$BarChartColor.$ctor = function() {
		var $this = {};
		$this.B = null;
		$this.P = null;
		$this.S = null;
		return $this;
	};
	$QuickView_Client_UI_Charts_$BarChartColor.$ctor1 = function(barColor, primaryTextColor) {
		var $this = $QuickView_Client_UI_Charts_$BarChartColor.$ctor2(barColor, primaryTextColor, null);
		return $this;
	};
	$QuickView_Client_UI_Charts_$BarChartColor.$ctor2 = function(barColor, primaryTextColor, secondaryTextColor) {
		var $this = {};
		$this.B = null;
		$this.P = null;
		$this.S = null;
		$this.B = barColor;
		$this.P = primaryTextColor;
		$this.S = secondaryTextColor;
		return $this;
	};
	$QuickView_Client_UI_Charts_$BarChartColor.isInstanceOfType = function() {
		return true;
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Charts.ChartColorSet
	var $QuickView_Client_UI_Charts_$ChartColorSet$1 = function(TChartColor) {
		var $type = function() {
		};
		$type.createInstance = function() {
			return $type.$ctor();
		};
		$type.$get$1 = function($this, value, isComplete) {
			return $type.$get($this, value >= 0, isComplete);
		};
		$type.$get = function($this, isPositive, isComplete) {
			return (isPositive ? (isComplete ? $this.positiveComplete : $this.positive) : $this.negative);
		};
		$type.$ctor = function() {
			var $this = {};
			$this.positive = ss.getDefaultValue(TChartColor);
			$this.positiveComplete = ss.getDefaultValue(TChartColor);
			$this.negative = ss.getDefaultValue(TChartColor);
			$this.hwm = ss.getDefaultValue(TChartColor);
			return $this;
		};
		$type.isInstanceOfType = function() {
			return true;
		};
		ss.registerGenericClassInstance($type, $QuickView_Client_UI_Charts_$ChartColorSet$1, [TChartColor], {}, function() {
			return null;
		}, function() {
			return [];
		});
		return $type;
	};
	$QuickView_Client_UI_Charts_$ChartColorSet$1.__typeName = 'QuickView.Client.UI.Charts.$ChartColorSet$1';
	ss.initGenericClass($QuickView_Client_UI_Charts_$ChartColorSet$1, $asm, 1);
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Charts.ChartComponents
	var $QuickView_Client_UI_Charts_$ChartComponents = function() {
	};
	$QuickView_Client_UI_Charts_$ChartComponents.__typeName = 'QuickView.Client.UI.Charts.$ChartComponents';
	$QuickView_Client_UI_Charts_$ChartComponents.$getYAxisLabelFormatter = function(unit, displayOptions) {
		if (ss.isNullOrUndefined($QuickView_Client_UI_Charts_$ChartComponents.$_yAxisLabelformatterDict)) {
			$QuickView_Client_UI_Charts_$ChartComponents.$_yAxisLabelformatterDict = {};
		}
		var key = unit.toString() + ':' + displayOptions.toString();
		var formatter = $QuickView_Client_UI_Charts_$ChartComponents.$_yAxisLabelformatterDict[key];
		if (ss.staticEquals(formatter, null)) {
			$QuickView_Client_UI_Charts_$ChartComponents.$_yAxisLabelformatterDict[key] = formatter = ss.thisFix(function(x) {
				return $QuickView_Client_UI_Charts_ChartFormat.formatNumberPlain(x.value, unit, displayOptions);
			});
		}
		return formatter;
	};
	$QuickView_Client_UI_Charts_$ChartComponents.$getBarChartDataLabelFormatter = function(unit, displayOptions, collapsed) {
		if (ss.isNullOrUndefined($QuickView_Client_UI_Charts_$ChartComponents.$_barChartDataLabelFormatterDict)) {
			$QuickView_Client_UI_Charts_$ChartComponents.$_barChartDataLabelFormatterDict = {};
		}
		var key = unit.toString() + ':' + displayOptions.toString() + ':' + collapsed.toString();
		var formatter = $QuickView_Client_UI_Charts_$ChartComponents.$_barChartDataLabelFormatterDict[key];
		if (ss.staticEquals(formatter, null)) {
			$QuickView_Client_UI_Charts_$ChartComponents.$_barChartDataLabelFormatterDict[key] = formatter = ss.thisFix(function(x) {
				return $QuickView_Client_UI_Charts_$ChartComponents.$formatBarChartValue(x, unit, displayOptions, collapsed);
			});
		}
		return formatter;
	};
	$QuickView_Client_UI_Charts_$ChartComponents.$formatBarChartValue = function(args, unit, displayOptions, collapsed) {
		var point = args.point;
		var pointTooltipInfo = point.tooltip || $QuickView_Client_UI_Charts_$ChartComponents.$emptyDataPointTooltip;
		var valueText = $QuickView_Client_UI_Charts_ChartFormat.formatNumberPlain(args.y, unit, displayOptions);
		if (false === collapsed && ss.isValue(pointTooltipInfo.A)) {
			var altValueText = $QuickView_Client_UI_Charts_ChartFormat.formatNumberPlain(pointTooltipInfo.A, unit, displayOptions);
			valueText += ' ; <span style="color:yellow;">' + altValueText + '</span>';
		}
		return valueText;
	};
	$QuickView_Client_UI_Charts_$ChartComponents.$createTooltipFormatter = function(formatter, enableTooltips) {
		return ss.thisFix(function(args) {
			if (enableTooltips.item1) {
				return formatter.call(args);
			}
			else {
				return false;
			}
		});
	};
	$QuickView_Client_UI_Charts_$ChartComponents.$tooltipFormatter = function (args) {
		var series = args.series.options;
		var seriesTooltipInfo = series.tooltip || $QuickView_Client_UI_Charts_$ChartComponents.$emptyDataSeriesTooltip;
		var point = args.point;
		var pointList = args.series.data;
		if (ss.isValue(point.tooltip) && point.tooltip.D === true) {
			return false;
		}
		if (ss.isNullOrUndefined(seriesTooltipInfo.L)) {
			seriesTooltipInfo.L = Enumerable.from(pointList).lastOrDefault(function(x) {
				return ss.isValue(x);
			}, ss.getDefaultValue(Object));
		}
		var lastPoint = seriesTooltipInfo.L;
		var cssClass = (ss.Nullable$1.ge(point.y, seriesTooltipInfo.Z) ? 'highchart_tooltip positive' : 'highchart_tooltip negative');
		var element = $("<div class='" + (cssClass || '') + "'></div>");
		if (false === ss.isNullOrEmptyString(seriesTooltipInfo.T)) {
			element.append(ss.formatString('<span style="font-size: 10px;color:#AAA;">{0}</span><br/>', seriesTooltipInfo.T));
		}
		if (ss.isValue(point.tooltip.R)) {
			// Format a drawdown point
			$QuickView_Client_UI_Charts_$ChartComponents.$formatTooltipPoint_Drawdown(element, point, ss.coalesce(seriesTooltipInfo.Z, 0), point.tooltip.S);
		}
		else {
			// Format a regular point
			$QuickView_Client_UI_Charts_$ChartComponents.$formatTooltipPoint(element, point, ss.coalesce(seriesTooltipInfo.Z, 0), ss.coalesce(seriesTooltipInfo.A, 0), false);
			if (!ss.referenceEquals(point, lastPoint)) {
				var lastPointElement = $("<div class='" + ('last' || '') + "'></div>").appendTo(element);
				$QuickView_Client_UI_Charts_$ChartComponents.$formatTooltipPoint(lastPointElement, lastPoint, ss.coalesce(seriesTooltipInfo.Z, 0), ss.coalesce(seriesTooltipInfo.A, 0), true);
			}
			{
				var tooltipInfo = point.tooltip || $QuickView_Client_UI_Charts_$ChartComponents.$emptyDataPointTooltip;
				var tooltipOptions = tooltipInfo.O || $QuickView_Client_UI_Charts_$ChartComponents.$emptyDataPointTooltipOptions;
				if (ss.isValue(tooltipInfo.W)) {
					// Display High Water Mark
					var hwm = tooltipInfo.W;
					var resolution = tooltipOptions.R;
					var hwmText = $QuickView_Client_UI_Charts_$ChartComponents.$formatTooltipValue(hwm.H, 3, tooltipOptions.C, 2, 0);
					var performanceFeesPerShareText = $QuickView_Client_UI_Charts_$ChartComponents.$formatTooltipValue(hwm.F, 3, tooltipOptions.C, 2, 0);
					var totalPerformanceFeesText = $QuickView_Client_UI_Charts_$ChartComponents.$formatTooltipValue(hwm.E, 3, tooltipOptions.C, 1, 0);
					if (ss.Nullable$1.gt(resolution, 7)) {
						// Display the name of the month; this should be the last HWM for the quarter or year
						var periodName = element.append(ss.formatString('\r\n<hr/><span style="font-size: 10px;">Last HWM ({3}):</span> <span class="positive">{0}</span>\r\n<br/><span style="font-size: 10px;">Last perf fee ({3}):</span> <span class="positive">{1}</span>\r\n<br/><span style="font-size: 10px;">Total perf fee for the {4}:</span> <span class="positive">{2}</span>\r\n', hwmText, performanceFeesPerShareText, totalPerformanceFeesText, hwm.T.format('MMM'), QuickView.Client.UI.Common.Data.DataDescription.getName$2(ss.unbox(resolution)).toLowerCase()));
					}
					else {
						element.append(ss.formatString('\r\n<hr/><span style="font-size: 10px;">HWM:</span> <span class="positive">{0}</span>\r\n<br/><span style="font-size: 10px;">Perf fee:</span> <span class="positive">{1}</span>\r\n<br/><span style="font-size: 10px;">Total perf fee:</span> <span class="positive">{2}</span>\r\n', hwmText, performanceFeesPerShareText, totalPerformanceFeesText));
					}
				}
			}
		}
		// TODO Show missing data
		// "GetHtml" returns the content so the element must be wrapped before getting the value
		return element.wrap('<div></div>').parent().html();
	};
	$QuickView_Client_UI_Charts_$ChartComponents.$formatTooltipPoint = function(element, point, zeroValue, altZeroValue, isLastPoint) {
		var tooltipInfo = point.tooltip || $QuickView_Client_UI_Charts_$ChartComponents.$emptyDataPointTooltip;
		var tooltipOptions = tooltipInfo.O || $QuickView_Client_UI_Charts_$ChartComponents.$emptyDataPointTooltipOptions;
		var name = JS.StringExtensions.or(tooltipInfo.N, point.name);
		element.append(ss.formatString('<span style="font-size: 10px;">{1}: {0}</span><br/>', name, (isLastPoint ? 'Lst' : 'Cur')));
		// TODO Display info about the last point:
		// - All units
		element.append(ss.formatString("<span class='{1}'>{0}</span>", $QuickView_Client_UI_Charts_$ChartComponents.$formatTooltipValue(point.y, tooltipOptions.U, tooltipOptions.C, tooltipOptions.O, ((tooltipOptions.YS === true) ? 1 : 0)), QuickView.Client.UI.Common.Styles.number$1(point.y, zeroValue)));
		if (ss.isValue(tooltipInfo.A)) {
			element.append(ss.formatString(" (<span class='{1}'>{0}</span>)", $QuickView_Client_UI_Charts_$ChartComponents.$formatTooltipValue(tooltipInfo.A, tooltipOptions.U, tooltipOptions.C, tooltipOptions.O, ((tooltipOptions.AS === true) ? 1 : 0)), QuickView.Client.UI.Common.Styles.number$1(tooltipInfo.A, altZeroValue)));
		}
	};
	$QuickView_Client_UI_Charts_$ChartComponents.$formatTooltipPoint_Drawdown = function(element, point, zeroValue, stats) {
		var tooltipInfo = point.tooltip || $QuickView_Client_UI_Charts_$ChartComponents.$emptyDataPointTooltip;
		var tooltipOptions = tooltipInfo.O || $QuickView_Client_UI_Charts_$ChartComponents.$emptyDataPointTooltipOptions;
		var name = JS.StringExtensions.or(tooltipInfo.N, point.name);
		element.append(ss.formatString('<span style="font-size: 10px;">Cur: {0}</span><br/>', name));
		element.append(ss.formatString("<table>\r\n<tr><td style='font-size:10px;'>Drawdown</td><td style='text-align:right;padding-left:5px;' class='{1}'>{0}</td></tr>\r\n<tr><td style='font-size:10px;'>Returns</td><td style='text-align:right;padding-left:5px;' class='{3}'>{2}</td></tr>\r\n<tr><td style='font-size:10px;'>Max drd</td><td style='text-align:right;padding-left:5px;' class='{5}'>{4}</td></tr>\r\n<tr style='font-size:10px;'><td>Break-even</td><td style='text-align:right;padding-left:5px;'>drd:{6}d (cal:{7}d)</td></tr>\r\n<tr style='font-size:10px;'><td>Dates</td><td style='text-align:right;padding-left:5px;'>{8} - {9}</td></tr>\r\n</table>", $QuickView_Client_UI_Charts_$ChartComponents.$formatTooltipValue(point.y, tooltipOptions.U, tooltipOptions.C, tooltipOptions.O, ((tooltipOptions.YS === true) ? 1 : 0)), QuickView.Client.UI.Common.Styles.number$1(point.y, zeroValue), $QuickView_Client_UI_Charts_$ChartComponents.$formatTooltipValue(point.tooltip.R.C, tooltipOptions.U, tooltipOptions.C, tooltipOptions.O, ((tooltipOptions.YS === true) ? 1 : 0)), QuickView.Client.UI.Common.Styles.number$1(point.tooltip.R.C, zeroValue), $QuickView_Client_UI_Charts_$ChartComponents.$formatTooltipValue(point.tooltip.S.M.V, tooltipOptions.U, tooltipOptions.C, tooltipOptions.O, ((tooltipOptions.YS === true) ? 1 : 0)), QuickView.Client.UI.Common.Styles.number$1(point.tooltip.S.M.V, zeroValue), point.tooltip.S.T, point.tooltip.S.C, point.tooltip.S.S.format('yyyy/MM/dd'), point.tooltip.S.E.format('yyyy/MM/dd')));
	};
	$QuickView_Client_UI_Charts_$ChartComponents.$formatTooltipValue = function (value, unit, currency, displayOptions, formatOptions) {
		return $QuickView_Client_UI_Charts_ChartFormat.formatNumber(value, unit, currency, displayOptions, formatOptions, null, null);
	};
	$QuickView_Client_UI_Charts_$ChartComponents.$collapsedChartTooltipPositioner = function(args, boxWidth, boxHeight, point) {
		var chart = args.chart;
		var x = 5;
		var y = -boxHeight;
		if (ss.isValue(chart)) {
			var renderTo = chart.renderTo;
			if (ss.isValue(renderTo)) {
				var renderToObj = $(renderTo);
				// Make sure the tooltip will not go outside of the screen
				// The tooltip should be displayed BELOW the chart becuase of the following:
				// - Should not obstruct the view of the chart
				// - Lower rows has LOWER z-index than higher rows; this is done by reversing the index by using
				//   "display" : "flex". The reason for the reversed index is that on desktop it is possible to
				//   scroll down and to hide some of the rows. In order the tooltip of the top row to be visible
				//   it should be displayed below the row.
				var containerOffset = renderToObj.offset();
				var containerHeight = renderToObj.height();
				var panel = QuickView.Client.UI.Common.UIElements.get_grid();
				var panelOffset = panel.offset();
				var panelWidth = panel.width();
				var panelHeight = panel.height();
				var panelRight = panelOffset.left + panelWidth;
				var tooltipRight = containerOffset.left + boxWidth + x;
				if (tooltipRight > panelRight) {
					x -= tooltipRight - panelRight;
				}
				y = containerHeight - 4;
				var tooltipBottom = containerOffset.top + y + boxHeight;
				if (tooltipBottom > panelOffset.top + panelHeight) {
					// "y" CANNOT be negative since the row above has HIGHER z-index (z-indeces are reversed)
					// and therefore the portion of the tooltip below zero would not be visible.
					y = 0;
					//  tooltipBottom - (panelOffset.top + panelHeight);
					// Move the tooltip to the left the chart since it overlaps the current chart and also
					// appear below the chart to the right if the tooltip is too large.
					// If it is below the chart - it appears below the charts since they are rendered later and
					// have higher priority on the z-axis.
					x = -boxWidth;
					var tooltipLeft = containerOffset.left + x;
					if (tooltipLeft < panelOffset.left) {
						x += panelOffset.left - tooltipLeft;
					}
				}
			}
		}
		return { x: x, y: y };
	};
	$QuickView_Client_UI_Charts_$ChartComponents.$tooltipPositioner = function(args, boxWidth, boxHeight, point) {
		// Set up the variables
		var chart = args.chart;
		var plotLeft = chart.plotLeft;
		var plotTop = chart.plotTop;
		var plotWidth = chart.plotWidth;
		var plotHeight = chart.plotHeight;
		var distance = 30;
		var pointX = point.plotX;
		var pointY = point.plotY;
		var x = pointX + plotLeft + (chart.inverted ? distance : (-boxWidth - distance));
		var y = pointY - boxHeight + plotTop;
		// Center tooltip on the y-axis
		y = plotTop + ss.Int32.div(plotHeight - boxHeight, 2);
		// It is too far to the left, adjust it
		if (x < 7) {
			x = plotLeft + Math.max(pointX, 0) + distance;
		}
		// Test to see if the tooltip is too far to the right,
		// if it is, move it back to be inside and then up to not cover the point.
		if (x + boxWidth > plotLeft + plotWidth) {
			x -= x + boxWidth - (plotLeft + plotWidth);
		}
		return { x: x, y: y };
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Charts.ChartConstants
	var $QuickView_Client_UI_Charts_$ChartConstants = function() {
	};
	$QuickView_Client_UI_Charts_$ChartConstants.__typeName = 'QuickView.Client.UI.Charts.$ChartConstants';
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Charts.ChartStyles
	var $QuickView_Client_UI_Charts_$ChartStyles = function() {
	};
	$QuickView_Client_UI_Charts_$ChartStyles.__typeName = 'QuickView.Client.UI.Charts.$ChartStyles';
	$QuickView_Client_UI_Charts_$ChartStyles.$barTextStyle = function(chartMode) {
		if (chartMode === 1) {
			return { fontSize: '7pt' };
		}
		else if (chartMode === 2) {
			return { fontSize: '8pt' };
		}
		else {
			return {};
		}
	};
	$QuickView_Client_UI_Charts_$ChartStyles.$tooltipCssClass = function(value) {
		if (ss.isNullOrUndefined(value)) {
			return null;
		}
		else {
			return (ss.Nullable$1.ge(value, 0) ? 'highcharts-tooltip positive' : 'highcharts-tooltip negative');
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Charts.ColorSetCollection
	var $QuickView_Client_UI_Charts_$ColorSetCollection$1 = function(TColorSet) {
		var $type = function() {
		};
		$type.$get = function($this, index) {
			JS.ArgumentHelper.positiveOrDefault(index, 'index');
			return ss.getItem($this._colors, index % ss.count($this._colors));
		};
		$type.$ctor1 = function(colors) {
			var $this = $type.$ctor(colors);
			return $this;
		};
		$type.$ctor = function(colors) {
			var $this = {};
			$this._colors = null;
			JS.ArgumentHelper.notNull(colors, 'colors');
			$this._colors = colors;
			return $this;
		};
		$type.isInstanceOfType = function() {
			return true;
		};
		ss.registerGenericClassInstance($type, $QuickView_Client_UI_Charts_$ColorSetCollection$1, [TColorSet], {}, function() {
			return null;
		}, function() {
			return [];
		});
		return $type;
	};
	$QuickView_Client_UI_Charts_$ColorSetCollection$1.__typeName = 'QuickView.Client.UI.Charts.$ColorSetCollection$1';
	ss.initGenericClass($QuickView_Client_UI_Charts_$ColorSetCollection$1, $asm, 1);
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Charts.DataSeriesInfo
	var $QuickView_Client_UI_Charts_$DataSeriesInfo = function() {
	};
	$QuickView_Client_UI_Charts_$DataSeriesInfo.__typeName = 'QuickView.Client.UI.Charts.$DataSeriesInfo';
	$QuickView_Client_UI_Charts_$DataSeriesInfo.createInstance = function() {
		return $QuickView_Client_UI_Charts_$DataSeriesInfo.$ctor();
	};
	$QuickView_Client_UI_Charts_$DataSeriesInfo.$ctor = function() {
		var $this = {};
		$this.S = null;
		$this.X = null;
		$this.Y = null;
		$this.P = null;
		return $this;
	};
	$QuickView_Client_UI_Charts_$DataSeriesInfo.isInstanceOfType = function() {
		return true;
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Charts.HighchartsExtensions
	var $QuickView_Client_UI_Charts_$HighchartsExtensions = function() {
	};
	$QuickView_Client_UI_Charts_$HighchartsExtensions.__typeName = 'QuickView.Client.UI.Charts.$HighchartsExtensions';
	$QuickView_Client_UI_Charts_$HighchartsExtensions.$setDefaults = function(obj) {
		obj.legend = Highcharts.HighchartConstants.legend_None;
		obj.credits = Highcharts.HighchartConstants.credits_None;
		obj.title = Highcharts.HighchartConstants.title_None;
		obj.subTitle = Highcharts.HighchartConstants.subTitle_None;
		return obj;
	};
	$QuickView_Client_UI_Charts_$HighchartsExtensions.$setDefaults$1 = function(obj) {
		obj.backgroundColor = 'transparent'.toString();
		obj.animation = false;
		return obj;
	};
	$QuickView_Client_UI_Charts_$HighchartsExtensions.$setChartMode = function(obj, mode) {
		if (mode === 1) {
			obj.spacing = $QuickView_Client_UI_Charts_$HighchartsExtensions.$noSpacing;
		}
		else {
			obj.spacingTop = 20;
			obj.spacingBottom = 5;
			obj.spacingLeft = 0;
			obj.spacingRight = 0;
			obj.zoomType = 'x';
			// HC never displays "Reset zoom" when it navigator is enabled;
			// this is true for line charts; the workaround requires using
			// some HC internals thus a more reliable approach is to use
			// an external button
			//obj.ResetZoomButton = ChartConstants.DefaultResetZoomButton;
			obj.resetZoomButton = $QuickView_Client_UI_Charts_$ChartConstants.$disabledResetZoomButton;
		}
		obj.borderRadius = 0;
		return obj;
	};
	$QuickView_Client_UI_Charts_$HighchartsExtensions.$setDefaults$6 = function(T) {
		return function(obj) {
			obj.gridLineWidth = 0;
			obj.lineWidth = 1;
			obj.tickWidth = 1;
			if (ss.isNullOrUndefined(obj.labels)) {
				obj.labels = {};
			}
			obj.labels.enabled = true;
			if (ss.isNullOrUndefined(obj.labels.style)) {
				obj.labels.style = {};
			}
			obj.labels.style.color = $QuickView_Client_UI_Charts_$ChartStyles.$axisLabelColor;
			return obj;
		};
	};
	$QuickView_Client_UI_Charts_$HighchartsExtensions.$setXAxisChartMode = function(T) {
		return function(obj, mode, intraday) {
			if (mode === 2) {
				if (intraday) {
					// The time zone must be displayed for intraday resolution
					obj.title = { align: 'high', text: 'Time zone: ' + JS.TimeZoneInfo.get_local().name, margin: 28, style: { fontSize: '7pt', fontWeight: 'normal'.toString() } };
				}
			}
			else {
				$QuickView_Client_UI_Charts_$HighchartsExtensions.$hide(T).call(null, obj);
			}
			return obj;
		};
	};
	$QuickView_Client_UI_Charts_$HighchartsExtensions.$setYAxisChartMode = function(T) {
		return function(obj, mode, multipleUnits) {
			return $QuickView_Client_UI_Charts_$HighchartsExtensions.$setYAxisChartMode$2(T).call(null, obj, mode, multipleUnits, null);
		};
	};
	$QuickView_Client_UI_Charts_$HighchartsExtensions.$setYAxisChartMode$1 = function(T) {
		return function(obj, mode, title) {
			return $QuickView_Client_UI_Charts_$HighchartsExtensions.$setYAxisChartMode$2(T).call(null, obj, mode, false, title);
		};
	};
	$QuickView_Client_UI_Charts_$HighchartsExtensions.$setYAxisChartMode$2 = function(T) {
		return function(obj, mode, multipleUnits, title) {
			if (mode === 2) {
				if (false === multipleUnits && ss.isNullOrEmptyString(title)) {
					obj.title = null;
				}
				else {
					obj.title = { align: 'middle', margin: 3, offset: 45, rotation: -90, text: (multipleUnits ? 'Click here to change units' : title), style: { fontSize: (multipleUnits ? '8pt' : '9pt'), fontWeight: 'normal'.toString() } };
				}
			}
			else {
				$QuickView_Client_UI_Charts_$HighchartsExtensions.$hide(T).call(null, obj);
			}
			return obj;
		};
	};
	$QuickView_Client_UI_Charts_$HighchartsExtensions.$hide = function(T) {
		return function(obj) {
			return $QuickView_Client_UI_Charts_$HighchartsExtensions.$setVisibility(T).call(null, obj, false);
		};
	};
	$QuickView_Client_UI_Charts_$HighchartsExtensions.$setVisibility = function(T) {
		return function(obj, visible) {
			obj.title = null;
			if (ss.isNullOrUndefined(obj.labels)) {
				obj.labels = {};
			}
			obj.labels.enabled = visible;
			if (false === visible) {
				obj.lineWidth = 0;
				obj.tickLength = 0;
				obj.tickWidth = 0;
				obj.minorTickLength = 0;
				obj.minorTickWidth = 0;
			}
			return obj;
		};
	};
	$QuickView_Client_UI_Charts_$HighchartsExtensions.$setDefaults$5 = function(obj) {
		// Hide the original tooltip
		obj.backgroundColor = 'transparent'.toString();
		obj.borderWidth = 0;
		obj.shadow = false;
		obj.useHTML = true;
		obj.hideDelay = 0;
		// The tooltip should not cover completely the adjacent column for the user to be able
		// to move the mouse over it and see its tooltip. Otherwise, the user moves the mouse over the tooltip
		// that covers the next column and is unable to see the column's tooltip.
		obj.positioner = ss.thisFix($QuickView_Client_UI_Charts_$ChartComponents.$tooltipPositioner);
		return obj;
	};
	$QuickView_Client_UI_Charts_$HighchartsExtensions.$applyZeroPlotLine = function(obj) {
		obj.color = $QuickView_Client_UI_Charts_$ChartStyles.$gridLineColor;
		obj.width = 1;
		obj.dashStyle = 'ShortDot';
		return obj;
	};
	$QuickView_Client_UI_Charts_$HighchartsExtensions.$setDefaults$2 = function(obj) {
		obj.marker = { enabled: false, radius: 1 };
		obj.animation = false;
		return obj;
	};
	$QuickView_Client_UI_Charts_$HighchartsExtensions.$setDefaults$4 = function(obj) {
		obj.marker = { enabled: false, radius: 1 };
		obj.animation = false;
		return obj;
	};
	$QuickView_Client_UI_Charts_$HighchartsExtensions.$setDefaults$3 = function(obj) {
		obj.grouping = false;
		obj.animation = false;
		obj.groupPadding = 0.05;
		//obj.PointPadding = 0.0;
		obj.borderWidth = 0;
		return obj;
	};
	$QuickView_Client_UI_Charts_$HighchartsExtensions.$hideNavigator = function(chart) {
		JS.ArgumentHelper.notNull(chart, 'chart');
		// HACK CAUTION This may not be compatible with future versions of Highstock
		var yAxis = chart.yAxis[0];
		var xAxis = chart.xAxis[0];
		yAxis.defaultHeight = yAxis.height;
		xAxis.defaultHeight = xAxis.height;
		yAxis.update({ height: yAxis.defaultHeight + 60 }, false);
		xAxis.update({ height: xAxis.defaultHeight + 60 });
		var scroller = chart.scroller;
		if (!!ss.isValue(scroller.xAxis)) {
			if (!!ss.isValue(scroller.xAxis.labelGroup)) {
				scroller.xAxis.labelGroup.hide();
			}
			if (!!ss.isValue(scroller.xAxis.gridGroup)) {
				scroller.xAxis.gridGroup.hide();
			}
		}
		if (!!ss.isValue(scroller.series)) {
			scroller.series.hide();
		}
		if (!!ss.isValue(scroller.scrollbar)) {
			scroller.scrollbar.hide();
		}
		if (!!ss.isValue(scroller.scrollbarGroup)) {
			scroller.scrollbarGroup.hide();
		}
		if (!!ss.isValue(scroller.navigatorGroup)) {
			scroller.navigatorGroup.hide();
		}
		if (!!ss.isValue(scroller.elementsToDestroy)) {
			$.each(ss.cast(scroller.elementsToDestroy, Array), function(index, element) {
				element.hide();
			});
		}
	};
	$QuickView_Client_UI_Charts_$HighchartsExtensions.$showNavigator = function(chart) {
		JS.ArgumentHelper.notNull(chart, 'chart');
		// HACK CAUTION This may not be compatible with future versions of Highstock
		var yAxis = chart.yAxis[0];
		var xAxis = chart.xAxis[0];
		yAxis.update({ height: yAxis.defaultHeight }, false);
		xAxis.update({ height: xAxis.defaultHeight }, false);
		var scroller = chart.scroller;
		if (!!ss.isValue(scroller.xAxis)) {
			if (!!ss.isValue(scroller.xAxis.labelGroup)) {
				scroller.xAxis.labelGroup.show();
			}
			if (!!ss.isValue(scroller.xAxis.gridGroup)) {
				scroller.xAxis.gridGroup.show();
			}
		}
		if (!!ss.isValue(scroller.series)) {
			scroller.series.show();
		}
		if (!!ss.isValue(scroller.scrollbar)) {
			scroller.scrollbar.show();
		}
		if (!!ss.isValue(scroller.scrollbarGroup)) {
			scroller.scrollbarGroup.show();
		}
		if (!!ss.isValue(scroller.navigatorGroup)) {
			scroller.navigatorGroup.show();
		}
		if (!!ss.isValue(scroller.elementsToDestroy)) {
			$.each(ss.cast(scroller.elementsToDestroy, Array), function(index, element) {
				element.show();
			});
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Charts.BarChart
	var $QuickView_Client_UI_Charts_BarChart = function(element, mode) {
		$QuickView_Client_UI_Charts_ChartBase.call(this, element, mode);
	};
	$QuickView_Client_UI_Charts_BarChart.__typeName = 'QuickView.Client.UI.Charts.BarChart';
	global.QuickView.Client.UI.Charts.BarChart = $QuickView_Client_UI_Charts_BarChart;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Charts.ChartAxisExtremes
	var $QuickView_Client_UI_Charts_ChartAxisExtremes = function() {
	};
	$QuickView_Client_UI_Charts_ChartAxisExtremes.__typeName = 'QuickView.Client.UI.Charts.ChartAxisExtremes';
	$QuickView_Client_UI_Charts_ChartAxisExtremes.$ctor = function(min, max) {
		var $this = {};
		$this.I = null;
		$this.A = null;
		$this.DI = null;
		$this.DA = null;
		$this.I = min;
		$this.A = max;
		return $this;
	};
	$QuickView_Client_UI_Charts_ChartAxisExtremes.$ctor1 = function(min, max, dataMin, dataMax) {
		var $this = {};
		$this.I = null;
		$this.A = null;
		$this.DI = null;
		$this.DA = null;
		$this.I = min;
		$this.A = max;
		$this.DI = dataMin;
		$this.DA = dataMax;
		return $this;
	};
	$QuickView_Client_UI_Charts_ChartAxisExtremes.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.UI.Charts.ChartAxisExtremes = $QuickView_Client_UI_Charts_ChartAxisExtremes;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Charts.ChartBase
	var $QuickView_Client_UI_Charts_ChartBase = function(element, mode) {
		this.$1$ZoomInField = null;
		this.$1$ZoomOutField = null;
		this.$1$ZoomField = null;
		this.$1$PrimarySeriesMouseOverField = null;
		this.$1$PrimarySeriesMouseOutField = null;
		this.$1$BenchmarkSeriesMouseOverField = null;
		this.$1$BenchmarkSeriesMouseOutField = null;
		this.$_showTooltipsOption = new (ss.makeGenericType(JS.MTuple$1, [Boolean]).$ctor1)(true);
		this.chart = null;
		this.element = null;
		this.mode = 0;
		JS.ArgumentHelper.notNull(element, 'element');
		this.element = element;
		this.mode = mode;
	};
	$QuickView_Client_UI_Charts_ChartBase.__typeName = 'QuickView.Client.UI.Charts.ChartBase';
	$QuickView_Client_UI_Charts_ChartBase.$areAxisExtremesSame = function(min, dataMin) {
		if (ss.isNullOrUndefined(min)) {
			return false;
		}
		else {
			return Math.abs(ss.unbox(min) - dataMin) < 1E-07;
		}
	};
	global.QuickView.Client.UI.Charts.ChartBase = $QuickView_Client_UI_Charts_ChartBase;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Charts.ChartData
	var $QuickView_Client_UI_Charts_ChartData$1 = function(TDataPoint) {
		var $type = function() {
		};
		$type.$ctor = function(indicator, dataPoints) {
			var $this = $type.$ctor1(indicator, dataPoints, null);
			return $this;
		};
		$type.$ctor1 = function(indicator, dataPoints, initialValue) {
			var $this = {};
			$this.I = null;
			$this.P = null;
			$this.V = null;
			JS.ArgumentHelper.notNull(indicator, 'indicator');
			JS.ArgumentHelper.notNull(dataPoints, 'dataPoints');
			$this.I = indicator;
			$this.P = dataPoints;
			$this.V = initialValue;
			return $this;
		};
		$type.isInstanceOfType = function() {
			return true;
		};
		ss.registerGenericClassInstance($type, $QuickView_Client_UI_Charts_ChartData$1, [TDataPoint], {}, function() {
			return null;
		}, function() {
			return [];
		});
		return $type;
	};
	$QuickView_Client_UI_Charts_ChartData$1.__typeName = 'QuickView.Client.UI.Charts.ChartData$1';
	ss.initGenericClass($QuickView_Client_UI_Charts_ChartData$1, $asm, 1);
	global.QuickView.Client.UI.Charts.ChartData$1 = $QuickView_Client_UI_Charts_ChartData$1;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Charts.ChartFormat
	var $QuickView_Client_UI_Charts_ChartFormat = function() {
	};
	$QuickView_Client_UI_Charts_ChartFormat.__typeName = 'QuickView.Client.UI.Charts.ChartFormat';
	$QuickView_Client_UI_Charts_ChartFormat.formatNumber = function(value, unit, currency, displayOptions, formatOptions, formatDenominator, precision) {
		formatOptions |= 2;
		if (ss.isNullOrUndefined(value)) {
			return 'N/A';
		}
		else if (ss.isNullOrUndefined(unit)) {
			return QuickView.Client.UI.Common.Format$Number.unitless$1(value, ss.coalesce(precision, 2), formatOptions, 1);
		}
		else if (unit === 4) {
			// Percent values have 4 digit precision
		    return QuickView.Client.UI.Common.Format$Number.percent$3(value, ss.coalesce(precision, 4), formatOptions);
		}
		else if (unit === 3) {
		    //var dVal = (ss.Nullable$1.div(value, 1000) < 0.01) ? value : (ss.Nullable$1.div(value, 1000));
		    //(JS.EnumExtensions.isSet(displayOptions, 1) ? ss.Nullable$1.div(value, 1000) : value)
		    var pre = $QuickView_Client_UI_Charts_ChartFormat.formatPrecision(value);
		    return QuickView.Client.UI.Common.Format$Number.currency$4((JS.EnumExtensions.isSet(displayOptions, 1) ? ss.Nullable$1.div(value, 1000) : value), ss.unbox(currency), formatOptions, (JS.EnumExtensions.isSet(displayOptions, 2) ? 1 : ss.coalesce(formatDenominator, 0)), ss.coalesce(precision, pre));
		}
		else if (unit === 5) {
			return QuickView.Client.UI.Common.Format$Number.qrUnit$3(value, ss.coalesce(precision, 4), formatOptions);
		}
		else {
			return QuickView.Client.UI.Common.Format$Number.unitless$1(value, ss.coalesce(precision, 2), formatOptions, 1);
		}
	};
	$QuickView_Client_UI_Charts_ChartFormat.formatNumberPlain = function(value, unit, displayOptions) {
		switch (unit) {
		    case 3: {
		        //var dVal = (ss.Nullable$1.div(value, 1000) < 0.01) ? value : (ss.Nullable$1.div(value, 1000));
		        var pre = $QuickView_Client_UI_Charts_ChartFormat.formatPrecision(value);
		        return QuickView.Client.UI.Common.Format$Number.unitless$1((JS.EnumExtensions.isSet(displayOptions, 1) ? ss.Nullable$1.div(value, 1000) : value), pre, 2, (JS.EnumExtensions.isSet(displayOptions, 2) ? 1 : 0));
			}
			case 4: {
				return QuickView.Client.UI.Common.Format$Number.unitless$1(ss.Nullable$1.mul(value, 100), 2, 2, 1);
			}
			case 5: {
				return QuickView.Client.UI.Common.Format$Number.unitless$1(value, 4, 2, 1);
			}
			case 2: {
				return value.toString();
			}
			default: {
				return QuickView.Client.UI.Common.Format$Number.unitless$1(value, 2, 2, 1);
			}
		}
	};

	$QuickView_Client_UI_Charts_ChartFormat.formatPrecision = function (value) {
	    try {
	        return (Math.abs(parseFloat(value.toPrecision(4))) < 1) ? 4 : 2;
	    }
	    catch(err)
	    {
	        return 2;
	    }
	};

	$QuickView_Client_UI_Charts_ChartFormat.$formatTime = function(time, resolution, showTimeZone, showYear) {
		var formatString;
		switch (resolution) {
			default:
			case 1:
			case 2:
			case 3: {
				formatString = 'MMM d h:mmtt';
				break;
			}
			case 4: {
				formatString = 'MMM d htt';
				break;
			}
			case 5: {
				formatString = 'MMM d (ddd)';
				break;
			}
			case 6: {
				formatString = 'MMM d';
				break;
			}
			case 7: {
				formatString = 'MMM yyyy';
				break;
			}
			case 8: {
				var quarterNumber = ss.Int32.div(time.get_month() - 1, 3) + 1;
				formatString = 'Q' + quarterNumber.toString() + ' yyyy';
				break;
			}
			case 9: {
				formatString = 'yyyy';
				break;
			}
		}
		if (showYear) {
			switch (resolution) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
				case 6: {
					formatString += ' yyyy';
					break;
				}
			}
		}
		var result = time.format(formatString);
		if (showTimeZone) {
			result += ((time.get_kind() === 1) ? ' (UTC)' : (' (' + JS.TimeZoneInfo.get_local().name + ')'));
		}
		return result;
	};
	global.QuickView.Client.UI.Charts.ChartFormat = $QuickView_Client_UI_Charts_ChartFormat;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Charts.ChartOptions
	var $QuickView_Client_UI_Charts_ChartOptions = function() {
		this.$1$MultipleUnitsField = false;
		this.$1$DrawdownDataField = null;
	};
	$QuickView_Client_UI_Charts_ChartOptions.__typeName = 'QuickView.Client.UI.Charts.ChartOptions';
	global.QuickView.Client.UI.Charts.ChartOptions = $QuickView_Client_UI_Charts_ChartOptions;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Charts.ChartSupplementData
	var $QuickView_Client_UI_Charts_ChartSupplementData = function() {
	};
	$QuickView_Client_UI_Charts_ChartSupplementData.__typeName = 'QuickView.Client.UI.Charts.ChartSupplementData';
	$QuickView_Client_UI_Charts_ChartSupplementData.createInstance = function() {
		return $QuickView_Client_UI_Charts_ChartSupplementData.$ctor();
	};
	$QuickView_Client_UI_Charts_ChartSupplementData.$ctor = function() {
		var $this = {};
		$this.H = null;
		$this.B = null;
		return $this;
	};
	$QuickView_Client_UI_Charts_ChartSupplementData.isInstanceOfType = function() {
		return true;
	};
	global.QuickView.Client.UI.Charts.ChartSupplementData = $QuickView_Client_UI_Charts_ChartSupplementData;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Charts.IndicatorEventArgs
	var $QuickView_Client_UI_Charts_IndicatorEventArgs = function(indicator) {
		this.I = null;
		ss.EventArgs.call(this);
		this.I = indicator;
	};
	$QuickView_Client_UI_Charts_IndicatorEventArgs.__typeName = 'QuickView.Client.UI.Charts.IndicatorEventArgs';
	global.QuickView.Client.UI.Charts.IndicatorEventArgs = $QuickView_Client_UI_Charts_IndicatorEventArgs;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Charts.LineChart
	var $QuickView_Client_UI_Charts_LineChart = function(element, mode) {
		$QuickView_Client_UI_Charts_ChartBase.call(this, element, mode);
	};
	$QuickView_Client_UI_Charts_LineChart.__typeName = 'QuickView.Client.UI.Charts.LineChart';
	global.QuickView.Client.UI.Charts.LineChart = $QuickView_Client_UI_Charts_LineChart;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Charts.SubRedChart
	var $QuickView_Client_UI_Charts_SubRedChart = function(element, mode) {
		$QuickView_Client_UI_Charts_ChartBase.call(this, element, mode);
	};
	$QuickView_Client_UI_Charts_SubRedChart.__typeName = 'QuickView.Client.UI.Charts.SubRedChart';
	$QuickView_Client_UI_Charts_SubRedChart.$addEmptyMissingPoints = function(list, start, end, resolution, intraday) {
		for (var time = start; JS.DateTimeExt.op_LessThan(time, end); time = QuickView.Client.Algorithms.TimeExtensions.advanceTime$1(time, resolution)) {
			if (resolution === 5 && QuickView.Client.Algorithms.TimeExtensions.isHoliday(time)) {
				// No missing point should be added for holidays
				continue;
			}
			// Add an empty data point
			ss.add(list, { name: $QuickView_Client_UI_Charts_ChartFormat.$formatTime((intraday ? time.toLocalTime() : time), resolution, intraday, false) });
		}
	};
	global.QuickView.Client.UI.Charts.SubRedChart = $QuickView_Client_UI_Charts_SubRedChart;
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Charts.Utils.BarChartUtils
	var $QuickView_Client_UI_Charts_Utils_$BarChartUtils = function() {
	};
	$QuickView_Client_UI_Charts_Utils_$BarChartUtils.__typeName = 'QuickView.Client.UI.Charts.Utils.$BarChartUtils';
	$QuickView_Client_UI_Charts_Utils_$BarChartUtils.$createDataSeries = function(data, period, timeInterval, resolution, unit, hwmList, mode, pointPadding, colors, showDataLabels, showIndicatorName) {
		JS.ArgumentHelper.notNull(data, 'data');
		JS.ArgumentHelper.notNull(period, 'period');
		JS.ArgumentHelper.notNull(colors, 'colors');
		var indicator = data.I;
		var isCompleteValue = QuickView.Client.Models.Charts.Indicator.isCompleteValue(indicator);
		// Local time is displayed for intraday values
		var intraday = resolution < 5;
		var highchartDataPointList = [];
		// Missing data points should be created
		var expectedDataPointTime = timeInterval.S;
		var hwmIndex = { $: 0 };
		var tooltipOptions = { YS: false === QuickView.Client.Models.Charts.Indicator.isCompleteValue(indicator), R: resolution, U: unit, C: indicator.timeSeriesCurrency, O: indicator.settings.D };
		var $t1 = ss.getEnumerator(data.P);
		try {
			while ($t1.moveNext()) {
				var item = $t1.current();
				$QuickView_Client_UI_Charts_Utils_$BarChartUtils.$addEmptyMissingPoints(highchartDataPointList, expectedDataPointTime, item.T, resolution, intraday);
				// The expected time should be equal to the next "Time" at the beginning of the next iteration
				expectedDataPointTime = QuickView.Client.Algorithms.TimeExtensions.advanceTime$1(item.T, resolution);
				var highchartDataPoint = { name: $QuickView_Client_UI_Charts_ChartFormat.$formatTime((intraday ? item.T.toLocalTime() : item.T), resolution, intraday, false), y: item.N, color: ss.makeGenericType($QuickView_Client_UI_Charts_$ChartColorSet$1, [$QuickView_Client_UI_Charts_$BarChartColor]).$get(colors, item.N >= 0, isCompleteValue).B, tooltip: { A: item.C, O: tooltipOptions } };
				highchartDataPointList.push(highchartDataPoint);
				if (ss.isValue(hwmList)) {
					var hwmDataPoint = $QuickView_Client_UI_Charts_Utils_$SharedUtils.$findHwmDataPoint(hwmList, item.T, resolution, hwmIndex);
					if (ss.isValue(hwmDataPoint)) {
						// Show HWM in the tooltip
						highchartDataPoint.color = colors.hwm.B;
						highchartDataPoint.tooltip.W = hwmDataPoint;
					}
				}
			}
		}
		finally {
			$t1.dispose();
		}
		$QuickView_Client_UI_Charts_Utils_$BarChartUtils.$addEmptyMissingPoints(highchartDataPointList, expectedDataPointTime, timeInterval.E, resolution, intraday);
		var isExtended = mode === 2;
		var dataSeries = { type: 'column', data: highchartDataPointList, dataLabels: $QuickView_Client_UI_Charts_$ChartConstants.$disabledLabels, pointPadding: pointPadding };
		dataSeries.indicatorID = indicator.I;
		dataSeries.indicatorColor = colors.positive.B;
		dataSeries.tooltip = { T: (showIndicatorName ? (indicator.menuInfo.A + ' - ' + indicator.N) : null), A: data.V };
		// The maximum number of data points for which labels can be shown; if the number of points
		// is above this number then data labels are not displayed on the bars
		var dataLabelsMaxDataPointCount = (isExtended ? 30 : 8);
		if (showDataLabels && highchartDataPointList.length <= dataLabelsMaxDataPointCount) {
			// Enable data labels
			dataSeries.dataLabels = { enabled: true, allowOverlap: true, shadow: false, inside: true, style: { fontWeight: 'normal'.toString(), fontSize: '7pt', color: colors.positive.P }, formatter: $QuickView_Client_UI_Charts_$ChartComponents.$getBarChartDataLabelFormatter(unit, indicator.settings.D, false === isExtended), autoRotation: true };
		}
		var $t2 = $QuickView_Client_UI_Charts_$DataSeriesInfo.$ctor();
		$t2.S = dataSeries;
		var result = $t2;
		return result;
	};
	$QuickView_Client_UI_Charts_Utils_$BarChartUtils.$addEmptyMissingPoints = function(list, start, end, resolution, intraday) {
		for (var time = start; JS.DateTimeExt.op_LessThan(time, end); time = QuickView.Client.Algorithms.TimeExtensions.advanceTime$1(time, resolution)) {
			if (resolution === 5 && QuickView.Client.Algorithms.TimeExtensions.isHoliday(time)) {
				// No missing point should be added for holidays
				continue;
			}
			var highchartDataPoint = { name: $QuickView_Client_UI_Charts_ChartFormat.$formatTime((intraday ? time.toLocalTime() : time), resolution, intraday, false) };
			// Add an empty data point
			ss.add(list, highchartDataPoint);
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Charts.Utils.LineChartUtils
	var $QuickView_Client_UI_Charts_Utils_$LineChartUtils = function() {
	};
	$QuickView_Client_UI_Charts_Utils_$LineChartUtils.__typeName = 'QuickView.Client.UI.Charts.Utils.$LineChartUtils';
	$QuickView_Client_UI_Charts_Utils_$LineChartUtils.$calculatePlotBands = function(resolution, start, end) {
		var $state = 0, minimumBandResolution, bandResolution, count, count1, count2, colorIndex, previousWasHoliday, result, time, nextTime, color, band;
		$sm1:
		for (;;) {
			switch ($state) {
				case 0: {
					minimumBandResolution = resolution;
					if (resolution < 5) {
						minimumBandResolution = 4;
					}
					else if (resolution < 7) {
						minimumBandResolution = 5;
					}
					else {
						minimumBandResolution = 7;
					}
					if (resolution < 5) {
						count = QuickView.Client.Algorithms.TimeUtils.difference(start, end, 5);
						if (count <= 3) {
							bandResolution = 4;
						}
						else {
							bandResolution = 5;
						}
					}
					else if (resolution === 5) {
						count1 = QuickView.Client.Algorithms.TimeUtils.difference(start, end, 7);
						if (count1 <= 3) {
							bandResolution = 5;
						}
						else {
							bandResolution = 7;
						}
					}
					else if (resolution === 6) {
						bandResolution = 7;
					}
					else if (resolution === 7) {
						count2 = QuickView.Client.Algorithms.TimeUtils.difference(start, end, 9);
						if (count2 <= 3) {
							bandResolution = 7;
						}
						else {
							bandResolution = 9;
						}
					}
					else {
						// Do not use bands
						return null;
					}
					if (bandResolution < minimumBandResolution) {
						bandResolution = minimumBandResolution;
					}
					colorIndex = 0;
					previousWasHoliday = false;
					result = [];
					if (QuickView.Client.Models.Charts.TimeSeriesResolutionExtensions.isIntraday(resolution) && bandResolution === 5) {
						// Do NOT change the start and end times as they are already aligned to the trading
						// session start and end times
					}
					else {
						start = QuickView.Client.Algorithms.TimeExtensions.roundTime$1(start, bandResolution);
						end = QuickView.Client.Algorithms.TimeExtensions.roundTime$1(end, bandResolution);
					}
					time = start;
					$state = 1;
					continue $sm1;
				}
				case 1: {
					if (!JS.DateTimeExt.op_LessThan(time, end)) {
						$state = 2;
						continue $sm1;
					}
					nextTime = QuickView.Client.Algorithms.TimeExtensions.advanceTime$1(time, bandResolution);
					// Holiday bands begins on the day BEFORE the holiday and ends on the last day of the holiday
					if (bandResolution === 5 && QuickView.Client.Algorithms.TimeExtensions.isHoliday(nextTime)) {
						if (previousWasHoliday) {
							// Extend the previous band instead
							result[result.length - 1].to = nextTime.toDateTime().valueOf();
							$state = 3;
							continue $sm1;
						}
						else {
							previousWasHoliday = true;
							color = $QuickView_Client_UI_Charts_$ChartConstants.$plotBandColor_Holiday;
						}
					}
					else {
						previousWasHoliday = false;
						color = $QuickView_Client_UI_Charts_$ChartConstants.$plotBandColors[colorIndex++ % $QuickView_Client_UI_Charts_$ChartConstants.$plotBandColors.length];
					}
					band = { from: time.toDateTime().valueOf(), to: nextTime.toDateTime().valueOf(), color: color };
					result.push(band);
					$state = 3;
					continue $sm1;
				}
				case 3: {
					time = nextTime;
					$state = 1;
					continue $sm1;
				}
				case 2: {
					return result;
				}
				default: {
					break $sm1;
				}
			}
		}
	};
	$QuickView_Client_UI_Charts_Utils_$LineChartUtils.$createDataSeries = function (data, period, resolution, unit, hwmList, mode, chartType, colors, showIndicatorName) {
	    //console.log('createDataSeries', data, period, resolution, unit, hwmList, mode, chartType, colors, showIndicatorName);
		JS.ArgumentHelper.notNull(data, 'data');
		JS.ArgumentHelper.notNull(period, 'period');
		JS.ArgumentHelper.notNull(colors, 'colors');
		var indicator = data.I;
		var isCompleteValue = QuickView.Client.Models.Charts.Indicator.isCompleteValue(indicator);
		// Indicates if the year should be displayed in the tooltip. This is required when the period spans multiple years
		var showYearInTooltip = period.T === 4 && period.I !== 0 || period.T === 5 && period.I !== 0;
		// Local time is displayed for intraday values
		var intraday = QuickView.Client.Models.Charts.TimeSeriesResolutionExtensions.isIntraday(resolution);
		var highchartDataPointList = [];
		var subPeriodIndex = { $: -1 };
		var subPeriodBeginning = { $: null };
		var plotLineList = [];
		var maxYValue = null;
		var minYValue = null;
		var isExtended = mode === 2;
		var isFirstDataPoint = true;
		var previousPoint = null;
		var tooltipOptions = { YS: false === QuickView.Client.Models.Charts.Indicator.isCompleteValue(indicator), R: resolution, U: unit, C: indicator.timeSeriesCurrency, O: indicator.settings.D };
		var previousTime = null;
		var hwmIndex = { $: 0 };
		var $t1 = ss.getEnumerator(data.P);
		try {
			while ($t1.moveNext()) {
				var item = $t1.current();
				if (isExtended) {
					if (ss.isValue(previousPoint)) {
						// Add any missing days (e.g. holidays) with the same value as the previous point (extended charts only)
						for (var time = QuickView.Client.Algorithms.TimeExtensions.advanceTime$1(previousPoint.T, resolution); JS.DateTimeExt.op_LessThan(time, item.T); time = QuickView.Client.Algorithms.TimeExtensions.advanceTime$1(time, resolution)) {
							// Update the sub-period if necessary
							$QuickView_Client_UI_Charts_Utils_$LineChartUtils.$updateSubPeriod(period, time, subPeriodBeginning, subPeriodIndex, plotLineList);
							var dataPoint = { name: $QuickView_Client_UI_Charts_ChartFormat.$formatTime((intraday ? time.toLocalTime() : time), resolution, intraday, showYearInTooltip), y: previousPoint.C, x: time.toDateTime().valueOf(), tooltip: { A: previousPoint.N, O: tooltipOptions }, subPeriodIndex: subPeriodIndex.$ };
							highchartDataPointList.push(dataPoint);
							// HWM should be displayed for holidays for consistency
							if (ss.isValue(hwmList)) {
								var hwmDataPoint = $QuickView_Client_UI_Charts_Utils_$SharedUtils.$findHwmDataPoint(hwmList, time, resolution, hwmIndex);
								if (ss.isValue(hwmDataPoint)) {
									// Show HWM in the tooltip
									dataPoint.tooltip.W = hwmDataPoint;
								}
							}
						}
					}
					previousPoint = item;
				}
				$QuickView_Client_UI_Charts_Utils_$LineChartUtils.$updateSubPeriod(period, item.T, subPeriodBeginning, subPeriodIndex, plotLineList);
				if (isFirstDataPoint) {
					// Add a "zero" point or the last value from the previous period
					// as the initial point. It lines on the "zero" line.
					if (ss.isValue(data.V)) {
						var zeroPointTime = QuickView.Client.Algorithms.TimeExtensions.advanceTime$4(item.T, resolution, -1);
						var zeroHighchartDataPoint = { name: $QuickView_Client_UI_Charts_ChartFormat.$formatTime((intraday ? zeroPointTime.toLocalTime() : zeroPointTime), resolution, intraday, showYearInTooltip), y: ss.coalesce(data.V, 0), x: zeroPointTime.toDateTime().valueOf(), tooltip: { D: true }, subPeriodIndex: subPeriodIndex.$ };
						highchartDataPointList.push(zeroHighchartDataPoint);
					}
					isFirstDataPoint = false;
				}
				var yValue = item.C;
				var xAxisTime = item.T;
				if (JS.DateTimeExt.op_Equality$1(xAxisTime, previousTime)) {
					// Extra points are sometimes with exactly the same time as another point.
					// However, HC does will not display tooltip for both points - only for one of them.
					// Therefore, the second time should be changed a bit.
					xAxisTime = ss.unbox(previousTime).addMilliseconds(1);
				}
				previousTime = xAxisTime;
				var highchartDataPoint = { name: $QuickView_Client_UI_Charts_ChartFormat.$formatTime((intraday ? item.T.toLocalTime() : item.T), resolution, intraday, showYearInTooltip), y: yValue, x: xAxisTime.toDateTime().valueOf(), tooltip: { A: item.N, O: tooltipOptions }, subPeriodIndex: subPeriodIndex.$ };
				highchartDataPointList.push(highchartDataPoint);
				if (ss.isValue(hwmList)) {
					var hwmDataPoint1 = $QuickView_Client_UI_Charts_Utils_$SharedUtils.$findHwmDataPoint(hwmList, item.T, resolution, hwmIndex);
					if (ss.isValue(hwmDataPoint1)) {
						// Show HWM in the tooltip
						highchartDataPoint.tooltip.W = hwmDataPoint1;
					}
				}
				if (ss.isNullOrUndefined(maxYValue) || ss.Nullable$1.lt(maxYValue, yValue)) {
					maxYValue = yValue;
				}
				if (ss.isNullOrUndefined(minYValue) || ss.Nullable$1.gt(minYValue, yValue)) {
					minYValue = yValue;
				}
			}
		}
		finally {
			$t1.dispose();
		}
		// Assign colors
		// "subPeriodIndex" contains the last index
		var lastSubPeriodIndex = subPeriodIndex.$;
		var zoneList = [];
		{
			var previousItemSubPeriodIndex = null;
			var previousItemPositive = null;
			var previousItemPoint = null;
			var previousItemIsHwm = null;
			var zone = null;
			var zeroValue = ss.coalesce(data.V, 0);
			for (var $t2 = 0; $t2 < highchartDataPointList.length; $t2++) {
				var item1 = highchartDataPointList[$t2];
				var itemSubPeriodIndex = item1.subPeriodIndex;
				var itemPositive = ss.Nullable$1.ge(item1.y, zeroValue);
				var itemIsHwm = ss.isValue(item1.tooltip) && ss.isValue(item1.tooltip.W);
				if (itemSubPeriodIndex !== previousItemSubPeriodIndex || previousItemPositive !== itemPositive || previousItemIsHwm !== itemIsHwm) {
					// The zone has changed
					if (ss.isValue(zone)) {
						if (previousItemPositive !== itemPositive) {
							// The zone changes due to the change of sign; therefore, calculate the exact place
							// where the zero line is crossed and extend the zone up to it
							var dx = ss.unbox(item1.x) - ss.unbox(previousItemPoint.x);
							var dy = ss.unbox(item1.y) - ss.unbox(previousItemPoint.y);
							var ay = ss.unbox(item1.y) - zeroValue;
							var ax = ay * dx / dy;
							zone.value = ss.unbox(item1.x) - ax;
						}
						else {
							// Extend the zone up to the current value
							zone.value = item1.x;
						}
					}
					var colorSetIndex = lastSubPeriodIndex - itemSubPeriodIndex;
					var colorSet = ss.makeGenericType($QuickView_Client_UI_Charts_$ColorSetCollection$1, [ss.makeGenericType($QuickView_Client_UI_Charts_$ChartColorSet$1, [$QuickView_Client_UI_Charts_$AreaChartColor])]).$get(colors, colorSetIndex);
					var color = ss.makeGenericType($QuickView_Client_UI_Charts_$ChartColorSet$1, [$QuickView_Client_UI_Charts_$AreaChartColor]).$get(colorSet, itemPositive, isCompleteValue);
					if (itemIsHwm) {
						color = colorSet.hwm;
					}
					zone = { color: color.L, fillColor: color.F };
					zoneList.push(zone);
					previousItemSubPeriodIndex = itemSubPeriodIndex;
					previousItemPositive = itemPositive;
					previousItemIsHwm = itemIsHwm;
				}
				else if (ss.isValue(zone)) {
					// Extend the zone up to the current value
					zone.value = item1.x;
				}
				previousItemPoint = item1;
			}
		}
		if (ss.isValue(maxYValue) && ss.isValue(minYValue)) {
			if (false === isCompleteValue) {
				// Ensure that the zero line is visible
				var minMaxInitialValue = ss.coalesce(data.V, 0);
				if (ss.Nullable$1.lt(maxYValue, minMaxInitialValue)) {
					maxYValue = minMaxInitialValue;
				}
				if (ss.Nullable$1.gt(minYValue, minMaxInitialValue)) {
					minYValue = minMaxInitialValue;
				}
			}
			var range = ss.Nullable$1.sub(maxYValue, minYValue);
			// Leave some space above and below the max/min value
			maxYValue = ss.Nullable$1.add(maxYValue, ss.Nullable$1.mul(range, 0.05));
			minYValue = ss.Nullable$1.sub(minYValue, ss.Nullable$1.mul(range, 0.05));
		}
		var dataSeries = { type: chartType, animation: false, data: highchartDataPointList, dataLabels: $QuickView_Client_UI_Charts_$ChartConstants.$disabledLabels, zoneAxis: 'x', zones: zoneList };
		if (chartType === 'area') {
			dataSeries.threshold = ss.coalesce(data.V, 0);
		}
		dataSeries.indicatorID = indicator.I;
		dataSeries.indicatorColor = ss.makeGenericType($QuickView_Client_UI_Charts_$ColorSetCollection$1, [ss.makeGenericType($QuickView_Client_UI_Charts_$ChartColorSet$1, [$QuickView_Client_UI_Charts_$AreaChartColor])]).$get(colors, 0).positive.L;
		dataSeries.tooltip = { T: (showIndicatorName ? (indicator.menuInfo.A + ' - ' + indicator.N) : null), Z: data.V };
		var $t3 = $QuickView_Client_UI_Charts_$DataSeriesInfo.$ctor();
		$t3.S = dataSeries;
		$t3.Y = $QuickView_Client_UI_Charts_ChartAxisExtremes.$ctor(minYValue, maxYValue);
		$t3.P = plotLineList;
		var result = $t3;
		return result;
	};
	$QuickView_Client_UI_Charts_Utils_$LineChartUtils.$createDataSeries_Drawdown = function(data, drawdownData, period, resolution, unit, mode, chartType, colors, showIndicatorName) {
		JS.ArgumentHelper.notNull(data, 'data');
		JS.ArgumentHelper.notNull(period, 'period');
		JS.ArgumentHelper.notNull(colors, 'colors');
		var indicator = data.I;
		var isCompleteValue = QuickView.Client.Models.Charts.Indicator.isCompleteValue(indicator);
		// Indicates if the year should be displayed in the tooltip. This is required when the period spans multiple years
		var showYearInTooltip = period.T === 4 && period.I !== 0 || period.T === 5 && period.I !== 0;
		// Local time is displayed for intraday values
		var intraday = QuickView.Client.Models.Charts.TimeSeriesResolutionExtensions.isIntraday(resolution);
		var highchartDataPointList = [];
		var subPeriodIndex = { $: -1 };
		var subPeriodBeginning = { $: null };
		var plotLineList = [];
		var maxYValue = null;
		var minYValue = null;
		var isExtended = mode === 2;
		var isFirstDataPoint = true;
		var tooltipOptions = { YS: false === QuickView.Client.Models.Charts.Indicator.isCompleteValue(indicator), R: resolution, U: unit, C: indicator.timeSeriesCurrency, O: indicator.settings.D };
		var previousInterval = null;
		var previousPoint = null;
		var previousTime = null;
		for (var $t1 = 0; $t1 < drawdownData.I.length; $t1++) {
			var interval = drawdownData.I[$t1];
			for (var $t2 = 0; $t2 < interval.P.length; $t2++) {
				var item = interval.P[$t2];
				if (isExtended) {
					if (ss.isValue(previousPoint)) {
						// Add any missing days (e.g. holidays) with the same value as the previous point (extended charts only)
						for (var time = QuickView.Client.Algorithms.TimeExtensions.advanceTime$1(previousPoint.P.T, resolution); JS.DateTimeExt.op_LessThan(time, item.P.T); time = QuickView.Client.Algorithms.TimeExtensions.advanceTime$1(time, resolution)) {
							// Update the sub-period if necessary
							$QuickView_Client_UI_Charts_Utils_$LineChartUtils.$updateSubPeriod(period, time, subPeriodBeginning, subPeriodIndex, plotLineList);
							var dataPoint = { name: $QuickView_Client_UI_Charts_ChartFormat.$formatTime((intraday ? time.toLocalTime() : time), resolution, intraday, showYearInTooltip), y: previousPoint.V, x: time.toDateTime().valueOf(), tooltip: { O: tooltipOptions, R: previousPoint.P, S: previousInterval.S }, subPeriodIndex: subPeriodIndex.$ };
							highchartDataPointList.push(dataPoint);
						}
					}
					previousPoint = item;
					previousInterval = interval;
				}
				$QuickView_Client_UI_Charts_Utils_$LineChartUtils.$updateSubPeriod(period, item.P.T, subPeriodBeginning, subPeriodIndex, plotLineList);
				if (isFirstDataPoint) {
					// Add a "zero" point or the last value from the previous period
					// as the initial point. It lines on the "zero" line.
					if (ss.isValue(data.V)) {
						var zeroPointTime = QuickView.Client.Algorithms.TimeExtensions.advanceTime$4(item.P.T, resolution, -1);
						var zeroHighchartDataPoint = { name: $QuickView_Client_UI_Charts_ChartFormat.$formatTime((intraday ? zeroPointTime.toLocalTime() : zeroPointTime), resolution, intraday, showYearInTooltip), y: ss.coalesce(data.V, 0), x: zeroPointTime.toDateTime().valueOf(), tooltip: { D: true }, subPeriodIndex: subPeriodIndex.$ };
						highchartDataPointList.push(zeroHighchartDataPoint);
					}
					isFirstDataPoint = false;
				}
				var yValue = item.V;
				var xAxisTime = item.P.T;
				if (JS.DateTimeExt.op_Equality$1(xAxisTime, previousTime)) {
					// Extra points are sometimes with exactly the same time as another point.
					// However, HC does will not display tooltip for both points - only for one of them.
					// Therefore, the second time should be changed a bit.
					xAxisTime = ss.unbox(previousTime).addMilliseconds(1);
				}
				previousTime = xAxisTime;
				var highchartDataPoint = { name: $QuickView_Client_UI_Charts_ChartFormat.$formatTime((intraday ? item.P.T.toLocalTime() : item.P.T), resolution, intraday, showYearInTooltip), y: yValue, x: xAxisTime.toDateTime().valueOf(), tooltip: { O: tooltipOptions, R: item.P, S: interval.S }, subPeriodIndex: subPeriodIndex.$ };
				highchartDataPointList.push(highchartDataPoint);
				if (ss.isNullOrUndefined(maxYValue) || ss.Nullable$1.lt(maxYValue, yValue)) {
					maxYValue = yValue;
				}
				if (ss.isNullOrUndefined(minYValue) || ss.Nullable$1.gt(minYValue, yValue)) {
					minYValue = yValue;
				}
			}
		}
		// Assign colors
		// "subPeriodIndex" contains the last index
		var lastSubPeriodIndex = subPeriodIndex.$;
		var zoneList = [];
		{
			var zone = null;
			var colorSetIndex = 0;
			for (var $t3 = 0; $t3 < highchartDataPointList.length; $t3++) {
				var item1 = highchartDataPointList[$t3];
				if (ss.isNullOrUndefined(item1.y) || ss.isNullOrUndefined(item1.x)) {
					// Interruption point - added in order to break the line into sections
					continue;
				}
				if (ss.isNullOrUndefined(zone)) {
					var colorSet = ss.makeGenericType($QuickView_Client_UI_Charts_$ColorSetCollection$1, [ss.makeGenericType($QuickView_Client_UI_Charts_$ChartColorSet$1, [$QuickView_Client_UI_Charts_$AreaChartColor])]).$get(colors, colorSetIndex++);
					var color = ss.makeGenericType($QuickView_Client_UI_Charts_$ChartColorSet$1, [$QuickView_Client_UI_Charts_$AreaChartColor]).$get(colorSet, false, false);
					// Use negative colors only
					zone = { color: color.L, fillColor: color.F, value: item1.x };
					zoneList.push(zone);
				}
				else if (ss.Nullable$1.ge(item1.y, 0)) {
					// A zone ends at a zero value
					zone.value = item1.x;
					zone = null;
				}
				else {
					// Extend the zone
					zone.value = item1.x;
				}
			}
		}
		if (ss.isValue(maxYValue) && ss.isValue(minYValue)) {
			if (false === isCompleteValue) {
				// Ensure that the zero line is visible
				var minMaxInitialValue = ss.coalesce(data.V, 0);
				if (ss.Nullable$1.lt(maxYValue, minMaxInitialValue)) {
					maxYValue = minMaxInitialValue;
				}
				if (ss.Nullable$1.gt(minYValue, minMaxInitialValue)) {
					minYValue = minMaxInitialValue;
				}
			}
			var range = ss.Nullable$1.sub(maxYValue, minYValue);
			// Leave some space above and below the max/min value
			maxYValue = ss.Nullable$1.add(maxYValue, ss.Nullable$1.mul(range, 0.05));
			minYValue = ss.Nullable$1.sub(minYValue, ss.Nullable$1.mul(range, 0.05));
		}
		var dataSeries = { type: chartType, animation: false, data: highchartDataPointList, dataLabels: $QuickView_Client_UI_Charts_$ChartConstants.$disabledLabels, zoneAxis: 'x', zones: zoneList };
		if (chartType === 'area') {
			dataSeries.threshold = ss.coalesce(data.V, 0);
		}
		dataSeries.indicatorID = indicator.I;
		dataSeries.indicatorColor = ss.makeGenericType($QuickView_Client_UI_Charts_$ColorSetCollection$1, [ss.makeGenericType($QuickView_Client_UI_Charts_$ChartColorSet$1, [$QuickView_Client_UI_Charts_$AreaChartColor])]).$get(colors, 0).positive.L;
		dataSeries.tooltip = { T: (showIndicatorName ? (indicator.menuInfo.A + ' - ' + indicator.N) : null), Z: data.V };
		var $t4 = $QuickView_Client_UI_Charts_$DataSeriesInfo.$ctor();
		$t4.S = dataSeries;
		$t4.Y = $QuickView_Client_UI_Charts_ChartAxisExtremes.$ctor(minYValue, maxYValue);
		$t4.P = plotLineList;
		var result = $t4;
		return result;
	};
	$QuickView_Client_UI_Charts_Utils_$LineChartUtils.$updateSubPeriod = function(period, time, subPeriodBeginning, subPeriodIndex, plotLineList) {
		var newSubPeriodBeginning = $QuickView_Client_UI_Charts_Utils_$LineChartUtils.$getSubPeriodBeginning(period, time);
		if (JS.DateTimeExt.op_Equality$1(subPeriodBeginning.$, null) || JS.DateTimeExt.op_Inequality$1(newSubPeriodBeginning, subPeriodBeginning.$)) {
			subPeriodIndex.$++;
			subPeriodBeginning.$ = newSubPeriodBeginning;
			if (subPeriodIndex.$ > 0) {
				plotLineList.push({ color: $QuickView_Client_UI_Charts_$ChartStyles.$plotLineColor, width: 1, zIndex: 5, value: newSubPeriodBeginning.toDateTime().valueOf() });
			}
		}
	};
	$QuickView_Client_UI_Charts_Utils_$LineChartUtils.$getSubPeriodBeginning = function(period, time) {
		var resolution;
		switch (period.T) {
			case 2: {
				return QuickView.Client.Algorithms.Charts.TradingSession.standard.getOpenTimeByTime(time);
			}
			case 3: {
				resolution = 7;
				break;
			}
			case 4: {
				resolution = 9;
				break;
			}
			case 5: {
				// CAUTION: "ChartPeriodHelper.BTDStartList" is ordered from the latest to the oldest period.
				var btdStartList = QuickView.Client.Models.Charts.ChartPeriodHelper.get_btdStartList();
				for (var $t1 = 0; $t1 < btdStartList.length; $t1++) {
					var item = btdStartList[$t1];
					if (JS.DateTimeExt.op_GreaterThanOrEqual(time, item)) {
						return item;
					}
				}
				return QuickView.Client.Models.Charts.ChartPeriodHelper.dateTimeMinValue;
			}
			default: {
				return QuickView.Client.Models.Charts.ChartPeriodHelper.dateTimeMinValue;
			}
		}
		return QuickView.Client.Algorithms.TimeExtensions.roundTime$1(time, resolution);
	};
	$QuickView_Client_UI_Charts_Utils_$LineChartUtils.$calculateSubPeriodCount = function(period, start, end) {
		var subPeriodCount;
		switch (period.T) {
			case 2: {
				// Number of days
				{
					var spStart = QuickView.Client.Algorithms.TimeExtensions.roundTime$1(start, 5);
					var spEnd = QuickView.Client.Algorithms.TimeExtensions.roundTimeUp$1(end, 5);
					subPeriodCount = ss.Int32.trunc(JS.DateTimeExt.op_Subtraction(spEnd, spStart).ticks / 864000000000);
				}
				break;
			}
			case 3: {
				// Number of months;
				{
					var spStart1 = QuickView.Client.Algorithms.TimeExtensions.roundTime$1(start, 7);
					var spEnd1 = QuickView.Client.Algorithms.TimeExtensions.roundTimeUp$1(end, 7);
					subPeriodCount = (spEnd1.get_year() - spStart1.get_year()) * 12 + (spEnd1.get_month() - spStart1.get_month());
				}
				break;
			}
			case 4: {
				// Number of years
				{
					var spStart2 = QuickView.Client.Algorithms.TimeExtensions.roundTime$1(start, 9);
					var spEnd2 = QuickView.Client.Algorithms.TimeExtensions.roundTimeUp$1(end, 9);
					subPeriodCount = spEnd2.get_year() - spStart2.get_year();
				}
				break;
			}
			case 5: {
				subPeriodCount = -period.I + 1;
				break;
			}
			default: {
				// A single period
				subPeriodCount = 1;
				break;
			}
		}
		return subPeriodCount;
	};
	////////////////////////////////////////////////////////////////////////////////
	// QuickView.Client.UI.Charts.Utils.SharedUtils
	var $QuickView_Client_UI_Charts_Utils_$SharedUtils = function() {
	};
	$QuickView_Client_UI_Charts_Utils_$SharedUtils.__typeName = 'QuickView.Client.UI.Charts.Utils.$SharedUtils';
	$QuickView_Client_UI_Charts_Utils_$SharedUtils.$createSeriesAreaColors = function(numberOfSeries) {
		JS.ArgumentHelper.positive(numberOfSeries, 'numberOfSeries');
		var colorSetList = [];
		for (var k = 1; k <= numberOfSeries; k++) {
			var colorPair = QuickView.Client.Algorithms.Colors.ColorInterpolation.calculateRGBColor(1, numberOfSeries, k);
			var colorText = QuickView.Client.Algorithms.Colors.RgbColor.toHtmlColor(colorPair.background);
			var color = $QuickView_Client_UI_Charts_$AreaChartColor.$ctor2(colorText, colorText);
			var $t1 = ss.makeGenericType($QuickView_Client_UI_Charts_$ChartColorSet$1, [$QuickView_Client_UI_Charts_$AreaChartColor]).$ctor();
			$t1.positive = color;
			$t1.negative = color;
			$t1.positiveComplete = color;
			$t1.hwm = color;
			var colorSet = $t1;
			colorSetList.push(colorSet);
		}
		return colorSetList;
	};
	$QuickView_Client_UI_Charts_Utils_$SharedUtils.$createSeriesBarColors = function(numberOfSeries) {
		JS.ArgumentHelper.positive(numberOfSeries, 'numberOfSeries');
		var colorSetList = [];
		for (var k = 1; k <= numberOfSeries; k++) {
			var colorPair = QuickView.Client.Algorithms.Colors.ColorInterpolation.calculateRGBColor(1, numberOfSeries, k);
			// Add transparency since bars are displayed on top of each other
			var colorText = QuickView.Client.Algorithms.Colors.RgbColor.toHtmlColor$1(colorPair.background, 0.75);
			var textColorText = QuickView.Client.Algorithms.Colors.RgbColor.toHtmlColor(colorPair.foreground);
			var color = $QuickView_Client_UI_Charts_$BarChartColor.$ctor1(colorText, textColorText);
			var $t1 = ss.makeGenericType($QuickView_Client_UI_Charts_$ChartColorSet$1, [$QuickView_Client_UI_Charts_$BarChartColor]).$ctor();
			$t1.positive = color;
			$t1.negative = color;
			$t1.positiveComplete = color;
			$t1.hwm = color;
			var colorSet = $t1;
			colorSetList.push(colorSet);
		}
		return colorSetList;
	};
	$QuickView_Client_UI_Charts_Utils_$SharedUtils.$findHwmDataPoint = function(hwmList, time, resolution, hwmIndex) {
		JS.ArgumentHelper.notNull(hwmList, 'hwmList');
		if (false === QuickView.Client.Models.Charts.TimeSeriesResolutionExtensions.isTimePeriod(resolution)) {
			throw new ss.ArgumentOutOfRangeException('resolution', 'Must represent a time period.', null, resolution);
		}
		var timeMonthIndex = QuickView.Client.Algorithms.DateTimeExtensions.getMonthIndex(time);
		if (resolution <= 7) {
			// For daily data "time" can be greater than "HWM time", however, they may be in the same month
			while (hwmIndex.$ < ss.count(hwmList) && QuickView.Client.Algorithms.DateTimeExtensions.getMonthIndex(ss.getItem(hwmList, hwmIndex.$).T) < timeMonthIndex) {
				hwmIndex.$++;
			}
			if (hwmIndex.$ < ss.count(hwmList)) {
				var hwmDataPoint = ss.getItem(hwmList, hwmIndex.$);
				if (QuickView.Client.Algorithms.DateTimeExtensions.isSameMonth(hwmDataPoint.T, time)) {
					return hwmDataPoint;
				}
				else {
					return null;
				}
			}
			else {
				return null;
			}
		}
		else {
			while (hwmIndex.$ < ss.count(hwmList) && JS.DateTimeExt.op_LessThan(ss.getItem(hwmList, hwmIndex.$).T, time)) {
				hwmIndex.$++;
			}
			// HWM data has monthly resolution; in this case the last HWM for the period should be displayed.
			// Therefore, move to the last HWM for the period.
			var endTime = QuickView.Client.Algorithms.TimeExtensions.advanceTime$1(time, resolution);
			while (hwmIndex.$ + 1 < ss.count(hwmList) && JS.DateTimeExt.op_LessThan(ss.getItem(hwmList, hwmIndex.$ + 1).T, endTime)) {
				hwmIndex.$++;
			}
			if (hwmIndex.$ < ss.count(hwmList)) {
				var hwmDataPoint1 = ss.getItem(hwmList, hwmIndex.$);
				// Ensure that the HWM is not for a subsequent period
				if (JS.DateTimeExt.op_LessThan(hwmDataPoint1.T, endTime)) {
					return hwmDataPoint1;
				}
				else {
					return null;
				}
			}
			else {
				return null;
			}
		}
	};
	ss.initClass($QuickView_$Client_UI_Charts_BarChart$DataSeriesInfo, $asm, {
		get_$series: function() {
			return this.$1$SeriesField;
		},
		set_$series: function(value) {
			this.$1$SeriesField = value;
		}
	});
	ss.initClass($QuickView_Client_UI_Charts_$AreaChartColor, $asm, {});
	ss.initClass($QuickView_Client_UI_Charts_$BarChartColor, $asm, {});
	ss.initClass($QuickView_Client_UI_Charts_$ChartComponents, $asm, {});
	ss.initClass($QuickView_Client_UI_Charts_$ChartConstants, $asm, {});
	ss.initClass($QuickView_Client_UI_Charts_$ChartStyles, $asm, {});
	ss.initClass($QuickView_Client_UI_Charts_$DataSeriesInfo, $asm, {});
	ss.initClass($QuickView_Client_UI_Charts_$HighchartsExtensions, $asm, {});
	ss.initClass($QuickView_Client_UI_Charts_ChartBase, $asm, {
		add_zoomIn: function(value) {
			this.$1$ZoomInField = ss.delegateCombine(this.$1$ZoomInField, value);
		},
		remove_zoomIn: function(value) {
			this.$1$ZoomInField = ss.delegateRemove(this.$1$ZoomInField, value);
		},
		onZoomIn: function(e) {
			JS.EventExtensions.fire(this.$1$ZoomInField, this, e);
		},
		add_zoomOut: function(value) {
			this.$1$ZoomOutField = ss.delegateCombine(this.$1$ZoomOutField, value);
		},
		remove_zoomOut: function(value) {
			this.$1$ZoomOutField = ss.delegateRemove(this.$1$ZoomOutField, value);
		},
		onZoomOut: function(e) {
			JS.EventExtensions.fire(this.$1$ZoomOutField, this, e);
		},
		add_zoom: function(value) {
			this.$1$ZoomField = ss.delegateCombine(this.$1$ZoomField, value);
		},
		remove_zoom: function(value) {
			this.$1$ZoomField = ss.delegateRemove(this.$1$ZoomField, value);
		},
		onZoom: function(e) {
			JS.EventExtensions.fire(this.$1$ZoomField, this, e);
		},
		add_primarySeriesMouseOver: function(value) {
			this.$1$PrimarySeriesMouseOverField = ss.delegateCombine(this.$1$PrimarySeriesMouseOverField, value);
		},
		remove_primarySeriesMouseOver: function(value) {
			this.$1$PrimarySeriesMouseOverField = ss.delegateRemove(this.$1$PrimarySeriesMouseOverField, value);
		},
		onPrimarySeriesMouseOver: function(e) {
			JS.EventExtensions.fireAsync$2($QuickView_Client_UI_Charts_IndicatorEventArgs).call(null, this.$1$PrimarySeriesMouseOverField, this, e);
		},
		add_primarySeriesMouseOut: function(value) {
			this.$1$PrimarySeriesMouseOutField = ss.delegateCombine(this.$1$PrimarySeriesMouseOutField, value);
		},
		remove_primarySeriesMouseOut: function(value) {
			this.$1$PrimarySeriesMouseOutField = ss.delegateRemove(this.$1$PrimarySeriesMouseOutField, value);
		},
		onPrimarySeriesMouseOut: function(e) {
			JS.EventExtensions.fireAsync$2($QuickView_Client_UI_Charts_IndicatorEventArgs).call(null, this.$1$PrimarySeriesMouseOutField, this, e);
		},
		add_benchmarkSeriesMouseOver: function(value) {
			this.$1$BenchmarkSeriesMouseOverField = ss.delegateCombine(this.$1$BenchmarkSeriesMouseOverField, value);
		},
		remove_benchmarkSeriesMouseOver: function(value) {
			this.$1$BenchmarkSeriesMouseOverField = ss.delegateRemove(this.$1$BenchmarkSeriesMouseOverField, value);
		},
		onBenchmarkSeriesMouseOver: function(e) {
			JS.EventExtensions.fireAsync$2($QuickView_Client_UI_Charts_IndicatorEventArgs).call(null, this.$1$BenchmarkSeriesMouseOverField, this, e);
		},
		add_benchmarkSeriesMouseOut: function(value) {
			this.$1$BenchmarkSeriesMouseOutField = ss.delegateCombine(this.$1$BenchmarkSeriesMouseOutField, value);
		},
		remove_benchmarkSeriesMouseOut: function(value) {
			this.$1$BenchmarkSeriesMouseOutField = ss.delegateRemove(this.$1$BenchmarkSeriesMouseOutField, value);
		},
		onBenchmarkSeriesMouseOut: function(e) {
			JS.EventExtensions.fireAsync$2($QuickView_Client_UI_Charts_IndicatorEventArgs).call(null, this.$1$BenchmarkSeriesMouseOutField, this, e);
		},
		get_showTooltips: function() {
			return this.$_showTooltipsOption.item1;
		},
		set_showTooltips: function(value) {
			this.$_showTooltipsOption.item1 = value;
		},
		get_showTooltipsOption: function() {
			return this.$_showTooltipsOption;
		},
		dispose: function() {
			if (ss.isValue(this.chart)) {
				this.chart.destroy();
				this.chart = null;
			}
		},
		update: function(data, period, timeInterval, unit, resolution, supplementData, options) {
			JS.ArgumentHelper.notNull(data, 'data');
			JS.ArgumentHelper.notNull(period, 'period');
			JS.ArgumentHelper.notNull(timeInterval, 'timeInterval');
			this.updateCore(data, period, timeInterval, unit, resolution, supplementData, options || $QuickView_Client_UI_Charts_ChartOptions.$default);
		},
		updateCore: null,
		$getXAxis: function() {
			return this.chart.xAxis[0];
		},
		resetZoom: function() {
			this.chart.zoomOut();
		},
		isZoomed: function() {
			var extremes = this.getXAxisExtremes();
			return false === (ss.isNullOrUndefined(extremes.I) && ss.isNullOrUndefined(extremes.A));
		},
		getXAxisExtremes: function() {
			var extremes = this.$getXAxis().getExtremes();
			// Highcharts may return values for min and max even if the chart is not zoomed
			var min = extremes.min;
			if (ss.Nullable$1.le(min, extremes.dataMin) || $QuickView_Client_UI_Charts_ChartBase.$areAxisExtremesSame(min, extremes.dataMin)) {
				min = null;
			}
			var max = extremes.max;
			if (ss.Nullable$1.ge(max, extremes.dataMax) || $QuickView_Client_UI_Charts_ChartBase.$areAxisExtremesSame(max, extremes.dataMax)) {
				max = null;
			}
			return $QuickView_Client_UI_Charts_ChartAxisExtremes.$ctor1(min, max, extremes.dataMin, extremes.dataMax);
		},
		setXAxisExtremes: function(min, max) {
			this.$getXAxis().setExtremes(min.getTime(), max.getTime(), true);
		},
		setXAxisExtremes$1: function(min, max) {
			this.$getXAxis().setExtremes(min, max, true);
		},
		setTitle: function(title, color) {
			if (ss.isNullOrUndefined(this.chart)) {
				return;
			}
			var style = { fontSize: '9pt', color: (ss.isNullOrEmptyString(color) ? 'white'.toString() : color) };
			var titleObj = (ss.isNullOrEmptyString(title) ? null : { text: title, y: -5, style: style, floating: true });
			this.chart.setTitle(titleObj, null, true);
		},
		onResize: function() {
			this.chart.reflow();
		},
		selectDataSeries: function(indicator) {
			var series = this.$getDataSeries(indicator);
			if (ss.isNullOrUndefined(series)) {
				return;
			}
			series.select(true);
		},
		getDataSeriesColor: function(indicator) {
			var series = this.$getDataSeries(indicator);
			if (ss.isNullOrUndefined(series)) {
				return null;
			}
			return series.options.indicatorColor;
		},
		$getDataSeries: function(indicator) {
			JS.ArgumentHelper.notNull(indicator, 'indicator');
			if (ss.isNullOrUndefined(this.chart)) {
				return null;
			}
			for (var $t1 = 0; $t1 < this.chart.series.length; $t1++) {
				var item = this.chart.series[$t1];
				if (ss.referenceEquals(item.options.indicatorID, indicator.I)) {
					return item;
				}
			}
			return null;
		},
		onXAxisAfterSetExtremes: function(axis) {
			var extremes = this.getXAxisExtremes();
			if (ss.isNullOrUndefined(extremes.I) && ss.isNullOrUndefined(extremes.A)) {
				this.onZoomOut(ss.EventArgs.Empty);
			}
			else {
				this.onZoomIn(ss.EventArgs.Empty);
			}
			this.onZoom(ss.EventArgs.Empty);
		}
	}, null, [ss.IDisposable]);
	ss.initClass($QuickView_Client_UI_Charts_BarChart, $asm, {
		updateCore: function(data, period, timeInterval, unit, resolution, supplementData, options) {
			// Local time is displayed for intraday values
			var intraday = resolution < 5;
			// Indicates if the name of the indicator should be displayed in tooltips
			var showIndicatorName = ss.isValue(supplementData) && ss.isValue(supplementData.B) && ss.count(supplementData.B) > 0;
			var dataSeriesList = [];
			var primaryDisplayOptions;
			// Since most charts has a single data item in order to improve performance
			// the two cases should be handled separately
			if (ss.isInstanceOfType(data, ss.IList)) {
				var dataList = ss.cast(data, ss.IList);
				var colorList = $QuickView_Client_UI_Charts_Utils_$SharedUtils.$createSeriesBarColors(ss.count(dataList));
				var dataIndex = 0;
				var colorIndex = 0;
				var $t1 = ss.getEnumerator(dataList);
				try {
					while ($t1.moveNext()) {
						var dataObj = $t1.current();
						var coefficient = ++dataIndex / ss.count(dataList);
						var dataSeriesInfo = $QuickView_Client_UI_Charts_Utils_$BarChartUtils.$createDataSeries(dataObj, period, timeInterval, resolution, unit, (ss.isNullOrUndefined(supplementData) ? null : supplementData.H), this.mode, 0.1 + coefficient * 0.2, ss.getItem(colorList, colorIndex++), true, true);
						var localIndicator = { $: dataObj.I };
						if (ss.isNullOrUndefined(dataSeriesInfo.S.events)) {
							dataSeriesInfo.S.events = {};
						}
						dataSeriesInfo.S.events.mouseOver = ss.thisFix(ss.mkdel({ localIndicator: localIndicator, $this: this }, function(series) {
							this.$this.onPrimarySeriesMouseOver(new $QuickView_Client_UI_Charts_IndicatorEventArgs(this.localIndicator.$));
						}));
						dataSeriesInfo.S.events.mouseOut = ss.thisFix(ss.mkdel({ localIndicator: localIndicator, $this: this }, function(series1) {
							this.$this.onPrimarySeriesMouseOut(new $QuickView_Client_UI_Charts_IndicatorEventArgs(this.localIndicator.$));
						}));
						dataSeriesList.push(dataSeriesInfo.S);
					}
				}
				finally {
					$t1.dispose();
				}
				primaryDisplayOptions = ss.getItem(dataList, 0).I.settings.D;
			}
			else {
			    var dataObj1 = data;
				var dataSeriesInfo1 = $QuickView_Client_UI_Charts_Utils_$BarChartUtils.$createDataSeries(dataObj1, period, timeInterval, resolution, unit, (ss.isNullOrUndefined(supplementData) ? null : supplementData.H), this.mode, null, $QuickView_Client_UI_Charts_$ChartStyles.$barChartColorSet, true, true);
				dataSeriesList.push(dataSeriesInfo1.S);
				primaryDisplayOptions = dataObj1.I.settings.D;
			}
			if (ss.isValue(supplementData) && ss.isValue(supplementData.B) && ss.count(supplementData.B) > 0) {
				var bmDataIndex = 0;
				var $t2 = ss.getEnumerator(supplementData.B);
				try {
					while ($t2.moveNext()) {
						var bmData = $t2.current();
						var coefficient1 = ++bmDataIndex / ss.count(supplementData.B);
						var bmSeries = $QuickView_Client_UI_Charts_Utils_$BarChartUtils.$createDataSeries(bmData, period, timeInterval, resolution, unit, null, this.mode, 0.1 + coefficient1 * 0.2, $QuickView_Client_UI_Charts_$ChartStyles.$additionalBarChartColorSet, false, true);
						if (ss.isNullOrUndefined(bmSeries.S.events)) {
							bmSeries.S.events = {};
						}
						var localBenchmarkIndicator = { $: bmData.I };
						bmSeries.S.events.mouseOver = ss.thisFix(ss.mkdel({ localBenchmarkIndicator: localBenchmarkIndicator, $this: this }, function(series2) {
							this.$this.onBenchmarkSeriesMouseOver(new $QuickView_Client_UI_Charts_IndicatorEventArgs(this.localBenchmarkIndicator.$));
						}));
						bmSeries.S.events.mouseOut = ss.thisFix(ss.mkdel({ localBenchmarkIndicator: localBenchmarkIndicator, $this: this }, function(series3) {
							this.$this.onBenchmarkSeriesMouseOut(new $QuickView_Client_UI_Charts_IndicatorEventArgs(this.localBenchmarkIndicator.$));
						}));
						dataSeriesList.push(bmSeries.S);
					}
				}
				finally {
					$t2.dispose();
				}
			}
			if (ss.isValue(this.chart)) {
				this.chart.destroy();
				this.chart = null;
			}
			if (ss.isValue(this.chart)) {
				throw new ss.NotSupportedException('Updating the data of a chart is not supported since multiple options need to be changed.');
			}
			else {
			    var isExtended = this.mode === 2;
				var highchartOptions = $QuickView_Client_UI_Charts_$HighchartsExtensions.$setDefaults(
                    {
                        series: dataSeriesList,
                        chart: $QuickView_Client_UI_Charts_$HighchartsExtensions.$setChartMode(
                            $QuickView_Client_UI_Charts_$HighchartsExtensions.$setDefaults$1({ renderTo: this.element[0] }),
                            this.mode),
                        plotOptions:
                            {
                                series: $QuickView_Client_UI_Charts_$ChartConstants.$defaultSeriesOptions,
                                column: $QuickView_Client_UI_Charts_$HighchartsExtensions.$setDefaults$3({})
                            },
                        xAxis: $QuickView_Client_UI_Charts_$HighchartsExtensions.$setXAxisChartMode(Object).call(null,
                            $QuickView_Client_UI_Charts_$HighchartsExtensions.$setDefaults$6(Object).call(null,
                            {
                                type: 'category',
                                events: { afterSetExtremes: ss.thisFix(ss.mkdel(this, this.onXAxisAfterSetExtremes)) }
                            }),
                            this.mode,
                            intraday),
                        yAxis: $QuickView_Client_UI_Charts_$HighchartsExtensions.$setYAxisChartMode(Object).call(null,
                            $QuickView_Client_UI_Charts_$HighchartsExtensions.$setDefaults$6(Object).call(null,
                            {
                                maxPadding: 0.02,
                                startOnTick: false,
                                endOnTick: false,
                                labels:
                                    {
                                        formatter: $QuickView_Client_UI_Charts_$ChartComponents.$getYAxisLabelFormatter(unit, primaryDisplayOptions)
                                    },
                                plotLines: [$QuickView_Client_UI_Charts_$HighchartsExtensions.$applyZeroPlotLine({ value: 0 })]
                            }),
                            this.mode,
                            options.get_U()),
                        tooltip:
                            {
                            enabled: QuickView.Client.Common.AppEnvironment.get_isDesktopDevice() || this.mode === 2,
                            shared: false,
                            backgroundColor: 'transparent'.toString(),
                            borderWidth: 0,
                            shadow: false,
                            useHTML: true,
                            hideDelay: 0,
                            positioner: ((this.mode === 1) ? ss.thisFix($QuickView_Client_UI_Charts_$ChartComponents.$collapsedChartTooltipPositioner) : null),
                            formatter: $QuickView_Client_UI_Charts_$ChartComponents.$createTooltipFormatter(ss.thisFix($QuickView_Client_UI_Charts_$ChartComponents.$tooltipFormatter), this.get_showTooltipsOption())
                        }
                    });
				this.chart = new Highcharts.Chart(highchartOptions);
			}
		}
	}, $QuickView_Client_UI_Charts_ChartBase, [ss.IDisposable]);
	ss.initClass($QuickView_Client_UI_Charts_ChartAxisExtremes, $asm, {});
	ss.initClass($QuickView_Client_UI_Charts_ChartFormat, $asm, {});
	ss.initClass($QuickView_Client_UI_Charts_ChartOptions, $asm, {
		get_U: function() {
			return this.$1$MultipleUnitsField;
		},
		set_U: function(value) {
			this.$1$MultipleUnitsField = value;
		},
		get_D: function() {
			return this.$1$DrawdownDataField;
		},
		set_D: function(value) {
			this.$1$DrawdownDataField = value;
		}
	});
	ss.initClass($QuickView_Client_UI_Charts_ChartSupplementData, $asm, {});
	ss.initClass($QuickView_Client_UI_Charts_IndicatorEventArgs, $asm, {}, ss.EventArgs);
	ss.initClass($QuickView_Client_UI_Charts_LineChart, $asm, {
		updateCore: function(data, period, timeInterval, unit, resolution, supplementData, options) {
			var isExtended = this.mode === 2;
			// Local time is displayed for intraday values
			var intraday = QuickView.Client.Models.Charts.TimeSeriesResolutionExtensions.isIntraday(resolution);
			// This property is used for debugging purposes
			var showXAxisTimeZone = false && intraday;
			// Indicates if the name of the indicator should be displayed in tooltips
			var showIndicatorName = ss.isValue(supplementData) && ss.isValue(supplementData.B) && ss.count(supplementData.B) > 0;
			var dataSeriesList = [];
			var primaryYAxisMin, primaryYAxisMax;
			var primaryInitialValue;
			var primaryDisplayOptions;
			var plotLines;
			// Since most charts has a single data item in order to improve performance
			// the two cases should be handled separately
			if (ss.isInstanceOfType(data, ss.IList)) {
				var dataList = ss.cast(data, ss.IList);
				primaryYAxisMin = null;
				primaryYAxisMax = null;
				plotLines = null;
				// TODO Remove once plot lines are calculated independently
				var colorList = $QuickView_Client_UI_Charts_Utils_$SharedUtils.$createSeriesAreaColors(ss.count(dataList));
				var isFirstItem = true;
				var colorIndex = 0;
				var $t1 = ss.getEnumerator(dataList);
				try {
					while ($t1.moveNext()) {
						var dataObj = $t1.current();
						var dataSeriesInfo = $QuickView_Client_UI_Charts_Utils_$LineChartUtils.$createDataSeries(dataObj, period, resolution, unit, (ss.isNullOrUndefined(supplementData) ? null : supplementData.H), this.mode, 'line', ss.makeGenericType($QuickView_Client_UI_Charts_$ColorSetCollection$1, [ss.makeGenericType($QuickView_Client_UI_Charts_$ChartColorSet$1, [$QuickView_Client_UI_Charts_$AreaChartColor])]).$ctor1([ss.getItem(colorList, colorIndex++)]), true);
						var localIndicator = { $: dataObj.I };
						if (ss.isNullOrUndefined(dataSeriesInfo.S.events)) {
							dataSeriesInfo.S.events = {};
						}
						dataSeriesInfo.S.events.mouseOver = ss.thisFix(ss.mkdel({ localIndicator: localIndicator, $this: this }, function(series) {
							this.$this.onPrimarySeriesMouseOver(new $QuickView_Client_UI_Charts_IndicatorEventArgs(this.localIndicator.$));
						}));
						dataSeriesInfo.S.events.mouseOut = ss.thisFix(ss.mkdel({ localIndicator: localIndicator, $this: this }, function(series1) {
							this.$this.onPrimarySeriesMouseOut(new $QuickView_Client_UI_Charts_IndicatorEventArgs(this.localIndicator.$));
						}));
						primaryYAxisMin = JS.MathNullable.min$1(primaryYAxisMin, dataSeriesInfo.Y.I);
						primaryYAxisMax = JS.MathNullable.max$1(primaryYAxisMax, dataSeriesInfo.Y.A);
						if (isFirstItem) {
							isFirstItem = false;
							// TODO Calculate plot lines independently from data
							// CAUTION Should depend on the range of data items available
							// CAUTION Should depend on collapsed/extended chart - collapsed should be for the entire period
							// while extended - only for the period data is available for
							plotLines = dataSeriesInfo.P;
						}
						dataSeriesList.push(dataSeriesInfo.S);
					}
				}
				finally {
					$t1.dispose();
				}
				primaryInitialValue = ss.coalesce(ss.getItem(dataList, 0).V, 0);
				primaryDisplayOptions = ss.getItem(dataList, 0).I.settings.D;
			}
			else {
				var dataObj1 = data;
				var dataSeriesInfo1 = $QuickView_Client_UI_Charts_Utils_$LineChartUtils.$createDataSeries(dataObj1, period, resolution, unit, (ss.isNullOrUndefined(supplementData) ? null : supplementData.H), this.mode, 'area', $QuickView_Client_UI_Charts_$ChartStyles.$areaChartColors, showIndicatorName);
				primaryYAxisMin = dataSeriesInfo1.Y.I;
				primaryYAxisMax = dataSeriesInfo1.Y.A;
				primaryInitialValue = ss.coalesce(dataObj1.V, 0);
				primaryDisplayOptions = dataObj1.I.settings.D;
				plotLines = dataSeriesInfo1.P;
				dataSeriesList.push(dataSeriesInfo1.S);
			}
			var secondaryYAxisMin = null;
			var secondaryYAxisMax = null;
			var drawdown = ss.isValue(options.get_D());
			if (drawdown) {
				var dataObj2 = data;
				var dataSeriesInfo2 = $QuickView_Client_UI_Charts_Utils_$LineChartUtils.$createDataSeries_Drawdown(dataObj2, options.get_D(), period, resolution, options.get_D().U, this.mode, 'area', $QuickView_Client_UI_Charts_$ChartStyles.$areaChartColors_Drawdown, showIndicatorName);
				secondaryYAxisMin = dataSeriesInfo2.Y.I;
				secondaryYAxisMax = dataSeriesInfo2.Y.A;
				// Show the series on a secondary axis
				dataSeriesInfo2.S.yAxis = 1;
				dataSeriesList.push(dataSeriesInfo2.S);
			}
			if (ss.isValue(supplementData) && ss.isValue(supplementData.B) && ss.count(supplementData.B) > 0) {
				var $t2 = ss.getEnumerator(supplementData.B);
				try {
					while ($t2.moveNext()) {
						var bmData = $t2.current();
						var bmSeries = $QuickView_Client_UI_Charts_Utils_$LineChartUtils.$createDataSeries(bmData, period, resolution, unit, null, this.mode, 'line', $QuickView_Client_UI_Charts_$ChartStyles.$additionalAreaChartColors, showIndicatorName);
						if (ss.isNullOrUndefined(bmSeries.S.events)) {
							bmSeries.S.events = {};
						}
						var localBenchmarkIndicator = { $: bmData.I };
						bmSeries.S.events.mouseOver = ss.thisFix(ss.mkdel({ localBenchmarkIndicator: localBenchmarkIndicator, $this: this }, function(series2) {
							this.$this.onBenchmarkSeriesMouseOver(new $QuickView_Client_UI_Charts_IndicatorEventArgs(this.localBenchmarkIndicator.$));
						}));
						bmSeries.S.events.mouseOut = ss.thisFix(ss.mkdel({ localBenchmarkIndicator: localBenchmarkIndicator, $this: this }, function(series3) {
							this.$this.onBenchmarkSeriesMouseOut(new $QuickView_Client_UI_Charts_IndicatorEventArgs(this.localBenchmarkIndicator.$));
						}));
						dataSeriesList.push(bmSeries.S);
						primaryYAxisMin = JS.MathNullable.min$1(primaryYAxisMin, bmSeries.Y.I);
						primaryYAxisMax = JS.MathNullable.max$1(primaryYAxisMax, bmSeries.Y.A);
					}
				}
				finally {
					$t2.dispose();
				}
			}
			if (ss.isValue(this.chart)) {
				this.chart.destroy();
				this.chart = null;
			}
			var plotBandList = ((ss.isNullOrUndefined(this.chart) && isExtended) ? $QuickView_Client_UI_Charts_Utils_$LineChartUtils.$calculatePlotBands(resolution, timeInterval.S, timeInterval.E) : null);
			if (ss.isValue(this.chart)) {
				// Update the chart
				throw new ss.NotSupportedException('Updating the data of a chart is not supported since multiple options need to be changed.');
			}
			else {
				var isNavigatorEnabled = isExtended && QuickView.Client.Common.AppEnvironment.get_isDesktopDevice();
				var yAxisList = [];
				var primaryYAxis = $QuickView_Client_UI_Charts_$HighchartsExtensions.$setDefaults$6(Object).call(null, { ceiling: primaryYAxisMax, floor: primaryYAxisMin, minPadding: 0.05, maxPadding: 0.05, startOnTick: false, endOnTick: false, showFirstLabel: true, showLastLabel: true, minorTickInterval: 'auto', minorGridLineWidth: 0, minorTickWidth: (isExtended ? 2 : 0), minorTickLength: (isExtended ? 1 : 0), labels: { formatter: $QuickView_Client_UI_Charts_$ChartComponents.$getYAxisLabelFormatter(unit, primaryDisplayOptions) }, plotLines: [$QuickView_Client_UI_Charts_$HighchartsExtensions.$applyZeroPlotLine({ value: primaryInitialValue })] });
				if (drawdown) {
					// Indicate that this chart contains returns
					$QuickView_Client_UI_Charts_$HighchartsExtensions.$setYAxisChartMode$1(Object).call(null, primaryYAxis, this.mode, 'Returns');
				}
				else {
					$QuickView_Client_UI_Charts_$HighchartsExtensions.$setYAxisChartMode(Object).call(null, primaryYAxis, this.mode, options.get_U());
				}
				yAxisList.push(primaryYAxis);
				if (drawdown) {
					primaryYAxis.height = '48%';
					var secondaryYAXis = $QuickView_Client_UI_Charts_$HighchartsExtensions.$setYAxisChartMode$1(Object).call(null, $QuickView_Client_UI_Charts_$HighchartsExtensions.$setDefaults$6(Object).call(null, { top: '52%', height: '48%', offset: 0, ceiling: secondaryYAxisMax, floor: secondaryYAxisMin, minPadding: 0.05, maxPadding: 0.05, startOnTick: false, endOnTick: false, showFirstLabel: true, showLastLabel: true, minorTickInterval: 'auto', minorGridLineWidth: 0, minorTickWidth: (isExtended ? 2 : 0), minorTickLength: (isExtended ? 1 : 0), labels: { formatter: $QuickView_Client_UI_Charts_$ChartComponents.$getYAxisLabelFormatter(unit, primaryDisplayOptions) }, plotLines: [$QuickView_Client_UI_Charts_$HighchartsExtensions.$applyZeroPlotLine({ value: primaryInitialValue })] }), this.mode, 'Drawdown');
					yAxisList.push(secondaryYAXis);
				}
				var highchartOptions = $QuickView_Client_UI_Charts_$HighchartsExtensions.$setDefaults({ series: dataSeriesList, chart: $QuickView_Client_UI_Charts_$HighchartsExtensions.$setChartMode($QuickView_Client_UI_Charts_$HighchartsExtensions.$setDefaults$1({ renderTo: this.element[0], events: { load: (isExtended ? ss.thisFix(ss.mkdel(this, this.$chart_Loaded)) : ss.thisFix(ss.mkdel(this, this.$chart_Loaded_NoOperation))) }, marginBottom: ((isExtended && false === isNavigatorEnabled) ? 50 : null) }), this.mode), plotOptions: { series: $QuickView_Client_UI_Charts_$ChartConstants.$defaultSeriesOptions, area: $QuickView_Client_UI_Charts_$HighchartsExtensions.$setDefaults$2({ threshold: primaryInitialValue }), line: $QuickView_Client_UI_Charts_$HighchartsExtensions.$setDefaults$4({}) }, navigator: (isNavigatorEnabled ? $QuickView_Client_UI_Charts_$ChartConstants.$defaultNavigator : $QuickView_Client_UI_Charts_$ChartConstants.$disabledNavigator), xAxis: $QuickView_Client_UI_Charts_$HighchartsExtensions.$setXAxisChartMode(Object).call(null, $QuickView_Client_UI_Charts_$HighchartsExtensions.$setDefaults$6(Object).call(null, { type: 'datetime', plotLines: plotLines, plotBands: plotBandList, offset: 0, units: $QuickView_Client_UI_Charts_$ChartConstants.$dateTimeAxisUnits, dateTimeLabelFormats: $QuickView_Client_UI_Charts_$ChartConstants.$dateTimeLabelFormats, labels: { style: { fontSize: '7pt' }, staggerLines: 1, secondRow: (isExtended ? $QuickView_Client_UI_Charts_$ChartConstants.$blacklabel_SecondRow : null) }, events: { afterSetExtremes: ss.thisFix(ss.mkdel(this, this.onXAxisAfterSetExtremes)) } }), this.mode, showXAxisTimeZone), yAxis: yAxisList, tooltip: { enabled: QuickView.Client.Common.AppEnvironment.get_isDesktopDevice() || this.mode === 2, shared: false, backgroundColor: 'transparent'.toString(), borderWidth: 0, shadow: false, useHTML: true, hideDelay: 0, positioner: ((this.mode === 1) ? ss.thisFix($QuickView_Client_UI_Charts_$ChartComponents.$collapsedChartTooltipPositioner) : null), formatter: $QuickView_Client_UI_Charts_$ChartComponents.$createTooltipFormatter(ss.thisFix($QuickView_Client_UI_Charts_$ChartComponents.$tooltipFormatter), this.get_showTooltipsOption()) } });
				if (false === isExtended) {
					var xAxis = highchartOptions.xAxis;
					xAxis.min = timeInterval.S.toDateTime().valueOf();
					xAxis.max = timeInterval.E.toDateTime().valueOf();
				}
				this.chart = new Highcharts.Chart(highchartOptions);
			}
		},
		$chart_Loaded: function(sender, e) {
			// Due to the Blacklabel's half-assed plug-in hiding the navigator is not applicable
			// without additional fixes
			//sender.HideNavigator();
		},
		$chart_Loaded_NoOperation: function(sender, e) {
			// CAUTION This method is required due to changes in HighCharts - it no longer tolerates
			// setting an event handler to "null"
		}
	}, $QuickView_Client_UI_Charts_ChartBase, [ss.IDisposable]);
	ss.initClass($QuickView_Client_UI_Charts_SubRedChart, $asm, {
		updateCore: function(data, period, timeInterval, unit, resolution, supplementData, options) {
			var dataObj = data;
			var indicator = dataObj.I;
			var isCompleteValue = QuickView.Client.Models.Charts.Indicator.isCompleteValue(indicator);
			// Local time is displayed for intraday values
			var intraday = resolution < 5;
			var highchartDataPointList_Sub = [];
			var highchartDataPointList_Red = [];
			// Missing data points should be created
			var expectedDataPointTime = timeInterval.S;
			var tooltipOptions = { YS: false === QuickView.Client.Models.Charts.Indicator.isCompleteValue(indicator), R: resolution, U: unit, C: indicator.timeSeriesCurrency, O: indicator.settings.D };
			var $t1 = ss.getEnumerator(dataObj.P);
			try {
				while ($t1.moveNext()) {
					var item = $t1.current();
					$QuickView_Client_UI_Charts_SubRedChart.$addEmptyMissingPoints(highchartDataPointList_Sub, expectedDataPointTime, item.T, resolution, intraday);
					$QuickView_Client_UI_Charts_SubRedChart.$addEmptyMissingPoints(highchartDataPointList_Red, expectedDataPointTime, item.T, resolution, intraday);
					// The expected time should be equal to the next "Time" at the beginning of the next iteration
					expectedDataPointTime = QuickView.Client.Algorithms.TimeExtensions.advanceTime$1(item.T, resolution);
					if (item.S !== 0) {
						var highchartDataPoint = { name: $QuickView_Client_UI_Charts_ChartFormat.$formatTime((intraday ? item.T.toLocalTime() : item.T), resolution, intraday, false), y: item.S, color: ss.makeGenericType($QuickView_Client_UI_Charts_$ChartColorSet$1, [$QuickView_Client_UI_Charts_$BarChartColor]).$get$1($QuickView_Client_UI_Charts_$ChartStyles.$barChartColorSet, item.S, isCompleteValue).B, tooltip: { O: tooltipOptions } };
						highchartDataPointList_Sub.push(highchartDataPoint);
					}
					else {
						// Add an empty data point
						highchartDataPointList_Sub.push({ name: $QuickView_Client_UI_Charts_ChartFormat.$formatTime((intraday ? item.T.toLocalTime() : item.T), resolution, intraday, false) });
					}
					if (item.R !== 0) {
						var highchartDataPoint1 = { name: $QuickView_Client_UI_Charts_ChartFormat.$formatTime((intraday ? item.T.toLocalTime() : item.T), resolution, intraday, false), y: item.R, color: ss.makeGenericType($QuickView_Client_UI_Charts_$ChartColorSet$1, [$QuickView_Client_UI_Charts_$BarChartColor]).$get$1($QuickView_Client_UI_Charts_$ChartStyles.$barChartColorSet, item.R, isCompleteValue).B, tooltip: { O: tooltipOptions } };
						highchartDataPointList_Red.push(highchartDataPoint1);
					}
					else {
						// Add an empty data point
						highchartDataPointList_Red.push({ name: $QuickView_Client_UI_Charts_ChartFormat.$formatTime((intraday ? item.T.toLocalTime() : item.T), resolution, intraday, false) });
					}
				}
			}
			finally {
				$t1.dispose();
			}
			$QuickView_Client_UI_Charts_SubRedChart.$addEmptyMissingPoints(highchartDataPointList_Sub, expectedDataPointTime, timeInterval.E, resolution, intraday);
			$QuickView_Client_UI_Charts_SubRedChart.$addEmptyMissingPoints(highchartDataPointList_Red, expectedDataPointTime, timeInterval.E, resolution, intraday);
			if (ss.isValue(this.chart)) {
				this.chart.destroy();
				this.chart = null;
			}
			if (ss.isValue(this.chart)) {
				// Update the chart
				this.chart.series[0].setData(highchartDataPointList_Sub, null, null, null);
				this.chart.series[1].setData(highchartDataPointList_Red, null, null, null);
			}
			else {
				var isExtended = this.mode === 2;
				var tooltip = { A: dataObj.V };
				var dataSeries_Sub = { data: highchartDataPointList_Sub, dataLabels: $QuickView_Client_UI_Charts_$ChartConstants.$disabledLabels };
				var dataSeries_Red = { data: highchartDataPointList_Red, dataLabels: $QuickView_Client_UI_Charts_$ChartConstants.$disabledLabels };
				dataSeries_Sub.tooltip = tooltip;
				dataSeries_Red.tooltip = tooltip;
				// The maximum number of data points for which labels can be shown; if the number of points
				// is above this number then data labels are not displayed on the bars
				var dataLabelsMaxDataPointCount = (isExtended ? 30 : 0);
				// Use "0" to disable labels for collapsed charts
				if (Math.max(highchartDataPointList_Sub.length, highchartDataPointList_Red.length) <= dataLabelsMaxDataPointCount) {
					var dataLabels = { enabled: true, allowOverlap: true, shadow: false, inside: false, style: { fontWeight: 'normal'.toString(), fontSize: '7pt', color: $QuickView_Client_UI_Charts_$ChartStyles.$barChartColorSet.positive.P }, formatter: $QuickView_Client_UI_Charts_$ChartComponents.$getBarChartDataLabelFormatter(unit, indicator.settings.D, false === isExtended), autoRotation: true };
					// Enable data labels
					dataSeries_Sub.dataLabels = dataLabels;
					dataSeries_Red.dataLabels = dataLabels;
				}
				var $t2 = [];
				$t2.push(dataSeries_Sub);
				$t2.push(dataSeries_Red);
				var dataSeriesList = $t2;
				var highchartOptions = $QuickView_Client_UI_Charts_$HighchartsExtensions.$setDefaults({ series: dataSeriesList, chart: $QuickView_Client_UI_Charts_$HighchartsExtensions.$setChartMode($QuickView_Client_UI_Charts_$HighchartsExtensions.$setDefaults$1({ renderTo: this.element[0], type: 'column' }), this.mode), plotOptions: { series: $QuickView_Client_UI_Charts_$ChartConstants.$defaultSeriesOptions, column: $QuickView_Client_UI_Charts_$HighchartsExtensions.$setDefaults$3({}) }, xAxis: $QuickView_Client_UI_Charts_$HighchartsExtensions.$setXAxisChartMode(Object).call(null, $QuickView_Client_UI_Charts_$HighchartsExtensions.$setDefaults$6(Object).call(null, { type: 'category', events: { afterSetExtremes: ss.thisFix(ss.mkdel(this, this.onXAxisAfterSetExtremes)) } }), this.mode, intraday), yAxis: $QuickView_Client_UI_Charts_$HighchartsExtensions.$setYAxisChartMode(Object).call(null, $QuickView_Client_UI_Charts_$HighchartsExtensions.$setDefaults$6(Object).call(null, { maxPadding: 0.02, startOnTick: false, endOnTick: false, labels: { formatter: $QuickView_Client_UI_Charts_$ChartComponents.$getYAxisLabelFormatter(unit, indicator.settings.D) }, plotLines: [$QuickView_Client_UI_Charts_$HighchartsExtensions.$applyZeroPlotLine({ value: 0 })] }), this.mode, options.get_U()), tooltip: { enabled: QuickView.Client.Common.AppEnvironment.get_isDesktopDevice() || this.mode === 2, shared: false, backgroundColor: 'transparent'.toString(), borderWidth: 0, shadow: false, useHTML: true, hideDelay: 0, positioner: ((this.mode === 1) ? ss.thisFix($QuickView_Client_UI_Charts_$ChartComponents.$collapsedChartTooltipPositioner) : null), formatter: ss.thisFix($QuickView_Client_UI_Charts_$ChartComponents.$tooltipFormatter) } });
				this.chart = new Highcharts.Chart(highchartOptions);
			}
		}
	}, $QuickView_Client_UI_Charts_ChartBase, [ss.IDisposable]);
	ss.initClass($QuickView_Client_UI_Charts_Utils_$BarChartUtils, $asm, {});
	ss.initClass($QuickView_Client_UI_Charts_Utils_$LineChartUtils, $asm, {});
	ss.initClass($QuickView_Client_UI_Charts_Utils_$SharedUtils, $asm, {});
	(function() {
		$QuickView_Client_UI_Charts_$ChartComponents.$_yAxisLabelformatterDict = null;
		$QuickView_Client_UI_Charts_$ChartComponents.$_barChartDataLabelFormatterDict = null;
		$QuickView_Client_UI_Charts_$ChartComponents.$emptyDataSeriesTooltip = {};
		$QuickView_Client_UI_Charts_$ChartComponents.$emptyDataPointTooltip = {};
		$QuickView_Client_UI_Charts_$ChartComponents.$emptyDataPointTooltipOptions = {};
	})();
	(function() {
		var $t3 = ss.makeGenericType($QuickView_Client_UI_Charts_$ColorSetCollection$1, [ss.makeGenericType($QuickView_Client_UI_Charts_$ChartColorSet$1, [$QuickView_Client_UI_Charts_$AreaChartColor])]);
		var $t1 = ss.makeGenericType($QuickView_Client_UI_Charts_$ChartColorSet$1, [$QuickView_Client_UI_Charts_$AreaChartColor]).$ctor();
		$t1.positive = $QuickView_Client_UI_Charts_$AreaChartColor.$ctor2('#00A000', 'rgba(0, 160, 0, 0.75)');
		$t1.positiveComplete = $QuickView_Client_UI_Charts_$AreaChartColor.$ctor2('#42b4e6', 'rgba(0, 51, 238, 0.75)');
		$t1.negative = $QuickView_Client_UI_Charts_$AreaChartColor.$ctor2('#FF0000', 'rgba(255, 0, 0, 0.75)');
		$t1.hwm = $QuickView_Client_UI_Charts_$AreaChartColor.$ctor2('#4ee007', 'rgba(78, 224, 7, 0.75)');
		var $t2 = ss.makeGenericType($QuickView_Client_UI_Charts_$ChartColorSet$1, [$QuickView_Client_UI_Charts_$AreaChartColor]).$ctor();
		$t2.positive = $QuickView_Client_UI_Charts_$AreaChartColor.$ctor2('#89A54E', 'rgba(137, 165, 78, 0.75)');
		$t2.positiveComplete = $QuickView_Client_UI_Charts_$AreaChartColor.$ctor2('#42b4e6', 'rgba(4, 104, 250, 0.75)');
		$t2.negative = $QuickView_Client_UI_Charts_$AreaChartColor.$ctor2('#AA4643', 'rgba(170, 70, 67, 0.75)');
		$t2.hwm = $QuickView_Client_UI_Charts_$AreaChartColor.$ctor2('#a2d33a', 'rgba(162, 211, 58, 0.75)');
		$QuickView_Client_UI_Charts_$ChartStyles.$areaChartColors = $t3.$ctor1([$t1, $t2]);
		var $t5 = ss.makeGenericType($QuickView_Client_UI_Charts_$ColorSetCollection$1, [ss.makeGenericType($QuickView_Client_UI_Charts_$ChartColorSet$1, [$QuickView_Client_UI_Charts_$AreaChartColor])]);
		var $t1 = ss.makeGenericType($QuickView_Client_UI_Charts_$ChartColorSet$1, [$QuickView_Client_UI_Charts_$AreaChartColor]).$ctor();
		$t1.positive = $QuickView_Client_UI_Charts_$AreaChartColor.$ctor2('#00A000', 'rgba(0, 160, 0, 0.75)');
		$t1.negative = $QuickView_Client_UI_Charts_$AreaChartColor.$ctor2('#0000FF', 'rgba(0, 0, 255, 0.75)');
		var $t2 = ss.makeGenericType($QuickView_Client_UI_Charts_$ChartColorSet$1, [$QuickView_Client_UI_Charts_$AreaChartColor]).$ctor();
		$t2.positive = $QuickView_Client_UI_Charts_$AreaChartColor.$ctor2('#00A000', 'rgba(0, 160, 0, 0.75)');
		$t2.negative = $QuickView_Client_UI_Charts_$AreaChartColor.$ctor2('#FF0000', 'rgba(255, 0, 0, 0.75)');
		var $t3 = ss.makeGenericType($QuickView_Client_UI_Charts_$ChartColorSet$1, [$QuickView_Client_UI_Charts_$AreaChartColor]).$ctor();
		$t3.positive = $QuickView_Client_UI_Charts_$AreaChartColor.$ctor2('#00A000', 'rgba(0, 160, 0, 0.75)');
		$t3.negative = $QuickView_Client_UI_Charts_$AreaChartColor.$ctor2('#FFFF00', 'rgba(255, 255, 0, 0.75)');
		var $t4 = ss.makeGenericType($QuickView_Client_UI_Charts_$ChartColorSet$1, [$QuickView_Client_UI_Charts_$AreaChartColor]).$ctor();
		$t4.positive = $QuickView_Client_UI_Charts_$AreaChartColor.$ctor2('#00A000', 'rgba(0, 160, 0, 0.75)');
		$t4.negative = $QuickView_Client_UI_Charts_$AreaChartColor.$ctor2('#00FF00', 'rgba(0, 255, 0, 0.75)');
		$QuickView_Client_UI_Charts_$ChartStyles.$areaChartColors_Drawdown = $t5.$ctor1([$t1, $t2, $t3, $t4]);
		var $t2 = ss.makeGenericType($QuickView_Client_UI_Charts_$ColorSetCollection$1, [ss.makeGenericType($QuickView_Client_UI_Charts_$ChartColorSet$1, [$QuickView_Client_UI_Charts_$AreaChartColor])]);
		var $t1 = ss.makeGenericType($QuickView_Client_UI_Charts_$ChartColorSet$1, [$QuickView_Client_UI_Charts_$AreaChartColor]).$ctor();
		$t1.positive = $QuickView_Client_UI_Charts_$AreaChartColor.$ctor2('rgba(0, 160, 160, 0.75)', 'rgba(0, 160, 160, 0.50)');
		$t1.positiveComplete = $QuickView_Client_UI_Charts_$AreaChartColor.$ctor2('rgba(0, 160, 160, 0.75)', 'rgba(0, 160, 160, 0.50)');
		$t1.negative = $QuickView_Client_UI_Charts_$AreaChartColor.$ctor2('rgba(255, 0, 255, 0.75)', 'rgba(255, 0, 255, 0.50)');
		$t1.hwm = $QuickView_Client_UI_Charts_$AreaChartColor.$ctor2('rgba(78, 224, 7, 0.75)', 'rgba(78, 224, 7, 0.50)');
		$QuickView_Client_UI_Charts_$ChartStyles.$additionalAreaChartColors = $t2.$ctor1([$t1]);
		var $t1 = ss.makeGenericType($QuickView_Client_UI_Charts_$ChartColorSet$1, [$QuickView_Client_UI_Charts_$BarChartColor]).$ctor();
		$t1.positive = $QuickView_Client_UI_Charts_$BarChartColor.$ctor2('green', 'white', 'yellow');
		$t1.positiveComplete = $QuickView_Client_UI_Charts_$BarChartColor.$ctor2('#0033ee', 'white', 'yellow');
		$t1.negative = $QuickView_Client_UI_Charts_$BarChartColor.$ctor2('red', 'white', 'yellow');
		$t1.hwm = $QuickView_Client_UI_Charts_$BarChartColor.$ctor2('#4ee007', 'white', 'yellow');
		$QuickView_Client_UI_Charts_$ChartStyles.$barChartColorSet = $t1;
		var $t1 = ss.makeGenericType($QuickView_Client_UI_Charts_$ChartColorSet$1, [$QuickView_Client_UI_Charts_$BarChartColor]).$ctor();
		$t1.positive = $QuickView_Client_UI_Charts_$BarChartColor.$ctor2('rgba(0, 160, 160, 0.75)', '#FFA500', '#FFA500');
		$t1.positiveComplete = $QuickView_Client_UI_Charts_$BarChartColor.$ctor2('rgba(0, 160, 160, 0.75)', '#FFA500', '#FFA500');
		$t1.negative = $QuickView_Client_UI_Charts_$BarChartColor.$ctor2('rgba(255, 0, 255, 0.75)', '#FFA500', '#FFA500');
		$t1.hwm = null;
		$QuickView_Client_UI_Charts_$ChartStyles.$additionalBarChartColorSet = $t1;
		$QuickView_Client_UI_Charts_$ChartStyles.$gridLineColor = '#C0C0C0';
		$QuickView_Client_UI_Charts_$ChartStyles.$plotLineColor = '#C0C0C0';
		$QuickView_Client_UI_Charts_$ChartStyles.$axisLabelColor = '#C0C0C0';
	})();
	(function() {
		$QuickView_Client_UI_Charts_$ChartConstants.$plotBandColors = ['#232323', 'black'];
		$QuickView_Client_UI_Charts_$ChartConstants.$plotBandColor_Holiday = '#505050';
		$QuickView_Client_UI_Charts_$ChartConstants.$zeroPlotLine = { color: $QuickView_Client_UI_Charts_$ChartStyles.$gridLineColor, width: 1, value: 0, dashStyle: 'ShortDot' };
		$QuickView_Client_UI_Charts_$ChartConstants.$disabledLabels = { enabled: false };
		$QuickView_Client_UI_Charts_$ChartConstants.$autoRotationLabels = { enabled: true, autoRotation: true };
		$QuickView_Client_UI_Charts_$ChartConstants.$dateTimeLabelFormats = { millisecond: '%H:%M:%S.%L', second: '%H:%M:%S', minute: '%H:%M', hour: '%H:%M', day: '%d %a', week: '%d', month: '%P', year: '%Y' };
		$QuickView_Client_UI_Charts_$ChartConstants.$dateTimeAxisUnits = [['millisecond', [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ['second', [1, 2, 5, 10, 15, 30]], ['minute', [1, 2, 5, 10, 15, 30]], ['hour', [1, 2, 3, 4, 6, 8, 12]], ['day', [1, 2]], ['week', [1]], ['month', [1, 3]], ['year', null]];
		$QuickView_Client_UI_Charts_$ChartConstants.$defaultScrollbar = { enabled: true };
		$QuickView_Client_UI_Charts_$ChartConstants.$disabledScrollbar = { enabled: false };
		$QuickView_Client_UI_Charts_$ChartConstants.$defaultNavigator = { enabled: true };
		$QuickView_Client_UI_Charts_$ChartConstants.$disabledNavigator = { enabled: false };
		$QuickView_Client_UI_Charts_$ChartConstants.$blacklabel_SecondRow = { enabled: true, backgroundColors: ['gray', 'blue'], style: { fontSize: '7pt', borderWidth: 1, borderColor: 'white'.toString(), color: 'yellow', height: 16 }, dateTimeLabelFormats: { millisecond: '%H:%M:%S.%L', second: '%H:%M:%S', minute: '%H:%M', hour: '%H:%M', day: '%e. %b', week: '%a %d %b %Y', month: '%b %Y', year: '%YY', years: '%Y - %p' } };
		$QuickView_Client_UI_Charts_$ChartConstants.$disabledResetZoomButton = { theme: { style: { display: 'none' } } };
		$QuickView_Client_UI_Charts_$ChartConstants.$defaultResetZoomButton = { relativeTo: 'chart', position: { x: -5, y: 5, align: 'right', verticalAlign: 'top' }, theme: { fill: 'rgba(255,255,255,0.5)', stroke: 'rgba(255,255,255,0.5)', r: 8, style: { fontSize: '7pt', color: 'black'.toString() }, states: { hover: { fill: 'rgba(255,255,255,0.5)', stroke: 'rgba(255,255,255,0.5)', style: { cursor: 'hand' } } } } };
		$QuickView_Client_UI_Charts_$ChartConstants.$defaultSeriesOptions = { turboThreshold: 0, dataGrouping: { enabled: false } };
	})();
	(function() {
		$QuickView_Client_UI_Charts_$HighchartsExtensions.$noSpacing = [0, 0, 0, 0];
	})();
	(function() {
		$QuickView_Client_UI_Charts_ChartOptions.$default = new $QuickView_Client_UI_Charts_ChartOptions();
	})();
})();
