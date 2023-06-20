import { Box, Typography } from 'src/components/Layout';
import { CheckCircleOutlineIcon } from 'src/lib/icons-material';

type FormHeaderProps = {
  heading: string;
};

const FormHeader = ({ heading }: FormHeaderProps) => {
  return (
    <Box display="flex" alignItems="center">
      <CheckCircleOutlineIcon sx={{ color: '#3B873E', marginRight: '6px' }} />
      <Typography color="#3B873E">{heading}</Typography>
    </Box>
  );
};

export default FormHeader;
