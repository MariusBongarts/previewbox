(()=>{var t=Object.defineProperty,i=Object.getOwnPropertyDescriptor,e=(e,s,o,r)=>{for(var a,n=r>1?void 0:r?i(s,o):s,h=e.length-1;h>=0;h--)(a=e[h])&&(n=(r?a(s,o,n):a(n))||n);return r&&n&&t(s,o,n),n},s=globalThis,o=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),a=new WeakMap,n=class{constructor(t,i,e){if(this._$cssResult$=!0,e!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(o&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=a.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&a.set(i,t))}return t}toString(){return this.cssText}},h=(t,...i)=>{const e=1===t.length?t[0]:i.reduce(((i,e,s)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(e)+t[s+1]),t[0]);return new n(e,t,r)},l=o?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const e of t.cssRules)i+=e.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,r))(i)})(t):t,{is:c,defineProperty:d,getOwnPropertyDescriptor:p,getOwnPropertyNames:v,getOwnPropertySymbols:b,getPrototypeOf:u}=Object,f=globalThis,g=f.trustedTypes,w=g?g.emptyScript:"",x=f.reactiveElementPolyfillSupport,m=(t,i)=>t,k={toAttribute(t,i){switch(i){case Boolean:t=t?w:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let e=t;switch(i){case Boolean:e=null!==t;break;case Number:e=null===t?null:Number(t);break;case Object:case Array:try{e=JSON.parse(t)}catch(t){e=null}}return e}},$=(t,i)=>!c(t,i),y={attribute:!0,type:String,converter:k,reflect:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;var E=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=y){if(i.state&&(i.attribute=!1),this._$Ei(),this.elementProperties.set(t,i),!i.noAccessor){const e=Symbol(),s=this.getPropertyDescriptor(t,e,i);void 0!==s&&d(this.prototype,t,s)}}static getPropertyDescriptor(t,i,e){const{get:s,set:o}=p(this.prototype,t)??{get(){return this[i]},set(t){this[i]=t}};return{get(){return s?.call(this)},set(i){const r=s?.call(this);o.call(this,i),this.requestUpdate(t,r,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const t=this.properties,i=[...v(t),...b(t)];for(const e of i)this.createProperty(e,t[e])}const t=this[Symbol.metadata];if(null!==t){const i=litPropertyMetadata.get(t);if(void 0!==i)for(const[t,e]of i)this.elementProperties.set(t,e)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const e=this._$Eu(t,i);void 0!==e&&this._$Eh.set(e,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const e=new Set(t.flat(1/0).reverse());for(const t of e)i.unshift(l(t))}else void 0!==t&&i.push(l(t));return i}static _$Eu(t,i){const e=i.attribute;return!1===e?void 0:"string"==typeof e?e:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,i=this.constructor.elementProperties;for(const e of i.keys())this.hasOwnProperty(e)&&(t.set(e,this[e]),delete this[e]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(o)t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of i){const i=document.createElement("style"),o=s.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=e.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,i,e){this._$AK(t,e)}_$EC(t,i){const e=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,e);if(void 0!==s&&!0===e.reflect){const o=(void 0!==e.converter?.toAttribute?e.converter:k).toAttribute(i,e.type);this._$Em=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,i){const e=this.constructor,s=e._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=e.getPropertyOptions(s),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:k;this._$Em=s,this[s]=o.fromAttribute(i,t.type),this._$Em=null}}requestUpdate(t,i,e){if(void 0!==t){if(e??=this.constructor.getPropertyOptions(t),!(e.hasChanged??$)(this[t],i))return;this.P(t,i,e)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,i,e){this._$AL.has(t)||this._$AL.set(t,i),!0===e.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,i]of this._$Ep)this[t]=i;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[i,e]of t)!0!==e.wrapped||this._$AL.has(i)||void 0===this[i]||this.P(i,this[i],e)}let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(i)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(i)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}};E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[m("elementProperties")]=new Map,E[m("finalized")]=new Map,x?.({ReactiveElement:E}),(f.reactiveElementVersions??=[]).push("2.0.4");var A,S=globalThis,_=S.trustedTypes,C=_?_.createPolicy("lit-html",{createHTML:t=>t}):void 0,U="$lit$",I=`lit$${Math.random().toFixed(9).slice(2)}$`,O="?"+I,T=`<${O}>`,M=document,N=()=>M.createComment(""),L=t=>null===t||"object"!=typeof t&&"function"!=typeof t,P=Array.isArray,R="[ \t\n\f\r]",z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,D=/>/g,H=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),B=/'/g,F=/"/g,K=/^(?:script|style|textarea|title)$/i,W=(A=1,(t,...i)=>({_$litType$:A,strings:t,values:i})),Z=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),G=new WeakMap,q=M.createTreeWalker(M,129);function J(t,i){if(!P(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(i):i}var Y=class t{constructor({strings:i,_$litType$:e},s){let o;this.parts=[];let r=0,a=0;const n=i.length-1,h=this.parts,[l,c]=((t,i)=>{const e=t.length-1,s=[];let o,r=2===i?"<svg>":3===i?"<math>":"",a=z;for(let i=0;i<e;i++){const e=t[i];let n,h,l=-1,c=0;for(;c<e.length&&(a.lastIndex=c,h=a.exec(e),null!==h);)c=a.lastIndex,a===z?"!--"===h[1]?a=j:void 0!==h[1]?a=D:void 0!==h[2]?(K.test(h[2])&&(o=RegExp("</"+h[2],"g")),a=H):void 0!==h[3]&&(a=H):a===H?">"===h[0]?(a=o??z,l=-1):void 0===h[1]?l=-2:(l=a.lastIndex-h[2].length,n=h[1],a=void 0===h[3]?H:'"'===h[3]?F:B):a===F||a===B?a=H:a===j||a===D?a=z:(a=H,o=void 0);const d=a===H&&t[i+1].startsWith("/>")?" ":"";r+=a===z?e+T:l>=0?(s.push(n),e.slice(0,l)+U+e.slice(l)+I+d):e+I+(-2===l?i:d)}return[J(t,r+(t[e]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),s]})(i,e);if(this.el=t.createElement(l,s),q.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=q.nextNode())&&h.length<n;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(U)){const i=c[a++],e=o.getAttribute(t).split(I),s=/([.?@])?(.*)/.exec(i);h.push({type:1,index:r,name:s[2],strings:e,ctor:"."===s[1]?et:"?"===s[1]?st:"@"===s[1]?ot:it}),o.removeAttribute(t)}else t.startsWith(I)&&(h.push({type:6,index:r}),o.removeAttribute(t));if(K.test(o.tagName)){const t=o.textContent.split(I),i=t.length-1;if(i>0){o.textContent=_?_.emptyScript:"";for(let e=0;e<i;e++)o.append(t[e],N()),q.nextNode(),h.push({type:2,index:++r});o.append(t[i],N())}}}else if(8===o.nodeType)if(o.data===O)h.push({type:2,index:r});else{let t=-1;for(;-1!==(t=o.data.indexOf(I,t+1));)h.push({type:7,index:r}),t+=I.length-1}r++}}static createElement(t,i){const e=M.createElement("template");return e.innerHTML=t,e}};function Q(t,i,e=t,s){if(i===Z)return i;let o=void 0!==s?e.o?.[s]:e.l;const r=L(i)?void 0:i._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),void 0===r?o=void 0:(o=new r(t),o._$AT(t,e,s)),void 0!==s?(e.o??=[])[s]=o:e.l=o),void 0!==o&&(i=Q(t,o._$AS(t,i.values),o,s)),i}var X=class{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:e}=this._$AD,s=(t?.creationScope??M).importNode(i,!0);q.currentNode=s;let o=q.nextNode(),r=0,a=0,n=e[0];for(;void 0!==n;){if(r===n.index){let i;2===n.type?i=new tt(o,o.nextSibling,this,t):1===n.type?i=new n.ctor(o,n.name,n.strings,this,t):6===n.type&&(i=new rt(o,this,t)),this._$AV.push(i),n=e[++a]}r!==n?.index&&(o=q.nextNode(),r++)}return q.currentNode=M,s}p(t){let i=0;for(const e of this._$AV)void 0!==e&&(void 0!==e.strings?(e._$AI(t,e,i),i+=e.strings.length-2):e._$AI(t[i])),i++}},tt=class t{get _$AU(){return this._$AM?._$AU??this.v}constructor(t,i,e,s){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=e,this.options=s,this.v=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=Q(this,t,i),L(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==Z&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>P(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==V&&L(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){const{values:i,_$litType$:e}=t,s="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=Y.createElement(J(e.h,e.h[0]),this.options)),e);if(this._$AH?._$AD===s)this._$AH.p(i);else{const t=new X(s,this),e=t.u(this.options);t.p(i),this.T(e),this._$AH=t}}_$AC(t){let i=G.get(t.strings);return void 0===i&&G.set(t.strings,i=new Y(t)),i}k(i){P(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,o=0;for(const r of i)o===e.length?e.push(s=new t(this.O(N()),this.O(N()),this,this.options)):s=e[o],s._$AI(r),o++;o<e.length&&(this._$AR(s&&s._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this.v=t,this._$AP?.(t))}},it=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,e,s,o){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=i,this._$AM=s,this.options=o,e.length>2||""!==e[0]||""!==e[1]?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=V}_$AI(t,i=this,e,s){const o=this.strings;let r=!1;if(void 0===o)t=Q(this,t,i,0),r=!L(t)||t!==this._$AH&&t!==Z,r&&(this._$AH=t);else{const s=t;let a,n;for(t=o[0],a=0;a<o.length-1;a++)n=Q(this,s[e+a],i,a),n===Z&&(n=this._$AH[a]),r||=!L(n)||n!==this._$AH[a],n===V?t=V:t!==V&&(t+=(n??"")+o[a+1]),this._$AH[a]=n}r&&!s&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},et=class extends it{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}},st=class extends it{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}},ot=class extends it{constructor(t,i,e,s,o){super(t,i,e,s,o),this.type=5}_$AI(t,i=this){if((t=Q(this,t,i,0)??V)===Z)return;const e=this._$AH,s=t===V&&e!==V||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,o=t!==V&&(e===V||s);s&&this.element.removeEventListener(this.name,this,e),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},rt=class{constructor(t,i,e){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}},at=S.litHtmlPolyfillSupport;at?.(Y,tt),(S.litHtmlVersions??=[]).push("3.2.0");var nt=class extends E{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=((t,i,e)=>{const s=e?.renderBefore??i;let o=s._$litPart$;if(void 0===o){const t=e?.renderBefore??null;s._$litPart$=o=new tt(i.insertBefore(N(),t),t,void 0,e??{})}return o._$AI(t),o})(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.o?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.o?.setConnected(!1)}render(){return Z}};nt._$litElement$=!0,nt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:nt});var ht=globalThis.litElementPolyfillSupport;ht?.({LitElement:nt}),(globalThis.litElementVersions??=[]).push("4.1.0");var lt=t=>(i,e)=>{void 0!==e?e.addInitializer((()=>{customElements.define(t,i)})):customElements.define(t,i)},ct={attribute:!0,type:String,converter:k,reflect:!1,hasChanged:$},dt=(t=ct,i,e)=>{const{kind:s,metadata:o}=e;let r=globalThis.litPropertyMetadata.get(o);if(void 0===r&&globalThis.litPropertyMetadata.set(o,r=new Map),r.set(e.name,t),"accessor"===s){const{name:s}=e;return{set(e){const o=i.get.call(this);i.set.call(this,e),this.requestUpdate(s,o,t)},init(i){return void 0!==i&&this.P(s,void 0,t),i}}}if("setter"===s){const{name:s}=e;return function(e){const o=this[s];i.call(this,e),this.requestUpdate(s,o,t)}}throw Error("Unsupported decorator location: "+s)};function pt(t){return(i,e)=>"object"==typeof e?dt(t,i,e):((t,i,e)=>{const s=i.hasOwnProperty(e);return i.constructor.createProperty(e,s?{...t,wrapped:!0}:t),s?Object.getOwnPropertyDescriptor(i,e):void 0})(t,i,e)}function vt(t){return pt({...t,state:!0,attribute:!1})}var bt={"--pb-background-color":{light:h`#ffffff`,dark:h`#121212`},"--pb-text-color":{light:h`#000000`,dark:h`#e0e0e0`},"--pb-border-color":{light:h`rgba(124, 139, 154, 0.25)`,dark:h`#80808034`},"--pb-metadata-color":{light:h`rgba(0, 0, 0, 0.7)`,dark:h`rgba(255, 255, 255, 0.8)`},"--pb-fallback-img-color":{light:h`hsl(220, 13%, 80%)`,dark:h`hsl(220, 13%, 40%)`},"--pb-fallback-img-background":{light:h`rgb(229, 231, 235)`,dark:h`rgb(55, 65, 81)`},"--pb-skeleton-color":{light:h`rgb(229, 231, 235)`,dark:h`rgb(55, 65, 81)`}};function ut(t,i){Object.keys(bt).forEach((e=>{t.style.setProperty(e,bt[e][i].toString())}))}var ft=h`
  ${h`
    :host {
      --pb-background-color: ${bt["--pb-background-color"].light};
      --pb-dark-background-color: ${bt["--pb-background-color"].dark};
      --pb-text-color: ${bt["--pb-text-color"].light};
      --pb-dark-text-color: ${bt["--pb-text-color"].dark};
      --pb-border-color: ${bt["--pb-border-color"].light};
      --pb-dark-border-color: ${bt["--pb-border-color"].dark};
      --pb-metadata-color: ${bt["--pb-metadata-color"].light};
      --pb-dark-metadata-color: ${bt["--pb-metadata-color"].dark};
      --pb-skeleton-color: ${bt["--pb-skeleton-color"].light};
      --pb-dark-skeleton-color: ${bt["--pb-skeleton-color"].dark};
      --pb-fallback-img-color: ${bt["--pb-fallback-img-color"].light};
      --pb-dark-fallback-img-color: ${bt["--pb-fallback-img-color"].dark};
      --pb-fallback-img-background: ${bt["--pb-fallback-img-background"].light};
      --pb-dark-fallback-img-background: ${bt["--pb-fallback-img-background"].dark};
      --pb-favicon-size: 20px;
    }

    @media (prefers-color-scheme: dark) {
      :host {
        --pb-background-color: var(--pb-dark-background-color);
        --pb-text-color: var(--pb-dark-text-color);
        --pb-border-color: var(--pb-dark-border-color);
        --pb-metadata-color: var(--pb-dark-metadata-color);
        --pb-fallback-img-color: var(--pb-dark-fallback-img-color);
        --pb-fallback-img-background: var(--pb-dark-fallback-img-background);
        --pb-skeleton-color: var(--pb-dark-skeleton-color);
      }
    }
  `}
  :host {
    display: block;
    box-sizing: border-box;
    width: 100%;
    font-family: inherit;
  }


  .container {
    margin: 0;
    padding: 0;
    background-color: var(--pb-background-color);
  }

  .previewbox-title,
  .previewbox-link {
    color: var(--pb-text-color);
  }

  .previewbox-description {
    color: var(--pb-metadata-color);
  }

  .previewbox-link {
    text-decoration: none;
    display: flex;
    text-decoration: none;
    color: inherit;
  }
`,gt=h`
  ${ft}
  :host {
    display: block;
    box-sizing: border-box;
    width: 100%;
    font-family: inherit;
  }

  .container {
    background-color: var(--pb-background-color);
    margin: 0;
    padding: 0;
    overflow: hidden;
    border-radius: 3px;
    border: 1px solid var(--pb-border-color);
    position: relative;
  }

  .previewbox-link {
    text-decoration: none;
    color: var(--pb-text-color);
    display: flex;
    text-decoration: none;
    color: inherit;
  }

  .previewbox-content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 100%;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 20px;
    overflow: hidden;
    position: relative;
  }

  .previewbox-title {
    display: -webkit-box;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.2;
    height: 40px;
    overflow: hidden;
    @media (min-width: 768px) {
      line-height: 1.4;
      height: 24px;
    }
    color: var(--pb-text-color);
  }

  .previewbox-description {
    display: -webkit-box;
    font-size: 0.875rem;
    line-height: 1.5em;
    margin-top: 3px;
    font-weight: 400;
    width: 100%;
    height: 44px;
    overflow-y: hidden;
    opacity: 0.7;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: var(--pb-metadata-color);
  }

  .previewbox-metadata {
    display: flex;
    align-items: center;
    margin-top: 22px;
    width: 100%;
    height: 20px;
    font-size: 0.75rem;
    font-weight: 500;
    white-space: nowrap;
    color: var(--pb-metadata-color);
    .previewbox-metadata-skeleton {
      display: flex;
      column-gap: 4px;
      align-items: center;

      .rounded::part(skeleton-shape) {
        border-radius: 50%;
      }
    }
    svg {
      width: var(--pb-favicon-size);
      height: var(--pb-favicon-size);
      margin-right: 6px;
    }
  }

  .previewbox-metadata > span:nth-of-type(2)::before {
    content: '•';
    margin: 0px 6px;
  }

  .previewbox-metadata > span:last-of-type {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .previewbox-metadata > :not(previewbox-favicon) {
    opacity: 0.7;
  }

  previewbox-favicon {
    margin-right: 6px;
  }

  .previewbox-thumbnail {
    position: relative;
    flex-grow: 1;
    min-width: 33%;
  }


`,wt=class extends nt{constructor(){super(...arguments),this.href="",this.target="_blank",this.rel=""}};function xt(t){try{return t=function(t){return t?.replace(/https:\/\/|http:\/\/|www.|/gi,"")??""}(t),t=t?.split("/")[0],t??""}catch(i){return t??""}}e([pt()],wt.prototype,"href",2),e([pt()],wt.prototype,"target",2),e([pt()],wt.prototype,"rel",2);var mt=new class{async fetchLinkPreviewData(t,i){try{const e=new URLSearchParams;e.set("url",t);const s=await fetch(`${i.apiUrl}?${e.toString()}`,{headers:{origin:window.location.origin}});if(!s.ok)return 429===s.status?{error:"API_LIMIT_REACHED"}:{error:"UNKNOWN_ERROR"};return{data:await s.json()}}catch(t){return{error:"UNKNOWN_ERROR"}}}},kt=class extends wt{constructor(){super(...arguments),this.url=null,this.title="",this.description=null,this.author=null,this.imageUrl=null,this.imageAlt=null,this.faviconUrl=null,this.date=null,this.hidePoweredBy=void 0,this.apiUrl=window.location.href.startsWith("http://localhost:8000/demo")?"http://localhost:4444/api/v1/meta":"https://previewbox.link/api/v1/meta",this.dark=void 0,this.light=void 0,this.fetchedLinkPreviewData=null,this._isLoading=!1,this._isError=!1,this._apiError=null}get linkData(){return this.fetchedLinkPreviewData?this.fetchedLinkPreviewData:{url:this.url,description:this.description,title:this.title,author:this.author,imageUrl:this.imageUrl,imageAlt:this.imageAlt,favicon:this.faviconUrl,date:this.date,origin:xt(this.url)}}firstUpdated(t){if(void 0!==this.dark&&ut(this,"dark"),void 0!==this.light&&ut(this,"light"),!this.href&&!this.url)throw new Error(`No href or url provided for ${this.localName}`);this.href?this._fetchLinkPreviewData():this._setManualData()}_fetchLinkPreviewData(){this._isLoading=!0,mt.fetchLinkPreviewData(this.href,{apiUrl:this.apiUrl}).then((t=>{!function(t){return"data"in t}(t)?(this._isError=!0,this._apiError=t.error):this.fetchedLinkPreviewData=t.data})).catch((t=>{console.error(`Error fetching link preview data for ${this.href}: ${t}`),this._isError=!0,this._apiError="UNKNOWN_ERROR"})).finally((()=>{this._isLoading=!1}))}_setManualData(){if(!this.url)throw new Error(`As no href was provided, url is required for ${this.localName}`);this.fetchedLinkPreviewData={url:this.url,description:this.description,title:this.title,author:this.author,imageUrl:this.imageUrl,imageAlt:this.imageAlt,favicon:this.faviconUrl,date:this.date,origin:xt(this.url)}}};e([pt()],kt.prototype,"url",2),e([pt()],kt.prototype,"title",2),e([pt()],kt.prototype,"description",2),e([pt()],kt.prototype,"author",2),e([pt()],kt.prototype,"imageUrl",2),e([pt()],kt.prototype,"imageAlt",2),e([pt()],kt.prototype,"faviconUrl",2),e([pt()],kt.prototype,"date",2),e([pt()],kt.prototype,"hidePoweredBy",2),e([pt()],kt.prototype,"apiUrl",2),e([pt()],kt.prototype,"dark",2),e([pt()],kt.prototype,"light",2),e([vt()],kt.prototype,"fetchedLinkPreviewData",2),e([vt()],kt.prototype,"_isLoading",2),e([vt()],kt.prototype,"_isError",2),e([vt()],kt.prototype,"_apiError",2);var $t="FAVICON",yt="FAVICON_SKELETON",Et="FAVICON_FALLBACK",At="IMAGE",St="IMAGE_SKELETON",_t="IMAGE_FALLBACK",Ct="AUTHOR",Ut="PUBLISHER",It="ANCHOR_ELEMENT",Ot="TITLE",Tt="TITLE_SKELETON",Mt="DESCRIPTION",Nt=h`
  :host {
    display: block;
    box-sizing: border-box;
    font-family: inherit;
  }

  .skeleton-shape {
    background-color: var(--pb-skeleton-color);
    animation: pulse 1.5s infinite ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.7;
    }
  }
`,Lt=(t,i)=>{(t=>!!customElements.get(t)||document.createElement(t).constructor!==HTMLElement)(t)||customElements.define(t,i)},Pt=class extends nt{constructor(){super(...arguments),this.width="100%",this.height="16px"}static{this.styles=Nt}render(){return W`<div
      class="skeleton-shape"
      part="skeleton-shape"
      role="progressbar"
      style="width: ${this.width}; height: ${this.height};"
    >
      <slot></slot>
    </div>`}};e([pt()],Pt.prototype,"width",2),e([pt()],Pt.prototype,"height",2);Lt("previewbox-skeleton-shape",Pt);var Rt=h`
  :host {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #000000b5;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }

  .limit-info-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 8px;
  }

  .limit-info-text {
    color: white;
  }

  .limit-info-cta {
    color: white;
    text-decoration: none;
    background-color: #5046e5;
    padding: 8px 16px;
    border-radius: 4px;
  }
`;Lt("previewbox-limit-info",class extends nt{static{this.styles=Rt}render(){const t=window.location.origin;return W`<div class="limit-info-container">
      <span class="limit-info-text"
        >You've reached the API limit for ${t}</span
      >
      <a
        class="limit-info-cta"
        target="_blank"
        href="https://previewbox.link/usage/${encodeURIComponent(t)}"
        >Check Usage</a
      >
    </div>`}});var zt=h`
  .powered-by {
    position: absolute;
    bottom: 2px;
    right: 2px;
    font-size: 9.5px;
    color: #000000;
    background-color: #ffffff7d;
    padding: 1px 2px;
    z-index: 2;
    border-radius: 2px;
    line-height: 1.2;

    a {
      color: #000000;
      font-weight: bold;
      text-decoration: none;
    }
  }
`;Lt("powered-by-previewbox",class extends nt{static{this.styles=zt}render(){return W`<span class="powered-by">
      Powered by
      <a href="https://previewbox.link">Previewbox</a>
    </span> `}});var jt=h`
  .previewbox-favicon {
    width: var(--pb-favicon-size);
    height: var(--pb-favicon-size);
  }
`,Dt=W`<svg
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  viewBox="0 0 20 18"
>
  <path
    d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"
  />
</svg>`,Ht=W`<svg
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  data-testid="${Et}"
  stroke-width="1.5"
  fill="none"
  viewBox="0 0 24 24"
>
  <path
    stroke="currentColor"
    stroke-linecap="round"
    stroke-width="2"
    d="M4.37 7.657c2.063.528 2.396 2.806 3.202 3.87 1.07 1.413 2.075 1.228 3.192 2.644 1.805 2.289 1.312 5.705 1.312 6.705M20 15h-1a4 4 0 0 0-4 4v1M8.587 3.992c0 .822.112 1.886 1.515 2.58 1.402.693 2.918.351 2.918 2.334 0 .276 0 2.008 1.972 2.008 2.026.031 2.026-1.678 2.026-2.008 0-.65.527-.9 1.177-.9H20M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
  />
</svg> `,Bt=class extends nt{constructor(){super(...arguments),this.faviconUrl=null,this.isFaviconError=!1}static{this.styles=jt}render(){return W`
      ${this.faviconUrl&&!this.isFaviconError?W`
            <img
              data-testid="${$t}"
              class="previewbox-favicon"
              part="favicon"
              src=${this.faviconUrl??""}
              alt="Favicon"
              @error=${()=>this.isFaviconError=!0}
            />
          `:Ht}
    `}};e([pt()],Bt.prototype,"faviconUrl",2),e([vt()],Bt.prototype,"isFaviconError",2);Lt("previewbox-favicon",Bt);var Ft=h`
  img,
  previewbox-skeleton-shape,
  .fallback-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    border-radius: 0 2px 2px 0;
    margin: 0;
    background-color: var(--pb-fallback-img-background);


    svg {
      width: 40px;
      height: 40px;
      color: var(--pb-fallback-img-color);
    }
  }
`,Kt=class extends nt{constructor(){super(...arguments),this.imageUrl=null,this.imageAlt=null,this.isLoading=!0,this.isImageError=!1}static{this.styles=Ft}render(){return this.isLoading?W`<previewbox-skeleton-shape
        height="100%"
        data-testid="${St}"
      >
        ${Dt}
      </previewbox-skeleton-shape>`:W`
      ${this.imageUrl&&!this.isImageError?W`
            <img
              data-testid="${At}"
              part="image"
              src=${this.imageUrl??""}
              alt=${this.imageAlt??"Thumbnail image"}
              @error=${()=>this.isImageError=!0}
            />
          `:W`
            <figure
              class="fallback-img"
              part="image"
              data-testid="${_t}"
            >
              ${Dt}
            </figure>
          `}
    `}};e([pt()],Kt.prototype,"imageUrl",2),e([pt()],Kt.prototype,"imageAlt",2),e([pt({type:Boolean})],Kt.prototype,"isLoading",2),e([vt()],Kt.prototype,"isImageError",2);Lt("previewbox-image",Kt);var Wt=class extends kt{constructor(){super(...arguments),this.isImgError=!1,this.isFaviconError=!1}render(){return W`
      <figure part="container" class="container">
        ${"API_LIMIT_REACHED"===this._apiError?W`<previewbox-limit-info></previewbox-limit-info>`:""}
        <a
          href=${this.linkData.url||this.href}
          target=${this.target}
          part="link"
          rel=${this.rel}
          class="previewbox-link"
          data-testid="${It}"
        >
          <div class="previewbox-content">
            <div class="previewbox-title" data-testid="${Ot}">
              ${this._isLoading?W`<previewbox-skeleton-shape
                    width="200px"
                    height="20px"
                    data-testid="${Tt}"
                  />`:this.linkData.title}
            </div>
            <div
              class="previewbox-description"
              data-testid="${Mt}"
            >
              ${this._isLoading?W`
                    <previewbox-skeleton-shape
                      width="100%"
                      height="16px"
                    ></previewbox-skeleton-shape>
                    <previewbox-skeleton-shape
                      width="70%"
                      height="16px"
                      style="margin-top: 4px;"
                    ></previewbox-skeleton-shape>
                  `:this.linkData.description}
            </div>
            <div class="previewbox-metadata">
              ${this._isLoading?W`
                    <div class="previewbox-metadata-skeleton">
                      <previewbox-skeleton-shape
                        width="14px"
                        data-testid="${yt}"
                        height="14px"
                        class="rounded"
                      ></previewbox-skeleton-shape>
                      <previewbox-skeleton-shape
                        width="60px"
                        height="14px"
                      ></previewbox-skeleton-shape>
                      <previewbox-skeleton-shape
                        width="4px"
                        height="4px"
                        class="rounded"
                      ></previewbox-skeleton-shape>
                      <previewbox-skeleton-shape
                        width="44px"
                        height="14px"
                      ></previewbox-skeleton-shape>
                    </div>
                  `:W`
                    <previewbox-favicon
                      .faviconUrl=${this.linkData.favicon}
                    ></previewbox-favicon>
                    <span data-testid="${Ut}"
                      >${this.linkData.origin}</span
                    >${this.linkData.author?W`<span data-testid="${Ct}"
                          >${this.linkData.author}</span
                        >`:""}
                  `}
            </div>
          </div>
          <div class="previewbox-thumbnail">
            <previewbox-image
              .isLoading=${this._isLoading}
              .imageUrl=${this.linkData?.imageUrl}
              .imageAlt=${this.linkData?.imageAlt}
            ></previewbox-image>
          </div>
        </a>
        ${void 0!==this.hidePoweredBy?"":W`<powered-by-previewbox></powered-by-previewbox>`}
      </figure>
    `}};Wt.styles=gt,e([vt()],Wt.prototype,"isImgError",2),e([vt()],Wt.prototype,"isFaviconError",2),Wt=e([lt("previewbox-link")],Wt);var Zt=class extends kt{constructor(){super(...arguments),this.isImgError=!1,this.isFaviconError=!1}render(){return W`
      <article part="container" class="container">
        ${"API_LIMIT_REACHED"===this._apiError?W`<previewbox-limit-info></previewbox-limit-info>`:""}
        <a
          href=${this.linkData.url||this.href}
          target=${this.target}
          part="link"
          rel=${this.rel}
          class="previewbox-link"
          data-testid="${It}"
        >
          <div class="previewbox-content">
            <div class="previewbox-title" data-testid="${Ot}">
              ${this._isLoading?W`<previewbox-skeleton-shape
                    width="200px"
                    height="20px"
                    data-testid="${Tt}"
                  />`:this.linkData.title}
            </div>
            <div
              class="previewbox-description"
              data-testid="${Mt}"
            >
              ${this._isLoading?W`
                    <previewbox-skeleton-shape
                      width="100%"
                      height="16px"
                    ></previewbox-skeleton-shape>
                    <previewbox-skeleton-shape
                      width="70%"
                      height="16px"
                      style="margin-top: 4px;"
                    ></previewbox-skeleton-shape>
                  `:this.linkData.description}
            </div>
            <div class="previewbox-metadata">
              ${this._isLoading?W`
                    <div class="previewbox-metadata-skeleton">
                      <previewbox-skeleton-shape
                        width="14px"
                        data-testid="${yt}"
                        height="14px"
                        class="rounded"
                      ></previewbox-skeleton-shape>
                      <previewbox-skeleton-shape
                        width="60px"
                        height="14px"
                      ></previewbox-skeleton-shape>
                      <previewbox-skeleton-shape
                        width="4px"
                        height="4px"
                        class="rounded"
                      ></previewbox-skeleton-shape>
                      <previewbox-skeleton-shape
                        width="44px"
                        height="14px"
                      ></previewbox-skeleton-shape>
                    </div>
                  `:W`
                    <previewbox-favicon
                      .faviconUrl=${this.linkData.favicon}
                    ></previewbox-favicon>
                    <span data-testid="${Ut}"
                      >${this.linkData.origin}</span
                    >${this.linkData.author?W`<span data-testid="${Ct}"
                          >${this.linkData.author}</span
                        >`:""}
                  `}
            </div>
          </div>
          <div class="previewbox-thumbnail">
            <previewbox-image
              .isLoading=${this._isLoading}
              .imageUrl=${this.linkData?.imageUrl}
              .imageAlt=${this.linkData?.imageAlt}
            ></previewbox-image>
          </div>
        </a>
        ${void 0!==this.hidePoweredBy?"":W`<powered-by-previewbox></powered-by-previewbox>`}
      </article>
    `}};Zt.styles=gt,e([vt()],Zt.prototype,"isImgError",2),e([vt()],Zt.prototype,"isFaviconError",2),Zt=e([lt("previewbox-article")],Zt)})();
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
