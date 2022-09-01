import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { Loader } from "../loader/loader";
import { NewsCard } from "./NewsCard";
import { getNews } from '../../store/slices/news/thunks';
import { useSearchParams } from "react-router-dom";





export const NewsScreen: FC = () => {
  const dispatch = useAppDispatch();
  const { isLoading, data } = useAppSelector((state) => state);

  const [searchParams, setSearchParams] = useSearchParams();
 
  const filter = searchParams.get("q") || '';
  
  useEffect(() => {
   
    dispatch(getNews());
  }, [dispatch]);

//@ts-ignore
 const hanldeFilter = (e) => {
    setSearchParams({ q: e.target.value });
  };



  return (
   
   
    

    <div className="container py-5">
      <div className="row">
        
        <form>
          <input
            type=" search"
            placeholder="Find your news"
            className="form-control mb-5 size= 30"
            name="searchText"
            autoComplete="off"
            //@ts-ignore
            value={filter}
            onChange={hanldeFilter}
          />
        </form>

            {isLoading ? (
          
          <Loader />
        ) : (
            data &&
          //@ts-ignore
          data.filter((news) =>
          news.content.toLowerCase().includes(filter.toLowerCase())
        ).map((news,i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <NewsCard news={news} />
            </div>
          ))
        )}
       
      </div>
    </div>
 
    
  );
};
