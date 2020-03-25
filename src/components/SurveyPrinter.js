import React from 'react'
import useResponseContext from '../hooks/useResponseContext'
import globalVars from '../helpers/globalVars'
import surveyVars from '../helpers/surveyVars'

import styles from '../styles'
import { Text } from '@react-pdf/renderer'

import Metadata from './metadata/Metadata'
import Section from './sections/Section'
import Header from './header/Header'
import Index from './index/Index'

const SurveyPrinter = () => {
  const data = useResponseContext()

  //

  return (
    <>
      <Header
        organization={'My organization'}
        programname={globalVars.getValueByFieldName('programname', data.globalvariables)}
        reportingperiod={globalVars.getValueByFieldName('reportingperiod', data.jsonformat)}
      />
      <Index
        structure={data.jsonformat}
      />
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
          (section, i) => {
            return <Section section={section} number={i + 1} />
          }
        )
      }

      <Text style={{marginLeft: 218, paddingTop: 20}} render={({ pageNumber, totalPages }) => (
        `Page ${pageNumber} / ${totalPages} - printed ${new Date().toLocaleString('en-US')}`
      )} fixed />
    </>
  )


}

export default SurveyPrinter
