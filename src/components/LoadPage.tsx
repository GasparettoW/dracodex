import styled from 'styled-components'
import { FullPageContainer } from '../styles'
import { color } from '../styles/variables'
import { Loader } from './Loader'

const LoadPageStyled = styled(FullPageContainer)`
  position: absolute;
  transition: all 0.8s ease-in-out;
  background: ${color.white};
  z-index: 999;

  &.loading {
    opacity: 1;
    top: 0;
  }
  &.isHidden {
    opacity: 0;
    top: -100%;
  }
`

export const LoadPage = ({ loading }: { loading: boolean }) => {
  return (
    <LoadPageStyled className={loading ? 'loading' : 'isHidden'}>
      <Loader></Loader>
    </LoadPageStyled>
  )
}
