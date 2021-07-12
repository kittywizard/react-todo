function TodoList() {
    return (
        <div className="app"> 
        {/* 
          always use className instead of class 
          curly braces are javascript 
        */}
          <input type="checkbox" name="item" id="list-1" />
          <label for="list-1">Placeholder</label>
  
        </div>
    )

}

export default TodoList;