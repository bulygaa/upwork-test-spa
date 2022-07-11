import React, { FC } from 'react'

interface Props {
    children: React.ReactNode
}

const Public: FC<Props> = ({children}) => {
  return (
    <>{children}</>
  )
}

export default Public