"use client";

interface ArticleItem {
  id: number | string;
  image: string;
  description: string;
}

interface PopularArticlesProps {
  articles: ArticleItem[];
}

export const PopularArticles: React.FC<PopularArticlesProps> = ({ articles }) => {
  return (
    <section className="p-4">
      <div className="border-b mb-2">
        <h2 className="text-lg font-semibold">Popular Articles</h2>
      </div>
      <div className="flex flex-col gap-4 py-2">
        {articles.map((article) => (
          <div key={article.id} className="flex items-start gap-3">
            {/* Image */}
            <div className="w-16 h-16 flex-shrink-0">
              <img
                src={article.image}
                alt="Article"
                className="w-full h-full object-cover rounded-md"
              />
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 line-clamp-2 flex-1">
              {article.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
