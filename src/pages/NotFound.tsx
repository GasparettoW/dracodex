import { Link, useNavigate } from 'react-router-dom'
import { FullPageContainer } from '../styles'
import image404 from '../assets/404.png'
import styled from 'styled-components'
import { color, font, space } from '../styles/variables'

const NotFoundContainer = styled(FullPageContainer)`
  display: flex;
  flex-direction: row;
  gap: ${space.container};
`

const StyledImage = styled.img`
  width: 400px;
  height: 100%;
  background-image: url(${image404});
  background-size: cover;
  background-position: center;
`

const ContentContainer = styled.div`
  color: ${color.gray[500]};
  display: flex;
  flex-direction: column;
  width: 300px;
`

const Title = styled.h1`
  font-size: 70px;
  font-weight: ${font.weight.bold};
  text-decoration: none;
  color: ${color.gray[800]};
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${color.green[600]};

  &:hover {
    color: ${color.gray[600]};
  }

  &:hover,
  &:focus,
  &:focus-within,
  &:active {
    outline: none;
    text-decoration: underline;
  }
`

export const NotFound = () => {
  return (
    <>
      <NotFoundContainer>
        <StyledImage src={image404} alt='image404' />

        <ContentContainer>
          <Title>404</Title>
          <p>
            Parece que você chegou onde não devia, melhor{' '}
            <StyledLink to={'/dragon'}>voltar para a página inicial</StyledLink>
            .
          </p>
        </ContentContainer>
      </NotFoundContainer>
    </>
  )
}
