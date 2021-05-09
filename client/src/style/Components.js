import styled from 'styled-components'

export const NavMobile = styled.div`
border: 1px solid green;
`
export const TopBar = styled.div`
height: 10px;
width: 100vw;
background-color: #048A81;
margin-bottom: 5px;
@media only screen and (min-width: 884px) {
  height: 25px;
}
`
export const NavList = styled.div`
width: 70%;
text-align: right;
display: flex;
flex-direction: column;
justify-content: space-around;
div {
  display: flex;
  justify-content: flex-end;
  padding-right: 25px;
}
ul {
  display: flex;
  justify-content: flex-end;
  list-style: none;
  li {
    padding: 0 25px;
    font-size: 1.5em;
    a {
      text-decoration: none;
      color: #333333
    }
    a:hover {
      color: #E97924;
    }
  }
}
`

export const StandardBtn = styled.div`
  height: 25px;
  width: 250px;
  font-size: 16px;
  border: none;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  background-color: #AD976E;
  color: #ffffff;
  &:hover {
    color: #333333;
    cursor: pointer;
  }
`
export const AltBtn = styled.div`
border: none;
display: flex;
justify-content: center;
flex-direction: row;
align-items: center;
background-color: #333333;
color: #ffffff;
width: 150px;
height: 40px;
&:hover {
  color: #AD976E;
  cursor: pointer;
}
@media only screen and (min-width: 884px) {

height: 50px;
width: 160px;
font-size: 1.5em;
position: relative;
left: 140px;
bottom: -3px;
}
`

export const OhNo = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: center;
align-content: center;
text-align: center;
background: radial-gradient(circle, rgba(4,138,128,1) 44%, rgba(233,121,36,1) 100%);
@media only screen and (min-width: 884px) {
flex-wrap: none;
h1 {
  font-size: 200px;
}
height: 70vh;
}
`

export const VideoComp = styled.div`
background-color: #E97924;
padding: 20px 0;
img {
  width: 100vw;
}
div {
  margin: auto;
}
`

export const StandDesc = styled.div`
margin: auto;
text-align: center;
color: #333333;
padding: 25px;
h2 {
  color: #3C4981;
}
@media only screen and (min-width: 884px) {
width: 50vw;
font-size: 35px;
h2 {
  font-size: 75px;
}
}
`
export const AbsCard = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
position: relative;
text-align: center;
margin: auto;
padding-bottom: 15px;
a {
  text-decoration: none;
}
@media only screen and (min-width: 884px) {
display: flex;
justify-content: center;
flex-direction: column;
width: 425px;
height: 750px;
position: sticky;
margin: 15px;
span {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding:0 0 10px 10px;
  text-align: right;
  width: 95%;
  height: 90%;
  font-size: 2.5em;
}
a {
  text-decoration: none;
}
}
`
export const CardBar = styled.div`
width: 100vw;
height: 200px;
margin-top: 350px;
@media only screen and (min-width: 884px) {
background-color: #83CFCB;
}
`
export const PageBreak = styled.div`
img {
width: 100vw;
}
@media only screen and (min-width: 884px) {
img {
height: 101%;
width: 100vw;
position: relative;
top: -300px;
}
}
`

export const LCard = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
margin: auto;
div {
  color: white;
  img {
    opacity: .7;
    width: 100vw;
  }
  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    text-align: center;
    height: 70px;
    width: 90vw;
    font-size: 45px;
  }
  h3 {
    text-align: right;
    height: 100px;
    width: 90vw;
  }
}
.midOrange {
  background-color: #E97924;
  margin-top: -5px;
}
.midBlue {
  background-color: #313A64;
  margin-top: -5px;
}
.midAqua {
  background-color: #378CAB;
  margin-top: -5px;
}
.green {
  background-color:#048A81;
}
.red {
  background-color:#F40707;
}
.blue {
  background-color:#313A64;
}


@media only screen and (min-width: 884px) {
display: flex;
flex-direction: row;
margin: auto;
height: 800px;
width: 400px;
margin: 25px;
div {
  img {
    width: 400px;
  }
  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    text-align: center;
    height: 200px;
    width: 300px;
    font-size: 85px;
    font-weight: 200;
    padding-left: 100px;
  }
  h3 {
    width: 93%;
    padding: 15px;
    font-size: 35px;
  }
}
}
`

export const BusinessLogo = styled.img`
width: 400px;
height: 400px;

