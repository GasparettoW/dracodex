import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Api from '@/api'
import {
  Action,
  Container,
  DragonContainer,
  Icon,
  PageContainer,
  Title,
} from '@/styles'
import { Dragon as DragonType } from '@/common/types'
import { LoadPage } from '@/components/LoadPage'
import { DragonCard } from '@/components/Dragon/DragonCard'

const Header = styled(Container)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 650px;
`

const sortByNameAsc = (a: any, b: any) => a.name.localeCompare(b.name)

export const DragonList = () => {
  const [dragons, setDragons] = useState<DragonType[]>([])
  const [loading, setLoadingState] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    Api.Dragon.getAll()
      .then(setDragons)
      .finally(() => setLoadingState(false))
  }, [])

  return (
    <>
      <LoadPage loading={loading}></LoadPage>
      <PageContainer>
        <Header>
          <Title>Seus Dragões</Title>
          <Action
            onClick={() => {
              navigate('/dragon/new')
            }}
          >
            <Icon className='fa-solid fa-plus'></Icon>
            Criar novo dragão
          </Action>
        </Header>
        <DragonContainer>
          {dragons.sort(sortByNameAsc).map(({ id, name, type }: DragonType) => (
            <DragonCard
              key={id}
              id={id}
              title={name}
              tag={type}
              to={`/dragon/${id}`}
            ></DragonCard>
          ))}
        </DragonContainer>
      </PageContainer>
    </>
  )
}
