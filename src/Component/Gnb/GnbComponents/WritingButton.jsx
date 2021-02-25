import React from 'react'
import { Button } from '../../TagStyle/Button'
import Icon from '../../TagStyle/Icon'

const WritingButton = () => {
  return(
    <Button style={{width: 88+"px", marginLeft: 16+"px"}}>
      글쓰기
      <Icon
        icon="chevron"
        size={10} 
        color="white"/>
    </Button>
  )
}

export default WritingButton