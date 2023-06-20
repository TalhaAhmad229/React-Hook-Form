import FormInputText from 'src/components/FormInputText';
import FormHeader from './FormHeader';

import { Accordion, Box, FormWrapper, Grid } from 'src/components/Layout';
import { CLIENT_NAME } from 'src/constant';

const ClientDetails = () => {
  return (
    <Accordion header={<FormHeader heading="Client Details" />}>
      <FormWrapper heading="">
        <Grid container spacing={4}>
          <Grid item lg={12}>
            <FormInputText
              name={CLIENT_NAME}
              label="Client Name"
              required={true}
            />
          </Grid>
        </Grid>
      </FormWrapper>
    </Accordion>
  );
};

export default ClientDetails;
