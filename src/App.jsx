import { useState } from 'react'
// import './App.css'
import Calculator from './projects/calculator/Calc'
import List from './projects/displayData/List'
import Todo from './projects/todo-list/Todo'
import dummyData from './projects/displayData/Data'
import RandomColor from './projects/color-generator/RandomColor'


function App() {
  const [people, setPeople] = useState(dummyData)
  return (
    <>
    {/* {<Todo/>} */}
    {/* <Calculator/> */}
    {/* <div className="container">
      <div className="student-count text-white">{people.length} students</div>
      <List people={people} />
      <button className="clear-btn" onClick={() => setPeople([])}>Clear All</button>
    </div> */}
    {/* <RandomColor/> */}
    </>
  )
}

export default App
