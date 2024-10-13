(()=>{var t=Object.defineProperty,i=Object.getOwnPropertyDescriptor,e=(e,s,r,o)=>{for(var h,a=o>1?void 0:o?i(s,r):s,n=e.length-1;n>=0;n--)(h=e[n])&&(a=(o?h(s,r,a):h(a))||a);return o&&a&&t(s,r,a),a},s=globalThis,r=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),h=new WeakMap,a=class{constructor(t,i,e){if(this._$cssResult$=!0,e!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(r&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=h.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&h.set(i,t))}return t}toString(){return this.cssText}},n=(t,...i)=>{const e=1===t.length?t[0]:i.reduce(((i,e,s)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(e)+t[s+1]),t[0]);return new a(e,t,o)},l=r?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const e of t.cssRules)i+=e.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,o))(i)})(t):t,{is:c,defineProperty:d,getOwnPropertyDescriptor:p,getOwnPropertyNames:u,getOwnPropertySymbols:v,getPrototypeOf:f}=Object,g=globalThis,b=g.trustedTypes,w=b?b.emptyScript:"",m=g.reactiveElementPolyfillSupport,x=(t,i)=>t,k={toAttribute(t,i){switch(i){case Boolean:t=t?w:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let e=t;switch(i){case Boolean:e=null!==t;break;case Number:e=null===t?null:Number(t);break;case Object:case Array:try{e=JSON.parse(t)}catch(t){e=null}}return e}},y=(t,i)=>!c(t,i),$={attribute:!0,type:String,converter:k,reflect:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;var S=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=$){if(i.state&&(i.attribute=!1),this._$Ei(),this.elementProperties.set(t,i),!i.noAccessor){const e=Symbol(),s=this.getPropertyDescriptor(t,e,i);void 0!==s&&d(this.prototype,t,s)}}static getPropertyDescriptor(t,i,e){const{get:s,set:r}=p(this.prototype,t)??{get(){return this[i]},set(t){this[i]=t}};return{get(){return s?.call(this)},set(i){const o=s?.call(this);r.call(this,i),this.requestUpdate(t,o,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$}static _$Ei(){if(this.hasOwnProperty(x("elementProperties")))return;const t=f(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(x("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x("properties"))){const t=this.properties,i=[...u(t),...v(t)];for(const e of i)this.createProperty(e,t[e])}const t=this[Symbol.metadata];if(null!==t){const i=litPropertyMetadata.get(t);if(void 0!==i)for(const[t,e]of i)this.elementProperties.set(t,e)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const e=this._$Eu(t,i);void 0!==e&&this._$Eh.set(e,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const e=new Set(t.flat(1/0).reverse());for(const t of e)i.unshift(l(t))}else void 0!==t&&i.push(l(t));return i}static _$Eu(t,i){const e=i.attribute;return!1===e?void 0:"string"==typeof e?e:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,i=this.constructor.elementProperties;for(const e of i.keys())this.hasOwnProperty(e)&&(t.set(e,this[e]),delete this[e]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(r)t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of i){const i=document.createElement("style"),r=s.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=e.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,i,e){this._$AK(t,e)}_$EC(t,i){const e=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,e);if(void 0!==s&&!0===e.reflect){const r=(void 0!==e.converter?.toAttribute?e.converter:k).toAttribute(i,e.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,i){const e=this.constructor,s=e._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=e.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:k;this._$Em=s,this[s]=r.fromAttribute(i,t.type),this._$Em=null}}requestUpdate(t,i,e){if(void 0!==t){if(e??=this.constructor.getPropertyOptions(t),!(e.hasChanged??y)(this[t],i))return;this.P(t,i,e)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,i,e){this._$AL.has(t)||this._$AL.set(t,i),!0===e.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,i]of this._$Ep)this[t]=i;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[i,e]of t)!0!==e.wrapped||this._$AL.has(i)||void 0===this[i]||this.P(i,this[i],e)}let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(i)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(i)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}};S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[x("elementProperties")]=new Map,S[x("finalized")]=new Map,m?.({ReactiveElement:S}),(g.reactiveElementVersions??=[]).push("2.0.4");var A,E=globalThis,_=E.trustedTypes,C=_?_.createPolicy("lit-html",{createHTML:t=>t}):void 0,T="$lit$",U=`lit$${Math.random().toFixed(9).slice(2)}$`,M="?"+U,N=`<${M}>`,O=document,L=()=>O.createComment(""),I=t=>null===t||"object"!=typeof t&&"function"!=typeof t,P=Array.isArray,z="[ \t\n\f\r]",j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,H=/>/g,B=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,F=/"/g,K=/^(?:script|style|textarea|title)$/i,Z=(A=1,(t,...i)=>({_$litType$:A,strings:t,values:i})),V=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),q=new WeakMap,J=O.createTreeWalker(O,129);function G(t,i){if(!P(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(i):i}var Q=class t{constructor({strings:i,_$litType$:e},s){let r;this.parts=[];let o=0,h=0;const a=i.length-1,n=this.parts,[l,c]=((t,i)=>{const e=t.length-1,s=[];let r,o=2===i?"<svg>":3===i?"<math>":"",h=j;for(let i=0;i<e;i++){const e=t[i];let a,n,l=-1,c=0;for(;c<e.length&&(h.lastIndex=c,n=h.exec(e),null!==n);)c=h.lastIndex,h===j?"!--"===n[1]?h=R:void 0!==n[1]?h=H:void 0!==n[2]?(K.test(n[2])&&(r=RegExp("</"+n[2],"g")),h=B):void 0!==n[3]&&(h=B):h===B?">"===n[0]?(h=r??j,l=-1):void 0===n[1]?l=-2:(l=h.lastIndex-n[2].length,a=n[1],h=void 0===n[3]?B:'"'===n[3]?F:D):h===F||h===D?h=B:h===R||h===H?h=j:(h=B,r=void 0);const d=h===B&&t[i+1].startsWith("/>")?" ":"";o+=h===j?e+N:l>=0?(s.push(a),e.slice(0,l)+T+e.slice(l)+U+d):e+U+(-2===l?i:d)}return[G(t,o+(t[e]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),s]})(i,e);if(this.el=t.createElement(l,s),J.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=J.nextNode())&&n.length<a;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(T)){const i=c[h++],e=r.getAttribute(t).split(U),s=/([.?@])?(.*)/.exec(i);n.push({type:1,index:o,name:s[2],strings:e,ctor:"."===s[1]?et:"?"===s[1]?st:"@"===s[1]?rt:it}),r.removeAttribute(t)}else t.startsWith(U)&&(n.push({type:6,index:o}),r.removeAttribute(t));if(K.test(r.tagName)){const t=r.textContent.split(U),i=t.length-1;if(i>0){r.textContent=_?_.emptyScript:"";for(let e=0;e<i;e++)r.append(t[e],L()),J.nextNode(),n.push({type:2,index:++o});r.append(t[i],L())}}}else if(8===r.nodeType)if(r.data===M)n.push({type:2,index:o});else{let t=-1;for(;-1!==(t=r.data.indexOf(U,t+1));)n.push({type:7,index:o}),t+=U.length-1}o++}}static createElement(t,i){const e=O.createElement("template");return e.innerHTML=t,e}};function X(t,i,e=t,s){if(i===V)return i;let r=void 0!==s?e.o?.[s]:e.l;const o=I(i)?void 0:i._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(t),r._$AT(t,e,s)),void 0!==s?(e.o??=[])[s]=r:e.l=r),void 0!==r&&(i=X(t,r._$AS(t,i.values),r,s)),i}var Y=class{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:e}=this._$AD,s=(t?.creationScope??O).importNode(i,!0);J.currentNode=s;let r=J.nextNode(),o=0,h=0,a=e[0];for(;void 0!==a;){if(o===a.index){let i;2===a.type?i=new tt(r,r.nextSibling,this,t):1===a.type?i=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(i=new ot(r,this,t)),this._$AV.push(i),a=e[++h]}o!==a?.index&&(r=J.nextNode(),o++)}return J.currentNode=O,s}p(t){let i=0;for(const e of this._$AV)void 0!==e&&(void 0!==e.strings?(e._$AI(t,e,i),i+=e.strings.length-2):e._$AI(t[i])),i++}},tt=class t{get _$AU(){return this._$AM?._$AU??this.v}constructor(t,i,e,s){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=e,this.options=s,this.v=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=X(this,t,i),I(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==V&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>P(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&I(this._$AH)?this._$AA.nextSibling.data=t:this.T(O.createTextNode(t)),this._$AH=t}$(t){const{values:i,_$litType$:e}=t,s="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=Q.createElement(G(e.h,e.h[0]),this.options)),e);if(this._$AH?._$AD===s)this._$AH.p(i);else{const t=new Y(s,this),e=t.u(this.options);t.p(i),this.T(e),this._$AH=t}}_$AC(t){let i=q.get(t.strings);return void 0===i&&q.set(t.strings,i=new Q(t)),i}k(i){P(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,r=0;for(const o of i)r===e.length?e.push(s=new t(this.O(L()),this.O(L()),this,this.options)):s=e[r],s._$AI(o),r++;r<e.length&&(this._$AR(s&&s._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this.v=t,this._$AP?.(t))}},it=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,e,s,r){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=i,this._$AM=s,this.options=r,e.length>2||""!==e[0]||""!==e[1]?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=W}_$AI(t,i=this,e,s){const r=this.strings;let o=!1;if(void 0===r)t=X(this,t,i,0),o=!I(t)||t!==this._$AH&&t!==V,o&&(this._$AH=t);else{const s=t;let h,a;for(t=r[0],h=0;h<r.length-1;h++)a=X(this,s[e+h],i,h),a===V&&(a=this._$AH[h]),o||=!I(a)||a!==this._$AH[h],a===W?t=W:t!==W&&(t+=(a??"")+r[h+1]),this._$AH[h]=a}o&&!s&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},et=class extends it{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}},st=class extends it{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}},rt=class extends it{constructor(t,i,e,s,r){super(t,i,e,s,r),this.type=5}_$AI(t,i=this){if((t=X(this,t,i,0)??W)===V)return;const e=this._$AH,s=t===W&&e!==W||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,r=t!==W&&(e===W||s);s&&this.element.removeEventListener(this.name,this,e),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},ot=class{constructor(t,i,e){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}},ht=E.litHtmlPolyfillSupport;ht?.(Q,tt),(E.litHtmlVersions??=[]).push("3.2.0");var at=class extends S{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=((t,i,e)=>{const s=e?.renderBefore??i;let r=s._$litPart$;if(void 0===r){const t=e?.renderBefore??null;s._$litPart$=r=new tt(i.insertBefore(L(),t),t,void 0,e??{})}return r._$AI(t),r})(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.o?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.o?.setConnected(!1)}render(){return V}};at._$litElement$=!0,at.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:at});var nt=globalThis.litElementPolyfillSupport;nt?.({LitElement:at}),(globalThis.litElementVersions??=[]).push("4.1.0");var lt=t=>(i,e)=>{void 0!==e?e.addInitializer((()=>{customElements.define(t,i)})):customElements.define(t,i)},ct={attribute:!0,type:String,converter:k,reflect:!1,hasChanged:y},dt=(t=ct,i,e)=>{const{kind:s,metadata:r}=e;let o=globalThis.litPropertyMetadata.get(r);if(void 0===o&&globalThis.litPropertyMetadata.set(r,o=new Map),o.set(e.name,t),"accessor"===s){const{name:s}=e;return{set(e){const r=i.get.call(this);i.set.call(this,e),this.requestUpdate(s,r,t)},init(i){return void 0!==i&&this.P(s,void 0,t),i}}}if("setter"===s){const{name:s}=e;return function(e){const r=this[s];i.call(this,e),this.requestUpdate(s,r,t)}}throw Error("Unsupported decorator location: "+s)};function pt(t){return(i,e)=>"object"==typeof e?dt(t,i,e):((t,i,e)=>{const s=i.hasOwnProperty(e);return i.constructor.createProperty(e,s?{...t,wrapped:!0}:t),s?Object.getOwnPropertyDescriptor(i,e):void 0})(t,i,e)}function ut(t){return pt({...t,state:!0,attribute:!1})}var vt=n`
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
    --skeleton-color: rgb(229, 231, 235);
    --dark-skeleton-color: rgb(55, 65, 81);
    --fallback-img-color: hsl(220, 13%, 80%);
    --fallback-img-background: rgb(229, 231, 235);
    --dark-fallback-img-color: hsl(220, 13%, 40%);
    --dark-fallback-img-background: rgb(55, 65, 81);
    --favicon-size: 20px;
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

  .previewbox-content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 100%;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 20px;
    overflow: hidden;
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
    color: var(--text-color);
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
    color: var(--metadata-color);
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
    color: var(--metadata-color);
    .previewbox-metadata-skeleton {
      display: flex;
      column-gap: 4px;
      align-items: center;

      .rounded::part(skeleton-shape) {
        border-radius: 50%;
      }
    }
    svg {
      width: var(--favicon-size);
      height: var(--favicon-size);
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

  .previewbox-metadata > :not(img) {
    opacity: 0.7;
  }

  .previewbox-favicon {
    width: var(--favicon-size);
    height: var(--favicon-size);
    margin-right: 6px;
  }

  .previewbox-thumbnail {
    position: relative;
    flex-grow: 1;
    min-width: 33%;
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
      background-color: var(--fallback-img-background);

      @media (prefers-color-scheme: dark) {
        background-color: var(--dark-fallback-img-background);
      }

      svg {
        width: 40px;
        height: 40px;
        color: var(--fallback-img-color);
      }

      @media (prefers-color-scheme: dark) {
        svg {
          color: var(--dark-fallback-img-color);
        }
      }
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

    .previewbox-title {
      color: var(--dark-text-color);
    }

    .previewbox-description {
      color: var(--dark-metadata-color);
    }

    .previewbox-metadata {
      color: var(--dark-metadata-color);
    }
  }
`;function ft(t){try{return t=function(t){return t?.replace(/https:\/\/|http:\/\/|www.|/gi,"")??""}(t),t=t?.split("/")[0],t??""}catch(i){return t??""}}var gt=async t=>{const i=await fetch(`https://web-highlights.herokuapp.com/meta/${encodeURIComponent(t)}`),e=await i.json();return{title:(s=e).title??null,imageUrl:s.image?.url??null,imageAlt:s.image?.alt??null,description:s.description??null,url:s.url??null,author:s.author??null,favicon:s.favicon??null,date:s.date??null,origin:ft(s.url)??null};var s},bt=class extends at{constructor(){super(...arguments),this.href="",this.target="_blank",this.rel=""}};e([pt()],bt.prototype,"href",2),e([pt()],bt.prototype,"target",2),e([pt()],bt.prototype,"rel",2);var wt=class extends bt{constructor(){super(...arguments),this.url=null,this.title="",this.description=null,this.author=null,this.imageUrl=null,this.imageAlt=null,this.faviconUrl=null,this.date=null,this.fetchedLinkPreviewData=null,this._isLoading=!1,this._isError=!1}get linkData(){return this.fetchedLinkPreviewData?this.fetchedLinkPreviewData:{url:this.url,description:this.description,title:this.title,author:this.author,imageUrl:this.imageUrl,imageAlt:this.imageAlt,favicon:this.faviconUrl,date:this.date,origin:ft(this.url)}}firstUpdated(t){if(!this.href&&!this.url)throw new Error(`No href or url provided for ${this.localName}`);this.href?this._fetchLinkPreviewData():this._setManualData()}_fetchLinkPreviewData(){this._isLoading=!0,gt(this.href).then((t=>{this.fetchedLinkPreviewData=t})).catch((t=>{console.error(`Error fetching link preview data for ${this.href}: ${t}`),this._isError=!0})).finally((()=>{this._isLoading=!1}))}_setManualData(){if(!this.url)throw new Error(`As no href was provided, url is required for ${this.localName}`);this.fetchedLinkPreviewData={url:this.url,description:this.description,title:this.title,author:this.author,imageUrl:this.imageUrl,imageAlt:this.imageAlt,favicon:this.faviconUrl,date:this.date,origin:ft(this.url)}}};e([pt()],wt.prototype,"url",2),e([pt()],wt.prototype,"title",2),e([pt()],wt.prototype,"description",2),e([pt()],wt.prototype,"author",2),e([pt()],wt.prototype,"imageUrl",2),e([pt()],wt.prototype,"imageAlt",2),e([pt()],wt.prototype,"faviconUrl",2),e([pt()],wt.prototype,"date",2),e([ut()],wt.prototype,"fetchedLinkPreviewData",2),e([ut()],wt.prototype,"_isLoading",2),e([ut()],wt.prototype,"_isError",2);var mt="FAVICON",xt="FAVICON_SKELETON",kt="FAVICON_FALLBACK",yt="THUMBNAIL",$t="THUMBNAIL_SKELETON",St="THUMBNAIL_FALLBACK",At="AUTHOR",Et="PUBLISHER",_t="ANCHOR_ELEMENT",Ct="TITLE",Tt="TITLE_SKELETON",Ut="DESCRIPTION",Mt=n`
  :host {
    display: block;
    box-sizing: border-box;
    font-family: inherit;
  }

  .skeleton-shape {
    background-color: var(--skeleton-color);
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

  @media (prefers-color-scheme: dark) {
    :host {
      --skeleton-color: var(--dark-skeleton-color);
    }
  }
`,Nt=class extends at{constructor(){super(...arguments),this.width="100%",this.height="16px"}render(){return Z`<div
      class="skeleton-shape"
      part="skeleton-shape"
      role="progressbar"
      style="width: ${this.width}; height: ${this.height};"
    >
      <slot></slot>
    </div>`}};Nt.styles=Mt,e([pt()],Nt.prototype,"width",2),e([pt()],Nt.prototype,"height",2),Nt=e([lt("previewbox-skeleton-shape")],Nt);var Ot=Z`<svg
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  viewBox="0 0 20 18"
>
  <path
    d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"
  />
</svg>`,Lt=Z`<svg
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  data-testid="${kt}"
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
</svg> `,It=class extends wt{constructor(){super(...arguments),this.isImgError=!1,this.isFaviconError=!1}render(){return Z`
      <figure part="link-card" class="previewbox-link-card">
        <a
          href=${this.linkData.url||this.href}
          target=${this.target}
          part="link"
          rel=${this.rel}
          class="link"
          data-testid="${_t}"
        >
          <div class="previewbox-content">
            <div class="previewbox-title" data-testid="${Ct}">
              ${this._isLoading?Z`<previewbox-skeleton-shape
                    width="200px"
                    height="20px"
                    data-testid="${Tt}"
                  />`:this.linkData.title}
            </div>
            <div
              class="previewbox-description"
              data-testid="${Ut}"
            >
              ${this._isLoading?Z`
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
              ${this._isLoading?Z`
                    <div class="previewbox-metadata-skeleton">
                      <previewbox-skeleton-shape
                        width="14px"
                        data-testid="${xt}"
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
                  `:Z`
                    ${this.linkData?.favicon&&!this.isFaviconError?Z`
                          <img
                            data-testid="${mt}"
                            class="previewbox-favicon"
                            src=${this.linkData.favicon??""}
                            alt="Favicon of ${this.linkData.origin}"
                            @error=${()=>this.isFaviconError=!0}
                          />
                        `:Lt}
                    <span data-testid="${Et}"
                      >${this.linkData.origin}</span
                    >${this.linkData.author?Z`<span data-testid="${At}"
                          >${this.linkData.author}</span
                        >`:""}
                  `}
            </div>
          </div>
          <div class="previewbox-thumbnail">
            ${this._isLoading?Z`<previewbox-skeleton-shape
                  height="100%"
                  data-testid="${$t}"
                >
                  ${Ot}
                </previewbox-skeleton-shape>`:Z`
                  ${this.linkData?.imageUrl&&!this.isImgError?Z`
                        <img
                          data-testid="${yt}"
                          src=${this.linkData?.imageUrl??""}
                          alt=${this.linkData?.imageAlt??"Thumbnail image of "+this.url}
                          @error=${()=>this.isImgError=!0}
                        />
                      `:Z`
                        <figure
                          class="fallback-img"
                          data-testid="${St}"
                        >
                          ${Ot}
                        </figure>
                      `}
                `}
          </div>
        </a>
      </figure>
    `}};It.styles=vt,e([ut()],It.prototype,"isImgError",2),e([ut()],It.prototype,"isFaviconError",2),It=e([lt("previewbox-link")],It)})();
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
