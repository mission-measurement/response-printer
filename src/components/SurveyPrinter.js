import React from 'react'
import useResponseContext from '../hooks/useResponseContext'
import globalVars from '../helpers/globalVars'

import styles from '../styles'
import { Text } from '@react-pdf/renderer'

import Metadata from './metadata/Metadata'
import Section from './sections/Section'
import Header from './header/Header'

const SurveyPrinter = () => {
  const data = useResponseContext()

  //

  return (
    <>
      <Header />
      <Metadata
        programname={globalVars.getValueByFieldName('programname', data.globalvariables)}
        location={globalVars.getValueByFieldName('location', data.globalvariables)}
        targetedoutcomes={globalVars.getValueByFieldName('targetedoutcomes', data.globalvariables)}
        classification={globalVars.getValueByFieldName('classification', data.globalvariables)}
        primarybeneficiary={globalVars.getValueByFieldName('primarybeneficiary', data.globalvariables)}
        targetedoutcomes={globalVars.getValueByFieldName('targetedoutcomes', data.globalvariables)}
        primaryoutcome={globalVars.getValueByFieldName('primaryoutcome', data.globalvariables)}
      />
      {
        data.jsonformat.map(
          section => {
            return <Section data={section} />
          }
        )
      }
    </>
  )


}

export default SurveyPrinter
