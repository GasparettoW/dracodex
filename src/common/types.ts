import { MutableRefObject } from 'react'

export interface Dragon {
  name: string
  type: string
  id?: string | null
  createdAt?: string | number
  updatedAt?: string
  histories?: History[]
}

export interface DragonTypes {
  fogo: string
  agua: string
  areia: string
  noturno: string
  venenoso: string
}

export type InputProps = {
  type?: string
  name?: string
  id?: string
  placeholder?: string
  value?: string
  prefixIcon?: string
  sufixIcon?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  innerref?:
    | React.Ref<HTMLInputElement>
    | MutableRefObject<HTMLInputElement | undefined>
  ref?:
    | React.Ref<HTMLInputElement>
    | MutableRefObject<HTMLInputElement | undefined>
  inputSize?: 'sm' | 'md' | 'lg'
  required?: boolean
}

export type CardProps = {
  children?: React.ReactNode
  title?: string
  description?: string
  image?: string
}

export type DragonCardProps = CardProps & {
  id?: string | null
  to: string
  tag: string
}

export type User = {
  username: string
  password: string
}

export type Errors = {
  username?: string
  password?: string
}

export type SortSwitcher = {
  sort: string
  order?: 'asc' | 'desc'
}
