import React from 'react'
import { Link } from 'react-router-dom'
import TavernPatio from '../asset/img/tavern_patio.png'
import WaterTower from '../asset/img/water_tower.png'
import TwoPeoplePatio from '../asset/img/two_people_patio.png'
import { AboutBoardWrapper, AboutWrapper, AboutInvolvedWrapper, AboutDocWrapper } from '../style/Wrapper'
import { AboutDetailsWrapper, AboutPositionsWrapper } from '../style/Wrapper'
import { AboutImg, AboutIntro, AboutPositions, AboutSeatPositions, AltAboutSeatPositions, AboutTitle, AboutTxtBody, TintRed, AboutHeaderTitle, AboutInvolvedApply, AboutDocuments } from '../style/Components'

export default function About() {
  const infoLink = <Link to='/'>info@oldetownarvada.org</Link>
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
            <div className='aTan' />
          </div>
        </AboutTxtBody>
      </AboutDetailsWrapper>
      <TintRed>
        <div className="img">
          <img src={TwoPeoplePatio} alt="" />
        </div>
      </TintRed>
      <AboutBoardWrapper>
        <div className="board">
          <AboutImg>
            <div>
              <h2 style={{ backgroundColor: "#048A81", color: "white" }}>
                OUR BOARD
              </h2>
              <div className='aOrange' />
            </div>
          </AboutImg>
          <h4>The BID is governed by a ten member board comprised of business and/or property owners that serve a three year term.</h4>
          <AboutPositionsWrapper>
            <AboutSeatPositions>
              <AboutPositions>
                <p>Deborah <br /> Pearson</p>
                <span>President</span>
              </AboutPositions>
              <AboutPositions>
                <p>Scott <br /> Spears</p>
                <span>Vice President</span>
              </AboutPositions>
              <AboutPositions>
                <p>Lori <br /> Drinka</p>
                <span>Secretary</span>
              </AboutPositions>
              <AboutPositions>
                <p>Lisa <br /> Reich</p>
                <span>Tresurer</span>
              </AboutPositions>
            </AboutSeatPositions>
            <AltAboutSeatPositions >
              <AboutPositions>
                <p>Charlie <br /> Berger</p>
              </AboutPositions>
              <AboutPositions>
                <p>Brandon <br /> Capps</p>
              </AboutPositions>
              <AboutPositions>
                <p>Peter <br /> Kazura</p>
              </AboutPositions>
              <AboutPositions>
                <p>Casey <br /> Adler</p>
              </AboutPositions>
              <AboutPositions>
                <p>Debbie <br /> Hansen</p>
              </AboutPositions>
              <AboutPositions>
                <p>Jamie <br /> Hollier</p>
              </AboutPositions>
            </AltAboutSeatPositions>
          </AboutPositionsWrapper>
          <h4>The BID Board generally meets on the 4th Tuesday of each month. During the holidays, meetings may be changed to accommodate the calendar. Special meetings may be held throughout the year. All board and special meetings are open to the public. Meeting agendas with meeting locations are posted online at least 24 hours in advance.</h4>
        </div>
      </AboutBoardWrapper>
      <AboutInvolvedWrapper>
        <AboutHeaderTitle>
          <h2 >Want to be more involved with the <br /> Olde Town Arvada BID?</h2>
        </AboutHeaderTitle>
        <AboutInvolvedApply>
          <div className="title">
            <h3>Apply to be a member of the BID Board!</h3>
          </div>
          <div className="desc">
            <span>Those seeking to join the Board can fill out an application at any time. Applications for open Board positions will be reviewed annually at the March Board meeting, or on a as needed basis. To be considered, applications should be submitted by March 15th.</span>
          </div>
          <div className="links">
            <div className="eapp">
              <span>
                <Link to='/'>Complete the Electronic Application</Link>
              </span>
              <br />
              <span>
                <Link to='/'>Download the Application as a PDF</Link>
              </span>
            </div>
            <div className="download">
            </div>
            <div className="email">
              <p>-Email your completed form to &nbsp;{infoLink} </p>
            </div>
          </div>
        </AboutInvolvedApply>
        <AboutInvolvedApply>
          <h3>Join a Subcommittee!</h3>
          <div className="email">
            <span>The BID sub-committees are open to everyone. Subcommittees meet monthly to assist and advise in executing the goals of the annual operating plan. The current sub-committees include:
            </span>
            <ul>
              <li>Events Subcommittee</li>
              <li>Marketing Subcommittee</li>
              <li>Placemaking Subcommittee</li>
              <li>Safety Subcommittee</li>
            </ul>
            <p>
              If you are interested in joining a subcommittee, please send us an email:
            </p>
            <span>{infoLink}</span>
          </div>
        </AboutInvolvedApply>
        <AboutInvolvedApply>
          <h3>Volunteer for Olde Town Events!</h3>
          <div className="email">
            <p>
              If you are interested in joining a subcommittee, please send us an email:
            </p>
            <span>{infoLink}</span>
          </div>
        </AboutInvolvedApply>
      </AboutInvolvedWrapper>
      <AboutDocWrapper>
        <AboutDocuments>
          <div className="budget">
            <h3>Budget & Operating Plans:</h3>
            <Link to='/'>2021 Planning Documents</Link>
            <Link to='/'>2020 Planning Documents</Link>
            <Link to='/'>2019 Planning Documents</Link>
            <Link to='/'>2018 Planning Documents</Link>
          </div>
        </AboutDocuments>
        <AboutDocuments>
          <div className="board">
            <h3>Board Meeting Munutes & Agendas:</h3>
            <Link to='/'>2021 Board Meetings</Link>
            <Link to='/'>2020 Board Meetings</Link>
            <Link to='/'>2019 Board Meetings</Link>
            <Link to='/'>2018 Board Meetings</Link>
          </div>
        </AboutDocuments>
        <AboutDocuments>
          <div className="committee">
            <h3>Committee Meeting Munutes & Agendas:</h3>
            <Link to='/'>2021 Committee Meetings</Link>
            <Link to='/'>2020 Committee Meetings</Link>
            <Link to='/'>2019 Committee Meetings</Link>
            <Link to='/'>2018 Committee Meetings</Link>
          </div>
        </AboutDocuments>
      </AboutDocWrapper>
    </AboutWrapper>
  )
}
