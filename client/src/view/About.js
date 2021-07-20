import React from 'react'
import { Link } from 'react-router-dom'
import TavernPatio from '../asset/img/tavern_patio.png'
import WaterTower from '../asset/img/water_tower.png'
import TwoPeoplePatio from '../asset/img/two_people_patio.png'
import { AboutBoardWrapper, AboutWrapper, AboutInvolvedWrapper, AboutDocWrapper } from '../style/Wrapper'
import { AboutDetailsWrapper, AboutPositionsWrapper } from '../style/Wrapper'
import { AboutImg, AboutIntro, AboutPositions, AboutSeatPositions, AltAboutSeatPositions, AboutTitle, AboutTxtBody, TintRed, AboutHeaderTitle, AboutInvolvedApply, AboutDocuments } from '../style/Components'

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
            <div className='aTan' />
          </div>
        </AboutTxtBody>
      </AboutDetailsWrapper>
      {/* <TintRed>
        <div className="img">
          <img src={TwoPeoplePatio} alt="" />
        </div>
      </TintRed> */}
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
                <img src="https://oldetownarvada.org/wp-content/uploads/2021/03/Deb-Pearson.jpg" alt="" />
                <div>
                  <p>Deborah <br /> Pearson</p>
                  <span>President</span>
                </div>
              </AboutPositions>
              <AboutPositions>
                <img src="https://oldetownarvada.org/wp-content/uploads/2021/03/scott_spears_olde_town_arvada_cover-scaled.jpg" alt="" />
                {/* <img src="https://oldetownarvada.org/wp-content/uploads/2020/11/Box-Color.png" alt="" /> */}
                <div>
                  <p>Scott <br /> Spears</p>
                  <span>Vice President</span>
                </div>
              </AboutPositions>
              <AboutPositions>
                <img src="https://oldetownarvada.org/wp-content/uploads/2020/11/Box-Color.png" alt="" />
                <div>
                  <p>Lori <br /> Drinka</p>
                  <span>Secretary</span>
                </div>
              </AboutPositions>
              <AboutPositions>
                <img src="https://oldetownarvada.org/wp-content/uploads/2021/03/Lisa.jpg" alt="" />
                <div>
                  <p>Lisa <br /> Reich</p>
                  <span>Treasurer</span>
                </div>
              </AboutPositions>
            </AboutSeatPositions>
            <AltAboutSeatPositions >
              <AboutPositions>
                <img src="https://oldetownarvada.org/wp-content/uploads/2021/03/Casey.jpg" alt="" />
                <p>Casey <br /> Adler</p>
              </AboutPositions>
              <AboutPositions>
                <img src="https://oldetownarvada.org/wp-content/uploads/2021/03/Jamie.jpg" alt="" />
                <p>Jamie <br /> Hollier</p>
              </AboutPositions>
              <AboutPositions>
                <img src="https://oldetownarvada.org/wp-content/uploads/2021/03/Pete.jpg" alt="" />
                <p>Peter <br /> Kazura</p>
              </AboutPositions>
              <AboutPositions>
                <img src="https://oldetownarvada.org/wp-content/uploads/2020/11/Box-Color.png" alt="" />
                <p>Charlie <br /> Berger</p>
              </AboutPositions>
              <AboutPositions>
                <img src="https://oldetownarvada.org/wp-content/uploads/2020/11/Box-Color.png" alt="" />
                <p>Brandon <br /> Capps</p>
              </AboutPositions>
              <AboutPositions>
                <img src="https://oldetownarvada.org/wp-content/uploads/2020/11/Box-Color.png" alt="" />
                <p>Debbie <br /> Hansen</p>
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
                <Link onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdl-k-uD1Q1xpwWrguZi5XrqUxP1ytaNwuVWJ053lJb_0FnAw/viewform', '_blank')} to='#'>Complete the Electronic Application</Link>
              </span>
              <br />
              <span>
                <Link onClick={() => window.open('https://oldetownarvada.org/wp-content/uploads/2021/02/BID-Board-Leadership-Info-and-Application.docx.pdf', '_blank')} to='#'>Download the Application as a PDF</Link>
              </span>
            </div>
            <div className="email">
              <p>-Email your completed form to:</p>
              <a href='mailto:info@oldetownarvada.org' target='_blank' rel='noreferrer'>info@oldetownarvada.org</a>
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
            <a href='mailto:info@oldetownarvada.org' target='_blank' rel='noreferrer'>info@oldetownarvada.org</a>
          </div>
        </AboutInvolvedApply>
        <AboutInvolvedApply>
          <h3>Volunteer for Olde Town Events!</h3>
          <div className="email">
            <p>
              If you are interested in joining a subcommittee, please send us an email:
            </p>
            <a href='mailto:info@oldetownarvada.org' target='_blank' rel='noreferrer'>info@oldetownarvada.org</a>
          </div>
        </AboutInvolvedApply>
      </AboutInvolvedWrapper>
      <AboutDocWrapper>
        <AboutDocuments>
          <div className="budget">
            <h3>Budget & Operating Plans:</h3>
            {/* <Link onClick={() => window.open('https://oldetownarvada.org/wp-content/uploads/2021/02/BID-Board-Leadership-Info-and-Application.docx.pdf', '_blank')} to='#'>Download the Application as a PDF</Link> */}
            <details>
              <summary>2021</summary>
              <Link onClick={() => window.open('https://oldetownarvada.org/wp-content/uploads/2020/10/2021-Operating-Plan.pdf', '_blank')} to='#'>2021 Operating Plan</Link>
              <Link onClick={() => window.open('https://oldetownarvada.org/wp-content/uploads/2020/12/2021-Budget-Final.pdf', '_blank')} to='#'>2021 Budget</Link>
              <details>
                <summary>one level deep</summary>
              </details>
            </details>
            <details>
              <summary>2020</summary>
              <Link onClick={() => window.open('https://oldetownarvada.org/wp-content/uploads/2020/02/2020-Operating-Plan.pdf', '_blank')} to='#'>2020 Operating Plan</Link>
              <Link onClick={() => window.open('https://oldetownarvada.org/wp-content/uploads/2020/02/2020-Budget.pdf', '_blank')} to='#'>2020 Budget</Link>
            </details>
            <details>
              <summary>2019</summary>
              <Link onClick={() => window.open('https://oldetownarvada.org/wp-content/uploads/2018/10/2019-Operating-Plan-Olde-Town-Arvada-BID.pdf', '_blank')} to='#'>2019 Operating Plan</Link>
              <Link onClick={() => window.open('https://oldetownarvada.org/wp-content/uploads/2019/01/2019-Budget-Final.pdf', '_blank')} to='#'>2019 Budget</Link>
            </details>
            <details>
              <summary>2018</summary>
              <Link onClick={() => window.open('https://oldetownarvada.org/wp-content/uploads/2016/09/Olde-Town-BID-Operating-Plan-2018.pdf', '_blank')} to='#'>2018 Operating Plan</Link>
              <Link onClick={() => window.open('https://oldetownarvada.org/wp-content/uploads/2016/09/2018-website-Budget.pdf', '_blank')} to='#'>2018 Budget</Link>
            </details>
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
