import { Grid, GridItem, Text, Todo } from "components";
import { useSelector } from "react-redux";
import { selectTodos } from "redux/todoSlice";

function TodoList() {

  const todos = useSelector(selectTodos);

  return (
    <Grid>
      {todos.length === 0 && (
        <Text textAlign="center">There are no any todos ... </Text>
      )}
      {todos.length > 0 &&
        todos.map((todo, index) => (
          <GridItem key={todo.id}>
            <Todo
              id={todo.id}
              text={todo.text}
              counter={index + 1}
            />
          </GridItem>
        ))}
    </Grid>
  )
}

export default TodoList