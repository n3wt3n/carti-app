import * as Yup from 'yup';

export const addProductValidationSchema = Yup.object({
  name: Yup.string().required('Product name is required'),
  price: Yup.number()
    .typeError('Price must be a number')
    .positive('Price must be positive')
    .required('Price is required'),
  size: Yup.string().required('Size is required'),
  quality: Yup.string().required('Quality is required'),
  material: Yup.string().required('Material is required'),
  imageUrl: Yup.string()
    .url('Invalid image URL')
    .required('Image URL is required'),
});
