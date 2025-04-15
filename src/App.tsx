import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'sonner'
import { PageAnalysis } from './components/PageAnalysis'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-background">
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<PageAnalysis />} />
            </Routes>
          </main>
        </div>
      </Router>
      <Toaster />
    </QueryClientProvider>
  )
}

export default App
