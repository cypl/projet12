import NavLeft from '../components/NavLeft'
import NavTop from '../components/NavTop'
import ErrorSection from '../components/ErrorSection'

/**
 * Displays the “In Progress” page.
 * @returns {JSX.Element} - The JSX markup for the InProgress component.
 */
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
