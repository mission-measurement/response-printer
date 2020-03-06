import React from 'react'
import { Text } from '@react-pdf/renderer'


const Currency = (props) => {
  const {object} = props
  const answer = object.responsevalue

  return (
    <>
      <Text>{object.questionnumber + '. ' + object.questionbody}</Text>
      <Text>{answer.currency + ': ' + answer.total}</Text>
    </>
  )
}

export default Currency
