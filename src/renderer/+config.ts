import vikeReact from 'vike-react/config'

export default {
  extends: [vikeReact],
  passToClient: ['pageProps', 'urlOriginal'],
  prerender: true,
}