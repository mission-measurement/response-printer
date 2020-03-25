import React from 'react'
import { Text, View } from '@react-pdf/renderer'
import ComponentChooser from '../ComponentChooser'
import styles from '../../styles'

const Subsection = (props) => {
  const { subsection, number } = props

  return (
    <>
    <View style={styles.subsection}>
      <Text style={{fontFamily: 'Helvetica-Bold', fontSize: 9, paddingLeft: 5}}>{String.fromCharCode(number + 97) + ' ' + subsection.name}</Text>
      {subsection.questions.map(question => {
        return (
          <View style={{margin: 5, paddingLeft: 10}}>
            <ComponentChooser type={question.inputtype} object={question} />
          </View>
        )
      })}
    </View>
    </>
  )
}


export default Subsection
