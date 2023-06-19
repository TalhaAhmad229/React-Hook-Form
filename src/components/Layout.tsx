import { ReactNode } from 'react';
import { ExpandMoreIcon } from '../lib/icons-material';
import {
  Box as BBox,
  BoxProps,
  Typography as BTypography,
  TypographyProps,
  TextField as BTextField,
  TextFieldProps,
  Accordion as BAccordion,
  AccordionSummary,
  AccordionDetails,
  GridProps,
  Grid as BGrid,
  Select as BSelect,
  SelectProps,
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Divider,
  Button as BButton,
  ButtonProps,
} from '@mui/material';
import { DatePicker as BDatePicker, DatePickerProps, Space } from 'antd';
import { Toaster as ReactToaster } from 'react-hot-toast';

export function Box(props: BoxProps) {
  return <BBox {...props} />;
}

export function Typography(props: TypographyProps) {
  return <BTypography {...props} />;
}

export function TextField(props: TextFieldProps) {
  return <BTextField {...props} />;
}

export function Grid(props: GridProps) {
  return <BGrid {...props} />;
}

export function Button(props: ButtonProps) {
  return <BButton {...props} />;
}

export function Toaster() {
  return <ReactToaster position="top-center" reverseOrder={false} />;
}

export function DatePicker({
  helperText,
  ...rest
}: { helperText?: string } & DatePickerProps) {
  return (
    <>
      <Space direction="vertical" style={{ width: '100%' }}>
        <BDatePicker
          {...rest}
          style={{ width: '100%', fontSize: '1.5rem', padding: '1rem' }}
        />
      </Space>
      <br />
      {helperText && (
        <FormHelperText
          sx={{
            color: '#d32f2f',
          }}
        >
          {helperText}
        </FormHelperText>
      )}
    </>
  );
}

type SelectorProps = SelectProps & {
  error: boolean;
  helperText?: string;
};

export function Select({
  label,
  error,
  helperText,
  onChange,
  value,
}: SelectorProps) {
  return (
    <FormControl fullWidth error={error}>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <BSelect
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label={label}
        onChange={onChange}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </BSelect>
      {error && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
}

type AccordionProps = {
  children: ReactNode;
  header: JSX.Element;
};
export function Accordion({ children, header }: AccordionProps) {
  return (
    <>
      <BAccordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          {header}
        </AccordionSummary>
        <Divider light />
        <AccordionDetails>{children}</AccordionDetails>
      </BAccordion>
    </>
  );
}

type FormWrapper = {
  children: ReactNode;
  heading: string;
};

export function FormWrapper({ children, heading }: FormWrapper) {
  return (
    <Box marginY={2}>
      <Typography marginBottom={2} fontWeight={'bold'}>
        {heading}
      </Typography>
      {children}
    </Box>
  );
}
