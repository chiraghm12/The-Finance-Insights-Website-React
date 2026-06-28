import { PageHeader } from "@/layouts/PageHeader";
import { CategoryListing } from "@/components/CategoryListing";
import { getCategory } from "@/data/categories";
import { getArticlesByCategory } from "@/data/articles";

/** Generic category page reused by all six learning tracks. */
export function CategoryPage({ slug }) {
  const category = getCategory(slug);
  const items = getArticlesByCategory(slug);

  if (!category) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-40 text-center">
        <h1 className="text-2xl font-bold">Category not found</h1>
      </div>);

  }

  return (
    <>
      <PageHeader
        eyebrow="Learning Track"
        title={category.title}
        description={category.description}
        crumbs={[{ label: "Learn", to: "/learn" }, { label: category.title }]} />
      
      <CategoryListing articles={items} />
    </>);

}