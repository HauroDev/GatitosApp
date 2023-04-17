import { useCatImage } from '../hooks/useCatImage'

const Otro = () => {
  const { imageUrl } = useCatImage({ fact: 'ramdom Fact' })

  return (
    <>
      {imageUrl && <img className='catInfo__contain__image' src={`${imageUrl}`} />}
    </>
  )
}

export default Otro
