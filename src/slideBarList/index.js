import htmlRouter from './htmlPart'
import cssRouter from './cssPart'
import jsRouter from './jsPart'
import pluginsRouter from './pluginsPart'

const slideBarList = [...htmlRouter, ...cssRouter, ...jsRouter, ...pluginsRouter]

export default slideBarList
