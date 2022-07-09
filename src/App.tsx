import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import { Heading, VStack } from '@chakra-ui/react'

function App() {
  return (
    <VStack
      position='relative'
      top='5vh'
      minH='90vh'
      width='calc(40% + 35vh)'
      align='center'
      p={8}
      borderWidth='1px'
      borderColor='#ccc'
      borderStyle='solid'
      borderRadius={8}
      boxShadow='0 0 8px rgba(0, 0, 0, .125)'
      background='whiteAlpha.800'
    >
      <Heading
        size="2xl"
        textAlign="center"
        fontWeight="extrabold"
        bgGradient='linear(to-l, #7928CA, #FF0080)'
        bgClip='text'
      > Todo List
      </Heading>
      <TodoForm />
      <TodoList />
    </VStack>
  );
}

export default App;
