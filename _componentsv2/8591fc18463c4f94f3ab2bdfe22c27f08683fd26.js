const sd = () => Promise.resolve().then(() => id), { Fragment: Ns, jsx: u, jsxs: p } = globalThis.__GLOBALS__.ReactJSXRuntime;
"use" in globalThis.__GLOBALS__.React || (globalThis.__GLOBALS__.React.use = () => {
  throw new Error("`use` is not available in this version of React. Make currently only supports React 18, but `use` is only available in React 19+.");
});
function Zi(t) {
  const e = t?.props?._fgT, n = typeof e == "function" || typeof e == "string" || typeof e == "object" && e !== null && "$$typeof" in e;
  return globalThis.__GLOBALS__.React.isValidElement(t) && n;
}
function Et(t) {
  return globalThis.__GLOBALS__.React.isValidElement(t) && t.type === "fg-txt";
}
function Qi(t) {
  const { _fgT: e, _fgS: n, _fgB: i, _fgD: r, ...o } = t.props;
  return globalThis.__GLOBALS__.React.createElement(e, {
    ...o,
    key: t.key
  }, o.children);
}
function Kt(t) {
  return Zi(t) ? Qi(t) : Et(t) ? t.props.children : t;
}
const Vt = globalThis.__GLOBALS__.React.Children, Hs = {
  map(t, e, n) {
    return Vt.map(t, (i, r) => {
      const o = Kt(i);
      return Et(i) ? null : e.call(n, o, r);
    });
  },
  forEach(t, e, n) {
    Vt.forEach(t, (i, r) => {
      if (Et(i))
        return;
      const o = Kt(i);
      e.call(n, o, r);
    });
  },
  count(t) {
    let e = 0;
    return Vt.forEach(t, (n) => {
      Et(n) || e++;
    }), e;
  },
  toArray(t) {
    const e = [];
    return Vt.forEach(t, (n) => {
      Et(n) || e.push(Kt(n));
    }), e;
  },
  only(t) {
    const e = Vt.only(t);
    return Kt(e);
  }
}, he = [
  "_fgT",
  "_fgS",
  "_fgB",
  "_fgD"
];
function Os(t) {
  if (t == null || typeof t != "object") return t;
  const e = Object.keys(t);
  let n = !1;
  for (let r = 0; r < he.length; r++)
    if (he[r] in t) {
      n = !0;
      break;
    }
  if (!n) return t;
  const i = {};
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    he.indexOf(o) === -1 && (i[o] = t[o]);
  }
  return i;
}
const jn = globalThis.__GLOBALS__.React.cloneElement, Us = (t, ...e) => {
  if (Zi(t)) {
    const n = Qi(t), i = e[0];
    return i != null && typeof i == "object" && (e = [
      Os(i),
      ...e.slice(1)
    ]), jn(n, ...e);
  }
  return jn(t, ...e);
};
({
  ...globalThis.__GLOBALS__.React
});
const { Component: tr, createContext: Ct, createElement: Gs, createFactory: od, createRef: ad, forwardRef: _s, Fragment: er, isValidElement: Ys, lazy: ld, memo: cd, Profiler: ud, PureComponent: dd, startTransition: hd, StrictMode: fd, Suspense: pd, use: md, useCallback: $e, useContext: B, useDebugValue: gd, useDeferredValue: yd, useEffect: Z, useId: Je, useImperativeHandle: xd, useInsertionEffect: nr, useLayoutEffect: Xs, useMemo: pt, useReducer: bd, useRef: O, useState: U, useSyncExternalStore: vd, useTransition: Td, version: wd, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Sd } = globalThis.__GLOBALS__.React;
function Ks() {
  const [t, e] = U(!1), [n, i] = U(!1);
  Z(() => {
    const o = () => e(window.scrollY > 40);
    return window.addEventListener("scroll", o), () => window.removeEventListener("scroll", o);
  }, []);
  const r = ["Servicios", "Nosotros", "Equipo", "Testimonios", "Contacto"];
  return /* @__PURE__ */ p(
    "nav",
    {
      style: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.4s, padding 0.4s, box-shadow 0.4s",
        background: t ? "rgba(8,8,8,0.96)" : "transparent",
        backdropFilter: t ? "blur(12px)" : "none",
        boxShadow: t ? "0 1px 0 rgba(201,168,76,0.15)" : "none",
        padding: t ? "12px 0" : "24px 0"
      },
      children: [
        /* @__PURE__ */ p("div", { style: { maxWidth: 1280, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
          /* @__PURE__ */ p("a", { href: "#", style: { display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }, children: [
            /* @__PURE__ */ u("div", { style: {
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #C9A84C, #E8C96A)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }, children: /* @__PURE__ */ p("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", children: [
              /* @__PURE__ */ u("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z", fill: "#0a0a0a" }),
              /* @__PURE__ */ u("path", { d: "M12 6v6l4 2-1 1.73-5-2.5V6H12z", fill: "#0a0a0a" })
            ] }) }),
            /* @__PURE__ */ p("span", { style: { fontFamily: "'Playfair Display', serif", fontSize: 20, color: "#fff", letterSpacing: "0.04em" }, children: [
              "KINESIS",
              /* @__PURE__ */ u("span", { style: { color: "#C9A84C" }, children: "PRO" })
            ] })
          ] }),
          /* @__PURE__ */ u("ul", { style: { display: "flex", gap: 36, listStyle: "none", margin: 0, padding: 0 }, className: "hidden md:flex", children: r.map((o) => /* @__PURE__ */ u("li", { children: /* @__PURE__ */ u(
            "a",
            {
              href: `#${o.toLowerCase()}`,
              style: {
                fontFamily: "'Inter', sans-serif",
                fontSize: 13,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.75)",
                textDecoration: "none",
                transition: "color 0.2s"
              },
              onMouseEnter: (s) => s.currentTarget.style.color = "#C9A84C",
              onMouseLeave: (s) => s.currentTarget.style.color = "rgba(255,255,255,0.75)",
              children: o
            }
          ) }, o)) }),
          /* @__PURE__ */ u(
            "a",
            {
              href: "#contacto",
              className: "hidden md:inline-flex",
              style: {
                fontFamily: "'Inter', sans-serif",
                fontSize: 13,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#0a0a0a",
                background: "linear-gradient(135deg, #C9A84C, #E8C96A)",
                padding: "10px 24px",
                borderRadius: 2,
                textDecoration: "none",
                fontWeight: 600,
                transition: "opacity 0.2s, transform 0.2s"
              },
              onMouseEnter: (o) => {
                o.currentTarget.style.opacity = "0.85", o.currentTarget.style.transform = "translateY(-1px)";
              },
              onMouseLeave: (o) => {
                o.currentTarget.style.opacity = "1", o.currentTarget.style.transform = "translateY(0)";
              },
              children: "Reservar Cita"
            }
          ),
          /* @__PURE__ */ p(
            "button",
            {
              className: "md:hidden",
              onClick: () => i(!n),
              style: { background: "none", border: "none", cursor: "pointer", padding: 4 },
              children: [
                /* @__PURE__ */ u("div", { style: { width: 24, height: 2, background: "#fff", marginBottom: 5, transition: "transform 0.3s", transform: n ? "rotate(45deg) translate(5px, 5px)" : "none" } }),
                /* @__PURE__ */ u("div", { style: { width: 24, height: 2, background: "#fff", marginBottom: 5, opacity: n ? 0 : 1, transition: "opacity 0.3s" } }),
                /* @__PURE__ */ u("div", { style: { width: 24, height: 2, background: "#fff", transition: "transform 0.3s", transform: n ? "rotate(-45deg) translate(5px, -5px)" : "none" } })
              ]
            }
          )
        ] }),
        n && /* @__PURE__ */ p("div", { style: { background: "rgba(8,8,8,0.98)", padding: "20px 32px 32px", borderTop: "1px solid rgba(201,168,76,0.2)" }, children: [
          r.map((o) => /* @__PURE__ */ u(
            "a",
            {
              href: `#${o.toLowerCase()}`,
              onClick: () => i(!1),
              style: {
                display: "block",
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.8)",
                textDecoration: "none",
                padding: "12px 0",
                borderBottom: "1px solid rgba(255,255,255,0.06)"
              },
              children: o
            },
            o
          )),
          /* @__PURE__ */ u(
            "a",
            {
              href: "#contacto",
              onClick: () => i(!1),
              style: {
                display: "inline-block",
                marginTop: 20,
                fontFamily: "'Inter', sans-serif",
                fontSize: 13,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#0a0a0a",
                background: "linear-gradient(135deg, #C9A84C, #E8C96A)",
                padding: "12px 28px",
                borderRadius: 2,
                textDecoration: "none",
                fontWeight: 600
              },
              children: "Reservar Cita"
            }
          )
        ] })
      ]
    }
  );
}
const qs = "https://images.unsplash.com/photo-1764314138160-5f04f4a50dae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaW90aGVyYXB5JTIwdHJlYXRtZW50JTIwcHJvZmVzc2lvbmFsJTIwY2xpbmljfGVufDF8fHx8MTc3NTE2MTY5OXww&ixlib=rb-4.1.0&q=80&w=1920";
function $s() {
  const t = O(null);
  return Z(() => {
    const e = () => {
      if (t.current) {
        const n = window.scrollY;
        t.current.style.transform = `translateY(${n * 0.35}px)`;
      }
    };
    return window.addEventListener("scroll", e, { passive: !0 }), () => window.removeEventListener("scroll", e);
  }, []), /* @__PURE__ */ p("section", { style: { position: "relative", height: "100vh", minHeight: 600, overflow: "hidden", background: "#080808" }, children: [
    /* @__PURE__ */ u(
      "div",
      {
        ref: t,
        style: {
          position: "absolute",
          inset: "-20% 0 -20% 0",
          backgroundImage: `url(${qs})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          willChange: "transform"
        }
      }
    ),
    /* @__PURE__ */ u("div", { style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(105deg, rgba(5,5,5,0.88) 0%, rgba(8,8,8,0.65) 50%, rgba(5,5,5,0.4) 100%)"
    } }),
    /* @__PURE__ */ u("div", { style: {
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      width: 3,
      background: "linear-gradient(to bottom, transparent, #C9A84C 30%, #C9A84C 70%, transparent)"
    } }),
    /* @__PURE__ */ p("div", { style: {
      position: "relative",
      zIndex: 2,
      maxWidth: 1280,
      margin: "0 auto",
      padding: "0 32px",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }, children: [
      /* @__PURE__ */ p("div", { style: { maxWidth: 720 }, children: [
        /* @__PURE__ */ p("div", { style: { display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }, children: [
          /* @__PURE__ */ u("div", { style: { width: 40, height: 1, background: "#C9A84C" } }),
          /* @__PURE__ */ u("span", { style: {
            fontFamily: "'Inter', sans-serif",
            fontSize: 12,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#C9A84C",
            fontWeight: 500
          }, children: "Fisioterapia de Élite — Madrid" })
        ] }),
        /* @__PURE__ */ p("h1", { style: {
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(44px, 7vw, 90px)",
          lineHeight: 1.05,
          color: "#fff",
          margin: "0 0 10px",
          fontWeight: 700
        }, children: [
          "Recupera",
          /* @__PURE__ */ u("br", {}),
          /* @__PURE__ */ u("em", { style: { color: "#C9A84C", fontStyle: "italic" }, children: "tu fuerza." })
        ] }),
        /* @__PURE__ */ u("h1", { style: {
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(44px, 7vw, 90px)",
          lineHeight: 1.05,
          color: "rgba(255,255,255,0.45)",
          margin: "0 0 36px",
          fontWeight: 700
        }, children: "Supera tus límites." }),
        /* @__PURE__ */ u("p", { style: {
          fontFamily: "'Inter', sans-serif",
          fontSize: "clamp(15px, 1.6vw, 18px)",
          lineHeight: 1.75,
          color: "rgba(255,255,255,0.65)",
          maxWidth: 520,
          margin: "0 0 48px",
          fontWeight: 300
        }, children: "Tratamientos personalizados de alto rendimiento para deportistas y personas que exigen los mejores resultados. Ciencia, precisión y excelencia en cada sesión." }),
        /* @__PURE__ */ p("div", { style: { display: "flex", gap: 16, flexWrap: "wrap" }, children: [
          /* @__PURE__ */ u(
            "a",
            {
              href: "#contacto",
              style: {
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#0a0a0a",
                fontWeight: 600,
                background: "linear-gradient(135deg, #C9A84C, #E8C96A)",
                padding: "16px 40px",
                borderRadius: 2,
                textDecoration: "none",
                display: "inline-block",
                transition: "transform 0.2s, box-shadow 0.2s",
                boxShadow: "0 8px 32px rgba(201,168,76,0.35)"
              },
              onMouseEnter: (e) => {
                e.currentTarget.style.transform = "translateY(-2px)", e.currentTarget.style.boxShadow = "0 12px 40px rgba(201,168,76,0.5)";
              },
              onMouseLeave: (e) => {
                e.currentTarget.style.transform = "translateY(0)", e.currentTarget.style.boxShadow = "0 8px 32px rgba(201,168,76,0.35)";
              },
              children: "Primera Consulta Gratuita"
            }
          ),
          /* @__PURE__ */ u(
            "a",
            {
              href: "#servicios",
              style: {
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#fff",
                fontWeight: 500,
                border: "1px solid rgba(255,255,255,0.3)",
                padding: "16px 40px",
                borderRadius: 2,
                textDecoration: "none",
                display: "inline-block",
                transition: "border-color 0.2s, background 0.2s",
                background: "rgba(255,255,255,0.04)"
              },
              onMouseEnter: (e) => {
                e.currentTarget.style.borderColor = "#C9A84C", e.currentTarget.style.background = "rgba(201,168,76,0.08)";
              },
              onMouseLeave: (e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)", e.currentTarget.style.background = "rgba(255,255,255,0.04)";
              },
              children: "Ver Servicios"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ p("div", { style: {
        position: "absolute",
        bottom: 40,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8
      }, children: [
        /* @__PURE__ */ u("span", { style: { fontFamily: "'Inter', sans-serif", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }, children: "Scroll" }),
        /* @__PURE__ */ u("div", { style: {
          width: 1,
          height: 48,
          background: "linear-gradient(to bottom, rgba(201,168,76,0.8), transparent)",
          animation: "scrollPulse 2s ease-in-out infinite"
        } })
      ] })
    ] }),
    /* @__PURE__ */ u("style", { children: `
        @keyframes scrollPulse {
          0%, 100% { opacity: 1; transform: scaleY(1); }
          50% { opacity: 0.4; transform: scaleY(0.6); }
        }
      ` })
  ] });
}
const Ze = Ct({});
function Qe(t) {
  const e = O(null);
  return e.current === null && (e.current = t()), e.current;
}
const tn = typeof window < "u", ir = tn ? Xs : Z, le = /* @__PURE__ */ Ct(null);
function en(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function nn(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
const Q = (t, e, n) => n > e ? e : n < t ? t : n;
let rn = () => {
};
const tt = {}, rr = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
function sr(t) {
  return typeof t == "object" && t !== null;
}
const or = (t) => /^0[^.\s]+$/u.test(t);
// @__NO_SIDE_EFFECTS__
function sn(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const K = /* @__NO_SIDE_EFFECTS__ */ (t) => t, Js = (t, e) => (n) => e(t(n)), Gt = (...t) => t.reduce(Js), zt = /* @__NO_SIDE_EFFECTS__ */ (t, e, n) => {
  const i = e - t;
  return i === 0 ? 1 : (n - t) / i;
};
class on {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return en(this.subscriptions, e), () => nn(this.subscriptions, e);
  }
  notify(e, n, i) {
    const r = this.subscriptions.length;
    if (r)
      if (r === 1)
        this.subscriptions[0](e, n, i);
      else
        for (let o = 0; o < r; o++) {
          const s = this.subscriptions[o];
          s && s(e, n, i);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const $ = /* @__NO_SIDE_EFFECTS__ */ (t) => t * 1e3, X = /* @__NO_SIDE_EFFECTS__ */ (t) => t / 1e3;
function ar(t, e) {
  return e ? t * (1e3 / e) : 0;
}
const lr = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t, Zs = 1e-7, Qs = 12;
function to(t, e, n, i, r) {
  let o, s, a = 0;
  do
    s = e + (n - e) / 2, o = lr(s, i, r) - t, o > 0 ? n = s : e = s;
  while (Math.abs(o) > Zs && ++a < Qs);
  return s;
}
function _t(t, e, n, i) {
  if (t === e && n === i)
    return K;
  const r = (o) => to(o, 0, 1, t, n);
  return (o) => o === 0 || o === 1 ? o : lr(r(o), e, i);
}
const cr = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2, ur = (t) => (e) => 1 - t(1 - e), dr = /* @__PURE__ */ _t(0.33, 1.53, 0.69, 0.99), an = /* @__PURE__ */ ur(dr), hr = /* @__PURE__ */ cr(an), fr = (t) => (t *= 2) < 1 ? 0.5 * an(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))), ln = (t) => 1 - Math.sin(Math.acos(t)), pr = ur(ln), mr = cr(ln), eo = /* @__PURE__ */ _t(0.42, 0, 1, 1), no = /* @__PURE__ */ _t(0, 0, 0.58, 1), gr = /* @__PURE__ */ _t(0.42, 0, 0.58, 1), io = (t) => Array.isArray(t) && typeof t[0] != "number", yr = (t) => Array.isArray(t) && typeof t[0] == "number", ro = {
  linear: K,
  easeIn: eo,
  easeInOut: gr,
  easeOut: no,
  circIn: ln,
  circInOut: mr,
  circOut: pr,
  backIn: an,
  backInOut: hr,
  backOut: dr,
  anticipate: fr
}, so = (t) => typeof t == "string", Bn = (t) => {
  if (yr(t)) {
    rn(t.length === 4);
    const [e, n, i, r] = t;
    return _t(e, n, i, r);
  } else if (so(t))
    return ro[t];
  return t;
}, qt = [
  "setup",
  // Compute
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "preUpdate",
  // Compute
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
];
function oo(t, e) {
  let n = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set(), r = !1, o = !1;
  const s = /* @__PURE__ */ new WeakSet();
  let a = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function l(c) {
    s.has(c) && (d.schedule(c), t()), c(a);
  }
  const d = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (c, h = !1, f = !1) => {
      const g = f && r ? n : i;
      return h && s.add(c), g.has(c) || g.add(c), c;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (c) => {
      i.delete(c), s.delete(c);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (c) => {
      if (a = c, r) {
        o = !0;
        return;
      }
      r = !0, [n, i] = [i, n], n.forEach(l), n.clear(), r = !1, o && (o = !1, d.process(c));
    }
  };
  return d;
}
const ao = 40;
function xr(t, e) {
  let n = !1, i = !0;
  const r = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, o = () => n = !0, s = qt.reduce((b, M) => (b[M] = oo(o), b), {}), { setup: a, read: l, resolveKeyframes: d, preUpdate: c, update: h, preRender: f, render: m, postRender: g } = s, x = () => {
    const b = tt.useManualTiming ? r.timestamp : performance.now();
    n = !1, tt.useManualTiming || (r.delta = i ? 1e3 / 60 : Math.max(Math.min(b - r.timestamp, ao), 1)), r.timestamp = b, r.isProcessing = !0, a.process(r), l.process(r), d.process(r), c.process(r), h.process(r), f.process(r), m.process(r), g.process(r), r.isProcessing = !1, n && e && (i = !1, t(x));
  }, v = () => {
    n = !0, i = !0, r.isProcessing || t(x);
  };
  return { schedule: qt.reduce((b, M) => {
    const w = s[M];
    return b[M] = (A, P = !1, C = !1) => (n || v(), w.schedule(A, P, C)), b;
  }, {}), cancel: (b) => {
    for (let M = 0; M < qt.length; M++)
      s[qt[M]].cancel(b);
  }, state: r, steps: s };
}
const { schedule: V, cancel: it, state: j, steps: fe } = /* @__PURE__ */ xr(typeof requestAnimationFrame < "u" ? requestAnimationFrame : K, !0);
let Qt;
function lo() {
  Qt = void 0;
}
const H = {
  now: () => (Qt === void 0 && H.set(j.isProcessing || tt.useManualTiming ? j.timestamp : performance.now()), Qt),
  set: (t) => {
    Qt = t, queueMicrotask(lo);
  }
}, br = (t) => (e) => typeof e == "string" && e.startsWith(t), cn = /* @__PURE__ */ br("--"), co = /* @__PURE__ */ br("var(--"), un = (t) => co(t) ? uo.test(t.split("/*")[0].trim()) : !1, uo = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, Mt = {
  test: (t) => typeof t == "number",
  parse: parseFloat,
  transform: (t) => t
}, Wt = {
  ...Mt,
  transform: (t) => Q(0, 1, t)
}, $t = {
  ...Mt,
  default: 1
}, It = (t) => Math.round(t * 1e5) / 1e5, dn = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function ho(t) {
  return t == null;
}
const fo = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, hn = (t, e) => (n) => !!(typeof n == "string" && fo.test(n) && n.startsWith(t) || e && !ho(n) && Object.prototype.hasOwnProperty.call(n, e)), vr = (t, e, n) => (i) => {
  if (typeof i != "string")
    return i;
  const [r, o, s, a] = i.match(dn);
  return {
    [t]: parseFloat(r),
    [e]: parseFloat(o),
    [n]: parseFloat(s),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, po = (t) => Q(0, 255, t), pe = {
  ...Mt,
  transform: (t) => Math.round(po(t))
}, ut = {
  test: /* @__PURE__ */ hn("rgb", "red"),
  parse: /* @__PURE__ */ vr("red", "green", "blue"),
  transform: ({ red: t, green: e, blue: n, alpha: i = 1 }) => "rgba(" + pe.transform(t) + ", " + pe.transform(e) + ", " + pe.transform(n) + ", " + It(Wt.transform(i)) + ")"
};
function mo(t) {
  let e = "", n = "", i = "", r = "";
  return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), i = t.substring(5, 7), r = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), i = t.substring(3, 4), r = t.substring(4, 5), e += e, n += n, i += i, r += r), {
    red: parseInt(e, 16),
    green: parseInt(n, 16),
    blue: parseInt(i, 16),
    alpha: r ? parseInt(r, 16) / 255 : 1
  };
}
const Ve = {
  test: /* @__PURE__ */ hn("#"),
  parse: mo,
  transform: ut.transform
}, Yt = /* @__NO_SIDE_EFFECTS__ */ (t) => ({
  test: (e) => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
  parse: parseFloat,
  transform: (e) => `${e}${t}`
}), nt = /* @__PURE__ */ Yt("deg"), J = /* @__PURE__ */ Yt("%"), S = /* @__PURE__ */ Yt("px"), go = /* @__PURE__ */ Yt("vh"), yo = /* @__PURE__ */ Yt("vw"), zn = {
  ...J,
  parse: (t) => J.parse(t) / 100,
  transform: (t) => J.transform(t * 100)
}, gt = {
  test: /* @__PURE__ */ hn("hsl", "hue"),
  parse: /* @__PURE__ */ vr("hue", "saturation", "lightness"),
  transform: ({ hue: t, saturation: e, lightness: n, alpha: i = 1 }) => "hsla(" + Math.round(t) + ", " + J.transform(It(e)) + ", " + J.transform(It(n)) + ", " + It(Wt.transform(i)) + ")"
}, R = {
  test: (t) => ut.test(t) || Ve.test(t) || gt.test(t),
  parse: (t) => ut.test(t) ? ut.parse(t) : gt.test(t) ? gt.parse(t) : Ve.parse(t),
  transform: (t) => typeof t == "string" ? t : t.hasOwnProperty("red") ? ut.transform(t) : gt.transform(t),
  getAnimatableNone: (t) => {
    const e = R.parse(t);
    return e.alpha = 0, R.transform(e);
  }
}, xo = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function bo(t) {
  return isNaN(t) && typeof t == "string" && (t.match(dn)?.length || 0) + (t.match(xo)?.length || 0) > 0;
}
const Tr = "number", wr = "color", vo = "var", To = "var(", Wn = "${}", wo = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Nt(t) {
  const e = t.toString(), n = [], i = {
    color: [],
    number: [],
    var: []
  }, r = [];
  let o = 0;
  const a = e.replace(wo, (l) => (R.test(l) ? (i.color.push(o), r.push(wr), n.push(R.parse(l))) : l.startsWith(To) ? (i.var.push(o), r.push(vo), n.push(l)) : (i.number.push(o), r.push(Tr), n.push(parseFloat(l))), ++o, Wn)).split(Wn);
  return { values: n, split: a, indexes: i, types: r };
}
function Sr(t) {
  return Nt(t).values;
}
function Cr(t) {
  const { split: e, types: n } = Nt(t), i = e.length;
  return (r) => {
    let o = "";
    for (let s = 0; s < i; s++)
      if (o += e[s], r[s] !== void 0) {
        const a = n[s];
        a === Tr ? o += It(r[s]) : a === wr ? o += R.transform(r[s]) : o += r[s];
      }
    return o;
  };
}
const So = (t) => typeof t == "number" ? 0 : R.test(t) ? R.getAnimatableNone(t) : t;
function Co(t) {
  const e = Sr(t);
  return Cr(t)(e.map(So));
}
const rt = {
  test: bo,
  parse: Sr,
  createTransformer: Cr,
  getAnimatableNone: Co
};
function me(t, e, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
}
function Mo({ hue: t, saturation: e, lightness: n, alpha: i }) {
  t /= 360, e /= 100, n /= 100;
  let r = 0, o = 0, s = 0;
  if (!e)
    r = o = s = n;
  else {
    const a = n < 0.5 ? n * (1 + e) : n + e - n * e, l = 2 * n - a;
    r = me(l, a, t + 1 / 3), o = me(l, a, t), s = me(l, a, t - 1 / 3);
  }
  return {
    red: Math.round(r * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: i
  };
}
function ie(t, e) {
  return (n) => n > 0 ? e : t;
}
const D = (t, e, n) => t + (e - t) * n, ge = (t, e, n) => {
  const i = t * t, r = n * (e * e - i) + i;
  return r < 0 ? 0 : Math.sqrt(r);
}, Ao = [Ve, ut, gt], Po = (t) => Ao.find((e) => e.test(t));
function Nn(t) {
  const e = Po(t);
  if (!e)
    return !1;
  let n = e.parse(t);
  return e === gt && (n = Mo(n)), n;
}
const Hn = (t, e) => {
  const n = Nn(t), i = Nn(e);
  if (!n || !i)
    return ie(t, e);
  const r = { ...n };
  return (o) => (r.red = ge(n.red, i.red, o), r.green = ge(n.green, i.green, o), r.blue = ge(n.blue, i.blue, o), r.alpha = D(n.alpha, i.alpha, o), ut.transform(r));
}, De = /* @__PURE__ */ new Set(["none", "hidden"]);
function Vo(t, e) {
  return De.has(t) ? (n) => n <= 0 ? t : e : (n) => n >= 1 ? e : t;
}
function Do(t, e) {
  return (n) => D(t, e, n);
}
function fn(t) {
  return typeof t == "number" ? Do : typeof t == "string" ? un(t) ? ie : R.test(t) ? Hn : Ro : Array.isArray(t) ? Mr : typeof t == "object" ? R.test(t) ? Hn : ko : ie;
}
function Mr(t, e) {
  const n = [...t], i = n.length, r = t.map((o, s) => fn(o)(o, e[s]));
  return (o) => {
    for (let s = 0; s < i; s++)
      n[s] = r[s](o);
    return n;
  };
}
function ko(t, e) {
  const n = { ...t, ...e }, i = {};
  for (const r in n)
    t[r] !== void 0 && e[r] !== void 0 && (i[r] = fn(t[r])(t[r], e[r]));
  return (r) => {
    for (const o in i)
      n[o] = i[o](r);
    return n;
  };
}
function Eo(t, e) {
  const n = [], i = { color: 0, var: 0, number: 0 };
  for (let r = 0; r < e.values.length; r++) {
    const o = e.types[r], s = t.indexes[o][i[o]], a = t.values[s] ?? 0;
    n[r] = a, i[o]++;
  }
  return n;
}
const Ro = (t, e) => {
  const n = rt.createTransformer(e), i = Nt(t), r = Nt(e);
  return i.indexes.var.length === r.indexes.var.length && i.indexes.color.length === r.indexes.color.length && i.indexes.number.length >= r.indexes.number.length ? De.has(t) && !r.values.length || De.has(e) && !i.values.length ? Vo(t, e) : Gt(Mr(Eo(i, r), r.values), n) : ie(t, e);
};
function Ar(t, e, n) {
  return typeof t == "number" && typeof e == "number" && typeof n == "number" ? D(t, e, n) : fn(t)(t, e);
}
const Io = (t) => {
  const e = ({ timestamp: n }) => t(n);
  return {
    start: (n = !0) => V.update(e, n),
    stop: () => it(e),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => j.isProcessing ? j.timestamp : H.now()
  };
}, Pr = (t, e, n = 10) => {
  let i = "";
  const r = Math.max(Math.round(e / n), 2);
  for (let o = 0; o < r; o++)
    i += Math.round(t(o / (r - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${i.substring(0, i.length - 2)})`;
}, re = 2e4;
function pn(t) {
  let e = 0;
  const n = 50;
  let i = t.next(e);
  for (; !i.done && e < re; )
    e += n, i = t.next(e);
  return e >= re ? 1 / 0 : e;
}
function Fo(t, e = 100, n) {
  const i = n({ ...t, keyframes: [0, e] }), r = Math.min(pn(i), re);
  return {
    type: "keyframes",
    ease: (o) => i.next(r * o).value / e,
    duration: /* @__PURE__ */ X(r)
  };
}
const Lo = 5;
function Vr(t, e, n) {
  const i = Math.max(e - Lo, 0);
  return ar(n - t(i), e - i);
}
const k = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
}, ye = 1e-3;
function jo({ duration: t = k.duration, bounce: e = k.bounce, velocity: n = k.velocity, mass: i = k.mass }) {
  let r, o, s = 1 - e;
  s = Q(k.minDamping, k.maxDamping, s), t = Q(k.minDuration, k.maxDuration, /* @__PURE__ */ X(t)), s < 1 ? (r = (d) => {
    const c = d * s, h = c * t, f = c - n, m = ke(d, s), g = Math.exp(-h);
    return ye - f / m * g;
  }, o = (d) => {
    const h = d * s * t, f = h * n + n, m = Math.pow(s, 2) * Math.pow(d, 2) * t, g = Math.exp(-h), x = ke(Math.pow(d, 2), s);
    return (-r(d) + ye > 0 ? -1 : 1) * ((f - m) * g) / x;
  }) : (r = (d) => {
    const c = Math.exp(-d * t), h = (d - n) * t + 1;
    return -ye + c * h;
  }, o = (d) => {
    const c = Math.exp(-d * t), h = (n - d) * (t * t);
    return c * h;
  });
  const a = 5 / t, l = zo(r, o, a);
  if (t = /* @__PURE__ */ $(t), isNaN(l))
    return {
      stiffness: k.stiffness,
      damping: k.damping,
      duration: t
    };
  {
    const d = Math.pow(l, 2) * i;
    return {
      stiffness: d,
      damping: s * 2 * Math.sqrt(i * d),
      duration: t
    };
  }
}
const Bo = 12;
function zo(t, e, n) {
  let i = n;
  for (let r = 1; r < Bo; r++)
    i = i - t(i) / e(i);
  return i;
}
function ke(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const Wo = ["duration", "bounce"], No = ["stiffness", "damping", "mass"];
function On(t, e) {
  return e.some((n) => t[n] !== void 0);
}
function Ho(t) {
  let e = {
    velocity: k.velocity,
    stiffness: k.stiffness,
    damping: k.damping,
    mass: k.mass,
    isResolvedFromDuration: !1,
    ...t
  };
  if (!On(t, No) && On(t, Wo))
    if (t.visualDuration) {
      const n = t.visualDuration, i = 2 * Math.PI / (n * 1.2), r = i * i, o = 2 * Q(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(r);
      e = {
        ...e,
        mass: k.mass,
        stiffness: r,
        damping: o
      };
    } else {
      const n = jo(t);
      e = {
        ...e,
        ...n,
        mass: k.mass
      }, e.isResolvedFromDuration = !0;
    }
  return e;
}
function se(t = k.visualDuration, e = k.bounce) {
  const n = typeof t != "object" ? {
    visualDuration: t,
    keyframes: [0, 1],
    bounce: e
  } : t;
  let { restSpeed: i, restDelta: r } = n;
  const o = n.keyframes[0], s = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: o }, { stiffness: l, damping: d, mass: c, duration: h, velocity: f, isResolvedFromDuration: m } = Ho({
    ...n,
    velocity: -/* @__PURE__ */ X(n.velocity || 0)
  }), g = f || 0, x = d / (2 * Math.sqrt(l * c)), v = s - o, y = /* @__PURE__ */ X(Math.sqrt(l / c)), T = Math.abs(v) < 5;
  i || (i = T ? k.restSpeed.granular : k.restSpeed.default), r || (r = T ? k.restDelta.granular : k.restDelta.default);
  let b;
  if (x < 1) {
    const w = ke(y, x);
    b = (A) => {
      const P = Math.exp(-x * y * A);
      return s - P * ((g + x * y * v) / w * Math.sin(w * A) + v * Math.cos(w * A));
    };
  } else if (x === 1)
    b = (w) => s - Math.exp(-y * w) * (v + (g + y * v) * w);
  else {
    const w = y * Math.sqrt(x * x - 1);
    b = (A) => {
      const P = Math.exp(-x * y * A), C = Math.min(w * A, 300);
      return s - P * ((g + x * y * v) * Math.sinh(C) + w * v * Math.cosh(C)) / w;
    };
  }
  const M = {
    calculatedDuration: m && h || null,
    next: (w) => {
      const A = b(w);
      if (m)
        a.done = w >= h;
      else {
        let P = w === 0 ? g : 0;
        x < 1 && (P = w === 0 ? /* @__PURE__ */ $(g) : Vr(b, w, A));
        const C = Math.abs(P) <= i, F = Math.abs(s - A) <= r;
        a.done = C && F;
      }
      return a.value = a.done ? s : A, a;
    },
    toString: () => {
      const w = Math.min(pn(M), re), A = Pr((P) => M.next(w * P).value, w, 30);
      return w + "ms " + A;
    },
    toTransition: () => {
    }
  };
  return M;
}
se.applyToOptions = (t) => {
  const e = Fo(t, 100, se);
  return t.ease = e.ease, t.duration = /* @__PURE__ */ $(e.duration), t.type = "keyframes", t;
};
function Ee({ keyframes: t, velocity: e = 0, power: n = 0.8, timeConstant: i = 325, bounceDamping: r = 10, bounceStiffness: o = 500, modifyTarget: s, min: a, max: l, restDelta: d = 0.5, restSpeed: c }) {
  const h = t[0], f = {
    done: !1,
    value: h
  }, m = (C) => a !== void 0 && C < a || l !== void 0 && C > l, g = (C) => a === void 0 ? l : l === void 0 || Math.abs(a - C) < Math.abs(l - C) ? a : l;
  let x = n * e;
  const v = h + x, y = s === void 0 ? v : s(v);
  y !== v && (x = y - h);
  const T = (C) => -x * Math.exp(-C / i), b = (C) => y + T(C), M = (C) => {
    const F = T(C), W = b(C);
    f.done = Math.abs(F) <= d, f.value = f.done ? y : W;
  };
  let w, A;
  const P = (C) => {
    m(f.value) && (w = C, A = se({
      keyframes: [f.value, g(f.value)],
      velocity: Vr(b, C, f.value),
      // TODO: This should be passing * 1000
      damping: r,
      stiffness: o,
      restDelta: d,
      restSpeed: c
    }));
  };
  return P(0), {
    calculatedDuration: null,
    next: (C) => {
      let F = !1;
      return !A && w === void 0 && (F = !0, M(C), P(C)), w !== void 0 && C >= w ? A.next(C - w) : (!F && M(C), f);
    }
  };
}
function Oo(t, e, n) {
  const i = [], r = n || tt.mix || Ar, o = t.length - 1;
  for (let s = 0; s < o; s++) {
    let a = r(t[s], t[s + 1]);
    if (e) {
      const l = Array.isArray(e) ? e[s] || K : e;
      a = Gt(l, a);
    }
    i.push(a);
  }
  return i;
}
function Uo(t, e, { clamp: n = !0, ease: i, mixer: r } = {}) {
  const o = t.length;
  if (rn(o === e.length), o === 1)
    return () => e[0];
  if (o === 2 && e[0] === e[1])
    return () => e[1];
  const s = t[0] === t[1];
  t[0] > t[o - 1] && (t = [...t].reverse(), e = [...e].reverse());
  const a = Oo(e, i, r), l = a.length, d = (c) => {
    if (s && c < t[0])
      return e[0];
    let h = 0;
    if (l > 1)
      for (; h < t.length - 2 && !(c < t[h + 1]); h++)
        ;
    const f = /* @__PURE__ */ zt(t[h], t[h + 1], c);
    return a[h](f);
  };
  return n ? (c) => d(Q(t[0], t[o - 1], c)) : d;
}
function Go(t, e) {
  const n = t[t.length - 1];
  for (let i = 1; i <= e; i++) {
    const r = /* @__PURE__ */ zt(0, e, i);
    t.push(D(n, 1, r));
  }
}
function _o(t) {
  const e = [0];
  return Go(e, t.length - 1), e;
}
function Yo(t, e) {
  return t.map((n) => n * e);
}
function Xo(t, e) {
  return t.map(() => e || gr).splice(0, t.length - 1);
}
function Ft({ duration: t = 300, keyframes: e, times: n, ease: i = "easeInOut" }) {
  const r = io(i) ? i.map(Bn) : Bn(i), o = {
    done: !1,
    value: e[0]
  }, s = Yo(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === e.length ? n : _o(e),
    t
  ), a = Uo(s, e, {
    ease: Array.isArray(r) ? r : Xo(e, r)
  });
  return {
    calculatedDuration: t,
    next: (l) => (o.value = a(l), o.done = l >= t, o)
  };
}
const Ko = (t) => t !== null;
function mn(t, { repeat: e, repeatType: n = "loop" }, i, r = 1) {
  const o = t.filter(Ko), a = r < 0 || e && n !== "loop" && e % 2 === 1 ? 0 : o.length - 1;
  return !a || i === void 0 ? o[a] : i;
}
const qo = {
  decay: Ee,
  inertia: Ee,
  tween: Ft,
  keyframes: Ft,
  spring: se
};
function Dr(t) {
  typeof t.type == "string" && (t.type = qo[t.type]);
}
class gn {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((e) => {
      this.resolve = e;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  /**
   * Allows the animation to be awaited.
   *
   * @deprecated Use `finished` instead.
   */
  then(e, n) {
    return this.finished.then(e, n);
  }
}
const $o = (t) => t / 100;
class yn extends gn {
  constructor(e) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
      const { motionValue: n } = this.options;
      n && n.updatedAt !== H.now() && this.tick(H.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
    }, this.options = e, this.initAnimation(), this.play(), e.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: e } = this;
    Dr(e);
    const { type: n = Ft, repeat: i = 0, repeatDelay: r = 0, repeatType: o, velocity: s = 0 } = e;
    let { keyframes: a } = e;
    const l = n || Ft;
    l !== Ft && typeof a[0] != "number" && (this.mixKeyframes = Gt($o, Ar(a[0], a[1])), a = [0, 100]);
    const d = l({ ...e, keyframes: a });
    o === "mirror" && (this.mirroredGenerator = l({
      ...e,
      keyframes: [...a].reverse(),
      velocity: -s
    })), d.calculatedDuration === null && (d.calculatedDuration = pn(d));
    const { calculatedDuration: c } = d;
    this.calculatedDuration = c, this.resolvedDuration = c + r, this.totalDuration = this.resolvedDuration * (i + 1) - r, this.generator = d;
  }
  updateTime(e) {
    const n = Math.round(e - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n;
  }
  tick(e, n = !1) {
    const { generator: i, totalDuration: r, mixKeyframes: o, mirroredGenerator: s, resolvedDuration: a, calculatedDuration: l } = this;
    if (this.startTime === null)
      return i.next(0);
    const { delay: d = 0, keyframes: c, repeat: h, repeatType: f, repeatDelay: m, type: g, onUpdate: x, finalKeyframe: v } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - r / this.speed, this.startTime)), n ? this.currentTime = e : this.updateTime(e);
    const y = this.currentTime - d * (this.playbackSpeed >= 0 ? 1 : -1), T = this.playbackSpeed >= 0 ? y < 0 : y > r;
    this.currentTime = Math.max(y, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = r);
    let b = this.currentTime, M = i;
    if (h) {
      const C = Math.min(this.currentTime, r) / a;
      let F = Math.floor(C), W = C % 1;
      !W && C >= 1 && (W = 1), W === 1 && F--, F = Math.min(F, h + 1), !!(F % 2) && (f === "reverse" ? (W = 1 - W, m && (W -= m / a)) : f === "mirror" && (M = s)), b = Q(0, 1, W) * a;
    }
    const w = T ? { done: !1, value: c[0] } : M.next(b);
    o && (w.value = o(w.value));
    let { done: A } = w;
    !T && l !== null && (A = this.playbackSpeed >= 0 ? this.currentTime >= r : this.currentTime <= 0);
    const P = this.holdTime === null && (this.state === "finished" || this.state === "running" && A);
    return P && g !== Ee && (w.value = mn(c, this.options, v, this.speed)), x && x(w.value), P && this.finish(), w;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(e, n) {
    return this.finished.then(e, n);
  }
  get duration() {
    return /* @__PURE__ */ X(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: e = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ X(e);
  }
  get time() {
    return /* @__PURE__ */ X(this.currentTime);
  }
  set time(e) {
    e = /* @__PURE__ */ $(e), this.currentTime = e, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed), this.driver?.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(e) {
    this.updateTime(H.now());
    const n = this.playbackSpeed !== e;
    this.playbackSpeed = e, n && (this.time = /* @__PURE__ */ X(this.currentTime));
  }
  play() {
    if (this.isStopped)
      return;
    const { driver: e = Io, startTime: n } = this.options;
    this.driver || (this.driver = e((r) => this.tick(r))), this.options.onPlay?.();
    const i = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = i) : this.holdTime !== null ? this.startTime = i - this.holdTime : this.startTime || (this.startTime = n ?? i), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(H.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
  }
  cancel() {
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(e) {
    return this.startTime = 0, this.tick(e, !0);
  }
  attachTimeline(e) {
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), e.observe(this);
  }
}
function Jo(t) {
  for (let e = 1; e < t.length; e++)
    t[e] ?? (t[e] = t[e - 1]);
}
const dt = (t) => t * 180 / Math.PI, Re = (t) => {
  const e = dt(Math.atan2(t[1], t[0]));
  return Ie(e);
}, Zo = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
  rotate: Re,
  rotateZ: Re,
  skewX: (t) => dt(Math.atan(t[1])),
  skewY: (t) => dt(Math.atan(t[2])),
  skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2
}, Ie = (t) => (t = t % 360, t < 0 && (t += 360), t), Un = Re, Gn = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]), _n = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]), Qo = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: Gn,
  scaleY: _n,
  scale: (t) => (Gn(t) + _n(t)) / 2,
  rotateX: (t) => Ie(dt(Math.atan2(t[6], t[5]))),
  rotateY: (t) => Ie(dt(Math.atan2(-t[2], t[0]))),
  rotateZ: Un,
  rotate: Un,
  skewX: (t) => dt(Math.atan(t[4])),
  skewY: (t) => dt(Math.atan(t[1])),
  skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2
};
function Fe(t) {
  return t.includes("scale") ? 1 : 0;
}
function Le(t, e) {
  if (!t || t === "none")
    return Fe(e);
  const n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let i, r;
  if (n)
    i = Qo, r = n;
  else {
    const a = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    i = Zo, r = a;
  }
  if (!r)
    return Fe(e);
  const o = i[e], s = r[1].split(",").map(ea);
  return typeof o == "function" ? o(s) : s[o];
}
const ta = (t, e) => {
  const { transform: n = "none" } = getComputedStyle(t);
  return Le(n, e);
};
function ea(t) {
  return parseFloat(t.trim());
}
const At = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], Pt = new Set(At), Yn = (t) => t === Mt || t === S, na = /* @__PURE__ */ new Set(["x", "y", "z"]), ia = At.filter((t) => !na.has(t));
function ra(t) {
  const e = [];
  return ia.forEach((n) => {
    const i = t.getValue(n);
    i !== void 0 && (e.push([n, i.get()]), i.set(n.startsWith("scale") ? 1 : 0));
  }), e;
}
const ht = {
  // Dimensions
  width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  top: (t, { top: e }) => parseFloat(e),
  left: (t, { left: e }) => parseFloat(e),
  bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
  // Transform
  x: (t, { transform: e }) => Le(e, "x"),
  y: (t, { transform: e }) => Le(e, "y")
};
ht.translateX = ht.x;
ht.translateY = ht.y;
const ft = /* @__PURE__ */ new Set();
let je = !1, Be = !1, ze = !1;
function kr() {
  if (Be) {
    const t = Array.from(ft).filter((i) => i.needsMeasurement), e = new Set(t.map((i) => i.element)), n = /* @__PURE__ */ new Map();
    e.forEach((i) => {
      const r = ra(i);
      r.length && (n.set(i, r), i.render());
    }), t.forEach((i) => i.measureInitialState()), e.forEach((i) => {
      i.render();
      const r = n.get(i);
      r && r.forEach(([o, s]) => {
        i.getValue(o)?.set(s);
      });
    }), t.forEach((i) => i.measureEndState()), t.forEach((i) => {
      i.suspendedScrollY !== void 0 && window.scrollTo(0, i.suspendedScrollY);
    });
  }
  Be = !1, je = !1, ft.forEach((t) => t.complete(ze)), ft.clear();
}
function Er() {
  ft.forEach((t) => {
    t.readKeyframes(), t.needsMeasurement && (Be = !0);
  });
}
function sa() {
  ze = !0, Er(), kr(), ze = !1;
}
class xn {
  constructor(e, n, i, r, o, s = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...e], this.onComplete = n, this.name = i, this.motionValue = r, this.element = o, this.isAsync = s;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (ft.add(this), je || (je = !0, V.read(Er), V.resolveKeyframes(kr))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, name: n, element: i, motionValue: r } = this;
    if (e[0] === null) {
      const o = r?.get(), s = e[e.length - 1];
      if (o !== void 0)
        e[0] = o;
      else if (i && n) {
        const a = i.readValue(n, s);
        a != null && (e[0] = a);
      }
      e[0] === void 0 && (e[0] = s), r && o === void 0 && r.set(e[0]);
    }
    Jo(e);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(e = !1) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), ft.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (ft.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const oa = (t) => t.startsWith("--");
function aa(t, e, n) {
  oa(e) ? t.style.setProperty(e, n) : t.style[e] = n;
}
const la = /* @__PURE__ */ sn(() => window.ScrollTimeline !== void 0), ca = {};
function ua(t, e) {
  const n = /* @__PURE__ */ sn(t);
  return () => ca[e] ?? n();
}
const Rr = /* @__PURE__ */ ua(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Rt = ([t, e, n, i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`, Xn = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Rt([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Rt([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Rt([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Rt([0.33, 1.53, 0.69, 0.99])
};
function Ir(t, e) {
  if (t)
    return typeof t == "function" ? Rr() ? Pr(t, e) : "ease-out" : yr(t) ? Rt(t) : Array.isArray(t) ? t.map((n) => Ir(n, e) || Xn.easeOut) : Xn[t];
}
function da(t, e, n, { delay: i = 0, duration: r = 300, repeat: o = 0, repeatType: s = "loop", ease: a = "easeOut", times: l } = {}, d = void 0) {
  const c = {
    [e]: n
  };
  l && (c.offset = l);
  const h = Ir(a, r);
  Array.isArray(h) && (c.easing = h);
  const f = {
    delay: i,
    duration: r,
    easing: Array.isArray(h) ? "linear" : h,
    fill: "both",
    iterations: o + 1,
    direction: s === "reverse" ? "alternate" : "normal"
  };
  return d && (f.pseudoElement = d), t.animate(c, f);
}
function Fr(t) {
  return typeof t == "function" && "applyToOptions" in t;
}
function ha({ type: t, ...e }) {
  return Fr(t) && Rr() ? t.applyToOptions(e) : (e.duration ?? (e.duration = 300), e.ease ?? (e.ease = "easeOut"), e);
}
class fa extends gn {
  constructor(e) {
    if (super(), this.finishedTime = null, this.isStopped = !1, !e)
      return;
    const { element: n, name: i, keyframes: r, pseudoElement: o, allowFlatten: s = !1, finalKeyframe: a, onComplete: l } = e;
    this.isPseudoElement = !!o, this.allowFlatten = s, this.options = e, rn(typeof e.type != "string");
    const d = ha(e);
    this.animation = da(n, i, r, d, o), d.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !o) {
        const c = mn(r, this.options, a, this.speed);
        this.updateMotionValue ? this.updateMotionValue(c) : aa(n, i, c), this.animation.cancel();
      }
      l?.(), this.notifyFinished();
    };
  }
  play() {
    this.isStopped || (this.animation.play(), this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {
    }
  }
  stop() {
    if (this.isStopped)
      return;
    this.isStopped = !0;
    const { state: e } = this;
    e === "idle" || e === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * In this method, we commit styles back to the DOM before cancelling
   * the animation.
   *
   * This is designed to be overridden by NativeAnimationExtended, which
   * will create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to also correctly calculate velocity for any subsequent animation
   * while deferring the commit until the next animation frame.
   */
  commitStyles() {
    this.isPseudoElement || this.animation.commitStyles?.();
  }
  get duration() {
    const e = this.animation.effect?.getComputedTiming?.().duration || 0;
    return /* @__PURE__ */ X(Number(e));
  }
  get iterationDuration() {
    const { delay: e = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ X(e);
  }
  get time() {
    return /* @__PURE__ */ X(Number(this.animation.currentTime) || 0);
  }
  set time(e) {
    this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ $(e);
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(e) {
    e < 0 && (this.finishedTime = null), this.animation.playbackRate = e;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(e) {
    this.animation.startTime = e;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline: e, observe: n }) {
    return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, e && la() ? (this.animation.timeline = e, K) : n(this);
  }
}
const Lr = {
  anticipate: fr,
  backInOut: hr,
  circInOut: mr
};
function pa(t) {
  return t in Lr;
}
function ma(t) {
  typeof t.ease == "string" && pa(t.ease) && (t.ease = Lr[t.ease]);
}
const Kn = 10;
class ga extends fa {
  constructor(e) {
    ma(e), Dr(e), super(e), e.startTime && (this.startTime = e.startTime), this.options = e;
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read commited styles back out of the DOM, we can
   * create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to calculate velocity for any subsequent animation.
   */
  updateMotionValue(e) {
    const { motionValue: n, onUpdate: i, onComplete: r, element: o, ...s } = this.options;
    if (!n)
      return;
    if (e !== void 0) {
      n.set(e);
      return;
    }
    const a = new yn({
      ...s,
      autoplay: !1
    }), l = /* @__PURE__ */ $(this.finishedTime ?? this.time);
    n.setWithVelocity(a.sample(l - Kn).value, a.sample(l).value, Kn), a.stop();
  }
}
const qn = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(rt.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url("));
function ya(t) {
  const e = t[0];
  if (t.length === 1)
    return !0;
  for (let n = 0; n < t.length; n++)
    if (t[n] !== e)
      return !0;
}
function xa(t, e, n, i) {
  const r = t[0];
  if (r === null)
    return !1;
  if (e === "display" || e === "visibility")
    return !0;
  const o = t[t.length - 1], s = qn(r, e), a = qn(o, e);
  return !s || !a ? !1 : ya(t) || (n === "spring" || Fr(n)) && i;
}
function We(t) {
  t.duration = 0, t.type = "keyframes";
}
const ba = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Could be re-enabled now we have support for linear() easing
  // "background-color"
]), va = /* @__PURE__ */ sn(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function Ta(t) {
  const { motionValue: e, name: n, repeatDelay: i, repeatType: r, damping: o, type: s } = t;
  if (!(e?.owner?.current instanceof HTMLElement))
    return !1;
  const { onUpdate: l, transformTemplate: d } = e.owner.getProps();
  return va() && n && ba.has(n) && (n !== "transform" || !d) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !l && !i && r !== "mirror" && o !== 0 && s !== "inertia";
}
const wa = 40;
class Sa extends gn {
  constructor({ autoplay: e = !0, delay: n = 0, type: i = "keyframes", repeat: r = 0, repeatDelay: o = 0, repeatType: s = "loop", keyframes: a, name: l, motionValue: d, element: c, ...h }) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
    }, this.createdAt = H.now();
    const f = {
      autoplay: e,
      delay: n,
      type: i,
      repeat: r,
      repeatDelay: o,
      repeatType: s,
      name: l,
      motionValue: d,
      element: c,
      ...h
    }, m = c?.KeyframeResolver || xn;
    this.keyframeResolver = new m(a, (g, x, v) => this.onKeyframesResolved(g, x, f, !v), l, d, c), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(e, n, i, r) {
    this.keyframeResolver = void 0;
    const { name: o, type: s, velocity: a, delay: l, isHandoff: d, onUpdate: c } = i;
    this.resolvedAt = H.now(), xa(e, o, s, a) || ((tt.instantAnimations || !l) && c?.(mn(e, i, n)), e[0] = e[e.length - 1], We(i), i.repeat = 0);
    const f = {
      startTime: r ? this.resolvedAt ? this.resolvedAt - this.createdAt > wa ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: n,
      ...i,
      keyframes: e
    }, m = !d && Ta(f) ? new ga({
      ...f,
      element: f.motionValue.owner.current
    }) : new yn(f);
    m.finished.then(() => this.notifyFinished()).catch(K), this.pendingTimeline && (this.stopTimeline = m.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = m;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(e, n) {
    return this.finished.finally(e).then(() => {
    });
  }
  get animation() {
    return this._animation || (this.keyframeResolver?.resume(), sa()), this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(e) {
    this.animation.time = e;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(e) {
    this.animation.speed = e;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(e) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(e) : this.pendingTimeline = e, () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
  }
}
const Ca = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function Ma(t) {
  const e = Ca.exec(t);
  if (!e)
    return [,];
  const [, n, i, r] = e;
  return [`--${n ?? i}`, r];
}
function jr(t, e, n = 1) {
  const [i, r] = Ma(t);
  if (!i)
    return;
  const o = window.getComputedStyle(e).getPropertyValue(i);
  if (o) {
    const s = o.trim();
    return rr(s) ? parseFloat(s) : s;
  }
  return un(r) ? jr(r, e, n + 1) : r;
}
function bn(t, e) {
  return t?.[e] ?? t?.default ?? t;
}
const Br = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...At
]), Aa = {
  test: (t) => t === "auto",
  parse: (t) => t
}, zr = (t) => (e) => e.test(t), Wr = [Mt, S, J, nt, yo, go, Aa], $n = (t) => Wr.find(zr(t));
function Pa(t) {
  return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || or(t) : !0;
}
const Va = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function Da(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow")
    return t;
  const [i] = n.match(dn) || [];
  if (!i)
    return t;
  const r = n.replace(i, "");
  let o = Va.has(e) ? 1 : 0;
  return i !== n && (o *= 100), e + "(" + o + r + ")";
}
const ka = /\b([a-z-]*)\(.*?\)/gu, Ne = {
  ...rt,
  getAnimatableNone: (t) => {
    const e = t.match(ka);
    return e ? e.map(Da).join(" ") : t;
  }
}, Jn = {
  ...Mt,
  transform: Math.round
}, Ea = {
  rotate: nt,
  rotateX: nt,
  rotateY: nt,
  rotateZ: nt,
  scale: $t,
  scaleX: $t,
  scaleY: $t,
  scaleZ: $t,
  skew: nt,
  skewX: nt,
  skewY: nt,
  distance: S,
  translateX: S,
  translateY: S,
  translateZ: S,
  x: S,
  y: S,
  z: S,
  perspective: S,
  transformPerspective: S,
  opacity: Wt,
  originX: zn,
  originY: zn,
  originZ: S
}, vn = {
  // Border props
  borderWidth: S,
  borderTopWidth: S,
  borderRightWidth: S,
  borderBottomWidth: S,
  borderLeftWidth: S,
  borderRadius: S,
  radius: S,
  borderTopLeftRadius: S,
  borderTopRightRadius: S,
  borderBottomRightRadius: S,
  borderBottomLeftRadius: S,
  // Positioning props
  width: S,
  maxWidth: S,
  height: S,
  maxHeight: S,
  top: S,
  right: S,
  bottom: S,
  left: S,
  // Spacing props
  padding: S,
  paddingTop: S,
  paddingRight: S,
  paddingBottom: S,
  paddingLeft: S,
  margin: S,
  marginTop: S,
  marginRight: S,
  marginBottom: S,
  marginLeft: S,
  // Misc
  backgroundPositionX: S,
  backgroundPositionY: S,
  ...Ea,
  zIndex: Jn,
  // SVG
  fillOpacity: Wt,
  strokeOpacity: Wt,
  numOctaves: Jn
}, Ra = {
  ...vn,
  // Color props
  color: R,
  backgroundColor: R,
  outlineColor: R,
  fill: R,
  stroke: R,
  // Border props
  borderColor: R,
  borderTopColor: R,
  borderRightColor: R,
  borderBottomColor: R,
  borderLeftColor: R,
  filter: Ne,
  WebkitFilter: Ne
}, Nr = (t) => Ra[t];
function Hr(t, e) {
  let n = Nr(t);
  return n !== Ne && (n = rt), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0;
}
const Ia = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function Fa(t, e, n) {
  let i = 0, r;
  for (; i < t.length && !r; ) {
    const o = t[i];
    typeof o == "string" && !Ia.has(o) && Nt(o).values.length && (r = t[i]), i++;
  }
  if (r && n)
    for (const o of e)
      t[o] = Hr(n, r);
}
class La extends xn {
  constructor(e, n, i, r, o) {
    super(e, n, i, r, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, element: n, name: i } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let l = 0; l < e.length; l++) {
      let d = e[l];
      if (typeof d == "string" && (d = d.trim(), un(d))) {
        const c = jr(d, n.current);
        c !== void 0 && (e[l] = c), l === e.length - 1 && (this.finalKeyframe = d);
      }
    }
    if (this.resolveNoneKeyframes(), !Br.has(i) || e.length !== 2)
      return;
    const [r, o] = e, s = $n(r), a = $n(o);
    if (s !== a)
      if (Yn(s) && Yn(a))
        for (let l = 0; l < e.length; l++) {
          const d = e[l];
          typeof d == "string" && (e[l] = parseFloat(d));
        }
      else ht[i] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: e, name: n } = this, i = [];
    for (let r = 0; r < e.length; r++)
      (e[r] === null || Pa(e[r])) && i.push(r);
    i.length && Fa(e, i, n);
  }
  measureInitialState() {
    const { element: e, unresolvedKeyframes: n, name: i } = this;
    if (!e || !e.current)
      return;
    i === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = ht[i](e.measureViewportBox(), window.getComputedStyle(e.current)), n[0] = this.measuredOrigin;
    const r = n[n.length - 1];
    r !== void 0 && e.getValue(i, r).jump(r, !1);
  }
  measureEndState() {
    const { element: e, name: n, unresolvedKeyframes: i } = this;
    if (!e || !e.current)
      return;
    const r = e.getValue(n);
    r && r.jump(this.measuredOrigin, !1);
    const o = i.length - 1, s = i[o];
    i[o] = ht[n](e.measureViewportBox(), window.getComputedStyle(e.current)), s !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = s), this.removedTransforms?.length && this.removedTransforms.forEach(([a, l]) => {
      e.getValue(a).set(l);
    }), this.resolveNoneKeyframes();
  }
}
function Or(t, e, n) {
  if (t instanceof EventTarget)
    return [t];
  if (typeof t == "string") {
    const r = document.querySelectorAll(t);
    return r ? Array.from(r) : [];
  }
  return Array.from(t);
}
const Ur = (t, e) => e && typeof t == "number" ? e.transform(t) : t;
function Gr(t) {
  return sr(t) && "offsetHeight" in t;
}
const Zn = 30, ja = (t) => !isNaN(parseFloat(t));
class Ba {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(e, n = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (i) => {
      const r = H.now();
      if (this.updatedAt !== r && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(i), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
        for (const o of this.dependents)
          o.dirty();
    }, this.hasAnimated = !1, this.setCurrent(e), this.owner = n.owner;
  }
  setCurrent(e) {
    this.current = e, this.updatedAt = H.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = ja(this.current));
  }
  setPrevFrameValue(e = this.current) {
    this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(e) {
    return this.on("change", e);
  }
  on(e, n) {
    this.events[e] || (this.events[e] = new on());
    const i = this.events[e].add(n);
    return e === "change" ? () => {
      i(), V.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : i;
  }
  clearListeners() {
    for (const e in this.events)
      this.events[e].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(e, n) {
    this.passiveEffect = e, this.stopPassiveEffect = n;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(e) {
    this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e);
  }
  setWithVelocity(e, n, i) {
    this.set(n), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - i;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(e, n = !0) {
    this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(e) {
    this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(e);
  }
  removeDependent(e) {
    this.dependents && this.dependents.delete(e);
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const e = H.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Zn)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Zn);
    return ar(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   */
  start(e) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.animation = e(n), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function wt(t, e) {
  return new Ba(t, e);
}
const { schedule: Tn } = /* @__PURE__ */ xr(queueMicrotask, !1), q = {
  x: !1,
  y: !1
};
function _r() {
  return q.x || q.y;
}
function za(t) {
  return t === "x" || t === "y" ? q[t] ? null : (q[t] = !0, () => {
    q[t] = !1;
  }) : q.x || q.y ? null : (q.x = q.y = !0, () => {
    q.x = q.y = !1;
  });
}
function Yr(t, e) {
  const n = Or(t), i = new AbortController(), r = {
    passive: !0,
    ...e,
    signal: i.signal
  };
  return [n, r, () => i.abort()];
}
function Qn(t) {
  return !(t.pointerType === "touch" || _r());
}
function Wa(t, e, n = {}) {
  const [i, r, o] = Yr(t, n), s = (a) => {
    if (!Qn(a))
      return;
    const { target: l } = a, d = e(l, a);
    if (typeof d != "function" || !l)
      return;
    const c = (h) => {
      Qn(h) && (d(h), l.removeEventListener("pointerleave", c));
    };
    l.addEventListener("pointerleave", c, r);
  };
  return i.forEach((a) => {
    a.addEventListener("pointerenter", s, r);
  }), o;
}
const Xr = (t, e) => e ? t === e ? !0 : Xr(t, e.parentElement) : !1, wn = (t) => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1, Na = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function Ha(t) {
  return Na.has(t.tagName) || t.tabIndex !== -1;
}
const te = /* @__PURE__ */ new WeakSet();
function ti(t) {
  return (e) => {
    e.key === "Enter" && t(e);
  };
}
function xe(t, e) {
  t.dispatchEvent(new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 }));
}
const Oa = (t, e) => {
  const n = t.currentTarget;
  if (!n)
    return;
  const i = ti(() => {
    if (te.has(n))
      return;
    xe(n, "down");
    const r = ti(() => {
      xe(n, "up");
    }), o = () => xe(n, "cancel");
    n.addEventListener("keyup", r, e), n.addEventListener("blur", o, e);
  });
  n.addEventListener("keydown", i, e), n.addEventListener("blur", () => n.removeEventListener("keydown", i), e);
};
function ei(t) {
  return wn(t) && !_r();
}
function Ua(t, e, n = {}) {
  const [i, r, o] = Yr(t, n), s = (a) => {
    const l = a.currentTarget;
    if (!ei(a))
      return;
    te.add(l);
    const d = e(l, a), c = (m, g) => {
      window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", f), te.has(l) && te.delete(l), ei(m) && typeof d == "function" && d(m, { success: g });
    }, h = (m) => {
      c(m, l === window || l === document || n.useGlobalTarget || Xr(l, m.target));
    }, f = (m) => {
      c(m, !1);
    };
    window.addEventListener("pointerup", h, r), window.addEventListener("pointercancel", f, r);
  };
  return i.forEach((a) => {
    (n.useGlobalTarget ? window : a).addEventListener("pointerdown", s, r), Gr(a) && (a.addEventListener("focus", (d) => Oa(d, r)), !Ha(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0));
  }), o;
}
function Kr(t) {
  return sr(t) && "ownerSVGElement" in t;
}
function Ga(t) {
  return Kr(t) && t.tagName === "svg";
}
const z = (t) => !!(t && t.getVelocity), _a = [...Wr, R, rt], Ya = (t) => _a.find(zr(t)), Sn = Ct({
  transformPagePoint: (t) => t,
  isStatic: !1,
  reducedMotion: "never"
});
function ni(t, e) {
  if (typeof t == "function")
    return t(e);
  t != null && (t.current = e);
}
function Xa(...t) {
  return (e) => {
    let n = !1;
    const i = t.map((r) => {
      const o = ni(r, e);
      return !n && typeof o == "function" && (n = !0), o;
    });
    if (n)
      return () => {
        for (let r = 0; r < i.length; r++) {
          const o = i[r];
          typeof o == "function" ? o() : ni(t[r], null);
        }
      };
  };
}
function Ka(...t) {
  return $e(Xa(...t), t);
}
class qa extends tr {
  getSnapshotBeforeUpdate(e) {
    const n = this.props.childRef.current;
    if (n && e.isPresent && !this.props.isPresent) {
      const i = n.offsetParent, r = Gr(i) && i.offsetWidth || 0, o = this.props.sizeRef.current;
      o.height = n.offsetHeight || 0, o.width = n.offsetWidth || 0, o.top = n.offsetTop, o.left = n.offsetLeft, o.right = r - o.width - o.left;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function $a({ children: t, isPresent: e, anchorX: n, root: i }) {
  const r = Je(), o = O(null), s = O({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0
  }), { nonce: a } = B(Sn), l = Ka(o, t?.ref);
  return nr(() => {
    const { width: d, height: c, top: h, left: f, right: m } = s.current;
    if (e || !o.current || !d || !c)
      return;
    const g = n === "left" ? `left: ${f}` : `right: ${m}`;
    o.current.dataset.motionPopId = r;
    const x = document.createElement("style");
    a && (x.nonce = a);
    const v = i ?? document.head;
    return v.appendChild(x), x.sheet && x.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${d}px !important;
            height: ${c}px !important;
            ${g}px !important;
            top: ${h}px !important;
          }
        `), () => {
      v.contains(x) && v.removeChild(x);
    };
  }, [e]), u(qa, { isPresent: e, childRef: o, sizeRef: s, children: Us(t, { ref: l }) });
}
const Ja = ({ children: t, initial: e, isPresent: n, onExitComplete: i, custom: r, presenceAffectsLayout: o, mode: s, anchorX: a, root: l }) => {
  const d = Qe(Za), c = Je();
  let h = !0, f = pt(() => (h = !1, {
    id: c,
    initial: e,
    isPresent: n,
    custom: r,
    onExitComplete: (m) => {
      d.set(m, !0);
      for (const g of d.values())
        if (!g)
          return;
      i && i();
    },
    register: (m) => (d.set(m, !1), () => d.delete(m))
  }), [n, d, i]);
  return o && h && (f = { ...f }), pt(() => {
    d.forEach((m, g) => d.set(g, !1));
  }, [n]), Z(() => {
    !n && !d.size && i && i();
  }, [n]), s === "popLayout" && (t = u($a, { isPresent: n, anchorX: a, root: l, children: t })), u(le.Provider, { value: f, children: t });
};
function Za() {
  return /* @__PURE__ */ new Map();
}
function qr(t = !0) {
  const e = B(le);
  if (e === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: i, register: r } = e, o = Je();
  Z(() => {
    if (t)
      return r(o);
  }, [t]);
  const s = $e(() => t && i && i(o), [o, i, t]);
  return !n && i ? [!1, s] : [!0];
}
const Jt = (t) => t.key || "";
function ii(t) {
  const e = [];
  return Hs.forEach(t, (n) => {
    Ys(n) && e.push(n);
  }), e;
}
const He = ({ children: t, custom: e, initial: n = !0, onExitComplete: i, presenceAffectsLayout: r = !0, mode: o = "sync", propagate: s = !1, anchorX: a = "left", root: l }) => {
  const [d, c] = qr(s), h = pt(() => ii(t), [t]), f = s && !d ? [] : h.map(Jt), m = O(!0), g = O(h), x = Qe(() => /* @__PURE__ */ new Map()), [v, y] = U(h), [T, b] = U(h);
  ir(() => {
    m.current = !1, g.current = h;
    for (let A = 0; A < T.length; A++) {
      const P = Jt(T[A]);
      f.includes(P) ? x.delete(P) : x.get(P) !== !0 && x.set(P, !1);
    }
  }, [T, f.length, f.join("-")]);
  const M = [];
  if (h !== v) {
    let A = [...h];
    for (let P = 0; P < T.length; P++) {
      const C = T[P], F = Jt(C);
      f.includes(F) || (A.splice(P, 0, C), M.push(C));
    }
    return o === "wait" && M.length && (A = M), b(ii(A)), y(h), null;
  }
  const { forceRender: w } = B(Ze);
  return u(Ns, { children: T.map((A) => {
    const P = Jt(A), C = s && !d ? !1 : h === T || f.includes(P), F = () => {
      if (x.has(P))
        x.set(P, !0);
      else
        return;
      let W = !0;
      x.forEach((et) => {
        et || (W = !1);
      }), W && (w?.(), b(g.current), s && c?.(), i && i());
    };
    return u(Ja, { isPresent: C, initial: !m.current || n ? void 0 : !1, custom: e, presenceAffectsLayout: r, mode: o, root: l, onExitComplete: C ? void 0 : F, anchorX: a, children: A }, P);
  }) });
}, $r = Ct({ strict: !1 }), ri = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, St = {};
for (const t in ri)
  St[t] = {
    isEnabled: (e) => ri[t].some((n) => !!e[n])
  };
