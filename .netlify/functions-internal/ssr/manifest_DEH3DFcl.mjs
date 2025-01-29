import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import { N as NOOP_MIDDLEWARE_HEADER, k as decodeKey } from './chunks/astro/server_BHvj0cTZ.mjs';
import 'clsx';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || undefined,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : undefined,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/dylanburkey/Documents/dev/Dylanburkey.box/","adapterName":"@astrojs/netlify","routes":[{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.md","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"archives/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/archives","isIndex":true,"type":"page","pattern":"^\\/archives\\/?$","segments":[[{"content":"archives","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/archives/index.astro","pathname":"/archives","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"og.png","links":[],"scripts":[],"styles":[],"routeData":{"route":"/og.png","isIndex":false,"type":"endpoint","pattern":"^\\/og\\.png\\/?$","segments":[[{"content":"og.png","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/og.png.ts","pathname":"/og.png","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"robots.txt","links":[],"scripts":[],"styles":[],"routeData":{"route":"/robots.txt","isIndex":false,"type":"endpoint","pattern":"^\\/robots\\.txt\\/?$","segments":[[{"content":"robots.txt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/robots.txt.ts","pathname":"/robots.txt","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.ts","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"search/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/search","isIndex":false,"type":"page","pattern":"^\\/search\\/?$","segments":[[{"content":"search","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/search.astro","pathname":"/search","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"tags/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/tags","isIndex":true,"type":"page","pattern":"^\\/tags\\/?$","segments":[[{"content":"tags","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tags/index.astro","pathname":"/tags","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"tools/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/tools","isIndex":false,"type":"page","pattern":"^\\/tools\\/?$","segments":[[{"content":"tools","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tools.md","pathname":"/tools","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://dylanburkey.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/layouts/PostDetails.astro",{"propagation":"in-tree","containsHead":false}],["/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/pages/posts/[slug]/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/posts/[slug]/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/layouts/TagPosts.astro",{"propagation":"in-tree","containsHead":false}],["/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/pages/tags/[tag]/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/tags/[tag]/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/layouts/Main.astro",{"propagation":"in-tree","containsHead":false}],["/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/layouts/Posts.astro",{"propagation":"in-tree","containsHead":false}],["/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/pages/posts/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/posts/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/pages/archives/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/archives/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/pages/search.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/search@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/pages/tags/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/tags/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/components/Tag.astro",{"propagation":"in-tree","containsHead":false}],["/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/components/Card.tsx",{"propagation":"in-tree","containsHead":false}],["/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/components/Search.tsx",{"propagation":"in-tree","containsHead":false}],["/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/pages/posts/[slug]/index.png.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/posts/[slug]/index.png@_@ts",{"propagation":"in-tree","containsHead":false}],["/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/pages/rss.xml.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@ts",{"propagation":"in-tree","containsHead":false}],["/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/utils/generateOgImages.tsx",{"propagation":"in-tree","containsHead":false}],["/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/pages/og.png.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/og.png@_@ts",{"propagation":"in-tree","containsHead":false}],["/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/pages/about.md",{"propagation":"none","containsHead":true}],["/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/pages/tools.md",{"propagation":"none","containsHead":true}],["/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/pages/404.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about@_@md":"pages/about.astro.mjs","\u0000@astro-page:src/pages/archives/index@_@astro":"pages/archives.astro.mjs","\u0000@astro-page:src/pages/og.png@_@ts":"pages/og.png.astro.mjs","\u0000@astro-page:src/pages/posts/[slug]/index.png@_@ts":"pages/posts/_slug_.png.astro.mjs","\u0000@astro-page:src/pages/posts/[slug]/index@_@astro":"pages/posts/_slug_.astro.mjs","\u0000@astro-page:src/pages/posts/[...page]@_@astro":"pages/posts/_---page_.astro.mjs","\u0000@astro-page:src/pages/robots.txt@_@ts":"pages/robots.txt.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@ts":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/search@_@astro":"pages/search.astro.mjs","\u0000@astro-page:src/pages/tags/[tag]/[...page]@_@astro":"pages/tags/_tag_/_---page_.astro.mjs","\u0000@astro-page:src/pages/tags/index@_@astro":"pages/tags.astro.mjs","\u0000@astro-page:src/pages/tools@_@md":"pages/tools.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DEH3DFcl.mjs","/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/content/blog/decentralized-social-media.md?astroContentCollectionEntry=true":"chunks/decentralized-social-media_C67Xcw_M.mjs","/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/content/blog/how-practical-branding-is-critical-to-the-success-of-web3.md?astroContentCollectionEntry=true":"chunks/how-practical-branding-is-critical-to-the-success-of-web3_cVox3sRk.mjs","/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/content/blog/how-to-address-ai-data-ownership-with-web3.md?astroContentCollectionEntry=true":"chunks/how-to-address-ai-data-ownership-with-web3_CjmY6VAt.mjs","/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/content/blog/inclusive-design-in-web3.md?astroContentCollectionEntry=true":"chunks/inclusive-design-in-web3_BaS05NEp.mjs","/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/content/blog/overcoming-development-pitfalls-in-web3.md?astroContentCollectionEntry=true":"chunks/overcoming-development-pitfalls-in-web3_wUeRgnYl.mjs","/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/content/blog/social-proof-is-the-key-web3-key-social-metric.md?astroContentCollectionEntry=true":"chunks/social-proof-is-the-key-web3-key-social-metric_DTeQdUTV.mjs","/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/content/blog/sportsbooks-and-crypto-the-government-response.md?astroContentCollectionEntry=true":"chunks/sportsbooks-and-crypto-the-government-response_BOzUcZHy.mjs","/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/content/blog/understanding-user-intent-web3.md?astroContentCollectionEntry=true":"chunks/understanding-user-intent-web3_3a4UXmIH.mjs","/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/content/blog/web3-seo-guide.md?astroContentCollectionEntry=true":"chunks/web3-seo-guide_B3aWY0BX.mjs","/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/content/blog/will-web3-become-a-reality.md?astroContentCollectionEntry=true":"chunks/will-web3-become-a-reality_D8MYwY4O.mjs","/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/content/blog/decentralized-social-media.md?astroPropagatedAssets":"chunks/decentralized-social-media_DGZnTo1_.mjs","/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/content/blog/how-practical-branding-is-critical-to-the-success-of-web3.md?astroPropagatedAssets":"chunks/how-practical-branding-is-critical-to-the-success-of-web3_DnL67lZu.mjs","/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/content/blog/how-to-address-ai-data-ownership-with-web3.md?astroPropagatedAssets":"chunks/how-to-address-ai-data-ownership-with-web3_DpdZoQ3D.mjs","/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/content/blog/inclusive-design-in-web3.md?astroPropagatedAssets":"chunks/inclusive-design-in-web3_BaukIf5q.mjs","/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/content/blog/overcoming-development-pitfalls-in-web3.md?astroPropagatedAssets":"chunks/overcoming-development-pitfalls-in-web3_DVi_PqWA.mjs","/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/content/blog/social-proof-is-the-key-web3-key-social-metric.md?astroPropagatedAssets":"chunks/social-proof-is-the-key-web3-key-social-metric_DNv7HxmL.mjs","/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/content/blog/sportsbooks-and-crypto-the-government-response.md?astroPropagatedAssets":"chunks/sportsbooks-and-crypto-the-government-response_B6bmJuww.mjs","/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/content/blog/understanding-user-intent-web3.md?astroPropagatedAssets":"chunks/understanding-user-intent-web3_DC4CjZ39.mjs","/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/content/blog/web3-seo-guide.md?astroPropagatedAssets":"chunks/web3-seo-guide_BJzSw58a.mjs","/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/content/blog/will-web3-become-a-reality.md?astroPropagatedAssets":"chunks/will-web3-become-a-reality_BjuhoCxG.mjs","/Users/dylanburkey/Documents/dev/Dylanburkey.box/.astro/assets.mjs":"chunks/assets_BwNa1IAe.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BkDlUxfU.mjs","/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/content/blog/decentralized-social-media.md":"chunks/decentralized-social-media_B8leWX_t.mjs","/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/content/blog/how-practical-branding-is-critical-to-the-success-of-web3.md":"chunks/how-practical-branding-is-critical-to-the-success-of-web3_BfSin6U5.mjs","/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/content/blog/how-to-address-ai-data-ownership-with-web3.md":"chunks/how-to-address-ai-data-ownership-with-web3_CMc8_H5T.mjs","/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/content/blog/inclusive-design-in-web3.md":"chunks/inclusive-design-in-web3_CmQZfrGc.mjs","/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/content/blog/overcoming-development-pitfalls-in-web3.md":"chunks/overcoming-development-pitfalls-in-web3_vLFU8CAo.mjs","/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/content/blog/social-proof-is-the-key-web3-key-social-metric.md":"chunks/social-proof-is-the-key-web3-key-social-metric_LlrzSHxm.mjs","/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/content/blog/sportsbooks-and-crypto-the-government-response.md":"chunks/sportsbooks-and-crypto-the-government-response_StxBBG8n.mjs","/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/content/blog/understanding-user-intent-web3.md":"chunks/understanding-user-intent-web3_ufVI8uMq.mjs","/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/content/blog/web3-seo-guide.md":"chunks/web3-seo-guide_CnUvBeW4.mjs","/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/content/blog/will-web3-become-a-reality.md":"chunks/will-web3-become-a-reality_Cagso0GU.mjs","@components/Search":"_astro/Search.CjOCRMxu.js","@astrojs/react/client.js":"_astro/client.Com7lows.js","/astro/hoisted.js?q=0":"_astro/hoisted.B5YuROA-.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/web3-and-ai.HWiwmpYe.webp","/_astro/dylan-burkey-and-family-in-costa-rica.B7cFRa4p.jpg","/_astro/about.CF84N8Gl.css","/_astro/about.DP5q_Pi2.css","/astropaper-og.jpg","/favicon.svg","/sw.js","/toggle-theme.js","/_astro/Search.CjOCRMxu.js","/_astro/client.Com7lows.js","/_astro/hoisted.B5YuROA-.js","/_astro/index.5XC2200L.js","/_astro/search.Rdwq7ULV.css","/assets/blockchain-news.webp","/assets/dev.svg","/assets/dylan-burkey.jpg","/assets/dylanburkey-box-logo.jpg","/assets/favicon.webp","/assets/forrest-gump-quote.webp","/assets/logo.png","/assets/logo.svg","/assets/seo.webp","/assets/weather.json","/assets/web3-and-ai.webp","/assets/web3-seo-guide.avif","/assets/web3-seo-jpeg.webp","/assets/web3-seo-marketing.jpg","/404.html","/about/index.html","/archives/index.html","/og.png","/robots.txt","/rss.xml","/search/index.html","/tags/index.html","/tools/index.html","/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"pILHmA2b7GnflEVH24jNHpQ3Zs5MtovnoYm0gVD1pbk=","experimentalEnvGetSecretEnabled":false});

export { manifest };
