

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
