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
  background-color: slategrey;
}
ul {
  text-decoration: none;
  li {
    a {
    }
    }
  }

}
span {
  text-align: center;
  font-size: 2em;
  color: #ffffff;
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
  font-size: 80px;
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
  font-size: 30px;
  text-align: center;
}

@media only screen and (min-width: 884px) {
/* TODO isse between 884 and 922 vw */
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
  font-size: 26px;
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