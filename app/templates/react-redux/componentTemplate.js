const getComponentTemplate = (componentName) => {
    return `import React from 'react'
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import "./styles/${componentName}.scss"

/**
 * ${componentName} description
 */
const ${componentName} = () => {
  return (
    <div>${componentName}</div>
  )
}

${componentName}.propTypes = {}

export default ${componentName}
`
}

module.exports = getComponentTemplate