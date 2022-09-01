import { FC } from "react";
import  News  from "../../models/news";
import '../../index.css';
import {  Link} from "react-router-dom";

export interface NewsProps {
  news: News  ;
}

export const NewsCard: FC<NewsProps> = (props) => {
  const {
    news: { title, author, content, urlToImage }
  } = props;
  // const navigate = useNavigate();

  return (
  
    <div className="card">
      <div className="card-header">{title}</div>
      <div className="card-body">
        <h5 className="card-title">{content}</h5>
        <div className="col-4">
        </div>
        <img
          src={urlToImage}
          alt={author}
          className="img-thumbnail "></img>
          
        <div className="btn-card btn btn-primary mt-3">
          <Link to={`/details/${author} `} className= "btn btn-primary ">
          Más...
          </Link>
        
       
        </div>
      </div>
    </div>
  )
}
