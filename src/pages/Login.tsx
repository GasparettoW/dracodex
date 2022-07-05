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
  ErrorMessage,
} from '../styles'
import logo from '../assets/favicon.svg'
import { Input } from '../components/Input'
import { useRef, useContext, useState, useEffect } from 'react'
import { AuthContext } from '../contexts/auth'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const userRef = useRef<HTMLInputElement>()
  const errorRef = useRef<HTMLInputElement>()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    userRef.current?.focus()
  }, [])

  useEffect(() => {
    setErrorMessage('')
  }, [username, password])

  return (
    <>
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
              <ErrorMessage
                ref={errorRef}
                className={errorMessage ? 'error' : 'isHidden'}
              >
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
    </>
  )
}
