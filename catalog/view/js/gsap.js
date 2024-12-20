! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function(t) {
    "use strict";

    function i(t, e) {
        t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e
    }

    function C(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function Y(t) {
        return "string" == typeof t
    }

    function l(t) {
        return "function" == typeof t
    }

    function A(t) {
        return "number" == typeof t
    }

    function s(t) {
        return void 0 === t
    }

    function D(t) {
        return "object" == typeof t
    }

    function E(t) {
        return !1 !== t
    }

    function o() {
        return "undefined" != typeof window
    }

    function $(t) {
        return l(t) || Y(t)
    }

    function u(t) {
        return (Nt = Et(t, a)) && f
    }

    function d(t, e) {
        return t && (a[t] = e) && Nt && (Nt[t] = e) || a
    }

    function m() {
        return 0
    }

    function J(t) {
        var e, r, i = t[0];
        if (D(i) || l(i) || (t = [t]), !(e = (i._gsap || {}).harness)) {
            for (r = Ce.length; r-- && !Ce[r].targetTest(i););
            e = Ce[r]
        }
        for (r = t.length; r--;) t[r] && (t[r]._gsap || (t[r]._gsap = new Xe(t[r], e))) || t.splice(r, 1);
        return t
    }

    function K(t) {
        return t._gsap || J(z(t))[0]._gsap
    }

    function g(t, e, r) {
        return (r = t[e]) && l(r) ? t[e]() : s(r) && t.getAttribute && t.getAttribute(e) || r
    }

    function p(t, e) {
        return (t = t.split(",")).forEach(e) || t
    }

    function F(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    }

    function P(t) {
        return Math.round(1e7 * t) / 1e7 || 0
    }

    function tt(t, e) {
        var r = e.charAt(0),
            e = parseFloat(e.substr(2));
        return t = parseFloat(t), "+" === r ? t + e : "-" === r ? t - e : "*" === r ? t * e : t / e
    }

    function et() {
        var t, e, r = be.length,
            i = be.slice(0);
        for (Me = {}, t = be.length = 0; t < r; t++)(e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
    }

    function v(t, e, r, i) {
        be.length && et(), t.render(e, r, i), be.length && et()
    }

    function y(t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(Te).length < 2 ? e : Y(t) ? t.trim() : t
    }

    function T(t) {
        return t
    }

    function B(t, e) {
        for (var r in e) r in t || (t[r] = e[r]);
        return t
    }

    function w(t, e) {
        for (var r in e) "__proto__" !== r && "constructor" !== r && "prototype" !== r && (t[r] = D(e[r]) ? w(t[r] || (t[r] = {}), e[r]) : e[r]);
        return t
    }

    function rt(t, e) {
        var r, i = {};
        for (r in t) r in e || (i[r] = t[r]);
        return i
    }

    function it(t) {
        var i, e = t.parent || I,
            r = t.keyframes ? (i = R(t.keyframes), function(t, e) {
                for (var r in e) r in t || "duration" === r && i || "ease" === r || (t[r] = e[r])
            }) : B;
        if (E(t.inherit))
            for (; e;) r(t, e.vars.defaults), e = e.parent || e._dp;
        return t
    }

    function b(t, e, r, i, n) {
        void 0 === r && (r = "_first");
        var s, a = t[i = void 0 === i ? "_last" : i];
        if (n)
            for (s = e[n]; a && a[n] > s;) a = a._prev;
        a ? (e._next = a._next, a._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = a, e.parent = e._dp = t
    }

    function M(t, e, r, i) {
        void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
        var n = e._prev,
            s = e._next;
        n ? n._next = s : t[r] === e && (t[r] = s), s ? s._prev = n : t[i] === e && (t[i] = n), e._next = e._prev = e.parent = null
    }

    function L(t, e) {
        !t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t), t._act = 0
    }

    function O(t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
            for (var r = t; r;) r._dirty = 1, r = r.parent;
        return t
    }

    function k(t) {
        return t._repeat ? Ft(t._tTime, t = t.duration() + t._rDelay) * t : 0
    }

    function nt(t, e) {
        return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    }

    function st(t) {
        t._end = P(t._start + (t._tDur / Math.abs(t._ts || t._rts || q) || 0))
    }

    function at(t, e) {
        var r = t._dp;
        r && r.smoothChildTiming && t._ts && (t._start = P(r._time - (0 < t._ts ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), st(t), r._dirty || O(r, t))
    }

    function ot(t, e) {
        var r;
        if ((e._time || e._initted && !e._dur) && (r = nt(t.rawTime(), e), (!e._dur || Lt(0, e.totalDuration(), r) - e._tTime > q) && e.render(r, !0)), O(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
                for (r = t; r._dp;) 0 <= r.rawTime() && r.totalTime(r._tTime), r = r._dp;
            t._zTime = -q
        }
    }

    function S(t, e, r, i) {
        return e.parent && L(e), e._start = P((A(r) ? r : r || t !== I ? h(t, r, e) : t._time) + e._delay), e._end = P(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), b(t, e, "_first", "_last", t._sort ? "_start" : 0), Bt(e) || (t._recent = e), i || ot(t, e), t
    }

    function ut(t, e) {
        a.ScrollTrigger && a.ScrollTrigger.create(e, t)
    }

    function ht(t, e, r, i) {
        return We(t, e), !t._initted || !r && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && Vt !== c.frame && (be.push(t), t._lazy = [e, i])
    }

    function ft(t, e, r, i) {
        var n = t._repeat,
            e = P(e) || 0,
            s = t._tTime / t._tDur;
        return s && !i && (t._time *= e / t._dur), t._dur = e, t._tDur = n ? n < 0 ? 1e10 : P(e * (n + 1) + t._rDelay * n) : e, 0 < s && !i ? at(t, t._tTime = t._tDur * s) : t.parent && st(t), r || O(t.parent, t), t
    }

    function lt(t) {
        return t instanceof Q ? O(t) : ft(t, t._dur)
    }

    function _t(t, e, r) {
        var i, n, s = A(e[1]),
            a = (s ? 2 : 1) + (t < 2 ? 0 : 1),
            o = e[a];
        if (s && (o.duration = e[1]), o.parent = r, t) {
            for (i = o, n = r; n && !("immediateRender" in i);) i = n.vars.defaults || {}, n = E(n.vars.inherit) && n.parent;
            o.immediateRender = E(i.immediateRender), t < 2 ? o.runBackwards = 1 : o.startAt = e[a - 1]
        }
        return new W(e[0], o, e[1 + a])
    }

    function pt(t, e) {
        return t || 0 === t ? e(t) : e
    }

    function U(t, e) {
        return Y(t) && (e = xe.exec(t)) ? e[1] : ""
    }

    function ct(t, e) {
        return t && D(t) && "length" in t && (!e && !t.length || t.length - 1 in t && D(t[0])) && !t.nodeType && t !== r
    }

    function dt(t) {
        return t.sort(function() {
            return .5 - Math.random()
        })
    }

    function mt(t) {
        var p, c, d, m, g, v, y, T, x;
        return l(t) ? t : (p = D(t) ? t : {
            each: t
        }, c = Ie(p.ease), d = p.from || 0, m = parseFloat(p.base) || 0, g = {}, t = 0 < d && d < 1, v = isNaN(d) || t, y = p.axis, Y(x = T = d) ? T = x = {
            center: .5,
            edges: .5,
            end: 1
        }[d] || 0 : !t && v && (T = d[0], x = d[1]), function(t, e, r) {
            var i, n, s, a, o, u, h, f, l = (r || p).length,
                _ = g[l];
            if (!_) {
                if (!(f = "auto" === p.grid ? 0 : (p.grid || [1, N])[1])) {
                    for (u = -N; u < (u = r[f++].getBoundingClientRect().left) && f < l;);
                    f--
                }
                for (_ = g[l] = [], i = v ? Math.min(f, l) * T - .5 : d % f, n = f === N ? 0 : v ? l * x / f - .5 : d / f | 0, h = N, o = u = 0; o < l; o++) a = o % f - i, s = n - (o / f | 0), _[o] = a = y ? Math.abs("y" === y ? s : a) : le(a * a + s * s), u < a && (u = a), a < h && (h = a);
                "random" === d && dt(_), _.max = u - h, _.min = h, _.v = l = (parseFloat(p.amount) || parseFloat(p.each) * (l < f ? l - 1 : y ? "y" === y ? l / f : f : Math.max(f, l / f)) || 0) * ("edges" === d ? -1 : 1), _.b = l < 0 ? m - l : m, _.u = U(p.amount || p.each) || 0, c = c && l < 0 ? Le(c) : c
            }
            return l = (_[t] - _.min) / _.max || 0, P(_.b + (c ? c(l) : l) * _.v) + _.u
        })
    }

    function gt(r) {
        var i = Math.pow(10, ((r + "").split(".")[1] || "").length);
        return function(t) {
            var e = Math.round(parseFloat(t) / r) * r * i;
            return (e - e % 1) / i + (A(t) ? 0 : U(t))
        }
    }

    function vt(u, t) {
        var h, f, e = R(u);
        return !e && D(u) && (h = e = u.radius || N, u.values ? (u = z(u.values), (f = !A(u[0])) && (h *= h)) : u = gt(u.increment)), pt(t, e ? l(u) ? function(t) {
            return f = u(t), Math.abs(f - t) <= h ? f : t
        } : function(t) {
            for (var e, r, i = parseFloat(f ? t.x : t), n = parseFloat(f ? t.y : 0), s = N, a = 0, o = u.length; o--;)(e = f ? (e = u[o].x - i) * e + (r = u[o].y - n) * r : Math.abs(u[o] - i)) < s && (s = e, a = o);
            return a = !h || s <= h ? u[a] : t, f || a === t || A(t) ? a : a + U(t)
        } : gt(u))
    }

    function yt(t, e, r, i) {
        return pt(R(t) ? !e : !0 === r ? !!(r = 0) : !i, function() {
            return R(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * i) / i
        })
    }

    function Tt(e, r, t) {
        return pt(t, function(t) {
            return e[~~r(t)]
        })
    }

    function xt(t) {
        for (var e, r, i, n, s = 0, a = ""; ~(e = t.indexOf("random(", s));) i = t.indexOf(")", e), n = "[" === t.charAt(e + 7), r = t.substr(e + 7, i - e - 7).match(n ? Te : de), a += t.substr(s, e - s) + yt(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5), s = i + 1;
        return a + t.substr(s, t.length - s)
    }

    function wt(t, e, r) {
        var i, n, s, a = t.labels,
            o = N;
        for (i in a)(n = a[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (s = i, o = n);
        return s
    }

    function bt(t) {
        return L(t), t.scrollTrigger && t.scrollTrigger.kill(!1), t.progress() < 1 && x(t, "onInterrupt"), t
    }

    function Mt(t, e, r) {
        return (6 * (t += t < 0 ? 1 : 1 < t ? -1 : 0) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * _ + .5 | 0
    }

    function Ot(t, e, r) {
        var i, n, s, a, o, u, h, f = t ? A(t) ? [t >> 16, t >> 8 & _, t & _] : 0 : Se.black;
        if (!f) {
            if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Se[t]) f = Se[t];
            else if ("#" === t.charAt(0)) {
                if (9 === (t = t.length < 6 ? "#" + (i = t.charAt(1)) + i + (n = t.charAt(2)) + n + (s = t.charAt(3)) + s + (5 === t.length ? t.charAt(4) + t.charAt(4) : "") : t).length) return [(f = parseInt(t.substr(1, 6), 16)) >> 16, f >> 8 & _, f & _, parseInt(t.substr(7), 16) / 255];
                f = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & _, t & _]
            } else if ("hsl" === t.substr(0, 3))
                if (f = h = t.match(de), e) {
                    if (~t.indexOf("=")) return f = t.match(me), r && f.length < 4 && (f[3] = 1), f
                } else a = +f[0] % 360 / 360, o = f[1] / 100, i = 2 * (u = f[2] / 100) - (n = u <= .5 ? u * (o + 1) : u + o - u * o), 3 < f.length && (f[3] *= 1), f[0] = Mt(a + 1 / 3, i, n), f[1] = Mt(a, i, n), f[2] = Mt(a - 1 / 3, i, n);
            else f = t.match(de) || Se.transparent;
            f = f.map(Number)
        }
        return e && !h && (i = f[0] / _, n = f[1] / _, s = f[2] / _, u = ((t = Math.max(i, n, s)) + (e = Math.min(i, n, s))) / 2, t === e ? a = o = 0 : (h = t - e, o = .5 < u ? h / (2 - t - e) : h / (t + e), a = t === i ? (n - s) / h + (n < s ? 6 : 0) : t === n ? (s - i) / h + 2 : (i - n) / h + 4, a *= 60), f[0] = ~~(a + .5), f[1] = ~~(100 * o + .5), f[2] = ~~(100 * u + .5)), r && f.length < 4 && (f[3] = 1), f
    }

    function kt(t) {
        var e = [],
            r = [],
            i = -1;
        return t.split(ze).forEach(function(t) {
            t = t.match(ge) || [];
            e.push.apply(e, t), r.push(i += t.length + 1)
        }), e.c = r, e
    }

    function Ct(t, e, r) {
        var i, n, s, a, o = "",
            u = (t + o).match(ze),
            h = e ? "hsla(" : "rgba(",
            f = 0;
        if (!u) return t;
        if (u = u.map(function(t) {
                return (t = Ot(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
            }), r && (s = kt(t), (i = r.c).join(o) !== s.c.join(o)))
            for (a = (n = t.replace(ze, "1").split(ge)).length - 1; f < a; f++) o += n[f] + (~i.indexOf(f) ? u.shift() || h + "0,0,0,0)" : (s.length ? s : u.length ? u : r).shift());
        if (!n)
            for (a = (n = t.split(ze)).length - 1; f < a; f++) o += n[f] + u[f];
        return o + n[a]
    }

    function At(t) {
        var e = t.join(" ");
        if (ze.lastIndex = 0, ze.test(e)) return e = Re.test(e), t[1] = Ct(t[1], e), t[0] = Ct(t[0], e, kt(t[1])), !0
    }

    function Dt(t, e) {
        for (var r, i = t._first; i;) i instanceof Q ? Dt(i, e) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === e || (i.timeline ? Dt(i.timeline, e) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = e)), i = i._next
    }

    function Pt(t, e, r, i) {
        var n, s = {
            easeIn: e,
            easeOut: r = void 0 === r ? function(t) {
                return 1 - e(1 - t)
            } : r,
            easeInOut: i = void 0 === i ? function(t) {
                return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
            } : i
        };
        p(t, function(t) {
            for (var e in j[t] = a[t] = s, j[n = t.toLowerCase()] = r, s) j[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = j[t + "." + e] = s[e]
        })
    }

    function St(e) {
        return function(t) {
            return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2
        }
    }

    function zt(r, t, e) {
        function i(t) {
            return 1 === t ? 1 : n * Math.pow(2, -10 * t) * pe((t - s) * a) + 1
        }
        var n = 1 <= t ? t : 1,
            s = (a = (e || (r ? .3 : .45)) / (t < 1 ? t : 1)) / ue * (Math.asin(1 / n) || 0),
            e = "out" === r ? i : "in" === r ? function(t) {
                return 1 - i(1 - t)
            } : St(i),
            a = ue / a;
        return e.config = function(t, e) {
            return zt(r, t, e)
        }, e
    }

    function Rt(e, r) {
        function i(t) {
            return t ? --t * t * ((r + 1) * t + r) + 1 : 0
        }
        void 0 === r && (r = 1.70158);
        var t = "out" === e ? i : "in" === e ? function(t) {
            return 1 - i(1 - t)
        } : St(i);
        return t.config = function(t) {
            return Rt(e, t)
        }, t
    }

    function Et(t, e) {
        for (var r in e) t[r] = e[r];
        return t
    }

    function Ft(t, e) {
        return e = Math.floor(t /= e), t && e === t ? e - 1 : e
    }

    function Bt(t) {
        return "isFromStart" === (t = t.data) || "isStart" === t
    }

    function h(t, e, r) {
        var i, n, s, a = t.labels,
            o = t._recent || De,
            u = t.duration() >= N ? o.endTime(!1) : t._dur;
        return Y(e) && (isNaN(e) || e in a) ? (n = e.charAt(0), s = "%" === e.substr(-1), i = e.indexOf("="), "<" === n || ">" === n ? (0 <= i && (e = e.replace(/=/, "")), ("<" === n ? o._start : o.endTime(0 <= o._repeat)) + (parseFloat(e.substr(1)) || 0) * (s ? (i < 0 ? o : r).totalDuration() / 100 : 1)) : i < 0 ? (e in a || (a[e] = u), a[e]) : (n = parseFloat(e.charAt(i - 1) + e.substr(i + 1)), s && r && (n = n / 100 * (R(r) ? r[0] : r).totalDuration()), 1 < i ? h(t, e.substr(0, i - 1), r) + n : u + n)) : null == e ? u : +e
    }

    function Lt(t, e, r) {
        return r < t ? t : e < r ? e : r
    }

    function z(t, e, r) {
        return !Y(t) || r || !Ut && Ee() ? R(t) ? (i = r, void 0 === n && (n = []), t.forEach(function(t) {
            return Y(t) && !i || ct(t, 1) ? n.push.apply(n, z(t)) : n.push(t)
        }) || n) : ct(t) ? Pe.call(t, 0) : t ? [t] : [] : Pe.call((e || Xt).querySelectorAll(t), 0);
        var i, n
    }

    function It(e, t, r, i, n) {
        var s = t - e,
            a = i - r;
        return pt(n, function(t) {
            return r + ((t - e) / s * a || 0)
        })
    }

    function x(t, e, r) {
        var i = t.vars,
            n = i[e];
        if (n) e = i[e + "Params"], i = i.callbackScope || t, r && be.length && et(), e ? n.apply(i, e) : n.call(i)
    }
    var Yt, I, r, Ut, Xt, Nt, qt, Vt, jt, Qt, Wt, Gt, Ht, Zt, $t, Jt, Kt, te, ee, re, ie, ne, se, ae, X = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: {
                lineHeight: ""
            }
        },
        oe = {
            duration: .5,
            overwrite: !1,
            delay: 0
        },
        N = 1e8,
        q = 1 / N,
        ue = 2 * Math.PI,
        he = ue / 4,
        fe = 0,
        le = Math.sqrt,
        _e = Math.cos,
        pe = Math.sin,
        ce = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
        R = Array.isArray,
        de = /(?:-?\.?\d|\.)+/gi,
        me = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        ge = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        ve = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        ye = /[+-]=-?[.\d]+/,
        Te = /[^,'"\[\]\s]+/gi,
        xe = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        a = {},
        we = {},
        be = [],
        Me = {},
        V = {},
        Oe = {},
        ke = 30,
        Ce = [],
        Ae = "",
        De = {
            _start: 0,
            endTime: m,
            totalDuration: m
        },
        Pe = [].slice,
        _ = 255,
        Se = {
            aqua: [0, _, _],
            lime: [0, _, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, _],
            navy: [0, 0, 128],
            white: [_, _, _],
            olive: [128, 128, 0],
            yellow: [_, _, 0],
            orange: [_, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [_, 0, 0],
            pink: [_, 192, 203],
            cyan: [0, _, _],
            transparent: [_, _, _, 0]
        },
        ze = function() {
            var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for (t in Se) e += "|" + t + "\\b";
            return new RegExp(e + ")", "gi")
        }(),
        Re = /hsl[a]?\(/,
        c = (Jt = Date.now, Kt = 500, te = 33, ee = Jt(), re = ee, ne = ie = 1e3 / 240, Ht = {
            time: 0,
            frame: 0,
            tick: function() {
                Ye(!0)
            },
            deltaRatio: function(t) {
                return Zt / (1e3 / (t || 60))
            },
            wake: function() {
                qt && (!Ut && o() && (r = Ut = window, Xt = r.document || {}, a.gsap = f, (r.gsapVersions || (r.gsapVersions = [])).push(f.version), u(Nt || r.GreenSockGlobals || !r.gsap && r || {}), Gt = r.requestAnimationFrame), Qt && Ht.sleep(), Wt = Gt || function(t) {
                    return setTimeout(t, ne - 1e3 * Ht.time + 1 | 0)
                }, jt = 1, Ye(2))
            },
            sleep: function() {
                (Gt ? r.cancelAnimationFrame : clearTimeout)(Qt), jt = 0, Wt = m
            },
            lagSmoothing: function(t, e) {
                Kt = t || 1e8, te = Math.min(e, Kt, 0)
            },
            fps: function(t) {
                ie = 1e3 / (t || 240), ne = 1e3 * Ht.time + ie
            },
            add: function(n, t, e) {
                var s = t ? function(t, e, r, i) {
                    n(t, e, r, i), Ht.remove(s)
                } : n;
                return Ht.remove(n), se[e ? "unshift" : "push"](s), Ee(), s
            },
            remove: function(t, e) {
                ~(e = se.indexOf(t)) && se.splice(e, 1) && e <= $t && $t--
            },
            _listeners: se = []
        }),
        Ee = function() {
            return !jt && c.wake()
        },
        j = {},
        Fe = /^[\d.\-M][\d.\-,\s]/,
        Be = /["']/g,
        Le = function(e) {
            return function(t) {
                return 1 - e(1 - t)
            }
        },
        Ie = function(t, e) {
            return t && (l(t) ? t : j[t] || (s = ((t = t) + "").split("("), (a = j[s[0]]) && 1 < s.length && a.config ? a.config.apply(null, ~t.indexOf("{") ? [function(t) {
                for (var e, r, i, n = {}, s = t.substr(1, t.length - 3).split(":"), a = s[0], o = 1, u = s.length; o < u; o++) r = s[o], e = o !== u - 1 ? r.lastIndexOf(",") : r.length, i = r.substr(0, e), n[a] = isNaN(i) ? i.replace(Be, "").trim() : +i, a = r.substr(e + 1).trim();
                return n
            }(s[1])] : (r = (s = t).indexOf("(") + 1, i = s.indexOf(")"), n = s.indexOf("(", r), s.substring(r, ~n && n < i ? s.indexOf(")", i + 1) : i).split(",").map(y))) : j._CE && Fe.test(t) ? j._CE("", t) : a)) || e;
            var r, i, n, s, a
        };

    function Ye(t) {
        var e, r, i, n = Jt() - re,
            s = !0 === t;
        if (Kt < n && (ee += n - te), (0 < (n = (r = (re += n) - ee) - ne) || s) && (i = ++Ht.frame, Zt = r - 1e3 * Ht.time, Ht.time = r /= 1e3, ne += n + (ie <= n ? 4 : ie - n), e = 1), s || (Qt = Wt(Ye)), e)
            for ($t = 0; $t < se.length; $t++) se[$t](r, Zt, i, t)
    }

    function Ue(t) {
        return t < 1 / 2.75 ? ae * t * t : t < .7272727272727273 ? ae * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? ae * (t -= 2.25 / 2.75) * t + .9375 : ae * Math.pow(t - 2.625 / 2.75, 2) + .984375
    }
    p("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
        var r = e < 5 ? e + 1 : e;
        Pt(t + ",Power" + (r - 1), e ? function(t) {
            return Math.pow(t, r)
        } : function(t) {
            return t
        }, function(t) {
            return 1 - Math.pow(1 - t, r)
        }, function(t) {
            return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2
        })
    }), j.Linear.easeNone = j.none = j.Linear.easeIn, Pt("Elastic", zt("in"), zt("out"), zt()), ae = 7.5625, Pt("Bounce", function(t) {
        return 1 - Ue(1 - t)
    }, Ue), Pt("Expo", function(t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
    }), Pt("Circ", function(t) {
        return -(le(1 - t * t) - 1)
    }), Pt("Sine", function(t) {
        return 1 === t ? 1 : 1 - _e(t * he)
    }), Pt("Back", Rt("in"), Rt("out"), Rt()), j.SteppedEase = j.steps = a.SteppedEase = {
        config: function(t, e) {
            var r = 1 / (t = void 0 === t ? 1 : t),
                i = t + (e ? 0 : 1),
                n = e ? 1 : 0;
            return function(t) {
                return ((i * Lt(0, .99999999, t) | 0) + n) * r
            }
        }
    }, oe.ease = j["quad.out"], p("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
        return Ae += t + "," + t + "Params,"
    });
    var Xe = function(t, e) {
            this.id = fe++, (t._gsap = this).target = t, this.harness = e, this.get = e ? e.get : g, this.set = e ? e.getSetter : _r
        },
        Ne = ((e = qe.prototype).delay = function(t) {
            return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
        }, e.duration = function(t) {
            return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
        }, e.totalDuration = function(t) {
            return arguments.length ? (this._dirty = 0, ft(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }, e.totalTime = function(t, e) {
            if (Ee(), !arguments.length) return this._tTime;
            var r = this._dp;
            if (r && r.smoothChildTiming && this._ts) {
                for (at(this, t), r._dp && !r.parent && ot(r, this); r && r.parent;) r.parent._time !== r._start + (0 <= r._ts ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
                !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t < this._tDur || this._ts < 0 && 0 < t || !this._tDur && !t) && S(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === q || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), v(this, t, e)), this
        }, e.time = function(t, e) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + k(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
        }, e.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
        }, e.progress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + k(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
        }, e.iteration = function(t, e) {
            var r = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? Ft(this._tTime, r) + 1 : 1
        }, e.timeScale = function(t) {
            if (!arguments.length) return this._rts === -q ? 0 : this._rts;
            if (this._rts === t) return this;
            for (var e = this.parent && this._ts ? nt(this.parent._time, this) : this._tTime, t = (this._rts = +t || 0, this._ts = this._ps || t === -q ? 0 : this._rts, this.totalTime(Lt(-this._delay, this._tDur, e), !0), st(this), this), r = t.parent; r && r.parent;) r._dirty = 1, r.totalDuration(), r = r.parent;
            return t
        }, e.paused = function(t) {
            return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Ee(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== q && (this._tTime -= q)))), this) : this._ps
        }, e.startTime = function(t) {
            var e;
            return arguments.length ? (this._start = t, !(e = this.parent || this._dp) || !e._sort && this.parent || S(e, this, t - this._delay), this) : this._start
        }, e.endTime = function(t) {
            return this._start + (E(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }, e.rawTime = function(t) {
            var e = this.parent || this._dp;
            return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? nt(e.rawTime(t), this) : this._tTime : this._tTime
        }, e.globalTime = function(t) {
            for (var e = this, r = arguments.length ? t : e.rawTime(); e;) r = e._start + r / (e._ts || 1), e = e._dp;
            return r
        }, e.repeat = function(t) {
            return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, lt(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
        }, e.repeatDelay = function(t) {
            var e;
            return arguments.length ? (e = this._time, this._rDelay = t, lt(this), e ? this.time(e) : this) : this._rDelay
        }, e.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, e.seek = function(t, e) {
            return this.totalTime(h(this, t), E(e))
        }, e.restart = function(t, e) {
            return this.play().totalTime(t ? -this._delay : 0, E(e))
        }, e.play = function(t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }, e.reverse = function(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, e.pause = function(t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
        }, e.resume = function() {
            return this.paused(!1)
        }, e.reversed = function(t) {
            return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -q : 0)), this) : this._rts < 0
        }, e.invalidate = function() {
            return this._initted = this._act = 0, this._zTime = -q, this
        }, e.isActive = function() {
            var t = this.parent || this._dp,
                e = this._start;
            return !(t && !(this._ts && this._initted && t.isActive() && (t = t.rawTime(!0)) >= e && t < this.endTime(!0) - q))
        }, e.eventCallback = function(t, e, r) {
            var i = this.vars;
            return 1 < arguments.length ? (e ? (i[t] = e, r && (i[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t]
        }, e.then = function(i) {
            var n = this;
            return new Promise(function(e) {
                function t() {
                    var t = n.then;
                    n.then = null, l(r) && (r = r(n)) && (r.then || r === n) && (n.then = t), e(r), n.then = t
                }
                var r = l(i) ? i : T;
                n._initted && 1 === n.totalProgress() && 0 <= n._ts || !n._tTime && n._ts < 0 ? t() : n._prom = t
            })
        }, e.kill = function() {
            bt(this)
        }, qe);

    function qe(t) {
        this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, ft(this, +t.duration, 1, 1), this.data = t.data, jt || c.wake()
    }
    B(Ne.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -q,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    i(je, Ve = Ne), (e = je.prototype).to = function(t, e, r) {
        return _t(0, arguments, this), this
    }, e.from = function(t, e, r) {
        return _t(1, arguments, this), this
    }, e.fromTo = function(t, e, r, i) {
        return _t(2, arguments, this), this
    }, e.set = function(t, e, r) {
        return e.duration = 0, e.parent = this, it(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new W(t, e, h(this, r), 1), this
    }, e.call = function(t, e, r) {
        return S(this, W.delayedCall(0, t, e), r)
    }, e.staggerTo = function(t, e, r, i, n, s, a) {
        return r.duration = e, r.stagger = r.stagger || i, r.onComplete = s, r.onCompleteParams = a, r.parent = this, new W(t, r, h(this, n)), this
    }, e.staggerFrom = function(t, e, r, i, n, s, a) {
        return r.runBackwards = 1, it(r).immediateRender = E(r.immediateRender), this.staggerTo(t, e, r, i, n, s, a)
    }, e.staggerFromTo = function(t, e, r, i, n, s, a, o) {
        return i.startAt = r, it(i).immediateRender = E(i.immediateRender), this.staggerTo(t, e, i, n, s, a, o)
    }, e.render = function(t, e, r) {
        var i, n, s, a, o, u, h, f, l, _, p = this._time,
            c = this._dirty ? this.totalDuration() : this._tDur,
            d = this._dur,
            m = t <= 0 ? 0 : P(t),
            g = this._zTime < 0 != t < 0 && (this._initted || !d);
        if ((m = this !== I && c < m && 0 <= t ? c : m) !== this._tTime || r || g) {
            if (p !== this._time && d && (m += this._time - p, t += this._time - p), i = m, f = this._start, o = !(h = this._ts), g && (d || (p = this._zTime), !t && e || (this._zTime = t)), this._repeat) {
                if (g = this._yoyo, a = d + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * a + t, e, r);
                if (i = P(m % a), m === c ? (s = this._repeat, i = d) : ((s = ~~(m / a)) && s === m / a && (i = d, s--), d < i && (i = d)), l = Ft(this._tTime, a), g && 1 & s && (i = d - i, _ = 1), s !== (l = !p && this._tTime && l !== s ? s : l) && !this._lock) {
                    var v = g && 1 & l,
                        g = v === (g && 1 & s),
                        p = (v = s < l ? !v : v) ? 0 : d;
                    if (this._lock = 1, this.render(p || (_ ? 0 : P(s * a)), e, !d)._lock = 0, this._tTime = m, !e && this.parent && x(this, "onRepeat"), this.vars.repeatRefresh && !_ && (this.invalidate()._lock = 1), p && p !== this._time || o != !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                    if (d = this._dur, c = this._tDur, g && (this._lock = 2, this.render(p = v ? d : -1e-4, !0), this.vars.repeatRefresh && !_ && this.invalidate()), this._lock = 0, !this._ts && !o) return this;
                    Dt(this, _)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (u = function(t, e, r) {
                    var i;
                    if (e < r)
                        for (i = t._first; i && i._start <= r;) {
                            if ("isPause" === i.data && i._start > e) return i;
                            i = i._next
                        } else
                            for (i = t._last; i && i._start >= r;) {
                                if ("isPause" === i.data && i._start < e) return i;
                                i = i._prev
                            }
                }(this, P(p), P(i))) && (m -= i - (i = u._start)), this._tTime = m, this._time = i, this._act = !h, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, p = 0), !p && i && !e && (x(this, "onStart"), this._tTime !== m)) return this;
            if (p <= i && 0 <= t)
                for (y = this._first; y;) {
                    if (n = y._next, (y._act || i >= y._start) && y._ts && u !== y) {
                        if (y.parent !== this) return this.render(t, e, r);
                        if (y.render(0 < y._ts ? (i - y._start) * y._ts : (y._dirty ? y.totalDuration() : y._tDur) + (i - y._start) * y._ts, e, r), i !== this._time || !this._ts && !o) {
                            u = 0, n && (m += this._zTime = -q);
                            break
                        }
                    }
                    y = n
                } else
                    for (var y = this._last, T = t < 0 ? t : i; y;) {
                        if (n = y._prev, (y._act || T <= y._end) && y._ts && u !== y) {
                            if (y.parent !== this) return this.render(t, e, r);
                            if (y.render(0 < y._ts ? (T - y._start) * y._ts : (y._dirty ? y.totalDuration() : y._tDur) + (T - y._start) * y._ts, e, r), i !== this._time || !this._ts && !o) {
                                u = 0, n && (m += this._zTime = T ? -q : q);
                                break
                            }
                        }
                        y = n
                    }
            if (u && !e && (this.pause(), u.render(p <= i ? 0 : -q)._zTime = p <= i ? 1 : -1, this._ts)) return this._start = f, st(this), this.render(t, e, r);
            this._onUpdate && !e && x(this, "onUpdate", !0), !(m === c && this._tTime >= this.totalDuration() || !m && p) || f !== this._start && Math.abs(h) === Math.abs(this._ts) || this._lock || (!t && d || !(m === c && 0 < this._ts || !m && this._ts < 0) || L(this, 1), e || t < 0 && !p || !m && !p && c || (x(this, m === c && 0 <= t ? "onComplete" : "onReverseComplete", !0), !this._prom || m < c && 0 < this.timeScale() || this._prom()))
        }
        return this
    }, e.add = function(t, e) {
        var r = this;
        if (A(e) || (e = h(this, e, t)), !(t instanceof Ne)) {
            if (R(t)) return t.forEach(function(t) {
                return r.add(t, e)
            }), this;
            if (Y(t)) return this.addLabel(t, e);
            if (!l(t)) return this;
            t = W.delayedCall(0, t)
        }
        return this !== t ? S(this, t, e) : this
    }, e.getChildren = function(t, e, r, i) {
        void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === i && (i = -N);
        for (var n = [], s = this._first; s;) s._start >= i && (s instanceof W ? e && n.push(s) : (r && n.push(s), t && n.push.apply(n, s.getChildren(!0, e, r)))), s = s._next;
        return n
    }, e.getById = function(t) {
        for (var e = this.getChildren(1, 1, 1), r = e.length; r--;)
            if (e[r].vars.id === t) return e[r]
    }, e.remove = function(t) {
        return Y(t) ? this.removeLabel(t) : l(t) ? this.killTweensOf(t) : (M(this, t), t === this._recent && (this._recent = this._last), O(this))
    }, e.totalTime = function(t, e) {
        return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = P(c.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts))), Ve.prototype.totalTime.call(this, t, e), this._forcing = 0, this) : this._tTime
    }, e.addLabel = function(t, e) {
        return this.labels[t] = h(this, e), this
    }, e.removeLabel = function(t) {
        return delete this.labels[t], this
    }, e.addPause = function(t, e, r) {
        e = W.delayedCall(0, e || m, r);
        return e.data = "isPause", this._hasPause = 1, S(this, e, h(this, t))
    }, e.removePause = function(t) {
        var e = this._first;
        for (t = h(this, t); e;) e._start === t && "isPause" === e.data && L(e), e = e._next
    }, e.killTweensOf = function(t, e, r) {
        for (var i = this.getTweensOf(t, r), n = i.length; n--;) He !== i[n] && i[n].kill(t, e);
        return this
    }, e.getTweensOf = function(t, e) {
        for (var r, i = [], n = z(t), s = this._first, a = A(e); s;) s instanceof W ? function(t, e) {
            for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r;);
            return i < r
        }(s._targets, n) && (a ? (!He || s._initted && s._ts) && s.globalTime(0) <= e && s.globalTime(s.totalDuration()) > e : !e || s.isActive()) && i.push(s) : (r = s.getTweensOf(n, e)).length && i.push.apply(i, r), s = s._next;
        return i
    }, e.tweenTo = function(t, e) {
        e = e || {};
        var r, i = this,
            n = h(i, t),
            s = e.startAt,
            a = e.onStart,
            o = e.onStartParams,
            t = e.immediateRender,
            u = W.to(i, B({
                ease: e.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: n,
                overwrite: "auto",
                duration: e.duration || Math.abs((n - (s && "time" in s ? s.time : i._time)) / i.timeScale()) || q,
                onStart: function() {
                    var t;
                    i.pause(), r || (t = e.duration || Math.abs((n - (s && "time" in s ? s.time : i._time)) / i.timeScale()), u._dur !== t && ft(u, t, 0, 1).render(u._time, !0, !0), r = 1), a && a.apply(u, o || [])
                }
            }, e));
        return t ? u.render(0) : u
    }, e.tweenFromTo = function(t, e, r) {
        return this.tweenTo(e, B({
            startAt: {
                time: h(this, t)
            }
        }, r))
    }, e.recent = function() {
        return this._recent
    }, e.nextLabel = function(t) {
        return void 0 === t && (t = this._time), wt(this, h(this, t))
    }, e.previousLabel = function(t) {
        return void 0 === t && (t = this._time), wt(this, h(this, t), 1)
    }, e.currentLabel = function(t) {
        return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + q)
    }, e.shiftChildren = function(t, e, r) {
        void 0 === r && (r = 0);
        for (var i, n = this._first, s = this.labels; n;) n._start >= r && (n._start += t, n._end += t), n = n._next;
        if (e)
            for (i in s) s[i] >= r && (s[i] += t);
        return O(this)
    }, e.invalidate = function() {
        var t = this._first;
        for (this._lock = 0; t;) t.invalidate(), t = t._next;
        return Ve.prototype.invalidate.call(this)
    }, e.clear = function(t) {
        void 0 === t && (t = !0);
        for (var e, r = this._first; r;) e = r._next, this.remove(r), r = e;
        return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), O(this)
    }, e.totalDuration = function(t) {
        var e, r, i, n = 0,
            s = this,
            a = s._last,
            o = N;
        if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -t : t));
        if (s._dirty) {
            for (i = s.parent; a;) e = a._prev, a._dirty && a.totalDuration(), o < (r = a._start) && s._sort && a._ts && !s._lock ? (s._lock = 1, S(s, a, r - a._delay, 1)._lock = 0) : o = r, r < 0 && a._ts && (n -= r, (!i && !s._dp || i && i.smoothChildTiming) && (s._start += r / s._ts, s._time -= r, s._tTime -= r), s.shiftChildren(-r, !1, -1 / 0), o = 0), a._end > n && a._ts && (n = a._end), a = e;
            ft(s, s === I && s._time > n ? s._time : n, 1, 1), s._dirty = 0
        }
        return s._tDur
    }, je.updateRoot = function(t) {
        if (I._ts && (v(I, nt(t, I)), Vt = c.frame), c.frame >= ke) {
            ke += X.autoSleep || 120;
            var e = I._first;
            if ((!e || !e._ts) && X.autoSleep && c._listeners.length < 2) {
                for (; e && !e._ts;) e = e._next;
                e || c.sleep()
            }
        }
    };
    var Ve, Q = je;

    function je(t, e) {
        var r;
        return (r = Ve.call(this, t = void 0 === t ? {} : t) || this).labels = {}, r.smoothChildTiming = !!t.smoothChildTiming, r.autoRemoveChildren = !!t.autoRemoveChildren, r._sort = E(t.sortChildren), I && S(t.parent || I, C(r), e), t.reversed && r.reverse(), t.paused && r.paused(!0), t.scrollTrigger && ut(C(r), t.scrollTrigger), r
    }

    function Qe(t, e, r, i, n, s) {
        var a, o, u, h;
        if (V[t] && !1 !== (a = new V[t]).init(n, a.rawVars ? e[t] : function(t, e, r, i, n) {
                if (!D(t = l(t) ? Ge(t, n, e, r, i) : t) || t.style && t.nodeType || R(t) || ce(t)) return Y(t) ? Ge(t, n, e, r, i) : t;
                var s, a = {};
                for (s in t) a[s] = Ge(t[s], n, e, r, i);
                return a
            }(e[t], i, n, s, r), r, i, s) && (r._pt = o = new G(r._pt, n, t, 0, 1, a.render, a, 0, a.priority), r !== gr))
            for (u = r._ptLookup[r._targets.indexOf(n)], h = a._props.length; h--;) u[a._props[h]] = o;
        return a
    }
    B(Q.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });

    function We(t, e) {
        var r, i, n, s, a, o, u, h, f, l, _, p, c, d = t.vars,
            m = d.ease,
            g = d.startAt,
            v = d.immediateRender,
            y = d.lazy,
            T = d.onUpdate,
            x = d.onUpdateParams,
            w = d.callbackScope,
            b = d.runBackwards,
            M = d.yoyoEase,
            O = d.keyframes,
            k = d.autoRevert,
            C = t._dur,
            A = t._startAt,
            D = t._targets,
            P = t.parent,
            S = P && "nested" === P.data ? P.parent._targets : D,
            z = "auto" === t._overwrite && !Yt,
            R = t.timeline;
        if (t._ease = Ie(m = !R || O && m ? m : "none", oe.ease), t._yEase = M ? Le(Ie(!0 === M ? m : M, oe.ease)) : 0, M && t._yoyo && !t._repeat && (M = t._yEase, t._yEase = t._ease, t._ease = M), t._from = !R && !!d.runBackwards, !R || O && !d.stagger) {
            if (p = (h = D[0] ? K(D[0]).harness : 0) && d[h.prop], r = rt(d, we), A && (L(A.render(-1, !0)), A._lazy = 0), g)
                if (L(t._startAt = W.set(D, B({
                        data: "isStart",
                        overwrite: !1,
                        parent: P,
                        immediateRender: !0,
                        lazy: E(y),
                        startAt: null,
                        delay: 0,
                        onUpdate: T,
                        onUpdateParams: x,
                        callbackScope: w,
                        stagger: 0
                    }, g))), e < 0 && !v && !k && t._startAt.render(-1, !0), v) {
                    if (0 < e && !k && (t._startAt = 0), C && e <= 0) return void(e && (t._zTime = e))
                } else !1 === k && (t._startAt = 0);
            else if (b && C)
                if (A) k || (t._startAt = 0);
                else if (n = B({
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: (v = e ? !1 : v) && E(y),
                    immediateRender: v,
                    stagger: 0,
                    parent: P
                }, r), p && (n[h.prop] = p), L(t._startAt = W.set(D, n)), e < 0 && t._startAt.render(-1, !0), t._zTime = e, v) {
                if (!e) return
            } else We(t._startAt, q);
            for (t._pt = t._ptCache = 0, y = C && E(y) || y && !C, i = 0; i < D.length; i++) {
                if (u = (a = D[i])._gsap || J(D)[i]._gsap, t._ptLookup[i] = l = {}, Me[u.id] && be.length && et(), _ = S === D ? i : S.indexOf(a), h && !1 !== (f = new h).init(a, p || r, t, _, S) && (t._pt = s = new G(t._pt, a, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach(function(t) {
                        l[t] = s
                    }), f.priority && (o = 1)), !h || p)
                    for (n in r) V[n] && (f = Qe(n, r, t, _, a, S)) ? f.priority && (o = 1) : l[n] = s = Je.call(t, a, n, "get", r[n], _, S, 0, d.stringFilter);
                t._op && t._op[i] && t.kill(a, t._op[i]), z && t._pt && (He = t, I.killTweensOf(a, l, t.globalTime(e)), c = !t.parent, He = 0), t._pt && y && (Me[u.id] = 1)
            }
            o && pr(t), t._onInit && t._onInit(t)
        }
        t._onUpdate = T, t._initted = (!t._op || t._pt) && !c, O && e <= 0 && R.render(N, !0, !0)
    }

    function Ge(t, e, r, i, n) {
        return l(t) ? t.call(e, r, i, n) : Y(t) && ~t.indexOf("random(") ? xt(t) : t
    }
    var He, Ze, $e, Je = function(t, e, r, i, n, s, a, o, u) {
            l(i) && (i = i(n || 0, t, s));
            var h, n = t[e],
                s = "get" !== r ? r : l(n) ? u ? t[e.indexOf("set") || !l(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : n,
                r = l(n) ? u ? sr : nr : ir;
            if (Y(i) && ("=" !== (i = ~i.indexOf("random(") ? xt(i) : i).charAt(1) || !(h = tt(s, i) + (U(s) || 0)) && 0 !== h || (i = h)), s !== i || Ze) return isNaN(s * i) || "" === i ? (n || 0 in t, function(t, e, r, i, n, s, a) {
                var o, u, h, f, l, _ = new G(this._pt, t, e, 0, 1, ur, null, n),
                    p = 0,
                    c = 0;
                for (_.b = r, _.e = i, r += "", (n = ~(i += "").indexOf("random(")) && (i = xt(i)), s && (s(s = [r, i], t, e), r = s[0], i = s[1]), o = r.match(ve) || []; f = ve.exec(i);) h = f[0], f = i.substring(p, f.index), u ? u = (u + 1) % 5 : "rgba(" === f.substr(-5) && (u = 1), h !== o[c++] && (l = parseFloat(o[c - 1]) || 0, _._pt = {
                    _next: _._pt,
                    p: f || 1 === c ? f : ",",
                    s: l,
                    c: "=" === h.charAt(1) ? tt(l, h) - l : parseFloat(h) - l,
                    m: u && u < 4 ? Math.round : 0
                }, p = ve.lastIndex);
                return _.c = p < i.length ? i.substring(p, i.length) : "", _.fp = a, (ye.test(i) || n) && (_.e = 0), this._pt = _
            }.call(this, t, e, s, i, r, o || X.stringFilter, u)) : (h = new G(this._pt, t, e, +s || 0, i - (s || 0), "boolean" == typeof n ? or : ar, 0, r), u && (h.fp = u), a && h.modifier(a, this, t), this._pt = h)
        },
        Ke = Ae + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        tr = {},
        W = (p(Ke + ",id,stagger,delay,duration,paused,scrollTrigger", function(t) {
            return tr[t] = 1
        }), i(n, $e = Ne), (e = n.prototype).render = function(t, e, r) {
            var i, n, s = this._time,
                a = this._tDur,
                o = this._dur,
                u = a - q < t && 0 <= t ? a : t < q ? 0 : t;
            if (o) {
                if (u !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 != t < 0) {
                    if (d = u, _ = this.timeline, this._repeat) {
                        if (h = o + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * h + t, e, r);
                        if (d = P(u % h), u === a ? (g = this._repeat, d = o) : ((g = ~~(u / h)) && g === u / h && (d = o, g--), o < d && (d = o)), (l = this._yoyo && 1 & g) && (f = this._yEase, d = o - d), v = Ft(this._tTime, h), d === s && !r && this._initted) return this._tTime = u, this;
                        g !== v && (_ && this._yEase && Dt(_, l), !this.vars.repeatRefresh || l || this._lock || (this._lock = r = 1, this.render(P(h * g), !0).invalidate()._lock = 0))
                    }
                    if (!this._initted) {
                        if (ht(this, t < 0 ? t : d, r, e)) return this._tTime = 0, this;
                        if (s !== this._time) return this;
                        if (o !== this._dur) return this.render(t, e, r)
                    }
                    if (this._tTime = u, this._time = d, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = n = (f || this._ease)(d / o), this._from && (this.ratio = n = 1 - n), d && !s && !e && (x(this, "onStart"), this._tTime !== u)) return this;
                    for (i = this._pt; i;) i.r(n, i.d), i = i._next;
                    _ && _.render(t < 0 ? t : !d && l ? -q : _._dur * _._ease(d / this._dur), e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, r), x(this, "onUpdate")), this._repeat && g !== v && this.vars.onRepeat && !e && this.parent && x(this, "onRepeat"), u !== this._tDur && u || this._tTime !== u || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0), !t && o || !(u === this._tDur && 0 < this._ts || !u && this._ts < 0) || L(this, 1), e || t < 0 && !s || !u && !s || (x(this, u === a ? "onComplete" : "onReverseComplete", !0), !this._prom || u < a && 0 < this.timeScale() || this._prom()))
                }
            } else {
                var h = this;
                var f = t;
                var l = e;
                var _ = r;
                var p, c, d = h.ratio,
                    m = f < 0 || !f && (!h._start && function t(e) {
                        e = e.parent;
                        return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || t(e))
                    }(h) && (h._initted || !Bt(h)) || (h._ts < 0 || h._dp._ts < 0) && !Bt(h)) ? 0 : 1,
                    g = h._rDelay,
                    v = 0;
                if (g && h._repeat && (v = Lt(0, h._tDur, f), c = Ft(v, g), h._yoyo && 1 & c && (m = 1 - m), c !== Ft(h._tTime, g) && (d = 1 - m, h.vars.repeatRefresh && h._initted && h.invalidate())), m !== d || _ || h._zTime === q || !f && h._zTime) {
                    if (h._initted || !ht(h, f, _, l)) {
                        for (c = h._zTime, h._zTime = f || (l ? q : 0), l = l || f && !c, h.ratio = m, h._from && (m = 1 - m), h._time = 0, h._tTime = v, p = h._pt; p;) p.r(m, p.d), p = p._next;
                        h._startAt && f < 0 && h._startAt.render(f, !0, !0), h._onUpdate && !l && x(h, "onUpdate"), v && h._repeat && !l && h.parent && x(h, "onRepeat"), (f >= h._tDur || f < 0) && h.ratio === m && (m && L(h, 1), l || (x(h, m ? "onComplete" : "onReverseComplete", !0), h._prom && h._prom()))
                    }
                } else h._zTime || (h._zTime = f)
            }
            return this
        }, e.targets = function() {
            return this._targets
        }, e.invalidate = function() {
            return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), $e.prototype.invalidate.call(this)
        }, e.resetTo = function(t, e, r, i) {
            jt || c.wake(), this._ts || this.play();
            var n, s = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
            return this._initted || We(this, s), n = this._ease(s / this._dur),
                function(t, e, r, i, n, s, a) {
                    var o, u, h, f = (t._pt && t._ptCache || (t._ptCache = {}))[e];
                    if (!f)
                        for (f = t._ptCache[e] = [], u = t._ptLookup, h = t._targets.length; h--;) {
                            if ((o = u[h][e]) && o.d && o.d._pt)
                                for (o = o.d._pt; o && o.p !== e;) o = o._next;
                            if (!o) return Ze = 1, t.vars[e] = "+=0", We(t, a), Ze = 0, 1;
                            f.push(o)
                        }
                    for (h = f.length; h--;)(o = f[h]).s = !i && 0 !== i || n ? o.s + (i || 0) + s * o.c : i, o.c = r - o.s, o.e && (o.e = F(r) + U(o.e)), o.b && (o.b = o.s + U(o.b))
                }(this, t, e, r, i, n, s) ? this.resetTo(t, e, r, i) : (at(this, 0), this.parent || b(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
        }, e.kill = function(t, e) {
            if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? bt(this) : this;
            if (this.timeline) _ = this.timeline.totalDuration(), this.timeline.killTweensOf(t, e, He && !0 !== He.vars.overwrite)._first || bt(this), this.parent && _ !== this.timeline.totalDuration() && ft(this, this._dur * this.timeline._tDur / _, 0, 1);
            else {
                var r, i, n, s, a, o, u, h = this._targets,
                    f = t ? z(t) : h,
                    l = this._ptLookup,
                    _ = this._pt;
                if ((!e || "all" === e) && function(t, e) {
                        for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r];);
                        return r < 0
                    }(h, f)) return "all" === e && (this._pt = 0), bt(this);
                for (r = this._op = this._op || [], "all" !== e && (Y(e) && (a = {}, p(e, function(t) {
                        return a[t] = 1
                    }), e = a), e = function(t, e) {
                        var r, i, n, s, t = t[0] ? K(t[0]).harness : 0,
                            a = t && t.aliases;
                        if (!a) return e;
                        for (i in r = Et({}, e), a)
                            if (i in r)
                                for (n = (s = a[i].split(",")).length; n--;) r[s[n]] = r[i];
                        return r
                    }(h, e)), u = h.length; u--;)
                    if (~f.indexOf(h[u]))
                        for (a in i = l[u], "all" === e ? (r[u] = e, s = i, n = {}) : (n = r[u] = r[u] || {}, s = e), s)(o = i && i[a]) && ("kill" in o.d && !0 !== o.d.kill(a) || M(this, o, "_pt"), delete i[a]), "all" !== n && (n[a] = 1);
                this._initted && !this._pt && _ && bt(this)
            }
            return this
        }, n.to = function(t, e, r) {
            return new n(t, e, r)
        }, n.from = function(t, e) {
            return _t(1, arguments)
        }, n.delayedCall = function(t, e, r, i) {
            return new n(e, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: t,
                onComplete: e,
                onReverseComplete: e,
                onCompleteParams: r,
                onReverseCompleteParams: r,
                callbackScope: i
            })
        }, n.fromTo = function(t, e, r) {
            return _t(2, arguments)
        }, n.set = function(t, e) {
            return e.duration = 0, e.repeatDelay || (e.repeat = 0), new n(t, e)
        }, n.killTweensOf = function(t, e, r) {
            return I.killTweensOf(t, e, r)
        }, n);

    function n(t, e, r, i) {
        var n;
        "number" == typeof e && (r.duration = e, e = r, r = null);
        var s, a, o, u, h, f, l, _, i = (n = $e.call(this, i ? e : it(e)) || this).vars,
            p = i.duration,
            c = i.delay,
            d = i.immediateRender,
            m = i.stagger,
            g = i.overwrite,
            v = i.keyframes,
            y = i.defaults,
            T = i.scrollTrigger,
            x = i.yoyoEase,
            i = e.parent || I,
            w = (R(t) || ce(t) ? A(t[0]) : "length" in e) ? [t] : z(t);
        if (n._targets = w.length ? J(w) : !!X.nullTargetWarn || [], n._ptLookup = [], n._overwrite = g, v || m || $(p) || $(c)) {
            if (e = n.vars, (s = n.timeline = new Q({
                    data: "nested",
                    defaults: y || {}
                })).kill(), s.parent = s._dp = C(n), s._start = 0, m || $(p) || $(c)) {
                if (u = w.length, l = m && mt(m), D(m))
                    for (h in m) ~Ke.indexOf(h) && ((_ = _ || {})[h] = m[h]);
                for (a = 0; a < u; a++)(o = rt(e, tr)).stagger = 0, x && (o.yoyoEase = x), _ && Et(o, _), f = w[a], o.duration = +Ge(p, C(n), a, f, w), o.delay = (+Ge(c, C(n), a, f, w) || 0) - n._delay, !m && 1 === u && o.delay && (n._delay = c = o.delay, n._start += c, o.delay = 0), s.to(f, o, l ? l(a, f, w) : 0), s._ease = j.none;
                s.duration() ? p = c = 0 : n.timeline = 0
            } else if (v) {
                it(B(s.vars.defaults, {
                    ease: "none"
                })), s._ease = Ie(v.ease || e.ease || "none");
                var b, M, O, k = 0;
                if (R(v)) v.forEach(function(t) {
                    return s.to(w, t, ">")
                });
                else {
                    for (h in o = {}, v) "ease" !== h && "easeEach" !== h && function(t, r, e, i) {
                        var n, s, a = r.ease || i || "power1.inOut";
                        if (R(r)) s = e[t] || (e[t] = []), r.forEach(function(t, e) {
                            return s.push({
                                t: e / (r.length - 1) * 100,
                                v: t,
                                e: a
                            })
                        });
                        else
                            for (n in r) s = e[n] || (e[n] = []), "ease" !== n && s.push({
                                t: parseFloat(t),
                                v: r[n],
                                e: a
                            })
                    }(h, v[h], o, v.easeEach);
                    for (h in o)
                        for (b = o[h].sort(function(t, e) {
                                return t.t - e.t
                            }), a = k = 0; a < b.length; a++)(O = {
                            ease: (M = b[a]).e,
                            duration: (M.t - (a ? b[a - 1].t : 0)) / 100 * p
                        })[h] = M.v, s.to(w, O, k), k += O.duration;
                    s.duration() < p && s.to({}, {
                        duration: p - s.duration()
                    })
                }
            }
            p || n.duration(p = s.duration())
        } else n.timeline = 0;
        return !0 !== g || Yt || (He = C(n), I.killTweensOf(w), He = 0), S(i, C(n), r), e.reversed && n.reverse(), e.paused && n.paused(!0), (d || !p && !v && n._start === P(i._time) && E(d) && function t(e) {
            return !e || e._ts && t(e.parent)
        }(C(n)) && "nested" !== i.data) && (n._tTime = -q, n.render(Math.max(0, -c))), T && ut(C(n), T), n
    }

    function er(t, e, r) {
        return t.setAttribute(e, r)
    }

    function rr(t, e, r, i) {
        i.mSet(t, e, i.m.call(i.tween, r, i.mt), i)
    }
    B(W.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }), p("staggerTo,staggerFrom,staggerFromTo", function(r) {
        W[r] = function() {
            var t = new Q,
                e = Pe.call(arguments, 0);
            return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0), t[r].apply(t, e)
        }
    });

    function ir(t, e, r) {
        return t[e] = r
    }

    function nr(t, e, r) {
        return t[e](r)
    }

    function sr(t, e, r, i) {
        return t[e](i.fp, r)
    }

    function ar(t, e) {
        return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
    }

    function or(t, e) {
        return e.set(e.t, e.p, !!(e.s + e.c * t), e)
    }

    function ur(t, e) {
        var r = e._pt,
            i = "";
        if (!t && e.b) i = e.b;
        else if (1 === t && e.e) i = e.e;
        else {
            for (; r;) i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i, r = r._next;
            i += e.c
        }
        e.set(e.t, e.p, i, e)
    }

    function hr(t, e) {
        for (var r = e._pt; r;) r.r(t, r.d), r = r._next
    }

    function fr(t, e, r, i) {
        for (var n, s = this._pt; s;) n = s._next, s.p === i && s.modifier(t, e, r), s = n
    }

    function lr(t) {
        for (var e, r, i = this._pt; i;) r = i._next, i.p === t && !i.op || i.op === t ? M(this, i, "_pt") : i.dep || (e = 1), i = r;
        return !e
    }
    var _r = function(t, e) {
            return l(t[e]) ? nr : s(t[e]) && t.setAttribute ? er : ir
        },
        pr = function(t) {
            for (var e, r, i, n, s = t._pt; s;) {
                for (e = s._next, r = i; r && r.pr > s.pr;) r = r._next;
                (s._prev = r ? r._prev : n) ? s._prev._next = s: i = s, (s._next = r) ? r._prev = s : n = s, s = e
            }
            t._pt = i
        },
        G = (cr.prototype.modifier = function(t, e, r) {
            this.mSet = this.mSet || this.set, this.set = rr, this.m = t, this.mt = r, this.tween = e
        }, cr);

    function cr(t, e, r, i, n, s, a, o, u) {
        this.t = e, this.s = i, this.c = n, this.p = r, this.r = s || ar, this.d = a || this, this.set = o || ir, this.pr = u || 0, (this._next = t) && (t._prev = this)
    }
    p(Ae + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
        return we[t] = 1
    }), a.TweenMax = a.TweenLite = W, a.TimelineLite = a.TimelineMax = Q, I = new Q({
        sortChildren: !1,
        defaults: oe,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }), X.stringFilter = At;
    var dr = {
        registerPlugin: function() {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
            e.forEach(function(t) {
                var e = (t = !t.name && t.default || t).name,
                    r = l(t),
                    r = e && !r && t.init ? function() {
                        this._props = []
                    } : t,
                    i = {
                        init: m,
                        render: hr,
                        add: Je,
                        kill: lr,
                        modifier: fr,
                        rawVars: 0
                    },
                    n = {
                        targetTest: 0,
                        get: 0,
                        getSetter: _r,
                        aliases: {},
                        register: 0
                    };
                if (Ee(), t !== r) {
                    if (V[e]) return;
                    B(r, B(rt(t, i), n)), Et(r.prototype, Et(i, rt(t, n))), V[r.prop = e] = r, t.targetTest && (Ce.push(r), we[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                }
                d(e, r), t.register && t.register(f, r, G)
            })
        },
        timeline: function(t) {
            return new Q(t)
        },
        getTweensOf: function(t, e) {
            return I.getTweensOf(t, e)
        },
        getProperty: function(i, t, e, r) {
            var n = K((i = Y(i) ? z(i)[0] : i) || {}).get,
                s = e ? T : y;
            return "native" === e && (e = ""), i && (t ? s((V[t] && V[t].get || n)(i, t, e, r)) : function(t, e, r) {
                return s((V[t] && V[t].get || n)(i, t, e, r))
            })
        },
        quickSetter: function(r, e, i) {
            var n, s;
            if (1 < (r = z(r)).length) return n = r.map(function(t) {
                    return f.quickSetter(t, e, i)
                }), s = n.length,
                function(t) {
                    for (var e = s; e--;) n[e](t)
                };
            r = r[0] || {};
            var a = V[e],
                o = K(r),
                u = o.harness && (o.harness.aliases || {})[e] || e,
                h = a ? function(t) {
                    var e = new a;
                    gr._pt = 0, e.init(r, i ? t + i : t, gr, 0, [r]), e.render(1, e), gr._pt && hr(1, gr)
                } : o.set(r, u);
            return a ? h : function(t) {
                return h(r, u, i ? t + i : t, o, 1)
            }
        },
        quickTo: function(t, i, e) {
            function r(t, e, r) {
                return n.resetTo(i, t, e, r)
            }
            var n = f.to(t, Et(((t = {})[i] = "+=0.1", t.paused = !0, t), e || {}));
            return r.tween = n, r
        },
        isTweening: function(t) {
            return 0 < I.getTweensOf(t, !0).length
        },
        defaults: function(t) {
            return t && t.ease && (t.ease = Ie(t.ease, oe.ease)), w(oe, t || {})
        },
        config: function(t) {
            return w(X, t || {})
        },
        registerEffect: function(t) {
            var i = t.name,
                n = t.effect,
                e = t.plugins,
                s = t.defaults,
                t = t.extendTimeline;
            (e || "").split(",").forEach(function(t) {
                return t && !V[t] && !a[t] && !0
            }), Oe[i] = function(t, e, r) {
                return n(z(t), B(e || {}, s), r)
            }, t && (Q.prototype[i] = function(t, e, r) {
                return this.add(Oe[i](t, D(e) ? e : (r = e) && {}, this), r)
            })
        },
        registerEase: function(t, e) {
            j[t] = Ie(e)
        },
        parseEase: function(t, e) {
            return arguments.length ? Ie(t, e) : j
        },
        getById: function(t) {
            return I.getById(t)
        },
        exportRoot: function(t, e) {
            var r, i, n = new Q(t = void 0 === t ? {} : t);
            for (n.smoothChildTiming = E(t.smoothChildTiming), I.remove(n), n._dp = 0, n._time = n._tTime = I._time, r = I._first; r;) i = r._next, !e && !r._dur && r instanceof W && r.vars.onComplete === r._targets[0] || S(n, r, r._start - r._delay), r = i;
            return S(I, n, 0), n
        },
        utils: {
            wrap: function t(e, r, i) {
                var n = r - e;
                return R(e) ? Tt(e, t(0, e.length), r) : pt(i, function(t) {
                    return (n + (t - e) % n) % n + e
                })
            },
            wrapYoyo: function t(e, r, i) {
                var n = r - e,
                    s = 2 * n;
                return R(e) ? Tt(e, t(0, e.length - 1), r) : pt(i, function(t) {
                    return e + (n < (t = (s + (t - e) % s) % s || 0) ? s - t : t)
                })
            },
            distribute: mt,
            random: yt,
            snap: vt,
            normalize: function(t, e, r) {
                return It(t, e, 0, 1, r)
            },
            getUnit: U,
            clamp: function(e, r, t) {
                return pt(t, function(t) {
                    return Lt(e, r, t)
                })
            },
            splitColor: Ot,
            toArray: z,
            selector: function(r) {
                return r = z(r)[0] || !0,
                    function(t) {
                        var e = r.current || r.nativeElement || r;
                        return z(t, e.querySelectorAll ? e : e === r || r)
                    }
            },
            mapRange: It,
            pipe: function() {
                for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                return function(t) {
                    return e.reduce(function(t, e) {
                        return e(t)
                    }, t)
                }
            },
            unitize: function(e, r) {
                return function(t) {
                    return e(parseFloat(t)) + (r || U(t))
                }
            },
            interpolate: function t(e, r, i, n) {
                var s = isNaN(e + r) ? 0 : function(t) {
                    return (1 - t) * e + t * r
                };
                if (!s) {
                    var a, o, u, h, f, l = Y(e),
                        _ = {};
                    if (!0 === i && (n = 1) && (i = null), l) e = {
                        p: e
                    }, r = {
                        p: r
                    };
                    else if (R(e) && !R(r)) {
                        for (u = [], h = e.length, f = h - 2, o = 1; o < h; o++) u.push(t(e[o - 1], e[o]));
                        h--, s = function(t) {
                            t *= h;
                            var e = Math.min(f, ~~t);
                            return u[e](t - e)
                        }, i = r
                    } else n || (e = Et(R(e) ? [] : {}, e));
                    if (!u) {
                        for (a in r) Je.call(_, e, a, "get", r[a]);
                        s = function(t) {
                            return hr(t, _), l ? e.p : e
                        }
                    }
                }
                return pt(i, s)
            },
            shuffle: dt
        },
        install: u,
        effects: Oe,
        ticker: c,
        updateRoot: Q.updateRoot,
        plugins: V,
        globalTimeline: I,
        core: {
            PropTween: G,
            globals: d,
            Tween: W,
            Timeline: Q,
            Animation: Ne,
            getCache: K,
            _removeLinkedListItem: M,
            suppressOverwrites: function(t) {
                return Yt = t
            }
        }
    };

    function mr(t, f) {
        return {
            name: t,
            rawVars: 1,
            init: function(t, h, e) {
                e._onInit = function(t) {
                    var e, r;
                    if (Y(h) && (e = {}, p(h, function(t) {
                            return e[t] = 1
                        }), h = e), f) {
                        for (r in e = {}, h) e[r] = f(h[r]);
                        h = e
                    }
                    var i, n, s, a = t,
                        o = h,
                        u = a._targets;
                    for (i in o)
                        for (n = u.length; n--;)(s = (s = a._ptLookup[n][i]) && s.d) && (s._pt && (s = function(t, e) {
                            for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) r = r._next;
                            return r
                        }(s, i)), s && s.modifier && s.modifier(o[i], a, u[n], i))
                }
            }
        }
    }
    p("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
        return dr[t] = W[t]
    }), c.add(Q.updateRoot);
    var gr = dr.to({}, {
            duration: 0
        }),
        f = dr.registerPlugin({
            name: "attr",
            init: function(t, e, r, i, n) {
                var s, a;
                for (s in e)(a = this.add(t, "setAttribute", (t.getAttribute(s) || 0) + "", e[s], i, n, 0, 0, s)) && (a.op = s), this._props.push(s)
            }
        }, {
            name: "endArray",
            init: function(t, e) {
                for (var r = e.length; r--;) this.add(t, r, t[r] || 0, e[r])
            }
        }, mr("roundProps", gt), mr("modifiers"), mr("snap", vt)) || dr;

    function vr(t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }

    function yr(t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }

    function Tr(t, e) {
        return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
    }

    function xr(t, e) {
        t = e.s + e.c * t;
        e.set(e.t, e.p, ~~(t + (t < 0 ? -.5 : .5)) + e.u, e)
    }

    function wr(t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e)
    }

    function br(t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
    }

    function Mr(t, e, r) {
        return t.style[e] = r
    }

    function Or(t, e, r) {
        return t.style.setProperty(e, r)
    }

    function kr(t, e, r) {
        return t._gsap[e] = r
    }

    function Cr(t, e, r) {
        return t._gsap.scaleX = t._gsap.scaleY = r
    }

    function Ar(t, e, r, i, n) {
        t = t._gsap;
        t.scaleX = t.scaleY = r, t.renderTransform(n, t)
    }

    function Dr(t, e, r, i, n) {
        t = t._gsap;
        t[e] = r, t.renderTransform(n, t)
    }

    function Pr(t, e) {
        e = Gr.createElementNS ? Gr.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Gr.createElement(t);
        return e.style ? e : Gr.createElement(t)
    }

    function H(t, e, r) {
        var i = getComputedStyle(t);
        return i[e] || i.getPropertyValue(e.replace(xi, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && H(t, Ci(e) || e, 1) || ""
    }

    function Sr() {
        "undefined" != typeof window && window.document && (Hr = (Gr = window.document).documentElement, $r = Pr("div") || {
            style: {}
        }, Pr("div"), Z = Ci(Z), Oi = Z + "Origin", $r.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Kr = !!Ci("perspective"), Zr = 1)
    }

    function zr(t) {
        var e, r = Pr("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            i = this.parentNode,
            n = this.nextSibling,
            s = this.style.cssText;
        if (Hr.appendChild(r), r.appendChild(this), this.style.display = "block", t) try {
            e = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = zr
        } catch (t) {} else this._gsapBBox && (e = this._gsapBBox());
        return i && (n ? i.insertBefore(this, n) : i.appendChild(this)), Hr.removeChild(r), this.style.cssText = s, e
    }

    function Rr(t, e) {
        for (var r = e.length; r--;)
            if (t.hasAttribute(e[r])) return t.getAttribute(e[r])
    }

    function Er(e) {
        var r;
        try {
            r = e.getBBox()
        } catch (t) {
            r = zr.call(e, !0)
        }
        return !(r = r && (r.width || r.height) || e.getBBox === zr ? r : zr.call(e, !0)) || r.width || r.x || r.y ? r : {
            x: +Rr(e, ["x", "cx", "x1"]) || 0,
            y: +Rr(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        }
    }

    function Fr(t) {
        return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !Er(t))
    }

    function Br(t, e) {
        e && (t = t.style, e in gi && e !== Oi && (e = Z), t.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), t.removeProperty(e.replace(xi, "-$1").toLowerCase())) : t.removeAttribute(e))
    }

    function Lr(t, e, r, i, n, s) {
        e = new G(t._pt, e, r, 0, 1, s ? br : wr);
        (t._pt = e).b = i, e.e = n, t._props.push(r)
    }

    function Ir(t, e, r, i) {
        var n, s = parseFloat(r) || 0,
            a = (r + "").trim().substr((s + "").length) || "px",
            o = $r.style,
            u = wi.test(e),
            h = "svg" === t.tagName.toLowerCase(),
            f = (h ? "client" : "offset") + (u ? "Width" : "Height"),
            l = "px" === i,
            _ = "%" === i;
        return i === a || !s || Ai[i] || Ai[a] ? s : ("px" === a || l || (s = Ir(t, e, r, "px")), r = t.getCTM && Fr(t), !_ && "%" !== a || !gi[e] && !~e.indexOf("adius") ? (o[u ? "width" : "height"] = 100 + (l ? a : i), e = ~e.indexOf("adius") || "em" === i && t.appendChild && !h ? t : t.parentNode, (i = (e = (e = r ? (t.ownerSVGElement || {}).parentNode : e) && e !== Gr && e.appendChild ? e : Gr.body)._gsap) && _ && i.width && u && i.time === c.time ? F(s / i.width * 100) : (!_ && "%" !== a || (o.position = H(t, "position")), e === t && (o.position = "static"), e.appendChild($r), n = $r[f], e.removeChild($r), o.position = "absolute", u && _ && ((i = K(e)).time = c.time, i.width = e[f]), F(l ? n * s / 100 : n && s ? 100 / n * s : 0))) : (n = r ? t.getBBox()[u ? "width" : "height"] : t[f], F(_ ? s / n * 100 : s / 100 * n)))
    }

    function Yr(t, e, r, i) {
        var n;
        return Zr || Sr(), e in Mi && "transform" !== e && ~(e = Mi[e]).indexOf(",") && (e = e.split(",")[0]), gi[e] && "transform" !== e ? (n = Ri(t, i), n = "transformOrigin" !== e ? n[e] : n.svg ? n.origin : Ei(H(t, Oi)) + " " + n.zOrigin + "px") : (n = t.style[e]) && "auto" !== n && !i && !~(n + "").indexOf("calc(") || (n = Pi[e] && Pi[e](t, e, r) || H(t, e) || g(t, e) || ("opacity" === e ? 1 : 0)), r && !~(n + "").trim().indexOf(" ") ? Ir(t, e, n, r) + r : n
    }

    function Ur(t, e, r, i) {
        var n;
        r && "none" !== r || ((n = (s = Ci(e, t, 1)) && H(t, s, 1)) && n !== r ? (e = s, r = n) : "borderColor" === e && (r = H(t, "borderTopColor")));
        var s, a, o, u, h, f, l, _, p, c = new G(this._pt, t.style, e, 0, 1, ur),
            d = 0,
            m = 0;
        if (c.b = r, c.e = i, r += "", "auto" == (i += "") && (t.style[e] = i, i = H(t, e) || i, t.style[e] = r), At(s = [r, i]), i = s[1], a = (r = s[0]).match(ge) || [], (i.match(ge) || []).length) {
            for (; l = ge.exec(i);) _ = l[0], l = i.substring(d, l.index), u ? u = (u + 1) % 5 : "rgba(" !== l.substr(-5) && "hsla(" !== l.substr(-5) || (u = 1), _ !== (h = a[m++] || "") && (o = parseFloat(h) || 0, p = h.substr((o + "").length), "=" === _.charAt(1) && (_ = tt(o, _) + p), f = parseFloat(_), _ = _.substr((f + "").length), d = ge.lastIndex - _.length, _ || (_ = _ || X.units[e] || p, d === i.length && (i += _, c.e += _)), p !== _ && (o = Ir(t, e, h, _) || 0), c._pt = {
                _next: c._pt,
                p: l || 1 === m ? l : ",",
                s: o,
                c: f - o,
                m: u && u < 4 || "zIndex" === e ? Math.round : 0
            });
            c.c = d < i.length ? i.substring(d, i.length) : ""
        } else c.r = "display" === e && "none" === i ? br : wr;
        return ye.test(i) && (c.e = 0), this._pt = c
    }

    function Xr(t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var r, i, n, s = e.t,
                a = s.style,
                o = e.u,
                e = s._gsap;
            if ("all" === o || !0 === o) a.cssText = "", i = 1;
            else
                for (n = (o = o.split(",")).length; - 1 < --n;) r = o[n], gi[r] && (i = 1, r = "transformOrigin" === r ? Oi : Z), Br(s, r);
            i && (Br(s, Z), e && (e.svg && s.removeAttribute("transform"), Ri(s, 1), e.uncache = 1))
        }
    }

    function Nr(t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
    }

    function qr(t) {
        t = H(t, Z);
        return Nr(t) ? Si : t.substr(7).match(me).map(F)
    }

    function Vr(t, e) {
        var r, i, n, s = t._gsap || K(t),
            a = t.style,
            o = qr(t);
        return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (o = [(i = t.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(",") ? Si : o : (o !== Si || t.offsetParent || t === Hr || s.svg || (i = a.display, a.display = "block", (s = t.parentNode) && t.offsetParent || (n = 1, r = t.nextSibling, Hr.appendChild(t)), o = qr(t), i ? a.display = i : Br(t, "display"), n && (r ? s.insertBefore(t, r) : s ? s.appendChild(t) : Hr.removeChild(t))), e && 6 < o.length ? [o[0], o[1], o[4], o[5], o[12], o[13]] : o)
    }

    function jr(t, e, r, i, n, s) {
        var a, o = t._gsap,
            n = n || Vr(t, !0),
            u = o.xOrigin || 0,
            h = o.yOrigin || 0,
            f = o.xOffset || 0,
            l = o.yOffset || 0,
            _ = n[0],
            p = n[1],
            c = n[2],
            d = n[3],
            m = n[4],
            g = n[5],
            v = e.split(" "),
            y = parseFloat(v[0]) || 0,
            T = parseFloat(v[1]) || 0;
        r ? n !== Si && (n = _ * d - p * c) && (a = y * (-p / n) + T * (_ / n) - (_ * g - p * m) / n, y = y * (d / n) + T * (-c / n) + (c * g - d * m) / n, T = a) : (y = (n = Er(t)).x + (~v[0].indexOf("%") ? y / 100 * n.width : y), T = n.y + (~(v[1] || v[0]).indexOf("%") ? T / 100 * n.height : T)), i || !1 !== i && o.smooth ? (o.xOffset = f + ((m = y - u) * _ + (g = T - h) * c) - m, o.yOffset = l + (m * p + g * d) - g) : o.xOffset = o.yOffset = 0, o.xOrigin = y, o.yOrigin = T, o.smooth = !!i, o.origin = e, o.originIsAbsolute = !!r, t.style[Oi] = "0px 0px", s && (Lr(s, o, "xOrigin", u, y), Lr(s, o, "yOrigin", h, T), Lr(s, o, "xOffset", f, o.xOffset), Lr(s, o, "yOffset", l, o.yOffset)), t.setAttribute("data-svg-origin", y + " " + T)
    }

    function Qr(t, e, r) {
        var i = U(e);
        return F(parseFloat(e) + parseFloat(Ir(t, "x", r + "px", i))) + i
    }

    function Wr(t, e) {
        for (var r in e) t[r] = e[r];
        return t
    }
    W.version = Q.version = f.version = "3.10.4", qt = 1, o() && Ee();
    var Gr, Hr, Zr, $r, Jr, Kr, e = j.Power0,
        ti = j.Power1,
        ei = j.Power2,
        ri = j.Power3,
        ii = j.Power4,
        ni = j.Linear,
        si = j.Quad,
        ai = j.Cubic,
        oi = j.Quart,
        ui = j.Quint,
        hi = j.Strong,
        fi = j.Elastic,
        li = j.Back,
        _i = j.SteppedEase,
        pi = j.Bounce,
        ci = j.Sine,
        di = j.Expo,
        mi = j.Circ,
        gi = {},
        vi = 180 / Math.PI,
        yi = Math.PI / 180,
        Ti = Math.atan2,
        xi = /([A-Z])/g,
        wi = /(left|right|width|margin|padding|x)/i,
        bi = /[\s,\(]\S/,
        Mi = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity"
        },
        Z = "transform",
        Oi = Z + "Origin",
        ki = "O,Moz,ms,Ms,Webkit".split(","),
        Ci = function(t, e, r) {
            var i = (e || $r).style,
                n = 5;
            if (t in i && !r) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(ki[n] + t in i););
            return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? ki[n] : "") + t
        },
        Ai = {
            deg: 1,
            rad: 1,
            turn: 1
        },
        Di = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%"
        },
        Pi = {
            clearProps: function(t, e, r, i, n) {
                if ("isFromStart" !== n.data) return (e = t._pt = new G(t._pt, e, r, 0, 0, Xr)).u = i, e.pr = -10, e.tween = n, t._props.push(r), 1
            }
        },
        Si = [1, 0, 0, 1, 0, 0],
        zi = {},
        Ri = function(t, e) {
            var r, i, n, s, a, o, u, h, f, l, _, p, c, d, m, g, v, y, T, x, w, b, M, O, k, C, A, D, P, S, z, R, E = t._gsap || new Xe(t);
            return "x" in E && !e && !E.uncache || (A = t.style, D = E.scaleX < 0, P = "deg", S = H(t, Oi) || "0", z = r = i = s = a = o = u = h = 0, R = n = 1, E.svg = !(!t.getCTM || !Fr(t)), f = Vr(t, E.svg), E.svg && (y = (!E.uncache || "0px 0px" === S) && !e && t.getAttribute("data-svg-origin"), jr(t, y || S, !!y || E.originIsAbsolute, !1 !== E.smooth, f)), C = E.xOrigin || 0, O = E.yOrigin || 0, f !== Si && (p = f[0], c = f[1], d = f[2], m = f[3], z = g = f[4], r = v = f[5], 6 === f.length ? (R = Math.sqrt(p * p + c * c), n = Math.sqrt(m * m + d * d), s = p || c ? Ti(c, p) * vi : 0, (u = d || m ? Ti(d, m) * vi + s : 0) && (n *= Math.abs(Math.cos(u * yi))), E.svg && (z -= C - (C * p + O * d), r -= O - (C * c + O * m))) : (C = f[6], O = f[7], w = f[8], b = f[9], M = f[10], k = f[11], z = f[12], r = f[13], i = f[14], a = (f = Ti(C, M)) * vi, f && (y = g * (l = Math.cos(-f)) + w * (_ = Math.sin(-f)), T = v * l + b * _, x = C * l + M * _, w = g * -_ + w * l, b = v * -_ + b * l, M = C * -_ + M * l, k = O * -_ + k * l, g = y, v = T, C = x), o = (f = Ti(-d, M)) * vi, f && (l = Math.cos(-f), k = m * (_ = Math.sin(-f)) + k * l, p = y = p * l - w * _, c = T = c * l - b * _, d = x = d * l - M * _), s = (f = Ti(c, p)) * vi, f && (y = p * (l = Math.cos(f)) + c * (_ = Math.sin(f)), T = g * l + v * _, c = c * l - p * _, v = v * l - g * _, p = y, g = T), a && 359.9 < Math.abs(a) + Math.abs(s) && (a = s = 0, o = 180 - o), R = F(Math.sqrt(p * p + c * c + d * d)), n = F(Math.sqrt(v * v + C * C)), f = Ti(g, v), u = 2e-4 < Math.abs(f) ? f * vi : 0, h = k ? 1 / (k < 0 ? -k : k) : 0), E.svg && (y = t.getAttribute("transform"), E.forceCSS = t.setAttribute("transform", "") || !Nr(H(t, Z)), y && t.setAttribute("transform", y))), 90 < Math.abs(u) && Math.abs(u) < 270 && (D ? (R *= -1, u += s <= 0 ? 180 : -180, s += s <= 0 ? 180 : -180) : (n *= -1, u += u <= 0 ? 180 : -180)), e = e || E.uncache, E.x = z - ((E.xPercent = z && (!e && E.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-z) ? -50 : 0))) ? t.offsetWidth * E.xPercent / 100 : 0) + "px", E.y = r - ((E.yPercent = r && (!e && E.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-r) ? -50 : 0))) ? t.offsetHeight * E.yPercent / 100 : 0) + "px", E.z = i + "px", E.scaleX = F(R), E.scaleY = F(n), E.rotation = F(s) + P, E.rotationX = F(a) + P, E.rotationY = F(o) + P, E.skewX = u + P, E.skewY = 0 + P, E.transformPerspective = h + "px", (E.zOrigin = parseFloat(S.split(" ")[2]) || 0) && (A[Oi] = Ei(S)), E.xOffset = E.yOffset = 0, E.force3D = X.force3D, E.renderTransform = E.svg ? Ui : Kr ? Yi : Fi, E.uncache = 0), E
        },
        Ei = function(t) {
            return (t = t.split(" "))[0] + " " + t[1]
        },
        Fi = function(t, e) {
            e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Yi(t, e)
        },
        Bi = "0deg",
        Li = "0px",
        Ii = ") ",
        Yi = function(t, e) {
            var r, i, e = e || this,
                n = e.xPercent,
                s = e.yPercent,
                a = e.x,
                o = e.y,
                u = e.z,
                h = e.rotation,
                f = e.rotationY,
                l = e.rotationX,
                _ = e.skewX,
                p = e.skewY,
                c = e.scaleX,
                d = e.scaleY,
                m = e.transformPerspective,
                g = e.force3D,
                v = e.target,
                e = e.zOrigin,
                y = "",
                t = "auto" === g && t && 1 !== t || !0 === g;
            !e || l === Bi && f === Bi || (g = parseFloat(f) * yi, i = Math.sin(g), r = Math.cos(g), g = parseFloat(l) * yi, a = Qr(v, a, i * (i = Math.cos(g)) * -e), o = Qr(v, o, -Math.sin(g) * -e), u = Qr(v, u, r * i * -e + e)), m !== Li && (y += "perspective(" + m + Ii), (n || s) && (y += "translate(" + n + "%, " + s + "%) "), !t && a === Li && o === Li && u === Li || (y += u !== Li || t ? "translate3d(" + a + ", " + o + ", " + u + ") " : "translate(" + a + ", " + o + Ii), h !== Bi && (y += "rotate(" + h + Ii), f !== Bi && (y += "rotateY(" + f + Ii), l !== Bi && (y += "rotateX(" + l + Ii), _ === Bi && p === Bi || (y += "skew(" + _ + ", " + p + Ii), 1 === c && 1 === d || (y += "scale(" + c + ", " + d + Ii), v.style[Z] = y || "translate(0, 0)"
        },
        Ui = function(t, e) {
            var r, i, n, s, a, e = e || this,
                o = e.xPercent,
                u = e.yPercent,
                h = e.x,
                f = e.y,
                l = e.rotation,
                _ = e.skewX,
                p = e.skewY,
                c = e.scaleX,
                d = e.scaleY,
                m = e.target,
                g = e.xOrigin,
                v = e.yOrigin,
                y = e.xOffset,
                T = e.yOffset,
                e = e.forceCSS,
                x = parseFloat(h),
                w = parseFloat(f),
                l = parseFloat(l),
                _ = parseFloat(_);
            (p = parseFloat(p)) && (_ += p = parseFloat(p), l += p), l || _ ? (l *= yi, _ *= yi, r = Math.cos(l) * c, i = Math.sin(l) * c, n = Math.sin(l - _) * -d, s = Math.cos(l - _) * d, _ && (p *= yi, a = Math.tan(_ - p), n *= a = Math.sqrt(1 + a * a), s *= a, p && (a = Math.tan(p), r *= a = Math.sqrt(1 + a * a), i *= a)), r = F(r), i = F(i), n = F(n), s = F(s)) : (r = c, s = d, i = n = 0), (x && !~(h + "").indexOf("px") || w && !~(f + "").indexOf("px")) && (x = Ir(m, "x", h, "px"), w = Ir(m, "y", f, "px")), (g || v || y || T) && (x = F(x + g - (g * r + v * n) + y), w = F(w + v - (g * i + v * s) + T)), (o || u) && (x = F(x + o / 100 * (a = m.getBBox()).width), w = F(w + u / 100 * a.height)), m.setAttribute("transform", a = "matrix(" + r + "," + i + "," + n + "," + s + "," + x + "," + w + ")"), e && (m.style[Z] = a)
        };
    p("padding,margin,Width,Radius", function(e, r) {
        var t = "Right",
            i = "Bottom",
            n = "Left",
            o = (r < 3 ? ["Top", t, i, n] : ["Top" + n, "Top" + t, i + t, i + n]).map(function(t) {
                return r < 2 ? e + t : "border" + t + e
            });
        Pi[1 < r ? "border" + e : e] = function(e, t, r, i, n) {
            var s, a;
            if (arguments.length < 4) return s = o.map(function(t) {
                return Yr(e, t, r)
            }), 5 === (a = s.join(" ")).split(s[0]).length ? s[0] : a;
            s = (i + "").split(" "), a = {}, o.forEach(function(t, e) {
                return a[t] = s[e] = s[e] || s[(e - 1) / 2 | 0]
            }), e.init(t, a, n)
        }
    });
    var Xi, Ni = {
            name: "css",
            register: Sr,
            targetTest: function(t) {
                return t.style && t.nodeType
            },
            init: function(t, e, r, i, n) {
                var s, a, o, u, h, f, l, _, p, B, c, d, L, m, g, v, y, T, x, w, I = this._props,
                    b = t.style,
                    M = r.vars.startAt;
                for (h in Zr || Sr(), e)
                    if ("autoRound" !== h && (a = e[h], !V[h] || !Qe(h, e, r, i, t, n)))
                        if (_ = typeof a, u = Pi[h], "function" === _ && (_ = typeof(a = a.call(r, i, t, n))), "string" === _ && ~a.indexOf("random(") && (a = xt(a)), u) u(this, t, h, a, r) && (L = 1);
                        else if ("--" === h.substr(0, 2)) s = (getComputedStyle(t).getPropertyValue(h) + "").trim(), a += "", ze.lastIndex = 0, ze.test(s) || (f = U(s), l = U(a)), l ? f !== l && (s = Ir(t, h, s, l) + l) : f && (a += f), this.add(b, "setProperty", s, a, i, n, 0, 0, h), I.push(h);
                else if ("undefined" !== _) {
                    if (M && h in M && (U((s = Y(s = "function" == typeof M[h] ? M[h].call(r, i, t, n) : M[h]) && ~s.indexOf("random(") ? xt(s) : s) + "") || (s += X.units[h] || U(Yr(t, h)) || ""), "=" !== (s + "").charAt(1)) || (s = Yr(t, h)), u = parseFloat(s), (_ = "string" === _ && "=" === a.charAt(1) && a.substr(0, 2)) && (a = a.substr(2)), o = parseFloat(a), h in Mi && ("autoAlpha" === h && Lr(this, b, "visibility", (u = 1 === u && "hidden" === Yr(t, "visibility") && o ? 0 : u) ? "inherit" : "hidden", o ? "inherit" : "hidden", !o), "scale" !== h && "transform" !== h && ~(h = Mi[h]).indexOf(",") && (h = h.split(",")[0])), p = h in gi)
                        if (B || ((c = t._gsap).renderTransform && !e.parseTransform || Ri(t, e.parseTransform), d = !1 !== e.smoothOrigin && c.smooth, (B = this._pt = new G(this._pt, b, Z, 0, 1, c.renderTransform, c, 0, -1)).dep = 1), "scale" === h) this._pt = new G(this._pt, c, "scaleY", c.scaleY, (_ ? tt(c.scaleY, _ + o) : o) - c.scaleY || 0), I.push("scaleY", h), h += "X";
                        else {
                            if ("transformOrigin" === h) {
                                w = x = T = void 0, T = (y = a).split(" "), x = T[0], w = T[1] || "50%", "top" !== x && "bottom" !== x && "left" !== w && "right" !== w || (y = x, x = w, w = y), T[0] = Di[x] || x, T[1] = Di[w] || w, a = T.join(" "), c.svg ? jr(t, a, 0, d, 0, this) : ((l = parseFloat(a.split(" ")[2]) || 0) !== c.zOrigin && Lr(this, c, "zOrigin", c.zOrigin, l), Lr(this, b, h, Ei(s), Ei(a)));
                                continue
                            }
                            if ("svgOrigin" === h) {
                                jr(t, a, 1, d, 0, this);
                                continue
                            }
                            if (h in zi) {
                                y = this, x = c, w = h, T = u, m = _ ? tt(u, _ + a) : a, v = g = z = F = void 0, F = 360, z = Y(m), g = parseFloat(m) * (z && ~m.indexOf("rad") ? vi : 1) - T, v = T + g + "deg", z && ("short" === (z = m.split("_")[1]) && (g %= F) != g % 180 && (g += g < 0 ? F : -F), "cw" === z && g < 0 ? g = (g + 36e9) % F - ~~(g / F) * F : "ccw" === z && 0 < g && (g = (g - 36e9) % F - ~~(g / F) * F)), y._pt = m = new G(y._pt, x, w, T, g, yr), m.e = v, m.u = "deg", y._props.push(w);
                                continue
                            }
                            if ("smoothOrigin" === h) {
                                Lr(this, c, "smooth", c.smooth, a);
                                continue
                            }
                            if ("force3D" === h) {
                                c[h] = a;
                                continue
                            }
                            if ("transform" === h) {
                                F = E = P = D = A = D = C = k = O = R = z = S = void 0;
                                var O, k, C, A, D, P, S = this,
                                    z = a,
                                    R = t,
                                    E = Wr({}, R._gsap),
                                    F = R.style;
                                for (k in E.svg ? (C = R.getAttribute("transform"), R.setAttribute("transform", ""), F[Z] = z, O = Ri(R, 1), Br(R, Z), R.setAttribute("transform", C)) : (C = getComputedStyle(R)[Z], F[Z] = z, O = Ri(R, 1), F[Z] = C), gi)(C = E[k]) !== (D = O[k]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(k) < 0 && (A = U(C) !== (P = U(D)) ? Ir(R, k, C, P) : parseFloat(C), D = parseFloat(D), S._pt = new G(S._pt, O, k, A, D - A, vr), S._pt.u = P || 0, S._props.push(k));
                                Wr(O, E);
                                continue
                            }
                        }
                    else h in b || (h = Ci(h) || h);
                    if (p || (o || 0 === o) && (u || 0 === u) && !bi.test(a) && h in b) o = o || 0, (f = (s + "").substr((u + "").length)) !== (l = U(a) || (h in X.units ? X.units[h] : f)) && (u = Ir(t, h, s, l)), this._pt = new G(this._pt, p ? c : b, h, u, (_ ? tt(u, _ + o) : o) - u, p || "px" !== l && "zIndex" !== h || !1 === e.autoRound ? vr : xr), this._pt.u = l || 0, f !== l && "%" !== l && (this._pt.b = s, this._pt.r = Tr);
                    else if (h in b) Ur.call(this, t, h, s, _ ? _ + a : a);
                    else {
                        if (!(h in t)) continue;
                        this.add(t, h, s || t[h], _ ? _ + a : a, i, n)
                    }
                    I.push(h)
                }
                L && pr(this)
            },
            get: Yr,
            aliases: Mi,
            getSetter: function(t, e, r) {
                var i = Mi[e];
                return (e = i && i.indexOf(",") < 0 ? i : e) in gi && e !== Oi && (t._gsap.x || Yr(t, "x")) ? r && Jr === r ? "scale" === e ? Cr : kr : (Jr = r || {}) && ("scale" === e ? Ar : Dr) : t.style && !s(t.style[e]) ? Mr : ~e.indexOf("-") ? Or : _r(t, e)
            },
            core: {
                _removeProperty: Br,
                _getMatrix: Vr
            }
        },
        qi = (f.utils.checkPrefix = Ci, Xi = p("x,y,z,scale,scaleX,scaleY,xPercent,yPercent" + "," + (qi = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) {
            gi[t] = 1
        }), p(qi, function(t) {
            X.units[t] = "deg", zi[t] = 1
        }), Mi[Xi[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + qi, p("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) {
            t = t.split(":");
            Mi[t[1]] = Xi[t[0]]
        }), p("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
            X.units[t] = "px"
        }), f.registerPlugin(Ni), f.registerPlugin(Ni) || f),
        Vi = qi.core.Tween;
    t.Back = li, t.Bounce = pi, t.CSSPlugin = Ni, t.Circ = mi, t.Cubic = ai, t.Elastic = fi, t.Expo = di, t.Linear = ni, t.Power0 = e, t.Power1 = ti, t.Power2 = ei, t.Power3 = ri, t.Power4 = ii, t.Quad = si, t.Quart = oi, t.Quint = ui, t.Sine = ci, t.SteppedEase = _i, t.Strong = hi, t.TimelineLite = Q, t.TimelineMax = Q, t.TweenLite = W, t.TweenMax = Vi, t.default = qi, t.gsap = qi, "undefined" == typeof window || window !== t ? Object.defineProperty(t, "__esModule", {
        value: !0
    }) : delete t.default
});