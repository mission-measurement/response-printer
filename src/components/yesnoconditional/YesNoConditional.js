import React from 'react'
import { Text } from '@react-pdf/renderer'
import ComponentChooser from '../ComponentChooser'


const YesNoConditional = (props) => {
  const {object} = props
  const subquestions = object.subquestions

  return subquestions.map(
    subquestion => {
      return <ComponentChooser type={subquestion.inputtype} object={subquestion} />
    }
  )
}

export default YesNoConditional
