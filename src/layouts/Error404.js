import NavLeft from '../components/NavLeft'
import NavTop from '../components/NavTop'
import ErrorSection from '../components/ErrorSection'

/**
 * Displays the 404 page.
 * @returns {JSX.Element} - The JSX markup for the Error404 component.
 */
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
