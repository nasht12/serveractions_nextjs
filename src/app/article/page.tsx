import { addArticleToDatabase } from "../../../actions/serveractions";
import { Article } from "../../../typings";

const Articles = async () => {
  const res = await fetch("https://64adcecdb470006a5ec66ca9.mockapi.io/articles", {
    cache: "no-store",
    next: {
        tags: ["articles"]
    }
  });

  const articles: Article[] = await res.json();

  return (
    <div className="p-5 items-center flex flex-col">
      <h1 className="font-bold text-xl text-gray-700">
        Article creation form!
      </h1>
      <form action={addArticleToDatabase}>
        <input
          name="title"
          placeholder="title"
          className="flex flex-col gap-5 max-w-xl p-5"
        />
        <input
          name="content"
          placeholder="content"
          className="flex flex-col gap-5 max-w-xl p-5"
        />
        <input
          name="imageurl"
          placeholder="imageurl"
          className="flex flex-col gap-5 max-w-xl p-5"
        />
        <input
          name="tags"
          placeholder="tags"
          className="flex flex-col gap-5 max-w-xl p-5"
        />
        <button className="border bg-blue-400 text-white rounded-md p-4 gap-2">
          {" "}
          Publish Article
        </button>
      </form>
      <div>
        {articles.map((article) => (
          <div>{article.title}</div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
