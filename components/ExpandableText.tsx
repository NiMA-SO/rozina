import React, { Fragment, ReactNode } from 'react'

interface Props{
    children: string | undefined ;
    limitText: number;
}

const ExpandableText = ({children, limitText} : Props) => {
    const summary = children?.substring(0,limitText)
    if(!children) return null
  if(children.length >= limitText) return (
    <Fragment>
        {summary}...
    </Fragment>
  )
}

export default ExpandableText