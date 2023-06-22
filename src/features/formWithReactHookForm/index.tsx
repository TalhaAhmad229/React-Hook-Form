import ClientDetails from './components/ClientDetails';
import ConsultantDetails from './components/ConsultantDetails';
import ContractDetails from './components/ContractDetails';

import { Box, Button, Toaster } from 'src/components/Layout';
import { useForm, FormProvider } from 'src/lib/react-hook-form';
import { formInitValues } from 'src/constant';
import { yupResolver, DevTool } from 'src/lib/react-hook-form';
import { IFormTypes } from './types';
import { PostFormData } from './api/PostFormData';
import { toast } from 'src/lib/react-hot-toast';
import { schema } from './helper';

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
