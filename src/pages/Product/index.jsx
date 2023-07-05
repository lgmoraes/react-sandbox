import { useEffect } from 'react'
import Button from '../../components/Button'

function Product() {
  useEffect(() => {
    document.title = 'Excuse de dev'
  }, [])

  return (
    <main className="home">
      <h1>
        <div className="word1">EXCUSES</div>
        <div className="word2">DE</div>
        <div className="word3">DEV</div>
      </h1>

      <div className="home__buttons">
        <Button to="/Lost" rounded={true}>
          J'ai besoin d'une excuse
        </Button>

        <Button>Ajouter une excuse à la base</Button>
      </div>
    </main>
  )
}

export default Product
