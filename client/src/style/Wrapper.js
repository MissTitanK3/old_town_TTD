import styled from 'styled-components'

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
span {
  text-align: center;
  font-size: 2em;
  color: #ffffff;
}
`