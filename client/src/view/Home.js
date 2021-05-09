import React from 'react';
// import ReactPlayer from 'react-player/lazy';
import AbstractCard from '../model/AbstractCard';
import { CardBar, PageBreak, StandDesc, VideoComp } from '../style/Components';
import { AbsCardWrap, LongWrapper, WhatsNewWrapper } from '../style/Wrapper';
import chalkboard from '../asset/img/chalkboard.png';
import PageBreakOne from '../asset/img/page_break_one.png';
import OutsideArea from '../asset/img/outside_sitting.png';
import LongCard from '../model/LongCard';
// import { Link } from 'react-router-dom';
import OldeCarousel from '../controller/Carousel';

export default function Home() {
	return (
		<div>
			<VideoComp>
				{/* <ReactPlayer
					width='100vw'
					height='95vh'
					url='https://www.youtube.com/watch?v=iy8D7XaxmIM'
					config={{
						controls: false,
					}}
				/> */}
				<img src="https://oldetownarvada.org/wp-content/uploads/2021/01/Watertower-Heart.jpg" alt="" />
			</VideoComp>
			<StandDesc>
				<h2>Olde Town Arvada, Colorado</h2>
				<p>
					Located only 20 minutes from downtown Denver, Olde Town is Arvada's
					historic downtown! With a diverse array of shops, boutiques,
					galleries, events, restaurants, breweries and a winery, Olde Town has
					something for everyone. Easily accessible from I70 or the RTD G Line,
					it is the heart and soul of the City and has become a destination for
					locals and visitors alike. And now, with new pedestrian-friendly
					street closures, additional outdoor seating and a plethora of public
					art, there are more reasons than ever to come spend a day (or two) in
					Olde Town!
				</p>
			</StandDesc>
			<div style={{height:'800px'}} >
				<CardBar />
				<AbsCardWrap>
					<AbstractCard
						img={chalkboard}
						alt='Chalboard Storefront'
						bColor='aqua'
						aColor='aBlue'
						desc='SEE THE LATEST NEWS IN OLDE TOWN'
						btnWds='NEWSFEED'
						path='/news'
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
				<img src={PageBreakOne} alt='' />
			</PageBreak>
			<WhatsNewWrapper>
				<div className='dLeft'>
					<h3>
						What's <br /> New?
					</h3>
				</div>
				{/* <Link to='/'>
					<div className='dRight'>
						<p>COVID-19 UPDATES</p>
					</div>
				</Link> */}
			</WhatsNewWrapper>
				<OldeCarousel/>
			<LongWrapper>
				<LongCard
					img={OutsideArea}
					alt='Outside sitting area'
					labeled='SHOP'
					details="Olde Town offeres one of the Colorado's most unique shopping experiences!"
					accent='green'
					mid='midOrange'
				/>
				<LongCard
					img={OutsideArea}
					alt='Outside sitting area'
					labeled='DINE'
					details="Olde Town is home to award winning restaurants, breweries, cafes and more!"
					accent='red'
					mid='midBlue'
				/>
				<LongCard
					img={OutsideArea}
					alt='Outside sitting area'
					labeled='MORE'
					details="From massages to fitness to your favorite salon, see everything Olde Town has to offer"
					accent='blue'
					mid='midAqua'
				/>
			</LongWrapper>
			'{/* TODO add instafeed */}
		</div>
	);
}
