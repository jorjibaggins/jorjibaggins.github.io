export type PageContextServer = {
  Page: (pageProps: any) => React.ReactElement
  pageProps: any
  urlOriginal: string
  exports: {
    documentProps?: {
      title?: string
      description?: string
    }
  }
}

export type PageContextClient = {
  Page: (pageProps: any) => React.ReactElement
  pageProps: any
}