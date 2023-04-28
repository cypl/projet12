import NavLeft from '../components/NavLeft'
import NavTop from '../components/NavTop'
import ErrorSection from '../components/ErrorSection'

function InProgress() {
  return (
    <div className="App">
      <NavTop />
      <ErrorSection
        title={'En cours'}
        errorText={'Cette page est en cours de construction.'}
        btnText={"Retour à l'accueil"}
        btnTarget={'/'}
      />
      <NavLeft />
    </div>
  )
}

export default InProgress
