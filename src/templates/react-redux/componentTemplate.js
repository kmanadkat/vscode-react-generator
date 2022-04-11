const getComponentTemplate = (componentName, sliceName) => {
    return `import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import structuredSelector from './redux/selector';
import use${componentName} from './hooks/use${componentName}';
import { parseData } from './utils';
import "./styles/${componentName}.scss"

/**
 * ${componentName} description
 */
const ${componentName} = ({ children }) => {
  const ${sliceName}SliceData = useSelector(structuredSelector) 
  const {increment, decrement} = useCounter(${sliceName}SliceData.${sliceName}Data)
  return (
    <div className='${componentName}-wrapper'>
      <h2>${sliceName}: {parseData(${sliceName}SliceData.${sliceName}Data)}</h2>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
      {children}
    </div>
  )
}

${componentName}.propTypes = {
  children: PropTypes.any
}

export default ${componentName}
`
}

module.exports = getComponentTemplate
