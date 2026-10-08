/* Runtime dependencies extracted from the public frontend of preparetopioneer.com, 2026-10-09. Browser/math/GSAP helpers are retained; Nuxt boot, site pages, trackers and backend calls are excluded. This does not establish an open-source license. */
var H1 = Object.defineProperty;
var j1 = (t, e, n) =>
  e in t
    ? H1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (t[e] = n);
var Re = (t, e, n) => (j1(t, typeof e != "symbol" ? e + "" : e, n), n);
var bc = { exports: {} };
var uv = { exports: {} };
var UT = void 0;
var fv = function (t) {
  return t !== UT && t !== null;
};
var BT = fv;
var VT = { object: !0, function: !0, undefined: !0 };
var HT = function (t) {
  return BT(t) ? hasOwnProperty.call(VT, typeof t) : !1;
};
var jT = HT;
var WT = function (t) {
  if (!jT(t)) return !1;
  try {
    return t.constructor ? t.constructor.prototype === t : !1;
  } catch {
    return !1;
  }
};
var GT = WT;
var qT = function (t) {
  if (typeof t != "function" || !hasOwnProperty.call(t, "length")) return !1;
  try {
    if (
      typeof t.length != "number" ||
      typeof t.call != "function" ||
      typeof t.apply != "function"
    )
      return !1;
  } catch {
    return !1;
  }
  return !GT(t);
};
var $T = qT;
var XT = /^\s*class[\s{/}]/;
var YT = Function.prototype.toString;
var KT = function (t) {
  return !(!$T(t) || XT.test(YT.call(t)));
};
var QT = function () {
  var t = Object.assign,
    e;
  return typeof t != "function"
    ? !1
    : ((e = { foo: "raz" }),
      t(e, { bar: "dwa" }, { trzy: "trzy" }),
      e.foo + e.bar + e.trzy === "razdwatrzy");
};
var Qa;
var qh;
function ZT() {
  return (
    qh ||
      ((qh = 1),
      (Qa = function () {
        try {
          return (Object.keys("primitive"), !0);
        } catch {
          return !1;
        }
      })),
    Qa
  );
}
var JT = function () {};
var e3 = JT();
var Ou = function (t) {
  return t !== e3 && t !== null;
};
var Za;
var $h;
function t3() {
  if ($h) return Za;
  $h = 1;
  var t = Ou,
    e = Object.keys;
  return (
    (Za = function (n) {
      return e(t(n) ? Object(n) : n);
    }),
    Za
  );
}
var Ja;
var Xh;
function n3() {
  return (Xh || ((Xh = 1), (Ja = ZT()() ? Object.keys : t3())), Ja);
}
var el;
var Yh;
function i3() {
  if (Yh) return el;
  Yh = 1;
  var t = Ou;
  return (
    (el = function (e) {
      if (!t(e)) throw new TypeError("Cannot use null or undefined");
      return e;
    }),
    el
  );
}
var tl;
var Kh;
function r3() {
  if (Kh) return tl;
  Kh = 1;
  var t = n3(),
    e = i3(),
    n = Math.max;
  return (
    (tl = function (r, i) {
      var s,
        o,
        a = n(arguments.length, 2),
        l;
      for (
        r = Object(e(r)),
          l = function (c) {
            try {
              r[c] = i[c];
            } catch (u) {
              s || (s = u);
            }
          },
          o = 1;
        o < a;
        ++o
      )
        ((i = arguments[o]), t(i).forEach(l));
      if (s !== void 0) throw s;
      return r;
    }),
    tl
  );
}
var s3 = QT() ? Object.assign : r3();
var o3 = Ou;
var a3 = Array.prototype.forEach;
var l3 = Object.create;
var c3 = function (t, e) {
  var n;
  for (n in t) e[n] = t[n];
};
var u3 = function (t) {
  var e = l3(null);
  return (
    a3.call(arguments, function (n) {
      !o3(n) || c3(Object(n), e);
    }),
    e
  );
};
var nl = "razdwatrzy";
var f3 = function () {
  return typeof nl.contains != "function"
    ? !1
    : nl.contains("dwa") === !0 && nl.contains("foo") === !1;
};
var il;
var Qh;
function h3() {
  if (Qh) return il;
  Qh = 1;
  var t = String.prototype.indexOf;
  return (
    (il = function (e) {
      return t.call(this, e, arguments[1]) > -1;
    }),
    il
  );
}
var d3 = f3() ? String.prototype.contains : h3();
var _o = fv;
var Zh = KT;
var hv = s3;
var dv = u3;
var ms = d3;
var p3 = (uv.exports = function (t, e) {
  var n, r, i, s, o;
  return (
    arguments.length < 2 || typeof t != "string"
      ? ((s = e), (e = t), (t = null))
      : (s = arguments[2]),
    _o(t)
      ? ((n = ms.call(t, "c")), (r = ms.call(t, "e")), (i = ms.call(t, "w")))
      : ((n = i = !0), (r = !1)),
    (o = { value: e, configurable: n, enumerable: r, writable: i }),
    s ? hv(dv(s), o) : o
  );
});
p3.gs = function (t, e, n) {
  var r, i, s, o;
  return (
    typeof t != "string"
      ? ((s = n), (n = e), (e = t), (t = null))
      : (s = arguments[3]),
    _o(e)
      ? Zh(e)
        ? _o(n)
          ? Zh(n) || ((s = n), (n = void 0))
          : (n = void 0)
        : ((s = e), (e = n = void 0))
      : (e = void 0),
    _o(t)
      ? ((r = ms.call(t, "c")), (i = ms.call(t, "e")))
      : ((r = !0), (i = !1)),
    (o = { get: e, set: n, configurable: r, enumerable: i }),
    s ? hv(dv(s), o) : o
  );
};
var m3 = function (t) {
  if (typeof t != "function") throw new TypeError(t + " is not a function");
  return t;
};
(function (t, e) {
  var n = uv.exports,
    r = m3,
    i = Function.prototype.apply,
    s = Function.prototype.call,
    o = Object.create,
    a = Object.defineProperty,
    l = Object.defineProperties,
    c = Object.prototype.hasOwnProperty,
    u = { configurable: !0, enumerable: !1, writable: !0 },
    h,
    f,
    d,
    p,
    m,
    g,
    x;
  ((h = function (b, _) {
    var v;
    return (
      r(_),
      c.call(this, "__ee__")
        ? (v = this.__ee__)
        : ((v = u.value = o(null)), a(this, "__ee__", u), (u.value = null)),
      v[b]
        ? typeof v[b] == "object"
          ? v[b].push(_)
          : (v[b] = [v[b], _])
        : (v[b] = _),
      this
    );
  }),
    (f = function (b, _) {
      var v, y;
      return (
        r(_),
        (y = this),
        h.call(
          this,
          b,
          (v = function () {
            (d.call(y, b, v), i.call(_, this, arguments));
          }),
        ),
        (v.__eeOnceListener__ = _),
        this
      );
    }),
    (d = function (b, _) {
      var v, y, w, P;
      if ((r(_), !c.call(this, "__ee__"))) return this;
      if (((v = this.__ee__), !v[b])) return this;
      if (((y = v[b]), typeof y == "object"))
        for (P = 0; (w = y[P]); ++P)
          (w === _ || w.__eeOnceListener__ === _) &&
            (y.length === 2 ? (v[b] = y[P ? 0 : 1]) : y.splice(P, 1));
      else (y === _ || y.__eeOnceListener__ === _) && delete v[b];
      return this;
    }),
    (p = function (b) {
      var _, v, y, w, P;
      if (!!c.call(this, "__ee__") && ((w = this.__ee__[b]), !!w))
        if (typeof w == "object") {
          for (v = arguments.length, P = new Array(v - 1), _ = 1; _ < v; ++_)
            P[_ - 1] = arguments[_];
          for (w = w.slice(), _ = 0; (y = w[_]); ++_) i.call(y, this, P);
        } else
          switch (arguments.length) {
            case 1:
              s.call(w, this);
              break;
            case 2:
              s.call(w, this, arguments[1]);
              break;
            case 3:
              s.call(w, this, arguments[1], arguments[2]);
              break;
            default:
              for (
                v = arguments.length, P = new Array(v - 1), _ = 1;
                _ < v;
                ++_
              )
                P[_ - 1] = arguments[_];
              i.call(w, this, P);
          }
    }),
    (m = { on: h, once: f, off: d, emit: p }),
    (g = { on: n(h), once: n(f), off: n(d), emit: n(p) }),
    (x = l({}, g)),
    (t.exports = e =
      function (b) {
        return b == null ? o(x) : l(Object(b), g);
      }),
    (e.methods = m));
})(bc, bc.exports);
const Xs = bc.exports;
function g3(t, e) {
  return ((t[0] = e[0]), (t[1] = e[1]), t);
}
function v3(t, e, n) {
  return ((t[0] = e), (t[1] = n), t);
}
function Jh(t, e, n) {
  return ((t[0] = e[0] + n[0]), (t[1] = e[1] + n[1]), t);
}
function ed(t, e, n) {
  return ((t[0] = e[0] - n[0]), (t[1] = e[1] - n[1]), t);
}
function b3(t, e, n) {
  return ((t[0] = e[0] * n[0]), (t[1] = e[1] * n[1]), t);
}
function _3(t, e, n) {
  return ((t[0] = e[0] / n[0]), (t[1] = e[1] / n[1]), t);
}
function rl(t, e, n) {
  return ((t[0] = e[0] * n), (t[1] = e[1] * n), t);
}
function y3(t, e) {
  var n = e[0] - t[0],
    r = e[1] - t[1];
  return Math.sqrt(n * n + r * r);
}
function x3(t, e) {
  var n = e[0] - t[0],
    r = e[1] - t[1];
  return n * n + r * r;
}
function td(t) {
  var e = t[0],
    n = t[1];
  return Math.sqrt(e * e + n * n);
}
function w3(t) {
  var e = t[0],
    n = t[1];
  return e * e + n * n;
}
function S3(t, e) {
  return ((t[0] = -e[0]), (t[1] = -e[1]), t);
}
function P3(t, e) {
  return ((t[0] = 1 / e[0]), (t[1] = 1 / e[1]), t);
}
function T3(t, e) {
  var n = e[0],
    r = e[1],
    i = n * n + r * r;
  return (
    i > 0 && (i = 1 / Math.sqrt(i)),
    (t[0] = e[0] * i),
    (t[1] = e[1] * i),
    t
  );
}
function E3(t, e) {
  return t[0] * e[0] + t[1] * e[1];
}
function nd(t, e) {
  return t[0] * e[1] - t[1] * e[0];
}
function C3(t, e, n, r) {
  var i = e[0],
    s = e[1];
  return ((t[0] = i + r * (n[0] - i)), (t[1] = s + r * (n[1] - s)), t);
}
function A3(t, e, n) {
  var r = e[0],
    i = e[1];
  return (
    (t[0] = n[0] * r + n[3] * i + n[6]),
    (t[1] = n[1] * r + n[4] * i + n[7]),
    t
  );
}
function z3(t, e, n) {
  let r = e[0],
    i = e[1];
  return (
    (t[0] = n[0] * r + n[4] * i + n[12]),
    (t[1] = n[1] * r + n[5] * i + n[13]),
    t
  );
}
function R3(t, e) {
  return t[0] === e[0] && t[1] === e[1];
}
class Zi extends Array {
  constructor(e = 0, n = e) {
    return (super(e, n), this);
  }
  get x() {
    return this[0];
  }
  get y() {
    return this[1];
  }
  set x(e) {
    this[0] = e;
  }
  set y(e) {
    this[1] = e;
  }
  set(e, n = e) {
    return e.length ? this.copy(e) : (v3(this, e, n), this);
  }
  copy(e) {
    return (g3(this, e), this);
  }
  add(e, n) {
    return (n ? Jh(this, e, n) : Jh(this, this, e), this);
  }
  sub(e, n) {
    return (n ? ed(this, e, n) : ed(this, this, e), this);
  }
  multiply(e) {
    return (e.length ? b3(this, this, e) : rl(this, this, e), this);
  }
  divide(e) {
    return (e.length ? _3(this, this, e) : rl(this, this, 1 / e), this);
  }
  inverse(e = this) {
    return (P3(this, e), this);
  }
  len() {
    return td(this);
  }
  distance(e) {
    return e ? y3(this, e) : td(this);
  }
  squaredLen() {
    return this.squaredDistance();
  }
  squaredDistance(e) {
    return e ? x3(this, e) : w3(this);
  }
  negate(e = this) {
    return (S3(this, e), this);
  }
  cross(e, n) {
    return n ? nd(e, n) : nd(this, e);
  }
  scale(e) {
    return (rl(this, this, e), this);
  }
  normalize() {
    return (T3(this, this), this);
  }
  dot(e) {
    return E3(this, e);
  }
  equals(e) {
    return R3(this, e);
  }
  applyMatrix3(e) {
    return (A3(this, this, e), this);
  }
  applyMatrix4(e) {
    return (z3(this, this, e), this);
  }
  lerp(e, n) {
    return (C3(this, this, e, n), this);
  }
  clone() {
    return new Zi(this[0], this[1]);
  }
  fromArray(e, n = 0) {
    return ((this[0] = e[n]), (this[1] = e[n + 1]), this);
  }
  toArray(e = [], n = 0) {
    return ((e[n] = this[0]), (e[n + 1] = this[1]), e);
  }
}
function id(t) {
  let e = t[0],
    n = t[1],
    r = t[2];
  return Math.sqrt(e * e + n * n + r * r);
}
function _c(t, e) {
  return ((t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), t);
}
function O3(t, e, n, r) {
  return ((t[0] = e), (t[1] = n), (t[2] = r), t);
}
function rd(t, e, n) {
  return ((t[0] = e[0] + n[0]), (t[1] = e[1] + n[1]), (t[2] = e[2] + n[2]), t);
}
function sd(t, e, n) {
  return ((t[0] = e[0] - n[0]), (t[1] = e[1] - n[1]), (t[2] = e[2] - n[2]), t);
}
function M3(t, e, n) {
  return ((t[0] = e[0] * n[0]), (t[1] = e[1] * n[1]), (t[2] = e[2] * n[2]), t);
}
function F3(t, e, n) {
  return ((t[0] = e[0] / n[0]), (t[1] = e[1] / n[1]), (t[2] = e[2] / n[2]), t);
}
function sl(t, e, n) {
  return ((t[0] = e[0] * n), (t[1] = e[1] * n), (t[2] = e[2] * n), t);
}
function k3(t, e) {
  let n = e[0] - t[0],
    r = e[1] - t[1],
    i = e[2] - t[2];
  return Math.sqrt(n * n + r * r + i * i);
}
function L3(t, e) {
  let n = e[0] - t[0],
    r = e[1] - t[1],
    i = e[2] - t[2];
  return n * n + r * r + i * i;
}
function od(t) {
  let e = t[0],
    n = t[1],
    r = t[2];
  return e * e + n * n + r * r;
}
function I3(t, e) {
  return ((t[0] = -e[0]), (t[1] = -e[1]), (t[2] = -e[2]), t);
}
function D3(t, e) {
  return ((t[0] = 1 / e[0]), (t[1] = 1 / e[1]), (t[2] = 1 / e[2]), t);
}
function yc(t, e) {
  let n = e[0],
    r = e[1],
    i = e[2],
    s = n * n + r * r + i * i;
  return (
    s > 0 && (s = 1 / Math.sqrt(s)),
    (t[0] = e[0] * s),
    (t[1] = e[1] * s),
    (t[2] = e[2] * s),
    t
  );
}
function pv(t, e) {
  return t[0] * e[0] + t[1] * e[1] + t[2] * e[2];
}
function ad(t, e, n) {
  let r = e[0],
    i = e[1],
    s = e[2],
    o = n[0],
    a = n[1],
    l = n[2];
  return (
    (t[0] = i * l - s * a),
    (t[1] = s * o - r * l),
    (t[2] = r * a - i * o),
    t
  );
}
function N3(t, e, n, r) {
  let i = e[0],
    s = e[1],
    o = e[2];
  return (
    (t[0] = i + r * (n[0] - i)),
    (t[1] = s + r * (n[1] - s)),
    (t[2] = o + r * (n[2] - o)),
    t
  );
}
function U3(t, e, n) {
  let r = e[0],
    i = e[1],
    s = e[2],
    o = n[3] * r + n[7] * i + n[11] * s + n[15];
  return (
    (o = o || 1),
    (t[0] = (n[0] * r + n[4] * i + n[8] * s + n[12]) / o),
    (t[1] = (n[1] * r + n[5] * i + n[9] * s + n[13]) / o),
    (t[2] = (n[2] * r + n[6] * i + n[10] * s + n[14]) / o),
    t
  );
}
function B3(t, e, n) {
  let r = e[0],
    i = e[1],
    s = e[2],
    o = n[3] * r + n[7] * i + n[11] * s + n[15];
  return (
    (o = o || 1),
    (t[0] = (n[0] * r + n[4] * i + n[8] * s) / o),
    (t[1] = (n[1] * r + n[5] * i + n[9] * s) / o),
    (t[2] = (n[2] * r + n[6] * i + n[10] * s) / o),
    t
  );
}
function V3(t, e, n) {
  let r = e[0],
    i = e[1],
    s = e[2],
    o = n[0],
    a = n[1],
    l = n[2],
    c = n[3],
    u = a * s - l * i,
    h = l * r - o * s,
    f = o * i - a * r,
    d = a * f - l * h,
    p = l * u - o * f,
    m = o * h - a * u,
    g = c * 2;
  return (
    (u *= g),
    (h *= g),
    (f *= g),
    (d *= 2),
    (p *= 2),
    (m *= 2),
    (t[0] = r + u + d),
    (t[1] = i + h + p),
    (t[2] = s + f + m),
    t
  );
}
const H3 = (function () {
  const t = [0, 0, 0],
    e = [0, 0, 0];
  return function (n, r) {
    (_c(t, n), _c(e, r), yc(t, t), yc(e, e));
    let i = pv(t, e);
    return i > 1 ? 0 : i < -1 ? Math.PI : Math.acos(i);
  };
})();
function j3(t, e) {
  return t[0] === e[0] && t[1] === e[1] && t[2] === e[2];
}
class be extends Array {
  constructor(e = 0, n = e, r = e) {
    return (super(e, n, r), this);
  }
  get x() {
    return this[0];
  }
  get y() {
    return this[1];
  }
  get z() {
    return this[2];
  }
  set x(e) {
    this[0] = e;
  }
  set y(e) {
    this[1] = e;
  }
  set z(e) {
    this[2] = e;
  }
  set(e, n = e, r = e) {
    return e.length ? this.copy(e) : (O3(this, e, n, r), this);
  }
  copy(e) {
    return (_c(this, e), this);
  }
  add(e, n) {
    return (n ? rd(this, e, n) : rd(this, this, e), this);
  }
  sub(e, n) {
    return (n ? sd(this, e, n) : sd(this, this, e), this);
  }
  multiply(e) {
    return (e.length ? M3(this, this, e) : sl(this, this, e), this);
  }
  divide(e) {
    return (e.length ? F3(this, this, e) : sl(this, this, 1 / e), this);
  }
  inverse(e = this) {
    return (D3(this, e), this);
  }
  len() {
    return id(this);
  }
  distance(e) {
    return e ? k3(this, e) : id(this);
  }
  squaredLen() {
    return od(this);
  }
  squaredDistance(e) {
    return e ? L3(this, e) : od(this);
  }
  negate(e = this) {
    return (I3(this, e), this);
  }
  cross(e, n) {
    return (n ? ad(this, e, n) : ad(this, this, e), this);
  }
  scale(e) {
    return (sl(this, this, e), this);
  }
  normalize() {
    return (yc(this, this), this);
  }
  dot(e) {
    return pv(this, e);
  }
  equals(e) {
    return j3(this, e);
  }
  applyMatrix4(e) {
    return (U3(this, this, e), this);
  }
  scaleRotateMatrix4(e) {
    return (B3(this, this, e), this);
  }
  applyQuaternion(e) {
    return (V3(this, this, e), this);
  }
  angle(e) {
    return H3(this, e);
  }
  lerp(e, n) {
    return (N3(this, this, e, n), this);
  }
  clone() {
    return new be(this[0], this[1], this[2]);
  }
  fromArray(e, n = 0) {
    return ((this[0] = e[n]), (this[1] = e[n + 1]), (this[2] = e[n + 2]), this);
  }
  toArray(e = [], n = 0) {
    return ((e[n] = this[0]), (e[n + 1] = this[1]), (e[n + 2] = this[2]), e);
  }
  transformDirection(e) {
    const n = this[0],
      r = this[1],
      i = this[2];
    return (
      (this[0] = e[0] * n + e[4] * r + e[8] * i),
      (this[1] = e[1] * n + e[5] * r + e[9] * i),
      (this[2] = e[2] * n + e[6] * r + e[10] * i),
      this.normalize()
    );
  }
}
const ol = new be();
let W3 = 1;
class G3 {
  constructor({
    canvas: e = document.createElement("canvas"),
    width: n = 300,
    height: r = 150,
    dpr: i = 1,
    alpha: s = !1,
    depth: o = !0,
    stencil: a = !1,
    antialias: l = !1,
    premultipliedAlpha: c = !1,
    preserveDrawingBuffer: u = !1,
    powerPreference: h = "default",
    autoClear: f = !0,
    webgl: d = 2,
  } = {}) {
    const p = {
      alpha: s,
      depth: o,
      stencil: a,
      antialias: l,
      premultipliedAlpha: c,
      preserveDrawingBuffer: u,
      powerPreference: h,
    };
    ((this.dpr = i),
      (this.alpha = s),
      (this.color = !0),
      (this.depth = o),
      (this.stencil = a),
      (this.premultipliedAlpha = c),
      (this.autoClear = f),
      (this.id = W3++),
      (this.drawCalls = 0),
      (this.vpOffset = new Zi()),
      (this.vpOverwriteSize = null),
      d === 2 && (this.gl = e.getContext("webgl2", p)),
      (this.isWebgl2 = !!this.gl),
      this.gl || (this.gl = e.getContext("webgl", p)),
      this.gl || console.error("unable to create webgl context"),
      (this.gl.renderer = this),
      this.setSize(n, r),
      (this.state = {}),
      (this.state.blendFunc = { src: this.gl.ONE, dst: this.gl.ZERO }),
      (this.state.blendEquation = { modeRGB: this.gl.FUNC_ADD }),
      (this.state.cullFace = null),
      (this.state.frontFace = this.gl.CCW),
      (this.state.depthMask = !0),
      (this.state.depthFunc = this.gl.LESS),
      (this.state.premultiplyAlpha = !1),
      (this.state.flipY = !1),
      (this.state.unpackAlignment = 4),
      (this.state.framebuffer = null),
      (this.state.viewport = { width: null, height: null }),
      (this.state.textureUnits = []),
      (this.state.activeTextureUnit = 0),
      (this.state.boundBuffer = null),
      (this.state.uniformLocations = new Map()),
      (this.extensions = {}),
      this.isWebgl2
        ? (this.getExtension("EXT_color_buffer_float"),
          this.getExtension("OES_texture_float_linear"))
        : (this.getExtension("OES_texture_float"),
          this.getExtension("OES_texture_float_linear"),
          this.getExtension("OES_texture_half_float"),
          this.getExtension("OES_texture_half_float_linear"),
          this.getExtension("OES_element_index_uint"),
          this.getExtension("OES_standard_derivatives"),
          this.getExtension("EXT_sRGB"),
          this.getExtension("WEBGL_depth_texture"),
          this.getExtension("WEBGL_draw_buffers")),
      (this.vertexAttribDivisor = this.getExtension(
        "ANGLE_instanced_arrays",
        "vertexAttribDivisor",
        "vertexAttribDivisorANGLE",
      )),
      (this.drawArraysInstanced = this.getExtension(
        "ANGLE_instanced_arrays",
        "drawArraysInstanced",
        "drawArraysInstancedANGLE",
      )),
      (this.drawElementsInstanced = this.getExtension(
        "ANGLE_instanced_arrays",
        "drawElementsInstanced",
        "drawElementsInstancedANGLE",
      )),
      (this.createVertexArray = this.getExtension(
        "OES_vertex_array_object",
        "createVertexArray",
        "createVertexArrayOES",
      )),
      (this.bindVertexArray = this.getExtension(
        "OES_vertex_array_object",
        "bindVertexArray",
        "bindVertexArrayOES",
      )),
      (this.deleteVertexArray = this.getExtension(
        "OES_vertex_array_object",
        "deleteVertexArray",
        "deleteVertexArrayOES",
      )),
      (this.drawBuffers = this.getExtension(
        "WEBGL_draw_buffers",
        "drawBuffers",
        "drawBuffersWEBGL",
      )),
      (this.parameters = {}),
      (this.parameters.maxTextureUnits = this.gl.getParameter(
        this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS,
      )),
      (this.parameters.maxAnisotropy = this.getExtension(
        "EXT_texture_filter_anisotropic",
      )
        ? this.gl.getParameter(
            this.getExtension("EXT_texture_filter_anisotropic")
              .MAX_TEXTURE_MAX_ANISOTROPY_EXT,
          )
        : 0));
  }
  setSize(e, n) {
    ((this.width = e),
      (this.height = n),
      (this.gl.canvas.width = e * this.dpr),
      (this.gl.canvas.height = n * this.dpr),
      Object.assign(this.gl.canvas.style, {
        width: e + "px",
        height: n + "px",
      }));
  }
  setViewport(e, n) {
    (this.state.viewport.width === e && this.state.viewport.height === n) ||
      ((this.state.viewport.width = e),
      (this.state.viewport.height = n),
      this.gl.viewport(this.vpOffset.x, this.vpOffset.y, e, n));
  }
  enable(e) {
    this.state[e] !== !0 && (this.gl.enable(e), (this.state[e] = !0));
  }
  disable(e) {
    this.state[e] !== !1 && (this.gl.disable(e), (this.state[e] = !1));
  }
  setBlendFunc(e, n, r, i) {
    (this.state.blendFunc.src === e &&
      this.state.blendFunc.dst === n &&
      this.state.blendFunc.srcAlpha === r &&
      this.state.blendFunc.dstAlpha === i) ||
      ((this.state.blendFunc.src = e),
      (this.state.blendFunc.dst = n),
      (this.state.blendFunc.srcAlpha = r),
      (this.state.blendFunc.dstAlpha = i),
      r !== void 0
        ? this.gl.blendFuncSeparate(e, n, r, i)
        : this.gl.blendFunc(e, n));
  }
  setBlendEquation(e, n) {
    ((e = e || this.gl.FUNC_ADD),
      !(
        this.state.blendEquation.modeRGB === e &&
        this.state.blendEquation.modeAlpha === n
      ) &&
        ((this.state.blendEquation.modeRGB = e),
        (this.state.blendEquation.modeAlpha = n),
        n !== void 0
          ? this.gl.blendEquationSeparate(e, n)
          : this.gl.blendEquation(e)));
  }
  setCullFace(e) {
    this.state.cullFace !== e &&
      ((this.state.cullFace = e), this.gl.cullFace(e));
  }
  setFrontFace(e) {
    this.state.frontFace !== e &&
      ((this.state.frontFace = e), this.gl.frontFace(e));
  }
  setDepthMask(e) {
    this.state.depthMask !== e &&
      ((this.state.depthMask = e), this.gl.depthMask(e));
  }
  setDepthFunc(e) {
    this.state.depthFunc !== e &&
      ((this.state.depthFunc = e), this.gl.depthFunc(e));
  }
  activeTexture(e) {
    this.state.activeTextureUnit !== e &&
      ((this.state.activeTextureUnit = e),
      this.gl.activeTexture(this.gl.TEXTURE0 + e));
  }
  bindFramebuffer({ target: e = this.gl.FRAMEBUFFER, buffer: n = null } = {}) {
    this.state.framebuffer !== n &&
      ((this.state.framebuffer = n), this.gl.bindFramebuffer(e, n));
  }
  getExtension(e, n, r) {
    return n && this.gl[n]
      ? this.gl[n].bind(this.gl)
      : (this.extensions[e] || (this.extensions[e] = this.gl.getExtension(e)),
        n
          ? this.extensions[e]
            ? this.extensions[e][r].bind(this.extensions[e])
            : null
          : this.extensions[e]);
  }
  sortOpaque(e, n) {
    return e.renderOrder !== n.renderOrder
      ? e.renderOrder - n.renderOrder
      : e.program.id !== n.program.id
        ? e.program.id - n.program.id
        : e.zDepth !== n.zDepth
          ? e.zDepth - n.zDepth
          : n.id - e.id;
  }
  sortTransparent(e, n) {
    return e.renderOrder !== n.renderOrder
      ? e.renderOrder - n.renderOrder
      : e.zDepth !== n.zDepth
        ? n.zDepth - e.zDepth
        : n.id - e.id;
  }
  sortManual(e, n) {
    return e.renderOrder !== n.renderOrder
      ? e.renderOrder - n.renderOrder
      : e.zDepth !== n.zDepth
        ? n.zDepth - e.zDepth
        : n.id - e.id;
  }
  sortUI(e, n) {
    return e.renderOrder !== n.renderOrder
      ? e.renderOrder - n.renderOrder
      : e.program.id !== n.program.id
        ? e.program.id - n.program.id
        : n.id - e.id;
  }
  getRenderList({ scene: e, camera: n, frustumCull: r, sort: i }) {
    let s = [];
    if (
      (n && r && n.updateFrustum(),
      e.traverse((o) => {
        if (!o.visible) return !0;
        !o.draw ||
          (!o.forceRenderOrder &&
            r &&
            o.frustumCulled &&
            n &&
            !n.frustumIntersectsMesh(o)) ||
          s.push(o);
      }),
      i)
    ) {
      const o = [],
        a = [],
        l = [],
        c = [],
        u = [];
      (s.forEach((h) => {
        (h.program.transparent
          ? h.forceRenderOrder
            ? h.renderOrder < 0
              ? c.push(h)
              : u.push(h)
            : h.program.depthTest
              ? a.push(h)
              : l.push(h)
          : o.push(h),
          (h.zDepth = 0),
          !(h.renderOrder !== 0 || !h.program.depthTest || !n) &&
            (h.worldMatrix.getTranslation(ol),
            ol.applyMatrix4(n.projectionViewMatrix),
            (h.zDepth = ol.z)));
      }),
        o.sort(this.sortOpaque),
        a.sort(this.sortTransparent),
        c.sort(this.sortManual),
        u.sort(this.sortManual),
        l.sort(this.sortUI),
        (s = c.concat(o, a, l, u)));
    }
    return s;
  }
  render({
    scene: e,
    camera: n,
    target: r = null,
    flip: i = !1,
    post: s = null,
    update: o = !0,
    sort: a = !0,
    frustumCull: l = !0,
    clear: c,
  }) {
    (r === null && s === null && this.vpOverwriteSize === null
      ? (this.bindFramebuffer(),
        this.setViewport(this.width * this.dpr, this.height * this.dpr))
      : s !== null
        ? (this.setViewport(s.rt.width, s.rt.height),
          this.bindFramebuffer({
            target: this.gl.FRAMEBUFFER,
            buffer: s.rt.fb,
          }))
        : this.vpOverwriteSize !== null
          ? (this.bindFramebuffer(),
            this.setViewport(this.vpOverwriteSize[0], this.vpOverwriteSize[1]))
          : (this.bindFramebuffer(r), this.setViewport(r.width, r.height)),
      (c || (this.autoClear && c !== !1)) &&
        (this.depth &&
          (!r || r.depth) &&
          (this.enable(this.gl.DEPTH_TEST), this.setDepthMask(!0)),
        this.gl.clear(
          (this.color ? this.gl.COLOR_BUFFER_BIT : 0) |
            (this.depth ? this.gl.DEPTH_BUFFER_BIT : 0) |
            (this.stencil ? this.gl.STENCIL_BUFFER_BIT : 0),
        )),
      o && e.updateMatrixWorld(),
      n && n.updateMatrixWorld(i),
      this.getRenderList({
        scene: e,
        camera: n,
        frustumCull: l,
        sort: a,
      }).forEach((h) => {
        (h.draw({ camera: n }), this.drawCalls++);
      }),
      i && (n.isFliped = !1),
      s !== null &&
        this.bindFramebuffer({ target: this.gl.FRAMEBUFFER, buffer: r }));
  }
}
const ld = new Uint8Array(4);
function cd(t) {
  return (t & (t - 1)) === 0;
}
let q3 = 1;
class xt {
  constructor(
    e,
    {
      image: n,
      target: r = e.TEXTURE_2D,
      type: i = e.UNSIGNED_BYTE,
      format: s = e.RGBA,
      internalFormat: o = s,
      rt: a = null,
      depth: l = !1,
      pass: c = null,
      wrapS: u = e.CLAMP_TO_EDGE,
      wrapT: h = e.CLAMP_TO_EDGE,
      generateMipmaps: f = !0,
      minFilter: d = f ? e.NEAREST_MIPMAP_LINEAR : e.LINEAR,
      magFilter: p = e.LINEAR,
      premultiplyAlpha: m = !1,
      unpackAlignment: g = 4,
      flipY: x = r == e.TEXTURE_2D,
      anisotropy: b = 0,
      level: _ = 0,
      width: v,
      height: y = v,
    } = {},
  ) {
    ((this.gl = e),
      (this.id = q3++),
      (this.image = n),
      (this.target = r),
      (this.type = i),
      (this.format = s),
      (this.rt = a),
      (this.depth = l),
      (this.pass = c),
      (this.internalFormat = o),
      (this.minFilter = d),
      (this.magFilter = p),
      (this.wrapS = u),
      (this.wrapT = h),
      (this.generateMipmaps = f),
      (this.premultiplyAlpha = m),
      (this.unpackAlignment = g),
      (this.flipY = x),
      (this.anisotropy = Math.min(
        b,
        this.gl.renderer.parameters.maxAnisotropy,
      )),
      (this.level = _),
      (this.width = v),
      (this.height = y),
      (this.texture = this.gl.createTexture()),
      (this.store = { image: null }),
      (this.glState = this.gl.renderer.state),
      (this.state = {}),
      (this.state.minFilter = this.gl.NEAREST_MIPMAP_LINEAR),
      (this.state.magFilter = this.gl.LINEAR),
      (this.state.wrapS = this.gl.REPEAT),
      (this.state.wrapT = this.gl.REPEAT),
      (this.state.anisotropy = 0));
  }
  bind() {
    (this.rt !== null
      ? this.depth
        ? this.gl.bindTexture(this.target, this.rt.getDepthTexture())
        : this.gl.bindTexture(this.target, this.rt.getTexture())
      : this.pass !== null
        ? this.gl.bindTexture(this.target, this.pass.getTexture())
        : this.gl.bindTexture(this.target, this.texture),
      (this.glState.textureUnits[this.glState.activeTextureUnit] = this.id));
  }
  update(e = 0) {
    const n = !(this.image === this.store.image && !this.needsUpdate);
    if (
      ((n || this.glState.textureUnits[e] !== this.id) &&
        (this.gl.renderer.activeTexture(e), this.bind()),
      !!n)
    ) {
      if (
        ((this.needsUpdate = !1),
        this.flipY !== this.glState.flipY &&
          (this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this.flipY),
          (this.glState.flipY = this.flipY)),
        this.premultiplyAlpha !== this.glState.premultiplyAlpha &&
          (this.gl.pixelStorei(
            this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
            this.premultiplyAlpha,
          ),
          (this.glState.premultiplyAlpha = this.premultiplyAlpha)),
        this.unpackAlignment !== this.glState.unpackAlignment &&
          (this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, this.unpackAlignment),
          (this.glState.unpackAlignment = this.unpackAlignment)),
        this.minFilter !== this.state.minFilter &&
          (this.gl.texParameteri(
            this.target,
            this.gl.TEXTURE_MIN_FILTER,
            this.minFilter,
          ),
          (this.state.minFilter = this.minFilter)),
        this.magFilter !== this.state.magFilter &&
          (this.gl.texParameteri(
            this.target,
            this.gl.TEXTURE_MAG_FILTER,
            this.magFilter,
          ),
          (this.state.magFilter = this.magFilter)),
        this.wrapS !== this.state.wrapS &&
          (this.gl.texParameteri(
            this.target,
            this.gl.TEXTURE_WRAP_S,
            this.wrapS,
          ),
          (this.state.wrapS = this.wrapS)),
        this.wrapT !== this.state.wrapT &&
          (this.gl.texParameteri(
            this.target,
            this.gl.TEXTURE_WRAP_T,
            this.wrapT,
          ),
          (this.state.wrapT = this.wrapT)),
        this.anisotropy &&
          this.anisotropy !== this.state.anisotropy &&
          (this.gl.texParameterf(
            this.target,
            this.gl.renderer.getExtension("EXT_texture_filter_anisotropic")
              .TEXTURE_MAX_ANISOTROPY_EXT,
            this.anisotropy,
          ),
          (this.state.anisotropy = this.anisotropy)),
        this.image)
      ) {
        if (
          (this.image.width &&
            ((this.width = this.image.width),
            (this.height = this.image.height)),
          this.target === this.gl.TEXTURE_CUBE_MAP)
        )
          for (let r = 0; r < 6; r++)
            this.gl.texImage2D(
              this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + r,
              this.level,
              this.internalFormat,
              this.format,
              this.type,
              this.image[r],
            );
        else if (ArrayBuffer.isView(this.image))
          this.gl.texImage2D(
            this.target,
            this.level,
            this.internalFormat,
            this.width,
            this.height,
            0,
            this.format,
            this.type,
            this.image,
          );
        else if (this.image.isCompressedTexture)
          for (let r = 0; r < this.image.length; r++)
            this.gl.compressedTexImage2D(
              this.target,
              r,
              this.internalFormat,
              this.image[r].width,
              this.image[r].height,
              0,
              this.image[r].data,
            );
        else
          this.gl.texImage2D(
            this.target,
            this.level,
            this.internalFormat,
            this.format,
            this.type,
            this.image,
          );
        (this.generateMipmaps &&
          (!this.gl.renderer.isWebgl2 &&
          (!cd(this.image.width) || !cd(this.image.height))
            ? ((this.generateMipmaps = !1),
              (this.wrapS = this.wrapT = this.gl.CLAMP_TO_EDGE),
              (this.minFilter = this.gl.LINEAR))
            : this.gl.generateMipmap(this.target)),
          this.onUpdate && this.onUpdate());
      } else if (this.target === this.gl.TEXTURE_CUBE_MAP)
        for (let r = 0; r < 6; r++)
          this.gl.texImage2D(
            this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + r,
            0,
            this.gl.RGBA,
            1,
            1,
            0,
            this.gl.RGBA,
            this.gl.UNSIGNED_BYTE,
            ld,
          );
      else
        this.width
          ? this.rt === null &&
            this.pass === null &&
            this.gl.texImage2D(
              this.target,
              this.level,
              this.internalFormat,
              this.width,
              this.height,
              0,
              this.format,
              this.type,
              null,
            )
          : this.rt === null &&
            this.pass === null &&
            this.gl.texImage2D(
              this.target,
              0,
              this.gl.RGBA,
              1,
              1,
              0,
              this.gl.RGBA,
              this.gl.UNSIGNED_BYTE,
              ld,
            );
      this.store.image = this.image;
    }
  }
}
const xe = { active: false, queryDebug: () => false, addBlade: () => {} };
var Pt = typeof Float32Array < "u" ? Float32Array : Array;
function mv() {
  var t = new Pt(9);
  return (
    Pt != Float32Array &&
      ((t[1] = 0), (t[2] = 0), (t[3] = 0), (t[5] = 0), (t[6] = 0), (t[7] = 0)),
    (t[0] = 1),
    (t[4] = 1),
    (t[8] = 1),
    t
  );
}
function tt() {
  var t = new Pt(3);
  return (Pt != Float32Array && ((t[0] = 0), (t[1] = 0), (t[2] = 0)), t);
}
function xc(t) {
  var e = t[0],
    n = t[1],
    r = t[2];
  return Math.hypot(e, n, r);
}
function We(t, e, n) {
  var r = new Pt(3);
  return ((r[0] = t), (r[1] = e), (r[2] = n), r);
}
function ui(t, e) {
  var n = e[0],
    r = e[1],
    i = e[2],
    s = n * n + r * r + i * i;
  return (
    s > 0 && (s = 1 / Math.sqrt(s)),
    (t[0] = e[0] * s),
    (t[1] = e[1] * s),
    (t[2] = e[2] * s),
    t
  );
}
function sE(t, e) {
  return t[0] * e[0] + t[1] * e[1] + t[2] * e[2];
}
function In(t, e, n) {
  var r = e[0],
    i = e[1],
    s = e[2],
    o = n[0],
    a = n[1],
    l = n[2];
  return (
    (t[0] = i * l - s * a),
    (t[1] = s * o - r * l),
    (t[2] = r * a - i * o),
    t
  );
}
function Mu(t, e, n, r) {
  var i = e[0],
    s = e[1],
    o = e[2];
  return (
    (t[0] = i + r * (n[0] - i)),
    (t[1] = s + r * (n[1] - s)),
    (t[2] = o + r * (n[2] - o)),
    t
  );
}
var oE = xc;
(function () {
  var t = tt();
  return function (e, n, r, i, s, o) {
    var a, l;
    for (
      n || (n = 3),
        r || (r = 0),
        i ? (l = Math.min(i * n + r, e.length)) : (l = e.length),
        a = r;
      a < l;
      a += n
    )
      ((t[0] = e[a]),
        (t[1] = e[a + 1]),
        (t[2] = e[a + 2]),
        s(t, t, o),
        (e[a] = t[0]),
        (e[a + 1] = t[1]),
        (e[a + 2] = t[2]));
    return e;
  };
})();
function lE(t, e) {
  var n = e[0],
    r = e[1],
    i = e[2],
    s = e[3],
    o = n * n + r * r + i * i + s * s;
  return (
    o > 0 && (o = 1 / Math.sqrt(o)),
    (t[0] = n * o),
    (t[1] = r * o),
    (t[2] = i * o),
    (t[3] = s * o),
    t
  );
}
function cE(t, e, n) {
  n = n * 0.5;
  var r = Math.sin(n);
  return (
    (t[0] = r * e[0]),
    (t[1] = r * e[1]),
    (t[2] = r * e[2]),
    (t[3] = Math.cos(n)),
    t
  );
}
function vv(t, e) {
  var n = e[0] + e[4] + e[8],
    r;
  if (n > 0)
    ((r = Math.sqrt(n + 1)),
      (t[3] = 0.5 * r),
      (r = 0.5 / r),
      (t[0] = (e[5] - e[7]) * r),
      (t[1] = (e[6] - e[2]) * r),
      (t[2] = (e[1] - e[3]) * r));
  else {
    var i = 0;
    (e[4] > e[0] && (i = 1), e[8] > e[i * 3 + i] && (i = 2));
    var s = (i + 1) % 3,
      o = (i + 2) % 3;
    ((r = Math.sqrt(e[i * 3 + i] - e[s * 3 + s] - e[o * 3 + o] + 1)),
      (t[i] = 0.5 * r),
      (r = 0.5 / r),
      (t[3] = (e[s * 3 + o] - e[o * 3 + s]) * r),
      (t[s] = (e[s * 3 + i] + e[i * 3 + s]) * r),
      (t[o] = (e[o * 3 + i] + e[i * 3 + o]) * r));
  }
  return t;
}
var bv = lE;
(function () {
  var t = tt(),
    e = We(1, 0, 0),
    n = We(0, 1, 0);
  return function (r, i, s) {
    var o = sE(i, s);
    return o < -0.999999
      ? (In(t, e, i),
        oE(t) < 1e-6 && In(t, n, i),
        ui(t, t),
        cE(r, t, Math.PI),
        r)
      : o > 0.999999
        ? ((r[0] = 0), (r[1] = 0), (r[2] = 0), (r[3] = 1), r)
        : (In(t, i, s),
          (r[0] = t[0]),
          (r[1] = t[1]),
          (r[2] = t[2]),
          (r[3] = 1 + o),
          bv(r, r));
  };
})();
(function () {
  var t = mv();
  return function (e, n, r, i) {
    return (
      (t[0] = r[0]),
      (t[3] = r[1]),
      (t[6] = r[2]),
      (t[1] = i[0]),
      (t[4] = i[1]),
      (t[7] = i[2]),
      (t[2] = -n[0]),
      (t[5] = -n[1]),
      (t[8] = -n[2]),
      bv(e, vv(e, t))
    );
  };
})();
function xa() {
  var t = new Pt(2);
  return (Pt != Float32Array && ((t[0] = 0), (t[1] = 0)), t);
}
(function () {
  var t = xa();
  return function (e, n, r, i, s, o) {
    var a, l;
    for (
      n || (n = 2),
        r || (r = 0),
        i ? (l = Math.min(i * n + r, e.length)) : (l = e.length),
        a = r;
      a < l;
      a += n
    )
      ((t[0] = e[a]),
        (t[1] = e[a + 1]),
        s(t, t, o),
        (e[a] = t[0]),
        (e[a + 1] = t[1]));
    return e;
  };
})();
const vi = !window.matchMedia("(max-width: 768px)").matches;
const _d = new be();
let QE = 1;
let ZE = 1;
let yd = !1;
class Ta {
  constructor(e, n = {}) {
    (e.canvas || console.error("gl not passed as first argument to Geometry"),
      (this.gl = e),
      (this.attributes = n),
      (this.id = QE++),
      (this.VAOs = {}),
      (this.drawRange = { start: 0, count: 0 }),
      (this.instancedCount = 0),
      this.gl.renderer.bindVertexArray(null),
      (this.gl.renderer.currentGeometry = null),
      (this.glState = this.gl.renderer.state));
    for (let r in n) this.addAttribute(r, n[r]);
  }
  addAttribute(e, n) {
    if (
      ((this.attributes[e] = n),
      (n.id = ZE++),
      (n.size = n.size || 1),
      (n.type =
        n.type ||
        (n.data.constructor === Float32Array
          ? this.gl.FLOAT
          : n.data.constructor === Uint16Array
            ? this.gl.UNSIGNED_SHORT
            : this.gl.UNSIGNED_INT)),
      (n.target =
        e === "index" ? this.gl.ELEMENT_ARRAY_BUFFER : this.gl.ARRAY_BUFFER),
      (n.normalized = n.normalized || !1),
      (n.stride = n.stride || 0),
      (n.offset = n.offset || 0),
      (n.count =
        n.count ||
        (n.stride ? n.data.byteLength / n.stride : n.data.length / n.size)),
      (n.divisor = n.instanced || 0),
      (n.needsUpdate = !1),
      n.buffer ||
        ((n.buffer = this.gl.createBuffer()), this.updateAttribute(n)),
      n.divisor)
    ) {
      if (
        ((this.isInstanced = !0),
        this.instancedCount && this.instancedCount !== n.count * n.divisor)
      )
        return (
          console.warn(
            "geometry has multiple instanced buffers of different length",
          ),
          (this.instancedCount = Math.min(
            this.instancedCount,
            n.count * n.divisor,
          ))
        );
      this.instancedCount = n.count * n.divisor;
    } else
      e === "index"
        ? (this.drawRange.count = n.count)
        : this.attributes.index ||
          (this.drawRange.count = Math.max(this.drawRange.count, n.count));
  }
  updateAttribute(e) {
    (this.glState.boundBuffer !== e.buffer &&
      (this.gl.bindBuffer(e.target, e.buffer),
      (this.glState.boundBuffer = e.buffer)),
      this.gl.bufferData(e.target, e.data, this.gl.STATIC_DRAW),
      (e.needsUpdate = !1));
  }
  setIndex(e) {
    this.addAttribute("index", e);
  }
  setDrawRange(e, n) {
    ((this.drawRange.start = e), (this.drawRange.count = n));
  }
  setInstancedCount(e) {
    this.instancedCount = e;
  }
  createVAO(e) {
    ((this.VAOs[e.attributeOrder] = this.gl.renderer.createVertexArray()),
      this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),
      this.bindAttributes(e));
  }
  bindAttributes(e) {
    (e.attributeLocations.forEach((n, { name: r, type: i }) => {
      if (!this.attributes[r]) {
        console.warn(`active attribute ${r} not being supplied`);
        return;
      }
      const s = this.attributes[r];
      (this.gl.bindBuffer(s.target, s.buffer),
        (this.glState.boundBuffer = s.buffer));
      let o = 1;
      (i === 35674 && (o = 2), i === 35675 && (o = 3), i === 35676 && (o = 4));
      const a = s.size / o,
        l = o === 1 ? 0 : o * o * o,
        c = o === 1 ? 0 : o * o;
      for (let u = 0; u < o; u++)
        (this.gl.vertexAttribPointer(
          n + u,
          a,
          s.type,
          s.normalized,
          s.stride + l,
          s.offset + u * c,
        ),
          this.gl.enableVertexAttribArray(n + u),
          this.gl.renderer.vertexAttribDivisor(n + u, s.divisor));
    }),
      this.attributes.index &&
        this.gl.bindBuffer(
          this.gl.ELEMENT_ARRAY_BUFFER,
          this.attributes.index.buffer,
        ));
  }
  draw({ program: e, mode: n = this.gl.TRIANGLES }) {
    (this.gl.renderer.currentGeometry !== `${this.id}_${e.attributeOrder}` &&
      (this.VAOs[e.attributeOrder] || this.createVAO(e),
      this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),
      (this.gl.renderer.currentGeometry = `${this.id}_${e.attributeOrder}`)),
      e.attributeLocations.forEach((r, { name: i }) => {
        const s = this.attributes[i];
        s.needsUpdate && this.updateAttribute(s);
      }),
      this.isInstanced
        ? this.attributes.index
          ? this.gl.renderer.drawElementsInstanced(
              n,
              this.drawRange.count,
              this.attributes.index.type,
              this.attributes.index.offset + this.drawRange.start * 2,
              this.instancedCount,
            )
          : this.gl.renderer.drawArraysInstanced(
              n,
              this.drawRange.start,
              this.drawRange.count,
              this.instancedCount,
            )
        : this.attributes.index
          ? this.gl.drawElements(
              n,
              this.drawRange.count,
              this.attributes.index.type,
              this.attributes.index.offset + this.drawRange.start * 2,
            )
          : this.gl.drawArrays(n, this.drawRange.start, this.drawRange.count));
  }
  getPosition() {
    const e = this.attributes.position;
    if (e.data) return e;
    if (!yd)
      return (
        console.warn("No position buffer data found to compute bounds"),
        (yd = !0)
      );
  }
  computeBoundingBox(e) {
    e || (e = this.getPosition());
    const n = e.data,
      r = e.offset || 0,
      i = e.stride || e.size;
    this.bounds ||
      (this.bounds = {
        min: new be(),
        max: new be(),
        center: new be(),
        scale: new be(),
        radius: 1 / 0,
      });
    const s = this.bounds.min,
      o = this.bounds.max,
      a = this.bounds.center,
      l = this.bounds.scale;
    (s.set(1 / 0), o.set(-1 / 0));
    for (let c = r, u = n.length; c < u; c += i) {
      const h = n[c],
        f = n[c + 1],
        d = n[c + 2];
      ((s.x = Math.min(h, s.x)),
        (s.y = Math.min(f, s.y)),
        (s.z = Math.min(d, s.z)),
        (o.x = Math.max(h, o.x)),
        (o.y = Math.max(f, o.y)),
        (o.z = Math.max(d, o.z)));
    }
    (l.sub(o, s), a.add(s, o).divide(2));
  }
  computeBoundingSphere(e) {
    e || (e = this.getPosition());
    const n = e.data,
      r = e.offset || 0,
      i = e.stride || e.size;
    this.bounds || this.computeBoundingBox(e);
    let s = 0;
    for (let o = r, a = n.length; o < a; o += i)
      (_d.fromArray(n, o),
        (s = Math.max(s, this.bounds.center.squaredDistance(_d))));
    this.bounds.radius = Math.sqrt(s);
  }
  remove() {
    for (let e in this.VAOs)
      (this.gl.renderer.deleteVertexArray(this.VAOs[e]), delete this.VAOs[e]);
    for (let e in this.attributes)
      (this.gl.deleteBuffer(this.attributes[e].buffer),
        delete this.attributes[e]);
  }
}
class xi extends Ta {
  constructor(
    e,
    {
      width: n = 1,
      height: r = 1,
      widthSegments: i = 1,
      heightSegments: s = 1,
      attributes: o = {},
    } = {},
  ) {
    const a = i,
      l = s,
      c = (a + 1) * (l + 1),
      u = a * l * 6,
      h = new Float32Array(c * 3),
      f = new Float32Array(c * 3),
      d = new Float32Array(c * 2),
      p = u > 65536 ? new Uint32Array(u) : new Uint16Array(u);
    (xi.buildPlane(h, f, d, p, n, r, 0, a, l),
      Object.assign(o, {
        position: { size: 3, data: h },
        normal: { size: 3, data: f },
        uv: { size: 2, data: d },
        index: { data: p },
      }),
      super(e, o));
  }
  static buildPlane(
    e,
    n,
    r,
    i,
    s,
    o,
    a,
    l,
    c,
    u = 0,
    h = 1,
    f = 2,
    d = 1,
    p = -1,
    m = 0,
    g = 0,
  ) {
    const x = m,
      b = s / l,
      _ = o / c;
    for (let v = 0; v <= c; v++) {
      let y = v * _ - o / 2;
      for (let w = 0; w <= l; w++, m++) {
        let P = w * b - s / 2;
        if (
          ((e[m * 3 + u] = P * d),
          (e[m * 3 + h] = y * p),
          (e[m * 3 + f] = a / 2),
          (n[m * 3 + u] = 0),
          (n[m * 3 + h] = 0),
          (n[m * 3 + f] = a >= 0 ? 1 : -1),
          (r[m * 2] = w / l),
          (r[m * 2 + 1] = 1 - v / c),
          v === c || w === l)
        )
          continue;
        let T = x + w + v * (l + 1),
          R = x + w + (v + 1) * (l + 1),
          k = x + w + (v + 1) * (l + 1) + 1,
          D = x + w + v * (l + 1) + 1;
        ((i[g * 6] = T),
          (i[g * 6 + 1] = R),
          (i[g * 6 + 2] = D),
          (i[g * 6 + 3] = R),
          (i[g * 6 + 4] = k),
          (i[g * 6 + 5] = D),
          g++);
      }
    }
  }
}
let JE = 1;
const xd = {};
class Ji {
  constructor(
    e,
    {
      vertex: n,
      fragment: r,
      uniforms: i = {},
      uniformsCount: s = !1,
      calcAttributesCount: o = !1,
      debugShader: a = !0,
      transparent: l = !1,
      cullFace: c = e.BACK,
      frontFace: u = e.CCW,
      depthTest: h = !0,
      depthWrite: f = !0,
      depthFunc: d = e.LESS,
    } = {},
  ) {
    Re(this, "calcAttributesCount", (e) => {
      const r = /#version 300 es/.test(e);
      let i = 0;
      const s = new RegExp(
        `${r ? "in" : "attribute"} ([^\\s]+) ([^\\s]+)`,
        "g",
      );
      for (const o of e.matchAll(s)) {
        const a = o[2].replace(";", ""),
          l = new RegExp(`(?:^|\\W)${a}(?:$|\\W)`, "g"),
          c = e.match(l);
        if (!c) {
          console.error("Attribute name not found in vertex shader", a);
          continue;
        }
        c.length > 1 && i++;
      }
      return i;
    });
    (e.canvas || console.error("gl not passed as fist argument to Program"),
      (this.gl = e),
      (this.uniforms = i),
      (this.id = JE++),
      n || console.warn("vertex shader not supplied"),
      r || console.warn("fragment shader not supplied"),
      (this.transparent = l),
      (this.cullFace = c),
      (this.frontFace = u),
      (this.depthTest = h),
      (this.depthWrite = f),
      (this.depthFunc = d),
      (this.blendFunc = {}),
      (this.blendEquation = {}),
      this.transparent &&
        !this.blendFunc.src &&
        (this.gl.renderer.premultipliedAlpha
          ? this.setBlendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA)
          : this.setBlendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA)));
    const p = e.createShader(e.VERTEX_SHADER);
    (e.shaderSource(p, n),
      e.compileShader(p),
      a &&
        e.getShaderInfoLog(p) !== "" &&
        console.warn(`${e.getShaderInfoLog(p)}
Vertex Shader
${wd(n)}`));
    const m = e.createShader(e.FRAGMENT_SHADER);
    if (
      (e.shaderSource(m, r),
      e.compileShader(m),
      a &&
        e.getShaderInfoLog(m) !== "" &&
        console.warn(`${e.getShaderInfoLog(m)}
Fragment Shader
${wd(r)}`),
      (this.program = e.createProgram()),
      e.attachShader(this.program, p),
      e.attachShader(this.program, m),
      e.linkProgram(this.program),
      a && !e.getProgramParameter(this.program, e.LINK_STATUS))
    )
      return console.warn(e.getProgramInfoLog(this.program));
    (e.deleteShader(p), e.deleteShader(m), (this.uniformLocations = new Map()));
    let g = s || e.getProgramParameter(this.program, e.ACTIVE_UNIFORMS);
    for (let _ = 0; _ < g; _++) {
      let v = e.getActiveUniform(this.program, _);
      this.uniformLocations.set(v, e.getUniformLocation(this.program, v.name));
      const y = v.name.match(/(\w+)/g);
      ((v.uniformName = y[0]),
        y.length === 3
          ? ((v.isStructArray = !0),
            (v.structIndex = Number(y[1])),
            (v.structProperty = y[2]))
          : y.length === 2 &&
            isNaN(Number(y[1])) &&
            ((v.isStruct = !0), (v.structProperty = y[1])));
    }
    this.attributeLocations = new Map();
    const x = [],
      b = o
        ? this.calcAttributesCount(n)
        : e.getProgramParameter(this.program, e.ACTIVE_ATTRIBUTES);
    for (let _ = 0; _ < b; _++) {
      const v = e.getActiveAttrib(this.program, _),
        y = e.getAttribLocation(this.program, v.name);
      ((x[y] = v.name), this.attributeLocations.set(v, y));
    }
    this.attributeOrder = x.join("");
  }
  setBlendFunc(e, n, r, i) {
    ((this.blendFunc.src = e),
      (this.blendFunc.dst = n),
      (this.blendFunc.srcAlpha = r),
      (this.blendFunc.dstAlpha = i),
      e && (this.transparent = !0));
  }
  setBlendEquation(e, n) {
    ((this.blendEquation.modeRGB = e), (this.blendEquation.modeAlpha = n));
  }
  applyState() {
    (this.depthTest
      ? this.gl.renderer.enable(this.gl.DEPTH_TEST)
      : this.gl.renderer.disable(this.gl.DEPTH_TEST),
      this.cullFace
        ? this.gl.renderer.enable(this.gl.CULL_FACE)
        : this.gl.renderer.disable(this.gl.CULL_FACE),
      this.blendFunc.src
        ? this.gl.renderer.enable(this.gl.BLEND)
        : this.gl.renderer.disable(this.gl.BLEND),
      this.cullFace && this.gl.renderer.setCullFace(this.cullFace),
      this.gl.renderer.setFrontFace(this.frontFace),
      this.gl.renderer.setDepthMask(this.depthWrite),
      this.gl.renderer.setDepthFunc(this.depthFunc),
      this.blendFunc.src &&
        this.gl.renderer.setBlendFunc(
          this.blendFunc.src,
          this.blendFunc.dst,
          this.blendFunc.srcAlpha,
          this.blendFunc.dstAlpha,
        ),
      this.gl.renderer.setBlendEquation(
        this.blendEquation.modeRGB,
        this.blendEquation.modeAlpha,
      ));
  }
  use({ flipFaces: e = !1 } = {}) {
    let n = -1;
    (this.gl.renderer.currentProgram,
      this.id,
      this.gl.useProgram(this.program),
      (this.gl.renderer.currentProgram = this.id),
      this.uniformLocations.forEach((r, i) => {
        let s = i.uniformName,
          o = this.uniforms[s];
        if (
          (i.isStruct &&
            ((o = o[i.structProperty]), (s += `.${i.structProperty}`)),
          i.isStructArray &&
            ((o = o[i.structIndex][i.structProperty]),
            (s += `[${i.structIndex}].${i.structProperty}`)),
          !o)
        )
          return Sd(`Active uniform ${s} has not been supplied`);
        if (o && o.value === void 0)
          return Sd(`${s} uniform is missing a value parameter`);
        if (o.value.texture)
          return ((n = n + 1), o.value.update(n), dl(this.gl, i.type, r, n));
        if (o.value.length && o.value[0].texture) {
          const a = [];
          return (
            o.value.forEach((l) => {
              ((n = n + 1), l.update(n), a.push(n));
            }),
            dl(this.gl, i.type, r, a)
          );
        }
        dl(this.gl, i.type, r, o.value);
      }),
      this.applyState(),
      e &&
        this.gl.renderer.setFrontFace(
          this.frontFace === this.gl.CCW ? this.gl.CW : this.gl.CCW,
        ));
  }
  remove() {
    this.gl.deleteProgram(this.program);
  }
}
function dl(t, e, n, r) {
  r = r.length ? eC(r) : r;
  const i = t.renderer.state.uniformLocations.get(n);
  if (r.length)
    if (i === void 0 || i.length !== r.length)
      t.renderer.state.uniformLocations.set(n, r.slice(0));
    else {
      if (tC(i, r)) return;
      (i.set ? i.set(r) : nC(i, r),
        t.renderer.state.uniformLocations.set(n, i));
    }
  else {
    if (i === r) return;
    t.renderer.state.uniformLocations.set(n, r);
  }
  switch (e) {
    case 5126:
      return r.length ? t.uniform1fv(n, r) : t.uniform1f(n, r);
    case 35664:
      return t.uniform2fv(n, r);
    case 35665:
      return t.uniform3fv(n, r);
    case 35666:
      return t.uniform4fv(n, r);
    case 35670:
    case 5124:
    case 35678:
    case 35680:
      return r.length ? t.uniform1iv(n, r) : t.uniform1i(n, r);
    case 35671:
    case 35667:
      return t.uniform2iv(n, r);
    case 35672:
    case 35668:
      return t.uniform3iv(n, r);
    case 35673:
    case 35669:
      return t.uniform4iv(n, r);
    case 35674:
      return t.uniformMatrix2fv(n, !1, r);
    case 35675:
      return t.uniformMatrix3fv(n, !1, r);
    case 35676:
      return t.uniformMatrix4fv(n, !1, r);
  }
}
function wd(t) {
  let e = t.split(`
`);
  for (let n = 0; n < e.length; n++) e[n] = n + 1 + ": " + e[n];
  return e.join(`
`);
}
function eC(t) {
  const e = t.length,
    n = t[0].length;
  if (n === void 0) return t;
  const r = e * n;
  let i = xd[r];
  i || (xd[r] = i = new Float32Array(r));
  for (let s = 0; s < e; s++) i.set(t[s], s * n);
  return i;
}
function tC(t, e) {
  if (t.length !== e.length) return !1;
  for (let n = 0, r = t.length; n < r; n++) if (t[n] !== e[n]) return !1;
  return !0;
}
function nC(t, e) {
  for (let n = 0, r = t.length; n < r; n++) t[n] = e[n];
}
let pl = 0;
function Sd(t) {
  pl > 100 ||
    (console.warn(t),
    pl++,
    pl > 100 &&
      console.warn("More than 100 program warnings - stopping logs."));
}
function iC(t, e) {
  return ((t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t);
}
function rC(t, e, n, r, i) {
  return ((t[0] = e), (t[1] = n), (t[2] = r), (t[3] = i), t);
}
function sC(t, e) {
  let n = e[0],
    r = e[1],
    i = e[2],
    s = e[3],
    o = n * n + r * r + i * i + s * s;
  return (
    o > 0 && (o = 1 / Math.sqrt(o)),
    (t[0] = n * o),
    (t[1] = r * o),
    (t[2] = i * o),
    (t[3] = s * o),
    t
  );
}
function oC(t, e) {
  return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3];
}
function aC(t) {
  return ((t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 1), t);
}
function lC(t, e, n) {
  n = n * 0.5;
  let r = Math.sin(n);
  return (
    (t[0] = r * e[0]),
    (t[1] = r * e[1]),
    (t[2] = r * e[2]),
    (t[3] = Math.cos(n)),
    t
  );
}
function Pd(t, e, n) {
  let r = e[0],
    i = e[1],
    s = e[2],
    o = e[3],
    a = n[0],
    l = n[1],
    c = n[2],
    u = n[3];
  return (
    (t[0] = r * u + o * a + i * c - s * l),
    (t[1] = i * u + o * l + s * a - r * c),
    (t[2] = s * u + o * c + r * l - i * a),
    (t[3] = o * u - r * a - i * l - s * c),
    t
  );
}
function cC(t, e, n) {
  n *= 0.5;
  let r = e[0],
    i = e[1],
    s = e[2],
    o = e[3],
    a = Math.sin(n),
    l = Math.cos(n);
  return (
    (t[0] = r * l + o * a),
    (t[1] = i * l + s * a),
    (t[2] = s * l - i * a),
    (t[3] = o * l - r * a),
    t
  );
}
function uC(t, e, n) {
  n *= 0.5;
  let r = e[0],
    i = e[1],
    s = e[2],
    o = e[3],
    a = Math.sin(n),
    l = Math.cos(n);
  return (
    (t[0] = r * l - s * a),
    (t[1] = i * l + o * a),
    (t[2] = s * l + r * a),
    (t[3] = o * l - i * a),
    t
  );
}
function fC(t, e, n) {
  n *= 0.5;
  let r = e[0],
    i = e[1],
    s = e[2],
    o = e[3],
    a = Math.sin(n),
    l = Math.cos(n);
  return (
    (t[0] = r * l + i * a),
    (t[1] = i * l - r * a),
    (t[2] = s * l + o * a),
    (t[3] = o * l - s * a),
    t
  );
}
function hC(t, e, n, r) {
  let i = e[0],
    s = e[1],
    o = e[2],
    a = e[3],
    l = n[0],
    c = n[1],
    u = n[2],
    h = n[3],
    f,
    d,
    p,
    m,
    g;
  return (
    (d = i * l + s * c + o * u + a * h),
    d < 0 && ((d = -d), (l = -l), (c = -c), (u = -u), (h = -h)),
    1 - d > 1e-6
      ? ((f = Math.acos(d)),
        (p = Math.sin(f)),
        (m = Math.sin((1 - r) * f) / p),
        (g = Math.sin(r * f) / p))
      : ((m = 1 - r), (g = r)),
    (t[0] = m * i + g * l),
    (t[1] = m * s + g * c),
    (t[2] = m * o + g * u),
    (t[3] = m * a + g * h),
    t
  );
}
function dC(t, e) {
  let n = e[0],
    r = e[1],
    i = e[2],
    s = e[3],
    o = n * n + r * r + i * i + s * s,
    a = o ? 1 / o : 0;
  return ((t[0] = -n * a), (t[1] = -r * a), (t[2] = -i * a), (t[3] = s * a), t);
}
function pC(t, e) {
  return ((t[0] = -e[0]), (t[1] = -e[1]), (t[2] = -e[2]), (t[3] = e[3]), t);
}
function mC(t, e) {
  let n = e[0] + e[4] + e[8],
    r;
  if (n > 0)
    ((r = Math.sqrt(n + 1)),
      (t[3] = 0.5 * r),
      (r = 0.5 / r),
      (t[0] = (e[5] - e[7]) * r),
      (t[1] = (e[6] - e[2]) * r),
      (t[2] = (e[1] - e[3]) * r));
  else {
    let i = 0;
    (e[4] > e[0] && (i = 1), e[8] > e[i * 3 + i] && (i = 2));
    let s = (i + 1) % 3,
      o = (i + 2) % 3;
    ((r = Math.sqrt(e[i * 3 + i] - e[s * 3 + s] - e[o * 3 + o] + 1)),
      (t[i] = 0.5 * r),
      (r = 0.5 / r),
      (t[3] = (e[s * 3 + o] - e[o * 3 + s]) * r),
      (t[s] = (e[s * 3 + i] + e[i * 3 + s]) * r),
      (t[o] = (e[o * 3 + i] + e[i * 3 + o]) * r));
  }
  return t;
}
function gC(t, e, n = "YXZ") {
  let r = Math.sin(e[0] * 0.5),
    i = Math.cos(e[0] * 0.5),
    s = Math.sin(e[1] * 0.5),
    o = Math.cos(e[1] * 0.5),
    a = Math.sin(e[2] * 0.5),
    l = Math.cos(e[2] * 0.5);
  return (
    n === "XYZ"
      ? ((t[0] = r * o * l + i * s * a),
        (t[1] = i * s * l - r * o * a),
        (t[2] = i * o * a + r * s * l),
        (t[3] = i * o * l - r * s * a))
      : n === "YXZ"
        ? ((t[0] = r * o * l + i * s * a),
          (t[1] = i * s * l - r * o * a),
          (t[2] = i * o * a - r * s * l),
          (t[3] = i * o * l + r * s * a))
        : n === "ZXY"
          ? ((t[0] = r * o * l - i * s * a),
            (t[1] = i * s * l + r * o * a),
            (t[2] = i * o * a + r * s * l),
            (t[3] = i * o * l - r * s * a))
          : n === "ZYX"
            ? ((t[0] = r * o * l - i * s * a),
              (t[1] = i * s * l + r * o * a),
              (t[2] = i * o * a - r * s * l),
              (t[3] = i * o * l + r * s * a))
            : n === "YZX"
              ? ((t[0] = r * o * l + i * s * a),
                (t[1] = i * s * l + r * o * a),
                (t[2] = i * o * a - r * s * l),
                (t[3] = i * o * l - r * s * a))
              : n === "XZY" &&
                ((t[0] = r * o * l - i * s * a),
                (t[1] = i * s * l - r * o * a),
                (t[2] = i * o * a + r * s * l),
                (t[3] = i * o * l + r * s * a)),
    t
  );
}
const vC = iC;
const bC = rC;
const _C = oC;
const yC = sC;
class xC extends Array {
  constructor(e = 0, n = 0, r = 0, i = 1) {
    return (super(e, n, r, i), (this.onChange = () => {}), this);
  }
  get x() {
    return this[0];
  }
  get y() {
    return this[1];
  }
  get z() {
    return this[2];
  }
  get w() {
    return this[3];
  }
  set x(e) {
    ((this[0] = e), this.onChange());
  }
  set y(e) {
    ((this[1] = e), this.onChange());
  }
  set z(e) {
    ((this[2] = e), this.onChange());
  }
  set w(e) {
    ((this[3] = e), this.onChange());
  }
  identity() {
    return (aC(this), this.onChange(), this);
  }
  set(e, n, r, i) {
    return e.length
      ? this.copy(e)
      : (bC(this, e, n, r, i), this.onChange(), this);
  }
  rotateX(e) {
    return (cC(this, this, e), this.onChange(), this);
  }
  rotateY(e) {
    return (uC(this, this, e), this.onChange(), this);
  }
  rotateZ(e) {
    return (fC(this, this, e), this.onChange(), this);
  }
  inverse(e = this) {
    return (dC(this, e), this.onChange(), this);
  }
  conjugate(e = this) {
    return (pC(this, e), this.onChange(), this);
  }
  copy(e) {
    return (vC(this, e), this.onChange(), this);
  }
  normalize(e = this) {
    return (yC(this, e), this.onChange(), this);
  }
  multiply(e, n) {
    return (n ? Pd(this, e, n) : Pd(this, this, e), this.onChange(), this);
  }
  dot(e) {
    return _C(this, e);
  }
  fromMatrix3(e) {
    return (mC(this, e), this.onChange(), this);
  }
  fromEuler(e) {
    return (gC(this, e, e.order), this);
  }
  fromAxisAngle(e, n) {
    return (lC(this, e, n), this);
  }
  slerp(e, n) {
    return (hC(this, this, e, n), this);
  }
  fromArray(e, n = 0) {
    return (
      (this[0] = e[n]),
      (this[1] = e[n + 1]),
      (this[2] = e[n + 2]),
      (this[3] = e[n + 3]),
      this
    );
  }
  toArray(e = [], n = 0) {
    return (
      (e[n] = this[0]),
      (e[n + 1] = this[1]),
      (e[n + 2] = this[2]),
      (e[n + 3] = this[3]),
      e
    );
  }
}
const wC = 1e-6;
function SC(t, e) {
  return (
    (t[0] = e[0]),
    (t[1] = e[1]),
    (t[2] = e[2]),
    (t[3] = e[3]),
    (t[4] = e[4]),
    (t[5] = e[5]),
    (t[6] = e[6]),
    (t[7] = e[7]),
    (t[8] = e[8]),
    (t[9] = e[9]),
    (t[10] = e[10]),
    (t[11] = e[11]),
    (t[12] = e[12]),
    (t[13] = e[13]),
    (t[14] = e[14]),
    (t[15] = e[15]),
    t
  );
}
function PC(t, e, n, r, i, s, o, a, l, c, u, h, f, d, p, m, g) {
  return (
    (t[0] = e),
    (t[1] = n),
    (t[2] = r),
    (t[3] = i),
    (t[4] = s),
    (t[5] = o),
    (t[6] = a),
    (t[7] = l),
    (t[8] = c),
    (t[9] = u),
    (t[10] = h),
    (t[11] = f),
    (t[12] = d),
    (t[13] = p),
    (t[14] = m),
    (t[15] = g),
    t
  );
}
function TC(t) {
  return (
    (t[0] = 1),
    (t[1] = 0),
    (t[2] = 0),
    (t[3] = 0),
    (t[4] = 0),
    (t[5] = 1),
    (t[6] = 0),
    (t[7] = 0),
    (t[8] = 0),
    (t[9] = 0),
    (t[10] = 1),
    (t[11] = 0),
    (t[12] = 0),
    (t[13] = 0),
    (t[14] = 0),
    (t[15] = 1),
    t
  );
}
function EC(t, e) {
  let n = e[0],
    r = e[1],
    i = e[2],
    s = e[3],
    o = e[4],
    a = e[5],
    l = e[6],
    c = e[7],
    u = e[8],
    h = e[9],
    f = e[10],
    d = e[11],
    p = e[12],
    m = e[13],
    g = e[14],
    x = e[15],
    b = n * a - r * o,
    _ = n * l - i * o,
    v = n * c - s * o,
    y = r * l - i * a,
    w = r * c - s * a,
    P = i * c - s * l,
    T = u * m - h * p,
    R = u * g - f * p,
    k = u * x - d * p,
    D = h * g - f * m,
    M = h * x - d * m,
    z = f * x - d * g,
    S = b * z - _ * M + v * D + y * k - w * R + P * T;
  return S
    ? ((S = 1 / S),
      (t[0] = (a * z - l * M + c * D) * S),
      (t[1] = (i * M - r * z - s * D) * S),
      (t[2] = (m * P - g * w + x * y) * S),
      (t[3] = (f * w - h * P - d * y) * S),
      (t[4] = (l * k - o * z - c * R) * S),
      (t[5] = (n * z - i * k + s * R) * S),
      (t[6] = (g * v - p * P - x * _) * S),
      (t[7] = (u * P - f * v + d * _) * S),
      (t[8] = (o * M - a * k + c * T) * S),
      (t[9] = (r * k - n * M - s * T) * S),
      (t[10] = (p * w - m * v + x * b) * S),
      (t[11] = (h * v - u * w - d * b) * S),
      (t[12] = (a * R - o * D - l * T) * S),
      (t[13] = (n * D - r * R + i * T) * S),
      (t[14] = (m * _ - p * y - g * b) * S),
      (t[15] = (u * y - h * _ + f * b) * S),
      t)
    : null;
}
function CC(t) {
  let e = t[0],
    n = t[1],
    r = t[2],
    i = t[3],
    s = t[4],
    o = t[5],
    a = t[6],
    l = t[7],
    c = t[8],
    u = t[9],
    h = t[10],
    f = t[11],
    d = t[12],
    p = t[13],
    m = t[14],
    g = t[15],
    x = e * o - n * s,
    b = e * a - r * s,
    _ = e * l - i * s,
    v = n * a - r * o,
    y = n * l - i * o,
    w = r * l - i * a,
    P = c * p - u * d,
    T = c * m - h * d,
    R = c * g - f * d,
    k = u * m - h * p,
    D = u * g - f * p,
    M = h * g - f * m;
  return x * M - b * D + _ * k + v * R - y * T + w * P;
}
function Td(t, e, n) {
  let r = e[0],
    i = e[1],
    s = e[2],
    o = e[3],
    a = e[4],
    l = e[5],
    c = e[6],
    u = e[7],
    h = e[8],
    f = e[9],
    d = e[10],
    p = e[11],
    m = e[12],
    g = e[13],
    x = e[14],
    b = e[15],
    _ = n[0],
    v = n[1],
    y = n[2],
    w = n[3];
  return (
    (t[0] = _ * r + v * a + y * h + w * m),
    (t[1] = _ * i + v * l + y * f + w * g),
    (t[2] = _ * s + v * c + y * d + w * x),
    (t[3] = _ * o + v * u + y * p + w * b),
    (_ = n[4]),
    (v = n[5]),
    (y = n[6]),
    (w = n[7]),
    (t[4] = _ * r + v * a + y * h + w * m),
    (t[5] = _ * i + v * l + y * f + w * g),
    (t[6] = _ * s + v * c + y * d + w * x),
    (t[7] = _ * o + v * u + y * p + w * b),
    (_ = n[8]),
    (v = n[9]),
    (y = n[10]),
    (w = n[11]),
    (t[8] = _ * r + v * a + y * h + w * m),
    (t[9] = _ * i + v * l + y * f + w * g),
    (t[10] = _ * s + v * c + y * d + w * x),
    (t[11] = _ * o + v * u + y * p + w * b),
    (_ = n[12]),
    (v = n[13]),
    (y = n[14]),
    (w = n[15]),
    (t[12] = _ * r + v * a + y * h + w * m),
    (t[13] = _ * i + v * l + y * f + w * g),
    (t[14] = _ * s + v * c + y * d + w * x),
    (t[15] = _ * o + v * u + y * p + w * b),
    t
  );
}
function AC(t, e, n) {
  let r = n[0],
    i = n[1],
    s = n[2],
    o,
    a,
    l,
    c,
    u,
    h,
    f,
    d,
    p,
    m,
    g,
    x;
  return (
    e === t
      ? ((t[12] = e[0] * r + e[4] * i + e[8] * s + e[12]),
        (t[13] = e[1] * r + e[5] * i + e[9] * s + e[13]),
        (t[14] = e[2] * r + e[6] * i + e[10] * s + e[14]),
        (t[15] = e[3] * r + e[7] * i + e[11] * s + e[15]))
      : ((o = e[0]),
        (a = e[1]),
        (l = e[2]),
        (c = e[3]),
        (u = e[4]),
        (h = e[5]),
        (f = e[6]),
        (d = e[7]),
        (p = e[8]),
        (m = e[9]),
        (g = e[10]),
        (x = e[11]),
        (t[0] = o),
        (t[1] = a),
        (t[2] = l),
        (t[3] = c),
        (t[4] = u),
        (t[5] = h),
        (t[6] = f),
        (t[7] = d),
        (t[8] = p),
        (t[9] = m),
        (t[10] = g),
        (t[11] = x),
        (t[12] = o * r + u * i + p * s + e[12]),
        (t[13] = a * r + h * i + m * s + e[13]),
        (t[14] = l * r + f * i + g * s + e[14]),
        (t[15] = c * r + d * i + x * s + e[15])),
    t
  );
}
function zC(t, e, n) {
  let r = n[0],
    i = n[1],
    s = n[2];
  return (
    (t[0] = e[0] * r),
    (t[1] = e[1] * r),
    (t[2] = e[2] * r),
    (t[3] = e[3] * r),
    (t[4] = e[4] * i),
    (t[5] = e[5] * i),
    (t[6] = e[6] * i),
    (t[7] = e[7] * i),
    (t[8] = e[8] * s),
    (t[9] = e[9] * s),
    (t[10] = e[10] * s),
    (t[11] = e[11] * s),
    (t[12] = e[12]),
    (t[13] = e[13]),
    (t[14] = e[14]),
    (t[15] = e[15]),
    t
  );
}
function RC(t, e, n, r) {
  let i = r[0],
    s = r[1],
    o = r[2],
    a = Math.hypot(i, s, o),
    l,
    c,
    u,
    h,
    f,
    d,
    p,
    m,
    g,
    x,
    b,
    _,
    v,
    y,
    w,
    P,
    T,
    R,
    k,
    D,
    M,
    z,
    S,
    A;
  return Math.abs(a) < wC
    ? null
    : ((a = 1 / a),
      (i *= a),
      (s *= a),
      (o *= a),
      (l = Math.sin(n)),
      (c = Math.cos(n)),
      (u = 1 - c),
      (h = e[0]),
      (f = e[1]),
      (d = e[2]),
      (p = e[3]),
      (m = e[4]),
      (g = e[5]),
      (x = e[6]),
      (b = e[7]),
      (_ = e[8]),
      (v = e[9]),
      (y = e[10]),
      (w = e[11]),
      (P = i * i * u + c),
      (T = s * i * u + o * l),
      (R = o * i * u - s * l),
      (k = i * s * u - o * l),
      (D = s * s * u + c),
      (M = o * s * u + i * l),
      (z = i * o * u + s * l),
      (S = s * o * u - i * l),
      (A = o * o * u + c),
      (t[0] = h * P + m * T + _ * R),
      (t[1] = f * P + g * T + v * R),
      (t[2] = d * P + x * T + y * R),
      (t[3] = p * P + b * T + w * R),
      (t[4] = h * k + m * D + _ * M),
      (t[5] = f * k + g * D + v * M),
      (t[6] = d * k + x * D + y * M),
      (t[7] = p * k + b * D + w * M),
      (t[8] = h * z + m * S + _ * A),
      (t[9] = f * z + g * S + v * A),
      (t[10] = d * z + x * S + y * A),
      (t[11] = p * z + b * S + w * A),
      e !== t &&
        ((t[12] = e[12]), (t[13] = e[13]), (t[14] = e[14]), (t[15] = e[15])),
      t);
}
function OC(t, e) {
  return ((t[0] = e[12]), (t[1] = e[13]), (t[2] = e[14]), t);
}
function wv(t, e) {
  let n = e[0],
    r = e[1],
    i = e[2],
    s = e[4],
    o = e[5],
    a = e[6],
    l = e[8],
    c = e[9],
    u = e[10];
  return (
    (t[0] = Math.hypot(n, r, i)),
    (t[1] = Math.hypot(s, o, a)),
    (t[2] = Math.hypot(l, c, u)),
    t
  );
}
function MC(t) {
  let e = t[0],
    n = t[1],
    r = t[2],
    i = t[4],
    s = t[5],
    o = t[6],
    a = t[8],
    l = t[9],
    c = t[10];
  const u = e * e + n * n + r * r,
    h = i * i + s * s + o * o,
    f = a * a + l * l + c * c;
  return Math.sqrt(Math.max(u, h, f));
}
const FC = (function () {
  const t = [0, 0, 0];
  return function (e, n) {
    let r = t;
    wv(r, n);
    let i = 1 / r[0],
      s = 1 / r[1],
      o = 1 / r[2],
      a = n[0] * i,
      l = n[1] * s,
      c = n[2] * o,
      u = n[4] * i,
      h = n[5] * s,
      f = n[6] * o,
      d = n[8] * i,
      p = n[9] * s,
      m = n[10] * o,
      g = a + h + m,
      x = 0;
    return (
      g > 0
        ? ((x = Math.sqrt(g + 1) * 2),
          (e[3] = 0.25 * x),
          (e[0] = (f - p) / x),
          (e[1] = (d - c) / x),
          (e[2] = (l - u) / x))
        : a > h && a > m
          ? ((x = Math.sqrt(1 + a - h - m) * 2),
            (e[3] = (f - p) / x),
            (e[0] = 0.25 * x),
            (e[1] = (l + u) / x),
            (e[2] = (d + c) / x))
          : h > m
            ? ((x = Math.sqrt(1 + h - a - m) * 2),
              (e[3] = (d - c) / x),
              (e[0] = (l + u) / x),
              (e[1] = 0.25 * x),
              (e[2] = (f + p) / x))
            : ((x = Math.sqrt(1 + m - a - h) * 2),
              (e[3] = (l - u) / x),
              (e[0] = (d + c) / x),
              (e[1] = (f + p) / x),
              (e[2] = 0.25 * x)),
      e
    );
  };
})();
function kC(t, e, n, r) {
  let i = e[0],
    s = e[1],
    o = e[2],
    a = e[3],
    l = i + i,
    c = s + s,
    u = o + o,
    h = i * l,
    f = i * c,
    d = i * u,
    p = s * c,
    m = s * u,
    g = o * u,
    x = a * l,
    b = a * c,
    _ = a * u,
    v = r[0],
    y = r[1],
    w = r[2];
  return (
    (t[0] = (1 - (p + g)) * v),
    (t[1] = (f + _) * v),
    (t[2] = (d - b) * v),
    (t[3] = 0),
    (t[4] = (f - _) * y),
    (t[5] = (1 - (h + g)) * y),
    (t[6] = (m + x) * y),
    (t[7] = 0),
    (t[8] = (d + b) * w),
    (t[9] = (m - x) * w),
    (t[10] = (1 - (h + p)) * w),
    (t[11] = 0),
    (t[12] = n[0]),
    (t[13] = n[1]),
    (t[14] = n[2]),
    (t[15] = 1),
    t
  );
}
function LC(t, e) {
  let n = e[0],
    r = e[1],
    i = e[2],
    s = e[3],
    o = n + n,
    a = r + r,
    l = i + i,
    c = n * o,
    u = r * o,
    h = r * a,
    f = i * o,
    d = i * a,
    p = i * l,
    m = s * o,
    g = s * a,
    x = s * l;
  return (
    (t[0] = 1 - h - p),
    (t[1] = u + x),
    (t[2] = f - g),
    (t[3] = 0),
    (t[4] = u - x),
    (t[5] = 1 - c - p),
    (t[6] = d + m),
    (t[7] = 0),
    (t[8] = f + g),
    (t[9] = d - m),
    (t[10] = 1 - c - h),
    (t[11] = 0),
    (t[12] = 0),
    (t[13] = 0),
    (t[14] = 0),
    (t[15] = 1),
    t
  );
}
function IC(t, e, n, r, i) {
  let s = 1 / Math.tan(e / 2),
    o = 1 / (r - i);
  return (
    (t[0] = s / n),
    (t[1] = 0),
    (t[2] = 0),
    (t[3] = 0),
    (t[4] = 0),
    (t[5] = s),
    (t[6] = 0),
    (t[7] = 0),
    (t[8] = 0),
    (t[9] = 0),
    (t[10] = (i + r) * o),
    (t[11] = -1),
    (t[12] = 0),
    (t[13] = 0),
    (t[14] = 2 * i * r * o),
    (t[15] = 0),
    t
  );
}
function DC(t, e, n, r, i, s, o) {
  let a = 1 / (e - n),
    l = 1 / (r - i),
    c = 1 / (s - o);
  return (
    (t[0] = -2 * a),
    (t[1] = 0),
    (t[2] = 0),
    (t[3] = 0),
    (t[4] = 0),
    (t[5] = -2 * l),
    (t[6] = 0),
    (t[7] = 0),
    (t[8] = 0),
    (t[9] = 0),
    (t[10] = 2 * c),
    (t[11] = 0),
    (t[12] = (e + n) * a),
    (t[13] = (i + r) * l),
    (t[14] = (o + s) * c),
    (t[15] = 1),
    t
  );
}
function NC(t, e, n, r) {
  let i = e[0],
    s = e[1],
    o = e[2],
    a = r[0],
    l = r[1],
    c = r[2],
    u = i - n[0],
    h = s - n[1],
    f = o - n[2],
    d = u * u + h * h + f * f;
  d === 0 ? (f = 1) : ((d = 1 / Math.sqrt(d)), (u *= d), (h *= d), (f *= d));
  let p = l * f - c * h,
    m = c * u - a * f,
    g = a * h - l * u;
  return (
    (d = p * p + m * m + g * g),
    d === 0 &&
      (c ? (a += 1e-6) : l ? (c += 1e-6) : (l += 1e-6),
      (p = l * f - c * h),
      (m = c * u - a * f),
      (g = a * h - l * u),
      (d = p * p + m * m + g * g)),
    (d = 1 / Math.sqrt(d)),
    (p *= d),
    (m *= d),
    (g *= d),
    (t[0] = p),
    (t[1] = m),
    (t[2] = g),
    (t[3] = 0),
    (t[4] = h * g - f * m),
    (t[5] = f * p - u * g),
    (t[6] = u * m - h * p),
    (t[7] = 0),
    (t[8] = u),
    (t[9] = h),
    (t[10] = f),
    (t[11] = 0),
    (t[12] = i),
    (t[13] = s),
    (t[14] = o),
    (t[15] = 1),
    t
  );
}
class Dn extends Array {
  constructor(
    e = 1,
    n = 0,
    r = 0,
    i = 0,
    s = 0,
    o = 1,
    a = 0,
    l = 0,
    c = 0,
    u = 0,
    h = 1,
    f = 0,
    d = 0,
    p = 0,
    m = 0,
    g = 1,
  ) {
    return (super(e, n, r, i, s, o, a, l, c, u, h, f, d, p, m, g), this);
  }
  get x() {
    return this[12];
  }
  get y() {
    return this[13];
  }
  get z() {
    return this[14];
  }
  get w() {
    return this[15];
  }
  set x(e) {
    this[12] = e;
  }
  set y(e) {
    this[13] = e;
  }
  set z(e) {
    this[14] = e;
  }
  set w(e) {
    this[15] = e;
  }
  set(e, n, r, i, s, o, a, l, c, u, h, f, d, p, m, g) {
    return e.length
      ? this.copy(e)
      : (PC(this, e, n, r, i, s, o, a, l, c, u, h, f, d, p, m, g), this);
  }
  translate(e, n = this) {
    return (AC(this, n, e), this);
  }
  rotate(e, n, r = this) {
    return (RC(this, r, e, n), this);
  }
  scale(e, n = this) {
    return (zC(this, n, typeof e == "number" ? [e, e, e] : e), this);
  }
  multiply(e, n) {
    return (n ? Td(this, e, n) : Td(this, this, e), this);
  }
  identity() {
    return (TC(this), this);
  }
  copy(e) {
    return (SC(this, e), this);
  }
  fromPerspective({ fov: e, aspect: n, near: r, far: i } = {}) {
    return (IC(this, e, n, r, i), this);
  }
  fromOrthogonal({ left: e, right: n, bottom: r, top: i, near: s, far: o }) {
    return (DC(this, e, n, r, i, s, o), this);
  }
  fromQuaternion(e) {
    return (LC(this, e), this);
  }
  setPosition(e) {
    return ((this.x = e[0]), (this.y = e[1]), (this.z = e[2]), this);
  }
  inverse(e = this) {
    return (EC(this, e), this);
  }
  compose(e, n, r) {
    return (kC(this, e, n, r), this);
  }
  getRotation(e) {
    return (FC(e, this), this);
  }
  getTranslation(e) {
    return (OC(e, this), this);
  }
  getScaling(e) {
    return (wv(e, this), this);
  }
  getMaxScaleOnAxis() {
    return MC(this);
  }
  lookAt(e, n, r) {
    return (NC(this, e, n, r), this);
  }
  determinant() {
    return CC(this);
  }
  fromArray(e, n = 0) {
    return (
      (this[0] = e[n]),
      (this[1] = e[n + 1]),
      (this[2] = e[n + 2]),
      (this[3] = e[n + 3]),
      (this[4] = e[n + 4]),
      (this[5] = e[n + 5]),
      (this[6] = e[n + 6]),
      (this[7] = e[n + 7]),
      (this[8] = e[n + 8]),
      (this[9] = e[n + 9]),
      (this[10] = e[n + 10]),
      (this[11] = e[n + 11]),
      (this[12] = e[n + 12]),
      (this[13] = e[n + 13]),
      (this[14] = e[n + 14]),
      (this[15] = e[n + 15]),
      this
    );
  }
  toArray(e = [], n = 0) {
    return (
      (e[n] = this[0]),
      (e[n + 1] = this[1]),
      (e[n + 2] = this[2]),
      (e[n + 3] = this[3]),
      (e[n + 4] = this[4]),
      (e[n + 5] = this[5]),
      (e[n + 6] = this[6]),
      (e[n + 7] = this[7]),
      (e[n + 8] = this[8]),
      (e[n + 9] = this[9]),
      (e[n + 10] = this[10]),
      (e[n + 11] = this[11]),
      (e[n + 12] = this[12]),
      (e[n + 13] = this[13]),
      (e[n + 14] = this[14]),
      (e[n + 15] = this[15]),
      e
    );
  }
}
function UC(t, e, n = "YXZ") {
  return (
    n === "XYZ"
      ? ((t[1] = Math.asin(Math.min(Math.max(e[8], -1), 1))),
        Math.abs(e[8]) < 0.99999
          ? ((t[0] = Math.atan2(-e[9], e[10])),
            (t[2] = Math.atan2(-e[4], e[0])))
          : ((t[0] = Math.atan2(e[6], e[5])), (t[2] = 0)))
      : n === "YXZ"
        ? ((t[0] = Math.asin(-Math.min(Math.max(e[9], -1), 1))),
          Math.abs(e[9]) < 0.99999
            ? ((t[1] = Math.atan2(e[8], e[10])),
              (t[2] = Math.atan2(e[1], e[5])))
            : ((t[1] = Math.atan2(-e[2], e[0])), (t[2] = 0)))
        : n === "ZXY"
          ? ((t[0] = Math.asin(Math.min(Math.max(e[6], -1), 1))),
            Math.abs(e[6]) < 0.99999
              ? ((t[1] = Math.atan2(-e[2], e[10])),
                (t[2] = Math.atan2(-e[4], e[5])))
              : ((t[1] = 0), (t[2] = Math.atan2(e[1], e[0]))))
          : n === "ZYX"
            ? ((t[1] = Math.asin(-Math.min(Math.max(e[2], -1), 1))),
              Math.abs(e[2]) < 0.99999
                ? ((t[0] = Math.atan2(e[6], e[10])),
                  (t[2] = Math.atan2(e[1], e[0])))
                : ((t[0] = 0), (t[2] = Math.atan2(-e[4], e[5]))))
            : n === "YZX"
              ? ((t[2] = Math.asin(Math.min(Math.max(e[1], -1), 1))),
                Math.abs(e[1]) < 0.99999
                  ? ((t[0] = Math.atan2(-e[9], e[5])),
                    (t[1] = Math.atan2(-e[2], e[0])))
                  : ((t[0] = 0), (t[1] = Math.atan2(e[8], e[10]))))
              : n === "XZY" &&
                ((t[2] = Math.asin(-Math.min(Math.max(e[4], -1), 1))),
                Math.abs(e[4]) < 0.99999
                  ? ((t[0] = Math.atan2(e[6], e[5])),
                    (t[1] = Math.atan2(e[8], e[0])))
                  : ((t[0] = Math.atan2(-e[9], e[10])), (t[1] = 0))),
    t
  );
}
const Ed = new Dn();
class BC extends Array {
  constructor(e = 0, n = e, r = e, i = "YXZ") {
    return (super(e, n, r), (this.order = i), (this.onChange = () => {}), this);
  }
  get x() {
    return this[0];
  }
  get y() {
    return this[1];
  }
  get z() {
    return this[2];
  }
  set x(e) {
    ((this[0] = e), this.onChange());
  }
  set y(e) {
    ((this[1] = e), this.onChange());
  }
  set z(e) {
    ((this[2] = e), this.onChange());
  }
  set(e, n = e, r = e) {
    return e.length
      ? this.copy(e)
      : ((this[0] = e), (this[1] = n), (this[2] = r), this.onChange(), this);
  }
  copy(e) {
    return (
      (this[0] = e[0]),
      (this[1] = e[1]),
      (this[2] = e[2]),
      this.onChange(),
      this
    );
  }
  reorder(e) {
    return ((this.order = e), this.onChange(), this);
  }
  fromRotationMatrix(e, n = this.order) {
    return (UC(this, e, n), this);
  }
  fromQuaternion(e, n = this.order) {
    return (Ed.fromQuaternion(e), this.fromRotationMatrix(Ed, n));
  }
  toArray(e = [], n = 0) {
    return ((e[n] = this[0]), (e[n + 1] = this[1]), (e[n + 2] = this[2]), e);
  }
}
class Ea {
  constructor({ scale: e = 1 } = {}) {
    ((this.parent = null),
      (this.children = []),
      (this.visible = !0),
      (this.castable = !0),
      (this.matrix = new Dn()),
      (this.worldMatrix = new Dn()),
      (this.matrixAutoUpdate = !0),
      (this.position = new be()),
      (this.worldPosition = new be()),
      (this.quaternion = new xC()),
      (this.scale = new be(e, e, e)),
      (this.rotation = new BC()),
      (this.up = new be(0, 1, 0)),
      (this.rotation.onChange = () => this.quaternion.fromEuler(this.rotation)),
      (this.quaternion.onChange = () =>
        this.rotation.fromQuaternion(this.quaternion)));
  }
  setParent(e, n = !0) {
    (this.parent && e !== this.parent && this.parent.removeChild(this, !1),
      (this.parent = e),
      n && e && e.addChild(this, !1));
  }
  addChild(e, n = !0) {
    (~this.children.indexOf(e) || this.children.push(e),
      n && e.setParent(this, !1));
  }
  removeChild(e, n = !0) {
    (~this.children.indexOf(e) &&
      this.children.splice(this.children.indexOf(e), 1),
      n && e.setParent(null, !1));
  }
  updateMatrixWorld(e) {
    (this.matrixAutoUpdate && this.updateMatrix(),
      (this.worldMatrixNeedsUpdate || e) &&
        (this.parent === null
          ? this.worldMatrix.copy(this.matrix)
          : this.worldMatrix.multiply(this.parent.worldMatrix, this.matrix),
        (this.worldMatrixNeedsUpdate = !1),
        (e = !0),
        this.worldMatrix.getTranslation(this.worldPosition)));
    for (let n = 0, r = this.children.length; n < r; n++)
      this.children[n].updateMatrixWorld(e);
  }
  updateMatrix() {
    (this.matrix.compose(this.quaternion, this.position, this.scale),
      (this.worldMatrixNeedsUpdate = !0));
  }
  traverse(e) {
    if (!e(this))
      for (let n = 0, r = this.children.length; n < r; n++)
        this.children[n].traverse(e);
  }
  decompose() {
    (this.matrix.getTranslation(this.position),
      this.matrix.getRotation(this.quaternion),
      this.matrix.getScaling(this.scale),
      this.rotation.fromQuaternion(this.quaternion));
  }
  lookAt(e, n = !1) {
    (n
      ? this.matrix.lookAt(this.position, e, this.up)
      : this.matrix.lookAt(e, this.position, this.up),
      this.matrix.getRotation(this.quaternion),
      this.rotation.fromQuaternion(this.quaternion));
  }
  lookAtWorld(e, n = !1) {
    const r = [
      this.worldMatrix[12],
      this.worldMatrix[13],
      this.worldMatrix[14],
    ];
    (n ? this.matrix.lookAt(r, e, this.up) : this.matrix.lookAt(e, r, this.up),
      this.matrix.getRotation(this.quaternion),
      this.rotation.fromQuaternion(this.quaternion));
  }
}
function VC(t, e) {
  return (
    (t[0] = e[0]),
    (t[1] = e[1]),
    (t[2] = e[2]),
    (t[3] = e[4]),
    (t[4] = e[5]),
    (t[5] = e[6]),
    (t[6] = e[8]),
    (t[7] = e[9]),
    (t[8] = e[10]),
    t
  );
}
function HC(t, e) {
  let n = e[0],
    r = e[1],
    i = e[2],
    s = e[3],
    o = n + n,
    a = r + r,
    l = i + i,
    c = n * o,
    u = r * o,
    h = r * a,
    f = i * o,
    d = i * a,
    p = i * l,
    m = s * o,
    g = s * a,
    x = s * l;
  return (
    (t[0] = 1 - h - p),
    (t[3] = u - x),
    (t[6] = f + g),
    (t[1] = u + x),
    (t[4] = 1 - c - p),
    (t[7] = d - m),
    (t[2] = f - g),
    (t[5] = d + m),
    (t[8] = 1 - c - h),
    t
  );
}
function jC(t, e) {
  return (
    (t[0] = e[0]),
    (t[1] = e[1]),
    (t[2] = e[2]),
    (t[3] = e[3]),
    (t[4] = e[4]),
    (t[5] = e[5]),
    (t[6] = e[6]),
    (t[7] = e[7]),
    (t[8] = e[8]),
    t
  );
}
function WC(t, e, n, r, i, s, o, a, l, c) {
  return (
    (t[0] = e),
    (t[1] = n),
    (t[2] = r),
    (t[3] = i),
    (t[4] = s),
    (t[5] = o),
    (t[6] = a),
    (t[7] = l),
    (t[8] = c),
    t
  );
}
function GC(t) {
  return (
    (t[0] = 1),
    (t[1] = 0),
    (t[2] = 0),
    (t[3] = 0),
    (t[4] = 1),
    (t[5] = 0),
    (t[6] = 0),
    (t[7] = 0),
    (t[8] = 1),
    t
  );
}
function qC(t, e) {
  let n = e[0],
    r = e[1],
    i = e[2],
    s = e[3],
    o = e[4],
    a = e[5],
    l = e[6],
    c = e[7],
    u = e[8],
    h = u * o - a * c,
    f = -u * s + a * l,
    d = c * s - o * l,
    p = n * h + r * f + i * d;
  return p
    ? ((p = 1 / p),
      (t[0] = h * p),
      (t[1] = (-u * r + i * c) * p),
      (t[2] = (a * r - i * o) * p),
      (t[3] = f * p),
      (t[4] = (u * n - i * l) * p),
      (t[5] = (-a * n + i * s) * p),
      (t[6] = d * p),
      (t[7] = (-c * n + r * l) * p),
      (t[8] = (o * n - r * s) * p),
      t)
    : null;
}
function Cd(t, e, n) {
  let r = e[0],
    i = e[1],
    s = e[2],
    o = e[3],
    a = e[4],
    l = e[5],
    c = e[6],
    u = e[7],
    h = e[8],
    f = n[0],
    d = n[1],
    p = n[2],
    m = n[3],
    g = n[4],
    x = n[5],
    b = n[6],
    _ = n[7],
    v = n[8];
  return (
    (t[0] = f * r + d * o + p * c),
    (t[1] = f * i + d * a + p * u),
    (t[2] = f * s + d * l + p * h),
    (t[3] = m * r + g * o + x * c),
    (t[4] = m * i + g * a + x * u),
    (t[5] = m * s + g * l + x * h),
    (t[6] = b * r + _ * o + v * c),
    (t[7] = b * i + _ * a + v * u),
    (t[8] = b * s + _ * l + v * h),
    t
  );
}
function $C(t, e, n) {
  let r = e[0],
    i = e[1],
    s = e[2],
    o = e[3],
    a = e[4],
    l = e[5],
    c = e[6],
    u = e[7],
    h = e[8],
    f = n[0],
    d = n[1];
  return (
    (t[0] = r),
    (t[1] = i),
    (t[2] = s),
    (t[3] = o),
    (t[4] = a),
    (t[5] = l),
    (t[6] = f * r + d * o + c),
    (t[7] = f * i + d * a + u),
    (t[8] = f * s + d * l + h),
    t
  );
}
function XC(t, e, n) {
  let r = e[0],
    i = e[1],
    s = e[2],
    o = e[3],
    a = e[4],
    l = e[5],
    c = e[6],
    u = e[7],
    h = e[8],
    f = Math.sin(n),
    d = Math.cos(n);
  return (
    (t[0] = d * r + f * o),
    (t[1] = d * i + f * a),
    (t[2] = d * s + f * l),
    (t[3] = d * o - f * r),
    (t[4] = d * a - f * i),
    (t[5] = d * l - f * s),
    (t[6] = c),
    (t[7] = u),
    (t[8] = h),
    t
  );
}
function YC(t, e, n) {
  let r = n[0],
    i = n[1];
  return (
    (t[0] = r * e[0]),
    (t[1] = r * e[1]),
    (t[2] = r * e[2]),
    (t[3] = i * e[3]),
    (t[4] = i * e[4]),
    (t[5] = i * e[5]),
    (t[6] = e[6]),
    (t[7] = e[7]),
    (t[8] = e[8]),
    t
  );
}
function KC(t, e) {
  let n = e[0],
    r = e[1],
    i = e[2],
    s = e[3],
    o = e[4],
    a = e[5],
    l = e[6],
    c = e[7],
    u = e[8],
    h = e[9],
    f = e[10],
    d = e[11],
    p = e[12],
    m = e[13],
    g = e[14],
    x = e[15],
    b = n * a - r * o,
    _ = n * l - i * o,
    v = n * c - s * o,
    y = r * l - i * a,
    w = r * c - s * a,
    P = i * c - s * l,
    T = u * m - h * p,
    R = u * g - f * p,
    k = u * x - d * p,
    D = h * g - f * m,
    M = h * x - d * m,
    z = f * x - d * g,
    S = b * z - _ * M + v * D + y * k - w * R + P * T;
  return S
    ? ((S = 1 / S),
      (t[0] = (a * z - l * M + c * D) * S),
      (t[1] = (l * k - o * z - c * R) * S),
      (t[2] = (o * M - a * k + c * T) * S),
      (t[3] = (i * M - r * z - s * D) * S),
      (t[4] = (n * z - i * k + s * R) * S),
      (t[5] = (r * k - n * M - s * T) * S),
      (t[6] = (m * P - g * w + x * y) * S),
      (t[7] = (g * v - p * P - x * _) * S),
      (t[8] = (p * w - m * v + x * b) * S),
      t)
    : null;
}
class QC extends Array {
  constructor(e = 1, n = 0, r = 0, i = 0, s = 1, o = 0, a = 0, l = 0, c = 1) {
    return (super(e, n, r, i, s, o, a, l, c), this);
  }
  set(e, n, r, i, s, o, a, l, c) {
    return e.length
      ? this.copy(e)
      : (WC(this, e, n, r, i, s, o, a, l, c), this);
  }
  translate(e, n = this) {
    return ($C(this, n, e), this);
  }
  rotate(e, n = this) {
    return (XC(this, n, e), this);
  }
  scale(e, n = this) {
    return (YC(this, n, e), this);
  }
  multiply(e, n) {
    return (n ? Cd(this, e, n) : Cd(this, this, e), this);
  }
  identity() {
    return (GC(this), this);
  }
  copy(e) {
    return (jC(this, e), this);
  }
  fromMatrix4(e) {
    return (VC(this, e), this);
  }
  fromQuaternion(e) {
    return (HC(this, e), this);
  }
  fromBasis(e, n, r) {
    return (
      this.set(e[0], e[1], e[2], n[0], n[1], n[2], r[0], r[1], r[2]),
      this
    );
  }
  inverse(e = this) {
    return (qC(this, e), this);
  }
  getNormalMatrix(e) {
    return (KC(this, e), this);
  }
}
let ZC = 0;
class er extends Ea {
  constructor(
    e,
    {
      geometry: n,
      program: r,
      mode: i = e.TRIANGLES,
      frustumCulled: s = !0,
      renderOrder: o = 0,
      forceRenderOrder: a = !1,
      transform: l = null,
    } = {},
  ) {
    (super(),
      e.canvas || console.error("gl not passed as first argument to Mesh"),
      (this.gl = e),
      (this.id = ZC++),
      l !== null &&
        (this.position.copy(l.position),
        this.scale.copy(l.scale),
        this.rotation.copy(l.rotation),
        l.parent && this.setParent(l.parent)),
      (this.geometry = n),
      (this.program = r),
      (this.mode = i),
      (this.frustumCulled = s),
      (this.renderOrder = o),
      a
        ? (this.forceRenderOrder = !0)
        : (this.forceRenderOrder =
            this.renderOrder !== 0 && typeof this.renderOrder == "number"),
      (this.modelViewMatrix = new Dn()),
      (this.normalMatrix = new QC()),
      (this.isCameraFliped = !1),
      (this.beforeRenderCallbacks = []),
      (this.afterRenderCallbacks = []));
  }
  onBeforeRender(e) {
    return (this.beforeRenderCallbacks.push(e), this);
  }
  onAfterRender(e) {
    return (this.afterRenderCallbacks.push(e), this);
  }
  draw({ camera: e } = {}) {
    this.beforeRenderCallbacks.forEach(
      (i) => i && i({ mesh: this, camera: e }),
    );
    let n = !1;
    e &&
      (this.program.uniforms.modelMatrix ||
        Object.assign(this.program.uniforms, {
          modelMatrix: { value: null },
          viewMatrix: { value: null },
          modelViewMatrix: { value: null },
          normalMatrix: { value: null },
          projectionMatrix: { value: null },
          cameraPosition: { value: null },
          isCameraFliped: { value: null },
        }),
      (this.program.uniforms.projectionMatrix.value = e.projectionMatrix),
      (this.program.uniforms.cameraPosition.value = e.worldPosition),
      (this.program.uniforms.viewMatrix.value = e.viewMatrix),
      (this.program.uniforms.isCameraFliped.value = e.isFliped),
      this.modelViewMatrix.multiply(e.viewMatrix, this.worldMatrix),
      this.normalMatrix.getNormalMatrix(this.modelViewMatrix),
      (this.program.uniforms.modelMatrix.value = this.worldMatrix),
      (this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix),
      (this.program.uniforms.normalMatrix.value = this.normalMatrix),
      (n = e.isFliped));
    let r = (this.program.cullFace && this.worldMatrix.determinant() < 0) || n;
    (this.program.use({ flipFaces: r }),
      this.geometry.draw({ mode: this.mode, program: this.program }),
      this.afterRenderCallbacks.forEach(
        (i) => i && i({ mesh: this, camera: e }),
      ));
  }
}
const Ad = {
  black: "#000000",
  white: "#ffffff",
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
  fuchsia: "#ff00ff",
  cyan: "#00ffff",
  yellow: "#ffff00",
  orange: "#ff8000",
};
function zd(t) {
  t.length === 4 && (t = t[0] + t[1] + t[1] + t[2] + t[2] + t[3] + t[3]);
  const e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
  return (
    e || console.warn(`Unable to convert hex string ${t} to rgb values`),
    [
      parseInt(e[1], 16) / 255,
      parseInt(e[2], 16) / 255,
      parseInt(e[3], 16) / 255,
    ]
  );
}
function JC(t) {
  return (
    (t = parseInt(t)),
    [((t >> 16) & 255) / 255, ((t >> 8) & 255) / 255, (t & 255) / 255]
  );
}
function Rd(t) {
  return t === void 0
    ? [0, 0, 0]
    : arguments.length === 3
      ? arguments
      : isNaN(t)
        ? t[0] === "#"
          ? zd(t)
          : Ad[t.toLowerCase()]
            ? zd(Ad[t.toLowerCase()])
            : (console.warn("Color format not recognised", t), [0, 0, 0])
        : JC(t);
}
function ml(t) {
  var e = t.toString(16);
  return e.length == 1 ? "0" + e : e;
}
function eA(t, e, n) {
  return "#" + ml(t) + ml(e) + ml(n);
}
class ke extends Array {
  constructor(e) {
    return Array.isArray(e) ? super(...e) : super(...Rd(...arguments));
  }
  get r() {
    return this[0];
  }
  get g() {
    return this[1];
  }
  get b() {
    return this[2];
  }
  getHex() {
    return eA(
      Math.round(this[0] * 255),
      Math.round(this[1] * 255),
      Math.round(this[2] * 255),
    );
  }
  getRGBA() {
    return [this[0], this[1], this[2], 1];
  }
  set r(e) {
    this[0] = e;
  }
  set g(e) {
    this[1] = e;
  }
  set b(e) {
    this[2] = e;
  }
  set(e) {
    return Array.isArray(e) ? this.copy(e) : this.copy(Rd(...arguments));
  }
  copy(e) {
    return ((this[0] = e[0]), (this[1] = e[1]), (this[2] = e[2]), this);
  }
}
const je = { cursor: [0, 0] };
const iA = new Dn();
const rA = new be();
const sA = new be();
class oA extends Ea {
  constructor(
    e,
    {
      near: n = 0.1,
      far: r = 100,
      fov: i = 45,
      aspect: s = 1,
      left: o,
      right: a,
      bottom: l,
      top: c,
      zoom: u = 1,
    } = {},
  ) {
    (super(),
      Object.assign(this, {
        near: n,
        far: r,
        fov: i,
        aspect: s,
        left: o,
        right: a,
        bottom: l,
        top: c,
        zoom: u,
      }),
      (this.projectionMatrix = new Dn()),
      (this.viewMatrix = new Dn()),
      (this.projectionViewMatrix = new Dn()),
      (this.worldPosition = new be()),
      (this.isFliped = !1),
      (this.type = o || a ? "orthographic" : "perspective"),
      this.type === "orthographic" ? this.orthographic() : this.perspective());
  }
  perspective({
    near: e = this.near,
    far: n = this.far,
    fov: r = this.fov,
    aspect: i = this.aspect,
  } = {}) {
    return (
      Object.assign(this, { near: e, far: n, fov: r, aspect: i }),
      this.projectionMatrix.fromPerspective({
        fov: r * (Math.PI / 180),
        aspect: i,
        near: e,
        far: n,
      }),
      (this.type = "perspective"),
      this
    );
  }
  orthographic({
    near: e = this.near,
    far: n = this.far,
    left: r = this.left,
    right: i = this.right,
    bottom: s = this.bottom,
    top: o = this.top,
    zoom: a = this.zoom,
  } = {}) {
    return (
      Object.assign(this, {
        near: e,
        far: n,
        left: r,
        right: i,
        bottom: s,
        top: o,
        zoom: a,
      }),
      (r /= a),
      (i /= a),
      (s /= a),
      (o /= a),
      this.projectionMatrix.fromOrthogonal({
        left: r,
        right: i,
        bottom: s,
        top: o,
        near: e,
        far: n,
      }),
      (this.type = "orthographic"),
      this
    );
  }
  updateMatrixWorld(e = !1) {
    return (
      super.updateMatrixWorld(),
      e &&
        ((this.worldMatrix[1] *= -1),
        (this.worldMatrix[5] *= -1),
        (this.worldMatrix[9] *= -1),
        (this.worldMatrix[13] *= -1)),
      (this.isFliped = e),
      this.viewMatrix.inverse(this.worldMatrix),
      this.worldMatrix.getTranslation(this.worldPosition),
      this.projectionViewMatrix.multiply(
        this.projectionMatrix,
        this.viewMatrix,
      ),
      this
    );
  }
  lookAt(e) {
    return (super.lookAt(e, !0), this);
  }
  project(e) {
    return (
      e.applyMatrix4(this.viewMatrix),
      e.applyMatrix4(this.projectionMatrix),
      this
    );
  }
  unproject(e) {
    return (
      e.applyMatrix4(iA.inverse(this.projectionMatrix)),
      e.applyMatrix4(this.worldMatrix),
      this
    );
  }
  updateFrustum() {
    this.frustum ||
      (this.frustum = [
        new be(),
        new be(),
        new be(),
        new be(),
        new be(),
        new be(),
      ]);
    const e = this.projectionViewMatrix;
    ((this.frustum[0].set(e[3] - e[0], e[7] - e[4], e[11] - e[8]).constant =
      e[15] - e[12]),
      (this.frustum[1].set(e[3] + e[0], e[7] + e[4], e[11] + e[8]).constant =
        e[15] + e[12]),
      (this.frustum[2].set(e[3] + e[1], e[7] + e[5], e[11] + e[9]).constant =
        e[15] + e[13]),
      (this.frustum[3].set(e[3] - e[1], e[7] - e[5], e[11] - e[9]).constant =
        e[15] - e[13]),
      (this.frustum[4].set(e[3] - e[2], e[7] - e[6], e[11] - e[10]).constant =
        e[15] - e[14]),
      (this.frustum[5].set(e[3] + e[2], e[7] + e[6], e[11] + e[10]).constant =
        e[15] + e[14]));
    for (let n = 0; n < 6; n++) {
      const r = 1 / this.frustum[n].distance();
      (this.frustum[n].multiply(r), (this.frustum[n].constant *= r));
    }
  }
  frustumIntersectsMesh(e) {
    if (
      !e.geometry.attributes.position ||
      ((!e.geometry.bounds || e.geometry.bounds.radius === 1 / 0) &&
        e.geometry.computeBoundingSphere(),
      !e.geometry.bounds)
    )
      return !0;
    const n = rA;
    (n.copy(e.geometry.bounds.center), n.applyMatrix4(e.worldMatrix));
    const r = e.geometry.bounds.radius * e.worldMatrix.getMaxScaleOnAxis();
    return this.frustumIntersectsSphere(n, r);
  }
  frustumIntersectsSphere(e, n) {
    const r = sA;
    for (let i = 0; i < 6; i++) {
      const s = this.frustum[i];
      if (r.copy(s).dot(e) + s.constant < -n) return !1;
    }
    return !0;
  }
}
function Rn(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return t;
}
function Cv(t, e) {
  ((t.prototype = Object.create(e.prototype)),
    (t.prototype.constructor = t),
    (t.__proto__ = e));
}
var Nt = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: { lineHeight: "" },
};
var kr = { duration: 0.5, overwrite: !1, delay: 0 };
var Fu;
var bt;
var nt;
var Xt = 1e8;
var Be = 1 / Xt;
var Tc = Math.PI * 2;
var uA = Tc / 4;
var fA = 0;
var Av = Math.sqrt;
var hA = Math.cos;
var dA = Math.sin;
var st = function (e) {
  return typeof e == "string";
};
var Ze = function (e) {
  return typeof e == "function";
};
var Bn = function (e) {
  return typeof e == "number";
};
var ku = function (e) {
  return typeof e > "u";
};
var Tn = function (e) {
  return typeof e == "object";
};
var zt = function (e) {
  return e !== !1;
};
var zv = function () {
  return typeof window < "u";
};
var mo = function (e) {
  return Ze(e) || st(e);
};
var Rv =
  (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {};
var _t = Array.isArray;
var Ec = /(?:-?\.?\d|\.)+/gi;
var Ov = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g;
var hr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g;
var gl = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi;
var Mv = /[+-]=-?[.\d]+/;
var Fv = /[^,'"\[\]\s]+/gi;
var pA = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i;
var Xe;
var Wt;
var Cc;
var Lu;
var Bt = {};
var Ho = {};
var kv;
var Lv = function (e) {
  return (Ho = Xi(e, Bt)) && Vt;
};
var Iu = function (e, n) {
  return console.warn(
    "Invalid property",
    e,
    "set to",
    n,
    "Missing plugin? gsap.registerPlugin()",
  );
};
var jo = function (e, n) {
  return !n && console.warn(e);
};
var Iv = function (e, n) {
  return (e && (Bt[e] = n) && Ho && (Ho[e] = n)) || Bt;
};
var Os = function () {
  return 0;
};
var mA = { suppressEvents: !0, isStart: !0, kill: !1 };
var yo = { suppressEvents: !0, kill: !1 };
var gA = { suppressEvents: !0 };
var Du = {};
var fi = [];
var Ac = {};
var Dv;
var Lt = {};
var vl = {};
var Od = 30;
var xo = [];
var Nu = "";
var Uu = function (e) {
  var n = e[0],
    r,
    i;
  if ((Tn(n) || Ze(n) || (e = [e]), !(r = (n._gsap || {}).harness))) {
    for (i = xo.length; i-- && !xo[i].targetTest(n); );
    r = xo[i];
  }
  for (i = e.length; i--; )
    (e[i] && (e[i]._gsap || (e[i]._gsap = new s1(e[i], r)))) || e.splice(i, 1);
  return e;
};
var Hi = function (e) {
  return e._gsap || Uu(Yt(e))[0]._gsap;
};
var Nv = function (e, n, r) {
  return (r = e[n]) && Ze(r)
    ? e[n]()
    : (ku(r) && e.getAttribute && e.getAttribute(n)) || r;
};
var Rt = function (e, n) {
  return (e = e.split(",")).forEach(n) || e;
};
var Je = function (e) {
  return Math.round(e * 1e5) / 1e5 || 0;
};
var ct = function (e) {
  return Math.round(e * 1e7) / 1e7 || 0;
};
var xr = function (e, n) {
  var r = n.charAt(0),
    i = parseFloat(n.substr(2));
  return (
    (e = parseFloat(e)),
    r === "+" ? e + i : r === "-" ? e - i : r === "*" ? e * i : e / i
  );
};
var vA = function (e, n) {
  for (var r = n.length, i = 0; e.indexOf(n[i]) < 0 && ++i < r; );
  return i < r;
};
var Wo = function () {
  var e = fi.length,
    n = fi.slice(0),
    r,
    i;
  for (Ac = {}, fi.length = 0, r = 0; r < e; r++)
    ((i = n[r]),
      i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0));
};
var Uv = function (e, n, r, i) {
  (fi.length && !bt && Wo(),
    e.render(n, r, i || (bt && n < 0 && (e._initted || e._startAt))),
    fi.length && !bt && Wo());
};
var Bv = function (e) {
  var n = parseFloat(e);
  return (n || n === 0) && (e + "").match(Fv).length < 2
    ? n
    : st(e)
      ? e.trim()
      : e;
};
var Vv = function (e) {
  return e;
};
var en = function (e, n) {
  for (var r in n) r in e || (e[r] = n[r]);
  return e;
};
var bA = function (e) {
  return function (n, r) {
    for (var i in r)
      i in n || (i === "duration" && e) || i === "ease" || (n[i] = r[i]);
  };
};
var Xi = function (e, n) {
  for (var r in n) e[r] = n[r];
  return e;
};
var Md = function t(e, n) {
  for (var r in n)
    r !== "__proto__" &&
      r !== "constructor" &&
      r !== "prototype" &&
      (e[r] = Tn(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r]);
  return e;
};
var Go = function (e, n) {
  var r = {},
    i;
  for (i in e) i in n || (r[i] = e[i]);
  return r;
};
var gs = function (e) {
  var n = e.parent || Xe,
    r = e.keyframes ? bA(_t(e.keyframes)) : en;
  if (zt(e.inherit))
    for (; n; ) (r(e, n.vars.defaults), (n = n.parent || n._dp));
  return e;
};
var _A = function (e, n) {
  for (var r = e.length, i = r === n.length; i && r-- && e[r] === n[r]; );
  return r < 0;
};
var Hv = function (e, n, r, i, s) {
  (r === void 0 && (r = "_first"), i === void 0 && (i = "_last"));
  var o = e[i],
    a;
  if (s) for (a = n[s]; o && o[s] > a; ) o = o._prev;
  return (
    o ? ((n._next = o._next), (o._next = n)) : ((n._next = e[r]), (e[r] = n)),
    n._next ? (n._next._prev = n) : (e[i] = n),
    (n._prev = o),
    (n.parent = n._dp = e),
    n
  );
};
var Ca = function (e, n, r, i) {
  (r === void 0 && (r = "_first"), i === void 0 && (i = "_last"));
  var s = n._prev,
    o = n._next;
  (s ? (s._next = o) : e[r] === n && (e[r] = o),
    o ? (o._prev = s) : e[i] === n && (e[i] = s),
    (n._next = n._prev = n.parent = null));
};
var bi = function (e, n) {
  (e.parent && (!n || e.parent.autoRemoveChildren) && e.parent.remove(e),
    (e._act = 0));
};
var ji = function (e, n) {
  if (e && (!n || n._end > e._dur || n._start < 0))
    for (var r = e; r; ) ((r._dirty = 1), (r = r.parent));
  return e;
};
var yA = function (e) {
  for (var n = e.parent; n && n.parent; )
    ((n._dirty = 1), n.totalDuration(), (n = n.parent));
  return e;
};
var zc = function (e, n, r, i) {
  return (
    e._startAt &&
    (bt
      ? e._startAt.revert(yo)
      : (e.vars.immediateRender && !e.vars.autoRevert) ||
        e._startAt.render(n, !0, i))
  );
};
var xA = function t(e) {
  return !e || (e._ts && t(e.parent));
};
var Fd = function (e) {
  return e._repeat ? Lr(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
};
var Lr = function (e, n) {
  var r = Math.floor((e /= n));
  return e && r === e ? r - 1 : r;
};
var qo = function (e, n) {
  return (
    (e - n._start) * n._ts +
    (n._ts >= 0 ? 0 : n._dirty ? n.totalDuration() : n._tDur)
  );
};
var Aa = function (e) {
  return (e._end = ct(
    e._start + (e._tDur / Math.abs(e._ts || e._rts || Be) || 0),
  ));
};
var za = function (e, n) {
  var r = e._dp;
  return (
    r &&
      r.smoothChildTiming &&
      e._ts &&
      ((e._start = ct(
        r._time -
          (e._ts > 0
            ? n / e._ts
            : ((e._dirty ? e.totalDuration() : e._tDur) - n) / -e._ts),
      )),
      Aa(e),
      r._dirty || ji(r, e)),
    e
  );
};
var jv = function (e, n) {
  var r;
  if (
    ((n._time || (n._initted && !n._dur)) &&
      ((r = qo(e.rawTime(), n)),
      (!n._dur || Ys(0, n.totalDuration(), r) - n._tTime > Be) &&
        n.render(r, !0)),
    ji(e, n)._dp && e._initted && e._time >= e._dur && e._ts)
  ) {
    if (e._dur < e.duration())
      for (r = e; r._dp; )
        (r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp));
    e._zTime = -Be;
  }
};
var _n = function (e, n, r, i) {
  return (
    n.parent && bi(n),
    (n._start = ct(
      (Bn(r) ? r : r || e !== Xe ? jt(e, r, n) : e._time) + n._delay,
    )),
    (n._end = ct(
      n._start + (n.totalDuration() / Math.abs(n.timeScale()) || 0),
    )),
    Hv(e, n, "_first", "_last", e._sort ? "_start" : 0),
    Rc(n) || (e._recent = n),
    i || jv(e, n),
    e._ts < 0 && za(e, e._tTime),
    e
  );
};
var Wv = function (e, n) {
  return (
    (Bt.ScrollTrigger || Iu("scrollTrigger", n)) &&
    Bt.ScrollTrigger.create(n, e)
  );
};
var Gv = function (e, n, r, i, s) {
  if ((Vu(e, n, s), !e._initted)) return 1;
  if (
    !r &&
    e._pt &&
    !bt &&
    ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
    Dv !== Dt.frame
  )
    return (fi.push(e), (e._lazy = [s, i]), 1);
};
var wA = function t(e) {
  var n = e.parent;
  return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n));
};
var Rc = function (e) {
  var n = e.data;
  return n === "isFromStart" || n === "isStart";
};
var SA = function (e, n, r, i) {
  var s = e.ratio,
    o =
      n < 0 ||
      (!n &&
        ((!e._start && wA(e) && !(!e._initted && Rc(e))) ||
          ((e._ts < 0 || e._dp._ts < 0) && !Rc(e))))
        ? 0
        : 1,
    a = e._rDelay,
    l = 0,
    c,
    u,
    h;
  if (
    (a &&
      e._repeat &&
      ((l = Ys(0, e._tDur, n)),
      (u = Lr(l, a)),
      e._yoyo && u & 1 && (o = 1 - o),
      u !== Lr(e._tTime, a) &&
        ((s = 1 - o), e.vars.repeatRefresh && e._initted && e.invalidate())),
    o !== s || bt || i || e._zTime === Be || (!n && e._zTime))
  ) {
    if (!e._initted && Gv(e, n, i, r, l)) return;
    for (
      h = e._zTime,
        e._zTime = n || (r ? Be : 0),
        r || (r = n && !h),
        e.ratio = o,
        e._from && (o = 1 - o),
        e._time = 0,
        e._tTime = l,
        c = e._pt;
      c;

    )
      (c.r(o, c.d), (c = c._next));
    (n < 0 && zc(e, n, r, !0),
      e._onUpdate && !r && Kt(e, "onUpdate"),
      l && e._repeat && !r && e.parent && Kt(e, "onRepeat"),
      (n >= e._tDur || n < 0) &&
        e.ratio === o &&
        (o && bi(e, 1),
        !r &&
          !bt &&
          (Kt(e, o ? "onComplete" : "onReverseComplete", !0),
          e._prom && e._prom())));
  } else e._zTime || (e._zTime = n);
};
var PA = function (e, n, r) {
  var i;
  if (r > n)
    for (i = e._first; i && i._start <= r; ) {
      if (i.data === "isPause" && i._start > n) return i;
      i = i._next;
    }
  else
    for (i = e._last; i && i._start >= r; ) {
      if (i.data === "isPause" && i._start < n) return i;
      i = i._prev;
    }
};
var Ir = function (e, n, r, i) {
  var s = e._repeat,
    o = ct(n) || 0,
    a = e._tTime / e._tDur;
  return (
    a && !i && (e._time *= o / e._dur),
    (e._dur = o),
    (e._tDur = s ? (s < 0 ? 1e10 : ct(o * (s + 1) + e._rDelay * s)) : o),
    a > 0 && !i && za(e, (e._tTime = e._tDur * a)),
    e.parent && Aa(e),
    r || ji(e.parent, e),
    e
  );
};
var kd = function (e) {
  return e instanceof At ? ji(e) : Ir(e, e._dur);
};
var TA = { _start: 0, endTime: Os, totalDuration: Os };
var jt = function t(e, n, r) {
  var i = e.labels,
    s = e._recent || TA,
    o = e.duration() >= Xt ? s.endTime(!1) : e._dur,
    a,
    l,
    c;
  return st(n) && (isNaN(n) || n in i)
    ? ((l = n.charAt(0)),
      (c = n.substr(-1) === "%"),
      (a = n.indexOf("=")),
      l === "<" || l === ">"
        ? (a >= 0 && (n = n.replace(/=/, "")),
          (l === "<" ? s._start : s.endTime(s._repeat >= 0)) +
            (parseFloat(n.substr(1)) || 0) *
              (c ? (a < 0 ? s : r).totalDuration() / 100 : 1))
        : a < 0
          ? (n in i || (i[n] = o), i[n])
          : ((l = parseFloat(n.charAt(a - 1) + n.substr(a + 1))),
            c && r && (l = (l / 100) * (_t(r) ? r[0] : r).totalDuration()),
            a > 1 ? t(e, n.substr(0, a - 1), r) + l : o + l))
    : n == null
      ? o
      : +n;
};
var vs = function (e, n, r) {
  var i = Bn(n[1]),
    s = (i ? 2 : 1) + (e < 2 ? 0 : 1),
    o = n[s],
    a,
    l;
  if ((i && (o.duration = n[1]), (o.parent = r), e)) {
    for (a = o, l = r; l && !("immediateRender" in a); )
      ((a = l.vars.defaults || {}), (l = zt(l.vars.inherit) && l.parent));
    ((o.immediateRender = zt(a.immediateRender)),
      e < 2 ? (o.runBackwards = 1) : (o.startAt = n[s - 1]));
  }
  return new rt(n[0], o, n[s + 1]);
};
var wi = function (e, n) {
  return e || e === 0 ? n(e) : n;
};
var Ys = function (e, n, r) {
  return r < e ? e : r > n ? n : r;
};
var vt = function (e, n) {
  return !st(e) || !(n = pA.exec(e)) ? "" : n[1];
};
var EA = function (e, n, r) {
  return wi(r, function (i) {
    return Ys(e, n, i);
  });
};
var Oc = [].slice;
var qv = function (e, n) {
  return (
    e &&
    Tn(e) &&
    "length" in e &&
    ((!n && !e.length) || (e.length - 1 in e && Tn(e[0]))) &&
    !e.nodeType &&
    e !== Wt
  );
};
var CA = function (e, n, r) {
  return (
    r === void 0 && (r = []),
    e.forEach(function (i) {
      var s;
      return (st(i) && !n) || qv(i, 1)
        ? (s = r).push.apply(s, Yt(i))
        : r.push(i);
    }) || r
  );
};
var Yt = function (e, n, r) {
  return nt && !n && nt.selector
    ? nt.selector(e)
    : st(e) && !r && (Cc || !Dr())
      ? Oc.call((n || Lu).querySelectorAll(e), 0)
      : _t(e)
        ? CA(e, r)
        : qv(e)
          ? Oc.call(e, 0)
          : e
            ? [e]
            : [];
};
var Mc = function (e) {
  return (
    (e = Yt(e)[0] || jo("Invalid scope") || {}),
    function (n) {
      var r = e.current || e.nativeElement || e;
      return Yt(
        n,
        r.querySelectorAll
          ? r
          : r === e
            ? jo("Invalid scope") || Lu.createElement("div")
            : e,
      );
    }
  );
};
var $v = function (e) {
  return e.sort(function () {
    return 0.5 - Math.random();
  });
};
var Xv = function (e) {
  if (Ze(e)) return e;
  var n = Tn(e) ? e : { each: e },
    r = Wi(n.ease),
    i = n.from || 0,
    s = parseFloat(n.base) || 0,
    o = {},
    a = i > 0 && i < 1,
    l = isNaN(i) || a,
    c = n.axis,
    u = i,
    h = i;
  return (
    st(i)
      ? (u = h = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
      : !a && l && ((u = i[0]), (h = i[1])),
    function (f, d, p) {
      var m = (p || n).length,
        g = o[m],
        x,
        b,
        _,
        v,
        y,
        w,
        P,
        T,
        R;
      if (!g) {
        if (((R = n.grid === "auto" ? 0 : (n.grid || [1, Xt])[1]), !R)) {
          for (
            P = -Xt;
            P < (P = p[R++].getBoundingClientRect().left) && R < m;

          );
          R--;
        }
        for (
          g = o[m] = [],
            x = l ? Math.min(R, m) * u - 0.5 : i % R,
            b = R === Xt ? 0 : l ? (m * h) / R - 0.5 : (i / R) | 0,
            P = 0,
            T = Xt,
            w = 0;
          w < m;
          w++
        )
          ((_ = (w % R) - x),
            (v = b - ((w / R) | 0)),
            (g[w] = y = c ? Math.abs(c === "y" ? v : _) : Av(_ * _ + v * v)),
            y > P && (P = y),
            y < T && (T = y));
        (i === "random" && $v(g),
          (g.max = P - T),
          (g.min = T),
          (g.v = m =
            (parseFloat(n.amount) ||
              parseFloat(n.each) *
                (R > m
                  ? m - 1
                  : c
                    ? c === "y"
                      ? m / R
                      : R
                    : Math.max(R, m / R)) ||
              0) * (i === "edges" ? -1 : 1)),
          (g.b = m < 0 ? s - m : s),
          (g.u = vt(n.amount || n.each) || 0),
          (r = r && m < 0 ? n1(r) : r));
      }
      return (
        (m = (g[f] - g.min) / g.max || 0),
        ct(g.b + (r ? r(m) : m) * g.v) + g.u
      );
    }
  );
};
var Fc = function (e) {
  var n = Math.pow(10, ((e + "").split(".")[1] || "").length);
  return function (r) {
    var i = ct(Math.round(parseFloat(r) / e) * e * n);
    return (i - (i % 1)) / n + (Bn(r) ? 0 : vt(r));
  };
};
var Yv = function (e, n) {
  var r = _t(e),
    i,
    s;
  return (
    !r &&
      Tn(e) &&
      ((i = r = e.radius || Xt),
      e.values
        ? ((e = Yt(e.values)), (s = !Bn(e[0])) && (i *= i))
        : (e = Fc(e.increment))),
    wi(
      n,
      r
        ? Ze(e)
          ? function (o) {
              return ((s = e(o)), Math.abs(s - o) <= i ? s : o);
            }
          : function (o) {
              for (
                var a = parseFloat(s ? o.x : o),
                  l = parseFloat(s ? o.y : 0),
                  c = Xt,
                  u = 0,
                  h = e.length,
                  f,
                  d;
                h--;

              )
                (s
                  ? ((f = e[h].x - a), (d = e[h].y - l), (f = f * f + d * d))
                  : (f = Math.abs(e[h] - a)),
                  f < c && ((c = f), (u = h)));
              return (
                (u = !i || c <= i ? e[u] : o),
                s || u === o || Bn(o) ? u : u + vt(o)
              );
            }
        : Fc(e),
    )
  );
};
var Kv = function (e, n, r, i) {
  return wi(_t(e) ? !n : r === !0 ? !!(r = 0) : !i, function () {
    return _t(e)
      ? e[~~(Math.random() * e.length)]
      : (r = r || 1e-5) &&
          (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
          Math.floor(
            Math.round((e - r / 2 + Math.random() * (n - e + r * 0.99)) / r) *
              r *
              i,
          ) / i;
  });
};
var AA = function () {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  return function (i) {
    return n.reduce(function (s, o) {
      return o(s);
    }, i);
  };
};
var zA = function (e, n) {
  return function (r) {
    return e(parseFloat(r)) + (n || vt(r));
  };
};
var RA = function (e, n, r) {
  return Zv(e, n, 0, 1, r);
};
var Qv = function (e, n, r) {
  return wi(r, function (i) {
    return e[~~n(i)];
  });
};
var OA = function t(e, n, r) {
  var i = n - e;
  return _t(e)
    ? Qv(e, t(0, e.length), n)
    : wi(r, function (s) {
        return ((i + ((s - e) % i)) % i) + e;
      });
};
var MA = function t(e, n, r) {
  var i = n - e,
    s = i * 2;
  return _t(e)
    ? Qv(e, t(0, e.length - 1), n)
    : wi(r, function (o) {
        return ((o = (s + ((o - e) % s)) % s || 0), e + (o > i ? s - o : o));
      });
};
var Ms = function (e) {
  for (var n = 0, r = "", i, s, o, a; ~(i = e.indexOf("random(", n)); )
    ((o = e.indexOf(")", i)),
      (a = e.charAt(i + 7) === "["),
      (s = e.substr(i + 7, o - i - 7).match(a ? Fv : Ec)),
      (r +=
        e.substr(n, i - n) + Kv(a ? s : +s[0], a ? 0 : +s[1], +s[2] || 1e-5)),
      (n = o + 1));
  return r + e.substr(n, e.length - n);
};
var Zv = function (e, n, r, i, s) {
  var o = n - e,
    a = i - r;
  return wi(s, function (l) {
    return r + (((l - e) / o) * a || 0);
  });
};
var FA = function t(e, n, r, i) {
  var s = isNaN(e + n)
    ? 0
    : function (d) {
        return (1 - d) * e + d * n;
      };
  if (!s) {
    var o = st(e),
      a = {},
      l,
      c,
      u,
      h,
      f;
    if ((r === !0 && (i = 1) && (r = null), o))
      ((e = { p: e }), (n = { p: n }));
    else if (_t(e) && !_t(n)) {
      for (u = [], h = e.length, f = h - 2, c = 1; c < h; c++)
        u.push(t(e[c - 1], e[c]));
      (h--,
        (s = function (p) {
          p *= h;
          var m = Math.min(f, ~~p);
          return u[m](p - m);
        }),
        (r = n));
    } else i || (e = Xi(_t(e) ? [] : {}, e));
    if (!u) {
      for (l in n) Bu.call(a, e, l, "get", n[l]);
      s = function (p) {
        return Wu(p, a) || (o ? e.p : e);
      };
    }
  }
  return wi(r, s);
};
var Ld = function (e, n, r) {
  var i = e.labels,
    s = Xt,
    o,
    a,
    l;
  for (o in i)
    ((a = i[o] - n),
      a < 0 == !!r && a && s > (a = Math.abs(a)) && ((l = o), (s = a)));
  return l;
};
var Kt = function (e, n, r) {
  var i = e.vars,
    s = i[n],
    o = nt,
    a = e._ctx,
    l,
    c,
    u;
  if (!!s)
    return (
      (l = i[n + "Params"]),
      (c = i.callbackScope || e),
      r && fi.length && Wo(),
      a && (nt = a),
      (u = l ? s.apply(c, l) : s.call(c)),
      (nt = o),
      u
    );
};
var is = function (e) {
  return (
    bi(e),
    e.scrollTrigger && e.scrollTrigger.kill(!!bt),
    e.progress() < 1 && Kt(e, "onInterrupt"),
    e
  );
};
var dr;
var kA = function (e) {
  e = (!e.name && e.default) || e;
  var n = e.name,
    r = Ze(e),
    i =
      n && !r && e.init
        ? function () {
            this._props = [];
          }
        : e,
    s = { init: Os, render: Wu, add: Bu, kill: KA, modifier: YA, rawVars: 0 },
    o = { targetTest: 0, get: 0, getSetter: ju, aliases: {}, register: 0 };
  if ((Dr(), e !== i)) {
    if (Lt[n]) return;
    (en(i, en(Go(e, s), o)),
      Xi(i.prototype, Xi(s, Go(e, o))),
      (Lt[(i.prop = n)] = i),
      e.targetTest && (xo.push(i), (Du[n] = 1)),
      (n =
        (n === "css" ? "CSS" : n.charAt(0).toUpperCase() + n.substr(1)) +
        "Plugin"));
  }
  (Iv(n, i), e.register && e.register(Vt, i, Ot));
};
var Ue = 255;
var rs = {
  aqua: [0, Ue, Ue],
  lime: [0, Ue, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, Ue],
  navy: [0, 0, 128],
  white: [Ue, Ue, Ue],
  olive: [128, 128, 0],
  yellow: [Ue, Ue, 0],
  orange: [Ue, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [Ue, 0, 0],
  pink: [Ue, 192, 203],
  cyan: [0, Ue, Ue],
  transparent: [Ue, Ue, Ue, 0],
};
var bl = function (e, n, r) {
  return (
    (e += e < 0 ? 1 : e > 1 ? -1 : 0),
    ((e * 6 < 1
      ? n + (r - n) * e * 6
      : e < 0.5
        ? r
        : e * 3 < 2
          ? n + (r - n) * (2 / 3 - e) * 6
          : n) *
      Ue +
      0.5) |
      0
  );
};
var Jv = function (e, n, r) {
  var i = e ? (Bn(e) ? [e >> 16, (e >> 8) & Ue, e & Ue] : 0) : rs.black,
    s,
    o,
    a,
    l,
    c,
    u,
    h,
    f,
    d,
    p;
  if (!i) {
    if ((e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), rs[e]))
      i = rs[e];
    else if (e.charAt(0) === "#") {
      if (
        (e.length < 6 &&
          ((s = e.charAt(1)),
          (o = e.charAt(2)),
          (a = e.charAt(3)),
          (e =
            "#" +
            s +
            s +
            o +
            o +
            a +
            a +
            (e.length === 5 ? e.charAt(4) + e.charAt(4) : ""))),
        e.length === 9)
      )
        return (
          (i = parseInt(e.substr(1, 6), 16)),
          [i >> 16, (i >> 8) & Ue, i & Ue, parseInt(e.substr(7), 16) / 255]
        );
      ((e = parseInt(e.substr(1), 16)), (i = [e >> 16, (e >> 8) & Ue, e & Ue]));
    } else if (e.substr(0, 3) === "hsl") {
      if (((i = p = e.match(Ec)), !n))
        ((l = (+i[0] % 360) / 360),
          (c = +i[1] / 100),
          (u = +i[2] / 100),
          (o = u <= 0.5 ? u * (c + 1) : u + c - u * c),
          (s = u * 2 - o),
          i.length > 3 && (i[3] *= 1),
          (i[0] = bl(l + 1 / 3, s, o)),
          (i[1] = bl(l, s, o)),
          (i[2] = bl(l - 1 / 3, s, o)));
      else if (~e.indexOf("="))
        return ((i = e.match(Ov)), r && i.length < 4 && (i[3] = 1), i);
    } else i = e.match(Ec) || rs.transparent;
    i = i.map(Number);
  }
  return (
    n &&
      !p &&
      ((s = i[0] / Ue),
      (o = i[1] / Ue),
      (a = i[2] / Ue),
      (h = Math.max(s, o, a)),
      (f = Math.min(s, o, a)),
      (u = (h + f) / 2),
      h === f
        ? (l = c = 0)
        : ((d = h - f),
          (c = u > 0.5 ? d / (2 - h - f) : d / (h + f)),
          (l =
            h === s
              ? (o - a) / d + (o < a ? 6 : 0)
              : h === o
                ? (a - s) / d + 2
                : (s - o) / d + 4),
          (l *= 60)),
      (i[0] = ~~(l + 0.5)),
      (i[1] = ~~(c * 100 + 0.5)),
      (i[2] = ~~(u * 100 + 0.5))),
    r && i.length < 4 && (i[3] = 1),
    i
  );
};
var e1 = function (e) {
  var n = [],
    r = [],
    i = -1;
  return (
    e.split(hi).forEach(function (s) {
      var o = s.match(hr) || [];
      (n.push.apply(n, o), r.push((i += o.length + 1)));
    }),
    (n.c = r),
    n
  );
};
var Id = function (e, n, r) {
  var i = "",
    s = (e + i).match(hi),
    o = n ? "hsla(" : "rgba(",
    a = 0,
    l,
    c,
    u,
    h;
  if (!s) return e;
  if (
    ((s = s.map(function (f) {
      return (
        (f = Jv(f, n, 1)) &&
        o +
          (n ? f[0] + "," + f[1] + "%," + f[2] + "%," + f[3] : f.join(",")) +
          ")"
      );
    })),
    r && ((u = e1(e)), (l = r.c), l.join(i) !== u.c.join(i)))
  )
    for (c = e.replace(hi, "1").split(hr), h = c.length - 1; a < h; a++)
      i +=
        c[a] +
        (~l.indexOf(a)
          ? s.shift() || o + "0,0,0,0)"
          : (u.length ? u : s.length ? s : r).shift());
  if (!c) for (c = e.split(hi), h = c.length - 1; a < h; a++) i += c[a] + s[a];
  return i + c[h];
};
var hi = (function () {
  var t =
      "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
    e;
  for (e in rs) t += "|" + e + "\\b";
  return new RegExp(t + ")", "gi");
})();
var LA = /hsl[a]?\(/;
var t1 = function (e) {
  var n = e.join(" "),
    r;
  if (((hi.lastIndex = 0), hi.test(n)))
    return (
      (r = LA.test(n)),
      (e[1] = Id(e[1], r)),
      (e[0] = Id(e[0], r, e1(e[1]))),
      !0
    );
};
var Fs;
var Dt = (function () {
  var t = Date.now,
    e = 500,
    n = 33,
    r = t(),
    i = r,
    s = 1e3 / 240,
    o = s,
    a = [],
    l,
    c,
    u,
    h,
    f,
    d,
    p = function m(g) {
      var x = t() - i,
        b = g === !0,
        _,
        v,
        y,
        w;
      if (
        (x > e && (r += x - n),
        (i += x),
        (y = i - r),
        (_ = y - o),
        (_ > 0 || b) &&
          ((w = ++h.frame),
          (f = y - h.time * 1e3),
          (h.time = y = y / 1e3),
          (o += _ + (_ >= s ? 4 : s - _)),
          (v = 1)),
        b || (l = c(m)),
        v)
      )
        for (d = 0; d < a.length; d++) a[d](y, f, w, g);
    };
  return (
    (h = {
      time: 0,
      frame: 0,
      tick: function () {
        p(!0);
      },
      deltaRatio: function (g) {
        return f / (1e3 / (g || 60));
      },
      wake: function () {
        kv &&
          (!Cc &&
            zv() &&
            ((Wt = Cc = window),
            (Lu = Wt.document || {}),
            (Bt.gsap = Vt),
            (Wt.gsapVersions || (Wt.gsapVersions = [])).push(Vt.version),
            Lv(Ho || Wt.GreenSockGlobals || (!Wt.gsap && Wt) || {}),
            (u = Wt.requestAnimationFrame)),
          l && h.sleep(),
          (c =
            u ||
            function (g) {
              return setTimeout(g, (o - h.time * 1e3 + 1) | 0);
            }),
          (Fs = 1),
          p(2));
      },
      sleep: function () {
        ((u ? Wt.cancelAnimationFrame : clearTimeout)(l), (Fs = 0), (c = Os));
      },
      lagSmoothing: function (g, x) {
        ((e = g || 1 / 0), (n = Math.min(x || 33, e)));
      },
      fps: function (g) {
        ((s = 1e3 / (g || 240)), (o = h.time * 1e3 + s));
      },
      add: function (g, x, b) {
        var _ = x
          ? function (v, y, w, P) {
              (g(v, y, w, P), h.remove(_));
            }
          : g;
        return (h.remove(g), a[b ? "unshift" : "push"](_), Dr(), _);
      },
      remove: function (g, x) {
        ~(x = a.indexOf(g)) && a.splice(x, 1) && d >= x && d--;
      },
      _listeners: a,
    }),
    h
  );
})();
var Dr = function () {
  return !Fs && Dt.wake();
};
var Te = {};
var IA = /^[\d.\-M][\d.\-,\s]/;
var DA = /["']/g;
var NA = function (e) {
  for (
    var n = {},
      r = e.substr(1, e.length - 3).split(":"),
      i = r[0],
      s = 1,
      o = r.length,
      a,
      l,
      c;
    s < o;
    s++
  )
    ((l = r[s]),
      (a = s !== o - 1 ? l.lastIndexOf(",") : l.length),
      (c = l.substr(0, a)),
      (n[i] = isNaN(c) ? c.replace(DA, "").trim() : +c),
      (i = l.substr(a + 1).trim()));
  return n;
};
var UA = function (e) {
  var n = e.indexOf("(") + 1,
    r = e.indexOf(")"),
    i = e.indexOf("(", n);
  return e.substring(n, ~i && i < r ? e.indexOf(")", r + 1) : r);
};
var BA = function (e) {
  var n = (e + "").split("("),
    r = Te[n[0]];
  return r && n.length > 1 && r.config
    ? r.config.apply(
        null,
        ~e.indexOf("{") ? [NA(n[1])] : UA(e).split(",").map(Bv),
      )
    : Te._CE && IA.test(e)
      ? Te._CE("", e)
      : r;
};
var n1 = function (e) {
  return function (n) {
    return 1 - e(1 - n);
  };
};
var i1 = function t(e, n) {
  for (var r = e._first, i; r; )
    (r instanceof At
      ? t(r, n)
      : r.vars.yoyoEase &&
        (!r._yoyo || !r._repeat) &&
        r._yoyo !== n &&
        (r.timeline
          ? t(r.timeline, n)
          : ((i = r._ease),
            (r._ease = r._yEase),
            (r._yEase = i),
            (r._yoyo = n))),
      (r = r._next));
};
var Wi = function (e, n) {
  return (e && (Ze(e) ? e : Te[e] || BA(e))) || n;
};
var tr = function (e, n, r, i) {
  (r === void 0 &&
    (r = function (l) {
      return 1 - n(1 - l);
    }),
    i === void 0 &&
      (i = function (l) {
        return l < 0.5 ? n(l * 2) / 2 : 1 - n((1 - l) * 2) / 2;
      }));
  var s = { easeIn: n, easeOut: r, easeInOut: i },
    o;
  return (
    Rt(e, function (a) {
      ((Te[a] = Bt[a] = s), (Te[(o = a.toLowerCase())] = r));
      for (var l in s)
        Te[o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] =
          Te[a + "." + l] = s[l];
    }),
    s
  );
};
var r1 = function (e) {
  return function (n) {
    return n < 0.5 ? (1 - e(1 - n * 2)) / 2 : 0.5 + e((n - 0.5) * 2) / 2;
  };
};
var _l = function t(e, n, r) {
  var i = n >= 1 ? n : 1,
    s = (r || (e ? 0.3 : 0.45)) / (n < 1 ? n : 1),
    o = (s / Tc) * (Math.asin(1 / i) || 0),
    a = function (u) {
      return u === 1 ? 1 : i * Math.pow(2, -10 * u) * dA((u - o) * s) + 1;
    },
    l =
      e === "out"
        ? a
        : e === "in"
          ? function (c) {
              return 1 - a(1 - c);
            }
          : r1(a);
  return (
    (s = Tc / s),
    (l.config = function (c, u) {
      return t(e, c, u);
    }),
    l
  );
};
var yl = function t(e, n) {
  n === void 0 && (n = 1.70158);
  var r = function (o) {
      return o ? --o * o * ((n + 1) * o + n) + 1 : 0;
    },
    i =
      e === "out"
        ? r
        : e === "in"
          ? function (s) {
              return 1 - r(1 - s);
            }
          : r1(r);
  return (
    (i.config = function (s) {
      return t(e, s);
    }),
    i
  );
};
Rt("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
  var n = e < 5 ? e + 1 : e;
  tr(
    t + ",Power" + (n - 1),
    e
      ? function (r) {
          return Math.pow(r, n);
        }
      : function (r) {
          return r;
        },
    function (r) {
      return 1 - Math.pow(1 - r, n);
    },
    function (r) {
      return r < 0.5
        ? Math.pow(r * 2, n) / 2
        : 1 - Math.pow((1 - r) * 2, n) / 2;
    },
  );
});
Te.Linear.easeNone = Te.none = Te.Linear.easeIn;
tr("Elastic", _l("in"), _l("out"), _l());
(function (t, e) {
  var n = 1 / e,
    r = 2 * n,
    i = 2.5 * n,
    s = function (a) {
      return a < n
        ? t * a * a
        : a < r
          ? t * Math.pow(a - 1.5 / e, 2) + 0.75
          : a < i
            ? t * (a -= 2.25 / e) * a + 0.9375
            : t * Math.pow(a - 2.625 / e, 2) + 0.984375;
    };
  tr(
    "Bounce",
    function (o) {
      return 1 - s(1 - o);
    },
    s,
  );
})(7.5625, 2.75);
tr("Expo", function (t) {
  return t ? Math.pow(2, 10 * (t - 1)) : 0;
});
tr("Circ", function (t) {
  return -(Av(1 - t * t) - 1);
});
tr("Sine", function (t) {
  return t === 1 ? 1 : -hA(t * uA) + 1;
});
tr("Back", yl("in"), yl("out"), yl());
Te.SteppedEase =
  Te.steps =
  Bt.SteppedEase =
    {
      config: function (e, n) {
        e === void 0 && (e = 1);
        var r = 1 / e,
          i = e + (n ? 0 : 1),
          s = n ? 1 : 0,
          o = 1 - Be;
        return function (a) {
          return (((i * Ys(0, o, a)) | 0) + s) * r;
        };
      },
    };
kr.ease = Te["quad.out"];
Rt(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (t) {
    return (Nu += t + "," + t + "Params,");
  },
);
var s1 = function (e, n) {
  ((this.id = fA++),
    (e._gsap = this),
    (this.target = e),
    (this.harness = n),
    (this.get = n ? n.get : Nv),
    (this.set = n ? n.getSetter : ju));
};
var Nr = (function () {
  function t(n) {
    ((this.vars = n),
      (this._delay = +n.delay || 0),
      (this._repeat = n.repeat === 1 / 0 ? -2 : n.repeat || 0) &&
        ((this._rDelay = n.repeatDelay || 0),
        (this._yoyo = !!n.yoyo || !!n.yoyoEase)),
      (this._ts = 1),
      Ir(this, +n.duration, 1, 1),
      (this.data = n.data),
      nt && ((this._ctx = nt), nt.data.push(this)),
      Fs || Dt.wake());
  }
  var e = t.prototype;
  return (
    (e.delay = function (r) {
      return r || r === 0
        ? (this.parent &&
            this.parent.smoothChildTiming &&
            this.startTime(this._start + r - this._delay),
          (this._delay = r),
          this)
        : this._delay;
    }),
    (e.duration = function (r) {
      return arguments.length
        ? this.totalDuration(
            this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r,
          )
        : this.totalDuration() && this._dur;
    }),
    (e.totalDuration = function (r) {
      return arguments.length
        ? ((this._dirty = 0),
          Ir(
            this,
            this._repeat < 0
              ? r
              : (r - this._repeat * this._rDelay) / (this._repeat + 1),
          ))
        : this._tDur;
    }),
    (e.totalTime = function (r, i) {
      if ((Dr(), !arguments.length)) return this._tTime;
      var s = this._dp;
      if (s && s.smoothChildTiming && this._ts) {
        for (za(this, r), !s._dp || s.parent || jv(s, this); s && s.parent; )
          (s.parent._time !==
            s._start +
              (s._ts >= 0
                ? s._tTime / s._ts
                : (s.totalDuration() - s._tTime) / -s._ts) &&
            s.totalTime(s._tTime, !0),
            (s = s.parent));
        !this.parent &&
          this._dp.autoRemoveChildren &&
          ((this._ts > 0 && r < this._tDur) ||
            (this._ts < 0 && r > 0) ||
            (!this._tDur && !r)) &&
          _n(this._dp, this, this._start - this._delay);
      }
      return (
        (this._tTime !== r ||
          (!this._dur && !i) ||
          (this._initted && Math.abs(this._zTime) === Be) ||
          (!r && !this._initted && (this.add || this._ptLookup))) &&
          (this._ts || (this._pTime = r), Uv(this, r, i)),
        this
      );
    }),
    (e.time = function (r, i) {
      return arguments.length
        ? this.totalTime(
            Math.min(this.totalDuration(), r + Fd(this)) %
              (this._dur + this._rDelay) || (r ? this._dur : 0),
            i,
          )
        : this._time;
    }),
    (e.totalProgress = function (r, i) {
      return arguments.length
        ? this.totalTime(this.totalDuration() * r, i)
        : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.ratio;
    }),
    (e.progress = function (r, i) {
      return arguments.length
        ? this.totalTime(
            this.duration() *
              (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) +
              Fd(this),
            i,
          )
        : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.ratio;
    }),
    (e.iteration = function (r, i) {
      var s = this.duration() + this._rDelay;
      return arguments.length
        ? this.totalTime(this._time + (r - 1) * s, i)
        : this._repeat
          ? Lr(this._tTime, s) + 1
          : 1;
    }),
    (e.timeScale = function (r) {
      if (!arguments.length) return this._rts === -Be ? 0 : this._rts;
      if (this._rts === r) return this;
      var i =
        this.parent && this._ts ? qo(this.parent._time, this) : this._tTime;
      return (
        (this._rts = +r || 0),
        (this._ts = this._ps || r === -Be ? 0 : this._rts),
        this.totalTime(Ys(-this._delay, this._tDur, i), !0),
        Aa(this),
        yA(this)
      );
    }),
    (e.paused = function (r) {
      return arguments.length
        ? (this._ps !== r &&
            ((this._ps = r),
            r
              ? ((this._pTime =
                  this._tTime || Math.max(-this._delay, this.rawTime())),
                (this._ts = this._act = 0))
              : (Dr(),
                (this._ts = this._rts),
                this.totalTime(
                  this.parent && !this.parent.smoothChildTiming
                    ? this.rawTime()
                    : this._tTime || this._pTime,
                  this.progress() === 1 &&
                    Math.abs(this._zTime) !== Be &&
                    (this._tTime -= Be),
                ))),
          this)
        : this._ps;
    }),
    (e.startTime = function (r) {
      if (arguments.length) {
        this._start = r;
        var i = this.parent || this._dp;
        return (
          i && (i._sort || !this.parent) && _n(i, this, r - this._delay),
          this
        );
      }
      return this._start;
    }),
    (e.endTime = function (r) {
      return (
        this._start +
        (zt(r) ? this.totalDuration() : this.duration()) /
          Math.abs(this._ts || 1)
      );
    }),
    (e.rawTime = function (r) {
      var i = this.parent || this._dp;
      return i
        ? r &&
          (!this._ts ||
            (this._repeat && this._time && this.totalProgress() < 1))
          ? this._tTime % (this._dur + this._rDelay)
          : this._ts
            ? qo(i.rawTime(r), this)
            : this._tTime
        : this._tTime;
    }),
    (e.revert = function (r) {
      r === void 0 && (r = gA);
      var i = bt;
      return (
        (bt = r),
        (this._initted || this._startAt) &&
          (this.timeline && this.timeline.revert(r),
          this.totalTime(-0.01, r.suppressEvents)),
        this.data !== "nested" && r.kill !== !1 && this.kill(),
        (bt = i),
        this
      );
    }),
    (e.globalTime = function (r) {
      for (var i = this, s = arguments.length ? r : i.rawTime(); i; )
        ((s = i._start + s / (i._ts || 1)), (i = i._dp));
      return !this.parent && this._sat
        ? this._sat.vars.immediateRender
          ? -1
          : this._sat.globalTime(r)
        : s;
    }),
    (e.repeat = function (r) {
      return arguments.length
        ? ((this._repeat = r === 1 / 0 ? -2 : r), kd(this))
        : this._repeat === -2
          ? 1 / 0
          : this._repeat;
    }),
    (e.repeatDelay = function (r) {
      if (arguments.length) {
        var i = this._time;
        return ((this._rDelay = r), kd(this), i ? this.time(i) : this);
      }
      return this._rDelay;
    }),
    (e.yoyo = function (r) {
      return arguments.length ? ((this._yoyo = r), this) : this._yoyo;
    }),
    (e.seek = function (r, i) {
      return this.totalTime(jt(this, r), zt(i));
    }),
    (e.restart = function (r, i) {
      return this.play().totalTime(r ? -this._delay : 0, zt(i));
    }),
    (e.play = function (r, i) {
      return (r != null && this.seek(r, i), this.reversed(!1).paused(!1));
    }),
    (e.reverse = function (r, i) {
      return (
        r != null && this.seek(r || this.totalDuration(), i),
        this.reversed(!0).paused(!1)
      );
    }),
    (e.pause = function (r, i) {
      return (r != null && this.seek(r, i), this.paused(!0));
    }),
    (e.resume = function () {
      return this.paused(!1);
    }),
    (e.reversed = function (r) {
      return arguments.length
        ? (!!r !== this.reversed() &&
            this.timeScale(-this._rts || (r ? -Be : 0)),
          this)
        : this._rts < 0;
    }),
    (e.invalidate = function () {
      return ((this._initted = this._act = 0), (this._zTime = -Be), this);
    }),
    (e.isActive = function () {
      var r = this.parent || this._dp,
        i = this._start,
        s;
      return !!(
        !r ||
        (this._ts &&
          this._initted &&
          r.isActive() &&
          (s = r.rawTime(!0)) >= i &&
          s < this.endTime(!0) - Be)
      );
    }),
    (e.eventCallback = function (r, i, s) {
      var o = this.vars;
      return arguments.length > 1
        ? (i
            ? ((o[r] = i),
              s && (o[r + "Params"] = s),
              r === "onUpdate" && (this._onUpdate = i))
            : delete o[r],
          this)
        : o[r];
    }),
    (e.then = function (r) {
      var i = this;
      return new Promise(function (s) {
        var o = Ze(r) ? r : Vv,
          a = function () {
            var c = i.then;
            ((i.then = null),
              Ze(o) && (o = o(i)) && (o.then || o === i) && (i.then = c),
              s(o),
              (i.then = c));
          };
        (i._initted && i.totalProgress() === 1 && i._ts >= 0) ||
        (!i._tTime && i._ts < 0)
          ? a()
          : (i._prom = a);
      });
    }),
    (e.kill = function () {
      is(this);
    }),
    t
  );
})();
en(Nr.prototype, {
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
  _zTime: -Be,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var At = (function (t) {
  Cv(e, t);
  function e(r, i) {
    var s;
    return (
      r === void 0 && (r = {}),
      (s = t.call(this, r) || this),
      (s.labels = {}),
      (s.smoothChildTiming = !!r.smoothChildTiming),
      (s.autoRemoveChildren = !!r.autoRemoveChildren),
      (s._sort = zt(r.sortChildren)),
      Xe && _n(r.parent || Xe, Rn(s), i),
      r.reversed && s.reverse(),
      r.paused && s.paused(!0),
      r.scrollTrigger && Wv(Rn(s), r.scrollTrigger),
      s
    );
  }
  var n = e.prototype;
  return (
    (n.to = function (i, s, o) {
      return (vs(0, arguments, this), this);
    }),
    (n.from = function (i, s, o) {
      return (vs(1, arguments, this), this);
    }),
    (n.fromTo = function (i, s, o, a) {
      return (vs(2, arguments, this), this);
    }),
    (n.set = function (i, s, o) {
      return (
        (s.duration = 0),
        (s.parent = this),
        gs(s).repeatDelay || (s.repeat = 0),
        (s.immediateRender = !!s.immediateRender),
        new rt(i, s, jt(this, o), 1),
        this
      );
    }),
    (n.call = function (i, s, o) {
      return _n(this, rt.delayedCall(0, i, s), o);
    }),
    (n.staggerTo = function (i, s, o, a, l, c, u) {
      return (
        (o.duration = s),
        (o.stagger = o.stagger || a),
        (o.onComplete = c),
        (o.onCompleteParams = u),
        (o.parent = this),
        new rt(i, o, jt(this, l)),
        this
      );
    }),
    (n.staggerFrom = function (i, s, o, a, l, c, u) {
      return (
        (o.runBackwards = 1),
        (gs(o).immediateRender = zt(o.immediateRender)),
        this.staggerTo(i, s, o, a, l, c, u)
      );
    }),
    (n.staggerFromTo = function (i, s, o, a, l, c, u, h) {
      return (
        (a.startAt = o),
        (gs(a).immediateRender = zt(a.immediateRender)),
        this.staggerTo(i, s, a, l, c, u, h)
      );
    }),
    (n.render = function (i, s, o) {
      var a = this._time,
        l = this._dirty ? this.totalDuration() : this._tDur,
        c = this._dur,
        u = i <= 0 ? 0 : ct(i),
        h = this._zTime < 0 != i < 0 && (this._initted || !c),
        f,
        d,
        p,
        m,
        g,
        x,
        b,
        _,
        v,
        y,
        w,
        P;
      if (
        (this !== Xe && u > l && i >= 0 && (u = l), u !== this._tTime || o || h)
      ) {
        if (
          (a !== this._time &&
            c &&
            ((u += this._time - a), (i += this._time - a)),
          (f = u),
          (v = this._start),
          (_ = this._ts),
          (x = !_),
          h && (c || (a = this._zTime), (i || !s) && (this._zTime = i)),
          this._repeat)
        ) {
          if (
            ((w = this._yoyo),
            (g = c + this._rDelay),
            this._repeat < -1 && i < 0)
          )
            return this.totalTime(g * 100 + i, s, o);
          if (
            ((f = ct(u % g)),
            u === l
              ? ((m = this._repeat), (f = c))
              : ((m = ~~(u / g)),
                m && m === u / g && ((f = c), m--),
                f > c && (f = c)),
            (y = Lr(this._tTime, g)),
            !a && this._tTime && y !== m && (y = m),
            w && m & 1 && ((f = c - f), (P = 1)),
            m !== y && !this._lock)
          ) {
            var T = w && y & 1,
              R = T === (w && m & 1);
            if (
              (m < y && (T = !T),
              (a = T ? 0 : c),
              (this._lock = 1),
              (this.render(a || (P ? 0 : ct(m * g)), s, !c)._lock = 0),
              (this._tTime = u),
              !s && this.parent && Kt(this, "onRepeat"),
              this.vars.repeatRefresh && !P && (this.invalidate()._lock = 1),
              (a && a !== this._time) ||
                x !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((c = this._dur),
              (l = this._tDur),
              R &&
                ((this._lock = 2),
                (a = T ? c : -1e-4),
                this.render(a, !0),
                this.vars.repeatRefresh && !P && this.invalidate()),
              (this._lock = 0),
              !this._ts && !x)
            )
              return this;
            i1(this, P);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((b = PA(this, ct(a), ct(f))), b && (u -= f - (f = b._start))),
          (this._tTime = u),
          (this._time = f),
          (this._act = !_),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = i),
            (a = 0)),
          !a && f && !s && (Kt(this, "onStart"), this._tTime !== u))
        )
          return this;
        if (f >= a && i >= 0)
          for (d = this._first; d; ) {
            if (
              ((p = d._next), (d._act || f >= d._start) && d._ts && b !== d)
            ) {
              if (d.parent !== this) return this.render(i, s, o);
              if (
                (d.render(
                  d._ts > 0
                    ? (f - d._start) * d._ts
                    : (d._dirty ? d.totalDuration() : d._tDur) +
                        (f - d._start) * d._ts,
                  s,
                  o,
                ),
                f !== this._time || (!this._ts && !x))
              ) {
                ((b = 0), p && (u += this._zTime = -Be));
                break;
              }
            }
            d = p;
          }
        else {
          d = this._last;
          for (var k = i < 0 ? i : f; d; ) {
            if (((p = d._prev), (d._act || k <= d._end) && d._ts && b !== d)) {
              if (d.parent !== this) return this.render(i, s, o);
              if (
                (d.render(
                  d._ts > 0
                    ? (k - d._start) * d._ts
                    : (d._dirty ? d.totalDuration() : d._tDur) +
                        (k - d._start) * d._ts,
                  s,
                  o || (bt && (d._initted || d._startAt)),
                ),
                f !== this._time || (!this._ts && !x))
              ) {
                ((b = 0), p && (u += this._zTime = k ? -Be : Be));
                break;
              }
            }
            d = p;
          }
        }
        if (
          b &&
          !s &&
          (this.pause(),
          (b.render(f >= a ? 0 : -Be)._zTime = f >= a ? 1 : -1),
          this._ts)
        )
          return ((this._start = v), Aa(this), this.render(i, s, o));
        (this._onUpdate && !s && Kt(this, "onUpdate", !0),
          ((u === l && this._tTime >= this.totalDuration()) || (!u && a)) &&
            (v === this._start || Math.abs(_) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((i || !c) &&
                ((u === l && this._ts > 0) || (!u && this._ts < 0)) &&
                bi(this, 1),
              !s &&
                !(i < 0 && !a) &&
                (u || a || !l) &&
                (Kt(
                  this,
                  u === l && i >= 0 ? "onComplete" : "onReverseComplete",
                  !0,
                ),
                this._prom &&
                  !(u < l && this.timeScale() > 0) &&
                  this._prom()))));
      }
      return this;
    }),
    (n.add = function (i, s) {
      var o = this;
      if ((Bn(s) || (s = jt(this, s, i)), !(i instanceof Nr))) {
        if (_t(i))
          return (
            i.forEach(function (a) {
              return o.add(a, s);
            }),
            this
          );
        if (st(i)) return this.addLabel(i, s);
        if (Ze(i)) i = rt.delayedCall(0, i);
        else return this;
      }
      return this !== i ? _n(this, i, s) : this;
    }),
    (n.getChildren = function (i, s, o, a) {
      (i === void 0 && (i = !0),
        s === void 0 && (s = !0),
        o === void 0 && (o = !0),
        a === void 0 && (a = -Xt));
      for (var l = [], c = this._first; c; )
        (c._start >= a &&
          (c instanceof rt
            ? s && l.push(c)
            : (o && l.push(c), i && l.push.apply(l, c.getChildren(!0, s, o)))),
          (c = c._next));
      return l;
    }),
    (n.getById = function (i) {
      for (var s = this.getChildren(1, 1, 1), o = s.length; o--; )
        if (s[o].vars.id === i) return s[o];
    }),
    (n.remove = function (i) {
      return st(i)
        ? this.removeLabel(i)
        : Ze(i)
          ? this.killTweensOf(i)
          : (Ca(this, i),
            i === this._recent && (this._recent = this._last),
            ji(this));
    }),
    (n.totalTime = function (i, s) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = ct(
              Dt.time -
                (this._ts > 0
                  ? i / this._ts
                  : (this.totalDuration() - i) / -this._ts),
            )),
          t.prototype.totalTime.call(this, i, s),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (n.addLabel = function (i, s) {
      return ((this.labels[i] = jt(this, s)), this);
    }),
    (n.removeLabel = function (i) {
      return (delete this.labels[i], this);
    }),
    (n.addPause = function (i, s, o) {
      var a = rt.delayedCall(0, s || Os, o);
      return (
        (a.data = "isPause"),
        (this._hasPause = 1),
        _n(this, a, jt(this, i))
      );
    }),
    (n.removePause = function (i) {
      var s = this._first;
      for (i = jt(this, i); s; )
        (s._start === i && s.data === "isPause" && bi(s), (s = s._next));
    }),
    (n.killTweensOf = function (i, s, o) {
      for (var a = this.getTweensOf(i, o), l = a.length; l--; )
        ii !== a[l] && a[l].kill(i, s);
      return this;
    }),
    (n.getTweensOf = function (i, s) {
      for (var o = [], a = Yt(i), l = this._first, c = Bn(s), u; l; )
        (l instanceof rt
          ? vA(l._targets, a) &&
            (c
              ? (!ii || (l._initted && l._ts)) &&
                l.globalTime(0) <= s &&
                l.globalTime(l.totalDuration()) > s
              : !s || l.isActive()) &&
            o.push(l)
          : (u = l.getTweensOf(a, s)).length && o.push.apply(o, u),
          (l = l._next));
      return o;
    }),
    (n.tweenTo = function (i, s) {
      s = s || {};
      var o = this,
        a = jt(o, i),
        l = s,
        c = l.startAt,
        u = l.onStart,
        h = l.onStartParams,
        f = l.immediateRender,
        d,
        p = rt.to(
          o,
          en(
            {
              ease: s.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: a,
              overwrite: "auto",
              duration:
                s.duration ||
                Math.abs(
                  (a - (c && "time" in c ? c.time : o._time)) / o.timeScale(),
                ) ||
                Be,
              onStart: function () {
                if ((o.pause(), !d)) {
                  var g =
                    s.duration ||
                    Math.abs(
                      (a - (c && "time" in c ? c.time : o._time)) /
                        o.timeScale(),
                    );
                  (p._dur !== g && Ir(p, g, 0, 1).render(p._time, !0, !0),
                    (d = 1));
                }
                u && u.apply(p, h || []);
              },
            },
            s,
          ),
        );
      return f ? p.render(0) : p;
    }),
    (n.tweenFromTo = function (i, s, o) {
      return this.tweenTo(s, en({ startAt: { time: jt(this, i) } }, o));
    }),
    (n.recent = function () {
      return this._recent;
    }),
    (n.nextLabel = function (i) {
      return (i === void 0 && (i = this._time), Ld(this, jt(this, i)));
    }),
    (n.previousLabel = function (i) {
      return (i === void 0 && (i = this._time), Ld(this, jt(this, i), 1));
    }),
    (n.currentLabel = function (i) {
      return arguments.length
        ? this.seek(i, !0)
        : this.previousLabel(this._time + Be);
    }),
    (n.shiftChildren = function (i, s, o) {
      o === void 0 && (o = 0);
      for (var a = this._first, l = this.labels, c; a; )
        (a._start >= o && ((a._start += i), (a._end += i)), (a = a._next));
      if (s) for (c in l) l[c] >= o && (l[c] += i);
      return ji(this);
    }),
    (n.invalidate = function (i) {
      var s = this._first;
      for (this._lock = 0; s; ) (s.invalidate(i), (s = s._next));
      return t.prototype.invalidate.call(this, i);
    }),
    (n.clear = function (i) {
      i === void 0 && (i = !0);
      for (var s = this._first, o; s; )
        ((o = s._next), this.remove(s), (s = o));
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        i && (this.labels = {}),
        ji(this)
      );
    }),
    (n.totalDuration = function (i) {
      var s = 0,
        o = this,
        a = o._last,
        l = Xt,
        c,
        u,
        h;
      if (arguments.length)
        return o.timeScale(
          (o._repeat < 0 ? o.duration() : o.totalDuration()) /
            (o.reversed() ? -i : i),
        );
      if (o._dirty) {
        for (h = o.parent; a; )
          ((c = a._prev),
            a._dirty && a.totalDuration(),
            (u = a._start),
            u > l && o._sort && a._ts && !o._lock
              ? ((o._lock = 1), (_n(o, a, u - a._delay, 1)._lock = 0))
              : (l = u),
            u < 0 &&
              a._ts &&
              ((s -= u),
              ((!h && !o._dp) || (h && h.smoothChildTiming)) &&
                ((o._start += u / o._ts), (o._time -= u), (o._tTime -= u)),
              o.shiftChildren(-u, !1, -1 / 0),
              (l = 0)),
            a._end > s && a._ts && (s = a._end),
            (a = c));
        (Ir(o, o === Xe && o._time > s ? o._time : s, 1, 1), (o._dirty = 0));
      }
      return o._tDur;
    }),
    (e.updateRoot = function (i) {
      if ((Xe._ts && (Uv(Xe, qo(i, Xe)), (Dv = Dt.frame)), Dt.frame >= Od)) {
        Od += Nt.autoSleep || 120;
        var s = Xe._first;
        if ((!s || !s._ts) && Nt.autoSleep && Dt._listeners.length < 2) {
          for (; s && !s._ts; ) s = s._next;
          s || Dt.sleep();
        }
      }
    }),
    e
  );
})(Nr);
en(At.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var VA = function (e, n, r, i, s, o, a) {
  var l = new Ot(this._pt, e, n, 0, 1, f1, null, s),
    c = 0,
    u = 0,
    h,
    f,
    d,
    p,
    m,
    g,
    x,
    b;
  for (
    l.b = r,
      l.e = i,
      r += "",
      i += "",
      (x = ~i.indexOf("random(")) && (i = Ms(i)),
      o && ((b = [r, i]), o(b, e, n), (r = b[0]), (i = b[1])),
      f = r.match(gl) || [];
    (h = gl.exec(i));

  )
    ((p = h[0]),
      (m = i.substring(c, h.index)),
      d ? (d = (d + 1) % 5) : m.substr(-5) === "rgba(" && (d = 1),
      p !== f[u++] &&
        ((g = parseFloat(f[u - 1]) || 0),
        (l._pt = {
          _next: l._pt,
          p: m || u === 1 ? m : ",",
          s: g,
          c: p.charAt(1) === "=" ? xr(g, p) - g : parseFloat(p) - g,
          m: d && d < 4 ? Math.round : 0,
        }),
        (c = gl.lastIndex)));
  return (
    (l.c = c < i.length ? i.substring(c, i.length) : ""),
    (l.fp = a),
    (Mv.test(i) || x) && (l.e = 0),
    (this._pt = l),
    l
  );
};
var Bu = function (e, n, r, i, s, o, a, l, c, u) {
  Ze(i) && (i = i(s || 0, e, o));
  var h = e[n],
    f =
      r !== "get"
        ? r
        : Ze(h)
          ? c
            ? e[
                n.indexOf("set") || !Ze(e["get" + n.substr(3)])
                  ? n
                  : "get" + n.substr(3)
              ](c)
            : e[n]()
          : h,
    d = Ze(h) ? (c ? qA : c1) : Hu,
    p;
  if (
    (st(i) &&
      (~i.indexOf("random(") && (i = Ms(i)),
      i.charAt(1) === "=" &&
        ((p = xr(f, i) + (vt(f) || 0)), (p || p === 0) && (i = p))),
    !u || f !== i || kc)
  )
    return !isNaN(f * i) && i !== ""
      ? ((p = new Ot(
          this._pt,
          e,
          n,
          +f || 0,
          i - (f || 0),
          typeof h == "boolean" ? XA : u1,
          0,
          d,
        )),
        c && (p.fp = c),
        a && p.modifier(a, this, e),
        (this._pt = p))
      : (!h && !(n in e) && Iu(n, i),
        VA.call(this, e, n, f, i, d, l || Nt.stringFilter, c));
};
var HA = function (e, n, r, i, s) {
  if (
    (Ze(e) && (e = bs(e, s, n, r, i)),
    !Tn(e) || (e.style && e.nodeType) || _t(e) || Rv(e))
  )
    return st(e) ? bs(e, s, n, r, i) : e;
  var o = {},
    a;
  for (a in e) o[a] = bs(e[a], s, n, r, i);
  return o;
};
var o1 = function (e, n, r, i, s, o) {
  var a, l, c, u;
  if (
    Lt[e] &&
    (a = new Lt[e]()).init(
      s,
      a.rawVars ? n[e] : HA(n[e], i, s, o, r),
      r,
      i,
      o,
    ) !== !1 &&
    ((r._pt = l = new Ot(r._pt, s, e, 0, 1, a.render, a, 0, a.priority)),
    r !== dr)
  )
    for (c = r._ptLookup[r._targets.indexOf(s)], u = a._props.length; u--; )
      c[a._props[u]] = l;
  return a;
};
var ii;
var kc;
var Vu = function t(e, n, r) {
  var i = e.vars,
    s = i.ease,
    o = i.startAt,
    a = i.immediateRender,
    l = i.lazy,
    c = i.onUpdate,
    u = i.onUpdateParams,
    h = i.callbackScope,
    f = i.runBackwards,
    d = i.yoyoEase,
    p = i.keyframes,
    m = i.autoRevert,
    g = e._dur,
    x = e._startAt,
    b = e._targets,
    _ = e.parent,
    v = _ && _.data === "nested" ? _.vars.targets : b,
    y = e._overwrite === "auto" && !Fu,
    w = e.timeline,
    P,
    T,
    R,
    k,
    D,
    M,
    z,
    S,
    A,
    I,
    B,
    $,
    ne;
  if (
    (w && (!p || !s) && (s = "none"),
    (e._ease = Wi(s, kr.ease)),
    (e._yEase = d ? n1(Wi(d === !0 ? s : d, kr.ease)) : 0),
    d &&
      e._yoyo &&
      !e._repeat &&
      ((d = e._yEase), (e._yEase = e._ease), (e._ease = d)),
    (e._from = !w && !!i.runBackwards),
    !w || (p && !i.stagger))
  ) {
    if (
      ((S = b[0] ? Hi(b[0]).harness : 0),
      ($ = S && i[S.prop]),
      (P = Go(i, Du)),
      x &&
        (x._zTime < 0 && x.progress(1),
        n < 0 && f && a && !m ? x.render(-1, !0) : x.revert(f && g ? yo : mA),
        (x._lazy = 0)),
      o)
    ) {
      if (
        (bi(
          (e._startAt = rt.set(
            b,
            en(
              {
                data: "isStart",
                overwrite: !1,
                parent: _,
                immediateRender: !0,
                lazy: !x && zt(l),
                startAt: null,
                delay: 0,
                onUpdate: c,
                onUpdateParams: u,
                callbackScope: h,
                stagger: 0,
              },
              o,
            ),
          )),
        ),
        (e._startAt._dp = 0),
        (e._startAt._sat = e),
        n < 0 && (bt || (!a && !m)) && e._startAt.revert(yo),
        a && g && n <= 0 && r <= 0)
      ) {
        n && (e._zTime = n);
        return;
      }
    } else if (f && g && !x) {
      if (
        (n && (a = !1),
        (R = en(
          {
            overwrite: !1,
            data: "isFromStart",
            lazy: a && !x && zt(l),
            immediateRender: a,
            stagger: 0,
            parent: _,
          },
          P,
        )),
        $ && (R[S.prop] = $),
        bi((e._startAt = rt.set(b, R))),
        (e._startAt._dp = 0),
        (e._startAt._sat = e),
        n < 0 && (bt ? e._startAt.revert(yo) : e._startAt.render(-1, !0)),
        (e._zTime = n),
        !a)
      )
        t(e._startAt, Be, Be);
      else if (!n) return;
    }
    for (
      e._pt = e._ptCache = 0, l = (g && zt(l)) || (l && !g), T = 0;
      T < b.length;
      T++
    ) {
      if (
        ((D = b[T]),
        (z = D._gsap || Uu(b)[T]._gsap),
        (e._ptLookup[T] = I = {}),
        Ac[z.id] && fi.length && Wo(),
        (B = v === b ? T : v.indexOf(D)),
        S &&
          (A = new S()).init(D, $ || P, e, B, v) !== !1 &&
          ((e._pt = k =
            new Ot(e._pt, D, A.name, 0, 1, A.render, A, 0, A.priority)),
          A._props.forEach(function (pe) {
            I[pe] = k;
          }),
          A.priority && (M = 1)),
        !S || $)
      )
        for (R in P)
          Lt[R] && (A = o1(R, P, e, B, D, v))
            ? A.priority && (M = 1)
            : (I[R] = k =
                Bu.call(e, D, R, "get", P[R], B, v, 0, i.stringFilter));
      (e._op && e._op[T] && e.kill(D, e._op[T]),
        y &&
          e._pt &&
          ((ii = e),
          Xe.killTweensOf(D, I, e.globalTime(n)),
          (ne = !e.parent),
          (ii = 0)),
        e._pt && l && (Ac[z.id] = 1));
    }
    (M && h1(e), e._onInit && e._onInit(e));
  }
  ((e._onUpdate = c),
    (e._initted = (!e._op || e._pt) && !ne),
    p && n <= 0 && w.render(Xt, !0, !0));
};
var jA = function (e, n, r, i, s, o, a) {
  var l = ((e._pt && e._ptCache) || (e._ptCache = {}))[n],
    c,
    u,
    h,
    f;
  if (!l)
    for (
      l = e._ptCache[n] = [], h = e._ptLookup, f = e._targets.length;
      f--;

    ) {
      if (((c = h[f][n]), c && c.d && c.d._pt))
        for (c = c.d._pt; c && c.p !== n && c.fp !== n; ) c = c._next;
      if (!c) return ((kc = 1), (e.vars[n] = "+=0"), Vu(e, a), (kc = 0), 1);
      l.push(c);
    }
  for (f = l.length; f--; )
    ((u = l[f]),
      (c = u._pt || u),
      (c.s = (i || i === 0) && !s ? i : c.s + (i || 0) + o * c.c),
      (c.c = r - c.s),
      u.e && (u.e = Je(r) + vt(u.e)),
      u.b && (u.b = c.s + vt(u.b)));
};
var WA = function (e, n) {
  var r = e[0] ? Hi(e[0]).harness : 0,
    i = r && r.aliases,
    s,
    o,
    a,
    l;
  if (!i) return n;
  s = Xi({}, n);
  for (o in i)
    if (o in s) for (l = i[o].split(","), a = l.length; a--; ) s[l[a]] = s[o];
  return s;
};
var GA = function (e, n, r, i) {
  var s = n.ease || i || "power1.inOut",
    o,
    a;
  if (_t(n))
    ((a = r[e] || (r[e] = [])),
      n.forEach(function (l, c) {
        return a.push({ t: (c / (n.length - 1)) * 100, v: l, e: s });
      }));
  else
    for (o in n)
      ((a = r[o] || (r[o] = [])),
        o === "ease" || a.push({ t: parseFloat(e), v: n[o], e: s }));
};
var bs = function (e, n, r, i, s) {
  return Ze(e)
    ? e.call(n, r, i, s)
    : st(e) && ~e.indexOf("random(")
      ? Ms(e)
      : e;
};
var a1 = Nu + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert";
var l1 = {};
Rt(a1 + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
  return (l1[t] = 1);
});
var rt = (function (t) {
  Cv(e, t);
  function e(r, i, s, o) {
    var a;
    (typeof i == "number" && ((s.duration = i), (i = s), (s = null)),
      (a = t.call(this, o ? i : gs(i)) || this));
    var l = a.vars,
      c = l.duration,
      u = l.delay,
      h = l.immediateRender,
      f = l.stagger,
      d = l.overwrite,
      p = l.keyframes,
      m = l.defaults,
      g = l.scrollTrigger,
      x = l.yoyoEase,
      b = i.parent || Xe,
      _ = (_t(r) || Rv(r) ? Bn(r[0]) : "length" in i) ? [r] : Yt(r),
      v,
      y,
      w,
      P,
      T,
      R,
      k,
      D;
    if (
      ((a._targets = _.length
        ? Uu(_)
        : jo(
            "GSAP target " + r + " not found. https://greensock.com",
            !Nt.nullTargetWarn,
          ) || []),
      (a._ptLookup = []),
      (a._overwrite = d),
      p || f || mo(c) || mo(u))
    ) {
      if (
        ((i = a.vars),
        (v = a.timeline =
          new At({
            data: "nested",
            defaults: m || {},
            targets: b && b.data === "nested" ? b.vars.targets : _,
          })),
        v.kill(),
        (v.parent = v._dp = Rn(a)),
        (v._start = 0),
        f || mo(c) || mo(u))
      ) {
        if (((P = _.length), (k = f && Xv(f)), Tn(f)))
          for (T in f) ~a1.indexOf(T) && (D || (D = {}), (D[T] = f[T]));
        for (y = 0; y < P; y++)
          ((w = Go(i, l1)),
            (w.stagger = 0),
            x && (w.yoyoEase = x),
            D && Xi(w, D),
            (R = _[y]),
            (w.duration = +bs(c, Rn(a), y, R, _)),
            (w.delay = (+bs(u, Rn(a), y, R, _) || 0) - a._delay),
            !f &&
              P === 1 &&
              w.delay &&
              ((a._delay = u = w.delay), (a._start += u), (w.delay = 0)),
            v.to(R, w, k ? k(y, R, _) : 0),
            (v._ease = Te.none));
        v.duration() ? (c = u = 0) : (a.timeline = 0);
      } else if (p) {
        (gs(en(v.vars.defaults, { ease: "none" })),
          (v._ease = Wi(p.ease || i.ease || "none")));
        var M = 0,
          z,
          S,
          A;
        if (_t(p))
          (p.forEach(function (I) {
            return v.to(_, I, ">");
          }),
            v.duration());
        else {
          w = {};
          for (T in p)
            T === "ease" || T === "easeEach" || GA(T, p[T], w, p.easeEach);
          for (T in w)
            for (
              z = w[T].sort(function (I, B) {
                return I.t - B.t;
              }),
                M = 0,
                y = 0;
              y < z.length;
              y++
            )
              ((S = z[y]),
                (A = {
                  ease: S.e,
                  duration: ((S.t - (y ? z[y - 1].t : 0)) / 100) * c,
                }),
                (A[T] = S.v),
                v.to(_, A, M),
                (M += A.duration));
          v.duration() < c && v.to({}, { duration: c - v.duration() });
        }
      }
      c || a.duration((c = v.duration()));
    } else a.timeline = 0;
    return (
      d === !0 && !Fu && ((ii = Rn(a)), Xe.killTweensOf(_), (ii = 0)),
      _n(b, Rn(a), s),
      i.reversed && a.reverse(),
      i.paused && a.paused(!0),
      (h ||
        (!c &&
          !p &&
          a._start === ct(b._time) &&
          zt(h) &&
          xA(Rn(a)) &&
          b.data !== "nested")) &&
        ((a._tTime = -Be), a.render(Math.max(0, -u) || 0)),
      g && Wv(Rn(a), g),
      a
    );
  }
  var n = e.prototype;
  return (
    (n.render = function (i, s, o) {
      var a = this._time,
        l = this._tDur,
        c = this._dur,
        u = i < 0,
        h = i > l - Be && !u ? l : i < Be ? 0 : i,
        f,
        d,
        p,
        m,
        g,
        x,
        b,
        _,
        v;
      if (!c) SA(this, i, s, o);
      else if (
        h !== this._tTime ||
        !i ||
        o ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== u)
      ) {
        if (((f = h), (_ = this.timeline), this._repeat)) {
          if (((m = c + this._rDelay), this._repeat < -1 && u))
            return this.totalTime(m * 100 + i, s, o);
          if (
            ((f = ct(h % m)),
            h === l
              ? ((p = this._repeat), (f = c))
              : ((p = ~~(h / m)),
                p && p === h / m && ((f = c), p--),
                f > c && (f = c)),
            (x = this._yoyo && p & 1),
            x && ((v = this._yEase), (f = c - f)),
            (g = Lr(this._tTime, m)),
            f === a && !o && this._initted)
          )
            return ((this._tTime = h), this);
          p !== g &&
            (_ && this._yEase && i1(_, x),
            this.vars.repeatRefresh &&
              !x &&
              !this._lock &&
              ((this._lock = o = 1),
              (this.render(ct(m * p), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if (Gv(this, u ? i : f, o, s, h)) return ((this._tTime = 0), this);
          if (a !== this._time) return this;
          if (c !== this._dur) return this.render(i, s, o);
        }
        if (
          ((this._tTime = h),
          (this._time = f),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = b = (v || this._ease)(f / c)),
          this._from && (this.ratio = b = 1 - b),
          f && !a && !s && (Kt(this, "onStart"), this._tTime !== h))
        )
          return this;
        for (d = this._pt; d; ) (d.r(b, d.d), (d = d._next));
        ((_ &&
          _.render(
            i < 0 ? i : !f && x ? -Be : _._dur * _._ease(f / this._dur),
            s,
            o,
          )) ||
          (this._startAt && (this._zTime = i)),
          this._onUpdate &&
            !s &&
            (u && zc(this, i, s, o), Kt(this, "onUpdate")),
          this._repeat &&
            p !== g &&
            this.vars.onRepeat &&
            !s &&
            this.parent &&
            Kt(this, "onRepeat"),
          (h === this._tDur || !h) &&
            this._tTime === h &&
            (u && !this._onUpdate && zc(this, i, !0, !0),
            (i || !c) &&
              ((h === this._tDur && this._ts > 0) || (!h && this._ts < 0)) &&
              bi(this, 1),
            !s &&
              !(u && !a) &&
              (h || a || x) &&
              (Kt(this, h === l ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(h < l && this.timeScale() > 0) && this._prom())));
      }
      return this;
    }),
    (n.targets = function () {
      return this._targets;
    }),
    (n.invalidate = function (i) {
      return (
        (!i || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(i),
        t.prototype.invalidate.call(this, i)
      );
    }),
    (n.resetTo = function (i, s, o, a) {
      (Fs || Dt.wake(), this._ts || this.play());
      var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        c;
      return (
        this._initted || Vu(this, l),
        (c = this._ease(l / this._dur)),
        jA(this, i, s, o, a, c, l)
          ? this.resetTo(i, s, o, a)
          : (za(this, 0),
            this.parent ||
              Hv(
                this._dp,
                this,
                "_first",
                "_last",
                this._dp._sort ? "_start" : 0,
              ),
            this.render(0))
      );
    }),
    (n.kill = function (i, s) {
      if ((s === void 0 && (s = "all"), !i && (!s || s === "all")))
        return ((this._lazy = this._pt = 0), this.parent ? is(this) : this);
      if (this.timeline) {
        var o = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(i, s, ii && ii.vars.overwrite !== !0)
            ._first || is(this),
          this.parent &&
            o !== this.timeline.totalDuration() &&
            Ir(this, (this._dur * this.timeline._tDur) / o, 0, 1),
          this
        );
      }
      var a = this._targets,
        l = i ? Yt(i) : a,
        c = this._ptLookup,
        u = this._pt,
        h,
        f,
        d,
        p,
        m,
        g,
        x;
      if ((!s || s === "all") && _A(a, l))
        return (s === "all" && (this._pt = 0), is(this));
      for (
        h = this._op = this._op || [],
          s !== "all" &&
            (st(s) &&
              ((m = {}),
              Rt(s, function (b) {
                return (m[b] = 1);
              }),
              (s = m)),
            (s = WA(a, s))),
          x = a.length;
        x--;

      )
        if (~l.indexOf(a[x])) {
          ((f = c[x]),
            s === "all"
              ? ((h[x] = s), (p = f), (d = {}))
              : ((d = h[x] = h[x] || {}), (p = s)));
          for (m in p)
            ((g = f && f[m]),
              g &&
                ((!("kill" in g.d) || g.d.kill(m) === !0) && Ca(this, g, "_pt"),
                delete f[m]),
              d !== "all" && (d[m] = 1));
        }
      return (this._initted && !this._pt && u && is(this), this);
    }),
    (e.to = function (i, s) {
      return new e(i, s, arguments[2]);
    }),
    (e.from = function (i, s) {
      return vs(1, arguments);
    }),
    (e.delayedCall = function (i, s, o, a) {
      return new e(s, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: i,
        onComplete: s,
        onReverseComplete: s,
        onCompleteParams: o,
        onReverseCompleteParams: o,
        callbackScope: a,
      });
    }),
    (e.fromTo = function (i, s, o) {
      return vs(2, arguments);
    }),
    (e.set = function (i, s) {
      return ((s.duration = 0), s.repeatDelay || (s.repeat = 0), new e(i, s));
    }),
    (e.killTweensOf = function (i, s, o) {
      return Xe.killTweensOf(i, s, o);
    }),
    e
  );
})(Nr);
en(rt.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
Rt("staggerTo,staggerFrom,staggerFromTo", function (t) {
  rt[t] = function () {
    var e = new At(),
      n = Oc.call(arguments, 0);
    return (n.splice(t === "staggerFromTo" ? 5 : 4, 0, 0), e[t].apply(e, n));
  };
});
var Hu = function (e, n, r) {
  return (e[n] = r);
};
var c1 = function (e, n, r) {
  return e[n](r);
};
var qA = function (e, n, r, i) {
  return e[n](i.fp, r);
};
var $A = function (e, n, r) {
  return e.setAttribute(n, r);
};
var ju = function (e, n) {
  return Ze(e[n]) ? c1 : ku(e[n]) && e.setAttribute ? $A : Hu;
};
var u1 = function (e, n) {
  return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e6) / 1e6, n);
};
var XA = function (e, n) {
  return n.set(n.t, n.p, !!(n.s + n.c * e), n);
};
var f1 = function (e, n) {
  var r = n._pt,
    i = "";
  if (!e && n.b) i = n.b;
  else if (e === 1 && n.e) i = n.e;
  else {
    for (; r; )
      ((i =
        r.p +
        (r.m ? r.m(r.s + r.c * e) : Math.round((r.s + r.c * e) * 1e4) / 1e4) +
        i),
        (r = r._next));
    i += n.c;
  }
  n.set(n.t, n.p, i, n);
};
var Wu = function (e, n) {
  for (var r = n._pt; r; ) (r.r(e, r.d), (r = r._next));
};
var YA = function (e, n, r, i) {
  for (var s = this._pt, o; s; )
    ((o = s._next), s.p === i && s.modifier(e, n, r), (s = o));
};
var KA = function (e) {
  for (var n = this._pt, r, i; n; )
    ((i = n._next),
      (n.p === e && !n.op) || n.op === e
        ? Ca(this, n, "_pt")
        : n.dep || (r = 1),
      (n = i));
  return !r;
};
var QA = function (e, n, r, i) {
  i.mSet(e, n, i.m.call(i.tween, r, i.mt), i);
};
var h1 = function (e) {
  for (var n = e._pt, r, i, s, o; n; ) {
    for (r = n._next, i = s; i && i.pr > n.pr; ) i = i._next;
    ((n._prev = i ? i._prev : o) ? (n._prev._next = n) : (s = n),
      (n._next = i) ? (i._prev = n) : (o = n),
      (n = r));
  }
  e._pt = s;
};
var Ot = (function () {
  function t(n, r, i, s, o, a, l, c, u) {
    ((this.t = r),
      (this.s = s),
      (this.c = o),
      (this.p = i),
      (this.r = a || u1),
      (this.d = l || this),
      (this.set = c || Hu),
      (this.pr = u || 0),
      (this._next = n),
      n && (n._prev = this));
  }
  var e = t.prototype;
  return (
    (e.modifier = function (r, i, s) {
      ((this.mSet = this.mSet || this.set),
        (this.set = QA),
        (this.m = r),
        (this.mt = s),
        (this.tween = i));
    }),
    t
  );
})();
Rt(
  Nu +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (t) {
    return (Du[t] = 1);
  },
);
Bt.TweenMax = Bt.TweenLite = rt;
Bt.TimelineLite = Bt.TimelineMax = At;
Xe = new At({
  sortChildren: !1,
  defaults: kr,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
Nt.stringFilter = t1;
var Ur = [];
var wo = {};
var ZA = [];
var Dd = 0;
var xl = function (e) {
  return (wo[e] || ZA).map(function (n) {
    return n();
  });
};
var Lc = function () {
  var e = Date.now(),
    n = [];
  e - Dd > 2 &&
    (xl("matchMediaInit"),
    Ur.forEach(function (r) {
      var i = r.queries,
        s = r.conditions,
        o,
        a,
        l,
        c;
      for (a in i)
        ((o = Wt.matchMedia(i[a]).matches),
          o && (l = 1),
          o !== s[a] && ((s[a] = o), (c = 1)));
      c && (r.revert(), l && n.push(r));
    }),
    xl("matchMediaRevert"),
    n.forEach(function (r) {
      return r.onMatch(r);
    }),
    (Dd = e),
    xl("matchMedia"));
};
var d1 = (function () {
  function t(n, r) {
    ((this.selector = r && Mc(r)),
      (this.data = []),
      (this._r = []),
      (this.isReverted = !1),
      n && this.add(n));
  }
  var e = t.prototype;
  return (
    (e.add = function (r, i, s) {
      Ze(r) && ((s = i), (i = r), (r = Ze));
      var o = this,
        a = function () {
          var c = nt,
            u = o.selector,
            h;
          return (
            c && c !== o && c.data.push(o),
            s && (o.selector = Mc(s)),
            (nt = o),
            (h = i.apply(o, arguments)),
            Ze(h) && o._r.push(h),
            (nt = c),
            (o.selector = u),
            (o.isReverted = !1),
            h
          );
        };
      return ((o.last = a), r === Ze ? a(o) : r ? (o[r] = a) : a);
    }),
    (e.ignore = function (r) {
      var i = nt;
      ((nt = null), r(this), (nt = i));
    }),
    (e.getTweens = function () {
      var r = [];
      return (
        this.data.forEach(function (i) {
          return i instanceof t
            ? r.push.apply(r, i.getTweens())
            : i instanceof rt &&
                !(i.parent && i.parent.data === "nested") &&
                r.push(i);
        }),
        r
      );
    }),
    (e.clear = function () {
      this._r.length = this.data.length = 0;
    }),
    (e.kill = function (r, i) {
      var s = this;
      if (r) {
        var o = this.getTweens();
        (this.data.forEach(function (l) {
          l.data === "isFlip" &&
            (l.revert(),
            l.getChildren(!0, !0, !1).forEach(function (c) {
              return o.splice(o.indexOf(c), 1);
            }));
        }),
          o
            .map(function (l) {
              return { g: l.globalTime(0), t: l };
            })
            .sort(function (l, c) {
              return c.g - l.g || -1;
            })
            .forEach(function (l) {
              return l.t.revert(r);
            }),
          this.data.forEach(function (l) {
            return !(l instanceof Nr) && l.revert && l.revert(r);
          }),
          this._r.forEach(function (l) {
            return l(r, s);
          }),
          (this.isReverted = !0));
      } else
        this.data.forEach(function (l) {
          return l.kill && l.kill();
        });
      if ((this.clear(), i)) {
        var a = Ur.indexOf(this);
        ~a && Ur.splice(a, 1);
      }
    }),
    (e.revert = function (r) {
      this.kill(r || {});
    }),
    t
  );
})();
var JA = (function () {
  function t(n) {
    ((this.contexts = []), (this.scope = n));
  }
  var e = t.prototype;
  return (
    (e.add = function (r, i, s) {
      Tn(r) || (r = { matches: r });
      var o = new d1(0, s || this.scope),
        a = (o.conditions = {}),
        l,
        c,
        u;
      (this.contexts.push(o), (i = o.add("onMatch", i)), (o.queries = r));
      for (c in r)
        c === "all"
          ? (u = 1)
          : ((l = Wt.matchMedia(r[c])),
            l &&
              (Ur.indexOf(o) < 0 && Ur.push(o),
              (a[c] = l.matches) && (u = 1),
              l.addListener
                ? l.addListener(Lc)
                : l.addEventListener("change", Lc)));
      return (u && i(o), this);
    }),
    (e.revert = function (r) {
      this.kill(r || {});
    }),
    (e.kill = function (r) {
      this.contexts.forEach(function (i) {
        return i.kill(r, !0);
      });
    }),
    t
  );
})();
var $o = {
  registerPlugin: function () {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
      n[r] = arguments[r];
    n.forEach(function (i) {
      return kA(i);
    });
  },
  timeline: function (e) {
    return new At(e);
  },
  getTweensOf: function (e, n) {
    return Xe.getTweensOf(e, n);
  },
  getProperty: function (e, n, r, i) {
    st(e) && (e = Yt(e)[0]);
    var s = Hi(e || {}).get,
      o = r ? Vv : Bv;
    return (
      r === "native" && (r = ""),
      e &&
        (n
          ? o(((Lt[n] && Lt[n].get) || s)(e, n, r, i))
          : function (a, l, c) {
              return o(((Lt[a] && Lt[a].get) || s)(e, a, l, c));
            })
    );
  },
  quickSetter: function (e, n, r) {
    if (((e = Yt(e)), e.length > 1)) {
      var i = e.map(function (u) {
          return Vt.quickSetter(u, n, r);
        }),
        s = i.length;
      return function (u) {
        for (var h = s; h--; ) i[h](u);
      };
    }
    e = e[0] || {};
    var o = Lt[n],
      a = Hi(e),
      l = (a.harness && (a.harness.aliases || {})[n]) || n,
      c = o
        ? function (u) {
            var h = new o();
            ((dr._pt = 0),
              h.init(e, r ? u + r : u, dr, 0, [e]),
              h.render(1, h),
              dr._pt && Wu(1, dr));
          }
        : a.set(e, l);
    return o
      ? c
      : function (u) {
          return c(e, l, r ? u + r : u, a, 1);
        };
  },
  quickTo: function (e, n, r) {
    var i,
      s = Vt.to(
        e,
        Xi(((i = {}), (i[n] = "+=0.1"), (i.paused = !0), i), r || {}),
      ),
      o = function (l, c, u) {
        return s.resetTo(n, l, c, u);
      };
    return ((o.tween = s), o);
  },
  isTweening: function (e) {
    return Xe.getTweensOf(e, !0).length > 0;
  },
  defaults: function (e) {
    return (e && e.ease && (e.ease = Wi(e.ease, kr.ease)), Md(kr, e || {}));
  },
  config: function (e) {
    return Md(Nt, e || {});
  },
  registerEffect: function (e) {
    var n = e.name,
      r = e.effect,
      i = e.plugins,
      s = e.defaults,
      o = e.extendTimeline;
    ((i || "").split(",").forEach(function (a) {
      return (
        a && !Lt[a] && !Bt[a] && jo(n + " effect requires " + a + " plugin.")
      );
    }),
      (vl[n] = function (a, l, c) {
        return r(Yt(a), en(l || {}, s), c);
      }),
      o &&
        (At.prototype[n] = function (a, l, c) {
          return this.add(vl[n](a, Tn(l) ? l : (c = l) && {}, this), c);
        }));
  },
  registerEase: function (e, n) {
    Te[e] = Wi(n);
  },
  parseEase: function (e, n) {
    return arguments.length ? Wi(e, n) : Te;
  },
  getById: function (e) {
    return Xe.getById(e);
  },
  exportRoot: function (e, n) {
    e === void 0 && (e = {});
    var r = new At(e),
      i,
      s;
    for (
      r.smoothChildTiming = zt(e.smoothChildTiming),
        Xe.remove(r),
        r._dp = 0,
        r._time = r._tTime = Xe._time,
        i = Xe._first;
      i;

    )
      ((s = i._next),
        (n ||
          !(
            !i._dur &&
            i instanceof rt &&
            i.vars.onComplete === i._targets[0]
          )) &&
          _n(r, i, i._start - i._delay),
        (i = s));
    return (_n(Xe, r, 0), r);
  },
  context: function (e, n) {
    return e ? new d1(e, n) : nt;
  },
  matchMedia: function (e) {
    return new JA(e);
  },
  matchMediaRefresh: function () {
    return (
      Ur.forEach(function (e) {
        var n = e.conditions,
          r,
          i;
        for (i in n) n[i] && ((n[i] = !1), (r = 1));
        r && e.revert();
      }) || Lc()
    );
  },
  addEventListener: function (e, n) {
    var r = wo[e] || (wo[e] = []);
    ~r.indexOf(n) || r.push(n);
  },
  removeEventListener: function (e, n) {
    var r = wo[e],
      i = r && r.indexOf(n);
    i >= 0 && r.splice(i, 1);
  },
  utils: {
    wrap: OA,
    wrapYoyo: MA,
    distribute: Xv,
    random: Kv,
    snap: Yv,
    normalize: RA,
    getUnit: vt,
    clamp: EA,
    splitColor: Jv,
    toArray: Yt,
    selector: Mc,
    mapRange: Zv,
    pipe: AA,
    unitize: zA,
    interpolate: FA,
    shuffle: $v,
  },
  install: Lv,
  effects: vl,
  ticker: Dt,
  updateRoot: At.updateRoot,
  plugins: Lt,
  globalTimeline: Xe,
  core: {
    PropTween: Ot,
    globals: Iv,
    Tween: rt,
    Timeline: At,
    Animation: Nr,
    getCache: Hi,
    _removeLinkedListItem: Ca,
    reverting: function () {
      return bt;
    },
    context: function (e) {
      return (e && nt && (nt.data.push(e), (e._ctx = nt)), nt);
    },
    suppressOverwrites: function (e) {
      return (Fu = e);
    },
  },
};
Rt("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
  return ($o[t] = rt[t]);
});
Dt.add(At.updateRoot);
dr = $o.to({}, { duration: 0 });
var ez = function (e, n) {
  for (var r = e._pt; r && r.p !== n && r.op !== n && r.fp !== n; ) r = r._next;
  return r;
};
var tz = function (e, n) {
  var r = e._targets,
    i,
    s,
    o;
  for (i in n)
    for (s = r.length; s--; )
      ((o = e._ptLookup[s][i]),
        o &&
          (o = o.d) &&
          (o._pt && (o = ez(o, i)),
          o && o.modifier && o.modifier(n[i], e, r[s], i)));
};
var wl = function (e, n) {
  return {
    name: e,
    rawVars: 1,
    init: function (i, s, o) {
      o._onInit = function (a) {
        var l, c;
        if (
          (st(s) &&
            ((l = {}),
            Rt(s, function (u) {
              return (l[u] = 1);
            }),
            (s = l)),
          n)
        ) {
          l = {};
          for (c in s) l[c] = n(s[c]);
          s = l;
        }
        tz(a, s);
      };
    },
  };
};
var Vt =
  $o.registerPlugin(
    {
      name: "attr",
      init: function (e, n, r, i, s) {
        var o, a, l;
        this.tween = r;
        for (o in n)
          ((l = e.getAttribute(o) || ""),
            (a = this.add(
              e,
              "setAttribute",
              (l || 0) + "",
              n[o],
              i,
              s,
              0,
              0,
              o,
            )),
            (a.op = o),
            (a.b = l),
            this._props.push(o));
      },
      render: function (e, n) {
        for (var r = n._pt; r; )
          (bt ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), (r = r._next));
      },
    },
    {
      name: "endArray",
      init: function (e, n) {
        for (var r = n.length; r--; )
          this.add(e, r, e[r] || 0, n[r], 0, 0, 0, 0, 0, 1);
      },
    },
    wl("roundProps", Fc),
    wl("modifiers"),
    wl("snap", Yv),
  ) || $o;
rt.version = At.version = Vt.version = "3.11.4";
kv = 1;
zv() && Dr();
Te.Power0;
Te.Power1;
Te.Power2;
Te.Power3;
Te.Power4;
Te.Linear;
Te.Quad;
Te.Cubic;
Te.Quart;
Te.Quint;
Te.Strong;
Te.Elastic;
Te.Back;
Te.SteppedEase;
Te.Bounce;
Te.Sine;
Te.Expo;
Te.Circ;
var Nd;
var ri;
var wr;
var Gu;
var Ni;
var Ud;
var qu;
var nz = function () {
  return typeof window < "u";
};
var Vn = {};
var ki = 180 / Math.PI;
var Sr = Math.PI / 180;
var ar = Math.atan2;
var Bd = 1e8;
var $u = /([A-Z])/g;
var iz = /(left|right|width|margin|padding|x)/i;
var rz = /[\s,\(]\S/;
var kn = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity",
};
var Ic = function (e, n) {
  return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n);
};
var sz = function (e, n) {
  return n.set(
    n.t,
    n.p,
    e === 1 ? n.e : Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u,
    n,
  );
};
var oz = function (e, n) {
  return n.set(
    n.t,
    n.p,
    e ? Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u : n.b,
    n,
  );
};
var az = function (e, n) {
  var r = n.s + n.c * e;
  n.set(n.t, n.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + n.u, n);
};
var p1 = function (e, n) {
  return n.set(n.t, n.p, e ? n.e : n.b, n);
};
var m1 = function (e, n) {
  return n.set(n.t, n.p, e !== 1 ? n.b : n.e, n);
};
var lz = function (e, n, r) {
  return (e.style[n] = r);
};
var cz = function (e, n, r) {
  return e.style.setProperty(n, r);
};
var uz = function (e, n, r) {
  return (e._gsap[n] = r);
};
var fz = function (e, n, r) {
  return (e._gsap.scaleX = e._gsap.scaleY = r);
};
var hz = function (e, n, r, i, s) {
  var o = e._gsap;
  ((o.scaleX = o.scaleY = r), o.renderTransform(s, o));
};
var dz = function (e, n, r, i, s) {
  var o = e._gsap;
  ((o[n] = r), o.renderTransform(s, o));
};
var Ye = "transform";
var ln = Ye + "Origin";
var pz = function (e, n) {
  var r = this,
    i = this.target,
    s = i.style;
  if (e in Vn) {
    if (
      ((this.tfm = this.tfm || {}),
      e !== "transform" &&
        ((e = kn[e] || e),
        ~e.indexOf(",")
          ? e.split(",").forEach(function (o) {
              return (r.tfm[o] = On(i, o));
            })
          : (this.tfm[e] = i._gsap.x ? i._gsap[e] : On(i, e))),
      this.props.indexOf(Ye) >= 0)
    )
      return;
    (i._gsap.svg &&
      ((this.svgo = i.getAttribute("data-svg-origin")),
      this.props.push(ln, n, "")),
      (e = Ye));
  }
  (s || n) && this.props.push(e, n, s[e]);
};
var g1 = function (e) {
  e.translate &&
    (e.removeProperty("translate"),
    e.removeProperty("scale"),
    e.removeProperty("rotate"));
};
var mz = function () {
  var e = this.props,
    n = this.target,
    r = n.style,
    i = n._gsap,
    s,
    o;
  for (s = 0; s < e.length; s += 3)
    e[s + 1]
      ? (n[e[s]] = e[s + 2])
      : e[s + 2]
        ? (r[e[s]] = e[s + 2])
        : r.removeProperty(e[s].replace($u, "-$1").toLowerCase());
  if (this.tfm) {
    for (o in this.tfm) i[o] = this.tfm[o];
    (i.svg &&
      (i.renderTransform(), n.setAttribute("data-svg-origin", this.svgo || "")),
      (s = qu()),
      s && !s.isStart && !r[Ye] && (g1(r), (i.uncache = 1)));
  }
};
var v1 = function (e, n) {
  var r = { target: e, props: [], revert: mz, save: pz };
  return (
    n &&
      n.split(",").forEach(function (i) {
        return r.save(i);
      }),
    r
  );
};
var b1;
var Dc = function (e, n) {
  var r = ri.createElementNS
    ? ri.createElementNS(
        (n || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
        e,
      )
    : ri.createElement(e);
  return r.style ? r : ri.createElement(e);
};
var xn = function t(e, n, r) {
  var i = getComputedStyle(e);
  return (
    i[n] ||
    i.getPropertyValue(n.replace($u, "-$1").toLowerCase()) ||
    i.getPropertyValue(n) ||
    (!r && t(e, Br(n) || n, 1)) ||
    ""
  );
};
var Vd = "O,Moz,ms,Ms,Webkit".split(",");
var Br = function (e, n, r) {
  var i = n || Ni,
    s = i.style,
    o = 5;
  if (e in s && !r) return e;
  for (e = e.charAt(0).toUpperCase() + e.substr(1); o-- && !(Vd[o] + e in s); );
  return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? Vd[o] : "") + e;
};
var Nc = function () {
  nz() &&
    window.document &&
    ((Nd = window),
    (ri = Nd.document),
    (wr = ri.documentElement),
    (Ni = Dc("div") || { style: {} }),
    Dc("div"),
    (Ye = Br(Ye)),
    (ln = Ye + "Origin"),
    (Ni.style.cssText =
      "border-width:0;line-height:0;position:absolute;padding:0"),
    (b1 = !!Br("perspective")),
    (qu = Vt.core.reverting),
    (Gu = 1));
};
var Sl = function t(e) {
  var n = Dc(
      "svg",
      (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) ||
        "http://www.w3.org/2000/svg",
    ),
    r = this.parentNode,
    i = this.nextSibling,
    s = this.style.cssText,
    o;
  if (
    (wr.appendChild(n), n.appendChild(this), (this.style.display = "block"), e)
  )
    try {
      ((o = this.getBBox()),
        (this._gsapBBox = this.getBBox),
        (this.getBBox = t));
    } catch {}
  else this._gsapBBox && (o = this._gsapBBox());
  return (
    r && (i ? r.insertBefore(this, i) : r.appendChild(this)),
    wr.removeChild(n),
    (this.style.cssText = s),
    o
  );
};
var Hd = function (e, n) {
  for (var r = n.length; r--; )
    if (e.hasAttribute(n[r])) return e.getAttribute(n[r]);
};
var _1 = function (e) {
  var n;
  try {
    n = e.getBBox();
  } catch {
    n = Sl.call(e, !0);
  }
  return (
    (n && (n.width || n.height)) || e.getBBox === Sl || (n = Sl.call(e, !0)),
    n && !n.width && !n.x && !n.y
      ? {
          x: +Hd(e, ["x", "cx", "x1"]) || 0,
          y: +Hd(e, ["y", "cy", "y1"]) || 0,
          width: 0,
          height: 0,
        }
      : n
  );
};
var y1 = function (e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _1(e));
};
var ks = function (e, n) {
  if (n) {
    var r = e.style;
    (n in Vn && n !== ln && (n = Ye),
      r.removeProperty
        ? ((n.substr(0, 2) === "ms" || n.substr(0, 6) === "webkit") &&
            (n = "-" + n),
          r.removeProperty(n.replace($u, "-$1").toLowerCase()))
        : r.removeAttribute(n));
  }
};
var si = function (e, n, r, i, s, o) {
  var a = new Ot(e._pt, n, r, 0, 1, o ? m1 : p1);
  return ((e._pt = a), (a.b = i), (a.e = s), e._props.push(r), a);
};
var jd = { deg: 1, rad: 1, turn: 1 };
var gz = { grid: 1, flex: 1 };
var _i = function t(e, n, r, i) {
  var s = parseFloat(r) || 0,
    o = (r + "").trim().substr((s + "").length) || "px",
    a = Ni.style,
    l = iz.test(n),
    c = e.tagName.toLowerCase() === "svg",
    u = (c ? "client" : "offset") + (l ? "Width" : "Height"),
    h = 100,
    f = i === "px",
    d = i === "%",
    p,
    m,
    g,
    x;
  return i === o || !s || jd[i] || jd[o]
    ? s
    : (o !== "px" && !f && (s = t(e, n, r, "px")),
      (x = e.getCTM && y1(e)),
      (d || o === "%") && (Vn[n] || ~n.indexOf("adius"))
        ? ((p = x ? e.getBBox()[l ? "width" : "height"] : e[u]),
          Je(d ? (s / p) * h : (s / 100) * p))
        : ((a[l ? "width" : "height"] = h + (f ? o : i)),
          (m =
            ~n.indexOf("adius") || (i === "em" && e.appendChild && !c)
              ? e
              : e.parentNode),
          x && (m = (e.ownerSVGElement || {}).parentNode),
          (!m || m === ri || !m.appendChild) && (m = ri.body),
          (g = m._gsap),
          g && d && g.width && l && g.time === Dt.time && !g.uncache
            ? Je((s / g.width) * h)
            : ((d || o === "%") &&
                !gz[xn(m, "display")] &&
                (a.position = xn(e, "position")),
              m === e && (a.position = "static"),
              m.appendChild(Ni),
              (p = Ni[u]),
              m.removeChild(Ni),
              (a.position = "absolute"),
              l && d && ((g = Hi(m)), (g.time = Dt.time), (g.width = m[u])),
              Je(f ? (p * s) / h : p && s ? (h / p) * s : 0))));
};
var On = function (e, n, r, i) {
  var s;
  return (
    Gu || Nc(),
    n in kn &&
      n !== "transform" &&
      ((n = kn[n]), ~n.indexOf(",") && (n = n.split(",")[0])),
    Vn[n] && n !== "transform"
      ? ((s = Is(e, i)),
        (s =
          n !== "transformOrigin"
            ? s[n]
            : s.svg
              ? s.origin
              : Yo(xn(e, ln)) + " " + s.zOrigin + "px"))
      : ((s = e.style[n]),
        (!s || s === "auto" || i || ~(s + "").indexOf("calc(")) &&
          (s =
            (Xo[n] && Xo[n](e, n, r)) ||
            xn(e, n) ||
            Nv(e, n) ||
            (n === "opacity" ? 1 : 0))),
    r && !~(s + "").trim().indexOf(" ") ? _i(e, n, s, r) + r : s
  );
};
var vz = function (e, n, r, i) {
  if (!r || r === "none") {
    var s = Br(n, e, 1),
      o = s && xn(e, s, 1);
    o && o !== r
      ? ((n = s), (r = o))
      : n === "borderColor" && (r = xn(e, "borderTopColor"));
  }
  var a = new Ot(this._pt, e.style, n, 0, 1, f1),
    l = 0,
    c = 0,
    u,
    h,
    f,
    d,
    p,
    m,
    g,
    x,
    b,
    _,
    v,
    y;
  if (
    ((a.b = r),
    (a.e = i),
    (r += ""),
    (i += ""),
    i === "auto" && ((e.style[n] = i), (i = xn(e, n) || i), (e.style[n] = r)),
    (u = [r, i]),
    t1(u),
    (r = u[0]),
    (i = u[1]),
    (f = r.match(hr) || []),
    (y = i.match(hr) || []),
    y.length)
  ) {
    for (; (h = hr.exec(i)); )
      ((g = h[0]),
        (b = i.substring(l, h.index)),
        p
          ? (p = (p + 1) % 5)
          : (b.substr(-5) === "rgba(" || b.substr(-5) === "hsla(") && (p = 1),
        g !== (m = f[c++] || "") &&
          ((d = parseFloat(m) || 0),
          (v = m.substr((d + "").length)),
          g.charAt(1) === "=" && (g = xr(d, g) + v),
          (x = parseFloat(g)),
          (_ = g.substr((x + "").length)),
          (l = hr.lastIndex - _.length),
          _ ||
            ((_ = _ || Nt.units[n] || v),
            l === i.length && ((i += _), (a.e += _))),
          v !== _ && (d = _i(e, n, m, _) || 0),
          (a._pt = {
            _next: a._pt,
            p: b || c === 1 ? b : ",",
            s: d,
            c: x - d,
            m: (p && p < 4) || n === "zIndex" ? Math.round : 0,
          })));
    a.c = l < i.length ? i.substring(l, i.length) : "";
  } else a.r = n === "display" && i === "none" ? m1 : p1;
  return (Mv.test(i) && (a.e = 0), (this._pt = a), a);
};
var Wd = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%",
};
var bz = function (e) {
  var n = e.split(" "),
    r = n[0],
    i = n[1] || "50%";
  return (
    (r === "top" || r === "bottom" || i === "left" || i === "right") &&
      ((e = r), (r = i), (i = e)),
    (n[0] = Wd[r] || r),
    (n[1] = Wd[i] || i),
    n.join(" ")
  );
};
var _z = function (e, n) {
  if (n.tween && n.tween._time === n.tween._dur) {
    var r = n.t,
      i = r.style,
      s = n.u,
      o = r._gsap,
      a,
      l,
      c;
    if (s === "all" || s === !0) ((i.cssText = ""), (l = 1));
    else
      for (s = s.split(","), c = s.length; --c > -1; )
        ((a = s[c]),
          Vn[a] && ((l = 1), (a = a === "transformOrigin" ? ln : Ye)),
          ks(r, a));
    l &&
      (ks(r, Ye),
      o &&
        (o.svg && r.removeAttribute("transform"),
        Is(r, 1),
        (o.uncache = 1),
        g1(i)));
  }
};
var Xo = {
  clearProps: function (e, n, r, i, s) {
    if (s.data !== "isFromStart") {
      var o = (e._pt = new Ot(e._pt, n, r, 0, 0, _z));
      return ((o.u = i), (o.pr = -10), (o.tween = s), e._props.push(r), 1);
    }
  },
};
var Ls = [1, 0, 0, 1, 0, 0];
var x1 = {};
var w1 = function (e) {
  return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
};
var Gd = function (e) {
  var n = xn(e, Ye);
  return w1(n) ? Ls : n.substr(7).match(Ov).map(Je);
};
var Xu = function (e, n) {
  var r = e._gsap || Hi(e),
    i = e.style,
    s = Gd(e),
    o,
    a,
    l,
    c;
  return r.svg && e.getAttribute("transform")
    ? ((l = e.transform.baseVal.consolidate().matrix),
      (s = [l.a, l.b, l.c, l.d, l.e, l.f]),
      s.join(",") === "1,0,0,1,0,0" ? Ls : s)
    : (s === Ls &&
        !e.offsetParent &&
        e !== wr &&
        !r.svg &&
        ((l = i.display),
        (i.display = "block"),
        (o = e.parentNode),
        (!o || !e.offsetParent) &&
          ((c = 1), (a = e.nextElementSibling), wr.appendChild(e)),
        (s = Gd(e)),
        l ? (i.display = l) : ks(e, "display"),
        c &&
          (a
            ? o.insertBefore(e, a)
            : o
              ? o.appendChild(e)
              : wr.removeChild(e))),
      n && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
};
var Uc = function (e, n, r, i, s, o) {
  var a = e._gsap,
    l = s || Xu(e, !0),
    c = a.xOrigin || 0,
    u = a.yOrigin || 0,
    h = a.xOffset || 0,
    f = a.yOffset || 0,
    d = l[0],
    p = l[1],
    m = l[2],
    g = l[3],
    x = l[4],
    b = l[5],
    _ = n.split(" "),
    v = parseFloat(_[0]) || 0,
    y = parseFloat(_[1]) || 0,
    w,
    P,
    T,
    R;
  (r
    ? l !== Ls &&
      (P = d * g - p * m) &&
      ((T = v * (g / P) + y * (-m / P) + (m * b - g * x) / P),
      (R = v * (-p / P) + y * (d / P) - (d * b - p * x) / P),
      (v = T),
      (y = R))
    : ((w = _1(e)),
      (v = w.x + (~_[0].indexOf("%") ? (v / 100) * w.width : v)),
      (y = w.y + (~(_[1] || _[0]).indexOf("%") ? (y / 100) * w.height : y))),
    i || (i !== !1 && a.smooth)
      ? ((x = v - c),
        (b = y - u),
        (a.xOffset = h + (x * d + b * m) - x),
        (a.yOffset = f + (x * p + b * g) - b))
      : (a.xOffset = a.yOffset = 0),
    (a.xOrigin = v),
    (a.yOrigin = y),
    (a.smooth = !!i),
    (a.origin = n),
    (a.originIsAbsolute = !!r),
    (e.style[ln] = "0px 0px"),
    o &&
      (si(o, a, "xOrigin", c, v),
      si(o, a, "yOrigin", u, y),
      si(o, a, "xOffset", h, a.xOffset),
      si(o, a, "yOffset", f, a.yOffset)),
    e.setAttribute("data-svg-origin", v + " " + y));
};
var Is = function (e, n) {
  var r = e._gsap || new s1(e);
  if ("x" in r && !n && !r.uncache) return r;
  var i = e.style,
    s = r.scaleX < 0,
    o = "px",
    a = "deg",
    l = getComputedStyle(e),
    c = xn(e, ln) || "0",
    u,
    h,
    f,
    d,
    p,
    m,
    g,
    x,
    b,
    _,
    v,
    y,
    w,
    P,
    T,
    R,
    k,
    D,
    M,
    z,
    S,
    A,
    I,
    B,
    $,
    ne,
    pe,
    ge,
    ve,
    ze,
    Ee,
    N;
  return (
    (u = h = f = m = g = x = b = _ = v = 0),
    (d = p = 1),
    (r.svg = !!(e.getCTM && y1(e))),
    l.translate &&
      ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") &&
        (i[Ye] =
          (l.translate !== "none"
            ? "translate3d(" +
              (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
              ") "
            : "") +
          (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") +
          (l.scale !== "none"
            ? "scale(" + l.scale.split(" ").join(",") + ") "
            : "") +
          (l[Ye] !== "none" ? l[Ye] : "")),
      (i.scale = i.rotate = i.translate = "none")),
    (P = Xu(e, r.svg)),
    r.svg &&
      (r.uncache
        ? (($ = e.getBBox()),
          (c = r.xOrigin - $.x + "px " + (r.yOrigin - $.y) + "px"),
          (B = ""))
        : (B = !n && e.getAttribute("data-svg-origin")),
      Uc(e, B || c, !!B || r.originIsAbsolute, r.smooth !== !1, P)),
    (y = r.xOrigin || 0),
    (w = r.yOrigin || 0),
    P !== Ls &&
      ((D = P[0]),
      (M = P[1]),
      (z = P[2]),
      (S = P[3]),
      (u = A = P[4]),
      (h = I = P[5]),
      P.length === 6
        ? ((d = Math.sqrt(D * D + M * M)),
          (p = Math.sqrt(S * S + z * z)),
          (m = D || M ? ar(M, D) * ki : 0),
          (b = z || S ? ar(z, S) * ki + m : 0),
          b && (p *= Math.abs(Math.cos(b * Sr))),
          r.svg && ((u -= y - (y * D + w * z)), (h -= w - (y * M + w * S))))
        : ((N = P[6]),
          (ze = P[7]),
          (pe = P[8]),
          (ge = P[9]),
          (ve = P[10]),
          (Ee = P[11]),
          (u = P[12]),
          (h = P[13]),
          (f = P[14]),
          (T = ar(N, ve)),
          (g = T * ki),
          T &&
            ((R = Math.cos(-T)),
            (k = Math.sin(-T)),
            (B = A * R + pe * k),
            ($ = I * R + ge * k),
            (ne = N * R + ve * k),
            (pe = A * -k + pe * R),
            (ge = I * -k + ge * R),
            (ve = N * -k + ve * R),
            (Ee = ze * -k + Ee * R),
            (A = B),
            (I = $),
            (N = ne)),
          (T = ar(-z, ve)),
          (x = T * ki),
          T &&
            ((R = Math.cos(-T)),
            (k = Math.sin(-T)),
            (B = D * R - pe * k),
            ($ = M * R - ge * k),
            (ne = z * R - ve * k),
            (Ee = S * k + Ee * R),
            (D = B),
            (M = $),
            (z = ne)),
          (T = ar(M, D)),
          (m = T * ki),
          T &&
            ((R = Math.cos(T)),
            (k = Math.sin(T)),
            (B = D * R + M * k),
            ($ = A * R + I * k),
            (M = M * R - D * k),
            (I = I * R - A * k),
            (D = B),
            (A = $)),
          g &&
            Math.abs(g) + Math.abs(m) > 359.9 &&
            ((g = m = 0), (x = 180 - x)),
          (d = Je(Math.sqrt(D * D + M * M + z * z))),
          (p = Je(Math.sqrt(I * I + N * N))),
          (T = ar(A, I)),
          (b = Math.abs(T) > 2e-4 ? T * ki : 0),
          (v = Ee ? 1 / (Ee < 0 ? -Ee : Ee) : 0)),
      r.svg &&
        ((B = e.getAttribute("transform")),
        (r.forceCSS = e.setAttribute("transform", "") || !w1(xn(e, Ye))),
        B && e.setAttribute("transform", B))),
    Math.abs(b) > 90 &&
      Math.abs(b) < 270 &&
      (s
        ? ((d *= -1), (b += m <= 0 ? 180 : -180), (m += m <= 0 ? 180 : -180))
        : ((p *= -1), (b += b <= 0 ? 180 : -180))),
    (n = n || r.uncache),
    (r.x =
      u -
      ((r.xPercent =
        u &&
        ((!n && r.xPercent) ||
          (Math.round(e.offsetWidth / 2) === Math.round(-u) ? -50 : 0)))
        ? (e.offsetWidth * r.xPercent) / 100
        : 0) +
      o),
    (r.y =
      h -
      ((r.yPercent =
        h &&
        ((!n && r.yPercent) ||
          (Math.round(e.offsetHeight / 2) === Math.round(-h) ? -50 : 0)))
        ? (e.offsetHeight * r.yPercent) / 100
        : 0) +
      o),
    (r.z = f + o),
    (r.scaleX = Je(d)),
    (r.scaleY = Je(p)),
    (r.rotation = Je(m) + a),
    (r.rotationX = Je(g) + a),
    (r.rotationY = Je(x) + a),
    (r.skewX = b + a),
    (r.skewY = _ + a),
    (r.transformPerspective = v + o),
    (r.zOrigin = parseFloat(c.split(" ")[2]) || 0) && (i[ln] = Yo(c)),
    (r.xOffset = r.yOffset = 0),
    (r.force3D = Nt.force3D),
    (r.renderTransform = r.svg ? xz : b1 ? S1 : yz),
    (r.uncache = 0),
    r
  );
};
var Yo = function (e) {
  return (e = e.split(" "))[0] + " " + e[1];
};
var Pl = function (e, n, r) {
  var i = vt(n);
  return Je(parseFloat(n) + parseFloat(_i(e, "x", r + "px", i))) + i;
};
var yz = function (e, n) {
  ((n.z = "0px"),
    (n.rotationY = n.rotationX = "0deg"),
    (n.force3D = 0),
    S1(e, n));
};
var Ri = "0deg";
var Zr = "0px";
var Oi = ") ";
var S1 = function (e, n) {
  var r = n || this,
    i = r.xPercent,
    s = r.yPercent,
    o = r.x,
    a = r.y,
    l = r.z,
    c = r.rotation,
    u = r.rotationY,
    h = r.rotationX,
    f = r.skewX,
    d = r.skewY,
    p = r.scaleX,
    m = r.scaleY,
    g = r.transformPerspective,
    x = r.force3D,
    b = r.target,
    _ = r.zOrigin,
    v = "",
    y = (x === "auto" && e && e !== 1) || x === !0;
  if (_ && (h !== Ri || u !== Ri)) {
    var w = parseFloat(u) * Sr,
      P = Math.sin(w),
      T = Math.cos(w),
      R;
    ((w = parseFloat(h) * Sr),
      (R = Math.cos(w)),
      (o = Pl(b, o, P * R * -_)),
      (a = Pl(b, a, -Math.sin(w) * -_)),
      (l = Pl(b, l, T * R * -_ + _)));
  }
  (g !== Zr && (v += "perspective(" + g + Oi),
    (i || s) && (v += "translate(" + i + "%, " + s + "%) "),
    (y || o !== Zr || a !== Zr || l !== Zr) &&
      (v +=
        l !== Zr || y
          ? "translate3d(" + o + ", " + a + ", " + l + ") "
          : "translate(" + o + ", " + a + Oi),
    c !== Ri && (v += "rotate(" + c + Oi),
    u !== Ri && (v += "rotateY(" + u + Oi),
    h !== Ri && (v += "rotateX(" + h + Oi),
    (f !== Ri || d !== Ri) && (v += "skew(" + f + ", " + d + Oi),
    (p !== 1 || m !== 1) && (v += "scale(" + p + ", " + m + Oi),
    (b.style[Ye] = v || "translate(0, 0)"));
};
var xz = function (e, n) {
  var r = n || this,
    i = r.xPercent,
    s = r.yPercent,
    o = r.x,
    a = r.y,
    l = r.rotation,
    c = r.skewX,
    u = r.skewY,
    h = r.scaleX,
    f = r.scaleY,
    d = r.target,
    p = r.xOrigin,
    m = r.yOrigin,
    g = r.xOffset,
    x = r.yOffset,
    b = r.forceCSS,
    _ = parseFloat(o),
    v = parseFloat(a),
    y,
    w,
    P,
    T,
    R;
  ((l = parseFloat(l)),
    (c = parseFloat(c)),
    (u = parseFloat(u)),
    u && ((u = parseFloat(u)), (c += u), (l += u)),
    l || c
      ? ((l *= Sr),
        (c *= Sr),
        (y = Math.cos(l) * h),
        (w = Math.sin(l) * h),
        (P = Math.sin(l - c) * -f),
        (T = Math.cos(l - c) * f),
        c &&
          ((u *= Sr),
          (R = Math.tan(c - u)),
          (R = Math.sqrt(1 + R * R)),
          (P *= R),
          (T *= R),
          u &&
            ((R = Math.tan(u)),
            (R = Math.sqrt(1 + R * R)),
            (y *= R),
            (w *= R))),
        (y = Je(y)),
        (w = Je(w)),
        (P = Je(P)),
        (T = Je(T)))
      : ((y = h), (T = f), (w = P = 0)),
    ((_ && !~(o + "").indexOf("px")) || (v && !~(a + "").indexOf("px"))) &&
      ((_ = _i(d, "x", o, "px")), (v = _i(d, "y", a, "px"))),
    (p || m || g || x) &&
      ((_ = Je(_ + p - (p * y + m * P) + g)),
      (v = Je(v + m - (p * w + m * T) + x))),
    (i || s) &&
      ((R = d.getBBox()),
      (_ = Je(_ + (i / 100) * R.width)),
      (v = Je(v + (s / 100) * R.height))),
    (R = "matrix(" + y + "," + w + "," + P + "," + T + "," + _ + "," + v + ")"),
    d.setAttribute("transform", R),
    b && (d.style[Ye] = R));
};
var wz = function (e, n, r, i, s) {
  var o = 360,
    a = st(s),
    l = parseFloat(s) * (a && ~s.indexOf("rad") ? ki : 1),
    c = l - i,
    u = i + c + "deg",
    h,
    f;
  return (
    a &&
      ((h = s.split("_")[1]),
      h === "short" && ((c %= o), c !== c % (o / 2) && (c += c < 0 ? o : -o)),
      h === "cw" && c < 0
        ? (c = ((c + o * Bd) % o) - ~~(c / o) * o)
        : h === "ccw" && c > 0 && (c = ((c - o * Bd) % o) - ~~(c / o) * o)),
    (e._pt = f = new Ot(e._pt, n, r, i, c, sz)),
    (f.e = u),
    (f.u = "deg"),
    e._props.push(r),
    f
  );
};
var qd = function (e, n) {
  for (var r in n) e[r] = n[r];
  return e;
};
var Sz = function (e, n, r) {
  var i = qd({}, r._gsap),
    s = "perspective,force3D,transformOrigin,svgOrigin",
    o = r.style,
    a,
    l,
    c,
    u,
    h,
    f,
    d,
    p;
  i.svg
    ? ((c = r.getAttribute("transform")),
      r.setAttribute("transform", ""),
      (o[Ye] = n),
      (a = Is(r, 1)),
      ks(r, Ye),
      r.setAttribute("transform", c))
    : ((c = getComputedStyle(r)[Ye]), (o[Ye] = n), (a = Is(r, 1)), (o[Ye] = c));
  for (l in Vn)
    ((c = i[l]),
      (u = a[l]),
      c !== u &&
        s.indexOf(l) < 0 &&
        ((d = vt(c)),
        (p = vt(u)),
        (h = d !== p ? _i(r, l, c, p) : parseFloat(c)),
        (f = parseFloat(u)),
        (e._pt = new Ot(e._pt, a, l, h, f - h, Ic)),
        (e._pt.u = p || 0),
        e._props.push(l)));
  qd(a, i);
};
Rt("padding,margin,Width,Radius", function (t, e) {
  var n = "Top",
    r = "Right",
    i = "Bottom",
    s = "Left",
    o = (e < 3 ? [n, r, i, s] : [n + s, n + r, i + r, i + s]).map(function (a) {
      return e < 2 ? t + a : "border" + a + t;
    });
  Xo[e > 1 ? "border" + t : t] = function (a, l, c, u, h) {
    var f, d;
    if (arguments.length < 4)
      return (
        (f = o.map(function (p) {
          return On(a, p, c);
        })),
        (d = f.join(" ")),
        d.split(f[0]).length === 5 ? f[0] : d
      );
    ((f = (u + "").split(" ")),
      (d = {}),
      o.forEach(function (p, m) {
        return (d[p] = f[m] = f[m] || f[((m - 1) / 2) | 0]);
      }),
      a.init(l, d, h));
  };
});
var P1 = {
  name: "css",
  register: Nc,
  targetTest: function (e) {
    return e.style && e.nodeType;
  },
  init: function (e, n, r, i, s) {
    var o = this._props,
      a = e.style,
      l = r.vars.startAt,
      c,
      u,
      h,
      f,
      d,
      p,
      m,
      g,
      x,
      b,
      _,
      v,
      y,
      w,
      P,
      T;
    (Gu || Nc(),
      (this.styles = this.styles || v1(e)),
      (T = this.styles.props),
      (this.tween = r));
    for (m in n)
      if (m !== "autoRound" && ((u = n[m]), !(Lt[m] && o1(m, n, r, i, e, s)))) {
        if (
          ((d = typeof u),
          (p = Xo[m]),
          d === "function" && ((u = u.call(r, i, e, s)), (d = typeof u)),
          d === "string" && ~u.indexOf("random(") && (u = Ms(u)),
          p)
        )
          p(this, e, m, u, r) && (P = 1);
        else if (m.substr(0, 2) === "--")
          ((c = (getComputedStyle(e).getPropertyValue(m) + "").trim()),
            (u += ""),
            (hi.lastIndex = 0),
            hi.test(c) || ((g = vt(c)), (x = vt(u))),
            x ? g !== x && (c = _i(e, m, c, x) + x) : g && (u += g),
            this.add(a, "setProperty", c, u, i, s, 0, 0, m),
            o.push(m),
            T.push(m, 0, a[m]));
        else if (d !== "undefined") {
          if (
            (l && m in l
              ? ((c = typeof l[m] == "function" ? l[m].call(r, i, e, s) : l[m]),
                st(c) && ~c.indexOf("random(") && (c = Ms(c)),
                vt(c + "") || (c += Nt.units[m] || vt(On(e, m)) || ""),
                (c + "").charAt(1) === "=" && (c = On(e, m)))
              : (c = On(e, m)),
            (f = parseFloat(c)),
            (b = d === "string" && u.charAt(1) === "=" && u.substr(0, 2)),
            b && (u = u.substr(2)),
            (h = parseFloat(u)),
            m in kn &&
              (m === "autoAlpha" &&
                (f === 1 && On(e, "visibility") === "hidden" && h && (f = 0),
                T.push("visibility", 0, a.visibility),
                si(
                  this,
                  a,
                  "visibility",
                  f ? "inherit" : "hidden",
                  h ? "inherit" : "hidden",
                  !h,
                )),
              m !== "scale" &&
                m !== "transform" &&
                ((m = kn[m]), ~m.indexOf(",") && (m = m.split(",")[0]))),
            (_ = m in Vn),
            _)
          ) {
            if (
              (this.styles.save(m),
              v ||
                ((y = e._gsap),
                (y.renderTransform && !n.parseTransform) ||
                  Is(e, n.parseTransform),
                (w = n.smoothOrigin !== !1 && y.smooth),
                (v = this._pt =
                  new Ot(this._pt, a, Ye, 0, 1, y.renderTransform, y, 0, -1)),
                (v.dep = 1)),
              m === "scale")
            )
              ((this._pt = new Ot(
                this._pt,
                y,
                "scaleY",
                y.scaleY,
                (b ? xr(y.scaleY, b + h) : h) - y.scaleY || 0,
                Ic,
              )),
                (this._pt.u = 0),
                o.push("scaleY", m),
                (m += "X"));
            else if (m === "transformOrigin") {
              (T.push(ln, 0, a[ln]),
                (u = bz(u)),
                y.svg
                  ? Uc(e, u, 0, w, 0, this)
                  : ((x = parseFloat(u.split(" ")[2]) || 0),
                    x !== y.zOrigin && si(this, y, "zOrigin", y.zOrigin, x),
                    si(this, a, m, Yo(c), Yo(u))));
              continue;
            } else if (m === "svgOrigin") {
              Uc(e, u, 1, w, 0, this);
              continue;
            } else if (m in x1) {
              wz(this, y, m, f, b ? xr(f, b + u) : u);
              continue;
            } else if (m === "smoothOrigin") {
              si(this, y, "smooth", y.smooth, u);
              continue;
            } else if (m === "force3D") {
              y[m] = u;
              continue;
            } else if (m === "transform") {
              Sz(this, u, e);
              continue;
            }
          } else m in a || (m = Br(m) || m);
          if (_ || ((h || h === 0) && (f || f === 0) && !rz.test(u) && m in a))
            ((g = (c + "").substr((f + "").length)),
              h || (h = 0),
              (x = vt(u) || (m in Nt.units ? Nt.units[m] : g)),
              g !== x && (f = _i(e, m, c, x)),
              (this._pt = new Ot(
                this._pt,
                _ ? y : a,
                m,
                f,
                (b ? xr(f, b + h) : h) - f,
                !_ && (x === "px" || m === "zIndex") && n.autoRound !== !1
                  ? az
                  : Ic,
              )),
              (this._pt.u = x || 0),
              g !== x && x !== "%" && ((this._pt.b = c), (this._pt.r = oz)));
          else if (m in a) vz.call(this, e, m, c, b ? b + u : u);
          else if (m in e) this.add(e, m, c || e[m], b ? b + u : u, i, s);
          else if (m !== "parseTransform") {
            Iu(m, u);
            continue;
          }
          (_ || (m in a ? T.push(m, 0, a[m]) : T.push(m, 1, c || e[m])),
            o.push(m));
        }
      }
    P && h1(this);
  },
  render: function (e, n) {
    if (n.tween._time || !qu())
      for (var r = n._pt; r; ) (r.r(e, r.d), (r = r._next));
    else n.styles.revert();
  },
  get: On,
  aliases: kn,
  getSetter: function (e, n, r) {
    var i = kn[n];
    return (
      i && i.indexOf(",") < 0 && (n = i),
      n in Vn && n !== ln && (e._gsap.x || On(e, "x"))
        ? r && Ud === r
          ? n === "scale"
            ? fz
            : uz
          : (Ud = r || {}) && (n === "scale" ? hz : dz)
        : e.style && !ku(e.style[n])
          ? lz
          : ~n.indexOf("-")
            ? cz
            : ju(e, n)
    );
  },
  core: { _removeProperty: ks, _getMatrix: Xu },
};
Vt.utils.checkPrefix = Br;
Vt.core.getStyleSaver = v1;
(function (t, e, n, r) {
  var i = Rt(t + "," + e + "," + n, function (s) {
    Vn[s] = 1;
  });
  (Rt(e, function (s) {
    ((Nt.units[s] = "deg"), (x1[s] = 1));
  }),
    (kn[i[13]] = t + "," + e),
    Rt(r, function (s) {
      var o = s.split(":");
      kn[o[1]] = i[o[0]];
    }));
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
);
Rt(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (t) {
    Nt.units[t] = "px";
  },
);
Vt.registerPlugin(P1);
var Ie = Vt.registerPlugin(P1) || Vt;
Ie.core.Tween;
class Pz {
  constructor() {
    ((this._emitter = {}),
      Xs(this._emitter),
      (this.on = this._emitter.on.bind(this._emitter)),
      (this.off = this._emitter.off.bind(this._emitter)),
      (this.emit = this._emitter.emit.bind(this._emitter)));
  }
}
const Pe = new Pz();
class T1 {
  constructor() {
    ((this.MAX_VERTICES = 256),
      (this.MAX_VERTICES_MASK = this.MAX_VERTICES - 1),
      (this.amplitude = 1),
      (this.scale = 1),
      (this.r = []));
    for (var e = 0; e < this.MAX_VERTICES; ++e) this.r.push(Math.random());
  }
  getVal(e) {
    var n = e * this.scale,
      r = Math.floor(n),
      i = n - r,
      s = i * i * (3 - 2 * i),
      o = r % this.MAX_VERTICES_MASK,
      a = (o + 1) % this.MAX_VERTICES_MASK,
      l = this.lerp(this.r[o], this.r[a], s);
    return l * this.amplitude;
  }
  lerp(e, n, r) {
    return e * (1 - r) + n * r;
  }
}
tt();
const L1 = {
  CONFIG_0: {
    IBLDiffuseFactor: { value: 1, params: { min: 0, max: 2, step: 0.01 } },
    IBLSpecularFactor: { value: 1, params: { min: 0, max: 2, step: 0.01 } },
    Environment: {
      value: "env_autoshop",
      params: {
        options: {
          default: "env_default",
          autoshop: "env_autoshop",
          papermill: "env_papermill",
          night_sky: "env_night_sky",
          coffe_shop: "env_coffe_shop",
          studio: "env_studio",
        },
      },
    },
    EnvironmentDiffuse: {
      value: "env_diffuse",
      params: { options: { default: "env_diffuse" } },
    },
    lightColor: { value: "#d84621", params: {} },
    lightPosition: {
      value: { x: -15, y: 10, z: -5 },
      params: { x: { step: 1 }, y: { step: 1 }, z: { step: 1 } },
    },
    emissiveColor: { value: "#000000", params: {} },
    FogColor: { value: "#000000", params: {} },
    FogNear: { value: 3.5, params: { min: 0, max: 50, step: 0.01 } },
    FogFar: { value: 6, params: { min: 0, max: 50, step: 0.01 } },
    lightPower: { value: 5, params: { min: 0, max: 10, step: 0.01 } },
    Alpha: { value: 1, params: { min: 0, max: 1, step: 0.01 } },
    Debug: {
      value: "disabled",
      params: {
        options: {
          disabled: "disabled",
          baseColor: "baseColor",
          metallic: "metallic",
          roughness: "roughness",
          specRef: "specRef",
          geomOcc: "geomOcc",
          mcrfctDist: "mcrfctDist",
          spec: "spec",
          mathDiff: "mathDiff",
        },
      },
    },
    OverwriteEnvIBL: { value: !1, type: "bool" },
    EnvIBL: { value: "placeholder", type: "input-image", input: null },
  },
};
xe.addBlade(L1.CONFIG_0, "PBR_CONFIG", 0);
export {
  T1,
  xa,
  tt,
  xt,
  vi,
  xi,
  Ji,
  er,
  xe,
  Pe,
  Ie,
  je,
  Mu,
  ke,
  G3 as Renderer,
  Ea as Transform,
  oA as Camera,
};
