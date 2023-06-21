
import { IFormControllerTypes } from 'src/features/formWithReactHookForm/types';
import { Controller, useFormContext } from 'src/lib/react-hook-form';
import { TextField } from './Layout';

type FormInputTextProps = IFormControllerTypes & {
  type?: 'text' | 'number' | 'date';
};
const FormInputText = ({
  name,
  label,
  type = 'text',
  required = true,
}: FormInputTextProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          type={type}
          value={value}
          onChange={onChange}
          fullWidth
          label={label}
          error={!!error}
          helperText={error ? error.message : null}
          required={required}
        />
      )}
    />
  );
};

export default FormInputText;
