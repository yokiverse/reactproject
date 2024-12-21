import React from 'react';
import { Box, Input, Button, Text } from 'gluestack-ui';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addBenefit, removeBenefit, setBenefit } from './store/actions';

const AddDetails = () => {
  const dispatch = useDispatch();
  const { benefits } = useSelector((state) => state);

  return (
    <Box className="AddDetails" p="20px" maxWidth="600px" m="auto">
      <Text fontSize="xl" fontWeight="bold" mb="20px">Add Details</Text>
      <hr />
      {benefits.map((benefit, index) => (
        <Box key={index} display="flex" mb="10px">
          <Input
            value={benefit}
            onChange={(e) => dispatch(setBenefit(index, e.target.value))}
            mr="10px"
            flex="1"
          />
          <Button colorScheme="red" onClick={() => dispatch(removeBenefit(index))}>Remove</Button>
        </Box>
      ))}
      <Button colorScheme="green" onClick={() => dispatch(addBenefit())}>Add Benefit</Button>
      <Link to="/Digital-Product" style={{ textDecoration: 'none' }}>
        <Button colorScheme="blue" width="100%" mt="20px">Next</Button>
      </Link>
    </Box>
  );
};

export default AddDetails;