function Qa(t) {
  for (const e in t)
    St[e] = {
      ...St[e],
      ...t[e]
    };
}
const tl = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function oe(t) {
  return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || tl.has(t);
}
let Jr = (t) => !oe(t);
function el(t) {
  typeof t == "function" && (Jr = (e) => e.startsWith("on") ? !oe(e) : t(e));
}
try {
  el(require("@emotion/is-prop-valid").default);
} catch {
}
function nl(t, e, n) {
  const i = {};
  for (const r in t)
    r === "values" && typeof t.values == "object" || (Jr(r) || n === !0 && oe(r) || !e && !oe(r) || // If trying to use native HTML drag events, forward drag listeners
    t.draggable && r.startsWith("onDrag")) && (i[r] = t[r]);
  return i;
}
const ce = /* @__PURE__ */ Ct({});
function ue(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
function Ht(t) {
  return typeof t == "string" || Array.isArray(t);
}
const Cn = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Mn = ["initial", ...Cn];
function de(t) {
  return ue(t.animate) || Mn.some((e) => Ht(t[e]));
}
function Zr(t) {
  return !!(de(t) || t.variants);
}
function il(t, e) {
  if (de(t)) {
    const { initial: n, animate: i } = t;
    return {
      initial: n === !1 || Ht(n) ? n : void 0,
      animate: Ht(i) ? i : void 0
    };
  }
  return t.inherit !== !1 ? e : {};
}
function rl(t) {
  const { initial: e, animate: n } = il(t, B(ce));
  return pt(() => ({ initial: e, animate: n }), [si(e), si(n)]);
}
function si(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const Ot = {};
function sl(t) {
  for (const e in t)
    Ot[e] = t[e], cn(e) && (Ot[e].isCSSVariable = !0);
}
function Qr(t, { layout: e, layoutId: n }) {
  return Pt.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!Ot[t] || t === "opacity");
}
const ol = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, al = At.length;
function ll(t, e, n) {
  let i = "", r = !0;
  for (let o = 0; o < al; o++) {
    const s = At[o], a = t[s];
    if (a === void 0)
      continue;
    let l = !0;
    if (typeof a == "number" ? l = a === (s.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
      const d = Ur(a, vn[s]);
      if (!l) {
        r = !1;
        const c = ol[s] || s;
        i += `${c}(${d}) `;
      }
      n && (e[s] = d);
    }
  }
  return i = i.trim(), n ? i = n(e, r ? "" : i) : r && (i = "none"), i;
}
function An(t, e, n) {
  const { style: i, vars: r, transformOrigin: o } = t;
  let s = !1, a = !1;
  for (const l in e) {
    const d = e[l];
    if (Pt.has(l)) {
      s = !0;
      continue;
    } else if (cn(l)) {
      r[l] = d;
      continue;
    } else {
      const c = Ur(d, vn[l]);
      l.startsWith("origin") ? (a = !0, o[l] = c) : i[l] = c;
    }
  }
  if (e.transform || (s || n ? i.transform = ll(e, t.transform, n) : i.transform && (i.transform = "none")), a) {
    const { originX: l = "50%", originY: d = "50%", originZ: c = 0 } = o;
    i.transformOrigin = `${l} ${d} ${c}`;
  }
}
const Pn = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function ts(t, e, n) {
  for (const i in e)
    !z(e[i]) && !Qr(i, n) && (t[i] = e[i]);
}
function cl({ transformTemplate: t }, e) {
  return pt(() => {
    const n = Pn();
    return An(n, e, t), Object.assign({}, n.vars, n.style);
  }, [e]);
}
function ul(t, e) {
  const n = t.style || {}, i = {};
  return ts(i, n, t), Object.assign(i, cl(t, e)), i;
}
function dl(t, e) {
  const n = {}, i = ul(t, e);
  return t.drag && t.dragListener !== !1 && (n.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = i, n;
}
const hl = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, fl = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function pl(t, e, n = 1, i = 0, r = !0) {
  t.pathLength = 1;
  const o = r ? hl : fl;
  t[o.offset] = S.transform(-i);
  const s = S.transform(e), a = S.transform(n);
  t[o.array] = `${s} ${a}`;
}
function es(t, {
  attrX: e,
  attrY: n,
  attrScale: i,
  pathLength: r,
  pathSpacing: o = 1,
  pathOffset: s = 0,
  // This is object creation, which we try to avoid per-frame.
  ...a
}, l, d, c) {
  if (An(t, a, d), l) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  t.attrs = t.style, t.style = {};
  const { attrs: h, style: f } = t;
  h.transform && (f.transform = h.transform, delete h.transform), (f.transform || h.transformOrigin) && (f.transformOrigin = h.transformOrigin ?? "50% 50%", delete h.transformOrigin), f.transform && (f.transformBox = c?.transformBox ?? "fill-box", delete h.transformBox), e !== void 0 && (h.x = e), n !== void 0 && (h.y = n), i !== void 0 && (h.scale = i), r !== void 0 && pl(h, r, o, s, !1);
}
const ns = () => ({
  ...Pn(),
  attrs: {}
}), is = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function ml(t, e, n, i) {
  const r = pt(() => {
    const o = ns();
    return es(o, e, is(i), t.transformTemplate, t.style), {
      ...o.attrs,
      style: { ...o.style }
    };
  }, [e]);
  if (t.style) {
    const o = {};
    ts(o, t.style, t), r.style = { ...o, ...r.style };
  }
  return r;
}
const gl = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function Vn(t) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof t != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    t.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(gl.indexOf(t) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(t))
    )
  );
}
function yl(t, e, n, { latestValues: i }, r, o = !1) {
  const a = (Vn(t) ? ml : dl)(e, i, r, t), l = nl(e, typeof t == "string", o), d = t !== er ? { ...l, ...a, ref: n } : {}, { children: c } = e, h = pt(() => z(c) ? c.get() : c, [c]);
  return Gs(t, {
    ...d,
    children: h
  });
}
function oi(t) {
  const e = [{}, {}];
  return t?.values.forEach((n, i) => {
    e[0][i] = n.get(), e[1][i] = n.getVelocity();
  }), e;
}
function Dn(t, e, n, i) {
  if (typeof e == "function") {
    const [r, o] = oi(i);
    e = e(n !== void 0 ? n : t.custom, r, o);
  }
  if (typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function") {
    const [r, o] = oi(i);
    e = e(n !== void 0 ? n : t.custom, r, o);
  }
  return e;
}
function ee(t) {
  return z(t) ? t.get() : t;
}
function xl({ scrapeMotionValuesFromProps: t, createRenderState: e }, n, i, r) {
  return {
    latestValues: bl(n, i, r, t),
    renderState: e()
  };
}
function bl(t, e, n, i) {
  const r = {}, o = i(t, {});
  for (const f in o)
    r[f] = ee(o[f]);
  let { initial: s, animate: a } = t;
  const l = de(t), d = Zr(t);
  e && d && !l && t.inherit !== !1 && (s === void 0 && (s = e.initial), a === void 0 && (a = e.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || s === !1;
  const h = c ? a : s;
  if (h && typeof h != "boolean" && !ue(h)) {
    const f = Array.isArray(h) ? h : [h];
    for (let m = 0; m < f.length; m++) {
      const g = Dn(t, f[m]);
      if (g) {
        const { transitionEnd: x, transition: v, ...y } = g;
        for (const T in y) {
          let b = y[T];
          if (Array.isArray(b)) {
            const M = c ? b.length - 1 : 0;
            b = b[M];
          }
          b !== null && (r[T] = b);
        }
        for (const T in x)
          r[T] = x[T];
      }
    }
  }
  return r;
}
const rs = (t) => (e, n) => {
  const i = B(ce), r = B(le), o = () => xl(t, e, i, r);
  return n ? o() : Qe(o);
};
function kn(t, e, n) {
  const { style: i } = t, r = {};
  for (const o in i)
    (z(i[o]) || e.style && z(e.style[o]) || Qr(o, t) || n?.getValue(o)?.liveStyle !== void 0) && (r[o] = i[o]);
  return r;
}
const vl = /* @__PURE__ */ rs({
  scrapeMotionValuesFromProps: kn,
  createRenderState: Pn
});
function ss(t, e, n) {
  const i = kn(t, e, n);
  for (const r in t)
    if (z(t[r]) || z(e[r])) {
      const o = At.indexOf(r) !== -1 ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r;
      i[o] = t[r];
    }
  return i;
}
const Tl = /* @__PURE__ */ rs({
  scrapeMotionValuesFromProps: ss,
  createRenderState: ns
}), wl = Symbol.for("motionComponentSymbol");
function yt(t) {
  return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current");
}
function Sl(t, e, n) {
  return $e(
    (i) => {
      i && t.onMount && t.onMount(i), e && (i ? e.mount(i) : e.unmount()), n && (typeof n == "function" ? n(i) : yt(n) && (n.current = i));
    },
    /**
     * Include externalRef in dependencies to ensure the callback updates
     * when the ref changes, allowing proper ref forwarding.
     */
    [e]
  );
}
const En = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), Cl = "framerAppearId", os = "data-" + En(Cl), as = Ct({});
function Ml(t, e, n, i, r) {
  const { visualElement: o } = B(ce), s = B($r), a = B(le), l = B(Sn).reducedMotion, d = O(null);
  i = i || s.renderer, !d.current && i && (d.current = i(t, {
    visualState: e,
    parent: o,
    props: n,
    presenceContext: a,
    blockInitialAnimation: a ? a.initial === !1 : !1,
    reducedMotionConfig: l
  }));
  const c = d.current, h = B(as);
  c && !c.projection && r && (c.type === "html" || c.type === "svg") && Al(d.current, n, r, h);
  const f = O(!1);
  nr(() => {
    c && f.current && c.update(n, a);
  });
  const m = n[os], g = O(!!m && !window.MotionHandoffIsComplete?.(m) && window.MotionHasOptimisedAnimation?.(m));
  return ir(() => {
    c && (f.current = !0, window.MotionIsMounted = !0, c.updateFeatures(), c.scheduleRenderMicrotask(), g.current && c.animationState && c.animationState.animateChanges());
  }), Z(() => {
    c && (!g.current && c.animationState && c.animationState.animateChanges(), g.current && (queueMicrotask(() => {
      window.MotionHandoffMarkAsComplete?.(m);
    }), g.current = !1), c.enteringChildren = void 0);
  }), c;
}
function Al(t, e, n, i) {
  const { layoutId: r, layout: o, drag: s, dragConstraints: a, layoutScroll: l, layoutRoot: d, layoutCrossfade: c } = e;
  t.projection = new n(t.latestValues, e["data-framer-portal-id"] ? void 0 : ls(t.parent)), t.projection.setOptions({
    layoutId: r,
    layout: o,
    alwaysMeasureLayout: !!s || a && yt(a),
    visualElement: t,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof o == "string" ? o : "both",
    initialPromotionConfig: i,
    crossfade: c,
    layoutScroll: l,
    layoutRoot: d
  });
}
function ls(t) {
  if (t)
    return t.options.allowProjection !== !1 ? t.projection : ls(t.parent);
}
function be(t, { forwardMotionProps: e = !1 } = {}, n, i) {
  n && Qa(n);
  const r = Vn(t) ? Tl : vl;
  function o(a, l) {
    let d;
    const c = {
      ...B(Sn),
      ...a,
      layoutId: Pl(a)
    }, { isStatic: h } = c, f = rl(a), m = r(a, h);
    if (!h && tn) {
      Vl();
      const g = Dl(c);
      d = g.MeasureLayout, f.visualElement = Ml(t, m, c, i, g.ProjectionNode);
    }
    return p(ce.Provider, { value: f, children: [d && f.visualElement ? u(d, { visualElement: f.visualElement, ...c }) : null, yl(t, a, Sl(m, f.visualElement, l), m, h, e)] });
  }
  o.displayName = `motion.${typeof t == "string" ? t : `create(${t.displayName ?? t.name ?? ""})`}`;
  const s = _s(o);
  return s[wl] = t, s;
}
function Pl({ layoutId: t }) {
  const e = B(Ze).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function Vl(t, e) {
  B($r).strict;
}
function Dl(t) {
  const { drag: e, layout: n } = St;
  if (!e && !n)
    return {};
  const i = { ...e, ...n };
  return {
    MeasureLayout: e?.isEnabled(t) || n?.isEnabled(t) ? i.MeasureLayout : void 0,
    ProjectionNode: i.ProjectionNode
  };
}
function kl(t, e) {
  if (typeof Proxy > "u")
    return be;
  const n = /* @__PURE__ */ new Map(), i = (o, s) => be(o, s, t, e), r = (o, s) => i(o, s);
  return new Proxy(r, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (o, s) => s === "create" ? i : (n.has(s) || n.set(s, be(s, void 0, t, e)), n.get(s))
  });
}
function cs({ top: t, left: e, right: n, bottom: i }) {
  return {
    x: { min: e, max: n },
    y: { min: t, max: i }
  };
}
function El({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function Rl(t, e) {
  if (!e)
    return t;
  const n = e({ x: t.left, y: t.top }), i = e({ x: t.right, y: t.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: i.y,
    right: i.x
  };
}
function ve(t) {
  return t === void 0 || t === 1;
}
function Oe({ scale: t, scaleX: e, scaleY: n }) {
  return !ve(t) || !ve(e) || !ve(n);
}
function ct(t) {
  return Oe(t) || us(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
}
function us(t) {
  return ai(t.x) || ai(t.y);
}
function ai(t) {
  return t && t !== "0%";
}
function ae(t, e, n) {
  const i = t - n, r = e * i;
  return n + r;
}
function li(t, e, n, i, r) {
  return r !== void 0 && (t = ae(t, r, i)), ae(t, n, i) + e;
}
function Ue(t, e = 0, n = 1, i, r) {
  t.min = li(t.min, e, n, i, r), t.max = li(t.max, e, n, i, r);
}
function ds(t, { x: e, y: n }) {
  Ue(t.x, e.translate, e.scale, e.originPoint), Ue(t.y, n.translate, n.scale, n.originPoint);
}
const ci = 0.999999999999, ui = 1.0000000000001;
function Il(t, e, n, i = !1) {
  const r = n.length;
  if (!r)
    return;
  e.x = e.y = 1;
  let o, s;
  for (let a = 0; a < r; a++) {
    o = n[a], s = o.projectionDelta;
    const { visualElement: l } = o.options;
    l && l.props.style && l.props.style.display === "contents" || (i && o.options.layoutScroll && o.scroll && o !== o.root && bt(t, {
      x: -o.scroll.offset.x,
      y: -o.scroll.offset.y
    }), s && (e.x *= s.x.scale, e.y *= s.y.scale, ds(t, s)), i && ct(o.latestValues) && bt(t, o.latestValues));
  }
  e.x < ui && e.x > ci && (e.x = 1), e.y < ui && e.y > ci && (e.y = 1);
}
function xt(t, e) {
  t.min = t.min + e, t.max = t.max + e;
}
function di(t, e, n, i, r = 0.5) {
  const o = D(t.min, t.max, r);
  Ue(t, e, n, o, i);
}
function bt(t, e) {
  di(t.x, e.x, e.scaleX, e.scale, e.originX), di(t.y, e.y, e.scaleY, e.scale, e.originY);
}
function hs(t, e) {
  return cs(Rl(t.getBoundingClientRect(), e));
}
function Fl(t, e, n) {
  const i = hs(t, n), { scroll: r } = e;
  return r && (xt(i.x, r.offset.x), xt(i.y, r.offset.y)), i;
}
const hi = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), vt = () => ({
  x: hi(),
  y: hi()
}), fi = () => ({ min: 0, max: 0 }), E = () => ({
  x: fi(),
  y: fi()
}), Ge = { current: null }, fs = { current: !1 };
function Ll() {
  if (fs.current = !0, !!tn)
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"), e = () => Ge.current = t.matches;
      t.addEventListener("change", e), e();
    } else
      Ge.current = !1;
}
const jl = /* @__PURE__ */ new WeakMap();
function Bl(t, e, n) {
  for (const i in e) {
    const r = e[i], o = n[i];
    if (z(r))
      t.addValue(i, r);
    else if (z(o))
      t.addValue(i, wt(r, { owner: t }));
    else if (o !== r)
      if (t.hasValue(i)) {
        const s = t.getValue(i);
        s.liveStyle === !0 ? s.jump(r) : s.hasAnimated || s.set(r);
      } else {
        const s = t.getStaticValue(i);
        t.addValue(i, wt(s !== void 0 ? s : r, { owner: t }));
      }
  }
  for (const i in n)
    e[i] === void 0 && t.removeValue(i);
  return e;
}
const pi = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class zl {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(e, n, i) {
    return {};
  }
  constructor({ parent: e, props: n, presenceContext: i, reducedMotionConfig: r, blockInitialAnimation: o, visualState: s }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = xn, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const f = H.now();
      this.renderScheduledAt < f && (this.renderScheduledAt = f, V.render(this.render, !1, !0));
    };
    const { latestValues: l, renderState: d } = s;
    this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = d, this.parent = e, this.props = n, this.presenceContext = i, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = r, this.options = a, this.blockInitialAnimation = !!o, this.isControllingVariants = de(n), this.isVariantNode = Zr(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
    const { willChange: c, ...h } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const f in h) {
      const m = h[f];
      l[f] !== void 0 && z(m) && m.set(l[f]);
    }
  }
  mount(e) {
    this.current = e, jl.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, i) => this.bindToMotionValue(i, n)), fs.current || Ll(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Ge.current, this.parent?.addChild(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(), it(this.notifyUpdate), it(this.render), this.valueSubscriptions.forEach((e) => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
    for (const e in this.events)
      this.events[e].clear();
    for (const e in this.features) {
      const n = this.features[e];
      n && (n.unmount(), n.isMounted = !1);
    }
    this.current = null;
  }
  addChild(e) {
    this.children.add(e), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(e);
  }
  removeChild(e) {
    this.children.delete(e), this.enteringChildren && this.enteringChildren.delete(e);
  }
  bindToMotionValue(e, n) {
    this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
    const i = Pt.has(e);
    i && this.onBindTransform && this.onBindTransform();
    const r = n.on("change", (s) => {
      this.latestValues[e] = s, this.props.onUpdate && V.preRender(this.notifyUpdate), i && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
    });
    let o;
    window.MotionCheckAppearSync && (o = window.MotionCheckAppearSync(this, e, n)), this.valueSubscriptions.set(e, () => {
      r(), o && o(), n.owner && n.stop();
    });
  }
  sortNodePosition(e) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current);
  }
  updateFeatures() {
    let e = "animation";
    for (e in St) {
      const n = St[e];
      if (!n)
        continue;
      const { isEnabled: i, Feature: r } = n;
      if (!this.features[e] && r && i(this.props) && (this.features[e] = new r(this)), this.features[e]) {
        const o = this.features[e];
        o.isMounted ? o.update() : (o.mount(), o.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : E();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, n) {
    this.latestValues[e] = n;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(e, n) {
    (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let i = 0; i < pi.length; i++) {
      const r = pi[i];
      this.propEventSubscriptions[r] && (this.propEventSubscriptions[r](), delete this.propEventSubscriptions[r]);
      const o = "on" + r, s = e[o];
      s && (this.propEventSubscriptions[r] = this.on(r, s));
    }
    this.prevMotionValues = Bl(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(e) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(e), () => n.variantChildren.delete(e);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(e, n) {
    const i = this.values.get(e);
    n !== i && (i && this.removeValue(e), this.bindToMotionValue(e, n), this.values.set(e, n), this.latestValues[e] = n.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(e) {
    this.values.delete(e);
    const n = this.valueSubscriptions.get(e);
    n && (n(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, n) {
    if (this.props.values && this.props.values[e])
      return this.props.values[e];
    let i = this.values.get(e);
    return i === void 0 && n !== void 0 && (i = wt(n === null ? void 0 : n, { owner: this }), this.addValue(e, i)), i;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(e, n) {
    let i = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
    return i != null && (typeof i == "string" && (rr(i) || or(i)) ? i = parseFloat(i) : !Ya(i) && rt.test(n) && (i = Hr(e, n)), this.setBaseTarget(e, z(i) ? i.get() : i)), z(i) ? i.get() : i;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(e, n) {
    this.baseTarget[e] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(e) {
    const { initial: n } = this.props;
    let i;
    if (typeof n == "string" || typeof n == "object") {
      const o = Dn(this.props, n, this.presenceContext?.custom);
      o && (i = o[e]);
    }
    if (n && i !== void 0)
      return i;
    const r = this.getBaseTargetFromProps(this.props, e);
    return r !== void 0 && !z(r) ? r : this.initialValues[e] !== void 0 && i === void 0 ? void 0 : this.baseTarget[e];
  }
  on(e, n) {
    return this.events[e] || (this.events[e] = new on()), this.events[e].add(n);
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n);
  }
  scheduleRenderMicrotask() {
    Tn.render(this.render);
  }
}
class ps extends zl {
  constructor() {
    super(...arguments), this.KeyframeResolver = La;
  }
  sortInstanceNodePosition(e, n) {
    return e.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, n) {
    return e.style ? e.style[n] : void 0;
  }
  removeValueFromRenderState(e, { vars: n, style: i }) {
    delete n[e], delete i[e];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: e } = this.props;
    z(e) && (this.childSubscription = e.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function ms(t, { style: e, vars: n }, i, r) {
  const o = t.style;
  let s;
  for (s in e)
    o[s] = e[s];
  r?.applyProjectionStyles(o, i);
  for (s in n)
    o.setProperty(s, n[s]);
}
function Wl(t) {
  return window.getComputedStyle(t);
}
class Nl extends ps {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = ms;
  }
  readValueFromInstance(e, n) {
    if (Pt.has(n))
      return this.projection?.isProjecting ? Fe(n) : ta(e, n);
    {
      const i = Wl(e), r = (cn(n) ? i.getPropertyValue(n) : i[n]) || 0;
      return typeof r == "string" ? r.trim() : r;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return hs(e, n);
  }
  build(e, n, i) {
    An(e, n, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, n, i) {
    return kn(e, n, i);
  }
}
const gs = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function Hl(t, e, n, i) {
  ms(t, e, void 0, i);
  for (const r in e.attrs)
    t.setAttribute(gs.has(r) ? r : En(r), e.attrs[r]);
}
class Ol extends ps {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = E;
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    if (Pt.has(n)) {
      const i = Nr(n);
      return i && i.default || 0;
    }
    return n = gs.has(n) ? n : En(n), e.getAttribute(n);
  }
  scrapeMotionValuesFromProps(e, n, i) {
    return ss(e, n, i);
  }
  build(e, n, i) {
    es(e, n, this.isSVGTag, i.transformTemplate, i.style);
  }
  renderInstance(e, n, i, r) {
    Hl(e, n, i, r);
  }
  mount(e) {
    this.isSVGTag = is(e.tagName), super.mount(e);
  }
}
const Ul = (t, e) => Vn(t) ? new Ol(e) : new Nl(e, {
  allowProjection: t !== er
});
function Tt(t, e, n) {
  const i = t.getProps();
  return Dn(i, e, n !== void 0 ? n : i.custom, t);
}
const _e = (t) => Array.isArray(t);
function Gl(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, wt(n));
}
function _l(t) {
  return _e(t) ? t[t.length - 1] || 0 : t;
}
function Yl(t, e) {
  const n = Tt(t, e);
  let { transitionEnd: i = {}, transition: r = {}, ...o } = n || {};
  o = { ...o, ...i };
  for (const s in o) {
    const a = _l(o[s]);
    Gl(t, s, a);
  }
}
function Xl(t) {
  return !!(z(t) && t.add);
}
function Ye(t, e) {
  const n = t.getValue("willChange");
  if (Xl(n))
    return n.add(e);
  if (!n && tt.WillChange) {
    const i = new tt.WillChange("auto");
    t.addValue("willChange", i), i.add(e);
  }
}
function ys(t) {
  return t.props[os];
}
const Kl = (t) => t !== null;
function ql(t, { repeat: e, repeatType: n = "loop" }, i) {
  const r = t.filter(Kl), o = e && n !== "loop" && e % 2 === 1 ? 0 : r.length - 1;
  return r[o];
}
const $l = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, Jl = (t) => ({
  type: "spring",
  stiffness: 550,
  damping: t === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), Zl = {
  type: "keyframes",
  duration: 0.8
}, Ql = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, tc = (t, { keyframes: e }) => e.length > 2 ? Zl : Pt.has(t) ? t.startsWith("scale") ? Jl(e[1]) : $l : Ql;
function ec({ when: t, delay: e, delayChildren: n, staggerChildren: i, staggerDirection: r, repeat: o, repeatType: s, repeatDelay: a, from: l, elapsed: d, ...c }) {
  return !!Object.keys(c).length;
}
const Rn = (t, e, n, i = {}, r, o) => (s) => {
  const a = bn(i, t) || {}, l = a.delay || i.delay || 0;
  let { elapsed: d = 0 } = i;
  d = d - /* @__PURE__ */ $(l);
  const c = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: e.getVelocity(),
    ...a,
    delay: -d,
    onUpdate: (f) => {
      e.set(f), a.onUpdate && a.onUpdate(f);
    },
    onComplete: () => {
      s(), a.onComplete && a.onComplete();
    },
    name: t,
    motionValue: e,
    element: o ? void 0 : r
  };
  ec(a) || Object.assign(c, tc(t, c)), c.duration && (c.duration = /* @__PURE__ */ $(c.duration)), c.repeatDelay && (c.repeatDelay = /* @__PURE__ */ $(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
  let h = !1;
  if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (We(c), c.delay === 0 && (h = !0)), (tt.instantAnimations || tt.skipAnimations) && (h = !0, We(c), c.delay = 0), c.allowFlatten = !a.type && !a.ease, h && !o && e.get() !== void 0) {
    const f = ql(c.keyframes, a);
    if (f !== void 0) {
      V.update(() => {
        c.onUpdate(f), c.onComplete();
      });
      return;
    }
  }
  return a.isSync ? new yn(c) : new Sa(c);
};
function nc({ protectedKeys: t, needsAnimating: e }, n) {
  const i = t.hasOwnProperty(n) && e[n] !== !0;
  return e[n] = !1, i;
}
function xs(t, e, { delay: n = 0, transitionOverride: i, type: r } = {}) {
  let { transition: o = t.getDefaultTransition(), transitionEnd: s, ...a } = e;
  i && (o = i);
  const l = [], d = r && t.animationState && t.animationState.getState()[r];
  for (const c in a) {
    const h = t.getValue(c, t.latestValues[c] ?? null), f = a[c];
    if (f === void 0 || d && nc(d, c))
      continue;
    const m = {
      delay: n,
      ...bn(o || {}, c)
    }, g = h.get();
    if (g !== void 0 && !h.isAnimating && !Array.isArray(f) && f === g && !m.velocity)
      continue;
    let x = !1;
    if (window.MotionHandoffAnimation) {
      const y = ys(t);
      if (y) {
        const T = window.MotionHandoffAnimation(y, c, V);
        T !== null && (m.startTime = T, x = !0);
      }
    }
    Ye(t, c), h.start(Rn(c, h, f, t.shouldReduceMotion && Br.has(c) ? { type: !1 } : m, t, x));
    const v = h.animation;
    v && l.push(v);
  }
  return s && Promise.all(l).then(() => {
    V.update(() => {
      s && Yl(t, s);
    });
  }), l;
}
function bs(t, e, n, i = 0, r = 1) {
  const o = Array.from(t).sort((d, c) => d.sortNodePosition(c)).indexOf(e), s = t.size, a = (s - 1) * i;
  return typeof n == "function" ? n(o, s) : r === 1 ? o * i : a - o * i;
}
function Xe(t, e, n = {}) {
  const i = Tt(t, e, n.type === "exit" ? t.presenceContext?.custom : void 0);
  let { transition: r = t.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (r = n.transitionOverride);
  const o = i ? () => Promise.all(xs(t, i, n)) : () => Promise.resolve(), s = t.variantChildren && t.variantChildren.size ? (l = 0) => {
    const { delayChildren: d = 0, staggerChildren: c, staggerDirection: h } = r;
    return ic(t, e, l, d, c, h, n);
  } : () => Promise.resolve(), { when: a } = r;
  if (a) {
    const [l, d] = a === "beforeChildren" ? [o, s] : [s, o];
    return l().then(() => d());
  } else
    return Promise.all([o(), s(n.delay)]);
}
function ic(t, e, n = 0, i = 0, r = 0, o = 1, s) {
  const a = [];
  for (const l of t.variantChildren)
    l.notify("AnimationStart", e), a.push(Xe(l, e, {
      ...s,
      delay: n + (typeof i == "function" ? 0 : i) + bs(t.variantChildren, l, i, r, o)
    }).then(() => l.notify("AnimationComplete", e)));
  return Promise.all(a);
}
function rc(t, e, n = {}) {
  t.notify("AnimationStart", e);
  let i;
  if (Array.isArray(e)) {
    const r = e.map((o) => Xe(t, o, n));
    i = Promise.all(r);
  } else if (typeof e == "string")
    i = Xe(t, e, n);
  else {
    const r = typeof e == "function" ? Tt(t, e, n.custom) : e;
    i = Promise.all(xs(t, r, n));
  }
  return i.then(() => {
    t.notify("AnimationComplete", e);
  });
}
function vs(t, e) {
  if (!Array.isArray(e))
    return !1;
  const n = e.length;
  if (n !== t.length)
    return !1;
  for (let i = 0; i < n; i++)
    if (e[i] !== t[i])
      return !1;
  return !0;
}
const sc = Mn.length;
function Ts(t) {
  if (!t)
    return;
  if (!t.isControllingVariants) {
    const n = t.parent ? Ts(t.parent) || {} : {};
    return t.props.initial !== void 0 && (n.initial = t.props.initial), n;
  }
  const e = {};
  for (let n = 0; n < sc; n++) {
    const i = Mn[n], r = t.props[i];
    (Ht(r) || r === !1) && (e[i] = r);
  }
  return e;
}
const oc = [...Cn].reverse(), ac = Cn.length;
function lc(t) {
  return (e) => Promise.all(e.map(({ animation: n, options: i }) => rc(t, n, i)));
}
function cc(t) {
  let e = lc(t), n = mi(), i = !0;
  const r = (l) => (d, c) => {
    const h = Tt(t, c, l === "exit" ? t.presenceContext?.custom : void 0);
    if (h) {
      const { transition: f, transitionEnd: m, ...g } = h;
      d = { ...d, ...g, ...m };
    }
    return d;
  };
  function o(l) {
    e = l(t);
  }
  function s(l) {
    const { props: d } = t, c = Ts(t.parent) || {}, h = [], f = /* @__PURE__ */ new Set();
    let m = {}, g = 1 / 0;
    for (let v = 0; v < ac; v++) {
      const y = oc[v], T = n[y], b = d[y] !== void 0 ? d[y] : c[y], M = Ht(b), w = y === l ? T.isActive : null;
      w === !1 && (g = v);
      let A = b === c[y] && b !== d[y] && M;
      if (A && i && t.manuallyAnimateOnMount && (A = !1), T.protectedKeys = { ...m }, // If it isn't active and hasn't *just* been set as inactive
      !T.isActive && w === null || // If we didn't and don't have any defined prop for this animation type
      !b && !T.prevProp || // Or if the prop doesn't define an animation
      ue(b) || typeof b == "boolean")
        continue;
      const P = uc(T.prevProp, b);
      let C = P || // If we're making this variant active, we want to always make it active
      y === l && T.isActive && !A && M || // If we removed a higher-priority variant (i is in reverse order)
      v > g && M, F = !1;
      const W = Array.isArray(b) ? b : [b];
      let et = W.reduce(r(y), {});
      w === !1 && (et = {});
      const { prevResolvedValues: In = {} } = T, zs = {
        ...In,
        ...et
      }, Fn = (L) => {
        C = !0, f.has(L) && (F = !0, f.delete(L)), T.needsAnimating[L] = !0;
        const G = t.getValue(L);
        G && (G.liveStyle = !1);
      };
      for (const L in zs) {
        const G = et[L], ot = In[L];
        if (m.hasOwnProperty(L))
          continue;
        let mt = !1;
        _e(G) && _e(ot) ? mt = !vs(G, ot) : mt = G !== ot, mt ? G != null ? Fn(L) : f.add(L) : G !== void 0 && f.has(L) ? Fn(L) : T.protectedKeys[L] = !0;
      }
      T.prevProp = b, T.prevResolvedValues = et, T.isActive && (m = { ...m, ...et }), i && t.blockInitialAnimation && (C = !1);
      const Ln = A && P;
      C && (!Ln || F) && h.push(...W.map((L) => {
        const G = { type: y };
        if (typeof L == "string" && i && !Ln && t.manuallyAnimateOnMount && t.parent) {
          const { parent: ot } = t, mt = Tt(ot, L);
          if (ot.enteringChildren && mt) {
            const { delayChildren: Ws } = mt.transition || {};
            G.delay = bs(ot.enteringChildren, t, Ws);
          }
        }
        return {
          animation: L,
          options: G
        };
      }));
    }
    if (f.size) {
      const v = {};
      if (typeof d.initial != "boolean") {
        const y = Tt(t, Array.isArray(d.initial) ? d.initial[0] : d.initial);
        y && y.transition && (v.transition = y.transition);
      }
      f.forEach((y) => {
        const T = t.getBaseTarget(y), b = t.getValue(y);
        b && (b.liveStyle = !0), v[y] = T ?? null;
      }), h.push({ animation: v });
    }
    let x = !!h.length;
    return i && (d.initial === !1 || d.initial === d.animate) && !t.manuallyAnimateOnMount && (x = !1), i = !1, x ? e(h) : Promise.resolve();
  }
  function a(l, d) {
    if (n[l].isActive === d)
      return Promise.resolve();
    t.variantChildren?.forEach((h) => h.animationState?.setActive(l, d)), n[l].isActive = d;
    const c = s(l);
    for (const h in n)
      n[h].protectedKeys = {};
    return c;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      n = mi();
    }
  };
}
function uc(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !vs(e, t) : !1;
}
function at(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function mi() {
  return {
    animate: at(!0),
    whileInView: at(),
    whileHover: at(),
    whileTap: at(),
    whileDrag: at(),
    whileFocus: at(),
    exit: at()
  };
}
class st {
  constructor(e) {
    this.isMounted = !1, this.node = e;
  }
  update() {
  }
}
class dc extends st {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(e) {
    super(e), e.animationState || (e.animationState = cc(e));
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps();
    ue(e) && (this.unmountControls = e.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: e } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    e !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    this.node.animationState.reset(), this.unmountControls?.();
  }
}
let hc = 0;
class fc extends st {
  constructor() {
    super(...arguments), this.id = hc++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: e, onExitComplete: n } = this.node.presenceContext, { isPresent: i } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || e === i)
      return;
    const r = this.node.animationState.setActive("exit", !e);
    n && !e && r.then(() => {
      n(this.id);
    });
  }
  mount() {
    const { register: e, onExitComplete: n } = this.node.presenceContext || {};
    n && n(this.id), e && (this.unmount = e(this.id));
  }
  unmount() {
  }
}
const pc = {
  animation: {
    Feature: dc
  },
  exit: {
    Feature: fc
  }
};
function Ut(t, e, n, i = { passive: !0 }) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n);
}
function Xt(t) {
  return {
    point: {
      x: t.pageX,
      y: t.pageY
    }
  };
}
const mc = (t) => (e) => wn(e) && t(e, Xt(e));
function Lt(t, e, n, i) {
  return Ut(t, e, mc(n), i);
}
const ws = 1e-4, gc = 1 - ws, yc = 1 + ws, Ss = 0.01, xc = 0 - Ss, bc = 0 + Ss;
function N(t) {
  return t.max - t.min;
}
function vc(t, e, n) {
  return Math.abs(t - e) <= n;
}
function gi(t, e, n, i = 0.5) {
  t.origin = i, t.originPoint = D(e.min, e.max, t.origin), t.scale = N(n) / N(e), t.translate = D(n.min, n.max, t.origin) - t.originPoint, (t.scale >= gc && t.scale <= yc || isNaN(t.scale)) && (t.scale = 1), (t.translate >= xc && t.translate <= bc || isNaN(t.translate)) && (t.translate = 0);
}
function jt(t, e, n, i) {
  gi(t.x, e.x, n.x, i ? i.originX : void 0), gi(t.y, e.y, n.y, i ? i.originY : void 0);
}
function yi(t, e, n) {
  t.min = n.min + e.min, t.max = t.min + N(e);
}
function Tc(t, e, n) {
  yi(t.x, e.x, n.x), yi(t.y, e.y, n.y);
}
function xi(t, e, n) {
  t.min = e.min - n.min, t.max = t.min + N(e);
}
function Bt(t, e, n) {
  xi(t.x, e.x, n.x), xi(t.y, e.y, n.y);
}
function Y(t) {
  return [t("x"), t("y")];
}
const Cs = ({ current: t }) => t ? t.ownerDocument.defaultView : null, bi = (t, e) => Math.abs(t - e);
function wc(t, e) {
  const n = bi(t.x, e.x), i = bi(t.y, e.y);
  return Math.sqrt(n ** 2 + i ** 2);
}
class Ms {
  constructor(e, n, { transformPagePoint: i, contextWindow: r = window, dragSnapToOrigin: o = !1, distanceThreshold: s = 3 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const f = we(this.lastMoveEventInfo, this.history), m = this.startEvent !== null, g = wc(f.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!m && !g)
        return;
      const { point: x } = f, { timestamp: v } = j;
      this.history.push({ ...x, timestamp: v });
      const { onStart: y, onMove: T } = this.handlers;
      m || (y && y(this.lastMoveEvent, f), this.startEvent = this.lastMoveEvent), T && T(this.lastMoveEvent, f);
    }, this.handlePointerMove = (f, m) => {
      this.lastMoveEvent = f, this.lastMoveEventInfo = Te(m, this.transformPagePoint), V.update(this.updatePoint, !0);
    }, this.handlePointerUp = (f, m) => {
      this.end();
      const { onEnd: g, onSessionEnd: x, resumeAnimation: v } = this.handlers;
      if (this.dragSnapToOrigin && v && v(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const y = we(f.type === "pointercancel" ? this.lastMoveEventInfo : Te(m, this.transformPagePoint), this.history);
      this.startEvent && g && g(f, y), x && x(f, y);
    }, !wn(e))
      return;
    this.dragSnapToOrigin = o, this.handlers = n, this.transformPagePoint = i, this.distanceThreshold = s, this.contextWindow = r || window;
    const a = Xt(e), l = Te(a, this.transformPagePoint), { point: d } = l, { timestamp: c } = j;
    this.history = [{ ...d, timestamp: c }];
    const { onSessionStart: h } = n;
    h && h(e, we(l, this.history)), this.removeListeners = Gt(Lt(this.contextWindow, "pointermove", this.handlePointerMove), Lt(this.contextWindow, "pointerup", this.handlePointerUp), Lt(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(), it(this.updatePoint);
  }
}
function Te(t, e) {
  return e ? { point: e(t.point) } : t;
}
function vi(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function we({ point: t }, e) {
  return {
    point: t,
    delta: vi(t, As(e)),
    offset: vi(t, Sc(e)),
    velocity: Cc(e, 0.1)
  };
}
function Sc(t) {
  return t[0];
}
function As(t) {
  return t[t.length - 1];
}
function Cc(t, e) {
  if (t.length < 2)
    return { x: 0, y: 0 };
  let n = t.length - 1, i = null;
  const r = As(t);
  for (; n >= 0 && (i = t[n], !(r.timestamp - i.timestamp > /* @__PURE__ */ $(e))); )
    n--;
  if (!i)
    return { x: 0, y: 0 };
  const o = /* @__PURE__ */ X(r.timestamp - i.timestamp);
  if (o === 0)
    return { x: 0, y: 0 };
  const s = {
    x: (r.x - i.x) / o,
    y: (r.y - i.y) / o
  };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function Mc(t, { min: e, max: n }, i) {
  return e !== void 0 && t < e ? t = i ? D(e, t, i.min) : Math.max(t, e) : n !== void 0 && t > n && (t = i ? D(n, t, i.max) : Math.min(t, n)), t;
}
function Ti(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
  };
}
function Ac(t, { top: e, left: n, bottom: i, right: r }) {
  return {
    x: Ti(t.x, n, r),
    y: Ti(t.y, e, i)
  };
}
function wi(t, e) {
  let n = e.min - t.min, i = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([n, i] = [i, n]), { min: n, max: i };
}
function Pc(t, e) {
  return {
    x: wi(t.x, e.x),
    y: wi(t.y, e.y)
  };
}
function Vc(t, e) {
  let n = 0.5;
  const i = N(t), r = N(e);
  return r > i ? n = /* @__PURE__ */ zt(e.min, e.max - i, t.min) : i > r && (n = /* @__PURE__ */ zt(t.min, t.max - r, e.min)), Q(0, 1, n);
}
function Dc(t, e) {
  const n = {};
  return e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n;
}
const Ke = 0.35;
function kc(t = Ke) {
  return t === !1 ? t = 0 : t === !0 && (t = Ke), {
    x: Si(t, "left", "right"),
    y: Si(t, "top", "bottom")
  };
}
function Si(t, e, n) {
  return {
    min: Ci(t, e),
    max: Ci(t, n)
  };
}
function Ci(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
const Ec = /* @__PURE__ */ new WeakMap();
class Rc {
  constructor(e) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = E(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = e;
  }
  start(e, { snapToCursor: n = !1, distanceThreshold: i } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1)
      return;
    const o = (h) => {
      const { dragSnapToOrigin: f } = this.getProps();
      f ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Xt(h).point);
    }, s = (h, f) => {
      const { drag: m, dragPropagation: g, onDragStart: x } = this.getProps();
      if (m && !g && (this.openDragLock && this.openDragLock(), this.openDragLock = za(m), !this.openDragLock))
        return;
      this.latestPointerEvent = h, this.latestPanInfo = f, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Y((y) => {
        let T = this.getAxisMotionValue(y).get() || 0;
        if (J.test(T)) {
          const { projection: b } = this.visualElement;
          if (b && b.layout) {
            const M = b.layout.layoutBox[y];
            M && (T = N(M) * (parseFloat(T) / 100));
          }
        }
        this.originPoint[y] = T;
      }), x && V.postRender(() => x(h, f)), Ye(this.visualElement, "transform");
      const { animationState: v } = this.visualElement;
      v && v.setActive("whileDrag", !0);
    }, a = (h, f) => {
      this.latestPointerEvent = h, this.latestPanInfo = f;
      const { dragPropagation: m, dragDirectionLock: g, onDirectionLock: x, onDrag: v } = this.getProps();
      if (!m && !this.openDragLock)
        return;
      const { offset: y } = f;
      if (g && this.currentDirection === null) {
        this.currentDirection = Ic(y), this.currentDirection !== null && x && x(this.currentDirection);
        return;
      }
      this.updateAxis("x", f.point, y), this.updateAxis("y", f.point, y), this.visualElement.render(), v && v(h, f);
    }, l = (h, f) => {
      this.latestPointerEvent = h, this.latestPanInfo = f, this.stop(h, f), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, d = () => Y((h) => this.getAnimationState(h) === "paused" && this.getAxisMotionValue(h).animation?.play()), { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new Ms(e, {
      onSessionStart: o,
      onStart: s,
      onMove: a,
      onSessionEnd: l,
      resumeAnimation: d
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: c,
      distanceThreshold: i,
      contextWindow: Cs(this.visualElement)
    });
  }
  /**
   * @internal
   */
  stop(e, n) {
    const i = e || this.latestPointerEvent, r = n || this.latestPanInfo, o = this.isDragging;
    if (this.cancel(), !o || !r || !i)
      return;
    const { velocity: s } = r;
    this.startAnimation(s);
    const { onDragEnd: a } = this.getProps();
    a && V.postRender(() => a(i, r));
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = !1;
    const { projection: e, animationState: n } = this.visualElement;
    e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: i } = this.getProps();
    !i && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1);
  }
  updateAxis(e, n, i) {
    const { drag: r } = this.getProps();
    if (!i || !Zt(e, r, this.currentDirection))
      return;
    const o = this.getAxisMotionValue(e);
    let s = this.originPoint[e] + i[e];
    this.constraints && this.constraints[e] && (s = Mc(s, this.constraints[e], this.elastic[e])), o.set(s);
  }
  resolveConstraints() {
    const { dragConstraints: e, dragElastic: n } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, r = this.constraints;
    e && yt(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && i ? this.constraints = Ac(i.layoutBox, e) : this.constraints = !1, this.elastic = kc(n), r !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && Y((o) => {
      this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = Dc(i.layoutBox[o], this.constraints[o]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
    if (!e || !yt(e))
      return !1;
    const i = e.current, { projection: r } = this.visualElement;
    if (!r || !r.layout)
      return !1;
    const o = Fl(i, r.root, this.visualElement.getTransformPagePoint());
    let s = Pc(r.layout.layoutBox, o);
    if (n) {
      const a = n(El(s));
      this.hasMutatedConstraints = !!a, a && (s = cs(a));
    }
    return s;
  }
  startAnimation(e) {
    const { drag: n, dragMomentum: i, dragElastic: r, dragTransition: o, dragSnapToOrigin: s, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, d = Y((c) => {
      if (!Zt(c, n, this.currentDirection))
        return;
      let h = l && l[c] || {};
      s && (h = { min: 0, max: 0 });
      const f = r ? 200 : 1e6, m = r ? 40 : 1e7, g = {
        type: "inertia",
        velocity: i ? e[c] : 0,
        bounceStiffness: f,
        bounceDamping: m,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...o,
        ...h
      };
      return this.startAxisValueAnimation(c, g);
    });
    return Promise.all(d).then(a);
  }
  startAxisValueAnimation(e, n) {
    const i = this.getAxisMotionValue(e);
    return Ye(this.visualElement, e), i.start(Rn(e, i, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    Y((e) => this.getAxisMotionValue(e).stop());
  }
  pauseAnimation() {
    Y((e) => this.getAxisMotionValue(e).animation?.pause());
  }
  getAnimationState(e) {
    return this.getAxisMotionValue(e).animation?.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(e) {
    const n = `_drag${e.toUpperCase()}`, i = this.visualElement.getProps(), r = i[n];
    return r || this.visualElement.getValue(e, (i.initial ? i.initial[e] : void 0) || 0);
  }
  snapToCursor(e) {
    Y((n) => {
      const { drag: i } = this.getProps();
      if (!Zt(n, i, this.currentDirection))
        return;
      const { projection: r } = this.visualElement, o = this.getAxisMotionValue(n);
      if (r && r.layout) {
        const { min: s, max: a } = r.layout.layoutBox[n];
        o.set(e[n] - D(s, a, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: e, dragConstraints: n } = this.getProps(), { projection: i } = this.visualElement;
    if (!yt(n) || !i || !this.constraints)
      return;
    this.stopAnimation();
    const r = { x: 0, y: 0 };
    Y((s) => {
      const a = this.getAxisMotionValue(s);
      if (a && this.constraints !== !1) {
        const l = a.get();
        r[s] = Vc({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    this.visualElement.current.style.transform = o ? o({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), Y((s) => {
      if (!Zt(s, e, null))
        return;
      const a = this.getAxisMotionValue(s), { min: l, max: d } = this.constraints[s];
      a.set(D(l, d, r[s]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    Ec.set(this.visualElement, this);
    const e = this.visualElement.current, n = Lt(e, "pointerdown", (l) => {
      const { drag: d, dragListener: c = !0 } = this.getProps();
      d && c && this.start(l);
    }), i = () => {
      const { dragConstraints: l } = this.getProps();
      yt(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: r } = this.visualElement, o = r.addEventListener("measure", i);
    r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()), V.read(i);
    const s = Ut(window, "resize", () => this.scalePositionWithinConstraints()), a = r.addEventListener("didUpdate", (({ delta: l, hasLayoutChanged: d }) => {
      this.isDragging && d && (Y((c) => {
        const h = this.getAxisMotionValue(c);
        h && (this.originPoint[c] += l[c].translate, h.set(h.get() + l[c].translate));
      }), this.visualElement.render());
    }));
    return () => {
      s(), n(), o(), a && a();
    };
  }
  getProps() {
    const e = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: i = !1, dragPropagation: r = !1, dragConstraints: o = !1, dragElastic: s = Ke, dragMomentum: a = !0 } = e;
    return {
      ...e,
      drag: n,
      dragDirectionLock: i,
      dragPropagation: r,
      dragConstraints: o,
      dragElastic: s,
      dragMomentum: a
    };
  }
}
function Zt(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t);
}
function Ic(t, e = 10) {
  let n = null;
  return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n;
}
class Fc extends st {
  constructor(e) {
    super(e), this.removeGroupControls = K, this.removeListeners = K, this.controls = new Rc(e);
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || K;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Mi = (t) => (e, n) => {
  t && V.postRender(() => t(e, n));
};
class Lc extends st {
  constructor() {
    super(...arguments), this.removePointerDownListener = K;
  }
  onPointerDown(e) {
    this.session = new Ms(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Cs(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: e, onPanStart: n, onPan: i, onPanEnd: r } = this.node.getProps();
    return {
      onSessionStart: Mi(e),
      onStart: Mi(n),
      onMove: i,
      onEnd: (o, s) => {
        delete this.session, r && V.postRender(() => r(o, s));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Lt(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const ne = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function Ai(t, e) {
  return e.max === e.min ? 0 : t / (e.max - e.min) * 100;
}
const Dt = {
  correct: (t, e) => {
    if (!e.target)
      return t;
    if (typeof t == "string")
      if (S.test(t))
        t = parseFloat(t);
      else
        return t;
    const n = Ai(t, e.target.x), i = Ai(t, e.target.y);
    return `${n}% ${i}%`;
  }
}, jc = {
  correct: (t, { treeScale: e, projectionDelta: n }) => {
    const i = t, r = rt.parse(t);
    if (r.length > 5)
      return i;
    const o = rt.createTransformer(t), s = typeof r[0] != "number" ? 1 : 0, a = n.x.scale * e.x, l = n.y.scale * e.y;
    r[0 + s] /= a, r[1 + s] /= l;
    const d = D(a, l, 0.5);
    return typeof r[2 + s] == "number" && (r[2 + s] /= d), typeof r[3 + s] == "number" && (r[3 + s] /= d), o(r);
  }
};
let Se = !1;
class Bc extends tr {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: i, layoutId: r } = this.props, { projection: o } = e;
    sl(zc), o && (n.group && n.group.add(o), i && i.register && r && i.register(o), Se && o.root.didUpdate(), o.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), o.setOptions({
      ...o.options,
      onExitComplete: () => this.safeToRemove()
    })), ne.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(e) {
    const { layoutDependency: n, visualElement: i, drag: r, isPresent: o } = this.props, { projection: s } = i;
    return s && (s.isPresent = o, Se = !0, r || e.layoutDependency !== n || n === void 0 || e.isPresent !== o ? s.willUpdate() : this.safeToRemove(), e.isPresent !== o && (o ? s.promote() : s.relegate() || V.postRender(() => {
      const a = s.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: e } = this.props.visualElement;
    e && (e.root.didUpdate(), Tn.postRender(() => {
      !e.currentAnimation && e.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: i } = this.props, { projection: r } = e;
    Se = !0, r && (r.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(r), i && i.deregister && i.deregister(r));
  }
  safeToRemove() {
    const { safeToRemove: e } = this.props;
    e && e();
  }
  render() {
    return null;
  }
}
function Ps(t) {
  const [e, n] = qr(), i = B(Ze);
  return u(Bc, { ...t, layoutGroup: i, switchLayoutGroup: B(as), isPresent: e, safeToRemove: n });
}
const zc = {
  borderRadius: {
    ...Dt,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Dt,
  borderTopRightRadius: Dt,
  borderBottomLeftRadius: Dt,
  borderBottomRightRadius: Dt,
  boxShadow: jc
};
function Wc(t, e, n) {
  const i = z(t) ? t : wt(t);
  return i.start(Rn("", i, e, n)), i.animation;
}
const Nc = (t, e) => t.depth - e.depth;
class Hc {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(e) {
    en(this.children, e), this.isDirty = !0;
  }
  remove(e) {
    nn(this.children, e), this.isDirty = !0;
  }
  forEach(e) {
    this.isDirty && this.children.sort(Nc), this.isDirty = !1, this.children.forEach(e);
  }
}
function Oc(t, e) {
  const n = H.now(), i = ({ timestamp: r }) => {
    const o = r - n;
    o >= e && (it(i), t(o - e));
  };
  return V.setup(i, !0), () => it(i);
}
const Vs = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], Uc = Vs.length, Pi = (t) => typeof t == "string" ? parseFloat(t) : t, Vi = (t) => typeof t == "number" || S.test(t);
function Gc(t, e, n, i, r, o) {
  r ? (t.opacity = D(0, n.opacity ?? 1, _c(i)), t.opacityExit = D(e.opacity ?? 1, 0, Yc(i))) : o && (t.opacity = D(e.opacity ?? 1, n.opacity ?? 1, i));
  for (let s = 0; s < Uc; s++) {
    const a = `border${Vs[s]}Radius`;
    let l = Di(e, a), d = Di(n, a);
    if (l === void 0 && d === void 0)
      continue;
    l || (l = 0), d || (d = 0), l === 0 || d === 0 || Vi(l) === Vi(d) ? (t[a] = Math.max(D(Pi(l), Pi(d), i), 0), (J.test(d) || J.test(l)) && (t[a] += "%")) : t[a] = d;
  }
  (e.rotate || n.rotate) && (t.rotate = D(e.rotate || 0, n.rotate || 0, i));
}
function Di(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const _c = /* @__PURE__ */ Ds(0, 0.5, pr), Yc = /* @__PURE__ */ Ds(0.5, 0.95, K);
function Ds(t, e, n) {
  return (i) => i < t ? 0 : i > e ? 1 : n(/* @__PURE__ */ zt(t, e, i));
}
function ki(t, e) {
  t.min = e.min, t.max = e.max;
}
function _(t, e) {
  ki(t.x, e.x), ki(t.y, e.y);
}
function Ei(t, e) {
  t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin;
}
function Ri(t, e, n, i, r) {
  return t -= e, t = ae(t, 1 / n, i), r !== void 0 && (t = ae(t, 1 / r, i)), t;
}
function Xc(t, e = 0, n = 1, i = 0.5, r, o = t, s = t) {
  if (J.test(e) && (e = parseFloat(e), e = D(s.min, s.max, e / 100) - s.min), typeof e != "number")
    return;
  let a = D(o.min, o.max, i);
  t === o && (a -= e), t.min = Ri(t.min, e, n, a, r), t.max = Ri(t.max, e, n, a, r);
}
function Ii(t, e, [n, i, r], o, s) {
  Xc(t, e[n], e[i], e[r], e.scale, o, s);
}
const Kc = ["x", "scaleX", "originX"], qc = ["y", "scaleY", "originY"];
function Fi(t, e, n, i) {
  Ii(t.x, e, Kc, n ? n.x : void 0, i ? i.x : void 0), Ii(t.y, e, qc, n ? n.y : void 0, i ? i.y : void 0);
}
function Li(t) {
  return t.translate === 0 && t.scale === 1;
}
function ks(t) {
  return Li(t.x) && Li(t.y);
}
function ji(t, e) {
  return t.min === e.min && t.max === e.max;
}
function $c(t, e) {
  return ji(t.x, e.x) && ji(t.y, e.y);
}
function Bi(t, e) {
  return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max);
}
function Es(t, e) {
  return Bi(t.x, e.x) && Bi(t.y, e.y);
}
function zi(t) {
  return N(t.x) / N(t.y);
}
function Wi(t, e) {
  return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint;
}
class Jc {
  constructor() {
    this.members = [];
  }
  add(e) {
    en(this.members, e), e.scheduleRender();
  }
  remove(e) {
    if (nn(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(e) {
    const n = this.members.findIndex((r) => e === r);
    if (n === 0)
      return !1;
    let i;
    for (let r = n; r >= 0; r--) {
      const o = this.members[r];
      if (o.isPresent !== !1) {
        i = o;
        break;
      }
    }
    return i ? (this.promote(i), !0) : !1;
  }
  promote(e, n) {
    const i = this.lead;
    if (e !== i && (this.prevLead = i, this.lead = e, e.show(), i)) {
      i.instance && i.scheduleRender(), e.scheduleRender(), e.resumeFrom = i, n && (e.resumeFrom.preserveOpacity = !0), i.snapshot && (e.snapshot = i.snapshot, e.snapshot.latestValues = i.animationValues || i.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
      const { crossfade: r } = e.options;
      r === !1 && i.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      const { options: n, resumingFrom: i } = e;
      n.onExitComplete && n.onExitComplete(), i && i.options.onExitComplete && i.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Zc(t, e, n) {
  let i = "";
  const r = t.x.translate / e.x, o = t.y.translate / e.y, s = n?.z || 0;
  if ((r || o || s) && (i = `translate3d(${r}px, ${o}px, ${s}px) `), (e.x !== 1 || e.y !== 1) && (i += `scale(${1 / e.x}, ${1 / e.y}) `), n) {
    const { transformPerspective: d, rotate: c, rotateX: h, rotateY: f, skewX: m, skewY: g } = n;
    d && (i = `perspective(${d}px) ${i}`), c && (i += `rotate(${c}deg) `), h && (i += `rotateX(${h}deg) `), f && (i += `rotateY(${f}deg) `), m && (i += `skewX(${m}deg) `), g && (i += `skewY(${g}deg) `);
  }
  const a = t.x.scale * e.x, l = t.y.scale * e.y;
  return (a !== 1 || l !== 1) && (i += `scale(${a}, ${l})`), i || "none";
}
const Ce = ["", "X", "Y", "Z"], Qc = 1e3;
let tu = 0;
function Me(t, e, n, i) {
  const { latestValues: r } = e;
  r[t] && (n[t] = r[t], e.setStaticValue(t, 0), i && (i[t] = 0));
}
function Rs(t) {
  if (t.hasCheckedOptimisedAppear = !0, t.root === t)
    return;
  const { visualElement: e } = t.options;
  if (!e)
    return;
  const n = ys(e);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: r, layoutId: o } = t.options;
    window.MotionCancelOptimisedAnimation(n, "transform", V, !(r || o));
  }
  const { parent: i } = t;
  i && !i.hasCheckedOptimisedAppear && Rs(i);
}
function Is({ attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: i, resetTransform: r }) {
  return class {
    constructor(s = {}, a = e?.()) {
      this.id = tu++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(iu), this.nodes.forEach(au), this.nodes.forEach(lu), this.nodes.forEach(ru);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = s, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Hc());
    }
    addEventListener(s, a) {
      return this.eventHandlers.has(s) || this.eventHandlers.set(s, new on()), this.eventHandlers.get(s).add(a);
    }
    notifyListeners(s, ...a) {
      const l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    /**
     * Lifecycles
     */
    mount(s) {
      if (this.instance)
        return;
      this.isSVG = Kr(s) && !Ga(s), this.instance = s;
      const { layoutId: a, layout: l, visualElement: d } = this.options;
      if (d && !d.current && d.mount(s), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0), t) {
        let c, h = 0;
        const f = () => this.root.updateBlockedByResize = !1;
        V.read(() => {
          h = window.innerWidth;
        }), t(s, () => {
          const m = window.innerWidth;
          m !== h && (h = m, this.root.updateBlockedByResize = !0, c && c(), c = Oc(f, 250), ne.hasAnimatedSinceResize && (ne.hasAnimatedSinceResize = !1, this.nodes.forEach(Oi)));
        });
      }
      a && this.root.registerSharedNode(a, this), this.options.animate !== !1 && d && (a || l) && this.addEventListener("didUpdate", ({ delta: c, hasLayoutChanged: h, hasRelativeLayoutChanged: f, layout: m }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const g = this.options.transition || d.getDefaultTransition() || fu, { onLayoutAnimationStart: x, onLayoutAnimationComplete: v } = d.getProps(), y = !this.targetLayout || !Es(this.targetLayout, m), T = !h && f;
        if (this.options.layoutRoot || this.resumeFrom || T || h && (y || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const b = {
            ...bn(g, "layout"),
            onPlay: x,
            onComplete: v
          };
          (d.shouldReduceMotion || this.options.layoutRoot) && (b.delay = 0, b.type = !1), this.startAnimation(b), this.setAnimationOrigin(c, T);
        } else
          h || Oi(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = m;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), it(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(cu), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Rs(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const h = this.path[c];
        h.shouldResetTransform = !0, h.updateScroll("snapshot"), h.options.layoutRoot && h.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l)
        return;
      const d = this.getTransformTemplate();
      this.prevTransformTemplateValue = d ? d(this.latestValues, "") : void 0, this.updateSnapshot(), s && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Ni);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Hi);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(ou), this.nodes.forEach(eu), this.nodes.forEach(nu)) : this.nodes.forEach(Hi), this.clearAllSnapshots();
      const a = H.now();
      j.delta = Q(0, 1e3 / 60, a - j.timestamp), j.timestamp = a, j.isProcessing = !0, fe.update.process(j), fe.preRender.process(j), fe.render.process(j), j.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Tn.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(su), this.sharedNodes.forEach(uu);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, V.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      V.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !N(this.snapshot.measuredBox.x) && !N(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const s = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = E(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0);
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (a = !1), a && this.instance) {
        const l = i(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l
        };
      }
    }
    resetTransform() {
      if (!r)
        return;
      const s = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !ks(this.projectionDelta), l = this.getTransformTemplate(), d = l ? l(this.latestValues, "") : void 0, c = d !== this.prevTransformTemplateValue;
      s && this.instance && (a || ct(this.latestValues) || c) && (r(this.instance, d), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return s && (l = this.removeTransform(l)), pu(l), {
        animationId: this.root.animationId,
        measuredBox: a,
        layoutBox: l,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: s } = this.options;
      if (!s)
        return E();
      const a = s.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(mu))) {
        const { scroll: d } = this.root;
        d && (xt(a.x, d.offset.x), xt(a.y, d.offset.y));
      }
      return a;
    }
    removeElementScroll(s) {
      const a = E();
      if (_(a, s), this.scroll?.wasRoot)
        return a;
      for (let l = 0; l < this.path.length; l++) {
        const d = this.path[l], { scroll: c, options: h } = d;
        d !== this.root && c && h.layoutScroll && (c.wasRoot && _(a, s), xt(a.x, c.offset.x), xt(a.y, c.offset.y));
      }
      return a;
    }
    applyTransform(s, a = !1) {
      const l = E();
      _(l, s);
      for (let d = 0; d < this.path.length; d++) {
        const c = this.path[d];
        !a && c.options.layoutScroll && c.scroll && c !== c.root && bt(l, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), ct(c.latestValues) && bt(l, c.latestValues);
      }
      return ct(this.latestValues) && bt(l, this.latestValues), l;
    }
    removeTransform(s) {
      const a = E();
      _(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const d = this.path[l];
        if (!d.instance || !ct(d.latestValues))
          continue;
        Oe(d.latestValues) && d.updateSnapshot();
        const c = E(), h = d.measurePageBox();
        _(c, h), Fi(a, d.latestValues, d.snapshot ? d.snapshot.layoutBox : void 0, c);
      }
      return ct(this.latestValues) && Fi(a, this.latestValues), a;
    }
    setTargetDelta(s) {
      this.targetDelta = s, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== j.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const l = !!this.resumingFrom || this !== a;
      if (!(s || l && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: c, layoutId: h } = this.options;
      if (!(!this.layout || !(c || h))) {
        if (this.resolvedRelativeTargetAt = j.timestamp, !this.targetDelta && !this.relativeTarget) {
          const f = this.getClosestProjectingParent();
          f && f.layout && this.animationProgress !== 1 ? (this.relativeParent = f, this.forceRelativeParentToResolveTarget(), this.relativeTarget = E(), this.relativeTargetOrigin = E(), Bt(this.relativeTargetOrigin, this.layout.layoutBox, f.layout.layoutBox), _(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = E(), this.targetWithTransforms = E()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Tc(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : _(this.target, this.layout.layoutBox), ds(this.target, this.targetDelta)) : _(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const f = this.getClosestProjectingParent();
          f && !!f.resumingFrom == !!this.resumingFrom && !f.options.layoutScroll && f.target && this.animationProgress !== 1 ? (this.relativeParent = f, this.forceRelativeParentToResolveTarget(), this.relativeTarget = E(), this.relativeTargetOrigin = E(), Bt(this.relativeTargetOrigin, this.target, f.target), _(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Oe(this.parent.latestValues) || us(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      const s = this.getLead(), a = !!this.resumingFrom || this !== s;
      let l = !0;
      if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (l = !1), a && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1), this.resolvedRelativeTargetAt === j.timestamp && (l = !1), l)
        return;
      const { layout: d, layoutId: c } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(d || c))
        return;
      _(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x, f = this.treeScale.y;
      Il(this.layoutCorrected, this.treeScale, this.path, a), s.layout && !s.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (s.target = s.layout.layoutBox, s.targetWithTransforms = E());
      const { target: m } = s;
      if (!m) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Ei(this.prevProjectionDelta.x, this.projectionDelta.x), Ei(this.prevProjectionDelta.y, this.projectionDelta.y)), jt(this.projectionDelta, this.layoutCorrected, m, this.latestValues), (this.treeScale.x !== h || this.treeScale.y !== f || !Wi(this.projectionDelta.x, this.prevProjectionDelta.x) || !Wi(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", m));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      if (this.options.visualElement?.scheduleRender(), s) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = vt(), this.projectionDelta = vt(), this.projectionDeltaWithTransform = vt();
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot, d = l ? l.latestValues : {}, c = { ...this.latestValues }, h = vt();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const f = E(), m = l ? l.source : void 0, g = this.layout ? this.layout.source : void 0, x = m !== g, v = this.getStack(), y = !v || v.members.length <= 1, T = !!(x && !y && this.options.crossfade === !0 && !this.path.some(hu));
      this.animationProgress = 0;
      let b;
      this.mixTargetDelta = (M) => {
        const w = M / 1e3;
        Ui(h.x, s.x, w), Ui(h.y, s.y, w), this.setTargetDelta(h), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Bt(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), du(this.relativeTarget, this.relativeTargetOrigin, f, w), b && $c(this.relativeTarget, b) && (this.isProjectionDirty = !1), b || (b = E()), _(b, this.relativeTarget)), x && (this.animationValues = c, Gc(c, d, this.latestValues, w, T, y)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = w;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (it(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = V.update(() => {
        ne.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = wt(0)), this.currentAnimation = Wc(this.motionValue, [0, 1e3], {
          ...s,
          velocity: 0,
          isSync: !0,
          onUpdate: (a) => {
            this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a);
          },
          onStop: () => {
          },
          onComplete: () => {
            s.onComplete && s.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const s = this.getStack();
      s && s.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Qc), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let { targetWithTransforms: a, target: l, layout: d, latestValues: c } = s;
      if (!(!a || !l || !d)) {
        if (this !== s && this.layout && d && Fs(this.options.animationType, this.layout.layoutBox, d.layoutBox)) {
          l = this.target || E();
          const h = N(this.layout.layoutBox.x);
          l.x.min = s.target.x.min, l.x.max = l.x.min + h;
          const f = N(this.layout.layoutBox.y);
          l.y.min = s.target.y.min, l.y.max = l.y.min + f;
        }
        _(a, l), bt(a, c), jt(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new Jc()), this.sharedNodes.get(s).add(a);
      const d = a.options.initialPromotionConfig;
      a.promote({
        transition: d ? d.transition : void 0,
        preserveFollowOpacity: d && d.shouldPreserveFollowOpacity ? d.shouldPreserveFollowOpacity(a) : void 0
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      const { layoutId: s } = this.options;
      return s ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: s } = this.options;
      return s ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s)
        return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const d = this.getStack();
      d && d.promote(this, l), s && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s)
        return;
      let a = !1;
      const { latestValues: l } = s;
      if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a)
        return;
      const d = {};
      l.z && Me("z", s, d, this.animationValues);
      for (let c = 0; c < Ce.length; c++)
        Me(`rotate${Ce[c]}`, s, d, this.animationValues), Me(`skew${Ce[c]}`, s, d, this.animationValues);
      s.render();
      for (const c in d)
        s.setStaticValue(c, d[c]), this.animationValues && (this.animationValues[c] = d[c]);
      s.scheduleRender();
    }
    applyProjectionStyles(s, a) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        s.visibility = "hidden";
        return;
      }
      const l = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, s.visibility = "", s.opacity = "", s.pointerEvents = ee(a?.pointerEvents) || "", s.transform = l ? l(this.latestValues, "") : "none";
        return;
      }
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        this.options.layoutId && (s.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, s.pointerEvents = ee(a?.pointerEvents) || ""), this.hasProjected && !ct(this.latestValues) && (s.transform = l ? l({}, "") : "none", this.hasProjected = !1);
        return;
      }
      s.visibility = "";
      const c = d.animationValues || d.latestValues;
      this.applyTransformsToTarget();
      let h = Zc(this.projectionDeltaWithTransform, this.treeScale, c);
      l && (h = l(c, h)), s.transform = h;
      const { x: f, y: m } = this.projectionDelta;
      s.transformOrigin = `${f.origin * 100}% ${m.origin * 100}% 0`, d.animationValues ? s.opacity = d === this ? c.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : c.opacityExit : s.opacity = d === this ? c.opacity !== void 0 ? c.opacity : "" : c.opacityExit !== void 0 ? c.opacityExit : 0;
      for (const g in Ot) {
        if (c[g] === void 0)
          continue;
        const { correct: x, applyTo: v, isCSSVariable: y } = Ot[g], T = h === "none" ? c[g] : x(c[g], d);
        if (v) {
          const b = v.length;
          for (let M = 0; M < b; M++)
            s[v[M]] = T;
        } else
          y ? this.options.visualElement.renderState.vars[g] = T : s[g] = T;
      }
      this.options.layoutId && (s.pointerEvents = d === this ? ee(a?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((s) => s.currentAnimation?.stop()), this.root.nodes.forEach(Ni), this.root.sharedNodes.clear();
    }
  };
}
function eu(t) {
  t.updateLayout();
}
function nu(t) {
  const e = t.resumeFrom?.snapshot || t.snapshot;
  if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
    const { layoutBox: n, measuredBox: i } = t.layout, { animationType: r } = t.options, o = e.source !== t.layout.source;
    r === "size" ? Y((c) => {
      const h = o ? e.measuredBox[c] : e.layoutBox[c], f = N(h);
      h.min = n[c].min, h.max = h.min + f;
    }) : Fs(r, e.layoutBox, n) && Y((c) => {
      const h = o ? e.measuredBox[c] : e.layoutBox[c], f = N(n[c]);
      h.max = h.min + f, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[c].max = t.relativeTarget[c].min + f);
    });
    const s = vt();
    jt(s, n, e.layoutBox);
    const a = vt();
    o ? jt(a, t.applyTransform(i, !0), e.measuredBox) : jt(a, n, e.layoutBox);
    const l = !ks(s);
    let d = !1;
    if (!t.resumeFrom) {
      const c = t.getClosestProjectingParent();
      if (c && !c.resumeFrom) {
        const { snapshot: h, layout: f } = c;
        if (h && f) {
          const m = E();
          Bt(m, e.layoutBox, h.layoutBox);
          const g = E();
          Bt(g, n, f.layoutBox), Es(m, g) || (d = !0), c.options.layoutRoot && (t.relativeTarget = g, t.relativeTargetOrigin = m, t.relativeParent = c);
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: n,
      snapshot: e,
      delta: a,
      layoutDelta: s,
      hasLayoutChanged: l,
      hasRelativeLayoutChanged: d
    });
  } else if (t.isLead()) {
    const { onExitComplete: n } = t.options;
    n && n();
  }
  t.options.transition = void 0;
}
function iu(t) {
  t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function ru(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function su(t) {
  t.clearSnapshot();
}
function Ni(t) {
  t.clearMeasurements();
}
function Hi(t) {
  t.isLayoutDirty = !1;
}
function ou(t) {
  const { visualElement: e } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform();
}
function Oi(t) {
  t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0;
}
function au(t) {
  t.resolveTargetDelta();
}
function lu(t) {
  t.calcProjection();
}
function cu(t) {
  t.resetSkewAndRotation();
}
function uu(t) {
  t.removeLeadSnapshot();
}
function Ui(t, e, n) {
  t.translate = D(e.translate, 0, n), t.scale = D(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint;
}
function Gi(t, e, n, i) {
  t.min = D(e.min, n.min, i), t.max = D(e.max, n.max, i);
}
function du(t, e, n, i) {
  Gi(t.x, e.x, n.x, i), Gi(t.y, e.y, n.y, i);
}
function hu(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const fu = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, _i = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t), Yi = _i("applewebkit/") && !_i("chrome/") ? Math.round : K;
function Xi(t) {
  t.min = Yi(t.min), t.max = Yi(t.max);
}
function pu(t) {
  Xi(t.x), Xi(t.y);
}
function Fs(t, e, n) {
  return t === "position" || t === "preserve-aspect" && !vc(zi(e), zi(n), 0.2);
}
function mu(t) {
  return t !== t.root && t.scroll?.wasRoot;
}
const gu = Is({
  attachResizeListener: (t, e) => Ut(t, "resize", e),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Ae = {
  current: void 0
}, Ls = Is({
  measureScroll: (t) => ({
    x: t.scrollLeft,
    y: t.scrollTop
  }),
  defaultParent: () => {
    if (!Ae.current) {
      const t = new gu({});
      t.mount(window), t.setOptions({ layoutScroll: !0 }), Ae.current = t;
    }
    return Ae.current;
  },
  resetTransform: (t, e) => {
    t.style.transform = e !== void 0 ? e : "none";
  },
  checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed"
}), yu = {
  pan: {
    Feature: Lc
  },
  drag: {
    Feature: Fc,
    ProjectionNode: Ls,
    MeasureLayout: Ps
  }
};
function Ki(t, e, n) {
  const { props: i } = t;
  t.animationState && i.whileHover && t.animationState.setActive("whileHover", n === "Start");
  const r = "onHover" + n, o = i[r];
  o && V.postRender(() => o(e, Xt(e)));
}
class xu extends st {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = Wa(e, (n, i) => (Ki(this.node, i, "Start"), (r) => Ki(this.node, r, "End"))));
  }
  unmount() {
  }
}
class bu extends st {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let e = !1;
    try {
      e = this.node.current.matches(":focus-visible");
    } catch {
      e = !0;
    }
    !e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = Gt(Ut(this.node.current, "focus", () => this.onFocus()), Ut(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function qi(t, e, n) {
  const { props: i } = t;
  if (t.current instanceof HTMLButtonElement && t.current.disabled)
    return;
  t.animationState && i.whileTap && t.animationState.setActive("whileTap", n === "Start");
  const r = "onTap" + (n === "End" ? "" : n), o = i[r];
  o && V.postRender(() => o(e, Xt(e)));
}
class vu extends st {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = Ua(e, (n, i) => (qi(this.node, i, "Start"), (r, { success: o }) => qi(this.node, r, o ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const qe = /* @__PURE__ */ new WeakMap(), Pe = /* @__PURE__ */ new WeakMap(), Tu = (t) => {
  const e = qe.get(t.target);
  e && e(t);
}, wu = (t) => {
  t.forEach(Tu);
};
function Su({ root: t, ...e }) {
  const n = t || document;
  Pe.has(n) || Pe.set(n, {});
  const i = Pe.get(n), r = JSON.stringify(e);
  return i[r] || (i[r] = new IntersectionObserver(wu, { root: t, ...e })), i[r];
}
function Cu(t, e, n) {
  const i = Su(e);
  return qe.set(t, n), i.observe(t), () => {
    qe.delete(t), i.unobserve(t);
  };
}
const Mu = {
  some: 0,
  all: 1
};
class Au extends st {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: e = {} } = this.node.getProps(), { root: n, margin: i, amount: r = "some", once: o } = e, s = {
      root: n ? n.current : void 0,
      rootMargin: i,
      threshold: typeof r == "number" ? r : Mu[r]
    }, a = (l) => {
      const { isIntersecting: d } = l;
      if (this.isInView === d || (this.isInView = d, o && !d && this.hasEnteredView))
        return;
      d && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", d);
      const { onViewportEnter: c, onViewportLeave: h } = this.node.getProps(), f = d ? c : h;
      f && f(l);
    };
    return Cu(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: e, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Pu(e, n)) && this.startObserver();
  }
  unmount() {
  }
}
function Pu({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (n) => t[n] !== e[n];
}
const Vu = {
  inView: {
    Feature: Au
  },
  tap: {
    Feature: vu
  },
  focus: {
    Feature: bu
  },
  hover: {
    Feature: xu
  }
}, Du = {
  layout: {
    ProjectionNode: Ls,
    MeasureLayout: Ps
  }
}, ku = {
  ...pc,
  ...Vu,
  ...yu,
  ...Du
}, I = /* @__PURE__ */ kl(ku, Ul), Eu = {
  some: 0,
  all: 1
};
function Ru(t, e, { root: n, margin: i, amount: r = "some" } = {}) {
  const o = Or(t), s = /* @__PURE__ */ new WeakMap(), a = (d) => {
    d.forEach((c) => {
      const h = s.get(c.target);
      if (c.isIntersecting !== !!h)
        if (c.isIntersecting) {
          const f = e(c.target, c);
          typeof f == "function" ? s.set(c.target, f) : l.unobserve(c.target);
        } else typeof h == "function" && (h(c), s.delete(c.target));
    });
  }, l = new IntersectionObserver(a, {
    root: n,
    rootMargin: i,
    threshold: typeof r == "number" ? r : Eu[r]
  });
  return o.forEach((d) => l.observe(d)), () => l.disconnect();
}
function js(t, { root: e, margin: n, amount: i, once: r = !1, initial: o = !1 } = {}) {
  const [s, a] = U(o);
  return Z(() => {
    if (!t.current || r && s)
      return;
    const l = () => (a(!0), r ? void 0 : () => a(!1)), d = {
      root: e && e.current || void 0,
      margin: n,
      amount: i
    };
    return Ru(t.current, l, d);
  }, [e, t, n, r, i]), s;
}
const $i = [
  { value: 12, suffix: "+", label: "Años de experiencia" },
  { value: 4800, suffix: "+", label: "Pacientes tratados" },
  { value: 97, suffix: "%", label: "Tasa de recuperación" },
  { value: 18, suffix: "", label: "Especialistas certificados" }
];
function Iu({ target: t, suffix: e, active: n }) {
  const [i, r] = U(0), o = O(null), s = O(0);
  return Z(() => {
    if (!n) return;
    const a = 1800, l = (c) => c < 0.5 ? 2 * c * c : -1 + (4 - 2 * c) * c, d = (c) => {
      o.current || (o.current = c);
      const h = c - o.current, f = Math.min(h / a, 1);
      r(Math.round(l(f) * t)), f < 1 && (s.current = requestAnimationFrame(d));
    };
    return s.current = requestAnimationFrame(d), () => cancelAnimationFrame(s.current);
  }, [n, t]), /* @__PURE__ */ p("span", { children: [
    i.toLocaleString(),
    e
  ] });
}
function Fu() {
  const t = O(null), [e, n] = U(!1);
  return Z(() => {
    const i = new IntersectionObserver(
      ([r]) => {
        r.isIntersecting && (n(!0), i.disconnect());
      },
      { threshold: 0.3 }
    );
    return t.current && i.observe(t.current), () => i.disconnect();
  }, []), /* @__PURE__ */ u("section", { ref: t, style: { background: "#080808", borderTop: "1px solid rgba(201,168,76,0.15)", borderBottom: "1px solid rgba(201,168,76,0.15)" }, children: /* @__PURE__ */ u("div", { style: { maxWidth: 1280, margin: "0 auto", padding: "0 32px" }, children: /* @__PURE__ */ u("div", { style: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: 0
  }, children: $i.map((i, r) => /* @__PURE__ */ p(
    I.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: !0 },
      transition: { duration: 0.5, delay: r * 0.1 },
      style: {
        padding: "52px 32px",
        textAlign: "center",
        borderRight: r < $i.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "background 0.3s"
      },
      onMouseEnter: (o) => o.currentTarget.style.background = "rgba(201,168,76,0.04)",
      onMouseLeave: (o) => o.currentTarget.style.background = "transparent",
      children: [
        /* @__PURE__ */ u("div", { style: {
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(36px, 4vw, 52px)",
          fontWeight: 700,
          color: "#C9A84C",
          lineHeight: 1,
          marginBottom: 12
        }, children: /* @__PURE__ */ u(Iu, { target: i.value, suffix: i.suffix, active: e }) }),
        /* @__PURE__ */ u("div", { style: {
          fontFamily: "'Inter', sans-serif",
          fontSize: 13,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.45)",
          fontWeight: 400
        }, children: i.label })
      ]
    },
    i.label
  )) }) }) });
}
const Ji = [
  "Real Madrid CF",
  "Clínica Universidad de Navarra",
  "Federación Española de Atletismo",
  "Decathlon Elite",
  "LaLiga Sports",
  "Cruz Roja Española"
];
function Lu() {
  return /* @__PURE__ */ u("section", { style: { background: "#0a0a0a", padding: "52px 0", overflow: "hidden" }, children: /* @__PURE__ */ p("div", { style: { maxWidth: 1280, margin: "0 auto", padding: "0 32px" }, children: [
    /* @__PURE__ */ u("p", { style: {
      fontFamily: "'Inter', sans-serif",
      fontSize: 11,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.25)",
      textAlign: "center",
      margin: "0 0 32px"
    }, children: "Confían en nosotros" }),
    /* @__PURE__ */ u("div", { style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 0,
      flexWrap: "wrap"
    }, children: Ji.map((t, e) => /* @__PURE__ */ u(
      "div",
      {
        style: {
          padding: "12px 32px",
          borderRight: e < Ji.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
          fontFamily: "'Inter', sans-serif",
          fontSize: 13,
          letterSpacing: "0.08em",
          color: "rgba(255,255,255,0.2)",
          textTransform: "uppercase",
          fontWeight: 500,
          transition: "color 0.3s",
          whiteSpace: "nowrap"
        },
        onMouseEnter: (n) => n.currentTarget.style.color = "rgba(201,168,76,0.7)",
        onMouseLeave: (n) => n.currentTarget.style.color = "rgba(255,255,255,0.2)",
        children: t
      },
      t
    )) })
  ] }) });
}
const ju = [
  {
    id: 1,
    title: "Fisioterapia Deportiva",
    description: "Recuperación y rendimiento óptimo para atletas de élite y amateurs. Protocolos avanzados adaptados a cada disciplina.",
    image: "https://images.unsplash.com/photo-1575503922171-c7b13aa8314f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjByZWhhYmlsaXRhdGlvbiUyMGF0aGxldGUlMjB0aGVyYXB5fGVufDF8fHx8MTc3NTE2MTY5OXww&ixlib=rb-4.1.0&q=80&w=800",
    tag: "Alto Rendimiento",
    icon: /* @__PURE__ */ u("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ u("path", { d: "M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z", fill: "currentColor" }) })
  },
  {
    id: 2,
    title: "Terapia Manual Avanzada",
    description: "Técnicas osteopáticas y de manipulación articular para alivio del dolor crónico y agudo con resultados inmediatos.",
    image: "https://images.unsplash.com/photo-1668422550557-f096364b72b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGluZSUyMGJhY2slMjB0cmVhdG1lbnQlMjBvc3Rlb3BhdGh5JTIwbWFudWFsJTIwdGhlcmFweXxlbnwxfHx8fDE3NzUxNjE3MDN8MA&ixlib=rb-4.1.0&q=80&w=800",
    tag: "Especialidad",
    icon: /* @__PURE__ */ u("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ u("path", { d: "M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.615 11.615 0 006.29 1.84", fill: "currentColor" }) })
  },
  {
    id: 3,
    title: "Masaje Terapéutico",
    description: "Sesiones personalizadas de masaje profundo para reducir tensión muscular, mejorar circulación y acelerar la recuperación.",
    image: "https://images.unsplash.com/photo-1740748776786-74365e440be4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNzYWdlJTIwdGhlcmFweSUyMHJlbGF4YXRpb24lMjB3ZWxsbmVzcyUyMHNwYXxlbnwxfHx8fDE3NzUxNjE3MDJ8MA&ixlib=rb-4.1.0&q=80&w=800",
    tag: "Bienestar",
    icon: /* @__PURE__ */ u("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ u("path", { d: "M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z", fill: "currentColor" }) })
  },
  {
    id: 4,
    title: "Electroterapia & Tecnología",
    description: "Equipos de última generación: TENS, ultrasonidos, láser terapéutico y ondas de choque para máxima eficacia.",
    image: "https://images.unsplash.com/photo-1689103229376-3fbfe1257242?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvdGhlcmFweSUyMHVsdHJhc291bmQlMjBwaHlzaW90aGVyYXB5JTIwZXF1aXBtZW50fGVufDF8fHx8MTc3NTE2MTcwN3ww&ixlib=rb-4.1.0&q=80&w=800",
    tag: "Tecnología",
    icon: /* @__PURE__ */ u("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ u("path", { d: "M7 2v11h3v9l7-12h-4l4-8z", fill: "currentColor" }) })
  }
];
function Bu() {
  return /* @__PURE__ */ u("section", { id: "servicios", style: { background: "#0a0a0a", padding: "120px 0" }, children: /* @__PURE__ */ p("div", { style: { maxWidth: 1280, margin: "0 auto", padding: "0 32px" }, children: [
    /* @__PURE__ */ p(
      I.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: !0, margin: "-60px" },
        transition: { duration: 0.7 },
        style: { display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 72, flexWrap: "wrap", gap: 24 },
        children: [
          /* @__PURE__ */ p("div", { children: [
            /* @__PURE__ */ p("div", { style: { display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }, children: [
              /* @__PURE__ */ u("div", { style: { width: 40, height: 1, background: "#C9A84C" } }),
              /* @__PURE__ */ u("span", { style: { fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C9A84C" }, children: "Nuestros Servicios" })
            ] }),
            /* @__PURE__ */ p("h2", { style: { fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 52px)", color: "#fff", margin: 0, lineHeight: 1.2, fontWeight: 700 }, children: [
              "Tratamientos que",
              /* @__PURE__ */ u("br", {}),
              /* @__PURE__ */ u("em", { style: { color: "rgba(255,255,255,0.35)", fontStyle: "italic" }, children: "transforman vidas" })
            ] })
          ] }),
          /* @__PURE__ */ p(
            "a",
            {
              href: "#contacto",
              style: {
                fontFamily: "'Inter', sans-serif",
                fontSize: 13,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#C9A84C",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 8,
                borderBottom: "1px solid rgba(201,168,76,0.4)",
                paddingBottom: 2,
                transition: "gap 0.2s"
              },
              onMouseEnter: (t) => t.currentTarget.style.gap = "14px",
              onMouseLeave: (t) => t.currentTarget.style.gap = "8px",
              children: [
                "Ver todos los servicios",
                /* @__PURE__ */ u("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ u("path", { d: "M5 12h14M12 5l7 7-7 7", stroke: "#C9A84C", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) })
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ u("div", { style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: 2
    }, children: ju.map((t, e) => /* @__PURE__ */ p(
      I.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: !0, margin: "-40px" },
        transition: { duration: 0.6, delay: e * 0.12 },
        style: {
          position: "relative",
          overflow: "hidden",
          cursor: "pointer",
          background: "#111"
        },
        onMouseEnter: (n) => {
          const i = n.currentTarget.querySelector(".service-img"), r = n.currentTarget.querySelector(".service-overlay"), o = n.currentTarget.querySelector(".service-content");
          i && (i.style.transform = "scale(1.06)"), r && (r.style.background = "linear-gradient(to top, rgba(5,5,5,0.97) 0%, rgba(5,5,5,0.7) 50%, rgba(0,0,0,0.3) 100%)"), o && (o.style.transform = "translateY(-8px)");
        },
        onMouseLeave: (n) => {
          const i = n.currentTarget.querySelector(".service-img"), r = n.currentTarget.querySelector(".service-overlay"), o = n.currentTarget.querySelector(".service-content");
          i && (i.style.transform = "scale(1)"), r && (r.style.background = "linear-gradient(to top, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.5) 50%, rgba(0,0,0,0.15) 100%)"), o && (o.style.transform = "translateY(0)");
        },
        children: [
          /* @__PURE__ */ p("div", { style: { height: 380, overflow: "hidden", position: "relative" }, children: [
            /* @__PURE__ */ u(
              "img",
              {
                className: "service-img",
                src: t.image,
                alt: t.title,
                style: { width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.7s cubic-bezier(0.4,0,0.2,1)" }
              }
            ),
            /* @__PURE__ */ u(
              "div",
              {
                className: "service-overlay",
                style: {
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.5) 50%, rgba(0,0,0,0.15) 100%)",
                  transition: "background 0.5s"
                }
              }
            )
          ] }),
          /* @__PURE__ */ u("div", { style: {
            position: "absolute",
            top: 20,
            left: 20,
            fontFamily: "'Inter', sans-serif",
            fontSize: 10,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#C9A84C",
            fontWeight: 600,
            background: "rgba(0,0,0,0.6)",
            padding: "5px 12px",
            borderRadius: 1,
            border: "1px solid rgba(201,168,76,0.3)",
            backdropFilter: "blur(4px)"
          }, children: t.tag }),
          /* @__PURE__ */ p(
            "div",
            {
              className: "service-content",
              style: {
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "28px 28px 32px",
                transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1)"
              },
              children: [
                /* @__PURE__ */ u("div", { style: { color: "#C9A84C", marginBottom: 10 }, children: t.icon }),
                /* @__PURE__ */ u("h3", { style: {
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 22,
                  color: "#fff",
                  margin: "0 0 10px",
                  fontWeight: 600
                }, children: t.title }),
                /* @__PURE__ */ u("p", { style: {
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  lineHeight: 1.65,
                  color: "rgba(255,255,255,0.6)",
                  margin: 0,
                  fontWeight: 300
                }, children: t.description })
              ]
            }
          )
        ]
      },
      t.id
    )) })
  ] }) });
}
const zu = "https://images.unsplash.com/photo-1648775507324-b48dd3791fa5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpY2FsJTIwY2xpbmljJTIwaW50ZXJpb3IlMjBsdXh1cnl8ZW58MXx8fHwxNzc1MTYxNjk5fDA&ixlib=rb-4.1.0&q=80&w=1080", Wu = [
  {
    number: "01",
    title: "Diagnóstico Preciso",
    desc: "Evaluación biomecánica completa con tecnología de análisis de movimiento para un diagnóstico sin margen de error."
  },
  {
    number: "02",
    title: "Tratamiento Personalizado",
    desc: "Cada paciente es único. Creamos planes adaptados a su cuerpo, historial y objetivos concretos."
  },
  {
    number: "03",
    title: "Seguimiento Continuo",
    desc: "Acompañamiento durante todo el proceso con revisiones periódicas y ajustes en tiempo real."
  }
];
function Nu() {
  return /* @__PURE__ */ p("section", { id: "nosotros", style: { background: "#080808", padding: "120px 0", overflow: "hidden" }, children: [
    /* @__PURE__ */ u("div", { style: { maxWidth: 1280, margin: "0 auto", padding: "0 32px" }, children: /* @__PURE__ */ p("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100, alignItems: "center" }, className: "about-grid", children: [
      /* @__PURE__ */ p("div", { style: { position: "relative" }, children: [
        /* @__PURE__ */ p("div", { style: { position: "relative", overflow: "hidden" }, children: [
          /* @__PURE__ */ u(
            "img",
            {
              src: zu,
              alt: "Clínica KinesisPro",
              style: { width: "100%", height: 580, objectFit: "cover", display: "block" }
            }
          ),
          /* @__PURE__ */ u("div", { style: {
            position: "absolute",
            top: -3,
            left: -3,
            width: 60,
            height: 60,
            borderTop: "3px solid #C9A84C",
            borderLeft: "3px solid #C9A84C"
          } }),
          /* @__PURE__ */ u("div", { style: {
            position: "absolute",
            bottom: -3,
            right: -3,
            width: 60,
            height: 60,
            borderBottom: "3px solid #C9A84C",
            borderRight: "3px solid #C9A84C"
          } })
        ] }),
        /* @__PURE__ */ p("div", { style: {
          position: "absolute",
          bottom: 40,
          right: -40,
          background: "linear-gradient(135deg, #C9A84C, #E8C96A)",
          padding: "28px 32px",
          textAlign: "center",
          boxShadow: "0 20px 60px rgba(0,0,0,0.5)"
        }, children: [
          /* @__PURE__ */ u("div", { style: {
            fontFamily: "'Playfair Display', serif",
            fontSize: 42,
            fontWeight: 800,
            color: "#0a0a0a",
            lineHeight: 1
          }, children: "12" }),
          /* @__PURE__ */ p("div", { style: {
            fontFamily: "'Inter', sans-serif",
            fontSize: 11,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "rgba(0,0,0,0.65)",
            marginTop: 6,
            fontWeight: 500
          }, children: [
            "años de",
            /* @__PURE__ */ u("br", {}),
            "excelencia"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ p("div", { children: [
        /* @__PURE__ */ p("div", { style: { display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }, children: [
          /* @__PURE__ */ u("div", { style: { width: 40, height: 1, background: "#C9A84C" } }),
          /* @__PURE__ */ u("span", { style: { fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C9A84C" }, children: "Nuestra Filosofía" })
        ] }),
        /* @__PURE__ */ p("h2", { style: {
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(28px, 3.5vw, 46px)",
          color: "#fff",
          margin: "0 0 24px",
          lineHeight: 1.2,
          fontWeight: 700
        }, children: [
          "No tratamos síntomas.",
          /* @__PURE__ */ u("br", {}),
          /* @__PURE__ */ u("em", { style: { color: "rgba(255,255,255,0.35)", fontStyle: "italic" }, children: "Resolvemos causas." })
        ] }),
        /* @__PURE__ */ u("p", { style: {
          fontFamily: "'Inter', sans-serif",
          fontSize: 16,
          lineHeight: 1.8,
          color: "rgba(255,255,255,0.6)",
          margin: "0 0 20px",
          fontWeight: 300
        }, children: "En KinesisPro llevamos más de una década combinando el rigor científico con un trato humano excepcional. Nuestro equipo de especialistas ha formado a más de 4.800 pacientes en la recuperación y el rendimiento." }),
        /* @__PURE__ */ u("p", { style: {
          fontFamily: "'Inter', sans-serif",
          fontSize: 16,
          lineHeight: 1.8,
          color: "rgba(255,255,255,0.45)",
          margin: "0 0 52px",
          fontWeight: 300
        }, children: "Trabajamos con deportistas olímpicos, profesionales y personas que simplemente quieren vivir sin dolor y al máximo de sus capacidades." }),
        /* @__PURE__ */ u("div", { style: { display: "flex", flexDirection: "column", gap: 28 }, children: Wu.map((t) => /* @__PURE__ */ p("div", { style: { display: "flex", gap: 24, alignItems: "flex-start" }, children: [
          /* @__PURE__ */ u("span", { style: {
            fontFamily: "'Playfair Display', serif",
            fontSize: 13,
            color: "#C9A84C",
            fontWeight: 700,
            minWidth: 28,
            paddingTop: 2
          }, children: t.number }),
          /* @__PURE__ */ p("div", { children: [
            /* @__PURE__ */ u("div", { style: {
              fontFamily: "'Inter', sans-serif",
              fontSize: 15,
              color: "#fff",
              fontWeight: 500,
              marginBottom: 4
            }, children: t.title }),
            /* @__PURE__ */ u("div", { style: {
              fontFamily: "'Inter', sans-serif",
              fontSize: 14,
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.65,
              fontWeight: 300
            }, children: t.desc })
          ] })
        ] }, t.number)) })
      ] })
    ] }) }),
    /* @__PURE__ */ u("style", { children: `
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
        }
      ` })
  ] });
}
const Bs = [
  {
    number: "01",
    title: "Evaluación Inicial",
    description: "Análisis biomecánico completo en 45 minutos. Historial clínico, pruebas funcionales y diagnóstico preciso con tecnología de movimiento.",
    icon: /* @__PURE__ */ u("svg", { width: "28", height: "28", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ u("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" }) }),
    detail: "Gratuita · Sin compromiso"
  },
  {
    number: "02",
    title: "Plan Personalizado",
    description: "Diseñamos tu protocolo de tratamiento único: técnicas, frecuencia, objetivos y métricas de progreso adaptadas a tu cuerpo y estilo de vida.",
    icon: /* @__PURE__ */ u("svg", { width: "28", height: "28", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ u("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" }) }),
    detail: "Ajustado en cada sesión"
  },
  {
    number: "03",
    title: "Tratamiento Activo",
    description: "Sesiones individuales con nuestros especialistas. Combinamos terapia manual, electroterapia y ejercicio terapéutico para resultados óptimos.",
    icon: /* @__PURE__ */ u("svg", { width: "28", height: "28", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ u("path", { d: "M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z" }) }),
    detail: "Técnicas de vanguardia"
  },
  {
    number: "04",
    title: "Alta & Mantenimiento",
    description: "Programa de ejercicios para casa, seguimiento a los 30 días y plan de prevención para que tu recuperación sea definitiva y duradera.",
    icon: /* @__PURE__ */ u("svg", { width: "28", height: "28", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ u("path", { d: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" }) }),
    detail: "Resultados para siempre"
  }
];
function Hu({ step: t, index: e }) {
  const n = O(null), i = js(n, { once: !0, margin: "-80px" });
  return /* @__PURE__ */ p(
    I.div,
    {
      ref: n,
      initial: { opacity: 0, y: 40 },
      animate: i ? { opacity: 1, y: 0 } : {},
      transition: { duration: 0.6, delay: e * 0.15, ease: [0.22, 1, 0.36, 1] },
      style: { position: "relative" },
      children: [
        e < Bs.length - 1 && /* @__PURE__ */ u(
          "div",
          {
            style: {
              position: "absolute",
              top: 32,
              left: "calc(100% - 0px)",
              width: "100%",
              height: 1,
              background: "linear-gradient(to right, rgba(201,168,76,0.4), rgba(201,168,76,0.1))",
              zIndex: 0,
              display: "none"
            },
            className: "step-connector"
          }
        ),
        /* @__PURE__ */ p(
          "div",
          {
            style: {
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.07)",
              padding: "40px 32px",
              height: "100%",
              transition: "border-color 0.3s, background 0.3s, transform 0.3s",
              cursor: "default",
              position: "relative",
              overflow: "hidden"
            },
            onMouseEnter: (r) => {
              r.currentTarget.style.borderColor = "rgba(201,168,76,0.4)", r.currentTarget.style.background = "rgba(201,168,76,0.04)", r.currentTarget.style.transform = "translateY(-4px)";
            },
            onMouseLeave: (r) => {
              r.currentTarget.style.borderColor = "rgba(255,255,255,0.07)", r.currentTarget.style.background = "rgba(255,255,255,0.025)", r.currentTarget.style.transform = "translateY(0)";
            },
            children: [
              /* @__PURE__ */ u("div", { style: {
                position: "absolute",
                top: -10,
                right: 16,
                fontFamily: "'Playfair Display', serif",
                fontSize: 96,
                fontWeight: 800,
                color: "rgba(201,168,76,0.04)",
                lineHeight: 1,
                userSelect: "none",
                pointerEvents: "none"
              }, children: t.number }),
              /* @__PURE__ */ u("div", { style: {
                width: 56,
                height: 56,
                borderRadius: "50%",
                background: "rgba(201,168,76,0.1)",
                border: "1px solid rgba(201,168,76,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#C9A84C",
                marginBottom: 24
              }, children: t.icon }),
              /* @__PURE__ */ p("div", { style: {
                fontFamily: "'Inter', sans-serif",
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#C9A84C",
                fontWeight: 600,
                marginBottom: 10
              }, children: [
                "Paso ",
                t.number
              ] }),
              /* @__PURE__ */ u("h3", { style: {
                fontFamily: "'Playfair Display', serif",
                fontSize: 22,
                color: "#fff",
                margin: "0 0 14px",
                fontWeight: 600
              }, children: t.title }),
              /* @__PURE__ */ u("p", { style: {
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.5)",
                margin: "0 0 20px",
                fontWeight: 300
              }, children: t.description }),
              /* @__PURE__ */ p("div", { style: {
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontFamily: "'Inter', sans-serif",
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(201,168,76,0.7)",
                fontWeight: 500
              }, children: [
                /* @__PURE__ */ u("div", { style: { width: 16, height: 1, background: "rgba(201,168,76,0.5)" } }),
                t.detail
              ] })
            ]
          }
        )
      ]
    }
  );
}
function Ou() {
  const t = O(null), e = js(t, { once: !0, margin: "-60px" });
  return /* @__PURE__ */ u("section", { style: { background: "#0d0d0d", padding: "120px 0" }, children: /* @__PURE__ */ p("div", { style: { maxWidth: 1280, margin: "0 auto", padding: "0 32px" }, children: [
    /* @__PURE__ */ p(
      I.div,
      {
        ref: t,
        initial: { opacity: 0, y: 30 },
        animate: e ? { opacity: 1, y: 0 } : {},
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        style: { textAlign: "center", marginBottom: 80 },
        children: [
          /* @__PURE__ */ p("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 20 }, children: [
            /* @__PURE__ */ u("div", { style: { width: 40, height: 1, background: "#C9A84C" } }),
            /* @__PURE__ */ u("span", { style: {
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#C9A84C"
            }, children: "Metodología" }),
            /* @__PURE__ */ u("div", { style: { width: 40, height: 1, background: "#C9A84C" } })
          ] }),
          /* @__PURE__ */ p("h2", { style: {
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(28px, 4vw, 48px)",
            color: "#fff",
            margin: "0 auto 16px",
            lineHeight: 1.2,
            fontWeight: 700
          }, children: [
            "Un proceso diseñado para",
            /* @__PURE__ */ u("br", {}),
            /* @__PURE__ */ u("em", { style: { color: "rgba(255,255,255,0.35)", fontStyle: "italic" }, children: "garantizar resultados" })
          ] }),
          /* @__PURE__ */ u("p", { style: {
            fontFamily: "'Inter', sans-serif",
            fontSize: 16,
            color: "rgba(255,255,255,0.45)",
            maxWidth: 500,
            margin: "0 auto",
            lineHeight: 1.7,
            fontWeight: 300
          }, children: "Cuatro fases meticulosamente diseñadas para llevar tu cuerpo de la lesión al rendimiento máximo." })
        ]
      }
    ),
    /* @__PURE__ */ u("div", { style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: 2
    }, children: Bs.map((n, i) => /* @__PURE__ */ u(Hu, { step: n, index: i }, n.number)) }),
    /* @__PURE__ */ u(
      I.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: !0, margin: "-60px" },
        transition: { duration: 0.6, delay: 0.4 },
        style: { textAlign: "center", marginTop: 64 },
        children: /* @__PURE__ */ u(
          "a",
          {
            href: "#contacto",
            style: {
              fontFamily: "'Inter', sans-serif",
              fontSize: 14,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#0a0a0a",
              fontWeight: 600,
              background: "linear-gradient(135deg, #C9A84C, #E8C96A)",
              padding: "16px 48px",
              borderRadius: 2,
              textDecoration: "none",
              display: "inline-block",
              boxShadow: "0 8px 32px rgba(201,168,76,0.3)",
              transition: "transform 0.2s, box-shadow 0.2s"
            },
            onMouseEnter: (n) => {
              n.currentTarget.style.transform = "translateY(-2px)", n.currentTarget.style.boxShadow = "0 14px 40px rgba(201,168,76,0.5)";
            },
            onMouseLeave: (n) => {
              n.currentTarget.style.transform = "translateY(0)", n.currentTarget.style.boxShadow = "0 8px 32px rgba(201,168,76,0.3)";
            },
            children: "Comenzar Mi Evaluación"
          }
        )
      }
    )
  ] }) });
}
const lt = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1761971975962-9cc397e2ba2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWxsbmVzcyUyMGNlbnRlciUyMGludGVyaW9yJTIwZGVzaWdufGVufDF8fHx8MTc3NTE2MjMxMnww&ixlib=rb-4.1.0&q=80&w=1080",
    label: "Cabina Premium",
    span: "tall"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1709264408979-55567dec4001?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRlJTIwc3RyZXRjaGluZyUyMGV4ZXJjaXNlJTIwcmVjb3Zlcnl8ZW58MXx8fHwxNzc1MTYyMzA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    label: "Recuperación Activa",
    span: "wide"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1758691462858-f1286e5daf40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY29uc3VsdGF0aW9uJTIwZG9jdG9yJTIwcGF0aWVudCUyMHByZW1pdW18ZW58MXx8fHwxNzc1MTYyMzA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    label: "Consulta Especializada",
    span: "normal"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1706806594828-318b9185ad0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydCUyMGluanVyeSUyMGtuZWUlMjByZWhhYmlsaXRhdGlvbiUyMGV4ZXJjaXNlfGVufDF8fHx8MTc3NTE2MjMxMnww&ixlib=rb-4.1.0&q=80&w=1080",
    label: "Rehabilitación de Rodilla",
    span: "normal"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1648775507324-b48dd3791fa5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpY2FsJTIwY2xpbmljJTIwaW50ZXJpb3IlMjBsdXh1cnl8ZW58MXx8fHwxNzc1MTYxNjk5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    label: "Instalaciones Clínica",
    span: "wide"
  }
];
function Uu() {
  const [t, e] = U(null);
  return /* @__PURE__ */ p("section", { style: { background: "#080808", padding: "120px 0" }, children: [
    /* @__PURE__ */ p("div", { style: { maxWidth: 1280, margin: "0 auto", padding: "0 32px" }, children: [
      /* @__PURE__ */ p(
        I.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0, margin: "-60px" },
          transition: { duration: 0.7 },
          style: { textAlign: "center", marginBottom: 72 },
          children: [
            /* @__PURE__ */ p("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 20 }, children: [
              /* @__PURE__ */ u("div", { style: { width: 40, height: 1, background: "#C9A84C" } }),
              /* @__PURE__ */ u("span", { style: {
                fontFamily: "'Inter', sans-serif",
                fontSize: 11,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#C9A84C"
              }, children: "Instalaciones" }),
              /* @__PURE__ */ u("div", { style: { width: 40, height: 1, background: "#C9A84C" } })
            ] }),
            /* @__PURE__ */ p("h2", { style: {
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              color: "#fff",
              margin: 0,
              lineHeight: 1.2,
              fontWeight: 700
            }, children: [
              "Un espacio diseñado",
              /* @__PURE__ */ u("br", {}),
              /* @__PURE__ */ u("em", { style: { color: "rgba(255,255,255,0.35)", fontStyle: "italic" }, children: "para la excelencia" })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ u("div", { style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "280px 280px",
        gap: 4
      }, className: "gallery-grid", children: lt.map((n, i) => /* @__PURE__ */ p(
        I.div,
        {
          initial: { opacity: 0, scale: 0.97 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: !0, margin: "-40px" },
          transition: { duration: 0.6, delay: i * 0.08 },
          onClick: () => e(i),
          style: {
            position: "relative",
            overflow: "hidden",
            cursor: "zoom-in",
            gridColumn: n.span === "wide" ? "span 2" : (n.span === "tall", "span 1"),
            gridRow: n.span === "tall" ? "span 2" : "span 1"
          },
          children: [
            /* @__PURE__ */ u(
              "img",
              {
                src: n.src,
                alt: n.label,
                style: {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.7s cubic-bezier(0.4,0,0.2,1)",
                  display: "block"
                },
                onMouseEnter: (r) => r.currentTarget.style.transform = "scale(1.06)",
                onMouseLeave: (r) => r.currentTarget.style.transform = "scale(1)"
              }
            ),
            /* @__PURE__ */ u("div", { style: {
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 60%)",
              pointerEvents: "none"
            } }),
            /* @__PURE__ */ u("div", { style: {
              position: "absolute",
              bottom: 16,
              left: 20,
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.7)",
              fontWeight: 500,
              pointerEvents: "none"
            }, children: n.label }),
            /* @__PURE__ */ u("div", { style: {
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 44,
              height: 44,
              background: "rgba(201,168,76,0.9)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: 0,
              transition: "opacity 0.3s",
              pointerEvents: "none"
            }, className: "gallery-zoom-icon", children: /* @__PURE__ */ u("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ u("path", { d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7", stroke: "#0a0a0a", strokeWidth: "2.5", strokeLinecap: "round" }) }) })
          ]
        },
        n.id
      )) })
    ] }),
    /* @__PURE__ */ u(He, { children: t !== null && /* @__PURE__ */ u(
      I.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.25 },
        onClick: () => e(null),
        style: {
          position: "fixed",
          inset: 0,
          zIndex: 1e3,
          background: "rgba(0,0,0,0.95)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
          cursor: "zoom-out"
        },
        children: /* @__PURE__ */ p(
          I.div,
          {
            initial: { scale: 0.92, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            exit: { scale: 0.92, opacity: 0 },
            transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
            onClick: (n) => n.stopPropagation(),
            style: { position: "relative", maxWidth: 1100, maxHeight: "85vh", cursor: "default" },
            children: [
              /* @__PURE__ */ u(
                "img",
                {
                  src: lt[t].src,
                  alt: lt[t].label,
                  style: { maxWidth: "100%", maxHeight: "85vh", objectFit: "contain", display: "block" }
                }
              ),
              /* @__PURE__ */ u("div", { style: {
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "16px 24px",
                background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                fontFamily: "'Inter', sans-serif",
                fontSize: 13,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.7)"
              }, children: lt[t].label }),
              /* @__PURE__ */ u(
                "button",
                {
                  onClick: () => e(null),
                  style: {
                    position: "absolute",
                    top: -48,
                    right: 0,
                    background: "none",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "#fff",
                    cursor: "pointer",
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "border-color 0.2s"
                  },
                  onMouseEnter: (n) => n.currentTarget.style.borderColor = "#C9A84C",
                  onMouseLeave: (n) => n.currentTarget.style.borderColor = "rgba(255,255,255,0.2)",
                  children: /* @__PURE__ */ u("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ u("path", { d: "M18 6L6 18M6 6l12 12", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) })
                }
              ),
              /* @__PURE__ */ u(
                "button",
                {
                  onClick: (n) => {
                    n.stopPropagation(), e((t - 1 + lt.length) % lt.length);
                  },
                  style: {
                    position: "absolute",
                    left: -56,
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "#fff",
                    cursor: "pointer",
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "border-color 0.2s, background 0.2s"
                  },
                  onMouseEnter: (n) => {
                    n.currentTarget.style.borderColor = "#C9A84C", n.currentTarget.style.background = "rgba(201,168,76,0.1)";
                  },
                  onMouseLeave: (n) => {
                    n.currentTarget.style.borderColor = "rgba(255,255,255,0.15)", n.currentTarget.style.background = "rgba(255,255,255,0.06)";
                  },
                  children: /* @__PURE__ */ u("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ u("path", { d: "M15 18l-6-6 6-6", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) })
                }
              ),
              /* @__PURE__ */ u(
                "button",
                {
                  onClick: (n) => {
                    n.stopPropagation(), e((t + 1) % lt.length);
                  },
                  style: {
                    position: "absolute",
                    right: -56,
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "#fff",
                    cursor: "pointer",
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "border-color 0.2s, background 0.2s"
                  },
                  onMouseEnter: (n) => {
                    n.currentTarget.style.borderColor = "#C9A84C", n.currentTarget.style.background = "rgba(201,168,76,0.1)";
                  },
                  onMouseLeave: (n) => {
                    n.currentTarget.style.borderColor = "rgba(255,255,255,0.15)", n.currentTarget.style.background = "rgba(255,255,255,0.06)";
                  },
                  children: /* @__PURE__ */ u("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ u("path", { d: "M9 18l6-6-6-6", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) })
                }
              )
            ]
          }
        )
      }
    ) }),
    /* @__PURE__ */ u("style", { children: `
        .gallery-grid > div:hover .gallery-zoom-icon {
          opacity: 1 !important;
        }
        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: 1fr 1fr !important;
            grid-template-rows: auto !important;
          }
          .gallery-grid > div {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
            height: 200px;
          }
        }
        @media (max-width: 480px) {
          .gallery-grid {
            grid-template-columns: 1fr !important;
          }
        }
      ` })
  ] });
}
const Gu = "https://images.unsplash.com/photo-1756699197173-5ef672a423fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaWNhbCUyMHRoZXJhcGlzdCUyMGRvY3RvciUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NTE2MTcwM3ww&ixlib=rb-4.1.0&q=80&w=800", _u = [
  {
    id: 1,
    name: "Dr. Alejandro Reyes",
    role: "Director Clínico & Fisioterapeuta",
    specialty: "Biomecánica · Deporte",
    image: Gu,
    quote: "La precisión diagnóstica es la base de cualquier tratamiento exitoso."
  },
  {
    id: 2,
    name: "Dra. Sofía Martínez",
    role: "Especialista en Terapia Manual",
    specialty: "Osteopatía · Dolor Crónico",
    image: "https://images.unsplash.com/photo-1620213391117-0d169a917221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHJ1bm5lciUyMGF0aGxldGUlMjBoZWFsdGh5JTIwbGlmZXN0eWxlfGVufDF8fHx8MTc3NTE2MTcwNnww&ixlib=rb-4.1.0&q=80&w=800",
    quote: "Cada cuerpo tiene el poder de recuperarse. Mi trabajo es activarlo."
  },
  {
    id: 3,
    name: "Carlos Vega",
    role: "Fisioterapeuta Deportivo",
    specialty: "Fútbol · Atletismo · Natación",
    image: "https://images.unsplash.com/photo-1764314138160-5f04f4a50dae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaW90aGVyYXB5JTIwdHJlYXRtZW50JTIwcHJvZmVzc2lvbmFsJTIwY2xpbmljfGVufDF8fHx8MTc3NTE2MTY5OXww&ixlib=rb-4.1.0&q=80&w=800",
    quote: "Trabajo con los mejores atletas porque entiendo sus cuerpos como nadie."
  }
];
function Yu() {
  return /* @__PURE__ */ u("section", { id: "equipo", style: { background: "#0a0a0a", padding: "120px 0" }, children: /* @__PURE__ */ p("div", { style: { maxWidth: 1280, margin: "0 auto", padding: "0 32px" }, children: [
    /* @__PURE__ */ p("div", { style: { textAlign: "center", marginBottom: 80 }, children: [
      /* @__PURE__ */ p("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 20 }, children: [
        /* @__PURE__ */ u("div", { style: { width: 40, height: 1, background: "#C9A84C" } }),
        /* @__PURE__ */ u("span", { style: { fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C9A84C" }, children: "El Equipo" }),
        /* @__PURE__ */ u("div", { style: { width: 40, height: 1, background: "#C9A84C" } })
      ] }),
      /* @__PURE__ */ p("h2", { style: {
        fontFamily: "'Playfair Display', serif",
        fontSize: "clamp(28px, 4vw, 48px)",
        color: "#fff",
        margin: "0 auto",
        maxWidth: 600,
        lineHeight: 1.2,
        fontWeight: 700
      }, children: [
        "Especialistas que marcan",
        /* @__PURE__ */ u("br", {}),
        /* @__PURE__ */ u("em", { style: { color: "rgba(255,255,255,0.35)", fontStyle: "italic" }, children: "la diferencia" })
      ] })
    ] }),
    /* @__PURE__ */ u("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28 }, children: _u.map((t, e) => /* @__PURE__ */ p(
      I.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: !0, margin: "-40px" },
        transition: { duration: 0.6, delay: e * 0.15 },
        style: {
          position: "relative",
          background: "#111",
          overflow: "hidden",
          transition: "transform 0.4s"
        },
        onMouseEnter: (n) => n.currentTarget.style.transform = "translateY(-6px)",
        onMouseLeave: (n) => n.currentTarget.style.transform = "translateY(0)",
        children: [
          /* @__PURE__ */ p("div", { style: { position: "relative", height: 340, overflow: "hidden" }, children: [
            /* @__PURE__ */ u(
              "img",
              {
                src: t.image,
                alt: t.name,
                style: { width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", transition: "transform 0.6s" }
              }
            ),
            /* @__PURE__ */ u("div", { style: {
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, transparent 40%, rgba(5,5,5,0.9) 100%)"
            } }),
            /* @__PURE__ */ p("div", { style: {
              position: "absolute",
              top: 20,
              right: 20,
              fontFamily: "'Playfair Display', serif",
              fontSize: 11,
              color: "rgba(255,255,255,0.2)",
              letterSpacing: "0.1em"
            }, children: [
              "0",
              e + 1
            ] })
          ] }),
          /* @__PURE__ */ p("div", { style: { padding: "24px 28px 28px" }, children: [
            /* @__PURE__ */ u("div", { style: {
              fontFamily: "'Inter', sans-serif",
              fontSize: 10,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#C9A84C",
              marginBottom: 8,
              fontWeight: 600
            }, children: t.specialty }),
            /* @__PURE__ */ u("h3", { style: {
              fontFamily: "'Playfair Display', serif",
              fontSize: 22,
              color: "#fff",
              margin: "0 0 4px",
              fontWeight: 600
            }, children: t.name }),
            /* @__PURE__ */ u("p", { style: {
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              color: "rgba(255,255,255,0.45)",
              margin: "0 0 16px",
              fontWeight: 300
            }, children: t.role }),
            /* @__PURE__ */ u("div", { style: { height: 1, background: "rgba(201,168,76,0.2)", marginBottom: 16 } }),
            /* @__PURE__ */ p("p", { style: {
              fontFamily: "'Playfair Display', serif",
              fontSize: 13,
              color: "rgba(255,255,255,0.4)",
              fontStyle: "italic",
              lineHeight: 1.6,
              margin: 0
            }, children: [
              '"',
              t.quote,
              '"'
            ] })
          ] })
        ]
      },
      t.id
    )) })
  ] }) });
}
const kt = [
  {
    id: 1,
    name: "Marcos Iglesias",
    role: "Corredor de Maratón",
    rating: 5,
    text: "Después de una rotura de fibras que amenazaba con acabar mi temporada, el equipo de KinesisPro me tuvo en pie en tiempo récord. El protocolo fue impecable, personalizado y los resultados superaron todas mis expectativas.",
    result: "Recuperado en 3 semanas"
  },
  {
    id: 2,
    name: "Laura Fernández",
    role: "Directora Ejecutiva",
    rating: 5,
    text: "Llevaba años con dolor lumbar crónico que ningún médico había podido resolver. En KinesisPro encontraron la causa real en la primera consulta. Tras 8 sesiones, vivo sin dolor por primera vez desde hace 5 años.",
    result: "5 años de dolor eliminados"
  },
  {
    id: 3,
    name: "Javier Montoya",
    role: "Jugador de Pádel Profesional",
    rating: 5,
    text: "Como deportista profesional, no me puedo permitir errores ni tiempos de baja largos. KinesisPro es mi equipo de confianza desde hace 4 temporadas. Son los mejores del sector, sin ninguna duda.",
    result: "4 temporadas sin lesiones graves"
  },
  {
    id: 4,
    name: "Ana Blanco",
    role: "Profesora de Yoga",
    rating: 5,
    text: "El enfoque holístico del equipo es lo que me enganchó desde el principio. Entienden el cuerpo como un todo, no como piezas separadas. Mi experiencia fue transformadora a todos los niveles.",
    result: "Movilidad total recuperada"
  }
];
function Xu({ count: t }) {
  return /* @__PURE__ */ u("div", { style: { display: "flex", gap: 3 }, children: Array.from({ length: t }).map((e, n) => /* @__PURE__ */ u("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "#C9A84C", children: /* @__PURE__ */ u("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" }) }, n)) });
}
function Ku() {
  const [t, e] = U(0), n = kt[t];
  return /* @__PURE__ */ p("section", { id: "testimonios", style: { background: "#080808", padding: "120px 0", overflow: "hidden" }, children: [
    /* @__PURE__ */ p("div", { style: { maxWidth: 1280, margin: "0 auto", padding: "0 32px" }, children: [
      /* @__PURE__ */ p("div", { style: { textAlign: "center", marginBottom: 80 }, children: [
        /* @__PURE__ */ p("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 20 }, children: [
          /* @__PURE__ */ u("div", { style: { width: 40, height: 1, background: "#C9A84C" } }),
          /* @__PURE__ */ u("span", { style: { fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C9A84C" }, children: "Testimonios" }),
          /* @__PURE__ */ u("div", { style: { width: 40, height: 1, background: "#C9A84C" } })
        ] }),
        /* @__PURE__ */ p("h2", { style: {
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(28px, 4vw, 48px)",
          color: "#fff",
          margin: 0,
          lineHeight: 1.2,
          fontWeight: 700
        }, children: [
          "Lo que dicen",
          /* @__PURE__ */ u("br", {}),
          /* @__PURE__ */ u("em", { style: { color: "rgba(255,255,255,0.35)", fontStyle: "italic" }, children: "nuestros pacientes" })
        ] })
      ] }),
      /* @__PURE__ */ p("div", { style: {
        maxWidth: 900,
        margin: "0 auto",
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.06)",
        padding: "60px 72px",
        position: "relative"
      }, className: "testimonial-card", children: [
        /* @__PURE__ */ u("div", { style: {
          position: "absolute",
          top: 32,
          left: 48,
          fontFamily: "'Playfair Display', serif",
          fontSize: 120,
          color: "rgba(201,168,76,0.08)",
          lineHeight: 1,
          userSelect: "none"
        }, children: '"' }),
        /* @__PURE__ */ p("div", { style: { position: "relative", zIndex: 1 }, children: [
          /* @__PURE__ */ u(Xu, { count: n.rating }),
          /* @__PURE__ */ p("p", { style: {
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(18px, 2.2vw, 24px)",
            lineHeight: 1.65,
            color: "rgba(255,255,255,0.85)",
            fontStyle: "italic",
            margin: "24px 0 36px",
            fontWeight: 400
          }, children: [
            '"',
            n.text,
            '"'
          ] }),
          /* @__PURE__ */ p("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16 }, children: [
            /* @__PURE__ */ p("div", { children: [
              /* @__PURE__ */ u("div", { style: { fontFamily: "'Inter', sans-serif", fontSize: 16, color: "#fff", fontWeight: 500, marginBottom: 4 }, children: n.name }),
              /* @__PURE__ */ u("div", { style: { fontFamily: "'Inter', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.4)", fontWeight: 300 }, children: n.role })
            ] }),
            /* @__PURE__ */ u("div", { style: {
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#C9A84C",
              fontWeight: 600,
              background: "rgba(201,168,76,0.08)",
              border: "1px solid rgba(201,168,76,0.25)",
              padding: "8px 16px"
            }, children: n.result })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ u("div", { style: { display: "flex", justifyContent: "center", gap: 12, marginTop: 40 }, children: kt.map((i, r) => /* @__PURE__ */ u(
        "button",
        {
          onClick: () => e(r),
          style: {
            width: r === t ? 32 : 8,
            height: 8,
            borderRadius: 4,
            background: r === t ? "#C9A84C" : "rgba(255,255,255,0.15)",
            border: "none",
            cursor: "pointer",
            transition: "all 0.3s",
            padding: 0
          }
        },
        r
      )) }),
      /* @__PURE__ */ p("div", { style: { display: "flex", justifyContent: "center", gap: 16, marginTop: 20 }, children: [
        /* @__PURE__ */ u(
          "button",
          {
            onClick: () => e((t - 1 + kt.length) % kt.length),
            style: {
              width: 48,
              height: 48,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "50%",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "border-color 0.2s, background 0.2s",
              color: "#fff"
            },
            onMouseEnter: (i) => {
              i.currentTarget.style.borderColor = "#C9A84C", i.currentTarget.style.background = "rgba(201,168,76,0.08)";
            },
            onMouseLeave: (i) => {
              i.currentTarget.style.borderColor = "rgba(255,255,255,0.1)", i.currentTarget.style.background = "rgba(255,255,255,0.04)";
            },
            children: /* @__PURE__ */ u("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ u("path", { d: "M19 12H5M12 19l-7-7 7-7", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) })
          }
        ),
        /* @__PURE__ */ u(
          "button",
          {
            onClick: () => e((t + 1) % kt.length),
            style: {
              width: 48,
              height: 48,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "50%",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "border-color 0.2s, background 0.2s",
              color: "#fff"
            },
            onMouseEnter: (i) => {
              i.currentTarget.style.borderColor = "#C9A84C", i.currentTarget.style.background = "rgba(201,168,76,0.08)";
            },
            onMouseLeave: (i) => {
              i.currentTarget.style.borderColor = "rgba(255,255,255,0.1)", i.currentTarget.style.background = "rgba(255,255,255,0.04)";
            },
            children: /* @__PURE__ */ u("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ u("path", { d: "M5 12h14M12 5l7 7-7 7", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ u("style", { children: `
        @media (max-width: 640px) {
          .testimonial-card {
            padding: 40px 28px !important;
          }
        }
      ` })
  ] });
}
const qu = [
  "Fisioterapia Deportiva",
  "Terapia Manual Avanzada",
  "Masaje Terapéutico",
  "Electroterapia",
  "Primera Consulta (Gratuita)"
], $u = ["09:00", "10:00", "11:00", "12:00", "16:00", "17:00", "18:00", "19:00"];
function Ju() {
  const [t, e] = U(!1), [n, i] = U({
    nombre: "",
    telefono: "",
    email: "",
    servicio: "",
    horario: "",
    mensaje: ""
  }), r = (a) => {
    a.preventDefault(), e(!0);
  }, o = {
    width: "100%",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 2,
    padding: "14px 16px",
    color: "#fff",
    fontFamily: "'Inter', sans-serif",
    fontSize: 14,
    fontWeight: 300,
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box"
  }, s = {
    display: "block",
    fontFamily: "'Inter', sans-serif",
    fontSize: 11,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.45)",
    marginBottom: 8,
    fontWeight: 500
  };
  return /* @__PURE__ */ p("section", { id: "reservar", style: { background: "#0d0d0d", padding: "120px 0" }, children: [
    /* @__PURE__ */ u("div", { style: { maxWidth: 1280, margin: "0 auto", padding: "0 32px" }, children: /* @__PURE__ */ p("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100, alignItems: "start" }, className: "booking-grid", children: [
      /* @__PURE__ */ p(
        I.div,
        {
          initial: { opacity: 0, x: -30 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: !0, margin: "-60px" },
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
          children: [
            /* @__PURE__ */ p("div", { style: { display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }, children: [
              /* @__PURE__ */ u("div", { style: { width: 40, height: 1, background: "#C9A84C" } }),
              /* @__PURE__ */ u("span", { style: {
                fontFamily: "'Inter', sans-serif",
                fontSize: 11,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#C9A84C"
              }, children: "Reserva Online" })
            ] }),
            /* @__PURE__ */ p("h2", { style: {
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 3.5vw, 46px)",
              color: "#fff",
              margin: "0 0 24px",
              lineHeight: 1.2,
              fontWeight: 700
            }, children: [
              "Agenda tu cita",
              /* @__PURE__ */ u("br", {}),
              /* @__PURE__ */ u("em", { style: { color: "rgba(255,255,255,0.35)", fontStyle: "italic" }, children: "en 2 minutos" })
            ] }),
            /* @__PURE__ */ u("p", { style: {
              fontFamily: "'Inter', sans-serif",
              fontSize: 15,
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.5)",
              margin: "0 0 48px",
              fontWeight: 300
            }, children: "Rellena el formulario y uno de nuestros especialistas te confirmará la cita en menos de 2 horas. Primera consulta completamente gratuita." }),
            /* @__PURE__ */ u("div", { style: { display: "flex", flexDirection: "column", gap: 20 }, children: [
              { icon: "📍", title: "Ubicación", value: "Calle Serrano 84, Madrid 28006" },
              { icon: "🕐", title: "Horario", value: "Lunes – Sábado · 8:00 – 21:00" },
              { icon: "📞", title: "Teléfono", value: "+34 912 345 678" }
            ].map((a) => /* @__PURE__ */ p("div", { style: { display: "flex", gap: 16, alignItems: "flex-start" }, children: [
              /* @__PURE__ */ u("div", { style: {
                width: 44,
                height: 44,
                flexShrink: 0,
                background: "rgba(201,168,76,0.08)",
                border: "1px solid rgba(201,168,76,0.2)",
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18
              }, children: a.icon }),
              /* @__PURE__ */ p("div", { children: [
                /* @__PURE__ */ u("div", { style: {
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#C9A84C",
                  marginBottom: 4,
                  fontWeight: 600
                }, children: a.title }),
                /* @__PURE__ */ u("div", { style: {
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  color: "rgba(255,255,255,0.6)",
                  fontWeight: 300
                }, children: a.value })
              ] })
            ] }, a.title)) })
          ]
        }
      ),
      /* @__PURE__ */ u(
        I.div,
        {
          initial: { opacity: 0, x: 30 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: !0, margin: "-60px" },
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
          children: t ? /* @__PURE__ */ p(
            I.div,
            {
              initial: { opacity: 0, scale: 0.95 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 0.4 },
              style: {
                background: "rgba(201,168,76,0.06)",
                border: "1px solid rgba(201,168,76,0.3)",
                padding: "60px 40px",
                textAlign: "center"
              },
              children: [
                /* @__PURE__ */ u("div", { style: {
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #C9A84C, #E8C96A)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px"
                }, children: /* @__PURE__ */ u("svg", { width: "28", height: "28", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ u("path", { d: "M20 6L9 17l-5-5", stroke: "#0a0a0a", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
                /* @__PURE__ */ u("h3", { style: {
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 28,
                  color: "#fff",
                  margin: "0 0 12px",
                  fontWeight: 600
                }, children: "¡Solicitud recibida!" }),
                /* @__PURE__ */ u("p", { style: {
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 15,
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.7,
                  margin: "0 0 28px",
                  fontWeight: 300
                }, children: "Nos pondremos en contacto contigo en menos de 2 horas para confirmar tu cita." }),
                /* @__PURE__ */ u(
                  "button",
                  {
                    onClick: () => e(!1),
                    style: {
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 12,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#C9A84C",
                      background: "none",
                      border: "1px solid rgba(201,168,76,0.4)",
                      padding: "10px 24px",
                      cursor: "pointer",
                      borderRadius: 2
                    },
                    children: "Nueva solicitud"
                  }
                )
              ]
            }
          ) : /* @__PURE__ */ p(
            "form",
            {
              onSubmit: r,
              style: {
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
                padding: "44px 40px",
                display: "flex",
                flexDirection: "column",
                gap: 20
              },
              children: [
                /* @__PURE__ */ p("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }, className: "form-row", children: [
                  /* @__PURE__ */ p("div", { children: [
                    /* @__PURE__ */ u("label", { style: s, children: "Nombre" }),
                    /* @__PURE__ */ u(
                      "input",
                      {
                        type: "text",
                        placeholder: "Tu nombre",
                        required: !0,
                        value: n.nombre,
                        onChange: (a) => i({ ...n, nombre: a.target.value }),
                        style: o,
                        onFocus: (a) => a.currentTarget.style.borderColor = "rgba(201,168,76,0.6)",
                        onBlur: (a) => a.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ p("div", { children: [
                    /* @__PURE__ */ u("label", { style: s, children: "Teléfono" }),
                    /* @__PURE__ */ u(
                      "input",
                      {
                        type: "tel",
                        placeholder: "+34 600 000 000",
                        required: !0,
                        value: n.telefono,
                        onChange: (a) => i({ ...n, telefono: a.target.value }),
                        style: o,
                        onFocus: (a) => a.currentTarget.style.borderColor = "rgba(201,168,76,0.6)",
                        onBlur: (a) => a.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ p("div", { children: [
                  /* @__PURE__ */ u("label", { style: s, children: "Email" }),
                  /* @__PURE__ */ u(
                    "input",
                    {
                      type: "email",
                      placeholder: "tu@email.com",
                      required: !0,
                      value: n.email,
                      onChange: (a) => i({ ...n, email: a.target.value }),
                      style: o,
                      onFocus: (a) => a.currentTarget.style.borderColor = "rgba(201,168,76,0.6)",
                      onBlur: (a) => a.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"
                    }
                  )
                ] }),
                /* @__PURE__ */ p("div", { children: [
                  /* @__PURE__ */ u("label", { style: s, children: "Servicio" }),
                  /* @__PURE__ */ p(
                    "select",
                    {
                      required: !0,
                      value: n.servicio,
                      onChange: (a) => i({ ...n, servicio: a.target.value }),
                      style: { ...o, appearance: "none" },
                      onFocus: (a) => a.currentTarget.style.borderColor = "rgba(201,168,76,0.6)",
                      onBlur: (a) => a.currentTarget.style.borderColor = "rgba(255,255,255,0.1)",
                      children: [
                        /* @__PURE__ */ u("option", { value: "", disabled: !0, children: "Selecciona un servicio" }),
                        qu.map((a) => /* @__PURE__ */ u("option", { value: a, style: { background: "#1a1a1a" }, children: a }, a))
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ p("div", { children: [
                  /* @__PURE__ */ u("label", { style: s, children: "Horario preferido" }),
                  /* @__PURE__ */ u("div", { style: { display: "flex", flexWrap: "wrap", gap: 8 }, children: $u.map((a) => /* @__PURE__ */ u(
                    "button",
                    {
                      type: "button",
                      onClick: () => i({ ...n, horario: a }),
                      style: {
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 12,
                        padding: "8px 14px",
                        background: n.horario === a ? "rgba(201,168,76,0.15)" : "rgba(255,255,255,0.03)",
                        border: n.horario === a ? "1px solid rgba(201,168,76,0.6)" : "1px solid rgba(255,255,255,0.08)",
                        color: n.horario === a ? "#C9A84C" : "rgba(255,255,255,0.45)",
                        cursor: "pointer",
                        borderRadius: 2,
                        transition: "all 0.2s"
                      },
                      children: a
                    },
                    a
                  )) })
                ] }),
                /* @__PURE__ */ p("div", { children: [
                  /* @__PURE__ */ u("label", { style: s, children: "Descripción del problema (opcional)" }),
                  /* @__PURE__ */ u(
                    "textarea",
                    {
                      placeholder: "Cuéntanos brevemente tu situación...",
                      rows: 3,
                      value: n.mensaje,
                      onChange: (a) => i({ ...n, mensaje: a.target.value }),
                      style: { ...o, resize: "vertical", minHeight: 80 },
                      onFocus: (a) => a.currentTarget.style.borderColor = "rgba(201,168,76,0.6)",
                      onBlur: (a) => a.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"
                    }
                  )
                ] }),
                /* @__PURE__ */ u(
                  "button",
                  {
                    type: "submit",
                    style: {
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 13,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#0a0a0a",
                      fontWeight: 600,
                      background: "linear-gradient(135deg, #C9A84C, #E8C96A)",
                      padding: "16px 32px",
                      borderRadius: 2,
                      border: "none",
                      cursor: "pointer",
                      width: "100%",
                      boxShadow: "0 6px 24px rgba(201,168,76,0.3)",
                      transition: "transform 0.2s, box-shadow 0.2s",
                      marginTop: 4
                    },
                    onMouseEnter: (a) => {
                      a.currentTarget.style.transform = "translateY(-2px)", a.currentTarget.style.boxShadow = "0 12px 36px rgba(201,168,76,0.45)";
                    },
                    onMouseLeave: (a) => {
                      a.currentTarget.style.transform = "translateY(0)", a.currentTarget.style.boxShadow = "0 6px 24px rgba(201,168,76,0.3)";
                    },
                    children: "Solicitar Cita Gratuita"
                  }
                ),
                /* @__PURE__ */ u("p", { style: {
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 11,
                  color: "rgba(255,255,255,0.25)",
                  textAlign: "center",
                  margin: 0,
                  letterSpacing: "0.05em"
                }, children: "Tus datos están protegidos · Respuesta en <2h" })
              ]
            }
          )
        }
      )
    ] }) }),
    /* @__PURE__ */ u("style", { children: `
        @media (max-width: 900px) {
          .booking-grid {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
        }
        @media (max-width: 540px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
        select option {
          background: #1a1a1a;
          color: #fff;
        }
      ` })
  ] });
}
const Zu = "https://images.unsplash.com/photo-1620213391117-0d169a917221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHJ1bm5lciUyMGF0aGxldGUlMjBoZWFsdGh5JTIwbGlmZXN0eWxlfGVufDF8fHx8MTc3NTE2MTcwNnww&ixlib=rb-4.1.0&q=80&w=1920";
function Qu() {
  return /* @__PURE__ */ p("section", { id: "contacto", style: { position: "relative", overflow: "hidden", padding: "140px 0", background: "#050505" }, children: [
    /* @__PURE__ */ u("div", { style: {
      position: "absolute",
      inset: 0,
      backgroundImage: `url(${Zu})`,
      backgroundSize: "cover",
      backgroundPosition: "center 35%",
      filter: "brightness(0.18)"
    } }),
    /* @__PURE__ */ u("div", { style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(135deg, rgba(5,5,5,0.85) 0%, rgba(30,20,5,0.7) 100%)"
    } }),
    /* @__PURE__ */ u("div", { style: { position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(to right, transparent, #C9A84C 30%, #C9A84C 70%, transparent)" } }),
    /* @__PURE__ */ u("div", { style: { position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: "linear-gradient(to right, transparent, #C9A84C 30%, #C9A84C 70%, transparent)" } }),
    /* @__PURE__ */ u("div", { style: { position: "relative", zIndex: 2, maxWidth: 1280, margin: "0 auto", padding: "0 32px" }, children: /* @__PURE__ */ p("div", { style: { maxWidth: 700, margin: "0 auto", textAlign: "center" }, children: [
      /* @__PURE__ */ p("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 28 }, children: [
        /* @__PURE__ */ u("div", { style: { width: 40, height: 1, background: "#C9A84C" } }),
        /* @__PURE__ */ u("span", { style: { fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C9A84C" }, children: "Empieza Hoy" }),
        /* @__PURE__ */ u("div", { style: { width: 40, height: 1, background: "#C9A84C" } })
      ] }),
      /* @__PURE__ */ p("h2", { style: {
        fontFamily: "'Playfair Display', serif",
        fontSize: "clamp(34px, 5vw, 62px)",
        color: "#fff",
        lineHeight: 1.1,
        margin: "0 0 24px",
        fontWeight: 700
      }, children: [
        "Tu cuerpo merece",
        /* @__PURE__ */ u("br", {}),
        /* @__PURE__ */ u("em", { style: { color: "#C9A84C", fontStyle: "italic" }, children: "lo mejor." })
      ] }),
      /* @__PURE__ */ u("p", { style: {
        fontFamily: "'Inter', sans-serif",
        fontSize: 17,
        lineHeight: 1.75,
        color: "rgba(255,255,255,0.6)",
        margin: "0 0 52px",
        fontWeight: 300
      }, children: "Primera consulta de valoración completamente gratuita. Sin compromiso. Sin esperas. Descubre en 45 minutos exactamente qué necesita tu cuerpo." }),
      /* @__PURE__ */ p("div", { style: { display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ p(
          "a",
          {
            href: "tel:+34912345678",
            style: {
              fontFamily: "'Inter', sans-serif",
              fontSize: 14,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#0a0a0a",
              fontWeight: 600,
              background: "linear-gradient(135deg, #C9A84C, #E8C96A)",
              padding: "18px 48px",
              borderRadius: 2,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              boxShadow: "0 8px 40px rgba(201,168,76,0.4)",
              transition: "transform 0.2s, box-shadow 0.2s"
            },
            onMouseEnter: (t) => {
              t.currentTarget.style.transform = "translateY(-2px)", t.currentTarget.style.boxShadow = "0 16px 50px rgba(201,168,76,0.55)";
            },
            onMouseLeave: (t) => {
              t.currentTarget.style.transform = "translateY(0)", t.currentTarget.style.boxShadow = "0 8px 40px rgba(201,168,76,0.4)";
            },
            children: [
              /* @__PURE__ */ u("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ u("path", { d: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" }) }),
              "Llamar Ahora"
            ]
          }
        ),
        /* @__PURE__ */ p(
          "a",
          {
            href: "mailto:info@kinesispro.es",
            style: {
              fontFamily: "'Inter', sans-serif",
              fontSize: 14,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#fff",
              fontWeight: 500,
              border: "1px solid rgba(201,168,76,0.5)",
              padding: "18px 48px",
              borderRadius: 2,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "rgba(201,168,76,0.05)",
              transition: "background 0.2s, border-color 0.2s"
            },
            onMouseEnter: (t) => {
              t.currentTarget.style.background = "rgba(201,168,76,0.12)", t.currentTarget.style.borderColor = "#C9A84C";
            },
            onMouseLeave: (t) => {
              t.currentTarget.style.background = "rgba(201,168,76,0.05)", t.currentTarget.style.borderColor = "rgba(201,168,76,0.5)";
            },
            children: [
              /* @__PURE__ */ u("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ u("path", { d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" }) }),
              "Escribir Email"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ u("p", { style: {
        fontFamily: "'Inter', sans-serif",
        fontSize: 12,
        color: "rgba(255,255,255,0.3)",
        marginTop: 32,
        letterSpacing: "0.08em"
      }, children: "Sin tarjeta de crédito · Respuesta en menos de 2 horas · Disponible L-S 8:00–21:00" })
    ] }) })
  ] });
}
function td() {
  const t = {
    Servicios: ["Fisioterapia Deportiva", "Terapia Manual", "Masaje Terapéutico", "Electroterapia", "Pilates Clínico"],
    Clínica: ["Nosotros", "Equipo Médico", "Instalaciones", "Blog", "Trabaja con nosotros"],
    Legal: ["Aviso Legal", "Política de Privacidad", "Cookies", "RGPD"]
  };
  return /* @__PURE__ */ p("footer", { style: { background: "#050505", borderTop: "1px solid rgba(255,255,255,0.05)" }, children: [
    /* @__PURE__ */ u("div", { style: { maxWidth: 1280, margin: "0 auto", padding: "80px 32px 60px" }, children: /* @__PURE__ */ p("div", { style: { display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, flexWrap: "wrap" }, className: "footer-grid", children: [
      /* @__PURE__ */ p("div", { children: [
        /* @__PURE__ */ p("div", { style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }, children: [
          /* @__PURE__ */ u("div", { style: {
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #C9A84C, #E8C96A)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }, children: /* @__PURE__ */ p("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", children: [
            /* @__PURE__ */ u("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z", fill: "#0a0a0a" }),
            /* @__PURE__ */ u("path", { d: "M12 6v6l4 2-1 1.73-5-2.5V6H12z", fill: "#0a0a0a" })
          ] }) }),
          /* @__PURE__ */ p("span", { style: { fontFamily: "'Playfair Display', serif", fontSize: 20, color: "#fff", letterSpacing: "0.04em" }, children: [
            "KINESIS",
            /* @__PURE__ */ u("span", { style: { color: "#C9A84C" }, children: "PRO" })
          ] })
        ] }),
        /* @__PURE__ */ u("p", { style: {
          fontFamily: "'Inter', sans-serif",
          fontSize: 14,
          lineHeight: 1.75,
          color: "rgba(255,255,255,0.4)",
          margin: "0 0 28px",
          fontWeight: 300,
          maxWidth: 280
        }, children: "Fisioterapia de élite en el corazón de Madrid. Recuperación avanzada, tecnología de vanguardia y un equipo comprometido con tu bienestar." }),
        /* @__PURE__ */ u("div", { style: { display: "flex", flexDirection: "column", gap: 12 }, children: [
          { icon: "📍", text: "Calle Serrano 84, Madrid 28006" },
          { icon: "📞", text: "+34 912 345 678" },
          { icon: "✉️", text: "info@kinesispro.es" }
        ].map((e) => /* @__PURE__ */ p("div", { style: { display: "flex", alignItems: "center", gap: 10 }, children: [
          /* @__PURE__ */ u("span", { style: { fontSize: 14 }, children: e.icon }),
          /* @__PURE__ */ u("span", { style: { fontFamily: "'Inter', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.4)", fontWeight: 300 }, children: e.text })
        ] }, e.text)) })
      ] }),
      Object.entries(t).map(([e, n]) => /* @__PURE__ */ p("div", { children: [
        /* @__PURE__ */ u("h4", { style: {
          fontFamily: "'Inter', sans-serif",
          fontSize: 11,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#C9A84C",
          margin: "0 0 24px",
          fontWeight: 600
        }, children: e }),
        /* @__PURE__ */ u("ul", { style: { listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 }, children: n.map((i) => /* @__PURE__ */ u("li", { children: /* @__PURE__ */ u(
          "a",
          {
            href: "#",
            style: {
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              color: "rgba(255,255,255,0.4)",
              textDecoration: "none",
              fontWeight: 300,
              transition: "color 0.2s"
            },
            onMouseEnter: (r) => r.currentTarget.style.color = "rgba(255,255,255,0.85)",
            onMouseLeave: (r) => r.currentTarget.style.color = "rgba(255,255,255,0.4)",
            children: i
          }
        ) }, i)) })
      ] }, e))
    ] }) }),
    /* @__PURE__ */ u("div", { style: { borderTop: "1px solid rgba(255,255,255,0.05)", padding: "20px 32px" }, children: /* @__PURE__ */ p("div", { style: { maxWidth: 1280, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }, children: [
      /* @__PURE__ */ u("span", { style: { fontFamily: "'Inter', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.25)", fontWeight: 300 }, children: "© 2026 KinesisPro. Todos los derechos reservados." }),
      /* @__PURE__ */ u("div", { style: { display: "flex", gap: 20 }, children: ["Instagram", "LinkedIn", "Facebook"].map((e) => /* @__PURE__ */ u(
        "a",
        {
          href: "#",
          style: {
            fontFamily: "'Inter', sans-serif",
            fontSize: 12,
            color: "rgba(255,255,255,0.25)",
            textDecoration: "none",
            letterSpacing: "0.06em",
            transition: "color 0.2s"
          },
          onMouseEnter: (n) => n.currentTarget.style.color = "#C9A84C",
          onMouseLeave: (n) => n.currentTarget.style.color = "rgba(255,255,255,0.25)",
          children: e
        },
        e
      )) })
    ] }) }),
    /* @__PURE__ */ u("style", { children: `
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 560px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      ` })
  ] });
}
function ed() {
  const [t, e] = U(!1), [n, i] = U(!1);
  return Z(() => {
    const r = setTimeout(() => e(!0), 2e3), o = () => e(window.scrollY > 300);
    return window.addEventListener("scroll", o, { passive: !0 }), () => {
      clearTimeout(r), window.removeEventListener("scroll", o);
    };
  }, []), /* @__PURE__ */ u(He, { children: t && /* @__PURE__ */ p(
    I.div,
    {
      initial: { opacity: 0, y: 20, scale: 0.9 },
      animate: { opacity: 1, y: 0, scale: 1 },
      exit: { opacity: 0, y: 20, scale: 0.9 },
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
      style: {
        position: "fixed",
        bottom: 32,
        right: 32,
        zIndex: 200,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 12
      },
      children: [
        /* @__PURE__ */ u(He, { children: n && /* @__PURE__ */ p(
          I.div,
          {
            initial: { opacity: 0, y: 10, scale: 0.95 },
            animate: { opacity: 1, y: 0, scale: 1 },
            exit: { opacity: 0, y: 10, scale: 0.95 },
            transition: { duration: 0.25 },
            style: {
              display: "flex",
              flexDirection: "column",
              gap: 10,
              alignItems: "flex-end"
            },
            children: [
              /* @__PURE__ */ p(
                "a",
                {
                  href: "https://wa.me/34912345678",
                  target: "_blank",
                  rel: "noreferrer",
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    background: "#25D366",
                    color: "#fff",
                    padding: "10px 20px 10px 16px",
                    borderRadius: 40,
                    textDecoration: "none",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 13,
                    fontWeight: 500,
                    boxShadow: "0 4px 20px rgba(37,211,102,0.35)",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    whiteSpace: "nowrap"
                  },
                  onMouseEnter: (r) => {
                    r.currentTarget.style.transform = "translateX(-4px)";
                  },
                  onMouseLeave: (r) => {
                    r.currentTarget.style.transform = "translateX(0)";
                  },
                  children: [
                    /* @__PURE__ */ u("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ u("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" }) }),
                    "WhatsApp"
                  ]
                }
              ),
              /* @__PURE__ */ p(
                "a",
                {
                  href: "tel:+34912345678",
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    background: "rgba(201,168,76,1)",
                    color: "#0a0a0a",
                    padding: "10px 20px 10px 16px",
                    borderRadius: 40,
                    textDecoration: "none",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 13,
                    fontWeight: 600,
                    boxShadow: "0 4px 20px rgba(201,168,76,0.4)",
                    transition: "transform 0.2s",
                    whiteSpace: "nowrap"
                  },
                  onMouseEnter: (r) => {
                    r.currentTarget.style.transform = "translateX(-4px)";
                  },
                  onMouseLeave: (r) => {
                    r.currentTarget.style.transform = "translateX(0)";
                  },
                  children: [
                    /* @__PURE__ */ u("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ u("path", { d: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" }) }),
                    "Llamar ahora"
                  ]
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ u(
          I.button,
          {
            onClick: () => i(!n),
            whileHover: { scale: 1.05 },
            whileTap: { scale: 0.95 },
            style: {
              width: 56,
              height: 56,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #C9A84C, #E8C96A)",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 6px 28px rgba(201,168,76,0.5)",
              transition: "box-shadow 0.3s",
              color: "#0a0a0a"
            },
            children: /* @__PURE__ */ u(
              I.div,
              {
                animate: { rotate: n ? 45 : 0 },
                transition: { duration: 0.3 },
                children: n ? /* @__PURE__ */ u("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ u("path", { d: "M18 6L6 18M6 6l12 12", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round" }) }) : /* @__PURE__ */ u("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ u("path", { d: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" }) })
              }
            )
          }
        ),
        !n && /* @__PURE__ */ u(
          I.div,
          {
            animate: { scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] },
            transition: { duration: 2.5, repeat: 1 / 0, ease: "easeInOut" },
            style: {
              position: "absolute",
              bottom: 0,
              right: 0,
              width: 56,
              height: 56,
              borderRadius: "50%",
              border: "2px solid rgba(201,168,76,0.5)",
              pointerEvents: "none"
            }
          }
        )
      ]
    }
  ) });
}
function nd() {
  return /* @__PURE__ */ p("div", { style: { background: "#080808", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }, children: [
    /* @__PURE__ */ u(Ks, {}),
    /* @__PURE__ */ u($s, {}),
    /* @__PURE__ */ u(Fu, {}),
    /* @__PURE__ */ u(Lu, {}),
    /* @__PURE__ */ u(Bu, {}),
    /* @__PURE__ */ u(Nu, {}),
    /* @__PURE__ */ u(Ou, {}),
    /* @__PURE__ */ u(Uu, {}),
    /* @__PURE__ */ u(Yu, {}),
    /* @__PURE__ */ u(Ku, {}),
    /* @__PURE__ */ u(Ju, {}),
    /* @__PURE__ */ u(Qu, {}),
    /* @__PURE__ */ u(td, {}),
    /* @__PURE__ */ u(ed, {})
  ] });
}
const id = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nd
}, Symbol.toStringTag, { value: "Module" }));
export {
  sd as Code1_4
};
