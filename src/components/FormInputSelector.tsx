import { IFormControllerTypes } from 'src/types';
import { Controller, useFormContext } from 'src/lib/react-hook-form';
import { Select } from './Layout';

const FormInputSelector = ({ name, label, required }: IFormControllerTypes) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Select
          value={value}
          onChange={onChange}
          label={label}
          error={!!error}
          helperText={error && error?.message}
          required={required}
        />
      )}
    />
  );
};

export default FormInputSelector;
