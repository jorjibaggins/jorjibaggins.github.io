import vikeReact from 'vike-react/config'

export default {
  extends: [vikeReact],
  passToClient: ['pageProps'],
  prerender: true,
  meta: { 
    Page: {
      env: { server: true, client: false }
    }
  }
}