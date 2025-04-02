import { Dispatch, SetStateAction } from 'react'
import { Input } from '@/components/ui/input'

type DictionarySearchProps = {
  setSearchWord: Dispatch<SetStateAction<string>>
}

const DictionarySearch = ({ setSearchWord }: DictionarySearchProps) => {
  return (
    <Input
      className="text-[clamp(1em, 5vw, 1.5em)] mx-[auto] my-[1em] w-[90%] rounded-[0.4em] border-none bg-[black] p-6 pt-7 text-[white] [box-shadow:3px_3px_0px_orange] placeholder:text-2xl"
      type="text"
      placeholder="Hae..."
      onChange={(event) => setSearchWord(event.currentTarget.value)}
    />
  )
}

export default DictionarySearch
