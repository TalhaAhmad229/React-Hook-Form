import FormInputSelector from 'src/components/FormInputSelector';
import FormInputText from 'src/components/FormInputText';
import FormInputDatePicker from 'src/components/FormInputDatePicker';
import FormHeader from './FormHeader';

import { Accordion, Grid, FormWrapper } from 'src/components/Layout';
import {
  ADDRESS,
  CADENCE,
  COUNTRY,
  CURRENCY,
  END_DATE,
  HOURS_PER_WEEK,
  PAYMENT_SCHEDULE,
  PROVINCE,
  SPECIAL_CONSIDERATIONS,
  START_DATE,
} from 'src/constant';

const ContractDetails = () => {
  return (
    <Accordion header={<FormHeader heading="Contract Details" />}>
      <FormWrapper heading="Dates">
        <Grid container spacing={4}>
          <Grid item lg={6} md={12}>
            <FormInputDatePicker name={START_DATE} label="Start Date" />
          </Grid>
          <Grid item lg={6} md={12}>
            <FormInputDatePicker name={END_DATE} label="End Date" />
          </Grid>
        </Grid>
      </FormWrapper>
      <FormWrapper heading="Work Locations">
        <Grid container spacing={4}>
          <Grid item lg={6} md={12}>
            <FormInputSelector name={COUNTRY} label="Country" required={true} />
          </Grid>
          <Grid item lg={6} md={12}>
            <FormInputSelector
              name={PROVINCE}
              label="Province/ State"
              required={true}
            />
          </Grid>
          <Grid item lg={12} md={12}>
            <FormInputText name={ADDRESS} label="Address" required={true} />
          </Grid>
        </Grid>
      </FormWrapper>
      <FormWrapper heading="Pay Rate">
        <Grid container spacing={4}>
          <Grid item lg={6} md={12}>
            <FormInputText name={CURRENCY} label="Currency" required={true} />
          </Grid>
          <Grid item lg={6} md={12}>
            <FormInputText name={CADENCE} label="Cadence" required={true} />
          </Grid>
          <Grid item lg={6} md={12}>
            <FormInputText
              name={HOURS_PER_WEEK}
              label="Hours per Week"
              type="number"
              required={true}
            />
          </Grid>
        </Grid>
      </FormWrapper>
      <FormWrapper heading="Schedule">
        <Grid container spacing={4}>
          <Grid item lg={12} md={12}>
            <FormInputSelector
              name={PAYMENT_SCHEDULE}
              label="Payment Schedule"
              required={true}
            />
          </Grid>
        </Grid>
      </FormWrapper>
      <FormWrapper heading="Special Considerations">
        <Grid container spacing={4}>
          <Grid item lg={12} md={12}>
            <FormInputText
              name={SPECIAL_CONSIDERATIONS}
              label=""
              required={false}
            />
          </Grid>
        </Grid>
      </FormWrapper>
    </Accordion>
  );
};

export default ContractDetails;
