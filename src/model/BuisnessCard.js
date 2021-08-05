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
import GLOBE from '../asset/img/globe-logo.png'
// import PINS from '../asset/img/pinterest.png'
import DefaultImg from '../asset/img/OTLogo.png'
import PageBreakOne from '../asset/img/page_break_one.png'

// Stylesheet
import '../App.css'
import { BCardWrapper, BDetailsWrap } from '../style/Wrapper'
import {
  BusinessLogo,
  BusSocials,
  Excerpt,
  Hours,
  PageBreakAlt
} from '../style/Components'

// Models
import TitleCard from './TitleCard'

export default function BuisnessCard() {
  const { id } = useParams()
  const allData = useWPDataStore()
  const WPData = useWPDataStore(state => state.someData[id], shallow)
  const filteredWPData = useWPDataStore(state => state.filteredData[id], shallow)
  const updateDB = '<div>Please Update Database</div>'
  let currentData = WPData

  if (allData.isfiltered) {
    currentData = filteredWPData
  }

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
      <TitleCard
        title={currentData?.title.rendered
          ? currentData.title.rendered
          : updateDB}
        styles='aRed'
      />
      <div>
      </div>
      <BDetailsWrap>
        <div>
          <div dangerouslySetInnerHTML={{
            __html: currentData?.acf.address
              ? newLine(currentData.acf.address)
              : updateDB
          }}
          />
          <div dangerouslySetInnerHTML={{
            __html: currentData?.acf.phone_number
              ? currentData.acf.phone_number
              : updateDB
          }}
          />
          <Hours dangerouslySetInnerHTML={{
            __html: currentData?.acf.business_hours
              ? newLine(currentData.acf.business_hours)
              : updateDB
          }}
          />
        </div>
        <div>
          <BusinessLogo
            src={currentData?.acf?.images?.sizes?.large
              ? currentData?.acf.images?.sizes.large
              : DefaultImg}
            alt={currentData?.acf.images?.filename
              ? currentData?.acf.images.filename
              : 'File Doesnt Exist'}
          />
        </div>
      </BDetailsWrap>
      <Excerpt>
        <div dangerouslySetInnerHTML={{
          __html: currentData?.excerpt.rendered
            ? currentData.excerpt.rendered
            : updateDB
        }}
        />
      </Excerpt>
      <BusSocials>
        <div>
          {currentData?.acf.facebook ?
            <a href={currentData?.acf.facebook}
              target="_blank"
              rel='noreferrer' >
              <img src={FB} alt="" />
              <span>FACEBOOK</span>
            </a>
            : null
          }
        </div>
        <div>
          {currentData?.acf.anchorfm ?
            <a href={currentData?.acf.anchorfm}
              target="_blank"
              rel='noreferrer' >
              <img src={ANCHOR} alt="" />
              <span>ANCHOR.FM</span>
            </a>
            : null
          }
        </div>
        <div>
          {currentData?.acf.pinterest ?
            <a href={currentData?.acf.pinterest}
              target="_blank"
              rel='noreferrer' >
              <img src={GLOBE} alt="" />
              <span>PINTEREST</span>
            </a>
            : null
          }
        </div>
        <div>
          {currentData?.acf.instagram ?
            <a href={currentData?.acf.instagram}
              target="_blank"
              rel='noreferrer' >
              <img src={INSTA} alt="" />
              <span>INSTAGRAM</span>
            </a>
            : null
          }
        </div>
        <div>
          {currentData?.acf.twitter ?
            <a href={currentData?.acf.twitter}
              target="_blank"
              rel='noreferrer' >
              <img src={TWIT} alt="" />
              <span>TWITTER</span>
            </a>
            : null
          }
        </div>
        <div>
          {currentData?.acf.vimeo ?
            <a href={currentData?.acf.vimeo}
              target="_blank"
              rel='noreferrer' >
              <img src={GLOBE} alt="" />
              <span>Vimeo</span>
            </a>
            : null
          }
        </div>
        <div>
          {currentData?.acf.yelp ?
            <a href={currentData?.acf.yelp}
              target="_blank"
              rel='noreferrer' >
              <img src={GLOBE} alt="" />
              <span>Yelp</span>
            </a>
            : null
          }
        </div>
        <div>
          {currentData?.acf.linkedin ?
            <a href={currentData?.acf.linkedin}
              target="_blank"
              rel='noreferrer' >
              <img src={GLOBE} alt="" />
              <span>LinkedIn</span>
            </a>
            : null
          }
        </div>
        <div>
          {currentData?.acf.website ?
            <a href={currentData?.acf.website}
              target="_blank"
              rel='noreferrer' >
              <img src={GLOBE} alt="" />
              <span>WEBSITE</span>
            </a>
            : null
          }
        </div>
        <div>
          {currentData?.acf.youtube ?
            <a href={currentData?.acf.youtube}
              target="_blank"
              rel='noreferrer' >
              <img src={YT} alt="" />
              <span>YOUTUBE</span>
            </a>
            : null
          }
        </div>
      </BusSocials>
      {currentData?.acf.latitude
        ? <MapBox data={[{
          key: currentData?.title.rendered,
          lat: Number(currentData?.acf.latitude),
          lng: Number(currentData?.acf.longitude)
        }]} >
        </MapBox>
        : <h1>Loading...</h1>}
    </BCardWrapper >
  )
}