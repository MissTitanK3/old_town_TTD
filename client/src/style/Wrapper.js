import styled from 'styled-components'

export const LogoWrap = styled.div`
display: flex;
align-items: center;
`

export const TopNavWrap = styled.div`
display: none;
@media only screen and (min-width: 884px) {
display: flex;
justify-content: space-between;
margin: 0 25px;
max-width: 1200px;
height: 265px;
margin: auto;
img {
  height: 150px;
  }
}
`

export const MobileWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding-bottom: 5px;
border-bottom: 1px solid black;
img {
  height: 100px;
  }
@media only screen and (min-width: 884px) {
  display: none;
}
`

export const DrawerWrap = styled.div`
background-color: #048A81;
.exit {
  display: flex;
  justify-content: left;
  padding: 10px;
}
.NoBack {
  /* TODO When changing background, update this */
  background-color: white;
}
}
div {
  display: flex;
  flex-direction: center;
  align-items: center;
}
span {
  text-align: center;
  font-size: 2em;
  color: #ffffff;
}
}
`

export const FormWrap = styled.div`
margin: auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
h2 {
  font-size: 30px;
  color: #E97924;
}
div {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  margin-bottom: 35px;
}
@media only screen and (min-width: 884px) {
width: 80vw;
padding: 10px 0;
h2 {
  font-size: 100px;
  margin: 120px 0 0 0;
}
p {
  font-size: 45px;
}
}
`

export const DetailsWrap = styled.div`
background-color: #333333;
display: flex;
flex-direction: column;
text-align: center;
.LinkAlt, h2 {
  color: white;
}
h2 {
  font-size: 45px;
}
}
ul {
  list-style: none;
  li {
    padding: 10px;
    a {
      text-decoration: none;
      color: #E7C57F;
    }
  }
}
@media only screen and (min-width: 884px) {
justify-content: space-evenly;
align-items: flex-end;
flex-direction: row;
height: 335px;
font-size: 25px;
padding-bottom: 35px;
text-align: left;
h2 {
  margin-left: 45px;
}
}
`

export const SocialWrap = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
flex-wrap: wrap;
align-items: center;
img {
  width: 45px;
  height: 45px;
  padding:0 15px;
}
a {
  display: flex;
  text-decoration: none;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  color: #333333;
  /* width: 90vw; */
  margin: 15px;
  :hover {
    color: #E97924;
  }
}
span {
  font-size: 16px;
  text-align: center;
}
@media only screen and (min-width: 884px) {
width: 100vw;
margin: 15px 0;
img {
  padding:0 15px;
}
div {
  display: flex;
  a {
    width: 200px;
  }
}
span {
  font-size: 23px;
}
}
`

export const CWrap = styled.div`
background-color: #048A81;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
`
export const AbsTitleWrap = styled.div`
background-color: #378CAB;
font-size: 1.5rem;
font-weight: 900;
height: 75px;
width: 75%;
display: flex;
align-items: center;
padding-left: 50px;
position: relative;
z-index:0;
margin: 35px 0;
span {
  width: 100%;
}
.aRed {
  background-color: #313A64;
  height: 100%;
  width: 60%;
  margin: auto;
  clip-path: polygon(95% 25%, 100% 25%, 100% 100%, 20% 100%, 20% 83%, 95% 83%);
  position: absolute;
  top: 5px;
  left: 107px;
  z-index: -20;
}
@media only screen and (min-width: 884px) {
background-color: #378CAB;
font-size: 1.9rem;
font-weight: 900;
height: 75px;
width: 450px;
display: flex;
align-items: center;
padding-left: 50px;
position: relative;
z-index:0;
margin: 35px 0;
span {
  width: 100%;
}
.aRed {
  background-color: #313A64;
  height: 100%;
  width: 60%;
  margin: auto;
  clip-path: polygon(95% 25%, 100% 25%, 100% 100%, 20% 100%, 20% 83%, 95% 83%);
  position: absolute;
  top: 5px;
  left: 205px;
  z-index: -20;
}
}
`

