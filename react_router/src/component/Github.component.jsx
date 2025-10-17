import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router"
import { useLoaderData } from "react-router"

export default function Github() {
    const data = useLoaderData()
    const { gitname } = useParams()
    console.log(gitname)
    // const [data, setData] = useState(null)
    // console.log(name)
    // useEffect(() => {
    //     fetch(`https://api.github.com/users/manavd821`)
    //     .then((res) => res.json())
    //     .then((data) => {
    //         setData(data)
    //     })
    // },[])
  return (
    <div className="text-center bg-gray-500 text-white text-3xl p-4">
      Github followers: {data ? data.followers : '' }
      <img className="" src = {data ? data.avatar_url : ''} alt="Git Picture" width={300}/>
    </div>
  )
}

export const githubInfoLoader = async () => {
    const res = await fetch(`https://api.github.com/users/manavd821`)
    return await res.json()   
}
