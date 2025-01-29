import { jsx, jsxs } from 'react/jsx-runtime';
import { s as slugifyStr } from './slugify_CvQuO4Tx.mjs';
import { D as Datetime } from './Datetime_C05B2bPG.mjs';
import './Tag_DPHRT4gW.mjs';

function Card({
  href,
  frontmatter,
  secHeading = true,
  index = 0
}) {
  const {
    title,
    pubDatetime,
    postImage,
    postImageDesc,
    modDatetime,
    description
  } = frontmatter;
  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-xl font-bold decoration-dashed hover:underline"
  };
  return /* @__PURE__ */ jsx("li", { className: "my-6", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
    postImage && /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-48", children: /* @__PURE__ */ jsxs("picture", { children: [
      /* @__PURE__ */ jsx("source", { srcSet: postImage, type: "image/jpeg" }),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: postImage,
          alt: postImageDesc || title,
          className: "rounded-lg object-cover w-full h-32",
          loading: index <= 2 ? "eager" : "lazy",
          width: "800",
          height: "400",
          decoding: index <= 2 ? "sync" : "async"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex-grow", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href,
          className: "inline-block text-xl font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0",
          rel: "noopener",
          title,
          children: secHeading ? /* @__PURE__ */ jsx("h2", { ...headerProps, children: title }) : /* @__PURE__ */ jsx("h3", { ...headerProps, children: title })
        }
      ),
      /* @__PURE__ */ jsx(
        Datetime,
        {
          pubDatetime,
          modDatetime,
          className: "pt-3"
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "text-lg mt-3", children: description })
    ] })
  ] }) });
}

export { Card as C };