`

export const PageBreakAlt = styled.div`
img {
width: 100vw;
}
@media only screen and (min-width: 884px) {
img {
height: 101%;
width: 100vw;
}
}
`

export const Hours = styled.div`
width: 200px;
`

export const Excerpt = styled.div`
margin: auto;
width: 75%;
font-size: 34px;
font-weight: 900;
`

export const BusSocials = styled.div`
display: flex;
flex-direction: column;
margin: auto;
align-items: center;
width: 100%;
justify-content: center;
margin-bottom: 35px;
a {
  display: flex;
  margin: 10px 0;
  padding: 0 10px;
  color: black;
  text-decoration: none;
  align-items: center;
  :hover {
    color: #E97924;
  }
}
img{
  width: 25px;
}
@media only screen and (min-width: 884px) {
font-size: 25px;
flex-direction: row;
a {
  display: flex;
  margin: 100px 0;
  padding: 0 10px;
}
img {
  width: 55px;
}
}
`
export const FilterCard = styled.div`
img{
  display: none;
}
@media only screen and (min-width: 884px) {
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
margin: 5px;
height: 400px;
width: 400px;
img {
  display: initial;
  width: 80%;
  box-shadow: 2px 2px 5px black;
  height: 250px;
  width: 250px;
  :hover{
    background-color: silver;
    cursor: pointer;
  }
}
}
`
export const CardBtn = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 85px;
width: 250px;
background-color: #378CAB;
:hover{
  color: white;
  cursor: pointer;
}
.dBlue {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  width: 100%;
  height: 100%;
  background-color: #378CABA8;
  :hover{
    color: white;
    cursor: pointer;
  }
}
.dTan {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  width: 100%;
  height: 100%;
  background-color: #E7C57FA8;
  :hover{
    color: white;
    cursor: pointer;
  }
}
.dGreen {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  width: 100%;
  height: 100%;
  background-color: #048A81A8;
  :hover{
    color: white;
    cursor: pointer;
  }
}
.dRed {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  width: 100%;
  height: 100%;
  background-color: #F40707A8;
  :hover{
    color: white;
    cursor: pointer;
  }
}
.dPurple {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  width: 100%;
  height: 100%;
  background-color: #3C4981A8;
  :hover{
    color: white;
    cursor: pointer;
  }
}
.dOrange {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  width: 100%;
  height: 100%;
  background-color: #E97924A8;
  :hover{
    color: white;
    cursor: pointer;
  }
}
`
export const FilterBanner = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: auto;
height: 50px;
width: 250px;

.dBlue {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  width: 100%;
  height: 100%;
  background-color: #378CAB;
}
.dTan {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  width: 100%;
  height: 100%;
  background-color: #E7C57FA8;
}
.dGreen {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  width: 100%;
  height: 100%;
  background-color: #048A81A8;

}
.dRed {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  width: 100%;
  height: 100%;
  background-color: #F40707A8;
}
.dPurple {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  width: 100%;
  height: 100%;
  /* TODO figure out why this is a different color */
  background-color: #3C4981;
}
.dOrange {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  width: 100%;
  height: 100%;
  background-color: #E97924A8;
}

@media only screen and (min-width: 884px) {
height: 75px;
width: 450px;
display: flex;
justify-content: center;
align-items: center;
margin: auto;
background-color: #E97924A8;

.dBlue {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  width: 100%;
  height: 100%;
  background-color: #378CAB;
}
.dTan {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  width: 100%;
  height: 100%;
  background-color: #E7C57FA8;
}
.dGreen {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  width: 100%;
  height: 100%;
  background-color: #048A81A8;
}
.dRed {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  width: 100%;
  height: 100%;
  background-color: #F40707A8;
}
.dPurple {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  width: 100%;
  height: 100%;
  background-color: #3C4981A8;
}
.dOrange {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  width: 100%;
  height: 100%;
  background-color: #E97924A8;
}
}
`
export const Results = styled.div`
display: flex;
justify-content: left;
align-items: center;
flex-wrap: wrap;
max-width: 850px;
margin: auto;
padding: 150px 0;
a {
  display: flex;
  justify-content: left;
  align-items: center;
  flex-wrap: wrap;
  margin: 15px;
  padding-left: 15px;
  color: black;
  width: 380px;
  font-size: 25px;
  height: 75px;
  text-decoration: none;
  :hover{
    color: #E97924;
  }
}
`

export const Discover = styled.h2`
display: flex;
font-weight: normal;
@media only screen and (min-width: 884px) {
font-size: 71px;
width: 1200px;
padding:40px 0 40px 85px;
}
`

export const EventImg = styled.div`
margin: 25px 75px;
position: relative;
img {
height: 50vw;
display: flex;
}
.bBlue {
border: 10px solid #313A64;
}
.bOr {
border: 10px solid #E7B22D;
}
.bDOr {
border: 10px solid #E97924;
}

