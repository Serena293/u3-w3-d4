import { useState, useEffect } from "react";
import Article from "../interfaces/Article";
import { useParams } from "react-router-dom";

const AllArticles = () => {
  const ENDPOINT = "https://api.spaceflightnewsapi.net/v3/articles";
  const [article, setArticle] = useState<Article>();
  const { id } = useParams();

  const fetchArticles = async () => {
    try {
      const response = await fetch(`${ENDPOINT}/${id}`);
      if (response.ok) {
        const data = await response.json();
        setArticle(data);
      } else {
        alert("response NOT ok");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="article-preview">
      <h1>{article?.title}</h1>
      <p>{article?.publishedAt}</p>
      <img src={article?.imageUrl} alt="Article Img" />
      <p>{article?.summary}</p>
    </div>
  );
};

export default AllArticles;
