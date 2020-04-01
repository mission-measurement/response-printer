import React from 'react'
import {Currency, DateRange, YesNoRadio, YesNoConditional, Number, Textarea, Multiselect, Dropdown, Activites, PrimaryOutcome, TargetedOutcomes, PrimaryReach, Location, PercentInput, Percentage, DropdownWithTextArea, GeneImplementation, ListSelect, TopGenes } from './Components'
import { Text } from '@react-pdf/renderer'

const ComponentChooser = (props) => {
  const {type, object} = props

  switch (type) {
    case 'currency':
      return <Currency object={object} />
    case 'daterange':
      return <DateRange object={object} />
    case 'yesnoradio':
      return <YesNoRadio object={object} />
    case 'primary-outcome':
      return <PrimaryOutcome object={object} />
    case 'targeted-outcomes':
      return <TargetedOutcomes object={object} />
    case 'textarea':
      return <Textarea object={object} />
    case 'activities':
      return <Activites object={object} />
    case 'top-genes':
      return <TopGenes object={object} />
    case 'number':
      return <Number object={object} />
    case 'primary-reach':
      return <PrimaryReach object={object} />
    case 'listselect':
      return <ListSelect object={object} />
    case 'percentage':
      return <Percentage object={object} />
    case 'percentinput':
      return <PercentInput object={object} />
    case 'gene-implementation':
      return <GeneImplementation object={object} />
    case 'yesnoconditional':
      return <YesNoConditional object={object} />
    case 'location':
      return <Location object={object} />
    case 'multiselect':
      return <Multiselect object={object} />
    case 'dropdown':
      return <Dropdown object={object} />
    case 'dropdown-with-textarea':
      return <DropdownWithTextArea object={object} />
    default:
      return <><Text style={{color: 'blue'}}>{type + ' not found'}</Text></>
  }

}

export default ComponentChooser
