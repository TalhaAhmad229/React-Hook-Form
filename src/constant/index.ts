import yup from '../../src/lib/yup';

export const BASE_URL = 'http://localhost:3000/';
export const FORMDATA = 'formData';

export const formInitValues = {
  clientDetails: {
    clientName: '',
  },
  consultantDetails: {
    legalFirstName: '',
    legalLastName: '',
    language: '',
  },
  contractDetails: {
    date: {
      startDate: '',
      endDate: '',
    },
    location: {
      country: '',
      province: '',
      address: '',
    },
    payRate: {
      currency: '',
      cadence: '',
      hoursPerWeak: 0,
    },
    schedule: {
      paymentSchedule: '',
    },
    specialConsiderations: '',
  },
};

export const schema = yup.object().shape({
  clientDetails: yup.object().shape({
    clientName: yup.string().required('Client name is required'),
  }),
  consultantDetails: yup.object().shape({
    legalFirstName: yup.string().required('Legal first name is required'),
    legalLastName: yup.string().required('Legal last name is required'),
    language: yup.string().required('Language is required'),
  }),
  contractDetails: yup.object().shape({
    date: yup.object().shape({
      startDate: yup.string().required('Start date is required'),
      endDate: yup.string().required('End date required'),
    }),
    location: yup.object().shape({
      country: yup.string().required('Country is required'),
      province: yup.string().required('Province is required'),
      address: yup.string().required('Address is required'),
    }),
    payRate: yup.object().shape({
      currency: yup.string().required('Currency is required'),
      cadence: yup.string().required('Cadence is required'),
      hoursPerWeak: yup
        .number()
        .required('Hours per week is required')
        .positive('Hours per week must be a positive number')
        .integer('Hours per week must be an integer'),
    }),
    schedule: yup.object().shape({
      paymentSchedule: yup.string().required('Payment schedule is required'),
    }),
    specialConsiderations: yup
      .string()
      .required('Special Considerations is required'),
  }),
});

export const START_DATE = 'contractDetails.date.startDate';
export const END_DATE = 'contractDetails.date.endDate';
export const COUNTRY = 'contractDetails.location.country';
export const PROVINCE = 'contractDetails.location.province';
export const ADDRESS = 'contractDetails.location.address';
export const CURRENCY = 'contractDetails.payRate.currency';
export const CADENCE = 'contractDetails.payRate.cadence';
export const HOURS_PER_WEEK = 'contractDetails.payRate.hoursPerWeak';
export const PAYMENT_SCHEDULE = 'contractDetails.schedule.paymentSchedule';
export const SPECIAL_CONSIDERATIONS = 'contractDetails.specialConsiderations';
export const LEGAL_FIRST_NAME = 'consultantDetails.legalFirstName';
export const LEGAL_LAST_NAME = 'consultantDetails.legalLastName';
export const LANGUAGE = 'consultantDetails.language';
export const CLIENT_NAME = 'clientDetails.clientName';
