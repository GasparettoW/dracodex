import { useRef, useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import { AuthContext } from '@/contexts/auth'
import {
  Container,
  FullPageContainer,
  LogoContainer,
  LoginContainer,
  FormContainer,
  Logo,
  Title,
  Brand,
  Subtitle,
  Field,
  Button,
  Label,
} from '@/styles'
import { color, font } from '@/styles/variables'
import { Input } from '@/components/Input'
import logo from '@/assets/logo.svg'

const ErrorMessage = styled.p`
  font-size: ${font.size.md};
  color: ${color.red[600]};
`

export const Login = () => {
  const { login } = useContext(AuthContext)

  const userRef = useRef<HTMLInputElement>()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState<any>('')

  useEffect(() => {
    userRef.current?.focus()
  }, [])

  useEffect(() => {
    setErrorMessage('')
  }, [username, password])

  return (
    <FullPageContainer>
      <LoginContainer>
        <LogoContainer>
          <Logo src={logo} alt='logo'></Logo>
          <Brand>Dracodex</Brand>
        </LogoContainer>
        <FormContainer>
          <Container>
            <Title>Bem Vindo</Title>
            <Subtitle className='center'>
              Acesse sua Dracodex e gerencie todos os seus dragões
            </Subtitle>
          </Container>
          <Container>
            <Field>
              <Label htmlFor='username'>Username</Label>
              <Input
                type='text'
                name='username'
                id='username'
                prefixIcon='user-ninja'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                innerref={userRef}
              />
            </Field>
            <Field>
              <Label htmlFor='password'>Password</Label>
              <Input
                type='password'
                name='password'
                id='password'
                prefixIcon='key'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Field>
          </Container>
          <Container>
            <ErrorMessage className={!!errorMessage ? 'error' : 'isHidden'}>
              {errorMessage}
            </ErrorMessage>
          </Container>
          <Button
            type='submit'
            onClick={() => {
              const errors = login({
                username,
                password,
              })

              if (errors != null) {
                Object.values(errors).forEach(setErrorMessage)
                return
              }
            }}
          >
            Entrar
          </Button>
        </FormContainer>
      </LoginContainer>
    </FullPageContainer>
  )
}
