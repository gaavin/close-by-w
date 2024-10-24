var __require = /* @__PURE__ */ ((x2) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x2, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x2)(function(x2) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x2 + '" is not supported');
});

// .wrangler/tmp/bundle-Wbngxz/checked-fetch.js
var urls = /* @__PURE__ */ new Set();
function checkURL(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
globalThis.fetch = new Proxy(globalThis.fetch, {
  apply(target, thisArg, argArray) {
    const [request, init] = argArray;
    checkURL(request, init);
    return Reflect.apply(target, thisArg, argArray);
  }
});

// .wrangler/tmp/pages-RwzcW7/bundledWorker-0.6398457051582418.mjs
var __require2 = /* @__PURE__ */ ((x2) => typeof __require !== "undefined" ? __require : typeof Proxy !== "undefined" ? new Proxy(x2, {
  get: (a, b) => (typeof __require !== "undefined" ? __require : a)[b]
}) : x2)(function(x2) {
  if (typeof __require !== "undefined")
    return __require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x2 + '" is not supported');
});
var urls2 = /* @__PURE__ */ new Set();
function checkURL2(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls2.has(url.toString())) {
      urls2.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
globalThis.fetch = new Proxy(globalThis.fetch, {
  apply(target, thisArg, argArray) {
    const [request, init] = argArray;
    checkURL2(request, init);
    return Reflect.apply(target, thisArg, argArray);
  }
});
var notFounds = [
  [
    "/",
    '<html>\n<head>\n  <meta charset="utf-8">\n  <meta http-equiv="Status" content="404">\n  <title>404 Resource Not Found</title>\n  <meta name="viewport" content="width=device-width,initial-scale=1">\n  <style>\n    body { color: #006ce9; background-color: #fafafa; padding: 30px; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Roboto, sans-serif; }\n    p { max-width: 600px; margin: 60px auto 30px auto; background: white; border-radius: 4px; box-shadow: 0px 0px 50px -20px #006ce9; overflow: hidden; }\n    strong { display: inline-block; padding: 15px; background: #006ce9; color: white; }\n    span { display: inline-block; padding: 15px; }\n  </style>\n</head>\n<body><p><strong>404</strong> <span>Resource Not Found</span></p></body>\n</html>'
  ]
];
function getNotFound(p2) {
  for (const r of notFounds) {
    if (p2.startsWith(r[0])) {
      return r[1];
    }
  }
  return "Resource Not Found";
}
var staticPaths = /* @__PURE__ */ new Set(["/_headers", "/_redirects", "/favicon.svg", "/manifest.json", "/q-manifest.json", "/qwik-prefetch-service-worker.js", "/robots.txt", "/service-worker.js", "/sitemap.xml"]);
function isStaticPath(method, url) {
  if (method.toUpperCase() !== "GET") {
    return false;
  }
  const p2 = url.pathname;
  if (p2.startsWith("/build/")) {
    return true;
  }
  if (p2.startsWith("/assets/")) {
    return true;
  }
  if (staticPaths.has(p2)) {
    return true;
  }
  if (p2.endsWith("/q-data.json")) {
    const pWithoutQdata = p2.replace(/\/q-data.json$/, "");
    if (staticPaths.has(pWithoutQdata + "/")) {
      return true;
    }
    if (staticPaths.has(pWithoutQdata)) {
      return true;
    }
  }
  return false;
}
var Se = (e) => e && typeof e.nodeType == "number";
var bs = (e) => e.nodeType === 9;
var we = (e) => e.nodeType === 1;
var be = (e) => {
  const t = e.nodeType;
  return t === 1 || t === 111;
};
var Gr = (e) => {
  const t = e.nodeType;
  return t === 1 || t === 111 || t === 3;
};
var se = (e) => e.nodeType === 111;
var dn = (e) => e.nodeType === 3;
var ot = (e) => e.nodeType === 8;
var _e = (e, ...t) => hn(false, e, ...t);
var Es = (e, ...t) => {
  throw hn(false, e, ...t);
};
var pn = (e, ...t) => hn(true, e, ...t);
var de = () => {
};
var Kr = (e) => e;
var hn = (e, t, ...n2) => {
  const s = t instanceof Error ? t : new Error(t);
  return console.error("%cQWIK ERROR", "", s.message, ...Kr(n2), s.stack), e && setTimeout(() => {
    throw s;
  }, 0), s;
};
var Pt = (e) => `Code(${e}) https://github.com/QwikDev/qwik/blob/main/packages/qwik/src/core/error/error.ts#L${8 + e}`;
var P = (e, ...t) => {
  const n2 = Pt(e, ...t);
  return pn(n2, ...t);
};
var Yr = () => ({ isServer: true, importSymbol(e, t, n2) {
  var o;
  {
    const i = zr(n2), c = (o = globalThis.__qwik_reg_symbols) == null ? void 0 : o.get(i);
    if (c)
      return c;
  }
  if (!t)
    throw P(31, n2);
  if (!e)
    throw P(30, t, n2);
  const s = Xr(e.ownerDocument, e, t).toString(), r = new URL(s);
  return r.hash = "", import(r.href).then((i) => i[n2]);
}, raf: (e) => new Promise((t) => {
  requestAnimationFrame(() => {
    t(e());
  });
}), nextTick: (e) => new Promise((t) => {
  setTimeout(() => {
    t(e());
  });
}), chunkForSymbol: (e, t) => [e, t ?? "_"] });
var Xr = (e, t, n2) => {
  const s = e.baseURI, r = new URL(t.getAttribute("q:base") ?? s, s);
  return new URL(n2, r);
};
var mn = Yr();
var K$ = (e) => mn = e;
var Ct = () => mn;
var j = () => mn.isServer;
var it = (e) => {
  const t = Object.getPrototypeOf(e);
  return t === Object.prototype || t === null;
};
var ue = (e) => !!e && typeof e == "object";
var M = (e) => Array.isArray(e);
var pe = (e) => typeof e == "string";
var W = (e) => typeof e == "function";
var O = (e) => e && typeof e.then == "function";
var Ot = (e, t, n2) => {
  try {
    const s = e();
    return O(s) ? s.then(t, n2) : t(s);
  } catch (s) {
    return n2(s);
  }
};
var k = (e, t) => O(e) ? e.then(t) : t(e);
var gn = (e) => e.some(O) ? Promise.all(e) : e;
var Ne = (e) => e.length > 0 ? Promise.all(e) : e;
var xs = (e) => e != null;
var jr = (e) => new Promise((t) => {
  setTimeout(t, e);
});
var ce = [];
var z = {};
var ct = (e) => typeof document < "u" ? document : e.nodeType === 9 ? e : e.ownerDocument;
var Zr = "q:renderFn";
var K = "q:slot";
var _s = "q:s";
var Dt = "q:style";
var eo = "q:sstyle";
var qs = "q:instance";
var ks = (e, t) => e["qFuncs_" + t] || [];
var to = "q:id";
var en = Symbol("proxy target");
var Ae = Symbol("proxy flags");
var ne = Symbol("proxy manager");
var N = Symbol("IMMUTABLE");
var zt = "_qc_";
var G = (e, t, n2) => e.setAttribute(t, n2);
var Z = (e, t) => e.getAttribute(t);
var yn = (e) => e.replace(/([A-Z])/g, "-$1").toLowerCase();
var no = (e) => e.replace(/-./g, (t) => t[1].toUpperCase());
var so = /^(on|window:|document:)/;
var Ts = "preventdefault:";
var vn = (e) => e.endsWith("$") && so.test(e);
var Sn = (e) => {
  if (e.length === 0)
    return ce;
  if (e.length === 1) {
    const n2 = e[0];
    return [[n2[0], [n2[1]]]];
  }
  const t = [];
  for (let n2 = 0; n2 < e.length; n2++) {
    const s = e[n2][0];
    t.includes(s) || t.push(s);
  }
  return t.map((n2) => [n2, e.filter((s) => s[0] === n2).map((s) => s[1])]);
};
var wn = (e, t, n2, s) => {
  if (t.endsWith("$"), t = tn(t.slice(0, -1)), n2)
    if (M(n2)) {
      const r = n2.flat(1 / 0).filter((o) => o != null).map((o) => [t, jn(o, s)]);
      e.push(...r);
    } else
      e.push([t, jn(n2, s)]);
  return t;
};
var Xn = ["on", "window:on", "document:on"];
var ro = ["on", "on-window", "on-document"];
var tn = (e) => {
  let t = "on";
  for (let n2 = 0; n2 < Xn.length; n2++) {
    const s = Xn[n2];
    if (e.startsWith(s)) {
      t = ro[n2], e = e.slice(s.length);
      break;
    }
  }
  return t + ":" + (e = e.startsWith("-") ? yn(e.slice(1)) : e.toLowerCase());
};
var jn = (e, t) => (e.$setContainer$(t), e);
var oo = (e, t) => {
  const n2 = e.$element$.attributes, s = [];
  for (let r = 0; r < n2.length; r++) {
    const { name: o, value: i } = n2.item(r);
    if (o.startsWith("on:") || o.startsWith("on-window:") || o.startsWith("on-document:")) {
      const c = i.split(`
`);
      for (const $ of c) {
        const l2 = Ht($, t);
        l2.$capture$ && Ir(l2, e), s.push([o, l2]);
      }
    }
  }
  return s;
};
var io = (e, t) => {
  Rs(Is(e, void 0), t);
};
var Zn = (e, t) => {
  Rs(Is(e, "document"), t);
};
var Is = (e, t) => {
  const n2 = t !== void 0 ? t + ":" : "";
  return Array.isArray(e) ? e.map((s) => `${n2}on-${s}`) : `${n2}on-${e}`;
};
var Rs = (e, t) => {
  if (t) {
    const n2 = Cn(), s = U(n2.$hostElement$, n2.$renderCtx$.$static$.$containerState$);
    typeof e == "string" ? s.li.push([tn(e), t]) : s.li.push(...e.map((r) => [tn(r), t])), s.$flags$ |= ge;
  }
};
var co = (e, t, n2, s) => {
  typeof CustomEvent == "function" && e && e.dispatchEvent(new CustomEvent(t, { detail: n2, bubbles: s, composed: s }));
};
var bn = (e, t, n2 = 0) => t.$proxyMap$.get(e) || (n2 !== 0 && Ft(e, n2), $t(e, t, void 0));
var $t = (e, t, n2) => {
  pt(e), t.$proxyMap$.has(e);
  const s = t.$subsManager$.$createManager$(n2), r = new Proxy(e, new Ms(t, s));
  return t.$proxyMap$.set(e, r), r;
};
var Lt = () => {
  const e = {};
  return Ft(e, 2), e;
};
var Ft = (e, t) => {
  Object.defineProperty(e, Ae, { value: t, enumerable: false });
};
var Y$ = (e, t) => {
  const n2 = {};
  for (const s in e)
    t.includes(s) || (n2[s] = e[s]);
  return n2;
};
var Ms = class {
  constructor(t, n2) {
    this.$containerState$ = t, this.$manager$ = n2;
  }
  deleteProperty(t, n2) {
    if (2 & t[Ae])
      throw P(17);
    return typeof n2 == "string" && delete t[n2] && (this.$manager$.$notifySubs$(M(t) ? void 0 : n2), true);
  }
  get(t, n2) {
    var l2;
    if (typeof n2 == "symbol")
      return n2 === en ? t : n2 === ne ? this.$manager$ : t[n2];
    const s = t[Ae] ?? 0, r = F(), o = !!(1 & s), i = t["$$" + n2];
    let c, $;
    if (r && (c = r.$subscriber$), !(2 & s) || n2 in t && !$o((l2 = t[N]) == null ? void 0 : l2[n2]) || (c = null), i ? ($ = i.value, c = null) : $ = t[n2], c) {
      const a = M(t);
      this.$manager$.$addSub$(c, a ? void 0 : n2);
    }
    return o ? lo($, this.$containerState$) : $;
  }
  set(t, n2, s) {
    if (typeof n2 == "symbol")
      return t[n2] = s, true;
    const r = t[Ae] ?? 0;
    if (2 & r)
      throw P(17);
    const o = 1 & r ? pt(s) : s;
    if (M(t))
      return t[n2] = o, this.$manager$.$notifySubs$(), true;
    const i = t[n2];
    return t[n2] = o, i !== o && this.$manager$.$notifySubs$(n2), true;
  }
  has(t, n2) {
    if (n2 === en)
      return true;
    const s = Object.prototype.hasOwnProperty;
    return !!s.call(t, n2) || !(typeof n2 != "string" || !s.call(t, "$$" + n2));
  }
  ownKeys(t) {
    if (!(2 & (t[Ae] ?? 0))) {
      let s = null;
      const r = F();
      r && (s = r.$subscriber$), s && this.$manager$.$addSub$(s);
    }
    return M(t) ? Reflect.ownKeys(t) : Reflect.ownKeys(t).map((s) => typeof s == "string" && s.startsWith("$$") ? s.slice(2) : s);
  }
  getOwnPropertyDescriptor(t, n2) {
    return M(t) || typeof n2 == "symbol" ? Object.getOwnPropertyDescriptor(t, n2) : { enumerable: true, configurable: true };
  }
};
var $o = (e) => e === N || D(e);
var lo = (e, t) => {
  if (ue(e)) {
    if (Object.isFrozen(e))
      return e;
    const n2 = pt(e);
    if (n2 !== e || Pr(n2))
      return e;
    if (it(n2) || M(n2))
      return t.$proxyMap$.get(n2) || bn(n2, t, 1);
  }
  return e;
};
var ao = (e, t = 0) => {
  for (let n2 = 0; n2 < e.length; n2++)
    t = (t << 5) - t + e.charCodeAt(n2), t |= 0;
  return Number(Math.abs(t)).toString(36);
};
var uo = (e, t) => `${ao(e.$hash$)}-${t}`;
var Ns = (e) => {
  const t = e.join("|");
  if (t.length > 0)
    return t;
};
var Ue = () => {
  const e = Cn(), t = U(e.$hostElement$, e.$renderCtx$.$static$.$containerState$), n2 = t.$seq$ || (t.$seq$ = []), s = e.$i$++;
  return { val: n2[s], set: (r) => n2[s] = r, i: s, iCtx: e, elCtx: t };
};
var re = (e) => Object.freeze({ id: yn(e) });
var ie = (e, t) => {
  const { val: n2, set: s, elCtx: r } = Ue();
  if (n2 !== void 0)
    return;
  (r.$contexts$ || (r.$contexts$ = /* @__PURE__ */ new Map())).set(e.id, t), s(true);
};
var Qt = (e, t) => {
  const { val: n2, set: s, iCtx: r, elCtx: o } = Ue();
  if (n2 !== void 0)
    return n2;
  const i = As(e, o, r.$renderCtx$.$static$.$containerState$);
  if (i !== void 0)
    return s(i);
  throw P(13, e.id);
};
var fo = (e, t) => {
  var r;
  let n2 = e, s = 1;
  for (; n2 && !((r = n2.hasAttribute) != null && r.call(n2, "q:container")); ) {
    for (; n2 = n2.previousSibling; )
      if (ot(n2)) {
        const o = n2.__virtual;
        if (o) {
          const i = o[zt];
          if (n2 === o.open)
            return i ?? U(o, t);
          if (i != null && i.$parentCtx$)
            return i.$parentCtx$;
          n2 = o;
          continue;
        }
        if (n2.data === "/qv")
          s++;
        else if (n2.data.startsWith("qv ") && (s--, s === 0))
          return U(dt(n2), t);
      }
    n2 = e.parentElement, e = n2;
  }
  return null;
};
var po = (e, t) => (e.$parentCtx$ === void 0 && (e.$parentCtx$ = fo(e.$element$, t)), e.$parentCtx$);
var As = (e, t, n2) => {
  var o;
  const s = e.id;
  if (!t)
    return;
  let r = t;
  for (; r; ) {
    const i = (o = r.$contexts$) == null ? void 0 : o.get(s);
    if (i)
      return i;
    r = po(r, n2);
  }
};
var ho = re("qk-error");
var En = (e, t, n2) => {
  const s = Y(t);
  if (j())
    throw e;
  {
    const r = As(ho, s, n2.$static$.$containerState$);
    if (r === void 0)
      throw e;
    r.error = e;
  }
};
var mo = /* @__PURE__ */ new Set(["animationIterationCount", "aspectRatio", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexShrink", "gridArea", "gridRow", "gridRowEnd", "gridRowStart", "gridColumn", "gridColumnEnd", "gridColumnStart", "fontWeight", "lineClamp", "lineHeight", "opacity", "order", "orphans", "scale", "tabSize", "widows", "zIndex", "zoom", "MozAnimationIterationCount", "MozBoxFlex", "msFlex", "msFlexPositive", "WebkitAnimationIterationCount", "WebkitBoxFlex", "WebkitBoxOrdinalGroup", "WebkitColumnCount", "WebkitColumns", "WebkitFlex", "WebkitFlexGrow", "WebkitFlexShrink", "WebkitLineClamp"]);
var go = (e) => mo.has(e);
var wt = (e, t, n2) => {
  t.$flags$ &= ~Fe, t.$flags$ |= An, t.$slots$ = [], t.li.length = 0;
  const s = t.$element$, r = t.$componentQrl$, o = t.$props$, i = H(e.$static$.$locale$, s, void 0, "qRender"), c = i.$waitOn$ = [], $ = lt(e);
  $.$cmpCtx$ = t, $.$slotCtx$ = void 0, i.$subscriber$ = [0, s], i.$renderCtx$ = e, r.$setContainer$(e.$static$.$containerState$.$containerEl$);
  const l2 = r.getFn(i);
  return Ot(() => l2(o), (a) => k(j() ? k(Ne(c), () => k(ni(e.$static$.$containerState$, e), () => Ne(c))) : Ne(c), () => {
    var u;
    if (t.$flags$ & Fe) {
      if (!(n2 && n2 > 100))
        return wt(e, t, n2 ? n2 + 1 : 1);
      de(`Infinite loop detected. Element: ${(u = t.$componentQrl$) == null ? void 0 : u.$symbol$}`);
    }
    return { node: a, rCtx: $ };
  }), (a) => {
    var u;
    if (a === ar) {
      if (!(n2 && n2 > 100))
        return k(Ne(c), () => wt(e, t, n2 ? n2 + 1 : 1));
      de(`Infinite loop detected. Element: ${(u = t.$componentQrl$) == null ? void 0 : u.$symbol$}`);
    }
    return En(a, s, e), { node: kn, rCtx: $ };
  });
};
var Ps = (e, t) => ({ $static$: { $doc$: e, $locale$: t.$serverData$.locale, $containerState$: t, $hostElements$: /* @__PURE__ */ new Set(), $operations$: [], $postOperations$: [], $roots$: [], $addSlots$: [], $rmSlots$: [], $visited$: [] }, $cmpCtx$: null, $slotCtx$: void 0 });
var lt = (e) => ({ $static$: e.$static$, $cmpCtx$: e.$cmpCtx$, $slotCtx$: e.$slotCtx$ });
var xn = (e, t) => {
  var n2;
  return (n2 = t == null ? void 0 : t.$scopeIds$) != null && n2.length ? t.$scopeIds$.join(" ") + " " + bt(e) : bt(e);
};
var bt = (e) => {
  if (!e)
    return "";
  if (pe(e))
    return e.trim();
  const t = [];
  if (M(e))
    for (const n2 of e) {
      const s = bt(n2);
      s && t.push(s);
    }
  else
    for (const [n2, s] of Object.entries(e))
      s && t.push(n2.trim());
  return t.join(" ");
};
var Wt = (e) => {
  if (e == null)
    return "";
  if (typeof e == "object") {
    if (M(e))
      throw P(0, e, "style");
    {
      const t = [];
      for (const n2 in e)
        if (Object.prototype.hasOwnProperty.call(e, n2)) {
          const s = e[n2];
          s != null && (n2.startsWith("--") ? t.push(n2 + ":" + s) : t.push(yn(n2) + ":" + yo(n2, s)));
        }
      return t.join(";");
    }
  }
  return String(e);
};
var yo = (e, t) => typeof t != "number" || t === 0 || go(e) ? t : t + "px";
var Ye = (e) => ye(e.$static$.$containerState$.$elementIndex$++);
var Cs = (e, t) => {
  const n2 = Ye(e);
  t.$id$ = n2;
};
var Xe = (e) => D(e) ? Xe(e.value) : e == null || typeof e == "boolean" ? "" : String(e);
function Os(e) {
  return e.startsWith("aria-");
}
var Ds = (e, t) => !!t.key && (!Te(e) || !W(e.type) && e.key != t.key);
var L = "dangerouslySetInnerHTML";
var zs;
var St = "<!--qkssr-f-->";
var Ls = class {
  constructor(t) {
    this.nodeType = t, this[zs] = null;
  }
};
zs = zt;
var vo = () => new Ls(9);
var X$ = async (e, t) => {
  var S2, m, f2;
  const n2 = t.containerTagName, s = Et(1).$element$, r = Dn(s, t.base ?? "/");
  r.$serverData$.locale = (S2 = t.serverData) == null ? void 0 : S2.locale;
  const o = vo(), i = Ps(o, r), c = t.beforeContent ?? [], $ = { $static$: { $contexts$: [], $headNodes$: n2 === "html" ? c : [], $locale$: (m = t.serverData) == null ? void 0 : m.locale, $textNodes$: /* @__PURE__ */ new Map() }, $projectedChildren$: void 0, $projectedCtxs$: void 0, $invocationContext$: void 0 }, l2 = (f2 = t.serverData) == null ? void 0 : f2.locale, a = t.containerAttributes, u = a["q:render"];
  a["q:container"] = "paused", a["q:version"] = "1.9.0", a["q:render"] = (u ? u + "-" : "") + "ssr", a["q:base"] = t.base || "", a["q:locale"] = l2, a["q:manifest-hash"] = t.manifestHash, a["q:instance"] = So();
  const d2 = n2 === "html" ? [e] : [c, e];
  n2 !== "html" && (a.class = "qc\u{1F4E6}" + (a.class ? " " + a.class : ""));
  const p2 = r.$serverData$ = { ...r.$serverData$, ...t.serverData };
  p2.containerAttributes = { ...p2.containerAttributes, ...a }, ($.$invocationContext$ = H(l2)).$renderCtx$ = i;
  const v2 = qe(n2, null, a, d2, Fe | ge, null);
  r.$hostsRendering$ = /* @__PURE__ */ new Set(), await Promise.resolve().then(() => wo(v2, i, $, t.stream, r, t));
};
var So = () => Math.random().toString(36).slice(2);
var wo = async (e, t, n2, s, r, o) => {
  const i = o.beforeClose;
  return await qn(e, t, n2, s, 0, i ? (c) => {
    const $ = i(n2.$static$.$contexts$, r, false, n2.$static$.$textNodes$);
    return X($, t, n2, c, 0, void 0);
  } : void 0), t;
};
var bo = async (e, t, n2, s, r) => {
  s.write(St);
  const o = e.props.children;
  let i;
  if (W(o)) {
    const c = o({ write($) {
      s.write($), s.write(St);
    } });
    if (O(c))
      return c;
    i = c;
  } else
    i = o;
  for await (const c of i)
    await X(c, t, n2, s, r, void 0), s.write(St);
};
var Fs = (e, t, n2, s, r, o, i, c) => {
  var S2;
  const $ = e.props, l2 = $["q:renderFn"];
  if (l2)
    return t.$componentQrl$ = l2, _o(s, r, o, t, e, i, c);
  let a = "<!--qv" + xo($);
  const u = "q:s" in $, d2 = e.key != null ? String(e.key) : null;
  u && ((S2 = s.$cmpCtx$) == null || S2.$id$, a += " q:sref=" + s.$cmpCtx$.$id$), d2 != null && (a += " q:key=" + d2), a += "-->", o.write(a);
  const p2 = e.props[L];
  if (p2)
    return o.write(p2), void o.write(Yt);
  if (n2)
    for (const m of n2)
      _n(m.type, m.props, o);
  const v2 = Qs(e.children, s, r, o, i);
  return k(v2, () => {
    var f2;
    if (!u && !c)
      return void o.write(Yt);
    let m;
    if (u) {
      const y = (f2 = r.$projectedChildren$) == null ? void 0 : f2[d2];
      if (y) {
        const [w, h] = r.$projectedCtxs$, b = lt(w);
        b.$slotCtx$ = t, r.$projectedChildren$[d2] = void 0, m = X(y, b, h, o, i);
      }
    }
    return c && (m = k(m, () => c(o))), k(m, () => {
      o.write(Yt);
    });
  });
};
var Yt = "<!--/qv-->";
var Eo = (e) => {
  let t = "";
  for (const n2 in e) {
    if (n2 === L)
      continue;
    const s = e[n2];
    s != null && (t += " " + (s === "" ? n2 : n2 + '="' + s + '"'));
  }
  return t;
};
var xo = (e) => {
  let t = "";
  for (const n2 in e) {
    if (n2 === "children" || n2 === L)
      continue;
    const s = e[n2];
    s != null && (t += " " + (s === "" ? n2 : n2 + "=" + s));
  }
  return t;
};
var _n = (e, t, n2) => {
  if (n2.write("<" + e + Eo(t) + ">"), Bs[e])
    return;
  const s = t[L];
  s != null && n2.write(s), n2.write(`</${e}>`);
};
var _o = (e, t, n2, s, r, o, i) => (ko(e, s, r.props.props), k(wt(e, s), (c) => {
  const $ = s.$element$, l2 = c.rCtx, a = H(t.$static$.$locale$, $, void 0);
  a.$subscriber$ = [0, $], a.$renderCtx$ = l2;
  const u = { $static$: t.$static$, $projectedChildren$: qo(r.children, t), $projectedCtxs$: [e, t], $invocationContext$: a }, d2 = [];
  if (s.$appendStyles$) {
    const m = 4 & o ? t.$static$.$headNodes$ : d2;
    for (const f2 of s.$appendStyles$)
      m.push(qe("style", { [Dt]: f2.styleId, [L]: f2.content, hidden: "" }, null, null, 0, null));
  }
  const p2 = Ye(e), v2 = s.$scopeIds$ ? Ns(s.$scopeIds$) : void 0, S2 = le(r.type, { [eo]: v2, [to]: p2, children: c.node }, 0, r.key);
  return s.$id$ = p2, t.$static$.$contexts$.push(s), Fs(S2, s, d2, l2, u, n2, o, (m) => {
    if (s.$flags$ & ge) {
      const w = Et(1), h = w.li;
      h.push(...s.li), s.$flags$ &= ~ge, w.$id$ = Ye(e);
      const b = { type: "placeholder", hidden: "", "q:id": w.$id$ };
      t.$static$.$contexts$.push(w);
      const E2 = Sn(h);
      for (const _2 of E2) {
        const g3 = Hs(_2[0]);
        b[g3] = Vn(_2[1], e.$static$.$containerState$, w), nn(g3, e.$static$.$containerState$);
      }
      _n("script", b, m);
    }
    const f2 = u.$projectedChildren$;
    let y;
    if (f2) {
      const w = Object.keys(f2).map((_2) => {
        const g3 = f2[_2];
        if (g3)
          return qe("q:template", { [K]: _2 || true, hidden: true, "aria-hidden": "true" }, null, g3, 0, null);
      }), [h, b] = u.$projectedCtxs$, E2 = lt(h);
      E2.$slotCtx$ = s, y = X(w, E2, b, m, 0, void 0);
    }
    return i ? k(y, () => i(m)) : y;
  });
}));
var qo = (e, t) => {
  const n2 = Ws(e, t);
  if (n2 === null)
    return;
  const s = {};
  for (const r of n2) {
    let o = "";
    Te(r) && (o = r.props[K] || ""), (s[o] || (s[o] = [])).push(r);
  }
  return s;
};
var Et = (e) => {
  const t = new Ls(e);
  return Ut(t);
};
var qn = (e, t, n2, s, r, o) => {
  var l2;
  const i = e.type, c = t.$cmpCtx$;
  if (typeof i == "string") {
    const a = e.key, u = e.props, d2 = e.immutableProps || z, p2 = Et(1), v2 = p2.$element$, S2 = i === "head";
    let m = "<" + i, f2 = false, y = false, w = "", h = null;
    const b = (g3, x2, T2) => {
      if (g3 === "ref")
        return void (x2 !== void 0 && (zn(x2, v2), y = true));
      if (vn(g3))
        return void wn(p2.li, g3, x2, void 0);
      if (D(x2) && (x2 = ae(x2, T2 ? [1, v2, x2, c.$element$, g3] : [2, c.$element$, x2, v2, g3]), f2 = true), g3 === L)
        return void (h = x2);
      let R2;
      g3.startsWith(Ts) && nn(g3.slice(15), t.$static$.$containerState$);
      const I4 = g3 === "htmlFor" ? "for" : g3;
      I4 === "class" || I4 === "className" ? w = bt(x2) : I4 === "style" ? R2 = Wt(x2) : Os(I4) || I4 === "draggable" || I4 === "spellcheck" ? (R2 = x2 != null ? String(x2) : null, x2 = R2) : R2 = x2 === false || x2 == null ? null : String(x2), R2 != null && (I4 === "value" && i === "textarea" ? h = Pe(R2) : No(I4) || (m += " " + (x2 === true ? I4 : I4 + '="' + Pe(R2) + '"')));
    };
    for (const g3 in u) {
      let x2 = false, T2;
      g3 in d2 ? (x2 = true, T2 = d2[g3], T2 === N && (T2 = u[g3])) : T2 = u[g3], b(g3, T2, x2);
    }
    for (const g3 in d2) {
      if (g3 in u)
        continue;
      const x2 = d2[g3];
      x2 !== N && b(g3, x2, true);
    }
    const E2 = p2.li;
    if (c) {
      if ((l2 = c.$scopeIds$) != null && l2.length) {
        const g3 = c.$scopeIds$.join(" ");
        w = w ? `${g3} ${w}` : g3;
      }
      c.$flags$ & ge && (E2.push(...c.li), c.$flags$ &= ~ge);
    }
    if (S2 && (r |= 1), i in To && (r |= 16), i in Io && (r |= 8), w && (m += ' class="' + Pe(w) + '"'), E2.length > 0) {
      const g3 = Sn(E2), x2 = !!(16 & r);
      for (const T2 of g3) {
        const R2 = x2 ? Hs(T2[0]) : T2[0];
        m += " " + R2 + '="' + Vn(T2[1], t.$static$.$containerState$, p2) + '"', nn(R2, t.$static$.$containerState$);
      }
    }
    if (a != null && (m += ' q:key="' + Pe(a) + '"'), y || f2 || E2.length > 0) {
      if (y || f2 || Ao(E2)) {
        const g3 = Ye(t);
        m += ' q:id="' + g3 + '"', p2.$id$ = g3;
      }
      n2.$static$.$contexts$.push(p2);
    }
    if (1 & r && (m += " q:head"), m += ">", s.write(m), i in Bs)
      return;
    if (h != null)
      return s.write(String(h)), void s.write(`</${i}>`);
    i === "html" ? r |= 4 : r &= -5, 2 & e.flags && (r |= 1024);
    const _2 = X(e.children, t, n2, s, r);
    return k(_2, () => {
      if (S2) {
        for (const g3 of n2.$static$.$headNodes$)
          _n(g3.type, g3.props, s);
        n2.$static$.$headNodes$.length = 0;
      }
      if (o)
        return k(o(s), () => {
          s.write(`</${i}>`);
        });
      s.write(`</${i}>`);
    });
  }
  if (i === he) {
    const a = Et(111);
    return t.$slotCtx$ ? (a.$parentCtx$ = t.$slotCtx$, a.$realParentCtx$ = t.$cmpCtx$) : a.$parentCtx$ = t.$cmpCtx$, c && c.$flags$ & Pn && Po(c, a), Fs(e, a, void 0, t, n2, s, r, o);
  }
  if (i === Vs)
    return void s.write(e.props.data);
  if (i === Js)
    return bo(e, t, n2, s, r);
  const $ = B(n2.$invocationContext$, i, e.props, e.key, e.flags, e.dev);
  return Ds($, e) ? qn(le(he, { children: $ }, 0, e.key), t, n2, s, r, o) : X($, t, n2, s, r, o);
};
var X = (e, t, n2, s, r, o) => {
  var i;
  if (e != null && typeof e != "boolean") {
    if (!pe(e) && typeof e != "number") {
      if (Te(e))
        return qn(e, t, n2, s, r, o);
      if (M(e))
        return Qs(e, t, n2, s, r);
      if (D(e)) {
        const c = 8 & r, $ = (i = t.$cmpCtx$) == null ? void 0 : i.$element$;
        let l2;
        if ($) {
          if (!c) {
            const a = Ye(t);
            if (l2 = ae(e, 1024 & r ? [3, "#" + a, e, "#" + a] : [4, $, e, "#" + a]), pe(l2)) {
              const u = Xe(l2);
              n2.$static$.$textNodes$.set(u, a);
            }
            return s.write(`<!--t=${a}-->`), X(l2, t, n2, s, r, o), void s.write("<!---->");
          }
          l2 = B(n2.$invocationContext$, () => e.value);
        }
        return void s.write(Pe(Xe(l2)));
      }
      return O(e) ? (s.write(St), e.then((c) => X(c, t, n2, s, r, o))) : void de();
    }
    s.write(Pe(String(e)));
  }
};
var Qs = (e, t, n2, s, r) => {
  if (e == null)
    return;
  if (!M(e))
    return X(e, t, n2, s, r);
  const o = e.length;
  if (o === 1)
    return X(e[0], t, n2, s, r);
  if (o === 0)
    return;
  let i = 0;
  const c = [];
  return e.reduce(($, l2, a) => {
    const u = [];
    c.push(u);
    const d2 = X(l2, t, n2, $ ? { write(p2) {
      i === a ? s.write(p2) : u.push(p2);
    } } : s, r);
    if ($ || O(d2)) {
      const p2 = () => {
        i++, c.length > i && c[i].forEach((v2) => s.write(v2));
      };
      return O(d2) ? $ ? Promise.all([d2, $]).then(p2) : d2.then(p2) : $.then(p2);
    }
    i++;
  }, void 0);
};
var Ws = (e, t) => {
  if (e == null)
    return null;
  const n2 = Us(e, t), s = M(n2) ? n2 : [n2];
  return s.length === 0 ? null : s;
};
var Us = (e, t) => {
  if (e == null)
    return null;
  if (M(e))
    return e.flatMap((n2) => Us(n2, t));
  if (Te(e) && W(e.type) && e.type !== Vs && e.type !== Js && e.type !== he) {
    const n2 = B(t.$invocationContext$, e.type, e.props, e.key, e.flags);
    return Ws(n2, t);
  }
  return e;
};
var ko = (e, t, n2) => {
  const s = Object.keys(n2), r = Lt();
  if (t.$props$ = $t(r, e.$static$.$containerState$), s.length === 0)
    return;
  const o = r[N] = n2[N] ?? z;
  for (const i of s)
    i !== "children" && i !== K && (D(o[i]) ? r["$$" + i] = o[i] : r[i] = n2[i]);
};
var To = { head: true, style: true, script: true, link: true, meta: true };
var Io = { title: true, style: true, script: true, noframes: true, textarea: true };
var Bs = { area: true, base: true, basefont: true, bgsound: true, br: true, col: true, embed: true, frame: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true };
var Ro = /[&<>'"]/g;
var nn = (e, t) => {
  t.$events$.add(fr(e));
};
var Pe = (e) => e.replace(Ro, (t) => {
  switch (t) {
    case "&":
      return "&amp;";
    case "<":
      return "&lt;";
    case ">":
      return "&gt;";
    case '"':
      return "&quot;";
    case "'":
      return "&#39;";
    default:
      return "";
  }
});
var Mo = /[>/="'\u0009\u000a\u000c\u0020]/;
var No = (e) => Mo.test(e);
var Ao = (e) => e.some((t) => t[1].$captureRef$ && t[1].$captureRef$.length > 0);
var Po = (e, t) => {
  const n2 = e.$dynamicSlots$ || (e.$dynamicSlots$ = []);
  n2.includes(t) || n2.push(t);
};
var Hs = (e) => e === "on:qvisible" ? "on-document:qinit" : e;
var j$ = (e, t, n2) => new rn(e, t, n2);
var Co = (e) => {
  const t = e.$funcStr$;
  let n2 = "";
  for (let s = 0; s < e.$args$.length; s++)
    n2 += `p${s},`;
  return `(${n2})=>(${t})`;
};
var qe = (e, t, n2, s, r, o) => {
  const i = o == null ? null : String(o);
  return new Be(e, t || z, n2, s, r, i);
};
var Oo = (e, t, n2, s, r, o) => {
  let i = null;
  return t && "children" in t && (i = t.children, delete t.children), qe(e, t, n2, i, s, r);
};
var le = (e, t, n2, s, r) => {
  const o = s == null ? null : String(s), i = t ?? {};
  if (typeof e == "string" && N in i) {
    const $ = i[N];
    delete i[N];
    const l2 = i.children;
    delete i.children;
    for (const [a, u] of Object.entries($))
      u !== N && (delete i[a], i[a] = u);
    return qe(e, null, i, l2, n2, s);
  }
  const c = new Be(e, i, null, i.children, n2, o);
  return typeof e == "string" && t && delete t.children, c;
};
var Do = (e, t, n2) => {
  const r = ze(() => {
    const i = t.children;
    return typeof e == "string" && delete t.children, i;
  });
  return pe(e) && "className" in t && (t.class = t.className, delete t.className), new Be(e, t, null, r, 0, null);
};
var Be = class {
  constructor(t, n2, s, r, o, i = null) {
    this.type = t, this.props = n2, this.immutableProps = s, this.children = r, this.flags = o, this.key = i;
  }
};
var he = (e) => e.children;
var Te = (e) => e instanceof Be;
var je = (e) => e.children;
var kn = Symbol("skip render");
var Vs = () => null;
var Js = () => null;
var Tn = (e, t, n2) => {
  const s = !(t.$flags$ & An), r = t.$element$, o = e.$static$.$containerState$;
  return o.$hostsStaging$.delete(t), o.$subsManager$.$clearSub$(r), k(wt(e, t), (i) => {
    const c = e.$static$, $ = i.rCtx, l2 = H(e.$static$.$locale$, r);
    if (c.$hostElements$.add(r), l2.$subscriber$ = [0, r], l2.$renderCtx$ = $, s && t.$appendStyles$)
      for (const u of t.$appendStyles$)
        Ki(c, u);
    const a = me(i.node, l2);
    return k(a, (u) => {
      const d2 = zo(r, u), p2 = In(t);
      return k(Tt($, p2, d2, n2), () => {
        t.$vdom$ = d2;
      });
    });
  });
};
var In = (e) => (e.$vdom$ || (e.$vdom$ = It(e.$element$)), e.$vdom$);
var $e = class {
  constructor(t, n2, s, r, o, i) {
    this.$type$ = t, this.$props$ = n2, this.$immutableProps$ = s, this.$children$ = r, this.$flags$ = o, this.$key$ = i, this.$elm$ = null, this.$text$ = "", this.$signal$ = null, this.$id$ = t + (i ? ":" + i : "");
  }
};
var Gs = (e, t) => {
  const { key: n2, type: s, props: r, children: o, flags: i, immutableProps: c } = e;
  let $ = "";
  if (pe(s))
    $ = s;
  else {
    if (s !== he) {
      if (W(s)) {
        const a = B(t, s, r, n2, i, e.dev);
        return Ds(a, e) ? Gs(le(he, { children: a }, 0, n2), t) : me(a, t);
      }
      throw P(25, s);
    }
    $ = Qe;
  }
  let l2 = ce;
  return o != null ? k(me(o, t), (a) => (a !== void 0 && (l2 = M(a) ? a : [a]), new $e($, r, c, l2, i, n2))) : new $e($, r, c, l2, i, n2);
};
var zo = (e, t) => {
  const n2 = t === void 0 ? ce : M(t) ? t : [t], s = new $e(":virtual", {}, null, n2, 0, null);
  return s.$elm$ = e, s;
};
var me = (e, t) => {
  if (e != null && typeof e != "boolean") {
    if (Ks(e)) {
      const n2 = new $e("#text", z, null, ce, 0, null);
      return n2.$text$ = String(e), n2;
    }
    if (Te(e))
      return Gs(e, t);
    if (D(e)) {
      const n2 = new $e("#signal", z, null, ce, 0, null);
      return n2.$signal$ = e, n2;
    }
    if (M(e)) {
      const n2 = gn(e.flatMap((s) => me(s, t)));
      return k(n2, (s) => s.flat(100).filter(xs));
    }
    return O(e) ? e.then((n2) => me(n2, t)) : e === kn ? new $e(":skipRender", z, null, ce, 0, null) : void de();
  }
};
var Ks = (e) => pe(e) || typeof e == "number";
var Ys = (e) => {
  Z(e, "q:container") === "paused" && (Qo(e), Vo(e));
};
var Lo = (e) => {
  const t = ct(e), n2 = Bo(e === t.documentElement ? t.body : e, "type");
  if (n2)
    return JSON.parse(Uo(n2.firstChild.data) || "{}");
};
var Fo = (e, t) => {
  const n2 = JSON.parse(e);
  if (typeof n2 != "object")
    return null;
  const { _objs: s, _entry: r } = n2;
  if (s === void 0 || r === void 0)
    return null;
  let o = {}, i = {};
  if (Se(t) && be(t)) {
    const l2 = On(t);
    l2 && (i = He(l2), o = l2.ownerDocument);
  }
  const c = Nr(i, o);
  for (let l2 = 0; l2 < s.length; l2++) {
    const a = s[l2];
    pe(a) && (s[l2] = a === Vt ? void 0 : c.prepare(a));
  }
  const $ = (l2) => s[ee(l2)];
  for (const l2 of s)
    Xs(l2, $, c);
  return $(r);
};
var Qo = (e) => {
  if (!Ri(e))
    return void de();
  const t = e._qwikjson_ ?? Lo(e);
  if (e._qwikjson_ = null, !t)
    return void de();
  const n2 = ct(e), s = e.getAttribute(qs), r = ks(n2, s), o = He(e), i = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map();
  let $ = null, l2 = 0;
  const a = n2.createTreeWalker(e, ur);
  for (; $ = a.nextNode(); ) {
    const f2 = $.data;
    if (l2 === 0) {
      if (f2.startsWith("qv ")) {
        const y = Jo(f2);
        y >= 0 && i.set(y, $);
      } else if (f2.startsWith("t=")) {
        const y = f2.slice(2), w = ee(y), h = Ho($);
        i.set(w, h), c.set(w, h.data);
      }
    }
    f2 === "cq" ? l2++ : f2 === "/cq" && l2--;
  }
  const u = e.getElementsByClassName("qc\u{1F4E6}").length !== 0;
  e.querySelectorAll("[q\\:id]").forEach((f2) => {
    if (u && f2.closest("[q\\:container]") !== e)
      return;
    const y = Z(f2, "q:id"), w = ee(y);
    i.set(w, f2);
  });
  const d2 = Nr(o, n2), p2 = /* @__PURE__ */ new Map(), v2 = /* @__PURE__ */ new Set(), S2 = (f2) => (typeof f2 == "string" && f2.length > 0, p2.has(f2) ? p2.get(f2) : m(f2)), m = (f2) => {
    if (f2.startsWith("#")) {
      const E2 = f2.slice(1), _2 = ee(E2);
      i.has(_2);
      const g3 = i.get(_2);
      if (ot(g3)) {
        if (!g3.isConnected)
          return void p2.set(f2, void 0);
        const x2 = dt(g3);
        return p2.set(f2, x2), U(x2, o), x2;
      }
      return we(g3) ? (p2.set(f2, g3), U(g3, o), g3) : (p2.set(f2, g3), g3);
    }
    if (f2.startsWith("@")) {
      const E2 = f2.slice(1), _2 = ee(E2);
      return r[_2];
    }
    if (f2.startsWith("*")) {
      const E2 = f2.slice(1), _2 = ee(E2);
      i.has(_2);
      const g3 = c.get(_2);
      return p2.set(f2, g3), g3;
    }
    const y = ee(f2), w = t.objs;
    w.length > y;
    let h = w[y];
    pe(h) && (h = h === Vt ? void 0 : d2.prepare(h));
    let b = h;
    for (let E2 = f2.length - 1; E2 >= 0; E2--) {
      const _2 = e$[f2[E2]];
      if (!_2)
        break;
      b = _2(b, o);
    }
    return p2.set(f2, b), Ks(h) || v2.has(y) || (v2.add(y), Wo(h, y, t.subs, S2, o, d2), Xs(h, S2, d2)), b;
  };
  o.$elementIndex$ = 1e5, o.$pauseCtx$ = { getObject: S2, meta: t.ctx, refs: t.refs }, G(e, "q:container", "resumed"), co(e, "qresume", void 0, true);
};
var Wo = (e, t, n2, s, r, o) => {
  const i = n2[t];
  if (i) {
    const c = [];
    let $ = 0;
    for (const l2 of i)
      if (l2.startsWith("_"))
        $ = parseInt(l2.slice(1), 10);
      else {
        const a = i$(l2, s);
        a && c.push(a);
      }
    if ($ > 0 && Ft(e, $), !o.subs(e, c)) {
      const l2 = r.$proxyMap$.get(e);
      l2 ? Q(l2).$addSubs$(c) : $t(e, r, c);
    }
  }
};
var Xs = (e, t, n2) => {
  if (!n2.fill(e, t) && e && typeof e == "object") {
    if (M(e))
      for (let s = 0; s < e.length; s++)
        e[s] = t(e[s]);
    else if (it(e))
      for (const s in e)
        e[s] = t(e[s]);
  }
};
var Uo = (e) => e.replace(/\\x3C(\/?script)/gi, "<$1");
var Bo = (e, t) => {
  let n2 = e.lastElementChild;
  for (; n2; ) {
    if (n2.tagName === "SCRIPT" && Z(n2, t) === "qwik/json")
      return n2;
    n2 = n2.previousElementSibling;
  }
};
var Ho = (e) => {
  const t = e.nextSibling;
  if (dn(t))
    return t;
  {
    const n2 = e.ownerDocument.createTextNode("");
    return e.parentElement.insertBefore(n2, e), n2;
  }
};
var Vo = (e) => {
  e.qwik = { pause: () => uc(e), state: He(e) };
};
var Jo = (e) => {
  const t = e.indexOf("q:id=");
  return t > 0 ? ee(e.slice(t + 5)) : -1;
};
var at = () => {
  const e = or();
  let t = e.$qrl$;
  if (t)
    t.$captureRef$;
  else {
    const n2 = e.$element$, s = On(n2);
    t = Ht(decodeURIComponent(String(e.$url$)), s), Ys(s);
    const r = U(n2, He(s));
    Ir(t, r);
  }
  return t.$captureRef$;
};
var Go = (e, t) => {
  try {
    const n2 = t[0], s = e.$static$;
    switch (n2) {
      case 1:
      case 2: {
        let r, o;
        n2 === 1 ? (r = t[1], o = t[3]) : (r = t[3], o = t[1]);
        const i = Y(r);
        if (i == null)
          return;
        const c = t[4], $ = r.namespaceURI === ft;
        s.$containerState$.$subsManager$.$clearSignal$(t);
        let l2 = ae(t[2], t.slice(0, -1));
        c === "class" ? l2 = xn(l2, Y(o)) : c === "style" && (l2 = Wt(l2));
        const a = In(i);
        return c in a.$props$ && a.$props$[c] === l2 ? void 0 : (a.$props$[c] = l2, Fn(s, r, c, l2, $));
      }
      case 3:
      case 4: {
        const r = t[3];
        if (!s.$visited$.includes(r)) {
          s.$containerState$.$subsManager$.$clearSignal$(t);
          const o = void 0;
          let i = ae(t[2], t.slice(0, -1));
          const c = l$();
          Array.isArray(i) && (i = new Be(he, {}, null, i, 0, null));
          let $ = me(i, o);
          if (O($))
            _e("Rendering promises in JSX signals is not supported");
          else {
            $ === void 0 && ($ = me("", o));
            const l2 = pr(r), a = Ko(t[1]);
            if (e.$cmpCtx$ = U(a, e.$static$.$containerState$), l2.$type$ == $.$type$ && l2.$key$ == $.$key$ && l2.$id$ == $.$id$)
              Me(e, l2, $, 0);
            else {
              const u = [], d2 = l2.$elm$, p2 = Ee(e, $, 0, u);
              u.length && _e("Rendering promises in JSX signals is not supported"), c[3] = p2, Oe(e.$static$, r.parentElement, p2, d2), d2 && Wn(s, d2);
            }
          }
        }
      }
    }
  } catch {
  }
};
function Ko(e) {
  for (; e; ) {
    if (be(e))
      return e;
    e = e.parentElement;
  }
  throw new Error("Not found");
}
var Yo = (e, t) => {
  if (e[0] === 0) {
    const n2 = e[1];
    Mn(n2) ? js(n2, t) : Xo(n2, t);
  } else
    jo(e, t);
};
var Xo = (e, t) => {
  const n2 = j();
  n2 || Ys(t.$containerEl$);
  const s = U(e, t);
  if (s.$componentQrl$, !(s.$flags$ & Fe))
    if (s.$flags$ |= Fe, t.$hostsRendering$ !== void 0)
      t.$hostsStaging$.add(s);
    else {
      if (n2)
        return void de();
      t.$hostsNext$.add(s), Rn(t);
    }
};
var jo = (e, t) => {
  const n2 = t.$hostsRendering$ !== void 0;
  t.$opsNext$.add(e), n2 || Rn(t);
};
var js = (e, t) => {
  e.$flags$ & ke || (e.$flags$ |= ke, t.$hostsRendering$ !== void 0 ? t.$taskStaging$.add(e) : (t.$taskNext$.add(e), Rn(t)));
};
var Rn = (e) => (e.$renderPromise$ === void 0 && (e.$renderPromise$ = Ct().nextTick(() => Zs(e))), e.$renderPromise$);
var Zo = () => {
  const [e] = at();
  js(e, He(On(e.$el$)));
};
var Zs = async (e) => {
  const t = e.$containerEl$, n2 = ct(t);
  try {
    const s = Ps(n2, e), r = s.$static$, o = e.$hostsRendering$ = new Set(e.$hostsNext$);
    e.$hostsNext$.clear(), await ti(e, s), e.$hostsStaging$.forEach(($) => {
      o.add($);
    }), e.$hostsStaging$.clear();
    const i = Array.from(e.$opsNext$);
    e.$opsNext$.clear();
    const c = Array.from(o);
    ri(c), !e.$styleMoved$ && c.length > 0 && (e.$styleMoved$ = true, (t === n2.documentElement ? n2.body : t).querySelectorAll("style[q\\:style]").forEach(($) => {
      e.$styleIds$.add(Z($, Dt)), br(r, n2.head, $);
    }));
    for (const $ of c) {
      const l2 = $.$element$;
      if (!r.$hostElements$.has(l2) && $.$componentQrl$) {
        l2.isConnected, r.$roots$.push($);
        try {
          await Tn(s, $, ei(l2.parentElement));
        } catch (a) {
          _e(a);
        }
      }
    }
    return i.forEach(($) => {
      Go(s, $);
    }), r.$operations$.push(...r.$postOperations$), r.$operations$.length === 0 ? (as(r), void await es(e, s)) : (await Wi(r), as(r), es(e, s));
  } catch (s) {
    _e(s);
  }
};
var ei = (e) => {
  let t = 0;
  return e && (e.namespaceURI === ft && (t |= J), e.tagName === "HEAD" && (t |= qt)), t;
};
var es = async (e, t) => {
  const n2 = t.$static$.$hostElements$;
  await si(e, t, (s, r) => !!(s.$flags$ & ci) && (!r || n2.has(s.$el$))), e.$hostsStaging$.forEach((s) => {
    e.$hostsNext$.add(s);
  }), e.$hostsStaging$.clear(), e.$hostsRendering$ = void 0, e.$renderPromise$ = void 0, e.$hostsNext$.size + e.$taskNext$.size + e.$opsNext$.size > 0 && (e.$renderPromise$ = Zs(e));
};
var sn = (e) => !!(e.$flags$ & er);
var ts = (e) => !!(e.$flags$ & tr);
var ti = async (e, t) => {
  const n2 = e.$containerEl$, s = [], r = [];
  e.$taskNext$.forEach((o) => {
    sn(o) && (r.push(k(o.$qrl$.$resolveLazy$(n2), () => o)), e.$taskNext$.delete(o)), ts(o) && (s.push(k(o.$qrl$.$resolveLazy$(n2), () => o)), e.$taskNext$.delete(o));
  });
  do
    if (e.$taskStaging$.forEach((o) => {
      sn(o) ? r.push(k(o.$qrl$.$resolveLazy$(n2), () => o)) : ts(o) ? s.push(k(o.$qrl$.$resolveLazy$(n2), () => o)) : e.$taskNext$.add(o);
    }), e.$taskStaging$.clear(), r.length > 0) {
      const o = await Promise.all(r);
      xt(o), await Promise.all(o.map((i) => _t(i, e, t))), r.length = 0;
    }
  while (e.$taskStaging$.size > 0);
  if (s.length > 0) {
    const o = await Promise.all(s);
    xt(o);
    for (const i of o)
      _t(i, e, t);
  }
};
var ni = (e, t) => {
  const n2 = e.$containerEl$, s = e.$taskStaging$;
  if (!s.size)
    return;
  const r = [];
  let o = 20;
  const i = () => {
    if (s.forEach((c) => {
      sn(c) && r.push(k(c.$qrl$.$resolveLazy$(n2), () => c));
    }), s.clear(), r.length > 0)
      return Promise.all(r).then(async (c) => {
        if (xt(c), await Promise.all(c.map(($) => _t($, e, t))), r.length = 0, --o && s.size > 0)
          return i();
        o || de(`Infinite task loop detected. Tasks:
${Array.from(s).map(($) => `  ${$.$qrl$.$symbol$}`).join(`
`)}`);
      });
  };
  return i();
};
var si = async (e, t, n2) => {
  const s = [], r = e.$containerEl$;
  e.$taskNext$.forEach((o) => {
    n2(o, false) && (o.$el$.isConnected && s.push(k(o.$qrl$.$resolveLazy$(r), () => o)), e.$taskNext$.delete(o));
  });
  do
    if (e.$taskStaging$.forEach((o) => {
      o.$el$.isConnected && (n2(o, true) ? s.push(k(o.$qrl$.$resolveLazy$(r), () => o)) : e.$taskNext$.add(o));
    }), e.$taskStaging$.clear(), s.length > 0) {
      const o = await Promise.all(s);
      xt(o);
      for (const i of o)
        _t(i, e, t);
      s.length = 0;
    }
  while (e.$taskStaging$.size > 0);
};
var ri = (e) => {
  e.sort((t, n2) => 2 & t.$element$.compareDocumentPosition(Mt(n2.$element$)) ? 1 : -1);
};
var xt = (e) => {
  const t = j();
  e.sort((n2, s) => t || n2.$el$ === s.$el$ ? n2.$index$ < s.$index$ ? -1 : 1 : 2 & n2.$el$.compareDocumentPosition(Mt(s.$el$)) ? 1 : -1);
};
var oi = (e) => {
  const t = wi(), n2 = W(e) && !Kn(e) ? B(void 0, e) : e;
  return qi(n2, t, 0);
};
var ii = (e) => {
  const { val: t, set: n2 } = Ue();
  return t ?? n2(e = W(e) && !Kn(e) ? e() : e);
};
var Xt = (e) => ii(() => oi(e));
var ci = 1;
var er = 2;
var tr = 4;
var ke = 16;
var $i = (e, t) => {
  const { val: n2, set: s, iCtx: r, i: o, elCtx: i } = Ue();
  if (n2)
    return;
  const c = r.$renderCtx$.$static$.$containerState$, $ = new Nn(ke | er, o, i.$element$, e, void 0);
  s(true), e.$resolveLazy$(c.$containerEl$), i.$tasks$ || (i.$tasks$ = []), i.$tasks$.push($), bi(r, () => sr($, c, r.$renderCtx$)), j() && fi($, t == null ? void 0 : t.eagerness);
};
var nr = (e) => !!(e.$flags$ & tr);
var li = (e) => !!(8 & e.$flags$);
var _t = async (e, t, n2) => (e.$flags$ & ke, nr(e) ? ai(e, t, n2) : li(e) ? ui(e, t, n2) : sr(e, t, n2));
var ai = (e, t, n2, s) => {
  e.$flags$ &= ~ke, Ze(e);
  const r = H(n2.$static$.$locale$, e.$el$, void 0, "qTask"), { $subsManager$: o } = t;
  r.$renderCtx$ = n2;
  const i = e.$qrl$.getFn(r, () => {
    o.$clearSub$(e);
  }), c = [], $ = e.$state$, l2 = pt($), a = { track: (f2, y) => {
    if (W(f2)) {
      const h = H();
      return h.$renderCtx$ = n2, h.$subscriber$ = [0, e], B(h, f2);
    }
    const w = Q(f2);
    return w ? w.$addSub$([0, e], y) : pn(Pt(26), f2), y ? f2[y] : D(f2) ? f2.value : f2;
  }, cleanup(f2) {
    c.push(f2);
  }, cache(f2) {
    let y = 0;
    y = f2 === "immutable" ? 1 / 0 : f2, $._cache = y;
  }, previous: l2._resolved };
  let u, d2, p2 = false;
  const v2 = (f2, y) => !p2 && (p2 = true, f2 ? (p2 = true, $.loading = false, $._state = "resolved", $._resolved = y, $._error = void 0, u(y)) : (p2 = true, $.loading = false, $._state = "rejected", $._error = y, d2(y)), true);
  B(r, () => {
    $._state = "pending", $.loading = !j(), $.value = new Promise((f2, y) => {
      u = f2, d2 = y;
    });
  }), e.$destroy$ = Gt(() => {
    p2 = true, c.forEach((f2) => f2());
  });
  const S2 = Ot(() => k(s, () => i(a)), (f2) => {
    v2(true, f2);
  }, (f2) => {
    v2(false, f2);
  }), m = l2._timeout;
  return m > 0 ? Promise.race([S2, jr(m).then(() => {
    v2(false, new Error("timeout")) && Ze(e);
  })]) : S2;
};
var sr = (e, t, n2) => {
  e.$flags$ &= ~ke, Ze(e);
  const s = e.$el$, r = H(n2.$static$.$locale$, s, void 0, "qTask");
  r.$renderCtx$ = n2;
  const { $subsManager$: o } = t, i = e.$qrl$.getFn(r, () => {
    o.$clearSub$(e);
  }), c = [];
  e.$destroy$ = Gt(() => {
    c.forEach((l2) => l2());
  });
  const $ = { track: (l2, a) => {
    if (W(l2)) {
      const d2 = H();
      return d2.$subscriber$ = [0, e], B(d2, l2);
    }
    const u = Q(l2);
    return u ? u.$addSub$([0, e], a) : pn(Pt(26), l2), a ? l2[a] : D(l2) ? l2.value : l2;
  }, cleanup(l2) {
    c.push(l2);
  } };
  return Ot(() => i($), (l2) => {
    W(l2) && c.push(l2);
  }, (l2) => {
    En(l2, s, n2);
  });
};
var ui = (e, t, n2) => {
  e.$state$, e.$flags$ &= ~ke, Ze(e);
  const s = e.$el$, r = H(n2.$static$.$locale$, s, void 0, "qComputed");
  r.$subscriber$ = [0, e], r.$renderCtx$ = n2;
  const { $subsManager$: o } = t, i = e.$qrl$.getFn(r, () => {
    o.$clearSub$(e);
  });
  return Ot(i, (c) => ze(() => {
    const $ = e.$state$;
    $[et] &= ~lr, $.untrackedValue = c, $[ne].$notifySubs$();
  }), (c) => {
    En(c, s, n2);
  });
};
var Ze = (e) => {
  const t = e.$destroy$;
  if (t) {
    e.$destroy$ = void 0;
    try {
      t();
    } catch (n2) {
      _e(n2);
    }
  }
};
var rr = (e) => {
  32 & e.$flags$ ? (e.$flags$ &= -33, (0, e.$qrl$)()) : Ze(e);
};
var fi = (e, t) => {
  t === "visible" || t === "intersection-observer" ? io("qvisible", jt(e)) : t === "load" || t === "document-ready" ? Zn("qinit", jt(e)) : t !== "idle" && t !== "document-idle" || Zn("qidle", jt(e));
};
var jt = (e) => {
  const t = e.$qrl$, n2 = ht(t.$chunk$, "_hW", Zo, null, null, [e], t.$symbol$);
  return t.dev && (n2.dev = t.dev), n2;
};
var Mn = (e) => ue(e) && e instanceof Nn;
var di = (e, t) => {
  let n2 = `${ye(e.$flags$)} ${ye(e.$index$)} ${t(e.$qrl$)} ${t(e.$el$)}`;
  return e.$state$ && (n2 += ` ${t(e.$state$)}`), n2;
};
var pi = (e) => {
  const [t, n2, s, r, o] = e.split(" ");
  return new Nn(ee(t), ee(n2), r, s, o);
};
var Nn = class {
  constructor(t, n2, s, r, o) {
    this.$flags$ = t, this.$index$ = n2, this.$el$ = s, this.$qrl$ = r, this.$state$ = o;
  }
};
function hi(e) {
  return mi(e) && e.nodeType === 1;
}
function mi(e) {
  return e && typeof e.nodeType == "number";
}
var Fe = 1;
var ge = 2;
var An = 4;
var Pn = 8;
var Y = (e) => e[zt];
var U = (e, t) => {
  const n2 = Y(e);
  if (n2)
    return n2;
  const s = Ut(e), r = Z(e, "q:id");
  if (r) {
    const o = t.$pauseCtx$;
    if (s.$id$ = r, o) {
      const { getObject: i, meta: c, refs: $ } = o;
      if (hi(e)) {
        const l2 = $[r];
        l2 && (s.$refMap$ = l2.split(" ").map(i), s.li = oo(s, t.$containerEl$));
      } else {
        const l2 = e.getAttribute("q:sstyle");
        s.$scopeIds$ = l2 ? l2.split("|") : null;
        const a = c[r];
        if (a) {
          const u = a.s, d2 = a.h, p2 = a.c, v2 = a.w;
          if (u && (s.$seq$ = u.split(" ").map(i)), v2 && (s.$tasks$ = v2.split(" ").map(i)), p2) {
            s.$contexts$ = /* @__PURE__ */ new Map();
            for (const S2 of p2.split(" ")) {
              const [m, f2] = S2.split("=");
              s.$contexts$.set(m, i(f2));
            }
          }
          if (d2) {
            const [S2, m] = d2.split(" ");
            if (s.$flags$ = An, S2 && (s.$componentQrl$ = i(S2)), m) {
              const f2 = i(m);
              s.$props$ = f2, Ft(f2, 2), f2[N] = gi(f2);
            } else
              s.$props$ = $t(Lt(), t);
          }
        }
      }
    }
  }
  return s;
};
var gi = (e) => {
  const t = {}, n2 = Ie(e);
  for (const s in n2)
    s.startsWith("$$") && (t[s.slice(2)] = n2[s]);
  return t;
};
var Ut = (e) => {
  const t = { $flags$: 0, $id$: "", $element$: e, $refMap$: [], li: [], $tasks$: null, $seq$: null, $slots$: null, $scopeIds$: null, $appendStyles$: null, $props$: null, $vdom$: null, $componentQrl$: null, $contexts$: null, $dynamicSlots$: null, $parentCtx$: void 0, $realParentCtx$: void 0 };
  return e[zt] = t, t;
};
var yi = (e, t) => {
  var n2;
  (n2 = e.$tasks$) == null || n2.forEach((s) => {
    t.$clearSub$(s), rr(s);
  }), e.$componentQrl$ = null, e.$seq$ = null, e.$tasks$ = null;
};
var De;
function vi(e) {
  if (De === void 0) {
    const t = F();
    return t && t.$locale$ ? t.$locale$ : e;
  }
  return De;
}
function ns(e, t) {
  const n2 = De;
  try {
    return De = e, t();
  } finally {
    De = n2;
  }
}
function Si(e) {
  De = e;
}
var Ge;
var F = () => {
  if (!Ge) {
    const e = typeof document < "u" && document && document.__q_context__;
    return e ? M(e) ? document.__q_context__ = cr(e) : e : void 0;
  }
  return Ge;
};
var or = () => {
  const e = F();
  if (!e)
    throw P(14);
  return e;
};
var Cn = () => {
  const e = F();
  if (!e || e.$event$ !== "qRender")
    throw P(20);
  return e.$hostElement$, e.$waitOn$, e.$renderCtx$, e.$subscriber$, e;
};
var wi = () => Cn().$renderCtx$.$static$.$containerState$;
function ss(e) {
  if (e == null)
    return e;
  const t = or();
  return function(...n2) {
    return ir.call(this, t, e, n2);
  };
}
function B(e, t, ...n2) {
  return ir.call(this, e, t, n2);
}
function ir(e, t, n2) {
  const s = Ge;
  let r;
  try {
    Ge = e, r = t.apply(this, n2);
  } finally {
    Ge = s;
  }
  return r;
}
var bi = (e, t) => {
  const n2 = e.$waitOn$;
  if (n2.length === 0) {
    const s = t();
    O(s) && n2.push(s);
  } else
    n2.push(Promise.all(n2).then(t));
};
var cr = ([e, t, n2]) => {
  const s = e.closest("[q\\:container]"), r = (s == null ? void 0 : s.getAttribute("q:locale")) || void 0;
  return r && Si(r), H(r, void 0, e, t, n2);
};
var H = (e, t, n2, s, r) => ({ $url$: r, $i$: 0, $hostElement$: t, $element$: n2, $event$: s, $qrl$: void 0, $waitOn$: void 0, $subscriber$: void 0, $renderCtx$: void 0, $locale$: e || (typeof s == "object" && s && "locale" in s ? s.locale : void 0) });
var On = (e) => e.closest("[q\\:container]");
var ze = (e) => B(void 0, e);
var rs = H(void 0, void 0, void 0, "qRender");
var ae = (e, t) => (rs.$subscriber$ = t, B(rs, () => e.value));
var Ei = () => {
  var t;
  const e = F();
  if (e)
    return e.$element$ ?? e.$hostElement$ ?? ((t = e.$qrl$) == null ? void 0 : t.$setContainer$(void 0));
};
var xi = () => {
  const e = F();
  if (e)
    return e.$event$;
};
var _i = (e) => {
  const t = F();
  return t && t.$hostElement$ && t.$renderCtx$ && (U(t.$hostElement$, t.$renderCtx$.$static$.$containerState$).$flags$ |= Pn), e;
};
var $r;
var qi = (e, t, n2, s) => {
  const r = t.$subsManager$.$createManager$(s);
  return new tt(e, r, n2);
};
var et = Symbol("proxy manager");
var ki = 1;
var lr = 2;
var ar = Symbol("unassigned signal");
var ut = class {
};
var tt = class extends ut {
  constructor(t, n2, s) {
    super(), this[$r] = 0, this.untrackedValue = t, this[ne] = n2, this[et] = s;
  }
  valueOf() {
  }
  toString() {
    return `[Signal ${String(this.value)}]`;
  }
  toJSON() {
    return { value: this.value };
  }
  get value() {
    var n2;
    if (this[et] & lr)
      throw ar;
    const t = (n2 = F()) == null ? void 0 : n2.$subscriber$;
    return t && this[ne].$addSub$(t), this.untrackedValue;
  }
  set value(t) {
    const n2 = this[ne];
    n2 && this.untrackedValue !== t && (this.untrackedValue = t, n2.$notifySubs$());
  }
};
$r = et;
var rn = class extends ut {
  constructor(t, n2, s) {
    super(), this.$func$ = t, this.$args$ = n2, this.$funcStr$ = s;
  }
  get value() {
    return this.$func$.apply(void 0, this.$args$);
  }
};
var on = class extends ut {
  constructor(t, n2) {
    super(), this.ref = t, this.prop = n2;
  }
  get [ne]() {
    return Q(this.ref);
  }
  get value() {
    return this.ref[this.prop];
  }
  set value(t) {
    this.ref[this.prop] = t;
  }
};
var D = (e) => e instanceof ut;
var Ti = (e, t) => {
  var r, o;
  if (!ue(e))
    return e[t];
  if (e instanceof ut)
    return e;
  const n2 = Ie(e);
  if (n2) {
    const i = n2["$$" + t];
    if (i)
      return i;
    if (((r = n2[N]) == null ? void 0 : r[t]) !== true)
      return new on(e, t);
  }
  const s = (o = e[N]) == null ? void 0 : o[t];
  return D(s) ? s : N;
};
var Ii = (e, t) => {
  const n2 = Ti(e, t);
  return n2 === N ? e[t] : n2;
};
var os = Symbol("ContainerState");
var He = (e) => {
  let t = e[os];
  return t || (e[os] = t = Dn(e, Z(e, "q:base") ?? "/")), t;
};
var Dn = (e, t) => {
  const n2 = {};
  if (e) {
    const r = e.attributes;
    if (r)
      for (let o = 0; o < r.length; o++) {
        const i = r[o];
        n2[i.name] = i.value;
      }
  }
  const s = { $containerEl$: e, $elementIndex$: 0, $styleMoved$: false, $proxyMap$: /* @__PURE__ */ new WeakMap(), $opsNext$: /* @__PURE__ */ new Set(), $taskNext$: /* @__PURE__ */ new Set(), $taskStaging$: /* @__PURE__ */ new Set(), $hostsNext$: /* @__PURE__ */ new Set(), $hostsStaging$: /* @__PURE__ */ new Set(), $styleIds$: /* @__PURE__ */ new Set(), $events$: /* @__PURE__ */ new Set(), $serverData$: { containerAttributes: n2 }, $base$: t, $renderPromise$: void 0, $hostsRendering$: void 0, $pauseCtx$: void 0, $subsManager$: null, $inlineFns$: /* @__PURE__ */ new Map() };
  return s.$subsManager$ = c$(s), s;
};
var zn = (e, t) => {
  if (W(e))
    return e(t);
  if (D(e))
    return j() ? e.untrackedValue = t : e.value = t;
  throw P(32, e);
};
var ur = 128;
var Ri = (e) => we(e) && e.hasAttribute("q:container");
var ye = (e) => e.toString(36);
var ee = (e) => parseInt(e, 36);
var fr = (e) => {
  const t = e.indexOf(":");
  return e && no(e.slice(t + 1));
};
var ft = "http://www.w3.org/2000/svg";
var J = 1;
var qt = 2;
var kt = [];
var Tt = (e, t, n2, s) => {
  t.$elm$;
  const r = n2.$children$;
  if (r.length === 1 && r[0].$type$ === ":skipRender")
    return void (n2.$children$ = t.$children$);
  const o = t.$elm$;
  let i = Rt;
  t.$children$ === kt && o.nodeName === "HEAD" && (i = Ai, s |= qt);
  const c = Mi(t, i);
  return c.length > 0 && r.length > 0 ? Ni(e, o, c, r, s) : c.length > 0 && r.length === 0 ? Ln(e.$static$, c, 0, c.length - 1) : r.length > 0 ? mr(e, o, null, r, 0, r.length - 1, s) : void 0;
};
var Mi = (e, t) => {
  const n2 = e.$children$;
  return n2 === kt ? e.$children$ = dr(e.$elm$, t) : n2;
};
var Ni = (e, t, n2, s, r) => {
  let o = 0, i = 0, c = n2.length - 1, $ = n2[0], l2 = n2[c], a = s.length - 1, u = s[0], d2 = s[a], p2, v2, S2;
  const m = [], f2 = e.$static$;
  for (; o <= c && i <= a; )
    if ($ == null)
      $ = n2[++o];
    else if (l2 == null)
      l2 = n2[--c];
    else if (u == null)
      u = s[++i];
    else if (d2 == null)
      d2 = s[--a];
    else if ($.$id$ === u.$id$)
      m.push(Me(e, $, u, r)), $ = n2[++o], u = s[++i];
    else if (l2.$id$ === d2.$id$)
      m.push(Me(e, l2, d2, r)), l2 = n2[--c], d2 = s[--a];
    else if ($.$key$ && $.$id$ === d2.$id$)
      $.$elm$, l2.$elm$, m.push(Me(e, $, d2, r)), Gi(f2, t, $.$elm$, l2.$elm$), $ = n2[++o], d2 = s[--a];
    else if (l2.$key$ && l2.$id$ === u.$id$)
      $.$elm$, l2.$elm$, m.push(Me(e, l2, u, r)), Oe(f2, t, l2.$elm$, $.$elm$), l2 = n2[--c], u = s[++i];
    else {
      if (p2 === void 0 && (p2 = Hi(n2, o, c)), v2 = p2[u.$key$], v2 === void 0) {
        const w = Ee(e, u, r, m);
        Oe(f2, t, w, $ == null ? void 0 : $.$elm$);
      } else if (S2 = n2[v2], S2.$type$ !== u.$type$) {
        const w = Ee(e, u, r, m);
        k(w, (h) => {
          Oe(f2, t, h, $ == null ? void 0 : $.$elm$);
        });
      } else
        m.push(Me(e, S2, u, r)), n2[v2] = void 0, S2.$elm$, Oe(f2, t, S2.$elm$, $.$elm$);
      u = s[++i];
    }
  i <= a && m.push(mr(e, t, s[a + 1] == null ? null : s[a + 1].$elm$, s, i, a, r));
  let y = gn(m);
  return o <= c && (y = k(y, () => {
    Ln(f2, n2, o, c);
  })), y;
};
var Ce = (e, t) => {
  const n2 = se(e) ? e.close : null, s = [];
  let r = e.firstChild;
  for (; (r = Un(r)) && (t(r) && s.push(r), r = r.nextSibling, r !== n2); )
    ;
  return s;
};
var dr = (e, t) => Ce(e, t).map(pr);
var pr = (e) => {
  var t;
  return we(e) ? ((t = Y(e)) == null ? void 0 : t.$vdom$) ?? It(e) : It(e);
};
var It = (e) => {
  if (be(e)) {
    const t = new $e(e.localName, {}, null, kt, 0, $n(e));
    return t.$elm$ = e, t;
  }
  if (dn(e)) {
    const t = new $e(e.nodeName, z, null, kt, 0, null);
    return t.$text$ = e.data, t.$elm$ = e, t;
  }
};
var Ai = (e) => {
  const t = e.nodeType;
  return t === 1 ? e.hasAttribute("q:head") : t === 111;
};
var cn = (e) => e.nodeName === "Q:TEMPLATE";
var Rt = (e) => {
  const t = e.nodeType;
  if (t === 3 || t === 111)
    return true;
  if (t !== 1)
    return false;
  const n2 = e.nodeName;
  return n2 !== "Q:TEMPLATE" && (n2 === "HEAD" ? e.hasAttribute("q:head") : n2 !== "STYLE" || !e.hasAttribute(Dt));
};
var hr = (e) => {
  const t = {};
  for (const n2 of e) {
    const s = Pi(n2);
    (t[s] ?? (t[s] = new $e(Qe, { [_s]: "" }, null, [], 0, s))).$children$.push(n2);
  }
  return t;
};
var Me = (e, t, n2, s) => {
  t.$type$, n2.$type$, t.$key$, n2.$key$, t.$id$, n2.$id$;
  const r = t.$elm$, o = n2.$type$, i = e.$static$, c = i.$containerState$, $ = e.$cmpCtx$;
  if (n2.$elm$ = r, o === "#text") {
    i.$visited$.push(r);
    const d2 = n2.$signal$;
    return d2 && (n2.$text$ = Xe(ae(d2, [4, $.$element$, d2, r]))), void ve(i, r, "data", n2.$text$);
  }
  if (o === "#signal")
    return;
  const l2 = n2.$props$, a = n2.$flags$, u = U(r, c);
  if (o !== Qe) {
    let d2 = !!(s & J);
    if (d2 || o !== "svg" || (s |= J, d2 = true), l2 !== z) {
      1 & a || (u.li.length = 0);
      const p2 = t.$props$;
      n2.$props$ = p2;
      for (const v2 in l2) {
        let S2 = l2[v2];
        if (v2 !== "ref")
          if (vn(v2)) {
            const m = wn(u.li, v2, S2, c.$containerEl$);
            vr(i, r, m);
          } else
            D(S2) && (S2 = ae(S2, [1, $.$element$, S2, r, v2])), v2 === "class" ? S2 = xn(S2, $) : v2 === "style" && (S2 = Wt(S2)), p2[v2] !== S2 && (p2[v2] = S2, Fn(i, r, v2, S2, d2));
        else
          S2 !== void 0 && zn(S2, r);
      }
    }
    return 2 & a || (d2 && o === "foreignObject" && (s &= ~J), l2[L] !== void 0) || o === "textarea" ? void 0 : Tt(e, t, n2, s);
  }
  if ("q:renderFn" in l2) {
    const d2 = l2.props;
    Qi(c, u, d2);
    let p2 = !!(u.$flags$ & Fe);
    return p2 || u.$componentQrl$ || u.$element$.hasAttribute("q:id") || (Cs(e, u), u.$componentQrl$ = d2["q:renderFn"], u.$componentQrl$, p2 = true), p2 ? k(Tn(e, u, s), () => is(e, u, n2, s)) : is(e, u, n2, s);
  }
  if ("q:s" in l2)
    return $.$slots$, void $.$slots$.push(n2);
  if (L in l2)
    ve(i, r, "innerHTML", l2[L]);
  else if (!(2 & a))
    return Tt(e, t, n2, s);
};
var is = (e, t, n2, s) => {
  if (2 & n2.$flags$)
    return;
  const r = e.$static$, o = hr(n2.$children$), i = yr(t);
  for (const c in i.slots)
    if (!o[c]) {
      const $ = i.slots[c], l2 = dr($, Rt);
      if (l2.length > 0) {
        const a = Y($);
        a && a.$vdom$ && (a.$vdom$.$children$ = []), Ln(r, l2, 0, l2.length - 1);
      }
    }
  for (const c in i.templates) {
    const $ = i.templates[c];
    $ && !o[c] && (i.templates[c] = void 0, Wn(r, $));
  }
  return gn(Object.keys(o).map((c) => {
    const $ = o[c], l2 = gr(r, i, t, c, e.$static$.$containerState$), a = In(l2), u = lt(e), d2 = l2.$element$;
    u.$slotCtx$ = l2, l2.$vdom$ = $, $.$elm$ = d2;
    let p2 = s & ~J;
    d2.isSvg && (p2 |= J);
    const v2 = r.$addSlots$.findIndex((S2) => S2[0] === d2);
    return v2 >= 0 && r.$addSlots$.splice(v2, 1), Tt(u, a, $, p2);
  }));
};
var mr = (e, t, n2, s, r, o, i) => {
  const c = [];
  for (; r <= o; ++r) {
    const $ = s[r], l2 = Ee(e, $, i, c);
    Oe(e.$static$, t, l2, n2);
  }
  return Ne(c);
};
var Ln = (e, t, n2, s) => {
  for (; n2 <= s; ++n2) {
    const r = t[n2];
    r && (r.$elm$, Wn(e, r.$elm$));
  }
};
var gr = (e, t, n2, s, r) => {
  const o = t.slots[s];
  if (o)
    return U(o, r);
  const i = t.templates[s];
  if (i)
    return U(i, r);
  const c = Er(e.$doc$, s), $ = Ut(c);
  return $.$parentCtx$ = n2, Xi(e, n2.$element$, c), t.templates[s] = c, $;
};
var Pi = (e) => e.$props$[K] ?? "";
var Ee = (e, t, n2, s) => {
  const r = t.$type$, o = e.$static$.$doc$, i = e.$cmpCtx$;
  if (r === "#text")
    return t.$elm$ = o.createTextNode(t.$text$);
  if (r === "#signal") {
    const m = t.$signal$, f2 = m.value;
    if (Te(f2)) {
      const y = me(f2);
      if (D(y))
        throw new Error("NOT IMPLEMENTED: Promise");
      if (Array.isArray(y))
        throw new Error("NOT IMPLEMENTED: Array");
      {
        const w = Ee(e, y, n2, s);
        return ae(m, 4 & n2 ? [3, w, m, w] : [4, i.$element$, m, w]), t.$elm$ = w;
      }
    }
    {
      const y = o.createTextNode(t.$text$);
      return y.data = t.$text$ = Xe(f2), ae(m, 4 & n2 ? [3, y, m, y] : [4, i.$element$, m, y]), t.$elm$ = y;
    }
  }
  let c, $ = !!(n2 & J);
  $ || r !== "svg" || (n2 |= J, $ = true);
  const l2 = r === Qe, a = t.$props$, u = e.$static$, d2 = u.$containerState$;
  l2 ? c = sc(o, $) : r === "head" ? (c = o.head, n2 |= qt) : (c = Qn(o, r, $), n2 &= ~qt), 2 & t.$flags$ && (n2 |= 4), t.$elm$ = c;
  const p2 = Ut(c);
  if (e.$slotCtx$ ? (p2.$parentCtx$ = e.$slotCtx$, p2.$realParentCtx$ = e.$cmpCtx$) : p2.$parentCtx$ = e.$cmpCtx$, l2) {
    if ("q:renderFn" in a) {
      const m = a["q:renderFn"], f2 = Lt(), y = d2.$subsManager$.$createManager$(), w = new Proxy(f2, new Ms(d2, y)), h = a.props;
      if (d2.$proxyMap$.set(f2, w), p2.$props$ = w, h !== z) {
        const E2 = f2[N] = h[N] ?? z;
        for (const _2 in h)
          if (_2 !== "children" && _2 !== K) {
            const g3 = E2[_2];
            D(g3) ? f2["$$" + _2] = g3 : f2[_2] = h[_2];
          }
      }
      Cs(e, p2), p2.$componentQrl$ = m;
      const b = k(Tn(e, p2, n2), () => {
        let E2 = t.$children$;
        if (E2.length === 0)
          return;
        E2.length === 1 && E2[0].$type$ === ":skipRender" && (E2 = E2[0].$children$);
        const _2 = yr(p2), g3 = [], x2 = hr(E2);
        for (const T2 in x2) {
          const R2 = x2[T2], I4 = gr(u, _2, p2, T2, u.$containerState$), oe2 = lt(e), Re4 = I4.$element$;
          oe2.$slotCtx$ = I4, I4.$vdom$ = R2, R2.$elm$ = Re4;
          let V2 = n2 & ~J;
          Re4.isSvg && (V2 |= J);
          for (const C of R2.$children$) {
            const Ve4 = Ee(oe2, C, V2, g3);
            C.$elm$, C.$elm$, br(u, Re4, Ve4);
          }
        }
        return Ne(g3);
      });
      return O(b) && s.push(b), c;
    }
    if ("q:s" in a)
      i.$slots$, tc(c, t.$key$), G(c, "q:sref", i.$id$), G(c, "q:s", ""), i.$slots$.push(t), u.$addSlots$.push([c, i.$element$]);
    else if (L in a)
      return ve(u, c, "innerHTML", a[L]), c;
  } else {
    if (t.$immutableProps$) {
      const m = a !== z ? Object.fromEntries(Object.entries(t.$immutableProps$).map(([f2, y]) => [f2, y === N ? a[f2] : y])) : t.$immutableProps$;
      ls(u, p2, i, m, $, true);
    }
    if (a !== z) {
      p2.$vdom$ = t;
      const m = t.$immutableProps$ ? Object.fromEntries(Object.entries(a).filter(([f2]) => !(f2 in t.$immutableProps$))) : a;
      t.$props$ = ls(u, p2, i, m, $, false);
    }
    if ($ && r === "foreignObject" && ($ = false, n2 &= ~J), i) {
      const m = i.$scopeIds$;
      m && m.forEach((f2) => {
        c.classList.add(f2);
      }), i.$flags$ & ge && (p2.li.push(...i.li), i.$flags$ &= ~ge);
    }
    for (const m of p2.li)
      vr(u, c, m[0]);
    if (a[L] !== void 0)
      return c;
    $ && r === "foreignObject" && ($ = false, n2 &= ~J);
  }
  let v2 = t.$children$;
  if (v2.length === 0)
    return c;
  v2.length === 1 && v2[0].$type$ === ":skipRender" && (v2 = v2[0].$children$);
  const S2 = v2.map((m) => Ee(e, m, n2, s));
  for (const m of S2)
    nt(c, m);
  return c;
};
var Ci = (e) => {
  const t = e.$slots$;
  return t || (e.$element$.parentElement, e.$slots$ = Oi(e));
};
var yr = (e) => {
  const t = Ci(e), n2 = {}, s = {}, r = Array.from(e.$element$.childNodes).filter(cn);
  for (const o of t)
    o.$elm$, n2[o.$key$ ?? ""] = o.$elm$;
  for (const o of r)
    s[Z(o, K) ?? ""] = o;
  return { slots: n2, templates: s };
};
var Oi = (e) => {
  const t = e.$element$.parentElement;
  return cc(t, "q:sref", e.$id$).map(It);
};
var Di = (e, t, n2) => (ve(e, t.style, "cssText", n2), true);
var cs = (e, t, n2) => (t.namespaceURI === ft ? st(e, t, "class", n2) : ve(e, t, "className", n2), true);
var $s = (e, t, n2, s) => s in t && ((t[s] !== n2 || s === "value" && !t.hasAttribute(s)) && (s === "value" && t.tagName !== "OPTION" ? Ji(e, t, s, n2) : ve(e, t, s, n2)), true);
var Je = (e, t, n2, s) => (st(e, t, s.toLowerCase(), n2), true);
var zi = (e, t, n2) => (ve(e, t, "innerHTML", n2), true);
var Li = () => true;
var Fi = { style: Di, class: cs, className: cs, value: $s, checked: $s, href: Je, list: Je, form: Je, tabIndex: Je, download: Je, innerHTML: Li, [L]: zi };
var Fn = (e, t, n2, s, r) => {
  if (Os(n2))
    return void st(e, t, n2, s != null ? String(s) : s);
  const o = Fi[n2];
  o && o(e, t, s, n2) || (r || !(n2 in t) ? (n2.startsWith(Ts) && Sr(n2.slice(15)), st(e, t, n2, s)) : ve(e, t, n2, s));
};
var ls = (e, t, n2, s, r, o) => {
  const i = {}, c = t.$element$;
  for (const $ in s) {
    let l2 = s[$];
    if ($ !== "ref")
      if (vn($))
        wn(t.li, $, l2, e.$containerState$.$containerEl$);
      else {
        if (D(l2) && (l2 = ae(l2, o ? [1, c, l2, n2.$element$, $] : [2, n2.$element$, l2, c, $])), $ === "class") {
          if (l2 = xn(l2, n2), !l2)
            continue;
        } else
          $ === "style" && (l2 = Wt(l2));
        i[$] = l2, Fn(e, c, $, l2, r);
      }
    else
      l2 !== void 0 && zn(l2, c);
  }
  return i;
};
var Qi = (e, t, n2) => {
  let s = t.$props$;
  if (s || (t.$props$ = s = $t(Lt(), e)), n2 === z)
    return;
  const r = Q(s), o = Ie(s), i = o[N] = n2[N] ?? z;
  for (const c in n2)
    if (c !== "children" && c !== K && !i[c]) {
      const $ = n2[c];
      o[c] !== $ && (o[c] = $, r.$notifySubs$(c));
    }
};
var Ke = (e, t, n2, s) => {
  if (n2.$clearSub$(e), be(e)) {
    if (s && e.hasAttribute("q:s"))
      return void t.$rmSlots$.push(e);
    const r = Y(e);
    r && yi(r, n2);
    const o = se(e) ? e.close : null;
    let i = e.firstChild;
    for (; (i = Un(i)) && (Ke(i, t, n2, true), i = i.nextSibling, i !== o); )
      ;
  }
};
var Wi = async (e) => {
  ec(e);
};
var nt = (e, t) => {
  se(t) ? t.appendTo(e) : e.appendChild(t);
};
var Ui = (e, t) => {
  se(t) ? t.remove() : e.removeChild(t);
};
var Bi = (e, t, n2) => {
  se(t) ? t.insertBeforeTo(e, (n2 == null ? void 0 : n2.nextSibling) ?? null) : e.insertBefore(t, (n2 == null ? void 0 : n2.nextSibling) ?? null);
};
var Bt = (e, t, n2) => {
  se(t) ? t.insertBeforeTo(e, Mt(n2)) : e.insertBefore(t, Mt(n2));
};
var Hi = (e, t, n2) => {
  const s = {};
  for (let r = t; r <= n2; ++r) {
    const o = e[r].$key$;
    o != null && (s[o] = r);
  }
  return s;
};
var vr = (e, t, n2) => {
  n2.startsWith("on:") || st(e, t, n2, ""), Sr(n2);
};
var Sr = (e) => {
  var t;
  {
    const n2 = fr(e);
    try {
      ((t = globalThis).qwikevents || (t.qwikevents = [])).push(n2);
    } catch {
    }
  }
};
var st = (e, t, n2, s) => {
  e.$operations$.push({ $operation$: Vi, $args$: [t, n2, s] });
};
var Vi = (e, t, n2) => {
  if (n2 == null || n2 === false)
    e.removeAttribute(t);
  else {
    const s = n2 === true ? "" : String(n2);
    G(e, t, s);
  }
};
var ve = (e, t, n2, s) => {
  e.$operations$.push({ $operation$: wr, $args$: [t, n2, s] });
};
var Ji = (e, t, n2, s) => {
  e.$postOperations$.push({ $operation$: wr, $args$: [t, n2, s] });
};
var wr = (e, t, n2) => {
  try {
    e[t] = n2 ?? "", n2 == null && Se(e) && we(e) && e.removeAttribute(t);
  } catch (s) {
    _e(Pt(6), t, { node: e, value: n2 }, s);
  }
};
var Qn = (e, t, n2) => n2 ? e.createElementNS(ft, t) : e.createElement(t);
var Oe = (e, t, n2, s) => (e.$operations$.push({ $operation$: Bt, $args$: [t, n2, s || null] }), n2);
var Gi = (e, t, n2, s) => (e.$operations$.push({ $operation$: Bi, $args$: [t, n2, s || null] }), n2);
var br = (e, t, n2) => (e.$operations$.push({ $operation$: nt, $args$: [t, n2] }), n2);
var Ki = (e, t) => {
  e.$containerState$.$styleIds$.add(t.styleId), e.$postOperations$.push({ $operation$: Yi, $args$: [e.$containerState$, t] });
};
var Yi = (e, t) => {
  const n2 = e.$containerEl$, s = ct(n2), r = s.documentElement === n2, o = s.head, i = s.createElement("style");
  G(i, Dt, t.styleId), G(i, "hidden", ""), i.textContent = t.content, r && o ? nt(o, i) : Bt(n2, i, n2.firstChild);
};
var Xi = (e, t, n2) => {
  e.$operations$.push({ $operation$: ji, $args$: [t, n2] });
};
var ji = (e, t) => {
  Bt(e, t, e.firstChild);
};
var Wn = (e, t) => {
  be(t) && Ke(t, e, e.$containerState$.$subsManager$, true), e.$operations$.push({ $operation$: Zi, $args$: [t, e] });
};
var Zi = (e) => {
  const t = e.parentElement;
  t && Ui(t, e);
};
var Er = (e, t) => {
  const n2 = Qn(e, "q:template", false);
  return G(n2, K, t), G(n2, "hidden", ""), G(n2, "aria-hidden", "true"), n2;
};
var ec = (e) => {
  for (const t of e.$operations$)
    t.$operation$.apply(void 0, t.$args$);
  nc(e);
};
var $n = (e) => Z(e, "q:key");
var tc = (e, t) => {
  t !== null && G(e, "q:key", t);
};
var nc = (e) => {
  const t = e.$containerState$.$subsManager$;
  for (const n2 of e.$rmSlots$) {
    const s = $n(n2), r = Ce(n2, Rt);
    if (r.length > 0) {
      const o = n2.getAttribute("q:sref"), i = e.$roots$.find((c) => c.$id$ === o);
      if (i) {
        const c = i.$element$;
        if (c.isConnected)
          if (Ce(c, cn).some(($) => Z($, K) === s))
            Ke(n2, e, t, false);
          else {
            const $ = Er(e.$doc$, s);
            for (const l2 of r)
              nt($, l2);
            Bt(c, $, c.firstChild);
          }
        else
          Ke(n2, e, t, false);
      } else
        Ke(n2, e, t, false);
    }
  }
  for (const [n2, s] of e.$addSlots$) {
    const r = $n(n2), o = Ce(s, cn).find((i) => i.getAttribute(K) === r);
    o && (Ce(o, Rt).forEach((i) => {
      nt(n2, i);
    }), o.remove());
  }
};
var as = () => {
};
var sc = (e, t) => {
  const n2 = e.createComment("qv "), s = e.createComment("/qv");
  return new xr(n2, s, t);
};
var rc = (e) => {
  if (!e)
    return {};
  const t = e.split(" ");
  return Object.fromEntries(t.map((n2) => {
    const s = n2.indexOf("=");
    return s >= 0 ? [n2.slice(0, s), lc(n2.slice(s + 1))] : [n2, ""];
  }));
};
var oc = (e) => {
  const t = [];
  return Object.entries(e).forEach(([n2, s]) => {
    t.push(s ? `${n2}=${$c(s)}` : `${n2}`);
  }), t.join(" ");
};
var ic = (e, t, n2) => e.ownerDocument.createTreeWalker(e, 128, { acceptNode(s) {
  const r = dt(s);
  return r && Z(r, t) === n2 ? 1 : 2;
} });
var cc = (e, t, n2) => {
  const s = ic(e, t, n2), r = [];
  let o = null;
  for (; o = s.nextNode(); )
    r.push(dt(o));
  return r;
};
var $c = (e) => e.replace(/ /g, "+");
var lc = (e) => e.replace(/\+/g, " ");
var Qe = ":virtual";
var xr = class {
  constructor(t, n2, s) {
    this.open = t, this.close = n2, this.isSvg = s, this._qc_ = null, this.nodeType = 111, this.localName = Qe, this.nodeName = Qe;
    const r = this.ownerDocument = t.ownerDocument;
    this.$template$ = Qn(r, "template", false), this.$attributes$ = rc(t.data.slice(3)), t.data.startsWith("qv "), t.__virtual = this, n2.__virtual = this;
  }
  insertBefore(t, n2) {
    const s = this.parentElement;
    return s ? s.insertBefore(t, n2 || this.close) : this.$template$.insertBefore(t, n2), t;
  }
  remove() {
    const t = this.parentElement;
    if (t) {
      const n2 = this.childNodes;
      this.$template$.childElementCount, t.removeChild(this.open);
      for (let s = 0; s < n2.length; s++)
        this.$template$.appendChild(n2[s]);
      t.removeChild(this.close);
    }
  }
  appendChild(t) {
    return this.insertBefore(t, null);
  }
  insertBeforeTo(t, n2) {
    const s = this.childNodes;
    t.insertBefore(this.open, n2);
    for (const r of s)
      t.insertBefore(r, n2);
    t.insertBefore(this.close, n2), this.$template$.childElementCount;
  }
  appendTo(t) {
    this.insertBeforeTo(t, null);
  }
  get namespaceURI() {
    var t;
    return ((t = this.parentElement) == null ? void 0 : t.namespaceURI) ?? "";
  }
  removeChild(t) {
    this.parentElement ? this.parentElement.removeChild(t) : this.$template$.removeChild(t);
  }
  getAttribute(t) {
    return this.$attributes$[t] ?? null;
  }
  hasAttribute(t) {
    return t in this.$attributes$;
  }
  setAttribute(t, n2) {
    this.$attributes$[t] = n2, this.open.data = us(this.$attributes$);
  }
  removeAttribute(t) {
    delete this.$attributes$[t], this.open.data = us(this.$attributes$);
  }
  matches(t) {
    return false;
  }
  compareDocumentPosition(t) {
    return this.open.compareDocumentPosition(t);
  }
  closest(t) {
    const n2 = this.parentElement;
    return n2 ? n2.closest(t) : null;
  }
  querySelectorAll(t) {
    const n2 = [];
    return Ce(this, Gr).forEach((s) => {
      be(s) && (s.matches(t) && n2.push(s), n2.concat(Array.from(s.querySelectorAll(t))));
    }), n2;
  }
  querySelector(t) {
    for (const n2 of this.childNodes)
      if (we(n2)) {
        if (n2.matches(t))
          return n2;
        const s = n2.querySelector(t);
        if (s !== null)
          return s;
      }
    return null;
  }
  get innerHTML() {
    return "";
  }
  set innerHTML(t) {
    const n2 = this.parentElement;
    n2 ? (this.childNodes.forEach((s) => this.removeChild(s)), this.$template$.innerHTML = t, n2.insertBefore(this.$template$.content, this.close)) : this.$template$.innerHTML = t;
  }
  get firstChild() {
    if (this.parentElement) {
      const t = this.open.nextSibling;
      return t === this.close ? null : t;
    }
    return this.$template$.firstChild;
  }
  get nextSibling() {
    return this.close.nextSibling;
  }
  get previousSibling() {
    return this.open.previousSibling;
  }
  get childNodes() {
    if (!this.parentElement)
      return Array.from(this.$template$.childNodes);
    const t = [];
    let n2 = this.open;
    for (; (n2 = n2.nextSibling) && n2 !== this.close; )
      t.push(n2);
    return t;
  }
  get isConnected() {
    return this.open.isConnected;
  }
  get parentElement() {
    return this.open.parentElement;
  }
};
var us = (e) => `qv ${oc(e)}`;
var Un = (e) => {
  if (e == null)
    return null;
  if (ot(e)) {
    const t = dt(e);
    if (t)
      return t;
  }
  return e;
};
var ac = (e) => {
  let t = e, n2 = 1;
  for (; t = t.nextSibling; )
    if (ot(t)) {
      const s = t.__virtual;
      if (s)
        t = s;
      else if (t.data.startsWith("qv "))
        n2++;
      else if (t.data === "/qv" && (n2--, n2 === 0))
        return t;
    }
};
var dt = (e) => {
  var n2;
  const t = e.__virtual;
  if (t)
    return t;
  if (e.data.startsWith("qv ")) {
    const s = ac(e);
    return new xr(e, s, ((n2 = e.parentElement) == null ? void 0 : n2.namespaceURI) === ft);
  }
  return null;
};
var Mt = (e) => e == null ? null : se(e) ? e.open : e;
var Z$ = async (e) => {
  const t = Dn(null, null), n2 = _r(t);
  let s;
  for (q(e, n2, false); (s = n2.$promises$).length > 0; ) {
    n2.$promises$ = [];
    const l2 = await Promise.allSettled(s);
    for (const a of l2)
      a.status === "rejected" && console.error(a.reason);
  }
  const r = Array.from(n2.$objSet$.keys());
  let o = 0;
  const i = /* @__PURE__ */ new Map();
  for (const l2 of r)
    i.set(l2, ye(o)), o++;
  if (n2.$noSerialize$.length > 0) {
    const l2 = i.get(void 0);
    for (const a of n2.$noSerialize$)
      i.set(a, l2);
  }
  const c = (l2) => {
    let a = "";
    if (O(l2)) {
      const d2 = qr(l2);
      if (!d2)
        throw P(27, l2);
      l2 = d2.value, a += d2.resolved ? "~" : "_";
    }
    if (ue(l2)) {
      const d2 = Ie(l2);
      d2 && (a += "!", l2 = d2);
    }
    const u = i.get(l2);
    if (u === void 0)
      throw P(27, l2);
    return u + a;
  }, $ = Tr(r, c, null, n2, t);
  return JSON.stringify({ _entry: c(e), _objs: $ });
};
var uc = async (e) => {
  const t = ct(e), n2 = t.documentElement, s = bs(e) ? n2 : e;
  if (Z(s, "q:container") === "paused")
    throw P(21);
  const r = s === t.documentElement ? t.body : s, o = He(s), i = dc(s, Sc);
  G(s, "q:container", "paused");
  for (const u of i) {
    const d2 = u.$element$, p2 = u.li;
    if (u.$scopeIds$) {
      const v2 = Ns(u.$scopeIds$);
      v2 && d2.setAttribute("q:sstyle", v2);
    }
    if (u.$id$ && d2.setAttribute("q:id", u.$id$), we(d2) && p2.length > 0) {
      const v2 = Sn(p2);
      for (const S2 of v2)
        d2.setAttribute(S2[0], Vn(S2[1], o, u));
    }
  }
  const c = await fc(i, o, (u) => Se(u) && dn(u) ? Ec(u, o) : null), $ = t.createElement("script");
  G($, "type", "qwik/json"), $.textContent = gc(JSON.stringify(c.state, void 0, void 0)), r.appendChild($);
  const l2 = Array.from(o.$events$, (u) => JSON.stringify(u)), a = t.createElement("script");
  return a.textContent = `(window.qwikevents||=[]).push(${l2.join(", ")})`, r.appendChild(a), c;
};
var fc = async (e, t, n2, s) => {
  var w;
  const r = _r(t);
  s == null || s.forEach((h, b) => {
    r.$seen$.add(b);
  });
  let o = false;
  for (const h of e)
    if (h.$tasks$)
      for (const b of h.$tasks$)
        nr(b) && r.$resources$.push(b.$state$), rr(b);
  for (const h of e) {
    const b = h.$element$, E2 = h.li;
    for (const _2 of E2)
      if (we(b)) {
        const g3 = _2[1], x2 = g3.$captureRef$;
        if (x2)
          for (const T2 of x2)
            q(T2, r, true);
        r.$qrls$.push(g3), o = true;
      }
  }
  if (!o)
    return { state: { refs: {}, ctx: {}, objs: [], subs: [] }, objs: [], funcs: [], qrls: [], resources: r.$resources$, mode: "static" };
  let i;
  for (; (i = r.$promises$).length > 0; )
    r.$promises$ = [], await Promise.all(i);
  const c = r.$elements$.length > 0;
  if (c) {
    for (const h of r.$deferElements$)
      Bn(h, r, h.$element$);
    for (const h of e)
      pc(h, r);
  }
  for (; (i = r.$promises$).length > 0; )
    r.$promises$ = [], await Promise.all(i);
  const $ = /* @__PURE__ */ new Map(), l2 = Array.from(r.$objSet$.keys()), a = /* @__PURE__ */ new Map(), u = (h) => {
    let b = "";
    if (O(h)) {
      const g3 = qr(h);
      if (!g3)
        return null;
      h = g3.value, b += g3.resolved ? "~" : "_";
    }
    if (ue(h)) {
      const g3 = Ie(h);
      if (g3)
        b += "!", h = g3;
      else if (be(h)) {
        const x2 = ((T2) => {
          let R2 = $.get(T2);
          return R2 === void 0 && (R2 = bc(T2), R2 || console.warn("Missing ID", T2), $.set(T2, R2)), R2;
        })(h);
        return x2 ? "#" + x2 + b : null;
      }
    }
    const E2 = a.get(h);
    if (E2)
      return E2 + b;
    const _2 = s == null ? void 0 : s.get(h);
    return _2 ? "*" + _2 : n2 ? n2(h) : null;
  }, d2 = (h) => {
    const b = u(h);
    if (b === null) {
      if (Gn(h)) {
        const E2 = ye(a.size);
        return a.set(h, E2), E2;
      }
      throw P(27, h);
    }
    return b;
  }, p2 = /* @__PURE__ */ new Map();
  for (const h of l2) {
    const b = (w = wc(h, t)) == null ? void 0 : w.$subs$;
    if (!b)
      continue;
    const E2 = Or(h) ?? 0, _2 = [];
    1 & E2 && _2.push(E2);
    for (const g3 of b) {
      const x2 = g3[1];
      g3[0] === 0 && Se(x2) && se(x2) && !r.$elements$.includes(Y(x2)) || _2.push(g3);
    }
    _2.length > 0 && p2.set(h, _2);
  }
  l2.sort((h, b) => (p2.has(h) ? 0 : 1) - (p2.has(b) ? 0 : 1));
  let v2 = 0;
  for (const h of l2)
    a.set(h, ye(v2)), v2++;
  if (r.$noSerialize$.length > 0) {
    const h = a.get(void 0);
    for (const b of r.$noSerialize$)
      a.set(b, h);
  }
  const S2 = [];
  for (const h of l2) {
    const b = p2.get(h);
    if (b == null)
      break;
    S2.push(b.map((E2) => typeof E2 == "number" ? `_${E2}` : o$(E2, u)).filter(xs));
  }
  S2.length, p2.size;
  const m = Tr(l2, d2, u, r, t), f2 = {}, y = {};
  for (const h of e) {
    const b = h.$element$, E2 = h.$id$, _2 = h.$refMap$, g3 = h.$props$, x2 = h.$contexts$, T2 = h.$tasks$, R2 = h.$componentQrl$, I4 = h.$seq$, oe2 = {}, Re4 = se(b) && r.$elements$.includes(h);
    if (_2.length > 0) {
      const V2 = xe(_2, d2, " ");
      V2 && (y[E2] = V2);
    } else if (c) {
      let V2 = false;
      if (Re4) {
        const C = u(g3);
        oe2.h = d2(R2) + (C ? " " + C : ""), V2 = true;
      } else {
        const C = u(g3);
        C && (oe2.h = " " + C, V2 = true);
      }
      if (T2 && T2.length > 0) {
        const C = xe(T2, u, " ");
        C && (oe2.w = C, V2 = true);
      }
      if (Re4 && I4 && I4.length > 0) {
        const C = xe(I4, d2, " ");
        oe2.s = C, V2 = true;
      }
      if (x2) {
        const C = [];
        x2.forEach((Vr2, Jr2) => {
          const Yn2 = u(Vr2);
          Yn2 && C.push(`${Jr2}=${Yn2}`);
        });
        const Ve4 = C.join(" ");
        Ve4 && (oe2.c = Ve4, V2 = true);
      }
      V2 && (f2[E2] = oe2);
    }
  }
  return { state: { refs: y, ctx: f2, objs: m, subs: S2 }, objs: l2, funcs: r.$inlinedFunctions$, resources: r.$resources$, qrls: r.$qrls$, mode: c ? "render" : "listeners" };
};
var xe = (e, t, n2) => {
  let s = "";
  for (const r of e) {
    const o = t(r);
    o !== null && (s !== "" && (s += n2), s += o);
  }
  return s;
};
var dc = (e, t) => {
  const n2 = [], s = t(e);
  s !== void 0 && n2.push(s);
  const r = e.ownerDocument.createTreeWalker(e, 1 | ur, { acceptNode(o) {
    if (vc(o))
      return 2;
    const i = t(o);
    return i !== void 0 && n2.push(i), 3;
  } });
  for (; r.nextNode(); )
    ;
  return n2;
};
var pc = (e, t) => {
  var r;
  const n2 = e.$realParentCtx$ || e.$parentCtx$, s = e.$props$;
  if (n2 && s && !kr(s) && t.$elements$.includes(n2)) {
    const o = (r = Q(s)) == null ? void 0 : r.$subs$, i = e.$element$;
    if (o)
      for (const [c, $] of o)
        c === 0 ? ($ !== i && We(Q(s), t, false), Se($) ? mc($, t) : q($, t, true)) : (q(s, t, false), We(Q(s), t, false));
  }
};
var _r = (e) => {
  const t = [];
  return e.$inlineFns$.forEach((n2, s) => {
    for (; t.length <= n2; )
      t.push("");
    t[n2] = s;
  }), { $containerState$: e, $seen$: /* @__PURE__ */ new Set(), $objSet$: /* @__PURE__ */ new Set(), $prefetch$: 0, $noSerialize$: [], $inlinedFunctions$: t, $resources$: [], $elements$: [], $qrls$: [], $deferElements$: [], $promises$: [] };
};
var hc = (e, t) => {
  const n2 = Y(e);
  t.$elements$.includes(n2) || (t.$elements$.push(n2), n2.$flags$ & Pn ? (t.$prefetch$++, Bn(n2, t, true), t.$prefetch$--) : t.$deferElements$.push(n2));
};
var mc = (e, t) => {
  const n2 = Y(e);
  if (n2) {
    if (t.$elements$.includes(n2))
      return;
    t.$elements$.push(n2), Bn(n2, t, e);
  }
};
var Bn = (e, t, n2) => {
  if (e.$props$ && !kr(e.$props$) && (q(e.$props$, t, n2), We(Q(e.$props$), t, n2)), e.$componentQrl$ && q(e.$componentQrl$, t, n2), e.$seq$)
    for (const s of e.$seq$)
      q(s, t, n2);
  if (e.$tasks$) {
    const s = t.$containerState$.$subsManager$.$groupToManagers$;
    for (const r of e.$tasks$)
      s.has(r) && q(r, t, n2);
  }
  if (n2 === true && (fs(e, t), e.$dynamicSlots$))
    for (const s of e.$dynamicSlots$)
      fs(s, t);
};
var fs = (e, t) => {
  for (; e; ) {
    if (e.$contexts$)
      for (const n2 of e.$contexts$.values())
        q(n2, t, true);
    e = e.$parentCtx$;
  }
};
var gc = (e) => e.replace(/<(\/?script)/gi, "\\x3C$1");
var We = (e, t, n2) => {
  if (t.$seen$.has(e))
    return;
  t.$seen$.add(e);
  const s = e.$subs$;
  for (const r of s)
    if (r[0] > 0 && q(r[2], t, n2), n2 === true) {
      const o = r[1];
      Se(o) && se(o) ? r[0] === 0 && hc(o, t) : q(o, t, true);
    }
};
var ln = Symbol();
var yc = (e) => e.then((t) => (e[ln] = { resolved: true, value: t }, t), (t) => (e[ln] = { resolved: false, value: t }, t));
var qr = (e) => e[ln];
var q = (e, t, n2) => {
  if (e != null) {
    const s = typeof e;
    switch (s) {
      case "function":
      case "object": {
        if (t.$seen$.has(e))
          return;
        if (t.$seen$.add(e), Pr(e))
          return t.$objSet$.add(void 0), void t.$noSerialize$.push(e);
        const r = e, o = Ie(e);
        if (o) {
          const i = !(2 & Or(e = o));
          if (n2 && i && We(Q(r), t, n2), Cr(r))
            return void t.$objSet$.add(e);
        }
        if (jc(e, t, n2))
          return void t.$objSet$.add(e);
        if (O(e))
          return void t.$promises$.push(yc(e).then((i) => {
            q(i, t, n2);
          }));
        if (s === "object") {
          if (Se(e))
            return;
          if (M(e))
            for (let i = 0; i < e.length; i++)
              q(r[i], t, n2);
          else if (it(e))
            for (const i in e)
              q(r[i], t, n2);
        }
        break;
      }
    }
  }
  t.$objSet$.add(e);
};
var vc = (e) => we(e) && e.hasAttribute("q:container");
var Sc = (e) => {
  const t = Un(e);
  if (be(t)) {
    const n2 = Y(t);
    if (n2 && n2.$id$)
      return n2;
  }
};
var wc = (e, t) => {
  if (!ue(e))
    return;
  if (e instanceof tt)
    return Q(e);
  const n2 = t.$proxyMap$.get(e);
  return n2 ? Q(n2) : void 0;
};
var bc = (e) => {
  const t = Y(e);
  return t ? t.$id$ : null;
};
var Ec = (e, t) => {
  const n2 = e.previousSibling;
  if (n2 && ot(n2) && n2.data.startsWith("t="))
    return "#" + n2.data.slice(2);
  const s = e.ownerDocument, r = ye(t.$elementIndex$++), o = s.createComment(`t=${r}`), i = s.createComment(""), c = e.parentElement;
  return c.insertBefore(o, e), c.insertBefore(i, e.nextSibling), "#" + r;
};
var kr = (e) => Object.keys(e).length === 0;
function Tr(e, t, n2, s, r) {
  return e.map((o) => {
    if (o === null)
      return null;
    const i = typeof o;
    switch (i) {
      case "undefined":
        return Vt;
      case "number":
        if (!Number.isFinite(o))
          break;
        return o;
      case "string":
        if (o.charCodeAt(0) < 32)
          break;
        return o;
      case "boolean":
        return o;
    }
    const c = Zc(o, t, s, r);
    if (c !== void 0)
      return c;
    if (i === "object") {
      if (M(o))
        return o.map(t);
      if (it(o)) {
        const $ = {};
        for (const l2 in o)
          if (n2) {
            const a = n2(o[l2]);
            a !== null && ($[l2] = a);
          } else
            $[l2] = t(o[l2]);
        return $;
      }
    }
    throw P(3, o);
  });
}
var te = (e, t, n2 = ce) => ht(null, t, e, null, null, n2, null);
var xc = (e, t = ce) => ht(null, e, null, null, null, t, null);
var Hn = (e, t = {}) => {
  var l2, a;
  let n2 = e.$symbol$, s = e.$chunk$;
  const r = e.$refSymbol$ ?? n2, o = Ct();
  if (o) {
    const u = o.chunkForSymbol(r, s, (l2 = e.dev) == null ? void 0 : l2.file);
    u ? (s = u[1], e.$refSymbol$ || (n2 = u[0])) : console.error("serializeQRL: Cannot resolve symbol", n2, "in", s, (a = e.dev) == null ? void 0 : a.file);
  }
  if (s == null)
    throw P(31, e.$symbol$);
  if (s.startsWith("./") && (s = s.slice(2)), a$(e))
    if (t.$containerState$) {
      const u = t.$containerState$, d2 = e.resolved.toString();
      let p2 = u.$inlineFns$.get(d2);
      p2 === void 0 && (p2 = u.$inlineFns$.size, u.$inlineFns$.set(d2, p2)), n2 = String(p2);
    } else
      Es("Sync QRL without containerState");
  let i = `${s}#${n2}`;
  const c = e.$capture$, $ = e.$captureRef$;
  return $ && $.length ? t.$getObjId$ ? i += `[${xe($, t.$getObjId$, " ")}]` : t.$addRefMap$ && (i += `[${xe($, t.$addRefMap$, " ")}]`) : c && c.length > 0 && (i += `[${c.join(" ")}]`), i;
};
var Vn = (e, t, n2) => {
  n2.$element$;
  const s = { $containerState$: t, $addRefMap$: (r) => _c(n2.$refMap$, r) };
  return xe(e, (r) => Hn(r, s), `
`);
};
var Ht = (e, t) => {
  const n2 = e.length, s = ds(e, 0, "#"), r = ds(e, s, "["), o = Math.min(s, r), i = e.substring(0, o), c = s == n2 ? s : s + 1, $ = c == r ? "default" : e.substring(c, r), l2 = r === n2 ? ce : e.substring(r + 1, n2 - 1).split(" "), a = ht(i, $, null, null, l2, null, null);
  return t && a.$setContainer$(t), a;
};
var ds = (e, t, n2) => {
  const s = e.length, r = e.indexOf(n2, t == s ? 0 : t);
  return r == -1 ? s : r;
};
var _c = (e, t) => {
  const n2 = e.indexOf(t);
  return n2 === -1 ? (e.push(t), String(e.length - 1)) : String(n2);
};
var Ir = (e, t) => (e.$capture$, e.$captureRef$ = e.$capture$.map((n2) => {
  const s = parseInt(n2, 10), r = t.$refMap$[s];
  return t.$refMap$.length > s, r;
}));
var el = (e, t) => (globalThis.__qwik_reg_symbols === void 0 && (globalThis.__qwik_reg_symbols = /* @__PURE__ */ new Map()), globalThis.__qwik_reg_symbols.set(t, e), e);
var tl = (e) => {
  const t = !j(), n2 = e.value;
  let s;
  if (Rr(n2)) {
    if (t) {
      if (e.onRejected && (n2.value.catch(() => {
      }), n2._state === "rejected"))
        return e.onRejected(n2._error);
      if (e.onPending) {
        const r = n2._state;
        if (r === "resolved")
          return e.onResolved(n2._resolved);
        if (r === "pending")
          return e.onPending();
        if (r === "rejected")
          throw n2._error;
      }
      if (ze(() => n2._resolved) !== void 0)
        return e.onResolved(n2._resolved);
    }
    s = n2.value;
  } else if (O(n2))
    s = n2;
  else {
    if (!D(n2))
      return e.onResolved(n2);
    s = Promise.resolve(n2.value);
  }
  return Do(je, { children: s.then(ss(e.onResolved), ss(e.onRejected)) });
};
var qc = (e) => ({ __brand: "resource", value: void 0, loading: !j(), _resolved: void 0, _error: void 0, _state: "pending", _timeout: (e == null ? void 0 : e.timeout) ?? -1, _cache: 0 });
var Rr = (e) => ue(e) && e.__brand === "resource";
var kc = (e, t) => {
  const n2 = e._state;
  return n2 === "resolved" ? `0 ${t(e._resolved)}` : n2 === "pending" ? "1" : `2 ${t(e._error)}`;
};
var Tc = (e) => {
  const [t, n2] = e.split(" "), s = qc(void 0);
  return s.value = Promise.resolve(), t === "0" ? (s._state = "resolved", s._resolved = n2, s.loading = false) : t === "1" ? (s._state = "pending", s.value = new Promise(() => {
  }), s.loading = true) : t === "2" && (s._state = "rejected", s._error = n2, s.loading = false), s;
};
var rt = (e) => le(he, { [_s]: "" }, 0, e.name ?? "");
var Vt = "";
function A(e) {
  return { $prefixCode$: e.$prefix$.charCodeAt(0), $prefixChar$: e.$prefix$, $test$: e.$test$, $serialize$: e.$serialize$, $prepare$: e.$prepare$, $fill$: e.$fill$, $collect$: e.$collect$, $subs$: e.$subs$ };
}
var Ic = A({ $prefix$: "", $test$: (e) => Gn(e), $collect$: (e, t, n2) => {
  if (e.$captureRef$)
    for (const s of e.$captureRef$)
      q(s, t, n2);
  t.$prefetch$ === 0 && t.$qrls$.push(e);
}, $serialize$: (e, t) => Hn(e, { $getObjId$: t }), $prepare$: (e, t) => Ht(e, t.$containerEl$), $fill$: (e, t) => {
  e.$capture$ && e.$capture$.length > 0 && (e.$captureRef$ = e.$capture$.map(t), e.$capture$ = null);
} });
var Rc = A({ $prefix$: "", $test$: (e) => Mn(e), $collect$: (e, t, n2) => {
  q(e.$qrl$, t, n2), e.$state$ && (q(e.$state$, t, n2), n2 === true && e.$state$ instanceof tt && We(e.$state$[ne], t, true));
}, $serialize$: (e, t) => di(e, t), $prepare$: (e) => pi(e), $fill$: (e, t) => {
  e.$el$ = t(e.$el$), e.$qrl$ = t(e.$qrl$), e.$state$ && (e.$state$ = t(e.$state$));
} });
var Mc = A({ $prefix$: "", $test$: (e) => Rr(e), $collect$: (e, t, n2) => {
  q(e.value, t, n2), q(e._resolved, t, n2);
}, $serialize$: (e, t) => kc(e, t), $prepare$: (e) => Tc(e), $fill$: (e, t) => {
  if (e._state === "resolved")
    e._resolved = t(e._resolved), e.value = Promise.resolve(e._resolved);
  else if (e._state === "rejected") {
    const n2 = Promise.reject(e._error);
    n2.catch(() => null), e._error = t(e._error), e.value = n2;
  }
} });
var Nc = A({ $prefix$: "", $test$: (e) => e instanceof URL, $serialize$: (e) => e.href, $prepare$: (e) => new URL(e) });
var Ac = A({ $prefix$: "", $test$: (e) => e instanceof Date, $serialize$: (e) => e.toISOString(), $prepare$: (e) => new Date(e) });
var Pc = A({ $prefix$: "\x07", $test$: (e) => e instanceof RegExp, $serialize$: (e) => `${e.flags} ${e.source}`, $prepare$: (e) => {
  const t = e.indexOf(" "), n2 = e.slice(t + 1), s = e.slice(0, t);
  return new RegExp(n2, s);
} });
var Cc = A({ $prefix$: "", $test$: (e) => e instanceof Error, $serialize$: (e) => e.message, $prepare$: (e) => {
  const t = new Error(e);
  return t.stack = void 0, t;
} });
var Oc = A({ $prefix$: "", $test$: (e) => !!e && typeof e == "object" && bs(e), $prepare$: (e, t, n2) => n2 });
var Nt = Symbol("serializable-data");
var Dc = A({ $prefix$: "", $test$: (e) => Kn(e), $serialize$: (e, t) => {
  const [n2] = e[Nt];
  return Hn(n2, { $getObjId$: t });
}, $prepare$: (e, t) => {
  const n2 = Ht(e, t.$containerEl$);
  return Kt(n2);
}, $fill$: (e, t) => {
  var s;
  const [n2] = e[Nt];
  (s = n2.$capture$) != null && s.length && (n2.$captureRef$ = n2.$capture$.map(t), n2.$capture$ = null);
} });
var zc = A({ $prefix$: "", $test$: (e) => e instanceof rn, $collect$: (e, t, n2) => {
  if (e.$args$)
    for (const s of e.$args$)
      q(s, t, n2);
}, $serialize$: (e, t, n2) => {
  const s = Co(e);
  let r = n2.$inlinedFunctions$.indexOf(s);
  return r < 0 && (r = n2.$inlinedFunctions$.length, n2.$inlinedFunctions$.push(s)), xe(e.$args$, t, " ") + " @" + ye(r);
}, $prepare$: (e) => {
  const t = e.split(" "), n2 = t.slice(0, -1), s = t[t.length - 1];
  return new rn(s, n2, s);
}, $fill$: (e, t) => {
  e.$func$, e.$func$ = t(e.$func$), e.$args$ = e.$args$.map(t);
} });
var Lc = A({ $prefix$: "", $test$: (e) => e instanceof tt, $collect$: (e, t, n2) => (q(e.untrackedValue, t, n2), n2 === true && !(e[et] & ki) && We(e[ne], t, true), e), $serialize$: (e, t) => t(e.untrackedValue), $prepare$: (e, t) => {
  var n2;
  return new tt(e, (n2 = t == null ? void 0 : t.$subsManager$) == null ? void 0 : n2.$createManager$(), 0);
}, $subs$: (e, t) => {
  e[ne].$addSubs$(t);
}, $fill$: (e, t) => {
  e.untrackedValue = t(e.untrackedValue);
} });
var Fc = A({ $prefix$: "", $test$: (e) => e instanceof on, $collect$(e, t, n2) {
  if (q(e.ref, t, n2), Cr(e.ref)) {
    const s = Q(e.ref);
    t$(t.$containerState$.$subsManager$, s, n2) && q(e.ref[e.prop], t, n2);
  }
  return e;
}, $serialize$: (e, t) => `${t(e.ref)} ${e.prop}`, $prepare$: (e) => {
  const [t, n2] = e.split(" ");
  return new on(t, n2);
}, $fill$: (e, t) => {
  e.ref = t(e.ref);
} });
var Qc = A({ $prefix$: "", $test$: (e) => typeof e == "number", $serialize$: (e) => String(e), $prepare$: (e) => Number(e) });
var Wc = A({ $prefix$: "", $test$: (e) => e instanceof URLSearchParams, $serialize$: (e) => e.toString(), $prepare$: (e) => new URLSearchParams(e) });
var Uc = A({ $prefix$: "", $test$: (e) => typeof FormData < "u" && e instanceof globalThis.FormData, $serialize$: (e) => {
  const t = [];
  return e.forEach((n2, s) => {
    t.push(typeof n2 == "string" ? [s, n2] : [s, n2.name]);
  }), JSON.stringify(t);
}, $prepare$: (e) => {
  const t = JSON.parse(e), n2 = new FormData();
  for (const [s, r] of t)
    n2.append(s, r);
  return n2;
} });
var Bc = A({ $prefix$: "", $test$: (e) => Te(e), $collect$: (e, t, n2) => {
  q(e.children, t, n2), q(e.props, t, n2), q(e.immutableProps, t, n2), q(e.key, t, n2);
  let s = e.type;
  s === rt ? s = ":slot" : s === je && (s = ":fragment"), q(s, t, n2);
}, $serialize$: (e, t) => {
  let n2 = e.type;
  return n2 === rt ? n2 = ":slot" : n2 === je && (n2 = ":fragment"), `${t(n2)} ${t(e.props)} ${t(e.immutableProps)} ${t(e.key)} ${t(e.children)} ${e.flags}`;
}, $prepare$: (e) => {
  const [t, n2, s, r, o, i] = e.split(" ");
  return new Be(t, n2, s, o, parseInt(i, 10), r);
}, $fill$: (e, t) => {
  e.type = n$(t(e.type)), e.props = t(e.props), e.immutableProps = t(e.immutableProps), e.key = t(e.key), e.children = t(e.children);
} });
var Hc = A({ $prefix$: "", $test$: (e) => typeof e == "bigint", $serialize$: (e) => e.toString(), $prepare$: (e) => BigInt(e) });
var Vc = A({ $prefix$: "", $test$: (e) => e instanceof Uint8Array, $serialize$: (e) => {
  let t = "";
  for (const n2 of e)
    t += String.fromCharCode(n2);
  return btoa(t).replace(/=+$/, "");
}, $prepare$: (e) => {
  const t = atob(e), n2 = new Uint8Array(t.length);
  let s = 0;
  for (const r of t)
    n2[s++] = r.charCodeAt(0);
  return n2;
}, $fill$: void 0 });
var Le = Symbol();
var Jc = A({ $prefix$: "", $test$: (e) => e instanceof Set, $collect$: (e, t, n2) => {
  e.forEach((s) => q(s, t, n2));
}, $serialize$: (e, t) => Array.from(e).map(t).join(" "), $prepare$: (e) => {
  const t = /* @__PURE__ */ new Set();
  return t[Le] = e, t;
}, $fill$: (e, t) => {
  const n2 = e[Le];
  e[Le] = void 0;
  const s = n2.length === 0 ? [] : n2.split(" ");
  for (const r of s)
    e.add(t(r));
} });
var Gc = A({ $prefix$: "", $test$: (e) => e instanceof Map, $collect$: (e, t, n2) => {
  e.forEach((s, r) => {
    q(s, t, n2), q(r, t, n2);
  });
}, $serialize$: (e, t) => {
  const n2 = [];
  return e.forEach((s, r) => {
    n2.push(t(r) + " " + t(s));
  }), n2.join(" ");
}, $prepare$: (e) => {
  const t = /* @__PURE__ */ new Map();
  return t[Le] = e, t;
}, $fill$: (e, t) => {
  const n2 = e[Le];
  e[Le] = void 0;
  const s = n2.length === 0 ? [] : n2.split(" ");
  s.length % 2;
  for (let r = 0; r < s.length; r += 2)
    e.set(t(s[r]), t(s[r + 1]));
} });
var Kc = A({ $prefix$: "\x1B", $test$: (e) => !!Mr(e) || e === Vt, $serialize$: (e) => e, $prepare$: (e) => e });
var Jt = [Ic, Rc, Mc, Nc, Ac, Pc, Cc, Oc, Dc, zc, Lc, Fc, Qc, Wc, Uc, Bc, Hc, Jc, Gc, Kc, Vc];
var ps = (() => {
  const e = [];
  return Jt.forEach((t) => {
    const n2 = t.$prefixCode$;
    for (; e.length < n2; )
      e.push(void 0);
    e.push(t);
  }), e;
})();
function Mr(e) {
  if (typeof e == "string") {
    const t = e.charCodeAt(0);
    if (t < ps.length)
      return ps[t];
  }
}
var Yc = Jt.filter((e) => e.$collect$);
var Xc = (e) => {
  for (const t of Jt)
    if (t.$test$(e))
      return true;
  return false;
};
var jc = (e, t, n2) => {
  for (const s of Yc)
    if (s.$test$(e))
      return s.$collect$(e, t, n2), true;
  return false;
};
var Zc = (e, t, n2, s) => {
  for (const r of Jt)
    if (r.$test$(e)) {
      let o = r.$prefixChar$;
      return r.$serialize$ && (o += r.$serialize$(e, t, n2, s)), o;
    }
  if (typeof e == "string")
    return e;
};
var Nr = (e, t) => {
  const n2 = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
  return { prepare(r) {
    const o = Mr(r);
    if (o) {
      const i = o.$prepare$(r.slice(1), e, t);
      return o.$fill$ && n2.set(i, o), o.$subs$ && s.set(i, o), i;
    }
    return r;
  }, subs(r, o) {
    const i = s.get(r);
    return !!i && (i.$subs$(r, o, e), true);
  }, fill(r, o) {
    const i = n2.get(r);
    return !!i && (i.$fill$(r, o, e), true);
  } };
};
var e$ = { "!": (e, t) => t.$proxyMap$.get(e) ?? bn(e, t), "~": (e) => Promise.resolve(e), _: (e) => Promise.reject(e) };
var t$ = (e, t, n2) => {
  if (typeof n2 == "boolean")
    return n2;
  const s = e.$groupToManagers$.get(n2);
  return !!(s && s.length > 0) && (s.length !== 1 || s[0] !== t);
};
var n$ = (e) => e === ":slot" ? rt : e === ":fragment" ? je : e;
var nl = (e, t) => an(e, /* @__PURE__ */ new Set(), "_", t);
var an = (e, t, n2, s) => {
  const r = pt(e);
  if (r == null)
    return e;
  if (s$(r)) {
    if (t.has(r) || (t.add(r), Xc(r)))
      return e;
    const o = typeof r;
    switch (o) {
      case "object":
        if (O(r) || Se(r))
          return e;
        if (M(r)) {
          let c = 0;
          return r.forEach(($, l2) => {
            if (l2 !== c)
              throw P(3, r);
            an($, t, n2 + "[" + l2 + "]"), c = l2 + 1;
          }), e;
        }
        if (it(r)) {
          for (const [c, $] of Object.entries(r))
            an($, t, n2 + "." + c);
          return e;
        }
        break;
      case "boolean":
      case "string":
      case "number":
        return e;
    }
    let i = "";
    if (i = s || "Value cannot be serialized", n2 !== "_" && (i += ` in ${n2},`), o === "object")
      i += ` because it's an instance of "${e == null ? void 0 : e.constructor.name}". You might need to use 'noSerialize()' or use an object literal instead. Check out https://qwik.dev/docs/advanced/dollar/`;
    else if (o === "function") {
      const c = e.name;
      i += ` because it's a function named "${c}". You might need to convert it to a QRL using $(fn):

const ${c} = $(${String(e)});

Please check out https://qwik.dev/docs/advanced/qrl/ for more information.`;
    }
    console.error("Trying to serialize", e), Es(i);
  }
  return e;
};
var Jn = /* @__PURE__ */ new WeakSet();
var Ar = /* @__PURE__ */ new WeakSet();
var s$ = (e) => !ue(e) && !W(e) || !Jn.has(e);
var Pr = (e) => Jn.has(e);
var Cr = (e) => Ar.has(e);
var Gt = (e) => (e != null && Jn.add(e), e);
var r$ = (e) => (Ar.add(e), e);
var pt = (e) => ue(e) ? Ie(e) ?? e : e;
var Ie = (e) => e[en];
var Q = (e) => e[ne];
var Or = (e) => e[Ae];
var o$ = (e, t) => {
  const n2 = e[0], s = typeof e[1] == "string" ? e[1] : t(e[1]);
  if (!s)
    return;
  let r = n2 + " " + s, o;
  if (n2 === 0)
    o = e[2];
  else {
    const i = t(e[2]);
    if (!i)
      return;
    n2 <= 2 ? (o = e[5], r += ` ${i} ${hs(t(e[3]))} ${e[4]}`) : n2 <= 4 && (o = e[4], r += ` ${i} ${typeof e[3] == "string" ? e[3] : hs(t(e[3]))}`);
  }
  return o && (r += ` ${encodeURI(o)}`), r;
};
var i$ = (e, t) => {
  const n2 = e.split(" "), s = parseInt(n2[0], 10);
  n2.length >= 2;
  const r = t(n2[1]);
  if (!r || Mn(r) && !r.$el$)
    return;
  const o = [s, r];
  return s === 0 ? (n2.length <= 3, o.push(Zt(n2[2]))) : s <= 2 ? (n2.length === 5 || n2.length, o.push(t(n2[2]), t(n2[3]), n2[4], Zt(n2[5]))) : s <= 4 && (n2.length === 4 || n2.length, o.push(t(n2[2]), t(n2[3]), Zt(n2[4]))), o;
};
var Zt = (e) => {
  if (e !== void 0)
    return decodeURI(e);
};
var c$ = (e) => {
  const t = /* @__PURE__ */ new Map();
  return { $groupToManagers$: t, $createManager$: (s) => new $$(t, e, s), $clearSub$: (s) => {
    const r = t.get(s);
    if (r) {
      for (const o of r)
        o.$unsubGroup$(s);
      t.delete(s), r.length = 0;
    }
  }, $clearSignal$: (s) => {
    const r = t.get(s[1]);
    if (r)
      for (const o of r)
        o.$unsubEntry$(s);
  } };
};
var $$ = class {
  constructor(t, n2, s) {
    this.$groupToManagers$ = t, this.$containerState$ = n2, this.$subs$ = [], s && this.$addSubs$(s);
  }
  $addSubs$(t) {
    this.$subs$.push(...t);
    for (const n2 of this.$subs$)
      this.$addToGroup$(n2[1], this);
  }
  $addToGroup$(t, n2) {
    let s = this.$groupToManagers$.get(t);
    s || this.$groupToManagers$.set(t, s = []), s.includes(n2) || s.push(n2);
  }
  $unsubGroup$(t) {
    const n2 = this.$subs$;
    for (let s = 0; s < n2.length; s++)
      n2[s][1] === t && (n2.splice(s, 1), s--);
  }
  $unsubEntry$(t) {
    const [n2, s, r, o] = t, i = this.$subs$;
    if (n2 === 1 || n2 === 2) {
      const c = t[4];
      for (let $ = 0; $ < i.length; $++) {
        const l2 = i[$];
        l2[0] === n2 && l2[1] === s && l2[2] === r && l2[3] === o && l2[4] === c && (i.splice($, 1), $--);
      }
    } else if (n2 === 3 || n2 === 4)
      for (let c = 0; c < i.length; c++) {
        const $ = i[c];
        $[0] === n2 && $[1] === s && $[2] === r && $[3] === o && (i.splice(c, 1), c--);
      }
  }
  $addSub$(t, n2) {
    const s = this.$subs$, r = t[1];
    t[0] === 0 && s.some(([o, i, c]) => o === 0 && i === r && c === n2) || (s.push(Dr = [...t, n2]), this.$addToGroup$(r, this));
  }
  $notifySubs$(t) {
    const n2 = this.$subs$;
    for (const s of n2) {
      const r = s[s.length - 1];
      t && r && r !== t || Yo(s, this.$containerState$);
    }
  }
};
var Dr;
function l$() {
  return Dr;
}
var hs = (e) => {
  if (e == null)
    throw _e("must be non null", e);
  return e;
};
var Gn = (e) => typeof e == "function" && typeof e.getSymbol == "function";
var a$ = (e) => Gn(e) && e.$symbol$ == "<sync>";
var ht = (e, t, n2, s, r, o, i) => {
  let c;
  const $ = async function(...f2) {
    return await p2.call(this, F())(...f2);
  }, l2 = (f2) => (c || (c = f2), c), a = (f2) => typeof f2 != "function" || !(r != null && r.length) && !(o != null && o.length) ? f2 : function(...y) {
    let w = F();
    if (w) {
      const h = w.$qrl$;
      w.$qrl$ = $;
      const b = w.$event$;
      w.$event$ === void 0 && (w.$event$ = this);
      try {
        return f2.apply(this, y);
      } finally {
        w.$qrl$ = h, w.$event$ = b;
      }
    }
    return w = H(), w.$qrl$ = $, w.$event$ = this, B.call(this, w, f2, ...y);
  }, u = async (f2) => {
    if (n2 !== null)
      return n2;
    if (f2 && l2(f2), e === "") {
      const h = c.getAttribute(qs), b = ks(c.ownerDocument, h);
      return $.resolved = n2 = b[Number(t)];
    }
    const y = d$(), w = F();
    {
      const h = Ct().importSymbol(c, e, t);
      n2 = k(h, (b) => $.resolved = n2 = a(b));
    }
    return n2.finally(() => u$(t, w == null ? void 0 : w.$element$, y)), n2;
  }, d2 = (f2) => n2 !== null ? n2 : u(f2);
  function p2(f2, y) {
    return (...w) => k(d2(), (h) => {
      if (!W(h))
        throw P(10);
      if (y && y() === false)
        return;
      const b = v2(f2);
      return B.call(this, b, h, ...w);
    });
  }
  const v2 = (f2) => f2 == null ? H() : M(f2) ? cr(f2) : f2, S2 = i ?? t, m = zr(S2);
  return Object.assign($, { getSymbol: () => S2, getHash: () => m, getCaptured: () => o, resolve: u, $resolveLazy$: d2, $setContainer$: l2, $chunk$: e, $symbol$: t, $refSymbol$: i, $hash$: m, getFn: p2, $capture$: r, $captureRef$: o, dev: null, resolved: void 0 }), n2 && (n2 = k(n2, (f2) => $.resolved = n2 = a(f2))), $;
};
var zr = (e) => {
  const t = e.lastIndexOf("_");
  return t > -1 ? e.slice(t + 1) : e;
};
var ms = /* @__PURE__ */ new Set();
var u$ = (e, t, n2) => {
  ms.has(e) || (ms.add(e), f$("qsymbol", { symbol: e, element: t, reqTime: n2 }));
};
var f$ = (e, t) => {
  j() || typeof document != "object" || document.dispatchEvent(new CustomEvent(e, { bubbles: false, detail: t }));
};
var d$ = () => j() ? 0 : typeof performance == "object" ? performance.now() : 0;
var p$ = (e) => e;
var h$ = function(e, t) {
  return ht("", "<sync>", e, null, null, null, null);
};
var Kt = (e) => {
  function t(n2, s, r) {
    const o = e.$hash$.slice(0, 4) + ":" + (s || "");
    return le(he, { [Zr]: e, [K]: n2[K], [N]: n2[N], children: n2.children, props: n2 }, r, o);
  }
  return t[Nt] = [e], t;
};
var Kn = (e) => typeof e == "function" && e[Nt] !== void 0;
var mt = (e, t) => {
  const { val: n2, set: s, iCtx: r } = Ue();
  if (n2 != null)
    return n2;
  const o = W(e) ? B(void 0, e) : e;
  if ((t == null ? void 0 : t.reactive) === false)
    return s(o), o;
  {
    const i = bn(o, r.$renderCtx$.$static$.$containerState$, (t == null ? void 0 : t.deep) ?? true ? 1 : 0);
    return s(i), i;
  }
};
function At(e, t) {
  var s;
  const n2 = F();
  return ((s = n2 == null ? void 0 : n2.$renderCtx$) == null ? void 0 : s.$static$.$containerState$.$serverData$[e]) ?? t;
}
var m$ = (e) => {
  g$(e, (t) => t);
};
var g$ = (e, t, n2) => {
  const { val: s, set: r, iCtx: o, i, elCtx: c } = Ue();
  if (s)
    return s;
  const $ = uo(e, i), l2 = o.$renderCtx$.$static$.$containerState$;
  if (r($), c.$appendStyles$ || (c.$appendStyles$ = []), c.$scopeIds$ || (c.$scopeIds$ = []), l2.$styleIds$.has($))
    return $;
  l2.$styleIds$.add($);
  const a = e.$resolveLazy$(l2.$containerEl$), u = (d2) => {
    c.$appendStyles$, c.$appendStyles$.push({ styleId: $, content: t(d2, $) });
  };
  return O(a) ? o.$waitOn$.push(a.then(u)) : u(a), $;
};
var y$ = '((i,r,a,o)=>{a=e=>{const t=document.querySelector("[q\\\\:base]");t&&r.active&&r.active.postMessage({type:"qprefetch",base:t.getAttribute("q:base"),...e})},document.addEventListener("qprefetch",e=>{const t=e.detail;r?a(t):i.push(t)}),"serviceWorker"in navigator?navigator.serviceWorker.register("/service-worker.js").then(e=>{o=()=>{r=e,i.forEach(a),a({bundles:i})},e.installing?e.installing.addEventListener("statechange",t=>{t.target.state=="activated"&&o()}):e.active&&o()}).catch(e=>console.error(e)):console.log("Service worker not supported in this browser.")})([])';
var v$ = re("qc-s");
var S$ = re("qc-c");
var Lr = re("qc-ic");
var Fr = re("qc-h");
var Qr = re("qc-l");
var Wr = re("qc-n");
var w$ = re("qc-a");
var b$ = re("qc-ir");
var E$ = re("qc-p");
var gs = p$(xc("s_03xDGVNxOJE"));
var x$ = (e) => {
  var t;
  {
    const [n2, s] = Ct().chunkForSymbol(gs.getSymbol(), null, (t = gs.dev) == null ? void 0 : t.file), r = [e, s, n2].map((o) => JSON.stringify(o)).join(",");
    return `(${_$.toString()})(${r});`;
  }
};
var _$ = async (e, t, n2) => {
  var s;
  if (!window._qcs && history.scrollRestoration === "manual") {
    window._qcs = true;
    const r = (s = history.state) == null ? void 0 : s._qCityScroll;
    r && window.scrollTo(r.x, r.y);
    const o = document.currentScript;
    if (o) {
      const i = o.closest("[q\\:container]");
      (await import(new URL(t, new URL(e, document.baseURI)).href))[n2](i);
    }
  }
};
var q$ = () => {
  const e = At("containerAttributes");
  if (!e)
    throw new Error("PrefetchServiceWorker component must be rendered on the server.");
  const t = x$(e["q:base"]);
  _i();
  const n2 = At("nonce"), s = Qt(Lr);
  if (s.value && s.value.length > 0) {
    const r = s.value.length;
    let o = null;
    for (let i = r - 1; i >= 0; i--)
      s.value[i].default && (o = le(s.value[i].default, { children: o }, 1, "30_0"));
    return le(je, { children: [o, qe("script", { dangerouslySetInnerHTML: t, nonce: n2 }, null, null, 0, null)] }, 1, "30_1");
  }
  return kn;
};
var sl = Kt(te(q$, "s_stxgRkWoL3w"));
var gt = /* @__PURE__ */ new Map();
var k$ = "qaction";
var ys = (e) => e.pathname + e.search + e.hash;
var fe = (e, t) => new URL(e, t.href);
var un = (e, t) => e.origin === t.origin;
var vs = (e) => e.endsWith("/") ? e : e + "/";
var Ur = ({ pathname: e }, { pathname: t }) => {
  const n2 = Math.abs(e.length - t.length);
  return n2 === 0 ? e === t : n2 === 1 && vs(e) === vs(t);
};
var T$ = (e, t) => e.search === t.search;
var fn = (e, t) => T$(e, t) && Ur(e, t);
var I$ = (e, t, n2) => {
  let s = t ?? "";
  return n2 && (s += (s ? "&" : "?") + k$ + "=" + encodeURIComponent(n2.id)), e + (e.endsWith("/") ? "" : "/") + "q-data.json" + s;
};
var R$ = (e, t) => {
  const n2 = e.href;
  if (typeof n2 == "string" && typeof e.target != "string" && !e.reload)
    try {
      const s = fe(n2.trim(), t.url), r = fe("", t.url);
      if (un(s, r))
        return ys(s);
    } catch (s) {
      console.error(s);
    }
  else if (e.reload)
    return ys(fe("", t.url));
  return null;
};
var M$ = (e, t) => {
  if (e) {
    const n2 = fe(e, t.url), s = fe("", t.url);
    return !fn(n2, s);
  }
  return false;
};
var N$ = (e, t) => {
  if (e) {
    const n2 = fe(e, t.url), s = fe("", t.url);
    return !Ur(n2, s);
  }
  return false;
};
var A$ = (e) => e && typeof e.then == "function";
var P$ = (e, t, n2, s) => {
  const r = Br(), i = { head: r, withLocale: (c) => ns(s, c), resolveValue: (c) => {
    const $ = c.__id;
    if (c.__brand === "server_loader" && !($ in e.loaders))
      throw new Error("You can not get the returned data of a loader that has not been executed for this request.");
    const l2 = e.loaders[$];
    if (A$(l2))
      throw new Error("Loaders returning a promise can not be resolved for the head function.");
    return l2;
  }, ...t };
  for (let c = n2.length - 1; c >= 0; c--) {
    const $ = n2[c] && n2[c].head;
    $ && (typeof $ == "function" ? Ss(r, ns(s, () => $(i))) : typeof $ == "object" && Ss(r, $));
  }
  return i.head;
};
var Ss = (e, t) => {
  typeof t.title == "string" && (e.title = t.title), yt(e.meta, t.meta), yt(e.links, t.links), yt(e.styles, t.styles), yt(e.scripts, t.scripts), Object.assign(e.frontmatter, t.frontmatter);
};
var yt = (e, t) => {
  if (Array.isArray(t))
    for (const n2 of t) {
      if (typeof n2.key == "string") {
        const s = e.findIndex((r) => r.key === n2.key);
        if (s > -1) {
          e[s] = n2;
          continue;
        }
      }
      e.push(n2);
    }
};
var Br = () => ({ title: "", meta: [], links: [], styles: [], scripts: [], frontmatter: {} });
var C$ = (e) => {
};
var O$ = async (e, t, n2) => {
  const s = e.pathname, r = e.search, o = I$(s, r, n2 == null ? void 0 : n2.action);
  let i;
  n2 != null && n2.action || (i = gt.get(o)), n2 == null || n2.prefetchSymbols;
  let c;
  if (!i) {
    const $ = D$(n2 == null ? void 0 : n2.action, n2 == null ? void 0 : n2.clearCache);
    n2 != null && n2.action && (n2.action.data = void 0), i = fetch(o, $).then((l2) => {
      if (l2.redirected) {
        const a = new URL(l2.url);
        if (!a.pathname.endsWith("/q-data.json") || a.origin !== location.origin) {
          location.href = a.href;
          return;
        }
      }
      if ((l2.headers.get("content-type") || "").includes("json"))
        return l2.text().then((a) => {
          const u = Fo(a, t);
          if (!u) {
            location.href = e.href;
            return;
          }
          if (n2 != null && n2.clearCache && gt.delete(o), u.redirect)
            location.href = u.redirect;
          else if (n2 != null && n2.action) {
            const { action: d2 } = n2, p2 = u.loaders[d2.id];
            c = () => {
              d2.resolve({ status: l2.status, result: p2 });
            };
          }
          return u;
        });
      (n2 == null ? void 0 : n2.isPrefetch) !== true && (location.href = e.href);
    }), n2 != null && n2.action || gt.set(o, i);
  }
  return i.then(($) => ($ || gt.delete(o), c && c(), $));
};
var D$ = (e, t) => {
  const n2 = e == null ? void 0 : e.data;
  return n2 ? n2 instanceof FormData ? { method: "POST", body: n2 } : { method: "POST", body: JSON.stringify(n2), headers: { "Content-Type": "application/json, charset=UTF-8" } } : t ? { cache: "no-cache", headers: { "Cache-Control": "no-cache", Pragma: "no-cache" } } : void 0;
};
var rl = () => Qt(Fr);
var z$ = () => Qt(Qr);
var L$ = () => Qt(Wr);
var Hr = () => Gt(At("qwikcity"));
var ws = {};
var vt = { navCount: 0 };
var F$ = ":root{view-transition-name:none}";
var Q$ = (e) => {
};
var W$ = async (e, t) => {
  const [n2, s, r, o] = at(), { type: i = "link", forceReload: c = e === void 0, replaceState: $ = false, scroll: l2 = true } = typeof t == "object" ? t : { forceReload: t };
  vt.navCount++;
  const a = r.value.dest, u = e === void 0 ? a : typeof e == "number" ? e : fe(e, o.url);
  if (ws.$cbs$ && (c || typeof u == "number" || !fn(u, a) || !un(u, a))) {
    const d2 = vt.navCount, p2 = await Promise.all([...ws.$cbs$.values()].map((v2) => v2(u)));
    if (d2 !== vt.navCount || p2.some(Boolean)) {
      d2 === vt.navCount && i === "popstate" && history.pushState(null, "", a);
      return;
    }
  }
  if (typeof u != "number" && un(u, a) && !(!c && fn(u, a)))
    return r.value = { type: i, dest: u, forceReload: c, replaceState: $, scroll: l2 }, n2.value = void 0, o.isNavigating = true, new Promise((d2) => {
      s.r = d2;
    });
};
var U$ = ({ track: e }) => {
  const [t, n2, s, r, o, i, c, $, l2, a, u] = at();
  async function d2() {
    const [v2, S2] = e(() => [a.value, t.value]), m = vi(""), f2 = u.url, y = S2 ? "form" : v2.type;
    v2.replaceState;
    let w, h, b = null;
    if (w = new URL(v2.dest, u.url), b = o.loadedRoute, h = o.response, b) {
      const [E2, _2, g3, x2] = b, T2 = g3, R2 = T2[T2.length - 1];
      v2.dest.search && (w.search = v2.dest.search), u.prevUrl = f2, u.url = w, u.params = { ..._2 }, a.untrackedValue = { type: y, dest: w };
      const I4 = P$(h, u, T2, m);
      n2.headings = R2.headings, n2.menu = x2, s.value = Gt(T2), r.links = I4.links, r.meta = I4.meta, r.styles = I4.styles, r.scripts = I4.scripts, r.title = I4.title, r.frontmatter = I4.frontmatter;
    }
  }
  return d2();
};
var B$ = (e) => {
  m$(te(F$, "s_O01htlQOl00"));
  const t = Hr();
  if (!(t != null && t.params))
    throw new Error("Missing Qwik City Env Data for help visit https://github.com/QwikDev/qwik/issues/6237");
  const n2 = At("url");
  if (!n2)
    throw new Error("Missing Qwik URL Env Data");
  const s = new URL(n2), r = mt({ url: s, params: t.params, isNavigating: false, prevUrl: void 0 }, { deep: false }), o = {}, i = r$(mt(t.response.loaders, { deep: false })), c = Xt({ type: "initial", dest: s, forceReload: false, replaceState: false, scroll: true }), $ = mt(Br), l2 = mt({ headings: void 0, menu: void 0 }), a = Xt(), u = t.response.action, d2 = u ? t.response.loaders[u] : void 0, p2 = Xt(d2 ? { id: u, data: t.response.formData, output: { result: d2, status: t.response.status } } : void 0), v2 = te(Q$, "s_wrW3ritc0ec"), S2 = te(W$, "s_8NhZsw0jo8o", [p2, o, c, r]);
  return ie(S$, l2), ie(Lr, a), ie(Fr, $), ie(Qr, r), ie(Wr, S2), ie(v$, i), ie(w$, p2), ie(b$, c), ie(E$, v2), $i(te(U$, "s_4I0JMIIwhxs", [p2, l2, a, $, t, S2, i, o, e, c, r])), le(rt, null, 3, "30_2");
};
var ol = Kt(te(B$, "s_6uVg0YBu10w"));
var H$ = (e, t) => {
  var n2;
  if (!((n2 = navigator.connection) != null && n2.saveData) && t && t.href) {
    const s = new URL(t.href);
    C$(s.pathname), t.hasAttribute("data-prefetch") && O$(s, t, { prefetchSymbols: false, isPrefetch: true });
  }
};
var V$ = async (e, t) => {
  const [n2, s, r, o] = at();
  e.defaultPrevented && (t.hasAttribute("q:nbs") ? await n2(location.href, { type: "popstate" }) : t.href && (t.setAttribute("aria-pressed", "true"), await n2(t.href, { forceReload: s, replaceState: r, scroll: o }), t.removeAttribute("aria-pressed")));
};
var J$ = (e) => {
  const t = L$(), n2 = z$(), { onClick$: s, prefetch: r, reload: o, replaceState: i, scroll: c, ...$ } = e, l2 = ze(() => R$({ ...$, reload: o }, n2));
  $.href = l2 || e.href;
  const a = ze(() => !!l2 && r !== false && r !== "js" && M$(l2, n2) || void 0), d2 = ze(() => a || !!l2 && r !== false && N$(l2, n2)) ? te(H$, "s_QSU0K9A6WvM") : void 0, p2 = l2 ? h$((S2, m) => {
    S2.metaKey || S2.ctrlKey || S2.shiftKey || S2.altKey || S2.preventDefault();
  }) : void 0;
  return Oo("a", { "q:link": !!l2, ...$, "data-prefetch": a, children: le(rt, null, 3, "30_4"), onClick$: [p2, s, l2 ? te(V$, "s_NxEYRvWc0p0", [t, o, i, c]) : void 0], onMouseOver$: [$.onMouseOver$, d2], onFocus$: [$.onFocus$, d2], onQVisible$: [$.onQVisible$, d2] }, null, 0, "30_5");
};
var il = Kt(te(J$, "s_wavS3nUYgkU"));
var cl = (e) => qe("script", { nonce: Ii(e, "nonce") }, { dangerouslySetInnerHTML: y$ }, null, 3, "30_6");
var G$ = async function(...e) {
  var i, c;
  const [t, n2, s, r, o] = at();
  e.length > 0 && e[0] instanceof AbortSignal && e.shift();
  {
    let $ = (i = globalThis.qcAsyncRequestStore) == null ? void 0 : i.getStore();
    return $ || ($ = [(c = Hr()) == null ? void 0 : c.ev, this, xi()].find((a) => a && Object.prototype.hasOwnProperty.call(a, "sharedMap") && Object.prototype.hasOwnProperty.call(a, "cookie"))), o.apply($, e);
  }
};
var $l = (e, t) => {
  var c, $;
  {
    const l2 = e.getCaptured();
    if (l2 && l2.length > 0 && !Ei())
      throw new Error("For security reasons, we cannot serialize QRLs that capture lexical scope.");
  }
  const n2 = (($ = (c = t == null ? void 0 : t.method) == null ? void 0 : c.toUpperCase) == null ? void 0 : $.call(c)) || "POST", s = (t == null ? void 0 : t.headers) || {}, r = (t == null ? void 0 : t.origin) || "", o = (t == null ? void 0 : t.fetchOptions) || {};
  function i() {
    return te(G$, "s_ldS7NSrcBug", [o, s, n2, r, e]);
  }
  return i();
};
var _e2 = ((s) => typeof __require2 < "u" ? __require2 : typeof Proxy < "u" ? new Proxy(s, { get: (e, n2) => (typeof __require2 < "u" ? __require2 : e)[n2] }) : s)(function(s) {
  if (typeof __require2 < "u")
    return __require2.apply(this, arguments);
  throw Error('Dynamic require of "' + s + '" is not supported');
});
var ye2 = "<sync>";
function Z2(s, e) {
  const n2 = e == null ? void 0 : e.mapper, o = s.symbolMapper ? s.symbolMapper : (r, l2, i) => {
    var a;
    if (n2) {
      const c = D2(r), d2 = n2[c];
      if (!d2) {
        if (c === ye2)
          return [c, ""];
        if ((a = globalThis.__qwik_reg_symbols) == null ? void 0 : a.has(c))
          return [r, "_"];
        if (i)
          return [r, `${i}?qrl=${r}`];
        console.error("Cannot resolve symbol", r, "in", n2, i);
      }
      return d2;
    }
  };
  return { isServer: true, async importSymbol(r, l2, i) {
    var j4;
    const a = D2(i), c = (j4 = globalThis.__qwik_reg_symbols) == null ? void 0 : j4.get(a);
    if (c)
      return c;
    let d2 = String(l2);
    d2.endsWith(".js") || (d2 += ".js");
    const q3 = _e2(d2);
    if (!(i in q3))
      throw new Error(`Q-ERROR: missing symbol '${i}' in module '${d2}'.`);
    return q3[i];
  }, raf: () => (console.error("server can not rerender"), Promise.resolve()), nextTick: (r) => new Promise((l2) => {
    setTimeout(() => {
      l2(r());
    });
  }), chunkForSymbol(r, l2, i) {
    return o(r, n2, i);
  } };
}
async function je2(s, e) {
  const n2 = Z2(s, e);
  K$(n2);
}
var D2 = (s) => {
  const e = s.lastIndexOf("_");
  return e > -1 ? s.slice(e + 1) : s;
};
var ve2 = "q:instance";
function ge2(s) {
  if (s != null && s.mapping != null && typeof s.mapping == "object" && s.symbols != null && typeof s.symbols == "object" && s.bundles != null && typeof s.bundles == "object")
    return s;
}
function I() {
  let t = `const w=new Worker(URL.createObjectURL(new Blob(['onmessage=(e)=>{Promise.all(e.data.map(u=>fetch(u))).finally(()=>{setTimeout(postMessage({}),9999)})}'],{type:"text/javascript"})));`;
  return t += "w.postMessage(u.map(u=>new URL(u,origin)+''));", t += "w.onmessage=()=>{w.terminate()};", t;
}
function ke2(s, e) {
  const n2 = { bundles: g(e).map((t) => t.split("/").pop()) };
  return `(window.qwikPrefetchSW||(window.qwikPrefetchSW=[])).push(${JSON.stringify(["prefetch", s, ...n2.bundles])});`;
}
function g(s) {
  const e = [], n2 = (o) => {
    if (Array.isArray(o))
      for (const t of o)
        e.includes(t.url) || (e.push(t.url), n2(t.imports));
  };
  return n2(s), e;
}
function xe2(s) {
  const e = /* @__PURE__ */ new Map();
  let n2 = 0;
  const o = (i, a) => {
    if (Array.isArray(i))
      for (const c of i) {
        const d2 = e.get(c.url) || 0;
        e.set(c.url, d2 + 1), n2++, a.has(c.url) || (a.add(c.url), o(c.imports, a));
      }
  }, t = /* @__PURE__ */ new Set();
  for (const i of s)
    t.clear(), o(i.imports, t);
  const r = n2 / e.size * 2, l2 = Array.from(e.entries());
  return l2.sort((i, a) => a[1] - i[1]), l2.slice(0, 5).filter((i) => i[1] > r).map((i) => i[0]);
}
function ze2(s, e, n2, o) {
  const t = Ee2(e == null ? void 0 : e.implementation), r = [];
  return t.prefetchEvent === "always" && Se2(s, r, n2, o), t.linkInsert === "html-append" && De2(r, n2, t), t.linkInsert === "js-append" ? Ie2(r, n2, t, o) : t.workerFetchInsert === "always" && Ne2(r, n2, o), r.length > 0 ? Do(je, { children: r }) : null;
}
function Se2(s, e, n2, o) {
  const t = xe2(n2);
  for (const r of t)
    e.push(Do("link", { rel: "modulepreload", href: r, nonce: o }));
  e.push(Do("script", { "q:type": "prefetch-bundles", dangerouslySetInnerHTML: ke2(s, n2) + "document.dispatchEvent(new CustomEvent('qprefetch', {detail:{links: [location.pathname]}}))", nonce: o }));
}
function De2(s, e, n2) {
  const o = g(e), t = n2.linkRel || "prefetch";
  for (const r of o) {
    const l2 = {};
    l2.href = r, l2.rel = t, (t === "prefetch" || t === "preload") && r.endsWith(".js") && (l2.as = "script"), s.push(Do("link", l2));
  }
}
function Ie2(s, e, n2, o) {
  const t = n2.linkRel || "prefetch";
  let r = "";
  n2.workerFetchInsert === "no-link-support" && (r += "let supportsLinkRel = true;"), r += `const u=${JSON.stringify(g(e))};`, r += "u.map((u,i)=>{", r += "const l=document.createElement('link');", r += 'l.setAttribute("href",u);', r += `l.setAttribute("rel","${t}");`, n2.workerFetchInsert === "no-link-support" && (r += "if(i===0){", r += "try{", r += `supportsLinkRel=l.relList.supports("${t}");`, r += "}catch(e){}", r += "}"), r += "document.body.appendChild(l);", r += "});", n2.workerFetchInsert === "no-link-support" && (r += "if(!supportsLinkRel){", r += I(), r += "}"), n2.workerFetchInsert === "always" && (r += I()), s.push(Do("script", { type: "module", "q:type": "link-js", dangerouslySetInnerHTML: r, nonce: o }));
}
function Ne2(s, e, n2) {
  let o = `const u=${JSON.stringify(g(e))};`;
  o += I(), s.push(Do("script", { type: "module", "q:type": "prefetch-worker", dangerouslySetInnerHTML: o, nonce: n2 }));
}
function Ee2(s) {
  return { ...Oe2, ...s };
}
var Oe2 = { linkInsert: null, linkRel: null, workerFetchInsert: null, prefetchEvent: "always" };
function S() {
  if (typeof performance > "u")
    return () => 0;
  const s = performance.now();
  return () => (performance.now() - s) / 1e6;
}
function ee2(s) {
  let e = s.base;
  return typeof s.base == "function" && (e = s.base(s)), typeof e == "string" ? (e.endsWith("/") || (e += "/"), e) : "/build/";
}
function Te2(s, e, n2) {
  if (!n2)
    return [];
  const o = e.prefetchStrategy, t = ee2(e);
  if (o !== null) {
    if (!o || !o.symbolsToPrefetch || o.symbolsToPrefetch === "auto")
      return Be2(s, n2, t);
    if (typeof o.symbolsToPrefetch == "function")
      try {
        return o.symbolsToPrefetch({ manifest: n2.manifest });
      } catch (r) {
        console.error("getPrefetchUrls, symbolsToPrefetch()", r);
      }
  }
  return [];
}
function Be2(s, e, n2) {
  const o = [], t = s == null ? void 0 : s.qrls, { mapper: r, manifest: l2 } = e, i = /* @__PURE__ */ new Map();
  if (Array.isArray(t))
    for (const a of t) {
      const c = a.getHash(), d2 = r[c];
      if (d2) {
        const q3 = d2[1];
        se2(l2, i, o, n2, q3);
      }
    }
  return o;
}
function se2(s, e, n2, o, t) {
  const r = o + t;
  let l2 = e.get(r);
  if (!l2) {
    l2 = { url: r, imports: [] }, e.set(r, l2);
    const i = s.bundles[t];
    if (i && Array.isArray(i.imports))
      for (const a of i.imports)
        se2(s, e, l2.imports, o, a);
  }
  n2.push(l2);
}
var Pe2 = '(()=>{var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(t,r,o)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,s=(e,s)=>{for(var a in s||(s={}))r.call(s,a)&&n(e,a,s[a]);if(t)for(var a of t(s))o.call(s,a)&&n(e,a,s[a]);return e};((e,t)=>{const r="__q_context__",o=window,n=new Set,a=new Set([e]),c="replace",i="forEach",l="target",f="getAttribute",p="isConnected",b="qvisible",u="_qwikjson_",y=(e,t)=>Array.from(e.querySelectorAll(t)),h=e=>{const t=[];return a.forEach((r=>t.push(...y(r,e)))),t},d=e=>{S(e),y(e,"[q\\\\:shadowroot]").forEach((e=>{const t=e.shadowRoot;t&&d(t)}))},m=e=>e&&"function"==typeof e.then,w=(e,t,r=t.type)=>{h("[on"+e+"\\\\:"+r+"]")[i]((o=>E(o,e,t,r)))},q=t=>{if(void 0===t[u]){let r=(t===e.documentElement?e.body:t).lastElementChild;for(;r;){if("SCRIPT"===r.tagName&&"qwik/json"===r[f]("type")){t[u]=JSON.parse(r.textContent[c](/\\\\x3C(\\/?script)/gi,"<$1"));break}r=r.previousElementSibling}}},v=(e,t)=>new CustomEvent(e,{detail:t}),E=async(t,o,n,a=n.type)=>{const i="on"+o+":"+a;t.hasAttribute("preventdefault:"+a)&&n.preventDefault();const l=t._qc_,b=l&&l.li.filter((e=>e[0]===i));if(b&&b.length>0){for(const e of b){const r=e[1].getFn([t,n],(()=>t[p]))(n,t),o=n.cancelBubble;m(r)&&await r,o&&n.stopPropagation()}return}const u=t[f](i);if(u){const o=t.closest("[q\\\\:container]"),a=o[f]("q:base"),i=o[f]("q:version")||"unknown",l=o[f]("q:manifest-hash")||"dev",b=new URL(a,e.baseURI);for(const f of u.split("\\n")){const u=new URL(f,b),y=u.href,h=u.hash[c](/^#?([^?[|]*).*$/,"$1")||"default",d=performance.now();let w,v,E;const _=f.startsWith("#"),A={qBase:a,qManifest:l,qVersion:i,href:y,symbol:h,element:t,reqTime:d};if(_){const t=o.getAttribute("q:instance");w=(e["qFuncs_"+t]||[])[Number.parseInt(h)],w||(v="sync",E=Error("sync handler error for symbol: "+h))}else{const e=u.href.split("#")[0];try{const t=import(e);q(o),w=(await t)[h],w||(v="no-symbol",E=Error(`${h} not in ${e}`))}catch(e){v||(v="async"),E=e}}if(!w){g("qerror",s({importError:v,error:E},A)),console.error(E);break}const k=e[r];if(t[p])try{e[r]=[t,n,u],_||g("qsymbol",s({},A));const o=w(n,t);m(o)&&await o}catch(e){g("qerror",s({error:e},A))}finally{e[r]=k}}}},g=(t,r)=>{e.dispatchEvent(v(t,r))},_=e=>e[c](/([A-Z])/g,(e=>"-"+e.toLowerCase())),A=async e=>{let t=_(e.type),r=e[l];for(w("-document",e,t);r&&r[f];){const o=E(r,"",e,t);let n=e.cancelBubble;m(o)&&await o,n=n||e.cancelBubble||r.hasAttribute("stoppropagation:"+e.type),r=e.bubbles&&!0!==n?r.parentElement:null}},k=e=>{w("-window",e,_(e.type))},C=()=>{var r;const s=e.readyState;if(!t&&("interactive"==s||"complete"==s)&&(a.forEach(d),t=1,g("qinit"),(null!=(r=o.requestIdleCallback)?r:o.setTimeout).bind(o)((()=>g("qidle"))),n.has(b))){const e=h("[on\\\\:"+b+"]"),t=new IntersectionObserver((e=>{for(const r of e)r.isIntersecting&&(t.unobserve(r[l]),E(r[l],"",v(b,r)))}));e[i]((e=>t.observe(e)))}},O=(e,t,r,o=!1)=>e.addEventListener(t,r,{capture:o,passive:!1}),S=(...e)=>{for(const t of e)"string"==typeof t?n.has(t)||(a.forEach((e=>O(e,t,A,!0))),O(o,t,k,!0),n.add(t)):a.has(t)||(n.forEach((e=>O(t,e,A,!0))),a.add(t))};if(!(r in e)){e[r]=0;const t=o.qwikevents;Array.isArray(t)&&S(...t),o.qwikevents={events:n,roots:a,push:S},O(e,"readystatechange",C),C()}})(document)})()';
var Ae2 = `(() => {
    var __defProp = Object.defineProperty;
    var __getOwnPropSymbols = Object.getOwnPropertySymbols;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __propIsEnum = Object.prototype.propertyIsEnumerable;
    var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: value
    }) : obj[key] = value;
    var __spreadValues = (a, b) => {
        for (var prop in b || (b = {})) {
            __hasOwnProp.call(b, prop) && __defNormalProp(a, prop, b[prop]);
        }
        if (__getOwnPropSymbols) {
            for (var prop of __getOwnPropSymbols(b)) {
                __propIsEnum.call(b, prop) && __defNormalProp(a, prop, b[prop]);
            }
        }
        return a;
    };
    ((doc, hasInitialized) => {
        const Q_CONTEXT = "__q_context__";
        const win = window;
        const events =  new Set;
        const roots =  new Set([ doc ]);
        const nativeQuerySelectorAll = (root, selector) => Array.from(root.querySelectorAll(selector));
        const querySelectorAll = query => {
            const elements = [];
            roots.forEach((root => elements.push(...nativeQuerySelectorAll(root, query))));
            return elements;
        };
        const findShadowRoots = fragment => {
            processEventOrNode(fragment);
            nativeQuerySelectorAll(fragment, "[q\\\\:shadowroot]").forEach((parent => {
                const shadowRoot = parent.shadowRoot;
                shadowRoot && findShadowRoots(shadowRoot);
            }));
        };
        const isPromise = promise => promise && "function" == typeof promise.then;
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((el => dispatch(el, infix, ev, type)));
        };
        const resolveContainer = containerEl => {
            if (void 0 === containerEl._qwikjson_) {
                let script = (containerEl === doc.documentElement ? doc.body : containerEl).lastElementChild;
                while (script) {
                    if ("SCRIPT" === script.tagName && "qwik/json" === script.getAttribute("type")) {
                        containerEl._qwikjson_ = JSON.parse(script.textContent.replace(/\\\\x3C(\\/?script)/gi, "<$1"));
                        break;
                    }
                    script = script.previousElementSibling;
                }
            }
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const relevantListeners = ctx && ctx.li.filter((li => li[0] === attrName));
            if (relevantListeners && relevantListeners.length > 0) {
                for (const listener of relevantListeners) {
                    const results = listener[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                    const cancelBubble = ev.cancelBubble;
                    isPromise(results) && await results;
                    cancelBubble && ev.stopPropagation();
                }
                return;
            }
            const attrValue = element.getAttribute(attrName);
            if (attrValue) {
                const container = element.closest("[q\\\\:container]");
                const qBase = container.getAttribute("q:base");
                const qVersion = container.getAttribute("q:version") || "unknown";
                const qManifest = container.getAttribute("q:manifest-hash") || "dev";
                const base = new URL(qBase, doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const href = url.href;
                    const symbol = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    let handler;
                    let importError;
                    let error;
                    const isSync = qrl.startsWith("#");
                    const eventData = {
                        qBase: qBase,
                        qManifest: qManifest,
                        qVersion: qVersion,
                        href: href,
                        symbol: symbol,
                        element: element,
                        reqTime: reqTime
                    };
                    if (isSync) {
                        const hash = container.getAttribute("q:instance");
                        handler = (doc["qFuncs_" + hash] || [])[Number.parseInt(symbol)];
                        if (!handler) {
                            importError = "sync";
                            error = new Error("sync handler error for symbol: " + symbol);
                        }
                    } else {
                        const uri = url.href.split("#")[0];
                        try {
                            const module = import(
                                                        uri);
                            resolveContainer(container);
                            handler = (await module)[symbol];
                            if (!handler) {
                                importError = "no-symbol";
                                error = new Error(\`\${symbol} not in \${uri}\`);
                            }
                        } catch (err) {
                            importError || (importError = "async");
                            error = err;
                        }
                    }
                    if (!handler) {
                        emitEvent("qerror", __spreadValues({
                            importError: importError,
                            error: error
                        }, eventData));
                        console.error(error);
                        break;
                    }
                    const previousCtx = doc[Q_CONTEXT];
                    if (element.isConnected) {
                        try {
                            doc[Q_CONTEXT] = [ element, ev, url ];
                            isSync || emitEvent("qsymbol", __spreadValues({}, eventData));
                            const results = handler(ev, element);
                            isPromise(results) && await results;
                        } catch (error2) {
                            emitEvent("qerror", __spreadValues({
                                error: error2
                            }, eventData));
                        } finally {
                            doc[Q_CONTEXT] = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                const results = dispatch(element, "", ev, type);
                let cancelBubble = ev.cancelBubble;
                isPromise(results) && await results;
                cancelBubble = cancelBubble || ev.cancelBubble || element.hasAttribute("stoppropagation:" + ev.type);
                element = ev.bubbles && !0 !== cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                roots.forEach(findShadowRoots);
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture,
            passive: !1
        });
        const processEventOrNode = (...eventNames) => {
            for (const eventNameOrNode of eventNames) {
                if ("string" == typeof eventNameOrNode) {
                    if (!events.has(eventNameOrNode)) {
                        roots.forEach((root => addEventListener(root, eventNameOrNode, processDocumentEvent, !0)));
                        addEventListener(win, eventNameOrNode, processWindowEvent, !0);
                        events.add(eventNameOrNode);
                    }
                } else if (!roots.has(eventNameOrNode)) {
                    events.forEach((eventName => addEventListener(eventNameOrNode, eventName, processDocumentEvent, !0)));
                    roots.add(eventNameOrNode);
                }
            }
        };
        if (!(Q_CONTEXT in doc)) {
            doc[Q_CONTEXT] = 0;
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && processEventOrNode(...qwikevents);
            win.qwikevents = {
                events: events,
                roots: roots,
                push: processEventOrNode
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})()`;
function H2(s = {}) {
  return s.debug ? Ae2 : Pe2;
}
var Ce2 = "<!DOCTYPE html>";
async function Fe2(s, e) {
  var C, F3, L3;
  let n2 = e.stream, o = 0, t = 0, r = 0, l2 = 0, i = "", a;
  const c = ((C = e.streaming) == null ? void 0 : C.inOrder) ?? { strategy: "auto", maximunInitialChunk: 5e4, maximunChunk: 3e4 }, d2 = e.containerTagName ?? "html", q3 = e.containerAttributes ?? {}, j4 = n2, re3 = S(), oe2 = ee2(e), p2 = ne2(e.manifest);
  function E2() {
    i && (j4.write(i), i = "", o = 0, r++, r === 1 && (l2 = re3()));
  }
  function O3(m) {
    const f2 = m.length;
    o += f2, t += f2, i += m;
  }
  switch (c.strategy) {
    case "disabled":
      n2 = { write: O3 };
      break;
    case "direct":
      n2 = j4;
      break;
    case "auto":
      let m = 0, f2 = false;
      const R2 = c.maximunChunk ?? 0, z4 = c.maximunInitialChunk ?? 0;
      n2 = { write(_2) {
        _2 === "<!--qkssr-f-->" ? f2 || (f2 = true) : _2 === "<!--qkssr-pu-->" ? m++ : _2 === "<!--qkssr-po-->" ? m-- : O3(_2), m === 0 && (f2 || o >= (r === 0 ? z4 : R2)) && (f2 = false, E2());
      } };
      break;
  }
  d2 === "html" ? n2.write(Ce2) : (n2.write("<!--cq-->"), e.qwikLoader ? (e.qwikLoader.include === void 0 && (e.qwikLoader.include = "never"), e.qwikLoader.position === void 0 && (e.qwikLoader.position = "bottom")) : e.qwikLoader = { include: "never" }, e.qwikPrefetchServiceWorker || (e.qwikPrefetchServiceWorker = {}), e.qwikPrefetchServiceWorker.include || (e.qwikPrefetchServiceWorker.include = false), e.qwikPrefetchServiceWorker.position || (e.qwikPrefetchServiceWorker.position = "top")), e.manifest || console.warn("Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build."), await je2(e, p2);
  const T2 = p2 == null ? void 0 : p2.manifest.injections, k4 = T2 ? T2.map((m) => Do(m.tag, m.attributes ?? {})) : [], x2 = ((F3 = e.qwikLoader) == null ? void 0 : F3.include) ?? "auto";
  if ((((L3 = e.qwikLoader) == null ? void 0 : L3.position) ?? "bottom") === "top" && x2 !== "never") {
    const m = H2({ debug: e.debug });
    k4.push(Do("script", { id: "qwikloader", dangerouslySetInnerHTML: m })), k4.push(Do("script", { dangerouslySetInnerHTML: "window.qwikevents.push('click')" }));
  }
  const te3 = S(), B4 = [];
  let P2 = 0, A2 = 0;
  await X$(s, { stream: n2, containerTagName: d2, containerAttributes: q3, serverData: e.serverData, base: oe2, beforeContent: k4, beforeClose: async (m, f2, R2, z4) => {
    var J4, $, Q3, V2, M4;
    P2 = te3();
    const _2 = S();
    a = await fc(m, f2, void 0, z4);
    const b = [];
    if (e.prefetchStrategy !== null) {
      const w = Te2(a, e, p2), ce4 = q3["q:base"];
      if (w.length > 0) {
        const Y4 = ze2(ce4, e.prefetchStrategy, w, (J4 = e.serverData) == null ? void 0 : J4.nonce);
        Y4 && b.push(Y4);
      }
    }
    const le3 = JSON.stringify(a.state, void 0, void 0);
    if (b.push(Do("script", { type: "qwik/json", dangerouslySetInnerHTML: Re(le3), nonce: ($ = e.serverData) == null ? void 0 : $.nonce })), a.funcs.length > 0) {
      const w = q3[ve2];
      b.push(Do("script", { "q:func": "qwik/json", dangerouslySetInnerHTML: Je2(w, a.funcs), nonce: (Q3 = e.serverData) == null ? void 0 : Q3.nonce }));
    }
    const ae4 = !a || a.mode !== "static", W4 = x2 === "always" || x2 === "auto" && ae4;
    if (W4) {
      const w = H2({ debug: e.debug });
      b.push(Do("script", { id: "qwikloader", dangerouslySetInnerHTML: w, nonce: (V2 = e.serverData) == null ? void 0 : V2.nonce }));
    }
    const K2 = Array.from(f2.$events$, (w) => JSON.stringify(w));
    if (K2.length > 0) {
      const w = (W4 ? "window.qwikevents" : "(window.qwikevents||=[])") + `.push(${K2.join(", ")})`;
      b.push(Do("script", { dangerouslySetInnerHTML: w, nonce: (M4 = e.serverData) == null ? void 0 : M4.nonce }));
    }
    return We2(B4, m), A2 = _2(), Do(je, { children: b });
  }, manifestHash: (p2 == null ? void 0 : p2.manifest.manifestHash) || "dev" + Le2() }), d2 !== "html" && n2.write("<!--/cq-->"), E2();
  const ie4 = a.resources.some((m) => m._cache !== 1 / 0);
  return { prefetchResources: void 0, snapshotResult: a, flushes: r, manifest: p2 == null ? void 0 : p2.manifest, size: t, isStatic: !ie4, timing: { render: P2, snapshot: A2, firstFlush: l2 }, _symbols: B4 };
}
function Le2() {
  return Math.random().toString(36).slice(2);
}
function ne2(s) {
  if (s) {
    if ("mapper" in s)
      return s;
    if (s = ge2(s), s) {
      const e = {};
      return Object.entries(s.mapping).forEach(([n2, o]) => {
        e[D2(n2)] = [n2, o];
      }), { mapper: e, manifest: s };
    }
  }
}
var Re = (s) => s.replace(/<(\/?script)/gi, "\\x3C$1");
function We2(s, e) {
  var n2;
  for (const o of e) {
    const t = (n2 = o.$componentQrl$) == null ? void 0 : n2.getSymbol();
    t && !s.includes(t) && s.push(t);
  }
}
var Ke2 = 'document["qFuncs_HASH"]=';
function Je2(s, e) {
  return Ke2.replace("HASH", s) + `[${e.join(`,
`)}]`;
}
async function Xe2(s) {
  const e = Z2({ manifest: s }, ne2(s));
  K$(e);
}
var $e2 = { manifestHash: "luzq1e", symbols: { s_4I0JMIIwhxs: { origin: "../node_modules/@builder.io/qwik-city/lib/index.qwik.mjs", displayName: "QwikCityProvider_component_useTask", canonicalFilename: "s_4i0jmiiwhxs", hash: "4I0JMIIwhxs", ctxKind: "function", ctxName: "useTask$", captures: true, parent: "s_6uVg0YBu10w", loc: [29611, 38875] }, s_AVwkZHi2mjc: { origin: "../node_modules/@builder.io/qwik-city/lib/index.qwik.mjs", displayName: "usePreventNavigateQrl_useVisibleTask", canonicalFilename: "s_avwkzhi2mjc", hash: "AVwkZHi2mjc", ctxKind: "function", ctxName: "useVisibleTask$", captures: true, loc: [23358, 23386] }, s_29R7P00OKFA: { origin: "routes/index.tsx", displayName: "routes_component", canonicalFilename: "s_29r7p00okfa", hash: "29R7P00OKFA", ctxKind: "function", ctxName: "component$", captures: false, loc: [77, 376] }, s_5V5T0WszXjY: { origin: "components/navigation/index.tsx", displayName: "navigation_component", canonicalFilename: "s_5v5t0wszxjy", hash: "5V5T0WszXjY", ctxKind: "function", ctxName: "component$", captures: false, loc: [126, 369] }, s_6uVg0YBu10w: { origin: "../node_modules/@builder.io/qwik-city/lib/index.qwik.mjs", displayName: "QwikCityProvider_component", canonicalFilename: "s_6uvg0ybu10w", hash: "6uVg0YBu10w", ctxKind: "function", ctxName: "component$", captures: false, loc: [24794, 38921] }, s_6yoM2igDQNs: { origin: "root.tsx", displayName: "Root_component", canonicalFilename: "s_6yom2igdqns", hash: "6yoM2igDQNs", ctxKind: "function", ctxName: "component$", captures: false, loc: [332, 1095] }, s_FlrIJWXb01g: { origin: "components/navlink/index.tsx", displayName: "NavLink_component", canonicalFilename: "s_flrijwxb01g", hash: "FlrIJWXb01g", ctxKind: "function", ctxName: "component$", captures: false, loc: [228, 1073] }, s_T88OB0S7FB4: { origin: "../node_modules/@builder.io/qwik-city/lib/index.qwik.mjs", displayName: "QwikCityMockProvider_component", canonicalFilename: "s_t88ob0s7fb4", hash: "T88OB0S7FB4", ctxKind: "function", ctxName: "component$", captures: false, loc: [39123, 40328] }, s_YxeVW9tHS3o: { origin: "components/router-head/router-head.tsx", displayName: "RouterHead_component", canonicalFilename: "s_yxevw9ths3o", hash: "YxeVW9tHS3o", ctxKind: "function", ctxName: "component$", captures: false, loc: [249, 1248] }, s_gs5zf6xZ7nI: { origin: "routes/posts/[postId]/index.tsx", displayName: "postId_component", canonicalFilename: "s_gs5zf6xz7ni", hash: "gs5zf6xZ7nI", ctxKind: "function", ctxName: "component$", captures: false, loc: [83, 97] }, s_o4AHZqJ7TC4: { origin: "routes/posts/layout.tsx", displayName: "layout_component", canonicalFilename: "s_o4ahzqj7tc4", hash: "o4AHZqJ7TC4", ctxKind: "function", ctxName: "component$", captures: false, loc: [223, 1005] }, s_rnfws6KWrXc: { origin: "routes/posts/[postId]/layout.tsx", displayName: "layout_component", canonicalFilename: "s_rnfws6kwrxc", hash: "rnfws6KWrXc", ctxKind: "function", ctxName: "component$", captures: false, loc: [225, 1007] }, s_s63tdpKEcRI: { origin: "../node_modules/@builder.io/qwik-city/lib/index.qwik.mjs", displayName: "GetForm_component", canonicalFilename: "s_s63tdpkecri", hash: "s63tdpKEcRI", ctxKind: "function", ctxName: "component$", captures: false, loc: [59210, 60363] }, s_sRiqT7AU2DM: { origin: "routes/layout.tsx", displayName: "layout_component", canonicalFilename: "s_sriqt7au2dm", hash: "sRiqT7AU2DM", ctxKind: "function", ctxName: "component$", captures: false, loc: [934, 1134] }, s_stxgRkWoL3w: { origin: "../node_modules/@builder.io/qwik-city/lib/index.qwik.mjs", displayName: "RouterOutlet_component", canonicalFilename: "s_stxgrkwol3w", hash: "stxgRkWoL3w", ctxKind: "function", ctxName: "component$", captures: false, loc: [7939, 8773] }, s_ttzw6r8rI0I: { origin: "components/chat/index.tsx", displayName: "chat_component", canonicalFilename: "s_ttzw6r8ri0i", hash: "ttzw6r8rI0I", ctxKind: "function", ctxName: "component$", captures: false, loc: [83, 661] }, s_usLRwOw2TAA: { origin: "routes/posts/index.tsx", displayName: "posts_component", canonicalFilename: "s_uslrwow2taa", hash: "usLRwOw2TAA", ctxKind: "function", ctxName: "component$", captures: false, loc: [83, 97] }, s_wavS3nUYgkU: { origin: "../node_modules/@builder.io/qwik-city/lib/index.qwik.mjs", displayName: "Link_component", canonicalFilename: "s_wavs3nuygku", hash: "wavS3nUYgkU", ctxKind: "function", ctxName: "component$", captures: false, loc: [40355, 42645] }, s_O01htlQOl00: { origin: "../node_modules/@builder.io/qwik-city/lib/index.qwik.mjs", displayName: "QwikCityProvider_component_useStyles", canonicalFilename: "s_o01htlqol00", hash: "O01htlQOl00", ctxKind: "function", ctxName: "useStyles$", captures: false, parent: "s_6uVg0YBu10w", loc: [24820, 24854] }, s_03xDGVNxOJE: { origin: "../node_modules/@builder.io/qwik-city/lib/index.qwik.mjs", displayName: "spaInit_event", canonicalFilename: "s_03xdgvnxoje", hash: "03xDGVNxOJE", ctxKind: "function", ctxName: "event$", captures: false, loc: [1369, 6920] }, s_0TcIXADiSWs: { origin: "../node_modules/@builder.io/qwik-city/lib/index.qwik.mjs", displayName: "Form_form_onSubmit", canonicalFilename: "s_0tcixadisws", hash: "0TcIXADiSWs", ctxKind: "function", ctxName: "$", captures: true, loc: [58341, 58455] }, s_U38A0TMEDiw: { origin: "../node_modules/@builder.io/qwik-city/lib/index.qwik.mjs", displayName: "routeActionQrl_action_submit", canonicalFilename: "s_u38a0tmediw", hash: "U38A0TMEDiw", ctxKind: "function", ctxName: "$", captures: true, loc: [45348, 46993] }, s_ldS7NSrcBug: { origin: "../node_modules/@builder.io/qwik-city/lib/index.qwik.mjs", displayName: "serverQrl_rpc", canonicalFilename: "s_lds7nsrcbug", hash: "ldS7NSrcBug", ctxKind: "function", ctxName: "$", captures: true, loc: [53435, 56412] }, s_5yO91kTYiQY: { origin: "../node_modules/@builder.io/qwik-city/lib/index.qwik.mjs", displayName: "GetForm_component_form_onSubmit_1", canonicalFilename: "s_5yo91ktyiqy", hash: "5yO91kTYiQY", ctxKind: "function", ctxName: "$", captures: false, parent: "s_s63tdpKEcRI", loc: [59965, 60301] }, s_8NhZsw0jo8o: { origin: "../node_modules/@builder.io/qwik-city/lib/index.qwik.mjs", displayName: "QwikCityProvider_component_goto", canonicalFilename: "s_8nhzsw0jo8o", hash: "8NhZsw0jo8o", ctxKind: "function", ctxName: "$", captures: true, parent: "s_6uVg0YBu10w", loc: [27008, 29082] }, s_GlfEDWrKGVA: { origin: "../node_modules/@builder.io/qwik-city/lib/index.qwik.mjs", displayName: "GetForm_component_form_onSubmit", canonicalFilename: "s_glfedwrkgva", hash: "GlfEDWrKGVA", ctxKind: "function", ctxName: "$", captures: true, parent: "s_s63tdpKEcRI", loc: [59574, 59954] }, s_NxEYRvWc0p0: { origin: "../node_modules/@builder.io/qwik-city/lib/index.qwik.mjs", displayName: "Link_component_handleClick", canonicalFilename: "s_nxeyrvwc0p0", hash: "NxEYRvWc0p0", ctxKind: "function", ctxName: "$", captures: true, parent: "s_wavS3nUYgkU", loc: [41666, 42092] }, s_QSU0K9A6WvM: { origin: "../node_modules/@builder.io/qwik-city/lib/index.qwik.mjs", displayName: "Link_component_handlePrefetch", canonicalFilename: "s_qsu0k9a6wvm", hash: "QSU0K9A6WvM", ctxKind: "function", ctxName: "$", captures: false, parent: "s_wavS3nUYgkU", loc: [41067, 41416] }, s_oLG300z31Ik: { origin: "../node_modules/@builder.io/qwik-city/lib/index.qwik.mjs", displayName: "QwikCityMockProvider_component_goto", canonicalFilename: "s_olg300z31ik", hash: "oLG300z31Ik", ctxKind: "function", ctxName: "$", captures: false, parent: "s_T88OB0S7FB4", loc: [39513, 39591] }, s_wrW3ritc0ec: { origin: "../node_modules/@builder.io/qwik-city/lib/index.qwik.mjs", displayName: "QwikCityProvider_component_registerPreventNav", canonicalFilename: "s_wrw3ritc0ec", hash: "wrW3ritc0ec", ctxKind: "function", ctxName: "$", captures: false, parent: "s_6uVg0YBu10w", loc: [26111, 26988] } }, mapping: { s_4I0JMIIwhxs: "q-Bu-rh264.js", s_AVwkZHi2mjc: "q-Cpt7ZDL1.js", s_29R7P00OKFA: "q-nlPGy4K2.js", s_5V5T0WszXjY: "q-DBqNwTVk.js", s_6uVg0YBu10w: "q-1HqOIw3A.js", s_6yoM2igDQNs: "q-CgjFsYr7.js", s_FlrIJWXb01g: "q-BCG7vK7S.js", s_T88OB0S7FB4: "q-4A3E9FGV.js", s_YxeVW9tHS3o: "q-sk78y065.js", s_gs5zf6xZ7nI: "q-BoC4skvL.js", s_o4AHZqJ7TC4: "q-DWEAjRuf.js", s_rnfws6KWrXc: "q-CmmF6zWL.js", s_s63tdpKEcRI: "q-DETrKY6r.js", s_sRiqT7AU2DM: "q-BeddgEiz.js", s_stxgRkWoL3w: "q-BYTaAbYu.js", s_ttzw6r8rI0I: "q-n83xnQQl.js", s_usLRwOw2TAA: "q-BCsdG2q5.js", s_wavS3nUYgkU: "q-miCd08SB.js", s_O01htlQOl00: "q-Lbr0wTlS.js", s_03xDGVNxOJE: "q-D8jfSR1M.js", s_0TcIXADiSWs: "q-DOJm2wSw.js", s_U38A0TMEDiw: "q-VoSxHEmI.js", s_ldS7NSrcBug: "q-Bl7Itc9P.js", s_5yO91kTYiQY: "q-D6IjP4xB.js", s_8NhZsw0jo8o: "q-o5gsmv-8.js", s_GlfEDWrKGVA: "q-BHgxU8qn.js", s_NxEYRvWc0p0: "q-Bdt8CkuO.js", s_QSU0K9A6WvM: "q-C1iOwwe4.js", s_oLG300z31Ik: "q-0RN6KO6B.js", s_wrW3ritc0ec: "q-xyWCWWGJ.js" }, bundles: { "..\\service-worker.js": { size: 2808, origins: ["node_modules/@builder.io/qwik-city/lib/service-worker.mjs", "src/routes/service-worker.ts"] }, "q-0RN6KO6B.js": { size: 135, isTask: true, imports: ["q-4A3E9FGV.js", "q-D6IjP4xB.js", "q-DOJm2wSw.js"], symbols: ["s_oLG300z31Ik"] }, "q-1HqOIw3A.js": { size: 107, imports: ["q-Bu-rh264.js", "q-D6IjP4xB.js", "q-DOJm2wSw.js"], symbols: ["s_6uVg0YBu10w"] }, "q-4A3E9FGV.js": { size: 803, imports: ["q-D6IjP4xB.js", "q-DOJm2wSw.js"], origins: ["node_modules/@builder.io/qwik-city/lib/s_olg300z31ik.js", "node_modules/@builder.io/qwik-city/lib/s_t88ob0s7fb4.js"], symbols: ["s_T88OB0S7FB4"] }, "q-B5ZKUF8N.js": { size: 245, imports: ["q-CmmF6zWL.js", "q-D6IjP4xB.js", "q-DBqNwTVk.js", "q-DOJm2wSw.js"], dynamicImports: ["q-DWEAjRuf.js"], origins: ["src/routes/posts/layout.tsx"] }, "q-BCG7vK7S.js": { size: 459, imports: ["q-D6IjP4xB.js", "q-DOJm2wSw.js"], origins: ["src/components/navlink/s_flrijwxb01g.js"], symbols: ["s_FlrIJWXb01g"] }, "q-BCsdG2q5.js": { size: 102, imports: ["q-DOJm2wSw.js"], origins: ["src/routes/posts/s_uslrwow2taa.js"], symbols: ["s_usLRwOw2TAA"] }, "q-bDBP8isy.js": { size: 149, imports: ["q-D6IjP4xB.js", "q-DOJm2wSw.js"], dynamicImports: ["..\\service-worker.js"], origins: ["@qwik-city-entries"] }, "q-Bdt8CkuO.js": { size: 135, isTask: true, imports: ["q-D6IjP4xB.js", "q-DOJm2wSw.js", "q-miCd08SB.js"], symbols: ["s_NxEYRvWc0p0"] }, "q-BeddgEiz.js": { size: 452, imports: ["q-D6IjP4xB.js", "q-DOJm2wSw.js"], dynamicImports: ["q-DBqNwTVk.js", "q-n83xnQQl.js"], origins: ["src/components/chat/index.tsx", "src/components/navigation/index.tsx", "src/routes/s_sriqt7au2dm.js"], symbols: ["s_sRiqT7AU2DM"] }, "q-BHgxU8qn.js": { size: 111, isTask: true, imports: ["q-D6IjP4xB.js", "q-DOJm2wSw.js"], symbols: ["s_GlfEDWrKGVA"] }, "q-Bl7Itc9P.js": { size: 1238, isTask: true, imports: ["q-D6IjP4xB.js", "q-DOJm2wSw.js"], origins: ["node_modules/@builder.io/qwik-city/lib/s_lds7nsrcbug.js"], symbols: ["s_ldS7NSrcBug"] }, "q-BoC4skvL.js": { size: 102, imports: ["q-DOJm2wSw.js"], origins: ["src/routes/posts/[postId]/s_gs5zf6xz7ni.js"], symbols: ["s_gs5zf6xZ7nI"] }, "q-Bu-rh264.js": { size: 6990, isTask: true, imports: ["q-D6IjP4xB.js", "q-DOJm2wSw.js"], dynamicImports: ["q-B5ZKUF8N.js", "q-De7xa3QD.js", "q-DjfOskKr.js", "q-DkrGqVh2.js", "q-DviXTeDv.js", "q-DyM7vQAk.js"], origins: ["@qwik-city-plan", "node_modules/@builder.io/qwik-city/lib/s_4i0jmiiwhxs.js", "node_modules/@builder.io/qwik-city/lib/s_6uvg0ybu10w.js", "node_modules/@builder.io/qwik-city/lib/s_8nhzsw0jo8o.js", "node_modules/@builder.io/qwik-city/lib/s_o01htlqol00.js", "node_modules/@builder.io/qwik-city/lib/s_wrw3ritc0ec.js"], symbols: ["s_4I0JMIIwhxs"] }, "q-BYTaAbYu.js": { size: 603, imports: ["q-D6IjP4xB.js", "q-DOJm2wSw.js"], origins: ["node_modules/@builder.io/qwik-city/lib/s_stxgrkwol3w.js"], symbols: ["s_stxgRkWoL3w"] }, "q-C1iOwwe4.js": { size: 130, isTask: true, imports: ["q-D6IjP4xB.js", "q-DOJm2wSw.js", "q-miCd08SB.js"], symbols: ["s_QSU0K9A6WvM"] }, "q-CgjFsYr7.js": { size: 555, imports: ["q-D6IjP4xB.js", "q-DOJm2wSw.js"], dynamicImports: ["q-sk78y065.js"], origins: ["src/components/router-head/router-head.tsx", "src/s_6yom2igdqns.js"], symbols: ["s_6yoM2igDQNs"] }, "q-CmmF6zWL.js": { size: 37537, imports: ["q-D6IjP4xB.js", "q-DBqNwTVk.js", "q-DOJm2wSw.js"], origins: ["node_modules/drizzle-orm/alias.js", "node_modules/drizzle-orm/column-builder.js", "node_modules/drizzle-orm/column.js", "node_modules/drizzle-orm/entity.js", "node_modules/drizzle-orm/errors.js", "node_modules/drizzle-orm/expressions.js", "node_modules/drizzle-orm/index.js", "node_modules/drizzle-orm/logger.js", "node_modules/drizzle-orm/operations.js", "node_modules/drizzle-orm/pg-core/columns/common.js", "node_modules/drizzle-orm/pg-core/columns/enum.js", "node_modules/drizzle-orm/pg-core/foreign-keys.js", "node_modules/drizzle-orm/pg-core/primary-keys.js", "node_modules/drizzle-orm/pg-core/table.js", "node_modules/drizzle-orm/pg-core/unique-constraint.js", "node_modules/drizzle-orm/pg-core/utils/array.js", "node_modules/drizzle-orm/query-builders/query-builder.js", "node_modules/drizzle-orm/query-promise.js", "node_modules/drizzle-orm/relations.js", "node_modules/drizzle-orm/selection-proxy.js", "node_modules/drizzle-orm/sql/expressions/conditions.js", "node_modules/drizzle-orm/sql/expressions/index.js", "node_modules/drizzle-orm/sql/expressions/select.js", "node_modules/drizzle-orm/sql/functions/aggregate.js", "node_modules/drizzle-orm/sql/functions/index.js", "node_modules/drizzle-orm/sql/functions/vector.js", "node_modules/drizzle-orm/sql/index.js", "node_modules/drizzle-orm/sql/sql.js", "node_modules/drizzle-orm/sqlite-core/alias.js", "node_modules/drizzle-orm/sqlite-core/checks.js", "node_modules/drizzle-orm/sqlite-core/columns/blob.js", "node_modules/drizzle-orm/sqlite-core/columns/common.js", "node_modules/drizzle-orm/sqlite-core/columns/custom.js", "node_modules/drizzle-orm/sqlite-core/columns/index.js", "node_modules/drizzle-orm/sqlite-core/columns/integer.js", "node_modules/drizzle-orm/sqlite-core/columns/numeric.js", "node_modules/drizzle-orm/sqlite-core/columns/real.js", "node_modules/drizzle-orm/sqlite-core/columns/text.js", "node_modules/drizzle-orm/sqlite-core/db.js", "node_modules/drizzle-orm/sqlite-core/dialect.js", "node_modules/drizzle-orm/sqlite-core/foreign-keys.js", "node_modules/drizzle-orm/sqlite-core/index.js", "node_modules/drizzle-orm/sqlite-core/indexes.js", "node_modules/drizzle-orm/sqlite-core/primary-keys.js", "node_modules/drizzle-orm/sqlite-core/query-builders/delete.js", "node_modules/drizzle-orm/sqlite-core/query-builders/index.js", "node_modules/drizzle-orm/sqlite-core/query-builders/insert.js", "node_modules/drizzle-orm/sqlite-core/query-builders/query-builder.js", "node_modules/drizzle-orm/sqlite-core/query-builders/query.js", "node_modules/drizzle-orm/sqlite-core/query-builders/raw.js", "node_modules/drizzle-orm/sqlite-core/query-builders/select.js", "node_modules/drizzle-orm/sqlite-core/query-builders/select.types.js", "node_modules/drizzle-orm/sqlite-core/query-builders/update.js", "node_modules/drizzle-orm/sqlite-core/session.js", "node_modules/drizzle-orm/sqlite-core/subquery.js", "node_modules/drizzle-orm/sqlite-core/table.js", "node_modules/drizzle-orm/sqlite-core/unique-constraint.js", "node_modules/drizzle-orm/sqlite-core/utils.js", "node_modules/drizzle-orm/sqlite-core/view-base.js", "node_modules/drizzle-orm/sqlite-core/view-common.js", "node_modules/drizzle-orm/sqlite-core/view.js", "node_modules/drizzle-orm/subquery.js", "node_modules/drizzle-orm/table.js", "node_modules/drizzle-orm/tracing-utils.js", "node_modules/drizzle-orm/tracing.js", "node_modules/drizzle-orm/utils.js", "node_modules/drizzle-orm/version.js", "node_modules/drizzle-orm/view-common.js", "src/lib/queries.ts", "src/lib/schema.ts", "src/routes/posts/[postId]/s_rnfws6kwrxc.js"], symbols: ["s_rnfws6KWrXc"] }, "q-Cpt7ZDL1.js": { size: 152, isTask: true, imports: ["q-DOJm2wSw.js"], origins: ["node_modules/@builder.io/qwik-city/lib/s_avwkzhi2mjc.js"], symbols: ["s_AVwkZHi2mjc"] }, "q-D6IjP4xB.js": { size: 10751, isTask: true, imports: ["q-DOJm2wSw.js"], dynamicImports: ["q-1HqOIw3A.js", "q-Bl7Itc9P.js", "q-BYTaAbYu.js", "q-D8jfSR1M.js", "q-miCd08SB.js"], origins: ["@qwik-city-sw-register", "node_modules/@builder.io/qwik-city/lib/index.qwik.mjs", "node_modules/@builder.io/qwik-city/lib/s_5yo91ktyiqy.js", "node_modules/@builder.io/qwik-city/lib/s_glfedwrkgva.js", "node_modules/@builder.io/qwik-city/lib/s_s63tdpkecri.js", "node_modules/zod/lib/index.mjs"], symbols: ["s_5yO91kTYiQY"] }, "q-D8jfSR1M.js": { size: 2253, origins: ["node_modules/@builder.io/qwik-city/lib/s_03xdgvnxoje.js"], symbols: ["s_03xDGVNxOJE"] }, "q-DBqNwTVk.js": { size: 611, imports: ["q-D6IjP4xB.js", "q-DOJm2wSw.js"], dynamicImports: ["q-BCG7vK7S.js"], origins: ["src/components/navigation/s_5v5t0wszxjy.js", "src/components/navlink/index.tsx"], symbols: ["s_5V5T0WszXjY"] }, "q-De7xa3QD.js": { size: 171, imports: ["q-D6IjP4xB.js", "q-DOJm2wSw.js"], dynamicImports: ["q-nlPGy4K2.js"], origins: ["src/routes/index.tsx"] }, "q-DETrKY6r.js": { size: 88, imports: ["q-D6IjP4xB.js", "q-DOJm2wSw.js"], symbols: ["s_s63tdpKEcRI"] }, "q-DjfOskKr.js": { size: 369, imports: ["q-D6IjP4xB.js", "q-DOJm2wSw.js"], dynamicImports: ["q-BeddgEiz.js"], origins: ["src/routes/layout.tsx"] }, "q-DkrGqVh2.js": { size: 171, imports: ["q-D6IjP4xB.js", "q-DOJm2wSw.js"], dynamicImports: ["q-BoC4skvL.js"], origins: ["src/routes/posts/[postId]/index.tsx"] }, "q-DOJm2wSw.js": { size: 65041, isTask: true, origins: ["@builder.io/qwik/build", "node_modules/@builder.io/qwik-city/lib/s_0tcixadisws.js", "node_modules/@builder.io/qwik/dist/core.prod.mjs"], symbols: ["s_0TcIXADiSWs"] }, "q-DviXTeDv.js": { size: 253, imports: ["q-CmmF6zWL.js", "q-D6IjP4xB.js", "q-DBqNwTVk.js", "q-DOJm2wSw.js"], dynamicImports: ["q-CmmF6zWL.js"], origins: ["src/routes/posts/[postId]/layout.tsx"] }, "q-DWEAjRuf.js": { size: 659, imports: ["q-CmmF6zWL.js", "q-D6IjP4xB.js", "q-DBqNwTVk.js", "q-DOJm2wSw.js"], origins: ["src/routes/posts/s_o4ahzqj7tc4.js"], symbols: ["s_o4AHZqJ7TC4"] }, "q-DxNAAaaf.js": { size: 168, imports: ["q-D6IjP4xB.js", "q-DOJm2wSw.js"], dynamicImports: ["q-CgjFsYr7.js"], origins: ["src/global.css", "src/root.tsx"] }, "q-DyM7vQAk.js": { size: 171, imports: ["q-D6IjP4xB.js", "q-DOJm2wSw.js"], dynamicImports: ["q-BCsdG2q5.js"], origins: ["src/routes/posts/index.tsx"] }, "q-Lbr0wTlS.js": { size: 112, imports: ["q-Bu-rh264.js", "q-D6IjP4xB.js", "q-DOJm2wSw.js"], symbols: ["s_O01htlQOl00"] }, "q-miCd08SB.js": { size: 1680, imports: ["q-D6IjP4xB.js", "q-DOJm2wSw.js"], origins: ["node_modules/@builder.io/qwik-city/lib/s_nxeyrvwc0p0.js", "node_modules/@builder.io/qwik-city/lib/s_qsu0k9a6wvm.js", "node_modules/@builder.io/qwik-city/lib/s_wavs3nuygku.js"], symbols: ["s_wavS3nUYgkU"] }, "q-n83xnQQl.js": { size: 587, imports: ["q-DOJm2wSw.js"], origins: ["src/components/chat/s_ttzw6r8ri0i.js"], symbols: ["s_ttzw6r8rI0I"] }, "q-nlPGy4K2.js": { size: 415, imports: ["q-DOJm2wSw.js"], origins: ["src/routes/s_29r7p00okfa.js"], symbols: ["s_29R7P00OKFA"] }, "q-o5gsmv-8.js": { size: 135, isTask: true, imports: ["q-Bu-rh264.js", "q-D6IjP4xB.js", "q-DOJm2wSw.js"], symbols: ["s_8NhZsw0jo8o"] }, "q-sk78y065.js": { size: 884, imports: ["q-D6IjP4xB.js", "q-DOJm2wSw.js"], origins: ["src/components/router-head/s_yxevw9ths3o.js"], symbols: ["s_YxeVW9tHS3o"] }, "q-VoSxHEmI.js": { size: 813, isTask: true, imports: ["q-DOJm2wSw.js"], origins: ["node_modules/@builder.io/qwik-city/lib/s_u38a0tmediw.js"], symbols: ["s_U38A0TMEDiw"] }, "q-xyWCWWGJ.js": { size: 135, isTask: true, imports: ["q-Bu-rh264.js", "q-D6IjP4xB.js", "q-DOJm2wSw.js"], symbols: ["s_wrW3ritc0ec"] } }, injections: [{ tag: "style", location: "head", attributes: { "data-src": "/assets/D8veAtVP-style.css", dangerouslySetInnerHTML: `*,*:before,*:after{box-sizing:border-box}*{margin:0}body{line-height:1.5;-webkit-font-smoothing:antialiased}img,picture,video,canvas,svg{display:block;max-width:100%}input,button,textarea,select{font:inherit}p,h1,h2,h3,h4,h5,h6{overflow-wrap:break-word}#root,#__next{isolation:isolate}:root{--step: 1.618033988749895;--font-size-base: clamp(1rem, calc(1rem + 1vmin) , 3rem);--font-size-sm: calc(var(--font-size-base) / var(--step));--font-size-md: var(--font-size-base);--font-size-lg: calc(var(--font-size-base) * var(--step));--font-size-xl: calc(var(--font-size-base) * var(--step) * var(--step));--weight-sm: 400;--weight-md: 500;--weight-lg: 600;--weight-xl: 700;--line-height-sm: 1.5;--line-height-md: 1.4;--line-height-lg: 1.3;--line-height-xl: 1.2;--size-base: clamp(1rem, calc(1rem + 1vmin) , 2.5rem);--size-sm: calc(var(--size-base) / var(--step));--size-md: var(--size-base);--size-lg: calc(var(--size-base) * var(--step));--size-xl: calc(var(--size-base) * var(--step) * var(--step));--font-family: system-ui, sans-serif;--white: #ffffff;--white-r: 255;--white-g: 255;--white-b: 255;--dark-forest: #092327;--dark-forest-r: 9;--dark-forest-g: 35;--dark-forest-b: 39;--dough: #e7dfc6;--dough-r: 231;--dough-g: 223;--dough-b: 198;--moms-favourite-color-r: 24;--moms-favourite-color-g: 93;--moms-favourite-color-b: 104;--moms-favourite-color: rgb( var(--moms-favourite-color-r), var(--moms-favourite-color-g), var(--moms-favourite-color-b) );--background: linear-gradient( 137.5deg, var(--moms-favourite-color), calc(var(--size-lg) * 4), var(--dark-forest) );--border-radius: calc(var(--size-sm) / 2)}html,body{align-content:center;text-align:center;display:block;border-radius:calc(var(--size-sm) / var(--step));background:var(--background) fixed;color:var(--white);font-family:var(--font-family);font-weight:var(--weight-sm);font-size:var(--font-size-sm);line-height:var(--line-height-sm);text-shadow:0 0 calc(1px * 1 / 3) var(--dough);width:100vw;height:100vh;scrollbar-color:var(--dough) var(--dark-forest);overflow-y:auto}main{text-align:left;margin-inline:var(--size-lg);margin-block:var(--size-md);display:inline-block;padding-inline:var(--size-lg);padding-block:var(--size-md);border:outset calc(var(--size-sm) / var(--step)) rgba(var(--dough-r),var(--dough-g),var(--dough-b),.65);background:rgba(var(--dough-r),var(--dough-g),var(--dough-b),.78);color:rgba(var(--dark-forest-r),var(--dark-forest-g),var(--dark-forest-b),.8);text-shadow:calc(1px * 1 / 3) calc(1px * 1 / 3) rgba(var(--dark-forest-r),var(--dark-forest-g),var(--dark-forest-b),.4);border-radius:var(--border-radius);box-shadow:inset calc(var(--size-lg) / 4) calc(var(--size-xl) / 4) calc(var(--size-lg)) rgba(var(--dough-r),var(--dough-g),var(--dough-b),.8)}p,span,a,svg,ul,h1,h2,h3{text-align:start;font-size:var(--font-size-md)}h1{font-size:var(--font-size-xl);font-weight:var(--weight-xl);line-height:var(--line-height-xl)}h2{font-size:var(--font-size-lg);font-weight:var(--weight-lg);line-height:var(--line-height-lg)}h3{font-size:var(--font-size-md);font-weight:var(--weight-md);line-height:var(--line-height-md)}menu{stroke:var(--dark-forest)}header,footer{display:inline-block}
` } }], version: "1", options: { target: "client", buildMode: "production", entryStrategy: { type: "smart" } }, platform: { qwik: "1.9.0", vite: "", rollup: "4.22.5", env: "node", os: "win32", node: "22.9.0" } };
var Qe2 = () => {
  const s = rl(), e = z$();
  return le(je, { children: [qe("title", null, null, s.title, 1, null), qe("link", null, { rel: "canonical", href: j$((n2) => n2.url.href, [e], "p0.url.href") }, null, 3, null), qe("meta", null, { name: "viewport", content: "width=device-width, initial-scale=1.0" }, null, 3, null), qe("link", null, { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }, null, 3, null), s.meta.map((n2) => Oo("meta", { ...n2 }, null, 0, n2.key)), s.links.map((n2) => Oo("link", { ...n2 }, null, 0, n2.key)), s.styles.map((n2) => {
    var o;
    return Oo("style", { ...n2.props, ...(o = n2.props) != null && o.dangerouslySetInnerHTML ? {} : { dangerouslySetInnerHTML: n2.style } }, null, 0, n2.key);
  }), s.scripts.map((n2) => {
    var o;
    return Oo("script", { ...n2.props, ...(o = n2.props) != null && o.dangerouslySetInnerHTML ? {} : { dangerouslySetInnerHTML: n2.script } }, null, 0, n2.key);
  })] }, 1, "LU_0");
};
var Ve = Kt(te(Qe2, "s_YxeVW9tHS3o"));
var Me2 = () => (_i(), le(ol, { children: [qe("head", null, null, [qe("meta", null, { charset: "utf-8", name: "viewport", content: "width=device-width, initial-scale=1" }, null, 3, null), qe("link", null, { rel: "manifest", href: "/manifest.json" }, null, 3, "SD_0"), le(Ve, null, 3, "SD_1")], 1, null), qe("body", null, { lang: "en" }, [le(sl, null, 3, "SD_2"), le(cl, null, 3, "SD_3")], 1, null)] }, 1, "SD_4"));
var Ye2 = Kt(te(Me2, "s_6yoM2igDQNs"));
function Ze2(s) {
  return Fe2(le(Ye2, null, 3, "t0_0"), { manifest: $e2, ...s, containerAttributes: { lang: "en-us", ...s.containerAttributes }, serverData: { ...s.serverData } });
}
var Ti2 = Object.defineProperty;
var xi2 = (r, t, e) => t in r ? Ti2(r, t, { enumerable: true, configurable: true, writable: true, value: e }) : r[t] = e;
var n = (r, t, e) => xi2(r, typeof t != "symbol" ? t + "" : t, e);
var Ai2 = () => le(je, { children: qe("div", null, { style: { borderRadius: "0.5rem", paddingInline: "var(--size-sm)", paddingBlock: "var(--size-md)", width: "min-content", height: "min-content", background: "rgba(var(--dough-r), var(--dough-g), var(--dough-b), 0.08)" } }, [qe("h3", null, null, "Live Chat", 3, null), qe("p", null, null, "felix: yo I want a treat", 3, null), qe("p", null, null, "felix: meow", 3, null), qe("br", null, null, null, 3, null), qe("input", null, { type: "text", placeholder: "you:" }, null, 3, null), le(rt, null, 3, "Hj_0")], 1, null) }, 1, "Hj_1");
var Pi2 = Kt(te(Ai2, "s_ttzw6r8rI0I"));
var Ii2 = (r) => {
  const t = Y$(r, ["activeClass"]), e = z$(), s = t.href ?? "", i = e.url.pathname, a = s !== "/" && s.startsWith("/") ? s.length - 1 : s.length, u = s !== "/" && s.endsWith("/") ? s.length - 1 : s.length, o = i === s || i.endsWith(s) && (i.charAt(u) === "/" || i.charAt(a) === "/");
  return le(il, { ...t, class: `${t.class || ""} ${o ? r.activeClass : ""}`, children: le(rt, null, 3, "vO_0") }, 0, "vO_1");
};
var Ve2 = Kt(te(Ii2, "s_FlrIJWXb01g"));
var Bi2 = () => le(je, { children: [le(Ve2, { href: "/", activeClass: "text-green-600", children: qe("h3", null, null, "Home", 3, null), [N]: { href: N, activeClass: N } }, 3, "pC_0"), le(Ve2, { href: "/posts", activeClass: "text-green-600", children: qe("h3", null, null, "Posts", 3, null), [N]: { href: N, activeClass: N } }, 3, "pC_1")] }, 1, "pC_2");
var Di2 = Kt(te(Bi2, "s_5V5T0WszXjY"));
var Fi2 = async ({ cacheControl: r }) => {
  r({ staleWhileRevalidate: 31536e3, maxAge: 5 }, "Cloudflare-CDN-Cache-Control");
};
var Ei2 = { title: "gavinpower.dev", meta: [{ name: "gavinpower.dev", content: "personal website" }] };
var Mi2 = () => le(je, { children: [qe("header", null, null, le(Di2, null, 3, "vF_0"), 1, null), qe("main", null, null, le(rt, null, 3, "vF_1"), 1, null), qe("footer", null, null, le(Pi2, null, 3, "vF_2"), 1, null)] }, 1, "vF_3");
var zi2 = Kt(te(Mi2, "s_sRiqT7AU2DM"));
var Ki2 = Object.freeze(Object.defineProperty({ __proto__: null, default: zi2, head: Ei2, onGet: Fi2 }, Symbol.toStringTag, { value: "Module" }));
var f = Symbol.for("drizzle:entityKind");
function d(r, t) {
  if (!r || typeof r != "object")
    return false;
  if (r instanceof t)
    return true;
  if (!Object.prototype.hasOwnProperty.call(t, f))
    throw new Error(`Class "${t.name ?? "<unknown>"}" doesn't look like a Drizzle entity. If this is incorrect and the class is provided by Drizzle, please report this as a bug.`);
  let e = r.constructor;
  if (e)
    for (; e; ) {
      if (f in e && e[f] === t[f])
        return true;
      e = Object.getPrototypeOf(e);
    }
  return false;
}
var wt2;
wt2 = f;
var j2 = class {
  constructor(t, e) {
    n(this, "name");
    n(this, "primary");
    n(this, "notNull");
    n(this, "default");
    n(this, "defaultFn");
    n(this, "onUpdateFn");
    n(this, "hasDefault");
    n(this, "isUnique");
    n(this, "uniqueName");
    n(this, "uniqueType");
    n(this, "dataType");
    n(this, "columnType");
    n(this, "enumValues");
    n(this, "generated");
    n(this, "generatedIdentity");
    n(this, "config");
    this.table = t, this.config = e, this.name = e.name, this.notNull = e.notNull, this.default = e.default, this.defaultFn = e.defaultFn, this.onUpdateFn = e.onUpdateFn, this.hasDefault = e.hasDefault, this.primary = e.primaryKey, this.isUnique = e.isUnique, this.uniqueName = e.uniqueName, this.uniqueType = e.uniqueType, this.dataType = e.dataType, this.columnType = e.columnType, this.generated = e.generated, this.generatedIdentity = e.generatedIdentity;
  }
  mapFromDriverValue(t) {
    return t;
  }
  mapToDriverValue(t) {
    return t;
  }
  shouldDisableInsert() {
    return this.config.generated !== void 0 && this.config.generated.type !== "byDefault";
  }
};
n(j2, wt2, "Column");
var St2;
St2 = f;
var Dr2 = class {
  constructor(t, e, s) {
    n(this, "config");
    n(this, "$default", this.$defaultFn);
    n(this, "$onUpdate", this.$onUpdateFn);
    this.config = { name: t, notNull: false, default: void 0, hasDefault: false, primaryKey: false, isUnique: false, uniqueName: void 0, uniqueType: void 0, dataType: e, columnType: s, generated: void 0 };
  }
  $type() {
    return this;
  }
  notNull() {
    return this.config.notNull = true, this;
  }
  default(t) {
    return this.config.default = t, this.config.hasDefault = true, this;
  }
  $defaultFn(t) {
    return this.config.defaultFn = t, this.config.hasDefault = true, this;
  }
  $onUpdateFn(t) {
    return this.config.onUpdateFn = t, this.config.hasDefault = true, this;
  }
  primaryKey() {
    return this.config.primaryKey = true, this.config.notNull = true, this;
  }
};
n(Dr2, St2, "ColumnBuilder");
var ce2 = Symbol.for("drizzle:Name");
var be2 = Symbol.for("drizzle:Schema");
var ht2 = Symbol.for("drizzle:Columns");
var dt2 = Symbol.for("drizzle:ExtraConfigColumns");
var Fe3 = Symbol.for("drizzle:OriginalName");
var Ee3 = Symbol.for("drizzle:BaseName");
var ft2 = Symbol.for("drizzle:IsAlias");
var mt2 = Symbol.for("drizzle:ExtraConfigBuilder");
var Vi2 = Symbol.for("drizzle:IsDrizzleTable");
var vt2;
var Nt2;
var Qt2;
var $t2;
var _t2;
var qt2;
var Tt2;
var xt2;
var Lt2;
var Ot2;
Ot2 = f, Lt2 = ce2, xt2 = Fe3, Tt2 = be2, qt2 = ht2, _t2 = dt2, $t2 = Ee3, Qt2 = ft2, Nt2 = Vi2, vt2 = mt2;
var p = class {
  constructor(t, e, s) {
    n(this, Lt2);
    n(this, xt2);
    n(this, Tt2);
    n(this, qt2);
    n(this, _t2);
    n(this, $t2);
    n(this, Qt2, false);
    n(this, Nt2, true);
    n(this, vt2);
    this[ce2] = this[Fe3] = t, this[be2] = e, this[Ee3] = s;
  }
};
n(p, Ot2, "Table"), n(p, "Symbol", { Name: ce2, Schema: be2, OriginalName: Fe3, Columns: ht2, ExtraConfigColumns: dt2, BaseName: Ee3, IsAlias: ft2, ExtraConfigBuilder: mt2 });
function ie2(r) {
  return r[ce2];
}
function he2(r) {
  return `${r[be2] ?? "public"}.${r[ce2]}`;
}
var pt2 = Symbol.for("drizzle:PgInlineForeignKeys");
var jt2;
var Ct2;
var Rt2;
var At2;
var Ue2 = class extends (At2 = p, Rt2 = f, Ct2 = pt2, jt2 = p.Symbol.ExtraConfigBuilder, At2) {
  constructor() {
    super(...arguments);
    n(this, Ct2, []);
    n(this, jt2);
  }
};
n(Ue2, Rt2, "PgTable"), n(Ue2, "Symbol", Object.assign({}, p.Symbol, { InlineForeignKeys: pt2 }));
var yt2 = Symbol.for("drizzle:isPgEnum");
function Ui2(r) {
  return !!r && typeof r == "function" && yt2 in r && r[yt2] === true;
}
var Pt2;
Pt2 = f;
var z2 = class {
  constructor(t, e, s, i = false) {
    this._ = { brand: "Subquery", sql: t, selectedFields: e, alias: s, isWith: i };
  }
};
n(z2, Pt2, "Subquery");
var It2;
var Bt2;
var tt2 = class extends (Bt2 = z2, It2 = f, Bt2) {
};
n(tt2, It2, "WithSubquery");
var Wi2 = { startActiveSpan(r, t) {
  return t();
} };
var B2 = Symbol.for("drizzle:ViewBaseConfig");
function Fr2(r) {
  return r != null && typeof r.getSQL == "function";
}
function Ji2(r) {
  var e;
  const t = { sql: "", params: [] };
  for (const s of r)
    t.sql += s.sql, t.params.push(...s.params), (e = s.typings) != null && e.length && (t.typings || (t.typings = []), t.typings.push(...s.typings));
  return t;
}
var Dt2;
Dt2 = f;
var R = class {
  constructor(t) {
    n(this, "value");
    this.value = Array.isArray(t) ? t : [t];
  }
  getSQL() {
    return new g2([this]);
  }
};
n(R, Dt2, "StringChunk");
var Ft2;
Ft2 = f;
var G2 = class G3 {
  constructor(t) {
    n(this, "decoder", Er2);
    n(this, "shouldInlineParams", false);
    this.queryChunks = t;
  }
  append(t) {
    return this.queryChunks.push(...t.queryChunks), this;
  }
  toQuery(t) {
    return Wi2.startActiveSpan("drizzle.buildSQL", (e) => {
      const s = this.buildQueryFromSourceParams(this.queryChunks, t);
      return e == null || e.setAttributes({ "drizzle.query.text": s.sql, "drizzle.query.params": JSON.stringify(s.params) }), s;
    });
  }
  buildQueryFromSourceParams(t, e) {
    const s = Object.assign({}, e, { inlineParams: e.inlineParams || this.shouldInlineParams, paramStartIndex: e.paramStartIndex || { value: 0 } }), { escapeName: i, escapeParam: a, prepareTyping: u, inlineParams: o, paramStartIndex: h } = s;
    return Ji2(t.map((c) => {
      var m;
      if (d(c, R))
        return { sql: c.value.join(""), params: [] };
      if (d(c, ve3))
        return { sql: i(c.value), params: [] };
      if (c === void 0)
        return { sql: "", params: [] };
      if (Array.isArray(c)) {
        const y = [new R("(")];
        for (const [b, T2] of c.entries())
          y.push(T2), b < c.length - 1 && y.push(new R(", "));
        return y.push(new R(")")), this.buildQueryFromSourceParams(y, s);
      }
      if (d(c, G3))
        return this.buildQueryFromSourceParams(c.queryChunks, { ...s, inlineParams: o || c.shouldInlineParams });
      if (d(c, p)) {
        const y = c[p.Symbol.Schema], b = c[p.Symbol.Name];
        return { sql: y === void 0 ? i(b) : i(y) + "." + i(b), params: [] };
      }
      if (d(c, j2))
        return e.invokeSource === "indexes" ? { sql: i(c.name), params: [] } : { sql: i(c.table[p.Symbol.Name]) + "." + i(c.name), params: [] };
      if (d(c, se3)) {
        const y = c[B2].schema, b = c[B2].name;
        return { sql: y === void 0 ? i(b) : i(y) + "." + i(b), params: [] };
      }
      if (d(c, J2)) {
        if (d(c.value, k2))
          return { sql: a(h.value++, c), params: [c], typings: ["none"] };
        const y = c.value === null ? null : c.encoder.mapToDriverValue(c.value);
        if (d(y, G3))
          return this.buildQueryFromSourceParams([y], s);
        if (o)
          return { sql: this.mapInlineParam(y, s), params: [] };
        let b = ["none"];
        return u && (b = [u(c.encoder)]), { sql: a(h.value++, y), params: [y], typings: b };
      }
      return d(c, k2) ? { sql: a(h.value++, c), params: [c], typings: ["none"] } : d(c, G3.Aliased) && c.fieldAlias !== void 0 ? { sql: i(c.fieldAlias), params: [] } : d(c, z2) ? c._.isWith ? { sql: i(c._.alias), params: [] } : this.buildQueryFromSourceParams([new R("("), c._.sql, new R(") "), new ve3(c._.alias)], s) : Ui2(c) ? c.schema ? { sql: i(c.schema) + "." + i(c.enumName), params: [] } : { sql: i(c.enumName), params: [] } : Fr2(c) ? (m = c.shouldOmitSQLParens) != null && m.call(c) ? this.buildQueryFromSourceParams([c.getSQL()], s) : this.buildQueryFromSourceParams([new R("("), c.getSQL(), new R(")")], s) : o ? { sql: this.mapInlineParam(c, s), params: [] } : { sql: a(h.value++, c), params: [c], typings: ["none"] };
    }));
  }
  mapInlineParam(t, { escapeString: e }) {
    if (t === null)
      return "null";
    if (typeof t == "number" || typeof t == "boolean")
      return t.toString();
    if (typeof t == "string")
      return e(t);
    if (typeof t == "object") {
      const s = t.toString();
      return e(s === "[object Object]" ? JSON.stringify(t) : s);
    }
    throw new Error("Unexpected param value: " + t);
  }
  getSQL() {
    return this;
  }
  as(t) {
    return t === void 0 ? this : new G3.Aliased(this, t);
  }
  mapWith(t) {
    return this.decoder = typeof t == "function" ? { mapFromDriverValue: t } : t, this;
  }
  inlineParams() {
    return this.shouldInlineParams = true, this;
  }
  if(t) {
    return t ? this : void 0;
  }
};
n(G2, Ft2, "SQL");
var g2 = G2;
var Et2;
Et2 = f;
var ve3 = class {
  constructor(t) {
    n(this, "brand");
    this.value = t;
  }
  getSQL() {
    return new g2([this]);
  }
};
n(ve3, Et2, "Name");
function Xi2(r) {
  return typeof r == "object" && r !== null && "mapToDriverValue" in r && typeof r.mapToDriverValue == "function";
}
var Er2 = { mapFromDriverValue: (r) => r };
var Mr2 = { mapToDriverValue: (r) => r };
({ ...Er2, ...Mr2 });
var Mt2;
Mt2 = f;
var J2 = class {
  constructor(t, e = Mr2) {
    n(this, "brand");
    this.value = t, this.encoder = e;
  }
  getSQL() {
    return new g2([this]);
  }
};
n(J2, Mt2, "Param");
function l(r, ...t) {
  const e = [];
  (t.length > 0 || r.length > 0 && r[0] !== "") && e.push(new R(r[0]));
  for (const [s, i] of t.entries())
    e.push(i, new R(r[s + 1]));
  return new g2(e);
}
((r) => {
  function t() {
    return new g2([]);
  }
  r.empty = t;
  function e(h) {
    return new g2(h);
  }
  r.fromList = e;
  function s(h) {
    return new g2([new R(h)]);
  }
  r.raw = s;
  function i(h, c) {
    const m = [];
    for (const [y, b] of h.entries())
      y > 0 && c !== void 0 && m.push(c), m.push(b);
    return new g2(m);
  }
  r.join = i;
  function a(h) {
    return new ve3(h);
  }
  r.identifier = a;
  function u(h) {
    return new k2(h);
  }
  r.placeholder = u;
  function o(h, c) {
    return new J2(h, c);
  }
  r.param = o;
})(l || (l = {}));
((r) => {
  var e;
  e = f;
  const s = class s2 {
    constructor(a, u) {
      n(this, "isSelectionField", false);
      this.sql = a, this.fieldAlias = u;
    }
    getSQL() {
      return this.sql;
    }
    clone() {
      return new s2(this.sql, this.fieldAlias);
    }
  };
  n(s, e, "SQL.Aliased");
  let t = s;
  r.Aliased = t;
})(g2 || (g2 = {}));
var zt2;
zt2 = f;
var k2 = class {
  constructor(t) {
    this.name = t;
  }
  getSQL() {
    return new g2([this]);
  }
};
n(k2, zt2, "Placeholder");
function ge3(r, t) {
  return r.map((e) => {
    if (d(e, k2)) {
      if (!(e.name in t))
        throw new Error(`No value for placeholder "${e.name}" was provided`);
      return t[e.name];
    }
    if (d(e, J2) && d(e.value, k2)) {
      if (!(e.value.name in t))
        throw new Error(`No value for placeholder "${e.value.name}" was provided`);
      return e.encoder.mapToDriverValue(t[e.value.name]);
    }
    return e;
  });
}
var Kt2;
var Vt2;
Vt2 = f, Kt2 = B2;
var se3 = class {
  constructor({ name: t, schema: e, selectedFields: s, query: i }) {
    n(this, Kt2);
    this[B2] = { name: t, originalName: t, schema: e, selectedFields: s, query: i, isExisting: !i, isAlias: false };
  }
  getSQL() {
    return new g2([this]);
  }
};
n(se3, Vt2, "View");
j2.prototype.getSQL = function() {
  return new g2([this]);
};
p.prototype.getSQL = function() {
  return new g2([this]);
};
z2.prototype.getSQL = function() {
  return new g2([this]);
};
var Ut2;
Ut2 = f;
var de2 = class {
  constructor(t) {
    this.table = t;
  }
  get(t, e) {
    return e === "table" ? this.table : t[e];
  }
};
n(de2, Ut2, "ColumnAliasProxyHandler");
var Wt2;
Wt2 = f;
var Le3 = class {
  constructor(t, e) {
    this.alias = t, this.replaceOriginalName = e;
  }
  get(t, e) {
    if (e === p.Symbol.IsAlias)
      return true;
    if (e === p.Symbol.Name)
      return this.alias;
    if (this.replaceOriginalName && e === p.Symbol.OriginalName)
      return this.alias;
    if (e === B2)
      return { ...t[B2], name: this.alias, isAlias: true };
    if (e === p.Symbol.Columns) {
      const i = t[p.Symbol.Columns];
      if (!i)
        return i;
      const a = {};
      return Object.keys(i).map((u) => {
        a[u] = new Proxy(i[u], new de2(new Proxy(t, this)));
      }), a;
    }
    const s = t[e];
    return d(s, j2) ? new Proxy(s, new de2(new Proxy(t, this))) : s;
  }
};
n(Le3, Wt2, "TableAliasProxyHandler");
function Me3(r, t) {
  return new Proxy(r, new Le3(t, false));
}
function U2(r, t) {
  return new Proxy(r, new de2(new Proxy(r.table, new Le3(t, false))));
}
function zr2(r, t) {
  return new g2.Aliased(Ne3(r.sql, t), r.fieldAlias);
}
function Ne3(r, t) {
  return l.join(r.queryChunks.map((e) => d(e, j2) ? U2(e, t) : d(e, g2) ? Ne3(e, t) : d(e, g2.Aliased) ? zr2(e, t) : e));
}
var We3 = Symbol.for("drizzle:SQLiteInlineForeignKeys");
var Jt2;
var Xt2;
var Yt2;
var Gt2;
var Ht2;
var I2 = class extends (Ht2 = p, Gt2 = f, Yt2 = p.Symbol.Columns, Xt2 = We3, Jt2 = p.Symbol.ExtraConfigBuilder, Ht2) {
  constructor() {
    super(...arguments);
    n(this, Yt2);
    n(this, Xt2, []);
    n(this, Jt2);
  }
};
n(I2, Gt2, "SQLiteTable"), n(I2, "Symbol", Object.assign({}, p.Symbol, { InlineForeignKeys: We3 }));
function Yi2(r, t, e, s, i = r) {
  const a = new I2(r, s, i), u = Object.fromEntries(Object.entries(t).map(([h, c]) => {
    const m = c, y = m.build(a);
    return a[We3].push(...m.buildForeignKeys(y, a)), [h, y];
  })), o = Object.assign(a, u);
  return o[p.Symbol.Columns] = u, o[p.Symbol.ExtraConfigColumns] = u, o;
}
var Kr2 = (r, t, e) => Yi2(r, t);
var kt2;
kt2 = f;
var Vr = class {
  constructor(t, e) {
    n(this, "reference");
    n(this, "_onUpdate");
    n(this, "_onDelete");
    this.reference = () => {
      const { name: s, columns: i, foreignColumns: a } = t();
      return { name: s, columns: i, foreignTable: a[0].table, foreignColumns: a };
    }, e && (this._onUpdate = e.onUpdate, this._onDelete = e.onDelete);
  }
  onUpdate(t) {
    return this._onUpdate = t, this;
  }
  onDelete(t) {
    return this._onDelete = t, this;
  }
  build(t) {
    return new Ur2(t, this);
  }
};
n(Vr, kt2, "SQLiteForeignKeyBuilder");
var Zt2;
Zt2 = f;
var Ur2 = class {
  constructor(t, e) {
    n(this, "reference");
    n(this, "onUpdate");
    n(this, "onDelete");
    this.table = t, this.reference = e.reference, this.onUpdate = e._onUpdate, this.onDelete = e._onDelete;
  }
  getName() {
    const { name: t, columns: e, foreignColumns: s } = this.reference(), i = e.map((o) => o.name), a = s.map((o) => o.name), u = [this.table[I2.Symbol.Name], ...i, s[0].table[I2.Symbol.Name], ...a];
    return t ?? `${u.join("_")}_fk`;
  }
};
n(Ur2, Zt2, "SQLiteForeignKey");
function Gi2(r, t) {
  return `${r[I2.Symbol.Name]}_${t.join("_")}_unique`;
}
var es2;
var ts2;
var Oe3 = class extends (ts2 = Dr2, es2 = f, ts2) {
  constructor() {
    super(...arguments);
    n(this, "foreignKeyConfigs", []);
  }
  references(e, s = {}) {
    return this.foreignKeyConfigs.push({ ref: e, actions: s }), this;
  }
  unique(e) {
    return this.config.isUnique = true, this.config.uniqueName = e, this;
  }
  generatedAlwaysAs(e, s) {
    return this.config.generated = { as: e, type: "always", mode: (s == null ? void 0 : s.mode) ?? "virtual" }, this;
  }
  buildForeignKeys(e, s) {
    return this.foreignKeyConfigs.map(({ ref: i, actions: a }) => ((u, o) => {
      const h = new Vr(() => {
        const c = u();
        return { columns: [e], foreignColumns: [c] };
      });
      return o.onUpdate && h.onUpdate(o.onUpdate), o.onDelete && h.onDelete(o.onDelete), h.build(s);
    })(i, a));
  }
};
n(Oe3, es2, "SQLiteColumnBuilder");
var ss2;
var rs2;
var H3 = class extends (rs2 = j2, ss2 = f, rs2) {
  constructor(t, e) {
    e.uniqueName || (e.uniqueName = Gi2(t, [e.name])), super(t, e), this.table = t;
  }
};
n(H3, ss2, "SQLiteColumn");
var is2;
var ns2;
var je3 = class extends (ns2 = Oe3, is2 = f, ns2) {
  constructor(t, e, s) {
    super(t, e, s), this.config.autoIncrement = false;
  }
  primaryKey(t) {
    return t != null && t.autoIncrement && (this.config.autoIncrement = true), this.config.hasDefault = true, super.primaryKey();
  }
};
n(je3, is2, "SQLiteBaseIntegerBuilder");
var as2;
var ls2;
var Ce3 = class extends (ls2 = H3, as2 = f, ls2) {
  constructor() {
    super(...arguments);
    n(this, "autoIncrement", this.config.autoIncrement);
  }
  getSQLType() {
    return "integer";
  }
};
n(Ce3, as2, "SQLiteBaseInteger");
var os2;
var us2;
var Wr2 = class extends (us2 = je3, os2 = f, us2) {
  constructor(t) {
    super(t, "number", "SQLiteInteger");
  }
  build(t) {
    return new Jr(t, this.config);
  }
};
n(Wr2, os2, "SQLiteIntegerBuilder");
var cs2;
var hs2;
var Jr = class extends (hs2 = Ce3, cs2 = f, hs2) {
};
n(Jr, cs2, "SQLiteInteger");
var ds2;
var fs2;
var Xr2 = class extends (fs2 = je3, ds2 = f, fs2) {
  constructor(t, e) {
    super(t, "date", "SQLiteTimestamp"), this.config.mode = e;
  }
  defaultNow() {
    return this.default(l`(cast((julianday('now') - 2440587.5)*86400000 as integer))`);
  }
  build(t) {
    return new Yr2(t, this.config);
  }
};
n(Xr2, ds2, "SQLiteTimestampBuilder");
var ms2;
var ps2;
var Yr2 = class extends (ps2 = Ce3, ms2 = f, ps2) {
  constructor() {
    super(...arguments);
    n(this, "mode", this.config.mode);
  }
  mapFromDriverValue(e) {
    return this.config.mode === "timestamp" ? new Date(e * 1e3) : new Date(e);
  }
  mapToDriverValue(e) {
    const s = e.getTime();
    return this.config.mode === "timestamp" ? Math.floor(s / 1e3) : s;
  }
};
n(Yr2, ms2, "SQLiteTimestamp");
var ys2;
var gs2;
var Gr2 = class extends (gs2 = je3, ys2 = f, gs2) {
  constructor(t, e) {
    super(t, "boolean", "SQLiteBoolean"), this.config.mode = e;
  }
  build(t) {
    return new Hr2(t, this.config);
  }
};
n(Gr2, ys2, "SQLiteBooleanBuilder");
var bs2;
var ws2;
var Hr2 = class extends (ws2 = Ce3, bs2 = f, ws2) {
  constructor() {
    super(...arguments);
    n(this, "mode", this.config.mode);
  }
  mapFromDriverValue(e) {
    return Number(e) === 1;
  }
  mapToDriverValue(e) {
    return e ? 1 : 0;
  }
};
n(Hr2, bs2, "SQLiteBoolean");
function we2(r, t) {
  return (t == null ? void 0 : t.mode) === "timestamp" || (t == null ? void 0 : t.mode) === "timestamp_ms" ? new Xr2(r, t.mode) : (t == null ? void 0 : t.mode) === "boolean" ? new Gr2(r, t.mode) : new Wr2(r);
}
var Ss2;
var vs2;
var kr2 = class extends (vs2 = Oe3, Ss2 = f, vs2) {
  constructor(t, e) {
    super(t, "string", "SQLiteText"), this.config.enumValues = e.enum, this.config.length = e.length;
  }
  build(t) {
    return new Zr2(t, this.config);
  }
};
n(kr2, Ss2, "SQLiteTextBuilder");
var Ns2;
var Qs2;
var Zr2 = class extends (Qs2 = H3, Ns2 = f, Qs2) {
  constructor(e, s) {
    super(e, s);
    n(this, "enumValues", this.config.enumValues);
    n(this, "length", this.config.length);
  }
  getSQLType() {
    return `text${this.config.length ? `(${this.config.length})` : ""}`;
  }
};
n(Zr2, Ns2, "SQLiteText");
var $s2;
var _s2;
var ei2 = class extends (_s2 = Oe3, $s2 = f, _s2) {
  constructor(t) {
    super(t, "json", "SQLiteTextJson");
  }
  build(t) {
    return new ti2(t, this.config);
  }
};
n(ei2, $s2, "SQLiteTextJsonBuilder");
var qs2;
var Ts2;
var ti2 = class extends (Ts2 = H3, qs2 = f, Ts2) {
  getSQLType() {
    return "text";
  }
  mapFromDriverValue(t) {
    return JSON.parse(t);
  }
  mapToDriverValue(t) {
    return JSON.stringify(t);
  }
};
n(ti2, qs2, "SQLiteTextJson");
function Se3(r, t = {}) {
  return t.mode === "json" ? new ei2(r) : new kr2(r, t);
}
var xs2;
xs2 = f;
var _e3 = class _e4 {
  constructor(t) {
    n(this, "config");
    this.config = { ...t };
  }
  get(t, e) {
    if (e === "_")
      return { ...t._, selectedFields: new Proxy(t._.selectedFields, this) };
    if (e === B2)
      return { ...t[B2], selectedFields: new Proxy(t[B2].selectedFields, this) };
    if (typeof e == "symbol")
      return t[e];
    const i = (d(t, z2) ? t._.selectedFields : d(t, se3) ? t[B2].selectedFields : t)[e];
    if (d(i, g2.Aliased)) {
      if (this.config.sqlAliasedBehavior === "sql" && !i.isSelectionField)
        return i.sql;
      const a = i.clone();
      return a.isSelectionField = true, a;
    }
    if (d(i, g2)) {
      if (this.config.sqlBehavior === "sql")
        return i;
      throw new Error(`You tried to reference "${e}" field from a subquery, which is a raw SQL field, but it doesn't have an alias declared. Please add an alias to the field using ".as('alias')" method.`);
    }
    return d(i, j2) ? this.config.alias ? new Proxy(i, new de2(new Proxy(i.table, new Le3(this.config.alias, this.config.replaceOriginalName ?? false)))) : i : typeof i != "object" || i === null ? i : new Proxy(i, new _e4(this.config));
  }
};
n(_e3, xs2, "SelectionProxyHandler");
var M2 = _e3;
var Ls2;
var Os2;
Os2 = f, Ls2 = Symbol.toStringTag;
var Y2 = class {
  constructor() {
    n(this, Ls2, "QueryPromise");
  }
  catch(t) {
    return this.then(void 0, t);
  }
  finally(t) {
    return this.then((e) => (t == null || t(), e), (e) => {
      throw t == null || t(), e;
    });
  }
  then(t, e) {
    return this.execute().then(t, e);
  }
};
n(Y2, Os2, "QueryPromise");
function ze3(r, t, e) {
  const s = {}, i = r.reduce((a, { path: u, field: o }, h) => {
    let c;
    d(o, j2) ? c = o : d(o, g2) ? c = o.decoder : c = o.sql.decoder;
    let m = a;
    for (const [y, b] of u.entries())
      if (y < u.length - 1)
        b in m || (m[b] = {}), m = m[b];
      else {
        const T2 = t[h], N2 = m[b] = T2 === null ? null : c.mapFromDriverValue(T2);
        if (e && d(o, j2) && u.length === 2) {
          const $ = u[0];
          $ in s ? typeof s[$] == "string" && s[$] !== ie2(o.table) && (s[$] = false) : s[$] = N2 === null ? ie2(o.table) : false;
        }
      }
    return a;
  }, {});
  if (e && Object.keys(s).length > 0)
    for (const [a, u] of Object.entries(s))
      typeof u == "string" && !e[u] && (i[a] = null);
  return i;
}
function Z3(r, t) {
  return Object.entries(r).reduce((e, [s, i]) => {
    if (typeof s != "string")
      return e;
    const a = t ? [...t, s] : [s];
    return d(i, j2) || d(i, g2) || d(i, g2.Aliased) ? e.push({ path: a, field: i }) : d(i, p) ? e.push(...Z3(i[p.Symbol.Columns], a)) : e.push(...Z3(i, a)), e;
  }, []);
}
function si2(r, t) {
  const e = Object.keys(r), s = Object.keys(t);
  if (e.length !== s.length)
    return false;
  for (const [i, a] of e.entries())
    if (a !== s[i])
      return false;
  return true;
}
function ri2(r, t) {
  const e = Object.entries(t).filter(([, s]) => s !== void 0).map(([s, i]) => d(i, g2) ? [s, i] : [s, new J2(i, r[p.Symbol.Columns][s])]);
  if (e.length === 0)
    throw new Error("No values to set");
  return Object.fromEntries(e);
}
function Hi2(r, t) {
  for (const e of t)
    for (const s of Object.getOwnPropertyNames(e.prototype))
      s !== "constructor" && Object.defineProperty(r.prototype, s, Object.getOwnPropertyDescriptor(e.prototype, s) || /* @__PURE__ */ Object.create(null));
}
function ki2(r) {
  return r[p.Symbol.Columns];
}
function gt2(r) {
  return d(r, z2) ? r._.alias : d(r, se3) ? r[B2].name : d(r, g2) ? void 0 : r[p.Symbol.IsAlias] ? r[p.Symbol.Name] : r[p.Symbol.BaseName];
}
var js2;
var Cs2;
var Je3 = class extends (Cs2 = Y2, js2 = f, Cs2) {
  constructor(e, s, i, a) {
    super();
    n(this, "config");
    n(this, "run", (e2) => this._prepare().run(e2));
    n(this, "all", (e2) => this._prepare().all(e2));
    n(this, "get", (e2) => this._prepare().get(e2));
    n(this, "values", (e2) => this._prepare().values(e2));
    this.table = e, this.session = s, this.dialect = i, this.config = { table: e, withList: a };
  }
  where(e) {
    return this.config.where = e, this;
  }
  returning(e = this.table[I2.Symbol.Columns]) {
    return this.config.returning = Z3(e), this;
  }
  getSQL() {
    return this.dialect.buildDeleteQuery(this.config);
  }
  toSQL() {
    const { typings: e, ...s } = this.dialect.sqlToQuery(this.getSQL());
    return s;
  }
  _prepare(e = true) {
    return this.session[e ? "prepareOneTimeQuery" : "prepareQuery"](this.dialect.sqlToQuery(this.getSQL()), this.config.returning, this.config.returning ? "all" : "run", true);
  }
  prepare() {
    return this._prepare(false);
  }
  async execute(e) {
    return this._prepare().execute(e);
  }
  $dynamic() {
    return this;
  }
};
n(Je3, js2, "SQLiteDelete");
var Rs2;
Rs2 = f;
var Xe3 = class {
  constructor(t, e, s, i) {
    this.table = t, this.session = e, this.dialect = s, this.withList = i;
  }
  values(t) {
    if (t = Array.isArray(t) ? t : [t], t.length === 0)
      throw new Error("values() must be called with at least one value");
    const e = t.map((s) => {
      const i = {}, a = this.table[p.Symbol.Columns];
      for (const u of Object.keys(s)) {
        const o = s[u];
        i[u] = d(o, g2) ? o : new J2(o, a[u]);
      }
      return i;
    });
    return new ii2(this.table, e, this.session, this.dialect, this.withList);
  }
};
n(Xe3, Rs2, "SQLiteInsertBuilder");
var As2;
var Ps2;
var ii2 = class extends (Ps2 = Y2, As2 = f, Ps2) {
  constructor(e, s, i, a, u) {
    super();
    n(this, "config");
    n(this, "run", (e2) => this._prepare().run(e2));
    n(this, "all", (e2) => this._prepare().all(e2));
    n(this, "get", (e2) => this._prepare().get(e2));
    n(this, "values", (e2) => this._prepare().values(e2));
    this.session = i, this.dialect = a, this.config = { table: e, values: s, withList: u };
  }
  returning(e = this.config.table[I2.Symbol.Columns]) {
    return this.config.returning = Z3(e), this;
  }
  onConflictDoNothing(e = {}) {
    if (e.target === void 0)
      this.config.onConflict = l`do nothing`;
    else {
      const s = Array.isArray(e.target) ? l`${e.target}` : l`${[e.target]}`, i = e.where ? l` where ${e.where}` : l``;
      this.config.onConflict = l`${s} do nothing${i}`;
    }
    return this;
  }
  onConflictDoUpdate(e) {
    if (e.where && (e.targetWhere || e.setWhere))
      throw new Error('You cannot use both "where" and "targetWhere"/"setWhere" at the same time - "where" is deprecated, use "targetWhere" or "setWhere" instead.');
    const s = e.where ? l` where ${e.where}` : void 0, i = e.targetWhere ? l` where ${e.targetWhere}` : void 0, a = e.setWhere ? l` where ${e.setWhere}` : void 0, u = Array.isArray(e.target) ? l`${e.target}` : l`${[e.target]}`, o = this.dialect.buildUpdateSet(this.config.table, ri2(this.config.table, e.set));
    return this.config.onConflict = l`${u}${i} do update set ${o}${s}${a}`, this;
  }
  getSQL() {
    return this.dialect.buildInsertQuery(this.config);
  }
  toSQL() {
    const { typings: e, ...s } = this.dialect.sqlToQuery(this.getSQL());
    return s;
  }
  _prepare(e = true) {
    return this.session[e ? "prepareOneTimeQuery" : "prepareQuery"](this.dialect.sqlToQuery(this.getSQL()), this.config.returning, this.config.returning ? "all" : "run", true);
  }
  prepare() {
    return this._prepare(false);
  }
  async execute() {
    return this.config.returning ? this.all() : this.run();
  }
  $dynamic() {
    return this;
  }
};
n(ii2, As2, "SQLiteInsert");
var Is2;
var Bs2;
var Re2 = class extends (Bs2 = Error, Is2 = f, Bs2) {
  constructor({ message: t, cause: e }) {
    super(t), this.name = "DrizzleError", this.cause = e;
  }
};
n(Re2, Is2, "DrizzleError");
var Ds2;
var Fs2;
var ni2 = class extends (Fs2 = Re2, Ds2 = f, Fs2) {
  constructor() {
    super({ message: "Rollback" });
  }
};
n(ni2, Ds2, "TransactionRollbackError");
var Es2;
Es2 = f;
var ai2 = class {
  constructor(t, e) {
    n(this, "columns");
    n(this, "name");
    this.columns = t, this.name = e;
  }
  build(t) {
    return new li2(t, this.columns, this.name);
  }
};
n(ai2, Es2, "PgPrimaryKeyBuilder");
var Ms2;
Ms2 = f;
var li2 = class {
  constructor(t, e, s) {
    n(this, "columns");
    n(this, "name");
    this.table = t, this.columns = e, this.name = s;
  }
  getName() {
    return this.name ?? `${this.table[Ue2.Symbol.Name]}_${this.columns.map((t) => t.name).join("_")}_pk`;
  }
};
n(li2, Ms2, "PgPrimaryKey");
function D3(r, t) {
  return Xi2(t) && !Fr2(r) && !d(r, J2) && !d(r, k2) && !d(r, j2) && !d(r, p) && !d(r, se3) ? new J2(r, t) : r;
}
var oi2 = (r, t) => l`${r} = ${D3(t, r)}`;
var Zi2 = (r, t) => l`${r} <> ${D3(t, r)}`;
function Ye3(...r) {
  const t = r.filter((e) => e !== void 0);
  if (t.length !== 0)
    return t.length === 1 ? new g2(t) : new g2([new R("("), l.join(t, new R(" and ")), new R(")")]);
}
function en2(...r) {
  const t = r.filter((e) => e !== void 0);
  if (t.length !== 0)
    return t.length === 1 ? new g2(t) : new g2([new R("("), l.join(t, new R(" or ")), new R(")")]);
}
function tn2(r) {
  return l`not ${r}`;
}
var sn2 = (r, t) => l`${r} > ${D3(t, r)}`;
var rn2 = (r, t) => l`${r} >= ${D3(t, r)}`;
var nn2 = (r, t) => l`${r} < ${D3(t, r)}`;
var an2 = (r, t) => l`${r} <= ${D3(t, r)}`;
function ln2(r, t) {
  return Array.isArray(t) ? t.length === 0 ? l`false` : l`${r} in ${t.map((e) => D3(e, r))}` : l`${r} in ${D3(t, r)}`;
}
function on2(r, t) {
  return Array.isArray(t) ? t.length === 0 ? l`true` : l`${r} not in ${t.map((e) => D3(e, r))}` : l`${r} not in ${D3(t, r)}`;
}
function un2(r) {
  return l`${r} is null`;
}
function cn2(r) {
  return l`${r} is not null`;
}
function hn2(r) {
  return l`exists ${r}`;
}
function dn2(r) {
  return l`not exists ${r}`;
}
function fn2(r, t, e) {
  return l`${r} between ${D3(t, r)} and ${D3(e, r)}`;
}
function mn2(r, t, e) {
  return l`${r} not between ${D3(t, r)} and ${D3(e, r)}`;
}
function pn2(r, t) {
  return l`${r} like ${t}`;
}
function yn2(r, t) {
  return l`${r} not like ${t}`;
}
function gn2(r, t) {
  return l`${r} ilike ${t}`;
}
function bn2(r, t) {
  return l`${r} not ilike ${t}`;
}
function wn2(r) {
  return l`${r} asc`;
}
function Sn2(r) {
  return l`${r} desc`;
}
var zs2;
zs2 = f;
var st2 = class {
  constructor(t, e, s) {
    n(this, "referencedTableName");
    n(this, "fieldName");
    this.sourceTable = t, this.referencedTable = e, this.relationName = s, this.referencedTableName = e[p.Symbol.Name];
  }
};
n(st2, zs2, "Relation");
var Ks2;
Ks2 = f;
var rt2 = class {
  constructor(t, e) {
    this.table = t, this.config = e;
  }
};
n(rt2, Ks2, "Relations");
var Vs2;
var Us2;
var qe2 = class qe3 extends (Us2 = st2, Vs2 = f, Us2) {
  constructor(t, e, s, i) {
    super(t, e, s == null ? void 0 : s.relationName), this.config = s, this.isNullable = i;
  }
  withFieldName(t) {
    const e = new qe3(this.sourceTable, this.referencedTable, this.config, this.isNullable);
    return e.fieldName = t, e;
  }
};
n(qe2, Vs2, "One");
var ee3 = qe2;
var Ws2;
var Js2;
var Te3 = class Te4 extends (Js2 = st2, Ws2 = f, Js2) {
  constructor(t, e, s) {
    super(t, e, s == null ? void 0 : s.relationName), this.config = s;
  }
  withFieldName(t) {
    const e = new Te4(this.sourceTable, this.referencedTable, this.config);
    return e.fieldName = t, e;
  }
};
n(Te3, Ws2, "Many");
var Qe3 = Te3;
function vn2() {
  return { and: Ye3, between: fn2, eq: oi2, exists: hn2, gt: sn2, gte: rn2, ilike: gn2, inArray: ln2, isNull: un2, isNotNull: cn2, like: pn2, lt: nn2, lte: an2, ne: Zi2, not: tn2, notBetween: mn2, notExists: dn2, notLike: yn2, notIlike: bn2, notInArray: on2, or: en2, sql: l };
}
function Nn2() {
  return { sql: l, asc: wn2, desc: Sn2 };
}
function Qn2(r, t) {
  var a;
  Object.keys(r).length === 1 && "default" in r && !d(r.default, p) && (r = r.default);
  const e = {}, s = {}, i = {};
  for (const [u, o] of Object.entries(r))
    if (d(o, p)) {
      const h = he2(o), c = s[h];
      e[h] = u, i[u] = { tsName: u, dbName: o[p.Symbol.Name], schema: o[p.Symbol.Schema], columns: o[p.Symbol.Columns], relations: (c == null ? void 0 : c.relations) ?? {}, primaryKey: (c == null ? void 0 : c.primaryKey) ?? [] };
      for (const y of Object.values(o[p.Symbol.Columns]))
        y.primary && i[u].primaryKey.push(y);
      const m = (a = o[p.Symbol.ExtraConfigBuilder]) == null ? void 0 : a.call(o, o[p.Symbol.ExtraConfigColumns]);
      if (m)
        for (const y of Object.values(m))
          d(y, ai2) && i[u].primaryKey.push(...y.columns);
    } else if (d(o, rt2)) {
      const h = he2(o.table), c = e[h], m = o.config(t(o.table));
      let y;
      for (const [b, T2] of Object.entries(m))
        if (c) {
          const N2 = i[c];
          N2.relations[b] = T2;
        } else
          h in s || (s[h] = { relations: {}, primaryKey: y }), s[h].relations[b] = T2;
    }
  return { tables: i, tableNamesMap: e };
}
function ui2(r, t) {
  return new rt2(r, (e) => Object.fromEntries(Object.entries(t(e)).map(([s, i]) => [s, i.withFieldName(s)])));
}
function $n2(r) {
  return function(e, s) {
    return new ee3(r, e, s, (s == null ? void 0 : s.fields.reduce((i, a) => i && a.notNull, true)) ?? false);
  };
}
function _n2(r) {
  return function(e, s) {
    return new Qe3(r, e, s);
  };
}
function qn2(r, t, e) {
  if (d(e, ee3) && e.config)
    return { fields: e.config.fields, references: e.config.references };
  const s = t[he2(e.referencedTable)];
  if (!s)
    throw new Error(`Table "${e.referencedTable[p.Symbol.Name]}" not found in schema`);
  const i = r[s];
  if (!i)
    throw new Error(`Table "${s}" not found in schema`);
  const a = e.sourceTable, u = t[he2(a)];
  if (!u)
    throw new Error(`Table "${a[p.Symbol.Name]}" not found in schema`);
  const o = [];
  for (const h of Object.values(i.relations))
    (e.relationName && e !== h && h.relationName === e.relationName || !e.relationName && h.referencedTable === e.sourceTable) && o.push(h);
  if (o.length > 1)
    throw e.relationName ? new Error(`There are multiple relations with name "${e.relationName}" in table "${s}"`) : new Error(`There are multiple relations between "${s}" and "${e.sourceTable[p.Symbol.Name]}". Please specify relation name`);
  if (o[0] && d(o[0], ee3) && o[0].config)
    return { fields: o[0].config.references, references: o[0].config.fields };
  throw new Error(`There is not enough information to infer relation "${u}.${e.fieldName}"`);
}
function Tn2(r) {
  return { one: $n2(r), many: _n2(r) };
}
function Ge2(r, t, e, s, i = (a) => a) {
  const a = {};
  for (const [u, o] of s.entries())
    if (o.isJson) {
      const h = t.relations[o.tsKey], c = e[u], m = typeof c == "string" ? JSON.parse(c) : c;
      a[o.tsKey] = d(h, ee3) ? m && Ge2(r, r[o.relationTableTsKey], m, o.selection, i) : m.map((y) => Ge2(r, r[o.relationTableTsKey], y, o.selection, i));
    } else {
      const h = i(e[u]), c = o.field;
      let m;
      d(c, j2) ? m = c : d(c, g2) ? m = c.decoder : m = c.sql.decoder, a[o.tsKey] = h === null ? null : m.mapFromDriverValue(h);
    }
  return a;
}
var Xs2;
var Ys2;
var it2 = class extends (Ys2 = se3, Xs2 = f, Ys2) {
};
n(it2, Xs2, "SQLiteViewBase");
var Gs2;
Gs2 = f;
var nt2 = class {
  escapeName(t) {
    return `"${t}"`;
  }
  escapeParam(t) {
    return "?";
  }
  escapeString(t) {
    return `'${t.replace(/'/g, "''")}'`;
  }
  buildWithCTE(t) {
    if (!(t != null && t.length))
      return;
    const e = [l`with `];
    for (const [s, i] of t.entries())
      e.push(l`${l.identifier(i._.alias)} as (${i._.sql})`), s < t.length - 1 && e.push(l`, `);
    return e.push(l` `), l.join(e);
  }
  buildDeleteQuery({ table: t, where: e, returning: s, withList: i }) {
    const a = this.buildWithCTE(i), u = s ? l` returning ${this.buildSelection(s, { isSingleTable: true })}` : void 0, o = e ? l` where ${e}` : void 0;
    return l`${a}delete from ${t}${o}${u}`;
  }
  buildUpdateSet(t, e) {
    const s = t[p.Symbol.Columns], i = Object.keys(s).filter((u) => {
      var o;
      return e[u] !== void 0 || ((o = s[u]) == null ? void 0 : o.onUpdateFn) !== void 0;
    }), a = i.length;
    return l.join(i.flatMap((u, o) => {
      const h = s[u], c = e[u] ?? l.param(h.onUpdateFn(), h), m = l`${l.identifier(h.name)} = ${c}`;
      return o < a - 1 ? [m, l.raw(", ")] : [m];
    }));
  }
  buildUpdateQuery({ table: t, set: e, where: s, returning: i, withList: a }) {
    const u = this.buildWithCTE(a), o = this.buildUpdateSet(t, e), h = i ? l` returning ${this.buildSelection(i, { isSingleTable: true })}` : void 0, c = s ? l` where ${s}` : void 0;
    return l`${u}update ${t} set ${o}${c}${h}`;
  }
  buildSelection(t, { isSingleTable: e = false } = {}) {
    const s = t.length, i = t.flatMap(({ field: a }, u) => {
      const o = [];
      if (d(a, g2.Aliased) && a.isSelectionField)
        o.push(l.identifier(a.fieldAlias));
      else if (d(a, g2.Aliased) || d(a, g2)) {
        const h = d(a, g2.Aliased) ? a.sql : a;
        e ? o.push(new g2(h.queryChunks.map((c) => d(c, j2) ? l.identifier(c.name) : c))) : o.push(h), d(a, g2.Aliased) && o.push(l` as ${l.identifier(a.fieldAlias)}`);
      } else if (d(a, j2)) {
        const h = a.table[p.Symbol.Name], c = a.name;
        e ? o.push(l.identifier(c)) : o.push(l`${l.identifier(h)}.${l.identifier(c)}`);
      }
      return u < s - 1 && o.push(l`, `), o;
    });
    return l.join(i);
  }
  buildSelectQuery({ withList: t, fields: e, fieldsFlat: s, where: i, having: a, table: u, joins: o, orderBy: h, groupBy: c, limit: m, offset: y, distinct: b, setOperators: T2 }) {
    const N2 = s ?? Z3(e);
    for (const A2 of N2)
      if (d(A2.field, j2) && ie2(A2.field.table) !== (d(u, z2) ? u._.alias : d(u, it2) ? u[B2].name : d(u, g2) ? void 0 : ie2(u)) && !((O3) => o == null ? void 0 : o.some(({ alias: V2 }) => V2 === (O3[p.Symbol.IsAlias] ? ie2(O3) : O3[p.Symbol.BaseName])))(A2.field.table)) {
        const O3 = ie2(A2.field.table);
        throw new Error(`Your "${A2.path.join("->")}" field references a column "${O3}"."${A2.field.name}", but the table "${O3}" is not part of the query! Did you forget to join it?`);
      }
    const $ = !o || o.length === 0, x2 = this.buildWithCTE(t), L3 = b ? l` distinct` : void 0, _2 = this.buildSelection(N2, { isSingleTable: $ }), C = d(u, p) && u[p.Symbol.OriginalName] !== u[p.Symbol.Name] ? l`${l.identifier(u[p.Symbol.OriginalName])} ${l.identifier(u[p.Symbol.Name])}` : u, Q3 = [];
    if (o)
      for (const [A2, O3] of o.entries()) {
        A2 === 0 && Q3.push(l` `);
        const V2 = O3.table;
        if (d(V2, I2)) {
          const De4 = V2[I2.Symbol.Name], ot3 = V2[I2.Symbol.Schema], ut3 = V2[I2.Symbol.OriginalName], ct3 = De4 === ut3 ? void 0 : O3.alias;
          Q3.push(l`${l.raw(O3.joinType)} join ${ot3 ? l`${l.identifier(ot3)}.` : void 0}${l.identifier(ut3)}${ct3 && l` ${l.identifier(ct3)}`} on ${O3.on}`);
        } else
          Q3.push(l`${l.raw(O3.joinType)} join ${V2} on ${O3.on}`);
        A2 < o.length - 1 && Q3.push(l` `);
      }
    const F3 = l.join(Q3), re3 = i ? l` where ${i}` : void 0, w = a ? l` having ${a}` : void 0, S2 = [];
    if (h)
      for (const [A2, O3] of h.entries())
        S2.push(O3), A2 < h.length - 1 && S2.push(l`, `);
    const P2 = [];
    if (c)
      for (const [A2, O3] of c.entries())
        P2.push(O3), A2 < c.length - 1 && P2.push(l`, `);
    const me3 = P2.length > 0 ? l` group by ${l.join(P2)}` : void 0, Be4 = S2.length > 0 ? l` order by ${l.join(S2)}` : void 0, oe2 = typeof m == "object" || typeof m == "number" && m >= 0 ? l` limit ${m}` : void 0, pe3 = y ? l` offset ${y}` : void 0, ye4 = l`${x2}select${L3} ${_2} from ${C}${F3}${re3}${me3}${w}${Be4}${oe2}${pe3}`;
    return T2.length > 0 ? this.buildSetOperations(ye4, T2) : ye4;
  }
  buildSetOperations(t, e) {
    const [s, ...i] = e;
    if (!s)
      throw new Error("Cannot pass undefined values to any set operator");
    return i.length === 0 ? this.buildSetOperationQuery({ leftSelect: t, setOperator: s }) : this.buildSetOperations(this.buildSetOperationQuery({ leftSelect: t, setOperator: s }), i);
  }
  buildSetOperationQuery({ leftSelect: t, setOperator: { type: e, isAll: s, rightSelect: i, limit: a, orderBy: u, offset: o } }) {
    const h = l`${t.getSQL()} `, c = l`${i.getSQL()}`;
    let m;
    if (u && u.length > 0) {
      const N2 = [];
      for (const $ of u)
        if (d($, H3))
          N2.push(l.identifier($.name));
        else if (d($, g2)) {
          for (let x2 = 0; x2 < $.queryChunks.length; x2++) {
            const L3 = $.queryChunks[x2];
            d(L3, H3) && ($.queryChunks[x2] = l.identifier(L3.name));
          }
          N2.push(l`${$}`);
        } else
          N2.push(l`${$}`);
      m = l` order by ${l.join(N2, l`, `)}`;
    }
    const y = typeof a == "object" || typeof a == "number" && a >= 0 ? l` limit ${a}` : void 0, b = l.raw(`${e} ${s ? "all " : ""}`), T2 = o ? l` offset ${o}` : void 0;
    return l`${h}${b}${c}${m}${y}${T2}`;
  }
  buildInsertQuery({ table: t, values: e, onConflict: s, returning: i, withList: a }) {
    const u = [], o = t[p.Symbol.Columns], h = Object.entries(o).filter(([N2, $]) => !$.shouldDisableInsert()), c = h.map(([, N2]) => l.identifier(N2.name));
    for (const [N2, $] of e.entries()) {
      const x2 = [];
      for (const [L3, _2] of h) {
        const C = $[L3];
        if (C === void 0 || d(C, J2) && C.value === void 0) {
          let Q3;
          if (_2.default !== null && _2.default !== void 0)
            Q3 = d(_2.default, g2) ? _2.default : l.param(_2.default, _2);
          else if (_2.defaultFn !== void 0) {
            const F3 = _2.defaultFn();
            Q3 = d(F3, g2) ? F3 : l.param(F3, _2);
          } else if (!_2.default && _2.onUpdateFn !== void 0) {
            const F3 = _2.onUpdateFn();
            Q3 = d(F3, g2) ? F3 : l.param(F3, _2);
          } else
            Q3 = l`null`;
          x2.push(Q3);
        } else
          x2.push(C);
      }
      u.push(x2), N2 < e.length - 1 && u.push(l`, `);
    }
    const m = this.buildWithCTE(a), y = l.join(u), b = i ? l` returning ${this.buildSelection(i, { isSingleTable: true })}` : void 0, T2 = s ? l` on conflict ${s}` : void 0;
    return l`${m}insert into ${t} ${c} values ${y}${T2}${b}`;
  }
  sqlToQuery(t, e) {
    return t.toQuery({ escapeName: this.escapeName, escapeParam: this.escapeParam, escapeString: this.escapeString, invokeSource: e });
  }
  buildRelationalQuery({ fullSchema: t, schema: e, tableNamesMap: s, table: i, tableConfig: a, queryConfig: u, tableAlias: o, nestedQueryRelation: h, joinOn: c }) {
    let m = [], y, b, T2 = [], N2;
    const $ = [];
    if (u === true)
      m = Object.entries(a.columns).map(([_2, C]) => ({ dbKey: C.name, tsKey: _2, field: U2(C, o), relationTableTsKey: void 0, isJson: false, selection: [] }));
    else {
      const L3 = Object.fromEntries(Object.entries(a.columns).map(([w, S2]) => [w, U2(S2, o)]));
      if (u.where) {
        const w = typeof u.where == "function" ? u.where(L3, vn2()) : u.where;
        N2 = w && Ne3(w, o);
      }
      const _2 = [];
      let C = [];
      if (u.columns) {
        let w = false;
        for (const [S2, P2] of Object.entries(u.columns))
          P2 !== void 0 && S2 in a.columns && (!w && P2 === true && (w = true), C.push(S2));
        C.length > 0 && (C = w ? C.filter((S2) => {
          var P2;
          return ((P2 = u.columns) == null ? void 0 : P2[S2]) === true;
        }) : Object.keys(a.columns).filter((S2) => !C.includes(S2)));
      } else
        C = Object.keys(a.columns);
      for (const w of C) {
        const S2 = a.columns[w];
        _2.push({ tsKey: w, value: S2 });
      }
      let Q3 = [];
      u.with && (Q3 = Object.entries(u.with).filter((w) => !!w[1]).map(([w, S2]) => ({ tsKey: w, queryConfig: S2, relation: a.relations[w] })));
      let F3;
      if (u.extras) {
        F3 = typeof u.extras == "function" ? u.extras(L3, { sql: l }) : u.extras;
        for (const [w, S2] of Object.entries(F3))
          _2.push({ tsKey: w, value: zr2(S2, o) });
      }
      for (const { tsKey: w, value: S2 } of _2)
        m.push({ dbKey: d(S2, g2.Aliased) ? S2.fieldAlias : a.columns[w].name, tsKey: w, field: d(S2, j2) ? U2(S2, o) : S2, relationTableTsKey: void 0, isJson: false, selection: [] });
      let re3 = typeof u.orderBy == "function" ? u.orderBy(L3, Nn2()) : u.orderBy ?? [];
      Array.isArray(re3) || (re3 = [re3]), T2 = re3.map((w) => d(w, j2) ? U2(w, o) : Ne3(w, o)), y = u.limit, b = u.offset;
      for (const { tsKey: w, queryConfig: S2, relation: P2 } of Q3) {
        const me3 = qn2(e, s, P2), Be4 = he2(P2.referencedTable), oe2 = s[Be4], pe3 = `${o}_${w}`, ye4 = Ye3(...me3.fields.map((V2, De4) => oi2(U2(me3.references[De4], pe3), U2(V2, o)))), A2 = this.buildRelationalQuery({ fullSchema: t, schema: e, tableNamesMap: s, table: t[oe2], tableConfig: e[oe2], queryConfig: d(P2, ee3) ? S2 === true ? { limit: 1 } : { ...S2, limit: 1 } : S2, tableAlias: pe3, joinOn: ye4, nestedQueryRelation: P2 }), O3 = l`(${A2.sql})`.as(w);
        m.push({ dbKey: w, tsKey: w, field: O3, relationTableTsKey: oe2, isJson: true, selection: A2.selection });
      }
    }
    if (m.length === 0)
      throw new Re2({ message: `No fields selected for table "${a.tsName}" ("${o}"). You need to have at least one item in "columns", "with" or "extras". If you need to select all columns, omit the "columns" key or set it to undefined.` });
    let x2;
    if (N2 = Ye3(c, N2), h) {
      let L3 = l`json_array(${l.join(m.map(({ field: Q3 }) => d(Q3, H3) ? l.identifier(Q3.name) : d(Q3, g2.Aliased) ? Q3.sql : Q3), l`, `)})`;
      d(h, Qe3) && (L3 = l`coalesce(json_group_array(${L3}), json_array())`);
      const _2 = [{ dbKey: "data", tsKey: "data", field: L3.as("data"), isJson: true, relationTableTsKey: a.tsName, selection: m }];
      y !== void 0 || b !== void 0 || T2.length > 0 ? (x2 = this.buildSelectQuery({ table: Me3(i, o), fields: {}, fieldsFlat: [{ path: [], field: l.raw("*") }], where: N2, limit: y, offset: b, orderBy: T2, setOperators: [] }), N2 = void 0, y = void 0, b = void 0, T2 = void 0) : x2 = Me3(i, o), x2 = this.buildSelectQuery({ table: d(x2, I2) ? x2 : new z2(x2, {}, o), fields: {}, fieldsFlat: _2.map(({ field: Q3 }) => ({ path: [], field: d(Q3, j2) ? U2(Q3, o) : Q3 })), joins: $, where: N2, limit: y, offset: b, orderBy: T2, setOperators: [] });
    } else
      x2 = this.buildSelectQuery({ table: Me3(i, o), fields: {}, fieldsFlat: m.map(({ field: L3 }) => ({ path: [], field: d(L3, j2) ? U2(L3, o) : L3 })), joins: $, where: N2, limit: y, offset: b, orderBy: T2, setOperators: [] });
    return { tableTsKey: a.tsName, sql: x2, selection: m };
  }
};
n(nt2, Gs2, "SQLiteDialect");
var Hs2;
var ks2;
var ci2 = class extends (ks2 = nt2, Hs2 = f, ks2) {
  migrate(t, e, s) {
    const i = s === void 0 || typeof s == "string" ? "__drizzle_migrations" : s.migrationsTable ?? "__drizzle_migrations", a = l`
			CREATE TABLE IF NOT EXISTS ${l.identifier(i)} (
				id SERIAL PRIMARY KEY,
				hash text NOT NULL,
				created_at numeric
			)
		`;
    e.run(a);
    const o = e.values(l`SELECT id, hash, created_at FROM ${l.identifier(i)} ORDER BY created_at DESC LIMIT 1`)[0] ?? void 0;
    e.run(l`BEGIN`);
    try {
      for (const h of t)
        if (!o || Number(o[2]) < h.folderMillis) {
          for (const c of h.sql)
            e.run(l.raw(c));
          e.run(l`INSERT INTO ${l.identifier(i)} ("hash", "created_at") VALUES(${h.hash}, ${h.folderMillis})`);
        }
      e.run(l`COMMIT`);
    } catch (h) {
      throw e.run(l`ROLLBACK`), h;
    }
  }
};
n(ci2, Hs2, "SQLiteSyncDialect");
var Zs2;
var er2;
var hi2 = class extends (er2 = nt2, Zs2 = f, er2) {
  async migrate(t, e, s) {
    const i = s === void 0 || typeof s == "string" ? "__drizzle_migrations" : s.migrationsTable ?? "__drizzle_migrations", a = l`
			CREATE TABLE IF NOT EXISTS ${l.identifier(i)} (
				id SERIAL PRIMARY KEY,
				hash text NOT NULL,
				created_at numeric
			)
		`;
    await e.run(a);
    const o = (await e.values(l`SELECT id, hash, created_at FROM ${l.identifier(i)} ORDER BY created_at DESC LIMIT 1`))[0] ?? void 0;
    await e.transaction(async (h) => {
      for (const c of t)
        if (!o || Number(o[2]) < c.folderMillis) {
          for (const m of c.sql)
            await h.run(l.raw(m));
          await h.run(l`INSERT INTO ${l.identifier(i)} ("hash", "created_at") VALUES(${c.hash}, ${c.folderMillis})`);
        }
    });
  }
};
n(hi2, Zs2, "SQLiteAsyncDialect");
var tr2;
tr2 = f;
var di2 = class {
  getSelectedFields() {
    return this._.selectedFields;
  }
};
n(di2, tr2, "TypedQueryBuilder");
var sr2;
sr2 = f;
var W2 = class {
  constructor(t) {
    n(this, "fields");
    n(this, "session");
    n(this, "dialect");
    n(this, "withList");
    n(this, "distinct");
    this.fields = t.fields, this.session = t.session, this.dialect = t.dialect, this.withList = t.withList, this.distinct = t.distinct;
  }
  from(t) {
    const e = !!this.fields;
    let s;
    return this.fields ? s = this.fields : d(t, z2) ? s = Object.fromEntries(Object.keys(t._.selectedFields).map((i) => [i, t[i]])) : d(t, it2) ? s = t[B2].selectedFields : d(t, g2) ? s = {} : s = ki2(t), new at2({ table: t, fields: s, isPartialSelect: e, session: this.session, dialect: this.dialect, withList: this.withList, distinct: this.distinct });
  }
};
n(W2, sr2, "SQLiteSelectBuilder");
var rr2;
var ir2;
var fi2 = class extends (ir2 = di2, rr2 = f, ir2) {
  constructor({ table: e, fields: s, isPartialSelect: i, session: a, dialect: u, withList: o, distinct: h }) {
    super();
    n(this, "_");
    n(this, "config");
    n(this, "joinsNotNullableMap");
    n(this, "tableName");
    n(this, "isPartialSelect");
    n(this, "session");
    n(this, "dialect");
    n(this, "leftJoin", this.createJoin("left"));
    n(this, "rightJoin", this.createJoin("right"));
    n(this, "innerJoin", this.createJoin("inner"));
    n(this, "fullJoin", this.createJoin("full"));
    n(this, "union", this.createSetOperator("union", false));
    n(this, "unionAll", this.createSetOperator("union", true));
    n(this, "intersect", this.createSetOperator("intersect", false));
    n(this, "except", this.createSetOperator("except", false));
    this.config = { withList: o, table: e, fields: { ...s }, distinct: h, setOperators: [] }, this.isPartialSelect = i, this.session = a, this.dialect = u, this._ = { selectedFields: s }, this.tableName = gt2(e), this.joinsNotNullableMap = typeof this.tableName == "string" ? { [this.tableName]: true } : {};
  }
  createJoin(e) {
    return (s, i) => {
      var o;
      const a = this.tableName, u = gt2(s);
      if (typeof u == "string" && ((o = this.config.joins) != null && o.some((h) => h.alias === u)))
        throw new Error(`Alias "${u}" is already used in this query`);
      if (!this.isPartialSelect && (Object.keys(this.joinsNotNullableMap).length === 1 && typeof a == "string" && (this.config.fields = { [a]: this.config.fields }), typeof u == "string" && !d(s, g2))) {
        const h = d(s, z2) ? s._.selectedFields : d(s, se3) ? s[B2].selectedFields : s[p.Symbol.Columns];
        this.config.fields[u] = h;
      }
      if (typeof i == "function" && (i = i(new Proxy(this.config.fields, new M2({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" })))), this.config.joins || (this.config.joins = []), this.config.joins.push({ on: i, table: s, joinType: e, alias: u }), typeof u == "string")
        switch (e) {
          case "left": {
            this.joinsNotNullableMap[u] = false;
            break;
          }
          case "right": {
            this.joinsNotNullableMap = Object.fromEntries(Object.entries(this.joinsNotNullableMap).map(([h]) => [h, false])), this.joinsNotNullableMap[u] = true;
            break;
          }
          case "inner": {
            this.joinsNotNullableMap[u] = true;
            break;
          }
          case "full": {
            this.joinsNotNullableMap = Object.fromEntries(Object.entries(this.joinsNotNullableMap).map(([h]) => [h, false])), this.joinsNotNullableMap[u] = false;
            break;
          }
        }
      return this;
    };
  }
  createSetOperator(e, s) {
    return (i) => {
      const a = typeof i == "function" ? i(xn2()) : i;
      if (!si2(this.getSelectedFields(), a.getSelectedFields()))
        throw new Error("Set operator error (union / intersect / except): selected fields are not the same or are in a different order");
      return this.config.setOperators.push({ type: e, isAll: s, rightSelect: a }), this;
    };
  }
  addSetOperators(e) {
    return this.config.setOperators.push(...e), this;
  }
  where(e) {
    return typeof e == "function" && (e = e(new Proxy(this.config.fields, new M2({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" })))), this.config.where = e, this;
  }
  having(e) {
    return typeof e == "function" && (e = e(new Proxy(this.config.fields, new M2({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" })))), this.config.having = e, this;
  }
  groupBy(...e) {
    if (typeof e[0] == "function") {
      const s = e[0](new Proxy(this.config.fields, new M2({ sqlAliasedBehavior: "alias", sqlBehavior: "sql" })));
      this.config.groupBy = Array.isArray(s) ? s : [s];
    } else
      this.config.groupBy = e;
    return this;
  }
  orderBy(...e) {
    if (typeof e[0] == "function") {
      const s = e[0](new Proxy(this.config.fields, new M2({ sqlAliasedBehavior: "alias", sqlBehavior: "sql" }))), i = Array.isArray(s) ? s : [s];
      this.config.setOperators.length > 0 ? this.config.setOperators.at(-1).orderBy = i : this.config.orderBy = i;
    } else {
      const s = e;
      this.config.setOperators.length > 0 ? this.config.setOperators.at(-1).orderBy = s : this.config.orderBy = s;
    }
    return this;
  }
  limit(e) {
    return this.config.setOperators.length > 0 ? this.config.setOperators.at(-1).limit = e : this.config.limit = e, this;
  }
  offset(e) {
    return this.config.setOperators.length > 0 ? this.config.setOperators.at(-1).offset = e : this.config.offset = e, this;
  }
  getSQL() {
    return this.dialect.buildSelectQuery(this.config);
  }
  toSQL() {
    const { typings: e, ...s } = this.dialect.sqlToQuery(this.getSQL());
    return s;
  }
  as(e) {
    return new Proxy(new z2(this.getSQL(), this.config.fields, e), new M2({ alias: e, sqlAliasedBehavior: "alias", sqlBehavior: "error" }));
  }
  getSelectedFields() {
    return new Proxy(this.config.fields, new M2({ alias: this.tableName, sqlAliasedBehavior: "alias", sqlBehavior: "error" }));
  }
  $dynamic() {
    return this;
  }
};
n(fi2, rr2, "SQLiteSelectQueryBuilder");
var nr2;
var ar2;
var at2 = class extends (ar2 = fi2, nr2 = f, ar2) {
  constructor() {
    super(...arguments);
    n(this, "run", (e) => this._prepare().run(e));
    n(this, "all", (e) => this._prepare().all(e));
    n(this, "get", (e) => this._prepare().get(e));
    n(this, "values", (e) => this._prepare().values(e));
  }
  _prepare(e = true) {
    if (!this.session)
      throw new Error("Cannot execute a query on a query builder. Please use a database instance instead.");
    const s = Z3(this.config.fields), i = this.session[e ? "prepareOneTimeQuery" : "prepareQuery"](this.dialect.sqlToQuery(this.getSQL()), s, "all", true);
    return i.joinsNotNullableMap = this.joinsNotNullableMap, i;
  }
  prepare() {
    return this._prepare(false);
  }
  async execute() {
    return this.all();
  }
};
n(at2, nr2, "SQLiteSelect");
Hi2(at2, [Y2]);
function Ae3(r, t) {
  return (e, s, ...i) => {
    const a = [s, ...i].map((u) => ({ type: r, isAll: t, rightSelect: u }));
    for (const u of a)
      if (!si2(e.getSelectedFields(), u.rightSelect.getSelectedFields()))
        throw new Error("Set operator error (union / intersect / except): selected fields are not the same or are in a different order");
    return e.addSetOperators(a);
  };
}
var xn2 = () => ({ union: Ln2, unionAll: On2, intersect: jn2, except: Cn2 });
var Ln2 = Ae3("union", false);
var On2 = Ae3("union", true);
var jn2 = Ae3("intersect", false);
var Cn2 = Ae3("except", false);
var lr2;
lr2 = f;
var Pe3 = class {
  constructor() {
    n(this, "dialect");
  }
  $with(t) {
    const e = this;
    return { as(s) {
      return typeof s == "function" && (s = s(e)), new Proxy(new tt2(s.getSQL(), s.getSelectedFields(), t, true), new M2({ alias: t, sqlAliasedBehavior: "alias", sqlBehavior: "error" }));
    } };
  }
  with(...t) {
    const e = this;
    function s(a) {
      return new W2({ fields: a ?? void 0, session: void 0, dialect: e.getDialect(), withList: t });
    }
    function i(a) {
      return new W2({ fields: a ?? void 0, session: void 0, dialect: e.getDialect(), withList: t, distinct: true });
    }
    return { select: s, selectDistinct: i };
  }
  select(t) {
    return new W2({ fields: t ?? void 0, session: void 0, dialect: this.getDialect() });
  }
  selectDistinct(t) {
    return new W2({ fields: t ?? void 0, session: void 0, dialect: this.getDialect(), distinct: true });
  }
  getDialect() {
    return this.dialect || (this.dialect = new ci2()), this.dialect;
  }
};
n(Pe3, lr2, "SQLiteQueryBuilder");
var or2;
or2 = f;
var He2 = class {
  constructor(t, e, s, i) {
    this.table = t, this.session = e, this.dialect = s, this.withList = i;
  }
  set(t) {
    return new mi2(this.table, ri2(this.table, t), this.session, this.dialect, this.withList);
  }
};
n(He2, or2, "SQLiteUpdateBuilder");
var ur2;
var cr2;
var mi2 = class extends (cr2 = Y2, ur2 = f, cr2) {
  constructor(e, s, i, a, u) {
    super();
    n(this, "config");
    n(this, "run", (e2) => this._prepare().run(e2));
    n(this, "all", (e2) => this._prepare().all(e2));
    n(this, "get", (e2) => this._prepare().get(e2));
    n(this, "values", (e2) => this._prepare().values(e2));
    this.session = i, this.dialect = a, this.config = { set: s, table: e, withList: u };
  }
  where(e) {
    return this.config.where = e, this;
  }
  returning(e = this.config.table[I2.Symbol.Columns]) {
    return this.config.returning = Z3(e), this;
  }
  getSQL() {
    return this.dialect.buildUpdateQuery(this.config);
  }
  toSQL() {
    const { typings: e, ...s } = this.dialect.sqlToQuery(this.getSQL());
    return s;
  }
  _prepare(e = true) {
    return this.session[e ? "prepareOneTimeQuery" : "prepareQuery"](this.dialect.sqlToQuery(this.getSQL()), this.config.returning, this.config.returning ? "all" : "run", true);
  }
  prepare() {
    return this._prepare(false);
  }
  async execute() {
    return this.config.returning ? this.all() : this.run();
  }
  $dynamic() {
    return this;
  }
};
n(mi2, ur2, "SQLiteUpdate");
var hr2;
hr2 = f;
var pi2 = class {
  constructor(t, e, s, i, a, u, o, h) {
    this.mode = t, this.fullSchema = e, this.schema = s, this.tableNamesMap = i, this.table = a, this.tableConfig = u, this.dialect = o, this.session = h;
  }
  findMany(t) {
    return this.mode === "sync" ? new ke3(this.fullSchema, this.schema, this.tableNamesMap, this.table, this.tableConfig, this.dialect, this.session, t || {}, "many") : new $e3(this.fullSchema, this.schema, this.tableNamesMap, this.table, this.tableConfig, this.dialect, this.session, t || {}, "many");
  }
  findFirst(t) {
    return this.mode === "sync" ? new ke3(this.fullSchema, this.schema, this.tableNamesMap, this.table, this.tableConfig, this.dialect, this.session, t ? { ...t, limit: 1 } : { limit: 1 }, "first") : new $e3(this.fullSchema, this.schema, this.tableNamesMap, this.table, this.tableConfig, this.dialect, this.session, t ? { ...t, limit: 1 } : { limit: 1 }, "first");
  }
};
n(pi2, hr2, "SQLiteAsyncRelationalQueryBuilder");
var dr2;
var fr2;
var $e3 = class extends (fr2 = Y2, dr2 = f, fr2) {
  constructor(e, s, i, a, u, o, h, c, m) {
    super();
    n(this, "mode");
    this.fullSchema = e, this.schema = s, this.tableNamesMap = i, this.table = a, this.tableConfig = u, this.dialect = o, this.session = h, this.config = c, this.mode = m;
  }
  getSQL() {
    return this.dialect.buildRelationalQuery({ fullSchema: this.fullSchema, schema: this.schema, tableNamesMap: this.tableNamesMap, table: this.table, tableConfig: this.tableConfig, queryConfig: this.config, tableAlias: this.tableConfig.tsName }).sql;
  }
  _prepare(e = false) {
    const { query: s, builtQuery: i } = this._toSQL();
    return this.session[e ? "prepareOneTimeQuery" : "prepareQuery"](i, void 0, this.mode === "first" ? "get" : "all", true, (a, u) => {
      const o = a.map((h) => Ge2(this.schema, this.tableConfig, h, s.selection, u));
      return this.mode === "first" ? o[0] : o;
    });
  }
  prepare() {
    return this._prepare(false);
  }
  _toSQL() {
    const e = this.dialect.buildRelationalQuery({ fullSchema: this.fullSchema, schema: this.schema, tableNamesMap: this.tableNamesMap, table: this.table, tableConfig: this.tableConfig, queryConfig: this.config, tableAlias: this.tableConfig.tsName }), s = this.dialect.sqlToQuery(e.sql);
    return { query: e, builtQuery: s };
  }
  toSQL() {
    return this._toSQL().builtQuery;
  }
  executeRaw() {
    return this.mode === "first" ? this._prepare(false).get() : this._prepare(false).all();
  }
  async execute() {
    return this.executeRaw();
  }
};
n($e3, dr2, "SQLiteAsyncRelationalQuery");
var mr2;
var pr2;
var ke3 = class extends (pr2 = $e3, mr2 = f, pr2) {
  sync() {
    return this.executeRaw();
  }
};
n(ke3, mr2, "SQLiteSyncRelationalQuery");
var yr2;
var gr2;
var ue2 = class extends (gr2 = Y2, yr2 = f, gr2) {
  constructor(e, s, i, a, u) {
    super();
    n(this, "config");
    this.execute = e, this.getSQL = s, this.dialect = a, this.mapBatchResult = u, this.config = { action: i };
  }
  getQuery() {
    return { ...this.dialect.sqlToQuery(this.getSQL()), method: this.config.action };
  }
  mapResult(e, s) {
    return s ? this.mapBatchResult(e) : e;
  }
  _prepare() {
    return this;
  }
  isResponseInArrayMode() {
    return false;
  }
};
n(ue2, yr2, "SQLiteRaw");
var br2;
br2 = f;
var lt2 = class {
  constructor(t, e, s, i) {
    n(this, "query");
    this.resultKind = t, this.dialect = e, this.session = s, this._ = i ? { schema: i.schema, fullSchema: i.fullSchema, tableNamesMap: i.tableNamesMap } : { schema: void 0, fullSchema: {}, tableNamesMap: {} }, this.query = {};
    const a = this.query;
    if (this._.schema)
      for (const [u, o] of Object.entries(this._.schema))
        a[u] = new pi2(t, i.fullSchema, this._.schema, this._.tableNamesMap, i.fullSchema[u], o, e, s);
  }
  $with(t) {
    return { as(e) {
      return typeof e == "function" && (e = e(new Pe3())), new Proxy(new tt2(e.getSQL(), e.getSelectedFields(), t, true), new M2({ alias: t, sqlAliasedBehavior: "alias", sqlBehavior: "error" }));
    } };
  }
  with(...t) {
    const e = this;
    function s(h) {
      return new W2({ fields: h ?? void 0, session: e.session, dialect: e.dialect, withList: t });
    }
    function i(h) {
      return new W2({ fields: h ?? void 0, session: e.session, dialect: e.dialect, withList: t, distinct: true });
    }
    function a(h) {
      return new He2(h, e.session, e.dialect, t);
    }
    function u(h) {
      return new Xe3(h, e.session, e.dialect, t);
    }
    function o(h) {
      return new Je3(h, e.session, e.dialect, t);
    }
    return { select: s, selectDistinct: i, update: a, insert: u, delete: o };
  }
  select(t) {
    return new W2({ fields: t ?? void 0, session: this.session, dialect: this.dialect });
  }
  selectDistinct(t) {
    return new W2({ fields: t ?? void 0, session: this.session, dialect: this.dialect, distinct: true });
  }
  update(t) {
    return new He2(t, this.session, this.dialect);
  }
  insert(t) {
    return new Xe3(t, this.session, this.dialect);
  }
  delete(t) {
    return new Je3(t, this.session, this.dialect);
  }
  run(t) {
    const e = t.getSQL();
    return this.resultKind === "async" ? new ue2(async () => this.session.run(e), () => e, "run", this.dialect, this.session.extractRawRunValueFromBatchResult.bind(this.session)) : this.session.run(e);
  }
  all(t) {
    const e = t.getSQL();
    return this.resultKind === "async" ? new ue2(async () => this.session.all(e), () => e, "all", this.dialect, this.session.extractRawAllValueFromBatchResult.bind(this.session)) : this.session.all(e);
  }
  get(t) {
    const e = t.getSQL();
    return this.resultKind === "async" ? new ue2(async () => this.session.get(e), () => e, "get", this.dialect, this.session.extractRawGetValueFromBatchResult.bind(this.session)) : this.session.get(e);
  }
  values(t) {
    const e = t.getSQL();
    return this.resultKind === "async" ? new ue2(async () => this.session.values(e), () => e, "values", this.dialect, this.session.extractRawValuesValueFromBatchResult.bind(this.session)) : this.session.values(e);
  }
  transaction(t, e) {
    return this.session.transaction(t, e);
  }
};
n(lt2, br2, "BaseSQLiteDatabase");
var wr2;
var Sr2;
var yi2 = class extends (Sr2 = Y2, wr2 = f, Sr2) {
  constructor(t) {
    super(), this.resultCb = t;
  }
  async execute() {
    return this.resultCb();
  }
  sync() {
    return this.resultCb();
  }
};
n(yi2, wr2, "ExecuteResultSync");
var vr2;
vr2 = f;
var gi2 = class {
  constructor(t, e, s) {
    n(this, "joinsNotNullableMap");
    this.mode = t, this.executeMethod = e, this.query = s;
  }
  getQuery() {
    return this.query;
  }
  mapRunResult(t, e) {
    return t;
  }
  mapAllResult(t, e) {
    throw new Error("Not implemented");
  }
  mapGetResult(t, e) {
    throw new Error("Not implemented");
  }
  execute(t) {
    return this.mode === "async" ? this[this.executeMethod](t) : new yi2(() => this[this.executeMethod](t));
  }
  mapResult(t, e) {
    switch (this.executeMethod) {
      case "run":
        return this.mapRunResult(t, e);
      case "all":
        return this.mapAllResult(t, e);
      case "get":
        return this.mapGetResult(t, e);
    }
  }
};
n(gi2, vr2, "PreparedQuery");
var Nr2;
Nr2 = f;
var bi2 = class {
  constructor(t) {
    this.dialect = t;
  }
  prepareOneTimeQuery(t, e, s, i) {
    return this.prepareQuery(t, e, s, i);
  }
  run(t) {
    const e = this.dialect.sqlToQuery(t);
    try {
      return this.prepareOneTimeQuery(e, void 0, "run", false).run();
    } catch (s) {
      throw new Re2({ cause: s, message: `Failed to run the query '${e.sql}'` });
    }
  }
  extractRawRunValueFromBatchResult(t) {
    return t;
  }
  all(t) {
    return this.prepareOneTimeQuery(this.dialect.sqlToQuery(t), void 0, "run", false).all();
  }
  extractRawAllValueFromBatchResult(t) {
    throw new Error("Not implemented");
  }
  get(t) {
    return this.prepareOneTimeQuery(this.dialect.sqlToQuery(t), void 0, "run", false).get();
  }
  extractRawGetValueFromBatchResult(t) {
    throw new Error("Not implemented");
  }
  values(t) {
    return this.prepareOneTimeQuery(this.dialect.sqlToQuery(t), void 0, "run", false).values();
  }
  extractRawValuesValueFromBatchResult(t) {
    throw new Error("Not implemented");
  }
};
n(bi2, Nr2, "SQLiteSession");
var Qr2;
var $r2;
var wi2 = class extends ($r2 = lt2, Qr2 = f, $r2) {
  constructor(t, e, s, i, a = 0) {
    super(t, e, s, i), this.schema = i, this.nestedIndex = a;
  }
  rollback() {
    throw new ni2();
  }
};
n(wi2, Qr2, "SQLiteTransaction");
var _r2;
_r2 = f;
var Si2 = class {
  write(t) {
    console.log(t);
  }
};
n(Si2, _r2, "ConsoleLogWriter");
var qr2;
qr2 = f;
var vi2 = class {
  constructor(t) {
    n(this, "writer");
    this.writer = (t == null ? void 0 : t.writer) ?? new Si2();
  }
  logQuery(t, e) {
    const s = e.map((a) => {
      try {
        return JSON.stringify(a);
      } catch {
        return String(a);
      }
    }), i = s.length ? ` -- params: [${s.join(", ")}]` : "";
    this.writer.write(`Query: ${t}${i}`);
  }
};
n(vi2, qr2, "DefaultLogger");
var Tr2;
Tr2 = f;
var Ni2 = class {
  logQuery() {
  }
};
n(Ni2, Tr2, "NoopLogger");
var xr2;
var Lr2;
var Qi2 = class extends (Lr2 = bi2, xr2 = f, Lr2) {
  constructor(e, s, i, a = {}) {
    super(s);
    n(this, "logger");
    this.client = e, this.schema = i, this.options = a, this.logger = a.logger ?? new Ni2();
  }
  prepareQuery(e, s, i, a, u) {
    const o = this.client.prepare(e.sql);
    return new $i2(o, e, this.logger, s, i, a, u);
  }
  async batch(e) {
    const s = [], i = [];
    for (const u of e) {
      const o = u._prepare(), h = o.getQuery();
      if (s.push(o), h.params.length > 0)
        i.push(o.stmt.bind(...h.params));
      else {
        const c = o.getQuery();
        i.push(this.client.prepare(c.sql).bind(...c.params));
      }
    }
    return (await this.client.batch(i)).map((u, o) => s[o].mapResult(u, true));
  }
  extractRawAllValueFromBatchResult(e) {
    return e.results;
  }
  extractRawGetValueFromBatchResult(e) {
    return e.results[0];
  }
  extractRawValuesValueFromBatchResult(e) {
    return et2(e.results);
  }
  async transaction(e, s) {
    const i = new Ze3("async", this.dialect, this, this.schema);
    await this.run(l.raw(`begin${s != null && s.behavior ? " " + s.behavior : ""}`));
    try {
      const a = await e(i);
      return await this.run(l`commit`), a;
    } catch (a) {
      throw await this.run(l`rollback`), a;
    }
  }
};
n(Qi2, xr2, "SQLiteD1Session");
var Or2;
var jr2;
var xe3 = class xe4 extends (jr2 = wi2, Or2 = f, jr2) {
  async transaction(t) {
    const e = `sp${this.nestedIndex}`, s = new xe4("async", this.dialect, this.session, this.schema, this.nestedIndex + 1);
    await this.session.run(l.raw(`savepoint ${e}`));
    try {
      const i = await t(s);
      return await this.session.run(l.raw(`release savepoint ${e}`)), i;
    } catch (i) {
      throw await this.session.run(l.raw(`rollback to savepoint ${e}`)), i;
    }
  }
};
n(xe3, Or2, "D1Transaction");
var Ze3 = xe3;
function et2(r) {
  const t = [];
  for (const e of r) {
    const s = Object.keys(e).map((i) => e[i]);
    t.push(s);
  }
  return t;
}
var Cr2;
var Rr2;
var $i2 = class extends (Rr2 = gi2, Cr2 = f, Rr2) {
  constructor(e, s, i, a, u, o, h) {
    super("async", u, s);
    n(this, "customResultMapper");
    n(this, "fields");
    n(this, "stmt");
    this.logger = i, this._isResponseInArrayMode = o, this.customResultMapper = h, this.fields = a, this.stmt = e;
  }
  run(e) {
    const s = ge3(this.query.params, e ?? {});
    return this.logger.logQuery(this.query.sql, s), this.stmt.bind(...s).run();
  }
  async all(e) {
    const { fields: s, query: i, logger: a, stmt: u, customResultMapper: o } = this;
    if (!s && !o) {
      const c = ge3(i.params, e ?? {});
      return a.logQuery(i.sql, c), u.bind(...c).all().then(({ results: m }) => this.mapAllResult(m));
    }
    const h = await this.values(e);
    return this.mapAllResult(h);
  }
  mapAllResult(e, s) {
    return s && (e = et2(e.results)), !this.fields && !this.customResultMapper ? e : this.customResultMapper ? this.customResultMapper(e) : e.map((i) => ze3(this.fields, i, this.joinsNotNullableMap));
  }
  async get(e) {
    const { fields: s, joinsNotNullableMap: i, query: a, logger: u, stmt: o, customResultMapper: h } = this;
    if (!s && !h) {
      const m = ge3(a.params, e ?? {});
      return u.logQuery(a.sql, m), o.bind(...m).all().then(({ results: y }) => y[0]);
    }
    const c = await this.values(e);
    if (c[0])
      return h ? h(c) : ze3(s, c[0], i);
  }
  mapGetResult(e, s) {
    return s && (e = et2(e.results)[0]), !this.fields && !this.customResultMapper ? e : this.customResultMapper ? this.customResultMapper([e]) : ze3(this.fields, e, this.joinsNotNullableMap);
  }
  values(e) {
    const s = ge3(this.query.params, e ?? {});
    return this.logger.logQuery(this.query.sql, s), this.stmt.bind(...s).raw();
  }
  isResponseInArrayMode() {
    return this._isResponseInArrayMode;
  }
};
n($i2, Cr2, "D1PreparedQuery");
var Ar2;
var Pr2;
var _i2 = class extends (Pr2 = lt2, Ar2 = f, Pr2) {
  async batch(t) {
    return this.session.batch(t);
  }
};
n(_i2, Ar2, "D1Database");
function Rn2(r, t = {}) {
  const e = new hi2();
  let s;
  t.logger === true ? s = new vi2() : t.logger !== false && (s = t.logger);
  let i;
  if (t.schema) {
    const u = Qn2(t.schema, Tn2);
    i = { fullSchema: t.schema, schema: u.tables, tableNamesMap: u.tableNamesMap };
  }
  const a = new Qi2(r, e, i, { logger: s });
  return new _i2("async", e, a, i);
}
var qi2 = { id: we2("id").primaryKey(), createdAt: we2("created_at", { mode: "timestamp_ms" }).notNull().default(l`(unixepoch() * 1000)`), updatedAt: we2("updated_at", { mode: "timestamp_ms" }).notNull().default(l`(unixepoch() * 1000)`) };
var ae2 = Kr2("users", { ...qi2, username: Se3("username") });
var fe2 = Kr2("posts", { ...qi2, authorId: we2("author_id").notNull().references(() => ae2.id), title: Se3("title").notNull(), description: Se3("description").notNull(), content: Se3("content").notNull() });
var An2 = ui2(ae2, ({ many: r }) => ({ posts: r(fe2) }));
var Pn2 = ui2(fe2, ({ one: r }) => ({ author: r(ae2, { fields: [fe2.authorId], references: [ae2.id] }) }));
var In2 = Object.freeze(Object.defineProperty({ __proto__: null, posts: fe2, postsRelations: Pn2, users: ae2, usersRelations: An2 }, Symbol.toStringTag, { value: "Module" }));
var Bn2 = () => {
};
var Dn2 = (r) => r.env.get("D1") ? r.env.get("D1") : Bn2();
var Fn2 = "Invariant failed";
function En2(r, t) {
  if (!r)
    throw new Error(Fn2);
}
var Mn2 = new Pe3().select().from(fe2);
var zn2 = new Pe3().select().from(ae2);
var Kn2 = /* @__PURE__ */ new Map([["posts", Mn2], ["users", zn2]]);
var Vn2 = el(async function(r) {
  const t = Rn2(await Dn2(this), { schema: In2 }), e = Kn2.get(r);
  return En2(e), t.run(e);
}, "7QwFqO9aXtA");
var Ie3 = $l(te(Vn2, "s_7QwFqO9aXtA"));
var Un2 = () => {
  const r = Ie3("posts");
  return le(je, { children: [le(tl, { value: r, onResolved: (t) => t.results.flat().reduce((e, s) => "title" in s ? [...e, le(il, { href: s.id.toString(), children: qe("div", null, null, [qe("h1", null, null, Ii(s, "title"), 1, null), qe("h2", null, null, [Ii(s, "authorId"), " - ", s.createdAt.toLocaleDateString()], 1, null), qe("h3", null, null, ["ID (DESCRIPTION)", Ii(s, "id")], 1, null)], 1, null) }, 1, "xL_0")] : e, []), [N]: { value: N, onResolved: N } }, 3, "xL_1"), le(rt, null, 3, "xL_2")] }, 1, "xL_3");
};
var Wn2 = Kt(te(Un2, "s_o4AHZqJ7TC4"));
var Jn2 = Object.freeze(Object.defineProperty({ __proto__: null, default: Wn2, useQuery: Ie3 }, Symbol.toStringTag, { value: "Module" }));
var Xn2 = () => {
  const r = Ie3("posts");
  return le(je, { children: [le(tl, { value: r, onResolved: (t) => t.results.flat().reduce((e, s) => (_i(), "title" in s ? [...e, qe("div", null, null, [le(Ve2, { href: s.id.toString(), children: [qe("h1", null, null, Ii(s, "title"), 1, null), qe("h2", null, null, ["ID (DESCRIPTION)", Ii(s, "id")], 1, null)] }, 1, "ws_0"), qe("h3", null, null, [Ii(s, "authorId"), " - ", s.createdAt.toLocaleDateString()], 1, null)], 1, "ws_1")] : e), []), [N]: { value: N, onResolved: N } }, 3, "ws_2"), le(rt, null, 3, "ws_3")] }, 1, "ws_4");
};
var Yn = Kt(te(Xn2, "s_rnfws6KWrXc"));
var Gn2 = Object.freeze(Object.defineProperty({ __proto__: null, default: Yn, useQuery: Ie3 }, Symbol.toStringTag, { value: "Module" }));
var Hn2 = () => le(je, { children: [qe("h1", null, null, "welcome\u2728", 3, null), qe("h2", null, null, "thank you for visiting my website", 3, null), qe("br", null, null, null, 3, null), qe("p", null, null, ["hi, this place is under construction right now!", qe("br", null, null, null, 3, null), "please bookmark this page \u{1F408}"], 3, null), qe("script", null, null, null, 3, null)] }, 3, "RI_0");
var kn2 = Kt(te(Hn2, "s_29R7P00OKFA"));
var Zn2 = Object.freeze(Object.defineProperty({ __proto__: null, default: kn2 }, Symbol.toStringTag, { value: "Module" }));
var ea = () => le(rt, null, 3, "u8_0");
var ta = Kt(te(ea, "s_usLRwOw2TAA"));
var sa = Object.freeze(Object.defineProperty({ __proto__: null, default: ta }, Symbol.toStringTag, { value: "Module" }));
var ra = () => le(rt, null, 3, "pc_0");
var ia = Kt(te(ra, "s_gs5zf6xZ7nI"));
var na = Object.freeze(Object.defineProperty({ __proto__: null, default: ia }, Symbol.toStringTag, { value: "Module" }));
var aa = [];
var Ke3 = () => Ki2;
var bt2 = () => Jn2;
var la = () => Gn2;
var oa = [["/", [Ke3, () => Zn2], "/", ["q-DjfOskKr.js", "q-De7xa3QD.js"]], ["posts/", [Ke3, bt2, () => sa], "/posts/", ["q-DjfOskKr.js", "q-B5ZKUF8N.js", "q-DyM7vQAk.js"]], ["posts/[postId]/", [Ke3, bt2, la, () => na], "/posts/[postId]/", ["q-DjfOskKr.js", "q-B5ZKUF8N.js", "q-DviXTeDv.js", "q-DkrGqVh2.js"]]];
var ua = [];
var ca = true;
var ha = "/";
var da = true;
var pa = { routes: oa, serverPlugins: aa, menus: ua, trailingSlash: ca, basePathname: ha, cacheModules: da };
var V = (e) => {
  throw TypeError(e);
};
var E = (e, t, n2) => t.has(e) || V("Cannot " + n2);
var T = (e, t, n2) => (E(e, t, "read from private field"), n2 ? n2.call(e) : t.get(e));
var v = (e, t, n2) => t.has(e) ? V("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n2);
var B3 = (e, t, n2, r) => (E(e, t, "write to private field"), r ? r.call(e, n2) : t.set(e, n2), n2);
var Fe4 = class extends Error {
  constructor(e, t) {
    super(), this.status = e, this.data = t;
  }
};
var ge4 = class extends Error {
  constructor(e, t) {
    super(t), this.status = e;
  }
};
function Ue3(e, t) {
  let n2 = "Server Error";
  return t != null && (typeof t.message == "string" ? n2 = t.message : n2 = String(t)), "<html>" + ye3(e, n2) + "</html>";
}
function ye3(e, t) {
  typeof e != "number" && (e = 500), typeof t == "string" ? t = ze4(t) : t = "";
  const n2 = typeof t == "string" ? "600px" : "300px", r = e >= 500 ? Ge3 : je4;
  return `
<head>
  <meta charset="utf-8">
  <meta http-equiv="Status" content="${e}">
  <title>${e} ${t}</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>
    body { color: ${r}; background-color: #fafafa; padding: 30px; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Roboto, sans-serif; }
    p { max-width: ${n2}; margin: 60px auto 30px auto; background: white; border-radius: 4px; box-shadow: 0px 0px 50px -20px ${r}; overflow: hidden; }
    strong { display: inline-block; padding: 15px; background: ${r}; color: white; }
    span { display: inline-block; padding: 15px; }
  </style>
</head>
<body><p><strong>${e}</strong> <span>${t}</span></p></body>
`;
}
var Qe4 = /[&<>]/g;
var ze4 = (e) => e.replace(Qe4, (t) => {
  switch (t) {
    case "&":
      return "&amp;";
    case "<":
      return "&lt;";
    case ">":
      return "&gt;";
    default:
      return "";
  }
});
var je4 = "#006ce9";
var Ge3 = "#713fc2";
var Je4 = { lax: "Lax", Lax: "Lax", None: "None", none: "None", strict: "Strict", Strict: "Strict" };
var Ke4 = { seconds: 1, minutes: 1 * 60, hours: 1 * 60 * 60, days: 1 * 60 * 60 * 24, weeks: 1 * 60 * 60 * 24 * 7 };
var te2 = (e, t, n2) => {
  const r = [`${e}=${t}`];
  typeof n2.domain == "string" && r.push(`Domain=${n2.domain}`), typeof n2.maxAge == "number" ? r.push(`Max-Age=${n2.maxAge}`) : Array.isArray(n2.maxAge) ? r.push(`Max-Age=${n2.maxAge[0] * Ke4[n2.maxAge[1]]}`) : typeof n2.expires == "number" || typeof n2.expires == "string" ? r.push(`Expires=${n2.expires}`) : n2.expires instanceof Date && r.push(`Expires=${n2.expires.toUTCString()}`), n2.httpOnly && r.push("HttpOnly"), typeof n2.path == "string" && r.push(`Path=${n2.path}`);
  const a = Be3(n2.sameSite);
  return a && r.push(`SameSite=${a}`), n2.secure && r.push("Secure"), r.join("; ");
};
function ne3(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}
var Xe4 = (e) => {
  const t = {};
  if (typeof e == "string" && e !== "") {
    const n2 = e.split(";");
    for (const r of n2) {
      const a = r.indexOf("=");
      a !== -1 && (t[ne3(r.slice(0, a).trim())] = ne3(r.slice(a + 1).trim()));
    }
  }
  return t;
};
function Be3(e) {
  if (e === true)
    return "Strict";
  if (e === false)
    return "None";
  if (e)
    return Je4[e];
}
var M3 = Symbol("request-cookies");
var H4 = Symbol("response-cookies");
var _ = Symbol("live-cookies");
var we3;
var Se4;
var Ye4 = class {
  constructor(e) {
    this[we3] = {}, this[Se4] = {}, this.appendCounter = 0, this[M3] = Xe4(e), this[_] = { ...this[M3] };
  }
  get(e, t = true) {
    const n2 = this[t ? _ : M3][e];
    return n2 ? { value: n2, json() {
      return JSON.parse(n2);
    }, number() {
      return Number(n2);
    } } : null;
  }
  getAll(e = true) {
    return Object.keys(this[e ? _ : M3]).reduce((t, n2) => (t[n2] = this.get(n2), t), {});
  }
  has(e, t = true) {
    return !!this[t ? _ : M3][e];
  }
  set(e, t, n2 = {}) {
    this[_][e] = typeof t == "string" ? t : JSON.stringify(t);
    const r = typeof t == "string" ? t : encodeURIComponent(JSON.stringify(t));
    this[H4][e] = te2(e, r, n2);
  }
  append(e, t, n2 = {}) {
    this[_][e] = typeof t == "string" ? t : JSON.stringify(t);
    const r = typeof t == "string" ? t : encodeURIComponent(JSON.stringify(t));
    this[H4][++this.appendCounter] = te2(e, r, n2);
  }
  delete(e, t) {
    this.set(e, "deleted", { ...t, maxAge: 0 }), this[_][e] = null;
  }
  headers() {
    return Object.values(this[H4]);
  }
};
we3 = H4, Se4 = _;
var qe4 = (e, t) => {
  const n2 = t.headers();
  if (n2.length > 0) {
    const r = new Headers(e);
    for (const a of n2)
      r.append("Set-Cookie", a);
    return r;
  }
  return e;
};
var q2 = class {
};
var I3 = class extends q2 {
};
var re2 = /* @__PURE__ */ new WeakMap();
var ae3 = "qaction";
var Ze4 = "qfunc";
var ie3 = "qdata";
function Ve3(e, t) {
  const n2 = ce3(e), r = se4(e), a = ce3(t), i = se4(t);
  return be3(e, n2, r, t, a, i);
}
function be3(e, t, n2, r, a, i) {
  let s = null;
  for (; t < n2; ) {
    const o = e.charCodeAt(t++), c = r.charCodeAt(a++);
    if (o === 91) {
      const l2 = Re3(e, t), f2 = t + (l2 ? 3 : 0), h = Y3(e, f2, n2, 93), m = e.substring(f2, h), d2 = Y3(e, h + 1, n2, 47), g3 = e.substring(h + 1, d2);
      t = h + 1;
      const y = a - 1;
      if (l2) {
        const C = et3(m, g3, r, y, i, e, t + g3.length + 1, n2);
        if (C)
          return Object.assign(s || (s = {}), C);
      }
      const w = Y3(r, y, i, 47, g3);
      if (w == -1)
        return null;
      const A2 = r.substring(y, w);
      if (!l2 && !g3 && !A2)
        return null;
      a = w, (s || (s = {}))[m] = decodeURIComponent(A2);
    } else if (o !== c && !(isNaN(c) && Ee4(e, t)))
      return null;
  }
  return oe(e, t) && oe(r, a) ? s || {} : null;
}
function Ee4(e, t) {
  return e.charCodeAt(t) === 91 && Re3(e, t + 1);
}
function se4(e) {
  const t = e.length;
  return t > 1 && e.charCodeAt(t - 1) === 47 ? t - 1 : t;
}
function oe(e, t) {
  const n2 = e.length;
  return t >= n2 || t == n2 - 1 && e.charCodeAt(t) === 47;
}
function ce3(e) {
  return e.charCodeAt(0) === 47 ? 1 : 0;
}
function Re3(e, t) {
  return e.charCodeAt(t) === 46 && e.charCodeAt(t + 1) === 46 && e.charCodeAt(t + 2) === 46;
}
function Y3(e, t, n2, r, a = "") {
  for (; t < n2 && e.charCodeAt(t) !== r; )
    t++;
  const i = a.length;
  for (let s = 0; s < i; s++)
    if (e.charCodeAt(t - i + s) !== a.charCodeAt(s))
      return -1;
  return t - i;
}
function et3(e, t, n2, r, a, i, s, o) {
  n2.charCodeAt(r) === 47 && r++;
  let c = a;
  const l2 = t + "/";
  for (; c >= r; ) {
    const f2 = be3(i, s, o, n2, c, a);
    if (f2) {
      let m = n2.substring(r, Math.min(c, a));
      return m.endsWith(l2) && (m = m.substring(0, m.length - l2.length)), f2[e] = decodeURIComponent(m), f2;
    }
    const h = tt3(n2, r, l2, c, r - 1) + l2.length;
    if (c === h)
      break;
    c = h;
  }
  return null;
}
function tt3(e, t, n2, r, a) {
  let i = e.lastIndexOf(n2, r);
  return i == r - n2.length && (i = e.lastIndexOf(n2, r - n2.length - 1)), i > t ? i : a;
}
var nt3 = async (e, t, n2, r) => {
  if (!Array.isArray(e))
    return null;
  for (const a of e) {
    const i = a[0], s = Ve3(i, r);
    if (!s)
      continue;
    const o = a[1], c = a[3], l2 = new Array(o.length), f2 = [];
    o.forEach((d2, g3) => {
      le2(d2, f2, (y) => l2[g3] = y, n2);
    });
    const h = rt3(t, r);
    let m;
    return le2(h, f2, (d2) => m = d2 == null ? void 0 : d2.default, n2), f2.length > 0 && await Promise.all(f2), [i, s, l2, m, c];
  }
  return null;
};
var le2 = (e, t, n2, r) => {
  if (typeof e == "function") {
    const a = re2.get(e);
    if (a)
      n2(a);
    else {
      const i = e();
      typeof i.then == "function" ? t.push(i.then((s) => {
        r !== false && re2.set(e, s), n2(s);
      })) : i && n2(i);
    }
  }
};
var rt3 = (e, t) => {
  if (e) {
    t = t.endsWith("/") ? t : t + "/";
    const n2 = e.find((r) => r[0] === t || t.startsWith(r[0] + (t.endsWith("/") ? "" : "/")));
    if (n2)
      return n2[1];
  }
};
function at3(e) {
  const t = [];
  return e === "day" ? e = 60 * 60 * 24 : e === "week" ? e = 60 * 60 * 24 * 7 : e === "month" ? e = 60 * 60 * 24 * 30 : e === "year" ? e = 60 * 60 * 24 * 365 : e === "private" ? e = { private: true, noCache: true } : e === "immutable" ? e = { public: true, immutable: true, maxAge: 60 * 60 * 24 * 365, staleWhileRevalidate: 60 * 60 * 24 * 365 } : e === "no-cache" && (e = { noCache: true }), typeof e == "number" && (e = { maxAge: e, sMaxAge: e, staleWhileRevalidate: e }), e.immutable && t.push("immutable"), e.maxAge && t.push(`max-age=${e.maxAge}`), e.sMaxAge && t.push(`s-maxage=${e.sMaxAge}`), e.noStore && t.push("no-store"), e.noCache && t.push("no-cache"), e.private && t.push("private"), e.public && t.push("public"), e.staleWhileRevalidate && t.push(`stale-while-revalidate=${e.staleWhileRevalidate}`), e.staleIfError && t.push(`stale-if-error=${e.staleIfError}`), t.join(", ");
}
var L2;
import("node:async_hooks").then((e) => {
  const t = e.AsyncLocalStorage;
  L2 = new t(), globalThis.qcAsyncRequestStore = L2;
}).catch((e) => {
  console.warn("AsyncLocalStorage not available, continuing without it. This might impact concurrent server calls.", e);
});
function it3(e, t, n2, r, a = true, i = "/", s) {
  let o;
  const c = new Promise((f2) => o = f2), l2 = lt3(e, t, n2, r, a, i, s, o);
  return { response: c, requestEv: l2, completion: L2 ? L2.run(l2, fe3, l2, o) : fe3(l2, o) };
}
async function fe3(e, t) {
  try {
    await e.next();
  } catch (n2) {
    if (n2 instanceof I3)
      await e.getWritableStream().close();
    else if (n2 instanceof ge4) {
      if (console.error(n2), !e.headersSent) {
        const r = Ue3(n2.status, n2), a = n2.status;
        e.html(a, r);
      }
    } else if (!(n2 instanceof q2)) {
      if (G4(e) !== "dev")
        try {
          e.headersSent || (e.headers.set("content-type", "text/html; charset=utf-8"), e.cacheControl({ noCache: true }), e.status(500));
          const r = e.getWritableStream();
          if (!r.locked) {
            const a = r.getWriter();
            await a.write(J3.encode(ye3(500, "Internal Server Error"))), await a.close();
          }
        } catch {
          console.error("Unable to render error page");
        }
      return n2;
    }
  } finally {
    e.isDirty() || t(null);
  }
}
function st3(e, t) {
  if (e.endsWith(D4)) {
    const n2 = e.length - Ae4 + (t ? 1 : 0);
    e = e.slice(0, n2), e === "" && (e = "/");
  }
  return e;
}
var W3 = "@isQData";
var D4 = "/q-data.json";
var Ae4 = D4.length;
var ot2 = (e) => e && typeof e.then == "function";
var Te5 = Symbol("RequestEvLoaders");
var _e5 = Symbol("RequestEvMode");
var xe5 = Symbol("RequestEvRoute");
var Q2 = Symbol("RequestEvQwikSerializer");
var Ce4 = Symbol("RequestEvTrailingSlash");
var De3 = "@routeName";
var z3 = "@actionId";
var Pe4 = "@actionFormData";
var ct2 = "@nonce";
function lt3(e, t, n2, r, a, i, s, o) {
  const { request: c, platform: l2, env: f2 } = e, h = /* @__PURE__ */ new Map(), m = new Ye4(c.headers.get("cookie")), d2 = new Headers(), g3 = new URL(c.url);
  g3.pathname.endsWith(D4) && (g3.pathname = g3.pathname.slice(0, -Ae4), a && !g3.pathname.endsWith("/") && (g3.pathname += "/"), h.set(W3, true)), h.set("@manifest", r);
  let y = -1, w = null, A2, C = e.locale, S2 = 200;
  const ke4 = async () => {
    for (y++; y < n2.length; ) {
      const u = n2[y], p2 = globalThis.qcAsyncRequestStore, b = p2 != null && p2.run ? p2.run(R2, u, R2) : u(R2);
      ot2(b) && await b, y++;
    }
  }, P2 = () => {
    if (w !== null)
      throw new Error("Response already sent");
  }, $ = (u, p2) => {
    if (P2(), typeof u == "number") {
      S2 = u;
      const N2 = R2.getWritableStream().getWriter();
      N2.write(typeof p2 == "string" ? J3.encode(p2) : p2), N2.close();
    } else if (S2 = u.status, u.headers.forEach((b, N2) => {
      d2.append(N2, b);
    }), u.body) {
      const b = R2.getWritableStream();
      u.body.pipeTo(b);
    } else {
      if (S2 >= 300 && S2 < 400)
        return new I3();
      R2.getWritableStream().getWriter().close();
    }
    return K2();
  }, K2 = () => (y = ue3, new q2()), X2 = {}, R2 = { [Te5]: X2, [_e5]: e.mode, [Ce4]: a, [xe5]: t, [Q2]: s, cookie: m, headers: d2, env: f2, method: c.method, signal: c.signal, params: (t == null ? void 0 : t[1]) ?? {}, pathname: g3.pathname, platform: l2, query: g3.searchParams, request: c, url: g3, basePathname: i, sharedMap: h, get headersSent() {
    return w !== null;
  }, get exited() {
    return y >= ue3;
  }, get clientConn() {
    return e.getClientConn();
  }, next: ke4, exit: K2, cacheControl: (u, p2 = "Cache-Control") => {
    P2(), d2.set(p2, at3(u));
  }, resolveValue: async (u) => {
    const p2 = u.__id;
    if (u.__brand === "server_loader" && !(p2 in X2))
      throw new Error("You can not get the returned data of a loader that has not been executed for this request.");
    return X2[p2];
  }, status: (u) => typeof u == "number" ? (P2(), S2 = u, u) : S2, locale: (u) => (typeof u == "string" && (C = u), C || ""), error: (u, p2) => (S2 = u, d2.delete("Cache-Control"), new ge4(u, p2)), redirect: (u, p2) => {
    if (P2(), S2 = u, p2) {
      const b = p2.replace(/([^:])\/{2,}/g, "$1/");
      p2 !== b && console.warn(`Redirect URL ${p2} is invalid, fixing to ${b}`), d2.set("Location", b);
    }
    return d2.delete("Cache-Control"), u > 301 && d2.set("Cache-Control", "no-store"), K2(), new I3();
  }, defer: (u) => typeof u == "function" ? u : () => u, fail: (u, p2) => (P2(), S2 = u, d2.delete("Cache-Control"), { failed: true, ...p2 }), text: (u, p2) => (d2.set("Content-Type", "text/plain; charset=utf-8"), $(u, p2)), html: (u, p2) => (d2.set("Content-Type", "text/html; charset=utf-8"), $(u, p2)), parseBody: async () => A2 !== void 0 ? A2 : A2 = ut2(R2, h, s), json: (u, p2) => (d2.set("Content-Type", "application/json; charset=utf-8"), $(u, JSON.stringify(p2))), send: $, isDirty: () => w !== null, getWritableStream: () => {
    if (w === null) {
      if (e.mode === "dev") {
        const u = h.get("@serverTiming");
        u && d2.set("Server-Timing", u.map((p2) => `${p2[0]};dur=${p2[1]}`).join(","));
      }
      w = e.getWritableStream(S2, d2, m, o, R2);
    }
    return w;
  } };
  return Object.freeze(R2);
}
function j3(e) {
  return e[Te5];
}
function Z4(e) {
  return e[Ce4];
}
function ft3(e) {
  return e[xe5];
}
function G4(e) {
  return e[_e5];
}
var ue3 = Number.MAX_SAFE_INTEGER;
var ut2 = async ({ request: e, method: t, query: n2 }, r, a) => {
  var i;
  const s = ((i = e.headers.get("content-type")) == null ? void 0 : i.split(/[;,]/, 1)[0].trim()) ?? "";
  if (s === "application/x-www-form-urlencoded" || s === "multipart/form-data") {
    const o = await e.formData();
    return r.set(Pe4, o), dt3(o);
  } else {
    if (s === "application/json")
      return await e.json();
    if (s === "application/qwik-json") {
      if (t === "GET" && n2.has(ie3)) {
        const o = n2.get(ie3);
        if (o)
          try {
            return a._deserializeData(decodeURIComponent(o));
          } catch {
          }
      }
      return a._deserializeData(await e.text());
    }
  }
};
var dt3 = (e) => [...e.entries()].reduce((n2, [r, a]) => (r.split(".").reduce((i, s, o, c) => {
  if (s.endsWith("[]")) {
    const l2 = s.slice(0, -2);
    return i[l2] = i[l2] || [], i[l2] = [...i[l2], a];
  }
  return o < c.length - 1 ? i[s] = i[s] || (Number.isNaN(+c[o + 1]) ? {} : []) : i[s] = a;
}, n2), n2), {});
function ht3(e) {
  const { url: t, params: n2, request: r, status: a, locale: i } = e, s = {};
  r.headers.forEach((y, w) => s[w] = y);
  const o = e.sharedMap.get(z3), c = e.sharedMap.get(Pe4), l2 = e.sharedMap.get(De3), f2 = e.sharedMap.get(ct2), h = e.request.headers, m = new URL(t.pathname + t.search, t), d2 = h.get("X-Forwarded-Host"), g3 = h.get("X-Forwarded-Proto");
  return d2 && (m.port = "", m.host = d2), g3 && (m.protocol = g3), { url: m.href, requestHeaders: s, locale: i(), nonce: f2, containerAttributes: { "q:route": l2 }, qwikcity: { routeName: l2, ev: e, params: { ...n2 }, loadedRoute: ft3(e), response: { status: a(), loaders: j3(e), action: o, formData: c } } };
}
var pt3 = (e, t, n2, r, a) => {
  const i = [], s = [], o = [], c = !!(t && bt3(t[2]));
  if (e && de3(i, s, o, e, c, n2), t) {
    const l2 = t[0];
    r && (n2 === "POST" || n2 === "PUT" || n2 === "PATCH" || n2 === "DELETE") && o.unshift(Rt3), c && ((n2 === "POST" || n2 === "GET") && o.push(yt3), o.push(wt3), o.push(_t3));
    const f2 = t[2];
    o.push(Tt3), de3(i, s, o, f2, c, n2), c && (o.push((h) => {
      h.sharedMap.set(De3, l2);
    }), o.push(mt3(s, i)), o.push(a));
  }
  return o;
};
var de3 = (e, t, n2, r, a, i) => {
  for (const s of r) {
    typeof s.onRequest == "function" ? n2.push(s.onRequest) : Array.isArray(s.onRequest) && n2.push(...s.onRequest);
    let o;
    switch (i) {
      case "GET": {
        o = s.onGet;
        break;
      }
      case "POST": {
        o = s.onPost;
        break;
      }
      case "PUT": {
        o = s.onPut;
        break;
      }
      case "PATCH": {
        o = s.onPatch;
        break;
      }
      case "DELETE": {
        o = s.onDelete;
        break;
      }
      case "OPTIONS": {
        o = s.onOptions;
        break;
      }
      case "HEAD": {
        o = s.onHead;
        break;
      }
    }
    if (typeof o == "function" ? n2.push(o) : Array.isArray(o) && n2.push(...o), a)
      for (const c of Object.values(s))
        typeof c == "function" && (c.__brand === "server_loader" ? e.push(c) : c.__brand === "server_action" && t.push(c));
  }
};
function mt3(e, t) {
  return async (n2) => {
    if (n2.headersSent) {
      n2.exit();
      return;
    }
    const { method: r } = n2, a = j3(n2), i = G4(n2) === "dev", s = n2[Q2];
    if (i && r === "GET" && n2.query.has(ae3) && console.warn(`Seems like you are submitting a Qwik Action via GET request. Qwik Actions should be submitted via POST request.
Make sure your <form> has method="POST" attribute, like this: <form method="POST">`), r === "POST") {
      const o = n2.query.get(ae3);
      if (o) {
        const c = globalThis._qwikActionsMap, l2 = e.find((f2) => f2.__id === o) ?? (c == null ? void 0 : c.get(o));
        if (l2) {
          n2.sharedMap.set(z3, o);
          const f2 = await n2.parseBody();
          if (!f2 || typeof f2 != "object")
            throw new Error(`Expected request data for the action id ${o} to be an object`);
          const h = await he3(n2, l2.__validators, f2, i);
          if (!h.success)
            a[o] = n2.fail(h.status ?? 500, h.error);
          else {
            const m = i ? await U3(n2, l2.__qrl.getSymbol().split("_", 1)[0], () => l2.__qrl.call(n2, h.data, n2)) : await l2.__qrl.call(n2, h.data, n2);
            i && F2(s, m, l2.__qrl), a[o] = m;
          }
        }
      }
    }
    if (t.length > 0) {
      const o = t.map((c) => {
        const l2 = c.__id;
        return a[l2] = he3(n2, c.__validators, void 0, i).then((f2) => f2.success ? i ? U3(n2, c.__qrl.getSymbol().split("_", 1)[0], () => c.__qrl.call(n2, n2)) : c.__qrl.call(n2, n2) : n2.fail(f2.status ?? 500, f2.error)).then((f2) => (typeof f2 == "function" ? a[l2] = f2() : (i && F2(s, f2, c.__qrl), a[l2] = f2), f2)), a[l2];
      });
      await Promise.all(o);
    }
  };
}
async function he3(e, t, n2, r) {
  let a = { success: true, data: n2 };
  if (t)
    for (const i of t)
      if (r ? a = await U3(e, "validator$", () => i.validate(e, n2)) : a = await i.validate(e, n2), a.success)
        n2 = a.data;
      else
        return a;
  return a;
}
function gt3(e) {
  return e ? typeof e == "object" && Symbol.asyncIterator in e : false;
}
async function yt3(e) {
  const t = e.query.get(Ze4);
  if (t && e.request.headers.get("X-QRL") === t && e.request.headers.get("Content-Type") === "application/qwik-json") {
    e.exit();
    const n2 = G4(e) === "dev", r = e[Q2], a = await e.parseBody();
    if (Array.isArray(a)) {
      const [i, ...s] = a;
      if (St3(i) && i.getHash() === t) {
        let o;
        try {
          n2 ? o = await U3(e, `server_${i.getSymbol()}`, () => i.apply(e, s)) : o = await i.apply(e, s);
        } catch (c) {
          if (c instanceof Fe4) {
            e.headers.set("Content-Type", "application/qwik-json"), e.send(c.status, await r._serializeData(c.data, true));
            return;
          }
          e.headers.set("Content-Type", "application/qwik-json"), e.send(500, await r._serializeData(c, true));
          return;
        }
        if (gt3(o)) {
          e.headers.set("Content-Type", "text/qwik-json-stream");
          const l2 = e.getWritableStream().getWriter();
          for await (const f2 of o) {
            n2 && F2(r, f2, i);
            const h = await r._serializeData(f2, true);
            if (e.signal.aborted)
              break;
            await l2.write(J3.encode(`${h}
`));
          }
          l2.close();
        } else {
          F2(r, o, i), e.headers.set("Content-Type", "application/qwik-json");
          const c = await r._serializeData(o, true);
          e.send(200, c);
        }
        return;
      }
    }
    throw e.error(500, "Invalid request");
  }
}
function wt3(e) {
  const t = Z4(e), { basePathname: n2, pathname: r, url: a, sharedMap: i } = e;
  if (!i.has(W3) && r !== n2 && !r.endsWith(".html")) {
    if (t) {
      if (!r.endsWith("/"))
        throw e.redirect(301, r + "/" + a.search);
    } else if (r.endsWith("/"))
      throw e.redirect(301, r.slice(0, r.length - 1) + a.search);
  }
}
function F2(e, t, n2) {
  try {
    e._verifySerializable(t, void 0);
  } catch (r) {
    throw r instanceof Error && n2.dev && (r.loc = n2.dev), r;
  }
}
var St3 = (e) => typeof e == "function" && typeof e.getSymbol == "function";
function bt3(e) {
  const t = e[e.length - 1];
  return t && typeof t.default == "function";
}
function Me4(e, t) {
  e = new URL(e), e.pathname.endsWith(D4) && (e.pathname = e.pathname.slice(0, -D4.length)), t ? e.pathname.endsWith("/") || (e.pathname += "/") : e.pathname.endsWith("/") && (e.pathname = e.pathname.slice(0, -1));
  const n2 = e.search.slice(1).replaceAll(/&?q(action|data|func)=[^&]+/g, "");
  return `${e.pathname}${n2 ? `?${n2}` : ""}${e.hash}`;
}
var J3 = new TextEncoder();
function Rt3(e) {
  if (Ct3(e.request.headers, "application/x-www-form-urlencoded", "multipart/form-data", "text/plain")) {
    const n2 = e.request.headers.get("origin"), r = e.url.origin;
    if (n2 !== r)
      throw e.error(403, `CSRF check failed. Cross-site ${e.method} form submissions are forbidden.
The request origin "${n2}" does not match the server origin "${r}".`);
  }
}
function At3(e) {
  return async (t) => {
    if (t.headersSent || t.sharedMap.has(W3))
      return;
    t.request.headers.forEach((h, m) => h);
    const r = t.headers;
    r.has("Content-Type") || r.set("Content-Type", "text/html; charset=utf-8");
    const a = Z4(t), { readable: i, writable: s } = new TextEncoderStream(), o = t.getWritableStream(), c = i.pipeTo(o, { preventClose: true }), l2 = s.getWriter(), f2 = t.status();
    try {
      const h = G4(t) === "static", m = ht3(t), d2 = await e({ base: t.basePathname + "build/", stream: l2, serverData: m, containerAttributes: { "q:render": h ? "static" : "", ...m.containerAttributes } }), g3 = { loaders: j3(t), action: t.sharedMap.get(z3), status: f2 !== 200 ? f2 : 200, href: Me4(t.url, a) };
      typeof d2.html == "string" && await l2.write(d2.html), t.sharedMap.set("qData", g3);
    } finally {
      await l2.ready, await l2.close(), await c;
    }
    await o.close();
  };
}
async function Tt3(e) {
  if (!e.sharedMap.has(W3))
    return;
  try {
    await e.next();
  } catch (i) {
    if (!(i instanceof I3))
      throw i;
  }
  if (e.headersSent)
    return;
  const n2 = e.status(), r = e.headers.get("Location");
  if (n2 >= 301 && n2 <= 308 && r) {
    const i = xt3(r);
    if (i) {
      e.headers.set("Location", i), e.getWritableStream().close();
      return;
    } else
      e.status(200), e.headers.delete("Location");
  }
}
async function _t3(e) {
  if (!e.sharedMap.has(W3) || (await e.next(), e.headersSent || e.exited))
    return;
  const n2 = e.status(), r = e.headers.get("Location"), a = Z4(e);
  e.request.headers.forEach((l2, f2) => l2), e.headers.set("Content-Type", "application/json; charset=utf-8");
  const i = { loaders: j3(e), action: e.sharedMap.get(z3), status: n2 !== 200 ? n2 : 200, href: Me4(e.url, a), redirect: r ?? void 0 }, s = e.getWritableStream().getWriter(), c = await e[Q2]._serializeData(i, true);
  s.write(J3.encode(c)), e.sharedMap.set("qData", i), s.close();
}
function xt3(e) {
  if (e.startsWith("/")) {
    const t = D4, n2 = new URL(e, "http://localhost");
    return (n2.pathname.endsWith("/") ? n2.pathname.slice(0, -1) : n2.pathname) + (t.startsWith("/") ? "" : "/") + t + n2.search;
  } else
    return;
}
function pe2() {
  return typeof performance < "u" ? performance.now() : 0;
}
async function U3(e, t, n2) {
  const r = pe2();
  try {
    return await n2();
  } finally {
    const a = pe2() - r;
    let i = e.sharedMap.get("@serverTiming");
    i || e.sharedMap.set("@serverTiming", i = []), i.push([t, a]);
  }
}
function Ct3(e, ...t) {
  var n2;
  const r = ((n2 = e.get("content-type")) == null ? void 0 : n2.split(/;,/, 1)[0].trim()) ?? "";
  return t.includes(r);
}
async function Dt3(e, t, n2) {
  const { render: r, qwikCityPlan: a, manifest: i, checkOrigin: s } = t, o = e.url.pathname, c = st3(o, a.trailingSlash), l2 = await Pt3(a, c, e.request.method, s ?? true, r);
  if (l2) {
    const [f2, h] = l2;
    return it3(e, f2, h, i, a.trailingSlash, a.basePathname, n2);
  }
  return null;
}
async function Pt3(e, t, n2, r, a) {
  const { routes: i, serverPlugins: s, menus: o, cacheModules: c } = e, l2 = await nt3(i, o, c, t), f2 = pt3(s, l2, n2, r, At3(a));
  return f2.length > 0 ? [l2, f2] : null;
}
var x;
var k3;
var O2;
var me2;
var Mt3 = (me2 = class {
  constructor() {
    v(this, x, null);
    v(this, k3, new TextEncoder());
    v(this, O2, new TransformStream({ transform: (e, t) => {
      e = String(e);
      let n2 = "";
      for (let r = 0; r < e.length; r++) {
        const a = e[r], i = a.charCodeAt(0);
        if (T(this, x) !== null) {
          const s = T(this, x);
          if (B3(this, x, null), 56320 <= i && i <= 57343) {
            n2 += s + a;
            continue;
          }
          n2 += "\uFFFD";
        }
        if (55296 <= i && i <= 56319) {
          B3(this, x, a);
          continue;
        }
        if (56320 <= i && i <= 57343) {
          n2 += "\uFFFD";
          continue;
        }
        n2 += a;
      }
      n2 && t.enqueue(T(this, k3).encode(n2));
    }, flush: (e) => {
      T(this, x) !== null && e.enqueue(new Uint8Array([239, 191, 189]));
    } }));
  }
  get encoding() {
    return T(this, k3).encoding;
  }
  get readable() {
    return T(this, O2).readable;
  }
  get writable() {
    return T(this, O2).writable;
  }
  get [Symbol.toStringTag]() {
    return "TextEncoderStream";
  }
}, x = /* @__PURE__ */ new WeakMap(), k3 = /* @__PURE__ */ new WeakMap(), O2 = /* @__PURE__ */ new WeakMap(), me2);
function kt3(e) {
  try {
    new globalThis.TextEncoderStream();
  } catch {
    globalThis.TextEncoderStream = Mt3;
  }
  const t = { _deserializeData: Fo, _serializeData: Z$, _verifySerializable: nl };
  e.manifest && Xe2(e.manifest);
  async function n2(r, a, i) {
    try {
      const s = new URL(r.url);
      if (isStaticPath(r.method, s))
        return a.ASSETS.fetch(r);
      const o = s.hostname !== "127.0.0.1" && s.hostname !== "localhost" && s.port === "" && r.method === "GET", c = new Request(s.href, r), l2 = o ? await caches.open("custom:qwikcity") : null;
      if (l2) {
        const d2 = await l2.match(c);
        if (d2)
          return d2;
      }
      const h = await Dt3({ mode: "server", locale: void 0, url: s, request: r, env: { get(d2) {
        return a[d2];
      } }, getWritableStream: (d2, g3, y, w) => {
        const { readable: A2, writable: C } = new TransformStream(), S2 = new Response(A2, { status: d2, headers: qe4(g3, y) });
        return w(S2), C;
      }, getClientConn: () => ({ ip: r.headers.get("CF-connecting-ip") || "", country: r.headers.get("CF-IPCountry") || "" }), platform: { request: r, env: a, ctx: i } }, e, t);
      if (h) {
        h.completion.then((g3) => {
          g3 && console.error(g3);
        });
        const d2 = await h.response;
        if (d2)
          return d2.ok && l2 && d2.headers.has("Cache-Control") && i.waitUntil(l2.put(c, d2.clone())), d2;
      }
      const m = isStaticPath(r.method || "GET", s) ? "Not Found" : getNotFound(s.pathname);
      return new Response(m, { status: 404, headers: { "Content-Type": "text/html; charset=utf-8", "X-Not-Found": s.pathname } });
    } catch (s) {
      return console.error(s), new Response(String(s || "Error"), { status: 500, headers: { "Content-Type": "text/plain; charset=utf-8", "X-Error": "cloudflare-pages" } });
    }
  }
  return n2;
}
var It3 = kt3({ render: Ze2, qwikCityPlan: pa, manifest: $e2 });
var worker_default = { fetch: It3 };
var drainBody = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
};
var middleware_ensure_req_body_drained_default = drainBody;
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
var jsonError = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
};
var middleware_miniflare3_json_error_default = jsonError;
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = worker_default;
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  };
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      };
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = (request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    };
    #dispatcher = (type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    };
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;

// node_modules/wrangler/templates/pages-dev-util.ts
function isRoutingRuleMatch(pathname, routingRule) {
  if (!pathname) {
    throw new Error("Pathname is undefined.");
  }
  if (!routingRule) {
    throw new Error("Routing rule is undefined.");
  }
  const ruleRegExp = transformRoutingRuleToRegExp(routingRule);
  return pathname.match(ruleRegExp) !== null;
}
function transformRoutingRuleToRegExp(rule) {
  let transformedRule;
  if (rule === "/" || rule === "/*") {
    transformedRule = rule;
  } else if (rule.endsWith("/*")) {
    transformedRule = `${rule.substring(0, rule.length - 2)}(/*)?`;
  } else if (rule.endsWith("/")) {
    transformedRule = `${rule.substring(0, rule.length - 1)}(/)?`;
  } else if (rule.endsWith("*")) {
    transformedRule = rule;
  } else {
    transformedRule = `${rule}(/)?`;
  }
  transformedRule = `^${transformedRule.replaceAll(/\./g, "\\.").replaceAll(/\*/g, ".*")}$`;
  return new RegExp(transformedRule);
}

// .wrangler/tmp/pages-RwzcW7/3n9e75x66gk.js
var define_ROUTES_default = {
  version: 1,
  include: [
    "/*"
  ],
  exclude: [
    "/build/*",
    "/assets/*"
  ]
};
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        if (middleware_loader_entry_default.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return middleware_loader_entry_default.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody2 = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
};
var middleware_ensure_req_body_drained_default2 = drainBody2;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError2(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError2(e.cause)
  };
}
var jsonError2 = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError2(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
};
var middleware_miniflare3_json_error_default2 = jsonError2;

// .wrangler/tmp/bundle-Wbngxz/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__2 = [
  middleware_ensure_req_body_drained_default2,
  middleware_miniflare3_json_error_default2
];
var middleware_insertion_facade_default2 = pages_dev_pipeline_default;

// node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__2 = [];
function __facade_register__2(...args) {
  __facade_middleware__2.push(...args.flat());
}
function __facade_invokeChain__2(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__2(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
function __facade_invoke__2(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__2(request, env, ctx, dispatch, [
    ...__facade_middleware__2,
    finalMiddleware
  ]);
}

// .wrangler/tmp/bundle-Wbngxz/middleware-loader.entry.ts
var __Facade_ScheduledController__2 = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__2)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler2(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__2 === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__2.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__2) {
    __facade_register__2(middleware);
  }
  const fetchDispatcher = function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  };
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__2(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      };
      return __facade_invoke__2(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
function wrapWorkerEntrypoint2(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__2 === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__2.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__2) {
    __facade_register__2(middleware);
  }
  return class extends klass {
    #fetchDispatcher = (request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    };
    #dispatcher = (type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__2(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    };
    fetch(request) {
      return __facade_invoke__2(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
var WRAPPED_ENTRY2;
if (typeof middleware_insertion_facade_default2 === "object") {
  WRAPPED_ENTRY2 = wrapExportedHandler2(middleware_insertion_facade_default2);
} else if (typeof middleware_insertion_facade_default2 === "function") {
  WRAPPED_ENTRY2 = wrapWorkerEntrypoint2(middleware_insertion_facade_default2);
}
var middleware_loader_entry_default2 = WRAPPED_ENTRY2;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__2 as __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default2 as default
};
/**
 * @license
 * @builder.io/qwik 1.9.0
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/QwikDev/qwik/blob/main/LICENSE
 */
/**
* @license
* @builder.io/qwik/server 1.9.0
* Copyright Builder.io, Inc. All Rights Reserved.
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/QwikDev/qwik/blob/main/LICENSE
*/
//# sourceMappingURL=3n9e75x66gk.js.map
