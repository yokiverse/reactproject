import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setImage } from './store/actions';
import { Box, Image, Input, IconButton } from 'gluestack-ui';
import { AddIcon } from 'gluestack-icons';

function ImageUpload() {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.images);

  const handleFileChange = (index, event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch(setImage(index, reader.result));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box display="flex" justifyContent="center" gap="20px" mt="20px">
      {images.map((image, index) => (
        <Box key={index} width="110px" height="110px" borderWidth="1px" borderRadius="md" overflow="hidden" position="relative">
          {!image ? (
            <>
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(index, e)}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
              />
              <IconButton aria-label="Add Image" icon={<AddIcon />} size="lg" variant="outline" />
            </>
          ) : (
            <Image src={image} alt="Preview" boxSize="full" objectFit="cover" />
          )}
        </Box>
      ))}
    </Box>
  );
}

export default ImageUpload;
