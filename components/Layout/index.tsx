import Footer from '../Footer'
import Header from '../Header'
import { GlobalContainer } from './styled'

interface Props {
  children: JSX.Element
}

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <GlobalContainer>
      <Header />
      {children}
      <Footer />
    </GlobalContainer>
  )
}

export default Layout
