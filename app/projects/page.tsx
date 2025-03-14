'use client'
import useSWR from 'swr'
import fetcher from '../utils/fetcher'

const Projects = () => {
  const url = 'https://simple-todos-app-with-next-js.vercel.app/api/'

  const { data, error, isLoading } = useSWR(url, fetcher)

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
