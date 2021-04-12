import React from 'react'
import ReactPlayer from 'react-player/lazy'
import AbstractCard from '../model/AbstractCard'
import { CardBar, PageBreak, StandDesc, VideoComp } from '../style/Components'
import { AbsCardWrap } from '../style/Wrapper'
import chalkboard from '../asset/img/chalkboard.png'
import PageBreakOne from '../asset/img/page_break_one.png'

export default function Home() {
  return (
    <div>
      {/* TODO Issue with side scroll */}
      <VideoComp>
        {/* TODO update this for selected video */}
        <ReactPlayer width='100vw' height='95vh' url='https://www.youtube.com/watch?v=iy8D7XaxmIM' />
      </VideoComp>
      <StandDesc>
        <h2>Olde Town Arvada, Colorado</h2>
        <p>Olde Town is the city's downtown district, with a turn-of-the-century Main Street Americana ambiance. It is the heart and soul of Arvada and has become a destination for the locals and visitors, alike. With a diverse array of shops, boutiques, galleries, events, restaurants, breweries and a winery, Olde Town has something for everyone.</p>
      </StandDesc>
      <div>
        <CardBar />
        <AbsCardWrap>
          {/* TODO Buggy between 884-1264vw */}
          <AbstractCard
            img={chalkboard}
            alt='Chalboard Storefront'
            bColor='aqua'
            aColor='aBlue'
            desc='SUPPORT LOCAL BUSINESS WITH AND OLDE TOWN ARVADA GIFT CARD'
            btnWds='VISIT STORE'
            path='/shop'
          />
          <AbstractCard
            img={chalkboard}
            alt='Chalboard Storefront'
            bColor='moa'
            aColor='aRed'
            desc='FIND SOMETHING NEW IN OLDE TOWN'
            btnWds='DIRECTORY'
            path='/directory'
          />
          <AbstractCard
            img={chalkboard}
            alt='Chalboard Storefront'
            bColor='lime'
            aColor='aGreen'
            desc='BROWSE UPCOMING EVENTS IN OLDE TOWN'
            btnWds='EVENTS'
            path='/events'
          />
        </AbsCardWrap>
      </div>
      <PageBreak>
        <img src={PageBreakOne} alt="" />
      </PageBreak>
      <div>
        whats new
      </div>
      <div>
        cards
      </div>
      <div>
        latest
      </div>
    </div>
  )
}