.aLime {
  background-color: #CBE18C;
  height: 100%;
  width: 100%;
  clip-path: polygon(97% 66%, 100% 66%, 100% 100%, 75% 100%, 5% 100%, 5% 95%, 97% 95%);
  position: absolute;
  bottom: -5px;
  right: -5px;
  z-index: 20;
}
.aRed {
  background-color: #F40707;
  height: 100%;
  width: 100%;
  clip-path: polygon(97% 66%, 100% 66%, 100% 100%, 75% 100%, 5% 100%, 5% 95%, 97% 95%);
  position: absolute;
  bottom: -5px;
  right: -5px;
  z-index: 20;
}
.aLOr {
  background-color: #E7C57F;
  height: 100%;
  width: 100%;
  clip-path: polygon(97% 66%, 100% 66%, 100% 100%, 75% 100%, 5% 100%, 5% 95%, 97% 95%);
  position: absolute;
  bottom: -5px;
  right: -5px;
  z-index: 20;
}
.aBlue {
  background-color: #3C4981;
  height: 100%;
  width: 100%;
  clip-path: polygon(97% 66%, 100% 66%, 100% 100%, 75% 100%, 5% 100%, 5% 95%, 97% 95%);
  position: absolute;
  bottom: -5px;
  right: -5px;
  z-index: 20;
}
@media only screen and (min-width: 884px) {
margin: 0 75px;
position: relative;
img {
height: 400px;
display: flex;
}
.bBlue {
border: 30px solid #313A64;
}
.bOr {
border: 30px solid #E7B22D;
}
.bDOr {
border: 30px solid #E97924;
}
.aLime {
  background-color: #CBE18C;
  height: 100%;
  width: 100%;
  clip-path: polygon(97% 66%, 100% 66%, 100% 100%, 75% 100%, 5% 100%, 5% 95%, 97% 95%);
  position: absolute;
  bottom: -10px;
  right: -10px;
  z-index: 20;
}
.aRed {
  background-color: #F40707;
  height: 100%;
  width: 100%;
  clip-path: polygon(97% 66%, 100% 66%, 100% 100%, 75% 100%, 5% 100%, 5% 95%, 97% 95%);
  position: absolute;
  bottom: -10px;
  right: -10px;
  z-index: 20;
}
.aLOr {
  background-color: #E7C57F;
  height: 100%;
  width: 100%;
  clip-path: polygon(97% 66%, 100% 66%, 100% 100%, 75% 100%, 5% 100%, 5% 95%, 97% 95%);
  position: absolute;
  bottom: -10px;
  right: -10px;
  z-index: 20;
}
.aBlue {
  background-color: #3C4981;
  height: 100%;
  width: 100%;
  clip-path: polygon(97% 66%, 100% 66%, 100% 100%, 75% 100%, 5% 100%, 5% 95%, 97% 95%);
  position: absolute;
  bottom: -10px;
  right: -10px;
  z-index: 20;
}
}
`

export const EventDetails = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
a {
  text-decoration: none;
}
span {
  font-weight: bolder;
}
p {
  width: 100vw;
}
@media only screen and (min-width: 884px) {
height: 250px;
width:100%;
span {
  font-size: 50px;
}
p {
  width: 450px;
  font-size: 30px;
}
}
`
export const GreenBtn = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #048A81;
color: white;
width: 50vw;
padding: 5px;
:hover {
  background-color: white;
  color: #048A81;
}
@media only screen and (min-width: 884px) {
width: 190px;
padding: 15px;
margin-left: 200px;
margin-top: 15px;
}
`

export const FECards = styled.div`
  height: 100vw;
  width: 100vw;
  margin-top: 105px;
  img {
    width: 95vw;
    padding: 25px 0;
  }
  span {
    font-size: 20px;
    font-weight: 900;
    margin-bottom: -30px;
  }
  .bBlue {
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: #55C4CA;
  }
  .bOran {
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: #E7C57F;
    
  }
  .bGreen {
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: #CBE18C;
    
  }
  .aBlue {
    background-color: #3C4981;
    height: 100%;
    width: 100%;
    clip-path: polygon(5% 75%, 5% 95%, 100% 95%, 100% 100%, 0 100%, 0% 75%);
    position: absolute;
    bottom: -5px;
    right: 0;
    z-index: 20;
  }
  .aRed {
    background-color: #F40707;
    height: 100%;
    width: 100%;
    clip-path: polygon(5% 75%, 5% 95%, 100% 95%, 100% 100%, 0 100%, 0% 75%);
    position: absolute;
    bottom: -5px;
    right: 0;
    z-index: 20;
  }
  .aGreen {
    background-color: #048A81;
    height: 100%;
    width: 100%;
    clip-path: polygon(5% 75%, 5% 95%, 100% 95%, 100% 100%, 0 100%, 0% 75%);
    position: absolute;
    bottom: -5px;
    right: 0;
    z-index: 20;
  }
