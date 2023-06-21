import NavLeft from '../components/NavLeft'
import NavTop from '../components/NavTop'
import ErrorSection from '../components/ErrorSection'
import { useParams } from 'react-router-dom'

const defaultErrorMEssage = "La page que vous recherchez n'existe pas."

/**
 * Displays the error page.
 * @returns {JSX.Element} - The JSX markup for the Error component.
 */
function Error() {
  const params = useParams().error || '404'
  const errorMessages = new Map()
  errorMessages.set('404', "La page que vous recherchez n'existe pas.")
  errorMessages.set('503', 'Ce ne sont pas les droïdes que vous recherchez.')
  errorMessages.set('500', "ça a l'air cassé mais en vrai, on gère ...")
  return (
    <div className="App">
      <NavTop />
      <ErrorSection
        title={params}
        errorText={errorMessages.get(params) || defaultErrorMEssage}
        btnText={"Retour à l'accueil"}
        btnTarget={'/'}
      />
      <NavLeft />
    </div>
  )
}

export default Error
