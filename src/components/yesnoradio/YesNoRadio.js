import React from 'react'
import { Text } from '@react-pdf/renderer'



const YesNoRadio = (props) => {
  const { object } = props
  const answer = object.responsevalue

  return (
    <>
      <Text>{object.questionnumber + '. ' + object.questionbody}</Text>
      <Text>{answer}</Text>
    </>
  )
}

export default YesNoRadio