@media only screen and (min-width: 884px) {
  height: 400px;
  width: 400px;
  img {
    width: 325px;
    padding: 25px;
  }
  span {
    font-size: 45px;
    font-weight: 900;
    margin-bottom: -30px;
  }
  .bBlue {
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: #55C4CA;
  }
  .bOran {
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: #E7C57F;
    
  }
  .bGreen {
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: #CBE18C;
    
  }
  .aBlue {
    background-color: #3C4981;
    height: 100%;
    width: 100%;
    clip-path: polygon(5% 75%, 5% 95%, 100% 95%, 100% 100%, 0 100%, 0% 75%);
    position: absolute;
    bottom: -25px;
    right: -7px;
    z-index: 20;
  }
  .aRed {
    background-color: #F40707;
    height: 100%;
    width: 100%;
    clip-path: polygon(5% 75%, 5% 95%, 100% 95%, 100% 100%, 0 100%, 0% 75%);
    position: absolute;
    bottom: -25px;
    right: -7px;
    z-index: 20;
  }
  .aGreen {
    background-color: #048A81;
    height: 100%;
    width: 100%;
    clip-path: polygon(5% 75%, 5% 95%, 100% 95%, 100% 100%, 0 100%, 0% 75%);
    position: absolute;
    bottom: -25px;
    right: -7px;
    z-index: 20;
  }
}
  `
export const FECardsDetails = styled.div`
width: 70%;
height: 30%;
font-size: 30px;
/* font-weight: bold; */
margin-top: 15px;
text-align: right;
display: flex;
flex-direction: column;
margin-right: -40px;

`

export const DateCard = styled.div`
width: 70px;
height: 65px;
text-align: center;
background-color: #C2C6C9;
position: relative;
margin: 25px;
h4 {
  margin: 0;
  padding: 3px 0;
  background-color: #3C4981;
  color: white;
}
span {
  font-weight: bolder;
  font-size: 40px;
  height: 30%;
  position: absolute;
  top: 20px;
  left: 18px;
  width: 50%;
}
p  {
  margin: 8px;
  font-weight: bolder;
}
`
export const DateDetails = styled.div`
font-size: 22px;
display: flex;
flex-direction: column;
width: 400px;
position: relative;
h3 {
font-weight: bolder;
margin: 0;
}
span {
  margin: 0;
  padding-right: 15px;
  height: 25px;
}
p {
  margin: 0;
  height: 25px;
}
div {
  display: flex;
  justify-content" center;
  align-items: center;
  position: absolute;
  top: 40px;
  left: 0;
  height: 30px;
}
`


export const EventDetailHeader = styled.div`
padding: 25px;
display: flex;
justify-content: space-between;
align-items: flex-end;
/* TODO something is overriding this when navigating to page */
border: 1px solid green;
width: 900px;
max-width: 900px;
font-size: 1.2em;
img {
  width: 400px;
}
h1 {
  font-size: 70px;
  margin-bottom: 2px;
}
span {
  font-size: 30px;
}
`
export const EventDetailPage = styled.div`
width: 950px;
background-color: #CBE18C;
display: flex;
justify-content: space-evenly;
align-items: center;
font-size: 30px;
span {
  font-size: 35px;

}
`

export const EventTitleCard = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
font-size: 35px;
font-weight: bolder;
background-color: #E7C57F;
top: -70px;
left: -81px;
height: 55px;
width: 225px;
margin-bottom: -20px;
z-index: 0;
.aRed {
  background-color: #F40707;
  height: 100%;
  width: 60%;
  margin: auto;
  clip-path: polygon(95% 15%, 100% 15%, 100% 100%, 20% 100%, 20% 83%, 95% 83%);
  position: absolute;
  top: 5px;
  left: 93px;
  z-index: -20;
}
`

