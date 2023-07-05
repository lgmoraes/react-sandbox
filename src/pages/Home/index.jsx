import { useEffect } from "react"
import Button from "../../components/Button"

function Home() {
  useEffect(() => {
    document.title = "Le Lab"
  }, [])

  return (
    <main className="home">
      <h1>Home</h1>

      <div className="home__buttons">
        <Button rounded={true}>Bouton test</Button>
      </div>
    </main>
  )
}

export default Home
