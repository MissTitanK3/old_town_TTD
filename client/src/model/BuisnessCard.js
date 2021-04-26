import React from 'react'
import { useParams } from 'react-router-dom'

// Data
import MapBox from '../api/MapBox'
import { useWPDataStore } from '../api/store'
import shallow from 'zustand/shallow'

// Assets
import FB from '../asset/img/facebook.png'
import ANCHOR from '../asset/img/anchorfm.png'
import INSTA from '../asset/img/insta.png'
import TWIT from '../asset/img/twitter.png'
import YT from '../asset/img/youtube.png'
// import PINS from '../asset/img/pinterest.png'
import DefaultImg from '../asset/img/OTLogo.png'
import PageBreakOne from '../asset/img/page_break_one.png'

// Stylesheet
import '../App.css'
import { BCardWrapper, BDetailsWrap } from '../style/Wrapper'
import { BusinessLogo, BusSocials, Excerpt, Hours, PageBreakAlt } from '../style/Components'

// Models
import TitleCard from './TitleCard'

export default function BuisnessCard() {
  const { id } = useParams()
  const WPData = useWPDataStore(state => state.someData[id], shallow)
  const updateDB = '<div>Please Update Database</div>'

  function newLine(props) {
    return props.split('\n').map(str => `<span><br/>${str}</span>`).join('')
  }

  return (
    <BCardWrapper >
      <div>
        <PageBreakAlt>
          <img src={PageBreakOne} alt="Page Break" />
        </PageBreakAlt>
      </div>
      <TitleCard title={WPData?.title.rendered ? WPData.title.rendered : updateDB} styles='aRed' />
      <div>
      </div>
      <BDetailsWrap>
        <div>
          <div dangerouslySetInnerHTML={{ __html: WPData?.acf.address ? newLine(WPData.acf.address) : updateDB }} />
          <div dangerouslySetInnerHTML={{ __html: WPData?.acf.phone_number ? WPData.acf.phone_number : updateDB }} />
          <Hours dangerouslySetInnerHTML={{ __html: WPData?.acf.business_hours ? newLine(WPData.acf.business_hours) : updateDB }} />
        </div>
        <div>
          <BusinessLogo src={WPData?.acf?.images?.sizes?.large ? WPData?.acf.images?.sizes.large : DefaultImg} alt={WPData?.acf.images?.filename ? WPData?.acf.images.filename : 'File Doesnt Exist'} />
        </div>
      </BDetailsWrap>
      <Excerpt>
        <div dangerouslySetInnerHTML={{ __html: WPData?.excerpt.rendered ? WPData.excerpt.rendered : updateDB }} />
      </Excerpt>
      <BusSocials>
        <div>
          {WPData?.acf.facebook ?
            <a href={WPData?.acf.facebook} target="_blank" rel='noreferrer' >
              <img src={FB} alt="" />
              <span>FACEBOOK</span>
            </a>
            : null
          }
        </div>
        <div>
          {WPData?.acf.anchorfm ?
            <a href={WPData?.acf.anchorfm} target="_blank" rel='noreferrer' >
              <img src={ANCHOR} alt="" />
              <span>ANCHOR.FM</span>
            </a>
            : null
          }
        </div>
        <div>
          {WPData?.acf.pinterest ?
            <a href={WPData?.acf.pinterest} target="_blank" rel='noreferrer' >
              <img src={FB} alt="" />
              <span>PINTEREST</span>
            </a>
            : null
          }
        </div>
        <div>
          {WPData?.acf.instagram ?
            <a href={WPData?.acf.instagram} target="_blank" rel='noreferrer' >
              <img src={INSTA} alt="" />
              <span>INSTAGRAM</span>
            </a>
            : null
          }
        </div>
        <div>
          {WPData?.acf.twitter ?
            <a href={WPData?.acf.twitter} target="_blank" rel='noreferrer' >
              <img src={TWIT} alt="" />
              <span>TWITTER</span>
            </a>
            : null
          }
        </div>
        <div>
          {WPData?.acf.website ?
            <a href={WPData?.acf.website} target="_blank" rel='noreferrer' >
              <img src={FB} alt="" />
              <span>WEBSITE</span>
            </a>
            : null
          }
        </div>
        <div>
          {WPData?.acf.youtube ?
            <a href={WPData?.acf.youtube} target="_blank" rel='noreferrer' >
              <img src={YT} alt="" />
              <span>YOUTUBE</span>
            </a>
            : null
          }
        </div>
      </BusSocials>
      {WPData?.acf.latitude ?
        <MapBox data={[{ key: WPData?.title.rendered, lat: Number(WPData?.acf.latitude), lng: Number(WPData?.acf.longitude) }]} >
        </MapBox>
        : <h1>Loading...</h1>}
    </BCardWrapper >
  )
}