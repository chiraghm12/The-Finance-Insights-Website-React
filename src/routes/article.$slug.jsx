import { createFileRoute } from "@tanstack/react-router";
import { ArticleDetails } from "@/pages/ArticleDetails";
import { getArticle } from "@/data/articles";

import { Hammer } from "@/pages/patterns/Hammer";
import { Doji } from "@/pages/patterns/Doji";
import { MorningStar } from "@/pages/patterns/MorningStar";
import { EveningStar } from "@/pages/patterns/EveningStar";
import { BullishEngulfing } from "@/pages/patterns/BullishEngulfing";
import { BearishEngulfing } from "@/pages/patterns/BearishEngulfing";
import { ShootingStar } from "@/pages/patterns/ShootingStar";
import { HangingMan } from "@/pages/patterns/HangingMan";
import { InvertedHammer } from "@/pages/patterns/InvertedHammer";
import { ThreeWhiteSoldiers } from "@/pages/patterns/ThreeWhiteSoldiers";
import { ThreeBlackCrows } from "@/pages/patterns/ThreeBlackCrows";
import { PiercingLine } from "@/pages/patterns/PiercingLine";
import { DarkCloudCover } from "@/pages/patterns/DarkCloudCover";
import { SpinningTop } from "@/pages/patterns/SpinningTop";
import { Marubozu } from "@/pages/patterns/Marubozu";

const patternComponents = {
  "hammer": Hammer,
  "doji": Doji,
  "morning-star": MorningStar,
  "evening-star": EveningStar,
  "bullish-engulfing": BullishEngulfing,
  "bearish-engulfing": BearishEngulfing,
  "shooting-star": ShootingStar,
  "hanging-man": HangingMan,
  "inverted-hammer": InvertedHammer,
  "three-white-soldiers": ThreeWhiteSoldiers,
  "three-black-crows": ThreeBlackCrows,
  "piercing-line": PiercingLine,
  "dark-cloud-cover": DarkCloudCover,
  "spinning-top": SpinningTop,
  "marubozu": Marubozu
};

export const Route = createFileRoute("/article/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    return { article };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.article;
    const title = a ? `${a.title} — The Finance Insights` : "Article — The Finance Insights";
    const description = a?.excerpt ?? "In-depth finance lesson on The Finance Insights.";
    return {
      meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" }]
    };
  },
  component: ArticleRoute
});

function ArticleRoute() {
  const { slug } = Route.useParams();
  const article = getArticle(slug);
  
  if (article?.categorySlug === "candlestick-patterns" && patternComponents[slug]) {
    const Component = patternComponents[slug];
    return <Component />;
  }

  return <ArticleDetails slug={slug} />;
}