import { useState } from "react";
import { useDispatch } from "react-redux";

import { editTodo, TodoFields } from '../features/todoSlice';

import { 
  Box,
  Button, 
  Input, 
  Modal, 
  ModalBody, 
  ModalCloseButton, 
  ModalContent, 
  ModalFooter, 
  ModalHeader,
  ModalOverlay, 
} from "@chakra-ui/react";

interface TodoEditProps {
  isOpen: boolean;
  onClose: () => void;
  todo: TodoFields;
}

export default function TodoEdit(props: TodoEditProps) {
  const { isOpen, onClose, todo } = props;
  const [item, setItem] = useState(todo.title);
  const dispatch = useDispatch();

  function handleChange(e : Event) {
    const target = e.target as HTMLInputElement;
    setItem(target.value);
  }

  function handleSubmit(e : Event) {
    e.preventDefault()
    if (item !== "") {
      dispatch(editTodo({id: todo.id, title: item, completed: todo.completed}))
      handleClose()
    } 
  }

  function handleClose() {
    setItem(todo.title);
    onClose();
  }

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered={true}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Todo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box as='form' onSubmit={() => handleSubmit} w='100%'>            
            <Input 
              value={item}
              onChange={() => handleChange}
              placeholder='Edit your todo'
              focusBorderColor='purple.400'
              size='md'
            />
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button 
            onClick={() => handleSubmit}
            colorScheme='purple'
            variant='outline'
            mr={3}
            >Save</Button>
          <Button 
            onClick={handleClose}
            colorScheme='purple'
            >Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}