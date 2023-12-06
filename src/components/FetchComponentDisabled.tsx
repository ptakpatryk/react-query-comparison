import { useQuery } from '@tanstack/react-query';

type ReturnedData = {
  happyNumber: number;
}

const fakeFetchFunction = () => new Promise<ReturnedData>((resolve) => {
  setTimeout(() => {
    const happyNumber = Math.floor(Math.random() * 100);

    resolve({ happyNumber })
  }, 8000)
})

export const FetchComponentDisabled = () => {
  const { data, status, isLoading, isFetching, isInitialLoading, isRefetching, refetch } = useQuery({
    queryKey: ['happy-number-initial-data'],
    queryFn: fakeFetchFunction,
    enabled: false

  })

  return (
    <div>
      <h2>Query with initial data</h2>
      <button style={{ marginBottom: '1em' }} onClick={() => refetch()}>
        Refetch
      </button>
      <table>
        <thead>
          <tr>
            <th>
              Data
            </th>
            <th>
              Status
            </th>
            <th>
              isLoading
            </th>
            <th>
             isInitialLoading 
            </th>
            <th>
              isFetching
            </th>
            <th>
              isRefetching
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ textAlign: 'left', minWidth: '12rem' }}>
              <pre>
                {JSON.stringify(data, null, 2)}
              </pre>
            </td>
            <td>
              {JSON.stringify(status)}
            </td>
            <td>
              {JSON.stringify(isLoading)}
            </td>
            <td>
              {JSON.stringify(isInitialLoading)}
            </td>
            <td>
              {JSON.stringify(isFetching)}
            </td>
            <td>
              {JSON.stringify(isRefetching)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
