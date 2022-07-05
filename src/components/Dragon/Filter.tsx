import { useContext, useState } from 'react'
import styled from 'styled-components'
import { FilterContext } from '@/contexts/filter'
import { color, font, space } from '@/styles/variables'
import { FilterItem } from '../FilterItem'

const Section = styled.section`
  display: flex;
  gap: ${space.lg};
  border-top: 1px solid ${color.gray[300]};
  width: 650px;
  margin-bottom: ${space.xxl};
  padding-top: ${space.sm};
  font-size: ${font.size.md};
  flex-direction: row;

  &::before {
    content: 'Ordenar por: ';
  }
`

const nextOrderFrom: any = {
  '': 'down',
  down: 'up',
  up: '',
}

const filterActionDict: any = {
  '': '',
  up: 'asc',
  down: 'desc',
}

export const Filter = () => {
  const [filterIcon, alterFilterIcon] = useState<string>('')
  const [filters] = useState<Object[]>([
    {
      id: 'nome',
      name: 'Nome',
      onClick: (name: string, sortOrder: string) => {
        // console.log(name)
        // console.log(sortOrder)
      },
    },
    {
      id: 'tipo',
      name: 'Tipo',
      onClick: (e: Event, sortOrder: string) => {
        // console.log(e?.target.textContent, sortOrder)
      },
    },
    {
      id: 'id',
      name: 'Id',
      onClick: (e: Event, sortOrder: string) => {
        // console.log(e?.target.textContent, sortOrder)
      },
    },
  ])
  const { activeFilter, setFilterTo, order, setOrderTo } =
    useContext(FilterContext)

  // useEffect(() => {
  //   console.log(activeFilter)
  //   console.log(order)
  // }, [activeFilter, order])
  const newOrder = order === 'down' ? 'up' : 'down'

  return (
    <>
      <Section>
        {filters.map(({ id, name, onClick }: any) => (
          <FilterItem
            key={id}
            name={name}
            order={newOrder}
            onClick={(e: Event) => {
              setOrderTo(newOrder)

              setFilterTo(name)
              alterFilterIcon(order)
              onClick(name, order)
            }}
          >
            {name}
          </FilterItem>
        ))}
      </Section>
    </>
  )
}
