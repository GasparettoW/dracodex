import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Api from '@/api'
import { Action, Container, Field, Icon, Label } from '@/styles'
import { border, color, space } from '@/styles/variables'
import { Input } from '@/components/Input'
import placeholder from '@/assets/placeholder-dragon.png'

const Img = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`

const DragonContainer = styled(Container)`
  background: ${color.white};
  width: 50%;
  margin: 0 auto;
  top: -100px;
  position: relative;
  z-index: 1;
  padding: ${space.xl} ${space.container} ${space.section};
  border-radius: ${border.radius.lg};
  box-shadow: 0px -8px 4px -2px ${color.gray[200]};
  align-items: flex-start;
`

const ActionBar = styled.div`
  margin-top: ${space.xxl};
  padding-top: ${space.md};
  border-top: 1px solid ${color.gray[200]};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const Header = styled.div`
  padding: ${space.md} 0 ${space.lg};
`

export const DragonNew = () => {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [type, setType] = useState('')

  return (
    <>
      <Img src={placeholder}></Img>
      <DragonContainer>
        <Header>
          <Action
            type='danger'
            onClick={() => {
              navigate(`/dragon`)
            }}
          >
            <Icon className='fa-solid fa-arrow-left'></Icon>
            cancelar e voltar
          </Action>
        </Header>
        <Field>
          <Label htmlFor='dragonName'>Nome</Label>
          <Input
            value={name}
            name='dragonName'
            prefixIcon='dragon'
            size='lg'
            required
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
        </Field>
        <Field>
          <Label htmlFor='dragonType'>Tipo</Label>
          <Input
            name='dragonType'
            value={type}
            prefixIcon='fire-flame-curved'
            size='sm'
            required
            onChange={(e) => {
              setType(e.target.value)
            }}
          />
        </Field>
        <ActionBar>
          <Action
            onClick={() => {
              Api.Dragon.create({
                name,
                type,
                createdAt: new Date().toISOString(),
              }).then((dragon) => {
                navigate(`/dragon/${dragon.id}`)
              })
            }}
          >
            <Icon className='fa-solid fa-plus'></Icon>
            criar dragão
          </Action>
        </ActionBar>
      </DragonContainer>
    </>
  )
}
