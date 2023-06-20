import { IFormControllerTypes } from 'src/types';
import { Controller, useFormContext } from 'src/lib/react-hook-form';
import { DatePicker, Select } from './Layout';

const FormInputDatePicker = ({
  name,
  label,
}: Omit<IFormControllerTypes, 'required'>) => {
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
