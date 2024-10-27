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
    className: "text-lg font-medium decoration-dashed hover:underline",
  };

  return (
    <li className="my-6">
      <a
        href={href}
        className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
        rel="noopener"
        title={title}
      >
         {secHeading ? (
          <h2 {...headerProps}>{title}</h2>
        ) : (
          <h3 {...headerProps}>{title}</h3>
        )}



        <figure className="blog-figure">
          <img src={postImage} alt={title} />
            <figcaption className="figcaption-style">

         {postImageDesc}
            </figcaption>
        </figure>


      </a>
      <Datetime pubDatetime={pubDatetime} modDatetime={modDatetime} />
      <p>{description}</p>
      <aside role="complementary" class="tags">
      {frontmatter.tags && frontmatter.tags.length > 0 && (
              <ul className="flex flex-wrap gap-2">
              {frontmatter.tags.map((tag) => (
                <li key={tag} className="bg-gray-400 rounded px-2 py-1 text-sm">
                  <a href={`/tags/${slugifyStr(tag)}`} className="text-skin-accent hover:underline">
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

