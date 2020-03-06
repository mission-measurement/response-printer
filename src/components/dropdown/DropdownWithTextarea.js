import React from 'react'
import { Text } from '@react-pdf/renderer'


const DropdownWithTextArea = (props) => {
  const {object} = props
  const answer = object.responsevalue

  console.log(object)

  return (
    <>
      <Text>{object.questionnumber + '. ' + object.questionbody}</Text>
      <Text>{answer.text}</Text>
    </>
  )
}

export default DropdownWithTextArea
