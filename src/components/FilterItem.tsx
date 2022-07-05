import { useContext } from 'react'
import styled from 'styled-components'
import { FilterContext } from '../contexts/filter'
import { Icon } from '../styles'
import { space } from '../styles/variables'

const FilterItemStyled = styled.div`
  display: flex;
  cursor: pointer;
  gap: ${space.sm};
  align-items: center;
  user-select: none;

  &:hover {
    text-decoration: underline;
  }
`

const IconBox = styled.div`
  display: flex;
  align-items: center;
`

const FilterIcon = styled(Icon)`
  width: ${space.xs};
  position: absolute;
`

export const FilterItem = ({
  children,
  onClick,
  order,
  name,
  ...props
}: any) => {
  const { activeFilter } = useContext(FilterContext)
  return (
    <>
      <FilterItemStyled {...props} onClick={onClick}>
        {children}
        <IconBox>
          {activeFilter === name && (
            <FilterIcon className={`fa-solid fa-arrow-${order}`}></FilterIcon>
          )}
        </IconBox>
      </FilterItemStyled>
    </>
  )
}
