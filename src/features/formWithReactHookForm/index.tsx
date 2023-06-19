import ClientDetails from './components/ClientDetails';
import ConsultantDetails from './components/ConsultantDetails';
import ContractDetails from './components/ContractDetails';

import { Box, Button, Toaster } from '../../components/Layout';
import { useForm, FormProvider } from '../../lib/react-hook-form';
import { formInitValues, schema } from '../../constant';
import { yupResolver, DevTool } from '../../lib/react-hook-form';
import { IFormTypes } from './types';
import { PostFormData } from './api/PostFormData';
import { toast } from '../../lib/react-hot-toast';

const FormWithReactHook = () => {
  const methods = useForm<IFormTypes>({
    defaultValues: formInitValues,
    resolver: yupResolver(schema),
  });
  const { handleSubmit, control } = methods;

  const onSubmit = async (data: IFormTypes) => {
    const result = await PostFormData(data);
    if (result.success) toast.success(result?.message);
    else toast.error(result?.message);
  };

  return (
    <>
      <Toaster />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ConsultantDetails />
          <ContractDetails />
          <ClientDetails />
          <Box textAlign={'end'} marginY={'5px'}>
            <Button variant="text">DISCARD</Button>
            <Button variant="text" type="submit">
              SAVE
            </Button>
            <Button variant="contained">NEXT</Button>
          </Box>
        </form>
      </FormProvider>
      <DevTool control={control} />
    </>
  );
};

export default FormWithReactHook;
