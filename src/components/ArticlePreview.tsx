import Article from "../interfaces/Article"
import { capitalize } from "../helpers/helpers";
import { useNavigate } from "react-router-dom";

interface ArticleInterface {
    article: Article;
}

const ArticlePreview = (props: ArticleInterface) => {
    const { article } = props;
    const navigate = useNavigate();
    return (
        <div className="article-preview" onClick={
            () => { navigate(`/detail/${article.id}`); }
        }>
            <h1>{capitalize(article.title)}</h1>
            <p>{article.publishedAt}</p>
            <img src={article.imageUrl} alt="Article Img" />
        </div>
    )
}

export default ArticlePreview;