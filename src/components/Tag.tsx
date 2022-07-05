import styled from 'styled-components'
import { border, color, font, space } from '../styles/variables'
import { DragonTypes } from '../common/types'

const typeColor: DragonTypes = {
  fogo: color.red[500],
  agua: color.blue[500],
  areia: color.orange[400],
  noturno: color.gray[500],
  venenoso: color.green[600],
}

const StyledTag = styled.div`
  background-color: ${(props: { type: string }) => typeColor[props.type]};
  border-radius: ${border.radius.sm};
  color: ${color.white};
  letter-spacing: ${font.letterSpacing.sm};
  font-size: ${font.size.sm};
  padding: ${space.xxs} ${space.xs};
  width: fit-content;
  text-transform: capitalize;
`

export const Tag = ({ type }: any) => {
  return (
    <>
      <StyledTag type={type}>{type}</StyledTag>
    </>
  )
}
