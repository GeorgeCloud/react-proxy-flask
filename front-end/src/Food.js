import { useQuery } from 'react-query'

function Food() {
    const { isLoading, error, data } = useQuery('food', () => {
      return fetch('/food').then(res => res.json())
    });

    return (
      <div>
        { isLoading ? "Loading..." : data.map(item => <p>{item.name}</p>) }
      </div>
    )
  }
  
  export default Food;