import { Helmet } from "react-helmet-async";
import { siteMeta } from "@mod/config/siteMeta";

export function SEO({
  title = siteMeta.title,
  description = siteMeta.description,
  path = "/"
}: { title?: string; description?: string; path?: string }) {
  const url = path;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
    </Helmet>
  );
}
