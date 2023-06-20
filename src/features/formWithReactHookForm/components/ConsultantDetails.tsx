import FormInputSelector from 'src/components/FormInputSelector';
import FormInputText from 'src/components/FormInputText';
import FormHeader from './FormHeader';

import { Accordion, FormWrapper, Grid } from 'src/components/Layout';
import { LANGUAGE, LEGAL_FIRST_NAME, LEGAL_LAST_NAME } from 'src/constant';

const ConsultantDetails = () => {
  return (
    <Accordion header={<FormHeader heading="Consultant Details" />}>
      <FormWrapper heading="Basic Information">
        <Grid container spacing={2}>
          <Grid item lg={6} md={12}>
            <FormInputText
              name={LEGAL_FIRST_NAME}
              label="Legal First Name"
              required={false}
            />
          </Grid>
          <Grid item lg={6} md={12}>
            <FormInputText
              name={LEGAL_LAST_NAME}
              label="Legal Last Name"
              required={false}
            />
          </Grid>
          <Grid item lg={6} md={12}>
            <FormInputSelector
              name={LANGUAGE}
              label="Language"
              required={false}
            />
          </Grid>
        </Grid>
      </FormWrapper>
    </Accordion>
  );
};

export default ConsultantDetails;
