(function() {
	'use strict';
	var $asm = {};
	global.JS = global.JS || {};
	global.JS.Collections = global.JS.Collections || {};
	global.JS.Composition = global.JS.Composition || {};
	global.JS.Diagnostics = global.JS.Diagnostics || {};
	global.JS.Linq = global.JS.Linq || {};
	global.JS.Threading = global.JS.Threading || {};
	global.JS.Utils = global.JS.Utils || {};
	ss.initAssembly($asm, 'JS.Core');
	////////////////////////////////////////////////////////////////////////////////
	// JS.ArgumentHelper
	var $JS_ArgumentHelper = function() {
	};
	$JS_ArgumentHelper.__typeName = 'JS.ArgumentHelper';
	$JS_ArgumentHelper.notNull = function(value, paramName) {
		if (ss.isNullOrUndefined(value)) {
			throw new ss.ArgumentNullException(paramName);
		}
	};
	$JS_ArgumentHelper.noNullElements = function(T) {
		return function(list, paramName) {
			$JS_ArgumentHelper.notNull(list, paramName);
			var $t1 = ss.getEnumerator(list);
			try {
				while ($t1.moveNext()) {
					var item = $t1.current();
					$JS_ArgumentHelper.notNull(item, paramName);
				}
			}
			finally {
				$t1.dispose();
			}
		};
	};
	$JS_ArgumentHelper.notNullOrEmpty = function(value, paramName) {
		if (ss.isNullOrEmptyString(value)) {
			throw new ss.ArgumentNullException(paramName);
		}
	};
	$JS_ArgumentHelper.positive = function(value, parameterName) {
		if (value <= 0) {
			throw new ss.ArgumentOutOfRangeException(parameterName, 'Must be a positive value.', null, value);
		}
	};
	$JS_ArgumentHelper.positiveOrDefault = function(value, parameterName) {
		if (value < 0) {
			throw new ss.ArgumentOutOfRangeException(parameterName, 'Must be a non-negative value.', null, value);
		}
	};
	$JS_ArgumentHelper.range$1 = function(minimum, maximum, value, parameterName) {
		if (value < minimum || value > maximum) {
			throw new ss.ArgumentOutOfRangeException(parameterName, ss.formatString('Must be between {0} and {1}.', minimum, maximum), null, value);
		}
	};
	$JS_ArgumentHelper.range = function(minimum, maximum, value, parameterName) {
		if (value < minimum || value > maximum) {
			throw new ss.ArgumentOutOfRangeException(parameterName, ss.formatString('Must be between {0} and {1}.', minimum, maximum), null, value);
		}
	};
	global.JS.ArgumentHelper = $JS_ArgumentHelper;
	////////////////////////////////////////////////////////////////////////////////
	// JS.DateTimeExt
	var $JS_DateTimeExt = function() {
		this.$_time = new Date(0);
		this.$_kind = 0;
	};
	$JS_DateTimeExt.__typeName = 'JS.DateTimeExt';
	$JS_DateTimeExt.$ctor1 = function(time) {
		this.$_time = new Date(0);
		this.$_kind = 0;
		this.$_time = time;
		this.$_kind = 0;
	};
	$JS_DateTimeExt.$ctor2 = function(time, kind) {
		this.$_time = new Date(0);
		this.$_kind = 0;
		this.$_time = time;
		this.$_kind = kind;
	};
	$JS_DateTimeExt.$ctor3 = function(year, month, day) {
		this.$_time = new Date(0);
		this.$_kind = 0;
		this.$_time = new Date(year, month - 1, day);
		this.$_kind = 0;
	};
	$JS_DateTimeExt.$ctor4 = function(year, month, day, hours, minutes, seconds) {
		this.$_time = new Date(0);
		this.$_kind = 0;
		this.$_time = new Date(year, month - 1, day, hours, minutes, seconds);
		this.$_kind = 0;
	};
	$JS_DateTimeExt.$ctor6 = function(year, month, day, hours, minutes, seconds, milliseconds) {
		this.$_time = new Date(0);
		this.$_kind = 0;
		this.$_time = new Date(year, month - 1, day, hours, minutes, seconds, milliseconds);
		this.$_kind = 0;
	};
	$JS_DateTimeExt.$ctor5 = function(year, month, day, hours, minutes, seconds, kind) {
		this.$_time = new Date(0);
		this.$_kind = 0;
		if (kind === 1) {
			this.$_time = new Date(Date.UTC(year, month - 1, day, hours, minutes, seconds));
		}
		else {
			this.$_time = new Date(year, month - 1, day, hours, minutes, seconds);
		}
		this.$_kind = kind;
	};
	$JS_DateTimeExt.$ctor7 = function(year, month, day, hours, minutes, seconds, milliseconds, kind) {
		this.$_time = new Date(0);
		this.$_kind = 0;
		if (kind === 1) {
			this.$_time = new Date(Date.UTC(year, month - 1, day, hours, minutes, seconds, milliseconds));
		}
		else {
			this.$_time = new Date(year, month - 1, day, hours, minutes, seconds, milliseconds);
		}
		this.$_kind = kind;
	};
	$JS_DateTimeExt.getDefaultValue = function() {
		return new $JS_DateTimeExt();
	};
	$JS_DateTimeExt.get_now = function() {
		return new $JS_DateTimeExt.$ctor1(new Date());
	};
	$JS_DateTimeExt.get_utcNow = function() {
		return new $JS_DateTimeExt.$ctor2(new Date(), 1);
	};
	$JS_DateTimeExt.get_today = function() {
		return new $JS_DateTimeExt.$ctor1(ss.today());
	};
	$JS_DateTimeExt.op_Subtraction = function(a, b) {
		return a.subtract(b);
	};
	$JS_DateTimeExt.op_Addition = function(a, b) {
		return a.add(b);
	};
	$JS_DateTimeExt.op_Subtraction$1 = function(a, b) {
		return a.subtract$1(b);
	};
	$JS_DateTimeExt.op_Equality$1 = function(a, b) {
		if (ss.referenceEquals(a, b)) {
			return true;
		}
		else if (ss.referenceEquals(a, null) || ss.referenceEquals(b, null)) {
			return false;
		}
		else {
			return ss.staticEquals(ss.unbox(a).$_time, ss.unbox(b).$_time);
		}
	};
	$JS_DateTimeExt.op_Inequality$1 = function(a, b) {
		return false === $JS_DateTimeExt.op_Equality$1(a, b);
	};
	$JS_DateTimeExt.op_Equality = function(a, b) {
		return ss.staticEquals(a.$_time, b.$_time);
	};
	$JS_DateTimeExt.op_Inequality = function(a, b) {
		return !ss.staticEquals(a.$_time, b.$_time);
	};
	$JS_DateTimeExt.op_LessThan = function(a, b) {
		return a.$_time < b.$_time;
	};
	$JS_DateTimeExt.op_GreaterThan = function(a, b) {
		return a.$_time > b.$_time;
	};
	$JS_DateTimeExt.op_LessThanOrEqual = function(a, b) {
		return a.$_time <= b.$_time;
	};
	$JS_DateTimeExt.op_GreaterThanOrEqual = function(a, b) {
		return a.$_time >= b.$_time;
	};
	$JS_DateTimeExt.$convertToUtc = function(time) {
		return new Date(time.getTime() + time.getTimezoneOffset() * 60 * 1000);
	};
	global.JS.DateTimeExt = $JS_DateTimeExt;
	////////////////////////////////////////////////////////////////////////////////
	// JS.DateTimeExtensions
	var $JS_DateTimeExtensions = function() {
	};
	$JS_DateTimeExtensions.__typeName = 'JS.DateTimeExtensions';
	$JS_DateTimeExtensions.toUtcExt = function(value) {
		return new $JS_DateTimeExt.$ctor2(value, 1);
	};
	$JS_DateTimeExtensions.toUtcExt$1 = function(value) {
		return (ss.staticEquals(value, null) ? null : new $JS_DateTimeExt.$ctor2(ss.unbox(value), 1));
	};
	$JS_DateTimeExtensions.toLocalExt = function(value) {
		return new $JS_DateTimeExt.$ctor2(value, 0);
	};
	$JS_DateTimeExtensions.toLocalExt$1 = function(value) {
		return (ss.staticEquals(value, null) ? null : new $JS_DateTimeExt.$ctor2(ss.unbox(value), 0));
	};
	global.JS.DateTimeExtensions = $JS_DateTimeExtensions;
	////////////////////////////////////////////////////////////////////////////////
	// JS.DateTimeHelper
	var $JS_DateTimeHelper = function() {
	};
	$JS_DateTimeHelper.__typeName = 'JS.DateTimeHelper';
	$JS_DateTimeHelper.min$1 = function(a, b) {
		return ((a < b) ? a : b);
	};
	$JS_DateTimeHelper.max$1 = function(a, b) {
		return ((a > b) ? a : b);
	};
	$JS_DateTimeHelper.min = function(a, b) {
		return ($JS_DateTimeExt.op_LessThan(a, b) ? a : b);
	};
	$JS_DateTimeHelper.max = function(a, b) {
		return ($JS_DateTimeExt.op_GreaterThan(a, b) ? a : b);
	};
	global.JS.DateTimeHelper = $JS_DateTimeHelper;
	////////////////////////////////////////////////////////////////////////////////
	// JS.DateTimeKind
	var $JS_DateTimeKind = function() {
	};
	$JS_DateTimeKind.__typeName = 'JS.DateTimeKind';
	global.JS.DateTimeKind = $JS_DateTimeKind;
	////////////////////////////////////////////////////////////////////////////////
	// JS.DBNull
	var $JS_DBNull = function() {
	};
	$JS_DBNull.__typeName = 'JS.DBNull';
	$JS_DBNull.get_value = function() {
		return $JS_DBNull.$_value;
	};
	global.JS.DBNull = $JS_DBNull;
	////////////////////////////////////////////////////////////////////////////////
	// JS.EnumExtensions
	var $JS_EnumExtensions = function() {
	};
	$JS_EnumExtensions.__typeName = 'JS.EnumExtensions';
	$JS_EnumExtensions.isSet = function(obj, value) {
		var intObj = ss.unbox(ss.cast(obj, ss.Int32));
		var intValue = ss.unbox(ss.cast(value, ss.Int32));
		return (intObj & intValue) === intValue;
	};
	$JS_EnumExtensions.set = function(T) {
		return function(obj, value, isSet) {
			var intObj = ss.unbox(ss.cast(obj, ss.Int32));
			var intValue = ss.unbox(ss.cast(value, ss.Int32));
			if (isSet) {
				return ss.cast(intObj | intValue, T);
			}
			else {
				return ss.cast(intObj & ~intValue, T);
			}
		};
	};
	global.JS.EnumExtensions = $JS_EnumExtensions;
	////////////////////////////////////////////////////////////////////////////////
	// JS.EventExtensions
	var $JS_EventExtensions = function() {
	};
	$JS_EventExtensions.__typeName = 'JS.EventExtensions';
	$JS_EventExtensions.fire = function(handler, sender, e) {
		if (!ss.staticEquals(handler, null)) {
			handler(sender, e);
		}
	};
	$JS_EventExtensions.fireAsync = function(handler, sender, e) {
		if (!ss.staticEquals(handler, null)) {
			window.setTimeout(function() {
				handler(sender, e);
			});
		}
	};
	$JS_EventExtensions.fire$2 = function(TEventArgs) {
		return function(handler, sender, e) {
			if (!ss.staticEquals(handler, null)) {
				handler(sender, e);
			}
		};
	};
	$JS_EventExtensions.fireAsync$2 = function(TEventArgs) {
		return function(handler, sender, e) {
			if (!ss.staticEquals(handler, null)) {
				window.setTimeout(function() {
					handler(sender, e);
				});
			}
		};
	};
	$JS_EventExtensions.fire$1 = function(TEventArgs) {
		return function(handler, sender, e) {
			$JS_ArgumentHelper.notNull(e, 'e');
			if (!ss.staticEquals(handler, null)) {
				var args = e();
				handler(sender, args);
			}
		};
	};
	$JS_EventExtensions.fireAsync$1 = function(TEventArgs) {
		return function(handler, sender, e) {
			$JS_ArgumentHelper.notNull(e, 'e');
			if (!ss.staticEquals(handler, null)) {
				var args = e();
				window.setTimeout(function() {
					handler(sender, args);
				});
			}
		};
	};
	global.JS.EventExtensions = $JS_EventExtensions;
	////////////////////////////////////////////////////////////////////////////////
	// JS.HttpStatusCode
	var $JS_HttpStatusCode = function() {
	};
	$JS_HttpStatusCode.__typeName = 'JS.HttpStatusCode';
	global.JS.HttpStatusCode = $JS_HttpStatusCode;
	////////////////////////////////////////////////////////////////////////////////
	// JS.MathNullable
	var $JS_MathNullable = function() {
	};
	$JS_MathNullable.__typeName = 'JS.MathNullable';
	$JS_MathNullable.min = function(a, b) {
		return (ss.isNullOrUndefined(a) ? b : (ss.isNullOrUndefined(b) ? a : Math.min(ss.unbox(a), ss.unbox(b))));
	};
	$JS_MathNullable.max = function(a, b) {
		return (ss.isNullOrUndefined(a) ? b : (ss.isNullOrUndefined(b) ? a : Math.max(ss.unbox(a), ss.unbox(b))));
	};
	$JS_MathNullable.min$1 = function(a, b) {
		return (ss.isNullOrUndefined(a) ? b : (ss.isNullOrUndefined(b) ? a : Math.min(ss.unbox(a), ss.unbox(b))));
	};
	$JS_MathNullable.max$1 = function(a, b) {
		return (ss.isNullOrUndefined(a) ? b : (ss.isNullOrUndefined(b) ? a : Math.max(ss.unbox(a), ss.unbox(b))));
	};
	global.JS.MathNullable = $JS_MathNullable;
	////////////////////////////////////////////////////////////////////////////////
	// JS.MTuple
	var $JS_MTuple = function() {
	};
	$JS_MTuple.__typeName = 'JS.MTuple';
	$JS_MTuple.create = function(T1) {
		return function(value) {
			return new (ss.makeGenericType($JS_MTuple$1, [T1]).$ctor1)(value);
		};
	};
	global.JS.MTuple = $JS_MTuple;
	////////////////////////////////////////////////////////////////////////////////
	// JS.MTuple
	var $JS_MTuple$1 = function(T1) {
		var $type = function() {
			this.item1 = ss.getDefaultValue(T1);
		};
		$type.$ctor1 = function(value) {
			this.item1 = ss.getDefaultValue(T1);
			this.item1 = value;
		};
		ss.registerGenericClassInstance($type, $JS_MTuple$1, [T1], {}, function() {
			return null;
		}, function() {
			return [];
		});
		$type.$ctor1.prototype = $type.prototype;
		return $type;
	};
	$JS_MTuple$1.__typeName = 'JS.MTuple$1';
	ss.initGenericClass($JS_MTuple$1, $asm, 1);
	global.JS.MTuple$1 = $JS_MTuple$1;
	////////////////////////////////////////////////////////////////////////////////
	// JS.ObjectExtensions
	var $JS_ObjectExtensions = function() {
	};
	$JS_ObjectExtensions.__typeName = 'JS.ObjectExtensions';
	global.JS.ObjectExtensions = $JS_ObjectExtensions;
	////////////////////////////////////////////////////////////////////////////////
	// JS.ObjectHelper
	var $JS_ObjectHelper = function() {
	};
	$JS_ObjectHelper.__typeName = 'JS.ObjectHelper';
	$JS_ObjectHelper.cloneSerializable = function(T) {
		return function(obj) {
			$JS_ArgumentHelper.notNull(obj, 'obj');
			return JSON.parse(JSON.stringify(obj));
		};
	};
	global.JS.ObjectHelper = $JS_ObjectHelper;
	////////////////////////////////////////////////////////////////////////////////
	// JS.StringExtensions
	var $JS_StringExtensions = function() {
	};
	$JS_StringExtensions.__typeName = 'JS.StringExtensions';
	$JS_StringExtensions.or = function(s, other) {
		return (ss.isNullOrEmptyString(s) ? other : s);
	};
	$JS_StringExtensions.or$1 = function(s, other) {
		if (ss.isNullOrEmptyString(s) && ss.isValue(other)) {
			for (var k = 0; k < other.length; k++) {
				if (false === ss.isNullOrEmptyString(other[k])) {
					return other[k];
				}
			}
		}
		return s;
	};
	global.JS.StringExtensions = $JS_StringExtensions;
	////////////////////////////////////////////////////////////////////////////////
	// JS.TimeZoneInfo
	var $JS_TimeZoneInfo = function() {
		this.name = null;
		this.name = this.$getTimeZoneName();
	};
	$JS_TimeZoneInfo.__typeName = 'JS.TimeZoneInfo';
	$JS_TimeZoneInfo.get_local = function() {
		if (ss.isNullOrUndefined($JS_TimeZoneInfo.$_local)) {
			$JS_TimeZoneInfo.$_local = new $JS_TimeZoneInfo();
		}
		return $JS_TimeZoneInfo.$_local;
	};
	global.JS.TimeZoneInfo = $JS_TimeZoneInfo;
	////////////////////////////////////////////////////////////////////////////////
	// JS.Composition.IocContainer.TypeRegistration
	var $JS_$Composition_IocContainer$TypeRegistration = function() {
	};
	$JS_$Composition_IocContainer$TypeRegistration.__typeName = 'JS.$Composition.IocContainer$TypeRegistration';
	$JS_$Composition_IocContainer$TypeRegistration.$ctor2 = function(type, isSingleton, constructor) {
		var $this = {};
		$this.isSingleton = false;
		$this.implementationType = null;
		$this.implementationInstance = null;
		$this.constructor = null;
		$this.implementationType = type;
		$this.implementationInstance = null;
		$this.isSingleton = isSingleton;
		$this.constructor = constructor;
		return $this;
	};
	$JS_$Composition_IocContainer$TypeRegistration.$ctor1 = function(type, implementation) {
		var $this = {};
		$this.isSingleton = false;
		$this.implementationType = null;
		$this.implementationInstance = null;
		$this.constructor = null;
		$this.implementationType = type;
		$this.implementationInstance = implementation;
		$this.isSingleton = true;
		$this.constructor = null;
		return $this;
	};
	$JS_$Composition_IocContainer$TypeRegistration.$ctor = function(implementation) {
		var $this = $JS_$Composition_IocContainer$TypeRegistration.$ctor1(ss.getInstanceType(implementation), implementation);
		return $this;
	};
	$JS_$Composition_IocContainer$TypeRegistration.isInstanceOfType = function() {
		return true;
	};
	////////////////////////////////////////////////////////////////////////////////
	// JS.Utils.ObjectCache.CacheItem
	var $JS_$Utils_$ObjectCache$CacheItem = function(value, timeout) {
		this.$value = null;
		this.$expirationTime = null;
		this.$value = value;
		if (timeout > 0) {
			this.$expirationTime = new Date((new Date()).valueOf() + Math.round(timeout));
		}
	};
	$JS_$Utils_$ObjectCache$CacheItem.__typeName = 'JS.$Utils.$ObjectCache$CacheItem';
	////////////////////////////////////////////////////////////////////////////////
	// JS.Utils.Switch.SwitchItem
	var $JS_$Utils_Switch$SwitchItem = function(parent, id) {
		this.$_parent = null;
		this.$_id = 0;
		this.$_parent = parent;
		this.$_id = id;
	};
	$JS_$Utils_Switch$SwitchItem.__typeName = 'JS.$Utils.Switch$SwitchItem';
	////////////////////////////////////////////////////////////////////////////////
	// JS.Collections.CollectionExtensions
	var $JS_Collections_CollectionExtensions = function() {
	};
	$JS_Collections_CollectionExtensions.__typeName = 'JS.Collections.CollectionExtensions';
	$JS_Collections_CollectionExtensions.asArray = function(T) {
		return function(list) {
			return list;
		};
	};
	$JS_Collections_CollectionExtensions.asReadOnly = function(T) {
		return function(list) {
			return (ss.isNullOrUndefined(list) ? null : list);
		};
	};
	$JS_Collections_CollectionExtensions.dispose = function(list) {
		$JS_Collections_CollectionExtensions.dispose$1(list, true);
	};
	$JS_Collections_CollectionExtensions.dispose$1 = function(list, reverseOrder) {
		$JS_ArgumentHelper.notNull(list, 'list');
		if (reverseOrder) {
			for (var k = ss.count(list) - 1; k >= 0; k--) {
				var item = ss.getItem(list, k);
				if (ss.isValue(item)) {
					item.dispose();
				}
			}
		}
		else {
			var $t1 = ss.getEnumerator(list);
			try {
				while ($t1.moveNext()) {
					var item1 = $t1.current();
					if (ss.isValue(item1)) {
						item1.dispose();
					}
				}
			}
			finally {
				$t1.dispose();
			}
		}
	};
	$JS_Collections_CollectionExtensions.put = function(TList, TItem) {
		return function(list, item) {
			$JS_ArgumentHelper.notNull(list, 'list');
			ss.add(list, item);
			return item;
		};
	};
	$JS_Collections_CollectionExtensions.getView = function(T) {
		return function(list, index, count) {
			return new (ss.makeGenericType($JS_Collections_ReadOnlyListView$1, [T]))(list, index, count);
		};
	};
	global.JS.Collections.CollectionExtensions = $JS_Collections_CollectionExtensions;
	////////////////////////////////////////////////////////////////////////////////
	// JS.Collections.CollectionUtils
	var $JS_Collections_CollectionUtils = function() {
	};
	$JS_Collections_CollectionUtils.__typeName = 'JS.Collections.CollectionUtils';
	$JS_Collections_CollectionUtils.coalesce$1 = function(T) {
		return function(list) {
			return $JS_Collections_CollectionUtils.coalesce(T).call(null, list);
		};
	};
	$JS_Collections_CollectionUtils.coalesce = function(T) {
		return function(list) {
			$JS_ArgumentHelper.notNull(list, 'list');
			var $t1 = ss.getEnumerator(list);
			try {
				while ($t1.moveNext()) {
					var item = $t1.current();
					if (ss.isValue(item)) {
						return item;
					}
				}
			}
			finally {
				$t1.dispose();
			}
			return null;
		};
	};
	global.JS.Collections.CollectionUtils = $JS_Collections_CollectionUtils;
	////////////////////////////////////////////////////////////////////////////////
	// JS.Collections.ObservableCollection
	var $JS_Collections_ObservableCollection$1 = function(T) {
		var $type = function() {
			this.$1$CollectionChangedField = null;
			this.$_itemList = [];
		};
		ss.registerGenericClassInstance($type, $JS_Collections_ObservableCollection$1, [T], {
			add_collectionChanged: function(value) {
				this.$1$CollectionChangedField = ss.delegateCombine(this.$1$CollectionChangedField, value);
			},
			remove_collectionChanged: function(value) {
				this.$1$CollectionChangedField = ss.delegateRemove(this.$1$CollectionChangedField, value);
			},
			onCollectionChanged: function(e) {
				var temp = this.$1$CollectionChangedField;
				if (!ss.staticEquals(temp, null)) {
					temp(this, e);
				}
			},
			indexOf: function(item) {
				return ss.indexOf(this.$_itemList, item);
			},
			insert: function(index, item) {
				ss.insert(this.$_itemList, index, item);
				this.onCollectionChanged(ss.EventArgs.Empty);
			},
			removeAt: function(index) {
				ss.removeAt(this.$_itemList, index);
				this.onCollectionChanged(ss.EventArgs.Empty);
			},
			get_item: function(index) {
				return this.$_itemList[index];
			},
			set_item: function(index, value) {
				this.$_itemList[index] = value;
				this.onCollectionChanged(ss.EventArgs.Empty);
			},
			add: function(item) {
				this.$_itemList.push(item);
				this.onCollectionChanged(ss.EventArgs.Empty);
			},
			clear: function() {
				ss.clear(this.$_itemList);
				this.onCollectionChanged(ss.EventArgs.Empty);
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
					this.onCollectionChanged(ss.EventArgs.Empty);
				}
				return result;
			},
			getEnumerator: function() {
				return ss.getEnumerator(this.$_itemList);
			}
		}, function() {
			return null;
		}, function() {
			return [ss.IEnumerable, ss.IEnumerable, ss.ICollection, ss.IList];
		});
		return $type;
	};
	$JS_Collections_ObservableCollection$1.__typeName = 'JS.Collections.ObservableCollection$1';
	ss.initGenericClass($JS_Collections_ObservableCollection$1, $asm, 1);
	global.JS.Collections.ObservableCollection$1 = $JS_Collections_ObservableCollection$1;
	////////////////////////////////////////////////////////////////////////////////
	// JS.Collections.ReadOnlyListView
	var $JS_Collections_ReadOnlyListView$1 = function(T) {
		var $type = function(list, index, count) {
			this.$_list = null;
			this.$_index = 0;
			this.$_count = 0;
			this.$_lastIndex = 0;
			$JS_ArgumentHelper.notNull(list, 'list');
			$JS_ArgumentHelper.positiveOrDefault(index, 'index');
			$JS_ArgumentHelper.positiveOrDefault(count, 'count');
			if (index + count > ss.count(list)) {
				throw new ss.ArgumentException('index + count must be greater than the number of elements in list.');
			}
			this.$_list = list;
			this.$_index = index;
			this.$_count = count;
			this.$_lastIndex = index + count;
		};
		ss.registerGenericClassInstance($type, $JS_Collections_ReadOnlyListView$1, [T], {
			indexOf: function(item) {
				var result = ss.indexOf(this.$_list, item) - this.$_index;
				if (result < 0 || result >= this.$_count) {
					return -1;
				}
				else {
					return result;
				}
			},
			insert: function(index, item) {
				throw new ss.NotSupportedException();
			},
			removeAt: function(index) {
				throw new ss.NotSupportedException();
			},
			get_item: function(index) {
				if (index < 0 || index >= this.$_count) {
					throw new ss.ArgumentOutOfRangeException('index', 'Must be a non-negative number less than the number of elements.', null, index);
				}
				return ss.getItem(this.$_list, index + this.$_index);
			},
			set_item: function(index, value) {
				throw new ss.NotSupportedException();
			},
			add: function(item) {
				throw new ss.NotSupportedException();
			},
			clear: function() {
				throw new ss.NotSupportedException();
			},
			contains: function(item) {
				return this.indexOf(item) >= 0;
			},
			get_count: function() {
				return this.$_count;
			},
			remove: function(item) {
				throw new ss.NotSupportedException();
			},
			getEnumerator: function() {
				var $result, $state = 0, k;
				return new ss.IteratorBlockEnumerator(function() {
					$sm1:
					for (;;) {
						switch ($state) {
							case 0: {
								$state = -1;
								k = this.$_index;
								$state = 1;
								continue $sm1;
							}
							case 1: {
								$state = -1;
								if (!(k < this.$_lastIndex)) {
									$state = -1;
									break $sm1;
								}
								$result = ss.getItem(this.$_list, k);
								$state = 2;
								return true;
							}
							case 2: {
								$state = -1;
								k++;
								$state = 1;
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
				}, null, this);
			}
		}, function() {
			return null;
		}, function() {
			return [ss.IEnumerable, ss.IEnumerable, ss.ICollection, ss.IList];
		});
		return $type;
	};
	$JS_Collections_ReadOnlyListView$1.__typeName = 'JS.Collections.ReadOnlyListView$1';
	ss.initGenericClass($JS_Collections_ReadOnlyListView$1, $asm, 1);
	global.JS.Collections.ReadOnlyListView$1 = $JS_Collections_ReadOnlyListView$1;
	////////////////////////////////////////////////////////////////////////////////
	// JS.Composition.CreationPolicy
	var $JS_Composition_CreationPolicy = function() {
	};
	$JS_Composition_CreationPolicy.__typeName = 'JS.Composition.CreationPolicy';
	global.JS.Composition.CreationPolicy = $JS_Composition_CreationPolicy;
	////////////////////////////////////////////////////////////////////////////////
	// JS.Composition.ExportAttribute
	var $JS_Composition_ExportAttribute = function() {
		this.contractType = null;
	};
	$JS_Composition_ExportAttribute.__typeName = 'JS.Composition.ExportAttribute';
	$JS_Composition_ExportAttribute.$ctor1 = function(type) {
		this.contractType = null;
		$JS_ArgumentHelper.notNull(type, 'type');
		this.contractType = type;
	};
	global.JS.Composition.ExportAttribute = $JS_Composition_ExportAttribute;
	////////////////////////////////////////////////////////////////////////////////
	// JS.Composition.ImportingConstructorAttribute
	var $JS_Composition_ImportingConstructorAttribute = function() {
	};
	$JS_Composition_ImportingConstructorAttribute.__typeName = 'JS.Composition.ImportingConstructorAttribute';
	global.JS.Composition.ImportingConstructorAttribute = $JS_Composition_ImportingConstructorAttribute;
	////////////////////////////////////////////////////////////////////////////////
	// JS.Composition.IocContainer
	var $JS_Composition_IocContainer = function() {
		this.$typeRegistrations = new (ss.makeGenericType(ss.Dictionary$2, [String, Array]))();
		this.autoRegistration = true;
		this.defaultLifetime = 1;
		this.enableTrace = false;
	};
	$JS_Composition_IocContainer.__typeName = 'JS.Composition.IocContainer';
	global.JS.Composition.IocContainer = $JS_Composition_IocContainer;
	////////////////////////////////////////////////////////////////////////////////
	// JS.Composition.IocContainer.ObjectLifetime
	var $JS_Composition_IocContainer$ObjectLifetime = function() {
	};
	$JS_Composition_IocContainer$ObjectLifetime.__typeName = 'JS.Composition.IocContainer$ObjectLifetime';
	global.JS.Composition.IocContainer$ObjectLifetime = $JS_Composition_IocContainer$ObjectLifetime;
	////////////////////////////////////////////////////////////////////////////////
	// JS.Composition.PartCreationPolicyAttribute
	var $JS_Composition_PartCreationPolicyAttribute = function(creationPolicy) {
		this.creationPolicy = 0;
		this.creationPolicy = creationPolicy;
	};
	$JS_Composition_PartCreationPolicyAttribute.__typeName = 'JS.Composition.PartCreationPolicyAttribute';
	global.JS.Composition.PartCreationPolicyAttribute = $JS_Composition_PartCreationPolicyAttribute;
	////////////////////////////////////////////////////////////////////////////////
	// JS.Diagnostics.Debug
	var $JS_Diagnostics_Debug = function() {
	};
	$JS_Diagnostics_Debug.__typeName = 'JS.Diagnostics.Debug';
	$JS_Diagnostics_Debug.assert = function(condition) {
		if (false === $JS_Diagnostics_Debug.enabled) {
			return;
		}
		ss.Debug.assert(condition);
	};
	$JS_Diagnostics_Debug.assert$1 = function(condition, message) {
		if (false === $JS_Diagnostics_Debug.enabled) {
			return;
		}
		ss.Debug.assert(condition, message);
	};
	$JS_Diagnostics_Debug.writeLine = function(message) {
		if (false === $JS_Diagnostics_Debug.enabled) {
			return;
		}
		ss.Debug.writeln(message);
	};
	$JS_Diagnostics_Debug.writeLine$1 = function(format, args) {
		if (false === $JS_Diagnostics_Debug.enabled) {
			return;
		}
		ss.Debug.writeln(ss.formatString.apply(null, [format].concat(args)));
	};
	$JS_Diagnostics_Debug.writeObject = function(obj) {
		if (false === $JS_Diagnostics_Debug.enabled) {
			return;
		}
		console.log(obj);
	};
	$JS_Diagnostics_Debug.fail = function(message) {
		if (false === $JS_Diagnostics_Debug.enabled) {
			return;
		}
		ss.Debug.fail(message);
	};
	$JS_Diagnostics_Debug.break$1 = function() {
		if (false === $JS_Diagnostics_Debug.enabled) {
			return;
		}
		debugger;
	};
	global.JS.Diagnostics.Debug = $JS_Diagnostics_Debug;
	////////////////////////////////////////////////////////////////////////////////
	// JS.Linq.Enumerable
	var $JS_Linq_Enumerable = function() {
	};
	$JS_Linq_Enumerable.__typeName = 'JS.Linq.Enumerable';
	$JS_Linq_Enumerable.sum = function(list) {
		$JS_ArgumentHelper.notNull(list, 'list');
		var result = 0;
		// Same behavior as in .NET
		var $t1 = ss.getEnumerator(list);
		try {
			while ($t1.moveNext()) {
				var item = $t1.current();
				result = ss.Nullable$1.add(result, ss.coalesce(item, 0));
			}
		}
		finally {
			$t1.dispose();
		}
		return result;
	};
	$JS_Linq_Enumerable.sum$1 = function(list) {
		$JS_ArgumentHelper.notNull(list, 'list');
		var result = 0;
		// Same behavior as in .NET
		var $t1 = ss.getEnumerator(list);
		try {
			while ($t1.moveNext()) {
				var item = $t1.current();
				result = ss.Nullable$1.add(result, ss.coalesce(item, 0));
			}
		}
		finally {
			$t1.dispose();
		}
		return result;
	};
	$JS_Linq_Enumerable.sum$2 = function(list) {
		$JS_ArgumentHelper.notNull(list, 'list');
		var result = 0;
		// Same behavior as in .NET
		var $t1 = ss.getEnumerator(list);
		try {
			while ($t1.moveNext()) {
				var item = $t1.current();
				result = ss.Nullable$1.add(result, ss.coalesce(item, 0));
			}
		}
		finally {
			$t1.dispose();
		}
		return result;
	};
	$JS_Linq_Enumerable.sum$3 = function(T) {
		return function(list, selector) {
			return $JS_Linq_Enumerable.sum(Enumerable.from(list).select(selector));
		};
	};
	$JS_Linq_Enumerable.sum$4 = function(T) {
		return function(list, selector) {
			return $JS_Linq_Enumerable.sum$1(Enumerable.from(list).select(selector));
		};
	};
	$JS_Linq_Enumerable.sum$5 = function(T) {
		return function(list, selector) {
			return $JS_Linq_Enumerable.sum$2(Enumerable.from(list).select(selector));
		};
	};
	global.JS.Linq.Enumerable = $JS_Linq_Enumerable;
	////////////////////////////////////////////////////////////////////////////////
	// JS.Threading.AsyncTaskQueue
	var $JS_Threading_AsyncTaskQueue = function(maximumParallelTasks) {
		$JS_Threading_AsyncTaskQueue.$ctor1.call(this, maximumParallelTasks, 0);
	};
	$JS_Threading_AsyncTaskQueue.__typeName = 'JS.Threading.AsyncTaskQueue';
	$JS_Threading_AsyncTaskQueue.$ctor1 = function(maximumParallelTasks, delay) {
		this.$_pendingTaskList = null;
		this.$_maximumParallelTasks = 0;
		this.$_delay = 0;
		this.$_activeTasks = 0;
		this.$_lastTaskID = 0;
		$JS_ArgumentHelper.positive(maximumParallelTasks, 'maximumParallelTasks');
		$JS_ArgumentHelper.positiveOrDefault(delay, 'delay');
		this.$_maximumParallelTasks = maximumParallelTasks;
		this.$_delay = delay;
		this.$_pendingTaskList = [];
		this.$_activeTasks = 0;
	};
	global.JS.Threading.AsyncTaskQueue = $JS_Threading_AsyncTaskQueue;
	////////////////////////////////////////////////////////////////////////////////
	// JS.Threading.AsyncTaskQueueItem
	var $JS_Threading_AsyncTaskQueueItem = function() {
	};
	$JS_Threading_AsyncTaskQueueItem.__typeName = 'JS.Threading.AsyncTaskQueueItem';
	$JS_Threading_AsyncTaskQueueItem.tryCancel = function($this) {
		if ($this.isStarted) {
			// The task is in progress and cannot be canceled
			return false;
		}
		else {
			return $this.taskCompletionSource.task.isCanceled() || $this.taskCompletionSource.trySetCanceled();
		}
	};
	$JS_Threading_AsyncTaskQueueItem.$compare = function(a, b) {
		$JS_ArgumentHelper.notNull(a, 'a');
		$JS_ArgumentHelper.notNull(b, 'b');
		// Tasks that has higher priority are ordered in front of other tasks
		var result = -ss.compare(a.priority, b.priority);
		if (result === 0) {
			// Task created earlier are ordered first
			result = ss.compare(a.id, b.id);
		}
		return result;
	};
	$JS_Threading_AsyncTaskQueueItem.$ctor = function(id, taskCompletionSource, method, priority) {
		var $this = {};
		$this.id = 0;
		$this.taskCompletionSource = null;
		$this.method = null;
		$this.priority = 0;
		$this.isStarted = false;
		$JS_ArgumentHelper.notNull(taskCompletionSource, 'taskCompletionSource');
		$JS_ArgumentHelper.notNull(method, 'method');
		$this.id = id;
		$this.taskCompletionSource = taskCompletionSource;
		$this.method = method;
		$this.priority = priority;
		return $this;
	};
	$JS_Threading_AsyncTaskQueueItem.isInstanceOfType = function() {
		return true;
	};
	global.JS.Threading.AsyncTaskQueueItem = $JS_Threading_AsyncTaskQueueItem;
	////////////////////////////////////////////////////////////////////////////////
	// JS.Threading.PostponeExecutor
	var $JS_Threading_PostponeExecutor = function(method, delay) {
		$JS_Threading_PostponeExecutor.$ctor2.call(this, method, delay, false);
	};
	$JS_Threading_PostponeExecutor.__typeName = 'JS.Threading.PostponeExecutor';
	$JS_Threading_PostponeExecutor.$ctor2 = function(method, delay, slidingDelay) {
		this.$_method = null;
		this.$_parameterizedMethod = null;
		this.$_methodParameter = null;
		this.$_delay = 0;
		this.$_slidingDelay = false;
		this.$_timeoutID = null;
		$JS_ArgumentHelper.notNull(method, 'method');
		$JS_ArgumentHelper.positive(delay, 'delay');
		this.$_method = method;
		this.$_delay = delay;
		this.$_slidingDelay = slidingDelay;
	};
	$JS_Threading_PostponeExecutor.$ctor1 = function(method, delay) {
		$JS_Threading_PostponeExecutor.$ctor3.call(this, method, delay, false);
	};
	$JS_Threading_PostponeExecutor.$ctor3 = function(method, delay, slidingDelay) {
		this.$_method = null;
		this.$_parameterizedMethod = null;
		this.$_methodParameter = null;
		this.$_delay = 0;
		this.$_slidingDelay = false;
		this.$_timeoutID = null;
		$JS_ArgumentHelper.notNull(method, 'method');
		$JS_ArgumentHelper.positive(delay, 'delay');
		this.$_parameterizedMethod = method;
		this.$_delay = delay;
		this.$_slidingDelay = slidingDelay;
	};
	global.JS.Threading.PostponeExecutor = $JS_Threading_PostponeExecutor;
	////////////////////////////////////////////////////////////////////////////////
	// JS.Threading.SyncTaskQueue
	var $JS_Threading_SyncTaskQueue = function(maximumParallelTasks) {
		this.$_pendingTaskList = null;
		this.$_maximumParallelTasks = 0;
		this.$_activeTasks = 0;
		this.$_lastTaskID = 0;
		$JS_ArgumentHelper.positive(maximumParallelTasks, 'maximumParallelTasks');
		this.$_maximumParallelTasks = maximumParallelTasks;
		this.$_pendingTaskList = [];
		this.$_activeTasks = 0;
	};
	$JS_Threading_SyncTaskQueue.__typeName = 'JS.Threading.SyncTaskQueue';
	global.JS.Threading.SyncTaskQueue = $JS_Threading_SyncTaskQueue;
	////////////////////////////////////////////////////////////////////////////////
	// JS.Threading.SyncTaskQueueItem
	var $JS_Threading_SyncTaskQueueItem = function() {
	};
	$JS_Threading_SyncTaskQueueItem.__typeName = 'JS.Threading.SyncTaskQueueItem';
	$JS_Threading_SyncTaskQueueItem.tryCancel = function($this) {
		if ($this.isStarted) {
			// The task is in progress and cannot be canceled
			return false;
		}
		else {
			return $this.taskCompletionSource.task.isCanceled() || $this.taskCompletionSource.trySetCanceled();
		}
	};
	$JS_Threading_SyncTaskQueueItem.$compare = function(a, b) {
		$JS_ArgumentHelper.notNull(a, 'a');
		$JS_ArgumentHelper.notNull(b, 'b');
		// Tasks that has higher priority are ordered in front of other tasks
		var result = -ss.compare(a.priority, b.priority);
		if (result === 0) {
			// Task created earlier are ordered first
			result = ss.compare(a.id, b.id);
		}
		return result;
	};
	$JS_Threading_SyncTaskQueueItem.$ctor = function(id, taskCompletionSource, method, priority) {
		var $this = {};
		$this.id = 0;
		$this.taskCompletionSource = null;
		$this.method = null;
		$this.priority = 0;
		$this.isStarted = false;
		$JS_ArgumentHelper.notNull(taskCompletionSource, 'taskCompletionSource');
		$JS_ArgumentHelper.notNull(method, 'method');
		$this.id = id;
		$this.taskCompletionSource = taskCompletionSource;
		$this.method = method;
		$this.priority = priority;
		return $this;
	};
	$JS_Threading_SyncTaskQueueItem.isInstanceOfType = function() {
		return true;
	};
	global.JS.Threading.SyncTaskQueueItem = $JS_Threading_SyncTaskQueueItem;
	////////////////////////////////////////////////////////////////////////////////
	// JS.Threading.TaskCompletionSourceExtensions
	var $JS_Threading_TaskCompletionSourceExtensions = function() {
	};
	$JS_Threading_TaskCompletionSourceExtensions.__typeName = 'JS.Threading.TaskCompletionSourceExtensions';
	$JS_Threading_TaskCompletionSourceExtensions.setResultAsync = function(TResult) {
		return function(taskCompletionSource, value) {
			window.setTimeout(ss.mkdel(taskCompletionSource, taskCompletionSource.setResult), 0, value);
		};
	};
	$JS_Threading_TaskCompletionSourceExtensions.setExceptionAsync = function(TResult) {
		return function(taskCompletionSource, value) {
			window.setTimeout(ss.mkdel(taskCompletionSource, taskCompletionSource.setException), 0, value);
		};
	};
	global.JS.Threading.TaskCompletionSourceExtensions = $JS_Threading_TaskCompletionSourceExtensions;
	////////////////////////////////////////////////////////////////////////////////
	// JS.Threading.TimeManager
	var $JS_Threading_TimeManager = function(tickInterval) {
		this.$_tick = null;
		this.$_tickInterval = 0;
		this.$_intervalID = 0;
		$JS_ArgumentHelper.positive(tickInterval, 'tickInterval');
		this.$_tickInterval = tickInterval;
	};
	$JS_Threading_TimeManager.__typeName = 'JS.Threading.TimeManager';
	global.JS.Threading.TimeManager = $JS_Threading_TimeManager;
	////////////////////////////////////////////////////////////////////////////////
	// JS.Threading.Timer
	var $JS_Threading_Timer = function(timeManager) {
		this.$1$TickField = null;
		this.maximumTicks = 0;
		this.elapsedTicks = 0;
		this.$_intervalID = 0;
		this.$_tickInterval = 0;
		this.$_timeManager = null;
		$JS_ArgumentHelper.notNull(timeManager, 'timeManager');
		this.$_timeManager = timeManager;
	};
	$JS_Threading_Timer.__typeName = 'JS.Threading.Timer';
	$JS_Threading_Timer.$ctor1 = function(tickInterval) {
		this.$1$TickField = null;
		this.maximumTicks = 0;
		this.elapsedTicks = 0;
		this.$_intervalID = 0;
		this.$_tickInterval = 0;
		this.$_timeManager = null;
		$JS_ArgumentHelper.positive(tickInterval, 'tickInterval');
		this.$_tickInterval = tickInterval;
	};
	global.JS.Threading.Timer = $JS_Threading_Timer;
	////////////////////////////////////////////////////////////////////////////////
	// JS.Utils.ObjectCache
	var $JS_Utils_$ObjectCache = function() {
		this.$_dict = null;
		this.$_dict = new (ss.makeGenericType(ss.Dictionary$2, [Object, $JS_$Utils_$ObjectCache$CacheItem]))();
	};
	$JS_Utils_$ObjectCache.__typeName = 'JS.Utils.$ObjectCache';
	////////////////////////////////////////////////////////////////////////////////
	// JS.Utils.Switch
	var $JS_Utils_Switch = function() {
		this.$1$StateChangedField = null;
		this.$_onMethod = null;
		this.$_offMethod = null;
		this.$_nextID = 0;
		this.$_idList = null;
		this.$_idList = [];
	};
	$JS_Utils_Switch.__typeName = 'JS.Utils.Switch';
	$JS_Utils_Switch.$ctor1 = function(onMethod, offMethod) {
		this.$1$StateChangedField = null;
		this.$_onMethod = null;
		this.$_offMethod = null;
		this.$_nextID = 0;
		this.$_idList = null;
		this.$_onMethod = onMethod;
		this.$_offMethod = offMethod;
		this.$_idList = [];
	};
	global.JS.Utils.Switch = $JS_Utils_Switch;
	ss.initClass($JS_ArgumentHelper, $asm, {});
	ss.initClass($JS_DateTimeExt, $asm, {
		get_kind: function() {
			return this.$_kind;
		},
		toLocalTime: function() {
			if (this.$_kind === 0) {
				return this;
			}
			else {
				return new $JS_DateTimeExt.$ctor2(this.$_time, 0);
			}
		},
		toUniversalTime: function() {
			if (this.$_kind === 1) {
				return this;
			}
			else {
				return new $JS_DateTimeExt.$ctor2(this.$_time, 1);
			}
		},
		toDateTime: function() {
			return this.$_time;
		},
		get_date: function() {
			if (this.$_kind === 1) {
				return new $JS_DateTimeExt.$ctor2(new Date(Date.UTC(this.$_time.getUTCFullYear(), this.$_time.getUTCMonth() + 1 - 1, this.$_time.getUTCDate())), 1);
			}
			else {
				return new $JS_DateTimeExt.$ctor1(new Date(this.$_time.getFullYear(), this.$_time.getMonth() + 1 - 1, this.$_time.getDate()));
			}
		},
		get_year: function() {
			if (this.$_kind === 1) {
				return this.$_time.getUTCFullYear();
			}
			else {
				return this.$_time.getFullYear();
			}
		},
		get_month: function() {
			if (this.$_kind === 1) {
				return this.$_time.getUTCMonth() + 1;
			}
			else {
				return this.$_time.getMonth() + 1;
			}
		},
		get_day: function() {
			if (this.$_kind === 1) {
				return this.$_time.getUTCDate();
			}
			else {
				return this.$_time.getDate();
			}
		},
		get_hour: function() {
			if (this.$_kind === 1) {
				return this.$_time.getUTCHours();
			}
			else {
				return this.$_time.getHours();
			}
		},
		get_minute: function() {
			if (this.$_kind === 1) {
				return this.$_time.getUTCMinutes();
			}
			else {
				return this.$_time.getMinutes();
			}
		},
		get_second: function() {
			if (this.$_kind === 1) {
				return this.$_time.getUTCSeconds();
			}
			else {
				return this.$_time.getSeconds();
			}
		},
		get_millisecond: function() {
			if (this.$_kind === 1) {
				return this.$_time.getUTCMilliseconds();
			}
			else {
				return this.$_time.getMilliseconds();
			}
		},
		get_dayOfWeek: function() {
			if (this.$_kind === 1) {
				return this.$_time.getUTCDay();
			}
			else {
				return this.$_time.getDay();
			}
		},
		addYears: function(value) {
			return new $JS_DateTimeExt.$ctor2(new Date(Date.UTC(this.$_time.getUTCFullYear() + value, this.$_time.getUTCMonth(), this.$_time.getUTCDate(), this.$_time.getUTCHours(), this.$_time.getUTCMinutes(), this.$_time.getUTCSeconds(), this.$_time.getUTCMilliseconds())), this.$_kind);
		},
		addMonths: function(value) {
			return new $JS_DateTimeExt.$ctor2(new Date(Date.UTC(this.$_time.getUTCFullYear(), this.$_time.getUTCMonth() + value, this.$_time.getUTCDate(), this.$_time.getUTCHours(), this.$_time.getUTCMinutes(), this.$_time.getUTCSeconds(), this.$_time.getUTCMilliseconds())), this.$_kind);
		},
		addDays: function(value) {
			return new $JS_DateTimeExt.$ctor2(new Date(this.$_time.valueOf() + Math.round(value * 86400000)), this.$_kind);
		},
		addHours: function(value) {
			return new $JS_DateTimeExt.$ctor2(new Date(this.$_time.valueOf() + Math.round(value * 3600000)), this.$_kind);
		},
		addMinutes: function(value) {
			return new $JS_DateTimeExt.$ctor2(new Date(this.$_time.valueOf() + Math.round(value * 60000)), this.$_kind);
		},
		addSeconds: function(value) {
			return new $JS_DateTimeExt.$ctor2(new Date(this.$_time.valueOf() + Math.round(value * 1000)), this.$_kind);
		},
		addMilliseconds: function(value) {
			return new $JS_DateTimeExt.$ctor2(new Date(this.$_time.valueOf() + Math.round(value)), this.$_kind);
		},
		subtract: function(time) {
			return new ss.TimeSpan((this.$_time - time.$_time) * 10000);
		},
		add: function(value) {
			return new $JS_DateTimeExt.$ctor2(new Date(this.$_time.valueOf() + Math.round(value.ticks / 10000)), this.$_kind);
		},
		subtract$1: function(value) {
			return new $JS_DateTimeExt.$ctor2(new Date(this.$_time.valueOf() + Math.round(-(value.ticks / 10000))), this.$_kind);
		},
		compareTo: function(other) {
			if ($JS_DateTimeExt.op_Equality$1(other, null)) {
				throw new ss.ArgumentNullException('other');
			}
			return ss.compare(this.$_time, other.$_time);
		},
		equalsT: function(other) {
			if ($JS_DateTimeExt.op_Equality$1(other, null)) {
				throw new ss.ArgumentNullException('other');
			}
			return ss.equalsT(this.$_time, other.$_time);
		},
		format: function(format) {
			// The properties of the time must be converted to UTC before it can be formatted
			var time;
			if (this.$_kind === 1) {
				time = $JS_DateTimeExt.$convertToUtc(this.$_time);
			}
			else {
				time = this.$_time;
			}
			return ss.formatDate(time, format);
		},
		toString: function() {
			if (this.$_kind === 1) {
				return this.$_time.toUTCString();
			}
			else {
				return this.$_time.toString();
			}
		},
		equals: function(o) {
			var other = ss.safeCast(o, $JS_DateTimeExt);
			if ($JS_DateTimeExt.op_Inequality$1(other, null)) {
				return $JS_DateTimeExt.op_Equality$1(other, this);
			}
			else {
				return false;
			}
		},
		getHashCode: function() {
			return ss.getHashCode(this.$_time);
		}
	}, null, [ss.IComparable, ss.IEquatable, ss.IFormattable]);
	$JS_DateTimeExt.$ctor1.prototype = $JS_DateTimeExt.$ctor2.prototype = $JS_DateTimeExt.$ctor3.prototype = $JS_DateTimeExt.$ctor4.prototype = $JS_DateTimeExt.$ctor6.prototype = $JS_DateTimeExt.$ctor5.prototype = $JS_DateTimeExt.$ctor7.prototype = $JS_DateTimeExt.prototype;
	$JS_DateTimeExt.__class = false;
	ss.initClass($JS_DateTimeExtensions, $asm, {});
	ss.initClass($JS_DateTimeHelper, $asm, {});
	ss.initEnum($JS_DateTimeKind, $asm, { local: 0, utc: 1 });
	ss.initClass($JS_DBNull, $asm, {});
	ss.initClass($JS_EnumExtensions, $asm, {});
	ss.initClass($JS_EventExtensions, $asm, {});
	ss.initEnum($JS_HttpStatusCode, $asm, { none: 0, OK: 200, noContent: 204, badRequest: 400, notAuthorized: 401, notFound: 404, internalServerError: 500 });
	ss.initClass($JS_MathNullable, $asm, {});
	ss.initClass($JS_MTuple, $asm, {});
	ss.initClass($JS_ObjectExtensions, $asm, {});
	ss.initClass($JS_ObjectHelper, $asm, {});
	ss.initClass($JS_StringExtensions, $asm, {});
	ss.initClass($JS_TimeZoneInfo, $asm, {
		$getTimeZoneName: function() {
			var result;
			var time = new Date();
			var timeText = time.toString();
			if (timeText.indexOf(String.fromCharCode(40)) >= 0) {
				// The full time zone name may be present
				// Get the first letters of the name
				var timeZoneContent = timeText.match(new RegExp('\\([^\\)]+\\)'))[0];
				// Try to find an abbreviation first
				var list = timeZoneContent.match(new RegExp('[A-Z]{3,4}'));
				if (ss.isNullOrUndefined(list) || list.length === 0) {
					// Try to find the full name
					var matchList = timeZoneContent.match(new RegExp('[A-Z]', 'g'));
					if (ss.isNullOrUndefined(matchList) || matchList.length === 0) {
						// Remove the leading and trailing brackets
						result = timeZoneContent.substr(1, timeZoneContent.length - 2);
					}
					else {
						result = matchList.join('');
					}
				}
				else {
					result = list[0];
				}
			}
			else {
				// The abbreviated time zone name may be present
				var list1 = timeText.match(new RegExp('[A-Z]{3,4}'));
				if (ss.isNullOrUndefined(list1) || list1.length === 0) {
					result = '';
				}
				else {
					result = list1[0];
				}
			}
			if (ss.isNullOrEmptyString(result) || result === 'GMT' || result === 'UTC') {
				// The name of the time zone cannot be determined so use a generic name
				var timeZoneOffset = time.getTimezoneOffset();
				if (timeZoneOffset === 0) {
					result = 'UTC';
				}
				else {
					result = 'UTC' + ((timeZoneOffset > 0) ? '-' : '+') + ss.padLeftString(ss.Int32.div(Math.abs(timeZoneOffset), 60).toString(), 2, 48) + ss.padLeftString((Math.abs(timeZoneOffset) % 60).toString(), 2, 48);
				}
			}
			return result;
		}
	});
	ss.initClass($JS_$Composition_IocContainer$TypeRegistration, $asm, {});
	ss.initClass($JS_$Utils_$ObjectCache$CacheItem, $asm, {
		get_$expired: function() {
			return !ss.staticEquals(this.$expirationTime, null) && ss.Nullable$1.gt(new Date(), this.$expirationTime);
		}
	});
	ss.initClass($JS_$Utils_Switch$SwitchItem, $asm, {
		dispose: function() {
			if (this.$_id > 0) {
				this.$_parent.$off(this.$_id);
				this.$_id = 0;
			}
		}
	}, null, [ss.IDisposable]);
	ss.initClass($JS_Collections_CollectionExtensions, $asm, {});
	ss.initClass($JS_Collections_CollectionUtils, $asm, {});
	ss.initEnum($JS_Composition_CreationPolicy, $asm, { shared: 1, nonShared: 2 });
	ss.initClass($JS_Composition_ExportAttribute, $asm, {});
	$JS_Composition_ExportAttribute.$ctor1.prototype = $JS_Composition_ExportAttribute.prototype;
	ss.initClass($JS_Composition_ImportingConstructorAttribute, $asm, {});
	ss.initClass($JS_Composition_IocContainer, $asm, {
		$register: function(type, implementationType, singleton, constructor, instance) {
			if (ss.isNullOrUndefined(instance)) {
				this.$setRegistrationForType(type, $JS_$Composition_IocContainer$TypeRegistration.$ctor2(implementationType, singleton, constructor));
			}
			else {
				this.$setRegistrationForType(type, $JS_$Composition_IocContainer$TypeRegistration.$ctor1(implementationType, instance));
			}
		},
		$setRegistrationForType: function(type, TypeRegistration) {
			var registrationList = {};
			if (false === this.$typeRegistrations.tryGetValue(ss.getTypeFullName(type), registrationList)) {
				this.$typeRegistrations.set_item(ss.getTypeFullName(type), registrationList.$ = []);
			}
			registrationList.$.push(TypeRegistration);
		},
		$getRegistrationForType: function(type) {
			var registrationList = {};
			if (this.$typeRegistrations.tryGetValue(ss.getTypeFullName(type), registrationList)) {
				if (registrationList.$.length > 1) {
					throw new ss.InvalidOperationException('More than one implementation is registered for the specified type.');
				}
				return registrationList.$[0];
			}
			else if (this.autoRegistration) {
				if (this.defaultLifetime === 0) {
					this.$register(type, type, true, null, null);
					// Register as a singleton
				}
				else {
					this.$register(type, type, false, null, null);
					// Register as a transient object
				}
				return this.$getRegistrationForType(type);
			}
			else {
				return null;
			}
		},
		$resolve: function(type) {
			var registration = this.$getRegistrationForType(type);
			if (ss.isNullOrUndefined(registration)) {
				throw new ss.ArgumentException("The specified type '" + ss.getTypeFullName(type) + "' is not registered.");
			}
			return this.$getImplementationForType(type, registration);
		},
		$getImplementationForType: function(type, TypeRegistration) {
			var instance = null;
			var TypeRegistrationImpl = this.$getRegistrationForType(TypeRegistration.implementationType);
			if (this.enableTrace) {
				ss.Debug.writeln(ss.formatString("IocContainer: Trying to get implementation for type '{0}'.", ss.getTypeFullName(type)));
			}
			// Singleton and have existing implementation instance
			if (TypeRegistration.isSingleton && ss.isValue(TypeRegistration.implementationInstance)) {
				return TypeRegistration.implementationInstance;
			}
			// Singleton and implementation instance needs to be instantiated
			if (TypeRegistration.isSingleton) {
				if (TypeRegistrationImpl.isSingleton) {
					instance = TypeRegistrationImpl.implementationInstance;
					// can be null
				}
				if (ss.isNullOrUndefined(instance)) {
					instance = this.$createInstanceForType(TypeRegistration.implementationType, TypeRegistrationImpl);
				}
				TypeRegistration.implementationInstance = instance;
				return instance;
			}
			// Transient lifecycle
			return this.$createInstanceForType(TypeRegistration.implementationType, TypeRegistrationImpl);
		},
		$createInstanceForType: function(type, typeRegistration) {
			if (this.enableTrace) {
				ss.Debug.writeln(ss.formatString("IocContainer: Creating instance for type '{0}'.", ss.getTypeName(type)));
			}
			var instance = null;
			// Check if a custom constructor function is registered. If so, then call it to create the object.
			// Any *constructor* injection is skipped. Otherwise get the constructor function, resolve the dependencies 
			// and create the object.
			if (!ss.staticEquals(typeRegistration.constructor, null)) {
				instance = typeRegistration.constructor();
			}
			else {
				var ctor = ss.getMembers(type, 1, 28)[0];
				// First constructor function
				var numberCtorParameters = (ss.isValue(ctor) ? Enumerable.from(ctor.params).count() : 0);
				var parameterInstances = new Array(numberCtorParameters);
				if (this.enableTrace && numberCtorParameters > 0) {
					ss.Debug.writeln(ss.formatString('IocContainer: Type {0} has constructor dependencies: {1}', ss.getTypeFullName(type), Enumerable.from(ctor.params).select(function(x) {
						return ss.getTypeName(x);
					}).toJoinedString(', ')));
				}
				for (var i = 0; i < numberCtorParameters; i++) {
					parameterInstances[i] = this.$resolve(ctor.params[i]);
				}
				instance = new (type.bind.apply(type, [type].concat(parameterInstances)));
			}
			if (typeRegistration.isSingleton) {
				typeRegistration.implementationInstance = instance;
			}
			// Property injection
			var properties = ss.getMembers(type, 16, 28);
			for (var i1 = 0; i1 < (ss.isValue(properties) ? Enumerable.from(properties).count() : 0); i1++) {
				ss.midel(properties[i1].setter, instance)(this.$resolve(properties[i1].returnType));
			}
			if (this.enableTrace && ss.isValue(properties) && Enumerable.from(properties).count() > 0) {
				ss.Debug.writeln(ss.formatString('IocContainer: Type {0} has property dependencies: {1}', ss.getTypeFullName(type), Enumerable.from(properties).select(function(x1) {
					return x1.name;
				}).toJoinedString(', ')));
			}
			return instance;
		},
		register$4: function(type) {
			this.$register(type, type, false, null, null);
		},
		register: function(T) {
			return function() {
				this.$register(T, T, false, null, null);
			};
		},
		register$2: function(T) {
			return function(constructor) {
				this.$register(T, T, false, constructor, null);
			};
		},
		register$5: function(type, implementationType) {
			this.$register(type, implementationType, false, null, null);
		},
		register$1: function(T, Timpl) {
			return function() {
				this.$register(T, Timpl, false, null, null);
			};
		},
		register$3: function(T, Timpl) {
			return function(constructor) {
				this.$register(T, Timpl, false, constructor, null);
			};
		},
		registerAsSingle$4: function(type) {
			this.$register(type, type, true, null, null);
		},
		registerAsSingle: function(T) {
			return function() {
				this.registerAsSingle$1(T, T).call(this);
			};
		},
		registerAsSingle$5: function(T) {
			return function(instance) {
				this.registerAsSingle$6(T, T).call(this, instance);
			};
		},
		registerAsSingle$2: function(T) {
			return function(constructor) {
				this.registerAsSingle$3(T, T).call(this, constructor);
			};
		},
		registerAsSingle$7: function(type, implementationType) {
			this.$register(type, implementationType, true, null, null);
		},
		registerAsSingle$1: function(T, Timpl) {
			return function() {
				this.$register(T, Timpl, true, null, null);
			};
		},
		registerAsSingle$6: function(T, Timpl) {
			return function(instance) {
				this.$register(T, Timpl, true, null, instance);
			};
		},
		registerAsSingle$3: function(T, Timpl) {
			return function(constructor) {
				this.$register(T, Timpl, true, constructor, null);
			};
		},
		resolve: function(T) {
			return function() {
				return ss.safeCast(this.$resolve(T), T);
			};
		},
		resolveAll: function(T) {
			return function() {
				var type = T;
				var registrationList = {};
				if (this.$typeRegistrations.tryGetValue(ss.getTypeFullName(type), registrationList)) {
					var result = new Array(registrationList.$.length);
					for (var k = 0; k < registrationList.$.length; k++) {
						result[k] = ss.cast(this.$getImplementationForType(type, registrationList.$[k]), T);
					}
					return result;
				}
				else {
					return [];
				}
			};
		}
	});
	ss.initEnum($JS_Composition_IocContainer$ObjectLifetime, $asm, { single: 0, transient$1: 1 });
	ss.initClass($JS_Composition_PartCreationPolicyAttribute, $asm, {});
	ss.initClass($JS_Diagnostics_Debug, $asm, {});
	ss.initClass($JS_Linq_Enumerable, $asm, {});
	ss.initClass($JS_Threading_AsyncTaskQueue, $asm, {
		add: function(method) {
			return this.add$1(method, 0);
		},
		add$1: function(method, priority) {
			$JS_ArgumentHelper.notNull(method, 'method');
			return this.addTaskItem$1(method, priority).taskCompletionSource.task;
		},
		addTaskItem: function(method) {
			return this.addTaskItem$1(method, 0);
		},
		addTaskItem$1: function(method, priority) {
			$JS_ArgumentHelper.notNull(method, 'method');
			var taskCompletionSource = new ss.TaskCompletionSource();
			var item = $JS_Threading_AsyncTaskQueueItem.$ctor(++this.$_lastTaskID, taskCompletionSource, method, priority);
			this.$_pendingTaskList.push(item);
			// Keep tasks in order for fast execution.
			this.$_pendingTaskList.sort($JS_Threading_AsyncTaskQueueItem.$compare);
			this.$startNextTask();
			return item;
		},
		$startNextTask: function() {
			while (this.$_activeTasks < this.$_maximumParallelTasks && this.$_pendingTaskList.length > 0) {
				this.$startTask(this.$_pendingTaskList[0]);
				ss.removeAt(this.$_pendingTaskList, 0);
			}
		},
		$startTask: function(task) {
			var $state = 0, error, resultValue, resultTask, exc;
			var $sm = ss.mkdel(this, function() {
				$sm1:
				for (;;) {
					switch ($state) {
						case 0: {
							$state = -1;
							$JS_ArgumentHelper.notNull(task, 'task');
							if (task.taskCompletionSource.task.isCanceled()) {
								// The task has been canceled so skip it
								return;
							}
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
											// Prevent the task from being canceled while it is running
											task.isStarted = true;
											// Increase the number of active tasks
											this.$_activeTasks++;
											resultTask = task.method();
											$state = 4;
											resultTask.continueWith($sm);
											return;
										}
										case 4: {
											$state = -1;
											resultValue = resultTask.getAwaitedResult();
											error = null;
											$state = -1;
											break $sm2;
										}
										default: {
											break $sm2;
										}
									}
								}
							}
							catch ($t1) {
								exc = ss.Exception.wrap($t1);
								resultValue = null;
								error = exc;
							}
							$state = 2;
							continue $sm1;
						}
						case 2: {
							$state = -1;
							// Decrease the number of active tasks
							$JS_Diagnostics_Debug.assert$1(this.$_activeTasks > 0, 'The number of active tasks must be positive.');
							this.$_activeTasks--;
							// Run another pending task
							window.setTimeout(ss.mkdel(this, this.$startNextTask), this.$_delay);
							// "TrySetResult" and "TrySetException" calls any callbacks immediately and thus may throw an exception.
							// Therefore, the call should be made AFTER the state of this object is updated.
							// Exception should NOT be handled since they will be propagated to top level and make the developer
							// aware of the issue (a callback in general should never leave unhandled exceptions).
							if (ss.isNullOrUndefined(error)) {
								task.taskCompletionSource.trySetResult(resultValue);
							}
							else {
								task.taskCompletionSource.trySetException(error);
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
		}
	});
	$JS_Threading_AsyncTaskQueue.$ctor1.prototype = $JS_Threading_AsyncTaskQueue.prototype;
	ss.initClass($JS_Threading_AsyncTaskQueueItem, $asm, {});
	ss.initClass($JS_Threading_PostponeExecutor, $asm, {
		execute: function() {
			this.execute$1(null);
		},
		execute$1: function(parameter) {
			this.$_methodParameter = parameter;
			if (ss.isValue(this.$_timeoutID)) {
				if (this.$_slidingDelay) {
					window.clearTimeout(ss.unbox(this.$_timeoutID));
					this.$_timeoutID = null;
				}
				else {
					return;
				}
			}
			this.$_timeoutID = window.setTimeout(ss.mkdel(this, this.$executeMethod), this.$_delay);
		},
		$executeMethod: function() {
			this.$_timeoutID = null;
			if (!ss.staticEquals(this.$_method, null)) {
				this.$_method();
			}
			else if (!ss.staticEquals(this.$_parameterizedMethod, null)) {
				this.$_parameterizedMethod(this.$_methodParameter);
			}
		},
		cancel: function() {
			if (ss.isValue(this.$_timeoutID)) {
				window.clearTimeout(ss.unbox(this.$_timeoutID));
				this.$_timeoutID = null;
			}
		}
	});
	$JS_Threading_PostponeExecutor.$ctor2.prototype = $JS_Threading_PostponeExecutor.$ctor1.prototype = $JS_Threading_PostponeExecutor.$ctor3.prototype = $JS_Threading_PostponeExecutor.prototype;
	ss.initClass($JS_Threading_SyncTaskQueue, $asm, {
		add: function(method) {
			return this.add$1(method, 0);
		},
		add$1: function(method, priority) {
			$JS_ArgumentHelper.notNull(method, 'method');
			return this.addTaskItem$1(method, priority).taskCompletionSource.task;
		},
		addTaskItem: function(method) {
			return this.addTaskItem$1(method, 0);
		},
		addTaskItem$1: function(method, priority) {
			$JS_ArgumentHelper.notNull(method, 'method');
			var taskCompletionSource = new ss.TaskCompletionSource();
			var item = $JS_Threading_SyncTaskQueueItem.$ctor(++this.$_lastTaskID, taskCompletionSource, method, priority);
			this.$_pendingTaskList.push(item);
			// Keep tasks in order for fast execution.
			this.$_pendingTaskList.sort($JS_Threading_SyncTaskQueueItem.$compare);
			this.$startNextTask();
			return item;
		},
		$startNextTask: function() {
			while (this.$_activeTasks < this.$_maximumParallelTasks && this.$_pendingTaskList.length > 0) {
				this.$startTask(this.$_pendingTaskList[0]);
				ss.removeAt(this.$_pendingTaskList, 0);
			}
		},
		$startTask: function(task) {
			$JS_ArgumentHelper.notNull(task, 'task');
			if (task.taskCompletionSource.task.isCanceled()) {
				// The task has been canceled so skip it
				return;
			}
			window.setTimeout(ss.mkdel(this, function() {
				var error;
				try {
					task.method();
					error = null;
				}
				catch ($t1) {
					var exc = ss.Exception.wrap($t1);
					error = exc;
				}
				// Decrease the number of active tasks
				$JS_Diagnostics_Debug.assert$1(this.$_activeTasks > 0, 'The number of active tasks must be positive.');
				this.$_activeTasks--;
				// Run another pending task
				this.$startNextTask();
				// "TrySetResult" and "TrySetException" calls any callbacks immediately and thus may throw an exception.
				// Therefore, the call should be made AFTER the state of this object is updated.
				// Exception should NOT be handled since they will be propagated to top level and make the developer
				// aware of the issue (a callback in general should never leave unhandled exceptions).
				if (ss.isNullOrUndefined(error)) {
					task.taskCompletionSource.trySetResult(null);
				}
				else {
					task.taskCompletionSource.trySetException(error);
				}
			}));
			// Prevent the task from being canceled while it is running
			task.isStarted = true;
			// Increase the number of active tasks
			this.$_activeTasks++;
		}
	});
	ss.initClass($JS_Threading_SyncTaskQueueItem, $asm, {});
	ss.initClass($JS_Threading_TaskCompletionSourceExtensions, $asm, {});
	ss.initClass($JS_Threading_TimeManager, $asm, {
		add_$tick: function(value) {
			var first = ss.staticEquals(this.$_tick, null);
			this.$_tick = ss.delegateCombine(this.$_tick, value);
			if (first) {
				this.$start();
			}
		},
		remove_$tick: function(value) {
			this.$_tick = ss.delegateRemove(this.$_tick, value);
			if (ss.staticEquals(this.$_tick, null)) {
				this.$stop();
			}
		},
		$onTick: function(e) {
			$JS_EventExtensions.fire(this.$_tick, this, e);
		},
		$start: function() {
			if (this.$_intervalID > 0) {
				// Already started
				return;
			}
			this.$_intervalID = window.setInterval(ss.mkdel(this, this.$timerTick), this.$_tickInterval);
		},
		$stop: function() {
			if (this.$_intervalID > 0) {
				window.clearInterval(this.$_intervalID);
				this.$_intervalID = 0;
			}
		},
		$timerTick: function() {
			this.$onTick(ss.EventArgs.Empty);
		},
		createTimer: function() {
			return new $JS_Threading_Timer(this);
		},
		createAndStartPerpetualTimer: function() {
			return this.createAndStartTimer(2147483647);
		},
		createAndStartTimer: function(maximumTicks) {
			$JS_ArgumentHelper.positiveOrDefault(maximumTicks, 'maximumTicks');
			var result = new $JS_Threading_Timer(this);
			try {
				result.start(maximumTicks);
			}
			catch ($t1) {
				result.dispose();
				throw $t1;
			}
			return result;
		}
	});
	ss.initClass($JS_Threading_Timer, $asm, {
		add_tick: function(value) {
			this.$1$TickField = ss.delegateCombine(this.$1$TickField, value);
		},
		remove_tick: function(value) {
			this.$1$TickField = ss.delegateRemove(this.$1$TickField, value);
		},
		$onTick: function(e) {
			$JS_EventExtensions.fire(this.$1$TickField, this, e);
		},
		get_remainingTicks: function() {
			return this.maximumTicks - this.elapsedTicks;
		},
		get_expired: function() {
			return this.maximumTicks <= this.elapsedTicks;
		},
		start: function(ticks) {
			$JS_ArgumentHelper.positiveOrDefault(ticks, 'ticks');
			// Stop the timer if started.
			this.stop();
			this.maximumTicks = ticks;
			if (ticks > 0) {
				this.$startTimer();
			}
		},
		stop: function() {
			this.$stopTimer();
			this.maximumTicks = 0;
			this.elapsedTicks = 0;
		},
		dispose: function() {
			this.stop();
		},
		$timerTick: function() {
			this.elapsedTicks++;
			if (this.get_expired()) {
				// Stop the time
				this.$stopTimer();
			}
			this.$onTick(ss.EventArgs.Empty);
		},
		$timeManager_Tick: function(sender, e) {
			this.$timerTick();
		},
		$startTimer: function() {
			if (ss.isNullOrUndefined(this.$_timeManager)) {
				// Use independent time
				this.$_intervalID = window.setInterval(ss.mkdel(this, this.$timerTick), this.$_tickInterval);
			}
			else {
				// Use synchronized time
				this.$_timeManager.add_$tick(ss.mkdel(this, this.$timeManager_Tick));
			}
		},
		$stopTimer: function() {
			if (this.$_intervalID > 0) {
				window.clearInterval(this.$_intervalID);
				this.$_intervalID = 0;
			}
			else if (ss.isValue(this.$_timeManager)) {
				this.$_timeManager.remove_$tick(ss.mkdel(this, this.$timeManager_Tick));
			}
		}
	}, null, [ss.IDisposable]);
	$JS_Threading_Timer.$ctor1.prototype = $JS_Threading_Timer.prototype;
	ss.initClass($JS_Utils_$ObjectCache, $asm, {
		get_$item: function(key) {
			return this.$get(Object).call(this, key);
		},
		$addOrUpdate: function(key, value, timeout) {
			$JS_ArgumentHelper.notNull(key, 'key');
			$JS_ArgumentHelper.notNull(value, 'value');
			this.$_dict.set_item(key, new $JS_$Utils_$ObjectCache$CacheItem(value, timeout));
		},
		$remove: function(key) {
			$JS_ArgumentHelper.notNull(key, 'key');
			this.$_dict.remove(key);
		},
		$get: function(T) {
			return function(key) {
				$JS_ArgumentHelper.notNull(key, 'key');
				var item = {};
				if (this.$_dict.tryGetValue(key, item) && false === item.$.get_$expired()) {
					return ss.cast(item.$.$value, T);
				}
				else {
					return ss.getDefaultValue(T);
				}
			};
		},
		$clear: function() {
			this.$_dict.clear();
		}
	});
	ss.initClass($JS_Utils_Switch, $asm, {
		add_stateChanged: function(value) {
			this.$1$StateChangedField = ss.delegateCombine(this.$1$StateChangedField, value);
		},
		remove_stateChanged: function(value) {
			this.$1$StateChangedField = ss.delegateRemove(this.$1$StateChangedField, value);
		},
		get_isOn: function() {
			return this.$_idList.length > 0;
		},
		on: function() {
			var turnedOn = this.$_idList.length === 0;
			var id = ++this.$_nextID;
			this.$_idList.push(id);
			if (turnedOn) {
				// Methods must be called AFTER an ID is added to the list so that
				// the "IsOn" property returns correct value.
				if (!ss.staticEquals(this.$_onMethod, null)) {
					this.$_onMethod();
				}
				this.$onStateChanged(ss.EventArgs.Empty);
			}
			return new $JS_$Utils_Switch$SwitchItem(this, id);
		},
		$off: function(id) {
			$JS_ArgumentHelper.positive(id, 'id');
			if (ss.remove(this.$_idList, id) && this.$_idList.length === 0) {
				// Methods must be called AFTER the ID is removed from the list so that
				// the "IsOn" property returns correct value.
				if (!ss.staticEquals(this.$_offMethod, null)) {
					this.$_offMethod();
				}
				this.$onStateChanged(ss.EventArgs.Empty);
			}
		},
		$onStateChanged: function(e) {
			var temp = this.$1$StateChangedField;
			if (!ss.staticEquals(temp, null)) {
				temp(this, e);
			}
		}
	});
	$JS_Utils_Switch.$ctor1.prototype = $JS_Utils_Switch.prototype;
	ss.setMetadata($JS_Composition_ExportAttribute, { attrAllowMultiple: true });
	(function() {
		$JS_DBNull.$_value = new $JS_DBNull();
	})();
	(function() {
		$JS_TimeZoneInfo.$_local = null;
	})();
	(function() {
		$JS_Diagnostics_Debug.enabled = false;
		$JS_Diagnostics_Debug.enabled = true;
	})();
})();
