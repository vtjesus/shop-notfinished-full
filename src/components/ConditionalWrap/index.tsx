import { FC, PropsWithChildren } from 'react'
import { IConditionalWrap } from './props'

export const ConditionalWrap: FC<PropsWithChildren<IConditionalWrap>> = (props) => {
  return props.condition ? props.wrap(props.children) : props.unwrap ? props.unwrap(props.children) : props.children
}
