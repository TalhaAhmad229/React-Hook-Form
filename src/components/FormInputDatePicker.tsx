import { IFormControllerTypes } from 'src/types';
import { Controller, useFormContext } from 'src/lib/react-hook-form';
import { DatePicker } from './Layout';

const FormInputDatePicker = ({ name }: IFormControllerTypes) => {
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
