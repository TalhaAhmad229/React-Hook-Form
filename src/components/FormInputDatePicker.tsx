import { IFormControllerTypes } from '../types';
import { Controller, useFormContext } from '../lib/react-hook-form';
import { DatePicker, Select } from './Layout';

const FormInputDatePicker = ({ name, label }: IFormControllerTypes) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <DatePicker
          value={value}
          onChange={onChange}
          status={error ? 'error' : undefined}
          helperText={error && error?.message}
        />
      )}
    />
  );
};

export default FormInputDatePicker;
