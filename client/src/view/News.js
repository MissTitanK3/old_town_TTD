import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import { useWPPostStore } from '../api/store';
import { PageBreakAlt } from '../style/Components';
import PageBreakOne from '../asset/img/page_break_one.png'
import EctTitleCard from '../model/EctTitleCard';
import { NewsfeedWrapper } from '../style/Wrapper';

export default function News() {
  const WPPost = useWPPostStore(state => state.someData)
  const addWPPost = useWPPostStore(state => state.addData)
  const updateDB = '<div>Please Update Database</div>'


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
      <PageBreakAlt>
        {/* TODO Adjust the size of the pagebreaks */}
        {/* TODO make asset pack for pagebreaks */}
        <img src={PageBreakOne} alt="Page Break" />
      </PageBreakAlt>
      <EctTitleCard name='Newsfeed' styles='aRed' bStyles='bTeal' />
      <>
        {WPPost.map((post, index) => (
          <NewsfeedWrapper key={index}>
            <h2>{post?.title.rendered}</h2>
            <p>{post?.acf?.description ? post?.acf?.description : updateDB}</p>
            <br />
            <br />
            <br />
          </NewsfeedWrapper>
        ))}
      </>
    </div>
  )
}
