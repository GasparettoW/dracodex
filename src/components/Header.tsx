import styled from 'styled-components'
import { color, font, space } from '../styles/variables'
import logo from '../assets/logo.svg'
import { useContext } from 'react'
import { AuthContext } from '../contexts/auth'
import { useNavigate } from 'react-router-dom'

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${space.sm} ${space.container};
  border-bottom: 1px solid ${color.gray[300]};
`

const Logo = styled.img`
  height: auto;
  max-height: 22px;
  object-fit: cover;
  margin-right: ${space.md};
`

const LogoContainer = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  font-family: ${font.family.brand};
  font-size: ${font.size.sm};
`

const ActionContainer = styled.div`
  display: flex;
  gap: ${space.lg};
  align-items: center;
`
const P = styled.p`
  font-size: ${font.size.sm};
  color: ${color.gray[400]};
  letter-spacing: ${font.letterSpacing.sm};
`

const Button = styled.p`
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

export const Header = () => {
  const navigate = useNavigate()
  const { user, logout } = useContext(AuthContext)
  return (
    <HeaderStyled>
      <LogoContainer
        onClick={() => {
          navigate('/')
        }}
      >
        <Logo src={logo} alt='' />
        Dracodex
      </LogoContainer>
      <ActionContainer>
        <P>{user}</P>
        <Button onClick={() => logout()}>Logout</Button>
      </ActionContainer>
    </HeaderStyled>
  )
}
