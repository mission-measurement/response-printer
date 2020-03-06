import React from 'react'
import { Text } from '@react-pdf/renderer'


const DateRange = (props) => {
  const { object } = props

  const answer = object.responsevalue

  return (
    <>
      <Text>{object.questionnumber + '. ' + object.questionbody}</Text>
      <Text>{answer.start + ' - ' + answer.end}</Text>
    </>
  )

}


export default DateRange
