import FormInputSelector from '../../../components/FormInputSelector';
import FormInputText from '../../../components/FormInputText';
import FormHeader from './FormHeader';

import { Accordion, FormWrapper, Grid } from '../../../components/Layout';
import { LANGUAGE, LEGAL_FIRST_NAME, LEGAL_LAST_NAME } from '../../../constant';

const ConsultantDetails = () => {
  return (
    <Accordion header={<FormHeader heading="Consultant Details" />}>
      <FormWrapper heading="Basic Information">
        <Grid container spacing={2}>
          <Grid item lg={6} md={12}>
            <FormInputText name={LEGAL_FIRST_NAME} label="Legal First Name" />
          </Grid>
          <Grid item lg={6} md={12}>
            <FormInputText name={LEGAL_LAST_NAME} label="Legal Last Name" />
          </Grid>
          <Grid item lg={6} md={12}>
            <FormInputSelector name={LANGUAGE} label="Language" />
          </Grid>
        </Grid>
      </FormWrapper>
    </Accordion>
  );
};

export default ConsultantDetails;
