import { IFormControllerTypes } from '../types';
import { Controller, useFormContext } from '../lib/react-hook-form';
import { Select } from './Layout';

const FormInputSelector = ({ name, label }: IFormControllerTypes) => {
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
        />
      )}
    />
  );
};

export default FormInputSelector;
