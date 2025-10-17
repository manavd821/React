import { useParams } from "react-router"
export default function User() {
    const {userid} = useParams()
  return (
    <div className="text-center bg-gray-500 text-white text-3xl p-4">
      User: {userid} 
    </div>
  )
}
