import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";
import getPostsByTag from "@utils/getPostsByTag";
import getUniqueTags from "@utils/getUniqueTags";
import Tag from "./Tag.astro";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
  postImage?: string;
  postImageDesc?: string;
  tags?: object;

}

export default function Card({ href, tags, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, postImage, postImageDesc, modDatetime, description } = frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-2xl font-bold decoration-dashed pb-2 hover:underline",
  };

  return (
    <li className="my-6">
       <a
        href={href}
        className="inline-block text-xl font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
        rel="noopener"
        title={title}
      >
         {secHeading ? (
          <h2 {...headerProps}>{title}</h2>
        ) : (
          <h3 {...headerProps}>{title}</h3>
        )}



{/* ///  <figure className="blog-figure">
     <img
            loading="lazy"
            src={postImage}
            alt={title}
            title={title}
            width="800"
            height="281"
            onError={(e) => { e.target.onerror = null; e.target.src = 'fallback-image.jpg'; }} // Fallback image
        />
        <figcaption className="figcaption-style text-sm">
            {postImageDesc}
        </figcaption>
    </figure>
)} */}


      </a>
      <Datetime pubDatetime={pubDatetime} modDatetime={modDatetime} className="pt-3" />
      <p className="text-lg mt-3">{description}</p>
      <aside role="complementary" className="tags mt-5 pt-3">
        <strong className="pb-3">Post tags:</strong>
      {frontmatter.tags && frontmatter.tags.length > 0 && (
              <ul className="flex flex-wrap gap-2 mt-2">
              {frontmatter.tags.map((tag) => (
                <li key={tag} className="bg-slate-600 rounded px-2 py-1 text-sm">
                  <a href={`/tags/${slugifyStr(tag)}`} className=" text-skin-accent font-bold hover:underline">
                  {tag}
                  </a>
                </li>
              ))}
              </ul>
            )}
      </aside>
    </li>
  );
}

