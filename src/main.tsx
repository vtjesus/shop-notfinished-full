import '@/assets/scss/helpers.scss'
import '@/assets/scss/fonts.scss'
import '@/assets/scss/animations.scss'
import '@/assets/scss/global.scss'
import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from '@/routes'
import { appConfig } from './config'

export const createRoot = ViteReactSSG({ routes, basename: appConfig.urlPrefix })
