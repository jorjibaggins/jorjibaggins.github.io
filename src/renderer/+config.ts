import vikeReact from 'vike-react/config'

export default {
  extends: [vikeReact],
  passToClient: ['pageProps', 'data'],
  prerender: true,
  meta: { 
    Page: {
      env: { server: true, client: false }
    }
  }
}