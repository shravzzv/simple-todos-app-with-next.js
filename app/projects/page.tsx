'use client'
import useSWR from 'swr'
import fetcher from '../utils/fetcher'

const Projects = () => {
  const { data, error, isLoading } = useSWR(
    `http://localhost:3000/api`,
    fetcher
  )

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div>
        <p>An error occured while fetching the data</p>
      </div>
    )
  }

  return <div>{data.message}</div>
}

export default Projects
