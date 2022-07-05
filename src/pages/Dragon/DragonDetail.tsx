import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Api from '@/api'
import { Dragon } from '@/common/types'
import {
  OptionBar,
  ActionBar,
  Action,
  Container,
  Icon,
  Id,
  CoverImg,
  Subtitle,
} from '@/styles'
import { border, color, font, space } from '@/styles/variables'
import { LoadPage } from '@/components/LoadPage'
import { Tag } from '@/components/Tag'
import placeholder from '@/assets/placeholder-dragon.png'

const CardContainer = styled(Container)`
  background: ${color.white};
  width: 50%;
  margin: 0 auto;
  top: -100px;
  position: relative;
  z-index: 1;
  padding: ${space.xxl} ${space.container} ${space.section};
  border-radius: ${border.radius.lg};
  box-shadow: 0px -8px 4px -2px ${color.gray[200]};
  align-items: flex-start;
`

const ActionBarStyled = styled(ActionBar)`
  gap: ${space.xs};
`

const Title = styled.h4`
  font-size: ${font.size.title};
  font-weight: ${font.weight.bold};
  text-decoration: none;
`

const P = styled.p`
  font-size: ${font.size.sm};
  margin-top: ${space.xs};
  color: ${color.gray[500]};
`

export const DragonDetail = (): JSX.Element => {
  const { dragonId } = useParams()
  const navigate = useNavigate()
  if (!dragonId) {
    return <>{navigate('/dragon')}</>
  }

  const [loading, setLoadingState] = useState(true)
  const [dragon, setDragon] = useState<Dragon>()

  useEffect(() => {
    Api.Dragon.get(dragonId)
      .then(setDragon)
      .finally(() => setLoadingState(false))
  }, [])

  return (
    <>
      <LoadPage loading={loading}></LoadPage>
      <CoverImg src={placeholder}></CoverImg>
      <CardContainer>
        <Action
          onClick={() => {
            navigate('/dragon')
          }}
        >
          <Icon className='fa-solid fa-arrow-left'></Icon>
          voltar ao menu
        </Action>
        <OptionBar>
          <Id>#{dragon?.id}</Id>
          <Tag type={dragon?.type}>{dragon?.type}</Tag>
        </OptionBar>
        <Title>{dragon?.name}</Title>
        {dragon?.createdAt && (
          <P>{`Criado em 
        ${new Date(dragon.createdAt).toLocaleDateString('pt-BR')}
         às 
         ${new Date(dragon.createdAt).toLocaleTimeString('pt-BR')}
         `}</P>
        )}
        {dragon?.updatedAt && (
          <P>{`Alterado em 
        ${new Date(dragon.updatedAt).toLocaleDateString('pt-BR')}
         às 
         ${new Date(dragon.updatedAt).toLocaleTimeString('pt-BR')}
         `}</P>
        )}
        <ActionBarStyled>
          <Action
            onClick={() => {
              navigate(`/dragon/${dragonId}/edit`)
            }}
          >
            <Icon className='fa-solid fa-pencil-alt'></Icon>
            editar dragão
          </Action>
          <Action
            type='danger'
            onClick={() => {
              Api.Dragon.remove(dragonId).then(() => navigate('/dragon'))
            }}
          >
            <Icon className='fa-solid fa-trash-alt'></Icon>
            remover dragão
          </Action>
        </ActionBarStyled>
      </CardContainer>
    </>
  )
}