export const EventDesc = styled.div`
border: 1px solid blue;
margin: 150px 0;
width: 950px;
font-size: 30px;
`

export const EventBtn = styled.div`
height: 100px;
width: 950px;
display: flex;
justify-content: center;
align-items: center;
background-color: #313A64;
a {
  text-decoration: none;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  background-color: #E97924;
  font-size: 15px;
  font-weight: bolder;
  &:hover {
    background-color: #E9792490;
    color: white;
    cursor: pointer;
  }
}
`

export const AboutImg = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 20px 0;
background-color: #313A64;
position: relative;
z-index: 0;
margin-bottom: 100px;
img {
  width: 100%;
  z-index: 1;
}
h2 {
  position: absolute;
  bottom: -70px;
  left: 0;
  font-size: 55px;
  background-color: #55C4CA;
  width: 700px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
}
.aOrange {
  background-color: #E97924;
  height: 80px;
  width: 500px;
  margin: auto;
  clip-path: polygon(97% 15%, 100% 15%, 100% 100%, 20% 100%, 20% 83%, 97% 83%);
  position: absolute;
  bottom: -30px;
  left: 205px;
  z-index: 4;
}
`

export const AboutIntro = styled.div`
font-size: 55px;
font-weight: bolder;
width: 70%;
display: flex;
justify-content: center;
align-items: center;
margin: auto;
text-align: center;
padding: 100px 0;
`

export const AboutTxtBody = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: red;
position: relative;
img {
  width: 600px;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 2;
  opacity: 80%;
  background-color: red;
}
p {
  display: flex;
  align-items: center;
  background-color: #378CAB;
  height: 775px;
  color: white;
  font-size: 47px;
  text-align: right;
  line-height: 1.2;
  padding: 25px 85px 25px 125px;
  position: relative;
  z-index: 3;
}

.aTan {
  background-color: #E7C57F;
  height: 300px;
  width: 100%;
  margin: auto;
  clip-path: polygon(97% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 80%, 97% 80%);
  position: absolute;
  bottom: 0px;
  right: 0;
  z-index: 4;
}
`

export const AboutTitle = styled.div`
/* TODO move down if the red is too much */
background-color: #E7C57F;
height: 100%;
margin-bottom: -110px;
font-size: 55px;
text-align: center;
color: #313A64;
position: relative;
z-index: 5;
`

export const TintRed = styled.div`
background-color: red;
img {
  width: 100%;
  opacity: 80%;
}
`

export const AboutPositions = styled.div`
font-weight: bolder;
margin: 20px;
font-size: 20px;
p {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 75px;
width: 180px;
background-color: #3C4981;
color: white;
  padding: 0;
  margin: 0;
  text-align: center;
}
span {
  background-color: none;
  display: flex;
  justify-content: center;
  height: 75px;
  width: 180px;
}
`

export const AboutSeatPositions = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 30px 0 5px 0;
`
export const AltAboutSeatPositions = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
align-items: center;
max-width: 660px;
`

export const AboutHeaderTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #E97924;
  color: white;
  font-size: 65px;
  margin: 60px auto;
  text-align: center;
  width: 70%;
  h2 {
  padding: 0;
  margin: 10px;
  }
`

export const AboutInvolvedApply = styled.div`
h3 {
  background-color: #E7C57F;
  width: 60%;
  font-size: 55px;
  padding: 15px 0 15px 75px;
}
span, p{
  display: flex;
  width: 1000px;
  margin: auto 150px;
  font-size: 45px;
  padding: 15px;
}
ul{
  width: 1000px;
  margin: auto 150px;
  font-size: 35px;
  padding: 15px 0 0 125px;
}
a {
  margin: 0;
  padding: 0;
  color: #378CAB;
}
.desc {
  display: flex;
  flex-direction: column;
}
`

export const AboutDocuments = styled.div`
div {
display: flex;
flex-direction: column;
padding: 15px 0;
}
.budget {
  background-color: #048A8170;
}
.board {
  background-color: #E7B22D70;
}
.committee {
  background-color: #3C498170;
}
h3, a{
  padding-left: 25px;
}
`