import {Link, NavLink} from "react-router-dom";
import styled from 'styled-components'
import {UseWindow} from "../../Helpers/UseWindow";
import {MediaQueries} from "../Styled-Components/Themes";
import {useState} from "react";

const NavbarCont = styled.div`
  height: 40px;
  background: ${(props) => props.theme.body};
  padding: 0 40px;
  font-family: sans-serif;
  position: relative;
  color: rgba(0, 0, 0, 0.82);
`
const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0; 
  ${
          MediaQueries(991.9)`
    padding: 10px 0 0 0;
    `
  }

`
const Logo = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: .5s all;
  color: ${(props) => props.click ? props.theme.body : props.theme.text};
  z-index: 2;
`
const Navigator = styled.div`
  display: flex;
  align-items: center;
  top: ${(props) => props.click ? "0" : "-100%"};
  transition: .5s all ease-in-out;
  Link {
    margin: 0 1rem;
  }

  ${
    MediaQueries(768)`
        position:fixed;
        flex-direction: column;
        justify-content:center;
        align-items:center;
        left:0;
        background:rgba(0, 0, 0, 0.98);
        width:100%;
        height:100%;
    `
  }
`
const BtnMedia = styled.button`
  position: relative;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  transition: .2s;
  width: 30px;
  height: 25px;
  display: none;
  border: none;
  outline: none;
  background: transparent;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 1.5px;
    background:  ${(props) => props.click ? props.theme.body : props.theme.text};
    transition: .2s;
    ${ (props) => props.click ? `transform: translateY(0) rotate(45deg)` : `transform: translateY(-10px)` };
    box-shadow: 0 10px 0  ${(props) => props.click ? '' : props.theme.text};
  }
  &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 1.5px;
    background:  ${(props) => props.click ? props.theme.body : props.theme.text};
    transition: .2s;
    ${ (props) => props.click ? `transform: translateY(0) rotate(-45deg)` : `transform: translateY(10px)` };
  }
  ${
    MediaQueries(768)`
      display:block   ;
    `
  }
`
const Links = styled(NavLink)`
  margin: 0 1rem;
  text-decoration: none;
  color: ${(props) => props.theme.text};
  font-size: 14px;
  text-transform: uppercase;
  ${
    MediaQueries(768)`
     color: #fff;
     margin: 1.5rem 0;
     transition: .5s all ease;
    `
  }
`
const Navbar = () => {
    const Link = [
        {
            id: 1,
            href: '/',
            name: 'Home'
        },
        {
            id: 2,
            href: '/comments',
            name: 'Comments'
        },
        {
            id: 3,
            href: '/photos',
            name: 'Photos'
        },
        {
            id: 4,
            href: '/todos',
            name: 'Todos'
        },
        {
            id: 5,
            href: '/users',
            name: 'Users'
        },
    ]

    const [width] = UseWindow()

    const [ click, setClick ] = useState(false)

    if (width > 767.9 && click === true) setClick(p => !p)


    return (
        <NavbarCont>
            <FlexDiv>
                <Logo to={'/'} click={click}>LOGO</Logo>
                <Navigator click={click} width={width}>
                    {
                        Link.map((item, index) => <Links key={item.id} to={item.href}
                                                         onClick={() => setClick(p=>!p)}>{item.name}</Links>)
                    }
                </Navigator>
                <BtnMedia onClick={() => setClick(p=>!p)} click={click}/>
            </FlexDiv>
        </NavbarCont>
    )
}
export default Navbar;