import React from 'react'
import { Text, View } from '@react-pdf/renderer'
import ComponentChooser from '../ComponentChooser'
import styles from '../../styles'

const Subsection = (props) => {
  const { data } = props

  return (
    <>
    <View style={styles.subsection}>
      <Text style={{fontWeight: 'bold', fontSize: 9}}>{data.name}</Text>
      {data.questions.map(question => {
        return (
          <View style={{margin: 5}}>
            <ComponentChooser type={question.inputtype} object={question} />
          </View>
        )
      })}
    </View>
    </>
  )
}


export default Subsection
