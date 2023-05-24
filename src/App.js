import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Listproduct from './components/Listproduct';
import Nav from './components/Nav';
function App() {
  const [contentList, setContentlist] = useState([]);
  const [contentEdit, setContentedit] = useState(null);
  const onAdd = (content) =>{
    setContentlist([...contentList,{content}]);
    console.log(contentList);
  }

  const handleDelete = (index) =>{
  const updateContent = [...contentList.slice(0, index), ...contentList.slice(index + 1)];
    setContentlist(updateContent);
  }

  const handleEdit = (product,index) =>{
    setContentedit(product.content);
    // console.log(contentEdit);

    }


  return (
    <div>
      <Nav/>
      <div className="container my-3">
         <Form onAdd ={onAdd} contentEdit = {contentEdit}/> 
        <h3>Show to me</h3>
        <hr />
        <Listproduct contentList = {contentList} onDelete = {handleDelete} onEdit={handleEdit}/>
      </div>
    </div>
  );
}

export default App;
