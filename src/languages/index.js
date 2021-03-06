import * as languages from './languages'
import ui from '../states/ui.state'

export const getLanguage = () => languages[ui.language] || languages.ptBR

export const language = getLanguage()
