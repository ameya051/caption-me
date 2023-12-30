import React from 'react'

type Props = {}

const notFound = (props: Props) => {
  return (
    <div className="h-screen text-white bg-black/80 flex items-center justify-center z-20 ">
      <main>
        <h3>Page not found.</h3>
      </main>
    </div>
  )
}

export default notFound