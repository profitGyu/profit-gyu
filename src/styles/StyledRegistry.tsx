import React from 'react'
import { StyleSheetManager } from 'styled-components'

const StyledComponentsRegistry = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return <StyleSheetManager>{children}</StyleSheetManager>
}

export default StyledComponentsRegistry