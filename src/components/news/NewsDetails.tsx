import { FC, useEffect } from "react";
import News from "../../models/news";
import {  useParams, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { getNews } from "../../store/slices/news/thunks";

interface NewsProps {
  news: News;
}

export const NewsDetails: FC<NewsProps> = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state);

  const { id } = useParams();

  const navigate = useNavigate();


  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);
    
    
  const newsId = data?.find((data) => data.author === id && data.author);

  return (
    <>
      
      <div className="column mt-4 ">
        <div className="column mt-3">
          <img
            src={newsId?.urlToImage}
            alt={newsId?.author}
            className="img-thumbnail "
          ></img>
        </div>
        <div>
          <h3 className = "mt-4">{newsId?.title}</h3>
          <ul className="list-group list-group-flush ">
            <li>
              <b>Content: </b>
              {newsId?.content}
            </li>
            <li>
              <b>Author: </b>
              {newsId?.author}
            </li>
          </ul>

          <button className="btn btn-outline-info mt-3" onClick={() => navigate(-1)}>
            Return
          </button>
        </div>
      </div>
    </>
  );
};
