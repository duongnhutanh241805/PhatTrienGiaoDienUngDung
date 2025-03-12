import { useState } from 'react'
import ChefifyHeader from './components/ChefifyHeader';
import RecipeBoxPage from './components/RecipeBoxPage';
import ChefifyFooter from './components/ChefifyFooter';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

              {/* Header */}
      <ChefifyHeader />
      
      {/* Main Content - Grows to fill available space */}
      <main className="flex-grow">
        <RecipeBoxPage />
      </main>
      
      {/* Footer - Always at the bottom */}
      <ChefifyFooter />
      </div>
    </>
  )
}

export default App
