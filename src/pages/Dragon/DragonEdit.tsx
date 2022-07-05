import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Api from '@/api'
import {
  OptionBar,
  ActionBar,
  Action,
  Container,
  Field,
  Icon,
  Label,
  Id,
  CoverImg,
} from '@/styles'
import { border, color, space } from '@/styles/variables'
import { LoadPage } from '@/components/LoadPage'
import { Input } from '@/components/Input'
import placeholder from '@/assets/placeholder-dragon.png'

const CardContainer = styled(Container)`
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

const ActionBarStyled = styled(ActionBar)`
  align-items: flex-end;
`

export const DragonEdit = (): JSX.Element => {
  const { dragonId } = useParams()
  const [loading, setLoadingState] = useState(true)
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    if (!dragonId) {
      return navigate('/dragon')
    }
    Api.Dragon.get(dragonId)
      .then((dragon) => {
        setName(dragon.name)
        setType(dragon.type)
      })
      .finally(() => setLoadingState(false))
  }, [])

  return (
    <>
      <LoadPage loading={loading}></LoadPage>
      <CoverImg src={placeholder}></CoverImg>
      <CardContainer>
        <Action
          type='danger'
          onClick={() => {
            navigate(`/dragon/${dragonId}`)
          }}
        >
          <Icon className='fa-solid fa-arrow-left'></Icon>
          cancelar e voltar
        </Action>
        <OptionBar>
          <Id>#{dragonId}</Id>
        </OptionBar>
        <Field>
          <Label htmlFor='dragonName'>Nome</Label>
          <Input
            value={name}
            name='dragonName'
            prefixIcon='dragon'
            inputSize='lg'
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
            inputSize='sm'
            required
            onChange={(e) => {
              setType(e.target.value)
            }}
          />
        </Field>
        <ActionBarStyled>
          <Action
            onClick={() => {
              Api.Dragon.update({
                id: dragonId,
                name,
                type,
                updatedAt: new Date().toISOString(),
              }).then((dragon) => {
                navigate(`/dragon/${dragon.id}`)
              })
            }}
          >
            <Icon className='fa-solid fa-check'></Icon>
            concluir edição
          </Action>
        </ActionBarStyled>
      </CardContainer>
    </>
  )
}
