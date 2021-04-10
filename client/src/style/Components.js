import styled from 'styled-components'


export const LogoWrap = styled.div`
display: flex;
align-items: center;
`

export const NavMobile = styled.div`
border: 1px solid green;
`
export const TopBar = styled.div`
  height: 25px;
  width: 100vw;
  background-color: #048A81;
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