'use client';
import { addProductValidationSchema } from './Validation';
import { useFormik } from 'formik';
import styles from './AddProductForm.module.css';
import { useState } from 'react';

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
    initialValues:  {
      name: '',
      price: 0,
      size: '',
      quality: '',
      material: '',
      imageUrl: '',
    },
    validationSchema: addProductValidationSchema,
    onSubmit: (values, { resetForm }) => {
      onAdd(values);
      resetForm();
    },
  });

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <h2 className={styles.heading}>Add a New Product</h2>

      <div className={styles.field}>
        <input
          className={styles.input}
          placeholder="Product Name"
          {...formik.getFieldProps('name')}
        />
      </div>

      <div className={styles.field}>
        <input
          className={styles.input}
          type="number"
          placeholder="Price"
          {...formik.getFieldProps('price')}
        />
      </div>

      <div className={styles.field}>
        <input
          className={styles.input}
          placeholder="Size"
          {...formik.getFieldProps('size')}
        />
      </div>

      <div className={styles.field}>
        <input
          className={styles.input}
          placeholder="Quality"
          {...formik.getFieldProps('quality')}
        />
      </div>

      <div className={styles.field}>
        <input
          className={styles.input}
          placeholder="Material"
          {...formik.getFieldProps('material')}
        />
      </div>

      <div className={styles.field}>
        <input
          className={styles.input}
          placeholder="Image URL"
          {...formik.getFieldProps('imageUrl')}
        />
      </div>

      <button className={styles.button} type="submit">
        Add Product
      </button>
    </form>
  );
};

export default AddProductForm;