export const AltTitleWrap = styled.div`
background-color: #E97924;
font-size: 1.5rem;
font-weight: 900;
height: 75px;
width: 75%;
display: flex;
align-items: center;
padding-left: 50px;
position: relative;
z-index:0;
margin: 35px 0;
span {
  width: 100%;
}
.aRed {
  background-color: #313A64;
  height: 100%;
  width: 60%;
  margin: auto;
  clip-path: polygon(95% 25%, 100% 25%, 100% 100%, 20% 100%, 20% 83%, 95% 83%);
  position: absolute;
  top: 5px;
  left: 107px;
  z-index: -20;
}
.aBlue {
  background-color: #313A64;
  height: 100%;
  width: 60%;
  margin: auto;
  clip-path: polygon(95% 25%, 100% 25%, 100% 100%, 20% 100%, 20% 83%, 95% 83%);
  position: absolute;
  top: 5px;
  left: 107px;
  z-index: -20;
}
@media only screen and (min-width: 884px) {
background-color: #E97924;
font-size: 75px;
font-weight: 900;
height: 125px;
width: 450px;
display: flex;
justify-content: center;
align-items: center;
margin: auto;
padding-left: 50px;
position: relative;
left: 250px;
top: -99px;
z-index:0;
margin: 35px 0;
span {
  width: 100%;
}
.aRed {
  background-color: #313A64;
  height: 100%;
  width: 80%;
  margin: auto;
  clip-path: polygon(95% 25%, 100% 25%, 100% 100%, 20% 100%, 20% 83%, 95% 83%);
  position: absolute;
  top: 5px;
  /* left: 205px; */
  z-index: -20;
}
.aBlue {
  background-color: #313A64;
  height: 100%;
  width: 80%;
  margin: auto;
  clip-path: polygon(95% 25%, 100% 25%, 100% 100%, 20% 100%, 20% 87%, 95% 87%);
  position: absolute;
  top: 5px;
  /* left: 205px; */
  z-index: -20;
}
}
`

export const EctTitleWrap = styled.div`
background-color: #E7C57F;
font-size: 1.5rem;
font-weight: 900;
height: 75px;
width: 75%;
display: flex;
align-items: center;
position: relative;
z-index:0;
margin: 35px 0;
span {
  width: 100%;
}
.bTan {
  background-color: #E7C57F
}
.aRed {
  background-color: #313A64;
  height: 100%;
  width: 60%;
  margin: auto;
  clip-path: polygon(95% 25%, 100% 25%, 100% 100%, 20% 100%, 20% 87%, 95% 87%);
  position: absolute;
  top: 5px;
  left: 87px;
  z-index: -20;
}
.aBlue {
  background-color: #313A64;
  height: 100%;
  width: 60%;
  margin: auto;
  clip-path: polygon(95% 25%, 100% 25%, 100% 100%, 20% 100%, 20% 83%, 95% 83%);
  position: absolute;
  top: 5px;
  left: 87px;
  z-index: -20;
}
.aTeal {
  background-color: #83CFCB;
  height: 100%;
  width: 60%;
  margin: auto;
  clip-path: polygon(95% 25%, 100% 25%, 100% 100%, 20% 100%, 20% 83%, 95% 83%);
  position: absolute;
  top: 5px;
  left: 87px;
  z-index: -20;
}
@media only screen and (min-width: 884px) {
background-color: #E7C57F;
font-size: 75px;
font-weight: 900;
height: 125px;
width: 450px;
display: flex;
justify-content: center;
align-items: center;
margin: auto;
padding-left: 50px;
position: relative;
z-index:0;
margin: 35px 0;
span {
  width: 100%;
}
.aRed {
  background-color: #313A64;
  height: 100%;
  width: 60%;
  margin: auto;
  clip-path: polygon(95% 25%, 100% 25%, 100% 100%, 20% 100%, 20% 83%, 95% 83%);
  position: absolute;
  top: 5px;
  left: 205px;
  z-index: -20;
}
.aTeal {
  background-color: #83CFCB;
  height: 100%;
  width: 60%;
  margin: auto;
  clip-path: polygon(95% 25%, 100% 25%, 100% 100%, 20% 100%, 20% 83%, 95% 83%);
  position: absolute;
  top: 5px;
  left: 205px;
  z-index: -20;
}
}
`

