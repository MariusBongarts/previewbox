(()=>{var t=Object.defineProperty,e=Object.getOwnPropertyDescriptor,i=(i,s,o,r)=>{for(var n,a=r>1?void 0:r?e(s,o):s,h=i.length-1;h>=0;h--)(n=i[h])&&(a=(r?n(s,o,a):n(a))||a);return r&&a&&t(s,o,a),a},s=globalThis,o=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),n=new WeakMap,a=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(o&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(e,t))}return t}toString(){return this.cssText}},h=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new a(i,t,r)},l=o?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,r))(e)})(t):t,{is:c,defineProperty:d,getOwnPropertyDescriptor:p,getOwnPropertyNames:b,getOwnPropertySymbols:v,getPrototypeOf:u}=Object,g=globalThis,f=g.trustedTypes,x=f?f.emptyScript:"",w=g.reactiveElementPolyfillSupport,m=(t,e)=>t,k={toAttribute(t,e){switch(e){case Boolean:t=t?x:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},$=(t,e)=>!c(t,e),y={attribute:!0,type:String,converter:k,reflect:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;var E=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=y){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&d(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=p(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return s?.call(this)},set(e){const r=s?.call(this);o.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const t=this.properties,e=[...b(t),...v(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(o)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of e){const e=document.createElement("style"),o=s.litNonce;void 0!==o&&e.setAttribute("nonce",o),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:k).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:k;this._$Em=s,this[s]=o.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??$)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}};E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[m("elementProperties")]=new Map,E[m("finalized")]=new Map,w?.({ReactiveElement:E}),(g.reactiveElementVersions??=[]).push("2.0.4");var A,S=globalThis,_=S.trustedTypes,C=_?_.createPolicy("lit-html",{createHTML:t=>t}):void 0,U="$lit$",M=`lit$${Math.random().toFixed(9).slice(2)}$`,O="?"+M,T=`<${O}>`,R=document,N=()=>R.createComment(""),L=t=>null===t||"object"!=typeof t&&"function"!=typeof t,I=Array.isArray,P="[ \t\n\f\r]",z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,B=/>/g,D=RegExp(`>|${P}(?:([^\\s"'>=/]+)(${P}*=${P}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),H=/'/g,K=/"/g,F=/^(?:script|style|textarea|title)$/i,W=(A=1,(t,...e)=>({_$litType$:A,strings:t,values:e})),Z=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),G=new WeakMap,q=R.createTreeWalker(R,129);function J(t,e){if(!I(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(e):e}var Y=class t{constructor({strings:e,_$litType$:i},s){let o;this.parts=[];let r=0,n=0;const a=e.length-1,h=this.parts,[l,c]=((t,e)=>{const i=t.length-1,s=[];let o,r=2===e?"<svg>":3===e?"<math>":"",n=z;for(let e=0;e<i;e++){const i=t[e];let a,h,l=-1,c=0;for(;c<i.length&&(n.lastIndex=c,h=n.exec(i),null!==h);)c=n.lastIndex,n===z?"!--"===h[1]?n=j:void 0!==h[1]?n=B:void 0!==h[2]?(F.test(h[2])&&(o=RegExp("</"+h[2],"g")),n=D):void 0!==h[3]&&(n=D):n===D?">"===h[0]?(n=o??z,l=-1):void 0===h[1]?l=-2:(l=n.lastIndex-h[2].length,a=h[1],n=void 0===h[3]?D:'"'===h[3]?K:H):n===K||n===H?n=D:n===j||n===B?n=z:(n=D,o=void 0);const d=n===D&&t[e+1].startsWith("/>")?" ":"";r+=n===z?i+T:l>=0?(s.push(a),i.slice(0,l)+U+i.slice(l)+M+d):i+M+(-2===l?e:d)}return[J(t,r+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]})(e,i);if(this.el=t.createElement(l,s),q.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=q.nextNode())&&h.length<a;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(U)){const e=c[n++],i=o.getAttribute(t).split(M),s=/([.?@])?(.*)/.exec(e);h.push({type:1,index:r,name:s[2],strings:i,ctor:"."===s[1]?it:"?"===s[1]?st:"@"===s[1]?ot:et}),o.removeAttribute(t)}else t.startsWith(M)&&(h.push({type:6,index:r}),o.removeAttribute(t));if(F.test(o.tagName)){const t=o.textContent.split(M),e=t.length-1;if(e>0){o.textContent=_?_.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],N()),q.nextNode(),h.push({type:2,index:++r});o.append(t[e],N())}}}else if(8===o.nodeType)if(o.data===O)h.push({type:2,index:r});else{let t=-1;for(;-1!==(t=o.data.indexOf(M,t+1));)h.push({type:7,index:r}),t+=M.length-1}r++}}static createElement(t,e){const i=R.createElement("template");return i.innerHTML=t,i}};function Q(t,e,i=t,s){if(e===Z)return e;let o=void 0!==s?i.o?.[s]:i.l;const r=L(e)?void 0:e._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),void 0===r?o=void 0:(o=new r(t),o._$AT(t,i,s)),void 0!==s?(i.o??=[])[s]=o:i.l=o),void 0!==o&&(e=Q(t,o._$AS(t,e.values),o,s)),e}var X=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??R).importNode(e,!0);q.currentNode=s;let o=q.nextNode(),r=0,n=0,a=i[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new tt(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new rt(o,this,t)),this._$AV.push(e),a=i[++n]}r!==a?.index&&(o=q.nextNode(),r++)}return q.currentNode=R,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},tt=class t{get _$AU(){return this._$AM?._$AU??this.v}constructor(t,e,i,s){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this.v=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),L(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==Z&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>I(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==V&&L(this._$AH)?this._$AA.nextSibling.data=t:this.T(R.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Y.createElement(J(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new X(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=G.get(t.strings);return void 0===e&&G.set(t.strings,e=new Y(t)),e}k(e){I(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,o=0;for(const r of e)o===i.length?i.push(s=new t(this.O(N()),this.O(N()),this,this.options)):s=i[o],s._$AI(r),o++;o<i.length&&(this._$AR(s&&s._$AB.nextSibling,o),i.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this.v=t,this._$AP?.(t))}},et=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(void 0===o)t=Q(this,t,e,0),r=!L(t)||t!==this._$AH&&t!==Z,r&&(this._$AH=t);else{const s=t;let n,a;for(t=o[0],n=0;n<o.length-1;n++)a=Q(this,s[i+n],e,n),a===Z&&(a=this._$AH[n]),r||=!L(a)||a!==this._$AH[n],a===V?t=V:t!==V&&(t+=(a??"")+o[n+1]),this._$AH[n]=a}r&&!s&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},it=class extends et{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}},st=class extends et{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}},ot=class extends et{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??V)===Z)return;const i=this._$AH,s=t===V&&i!==V||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==V&&(i===V||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},rt=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}},nt=S.litHtmlPolyfillSupport;nt?.(Y,tt),(S.litHtmlVersions??=[]).push("3.2.0");var at=class extends E{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=((t,e,i)=>{const s=i?.renderBefore??e;let o=s._$litPart$;if(void 0===o){const t=i?.renderBefore??null;s._$litPart$=o=new tt(e.insertBefore(N(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.o?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.o?.setConnected(!1)}render(){return Z}};at._$litElement$=!0,at.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:at});var ht=globalThis.litElementPolyfillSupport;ht?.({LitElement:at}),(globalThis.litElementVersions??=[]).push("4.1.0");var lt=t=>(e,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)},ct={attribute:!0,type:String,converter:k,reflect:!1,hasChanged:$},dt=(t=ct,e,i)=>{const{kind:s,metadata:o}=i;let r=globalThis.litPropertyMetadata.get(o);if(void 0===r&&globalThis.litPropertyMetadata.set(o,r=new Map),r.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,o,t)},init(e){return void 0!==e&&this.P(s,void 0,t),e}}}if("setter"===s){const{name:s}=i;return function(i){const o=this[s];e.call(this,i),this.requestUpdate(s,o,t)}}throw Error("Unsupported decorator location: "+s)};function pt(t){return(e,i)=>"object"==typeof i?dt(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,s?{...t,wrapped:!0}:t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function bt(t){return pt({...t,state:!0,attribute:!1})}var vt={"--pb-background-color":{light:h`#ffffff`,dark:h`#121212`},"--pb-background-color-hover":{light:h`#f9fafb`,dark:h`#1e293b`},"--pb-text-color":{light:h`#000000`,dark:h`#e0e0e0`},"--pb-border-color":{light:h`rgba(124, 139, 154, 0.25)`,dark:h`#80808034`},"--pb-text-color-light":{light:h`rgba(0, 0, 0, 0.7)`,dark:h`rgba(255, 255, 255, 0.8)`},"--pb-fallback-img-color":{light:h`hsl(220, 13%, 80%)`,dark:h`hsl(220, 13%, 40%)`},"--pb-fallback-img-background":{light:h`rgb(229, 231, 235)`,dark:h`rgb(55, 65, 81)`},"--pb-skeleton-color":{light:h`rgb(229, 231, 235)`,dark:h`rgb(55, 65, 81)`}};function ut(t,e){Object.keys(vt).forEach((i=>{t.style.setProperty(i,vt[i][e].toString())}))}var gt=h`
  ${h`
    :host {
      --pb-background-color: ${vt["--pb-background-color"].light};
      --pb-dark-background-color: ${vt["--pb-background-color"].dark};
      --pb-background-color-hover: ${vt["--pb-background-color-hover"].light};
      --pb-dark-background-color-hover: ${vt["--pb-background-color-hover"].dark};
      --pb-text-color: ${vt["--pb-text-color"].light};
      --pb-dark-text-color: ${vt["--pb-text-color"].dark};
      --pb-border-color: ${vt["--pb-border-color"].light};
      --pb-dark-border-color: ${vt["--pb-border-color"].dark};
      --pb-text-color-light: ${vt["--pb-text-color-light"].light};
      --pb-dark-metadata-color: ${vt["--pb-text-color-light"].dark};
      --pb-skeleton-color: ${vt["--pb-skeleton-color"].light};
      --pb-dark-skeleton-color: ${vt["--pb-skeleton-color"].dark};
      --pb-fallback-img-color: ${vt["--pb-fallback-img-color"].light};
      --pb-dark-fallback-img-color: ${vt["--pb-fallback-img-color"].dark};
      --pb-fallback-img-background: ${vt["--pb-fallback-img-background"].light};
      --pb-dark-fallback-img-background: ${vt["--pb-fallback-img-background"].dark};
      --pb-favicon-size: 20px;
    }

    @media (prefers-color-scheme: dark) {
      :host {
        --pb-background-color: var(--pb-dark-background-color);
        --pb-background-color-hover: var(--pb-dark-background-color-hover);
        --pb-text-color: var(--pb-dark-text-color);
        --pb-border-color: var(--pb-dark-border-color);
        --pb-text-color-light: var(--pb-dark-metadata-color);
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
    color: var(--pb-text-color-light);
  }

  .previewbox-link {
    text-decoration: none;
    display: flex;
    text-decoration: none;
    color: inherit;
  }
`,ft=h`
  ${gt}
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
    color: var(--pb-text-color-light);
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
    color: var(--pb-text-color-light);
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


`,xt=class extends at{constructor(){super(...arguments),this.href="",this.target="_blank",this.rel=""}};function wt(t){try{return t=function(t){return t?.replace(/https:\/\/|http:\/\/|www.|/gi,"")??""}(t),t=t?.split("/")[0],t??""}catch(e){return t??""}}i([pt()],xt.prototype,"href",2),i([pt()],xt.prototype,"target",2),i([pt()],xt.prototype,"rel",2);var mt=new class{async fetchLinkPreviewData(t,e){try{const i=new URLSearchParams;i.set("url",t);const s=await fetch(`${e.apiUrl}?${i.toString()}`,{headers:{origin:window.location.origin}});if(!s.ok)return 429===s.status?{error:"API_LIMIT_REACHED"}:{error:"UNKNOWN_ERROR"};return{data:await s.json()}}catch(t){return{error:"UNKNOWN_ERROR"}}}},kt=class extends xt{constructor(){super(...arguments),this.url=null,this.title="",this.description=null,this.author=null,this.imageUrl=null,this.imageAlt=null,this.faviconUrl=null,this.date=null,this.hidePoweredBy=void 0,this.apiUrl=window.location.href.startsWith("http://localhost:8000/demo")?"http://localhost:4444/api/v1/meta":"https://previewbox.link/api/v1/meta",this.dark=void 0,this.light=void 0,this.fetchedLinkPreviewData=null,this._isLoading=!1,this._isError=!1,this._apiError=null}get linkData(){return this.fetchedLinkPreviewData?this.fetchedLinkPreviewData:{url:this.url,description:this.description,title:this.title,author:this.author,imageUrl:this.imageUrl,imageAlt:this.imageAlt,favicon:this.faviconUrl,date:this.date,origin:wt(this.url)}}firstUpdated(t){if(void 0!==this.dark&&ut(this,"dark"),void 0!==this.light&&ut(this,"light"),!this.href&&!this.url)throw new Error(`No href or url provided for ${this.localName}`);this.href?this._fetchLinkPreviewData():this._setManualData()}_fetchLinkPreviewData(){this._isLoading=!0,mt.fetchLinkPreviewData(this.href,{apiUrl:this.apiUrl}).then((t=>{!function(t){return"data"in t}(t)?(this._isError=!0,this._apiError=t.error):this.fetchedLinkPreviewData=t.data})).catch((t=>{console.error(`Error fetching link preview data for ${this.href}: ${t}`),this._isError=!0,this._apiError="UNKNOWN_ERROR"})).finally((()=>{this._isLoading=!1}))}_setManualData(){if(!this.url)throw new Error(`As no href was provided, url is required for ${this.localName}`);this.fetchedLinkPreviewData={url:this.url,description:this.description,title:this.title,author:this.author,imageUrl:this.imageUrl,imageAlt:this.imageAlt,favicon:this.faviconUrl,date:this.date,origin:wt(this.url)}}};i([pt()],kt.prototype,"url",2),i([pt()],kt.prototype,"title",2),i([pt()],kt.prototype,"description",2),i([pt()],kt.prototype,"author",2),i([pt()],kt.prototype,"imageUrl",2),i([pt()],kt.prototype,"imageAlt",2),i([pt()],kt.prototype,"faviconUrl",2),i([pt()],kt.prototype,"date",2),i([pt()],kt.prototype,"hidePoweredBy",2),i([pt()],kt.prototype,"apiUrl",2),i([pt()],kt.prototype,"dark",2),i([pt()],kt.prototype,"light",2),i([bt()],kt.prototype,"fetchedLinkPreviewData",2),i([bt()],kt.prototype,"_isLoading",2),i([bt()],kt.prototype,"_isError",2),i([bt()],kt.prototype,"_apiError",2);var $t="FAVICON",yt="FAVICON_SKELETON",Et="FAVICON_FALLBACK",At="IMAGE",St="IMAGE_SKELETON",_t="IMAGE_FALLBACK",Ct="AUTHOR",Ut="PUBLISHER",Mt="ANCHOR_ELEMENT",Ot="TITLE",Tt="TITLE_SKELETON",Rt="DESCRIPTION",Nt="READ_MORE_BUTTON",Lt="POWERED_BY",It=h`
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
`,Pt=(t,e)=>{(t=>!!customElements.get(t)||document.createElement(t).constructor!==HTMLElement)(t)||customElements.define(t,e)},zt=class extends at{constructor(){super(...arguments),this.width="100%",this.height="16px"}static{this.styles=It}render(){return W`<div
      class="skeleton-shape"
      part="skeleton-shape"
      role="progressbar"
      style="width: ${this.width}; height: ${this.height};"
    >
      <slot></slot>
    </div>`}};i([pt()],zt.prototype,"width",2),i([pt()],zt.prototype,"height",2);Pt("previewbox-skeleton-shape",zt);var jt=h`
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
    text-align: center;
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
`;Pt("previewbox-limit-info",class extends at{static{this.styles=jt}render(){const t=window.location.origin;return W`<div class="limit-info-container">
      <span class="limit-info-text"
        >You've reached the API limit for ${t}</span
      >
      <a
        class="limit-info-cta"
        target="_blank"
        href="https://previewbox.link/usage/${encodeURIComponent(t)}"
        >Check Usage</a
      >
    </div>`}});var Bt=h`
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
`;Pt("powered-by-previewbox",class extends at{static{this.styles=Bt}render(){return W`<span class="powered-by">
      Powered by
      <a href="https://previewbox.link">Previewbox</a>
    </span> `}});var Dt=h`
  .previewbox-favicon {
    width: var(--pb-favicon-size);
    height: var(--pb-favicon-size);
  }
`,Ht=W`<svg
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  viewBox="0 0 20 18"
>
  <path
    d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"
  />
</svg>`,Kt=W`<svg
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
</svg> `,Ft=class extends at{constructor(){super(...arguments),this.faviconUrl=null,this.isFaviconError=!1}static{this.styles=Dt}render(){return W`
      ${this.faviconUrl&&!this.isFaviconError?W`
            <img
              data-testid="${$t}"
              class="previewbox-favicon"
              part="favicon"
              src=${this.faviconUrl??""}
              alt="Favicon"
              @error=${()=>this.isFaviconError=!0}
            />
          `:Kt}
    `}};i([pt()],Ft.prototype,"faviconUrl",2),i([bt()],Ft.prototype,"isFaviconError",2);Pt("previewbox-favicon",Ft);var Wt=h`
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
`,Zt=class extends at{constructor(){super(...arguments),this.imageUrl=null,this.imageAlt=null,this.isLoading=!0,this.isImageError=!1}static{this.styles=Wt}render(){return this.isLoading?W`<previewbox-skeleton-shape
        height="100%"
        data-testid="${St}"
      >
        ${Ht}
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
              ${Ht}
            </figure>
          `}
    `}};i([pt()],Zt.prototype,"imageUrl",2),i([pt()],Zt.prototype,"imageAlt",2),i([pt({type:Boolean})],Zt.prototype,"isLoading",2),i([bt()],Zt.prototype,"isImageError",2);Pt("previewbox-image",Zt);var Vt=class extends kt{render(){return W`
      <figure part="container" class="container">
        ${"API_LIMIT_REACHED"===this._apiError?W`<previewbox-limit-info></previewbox-limit-info>`:""}
        <a
          href=${this.linkData.url||this.href}
          target=${this.target}
          part="link"
          rel=${this.rel}
          class="previewbox-link"
          data-testid="${Mt}"
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
              data-testid="${Rt}"
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
        ${void 0!==this.hidePoweredBy?"":W`<powered-by-previewbox
              data-testid="${Lt}"
            ></powered-by-previewbox>`}
      </figure>
    `}};Vt.styles=ft,Vt=i([lt("previewbox-link")],Vt);var Gt=h`
  ${gt}

  :host {
    max-width: 320px;
  }

  .container {
    overflow: hidden;
    position: relative;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
      0 1px 2px -1px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .previewbox-link {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: inherit;
    flex: 1;
  }

  .previewbox-content {
    padding: 16px;
    overflow: hidden;
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .previewbox-title {
    display: -webkit-box;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.2;
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow-y: hidden;
    margin-bottom: 8px;

    @media (min-width: 768px) {
      font-size: 1.2rem;
    }
  }

  .previewbox-description {
    display: -webkit-box;
    font-size: 0.875rem;
    line-height: 1.5em;
    margin-top: 3px;
    font-weight: 400;
    width: 100%;
    overflow-y: hidden;
    opacity: 0.7;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }


  .previewbox-thumbnail {
    position: relative;
    width: 100%;
    height: 180px;
  }

  .previewbox-read-more-container {
    margin-top: auto;
  }

  .previewbox-read-more {
    display: flex;
    align-items: center;
    margin-top: 24px;
    padding: 8px;
    gap: 4px;
    font-size: 0.875rem;
    font-weight: 400;
    background-color: transparent;
    color: var(--pb-text-color-light);
    cursor: pointer;
    border-radius: 8px;
    border: 1px solid var(--pb-border-color);
    transition: background-color 0.2s ease-in-out;
    svg {
      width: 12px;
      height: 12px;
      fill: var(--pb-text-color-light);
      margin-left: 4px;
    }
  }

  .previewbox-read-more:hover {
    background-color: var(--pb-background-color-hover);
  }
`,qt=class extends kt{constructor(){super(...arguments),this.readMoreBtnText="Read more"}render(){return W`
      <article part="container" class="container">
        ${"API_LIMIT_REACHED"===this._apiError?W`<previewbox-limit-info></previewbox-limit-info>`:""}
        <a
          href=${this.linkData.url||this.href}
          target=${this.target}
          part="link"
          rel=${this.rel}
          class="previewbox-link"
          data-testid="${Mt}"
        >
          <div class="previewbox-thumbnail" part="thumbnail">
            <previewbox-image
              .isLoading=${this._isLoading}
              .imageUrl=${this.linkData?.imageUrl}
              .imageAlt=${this.linkData?.imageAlt}
            ></previewbox-image>
          </div>
          <div class="previewbox-content">
            <div class="previewbox-title" data-testid="${Ot}">
              ${this._isLoading?W`<previewbox-skeleton-shape
                      width="100%"
                      height="20px"
                      data-testid="${Tt}"
                    ></previewbox-skeleton-shape>
                    <previewbox-skeleton-shape
                      width="90%"
                      height="20px"
                      style="margin-top: 4px;"
                      data-testid="${Tt}"
                    />`:this.linkData.title}
            </div>
            <div
              class="previewbox-description"
              data-testid="${Rt}"
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

            <div class="previewbox-read-more-container">
              ${void 0===this.hideReadMoreBtn?W`
                    <button
                      class="previewbox-read-more"
                      data-testid="${Nt}"
                      title=${this.readMoreBtnText}
                    >
                      ${this.readMoreBtnText}
                      <svg
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        ></path>
                      </svg>
                    </button>
                  `:W``}
            </div>
          </div>
        </a>
        ${void 0!==this.hidePoweredBy?"":W`<powered-by-previewbox
              data-testid="${Lt}"
            ></powered-by-previewbox>`}
      </article>
    `}};qt.styles=Gt,i([pt()],qt.prototype,"hideReadMoreBtn",2),i([pt()],qt.prototype,"readMoreBtnText",2),qt=i([lt("previewbox-article")],qt)})();
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
