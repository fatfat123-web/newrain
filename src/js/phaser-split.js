/* Phaser v2.6.2 - http://phaser.io - @photonstorm - (c) 2016 Photon Storm Ltd. */

(function () {
    function a(a, b) {
        this._scaleFactor = a, this._deltaMode = b, this.originalEvent = null
    }

    var b = this, c = c || {
        VERSION: "2.6.2",
        GAMES: [],
        AUTO: 0,
        CANVAS: 1,
        WEBGL: 2,
        HEADLESS: 3,
        NONE: 0,
        LEFT: 1,
        RIGHT: 2,
        UP: 3,
        DOWN: 4,
        SPRITE: 0,
        BUTTON: 1,
        IMAGE: 2,
        GRAPHICS: 3,
        TEXT: 4,
        TILESPRITE: 5,
        BITMAPTEXT: 6,
        GROUP: 7,
        RENDERTEXTURE: 8,
        TILEMAP: 9,
        TILEMAPLAYER: 10,
        EMITTER: 11,
        POLYGON: 12,
        BITMAPDATA: 13,
        CANVAS_FILTER: 14,
        WEBGL_FILTER: 15,
        ELLIPSE: 16,
        SPRITEBATCH: 17,
        RETROFONT: 18,
        POINTER: 19,
        ROPE: 20,
        CIRCLE: 21,
        RECTANGLE: 22,
        LINE: 23,
        MATRIX: 24,
        POINT: 25,
        ROUNDEDRECTANGLE: 26,
        CREATURE: 27,
        VIDEO: 28,
        PENDING_ATLAS: -1,
        HORIZONTAL: 0,
        VERTICAL: 1,
        LANDSCAPE: 0,
        PORTRAIT: 1,
        ANGLE_UP: 270,
        ANGLE_DOWN: 90,
        ANGLE_LEFT: 180,
        ANGLE_RIGHT: 0,
        ANGLE_NORTH_EAST: 315,
        ANGLE_NORTH_WEST: 225,
        ANGLE_SOUTH_EAST: 45,
        ANGLE_SOUTH_WEST: 135,
        TOP_LEFT: 0,
        TOP_CENTER: 1,
        TOP_RIGHT: 2,
        LEFT_TOP: 3,
        LEFT_CENTER: 4,
        LEFT_BOTTOM: 5,
        CENTER: 6,
        RIGHT_TOP: 7,
        RIGHT_CENTER: 8,
        RIGHT_BOTTOM: 9,
        BOTTOM_LEFT: 10,
        BOTTOM_CENTER: 11,
        BOTTOM_RIGHT: 12,
        blendModes: {
            NORMAL: 0,
            ADD: 1,
            MULTIPLY: 2,
            SCREEN: 3,
            OVERLAY: 4,
            DARKEN: 5,
            LIGHTEN: 6,
            COLOR_DODGE: 7,
            COLOR_BURN: 8,
            HARD_LIGHT: 9,
            SOFT_LIGHT: 10,
            DIFFERENCE: 11,
            EXCLUSION: 12,
            HUE: 13,
            SATURATION: 14,
            COLOR: 15,
            LUMINOSITY: 16
        },
        scaleModes: {DEFAULT: 0, LINEAR: 0, NEAREST: 1},
        PIXI: PIXI || {}
    };
    if (Math.trunc || (Math.trunc = function (a) {
        return a < 0 ? Math.ceil(a) : Math.floor(a)
    }), Function.prototype.bind || (Function.prototype.bind = function () {
        var a = Array.prototype.slice;
        return function (b) {
            function c() {
                var f = e.concat(a.call(arguments));
                d.apply(this instanceof c ? this : b, f)
            }

            var d = this, e = a.call(arguments, 1);
            if ("function" != typeof d) throw new TypeError;
            return c.prototype = function a(b) {
                if (b && (a.prototype = b), !(this instanceof a)) return new a
            }(d.prototype), c
        }
    }()), Array.isArray || (Array.isArray = function (a) {
        return "[object Array]" === Object.prototype.toString.call(a)
    }), Array.prototype.forEach || (Array.prototype.forEach = function (a) {
        "use strict";
        if (void 0 === this || null === this) throw new TypeError;
        var b = Object(this), c = b.length >>> 0;
        if ("function" != typeof a) throw new TypeError;
        for (var d = arguments.length >= 2 ? arguments[1] : void 0, e = 0; e < c; e++) e in b && a.call(d, b[e], e, b)
    }), "function" != typeof window.Uint32Array && "object" != typeof window.Uint32Array) {
        var d = function (a) {
            var b = new Array;
            window[a] = function (a) {
                if ("number" == typeof a) {
                    Array.call(this, a), this.length = a;
                    for (var b = 0; b < this.length; b++) this[b] = 0
                } else {
                    Array.call(this, a.length), this.length = a.length;
                    for (var b = 0; b < this.length; b++) this[b] = a[b]
                }
            }, window[a].prototype = b, window[a].constructor = window[a]
        };
        d("Uint32Array"), d("Int16Array")
    }
    window.console || (window.console = {}, window.console.log = window.console.assert = function () {
    }, window.console.warn = window.console.assert = function () {
    }), c.Utils = {
        reverseString: function (a) {
            return a.split("").reverse().join("")
        }, getProperty: function (a, b) {
            for (var c = b.split("."), d = c.pop(), e = c.length, f = 1, g = c[0]; f < e && (a = a[g]);) g = c[f], f++;
            return a ? a[d] : null
        }, setProperty: function (a, b, c) {
            for (var d = b.split("."), e = d.pop(), f = d.length, g = 1, h = d[0]; g < f && (a = a[h]);) h = d[g], g++;
            return a && (a[e] = c), a
        }, chanceRoll: function (a) {
            return void 0 === a && (a = 50), a > 0 && 100 * Math.random() <= a
        }, randomChoice: function (a, b) {
            return Math.random() < .5 ? a : b
        }, parseDimension: function (a, b) {
            var c = 0, d = 0;
            return "string" == typeof a ? "%" === a.substr(-1) ? (c = parseInt(a, 10) / 100, d = 0 === b ? window.innerWidth * c : window.innerHeight * c) : d = parseInt(a, 10) : d = a, d
        }, pad: function (a, b, c, d) {
            if (void 0 === b) var b = 0;
            if (void 0 === c) var c = " ";
            if (void 0 === d) var d = 3;
            a = a.toString();
            var e = 0;
            if (b + 1 >= a.length) switch (d) {
                case 1:
                    a = new Array(b + 1 - a.length).join(c) + a;
                    break;
                case 3:
                    var f = Math.ceil((e = b - a.length) / 2), g = e - f;
                    a = new Array(g + 1).join(c) + a + new Array(f + 1).join(c);
                    break;
                default:
                    a += new Array(b + 1 - a.length).join(c)
            }
            return a
        }, isPlainObject: function (a) {
            if ("object" != typeof a || a.nodeType || a === a.window) return !1;
            try {
                if (a.constructor && !{}.hasOwnProperty.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (a) {
                return !1
            }
            return !0
        }, extend: function () {
            var a, b, d, e, f, g, h = arguments[0] || {}, i = 1, j = arguments.length, k = !1;
            for ("boolean" == typeof h && (k = h, h = arguments[1] || {}, i = 2), j === i && (h = this, --i); i < j; i++) if (null != (a = arguments[i])) for (b in a) d = h[b], e = a[b], h !== e && (k && e && (c.Utils.isPlainObject(e) || (f = Array.isArray(e))) ? (f ? (f = !1, g = d && Array.isArray(d) ? d : []) : g = d && c.Utils.isPlainObject(d) ? d : {}, h[b] = c.Utils.extend(k, g, e)) : void 0 !== e && (h[b] = e));
            return h
        }, mixinPrototype: function (a, b, c) {
            void 0 === c && (c = !1);
            for (var d = Object.keys(b), e = 0; e < d.length; e++) {
                var f = d[e], g = b[f];
                !c && f in a || (!g || "function" != typeof g.get && "function" != typeof g.set ? a[f] = g : "function" == typeof g.clone ? a[f] = g.clone() : Object.defineProperty(a, f, g))
            }
        }, mixin: function (a, b) {
            if (!a || "object" != typeof a) return b;
            for (var d in a) {
                var e = a[d];
                if (!e.childNodes && !e.cloneNode) {
                    var f = typeof a[d];
                    a[d] && "object" === f ? typeof b[d] === f ? b[d] = c.Utils.mixin(a[d], b[d]) : b[d] = c.Utils.mixin(a[d], new e.constructor) : b[d] = a[d]
                }
            }
            return b
        }
    }, c.Circle = function (a, b, d) {
        a = a || 0, b = b || 0, d = d || 0, this.x = a, this.y = b, this._diameter = d, this._radius = 0, d > 0 && (this._radius = .5 * d), this.type = c.CIRCLE
    }, c.Circle.prototype = {
        circumference: function () {
            return 2 * (Math.PI * this._radius)
        }, random: function (a) {
            void 0 === a && (a = new c.Point);
            var b = 2 * Math.PI * Math.random(), d = Math.random() + Math.random(), e = d > 1 ? 2 - d : d,
                f = e * Math.cos(b), g = e * Math.sin(b);
            return a.x = this.x + f * this.radius, a.y = this.y + g * this.radius, a
        }, getBounds: function () {
            return new c.Rectangle(this.x - this.radius, this.y - this.radius, this.diameter, this.diameter)
        }, setTo: function (a, b, c) {
            return this.x = a, this.y = b, this._diameter = c, this._radius = .5 * c, this
        }, copyFrom: function (a) {
            return this.setTo(a.x, a.y, a.diameter)
        }, copyTo: function (a) {
            return a.x = this.x, a.y = this.y, a.diameter = this._diameter, a
        }, distance: function (a, b) {
            var d = c.Math.distance(this.x, this.y, a.x, a.y);
            return b ? Math.round(d) : d
        }, clone: function (a) {
            return void 0 === a || null === a ? a = new c.Circle(this.x, this.y, this.diameter) : a.setTo(this.x, this.y, this.diameter), a
        }, contains: function (a, b) {
            return c.Circle.contains(this, a, b)
        }, circumferencePoint: function (a, b, d) {
            return c.Circle.circumferencePoint(this, a, b, d)
        }, offset: function (a, b) {
            return this.x += a, this.y += b, this
        }, offsetPoint: function (a) {
            return this.offset(a.x, a.y)
        }, toString: function () {
            return "[{Phaser.Circle (x=" + this.x + " y=" + this.y + " diameter=" + this.diameter + " radius=" + this.radius + ")}]"
        }
    }, c.Circle.prototype.constructor = c.Circle, Object.defineProperty(c.Circle.prototype, "diameter", {
        get: function () {
            return this._diameter
        }, set: function (a) {
            a > 0 && (this._diameter = a, this._radius = .5 * a)
        }
    }), Object.defineProperty(c.Circle.prototype, "radius", {
        get: function () {
            return this._radius
        }, set: function (a) {
            a > 0 && (this._radius = a, this._diameter = 2 * a)
        }
    }), Object.defineProperty(c.Circle.prototype, "left", {
        get: function () {
            return this.x - this._radius
        }, set: function (a) {
            a > this.x ? (this._radius = 0, this._diameter = 0) : this.radius = this.x - a
        }
    }), Object.defineProperty(c.Circle.prototype, "right", {
        get: function () {
            return this.x + this._radius
        }, set: function (a) {
            a < this.x ? (this._radius = 0, this._diameter = 0) : this.radius = a - this.x
        }
    }), Object.defineProperty(c.Circle.prototype, "top", {
        get: function () {
            return this.y - this._radius
        }, set: function (a) {
            a > this.y ? (this._radius = 0, this._diameter = 0) : this.radius = this.y - a
        }
    }), Object.defineProperty(c.Circle.prototype, "bottom", {
        get: function () {
            return this.y + this._radius
        }, set: function (a) {
            a < this.y ? (this._radius = 0, this._diameter = 0) : this.radius = a - this.y
        }
    }), Object.defineProperty(c.Circle.prototype, "area", {
        get: function () {
            return this._radius > 0 ? Math.PI * this._radius * this._radius : 0
        }
    }), Object.defineProperty(c.Circle.prototype, "empty", {
        get: function () {
            return 0 === this._diameter
        }, set: function (a) {
            a === !0 && this.setTo(0, 0, 0)
        }
    }), c.Circle.contains = function (a, b, c) {
        if (a.radius > 0 && b >= a.left && b <= a.right && c >= a.top && c <= a.bottom) {
            var d = (a.x - b) * (a.x - b), e = (a.y - c) * (a.y - c);
            return d + e <= a.radius * a.radius
        }
        return !1
    }, c.Circle.equals = function (a, b) {
        return a.x === b.x && a.y === b.y && a.diameter === b.diameter
    }, c.Circle.intersects = function (a, b) {
        return c.Math.distance(a.x, a.y, b.x, b.y) <= a.radius + b.radius
    }, c.Circle.circumferencePoint = function (a, b, d, e) {
        return void 0 === d && (d = !1), void 0 === e && (e = new c.Point), d === !0 && (b = c.Math.degToRad(b)), e.x = a.x + a.radius * Math.cos(b), e.y = a.y + a.radius * Math.sin(b), e
    }, c.Circle.intersectsRectangle = function (a, b) {
        var c = Math.abs(a.x - b.x - b.halfWidth), d = b.halfWidth + a.radius;
        if (c > d) return !1;
        var e = Math.abs(a.y - b.y - b.halfHeight), f = b.halfHeight + a.radius;
        if (e > f) return !1;
        if (c <= b.halfWidth || e <= b.halfHeight) return !0;
        var g = c - b.halfWidth, h = e - b.halfHeight, i = g * g, j = h * h, k = a.radius * a.radius;
        return i + j <= k
    }, PIXI.Circle = c.Circle, c.Ellipse = function (a, b, d, e) {
        a = a || 0, b = b || 0, d = d || 0, e = e || 0, this.x = a, this.y = b, this.width = d, this.height = e, this.type = c.ELLIPSE
    }, c.Ellipse.prototype = {
        setTo: function (a, b, c, d) {
            return this.x = a, this.y = b, this.width = c, this.height = d, this
        }, getBounds: function () {
            return new c.Rectangle(this.x - this.width, this.y - this.height, this.width, this.height)
        }, copyFrom: function (a) {
            return this.setTo(a.x, a.y, a.width, a.height)
        }, copyTo: function (a) {
            return a.x = this.x, a.y = this.y, a.width = this.width, a.height = this.height, a
        }, clone: function (a) {
            return void 0 === a || null === a ? a = new c.Ellipse(this.x, this.y, this.width, this.height) : a.setTo(this.x, this.y, this.width, this.height), a
        }, contains: function (a, b) {
            return c.Ellipse.contains(this, a, b)
        }, random: function (a) {
            void 0 === a && (a = new c.Point);
            var b = Math.random() * Math.PI * 2, d = Math.random();
            return a.x = Math.sqrt(d) * Math.cos(b), a.y = Math.sqrt(d) * Math.sin(b), a.x = this.x + a.x * this.width / 2, a.y = this.y + a.y * this.height / 2, a
        }, toString: function () {
            return "[{Phaser.Ellipse (x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + ")}]"
        }
    }, c.Ellipse.prototype.constructor = c.Ellipse, Object.defineProperty(c.Ellipse.prototype, "left", {
        get: function () {
            return this.x
        }, set: function (a) {
            this.x = a
        }
    }), Object.defineProperty(c.Ellipse.prototype, "right", {
        get: function () {
            return this.x + this.width
        }, set: function (a) {
            a < this.x ? this.width = 0 : this.width = a - this.x
        }
    }), Object.defineProperty(c.Ellipse.prototype, "top", {
        get: function () {
            return this.y
        }, set: function (a) {
            this.y = a
        }
    }), Object.defineProperty(c.Ellipse.prototype, "bottom", {
        get: function () {
            return this.y + this.height
        }, set: function (a) {
            a < this.y ? this.height = 0 : this.height = a - this.y
        }
    }), Object.defineProperty(c.Ellipse.prototype, "empty", {
        get: function () {
            return 0 === this.width || 0 === this.height
        }, set: function (a) {
            a === !0 && this.setTo(0, 0, 0, 0)
        }
    }), c.Ellipse.contains = function (a, b, c) {
        if (a.width <= 0 || a.height <= 0) return !1;
        var d = (b - a.x) / a.width - .5, e = (c - a.y) / a.height - .5;
        return d *= d, e *= e, d + e < .25
    }, PIXI.Ellipse = c.Ellipse, c.Line = function (a, b, d, e) {
        a = a || 0, b = b || 0, d = d || 0, e = e || 0, this.start = new c.Point(a, b), this.end = new c.Point(d, e), this.type = c.LINE
    }, c.Line.prototype = {
        setTo: function (a, b, c, d) {
            return this.start.setTo(a, b), this.end.setTo(c, d), this
        }, fromSprite: function (a, b, c) {
            return void 0 === c && (c = !1), c ? this.setTo(a.center.x, a.center.y, b.center.x, b.center.y) : this.setTo(a.x, a.y, b.x, b.y)
        }, fromAngle: function (a, b, c, d) {
            return this.start.setTo(a, b), this.end.setTo(a + Math.cos(c) * d, b + Math.sin(c) * d), this
        }, rotate: function (a, b) {
            var c = (this.start.x + this.end.x) / 2, d = (this.start.y + this.end.y) / 2;
            return this.start.rotate(c, d, a, b), this.end.rotate(c, d, a, b), this
        }, rotateAround: function (a, b, c, d) {
            return this.start.rotate(a, b, c, d), this.end.rotate(a, b, c, d), this
        }, intersects: function (a, b, d) {
            return c.Line.intersectsPoints(this.start, this.end, a.start, a.end, b, d)
        }, reflect: function (a) {
            return c.Line.reflect(this, a)
        }, midPoint: function (a) {
            return void 0 === a && (a = new c.Point), a.x = (this.start.x + this.end.x) / 2, a.y = (this.start.y + this.end.y) / 2, a
        }, centerOn: function (a, b) {
            var c = (this.start.x + this.end.x) / 2, d = (this.start.y + this.end.y) / 2, e = a - c, f = b - d;
            this.start.add(e, f), this.end.add(e, f)
        }, pointOnLine: function (a, b) {
            return (a - this.start.x) * (this.end.y - this.start.y) === (this.end.x - this.start.x) * (b - this.start.y)
        }, pointOnSegment: function (a, b) {
            var c = Math.min(this.start.x, this.end.x), d = Math.max(this.start.x, this.end.x),
                e = Math.min(this.start.y, this.end.y), f = Math.max(this.start.y, this.end.y);
            return this.pointOnLine(a, b) && a >= c && a <= d && b >= e && b <= f
        }, random: function (a) {
            void 0 === a && (a = new c.Point);
            var b = Math.random();
            return a.x = this.start.x + b * (this.end.x - this.start.x), a.y = this.start.y + b * (this.end.y - this.start.y), a
        }, coordinatesOnLine: function (a, b) {
            void 0 === a && (a = 1), void 0 === b && (b = []);
            var c = Math.round(this.start.x), d = Math.round(this.start.y), e = Math.round(this.end.x),
                f = Math.round(this.end.y), g = Math.abs(e - c), h = Math.abs(f - d), i = c < e ? 1 : -1,
                j = d < f ? 1 : -1, k = g - h;
            b.push([c, d]);
            for (var l = 1; c !== e || d !== f;) {
                var m = k << 1;
                m > -h && (k -= h, c += i), m < g && (k += g, d += j), l % a === 0 && b.push([c, d]), l++
            }
            return b
        }, clone: function (a) {
            return void 0 === a || null === a ? a = new c.Line(this.start.x, this.start.y, this.end.x, this.end.y) : a.setTo(this.start.x, this.start.y, this.end.x, this.end.y), a
        }
    }, Object.defineProperty(c.Line.prototype, "length", {
        get: function () {
            return Math.sqrt((this.end.x - this.start.x) * (this.end.x - this.start.x) + (this.end.y - this.start.y) * (this.end.y - this.start.y))
        }
    }), Object.defineProperty(c.Line.prototype, "angle", {
        get: function () {
            return Math.atan2(this.end.y - this.start.y, this.end.x - this.start.x)
        }
    }), Object.defineProperty(c.Line.prototype, "slope", {
        get: function () {
            return (this.end.y - this.start.y) / (this.end.x - this.start.x)
        }
    }), Object.defineProperty(c.Line.prototype, "perpSlope", {
        get: function () {
            return -((this.end.x - this.start.x) / (this.end.y - this.start.y))
        }
    }), Object.defineProperty(c.Line.prototype, "x", {
        get: function () {
            return Math.min(this.start.x, this.end.x)
        }
    }), Object.defineProperty(c.Line.prototype, "y", {
        get: function () {
            return Math.min(this.start.y, this.end.y)
        }
    }), Object.defineProperty(c.Line.prototype, "left", {
        get: function () {
            return Math.min(this.start.x, this.end.x)
        }
    }), Object.defineProperty(c.Line.prototype, "right", {
        get: function () {
            return Math.max(this.start.x, this.end.x)
        }
    }), Object.defineProperty(c.Line.prototype, "top", {
        get: function () {
            return Math.min(this.start.y, this.end.y)
        }
    }), Object.defineProperty(c.Line.prototype, "bottom", {
        get: function () {
            return Math.max(this.start.y, this.end.y)
        }
    }), Object.defineProperty(c.Line.prototype, "width", {
        get: function () {
            return Math.abs(this.start.x - this.end.x)
        }
    }), Object.defineProperty(c.Line.prototype, "height", {
        get: function () {
            return Math.abs(this.start.y - this.end.y)
        }
    }), Object.defineProperty(c.Line.prototype, "normalX", {
        get: function () {
            return Math.cos(this.angle - 1.5707963267948966)
        }
    }), Object.defineProperty(c.Line.prototype, "normalY", {
        get: function () {
            return Math.sin(this.angle - 1.5707963267948966)
        }
    }), Object.defineProperty(c.Line.prototype, "normalAngle", {
        get: function () {
            return c.Math.wrap(this.angle - 1.5707963267948966, -Math.PI, Math.PI)
        }
    }), c.Line.intersectsPoints = function (a, b, d, e, f, g) {
        void 0 === f && (f = !0), void 0 === g && (g = new c.Point);
        var h = b.y - a.y, i = e.y - d.y, j = a.x - b.x, k = d.x - e.x, l = b.x * a.y - a.x * b.y,
            m = e.x * d.y - d.x * e.y, n = h * k - i * j;
        if (0 === n) return null;
        if (g.x = (j * m - k * l) / n, g.y = (i * l - h * m) / n, f) {
            var o = (e.y - d.y) * (b.x - a.x) - (e.x - d.x) * (b.y - a.y),
                p = ((e.x - d.x) * (a.y - d.y) - (e.y - d.y) * (a.x - d.x)) / o,
                q = ((b.x - a.x) * (a.y - d.y) - (b.y - a.y) * (a.x - d.x)) / o;
            return p >= 0 && p <= 1 && q >= 0 && q <= 1 ? g : null
        }
        return g
    }, c.Line.intersects = function (a, b, d, e) {
        return c.Line.intersectsPoints(a.start, a.end, b.start, b.end, d, e)
    }, c.Line.intersectsRectangle = function (a, b) {
        if (!c.Rectangle.intersects(a, b)) return !1;
        var d = a.start.x, e = a.start.y, f = a.end.x, g = a.end.y, h = b.x, i = b.y, j = b.right, k = b.bottom, l = 0;
        if (d >= h && d <= j && e >= i && e <= k || f >= h && f <= j && g >= i && g <= k) return !0;
        if (d < h && f >= h) {
            if (l = e + (g - e) * (h - d) / (f - d), l > i && l <= k) return !0
        } else if (d > j && f <= j && (l = e + (g - e) * (j - d) / (f - d), l >= i && l <= k)) return !0;
        if (e < i && g >= i) {
            if (l = d + (f - d) * (i - e) / (g - e), l >= h && l <= j) return !0
        } else if (e > k && g <= k && (l = d + (f - d) * (k - e) / (g - e), l >= h && l <= j)) return !0;
        return !1
    }, c.Line.reflect = function (a, b) {
        return 2 * b.normalAngle - 3.141592653589793 - a.angle
    }, c.Matrix = function (a, b, d, e, f, g) {
        void 0 !== a && null !== a || (a = 1), void 0 !== b && null !== b || (b = 0), void 0 !== d && null !== d || (d = 0), void 0 !== e && null !== e || (e = 1), void 0 !== f && null !== f || (f = 0), void 0 !== g && null !== g || (g = 0), this.a = a, this.b = b, this.c = d, this.d = e, this.tx = f, this.ty = g, this.type = c.MATRIX
    }, c.Matrix.prototype = {
        fromArray: function (a) {
            return this.setTo(a[0], a[1], a[3], a[4], a[2], a[5])
        }, setTo: function (a, b, c, d, e, f) {
            return this.a = a, this.b = b, this.c = c, this.d = d, this.tx = e, this.ty = f, this
        }, clone: function (a) {
            return void 0 === a || null === a ? a = new c.Matrix(this.a, this.b, this.c, this.d, this.tx, this.ty) : (a.a = this.a, a.b = this.b, a.c = this.c, a.d = this.d, a.tx = this.tx, a.ty = this.ty), a
        }, copyTo: function (a) {
            return a.copyFrom(this), a
        }, copyFrom: function (a) {
            return this.a = a.a, this.b = a.b, this.c = a.c, this.d = a.d, this.tx = a.tx, this.ty = a.ty, this
        }, toArray: function (a, b) {
            return void 0 === b && (b = new PIXI.Float32Array(9)), a ? (b[0] = this.a, b[1] = this.b, b[2] = 0, b[3] = this.c, b[4] = this.d, b[5] = 0, b[6] = this.tx, b[7] = this.ty, b[8] = 1) : (b[0] = this.a, b[1] = this.c, b[2] = this.tx, b[3] = this.b, b[4] = this.d, b[5] = this.ty, b[6] = 0, b[7] = 0, b[8] = 1), b
        }, apply: function (a, b) {
            return void 0 === b && (b = new c.Point), b.x = this.a * a.x + this.c * a.y + this.tx, b.y = this.b * a.x + this.d * a.y + this.ty, b
        }, applyInverse: function (a, b) {
            void 0 === b && (b = new c.Point);
            var d = 1 / (this.a * this.d + this.c * -this.b), e = a.x, f = a.y;
            return b.x = this.d * d * e + -this.c * d * f + (this.ty * this.c - this.tx * this.d) * d, b.y = this.a * d * f + -this.b * d * e + (-this.ty * this.a + this.tx * this.b) * d, b
        }, translate: function (a, b) {
            return this.tx += a, this.ty += b, this
        }, scale: function (a, b) {
            return this.a *= a, this.d *= b, this.c *= a, this.b *= b, this.tx *= a, this.ty *= b, this
        }, rotate: function (a) {
            var b = Math.cos(a), c = Math.sin(a), d = this.a, e = this.c, f = this.tx;
            return this.a = d * b - this.b * c, this.b = d * c + this.b * b, this.c = e * b - this.d * c, this.d = e * c + this.d * b, this.tx = f * b - this.ty * c, this.ty = f * c + this.ty * b, this
        }, append: function (a) {
            var b = this.a, c = this.b, d = this.c, e = this.d;
            return this.a = a.a * b + a.b * d, this.b = a.a * c + a.b * e, this.c = a.c * b + a.d * d, this.d = a.c * c + a.d * e, this.tx = a.tx * b + a.ty * d + this.tx, this.ty = a.tx * c + a.ty * e + this.ty, this
        }, identity: function () {
            return this.setTo(1, 0, 0, 1, 0, 0)
        }
    }, c.identityMatrix = new c.Matrix, PIXI.Matrix = c.Matrix, PIXI.identityMatrix = c.identityMatrix, c.Point = function (a, b) {
        a = a || 0, b = b || 0, this.x = a, this.y = b, this.type = c.POINT
    }, c.Point.prototype = {
        copyFrom: function (a) {
            return this.setTo(a.x, a.y)
        }, invert: function () {
            return this.setTo(this.y, this.x)
        }, setTo: function (a, b) {
            return this.x = a || 0, this.y = b || (0 !== b ? this.x : 0), this
        }, set: function (a, b) {
            return this.x = a || 0, this.y = b || (0 !== b ? this.x : 0), this
        }, add: function (a, b) {
            return this.x += a, this.y += b, this
        }, subtract: function (a, b) {
            return this.x -= a, this.y -= b, this
        }, multiply: function (a, b) {
            return this.x *= a, this.y *= b, this
        }, divide: function (a, b) {
            return this.x /= a, this.y /= b, this
        }, clampX: function (a, b) {
            return this.x = c.Math.clamp(this.x, a, b), this
        }, clampY: function (a, b) {
            return this.y = c.Math.clamp(this.y, a, b), this
        }, clamp: function (a, b) {
            return this.x = c.Math.clamp(this.x, a, b), this.y = c.Math.clamp(this.y, a, b), this
        }, clone: function (a) {
            return void 0 === a || null === a ? a = new c.Point(this.x, this.y) : a.setTo(this.x, this.y), a
        }, copyTo: function (a) {
            return a.x = this.x, a.y = this.y, a
        }, distance: function (a, b) {
            return c.Point.distance(this, a, b)
        }, equals: function (a) {
            return a.x === this.x && a.y === this.y
        }, angle: function (a, b) {
            return void 0 === b && (b = !1), b ? c.Math.radToDeg(Math.atan2(a.y - this.y, a.x - this.x)) : Math.atan2(a.y - this.y, a.x - this.x)
        }, rotate: function (a, b, d, e, f) {
            return c.Point.rotate(this, a, b, d, e, f)
        }, getMagnitude: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        }, getMagnitudeSq: function () {
            return this.x * this.x + this.y * this.y
        }, setMagnitude: function (a) {
            return this.normalize().multiply(a, a)
        }, normalize: function () {
            if (!this.isZero()) {
                var a = this.getMagnitude();
                this.x /= a, this.y /= a
            }
            return this
        }, isZero: function () {
            return 0 === this.x && 0 === this.y
        }, dot: function (a) {
            return this.x * a.x + this.y * a.y
        }, cross: function (a) {
            return this.x * a.y - this.y * a.x
        }, perp: function () {
            return this.setTo(-this.y, this.x)
        }, rperp: function () {
            return this.setTo(this.y, -this.x)
        }, normalRightHand: function () {
            return this.setTo(this.y * -1, this.x)
        }, floor: function () {
            return this.setTo(Math.floor(this.x), Math.floor(this.y))
        }, ceil: function () {
            return this.setTo(Math.ceil(this.x), Math.ceil(this.y))
        }, toString: function () {
            return "[{Point (x=" + this.x + " y=" + this.y + ")}]"
        }
    }, c.Point.prototype.constructor = c.Point, c.Point.add = function (a, b, d) {
        return void 0 === d && (d = new c.Point), d.x = a.x + b.x, d.y = a.y + b.y, d
    }, c.Point.subtract = function (a, b, d) {
        return void 0 === d && (d = new c.Point), d.x = a.x - b.x, d.y = a.y - b.y, d
    }, c.Point.multiply = function (a, b, d) {
        return void 0 === d && (d = new c.Point), d.x = a.x * b.x, d.y = a.y * b.y, d
    }, c.Point.divide = function (a, b, d) {
        return void 0 === d && (d = new c.Point), d.x = a.x / b.x, d.y = a.y / b.y, d
    }, c.Point.equals = function (a, b) {
        return a.x === b.x && a.y === b.y
    }, c.Point.angle = function (a, b) {
        return Math.atan2(a.y - b.y, a.x - b.x)
    }, c.Point.negative = function (a, b) {
        return void 0 === b && (b = new c.Point), b.setTo(-a.x, -a.y)
    }, c.Point.multiplyAdd = function (a, b, d, e) {
        return void 0 === e && (e = new c.Point), e.setTo(a.x + b.x * d, a.y + b.y * d)
    }, c.Point.interpolate = function (a, b, d, e) {
        return void 0 === e && (e = new c.Point), e.setTo(a.x + (b.x - a.x) * d, a.y + (b.y - a.y) * d)
    }, c.Point.perp = function (a, b) {
        return void 0 === b && (b = new c.Point), b.setTo(-a.y, a.x)
    }, c.Point.rperp = function (a, b) {
        return void 0 === b && (b = new c.Point), b.setTo(a.y, -a.x)
    }, c.Point.distance = function (a, b, d) {
        var e = c.Math.distance(a.x, a.y, b.x, b.y);
        return d ? Math.round(e) : e
    }, c.Point.project = function (a, b, d) {
        void 0 === d && (d = new c.Point);
        var e = a.dot(b) / b.getMagnitudeSq();
        return 0 !== e && d.setTo(e * b.x, e * b.y), d
    }, c.Point.projectUnit = function (a, b, d) {
        void 0 === d && (d = new c.Point);
        var e = a.dot(b);
        return 0 !== e && d.setTo(e * b.x, e * b.y), d
    }, c.Point.normalRightHand = function (a, b) {
        return void 0 === b && (b = new c.Point), b.setTo(a.y * -1, a.x)
    }, c.Point.normalize = function (a, b) {
        void 0 === b && (b = new c.Point);
        var d = a.getMagnitude();
        return 0 !== d && b.setTo(a.x / d, a.y / d), b
    }, c.Point.rotate = function (a, b, d, e, f, g) {
        if (f && (e = c.Math.degToRad(e)), void 0 === g) {
            a.subtract(b, d);
            var h = Math.sin(e), i = Math.cos(e), j = i * a.x - h * a.y, k = h * a.x + i * a.y;
            a.x = j + b, a.y = k + d
        } else {
            var l = e + Math.atan2(a.y - d, a.x - b);
            a.x = b + g * Math.cos(l), a.y = d + g * Math.sin(l)
        }
        return a
    }, c.Point.centroid = function (a, b) {
        if (void 0 === b && (b = new c.Point), "[object Array]" !== Object.prototype.toString.call(a)) throw new Error("Phaser.Point. Parameter 'points' must be an array");
        var d = a.length;
        if (d < 1) throw new Error("Phaser.Point. Parameter 'points' array must not be empty");
        if (1 === d) return b.copyFrom(a[0]), b;
        for (var e = 0; e < d; e++) c.Point.add(b, a[e], b);
        return b.divide(d, d), b
    }, c.Point.parse = function (a, b, d) {
        b = b || "x", d = d || "y";
        var e = new c.Point;
        return a[b] && (e.x = parseInt(a[b], 10)), a[d] && (e.y = parseInt(a[d], 10)), e
    }, PIXI.Point = c.Point, c.Polygon = function () {
        this.area = 0, this._points = [], arguments.length > 0 && this.setTo.apply(this, arguments), this.closed = !0, this.flattened = !1, this.type = c.POLYGON
    }, c.Polygon.prototype = {
        toNumberArray: function (a) {
            void 0 === a && (a = []);
            for (var b = 0; b < this._points.length; b++) "number" == typeof this._points[b] ? (a.push(this._points[b]), a.push(this._points[b + 1]), b++) : (a.push(this._points[b].x), a.push(this._points[b].y));
            return a
        }, flatten: function () {
            return this._points = this.toNumberArray(), this.flattened = !0, this
        }, clone: function (a) {
            var b = this._points.slice();
            return void 0 === a || null === a ? a = new c.Polygon(b) : a.setTo(b), a
        }, contains: function (a, b) {
            var c = !1;
            if (this.flattened) for (var d = -2, e = this._points.length - 2; (d += 2) < this._points.length; e = d) {
                var f = this._points[d], g = this._points[d + 1], h = this._points[e], i = this._points[e + 1];
                (g <= b && b < i || i <= b && b < g) && a < (h - f) * (b - g) / (i - g) + f && (c = !c)
            } else for (var d = -1, e = this._points.length - 1; ++d < this._points.length; e = d) {
                var f = this._points[d].x, g = this._points[d].y, h = this._points[e].x, i = this._points[e].y;
                (g <= b && b < i || i <= b && b < g) && a < (h - f) * (b - g) / (i - g) + f && (c = !c)
            }
            return c
        }, setTo: function (a) {
            if (this.area = 0, this._points = [], arguments.length > 0) {
                Array.isArray(a) || (a = Array.prototype.slice.call(arguments));
                for (var b = Number.MAX_VALUE, c = 0, d = a.length; c < d; c++) {
                    if ("number" == typeof a[c]) {
                        var e = new PIXI.Point(a[c], a[c + 1]);
                        c++
                    } else if (Array.isArray(a[c])) var e = new PIXI.Point(a[c][0], a[c][1]); else var e = new PIXI.Point(a[c].x, a[c].y);
                    this._points.push(e), e.y < b && (b = e.y)
                }
                this.calculateArea(b)
            }
            return this
        }, calculateArea: function (a) {
            for (var b, c, d, e, f = 0, g = this._points.length; f < g; f++) b = this._points[f], c = f === g - 1 ? this._points[0] : this._points[f + 1], d = (b.y - a + (c.y - a)) / 2, e = b.x - c.x, this.area += d * e;
            return this.area
        }
    }, c.Polygon.prototype.constructor = c.Polygon, Object.defineProperty(c.Polygon.prototype, "points", {
        get: function () {
            return this._points
        }, set: function (a) {
            null != a ? this.setTo(a) : this.setTo()
        }
    }), PIXI.Polygon = c.Polygon, c.Rectangle = function (a, b, d, e) {
        a = a || 0, b = b || 0, d = d || 0, e = e || 0, this.x = a, this.y = b, this.width = d, this.height = e, this.type = c.RECTANGLE
    }, c.Rectangle.prototype = {
        offset: function (a, b) {
            return this.x += a, this.y += b, this
        }, offsetPoint: function (a) {
            return this.offset(a.x, a.y)
        }, setTo: function (a, b, c, d) {
            return this.x = a, this.y = b, this.width = c, this.height = d, this
        }, scale: function (a, b) {
            return void 0 === b && (b = a), this.width *= a, this.height *= b, this
        }, centerOn: function (a, b) {
            return this.centerX = a, this.centerY = b, this
        }, floor: function () {
            this.x = Math.floor(this.x), this.y = Math.floor(this.y)
        }, floorAll: function () {
            this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.width = Math.floor(this.width), this.height = Math.floor(this.height)
        }, ceil: function () {
            this.x = Math.ceil(this.x), this.y = Math.ceil(this.y)
        }, ceilAll: function () {
            this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.width = Math.ceil(this.width), this.height = Math.ceil(this.height)
        }, copyFrom: function (a) {
            return this.setTo(a.x, a.y, a.width, a.height)
        }, copyTo: function (a) {
            return a.x = this.x, a.y = this.y, a.width = this.width, a.height = this.height, a
        }, inflate: function (a, b) {
            return c.Rectangle.inflate(this, a, b)
        }, size: function (a) {
            return c.Rectangle.size(this, a)
        }, resize: function (a, b) {
            return this.width = a, this.height = b, this
        }, clone: function (a) {
            return c.Rectangle.clone(this, a)
        }, contains: function (a, b) {
            return c.Rectangle.contains(this, a, b)
        }, containsRect: function (a) {
            return c.Rectangle.containsRect(a, this)
        }, equals: function (a) {
            return c.Rectangle.equals(this, a)
        }, intersection: function (a, b) {
            return c.Rectangle.intersection(this, a, b)
        }, intersects: function (a) {
            return c.Rectangle.intersects(this, a)
        }, intersectsRaw: function (a, b, d, e, f) {
            return c.Rectangle.intersectsRaw(this, a, b, d, e, f)
        }, union: function (a, b) {
            return c.Rectangle.union(this, a, b)
        }, random: function (a) {
            return void 0 === a && (a = new c.Point), a.x = this.randomX, a.y = this.randomY, a
        }, getPoint: function (a, b) {
            switch (void 0 === b && (b = new c.Point), a) {
                default:
                case c.TOP_LEFT:
                    return b.set(this.x, this.y);
                case c.TOP_CENTER:
                    return b.set(this.centerX, this.y);
                case c.TOP_RIGHT:
                    return b.set(this.right, this.y);
                case c.LEFT_CENTER:
                    return b.set(this.x, this.centerY);
                case c.CENTER:
                    return b.set(this.centerX, this.centerY);
                case c.RIGHT_CENTER:
                    return b.set(this.right, this.centerY);
                case c.BOTTOM_LEFT:
                    return b.set(this.x, this.bottom);
                case c.BOTTOM_CENTER:
                    return b.set(this.centerX, this.bottom);
                case c.BOTTOM_RIGHT:
                    return b.set(this.right, this.bottom)
            }
        }, toString: function () {
            return "[{Rectangle (x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + " empty=" + this.empty + ")}]"
        }
    }, Object.defineProperty(c.Rectangle.prototype, "halfWidth", {
        get: function () {
            return Math.round(this.width / 2)
        }
    }), Object.defineProperty(c.Rectangle.prototype, "halfHeight", {
        get: function () {
            return Math.round(this.height / 2)
        }
    }), Object.defineProperty(c.Rectangle.prototype, "bottom", {
        get: function () {
            return this.y + this.height
        }, set: function (a) {
            a <= this.y ? this.height = 0 : this.height = a - this.y
        }
    }), Object.defineProperty(c.Rectangle.prototype, "bottomLeft", {
        get: function () {
            return new c.Point(this.x, this.bottom)
        }, set: function (a) {
            this.x = a.x, this.bottom = a.y
        }
    }), Object.defineProperty(c.Rectangle.prototype, "bottomRight", {
        get: function () {
            return new c.Point(this.right, this.bottom)
        }, set: function (a) {
            this.right = a.x, this.bottom = a.y
        }
    }), Object.defineProperty(c.Rectangle.prototype, "left", {
        get: function () {
            return this.x
        }, set: function (a) {
            a >= this.right ? this.width = 0 : this.width = this.right - a, this.x = a
        }
    }), Object.defineProperty(c.Rectangle.prototype, "right", {
        get: function () {
            return this.x + this.width
        }, set: function (a) {
            a <= this.x ? this.width = 0 : this.width = a - this.x
        }
    }), Object.defineProperty(c.Rectangle.prototype, "volume", {
        get: function () {
            return this.width * this.height
        }
    }), Object.defineProperty(c.Rectangle.prototype, "perimeter", {
        get: function () {
            return 2 * this.width + 2 * this.height
        }
    }), Object.defineProperty(c.Rectangle.prototype, "centerX", {
        get: function () {
            return this.x + this.halfWidth
        }, set: function (a) {
            this.x = a - this.halfWidth
        }
    }), Object.defineProperty(c.Rectangle.prototype, "centerY", {
        get: function () {
            return this.y + this.halfHeight
        }, set: function (a) {
            this.y = a - this.halfHeight
        }
    }), Object.defineProperty(c.Rectangle.prototype, "randomX", {
        get: function () {
            return this.x + Math.random() * this.width
        }
    }), Object.defineProperty(c.Rectangle.prototype, "randomY", {
        get: function () {
            return this.y + Math.random() * this.height
        }
    }), Object.defineProperty(c.Rectangle.prototype, "top", {
        get: function () {
            return this.y
        }, set: function (a) {
            a >= this.bottom ? (this.height = 0, this.y = a) : this.height = this.bottom - a
        }
    }), Object.defineProperty(c.Rectangle.prototype, "topLeft", {
        get: function () {
            return new c.Point(this.x, this.y)
        }, set: function (a) {
            this.x = a.x, this.y = a.y
        }
    }), Object.defineProperty(c.Rectangle.prototype, "topRight", {
        get: function () {
            return new c.Point(this.x + this.width, this.y)
        }, set: function (a) {
            this.right = a.x, this.y = a.y
        }
    }),Object.defineProperty(c.Rectangle.prototype, "empty", {
        get: function () {
            return !this.width || !this.height
        }, set: function (a) {
            a === !0 && this.setTo(0, 0, 0, 0)
        }
    }),c.Rectangle.prototype.constructor = c.Rectangle,c.Rectangle.inflate = function (a, b, c) {
        return a.x -= b, a.width += 2 * b, a.y -= c, a.height += 2 * c, a
    },c.Rectangle.inflatePoint = function (a, b) {
        return c.Rectangle.inflate(a, b.x, b.y)
    },c.Rectangle.size = function (a, b) {
        return void 0 === b || null === b ? b = new c.Point(a.width, a.height) : b.setTo(a.width, a.height), b
    },c.Rectangle.clone = function (a, b) {
        return void 0 === b || null === b ? b = new c.Rectangle(a.x, a.y, a.width, a.height) : b.setTo(a.x, a.y, a.width, a.height), b
    },c.Rectangle.contains = function (a, b, c) {
        return !(a.width <= 0 || a.height <= 0) && (b >= a.x && b < a.right && c >= a.y && c < a.bottom)
    },c.Rectangle.containsRaw = function (a, b, c, d, e, f) {
        return e >= a && e < a + c && f >= b && f < b + d
    },c.Rectangle.containsPoint = function (a, b) {
        return c.Rectangle.contains(a, b.x, b.y)
    },c.Rectangle.containsRect = function (a, b) {
        return !(a.volume > b.volume) && (a.x >= b.x && a.y >= b.y && a.right < b.right && a.bottom < b.bottom)
    },c.Rectangle.equals = function (a, b) {
        return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height
    },c.Rectangle.sameDimensions = function (a, b) {
        return a.width === b.width && a.height === b.height
    },c.Rectangle.intersection = function (a, b, d) {
        return void 0 === d && (d = new c.Rectangle), c.Rectangle.intersects(a, b) && (d.x = Math.max(a.x, b.x), d.y = Math.max(a.y, b.y), d.width = Math.min(a.right, b.right) - d.x, d.height = Math.min(a.bottom, b.bottom) - d.y), d
    },c.Rectangle.intersects = function (a, b) {
        return !(a.width <= 0 || a.height <= 0 || b.width <= 0 || b.height <= 0) && !(a.right < b.x || a.bottom < b.y || a.x > b.right || a.y > b.bottom)
    },c.Rectangle.intersectsRaw = function (a, b, c, d, e, f) {
        return void 0 === f && (f = 0), !(b > a.right + f || c < a.left - f || d > a.bottom + f || e < a.top - f)
    },c.Rectangle.union = function (a, b, d) {
        return void 0 === d && (d = new c.Rectangle), d.setTo(Math.min(a.x, b.x), Math.min(a.y, b.y), Math.max(a.right, b.right) - Math.min(a.left, b.left), Math.max(a.bottom, b.bottom) - Math.min(a.top, b.top))
    },c.Rectangle.aabb = function (a, b) {
        void 0 === b && (b = new c.Rectangle);
        var d = Number.NEGATIVE_INFINITY, e = Number.POSITIVE_INFINITY, f = Number.NEGATIVE_INFINITY,
            g = Number.POSITIVE_INFINITY;
        return a.forEach(function (a) {
            a.x > d && (d = a.x), a.x < e && (e = a.x), a.y > f && (f = a.y), a.y < g && (g = a.y)
        }), b.setTo(e, g, d - e, f - g), b
    },PIXI.Rectangle = c.Rectangle,PIXI.EmptyRectangle = new c.Rectangle(0, 0, 0, 0),c.RoundedRectangle = function (a, b, d, e, f) {
        void 0 === a && (a = 0), void 0 === b && (b = 0), void 0 === d && (d = 0), void 0 === e && (e = 0), void 0 === f && (f = 20), this.x = a, this.y = b, this.width = d, this.height = e, this.radius = f || 20, this.type = c.ROUNDEDRECTANGLE
    },c.RoundedRectangle.prototype = {
        clone: function () {
            return new c.RoundedRectangle(this.x, this.y, this.width, this.height, this.radius)
        }, contains: function (a, b) {
            if (this.width <= 0 || this.height <= 0) return !1;
            var c = this.x;
            if (a >= c && a <= c + this.width) {
                var d = this.y;
                if (b >= d && b <= d + this.height) return !0
            }
            return !1
        }
    },c.RoundedRectangle.prototype.constructor = c.RoundedRectangle,PIXI.RoundedRectangle = c.RoundedRectangle,c.Camera = function (a, b, d, e, f, g) {
        this.game = a, this.world = a.world, this.id = 0, this.view = new c.Rectangle(d, e, f, g), this.bounds = new c.Rectangle(d, e, f, g), this.deadzone = null, this.visible = !0, this.roundPx = !0, this.atLimit = {
            x: !1,
            y: !1
        }, this.target = null, this.displayObject = null, this.scale = null, this.totalInView = 0, this.lerp = new c.Point(1, 1), this.onShakeComplete = new c.Signal, this.onFlashComplete = new c.Signal, this.onFadeComplete = new c.Signal, this.fx = null, this._targetPosition = new c.Point, this._edge = 0, this._position = new c.Point, this._shake = {
            intensity: 0,
            duration: 0,
            horizontal: !1,
            vertical: !1,
            shakeBounds: !0,
            x: 0,
            y: 0
        }, this._fxDuration = 0, this._fxType = 0;
    },c.Camera.FOLLOW_LOCKON = 0,c.Camera.FOLLOW_PLATFORMER = 1,c.Camera.FOLLOW_TOPDOWN = 2,c.Camera.FOLLOW_TOPDOWN_TIGHT = 3,c.Camera.SHAKE_BOTH = 4,c.Camera.SHAKE_HORIZONTAL = 5,c.Camera.SHAKE_VERTICAL = 6,c.Camera.ENABLE_FX = !0,c.Camera.prototype = {
        boot: function () {
            this.displayObject = this.game.world, this.scale = this.game.world.scale, this.game.camera = this, c.Graphics && c.Camera.ENABLE_FX && (this.fx = new c.Graphics(this.game), this.game.stage.addChild(this.fx))
        }, preUpdate: function () {
            this.totalInView = 0
        }, follow: function (a, b, d, e) {
            void 0 === b && (b = c.Camera.FOLLOW_LOCKON), void 0 === d && (d = 1), void 0 === e && (e = 1), this.target = a, this.lerp.set(d, e);
            var f;
            switch (b) {
                case c.Camera.FOLLOW_PLATFORMER:
                    var g = this.width / 8, h = this.height / 3;
                    this.deadzone = new c.Rectangle((this.width - g) / 2, (this.height - h) / 2 - .25 * h, g, h);
                    break;
                case c.Camera.FOLLOW_TOPDOWN:
                    f = Math.max(this.width, this.height) / 4, this.deadzone = new c.Rectangle((this.width - f) / 2, (this.height - f) / 2, f, f);
                    break;
                case c.Camera.FOLLOW_TOPDOWN_TIGHT:
                    f = Math.max(this.width, this.height) / 8, this.deadzone = new c.Rectangle((this.width - f) / 2, (this.height - f) / 2, f, f);
                    break;
                case c.Camera.FOLLOW_LOCKON:
                    this.deadzone = null;
                    break;
                default:
                    this.deadzone = null
            }
        }, unfollow: function () {
            this.target = null
        }, focusOn: function (a) {
            this.setPosition(Math.round(a.x - this.view.halfWidth), Math.round(a.y - this.view.halfHeight))
        }, focusOnXY: function (a, b) {
            this.setPosition(Math.round(a - this.view.halfWidth), Math.round(b - this.view.halfHeight))
        }, shake: function (a, b, d, e, f) {
            return void 0 === a && (a = .05), void 0 === b && (b = 500), void 0 === d && (d = !0), void 0 === e && (e = c.Camera.SHAKE_BOTH), void 0 === f && (f = !0), !(!d && this._shake.duration > 0) && (this._shake.intensity = a, this._shake.duration = b, this._shake.shakeBounds = f, this._shake.x = 0, this._shake.y = 0, this._shake.horizontal = e === c.Camera.SHAKE_BOTH || e === c.Camera.SHAKE_HORIZONTAL, this._shake.vertical = e === c.Camera.SHAKE_BOTH || e === c.Camera.SHAKE_VERTICAL, !0)
        }, flash: function (a, b, c) {
            return void 0 === a && (a = 16777215), void 0 === b && (b = 500), void 0 === c && (c = !1), !(!this.fx || !c && this._fxDuration > 0) && (this.fx.clear(), this.fx.beginFill(a), this.fx.drawRect(0, 0, this.width, this.height), this.fx.endFill(), this.fx.alpha = 1, this._fxDuration = b, this._fxType = 0, !0)
        }, fade: function (a, b, c) {
            return void 0 === a && (a = 0), void 0 === b && (b = 500), void 0 === c && (c = !1), !(!this.fx || !c && this._fxDuration > 0) && (this.fx.clear(), this.fx.beginFill(a), this.fx.drawRect(0, 0, this.width, this.height), this.fx.endFill(), this.fx.alpha = 0, this._fxDuration = b, this._fxType = 1, !0)
        }, update: function () {
            this._fxDuration > 0 && this.updateFX(), this._shake.duration > 0 && this.updateShake(), this.bounds && this.checkBounds(), this.roundPx && (this.view.floor(), this._shake.x = Math.floor(this._shake.x), this._shake.y = Math.floor(this._shake.y)), this.displayObject.position.x = -this.view.x, this.displayObject.position.y = -this.view.y
        }, updateFX: function () {
            0 === this._fxType ? (this.fx.alpha -= this.game.time.elapsedMS / this._fxDuration, this.fx.alpha <= 0 && (this._fxDuration = 0, this.fx.alpha = 0, this.onFlashComplete.dispatch())) : (this.fx.alpha += this.game.time.elapsedMS / this._fxDuration, this.fx.alpha >= 1 && (this._fxDuration = 0, this.fx.alpha = 1, this.onFadeComplete.dispatch()))
        }, updateShake: function () {
            this._shake.duration -= this.game.time.elapsedMS, this._shake.duration <= 0 ? (this.onShakeComplete.dispatch(), this._shake.x = 0, this._shake.y = 0) : (this._shake.horizontal && (this._shake.x = this.game.rnd.frac() * this._shake.intensity * this.view.width * 2 - this._shake.intensity * this.view.width), this._shake.vertical && (this._shake.y = this.game.rnd.frac() * this._shake.intensity * this.view.height * 2 - this._shake.intensity * this.view.height))
        }, updateTarget: function () {
            this._targetPosition.x = this.view.x + this.target.worldPosition.x, this._targetPosition.y = this.view.y + this.target.worldPosition.y, this.deadzone ? (this._edge = this._targetPosition.x - this.view.x, this._edge < this.deadzone.left ? this.view.x = this.game.math.linear(this.view.x, this._targetPosition.x - this.deadzone.left, this.lerp.x) : this._edge > this.deadzone.right && (this.view.x = this.game.math.linear(this.view.x, this._targetPosition.x - this.deadzone.right, this.lerp.x)), this._edge = this._targetPosition.y - this.view.y, this._edge < this.deadzone.top ? this.view.y = this.game.math.linear(this.view.y, this._targetPosition.y - this.deadzone.top, this.lerp.y) : this._edge > this.deadzone.bottom && (this.view.y = this.game.math.linear(this.view.y, this._targetPosition.y - this.deadzone.bottom, this.lerp.y))) : (this.view.x = this.game.math.linear(this.view.x, this._targetPosition.x - this.view.halfWidth, this.lerp.x), this.view.y = this.game.math.linear(this.view.y, this._targetPosition.y - this.view.halfHeight, this.lerp.y)), this.bounds && this.checkBounds(), this.roundPx && this.view.floor(), this.displayObject.position.x = -this.view.x, this.displayObject.position.y = -this.view.y
        }, setBoundsToWorld: function () {
            this.bounds && this.bounds.copyFrom(this.game.world.bounds)
        }, checkBounds: function () {
            this.atLimit.x = !1, this.atLimit.y = !1;
            var a = this.view.x + this._shake.x, b = this.view.right + this._shake.x, c = this.view.y + this._shake.y,
                d = this.view.bottom + this._shake.y;
            a <= this.bounds.x * this.scale.x && (this.atLimit.x = !0, this.view.x = this.bounds.x * this.scale.x, this._shake.shakeBounds || (this._shake.x = 0)), b >= this.bounds.right * this.scale.x && (this.atLimit.x = !0, this.view.x = this.bounds.right * this.scale.x - this.width, this._shake.shakeBounds || (this._shake.x = 0)), c <= this.bounds.top * this.scale.y && (this.atLimit.y = !0, this.view.y = this.bounds.top * this.scale.y, this._shake.shakeBounds || (this._shake.y = 0)), d >= this.bounds.bottom * this.scale.y && (this.atLimit.y = !0, this.view.y = this.bounds.bottom * this.scale.y - this.height, this._shake.shakeBounds || (this._shake.y = 0))
        }, setPosition: function (a, b) {
            this.view.x = a, this.view.y = b, this.bounds && this.checkBounds()
        }, setSize: function (a, b) {
            this.view.width = a, this.view.height = b
        }, reset: function () {
            this.target = null, this.view.x = 0, this.view.y = 0, this._shake.duration = 0, this.resetFX()
        }, resetFX: function () {
            this.fx.clear(), this.fx.alpha = 0, this._fxDuration = 0
        }
    },c.Camera.prototype.constructor = c.Camera,Object.defineProperty(c.Camera.prototype, "x", {
        get: function () {
            return this.view.x
        }, set: function (a) {
            this.view.x = a, this.bounds && this.checkBounds()
        }
    }),Object.defineProperty(c.Camera.prototype, "y", {
        get: function () {
            return this.view.y
        }, set: function (a) {
            this.view.y = a, this.bounds && this.checkBounds()
        }
    }),Object.defineProperty(c.Camera.prototype, "position", {
        get: function () {
            return this._position.set(this.view.x, this.view.y), this._position
        }, set: function (a) {
            "undefined" != typeof a.x && (this.view.x = a.x), "undefined" != typeof a.y && (this.view.y = a.y), this.bounds && this.checkBounds()
        }
    }),Object.defineProperty(c.Camera.prototype, "width", {
        get: function () {
            return this.view.width
        }, set: function (a) {
            this.view.width = a
        }
    }),Object.defineProperty(c.Camera.prototype, "height", {
        get: function () {
            return this.view.height
        }, set: function (a) {
            this.view.height = a
        }
    }),Object.defineProperty(c.Camera.prototype, "shakeIntensity", {
        get: function () {
            return this._shake.intensity
        }, set: function (a) {
            this._shake.intensity = a
        }
    }),c.State = function () {
        this.game = null, this.key = "", this.add = null, this.make = null, this.camera = null, this.cache = null, this.input = null, this.load = null, this.math = null, this.sound = null, this.scale = null, this.stage = null, this.state = null, this.time = null, this.tweens = null, this.world = null, this.particles = null, this.physics = null, this.rnd = null
    },c.State.prototype = {
        init: function () {
        }, preload: function () {
        }, loadUpdate: function () {
        }, loadRender: function () {
        }, create: function () {
        }, update: function () {
        }, preRender: function () {
        }, render: function () {
        }, resize: function () {
        }, paused: function () {
        }, resumed: function () {
        }, pauseUpdate: function () {
        }, shutdown: function () {
        }
    },c.State.prototype.constructor = c.State,c.StateManager = function (a, b) {
        this.game = a, this.states = {}, this._pendingState = null, "undefined" != typeof b && null !== b && (this._pendingState = b), this._clearWorld = !1, this._clearCache = !1, this._created = !1, this._args = [], this.current = "", this.onStateChange = new c.Signal, this.onInitCallback = null, this.onPreloadCallback = null, this.onCreateCallback = null, this.onUpdateCallback = null, this.onRenderCallback = null, this.onResizeCallback = null, this.onPreRenderCallback = null, this.onLoadUpdateCallback = null, this.onLoadRenderCallback = null, this.onPausedCallback = null, this.onResumedCallback = null, this.onPauseUpdateCallback = null, this.onShutDownCallback = null
    },c.StateManager.prototype = {
        boot: function () {
            this.game.onPause.add(this.pause, this), this.game.onResume.add(this.resume, this), null !== this._pendingState && "string" != typeof this._pendingState && this.add("default", this._pendingState, !0)
        }, add: function (a, b, d) {
            void 0 === d && (d = !1);
            var e;
            return b instanceof c.State ? e = b : "object" == typeof b ? (e = b, e.game = this.game) : "function" == typeof b && (e = new b(this.game)), this.states[a] = e, d && (this.game.isBooted ? this.start(a) : this._pendingState = a), e
        }, remove: function (a) {
            this.current === a && (this.callbackContext = null, this.onInitCallback = null, this.onShutDownCallback = null, this.onPreloadCallback = null, this.onLoadRenderCallback = null, this.onLoadUpdateCallback = null, this.onCreateCallback = null, this.onUpdateCallback = null, this.onPreRenderCallback = null, this.onRenderCallback = null, this.onResizeCallback = null, this.onPausedCallback = null, this.onResumedCallback = null, this.onPauseUpdateCallback = null), delete this.states[a]
        }, start: function (a, b, c) {
            void 0 === b && (b = !0), void 0 === c && (c = !1), this.checkState(a) && (this._pendingState = a, this._clearWorld = b, this._clearCache = c, arguments.length > 3 && (this._args = Array.prototype.splice.call(arguments, 3)))
        }, restart: function (a, b) {
            void 0 === a && (a = !0), void 0 === b && (b = !1), this._pendingState = this.current, this._clearWorld = a, this._clearCache = b, arguments.length > 2 && (this._args = Array.prototype.slice.call(arguments, 2))
        }, dummy: function () {
        }, preUpdate: function () {
            if (this._pendingState && this.game.isBooted) {
                var a = this.current;
                if (this.clearCurrentState(), this.setCurrentState(this._pendingState), this.onStateChange.dispatch(this.current, a), this.current !== this._pendingState) return;
                this._pendingState = null, this.onPreloadCallback ? (this.game.load.reset(!0), this.onPreloadCallback.call(this.callbackContext, this.game), 0 === this.game.load.totalQueuedFiles() && 0 === this.game.load.totalQueuedPacks() ? this.loadComplete() : this.game.load.start()) : this.loadComplete()
            }
        }, clearCurrentState: function () {
            this.current && (this.onShutDownCallback && this.onShutDownCallback.call(this.callbackContext, this.game), this.game.tweens.removeAll(), this.game.camera.reset(), this.game.input.reset(!0), this.game.physics.clear(), this.game.time.removeAll(), this.game.scale.reset(this._clearWorld), this.game.debug && this.game.debug.reset(), this._clearWorld && (this.game.world.shutdown(), this._clearCache && this.game.cache.destroy()))
        }, checkState: function (a) {
            return this.states[a] ? !!(this.states[a].preload || this.states[a].create || this.states[a].update || this.states[a].render) || (console.warn("Invalid Phaser State object given. Must contain at least a one of the required functions: preload, create, update or render"), !1) : (console.warn("Phaser.StateManager - No state found with the key: " + a), !1)
        }, link: function (a) {
            this.states[a].game = this.game, this.states[a].add = this.game.add, this.states[a].make = this.game.make, this.states[a].camera = this.game.camera, this.states[a].cache = this.game.cache, this.states[a].input = this.game.input, this.states[a].load = this.game.load, this.states[a].math = this.game.math, this.states[a].sound = this.game.sound, this.states[a].scale = this.game.scale, this.states[a].state = this, this.states[a].stage = this.game.stage, this.states[a].time = this.game.time, this.states[a].tweens = this.game.tweens, this.states[a].world = this.game.world, this.states[a].particles = this.game.particles, this.states[a].rnd = this.game.rnd, this.states[a].physics = this.game.physics, this.states[a].key = a
        }, unlink: function (a) {
            this.states[a] && (this.states[a].game = null, this.states[a].add = null, this.states[a].make = null, this.states[a].camera = null, this.states[a].cache = null, this.states[a].input = null, this.states[a].load = null, this.states[a].math = null, this.states[a].sound = null, this.states[a].scale = null, this.states[a].state = null, this.states[a].stage = null, this.states[a].time = null, this.states[a].tweens = null, this.states[a].world = null, this.states[a].particles = null, this.states[a].rnd = null, this.states[a].physics = null)
        }, setCurrentState: function (a) {
            this.callbackContext = this.states[a], this.link(a), this.onInitCallback = this.states[a].init || this.dummy, this.onPreloadCallback = this.states[a].preload || null, this.onLoadRenderCallback = this.states[a].loadRender || null, this.onLoadUpdateCallback = this.states[a].loadUpdate || null, this.onCreateCallback = this.states[a].create || null, this.onUpdateCallback = this.states[a].update || null, this.onPreRenderCallback = this.states[a].preRender || null, this.onRenderCallback = this.states[a].render || null, this.onResizeCallback = this.states[a].resize || null, this.onPausedCallback = this.states[a].paused || null, this.onResumedCallback = this.states[a].resumed || null, this.onPauseUpdateCallback = this.states[a].pauseUpdate || null, this.onShutDownCallback = this.states[a].shutdown || this.dummy, "" !== this.current && this.game.physics.reset(), this.current = a, this._created = !1, this.onInitCallback.apply(this.callbackContext, this._args), a === this._pendingState && (this._args = []), this.game._kickstart = !0
        }, getCurrentState: function () {
            return this.states[this.current]
        }, loadComplete: function () {
            this._created === !1 && this.onLoadUpdateCallback && this.onLoadUpdateCallback.call(this.callbackContext, this.game), this._created === !1 && this.onCreateCallback ? (this._created = !0, this.onCreateCallback.call(this.callbackContext, this.game)) : this._created = !0
        }, pause: function () {
            this._created && this.onPausedCallback && this.onPausedCallback.call(this.callbackContext, this.game)
        }, resume: function () {
            this._created && this.onResumedCallback && this.onResumedCallback.call(this.callbackContext, this.game)
        }, update: function () {
            this._created ? this.onUpdateCallback && this.onUpdateCallback.call(this.callbackContext, this.game) : this.onLoadUpdateCallback && this.onLoadUpdateCallback.call(this.callbackContext, this.game)
        }, pauseUpdate: function () {
            this._created ? this.onPauseUpdateCallback && this.onPauseUpdateCallback.call(this.callbackContext, this.game) : this.onLoadUpdateCallback && this.onLoadUpdateCallback.call(this.callbackContext, this.game)
        }, preRender: function (a) {
            this._created && this.onPreRenderCallback && this.onPreRenderCallback.call(this.callbackContext, this.game, a)
        }, resize: function (a, b) {
            this.onResizeCallback && this.onResizeCallback.call(this.callbackContext, a, b)
        }, render: function () {
            this._created ? this.onRenderCallback && (this.game.renderType === c.CANVAS ? (this.game.context.save(), this.game.context.setTransform(1, 0, 0, 1, 0, 0), this.onRenderCallback.call(this.callbackContext, this.game), this.game.context.restore()) : this.onRenderCallback.call(this.callbackContext, this.game)) : this.onLoadRenderCallback && this.onLoadRenderCallback.call(this.callbackContext, this.game)
        }, destroy: function () {
            this._clearWorld = !0, this._clearCache = !0, this.clearCurrentState(), this.callbackContext = null, this.onInitCallback = null, this.onShutDownCallback = null, this.onPreloadCallback = null, this.onLoadRenderCallback = null, this.onLoadUpdateCallback = null, this.onCreateCallback = null, this.onUpdateCallback = null, this.onRenderCallback = null, this.onPausedCallback = null, this.onResumedCallback = null, this.onPauseUpdateCallback = null, this.game = null, this.states = {}, this._pendingState = null, this.current = ""
        }
    },c.StateManager.prototype.constructor = c.StateManager,Object.defineProperty(c.StateManager.prototype, "created", {
        get: function () {
            return this._created
        }
    }),c.Signal = function () {
    },c.Signal.prototype = {
        _bindings: null,
        _prevParams: null,
        memorize: !1,
        _shouldPropagate: !0,
        active: !0,
        _boundDispatch: !1,
        validateListener: function (a, b) {
            if ("function" != typeof a) throw new Error("Phaser.Signal: listener is a required param of {fn}() and should be a Function.".replace("{fn}", b))
        },
        _registerListener: function (a, b, d, e, f) {
            var g, h = this._indexOfListener(a, d);
            if (h !== -1) {
                if (g = this._bindings[h], g.isOnce() !== b) throw new Error("You cannot add" + (b ? "" : "Once") + "() then add" + (b ? "Once" : "") + "() the same listener without removing the relationship first.")
            } else g = new c.SignalBinding(this, a, b, d, e, f), this._addBinding(g);
            return this.memorize && this._prevParams && g.execute(this._prevParams), g
        },
        _addBinding: function (a) {
            this._bindings || (this._bindings = []);
            var b = this._bindings.length;
            do b--; while (this._bindings[b] && a._priority <= this._bindings[b]._priority);
            this._bindings.splice(b + 1, 0, a)
        },
        _indexOfListener: function (a, b) {
            if (!this._bindings) return -1;
            void 0 === b && (b = null);
            for (var c, d = this._bindings.length; d--;) if (c = this._bindings[d], c._listener === a && c.context === b) return d;
            return -1
        },
        has: function (a, b) {
            return this._indexOfListener(a, b) !== -1
        },
        add: function (a, b, c) {
            this.validateListener(a, "add");
            var d = [];
            if (arguments.length > 3) for (var e = 3; e < arguments.length; e++) d.push(arguments[e]);
            return this._registerListener(a, !1, b, c, d)
        },
        addOnce: function (a, b, c) {
            this.validateListener(a, "addOnce");
            var d = [];
            if (arguments.length > 3) for (var e = 3; e < arguments.length; e++) d.push(arguments[e]);
            return this._registerListener(a, !0, b, c, d)
        },
        remove: function (a, b) {
            this.validateListener(a, "remove");
            var c = this._indexOfListener(a, b);
            return c !== -1 && (this._bindings[c]._destroy(), this._bindings.splice(c, 1)), a
        },
        removeAll: function (a) {
            if (void 0 === a && (a = null), this._bindings) {
                for (var b = this._bindings.length; b--;) a ? this._bindings[b].context === a && (this._bindings[b]._destroy(), this._bindings.splice(b, 1)) : this._bindings[b]._destroy();
                a || (this._bindings.length = 0)
            }
        },
        getNumListeners: function () {
            return this._bindings ? this._bindings.length : 0
        },
        halt: function () {
            this._shouldPropagate = !1
        },
        dispatch: function () {
            if (this.active && this._bindings) {
                var a, b = Array.prototype.slice.call(arguments), c = this._bindings.length;
                if (this.memorize && (this._prevParams = b), c) {
                    a = this._bindings.slice(), this._shouldPropagate = !0;
                    do c--; while (a[c] && this._shouldPropagate && a[c].execute(b) !== !1)
                }
            }
        },
        forget: function () {
            this._prevParams && (this._prevParams = null)
        },
        dispose: function () {
            this.removeAll(), this._bindings = null, this._prevParams && (this._prevParams = null)
        },
        toString: function () {
            return "[Phaser.Signal active:" + this.active + " numListeners:" + this.getNumListeners() + "]"
        }
    },Object.defineProperty(c.Signal.prototype, "boundDispatch", {
        get: function () {
            var a = this;
            return this._boundDispatch || (this._boundDispatch = function () {
                return a.dispatch.apply(a, arguments)
            })
        }
    }),c.Signal.prototype.constructor = c.Signal,c.SignalBinding = function (a, b, c, d, e, f) {
        this._listener = b, c && (this._isOnce = !0), null != d && (this.context = d), this._signal = a, e && (this._priority = e), f && f.length && (this._args = f)
    },c.SignalBinding.prototype = {
        context: null,
        _isOnce: !1,
        _priority: 0,
        _args: null,
        callCount: 0,
        active: !0,
        params: null,
        execute: function (a) {
            var b, c;
            return this.active && this._listener && (c = this.params ? this.params.concat(a) : a, this._args && (c = c.concat(this._args)), b = this._listener.apply(this.context, c), this.callCount++, this._isOnce && this.detach()), b
        },
        detach: function () {
            return this.isBound() ? this._signal.remove(this._listener, this.context) : null
        },
        isBound: function () {
            return !!this._signal && !!this._listener
        },
        isOnce: function () {
            return this._isOnce
        },
        getListener: function () {
            return this._listener
        },
        getSignal: function () {
            return this._signal
        },
        _destroy: function () {
            delete this._signal, delete this._listener, delete this.context
        },
        toString: function () {
            return "[Phaser.SignalBinding isOnce:" + this._isOnce + ", isBound:" + this.isBound() + ", active:" + this.active + "]"
        }
    },c.SignalBinding.prototype.constructor = c.SignalBinding,c.Filter = function (a, b, d) {
        this.game = a, this.type = c.WEBGL_FILTER, this.passes = [this], this.shaders = [], this.dirty = !0, this.padding = 0, this.prevPoint = new c.Point;
        var e = new Date;
        if (this.uniforms = {
            resolution: {type: "2f", value: {x: 256, y: 256}},
            time: {type: "1f", value: 0},
            mouse: {type: "2f", value: {x: 0, y: 0}},
            date: {
                type: "4fv",
                value: [e.getFullYear(), e.getMonth(), e.getDate(), 60 * e.getHours() * 60 + 60 * e.getMinutes() + e.getSeconds()]
            },
            sampleRate: {type: "1f", value: 44100},
            iChannel0: {type: "sampler2D", value: null, textureData: {repeat: !0}},
            iChannel1: {type: "sampler2D", value: null, textureData: {repeat: !0}},
            iChannel2: {type: "sampler2D", value: null, textureData: {repeat: !0}},
            iChannel3: {type: "sampler2D", value: null, textureData: {repeat: !0}}
        }, b) for (var f in b) this.uniforms[f] = b[f];
        this.fragmentSrc = d || ""
    },c.Filter.prototype = {
        init: function () {
        }, setResolution: function (a, b) {
            this.uniforms.resolution.value.x = a, this.uniforms.resolution.value.y = b
        }, update: function (a) {
            if ("undefined" != typeof a) {
                var b = a.x / this.game.width, c = 1 - a.y / this.game.height;
                b === this.prevPoint.x && c === this.prevPoint.y || (this.uniforms.mouse.value.x = b.toFixed(2), this.uniforms.mouse.value.y = c.toFixed(2), this.prevPoint.set(b, c))
            }
            this.uniforms.time.value = this.game.time.totalElapsedSeconds()
        }, addToWorld: function (a, b, c, d, e, f) {
            void 0 === e && (e = 0), void 0 === f && (f = 0), void 0 !== c && null !== c ? this.width = c : c = this.width, void 0 !== d && null !== d ? this.height = d : d = this.height;
            var g = this.game.add.image(a, b, "__default");
            return g.width = c, g.height = d, g.anchor.set(e, f), g.filters = [this], g
        }, destroy: function () {
            this.game = null
        }
    },c.Filter.prototype.constructor = c.Filter,Object.defineProperty(c.Filter.prototype, "width", {
        get: function () {
            return this.uniforms.resolution.value.x
        }, set: function (a) {
            this.uniforms.resolution.value.x = a
        }
    }),Object.defineProperty(c.Filter.prototype, "height", {
        get: function () {
            return this.uniforms.resolution.value.y
        }, set: function (a) {
            this.uniforms.resolution.value.y = a
        }
    }),c.Plugin = function (a, b) {
        void 0 === b && (b = null), this.game = a, this.parent = b, this.active = !1, this.visible = !1, this.hasPreUpdate = !1, this.hasUpdate = !1, this.hasPostUpdate = !1, this.hasRender = !1, this.hasPostRender = !1
    },c.Plugin.prototype = {
        preUpdate: function () {
        }, update: function () {
        }, render: function () {
        }, postRender: function () {
        }, destroy: function () {
            this.game = null, this.parent = null, this.active = !1, this.visible = !1
        }
    },c.Plugin.prototype.constructor = c.Plugin,c.PluginManager = function (a) {
        this.game = a, this.plugins = [], this._len = 0, this._i = 0
    },c.PluginManager.prototype = {
        add: function (a) {
            var b = Array.prototype.slice.call(arguments, 1), c = !1;
            return "function" == typeof a ? a = new a(this.game, this) : (a.game = this.game, a.parent = this), "function" == typeof a.preUpdate && (a.hasPreUpdate = !0, c = !0), "function" == typeof a.update && (a.hasUpdate = !0, c = !0), "function" == typeof a.postUpdate && (a.hasPostUpdate = !0, c = !0), "function" == typeof a.render && (a.hasRender = !0, c = !0), "function" == typeof a.postRender && (a.hasPostRender = !0, c = !0), c ? ((a.hasPreUpdate || a.hasUpdate || a.hasPostUpdate) && (a.active = !0), (a.hasRender || a.hasPostRender) && (a.visible = !0), this._len = this.plugins.push(a), "function" == typeof a.init && a.init.apply(a, b), a) : null
        }, remove: function (a, b) {
            for (void 0 === b && (b = !0), this._i = this._len; this._i--;) if (this.plugins[this._i] === a) return b && a.destroy(), this.plugins.splice(this._i, 1), void this._len--
        }, removeAll: function () {
            for (this._i = this._len; this._i--;) this.plugins[this._i].destroy();
            this.plugins.length = 0, this._len = 0
        }, preUpdate: function () {
            for (this._i = this._len; this._i--;) this.plugins[this._i].active && this.plugins[this._i].hasPreUpdate && this.plugins[this._i].preUpdate()
        }, update: function () {
            for (this._i = this._len; this._i--;) this.plugins[this._i].active && this.plugins[this._i].hasUpdate && this.plugins[this._i].update()
        }, postUpdate: function () {
            for (this._i = this._len; this._i--;) this.plugins[this._i].active && this.plugins[this._i].hasPostUpdate && this.plugins[this._i].postUpdate()
        }, render: function () {
            for (this._i = this._len; this._i--;) this.plugins[this._i].visible && this.plugins[this._i].hasRender && this.plugins[this._i].render()
        }, postRender: function () {
            for (this._i = this._len; this._i--;) this.plugins[this._i].visible && this.plugins[this._i].hasPostRender && this.plugins[this._i].postRender()
        }, destroy: function () {
            this.removeAll(), this.game = null
        }
    },c.PluginManager.prototype.constructor = c.PluginManager,c.Stage = function (a) {
        this.game = a, PIXI.DisplayObjectContainer.call(this), this.name = "_stage_root", this.disableVisibilityChange = !1, this.exists = !0, this.worldTransform = new PIXI.Matrix, this.stage = this, this.currentRenderOrderID = 0, this._hiddenVar = "hidden", this._onChange = null, this._bgColor = {
            r: 0,
            g: 0,
            b: 0,
            a: 0,
            color: 0,
            rgba: "#000000"
        }, this.game.transparent || (this._bgColor.a = 1), a.config && this.parseConfig(a.config)
    },c.Stage.prototype = Object.create(PIXI.DisplayObjectContainer.prototype),c.Stage.prototype.constructor = c.Stage,c.Stage.prototype.parseConfig = function (a) {
        a.disableVisibilityChange && (this.disableVisibilityChange = a.disableVisibilityChange), a.backgroundColor && this.setBackgroundColor(a.backgroundColor)
    },c.Stage.prototype.boot = function () {
        c.DOM.getOffset(this.game.canvas, this.offset), c.Canvas.setUserSelect(this.game.canvas, "none"), c.Canvas.setTouchAction(this.game.canvas, "none"), this.checkVisibility()
    },c.Stage.prototype.preUpdate = function () {
        this.currentRenderOrderID = 0;
        for (var a = 0; a < this.children.length; a++) this.children[a].preUpdate()
    },c.Stage.prototype.update = function () {
        for (var a = this.children.length; a--;) this.children[a].update()
    },c.Stage.prototype.postUpdate = function () {
        this.game.camera.update(), this.game.camera.target && (this.game.camera.target.postUpdate(), this.updateTransform(), this.game.camera.updateTarget());
        for (var a = 0; a < this.children.length; a++) this.children[a].postUpdate();
        this.updateTransform()
    },c.Stage.prototype.updateTransform = function () {
        this.worldAlpha = 1;
        for (var a = 0; a < this.children.length; a++) this.children[a].updateTransform()
    },c.Stage.prototype.checkVisibility = function () {
        void 0 !== document.hidden ? this._hiddenVar = "visibilitychange" : void 0 !== document.webkitHidden ? this._hiddenVar = "webkitvisibilitychange" : void 0 !== document.mozHidden ? this._hiddenVar = "mozvisibilitychange" : void 0 !== document.msHidden ? this._hiddenVar = "msvisibilitychange" : this._hiddenVar = null;
        var a = this;
        this._onChange = function (b) {
            return a.visibilityChange(b)
        }, this._hiddenVar && document.addEventListener(this._hiddenVar, this._onChange, !1), window.onblur = this._onChange, window.onfocus = this._onChange, window.onpagehide = this._onChange, window.onpageshow = this._onChange, this.game.device.cocoonJSApp && (CocoonJS.App.onSuspended.addEventListener(function () {
            c.Stage.prototype.visibilityChange.call(a, {type: "pause"})
        }), CocoonJS.App.onActivated.addEventListener(function () {
            c.Stage.prototype.visibilityChange.call(a, {type: "resume"})
        }))
    },c.Stage.prototype.visibilityChange = function (a) {
        return "pagehide" === a.type || "blur" === a.type || "pageshow" === a.type || "focus" === a.type ? void ("pagehide" === a.type || "blur" === a.type ? this.game.focusLoss(a) : "pageshow" !== a.type && "focus" !== a.type || this.game.focusGain(a)) : void (this.disableVisibilityChange || (document.hidden || document.mozHidden || document.msHidden || document.webkitHidden || "pause" === a.type ? this.game.gamePaused(a) : this.game.gameResumed(a)))
    },c.Stage.prototype.setBackgroundColor = function (a) {
        this.game.transparent || (c.Color.valueToColor(a, this._bgColor), c.Color.updateColor(this._bgColor), this._bgColor.r /= 255, this._bgColor.g /= 255, this._bgColor.b /= 255, this._bgColor.a = 1)
    },c.Stage.prototype.destroy = function () {
        this._hiddenVar && document.removeEventListener(this._hiddenVar, this._onChange, !1), window.onpagehide = null, window.onpageshow = null, window.onblur = null, window.onfocus = null
    },Object.defineProperty(c.Stage.prototype, "backgroundColor", {
        get: function () {
            return this._bgColor.color
        }, set: function (a) {
            this.setBackgroundColor(a)
        }
    }),Object.defineProperty(c.Stage.prototype, "smoothed", {
        get: function () {
            return PIXI.scaleModes.DEFAULT === PIXI.scaleModes.LINEAR
        }, set: function (a) {
            a ? PIXI.scaleModes.DEFAULT = PIXI.scaleModes.LINEAR : PIXI.scaleModes.DEFAULT = PIXI.scaleModes.NEAREST
        }
    }),c.Group = function (a, b, d, e, f, g) {
        void 0 === e && (e = !1), void 0 === f && (f = !1), void 0 === g && (g = c.Physics.ARCADE), this.game = a, void 0 === b && (b = a.world), this.name = d || "group", this.z = 0, PIXI.DisplayObjectContainer.call(this), e ? (this.game.stage.addChild(this), this.z = this.game.stage.children.length) : b && (b.addChild(this), this.z = b.children.length), this.type = c.GROUP, this.physicsType = c.GROUP, this.alive = !0, this.exists = !0, this.ignoreDestroy = !1, this.pendingDestroy = !1, this.classType = c.Sprite, this.cursor = null, this.inputEnableChildren = !1, this.onChildInputDown = new c.Signal, this.onChildInputUp = new c.Signal, this.onChildInputOver = new c.Signal, this.onChildInputOut = new c.Signal, this.enableBody = f, this.enableBodyDebug = !1, this.physicsBodyType = g, this.physicsSortDirection = null, this.onDestroy = new c.Signal, this.cursorIndex = 0, this.fixedToCamera = !1, this.cameraOffset = new c.Point, this.hash = [], this._sortProperty = "z"
    },c.Group.prototype = Object.create(PIXI.DisplayObjectContainer.prototype),c.Group.prototype.constructor = c.Group,c.Group.RETURN_NONE = 0,c.Group.RETURN_TOTAL = 1,c.Group.RETURN_CHILD = 2,c.Group.RETURN_ALL = 3,c.Group.SORT_ASCENDING = -1,c.Group.SORT_DESCENDING = 1,c.Group.prototype.add = function (a, b, c) {
        return void 0 === b && (b = !1), a.parent === this ? a : (a.body && a.parent && a.parent.hash && a.parent.removeFromHash(a), void 0 === c ? (a.z = this.children.length, this.addChild(a)) : (this.addChildAt(a, c), this.updateZ()), this.enableBody && a.hasOwnProperty("body") && null === a.body ? this.game.physics.enable(a, this.physicsBodyType) : a.body && this.addToHash(a), !this.inputEnableChildren || a.input && !a.inputEnabled || (a.inputEnabled = !0), !b && a.events && a.events.onAddedToGroup$dispatch(a, this), null === this.cursor && (this.cursor = a), a)
    },c.Group.prototype.addAt = function (a, b, c) {
        this.add(a, c, b)
    },c.Group.prototype.addToHash = function (a) {
        if (a.parent === this) {
            var b = this.hash.indexOf(a);
            if (b === -1) return this.hash.push(a), !0
        }
        return !1
    },c.Group.prototype.removeFromHash = function (a) {
        if (a) {
            var b = this.hash.indexOf(a);
            if (b !== -1) return this.hash.splice(b, 1), !0
        }
        return !1
    },c.Group.prototype.addMultiple = function (a, b) {
        if (a instanceof c.Group) a.moveAll(this, b); else if (Array.isArray(a)) for (var d = 0; d < a.length; d++) this.add(a[d], b);
        return a
    },c.Group.prototype.getAt = function (a) {
        return a < 0 || a >= this.children.length ? -1 : this.getChildAt(a)
    },c.Group.prototype.create = function (a, b, c, d, e, f) {
        void 0 === e && (e = !0);
        var g = new this.classType(this.game, a, b, c, d);
        return g.exists = e, g.visible = e, g.alive = e, this.add(g, !1, f)
    },c.Group.prototype.createMultiple = function (a, b, c, d) {
        void 0 === c && (c = 0), void 0 === d && (d = !1), Array.isArray(b) || (b = [b]), Array.isArray(c) || (c = [c]);
        var e = this, f = [];
        return b.forEach(function (b) {
            c.forEach(function (c) {
                for (var g = 0; g < a; g++) f.push(e.create(0, 0, b, c, d))
            })
        }), f
    },c.Group.prototype.updateZ = function () {
        for (var a = this.children.length; a--;) this.children[a].z = a
    },c.Group.prototype.align = function (a, b, d, e, f, g) {
        if (void 0 === f && (f = c.TOP_LEFT), void 0 === g && (g = 0), 0 === this.children.length || g > this.children.length || a === -1 && b === -1) return !1;
        for (var h = new c.Rectangle(0, 0, d, e), i = a * d, j = b * e, k = g; k < this.children.length; k++) {
            var l = this.children[k];
            if (l.alignIn) if (l.alignIn(h, f), a === -1) h.y += e, h.y === j && (h.x += d, h.y = 0); else if (b === -1) h.x += d, h.x === i && (h.x = 0, h.y += e); else if (h.x += d, h.x === i && (h.x = 0, h.y += e, h.y === j)) return !0
        }
        return !0
    };
    c.Group.prototype.resetCursor = function (a) {
        if (void 0 === a && (a = 0), a > this.children.length - 1 && (a = 0), this.cursor) return this.cursorIndex = a, this.cursor = this.children[this.cursorIndex], this.cursor
    };
    c.Group.prototype.next = function () {
        if (this.cursor) return this.cursorIndex >= this.children.length - 1 ? this.cursorIndex = 0 : this.cursorIndex++, this.cursor = this.children[this.cursorIndex], this.cursor
    }, c.Group.prototype.previous = function () {
        if (this.cursor) return 0 === this.cursorIndex ? this.cursorIndex = this.children.length - 1 : this.cursorIndex--, this.cursor = this.children[this.cursorIndex], this.cursor
    }, c.Group.prototype.swap = function (a, b) {
        this.swapChildren(a, b), this.updateZ()
    }, c.Group.prototype.bringToTop = function (a) {
        return a.parent === this && this.getIndex(a) < this.children.length && (this.remove(a, !1, !0), this.add(a, !0)), a
    }, c.Group.prototype.sendToBack = function (a) {
        return a.parent === this && this.getIndex(a) > 0 && (this.remove(a, !1, !0), this.addAt(a, 0, !0)), a
    }, c.Group.prototype.moveUp = function (a) {
        if (a.parent === this && this.getIndex(a) < this.children.length - 1) {
            var b = this.getIndex(a), c = this.getAt(b + 1);
            c && this.swap(a, c)
        }
        return a
    }, c.Group.prototype.moveDown = function (a) {
        if (a.parent === this && this.getIndex(a) > 0) {
            var b = this.getIndex(a), c = this.getAt(b - 1);
            c && this.swap(a, c)
        }
        return a
    }, c.Group.prototype.xy = function (a, b, c) {
        return a < 0 || a > this.children.length ? -1 : (this.getChildAt(a).x = b, void (this.getChildAt(a).y = c))
    }, c.Group.prototype.reverse = function () {
        this.children.reverse(), this.updateZ()
    }, c.Group.prototype.getIndex = function (a) {
        return this.children.indexOf(a)
    }, c.Group.prototype.getByName = function (a) {
        for (var b = 0; b < this.children.length; b++) if (this.children[b].name === a) return this.children[b];
        return null
    }, c.Group.prototype.replace = function (a, b) {
        var d = this.getIndex(a);
        if (d !== -1) return b.parent && (b.parent instanceof c.Group ? b.parent.remove(b) : b.parent.removeChild(b)),
            this.remove(a), this.addAt(b, d), a
    }, c.Group.prototype.hasProperty = function (a, b) {
        var c = b.length;
        return 1 === c && b[0] in a || (2 === c && b[0] in a && b[1] in a[b[0]] || (3 === c && b[0] in a && b[1] in a[b[0]] && b[2] in a[b[0]][b[1]] || 4 === c && b[0] in a && b[1] in a[b[0]] && b[2] in a[b[0]][b[1]] && b[3] in a[b[0]][b[1]][b[2]]))
    }, c.Group.prototype.setProperty = function (a, b, c, d, e) {
        if (void 0 === e && (e = !1), d = d || 0, !this.hasProperty(a, b) && (!e || d > 0)) return !1;
        var f = b.length;
        return 1 === f ? 0 === d ? a[b[0]] = c : 1 === d ? a[b[0]] += c : 2 === d ? a[b[0]] -= c : 3 === d ? a[b[0]] *= c : 4 === d && (a[b[0]] /= c) : 2 === f ? 0 === d ? a[b[0]][b[1]] = c : 1 === d ? a[b[0]][b[1]] += c : 2 === d ? a[b[0]][b[1]] -= c : 3 === d ? a[b[0]][b[1]] *= c : 4 === d && (a[b[0]][b[1]] /= c) : 3 === f ? 0 === d ? a[b[0]][b[1]][b[2]] = c : 1 === d ? a[b[0]][b[1]][b[2]] += c : 2 === d ? a[b[0]][b[1]][b[2]] -= c : 3 === d ? a[b[0]][b[1]][b[2]] *= c : 4 === d && (a[b[0]][b[1]][b[2]] /= c) : 4 === f && (0 === d ? a[b[0]][b[1]][b[2]][b[3]] = c : 1 === d ? a[b[0]][b[1]][b[2]][b[3]] += c : 2 === d ? a[b[0]][b[1]][b[2]][b[3]] -= c : 3 === d ? a[b[0]][b[1]][b[2]][b[3]] *= c : 4 === d && (a[b[0]][b[1]][b[2]][b[3]] /= c)), !0
    }, c.Group.prototype.checkProperty = function (a, b, d, e) {
        return void 0 === e && (e = !1), !(!c.Utils.getProperty(a, b) && e) && c.Utils.getProperty(a, b) === d
    }, c.Group.prototype.set = function (a, b, c, d, e, f, g) {
        if (void 0 === g && (g = !1), b = b.split("."), void 0 === d && (d = !1), void 0 === e && (e = !1), (d === !1 || d && a.alive) && (e === !1 || e && a.visible)) return this.setProperty(a, b, c, f, g)
    }, c.Group.prototype.setAll = function (a, b, c, d, e, f) {
        void 0 === c && (c = !1), void 0 === d && (d = !1), void 0 === f && (f = !1), a = a.split("."), e = e || 0;
        for (var g = 0; g < this.children.length; g++) (!c || c && this.children[g].alive) && (!d || d && this.children[g].visible) && this.setProperty(this.children[g], a, b, e, f)
    }, c.Group.prototype.setAllChildren = function (a, b, d, e, f, g) {
        void 0 === d && (d = !1), void 0 === e && (e = !1), void 0 === g && (g = !1), f = f || 0;
        for (var h = 0; h < this.children.length; h++) (!d || d && this.children[h].alive) && (!e || e && this.children[h].visible) && (this.children[h] instanceof c.Group ? this.children[h].setAllChildren(a, b, d, e, f, g) : this.setProperty(this.children[h], a.split("."), b, f, g))
    }, c.Group.prototype.checkAll = function (a, b, c, d, e) {
        void 0 === c && (c = !1), void 0 === d && (d = !1), void 0 === e && (e = !1);
        for (var f = 0; f < this.children.length; f++) if ((!c || c && this.children[f].alive) && (!d || d && this.children[f].visible) && !this.checkProperty(this.children[f], a, b, e)) return !1;
        return !0
    }, c.Group.prototype.addAll = function (a, b, c, d) {
        this.setAll(a, b, c, d, 1)
    }, c.Group.prototype.subAll = function (a, b, c, d) {
        this.setAll(a, b, c, d, 2)
    }, c.Group.prototype.multiplyAll = function (a, b, c, d) {
        this.setAll(a, b, c, d, 3)
    }, c.Group.prototype.divideAll = function (a, b, c, d) {
        this.setAll(a, b, c, d, 4)
    }, c.Group.prototype.callAllExists = function (a, b) {
        var c;
        if (arguments.length > 2) {
            c = [];
            for (var d = 2; d < arguments.length; d++) c.push(arguments[d])
        }
        for (var d = 0; d < this.children.length; d++) this.children[d].exists === b && this.children[d][a] && this.children[d][a].apply(this.children[d], c)
    }, c.Group.prototype.callbackFromArray = function (a, b, c) {
        if (1 === c) {
            if (a[b[0]]) return a[b[0]]
        } else if (2 === c) {
            if (a[b[0]][b[1]]) return a[b[0]][b[1]]
        } else if (3 === c) {
            if (a[b[0]][b[1]][b[2]]) return a[b[0]][b[1]][b[2]]
        } else if (4 === c) {
            if (a[b[0]][b[1]][b[2]][b[3]]) return a[b[0]][b[1]][b[2]][b[3]]
        } else if (a[b]) return a[b];
        return !1
    }, c.Group.prototype.callAll = function (a, b) {
        if (void 0 !== a) {
            a = a.split(".");
            var c = a.length;
            if (void 0 === b || null === b || "" === b) b = null; else if ("string" == typeof b) {
                b = b.split(".");
                var d = b.length
            }
            var e;
            if (arguments.length > 2) {
                e = [];
                for (var f = 2; f < arguments.length; f++) e.push(arguments[f])
            }
            for (var g = null, h = null, f = 0; f < this.children.length; f++) g = this.callbackFromArray(this.children[f], a, c), b && g ? (h = this.callbackFromArray(this.children[f], b, d), g && g.apply(h, e)) : g && g.apply(this.children[f], e)
        }
    }, c.Group.prototype.preUpdate = function () {
        if (this.pendingDestroy) return this.destroy(), !1;
        if (!this.exists || !this.parent.exists) return this.renderOrderID = -1, !1;
        for (var a = 0; a < this.children.length; a++) this.children[a].preUpdate();
        return !0
    }, c.Group.prototype.update = function () {
        for (var a = this.children.length; a--;) this.children[a].update()
    }, c.Group.prototype.postUpdate = function () {
        this.fixedToCamera && (this.x = this.game.camera.view.x + this.cameraOffset.x, this.y = this.game.camera.view.y + this.cameraOffset.y);
        for (var a = 0; a < this.children.length; a++) this.children[a].postUpdate()
    }, c.Group.prototype.filter = function (a, b) {
        for (var d = -1, e = this.children.length, f = []; ++d < e;) {
            var g = this.children[d];
            (!b || b && g.exists) && a(g, d, this.children) && f.push(g)
        }
        return new c.ArraySet(f)
    }, c.Group.prototype.forEach = function (a, b, c) {
        if (void 0 === c && (c = !1), arguments.length <= 3) for (var d = 0; d < this.children.length; d++) (!c || c && this.children[d].exists) && a.call(b, this.children[d]); else {
            for (var e = [null], d = 3; d < arguments.length; d++) e.push(arguments[d]);
            for (var d = 0; d < this.children.length; d++) (!c || c && this.children[d].exists) && (e[0] = this.children[d], a.apply(b, e))
        }
    }, c.Group.prototype.forEachExists = function (a, b) {
        var d;
        if (arguments.length > 2) {
            d = [null];
            for (var e = 2; e < arguments.length; e++) d.push(arguments[e])
        }
        this.iterate("exists", !0, c.Group.RETURN_TOTAL, a, b, d)
    }, c.Group.prototype.forEachAlive = function (a, b) {
        var d;
        if (arguments.length > 2) {
            d = [null];
            for (var e = 2; e < arguments.length; e++) d.push(arguments[e])
        }
        this.iterate("alive", !0, c.Group.RETURN_TOTAL, a, b, d)
    }, c.Group.prototype.forEachDead = function (a, b) {
        var d;
        if (arguments.length > 2) {
            d = [null];
            for (var e = 2; e < arguments.length; e++) d.push(arguments[e])
        }
        this.iterate("alive", !1, c.Group.RETURN_TOTAL, a, b, d)
    }, c.Group.prototype.sort = function (a, b) {
        this.children.length < 2 || (void 0 === a && (a = "z"), void 0 === b && (b = c.Group.SORT_ASCENDING), this._sortProperty = a, b === c.Group.SORT_ASCENDING ? this.children.sort(this.ascendingSortHandler.bind(this)) : this.children.sort(this.descendingSortHandler.bind(this)), this.updateZ())
    }, c.Group.prototype.customSort = function (a, b) {
        this.children.length < 2 || (this.children.sort(a.bind(b)), this.updateZ())
    }, c.Group.prototype.ascendingSortHandler = function (a, b) {
        return a[this._sortProperty] < b[this._sortProperty] ? -1 : a[this._sortProperty] > b[this._sortProperty] ? 1 : a.z < b.z ? -1 : 1
    }, c.Group.prototype.descendingSortHandler = function (a, b) {
        return a[this._sortProperty] < b[this._sortProperty] ? 1 : a[this._sortProperty] > b[this._sortProperty] ? -1 : 0
    }, c.Group.prototype.iterate = function (a, b, d, e, f, g) {
        if (0 === this.children.length) {
            if (d === c.Group.RETURN_TOTAL) return 0;
            if (d === c.Group.RETURN_ALL) return []
        }
        var h = 0;
        if (d === c.Group.RETURN_ALL) var i = [];
        for (var j = 0; j < this.children.length; j++) if (this.children[j][a] === b) {
            if (h++, e && (g ? (g[0] = this.children[j], e.apply(f, g)) : e.call(f, this.children[j])), d === c.Group.RETURN_CHILD) return this.children[j];
            d === c.Group.RETURN_ALL && i.push(this.children[j])
        }
        return d === c.Group.RETURN_TOTAL ? h : d === c.Group.RETURN_ALL ? i : null
    }, c.Group.prototype.getFirstExists = function (a, b, d, e, f, g) {
        void 0 === b && (b = !1), "boolean" != typeof a && (a = !0);
        var h = this.iterate("exists", a, c.Group.RETURN_CHILD);
        return null === h && b ? this.create(d, e, f, g) : this.resetChild(h, d, e, f, g)
    }, c.Group.prototype.getFirstAlive = function (a, b, d, e, f) {
        void 0 === a && (a = !1);
        var g = this.iterate("alive", !0, c.Group.RETURN_CHILD);
        return null === g && a ? this.create(b, d, e, f) : this.resetChild(g, b, d, e, f)
    }, c.Group.prototype.getFirstDead = function (a, b, d, e, f) {
        void 0 === a && (a = !1);
        var g = this.iterate("alive", !1, c.Group.RETURN_CHILD);
        return null === g && a ? this.create(b, d, e, f) : this.resetChild(g, b, d, e, f)
    }, c.Group.prototype.resetChild = function (a, b, c, d, e) {
        return null === a ? null : (void 0 === b && (b = null), void 0 === c && (c = null), null !== b && null !== c && a.reset(b, c), void 0 !== d && a.loadTexture(d, e), a)
    }, c.Group.prototype.getTop = function () {
        if (this.children.length > 0) return this.children[this.children.length - 1]
    }, c.Group.prototype.getBottom = function () {
        if (this.children.length > 0) return this.children[0]
    }, c.Group.prototype.getClosestTo = function (a, b, d) {
        for (var e = Number.MAX_VALUE, f = 0, g = null, h = 0; h < this.children.length; h++) {
            var i = this.children[h];
            i.exists && (f = Math.abs(c.Point.distance(a, i)), f < e && (!b || b.call(d, i, f)) && (e = f, g = i))
        }
        return g
    }, c.Group.prototype.getFurthestFrom = function (a, b, d) {
        for (var e = 0, f = 0, g = null, h = 0; h < this.children.length; h++) {
            var i = this.children[h];
            i.exists && (f = Math.abs(c.Point.distance(a, i)), f > e && (!b || b.call(d, i, f)) && (e = f, g = i))
        }
        return g
    }, c.Group.prototype.countLiving = function () {
        return this.iterate("alive", !0, c.Group.RETURN_TOTAL)
    }, c.Group.prototype.countDead = function () {
        return this.iterate("alive", !1, c.Group.RETURN_TOTAL)
    }, c.Group.prototype.getRandom = function (a, b) {
        return void 0 === a && (a = 0), void 0 === b && (b = this.children.length), 0 === b ? null : c.ArrayUtils.getRandomItem(this.children, a, b)
    }, c.Group.prototype.getRandomExists = function (a, b) {
        var c = this.getAll("exists", !0, a, b);
        return this.game.rnd.pick(c)
    }, c.Group.prototype.getAll = function (a, b, c, d) {
        void 0 === c && (c = 0), void 0 === d && (d = this.children.length);
        for (var e = [], f = c; f < d; f++) {
            var g = this.children[f];
            a && g[a] === b && e.push(g)
        }
        return e
    }, c.Group.prototype.remove = function (a, b, c) {
        if (void 0 === b && (b = !1), void 0 === c && (c = !1), 0 === this.children.length || this.children.indexOf(a) === -1) return !1;
        c || !a.events || a.destroyPhase || a.events.onRemovedFromGroup$dispatch(a, this);
        var d = this.removeChild(a);
        return this.removeFromHash(a), this.updateZ(), this.cursor === a && this.next(), b && d && d.destroy(!0), !0
    }, c.Group.prototype.moveAll = function (a, b) {
        if (void 0 === b && (b = !1), this.children.length > 0 && a instanceof c.Group) {
            do a.add(this.children[0], b); while (this.children.length > 0);
            this.hash = [], this.cursor = null
        }
        return a
    }, c.Group.prototype.removeAll = function (a, b, c) {
        if (void 0 === a && (a = !1), void 0 === b && (b = !1), void 0 === c && (c = !1), 0 !== this.children.length) {
            do {
                !b && this.children[0].events && this.children[0].events.onRemovedFromGroup$dispatch(this.children[0], this);
                var d = this.removeChild(this.children[0]);
                this.removeFromHash(d), a && d && d.destroy(!0, c)
            } while (this.children.length > 0);
            this.hash = [], this.cursor = null
        }
    }, c.Group.prototype.removeBetween = function (a, b, c, d) {
        if (void 0 === b && (b = this.children.length - 1), void 0 === c && (c = !1), void 0 === d && (d = !1), 0 !== this.children.length) {
            if (a > b || a < 0 || b > this.children.length) return !1;
            for (var e = b; e >= a;) {
                !d && this.children[e].events && this.children[e].events.onRemovedFromGroup$dispatch(this.children[e], this);
                var f = this.removeChild(this.children[e]);
                this.removeFromHash(f), c && f && f.destroy(!0), this.cursor === this.children[e] && (this.cursor = null), e--
            }
            this.updateZ()
        }
    }, c.Group.prototype.destroy = function (a, b) {
        null === this.game || this.ignoreDestroy || (void 0 === a && (a = !0), void 0 === b && (b = !1), this.onDestroy.dispatch(this, a, b), this.removeAll(a), this.cursor = null, this.filters = null, this.pendingDestroy = !1, b || (this.parent && this.parent.removeChild(this), this.game = null, this.exists = !1))
    }, Object.defineProperty(c.Group.prototype, "total", {
        get: function () {
            return this.iterate("exists", !0, c.Group.RETURN_TOTAL)
        }
    }), Object.defineProperty(c.Group.prototype, "length", {
        get: function () {
            return this.children.length
        }
    }), Object.defineProperty(c.Group.prototype, "angle", {
        get: function () {
            return c.Math.radToDeg(this.rotation)
        }, set: function (a) {
            this.rotation = c.Math.degToRad(a)
        }
    }), Object.defineProperty(c.Group.prototype, "centerX", {
        get: function () {
            return this.getBounds(this.parent).centerX
        }, set: function (a) {
            var b = this.getBounds(this.parent), c = this.x - b.x;
            this.x = a + c - b.halfWidth
        }
    }), Object.defineProperty(c.Group.prototype, "centerY", {
        get: function () {
            return this.getBounds(this.parent).centerY
        }, set: function (a) {
            var b = this.getBounds(this.parent), c = this.y - b.y;
            this.y = a + c - b.halfHeight
        }
    }), Object.defineProperty(c.Group.prototype, "left", {
        get: function () {
            return this.getBounds(this.parent).left
        }, set: function (a) {
            var b = this.getBounds(this.parent), c = this.x - b.x;
            this.x = a + c
        }
    }), Object.defineProperty(c.Group.prototype, "right", {
        get: function () {
            return this.getBounds(this.parent).right
        }, set: function (a) {
            var b = this.getBounds(this.parent), c = this.x - b.x;
            this.x = a + c - b.width
        }
    }), Object.defineProperty(c.Group.prototype, "top", {
        get: function () {
            return this.getBounds(this.parent).top
        }, set: function (a) {
            var b = this.getBounds(this.parent), c = this.y - b.y;
            this.y = a + c
        }
    }), Object.defineProperty(c.Group.prototype, "bottom", {
        get: function () {
            return this.getBounds(this.parent).bottom
        }, set: function (a) {
            var b = this.getBounds(this.parent), c = this.y - b.y;
            this.y = a + c - b.height
        }
    }), c.World = function (a) {
        c.Group.call(this, a, null, "__world", !1), this.bounds = new c.Rectangle(0, 0, a.width, a.height), this.camera = null, this._definedSize = !1, this._width = a.width, this._height = a.height, this.game.state.onStateChange.add(this.stateChange, this)
    }, c.World.prototype = Object.create(c.Group.prototype), c.World.prototype.constructor = c.World, c.World.prototype.boot = function () {
        this.camera = new c.Camera(this.game, 0, 0, 0, this.game.width, this.game.height), this.game.stage.addChild(this), this.camera.boot()
    }, c.World.prototype.stateChange = function () {
        this.x = 0, this.y = 0, this.camera.reset()
    }, c.World.prototype.setBounds = function (a, b, c, d) {
        this._definedSize = !0, this._width = c, this._height = d, this.bounds.setTo(a, b, c, d), this.x = a, this.y = b, this.camera.bounds && this.camera.bounds.setTo(a, b, Math.max(c, this.game.width), Math.max(d, this.game.height)), this.game.physics.setBoundsToWorld()
    }, c.World.prototype.resize = function (a, b) {
        this._definedSize && (a < this._width && (a = this._width), b < this._height && (b = this._height)), this.bounds.width = a, this.bounds.height = b, this.game.camera.setBoundsToWorld(), this.game.physics.setBoundsToWorld()
    }, c.World.prototype.shutdown = function () {
        this.destroy(!0, !0)
    }, c.World.prototype.wrap = function (a, b, c, d, e) {
        void 0 === b && (b = 0), void 0 === c && (c = !1), void 0 === d && (d = !0), void 0 === e && (e = !0), c ? (a.getBounds(), d && (a.x + a._currentBounds.width < this.bounds.x ? a.x = this.bounds.right : a.x > this.bounds.right && (a.x = this.bounds.left)), e && (a.y + a._currentBounds.height < this.bounds.top ? a.y = this.bounds.bottom : a.y > this.bounds.bottom && (a.y = this.bounds.top))) : (d && a.x + b < this.bounds.x ? a.x = this.bounds.right + b : d && a.x - b > this.bounds.right && (a.x = this.bounds.left - b), e && a.y + b < this.bounds.top ? a.y = this.bounds.bottom + b : e && a.y - b > this.bounds.bottom && (a.y = this.bounds.top - b))
    }, Object.defineProperty(c.World.prototype, "width", {
        get: function () {
            return this.bounds.width
        }, set: function (a) {
            a < this.game.width && (a = this.game.width), this.bounds.width = a, this._width = a, this._definedSize = !0
        }
    }), Object.defineProperty(c.World.prototype, "height", {
        get: function () {
            return this.bounds.height
        }, set: function (a) {
            a < this.game.height && (a = this.game.height), this.bounds.height = a, this._height = a, this._definedSize = !0
        }
    }), Object.defineProperty(c.World.prototype, "centerX", {
        get: function () {
            return this.bounds.halfWidth + this.bounds.x
        }
    }), Object.defineProperty(c.World.prototype, "centerY", {
        get: function () {
            return this.bounds.halfHeight + this.bounds.y
        }
    }), Object.defineProperty(c.World.prototype, "randomX", {
        get: function () {
            return this.bounds.x < 0 ? this.game.rnd.between(this.bounds.x, this.bounds.width - Math.abs(this.bounds.x)) : this.game.rnd.between(this.bounds.x, this.bounds.width)
        }
    }), Object.defineProperty(c.World.prototype, "randomY", {
        get: function () {
            return this.bounds.y < 0 ? this.game.rnd.between(this.bounds.y, this.bounds.height - Math.abs(this.bounds.y)) : this.game.rnd.between(this.bounds.y, this.bounds.height)
        }
    }), c.Game = function (a, b, d, e, f, g, h, i) {
        return this.id = c.GAMES.push(this) - 1, this.config = null, this.physicsConfig = i, this.parent = "", this.width = 800, this.height = 600, this.resolution = 1, this._width = 800, this._height = 600, this.transparent = !1, this.antialias = !0, this.preserveDrawingBuffer = !1, this.clearBeforeRender = !0, this.renderer = null, this.renderType = c.AUTO, this.state = null, this.isBooted = !1, this.isRunning = !1, this.raf = null, this.add = null, this.make = null, this.cache = null, this.input = null, this.load = null, this.math = null, this.net = null, this.scale = null, this.sound = null, this.stage = null, this.time = null, this.tweens = null, this.world = null, this.physics = null, this.plugins = null, this.rnd = null, this.device = c.Device, this.camera = null, this.canvas = null, this.context = null, this.debug = null, this.particles = null, this.create = null, this.lockRender = !1, this.stepping = !1, this.pendingStep = !1, this.stepCount = 0, this.onPause = null, this.onResume = null, this.onBlur = null, this.onFocus = null, this._paused = !1, this._codePaused = !1, this.currentUpdateID = 0, this.updatesThisFrame = 1, this._deltaTime = 0, this._lastCount = 0, this._spiraling = 0, this._kickstart = !0, this.fpsProblemNotifier = new c.Signal, this.forceSingleUpdate = !0, this._nextFpsNotification = 0, 1 === arguments.length && "object" == typeof arguments[0] ? this.parseConfig(arguments[0]) : (this.config = {enableDebug: !0}, "undefined" != typeof a && (this._width = a), "undefined" != typeof b && (this._height = b), "undefined" != typeof d && (this.renderType = d), "undefined" != typeof e && (this.parent = e), "undefined" != typeof g && (this.transparent = g), "undefined" != typeof h && (this.antialias = h), this.rnd = new c.RandomDataGenerator([(Date.now() * Math.random()).toString()]), this.state = new c.StateManager(this, f)), this.device.whenReady(this.boot, this), this
    }, c.Game.prototype = {
        parseConfig: function (a) {
            this.config = a, void 0 === a.enableDebug && (this.config.enableDebug = !0), a.width && (this._width = a.width), a.height && (this._height = a.height), a.renderer && (this.renderType = a.renderer), a.parent && (this.parent = a.parent), void 0 !== a.transparent && (this.transparent = a.transparent), void 0 !== a.antialias && (this.antialias = a.antialias), a.resolution && (this.resolution = a.resolution), void 0 !== a.preserveDrawingBuffer && (this.preserveDrawingBuffer = a.preserveDrawingBuffer), a.physicsConfig && (this.physicsConfig = a.physicsConfig);
            var b = [(Date.now() * Math.random()).toString()];
            a.seed && (b = a.seed), this.rnd = new c.RandomDataGenerator(b);
            var d = null;
            a.state && (d = a.state), this.state = new c.StateManager(this, d)
        }, boot: function () {
            this.isBooted || (this.onPause = new c.Signal, this.onResume = new c.Signal, this.onBlur = new c.Signal, this.onFocus = new c.Signal, this.isBooted = !0, PIXI.game = this, this.math = c.Math, this.scale = new c.ScaleManager(this, this._width, this._height), this.stage = new c.Stage(this), this.setUpRenderer(), this.world = new c.World(this), this.add = new c.GameObjectFactory(this), this.make = new c.GameObjectCreator(this), this.cache = new c.Cache(this), this.load = new c.Loader(this), this.time = new c.Time(this), this.tweens = new c.TweenManager(this), this.input = new c.Input(this), this.sound = new c.SoundManager(this), this.physics = new c.Physics(this, this.physicsConfig), this.particles = new c.Particles(this), this.create = new c.Create(this), this.plugins = new c.PluginManager(this), this.net = new c.Net(this), this.time.boot(), this.stage.boot(), this.world.boot(), this.scale.boot(), this.input.boot(), this.sound.boot(), this.state.boot(), this.config.enableDebug ? (this.debug = new c.Utils.Debug(this), this.debug.boot()) : this.debug = {
                preUpdate: function () {
                }, update: function () {
                }, reset: function () {
                }
            }, this.showDebugHeader(), this.isRunning = !0, this.config && this.config.forceSetTimeOut ? this.raf = new c.RequestAnimationFrame(this, this.config.forceSetTimeOut) : this.raf = new c.RequestAnimationFrame(this, (!1)), this._kickstart = !0, window.focus && (!window.PhaserGlobal || window.PhaserGlobal && !window.PhaserGlobal.stopFocus) && window.focus(), this.raf.start())
        }, showDebugHeader: function () {
            if (!window.PhaserGlobal || !window.PhaserGlobal.hideBanner) {
                var a = c.VERSION, b = "Canvas", d = "HTML Audio", e = 1;
                if (this.renderType === c.WEBGL ? (b = "WebGL", e++) : this.renderType === c.HEADLESS && (b = "Headless"), this.device.webAudio && (d = "WebAudio", e++), this.device.chrome) {
                    for (var f = ["%c %c %c Phaser v" + a + " | Pixi.js | " + b + " | " + d + "  %c %c %c http://phaser.io %c♥%c♥%c♥", "background: #fb8cb3", "background: #d44a52", "color: #ffffff; background: #871905;", "background: #d44a52", "background: #fb8cb3", "background: #ffffff"], g = 0; g < 3; g++) g < e ? f.push("color: #ff2424; background: #fff") : f.push("color: #959595; background: #fff");
                    console.log.apply(console, f)
                } else window.console && console.log("Phaser v" + a + " | Pixi.js " + PIXI.VERSION + " | " + b + " | " + d + " | http://phaser.io")
            }
        }, setUpRenderer: function () {
            if (this.config.canvas ? this.canvas = this.config.canvas : this.canvas = c.Canvas.create(this, this.width, this.height, this.config.canvasID, !0), this.config.canvasStyle ? this.canvas.style = this.config.canvasStyle : this.canvas.style["-webkit-full-screen"] = "width: 100%; height: 100%", this.renderType === c.HEADLESS || this.renderType === c.CANVAS || this.renderType === c.AUTO && !this.device.webGL) {
                if (!this.device.canvas) throw new Error("Phaser.Game - Cannot create Canvas or WebGL context, aborting.");
                this.renderType = c.CANVAS, this.renderer = new PIXI.CanvasRenderer(this), this.context = this.renderer.context
            } else this.renderType = c.WEBGL, this.renderer = new PIXI.WebGLRenderer(this), this.context = null, this.canvas.addEventListener("webglcontextlost", this.contextLost.bind(this), !1), this.canvas.addEventListener("webglcontextrestored", this.contextRestored.bind(this), !1);
            this.device.cocoonJS && (this.canvas.screencanvas = this.renderType === c.CANVAS), this.renderType !== c.HEADLESS && (this.stage.smoothed = this.antialias, c.Canvas.addToDOM(this.canvas, this.parent, !1), c.Canvas.setTouchAction(this.canvas))
        }, contextLost: function (a) {
            a.preventDefault(), this.renderer.contextLost = !0
        }, contextRestored: function () {
            this.renderer.initContext(), this.cache.clearGLTextures(), this.renderer.contextLost = !1
        }, update: function (a) {
            if (this.time.update(a), this._kickstart) return this.updateLogic(this.time.desiredFpsMult), this.updateRender(this.time.slowMotion * this.time.desiredFps), void (this._kickstart = !1);
            if (this._spiraling > 1 && !this.forceSingleUpdate) this.time.time > this._nextFpsNotification && (this._nextFpsNotification = this.time.time + 1e4, this.fpsProblemNotifier.dispatch()), this._deltaTime = 0, this._spiraling = 0, this.updateRender(this.time.slowMotion * this.time.desiredFps); else {
                var b = 1e3 * this.time.slowMotion / this.time.desiredFps;
                this._deltaTime += Math.max(Math.min(3 * b, this.time.elapsed), 0);
                var c = 0;
                for (this.updatesThisFrame = Math.floor(this._deltaTime / b), this.forceSingleUpdate && (this.updatesThisFrame = Math.min(1, this.updatesThisFrame)); this._deltaTime >= b && (this._deltaTime -= b, this.currentUpdateID = c, this.updateLogic(this.time.desiredFpsMult), c++, !this.forceSingleUpdate || 1 !== c);) this.time.refresh();
                c > this._lastCount ? this._spiraling++ : c < this._lastCount && (this._spiraling = 0), this._lastCount = c, this.updateRender(this._deltaTime / b)
            }
        }, updateLogic: function (a) {
            this._paused || this.pendingStep ? (this.scale.pauseUpdate(), this.state.pauseUpdate(), this.debug.preUpdate()) : (this.stepping && (this.pendingStep = !0), this.scale.preUpdate(), this.debug.preUpdate(), this.camera.preUpdate(), this.physics.preUpdate(), this.state.preUpdate(a), this.plugins.preUpdate(a), this.stage.preUpdate(), this.state.update(), this.stage.update(), this.tweens.update(), this.sound.update(), this.input.update(), this.physics.update(), this.particles.update(), this.plugins.update(), this.stage.postUpdate(), this.plugins.postUpdate()), this.stage.updateTransform()
        }, updateRender: function (a) {
            this.lockRender || (this.state.preRender(a), this.renderType !== c.HEADLESS && (this.renderer.render(this.stage), this.plugins.render(a), this.state.render(a)), this.plugins.postRender(a))
        }, enableStep: function () {
            this.stepping = !0, this.pendingStep = !1, this.stepCount = 0
        }, disableStep: function () {
            this.stepping = !1, this.pendingStep = !1
        }, step: function () {
            this.pendingStep = !1, this.stepCount++
        }, destroy: function () {
            this.raf.stop(), this.state.destroy(), this.sound.destroy(), this.scale.destroy(), this.stage.destroy(), this.input.destroy(), this.physics.destroy(), this.plugins.destroy(), this.state = null, this.sound = null, this.scale = null, this.stage = null, this.input = null, this.physics = null, this.plugins = null, this.cache = null, this.load = null, this.time = null, this.world = null, this.isBooted = !1, this.renderer.destroy(!1), c.Canvas.removeFromDOM(this.canvas), PIXI.defaultRenderer = null, c.GAMES[this.id] = null
        }, gamePaused: function (a) {
            this._paused || (this._paused = !0, this.time.gamePaused(), this.sound.muteOnPause && this.sound.setMute(), this.onPause.dispatch(a), this.device.cordova && this.device.iOS && (this.lockRender = !0))
        }, gameResumed: function (a) {
            this._paused && !this._codePaused && (this._paused = !1, this.time.gameResumed(), this.input.reset(), this.sound.muteOnPause && this.sound.unsetMute(), this.onResume.dispatch(a), this.device.cordova && this.device.iOS && (this.lockRender = !1))
        }, focusLoss: function (a) {
            this.onBlur.dispatch(a), this.stage.disableVisibilityChange || this.gamePaused(a)
        }, focusGain: function (a) {
            this.onFocus.dispatch(a), this.stage.disableVisibilityChange || this.gameResumed(a)
        }
    }, c.Game.prototype.constructor = c.Game, Object.defineProperty(c.Game.prototype, "paused", {
        get: function () {
            return this._paused
        }, set: function (a) {
            a === !0 ? (this._paused === !1 && (this._paused = !0, this.sound.setMute(), this.time.gamePaused(), this.onPause.dispatch(this)), this._codePaused = !0) : (this._paused && (this._paused = !1, this.input.reset(), this.sound.unsetMute(), this.time.gameResumed(), this.onResume.dispatch(this)), this._codePaused = !1)
        }
    }), c.Input = function (a) {
        this.game = a, this.hitCanvas = null, this.hitContext = null, this.moveCallbacks = [], this.customCandidateHandler = null, this.customCandidateHandlerContext = null, this.pollRate = 0, this.enabled = !0, this.multiInputOverride = c.Input.MOUSE_TOUCH_COMBINE, this.position = null, this.speed = null, this.circle = null, this.scale = null, this.maxPointers = -1, this.tapRate = 200, this.doubleTapRate = 300, this.holdRate = 2e3, this.justPressedRate = 200, this.justReleasedRate = 200, this.recordPointerHistory = !1, this.recordRate = 100, this.recordLimit = 100, this.pointer1 = null, this.pointer2 = null, this.pointer3 = null, this.pointer4 = null, this.pointer5 = null, this.pointer6 = null, this.pointer7 = null, this.pointer8 = null, this.pointer9 = null, this.pointer10 = null, this.pointers = [], this.activePointer = null, this.mousePointer = null, this.mouse = null, this.keyboard = null, this.touch = null, this.mspointer = null, this.gamepad = null, this.resetLocked = !1, this.onDown = null, this.onUp = null, this.onTap = null, this.onHold = null, this.minPriorityID = 0, this.interactiveItems = new c.ArraySet, this._localPoint = new c.Point, this._pollCounter = 0, this._oldPosition = null, this._x = 0, this._y = 0
    }, c.Input.MOUSE_OVERRIDES_TOUCH = 0, c.Input.TOUCH_OVERRIDES_MOUSE = 1, c.Input.MOUSE_TOUCH_COMBINE = 2, c.Input.MAX_POINTERS = 10, c.Input.prototype = {
        boot: function () {
            this.mousePointer = new c.Pointer(this.game, 0, c.PointerMode.CURSOR), this.addPointer(), this.addPointer(), this.mouse = new c.Mouse(this.game), this.touch = new c.Touch(this.game), this.mspointer = new c.MSPointer(this.game), c.Keyboard && (this.keyboard = new c.Keyboard(this.game)), c.Gamepad && (this.gamepad = new c.Gamepad(this.game)), this.onDown = new c.Signal, this.onUp = new c.Signal, this.onTap = new c.Signal, this.onHold = new c.Signal, this.scale = new c.Point(1, 1), this.speed = new c.Point, this.position = new c.Point, this._oldPosition = new c.Point, this.circle = new c.Circle(0, 0, 44), this.activePointer = this.mousePointer, this.hitCanvas = PIXI.CanvasPool.create(this, 1, 1), this.hitContext = this.hitCanvas.getContext("2d"), this.mouse.start(), this.touch.start(), this.mspointer.start(), this.mousePointer.active = !0, this.keyboard && this.keyboard.start();
            var a = this;
            this._onClickTrampoline = function (b) {
                a.onClickTrampoline(b)
            }, this.game.canvas.addEventListener("click", this._onClickTrampoline, !1)
        }, destroy: function () {
            this.mouse.stop(), this.touch.stop(), this.mspointer.stop(), this.keyboard && this.keyboard.stop(), this.gamepad && this.gamepad.stop(), this.moveCallbacks = [], PIXI.CanvasPool.remove(this), this.game.canvas.removeEventListener("click", this._onClickTrampoline)
        }, setInteractiveCandidateHandler: function (a, b) {
            this.customCandidateHandler = a, this.customCandidateHandlerContext = b
        }, addMoveCallback: function (a, b) {
            this.moveCallbacks.push({callback: a, context: b})
        }, deleteMoveCallback: function (a, b) {
            for (var c = this.moveCallbacks.length; c--;) if (this.moveCallbacks[c].callback === a && this.moveCallbacks[c].context === b) return void this.moveCallbacks.splice(c, 1)
        }, addPointer: function () {
            if (this.pointers.length >= c.Input.MAX_POINTERS) return console.warn("Phaser.Input.addPointer: Maximum limit of " + c.Input.MAX_POINTERS + " pointers reached."), null;
            var a = this.pointers.length + 1, b = new c.Pointer(this.game, a, c.PointerMode.TOUCH);
            return this.pointers.push(b), this["pointer" + a] = b, b
        }, update: function () {
            if (this.keyboard && this.keyboard.update(), this.pollRate > 0 && this._pollCounter < this.pollRate) return void this._pollCounter++;
            this.speed.x = this.position.x - this._oldPosition.x, this.speed.y = this.position.y - this._oldPosition.y, this._oldPosition.copyFrom(this.position), this.mousePointer.update(), this.gamepad && this.gamepad.active && this.gamepad.update();
            for (var a = 0; a < this.pointers.length; a++) this.pointers[a].update();
            this._pollCounter = 0
        }, reset: function (a) {
            if (this.game.isBooted && !this.resetLocked) {
                void 0 === a && (a = !1), this.mousePointer.reset(), this.keyboard && this.keyboard.reset(a), this.gamepad && this.gamepad.reset();
                for (var b = 0; b < this.pointers.length; b++) this.pointers[b].reset();
                "none" !== this.game.canvas.style.cursor && (this.game.canvas.style.cursor = "inherit"), a && (this.onDown.dispose(), this.onUp.dispose(), this.onTap.dispose(), this.onHold.dispose(), this.onDown = new c.Signal, this.onUp = new c.Signal, this.onTap = new c.Signal, this.onHold = new c.Signal, this.moveCallbacks = []), this._pollCounter = 0
            }
        }, resetSpeed: function (a, b) {
            this._oldPosition.setTo(a, b), this.speed.setTo(0, 0)
        }, startPointer: function (a) {
            if (this.maxPointers >= 0 && this.countActivePointers(this.maxPointers) >= this.maxPointers) return null;
            if (!this.pointer1.active) return this.pointer1.start(a);
            if (!this.pointer2.active) return this.pointer2.start(a);
            for (var b = 2; b < this.pointers.length; b++) {
                var c = this.pointers[b];
                if (!c.active) return c.start(a)
            }
            return null
        }, updatePointer: function (a) {
            if (this.pointer1.active && this.pointer1.identifier === a.identifier) return this.pointer1.move(a);
            if (this.pointer2.active && this.pointer2.identifier === a.identifier) return this.pointer2.move(a);
            for (var b = 2; b < this.pointers.length; b++) {
                var c = this.pointers[b];
                if (c.active && c.identifier === a.identifier) return c.move(a)
            }
            return null
        }, stopPointer: function (a) {
            if (this.pointer1.active && this.pointer1.identifier === a.identifier) return this.pointer1.stop(a);
            if (this.pointer2.active && this.pointer2.identifier === a.identifier) return this.pointer2.stop(a);
            for (var b = 2; b < this.pointers.length; b++) {
                var c = this.pointers[b];
                if (c.active && c.identifier === a.identifier) return c.stop(a)
            }
            return null
        }, countActivePointers: function (a) {
            void 0 === a && (a = this.pointers.length);
            for (var b = a, c = 0; c < this.pointers.length && b > 0; c++) {
                var d = this.pointers[c];
                d.active && b--
            }
            return a - b
        }, getPointer: function (a) {
            void 0 === a && (a = !1);
            for (var b = 0; b < this.pointers.length; b++) {
                var c = this.pointers[b];
                if (c.active === a) return c
            }
            return null
        }, getPointerFromIdentifier: function (a) {
            for (var b = 0; b < this.pointers.length; b++) {
                var c = this.pointers[b];
                if (c.identifier === a) return c
            }
            return null
        }, getPointerFromId: function (a) {
            for (var b = 0; b < this.pointers.length; b++) {
                var c = this.pointers[b];
                if (c.pointerId === a) return c
            }
            return null
        }, getLocalPosition: function (a, b, d) {
            void 0 === d && (d = new c.Point);
            var e = a.worldTransform, f = 1 / (e.a * e.d + e.c * -e.b);
            return d.setTo(e.d * f * b.x + -e.c * f * b.y + (e.ty * e.c - e.tx * e.d) * f, e.a * f * b.y + -e.b * f * b.x + (-e.ty * e.a + e.tx * e.b) * f)
        }, hitTest: function (a, b, d) {
            if (!a.worldVisible) return !1;
            if (this.getLocalPosition(a, b, this._localPoint), d.copyFrom(this._localPoint), a.hitArea && a.hitArea.contains) return a.hitArea.contains(this._localPoint.x, this._localPoint.y);
            if (a instanceof c.TileSprite) {
                var e = a.width, f = a.height, g = -e * a.anchor.x;
                if (this._localPoint.x >= g && this._localPoint.x < g + e) {
                    var h = -f * a.anchor.y;
                    if (this._localPoint.y >= h && this._localPoint.y < h + f) return !0
                }
            } else if (a instanceof PIXI.Sprite) {
                var e = a.texture.frame.width, f = a.texture.frame.height, g = -e * a.anchor.x;
                if (this._localPoint.x >= g && this._localPoint.x < g + e) {
                    var h = -f * a.anchor.y;
                    if (this._localPoint.y >= h && this._localPoint.y < h + f) return !0
                }
            } else if (a instanceof c.Graphics) for (var i = 0; i < a.graphicsData.length; i++) {
                var j = a.graphicsData[i];
                if (j.fill && j.shape && j.shape.contains(this._localPoint.x, this._localPoint.y)) return !0
            }
            for (var i = 0; i < a.children.length; i++) if (this.hitTest(a.children[i], b, d)) return !0;
            return !1
        }, onClickTrampoline: function () {
            this.activePointer.processClickTrampolines()
        }
    }, c.Input.prototype.constructor = c.Input, Object.defineProperty(c.Input.prototype, "x", {
        get: function () {
            return this._x
        }, set: function (a) {
            this._x = Math.floor(a)
        }
    }), Object.defineProperty(c.Input.prototype, "y", {
        get: function () {
            return this._y
        }, set: function (a) {
            this._y = Math.floor(a)
        }
    }), Object.defineProperty(c.Input.prototype, "pollLocked", {
        get: function () {
            return this.pollRate > 0 && this._pollCounter < this.pollRate
        }
    }), Object.defineProperty(c.Input.prototype, "totalInactivePointers", {
        get: function () {
            return this.pointers.length - this.countActivePointers()
        }
    }), Object.defineProperty(c.Input.prototype, "totalActivePointers", {
        get: function () {
            return this.countActivePointers()
        }
    }), Object.defineProperty(c.Input.prototype, "worldX", {
        get: function () {
            return this.game.camera.view.x + this.x
        }
    }), Object.defineProperty(c.Input.prototype, "worldY", {
        get: function () {
            return this.game.camera.view.y + this.y
        }
    }), c.Mouse = function (a) {
        this.game = a, this.input = a.input, this.callbackContext = this.game, this.mouseDownCallback = null, this.mouseUpCallback = null, this.mouseOutCallback = null, this.mouseOverCallback = null, this.mouseWheelCallback = null, this.capture = !1, this.button = -1, this.wheelDelta = 0, this.enabled = !0, this.locked = !1, this.stopOnGameOut = !1, this.pointerLock = new c.Signal, this.event = null, this._onMouseDown = null, this._onMouseMove = null, this._onMouseUp = null, this._onMouseOut = null, this._onMouseOver = null, this._onMouseWheel = null, this._wheelEvent = null
    }, c.Mouse.NO_BUTTON = -1,c.Mouse.LEFT_BUTTON = 0,c.Mouse.MIDDLE_BUTTON = 1,c.Mouse.RIGHT_BUTTON = 2,c.Mouse.BACK_BUTTON = 3,c.Mouse.FORWARD_BUTTON = 4,c.Mouse.WHEEL_UP = 1,c.Mouse.WHEEL_DOWN = -1,c.Mouse.prototype = {
        start: function () {
            if ((!this.game.device.android || this.game.device.chrome !== !1) && null === this._onMouseDown) {
                var b = this;
                this._onMouseDown = function (a) {
                    return b.onMouseDown(a)
                }, this._onMouseMove = function (a) {
                    return b.onMouseMove(a)
                }, this._onMouseUp = function (a) {
                    return b.onMouseUp(a)
                }, this._onMouseUpGlobal = function (a) {
                    return b.onMouseUpGlobal(a)
                }, this._onMouseOutGlobal = function (a) {
                    return b.onMouseOutGlobal(a)
                }, this._onMouseOut = function (a) {
                    return b.onMouseOut(a)
                }, this._onMouseOver = function (a) {
                    return b.onMouseOver(a)
                }, this._onMouseWheel = function (a) {
                    return b.onMouseWheel(a)
                };
                var c = this.game.canvas;
                c.addEventListener("mousedown", this._onMouseDown, !0), c.addEventListener("mousemove", this._onMouseMove, !0), c.addEventListener("mouseup", this._onMouseUp, !0), this.game.device.cocoonJS || (window.addEventListener("mouseup", this._onMouseUpGlobal, !0), window.addEventListener("mouseout", this._onMouseOutGlobal, !0), c.addEventListener("mouseover", this._onMouseOver, !0), c.addEventListener("mouseout", this._onMouseOut, !0));
                var d = this.game.device.wheelEvent;
                d && (c.addEventListener(d, this._onMouseWheel, !0), "mousewheel" === d ? this._wheelEvent = new a((-.025), 1) : "DOMMouseScroll" === d && (this._wheelEvent = new a(1, 1)))
            }
        }, onMouseDown: function (a) {
            this.event = a, this.capture && a.preventDefault(), this.mouseDownCallback && this.mouseDownCallback.call(this.callbackContext, a), this.input.enabled && this.enabled && (a.identifier = 0, this.input.mousePointer.start(a))
        }, onMouseMove: function (a) {
            this.event = a, this.capture && a.preventDefault(), this.mouseMoveCallback && this.mouseMoveCallback.call(this.callbackContext, a), this.input.enabled && this.enabled && (a.identifier = 0, this.input.mousePointer.move(a))
        }, onMouseUp: function (a) {
            this.event = a, this.capture && a.preventDefault(), this.mouseUpCallback && this.mouseUpCallback.call(this.callbackContext, a), this.input.enabled && this.enabled && (a.identifier = 0, this.input.mousePointer.stop(a))
        }, onMouseUpGlobal: function (a) {
            this.input.mousePointer.withinGame || (this.mouseUpCallback && this.mouseUpCallback.call(this.callbackContext, a), a.identifier = 0, this.input.mousePointer.stop(a))
        }, onMouseOutGlobal: function (a) {
            this.event = a, this.capture && a.preventDefault(), this.input.mousePointer.withinGame = !1, this.input.enabled && this.enabled && (this.input.mousePointer.stop(a), this.input.mousePointer.leftButton.stop(a), this.input.mousePointer.rightButton.stop(a))
        }, onMouseOut: function (a) {
            this.event = a, this.capture && a.preventDefault(), this.input.mousePointer.withinGame = !1, this.mouseOutCallback && this.mouseOutCallback.call(this.callbackContext, a), this.input.enabled && this.enabled && this.stopOnGameOut && (a.identifier = 0, this.input.mousePointer.stop(a))
        }, onMouseOver: function (a) {
            this.event = a, this.capture && a.preventDefault(), this.input.mousePointer.withinGame = !0, this.mouseOverCallback && this.mouseOverCallback.call(this.callbackContext, a)
        }, onMouseWheel: function (a) {
            this._wheelEvent && (a = this._wheelEvent.bindEvent(a)), this.event = a, this.capture && a.preventDefault(), this.wheelDelta = c.Math.clamp(-a.deltaY, -1, 1), this.mouseWheelCallback && this.mouseWheelCallback.call(this.callbackContext, a)
        }, requestPointerLock: function () {
            if (this.game.device.pointerLock) {
                var a = this.game.canvas;
                a.requestPointerLock = a.requestPointerLock || a.mozRequestPointerLock || a.webkitRequestPointerLock, a.requestPointerLock();
                var b = this;
                this._pointerLockChange = function (a) {
                    return b.pointerLockChange(a)
                }, document.addEventListener("pointerlockchange", this._pointerLockChange, !0), document.addEventListener("mozpointerlockchange", this._pointerLockChange, !0), document.addEventListener("webkitpointerlockchange", this._pointerLockChange, !0)
            }
        }, pointerLockChange: function (a) {
            var b = this.game.canvas;
            document.pointerLockElement === b || document.mozPointerLockElement === b || document.webkitPointerLockElement === b ? (this.locked = !0, this.pointerLock.dispatch(!0, a)) : (this.locked = !1, this.pointerLock.dispatch(!1, a))
        }, releasePointerLock: function () {
            document.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock, document.exitPointerLock(), document.removeEventListener("pointerlockchange", this._pointerLockChange, !0), document.removeEventListener("mozpointerlockchange", this._pointerLockChange, !0), document.removeEventListener("webkitpointerlockchange", this._pointerLockChange, !0)
        }, stop: function () {
            var a = this.game.canvas;
            a.removeEventListener("mousedown", this._onMouseDown, !0), a.removeEventListener("mousemove", this._onMouseMove, !0), a.removeEventListener("mouseup", this._onMouseUp, !0), a.removeEventListener("mouseover", this._onMouseOver, !0), a.removeEventListener("mouseout", this._onMouseOut, !0);
            var b = this.game.device.wheelEvent;
            b && a.removeEventListener(b, this._onMouseWheel, !0), window.removeEventListener("mouseup", this._onMouseUpGlobal, !0), window.removeEventListener("mouseout", this._onMouseOutGlobal, !0), document.removeEventListener("pointerlockchange", this._pointerLockChange, !0), document.removeEventListener("mozpointerlockchange", this._pointerLockChange, !0), document.removeEventListener("webkitpointerlockchange", this._pointerLockChange, !0)
        }
    },c.Mouse.prototype.constructor = c.Mouse,a.prototype = {},a.prototype.constructor = a,a.prototype.bindEvent = function (b) {
        if (!a._stubsGenerated && b) {
            var c = function (a) {
                return function () {
                    var b = this.originalEvent[a];
                    return "function" != typeof b ? b : b.bind(this.originalEvent)
                }
            };
            for (var d in b) d in a.prototype || Object.defineProperty(a.prototype, d, {get: c(d)});
            a._stubsGenerated = !0
        }
        return this.originalEvent = b, this
    },Object.defineProperties(a.prototype, {
        type: {value: "wheel"}, deltaMode: {
            get: function () {
                return this._deltaMode
            }
        }, deltaY: {
            get: function () {
                return this._scaleFactor * (this.originalEvent.wheelDelta || this.originalEvent.detail) || 0
            }
        }, deltaX: {
            get: function () {
                return this._scaleFactor * this.originalEvent.wheelDeltaX || 0
            }
        }, deltaZ: {value: 0}
    }),c.MSPointer = function (a) {
        this.game = a, this.input = a.input, this.callbackContext = this.game, this.pointerDownCallback = null, this.pointerMoveCallback = null, this.pointerUpCallback = null, this.capture = !0, this.button = -1, this.event = null, this.enabled = !0, this._onMSPointerDown = null, this._onMSPointerMove = null, this._onMSPointerUp = null, this._onMSPointerUpGlobal = null, this._onMSPointerOut = null, this._onMSPointerOver = null
    },c.MSPointer.prototype = {
        start: function () {
            if (null === this._onMSPointerDown) {
                var a = this;
                if (this.game.device.mspointer) {
                    this._onMSPointerDown = function (b) {
                        return a.onPointerDown(b)
                    }, this._onMSPointerMove = function (b) {
                        return a.onPointerMove(b)
                    }, this._onMSPointerUp = function (b) {
                        return a.onPointerUp(b)
                    }, this._onMSPointerUpGlobal = function (b) {
                        return a.onPointerUpGlobal(b)
                    }, this._onMSPointerOut = function (b) {
                        return a.onPointerOut(b)
                    }, this._onMSPointerOver = function (b) {
                        return a.onPointerOver(b)
                    };
                    var b = this.game.canvas;
                    b.addEventListener("MSPointerDown", this._onMSPointerDown, !1), b.addEventListener("MSPointerMove", this._onMSPointerMove, !1), b.addEventListener("MSPointerUp", this._onMSPointerUp, !1), b.addEventListener("pointerdown", this._onMSPointerDown, !1), b.addEventListener("pointermove", this._onMSPointerMove, !1), b.addEventListener("pointerup", this._onMSPointerUp, !1), b.style["-ms-content-zooming"] = "none", b.style["-ms-touch-action"] = "none", this.game.device.cocoonJS || (window.addEventListener("MSPointerUp", this._onMSPointerUpGlobal, !0), b.addEventListener("MSPointerOver", this._onMSPointerOver, !0), b.addEventListener("MSPointerOut", this._onMSPointerOut, !0), window.addEventListener("pointerup", this._onMSPointerUpGlobal, !0), b.addEventListener("pointerover", this._onMSPointerOver, !0), b.addEventListener("pointerout", this._onMSPointerOut, !0))
                }
            }
        }, onPointerDown: function (a) {
            this.event = a, this.capture && a.preventDefault(), this.pointerDownCallback && this.pointerDownCallback.call(this.callbackContext, a), this.input.enabled && this.enabled && (a.identifier = a.pointerId, "mouse" === a.pointerType || 4 === a.pointerType ? this.input.mousePointer.start(a) : this.input.startPointer(a))
        }, onPointerMove: function (a) {
            this.event = a, this.capture && a.preventDefault(), this.pointerMoveCallback && this.pointerMoveCallback.call(this.callbackContext, a), this.input.enabled && this.enabled && (a.identifier = a.pointerId, "mouse" === a.pointerType || 4 === a.pointerType ? this.input.mousePointer.move(a) : this.input.updatePointer(a))
        }, onPointerUp: function (a) {
            this.event = a, this.capture && a.preventDefault(), this.pointerUpCallback && this.pointerUpCallback.call(this.callbackContext, a), this.input.enabled && this.enabled && (a.identifier = a.pointerId, "mouse" === a.pointerType || 4 === a.pointerType ? this.input.mousePointer.stop(a) : this.input.stopPointer(a))
        }, onPointerUpGlobal: function (a) {
            if ("mouse" !== a.pointerType && 4 !== a.pointerType || this.input.mousePointer.withinGame) {
                var b = this.input.getPointerFromIdentifier(a.identifier);
                b && b.withinGame && this.onPointerUp(a)
            } else this.onPointerUp(a)
        }, onPointerOut: function (a) {
            if (this.event = a, this.capture && a.preventDefault(), "mouse" === a.pointerType || 4 === a.pointerType) this.input.mousePointer.withinGame = !1; else {
                var b = this.input.getPointerFromIdentifier(a.identifier);
                b && (b.withinGame = !1)
            }
            this.input.mouse.mouseOutCallback && this.input.mouse.mouseOutCallback.call(this.input.mouse.callbackContext, a), this.input.enabled && this.enabled && this.input.mouse.stopOnGameOut && (a.identifier = 0, b ? b.stop(a) : this.input.mousePointer.stop(a))
        }, onPointerOver: function (a) {
            if (this.event = a, this.capture && a.preventDefault(), "mouse" === a.pointerType || 4 === a.pointerType) this.input.mousePointer.withinGame = !0; else {
                var b = this.input.getPointerFromIdentifier(a.identifier);
                b && (b.withinGame = !0)
            }
            this.input.mouse.mouseOverCallback && this.input.mouse.mouseOverCallback.call(this.input.mouse.callbackContext, a)
        }, stop: function () {
            var a = this.game.canvas;
            a.removeEventListener("MSPointerDown", this._onMSPointerDown, !1), a.removeEventListener("MSPointerMove", this._onMSPointerMove, !1), a.removeEventListener("MSPointerUp", this._onMSPointerUp, !1), a.removeEventListener("pointerdown", this._onMSPointerDown, !1), a.removeEventListener("pointermove", this._onMSPointerMove, !1), a.removeEventListener("pointerup", this._onMSPointerUp, !1), window.removeEventListener("MSPointerUp", this._onMSPointerUpGlobal, !0), a.removeEventListener("MSPointerOver", this._onMSPointerOver, !0), a.removeEventListener("MSPointerOut", this._onMSPointerOut, !0), window.removeEventListener("pointerup", this._onMSPointerUpGlobal, !0), a.removeEventListener("pointerover", this._onMSPointerOver, !0), a.removeEventListener("pointerout", this._onMSPointerOut, !0)
        }
    },c.MSPointer.prototype.constructor = c.MSPointer,c.DeviceButton = function (a, b) {
        this.parent = a, this.game = a.game, this.event = null, this.isDown = !1, this.isUp = !0, this.timeDown = 0, this.timeUp = 0, this.repeats = 0, this.altKey = !1, this.shiftKey = !1, this.ctrlKey = !1, this.value = 0, this.buttonCode = b, this.onDown = new c.Signal, this.onUp = new c.Signal, this.onFloat = new c.Signal
    },c.DeviceButton.prototype = {
        start: function (a, b) {
            this.isDown || (this.isDown = !0, this.isUp = !1, this.timeDown = this.game.time.time, this.repeats = 0, this.event = a, this.value = b, a && (this.altKey = a.altKey, this.shiftKey = a.shiftKey, this.ctrlKey = a.ctrlKey), this.onDown.dispatch(this, b))
        }, stop: function (a, b) {
            this.isUp || (this.isDown = !1, this.isUp = !0, this.timeUp = this.game.time.time, this.event = a, this.value = b, a && (this.altKey = a.altKey, this.shiftKey = a.shiftKey, this.ctrlKey = a.ctrlKey), this.onUp.dispatch(this, b))
        }, padFloat: function (a) {
            this.value = a, this.onFloat.dispatch(this, a)
        }, justPressed: function (a) {
            return a = a || 250, this.isDown && this.timeDown + a > this.game.time.time
        }, justReleased: function (a) {
            return a = a || 250, this.isUp && this.timeUp + a > this.game.time.time
        }, reset: function () {
            this.isDown = !1, this.isUp = !0, this.timeDown = this.game.time.time, this.repeats = 0, this.altKey = !1, this.shiftKey = !1, this.ctrlKey = !1
        }, destroy: function () {
            this.onDown.dispose(), this.onUp.dispose(), this.onFloat.dispose(), this.parent = null, this.game = null
        }
    },c.DeviceButton.prototype.constructor = c.DeviceButton,Object.defineProperty(c.DeviceButton.prototype, "duration", {
        get: function () {
            return this.isUp ? -1 : this.game.time.time - this.timeDown
        }
    }),c.Pointer = function (a, b, d) {
        this.game = a, this.id = b, this.type = c.POINTER, this.exists = !0, this.identifier = 0, this.pointerId = null, this.pointerMode = d || c.PointerMode.CURSOR | c.PointerMode.CONTACT, this.target = null, this.button = null, this.leftButton = new c.DeviceButton(this, c.Pointer.LEFT_BUTTON), this.middleButton = new c.DeviceButton(this, c.Pointer.MIDDLE_BUTTON), this.rightButton = new c.DeviceButton(this, c.Pointer.RIGHT_BUTTON), this.backButton = new c.DeviceButton(this, c.Pointer.BACK_BUTTON), this.forwardButton = new c.DeviceButton(this, c.Pointer.FORWARD_BUTTON), this.eraserButton = new c.DeviceButton(this, c.Pointer.ERASER_BUTTON), this._holdSent = !1, this._history = [], this._nextDrop = 0, this._stateReset = !1, this.withinGame = !1, this.clientX = -1, this.clientY = -1, this.pageX = -1, this.pageY = -1, this.screenX = -1, this.screenY = -1, this.rawMovementX = 0, this.rawMovementY = 0, this.movementX = 0, this.movementY = 0, this.x = -1, this.y = -1, this.isMouse = 0 === b, this.isDown = !1, this.isUp = !0, this.timeDown = 0, this.timeUp = 0, this.previousTapTime = 0, this.totalTouches = 0, this.msSinceLastClick = Number.MAX_VALUE, this.targetObject = null, this.interactiveCandidates = [], this.active = !1, this.dirty = !1, this.position = new c.Point, this.positionDown = new c.Point, this.positionUp = new c.Point, this.circle = new c.Circle(0, 0, 44), this._clickTrampolines = null, this._trampolineTargetObject = null
    },c.Pointer.NO_BUTTON = 0,c.Pointer.LEFT_BUTTON = 1,c.Pointer.RIGHT_BUTTON = 2,c.Pointer.MIDDLE_BUTTON = 4,c.Pointer.BACK_BUTTON = 8,c.Pointer.FORWARD_BUTTON = 16,c.Pointer.ERASER_BUTTON = 32,c.Pointer.prototype = {
        resetButtons: function () {
            this.isDown = !1, this.isUp = !0, this.isMouse && (this.leftButton.reset(), this.middleButton.reset(), this.rightButton.reset(), this.backButton.reset(), this.forwardButton.reset(), this.eraserButton.reset())
        }, processButtonsDown: function (a, b) {
            c.Pointer.LEFT_BUTTON & a && this.leftButton.start(b), c.Pointer.RIGHT_BUTTON & a && this.rightButton.start(b), c.Pointer.MIDDLE_BUTTON & a && this.middleButton.start(b), c.Pointer.BACK_BUTTON & a && this.backButton.start(b), c.Pointer.FORWARD_BUTTON & a && this.forwardButton.start(b), c.Pointer.ERASER_BUTTON & a && this.eraserButton.start(b)
        }, processButtonsUp: function (a, b) {
            a === c.Mouse.LEFT_BUTTON && this.leftButton.stop(b), a === c.Mouse.RIGHT_BUTTON && this.rightButton.stop(b), a === c.Mouse.MIDDLE_BUTTON && this.middleButton.stop(b), a === c.Mouse.BACK_BUTTON && this.backButton.stop(b), a === c.Mouse.FORWARD_BUTTON && this.forwardButton.stop(b), 5 === a && this.eraserButton.stop(b)
        }, updateButtons: function (a) {
            this.button = a.button;
            var b = "down" === a.type.toLowerCase().substr(-4);
            void 0 !== a.buttons ? b ? this.processButtonsDown(a.buttons, a) : this.processButtonsUp(a.button, a) : b ? this.leftButton.start(a) : (this.leftButton.stop(a), this.rightButton.stop(a)), 1 === a.buttons && a.ctrlKey && this.leftButton.isDown && (this.leftButton.stop(a), this.rightButton.start(a)), this.isUp = !0, this.isDown = !1, (this.leftButton.isDown || this.rightButton.isDown || this.middleButton.isDown || this.backButton.isDown || this.forwardButton.isDown || this.eraserButton.isDown) && (this.isUp = !1, this.isDown = !0)
        }, start: function (a) {
            var b = this.game.input;
            return a.pointerId && (this.pointerId = a.pointerId), this.identifier = a.identifier, this.target = a.target, this.isMouse ? this.updateButtons(a) : (this.isDown = !0, this.isUp = !1), this.active = !0, this.withinGame = !0, this.dirty = !1, this._history = [], this._clickTrampolines = null, this._trampolineTargetObject = null, this.msSinceLastClick = this.game.time.time - this.timeDown, this.timeDown = this.game.time.time, this._holdSent = !1, this.move(a, !0), this.positionDown.setTo(this.x, this.y), (b.multiInputOverride === c.Input.MOUSE_OVERRIDES_TOUCH || b.multiInputOverride === c.Input.MOUSE_TOUCH_COMBINE || b.multiInputOverride === c.Input.TOUCH_OVERRIDES_MOUSE && 0 === b.totalActivePointers) && (b.x = this.x, b.y = this.y, b.position.setTo(this.x, this.y), b.onDown.dispatch(this, a), b.resetSpeed(this.x, this.y)), this._stateReset = !1, this.totalTouches++, null !== this.targetObject && this.targetObject._touchedHandler(this), this
        }, update: function () {
            var a = this.game.input;
            this.active && (this.dirty && (a.interactiveItems.total > 0 && this.processInteractiveObjects(!1), this.dirty = !1), this._holdSent === !1 && this.duration >= a.holdRate && ((a.multiInputOverride === c.Input.MOUSE_OVERRIDES_TOUCH || a.multiInputOverride === c.Input.MOUSE_TOUCH_COMBINE || a.multiInputOverride === c.Input.TOUCH_OVERRIDES_MOUSE && 0 === a.totalActivePointers) && a.onHold.dispatch(this), this._holdSent = !0), a.recordPointerHistory && this.game.time.time >= this._nextDrop && (this._nextDrop = this.game.time.time + a.recordRate, this._history.push({
                x: this.position.x,
                y: this.position.y
            }), this._history.length > a.recordLimit && this._history.shift()))
        }, move: function (a, b) {
            var d = this.game.input;
            if (!d.pollLocked) {
                if (void 0 === b && (b = !1), void 0 !== a.button && (this.button = a.button), b && this.isMouse && this.updateButtons(a), this.clientX = a.clientX, this.clientY = a.clientY, this.pageX = a.pageX, this.pageY = a.pageY, this.screenX = a.screenX, this.screenY = a.screenY, this.isMouse && d.mouse.locked && !b && (this.rawMovementX = a.movementX || a.mozMovementX || a.webkitMovementX || 0, this.rawMovementY = a.movementY || a.mozMovementY || a.webkitMovementY || 0, this.movementX += this.rawMovementX, this.movementY += this.rawMovementY), this.x = (this.pageX - this.game.scale.offset.x) * d.scale.x, this.y = (this.pageY - this.game.scale.offset.y) * d.scale.y, this.position.setTo(this.x, this.y), this.circle.x = this.x, this.circle.y = this.y, (d.multiInputOverride === c.Input.MOUSE_OVERRIDES_TOUCH || d.multiInputOverride === c.Input.MOUSE_TOUCH_COMBINE || d.multiInputOverride === c.Input.TOUCH_OVERRIDES_MOUSE && 0 === d.totalActivePointers) && (d.activePointer = this, d.x = this.x, d.y = this.y, d.position.setTo(d.x, d.y), d.circle.x = d.x, d.circle.y = d.y), this.withinGame = this.game.scale.bounds.contains(this.pageX, this.pageY), this.game.paused) return this;
                for (var e = d.moveCallbacks.length; e--;) d.moveCallbacks[e].callback.call(d.moveCallbacks[e].context, this, this.x, this.y, b);
                return null !== this.targetObject && this.targetObject.isDragged === !0 ? this.targetObject.update(this) === !1 && (this.targetObject = null) : d.interactiveItems.total > 0 && this.processInteractiveObjects(b), this
            }
        }, processInteractiveObjects: function (a) {
            var b = 0, c = -1, d = null, e = this.game.input.interactiveItems.first;
            for (this.interactiveCandidates = []; e;) e.checked = !1, e.validForInput(c, b, !1) && (e.checked = !0, (a && e.checkPointerDown(this, !0) || !a && e.checkPointerOver(this, !0)) && (b = e.sprite.renderOrderID, c = e.priorityID, d = e, this.interactiveCandidates.push(e))), e = this.game.input.interactiveItems.next;
            for (e = this.game.input.interactiveItems.first; e;) !e.checked && e.validForInput(c, b, !0) && (a && e.checkPointerDown(this, !1) || !a && e.checkPointerOver(this, !1)) && (b = e.sprite.renderOrderID, c = e.priorityID, d = e, this.interactiveCandidates.push(e)), e = this.game.input.interactiveItems.next;
            return this.game.input.customCandidateHandler && (d = this.game.input.customCandidateHandler.call(this.game.input.customCandidateHandlerContext, this, this.interactiveCandidates, d)), this.swapTarget(d, !1), null !== this.targetObject
        }, swapTarget: function (a, b) {
            void 0 === b && (b = !1), null === a ? this.targetObject && (this.targetObject._pointerOutHandler(this, b), this.targetObject = null) : null === this.targetObject ? (this.targetObject = a, a._pointerOverHandler(this, b)) : this.targetObject === a ? a.update(this) === !1 && (this.targetObject = null) : (this.targetObject._pointerOutHandler(this, b), this.targetObject = a, this.targetObject._pointerOverHandler(this, b))
        }, leave: function (a) {
            this.withinGame = !1, this.move(a, !1)
        }, stop: function (a) {
            var b = this.game.input;
            return this._stateReset && this.withinGame ? void a.preventDefault() : (this.timeUp = this.game.time.time, (b.multiInputOverride === c.Input.MOUSE_OVERRIDES_TOUCH || b.multiInputOverride === c.Input.MOUSE_TOUCH_COMBINE || b.multiInputOverride === c.Input.TOUCH_OVERRIDES_MOUSE && 0 === b.totalActivePointers) && (b.onUp.dispatch(this, a), this.duration >= 0 && this.duration <= b.tapRate && (this.timeUp - this.previousTapTime < b.doubleTapRate ? b.onTap.dispatch(this, !0) : b.onTap.dispatch(this, !1), this.previousTapTime = this.timeUp)), this.isMouse ? this.updateButtons(a) : (this.isDown = !1, this.isUp = !0), this.id > 0 && (this.active = !1), this.withinGame = this.game.scale.bounds.contains(a.pageX, a.pageY), this.pointerId = null, this.identifier = null, this.positionUp.setTo(this.x, this.y), this.isMouse === !1 && b.currentPointers--, b.interactiveItems.callAll("_releasedHandler", this), this._clickTrampolines && (this._trampolineTargetObject = this.targetObject), this.targetObject = null, this)
        }, justPressed: function (a) {
            return a = a || this.game.input.justPressedRate, this.isDown === !0 && this.timeDown + a > this.game.time.time
        }, justReleased: function (a) {
            return a = a || this.game.input.justReleasedRate, this.isUp && this.timeUp + a > this.game.time.time
        }, addClickTrampoline: function (a, b, c, d) {
            if (this.isDown) {
                for (var e = this._clickTrampolines = this._clickTrampolines || [], f = 0; f < e.length; f++) if (e[f].name === a) {
                    e.splice(f, 1);
                    break
                }
                e.push({name: a, targetObject: this.targetObject, callback: b, callbackContext: c, callbackArgs: d})
            }
        }, processClickTrampolines: function () {
            var a = this._clickTrampolines;
            if (a) {
                for (var b = 0; b < a.length; b++) {
                    var c = a[b];
                    c.targetObject === this._trampolineTargetObject && c.callback.apply(c.callbackContext, c.callbackArgs)
                }
                this._clickTrampolines = null, this._trampolineTargetObject = null
            }
        }, reset: function () {
            this.isMouse === !1 && (this.active = !1), this.pointerId = null, this.identifier = null, this.dirty = !1, this.totalTouches = 0, this._holdSent = !1, this._history.length = 0, this._stateReset = !0, this.resetButtons(), this.targetObject && this.targetObject._releasedHandler(this), this.targetObject = null
        }, resetMovement: function () {
            this.movementX = 0, this.movementY = 0
        }
    },c.Pointer.prototype.constructor = c.Pointer,Object.defineProperty(c.Pointer.prototype, "duration", {
        get: function () {
            return this.isUp ? -1 : this.game.time.time - this.timeDown
        }
    }),Object.defineProperty(c.Pointer.prototype, "worldX", {
        get: function () {
            return this.game.world.camera.x + this.x
        }
    }),Object.defineProperty(c.Pointer.prototype, "worldY", {
        get: function () {
            return this.game.world.camera.y + this.y
        }
    }),c.PointerMode = {CURSOR: 1, CONTACT: 2},c.Touch = function (a) {
        this.game = a, this.enabled = !0, this.touchLockCallbacks = [], this.callbackContext = this.game, this.touchStartCallback = null, this.touchMoveCallback = null, this.touchEndCallback = null, this.touchEnterCallback = null, this.touchLeaveCallback = null, this.touchCancelCallback = null, this.preventDefault = !0, this.event = null, this._onTouchStart = null, this._onTouchMove = null, this._onTouchEnd = null, this._onTouchEnter = null, this._onTouchLeave = null, this._onTouchCancel = null, this._onTouchMove = null
    },c.Touch.prototype = {
        start: function () {
            if (null === this._onTouchStart) {
                var a = this;
                this.game.device.touch && (this._onTouchStart = function (b) {
                    return a.onTouchStart(b)
                }, this._onTouchMove = function (b) {
                    return a.onTouchMove(b)
                }, this._onTouchEnd = function (b) {
                    return a.onTouchEnd(b)
                }, this._onTouchEnter = function (b) {
                    return a.onTouchEnter(b)
                }, this._onTouchLeave = function (b) {
                    return a.onTouchLeave(b)
                }, this._onTouchCancel = function (b) {
                    return a.onTouchCancel(b)
                }, this.game.canvas.addEventListener("touchstart", this._onTouchStart, !1), this.game.canvas.addEventListener("touchmove", this._onTouchMove, !1), this.game.canvas.addEventListener("touchend", this._onTouchEnd, !1), this.game.canvas.addEventListener("touchcancel", this._onTouchCancel, !1), this.game.device.cocoonJS || (this.game.canvas.addEventListener("touchenter", this._onTouchEnter, !1), this.game.canvas.addEventListener("touchleave", this._onTouchLeave, !1)))
            }
        }, consumeDocumentTouches: function () {
            this._documentTouchMove = function (a) {
                a.preventDefault()
            }, document.addEventListener("touchmove", this._documentTouchMove, !1)
        }, addTouchLockCallback: function (a, b, c) {
            void 0 === c && (c = !1), this.touchLockCallbacks.push({callback: a, context: b, onEnd: c})
        }, removeTouchLockCallback: function (a, b) {
            for (var c = this.touchLockCallbacks.length; c--;) if (this.touchLockCallbacks[c].callback === a && this.touchLockCallbacks[c].context === b) return this.touchLockCallbacks.splice(c, 1), !0;
            return !1
        }, onTouchStart: function (a) {
            for (var b = this.touchLockCallbacks.length; b--;) {
                var c = this.touchLockCallbacks[b];
                !c.onEnd && c.callback.call(c.context, this, a) && this.touchLockCallbacks.splice(b, 1)
            }
            if (this.event = a, this.game.input.enabled && this.enabled) {
                this.touchStartCallback && this.touchStartCallback.call(this.callbackContext, a), this.preventDefault && a.preventDefault();
                for (var b = 0; b < a.changedTouches.length; b++) this.game.input.startPointer(a.changedTouches[b])
            }
        }, onTouchCancel: function (a) {
            if (this.event = a, this.touchCancelCallback && this.touchCancelCallback.call(this.callbackContext, a), this.game.input.enabled && this.enabled) {
                this.preventDefault && a.preventDefault();
                for (var b = 0; b < a.changedTouches.length; b++) this.game.input.stopPointer(a.changedTouches[b])
            }
        }, onTouchEnter: function (a) {
            this.event = a, this.touchEnterCallback && this.touchEnterCallback.call(this.callbackContext, a), this.game.input.enabled && this.enabled && this.preventDefault && a.preventDefault()
        }, onTouchLeave: function (a) {
            this.event = a, this.touchLeaveCallback && this.touchLeaveCallback.call(this.callbackContext, a), this.preventDefault && a.preventDefault()
        }, onTouchMove: function (a) {
            this.event = a, this.touchMoveCallback && this.touchMoveCallback.call(this.callbackContext, a), this.preventDefault && a.preventDefault();
            for (var b = 0; b < a.changedTouches.length; b++) this.game.input.updatePointer(a.changedTouches[b])
        }, onTouchEnd: function (a) {
            for (var b = this.touchLockCallbacks.length; b--;) {
                var c = this.touchLockCallbacks[b];
                c.onEnd && c.callback.call(c.context, this, a) && this.touchLockCallbacks.splice(b, 1)
            }
            this.event = a, this.touchEndCallback && this.touchEndCallback.call(this.callbackContext, a), this.preventDefault && a.preventDefault();
            for (var b = 0; b < a.changedTouches.length; b++) this.game.input.stopPointer(a.changedTouches[b])
        }, stop: function () {
            this.game.device.touch && (this.game.canvas.removeEventListener("touchstart", this._onTouchStart), this.game.canvas.removeEventListener("touchmove", this._onTouchMove), this.game.canvas.removeEventListener("touchend", this._onTouchEnd), this.game.canvas.removeEventListener("touchenter", this._onTouchEnter), this.game.canvas.removeEventListener("touchleave", this._onTouchLeave), this.game.canvas.removeEventListener("touchcancel", this._onTouchCancel))
        }
    },c.Touch.prototype.constructor = c.Touch,c.InputHandler = function (a) {
        this.sprite = a, this.game = a.game, this.enabled = !1, this.checked = !1, this.priorityID = 0, this.useHandCursor = !1, this._setHandCursor = !1, this.isDragged = !1, this.allowHorizontalDrag = !0, this.allowVerticalDrag = !0, this.bringToTop = !1, this.snapOffset = null, this.snapOnDrag = !1, this.snapOnRelease = !1, this.snapX = 0, this.snapY = 0, this.snapOffsetX = 0, this.snapOffsetY = 0, this.pixelPerfectOver = !1, this.pixelPerfectClick = !1, this.pixelPerfectAlpha = 255, this.draggable = !1, this.boundsRect = null, this.boundsSprite = null, this.scaleLayer = !1, this.dragOffset = new c.Point, this.dragFromCenter = !1, this.dragStopBlocksInputUp = !1, this.dragStartPoint = new c.Point, this.dragDistanceThreshold = 0, this.dragTimeThreshold = 0, this.downPoint = new c.Point, this.snapPoint = new c.Point, this._dragPoint = new c.Point, this._dragPhase = !1, this._pendingDrag = !1, this._dragTimePass = !1, this._dragDistancePass = !1, this._wasEnabled = !1, this._tempPoint = new c.Point, this._pointerData = [], this._pointerData.push({
            id: 0,
            x: 0,
            y: 0,
            camX: 0,
            camY: 0,
            isDown: !1,
            isUp: !1,
            isOver: !1,
            isOut: !1,
            timeOver: 0,
            timeOut: 0,
            timeDown: 0,
            timeUp: 0,
            downDuration: 0,
            isDragged: !1
        })
    },c.InputHandler.prototype = {
        start: function (a, b) {
            if (a = a || 0, void 0 === b && (b = !1), this.enabled === !1) {
                this.game.input.interactiveItems.add(this), this.useHandCursor = b, this.priorityID = a;
                for (var d = 0; d < 10; d++) this._pointerData[d] = {
                    id: d,
                    x: 0,
                    y: 0,
                    isDown: !1,
                    isUp: !1,
                    isOver: !1,
                    isOut: !1,
                    timeOver: 0,
                    timeOut: 0,
                    timeDown: 0,
                    timeUp: 0,
                    downDuration: 0,
                    isDragged: !1
                };
                this.snapOffset = new c.Point, this.enabled = !0, this._wasEnabled = !0
            }
            return this.sprite.events.onAddedToGroup.add(this.addedToGroup, this), this.sprite.events.onRemovedFromGroup.add(this.removedFromGroup, this), this.sprite
        }, addedToGroup: function () {
            this._dragPhase || this._wasEnabled && !this.enabled && this.start()
        }, removedFromGroup: function () {
            this._dragPhase || (this.enabled ? (this._wasEnabled = !0, this.stop()) : this._wasEnabled = !1)
        }, reset: function () {
            this.enabled = !1;
            for (var a = 0; a < 10; a++) this._pointerData[a] = {
                id: a,
                x: 0,
                y: 0,
                isDown: !1,
                isUp: !1,
                isOver: !1,
                isOut: !1,
                timeOver: 0,
                timeOut: 0,
                timeDown: 0,
                timeUp: 0,
                downDuration: 0,
                isDragged: !1
            }
        }, stop: function () {
            this.enabled !== !1 && (this.enabled = !1, this.game.input.interactiveItems.remove(this))
        }, destroy: function () {
            this.sprite && (this._setHandCursor && (this.game.canvas.style.cursor = "default", this._setHandCursor = !1), this.enabled = !1, this.game.input.interactiveItems.remove(this), this._pointerData.length = 0, this.boundsRect = null, this.boundsSprite = null, this.sprite = null)
        }, validForInput: function (a, b, c) {
            return void 0 === c && (c = !0), !(!this.enabled || 0 === this.sprite.scale.x || 0 === this.sprite.scale.y || this.priorityID < this.game.input.minPriorityID || this.sprite.parent && this.sprite.parent.ignoreChildInput) && (!(!c && (this.pixelPerfectClick || this.pixelPerfectOver)) && (this.priorityID > a || this.priorityID === a && this.sprite.renderOrderID > b))
        }, isPixelPerfect: function () {
            return this.pixelPerfectClick || this.pixelPerfectOver
        }, pointerX: function (a) {
            return a = a || 0, this._pointerData[a].x
        }, pointerY: function (a) {
            return a = a || 0, this._pointerData[a].y
        }, pointerDown: function (a) {
            return a = a || 0, this._pointerData[a].isDown
        }, pointerUp: function (a) {
            return a = a || 0, this._pointerData[a].isUp
        }, pointerTimeDown: function (a) {
            return a = a || 0, this._pointerData[a].timeDown
        }, pointerTimeUp: function (a) {
            return a = a || 0, this._pointerData[a].timeUp
        }, pointerOver: function (a) {
            if (!this.enabled) return !1;
            if (void 0 === a) {
                for (var b = 0; b < 10; b++) if (this._pointerData[b].isOver) return !0;
                return !1
            }
            return this._pointerData[a].isOver
        }, pointerOut: function (a) {
            if (!this.enabled) return !1;
            if (void 0 !== a) return this._pointerData[a].isOut;
            for (var b = 0; b < 10; b++) if (this._pointerData[b].isOut) return !0
        }, pointerTimeOver: function (a) {
            return a = a || 0, this._pointerData[a].timeOver
        }, pointerTimeOut: function (a) {
            return a = a || 0, this._pointerData[a].timeOut
        }, pointerDragged: function (a) {
            return a = a || 0, this._pointerData[a].isDragged
        }, checkPointerDown: function (a, b) {
            return !!(a.isDown && this.enabled && this.sprite && this.sprite.parent && this.sprite.visible && this.sprite.parent.visible && 0 !== this.sprite.worldScale.x && 0 !== this.sprite.worldScale.y) && (!!this.game.input.hitTest(this.sprite, a, this._tempPoint) && (void 0 === b && (b = !1), !(!b && this.pixelPerfectClick) || this.checkPixel(this._tempPoint.x, this._tempPoint.y)))
        }, checkPointerOver: function (a, b) {
            return !!(this.enabled && this.sprite && this.sprite.parent && this.sprite.visible && this.sprite.parent.visible && 0 !== this.sprite.worldScale.x && 0 !== this.sprite.worldScale.y) && (!!this.game.input.hitTest(this.sprite, a, this._tempPoint) && (void 0 === b && (b = !1), !(!b && this.pixelPerfectOver) || this.checkPixel(this._tempPoint.x, this._tempPoint.y)))
        }, checkPixel: function (a, b, c) {
            if (this.sprite.texture.baseTexture.source) {
                if (null === a && null === b) {
                    this.game.input.getLocalPosition(this.sprite, c, this._tempPoint);
                    var a = this._tempPoint.x, b = this._tempPoint.y
                }
                if (0 !== this.sprite.anchor.x && (a -= -this.sprite.texture.frame.width * this.sprite.anchor.x), 0 !== this.sprite.anchor.y && (b -= -this.sprite.texture.frame.height * this.sprite.anchor.y), a += this.sprite.texture.frame.x, b += this.sprite.texture.frame.y, this.sprite.texture.trim && (a -= this.sprite.texture.trim.x, b -= this.sprite.texture.trim.y, a < this.sprite.texture.crop.x || a > this.sprite.texture.crop.right || b < this.sprite.texture.crop.y || b > this.sprite.texture.crop.bottom)) return this._dx = a, this._dy = b, !1;
                this._dx = a, this._dy = b, this.game.input.hitContext.clearRect(0, 0, 1, 1), this.game.input.hitContext.drawImage(this.sprite.texture.baseTexture.source, a, b, 1, 1, 0, 0, 1, 1);
                var d = this.game.input.hitContext.getImageData(0, 0, 1, 1);
                if (d.data[3] >= this.pixelPerfectAlpha) return !0
            }
            return !1
        }, update: function (a) {
            if (null !== this.sprite && void 0 !== this.sprite.parent) return this.enabled && this.sprite.visible && this.sprite.parent.visible ? this._pendingDrag ? (this._dragDistancePass || (this._dragDistancePass = c.Math.distance(a.x, a.y, this.downPoint.x, this.downPoint.y) >= this.dragDistanceThreshold),
            this._dragDistancePass && this._dragTimePass && this.startDrag(a), !0) : this.draggable && this._draggedPointerID === a.id ? this.updateDrag(a, !1) : this._pointerData[a.id].isOver ? this.checkPointerOver(a) ? (this._pointerData[a.id].x = a.x - this.sprite.x, this._pointerData[a.id].y = a.y - this.sprite.y, !0) : (this._pointerOutHandler(a), !1) : void 0 : (this._pointerOutHandler(a), !1)
        }, _pointerOverHandler: function (a, b) {
            if (null !== this.sprite) {
                var d = this._pointerData[a.id];
                if (d.isOver === !1 || a.dirty) {
                    var e = d.isOver === !1;
                    d.isOver = !0, d.isOut = !1, d.timeOver = this.game.time.time, d.x = a.x - this.sprite.x, d.y = a.y - this.sprite.y, this.useHandCursor && d.isDragged === !1 && (this.game.canvas.style.cursor = "pointer", this._setHandCursor = !0), !b && e && this.sprite && this.sprite.events && this.sprite.events.onInputOver$dispatch(this.sprite, a), this.sprite.parent && this.sprite.parent.type === c.GROUP && this.sprite.parent.onChildInputOver.dispatch(this.sprite, a)
                }
            }
        }, _pointerOutHandler: function (a, b) {
            if (null !== this.sprite) {
                var d = this._pointerData[a.id];
                d.isOver = !1, d.isOut = !0, d.timeOut = this.game.time.time, this.useHandCursor && d.isDragged === !1 && (this.game.canvas.style.cursor = "default", this._setHandCursor = !1), !b && this.sprite && this.sprite.events && (this.sprite.events.onInputOut$dispatch(this.sprite, a), this.sprite && this.sprite.parent && this.sprite.parent.type === c.GROUP && this.sprite.parent.onChildInputOut.dispatch(this.sprite, a))
            }
        }, _touchedHandler: function (a) {
            if (null !== this.sprite) {
                var b = this._pointerData[a.id];
                if (!b.isDown && b.isOver) {
                    if (this.pixelPerfectClick && !this.checkPixel(null, null, a)) return;
                    if (b.isDown = !0, b.isUp = !1, b.timeDown = this.game.time.time, this.downPoint.set(a.x, a.y), a.dirty = !0, this.sprite && this.sprite.events && (this.sprite.events.onInputDown$dispatch(this.sprite, a), this.sprite && this.sprite.parent && this.sprite.parent.type === c.GROUP && this.sprite.parent.onChildInputDown.dispatch(this.sprite, a), null === this.sprite)) return;
                    this.draggable && this.isDragged === !1 && (0 === this.dragTimeThreshold && 0 === this.dragDistanceThreshold ? this.startDrag(a) : (this._pendingDrag = !0, this._dragDistancePass = 0 === this.dragDistanceThreshold, this.dragTimeThreshold > 0 ? (this._dragTimePass = !1, this.game.time.events.add(this.dragTimeThreshold, this.dragTimeElapsed, this, a)) : this._dragTimePass = !0)), this.bringToTop && this.sprite.bringToTop()
                }
            }
        }, dragTimeElapsed: function (a) {
            this._dragTimePass = !0, this._pendingDrag && this.sprite && this._dragDistancePass && this.startDrag(a)
        }, _releasedHandler: function (a) {
            if (null !== this.sprite) {
                var b = this._pointerData[a.id];
                if (b.isDown && a.isUp) {
                    b.isDown = !1, b.isUp = !0, b.timeUp = this.game.time.time, b.downDuration = b.timeUp - b.timeDown;
                    var d = this.checkPointerOver(a);
                    this.sprite && this.sprite.events && (this.dragStopBlocksInputUp && (!this.dragStopBlocksInputUp || this.draggable && this.isDragged && this._draggedPointerID === a.id) || this.sprite.events.onInputUp$dispatch(this.sprite, a, d), this.sprite && this.sprite.parent && this.sprite.parent.type === c.GROUP && this.sprite.parent.onChildInputUp.dispatch(this.sprite, a, d), d && (d = this.checkPointerOver(a))), b.isOver = d, !d && this.useHandCursor && (this.game.canvas.style.cursor = "default", this._setHandCursor = !1), a.dirty = !0, this._pendingDrag = !1, this.draggable && this.isDragged && this._draggedPointerID === a.id && this.stopDrag(a)
                }
            }
        }, updateDrag: function (a, b) {
            if (void 0 === b && (b = !1), a.isUp) return this.stopDrag(a), !1;
            var c = this.globalToLocalX(a.x) + this._dragPoint.x + this.dragOffset.x,
                d = this.globalToLocalY(a.y) + this._dragPoint.y + this.dragOffset.y;
            if (this.sprite.fixedToCamera) this.allowHorizontalDrag && (this.sprite.cameraOffset.x = c), this.allowVerticalDrag && (this.sprite.cameraOffset.y = d), this.boundsRect && this.checkBoundsRect(), this.boundsSprite && this.checkBoundsSprite(), this.snapOnDrag && (this.sprite.cameraOffset.x = Math.round((this.sprite.cameraOffset.x - this.snapOffsetX % this.snapX) / this.snapX) * this.snapX + this.snapOffsetX % this.snapX, this.sprite.cameraOffset.y = Math.round((this.sprite.cameraOffset.y - this.snapOffsetY % this.snapY) / this.snapY) * this.snapY + this.snapOffsetY % this.snapY, this.snapPoint.set(this.sprite.cameraOffset.x, this.sprite.cameraOffset.y)); else {
                var e = this.game.camera.x - this._pointerData[a.id].camX,
                    f = this.game.camera.y - this._pointerData[a.id].camY;
                this.allowHorizontalDrag && (this.sprite.x = c + e), this.allowVerticalDrag && (this.sprite.y = d + f), this.boundsRect && this.checkBoundsRect(), this.boundsSprite && this.checkBoundsSprite(), this.snapOnDrag && (this.sprite.x = Math.round((this.sprite.x - this.snapOffsetX % this.snapX) / this.snapX) * this.snapX + this.snapOffsetX % this.snapX, this.sprite.y = Math.round((this.sprite.y - this.snapOffsetY % this.snapY) / this.snapY) * this.snapY + this.snapOffsetY % this.snapY, this.snapPoint.set(this.sprite.x, this.sprite.y))
            }
            return this.sprite.events.onDragUpdate.dispatch(this.sprite, a, c, d, this.snapPoint, b), !0
        }, justOver: function (a, b) {
            return a = a || 0, b = b || 500, this._pointerData[a].isOver && this.overDuration(a) < b
        }, justOut: function (a, b) {
            return a = a || 0, b = b || 500, this._pointerData[a].isOut && this.game.time.time - this._pointerData[a].timeOut < b
        }, justPressed: function (a, b) {
            return a = a || 0, b = b || 500, this._pointerData[a].isDown && this.downDuration(a) < b
        }, justReleased: function (a, b) {
            return a = a || 0, b = b || 500, this._pointerData[a].isUp && this.game.time.time - this._pointerData[a].timeUp < b
        }, overDuration: function (a) {
            return a = a || 0, this._pointerData[a].isOver ? this.game.time.time - this._pointerData[a].timeOver : -1
        }, downDuration: function (a) {
            return a = a || 0, this._pointerData[a].isDown ? this.game.time.time - this._pointerData[a].timeDown : -1
        }, enableDrag: function (a, b, d, e, f, g) {
            void 0 === a && (a = !1), void 0 === b && (b = !1), void 0 === d && (d = !1), void 0 === e && (e = 255), void 0 === f && (f = null), void 0 === g && (g = null), this._dragPoint = new c.Point, this.draggable = !0, this.bringToTop = b, this.dragOffset = new c.Point, this.dragFromCenter = a, this.pixelPerfectClick = d, this.pixelPerfectAlpha = e, f && (this.boundsRect = f), g && (this.boundsSprite = g)
        }, disableDrag: function () {
            if (this._pointerData) for (var a = 0; a < 10; a++) this._pointerData[a].isDragged = !1;
            this.draggable = !1, this.isDragged = !1, this._draggedPointerID = -1, this._pendingDrag = !1
        }, startDrag: function (a) {
            var b = this.sprite.x, c = this.sprite.y;
            if (this.isDragged = !0, this._draggedPointerID = a.id, this._pointerData[a.id].camX = this.game.camera.x, this._pointerData[a.id].camY = this.game.camera.y, this._pointerData[a.id].isDragged = !0, this.sprite.fixedToCamera) {
                if (this.dragFromCenter) {
                    var d = this.sprite.getBounds();
                    this.sprite.cameraOffset.x = this.globalToLocalX(a.x) + (this.sprite.cameraOffset.x - d.centerX), this.sprite.cameraOffset.y = this.globalToLocalY(a.y) + (this.sprite.cameraOffset.y - d.centerY)
                }
                this._dragPoint.setTo(this.sprite.cameraOffset.x - a.x, this.sprite.cameraOffset.y - a.y)
            } else {
                if (this.dragFromCenter) {
                    var d = this.sprite.getBounds();
                    this.sprite.x = this.globalToLocalX(a.x) + (this.sprite.x - d.centerX), this.sprite.y = this.globalToLocalY(a.y) + (this.sprite.y - d.centerY)
                }
                this._dragPoint.setTo(this.sprite.x - this.globalToLocalX(a.x), this.sprite.y - this.globalToLocalY(a.y))
            }
            this.updateDrag(a, !0), this.bringToTop && (this._dragPhase = !0, this.sprite.bringToTop()), this.dragStartPoint.set(b, c), this.sprite.events.onDragStart$dispatch(this.sprite, a, b, c), this._pendingDrag = !1
        }, globalToLocalX: function (a) {
            return this.scaleLayer && (a -= this.game.scale.grid.boundsFluid.x, a *= this.game.scale.grid.scaleFluidInversed.x), a
        }, globalToLocalY: function (a) {
            return this.scaleLayer && (a -= this.game.scale.grid.boundsFluid.y, a *= this.game.scale.grid.scaleFluidInversed.y), a
        }, stopDrag: function (a) {
            this.isDragged = !1, this._draggedPointerID = -1, this._pointerData[a.id].isDragged = !1, this._dragPhase = !1, this._pendingDrag = !1, this.snapOnRelease && (this.sprite.fixedToCamera ? (this.sprite.cameraOffset.x = Math.round((this.sprite.cameraOffset.x - this.snapOffsetX % this.snapX) / this.snapX) * this.snapX + this.snapOffsetX % this.snapX, this.sprite.cameraOffset.y = Math.round((this.sprite.cameraOffset.y - this.snapOffsetY % this.snapY) / this.snapY) * this.snapY + this.snapOffsetY % this.snapY) : (this.sprite.x = Math.round((this.sprite.x - this.snapOffsetX % this.snapX) / this.snapX) * this.snapX + this.snapOffsetX % this.snapX, this.sprite.y = Math.round((this.sprite.y - this.snapOffsetY % this.snapY) / this.snapY) * this.snapY + this.snapOffsetY % this.snapY)), this.sprite.events.onDragStop$dispatch(this.sprite, a), this.checkPointerOver(a) === !1 && this._pointerOutHandler(a)
        }, setDragLock: function (a, b) {
            void 0 === a && (a = !0), void 0 === b && (b = !0), this.allowHorizontalDrag = a, this.allowVerticalDrag = b
        }, enableSnap: function (a, b, c, d, e, f) {
            void 0 === c && (c = !0), void 0 === d && (d = !1), void 0 === e && (e = 0), void 0 === f && (f = 0), this.snapX = a, this.snapY = b, this.snapOffsetX = e, this.snapOffsetY = f, this.snapOnDrag = c, this.snapOnRelease = d
        }, disableSnap: function () {
            this.snapOnDrag = !1, this.snapOnRelease = !1
        }, checkBoundsRect: function () {
            this.sprite.fixedToCamera ? (this.sprite.cameraOffset.x < this.boundsRect.left ? this.sprite.cameraOffset.x = this.boundsRect.left : this.sprite.cameraOffset.x + this.sprite.width > this.boundsRect.right && (this.sprite.cameraOffset.x = this.boundsRect.right - this.sprite.width), this.sprite.cameraOffset.y < this.boundsRect.top ? this.sprite.cameraOffset.y = this.boundsRect.top : this.sprite.cameraOffset.y + this.sprite.height > this.boundsRect.bottom && (this.sprite.cameraOffset.y = this.boundsRect.bottom - this.sprite.height)) : (this.sprite.left < this.boundsRect.left ? this.sprite.x = this.boundsRect.x + this.sprite.offsetX : this.sprite.right > this.boundsRect.right && (this.sprite.x = this.boundsRect.right - (this.sprite.width - this.sprite.offsetX)), this.sprite.top < this.boundsRect.top ? this.sprite.y = this.boundsRect.top + this.sprite.offsetY : this.sprite.bottom > this.boundsRect.bottom && (this.sprite.y = this.boundsRect.bottom - (this.sprite.height - this.sprite.offsetY)))
        }, checkBoundsSprite: function () {
            this.sprite.fixedToCamera && this.boundsSprite.fixedToCamera ? (this.sprite.cameraOffset.x < this.boundsSprite.cameraOffset.x ? this.sprite.cameraOffset.x = this.boundsSprite.cameraOffset.x : this.sprite.cameraOffset.x + this.sprite.width > this.boundsSprite.cameraOffset.x + this.boundsSprite.width && (this.sprite.cameraOffset.x = this.boundsSprite.cameraOffset.x + this.boundsSprite.width - this.sprite.width), this.sprite.cameraOffset.y < this.boundsSprite.cameraOffset.y ? this.sprite.cameraOffset.y = this.boundsSprite.cameraOffset.y : this.sprite.cameraOffset.y + this.sprite.height > this.boundsSprite.cameraOffset.y + this.boundsSprite.height && (this.sprite.cameraOffset.y = this.boundsSprite.cameraOffset.y + this.boundsSprite.height - this.sprite.height)) : (this.sprite.left < this.boundsSprite.left ? this.sprite.x = this.boundsSprite.left + this.sprite.offsetX : this.sprite.right > this.boundsSprite.right && (this.sprite.x = this.boundsSprite.right - (this.sprite.width - this.sprite.offsetX)), this.sprite.top < this.boundsSprite.top ? this.sprite.y = this.boundsSprite.top + this.sprite.offsetY : this.sprite.bottom > this.boundsSprite.bottom && (this.sprite.y = this.boundsSprite.bottom - (this.sprite.height - this.sprite.offsetY)))
        }
    },c.InputHandler.prototype.constructor = c.InputHandler,c.Gamepad = function (a) {
        this.game = a, this._gamepadIndexMap = {}, this._rawPads = [], this._active = !1, this.enabled = !0, this._gamepadSupportAvailable = !!navigator.webkitGetGamepads || !!navigator.webkitGamepads || navigator.userAgent.indexOf("Firefox/") !== -1 || !!navigator.getGamepads, this._prevRawGamepadTypes = [], this._prevTimestamps = [], this.callbackContext = this, this.onConnectCallback = null, this.onDisconnectCallback = null, this.onDownCallback = null, this.onUpCallback = null, this.onAxisCallback = null, this.onFloatCallback = null, this._ongamepadconnected = null, this._gamepaddisconnected = null, this._gamepads = [new c.SinglePad(a, this), new c.SinglePad(a, this), new c.SinglePad(a, this), new c.SinglePad(a, this)]
    },c.Gamepad.prototype = {
        addCallbacks: function (a, b) {
            "undefined" != typeof b && (this.onConnectCallback = "function" == typeof b.onConnect ? b.onConnect : this.onConnectCallback, this.onDisconnectCallback = "function" == typeof b.onDisconnect ? b.onDisconnect : this.onDisconnectCallback, this.onDownCallback = "function" == typeof b.onDown ? b.onDown : this.onDownCallback, this.onUpCallback = "function" == typeof b.onUp ? b.onUp : this.onUpCallback, this.onAxisCallback = "function" == typeof b.onAxis ? b.onAxis : this.onAxisCallback, this.onFloatCallback = "function" == typeof b.onFloat ? b.onFloat : this.onFloatCallback, this.callbackContext = a)
        }, start: function () {
            if (!this._active) {
                this._active = !0;
                var a = this;
                this._onGamepadConnected = function (b) {
                    return a.onGamepadConnected(b)
                }, this._onGamepadDisconnected = function (b) {
                    return a.onGamepadDisconnected(b)
                }, window.addEventListener("gamepadconnected", this._onGamepadConnected, !1), window.addEventListener("gamepaddisconnected", this._onGamepadDisconnected, !1)
            }
        }, onGamepadConnected: function (a) {
            var b = a.gamepad;
            this._rawPads.push(b), this._gamepads[b.index].connect(b)
        }, onGamepadDisconnected: function (a) {
            var b = a.gamepad;
            for (var c in this._rawPads) this._rawPads[c].index === b.index && this._rawPads.splice(c, 1);
            this._gamepads[b.index].disconnect()
        }, update: function () {
            this._pollGamepads(), this.pad1.pollStatus(), this.pad2.pollStatus(), this.pad3.pollStatus(), this.pad4.pollStatus()
        }, _pollGamepads: function () {
            if (this._active) {
                if (navigator.getGamepads) var a = navigator.getGamepads(); else if (navigator.webkitGetGamepads) var a = navigator.webkitGetGamepads(); else if (navigator.webkitGamepads) var a = navigator.webkitGamepads();
                if (a) {
                    this._rawPads = [];
                    for (var b = !1, c = 0; c < a.length && (typeof a[c] !== this._prevRawGamepadTypes[c] && (b = !0, this._prevRawGamepadTypes[c] = typeof a[c]), a[c] && this._rawPads.push(a[c]), 3 !== c); c++) ;
                    for (var d = 0; d < this._gamepads.length; d++) this._gamepads[d]._rawPad = this._rawPads[d];
                    if (b) {
                        for (var e, f = {
                            rawIndices: {},
                            padIndices: {}
                        }, g = 0; g < this._gamepads.length; g++) if (e = this._gamepads[g], e.connected) for (var h = 0; h < this._rawPads.length; h++) this._rawPads[h].index === e.index && (f.rawIndices[e.index] = !0, f.padIndices[g] = !0);
                        for (var i = 0; i < this._gamepads.length; i++) if (e = this._gamepads[i], !f.padIndices[i]) {
                            this._rawPads.length < 1 && e.disconnect();
                            for (var j = 0; j < this._rawPads.length && !f.padIndices[i]; j++) {
                                var k = this._rawPads[j];
                                if (k) {
                                    if (f.rawIndices[k.index]) {
                                        e.disconnect();
                                        continue
                                    }
                                    e.connect(k), f.rawIndices[k.index] = !0, f.padIndices[i] = !0
                                } else e.disconnect()
                            }
                        }
                    }
                }
            }
        }, setDeadZones: function (a) {
            for (var b = 0; b < this._gamepads.length; b++) this._gamepads[b].deadZone = a
        }, stop: function () {
            this._active = !1, window.removeEventListener("gamepadconnected", this._onGamepadConnected), window.removeEventListener("gamepaddisconnected", this._onGamepadDisconnected)
        }, reset: function () {
            this.update();
            for (var a = 0; a < this._gamepads.length; a++) this._gamepads[a].reset()
        }, justPressed: function (a, b) {
            for (var c = 0; c < this._gamepads.length; c++) if (this._gamepads[c].justPressed(a, b) === !0) return !0;
            return !1
        }, justReleased: function (a, b) {
            for (var c = 0; c < this._gamepads.length; c++) if (this._gamepads[c].justReleased(a, b) === !0) return !0;
            return !1
        }, isDown: function (a) {
            for (var b = 0; b < this._gamepads.length; b++) if (this._gamepads[b].isDown(a) === !0) return !0;
            return !1
        }, destroy: function () {
            this.stop();
            for (var a = 0; a < this._gamepads.length; a++) this._gamepads[a].destroy()
        }
    },c.Gamepad.prototype.constructor = c.Gamepad,Object.defineProperty(c.Gamepad.prototype, "active", {
        get: function () {
            return this._active
        }
    }),Object.defineProperty(c.Gamepad.prototype, "supported", {
        get: function () {
            return this._gamepadSupportAvailable
        }
    }),Object.defineProperty(c.Gamepad.prototype, "padsConnected", {
        get: function () {
            return this._rawPads.length
        }
    }),Object.defineProperty(c.Gamepad.prototype, "pad1", {
        get: function () {
            return this._gamepads[0]
        }
    }),Object.defineProperty(c.Gamepad.prototype, "pad2", {
        get: function () {
            return this._gamepads[1]
        }
    }),Object.defineProperty(c.Gamepad.prototype, "pad3", {
        get: function () {
            return this._gamepads[2]
        }
    }),Object.defineProperty(c.Gamepad.prototype, "pad4", {
        get: function () {
            return this._gamepads[3]
        }
    }),c.Gamepad.BUTTON_0 = 0,c.Gamepad.BUTTON_1 = 1,c.Gamepad.BUTTON_2 = 2,c.Gamepad.BUTTON_3 = 3,c.Gamepad.BUTTON_4 = 4,c.Gamepad.BUTTON_5 = 5,c.Gamepad.BUTTON_6 = 6,c.Gamepad.BUTTON_7 = 7,c.Gamepad.BUTTON_8 = 8,c.Gamepad.BUTTON_9 = 9,c.Gamepad.BUTTON_10 = 10,c.Gamepad.BUTTON_11 = 11,c.Gamepad.BUTTON_12 = 12,c.Gamepad.BUTTON_13 = 13,c.Gamepad.BUTTON_14 = 14,c.Gamepad.BUTTON_15 = 15,c.Gamepad.AXIS_0 = 0,c.Gamepad.AXIS_1 = 1,c.Gamepad.AXIS_2 = 2,c.Gamepad.AXIS_3 = 3,c.Gamepad.AXIS_4 = 4,c.Gamepad.AXIS_5 = 5,c.Gamepad.AXIS_6 = 6,c.Gamepad.AXIS_7 = 7,c.Gamepad.AXIS_8 = 8,c.Gamepad.AXIS_9 = 9,c.Gamepad.XBOX360_A = 0,c.Gamepad.XBOX360_B = 1,c.Gamepad.XBOX360_X = 2,c.Gamepad.XBOX360_Y = 3,c.Gamepad.XBOX360_LEFT_BUMPER = 4,c.Gamepad.XBOX360_RIGHT_BUMPER = 5,c.Gamepad.XBOX360_LEFT_TRIGGER = 6,c.Gamepad.XBOX360_RIGHT_TRIGGER = 7,c.Gamepad.XBOX360_BACK = 8,c.Gamepad.XBOX360_START = 9,c.Gamepad.XBOX360_STICK_LEFT_BUTTON = 10,c.Gamepad.XBOX360_STICK_RIGHT_BUTTON = 11,c.Gamepad.XBOX360_DPAD_LEFT = 14,c.Gamepad.XBOX360_DPAD_RIGHT = 15,c.Gamepad.XBOX360_DPAD_UP = 12,c.Gamepad.XBOX360_DPAD_DOWN = 13,c.Gamepad.XBOX360_STICK_LEFT_X = 0,c.Gamepad.XBOX360_STICK_LEFT_Y = 1,c.Gamepad.XBOX360_STICK_RIGHT_X = 2,c.Gamepad.XBOX360_STICK_RIGHT_Y = 3,c.Gamepad.PS3XC_X = 0,c.Gamepad.PS3XC_CIRCLE = 1,c.Gamepad.PS3XC_SQUARE = 2;
    c.Gamepad.PS3XC_TRIANGLE = 3;
    c.Gamepad.PS3XC_L1 = 4, c.Gamepad.PS3XC_R1 = 5, c.Gamepad.PS3XC_L2 = 6, c.Gamepad.PS3XC_R2 = 7, c.Gamepad.PS3XC_SELECT = 8, c.Gamepad.PS3XC_START = 9, c.Gamepad.PS3XC_STICK_LEFT_BUTTON = 10, c.Gamepad.PS3XC_STICK_RIGHT_BUTTON = 11, c.Gamepad.PS3XC_DPAD_UP = 12, c.Gamepad.PS3XC_DPAD_DOWN = 13, c.Gamepad.PS3XC_DPAD_LEFT = 14, c.Gamepad.PS3XC_DPAD_RIGHT = 15, c.Gamepad.PS3XC_STICK_LEFT_X = 0, c.Gamepad.PS3XC_STICK_LEFT_Y = 1, c.Gamepad.PS3XC_STICK_RIGHT_X = 2, c.Gamepad.PS3XC_STICK_RIGHT_Y = 3, c.SinglePad = function (a, b) {
        this.game = a, this.index = null, this.connected = !1, this.callbackContext = this, this.onConnectCallback = null, this.onDisconnectCallback = null, this.onDownCallback = null, this.onUpCallback = null, this.onAxisCallback = null, this.onFloatCallback = null, this.deadZone = .26, this._padParent = b, this._rawPad = null, this._prevTimestamp = null, this._buttons = [], this._buttonsLen = 0, this._axes = [], this._axesLen = 0
    }, c.SinglePad.prototype = {
        addCallbacks: function (a, b) {
            "undefined" != typeof b && (this.onConnectCallback = "function" == typeof b.onConnect ? b.onConnect : this.onConnectCallback, this.onDisconnectCallback = "function" == typeof b.onDisconnect ? b.onDisconnect : this.onDisconnectCallback, this.onDownCallback = "function" == typeof b.onDown ? b.onDown : this.onDownCallback, this.onUpCallback = "function" == typeof b.onUp ? b.onUp : this.onUpCallback, this.onAxisCallback = "function" == typeof b.onAxis ? b.onAxis : this.onAxisCallback, this.onFloatCallback = "function" == typeof b.onFloat ? b.onFloat : this.onFloatCallback, this.callbackContext = a)
        }, getButton: function (a) {
            return this._buttons[a] ? this._buttons[a] : null
        }, pollStatus: function () {
            if (this.connected && this.game.input.enabled && this.game.input.gamepad.enabled && (!this._rawPad.timestamp || this._rawPad.timestamp !== this._prevTimestamp)) {
                for (var a = 0; a < this._buttonsLen; a++) {
                    var b = isNaN(this._rawPad.buttons[a]) ? this._rawPad.buttons[a].value : this._rawPad.buttons[a];
                    b !== this._buttons[a].value && (1 === b ? this.processButtonDown(a, b) : 0 === b ? this.processButtonUp(a, b) : this.processButtonFloat(a, b))
                }
                for (var c = 0; c < this._axesLen; c++) {
                    var d = this._rawPad.axes[c];
                    d > 0 && d > this.deadZone || d < 0 && d < -this.deadZone ? this.processAxisChange(c, d) : this.processAxisChange(c, 0)
                }
                this._prevTimestamp = this._rawPad.timestamp
            }
        }, connect: function (a) {
            var b = !this.connected;
            this.connected = !0, this.index = a.index, this._rawPad = a, this._buttons = [], this._buttonsLen = a.buttons.length, this._axes = [], this._axesLen = a.axes.length;
            for (var d = 0; d < this._axesLen; d++) this._axes[d] = a.axes[d];
            for (var e in a.buttons) e = parseInt(e, 10), this._buttons[e] = new c.DeviceButton(this, e);
            b && this._padParent.onConnectCallback && this._padParent.onConnectCallback.call(this._padParent.callbackContext, this.index), b && this.onConnectCallback && this.onConnectCallback.call(this.callbackContext)
        }, disconnect: function () {
            var a = this.connected, b = this.index;
            this.connected = !1, this.index = null, this._rawPad = void 0;
            for (var c = 0; c < this._buttonsLen; c++) this._buttons[c].destroy();
            this._buttons = [], this._buttonsLen = 0, this._axes = [], this._axesLen = 0, a && this._padParent.onDisconnectCallback && this._padParent.onDisconnectCallback.call(this._padParent.callbackContext, b), a && this.onDisconnectCallback && this.onDisconnectCallback.call(this.callbackContext)
        }, destroy: function () {
            this._rawPad = void 0;
            for (var a = 0; a < this._buttonsLen; a++) this._buttons[a].destroy();
            this._buttons = [], this._buttonsLen = 0, this._axes = [], this._axesLen = 0, this.onConnectCallback = null, this.onDisconnectCallback = null, this.onDownCallback = null, this.onUpCallback = null, this.onAxisCallback = null, this.onFloatCallback = null
        }, processAxisChange: function (a, b) {
            this._axes[a] !== b && (this._axes[a] = b, this._padParent.onAxisCallback && this._padParent.onAxisCallback.call(this._padParent.callbackContext, this, a, b), this.onAxisCallback && this.onAxisCallback.call(this.callbackContext, this, a, b))
        }, processButtonDown: function (a, b) {
            this._buttons[a] && this._buttons[a].start(null, b), this._padParent.onDownCallback && this._padParent.onDownCallback.call(this._padParent.callbackContext, a, b, this.index), this.onDownCallback && this.onDownCallback.call(this.callbackContext, a, b)
        }, processButtonUp: function (a, b) {
            this._padParent.onUpCallback && this._padParent.onUpCallback.call(this._padParent.callbackContext, a, b, this.index), this.onUpCallback && this.onUpCallback.call(this.callbackContext, a, b), this._buttons[a] && this._buttons[a].stop(null, b)
        }, processButtonFloat: function (a, b) {
            this._padParent.onFloatCallback && this._padParent.onFloatCallback.call(this._padParent.callbackContext, a, b, this.index), this.onFloatCallback && this.onFloatCallback.call(this.callbackContext, a, b), this._buttons[a] && this._buttons[a].padFloat(b)
        }, axis: function (a) {
            return !!this._axes[a] && this._axes[a]
        }, isDown: function (a) {
            return !!this._buttons[a] && this._buttons[a].isDown
        }, isUp: function (a) {
            return !!this._buttons[a] && this._buttons[a].isUp
        }, justReleased: function (a, b) {
            if (this._buttons[a]) return this._buttons[a].justReleased(b)
        }, justPressed: function (a, b) {
            if (this._buttons[a]) return this._buttons[a].justPressed(b)
        }, buttonValue: function (a) {
            return this._buttons[a] ? this._buttons[a].value : null
        }, reset: function () {
            for (var a = 0; a < this._axes.length; a++) this._axes[a] = 0
        }
    }, c.SinglePad.prototype.constructor = c.SinglePad, c.Key = function (a, b) {
        this.game = a, this._enabled = !0, this.event = null, this.isDown = !1, this.isUp = !0, this.altKey = !1, this.ctrlKey = !1, this.shiftKey = !1, this.timeDown = 0, this.duration = 0, this.timeUp = -2500, this.repeats = 0, this.keyCode = b, this.onDown = new c.Signal, this.onHoldCallback = null, this.onHoldContext = null, this.onUp = new c.Signal, this._justDown = !1, this._justUp = !1
    }, c.Key.prototype = {
        update: function () {
            this._enabled && this.isDown && (this.duration = this.game.time.time - this.timeDown, this.repeats++, this.onHoldCallback && this.onHoldCallback.call(this.onHoldContext, this))
        }, processKeyDown: function (a) {
            this._enabled && (this.event = a, this.isDown || (this.altKey = a.altKey, this.ctrlKey = a.ctrlKey, this.shiftKey = a.shiftKey, this.isDown = !0, this.isUp = !1, this.timeDown = this.game.time.time, this.duration = 0, this.repeats = 0, this._justDown = !0, this.onDown.dispatch(this)))
        }, processKeyUp: function (a) {
            this._enabled && (this.event = a, this.isUp || (this.isDown = !1, this.isUp = !0, this.timeUp = this.game.time.time, this.duration = this.game.time.time - this.timeDown, this._justUp = !0, this.onUp.dispatch(this)))
        }, reset: function (a) {
            void 0 === a && (a = !0), this.isDown = !1, this.isUp = !0, this.timeUp = this.game.time.time, this.duration = 0, this._enabled = !0, this._justDown = !1, this._justUp = !1, a && (this.onDown.removeAll(), this.onUp.removeAll(), this.onHoldCallback = null, this.onHoldContext = null)
        }, downDuration: function (a) {
            return void 0 === a && (a = 50), this.isDown && this.duration < a
        }, upDuration: function (a) {
            return void 0 === a && (a = 50), !this.isDown && this.game.time.time - this.timeUp < a
        }
    }, Object.defineProperty(c.Key.prototype, "justDown", {
        get: function () {
            var a = this._justDown;
            return this._justDown = !1, a
        }
    }), Object.defineProperty(c.Key.prototype, "justUp", {
        get: function () {
            var a = this._justUp;
            return this._justUp = !1, a
        }
    }), Object.defineProperty(c.Key.prototype, "enabled", {
        get: function () {
            return this._enabled
        }, set: function (a) {
            a = !!a, a !== this._enabled && (a || this.reset(!1), this._enabled = a)
        }
    }), c.Key.prototype.constructor = c.Key, c.Keyboard = function (a) {
        this.game = a, this.enabled = !0, this.event = null, this.pressEvent = null, this.callbackContext = this, this.onDownCallback = null, this.onPressCallback = null, this.onUpCallback = null, this._keys = [], this._capture = [], this._onKeyDown = null, this._onKeyPress = null, this._onKeyUp = null, this._i = 0, this._k = 0
    }, c.Keyboard.prototype = {
        addCallbacks: function (a, b, c, d) {
            this.callbackContext = a, void 0 !== b && null !== b && (this.onDownCallback = b), void 0 !== c && null !== c && (this.onUpCallback = c), void 0 !== d && null !== d && (this.onPressCallback = d)
        }, addKey: function (a) {
            return this._keys[a] || (this._keys[a] = new c.Key(this.game, a), this.addKeyCapture(a)), this._keys[a]
        }, addKeys: function (a) {
            var b = {};
            for (var c in a) b[c] = this.addKey(a[c]);
            return b
        }, removeKey: function (a) {
            this._keys[a] && (this._keys[a] = null, this.removeKeyCapture(a))
        }, createCursorKeys: function () {
            return this.addKeys({up: c.KeyCode.UP, down: c.KeyCode.DOWN, left: c.KeyCode.LEFT, right: c.KeyCode.RIGHT})
        }, start: function () {
            if (!this.game.device.cocoonJS && null === this._onKeyDown) {
                var a = this;
                this._onKeyDown = function (b) {
                    return a.processKeyDown(b)
                }, this._onKeyUp = function (b) {
                    return a.processKeyUp(b)
                }, this._onKeyPress = function (b) {
                    return a.processKeyPress(b)
                }, window.addEventListener("keydown", this._onKeyDown, !1), window.addEventListener("keyup", this._onKeyUp, !1), window.addEventListener("keypress", this._onKeyPress, !1)
            }
        }, stop: function () {
            window.removeEventListener("keydown", this._onKeyDown), window.removeEventListener("keyup", this._onKeyUp), window.removeEventListener("keypress", this._onKeyPress), this._onKeyDown = null, this._onKeyUp = null, this._onKeyPress = null
        }, destroy: function () {
            this.stop(), this.clearCaptures(), this._keys.length = 0, this._i = 0
        }, addKeyCapture: function (a) {
            if ("object" == typeof a) for (var b in a) this._capture[a[b]] = !0; else this._capture[a] = !0
        }, removeKeyCapture: function (a) {
            delete this._capture[a]
        }, clearCaptures: function () {
            this._capture = {}
        }, update: function () {
            for (this._i = this._keys.length; this._i--;) this._keys[this._i] && this._keys[this._i].update()
        }, processKeyDown: function (a) {
            if (this.event = a, this.game.input.enabled && this.enabled) {
                var b = a.keyCode;
                this._capture[b] && a.preventDefault(), this._keys[b] || (this._keys[b] = new c.Key(this.game, b)), this._keys[b].processKeyDown(a), this._k = b, this.onDownCallback && this.onDownCallback.call(this.callbackContext, a)
            }
        }, processKeyPress: function (a) {
            this.pressEvent = a, this.game.input.enabled && this.enabled && this.onPressCallback && this.onPressCallback.call(this.callbackContext, String.fromCharCode(a.charCode), a)
        }, processKeyUp: function (a) {
            if (this.event = a, this.game.input.enabled && this.enabled) {
                var b = a.keyCode;
                this._capture[b] && a.preventDefault(), this._keys[b] || (this._keys[b] = new c.Key(this.game, b)), this._keys[b].processKeyUp(a), this.onUpCallback && this.onUpCallback.call(this.callbackContext, a)
            }
        }, reset: function (a) {
            void 0 === a && (a = !0), this.event = null;
            for (var b = this._keys.length; b--;) this._keys[b] && this._keys[b].reset(a)
        }, downDuration: function (a, b) {
            return this._keys[a] ? this._keys[a].downDuration(b) : null
        }, upDuration: function (a, b) {
            return this._keys[a] ? this._keys[a].upDuration(b) : null
        }, isDown: function (a) {
            return this._keys[a] ? this._keys[a].isDown : null
        }
    }, Object.defineProperty(c.Keyboard.prototype, "lastChar", {
        get: function () {
            return 32 === this.event.charCode ? "" : String.fromCharCode(this.pressEvent.charCode)
        }
    }), Object.defineProperty(c.Keyboard.prototype, "lastKey", {
        get: function () {
            return this._keys[this._k]
        }
    }), c.Keyboard.prototype.constructor = c.Keyboard, c.KeyCode = {
        A: "A".charCodeAt(0),
        B: "B".charCodeAt(0),
        C: "C".charCodeAt(0),
        D: "D".charCodeAt(0),
        E: "E".charCodeAt(0),
        F: "F".charCodeAt(0),
        G: "G".charCodeAt(0),
        H: "H".charCodeAt(0),
        I: "I".charCodeAt(0),
        J: "J".charCodeAt(0),
        K: "K".charCodeAt(0),
        L: "L".charCodeAt(0),
        M: "M".charCodeAt(0),
        N: "N".charCodeAt(0),
        O: "O".charCodeAt(0),
        P: "P".charCodeAt(0),
        Q: "Q".charCodeAt(0),
        R: "R".charCodeAt(0),
        S: "S".charCodeAt(0),
        T: "T".charCodeAt(0),
        U: "U".charCodeAt(0),
        V: "V".charCodeAt(0),
        W: "W".charCodeAt(0),
        X: "X".charCodeAt(0),
        Y: "Y".charCodeAt(0),
        Z: "Z".charCodeAt(0),
        ZERO: "0".charCodeAt(0),
        ONE: "1".charCodeAt(0),
        TWO: "2".charCodeAt(0),
        THREE: "3".charCodeAt(0),
        FOUR: "4".charCodeAt(0),
        FIVE: "5".charCodeAt(0),
        SIX: "6".charCodeAt(0),
        SEVEN: "7".charCodeAt(0),
        EIGHT: "8".charCodeAt(0),
        NINE: "9".charCodeAt(0),
        NUMPAD_0: 96,
        NUMPAD_1: 97,
        NUMPAD_2: 98,
        NUMPAD_3: 99,
        NUMPAD_4: 100,
        NUMPAD_5: 101,
        NUMPAD_6: 102,
        NUMPAD_7: 103,
        NUMPAD_8: 104,
        NUMPAD_9: 105,
        NUMPAD_MULTIPLY: 106,
        NUMPAD_ADD: 107,
        NUMPAD_ENTER: 108,
        NUMPAD_SUBTRACT: 109,
        NUMPAD_DECIMAL: 110,
        NUMPAD_DIVIDE: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        F13: 124,
        F14: 125,
        F15: 126,
        COLON: 186,
        EQUALS: 187,
        COMMA: 188,
        UNDERSCORE: 189,
        PERIOD: 190,
        QUESTION_MARK: 191,
        TILDE: 192,
        OPEN_BRACKET: 219,
        BACKWARD_SLASH: 220,
        CLOSED_BRACKET: 221,
        QUOTES: 222,
        BACKSPACE: 8,
        TAB: 9,
        CLEAR: 12,
        ENTER: 13,
        SHIFT: 16,
        CONTROL: 17,
        ALT: 18,
        CAPS_LOCK: 20,
        ESC: 27,
        SPACEBAR: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        PLUS: 43,
        MINUS: 44,
        INSERT: 45,
        DELETE: 46,
        HELP: 47,
        NUM_LOCK: 144
    };
    for (var e in c.KeyCode) c.KeyCode.hasOwnProperty(e) && !e.match(/[a-z]/) && (c.Keyboard[e] = c.KeyCode[e]);
    c.Component = function () {
    }, c.Component.Angle = function () {
    }, c.Component.Angle.prototype = {
        angle: {
            get: function () {
                return c.Math.wrapAngle(c.Math.radToDeg(this.rotation))
            }, set: function (a) {
                this.rotation = c.Math.degToRad(c.Math.wrapAngle(a))
            }
        }
    }, c.Component.Animation = function () {
    }, c.Component.Animation.prototype = {
        play: function (a, b, c, d) {
            if (this.animations) return this.animations.play(a, b, c, d)
        }
    }, c.Component.AutoCull = function () {
    }, c.Component.AutoCull.prototype = {
        autoCull: !1, inCamera: {
            get: function () {
                return this.autoCull || this.checkWorldBounds || (this._bounds.copyFrom(this.getBounds()), this._bounds.x += this.game.camera.view.x, this._bounds.y += this.game.camera.view.y), this.game.world.camera.view.intersects(this._bounds)
            }
        }
    }, c.Component.Bounds = function () {
    }, c.Component.Bounds.prototype = {
        offsetX: {
            get: function () {
                return this.anchor.x * this.width
            }
        }, offsetY: {
            get: function () {
                return this.anchor.y * this.height
            }
        }, centerX: {
            get: function () {
                return this.x - this.offsetX + .5 * this.width
            }, set: function (a) {
                this.x = a + this.offsetX - .5 * this.width
            }
        }, centerY: {
            get: function () {
                return this.y - this.offsetY + .5 * this.height
            }, set: function (a) {
                this.y = a + this.offsetY - .5 * this.height
            }
        }, left: {
            get: function () {
                return this.x - this.offsetX
            }, set: function (a) {
                this.x = a + this.offsetX
            }
        }, right: {
            get: function () {
                return this.x + this.width - this.offsetX
            }, set: function (a) {
                this.x = a - this.width + this.offsetX
            }
        }, top: {
            get: function () {
                return this.y - this.offsetY
            }, set: function (a) {
                this.y = a + this.offsetY
            }
        }, bottom: {
            get: function () {
                return this.y + this.height - this.offsetY
            }, set: function (a) {
                this.y = a - this.height + this.offsetY
            }
        }, alignIn: function (a, b, d, e) {
            switch (void 0 === d && (d = 0), void 0 === e && (e = 0), b) {
                default:
                case c.TOP_LEFT:
                    this.left = a.left - d, this.top = a.top - e;
                    break;
                case c.TOP_CENTER:
                    this.centerX = a.centerX + d, this.top = a.top - e;
                    break;
                case c.TOP_RIGHT:
                    this.right = a.right + d, this.top = a.top - e;
                    break;
                case c.LEFT_CENTER:
                    this.left = a.left - d, this.centerY = a.centerY + e;
                    break;
                case c.CENTER:
                    this.centerX = a.centerX + d, this.centerY = a.centerY + e;
                    break;
                case c.RIGHT_CENTER:
                    this.right = a.right + d, this.centerY = a.centerY + e;
                    break;
                case c.BOTTOM_LEFT:
                    this.left = a.left - d, this.bottom = a.bottom + e;
                    break;
                case c.BOTTOM_CENTER:
                    this.centerX = a.centerX + d, this.bottom = a.bottom + e;
                    break;
                case c.BOTTOM_RIGHT:
                    this.right = a.right + d, this.bottom = a.bottom + e
            }
            return this
        }, alignTo: function (a, b, d, e) {
            switch (void 0 === d && (d = 0), void 0 === e && (e = 0), b) {
                default:
                case c.TOP_LEFT:
                    this.left = a.left - d, this.bottom = a.top - e;
                    break;
                case c.TOP_CENTER:
                    this.centerX = a.centerX + d, this.bottom = a.top - e;
                    break;
                case c.TOP_RIGHT:
                    this.right = a.right + d, this.bottom = a.top - e;
                    break;
                case c.LEFT_TOP:
                    this.right = a.left - d, this.top = a.top - e;
                    break;
                case c.LEFT_CENTER:
                    this.right = a.left - d, this.centerY = a.centerY + e;
                    break;
                case c.LEFT_BOTTOM:
                    this.right = a.left - d, this.bottom = a.bottom + e;
                    break;
                case c.RIGHT_TOP:
                    this.left = a.right + d, this.top = a.top - e;
                    break;
                case c.RIGHT_CENTER:
                    this.left = a.right + d, this.centerY = a.centerY + e;
                    break;
                case c.RIGHT_BOTTOM:
                    this.left = a.right + d, this.bottom = a.bottom + e;
                    break;
                case c.BOTTOM_LEFT:
                    this.left = a.left - d, this.top = a.bottom + e;
                    break;
                case c.BOTTOM_CENTER:
                    this.centerX = a.centerX + d, this.top = a.bottom + e;
                    break;
                case c.BOTTOM_RIGHT:
                    this.right = a.right + d, this.top = a.bottom + e
            }
            return this
        }
    }, c.Group.prototype.alignIn = c.Component.Bounds.prototype.alignIn, c.Group.prototype.alignTo = c.Component.Bounds.prototype.alignTo, c.Component.BringToTop = function () {
    }, c.Component.BringToTop.prototype.bringToTop = function () {
        return this.parent && this.parent.bringToTop(this), this
    }, c.Component.BringToTop.prototype.sendToBack = function () {
        return this.parent && this.parent.sendToBack(this), this
    }, c.Component.BringToTop.prototype.moveUp = function () {
        return this.parent && this.parent.moveUp(this), this
    }, c.Component.BringToTop.prototype.moveDown = function () {
        return this.parent && this.parent.moveDown(this), this
    }, c.Component.Core = function () {
    }, c.Component.Core.install = function (a) {
        c.Utils.mixinPrototype(this, c.Component.Core.prototype), this.components = {};
        for (var b = 0; b < a.length; b++) {
            var d = a[b], e = !1;
            "Destroy" === d && (e = !0), c.Utils.mixinPrototype(this, c.Component[d].prototype, e), this.components[d] = !0
        }
    }, c.Component.Core.init = function (a, b, d, e, f) {
        this.game = a, this.key = e, this.data = {}, this.position.set(b, d), this.world = new c.Point(b, d), this.previousPosition = new c.Point(b, d), this.events = new c.Events(this), this._bounds = new c.Rectangle, this.components.PhysicsBody && (this.body = this.body), this.components.Animation && (this.animations = new c.AnimationManager(this)), this.components.LoadTexture && null !== e && this.loadTexture(e, f), this.components.FixedToCamera && (this.cameraOffset = new c.Point(b, d))
    }, c.Component.Core.preUpdate = function () {
        if (this.pendingDestroy) return void this.destroy();
        if (this.previousPosition.set(this.world.x, this.world.y), this.previousRotation = this.rotation, !this.exists || !this.parent.exists) return this.renderOrderID = -1, !1;
        this.world.setTo(this.game.camera.x + this.worldTransform.tx, this.game.camera.y + this.worldTransform.ty), this.visible && (this.renderOrderID = this.game.stage.currentRenderOrderID++), this.animations && this.animations.update(), this.body && this.body.preUpdate();
        for (var a = 0; a < this.children.length; a++) this.children[a].preUpdate();
        return !0
    }, c.Component.Core.prototype = {
        game: null,
        name: "",
        data: {},
        components: {},
        z: 0,
        events: void 0,
        animations: void 0,
        key: "",
        world: null,
        debug: !1,
        previousPosition: null,
        previousRotation: 0,
        renderOrderID: 0,
        fresh: !0,
        pendingDestroy: !1,
        _bounds: null,
        _exists: !0,
        exists: {
            get: function () {
                return this._exists
            }, set: function (a) {
                a ? (this._exists = !0, this.body && this.body.type === c.Physics.P2JS && this.body.addToWorld(), this.visible = !0) : (this._exists = !1, this.body && this.body.type === c.Physics.P2JS && this.body.removeFromWorld(), this.visible = !1)
            }
        },
        update: function () {
        },
        postUpdate: function () {
            this.customRender && this.key.render(), this.components.PhysicsBody && c.Component.PhysicsBody.postUpdate.call(this), this.components.FixedToCamera && c.Component.FixedToCamera.postUpdate.call(this);
            for (var a = 0; a < this.children.length; a++) this.children[a].postUpdate()
        }
    }, c.Component.Crop = function () {
    }, c.Component.Crop.prototype = {
        cropRect: null, _crop: null, crop: function (a, b) {
            void 0 === b && (b = !1), a ? (b && null !== this.cropRect ? this.cropRect.setTo(a.x, a.y, a.width, a.height) : b && null === this.cropRect ? this.cropRect = new c.Rectangle(a.x, a.y, a.width, a.height) : this.cropRect = a, this.updateCrop()) : (this._crop = null, this.cropRect = null, this.resetFrame())
        }, updateCrop: function () {
            if (this.cropRect) {
                var a = this.texture.crop.x, b = this.texture.crop.y, d = this.texture.crop.width,
                    e = this.texture.crop.height;
                this._crop = c.Rectangle.clone(this.cropRect, this._crop), this._crop.x += this._frame.x, this._crop.y += this._frame.y;
                var f = Math.max(this._frame.x, this._crop.x), g = Math.max(this._frame.y, this._crop.y),
                    h = Math.min(this._frame.right, this._crop.right) - f,
                    i = Math.min(this._frame.bottom, this._crop.bottom) - g;
                this.texture.crop.x = f, this.texture.crop.y = g, this.texture.crop.width = h, this.texture.crop.height = i, this.texture.frame.width = Math.min(h, this.cropRect.width), this.texture.frame.height = Math.min(i, this.cropRect.height), this.texture.width = this.texture.frame.width, this.texture.height = this.texture.frame.height, this.texture._updateUvs(), 16777215 === this.tint || a === f && b === g && d === h && e === i || (this.texture.requiresReTint = !0)
            }
        }
    }, c.Component.Delta = function () {
    }, c.Component.Delta.prototype = {
        deltaX: {
            get: function () {
                return this.world.x - this.previousPosition.x
            }
        }, deltaY: {
            get: function () {
                return this.world.y - this.previousPosition.y
            }
        }, deltaZ: {
            get: function () {
                return this.rotation - this.previousRotation
            }
        }
    }, c.Component.Destroy = function () {
    }, c.Component.Destroy.prototype = {
        destroyPhase: !1, destroy: function (a, b) {
            if (null !== this.game && !this.destroyPhase) {
                void 0 === a && (a = !0), void 0 === b && (b = !1), this.destroyPhase = !0, this.events && this.events.onDestroy$dispatch(this), this.parent && (this.parent instanceof c.Group ? this.parent.remove(this) : this.parent.removeChild(this)), this.input && this.input.destroy(), this.animations && this.animations.destroy(), this.body && this.body.destroy(), this.events && this.events.destroy(), this.game.tweens.removeFrom(this);
                var d = this.children.length;
                if (a) for (; d--;) this.children[d].destroy(a); else for (; d--;) this.removeChild(this.children[d]);
                this._crop && (this._crop = null, this.cropRect = null), this._frame && (this._frame = null), c.Video && this.key instanceof c.Video && this.key.onChangeSource.remove(this.resizeFrame, this), c.BitmapText && this._glyphs && (this._glyphs = []), this.alive = !1, this.exists = !1, this.visible = !1, this.filters = null, this.mask = null, this.game = null, this.data = {}, this.renderable = !1, this.transformCallback && (this.transformCallback = null, this.transformCallbackContext = null), this.hitArea = null, this.parent = null, this.stage = null, this.worldTransform = null, this.filterArea = null, this._bounds = null, this._currentBounds = null, this._mask = null, this._destroyCachedSprite(), b && this.texture.destroy(!0), this.destroyPhase = !1, this.pendingDestroy = !1
            }
        }
    }, c.Events = function (a) {
        this.parent = a
    }, c.Events.prototype = {
        destroy: function () {
            this._parent = null, this._onDestroy && this._onDestroy.dispose(), this._onAddedToGroup && this._onAddedToGroup.dispose(), this._onRemovedFromGroup && this._onRemovedFromGroup.dispose(), this._onRemovedFromWorld && this._onRemovedFromWorld.dispose(), this._onKilled && this._onKilled.dispose(), this._onRevived && this._onRevived.dispose(), this._onEnterBounds && this._onEnterBounds.dispose(), this._onOutOfBounds && this._onOutOfBounds.dispose(), this._onInputOver && this._onInputOver.dispose(), this._onInputOut && this._onInputOut.dispose(), this._onInputDown && this._onInputDown.dispose(), this._onInputUp && this._onInputUp.dispose(), this._onDragStart && this._onDragStart.dispose(), this._onDragUpdate && this._onDragUpdate.dispose(), this._onDragStop && this._onDragStop.dispose(), this._onAnimationStart && this._onAnimationStart.dispose(), this._onAnimationComplete && this._onAnimationComplete.dispose(), this._onAnimationLoop && this._onAnimationLoop.dispose()
        },
        onAddedToGroup: null,
        onRemovedFromGroup: null,
        onRemovedFromWorld: null,
        onDestroy: null,
        onKilled: null,
        onRevived: null,
        onOutOfBounds: null,
        onEnterBounds: null,
        onInputOver: null,
        onInputOut: null,
        onInputDown: null,
        onInputUp: null,
        onDragStart: null,
        onDragUpdate: null,
        onDragStop: null,
        onAnimationStart: null,
        onAnimationComplete: null,
        onAnimationLoop: null
    }, c.Events.prototype.constructor = c.Events;
    for (var f in c.Events.prototype) c.Events.prototype.hasOwnProperty(f) && 0 === f.indexOf("on") && null === c.Events.prototype[f] && !function (a, b) {
        "use strict";
        Object.defineProperty(c.Events.prototype, a, {
            get: function () {
                return this[b] || (this[b] = new c.Signal)
            }
        }), c.Events.prototype[a + "$dispatch"] = function () {
            return this[b] ? this[b].dispatch.apply(this[b], arguments) : null
        }
    }(f, "_" + f);
    c.Component.FixedToCamera = function () {
    }, c.Component.FixedToCamera.postUpdate = function () {
        this.fixedToCamera && (this.position.x = (this.game.camera.view.x + this.cameraOffset.x) / this.game.camera.scale.x, this.position.y = (this.game.camera.view.y + this.cameraOffset.y) / this.game.camera.scale.y)
    }, c.Component.FixedToCamera.prototype = {
        _fixedToCamera: !1, fixedToCamera: {
            get: function () {
                return this._fixedToCamera
            }, set: function (a) {
                a ? (this._fixedToCamera = !0, this.cameraOffset.set(this.x, this.y)) : this._fixedToCamera = !1
            }
        }, cameraOffset: new c.Point
    }, c.Component.Health = function () {
    }, c.Component.Health.prototype = {
        health: 1, maxHealth: 100, damage: function (a) {
            return this.alive && (this.health -= a, this.health <= 0 && this.kill()), this
        }, setHealth: function (a) {
            return this.health = a, this.health > this.maxHealth && (this.health = this.maxHealth), this
        }, heal: function (a) {
            return this.alive && (this.health += a, this.health > this.maxHealth && (this.health = this.maxHealth)), this
        }
    }, c.Component.InCamera = function () {
    }, c.Component.InCamera.prototype = {
        inCamera: {
            get: function () {
                return this.game.world.camera.view.intersects(this._bounds)
            }
        }
    }, c.Component.InputEnabled = function () {
    }, c.Component.InputEnabled.prototype = {
        input: null, inputEnabled: {
            get: function () {
                return this.input && this.input.enabled
            }, set: function (a) {
                a ? null === this.input ? (this.input = new c.InputHandler(this), this.input.start()) : this.input && !this.input.enabled && this.input.start() : this.input && this.input.enabled && this.input.stop()
            }
        }
    }, c.Component.InWorld = function () {
    }, c.Component.InWorld.preUpdate = function () {
        if (this.autoCull || this.checkWorldBounds) {
            if (this._bounds.copyFrom(this.getBounds()), this._bounds.x += this.game.camera.view.x, this._bounds.y += this.game.camera.view.y, this.autoCull) if (this.game.world.camera.view.intersects(this._bounds)) this.renderable = !0, this.game.world.camera.totalInView++; else if (this.renderable = !1, this.outOfCameraBoundsKill) return this.kill(), !1;
            if (this.checkWorldBounds) if (this._outOfBoundsFired && this.game.world.bounds.intersects(this._bounds)) this._outOfBoundsFired = !1, this.events.onEnterBounds$dispatch(this); else if (!this._outOfBoundsFired && !this.game.world.bounds.intersects(this._bounds) && (this._outOfBoundsFired = !0, this.events.onOutOfBounds$dispatch(this), this.outOfBoundsKill)) return this.kill(), !1
        }
        return !0
    }, c.Component.InWorld.prototype = {
        checkWorldBounds: !1,
        outOfBoundsKill: !1,
        outOfCameraBoundsKill: !1,
        _outOfBoundsFired: !1,
        inWorld: {
            get: function () {
                return this.game.world.bounds.intersects(this.getBounds())
            }
        }
    }, c.Component.LifeSpan = function () {
    }, c.Component.LifeSpan.preUpdate = function () {
        return !(this.lifespan > 0 && (this.lifespan -= this.game.time.physicsElapsedMS, this.lifespan <= 0)) || (this.kill(), !1)
    }, c.Component.LifeSpan.prototype = {
        alive: !0, lifespan: 0, revive: function (a) {
            return void 0 === a && (a = 100), this.alive = !0, this.exists = !0, this.visible = !0, "function" == typeof this.setHealth && this.setHealth(a), this.events && this.events.onRevived$dispatch(this), this
        }, kill: function () {
            return this.alive = !1, this.exists = !1, this.visible = !1, this.events && this.events.onKilled$dispatch(this), this
        }
    }, c.Component.LoadTexture = function () {
    }, c.Component.LoadTexture.prototype = {
        customRender: !1, _frame: null, loadTexture: function (a, b, d) {
            a === c.PENDING_ATLAS ? (a = b, b = 0) : b = b || 0, (d || void 0 === d) && this.animations && this.animations.stop(), this.key = a, this.customRender = !1;
            var e = this.game.cache, f = !0, g = !this.texture.baseTexture.scaleMode;
            if (c.RenderTexture && a instanceof c.RenderTexture) this.key = a.key, this.setTexture(a); else if (c.BitmapData && a instanceof c.BitmapData) this.customRender = !0, this.setTexture(a.texture), f = e.hasFrameData(a.key, c.Cache.BITMAPDATA) ? !this.animations.loadFrameData(e.getFrameData(a.key, c.Cache.BITMAPDATA), b) : !this.animations.loadFrameData(a.frameData, 0); else if (c.Video && a instanceof c.Video) {
                this.customRender = !0;
                var h = a.texture.valid;
                this.setTexture(a.texture), this.setFrame(a.texture.frame.clone()), a.onChangeSource.add(this.resizeFrame, this), this.texture.valid = h
            } else if (c.Tilemap && a instanceof c.TilemapLayer) this.setTexture(PIXI.Texture.fromCanvas(a.canvas)); else if (a instanceof PIXI.Texture) this.setTexture(a); else {
                var i = e.getImage(a, !0);
                this.key = i.key, this.setTexture(new PIXI.Texture(i.base)), "__default" === a ? this.texture.baseTexture.skipRender = !0 : this.texture.baseTexture.skipRender = !1, f = !this.animations.loadFrameData(i.frameData, b)
            }
            f && (this._frame = c.Rectangle.clone(this.texture.frame)), g || (this.texture.baseTexture.scaleMode = 1)
        }, setFrame: function (a) {
            this._frame = a, this.texture.frame.x = a.x, this.texture.frame.y = a.y, this.texture.frame.width = a.width, this.texture.frame.height = a.height, this.texture.crop.x = a.x, this.texture.crop.y = a.y, this.texture.crop.width = a.width, this.texture.crop.height = a.height, a.trimmed ? (this.texture.trim ? (this.texture.trim.x = a.spriteSourceSizeX, this.texture.trim.y = a.spriteSourceSizeY, this.texture.trim.width = a.sourceSizeW, this.texture.trim.height = a.sourceSizeH) : this.texture.trim = {
                x: a.spriteSourceSizeX,
                y: a.spriteSourceSizeY,
                width: a.sourceSizeW,
                height: a.sourceSizeH
            }, this.texture.width = a.sourceSizeW, this.texture.height = a.sourceSizeH, this.texture.frame.width = a.sourceSizeW, this.texture.frame.height = a.sourceSizeH) : !a.trimmed && this.texture.trim && (this.texture.trim = null), this.cropRect && this.updateCrop(), this.texture.requiresReTint = !0, this.texture._updateUvs(), this.tilingTexture && (this.refreshTexture = !0)
        }, resizeFrame: function (a, b, c) {
            this.texture.frame.resize(b, c), this.texture.setFrame(this.texture.frame)
        }, resetFrame: function () {
            this._frame && this.setFrame(this._frame)
        }, frame: {
            get: function () {
                return this.animations.frame
            }, set: function (a) {
                this.animations.frame = a
            }
        }, frameName: {
            get: function () {
                return this.animations.frameName
            }, set: function (a) {
                this.animations.frameName = a
            }
        }
    }, c.Component.Overlap = function () {
    }, c.Component.Overlap.prototype = {
        overlap: function (a) {
            return c.Rectangle.intersects(this.getBounds(), a.getBounds())
        }
    }, c.Component.PhysicsBody = function () {
    }, c.Component.PhysicsBody.preUpdate = function () {
        return this.fresh && this.exists ? (this.world.setTo(this.parent.position.x + this.position.x, this.parent.position.y + this.position.y), this.worldTransform.tx = this.world.x, this.worldTransform.ty = this.world.y, this.previousPosition.set(this.world.x, this.world.y), this.previousRotation = this.rotation, this.body && this.body.preUpdate(), this.fresh = !1, !1) : (this.previousPosition.set(this.world.x, this.world.y), this.previousRotation = this.rotation, !(!this._exists || !this.parent.exists) || (this.renderOrderID = -1, !1))
    }, c.Component.PhysicsBody.postUpdate = function () {
        this.exists && this.body && this.body.postUpdate()
    }, c.Component.PhysicsBody.prototype = {
        body: null, x: {
            get: function () {
                return this.position.x
            }, set: function (a) {
                this.position.x = a, this.body && !this.body.dirty && (this.body._reset = !0)
            }
        }, y: {
            get: function () {
                return this.position.y
            }, set: function (a) {
                this.position.y = a, this.body && !this.body.dirty && (this.body._reset = !0)
            }
        }
    }, c.Component.Reset = function () {
    }, c.Component.Reset.prototype.reset = function (a, b, c) {
        return void 0 === c && (c = 1), this.world.set(a, b), this.position.set(a, b), this.fresh = !0, this.exists = !0, this.visible = !0, this.renderable = !0, this.components.InWorld && (this._outOfBoundsFired = !1), this.components.LifeSpan && (this.alive = !0, this.health = c), this.components.PhysicsBody && this.body && this.body.reset(a, b, !1, !1), this
    }, c.Component.ScaleMinMax = function () {
    }, c.Component.ScaleMinMax.prototype = {
        transformCallback: null,
        transformCallbackContext: this,
        scaleMin: null,
        scaleMax: null,
        checkTransform: function (a) {
            this.scaleMin && (a.a < this.scaleMin.x && (a.a = this.scaleMin.x), a.d < this.scaleMin.y && (a.d = this.scaleMin.y)), this.scaleMax && (a.a > this.scaleMax.x && (a.a = this.scaleMax.x), a.d > this.scaleMax.y && (a.d = this.scaleMax.y))
        },
        setScaleMinMax: function (a, b, d, e) {
            void 0 === b ? b = d = e = a : void 0 === d && (d = e = b, b = a), null === a ? this.scaleMin = null : this.scaleMin ? this.scaleMin.set(a, b) : this.scaleMin = new c.Point(a, b), null === d ? this.scaleMax = null : this.scaleMax ? this.scaleMax.set(d, e) : this.scaleMax = new c.Point(d, e), null === this.scaleMin ? this.transformCallback = null : (this.transformCallback = this.checkTransform, this.transformCallbackContext = this)
        }
    }, c.Component.Smoothed = function () {
    }, c.Component.Smoothed.prototype = {
        smoothed: {
            get: function () {
                return !this.texture.baseTexture.scaleMode
            }, set: function (a) {
                a ? this.texture && (this.texture.baseTexture.scaleMode = 0) : this.texture && (this.texture.baseTexture.scaleMode = 1)
            }
        }
    }, c.GameObjectFactory = function (a) {
        this.game = a, this.world = this.game.world
    }, c.GameObjectFactory.prototype = {
        existing: function (a) {
            return this.world.add(a)
        }, weapon: function (a, b, d, e) {
            var f = this.game.plugins.add(c.Weapon);
            return f.createBullets(a, b, d, e), f
        }, image: function (a, b, d, e, f) {
            return void 0 === f && (f = this.world), f.add(new c.Image(this.game, a, b, d, e))
        }, sprite: function (a, b, c, d, e) {
            return void 0 === e && (e = this.world), e.create(a, b, c, d)
        }, creature: function (a, b, d, e, f) {
            void 0 === f && (f = this.world);
            var g = new c.Creature(this.game, a, b, d, e);
            return f.add(g), g
        }, tween: function (a) {
            return this.game.tweens.create(a)
        }, group: function (a, b, d, e, f) {
            return new c.Group(this.game, a, b, d, e, f)
        }, physicsGroup: function (a, b, d, e) {
            return new c.Group(this.game, b, d, e, (!0), a)
        }, spriteBatch: function (a, b, d) {
            return void 0 === a && (a = null), void 0 === b && (b = "group"), void 0 === d && (d = !1), new c.SpriteBatch(this.game, a, b, d)
        }, audio: function (a, b, c, d) {
            return this.game.sound.add(a, b, c, d)
        }, sound: function (a, b, c, d) {
            return this.game.sound.add(a, b, c, d)
        }, audioSprite: function (a) {
            return this.game.sound.addSprite(a)
        }, tileSprite: function (a, b, d, e, f, g, h) {
            return void 0 === h && (h = this.world), h.add(new c.TileSprite(this.game, a, b, d, e, f, g))
        }, rope: function (a, b, d, e, f, g) {
            return void 0 === g && (g = this.world), g.add(new c.Rope(this.game, a, b, d, e, f))
        }, text: function (a, b, d, e, f) {
            return void 0 === f && (f = this.world), f.add(new c.Text(this.game, a, b, d, e))
        }, button: function (a, b, d, e, f, g, h, i, j, k) {
            return void 0 === k && (k = this.world), k.add(new c.Button(this.game, a, b, d, e, f, g, h, i, j))
        }, graphics: function (a, b, d) {
            return void 0 === d && (d = this.world), d.add(new c.Graphics(this.game, a, b))
        }, emitter: function (a, b, d) {
            return this.game.particles.add(new c.Particles.Arcade.Emitter(this.game, a, b, d))
        }, retroFont: function (a, b, d, e, f, g, h, i, j) {
            return new c.RetroFont(this.game, a, b, d, e, f, g, h, i, j)
        }, bitmapText: function (a, b, d, e, f, g) {
            return void 0 === g && (g = this.world), g.add(new c.BitmapText(this.game, a, b, d, e, f))
        }, tilemap: function (a, b, d, e, f) {
            return new c.Tilemap(this.game, a, b, d, e, f)
        }, renderTexture: function (a, b, d, e) {
            void 0 !== d && "" !== d || (d = this.game.rnd.uuid()), void 0 === e && (e = !1);
            var f = new c.RenderTexture(this.game, a, b, d);
            return e && this.game.cache.addRenderTexture(d, f), f
        }, video: function (a, b) {
            return new c.Video(this.game, a, b)
        }, bitmapData: function (a, b, d, e) {
            void 0 === e && (e = !1), void 0 !== d && "" !== d || (d = this.game.rnd.uuid());
            var f = new c.BitmapData(this.game, d, a, b);
            return e && this.game.cache.addBitmapData(d, f), f
        }, filter: function (a) {
            var b = Array.prototype.slice.call(arguments, 1), a = new c.Filter[a](this.game);
            return a.init.apply(a, b), a
        }, plugin: function (a) {
            return this.game.plugins.add(a)
        }
    }, c.GameObjectFactory.prototype.constructor = c.GameObjectFactory, c.GameObjectCreator = function (a) {
        this.game = a, this.world = this.game.world
    }, c.GameObjectCreator.prototype = {
        image: function (a, b, d, e) {
            return new c.Image(this.game, a, b, d, e)
        }, sprite: function (a, b, d, e) {
            return new c.Sprite(this.game, a, b, d, e)
        }, tween: function (a) {
            return new c.Tween(a, this.game, this.game.tweens)
        }, group: function (a, b, d, e, f) {
            return new c.Group(this.game, a, b, d, e, f)
        }, spriteBatch: function (a, b, d) {
            return void 0 === b && (b = "group"), void 0 === d && (d = !1), new c.SpriteBatch(this.game, a, b, d)
        }, audio: function (a, b, c, d) {
            return this.game.sound.add(a, b, c, d)
        }, audioSprite: function (a) {
            return this.game.sound.addSprite(a)
        }, sound: function (a, b, c, d) {
            return this.game.sound.add(a, b, c, d)
        }, tileSprite: function (a, b, d, e, f, g) {
            return new c.TileSprite(this.game, a, b, d, e, f, g)
        }, rope: function (a, b, d, e, f) {
            return new c.Rope(this.game, a, b, d, e, f)
        }, text: function (a, b, d, e) {
            return new c.Text(this.game, a, b, d, e)
        }, button: function (a, b, d, e, f, g, h, i, j) {
            return new c.Button(this.game, a, b, d, e, f, g, h, i, j)
        }, graphics: function (a, b) {
            return new c.Graphics(this.game, a, b)
        }, emitter: function (a, b, d) {
            return new c.Particles.Arcade.Emitter(this.game, a, b, d)
        }, retroFont: function (a, b, d, e, f, g, h, i, j) {
            return new c.RetroFont(this.game, a, b, d, e, f, g, h, i, j)
        }, bitmapText: function (a, b, d, e, f, g) {
            return new c.BitmapText(this.game, a, b, d, e, f, g)
        }, tilemap: function (a, b, d, e, f) {
            return new c.Tilemap(this.game, a, b, d, e, f)
        }, renderTexture: function (a, b, d, e) {
            void 0 !== d && "" !== d || (d = this.game.rnd.uuid()), void 0 === e && (e = !1);
            var f = new c.RenderTexture(this.game, a, b, d);
            return e && this.game.cache.addRenderTexture(d, f), f
        }, bitmapData: function (a, b, d, e) {
            void 0 === e && (e = !1), void 0 !== d && "" !== d || (d = this.game.rnd.uuid());
            var f = new c.BitmapData(this.game, d, a, b);
            return e && this.game.cache.addBitmapData(d, f), f
        }, filter: function (a) {
            var b = Array.prototype.slice.call(arguments, 1), a = new c.Filter[a](this.game);
            return a.init.apply(a, b), a
        }
    }, c.GameObjectCreator.prototype.constructor = c.GameObjectCreator, c.Sprite = function (a, b, d, e, f) {
        b = b || 0, d = d || 0, e = e || null, f = f || null, this.type = c.SPRITE, this.physicsType = c.SPRITE, PIXI.Sprite.call(this, c.Cache.DEFAULT), c.Component.Core.init.call(this, a, b, d, e, f)
    }, c.Sprite.prototype = Object.create(PIXI.Sprite.prototype), c.Sprite.prototype.constructor = c.Sprite, c.Component.Core.install.call(c.Sprite.prototype, ["Angle", "Animation", "AutoCull", "Bounds", "BringToTop", "Crop", "Delta", "Destroy", "FixedToCamera", "Health", "InCamera", "InputEnabled", "InWorld", "LifeSpan", "LoadTexture", "Overlap", "PhysicsBody", "Reset", "ScaleMinMax", "Smoothed"]), c.Sprite.prototype.preUpdatePhysics = c.Component.PhysicsBody.preUpdate, c.Sprite.prototype.preUpdateLifeSpan = c.Component.LifeSpan.preUpdate, c.Sprite.prototype.preUpdateInWorld = c.Component.InWorld.preUpdate, c.Sprite.prototype.preUpdateCore = c.Component.Core.preUpdate, c.Sprite.prototype.preUpdate = function () {
        return !!(this.preUpdatePhysics() && this.preUpdateLifeSpan() && this.preUpdateInWorld()) && this.preUpdateCore()
    }, c.Image = function (a, b, d, e, f) {
        b = b || 0, d = d || 0, e = e || null, f = f || null, this.type = c.IMAGE, PIXI.Sprite.call(this, c.Cache.DEFAULT), c.Component.Core.init.call(this, a, b, d, e, f)
    }, c.Image.prototype = Object.create(PIXI.Sprite.prototype), c.Image.prototype.constructor = c.Image, c.Component.Core.install.call(c.Image.prototype, ["Angle", "Animation", "AutoCull", "Bounds", "BringToTop", "Crop", "Destroy", "FixedToCamera", "InputEnabled", "LifeSpan", "LoadTexture", "Overlap", "Reset", "ScaleMinMax", "Smoothed"]), c.Image.prototype.preUpdateInWorld = c.Component.InWorld.preUpdate, c.Image.prototype.preUpdateCore = c.Component.Core.preUpdate, c.Image.prototype.preUpdate = function () {
        return !!this.preUpdateInWorld() && this.preUpdateCore()
    }, c.Button = function (a, b, d, e, f, g, h, i, j, k) {
        b = b || 0, d = d || 0, e = e || null, f = f || null, g = g || this, c.Image.call(this, a, b, d, e, i), this.type = c.BUTTON, this.physicsType = c.SPRITE, this._onOverFrame = null, this._onOutFrame = null, this._onDownFrame = null, this._onUpFrame = null, this.onOverSound = null, this.onOutSound = null, this.onDownSound = null, this.onUpSound = null, this.onOverSoundMarker = "", this.onOutSoundMarker = "", this.onDownSoundMarker = "", this.onUpSoundMarker = "", this.onInputOver = new c.Signal, this.onInputOut = new c.Signal, this.onInputDown = new c.Signal, this.onInputUp = new c.Signal, this.onOverMouseOnly = !0, this.justReleasedPreventsOver = c.PointerMode.TOUCH, this.freezeFrames = !1, this.forceOut = !1, this.inputEnabled = !0, this.input.start(0, !0), this.input.useHandCursor = !0, this.setFrames(h, i, j, k), null !== f && this.onInputUp.add(f, g), this.events.onInputOver.add(this.onInputOverHandler, this), this.events.onInputOut.add(this.onInputOutHandler, this), this.events.onInputDown.add(this.onInputDownHandler, this), this.events.onInputUp.add(this.onInputUpHandler, this), this.events.onRemovedFromWorld.add(this.removedFromWorld, this)
    }, c.Button.prototype = Object.create(c.Image.prototype), c.Button.prototype.constructor = c.Button;
    var g = "Over", h = "Out", i = "Down", j = "Up";
    c.Button.prototype.clearFrames = function () {
        this.setFrames(null, null, null, null)
    }, c.Button.prototype.removedFromWorld = function () {
        this.inputEnabled = !1
    }, c.Button.prototype.setStateFrame = function (a, b, c) {
        var d = "_on" + a + "Frame";
        null !== b ? (this[d] = b, c && this.changeStateFrame(a)) : this[d] = null
    }, c.Button.prototype.changeStateFrame = function (a) {
        if (this.freezeFrames) return !1;
        var b = "_on" + a + "Frame", c = this[b];
        return "string" == typeof c ? (this.frameName = c, !0) : "number" == typeof c && (this.frame = c, !0)
    }, c.Button.prototype.setFrames = function (a, b, c, d) {
        this.setStateFrame(g, a, this.input.pointerOver()), this.setStateFrame(h, b, !this.input.pointerOver()), this.setStateFrame(i, c, this.input.pointerDown()), this.setStateFrame(j, d, this.input.pointerUp())
    }, c.Button.prototype.setStateSound = function (a, b, d) {
        var e = "on" + a + "Sound", f = "on" + a + "SoundMarker";
        b instanceof c.Sound || b instanceof c.AudioSprite ? (this[e] = b, this[f] = "string" == typeof d ? d : "") : (this[e] = null, this[f] = "")
    }, c.Button.prototype.playStateSound = function (a) {
        var b = "on" + a + "Sound", c = this[b];
        if (c) {
            var d = "on" + a + "SoundMarker", e = this[d];
            return c.play(e), !0
        }
        return !1
    }, c.Button.prototype.setSounds = function (a, b, c, d, e, f, k, l) {
        this.setStateSound(g, a, b), this.setStateSound(h, e, f), this.setStateSound(i, c, d), this.setStateSound(j, k, l)
    }, c.Button.prototype.setOverSound = function (a, b) {
        this.setStateSound(g, a, b)
    }, c.Button.prototype.setOutSound = function (a, b) {
        this.setStateSound(h, a, b)
    }, c.Button.prototype.setDownSound = function (a, b) {
        this.setStateSound(i, a, b)
    }, c.Button.prototype.setUpSound = function (a, b) {
        this.setStateSound(j, a, b)
    }, c.Button.prototype.onInputOverHandler = function (a, b) {
        b.justReleased() && (this.justReleasedPreventsOver & b.pointerMode) === b.pointerMode || (this.changeStateFrame(g), this.onOverMouseOnly && !b.isMouse || (this.playStateSound(g), this.onInputOver && this.onInputOver.dispatch(this, b)))
    }, c.Button.prototype.onInputOutHandler = function (a, b) {
        this.changeStateFrame(h), this.playStateSound(h), this.onInputOut && this.onInputOut.dispatch(this, b)
    }, c.Button.prototype.onInputDownHandler = function (a, b) {
        this.changeStateFrame(i), this.playStateSound(i), this.onInputDown && this.onInputDown.dispatch(this, b)
    }, c.Button.prototype.onInputUpHandler = function (a, b, c) {
        if (this.playStateSound(j), this.onInputUp && this.onInputUp.dispatch(this, b, c), !this.freezeFrames) if (this.forceOut === !0 || (this.forceOut & b.pointerMode) === b.pointerMode) this.changeStateFrame(h); else {
            var d = this.changeStateFrame(j);
            d || (c ? this.changeStateFrame(g) : this.changeStateFrame(h))
        }
    }, c.SpriteBatch = function (a, b, d, e) {
        void 0 !== b && null !== b || (b = a.world), PIXI.SpriteBatch.call(this), c.Group.call(this, a, b, d, e), this.type = c.SPRITEBATCH
    }, c.SpriteBatch.prototype = c.Utils.extend(!0, c.SpriteBatch.prototype, PIXI.SpriteBatch.prototype, c.Group.prototype), c.SpriteBatch.prototype.constructor = c.SpriteBatch, c.BitmapData = function (a, b, d, e, f) {
        void 0 !== d && 0 !== d || (d = 256), void 0 !== e && 0 !== e || (e = 256), void 0 === f && (f = !1), this.game = a, this.key = b, this.width = d, this.height = e, this.canvas = c.Canvas.create(this, d, e, null, f), this.context = this.canvas.getContext("2d", {alpha: !0}), this.ctx = this.context, this.smoothProperty = a.renderType === c.CANVAS ? a.renderer.renderSession.smoothProperty : c.Canvas.getSmoothingPrefix(this.context), this.imageData = this.context.getImageData(0, 0, d, e), this.data = null, this.imageData && (this.data = this.imageData.data), this.pixels = null, this.data && (this.imageData.data.buffer ? (this.buffer = this.imageData.data.buffer, this.pixels = new Uint32Array(this.buffer)) : window.ArrayBuffer ? (this.buffer = new ArrayBuffer(this.imageData.data.length), this.pixels = new Uint32Array(this.buffer)) : this.pixels = this.imageData.data), this.baseTexture = new PIXI.BaseTexture(this.canvas), this.texture = new PIXI.Texture(this.baseTexture), this.frameData = new c.FrameData, this.textureFrame = this.frameData.addFrame(new c.Frame(0, 0, 0, d, e, "bitmapData")), this.texture.frame = this.textureFrame, this.type = c.BITMAPDATA, this.disableTextureUpload = !1, this.dirty = !1, this.cls = this.clear, this._image = null, this._pos = new c.Point, this._size = new c.Point, this._scale = new c.Point, this._rotate = 0, this._alpha = {
            prev: 1,
            current: 1
        }, this._anchor = new c.Point, this._tempR = 0, this._tempG = 0, this._tempB = 0, this._circle = new c.Circle, this._swapCanvas = void 0
    }, c.BitmapData.prototype = {
        move: function (a, b, c) {
            return 0 !== a && this.moveH(a, c), 0 !== b && this.moveV(b, c), this
        }, moveH: function (a, b) {
            void 0 === b && (b = !0), void 0 === this._swapCanvas && (this._swapCanvas = PIXI.CanvasPool.create(this, this.width, this.height));
            var c = this._swapCanvas, d = c.getContext("2d"), e = this.height, f = this.canvas;
            if (d.clearRect(0, 0, this.width, this.height), a < 0) {
                a = Math.abs(a);
                var g = this.width - a;
                b && d.drawImage(f, 0, 0, a, e, g, 0, a, e), d.drawImage(f, a, 0, g, e, 0, 0, g, e)
            } else {
                var g = this.width - a;
                b && d.drawImage(f, g, 0, a, e, 0, 0, a, e), d.drawImage(f, 0, 0, g, e, a, 0, g, e)
            }
            return this.clear(), this.copy(this._swapCanvas)
        }, moveV: function (a, b) {
            void 0 === b && (b = !0), void 0 === this._swapCanvas && (this._swapCanvas = PIXI.CanvasPool.create(this, this.width, this.height));
            var c = this._swapCanvas, d = c.getContext("2d"), e = this.width, f = this.canvas;
            if (d.clearRect(0, 0, this.width, this.height), a < 0) {
                a = Math.abs(a);
                var g = this.height - a;
                b && d.drawImage(f, 0, 0, e, a, 0, g, e, a), d.drawImage(f, 0, a, e, g, 0, 0, e, g)
            } else {
                var g = this.height - a;
                b && d.drawImage(f, 0, g, e, a, 0, 0, e, a), d.drawImage(f, 0, 0, e, g, 0, a, e, g)
            }
            return this.clear(), this.copy(this._swapCanvas)
        }, add: function (a) {
            if (Array.isArray(a)) for (var b = 0; b < a.length; b++) a[b].loadTexture && a[b].loadTexture(this); else a.loadTexture(this);
            return this
        }, load: function (a) {
            if ("string" == typeof a && (a = this.game.cache.getImage(a)), a) return this.resize(a.width, a.height), this.cls(), this.draw(a), this.update(), this
        }, clear: function (a, b, c, d) {
            return void 0 === a && (a = 0), void 0 === b && (b = 0), void 0 === c && (c = this.width), void 0 === d && (d = this.height), this.context.clearRect(a, b, c, d), this.dirty = !0, this
        }, fill: function (a, b, c, d) {
            return void 0 === d && (d = 1), this.context.fillStyle = "rgba(" + a + "," + b + "," + c + "," + d + ")", this.context.fillRect(0, 0, this.width, this.height), this.dirty = !0, this
        }, generateTexture: function (a) {
            var b = new Image;
            b.src = this.canvas.toDataURL("image/png");
            var c = this.game.cache.addImage(a, "", b);
            return new PIXI.Texture(c.base)
        }, resize: function (a, b) {
            return a === this.width && b === this.height || (this.width = a, this.height = b, this.canvas.width = a, this.canvas.height = b, void 0 !== this._swapCanvas && (this._swapCanvas.width = a, this._swapCanvas.height = b), this.baseTexture.width = a, this.baseTexture.height = b, this.textureFrame.width = a, this.textureFrame.height = b, this.texture.width = a, this.texture.height = b, this.texture.crop.width = a, this.texture.crop.height = b, this.update(), this.dirty = !0), this
        }, update: function (a, b, c, d) {
            return void 0 === a && (a = 0), void 0 === b && (b = 0), void 0 === c && (c = Math.max(1, this.width)), void 0 === d && (d = Math.max(1, this.height)), this.imageData = this.context.getImageData(a, b, c, d), this.data = this.imageData.data, this.imageData.data.buffer ? (this.buffer = this.imageData.data.buffer, this.pixels = new Uint32Array(this.buffer)) : window.ArrayBuffer ? (this.buffer = new ArrayBuffer(this.imageData.data.length), this.pixels = new Uint32Array(this.buffer)) : this.pixels = this.imageData.data, this
        }, processPixelRGB: function (a, b, d, e, f, g) {
            void 0 === d && (d = 0), void 0 === e && (e = 0), void 0 === f && (f = this.width), void 0 === g && (g = this.height);
            for (var h = d + f, i = e + g, j = c.Color.createColor(), k = {
                r: 0,
                g: 0,
                b: 0,
                a: 0
            }, l = !1, m = e; m < i; m++) for (var n = d; n < h; n++) c.Color.unpackPixel(this.getPixel32(n, m), j), k = a.call(b, j, n, m), k !== !1 && null !== k && void 0 !== k && (this.setPixel32(n, m, k.r, k.g, k.b, k.a, !1), l = !0);
            return l && (this.context.putImageData(this.imageData, 0, 0), this.dirty = !0), this
        }, processPixel: function (a, b, c, d, e, f) {
            void 0 === c && (c = 0), void 0 === d && (d = 0), void 0 === e && (e = this.width), void 0 === f && (f = this.height);
            for (var g = c + e, h = d + f, i = 0, j = 0, k = !1, l = d; l < h; l++) for (var m = c; m < g; m++) i = this.getPixel32(m, l), j = a.call(b, i, m, l), j !== i && (this.pixels[l * this.width + m] = j, k = !0);
            return k && (this.context.putImageData(this.imageData, 0, 0), this.dirty = !0), this
        }, replaceRGB: function (a, b, d, e, f, g, h, i, j) {
            var k = 0, l = 0, m = this.width, n = this.height, o = c.Color.packPixel(a, b, d, e);
            void 0 !== j && j instanceof c.Rectangle && (k = j.x, l = j.y, m = j.width, n = j.height);
            for (var p = 0; p < n; p++) for (var q = 0; q < m; q++) this.getPixel32(k + q, l + p) === o && this.setPixel32(k + q, l + p, f, g, h, i, !1);
            return this.context.putImageData(this.imageData, 0, 0), this.dirty = !0, this
        }, setHSL: function (a, b, d, e) {
            var f = a || 0 === a, g = b || 0 === b, h = d || 0 === d;
            if (f || g || h) {
                void 0 === e && (e = new c.Rectangle(0, 0, this.width, this.height));
                for (var i = c.Color.createColor(), j = e.y; j < e.bottom; j++) for (var k = e.x; k < e.right; k++) c.Color.unpackPixel(this.getPixel32(k, j), i, !0), f && (i.h = a), g && (i.s = b), h && (i.l = d), c.Color.HSLtoRGB(i.h, i.s, i.l, i), this.setPixel32(k, j, i.r, i.g, i.b, i.a, !1);
                return this.context.putImageData(this.imageData, 0, 0), this.dirty = !0, this
            }
        }, shiftHSL: function (a, b, d, e) {
            if (void 0 !== a && null !== a || (a = !1), void 0 !== b && null !== b || (b = !1), void 0 !== d && null !== d || (d = !1), a || b || d) {
                void 0 === e && (e = new c.Rectangle(0, 0, this.width, this.height));
                for (var f = c.Color.createColor(), g = e.y; g < e.bottom; g++) for (var h = e.x; h < e.right; h++) c.Color.unpackPixel(this.getPixel32(h, g), f, !0), a && (f.h = this.game.math.wrap(f.h + a, 0, 1)), b && (f.s = this.game.math.clamp(f.s + b, 0, 1)), d && (f.l = this.game.math.clamp(f.l + d, 0, 1)), c.Color.HSLtoRGB(f.h, f.s, f.l, f), this.setPixel32(h, g, f.r, f.g, f.b, f.a, !1);
                return this.context.putImageData(this.imageData, 0, 0), this.dirty = !0, this
            }
        }, setPixel32: function (a, b, d, e, f, g, h) {
            return void 0 === h && (h = !0), a >= 0 && a <= this.width && b >= 0 && b <= this.height && (c.Device.LITTLE_ENDIAN ? this.pixels[b * this.width + a] = g << 24 | f << 16 | e << 8 | d : this.pixels[b * this.width + a] = d << 24 | e << 16 | f << 8 | g, h && (this.context.putImageData(this.imageData, 0, 0), this.dirty = !0)),
                this
        }, setPixel: function (a, b, c, d, e, f) {
            return this.setPixel32(a, b, c, d, e, 255, f)
        }, getPixel: function (a, b, d) {
            d || (d = c.Color.createColor());
            var e = ~~(a + b * this.width);
            return e *= 4, d.r = this.data[e], d.g = this.data[++e], d.b = this.data[++e], d.a = this.data[++e], d
        }, getPixel32: function (a, b) {
            if (a >= 0 && a <= this.width && b >= 0 && b <= this.height) return this.pixels[b * this.width + a]
        }, getPixelRGB: function (a, b, d, e, f) {
            return c.Color.unpackPixel(this.getPixel32(a, b), d, e, f)
        }, getPixels: function (a) {
            return this.context.getImageData(a.x, a.y, a.width, a.height)
        }, getFirstPixel: function (a) {
            void 0 === a && (a = 0);
            var b = c.Color.createColor(), d = 0, e = 0, f = 1, g = !1;
            1 === a ? (f = -1, e = this.height) : 3 === a && (f = -1, d = this.width);
            do c.Color.unpackPixel(this.getPixel32(d, e), b), 0 === a || 1 === a ? (d++, d === this.width && (d = 0, e += f, (e >= this.height || e <= 0) && (g = !0))) : 2 !== a && 3 !== a || (e++, e === this.height && (e = 0, d += f, (d >= this.width || d <= 0) && (g = !0))); while (0 === b.a && !g);
            return b.x = d, b.y = e, b
        }, getBounds: function (a) {
            return void 0 === a && (a = new c.Rectangle), a.x = this.getFirstPixel(2).x, a.x === this.width ? a.setTo(0, 0, 0, 0) : (a.y = this.getFirstPixel(0).y, a.width = this.getFirstPixel(3).x - a.x + 1, a.height = this.getFirstPixel(1).y - a.y + 1, a)
        }, addToWorld: function (a, b, c, d, e, f) {
            e = e || 1, f = f || 1;
            var g = this.game.add.image(a, b, this);
            return g.anchor.set(c, d), g.scale.set(e, f), g
        }, copy: function (a, b, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r) {
            if (void 0 !== a && null !== a || (a = this), (a instanceof c.RenderTexture || a instanceof PIXI.RenderTexture) && (a = a.getCanvas()), this._image = a, a instanceof c.Sprite || a instanceof c.Image || a instanceof c.Text || a instanceof PIXI.Sprite) this._pos.set(a.texture.crop.x, a.texture.crop.y), this._size.set(a.texture.crop.width, a.texture.crop.height), this._scale.set(a.scale.x, a.scale.y), this._anchor.set(a.anchor.x, a.anchor.y), this._rotate = a.rotation, this._alpha.current = a.alpha, a.texture instanceof c.RenderTexture || a.texture instanceof PIXI.RenderTexture ? this._image = a.texture.getCanvas() : this._image = a.texture.baseTexture.source, void 0 !== g && null !== g || (g = a.x), void 0 !== h && null !== h || (h = a.y), a.texture.trim && (g += a.texture.trim.x - a.anchor.x * a.texture.trim.width, h += a.texture.trim.y - a.anchor.y * a.texture.trim.height), 16777215 !== a.tint && (a.cachedTint !== a.tint && (a.cachedTint = a.tint, a.tintedTexture = PIXI.CanvasTinter.getTintedTexture(a, a.tint)), this._image = a.tintedTexture, this._pos.set(0)); else {
                if (this._pos.set(0), this._scale.set(1), this._anchor.set(0), this._rotate = 0, this._alpha.current = 1, a instanceof c.BitmapData) this._image = a.canvas; else if ("string" == typeof a) {
                    if (a = this.game.cache.getImage(a), null === a) return;
                    this._image = a
                }
                this._size.set(this._image.width, this._image.height)
            }
            if (void 0 !== b && null !== b || (b = 0), void 0 !== d && null !== d || (d = 0), e && (this._size.x = e), f && (this._size.y = f), void 0 !== g && null !== g || (g = b), void 0 !== h && null !== h || (h = d), void 0 !== i && null !== i || (i = this._size.x), void 0 !== j && null !== j || (j = this._size.y), "number" == typeof k && (this._rotate = k), "number" == typeof l && (this._anchor.x = l), "number" == typeof m && (this._anchor.y = m), "number" == typeof n && (this._scale.x = n), "number" == typeof o && (this._scale.y = o), "number" == typeof p && (this._alpha.current = p), void 0 === q && (q = null), void 0 === r && (r = !1), !(this._alpha.current <= 0 || 0 === this._scale.x || 0 === this._scale.y || 0 === this._size.x || 0 === this._size.y)) {
                var s = this.context;
                return this._alpha.prev = s.globalAlpha, s.save(), s.globalAlpha = this._alpha.current, q && (this.op = q), r && (g |= 0, h |= 0), s.translate(g, h), s.scale(this._scale.x, this._scale.y), s.rotate(this._rotate), s.drawImage(this._image, this._pos.x + b, this._pos.y + d, this._size.x, this._size.y, -i * this._anchor.x, -j * this._anchor.y, i, j), s.restore(), s.globalAlpha = this._alpha.prev, this.dirty = !0, this
            }
        }, copyTransform: function (a, b, d) {
            if (void 0 === b && (b = null), void 0 === d && (d = !1), !a.hasOwnProperty("worldTransform") || !a.worldVisible || 0 === a.worldAlpha) return this;
            var e = a.worldTransform;
            if (this._pos.set(a.texture.crop.x, a.texture.crop.y), this._size.set(a.texture.crop.width, a.texture.crop.height), 0 === e.a || 0 === e.d || 0 === this._size.x || 0 === this._size.y) return this;
            a.texture instanceof c.RenderTexture || a.texture instanceof PIXI.RenderTexture ? this._image = a.texture.getCanvas() : this._image = a.texture.baseTexture.source;
            var f = e.tx, g = e.ty;
            a.texture.trim && (f += a.texture.trim.x - a.anchor.x * a.texture.trim.width, g += a.texture.trim.y - a.anchor.y * a.texture.trim.height), 16777215 !== a.tint && (a.cachedTint !== a.tint && (a.cachedTint = a.tint, a.tintedTexture = PIXI.CanvasTinter.getTintedTexture(a, a.tint)), this._image = a.tintedTexture, this._pos.set(0)), d && (f |= 0, g |= 0);
            var h = this.context;
            return this._alpha.prev = h.globalAlpha, h.save(), h.globalAlpha = this._alpha.current, b && (this.op = b), h[this.smoothProperty] = a.texture.baseTexture.scaleMode === PIXI.scaleModes.LINEAR, h.setTransform(e.a, e.b, e.c, e.d, f, g), h.drawImage(this._image, this._pos.x, this._pos.y, this._size.x, this._size.y, -this._size.x * a.anchor.x, -this._size.y * a.anchor.y, this._size.x, this._size.y), h.restore(), h.globalAlpha = this._alpha.prev, this.dirty = !0, this
        }, copyRect: function (a, b, c, d, e, f, g) {
            return this.copy(a, b.x, b.y, b.width, b.height, c, d, b.width, b.height, 0, 0, 0, 1, 1, e, f, g)
        }, draw: function (a, b, c, d, e, f, g) {
            return this.copy(a, null, null, null, null, b, c, d, e, null, null, null, null, null, null, f, g)
        }, drawGroup: function (a, b, c) {
            return a.total > 0 && a.forEachExists(this.drawGroupProxy, this, b, c), this
        }, drawGroupProxy: function (a, b, d) {
            if (a.hasOwnProperty("texture") && this.copyTransform(a, b, d), a.type === c.GROUP && a.exists) this.drawGroup(a, b, d); else if (a.hasOwnProperty("children") && a.children.length > 0) for (var e = 0; e < a.children.length; e++) a.children[e].exists && this.copyTransform(a.children[e], b, d)
        }, drawFull: function (a, b, d) {
            if (a.worldVisible === !1 || 0 === a.worldAlpha || a.hasOwnProperty("exists") && a.exists === !1) return this;
            if (a.type !== c.GROUP && a.type !== c.EMITTER && a.type !== c.BITMAPTEXT) if (a.type === c.GRAPHICS) {
                var e = a.getBounds();
                this.ctx.save(), this.ctx.translate(e.x, e.y), PIXI.CanvasGraphics.renderGraphics(a, this.ctx), this.ctx.restore()
            } else this.copy(a, null, null, null, null, a.worldPosition.x, a.worldPosition.y, null, null, a.worldRotation, null, null, a.worldScale.x, a.worldScale.y, a.worldAlpha, b, d);
            if (a.children) for (var f = 0; f < a.children.length; f++) this.drawFull(a.children[f], b, d);
            return this
        }, shadow: function (a, b, c, d) {
            var e = this.context;
            return void 0 === a || null === a ? e.shadowColor = "rgba(0,0,0,0)" : (e.shadowColor = a, e.shadowBlur = b || 5, e.shadowOffsetX = c || 10, e.shadowOffsetY = d || 10), this
        }, alphaMask: function (a, b, c, d) {
            return void 0 === d || null === d ? this.draw(b).blendSourceAtop() : this.draw(b, d.x, d.y, d.width, d.height).blendSourceAtop(), void 0 === c || null === c ? this.draw(a).blendReset() : this.draw(a, c.x, c.y, c.width, c.height).blendReset(), this
        }, extract: function (a, b, c, d, e, f, g, h, i) {
            return void 0 === e && (e = 255), void 0 === f && (f = !1), void 0 === g && (g = b), void 0 === h && (h = c), void 0 === i && (i = d), f && a.resize(this.width, this.height), this.processPixelRGB(function (f, j, k) {
                return f.r === b && f.g === c && f.b === d && a.setPixel32(j, k, g, h, i, e, !1), !1
            }, this), a.context.putImageData(a.imageData, 0, 0), a.dirty = !0, a
        }, rect: function (a, b, c, d, e) {
            return "undefined" != typeof e && (this.context.fillStyle = e), this.context.fillRect(a, b, c, d), this
        }, text: function (a, b, c, d, e, f) {
            void 0 === b && (b = 0), void 0 === c && (c = 0), void 0 === d && (d = "14px Courier"), void 0 === e && (e = "rgb(255,255,255)"), void 0 === f && (f = !0);
            var g = this.context, h = g.font;
            return g.font = d, f && (g.fillStyle = "rgb(0,0,0)", g.fillText(a, b + 1, c + 1)), g.fillStyle = e, g.fillText(a, b, c), g.font = h, this
        }, circle: function (a, b, c, d) {
            var e = this.context;
            return void 0 !== d && (e.fillStyle = d), e.beginPath(), e.arc(a, b, c, 0, 2 * Math.PI, !1), e.closePath(), e.fill(), this
        }, line: function (a, b, c, d, e, f) {
            void 0 === e && (e = "#fff"), void 0 === f && (f = 1);
            var g = this.context;
            return g.beginPath(), g.moveTo(a, b), g.lineTo(c, d), g.lineWidth = f, g.strokeStyle = e, g.stroke(), g.closePath(), this
        }, textureLine: function (a, b, d) {
            if (void 0 === d && (d = "repeat-x"), "string" != typeof b || (b = this.game.cache.getImage(b))) {
                var e = a.length;
                "no-repeat" === d && e > b.width && (e = b.width);
                var f = this.context;
                return f.fillStyle = f.createPattern(b, d), this._circle = new c.Circle(a.start.x, a.start.y, b.height), this._circle.circumferencePoint(a.angle - 1.5707963267948966, !1, this._pos), f.save(), f.translate(this._pos.x, this._pos.y), f.rotate(a.angle), f.fillRect(0, 0, e, b.height), f.restore(), this.dirty = !0, this
            }
        }, render: function () {
            return !this.disableTextureUpload && this.dirty && (this.baseTexture.dirty(), this.dirty = !1), this
        }, destroy: function () {
            this.frameData.destroy(), this.texture.destroy(!0), PIXI.CanvasPool.remove(this)
        }, blendReset: function () {
            return this.op = "source-over", this
        }, blendSourceOver: function () {
            return this.op = "source-over", this
        }, blendSourceIn: function () {
            return this.op = "source-in", this
        }, blendSourceOut: function () {
            return this.op = "source-out", this
        }, blendSourceAtop: function () {
            return this.op = "source-atop", this
        }, blendDestinationOver: function () {
            return this.op = "destination-over", this
        }, blendDestinationIn: function () {
            return this.op = "destination-in", this
        }, blendDestinationOut: function () {
            return this.op = "destination-out", this
        }, blendDestinationAtop: function () {
            return this.op = "destination-atop", this
        }, blendXor: function () {
            return this.op = "xor", this
        }, blendAdd: function () {
            return this.op = "lighter", this
        }, blendMultiply: function () {
            return this.op = "multiply", this
        }, blendScreen: function () {
            return this.op = "screen", this
        }, blendOverlay: function () {
            return this.op = "overlay", this
        }, blendDarken: function () {
            return this.op = "darken", this
        }, blendLighten: function () {
            return this.op = "lighten", this
        }, blendColorDodge: function () {
            return this.op = "color-dodge", this
        }, blendColorBurn: function () {
            return this.op = "color-burn", this
        }, blendHardLight: function () {
            return this.op = "hard-light", this
        }, blendSoftLight: function () {
            return this.op = "soft-light", this
        }, blendDifference: function () {
            return this.op = "difference", this
        }, blendExclusion: function () {
            return this.op = "exclusion", this
        }, blendHue: function () {
            return this.op = "hue", this
        }, blendSaturation: function () {
            return this.op = "saturation", this
        }, blendColor: function () {
            return this.op = "color", this
        }, blendLuminosity: function () {
            return this.op = "luminosity", this
        }
    }, Object.defineProperty(c.BitmapData.prototype, "smoothed", {
        get: function () {
            c.Canvas.getSmoothingEnabled(this.context)
        }, set: function (a) {
            c.Canvas.setSmoothingEnabled(this.context, a)
        }
    }), Object.defineProperty(c.BitmapData.prototype, "op", {
        get: function () {
            return this.context.globalCompositeOperation
        }, set: function (a) {
            this.context.globalCompositeOperation = a
        }
    }), c.BitmapData.getTransform = function (a, b, c, d, e, f) {
        return "number" != typeof a && (a = 0), "number" != typeof b && (b = 0), "number" != typeof c && (c = 1), "number" != typeof d && (d = 1), "number" != typeof e && (e = 0), "number" != typeof f && (f = 0), {
            sx: c,
            sy: d,
            scaleX: c,
            scaleY: d,
            skewX: e,
            skewY: f,
            translateX: a,
            translateY: b,
            tx: a,
            ty: b
        }
    }, c.BitmapData.prototype.constructor = c.BitmapData, PIXI.Graphics = function () {
        PIXI.DisplayObjectContainer.call(this), this.renderable = !0, this.fillAlpha = 1, this.lineWidth = 0, this.lineColor = 0, this.graphicsData = [], this.tint = 16777215, this.blendMode = PIXI.blendModes.NORMAL, this.currentPath = null, this._webGL = [], this.isMask = !1, this.boundsPadding = 0, this._localBounds = new PIXI.Rectangle(0, 0, 1, 1), this.dirty = !0, this._boundsDirty = !1, this.webGLDirty = !1, this.cachedSpriteDirty = !1
    }, PIXI.Graphics.prototype = Object.create(PIXI.DisplayObjectContainer.prototype), PIXI.Graphics.prototype.constructor = PIXI.Graphics, PIXI.Graphics.prototype.lineStyle = function (a, b, c) {
        return this.lineWidth = a || 0, this.lineColor = b || 0, this.lineAlpha = void 0 === c ? 1 : c, this.currentPath && (this.currentPath.shape.points.length ? this.drawShape(new PIXI.Polygon(this.currentPath.shape.points.slice(-2))) : (this.currentPath.lineWidth = this.lineWidth, this.currentPath.lineColor = this.lineColor, this.currentPath.lineAlpha = this.lineAlpha)), this
    }, PIXI.Graphics.prototype.moveTo = function (a, b) {
        return this.drawShape(new PIXI.Polygon([a, b])), this
    }, PIXI.Graphics.prototype.lineTo = function (a, b) {
        return this.currentPath || this.moveTo(0, 0), this.currentPath.shape.points.push(a, b), this.dirty = !0, this._boundsDirty = !0, this
    }, PIXI.Graphics.prototype.quadraticCurveTo = function (a, b, c, d) {
        this.currentPath ? 0 === this.currentPath.shape.points.length && (this.currentPath.shape.points = [0, 0]) : this.moveTo(0, 0);
        var e, f, g = 20, h = this.currentPath.shape.points;
        0 === h.length && this.moveTo(0, 0);
        for (var i = h[h.length - 2], j = h[h.length - 1], k = 0, l = 1; l <= g; ++l) k = l / g, e = i + (a - i) * k, f = j + (b - j) * k, h.push(e + (a + (c - a) * k - e) * k, f + (b + (d - b) * k - f) * k);
        return this.dirty = !0, this._boundsDirty = !0, this
    }, PIXI.Graphics.prototype.bezierCurveTo = function (a, b, c, d, e, f) {
        this.currentPath ? 0 === this.currentPath.shape.points.length && (this.currentPath.shape.points = [0, 0]) : this.moveTo(0, 0);
        for (var g, h, i, j, k, l = 20, m = this.currentPath.shape.points, n = m[m.length - 2], o = m[m.length - 1], p = 0, q = 1; q <= l; ++q) p = q / l, g = 1 - p, h = g * g, i = h * g, j = p * p, k = j * p, m.push(i * n + 3 * h * p * a + 3 * g * j * c + k * e, i * o + 3 * h * p * b + 3 * g * j * d + k * f);
        return this.dirty = !0, this._boundsDirty = !0, this
    }, PIXI.Graphics.prototype.arcTo = function (a, b, c, d, e) {
        this.currentPath ? 0 === this.currentPath.shape.points.length && this.currentPath.shape.points.push(a, b) : this.moveTo(a, b);
        var f = this.currentPath.shape.points, g = f[f.length - 2], h = f[f.length - 1], i = h - b, j = g - a,
            k = d - b, l = c - a, m = Math.abs(i * l - j * k);
        if (m < 1e-8 || 0 === e) f[f.length - 2] === a && f[f.length - 1] === b || f.push(a, b); else {
            var n = i * i + j * j, o = k * k + l * l, p = i * k + j * l, q = e * Math.sqrt(n) / m,
                r = e * Math.sqrt(o) / m, s = q * p / n, t = r * p / o, u = q * l + r * j, v = q * k + r * i,
                w = j * (r + s), x = i * (r + s), y = l * (q + t), z = k * (q + t), A = Math.atan2(x - v, w - u),
                B = Math.atan2(z - v, y - u);
            this.arc(u + a, v + b, e, A, B, j * k > l * i)
        }
        return this.dirty = !0, this._boundsDirty = !0, this
    }, PIXI.Graphics.prototype.arc = function (a, b, c, d, e, f, g) {
        if (d === e) return this;
        void 0 === f && (f = !1), void 0 === g && (g = 40), !f && e <= d ? e += 2 * Math.PI : f && d <= e && (d += 2 * Math.PI);
        var h = f ? (d - e) * -1 : e - d, i = Math.ceil(Math.abs(h) / (2 * Math.PI)) * g;
        if (0 === h) return this;
        var j = a + Math.cos(d) * c, k = b + Math.sin(d) * c;
        f && this.filling ? this.moveTo(a, b) : this.moveTo(j, k);
        for (var l = this.currentPath.shape.points, m = h / (2 * i), n = 2 * m, o = Math.cos(m), p = Math.sin(m), q = i - 1, r = q % 1 / q, s = 0; s <= q; s++) {
            var t = s + r * s, u = m + d + n * t, v = Math.cos(u), w = -Math.sin(u);
            l.push((o * v + p * w) * c + a, (o * -w + p * v) * c + b)
        }
        return this.dirty = !0, this._boundsDirty = !0, this
    }, PIXI.Graphics.prototype.beginFill = function (a, b) {
        return this.filling = !0, this.fillColor = a || 0, this.fillAlpha = void 0 === b ? 1 : b, this.currentPath && this.currentPath.shape.points.length <= 2 && (this.currentPath.fill = this.filling, this.currentPath.fillColor = this.fillColor, this.currentPath.fillAlpha = this.fillAlpha), this
    }, PIXI.Graphics.prototype.endFill = function () {
        return this.filling = !1, this.fillColor = null, this.fillAlpha = 1, this
    }, PIXI.Graphics.prototype.drawRect = function (a, b, c, d) {
        return this.drawShape(new PIXI.Rectangle(a, b, c, d)), this
    }, PIXI.Graphics.prototype.drawRoundedRect = function (a, b, c, d, e) {
        return this.drawShape(new PIXI.RoundedRectangle(a, b, c, d, e)), this
    }, PIXI.Graphics.prototype.drawCircle = function (a, b, c) {
        return this.drawShape(new PIXI.Circle(a, b, c)), this
    }, PIXI.Graphics.prototype.drawEllipse = function (a, b, c, d) {
        return this.drawShape(new PIXI.Ellipse(a, b, c, d)), this
    }, PIXI.Graphics.prototype.drawPolygon = function (a) {
        (a instanceof c.Polygon || a instanceof PIXI.Polygon) && (a = a.points);
        var b = a;
        if (!Array.isArray(b)) {
            b = new Array(arguments.length);
            for (var d = 0; d < b.length; ++d) b[d] = arguments[d]
        }
        return this.drawShape(new c.Polygon(b)), this
    }, PIXI.Graphics.prototype.clear = function () {
        return this.lineWidth = 0, this.filling = !1, this.dirty = !0, this._boundsDirty = !0, this.clearDirty = !0, this.graphicsData = [], this.updateLocalBounds(), this
    }, PIXI.Graphics.prototype.generateTexture = function (a, b, c) {
        void 0 === a && (a = 1), void 0 === b && (b = PIXI.scaleModes.DEFAULT), void 0 === c && (c = 0);
        var d = this.getBounds();
        d.width += c, d.height += c;
        var e = new PIXI.CanvasBuffer(d.width * a, d.height * a), f = PIXI.Texture.fromCanvas(e.canvas, b);
        return f.baseTexture.resolution = a, e.context.scale(a, a), e.context.translate(-d.x, -d.y), PIXI.CanvasGraphics.renderGraphics(this, e.context), f
    }, PIXI.Graphics.prototype._renderWebGL = function (a) {
        if (this.visible !== !1 && 0 !== this.alpha && this.isMask !== !0) {
            if (this._cacheAsBitmap) return (this.dirty || this.cachedSpriteDirty) && (this._generateCachedSprite(), this.updateCachedSpriteTexture(), this.cachedSpriteDirty = !1, this.dirty = !1), this._cachedSprite.worldAlpha = this.worldAlpha, void PIXI.Sprite.prototype._renderWebGL.call(this._cachedSprite, a);
            if (a.spriteBatch.stop(), a.blendModeManager.setBlendMode(this.blendMode), this._mask && a.maskManager.pushMask(this._mask, a), this._filters && a.filterManager.pushFilter(this._filterBlock), this.blendMode !== a.spriteBatch.currentBlendMode) {
                a.spriteBatch.currentBlendMode = this.blendMode;
                var b = PIXI.blendModesWebGL[a.spriteBatch.currentBlendMode];
                a.spriteBatch.gl.blendFunc(b[0], b[1])
            }
            if (this.webGLDirty && (this.dirty = !0, this.webGLDirty = !1), PIXI.WebGLGraphics.renderGraphics(this, a), this.children.length) {
                a.spriteBatch.start();
                for (var c = 0; c < this.children.length; c++) this.children[c]._renderWebGL(a);
                a.spriteBatch.stop()
            }
            this._filters && a.filterManager.popFilter(), this._mask && a.maskManager.popMask(this.mask, a), a.drawCount++, a.spriteBatch.start()
        }
    }, PIXI.Graphics.prototype._renderCanvas = function (a) {
        if (this.visible !== !1 && 0 !== this.alpha && this.isMask !== !0) {
            if (this._prevTint !== this.tint && (this.dirty = !0, this._prevTint = this.tint), this._cacheAsBitmap) return (this.dirty || this.cachedSpriteDirty) && (this._generateCachedSprite(), this.updateCachedSpriteTexture(), this.cachedSpriteDirty = !1, this.dirty = !1), this._cachedSprite.alpha = this.alpha, void PIXI.Sprite.prototype._renderCanvas.call(this._cachedSprite, a);
            var b = a.context, c = this.worldTransform;
            this.blendMode !== a.currentBlendMode && (a.currentBlendMode = this.blendMode, b.globalCompositeOperation = PIXI.blendModesCanvas[a.currentBlendMode]), this._mask && a.maskManager.pushMask(this._mask, a);
            var d = a.resolution, e = c.tx * a.resolution + a.shakeX, f = c.ty * a.resolution + a.shakeY;
            b.setTransform(c.a * d, c.b * d, c.c * d, c.d * d, e, f), PIXI.CanvasGraphics.renderGraphics(this, b);
            for (var g = 0; g < this.children.length; g++) this.children[g]._renderCanvas(a);
            this._mask && a.maskManager.popMask(a)
        }
    }, PIXI.Graphics.prototype.getBounds = function (a) {
        if (!this._currentBounds) {
            if (!this.renderable) return PIXI.EmptyRectangle;
            this.dirty && (this.updateLocalBounds(), this.webGLDirty = !0, this.cachedSpriteDirty = !0, this.dirty = !1);
            var b = this._localBounds, c = b.x, d = b.width + b.x, e = b.y, f = b.height + b.y,
                g = a || this.worldTransform, h = g.a, i = g.b, j = g.c, k = g.d, l = g.tx, m = g.ty,
                n = h * d + j * f + l, o = k * f + i * d + m, p = h * c + j * f + l, q = k * f + i * c + m,
                r = h * c + j * e + l, s = k * e + i * c + m, t = h * d + j * e + l, u = k * e + i * d + m, v = n,
                w = o, x = n, y = o;
            x = p < x ? p : x, x = r < x ? r : x, x = t < x ? t : x, y = q < y ? q : y, y = s < y ? s : y, y = u < y ? u : y, v = p > v ? p : v, v = r > v ? r : v, v = t > v ? t : v, w = q > w ? q : w, w = s > w ? s : w, w = u > w ? u : w, this._bounds.x = x, this._bounds.width = v - x, this._bounds.y = y, this._bounds.height = w - y, this._currentBounds = this._bounds
        }
        return this._currentBounds
    }, PIXI.Graphics.prototype.getLocalBounds = function () {
        var a = this.worldTransform;
        this.worldTransform = PIXI.identityMatrix;
        for (var b = 0; b < this.children.length; b++) this.children[b].updateTransform();
        var c = this.getBounds();
        for (this.worldTransform = a, b = 0; b < this.children.length; b++) this.children[b].updateTransform();
        return c
    }, PIXI.Graphics.prototype.containsPoint = function (a) {
        this.worldTransform.applyInverse(a, tempPoint);
        for (var b = this.graphicsData, c = 0; c < b.length; c++) {
            var d = b[c];
            if (d.fill && d.shape && d.shape.contains(tempPoint.x, tempPoint.y)) return !0
        }
        return !1
    }, PIXI.Graphics.prototype.updateLocalBounds = function () {
        var a = 1 / 0, b = -(1 / 0), d = 1 / 0, e = -(1 / 0);
        if (this.graphicsData.length) for (var f, g, h, i, j, k, l = 0; l < this.graphicsData.length; l++) {
            var m = this.graphicsData[l], n = m.type, o = m.lineWidth;
            if (f = m.shape, n === PIXI.Graphics.RECT || n === PIXI.Graphics.RREC) h = f.x - o / 2, i = f.y - o / 2, j = f.width + o, k = f.height + o, a = h < a ? h : a, b = h + j > b ? h + j : b, d = i < d ? i : d, e = i + k > e ? i + k : e; else if (n === PIXI.Graphics.CIRC) h = f.x, i = f.y, j = f.radius + o / 2, k = f.radius + o / 2, a = h - j < a ? h - j : a, b = h + j > b ? h + j : b, d = i - k < d ? i - k : d, e = i + k > e ? i + k : e; else if (n === PIXI.Graphics.ELIP) h = f.x, i = f.y, j = f.width + o / 2, k = f.height + o / 2, a = h - j < a ? h - j : a, b = h + j > b ? h + j : b, d = i - k < d ? i - k : d, e = i + k > e ? i + k : e; else {
                g = f.points;
                for (var p = 0; p < g.length; p++) g[p] instanceof c.Point ? (h = g[p].x, i = g[p].y) : (h = g[p], i = g[p + 1], p < g.length - 1 && p++), a = h - o < a ? h - o : a, b = h + o > b ? h + o : b, d = i - o < d ? i - o : d, e = i + o > e ? i + o : e
            }
        } else a = 0, b = 0, d = 0, e = 0;
        var q = this.boundsPadding;
        this._localBounds.x = a - q, this._localBounds.width = b - a + 2 * q, this._localBounds.y = d - q, this._localBounds.height = e - d + 2 * q
    }, PIXI.Graphics.prototype._generateCachedSprite = function () {
        var a = this.getLocalBounds();
        if (this._cachedSprite) this._cachedSprite.buffer.resize(a.width, a.height); else {
            var b = new PIXI.CanvasBuffer(a.width, a.height), c = PIXI.Texture.fromCanvas(b.canvas);
            this._cachedSprite = new PIXI.Sprite(c), this._cachedSprite.buffer = b, this._cachedSprite.worldTransform = this.worldTransform
        }
        this._cachedSprite.anchor.x = -(a.x / a.width), this._cachedSprite.anchor.y = -(a.y / a.height), this._cachedSprite.buffer.context.translate(-a.x, -a.y), this.worldAlpha = 1, PIXI.CanvasGraphics.renderGraphics(this, this._cachedSprite.buffer.context), this._cachedSprite.alpha = this.alpha
    }, PIXI.Graphics.prototype.updateCachedSpriteTexture = function () {
        var a = this._cachedSprite, b = a.texture, c = a.buffer.canvas;
        b.baseTexture.width = c.width, b.baseTexture.height = c.height, b.crop.width = b.frame.width = c.width, b.crop.height = b.frame.height = c.height, a._width = c.width, a._height = c.height, b.baseTexture.dirty()
    }, PIXI.Graphics.prototype.destroyCachedSprite = function () {
        this._cachedSprite.texture.destroy(!0), this._cachedSprite = null
    }, PIXI.Graphics.prototype.drawShape = function (a) {
        this.currentPath && this.currentPath.shape.points.length <= 2 && this.graphicsData.pop(), this.currentPath = null, a instanceof c.Polygon && (a = a.clone(), a.flatten());
        var b = new PIXI.GraphicsData(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.filling, a);
        return this.graphicsData.push(b), b.type === PIXI.Graphics.POLY && (b.shape.closed = this.filling, this.currentPath = b), this.dirty = !0, this._boundsDirty = !0, b
    }, Object.defineProperty(PIXI.Graphics.prototype, "cacheAsBitmap", {
        get: function () {
            return this._cacheAsBitmap
        }, set: function (a) {
            this._cacheAsBitmap = a, this._cacheAsBitmap ? this._generateCachedSprite() : this.destroyCachedSprite(), this.dirty = !0, this.webGLDirty = !0
        }
    }), PIXI.GraphicsData = function (a, b, c, d, e, f, g) {
        this.lineWidth = a, this.lineColor = b, this.lineAlpha = c, this._lineTint = b, this.fillColor = d, this.fillAlpha = e, this._fillTint = d, this.fill = f, this.shape = g, this.type = g.type
    }, PIXI.GraphicsData.prototype.constructor = PIXI.GraphicsData, PIXI.GraphicsData.prototype.clone = function () {
        return new GraphicsData(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.fill, this.shape)
    }, PIXI.EarCut = {}, PIXI.EarCut.Triangulate = function (a, b, c) {
        c = c || 2;
        var d = b && b.length, e = d ? b[0] * c : a.length, f = PIXI.EarCut.linkedList(a, 0, e, c, !0), g = [];
        if (!f) return g;
        var h, i, j, k, l, m, n;
        if (d && (f = PIXI.EarCut.eliminateHoles(a, b, f, c)), a.length > 80 * c) {
            h = j = a[0], i = k = a[1];
            for (var o = c; o < e; o += c) l = a[o], m = a[o + 1], l < h && (h = l), m < i && (i = m), l > j && (j = l), m > k && (k = m);
            n = Math.max(j - h, k - i)
        }
        return PIXI.EarCut.earcutLinked(f, g, c, h, i, n), g
    }, PIXI.EarCut.linkedList = function (a, b, c, d, e) {
        var f, g, h, i = 0;
        for (f = b, g = c - d; f < c; f += d) i += (a[g] - a[f]) * (a[f + 1] + a[g + 1]), g = f;
        if (e === i > 0) for (f = b; f < c; f += d) h = PIXI.EarCut.insertNode(f, a[f], a[f + 1], h); else for (f = c - d; f >= b; f -= d) h = PIXI.EarCut.insertNode(f, a[f], a[f + 1], h);
        return h
    }, PIXI.EarCut.filterPoints = function (a, b) {
        if (!a) return a;
        b || (b = a);
        var c, d = a;
        do if (c = !1, d.steiner || !PIXI.EarCut.equals(d, d.next) && 0 !== PIXI.EarCut.area(d.prev, d, d.next)) d = d.next; else {
            if (PIXI.EarCut.removeNode(d), d = b = d.prev, d === d.next) return null;
            c = !0
        } while (c || d !== b);
        return b
    }, PIXI.EarCut.earcutLinked = function (a, b, c, d, e, f, g) {
        if (a) {
            !g && f && PIXI.EarCut.indexCurve(a, d, e, f);
            for (var h, i, j = a; a.prev !== a.next;) if (h = a.prev, i = a.next, f ? PIXI.EarCut.isEarHashed(a, d, e, f) : PIXI.EarCut.isEar(a)) b.push(h.i / c), b.push(a.i / c), b.push(i.i / c), PIXI.EarCut.removeNode(a), a = i.next, j = i.next; else if (a = i, a === j) {
                g ? 1 === g ? (a = PIXI.EarCut.cureLocalIntersections(a, b, c), PIXI.EarCut.earcutLinked(a, b, c, d, e, f, 2)) : 2 === g && PIXI.EarCut.splitEarcut(a, b, c, d, e, f) : PIXI.EarCut.earcutLinked(PIXI.EarCut.filterPoints(a), b, c, d, e, f, 1);
                break
            }
        }
    }, PIXI.EarCut.isEar = function (a) {
        var b = a.prev, c = a, d = a.next;
        if (PIXI.EarCut.area(b, c, d) >= 0) return !1;
        for (var e = a.next.next; e !== a.prev;) {
            if (PIXI.EarCut.pointInTriangle(b.x, b.y, c.x, c.y, d.x, d.y, e.x, e.y) && PIXI.EarCut.area(e.prev, e, e.next) >= 0) return !1;
            e = e.next
        }
        return !0
    }, PIXI.EarCut.isEarHashed = function (a, b, c, d) {
        var e = a.prev, f = a, g = a.next;
        if (PIXI.EarCut.area(e, f, g) >= 0) return !1;
        for (var h = e.x < f.x ? e.x < g.x ? e.x : g.x : f.x < g.x ? f.x : g.x, i = e.y < f.y ? e.y < g.y ? e.y : g.y : f.y < g.y ? f.y : g.y, j = e.x > f.x ? e.x > g.x ? e.x : g.x : f.x > g.x ? f.x : g.x, k = e.y > f.y ? e.y > g.y ? e.y : g.y : f.y > g.y ? f.y : g.y, l = PIXI.EarCut.zOrder(h, i, b, c, d), m = PIXI.EarCut.zOrder(j, k, b, c, d), n = a.nextZ; n && n.z <= m;) {
            if (n !== a.prev && n !== a.next && PIXI.EarCut.pointInTriangle(e.x, e.y, f.x, f.y, g.x, g.y, n.x, n.y) && PIXI.EarCut.area(n.prev, n, n.next) >= 0) return !1;
            n = n.nextZ
        }
        for (n = a.prevZ; n && n.z >= l;) {
            if (n !== a.prev && n !== a.next && PIXI.EarCut.pointInTriangle(e.x, e.y, f.x, f.y, g.x, g.y, n.x, n.y) && PIXI.EarCut.area(n.prev, n, n.next) >= 0) return !1;
            n = n.prevZ
        }
        return !0
    }, PIXI.EarCut.cureLocalIntersections = function (a, b, c) {
        var d = a;
        do {
            var e = d.prev, f = d.next.next;
            PIXI.EarCut.intersects(e, d, d.next, f) && PIXI.EarCut.locallyInside(e, f) && PIXI.EarCut.locallyInside(f, e) && (b.push(e.i / c), b.push(d.i / c), b.push(f.i / c), PIXI.EarCut.removeNode(d), PIXI.EarCut.removeNode(d.next), d = a = f), d = d.next
        } while (d !== a);
        return d
    }, PIXI.EarCut.splitEarcut = function (a, b, c, d, e, f) {
        var g = a;
        do {
            for (var h = g.next.next; h !== g.prev;) {
                if (g.i !== h.i && PIXI.EarCut.isValidDiagonal(g, h)) {
                    var i = PIXI.EarCut.splitPolygon(g, h);
                    return g = PIXI.EarCut.filterPoints(g, g.next), i = PIXI.EarCut.filterPoints(i, i.next), PIXI.EarCut.earcutLinked(g, b, c, d, e, f), void PIXI.EarCut.earcutLinked(i, b, c, d, e, f)
                }
                h = h.next
            }
            g = g.next
        } while (g !== a)
    }, PIXI.EarCut.eliminateHoles = function (a, b, c, d) {
        var e, f, g, h, i, j = [];
        for (e = 0, f = b.length; e < f; e++) g = b[e] * d, h = e < f - 1 ? b[e + 1] * d : a.length, i = PIXI.EarCut.linkedList(a, g, h, d, !1), i === i.next && (i.steiner = !0), j.push(PIXI.EarCut.getLeftmost(i));
        for (j.sort(compareX), e = 0; e < j.length; e++) PIXI.EarCut.eliminateHole(j[e], c), c = PIXI.EarCut.filterPoints(c, c.next);
        return c
    }, PIXI.EarCut.compareX = function (a, b) {
        return a.x - b.x
    }, PIXI.EarCut.eliminateHole = function (a, b) {
        if (b = PIXI.EarCut.findHoleBridge(a, b)) {
            var c = PIXI.EarCut.splitPolygon(b, a);
            PIXI.EarCut.filterPoints(c, c.next)
        }
    }, PIXI.EarCut.findHoleBridge = function (a, b) {
        var c, d = b, e = a.x, f = a.y, g = -(1 / 0);
        do {
            if (f <= d.y && f >= d.next.y) {
                var h = d.x + (f - d.y) * (d.next.x - d.x) / (d.next.y - d.y);
                h <= e && h > g && (g = h, c = d.x < d.next.x ? d : d.next)
            }
            d = d.next
        } while (d !== b);
        if (!c) return null;
        if (a.x === c.x) return c.prev;
        var i, j = c, k = 1 / 0;
        for (d = c.next; d !== j;) e >= d.x && d.x >= c.x && PIXI.EarCut.pointInTriangle(f < c.y ? e : g, f, c.x, c.y, f < c.y ? g : e, f, d.x, d.y) && (i = Math.abs(f - d.y) / (e - d.x), (i < k || i === k && d.x > c.x) && PIXI.EarCut.locallyInside(d, a) && (c = d, k = i)), d = d.next;
        return c
    }, PIXI.EarCut.indexCurve = function (a, b, c, d) {
        var e = a;
        do null === e.z && (e.z = PIXI.EarCut.zOrder(e.x, e.y, b, c, d)), e.prevZ = e.prev, e.nextZ = e.next, e = e.next; while (e !== a);
        e.prevZ.nextZ = null, e.prevZ = null, PIXI.EarCut.sortLinked(e)
    }, PIXI.EarCut.sortLinked = function (a) {
        var b, c, d, e, f, g, h, i, j = 1;
        do {
            for (c = a, a = null, f = null, g = 0; c;) {
                for (g++, d = c, h = 0, b = 0; b < j && (h++, d = d.nextZ, d); b++) ;
                for (i = j; h > 0 || i > 0 && d;) 0 === h ? (e = d, d = d.nextZ, i--) : 0 !== i && d ? c.z <= d.z ? (e = c, c = c.nextZ, h--) : (e = d, d = d.nextZ, i--) : (e = c, c = c.nextZ, h--), f ? f.nextZ = e : a = e, e.prevZ = f, f = e;
                c = d
            }
            f.nextZ = null, j *= 2
        } while (g > 1);
        return a
    }, PIXI.EarCut.zOrder = function (a, b, c, d, e) {
        return a = 32767 * (a - c) / e, b = 32767 * (b - d) / e, a = 16711935 & (a | a << 8), a = 252645135 & (a | a << 4), a = 858993459 & (a | a << 2), a = 1431655765 & (a | a << 1), b = 16711935 & (b | b << 8), b = 252645135 & (b | b << 4), b = 858993459 & (b | b << 2), b = 1431655765 & (b | b << 1), a | b << 1
    }, PIXI.EarCut.getLeftmost = function (a) {
        var b = a, c = a;
        do b.x < c.x && (c = b), b = b.next; while (b !== a);
        return c
    }, PIXI.EarCut.pointInTriangle = function (a, b, c, d, e, f, g, h) {
        return (e - g) * (b - h) - (a - g) * (f - h) >= 0 && (a - g) * (d - h) - (c - g) * (b - h) >= 0 && (c - g) * (f - h) - (e - g) * (d - h) >= 0
    }, PIXI.EarCut.isValidDiagonal = function (a, b) {
        return PIXI.EarCut.equals(a, b) || a.next.i !== b.i && a.prev.i !== b.i && !PIXI.EarCut.intersectsPolygon(a, b) && PIXI.EarCut.locallyInside(a, b) && PIXI.EarCut.locallyInside(b, a) && PIXI.EarCut.middleInside(a, b)
    }, PIXI.EarCut.area = function (a, b, c) {
        return (b.y - a.y) * (c.x - b.x) - (b.x - a.x) * (c.y - b.y)
    }, PIXI.EarCut.equals = function (a, b) {
        return a.x === b.x && a.y === b.y
    }, PIXI.EarCut.intersects = function (a, b, c, d) {
        return PIXI.EarCut.area(a, b, c) > 0 != PIXI.EarCut.area(a, b, d) > 0 && PIXI.EarCut.area(c, d, a) > 0 != PIXI.EarCut.area(c, d, b) > 0
    }, PIXI.EarCut.intersectsPolygon = function (a, b) {
        var c = a;
        do {
            if (c.i !== a.i && c.next.i !== a.i && c.i !== b.i && c.next.i !== b.i && PIXI.EarCut.intersects(c, c.next, a, b)) return !0;
            c = c.next
        } while (c !== a);
        return !1
    }, PIXI.EarCut.locallyInside = function (a, b) {
        return PIXI.EarCut.area(a.prev, a, a.next) < 0 ? PIXI.EarCut.area(a, b, a.next) >= 0 && PIXI.EarCut.area(a, a.prev, b) >= 0 : PIXI.EarCut.area(a, b, a.prev) < 0 || PIXI.EarCut.area(a, a.next, b) < 0
    }, PIXI.EarCut.middleInside = function (a, b) {
        var c = a, d = !1, e = (a.x + b.x) / 2, f = (a.y + b.y) / 2;
        do c.y > f != c.next.y > f && e < (c.next.x - c.x) * (f - c.y) / (c.next.y - c.y) + c.x && (d = !d), c = c.next; while (c !== a);
        return d
    }, PIXI.EarCut.splitPolygon = function (a, b) {
        var c = new PIXI.EarCut.Node(a.i, a.x, a.y), d = new PIXI.EarCut.Node(b.i, b.x, b.y), e = a.next, f = b.prev;
        return a.next = b, b.prev = a, c.next = e, e.prev = c, d.next = c, c.prev = d, f.next = d, d.prev = f, d
    }, PIXI.EarCut.insertNode = function (a, b, c, d) {
        var e = new PIXI.EarCut.Node(a, b, c);
        return d ? (e.next = d.next, e.prev = d, d.next.prev = e, d.next = e) : (e.prev = e, e.next = e), e
    }, PIXI.EarCut.removeNode = function (a) {
        a.next.prev = a.prev, a.prev.next = a.next, a.prevZ && (a.prevZ.nextZ = a.nextZ), a.nextZ && (a.nextZ.prevZ = a.prevZ)
    }, PIXI.EarCut.Node = function (a, b, c) {
        this.i = a, this.x = b, this.y = c, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
    }, PIXI.WebGLGraphics = function () {
    }, PIXI.WebGLGraphics.stencilBufferLimit = 6, PIXI.WebGLGraphics.renderGraphics = function (a, b) {
        var c, d = b.gl, e = b.projection, f = b.offset, g = b.shaderManager.primitiveShader;
        a.dirty && PIXI.WebGLGraphics.updateGraphics(a, d);
        for (var h = a._webGL[d.id], i = 0; i < h.data.length; i++) 1 === h.data[i].mode ? (c = h.data[i], b.stencilManager.pushStencil(a, c, b), d.drawElements(d.TRIANGLE_FAN, 4, d.UNSIGNED_SHORT, 2 * (c.indices.length - 4)), b.stencilManager.popStencil(a, c, b)) : (c = h.data[i], b.shaderManager.setShader(g), g = b.shaderManager.primitiveShader, d.uniformMatrix3fv(g.translationMatrix, !1, a.worldTransform.toArray(!0)), d.uniform1f(g.flipY, 1), d.uniform2f(g.projectionVector, e.x, -e.y), d.uniform2f(g.offsetVector, -f.x, -f.y), d.uniform3fv(g.tintColor, PIXI.hex2rgb(a.tint)), d.uniform1f(g.alpha, a.worldAlpha), d.bindBuffer(d.ARRAY_BUFFER, c.buffer), d.vertexAttribPointer(g.aVertexPosition, 2, d.FLOAT, !1, 24, 0), d.vertexAttribPointer(g.colorAttribute, 4, d.FLOAT, !1, 24, 8), d.bindBuffer(d.ELEMENT_ARRAY_BUFFER, c.indexBuffer), d.drawElements(d.TRIANGLE_STRIP, c.indices.length, d.UNSIGNED_SHORT, 0))
    }, PIXI.WebGLGraphics.updateGraphics = function (a, b) {
        var c = a._webGL[b.id];
        c || (c = a._webGL[b.id] = {lastIndex: 0, data: [], gl: b}), a.dirty = !1;
        var d;
        if (a.clearDirty) {
            for (a.clearDirty = !1, d = 0; d < c.data.length; d++) {
                var e = c.data[d];
                e.reset(), PIXI.WebGLGraphics.graphicsDataPool.push(e)
            }
            c.data = [], c.lastIndex = 0
        }
        var f;
        for (d = c.lastIndex; d < a.graphicsData.length; d++) {
            var g = a.graphicsData[d];
            if (g.type === PIXI.Graphics.POLY) {
                if (g.points = g.shape.points.slice(), g.shape.closed && (g.points[0] === g.points[g.points.length - 2] && g.points[1] === g.points[g.points.length - 1] || g.points.push(g.points[0], g.points[1])), g.fill && g.points.length >= PIXI.WebGLGraphics.stencilBufferLimit) if (g.points.length < 2 * PIXI.WebGLGraphics.stencilBufferLimit) {
                    f = PIXI.WebGLGraphics.switchMode(c, 0);
                    var h = PIXI.WebGLGraphics.buildPoly(g, f);
                    h || (f = PIXI.WebGLGraphics.switchMode(c, 1), PIXI.WebGLGraphics.buildComplexPoly(g, f))
                } else f = PIXI.WebGLGraphics.switchMode(c, 1), PIXI.WebGLGraphics.buildComplexPoly(g, f);
                g.lineWidth > 0 && (f = PIXI.WebGLGraphics.switchMode(c, 0), PIXI.WebGLGraphics.buildLine(g, f))
            } else f = PIXI.WebGLGraphics.switchMode(c, 0), g.type === PIXI.Graphics.RECT ? PIXI.WebGLGraphics.buildRectangle(g, f) : g.type === PIXI.Graphics.CIRC || g.type === PIXI.Graphics.ELIP ? PIXI.WebGLGraphics.buildCircle(g, f) : g.type === PIXI.Graphics.RREC && PIXI.WebGLGraphics.buildRoundedRectangle(g, f);
            c.lastIndex++
        }
        for (d = 0; d < c.data.length; d++) f = c.data[d], f.dirty && f.upload()
    }, PIXI.WebGLGraphics.switchMode = function (a, b) {
        var c;
        return a.data.length ? (c = a.data[a.data.length - 1], c.mode === b && 1 !== b || (c = PIXI.WebGLGraphics.graphicsDataPool.pop() || new PIXI.WebGLGraphicsData(a.gl), c.mode = b, a.data.push(c))) : (c = PIXI.WebGLGraphics.graphicsDataPool.pop() || new PIXI.WebGLGraphicsData(a.gl), c.mode = b, a.data.push(c)), c.dirty = !0, c
    }, PIXI.WebGLGraphics.buildRectangle = function (a, b) {
        var c = a.shape, d = c.x, e = c.y, f = c.width, g = c.height;
        if (a.fill) {
            var h = PIXI.hex2rgb(a.fillColor), i = a.fillAlpha, j = h[0] * i, k = h[1] * i, l = h[2] * i, m = b.points,
                n = b.indices, o = m.length / 6;
            m.push(d, e), m.push(j, k, l, i), m.push(d + f, e), m.push(j, k, l, i), m.push(d, e + g), m.push(j, k, l, i), m.push(d + f, e + g), m.push(j, k, l, i), n.push(o, o, o + 1, o + 2, o + 3, o + 3)
        }
        if (a.lineWidth) {
            var p = a.points;
            a.points = [d, e, d + f, e, d + f, e + g, d, e + g, d, e], PIXI.WebGLGraphics.buildLine(a, b), a.points = p
        }
    }, PIXI.WebGLGraphics.buildRoundedRectangle = function (a, b) {
        var c = a.shape, d = c.x, e = c.y, f = c.width, g = c.height, h = c.radius, i = [];
        if (i.push(d, e + h), i = i.concat(PIXI.WebGLGraphics.quadraticBezierCurve(d, e + g - h, d, e + g, d + h, e + g)), i = i.concat(PIXI.WebGLGraphics.quadraticBezierCurve(d + f - h, e + g, d + f, e + g, d + f, e + g - h)), i = i.concat(PIXI.WebGLGraphics.quadraticBezierCurve(d + f, e + h, d + f, e, d + f - h, e)), i = i.concat(PIXI.WebGLGraphics.quadraticBezierCurve(d + h, e, d, e, d, e + h)), a.fill) {
            var j = PIXI.hex2rgb(a.fillColor), k = a.fillAlpha, l = j[0] * k, m = j[1] * k, n = j[2] * k, o = b.points,
                p = b.indices, q = o.length / 6, r = PIXI.EarCut.Triangulate(i, null, 2), s = 0;
            for (s = 0; s < r.length; s += 3) p.push(r[s] + q), p.push(r[s] + q), p.push(r[s + 1] + q), p.push(r[s + 2] + q), p.push(r[s + 2] + q);
            for (s = 0; s < i.length; s++) o.push(i[s], i[++s], l, m, n, k)
        }
        if (a.lineWidth) {
            var t = a.points;
            a.points = i, PIXI.WebGLGraphics.buildLine(a, b), a.points = t
        }
    }, PIXI.WebGLGraphics.quadraticBezierCurve = function (a, b, c, d, e, f) {
        function g(a, b, c) {
            var d = b - a;
            return a + d * c
        }

        for (var h, i, j, k, l, m, n = 20, o = [], p = 0, q = 0; q <= n; q++) p = q / n, h = g(a, c, p), i = g(b, d, p), j = g(c, e, p), k = g(d, f, p), l = g(h, j, p), m = g(i, k, p), o.push(l, m);
        return o
    }, PIXI.WebGLGraphics.buildCircle = function (a, b) {
        var c, d, e = a.shape, f = e.x, g = e.y;
        a.type === PIXI.Graphics.CIRC ? (c = e.radius, d = e.radius) : (c = e.width, d = e.height);
        var h = 40, i = 2 * Math.PI / h, j = 0;
        if (a.fill) {
            var k = PIXI.hex2rgb(a.fillColor), l = a.fillAlpha, m = k[0] * l, n = k[1] * l, o = k[2] * l, p = b.points,
                q = b.indices, r = p.length / 6;
            for (q.push(r), j = 0; j < h + 1; j++) p.push(f, g, m, n, o, l), p.push(f + Math.sin(i * j) * c, g + Math.cos(i * j) * d, m, n, o, l), q.push(r++, r++);
            q.push(r - 1)
        }
        if (a.lineWidth) {
            var s = a.points;
            for (a.points = [], j = 0; j < h + 1; j++) a.points.push(f + Math.sin(i * j) * c, g + Math.cos(i * j) * d);
            PIXI.WebGLGraphics.buildLine(a, b), a.points = s
        }
    }, PIXI.WebGLGraphics.buildLine = function (a, b) {
        var c = 0, d = a.points;
        if (0 !== d.length) {
            if (a.lineWidth % 2) for (c = 0; c < d.length; c++) d[c] += .5;
            var e = new PIXI.Point(d[0], d[1]), f = new PIXI.Point(d[d.length - 2], d[d.length - 1]);
            if (e.x === f.x && e.y === f.y) {
                d = d.slice(), d.pop(), d.pop(), f = new PIXI.Point(d[d.length - 2], d[d.length - 1]);
                var g = f.x + .5 * (e.x - f.x), h = f.y + .5 * (e.y - f.y);
                d.unshift(g, h), d.push(g, h)
            }
            var i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F = b.points, G = b.indices,
                H = d.length / 2, I = d.length, J = F.length / 6, K = a.lineWidth / 2, L = PIXI.hex2rgb(a.lineColor),
                M = a.lineAlpha, N = L[0] * M, O = L[1] * M, P = L[2] * M;
            for (k = d[0], l = d[1], m = d[2], n = d[3], q = -(l - n), r = k - m, E = Math.sqrt(q * q + r * r), q /= E, r /= E, q *= K, r *= K, F.push(k - q, l - r, N, O, P, M), F.push(k + q, l + r, N, O, P, M), c = 1; c < H - 1; c++) k = d[2 * (c - 1)], l = d[2 * (c - 1) + 1], m = d[2 * c], n = d[2 * c + 1], o = d[2 * (c + 1)], p = d[2 * (c + 1) + 1], q = -(l - n), r = k - m, E = Math.sqrt(q * q + r * r), q /= E, r /= E, q *= K, r *= K, s = -(n - p), t = m - o, E = Math.sqrt(s * s + t * t), s /= E, t /= E, s *= K, t *= K, w = -r + l - (-r + n), x = -q + m - (-q + k), y = (-q + k) * (-r + n) - (-q + m) * (-r + l), z = -t + p - (-t + n), A = -s + m - (-s + o), B = (-s + o) * (-t + n) - (-s + m) * (-t + p), C = w * A - z * x, Math.abs(C) < .1 ? (C += 10.1, F.push(m - q, n - r, N, O, P, M), F.push(m + q, n + r, N, O, P, M)) : (i = (x * B - A * y) / C, j = (z * y - w * B) / C, D = (i - m) * (i - m) + (j - n) + (j - n), D > 19600 ? (u = q - s, v = r - t, E = Math.sqrt(u * u + v * v), u /= E, v /= E, u *= K, v *= K, F.push(m - u, n - v), F.push(N, O, P, M), F.push(m + u, n + v), F.push(N, O, P, M), F.push(m - u, n - v), F.push(N, O, P, M), I++) : (F.push(i, j), F.push(N, O, P, M), F.push(m - (i - m), n - (j - n)), F.push(N, O, P, M)));
            for (k = d[2 * (H - 2)], l = d[2 * (H - 2) + 1], m = d[2 * (H - 1)], n = d[2 * (H - 1) + 1], q = -(l - n), r = k - m, E = Math.sqrt(q * q + r * r), q /= E, r /= E, q *= K, r *= K, F.push(m - q, n - r), F.push(N, O, P, M), F.push(m + q, n + r), F.push(N, O, P, M), G.push(J), c = 0; c < I; c++) G.push(J++);
            G.push(J - 1)
        }
    }, PIXI.WebGLGraphics.buildComplexPoly = function (a, b) {
        var c = a.points.slice();
        if (!(c.length < 6)) {
            var d = b.indices;
            b.points = c, b.alpha = a.fillAlpha, b.color = PIXI.hex2rgb(a.fillColor);
            for (var e, f, g = 1 / 0, h = -(1 / 0), i = 1 / 0, j = -(1 / 0), k = 0; k < c.length; k += 2) e = c[k], f = c[k + 1], g = e < g ? e : g, h = e > h ? e : h, i = f < i ? f : i, j = f > j ? f : j;
            c.push(g, i, h, i, h, j, g, j);
            var l = c.length / 2;
            for (k = 0; k < l; k++) d.push(k)
        }
    }, PIXI.WebGLGraphics.buildPoly = function (a, b) {
        var c = a.points;
        if (!(c.length < 6)) {
            var d = b.points, e = b.indices, f = c.length / 2, g = PIXI.hex2rgb(a.fillColor), h = a.fillAlpha,
                i = g[0] * h, j = g[1] * h, k = g[2] * h, l = PIXI.EarCut.Triangulate(c, null, 2);
            if (!l) return !1;
            var m = d.length / 6, n = 0;
            for (n = 0; n < l.length; n += 3) e.push(l[n] + m), e.push(l[n] + m), e.push(l[n + 1] + m), e.push(l[n + 2] + m), e.push(l[n + 2] + m);
            for (n = 0; n < f; n++) d.push(c[2 * n], c[2 * n + 1], i, j, k, h);
            return !0
        }
    }, PIXI.WebGLGraphics.graphicsDataPool = [], PIXI.WebGLGraphicsData = function (a) {
        this.gl = a, this.color = [0, 0, 0], this.points = [], this.indices = [], this.buffer = a.createBuffer(), this.indexBuffer = a.createBuffer(), this.mode = 1, this.alpha = 1, this.dirty = !0
    },PIXI.WebGLGraphicsData.prototype.reset = function () {
        this.points = [], this.indices = []
    },PIXI.WebGLGraphicsData.prototype.upload = function () {
        var a = this.gl;
        this.glPoints = new PIXI.Float32Array(this.points), a.bindBuffer(a.ARRAY_BUFFER, this.buffer), a.bufferData(a.ARRAY_BUFFER, this.glPoints, a.STATIC_DRAW), this.glIndicies = new PIXI.Uint16Array(this.indices), a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer), a.bufferData(a.ELEMENT_ARRAY_BUFFER, this.glIndicies, a.STATIC_DRAW), this.dirty = !1
    },PIXI.CanvasGraphics = function () {
    },PIXI.CanvasGraphics.renderGraphics = function (a, b) {
        var c = a.worldAlpha;
        a.dirty && (this.updateGraphicsTint(a), a.dirty = !1);
        for (var d = 0; d < a.graphicsData.length; d++) {
            var e = a.graphicsData[d], f = e.shape, g = e._fillTint, h = e._lineTint;
            if (b.lineWidth = e.lineWidth, e.type === PIXI.Graphics.POLY) {
                b.beginPath();
                var i = f.points;
                b.moveTo(i[0], i[1]);
                for (var j = 1; j < i.length / 2; j++) b.lineTo(i[2 * j], i[2 * j + 1]);
                f.closed && b.lineTo(i[0], i[1]), i[0] === i[i.length - 2] && i[1] === i[i.length - 1] && b.closePath(), e.fill && (b.globalAlpha = e.fillAlpha * c, b.fillStyle = "#" + ("00000" + (0 | g).toString(16)).substr(-6), b.fill()), e.lineWidth && (b.globalAlpha = e.lineAlpha * c, b.strokeStyle = "#" + ("00000" + (0 | h).toString(16)).substr(-6), b.stroke())
            } else if (e.type === PIXI.Graphics.RECT) (e.fillColor || 0 === e.fillColor) && (b.globalAlpha = e.fillAlpha * c, b.fillStyle = "#" + ("00000" + (0 | g).toString(16)).substr(-6), b.fillRect(f.x, f.y, f.width, f.height)), e.lineWidth && (b.globalAlpha = e.lineAlpha * c, b.strokeStyle = "#" + ("00000" + (0 | h).toString(16)).substr(-6), b.strokeRect(f.x, f.y, f.width, f.height)); else if (e.type === PIXI.Graphics.CIRC) b.beginPath(), b.arc(f.x, f.y, f.radius, 0, 2 * Math.PI), b.closePath(), e.fill && (b.globalAlpha = e.fillAlpha * c, b.fillStyle = "#" + ("00000" + (0 | g).toString(16)).substr(-6), b.fill()), e.lineWidth && (b.globalAlpha = e.lineAlpha * c, b.strokeStyle = "#" + ("00000" + (0 | h).toString(16)).substr(-6), b.stroke()); else if (e.type === PIXI.Graphics.ELIP) {
                var k = 2 * f.width, l = 2 * f.height, m = f.x - k / 2, n = f.y - l / 2;
                b.beginPath();
                var o = .5522848, p = k / 2 * o, q = l / 2 * o, r = m + k, s = n + l, t = m + k / 2, u = n + l / 2;
                b.moveTo(m, u), b.bezierCurveTo(m, u - q, t - p, n, t, n), b.bezierCurveTo(t + p, n, r, u - q, r, u), b.bezierCurveTo(r, u + q, t + p, s, t, s), b.bezierCurveTo(t - p, s, m, u + q, m, u), b.closePath(), e.fill && (b.globalAlpha = e.fillAlpha * c, b.fillStyle = "#" + ("00000" + (0 | g).toString(16)).substr(-6), b.fill()), e.lineWidth && (b.globalAlpha = e.lineAlpha * c, b.strokeStyle = "#" + ("00000" + (0 | h).toString(16)).substr(-6), b.stroke())
            } else if (e.type === PIXI.Graphics.RREC) {
                var v = f.x, w = f.y, x = f.width, y = f.height, z = f.radius, A = Math.min(x, y) / 2 | 0;
                z = z > A ? A : z, b.beginPath(), b.moveTo(v, w + z), b.lineTo(v, w + y - z), b.quadraticCurveTo(v, w + y, v + z, w + y), b.lineTo(v + x - z, w + y), b.quadraticCurveTo(v + x, w + y, v + x, w + y - z), b.lineTo(v + x, w + z), b.quadraticCurveTo(v + x, w, v + x - z, w), b.lineTo(v + z, w), b.quadraticCurveTo(v, w, v, w + z), b.closePath(), (e.fillColor || 0 === e.fillColor) && (b.globalAlpha = e.fillAlpha * c, b.fillStyle = "#" + ("00000" + (0 | g).toString(16)).substr(-6), b.fill()), e.lineWidth && (b.globalAlpha = e.lineAlpha * c, b.strokeStyle = "#" + ("00000" + (0 | h).toString(16)).substr(-6), b.stroke())
            }
        }
    },PIXI.CanvasGraphics.renderGraphicsMask = function (a, b) {
        var c = a.graphicsData.length;
        if (0 !== c) {
            b.beginPath();
            for (var d = 0; d < c; d++) {
                var e = a.graphicsData[d], f = e.shape;
                if (e.type === PIXI.Graphics.POLY) {
                    var g = f.points;
                    b.moveTo(g[0], g[1]);
                    for (var h = 1; h < g.length / 2; h++) b.lineTo(g[2 * h], g[2 * h + 1]);
                    g[0] === g[g.length - 2] && g[1] === g[g.length - 1] && b.closePath()
                } else if (e.type === PIXI.Graphics.RECT) b.rect(f.x, f.y, f.width, f.height), b.closePath(); else if (e.type === PIXI.Graphics.CIRC) b.arc(f.x, f.y, f.radius, 0, 2 * Math.PI), b.closePath(); else if (e.type === PIXI.Graphics.ELIP) {
                    var i = 2 * f.width, j = 2 * f.height, k = f.x - i / 2, l = f.y - j / 2, m = .5522848,
                        n = i / 2 * m, o = j / 2 * m, p = k + i, q = l + j, r = k + i / 2, s = l + j / 2;
                    b.moveTo(k, s), b.bezierCurveTo(k, s - o, r - n, l, r, l), b.bezierCurveTo(r + n, l, p, s - o, p, s), b.bezierCurveTo(p, s + o, r + n, q, r, q), b.bezierCurveTo(r - n, q, k, s + o, k, s), b.closePath()
                } else if (e.type === PIXI.Graphics.RREC) {
                    var t = f.x, u = f.y, v = f.width, w = f.height, x = f.radius, y = Math.min(v, w) / 2 | 0;
                    x = x > y ? y : x, b.moveTo(t, u + x), b.lineTo(t, u + w - x), b.quadraticCurveTo(t, u + w, t + x, u + w), b.lineTo(t + v - x, u + w), b.quadraticCurveTo(t + v, u + w, t + v, u + w - x), b.lineTo(t + v, u + x), b.quadraticCurveTo(t + v, u, t + v - x, u), b.lineTo(t + x, u), b.quadraticCurveTo(t, u, t, u + x), b.closePath()
                }
            }
        }
    },PIXI.CanvasGraphics.updateGraphicsTint = function (a) {
        if (16777215 !== a.tint) for (var b = (a.tint >> 16 & 255) / 255, c = (a.tint >> 8 & 255) / 255, d = (255 & a.tint) / 255, e = 0; e < a.graphicsData.length; e++) {
            var f = a.graphicsData[e], g = 0 | f.fillColor, h = 0 | f.lineColor;
            f._fillTint = ((g >> 16 & 255) / 255 * b * 255 << 16) + ((g >> 8 & 255) / 255 * c * 255 << 8) + (255 & g) / 255 * d * 255, f._lineTint = ((h >> 16 & 255) / 255 * b * 255 << 16) + ((h >> 8 & 255) / 255 * c * 255 << 8) + (255 & h) / 255 * d * 255
        }
    },c.Graphics = function (a, b, d) {
        void 0 === b && (b = 0), void 0 === d && (d = 0), this.type = c.GRAPHICS, this.physicsType = c.SPRITE, this.anchor = new c.Point, PIXI.Graphics.call(this), c.Component.Core.init.call(this, a, b, d, "", null)
    },c.Graphics.prototype = Object.create(PIXI.Graphics.prototype),c.Graphics.prototype.constructor = c.Graphics,c.Component.Core.install.call(c.Graphics.prototype, ["Angle", "AutoCull", "Bounds", "Destroy", "FixedToCamera", "InputEnabled", "InWorld", "LifeSpan", "PhysicsBody", "Reset"]),c.Graphics.prototype.preUpdatePhysics = c.Component.PhysicsBody.preUpdate,c.Graphics.prototype.preUpdateLifeSpan = c.Component.LifeSpan.preUpdate,c.Graphics.prototype.preUpdateInWorld = c.Component.InWorld.preUpdate,c.Graphics.prototype.preUpdateCore = c.Component.Core.preUpdate,c.Graphics.prototype.preUpdate = function () {
        return !!(this.preUpdatePhysics() && this.preUpdateLifeSpan() && this.preUpdateInWorld()) && this.preUpdateCore()
    },c.Graphics.prototype.postUpdate = function () {
        c.Component.PhysicsBody.postUpdate.call(this), c.Component.FixedToCamera.postUpdate.call(this), this._boundsDirty && (this.updateLocalBounds(), this._boundsDirty = !1);
        for (var a = 0; a < this.children.length; a++) this.children[a].postUpdate()
    },c.Graphics.prototype.destroy = function (a) {
        this.clear(), c.Component.Destroy.prototype.destroy.call(this, a)
    },c.Graphics.prototype.drawTriangle = function (a, b) {
        void 0 === b && (b = !1);
        var d = new c.Polygon(a);
        if (b) {
            var e = new c.Point(this.game.camera.x - a[0].x, this.game.camera.y - a[0].y),
                f = new c.Point(a[1].x - a[0].x, a[1].y - a[0].y), g = new c.Point(a[1].x - a[2].x, a[1].y - a[2].y),
                h = g.cross(f);
            e.dot(h) > 0 && this.drawPolygon(d)
        } else this.drawPolygon(d)
    },c.Graphics.prototype.drawTriangles = function (a, b, d) {
        void 0 === d && (d = !1);
        var e, f = new c.Point, g = new c.Point, h = new c.Point, i = [];
        if (b) if (a[0] instanceof c.Point) for (e = 0; e < b.length / 3; e++) i.push(a[b[3 * e]]), i.push(a[b[3 * e + 1]]), i.push(a[b[3 * e + 2]]), 3 === i.length && (this.drawTriangle(i, d), i = []); else for (e = 0; e < b.length; e++) f.x = a[2 * b[e]], f.y = a[2 * b[e] + 1], i.push(f.copyTo({})), 3 === i.length && (this.drawTriangle(i, d), i = []); else if (a[0] instanceof c.Point) for (e = 0; e < a.length / 3; e++) this.drawTriangle([a[3 * e], a[3 * e + 1], a[3 * e + 2]], d); else for (e = 0; e < a.length / 6; e++) f.x = a[6 * e + 0], f.y = a[6 * e + 1], g.x = a[6 * e + 2], g.y = a[6 * e + 3], h.x = a[6 * e + 4], h.y = a[6 * e + 5], this.drawTriangle([f, g, h], d)
    },c.RenderTexture = function (a, b, d, e, f, g) {
        void 0 === e && (e = ""), void 0 === f && (f = c.scaleModes.DEFAULT), void 0 === g && (g = 1), this.game = a, this.key = e, this.type = c.RENDERTEXTURE, this._tempMatrix = new PIXI.Matrix, PIXI.RenderTexture.call(this, b, d, this.game.renderer, f, g), this.render = c.RenderTexture.prototype.render
    },c.RenderTexture.prototype = Object.create(PIXI.RenderTexture.prototype),c.RenderTexture.prototype.constructor = c.RenderTexture,c.RenderTexture.prototype.renderXY = function (a, b, c, d) {
        a.updateTransform(), this._tempMatrix.copyFrom(a.worldTransform), this._tempMatrix.tx = b, this._tempMatrix.ty = c, this.renderer.type === PIXI.WEBGL_RENDERER ? this.renderWebGL(a, this._tempMatrix, d) : this.renderCanvas(a, this._tempMatrix, d)
    },c.RenderTexture.prototype.renderRawXY = function (a, b, c, d) {
        this._tempMatrix.identity().translate(b, c), this.renderer.type === PIXI.WEBGL_RENDERER ? this.renderWebGL(a, this._tempMatrix, d) : this.renderCanvas(a, this._tempMatrix, d)
    },c.RenderTexture.prototype.render = function (a, b, c) {
        void 0 === b || null === b ? this._tempMatrix.copyFrom(a.worldTransform) : this._tempMatrix.copyFrom(b), this.renderer.type === PIXI.WEBGL_RENDERER ? this.renderWebGL(a, this._tempMatrix, c) : this.renderCanvas(a, this._tempMatrix, c)
    },c.Text = function (a, b, d, e, f) {
        b = b || 0, d = d || 0, e = void 0 === e || null === e ? "" : e.toString(), f = c.Utils.extend({}, f), this.type = c.TEXT, this.physicsType = c.SPRITE, this.padding = new c.Point, this.textBounds = null, this.canvas = PIXI.CanvasPool.create(this), this.context = this.canvas.getContext("2d"), this.colors = [], this.strokeColors = [], this.fontStyles = [], this.fontWeights = [], this.autoRound = !1, this.useAdvancedWrap = !1, this._res = a.renderer.resolution, this._text = e, this._fontComponents = null, this._lineSpacing = 0, this._charCount = 0, this._width = 0, this._height = 0, c.Sprite.call(this, a, b, d, PIXI.Texture.fromCanvas(this.canvas)), this.setStyle(f), "" !== e && this.updateText()
    },c.Text.prototype = Object.create(c.Sprite.prototype),c.Text.prototype.constructor = c.Text,c.Text.prototype.preUpdate = function () {
        return !!(this.preUpdatePhysics() && this.preUpdateLifeSpan() && this.preUpdateInWorld()) && this.preUpdateCore()
    },c.Text.prototype.update = function () {
    },c.Text.prototype.destroy = function (a) {
        this.texture.destroy(!0), c.Component.Destroy.prototype.destroy.call(this, a)
    },c.Text.prototype.setShadow = function (a, b, c, d, e, f) {
        return void 0 === a && (a = 0), void 0 === b && (b = 0), void 0 === c && (c = "rgba(0, 0, 0, 1)"), void 0 === d && (d = 0), void 0 === e && (e = !0), void 0 === f && (f = !0), this.style.shadowOffsetX = a, this.style.shadowOffsetY = b, this.style.shadowColor = c, this.style.shadowBlur = d, this.style.shadowStroke = e, this.style.shadowFill = f, this.dirty = !0, this
    },c.Text.prototype.setStyle = function (a, b) {
        void 0 === b && (b = !1), a = a || {}, a.font = a.font || "bold 20pt Arial", a.backgroundColor = a.backgroundColor || null, a.fill = a.fill || "black", a.align = a.align || "left", a.boundsAlignH = a.boundsAlignH || "left", a.boundsAlignV = a.boundsAlignV || "top", a.stroke = a.stroke || "black", a.strokeThickness = a.strokeThickness || 0, a.wordWrap = a.wordWrap || !1, a.wordWrapWidth = a.wordWrapWidth || 100, a.maxLines = a.maxLines || 0, a.shadowOffsetX = a.shadowOffsetX || 0, a.shadowOffsetY = a.shadowOffsetY || 0, a.shadowColor = a.shadowColor || "rgba(0,0,0,0)", a.shadowBlur = a.shadowBlur || 0, a.tabs = a.tabs || 0;
        var c = this.fontToComponents(a.font);
        return a.fontStyle && (c.fontStyle = a.fontStyle), a.fontVariant && (c.fontVariant = a.fontVariant), a.fontWeight && (c.fontWeight = a.fontWeight), a.fontSize && ("number" == typeof a.fontSize && (a.fontSize = a.fontSize + "px"), c.fontSize = a.fontSize), this._fontComponents = c, a.font = this.componentsToFont(this._fontComponents), this.style = a, this.dirty = !0, b && this.updateText(), this
    },c.Text.prototype.updateText = function () {
        this.texture.baseTexture.resolution = this._res, this.context.font = this.style.font;
        var a = this.text;
        this.style.wordWrap && (a = this.runWordWrap(this.text));
        var b = a.split(/(?:\r\n|\r|\n)/), c = this.style.tabs, d = [], e = 0,
            f = this.determineFontProperties(this.style.font), g = b.length;
        this.style.maxLines > 0 && this.style.maxLines < b.length && (g = this.style.maxLines), this._charCount = 0;
        for (var h = 0; h < g; h++) {
            if (0 === c) {
                var i = this.style.strokeThickness + this.padding.x;
                i += this.colors.length > 0 || this.strokeColors.length > 0 || this.fontWeights.length > 0 || this.fontStyles.length > 0 ? this.measureLine(b[h]) : this.context.measureText(b[h]).width, this.style.wordWrap && (i -= this.context.measureText(" ").width)
            } else {
                var j = b[h].split(/(?:\t)/), i = this.padding.x + this.style.strokeThickness;
                if (Array.isArray(c)) for (var k = 0, l = 0; l < j.length; l++) {
                    var m = 0;
                    m = this.colors.length > 0 || this.strokeColors.length > 0 || this.fontWeights.length > 0 || this.fontStyles.length > 0 ? this.measureLine(j[l]) : Math.ceil(this.context.measureText(j[l]).width), l > 0 && (k += c[l - 1]), i = k + m
                } else for (var l = 0; l < j.length; l++) {
                    i += this.colors.length > 0 || this.strokeColors.length > 0 || this.fontWeights.length > 0 || this.fontStyles.length > 0 ? this.measureLine(j[l]) : Math.ceil(this.context.measureText(j[l]).width);
                    var n = this.game.math.snapToCeil(i, c) - i;
                    i += n
                }
            }
            d[h] = Math.ceil(i), e = Math.max(e, d[h])
        }
        this.canvas.width = e * this._res;
        var o = f.fontSize + this.style.strokeThickness + this.padding.y, p = o * g, q = this._lineSpacing;
        q < 0 && Math.abs(q) > o && (q = -o), 0 !== q && (p += q > 0 ? q * b.length : q * (b.length - 1)), this.canvas.height = p * this._res, this.context.scale(this._res, this._res), navigator.isCocoonJS && this.context.clearRect(0, 0, this.canvas.width, this.canvas.height), this.style.backgroundColor && (this.context.fillStyle = this.style.backgroundColor, this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)), this.context.fillStyle = this.style.fill, this.context.font = this.style.font, this.context.strokeStyle = this.style.stroke, this.context.textBaseline = "alphabetic", this.context.lineWidth = this.style.strokeThickness, this.context.lineCap = "round", this.context.lineJoin = "round";
        var r, s;
        for (this._charCount = 0, h = 0; h < g; h++) r = this.style.strokeThickness / 2, s = this.style.strokeThickness / 2 + h * o + f.ascent, h > 0 && (s += q * h), "right" === this.style.align ? r += e - d[h] : "center" === this.style.align && (r += (e - d[h]) / 2), this.autoRound && (r = Math.round(r), s = Math.round(s)), this.colors.length > 0 || this.strokeColors.length > 0 || this.fontWeights.length > 0 || this.fontStyles.length > 0 ? this.updateLine(b[h], r, s) : (this.style.stroke && this.style.strokeThickness && (this.updateShadow(this.style.shadowStroke), 0 === c ? this.context.strokeText(b[h], r, s) : this.renderTabLine(b[h], r, s, !1)), this.style.fill && (this.updateShadow(this.style.shadowFill), 0 === c ? this.context.fillText(b[h], r, s) : this.renderTabLine(b[h], r, s, !0)));
        this.updateTexture(), this.dirty = !1
    },c.Text.prototype.renderTabLine = function (a, b, c, d) {
        var e = a.split(/(?:\t)/), f = this.style.tabs, g = 0;
        if (Array.isArray(f)) for (var h = 0, i = 0; i < e.length; i++) i > 0 && (h += f[i - 1]), g = b + h, d ? this.context.fillText(e[i], g, c) : this.context.strokeText(e[i], g, c); else for (var i = 0; i < e.length; i++) {
            var j = Math.ceil(this.context.measureText(e[i]).width);
            g = this.game.math.snapToCeil(b, f), d ? this.context.fillText(e[i], g, c) : this.context.strokeText(e[i], g, c), b = g + j
        }
    },c.Text.prototype.updateShadow = function (a) {
        a ? (this.context.shadowOffsetX = this.style.shadowOffsetX, this.context.shadowOffsetY = this.style.shadowOffsetY, this.context.shadowColor = this.style.shadowColor, this.context.shadowBlur = this.style.shadowBlur) : (this.context.shadowOffsetX = 0, this.context.shadowOffsetY = 0, this.context.shadowColor = 0, this.context.shadowBlur = 0)
    },c.Text.prototype.measureLine = function (a) {
        for (var b = 0, c = 0; c < a.length; c++) {
            var d = a[c];
            if (this.fontWeights.length > 0 || this.fontStyles.length > 0) {
                var e = this.fontToComponents(this.context.font);
                this.fontStyles[this._charCount] && (e.fontStyle = this.fontStyles[this._charCount]), this.fontWeights[this._charCount] && (e.fontWeight = this.fontWeights[this._charCount]), this.context.font = this.componentsToFont(e)
            }
            this.style.stroke && this.style.strokeThickness && (this.strokeColors[this._charCount] && (this.context.strokeStyle = this.strokeColors[this._charCount]), this.updateShadow(this.style.shadowStroke)), this.style.fill && (this.colors[this._charCount] && (this.context.fillStyle = this.colors[this._charCount]), this.updateShadow(this.style.shadowFill)), b += this.context.measureText(d).width, this._charCount++
        }
        return Math.ceil(b)
    },c.Text.prototype.updateLine = function (a, b, c) {
        for (var d = 0; d < a.length; d++) {
            var e = a[d];
            if (this.fontWeights.length > 0 || this.fontStyles.length > 0) {
                var f = this.fontToComponents(this.context.font);
                this.fontStyles[this._charCount] && (f.fontStyle = this.fontStyles[this._charCount]), this.fontWeights[this._charCount] && (f.fontWeight = this.fontWeights[this._charCount]), this.context.font = this.componentsToFont(f)
            }
            this.style.stroke && this.style.strokeThickness && (this.strokeColors[this._charCount] && (this.context.strokeStyle = this.strokeColors[this._charCount]), this.updateShadow(this.style.shadowStroke), this.context.strokeText(e, b, c)), this.style.fill && (this.colors[this._charCount] && (this.context.fillStyle = this.colors[this._charCount]), this.updateShadow(this.style.shadowFill), this.context.fillText(e, b, c)), b += this.context.measureText(e).width, this._charCount++
        }
    },c.Text.prototype.clearColors = function () {
        return this.colors = [], this.strokeColors = [], this.dirty = !0, this
    },c.Text.prototype.clearFontValues = function () {
        return this.fontStyles = [], this.fontWeights = [], this.dirty = !0, this
    },c.Text.prototype.addColor = function (a, b) {
        return this.colors[b] = a, this.dirty = !0, this
    },c.Text.prototype.addStrokeColor = function (a, b) {
        return this.strokeColors[b] = a, this.dirty = !0, this
    },c.Text.prototype.addFontStyle = function (a, b) {
        return this.fontStyles[b] = a, this.dirty = !0, this
    },c.Text.prototype.addFontWeight = function (a, b) {
        return this.fontWeights[b] = a, this.dirty = !0, this
    },c.Text.prototype.precalculateWordWrap = function (a) {
        this.texture.baseTexture.resolution = this._res, this.context.font = this.style.font;
        var b = this.runWordWrap(a);
        return b.split(/(?:\r\n|\r|\n)/)
    },c.Text.prototype.runWordWrap = function (a) {
        return this.useAdvancedWrap ? this.advancedWordWrap(a) : this.basicWordWrap(a)
    },c.Text.prototype.advancedWordWrap = function (a) {
        for (var b = this.context, c = this.style.wordWrapWidth, d = "", e = a.replace(/ +/gi, " ").split(/\r?\n/gi), f = e.length, g = 0; g < f; g++) {
            var h = e[g], i = "";
            h = h.replace(/^ *|\s*$/gi, "");
            var j = b.measureText(h).width;
            if (j < c) d += h + "\n"; else {
                for (var k = c, l = h.split(" "), m = 0; m < l.length; m++) {
                    var n = l[m], o = n + " ", p = b.measureText(o).width;
                    if (p > k) {
                        if (0 === m) {
                            for (var q = o; q.length && (q = q.slice(0, -1), p = b.measureText(q).width, !(p <= k));) ;
                            if (!q.length) throw new Error("This text's wordWrapWidth setting is less than a single character!");
                            var r = n.substr(q.length);
                            l[m] = r, i += q
                        }
                        var s = l[m].length ? m : m + 1, t = l.slice(s).join(" ").replace(/[ \n]*$/gi, "");
                        e[g + 1] = t + " " + (e[g + 1] || ""), f = e.length;
                        break
                    }
                    i += o, k -= p
                }
                d += i.replace(/[ \n]*$/gi, "") + "\n"
            }
        }
        return d = d.replace(/[\s|\n]*$/gi, "")
    },c.Text.prototype.basicWordWrap = function (a) {
        for (var b = "", c = a.split("\n"), d = 0; d < c.length; d++) {
            for (var e = this.style.wordWrapWidth, f = c[d].split(" "), g = 0; g < f.length; g++) {
                var h = this.context.measureText(f[g]).width, i = h + this.context.measureText(" ").width;
                i > e ? (g > 0 && (b += "\n"), b += f[g] + " ", e = this.style.wordWrapWidth - h) : (e -= i, b += f[g] + " ")
            }
            d < c.length - 1 && (b += "\n")
        }
        return b
    },c.Text.prototype.updateFont = function (a) {
        var b = this.componentsToFont(a);
        this.style.font !== b && (this.style.font = b, this.dirty = !0, this.parent && this.updateTransform())
    },c.Text.prototype.fontToComponents = function (a) {
        var b = a.match(/^\s*(?:\b(normal|italic|oblique|inherit)?\b)\s*(?:\b(normal|small-caps|inherit)?\b)\s*(?:\b(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit)?\b)\s*(?:\b(xx-small|x-small|small|medium|large|x-large|xx-large|larger|smaller|0|\d*(?:[.]\d*)?(?:%|[a-z]{2,5}))?\b)\s*(.*)\s*$/);
        if (b) {
            var c = b[5].trim();
            return /^(?:inherit|serif|sans-serif|cursive|fantasy|monospace)$/.exec(c) || /['",]/.exec(c) || (c = "'" + c + "'"), {
                font: a,
                fontStyle: b[1] || "normal",
                fontVariant: b[2] || "normal",
                fontWeight: b[3] || "normal",
                fontSize: b[4] || "medium",
                fontFamily: c
            }
        }
        return console.warn("Phaser.Text - unparsable CSS font: " + a), {font: a}
    },c.Text.prototype.componentsToFont = function (a) {
        var b, c = [];
        return b = a.fontStyle, b && "normal" !== b && c.push(b), b = a.fontVariant, b && "normal" !== b && c.push(b), b = a.fontWeight, b && "normal" !== b && c.push(b), b = a.fontSize, b && "medium" !== b && c.push(b), b = a.fontFamily, b && c.push(b), c.length || c.push(a.font), c.join(" ")
    },c.Text.prototype.setText = function (a, b) {
        return void 0 === b && (b = !1), this.text = a.toString() || "", b ? this.updateText() : this.dirty = !0, this
    },c.Text.prototype.parseList = function (a) {
        if (!Array.isArray(a)) return this;
        for (var b = "", c = 0; c < a.length; c++) Array.isArray(a[c]) ? (b += a[c].join("\t"), c < a.length - 1 && (b += "\n")) : (b += a[c], c < a.length - 1 && (b += "\t"));
        return this.text = b, this.dirty = !0, this
    },c.Text.prototype.setTextBounds = function (a, b, d, e) {
        return void 0 === a ? this.textBounds = null : (this.textBounds ? this.textBounds.setTo(a, b, d, e) : this.textBounds = new c.Rectangle(a, b, d, e), this.style.wordWrapWidth > d && (this.style.wordWrapWidth = d)), this.updateTexture(), this
    },c.Text.prototype.updateTexture = function () {
        var a = this.texture.baseTexture, b = this.texture.crop, c = this.texture.frame, d = this.canvas.width,
            e = this.canvas.height;
        if (a.width = d, a.height = e, b.width = d, b.height = e, c.width = d, c.height = e, this.texture.width = d, this.texture.height = e, this._width = d, this._height = e, this.textBounds) {
            var f = this.textBounds.x, g = this.textBounds.y;
            "right" === this.style.boundsAlignH ? f += this.textBounds.width - this.canvas.width / this.resolution : "center" === this.style.boundsAlignH && (f += this.textBounds.halfWidth - this.canvas.width / this.resolution / 2), "bottom" === this.style.boundsAlignV ? g += this.textBounds.height - this.canvas.height / this.resolution : "middle" === this.style.boundsAlignV && (g += this.textBounds.halfHeight - this.canvas.height / this.resolution / 2), this.pivot.x = -f, this.pivot.y = -g
        }
        this.renderable = 0 !== d && 0 !== e, this.texture.requiresReTint = !0, this.texture.baseTexture.dirty()
    },c.Text.prototype._renderWebGL = function (a) {
        this.dirty && (this.updateText(), this.dirty = !1), PIXI.Sprite.prototype._renderWebGL.call(this, a)
    },c.Text.prototype._renderCanvas = function (a) {
        this.dirty && (this.updateText(), this.dirty = !1), PIXI.Sprite.prototype._renderCanvas.call(this, a)
    },c.Text.prototype.determineFontProperties = function (a) {
        var b = c.Text.fontPropertiesCache[a];
        if (!b) {
            b = {};
            var d = c.Text.fontPropertiesCanvas, e = c.Text.fontPropertiesContext;
            e.font = a;
            var f = Math.ceil(e.measureText("|MÉq").width), g = Math.ceil(e.measureText("|MÉq").width), h = 2 * g;
            if (g = 1.4 * g | 0, d.width = f, d.height = h, e.fillStyle = "#f00", e.fillRect(0, 0, f, h), e.font = a, e.textBaseline = "alphabetic", e.fillStyle = "#000", e.fillText("|MÉq", 0, g), !e.getImageData(0, 0, f, h)) return b.ascent = g, b.descent = g + 6, b.fontSize = b.ascent + b.descent, c.Text.fontPropertiesCache[a] = b, b;
            var i, j, k = e.getImageData(0, 0, f, h).data, l = k.length, m = 4 * f, n = 0, o = !1;
            for (i = 0; i < g; i++) {
                for (j = 0; j < m; j += 4) if (255 !== k[n + j]) {
                    o = !0;
                    break
                }
                if (o) break;
                n += m
            }
            for (b.ascent = g - i, n = l - m, o = !1, i = h; i > g; i--) {
                for (j = 0; j < m; j += 4) if (255 !== k[n + j]) {
                    o = !0;
                    break
                }
                if (o) break;
                n -= m
            }
            b.descent = i - g, b.descent += 6, b.fontSize = b.ascent + b.descent, c.Text.fontPropertiesCache[a] = b
        }
        return b
    },c.Text.prototype.getBounds = function (a) {
        return this.dirty && (this.updateText(), this.dirty = !1), PIXI.Sprite.prototype.getBounds.call(this, a)
    },Object.defineProperty(c.Text.prototype, "text", {
        get: function () {
            return this._text
        }, set: function (a) {
            a !== this._text && (this._text = a.toString() || "", this.dirty = !0, this.parent && this.updateTransform())
        }
    }),Object.defineProperty(c.Text.prototype, "cssFont", {
        get: function () {
            return this.componentsToFont(this._fontComponents)
        }, set: function (a) {
            a = a || "bold 20pt Arial", this._fontComponents = this.fontToComponents(a), this.updateFont(this._fontComponents)
        }
    }),Object.defineProperty(c.Text.prototype, "font", {
        get: function () {
            return this._fontComponents.fontFamily
        }, set: function (a) {
            a = a || "Arial", a = a.trim(), /^(?:inherit|serif|sans-serif|cursive|fantasy|monospace)$/.exec(a) || /['",]/.exec(a) || (a = "'" + a + "'"), this._fontComponents.fontFamily = a, this.updateFont(this._fontComponents)
        }
    }),Object.defineProperty(c.Text.prototype, "fontSize", {
        get: function () {
            var a = this._fontComponents.fontSize;
            return a && /(?:^0$|px$)/.exec(a) ? parseInt(a, 10) : a
        }, set: function (a) {
            a = a || "0", "number" == typeof a && (a += "px"), this._fontComponents.fontSize = a, this.updateFont(this._fontComponents)
        }
    }),Object.defineProperty(c.Text.prototype, "fontWeight", {
        get: function () {
            return this._fontComponents.fontWeight || "normal"
        }, set: function (a) {
            a = a || "normal", this._fontComponents.fontWeight = a, this.updateFont(this._fontComponents)
        }
    }),Object.defineProperty(c.Text.prototype, "fontStyle", {
        get: function () {
            return this._fontComponents.fontStyle || "normal"
        }, set: function (a) {
            a = a || "normal", this._fontComponents.fontStyle = a, this.updateFont(this._fontComponents)
        }
    }),Object.defineProperty(c.Text.prototype, "fontVariant", {
        get: function () {
            return this._fontComponents.fontVariant || "normal"
        }, set: function (a) {
            a = a || "normal", this._fontComponents.fontVariant = a, this.updateFont(this._fontComponents)
        }
    }),Object.defineProperty(c.Text.prototype, "fill", {
        get: function () {
            return this.style.fill
        }, set: function (a) {
            a !== this.style.fill && (this.style.fill = a, this.dirty = !0)
        }
    }),Object.defineProperty(c.Text.prototype, "align", {
        get: function () {
            return this.style.align
        }, set: function (a) {
            a !== this.style.align && (this.style.align = a, this.dirty = !0)
        }
    }),Object.defineProperty(c.Text.prototype, "resolution", {
        get: function () {
            return this._res
        }, set: function (a) {
            a !== this._res && (this._res = a, this.dirty = !0)
        }
    }),Object.defineProperty(c.Text.prototype, "tabs", {
        get: function () {
            return this.style.tabs
        }, set: function (a) {
            a !== this.style.tabs && (this.style.tabs = a, this.dirty = !0)
        }
    }),Object.defineProperty(c.Text.prototype, "boundsAlignH", {
        get: function () {
            return this.style.boundsAlignH
        }, set: function (a) {
            a !== this.style.boundsAlignH && (this.style.boundsAlignH = a, this.dirty = !0)
        }
    }),Object.defineProperty(c.Text.prototype, "boundsAlignV", {
        get: function () {
            return this.style.boundsAlignV
        }, set: function (a) {
            a !== this.style.boundsAlignV && (this.style.boundsAlignV = a, this.dirty = !0)
        }
    }),Object.defineProperty(c.Text.prototype, "stroke", {
        get: function () {
            return this.style.stroke
        }, set: function (a) {
            a !== this.style.stroke && (this.style.stroke = a, this.dirty = !0)
        }
    }),Object.defineProperty(c.Text.prototype, "strokeThickness", {
        get: function () {
            return this.style.strokeThickness
        }, set: function (a) {
            a !== this.style.strokeThickness && (this.style.strokeThickness = a, this.dirty = !0)
        }
    }),Object.defineProperty(c.Text.prototype, "wordWrap", {
        get: function () {
            return this.style.wordWrap
        }, set: function (a) {
            a !== this.style.wordWrap && (this.style.wordWrap = a, this.dirty = !0)
        }
    }),Object.defineProperty(c.Text.prototype, "wordWrapWidth", {
        get: function () {
            return this.style.wordWrapWidth
        }, set: function (a) {
            a !== this.style.wordWrapWidth && (this.style.wordWrapWidth = a, this.dirty = !0)
        }
    }),Object.defineProperty(c.Text.prototype, "lineSpacing", {
        get: function () {
            return this._lineSpacing
        }, set: function (a) {
            a !== this._lineSpacing && (this._lineSpacing = parseFloat(a), this.dirty = !0, this.parent && this.updateTransform())
        }
    }),Object.defineProperty(c.Text.prototype, "shadowOffsetX", {
        get: function () {
            return this.style.shadowOffsetX
        }, set: function (a) {
            a !== this.style.shadowOffsetX && (this.style.shadowOffsetX = a, this.dirty = !0)
        }
    }),Object.defineProperty(c.Text.prototype, "shadowOffsetY", {
        get: function () {
            return this.style.shadowOffsetY
        }, set: function (a) {
            a !== this.style.shadowOffsetY && (this.style.shadowOffsetY = a, this.dirty = !0)
        }
    }),Object.defineProperty(c.Text.prototype, "shadowColor", {
        get: function () {
            return this.style.shadowColor
        }, set: function (a) {
            a !== this.style.shadowColor && (this.style.shadowColor = a, this.dirty = !0)
        }
    }),Object.defineProperty(c.Text.prototype, "shadowBlur", {
        get: function () {
            return this.style.shadowBlur
        }, set: function (a) {
            a !== this.style.shadowBlur && (this.style.shadowBlur = a, this.dirty = !0)
        }
    }),Object.defineProperty(c.Text.prototype, "shadowStroke", {
        get: function () {
            return this.style.shadowStroke
        }, set: function (a) {
            a !== this.style.shadowStroke && (this.style.shadowStroke = a, this.dirty = !0)
        }
    }),Object.defineProperty(c.Text.prototype, "shadowFill", {
        get: function () {
            return this.style.shadowFill
        }, set: function (a) {
            a !== this.style.shadowFill && (this.style.shadowFill = a, this.dirty = !0)
        }
    }),Object.defineProperty(c.Text.prototype, "width", {
        get: function () {
            return this.dirty && (this.updateText(), this.dirty = !1), this.scale.x * this.texture.frame.width
        }, set: function (a) {
            this.scale.x = a / this.texture.frame.width, this._width = a
        }
    }),Object.defineProperty(c.Text.prototype, "height", {
        get: function () {
            return this.dirty && (this.updateText(), this.dirty = !1), this.scale.y * this.texture.frame.height
        }, set: function (a) {
            this.scale.y = a / this.texture.frame.height, this._height = a
        }
    }),c.Text.fontPropertiesCache = {},c.Text.fontPropertiesCanvas = document.createElement("canvas"),c.Text.fontPropertiesContext = c.Text.fontPropertiesCanvas.getContext("2d"),c.BitmapText = function (a, b, d, e, f, g, h) {
        b = b || 0, d = d || 0, e = e || "", f = f || "", g = g || 32, h = h || "left", PIXI.DisplayObjectContainer.call(this), this.type = c.BITMAPTEXT, this.physicsType = c.SPRITE, this.textWidth = 0, this.textHeight = 0, this.anchor = new c.Point, this._prevAnchor = new c.Point, this._glyphs = [], this._maxWidth = 0, this._text = f.toString() || "", this._data = a.cache.getBitmapFont(e), this._font = e, this._fontSize = g, this._align = h, this._tint = 16777215,
            this.updateText(), this.dirty = !1, c.Component.Core.init.call(this, a, b, d, "", null)
    },c.BitmapText.prototype = Object.create(PIXI.DisplayObjectContainer.prototype),c.BitmapText.prototype.constructor = c.BitmapText,c.Component.Core.install.call(c.BitmapText.prototype, ["Angle", "AutoCull", "Bounds", "Destroy", "FixedToCamera", "InputEnabled", "InWorld", "LifeSpan", "PhysicsBody", "Reset"]),c.BitmapText.prototype.preUpdatePhysics = c.Component.PhysicsBody.preUpdate,c.BitmapText.prototype.preUpdateLifeSpan = c.Component.LifeSpan.preUpdate,c.BitmapText.prototype.preUpdateInWorld = c.Component.InWorld.preUpdate,c.BitmapText.prototype.preUpdateCore = c.Component.Core.preUpdate,c.BitmapText.prototype.preUpdate = function () {
        return !!(this.preUpdatePhysics() && this.preUpdateLifeSpan() && this.preUpdateInWorld()) && this.preUpdateCore()
    },c.BitmapText.prototype.postUpdate = function () {
        c.Component.PhysicsBody.postUpdate.call(this), c.Component.FixedToCamera.postUpdate.call(this), this.body && this.body.type === c.Physics.ARCADE && (this.textWidth === this.body.sourceWidth && this.textHeight === this.body.sourceHeight || this.body.setSize(this.textWidth, this.textHeight))
    },c.BitmapText.prototype.setText = function (a) {
        this.text = a
    };
    c.BitmapText.prototype.scanLine = function (a, b, c) {
        for (var d = 0, e = 0, f = -1, g = 0, h = null, i = this._maxWidth > 0 ? this._maxWidth : null, j = [], k = 0; k < c.length; k++) {
            var l = k === c.length - 1;
            if (/(?:\r\n|\r|\n)/.test(c.charAt(k))) return {width: e, text: c.substr(0, k), end: l, chars: j};
            var m = c.charCodeAt(k), n = a.chars[m], o = 0;
            void 0 === n && (m = 32, n = a.chars[m]);
            var p = h && n.kerning[h] ? n.kerning[h] : 0;
            if (/(\s)/.test(c.charAt(k)) && (f = k, g = e), o = (p + n.texture.width + n.xOffset) * b, i && e + o >= i && f > -1) return {
                width: g || e,
                text: c.substr(0, k - (k - f)),
                end: l,
                chars: j
            };
            e += (n.xAdvance + p) * b, j.push(d + (n.xOffset + p) * b), d += (n.xAdvance + p) * b, h = m
        }
        return {width: e, text: c, end: l, chars: j}
    };
    c.BitmapText.prototype.cleanText = function (a, b) {
        void 0 === b && (b = "");
        var c = this._data.font;
        if (!c) return "";
        for (var d = /\r\n|\n\r|\n|\r/g, e = a.replace(d, "\n").split("\n"), f = 0; f < e.length; f++) {
            for (var g = "", h = e[f], i = 0; i < h.length; i++) g = c.chars[h.charCodeAt(i)] ? g.concat(h[i]) : g.concat(b);
            e[f] = g
        }
        return e.join("\n")
    }, c.BitmapText.prototype.updateText = function () {
        var a = this._data.font;
        if (a) {
            var b = this.text, c = this._fontSize / a.size, d = [], e = 0;
            this.textWidth = 0;
            do {
                var f = this.scanLine(a, c, b);
                f.y = e, d.push(f), f.width > this.textWidth && (this.textWidth = f.width), e += a.lineHeight * c, b = b.substr(f.text.length + 1)
            } while (f.end === !1);
            this.textHeight = e;
            for (var g = 0, h = 0, i = this.textWidth * this.anchor.x, j = this.textHeight * this.anchor.y, k = 0; k < d.length; k++) {
                var f = d[k];
                "right" === this._align ? h = this.textWidth - f.width : "center" === this._align && (h = (this.textWidth - f.width) / 2);
                for (var l = 0; l < f.text.length; l++) {
                    var m = f.text.charCodeAt(l), n = a.chars[m];
                    void 0 === n && (m = 32, n = a.chars[m]);
                    var o = this._glyphs[g];
                    o ? o.texture = n.texture : (o = new PIXI.Sprite(n.texture), o.name = f.text[l], this._glyphs.push(o)), o.position.x = f.chars[l] + h - i, o.position.y = f.y + n.yOffset * c - j, o.scale.set(c), o.tint = this.tint, o.texture.requiresReTint = !0, o.parent || this.addChild(o), g++
                }
            }
            for (k = g; k < this._glyphs.length; k++) this.removeChild(this._glyphs[k])
        }
    }, c.BitmapText.prototype.purgeGlyphs = function () {
        for (var a = this._glyphs.length, b = [], c = 0; c < this._glyphs.length; c++) this._glyphs[c].parent !== this ? this._glyphs[c].destroy() : b.push(this._glyphs[c]);
        return this._glyphs = [], this._glyphs = b, this.updateText(), a - b.length
    }, c.BitmapText.prototype.updateTransform = function () {
        !this.dirty && this.anchor.equals(this._prevAnchor) || (this.updateText(), this.dirty = !1, this._prevAnchor.copyFrom(this.anchor)), PIXI.DisplayObjectContainer.prototype.updateTransform.call(this)
    }, Object.defineProperty(c.BitmapText.prototype, "align", {
        get: function () {
            return this._align
        }, set: function (a) {
            a === this._align || "left" !== a && "center" !== a && "right" !== a || (this._align = a, this.updateText())
        }
    }), Object.defineProperty(c.BitmapText.prototype, "tint", {
        get: function () {
            return this._tint
        }, set: function (a) {
            a !== this._tint && (this._tint = a, this.updateText())
        }
    }), Object.defineProperty(c.BitmapText.prototype, "font", {
        get: function () {
            return this._font
        }, set: function (a) {
            a !== this._font && (this._font = a.trim(), this._data = this.game.cache.getBitmapFont(this._font), this.updateText())
        }
    }), Object.defineProperty(c.BitmapText.prototype, "fontSize", {
        get: function () {
            return this._fontSize
        }, set: function (a) {
            a = parseInt(a, 10), a !== this._fontSize && a > 0 && (this._fontSize = a, this.updateText())
        }
    }), Object.defineProperty(c.BitmapText.prototype, "text", {
        get: function () {
            return this._text
        }, set: function (a) {
            a !== this._text && (this._text = a.toString() || "", this.updateText())
        }
    }), Object.defineProperty(c.BitmapText.prototype, "maxWidth", {
        get: function () {
            return this._maxWidth
        }, set: function (a) {
            a !== this._maxWidth && (this._maxWidth = a, this.updateText())
        }
    }), Object.defineProperty(c.BitmapText.prototype, "smoothed", {
        get: function () {
            return !this._data.base.scaleMode
        }, set: function (a) {
            a ? this._data.base.scaleMode = 0 : this._data.base.scaleMode = 1
        }
    }), c.RetroFont = function (a, b, d, e, f, g, h, i, j, k) {
        if (!a.cache.checkImageKey(b)) return !1;
        void 0 !== g && null !== g || (g = a.cache.getImage(b).width / d), this.characterWidth = d, this.characterHeight = e, this.characterSpacingX = h || 0, this.characterSpacingY = i || 0, this.characterPerRow = g, this.offsetX = j || 0, this.offsetY = k || 0, this.align = "left", this.multiLine = !1, this.autoUpperCase = !0, this.customSpacingX = 0, this.customSpacingY = 0, this.fixedWidth = 0, this.fontSet = a.cache.getImage(b), this._text = "", this.grabData = [], this.frameData = new c.FrameData;
        for (var l = this.offsetX, m = this.offsetY, n = 0, o = 0; o < f.length; o++) {
            var p = this.frameData.addFrame(new c.Frame(o, l, m, this.characterWidth, this.characterHeight));
            this.grabData[f.charCodeAt(o)] = p.index, n++, n === this.characterPerRow ? (n = 0, l = this.offsetX, m += this.characterHeight + this.characterSpacingY) : l += this.characterWidth + this.characterSpacingX
        }
        a.cache.updateFrameData(b, this.frameData), this.stamp = new c.Image(a, 0, 0, b, 0), c.RenderTexture.call(this, a, 100, 100, "", c.scaleModes.NEAREST), this.type = c.RETROFONT
    }, c.RetroFont.prototype = Object.create(c.RenderTexture.prototype), c.RetroFont.prototype.constructor = c.RetroFont, c.RetroFont.ALIGN_LEFT = "left", c.RetroFont.ALIGN_RIGHT = "right", c.RetroFont.ALIGN_CENTER = "center", c.RetroFont.TEXT_SET1 = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~", c.RetroFont.TEXT_SET2 = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", c.RetroFont.TEXT_SET3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ", c.RetroFont.TEXT_SET4 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789", c.RetroFont.TEXT_SET5 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ.,/() '!?-*:0123456789", c.RetroFont.TEXT_SET6 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!?:;0123456789\"(),-.' ", c.RetroFont.TEXT_SET7 = "AGMSY+:4BHNTZ!;5CIOU.?06DJPV,(17EKQW\")28FLRX-'39", c.RetroFont.TEXT_SET8 = "0123456789 .ABCDEFGHIJKLMNOPQRSTUVWXYZ", c.RetroFont.TEXT_SET9 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ()-0123456789.:,'\"?!", c.RetroFont.TEXT_SET10 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", c.RetroFont.TEXT_SET11 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ.,\"-+!?()':;0123456789", c.RetroFont.prototype.setFixedWidth = function (a, b) {
        void 0 === b && (b = "left"), this.fixedWidth = a, this.align = b
    }, c.RetroFont.prototype.setText = function (a, b, c, d, e, f) {
        this.multiLine = b || !1, this.customSpacingX = c || 0, this.customSpacingY = d || 0, this.align = e || "left", f ? this.autoUpperCase = !1 : this.autoUpperCase = !0, a.length > 0 && (this.text = a)
    }, c.RetroFont.prototype.buildRetroFontText = function () {
        var a = 0, b = 0;
        if (this.clear(), this.multiLine) {
            var d = this._text.split("\n");
            this.fixedWidth > 0 ? this.resize(this.fixedWidth, d.length * (this.characterHeight + this.customSpacingY) - this.customSpacingY, !0) : this.resize(this.getLongestLine() * (this.characterWidth + this.customSpacingX), d.length * (this.characterHeight + this.customSpacingY) - this.customSpacingY, !0);
            for (var e = 0; e < d.length; e++) a = 0, this.align === c.RetroFont.ALIGN_RIGHT ? a = this.width - d[e].length * (this.characterWidth + this.customSpacingX) : this.align === c.RetroFont.ALIGN_CENTER && (a = this.width / 2 - d[e].length * (this.characterWidth + this.customSpacingX) / 2, a += this.customSpacingX / 2), a < 0 && (a = 0), this.pasteLine(d[e], a, b, this.customSpacingX), b += this.characterHeight + this.customSpacingY
        } else this.fixedWidth > 0 ? this.resize(this.fixedWidth, this.characterHeight, !0) : this.resize(this._text.length * (this.characterWidth + this.customSpacingX), this.characterHeight, !0), a = 0, this.align === c.RetroFont.ALIGN_RIGHT ? a = this.width - this._text.length * (this.characterWidth + this.customSpacingX) : this.align === c.RetroFont.ALIGN_CENTER && (a = this.width / 2 - this._text.length * (this.characterWidth + this.customSpacingX) / 2, a += this.customSpacingX / 2), a < 0 && (a = 0), this.pasteLine(this._text, a, 0, this.customSpacingX);
        this.requiresReTint = !0
    }, c.RetroFont.prototype.pasteLine = function (a, b, c, d) {
        for (var e = 0; e < a.length; e++) if (" " === a.charAt(e)) b += this.characterWidth + d; else if (this.grabData[a.charCodeAt(e)] >= 0 && (this.stamp.frame = this.grabData[a.charCodeAt(e)], this.renderXY(this.stamp, b, c, !1), b += this.characterWidth + d, b > this.width)) break
    }, c.RetroFont.prototype.getLongestLine = function () {
        var a = 0;
        if (this._text.length > 0) for (var b = this._text.split("\n"), c = 0; c < b.length; c++) b[c].length > a && (a = b[c].length);
        return a
    }, c.RetroFont.prototype.removeUnsupportedCharacters = function (a) {
        for (var b = "", c = 0; c < this._text.length; c++) {
            var d = this._text[c], e = d.charCodeAt(0);
            (this.grabData[e] >= 0 || !a && "\n" === d) && (b = b.concat(d))
        }
        return b
    }, c.RetroFont.prototype.updateOffset = function (a, b) {
        if (this.offsetX !== a || this.offsetY !== b) {
            for (var c = a - this.offsetX, d = b - this.offsetY, e = this.game.cache.getFrameData(this.stamp.key).getFrames(), f = e.length; f--;) e[f].x += c, e[f].y += d;
            this.buildRetroFontText()
        }
    }, Object.defineProperty(c.RetroFont.prototype, "text", {
        get: function () {
            return this._text
        }, set: function (a) {
            var b;
            b = this.autoUpperCase ? a.toUpperCase() : a, b !== this._text && (this._text = b, this.removeUnsupportedCharacters(this.multiLine), this.buildRetroFontText())
        }
    }), Object.defineProperty(c.RetroFont.prototype, "smoothed", {
        get: function () {
            return this.stamp.smoothed
        }, set: function (a) {
            this.stamp.smoothed = a, this.buildRetroFontText()
        }
    }), c.Rope = function (a, b, d, e, f, g) {
        this.points = [], this.points = g, this._hasUpdateAnimation = !1, this._updateAnimationCallback = null, b = b || 0, d = d || 0, e = e || null, f = f || null, this.type = c.ROPE, PIXI.Rope.call(this, c.Cache.DEFAULT, this.points), c.Component.Core.init.call(this, a, b, d, e, f)
    }, c.Rope.prototype = Object.create(PIXI.Rope.prototype), c.Rope.prototype.constructor = c.Rope, c.Component.Core.install.call(c.Rope.prototype, ["Angle", "Animation", "AutoCull", "Bounds", "BringToTop", "Crop", "Delta", "Destroy", "FixedToCamera", "InWorld", "LifeSpan", "LoadTexture", "Overlap", "PhysicsBody", "Reset", "ScaleMinMax", "Smoothed"]), c.Rope.prototype.preUpdatePhysics = c.Component.PhysicsBody.preUpdate, c.Rope.prototype.preUpdateLifeSpan = c.Component.LifeSpan.preUpdate, c.Rope.prototype.preUpdateInWorld = c.Component.InWorld.preUpdate, c.Rope.prototype.preUpdateCore = c.Component.Core.preUpdate, c.Rope.prototype.preUpdate = function () {
        return !!(this.preUpdatePhysics() && this.preUpdateLifeSpan() && this.preUpdateInWorld()) && this.preUpdateCore()
    }, c.Rope.prototype.update = function () {
        this._hasUpdateAnimation && this.updateAnimation.call(this)
    }, c.Rope.prototype.reset = function (a, b) {
        return c.Component.Reset.prototype.reset.call(this, a, b), this
    }, Object.defineProperty(c.Rope.prototype, "updateAnimation", {
        get: function () {
            return this._updateAnimation
        }, set: function (a) {
            a && "function" == typeof a ? (this._hasUpdateAnimation = !0, this._updateAnimation = a) : (this._hasUpdateAnimation = !1, this._updateAnimation = null)
        }
    }), Object.defineProperty(c.Rope.prototype, "segments", {
        get: function () {
            for (var a, b, d, e, f, g, h, i, j = [], k = 0; k < this.points.length; k++) a = 4 * k, b = this.vertices[a] * this.scale.x, d = this.vertices[a + 1] * this.scale.y, e = this.vertices[a + 4] * this.scale.x, f = this.vertices[a + 3] * this.scale.y, g = c.Math.difference(b, e), h = c.Math.difference(d, f), b += this.world.x, d += this.world.y, i = new c.Rectangle(b, d, g, h), j.push(i);
            return j
        }
    }), c.TileSprite = function (a, b, d, e, f, g, h) {
        b = b || 0, d = d || 0, e = e || 256, f = f || 256, g = g || null, h = h || null, this.type = c.TILESPRITE, this.physicsType = c.SPRITE, this._scroll = new c.Point;
        var i = a.cache.getImage("__default", !0);
        PIXI.TilingSprite.call(this, new PIXI.Texture(i.base), e, f), c.Component.Core.init.call(this, a, b, d, g, h)
    }, c.TileSprite.prototype = Object.create(PIXI.TilingSprite.prototype), c.TileSprite.prototype.constructor = c.TileSprite, c.Component.Core.install.call(c.TileSprite.prototype, ["Angle", "Animation", "AutoCull", "Bounds", "BringToTop", "Destroy", "FixedToCamera", "Health", "InCamera", "InputEnabled", "InWorld", "LifeSpan", "LoadTexture", "Overlap", "PhysicsBody", "Reset", "Smoothed"]), c.TileSprite.prototype.preUpdatePhysics = c.Component.PhysicsBody.preUpdate, c.TileSprite.prototype.preUpdateLifeSpan = c.Component.LifeSpan.preUpdate, c.TileSprite.prototype.preUpdateInWorld = c.Component.InWorld.preUpdate, c.TileSprite.prototype.preUpdateCore = c.Component.Core.preUpdate, c.TileSprite.prototype.preUpdate = function () {
        return 0 !== this._scroll.x && (this.tilePosition.x += this._scroll.x * this.game.time.physicsElapsed), 0 !== this._scroll.y && (this.tilePosition.y += this._scroll.y * this.game.time.physicsElapsed), !!(this.preUpdatePhysics() && this.preUpdateLifeSpan() && this.preUpdateInWorld()) && this.preUpdateCore()
    }, c.TileSprite.prototype.autoScroll = function (a, b) {
        this._scroll.set(a, b)
    }, c.TileSprite.prototype.stopScroll = function () {
        this._scroll.set(0, 0)
    }, c.TileSprite.prototype.destroy = function (a) {
        c.Component.Destroy.prototype.destroy.call(this, a), PIXI.TilingSprite.prototype.destroy.call(this)
    }, c.TileSprite.prototype.reset = function (a, b) {
        return c.Component.Reset.prototype.reset.call(this, a, b), this.tilePosition.x = 0, this.tilePosition.y = 0, this
    }, c.Device = function () {
        this.deviceReadyAt = 0, this.initialized = !1, this.desktop = !1, this.iOS = !1, this.iOSVersion = 0, this.cocoonJS = !1, this.cocoonJSApp = !1, this.cordova = !1, this.node = !1, this.nodeWebkit = !1, this.electron = !1, this.ejecta = !1, this.crosswalk = !1, this.android = !1, this.chromeOS = !1, this.linux = !1, this.macOS = !1, this.windows = !1, this.windowsPhone = !1, this.canvas = !1, this.canvasBitBltShift = null, this.webGL = !1, this.file = !1, this.fileSystem = !1, this.localStorage = !1, this.worker = !1, this.css3D = !1, this.pointerLock = !1, this.typedArray = !1, this.vibration = !1, this.getUserMedia = !0, this.quirksMode = !1, this.touch = !1, this.mspointer = !1, this.wheelEvent = null, this.arora = !1, this.chrome = !1, this.chromeVersion = 0, this.epiphany = !1, this.firefox = !1, this.firefoxVersion = 0, this.ie = !1, this.ieVersion = 0, this.trident = !1, this.tridentVersion = 0, this.edge = !1, this.mobileSafari = !1, this.midori = !1, this.opera = !1, this.safari = !1, this.safariVersion = 0, this.webApp = !1, this.silk = !1, this.audioData = !1, this.webAudio = !1, this.ogg = !1, this.opus = !1, this.mp3 = !1, this.wav = !1, this.m4a = !1, this.webm = !1, this.dolby = !1, this.oggVideo = !1, this.h264Video = !1, this.mp4Video = !1, this.webmVideo = !1, this.vp9Video = !1, this.hlsVideo = !1, this.iPhone = !1, this.iPhone4 = !1, this.iPad = !1, this.pixelRatio = 0, this.littleEndian = !1, this.LITTLE_ENDIAN = !1, this.support32bit = !1, this.fullscreen = !1, this.requestFullscreen = "", this.cancelFullscreen = "", this.fullscreenKeyboard = !1
    }, c.Device = new c.Device, c.Device.onInitialized = new c.Signal, c.Device.whenReady = function (a, b, c) {
        var d = this._readyCheck;
        if (this.deviceReadyAt || !d) a.call(b, this); else if (d._monitor || c) d._queue = d._queue || [], d._queue.push([a, b]); else {
            d._monitor = d.bind(this), d._queue = d._queue || [], d._queue.push([a, b]);
            var e = "undefined" != typeof window.cordova, f = navigator.isCocoonJS;
            "complete" === document.readyState || "interactive" === document.readyState ? window.setTimeout(d._monitor, 0) : e && !f ? document.addEventListener("deviceready", d._monitor, !1) : (document.addEventListener("DOMContentLoaded", d._monitor, !1), window.addEventListener("load", d._monitor, !1))
        }
    }, c.Device._readyCheck = function () {
        var a = this._readyCheck;
        if (document.body) {
            if (!this.deviceReadyAt) {
                this.deviceReadyAt = Date.now(), document.removeEventListener("deviceready", a._monitor), document.removeEventListener("DOMContentLoaded", a._monitor), window.removeEventListener("load", a._monitor), this._initialize(), this.initialized = !0, this.onInitialized.dispatch(this);
                for (var b; b = a._queue.shift();) {
                    var c = b[0], d = b[1];
                    c.call(d, this)
                }
                this._readyCheck = null, this._initialize = null, this.onInitialized = null
            }
        } else window.setTimeout(a._monitor, 20)
    }, c.Device._initialize = function () {
        function a() {
            var a = navigator.userAgent;
            /Playstation Vita/.test(a) ? l.vita = !0 : /Kindle/.test(a) || /\bKF[A-Z][A-Z]+/.test(a) || /Silk.*Mobile Safari/.test(a) ? l.kindle = !0 : /Android/.test(a) ? l.android = !0 : /CrOS/.test(a) ? l.chromeOS = !0 : /iP[ao]d|iPhone/i.test(a) ? (l.iOS = !0, navigator.appVersion.match(/OS (\d+)/), l.iOSVersion = parseInt(RegExp.$1, 10)) : /Linux/.test(a) ? l.linux = !0 : /Mac OS/.test(a) ? l.macOS = !0 : /Windows/.test(a) && (l.windows = !0), (/Windows Phone/i.test(a) || /IEMobile/i.test(a)) && (l.android = !1, l.iOS = !1, l.macOS = !1, l.windows = !0, l.windowsPhone = !0);
            var b = /Silk/.test(a);
            (l.windows || l.macOS || l.linux && !b || l.chromeOS) && (l.desktop = !0), (l.windowsPhone || /Windows NT/i.test(a) && /Touch/i.test(a)) && (l.desktop = !1)
        }

        function b() {
            l.canvas = !!window.CanvasRenderingContext2D || l.cocoonJS;
            try {
                l.localStorage = !!localStorage.getItem
            } catch (a) {
                l.localStorage = !1
            }
            l.file = !!(window.File && window.FileReader && window.FileList && window.Blob), l.fileSystem = !!window.requestFileSystem, l.webGL = function () {
                try {
                    var a = document.createElement("canvas");
                    return a.screencanvas = !1, !!window.WebGLRenderingContext && (a.getContext("webgl") || a.getContext("experimental-webgl"))
                } catch (a) {
                    return !1
                }
            }(), l.webGL = !!l.webGL, l.worker = !!window.Worker, l.pointerLock = "pointerLockElement" in document || "mozPointerLockElement" in document || "webkitPointerLockElement" in document, l.quirksMode = "CSS1Compat" !== document.compatMode, navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia, window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL, l.getUserMedia = l.getUserMedia && !!navigator.getUserMedia && !!window.URL, l.firefox && l.firefoxVersion < 21 && (l.getUserMedia = !1), !l.iOS && (l.ie || l.firefox || l.chrome) && (l.canvasBitBltShift = !0), (l.safari || l.mobileSafari) && (l.canvasBitBltShift = !1)
        }

        function c() {
            ("ontouchstart" in document.documentElement || window.navigator.maxTouchPoints && window.navigator.maxTouchPoints >= 1) && (l.touch = !0), (window.navigator.msPointerEnabled || window.navigator.pointerEnabled) && (l.mspointer = !0), l.cocoonJS || ("onwheel" in window || l.ie && "WheelEvent" in window ? l.wheelEvent = "wheel" : "onmousewheel" in window ? l.wheelEvent = "mousewheel" : l.firefox && "MouseScrollEvent" in window && (l.wheelEvent = "DOMMouseScroll"))
        }

        function d() {
            for (var a = ["requestFullscreen", "requestFullScreen", "webkitRequestFullscreen", "webkitRequestFullScreen", "msRequestFullscreen", "msRequestFullScreen", "mozRequestFullScreen", "mozRequestFullscreen"], b = document.createElement("div"), c = 0; c < a.length; c++) if (b[a[c]]) {
                l.fullscreen = !0, l.requestFullscreen = a[c];
                break
            }
            var d = ["cancelFullScreen", "exitFullscreen", "webkitCancelFullScreen", "webkitExitFullscreen", "msCancelFullScreen", "msExitFullscreen", "mozCancelFullScreen", "mozExitFullscreen"];
            if (l.fullscreen) for (var c = 0; c < d.length; c++) if (document[d[c]]) {
                l.cancelFullscreen = d[c];
                break
            }
            window.Element && Element.ALLOW_KEYBOARD_INPUT && (l.fullscreenKeyboard = !0)
        }

        function e() {
            var a = navigator.userAgent;
            if (/Arora/.test(a) ? l.arora = !0 : /Edge\/\d+/.test(a) ? l.edge = !0 : /Chrome\/(\d+)/.test(a) && !l.windowsPhone ? (l.chrome = !0, l.chromeVersion = parseInt(RegExp.$1, 10)) : /Epiphany/.test(a) ? l.epiphany = !0 : /Firefox\D+(\d+)/.test(a) ? (l.firefox = !0, l.firefoxVersion = parseInt(RegExp.$1, 10)) : /AppleWebKit/.test(a) && l.iOS ? l.mobileSafari = !0 : /MSIE (\d+\.\d+);/.test(a) ? (l.ie = !0, l.ieVersion = parseInt(RegExp.$1, 10)) : /Midori/.test(a) ? l.midori = !0 : /Opera/.test(a) ? l.opera = !0 : /Safari\/(\d+)/.test(a) && !l.windowsPhone ? (l.safari = !0, /Version\/(\d+)\./.test(a) && (l.safariVersion = parseInt(RegExp.$1, 10))) : /Trident\/(\d+\.\d+)(.*)rv:(\d+\.\d+)/.test(a) && (l.ie = !0, l.trident = !0, l.tridentVersion = parseInt(RegExp.$1, 10), l.ieVersion = parseInt(RegExp.$3, 10)), /Silk/.test(a) && (l.silk = !0), navigator.standalone && (l.webApp = !0), "undefined" != typeof window.cordova && (l.cordova = !0), "undefined" != typeof process && "undefined" != typeof require && (l.node = !0), l.node && "object" == typeof process.versions && (l.nodeWebkit = !!process.versions["node-webkit"], l.electron = !!process.versions.electron), navigator.isCocoonJS && (l.cocoonJS = !0), l.cocoonJS) try {
                l.cocoonJSApp = "undefined" != typeof CocoonJS
            } catch (a) {
                l.cocoonJSApp = !1
            }
            "undefined" != typeof window.ejecta && (l.ejecta = !0), /Crosswalk/.test(a) && (l.crosswalk = !0)
        }

        function f() {
            var a = document.createElement("video"), b = !1;
            try {
                (b = !!a.canPlayType) && (a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, "") && (l.oggVideo = !0), a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, "") && (l.h264Video = !0, l.mp4Video = !0), a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "") && (l.webmVideo = !0), a.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, "") && (l.vp9Video = !0), a.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, "") && (l.hlsVideo = !0))
            } catch (a) {
            }
        }

        function g() {
            l.audioData = !!window.Audio, l.webAudio = !(!window.AudioContext && !window.webkitAudioContext);
            var a = document.createElement("audio"), b = !1;
            try {
                if ((b = !!a.canPlayType) && (a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, "") && (l.ogg = !0), (a.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, "") || a.canPlayType("audio/opus;").replace(/^no$/, "")) && (l.opus = !0), a.canPlayType("audio/mpeg;").replace(/^no$/, "") && (l.mp3 = !0), a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, "") && (l.wav = !0), (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;").replace(/^no$/, "")) && (l.m4a = !0), a.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "") && (l.webm = !0), "" !== a.canPlayType('audio/mp4;codecs="ec-3"'))) if (l.edge) l.dolby = !0; else if (l.safari && l.safariVersion >= 9 && /Mac OS X (\d+)_(\d+)/.test(navigator.userAgent)) {
                    var c = parseInt(RegExp.$1, 10), d = parseInt(RegExp.$2, 10);
                    (10 === c && d >= 11 || c > 10) && (l.dolby = !0)
                }
            } catch (a) {
            }
        }

        function h() {
            var a = new ArrayBuffer(4), b = new Uint8Array(a), c = new Uint32Array(a);
            return b[0] = 161, b[1] = 178, b[2] = 195, b[3] = 212, 3569595041 === c[0] || 2712847316 !== c[0] && null
        }

        function i() {
            if (void 0 === Uint8ClampedArray) return !1;
            var a = PIXI.CanvasPool.create(this, 1, 1), b = a.getContext("2d");
            if (!b) return !1;
            var c = b.createImageData(1, 1);
            return PIXI.CanvasPool.remove(this), c.data instanceof Uint8ClampedArray
        }

        function j() {
            l.pixelRatio = window.devicePixelRatio || 1, l.iPhone = navigator.userAgent.toLowerCase().indexOf("iphone") !== -1, l.iPhone4 = 2 === l.pixelRatio && l.iPhone, l.iPad = navigator.userAgent.toLowerCase().indexOf("ipad") !== -1, "undefined" != typeof Int8Array ? l.typedArray = !0 : l.typedArray = !1, "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array && "undefined" != typeof Uint32Array && (l.littleEndian = h(), l.LITTLE_ENDIAN = l.littleEndian), l.support32bit = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8ClampedArray && "undefined" != typeof Int32Array && null !== l.littleEndian && i(), navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate, navigator.vibrate && (l.vibration = !0)
        }

        function k() {
            var a, b = document.createElement("p"), c = {
                webkitTransform: "-webkit-transform",
                OTransform: "-o-transform",
                msTransform: "-ms-transform",
                MozTransform: "-moz-transform",
                transform: "transform"
            };
            document.body.insertBefore(b, null);
            for (var d in c) void 0 !== b.style[d] && (b.style[d] = "translate3d(1px,1px,1px)", a = window.getComputedStyle(b).getPropertyValue(c[d]));
            document.body.removeChild(b), l.css3D = void 0 !== a && a.length > 0 && "none" !== a
        }

        var l = this;
        a(), e(), g(), f(), k(), j(), b(), d(), c()
    }, c.Device.canPlayAudio = function (a) {
        return !("mp3" !== a || !this.mp3) || (!("ogg" !== a || !this.ogg && !this.opus) || (!("m4a" !== a || !this.m4a) || (!("opus" !== a || !this.opus) || (!("wav" !== a || !this.wav) || (!("webm" !== a || !this.webm) || !("mp4" !== a || !this.dolby))))))
    }, c.Device.canPlayVideo = function (a) {
        return !("webm" !== a || !this.webmVideo && !this.vp9Video) || (!("mp4" !== a || !this.mp4Video && !this.h264Video) || (!("ogg" !== a && "ogv" !== a || !this.oggVideo) || !("mpeg" !== a || !this.hlsVideo)))
    }, c.Device.isConsoleOpen = function () {
        return !(!window.console || !window.console.firebug) || !(!window.console || (console.profile(), console.profileEnd(), console.clear && console.clear(), !console.profiles)) && console.profiles.length > 0
    }, c.Device.isAndroidStockBrowser = function () {
        var a = window.navigator.userAgent.match(/Android.*AppleWebKit\/([\d.]+)/);
        return a && a[1] < 537
    }, c.Canvas = {
        create: function (a, b, c, d, e) {
            b = b || 256, c = c || 256;
            var f = e ? document.createElement("canvas") : PIXI.CanvasPool.create(a, b, c);
            return "string" == typeof d && "" !== d && (f.id = d), f.width = b, f.height = c, f.style.display = "block", f
        }, setBackgroundColor: function (a, b) {
            return b = b || "rgb(0,0,0)", a.style.backgroundColor = b, a
        }, setTouchAction: function (a, b) {
            return b = b || "none", a.style.msTouchAction = b, a.style["ms-touch-action"] = b, a.style["touch-action"] = b, a
        }, setUserSelect: function (a, b) {
            return b = b || "none", a.style["-webkit-touch-callout"] = b, a.style["-webkit-user-select"] = b, a.style["-khtml-user-select"] = b, a.style["-moz-user-select"] = b, a.style["-ms-user-select"] = b, a.style["user-select"] = b, a.style["-webkit-tap-highlight-color"] = "rgba(0, 0, 0, 0)", a
        }, addToDOM: function (a, b, c) {
            var d;
            return void 0 === c && (c = !0), b && ("string" == typeof b ? d = document.getElementById(b) : "object" == typeof b && 1 === b.nodeType && (d = b)), d || (d = document.body), c && d.style && (d.style.overflow = "hidden"), d.appendChild(a), a
        }, removeFromDOM: function (a) {
            a.parentNode && a.parentNode.removeChild(a)
        }, setTransform: function (a, b, c, d, e, f, g) {
            return a.setTransform(d, f, g, e, b, c), a
        }, setSmoothingEnabled: function (a, b) {
            var d = c.Canvas.getSmoothingPrefix(a);
            return d && (a[d] = b), a
        }, getSmoothingPrefix: function (a) {
            var b = ["i", "webkitI", "msI", "mozI", "oI"];
            for (var c in b) {
                var d = b[c] + "mageSmoothingEnabled";
                if (d in a) return d
            }
            return null
        }, getSmoothingEnabled: function (a) {
            var b = c.Canvas.getSmoothingPrefix(a);
            if (b) return a[b]
        }, setImageRenderingCrisp: function (a) {
            for (var b = ["optimizeSpeed", "crisp-edges", "-moz-crisp-edges", "-webkit-optimize-contrast", "optimize-contrast", "pixelated"], c = 0; c < b.length; c++) a.style["image-rendering"] = b[c];
            return a.style.msInterpolationMode = "nearest-neighbor", a
        }, setImageRenderingBicubic: function (a) {
            return a.style["image-rendering"] = "auto", a.style.msInterpolationMode = "bicubic", a
        }
    }, c.RequestAnimationFrame = function (a, b) {
        void 0 === b && (b = !1), this.game = a, this.isRunning = !1, this.forceSetTimeOut = b;
        for (var c = ["ms", "moz", "webkit", "o"], d = 0; d < c.length && !window.requestAnimationFrame; d++) window.requestAnimationFrame = window[c[d] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[c[d] + "CancelAnimationFrame"];
        this._isSetTimeOut = !1, this._onLoop = null, this._timeOutID = null
    }, c.RequestAnimationFrame.prototype = {
        start: function () {
            this.isRunning = !0;
            var a = this;
            !window.requestAnimationFrame || this.forceSetTimeOut ? (this._isSetTimeOut = !0, this._onLoop = function () {
                return a.updateSetTimeout()
            }, this._timeOutID = window.setTimeout(this._onLoop, 0)) : (this._isSetTimeOut = !1, this._onLoop = function (b) {
                return a.updateRAF(b)
            }, this._timeOutID = window.requestAnimationFrame(this._onLoop))
        }, updateRAF: function (a) {
            this.isRunning && (this.game.update(Math.floor(a)), this._timeOutID = window.requestAnimationFrame(this._onLoop))
        }, updateSetTimeout: function () {
            this.isRunning && (this.game.update(Date.now()), this._timeOutID = window.setTimeout(this._onLoop, this.game.time.timeToCall))
        }, stop: function () {
            this._isSetTimeOut ? clearTimeout(this._timeOutID) : window.cancelAnimationFrame(this._timeOutID), this.isRunning = !1
        }, isSetTimeOut: function () {
            return this._isSetTimeOut
        }, isRAF: function () {
            return this._isSetTimeOut === !1
        }
    }, c.RequestAnimationFrame.prototype.constructor = c.RequestAnimationFrame, c.Math = {
        PI2: 2 * Math.PI, between: function (a, b) {
            return Math.floor(Math.random() * (b - a + 1) + a)
        }, fuzzyEqual: function (a, b, c) {
            return void 0 === c && (c = 1e-4), Math.abs(a - b) < c
        }, fuzzyLessThan: function (a, b, c) {
            return void 0 === c && (c = 1e-4), a < b + c
        }, fuzzyGreaterThan: function (a, b, c) {
            return void 0 === c && (c = 1e-4), a > b - c
        }, fuzzyCeil: function (a, b) {
            return void 0 === b && (b = 1e-4), Math.ceil(a - b)
        }, fuzzyFloor: function (a, b) {
            return void 0 === b && (b = 1e-4), Math.floor(a + b)
        }, average: function () {
            for (var a = 0, b = arguments.length, c = 0; c < b; c++) a += +arguments[c];
            return a / b
        }, shear: function (a) {
            return a % 1
        }, snapTo: function (a, b, c) {
            return void 0 === c && (c = 0), 0 === b ? a : (a -= c, a = b * Math.round(a / b), c + a)
        }, snapToFloor: function (a, b, c) {
            return void 0 === c && (c = 0), 0 === b ? a : (a -= c, a = b * Math.floor(a / b), c + a)
        }, snapToCeil: function (a, b, c) {
            return void 0 === c && (c = 0), 0 === b ? a : (a -= c, a = b * Math.ceil(a / b), c + a)
        }, roundTo: function (a, b, c) {
            void 0 === b && (b = 0), void 0 === c && (c = 10);
            var d = Math.pow(c, -b);
            return Math.round(a * d) / d
        }, floorTo: function (a, b, c) {
            void 0 === b && (b = 0), void 0 === c && (c = 10);
            var d = Math.pow(c, -b);
            return Math.floor(a * d) / d
        }, ceilTo: function (a, b, c) {
            void 0 === b && (b = 0), void 0 === c && (c = 10);
            var d = Math.pow(c, -b);
            return Math.ceil(a * d) / d
        }, rotateToAngle: function (a, b, d) {
            return void 0 === d && (d = .05), a === b ? a : (Math.abs(b - a) <= d || Math.abs(b - a) >= c.Math.PI2 - d ? a = b : (Math.abs(b - a) > Math.PI && (b < a ? b += c.Math.PI2 : b -= c.Math.PI2), b > a ? a += d : b < a && (a -= d)), a)
        }, getShortestAngle: function (a, b) {
            var c = b - a;
            if (0 === c) return 0;
            var d = Math.floor((c - -180) / 360);
            return c - 360 * d
        }, angleBetween: function (a, b, c, d) {
            return Math.atan2(d - b, c - a)
        }, angleBetweenY: function (a, b, c, d) {
            return Math.atan2(c - a, d - b)
        }, angleBetweenPoints: function (a, b) {
            return Math.atan2(b.y - a.y, b.x - a.x)
        }, angleBetweenPointsY: function (a, b) {
            return Math.atan2(b.x - a.x, b.y - a.y)
        }, reverseAngle: function (a) {
            return this.normalizeAngle(a + Math.PI, !0)
        }, normalizeAngle: function (a) {
            return a %= 2 * Math.PI, a >= 0 ? a : a + 2 * Math.PI
        }, maxAdd: function (a, b, c) {
            return Math.min(a + b, c)
        }, minSub: function (a, b, c) {
            return Math.max(a - b, c)
        }, wrap: function (a, b, c) {
            var d = c - b;
            if (d <= 0) return 0;
            var e = (a - b) % d;
            return e < 0 && (e += d), e + b
        }, wrapValue: function (a, b, c) {
            var d;
            return a = Math.abs(a), b = Math.abs(b), c = Math.abs(c), d = (a + b) % c
        }, isOdd: function (a) {
            return !!(1 & a)
        }, isEven: function (a) {
            return !(1 & a)
        }, min: function () {
            if (1 === arguments.length && "object" == typeof arguments[0]) var a = arguments[0]; else var a = arguments;
            for (var b = 1, c = 0, d = a.length; b < d; b++) a[b] < a[c] && (c = b);
            return a[c]
        }, max: function () {
            if (1 === arguments.length && "object" == typeof arguments[0]) var a = arguments[0]; else var a = arguments;
            for (var b = 1, c = 0, d = a.length; b < d; b++) a[b] > a[c] && (c = b);
            return a[c]
        }, minProperty: function (a) {
            if (2 === arguments.length && "object" == typeof arguments[1]) var b = arguments[1]; else var b = arguments.slice(1);
            for (var c = 1, d = 0, e = b.length; c < e; c++) b[c][a] < b[d][a] && (d = c);
            return b[d][a]
        }, maxProperty: function (a) {
            if (2 === arguments.length && "object" == typeof arguments[1]) var b = arguments[1]; else var b = arguments.slice(1);
            for (var c = 1, d = 0, e = b.length; c < e; c++) b[c][a] > b[d][a] && (d = c);
            return b[d][a]
        }, wrapAngle: function (a, b) {
            return b ? this.wrap(a, -Math.PI, Math.PI) : this.wrap(a, -180, 180)
        }, linearInterpolation: function (a, b) {
            var c = a.length - 1, d = c * b, e = Math.floor(d);
            return b < 0 ? this.linear(a[0], a[1], d) : b > 1 ? this.linear(a[c], a[c - 1], c - d) : this.linear(a[e], a[e + 1 > c ? c : e + 1], d - e)
        }, bezierInterpolation: function (a, b) {
            for (var c = 0, d = a.length - 1, e = 0; e <= d; e++) c += Math.pow(1 - b, d - e) * Math.pow(b, e) * a[e] * this.bernstein(d, e);
            return c
        }, catmullRomInterpolation: function (a, b) {
            var c = a.length - 1, d = c * b, e = Math.floor(d);
            return a[0] === a[c] ? (b < 0 && (e = Math.floor(d = c * (1 + b))), this.catmullRom(a[(e - 1 + c) % c], a[e], a[(e + 1) % c], a[(e + 2) % c], d - e)) : b < 0 ? a[0] - (this.catmullRom(a[0], a[0], a[1], a[1], -d) - a[0]) : b > 1 ? a[c] - (this.catmullRom(a[c], a[c], a[c - 1], a[c - 1], d - c) - a[c]) : this.catmullRom(a[e ? e - 1 : 0], a[e], a[c < e + 1 ? c : e + 1], a[c < e + 2 ? c : e + 2], d - e)
        }, linear: function (a, b, c) {
            return (b - a) * c + a
        }, bernstein: function (a, b) {
            return this.factorial(a) / this.factorial(b) / this.factorial(a - b)
        }, factorial: function (a) {
            if (0 === a) return 1;
            for (var b = a; --a;) b *= a;
            return b
        }, catmullRom: function (a, b, c, d, e) {
            var f = .5 * (c - a), g = .5 * (d - b), h = e * e, i = e * h;
            return (2 * b - 2 * c + f + g) * i + (-3 * b + 3 * c - 2 * f - g) * h + f * e + b
        }, difference: function (a, b) {
            return Math.abs(a - b)
        }, roundAwayFromZero: function (a) {
            return a > 0 ? Math.ceil(a) : Math.floor(a)
        }, sinCosGenerator: function (a, b, c, d) {
            void 0 === b && (b = 1), void 0 === c && (c = 1), void 0 === d && (d = 1);
            for (var e = b, f = c, g = d * Math.PI / a, h = [], i = [], j = 0; j < a; j++) f -= e * g, e += f * g, h[j] = f, i[j] = e;
            return {sin: i, cos: h, length: a}
        }, distance: function (a, b, c, d) {
            var e = a - c, f = b - d;
            return Math.sqrt(e * e + f * f)
        }, distanceSq: function (a, b, c, d) {
            var e = a - c, f = b - d;
            return e * e + f * f
        }, distancePow: function (a, b, c, d, e) {
            return void 0 === e && (e = 2), Math.sqrt(Math.pow(c - a, e) + Math.pow(d - b, e))
        }, clamp: function (a, b, c) {
            return a < b ? b : c < a ? c : a
        }, clampBottom: function (a, b) {
            return a < b ? b : a
        }, within: function (a, b, c) {
            return Math.abs(a - b) <= c
        }, mapLinear: function (a, b, c, d, e) {
            return d + (a - b) * (e - d) / (c - b)
        }, smoothstep: function (a, b, c) {
            return a = Math.max(0, Math.min(1, (a - b) / (c - b))),
            a * a * (3 - 2 * a)
        }, smootherstep: function (a, b, c) {
            return a = Math.max(0, Math.min(1, (a - b) / (c - b))), a * a * a * (a * (6 * a - 15) + 10)
        }, sign: function (a) {
            return a < 0 ? -1 : a > 0 ? 1 : 0
        }, percent: function (a, b, c) {
            return void 0 === c && (c = 0), a > b || c > b ? 1 : a < c || c > a ? 0 : (a - c) / b
        }
    };
    var k = Math.PI / 180, l = 180 / Math.PI;
    return c.Math.degToRad = function (a) {
        return a * k
    }, c.Math.radToDeg = function (a) {
        return a * l
    }, c.RandomDataGenerator = function (a) {
        void 0 === a && (a = []), this.c = 1, this.s0 = 0, this.s1 = 0, this.s2 = 0, "string" == typeof a ? this.state(a) : this.sow(a)
    }, c.RandomDataGenerator.prototype = {
        rnd: function () {
            var a = 2091639 * this.s0 + 2.3283064365386963e-10 * this.c;
            return this.c = 0 | a, this.s0 = this.s1, this.s1 = this.s2, this.s2 = a - this.c, this.s2
        }, sow: function (a) {
            if (this.s0 = this.hash(" "), this.s1 = this.hash(this.s0), this.s2 = this.hash(this.s1), this.c = 1, a) for (var b = 0; b < a.length && null != a[b]; b++) {
                var c = a[b];
                this.s0 -= this.hash(c), this.s0 += ~~(this.s0 < 0), this.s1 -= this.hash(c), this.s1 += ~~(this.s1 < 0), this.s2 -= this.hash(c), this.s2 += ~~(this.s2 < 0)
            }
        }, hash: function (a) {
            var b, c, d;
            for (d = 4022871197, a = a.toString(), c = 0; c < a.length; c++) d += a.charCodeAt(c), b = .02519603282416938 * d, d = b >>> 0, b -= d, b *= d, d = b >>> 0, b -= d, d += 4294967296 * b;
            return 2.3283064365386963e-10 * (d >>> 0)
        }, integer: function () {
            return 4294967296 * this.rnd.apply(this)
        }, frac: function () {
            return this.rnd.apply(this) + 1.1102230246251565e-16 * (2097152 * this.rnd.apply(this) | 0)
        }, real: function () {
            return this.integer() + this.frac()
        }, integerInRange: function (a, b) {
            return Math.floor(this.realInRange(0, b - a + 1) + a)
        }, between: function (a, b) {
            return this.integerInRange(a, b)
        }, realInRange: function (a, b) {
            return this.frac() * (b - a) + a
        }, normal: function () {
            return 1 - 2 * this.frac()
        }, uuid: function () {
            var a = "", b = "";
            for (b = a = ""; a++ < 36; b += ~a % 5 | 3 * a & 4 ? (15 ^ a ? 8 ^ this.frac() * (20 ^ a ? 16 : 4) : 4).toString(16) : "-") ;
            return b
        }, pick: function (a) {
            return a[this.integerInRange(0, a.length - 1)]
        }, sign: function () {
            return this.pick([-1, 1])
        }, weightedPick: function (a) {
            return a[~~(Math.pow(this.frac(), 2) * (a.length - 1) + .5)]
        }, timestamp: function (a, b) {
            return this.realInRange(a || 9466848e5, b || 1577862e6)
        }, angle: function () {
            return this.integerInRange(-180, 180)
        }, state: function (a) {
            return "string" == typeof a && a.match(/^!rnd/) && (a = a.split(","), this.c = parseFloat(a[1]), this.s0 = parseFloat(a[2]), this.s1 = parseFloat(a[3]), this.s2 = parseFloat(a[4])), ["!rnd", this.c, this.s0, this.s1, this.s2].join(",")
        }
    }, c.RandomDataGenerator.prototype.constructor = c.RandomDataGenerator, c.QuadTree = function (a, b, c, d, e, f, g) {
        this.maxObjects = 10, this.maxLevels = 4, this.level = 0, this.bounds = {}, this.objects = [], this.nodes = [], this._empty = [], this.reset(a, b, c, d, e, f, g)
    }, c.QuadTree.prototype = {
        reset: function (a, b, c, d, e, f, g) {
            this.maxObjects = e || 10, this.maxLevels = f || 4, this.level = g || 0, this.bounds = {
                x: Math.round(a),
                y: Math.round(b),
                width: c,
                height: d,
                subWidth: Math.floor(c / 2),
                subHeight: Math.floor(d / 2),
                right: Math.round(a) + Math.floor(c / 2),
                bottom: Math.round(b) + Math.floor(d / 2)
            }, this.objects.length = 0, this.nodes.length = 0
        }, populate: function (a) {
            a.forEach(this.populateHandler, this, !0)
        }, populateHandler: function (a) {
            a.body && a.exists && this.insert(a.body)
        }, split: function () {
            this.nodes[0] = new c.QuadTree(this.bounds.right, this.bounds.y, this.bounds.subWidth, this.bounds.subHeight, this.maxObjects, this.maxLevels, this.level + 1), this.nodes[1] = new c.QuadTree(this.bounds.x, this.bounds.y, this.bounds.subWidth, this.bounds.subHeight, this.maxObjects, this.maxLevels, this.level + 1), this.nodes[2] = new c.QuadTree(this.bounds.x, this.bounds.bottom, this.bounds.subWidth, this.bounds.subHeight, this.maxObjects, this.maxLevels, this.level + 1), this.nodes[3] = new c.QuadTree(this.bounds.right, this.bounds.bottom, this.bounds.subWidth, this.bounds.subHeight, this.maxObjects, this.maxLevels, this.level + 1)
        }, insert: function (a) {
            var b, c = 0;
            if (null != this.nodes[0] && (b = this.getIndex(a), b !== -1)) return void this.nodes[b].insert(a);
            if (this.objects.push(a), this.objects.length > this.maxObjects && this.level < this.maxLevels) for (null == this.nodes[0] && this.split(); c < this.objects.length;) b = this.getIndex(this.objects[c]), b !== -1 ? this.nodes[b].insert(this.objects.splice(c, 1)[0]) : c++
        }, getIndex: function (a) {
            var b = -1;
            return a.x < this.bounds.right && a.right < this.bounds.right ? a.y < this.bounds.bottom && a.bottom < this.bounds.bottom ? b = 1 : a.y > this.bounds.bottom && (b = 2) : a.x > this.bounds.right && (a.y < this.bounds.bottom && a.bottom < this.bounds.bottom ? b = 0 : a.y > this.bounds.bottom && (b = 3)), b
        }, retrieve: function (a) {
            if (a instanceof c.Rectangle) var b = this.objects, d = this.getIndex(a); else {
                if (!a.body) return this._empty;
                var b = this.objects, d = this.getIndex(a.body)
            }
            return this.nodes[0] && (d !== -1 ? b = b.concat(this.nodes[d].retrieve(a)) : (b = b.concat(this.nodes[0].retrieve(a)), b = b.concat(this.nodes[1].retrieve(a)), b = b.concat(this.nodes[2].retrieve(a)), b = b.concat(this.nodes[3].retrieve(a)))), b
        }, clear: function () {
            this.objects.length = 0;
            for (var a = this.nodes.length; a--;) this.nodes[a].clear(), this.nodes.splice(a, 1);
            this.nodes.length = 0
        }
    }, c.QuadTree.prototype.constructor = c.QuadTree, c.Net = function (a) {
        this.game = a
    }, c.Net.prototype = {
        getHostName: function () {
            return window.location && window.location.hostname ? window.location.hostname : null
        }, checkDomainName: function (a) {
            return window.location.hostname.indexOf(a) !== -1
        }, updateQueryString: function (a, b, c, d) {
            void 0 === c && (c = !1), void 0 !== d && "" !== d || (d = window.location.href);
            var e = "", f = new RegExp("([?|&])" + a + "=.*?(&|#|$)(.*)", "gi");
            if (f.test(d)) e = "undefined" != typeof b && null !== b ? d.replace(f, "$1" + a + "=" + b + "$2$3") : d.replace(f, "$1$3").replace(/(&|\?)$/, ""); else if ("undefined" != typeof b && null !== b) {
                var g = d.indexOf("?") !== -1 ? "&" : "?", h = d.split("#");
                d = h[0] + g + a + "=" + b, h[1] && (d += "#" + h[1]), e = d
            } else e = d;
            return c ? void (window.location.href = e) : e
        }, getQueryString: function (a) {
            void 0 === a && (a = "");
            var b = {}, c = location.search.substring(1).split("&");
            for (var d in c) {
                var e = c[d].split("=");
                if (e.length > 1) {
                    if (a && a === this.decodeURI(e[0])) return this.decodeURI(e[1]);
                    b[this.decodeURI(e[0])] = this.decodeURI(e[1])
                }
            }
            return b
        }, decodeURI: function (a) {
            return decodeURIComponent(a.replace(/\+/g, " "))
        }
    }, c.Net.prototype.constructor = c.Net, c.TweenManager = function (a) {
        this.game = a, this.frameBased = !1, this._tweens = [], this._add = [], this.easeMap = {
            Power0: c.Easing.Power0,
            Power1: c.Easing.Power1,
            Power2: c.Easing.Power2,
            Power3: c.Easing.Power3,
            Power4: c.Easing.Power4,
            Linear: c.Easing.Linear.None,
            Quad: c.Easing.Quadratic.Out,
            Cubic: c.Easing.Cubic.Out,
            Quart: c.Easing.Quartic.Out,
            Quint: c.Easing.Quintic.Out,
            Sine: c.Easing.Sinusoidal.Out,
            Expo: c.Easing.Exponential.Out,
            Circ: c.Easing.Circular.Out,
            Elastic: c.Easing.Elastic.Out,
            Back: c.Easing.Back.Out,
            Bounce: c.Easing.Bounce.Out,
            "Quad.easeIn": c.Easing.Quadratic.In,
            "Cubic.easeIn": c.Easing.Cubic.In,
            "Quart.easeIn": c.Easing.Quartic.In,
            "Quint.easeIn": c.Easing.Quintic.In,
            "Sine.easeIn": c.Easing.Sinusoidal.In,
            "Expo.easeIn": c.Easing.Exponential.In,
            "Circ.easeIn": c.Easing.Circular.In,
            "Elastic.easeIn": c.Easing.Elastic.In,
            "Back.easeIn": c.Easing.Back.In,
            "Bounce.easeIn": c.Easing.Bounce.In,
            "Quad.easeOut": c.Easing.Quadratic.Out,
            "Cubic.easeOut": c.Easing.Cubic.Out,
            "Quart.easeOut": c.Easing.Quartic.Out,
            "Quint.easeOut": c.Easing.Quintic.Out,
            "Sine.easeOut": c.Easing.Sinusoidal.Out,
            "Expo.easeOut": c.Easing.Exponential.Out,
            "Circ.easeOut": c.Easing.Circular.Out,
            "Elastic.easeOut": c.Easing.Elastic.Out,
            "Back.easeOut": c.Easing.Back.Out,
            "Bounce.easeOut": c.Easing.Bounce.Out,
            "Quad.easeInOut": c.Easing.Quadratic.InOut,
            "Cubic.easeInOut": c.Easing.Cubic.InOut,
            "Quart.easeInOut": c.Easing.Quartic.InOut,
            "Quint.easeInOut": c.Easing.Quintic.InOut,
            "Sine.easeInOut": c.Easing.Sinusoidal.InOut,
            "Expo.easeInOut": c.Easing.Exponential.InOut,
            "Circ.easeInOut": c.Easing.Circular.InOut,
            "Elastic.easeInOut": c.Easing.Elastic.InOut,
            "Back.easeInOut": c.Easing.Back.InOut,
            "Bounce.easeInOut": c.Easing.Bounce.InOut
        }, this.game.onPause.add(this._pauseAll, this), this.game.onResume.add(this._resumeAll, this)
    }, c.TweenManager.prototype = {
        getAll: function () {
            return this._tweens
        }, removeAll: function () {
            for (var a = 0; a < this._tweens.length; a++) this._tweens[a].pendingDelete = !0;
            this._add = []
        }, removeFrom: function (a, b) {
            void 0 === b && (b = !0);
            var d, e;
            if (Array.isArray(a)) for (d = 0, e = a.length; d < e; d++) this.removeFrom(a[d]); else if (a.type === c.GROUP && b) for (var d = 0, e = a.children.length; d < e; d++) this.removeFrom(a.children[d]); else {
                for (d = 0, e = this._tweens.length; d < e; d++) a === this._tweens[d].target && this.remove(this._tweens[d]);
                for (d = 0, e = this._add.length; d < e; d++) a === this._add[d].target && this.remove(this._add[d])
            }
        }, add: function (a) {
            a._manager = this, this._add.push(a)
        }, create: function (a) {
            return new c.Tween(a, this.game, this)
        }, remove: function (a) {
            var b = this._tweens.indexOf(a);
            b !== -1 ? this._tweens[b].pendingDelete = !0 : (b = this._add.indexOf(a), b !== -1 && (this._add[b].pendingDelete = !0))
        }, update: function () {
            var a = this._add.length, b = this._tweens.length;
            if (0 === b && 0 === a) return !1;
            for (var c = 0; c < b;) this._tweens[c].update(this.game.time.time) ? c++ : (this._tweens.splice(c, 1), b--);
            return a > 0 && (this._tweens = this._tweens.concat(this._add), this._add.length = 0), !0
        }, isTweening: function (a) {
            return this._tweens.some(function (b) {
                return b.target === a
            })
        }, _pauseAll: function () {
            for (var a = this._tweens.length - 1; a >= 0; a--) this._tweens[a]._pause()
        }, _resumeAll: function () {
            for (var a = this._tweens.length - 1; a >= 0; a--) this._tweens[a]._resume()
        }, pauseAll: function () {
            for (var a = this._tweens.length - 1; a >= 0; a--) this._tweens[a].pause()
        }, resumeAll: function () {
            for (var a = this._tweens.length - 1; a >= 0; a--) this._tweens[a].resume(!0)
        }
    }, c.TweenManager.prototype.constructor = c.TweenManager, c.Tween = function (a, b, d) {
        this.game = b, this.target = a, this.manager = d, this.timeline = [], this.reverse = !1, this.timeScale = 1, this.repeatCounter = 0, this.pendingDelete = !1, this.onStart = new c.Signal, this.onLoop = new c.Signal, this.onRepeat = new c.Signal, this.onChildComplete = new c.Signal, this.onComplete = new c.Signal, this.isRunning = !1, this.current = 0, this.properties = {}, this.chainedTween = null, this.isPaused = !1, this.frameBased = d.frameBased, this._onUpdateCallback = null, this._onUpdateCallbackContext = null, this._pausedTime = 0, this._codePaused = !1, this._hasStarted = !1
    }, c.Tween.prototype = {
        to: function (a, b, d, e, f, g, h) {
            return (void 0 === b || b <= 0) && (b = 1e3), void 0 !== d && null !== d || (d = c.Easing.Default), void 0 === e && (e = !1), void 0 === f && (f = 0), void 0 === g && (g = 0), void 0 === h && (h = !1), "string" == typeof d && this.manager.easeMap[d] && (d = this.manager.easeMap[d]), this.isRunning ? (console.warn("Phaser.Tween.to cannot be called after Tween.start"), this) : (this.timeline.push(new c.TweenData(this).to(a, b, d, f, g, h)), e && this.start(), this)
        }, from: function (a, b, d, e, f, g, h) {
            return void 0 === b && (b = 1e3), void 0 !== d && null !== d || (d = c.Easing.Default), void 0 === e && (e = !1), void 0 === f && (f = 0), void 0 === g && (g = 0), void 0 === h && (h = !1), "string" == typeof d && this.manager.easeMap[d] && (d = this.manager.easeMap[d]), this.isRunning ? (console.warn("Phaser.Tween.from cannot be called after Tween.start"), this) : (this.timeline.push(new c.TweenData(this).from(a, b, d, f, g, h)), e && this.start(), this)
        }, start: function (a) {
            if (void 0 === a && (a = 0), null === this.game || null === this.target || 0 === this.timeline.length || this.isRunning) return this;
            for (var b = 0; b < this.timeline.length; b++) for (var c in this.timeline[b].vEnd) this.properties[c] = this.target[c] || 0, Array.isArray(this.properties[c]) || (this.properties[c] *= 1);
            for (var b = 0; b < this.timeline.length; b++) this.timeline[b].loadValues();
            return this.manager.add(this), this.isRunning = !0, (a < 0 || a > this.timeline.length - 1) && (a = 0), this.current = a, this.timeline[this.current].start(), this
        }, stop: function (a) {
            return void 0 === a && (a = !1), this.isRunning = !1, this._onUpdateCallback = null, this._onUpdateCallbackContext = null, a && (this.onComplete.dispatch(this.target, this), this._hasStarted = !1, this.chainedTween && this.chainedTween.start()), this.manager.remove(this), this
        }, updateTweenData: function (a, b, c) {
            if (0 === this.timeline.length) return this;
            if (void 0 === c && (c = 0), c === -1) for (var d = 0; d < this.timeline.length; d++) this.timeline[d][a] = b; else this.timeline[c][a] = b;
            return this
        }, delay: function (a, b) {
            return this.updateTweenData("delay", a, b)
        }, repeat: function (a, b, c) {
            return void 0 === b && (b = 0), this.updateTweenData("repeatCounter", a, c), this.updateTweenData("repeatDelay", b, c)
        }, repeatDelay: function (a, b) {
            return this.updateTweenData("repeatDelay", a, b)
        }, yoyo: function (a, b, c) {
            return void 0 === b && (b = 0), this.updateTweenData("yoyo", a, c), this.updateTweenData("yoyoDelay", b, c)
        }, yoyoDelay: function (a, b) {
            return this.updateTweenData("yoyoDelay", a, b)
        }, easing: function (a, b) {
            return "string" == typeof a && this.manager.easeMap[a] && (a = this.manager.easeMap[a]), this.updateTweenData("easingFunction", a, b)
        }, interpolation: function (a, b, d) {
            return void 0 === b && (b = c.Math), this.updateTweenData("interpolationFunction", a, d), this.updateTweenData("interpolationContext", b, d)
        }, repeatAll: function (a) {
            return void 0 === a && (a = 0), this.repeatCounter = a, this
        }, chain: function () {
            for (var a = arguments.length; a--;) a > 0 ? arguments[a - 1].chainedTween = arguments[a] : this.chainedTween = arguments[a];
            return this
        }, loop: function (a) {
            return void 0 === a && (a = !0), this.repeatCounter = a ? -1 : 0, this
        }, onUpdateCallback: function (a, b) {
            return this._onUpdateCallback = a, this._onUpdateCallbackContext = b, this
        }, pause: function () {
            this.isPaused = !0, this._codePaused = !0, this._pausedTime = this.game.time.time
        }, _pause: function () {
            this._codePaused || (this.isPaused = !0, this._pausedTime = this.game.time.time)
        }, resume: function () {
            if (this.isPaused) {
                this.isPaused = !1, this._codePaused = !1;
                for (var a = 0; a < this.timeline.length; a++) this.timeline[a].isRunning || (this.timeline[a].startTime += this.game.time.time - this._pausedTime)
            }
        }, _resume: function () {
            this._codePaused || this.resume()
        }, update: function (a) {
            if (this.pendingDelete || !this.target) return !1;
            if (this.isPaused) return !0;
            var b = this.timeline[this.current].update(a);
            if (b === c.TweenData.PENDING) return !0;
            if (b === c.TweenData.RUNNING) return this._hasStarted || (this.onStart.dispatch(this.target, this), this._hasStarted = !0), null !== this._onUpdateCallback && this._onUpdateCallback.call(this._onUpdateCallbackContext, this, this.timeline[this.current].value, this.timeline[this.current]), this.isRunning;
            if (b === c.TweenData.LOOPED) return this.timeline[this.current].repeatCounter === -1 ? this.onLoop.dispatch(this.target, this) : this.onRepeat.dispatch(this.target, this), !0;
            if (b === c.TweenData.COMPLETE) {
                var d = !1;
                return this.reverse ? (this.current--, this.current < 0 && (this.current = this.timeline.length - 1, d = !0)) : (this.current++, this.current === this.timeline.length && (this.current = 0, d = !0)), d ? this.repeatCounter === -1 ? (this.timeline[this.current].start(), this.onLoop.dispatch(this.target, this), !0) : this.repeatCounter > 0 ? (this.repeatCounter--, this.timeline[this.current].start(), this.onRepeat.dispatch(this.target, this), !0) : (this.isRunning = !1, this.onComplete.dispatch(this.target, this), this._hasStarted = !1, this.chainedTween && this.chainedTween.start(), !1) : (this.onChildComplete.dispatch(this.target, this), this.timeline[this.current].start(), !0)
            }
        }, generateData: function (a, b) {
            if (null === this.game || null === this.target) return null;
            void 0 === a && (a = 60), void 0 === b && (b = []);
            for (var c = 0; c < this.timeline.length; c++) for (var d in this.timeline[c].vEnd) this.properties[d] = this.target[d] || 0, Array.isArray(this.properties[d]) || (this.properties[d] *= 1);
            for (var c = 0; c < this.timeline.length; c++) this.timeline[c].loadValues();
            for (var c = 0; c < this.timeline.length; c++) b = b.concat(this.timeline[c].generateData(a));
            return b
        }
    }, Object.defineProperty(c.Tween.prototype, "totalDuration", {
        get: function () {
            for (var a = 0, b = 0; b < this.timeline.length; b++) a += this.timeline[b].duration;
            return a
        }
    }), c.Tween.prototype.constructor = c.Tween, c.TweenData = function (a) {
        this.parent = a, this.game = a.game, this.vStart = {}, this.vStartCache = {}, this.vEnd = {}, this.vEndCache = {}, this.duration = 1e3, this.percent = 0, this.value = 0, this.repeatCounter = 0, this.repeatDelay = 0, this.repeatTotal = 0, this.interpolate = !1, this.yoyo = !1, this.yoyoDelay = 0, this.inReverse = !1, this.delay = 0, this.dt = 0, this.startTime = null, this.easingFunction = c.Easing.Default, this.interpolationFunction = c.Math.linearInterpolation, this.interpolationContext = c.Math, this.isRunning = !1, this.isFrom = !1
    }, c.TweenData.PENDING = 0, c.TweenData.RUNNING = 1, c.TweenData.LOOPED = 2, c.TweenData.COMPLETE = 3, c.TweenData.prototype = {
        to: function (a, b, c, d, e, f) {
            return this.vEnd = a, this.duration = b, this.easingFunction = c, this.delay = d, this.repeatTotal = e, this.yoyo = f, this.isFrom = !1, this
        }, from: function (a, b, c, d, e, f) {
            return this.vEnd = a, this.duration = b, this.easingFunction = c, this.delay = d, this.repeatTotal = e, this.yoyo = f, this.isFrom = !0, this
        }, start: function () {
            if (this.startTime = this.game.time.time + this.delay, this.parent.reverse ? this.dt = this.duration : this.dt = 0, this.delay > 0 ? this.isRunning = !1 : this.isRunning = !0, this.isFrom) for (var a in this.vStartCache) this.vStart[a] = this.vEndCache[a], this.vEnd[a] = this.vStartCache[a], this.parent.target[a] = this.vStart[a];
            return this.value = 0, this.yoyoCounter = 0, this.repeatCounter = this.repeatTotal, this
        }, loadValues: function () {
            for (var a in this.parent.properties) {
                if (this.vStart[a] = this.parent.properties[a], Array.isArray(this.vEnd[a])) {
                    if (0 === this.vEnd[a].length) continue;
                    0 === this.percent && (this.vEnd[a] = [this.vStart[a]].concat(this.vEnd[a]))
                }
                "undefined" != typeof this.vEnd[a] ? ("string" == typeof this.vEnd[a] && (this.vEnd[a] = this.vStart[a] + parseFloat(this.vEnd[a], 10)), this.parent.properties[a] = this.vEnd[a]) : this.vEnd[a] = this.vStart[a], this.vStartCache[a] = this.vStart[a], this.vEndCache[a] = this.vEnd[a]
            }
            return this
        }, update: function (a) {
            if (this.isRunning) {
                if (a < this.startTime) return c.TweenData.RUNNING
            } else {
                if (!(a >= this.startTime)) return c.TweenData.PENDING;
                this.isRunning = !0
            }
            var b = this.parent.frameBased ? this.game.time.physicsElapsedMS : this.game.time.elapsedMS;
            this.parent.reverse ? (this.dt -= b * this.parent.timeScale, this.dt = Math.max(this.dt, 0)) : (this.dt += b * this.parent.timeScale, this.dt = Math.min(this.dt, this.duration)), this.percent = this.dt / this.duration, this.value = this.easingFunction(this.percent);
            for (var d in this.vEnd) {
                var e = this.vStart[d], f = this.vEnd[d];
                Array.isArray(f) ? this.parent.target[d] = this.interpolationFunction.call(this.interpolationContext, f, this.value) : this.parent.target[d] = e + (f - e) * this.value
            }
            return !this.parent.reverse && 1 === this.percent || this.parent.reverse && 0 === this.percent ? this.repeat() : c.TweenData.RUNNING
        }, generateData: function (a) {
            this.parent.reverse ? this.dt = this.duration : this.dt = 0;
            var b = [], c = !1, d = 1 / a * 1e3;
            do {
                this.parent.reverse ? (this.dt -= d, this.dt = Math.max(this.dt, 0)) : (this.dt += d, this.dt = Math.min(this.dt, this.duration)), this.percent = this.dt / this.duration, this.value = this.easingFunction(this.percent);
                var e = {};
                for (var f in this.vEnd) {
                    var g = this.vStart[f], h = this.vEnd[f];
                    Array.isArray(h) ? e[f] = this.interpolationFunction(h, this.value) : e[f] = g + (h - g) * this.value
                }
                b.push(e), (!this.parent.reverse && 1 === this.percent || this.parent.reverse && 0 === this.percent) && (c = !0)
            } while (!c);
            if (this.yoyo) {
                var i = b.slice();
                i.reverse(), b = b.concat(i)
            }
            return b
        }, repeat: function () {
            if (this.yoyo) {
                if (this.inReverse && 0 === this.repeatCounter) {
                    for (var a in this.vStartCache) this.vStart[a] = this.vStartCache[a], this.vEnd[a] = this.vEndCache[a];
                    return this.inReverse = !1, c.TweenData.COMPLETE
                }
                this.inReverse = !this.inReverse
            } else if (0 === this.repeatCounter) return c.TweenData.COMPLETE;
            if (this.inReverse) for (var a in this.vStartCache) this.vStart[a] = this.vEndCache[a], this.vEnd[a] = this.vStartCache[a]; else {
                for (var a in this.vStartCache) this.vStart[a] = this.vStartCache[a], this.vEnd[a] = this.vEndCache[a];
                this.repeatCounter > 0 && this.repeatCounter--
            }
            return this.startTime = this.game.time.time, this.yoyo && this.inReverse ? this.startTime += this.yoyoDelay : this.inReverse || (this.startTime += this.repeatDelay), this.parent.reverse ? this.dt = this.duration : this.dt = 0, c.TweenData.LOOPED
        }
    }, c.TweenData.prototype.constructor = c.TweenData, c.Easing = {
        Linear: {
            None: function (a) {
                return a
            }
        }, Quadratic: {
            In: function (a) {
                return a * a
            }, Out: function (a) {
                return a * (2 - a)
            }, InOut: function (a) {
                return (a *= 2) < 1 ? .5 * a * a : -.5 * (--a * (a - 2) - 1)
            }
        }, Cubic: {
            In: function (a) {
                return a * a * a
            }, Out: function (a) {
                return --a * a * a + 1
            }, InOut: function (a) {
                return (a *= 2) < 1 ? .5 * a * a * a : .5 * ((a -= 2) * a * a + 2)
            }
        }, Quartic: {
            In: function (a) {
                return a * a * a * a
            }, Out: function (a) {
                return 1 - --a * a * a * a
            }, InOut: function (a) {
                return (a *= 2) < 1 ? .5 * a * a * a * a : -.5 * ((a -= 2) * a * a * a - 2)
            }
        }, Quintic: {
            In: function (a) {
                return a * a * a * a * a
            }, Out: function (a) {
                return --a * a * a * a * a + 1
            }, InOut: function (a) {
                return (a *= 2) < 1 ? .5 * a * a * a * a * a : .5 * ((a -= 2) * a * a * a * a + 2)
            }
        }, Sinusoidal: {
            In: function (a) {
                return 0 === a ? 0 : 1 === a ? 1 : 1 - Math.cos(a * Math.PI / 2)
            }, Out: function (a) {
                return 0 === a ? 0 : 1 === a ? 1 : Math.sin(a * Math.PI / 2)
            }, InOut: function (a) {
                return 0 === a ? 0 : 1 === a ? 1 : .5 * (1 - Math.cos(Math.PI * a))
            }
        }, Exponential: {
            In: function (a) {
                return 0 === a ? 0 : Math.pow(1024, a - 1)
            }, Out: function (a) {
                return 1 === a ? 1 : 1 - Math.pow(2, -10 * a)
            }, InOut: function (a) {
                return 0 === a ? 0 : 1 === a ? 1 : (a *= 2) < 1 ? .5 * Math.pow(1024, a - 1) : .5 * (-Math.pow(2, -10 * (a - 1)) + 2)
            }
        }, Circular: {
            In: function (a) {
                return 1 - Math.sqrt(1 - a * a)
            }, Out: function (a) {
                return Math.sqrt(1 - --a * a)
            }, InOut: function (a) {
                return (a *= 2) < 1 ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
            }
        }, Elastic: {
            In: function (a) {
                var b, c = .1, d = .4;
                return 0 === a ? 0 : 1 === a ? 1 : (!c || c < 1 ? (c = 1, b = d / 4) : b = d * Math.asin(1 / c) / (2 * Math.PI), -(c * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - b) * (2 * Math.PI) / d)))
            }, Out: function (a) {
                var b, c = .1, d = .4;
                return 0 === a ? 0 : 1 === a ? 1 : (!c || c < 1 ? (c = 1, b = d / 4) : b = d * Math.asin(1 / c) / (2 * Math.PI), c * Math.pow(2, -10 * a) * Math.sin((a - b) * (2 * Math.PI) / d) + 1)
            }, InOut: function (a) {
                var b, c = .1, d = .4;
                return 0 === a ? 0 : 1 === a ? 1 : (!c || c < 1 ? (c = 1, b = d / 4) : b = d * Math.asin(1 / c) / (2 * Math.PI), (a *= 2) < 1 ? -.5 * (c * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - b) * (2 * Math.PI) / d)) : c * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - b) * (2 * Math.PI) / d) * .5 + 1)
            }
        }, Back: {
            In: function (a) {
                var b = 1.70158;
                return a * a * ((b + 1) * a - b)
            }, Out: function (a) {
                var b = 1.70158;
                return --a * a * ((b + 1) * a + b) + 1
            }, InOut: function (a) {
                var b = 2.5949095;
                return (a *= 2) < 1 ? .5 * (a * a * ((b + 1) * a - b)) : .5 * ((a -= 2) * a * ((b + 1) * a + b) + 2)
            }
        }, Bounce: {
            In: function (a) {
                return 1 - c.Easing.Bounce.Out(1 - a)
            }, Out: function (a) {
                return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
            }, InOut: function (a) {
                return a < .5 ? .5 * c.Easing.Bounce.In(2 * a) : .5 * c.Easing.Bounce.Out(2 * a - 1) + .5
            }
        }
    }, c.Easing.Default = c.Easing.Linear.None, c.Easing.Power0 = c.Easing.Linear.None, c.Easing.Power1 = c.Easing.Quadratic.Out, c.Easing.Power2 = c.Easing.Cubic.Out, c.Easing.Power3 = c.Easing.Quartic.Out, c.Easing.Power4 = c.Easing.Quintic.Out, c.Time = function (a) {
        this.game = a, this.time = 0, this.prevTime = 0, this.now = 0, this.elapsed = 0, this.elapsedMS = 0, this.physicsElapsed = 1 / 60, this.physicsElapsedMS = 1 / 60 * 1e3, this.desiredFpsMult = 1 / 60, this._desiredFps = 60, this.suggestedFps = this.desiredFps, this.slowMotion = 1, this.advancedTiming = !1, this.frames = 0, this.fps = 0, this.fpsMin = 1e3, this.fpsMax = 0, this.msMin = 1e3, this.msMax = 0, this.pauseDuration = 0, this.timeToCall = 0, this.timeExpected = 0, this.events = new c.Timer(this.game, (!1)), this._frameCount = 0, this._elapsedAccumulator = 0, this._started = 0, this._timeLastSecond = 0, this._pauseStarted = 0, this._justResumed = !1, this._timers = []
    }, c.Time.prototype = {
        boot: function () {
            this._started = Date.now(), this.time = Date.now(), this.events.start(), this.timeExpected = this.time
        }, add: function (a) {
            return this._timers.push(a), a
        }, create: function (a) {
            void 0 === a && (a = !0);
            var b = new c.Timer(this.game, a);
            return this._timers.push(b), b
        }, removeAll: function () {
            for (var a = 0; a < this._timers.length; a++) this._timers[a].destroy();
            this._timers = [], this.events.removeAll()
        }, refresh: function () {
            var a = this.time;
            this.time = Date.now(), this.elapsedMS = this.time - a
        }, update: function (a) {
            var b = this.time;
            this.time = Date.now(), this.elapsedMS = this.time - b, this.prevTime = this.now, this.now = a, this.elapsed = this.now - this.prevTime, this.game.raf._isSetTimeOut && (this.timeToCall = Math.floor(Math.max(0, 1e3 / this._desiredFps - (this.timeExpected - a))), this.timeExpected = a + this.timeToCall), this.advancedTiming && this.updateAdvancedTiming(), this.game.paused || (this.events.update(this.time), this._timers.length && this.updateTimers())
        }, updateTimers: function () {
            for (var a = 0, b = this._timers.length; a < b;) this._timers[a].update(this.time) ? a++ : (this._timers.splice(a, 1), b--)
        }, updateAdvancedTiming: function () {
            this._frameCount++, this._elapsedAccumulator += this.elapsed, this._frameCount >= 2 * this._desiredFps && (this.suggestedFps = 5 * Math.floor(200 / (this._elapsedAccumulator / this._frameCount)), this._frameCount = 0, this._elapsedAccumulator = 0), this.msMin = Math.min(this.msMin, this.elapsed), this.msMax = Math.max(this.msMax, this.elapsed), this.frames++, this.now > this._timeLastSecond + 1e3 && (this.fps = Math.round(1e3 * this.frames / (this.now - this._timeLastSecond)), this.fpsMin = Math.min(this.fpsMin, this.fps), this.fpsMax = Math.max(this.fpsMax, this.fps), this._timeLastSecond = this.now, this.frames = 0)
        }, gamePaused: function () {
            this._pauseStarted = Date.now(), this.events.pause();
            for (var a = this._timers.length; a--;) this._timers[a]._pause()
        }, gameResumed: function () {
            this.time = Date.now(), this.pauseDuration = this.time - this._pauseStarted, this.events.resume();
            for (var a = this._timers.length; a--;) this._timers[a]._resume()
        }, totalElapsedSeconds: function () {
            return .001 * (this.time - this._started)
        }, elapsedSince: function (a) {
            return this.time - a
        }, elapsedSecondsSince: function (a) {
            return .001 * (this.time - a)
        }, reset: function () {
            this._started = this.time, this.removeAll()
        }
    }, Object.defineProperty(c.Time.prototype, "desiredFps", {
        get: function () {
            return this._desiredFps
        }, set: function (a) {
            this._desiredFps = a, this.physicsElapsed = 1 / a, this.physicsElapsedMS = 1e3 * this.physicsElapsed, this.desiredFpsMult = 1 / a
        }
    }), c.Time.prototype.constructor = c.Time, c.Timer = function (a, b) {
        void 0 === b && (b = !0), this.game = a, this.running = !1, this.autoDestroy = b, this.expired = !1, this.elapsed = 0, this.events = [], this.onComplete = new c.Signal, this.nextTick = 0, this.timeCap = 1e3, this.paused = !1, this._codePaused = !1, this._started = 0, this._pauseStarted = 0, this._pauseTotal = 0, this._now = Date.now(), this._len = 0, this._marked = 0, this._i = 0, this._diff = 0, this._newTick = 0
    }, c.Timer.MINUTE = 6e4, c.Timer.SECOND = 1e3, c.Timer.HALF = 500, c.Timer.QUARTER = 250, c.Timer.prototype = {
        create: function (a, b, d, e, f, g) {
            a = Math.round(a);
            var h = a;
            h += 0 === this._now ? this.game.time.time : this._now;
            var i = new c.TimerEvent(this, a, h, d, b, e, f, g);
            return this.events.push(i), this.order(), this.expired = !1, i
        }, add: function (a, b, c) {
            return this.create(a, !1, 0, b, c, Array.prototype.slice.call(arguments, 3))
        }, repeat: function (a, b, c, d) {
            return this.create(a, !1, b, c, d, Array.prototype.slice.call(arguments, 4))
        }, loop: function (a, b, c) {
            return this.create(a, !0, 0, b, c, Array.prototype.slice.call(arguments, 3))
        }, start: function (a) {
            if (!this.running) {
                this._started = this.game.time.time + (a || 0), this.running = !0;
                for (var b = 0; b < this.events.length; b++) this.events[b].tick = this.events[b].delay + this._started
            }
        }, stop: function (a) {
            this.running = !1, void 0 === a && (a = !0), a && (this.events.length = 0)
        }, remove: function (a) {
            for (var b = 0; b < this.events.length; b++) if (this.events[b] === a) return this.events[b].pendingDelete = !0, !0;
            return !1
        }, order: function () {
            this.events.length > 0 && (this.events.sort(this.sortHandler), this.nextTick = this.events[0].tick)
        }, sortHandler: function (a, b) {
            return a.tick < b.tick ? -1 : a.tick > b.tick ? 1 : 0
        }, clearPendingEvents: function () {
            for (this._i = this.events.length; this._i--;) this.events[this._i].pendingDelete && this.events.splice(this._i, 1);
            this._len = this.events.length, this._i = 0
        }, update: function (a) {
            if (this.paused) return !0;
            if (this.elapsed = a - this._now, this._now = a, this.elapsed > this.timeCap && this.adjustEvents(a - this.elapsed), this._marked = 0, this.clearPendingEvents(), this.running && this._now >= this.nextTick && this._len > 0) {
                for (; this._i < this._len && this.running && this._now >= this.events[this._i].tick && !this.events[this._i].pendingDelete;) this._newTick = this._now + this.events[this._i].delay - (this._now - this.events[this._i].tick), this._newTick < 0 && (this._newTick = this._now + this.events[this._i].delay), this.events[this._i].loop === !0 ? (this.events[this._i].tick = this._newTick, this.events[this._i].callback.apply(this.events[this._i].callbackContext, this.events[this._i].args)) : this.events[this._i].repeatCount > 0 ? (this.events[this._i].repeatCount--, this.events[this._i].tick = this._newTick, this.events[this._i].callback.apply(this.events[this._i].callbackContext, this.events[this._i].args)) : (this._marked++, this.events[this._i].pendingDelete = !0, this.events[this._i].callback.apply(this.events[this._i].callbackContext, this.events[this._i].args)), this._i++;
                this.events.length > this._marked ? this.order() : (this.expired = !0, this.onComplete.dispatch(this))
            }
            return !this.expired || !this.autoDestroy
        }, pause: function () {
            this.running && (this._codePaused = !0, this.paused || (this._pauseStarted = this.game.time.time, this.paused = !0))
        }, _pause: function () {
            !this.paused && this.running && (this._pauseStarted = this.game.time.time, this.paused = !0)
        }, adjustEvents: function (a) {
            for (var b = 0; b < this.events.length; b++) if (!this.events[b].pendingDelete) {
                var c = this.events[b].tick - a;
                c < 0 && (c = 0), this.events[b].tick = this._now + c
            }
            var d = this.nextTick - a;
            d < 0 ? this.nextTick = this._now : this.nextTick = this._now + d
        }, resume: function () {
            if (this.paused) {
                var a = this.game.time.time;
                this._pauseTotal += a - this._now, this._now = a, this.adjustEvents(this._pauseStarted), this.paused = !1, this._codePaused = !1
            }
        }, _resume: function () {
            this._codePaused || this.resume()
        }, removeAll: function () {
            this.onComplete.removeAll(), this.events.length = 0, this._len = 0, this._i = 0
        }, destroy: function () {
            this.onComplete.removeAll(), this.running = !1, this.events = [], this._len = 0, this._i = 0
        }
    }, Object.defineProperty(c.Timer.prototype, "next", {
        get: function () {
            return this.nextTick
        }
    }), Object.defineProperty(c.Timer.prototype, "duration", {
        get: function () {
            return this.running && this.nextTick > this._now ? this.nextTick - this._now : 0
        }
    }), Object.defineProperty(c.Timer.prototype, "length", {
        get: function () {
            return this.events.length
        }
    }), Object.defineProperty(c.Timer.prototype, "ms", {
        get: function () {
            return this.running ? this._now - this._started - this._pauseTotal : 0
        }
    }), Object.defineProperty(c.Timer.prototype, "seconds", {
        get: function () {
            return this.running ? .001 * this.ms : 0
        }
    }), c.Timer.prototype.constructor = c.Timer, c.TimerEvent = function (a, b, c, d, e, f, g, h) {
        this.timer = a, this.delay = b, this.tick = c, this.repeatCount = d - 1, this.loop = e, this.callback = f, this.callbackContext = g, this.args = h, this.pendingDelete = !1
    }, c.TimerEvent.prototype.constructor = c.TimerEvent, c.AnimationManager = function (a) {
        this.sprite = a, this.game = a.game, this.currentFrame = null, this.currentAnim = null, this.updateIfVisible = !0, this.isLoaded = !1, this._frameData = null, this._anims = {}, this._outputFrames = []
    }, c.AnimationManager.prototype = {
        loadFrameData: function (a, b) {
            if (void 0 === a) return !1;
            if (this.isLoaded) for (var c in this._anims) this._anims[c].updateFrameData(a);
            return this._frameData = a, void 0 === b || null === b ? this.frame = 0 : "string" == typeof b ? this.frameName = b : this.frame = b, this.isLoaded = !0, !0
        }, copyFrameData: function (a, b) {
            if (this._frameData = a.clone(), this.isLoaded) for (var c in this._anims) this._anims[c].updateFrameData(this._frameData);
            return void 0 === b || null === b ? this.frame = 0 : "string" == typeof b ? this.frameName = b : this.frame = b, this.isLoaded = !0, !0
        }, add: function (a, b, d, e, f) {
            return b = b || [], d = d || 60, void 0 === e && (e = !1), void 0 === f && (f = !(!b || "number" != typeof b[0])), this._outputFrames = [], this._frameData.getFrameIndexes(b, f, this._outputFrames), this._anims[a] = new c.Animation(this.game, this.sprite, a, this._frameData, this._outputFrames, d, e), this.currentAnim = this._anims[a], this.sprite.tilingTexture && (this.sprite.refreshTexture = !0), this._anims[a]
        }, validateFrames: function (a, b) {
            void 0 === b && (b = !0);
            for (var c = 0; c < a.length; c++) if (b === !0) {
                if (a[c] > this._frameData.total) return !1
            } else if (this._frameData.checkFrameName(a[c]) === !1) return !1;
            return !0
        }, play: function (a, b, c, d) {
            if (this._anims[a]) return this.currentAnim === this._anims[a] ? this.currentAnim.isPlaying === !1 ? (this.currentAnim.paused = !1, this.currentAnim.play(b, c, d)) : this.currentAnim : (this.currentAnim && this.currentAnim.isPlaying && this.currentAnim.stop(), this.currentAnim = this._anims[a], this.currentAnim.paused = !1, this.currentFrame = this.currentAnim.currentFrame, this.currentAnim.play(b, c, d))
        }, stop: function (a, b) {
            void 0 === b && (b = !1), !this.currentAnim || "string" == typeof a && a !== this.currentAnim.name || this.currentAnim.stop(b)
        }, update: function () {
            return !(this.updateIfVisible && !this.sprite.visible) && (!(!this.currentAnim || !this.currentAnim.update()) && (this.currentFrame = this.currentAnim.currentFrame, !0))
        }, next: function (a) {
            this.currentAnim && (this.currentAnim.next(a), this.currentFrame = this.currentAnim.currentFrame)
        }, previous: function (a) {
            this.currentAnim && (this.currentAnim.previous(a), this.currentFrame = this.currentAnim.currentFrame)
        }, getAnimation: function (a) {
            return "string" == typeof a && this._anims[a] ? this._anims[a] : null
        }, refreshFrame: function () {
        }, destroy: function () {
            var a = null;
            for (var a in this._anims) this._anims.hasOwnProperty(a) && this._anims[a].destroy();
            this._anims = {}, this._outputFrames = [], this._frameData = null, this.currentAnim = null, this.currentFrame = null,
                this.sprite = null, this.game = null
        }
    }, c.AnimationManager.prototype.constructor = c.AnimationManager, Object.defineProperty(c.AnimationManager.prototype, "frameData", {
        get: function () {
            return this._frameData
        }
    }), Object.defineProperty(c.AnimationManager.prototype, "frameTotal", {
        get: function () {
            return this._frameData.total
        }
    }), Object.defineProperty(c.AnimationManager.prototype, "paused", {
        get: function () {
            return this.currentAnim.isPaused
        }, set: function (a) {
            this.currentAnim.paused = a
        }
    }), Object.defineProperty(c.AnimationManager.prototype, "name", {
        get: function () {
            if (this.currentAnim) return this.currentAnim.name
        }
    }), Object.defineProperty(c.AnimationManager.prototype, "frame", {
        get: function () {
            if (this.currentFrame) return this.currentFrame.index
        }, set: function (a) {
            "number" == typeof a && this._frameData && null !== this._frameData.getFrame(a) && (this.currentFrame = this._frameData.getFrame(a), this.currentFrame && this.sprite.setFrame(this.currentFrame))
        }
    }), Object.defineProperty(c.AnimationManager.prototype, "frameName", {
        get: function () {
            if (this.currentFrame) return this.currentFrame.name
        }, set: function (a) {
            "string" == typeof a && this._frameData && null !== this._frameData.getFrameByName(a) ? (this.currentFrame = this._frameData.getFrameByName(a), this.currentFrame && (this._frameIndex = this.currentFrame.index, this.sprite.setFrame(this.currentFrame))) : console.warn("Cannot set frameName: " + a)
        }
    }), c.Animation = function (a, b, d, e, f, g, h) {
        void 0 === h && (h = !1), this.game = a, this._parent = b, this._frameData = e, this.name = d, this._frames = [], this._frames = this._frames.concat(f), this.delay = 1e3 / g, this.loop = h, this.loopCount = 0, this.killOnComplete = !1, this.isFinished = !1, this.isPlaying = !1, this.isPaused = !1, this._pauseStartTime = 0, this._frameIndex = 0, this._frameDiff = 0, this._frameSkip = 1, this.currentFrame = this._frameData.getFrame(this._frames[this._frameIndex]), this.onStart = new c.Signal, this.onUpdate = null, this.onComplete = new c.Signal, this.onLoop = new c.Signal, this.isReversed = !1, this.game.onPause.add(this.onPause, this), this.game.onResume.add(this.onResume, this)
    }, c.Animation.prototype = {
        play: function (a, b, c) {
            return "number" == typeof a && (this.delay = 1e3 / a), "boolean" == typeof b && (this.loop = b), "undefined" != typeof c && (this.killOnComplete = c), this.isPlaying = !0, this.isFinished = !1, this.paused = !1, this.loopCount = 0, this._timeLastFrame = this.game.time.time, this._timeNextFrame = this.game.time.time + this.delay, this._frameIndex = this.isReversed ? this._frames.length - 1 : 0, this.updateCurrentFrame(!1, !0), this._parent.events.onAnimationStart$dispatch(this._parent, this), this.onStart.dispatch(this._parent, this), this._parent.animations.currentAnim = this, this._parent.animations.currentFrame = this.currentFrame, this
        }, restart: function () {
            this.isPlaying = !0, this.isFinished = !1, this.paused = !1, this.loopCount = 0, this._timeLastFrame = this.game.time.time, this._timeNextFrame = this.game.time.time + this.delay, this._frameIndex = 0, this.currentFrame = this._frameData.getFrame(this._frames[this._frameIndex]), this._parent.setFrame(this.currentFrame), this._parent.animations.currentAnim = this, this._parent.animations.currentFrame = this.currentFrame, this.onStart.dispatch(this._parent, this)
        }, reverse: function () {
            return this.reversed = !this.reversed, this
        }, reverseOnce: function () {
            return this.onComplete.addOnce(this.reverse, this), this.reverse()
        }, setFrame: function (a, b) {
            var c;
            if (void 0 === b && (b = !1), "string" == typeof a) for (var d = 0; d < this._frames.length; d++) this._frameData.getFrame(this._frames[d]).name === a && (c = d); else if ("number" == typeof a) if (b) c = a; else for (var d = 0; d < this._frames.length; d++) this._frames[d] === a && (c = d);
            c && (this._frameIndex = c - 1, this._timeNextFrame = this.game.time.time, this.update())
        }, stop: function (a, b) {
            void 0 === a && (a = !1), void 0 === b && (b = !1), this.isPlaying = !1, this.isFinished = !0, this.paused = !1, a && (this.currentFrame = this._frameData.getFrame(this._frames[0]), this._parent.setFrame(this.currentFrame)), b && (this._parent.events.onAnimationComplete$dispatch(this._parent, this), this.onComplete.dispatch(this._parent, this))
        }, onPause: function () {
            this.isPlaying && (this._frameDiff = this._timeNextFrame - this.game.time.time)
        }, onResume: function () {
            this.isPlaying && (this._timeNextFrame = this.game.time.time + this._frameDiff)
        }, update: function () {
            return !this.isPaused && (!!(this.isPlaying && this.game.time.time >= this._timeNextFrame) && (this._frameSkip = 1, this._frameDiff = this.game.time.time - this._timeNextFrame, this._timeLastFrame = this.game.time.time, this._frameDiff > this.delay && (this._frameSkip = Math.floor(this._frameDiff / this.delay), this._frameDiff -= this._frameSkip * this.delay), this._timeNextFrame = this.game.time.time + (this.delay - this._frameDiff), this.isReversed ? this._frameIndex -= this._frameSkip : this._frameIndex += this._frameSkip, !this.isReversed && this._frameIndex >= this._frames.length || this.isReversed && this._frameIndex <= -1 ? this.loop ? (this._frameIndex = Math.abs(this._frameIndex) % this._frames.length, this.isReversed && (this._frameIndex = this._frames.length - 1 - this._frameIndex), this.currentFrame = this._frameData.getFrame(this._frames[this._frameIndex]), this.currentFrame && this._parent.setFrame(this.currentFrame), this.loopCount++, this._parent.events.onAnimationLoop$dispatch(this._parent, this), this.onLoop.dispatch(this._parent, this), !this.onUpdate || (this.onUpdate.dispatch(this, this.currentFrame), !!this._frameData)) : (this.complete(), !1) : this.updateCurrentFrame(!0)))
        }, updateCurrentFrame: function (a, b) {
            if (void 0 === b && (b = !1), !this._frameData) return !1;
            var c = this.currentFrame.index;
            return this.currentFrame = this._frameData.getFrame(this._frames[this._frameIndex]), this.currentFrame && (b || !b && c !== this.currentFrame.index) && this._parent.setFrame(this.currentFrame), !this.onUpdate || !a || (this.onUpdate.dispatch(this, this.currentFrame), !!this._frameData)
        }, next: function (a) {
            void 0 === a && (a = 1);
            var b = this._frameIndex + a;
            b >= this._frames.length && (this.loop ? b %= this._frames.length : b = this._frames.length - 1), b !== this._frameIndex && (this._frameIndex = b, this.updateCurrentFrame(!0))
        }, previous: function (a) {
            void 0 === a && (a = 1);
            var b = this._frameIndex - a;
            b < 0 && (this.loop ? b = this._frames.length + b : b++), b !== this._frameIndex && (this._frameIndex = b, this.updateCurrentFrame(!0))
        }, updateFrameData: function (a) {
            this._frameData = a, this.currentFrame = this._frameData ? this._frameData.getFrame(this._frames[this._frameIndex % this._frames.length]) : null
        }, destroy: function () {
            this._frameData && (this.game.onPause.remove(this.onPause, this), this.game.onResume.remove(this.onResume, this), this.game = null, this._parent = null, this._frames = null, this._frameData = null, this.currentFrame = null, this.isPlaying = !1, this.onStart.dispose(), this.onLoop.dispose(), this.onComplete.dispose(), this.onUpdate && this.onUpdate.dispose())
        }, complete: function () {
            this._frameIndex = this._frames.length - 1, this.currentFrame = this._frameData.getFrame(this._frames[this._frameIndex]), this.isPlaying = !1, this.isFinished = !0, this.paused = !1, this._parent.events.onAnimationComplete$dispatch(this._parent, this), this.onComplete.dispatch(this._parent, this), this.killOnComplete && this._parent.kill()
        }
    }, c.Animation.prototype.constructor = c.Animation, Object.defineProperty(c.Animation.prototype, "paused", {
        get: function () {
            return this.isPaused
        }, set: function (a) {
            this.isPaused = a, a ? this._pauseStartTime = this.game.time.time : this.isPlaying && (this._timeNextFrame = this.game.time.time + this.delay)
        }
    }), Object.defineProperty(c.Animation.prototype, "reversed", {
        get: function () {
            return this.isReversed
        }, set: function (a) {
            this.isReversed = a
        }
    }), Object.defineProperty(c.Animation.prototype, "frameTotal", {
        get: function () {
            return this._frames.length
        }
    }), Object.defineProperty(c.Animation.prototype, "frame", {
        get: function () {
            return null !== this.currentFrame ? this.currentFrame.index : this._frameIndex
        }, set: function (a) {
            this.currentFrame = this._frameData.getFrame(this._frames[a]), null !== this.currentFrame && (this._frameIndex = a, this._parent.setFrame(this.currentFrame), this.onUpdate && this.onUpdate.dispatch(this, this.currentFrame))
        }
    }), Object.defineProperty(c.Animation.prototype, "speed", {
        get: function () {
            return 1e3 / this.delay
        }, set: function (a) {
            a > 0 && (this.delay = 1e3 / a)
        }
    }), Object.defineProperty(c.Animation.prototype, "enableUpdate", {
        get: function () {
            return null !== this.onUpdate
        }, set: function (a) {
            a && null === this.onUpdate ? this.onUpdate = new c.Signal : a || null === this.onUpdate || (this.onUpdate.dispose(), this.onUpdate = null)
        }
    }), c.Animation.generateFrameNames = function (a, b, d, e, f) {
        void 0 === e && (e = "");
        var g = [], h = "";
        if (b < d) for (var i = b; i <= d; i++) h = "number" == typeof f ? c.Utils.pad(i.toString(), f, "0", 1) : i.toString(), h = a + h + e, g.push(h); else for (var i = b; i >= d; i--) h = "number" == typeof f ? c.Utils.pad(i.toString(), f, "0", 1) : i.toString(), h = a + h + e, g.push(h);
        return g
    }, c.Frame = function (a, b, d, e, f, g) {
        this.index = a, this.x = b, this.y = d, this.width = e, this.height = f, this.name = g, this.centerX = Math.floor(e / 2), this.centerY = Math.floor(f / 2), this.distance = c.Math.distance(0, 0, e, f), this.rotated = !1, this.rotationDirection = "cw", this.trimmed = !1, this.sourceSizeW = e, this.sourceSizeH = f, this.spriteSourceSizeX = 0, this.spriteSourceSizeY = 0, this.spriteSourceSizeW = 0, this.spriteSourceSizeH = 0, this.right = this.x + this.width, this.bottom = this.y + this.height
    }, c.Frame.prototype = {
        resize: function (a, b) {
            this.width = a, this.height = b, this.centerX = Math.floor(a / 2), this.centerY = Math.floor(b / 2), this.distance = c.Math.distance(0, 0, a, b), this.sourceSizeW = a, this.sourceSizeH = b, this.right = this.x + a, this.bottom = this.y + b
        }, setTrim: function (a, b, c, d, e, f, g) {
            this.trimmed = a, a && (this.sourceSizeW = b, this.sourceSizeH = c, this.centerX = Math.floor(b / 2), this.centerY = Math.floor(c / 2), this.spriteSourceSizeX = d, this.spriteSourceSizeY = e, this.spriteSourceSizeW = f, this.spriteSourceSizeH = g)
        }, clone: function () {
            var a = new c.Frame(this.index, this.x, this.y, this.width, this.height, this.name);
            for (var b in this) this.hasOwnProperty(b) && (a[b] = this[b]);
            return a
        }, getRect: function (a) {
            return void 0 === a ? a = new c.Rectangle(this.x, this.y, this.width, this.height) : a.setTo(this.x, this.y, this.width, this.height), a
        }
    }, c.Frame.prototype.constructor = c.Frame, c.FrameData = function () {
        this._frames = [], this._frameNames = []
    }, c.FrameData.prototype = {
        addFrame: function (a) {
            return a.index = this._frames.length, this._frames.push(a), "" !== a.name && (this._frameNames[a.name] = a.index), a
        }, getFrame: function (a) {
            return a >= this._frames.length && (a = 0), this._frames[a]
        }, getFrameByName: function (a) {
            return "number" == typeof this._frameNames[a] ? this._frames[this._frameNames[a]] : null
        }, checkFrameName: function (a) {
            return null != this._frameNames[a]
        }, clone: function () {
            for (var a = new c.FrameData, b = 0; b < this._frames.length; b++) a._frames.push(this._frames[b].clone());
            for (var d in this._frameNames) this._frameNames.hasOwnProperty(d) && a._frameNames.push(this._frameNames[d]);
            return a
        }, getFrameRange: function (a, b, c) {
            void 0 === c && (c = []);
            for (var d = a; d <= b; d++) c.push(this._frames[d]);
            return c
        }, getFrames: function (a, b, c) {
            if (void 0 === b && (b = !0), void 0 === c && (c = []), void 0 === a || 0 === a.length) for (var d = 0; d < this._frames.length; d++) c.push(this._frames[d]); else for (var d = 0; d < a.length; d++) b ? c.push(this.getFrame(a[d])) : c.push(this.getFrameByName(a[d]));
            return c
        }, getFrameIndexes: function (a, b, c) {
            if (void 0 === b && (b = !0), void 0 === c && (c = []), void 0 === a || 0 === a.length) for (var d = 0; d < this._frames.length; d++) c.push(this._frames[d].index); else for (var d = 0; d < a.length; d++) b && this._frames[a[d]] ? c.push(this._frames[a[d]].index) : this.getFrameByName(a[d]) && c.push(this.getFrameByName(a[d]).index);
            return c
        }, destroy: function () {
            this._frames = null, this._frameNames = null
        }
    }, c.FrameData.prototype.constructor = c.FrameData, Object.defineProperty(c.FrameData.prototype, "total", {
        get: function () {
            return this._frames.length
        }
    }), c.AnimationParser = {
        spriteSheet: function (a, b, d, e, f, g, h) {
            var i = b;
            if ("string" == typeof b && (i = a.cache.getImage(b)), null === i) return null;
            var j = i.width, k = i.height;
            d <= 0 && (d = Math.floor(-j / Math.min(-1, d))), e <= 0 && (e = Math.floor(-k / Math.min(-1, e)));
            var l = Math.floor((j - g) / (d + h)), m = Math.floor((k - g) / (e + h)), n = l * m;
            if (f !== -1 && (n = f), 0 === j || 0 === k || j < d || k < e || 0 === n) return console.warn("Phaser.AnimationParser.spriteSheet: '" + b + "'s width/height zero or width/height < given frameWidth/frameHeight"), null;
            for (var o = new c.FrameData, p = g, q = g, r = 0; r < n; r++) o.addFrame(new c.Frame(r, p, q, d, e, "")), p += d + h, p + d > j && (p = g, q += e + h);
            return o
        }, JSONData: function (a, b) {
            if (!b.frames) return console.warn("Phaser.AnimationParser.JSONData: Invalid Texture Atlas JSON given, missing 'frames' array"), void console.log(b);
            for (var d, e = new c.FrameData, f = b.frames, g = 0; g < f.length; g++) d = e.addFrame(new c.Frame(g, f[g].frame.x, f[g].frame.y, f[g].frame.w, f[g].frame.h, f[g].filename)), f[g].trimmed && d.setTrim(f[g].trimmed, f[g].sourceSize.w, f[g].sourceSize.h, f[g].spriteSourceSize.x, f[g].spriteSourceSize.y, f[g].spriteSourceSize.w, f[g].spriteSourceSize.h);
            return e
        }, JSONDataPyxel: function (a, b) {
            var d = ["layers", "tilewidth", "tileheight", "tileswide", "tileshigh"];
            if (d.forEach(function (a) {
                if (!b[a]) return console.warn('Phaser.AnimationParser.JSONDataPyxel: Invalid Pyxel Tilemap JSON given, missing "' + a + '" key.'), void console.log(b)
            }), 1 !== b.layers.length) return console.warn("Phaser.AnimationParser.JSONDataPyxel: Too many layers, this parser only supports flat Tilemaps."), void console.log(b);
            for (var e, f = new c.FrameData, g = b.tileheight, h = b.tilewidth, i = b.layers[0].tiles, j = 0; j < i.length; j++) e = f.addFrame(new c.Frame(j, i[j].x, i[j].y, h, g, "frame_" + j)), e.setTrim(!1);
            return f
        }, JSONDataHash: function (a, b) {
            if (!b.frames) return console.warn("Phaser.AnimationParser.JSONDataHash: Invalid Texture Atlas JSON given, missing 'frames' object"), void console.log(b);
            var d, e = new c.FrameData, f = b.frames, g = 0;
            for (var h in f) d = e.addFrame(new c.Frame(g, f[h].frame.x, f[h].frame.y, f[h].frame.w, f[h].frame.h, h)), f[h].trimmed && d.setTrim(f[h].trimmed, f[h].sourceSize.w, f[h].sourceSize.h, f[h].spriteSourceSize.x, f[h].spriteSourceSize.y, f[h].spriteSourceSize.w, f[h].spriteSourceSize.h), g++;
            return e
        }, XMLData: function (a, b) {
            if (!b.getElementsByTagName("TextureAtlas")) return void console.warn("Phaser.AnimationParser.XMLData: Invalid Texture Atlas XML given, missing <TextureAtlas> tag");
            for (var d, e, f, g, h, i, j, k, l, m, n, o = new c.FrameData, p = b.getElementsByTagName("SubTexture"), q = 0; q < p.length; q++) f = p[q].attributes, e = f.name.value, g = parseInt(f.x.value, 10), h = parseInt(f.y.value, 10), i = parseInt(f.width.value, 10), j = parseInt(f.height.value, 10), k = null, l = null, f.frameX && (k = Math.abs(parseInt(f.frameX.value, 10)), l = Math.abs(parseInt(f.frameY.value, 10)), m = parseInt(f.frameWidth.value, 10), n = parseInt(f.frameHeight.value, 10)), d = o.addFrame(new c.Frame(q, g, h, i, j, e)), null === k && null === l || d.setTrim(!0, i, j, k, l, m, n);
            return o
        }
    }, c.Cache = function (a) {
        this.game = a, this.autoResolveURL = !1, this._cache = {
            canvas: {},
            image: {},
            texture: {},
            sound: {},
            video: {},
            text: {},
            json: {},
            xml: {},
            physics: {},
            tilemap: {},
            binary: {},
            bitmapData: {},
            bitmapFont: {},
            shader: {},
            renderTexture: {}
        }, this._urlMap = {}, this._urlResolver = new Image, this._urlTemp = null, this.onSoundUnlock = new c.Signal, this._cacheMap = [], this._cacheMap[c.Cache.CANVAS] = this._cache.canvas, this._cacheMap[c.Cache.IMAGE] = this._cache.image, this._cacheMap[c.Cache.TEXTURE] = this._cache.texture, this._cacheMap[c.Cache.SOUND] = this._cache.sound, this._cacheMap[c.Cache.TEXT] = this._cache.text, this._cacheMap[c.Cache.PHYSICS] = this._cache.physics, this._cacheMap[c.Cache.TILEMAP] = this._cache.tilemap, this._cacheMap[c.Cache.BINARY] = this._cache.binary, this._cacheMap[c.Cache.BITMAPDATA] = this._cache.bitmapData, this._cacheMap[c.Cache.BITMAPFONT] = this._cache.bitmapFont, this._cacheMap[c.Cache.JSON] = this._cache.json, this._cacheMap[c.Cache.XML] = this._cache.xml, this._cacheMap[c.Cache.VIDEO] = this._cache.video, this._cacheMap[c.Cache.SHADER] = this._cache.shader, this._cacheMap[c.Cache.RENDER_TEXTURE] = this._cache.renderTexture, this.addDefaultImage(), this.addMissingImage()
    }, c.Cache.CANVAS = 1, c.Cache.IMAGE = 2, c.Cache.TEXTURE = 3, c.Cache.SOUND = 4, c.Cache.TEXT = 5, c.Cache.PHYSICS = 6, c.Cache.TILEMAP = 7, c.Cache.BINARY = 8, c.Cache.BITMAPDATA = 9, c.Cache.BITMAPFONT = 10, c.Cache.JSON = 11, c.Cache.XML = 12, c.Cache.VIDEO = 13, c.Cache.SHADER = 14, c.Cache.RENDER_TEXTURE = 15, c.Cache.DEFAULT = null, c.Cache.MISSING = null, c.Cache.prototype = {
        addCanvas: function (a, b, c) {
            void 0 === c && (c = b.getContext("2d")), this._cache.canvas[a] = {canvas: b, context: c}
        }, addImage: function (a, b, d) {
            this.checkImageKey(a) && this.removeImage(a);
            var e = {
                key: a,
                url: b,
                data: d,
                base: new PIXI.BaseTexture(d),
                frame: new c.Frame(0, 0, 0, d.width, d.height, a),
                frameData: new c.FrameData
            };
            return e.frameData.addFrame(new c.Frame(0, 0, 0, d.width, d.height, b)), this._cache.image[a] = e, this._resolveURL(b, e), "__default" === a ? c.Cache.DEFAULT = new PIXI.Texture(e.base) : "__missing" === a && (c.Cache.MISSING = new PIXI.Texture(e.base)), e
        }, addDefaultImage: function () {
            var a = new Image;
            a.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAQMAAABJtOi3AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABVJREFUeF7NwIEAAAAAgKD9qdeocAMAoAABm3DkcAAAAABJRU5ErkJggg==";
            var b = this.addImage("__default", null, a);
            b.base.skipRender = !0, c.Cache.DEFAULT = new PIXI.Texture(b.base)
        }, addMissingImage: function () {
            var a = new Image;
            a.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJ9JREFUeNq01ssOwyAMRFG46v//Mt1ESmgh+DFmE2GPOBARKb2NVjo+17PXLD8a1+pl5+A+wSgFygymWYHBb0FtsKhJDdZlncG2IzJ4ayoMDv20wTmSMzClEgbWYNTAkQ0Z+OJ+A/eWnAaR9+oxCF4Os0H8htsMUp+pwcgBBiMNnAwF8GqIgL2hAzaGFFgZauDPKABmowZ4GL369/0rwACp2yA/ttmvsQAAAABJRU5ErkJggg==";
            var b = this.addImage("__missing", null, a);
            c.Cache.MISSING = new PIXI.Texture(b.base)
        }, addSound: function (a, b, c, d, e) {
            void 0 === d && (d = !0, e = !1), void 0 === e && (d = !1, e = !0);
            var f = !1;
            e && (f = !0), this._cache.sound[a] = {
                url: b,
                data: c,
                isDecoding: !1,
                decoded: f,
                webAudio: d,
                audioTag: e,
                locked: this.game.sound.touchLocked
            }, this._resolveURL(b, this._cache.sound[a])
        }, addText: function (a, b, c) {
            this._cache.text[a] = {url: b, data: c}, this._resolveURL(b, this._cache.text[a])
        }, addPhysicsData: function (a, b, c, d) {
            this._cache.physics[a] = {url: b, data: c, format: d}, this._resolveURL(b, this._cache.physics[a])
        }, addTilemap: function (a, b, c, d) {
            this._cache.tilemap[a] = {url: b, data: c, format: d}, this._resolveURL(b, this._cache.tilemap[a])
        }, addBinary: function (a, b) {
            this._cache.binary[a] = b
        }, addBitmapData: function (a, b, d) {
            return b.key = a, void 0 === d && (d = new c.FrameData, d.addFrame(b.textureFrame)), this._cache.bitmapData[a] = {
                data: b,
                frameData: d
            }, b
        }, addBitmapFont: function (a, b, d, e, f, g, h) {
            var i = {url: b, data: d, font: null, base: new PIXI.BaseTexture(d)};
            void 0 === g && (g = 0), void 0 === h && (h = 0), "json" === f ? i.font = c.LoaderParser.jsonBitmapFont(e, i.base, g, h) : i.font = c.LoaderParser.xmlBitmapFont(e, i.base, g, h), this._cache.bitmapFont[a] = i, this._resolveURL(b, i)
        }, addJSON: function (a, b, c) {
            this._cache.json[a] = {url: b, data: c}, this._resolveURL(b, this._cache.json[a])
        }, addXML: function (a, b, c) {
            this._cache.xml[a] = {url: b, data: c}, this._resolveURL(b, this._cache.xml[a])
        }, addVideo: function (a, b, c, d) {
            this._cache.video[a] = {url: b, data: c, isBlob: d, locked: !0}, this._resolveURL(b, this._cache.video[a])
        }, addShader: function (a, b, c) {
            this._cache.shader[a] = {url: b, data: c}, this._resolveURL(b, this._cache.shader[a])
        }, addRenderTexture: function (a, b) {
            this._cache.renderTexture[a] = {texture: b, frame: new c.Frame(0, 0, 0, b.width, b.height, "", "")}
        }, addSpriteSheet: function (a, b, d, e, f, g, h, i) {
            void 0 === g && (g = -1), void 0 === h && (h = 0), void 0 === i && (i = 0);
            var j = {
                key: a,
                url: b,
                data: d,
                frameWidth: e,
                frameHeight: f,
                margin: h,
                spacing: i,
                base: new PIXI.BaseTexture(d),
                frameData: c.AnimationParser.spriteSheet(this.game, d, e, f, g, h, i)
            };
            this._cache.image[a] = j, this._resolveURL(b, j)
        }, addTextureAtlas: function (a, b, d, e, f) {
            var g = {key: a, url: b, data: d, base: new PIXI.BaseTexture(d)};
            f === c.Loader.TEXTURE_ATLAS_XML_STARLING ? g.frameData = c.AnimationParser.XMLData(this.game, e, a) : f === c.Loader.TEXTURE_ATLAS_JSON_PYXEL ? g.frameData = c.AnimationParser.JSONDataPyxel(this.game, e, a) : Array.isArray(e.frames) ? g.frameData = c.AnimationParser.JSONData(this.game, e, a) : g.frameData = c.AnimationParser.JSONDataHash(this.game, e, a), this._cache.image[a] = g, this._resolveURL(b, g)
        }, reloadSound: function (a) {
            var b = this, c = this.getSound(a);
            c && (c.data.src = c.url, c.data.addEventListener("canplaythrough", function () {
                return b.reloadSoundComplete(a)
            }, !1), c.data.load())
        }, reloadSoundComplete: function (a) {
            var b = this.getSound(a);
            b && (b.locked = !1, this.onSoundUnlock.dispatch(a))
        }, updateSound: function (a, b, c) {
            var d = this.getSound(a);
            d && (d[b] = c)
        }, decodedSound: function (a, b) {
            var c = this.getSound(a);
            c.data = b, c.decoded = !0, c.isDecoding = !1
        }, isSoundDecoded: function (a) {
            var b = this.getItem(a, c.Cache.SOUND, "isSoundDecoded");
            if (b) return b.decoded
        }, isSoundReady: function (a) {
            var b = this.getItem(a, c.Cache.SOUND, "isSoundDecoded");
            if (b) return b.decoded && !this.game.sound.touchLocked
        }, checkKey: function (a, b) {
            return !!this._cacheMap[a][b]
        }, checkURL: function (a) {
            return !!this._urlMap[this._resolveURL(a)]
        }, checkCanvasKey: function (a) {
            return this.checkKey(c.Cache.CANVAS, a)
        }, checkImageKey: function (a) {
            return this.checkKey(c.Cache.IMAGE, a)
        }, checkTextureKey: function (a) {
            return this.checkKey(c.Cache.TEXTURE, a)
        }, checkSoundKey: function (a) {
            return this.checkKey(c.Cache.SOUND, a)
        }, checkTextKey: function (a) {
            return this.checkKey(c.Cache.TEXT, a)
        }, checkPhysicsKey: function (a) {
            return this.checkKey(c.Cache.PHYSICS, a)
        }, checkTilemapKey: function (a) {
            return this.checkKey(c.Cache.TILEMAP, a)
        }, checkBinaryKey: function (a) {
            return this.checkKey(c.Cache.BINARY, a)
        }, checkBitmapDataKey: function (a) {
            return this.checkKey(c.Cache.BITMAPDATA, a)
        }, checkBitmapFontKey: function (a) {
            return this.checkKey(c.Cache.BITMAPFONT, a)
        }, checkJSONKey: function (a) {
            return this.checkKey(c.Cache.JSON, a)
        }, checkXMLKey: function (a) {
            return this.checkKey(c.Cache.XML, a)
        }, checkVideoKey: function (a) {
            return this.checkKey(c.Cache.VIDEO, a)
        }, checkShaderKey: function (a) {
            return this.checkKey(c.Cache.SHADER, a)
        }, checkRenderTextureKey: function (a) {
            return this.checkKey(c.Cache.RENDER_TEXTURE, a)
        }, getItem: function (a, b, c, d) {
            return this.checkKey(b, a) ? void 0 === d ? this._cacheMap[b][a] : this._cacheMap[b][a][d] : (c && console.warn("Phaser.Cache." + c + ': Key "' + a + '" not found in Cache.'), null)
        }, getCanvas: function (a) {
            return this.getItem(a, c.Cache.CANVAS, "getCanvas", "canvas")
        }, getImage: function (a, b) {
            void 0 !== a && null !== a || (a = "__default"), void 0 === b && (b = !1);
            var d = this.getItem(a, c.Cache.IMAGE, "getImage");
            return null === d && (d = this.getItem("__missing", c.Cache.IMAGE, "getImage")), b ? d : d.data
        }, getTextureFrame: function (a) {
            return this.getItem(a, c.Cache.TEXTURE, "getTextureFrame", "frame")
        }, getSound: function (a) {
            return this.getItem(a, c.Cache.SOUND, "getSound")
        }, getSoundData: function (a) {
            return this.getItem(a, c.Cache.SOUND, "getSoundData", "data")
        }, getText: function (a) {
            return this.getItem(a, c.Cache.TEXT, "getText", "data")
        }, getPhysicsData: function (a, b, d) {
            var e = this.getItem(a, c.Cache.PHYSICS, "getPhysicsData", "data");
            if (null === e || void 0 === b || null === b) return e;
            if (e[b]) {
                var f = e[b];
                if (!f || !d) return f;
                for (var g in f) if (g = f[g], g.fixtureKey === d) return g;
                console.warn('Phaser.Cache.getPhysicsData: Could not find given fixtureKey: "' + d + " in " + a + '"')
            } else console.warn('Phaser.Cache.getPhysicsData: Invalid key/object: "' + a + " / " + b + '"');
            return null
        }, getTilemapData: function (a) {
            return this.getItem(a, c.Cache.TILEMAP, "getTilemapData")
        }, getBinary: function (a) {
            return this.getItem(a, c.Cache.BINARY, "getBinary")
        }, getBitmapData: function (a) {
            return this.getItem(a, c.Cache.BITMAPDATA, "getBitmapData", "data")
        }, getBitmapFont: function (a) {
            return this.getItem(a, c.Cache.BITMAPFONT, "getBitmapFont")
        }, getJSON: function (a, b) {
            var d = this.getItem(a, c.Cache.JSON, "getJSON", "data");
            return d ? b ? c.Utils.extend(!0, Array.isArray(d) ? [] : {}, d) : d : null
        }, getXML: function (a) {
            return this.getItem(a, c.Cache.XML, "getXML", "data")
        }, getVideo: function (a) {
            return this.getItem(a, c.Cache.VIDEO, "getVideo")
        }, getShader: function (a) {
            return this.getItem(a, c.Cache.SHADER, "getShader", "data")
        }, getRenderTexture: function (a) {
            return this.getItem(a, c.Cache.RENDER_TEXTURE, "getRenderTexture")
        }, getBaseTexture: function (a, b) {
            return void 0 === b && (b = c.Cache.IMAGE), this.getItem(a, b, "getBaseTexture", "base")
        }, getFrame: function (a, b) {
            return void 0 === b && (b = c.Cache.IMAGE), this.getItem(a, b, "getFrame", "frame")
        }, getFrameCount: function (a, b) {
            var c = this.getFrameData(a, b);
            return c ? c.total : 0
        }, getFrameData: function (a, b) {
            return void 0 === b && (b = c.Cache.IMAGE), this.getItem(a, b, "getFrameData", "frameData")
        }, hasFrameData: function (a, b) {
            return void 0 === b && (b = c.Cache.IMAGE), null !== this.getItem(a, b, "", "frameData")
        }, updateFrameData: function (a, b, d) {
            void 0 === d && (d = c.Cache.IMAGE), this._cacheMap[d][a] && (this._cacheMap[d][a].frameData = b)
        }, getFrameByIndex: function (a, b, c) {
            var d = this.getFrameData(a, c);
            return d ? d.getFrame(b) : null
        }, getFrameByName: function (a, b, c) {
            var d = this.getFrameData(a, c);
            return d ? d.getFrameByName(b) : null
        }, getURL: function (a) {
            var a = this._resolveURL(a);
            return a ? this._urlMap[a] : (console.warn('Phaser.Cache.getUrl: Invalid url: "' + a + '" or Cache.autoResolveURL was false'), null)
        }, getKeys: function (a) {
            void 0 === a && (a = c.Cache.IMAGE);
            var b = [];
            if (this._cacheMap[a]) for (var d in this._cacheMap[a]) "__default" !== d && "__missing" !== d && b.push(d);
            return b
        }, removeCanvas: function (a) {
            delete this._cache.canvas[a]
        }, removeImage: function (a, b) {
            void 0 === b && (b = !0);
            var c = this.getImage(a, !0);
            b && c.base && c.base.destroy(), delete this._cache.image[a]
        }, removeSound: function (a) {
            delete this._cache.sound[a]
        }, removeText: function (a) {
            delete this._cache.text[a]
        }, removePhysics: function (a) {
            delete this._cache.physics[a]
        }, removeTilemap: function (a) {
            delete this._cache.tilemap[a]
        }, removeBinary: function (a) {
            delete this._cache.binary[a]
        }, removeBitmapData: function (a) {
            delete this._cache.bitmapData[a]
        }, removeBitmapFont: function (a) {
            delete this._cache.bitmapFont[a]
        }, removeJSON: function (a) {
            delete this._cache.json[a]
        }, removeXML: function (a) {
            delete this._cache.xml[a]
        }, removeVideo: function (a) {
            delete this._cache.video[a]
        }, removeShader: function (a) {
            delete this._cache.shader[a]
        }, removeRenderTexture: function (a) {
            delete this._cache.renderTexture[a]
        }, removeSpriteSheet: function (a) {
            delete this._cache.spriteSheet[a]
        }, removeTextureAtlas: function (a) {
            delete this._cache.atlas[a]
        }, clearGLTextures: function () {
            for (var a in this._cache.image) this._cache.image[a].base._glTextures = []
        }, _resolveURL: function (a, b) {
            return this.autoResolveURL ? (this._urlResolver.src = this.game.load.baseURL + a, this._urlTemp = this._urlResolver.src, this._urlResolver.src = "", b && (this._urlMap[this._urlTemp] = b), this._urlTemp) : null
        }, destroy: function () {
            for (var a = 0; a < this._cacheMap.length; a++) {
                var b = this._cacheMap[a];
                for (var c in b) "__default" !== c && "__missing" !== c && (b[c].destroy && b[c].destroy(), delete b[c])
            }
            this._urlMap = null, this._urlResolver = null, this._urlTemp = null
        }
    }, c.Cache.prototype.constructor = c.Cache, c.Loader = function (a) {
        this.game = a, this.cache = a.cache, this.resetLocked = !1, this.isLoading = !1, this.hasLoaded = !1, this.preloadSprite = null, this.crossOrigin = !1, this.baseURL = "", this.path = "", this.headers = {
            requestedWith: !1,
            json: "application/json",
            xml: "application/xml"
        }, this.onLoadStart = new c.Signal, this.onLoadComplete = new c.Signal, this.onPackComplete = new c.Signal, this.onFileStart = new c.Signal, this.onFileComplete = new c.Signal, this.onFileError = new c.Signal, this.useXDomainRequest = !1, this._warnedAboutXDomainRequest = !1, this.enableParallel = !0, this.maxParallelDownloads = 4, this._withSyncPointDepth = 0, this._fileList = [], this._flightQueue = [], this._processingHead = 0, this._fileLoadStarted = !1, this._totalPackCount = 0, this._totalFileCount = 0, this._loadedPackCount = 0, this._loadedFileCount = 0
    }, c.Loader.TEXTURE_ATLAS_JSON_ARRAY = 0, c.Loader.TEXTURE_ATLAS_JSON_HASH = 1, c.Loader.TEXTURE_ATLAS_XML_STARLING = 2,c.Loader.PHYSICS_LIME_CORONA_JSON = 3,c.Loader.PHYSICS_PHASER_JSON = 4,c.Loader.TEXTURE_ATLAS_JSON_PYXEL = 5,c.Loader.prototype = {
        setPreloadSprite: function (a, b) {
            b = b || 0, this.preloadSprite = {
                sprite: a,
                direction: b,
                width: a.width,
                height: a.height,
                rect: null
            }, 0 === b ? this.preloadSprite.rect = new c.Rectangle(0, 0, 1, a.height) : this.preloadSprite.rect = new c.Rectangle(0, 0, a.width, 1), a.crop(this.preloadSprite.rect), a.visible = !0
        }, resize: function () {
            this.preloadSprite && this.preloadSprite.height !== this.preloadSprite.sprite.height && (this.preloadSprite.rect.height = this.preloadSprite.sprite.height)
        }, checkKeyExists: function (a, b) {
            return this.getAssetIndex(a, b) > -1
        }, getAssetIndex: function (a, b) {
            for (var c = -1, d = 0; d < this._fileList.length; d++) {
                var e = this._fileList[d];
                if (e.type === a && e.key === b && (c = d, !e.loaded && !e.loading)) break
            }
            return c
        }, getAsset: function (a, b) {
            var c = this.getAssetIndex(a, b);
            return c > -1 && {index: c, file: this._fileList[c]}
        }, reset: function (a, b) {
            void 0 === b && (b = !1), this.resetLocked || (a && (this.preloadSprite = null), this.isLoading = !1, this._processingHead = 0, this._fileList.length = 0, this._flightQueue.length = 0, this._fileLoadStarted = !1, this._totalFileCount = 0, this._totalPackCount = 0, this._loadedPackCount = 0, this._loadedFileCount = 0, b && (this.onLoadStart.removeAll(), this.onLoadComplete.removeAll(), this.onPackComplete.removeAll(), this.onFileStart.removeAll(), this.onFileComplete.removeAll(), this.onFileError.removeAll()))
        }, addToFileList: function (a, b, c, d, e, f) {
            if (void 0 === e && (e = !1), void 0 === b || "" === b) return console.warn("Phaser.Loader: Invalid or no key given of type " + a), this;
            if (void 0 === c || null === c) {
                if (!f) return console.warn("Phaser.Loader: No URL given for file type: " + a + " key: " + b), this;
                c = b + f
            }
            var g = {
                type: a,
                key: b,
                path: this.path,
                url: c,
                syncPoint: this._withSyncPointDepth > 0,
                data: null,
                loading: !1,
                loaded: !1,
                error: !1
            };
            if (d) for (var h in d) g[h] = d[h];
            var i = this.getAssetIndex(a, b);
            if (e && i > -1) {
                var j = this._fileList[i];
                j.loading || j.loaded ? (this._fileList.push(g), this._totalFileCount++) : this._fileList[i] = g
            } else i === -1 && (this._fileList.push(g), this._totalFileCount++);
            return this
        }, replaceInFileList: function (a, b, c, d) {
            return this.addToFileList(a, b, c, d, !0)
        }, pack: function (a, b, c, d) {
            if (void 0 === b && (b = null), void 0 === c && (c = null), void 0 === d && (d = null), !b && !c) return console.warn("Phaser.Loader.pack - Both url and data are null. One must be set."), this;
            var e = {
                type: "packfile",
                key: a,
                url: b,
                path: this.path,
                syncPoint: !0,
                data: null,
                loading: !1,
                loaded: !1,
                error: !1,
                callbackContext: d
            };
            c && ("string" == typeof c && (c = JSON.parse(c)), e.data = c || {}, e.loaded = !0);
            for (var f = 0; f < this._fileList.length + 1; f++) {
                var g = this._fileList[f];
                if (!g || !g.loaded && !g.loading && "packfile" !== g.type) {
                    this._fileList.splice(f, 0, e), this._totalPackCount++;
                    break
                }
            }
            return this
        }, image: function (a, b, c) {
            return this.addToFileList("image", a, b, void 0, c, ".png")
        }, images: function (a, b) {
            if (Array.isArray(b)) for (var c = 0; c < a.length; c++) this.image(a[c], b[c]); else for (var c = 0; c < a.length; c++) this.image(a[c]);
            return this
        }, text: function (a, b, c) {
            return this.addToFileList("text", a, b, void 0, c, ".txt")
        }, json: function (a, b, c) {
            return this.addToFileList("json", a, b, void 0, c, ".json")
        }, shader: function (a, b, c) {
            return this.addToFileList("shader", a, b, void 0, c, ".frag")
        }, xml: function (a, b, c) {
            return this.addToFileList("xml", a, b, void 0, c, ".xml")
        }, script: function (a, b, c, d) {
            return void 0 === c && (c = !1), c !== !1 && void 0 === d && (d = this), this.addToFileList("script", a, b, {
                syncPoint: !0,
                callback: c,
                callbackContext: d
            }, !1, ".js")
        }, binary: function (a, b, c, d) {
            return void 0 === c && (c = !1), c !== !1 && void 0 === d && (d = c), this.addToFileList("binary", a, b, {
                callback: c,
                callbackContext: d
            }, !1, ".bin")
        }, spritesheet: function (a, b, c, d, e, f, g) {
            return void 0 === e && (e = -1), void 0 === f && (f = 0), void 0 === g && (g = 0), this.addToFileList("spritesheet", a, b, {
                frameWidth: c,
                frameHeight: d,
                frameMax: e,
                margin: f,
                spacing: g
            }, !1, ".png")
        }, audio: function (a, b, c) {
            return this.game.sound.noAudio ? this : (void 0 === c && (c = !0), "string" == typeof b && (b = [b]), this.addToFileList("audio", a, b, {
                buffer: null,
                autoDecode: c
            }))
        }, audioSprite: function (a, b, c, d, e) {
            return this.game.sound.noAudio ? this : (void 0 === c && (c = null), void 0 === d && (d = null), void 0 === e && (e = !0), this.audio(a, b, e), c ? this.json(a + "-audioatlas", c) : d ? ("string" == typeof d && (d = JSON.parse(d)), this.cache.addJSON(a + "-audioatlas", "", d)) : console.warn("Phaser.Loader.audiosprite - You must specify either a jsonURL or provide a jsonData object"), this)
        }, audiosprite: function (a, b, c, d, e) {
            return this.audioSprite(a, b, c, d, e)
        }, video: function (a, b, c, d) {
            return void 0 === c && (c = this.game.device.firefox ? "loadeddata" : "canplaythrough"), void 0 === d && (d = !1), "string" == typeof b && (b = [b]), this.addToFileList("video", a, b, {
                buffer: null,
                asBlob: d,
                loadEvent: c
            })
        }, tilemap: function (a, b, d, e) {
            if (void 0 === b && (b = null), void 0 === d && (d = null), void 0 === e && (e = c.Tilemap.CSV), b || d || (b = e === c.Tilemap.CSV ? a + ".csv" : a + ".json"), d) {
                switch (e) {
                    case c.Tilemap.CSV:
                        break;
                    case c.Tilemap.TILED_JSON:
                        "string" == typeof d && (d = JSON.parse(d))
                }
                this.cache.addTilemap(a, null, d, e)
            } else this.addToFileList("tilemap", a, b, {format: e});
            return this
        }, physics: function (a, b, d, e) {
            return void 0 === b && (b = null), void 0 === d && (d = null), void 0 === e && (e = c.Physics.LIME_CORONA_JSON), b || d || (b = a + ".json"), d ? ("string" == typeof d && (d = JSON.parse(d)),
                this.cache.addPhysicsData(a, null, d, e)) : this.addToFileList("physics", a, b, {format: e}), this
        }, bitmapFont: function (a, b, c, d, e, f) {
            if (void 0 !== b && null !== b || (b = a + ".png"), void 0 === c && (c = null), void 0 === d && (d = null), null === c && null === d && (c = a + ".xml"), void 0 === e && (e = 0), void 0 === f && (f = 0), c) this.addToFileList("bitmapfont", a, b, {
                atlasURL: c,
                xSpacing: e,
                ySpacing: f
            }); else if ("string" == typeof d) {
                var g, h;
                try {
                    g = JSON.parse(d)
                } catch (a) {
                    h = this.parseXml(d)
                }
                if (!h && !g) throw new Error("Phaser.Loader. Invalid Bitmap Font atlas given");
                this.addToFileList("bitmapfont", a, b, {
                    atlasURL: null,
                    atlasData: g || h,
                    atlasType: g ? "json" : "xml",
                    xSpacing: e,
                    ySpacing: f
                })
            }
            return this
        }, atlasJSONArray: function (a, b, d, e) {
            return this.atlas(a, b, d, e, c.Loader.TEXTURE_ATLAS_JSON_ARRAY)
        }, atlasJSONHash: function (a, b, d, e) {
            return this.atlas(a, b, d, e, c.Loader.TEXTURE_ATLAS_JSON_HASH)
        }, atlasXML: function (a, b, d, e) {
            return void 0 === d && (d = null), void 0 === e && (e = null), d || e || (d = a + ".xml"), this.atlas(a, b, d, e, c.Loader.TEXTURE_ATLAS_XML_STARLING)
        }, atlas: function (a, b, d, e, f) {
            if (void 0 !== b && null !== b || (b = a + ".png"), void 0 === d && (d = null), void 0 === e && (e = null), void 0 === f && (f = c.Loader.TEXTURE_ATLAS_JSON_ARRAY), d || e || (d = f === c.Loader.TEXTURE_ATLAS_XML_STARLING ? a + ".xml" : a + ".json"), d) this.addToFileList("textureatlas", a, b, {
                atlasURL: d,
                format: f
            }); else {
                switch (f) {
                    case c.Loader.TEXTURE_ATLAS_JSON_ARRAY:
                        "string" == typeof e && (e = JSON.parse(e));
                        break;
                    case c.Loader.TEXTURE_ATLAS_XML_STARLING:
                        if ("string" == typeof e) {
                            var g = this.parseXml(e);
                            if (!g) throw new Error("Phaser.Loader. Invalid Texture Atlas XML given");
                            e = g
                        }
                }
                this.addToFileList("textureatlas", a, b, {atlasURL: null, atlasData: e, format: f})
            }
            return this
        }, withSyncPoint: function (a, b) {
            this._withSyncPointDepth++;
            try {
                a.call(b || this, this)
            } finally {
                this._withSyncPointDepth--
            }
            return this
        }, addSyncPoint: function (a, b) {
            var c = this.getAsset(a, b);
            return c && (c.file.syncPoint = !0), this
        }, removeFile: function (a, b) {
            var c = this.getAsset(a, b);
            c && (c.loaded || c.loading || this._fileList.splice(c.index, 1))
        }, removeAll: function () {
            this._fileList.length = 0, this._flightQueue.length = 0
        }, start: function () {
            this.isLoading || (this.hasLoaded = !1, this.isLoading = !0, this.updateProgress(), this.processLoadQueue())
        }, processLoadQueue: function () {
            if (!this.isLoading) return console.warn("Phaser.Loader - active loading canceled / reset"), void this.finishedLoading(!0);
            for (var a = 0; a < this._flightQueue.length; a++) {
                var b = this._flightQueue[a];
                (b.loaded || b.error) && (this._flightQueue.splice(a, 1), a--, b.loading = !1, b.requestUrl = null, b.requestObject = null, b.error && this.onFileError.dispatch(b.key, b), "packfile" !== b.type ? (this._loadedFileCount++, this.onFileComplete.dispatch(this.progress, b.key, !b.error, this._loadedFileCount, this._totalFileCount)) : "packfile" === b.type && b.error && (this._loadedPackCount++, this.onPackComplete.dispatch(b.key, !b.error, this._loadedPackCount, this._totalPackCount)))
            }
            for (var d = !1, e = this.enableParallel ? c.Math.clamp(this.maxParallelDownloads, 1, 12) : 1, a = this._processingHead; a < this._fileList.length; a++) {
                var b = this._fileList[a];
                if ("packfile" === b.type && !b.error && b.loaded && a === this._processingHead && (this.processPack(b), this._loadedPackCount++, this.onPackComplete.dispatch(b.key, !b.error, this._loadedPackCount, this._totalPackCount)), b.loaded || b.error ? a === this._processingHead && (this._processingHead = a + 1) : !b.loading && this._flightQueue.length < e && ("packfile" !== b.type || b.data ? d || (this._fileLoadStarted || (this._fileLoadStarted = !0, this.onLoadStart.dispatch()), this._flightQueue.push(b), b.loading = !0, this.onFileStart.dispatch(this.progress, b.key, b.url), this.loadFile(b)) : (this._flightQueue.push(b), b.loading = !0, this.loadFile(b))), !b.loaded && b.syncPoint && (d = !0), this._flightQueue.length >= e || d && this._loadedPackCount === this._totalPackCount) break
            }
            if (this.updateProgress(), this._processingHead >= this._fileList.length) this.finishedLoading(); else if (!this._flightQueue.length) {
                console.warn("Phaser.Loader - aborting: processing queue empty, loading may have stalled");
                var f = this;
                setTimeout(function () {
                    f.finishedLoading(!0)
                }, 2e3)
            }
        }, finishedLoading: function (a) {
            this.hasLoaded || (this.hasLoaded = !0, this.isLoading = !1, a || this._fileLoadStarted || (this._fileLoadStarted = !0, this.onLoadStart.dispatch()), this.onLoadComplete.dispatch(), this.game.state.loadComplete(), this.reset())
        }, asyncComplete: function (a, b) {
            void 0 === b && (b = ""), a.loaded = !0, a.error = !!b, b && (a.errorMessage = b, console.warn("Phaser.Loader - " + a.type + "[" + a.key + "]: " + b)), this.processLoadQueue()
        }, processPack: function (a) {
            var b = a.data[a.key];
            if (!b) return void console.warn("Phaser.Loader - " + a.key + ": pack has data, but not for pack key");
            for (var d = 0; d < b.length; d++) {
                var e = b[d];
                switch (e.type) {
                    case"image":
                        this.image(e.key, e.url, e.overwrite);
                        break;
                    case"text":
                        this.text(e.key, e.url, e.overwrite);
                        break;
                    case"json":
                        this.json(e.key, e.url, e.overwrite);
                        break;
                    case"xml":
                        this.xml(e.key, e.url, e.overwrite);
                        break;
                    case"script":
                        this.script(e.key, e.url, e.callback, a.callbackContext || this);
                        break;
                    case"binary":
                        this.binary(e.key, e.url, e.callback, a.callbackContext || this);
                        break;
                    case"spritesheet":
                        this.spritesheet(e.key, e.url, e.frameWidth, e.frameHeight, e.frameMax, e.margin, e.spacing);
                        break;
                    case"video":
                        this.video(e.key, e.urls);
                        break;
                    case"audio":
                        this.audio(e.key, e.urls, e.autoDecode);
                        break;
                    case"audiosprite":
                        this.audiosprite(e.key, e.urls, e.jsonURL, e.jsonData, e.autoDecode);
                        break;
                    case"tilemap":
                        this.tilemap(e.key, e.url, e.data, c.Tilemap[e.format]);
                        break;
                    case"physics":
                        this.physics(e.key, e.url, e.data, c.Loader[e.format]);
                        break;
                    case"bitmapFont":
                        this.bitmapFont(e.key, e.textureURL, e.atlasURL, e.atlasData, e.xSpacing, e.ySpacing);
                        break;
                    case"atlasJSONArray":
                        this.atlasJSONArray(e.key, e.textureURL, e.atlasURL, e.atlasData);
                        break;
                    case"atlasJSONHash":
                        this.atlasJSONHash(e.key, e.textureURL, e.atlasURL, e.atlasData);
                        break;
                    case"atlasXML":
                        this.atlasXML(e.key, e.textureURL, e.atlasURL, e.atlasData);
                        break;
                    case"atlas":
                        this.atlas(e.key, e.textureURL, e.atlasURL, e.atlasData, c.Loader[e.format]);
                        break;
                    case"shader":
                        this.shader(e.key, e.url, e.overwrite)
                }
            }
        }, transformUrl: function (a, b) {
            return !!a && (a.match(/^(?:blob:|data:|http:\/\/|https:\/\/|\/\/)/) ? a : this.baseURL + b.path + a)
        }, loadFile: function (a) {
            switch (a.type) {
                case"packfile":
                    this.xhrLoad(a, this.transformUrl(a.url, a), "text", this.fileComplete);
                    break;
                case"image":
                case"spritesheet":
                case"textureatlas":
                case"bitmapfont":
                    this.loadImageTag(a);
                    break;
                case"audio":
                    a.url = this.getAudioURL(a.url), a.url ? this.game.sound.usingWebAudio ? this.xhrLoad(a, this.transformUrl(a.url, a), "arraybuffer", this.fileComplete) : this.game.sound.usingAudioTag && this.loadAudioTag(a) : this.fileError(a, null, "No supported audio URL specified or device does not have audio playback support");
                    break;
                case"video":
                    a.url = this.getVideoURL(a.url), a.url ? a.asBlob ? this.xhrLoad(a, this.transformUrl(a.url, a), "blob", this.fileComplete) : this.loadVideoTag(a) : this.fileError(a, null, "No supported video URL specified or device does not have video playback support");
                    break;
                case"json":
                    this.xhrLoad(a, this.transformUrl(a.url, a), "text", this.jsonLoadComplete);
                    break;
                case"xml":
                    this.xhrLoad(a, this.transformUrl(a.url, a), "text", this.xmlLoadComplete);
                    break;
                case"tilemap":
                    a.format === c.Tilemap.TILED_JSON ? this.xhrLoad(a, this.transformUrl(a.url, a), "text", this.jsonLoadComplete) : a.format === c.Tilemap.CSV ? this.xhrLoad(a, this.transformUrl(a.url, a), "text", this.csvLoadComplete) : this.asyncComplete(a, "invalid Tilemap format: " + a.format);
                    break;
                case"text":
                case"script":
                case"shader":
                case"physics":
                    this.xhrLoad(a, this.transformUrl(a.url, a), "text", this.fileComplete);
                    break;
                case"binary":
                    this.xhrLoad(a, this.transformUrl(a.url, a), "arraybuffer", this.fileComplete)
            }
        }, loadImageTag: function (a) {
            var b = this;
            a.data = new Image, a.data.name = a.key, this.crossOrigin && (a.data.crossOrigin = this.crossOrigin), a.data.onload = function () {
                a.data.onload && (a.data.onload = null, a.data.onerror = null, b.fileComplete(a))
            }, a.data.onerror = function () {
                a.data.onload && (a.data.onload = null, a.data.onerror = null, b.fileError(a))
            }, a.data.src = this.transformUrl(a.url, a), a.data.complete && a.data.width && a.data.height && (a.data.onload = null, a.data.onerror = null, this.fileComplete(a))
        }, loadVideoTag: function (a) {
            var b = this;
            a.data = document.createElement("video"), a.data.name = a.key, a.data.controls = !1, a.data.autoplay = !1;
            var d = function () {
                a.data.removeEventListener(a.loadEvent, d, !1), a.data.onerror = null, a.data.canplay = !0, c.GAMES[b.game.id].load.fileComplete(a)
            };
            a.data.onerror = function () {
                a.data.removeEventListener(a.loadEvent, d, !1), a.data.onerror = null, a.data.canplay = !1, b.fileError(a)
            }, a.data.addEventListener(a.loadEvent, d, !1), a.data.src = this.transformUrl(a.url, a), a.data.load()
        }, loadAudioTag: function (a) {
            var b = this;
            if (this.game.sound.touchLocked) a.data = new Audio, a.data.name = a.key, a.data.preload = "auto", a.data.src = this.transformUrl(a.url, a), this.fileComplete(a); else {
                a.data = new Audio, a.data.name = a.key;
                var c = function () {
                    a.data.removeEventListener("canplaythrough", c, !1), a.data.onerror = null, b.fileComplete(a)
                };
                a.data.onerror = function () {
                    a.data.removeEventListener("canplaythrough", c, !1), a.data.onerror = null, b.fileError(a)
                }, a.data.preload = "auto", a.data.src = this.transformUrl(a.url, a), a.data.addEventListener("canplaythrough", c, !1), a.data.load()
            }
        }, xhrLoad: function (a, b, c, d, e) {
            if (this.useXDomainRequest && window.XDomainRequest) return void this.xhrLoadWithXDR(a, b, c, d, e);
            var f = new XMLHttpRequest;
            f.open("GET", b, !0), f.responseType = c, this.headers.requestedWith !== !1 && f.setRequestHeader("X-Requested-With", this.headers.requestedWith), this.headers[a.type] && f.setRequestHeader("Accept", this.headers[a.type]), e = e || this.fileError;
            var g = this;
            f.onload = function () {
                try {
                    return 4 === f.readyState && f.status >= 400 && f.status <= 599 ? e.call(g, a, f) : d.call(g, a, f)
                } catch (b) {
                    g.hasLoaded ? window.console && console.error(b) : g.asyncComplete(a, b.message || "Exception")
                }
            }, f.onerror = function () {
                try {
                    return e.call(g, a, f)
                } catch (b) {
                    g.hasLoaded ? window.console && console.error(b) : g.asyncComplete(a, b.message || "Exception")
                }
            }, a.requestObject = f, a.requestUrl = b, f.send()
        }, xhrLoadWithXDR: function (a, b, c, d, e) {
            this._warnedAboutXDomainRequest || this.game.device.ie && !(this.game.device.ieVersion >= 10) || (this._warnedAboutXDomainRequest = !0, console.warn("Phaser.Loader - using XDomainRequest outside of IE 9"));
            var f = new window.XDomainRequest;
            f.open("GET", b, !0), f.responseType = c, f.timeout = 3e3, e = e || this.fileError;
            var g = this;
            f.onerror = function () {
                try {
                    return e.call(g, a, f)
                } catch (b) {
                    g.asyncComplete(a, b.message || "Exception")
                }
            }, f.ontimeout = function () {
                try {
                    return e.call(g, a, f)
                } catch (b) {
                    g.asyncComplete(a, b.message || "Exception")
                }
            }, f.onprogress = function () {
            }, f.onload = function () {
                try {
                    return 4 === f.readyState && f.status >= 400 && f.status <= 599 ? e.call(g, a, f) : d.call(g, a, f)
                } catch (b) {
                    g.asyncComplete(a, b.message || "Exception")
                }
            }, a.requestObject = f, a.requestUrl = b, setTimeout(function () {
                f.send()
            }, 0)
        }, getVideoURL: function (a) {
            for (var b = 0; b < a.length; b++) {
                var c, d = a[b];
                if (d.uri) {
                    if (c = d.type, d = d.uri, this.game.device.canPlayVideo(c)) return d
                } else {
                    if (0 === d.indexOf("blob:") || 0 === d.indexOf("data:")) return d;
                    d.indexOf("?") >= 0 && (d = d.substr(0, d.indexOf("?")));
                    var e = d.substr((Math.max(0, d.lastIndexOf(".")) || 1 / 0) + 1);
                    if (c = e.toLowerCase(), this.game.device.canPlayVideo(c)) return a[b]
                }
            }
            return null
        }, getAudioURL: function (a) {
            if (this.game.sound.noAudio) return null;
            for (var b = 0; b < a.length; b++) {
                var c, d = a[b];
                if (d.uri) {
                    if (c = d.type, d = d.uri, this.game.device.canPlayAudio(c)) return d
                } else {
                    if (0 === d.indexOf("blob:") || 0 === d.indexOf("data:")) return d;
                    d.indexOf("?") >= 0 && (d = d.substr(0, d.indexOf("?")));
                    var e = d.substr((Math.max(0, d.lastIndexOf(".")) || 1 / 0) + 1);
                    if (c = e.toLowerCase(), this.game.device.canPlayAudio(c)) return a[b]
                }
            }
            return null
        }, fileError: function (a, b, c) {
            var d = a.requestUrl || this.transformUrl(a.url, a), e = "error loading asset from URL " + d;
            !c && b && (c = b.status), c && (e = e + " (" + c + ")"), this.asyncComplete(a, e)
        }, fileComplete: function (a, b) {
            var d = !0;
            switch (a.type) {
                case"packfile":
                    var e = JSON.parse(b.responseText);
                    a.data = e || {};
                    break;
                case"image":
                    this.cache.addImage(a.key, a.url, a.data);
                    break;
                case"spritesheet":
                    this.cache.addSpriteSheet(a.key, a.url, a.data, a.frameWidth, a.frameHeight, a.frameMax, a.margin, a.spacing);
                    break;
                case"textureatlas":
                    if (null == a.atlasURL) this.cache.addTextureAtlas(a.key, a.url, a.data, a.atlasData, a.format); else if (d = !1, a.format === c.Loader.TEXTURE_ATLAS_JSON_ARRAY || a.format === c.Loader.TEXTURE_ATLAS_JSON_HASH || a.format === c.Loader.TEXTURE_ATLAS_JSON_PYXEL) this.xhrLoad(a, this.transformUrl(a.atlasURL, a), "text", this.jsonLoadComplete); else {
                        if (a.format !== c.Loader.TEXTURE_ATLAS_XML_STARLING) throw new Error("Phaser.Loader. Invalid Texture Atlas format: " + a.format);
                        this.xhrLoad(a, this.transformUrl(a.atlasURL, a), "text", this.xmlLoadComplete)
                    }
                    break;
                case"bitmapfont":
                    a.atlasURL ? (d = !1, this.xhrLoad(a, this.transformUrl(a.atlasURL, a), "text", function (a, b) {
                        var c;
                        try {
                            c = JSON.parse(b.responseText)
                        } catch (a) {
                        }
                        c ? (a.atlasType = "json", this.jsonLoadComplete(a, b)) : (a.atlasType = "xml", this.xmlLoadComplete(a, b))
                    })) : this.cache.addBitmapFont(a.key, a.url, a.data, a.atlasData, a.atlasType, a.xSpacing, a.ySpacing);
                    break;
                case"video":
                    if (a.asBlob) try {
                        a.data = b.response
                    } catch (b) {
                        throw new Error("Phaser.Loader. Unable to parse video file as Blob: " + a.key)
                    }
                    this.cache.addVideo(a.key, a.url, a.data, a.asBlob);
                    break;
                case"audio":
                    this.game.sound.usingWebAudio ? (a.data = b.response, this.cache.addSound(a.key, a.url, a.data, !0, !1), a.autoDecode && this.game.sound.decode(a.key)) : this.cache.addSound(a.key, a.url, a.data, !1, !0);
                    break;
                case"text":
                    a.data = b.responseText, this.cache.addText(a.key, a.url, a.data);
                    break;
                case"shader":
                    a.data = b.responseText, this.cache.addShader(a.key, a.url, a.data);
                    break;
                case"physics":
                    var e = JSON.parse(b.responseText);
                    this.cache.addPhysicsData(a.key, a.url, e, a.format);
                    break;
                case"script":
                    a.data = document.createElement("script"), a.data.language = "javascript", a.data.type = "text/javascript", a.data.defer = !1, a.data.text = b.responseText, document.head.appendChild(a.data), a.callback && (a.data = a.callback.call(a.callbackContext, a.key, b.responseText));
                    break;
                case"binary":
                    a.callback ? a.data = a.callback.call(a.callbackContext, a.key, b.response) : a.data = b.response, this.cache.addBinary(a.key, a.data)
            }
            d && this.asyncComplete(a)
        }, jsonLoadComplete: function (a, b) {
            var c = JSON.parse(b.responseText);
            "tilemap" === a.type ? this.cache.addTilemap(a.key, a.url, c, a.format) : "bitmapfont" === a.type ? this.cache.addBitmapFont(a.key, a.url, a.data, c, a.atlasType, a.xSpacing, a.ySpacing) : "json" === a.type ? this.cache.addJSON(a.key, a.url, c) : this.cache.addTextureAtlas(a.key, a.url, a.data, c, a.format), this.asyncComplete(a)
        }, csvLoadComplete: function (a, b) {
            var c = b.responseText;
            this.cache.addTilemap(a.key, a.url, c, a.format), this.asyncComplete(a)
        }, xmlLoadComplete: function (a, b) {
            var c = b.responseText, d = this.parseXml(c);
            if (!d) {
                var e = b.responseType || b.contentType;
                return console.warn("Phaser.Loader - " + a.key + ": invalid XML (" + e + ")"), void this.asyncComplete(a, "invalid XML")
            }
            "bitmapfont" === a.type ? this.cache.addBitmapFont(a.key, a.url, a.data, d, a.atlasType, a.xSpacing, a.ySpacing) : "textureatlas" === a.type ? this.cache.addTextureAtlas(a.key, a.url, a.data, d, a.format) : "xml" === a.type && this.cache.addXML(a.key, a.url, d), this.asyncComplete(a)
        }, parseXml: function (a) {
            var b;
            try {
                if (window.DOMParser) {
                    var c = new DOMParser;
                    b = c.parseFromString(a, "text/xml")
                } else b = new ActiveXObject("Microsoft.XMLDOM"), b.async = "false", b.loadXML(a)
            } catch (a) {
                b = null
            }
            return b && b.documentElement && !b.getElementsByTagName("parsererror").length ? b : null
        }, updateProgress: function () {
            this.preloadSprite && (0 === this.preloadSprite.direction ? this.preloadSprite.rect.width = Math.floor(this.preloadSprite.width / 100 * this.progress) : this.preloadSprite.rect.height = Math.floor(this.preloadSprite.height / 100 * this.progress), this.preloadSprite.sprite ? this.preloadSprite.sprite.updateCrop() : this.preloadSprite = null)
        }, totalLoadedFiles: function () {
            return this._loadedFileCount
        }, totalQueuedFiles: function () {
            return this._totalFileCount - this._loadedFileCount
        }, totalLoadedPacks: function () {
            return this._totalPackCount
        }, totalQueuedPacks: function () {
            return this._totalPackCount - this._loadedPackCount
        }
    },Object.defineProperty(c.Loader.prototype, "progressFloat", {
        get: function () {
            var a = this._loadedFileCount / this._totalFileCount * 100;
            return c.Math.clamp(a || 0, 0, 100)
        }
    }),Object.defineProperty(c.Loader.prototype, "progress", {
        get: function () {
            return Math.round(this.progressFloat)
        }
    }),c.Loader.prototype.constructor = c.Loader,c.LoaderParser = {
        bitmapFont: function (a, b, c, d) {
            return this.xmlBitmapFont(a, b, c, d)
        }, xmlBitmapFont: function (a, b, c, d) {
            var e = {}, f = a.getElementsByTagName("info")[0], g = a.getElementsByTagName("common")[0];
            e.font = f.getAttribute("face"), e.size = parseInt(f.getAttribute("size"), 10), e.lineHeight = parseInt(g.getAttribute("lineHeight"), 10) + d, e.chars = {};
            for (var h = a.getElementsByTagName("char"), i = 0; i < h.length; i++) {
                var j = parseInt(h[i].getAttribute("id"), 10);
                e.chars[j] = {
                    x: parseInt(h[i].getAttribute("x"), 10),
                    y: parseInt(h[i].getAttribute("y"), 10),
                    width: parseInt(h[i].getAttribute("width"), 10),
                    height: parseInt(h[i].getAttribute("height"), 10),
                    xOffset: parseInt(h[i].getAttribute("xoffset"), 10),
                    yOffset: parseInt(h[i].getAttribute("yoffset"), 10),
                    xAdvance: parseInt(h[i].getAttribute("xadvance"), 10) + c,
                    kerning: {}
                }
            }
            var k = a.getElementsByTagName("kerning");
            for (i = 0; i < k.length; i++) {
                var l = parseInt(k[i].getAttribute("first"), 10), m = parseInt(k[i].getAttribute("second"), 10),
                    n = parseInt(k[i].getAttribute("amount"), 10);
                e.chars[m].kerning[l] = n
            }
            return this.finalizeBitmapFont(b, e)
        }, jsonBitmapFont: function (a, b, c, d) {
            var e = {
                font: a.font.info._face,
                size: parseInt(a.font.info._size, 10),
                lineHeight: parseInt(a.font.common._lineHeight, 10) + d,
                chars: {}
            };
            return a.font.chars.char.forEach(function (a) {
                var b = parseInt(a._id, 10);
                e.chars[b] = {
                    x: parseInt(a._x, 10),
                    y: parseInt(a._y, 10),
                    width: parseInt(a._width, 10),
                    height: parseInt(a._height, 10),
                    xOffset: parseInt(a._xoffset, 10),
                    yOffset: parseInt(a._yoffset, 10),
                    xAdvance: parseInt(a._xadvance, 10) + c,
                    kerning: {}
                }
            }), a.font.kernings && a.font.kernings.kerning && a.font.kernings.kerning.forEach(function (a) {
                e.chars[a._second].kerning[a._first] = parseInt(a._amount, 10)
            }), this.finalizeBitmapFont(b, e)
        }, finalizeBitmapFont: function (a, b) {
            return Object.keys(b.chars).forEach(function (d) {
                var e = b.chars[d];
                e.texture = new PIXI.Texture(a, new c.Rectangle(e.x, e.y, e.width, e.height))
            }), b
        }
    },c.AudioSprite = function (a, b) {
        this.game = a, this.key = b, this.config = this.game.cache.getJSON(b + "-audioatlas"), this.autoplayKey = null, this.autoplay = !1, this.sounds = {};
        for (var c in this.config.spritemap) {
            var d = this.config.spritemap[c], e = this.game.add.sound(this.key);
            e.addMarker(c, d.start, d.end - d.start, null, d.loop), this.sounds[c] = e
        }
        this.config.autoplay && (this.autoplayKey = this.config.autoplay, this.play(this.autoplayKey), this.autoplay = this.sounds[this.autoplayKey])
    },c.AudioSprite.prototype = {
        play: function (a, b) {
            return void 0 === b && (b = 1), this.sounds[a].play(a, null, b)
        }, stop: function (a) {
            if (a) this.sounds[a].stop(); else for (var b in this.sounds) this.sounds[b].stop()
        }, get: function (a) {
            return this.sounds[a]
        }
    },c.AudioSprite.prototype.constructor = c.AudioSprite,c.Sound = function (a, b, d, e, f) {
        void 0 === d && (d = 1), void 0 === e && (e = !1), void 0 === f && (f = a.sound.connectToMaster), this.game = a, this.name = b, this.key = b, this.loop = e, this.markers = {}, this.context = null, this.autoplay = !1, this.totalDuration = 0, this.startTime = 0, this.currentTime = 0, this.duration = 0, this.durationMS = 0, this.position = 0, this.stopTime = 0, this.paused = !1, this.pausedPosition = 0, this.pausedTime = 0, this.isPlaying = !1, this.currentMarker = "", this.fadeTween = null, this.pendingPlayback = !1, this.override = !1, this.allowMultiple = !1, this.usingWebAudio = this.game.sound.usingWebAudio, this.usingAudioTag = this.game.sound.usingAudioTag, this.externalNode = null, this.masterGainNode = null, this.gainNode = null, this._sound = null, this.usingWebAudio ? (this.context = this.game.sound.context, this.masterGainNode = this.game.sound.masterGain, void 0 === this.context.createGain ? this.gainNode = this.context.createGainNode() : this.gainNode = this.context.createGain(), this.gainNode.gain.value = d * this.game.sound.volume, f && this.gainNode.connect(this.masterGainNode)) : this.usingAudioTag && (this.game.cache.getSound(b) && this.game.cache.isSoundReady(b) ? (this._sound = this.game.cache.getSoundData(b), this.totalDuration = 0, this._sound.duration && (this.totalDuration = this._sound.duration)) : this.game.cache.onSoundUnlock.add(this.soundHasUnlocked, this)), this.onDecoded = new c.Signal, this.onPlay = new c.Signal, this.onPause = new c.Signal, this.onResume = new c.Signal, this.onLoop = new c.Signal, this.onStop = new c.Signal, this.onMute = new c.Signal, this.onMarkerComplete = new c.Signal, this.onFadeComplete = new c.Signal, this._volume = d, this._buffer = null, this._muted = !1, this._tempMarker = 0, this._tempPosition = 0, this._tempVolume = 0, this._tempPause = 0, this._muteVolume = 0, this._tempLoop = 0, this._paused = !1, this._onDecodedEventDispatched = !1
    },c.Sound.prototype = {
        soundHasUnlocked: function (a) {
            a === this.key && (this._sound = this.game.cache.getSoundData(this.key), this.totalDuration = this._sound.duration)
        }, addMarker: function (a, b, c, d, e) {
            void 0 !== c && null !== c || (c = 1), void 0 !== d && null !== d || (d = 1), void 0 === e && (e = !1), this.markers[a] = {
                name: a,
                start: b,
                stop: b + c,
                volume: d,
                duration: c,
                durationMS: 1e3 * c,
                loop: e
            }
        }, removeMarker: function (a) {
            delete this.markers[a]
        }, onEndedHandler: function () {
            this._sound.onended = null, this.isPlaying = !1, this.currentTime = this.durationMS, this.stop()
        }, update: function () {
            return this.game.cache.checkSoundKey(this.key) ? (this.isDecoded && !this._onDecodedEventDispatched && (this.onDecoded.dispatch(this), this._onDecodedEventDispatched = !0), this.pendingPlayback && this.game.cache.isSoundReady(this.key) && (this.pendingPlayback = !1, this.play(this._tempMarker, this._tempPosition, this._tempVolume, this._tempLoop)), void (this.isPlaying && (this.currentTime = this.game.time.time - this.startTime, this.currentTime >= this.durationMS && (this.usingWebAudio ? this.loop ? (this.onLoop.dispatch(this), this.isPlaying = !1, "" === this.currentMarker ? (this.currentTime = 0, this.startTime = this.game.time.time, this.isPlaying = !0) : (this.onMarkerComplete.dispatch(this.currentMarker, this), this.play(this.currentMarker, 0, this.volume, !0, !0))) : "" !== this.currentMarker && this.stop() : this.loop ? (this.onLoop.dispatch(this), "" === this.currentMarker && (this.currentTime = 0, this.startTime = this.game.time.time), this.isPlaying = !1, this.play(this.currentMarker, 0, this.volume, !0, !0)) : this.stop())))) : void this.destroy()
        }, loopFull: function (a) {
            return this.play(null, 0, a, !0)
        }, play: function (a, b, c, d, e) {
            if (void 0 !== a && a !== !1 && null !== a || (a = ""), void 0 === e && (e = !0), this.isPlaying && !this.allowMultiple && !e && !this.override) return this;
            if (this._sound && this.isPlaying && !this.allowMultiple && (this.override || e)) {
                if (this.usingWebAudio) {
                    if (void 0 === this._sound.stop) this._sound.noteOff(0); else try {
                        this._sound.stop(0)
                    } catch (a) {
                    }
                    this.externalNode ? this._sound.disconnect(this.externalNode) : this.gainNode && this._sound.disconnect(this.gainNode)
                } else this.usingAudioTag && (this._sound.pause(), this._sound.currentTime = 0);
                this.isPlaying = !1
            }
            if ("" === a && Object.keys(this.markers).length > 0) return this;
            if ("" !== a) {
                if (!this.markers[a]) return console.warn("Phaser.Sound.play: audio marker " + a + " doesn't exist"), this;
                this.currentMarker = a, this.position = this.markers[a].start, this.volume = this.markers[a].volume, this.loop = this.markers[a].loop, this.duration = this.markers[a].duration, this.durationMS = this.markers[a].durationMS, "undefined" != typeof c && (this.volume = c), "undefined" != typeof d && (this.loop = d), this._tempMarker = a, this._tempPosition = this.position, this._tempVolume = this.volume, this._tempLoop = this.loop
            } else b = b || 0, void 0 === c && (c = this._volume), void 0 === d && (d = this.loop), this.position = Math.max(0, b), this.volume = c, this.loop = d, this.duration = 0, this.durationMS = 0, this._tempMarker = a, this._tempPosition = b, this._tempVolume = c, this._tempLoop = d;
            return this.usingWebAudio ? this.game.cache.isSoundDecoded(this.key) ? (this._sound = this.context.createBufferSource(), this.externalNode ? this._sound.connect(this.externalNode) : this._sound.connect(this.gainNode), this._buffer = this.game.cache.getSoundData(this.key), this._sound.buffer = this._buffer, this.loop && "" === a && (this._sound.loop = !0), this.loop || "" !== a || (this._sound.onended = this.onEndedHandler.bind(this)), this.totalDuration = this._sound.buffer.duration, 0 === this.duration && (this.duration = this.totalDuration, this.durationMS = Math.ceil(1e3 * this.totalDuration)), void 0 === this._sound.start ? this._sound.noteGrainOn(0, this.position, this.duration) : this.loop && "" === a ? this._sound.start(0, 0) : this._sound.start(0, this.position, this.duration), this.isPlaying = !0, this.startTime = this.game.time.time, this.currentTime = 0, this.stopTime = this.startTime + this.durationMS, this.onPlay.dispatch(this)) : (this.pendingPlayback = !0, this.game.cache.getSound(this.key) && this.game.cache.getSound(this.key).isDecoding === !1 && this.game.sound.decode(this.key, this)) : this.game.cache.getSound(this.key) && this.game.cache.getSound(this.key).locked ? (this.game.cache.reloadSound(this.key), this.pendingPlayback = !0) : this._sound && (this.game.device.cocoonJS || 4 === this._sound.readyState) ? (this._sound.play(), this.totalDuration = this._sound.duration, 0 === this.duration && (this.duration = this.totalDuration, this.durationMS = 1e3 * this.totalDuration), this._sound.currentTime = this.position, this._sound.muted = this._muted, this._muted || this.game.sound.mute ? this._sound.volume = 0 : this._sound.volume = this._volume, this.isPlaying = !0, this.startTime = this.game.time.time, this.currentTime = 0, this.stopTime = this.startTime + this.durationMS, this.onPlay.dispatch(this)) : this.pendingPlayback = !0, this
        }, restart: function (a, b, c, d) {
            a = a || "", b = b || 0, c = c || 1, void 0 === d && (d = !1), this.play(a, b, c, d, !0)
        }, pause: function () {
            this.isPlaying && this._sound && (this.paused = !0, this.pausedPosition = this.currentTime, this.pausedTime = this.game.time.time, this._tempPause = this._sound.currentTime, this.onPause.dispatch(this), this.stop())
        }, resume: function () {
            if (this.paused && this._sound) {
                if (this.usingWebAudio) {
                    var a = Math.max(0, this.position + this.pausedPosition / 1e3);
                    this._sound = this.context.createBufferSource(), this._sound.buffer = this._buffer, this.externalNode ? this._sound.connect(this.externalNode) : this._sound.connect(this.gainNode), this.loop && (this._sound.loop = !0), this.loop || "" !== this.currentMarker || (this._sound.onended = this.onEndedHandler.bind(this));
                    var b = this.duration - this.pausedPosition / 1e3;
                    void 0 === this._sound.start ? this._sound.noteGrainOn(0, a, b) : this.loop && this.game.device.chrome ? 42 === this.game.device.chromeVersion ? this._sound.start(0) : this._sound.start(0, a) : this._sound.start(0, a, b)
                } else this._sound.currentTime = this._tempPause, this._sound.play();
                this.isPlaying = !0, this.paused = !1, this.startTime += this.game.time.time - this.pausedTime, this.onResume.dispatch(this)
            }
        }, stop: function () {
            if (this.isPlaying && this._sound) if (this.usingWebAudio) {
                if (void 0 === this._sound.stop) this._sound.noteOff(0); else try {
                    this._sound.stop(0)
                } catch (a) {
                }
                this.externalNode ? this._sound.disconnect(this.externalNode) : this.gainNode && this._sound.disconnect(this.gainNode)
            } else this.usingAudioTag && (this._sound.pause(), this._sound.currentTime = 0);
            if (this.pendingPlayback = !1, this.isPlaying = !1, !this.paused) {
                var a = this.currentMarker;
                "" !== this.currentMarker && this.onMarkerComplete.dispatch(this.currentMarker, this), this.currentMarker = "", null !== this.fadeTween && this.fadeTween.stop(), this.onStop.dispatch(this, a)
            }
        }, fadeIn: function (a, b, c) {
            void 0 === b && (b = !1), void 0 === c && (c = this.currentMarker), this.paused || (this.play(c, 0, 0, b), this.fadeTo(a, 1))
        }, fadeOut: function (a) {
            this.fadeTo(a, 0)
        }, fadeTo: function (a, b) {
            if (this.isPlaying && !this.paused && b !== this.volume) {
                if (void 0 === a && (a = 1e3), void 0 === b) return void console.warn("Phaser.Sound.fadeTo: No Volume Specified.");
                this.fadeTween = this.game.add.tween(this).to({volume: b}, a, c.Easing.Linear.None, !0), this.fadeTween.onComplete.add(this.fadeComplete, this)
            }
        }, fadeComplete: function () {
            this.onFadeComplete.dispatch(this, this.volume), 0 === this.volume && this.stop()
        }, updateGlobalVolume: function (a) {
            this.usingAudioTag && this._sound && (this._sound.volume = a * this._volume)
        }, destroy: function (a) {
            void 0 === a && (a = !0), this.stop(), a ? this.game.sound.remove(this) : (this.markers = {}, this.context = null, this._buffer = null, this.externalNode = null, this.onDecoded.dispose(), this.onPlay.dispose(), this.onPause.dispose(), this.onResume.dispose(), this.onLoop.dispose(), this.onStop.dispose(), this.onMute.dispose(), this.onMarkerComplete.dispose())
        }
    },c.Sound.prototype.constructor = c.Sound,Object.defineProperty(c.Sound.prototype, "isDecoding", {
        get: function () {
            return this.game.cache.getSound(this.key).isDecoding
        }
    }),Object.defineProperty(c.Sound.prototype, "isDecoded", {
        get: function () {
            return this.game.cache.isSoundDecoded(this.key)
        }
    }),Object.defineProperty(c.Sound.prototype, "mute", {
        get: function () {
            return this._muted || this.game.sound.mute
        }, set: function (a) {
            a = a || !1, a !== this._muted && (a ? (this._muted = !0, this._muteVolume = this._tempVolume, this.usingWebAudio ? this.gainNode.gain.value = 0 : this.usingAudioTag && this._sound && (this._sound.volume = 0)) : (this._muted = !1, this.usingWebAudio ? this.gainNode.gain.value = this._muteVolume : this.usingAudioTag && this._sound && (this._sound.volume = this._muteVolume)), this.onMute.dispatch(this))
        }
    }),Object.defineProperty(c.Sound.prototype, "volume", {
        get: function () {
            return this._volume
        }, set: function (a) {
            return this.game.device.firefox && this.usingAudioTag && (a = this.game.math.clamp(a, 0, 1)), this._muted ? void (this._muteVolume = a) : (this._tempVolume = a, this._volume = a, void (this.usingWebAudio ? this.gainNode.gain.value = a : this.usingAudioTag && this._sound && (this._sound.volume = a)))
        }
    }),c.SoundManager = function (a) {
        this.game = a, this.onSoundDecode = new c.Signal, this.onVolumeChange = new c.Signal, this.onMute = new c.Signal, this.onUnMute = new c.Signal, this.context = null, this.usingWebAudio = !1, this.usingAudioTag = !1, this.noAudio = !1, this.connectToMaster = !0, this.touchLocked = !1, this.channels = 32, this.muteOnPause = !0, this._codeMuted = !1, this._muted = !1, this._unlockSource = null, this._volume = 1, this._sounds = [], this._watchList = new c.ArraySet, this._watching = !1, this._watchCallback = null, this._watchContext = null
    },c.SoundManager.prototype = {
        boot: function () {
            if (this.game.device.iOS && this.game.device.webAudio === !1 && (this.channels = 1), window.PhaserGlobal) {
                if (window.PhaserGlobal.disableAudio === !0) return this.noAudio = !0, void (this.touchLocked = !1);
                if (window.PhaserGlobal.disableWebAudio === !0) return this.usingAudioTag = !0, void (this.touchLocked = !1)
            }
            if (window.PhaserGlobal && window.PhaserGlobal.audioContext) this.context = window.PhaserGlobal.audioContext; else if (window.AudioContext) try {
                this.context = new window.AudioContext
            } catch (a) {
                this.context = null, this.usingWebAudio = !1, this.touchLocked = !1
            } else if (window.webkitAudioContext) try {
                this.context = new window.webkitAudioContext
            } catch (a) {
                this.context = null, this.usingWebAudio = !1, this.touchLocked = !1
            }
            if (null === this.context) {
                if (void 0 === window.Audio) return void (this.noAudio = !0);
                this.usingAudioTag = !0
            } else this.usingWebAudio = !0, void 0 === this.context.createGain ? this.masterGain = this.context.createGainNode() : this.masterGain = this.context.createGain(), this.masterGain.gain.value = 1, this.masterGain.connect(this.context.destination);
            this.noAudio || (!this.game.device.cocoonJS && this.game.device.iOS || window.PhaserGlobal && window.PhaserGlobal.fakeiOSTouchLock) && this.setTouchLock()
        }, setTouchLock: function () {
            this.noAudio || window.PhaserGlobal && window.PhaserGlobal.disableAudio === !0 || (this.game.device.iOSVersion > 8 ? this.game.input.touch.addTouchLockCallback(this.unlock, this, !0) : this.game.input.touch.addTouchLockCallback(this.unlock, this), this.touchLocked = !0)
        }, unlock: function () {
            if (this.noAudio || !this.touchLocked || null !== this._unlockSource) return !0;
            if (this.usingAudioTag) this.touchLocked = !1, this._unlockSource = null; else if (this.usingWebAudio) {
                var a = this.context.createBuffer(1, 1, 22050);
                this._unlockSource = this.context.createBufferSource(), this._unlockSource.buffer = a, this._unlockSource.connect(this.context.destination), void 0 === this._unlockSource.start ? this._unlockSource.noteOn(0) : this._unlockSource.start(0)
            }
            return !0
        }, stopAll: function () {
            if (!this.noAudio) for (var a = 0; a < this._sounds.length; a++) this._sounds[a] && this._sounds[a].stop()
        }, pauseAll: function () {
            if (!this.noAudio) for (var a = 0; a < this._sounds.length; a++) this._sounds[a] && this._sounds[a].pause()
        }, resumeAll: function () {
            if (!this.noAudio) for (var a = 0; a < this._sounds.length; a++) this._sounds[a] && this._sounds[a].resume()
        }, decode: function (a, b) {
            b = b || null;
            var c = this.game.cache.getSoundData(a);
            if (c && this.game.cache.isSoundDecoded(a) === !1) {
                this.game.cache.updateSound(a, "isDecoding", !0);
                var d = this;
                try {
                    this.context.decodeAudioData(c, function (c) {
                        c && (d.game.cache.decodedSound(a, c), d.onSoundDecode.dispatch(a, b))
                    })
                } catch (a) {
                }
            }
        }, setDecodedCallback: function (a, b, d) {
            "string" == typeof a && (a = [a]),
                this._watchList.reset();
            for (var e = 0; e < a.length; e++) a[e] instanceof c.Sound ? this.game.cache.isSoundDecoded(a[e].key) || this._watchList.add(a[e].key) : this.game.cache.isSoundDecoded(a[e]) || this._watchList.add(a[e]);
            0 === this._watchList.total ? (this._watching = !1, b.call(d)) : (this._watching = !0, this._watchCallback = b, this._watchContext = d)
        }, update: function () {
            if (!this.noAudio) {
                !this.touchLocked || null === this._unlockSource || this._unlockSource.playbackState !== this._unlockSource.PLAYING_STATE && this._unlockSource.playbackState !== this._unlockSource.FINISHED_STATE || (this.touchLocked = !1, this._unlockSource = null);
                for (var a = 0; a < this._sounds.length; a++) this._sounds[a].update();
                if (this._watching) {
                    for (var b = this._watchList.first; b;) this.game.cache.isSoundDecoded(b) && this._watchList.remove(b), b = this._watchList.next;
                    0 === this._watchList.total && (this._watching = !1, this._watchCallback.call(this._watchContext))
                }
            }
        }, add: function (a, b, d, e) {
            void 0 === b && (b = 1), void 0 === d && (d = !1), void 0 === e && (e = this.connectToMaster);
            var f = new c.Sound(this.game, a, b, d, e);
            return this._sounds.push(f), f
        }, addSprite: function (a) {
            var b = new c.AudioSprite(this.game, a);
            return b
        }, remove: function (a) {
            for (var b = this._sounds.length; b--;) if (this._sounds[b] === a) return this._sounds[b].destroy(!1), this._sounds.splice(b, 1), !0;
            return !1
        }, removeByKey: function (a) {
            for (var b = this._sounds.length, c = 0; b--;) this._sounds[b].key === a && (this._sounds[b].destroy(!1), this._sounds.splice(b, 1), c++);
            return c
        }, play: function (a, b, c) {
            if (!this.noAudio) {
                var d = this.add(a, b, c);
                return d.play(), d
            }
        }, setMute: function () {
            if (!this._muted) {
                this._muted = !0, this.usingWebAudio && (this._muteVolume = this.masterGain.gain.value, this.masterGain.gain.value = 0);
                for (var a = 0; a < this._sounds.length; a++) this._sounds[a].usingAudioTag && (this._sounds[a].mute = !0);
                this.onMute.dispatch()
            }
        }, unsetMute: function () {
            if (this._muted && !this._codeMuted) {
                this._muted = !1, this.usingWebAudio && (this.masterGain.gain.value = this._muteVolume);
                for (var a = 0; a < this._sounds.length; a++) this._sounds[a].usingAudioTag && (this._sounds[a].mute = !1);
                this.onUnMute.dispatch()
            }
        }, destroy: function () {
            this.stopAll();
            for (var a = 0; a < this._sounds.length; a++) this._sounds[a] && this._sounds[a].destroy();
            this._sounds = [], this.onSoundDecode.dispose(), this.context && (window.PhaserGlobal ? window.PhaserGlobal.audioContext = this.context : this.context.close && this.context.close())
        }
    },c.SoundManager.prototype.constructor = c.SoundManager,Object.defineProperty(c.SoundManager.prototype, "mute", {
        get: function () {
            return this._muted
        }, set: function (a) {
            if (a = a || !1) {
                if (this._muted) return;
                this._codeMuted = !0, this.setMute()
            } else {
                if (!this._muted) return;
                this._codeMuted = !1, this.unsetMute()
            }
        }
    }),Object.defineProperty(c.SoundManager.prototype, "volume", {
        get: function () {
            return this._volume
        }, set: function (a) {
            if (a < 0 ? a = 0 : a > 1 && (a = 1), this._volume !== a) {
                if (this._volume = a, this.usingWebAudio) this.masterGain.gain.value = a; else for (var b = 0; b < this._sounds.length; b++) this._sounds[b].usingAudioTag && this._sounds[b].updateGlobalVolume(a);
                this.onVolumeChange.dispatch(a)
            }
        }
    }),c.ScaleManager = function (a, b, d) {
        this.game = a, this.dom = c.DOM, this.grid = null, this.width = 0, this.height = 0, this.minWidth = null, this.maxWidth = null, this.minHeight = null, this.maxHeight = null, this.offset = new c.Point, this.forceLandscape = !1, this.forcePortrait = !1, this.incorrectOrientation = !1, this._pageAlignHorizontally = !1, this._pageAlignVertically = !1, this.onOrientationChange = new c.Signal, this.enterIncorrectOrientation = new c.Signal, this.leaveIncorrectOrientation = new c.Signal, this.hasPhaserSetFullScreen = !1, this.fullScreenTarget = null, this._createdFullScreenTarget = null, this.onFullScreenInit = new c.Signal, this.onFullScreenChange = new c.Signal, this.onFullScreenError = new c.Signal, this.screenOrientation = this.dom.getScreenOrientation(), this.scaleFactor = new c.Point(1, 1), this.scaleFactorInversed = new c.Point(1, 1), this.margin = {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            x: 0,
            y: 0
        }, this.bounds = new c.Rectangle, this.aspectRatio = 0, this.sourceAspectRatio = 0, this.event = null, this.windowConstraints = {
            right: "layout",
            bottom: ""
        }, this.compatibility = {
            supportsFullScreen: !1,
            orientationFallback: null,
            noMargins: !1,
            scrollTo: null,
            forceMinimumDocumentHeight: !1,
            canExpandParent: !0,
            clickTrampoline: ""
        }, this._scaleMode = c.ScaleManager.NO_SCALE, this._fullScreenScaleMode = c.ScaleManager.NO_SCALE, this.parentIsWindow = !1, this.parentNode = null, this.parentScaleFactor = new c.Point(1, 1), this.trackParentInterval = 2e3, this.onSizeChange = new c.Signal, this.onResize = null, this.onResizeContext = null, this._pendingScaleMode = null, this._fullScreenRestore = null, this._gameSize = new c.Rectangle, this._userScaleFactor = new c.Point(1, 1), this._userScaleTrim = new c.Point(0, 0), this._lastUpdate = 0, this._updateThrottle = 0, this._updateThrottleReset = 100, this._parentBounds = new c.Rectangle, this._tempBounds = new c.Rectangle, this._lastReportedCanvasSize = new c.Rectangle, this._lastReportedGameSize = new c.Rectangle, this._booted = !1, a.config && this.parseConfig(a.config), this.setupScale(b, d)
    },c.ScaleManager.EXACT_FIT = 0,c.ScaleManager.NO_SCALE = 1,c.ScaleManager.SHOW_ALL = 2,c.ScaleManager.RESIZE = 3,c.ScaleManager.USER_SCALE = 4,c.ScaleManager.prototype = {
        boot: function () {
            var a = this.compatibility;
            a.supportsFullScreen = this.game.device.fullscreen && !this.game.device.cocoonJS, this.game.device.iPad || this.game.device.webApp || this.game.device.desktop || (this.game.device.android && !this.game.device.chrome ? a.scrollTo = new c.Point(0, 1) : a.scrollTo = new c.Point(0, 0)), this.game.device.desktop ? (a.orientationFallback = "screen", a.clickTrampoline = "when-not-mouse") : (a.orientationFallback = "", a.clickTrampoline = "");
            var b = this;
            this._orientationChange = function (a) {
                return b.orientationChange(a)
            }, this._windowResize = function (a) {
                return b.windowResize(a)
            }, window.addEventListener("orientationchange", this._orientationChange, !1), window.addEventListener("resize", this._windowResize, !1), this.compatibility.supportsFullScreen && (this._fullScreenChange = function (a) {
                return b.fullScreenChange(a)
            }, this._fullScreenError = function (a) {
                return b.fullScreenError(a)
            }, document.addEventListener("webkitfullscreenchange", this._fullScreenChange, !1), document.addEventListener("mozfullscreenchange", this._fullScreenChange, !1), document.addEventListener("MSFullscreenChange", this._fullScreenChange, !1), document.addEventListener("fullscreenchange", this._fullScreenChange, !1), document.addEventListener("webkitfullscreenerror", this._fullScreenError, !1), document.addEventListener("mozfullscreenerror", this._fullScreenError, !1), document.addEventListener("MSFullscreenError", this._fullScreenError, !1), document.addEventListener("fullscreenerror", this._fullScreenError, !1)), this.game.onResume.add(this._gameResumed, this), this.dom.getOffset(this.game.canvas, this.offset), this.bounds.setTo(this.offset.x, this.offset.y, this.width, this.height), this.setGameSize(this.game.width, this.game.height), this.screenOrientation = this.dom.getScreenOrientation(this.compatibility.orientationFallback), c.FlexGrid && (this.grid = new c.FlexGrid(this, this.width, this.height)), this._booted = !0, null !== this._pendingScaleMode && (this.scaleMode = this._pendingScaleMode, this._pendingScaleMode = null)
        }, parseConfig: function (a) {
            void 0 !== a.scaleMode && (this._booted ? this.scaleMode = a.scaleMode : this._pendingScaleMode = a.scaleMode), void 0 !== a.fullScreenScaleMode && (this.fullScreenScaleMode = a.fullScreenScaleMode), a.fullScreenTarget && (this.fullScreenTarget = a.fullScreenTarget)
        }, setupScale: function (a, b) {
            var d, e = new c.Rectangle;
            "" !== this.game.parent && ("string" == typeof this.game.parent ? d = document.getElementById(this.game.parent) : this.game.parent && 1 === this.game.parent.nodeType && (d = this.game.parent)), d ? (this.parentNode = d, this.parentIsWindow = !1, this.getParentBounds(this._parentBounds), e.width = this._parentBounds.width, e.height = this._parentBounds.height, this.offset.set(this._parentBounds.x, this._parentBounds.y)) : (this.parentNode = null, this.parentIsWindow = !0, e.width = this.dom.visualBounds.width, e.height = this.dom.visualBounds.height, this.offset.set(0, 0));
            var f = 0, g = 0;
            "number" == typeof a ? f = a : (this.parentScaleFactor.x = parseInt(a, 10) / 100, f = e.width * this.parentScaleFactor.x), "number" == typeof b ? g = b : (this.parentScaleFactor.y = parseInt(b, 10) / 100, g = e.height * this.parentScaleFactor.y), f = Math.floor(f), g = Math.floor(g), this._gameSize.setTo(0, 0, f, g), this.updateDimensions(f, g, !1)
        }, _gameResumed: function () {
            this.queueUpdate(!0)
        }, setGameSize: function (a, b) {
            this._gameSize.setTo(0, 0, a, b), this.currentScaleMode !== c.ScaleManager.RESIZE && this.updateDimensions(a, b, !0), this.queueUpdate(!0)
        }, setUserScale: function (a, b, c, d) {
            this._userScaleFactor.setTo(a, b), this._userScaleTrim.setTo(0 | c, 0 | d), this.queueUpdate(!0)
        }, setResizeCallback: function (a, b) {
            this.onResize = a, this.onResizeContext = b
        }, signalSizeChange: function () {
            if (!c.Rectangle.sameDimensions(this, this._lastReportedCanvasSize) || !c.Rectangle.sameDimensions(this.game, this._lastReportedGameSize)) {
                var a = this.width, b = this.height;
                this._lastReportedCanvasSize.setTo(0, 0, a, b), this._lastReportedGameSize.setTo(0, 0, this.game.width, this.game.height), this.grid && this.grid.onResize(a, b), this.onSizeChange.dispatch(this, a, b), this.currentScaleMode === c.ScaleManager.RESIZE && (this.game.state.resize(a, b), this.game.load.resize(a, b))
            }
        }, setMinMax: function (a, b, c, d) {
            this.minWidth = a, this.minHeight = b, "undefined" != typeof c && (this.maxWidth = c), "undefined" != typeof d && (this.maxHeight = d)
        }, preUpdate: function () {
            if (!(this.game.time.time < this._lastUpdate + this._updateThrottle)) {
                var a = this._updateThrottle;
                this._updateThrottleReset = a >= 400 ? 0 : 100, this.dom.getOffset(this.game.canvas, this.offset);
                var b = this._parentBounds.width, d = this._parentBounds.height,
                    e = this.getParentBounds(this._parentBounds), f = e.width !== b || e.height !== d,
                    g = this.updateOrientationState();
                (f || g) && (this.onResize && this.onResize.call(this.onResizeContext, this, e), this.updateLayout(), this.signalSizeChange());
                var h = 2 * this._updateThrottle;
                this._updateThrottle < a && (h = Math.min(a, this._updateThrottleReset)), this._updateThrottle = c.Math.clamp(h, 25, this.trackParentInterval), this._lastUpdate = this.game.time.time
            }
        }, pauseUpdate: function () {
            this.preUpdate(), this._updateThrottle = this.trackParentInterval
        }, updateDimensions: function (a, b, c) {
            this.width = a * this.parentScaleFactor.x, this.height = b * this.parentScaleFactor.y, this.game.width = this.width, this.game.height = this.height, this.sourceAspectRatio = this.width / this.height, this.updateScalingAndBounds(), c && (this.game.renderer.resize(this.width, this.height), this.game.camera.setSize(this.width, this.height), this.game.world.resize(this.width, this.height))
        }, updateScalingAndBounds: function () {
            this.scaleFactor.x = this.game.width / this.width, this.scaleFactor.y = this.game.height / this.height, this.scaleFactorInversed.x = this.width / this.game.width, this.scaleFactorInversed.y = this.height / this.game.height, this.aspectRatio = this.width / this.height, this.game.canvas && this.dom.getOffset(this.game.canvas, this.offset), this.bounds.setTo(this.offset.x, this.offset.y, this.width, this.height), this.game.input && this.game.input.scale && this.game.input.scale.setTo(this.scaleFactor.x, this.scaleFactor.y)
        }, forceOrientation: function (a, b) {
            void 0 === b && (b = !1), this.forceLandscape = a, this.forcePortrait = b, this.queueUpdate(!0)
        }, classifyOrientation: function (a) {
            return "portrait-primary" === a || "portrait-secondary" === a ? "portrait" : "landscape-primary" === a || "landscape-secondary" === a ? "landscape" : null
        }, updateOrientationState: function () {
            var a = this.screenOrientation, b = this.incorrectOrientation;
            this.screenOrientation = this.dom.getScreenOrientation(this.compatibility.orientationFallback), this.incorrectOrientation = this.forceLandscape && !this.isLandscape || this.forcePortrait && !this.isPortrait;
            var c = a !== this.screenOrientation, d = b !== this.incorrectOrientation;
            return d && (this.incorrectOrientation ? this.enterIncorrectOrientation.dispatch() : this.leaveIncorrectOrientation.dispatch()), (c || d) && this.onOrientationChange.dispatch(this, a, b), c || d
        }, orientationChange: function (a) {
            this.event = a, this.queueUpdate(!0)
        }, windowResize: function (a) {
            this.event = a, this.queueUpdate(!0)
        }, scrollTop: function () {
            var a = this.compatibility.scrollTo;
            a && window.scrollTo(a.x, a.y)
        }, refresh: function () {
            this.scrollTop(), this.queueUpdate(!0)
        }, updateLayout: function () {
            var a = this.currentScaleMode;
            if (a === c.ScaleManager.RESIZE) return void this.reflowGame();
            if (this.scrollTop(), this.compatibility.forceMinimumDocumentHeight && (document.documentElement.style.minHeight = window.innerHeight + "px"), this.incorrectOrientation ? this.setMaximum() : a === c.ScaleManager.EXACT_FIT ? this.setExactFit() : a === c.ScaleManager.SHOW_ALL ? !this.isFullScreen && this.boundingParent && this.compatibility.canExpandParent ? (this.setShowAll(!0), this.resetCanvas(), this.setShowAll()) : this.setShowAll() : a === c.ScaleManager.NO_SCALE ? (this.width = this.game.width, this.height = this.game.height) : a === c.ScaleManager.USER_SCALE && (this.width = this.game.width * this._userScaleFactor.x - this._userScaleTrim.x, this.height = this.game.height * this._userScaleFactor.y - this._userScaleTrim.y), !this.compatibility.canExpandParent && (a === c.ScaleManager.SHOW_ALL || a === c.ScaleManager.USER_SCALE)) {
                var b = this.getParentBounds(this._tempBounds);
                this.width = Math.min(this.width, b.width), this.height = Math.min(this.height, b.height)
            }
            this.width = 0 | this.width, this.height = 0 | this.height, this.reflowCanvas()
        }, getParentBounds: function (a) {
            var b = a || new c.Rectangle, d = this.boundingParent, e = this.dom.visualBounds, f = this.dom.layoutBounds;
            if (d) {
                var g = d.getBoundingClientRect(),
                    h = d.offsetParent ? d.offsetParent.getBoundingClientRect() : d.getBoundingClientRect();
                b.setTo(g.left - h.left, g.top - h.top, g.width, g.height);
                var i = this.windowConstraints;
                if (i.right) {
                    var j = "layout" === i.right ? f : e;
                    b.right = Math.min(b.right, j.width)
                }
                if (i.bottom) {
                    var j = "layout" === i.bottom ? f : e;
                    b.bottom = Math.min(b.bottom, j.height)
                }
            } else b.setTo(0, 0, e.width, e.height);
            return b.setTo(Math.round(b.x), Math.round(b.y), Math.round(b.width), Math.round(b.height)), b
        }, alignCanvas: function (a, b) {
            var c = this.getParentBounds(this._tempBounds), d = this.game.canvas, e = this.margin;
            if (a) {
                e.left = e.right = 0;
                var f = d.getBoundingClientRect();
                if (this.width < c.width && !this.incorrectOrientation) {
                    var g = f.left - c.x, h = c.width / 2 - this.width / 2;
                    h = Math.max(h, 0);
                    var i = h - g;
                    e.left = Math.round(i)
                }
                d.style.marginLeft = e.left + "px", 0 !== e.left && (e.right = -(c.width - f.width - e.left), d.style.marginRight = e.right + "px")
            }
            if (b) {
                e.top = e.bottom = 0;
                var f = d.getBoundingClientRect();
                if (this.height < c.height && !this.incorrectOrientation) {
                    var g = f.top - c.y, h = c.height / 2 - this.height / 2;
                    h = Math.max(h, 0);
                    var i = h - g;
                    e.top = Math.round(i)
                }
                d.style.marginTop = e.top + "px", 0 !== e.top && (e.bottom = -(c.height - f.height - e.top), d.style.marginBottom = e.bottom + "px")
            }
            e.x = e.left, e.y = e.top
        }, reflowGame: function () {
            this.resetCanvas("", "");
            var a = this.getParentBounds(this._tempBounds);
            this.updateDimensions(a.width, a.height, !0)
        }, reflowCanvas: function () {
            this.incorrectOrientation || (this.width = c.Math.clamp(this.width, this.minWidth || 0, this.maxWidth || this.width), this.height = c.Math.clamp(this.height, this.minHeight || 0, this.maxHeight || this.height)), this.resetCanvas(), this.compatibility.noMargins || (this.isFullScreen && this._createdFullScreenTarget ? this.alignCanvas(!0, !0) : this.alignCanvas(this.pageAlignHorizontally, this.pageAlignVertically)), this.updateScalingAndBounds()
        }, resetCanvas: function (a, b) {
            void 0 === a && (a = this.width + "px"), void 0 === b && (b = this.height + "px");
            var c = this.game.canvas;
            this.compatibility.noMargins || (c.style.marginLeft = "", c.style.marginTop = "", c.style.marginRight = "", c.style.marginBottom = ""), c.style.width = a, c.style.height = b
        }, queueUpdate: function (a) {
            a && (this._parentBounds.width = 0, this._parentBounds.height = 0), this._updateThrottle = this._updateThrottleReset
        }, reset: function (a) {
            a && this.grid && this.grid.reset()
        }, setMaximum: function () {
            this.width = this.dom.visualBounds.width, this.height = this.dom.visualBounds.height
        }, setShowAll: function (a) {
            var b, c = this.getParentBounds(this._tempBounds), d = c.width, e = c.height;
            b = a ? Math.max(e / this.game.height, d / this.game.width) : Math.min(e / this.game.height, d / this.game.width), this.width = Math.round(this.game.width * b), this.height = Math.round(this.game.height * b)
        }, setExactFit: function () {
            var a = this.getParentBounds(this._tempBounds);
            this.width = a.width, this.height = a.height, this.isFullScreen || (this.maxWidth && (this.width = Math.min(this.width, this.maxWidth)), this.maxHeight && (this.height = Math.min(this.height, this.maxHeight)))
        }, createFullScreenTarget: function () {
            var a = document.createElement("div");
            return a.style.margin = "0", a.style.padding = "0", a.style.background = "#000", a
        }, startFullScreen: function (a, b) {
            if (this.isFullScreen) return !1;
            if (!this.compatibility.supportsFullScreen) {
                var d = this;
                return void setTimeout(function () {
                    d.fullScreenError()
                }, 10)
            }
            if ("when-not-mouse" === this.compatibility.clickTrampoline) {
                var e = this.game.input;
                if (e.activePointer && e.activePointer !== e.mousePointer && (b || b !== !1)) return void e.activePointer.addClickTrampoline("startFullScreen", this.startFullScreen, this, [a, !1])
            }
            void 0 !== a && this.game.renderType === c.CANVAS && (this.game.stage.smoothed = a);
            var f = this.fullScreenTarget;
            f || (this.cleanupCreatedTarget(), this._createdFullScreenTarget = this.createFullScreenTarget(), f = this._createdFullScreenTarget);
            var g = {targetElement: f};
            if (this.hasPhaserSetFullScreen = !0, this.onFullScreenInit.dispatch(this, g), this._createdFullScreenTarget) {
                var h = this.game.canvas, i = h.parentNode;
                i.insertBefore(f, h), f.appendChild(h)
            }
            return this.game.device.fullscreenKeyboard ? f[this.game.device.requestFullscreen](Element.ALLOW_KEYBOARD_INPUT) : f[this.game.device.requestFullscreen](), !0
        }, stopFullScreen: function () {
            return !(!this.isFullScreen || !this.compatibility.supportsFullScreen) && (this.hasPhaserSetFullScreen = !1, document[this.game.device.cancelFullscreen](), !0)
        }, cleanupCreatedTarget: function () {
            var a = this._createdFullScreenTarget;
            if (a && a.parentNode) {
                var b = a.parentNode;
                b.insertBefore(this.game.canvas, a), b.removeChild(a)
            }
            this._createdFullScreenTarget = null
        }, prepScreenMode: function (a) {
            var b = !!this._createdFullScreenTarget, d = this._createdFullScreenTarget || this.fullScreenTarget;
            a ? (b || this.fullScreenScaleMode === c.ScaleManager.EXACT_FIT) && d !== this.game.canvas && (this._fullScreenRestore = {
                targetWidth: d.style.width,
                targetHeight: d.style.height
            }, d.style.width = "100%", d.style.height = "100%") : (this._fullScreenRestore && (d.style.width = this._fullScreenRestore.targetWidth, d.style.height = this._fullScreenRestore.targetHeight, this._fullScreenRestore = null), this.updateDimensions(this._gameSize.width, this._gameSize.height, !0), this.resetCanvas())
        }, fullScreenChange: function (a) {
            this.event = a, this.isFullScreen ? (this.prepScreenMode(!0), this.updateLayout(), this.queueUpdate(!0)) : (this.prepScreenMode(!1), this.cleanupCreatedTarget(), this.updateLayout(), this.queueUpdate(!0)), this.onFullScreenChange.dispatch(this, this.width, this.height)
        }, fullScreenError: function (a) {
            this.event = a, this.cleanupCreatedTarget(), console.warn("Phaser.ScaleManager: requestFullscreen failed or device does not support the Fullscreen API"), this.onFullScreenError.dispatch(this)
        }, scaleSprite: function (a, b, c, d) {
            if (void 0 === b && (b = this.width), void 0 === c && (c = this.height), void 0 === d && (d = !1), !a || !a.scale) return a;
            if (a.scale.x = 1, a.scale.y = 1, a.width <= 0 || a.height <= 0 || b <= 0 || c <= 0) return a;
            var e = b, f = a.height * b / a.width, g = a.width * c / a.height, h = c, i = g > b;
            return i = i ? d : !d, i ? (a.width = Math.floor(e), a.height = Math.floor(f)) : (a.width = Math.floor(g), a.height = Math.floor(h)), a
        }, destroy: function () {
            this.game.onResume.remove(this._gameResumed, this), window.removeEventListener("orientationchange", this._orientationChange, !1), window.removeEventListener("resize", this._windowResize, !1), this.compatibility.supportsFullScreen && (document.removeEventListener("webkitfullscreenchange", this._fullScreenChange, !1), document.removeEventListener("mozfullscreenchange", this._fullScreenChange, !1), document.removeEventListener("MSFullscreenChange", this._fullScreenChange, !1), document.removeEventListener("fullscreenchange", this._fullScreenChange, !1), document.removeEventListener("webkitfullscreenerror", this._fullScreenError, !1), document.removeEventListener("mozfullscreenerror", this._fullScreenError, !1), document.removeEventListener("MSFullscreenError", this._fullScreenError, !1), document.removeEventListener("fullscreenerror", this._fullScreenError, !1))
        }
    },c.ScaleManager.prototype.constructor = c.ScaleManager,Object.defineProperty(c.ScaleManager.prototype, "boundingParent", {
        get: function () {
            if (this.parentIsWindow || this.isFullScreen && this.hasPhaserSetFullScreen && !this._createdFullScreenTarget) return null;
            var a = this.game.canvas && this.game.canvas.parentNode;
            return a || null
        }
    }),Object.defineProperty(c.ScaleManager.prototype, "scaleMode", {
        get: function () {
            return this._scaleMode
        }, set: function (a) {
            return a !== this._scaleMode && (this.isFullScreen || (this.updateDimensions(this._gameSize.width, this._gameSize.height, !0), this.queueUpdate(!0)), this._scaleMode = a), this._scaleMode
        }
    }),Object.defineProperty(c.ScaleManager.prototype, "fullScreenScaleMode", {
        get: function () {
            return this._fullScreenScaleMode
        }, set: function (a) {
            return a !== this._fullScreenScaleMode && (this.isFullScreen ? (this.prepScreenMode(!1), this._fullScreenScaleMode = a, this.prepScreenMode(!0), this.queueUpdate(!0)) : this._fullScreenScaleMode = a), this._fullScreenScaleMode
        }
    }),Object.defineProperty(c.ScaleManager.prototype, "currentScaleMode", {
        get: function () {
            return this.isFullScreen ? this._fullScreenScaleMode : this._scaleMode
        }
    }),Object.defineProperty(c.ScaleManager.prototype, "pageAlignHorizontally", {
        get: function () {
            return this._pageAlignHorizontally
        }, set: function (a) {
            a !== this._pageAlignHorizontally && (this._pageAlignHorizontally = a, this.queueUpdate(!0))
        }
    }),Object.defineProperty(c.ScaleManager.prototype, "pageAlignVertically", {
        get: function () {
            return this._pageAlignVertically
        }, set: function (a) {
            a !== this._pageAlignVertically && (this._pageAlignVertically = a, this.queueUpdate(!0))
        }
    }),Object.defineProperty(c.ScaleManager.prototype, "isFullScreen", {
        get: function () {
            return !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement)
        }
    }),Object.defineProperty(c.ScaleManager.prototype, "isPortrait", {
        get: function () {
            return "portrait" === this.classifyOrientation(this.screenOrientation)
        }
    }),Object.defineProperty(c.ScaleManager.prototype, "isLandscape", {
        get: function () {
            return "landscape" === this.classifyOrientation(this.screenOrientation)
        }
    }),Object.defineProperty(c.ScaleManager.prototype, "isGamePortrait", {
        get: function () {
            return this.height > this.width
        }
    }),Object.defineProperty(c.ScaleManager.prototype, "isGameLandscape", {
        get: function () {
            return this.width > this.height
        }
    }),c.Utils.Debug = function (a) {
        this.game = a, this.sprite = null, this.bmd = null, this.canvas = null, this.context = null, this.font = "14px Courier", this.columnWidth = 100, this.lineHeight = 16, this.renderShadow = !0, this.currentX = 0, this.currentY = 0, this.currentAlpha = 1, this.dirty = !1
    },c.Utils.Debug.prototype = {
        boot: function () {
            this.game.renderType === c.CANVAS ? this.context = this.game.context : (this.bmd = new c.BitmapData(this.game, "__DEBUG", this.game.width, this.game.height, (!0)), this.sprite = this.game.make.image(0, 0, this.bmd), this.game.stage.addChild(this.sprite), this.game.scale.onSizeChange.add(this.resize, this), this.canvas = PIXI.CanvasPool.create(this, this.game.width, this.game.height), this.context = this.canvas.getContext("2d"))
        }, resize: function (a, b, c) {
            this.bmd.resize(b, c), this.canvas.width = b, this.canvas.height = c
        }, preUpdate: function () {
            this.dirty && this.sprite && (this.bmd.clear(), this.bmd.draw(this.canvas, 0, 0), this.context.clearRect(0, 0, this.game.width, this.game.height), this.dirty = !1)
        }, reset: function () {
            this.context && this.context.clearRect(0, 0, this.game.width, this.game.height), this.sprite && this.bmd.clear()
        }, start: function (a, b, c, d) {
            "number" != typeof a && (a = 0), "number" != typeof b && (b = 0), c = c || "rgb(255,255,255)", void 0 === d && (d = 0), this.currentX = a, this.currentY = b, this.currentColor = c, this.columnWidth = d, this.dirty = !0, this.context.save(), this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.strokeStyle = c, this.context.fillStyle = c, this.context.font = this.font, this.context.globalAlpha = this.currentAlpha
        }, stop: function () {
            this.context.restore()
        }, line: function () {
            for (var a = this.currentX, b = 0; b < arguments.length; b++) this.renderShadow && (this.context.fillStyle = "rgb(0,0,0)", this.context.fillText(arguments[b], a + 1, this.currentY + 1), this.context.fillStyle = this.currentColor), this.context.fillText(arguments[b], a, this.currentY), a += this.columnWidth;
            this.currentY += this.lineHeight
        }, soundInfo: function (a, b, c, d) {
            this.start(b, c, d), this.line("Sound: " + a.key + " Locked: " + a.game.sound.touchLocked), this.line("Is Ready?: " + this.game.cache.isSoundReady(a.key) + " Pending Playback: " + a.pendingPlayback), this.line("Decoded: " + a.isDecoded + " Decoding: " + a.isDecoding), this.line("Total Duration: " + a.totalDuration + " Playing: " + a.isPlaying), this.line("Time: " + a.currentTime), this.line("Volume: " + a.volume + " Muted: " + a.mute), this.line("WebAudio: " + a.usingWebAudio + " Audio: " + a.usingAudioTag), "" !== a.currentMarker && (this.line("Marker: " + a.currentMarker + " Duration: " + a.duration + " (ms: " + a.durationMS + ")"), this.line("Start: " + a.markers[a.currentMarker].start + " Stop: " + a.markers[a.currentMarker].stop), this.line("Position: " + a.position)), this.stop()
        }, cameraInfo: function (a, b, c, d) {
            this.start(b, c, d), this.line("Camera (" + a.width + " x " + a.height + ")"), this.line("X: " + a.x + " Y: " + a.y), a.bounds && this.line("Bounds x: " + a.bounds.x + " Y: " + a.bounds.y + " w: " + a.bounds.width + " h: " + a.bounds.height), this.line("View x: " + a.view.x + " Y: " + a.view.y + " w: " + a.view.width + " h: " + a.view.height), this.line("Total in view: " + a.totalInView), this.stop()
        }, timer: function (a, b, c, d) {
            this.start(b, c, d), this.line("Timer (running: " + a.running + " expired: " + a.expired + ")"), this.line("Next Tick: " + a.next + " Duration: " + a.duration), this.line("Paused: " + a.paused + " Length: " + a.length), this.stop()
        }, pointer: function (a, b, c, d, e) {
            null != a && (void 0 === b && (b = !1), c = c || "rgba(0,255,0,0.5)", d = d || "rgba(255,0,0,0.5)", b === !0 && a.isUp === !0 || (this.start(a.x, a.y - 100, e), this.context.beginPath(), this.context.arc(a.x, a.y, a.circle.radius, 0, 2 * Math.PI), a.active ? this.context.fillStyle = c : this.context.fillStyle = d, this.context.fill(), this.context.closePath(), this.context.beginPath(), this.context.moveTo(a.positionDown.x, a.positionDown.y), this.context.lineTo(a.position.x, a.position.y), this.context.lineWidth = 2, this.context.stroke(), this.context.closePath(), this.line("ID: " + a.id + " Active: " + a.active), this.line("World X: " + a.worldX + " World Y: " + a.worldY), this.line("Screen X: " + a.x + " Screen Y: " + a.y + " In: " + a.withinGame), this.line("Duration: " + a.duration + " ms"), this.line("is Down: " + a.isDown + " is Up: " + a.isUp), this.stop()))
        }, spriteInputInfo: function (a, b, c, d) {
            this.start(b, c, d), this.line("Sprite Input: (" + a.width + " x " + a.height + ")"), this.line("x: " + a.input.pointerX().toFixed(1) + " y: " + a.input.pointerY().toFixed(1)), this.line("over: " + a.input.pointerOver() + " duration: " + a.input.overDuration().toFixed(0)), this.line("down: " + a.input.pointerDown() + " duration: " + a.input.downDuration().toFixed(0)), this.line("just over: " + a.input.justOver() + " just out: " + a.input.justOut()), this.stop()
        }, key: function (a, b, c, d) {
            this.start(b, c, d, 150), this.line("Key:", a.keyCode, "isDown:", a.isDown), this.line("justDown:", a.justDown, "justUp:", a.justUp), this.line("Time Down:", a.timeDown.toFixed(0), "duration:", a.duration.toFixed(0)), this.stop()
        }, inputInfo: function (a, b, c) {
            this.start(a, b, c), this.line("Input"), this.line("X: " + this.game.input.x + " Y: " + this.game.input.y), this.line("World X: " + this.game.input.worldX + " World Y: " + this.game.input.worldY), this.line("Scale X: " + this.game.input.scale.x.toFixed(1) + " Scale Y: " + this.game.input.scale.x.toFixed(1)), this.line("Screen X: " + this.game.input.activePointer.screenX + " Screen Y: " + this.game.input.activePointer.screenY), this.stop()
        }, spriteBounds: function (a, b, c) {
            var d = a.getBounds();
            d.x += this.game.camera.x, d.y += this.game.camera.y, this.rectangle(d, b, c)
        }, ropeSegments: function (a, b, c) {
            var d = a.segments, e = this;
            d.forEach(function (a) {
                e.rectangle(a, b, c)
            }, this)
        }, spriteInfo: function (a, b, c, d) {
            this.start(b, c, d), this.line("Sprite:  (" + a.width + " x " + a.height + ") anchor: " + a.anchor.x + " x " + a.anchor.y), this.line("x: " + a.x.toFixed(1) + " y: " + a.y.toFixed(1)), this.line("angle: " + a.angle.toFixed(1) + " rotation: " + a.rotation.toFixed(1)), this.line("visible: " + a.visible + " in camera: " + a.inCamera), this.line("bounds x: " + a._bounds.x.toFixed(1) + " y: " + a._bounds.y.toFixed(1) + " w: " + a._bounds.width.toFixed(1) + " h: " + a._bounds.height.toFixed(1)), this.stop()
        }, spriteCoords: function (a, b, c, d) {
            this.start(b, c, d, 100), a.name && this.line(a.name), this.line("x:", a.x.toFixed(2), "y:", a.y.toFixed(2)), this.line("pos x:", a.position.x.toFixed(2), "pos y:", a.position.y.toFixed(2)), this.line("world x:", a.world.x.toFixed(2), "world y:", a.world.y.toFixed(2)), this.stop()
        }, lineInfo: function (a, b, c, d) {
            this.start(b, c, d, 80), this.line("start.x:", a.start.x.toFixed(2), "start.y:", a.start.y.toFixed(2)), this.line("end.x:", a.end.x.toFixed(2), "end.y:", a.end.y.toFixed(2)), this.line("length:", a.length.toFixed(2), "angle:", a.angle), this.stop()
        }, pixel: function (a, b, c, d) {
            d = d || 2, this.start(), this.context.fillStyle = c, this.context.fillRect(a, b, d, d), this.stop()
        }, geom: function (a, b, d, e) {
            void 0 === d && (d = !0), void 0 === e && (e = 0), b = b || "rgba(0,255,0,0.4)", this.start(), this.context.fillStyle = b, this.context.strokeStyle = b, a instanceof c.Rectangle || 1 === e ? d ? this.context.fillRect(a.x - this.game.camera.x, a.y - this.game.camera.y, a.width, a.height) : this.context.strokeRect(a.x - this.game.camera.x, a.y - this.game.camera.y, a.width, a.height) : a instanceof c.Circle || 2 === e ? (this.context.beginPath(), this.context.arc(a.x - this.game.camera.x, a.y - this.game.camera.y, a.radius, 0, 2 * Math.PI, !1), this.context.closePath(), d ? this.context.fill() : this.context.stroke()) : a instanceof c.Point || 3 === e ? this.context.fillRect(a.x - this.game.camera.x, a.y - this.game.camera.y, 4, 4) : (a instanceof c.Line || 4 === e) && (this.context.lineWidth = 1, this.context.beginPath(), this.context.moveTo(a.start.x + .5 - this.game.camera.x, a.start.y + .5 - this.game.camera.y), this.context.lineTo(a.end.x + .5 - this.game.camera.x, a.end.y + .5 - this.game.camera.y), this.context.closePath(), this.context.stroke()), this.stop()
        }, rectangle: function (a, b, c) {
            void 0 === c && (c = !0), b = b || "rgba(0, 255, 0, 0.4)", this.start(), c ? (this.context.fillStyle = b, this.context.fillRect(a.x - this.game.camera.x, a.y - this.game.camera.y, a.width, a.height)) : (this.context.strokeStyle = b, this.context.strokeRect(a.x - this.game.camera.x, a.y - this.game.camera.y, a.width, a.height)), this.stop()
        }, text: function (a, b, c, d, e) {
            d = d || "rgb(255,255,255)", e = e || "16px Courier", this.start(), this.context.font = e, this.renderShadow && (this.context.fillStyle = "rgb(0,0,0)", this.context.fillText(a, b + 1, c + 1)), this.context.fillStyle = d, this.context.fillText(a, b, c), this.stop()
        }, quadTree: function (a, b) {
            b = b || "rgba(255,0,0,0.3)", this.start();
            var c = a.bounds;
            if (0 === a.nodes.length) {
                this.context.strokeStyle = b, this.context.strokeRect(c.x, c.y, c.width, c.height), this.text("size: " + a.objects.length, c.x + 4, c.y + 16, "rgb(0,200,0)", "12px Courier"), this.context.strokeStyle = "rgb(0,255,0)";
                for (var d = 0; d < a.objects.length; d++) this.context.strokeRect(a.objects[d].x, a.objects[d].y, a.objects[d].width, a.objects[d].height)
            } else for (var d = 0; d < a.nodes.length; d++) this.quadTree(a.nodes[d]);
            this.stop()
        }, body: function (a, b, d) {
            a.body && (this.start(), a.body.type === c.Physics.ARCADE ? c.Physics.Arcade.Body.render(this.context, a.body, b, d) : a.body.type === c.Physics.NINJA ? c.Physics.Ninja.Body.render(this.context, a.body, b, d) : a.body.type === c.Physics.BOX2D && c.Physics.Box2D.renderBody(this.context, a.body, b), this.stop())
        }, bodyInfo: function (a, b, d, e) {
            a.body && (this.start(b, d, e, 210), a.body.type === c.Physics.ARCADE ? c.Physics.Arcade.Body.renderBodyInfo(this, a.body) : a.body.type === c.Physics.BOX2D && this.game.physics.box2d.renderBodyInfo(this, a.body), this.stop())
        }, box2dWorld: function () {
            this.start(), this.context.translate(-this.game.camera.view.x, -this.game.camera.view.y, 0), this.game.physics.box2d.renderDebugDraw(this.context), this.stop()
        }, box2dBody: function (a, b) {
            this.start(), c.Physics.Box2D.renderBody(this.context, a, b), this.stop()
        }, displayList: function (a) {
            if (void 0 === a && (a = this.game.world), a.hasOwnProperty("renderOrderID") ? console.log("[" + a.renderOrderID + "]", a) : console.log("[]", a), a.children && a.children.length > 0) for (var b = 0; b < a.children.length; b++) this.game.debug.displayList(a.children[b])
        }, destroy: function () {
            PIXI.CanvasPool.remove(this)
        }
    },c.Utils.Debug.prototype.constructor = c.Utils.Debug,c.DOM = {
        getOffset: function (a, b) {
            b = b || new c.Point;
            var d = a.getBoundingClientRect(), e = c.DOM.scrollY, f = c.DOM.scrollX,
                g = document.documentElement.clientTop, h = document.documentElement.clientLeft;
            return b.x = d.left + f - h, b.y = d.top + e - g, b
        }, getBounds: function (a, b) {
            return void 0 === b && (b = 0), a = a && !a.nodeType ? a[0] : a, !(!a || 1 !== a.nodeType) && this.calibrate(a.getBoundingClientRect(), b)
        }, calibrate: function (a, b) {
            b = +b || 0;
            var c = {width: 0, height: 0, left: 0, right: 0, top: 0, bottom: 0};
            return c.width = (c.right = a.right + b) - (c.left = a.left - b), c.height = (c.bottom = a.bottom + b) - (c.top = a.top - b), c
        }, getAspectRatio: function (a) {
            a = null == a ? this.visualBounds : 1 === a.nodeType ? this.getBounds(a) : a;
            var b = a.width, c = a.height;
            return "function" == typeof b && (b = b.call(a)), "function" == typeof c && (c = c.call(a)), b / c
        }, inLayoutViewport: function (a, b) {
            var c = this.getBounds(a, b);
            return !!c && c.bottom >= 0 && c.right >= 0 && c.top <= this.layoutBounds.width && c.left <= this.layoutBounds.height
        }, getScreenOrientation: function (a) {
            var b = window.screen, c = b.orientation || b.mozOrientation || b.msOrientation;
            if (c && "string" == typeof c.type) return c.type;
            if ("string" == typeof c) return c;
            var d = "portrait-primary", e = "landscape-primary";
            if ("screen" === a) return b.height > b.width ? d : e;
            if ("viewport" === a) return this.visualBounds.height > this.visualBounds.width ? d : e;
            if ("window.orientation" === a && "number" == typeof window.orientation) return 0 === window.orientation || 180 === window.orientation ? d : e;
            if (window.matchMedia) {
                if (window.matchMedia("(orientation: portrait)").matches) return d;
                if (window.matchMedia("(orientation: landscape)").matches) return e
            }
            return this.visualBounds.height > this.visualBounds.width ? d : e
        }, visualBounds: new c.Rectangle, layoutBounds: new c.Rectangle, documentBounds: new c.Rectangle
    },c.Device.whenReady(function (a) {
        var b = window && "pageXOffset" in window ? function () {
            return window.pageXOffset
        } : function () {
            return document.documentElement.scrollLeft
        }, d = window && "pageYOffset" in window ? function () {
            return window.pageYOffset
        } : function () {
            return document.documentElement.scrollTop
        };
        Object.defineProperty(c.DOM, "scrollX", {get: b}), Object.defineProperty(c.DOM, "scrollY", {get: d}), Object.defineProperty(c.DOM.visualBounds, "x", {get: b}), Object.defineProperty(c.DOM.visualBounds, "y", {get: d}), Object.defineProperty(c.DOM.layoutBounds, "x", {value: 0}), Object.defineProperty(c.DOM.layoutBounds, "y", {value: 0});
        var e = a.desktop && document.documentElement.clientWidth <= window.innerWidth && document.documentElement.clientHeight <= window.innerHeight;
        if (e) {
            var f = function () {
                return Math.max(window.innerWidth, document.documentElement.clientWidth)
            }, g = function () {
                return Math.max(window.innerHeight, document.documentElement.clientHeight)
            };
            Object.defineProperty(c.DOM.visualBounds, "width", {get: f}), Object.defineProperty(c.DOM.visualBounds, "height", {get: g}), Object.defineProperty(c.DOM.layoutBounds, "width", {get: f}), Object.defineProperty(c.DOM.layoutBounds, "height", {get: g})
        } else Object.defineProperty(c.DOM.visualBounds, "width", {
            get: function () {
                return window.innerWidth
            }
        }), Object.defineProperty(c.DOM.visualBounds, "height", {
            get: function () {
                return window.innerHeight
            }
        }), Object.defineProperty(c.DOM.layoutBounds, "width", {
            get: function () {
                var a = document.documentElement.clientWidth, b = window.innerWidth;
                return a < b ? b : a
            }
        }), Object.defineProperty(c.DOM.layoutBounds, "height", {
            get: function () {
                var a = document.documentElement.clientHeight, b = window.innerHeight;
                return a < b ? b : a
            }
        });
        Object.defineProperty(c.DOM.documentBounds, "x", {value: 0}), Object.defineProperty(c.DOM.documentBounds, "y", {value: 0}), Object.defineProperty(c.DOM.documentBounds, "width", {
            get: function () {
                var a = document.documentElement;
                return Math.max(a.clientWidth, a.offsetWidth, a.scrollWidth)
            }
        }), Object.defineProperty(c.DOM.documentBounds, "height", {
            get: function () {
                var a = document.documentElement;
                return Math.max(a.clientHeight, a.offsetHeight, a.scrollHeight)
            }
        })
    }, null, !0),c.ArraySet = function (a) {
        this.position = 0, this.list = a || []
    },c.ArraySet.prototype = {
        add: function (a) {
            return this.exists(a) || this.list.push(a), a
        }, getIndex: function (a) {
            return this.list.indexOf(a)
        }, getByKey: function (a, b) {
            for (var c = this.list.length; c--;) if (this.list[c][a] === b) return this.list[c];
            return null
        }, exists: function (a) {
            return this.list.indexOf(a) > -1
        }, reset: function () {
            this.list.length = 0
        }, remove: function (a) {
            var b = this.list.indexOf(a);
            if (b > -1) return this.list.splice(b, 1), a
        }, setAll: function (a, b) {
            for (var c = this.list.length; c--;) this.list[c] && (this.list[c][a] = b)
        }, callAll: function (a) {
            for (var b = Array.prototype.slice.call(arguments, 1), c = this.list.length; c--;) this.list[c] && this.list[c][a] && this.list[c][a].apply(this.list[c], b)
        }, removeAll: function (a) {
            void 0 === a && (a = !1);
            for (var b = this.list.length; b--;) if (this.list[b]) {
                var c = this.remove(this.list[b]);
                a && c.destroy()
            }
            this.position = 0, this.list = []
        }
    },Object.defineProperty(c.ArraySet.prototype, "total", {
        get: function () {
            return this.list.length
        }
    }),Object.defineProperty(c.ArraySet.prototype, "first", {
        get: function () {
            return this.position = 0, this.list.length > 0 ? this.list[0] : null
        }
    }),Object.defineProperty(c.ArraySet.prototype, "next", {
        get: function () {
            return this.position < this.list.length ? (this.position++, this.list[this.position]) : null
        }
    }),c.ArraySet.prototype.constructor = c.ArraySet,c.ArrayUtils = {
        getRandomItem: function (a, b, c) {
            if (null === a) return null;
            void 0 === b && (b = 0), void 0 === c && (c = a.length);
            var d = b + Math.floor(Math.random() * c);
            return void 0 === a[d] ? null : a[d]
        }, removeRandomItem: function (a, b, c) {
            if (null == a) return null;
            void 0 === b && (b = 0), void 0 === c && (c = a.length);
            var d = b + Math.floor(Math.random() * c);
            if (d < a.length) {
                var e = a.splice(d, 1);
                return void 0 === e[0] ? null : e[0]
            }
            return null
        }, shuffle: function (a) {
            for (var b = a.length - 1; b > 0; b--) {
                var c = Math.floor(Math.random() * (b + 1)), d = a[b];
                a[b] = a[c], a[c] = d
            }
            return a
        }, transposeMatrix: function (a) {
            for (var b = a.length, c = a[0].length, d = new Array(c), e = 0; e < c; e++) {
                d[e] = new Array(b);
                for (var f = b - 1; f > -1; f--) d[e][f] = a[f][e]
            }
            return d
        }, rotateMatrix: function (a, b) {
            if ("string" != typeof b && (b = (b % 360 + 360) % 360), 90 === b || b === -270 || "rotateLeft" === b) a = c.ArrayUtils.transposeMatrix(a), a = a.reverse(); else if (b === -90 || 270 === b || "rotateRight" === b) a = a.reverse(), a = c.ArrayUtils.transposeMatrix(a); else if (180 === Math.abs(b) || "rotate180" === b) {
                for (var d = 0; d < a.length; d++) a[d].reverse();
                a = a.reverse()
            }
            return a
        }, findClosest: function (a, b) {
            if (!b.length) return NaN;
            if (1 === b.length || a < b[0]) return b[0];
            for (var c = 1; b[c] < a;) c++;
            var d = b[c - 1], e = c < b.length ? b[c] : Number.POSITIVE_INFINITY;
            return e - a <= a - d ? e : d
        }, rotateRight: function (a) {
            var b = a.pop();
            return a.unshift(b), b
        }, rotateLeft: function (a) {
            var b = a.shift();
            return a.push(b), b
        }, rotate: function (a) {
            var b = a.shift();
            return a.push(b), b
        }, numberArray: function (a, b) {
            for (var c = [], d = a; d <= b; d++) c.push(d);
            return c
        }, numberArrayStep: function (a, b, d) {
            void 0 !== a && null !== a || (a = 0), void 0 !== b && null !== b || (b = a, a = 0), void 0 === d && (d = 1);
            for (var e = [], f = Math.max(c.Math.roundAwayFromZero((b - a) / (d || 1)), 0), g = 0; g < f; g++) e.push(a), a += d;
            return e
        }
    },c.LinkedList = function () {
        this.next = null, this.prev = null, this.first = null, this.last = null, this.total = 0
    },c.LinkedList.prototype = {
        add: function (a) {
            return 0 === this.total && null === this.first && null === this.last ? (this.first = a, this.last = a, this.next = a, a.prev = this, this.total++, a) : (this.last.next = a, a.prev = this.last, this.last = a, this.total++, a)
        }, reset: function () {
            this.first = null, this.last = null, this.next = null, this.prev = null, this.total = 0
        }, remove: function (a) {
            return 1 === this.total ? (this.reset(), void (a.next = a.prev = null)) : (a === this.first ? this.first = this.first.next : a === this.last && (this.last = this.last.prev), a.prev && (a.prev.next = a.next), a.next && (a.next.prev = a.prev), a.next = a.prev = null, null === this.first && (this.last = null), void this.total--)
        }, callAll: function (a) {
            if (this.first && this.last) {
                var b = this.first;
                do b && b[a] && b[a].call(b), b = b.next; while (b !== this.last.next)
            }
        }
    },c.LinkedList.prototype.constructor = c.LinkedList,c.Create = function (a) {
        this.game = a, this.bmd = null, this.canvas = null, this.ctx = null, this.palettes = [{
            0: "#000",
            1: "#9D9D9D",
            2: "#FFF",
            3: "#BE2633",
            4: "#E06F8B",
            5: "#493C2B",
            6: "#A46422",
            7: "#EB8931",
            8: "#F7E26B",
            9: "#2F484E",
            A: "#44891A",
            B: "#A3CE27",
            C: "#1B2632",
            D: "#005784",
            E: "#31A2F2",
            F: "#B2DCEF"
        }, {
            0: "#000",
            1: "#191028",
            2: "#46af45",
            3: "#a1d685",
            4: "#453e78",
            5: "#7664fe",
            6: "#833129",
            7: "#9ec2e8",
            8: "#dc534b",
            9: "#e18d79",
            A: "#d6b97b",
            B: "#e9d8a1",
            C: "#216c4b",
            D: "#d365c8",
            E: "#afaab9",
            F: "#f5f4eb"
        }, {
            0: "#000",
            1: "#2234d1",
            2: "#0c7e45",
            3: "#44aacc",
            4: "#8a3622",
            5: "#5c2e78",
            6: "#aa5c3d",
            7: "#b5b5b5",
            8: "#5e606e",
            9: "#4c81fb",
            A: "#6cd947",
            B: "#7be2f9",
            C: "#eb8a60",
            D: "#e23d69",
            E: "#ffd93f",
            F: "#fff"
        }, {
            0: "#000",
            1: "#fff",
            2: "#8b4131",
            3: "#7bbdc5",
            4: "#8b41ac",
            5: "#6aac41",
            6: "#3931a4",
            7: "#d5de73",
            8: "#945a20",
            9: "#5a4100",
            A: "#bd736a",
            B: "#525252",
            C: "#838383",
            D: "#acee8b",
            E: "#7b73de",
            F: "#acacac"
        }, {
            0: "#000",
            1: "#191028",
            2: "#46af45",
            3: "#a1d685",
            4: "#453e78",
            5: "#7664fe",
            6: "#833129",
            7: "#9ec2e8",
            8: "#dc534b",
            9: "#e18d79",
            A: "#d6b97b",
            B: "#e9d8a1",
            C: "#216c4b",
            D: "#d365c8",
            E: "#afaab9",
            F: "#fff"
        }]
    },c.Create.PALETTE_ARNE = 0,c.Create.PALETTE_JMP = 1,c.Create.PALETTE_CGA = 2,c.Create.PALETTE_C64 = 3,c.Create.PALETTE_JAPANESE_MACHINE = 4,c.Create.prototype = {
        texture: function (a, b, c, d, e) {
            void 0 === c && (c = 8), void 0 === d && (d = c), void 0 === e && (e = 0);
            var f = b[0].length * c, g = b.length * d;
            null === this.bmd && (this.bmd = this.game.make.bitmapData(), this.canvas = this.bmd.canvas, this.ctx = this.bmd.context), this.bmd.resize(f, g), this.bmd.clear();
            for (var h = 0; h < b.length; h++) for (var i = b[h], j = 0; j < i.length; j++) {
                var k = i[j];
                "." !== k && " " !== k && (this.ctx.fillStyle = this.palettes[e][k], this.ctx.fillRect(j * c, h * d, c, d))
            }
            return this.bmd.generateTexture(a)
        }, grid: function (a, b, c, d, e, f) {
            null === this.bmd && (this.bmd = this.game.make.bitmapData(), this.canvas = this.bmd.canvas, this.ctx = this.bmd.context), this.bmd.resize(b, c), this.ctx.fillStyle = f;
            for (var g = 0; g < c; g += e) this.ctx.fillRect(0, g, b, 1);
            for (var h = 0; h < b; h += d) this.ctx.fillRect(h, 0, 1, c);
            return this.bmd.generateTexture(a)
        }
    },c.Create.prototype.constructor = c.Create,c.FlexGrid = function (a, b, d) {
        this.game = a.game, this.manager = a, this.width = b, this.height = d, this.boundsCustom = new c.Rectangle(0, 0, b, d), this.boundsFluid = new c.Rectangle(0, 0, b, d), this.boundsFull = new c.Rectangle(0, 0, b, d), this.boundsNone = new c.Rectangle(0, 0, b, d), this.positionCustom = new c.Point(0, 0), this.positionFluid = new c.Point(0, 0), this.positionFull = new c.Point(0, 0), this.positionNone = new c.Point(0, 0), this.scaleCustom = new c.Point(1, 1), this.scaleFluid = new c.Point(1, 1), this.scaleFluidInversed = new c.Point(1, 1), this.scaleFull = new c.Point(1, 1), this.scaleNone = new c.Point(1, 1), this.customWidth = 0, this.customHeight = 0, this.customOffsetX = 0, this.customOffsetY = 0, this.ratioH = b / d, this.ratioV = d / b, this.multiplier = 0, this.layers = []
    },c.FlexGrid.prototype = {
        setSize: function (a, b) {
            this.width = a, this.height = b, this.ratioH = a / b, this.ratioV = b / a, this.scaleNone = new c.Point(1, 1), this.boundsNone.width = this.width, this.boundsNone.height = this.height, this.refresh()
        }, createCustomLayer: function (a, b, d, e) {
            void 0 === e && (e = !0), this.customWidth = a, this.customHeight = b, this.boundsCustom.width = a, this.boundsCustom.height = b;
            var f = new c.FlexLayer(this, this.positionCustom, this.boundsCustom, this.scaleCustom);
            return e && this.game.world.add(f), this.layers.push(f), "undefined" != typeof d && null !== typeof d && f.addMultiple(d), f
        }, createFluidLayer: function (a, b) {
            void 0 === b && (b = !0);
            var d = new c.FlexLayer(this, this.positionFluid, this.boundsFluid, this.scaleFluid);
            return b && this.game.world.add(d), this.layers.push(d), "undefined" != typeof a && null !== typeof a && d.addMultiple(a), d
        }, createFullLayer: function (a) {
            var b = new c.FlexLayer(this, this.positionFull, this.boundsFull, this.scaleFluid);
            return this.game.world.add(b), this.layers.push(b), "undefined" != typeof a && b.addMultiple(a), b
        }, createFixedLayer: function (a) {
            var b = new c.FlexLayer(this, this.positionNone, this.boundsNone, this.scaleNone);
            return this.game.world.add(b), this.layers.push(b), "undefined" != typeof a && b.addMultiple(a), b
        }, reset: function () {
            for (var a = this.layers.length; a--;) this.layers[a].persist || (this.layers[a].position = null, this.layers[a].scale = null, this.layers.slice(a, 1))
        }, onResize: function (a, b) {
            this.ratioH = a / b, this.ratioV = b / a, this.refresh(a, b)
        }, refresh: function () {
            this.multiplier = Math.min(this.manager.height / this.height, this.manager.width / this.width), this.boundsFluid.width = Math.round(this.width * this.multiplier), this.boundsFluid.height = Math.round(this.height * this.multiplier), this.scaleFluid.set(this.boundsFluid.width / this.width, this.boundsFluid.height / this.height), this.scaleFluidInversed.set(this.width / this.boundsFluid.width, this.height / this.boundsFluid.height), this.scaleFull.set(this.boundsFull.width / this.width, this.boundsFull.height / this.height), this.boundsFull.width = Math.round(this.manager.width * this.scaleFluidInversed.x), this.boundsFull.height = Math.round(this.manager.height * this.scaleFluidInversed.y), this.boundsFluid.centerOn(this.manager.bounds.centerX, this.manager.bounds.centerY), this.boundsNone.centerOn(this.manager.bounds.centerX, this.manager.bounds.centerY), this.positionFluid.set(this.boundsFluid.x, this.boundsFluid.y), this.positionNone.set(this.boundsNone.x, this.boundsNone.y)
        }, fitSprite: function (a) {
            this.manager.scaleSprite(a), a.x = this.manager.bounds.centerX, a.y = this.manager.bounds.centerY
        }, debug: function () {
            this.game.debug.text(this.boundsFluid.width + " x " + this.boundsFluid.height, this.boundsFluid.x + 4, this.boundsFluid.y + 16), this.game.debug.geom(this.boundsFluid, "rgba(255,0,0,0.9", !1)
        }
    },c.FlexGrid.prototype.constructor = c.FlexGrid,c.FlexLayer = function (a, b, d, e) {
        c.Group.call(this, a.game, null, "__flexLayer" + a.game.rnd.uuid(), !1), this.manager = a.manager, this.grid = a, this.persist = !1, this.position = b, this.bounds = d, this.scale = e, this.topLeft = d.topLeft, this.topMiddle = new c.Point(d.halfWidth, 0), this.topRight = d.topRight, this.bottomLeft = d.bottomLeft, this.bottomMiddle = new c.Point(d.halfWidth, d.bottom), this.bottomRight = d.bottomRight
    },c.FlexLayer.prototype = Object.create(c.Group.prototype),c.FlexLayer.prototype.constructor = c.FlexLayer,c.FlexLayer.prototype.resize = function () {
    },c.FlexLayer.prototype.debug = function () {
        this.game.debug.text(this.bounds.width + " x " + this.bounds.height, this.bounds.x + 4, this.bounds.y + 16), this.game.debug.geom(this.bounds, "rgba(0,0,255,0.9", !1), this.game.debug.geom(this.topLeft, "rgba(255,255,255,0.9"), this.game.debug.geom(this.topMiddle, "rgba(255,255,255,0.9"), this.game.debug.geom(this.topRight, "rgba(255,255,255,0.9")
    },c.Color = {
        packPixel: function (a, b, d, e) {
            return c.Device.LITTLE_ENDIAN ? (e << 24 | d << 16 | b << 8 | a) >>> 0 : (a << 24 | b << 16 | d << 8 | e) >>> 0
        }, unpackPixel: function (a, b, d, e) {
            return void 0 !== b && null !== b || (b = c.Color.createColor()), void 0 !== d && null !== d || (d = !1), void 0 !== e && null !== e || (e = !1), c.Device.LITTLE_ENDIAN ? (b.a = (4278190080 & a) >>> 24, b.b = (16711680 & a) >>> 16, b.g = (65280 & a) >>> 8, b.r = 255 & a) : (b.r = (4278190080 & a) >>> 24, b.g = (16711680 & a) >>> 16, b.b = (65280 & a) >>> 8, b.a = 255 & a), b.color = a, b.rgba = "rgba(" + b.r + "," + b.g + "," + b.b + "," + b.a / 255 + ")", d && c.Color.RGBtoHSL(b.r, b.g, b.b, b), e && c.Color.RGBtoHSV(b.r, b.g, b.b, b), b
        }, fromRGBA: function (a, b) {
            return b || (b = c.Color.createColor()), b.r = (4278190080 & a) >>> 24, b.g = (16711680 & a) >>> 16, b.b = (65280 & a) >>> 8, b.a = 255 & a, b.rgba = "rgba(" + b.r + "," + b.g + "," + b.b + "," + b.a + ")", b
        }, toRGBA: function (a, b, c, d) {
            return a << 24 | b << 16 | c << 8 | d
        }, toABGR: function (a, b, c, d) {
            return (d << 24 | c << 16 | b << 8 | a) >>> 0
        }, RGBtoHSL: function (a, b, d, e) {
            e || (e = c.Color.createColor(a, b, d, 1)), a /= 255, b /= 255, d /= 255;
            var f = Math.min(a, b, d), g = Math.max(a, b, d);
            if (e.h = 0, e.s = 0, e.l = (g + f) / 2, g !== f) {
                var h = g - f;
                e.s = e.l > .5 ? h / (2 - g - f) : h / (g + f), g === a ? e.h = (b - d) / h + (b < d ? 6 : 0) : g === b ? e.h = (d - a) / h + 2 : g === d && (e.h = (a - b) / h + 4), e.h /= 6
            }
            return e
        }, HSLtoRGB: function (a, b, d, e) {
            if (e ? (e.r = d, e.g = d, e.b = d) : e = c.Color.createColor(d, d, d), 0 !== b) {
                var f = d < .5 ? d * (1 + b) : d + b - d * b, g = 2 * d - f;
                e.r = c.Color.hueToColor(g, f, a + 1 / 3), e.g = c.Color.hueToColor(g, f, a), e.b = c.Color.hueToColor(g, f, a - 1 / 3)
            }
            return e.r = Math.floor(255 * e.r | 0), e.g = Math.floor(255 * e.g | 0), e.b = Math.floor(255 * e.b | 0), c.Color.updateColor(e), e
        }, RGBtoHSV: function (a, b, d, e) {
            e || (e = c.Color.createColor(a, b, d, 255)), a /= 255, b /= 255, d /= 255;
            var f = Math.min(a, b, d), g = Math.max(a, b, d), h = g - f;
            return e.h = 0, e.s = 0 === g ? 0 : h / g, e.v = g, g !== f && (g === a ? e.h = (b - d) / h + (b < d ? 6 : 0) : g === b ? e.h = (d - a) / h + 2 : g === d && (e.h = (a - b) / h + 4), e.h /= 6), e
        }, HSVtoRGB: function (a, b, d, e) {
            void 0 === e && (e = c.Color.createColor(0, 0, 0, 1, a, b, 0, d));
            var f, g, h, i = Math.floor(6 * a), j = 6 * a - i, k = d * (1 - b), l = d * (1 - j * b),
                m = d * (1 - (1 - j) * b);
            switch (i % 6) {
                case 0:
                    f = d, g = m, h = k;
                    break;
                case 1:
                    f = l, g = d, h = k;
                    break;
                case 2:
                    f = k, g = d, h = m;
                    break;
                case 3:
                    f = k, g = l, h = d;
                    break;
                case 4:
                    f = m, g = k, h = d;
                    break;
                case 5:
                    f = d, g = k, h = l
            }
            return e.r = Math.floor(255 * f), e.g = Math.floor(255 * g), e.b = Math.floor(255 * h), c.Color.updateColor(e), e
        }, hueToColor: function (a, b, c) {
            return c < 0 && (c += 1), c > 1 && (c -= 1), c < 1 / 6 ? a + 6 * (b - a) * c : c < .5 ? b : c < 2 / 3 ? a + (b - a) * (2 / 3 - c) * 6 : a
        }, createColor: function (a, b, d, e, f, g, h, i) {
            var j = {
                r: a || 0,
                g: b || 0,
                b: d || 0,
                a: e || 1,
                h: f || 0,
                s: g || 0,
                l: h || 0,
                v: i || 0,
                color: 0,
                color32: 0,
                rgba: ""
            };
            return c.Color.updateColor(j)
        }, updateColor: function (a) {
            return a.rgba = "rgba(" + a.r.toString() + "," + a.g.toString() + "," + a.b.toString() + "," + a.a.toString() + ")", a.color = c.Color.getColor(a.r, a.g, a.b), a.color32 = c.Color.getColor32(255 * a.a, a.r, a.g, a.b), a
        }, getColor32: function (a, b, c, d) {
            return a << 24 | b << 16 | c << 8 | d
        }, getColor: function (a, b, c) {
            return a << 16 | b << 8 | c
        }, RGBtoString: function (a, b, d, e, f) {
            return void 0 === e && (e = 255), void 0 === f && (f = "#"), "#" === f ? "#" + ((1 << 24) + (a << 16) + (b << 8) + d).toString(16).slice(1) : "0x" + c.Color.componentToHex(e) + c.Color.componentToHex(a) + c.Color.componentToHex(b) + c.Color.componentToHex(d)
        }, hexToRGB: function (a) {
            var b = c.Color.hexToColor(a);
            if (b) return c.Color.getColor32(b.a, b.r, b.g, b.b)
        }, hexToColor: function (a, b) {
            a = a.replace(/^(?:#|0x)?([a-f\d])([a-f\d])([a-f\d])$/i, function (a, b, c, d) {
                return b + b + c + c + d + d
            });
            var d = /^(?:#|0x)?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
            if (d) {
                var e = parseInt(d[1], 16), f = parseInt(d[2], 16), g = parseInt(d[3], 16);
                b ? (b.r = e, b.g = f, b.b = g) : b = c.Color.createColor(e, f, g)
            }
            return b
        }, webToColor: function (a, b) {
            b || (b = c.Color.createColor());
            var d = /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?))?\s*\)$/.exec(a);
            return d && (b.r = parseInt(d[1], 10), b.g = parseInt(d[2], 10), b.b = parseInt(d[3], 10), b.a = void 0 !== d[4] ? parseFloat(d[4]) : 1, c.Color.updateColor(b)), b
        }, valueToColor: function (a, b) {
            if (b || (b = c.Color.createColor()), "string" == typeof a) return 0 === a.indexOf("rgb") ? c.Color.webToColor(a, b) : (b.a = 1, c.Color.hexToColor(a, b));
            if ("number" == typeof a) {
                var d = c.Color.getRGB(a);
                return b.r = d.r, b.g = d.g, b.b = d.b, b.a = d.a / 255, b
            }
            return b
        }, componentToHex: function (a) {
            var b = a.toString(16);
            return 1 === b.length ? "0" + b : b
        }, HSVColorWheel: function (a, b) {
            void 0 === a && (a = 1), void 0 === b && (b = 1);
            for (var d = [], e = 0; e <= 359; e++) d.push(c.Color.HSVtoRGB(e / 359, a, b));
            return d
        }, HSLColorWheel: function (a, b) {
            void 0 === a && (a = .5), void 0 === b && (b = .5);
            for (var d = [], e = 0; e <= 359; e++) d.push(c.Color.HSLtoRGB(e / 359, a, b));
            return d
        }, interpolateColor: function (a, b, d, e, f) {
            void 0 === f && (f = 255);
            var g = c.Color.getRGB(a), h = c.Color.getRGB(b), i = (h.red - g.red) * e / d + g.red,
                j = (h.green - g.green) * e / d + g.green, k = (h.blue - g.blue) * e / d + g.blue;
            return c.Color.getColor32(f, i, j, k)
        }, interpolateColorWithRGB: function (a, b, d, e, f, g) {
            var h = c.Color.getRGB(a), i = (b - h.red) * g / f + h.red, j = (d - h.green) * g / f + h.green,
                k = (e - h.blue) * g / f + h.blue;
            return c.Color.getColor(i, j, k)
        }, interpolateRGB: function (a, b, d, e, f, g, h, i) {
            var j = (e - a) * i / h + a, k = (f - b) * i / h + b, l = (g - d) * i / h + d;
            return c.Color.getColor(j, k, l)
        }, getRandomColor: function (a, b, d) {
            if (void 0 === a && (a = 0), void 0 === b && (b = 255), void 0 === d && (d = 255), b > 255 || a > b) return c.Color.getColor(255, 255, 255);
            var e = a + Math.round(Math.random() * (b - a)), f = a + Math.round(Math.random() * (b - a)),
                g = a + Math.round(Math.random() * (b - a));
            return c.Color.getColor32(d, e, f, g)
        }, getRGB: function (a) {
            return a > 16777215 ? {
                alpha: a >>> 24,
                red: a >> 16 & 255,
                green: a >> 8 & 255,
                blue: 255 & a,
                a: a >>> 24,
                r: a >> 16 & 255,
                g: a >> 8 & 255,
                b: 255 & a
            } : {
                alpha: 255,
                red: a >> 16 & 255,
                green: a >> 8 & 255,
                blue: 255 & a,
                a: 255,
                r: a >> 16 & 255,
                g: a >> 8 & 255,
                b: 255 & a
            }
        }, getWebRGB: function (a) {
            if ("object" == typeof a) return "rgba(" + a.r.toString() + "," + a.g.toString() + "," + a.b.toString() + "," + (a.a / 255).toString() + ")";
            var b = c.Color.getRGB(a);
            return "rgba(" + b.r.toString() + "," + b.g.toString() + "," + b.b.toString() + "," + (b.a / 255).toString() + ")"
        }, getAlpha: function (a) {
            return a >>> 24
        }, getAlphaFloat: function (a) {
            return (a >>> 24) / 255
        }, getRed: function (a) {
            return a >> 16 & 255
        }, getGreen: function (a) {
            return a >> 8 & 255
        }, getBlue: function (a) {
            return 255 & a
        }, blendNormal: function (a) {
            return a
        }, blendLighten: function (a, b) {
            return b > a ? b : a
        }, blendDarken: function (a, b) {
            return b > a ? a : b
        }, blendMultiply: function (a, b) {
            return a * b / 255
        }, blendAverage: function (a, b) {
            return (a + b) / 2
        }, blendAdd: function (a, b) {
            return Math.min(255, a + b)
        }, blendSubtract: function (a, b) {
            return Math.max(0, a + b - 255)
        }, blendDifference: function (a, b) {
            return Math.abs(a - b)
        }, blendNegation: function (a, b) {
            return 255 - Math.abs(255 - a - b)
        }, blendScreen: function (a, b) {
            return 255 - ((255 - a) * (255 - b) >> 8)
        }, blendExclusion: function (a, b) {
            return a + b - 2 * a * b / 255
        }, blendOverlay: function (a, b) {
            return b < 128 ? 2 * a * b / 255 : 255 - 2 * (255 - a) * (255 - b) / 255
        }, blendSoftLight: function (a, b) {
            return b < 128 ? 2 * ((a >> 1) + 64) * (b / 255) : 255 - 2 * (255 - ((a >> 1) + 64)) * (255 - b) / 255
        }, blendHardLight: function (a, b) {
            return c.Color.blendOverlay(b, a)
        }, blendColorDodge: function (a, b) {
            return 255 === b ? b : Math.min(255, (a << 8) / (255 - b))
        }, blendColorBurn: function (a, b) {
            return 0 === b ? b : Math.max(0, 255 - (255 - a << 8) / b)
        }, blendLinearDodge: function (a, b) {
            return c.Color.blendAdd(a, b)
        }, blendLinearBurn: function (a, b) {
            return c.Color.blendSubtract(a, b)
        }, blendLinearLight: function (a, b) {
            return b < 128 ? c.Color.blendLinearBurn(a, 2 * b) : c.Color.blendLinearDodge(a, 2 * (b - 128))
        }, blendVividLight: function (a, b) {
            return b < 128 ? c.Color.blendColorBurn(a, 2 * b) : c.Color.blendColorDodge(a, 2 * (b - 128))
        }, blendPinLight: function (a, b) {
            return b < 128 ? c.Color.blendDarken(a, 2 * b) : c.Color.blendLighten(a, 2 * (b - 128))
        }, blendHardMix: function (a, b) {
            return c.Color.blendVividLight(a, b) < 128 ? 0 : 255
        }, blendReflect: function (a, b) {
            return 255 === b ? b : Math.min(255, a * a / (255 - b))
        }, blendGlow: function (a, b) {
            return c.Color.blendReflect(b, a)
        }, blendPhoenix: function (a, b) {
            return Math.min(a, b) - Math.max(a, b) + 255
        }
    },c.Physics = function (a, b) {
        b = b || {}, this.game = a, this.config = b, this.arcade = null, this.p2 = null, this.ninja = null, this.box2d = null, this.chipmunk = null, this.matter = null, this.parseConfig()
    },c.Physics.ARCADE = 0,c.Physics.P2JS = 1,c.Physics.NINJA = 2,c.Physics.BOX2D = 3,c.Physics.CHIPMUNK = 4,c.Physics.MATTERJS = 5,c.Physics.prototype = {
        parseConfig: function () {
            this.config.hasOwnProperty("arcade") && this.config.arcade !== !0 || !c.Physics.hasOwnProperty("Arcade") || (this.arcade = new c.Physics.Arcade(this.game)), this.config.hasOwnProperty("ninja") && this.config.ninja === !0 && c.Physics.hasOwnProperty("Ninja") && (this.ninja = new c.Physics.Ninja(this.game)), this.config.hasOwnProperty("p2") && this.config.p2 === !0 && c.Physics.hasOwnProperty("P2") && (this.p2 = new c.Physics.P2(this.game, this.config)), this.config.hasOwnProperty("box2d") && this.config.box2d === !0 && c.Physics.hasOwnProperty("BOX2D") && (this.box2d = new c.Physics.BOX2D(this.game, this.config)), this.config.hasOwnProperty("matter") && this.config.matter === !0 && c.Physics.hasOwnProperty("Matter") && (this.matter = new c.Physics.Matter(this.game, this.config))
        }, startSystem: function (a) {
            a === c.Physics.ARCADE ? this.arcade = new c.Physics.Arcade(this.game) : a === c.Physics.P2JS ? null === this.p2 ? this.p2 = new c.Physics.P2(this.game, this.config) : this.p2.reset() : a === c.Physics.NINJA ? this.ninja = new c.Physics.Ninja(this.game) : a === c.Physics.BOX2D ? null === this.box2d ? this.box2d = new c.Physics.Box2D(this.game, this.config) : this.box2d.reset() : a === c.Physics.MATTERJS && (null === this.matter ? this.matter = new c.Physics.Matter(this.game, this.config) : this.matter.reset())
        }, enable: function (a, b, d) {
            void 0 === b && (b = c.Physics.ARCADE), void 0 === d && (d = !1), b === c.Physics.ARCADE ? this.arcade.enable(a) : b === c.Physics.P2JS && this.p2 ? this.p2.enable(a, d) : b === c.Physics.NINJA && this.ninja ? this.ninja.enableAABB(a) : b === c.Physics.BOX2D && this.box2d ? this.box2d.enable(a) : b === c.Physics.MATTERJS && this.matter ? this.matter.enable(a) : console.warn(a.key + " is attempting to enable a physics body using an unknown physics system.")
        }, preUpdate: function () {
            this.p2 && this.p2.preUpdate(), this.box2d && this.box2d.preUpdate(), this.matter && this.matter.preUpdate()
        }, update: function () {
            this.p2 && this.p2.update(), this.box2d && this.box2d.update(), this.matter && this.matter.update()
        }, setBoundsToWorld: function () {
            this.arcade && this.arcade.setBoundsToWorld(), this.ninja && this.ninja.setBoundsToWorld(), this.p2 && this.p2.setBoundsToWorld(), this.box2d && this.box2d.setBoundsToWorld(), this.matter && this.matter.setBoundsToWorld()
        }, clear: function () {
            this.p2 && this.p2.clear(), this.box2d && this.box2d.clear(), this.matter && this.matter.clear()
        }, reset: function () {
            this.p2 && this.p2.reset(), this.box2d && this.box2d.reset(), this.matter && this.matter.reset()
        }, destroy: function () {
            this.p2 && this.p2.destroy(), this.box2d && this.box2d.destroy(), this.matter && this.matter.destroy(), this.arcade = null, this.ninja = null, this.p2 = null, this.box2d = null, this.matter = null
        }
    },c.Physics.prototype.constructor = c.Physics,c.Physics.Arcade = function (a) {
        this.game = a, this.gravity = new c.Point, this.bounds = new c.Rectangle(0, 0, a.world.width, a.world.height), this.checkCollision = {
            up: !0,
            down: !0,
            left: !0,
            right: !0
        }, this.maxObjects = 10, this.maxLevels = 4, this.OVERLAP_BIAS = 4, this.forceX = !1, this.sortDirection = c.Physics.Arcade.LEFT_RIGHT, this.skipQuadTree = !0, this.isPaused = !1, this.quadTree = new c.QuadTree(this.game.world.bounds.x, this.game.world.bounds.y, this.game.world.bounds.width, this.game.world.bounds.height, this.maxObjects, this.maxLevels), this._total = 0, this.setBoundsToWorld()
    },c.Physics.Arcade.prototype.constructor = c.Physics.Arcade,c.Physics.Arcade.SORT_NONE = 0,c.Physics.Arcade.LEFT_RIGHT = 1,c.Physics.Arcade.RIGHT_LEFT = 2,c.Physics.Arcade.TOP_BOTTOM = 3,c.Physics.Arcade.BOTTOM_TOP = 4,c.Physics.Arcade.prototype = {
        setBounds: function (a, b, c, d) {
            this.bounds.setTo(a, b, c, d)
        }, setBoundsToWorld: function () {
            this.bounds.copyFrom(this.game.world.bounds)
        }, enable: function (a, b) {
            void 0 === b && (b = !0);
            var d = 1;
            if (Array.isArray(a)) for (d = a.length; d--;) a[d] instanceof c.Group ? this.enable(a[d].children, b) : (this.enableBody(a[d]), b && a[d].hasOwnProperty("children") && a[d].children.length > 0 && this.enable(a[d], !0)); else a instanceof c.Group ? this.enable(a.children, b) : (this.enableBody(a), b && a.hasOwnProperty("children") && a.children.length > 0 && this.enable(a.children, !0))
        }, enableBody: function (a) {
            a.hasOwnProperty("body") && null === a.body && (a.body = new c.Physics.Arcade.Body(a), a.parent && a.parent instanceof c.Group && a.parent.addToHash(a))
        }, updateMotion: function (a) {
            var b = this.computeVelocity(0, a, a.angularVelocity, a.angularAcceleration, a.angularDrag, a.maxAngular) - a.angularVelocity;
            a.angularVelocity += b, a.rotation += a.angularVelocity * this.game.time.physicsElapsed, a.velocity.x = this.computeVelocity(1, a, a.velocity.x, a.acceleration.x, a.drag.x, a.maxVelocity.x), a.velocity.y = this.computeVelocity(2, a, a.velocity.y, a.acceleration.y, a.drag.y, a.maxVelocity.y)
        }, computeVelocity: function (a, b, c, d, e, f) {
            return void 0 === f && (f = 1e4), 1 === a && b.allowGravity ? c += (this.gravity.x + b.gravity.x) * this.game.time.physicsElapsed : 2 === a && b.allowGravity && (c += (this.gravity.y + b.gravity.y) * this.game.time.physicsElapsed), d ? c += d * this.game.time.physicsElapsed : e && (e *= this.game.time.physicsElapsed, c - e > 0 ? c -= e : c + e < 0 ? c += e : c = 0), c > f ? c = f : c < -f && (c = -f), c
        }, overlap: function (a, b, c, d, e) {
            if (c = c || null, d = d || null, e = e || c, this._total = 0, !Array.isArray(a) && Array.isArray(b)) for (var f = 0; f < b.length; f++) this.collideHandler(a, b[f], c, d, e, !0); else if (Array.isArray(a) && !Array.isArray(b)) for (var f = 0; f < a.length; f++) this.collideHandler(a[f], b, c, d, e, !0); else if (Array.isArray(a) && Array.isArray(b)) for (var f = 0; f < a.length; f++) for (var g = 0; g < b.length; g++) this.collideHandler(a[f], b[g], c, d, e, !0); else this.collideHandler(a, b, c, d, e, !0);
            return this._total > 0
        }, collide: function (a, b, c, d, e) {
            if (c = c || null, d = d || null, e = e || c, this._total = 0, !Array.isArray(a) && Array.isArray(b)) for (var f = 0; f < b.length; f++) this.collideHandler(a, b[f], c, d, e, !1); else if (Array.isArray(a) && !Array.isArray(b)) for (var f = 0; f < a.length; f++) this.collideHandler(a[f], b, c, d, e, !1); else if (Array.isArray(a) && Array.isArray(b)) for (var f = 0; f < a.length; f++) for (var g = 0; g < b.length; g++) this.collideHandler(a[f], b[g], c, d, e, !1); else this.collideHandler(a, b, c, d, e, !1);
            return this._total > 0
        }, sortLeftRight: function (a, b) {
            return a.body && b.body ? a.body.x - b.body.x : 0
        }, sortRightLeft: function (a, b) {
            return a.body && b.body ? b.body.x - a.body.x : 0
        }, sortTopBottom: function (a, b) {
            return a.body && b.body ? a.body.y - b.body.y : 0
        }, sortBottomTop: function (a, b) {
            return a.body && b.body ? b.body.y - a.body.y : 0
        }, sort: function (a, b) {
            null !== a.physicsSortDirection ? b = a.physicsSortDirection : void 0 === b && (b = this.sortDirection), b === c.Physics.Arcade.LEFT_RIGHT ? a.hash.sort(this.sortLeftRight) : b === c.Physics.Arcade.RIGHT_LEFT ? a.hash.sort(this.sortRightLeft) : b === c.Physics.Arcade.TOP_BOTTOM ? a.hash.sort(this.sortTopBottom) : b === c.Physics.Arcade.BOTTOM_TOP && a.hash.sort(this.sortBottomTop)
        }, collideHandler: function (a, b, d, e, f, g) {
            return void 0 === b && a.physicsType === c.GROUP ? (this.sort(a), void this.collideGroupVsSelf(a, d, e, f, g)) : void (a && b && a.exists && b.exists && (this.sortDirection !== c.Physics.Arcade.SORT_NONE && (a.physicsType === c.GROUP && this.sort(a), b.physicsType === c.GROUP && this.sort(b)), a.physicsType === c.SPRITE ? b.physicsType === c.SPRITE ? this.collideSpriteVsSprite(a, b, d, e, f, g) : b.physicsType === c.GROUP ? this.collideSpriteVsGroup(a, b, d, e, f, g) : b.physicsType === c.TILEMAPLAYER && this.collideSpriteVsTilemapLayer(a, b, d, e, f, g) : a.physicsType === c.GROUP ? b.physicsType === c.SPRITE ? this.collideSpriteVsGroup(b, a, d, e, f, g) : b.physicsType === c.GROUP ? this.collideGroupVsGroup(a, b, d, e, f, g) : b.physicsType === c.TILEMAPLAYER && this.collideGroupVsTilemapLayer(a, b, d, e, f, g) : a.physicsType === c.TILEMAPLAYER && (b.physicsType === c.SPRITE ? this.collideSpriteVsTilemapLayer(b, a, d, e, f, g) : b.physicsType === c.GROUP && this.collideGroupVsTilemapLayer(b, a, d, e, f, g))))
        }, collideSpriteVsSprite: function (a, b, c, d, e, f) {
            return !(!a.body || !b.body) && (this.separate(a.body, b.body, d, e, f) && (c && c.call(e, a, b), this._total++), !0)
        }, collideSpriteVsGroup: function (a, b, d, e, f, g) {
            if (0 !== b.length && a.body) if (this.skipQuadTree || a.body.skipQuadTree) for (var h = {}, i = 0; i < b.hash.length; i++) {
                var j = b.hash[i];
                if (j && j.exists && j.body) {
                    if (h = j.body.getBounds(h), this.sortDirection === c.Physics.Arcade.LEFT_RIGHT) {
                        if (a.body.right < h.x) break;
                        if (h.right < a.body.x) continue
                    } else if (this.sortDirection === c.Physics.Arcade.RIGHT_LEFT) {
                        if (a.body.x > h.right) break;
                        if (h.x > a.body.right) continue
                    } else if (this.sortDirection === c.Physics.Arcade.TOP_BOTTOM) {
                        if (a.body.bottom < h.y) break;
                        if (h.bottom < a.body.y) continue
                    } else if (this.sortDirection === c.Physics.Arcade.BOTTOM_TOP) {
                        if (a.body.y > h.bottom) break;
                        if (h.y > a.body.bottom) continue
                    }
                    this.collideSpriteVsSprite(a, j, d, e, f, g)
                }
            } else {
                this.quadTree.clear(), this.quadTree.reset(this.game.world.bounds.x, this.game.world.bounds.y, this.game.world.bounds.width, this.game.world.bounds.height, this.maxObjects, this.maxLevels), this.quadTree.populate(b);
                for (var k = this.quadTree.retrieve(a), i = 0; i < k.length; i++) this.separate(a.body, k[i], e, f, g) && (d && d.call(f, a, k[i].sprite), this._total++)
            }
        }, collideGroupVsSelf: function (a, b, d, e, f) {
            if (0 !== a.length) for (var g = 0; g < a.hash.length; g++) {
                var h = {}, i = a.hash[g];
                if (i && i.exists && i.body) {
                    h = i.body.getBounds(h);
                    for (var j = g + 1; j < a.hash.length; j++) {
                        var k = {}, l = a.hash[j];
                        if (l && l.exists && l.body) {
                            if (k = l.body.getBounds(k), this.sortDirection === c.Physics.Arcade.LEFT_RIGHT) {
                                if (h.right < k.x) break;
                                if (k.right < h.x) continue
                            } else if (this.sortDirection === c.Physics.Arcade.RIGHT_LEFT) {
                                if (h.x > k.right) continue;
                                if (k.x > h.right) break
                            } else if (this.sortDirection === c.Physics.Arcade.TOP_BOTTOM) {
                                if (h.bottom < k.y) continue;
                                if (k.bottom < h.y) break
                            } else if (this.sortDirection === c.Physics.Arcade.BOTTOM_TOP) {
                                if (h.y > k.bottom) continue;
                                if (k.y > i.body.bottom) break
                            }
                            this.collideSpriteVsSprite(i, l, b, d, e, f)
                        }
                    }
                }
            }
        }, collideGroupVsGroup: function (a, b, d, e, f, g) {
            if (0 !== a.length && 0 !== b.length) for (var h = 0; h < a.children.length; h++) a.children[h].exists && (a.children[h].physicsType === c.GROUP ? this.collideGroupVsGroup(a.children[h], b, d, e, f, g) : this.collideSpriteVsGroup(a.children[h], b, d, e, f, g))
        }, separate: function (a, b, c, d, e) {
            if (!a.enable || !b.enable || a.checkCollision.none || b.checkCollision.none || !this.intersects(a, b)) return !1;
            if (c && c.call(d, a.sprite, b.sprite) === !1) return !1;
            if (a.isCircle && b.isCircle) return this.separateCircle(a, b, e);
            if (a.isCircle !== b.isCircle) {
                var f = a.isCircle ? b : a, g = a.isCircle ? a : b,
                    h = {x: f.x, y: f.y, right: f.right, bottom: f.bottom}, i = {x: g.x + g.radius, y: g.y + g.radius};
                if ((i.y < h.y || i.y > h.bottom) && (i.x < h.x || i.x > h.right)) return this.separateCircle(a, b, e)
            }
            var j = !1, k = !1;
            this.forceX || Math.abs(this.gravity.y + a.gravity.y) < Math.abs(this.gravity.x + a.gravity.x) ? (j = this.separateX(a, b, e), this.intersects(a, b) && (k = this.separateY(a, b, e))) : (k = this.separateY(a, b, e), this.intersects(a, b) && (j = this.separateX(a, b, e)));
            var l = j || k;
            return l && (e ? (a.onOverlap && a.onOverlap.dispatch(a.sprite, b.sprite), b.onOverlap && b.onOverlap.dispatch(b.sprite, a.sprite)) : (a.onCollide && a.onCollide.dispatch(a.sprite, b.sprite),
            b.onCollide && b.onCollide.dispatch(b.sprite, a.sprite))), l
        }, intersects: function (a, b) {
            return a !== b && (a.isCircle ? b.isCircle ? c.Math.distance(a.center.x, a.center.y, b.center.x, b.center.y) <= a.radius + b.radius : this.circleBodyIntersects(a, b) : b.isCircle ? this.circleBodyIntersects(b, a) : !(a.right <= b.position.x) && (!(a.bottom <= b.position.y) && (!(a.position.x >= b.right) && !(a.position.y >= b.bottom))))
        }, circleBodyIntersects: function (a, b) {
            var d = c.Math.clamp(a.center.x, b.left, b.right), e = c.Math.clamp(a.center.y, b.top, b.bottom),
                f = (a.center.x - d) * (a.center.x - d), g = (a.center.y - e) * (a.center.y - e);
            return f + g <= a.radius * a.radius
        }, separateCircle: function (a, b, d) {
            this.getOverlapX(a, b), this.getOverlapY(a, b);
            var e = b.center.x - a.center.x, f = b.center.y - a.center.y, g = Math.atan2(f, e), h = 0;
            if (a.isCircle !== b.isCircle) {
                var i = {
                    x: b.isCircle ? a.position.x : b.position.x,
                    y: b.isCircle ? a.position.y : b.position.y,
                    right: b.isCircle ? a.right : b.right,
                    bottom: b.isCircle ? a.bottom : b.bottom
                }, j = {
                    x: a.isCircle ? a.position.x + a.radius : b.position.x + b.radius,
                    y: a.isCircle ? a.position.y + a.radius : b.position.y + b.radius,
                    radius: a.isCircle ? a.radius : b.radius
                };
                j.y < i.y ? j.x < i.x ? h = c.Math.distance(j.x, j.y, i.x, i.y) - j.radius : j.x > i.right && (h = c.Math.distance(j.x, j.y, i.right, i.y) - j.radius) : j.y > i.bottom && (j.x < i.x ? h = c.Math.distance(j.x, j.y, i.x, i.bottom) - j.radius : j.x > i.right && (h = c.Math.distance(j.x, j.y, i.right, i.bottom) - j.radius)), h *= -1
            } else h = a.radius + b.radius - c.Math.distance(a.center.x, a.center.y, b.center.x, b.center.y);
            if (d || 0 === h || a.immovable && b.immovable || a.customSeparateX || b.customSeparateX) return 0 !== h && (a.onOverlap && a.onOverlap.dispatch(a.sprite, b.sprite), b.onOverlap && b.onOverlap.dispatch(b.sprite, a.sprite)), 0 !== h;
            var k = {
                    x: a.velocity.x * Math.cos(g) + a.velocity.y * Math.sin(g),
                    y: a.velocity.x * Math.sin(g) - a.velocity.y * Math.cos(g)
                }, l = {
                    x: b.velocity.x * Math.cos(g) + b.velocity.y * Math.sin(g),
                    y: b.velocity.x * Math.sin(g) - b.velocity.y * Math.cos(g)
                }, m = ((a.mass - b.mass) * k.x + 2 * b.mass * l.x) / (a.mass + b.mass),
                n = (2 * a.mass * k.x + (b.mass - a.mass) * l.x) / (a.mass + b.mass);
            return a.immovable || (a.velocity.x = (m * Math.cos(g) - k.y * Math.sin(g)) * a.bounce.x, a.velocity.y = (k.y * Math.cos(g) + m * Math.sin(g)) * a.bounce.y), b.immovable || (b.velocity.x = (n * Math.cos(g) - l.y * Math.sin(g)) * b.bounce.x, b.velocity.y = (l.y * Math.cos(g) + n * Math.sin(g)) * b.bounce.y), Math.abs(g) < Math.PI / 2 ? a.velocity.x > 0 && !a.immovable && b.velocity.x > a.velocity.x ? a.velocity.x *= -1 : b.velocity.x < 0 && !b.immovable && a.velocity.x < b.velocity.x ? b.velocity.x *= -1 : a.velocity.y > 0 && !a.immovable && b.velocity.y > a.velocity.y ? a.velocity.y *= -1 : b.velocity.y < 0 && !b.immovable && a.velocity.y < b.velocity.y && (b.velocity.y *= -1) : Math.abs(g) > Math.PI / 2 && (a.velocity.x < 0 && !a.immovable && b.velocity.x < a.velocity.x ? a.velocity.x *= -1 : b.velocity.x > 0 && !b.immovable && a.velocity.x > b.velocity.x ? b.velocity.x *= -1 : a.velocity.y < 0 && !a.immovable && b.velocity.y < a.velocity.y ? a.velocity.y *= -1 : b.velocity.y > 0 && !b.immovable && a.velocity.x > b.velocity.y && (b.velocity.y *= -1)), a.immovable || (a.x += a.velocity.x * this.game.time.physicsElapsed - h * Math.cos(g), a.y += a.velocity.y * this.game.time.physicsElapsed - h * Math.sin(g)), b.immovable || (b.x += b.velocity.x * this.game.time.physicsElapsed + h * Math.cos(g), b.y += b.velocity.y * this.game.time.physicsElapsed + h * Math.sin(g)), a.onCollide && a.onCollide.dispatch(a.sprite, b.sprite), b.onCollide && b.onCollide.dispatch(b.sprite, a.sprite), !0
        }, getOverlapX: function (a, b, c) {
            var d = 0, e = a.deltaAbsX() + b.deltaAbsX() + this.OVERLAP_BIAS;
            return 0 === a.deltaX() && 0 === b.deltaX() ? (a.embedded = !0, b.embedded = !0) : a.deltaX() > b.deltaX() ? (d = a.right - b.x, d > e && !c || a.checkCollision.right === !1 || b.checkCollision.left === !1 ? d = 0 : (a.touching.none = !1, a.touching.right = !0, b.touching.none = !1, b.touching.left = !0)) : a.deltaX() < b.deltaX() && (d = a.x - b.width - b.x, -d > e && !c || a.checkCollision.left === !1 || b.checkCollision.right === !1 ? d = 0 : (a.touching.none = !1, a.touching.left = !0, b.touching.none = !1, b.touching.right = !0)), a.overlapX = d, b.overlapX = d, d
        }, getOverlapY: function (a, b, c) {
            var d = 0, e = a.deltaAbsY() + b.deltaAbsY() + this.OVERLAP_BIAS;
            return 0 === a.deltaY() && 0 === b.deltaY() ? (a.embedded = !0, b.embedded = !0) : a.deltaY() > b.deltaY() ? (d = a.bottom - b.y, d > e && !c || a.checkCollision.down === !1 || b.checkCollision.up === !1 ? d = 0 : (a.touching.none = !1, a.touching.down = !0, b.touching.none = !1, b.touching.up = !0)) : a.deltaY() < b.deltaY() && (d = a.y - b.bottom, -d > e && !c || a.checkCollision.up === !1 || b.checkCollision.down === !1 ? d = 0 : (a.touching.none = !1, a.touching.up = !0, b.touching.none = !1, b.touching.down = !0)), a.overlapY = d, b.overlapY = d, d
        }, separateX: function (a, b, c) {
            var d = this.getOverlapX(a, b, c);
            if (c || 0 === d || a.immovable && b.immovable || a.customSeparateX || b.customSeparateX) return 0 !== d || a.embedded && b.embedded;
            var e = a.velocity.x, f = b.velocity.x;
            if (a.immovable || b.immovable) a.immovable ? (b.x += d, b.velocity.x = e - f * b.bounce.x, a.moves && (b.y += (a.y - a.prev.y) * a.friction.y)) : (a.x -= d, a.velocity.x = f - e * a.bounce.x, b.moves && (a.y += (b.y - b.prev.y) * b.friction.y)); else {
                d *= .5, a.x -= d, b.x += d;
                var g = Math.sqrt(f * f * b.mass / a.mass) * (f > 0 ? 1 : -1),
                    h = Math.sqrt(e * e * a.mass / b.mass) * (e > 0 ? 1 : -1), i = .5 * (g + h);
                g -= i, h -= i, a.velocity.x = i + g * a.bounce.x, b.velocity.x = i + h * b.bounce.x
            }
            return !0
        }, separateY: function (a, b, c) {
            var d = this.getOverlapY(a, b, c);
            if (c || 0 === d || a.immovable && b.immovable || a.customSeparateY || b.customSeparateY) return 0 !== d || a.embedded && b.embedded;
            var e = a.velocity.y, f = b.velocity.y;
            if (a.immovable || b.immovable) a.immovable ? (b.y += d, b.velocity.y = e - f * b.bounce.y, a.moves && (b.x += (a.x - a.prev.x) * a.friction.x)) : (a.y -= d, a.velocity.y = f - e * a.bounce.y, b.moves && (a.x += (b.x - b.prev.x) * b.friction.x)); else {
                d *= .5, a.y -= d, b.y += d;
                var g = Math.sqrt(f * f * b.mass / a.mass) * (f > 0 ? 1 : -1),
                    h = Math.sqrt(e * e * a.mass / b.mass) * (e > 0 ? 1 : -1), i = .5 * (g + h);
                g -= i, h -= i, a.velocity.y = i + g * a.bounce.y, b.velocity.y = i + h * b.bounce.y
            }
            return !0
        }, getObjectsUnderPointer: function (a, b, c, d) {
            if (0 !== b.length && a.exists) return this.getObjectsAtLocation(a.x, a.y, b, c, d, a)
        }, getObjectsAtLocation: function (a, b, d, e, f, g) {
            this.quadTree.clear(), this.quadTree.reset(this.game.world.bounds.x, this.game.world.bounds.y, this.game.world.bounds.width, this.game.world.bounds.height, this.maxObjects, this.maxLevels), this.quadTree.populate(d);
            for (var h = new c.Rectangle(a, b, 1, 1), i = [], j = this.quadTree.retrieve(h), k = 0; k < j.length; k++) j[k].hitTest(a, b) && (e && e.call(f, g, j[k].sprite), i.push(j[k].sprite));
            return i
        }, moveToObject: function (a, b, c, d) {
            void 0 === c && (c = 60), void 0 === d && (d = 0);
            var e = Math.atan2(b.y - a.y, b.x - a.x);
            return d > 0 && (c = this.distanceBetween(a, b) / (d / 1e3)), a.body.velocity.x = Math.cos(e) * c, a.body.velocity.y = Math.sin(e) * c, e
        }, moveToPointer: function (a, b, c, d) {
            void 0 === b && (b = 60), c = c || this.game.input.activePointer, void 0 === d && (d = 0);
            var e = this.angleToPointer(a, c);
            return d > 0 && (b = this.distanceToPointer(a, c) / (d / 1e3)), a.body.velocity.x = Math.cos(e) * b, a.body.velocity.y = Math.sin(e) * b, e
        }, moveToXY: function (a, b, c, d, e) {
            void 0 === d && (d = 60), void 0 === e && (e = 0);
            var f = Math.atan2(c - a.y, b - a.x);
            return e > 0 && (d = this.distanceToXY(a, b, c) / (e / 1e3)), a.body.velocity.x = Math.cos(f) * d, a.body.velocity.y = Math.sin(f) * d, f
        }, velocityFromAngle: function (a, b, d) {
            return void 0 === b && (b = 60), d = d || new c.Point, d.setTo(Math.cos(this.game.math.degToRad(a)) * b, Math.sin(this.game.math.degToRad(a)) * b)
        }, velocityFromRotation: function (a, b, d) {
            return void 0 === b && (b = 60), d = d || new c.Point, d.setTo(Math.cos(a) * b, Math.sin(a) * b)
        }, accelerationFromRotation: function (a, b, d) {
            return void 0 === b && (b = 60), d = d || new c.Point, d.setTo(Math.cos(a) * b, Math.sin(a) * b)
        }, accelerateToObject: function (a, b, c, d, e) {
            void 0 === c && (c = 60), void 0 === d && (d = 1e3), void 0 === e && (e = 1e3);
            var f = this.angleBetween(a, b);
            return a.body.acceleration.setTo(Math.cos(f) * c, Math.sin(f) * c), a.body.maxVelocity.setTo(d, e), f
        }, accelerateToPointer: function (a, b, c, d, e) {
            void 0 === c && (c = 60), void 0 === b && (b = this.game.input.activePointer), void 0 === d && (d = 1e3), void 0 === e && (e = 1e3);
            var f = this.angleToPointer(a, b);
            return a.body.acceleration.setTo(Math.cos(f) * c, Math.sin(f) * c), a.body.maxVelocity.setTo(d, e), f
        }, accelerateToXY: function (a, b, c, d, e, f) {
            void 0 === d && (d = 60), void 0 === e && (e = 1e3), void 0 === f && (f = 1e3);
            var g = this.angleToXY(a, b, c);
            return a.body.acceleration.setTo(Math.cos(g) * d, Math.sin(g) * d), a.body.maxVelocity.setTo(e, f), g
        }, distanceBetween: function (a, b, c) {
            void 0 === c && (c = !1);
            var d = c ? a.world.x - b.world.x : a.x - b.x, e = c ? a.world.y - b.world.y : a.y - b.y;
            return Math.sqrt(d * d + e * e)
        }, distanceToXY: function (a, b, c, d) {
            void 0 === d && (d = !1);
            var e = d ? a.world.x - b : a.x - b, f = d ? a.world.y - c : a.y - c;
            return Math.sqrt(e * e + f * f)
        }, distanceToPointer: function (a, b, c) {
            void 0 === b && (b = this.game.input.activePointer), void 0 === c && (c = !1);
            var d = c ? a.world.x - b.worldX : a.x - b.worldX, e = c ? a.world.y - b.worldY : a.y - b.worldY;
            return Math.sqrt(d * d + e * e)
        }, angleBetween: function (a, b, c) {
            return void 0 === c && (c = !1), c ? Math.atan2(b.world.y - a.world.y, b.world.x - a.world.x) : Math.atan2(b.y - a.y, b.x - a.x)
        }, angleBetweenCenters: function (a, b) {
            var c = b.centerX - a.centerX, d = b.centerY - a.centerY;
            return Math.atan2(d, c)
        }, angleToXY: function (a, b, c, d) {
            return void 0 === d && (d = !1), d ? Math.atan2(c - a.world.y, b - a.world.x) : Math.atan2(c - a.y, b - a.x)
        }, angleToPointer: function (a, b, c) {
            return void 0 === b && (b = this.game.input.activePointer), void 0 === c && (c = !1), c ? Math.atan2(b.worldY - a.world.y, b.worldX - a.world.x) : Math.atan2(b.worldY - a.y, b.worldX - a.x)
        }, worldAngleToPointer: function (a, b) {
            return this.angleToPointer(a, b, !0)
        }
    },c.Physics.Arcade.Body = function (a) {
        this.sprite = a, this.game = a.game, this.type = c.Physics.ARCADE, this.enable = !0, this.isCircle = !1, this.radius = 0, this.offset = new c.Point, this.position = new c.Point(a.x, a.y), this.prev = new c.Point(this.position.x, this.position.y), this.allowRotation = !0, this.rotation = a.angle, this.preRotation = a.angle, this.width = a.width, this.height = a.height, this.sourceWidth = a.width, this.sourceHeight = a.height, a.texture && (this.sourceWidth = a.texture.frame.width, this.sourceHeight = a.texture.frame.height), this.halfWidth = Math.abs(a.width / 2), this.halfHeight = Math.abs(a.height / 2), this.center = new c.Point(a.x + this.halfWidth, a.y + this.halfHeight), this.velocity = new c.Point, this.newVelocity = new c.Point, this.deltaMax = new c.Point, this.acceleration = new c.Point, this.drag = new c.Point, this.allowGravity = !0, this.gravity = new c.Point, this.bounce = new c.Point, this.worldBounce = null, this.onWorldBounds = null, this.onCollide = null, this.onOverlap = null, this.maxVelocity = new c.Point(1e4, 1e4), this.friction = new c.Point(1, 0), this.angularVelocity = 0, this.angularAcceleration = 0, this.angularDrag = 0, this.maxAngular = 1e3, this.mass = 1, this.angle = 0, this.speed = 0, this.facing = c.NONE, this.immovable = !1, this.moves = !0, this.customSeparateX = !1, this.customSeparateY = !1, this.overlapX = 0, this.overlapY = 0, this.overlapR = 0, this.embedded = !1, this.collideWorldBounds = !1, this.checkCollision = {
            none: !1,
            any: !0,
            up: !0,
            down: !0,
            left: !0,
            right: !0
        }, this.touching = {none: !0, up: !1, down: !1, left: !1, right: !1}, this.wasTouching = {
            none: !0,
            up: !1,
            down: !1,
            left: !1,
            right: !1
        }, this.blocked = {
            up: !1,
            down: !1,
            left: !1,
            right: !1
        }, this.tilePadding = new c.Point, this.dirty = !1, this.skipQuadTree = !1, this.syncBounds = !1, this.isMoving = !1, this.stopVelocityOnCollide = !0, this.moveTimer = 0, this.moveDistance = 0, this.moveDuration = 0, this.moveTarget = null, this.moveEnd = null, this.onMoveComplete = new c.Signal, this.movementCallback = null, this.movementCallbackContext = null, this._reset = !0, this._sx = a.scale.x, this._sy = a.scale.y, this._dx = 0, this._dy = 0
    },c.Physics.Arcade.Body.prototype = {
        updateBounds: function () {
            if (this.syncBounds) {
                var a = this.sprite.getBounds();
                a.ceilAll(), a.width === this.width && a.height === this.height || (this.width = a.width, this.height = a.height, this._reset = !0)
            } else {
                var b = Math.abs(this.sprite.scale.x), c = Math.abs(this.sprite.scale.y);
                b === this._sx && c === this._sy || (this.width = this.sourceWidth * b, this.height = this.sourceHeight * c, this._sx = b, this._sy = c, this._reset = !0)
            }
            this._reset && (this.halfWidth = Math.floor(this.width / 2), this.halfHeight = Math.floor(this.height / 2), this.center.setTo(this.position.x + this.halfWidth, this.position.y + this.halfHeight))
        }, preUpdate: function () {
            this.enable && !this.game.physics.arcade.isPaused && (this.dirty = !0, this.wasTouching.none = this.touching.none, this.wasTouching.up = this.touching.up, this.wasTouching.down = this.touching.down, this.wasTouching.left = this.touching.left, this.wasTouching.right = this.touching.right, this.touching.none = !0, this.touching.up = !1, this.touching.down = !1, this.touching.left = !1, this.touching.right = !1, this.blocked.up = !1, this.blocked.down = !1, this.blocked.left = !1, this.blocked.right = !1, this.embedded = !1, this.updateBounds(), this.position.x = this.sprite.world.x - this.sprite.anchor.x * this.sprite.width + this.sprite.scale.x * this.offset.x, this.position.x -= this.sprite.scale.x < 0 ? this.width : 0, this.position.y = this.sprite.world.y - this.sprite.anchor.y * this.sprite.height + this.sprite.scale.y * this.offset.y, this.position.y -= this.sprite.scale.y < 0 ? this.height : 0, this.rotation = this.sprite.angle, this.preRotation = this.rotation, (this._reset || this.sprite.fresh) && (this.prev.x = this.position.x, this.prev.y = this.position.y), this.moves && (this.game.physics.arcade.updateMotion(this), this.newVelocity.set(this.velocity.x * this.game.time.physicsElapsed, this.velocity.y * this.game.time.physicsElapsed), this.position.x += this.newVelocity.x, this.position.y += this.newVelocity.y, this.position.x === this.prev.x && this.position.y === this.prev.y || (this.angle = Math.atan2(this.velocity.y, this.velocity.x)), this.speed = Math.sqrt(this.velocity.x * this.velocity.x + this.velocity.y * this.velocity.y), this.collideWorldBounds && this.checkWorldBounds() && this.onWorldBounds && this.onWorldBounds.dispatch(this.sprite, this.blocked.up, this.blocked.down, this.blocked.left, this.blocked.right)), this._dx = this.deltaX(), this._dy = this.deltaY(), this._reset = !1)
        }, updateMovement: function () {
            var a = 0, b = 0 !== this.overlapX || 0 !== this.overlapY;
            if (this.moveDuration > 0 ? (this.moveTimer += this.game.time.elapsedMS, a = this.moveTimer / this.moveDuration) : (this.moveTarget.end.set(this.position.x, this.position.y), a = this.moveTarget.length / this.moveDistance), this.movementCallback) var c = this.movementCallback.call(this.movementCallbackContext, this, this.velocity, a);
            return !(b || a >= 1 || void 0 !== c && c !== !0) || (this.stopMovement(a >= 1 || this.stopVelocityOnCollide && b), !1)
        }, stopMovement: function (a) {
            this.isMoving && (this.isMoving = !1, a && this.velocity.set(0), this.onMoveComplete.dispatch(this.sprite, 0 !== this.overlapX || 0 !== this.overlapY))
        }, postUpdate: function () {
            this.enable && this.dirty && (this.isMoving && this.updateMovement(), this.dirty = !1, this.deltaX() < 0 ? this.facing = c.LEFT : this.deltaX() > 0 && (this.facing = c.RIGHT), this.deltaY() < 0 ? this.facing = c.UP : this.deltaY() > 0 && (this.facing = c.DOWN), this.moves && (this._dx = this.deltaX(), this._dy = this.deltaY(), 0 !== this.deltaMax.x && 0 !== this._dx && (this._dx < 0 && this._dx < -this.deltaMax.x ? this._dx = -this.deltaMax.x : this._dx > 0 && this._dx > this.deltaMax.x && (this._dx = this.deltaMax.x)), 0 !== this.deltaMax.y && 0 !== this._dy && (this._dy < 0 && this._dy < -this.deltaMax.y ? this._dy = -this.deltaMax.y : this._dy > 0 && this._dy > this.deltaMax.y && (this._dy = this.deltaMax.y)), this.sprite.position.x += this._dx, this.sprite.position.y += this._dy, this._reset = !0), this.center.setTo(this.position.x + this.halfWidth, this.position.y + this.halfHeight), this.allowRotation && (this.sprite.angle += this.deltaZ()), this.prev.x = this.position.x, this.prev.y = this.position.y)
        }, checkWorldBounds: function () {
            var a = this.position, b = this.game.physics.arcade.bounds, c = this.game.physics.arcade.checkCollision,
                d = this.worldBounce ? -this.worldBounce.x : -this.bounce.x,
                e = this.worldBounce ? -this.worldBounce.y : -this.bounce.y;
            if (this.isCircle) {
                var f = {
                    x: this.center.x - this.radius,
                    y: this.center.y - this.radius,
                    right: this.center.x + this.radius,
                    bottom: this.center.y + this.radius
                };
                f.x < b.x && c.left ? (a.x = b.x - this.halfWidth + this.radius, this.velocity.x *= d, this.blocked.left = !0) : f.right > b.right && c.right && (a.x = b.right - this.halfWidth - this.radius, this.velocity.x *= d, this.blocked.right = !0), f.y < b.y && c.up ? (a.y = b.y - this.halfHeight + this.radius, this.velocity.y *= e, this.blocked.up = !0) : f.bottom > b.bottom && c.down && (a.y = b.bottom - this.halfHeight - this.radius, this.velocity.y *= e, this.blocked.down = !0)
            } else a.x < b.x && c.left ? (a.x = b.x, this.velocity.x *= d, this.blocked.left = !0) : this.right > b.right && c.right && (a.x = b.right - this.width, this.velocity.x *= d, this.blocked.right = !0), a.y < b.y && c.up ? (a.y = b.y, this.velocity.y *= e, this.blocked.up = !0) : this.bottom > b.bottom && c.down && (a.y = b.bottom - this.height, this.velocity.y *= e, this.blocked.down = !0);
            return this.blocked.up || this.blocked.down || this.blocked.left || this.blocked.right
        }, moveFrom: function (a, b, c) {
            if (void 0 === b && (b = this.speed), 0 === b) return !1;
            var d;
            return void 0 === c ? (d = this.angle, c = this.game.math.radToDeg(d)) : d = this.game.math.degToRad(c), this.moveTimer = 0, this.moveDuration = a, 0 === c || 180 === c ? this.velocity.set(Math.cos(d) * b, 0) : 90 === c || 270 === c ? this.velocity.set(0, Math.sin(d) * b) : this.velocity.set(Math.cos(d) * b, Math.sin(d) * b), this.isMoving = !0, !0
        }, moveTo: function (a, b, d) {
            var e = b / (a / 1e3);
            if (0 === e) return !1;
            var f;
            return void 0 === d ? (f = this.angle, d = this.game.math.radToDeg(f)) : f = this.game.math.degToRad(d), b = Math.abs(b), this.moveDuration = 0, this.moveDistance = b, null === this.moveTarget && (this.moveTarget = new c.Line, this.moveEnd = new c.Point), this.moveTarget.fromAngle(this.x, this.y, f, b), this.moveEnd.set(this.moveTarget.end.x, this.moveTarget.end.y), this.moveTarget.setTo(this.x, this.y, this.x, this.y), 0 === d || 180 === d ? this.velocity.set(Math.cos(f) * e, 0) : 90 === d || 270 === d ? this.velocity.set(0, Math.sin(f) * e) : this.velocity.set(Math.cos(f) * e, Math.sin(f) * e), this.isMoving = !0, !0
        }, setSize: function (a, b, c, d) {
            void 0 === c && (c = this.offset.x), void 0 === d && (d = this.offset.y), this.sourceWidth = a, this.sourceHeight = b, this.width = this.sourceWidth * this._sx, this.height = this.sourceHeight * this._sy, this.halfWidth = Math.floor(this.width / 2), this.halfHeight = Math.floor(this.height / 2), this.offset.setTo(c, d), this.center.setTo(this.position.x + this.halfWidth, this.position.y + this.halfHeight), this.isCircle = !1, this.radius = 0
        }, setCircle: function (a, b, c) {
            void 0 === b && (b = this.offset.x), void 0 === c && (c = this.offset.y), a > 0 ? (this.isCircle = !0, this.radius = a, this.sourceWidth = 2 * a, this.sourceHeight = 2 * a, this.width = this.sourceWidth * this._sx, this.height = this.sourceHeight * this._sy, this.halfWidth = Math.floor(this.width / 2), this.halfHeight = Math.floor(this.height / 2), this.offset.setTo(b, c), this.center.setTo(this.position.x + this.halfWidth, this.position.y + this.halfHeight)) : this.isCircle = !1
        }, reset: function (a, b) {
            this.velocity.set(0), this.acceleration.set(0), this.speed = 0, this.angularVelocity = 0, this.angularAcceleration = 0, this.position.x = a - this.sprite.anchor.x * this.sprite.width + this.sprite.scale.x * this.offset.x, this.position.x -= this.sprite.scale.x < 0 ? this.width : 0, this.position.y = b - this.sprite.anchor.y * this.sprite.height + this.sprite.scale.y * this.offset.y, this.position.y -= this.sprite.scale.y < 0 ? this.height : 0, this.prev.x = this.position.x, this.prev.y = this.position.y, this.rotation = this.sprite.angle, this.preRotation = this.rotation, this._sx = this.sprite.scale.x, this._sy = this.sprite.scale.y, this.center.setTo(this.position.x + this.halfWidth, this.position.y + this.halfHeight)
        }, getBounds: function (a) {
            return this.isCircle ? (a.x = this.center.x - this.radius, a.y = this.center.y - this.radius, a.right = this.center.x + this.radius, a.bottom = this.center.y + this.radius) : (a.x = this.x, a.y = this.y, a.right = this.right, a.bottom = this.bottom), a
        }, hitTest: function (a, b) {
            return this.isCircle ? c.Circle.contains(this, a, b) : c.Rectangle.contains(this, a, b)
        }, onFloor: function () {
            return this.blocked.down
        }, onCeiling: function () {
            return this.blocked.up
        }, onWall: function () {
            return this.blocked.left || this.blocked.right
        }, deltaAbsX: function () {
            return this.deltaX() > 0 ? this.deltaX() : -this.deltaX()
        }, deltaAbsY: function () {
            return this.deltaY() > 0 ? this.deltaY() : -this.deltaY()
        }, deltaX: function () {
            return this.position.x - this.prev.x
        }, deltaY: function () {
            return this.position.y - this.prev.y
        }, deltaZ: function () {
            return this.rotation - this.preRotation
        }, destroy: function () {
            this.sprite.parent && this.sprite.parent instanceof c.Group && this.sprite.parent.removeFromHash(this.sprite), this.sprite.body = null, this.sprite = null
        }
    },Object.defineProperty(c.Physics.Arcade.Body.prototype, "left", {
        get: function () {
            return this.position.x
        }
    }),Object.defineProperty(c.Physics.Arcade.Body.prototype, "right", {
        get: function () {
            return this.position.x + this.width
        }
    }),Object.defineProperty(c.Physics.Arcade.Body.prototype, "top", {
        get: function () {
            return this.position.y
        }
    }),Object.defineProperty(c.Physics.Arcade.Body.prototype, "bottom", {
        get: function () {
            return this.position.y + this.height
        }
    }),Object.defineProperty(c.Physics.Arcade.Body.prototype, "x", {
        get: function () {
            return this.position.x
        }, set: function (a) {
            this.position.x = a
        }
    }),Object.defineProperty(c.Physics.Arcade.Body.prototype, "y", {
        get: function () {
            return this.position.y
        }, set: function (a) {
            this.position.y = a
        }
    }),c.Physics.Arcade.Body.render = function (a, b, c, d) {
        void 0 === d && (d = !0), c = c || "rgba(0,255,0,0.4)", a.fillStyle = c, a.strokeStyle = c, b.isCircle ? (a.beginPath(), a.arc(b.center.x - b.game.camera.x, b.center.y - b.game.camera.y, b.radius, 0, 2 * Math.PI), d ? a.fill() : a.stroke()) : d ? a.fillRect(b.position.x - b.game.camera.x, b.position.y - b.game.camera.y, b.width, b.height) : a.strokeRect(b.position.x - b.game.camera.x, b.position.y - b.game.camera.y, b.width, b.height)
    },c.Physics.Arcade.Body.renderBodyInfo = function (a, b) {
        a.line("x: " + b.x.toFixed(2), "y: " + b.y.toFixed(2), "width: " + b.width, "height: " + b.height), a.line("velocity x: " + b.velocity.x.toFixed(2), "y: " + b.velocity.y.toFixed(2), "deltaX: " + b._dx.toFixed(2), "deltaY: " + b._dy.toFixed(2)), a.line("acceleration x: " + b.acceleration.x.toFixed(2), "y: " + b.acceleration.y.toFixed(2), "speed: " + b.speed.toFixed(2), "angle: " + b.angle.toFixed(2)), a.line("gravity x: " + b.gravity.x, "y: " + b.gravity.y, "bounce x: " + b.bounce.x.toFixed(2), "y: " + b.bounce.y.toFixed(2)), a.line("touching left: " + b.touching.left, "right: " + b.touching.right, "up: " + b.touching.up, "down: " + b.touching.down), a.line("blocked left: " + b.blocked.left, "right: " + b.blocked.right, "up: " + b.blocked.up, "down: " + b.blocked.down)
    },c.Physics.Arcade.Body.prototype.constructor = c.Physics.Arcade.Body,c.Physics.Arcade.TilemapCollision = function () {
    },c.Physics.Arcade.TilemapCollision.prototype = {
        TILE_BIAS: 16, collideSpriteVsTilemapLayer: function (a, b, c, d, e, f) {
            if (a.body) {
                var g = b.getTiles(a.body.position.x - a.body.tilePadding.x, a.body.position.y - a.body.tilePadding.y, a.body.width + a.body.tilePadding.x, a.body.height + a.body.tilePadding.y, !1, !1);
                if (0 !== g.length) for (var h = 0; h < g.length; h++) d ? d.call(e, a, g[h]) && this.separateTile(h, a.body, g[h], b, f) && (this._total++, c && c.call(e, a, g[h])) : this.separateTile(h, a.body, g[h], b, f) && (this._total++, c && c.call(e, a, g[h]))
            }
        }, collideGroupVsTilemapLayer: function (a, b, c, d, e, f) {
            if (0 !== a.length) for (var g = 0; g < a.children.length; g++) a.children[g].exists && this.collideSpriteVsTilemapLayer(a.children[g], b, c, d, e, f)
        }, separateTile: function (a, b, c, d, e) {
            if (!b.enable) return !1;
            var f = d.fixedToCamera ? 0 : d.position.x, g = d.fixedToCamera ? 0 : d.position.y;
            if (!c.intersects(b.position.x - f, b.position.y - g, b.right - f, b.bottom - g)) return !1;
            if (e) return !0;
            if (c.collisionCallback && !c.collisionCallback.call(c.collisionCallbackContext, b.sprite, c)) return !1;
            if ("undefined" != typeof c.layer.callbacks && c.layer.callbacks[c.index] && !c.layer.callbacks[c.index].callback.call(c.layer.callbacks[c.index].callbackContext, b.sprite, c)) return !1;
            if (!(c.faceLeft || c.faceRight || c.faceTop || c.faceBottom)) return !1;
            var h = 0, i = 0, j = 0, k = 1;
            if (b.deltaAbsX() > b.deltaAbsY() ? j = -1 : b.deltaAbsX() < b.deltaAbsY() && (k = -1), 0 !== b.deltaX() && 0 !== b.deltaY() && (c.faceLeft || c.faceRight) && (c.faceTop || c.faceBottom) && (j = Math.min(Math.abs(b.position.x - f - c.right), Math.abs(b.right - f - c.left)), k = Math.min(Math.abs(b.position.y - g - c.bottom), Math.abs(b.bottom - g - c.top))), j < k) {
                if ((c.faceLeft || c.faceRight) && (h = this.tileCheckX(b, c, d), 0 !== h && !c.intersects(b.position.x - f, b.position.y - g, b.right - f, b.bottom - g))) return !0;
                (c.faceTop || c.faceBottom) && (i = this.tileCheckY(b, c, d))
            } else {
                if ((c.faceTop || c.faceBottom) && (i = this.tileCheckY(b, c, d), 0 !== i && !c.intersects(b.position.x - f, b.position.y - g, b.right - f, b.bottom - g))) return !0;
                (c.faceLeft || c.faceRight) && (h = this.tileCheckX(b, c, d))
            }
            return 0 !== h || 0 !== i
        }, tileCheckX: function (a, b, c) {
            var d = 0, e = c.fixedToCamera ? 0 : c.position.x;
            return a.deltaX() < 0 && !a.blocked.left && b.collideRight && a.checkCollision.left ? b.faceRight && a.x - e < b.right && (d = a.x - e - b.right, d < -this.TILE_BIAS && (d = 0)) : a.deltaX() > 0 && !a.blocked.right && b.collideLeft && a.checkCollision.right && b.faceLeft && a.right - e > b.left && (d = a.right - e - b.left, d > this.TILE_BIAS && (d = 0)), 0 !== d && (a.customSeparateX ? a.overlapX = d : this.processTileSeparationX(a, d)), d
        }, tileCheckY: function (a, b, c) {
            var d = 0, e = c.fixedToCamera ? 0 : c.position.y;
            return a.deltaY() < 0 && !a.blocked.up && b.collideDown && a.checkCollision.up ? b.faceBottom && a.y - e < b.bottom && (d = a.y - e - b.bottom, d < -this.TILE_BIAS && (d = 0)) : a.deltaY() > 0 && !a.blocked.down && b.collideUp && a.checkCollision.down && b.faceTop && a.bottom - e > b.top && (d = a.bottom - e - b.top, d > this.TILE_BIAS && (d = 0)), 0 !== d && (a.customSeparateY ? a.overlapY = d : this.processTileSeparationY(a, d)), d
        }, processTileSeparationX: function (a, b) {
            b < 0 ? a.blocked.left = !0 : b > 0 && (a.blocked.right = !0), a.position.x -= b, 0 === a.bounce.x ? a.velocity.x = 0 : a.velocity.x = -a.velocity.x * a.bounce.x
        }, processTileSeparationY: function (a, b) {
            b < 0 ? a.blocked.up = !0 : b > 0 && (a.blocked.down = !0), a.position.y -= b, 0 === a.bounce.y ? a.velocity.y = 0 : a.velocity.y = -a.velocity.y * a.bounce.y
        }
    },c.Utils.mixinPrototype(c.Physics.Arcade.prototype, c.Physics.Arcade.TilemapCollision.prototype),p2.Body.prototype.parent = null,p2.Spring.prototype.parent = null,c.Physics.P2 = function (a, b) {
        this.game = a, void 0 === b ? b = {
            gravity: [0, 0],
            broadphase: new p2.SAPBroadphase
        } : (b.hasOwnProperty("gravity") || (b.gravity = [0, 0]), b.hasOwnProperty("broadphase") || (b.broadphase = new p2.SAPBroadphase)), this.config = b, this.world = new p2.World(this.config), this.frameRate = 1 / 60, this.useElapsedTime = !1, this.paused = !1, this.materials = [], this.gravity = new c.Physics.P2.InversePointProxy(this, this.world.gravity), this.walls = {
            left: null,
            right: null,
            top: null,
            bottom: null
        }, this.onBodyAdded = new c.Signal, this.onBodyRemoved = new c.Signal, this.onSpringAdded = new c.Signal, this.onSpringRemoved = new c.Signal, this.onConstraintAdded = new c.Signal, this.onConstraintRemoved = new c.Signal, this.onContactMaterialAdded = new c.Signal, this.onContactMaterialRemoved = new c.Signal, this.postBroadphaseCallback = null, this.callbackContext = null, this.onBeginContact = new c.Signal, this.onEndContact = new c.Signal, b.hasOwnProperty("mpx") && b.hasOwnProperty("pxm") && b.hasOwnProperty("mpxi") && b.hasOwnProperty("pxmi") && (this.mpx = b.mpx, this.mpxi = b.mpxi, this.pxm = b.pxm, this.pxmi = b.pxmi), this.world.on("beginContact", this.beginContactHandler, this), this.world.on("endContact", this.endContactHandler, this), this.collisionGroups = [], this.nothingCollisionGroup = new c.Physics.P2.CollisionGroup(1), this.boundsCollisionGroup = new c.Physics.P2.CollisionGroup(2), this.everythingCollisionGroup = new c.Physics.P2.CollisionGroup(2147483648), this.boundsCollidesWith = [], this._toRemove = [], this._collisionGroupID = 2, this._boundsLeft = !0, this._boundsRight = !0, this._boundsTop = !0, this._boundsBottom = !0, this._boundsOwnGroup = !1, this.setBoundsToWorld(!0, !0, !0, !0, !1)
    },c.Physics.P2.prototype = {
        removeBodyNextStep: function (a) {
            this._toRemove.push(a)
        }, preUpdate: function () {
            for (var a = this._toRemove.length; a--;) this.removeBody(this._toRemove[a]);
            this._toRemove.length = 0
        }, enable: function (a, b, d) {
            void 0 === b && (b = !1), void 0 === d && (d = !0);
            var e = 1;
            if (Array.isArray(a)) for (e = a.length; e--;) a[e] instanceof c.Group ? this.enable(a[e].children, b, d) : (this.enableBody(a[e], b), d && a[e].hasOwnProperty("children") && a[e].children.length > 0 && this.enable(a[e], b, !0)); else a instanceof c.Group ? this.enable(a.children, b, d) : (this.enableBody(a, b), d && a.hasOwnProperty("children") && a.children.length > 0 && this.enable(a.children, b, !0))
        }, enableBody: function (a, b) {
            a.hasOwnProperty("body") && null === a.body && (a.body = new c.Physics.P2.Body(this.game, a, a.x, a.y, 1), a.body.debug = b, "undefined" != typeof a.anchor && a.anchor.set(.5))
        }, setImpactEvents: function (a) {
            a ? this.world.on("impact", this.impactHandler, this) : this.world.off("impact", this.impactHandler, this)
        }, setPostBroadphaseCallback: function (a, b) {
            this.postBroadphaseCallback = a, this.callbackContext = b, null !== a ? this.world.on("postBroadphase", this.postBroadphaseHandler, this) : this.world.off("postBroadphase", this.postBroadphaseHandler, this)
        }, postBroadphaseHandler: function (a) {
            if (this.postBroadphaseCallback && 0 !== a.pairs.length) for (var b = a.pairs.length - 2; b >= 0; b -= 2) a.pairs[b].parent && a.pairs[b + 1].parent && !this.postBroadphaseCallback.call(this.callbackContext, a.pairs[b].parent, a.pairs[b + 1].parent) && a.pairs.splice(b, 2)
        }, impactHandler: function (a) {
            if (a.bodyA.parent && a.bodyB.parent) {
                var b = a.bodyA.parent, c = a.bodyB.parent;
                b._bodyCallbacks[a.bodyB.id] && b._bodyCallbacks[a.bodyB.id].call(b._bodyCallbackContext[a.bodyB.id], b, c, a.shapeA, a.shapeB), c._bodyCallbacks[a.bodyA.id] && c._bodyCallbacks[a.bodyA.id].call(c._bodyCallbackContext[a.bodyA.id], c, b, a.shapeB, a.shapeA), b._groupCallbacks[a.shapeB.collisionGroup] && b._groupCallbacks[a.shapeB.collisionGroup].call(b._groupCallbackContext[a.shapeB.collisionGroup], b, c, a.shapeA, a.shapeB), c._groupCallbacks[a.shapeA.collisionGroup] && c._groupCallbacks[a.shapeA.collisionGroup].call(c._groupCallbackContext[a.shapeA.collisionGroup], c, b, a.shapeB, a.shapeA)
            }
        }, beginContactHandler: function (a) {
            a.bodyA && a.bodyB && (this.onBeginContact.dispatch(a.bodyA, a.bodyB, a.shapeA, a.shapeB, a.contactEquations), a.bodyA.parent && a.bodyA.parent.onBeginContact.dispatch(a.bodyB.parent, a.bodyB, a.shapeA, a.shapeB, a.contactEquations), a.bodyB.parent && a.bodyB.parent.onBeginContact.dispatch(a.bodyA.parent, a.bodyA, a.shapeB, a.shapeA, a.contactEquations))
        }, endContactHandler: function (a) {
            a.bodyA && a.bodyB && (this.onEndContact.dispatch(a.bodyA, a.bodyB, a.shapeA, a.shapeB), a.bodyA.parent && a.bodyA.parent.onEndContact.dispatch(a.bodyB.parent, a.bodyB, a.shapeA, a.shapeB), a.bodyB.parent && a.bodyB.parent.onEndContact.dispatch(a.bodyA.parent, a.bodyA, a.shapeB, a.shapeA))
        }, setBoundsToWorld: function (a, b, c, d, e) {
            this.setBounds(this.game.world.bounds.x, this.game.world.bounds.y, this.game.world.bounds.width, this.game.world.bounds.height, a, b, c, d, e)
        }, setWorldMaterial: function (a, b, c, d, e) {
            void 0 === b && (b = !0), void 0 === c && (c = !0), void 0 === d && (d = !0), void 0 === e && (e = !0), b && this.walls.left && (this.walls.left.shapes[0].material = a), c && this.walls.right && (this.walls.right.shapes[0].material = a), d && this.walls.top && (this.walls.top.shapes[0].material = a), e && this.walls.bottom && (this.walls.bottom.shapes[0].material = a)
        }, updateBoundsCollisionGroup: function (a) {
            void 0 === a && (a = !0);
            var b = a ? this.boundsCollisionGroup.mask : this.everythingCollisionGroup.mask;
            this.walls.left && (this.walls.left.shapes[0].collisionGroup = b), this.walls.right && (this.walls.right.shapes[0].collisionGroup = b), this.walls.top && (this.walls.top.shapes[0].collisionGroup = b), this.walls.bottom && (this.walls.bottom.shapes[0].collisionGroup = b), this._boundsOwnGroup = a
        }, setBounds: function (a, b, c, d, e, f, g, h, i) {
            void 0 === e && (e = this._boundsLeft), void 0 === f && (f = this._boundsRight), void 0 === g && (g = this._boundsTop), void 0 === h && (h = this._boundsBottom), void 0 === i && (i = this._boundsOwnGroup), this.setupWall(e, "left", a, b, 1.5707963267948966, i), this.setupWall(f, "right", a + c, b, -1.5707963267948966, i), this.setupWall(g, "top", a, b, -3.141592653589793, i), this.setupWall(h, "bottom", a, b + d, 0, i), this._boundsLeft = e, this._boundsRight = f, this._boundsTop = g, this._boundsBottom = h, this._boundsOwnGroup = i
        }, setupWall: function (a, b, c, d, e, f) {
            a ? (this.walls[b] ? this.walls[b].position = [this.pxmi(c), this.pxmi(d)] : (this.walls[b] = new p2.Body({
                mass: 0,
                position: [this.pxmi(c), this.pxmi(d)],
                angle: e
            }), this.walls[b].addShape(new p2.Plane), this.world.addBody(this.walls[b])), f && (this.walls[b].shapes[0].collisionGroup = this.boundsCollisionGroup.mask)) : this.walls[b] && (this.world.removeBody(this.walls[b]), this.walls[b] = null)
        }, pause: function () {
            this.paused = !0
        }, resume: function () {
            this.paused = !1
        }, update: function () {
            this.paused || (this.useElapsedTime ? this.world.step(this.game.time.physicsElapsed) : this.world.step(this.frameRate))
        }, reset: function () {
            this.world.on("beginContact", this.beginContactHandler, this), this.world.on("endContact", this.endContactHandler, this), this.nothingCollisionGroup = new c.Physics.P2.CollisionGroup(1), this.boundsCollisionGroup = new c.Physics.P2.CollisionGroup(2), this.everythingCollisionGroup = new c.Physics.P2.CollisionGroup(2147483648), this._collisionGroupID = 2, this.setBoundsToWorld(!0, !0, !0, !0, !1)
        }, clear: function () {
            this.world.time = 0, this.world.fixedStepTime = 0, this.world.solver && this.world.solver.equations.length && this.world.solver.removeAllEquations();
            for (var a = this.world.constraints, b = a.length - 1; b >= 0; b--) this.world.removeConstraint(a[b]);
            for (var c = this.world.bodies, b = c.length - 1; b >= 0; b--) this.world.removeBody(c[b]);
            for (var d = this.world.springs, b = d.length - 1; b >= 0; b--) this.world.removeSpring(d[b]);
            for (var e = this.world.contactMaterials, b = e.length - 1; b >= 0; b--) this.world.removeContactMaterial(e[b]);
            this.world.off("beginContact", this.beginContactHandler, this), this.world.off("endContact", this.endContactHandler, this), this.postBroadphaseCallback = null, this.callbackContext = null, this.impactCallback = null, this.collisionGroups = [], this._toRemove = [], this.boundsCollidesWith = [], this.walls = {
                left: null,
                right: null,
                top: null,
                bottom: null
            }
        }, destroy: function () {
            this.clear(), this.game = null
        }, addBody: function (a) {
            return !a.data.world && (this.world.addBody(a.data), this.onBodyAdded.dispatch(a), !0)
        }, removeBody: function (a) {
            return a.data.world === this.world && (this.world.removeBody(a.data), this.onBodyRemoved.dispatch(a)), a
        }, addSpring: function (a) {
            return a instanceof c.Physics.P2.Spring || a instanceof c.Physics.P2.RotationalSpring ? this.world.addSpring(a.data) : this.world.addSpring(a), this.onSpringAdded.dispatch(a), a
        }, removeSpring: function (a) {
            return a instanceof c.Physics.P2.Spring || a instanceof c.Physics.P2.RotationalSpring ? this.world.removeSpring(a.data) : this.world.removeSpring(a), this.onSpringRemoved.dispatch(a), a
        }, createDistanceConstraint: function (a, b, d, e, f, g) {
            return a = this.getBody(a), b = this.getBody(b), a && b ? this.addConstraint(new c.Physics.P2.DistanceConstraint(this, a, b, d, e, f, g)) : void console.warn("Cannot create Constraint, invalid body objects given")
        }, createGearConstraint: function (a, b, d, e) {
            return a = this.getBody(a), b = this.getBody(b), a && b ? this.addConstraint(new c.Physics.P2.GearConstraint(this, a, b, d, e)) : void console.warn("Cannot create Constraint, invalid body objects given")
        }, createRevoluteConstraint: function (a, b, d, e, f, g) {
            return a = this.getBody(a), d = this.getBody(d), a && d ? this.addConstraint(new c.Physics.P2.RevoluteConstraint(this, a, b, d, e, f, g)) : void console.warn("Cannot create Constraint, invalid body objects given")
        }, createLockConstraint: function (a, b, d, e, f) {
            return a = this.getBody(a), b = this.getBody(b), a && b ? this.addConstraint(new c.Physics.P2.LockConstraint(this, a, b, d, e, f)) : void console.warn("Cannot create Constraint, invalid body objects given")
        }, createPrismaticConstraint: function (a, b, d, e, f, g, h) {
            return a = this.getBody(a), b = this.getBody(b), a && b ? this.addConstraint(new c.Physics.P2.PrismaticConstraint(this, a, b, d, e, f, g, h)) : void console.warn("Cannot create Constraint, invalid body objects given")
        }, addConstraint: function (a) {
            return this.world.addConstraint(a), this.onConstraintAdded.dispatch(a), a
        }, removeConstraint: function (a) {
            return this.world.removeConstraint(a), this.onConstraintRemoved.dispatch(a), a
        }, addContactMaterial: function (a) {
            return this.world.addContactMaterial(a), this.onContactMaterialAdded.dispatch(a), a
        }, removeContactMaterial: function (a) {
            return this.world.removeContactMaterial(a), this.onContactMaterialRemoved.dispatch(a), a
        }, getContactMaterial: function (a, b) {
            return this.world.getContactMaterial(a, b)
        }, setMaterial: function (a, b) {
            for (var c = b.length; c--;) b[c].setMaterial(a)
        }, createMaterial: function (a, b) {
            a = a || "";
            var d = new c.Physics.P2.Material(a);
            return this.materials.push(d), "undefined" != typeof b && b.setMaterial(d), d
        }, createContactMaterial: function (a, b, d) {
            void 0 === a && (a = this.createMaterial()), void 0 === b && (b = this.createMaterial());
            var e = new c.Physics.P2.ContactMaterial(a, b, d);
            return this.addContactMaterial(e)
        }, getBodies: function () {
            for (var a = [], b = this.world.bodies.length; b--;) a.push(this.world.bodies[b].parent);
            return a
        }, getBody: function (a) {
            return a instanceof p2.Body ? a : a instanceof c.Physics.P2.Body ? a.data : a.body && a.body.type === c.Physics.P2JS ? a.body.data : null
        }, getSprings: function () {
            for (var a = [], b = this.world.springs.length; b--;) a.push(this.world.springs[b].parent);
            return a
        }, getConstraints: function () {
            for (var a = [], b = this.world.constraints.length; b--;) a.push(this.world.constraints[b]);
            return a
        }, hitTest: function (a, b, d, e) {
            void 0 === b && (b = this.world.bodies), void 0 === d && (d = 5), void 0 === e && (e = !1);
            for (var f = [this.pxmi(a.x), this.pxmi(a.y)], g = [], h = b.length; h--;) b[h] instanceof c.Physics.P2.Body && (!e || b[h].data.type !== p2.Body.STATIC) ? g.push(b[h].data) : b[h] instanceof p2.Body && b[h].parent && (!e || b[h].type !== p2.Body.STATIC) ? g.push(b[h]) : b[h] instanceof c.Sprite && b[h].hasOwnProperty("body") && (!e || b[h].body.data.type !== p2.Body.STATIC) && g.push(b[h].body.data);
            return this.world.hitTest(f, g, d)
        }, toJSON: function () {
            return this.world.toJSON()
        }, createCollisionGroup: function (a) {
            var b = Math.pow(2, this._collisionGroupID);
            this.walls.left && (this.walls.left.shapes[0].collisionMask = this.walls.left.shapes[0].collisionMask | b), this.walls.right && (this.walls.right.shapes[0].collisionMask = this.walls.right.shapes[0].collisionMask | b), this.walls.top && (this.walls.top.shapes[0].collisionMask = this.walls.top.shapes[0].collisionMask | b), this.walls.bottom && (this.walls.bottom.shapes[0].collisionMask = this.walls.bottom.shapes[0].collisionMask | b), this._collisionGroupID++;
            var d = new c.Physics.P2.CollisionGroup(b);
            return this.collisionGroups.push(d), a && this.setCollisionGroup(a, d), d
        }, setCollisionGroup: function (a, b) {
            if (a instanceof c.Group) for (var d = 0; d < a.total; d++) a.children[d].body && a.children[d].body.type === c.Physics.P2JS && a.children[d].body.setCollisionGroup(b); else a.body.setCollisionGroup(b)
        }, createSpring: function (a, b, d, e, f, g, h, i, j) {
            return a = this.getBody(a), b = this.getBody(b), a && b ? this.addSpring(new c.Physics.P2.Spring(this, a, b, d, e, f, g, h, i, j)) : void console.warn("Cannot create Spring, invalid body objects given")
        }, createRotationalSpring: function (a, b, d, e, f) {
            return a = this.getBody(a), b = this.getBody(b), a && b ? this.addSpring(new c.Physics.P2.RotationalSpring(this, a, b, d, e, f)) : void console.warn("Cannot create Rotational Spring, invalid body objects given")
        }, createBody: function (a, b, d, e, f, g) {
            void 0 === e && (e = !1);
            var h = new c.Physics.P2.Body(this.game, null, a, b, d);
            if (g) {
                var i = h.addPolygon(f, g);
                if (!i) return !1
            }
            return e && this.world.addBody(h.data), h
        }, createParticle: function (a, b, d, e, f, g) {
            void 0 === e && (e = !1);
            var h = new c.Physics.P2.Body(this.game, null, a, b, d);
            if (g) {
                var i = h.addPolygon(f, g);
                if (!i) return !1
            }
            return e && this.world.addBody(h.data), h
        }, convertCollisionObjects: function (a, b, c) {
            void 0 === c && (c = !0);
            for (var d = [], e = 0, f = a.collision[b].length; e < f; e++) {
                var g = a.collision[b][e], h = this.createBody(g.x, g.y, 0, c, {}, g.polyline);
                h && d.push(h)
            }
            return d
        }, clearTilemapLayerBodies: function (a, b) {
            b = a.getLayer(b);
            for (var c = a.layers[b].bodies.length; c--;) a.layers[b].bodies[c].destroy();
            a.layers[b].bodies.length = 0
        }, convertTilemap: function (a, b, c, d) {
            b = a.getLayer(b), void 0 === c && (c = !0), void 0 === d && (d = !0), this.clearTilemapLayerBodies(a, b);
            for (var e = 0, f = 0, g = 0, h = 0, i = a.layers[b].height; h < i; h++) {
                e = 0;
                for (var j = 0, k = a.layers[b].width; j < k; j++) {
                    var l = a.layers[b].data[h][j];
                    if (l && l.index > -1 && l.collides) if (d) {
                        var m = a.getTileRight(b, j, h);
                        if (0 === e && (f = l.x * l.width, g = l.y * l.height, e = l.width), m && m.collides) e += l.width; else {
                            var n = this.createBody(f, g, 0, !1);
                            n.addRectangle(e, l.height, e / 2, l.height / 2, 0), c && this.addBody(n), a.layers[b].bodies.push(n), e = 0
                        }
                    } else {
                        var n = this.createBody(l.x * l.width, l.y * l.height, 0, !1);
                        n.addRectangle(l.width, l.height, l.width / 2, l.height / 2, 0), c && this.addBody(n), a.layers[b].bodies.push(n)
                    }
                }
            }
            return a.layers[b].bodies
        }, mpx: function (a) {
            return a *= 20
        }, pxm: function (a) {
            return .05 * a
        }, mpxi: function (a) {
            return a *= -20
        }, pxmi: function (a) {
            return a * -.05
        }
    },Object.defineProperty(c.Physics.P2.prototype, "friction", {
        get: function () {
            return this.world.defaultContactMaterial.friction
        }, set: function (a) {
            this.world.defaultContactMaterial.friction = a
        }
    }),Object.defineProperty(c.Physics.P2.prototype, "restitution", {
        get: function () {
            return this.world.defaultContactMaterial.restitution
        }, set: function (a) {
            this.world.defaultContactMaterial.restitution = a
        }
    }),Object.defineProperty(c.Physics.P2.prototype, "contactMaterial", {
        get: function () {
            return this.world.defaultContactMaterial
        }, set: function (a) {
            this.world.defaultContactMaterial = a
        }
    }),Object.defineProperty(c.Physics.P2.prototype, "applySpringForces", {
        get: function () {
            return this.world.applySpringForces
        }, set: function (a) {
            this.world.applySpringForces = a
        }
    }),Object.defineProperty(c.Physics.P2.prototype, "applyDamping", {
        get: function () {
            return this.world.applyDamping
        }, set: function (a) {
            this.world.applyDamping = a
        }
    }),Object.defineProperty(c.Physics.P2.prototype, "applyGravity", {
        get: function () {
            return this.world.applyGravity
        }, set: function (a) {
            this.world.applyGravity = a
        }
    }),Object.defineProperty(c.Physics.P2.prototype, "solveConstraints", {
        get: function () {
            return this.world.solveConstraints
        }, set: function (a) {
            this.world.solveConstraints = a
        }
    }),Object.defineProperty(c.Physics.P2.prototype, "time", {
        get: function () {
            return this.world.time
        }
    }),Object.defineProperty(c.Physics.P2.prototype, "emitImpactEvent", {
        get: function () {
            return this.world.emitImpactEvent
        }, set: function (a) {
            this.world.emitImpactEvent = a
        }
    }),Object.defineProperty(c.Physics.P2.prototype, "sleepMode", {
        get: function () {
            return this.world.sleepMode
        }, set: function (a) {
            this.world.sleepMode = a
        }
    }),Object.defineProperty(c.Physics.P2.prototype, "total", {
        get: function () {
            return this.world.bodies.length
        }
    }),c.Physics.P2.FixtureList = function (a) {
        Array.isArray(a) || (a = [a]), this.rawList = a, this.init(), this.parse(this.rawList)
    },c.Physics.P2.FixtureList.prototype = {
        init: function () {
            this.namedFixtures = {}, this.groupedFixtures = [], this.allFixtures = []
        }, setCategory: function (a, b) {
            var c = function (b) {
                b.collisionGroup = a
            };
            this.getFixtures(b).forEach(c)
        }, setMask: function (a, b) {
            var c = function (b) {
                b.collisionMask = a
            };
            this.getFixtures(b).forEach(c)
        }, setSensor: function (a, b) {
            var c = function (b) {
                b.sensor = a
            };
            this.getFixtures(b).forEach(c)
        }, setMaterial: function (a, b) {
            var c = function (b) {
                b.material = a
            };
            this.getFixtures(b).forEach(c)
        }, getFixtures: function (a) {
            var b = [];
            if (a) {
                a instanceof Array || (a = [a]);
                var c = this;
                return a.forEach(function (a) {
                    c.namedFixtures[a] && b.push(c.namedFixtures[a])
                }), this.flatten(b)
            }
            return this.allFixtures
        }, getFixtureByKey: function (a) {
            return this.namedFixtures[a]
        }, getGroup: function (a) {
            return this.groupedFixtures[a]
        }, parse: function () {
            var a, b, c, d;
            c = this.rawList, d = [];
            for (a in c) b = c[a], isNaN(a - 0) ? this.namedFixtures[a] = this.flatten(b) : (this.groupedFixtures[a] = this.groupedFixtures[a] || [], this.groupedFixtures[a] = this.groupedFixtures[a].concat(b)), d.push(this.allFixtures = this.flatten(this.groupedFixtures))
        }, flatten: function (a) {
            var b, c;
            return b = [], c = arguments.callee, a.forEach(function (a) {
                return Array.prototype.push.apply(b, Array.isArray(a) ? c(a) : [a])
            }), b
        }
    },c.Physics.P2.PointProxy = function (a, b) {
        this.world = a, this.destination = b
    },c.Physics.P2.PointProxy.prototype.constructor = c.Physics.P2.PointProxy,Object.defineProperty(c.Physics.P2.PointProxy.prototype, "x", {
        get: function () {
            return this.world.mpx(this.destination[0])
        }, set: function (a) {
            this.destination[0] = this.world.pxm(a)
        }
    }),Object.defineProperty(c.Physics.P2.PointProxy.prototype, "y", {
        get: function () {
            return this.world.mpx(this.destination[1])
        }, set: function (a) {
            this.destination[1] = this.world.pxm(a)
        }
    }),Object.defineProperty(c.Physics.P2.PointProxy.prototype, "mx", {
        get: function () {
            return this.destination[0]
        }, set: function (a) {
            this.destination[0] = a
        }
    }),Object.defineProperty(c.Physics.P2.PointProxy.prototype, "my", {
        get: function () {
            return this.destination[1]
        }, set: function (a) {
            this.destination[1] = a
        }
    }),c.Physics.P2.InversePointProxy = function (a, b) {
        this.world = a, this.destination = b
    },c.Physics.P2.InversePointProxy.prototype.constructor = c.Physics.P2.InversePointProxy,Object.defineProperty(c.Physics.P2.InversePointProxy.prototype, "x", {
        get: function () {
            return this.world.mpxi(this.destination[0])
        }, set: function (a) {
            this.destination[0] = this.world.pxmi(a)
        }
    }),Object.defineProperty(c.Physics.P2.InversePointProxy.prototype, "y", {
        get: function () {
            return this.world.mpxi(this.destination[1])
        }, set: function (a) {
            this.destination[1] = this.world.pxmi(a)
        }
    }),Object.defineProperty(c.Physics.P2.InversePointProxy.prototype, "mx", {
        get: function () {
            return this.destination[0]
        }, set: function (a) {
            this.destination[0] = -a
        }
    }),Object.defineProperty(c.Physics.P2.InversePointProxy.prototype, "my", {
        get: function () {
            return this.destination[1]
        }, set: function (a) {
            this.destination[1] = -a
        }
    }),c.Physics.P2.Body = function (a, b, d, e, f) {
        b = b || null, d = d || 0, e = e || 0, void 0 === f && (f = 1), this.game = a, this.world = a.physics.p2, this.sprite = b, this.type = c.Physics.P2JS, this.offset = new c.Point, this.data = new p2.Body({
            position: [this.world.pxmi(d), this.world.pxmi(e)],
            mass: f
        }), this.data.parent = this, this.velocity = new c.Physics.P2.InversePointProxy(this.world, this.data.velocity), this.force = new c.Physics.P2.InversePointProxy(this.world, this.data.force), this.gravity = new c.Point, this.onBeginContact = new c.Signal, this.onEndContact = new c.Signal, this.collidesWith = [], this.removeNextStep = !1, this.debugBody = null, this.dirty = !1, this._collideWorldBounds = !0, this._bodyCallbacks = {}, this._bodyCallbackContext = {}, this._groupCallbacks = {}, this._groupCallbackContext = {}, this._reset = !1, b && (this.setRectangleFromSprite(b), b.exists && this.game.physics.p2.addBody(this))
    },c.Physics.P2.Body.prototype = {
        createBodyCallback: function (a, b, c) {
            var d = -1;
            a.id ? d = a.id : a.body && (d = a.body.id), d > -1 && (null === b ? (delete this._bodyCallbacks[d], delete this._bodyCallbackContext[d]) : (this._bodyCallbacks[d] = b, this._bodyCallbackContext[d] = c))
        }, createGroupCallback: function (a, b, c) {
            null === b ? (delete this._groupCallbacks[a.mask], delete this._groupCallbackContext[a.mask]) : (this._groupCallbacks[a.mask] = b, this._groupCallbackContext[a.mask] = c)
        }, getCollisionMask: function () {
            var a = 0;
            this._collideWorldBounds && (a = this.game.physics.p2.boundsCollisionGroup.mask);
            for (var b = 0; b < this.collidesWith.length; b++) a |= this.collidesWith[b].mask;
            return a
        }, updateCollisionMask: function (a) {
            var b = this.getCollisionMask();
            if (void 0 === a) for (var c = this.data.shapes.length - 1; c >= 0; c--) this.data.shapes[c].collisionMask = b; else a.collisionMask = b
        }, setCollisionGroup: function (a, b) {
            var c = this.getCollisionMask();
            if (void 0 === b) for (var d = this.data.shapes.length - 1; d >= 0; d--) this.data.shapes[d].collisionGroup = a.mask, this.data.shapes[d].collisionMask = c; else b.collisionGroup = a.mask, b.collisionMask = c
        }, clearCollision: function (a, b, c) {
            if (void 0 === a && (a = !0), void 0 === b && (b = !0), void 0 === c) for (var d = this.data.shapes.length - 1; d >= 0; d--) a && (this.data.shapes[d].collisionGroup = null), b && (this.data.shapes[d].collisionMask = null); else a && (c.collisionGroup = null), b && (c.collisionMask = null);
            a && (this.collidesWith.length = 0)
        }, removeCollisionGroup: function (a, b, c) {
            void 0 === b && (b = !0);
            var d;
            if (Array.isArray(a)) for (var e = 0; e < a.length; e++) d = this.collidesWith.indexOf(a[e]), d > -1 && (this.collidesWith.splice(d, 1), b && (delete this._groupCallbacks[a.mask], delete this._groupCallbackContext[a.mask])); else d = this.collidesWith.indexOf(a), d > -1 && (this.collidesWith.splice(d, 1), b && (delete this._groupCallbacks[a.mask], delete this._groupCallbackContext[a.mask]));
            var f = this.getCollisionMask();
            if (void 0 === c) for (var e = this.data.shapes.length - 1; e >= 0; e--) this.data.shapes[e].collisionMask = f; else c.collisionMask = f
        }, collides: function (a, b, c, d) {
            if (Array.isArray(a)) for (var e = 0; e < a.length; e++) this.collidesWith.indexOf(a[e]) === -1 && (this.collidesWith.push(a[e]), b && this.createGroupCallback(a[e], b, c)); else this.collidesWith.indexOf(a) === -1 && (this.collidesWith.push(a), b && this.createGroupCallback(a, b, c));
            var f = this.getCollisionMask();
            if (void 0 === d) for (var e = this.data.shapes.length - 1; e >= 0; e--) this.data.shapes[e].collisionMask = f; else d.collisionMask = f
        }, adjustCenterOfMass: function () {
            this.data.adjustCenterOfMass(), this.shapeChanged()
        }, getVelocityAtPoint: function (a, b) {
            return this.data.getVelocityAtPoint(a, b)
        }, applyDamping: function (a) {
            this.data.applyDamping(a)
        }, applyImpulse: function (a, b, c) {
            this.data.applyImpulse(a, [this.world.pxmi(b), this.world.pxmi(c)])
        }, applyImpulseLocal: function (a, b, c) {
            this.data.applyImpulseLocal(a, [this.world.pxmi(b), this.world.pxmi(c)])
        }, applyForce: function (a, b, c) {
            this.data.applyForce(a, [this.world.pxmi(b), this.world.pxmi(c)])
        }, setZeroForce: function () {
            this.data.setZeroForce()
        }, setZeroRotation: function () {
            this.data.angularVelocity = 0
        }, setZeroVelocity: function () {
            this.data.velocity[0] = 0, this.data.velocity[1] = 0
        }, setZeroDamping: function () {
            this.data.damping = 0, this.data.angularDamping = 0
        }, toLocalFrame: function (a, b) {
            return this.data.toLocalFrame(a, b)
        }, toWorldFrame: function (a, b) {
            return this.data.toWorldFrame(a, b)
        }, rotateLeft: function (a) {
            this.data.angularVelocity = this.world.pxm(-a)
        }, rotateRight: function (a) {
            this.data.angularVelocity = this.world.pxm(a)
        }, moveForward: function (a) {
            var b = this.world.pxmi(-a), c = this.data.angle + Math.PI / 2;
            this.data.velocity[0] = b * Math.cos(c), this.data.velocity[1] = b * Math.sin(c)
        }, moveBackward: function (a) {
            var b = this.world.pxmi(-a), c = this.data.angle + Math.PI / 2;
            this.data.velocity[0] = -(b * Math.cos(c)), this.data.velocity[1] = -(b * Math.sin(c))
        }, thrust: function (a) {
            var b = this.world.pxmi(-a), c = this.data.angle + Math.PI / 2;
            this.data.force[0] += b * Math.cos(c), this.data.force[1] += b * Math.sin(c)
        }, thrustLeft: function (a) {
            var b = this.world.pxmi(-a), c = this.data.angle;
            this.data.force[0] += b * Math.cos(c), this.data.force[1] += b * Math.sin(c)
        }, thrustRight: function (a) {
            var b = this.world.pxmi(-a), c = this.data.angle;
            this.data.force[0] -= b * Math.cos(c), this.data.force[1] -= b * Math.sin(c)
        }, reverse: function (a) {
            var b = this.world.pxmi(-a), c = this.data.angle + Math.PI / 2;
            this.data.force[0] -= b * Math.cos(c), this.data.force[1] -= b * Math.sin(c)
        }, moveLeft: function (a) {
            this.data.velocity[0] = this.world.pxmi(-a)
        }, moveRight: function (a) {
            this.data.velocity[0] = this.world.pxmi(a)
        }, moveUp: function (a) {
            this.data.velocity[1] = this.world.pxmi(-a)
        }, moveDown: function (a) {
            this.data.velocity[1] = this.world.pxmi(a)
        }, preUpdate: function () {
            this.dirty = !0, this.removeNextStep && (this.removeFromWorld(), this.removeNextStep = !1)
        }, postUpdate: function () {
            this.sprite.x = this.world.mpxi(this.data.position[0]) + this.offset.x, this.sprite.y = this.world.mpxi(this.data.position[1]) + this.offset.y, this.fixedRotation || (this.sprite.rotation = this.data.angle), this.debugBody && this.debugBody.updateSpriteTransform(), this.dirty = !1
        }, reset: function (a, b, c, d) {
            void 0 === c && (c = !1), void 0 === d && (d = !1), this.setZeroForce(), this.setZeroVelocity(), this.setZeroRotation(), c && this.setZeroDamping(), d && (this.mass = 1), this.x = a, this.y = b
        }, addToWorld: function () {
            if (this.game.physics.p2._toRemove) for (var a = 0; a < this.game.physics.p2._toRemove.length; a++) this.game.physics.p2._toRemove[a] === this && this.game.physics.p2._toRemove.splice(a, 1);
            this.data.world !== this.game.physics.p2.world && this.game.physics.p2.addBody(this)
        }, removeFromWorld: function () {
            this.data.world === this.game.physics.p2.world && this.game.physics.p2.removeBodyNextStep(this)
        }, destroy: function () {
            this.removeFromWorld(), this.clearShapes(), this._bodyCallbacks = {}, this._bodyCallbackContext = {}, this._groupCallbacks = {}, this._groupCallbackContext = {}, this.debugBody && this.debugBody.destroy(!0, !0), this.debugBody = null, this.sprite && (this.sprite.body = null, this.sprite = null)
        }, clearShapes: function () {
            for (var a = this.data.shapes.length; a--;) this.data.removeShape(this.data.shapes[a]);
            this.shapeChanged()
        }, addShape: function (a, b, c, d) {
            return void 0 === b && (b = 0), void 0 === c && (c = 0), void 0 === d && (d = 0), this.data.addShape(a, [this.world.pxmi(b), this.world.pxmi(c)], d), this.shapeChanged(), a
        }, addCircle: function (a, b, c, d) {
            var e = new p2.Circle({radius: this.world.pxm(a)});
            return this.addShape(e, b, c, d)
        }, addRectangle: function (a, b, c, d, e) {
            var f = new p2.Box({width: this.world.pxm(a), height: this.world.pxm(b)});
            return this.addShape(f, c, d, e)
        }, addPlane: function (a, b, c) {
            var d = new p2.Plane;
            return this.addShape(d, a, b, c)
        }, addParticle: function (a, b, c) {
            var d = new p2.Particle;
            return this.addShape(d, a, b, c)
        }, addLine: function (a, b, c, d) {
            var e = new p2.Line({length: this.world.pxm(a)});
            return this.addShape(e, b, c, d)
        }, addCapsule: function (a, b, c, d, e) {
            var f = new p2.Capsule({length: this.world.pxm(a), radius: this.world.pxm(b)});
            return this.addShape(f, c, d, e)
        }, addPolygon: function (a, b) {
            a = a || {}, Array.isArray(b) || (b = Array.prototype.slice.call(arguments, 1));
            var c = [];
            if (1 === b.length && Array.isArray(b[0])) c = b[0].slice(0); else if (Array.isArray(b[0])) c = b.slice(); else if ("number" == typeof b[0]) for (var d = 0, e = b.length; d < e; d += 2) c.push([b[d], b[d + 1]]);
            var f = c.length - 1;
            c[f][0] === c[0][0] && c[f][1] === c[0][1] && c.pop();
            for (var g = 0; g < c.length; g++) c[g][0] = this.world.pxmi(c[g][0]), c[g][1] = this.world.pxmi(c[g][1]);
            var h = this.data.fromPolygon(c, a);
            return this.shapeChanged(), h
        }, removeShape: function (a) {
            var b = this.data.removeShape(a);
            return this.shapeChanged(), b
        }, setCircle: function (a, b, c, d) {
            return this.clearShapes(), this.addCircle(a, b, c, d)
        }, setRectangle: function (a, b, c, d, e) {
            return void 0 === a && (a = 16), void 0 === b && (b = 16), this.clearShapes(), this.addRectangle(a, b, c, d, e)
        }, setRectangleFromSprite: function (a) {
            return void 0 === a && (a = this.sprite), this.clearShapes(), this.addRectangle(a.width, a.height, 0, 0, a.rotation)
        }, setMaterial: function (a, b) {
            if (void 0 === b) for (var c = this.data.shapes.length - 1; c >= 0; c--) this.data.shapes[c].material = a; else b.material = a
        }, shapeChanged: function () {
            this.debugBody && this.debugBody.draw()
        }, addPhaserPolygon: function (a, b) {
            for (var c = this.game.cache.getPhysicsData(a, b), d = [], e = 0; e < c.length; e++) {
                var f = c[e], g = this.addFixture(f);
                d[f.filter.group] = d[f.filter.group] || [], d[f.filter.group] = d[f.filter.group].concat(g), f.fixtureKey && (d[f.fixtureKey] = g)
            }
            return this.data.aabbNeedsUpdate = !0, this.shapeChanged(), d
        }, addFixture: function (a) {
            var b = [];
            if (a.circle) {
                var c = new p2.Circle({radius: this.world.pxm(a.circle.radius)});
                c.collisionGroup = a.filter.categoryBits, c.collisionMask = a.filter.maskBits, c.sensor = a.isSensor;
                var d = p2.vec2.create();
                d[0] = this.world.pxmi(a.circle.position[0] - this.sprite.width / 2), d[1] = this.world.pxmi(a.circle.position[1] - this.sprite.height / 2), this.data.addShape(c, d), b.push(c)
            } else for (var e = a.polygons, f = p2.vec2.create(), g = 0; g < e.length; g++) {
                for (var h = e[g], i = [], j = 0; j < h.length; j += 2) i.push([this.world.pxmi(h[j]), this.world.pxmi(h[j + 1])]);
                for (var c = new p2.Convex({vertices: i}), k = 0; k !== c.vertices.length; k++) {
                    var l = c.vertices[k];
                    p2.vec2.sub(l, l, c.centerOfMass)
                }
                p2.vec2.scale(f, c.centerOfMass, 1), f[0] -= this.world.pxmi(this.sprite.width / 2), f[1] -= this.world.pxmi(this.sprite.height / 2), c.updateTriangles(), c.updateCenterOfMass(), c.updateBoundingRadius(), c.collisionGroup = a.filter.categoryBits, c.collisionMask = a.filter.maskBits, c.sensor = a.isSensor, this.data.addShape(c, f), b.push(c)
            }
            return b
        }, loadPolygon: function (a, b) {
            if (null === a) var c = b; else var c = this.game.cache.getPhysicsData(a, b);
            for (var d = p2.vec2.create(), e = 0; e < c.length; e++) {
                for (var f = [], g = 0; g < c[e].shape.length; g += 2) f.push([this.world.pxmi(c[e].shape[g]), this.world.pxmi(c[e].shape[g + 1])]);
                for (var h = new p2.Convex({vertices: f}), i = 0; i !== h.vertices.length; i++) {
                    var j = h.vertices[i];
                    p2.vec2.sub(j, j, h.centerOfMass)
                }
                p2.vec2.scale(d, h.centerOfMass, 1), d[0] -= this.world.pxmi(this.sprite.width / 2), d[1] -= this.world.pxmi(this.sprite.height / 2), h.updateTriangles(), h.updateCenterOfMass(), h.updateBoundingRadius(), this.data.addShape(h, d)
            }
            return this.data.aabbNeedsUpdate = !0, this.shapeChanged(), !0
        }
    },c.Physics.P2.Body.prototype.constructor = c.Physics.P2.Body,c.Physics.P2.Body.DYNAMIC = 1,c.Physics.P2.Body.STATIC = 2,c.Physics.P2.Body.KINEMATIC = 4,Object.defineProperty(c.Physics.P2.Body.prototype, "static", {
        get: function () {
            return this.data.type === c.Physics.P2.Body.STATIC
        }, set: function (a) {
            a && this.data.type !== c.Physics.P2.Body.STATIC ? (this.data.type = c.Physics.P2.Body.STATIC, this.mass = 0) : a || this.data.type !== c.Physics.P2.Body.STATIC || (this.data.type = c.Physics.P2.Body.DYNAMIC, this.mass = 1)
        }
    }),Object.defineProperty(c.Physics.P2.Body.prototype, "dynamic", {
        get: function () {
            return this.data.type === c.Physics.P2.Body.DYNAMIC
        }, set: function (a) {
            a && this.data.type !== c.Physics.P2.Body.DYNAMIC ? (this.data.type = c.Physics.P2.Body.DYNAMIC, this.mass = 1) : a || this.data.type !== c.Physics.P2.Body.DYNAMIC || (this.data.type = c.Physics.P2.Body.STATIC, this.mass = 0)
        }
    }),Object.defineProperty(c.Physics.P2.Body.prototype, "kinematic", {
        get: function () {
            return this.data.type === c.Physics.P2.Body.KINEMATIC
        }, set: function (a) {
            a && this.data.type !== c.Physics.P2.Body.KINEMATIC ? (this.data.type = c.Physics.P2.Body.KINEMATIC, this.mass = 4) : a || this.data.type !== c.Physics.P2.Body.KINEMATIC || (this.data.type = c.Physics.P2.Body.STATIC, this.mass = 0)
        }
    }),Object.defineProperty(c.Physics.P2.Body.prototype, "allowSleep", {
        get: function () {
            return this.data.allowSleep
        }, set: function (a) {
            a !== this.data.allowSleep && (this.data.allowSleep = a)
        }
    }),Object.defineProperty(c.Physics.P2.Body.prototype, "angle", {
        get: function () {
            return c.Math.wrapAngle(c.Math.radToDeg(this.data.angle))
        }, set: function (a) {
            this.data.angle = c.Math.degToRad(c.Math.wrapAngle(a))
        }
    }),Object.defineProperty(c.Physics.P2.Body.prototype, "angularDamping", {
        get: function () {
            return this.data.angularDamping
        }, set: function (a) {
            this.data.angularDamping = a
        }
    }),Object.defineProperty(c.Physics.P2.Body.prototype, "angularForce", {
        get: function () {
            return this.data.angularForce
        }, set: function (a) {
            this.data.angularForce = a
        }
    }),Object.defineProperty(c.Physics.P2.Body.prototype, "angularVelocity", {
        get: function () {
            return this.data.angularVelocity
        }, set: function (a) {
            this.data.angularVelocity = a
        }
    }),Object.defineProperty(c.Physics.P2.Body.prototype, "damping", {
        get: function () {
            return this.data.damping
        }, set: function (a) {
            this.data.damping = a
        }
    }),Object.defineProperty(c.Physics.P2.Body.prototype, "fixedRotation", {
        get: function () {
            return this.data.fixedRotation
        }, set: function (a) {
            a !== this.data.fixedRotation && (this.data.fixedRotation = a)
        }
    }),Object.defineProperty(c.Physics.P2.Body.prototype, "inertia", {
        get: function () {
            return this.data.inertia
        }, set: function (a) {
            this.data.inertia = a
        }
    }),Object.defineProperty(c.Physics.P2.Body.prototype, "mass", {
        get: function () {
            return this.data.mass
        }, set: function (a) {
            a !== this.data.mass && (this.data.mass = a, this.data.updateMassProperties())
        }
    }),Object.defineProperty(c.Physics.P2.Body.prototype, "motionState", {
        get: function () {
            return this.data.type
        }, set: function (a) {
            a !== this.data.type && (this.data.type = a)
        }
    }),Object.defineProperty(c.Physics.P2.Body.prototype, "rotation", {
        get: function () {
            return this.data.angle
        }, set: function (a) {
            this.data.angle = a
        }
    }),Object.defineProperty(c.Physics.P2.Body.prototype, "sleepSpeedLimit", {
        get: function () {
            return this.data.sleepSpeedLimit
        }, set: function (a) {
            this.data.sleepSpeedLimit = a
        }
    }),Object.defineProperty(c.Physics.P2.Body.prototype, "x", {
        get: function () {
            return this.world.mpxi(this.data.position[0])
        }, set: function (a) {
            this.data.position[0] = this.world.pxmi(a)
        }
    }),Object.defineProperty(c.Physics.P2.Body.prototype, "y", {
        get: function () {
            return this.world.mpxi(this.data.position[1])
        }, set: function (a) {
            this.data.position[1] = this.world.pxmi(a)
        }
    }),Object.defineProperty(c.Physics.P2.Body.prototype, "id", {
        get: function () {
            return this.data.id
        }
    }),Object.defineProperty(c.Physics.P2.Body.prototype, "debug", {
        get: function () {
            return null !== this.debugBody
        }, set: function (a) {
            a && !this.debugBody ? this.debugBody = new c.Physics.P2.BodyDebug(this.game, this.data) : !a && this.debugBody && (this.debugBody.destroy(), this.debugBody = null)
        }
    }),Object.defineProperty(c.Physics.P2.Body.prototype, "collideWorldBounds", {
        get: function () {
            return this._collideWorldBounds
        }, set: function (a) {
            a && !this._collideWorldBounds ? (this._collideWorldBounds = !0, this.updateCollisionMask()) : !a && this._collideWorldBounds && (this._collideWorldBounds = !1, this.updateCollisionMask())
        }
    }),c.Physics.P2.BodyDebug = function (a, b, d) {
        c.Group.call(this, a);
        var e = {pixelsPerLengthUnit: a.physics.p2.mpx(1), debugPolygons: !1, lineWidth: 1, alpha: .5};
        this.settings = c.Utils.extend(e, d), this.ppu = this.settings.pixelsPerLengthUnit, this.ppu = -1 * this.ppu, this.body = b, this.canvas = new c.Graphics(a), this.canvas.alpha = this.settings.alpha, this.add(this.canvas), this.draw(), this.updateSpriteTransform()
    },c.Physics.P2.BodyDebug.prototype = Object.create(c.Group.prototype),c.Physics.P2.BodyDebug.prototype.constructor = c.Physics.P2.BodyDebug,c.Utils.extend(c.Physics.P2.BodyDebug.prototype, {
        updateSpriteTransform: function () {
            this.position.x = this.body.position[0] * this.ppu, this.position.y = this.body.position[1] * this.ppu, this.rotation = this.body.angle
        }, draw: function () {
            var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o;
            if (h = this.body, j = this.canvas, j.clear(), c = parseInt(this.randomPastelHex(), 16), f = 16711680, g = this.lineWidth, h instanceof p2.Body && h.shapes.length) {
                var p = h.shapes.length;
                for (d = 0; d !== p;) {
                    if (b = h.shapes[d], i = b.position || 0, a = b.angle || 0, b instanceof p2.Circle) this.drawCircle(j, i[0] * this.ppu, i[1] * this.ppu, a, b.radius * this.ppu, c, g); else if (b instanceof p2.Capsule) this.drawCapsule(j, i[0] * this.ppu, i[1] * this.ppu, a, b.length * this.ppu, b.radius * this.ppu, f, c, g); else if (b instanceof p2.Plane) this.drawPlane(j, i[0] * this.ppu, -i[1] * this.ppu, c, f, 5 * g, 10 * g, 10 * g, 100 * this.ppu, a); else if (b instanceof p2.Line) this.drawLine(j, b.length * this.ppu, f, g); else if (b instanceof p2.Box) this.drawRectangle(j, i[0] * this.ppu, i[1] * this.ppu, a, b.width * this.ppu, b.height * this.ppu, f, c, g); else if (b instanceof p2.Convex) {
                        for (l = [], m = p2.vec2.create(), e = n = 0, o = b.vertices.length; 0 <= o ? n < o : n > o; e = 0 <= o ? ++n : --n) k = b.vertices[e], p2.vec2.rotate(m, k, a), l.push([(m[0] + i[0]) * this.ppu, -(m[1] + i[1]) * this.ppu]);
                        this.drawConvex(j, l, b.triangles, f, c, g, this.settings.debugPolygons, [i[0] * this.ppu, -i[1] * this.ppu])
                    }
                    d++
                }
            }
        }, drawRectangle: function (a, b, c, d, e, f, g, h, i) {
            void 0 === i && (i = 1), void 0 === g && (g = 0), a.lineStyle(i, g, 1), a.beginFill(h), a.drawRect(b - e / 2, c - f / 2, e, f)
        }, drawCircle: function (a, b, c, d, e, f, g) {
            void 0 === g && (g = 1), void 0 === f && (f = 16777215), a.lineStyle(g, 0, 1), a.beginFill(f, 1), a.drawCircle(b, c, 2 * -e), a.endFill(), a.moveTo(b, c), a.lineTo(b + e * Math.cos(-d), c + e * Math.sin(-d))
        }, drawLine: function (a, b, c, d) {
            void 0 === d && (d = 1), void 0 === c && (c = 0), a.lineStyle(5 * d, c, 1), a.moveTo(-b / 2, 0), a.lineTo(b / 2, 0)
        }, drawConvex: function (a, b, c, d, e, f, g, h) {
            var i, j, k, l, m, n, o, p, q, r, s;
            if (void 0 === f && (f = 1), void 0 === d && (d = 0), g) {
                for (i = [16711680, 65280, 255], j = 0; j !== b.length + 1;) l = b[j % b.length], m = b[(j + 1) % b.length], o = l[0], r = l[1], p = m[0], s = m[1], a.lineStyle(f, i[j % i.length], 1), a.moveTo(o, -r), a.lineTo(p, -s), a.drawCircle(o, -r, 2 * f), j++;
                return a.lineStyle(f, 0, 1), a.drawCircle(h[0], h[1], 2 * f)
            }
            for (a.lineStyle(f, d, 1), a.beginFill(e), j = 0; j !== b.length;) k = b[j], n = k[0], q = k[1], 0 === j ? a.moveTo(n, -q) : a.lineTo(n, -q), j++;
            if (a.endFill(), b.length > 2) return a.moveTo(b[b.length - 1][0], -b[b.length - 1][1]), a.lineTo(b[0][0], -b[0][1])
        }, drawPath: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q, r;
            for (void 0 === e && (e = 1), void 0 === c && (c = 0), a.lineStyle(e, c, 1), "number" == typeof d && a.beginFill(d), h = null, i = null, g = 0; g < b.length;) p = b[g], q = p[0], r = p[1], q === h && r === i || (0 === g ? a.moveTo(q, r) : (j = h, k = i, l = q, m = r, n = b[(g + 1) % b.length][0], o = b[(g + 1) % b.length][1], f = (l - j) * (o - k) - (n - j) * (m - k), 0 !== f && a.lineTo(q, r)), h = q, i = r), g++;
            "number" == typeof d && a.endFill(), b.length > 2 && "number" == typeof d && (a.moveTo(b[b.length - 1][0], b[b.length - 1][1]), a.lineTo(b[0][0], b[0][1]))
        }, drawPlane: function (a, b, c, d, e, f, g, h, i, j) {
            var k, l, m;
            void 0 === f && (f = 1), void 0 === d && (d = 16777215), a.lineStyle(f, e, 11), a.beginFill(d), k = i, a.moveTo(b, -c), l = b + Math.cos(j) * this.game.width, m = c + Math.sin(j) * this.game.height, a.lineTo(l, -m), a.moveTo(b, -c), l = b + Math.cos(j) * -this.game.width, m = c + Math.sin(j) * -this.game.height, a.lineTo(l, -m)
        }, drawCapsule: function (a, b, c, d, e, f, g, h, i) {
            void 0 === i && (i = 1), void 0 === g && (g = 0), a.lineStyle(i, g, 1);
            var j = Math.cos(d), k = Math.sin(d);
            a.beginFill(h, 1), a.drawCircle(-e / 2 * j + b, -e / 2 * k + c, 2 * -f), a.drawCircle(e / 2 * j + b, e / 2 * k + c, 2 * -f), a.endFill(), a.lineStyle(i, g, 0), a.beginFill(h, 1), a.moveTo(-e / 2 * j + f * k + b, -e / 2 * k + f * j + c), a.lineTo(e / 2 * j + f * k + b, e / 2 * k + f * j + c), a.lineTo(e / 2 * j - f * k + b, e / 2 * k - f * j + c), a.lineTo(-e / 2 * j - f * k + b, -e / 2 * k - f * j + c), a.endFill(), a.lineStyle(i, g, 1), a.moveTo(-e / 2 * j + f * k + b, -e / 2 * k + f * j + c), a.lineTo(e / 2 * j + f * k + b, e / 2 * k + f * j + c), a.moveTo(-e / 2 * j - f * k + b, -e / 2 * k - f * j + c), a.lineTo(e / 2 * j - f * k + b, e / 2 * k - f * j + c)
        }, randomPastelHex: function () {
            var a, b, c, d;
            return c = [255, 255, 255], d = Math.floor(256 * Math.random()), b = Math.floor(256 * Math.random()), a = Math.floor(256 * Math.random()), d = Math.floor((d + 3 * c[0]) / 4), b = Math.floor((b + 3 * c[1]) / 4), a = Math.floor((a + 3 * c[2]) / 4), this.rgbToHex(d, b, a)
        }, rgbToHex: function (a, b, c) {
            return this.componentToHex(a) + this.componentToHex(b) + this.componentToHex(c)
        }, componentToHex: function (a) {
            var b;
            return b = a.toString(16), 2 === b.length ? b : b + "0"
        }
    }),c.Physics.P2.Spring = function (a, b, c, d, e, f, g, h, i, j) {
        this.game = a.game, this.world = a, void 0 === d && (d = 1), void 0 === e && (e = 100), void 0 === f && (f = 1), d = a.pxm(d);
        var k = {restLength: d, stiffness: e, damping: f};
        "undefined" != typeof g && null !== g && (k.worldAnchorA = [a.pxm(g[0]), a.pxm(g[1])]), "undefined" != typeof h && null !== h && (k.worldAnchorB = [a.pxm(h[0]), a.pxm(h[1])]), "undefined" != typeof i && null !== i && (k.localAnchorA = [a.pxm(i[0]), a.pxm(i[1])]), "undefined" != typeof j && null !== j && (k.localAnchorB = [a.pxm(j[0]), a.pxm(j[1])]), this.data = new p2.LinearSpring(b, c, k), this.data.parent = this;
    },c.Physics.P2.Spring.prototype.constructor = c.Physics.P2.Spring,c.Physics.P2.RotationalSpring = function (a, b, c, d, e, f) {
        this.game = a.game, this.world = a, void 0 === d && (d = null), void 0 === e && (e = 100), void 0 === f && (f = 1), d && (d = a.pxm(d));
        var g = {restAngle: d, stiffness: e, damping: f};
        this.data = new p2.RotationalSpring(b, c, g), this.data.parent = this
    },c.Physics.P2.Spring.prototype.constructor = c.Physics.P2.Spring,c.Physics.P2.Material = function (a) {
        this.name = a, p2.Material.call(this)
    },c.Physics.P2.Material.prototype = Object.create(p2.Material.prototype),c.Physics.P2.Material.prototype.constructor = c.Physics.P2.Material,c.Physics.P2.ContactMaterial = function (a, b, c) {
        p2.ContactMaterial.call(this, a, b, c)
    },c.Physics.P2.ContactMaterial.prototype = Object.create(p2.ContactMaterial.prototype),c.Physics.P2.ContactMaterial.prototype.constructor = c.Physics.P2.ContactMaterial,c.Physics.P2.CollisionGroup = function (a) {
        this.mask = a
    },c.Physics.P2.DistanceConstraint = function (a, b, c, d, e, f, g) {
        void 0 === d && (d = 100), void 0 === e && (e = [0, 0]), void 0 === f && (f = [0, 0]), void 0 === g && (g = Number.MAX_VALUE), this.game = a.game, this.world = a, d = a.pxm(d), e = [a.pxmi(e[0]), a.pxmi(e[1])], f = [a.pxmi(f[0]), a.pxmi(f[1])];
        var h = {distance: d, localAnchorA: e, localAnchorB: f, maxForce: g};
        p2.DistanceConstraint.call(this, b, c, h)
    },c.Physics.P2.DistanceConstraint.prototype = Object.create(p2.DistanceConstraint.prototype),c.Physics.P2.DistanceConstraint.prototype.constructor = c.Physics.P2.DistanceConstraint,c.Physics.P2.GearConstraint = function (a, b, c, d, e) {
        void 0 === d && (d = 0), void 0 === e && (e = 1), this.game = a.game, this.world = a;
        var f = {angle: d, ratio: e};
        p2.GearConstraint.call(this, b, c, f)
    },c.Physics.P2.GearConstraint.prototype = Object.create(p2.GearConstraint.prototype),c.Physics.P2.GearConstraint.prototype.constructor = c.Physics.P2.GearConstraint,c.Physics.P2.LockConstraint = function (a, b, c, d, e, f) {
        void 0 === d && (d = [0, 0]), void 0 === e && (e = 0), void 0 === f && (f = Number.MAX_VALUE), this.game = a.game, this.world = a, d = [a.pxm(d[0]), a.pxm(d[1])];
        var g = {localOffsetB: d, localAngleB: e, maxForce: f};
        p2.LockConstraint.call(this, b, c, g)
    },c.Physics.P2.LockConstraint.prototype = Object.create(p2.LockConstraint.prototype),c.Physics.P2.LockConstraint.prototype.constructor = c.Physics.P2.LockConstraint,c.Physics.P2.PrismaticConstraint = function (a, b, c, d, e, f, g, h) {
        void 0 === d && (d = !0), void 0 === e && (e = [0, 0]), void 0 === f && (f = [0, 0]), void 0 === g && (g = [0, 0]), void 0 === h && (h = Number.MAX_VALUE), this.game = a.game, this.world = a, e = [a.pxmi(e[0]), a.pxmi(e[1])], f = [a.pxmi(f[0]), a.pxmi(f[1])];
        var i = {localAnchorA: e, localAnchorB: f, localAxisA: g, maxForce: h, disableRotationalLock: !d};
        p2.PrismaticConstraint.call(this, b, c, i)
    },c.Physics.P2.PrismaticConstraint.prototype = Object.create(p2.PrismaticConstraint.prototype),c.Physics.P2.PrismaticConstraint.prototype.constructor = c.Physics.P2.PrismaticConstraint,c.Physics.P2.RevoluteConstraint = function (a, b, c, d, e, f, g) {
        void 0 === f && (f = Number.MAX_VALUE), void 0 === g && (g = null), this.game = a.game, this.world = a, c = [a.pxmi(c[0]), a.pxmi(c[1])], e = [a.pxmi(e[0]), a.pxmi(e[1])], g && (g = [a.pxmi(g[0]), a.pxmi(g[1])]);
        var h = {worldPivot: g, localPivotA: c, localPivotB: e, maxForce: f};
        p2.RevoluteConstraint.call(this, b, d, h)
    },c.Physics.P2.RevoluteConstraint.prototype = Object.create(p2.RevoluteConstraint.prototype),c.Physics.P2.RevoluteConstraint.prototype.constructor = c.Physics.P2.RevoluteConstraint,c.ImageCollection = function (a, b, c, d, e, f, g) {
        (void 0 === c || c <= 0) && (c = 32), (void 0 === d || d <= 0) && (d = 32), void 0 === e && (e = 0), void 0 === f && (f = 0), this.name = a, this.firstgid = 0 | b, this.imageWidth = 0 | c, this.imageHeight = 0 | d, this.imageMargin = 0 | e, this.imageSpacing = 0 | f, this.properties = g || {}, this.images = [], this.total = 0
    },c.ImageCollection.prototype = {
        containsImageIndex: function (a) {
            return a >= this.firstgid && a < this.firstgid + this.total
        }, addImage: function (a, b) {
            this.images.push({gid: a, image: b}), this.total++
        }
    },c.ImageCollection.prototype.constructor = c.ImageCollection,c.Tile = function (a, b, c, d, e, f) {
        this.layer = a, this.index = b, this.x = c, this.y = d, this.rotation = 0, this.flipped = !1, this.worldX = c * e, this.worldY = d * f, this.width = e, this.height = f, this.centerX = Math.abs(e / 2), this.centerY = Math.abs(f / 2), this.alpha = 1, this.properties = {}, this.scanned = !1, this.faceTop = !1, this.faceBottom = !1, this.faceLeft = !1, this.faceRight = !1, this.collideLeft = !1, this.collideRight = !1, this.collideUp = !1, this.collideDown = !1, this.collisionCallback = null, this.collisionCallbackContext = this
    },c.Tile.prototype = {
        containsPoint: function (a, b) {
            return !(a < this.worldX || b < this.worldY || a > this.right || b > this.bottom)
        }, intersects: function (a, b, c, d) {
            return !(c <= this.worldX) && (!(d <= this.worldY) && (!(a >= this.worldX + this.width) && !(b >= this.worldY + this.height)))
        }, setCollisionCallback: function (a, b) {
            this.collisionCallback = a, this.collisionCallbackContext = b
        }, destroy: function () {
            this.collisionCallback = null, this.collisionCallbackContext = null, this.properties = null
        }, setCollision: function (a, b, c, d) {
            this.collideLeft = a, this.collideRight = b, this.collideUp = c, this.collideDown = d, this.faceLeft = a, this.faceRight = b, this.faceTop = c, this.faceBottom = d
        }, resetCollision: function () {
            this.collideLeft = !1, this.collideRight = !1, this.collideUp = !1, this.collideDown = !1, this.faceTop = !1, this.faceBottom = !1, this.faceLeft = !1, this.faceRight = !1
        }, isInteresting: function (a, b) {
            return a && b ? this.collideLeft || this.collideRight || this.collideUp || this.collideDown || this.faceTop || this.faceBottom || this.faceLeft || this.faceRight || this.collisionCallback : a ? this.collideLeft || this.collideRight || this.collideUp || this.collideDown : !!b && (this.faceTop || this.faceBottom || this.faceLeft || this.faceRight)
        }, copy: function (a) {
            this.index = a.index, this.alpha = a.alpha, this.properties = a.properties, this.collideUp = a.collideUp, this.collideDown = a.collideDown, this.collideLeft = a.collideLeft, this.collideRight = a.collideRight, this.collisionCallback = a.collisionCallback, this.collisionCallbackContext = a.collisionCallbackContext
        }
    },c.Tile.prototype.constructor = c.Tile,Object.defineProperty(c.Tile.prototype, "collides", {
        get: function () {
            return this.collideLeft || this.collideRight || this.collideUp || this.collideDown
        }
    }),Object.defineProperty(c.Tile.prototype, "canCollide", {
        get: function () {
            return this.collideLeft || this.collideRight || this.collideUp || this.collideDown || this.collisionCallback
        }
    }),Object.defineProperty(c.Tile.prototype, "left", {
        get: function () {
            return this.worldX
        }
    }),Object.defineProperty(c.Tile.prototype, "right", {
        get: function () {
            return this.worldX + this.width
        }
    }),Object.defineProperty(c.Tile.prototype, "top", {
        get: function () {
            return this.worldY
        }
    }),Object.defineProperty(c.Tile.prototype, "bottom", {
        get: function () {
            return this.worldY + this.height
        }
    }),c.Tilemap = function (a, b, d, e, f, g) {
        this.game = a, this.key = b;
        var h = c.TilemapParser.parse(this.game, b, d, e, f, g);
        null !== h && (this.width = h.width, this.height = h.height, this.tileWidth = h.tileWidth, this.tileHeight = h.tileHeight, this.orientation = h.orientation, this.format = h.format, this.version = h.version, this.properties = h.properties, this.widthInPixels = h.widthInPixels, this.heightInPixels = h.heightInPixels, this.layers = h.layers, this.tilesets = h.tilesets, this.imagecollections = h.imagecollections, this.tiles = h.tiles, this.objects = h.objects, this.collideIndexes = [], this.collision = h.collision, this.images = h.images, this.enableDebug = !1, this.currentLayer = 0, this.debugMap = [], this._results = [], this._tempA = 0, this._tempB = 0)
    },c.Tilemap.CSV = 0,c.Tilemap.TILED_JSON = 1,c.Tilemap.NORTH = 0,c.Tilemap.EAST = 1,c.Tilemap.SOUTH = 2,c.Tilemap.WEST = 3,c.Tilemap.prototype = {
        create: function (a, b, c, d, e, f) {
            return void 0 === f && (f = this.game.world), this.width = b, this.height = c, this.setTileSize(d, e), this.layers.length = 0, this.createBlankLayer(a, b, c, d, e, f)
        }, setTileSize: function (a, b) {
            this.tileWidth = a, this.tileHeight = b, this.widthInPixels = this.width * a, this.heightInPixels = this.height * b
        }, addTilesetImage: function (a, b, d, e, f, g, h) {
            if (void 0 === a) return null;
            void 0 === d && (d = this.tileWidth), void 0 === e && (e = this.tileHeight), void 0 === f && (f = 0), void 0 === g && (g = 0), void 0 === h && (h = 0), 0 === d && (d = 32), 0 === e && (e = 32);
            var i = null;
            if (void 0 !== b && null !== b || (b = a), b instanceof c.BitmapData) i = b.canvas; else {
                if (!this.game.cache.checkImageKey(b)) return console.warn('Phaser.Tilemap.addTilesetImage: Invalid image key given: "' + b + '"'), null;
                i = this.game.cache.getImage(b)
            }
            var j = this.getTilesetIndex(a);
            if (null === j && this.format === c.Tilemap.TILED_JSON) return console.warn('Phaser.Tilemap.addTilesetImage: No data found in the JSON matching the tileset name: "' + a + '"'), null;
            if (this.tilesets[j]) return this.tilesets[j].setImage(i), this.tilesets[j];
            var k = new c.Tileset(a, h, d, e, f, g, {});
            k.setImage(i), this.tilesets.push(k);
            for (var l = this.tilesets.length - 1, m = f, n = f, o = 0, p = 0, q = 0, r = h; r < h + k.total && (this.tiles[r] = [m, n, l], m += d + g, o++, o !== k.total) && (p++, p !== k.columns || (m = f, n += e + g, p = 0, q++, q !== k.rows)); r++) ;
            return k
        }, createFromObjects: function (a, b, d, e, f, g, h, i, j) {
            if (void 0 === f && (f = !0), void 0 === g && (g = !1), void 0 === h && (h = this.game.world), void 0 === i && (i = c.Sprite), void 0 === j && (j = !0), !this.objects[a]) return void console.warn("Tilemap.createFromObjects: Invalid objectgroup name given: " + a);
            for (var k = 0; k < this.objects[a].length; k++) {
                var l = !1, m = this.objects[a][k];
                if (void 0 !== m.gid && "number" == typeof b && m.gid === b ? l = !0 : void 0 !== m.id && "number" == typeof b && m.id === b ? l = !0 : void 0 !== m.name && "string" == typeof b && m.name === b && (l = !0), l) {
                    var n = new i(this.game, parseFloat(m.x, 10), parseFloat(m.y, 10), d, e);
                    n.name = m.name, n.visible = m.visible, n.autoCull = g, n.exists = f, m.width && (n.width = m.width), m.height && (n.height = m.height), m.rotation && (n.angle = m.rotation), j && (n.y -= n.height), h.add(n);
                    for (var o in m.properties) h.set(n, o, m.properties[o], !1, !1, 0, !0)
                }
            }
        }, createFromTiles: function (a, b, d, e, f, g) {
            "number" == typeof a && (a = [a]), void 0 === b || null === b ? b = [] : "number" == typeof b && (b = [b]), e = this.getLayer(e), void 0 === f && (f = this.game.world), void 0 === g && (g = {}), void 0 === g.customClass && (g.customClass = c.Sprite), void 0 === g.adjustY && (g.adjustY = !0);
            var h = this.layers[e].width, i = this.layers[e].height;
            if (this.copy(0, 0, h, i, e), this._results.length < 2) return 0;
            for (var j, k = 0, l = 1, m = this._results.length; l < m; l++) if (a.indexOf(this._results[l].index) !== -1) {
                j = new g.customClass(this.game, this._results[l].worldX, this._results[l].worldY, d);
                for (var n in g) j[n] = g[n];
                f.add(j), k++
            }
            if (1 === b.length) for (l = 0; l < a.length; l++) this.replace(a[l], b[0], 0, 0, h, i, e); else if (b.length > 1) for (l = 0; l < a.length; l++) this.replace(a[l], b[l], 0, 0, h, i, e);
            return k
        }, createLayer: function (a, b, d, e) {
            void 0 === b && (b = this.game.width), void 0 === d && (d = this.game.height), void 0 === e && (e = this.game.world);
            var f = a;
            if ("string" == typeof a && (f = this.getLayerIndex(a)), null === f || f > this.layers.length) return void console.warn("Tilemap.createLayer: Invalid layer ID given: " + f);
            void 0 === b || b <= 0 ? b = Math.min(this.game.width, this.layers[f].widthInPixels) : b > this.game.width && (b = this.game.width), void 0 === d || d <= 0 ? d = Math.min(this.game.height, this.layers[f].heightInPixels) : d > this.game.height && (d = this.game.height), this.enableDebug && (console.group("Tilemap.createLayer"), console.log("Name:", this.layers[f].name), console.log("Size:", b, "x", d), console.log("Tileset:", this.tilesets[0].name, "index:", f));
            var g = e.add(new c.TilemapLayer(this.game, this, f, b, d));
            return this.enableDebug && console.groupEnd(), g
        }, createBlankLayer: function (a, b, d, e, f, g) {
            if (void 0 === g && (g = this.game.world), null !== this.getLayerIndex(a)) return void console.warn("Tilemap.createBlankLayer: Layer with matching name already exists: " + a);
            for (var h, i = {
                name: a,
                x: 0,
                y: 0,
                width: b,
                height: d,
                widthInPixels: b * e,
                heightInPixels: d * f,
                alpha: 1,
                visible: !0,
                properties: {},
                indexes: [],
                callbacks: [],
                bodies: [],
                data: null
            }, j = [], k = 0; k < d; k++) {
                h = [];
                for (var l = 0; l < b; l++) h.push(new c.Tile(i, (-1), l, k, e, f));
                j.push(h)
            }
            i.data = j, this.layers.push(i), this.currentLayer = this.layers.length - 1;
            var m = i.widthInPixels, n = i.heightInPixels;
            m > this.game.width && (m = this.game.width), n > this.game.height && (n = this.game.height);
            var j = new c.TilemapLayer(this.game, this, this.layers.length - 1, m, n);
            return j.name = a, g.add(j)
        }, getIndex: function (a, b) {
            for (var c = 0; c < a.length; c++) if (a[c].name === b) return c;
            return null
        }, getLayerIndex: function (a) {
            return this.getIndex(this.layers, a)
        }, getTilesetIndex: function (a) {
            return this.getIndex(this.tilesets, a)
        }, getImageIndex: function (a) {
            return this.getIndex(this.images, a)
        }, setTileIndexCallback: function (a, b, c, d) {
            if (d = this.getLayer(d), "number" == typeof a) this.layers[d].callbacks[a] = {
                callback: b,
                callbackContext: c
            }; else for (var e = 0, f = a.length; e < f; e++) this.layers[d].callbacks[a[e]] = {
                callback: b,
                callbackContext: c
            }
        }, setTileLocationCallback: function (a, b, c, d, e, f, g) {
            if (g = this.getLayer(g), this.copy(a, b, c, d, g), !(this._results.length < 2)) for (var h = 1; h < this._results.length; h++) this._results[h].setCollisionCallback(e, f)
        }, setCollision: function (a, b, c, d) {
            if (void 0 === b && (b = !0), void 0 === d && (d = !0), c = this.getLayer(c), "number" == typeof a) return this.setCollisionByIndex(a, b, c, !0);
            if (Array.isArray(a)) {
                for (var e = 0; e < a.length; e++) this.setCollisionByIndex(a[e], b, c, !1);
                d && this.calculateFaces(c)
            }
        }, setCollisionBetween: function (a, b, c, d, e) {
            if (void 0 === c && (c = !0), void 0 === e && (e = !0), d = this.getLayer(d), !(a > b)) {
                for (var f = a; f <= b; f++) this.setCollisionByIndex(f, c, d, !1);
                e && this.calculateFaces(d)
            }
        }, setCollisionByExclusion: function (a, b, c, d) {
            void 0 === b && (b = !0), void 0 === d && (d = !0), c = this.getLayer(c);
            for (var e = 0, f = this.tiles.length; e < f; e++) a.indexOf(e) === -1 && this.setCollisionByIndex(e, b, c, !1);
            d && this.calculateFaces(c)
        }, setCollisionByIndex: function (a, b, c, d) {
            if (void 0 === b && (b = !0), void 0 === c && (c = this.currentLayer), void 0 === d && (d = !0), b) this.collideIndexes.push(a); else {
                var e = this.collideIndexes.indexOf(a);
                e > -1 && this.collideIndexes.splice(e, 1)
            }
            for (var f = 0; f < this.layers[c].height; f++) for (var g = 0; g < this.layers[c].width; g++) {
                var h = this.layers[c].data[f][g];
                h && h.index === a && (b ? h.setCollision(!0, !0, !0, !0) : h.resetCollision(), h.faceTop = b, h.faceBottom = b, h.faceLeft = b, h.faceRight = b)
            }
            return d && this.calculateFaces(c), c
        }, getLayer: function (a) {
            return void 0 === a ? a = this.currentLayer : "string" == typeof a ? a = this.getLayerIndex(a) : a instanceof c.TilemapLayer && (a = a.index), a
        }, setPreventRecalculate: function (a) {
            if (a === !0 && this.preventingRecalculate !== !0 && (this.preventingRecalculate = !0, this.needToRecalculate = {}), a === !1 && this.preventingRecalculate === !0) {
                this.preventingRecalculate = !1;
                for (var b in this.needToRecalculate) this.calculateFaces(b);
                this.needToRecalculate = !1
            }
        }, calculateFaces: function (a) {
            if (this.preventingRecalculate) return void (this.needToRecalculate[a] = !0);
            for (var b = null, c = null, d = null, e = null, f = 0, g = this.layers[a].height; f < g; f++) for (var h = 0, i = this.layers[a].width; h < i; h++) {
                var j = this.layers[a].data[f][h];
                j && (b = this.getTileAbove(a, h, f), c = this.getTileBelow(a, h, f), d = this.getTileLeft(a, h, f), e = this.getTileRight(a, h, f), j.collides && (j.faceTop = !0, j.faceBottom = !0, j.faceLeft = !0, j.faceRight = !0), b && b.collides && (j.faceTop = !1), c && c.collides && (j.faceBottom = !1), d && d.collides && (j.faceLeft = !1), e && e.collides && (j.faceRight = !1))
            }
        }, getTileAbove: function (a, b, c) {
            return c > 0 ? this.layers[a].data[c - 1][b] : null
        }, getTileBelow: function (a, b, c) {
            return c < this.layers[a].height - 1 ? this.layers[a].data[c + 1][b] : null
        }, getTileLeft: function (a, b, c) {
            return b > 0 ? this.layers[a].data[c][b - 1] : null
        }, getTileRight: function (a, b, c) {
            return b < this.layers[a].width - 1 ? this.layers[a].data[c][b + 1] : null
        }, setLayer: function (a) {
            a = this.getLayer(a), this.layers[a] && (this.currentLayer = a)
        }, hasTile: function (a, b, c) {
            return c = this.getLayer(c), void 0 !== this.layers[c].data[b] && void 0 !== this.layers[c].data[b][a] && this.layers[c].data[b][a].index > -1
        }, removeTile: function (a, b, d) {
            if (d = this.getLayer(d), a >= 0 && a < this.layers[d].width && b >= 0 && b < this.layers[d].height && this.hasTile(a, b, d)) {
                var e = this.layers[d].data[b][a];
                return this.layers[d].data[b][a] = new c.Tile(this.layers[d], (-1), a, b, this.tileWidth, this.tileHeight), this.layers[d].dirty = !0, this.calculateFaces(d), e
            }
        }, removeTileWorldXY: function (a, b, c, d, e) {
            return e = this.getLayer(e), a = this.game.math.snapToFloor(a, c) / c, b = this.game.math.snapToFloor(b, d) / d, this.removeTile(a, b, e)
        }, putTile: function (a, b, d, e) {
            if (null === a) return this.removeTile(b, d, e);
            if (e = this.getLayer(e), b >= 0 && b < this.layers[e].width && d >= 0 && d < this.layers[e].height) {
                var f;
                return a instanceof c.Tile ? (f = a.index, this.hasTile(b, d, e) ? this.layers[e].data[d][b].copy(a) : this.layers[e].data[d][b] = new c.Tile(e, f, b, d, a.width, a.height)) : (f = a, this.hasTile(b, d, e) ? this.layers[e].data[d][b].index = f : this.layers[e].data[d][b] = new c.Tile(this.layers[e], f, b, d, this.tileWidth, this.tileHeight)), this.collideIndexes.indexOf(f) > -1 ? this.layers[e].data[d][b].setCollision(!0, !0, !0, !0) : this.layers[e].data[d][b].resetCollision(), this.layers[e].dirty = !0, this.calculateFaces(e), this.layers[e].data[d][b]
            }
            return null
        }, putTileWorldXY: function (a, b, c, d, e, f) {
            return f = this.getLayer(f), b = this.game.math.snapToFloor(b, d) / d, c = this.game.math.snapToFloor(c, e) / e, this.putTile(a, b, c, f)
        }, searchTileIndex: function (a, b, c, d) {
            void 0 === b && (b = 0), void 0 === c && (c = !1), d = this.getLayer(d);
            var e = 0;
            if (c) {
                for (var f = this.layers[d].height - 1; f >= 0; f--) for (var g = this.layers[d].width - 1; g >= 0; g--) if (this.layers[d].data[f][g].index === a) {
                    if (e === b) return this.layers[d].data[f][g];
                    e++
                }
            } else for (var f = 0; f < this.layers[d].height; f++) for (var g = 0; g < this.layers[d].width; g++) if (this.layers[d].data[f][g].index === a) {
                if (e === b) return this.layers[d].data[f][g];
                e++
            }
            return null
        }, getTile: function (a, b, c, d) {
            return void 0 === d && (d = !1), c = this.getLayer(c), a >= 0 && a < this.layers[c].width && b >= 0 && b < this.layers[c].height ? this.layers[c].data[b][a].index === -1 ? d ? this.layers[c].data[b][a] : null : this.layers[c].data[b][a] : null
        }, getTileWorldXY: function (a, b, c, d, e, f) {
            return void 0 === c && (c = this.tileWidth), void 0 === d && (d = this.tileHeight), e = this.getLayer(e), a = this.game.math.snapToFloor(a, c) / c, b = this.game.math.snapToFloor(b, d) / d, this.getTile(a, b, e, f)
        }, copy: function (a, b, c, d, e) {
            if (e = this.getLayer(e), !this.layers[e]) return void (this._results.length = 0);
            void 0 === a && (a = 0), void 0 === b && (b = 0), void 0 === c && (c = this.layers[e].width), void 0 === d && (d = this.layers[e].height), a < 0 && (a = 0), b < 0 && (b = 0), c > this.layers[e].width && (c = this.layers[e].width), d > this.layers[e].height && (d = this.layers[e].height), this._results.length = 0, this._results.push({
                x: a,
                y: b,
                width: c,
                height: d,
                layer: e
            });
            for (var f = b; f < b + d; f++) for (var g = a; g < a + c; g++) this._results.push(this.layers[e].data[f][g]);
            return this._results
        }, paste: function (a, b, c, d) {
            if (void 0 === a && (a = 0), void 0 === b && (b = 0), d = this.getLayer(d), c && !(c.length < 2)) {
                for (var e = a - c[1].x, f = b - c[1].y, g = 1; g < c.length; g++) this.layers[d].data[f + c[g].y][e + c[g].x].copy(c[g]);
                this.layers[d].dirty = !0, this.calculateFaces(d)
            }
        }, swap: function (a, b, c, d, e, f, g) {
            g = this.getLayer(g), this.copy(c, d, e, f, g), this._results.length < 2 || (this._tempA = a, this._tempB = b, this._results.forEach(this.swapHandler, this), this.paste(c, d, this._results, g))
        }, swapHandler: function (a) {
            a.index === this._tempA ? a.index = this._tempB : a.index === this._tempB && (a.index = this._tempA)
        }, forEach: function (a, b, c, d, e, f, g) {
            g = this.getLayer(g), this.copy(c, d, e, f, g), this._results.length < 2 || (this._results.forEach(a, b), this.paste(c, d, this._results, g))
        }, replace: function (a, b, c, d, e, f, g) {
            if (g = this.getLayer(g), this.copy(c, d, e, f, g), !(this._results.length < 2)) {
                for (var h = 1; h < this._results.length; h++) this._results[h].index === a && (this._results[h].index = b);
                this.paste(c, d, this._results, g)
            }
        }, random: function (a, b, c, d, e) {
            if (e = this.getLayer(e), this.copy(a, b, c, d, e), !(this._results.length < 2)) {
                for (var f = [], g = 1; g < this._results.length; g++) if (this._results[g].index) {
                    var h = this._results[g].index;
                    f.indexOf(h) === -1 && f.push(h)
                }
                for (var i = 1; i < this._results.length; i++) this._results[i].index = this.game.rnd.pick(f);
                this.paste(a, b, this._results, e)
            }
        }, shuffle: function (a, b, d, e, f) {
            if (f = this.getLayer(f), this.copy(a, b, d, e, f), !(this._results.length < 2)) {
                for (var g = [], h = 1; h < this._results.length; h++) this._results[h].index && g.push(this._results[h].index);
                c.ArrayUtils.shuffle(g);
                for (var i = 1; i < this._results.length; i++) this._results[i].index = g[i - 1];
                this.paste(a, b, this._results, f)
            }
        }, fill: function (a, b, c, d, e, f) {
            if (f = this.getLayer(f), this.copy(b, c, d, e, f), !(this._results.length < 2)) {
                for (var g = 1; g < this._results.length; g++) this._results[g].index = a;
                this.paste(b, c, this._results, f)
            }
        }, removeAllLayers: function () {
            this.layers.length = 0, this.currentLayer = 0
        }, dump: function () {
            for (var a = "", b = [""], c = 0; c < this.layers[this.currentLayer].height; c++) {
                for (var d = 0; d < this.layers[this.currentLayer].width; d++) a += "%c  ", this.layers[this.currentLayer].data[c][d] > 1 ? this.debugMap[this.layers[this.currentLayer].data[c][d]] ? b.push("background: " + this.debugMap[this.layers[this.currentLayer].data[c][d]]) : b.push("background: #ffffff") : b.push("background: rgb(0, 0, 0)");
                a += "\n"
            }
            b[0] = a, console.log.apply(console, b)
        }, destroy: function () {
            this.removeAllLayers(), this.data = [], this.game = null
        }
    },c.Tilemap.prototype.constructor = c.Tilemap,Object.defineProperty(c.Tilemap.prototype, "layer", {
        get: function () {
            return this.layers[this.currentLayer]
        }, set: function (a) {
            a !== this.currentLayer && this.setLayer(a)
        }
    }),c.TilemapLayer = function (a, b, d, e, f) {
        e |= 0, f |= 0, c.Sprite.call(this, a, 0, 0), this.map = b, this.index = d, this.layer = b.layers[d], this.canvas = PIXI.CanvasPool.create(this, e, f), this.context = this.canvas.getContext("2d"), this.setTexture(new PIXI.Texture(new PIXI.BaseTexture(this.canvas))), this.type = c.TILEMAPLAYER, this.physicsType = c.TILEMAPLAYER, this.renderSettings = {
            enableScrollDelta: !1,
            overdrawRatio: .2,
            copyCanvas: null
        }, this.debug = !1, this.exists = !0, this.debugSettings = {
            missingImageFill: "rgb(255,255,255)",
            debuggedTileOverfill: "rgba(0,255,0,0.4)",
            forceFullRedraw: !0,
            debugAlpha: .5,
            facingEdgeStroke: "rgba(0,255,0,1)",
            collidingTileOverfill: "rgba(0,255,0,0.2)"
        }, this.scrollFactorX = 1, this.scrollFactorY = 1, this.dirty = !0, this.rayStepRate = 4, this._wrap = !1, this._mc = {
            scrollX: 0,
            scrollY: 0,
            renderWidth: 0,
            renderHeight: 0,
            tileWidth: b.tileWidth,
            tileHeight: b.tileHeight,
            cw: b.tileWidth,
            ch: b.tileHeight,
            tilesets: []
        }, this._scrollX = 0, this._scrollY = 0, this._results = [], a.device.canvasBitBltShift || (this.renderSettings.copyCanvas = c.TilemapLayer.ensureSharedCopyCanvas()), this.fixedToCamera = !0
    },c.TilemapLayer.prototype = Object.create(c.Sprite.prototype),c.TilemapLayer.prototype.constructor = c.TilemapLayer,c.TilemapLayer.prototype.preUpdateCore = c.Component.Core.preUpdate,c.TilemapLayer.sharedCopyCanvas = null,c.TilemapLayer.ensureSharedCopyCanvas = function () {
        return this.sharedCopyCanvas || (this.sharedCopyCanvas = PIXI.CanvasPool.create(this, 2, 2)), this.sharedCopyCanvas
    },c.TilemapLayer.prototype.preUpdate = function () {
        return this.preUpdateCore()
    },c.TilemapLayer.prototype.postUpdate = function () {
        this.fixedToCamera && (this.position.x = (this.game.camera.view.x + this.cameraOffset.x) / this.game.camera.scale.x, this.position.y = (this.game.camera.view.y + this.cameraOffset.y) / this.game.camera.scale.y), this._scrollX = this.game.camera.view.x * this.scrollFactorX / this.scale.x, this._scrollY = this.game.camera.view.y * this.scrollFactorY / this.scale.y
    },c.TilemapLayer.prototype._renderCanvas = function (a) {
        this.fixedToCamera && (this.position.x = (this.game.camera.view.x + this.cameraOffset.x) / this.game.camera.scale.x, this.position.y = (this.game.camera.view.y + this.cameraOffset.y) / this.game.camera.scale.y), this._scrollX = this.game.camera.view.x * this.scrollFactorX / this.scale.x, this._scrollY = this.game.camera.view.y * this.scrollFactorY / this.scale.y, this.render(), PIXI.Sprite.prototype._renderCanvas.call(this, a)
    },c.TilemapLayer.prototype._renderWebGL = function (a) {
        this.fixedToCamera && (this.position.x = (this.game.camera.view.x + this.cameraOffset.x) / this.game.camera.scale.x, this.position.y = (this.game.camera.view.y + this.cameraOffset.y) / this.game.camera.scale.y), this._scrollX = this.game.camera.view.x * this.scrollFactorX / this.scale.x, this._scrollY = this.game.camera.view.y * this.scrollFactorY / this.scale.y, this.render(), PIXI.Sprite.prototype._renderWebGL.call(this, a)
    },c.TilemapLayer.prototype.destroy = function () {
        PIXI.CanvasPool.remove(this), c.Component.Destroy.prototype.destroy.call(this)
    },c.TilemapLayer.prototype.resize = function (a, b) {
        this.canvas.width = a, this.canvas.height = b, this.texture.frame.resize(a, b), this.texture.width = a, this.texture.height = b, this.texture.crop.width = a, this.texture.crop.height = b, this.texture.baseTexture.width = a, this.texture.baseTexture.height = b, this.texture.baseTexture.dirty(), this.texture.requiresUpdate = !0, this.texture._updateUvs(), this.dirty = !0
    },c.TilemapLayer.prototype.resizeWorld = function () {
        this.game.world.setBounds(0, 0, this.layer.widthInPixels * this.scale.x, this.layer.heightInPixels * this.scale.y)
    },c.TilemapLayer.prototype._fixX = function (a) {
        return 1 === this.scrollFactorX || 0 === this.scrollFactorX && 0 === this.position.x ? a : 0 === this.scrollFactorX && 0 !== this.position.x ? a - this.position.x : this._scrollX + (a - this._scrollX / this.scrollFactorX)
    },c.TilemapLayer.prototype._unfixX = function (a) {
        return 1 === this.scrollFactorX ? a : this._scrollX / this.scrollFactorX + (a - this._scrollX)
    },c.TilemapLayer.prototype._fixY = function (a) {
        return 1 === this.scrollFactorY || 0 === this.scrollFactorY && 0 === this.position.y ? a : 0 === this.scrollFactorY && 0 !== this.position.y ? a - this.position.y : this._scrollY + (a - this._scrollY / this.scrollFactorY)
    },c.TilemapLayer.prototype._unfixY = function (a) {
        return 1 === this.scrollFactorY ? a : this._scrollY / this.scrollFactorY + (a - this._scrollY)
    },c.TilemapLayer.prototype.getTileX = function (a) {
        return Math.floor(this._fixX(a) / this._mc.tileWidth)
    },c.TilemapLayer.prototype.getTileY = function (a) {
        return Math.floor(this._fixY(a) / this._mc.tileHeight)
    },c.TilemapLayer.prototype.getTileXY = function (a, b, c) {
        return c.x = this.getTileX(a), c.y = this.getTileY(b), c
    },c.TilemapLayer.prototype.getRayCastTiles = function (a, b, c, d) {
        b || (b = this.rayStepRate), void 0 === c && (c = !1), void 0 === d && (d = !1);
        var e = this.getTiles(a.x, a.y, a.width, a.height, c, d);
        if (0 === e.length) return [];
        for (var f = a.coordinatesOnLine(b), g = [], h = 0; h < e.length; h++) for (var i = 0; i < f.length; i++) {
            var j = e[h], k = f[i];
            if (j.containsPoint(k[0], k[1])) {
                g.push(j);
                break
            }
        }
        return g
    },c.TilemapLayer.prototype.getTiles = function (a, b, c, d, e, f) {
        void 0 === e && (e = !1), void 0 === f && (f = !1);
        var g = !(e || f);
        a = this._fixX(a), b = this._fixY(b);
        for (var h = Math.floor(a / (this._mc.cw * this.scale.x)), i = Math.floor(b / (this._mc.ch * this.scale.y)), j = Math.ceil((a + c) / (this._mc.cw * this.scale.x)) - h, k = Math.ceil((b + d) / (this._mc.ch * this.scale.y)) - i; this._results.length;) this._results.pop();
        for (var l = i; l < i + k; l++) for (var m = h; m < h + j; m++) {
            var n = this.layer.data[l];
            n && n[m] && (g || n[m].isInteresting(e, f)) && this._results.push(n[m])
        }
        return this._results.slice()
    },c.TilemapLayer.prototype.resolveTileset = function (a) {
        var b = this._mc.tilesets;
        if (a < 2e3) for (; b.length < a;) b.push(void 0);
        var c = this.map.tiles[a] && this.map.tiles[a][2];
        if (null !== c) {
            var d = this.map.tilesets[c];
            if (d && d.containsTileIndex(a)) return b[a] = d
        }
        return b[a] = null
    },c.TilemapLayer.prototype.resetTilesetCache = function () {
        for (var a = this._mc.tilesets; a.length;) a.pop()
    },c.TilemapLayer.prototype.setScale = function (a, b) {
        a = a || 1, b = b || a;
        for (var c = 0; c < this.layer.data.length; c++) for (var d = this.layer.data[c], e = 0; e < d.length; e++) {
            var f = d[e];
            f.width = this.map.tileWidth * a, f.height = this.map.tileHeight * b, f.worldX = f.x * f.width, f.worldY = f.y * f.height
        }
        this.scale.setTo(a, b)
    },c.TilemapLayer.prototype.shiftCanvas = function (a, b, c) {
        var d = a.canvas, e = d.width - Math.abs(b), f = d.height - Math.abs(c), g = 0, h = 0, i = b, j = c;
        b < 0 && (g = -b, i = 0), c < 0 && (h = -c, j = 0);
        var k = this.renderSettings.copyCanvas;
        if (k) {
            (k.width < e || k.height < f) && (k.width = e, k.height = f);
            var l = k.getContext("2d");
            l.clearRect(0, 0, e, f), l.drawImage(d, g, h, e, f, 0, 0, e, f), a.clearRect(i, j, e, f), a.drawImage(k, 0, 0, e, f, i, j, e, f)
        } else a.save(), a.globalCompositeOperation = "copy", a.drawImage(d, g, h, e, f, i, j, e, f), a.restore()
    },c.TilemapLayer.prototype.renderRegion = function (a, b, c, d, e, f) {
        var g = this.context, h = this.layer.width, i = this.layer.height, j = this._mc.tileWidth,
            k = this._mc.tileHeight, l = this._mc.tilesets, m = NaN;
        this._wrap || (c <= e && (c = Math.max(0, c), e = Math.min(h - 1, e)), d <= f && (d = Math.max(0, d), f = Math.min(i - 1, f)));
        var n, o, p, q, r, s, t = c * j - a, u = d * k - b, v = (c + (1 << 20) * h) % h, w = (d + (1 << 20) * i) % i;
        for (q = w, s = f - d, o = u; s >= 0; q++, s--, o += k) {
            q >= i && (q -= i);
            var x = this.layer.data[q];
            for (p = v, r = e - c, n = t; r >= 0; p++, r--, n += j) {
                p >= h && (p -= h);
                var y = x[p];
                if (y && !(y.index < 0)) {
                    var z = y.index, A = l[z];
                    void 0 === A && (A = this.resolveTileset(z)), y.alpha === m || this.debug || (g.globalAlpha = y.alpha, m = y.alpha), A ? y.rotation || y.flipped ? (g.save(), g.translate(n + y.centerX, o + y.centerY), g.rotate(y.rotation), y.flipped && g.scale(-1, 1), A.draw(g, -y.centerX, -y.centerY, z), g.restore()) : A.draw(g, n, o, z) : this.debugSettings.missingImageFill && (g.fillStyle = this.debugSettings.missingImageFill, g.fillRect(n, o, j, k)), y.debug && this.debugSettings.debuggedTileOverfill && (g.fillStyle = this.debugSettings.debuggedTileOverfill, g.fillRect(n, o, j, k))
                }
            }
        }
    },c.TilemapLayer.prototype.renderDeltaScroll = function (a, b) {
        var c = this._mc.scrollX, d = this._mc.scrollY, e = this.canvas.width, f = this.canvas.height,
            g = this._mc.tileWidth, h = this._mc.tileHeight, i = 0, j = -g, k = 0, l = -h;
        if (a < 0 ? (i = e + a, j = e - 1) : a > 0 && (j = a), b < 0 ? (k = f + b, l = f - 1) : b > 0 && (l = b), this.shiftCanvas(this.context, a, b), i = Math.floor((i + c) / g), j = Math.floor((j + c) / g), k = Math.floor((k + d) / h), l = Math.floor((l + d) / h), i <= j) {
            this.context.clearRect(i * g - c, 0, (j - i + 1) * g, f);
            var m = Math.floor((0 + d) / h), n = Math.floor((f - 1 + d) / h);
            this.renderRegion(c, d, i, m, j, n)
        }
        if (k <= l) {
            this.context.clearRect(0, k * h - d, e, (l - k + 1) * h);
            var o = Math.floor((0 + c) / g), p = Math.floor((e - 1 + c) / g);
            this.renderRegion(c, d, o, k, p, l)
        }
    },c.TilemapLayer.prototype.renderFull = function () {
        var a = this._mc.scrollX, b = this._mc.scrollY, c = this.canvas.width, d = this.canvas.height,
            e = this._mc.tileWidth, f = this._mc.tileHeight, g = Math.floor(a / e), h = Math.floor((c - 1 + a) / e),
            i = Math.floor(b / f), j = Math.floor((d - 1 + b) / f);
        this.context.clearRect(0, 0, c, d), this.renderRegion(a, b, g, i, h, j)
    },c.TilemapLayer.prototype.render = function () {
        var a = !1;
        if (this.visible) {
            (this.dirty || this.layer.dirty) && (this.layer.dirty = !1, a = !0);
            var b = this.canvas.width, c = this.canvas.height, d = 0 | this._scrollX, e = 0 | this._scrollY,
                f = this._mc, g = f.scrollX - d, h = f.scrollY - e;
            if (a || 0 !== g || 0 !== h || f.renderWidth !== b || f.renderHeight !== c) return this.context.save(), f.scrollX = d, f.scrollY = e, f.renderWidth === b && f.renderHeight === c || (f.renderWidth = b, f.renderHeight = c), this.debug && (this.context.globalAlpha = this.debugSettings.debugAlpha, this.debugSettings.forceFullRedraw && (a = !0)), !a && this.renderSettings.enableScrollDelta && Math.abs(g) + Math.abs(h) < Math.min(b, c) ? this.renderDeltaScroll(g, h) : this.renderFull(), this.debug && (this.context.globalAlpha = 1, this.renderDebug()), this.texture.baseTexture.dirty(), this.dirty = !1, this.context.restore(), !0
        }
    },c.TilemapLayer.prototype.renderDebug = function () {
        var a, b, c, d, e, f, g = this._mc.scrollX, h = this._mc.scrollY, i = this.context, j = this.canvas.width,
            k = this.canvas.height, l = this.layer.width, m = this.layer.height, n = this._mc.tileWidth,
            o = this._mc.tileHeight, p = Math.floor(g / n), q = Math.floor((j - 1 + g) / n), r = Math.floor(h / o),
            s = Math.floor((k - 1 + h) / o), t = p * n - g, u = r * o - h, v = (p + (1 << 20) * l) % l,
            w = (r + (1 << 20) * m) % m;
        for (i.strokeStyle = this.debugSettings.facingEdgeStroke, d = w, f = s - r, b = u; f >= 0; d++, f--, b += o) {
            d >= m && (d -= m);
            var x = this.layer.data[d];
            for (c = v, e = q - p, a = t; e >= 0; c++, e--, a += n) {
                c >= l && (c -= l);
                var y = x[c];
                !y || y.index < 0 || !y.collides || (this.debugSettings.collidingTileOverfill && (i.fillStyle = this.debugSettings.collidingTileOverfill, i.fillRect(a, b, this._mc.cw, this._mc.ch)), this.debugSettings.facingEdgeStroke && (i.beginPath(), y.faceTop && (i.moveTo(a, b), i.lineTo(a + this._mc.cw, b)), y.faceBottom && (i.moveTo(a, b + this._mc.ch), i.lineTo(a + this._mc.cw, b + this._mc.ch)), y.faceLeft && (i.moveTo(a, b), i.lineTo(a, b + this._mc.ch)), y.faceRight && (i.moveTo(a + this._mc.cw, b), i.lineTo(a + this._mc.cw, b + this._mc.ch)), i.closePath(), i.stroke()))
            }
        }
    },Object.defineProperty(c.TilemapLayer.prototype, "wrap", {
        get: function () {
            return this._wrap
        }, set: function (a) {
            this._wrap = a, this.dirty = !0
        }
    }),Object.defineProperty(c.TilemapLayer.prototype, "scrollX", {
        get: function () {
            return this._scrollX
        }, set: function (a) {
            this._scrollX = a
        }
    }),Object.defineProperty(c.TilemapLayer.prototype, "scrollY", {
        get: function () {
            return this._scrollY
        }, set: function (a) {
            this._scrollY = a
        }
    }),Object.defineProperty(c.TilemapLayer.prototype, "collisionWidth", {
        get: function () {
            return this._mc.cw
        }, set: function (a) {
            this._mc.cw = 0 | a, this.dirty = !0
        }
    }),Object.defineProperty(c.TilemapLayer.prototype, "collisionHeight", {
        get: function () {
            return this._mc.ch
        }, set: function (a) {
            this._mc.ch = 0 | a, this.dirty = !0
        }
    }),c.TilemapParser = {
        INSERT_NULL: !1, parse: function (a, b, d, e, f, g) {
            if (void 0 === d && (d = 32), void 0 === e && (e = 32), void 0 === f && (f = 10), void 0 === g && (g = 10), void 0 === b) return this.getEmptyData();
            if (null === b) return this.getEmptyData(d, e, f, g);
            var h = a.cache.getTilemapData(b);
            if (h) {
                if (h.format === c.Tilemap.CSV) return this.parseCSV(b, h.data, d, e);
                if (!h.format || h.format === c.Tilemap.TILED_JSON) return this.parseTiledJSON(h.data)
            } else console.warn("Phaser.TilemapParser.parse - No map data found for key " + b);
        }, parseCSV: function (a, b, d, e) {
            var f = this.getEmptyData();
            b = b.trim();
            for (var g = [], h = b.split("\n"), i = h.length, j = 0, k = 0; k < h.length; k++) {
                g[k] = [];
                for (var l = h[k].split(","), m = 0; m < l.length; m++) g[k][m] = new c.Tile(f.layers[0], parseInt(l[m], 10), m, k, d, e);
                0 === j && (j = l.length)
            }
            return f.format = c.Tilemap.CSV, f.name = a, f.width = j, f.height = i, f.tileWidth = d, f.tileHeight = e, f.widthInPixels = j * d, f.heightInPixels = i * e, f.layers[0].width = j, f.layers[0].height = i, f.layers[0].widthInPixels = f.widthInPixels, f.layers[0].heightInPixels = f.heightInPixels, f.layers[0].data = g, f
        }, getEmptyData: function (a, b, c, d) {
            return {
                width: void 0 !== c && null !== c ? c : 0,
                height: void 0 !== d && null !== d ? d : 0,
                tileWidth: void 0 !== a && null !== a ? a : 0,
                tileHeight: void 0 !== b && null !== b ? b : 0,
                orientation: "orthogonal",
                version: "1",
                properties: {},
                widthInPixels: 0,
                heightInPixels: 0,
                layers: [{
                    name: "layer",
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0,
                    widthInPixels: 0,
                    heightInPixels: 0,
                    alpha: 1,
                    visible: !0,
                    properties: {},
                    indexes: [],
                    callbacks: [],
                    bodies: [],
                    data: []
                }],
                images: [],
                objects: {},
                collision: {},
                tilesets: [],
                tiles: []
            }
        }, parseTiledJSON: function (a) {
            function b(a, b) {
                var c = {};
                for (var d in b) {
                    var e = b[d];
                    "undefined" != typeof a[e] && (c[e] = a[e])
                }
                return c
            }

            if ("orthogonal" !== a.orientation) return console.warn("TilemapParser.parseTiledJSON - Only orthogonal map types are supported in this version of Phaser"), null;
            for (var d = {
                width: a.width,
                height: a.height,
                tileWidth: a.tilewidth,
                tileHeight: a.tileheight,
                orientation: a.orientation,
                format: c.Tilemap.TILED_JSON,
                version: a.version,
                properties: a.properties,
                widthInPixels: a.width * a.tilewidth,
                heightInPixels: a.height * a.tileheight
            }, e = [], f = 0; f < a.layers.length; f++) if ("tilelayer" === a.layers[f].type) {
                var g = a.layers[f];
                if (!g.compression && g.encoding && "base64" === g.encoding) {
                    for (var h = window.atob(g.data), i = h.length, j = new Array(i), k = 0; k < i; k += 4) j[k / 4] = (h.charCodeAt(k) | h.charCodeAt(k + 1) << 8 | h.charCodeAt(k + 2) << 16 | h.charCodeAt(k + 3) << 24) >>> 0;
                    g.data = j, delete g.encoding
                } else if (g.compression) {
                    console.warn("TilemapParser.parseTiledJSON - Layer compression is unsupported, skipping layer '" + g.name + "'");
                    continue
                }
                var l = {
                    name: g.name,
                    x: g.x,
                    y: g.y,
                    width: g.width,
                    height: g.height,
                    widthInPixels: g.width * a.tilewidth,
                    heightInPixels: g.height * a.tileheight,
                    alpha: g.opacity,
                    visible: g.visible,
                    properties: {},
                    indexes: [],
                    callbacks: [],
                    bodies: []
                };
                g.properties && (l.properties = g.properties);
                for (var m, n, o, p, q = 0, r = [], s = [], t = 0, i = g.data.length; t < i; t++) {
                    if (m = 0, n = !1, p = g.data[t], o = 0, p > 536870912) switch (p > 2147483648 && (p -= 2147483648, o += 4), p > 1073741824 && (p -= 1073741824, o += 2), p > 536870912 && (p -= 536870912, o += 1), o) {
                        case 5:
                            m = Math.PI / 2;
                            break;
                        case 6:
                            m = Math.PI;
                            break;
                        case 3:
                            m = 3 * Math.PI / 2;
                            break;
                        case 4:
                            m = 0, n = !0;
                            break;
                        case 7:
                            m = Math.PI / 2, n = !0;
                            break;
                        case 2:
                            m = Math.PI, n = !0;
                            break;
                        case 1:
                            m = 3 * Math.PI / 2, n = !0
                    }
                    if (p > 0) {
                        var u = new c.Tile(l, p, q, s.length, a.tilewidth, a.tileheight);
                        u.rotation = m, u.flipped = n, 0 !== o && (u.flippedVal = o), r.push(u)
                    } else c.TilemapParser.INSERT_NULL ? r.push(null) : r.push(new c.Tile(l, (-1), q, s.length, a.tilewidth, a.tileheight));
                    q++, q === g.width && (s.push(r), q = 0, r = [])
                }
                l.data = s, e.push(l)
            }
            d.layers = e;
            for (var v = [], f = 0; f < a.layers.length; f++) if ("imagelayer" === a.layers[f].type) {
                var w = a.layers[f], x = {
                    name: w.name,
                    image: w.image,
                    x: w.x,
                    y: w.y,
                    alpha: w.opacity,
                    visible: w.visible,
                    properties: {}
                };
                w.properties && (x.properties = w.properties), v.push(x)
            }
            d.images = v;
            for (var y = [], z = [], A = null, f = 0; f < a.tilesets.length; f++) {
                var B = a.tilesets[f];
                if (B.image) {
                    var C = new c.Tileset(B.name, B.firstgid, B.tilewidth, B.tileheight, B.margin, B.spacing, B.properties);
                    B.tileproperties && (C.tileProperties = B.tileproperties), C.updateTileData(B.imagewidth, B.imageheight), y.push(C)
                } else {
                    var D = new c.ImageCollection(B.name, B.firstgid, B.tilewidth, B.tileheight, B.margin, B.spacing, B.properties);
                    for (var E in B.tiles) {
                        var x = B.tiles[E].image, p = B.firstgid + parseInt(E, 10);
                        D.addImage(p, x)
                    }
                    z.push(D)
                }
                A && (A.lastgid = B.firstgid - 1), A = B
            }
            d.tilesets = y, d.imagecollections = z;
            for (var F = {}, G = {}, f = 0; f < a.layers.length; f++) if ("objectgroup" === a.layers[f].type) {
                var H = a.layers[f];
                F[H.name] = [], G[H.name] = [];
                for (var I = 0, i = H.objects.length; I < i; I++) if (H.objects[I].gid) {
                    var J = {
                        gid: H.objects[I].gid,
                        name: H.objects[I].name,
                        type: H.objects[I].hasOwnProperty("type") ? H.objects[I].type : "",
                        x: H.objects[I].x,
                        y: H.objects[I].y,
                        visible: H.objects[I].visible,
                        properties: H.objects[I].properties
                    };
                    H.objects[I].rotation && (J.rotation = H.objects[I].rotation), F[H.name].push(J)
                } else if (H.objects[I].polyline) {
                    var J = {
                        name: H.objects[I].name,
                        type: H.objects[I].type,
                        x: H.objects[I].x,
                        y: H.objects[I].y,
                        width: H.objects[I].width,
                        height: H.objects[I].height,
                        visible: H.objects[I].visible,
                        properties: H.objects[I].properties
                    };
                    H.objects[I].rotation && (J.rotation = H.objects[I].rotation), J.polyline = [];
                    for (var K = 0; K < H.objects[I].polyline.length; K++) J.polyline.push([H.objects[I].polyline[K].x, H.objects[I].polyline[K].y]);
                    G[H.name].push(J), F[H.name].push(J)
                } else if (H.objects[I].polygon) {
                    var J = b(H.objects[I], ["name", "type", "x", "y", "visible", "rotation", "properties"]);
                    J.polygon = [];
                    for (var K = 0; K < H.objects[I].polygon.length; K++) J.polygon.push([H.objects[I].polygon[K].x, H.objects[I].polygon[K].y]);
                    F[H.name].push(J)
                } else if (H.objects[I].ellipse) {
                    var J = b(H.objects[I], ["name", "type", "ellipse", "x", "y", "width", "height", "visible", "rotation", "properties"]);
                    F[H.name].push(J)
                } else {
                    var J = b(H.objects[I], ["name", "type", "x", "y", "width", "height", "visible", "rotation", "properties"]);
                    J.rectangle = !0, F[H.name].push(J)
                }
            }
            d.objects = F, d.collision = G, d.tiles = [];
            for (var f = 0; f < d.tilesets.length; f++) for (var B = d.tilesets[f], q = B.tileMargin, L = B.tileMargin, M = 0, N = 0, O = 0, t = B.firstgid; t < B.firstgid + B.total && (d.tiles[t] = [q, L, f], q += B.tileWidth + B.tileSpacing, M++, M !== B.total) && (N++, N !== B.columns || (q = B.tileMargin, L += B.tileHeight + B.tileSpacing, N = 0, O++, O !== B.rows)); t++) ;
            for (var l, u, P, B, f = 0; f < d.layers.length; f++) {
                l = d.layers[f], B = null;
                for (var k = 0; k < l.data.length; k++) {
                    r = l.data[k];
                    for (var Q = 0; Q < r.length; Q++) u = r[Q], null === u || u.index < 0 || (P = d.tiles[u.index][2], B = d.tilesets[P], B.tileProperties && B.tileProperties[u.index - B.firstgid] && (u.properties = c.Utils.mixin(B.tileProperties[u.index - B.firstgid], u.properties)))
                }
            }
            return d
        }
    },c.Tileset = function (a, b, c, d, e, f, g) {
        (void 0 === c || c <= 0) && (c = 32), (void 0 === d || d <= 0) && (d = 32), void 0 === e && (e = 0), void 0 === f && (f = 0), this.name = a, this.firstgid = 0 | b, this.tileWidth = 0 | c, this.tileHeight = 0 | d, this.tileMargin = 0 | e, this.tileSpacing = 0 | f, this.properties = g || {}, this.image = null, this.rows = 0, this.columns = 0, this.total = 0, this.drawCoords = []
    },c.Tileset.prototype = {
        draw: function (a, b, c, d) {
            var e = d - this.firstgid << 1;
            e >= 0 && e + 1 < this.drawCoords.length && a.drawImage(this.image, this.drawCoords[e], this.drawCoords[e + 1], this.tileWidth, this.tileHeight, b, c, this.tileWidth, this.tileHeight)
        }, containsTileIndex: function (a) {
            return a >= this.firstgid && a < this.firstgid + this.total
        }, setImage: function (a) {
            this.image = a, this.updateTileData(a.width, a.height)
        }, setSpacing: function (a, b) {
            this.tileMargin = 0 | a, this.tileSpacing = 0 | b, this.image && this.updateTileData(this.image.width, this.image.height)
        }, updateTileData: function (a, b) {
            var c = (b - 2 * this.tileMargin + this.tileSpacing) / (this.tileHeight + this.tileSpacing),
                d = (a - 2 * this.tileMargin + this.tileSpacing) / (this.tileWidth + this.tileSpacing);
            c % 1 === 0 && d % 1 === 0 || console.warn("Phaser.Tileset - " + this.name + " image tile area is not an even multiple of tile size"), c = Math.floor(c), d = Math.floor(d), (this.rows && this.rows !== c || this.columns && this.columns !== d) && console.warn("Phaser.Tileset - actual and expected number of tile rows and columns differ"), this.rows = c, this.columns = d, this.total = c * d, this.drawCoords.length = 0;
            for (var e = this.tileMargin, f = this.tileMargin, g = 0; g < this.rows; g++) {
                for (var h = 0; h < this.columns; h++) this.drawCoords.push(e), this.drawCoords.push(f), e += this.tileWidth + this.tileSpacing;
                e = this.tileMargin, f += this.tileHeight + this.tileSpacing
            }
        }
    },c.Tileset.prototype.constructor = c.Tileset,c.Particle = function (a, b, d, e, f) {
        c.Sprite.call(this, a, b, d, e, f), this.autoScale = !1, this.scaleData = null, this._s = 0, this.autoAlpha = !1, this.alphaData = null, this._a = 0
    },c.Particle.prototype = Object.create(c.Sprite.prototype),c.Particle.prototype.constructor = c.Particle,c.Particle.prototype.update = function () {
        this.autoScale && (this._s--, this._s ? this.scale.set(this.scaleData[this._s].x, this.scaleData[this._s].y) : this.autoScale = !1), this.autoAlpha && (this._a--, this._a ? this.alpha = this.alphaData[this._a].v : this.autoAlpha = !1)
    },c.Particle.prototype.onEmit = function () {
    },c.Particle.prototype.setAlphaData = function (a) {
        this.alphaData = a, this._a = a.length - 1, this.alpha = this.alphaData[this._a].v, this.autoAlpha = !0
    },c.Particle.prototype.setScaleData = function (a) {
        this.scaleData = a, this._s = a.length - 1, this.scale.set(this.scaleData[this._s].x, this.scaleData[this._s].y), this.autoScale = !0
    },c.Particle.prototype.reset = function (a, b, d) {
        return c.Component.Reset.prototype.reset.call(this, a, b, d), this.alpha = 1, this.scale.set(1), this.autoScale = !1, this.autoAlpha = !1, this
    },c.Particles = function (a) {
        this.game = a, this.emitters = {}, this.ID = 0
    },c.Particles.prototype = {
        add: function (a) {
            return this.emitters[a.name] = a, a
        }, remove: function (a) {
            delete this.emitters[a.name]
        }, update: function () {
            for (var a in this.emitters) this.emitters[a].exists && this.emitters[a].update()
        }
    },c.Particles.prototype.constructor = c.Particles,c.Particles.Arcade = {},c.Particles.Arcade.Emitter = function (a, b, d, e) {
        this.maxParticles = e || 50, c.Group.call(this, a), this.name = "emitter" + this.game.particles.ID++, this.type = c.EMITTER, this.physicsType = c.GROUP, this.area = new c.Rectangle(b, d, 1, 1), this.minParticleSpeed = new c.Point((-100), (-100)), this.maxParticleSpeed = new c.Point(100, 100), this.minParticleScale = 1, this.maxParticleScale = 1, this.scaleData = null, this.minRotation = -360, this.maxRotation = 360, this.minParticleAlpha = 1, this.maxParticleAlpha = 1, this.alphaData = null, this.gravity = 100, this.particleClass = c.Particle, this.particleDrag = new c.Point, this.angularDrag = 0, this.frequency = 100, this.lifespan = 2e3, this.bounce = new c.Point, this.on = !1, this.particleAnchor = new c.Point(.5, .5), this.blendMode = c.blendModes.NORMAL, this.emitX = b, this.emitY = d, this.autoScale = !1, this.autoAlpha = !1, this.particleBringToTop = !1, this.particleSendToBack = !1, this._minParticleScale = new c.Point(1, 1), this._maxParticleScale = new c.Point(1, 1), this._quantity = 0, this._timer = 0, this._counter = 0, this._flowQuantity = 0, this._flowTotal = 0, this._explode = !0, this._frames = null
    },c.Particles.Arcade.Emitter.prototype = Object.create(c.Group.prototype),c.Particles.Arcade.Emitter.prototype.constructor = c.Particles.Arcade.Emitter,c.Particles.Arcade.Emitter.prototype.update = function () {
        if (this.on && this.game.time.time >= this._timer) if (this._timer = this.game.time.time + this.frequency * this.game.time.slowMotion, 0 !== this._flowTotal) if (this._flowQuantity > 0) {
            for (var a = 0; a < this._flowQuantity; a++) if (this.emitParticle() && (this._counter++, this._flowTotal !== -1 && this._counter >= this._flowTotal)) {
                this.on = !1;
                break
            }
        } else this.emitParticle() && (this._counter++, this._flowTotal !== -1 && this._counter >= this._flowTotal && (this.on = !1)); else this.emitParticle() && (this._counter++, this._quantity > 0 && this._counter >= this._quantity && (this.on = !1));
        for (var a = this.children.length; a--;) this.children[a].exists && this.children[a].update()
    },c.Particles.Arcade.Emitter.prototype.makeParticles = function (a, b, c, d, e) {
        void 0 === b && (b = 0), void 0 === c && (c = this.maxParticles), void 0 === d && (d = !1), void 0 === e && (e = !1);
        var f, g = 0, h = a, i = b;
        for (this._frames = b, c > this.maxParticles && (this.maxParticles = c); g < c;) Array.isArray(a) && (h = this.game.rnd.pick(a)), Array.isArray(b) && (i = this.game.rnd.pick(b)), f = new this.particleClass(this.game, 0, 0, h, i), this.game.physics.arcade.enable(f, !1), d ? (f.body.checkCollision.any = !0, f.body.checkCollision.none = !1) : f.body.checkCollision.none = !0, f.body.collideWorldBounds = e, f.body.skipQuadTree = !0, f.exists = !1, f.visible = !1, f.anchor.copyFrom(this.particleAnchor), this.add(f), g++;
        return this
    },c.Particles.Arcade.Emitter.prototype.kill = function () {
        return this.on = !1, this.alive = !1, this.exists = !1, this
    },c.Particles.Arcade.Emitter.prototype.revive = function () {
        return this.alive = !0, this.exists = !0, this
    },c.Particles.Arcade.Emitter.prototype.explode = function (a, b) {
        return this._flowTotal = 0, this.start(!0, a, 0, b, !1), this
    },c.Particles.Arcade.Emitter.prototype.flow = function (a, b, c, d, e) {
        return void 0 !== c && 0 !== c || (c = 1), void 0 === d && (d = -1), void 0 === e && (e = !0), c > this.maxParticles && (c = this.maxParticles), this._counter = 0, this._flowQuantity = c, this._flowTotal = d, e ? (this.start(!0, a, b, c), this._counter += c, this.on = !0, this._timer = this.game.time.time + b * this.game.time.slowMotion) : this.start(!1, a, b, c), this
    },c.Particles.Arcade.Emitter.prototype.start = function (a, b, c, d, e) {
        if (void 0 === a && (a = !0), void 0 === b && (b = 0), void 0 !== c && null !== c || (c = 250), void 0 === d && (d = 0), void 0 === e && (e = !1), d > this.maxParticles && (d = this.maxParticles), this.revive(), this.visible = !0, this.lifespan = b, this.frequency = c, a || e) for (var f = 0; f < d; f++) this.emitParticle(); else this.on = !0, this._quantity = d, this._counter = 0, this._timer = this.game.time.time + c * this.game.time.slowMotion;
        return this
    },c.Particles.Arcade.Emitter.prototype.emitParticle = function (a, b, c, d) {
        void 0 === a && (a = null), void 0 === b && (b = null);
        var e = this.getFirstExists(!1);
        if (null === e) return !1;
        var f = this.game.rnd;
        void 0 !== c && void 0 !== d ? e.loadTexture(c, d) : void 0 !== c && e.loadTexture(c);
        var g = this.emitX, h = this.emitY;
        null !== a ? g = a : this.width > 1 && (g = f.between(this.left, this.right)), null !== b ? h = b : this.height > 1 && (h = f.between(this.top, this.bottom)), e.reset(g, h), e.angle = 0, e.lifespan = this.lifespan, this.particleBringToTop ? this.bringToTop(e) : this.particleSendToBack && this.sendToBack(e), this.autoScale ? e.setScaleData(this.scaleData) : 1 !== this.minParticleScale || 1 !== this.maxParticleScale ? e.scale.set(f.realInRange(this.minParticleScale, this.maxParticleScale)) : this._minParticleScale.x === this._maxParticleScale.x && this._minParticleScale.y === this._maxParticleScale.y || e.scale.set(f.realInRange(this._minParticleScale.x, this._maxParticleScale.x), f.realInRange(this._minParticleScale.y, this._maxParticleScale.y)), void 0 === d && (Array.isArray(this._frames) ? e.frame = this.game.rnd.pick(this._frames) : e.frame = this._frames), this.autoAlpha ? e.setAlphaData(this.alphaData) : e.alpha = f.realInRange(this.minParticleAlpha, this.maxParticleAlpha), e.blendMode = this.blendMode;
        var i = e.body;
        return i.updateBounds(), i.bounce.copyFrom(this.bounce), i.drag.copyFrom(this.particleDrag), i.velocity.x = f.between(this.minParticleSpeed.x, this.maxParticleSpeed.x), i.velocity.y = f.between(this.minParticleSpeed.y, this.maxParticleSpeed.y), i.angularVelocity = f.between(this.minRotation, this.maxRotation), i.gravity.y = this.gravity, i.angularDrag = this.angularDrag, e.onEmit(), !0
    },c.Particles.Arcade.Emitter.prototype.destroy = function () {
        this.game.particles.remove(this), c.Group.prototype.destroy.call(this, !0, !1)
    },c.Particles.Arcade.Emitter.prototype.setSize = function (a, b) {
        return this.area.width = a, this.area.height = b, this
    },c.Particles.Arcade.Emitter.prototype.setXSpeed = function (a, b) {
        return a = a || 0, b = b || 0, this.minParticleSpeed.x = a, this.maxParticleSpeed.x = b, this
    },c.Particles.Arcade.Emitter.prototype.setYSpeed = function (a, b) {
        return a = a || 0, b = b || 0, this.minParticleSpeed.y = a, this.maxParticleSpeed.y = b, this
    },c.Particles.Arcade.Emitter.prototype.setRotation = function (a, b) {
        return a = a || 0, b = b || 0, this.minRotation = a, this.maxRotation = b, this
    },c.Particles.Arcade.Emitter.prototype.setAlpha = function (a, b, d, e, f) {
        if (void 0 === a && (a = 1), void 0 === b && (b = 1), void 0 === d && (d = 0), void 0 === e && (e = c.Easing.Linear.None), void 0 === f && (f = !1), this.minParticleAlpha = a, this.maxParticleAlpha = b, this.autoAlpha = !1, d > 0 && a !== b) {
            var g = {v: a}, h = this.game.make.tween(g).to({v: b}, d, e);
            h.yoyo(f), this.alphaData = h.generateData(60), this.alphaData.reverse(), this.autoAlpha = !0
        }
        return this
    },c.Particles.Arcade.Emitter.prototype.setScale = function (a, b, d, e, f, g, h) {
        if (void 0 === a && (a = 1), void 0 === b && (b = 1), void 0 === d && (d = 1), void 0 === e && (e = 1), void 0 === f && (f = 0), void 0 === g && (g = c.Easing.Linear.None), void 0 === h && (h = !1), this.minParticleScale = 1, this.maxParticleScale = 1, this._minParticleScale.set(a, d), this._maxParticleScale.set(b, e), this.autoScale = !1, f > 0 && (a !== b || d !== e)) {
            var i = {x: a, y: d}, j = this.game.make.tween(i).to({x: b, y: e}, f, g);
            j.yoyo(h), this.scaleData = j.generateData(60), this.scaleData.reverse(), this.autoScale = !0
        }
        return this
    },c.Particles.Arcade.Emitter.prototype.at = function (a) {
        return a.center ? (this.emitX = a.center.x, this.emitY = a.center.y) : (this.emitX = a.world.x + a.anchor.x * a.width, this.emitY = a.world.y + a.anchor.y * a.height), this
    },Object.defineProperty(c.Particles.Arcade.Emitter.prototype, "width", {
        get: function () {
            return this.area.width
        }, set: function (a) {
            this.area.width = a
        }
    }),Object.defineProperty(c.Particles.Arcade.Emitter.prototype, "height", {
        get: function () {
            return this.area.height
        }, set: function (a) {
            this.area.height = a
        }
    }),Object.defineProperty(c.Particles.Arcade.Emitter.prototype, "x", {
        get: function () {
            return this.emitX
        }, set: function (a) {
            this.emitX = a
        }
    }),Object.defineProperty(c.Particles.Arcade.Emitter.prototype, "y", {
        get: function () {
            return this.emitY
        }, set: function (a) {
            this.emitY = a
        }
    }),Object.defineProperty(c.Particles.Arcade.Emitter.prototype, "left", {
        get: function () {
            return Math.floor(this.x - this.area.width / 2)
        }
    }),Object.defineProperty(c.Particles.Arcade.Emitter.prototype, "right", {
        get: function () {
            return Math.floor(this.x + this.area.width / 2)
        }
    }),Object.defineProperty(c.Particles.Arcade.Emitter.prototype, "top", {
        get: function () {
            return Math.floor(this.y - this.area.height / 2)
        }
    }),Object.defineProperty(c.Particles.Arcade.Emitter.prototype, "bottom", {
        get: function () {
            return Math.floor(this.y + this.area.height / 2)
        }
    }),c.Weapon = function (a, b) {
        c.Plugin.call(this, a, b), this.bullets = null, this.autoExpandBulletsGroup = !1, this.autofire = !1, this.shots = 0, this.fireLimit = 0, this.fireRate = 100, this.fireRateVariance = 0, this.fireFrom = new c.Rectangle(0, 0, 1, 1), this.fireAngle = c.ANGLE_UP, this.bulletInheritSpriteSpeed = !1, this.bulletAnimation = "", this.bulletFrameRandom = !1, this.bulletFrameCycle = !1, this.bulletWorldWrap = !1, this.bulletWorldWrapPadding = 0, this.bulletAngleOffset = 0, this.bulletAngleVariance = 0, this.bulletSpeed = 200, this.bulletSpeedVariance = 0, this.bulletLifespan = 0, this.bulletKillDistance = 0, this.bulletGravity = new c.Point(0, 0), this.bulletRotateToVelocity = !1, this.bulletKey = "", this.bulletFrame = "", this._bulletClass = c.Bullet, this._bulletCollideWorldBounds = !1, this._bulletKillType = c.Weapon.KILL_WORLD_BOUNDS, this._data = {
            customBody: !1,
            width: 0,
            height: 0,
            offsetX: 0,
            offsetY: 0
        }, this.bounds = new c.Rectangle, this.bulletBounds = a.world.bounds, this.bulletFrames = [], this.bulletFrameIndex = 0, this.anims = {}, this.onFire = new c.Signal, this.onKill = new c.Signal, this.onFireLimit = new c.Signal, this.trackedSprite = null, this.trackedPointer = null, this.trackRotation = !1, this.trackOffset = new c.Point, this._nextFire = 0, this._rotatedPoint = new c.Point
    },c.Weapon.prototype = Object.create(c.Plugin.prototype),c.Weapon.prototype.constructor = c.Weapon,c.Weapon.KILL_NEVER = 0,c.Weapon.KILL_LIFESPAN = 1,c.Weapon.KILL_DISTANCE = 2,c.Weapon.KILL_WEAPON_BOUNDS = 3,c.Weapon.KILL_CAMERA_BOUNDS = 4,c.Weapon.KILL_WORLD_BOUNDS = 5,c.Weapon.KILL_STATIC_BOUNDS = 6,c.Weapon.prototype.createBullets = function (a, b, d, e) {
        return void 0 === a && (a = 1), void 0 === e && (e = this.game.world), this.bullets || (this.bullets = this.game.add.physicsGroup(c.Physics.ARCADE, e), this.bullets.classType = this._bulletClass), 0 !== a && (a === -1 && (this.autoExpandBulletsGroup = !0, a = 1), this.bullets.createMultiple(a, b, d), this.bullets.setAll("data.bulletManager", this), this.bulletKey = b, this.bulletFrame = d), this
    },c.Weapon.prototype.forEach = function (a, b) {
        return this.bullets.forEachExists(a, b, arguments), this
    },c.Weapon.prototype.pauseAll = function () {
        return this.bullets.setAll("body.enable", !1), this
    },c.Weapon.prototype.resumeAll = function () {
        return this.bullets.setAll("body.enable", !0), this
    },c.Weapon.prototype.killAll = function () {
        return this.bullets.callAllExists("kill", !0), this.bullets.setAll("body.enable", !0), this
    },c.Weapon.prototype.resetShots = function (a) {
        return this.shots = 0, void 0 !== a && (this.fireLimit = a), this
    },c.Weapon.prototype.destroy = function () {
        this.parent.remove(this, !1), this.bullets.destroy(), this.game = null, this.parent = null, this.active = !1, this.visible = !1
    },c.Weapon.prototype.update = function () {
        this._bulletKillType === c.Weapon.KILL_WEAPON_BOUNDS && (this.trackedSprite ? (this.trackedSprite.updateTransform(), this.bounds.centerOn(this.trackedSprite.worldPosition.x, this.trackedSprite.worldPosition.y)) : this.trackedPointer && this.bounds.centerOn(this.trackedPointer.worldX, this.trackedPointer.worldY)), this.autofire && this.fire()
    },c.Weapon.prototype.trackSprite = function (a, b, c, d) {
        return void 0 === b && (b = 0), void 0 === c && (c = 0), void 0 === d && (d = !1), this.trackedPointer = null, this.trackedSprite = a, this.trackRotation = d, this.trackOffset.set(b, c), this
    },c.Weapon.prototype.trackPointer = function (a, b, c) {
        return void 0 === a && (a = this.game.input.activePointer), void 0 === b && (b = 0), void 0 === c && (c = 0), this.trackedPointer = a, this.trackedSprite = null, this.trackRotation = !1, this.trackOffset.set(b, c), this
    },c.Weapon.prototype.fire = function (a, b, d) {
        if (this.game.time.now < this._nextFire || this.fireLimit > 0 && this.shots === this.fireLimit) return !1;
        var e = this.bulletSpeed;
        0 !== this.bulletSpeedVariance && (e += c.Math.between(-this.bulletSpeedVariance, this.bulletSpeedVariance)), a ? this.fireFrom.width > 1 ? this.fireFrom.centerOn(a.x, a.y) : (this.fireFrom.x = a.x, this.fireFrom.y = a.y) : this.trackedSprite ? (this.trackRotation ? (this._rotatedPoint.set(this.trackedSprite.world.x + this.trackOffset.x, this.trackedSprite.world.y + this.trackOffset.y), this._rotatedPoint.rotate(this.trackedSprite.world.x, this.trackedSprite.world.y, this.trackedSprite.rotation), this.fireFrom.width > 1 ? this.fireFrom.centerOn(this._rotatedPoint.x, this._rotatedPoint.y) : (this.fireFrom.x = this._rotatedPoint.x, this.fireFrom.y = this._rotatedPoint.y)) : this.fireFrom.width > 1 ? this.fireFrom.centerOn(this.trackedSprite.world.x + this.trackOffset.x, this.trackedSprite.world.y + this.trackOffset.y) : (this.fireFrom.x = this.trackedSprite.world.x + this.trackOffset.x, this.fireFrom.y = this.trackedSprite.world.y + this.trackOffset.y), this.bulletInheritSpriteSpeed && (e += this.trackedSprite.body.speed)) : this.trackedPointer && (this.fireFrom.width > 1 ? this.fireFrom.centerOn(this.trackedPointer.world.x + this.trackOffset.x, this.trackedPointer.world.y + this.trackOffset.y) : (this.fireFrom.x = this.trackedPointer.world.x + this.trackOffset.x, this.fireFrom.y = this.trackedPointer.world.y + this.trackOffset.y));
        var f = this.fireFrom.width > 1 ? this.fireFrom.randomX : this.fireFrom.x,
            g = this.fireFrom.height > 1 ? this.fireFrom.randomY : this.fireFrom.y,
            h = this.trackRotation ? this.trackedSprite.angle : this.fireAngle;
        void 0 !== b && void 0 !== d && (h = this.game.math.radToDeg(Math.atan2(d - g, b - f))), 0 !== this.bulletAngleVariance && (h += c.Math.between(-this.bulletAngleVariance, this.bulletAngleVariance));
        var i = 0, j = 0;
        0 === h || 180 === h ? i = Math.cos(this.game.math.degToRad(h)) * e : 90 === h || 270 === h ? j = Math.sin(this.game.math.degToRad(h)) * e : (i = Math.cos(this.game.math.degToRad(h)) * e, j = Math.sin(this.game.math.degToRad(h)) * e);
        var k = null;
        if (this.autoExpandBulletsGroup ? (k = this.bullets.getFirstExists(!1, !0, f, g, this.bulletKey, this.bulletFrame), k.data.bulletManager = this) : k = this.bullets.getFirstExists(!1), k) {
            if (k.reset(f, g), k.data.fromX = f, k.data.fromY = g, k.data.killType = this.bulletKillType, k.data.killDistance = this.bulletKillDistance, k.data.rotateToVelocity = this.bulletRotateToVelocity, this.bulletKillType === c.Weapon.KILL_LIFESPAN && (k.lifespan = this.bulletLifespan), k.angle = h + this.bulletAngleOffset, "" !== this.bulletAnimation) {
                if (null === k.animations.getAnimation(this.bulletAnimation)) {
                    var l = this.anims[this.bulletAnimation];
                    k.animations.add(l.name, l.frames, l.frameRate, l.loop, l.useNumericIndex)
                }
                k.animations.play(this.bulletAnimation)
            } else this.bulletFrameCycle ? (k.frame = this.bulletFrames[this.bulletFrameIndex], this.bulletFrameIndex++, this.bulletFrameIndex >= this.bulletFrames.length && (this.bulletFrameIndex = 0)) : this.bulletFrameRandom && (k.frame = this.bulletFrames[Math.floor(Math.random() * this.bulletFrames.length)]);
            if (k.data.bodyDirty && (this._data.customBody && k.body.setSize(this._data.width, this._data.height, this._data.offsetX, this._data.offsetY), k.body.collideWorldBounds = this.bulletCollideWorldBounds, k.data.bodyDirty = !1), k.body.velocity.set(i, j), k.body.gravity.set(this.bulletGravity.x, this.bulletGravity.y), 0 !== this.bulletSpeedVariance) {
                var m = this.fireRate;
                m += c.Math.between(-this.fireRateVariance, this.fireRateVariance), m < 0 && (m = 0), this._nextFire = this.game.time.now + m
            } else this._nextFire = this.game.time.now + this.fireRate;
            this.shots++, this.onFire.dispatch(k, this, e), this.fireLimit > 0 && this.shots === this.fireLimit && this.onFireLimit.dispatch(this, this.fireLimit)
        }
        return k
    },c.Weapon.prototype.fireAtPointer = function (a) {
        return void 0 === a && (a = this.game.input.activePointer), this.fire(null, a.worldX, a.worldY)
    },c.Weapon.prototype.fireAtSprite = function (a) {
        return this.fire(null, a.world.x, a.world.y)
    },c.Weapon.prototype.fireAtXY = function (a, b) {
        return this.fire(null, a, b)
    },c.Weapon.prototype.setBulletBodyOffset = function (a, b, c, d) {
        return void 0 === c && (c = 0), void 0 === d && (d = 0), this._data.customBody = !0, this._data.width = a, this._data.height = b, this._data.offsetX = c, this._data.offsetY = d, this.bullets.callAll("body.setSize", "body", a, b, c, d), this.bullets.setAll("data.bodyDirty", !1), this
    },c.Weapon.prototype.setBulletFrames = function (a, b, d, e) {
        return void 0 === d && (d = !0), void 0 === e && (e = !1), this.bulletFrames = c.ArrayUtils.numberArray(a, b), this.bulletFrameIndex = 0, this.bulletFrameCycle = d, this.bulletFrameRandom = e, this
    },c.Weapon.prototype.addBulletAnimation = function (a, b, c, d, e) {
        return this.anims[a] = {
            name: a,
            frames: b,
            frameRate: c,
            loop: d,
            useNumericIndex: e
        }, this.bullets.callAll("animations.add", "animations", a, b, c, d, e), this.bulletAnimation = a, this
    },c.Weapon.prototype.debug = function (a, b, c) {
        void 0 === a && (a = 16), void 0 === b && (b = 32), void 0 === c && (c = !1), this.game.debug.text("Weapon Plugin", a, b), this.game.debug.text("Bullets Alive: " + this.bullets.total + " - Total: " + this.bullets.length, a, b + 24), c && this.bullets.forEachExists(this.game.debug.body, this.game.debug, "rgba(255, 0, 255, 0.8)")
    },Object.defineProperty(c.Weapon.prototype, "bulletClass", {
        get: function () {
            return this._bulletClass
        }, set: function (a) {
            this._bulletClass = a, this.bullets.classType = this._bulletClass
        }
    }),Object.defineProperty(c.Weapon.prototype, "bulletKillType", {
        get: function () {
            return this._bulletKillType
        }, set: function (a) {
            switch (a) {
                case c.Weapon.KILL_STATIC_BOUNDS:
                case c.Weapon.KILL_WEAPON_BOUNDS:
                    this.bulletBounds = this.bounds;
                    break;
                case c.Weapon.KILL_CAMERA_BOUNDS:
                    this.bulletBounds = this.game.camera.view;
                    break;
                case c.Weapon.KILL_WORLD_BOUNDS:
                    this.bulletBounds = this.game.world.bounds
            }
            this._bulletKillType = a
        }
    }),Object.defineProperty(c.Weapon.prototype, "bulletCollideWorldBounds", {
        get: function () {
            return this._bulletCollideWorldBounds
        }, set: function (a) {
            this._bulletCollideWorldBounds = a, this.bullets.setAll("body.collideWorldBounds", a), this.bullets.setAll("data.bodyDirty", !1)
        }
    }),Object.defineProperty(c.Weapon.prototype, "x", {
        get: function () {
            return this.fireFrom.x
        }, set: function (a) {
            this.fireFrom.x = a
        }
    }),Object.defineProperty(c.Weapon.prototype, "y", {
        get: function () {
            return this.fireFrom.y
        }, set: function (a) {
            this.fireFrom.y = a
        }
    }),c.Bullet = function (a, b, d, e, f) {
        c.Sprite.call(this, a, b, d, e, f), this.anchor.set(.5), this.data = {
            bulletManager: null,
            fromX: 0,
            fromY: 0,
            bodyDirty: !0,
            rotateToVelocity: !1,
            killType: 0,
            killDistance: 0
        }
    },c.Bullet.prototype = Object.create(c.Sprite.prototype),c.Bullet.prototype.constructor = c.Bullet,c.Bullet.prototype.kill = function () {
        return this.alive = !1, this.exists = !1, this.visible = !1, this.data.bulletManager.onKill.dispatch(this), this
    },c.Bullet.prototype.update = function () {
        this.exists && (this.data.killType > c.Weapon.KILL_LIFESPAN && (this.data.killType === c.Weapon.KILL_DISTANCE ? this.game.physics.arcade.distanceToXY(this, this.data.fromX, this.data.fromY, !0) > this.data.killDistance && this.kill() : this.data.bulletManager.bulletBounds.intersects(this) || this.kill()), this.data.rotateToVelocity && (this.rotation = Math.atan2(this.body.velocity.y, this.body.velocity.x)), this.data.bulletManager.bulletWorldWrap && this.game.world.wrap(this, this.data.bulletManager.bulletWorldWrapPadding))
    },c.Video = function (a, b, d) {
        if (void 0 === b && (b = null), void 0 === d && (d = null), this.game = a, this.key = b, this.width = 0, this.height = 0, this.type = c.VIDEO, this.disableTextureUpload = !1, this.touchLocked = !1, this.onPlay = new c.Signal, this.onChangeSource = new c.Signal, this.onComplete = new c.Signal, this.onAccess = new c.Signal, this.onError = new c.Signal, this.onTimeout = new c.Signal, this.timeout = 15e3, this._timeOutID = null, this.video = null, this.videoStream = null, this.isStreaming = !1, this.retryLimit = 20, this.retry = 0, this.retryInterval = 500, this._retryID = null, this._codeMuted = !1, this._muted = !1, this._codePaused = !1, this._paused = !1, this._pending = !1, this._autoplay = !1, this._endCallback = null, this._playCallback = null, b && this.game.cache.checkVideoKey(b)) {
            var e = this.game.cache.getVideo(b);
            e.isBlob ? this.createVideoFromBlob(e.data) : this.video = e.data, this.width = this.video.videoWidth, this.height = this.video.videoHeight
        } else d && this.createVideoFromURL(d, !1);
        this.video && !d ? (this.baseTexture = new PIXI.BaseTexture(this.video), this.baseTexture.forceLoaded(this.width, this.height)) : (this.baseTexture = new PIXI.BaseTexture(c.Cache.DEFAULT.baseTexture.source), this.baseTexture.forceLoaded(this.width, this.height)), this.texture = new PIXI.Texture(this.baseTexture), this.textureFrame = new c.Frame(0, 0, 0, this.width, this.height, "video"), this.texture.setFrame(this.textureFrame), this.texture.valid = !1, null !== b && this.video && (this.texture.valid = this.video.canplay), this.snapshot = null, c.BitmapData && (this.snapshot = new c.BitmapData(this.game, "", this.width, this.height)), !this.game.device.cocoonJS && (this.game.device.iOS || this.game.device.android) || window.PhaserGlobal && window.PhaserGlobal.fakeiOSTouchLock ? this.setTouchLock() : e && (e.locked = !1)
    },c.Video.prototype = {
        connectToMediaStream: function (a, b) {
            return a && b && (this.video = a, this.videoStream = b, this.isStreaming = !0, this.baseTexture.source = this.video, this.updateTexture(null, this.video.videoWidth, this.video.videoHeight), this.onAccess.dispatch(this)), this
        }, startMediaStream: function (a, b, c) {
            if (void 0 === a && (a = !1), void 0 === b && (b = null), void 0 === c && (c = null), !this.game.device.getUserMedia) return this.onError.dispatch(this, "No getUserMedia"), !1;
            null !== this.videoStream && (this.videoStream.active ? this.videoStream.active = !1 : this.videoStream.stop()), this.removeVideoElement(), this.video = document.createElement("video"), this.video.setAttribute("autoplay", "autoplay"), null !== b && (this.video.width = b), null !== c && (this.video.height = c), this._timeOutID = window.setTimeout(this.getUserMediaTimeout.bind(this), this.timeout);
            try {
                navigator.getUserMedia({
                    audio: a,
                    video: !0
                }, this.getUserMediaSuccess.bind(this), this.getUserMediaError.bind(this))
            } catch (a) {
                this.getUserMediaError(a)
            }
            return this
        }, getUserMediaTimeout: function () {
            clearTimeout(this._timeOutID), this.onTimeout.dispatch(this)
        }, getUserMediaError: function (a) {
            clearTimeout(this._timeOutID), this.onError.dispatch(this, a)
        }, getUserMediaSuccess: function (a) {
            clearTimeout(this._timeOutID), this.videoStream = a, void 0 !== this.video.mozSrcObject ? this.video.mozSrcObject = a : this.video.src = window.URL && window.URL.createObjectURL(a) || a;
            var b = this;
            this.video.onloadeddata = function () {
                function a() {
                    if (c > 0) if (b.video.videoWidth > 0) {
                        var d = b.video.videoWidth, e = b.video.videoHeight;
                        isNaN(b.video.videoHeight) && (e = d / (4 / 3)), b.video.play(), b.isStreaming = !0, b.baseTexture.source = b.video, b.updateTexture(null, d, e), b.onAccess.dispatch(b)
                    } else window.setTimeout(a, 500); else console.warn("Unable to connect to video stream. Webcam error?");
                    c--
                }

                var c = 10;
                a()
            }
        }, createVideoFromBlob: function (a) {
            var b = this;
            return this.video = document.createElement("video"), this.video.controls = !1, this.video.setAttribute("autoplay", "autoplay"), this.video.addEventListener("loadeddata", function (a) {
                b.updateTexture(a)
            }, !0), this.video.src = window.URL.createObjectURL(a), this.video.canplay = !0, this
        }, createVideoFromURL: function (a, b) {
            return void 0 === b && (b = !1), this.texture && (this.texture.valid = !1), this.video = document.createElement("video"), this.video.controls = !1, b && this.video.setAttribute("autoplay", "autoplay"), this.video.src = a, this.video.canplay = !0, this.video.load(), this.retry = this.retryLimit, this._retryID = window.setTimeout(this.checkVideoProgress.bind(this), this.retryInterval), this.key = a, this
        }, updateTexture: function (a, b, c) {
            var d = !1;
            void 0 !== b && null !== b || (b = this.video.videoWidth, d = !0), void 0 !== c && null !== c || (c = this.video.videoHeight), this.width = b, this.height = c, this.baseTexture.source !== this.video && (this.baseTexture.source = this.video), this.baseTexture.forceLoaded(b, c), this.texture.frame.resize(b, c), this.texture.width = b,
                this.texture.height = c, this.texture.valid = !0, this.snapshot && this.snapshot.resize(b, c), d && null !== this.key && (this.onChangeSource.dispatch(this, b, c), this._autoplay && (this.video.play(), this.onPlay.dispatch(this, this.loop, this.playbackRate)))
        }, complete: function () {
            this.onComplete.dispatch(this)
        }, play: function (a, b) {
            return void 0 === a && (a = !1), void 0 === b && (b = 1), this.game.sound.onMute && (this.game.sound.onMute.add(this.setMute, this), this.game.sound.onUnMute.add(this.unsetMute, this), this.game.sound.mute && this.setMute()), this.game.onPause.add(this.setPause, this), this.game.onResume.add(this.setResume, this), this._endCallback = this.complete.bind(this), this.video.addEventListener("ended", this._endCallback, !0), this.video.addEventListener("webkitendfullscreen", this._endCallback, !0), a ? this.video.loop = "loop" : this.video.loop = "", this.video.playbackRate = b, this.touchLocked ? this._pending = !0 : (this._pending = !1, null !== this.key && (4 !== this.video.readyState ? (this.retry = this.retryLimit, this._retryID = window.setTimeout(this.checkVideoProgress.bind(this), this.retryInterval)) : (this._playCallback = this.playHandler.bind(this), this.video.addEventListener("playing", this._playCallback, !0))), this.video.play(), this.onPlay.dispatch(this, a, b)), this
        }, playHandler: function () {
            this.video.removeEventListener("playing", this._playCallback, !0), this.updateTexture()
        }, stop: function () {
            return this.game.sound.onMute && (this.game.sound.onMute.remove(this.setMute, this), this.game.sound.onUnMute.remove(this.unsetMute, this)), this.game.onPause.remove(this.setPause, this), this.game.onResume.remove(this.setResume, this), this.isStreaming ? (this.video.mozSrcObject ? (this.video.mozSrcObject.stop(), this.video.src = null) : (this.video.src = "", this.videoStream.active ? this.videoStream.active = !1 : this.videoStream.getTracks ? this.videoStream.getTracks().forEach(function (a) {
                a.stop()
            }) : this.videoStream.stop()), this.videoStream = null, this.isStreaming = !1) : (this.video.removeEventListener("ended", this._endCallback, !0), this.video.removeEventListener("webkitendfullscreen", this._endCallback, !0), this.video.removeEventListener("playing", this._playCallback, !0), this.touchLocked ? this._pending = !1 : this.video.pause()), this
        }, add: function (a) {
            if (Array.isArray(a)) for (var b = 0; b < a.length; b++) a[b].loadTexture && a[b].loadTexture(this); else a.loadTexture(this);
            return this
        }, addToWorld: function (a, b, c, d, e, f) {
            e = e || 1, f = f || 1;
            var g = this.game.add.image(a, b, this);
            return g.anchor.set(c, d), g.scale.set(e, f), g
        }, render: function () {
            !this.disableTextureUpload && this.playing && this.baseTexture.dirty()
        }, setMute: function () {
            this._muted || (this._muted = !0, this.video.muted = !0)
        }, unsetMute: function () {
            this._muted && !this._codeMuted && (this._muted = !1, this.video.muted = !1)
        }, setPause: function () {
            this._paused || this.touchLocked || (this._paused = !0, this.video.pause())
        }, setResume: function () {
            !this._paused || this._codePaused || this.touchLocked || (this._paused = !1, this.video.ended || this.video.play())
        }, changeSource: function (a, b) {
            return void 0 === b && (b = !0), this.texture.valid = !1, this.video.pause(), this.retry = this.retryLimit, this._retryID = window.setTimeout(this.checkVideoProgress.bind(this), this.retryInterval), this.video.src = a, this.video.load(), this._autoplay = b, b || (this.paused = !0), this
        }, checkVideoProgress: function () {
            4 === this.video.readyState ? this.updateTexture() : (this.retry--, this.retry > 0 ? this._retryID = window.setTimeout(this.checkVideoProgress.bind(this), this.retryInterval) : console.warn("Phaser.Video: Unable to start downloading video in time", this.isStreaming))
        }, setTouchLock: function () {
            this.game.input.touch.addTouchLockCallback(this.unlock, this), this.touchLocked = !0
        }, unlock: function () {
            if (this.touchLocked = !1, this.video.play(), this.onPlay.dispatch(this, this.loop, this.playbackRate), this.key) {
                var a = this.game.cache.getVideo(this.key);
                a && !a.isBlob && (a.locked = !1)
            }
            return !0
        }, grab: function (a, b, c) {
            return void 0 === a && (a = !1), void 0 === b && (b = 1), void 0 === c && (c = null), null === this.snapshot ? void console.warn("Video.grab cannot run because Phaser.BitmapData is unavailable") : (a && this.snapshot.cls(), this.snapshot.copy(this.video, 0, 0, this.width, this.height, 0, 0, this.width, this.height, 0, 0, 0, 1, 1, b, c), this.snapshot)
        }, removeVideoElement: function () {
            if (this.video) {
                for (this.video.parentNode && this.video.parentNode.removeChild(this.video); this.video.hasChildNodes();) this.video.removeChild(this.video.firstChild);
                this.video.removeAttribute("autoplay"), this.video.removeAttribute("src"), this.video = null
            }
        }, destroy: function () {
            this.stop(), this.removeVideoElement(), this.touchLocked && this.game.input.touch.removeTouchLockCallback(this.unlock, this), this._retryID && window.clearTimeout(this._retryID)
        }
    },Object.defineProperty(c.Video.prototype, "currentTime", {
        get: function () {
            return this.video ? this.video.currentTime : 0
        }, set: function (a) {
            this.video.currentTime = a
        }
    }),Object.defineProperty(c.Video.prototype, "duration", {
        get: function () {
            return this.video ? this.video.duration : 0
        }
    }),Object.defineProperty(c.Video.prototype, "progress", {
        get: function () {
            return this.video ? this.video.currentTime / this.video.duration : 0
        }
    }),Object.defineProperty(c.Video.prototype, "mute", {
        get: function () {
            return this._muted
        }, set: function (a) {
            if (a = a || null) {
                if (this._muted) return;
                this._codeMuted = !0, this.setMute()
            } else {
                if (!this._muted) return;
                this._codeMuted = !1, this.unsetMute()
            }
        }
    }),Object.defineProperty(c.Video.prototype, "paused", {
        get: function () {
            return this._paused
        }, set: function (a) {
            if (a = a || null, !this.touchLocked) if (a) {
                if (this._paused) return;
                this._codePaused = !0, this.setPause()
            } else {
                if (!this._paused) return;
                this._codePaused = !1, this.setResume()
            }
        }
    }),Object.defineProperty(c.Video.prototype, "volume", {
        get: function () {
            return this.video ? this.video.volume : 1
        }, set: function (a) {
            a < 0 ? a = 0 : a > 1 && (a = 1), this.video && (this.video.volume = a)
        }
    }),Object.defineProperty(c.Video.prototype, "playbackRate", {
        get: function () {
            return this.video ? this.video.playbackRate : 1
        }, set: function (a) {
            this.video && (this.video.playbackRate = a)
        }
    }),Object.defineProperty(c.Video.prototype, "loop", {
        get: function () {
            return !!this.video && this.video.loop
        }, set: function (a) {
            a && this.video ? this.video.loop = "loop" : this.video && (this.video.loop = "")
        }
    }),Object.defineProperty(c.Video.prototype, "playing", {
        get: function () {
            return !(this.video.paused && this.video.ended)
        }
    }),c.Video.prototype.constructor = c.Video,void 0 === PIXI.blendModes && (PIXI.blendModes = c.blendModes),void 0 === PIXI.scaleModes && (PIXI.scaleModes = c.scaleModes),void 0 === PIXI.Texture.emptyTexture && (PIXI.Texture.emptyTexture = new PIXI.Texture(new PIXI.BaseTexture)),void 0 === PIXI.DisplayObject._tempMatrix && (PIXI.DisplayObject._tempMatrix = new PIXI.Matrix),void 0 === PIXI.RenderTexture.tempMatrix && (PIXI.RenderTexture.tempMatrix = new PIXI.Matrix),PIXI.Graphics && void 0 === PIXI.Graphics.POLY && (PIXI.Graphics.POLY = c.POLYGON, PIXI.Graphics.RECT = c.RECTANGLE, PIXI.Graphics.CIRC = c.CIRCLE, PIXI.Graphics.ELIP = c.ELLIPSE, PIXI.Graphics.RREC = c.ROUNDEDRECTANGLE),PIXI.TextureSilentFail = !0,"undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = c), exports.Phaser = c) : "undefined" != typeof define && define.amd ? define("Phaser", function () {
        return b.Phaser = c
    }()) : b.Phaser = c,c
}).call(this);
//# sourceMappingURL=phaser-split.map