import React from 'react'
import { Text } from '@react-pdf/renderer'


const Multiselect = (props) => {
  const { object } = props
  const answer = object.responsevalue

  return (
    <>
      <Text>{object.questionnumber + '. ' + object.questionbody}</Text>
      <Text>{answer.map(selection => {return (selection ? (selection.name ? selection.name : selection.text) : 'Not found')}).join(', ')}</Text>
    </>
  )
}

export default Multiselect
