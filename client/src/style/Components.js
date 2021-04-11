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