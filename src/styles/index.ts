import styled, { createGlobalStyle } from 'styled-components'
import { color, space, font, border, size, transition } from './variables'

export const Reset = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${font.family.default};
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const LogoContainer = styled(Container)`
  gap: ${space.lg};
`

export const FullPageContainer = styled(Container)`
  min-height: 100vh;
  gap: ${space.sm};
`

export const PageContainer = styled(Container)`
  padding: ${space.section};
  gap: ${space.sm};
`

export const LoginContainer = styled(Container)`
  border: 1px solid ${color.gray[300]};
  border-radius: ${border.radius.lg};
  padding: ${space.container} ${space.section};
  gap: ${space.section};
  width: ${size.container};
`

export const FormContainer = styled(Container)`
  gap: ${space.lg};
`

export const DragonContainer = styled(Container)`
  gap: ${space.lg};
  width: 650px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const Brand = styled.h1`
  font-family: ${font.family.brand};
  font-size: ${font.size.brand};
  color: ${color.black};
`

export const Logo = styled.img`
  height: 160px;
`

export const CoverImg = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`

export const Title = styled.h1`
  color: ${color.black};
  font-size: ${font.size.title};
`

export const Subtitle = styled.p`
  color: ${color.gray[400]};

  &.center {
    text-align: center;
  }
`

export const Field = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${space.xs};

  &:not(:last-child) {
    margin-bottom: ${space.sm};
  }

  & input {
    margin-left: auto;
  }
`

export const Button = styled.button`
  cursor: pointer;
  padding: ${space.md} ${space.xl};
  color: ${color.white};
  background: ${color.green[500]};
  border: none;
  border-radius: ${border.radius.sm};
  font-size: ${font.size.lg};
  font-weight: bold;
  transition: all 0.2s ease-in-out;

  &:focus,
  &:hover {
    background: ${color.green[600]};
    box-shadow: 0 0 0 2px ${color.white}, 0 0 0 5px ${color.green[500]};
    outline: none;
  }
`

export const Input = styled.input`
  width: 100%;
  border: 1px solid ${color.gray[300]};
  border-radius: ${border.radius.sm};
  padding: ${space.sm} ${space.md};
  font-size: ${font.size.md};
  color: ${color.black};
  transition: all 0.2s ease-in-out;

  &:focus:not(hover) {
    border: 1px solid ${color.green[700]};
    outline: none;
  }
  &:hover {
    border: 1px solid;
    border-color: ${color.gray[400]};
  }
`

export const Label = styled.label<{ htmlFor: string }>`
  font-size: ${font.size.md};
  font-weight: regular;
  color: ${color.gray[800]};
`

export const ErrorMessage = styled.p`
  font-size: ${font.size.md};
  color: ${color.red[600]};
`

export const ActionBar = styled.div`
  margin-top: ${space.xxl};
  padding-top: ${space.md};
  border-top: 1px solid ${color.gray[200]};
  width: 100%;
  display: flex;
  flex-direction: column;
`

type ActionProps = {
  type?: 'danger'
}
export const Action = styled.div<ActionProps>`
  width: fit-content;
  color: ${color.gray[600]};
  font-size: ${font.size.md};
  gap: ${space.sm};
  cursor: pointer;

  & i {
    transition: ${transition.fast};
  }

  &:hover {
    color: ${color.black};
    text-decoration: underline;

    & i {
      color: ${({ type }) =>
        type === 'danger' ? color.red[600] : color.blue[500]};
    }
  }
`

export const Icon = styled.i`
  font-size: ${font.size.xs};
  margin-right: ${space.sm};
`

export const Id = styled.div`
  font-size: ${font.size.lg};
  color: ${color.gray[400]};
  font-weight: ${font.weight.bold};
  letter-spacing: ${font.letterSpacing.sm};
  text-transform: uppercase;
`
export const OptionBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: ${space.xxl} 0 ${space.sm};
`
