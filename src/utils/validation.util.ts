/**
 * Checks if any of the expected fields are missing in the data object.
 * @param data - The data object to check.
 * @param expectedFields - The list of expected field names.
 * @returns {boolean} - True if any expected field is missing, false otherwise.
 *
 * !NOTE: This function assumes that all values in the data object are strings.
 * !NOTE: And hence may not work for nested objects and booleans
 */
export const hasMissingFields = (
  data: { [key: string]: unknown },
  expectedFields: string[]
): boolean => {
  return expectedFields.some((field) => !(field in data) || !data[field]);
};

export const emailInvalid = (email: string) => {
  const regex = new RegExp(`^[^\s@]+@[^\s@]+\.[^\s@]+$`);
  return !regex.test(email);
};

export const passwordInvalid = (password: string, minLength: number) => {
  const regex = new RegExp(
    `^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{${minLength},}$`
  );
  return !regex.test(password);
};

export const passwordsDontMatch = (
  password: string,
  repeatPassword: string
) => {
  return password !== repeatPassword;
};


 export const parseMongooseValidationErrors = (error: any) => {
   if (error.code === 11000) {
     // Extract the key 'username' from keyPattern and store it as a string variable
     const errorKey = Object.keys(error.keyPattern)[0];
     return {
       [errorKey]: `${errorKey} already exists`,
     };
   }

   let allErrors = Object.entries(error?.errors ?? {}).map(
     ([error, value]: any) => ({
       [error]: value?.message,
     })
   );

   return allErrors;
 };