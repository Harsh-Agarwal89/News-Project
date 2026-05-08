// import React, { useEffect, useState } from 'react'
// import NewsItem from './NewsItem';

// const NewsBoard = ({category}) => {

//     const [articles,setArticles] = useState([]);

//     useEffect(()=>{
//         let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
//         fetch(url).then(response=> response.json()).then(data=> setArticles(data.articles));

//     },[category])

//   return (
//     <div>
//         <h2 className='text-center'> Latest <span className='badge bg-danger'>News</span></h2>
//         {articles.map((news,index)=>{
//             return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
//         })}
//     </div>
//   )
// }

// export default NewsBoard

import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'

const NewsBoard = ({ category }) => {

  const [articles, setArticles] = useState([])

  useEffect(() => {

    const fetchNews = async () => {
      try {

        const apiKey = import.meta.env.VITE_API_KEY

        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`

        const response = await fetch(url)
        const data = await response.json()

        console.log(data)

        if (data.articles) {
          setArticles(data.articles)
        }

      } catch (error) {
        console.log("Error fetching news:", error)
      }
    }

    fetchNews()

  }, [category])

  return (
    <div>
      <h2 className='text-center'>
        Latest <span className='badge bg-danger'>News</span>
      </h2>

      {articles.map((news, index) => (
        <NewsItem
          key={index}
          title={news.title}
          description={news.description}
          src={news.urlToImage}
          url={news.url}
        />
      ))}
    </div>
  )
}

export default NewsBoard