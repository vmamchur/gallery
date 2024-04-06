import * as yup from "yup";

const createImageSchema = yup.object({
  image: yup.mixed()
  .required('Image is required')
  .test(
    'fileSize',
    'File too large. Maximum size allowed is 5MB',
    value => value && (value as File).size <= 5242880
  )
  .test(
    'fileType',
    'Only JPG, JPEG, PNG, or GIF file types are allowed',
    value => value && ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'].includes((value as File).type)
  ),
  name: yup.string().trim().required("Name is required."),
  description: yup.string().trim(),
});

export default createImageSchema;

