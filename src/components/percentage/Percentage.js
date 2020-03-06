import React from 'react'
import { Text } from '@react-pdf/renderer'


const Percentage = (props) => {
  const { object } = props
  const answer = object.responsevalue

  return (
    <>
      <Text>{object.questionnumber + '. ' + object.questionbody}</Text>
      {answer.map(option => { return <Text>{option ? option.option.text + ': ' + option.value + '%' : 'Not available'}</Text>})}
    </>
  )
}

export default Percentage
