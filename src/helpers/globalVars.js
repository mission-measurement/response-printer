function getValueByFieldName(name, data){
  switch (name) {
    case 'programname':
      return data.programname
    case 'location':
      return data.locations.map(location => location.name).join(', ')
    case 'primarybeneficiary':
      return data.primarybeneficiary.name
    case 'classification':
      return data.classification.name
    case 'targetedoutcomes':
      return data.targetedoutcomes.map(el => el.outcome.name).join(', ')
    case 'primaryoutcome':
      return data.primaryoutcome.outcome.name
    default:
  }
}

function getMetaVariables(data){
}


export default {
  getValueByFieldName,
  getMetaVariables
}
