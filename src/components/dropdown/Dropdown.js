import React from 'react'
import { Text } from '@react-pdf/renderer'


const Dropdown = (props) => {
  const {object} = props
  const answer = object.responsevalue

  return (
    <>
      <Text>{object.questionnumber + '. ' + object.questionbody}</Text>
      <Text>{answer.text}</Text>
    </>
  )
}

export default Dropdown
