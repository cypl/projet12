import NavLeft from '../components/NavLeft'
import NavTop from '../components/NavTop'
import ErrorSection from '../components/ErrorSection'

function Error404() {
  return (
    <div className="App">
      <NavTop />
      <ErrorSection
        title={'404'}
        errorText={"La page que vous recherchez n'existe pas."}
        btnText={"Retour à l'accueil"}
        btnTarget={'/'}
      />
      <NavLeft />
    </div>
  )
}

export default Error404
