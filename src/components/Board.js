import BoardHeader from './BoardHeader'
import BoardMain from './BoardMain'

function Board() {
  return (
    <div className="flex-1 overflow-hidden shrink-0 divide-y divide-light-gray-line dark:divide-dark-gray-line flex flex-col">
      <BoardHeader />
      <BoardMain />
    </div>
  )
}

export default Board
