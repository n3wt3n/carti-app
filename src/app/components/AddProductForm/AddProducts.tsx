'use client';

import { addProductValidationSchema } from './Validation';
import { useFormik } from 'formik';
import styles from './AddProductForm.module.css';

type Product = {
  name: string;
  price: number;
  size: string;
  quality: string;
  material: string;
  imageUrl: string;
};

const AddProductForm = ({ onAdd }: { onAdd: (product: Product) => void }) => {
  const formik = useFormik<Product>({
    initialValues: {
      name: '',
      price: 0,
      size: '',
      quality: '',
      material: '',
      imageUrl: '',
    },
    validationSchema: addProductValidationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await fetch('https://fakestoreapi.com/products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: values.name,
            price: values.price,
            description: `${values.quality}, ${values.material}, Size: ${values.size}`,
            image: values.imageUrl,
            category: 'general',
          }),
        });

        const data = await response.json();
        console.log('Posted to API:', data);

        onAdd(values); // Save to localStorage and redirect
        resetForm();
      } catch (error) {
        console.error('Error posting product:', error);
        alert('Failed to add product. Please try again.');
      }
    },
  });

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <h2 className={styles.heading}>Add a New Product</h2>

      {/* Name */}
      <div className={styles.field}>
        <input
          className={styles.input}
          placeholder="Product Name"
          {...formik.getFieldProps('name')}
        />
        {formik.touched.name && formik.errors.name && (
          <div className={styles.error}>{formik.errors.name}</div>
        )}
      </div>

      {/* Price */}
      <div className={styles.field}>
        <input
          className={styles.input}
          type="number"
          placeholder="Price"
          {...formik.getFieldProps('price')}
        />
        {formik.touched.price && formik.errors.price && (
          <div className={styles.error}>{formik.errors.price}</div>
        )}
      </div>

      {/* Size */}
      <div className={styles.field}>
        <input
          className={styles.input}
          placeholder="Size"
          {...formik.getFieldProps('size')}
        />
        {formik.touched.size && formik.errors.size && (
          <div className={styles.error}>{formik.errors.size}</div>
        )}
      </div>

      {/* Quality */}
      <div className={styles.field}>
        <input
          className={styles.input}
          placeholder="Quality"
          {...formik.getFieldProps('quality')}
        />
        {formik.touched.quality && formik.errors.quality && (
          <div className={styles.error}>{formik.errors.quality}</div>
        )}
      </div>

      {/* Material */}
      <div className={styles.field}>
        <input
          className={styles.input}
          placeholder="Material"
          {...formik.getFieldProps('material')}
        />
        {formik.touched.material && formik.errors.material && (
          <div className={styles.error}>{formik.errors.material}</div>
        )}
      </div>

      {/* Image URL */}
      <div className={styles.field}>
        <input
          className={styles.input}
          placeholder="Image URL"
          {...formik.getFieldProps('imageUrl')}
        />
        {formik.touched.imageUrl && formik.errors.imageUrl && (
          <div className={styles.error}>{formik.errors.imageUrl}</div>
        )}
      </div>

      {/* Submit Button */}
      <button className={styles.button} type="submit">
        Add Product
      </button>
    </form>
  );
};

export default AddProductForm;
