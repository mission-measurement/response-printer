import React from 'react'
import { Text, View, Image, Source } from '@react-pdf/renderer'
import styles from '../../styles'


const IndexEntry = (props) => {

  const { name, subsections } = props

  return (
    <View style={styles.header}>
      <View style={styles.index}>
        <Text style={{fontFamily: 'Helvetica-Bold'}}>{name}</Text>
        {
          subsections.map((subsection, i) => {
            return <Text>{String.fromCharCode(i + 97) + ' ' + subsection.name}</Text>
          })
        }
      </View>
    </View>
  )
}

export default IndexEntry
