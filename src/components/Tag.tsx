import styled from 'styled-components'
import { border, color, font, space } from '../styles/variables'
import { DragonTypes } from '../common/types'
import { unstable_renderSubtreeIntoContainer } from 'react-dom'

const typeColor: DragonTypes | any | undefined = {
  fogo: color.red[500],
  agua: color.blue[500],
  areia: color.orange[400],
  noturno: color.gray[600],
  venenoso: color.green[600],
  default: color.gray[400],
}

const StyledTag = styled.div`
  background-color: ${({ type }: { type?: string }) =>
    typeColor[type || 'default'] || color.gray[400]};
  border-radius: ${border.radius.sm};
  color: ${color.white};
  letter-spacing: ${font.letterSpacing.sm};
  font-size: ${font.size.sm};
  padding: ${space.xxs} ${space.xs};
  width: fit-content;
  text-transform: capitalize;
`

export const Tag = ({
  children,
  type,
}: {
  children?: string
  type?: string
}) => {
  return <StyledTag type={type}>{children}</StyledTag>
}
