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
font-size: 60px;
display: flex;
font-weight: normal;
`

export const EventImg = styled.div`
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
`

export const EventDetails = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
height: 250px;
width:100%;
span {
  font-size: 50px;
  font-weight: bolder;
}
p {
  width: 450px;
  font-size: 30px;
}
`
export const GreenBtn = styled.div`
width: 190px;
padding: 15px;
background-color: #048A81;
color: white;
display: flex;
justify-content: center;
align-items: center;
margin-left: 200px;
margin-top: 15px;
:hover {
  background-color: white;
  color: #048A81;
}
`