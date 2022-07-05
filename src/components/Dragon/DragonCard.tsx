import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { DragonCardProps } from '@/common/types'
import placeholder from '@/assets/placeholder-dragon.png'
import { color, font, space, transition } from '@/styles/variables'
import { Card } from '../Card'
import { Tag } from '../Tag'

const OptionBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Id = styled.div`
  font-size: ${font.size.sm};
  color: ${color.gray[400]};
  font-weight: ${font.weight.bold};
  letter-spacing: ${font.letterSpacing.sm};
  text-transform: uppercase;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${color.black};
`

const StyledDragonCard = styled(Card)`
  width: 300px;
  min-width: 300px;
  max-width: 50%;
  transition: ${transition.slow};

  &:hover {
    background-color: ${color.gray[100]};
    img {
      transform: scale(1.08);
    }
  }
`

const CardImage = styled.img`
  height: auto;
  max-height: 150px;
  object-fit: cover;
  transition: ${transition.slow};
  cursor: pointer;
`

const CardContent = styled.div`
  padding: ${space.sm} ${space.md} ${space.xs};
`

const Title = styled.h4`
  font-size: ${font.size.xl};
  font-weight: ${font.weight.bold};
  text-decoration: none;
  width: fit-content;
`

export const DragonCard = ({
  id,
  title,
  description,
  image,
  tag,
  to,
}: DragonCardProps) => {
  const navigate = useNavigate()
  return (
    <>
      <StyledDragonCard>
        <CardImage
          src={image || placeholder}
          alt={title}
          onClick={() => {
            navigate(to)
          }}
        />
        <CardContent>
          <OptionBar>
            <Id>#{id}</Id>
            <Tag type={tag}>{tag}</Tag>
          </OptionBar>
          <StyledLink key={id} to={to}>
            <Title>{title}</Title>
          </StyledLink>
          <p>{description}</p>
        </CardContent>
      </StyledDragonCard>
    </>
  )
}
