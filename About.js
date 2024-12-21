import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setName, setDescription, setPrice } from './store/actions';
import { Box, Text, Input, Textarea, Button } from 'gluestack-ui';
import ImageUpload from './ImageUpload';
import { Link } from 'react-router-dom';

const About = () => {
  const dispatch = useDispatch();
  const { name, description, price } = useSelector((state) => state);

  return (
    <Box className="About" p="20px" maxWidth="600px" m="auto">
      <Text fontSize="xl" fontWeight="bold" mb="20px">About</Text>
      <hr />
      <Input
        placeholder="Name"
        value={name}
        onChange={(e) => dispatch(setName(e.target.value))}
        mb="10px"
      />
      <Textarea
        placeholder="Description"
        maxLength={2000}
        value={description}
        onChange={(e) => dispatch(setDescription(e.target.value))}
        mb="10px"
      />
      <Box mb="20px">
        <Text fontSize="lg">Cover Photos</Text>
        <Text fontSize="sm">(upload up to 5 photos)</Text>
        <ImageUpload />
      </Box>
      <Box mb="20px">
        <Text fontSize="lg">Price</Text>
        <Input
          type="number"
          placeholder="$0.00"
          value={price}
          onChange={(e) => dispatch(setPrice(e.target.value))}
        />
      </Box>
      <Link to="/AddDetails" style={{ textDecoration: 'none' }}>
        <Button colorScheme="blue" width="100%">Next</Button>
      </Link>
    </Box>
  );
};

export default About;
