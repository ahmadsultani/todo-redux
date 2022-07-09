import { useState } from "react";
import { useDispatch } from "react-redux";

import { editTodo } from '../features/todoSlice';

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

export default function TodoEdit({isOpen, onClose, todo}: any) {
  const [item, setItem] = useState('');

  const dispatch = useDispatch();

  function handleChange(e : any) {
    setItem(e.target.value);
  }

  function handleSubmit(e : any) {
    e.preventDefault()
    if (item.trim() !== '') {
      dispatch(editTodo({id:todo.id, title:item}))
      handleClose()
    } 
  }

  function handleClose() {
    setItem('');
    onClose();
  }

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered={true}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Todo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box as='form' onSubmit={handleSubmit} w='100%'>            
            <Input 
              value={item}
              onChange={handleChange}
              placeholder='Enter your new todo'
              focusBorderColor='purple.400'
              size='md'
            />
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button 
            onClick={handleSubmit}
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