export const AbsCardWrap = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
position: relative;
top: -550px;
text-align: center;
margin: auto;
img {
  width: 275px;
}
.aqua {
  height: 70%;
  width: 275px;
  background-color: #55C4CA;
}
.moa {
  height: 70%;
  width: 275px;
  background-color: #E7B22D;
  box-shadow: .01px .01px 5px black;
}
.lime {
  height: 70%;
  width: 275px;
  background-color: #CBE18C;
  box-shadow: .01px .01px 5px black;
}
.aBlue {
  background-color: #313A64;
  height: 275px;
  width: 5%;
  position: absolute;
  top: 0px;
  right: 0px;
}
.aRed {
  background-color: #F40707;
  height: 275px;
  width: 5%;
  position: absolute;
  top: 0px;
  right: 0px;
}
.aGreen {
  background-color: #048A81;
  height: 275px;
  width: 5%;
  position: absolute;
  top: 0px;
  right: 0px;
}
@media only screen and (min-width: 884px) {
display: flex;
justify-content: center;
/* flex-wrap: wrap; */
flex-direction: row;
position: relative;
top: -400px;
text-align: center;
align-items: center;
img {
  width: 70%;
  align-self: center;
}
.aqua {
  background-color: #55C4CA;
  margin: auto;
  height: 380px;
  width: 75%;
  position: relative;
  top: -170px;
  z-index: -10;
  box-shadow: .01px .01px 5px black;
}
.moa {
  background-color: #E7B22D;
  margin: auto;
  height: 380px;
  width: 75%;
  position: relative;
  top: -170px;
  z-index: -10;
  box-shadow: .01px .01px 5px black;
}
.lime {
  background-color: #CBE18C;
  margin: auto;
  height: 380px;
  width: 75%;
  position: relative;
  top: -170px;
  z-index: -10;
  box-shadow: .01px .01px 5px black;
}
.aBlue {
  background-color: #313A64;
  height: 58%;
  width: 80%;
  clip-path: polygon(7% 0, 7% 95%, 100% 95%, 100% 100%, 0 100%, 0 0);
  position: relative;
  top: -235px;
  left: -6px;
  z-index: -20;
}
.aRed {
  background-color: #F40707;
  height: 58%;
  width: 80%;
  clip-path: polygon(7% 0, 7% 95%, 100% 95%, 100% 100%, 0 100%, 0 0);
  position: relative;
  top: -235px;
  left: -6px;
  z-index: -20;
}
.aGreen {
  background-color: #048A81;
  height: 58%;
  width: 80%;
  clip-path: polygon(7% 0, 7% 95%, 100% 95%, 100% 100%, 0 100%, 0 0);
  position: relative;
  top: -235px;
  left: -6px;
  z-index: -20;
}
}
`

export const WhatsNewWrapper = styled.div`
display: flex;
/* justify-content: space-evenly; */
flex-wrap: wrap;
margin: 0 15px 15px 150px;
a {
  text-decoration: none;
  color: black;
}
.dLeft {
  display: none;
}
.dRight {
  width: 80vw;
  height: 280px;
  border: 10px solid #3C4981;
  background-color: white;
  font-size: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
}
h3 {
  background-color: #3C4981;
  width: 350px;
  height: 150px;
  color: white;
  font-size: 3.5em;
  padding: 15px 0 0 50px;
  margin: 50px 0 0 -50px;
  vertical-align: middle;
}
@media only screen and (min-width: 884px) {
.dRight {
  width: 280px;
  height: 280px;
  border: 10px solid #3C4981;
  background-color: white;
  font-size: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.dLeft {
  display: initial;
  width: 500px;
  height: 300px;
  background-color: #E7C57F;
  margin: 15px;
}
}
`

export const LongWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
margin: 100px 0 100px 0;
`

export const BCardWrapper = styled.div`
display: flex;
flex-wrap: wrap;
@media only screen and (min-width: 884px) {
width: 100vw;
display: flex;
flex-direction: column;
}
`

export const BDetailsWrap = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
img {
  display: flex;
  width: 90%;
  height: 90%;
  margin-top: 25px;
  align-items: center;
  justify-content: center;
}
@media only screen and (min-width: 884px) {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1.55em;
  font-weight: 700;
  img{
    width: 400px;
  }
}
`

export const FilterWrapper = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
margin: auto;
padding: 15px;
max-width: 1600px;
`

export const MapWrap = styled.div`
display: flex;
justify-content:center;
`

export const EventsWrap = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
background-color: #83CFCB;
@media only screen and (min-width: 884px) {
  flex-direction: row;
padding: 100px 0 100px 175px;
}
`

export const EventsCardWrapper = styled.div`
background-color: #83CFCB;
hr {
  width: 70%;
  height: 3px;
  background-color: black;
  border: none;
}
`

export const FECardWrapper = styled.div`
@media only screen and (min-width: 884px) {
margin: 250px 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
h2 {
font-weight: bolder;
font-size: 55px;
}
div {
display: flex;
margin: 15px;
}
hr {
  width: 70%;
  height: 3px;
  background-color: black;
  border: none;
  margin: 200px 0 -200px 0;
}
}
`
export const AltFECardWrapper = styled.div`
@media only screen and (min-width: 884px) {
margin: 0px 0 250px 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
h2 {
font-weight: bolder;
font-size: 55px;
}
div {
display: flex;
margin: 15px;
}
hr {
  width: 70%;
  height: 3px;
  background-color: black;
  border: none;
  margin: 200px 0 -200px 0;
}
}
`

export const CalendarWrapper = styled.div`
display: flex;
width: 400px;
/* TODO swap later */
@media only screen and (max-width: 884px) {
  width: 100%;
}
`

export const EventsDetailsWrap = styled.div`
display: flex;
justify-content: left;
align-items: center;
padding: 50px 0;
hr {
  border: 4px solid black;
}
`

export const NewsfeedWrapper = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
h2 {
  text-decoration: underline;
}
p {
  padding: 10px;
}
@media only screen and (min-width: 884px) {
margin: 60px;
h2 {
  font-size: 55px;
}
p {
  font-size: 30px;
  max-width: 1200px;
}
}
`

export const OldeCalWrapper = styled.div`
margin-top: 100px;
background-color: #83CFCB;
display: flex;
flex-direction: column;
justify-content: space-evenly;
text-align: left;
h5 {
  font-size: 35px;
  padding-left: 5px;
  margin: 20px;
}
hr {
  background-color: black;
  height: 2px;
  border: none;
  width: 90%;
}
@media only screen and (min-width: 884px) {
h5 {
  font-size: 75px;
  padding-left: 155px;
  margin: 50px;
}
}
`
export const EventsCalWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
background-color: #83CFCB;
padding: 5px;
a{
  color: black;
  text-decoration: none;
}
@media only screen and (min-width: 884px) {
  flex-direction: row-reverse;
padding: 150px 50px 150px 50px;
}
`

export const EventSingleCardWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const AboutWrapper = styled.div`
`

export const AboutDetailsWrapper = styled.div`
`

export const AboutBoardWrapper = styled.div`
background-color: #55C4CA;
margin: 35px 0;
padding: 15px 0;
h4 {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 45px auto;
}
@media only screen and (min-width: 884px) {
padding-bottom: 50px;
h4 {
  font-size: 35px;
  width: 1100px;
  padding: 25px;
}
}
`

export const AboutPositionsWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const AboutInvolvedWrapper = styled.div`
`
export const AboutDocWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media only screen and (min-width: 884px) {
  flex-direction: row;
  font-size: 35px;
  margin: 55px auto;
  padding: 25px 0;
  div {
    width: 100%;
    height: 100vh;
  }
}
`

export const CarouselWrapper = styled.div`
height: 100%;
@media only screen and (min-width: 884px) {
height: 900px;
}
`
export const CarouselCardWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: auto;
max-height: 800px;
max-width: 1000px;
border: 5px solid gray;
box-shadow: 0px 0px 10px gray;
border-radius: 5px;
h2 {
  font-size: 55px;
}
p {
  font-size: 35px;
}
a {
  color: black;
  text-decoration: none;
}
@media only screen and (min-width: 884px) {
img {
  height: 400px;
  width: 400px;
}
}
`
