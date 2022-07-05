import { useState } from 'react'
import styled from 'styled-components'
import { InputProps } from '../common/types'
import { color, space, font, border } from '../styles/variables'

const InputStyled = styled.input`
  width: ${({ size }: any) => {
    if (size === 'sm') {
      return '130px'
    }
    if (size === 'md') {
      return '240px'
    }
    if (size === 'lg') {
      return '300px'
    }
    return '100%'
  }};
  border: 1px solid;
  border-color: ${color.gray[300]};
  border-radius: ${border.radius.sm};
  padding: ${space.sm} ${space.md};
  padding-left: 36px;
  font-size: ${font.size.md};
  color: ${color.black};
  transition: all 0.2s ease-in-out;

  &:focus:not(hover) {
    border: 1px solid ${color.green[700]};
    outline: none;
  }
  &:hover {
    border: 1px solid;
    border-color: ${color.gray[400]};
  }
`

const PrefixIcon = styled.i`
  position: absolute;
  left: ${space.md};
  top: calc(50% - 0.5em);
  color: ${color.gray[400]};
  font-size: ${font.size.md};
`

const SufixIcon = styled.i`
  position: absolute;
  right: ${space.md};
  top: calc(50% - 0.5em);
  color: ${color.gray[400]};
  font-size: ${font.size.md};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`

const InputWrapper = styled.div`
  position: relative;
`

export const Input = ({
  type = 'text',
  name,
  id,
  placeholder,
  value,
  prefixIcon,
  sufixIcon,
  onChange,
  ref,
  size,
  required,
}: InputProps) => {
  const [hidePassword, setHidePassword] = useState(true)
  const [InputType, setInputType] = useState(type)
  if (type === 'password') {
    sufixIcon = hidePassword ? 'eye' : 'eye-slash'
  }
  return (
    <InputWrapper>
      <PrefixIcon className={'fa-solid fa-' + prefixIcon}></PrefixIcon>
      <InputStyled
        type={InputType}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        ref={ref}
        size={size}
        required={required}
      />
      <SufixIcon
        className={'fa-solid fa-' + sufixIcon}
        onClick={() => {
          setHidePassword(!hidePassword)
          if (type === 'password') {
            setInputType(hidePassword ? 'text' : 'password')
          }
        }}
      ></SufixIcon>
    </InputWrapper>
  )
}
