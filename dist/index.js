"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i3 = decorators.length - 1, decorator; i3 >= 0; i3--)
      if (decorator = decorators[i3])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp(target, key, result);
    return result;
  };

  // node_modules/@lit/reactive-element/css-tag.js
  var t = globalThis;
  var e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
  var s = Symbol();
  var o = /* @__PURE__ */ new WeakMap();
  var n = class {
    constructor(t3, e4, o4) {
      if (this._$cssResult$ = true, o4 !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t3, this.t = e4;
    }
    get styleSheet() {
      let t3 = this.o;
      const s2 = this.t;
      if (e && void 0 === t3) {
        const e4 = void 0 !== s2 && 1 === s2.length;
        e4 && (t3 = o.get(s2)), void 0 === t3 && ((this.o = t3 = new CSSStyleSheet()).replaceSync(this.cssText), e4 && o.set(s2, t3));
      }
      return t3;
    }
    toString() {
      return this.cssText;
    }
  };
  var r = (t3) => new n("string" == typeof t3 ? t3 : t3 + "", void 0, s);
  var i = (t3, ...e4) => {
    const o4 = 1 === t3.length ? t3[0] : e4.reduce((e5, s2, o5) => e5 + ((t4) => {
      if (true === t4._$cssResult$) return t4.cssText;
      if ("number" == typeof t4) return t4;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t4 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(s2) + t3[o5 + 1], t3[0]);
    return new n(o4, t3, s);
  };
  var S = (s2, o4) => {
    if (e) s2.adoptedStyleSheets = o4.map((t3) => t3 instanceof CSSStyleSheet ? t3 : t3.styleSheet);
    else for (const e4 of o4) {
      const o5 = document.createElement("style"), n5 = t.litNonce;
      void 0 !== n5 && o5.setAttribute("nonce", n5), o5.textContent = e4.cssText, s2.appendChild(o5);
    }
  };
  var c = e ? (t3) => t3 : (t3) => t3 instanceof CSSStyleSheet ? ((t4) => {
    let e4 = "";
    for (const s2 of t4.cssRules) e4 += s2.cssText;
    return r(e4);
  })(t3) : t3;

  // node_modules/@lit/reactive-element/reactive-element.js
  var { is: i2, defineProperty: e2, getOwnPropertyDescriptor: r2, getOwnPropertyNames: h, getOwnPropertySymbols: o2, getPrototypeOf: n2 } = Object;
  var a = globalThis;
  var c2 = a.trustedTypes;
  var l = c2 ? c2.emptyScript : "";
  var p = a.reactiveElementPolyfillSupport;
  var d = (t3, s2) => t3;
  var u = { toAttribute(t3, s2) {
    switch (s2) {
      case Boolean:
        t3 = t3 ? l : null;
        break;
      case Object:
      case Array:
        t3 = null == t3 ? t3 : JSON.stringify(t3);
    }
    return t3;
  }, fromAttribute(t3, s2) {
    let i3 = t3;
    switch (s2) {
      case Boolean:
        i3 = null !== t3;
        break;
      case Number:
        i3 = null === t3 ? null : Number(t3);
        break;
      case Object:
      case Array:
        try {
          i3 = JSON.parse(t3);
        } catch (t4) {
          i3 = null;
        }
    }
    return i3;
  } };
  var f = (t3, s2) => !i2(t3, s2);
  var y = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f };
  Symbol.metadata ??= Symbol("metadata"), a.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
  var b = class extends HTMLElement {
    static addInitializer(t3) {
      this._$Ei(), (this.l ??= []).push(t3);
    }
    static get observedAttributes() {
      return this.finalize(), this._$Eh && [...this._$Eh.keys()];
    }
    static createProperty(t3, s2 = y) {
      if (s2.state && (s2.attribute = false), this._$Ei(), this.elementProperties.set(t3, s2), !s2.noAccessor) {
        const i3 = Symbol(), r5 = this.getPropertyDescriptor(t3, i3, s2);
        void 0 !== r5 && e2(this.prototype, t3, r5);
      }
    }
    static getPropertyDescriptor(t3, s2, i3) {
      const { get: e4, set: h4 } = r2(this.prototype, t3) ?? { get() {
        return this[s2];
      }, set(t4) {
        this[s2] = t4;
      } };
      return { get() {
        return e4?.call(this);
      }, set(s3) {
        const r5 = e4?.call(this);
        h4.call(this, s3), this.requestUpdate(t3, r5, i3);
      }, configurable: true, enumerable: true };
    }
    static getPropertyOptions(t3) {
      return this.elementProperties.get(t3) ?? y;
    }
    static _$Ei() {
      if (this.hasOwnProperty(d("elementProperties"))) return;
      const t3 = n2(this);
      t3.finalize(), void 0 !== t3.l && (this.l = [...t3.l]), this.elementProperties = new Map(t3.elementProperties);
    }
    static finalize() {
      if (this.hasOwnProperty(d("finalized"))) return;
      if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d("properties"))) {
        const t4 = this.properties, s2 = [...h(t4), ...o2(t4)];
        for (const i3 of s2) this.createProperty(i3, t4[i3]);
      }
      const t3 = this[Symbol.metadata];
      if (null !== t3) {
        const s2 = litPropertyMetadata.get(t3);
        if (void 0 !== s2) for (const [t4, i3] of s2) this.elementProperties.set(t4, i3);
      }
      this._$Eh = /* @__PURE__ */ new Map();
      for (const [t4, s2] of this.elementProperties) {
        const i3 = this._$Eu(t4, s2);
        void 0 !== i3 && this._$Eh.set(i3, t4);
      }
      this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s2) {
      const i3 = [];
      if (Array.isArray(s2)) {
        const e4 = new Set(s2.flat(1 / 0).reverse());
        for (const s3 of e4) i3.unshift(c(s3));
      } else void 0 !== s2 && i3.push(c(s2));
      return i3;
    }
    static _$Eu(t3, s2) {
      const i3 = s2.attribute;
      return false === i3 ? void 0 : "string" == typeof i3 ? i3 : "string" == typeof t3 ? t3.toLowerCase() : void 0;
    }
    constructor() {
      super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
    }
    _$Ev() {
      this._$ES = new Promise((t3) => this.enableUpdating = t3), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t3) => t3(this));
    }
    addController(t3) {
      (this._$EO ??= /* @__PURE__ */ new Set()).add(t3), void 0 !== this.renderRoot && this.isConnected && t3.hostConnected?.();
    }
    removeController(t3) {
      this._$EO?.delete(t3);
    }
    _$E_() {
      const t3 = /* @__PURE__ */ new Map(), s2 = this.constructor.elementProperties;
      for (const i3 of s2.keys()) this.hasOwnProperty(i3) && (t3.set(i3, this[i3]), delete this[i3]);
      t3.size > 0 && (this._$Ep = t3);
    }
    createRenderRoot() {
      const t3 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
      return S(t3, this.constructor.elementStyles), t3;
    }
    connectedCallback() {
      this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach((t3) => t3.hostConnected?.());
    }
    enableUpdating(t3) {
    }
    disconnectedCallback() {
      this._$EO?.forEach((t3) => t3.hostDisconnected?.());
    }
    attributeChangedCallback(t3, s2, i3) {
      this._$AK(t3, i3);
    }
    _$EC(t3, s2) {
      const i3 = this.constructor.elementProperties.get(t3), e4 = this.constructor._$Eu(t3, i3);
      if (void 0 !== e4 && true === i3.reflect) {
        const r5 = (void 0 !== i3.converter?.toAttribute ? i3.converter : u).toAttribute(s2, i3.type);
        this._$Em = t3, null == r5 ? this.removeAttribute(e4) : this.setAttribute(e4, r5), this._$Em = null;
      }
    }
    _$AK(t3, s2) {
      const i3 = this.constructor, e4 = i3._$Eh.get(t3);
      if (void 0 !== e4 && this._$Em !== e4) {
        const t4 = i3.getPropertyOptions(e4), r5 = "function" == typeof t4.converter ? { fromAttribute: t4.converter } : void 0 !== t4.converter?.fromAttribute ? t4.converter : u;
        this._$Em = e4, this[e4] = r5.fromAttribute(s2, t4.type), this._$Em = null;
      }
    }
    requestUpdate(t3, s2, i3) {
      if (void 0 !== t3) {
        if (i3 ??= this.constructor.getPropertyOptions(t3), !(i3.hasChanged ?? f)(this[t3], s2)) return;
        this.P(t3, s2, i3);
      }
      false === this.isUpdatePending && (this._$ES = this._$ET());
    }
    P(t3, s2, i3) {
      this._$AL.has(t3) || this._$AL.set(t3, s2), true === i3.reflect && this._$Em !== t3 && (this._$Ej ??= /* @__PURE__ */ new Set()).add(t3);
    }
    async _$ET() {
      this.isUpdatePending = true;
      try {
        await this._$ES;
      } catch (t4) {
        Promise.reject(t4);
      }
      const t3 = this.scheduleUpdate();
      return null != t3 && await t3, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      if (!this.isUpdatePending) return;
      if (!this.hasUpdated) {
        if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
          for (const [t5, s3] of this._$Ep) this[t5] = s3;
          this._$Ep = void 0;
        }
        const t4 = this.constructor.elementProperties;
        if (t4.size > 0) for (const [s3, i3] of t4) true !== i3.wrapped || this._$AL.has(s3) || void 0 === this[s3] || this.P(s3, this[s3], i3);
      }
      let t3 = false;
      const s2 = this._$AL;
      try {
        t3 = this.shouldUpdate(s2), t3 ? (this.willUpdate(s2), this._$EO?.forEach((t4) => t4.hostUpdate?.()), this.update(s2)) : this._$EU();
      } catch (s3) {
        throw t3 = false, this._$EU(), s3;
      }
      t3 && this._$AE(s2);
    }
    willUpdate(t3) {
    }
    _$AE(t3) {
      this._$EO?.forEach((t4) => t4.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t3)), this.updated(t3);
    }
    _$EU() {
      this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$ES;
    }
    shouldUpdate(t3) {
      return true;
    }
    update(t3) {
      this._$Ej &&= this._$Ej.forEach((t4) => this._$EC(t4, this[t4])), this._$EU();
    }
    updated(t3) {
    }
    firstUpdated(t3) {
    }
  };
  b.elementStyles = [], b.shadowRootOptions = { mode: "open" }, b[d("elementProperties")] = /* @__PURE__ */ new Map(), b[d("finalized")] = /* @__PURE__ */ new Map(), p?.({ ReactiveElement: b }), (a.reactiveElementVersions ??= []).push("2.0.4");

  // node_modules/lit-html/lit-html.js
  var n3 = globalThis;
  var c3 = n3.trustedTypes;
  var h2 = c3 ? c3.createPolicy("lit-html", { createHTML: (t3) => t3 }) : void 0;
  var f2 = "$lit$";
  var v = `lit$${Math.random().toFixed(9).slice(2)}$`;
  var m = "?" + v;
  var _ = `<${m}>`;
  var w = document;
  var lt = () => w.createComment("");
  var st = (t3) => null === t3 || "object" != typeof t3 && "function" != typeof t3;
  var g = Array.isArray;
  var $ = (t3) => g(t3) || "function" == typeof t3?.[Symbol.iterator];
  var x = "[ 	\n\f\r]";
  var T = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  var E = /-->/g;
  var k = />/g;
  var O = RegExp(`>|${x}(?:([^\\s"'>=/]+)(${x}*=${x}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
  var S2 = /'/g;
  var j = /"/g;
  var M = /^(?:script|style|textarea|title)$/i;
  var P = (t3) => (i3, ...s2) => ({ _$litType$: t3, strings: i3, values: s2 });
  var ke = P(1);
  var Oe = P(2);
  var Se = P(3);
  var R = Symbol.for("lit-noChange");
  var D = Symbol.for("lit-nothing");
  var V = /* @__PURE__ */ new WeakMap();
  var I = w.createTreeWalker(w, 129);
  function N(t3, i3) {
    if (!g(t3) || !t3.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== h2 ? h2.createHTML(i3) : i3;
  }
  var U = (t3, i3) => {
    const s2 = t3.length - 1, e4 = [];
    let h4, o4 = 2 === i3 ? "<svg>" : 3 === i3 ? "<math>" : "", n5 = T;
    for (let i4 = 0; i4 < s2; i4++) {
      const s3 = t3[i4];
      let r5, l2, c4 = -1, a2 = 0;
      for (; a2 < s3.length && (n5.lastIndex = a2, l2 = n5.exec(s3), null !== l2); ) a2 = n5.lastIndex, n5 === T ? "!--" === l2[1] ? n5 = E : void 0 !== l2[1] ? n5 = k : void 0 !== l2[2] ? (M.test(l2[2]) && (h4 = RegExp("</" + l2[2], "g")), n5 = O) : void 0 !== l2[3] && (n5 = O) : n5 === O ? ">" === l2[0] ? (n5 = h4 ?? T, c4 = -1) : void 0 === l2[1] ? c4 = -2 : (c4 = n5.lastIndex - l2[2].length, r5 = l2[1], n5 = void 0 === l2[3] ? O : '"' === l2[3] ? j : S2) : n5 === j || n5 === S2 ? n5 = O : n5 === E || n5 === k ? n5 = T : (n5 = O, h4 = void 0);
      const u2 = n5 === O && t3[i4 + 1].startsWith("/>") ? " " : "";
      o4 += n5 === T ? s3 + _ : c4 >= 0 ? (e4.push(r5), s3.slice(0, c4) + f2 + s3.slice(c4) + v + u2) : s3 + v + (-2 === c4 ? i4 : u2);
    }
    return [N(t3, o4 + (t3[s2] || "<?>") + (2 === i3 ? "</svg>" : 3 === i3 ? "</math>" : "")), e4];
  };
  var B = class _B {
    constructor({ strings: t3, _$litType$: i3 }, s2) {
      let e4;
      this.parts = [];
      let h4 = 0, o4 = 0;
      const n5 = t3.length - 1, r5 = this.parts, [l2, a2] = U(t3, i3);
      if (this.el = _B.createElement(l2, s2), I.currentNode = this.el.content, 2 === i3 || 3 === i3) {
        const t4 = this.el.content.firstChild;
        t4.replaceWith(...t4.childNodes);
      }
      for (; null !== (e4 = I.nextNode()) && r5.length < n5; ) {
        if (1 === e4.nodeType) {
          if (e4.hasAttributes()) for (const t4 of e4.getAttributeNames()) if (t4.endsWith(f2)) {
            const i4 = a2[o4++], s3 = e4.getAttribute(t4).split(v), n6 = /([.?@])?(.*)/.exec(i4);
            r5.push({ type: 1, index: h4, name: n6[2], strings: s3, ctor: "." === n6[1] ? Y : "?" === n6[1] ? Z : "@" === n6[1] ? q : G }), e4.removeAttribute(t4);
          } else t4.startsWith(v) && (r5.push({ type: 6, index: h4 }), e4.removeAttribute(t4));
          if (M.test(e4.tagName)) {
            const t4 = e4.textContent.split(v), i4 = t4.length - 1;
            if (i4 > 0) {
              e4.textContent = c3 ? c3.emptyScript : "";
              for (let s3 = 0; s3 < i4; s3++) e4.append(t4[s3], lt()), I.nextNode(), r5.push({ type: 2, index: ++h4 });
              e4.append(t4[i4], lt());
            }
          }
        } else if (8 === e4.nodeType) if (e4.data === m) r5.push({ type: 2, index: h4 });
        else {
          let t4 = -1;
          for (; -1 !== (t4 = e4.data.indexOf(v, t4 + 1)); ) r5.push({ type: 7, index: h4 }), t4 += v.length - 1;
        }
        h4++;
      }
    }
    static createElement(t3, i3) {
      const s2 = w.createElement("template");
      return s2.innerHTML = t3, s2;
    }
  };
  function z(t3, i3, s2 = t3, e4) {
    if (i3 === R) return i3;
    let h4 = void 0 !== e4 ? s2.o?.[e4] : s2.l;
    const o4 = st(i3) ? void 0 : i3._$litDirective$;
    return h4?.constructor !== o4 && (h4?._$AO?.(false), void 0 === o4 ? h4 = void 0 : (h4 = new o4(t3), h4._$AT(t3, s2, e4)), void 0 !== e4 ? (s2.o ??= [])[e4] = h4 : s2.l = h4), void 0 !== h4 && (i3 = z(t3, h4._$AS(t3, i3.values), h4, e4)), i3;
  }
  var F = class {
    constructor(t3, i3) {
      this._$AV = [], this._$AN = void 0, this._$AD = t3, this._$AM = i3;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(t3) {
      const { el: { content: i3 }, parts: s2 } = this._$AD, e4 = (t3?.creationScope ?? w).importNode(i3, true);
      I.currentNode = e4;
      let h4 = I.nextNode(), o4 = 0, n5 = 0, r5 = s2[0];
      for (; void 0 !== r5; ) {
        if (o4 === r5.index) {
          let i4;
          2 === r5.type ? i4 = new et(h4, h4.nextSibling, this, t3) : 1 === r5.type ? i4 = new r5.ctor(h4, r5.name, r5.strings, this, t3) : 6 === r5.type && (i4 = new K(h4, this, t3)), this._$AV.push(i4), r5 = s2[++n5];
        }
        o4 !== r5?.index && (h4 = I.nextNode(), o4++);
      }
      return I.currentNode = w, e4;
    }
    p(t3) {
      let i3 = 0;
      for (const s2 of this._$AV) void 0 !== s2 && (void 0 !== s2.strings ? (s2._$AI(t3, s2, i3), i3 += s2.strings.length - 2) : s2._$AI(t3[i3])), i3++;
    }
  };
  var et = class _et {
    get _$AU() {
      return this._$AM?._$AU ?? this.v;
    }
    constructor(t3, i3, s2, e4) {
      this.type = 2, this._$AH = D, this._$AN = void 0, this._$AA = t3, this._$AB = i3, this._$AM = s2, this.options = e4, this.v = e4?.isConnected ?? true;
    }
    get parentNode() {
      let t3 = this._$AA.parentNode;
      const i3 = this._$AM;
      return void 0 !== i3 && 11 === t3?.nodeType && (t3 = i3.parentNode), t3;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t3, i3 = this) {
      t3 = z(this, t3, i3), st(t3) ? t3 === D || null == t3 || "" === t3 ? (this._$AH !== D && this._$AR(), this._$AH = D) : t3 !== this._$AH && t3 !== R && this._(t3) : void 0 !== t3._$litType$ ? this.$(t3) : void 0 !== t3.nodeType ? this.T(t3) : $(t3) ? this.k(t3) : this._(t3);
    }
    O(t3) {
      return this._$AA.parentNode.insertBefore(t3, this._$AB);
    }
    T(t3) {
      this._$AH !== t3 && (this._$AR(), this._$AH = this.O(t3));
    }
    _(t3) {
      this._$AH !== D && st(this._$AH) ? this._$AA.nextSibling.data = t3 : this.T(w.createTextNode(t3)), this._$AH = t3;
    }
    $(t3) {
      const { values: i3, _$litType$: s2 } = t3, e4 = "number" == typeof s2 ? this._$AC(t3) : (void 0 === s2.el && (s2.el = B.createElement(N(s2.h, s2.h[0]), this.options)), s2);
      if (this._$AH?._$AD === e4) this._$AH.p(i3);
      else {
        const t4 = new F(e4, this), s3 = t4.u(this.options);
        t4.p(i3), this.T(s3), this._$AH = t4;
      }
    }
    _$AC(t3) {
      let i3 = V.get(t3.strings);
      return void 0 === i3 && V.set(t3.strings, i3 = new B(t3)), i3;
    }
    k(t3) {
      g(this._$AH) || (this._$AH = [], this._$AR());
      const i3 = this._$AH;
      let s2, e4 = 0;
      for (const h4 of t3) e4 === i3.length ? i3.push(s2 = new _et(this.O(lt()), this.O(lt()), this, this.options)) : s2 = i3[e4], s2._$AI(h4), e4++;
      e4 < i3.length && (this._$AR(s2 && s2._$AB.nextSibling, e4), i3.length = e4);
    }
    _$AR(t3 = this._$AA.nextSibling, i3) {
      for (this._$AP?.(false, true, i3); t3 && t3 !== this._$AB; ) {
        const i4 = t3.nextSibling;
        t3.remove(), t3 = i4;
      }
    }
    setConnected(t3) {
      void 0 === this._$AM && (this.v = t3, this._$AP?.(t3));
    }
  };
  var G = class {
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    constructor(t3, i3, s2, e4, h4) {
      this.type = 1, this._$AH = D, this._$AN = void 0, this.element = t3, this.name = i3, this._$AM = e4, this.options = h4, s2.length > 2 || "" !== s2[0] || "" !== s2[1] ? (this._$AH = Array(s2.length - 1).fill(new String()), this.strings = s2) : this._$AH = D;
    }
    _$AI(t3, i3 = this, s2, e4) {
      const h4 = this.strings;
      let o4 = false;
      if (void 0 === h4) t3 = z(this, t3, i3, 0), o4 = !st(t3) || t3 !== this._$AH && t3 !== R, o4 && (this._$AH = t3);
      else {
        const e5 = t3;
        let n5, r5;
        for (t3 = h4[0], n5 = 0; n5 < h4.length - 1; n5++) r5 = z(this, e5[s2 + n5], i3, n5), r5 === R && (r5 = this._$AH[n5]), o4 ||= !st(r5) || r5 !== this._$AH[n5], r5 === D ? t3 = D : t3 !== D && (t3 += (r5 ?? "") + h4[n5 + 1]), this._$AH[n5] = r5;
      }
      o4 && !e4 && this.j(t3);
    }
    j(t3) {
      t3 === D ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t3 ?? "");
    }
  };
  var Y = class extends G {
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(t3) {
      this.element[this.name] = t3 === D ? void 0 : t3;
    }
  };
  var Z = class extends G {
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(t3) {
      this.element.toggleAttribute(this.name, !!t3 && t3 !== D);
    }
  };
  var q = class extends G {
    constructor(t3, i3, s2, e4, h4) {
      super(t3, i3, s2, e4, h4), this.type = 5;
    }
    _$AI(t3, i3 = this) {
      if ((t3 = z(this, t3, i3, 0) ?? D) === R) return;
      const s2 = this._$AH, e4 = t3 === D && s2 !== D || t3.capture !== s2.capture || t3.once !== s2.once || t3.passive !== s2.passive, h4 = t3 !== D && (s2 === D || e4);
      e4 && this.element.removeEventListener(this.name, this, s2), h4 && this.element.addEventListener(this.name, this, t3), this._$AH = t3;
    }
    handleEvent(t3) {
      "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t3) : this._$AH.handleEvent(t3);
    }
  };
  var K = class {
    constructor(t3, i3, s2) {
      this.element = t3, this.type = 6, this._$AN = void 0, this._$AM = i3, this.options = s2;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t3) {
      z(this, t3);
    }
  };
  var Re = n3.litHtmlPolyfillSupport;
  Re?.(B, et), (n3.litHtmlVersions ??= []).push("3.2.0");
  var Q = (t3, i3, s2) => {
    const e4 = s2?.renderBefore ?? i3;
    let h4 = e4._$litPart$;
    if (void 0 === h4) {
      const t4 = s2?.renderBefore ?? null;
      e4._$litPart$ = h4 = new et(i3.insertBefore(lt(), t4), t4, void 0, s2 ?? {});
    }
    return h4._$AI(t3), h4;
  };

  // node_modules/lit-element/lit-element.js
  var h3 = class extends b {
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this.o = void 0;
    }
    createRenderRoot() {
      const t3 = super.createRenderRoot();
      return this.renderOptions.renderBefore ??= t3.firstChild, t3;
    }
    update(t3) {
      const e4 = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t3), this.o = Q(e4, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      super.connectedCallback(), this.o?.setConnected(true);
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this.o?.setConnected(false);
    }
    render() {
      return R;
    }
  };
  h3._$litElement$ = true, h3["finalized"] = true, globalThis.litElementHydrateSupport?.({ LitElement: h3 });
  var f3 = globalThis.litElementPolyfillSupport;
  f3?.({ LitElement: h3 });
  (globalThis.litElementVersions ??= []).push("4.1.0");

  // node_modules/@lit/reactive-element/decorators/custom-element.js
  var t2 = (t3) => (e4, o4) => {
    void 0 !== o4 ? o4.addInitializer(() => {
      customElements.define(t3, e4);
    }) : customElements.define(t3, e4);
  };

  // node_modules/@lit/reactive-element/decorators/property.js
  var o3 = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f };
  var r3 = (t3 = o3, e4, r5) => {
    const { kind: n5, metadata: i3 } = r5;
    let s2 = globalThis.litPropertyMetadata.get(i3);
    if (void 0 === s2 && globalThis.litPropertyMetadata.set(i3, s2 = /* @__PURE__ */ new Map()), s2.set(r5.name, t3), "accessor" === n5) {
      const { name: o4 } = r5;
      return { set(r6) {
        const n6 = e4.get.call(this);
        e4.set.call(this, r6), this.requestUpdate(o4, n6, t3);
      }, init(e5) {
        return void 0 !== e5 && this.P(o4, void 0, t3), e5;
      } };
    }
    if ("setter" === n5) {
      const { name: o4 } = r5;
      return function(r6) {
        const n6 = this[o4];
        e4.call(this, r6), this.requestUpdate(o4, n6, t3);
      };
    }
    throw Error("Unsupported decorator location: " + n5);
  };
  function n4(t3) {
    return (e4, o4) => "object" == typeof o4 ? r3(t3, e4, o4) : ((t4, e5, o5) => {
      const r5 = e5.hasOwnProperty(o5);
      return e5.constructor.createProperty(o5, r5 ? { ...t4, wrapped: true } : t4), r5 ? Object.getOwnPropertyDescriptor(e5, o5) : void 0;
    })(t3, e4, o4);
  }

  // node_modules/@lit/reactive-element/decorators/state.js
  function r4(r5) {
    return n4({ ...r5, state: true, attribute: false });
  }

  // src/lib/adapters/meta-api/index.ts
  var fetchLinkPreviewData = async (url) => {
    const response = await fetch(`https://web-highlights.herokuapp.com/meta/${encodeURIComponent(url)}`);
    return response.json();
  };

  // src/link.styles.ts
  var styles = i`
  :host {
    display: block;
    box-sizing: border-box;
    width: 100%;
    font-family: inherit;
    --background-color: #ffffff;
    --text-color: #000000;
    --border-color: rgb(124 139 154 / 25%);
    --metadata-color: rgba(0, 0, 0, 0.7);
    --dark-background-color: #121212;
    --dark-text-color: #e0e0e0;
    --dark-border-color: #8080803a;
    --dark-metadata-color: rgba(255, 255, 255, 0.7);
  }

  .previewbox-link-card {
    margin: 0;
    padding: 0;
    background-color: var(--background-color, red);
    overflow: hidden;
    border-radius: 3px;
    border: 1px solid var(--border-color);
  }

  .link {
    text-decoration: none;
    color: var(--text-color);
    display: flex;
    text-decoration: none;
    color: inherit;
  }

  .kg-bookmark-content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 100%;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 20px;
    overflow: hidden;
  }

  .kg-bookmark-title {
    font-size: 1rem;
    line-height: 1.4em;
    font-weight: 500;
    color: var(--text-color);
  }

  .kg-bookmark-description {
    display: -webkit-box;
    font-size: 0.875rem;
    line-height: 1.5em;
    margin-top: 3px;
    font-weight: 400;
    max-height: 44px;
    overflow-y: hidden;
    opacity: 0.7;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: var(--metadata-color);
  }

  .kg-bookmark-metadata {
    display: flex;
    align-items: center;
    margin-top: 22px;
    width: 100%;
    font-size: 0.75rem;
    font-weight: 500;
    white-space: nowrap;
    color: var(--metadata-color);
  }

  .kg-bookmark-metadata > span:nth-of-type(2)::before {
    content: '•';
    margin: 0px 6px;
  }

  .kg-bookmark-metadata > span:last-of-type {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .kg-bookmark-metadata > :not(img) {
    opacity: 0.7;
  }

  .kg-bookmark-icon {
    width: 20px;
    height: 20px;
    margin-right: 6px;
  }

  .kg-bookmark-thumbnail {
    position: relative;
    flex-grow: 1;
    min-width: 33%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 0 2px 2px 0;
    }
  }

  @media (prefers-color-scheme: dark) {
    :host {
      --background-color: var(--dark-background-color);
      --text-color: var(--dark-text-color);
      --border-color: var(--dark-border-color);
      --metadata-color: var(--dark-metadata-color);
    }

    .link {
      border: 1px solid var(--dark-border-color);
    }

    a {
      border: 1px solid var(--dark-border-color);
    }

    .kg-bookmark-title {
      color: var(--dark-text-color);
    }

    .kg-bookmark-description {
      color: var(--dark-metadata-color);
    }

    .kg-bookmark-metadata {
      color: var(--dark-metadata-color);
    }
  }
`;

  // src/lib/util/url-helper.ts
  function urlWithoutSchema(url) {
    return url?.replace(/https:\/\/|http:\/\/|www.|/gi, "") ?? "";
  }
  function urlToOrigin(url) {
    url = urlWithoutSchema(url);
    url = url?.split("/")[0];
    return url ?? "";
  }

  // src/link.ts
  var PreviewBoxLinkElement = class extends h3 {
    constructor() {
      super(...arguments);
      this.url = "";
      this._linkPreviewProps = null;
    }
    firstUpdated(_changedProperties) {
      fetchLinkPreviewData(this.url).then((data) => {
        this._linkPreviewProps = data;
      });
    }
    render() {
      if (!this.url) {
        return ke`<div>No URL provided</div>`;
      }
      if (!this._linkPreviewProps) {
        return ke`<div data-testid="loading">Loading...</div>`;
      }
      const origin = urlToOrigin(this.url);
      return ke`
      <figure part="link-card" class="previewbox-link-card">
        <a href=${this.url} part="link" class="link">
          <div class="kg-bookmark-content">
            <div class="kg-bookmark-title">${this._linkPreviewProps.title}</div>
            <div class="kg-bookmark-description">
              ${this._linkPreviewProps.description}
            </div>
            <div class="kg-bookmark-metadata">
              <img
                class="kg-bookmark-icon"
                src=${this._linkPreviewProps.favicon ?? ""}
                alt="Favicon of ${origin}"
              /><span class="kg-bookmark-author"
                >${origin}</span
              >${this._linkPreviewProps.author ? ke`<span class="kg-bookmark-publisher"
                >${this._linkPreviewProps.author}</span
              >` : ""}
            </div>
          </div>
          <div class="kg-bookmark-thumbnail">
            <img
              src=${this._linkPreviewProps?.image?.url ?? ""}
              alt=${this._linkPreviewProps.image?.alt ?? "Thumbnail image of " + this.url}
            />
          </div>
        </a>
      </figure>
    `;
    }
  };
  PreviewBoxLinkElement.styles = styles;
  __decorateClass([
    n4()
  ], PreviewBoxLinkElement.prototype, "url", 2);
  __decorateClass([
    r4()
  ], PreviewBoxLinkElement.prototype, "_linkPreviewProps", 2);
  PreviewBoxLinkElement = __decorateClass([
    t2("previewbox-link")
  ], PreviewBoxLinkElement);
})();
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=index.js.map