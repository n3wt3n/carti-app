import * as Yup from 'yup';

export const addProductValidationSchema = Yup.object({
  title: Yup.string().required('Product name is required'),
  description: Yup.string().required('Description is required'),
  price: Yup.number().positive('Price must be positive').required('Price is required'),
  image: Yup.string().url('Invalid image URL').required('Image URL is required'),
  category: Yup.string().required('Category is required'),
  stock: Yup.number().min(0, 'Stock can’t be negative').required('Stock is required'),
});
