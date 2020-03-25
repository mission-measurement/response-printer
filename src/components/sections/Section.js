import React from 'react'
import { Text, View } from '@react-pdf/renderer'
import styles from '../../styles'

import Subsection from './Subsection'

const Section = (props) => {
  const { section, number } = props

  console.log(section)
  return (
    <>
      <View style={styles.subsection}>
        <Text style={{fontFamily: 'Helvetica-Bold', fontSize: 9, marginBottom: 5}}>{number + '. ' + section.sectionname}</Text>
        {section.subsections.map((subsection, i)=> {
          return <Subsection subsection={subsection} number={i} />
        })}
      </View>
    </>
  )
}


export default Section
