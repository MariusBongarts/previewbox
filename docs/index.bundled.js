(()=>{var t=Object.defineProperty,e=Object.getOwnPropertyDescriptor,i=(i,s,r,o)=>{for(var n,a=o>1?void 0:o?e(s,r):s,h=i.length-1;h>=0;h--)(n=i[h])&&(a=(o?n(s,r,a):n(a))||a);return o&&a&&t(s,r,a),a},s=globalThis,r=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),n=new WeakMap,a=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(r&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(e,t))}return t}toString(){return this.cssText}},h=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new a(i,t,o)},l=r?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,o))(e)})(t):t,{is:c,defineProperty:d,getOwnPropertyDescriptor:p,getOwnPropertyNames:u,getOwnPropertySymbols:v,getPrototypeOf:f}=Object,b=globalThis,g=b.trustedTypes,w=g?g.emptyScript:"",x=b.reactiveElementPolyfillSupport,m=(t,e)=>t,k={toAttribute(t,e){switch(e){case Boolean:t=t?w:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>!c(t,e),$={attribute:!0,type:String,converter:k,reflect:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),b.litPropertyMetadata??=new WeakMap;var E=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&d(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=p(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return s?.call(this)},set(e){const o=s?.call(this);r.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const t=f(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const t=this.properties,e=[...u(t),...v(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(r)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of e){const e=document.createElement("style"),r=s.litNonce;void 0!==r&&e.setAttribute("nonce",r),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:k).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:k;this._$Em=s,this[s]=r.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??y)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}};E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[m("elementProperties")]=new Map,E[m("finalized")]=new Map,x?.({ReactiveElement:E}),(b.reactiveElementVersions??=[]).push("2.0.4");var S,A=globalThis,_=A.trustedTypes,C=_?_.createPolicy("lit-html",{createHTML:t=>t}):void 0,U="$lit$",N=`lit$${Math.random().toFixed(9).slice(2)}$`,O="?"+N,T=`<${O}>`,M=document,I=()=>M.createComment(""),P=t=>null===t||"object"!=typeof t&&"function"!=typeof t,R=Array.isArray,L="[ \t\n\f\r]",z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,D=/>/g,H=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),B=/'/g,K=/"/g,F=/^(?:script|style|textarea|title)$/i,W=(S=1,(t,...e)=>({_$litType$:S,strings:t,values:e})),Z=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),G=new WeakMap,q=M.createTreeWalker(M,129);function J(t,e){if(!R(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(e):e}var Y=class t{constructor({strings:e,_$litType$:i},s){let r;this.parts=[];let o=0,n=0;const a=e.length-1,h=this.parts,[l,c]=((t,e)=>{const i=t.length-1,s=[];let r,o=2===e?"<svg>":3===e?"<math>":"",n=z;for(let e=0;e<i;e++){const i=t[e];let a,h,l=-1,c=0;for(;c<i.length&&(n.lastIndex=c,h=n.exec(i),null!==h);)c=n.lastIndex,n===z?"!--"===h[1]?n=j:void 0!==h[1]?n=D:void 0!==h[2]?(F.test(h[2])&&(r=RegExp("</"+h[2],"g")),n=H):void 0!==h[3]&&(n=H):n===H?">"===h[0]?(n=r??z,l=-1):void 0===h[1]?l=-2:(l=n.lastIndex-h[2].length,a=h[1],n=void 0===h[3]?H:'"'===h[3]?K:B):n===K||n===B?n=H:n===j||n===D?n=z:(n=H,r=void 0);const d=n===H&&t[e+1].startsWith("/>")?" ":"";o+=n===z?i+T:l>=0?(s.push(a),i.slice(0,l)+U+i.slice(l)+N+d):i+N+(-2===l?e:d)}return[J(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]})(e,i);if(this.el=t.createElement(l,s),q.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=q.nextNode())&&h.length<a;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(U)){const e=c[n++],i=r.getAttribute(t).split(N),s=/([.?@])?(.*)/.exec(e);h.push({type:1,index:o,name:s[2],strings:i,ctor:"."===s[1]?it:"?"===s[1]?st:"@"===s[1]?rt:et}),r.removeAttribute(t)}else t.startsWith(N)&&(h.push({type:6,index:o}),r.removeAttribute(t));if(F.test(r.tagName)){const t=r.textContent.split(N),e=t.length-1;if(e>0){r.textContent=_?_.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],I()),q.nextNode(),h.push({type:2,index:++o});r.append(t[e],I())}}}else if(8===r.nodeType)if(r.data===O)h.push({type:2,index:o});else{let t=-1;for(;-1!==(t=r.data.indexOf(N,t+1));)h.push({type:7,index:o}),t+=N.length-1}o++}}static createElement(t,e){const i=M.createElement("template");return i.innerHTML=t,i}};function Q(t,e,i=t,s){if(e===Z)return e;let r=void 0!==s?i.o?.[s]:i.l;const o=P(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(t),r._$AT(t,i,s)),void 0!==s?(i.o??=[])[s]=r:i.l=r),void 0!==r&&(e=Q(t,r._$AS(t,e.values),r,s)),e}var X=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??M).importNode(e,!0);q.currentNode=s;let r=q.nextNode(),o=0,n=0,a=i[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new tt(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new ot(r,this,t)),this._$AV.push(e),a=i[++n]}o!==a?.index&&(r=q.nextNode(),o++)}return q.currentNode=M,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},tt=class t{get _$AU(){return this._$AM?._$AU??this.v}constructor(t,e,i,s){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this.v=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),P(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==Z&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>R(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==V&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Y.createElement(J(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new X(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=G.get(t.strings);return void 0===e&&G.set(t.strings,e=new Y(t)),e}k(e){R(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,r=0;for(const o of e)r===i.length?i.push(s=new t(this.O(I()),this.O(I()),this,this.options)):s=i[r],s._$AI(o),r++;r<i.length&&(this._$AR(s&&s._$AB.nextSibling,r),i.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this.v=t,this._$AP?.(t))}},et=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}_$AI(t,e=this,i,s){const r=this.strings;let o=!1;if(void 0===r)t=Q(this,t,e,0),o=!P(t)||t!==this._$AH&&t!==Z,o&&(this._$AH=t);else{const s=t;let n,a;for(t=r[0],n=0;n<r.length-1;n++)a=Q(this,s[i+n],e,n),a===Z&&(a=this._$AH[n]),o||=!P(a)||a!==this._$AH[n],a===V?t=V:t!==V&&(t+=(a??"")+r[n+1]),this._$AH[n]=a}o&&!s&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},it=class extends et{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}},st=class extends et{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}},rt=class extends et{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??V)===Z)return;const i=this._$AH,s=t===V&&i!==V||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==V&&(i===V||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},ot=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}},nt=A.litHtmlPolyfillSupport;nt?.(Y,tt),(A.litHtmlVersions??=[]).push("3.2.0");var at=class extends E{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=((t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(void 0===r){const t=i?.renderBefore??null;s._$litPart$=r=new tt(e.insertBefore(I(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.o?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.o?.setConnected(!1)}render(){return Z}};at._$litElement$=!0,at.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:at});var ht=globalThis.litElementPolyfillSupport;ht?.({LitElement:at}),(globalThis.litElementVersions??=[]).push("4.1.0");var lt=t=>(e,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)},ct={attribute:!0,type:String,converter:k,reflect:!1,hasChanged:y},dt=(t=ct,e,i)=>{const{kind:s,metadata:r}=i;let o=globalThis.litPropertyMetadata.get(r);if(void 0===o&&globalThis.litPropertyMetadata.set(r,o=new Map),o.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,r,t)},init(e){return void 0!==e&&this.P(s,void 0,t),e}}}if("setter"===s){const{name:s}=i;return function(i){const r=this[s];e.call(this,i),this.requestUpdate(s,r,t)}}throw Error("Unsupported decorator location: "+s)};function pt(t){return(e,i)=>"object"==typeof i?dt(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,s?{...t,wrapped:!0}:t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function ut(t){return pt({...t,state:!0,attribute:!1})}var vt=h`
  :host {
    display: block;
    box-sizing: border-box;
    width: 100%;
    font-family: inherit;
    --pb-background-color: #ffffff;
    --pb-dark-background-color: #121212;
    --pb-text-color: #000000;
    --pb-border-color: rgb(124 139 154 / 25%);
    --pb-metadata-color: rgba(0, 0, 0, 0.7);
    --pb-dark-text-color: #e0e0e0;
    --pb-dark-border-color: #8080803a;
    --pb-dark-metadata-color: rgba(255, 255, 255, 0.7);
    --pb-skeleton-color: rgb(229, 231, 235);
    --pb-dark-skeleton-color: rgb(55, 65, 81);
    --pb-fallback-img-color: hsl(220, 13%, 80%);
    --pb-fallback-img-background: rgb(229, 231, 235);
    --pb-dark-fallback-img-color: hsl(220, 13%, 40%);
    --pb-dark-fallback-img-background: rgb(55, 65, 81);
    --pb-favicon-size: 20px;
  }

  .container {
    margin: 0;
    padding: 0;
    background-color: var(--pb-background-color);
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

  @media (prefers-color-scheme: dark) {
    :host {
      --pb-background-color: var(--pb-dark-background-color);
      --pb-text-color: var(--pb-dark-text-color);
      --pb-border-color: var(--pb-dark-border-color);
      --pb-metadata-color: var(--pb-dark-metadata-color);
    }

    .previewbox-title {
      color: var(--pb-dark-text-color);
    }

    .previewbox-description {
      color: var(--pb-dark-metadata-color);
    }

    .previewbox-metadata {
      color: var(--pb-dark-metadata-color);
    }
  }

`,ft=class extends at{constructor(){super(...arguments),this.href="",this.target="_blank",this.rel=""}};function bt(t){try{return t=function(t){return t?.replace(/https:\/\/|http:\/\/|www.|/gi,"")??""}(t),t=t?.split("/")[0],t??""}catch(e){return t??""}}i([pt()],ft.prototype,"href",2),i([pt()],ft.prototype,"target",2),i([pt()],ft.prototype,"rel",2);var gt=new class{async fetchLinkPreviewData(t,e){try{const i=new URLSearchParams;i.set("url",t);const s=await fetch(`${e.apiUrl}?${i.toString()}`,{headers:{origin:window.location.origin}});if(!s.ok)return 429===s.status?{error:"API_LIMIT_REACHED"}:{error:"UNKNOWN_ERROR"};return{data:await s.json()}}catch(t){return{error:"UNKNOWN_ERROR"}}}},wt=class extends ft{constructor(){super(...arguments),this.url=null,this.title="",this.description=null,this.author=null,this.imageUrl=null,this.imageAlt=null,this.faviconUrl=null,this.date=null,this.hidePoweredBy=void 0,this.apiUrl=window.location.href.startsWith("http://localhost:8000/demo")?"http://localhost:4444/api/v1/meta":"https://previewbox.link/api/v1/meta",this.fetchedLinkPreviewData=null,this._isLoading=!1,this._isError=!1,this._apiError=null}get linkData(){return this.fetchedLinkPreviewData?this.fetchedLinkPreviewData:{url:this.url,description:this.description,title:this.title,author:this.author,imageUrl:this.imageUrl,imageAlt:this.imageAlt,favicon:this.faviconUrl,date:this.date,origin:bt(this.url)}}firstUpdated(t){if(!this.href&&!this.url)throw new Error(`No href or url provided for ${this.localName}`);this.href?this._fetchLinkPreviewData():this._setManualData()}_fetchLinkPreviewData(){this._isLoading=!0,gt.fetchLinkPreviewData(this.href,{apiUrl:this.apiUrl}).then((t=>{!function(t){return"data"in t}(t)?(this._isError=!0,this._apiError=t.error):this.fetchedLinkPreviewData=t.data})).catch((t=>{console.error(`Error fetching link preview data for ${this.href}: ${t}`),this._isError=!0,this._apiError="UNKNOWN_ERROR"})).finally((()=>{this._isLoading=!1}))}_setManualData(){if(!this.url)throw new Error(`As no href was provided, url is required for ${this.localName}`);this.fetchedLinkPreviewData={url:this.url,description:this.description,title:this.title,author:this.author,imageUrl:this.imageUrl,imageAlt:this.imageAlt,favicon:this.faviconUrl,date:this.date,origin:bt(this.url)}}};i([pt()],wt.prototype,"url",2),i([pt()],wt.prototype,"title",2),i([pt()],wt.prototype,"description",2),i([pt()],wt.prototype,"author",2),i([pt()],wt.prototype,"imageUrl",2),i([pt()],wt.prototype,"imageAlt",2),i([pt()],wt.prototype,"faviconUrl",2),i([pt()],wt.prototype,"date",2),i([pt()],wt.prototype,"hidePoweredBy",2),i([pt()],wt.prototype,"apiUrl",2),i([ut()],wt.prototype,"fetchedLinkPreviewData",2),i([ut()],wt.prototype,"_isLoading",2),i([ut()],wt.prototype,"_isError",2),i([ut()],wt.prototype,"_apiError",2);var xt="FAVICON",mt="FAVICON_SKELETON",kt="FAVICON_FALLBACK",yt="IMAGE",$t="IMAGE_SKELETON",Et="IMAGE_FALLBACK",St="AUTHOR",At="PUBLISHER",_t="ANCHOR_ELEMENT",Ct="TITLE",Ut="TITLE_SKELETON",Nt="DESCRIPTION",Ot=h`
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

  @media (prefers-color-scheme: dark) {
    :host {
      --skeleton-color: var(--pb-dark-skeleton-color);
    }
  }
`,Tt=class extends at{constructor(){super(...arguments),this.width="100%",this.height="16px"}render(){return W`<div
      class="skeleton-shape"
      part="skeleton-shape"
      role="progressbar"
      style="width: ${this.width}; height: ${this.height};"
    >
      <slot></slot>
    </div>`}};Tt.styles=Ot,i([pt()],Tt.prototype,"width",2),i([pt()],Tt.prototype,"height",2),Tt=i([lt("previewbox-skeleton-shape")],Tt);var Mt=h`
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
`,It=class extends at{render(){const t=window.location.origin;return W`<div class="limit-info-container">
      <span class="limit-info-text"
        >You've reached the API limit for ${t}</span
      >
      <a
        class="limit-info-cta"
        target="_blank"
        href="https://previewbox.link/usage/${encodeURIComponent(t)}"
        >Check Usage</a
      >
    </div>`}};It.styles=Mt,It=i([lt("previewbox-limit-info")],It);var Pt=h`
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
`,Rt=class extends at{render(){return W`<span class="powered-by">
      Powered by
      <a href="https://previewbox.link">Previewbox</a>
    </span> `}};Rt.styles=Pt,Rt=i([lt("powered-by-previewbox")],Rt);var Lt=h`
  .previewbox-favicon {
    width: var(--pb-favicon-size);
    height: var(--pb-favicon-size);
  }
`,zt=W`<svg
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  viewBox="0 0 20 18"
>
  <path
    d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"
  />
</svg>`,jt=W`<svg
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
</svg> `,Dt=class extends at{constructor(){super(...arguments),this.faviconUrl=null,this.isFaviconError=!1}render(){return W`
    ${this.faviconUrl&&!this.isFaviconError?W`
          <img
            data-testid="${xt}"
            class="previewbox-favicon"
            part="favicon"
            src=${this.faviconUrl??""}
            alt="Favicon"
            @error=${()=>this.isFaviconError=!0}
          />
        `:jt}
    `}};Dt.styles=Lt,i([pt()],Dt.prototype,"faviconUrl",2),i([ut()],Dt.prototype,"isFaviconError",2),Dt=i([lt("previewbox-favicon")],Dt);var Ht=h`
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

    @media (prefers-color-scheme: dark) {
      background-color: var(--pb-dark-fallback-img-background);
    }

    svg {
      width: 40px;
      height: 40px;
      color: var(--pb-fallback-img-color);
    }

    @media (prefers-color-scheme: dark) {
      svg {
        color: var(--pb-dark-fallback-img-color);
      }
    }
  }
`,Bt=class extends at{constructor(){super(...arguments),this.imageUrl=null,this.imageAlt=null,this.isLoading=!0,this.isImageError=!1}render(){return this.isLoading?W`<previewbox-skeleton-shape
        height="100%"
        data-testid="${$t}"
      >
        ${zt}
      </previewbox-skeleton-shape>`:W`
      ${this.imageUrl&&!this.isImageError?W`
            <img
              data-testid="${yt}"
              part="image"
              src=${this.imageUrl??""}
              alt=${this.imageAlt??"Thumbnail image"}
              @error=${()=>this.isImageError=!0}
            />
          `:W`
            <figure
              class="fallback-img"
              part="image"
              data-testid="${Et}"
            >
              ${zt}
            </figure>
          `}
    `}};Bt.styles=Ht,i([pt()],Bt.prototype,"imageUrl",2),i([pt()],Bt.prototype,"imageAlt",2),i([pt({type:Boolean})],Bt.prototype,"isLoading",2),i([ut()],Bt.prototype,"isImageError",2),Bt=i([lt("previewbox-image")],Bt);var Kt=class extends wt{constructor(){super(...arguments),this.isImgError=!1,this.isFaviconError=!1}render(){return W`
      <figure part="container" class="container">
        ${"API_LIMIT_REACHED"===this._apiError?W`<previewbox-limit-info></previewbox-limit-info>`:""}
        <a
          href=${this.linkData.url||this.href}
          target=${this.target}
          part="link"
          rel=${this.rel}
          class="previewbox-link"
          data-testid="${_t}"
        >
          <div class="previewbox-content">
            <div class="previewbox-title" data-testid="${Ct}">
              ${this._isLoading?W`<previewbox-skeleton-shape
                    width="200px"
                    height="20px"
                    data-testid="${Ut}"
                  />`:this.linkData.title}
            </div>
            <div
              class="previewbox-description"
              data-testid="${Nt}"
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
                        data-testid="${mt}"
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
                    <span data-testid="${At}"
                      >${this.linkData.origin}</span
                    >${this.linkData.author?W`<span data-testid="${St}"
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
    `}};Kt.styles=vt,i([ut()],Kt.prototype,"isImgError",2),i([ut()],Kt.prototype,"isFaviconError",2),Kt=i([lt("previewbox-link")],Kt)})();
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
