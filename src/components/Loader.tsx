import styled from 'styled-components'
import { color } from '@/styles/variables'

export const Loader = styled.div`
  border: 6px solid #f3f3f3;
  border-top-color: ${color.green[200]};
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`
