import getRelativePath from "@utils/getRelativePath";
import { slugifyStr } from "@utils/slugify";
import type { CollectionEntry } from "astro:content";
import Datetime from "./Datetime";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
  currentLocale: string;
}

export default function Card({
  href,
  frontmatter,
  secHeading = true,
  currentLocale,
}: Props) {
  const { title, pubDatetime, modDatetime, description } = frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-lg font-medium decoration-dashed hover:underline",
  };

  return (
    <li className="my-6">
      <a
        href={href && getRelativePath(href)}
        className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
      >
        {secHeading ? (
          <h2 {...headerProps}>{title}</h2>
        ) : (
          <h3 {...headerProps}>{title}</h3>
        )}
      </a>
      <Datetime
        pubDatetime={pubDatetime}
        modDatetime={modDatetime}
        currentLocale={currentLocale}
      />
      <p>{description}</p>
    </li>
  );
}
