import React from 'react'
import { Text, View, Image, Source } from '@react-pdf/renderer'
import styles from '../../styles'

import IndexEntry from './IndexEntry'

const Index = (props) => {
  const { structure } = props

  return (
    <View style={styles.header}>
      <View style={styles.index}>
        {
          structure.map(section => {
            return <IndexEntry name={section.sectionname} subsections={section.subsections} />
          })
        }
      </View>
    </View>
  )
}

export default Index
