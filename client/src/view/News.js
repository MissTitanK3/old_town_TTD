import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import { useWPPostStore } from '../api/store';

export default function News() {
  const WPPost = useWPPostStore(state => state.someData)
  const addWPPost = useWPPostStore(state => state.addData)
  const updateDB = '<div>Please Update Database</div>'
  console.log(WPPost)


  function useBusiness() {
    return useQuery("posts", async () => {
      const { data } = await axios.get(
        "https://oldetownarvada.org/wp-json/wp/v2/newsfeed"
      );
      addWPPost(data)
    });
  }
  // TODO this doesnt work in a useEffect, debug
  useBusiness()

  return (
    <div>
      {WPPost.map((post) => (
        <>
          <h2>{post?.title.rendered}</h2>
          <p>{post?.acf?.description ? post?.acf?.description : updateDB}</p>
        </>
      ))}
    </div>
  )
}
