import React from 'react'
import TavernPatio from '../asset/img/tavern_patio.png'
import WaterTower from '../asset/img/water_tower.png'
import TwoPeoplePatio from '../asset/img/two_people_patio.png'
import { AboutWrapper } from '../style/Wrapper'
import { AboutDetailsWrapper } from '../style/Wrapper'
import { AboutImg, AboutIntro, AboutTitle, AboutTxtBody } from '../style/Components'

export default function About() {
  return (
    <AboutWrapper>
      <AboutImg>
        <img src={TavernPatio} alt="" />
        <div>
          <h2>ABOUT US</h2>
          <div className='aOrange' />
        </div>
      </AboutImg>
      <AboutIntro>
        <p>Olde Town is the city’s downtown district, with a turn-of-the-century Main Street Americana ambiance. It is the heart and soul of Arvada and has become a destination for locals and visitors, alike. With a diverse array of shops, boutiques, galleries, events, restaurants, breweries and a winery, Olde Town has something for everyone. </p>
      </AboutIntro>
      <AboutDetailsWrapper>
        <AboutTitle>
          <h2>Olde Town Arvada Business Improvement District</h2>
        </AboutTitle>
        <AboutTxtBody>
          <div>
            <img src={WaterTower} alt="" />
          </div>
          <div className="txtbdy">
            <p>In 2014, the business and property owners of Olde Town in conjunction with The City of Arvada, created the Olde Town Arvada Business Improvement District (BID) with the mission to preserve, promote and enhance the vibrancy of Olde Town. The BID strives to create and maintain an identifiable and always active business district that is inclusive to all, allowing our diverse businesses to prosper and setting the stage for a truly authentic experience.
            <br />
              <br />
            The BID's operating plan focuses on advocacy, marketing and events, placemaking, mobility, physical improvements and safety.
            </p>
          </div>
        </AboutTxtBody>
        <div className="img">
          <img src={TwoPeoplePatio} alt="" />
        </div>
      </AboutDetailsWrapper>
      <div className="board">
        <div className="title">
          <h2>OUR BOARD</h2>
        </div>
        <div className="intro">
          <p>The BID is governed by a ten member board comprised of business and/or property owners that serve a three year term.</p>
        </div>
        <div className="positions">
          <h3>Deborah Pearson</h3>
          <span>President</span>
          <h3>Scott Spears</h3>
          <span>Vice President</span>
          <h3>Lori Drinka</h3>
          <span>Secretary</span>
          <h3>Lisa Reich</h3>
          <span>Tresurer</span>
          <h3>Charlie Berger</h3>
          <h3>Brandon Capps</h3>
          <h3>Peter Kazura</h3>
          <h3>Casey Adler</h3>
          <h3>Debbie Hansen</h3>
          <h3>Jamie Hollier</h3>
        </div>
        <div className="outro">
          <p>The BID Board generally meets on the 4th Tuesday of each month. During the holidays, meetings may be changed to accommodate the calendar. Special meetings may be held throughout the year. All board and special meetings are open to the public. Meeting agendas with meeting locations are posted in kiosk in the Olde Town Square, Olde Wadsworth & 57th Street or in the resources below.</p>
        </div>
      </div>
      <div className="involved">
        <h2>Want to be more involved with the Olde Town Arvada BID?</h2>
        <div className="apply">
          <div className="title">
            <h3>Apply to be a member of the BID Board!</h3>
          </div>
          <div className="desc">
            <p>The BID Board is currently accepting application for condideration. Please submit your application by March 17th, 2021 to be considered for andy 2021 Board vacancies</p>
          </div>
          <div className="links">
            <div className="eapp">
              <p>Complete the Electronic Application</p>
            </div>
            <div className="download">
              <p>Download the Application as a PDF</p>
            </div>
            <div className="email">
              <p>-Email your completed form to info@oldetownarvada.org</p>
            </div>
          </div>
        </div>
        <div className="subcom">
          <h2>Join a Subcommittee!</h2>
          <div className="email">
            <span>Send us an email at info@oldetownarvada.org to let us know you are interested.</span>
          </div>
        </div>
        <div className="volunteer">
          <h2>Volunteer for Olde Town Events!</h2>
          <div className="email">
            <span>Send us an email at info@oldetownarvada.org to let us know you are interested.</span>
          </div>
        </div>
      </div>
      <div className="docs">
        <div className="budget">
          <h3>Budget & Operating Plans:</h3>
          <span>2021 Planning Documents</span>
          <span>2020 Planning Documents</span>
          <span>2019 Planning Documents</span>
          <span>2018 Planning Documents</span>
        </div>
        <div className="board">
          <h3>Board Meeting Munutes & Agendas:</h3>
          <span>2021 Board Meetings</span>
          <span>2020 Board Meetings</span>
          <span>2019 Board Meetings</span>
          <span>2018 Board Meetings</span>
        </div>
        <div className="committee">
          <h3>Committee Meeting Munutes & Agendas:</h3>
          <span>2021 Committee Meetings</span>
          <span>2020 Committee Meetings</span>
          <span>2019 Committee Meetings</span>
          <span>2018 Committee Meetings</span>
        </div>
      </div>
    </AboutWrapper>
  )
}
