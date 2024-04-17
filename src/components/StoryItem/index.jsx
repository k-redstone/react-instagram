import { useState } from "react"


const StoryItem = ({data}) => {
  const [isSeen, setSeen ] = useState(false)

  const handleStory = () => {
    setSeen(!isSeen)
  }
  return (
    <div className="flex relative flex-col justify-center items-center mx-2"
        onClick={handleStory}      
    >
     
      <div className={`w-16 h-16 border rounded-full 
        ${isSeen ? '' : 'bg-gradient-to-r from-violet-500 to-fuchsia-500 animate-spin'}
      `}>
      
      </div>
      <div className="absolute top-1 w-14 h-14 border rounded-full overflow-hidden">
        <img src={data.img} alt="sample"/>
      </div>
      <p className="text-center">{data.nickname}</p>
    </div>

  )
}

export default StoryItem