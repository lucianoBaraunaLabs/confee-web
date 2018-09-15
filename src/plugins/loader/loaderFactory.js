const loaderFactory = context => {
  return {
    show () {
      console.log({ show: this })
      context.$store.dispatch('showLoader')
    },
    hide () {
      console.log({ hide: this })
      context.$store.dispatch('hideLoader')
    }
  }
}

export default loaderFactory
