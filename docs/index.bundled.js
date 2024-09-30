(()=>{var t=Object.defineProperty,i=Object.getOwnPropertyDescriptor,s=(s,e,o,r)=>{for(var n,h=r>1?void 0:r?i(e,o):e,a=s.length-1;a>=0;a--)(n=s[a])&&(h=(r?n(e,o,h):n(h))||h);return r&&h&&t(e,o,h),h},e=globalThis,o=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),n=new WeakMap,h=class{constructor(t,i,s){if(this._$cssResult$=!0,s!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(o&&void 0===t){const s=void 0!==i&&1===i.length;s&&(t=n.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&n.set(i,t))}return t}toString(){return this.cssText}},a=o?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const s of t.cssRules)i+=s.cssText;return(t=>new h("string"==typeof t?t:t+"",void 0,r))(i)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:u,getOwnPropertySymbols:f,getPrototypeOf:p}=Object,v=globalThis,g=v.trustedTypes,b=g?g.emptyScript:"",m=v.reactiveElementPolyfillSupport,k=(t,i)=>t,y={toAttribute(t,i){switch(i){case Boolean:t=t?b:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},w=(t,i)=>!l(t,i),x={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:w};Symbol.metadata??=Symbol("metadata"),v.litPropertyMetadata??=new WeakMap;var $=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=x){if(i.state&&(i.attribute=!1),this._$Ei(),this.elementProperties.set(t,i),!i.noAccessor){const s=Symbol(),e=this.getPropertyDescriptor(t,s,i);void 0!==e&&c(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){const{get:e,set:o}=d(this.prototype,t)??{get(){return this[i]},set(t){this[i]=t}};return{get(){return e?.call(this)},set(i){const r=e?.call(this);o.call(this,i),this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??x}static _$Ei(){if(this.hasOwnProperty(k("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(k("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(k("properties"))){const t=this.properties,i=[...u(t),...f(t)];for(const s of i)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const i=litPropertyMetadata.get(t);if(void 0!==i)for(const[t,s]of i)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)i.unshift(a(t))}else void 0!==t&&i.push(a(t));return i}static _$Eu(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,i=this.constructor.elementProperties;for(const s of i.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(o)t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const s of i){const i=document.createElement("style"),o=e.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=s.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$EC(t,i){const s=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,s);if(void 0!==e&&!0===s.reflect){const o=(void 0!==s.converter?.toAttribute?s.converter:y).toAttribute(i,s.type);this._$Em=t,null==o?this.removeAttribute(e):this.setAttribute(e,o),this._$Em=null}}_$AK(t,i){const s=this.constructor,e=s._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=s.getPropertyOptions(e),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=e,this[e]=o.fromAttribute(i,t.type),this._$Em=null}}requestUpdate(t,i,s){if(void 0!==t){if(s??=this.constructor.getPropertyOptions(t),!(s.hasChanged??w)(this[t],i))return;this.P(t,i,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,i,s){this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,i]of this._$Ep)this[t]=i;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[i,s]of t)!0!==s.wrapped||this._$AL.has(i)||void 0===this[i]||this.P(i,this[i],s)}let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(i)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(i)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[k("elementProperties")]=new Map,$[k("finalized")]=new Map,m?.({ReactiveElement:$}),(v.reactiveElementVersions??=[]).push("2.0.4");var S,_=globalThis,C=_.trustedTypes,A=C?C.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",U=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+U,T=`<${P}>`,M=document,O=()=>M.createComment(""),j=t=>null===t||"object"!=typeof t&&"function"!=typeof t,z=Array.isArray,N="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,I=/-->/g,L=/>/g,D=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),W=/'/g,B=/"/g,H=/^(?:script|style|textarea|title)$/i,J=(S=1,(t,...i)=>({_$litType$:S,strings:t,values:i})),Z=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),F=new WeakMap,K=M.createTreeWalker(M,129);function V(t,i){if(!z(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(i):i}var G=class t{constructor({strings:i,_$litType$:s},e){let o;this.parts=[];let r=0,n=0;const h=i.length-1,a=this.parts,[l,c]=((t,i)=>{const s=t.length-1,e=[];let o,r=2===i?"<svg>":3===i?"<math>":"",n=R;for(let i=0;i<s;i++){const s=t[i];let h,a,l=-1,c=0;for(;c<s.length&&(n.lastIndex=c,a=n.exec(s),null!==a);)c=n.lastIndex,n===R?"!--"===a[1]?n=I:void 0!==a[1]?n=L:void 0!==a[2]?(H.test(a[2])&&(o=RegExp("</"+a[2],"g")),n=D):void 0!==a[3]&&(n=D):n===D?">"===a[0]?(n=o??R,l=-1):void 0===a[1]?l=-2:(l=n.lastIndex-a[2].length,h=a[1],n=void 0===a[3]?D:'"'===a[3]?B:W):n===B||n===W?n=D:n===I||n===L?n=R:(n=D,o=void 0);const d=n===D&&t[i+1].startsWith("/>")?" ":"";r+=n===R?s+T:l>=0?(e.push(h),s.slice(0,l)+E+s.slice(l)+U+d):s+U+(-2===l?i:d)}return[V(t,r+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),e]})(i,s);if(this.el=t.createElement(l,e),K.currentNode=this.el.content,2===s||3===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=K.nextNode())&&a.length<h;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(E)){const i=c[n++],s=o.getAttribute(t).split(U),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:r,name:e[2],strings:s,ctor:"."===e[1]?it:"?"===e[1]?st:"@"===e[1]?et:tt}),o.removeAttribute(t)}else t.startsWith(U)&&(a.push({type:6,index:r}),o.removeAttribute(t));if(H.test(o.tagName)){const t=o.textContent.split(U),i=t.length-1;if(i>0){o.textContent=C?C.emptyScript:"";for(let s=0;s<i;s++)o.append(t[s],O()),K.nextNode(),a.push({type:2,index:++r});o.append(t[i],O())}}}else if(8===o.nodeType)if(o.data===P)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=o.data.indexOf(U,t+1));)a.push({type:7,index:r}),t+=U.length-1}r++}}static createElement(t,i){const s=M.createElement("template");return s.innerHTML=t,s}};function Q(t,i,s=t,e){if(i===Z)return i;let o=void 0!==e?s.o?.[e]:s.l;const r=j(i)?void 0:i._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),void 0===r?o=void 0:(o=new r(t),o._$AT(t,s,e)),void 0!==e?(s.o??=[])[e]=o:s.l=o),void 0!==o&&(i=Q(t,o._$AS(t,i.values),o,e)),i}var X=class{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??M).importNode(i,!0);K.currentNode=e;let o=K.nextNode(),r=0,n=0,h=s[0];for(;void 0!==h;){if(r===h.index){let i;2===h.type?i=new Y(o,o.nextSibling,this,t):1===h.type?i=new h.ctor(o,h.name,h.strings,this,t):6===h.type&&(i=new ot(o,this,t)),this._$AV.push(i),h=s[++n]}r!==h?.index&&(o=K.nextNode(),r++)}return K.currentNode=M,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}},Y=class t{get _$AU(){return this._$AM?._$AU??this.v}constructor(t,i,s,e){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this.v=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=Q(this,t,i),j(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==Z&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>z(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&j(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=G.createElement(V(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else{const t=new X(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t}}_$AC(t){let i=F.get(t.strings);return void 0===i&&F.set(t.strings,i=new G(t)),i}k(i){z(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let e,o=0;for(const r of i)o===s.length?s.push(e=new t(this.O(O()),this.O(O()),this,this.options)):e=s[o],e._$AI(r),o++;o<s.length&&(this._$AR(e&&e._$AB.nextSibling,o),s.length=o)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this.v=t,this._$AP?.(t))}},tt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,o){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=q}_$AI(t,i=this,s,e){const o=this.strings;let r=!1;if(void 0===o)t=Q(this,t,i,0),r=!j(t)||t!==this._$AH&&t!==Z,r&&(this._$AH=t);else{const e=t;let n,h;for(t=o[0],n=0;n<o.length-1;n++)h=Q(this,e[s+n],i,n),h===Z&&(h=this._$AH[n]),r||=!j(h)||h!==this._$AH[n],h===q?t=q:t!==q&&(t+=(h??"")+o[n+1]),this._$AH[n]=h}r&&!e&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},it=class extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}},st=class extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}},et=class extends tt{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5}_$AI(t,i=this){if((t=Q(this,t,i,0)??q)===Z)return;const s=this._$AH,e=t===q&&s!==q||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==q&&(s===q||e);e&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},ot=class{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}},rt=_.litHtmlPolyfillSupport;rt?.(G,Y),(_.litHtmlVersions??=[]).push("3.2.0");var nt=class extends ${constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=((t,i,s)=>{const e=s?.renderBefore??i;let o=e._$litPart$;if(void 0===o){const t=s?.renderBefore??null;e._$litPart$=o=new Y(i.insertBefore(O(),t),t,void 0,s??{})}return o._$AI(t),o})(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.o?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.o?.setConnected(!1)}render(){return Z}};nt._$litElement$=!0,nt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:nt});var ht=globalThis.litElementPolyfillSupport;ht?.({LitElement:nt}),(globalThis.litElementVersions??=[]).push("4.1.0");var at={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:w},lt=(t=at,i,s)=>{const{kind:e,metadata:o}=s;let r=globalThis.litPropertyMetadata.get(o);if(void 0===r&&globalThis.litPropertyMetadata.set(o,r=new Map),r.set(s.name,t),"accessor"===e){const{name:e}=s;return{set(s){const o=i.get.call(this);i.set.call(this,s),this.requestUpdate(e,o,t)},init(i){return void 0!==i&&this.P(e,void 0,t),i}}}if("setter"===e){const{name:e}=s;return function(s){const o=this[e];i.call(this,s),this.requestUpdate(e,o,t)}}throw Error("Unsupported decorator location: "+e)};function ct(t){return(i,s)=>"object"==typeof s?lt(t,i,s):((t,i,s)=>{const e=i.hasOwnProperty(s);return i.constructor.createProperty(s,e?{...t,wrapped:!0}:t),e?Object.getOwnPropertyDescriptor(i,s):void 0})(t,i,s)}var dt=((t,...i)=>{const s=1===t.length?t[0]:i.reduce(((i,s,e)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[e+1]),t[0]);return new h(s,t,r)})`
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
`;var ut,ft=class extends nt{constructor(){super(...arguments),this.url="",this._linkPreviewProps=null}firstUpdated(t){(async t=>(await fetch(`https://web-highlights.herokuapp.com/meta/${encodeURIComponent(t)}`)).json())(this.url).then((t=>{this._linkPreviewProps=t}))}render(){if(!this.url)return J`<div>No URL provided</div>`;if(!this._linkPreviewProps)return J`<div data-testid="loading">Loading...</div>`;const t=(i=function(t){return t?.replace(/https:\/\/|http:\/\/|www.|/gi,"")??""}(i=this.url),i=i?.split("/")[0],i??"");var i;return J`
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
                src=${this._linkPreviewProps.favicon??""}
                alt="Favicon of ${t}"
              /><span class="kg-bookmark-author"
                >${t}</span
              >${this._linkPreviewProps.author?J`<span class="kg-bookmark-publisher"
                >${this._linkPreviewProps.author}</span
              >`:""}
            </div>
          </div>
          <div class="kg-bookmark-thumbnail">
            <img
              src=${this._linkPreviewProps?.image?.url??""}
              alt=${this._linkPreviewProps.image?.alt??"Thumbnail image of "+this.url}
            />
          </div>
        </a>
      </figure>
    `}};ft.styles=dt,s([ct()],ft.prototype,"url",2),s([ct({...ut,state:!0,attribute:!1})],ft.prototype,"_linkPreviewProps",2),ft=s([(t=>(i,s)=>{void 0!==s?s.addInitializer((()=>{customElements.define(t,i)})):customElements.define(t,i)})("previewbox-link")],ft)})();
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
