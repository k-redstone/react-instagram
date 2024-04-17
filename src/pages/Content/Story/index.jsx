import StoryItem from "../../../components/StoryItem"

const Story = () => {

  const [isSeen, setSeen ] = useState(false)

  const handleStory = () => {
    console.log('eee')
    setSeen(!isSeen)
  }

  const datas = [
    { 
      id: 1,
      img: '/images/sample.jpg',
      nickname: 'zokbal'
    },
    { 
      id: 2,
      img: '/images/sample.jpg',
      nickname: '상우'
    }
  ]
   
  return(
    <div>
      <div className="flex py-2 text-sm text-neutral-500">
        {
          datas.map((data) => (
            <StoryItem key={data.id} data={data}/>
          ))
        }
      </div>
    </div>
  )
}


export default Story
