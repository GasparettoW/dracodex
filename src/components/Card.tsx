import styled from 'styled-components'
import { CardProps } from '../common/types'
import { border, color, space } from '../styles/variables'

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${space.xs};
  padding-bottom: ${space.md};
  border-radius: ${border.radius.md};
  border: 1px solid ${color.gray[300]};
  overflow: hidden;

  transition: all 0.2s ease-in-out;
  &:hover {
  }
`

export const Card = ({ children, ...props }: CardProps) => {
  return <StyledCard {...props}>{children}</StyledCard>
}
