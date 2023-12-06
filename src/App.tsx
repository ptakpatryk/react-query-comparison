import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { FetchComponent } from './components/FetchComponent';
import { FetchComponentDisabled } from './components/FetchComponentDisabled';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools buttonPosition='bottom-left' />
      <h1>Test React Query</h1>
      <FetchComponent />
      <FetchComponentDisabled />
    </QueryClientProvider>
  )
}

export default App
