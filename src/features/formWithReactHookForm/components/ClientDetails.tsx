import FormInputText from '../../../components/FormInputText';
import FormHeader from './FormHeader';

import { Accordion, Box, FormWrapper, Grid } from '../../../components/Layout';
import { CLIENT_NAME } from '../../../constant';

const ClientDetails = () => {
  return (
    <Accordion header={<FormHeader heading="Client Details" />}>
      <FormWrapper heading="">
        <Grid container spacing={4}>
          <Grid item lg={12}>
            <FormInputText name={CLIENT_NAME} label="Client Name *" />
          </Grid>
        </Grid>
      </FormWrapper>
    </Accordion>
  );
};

export default ClientDetails;
