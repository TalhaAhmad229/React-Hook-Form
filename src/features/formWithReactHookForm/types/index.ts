import {
  ADDRESS,
  CADENCE,
  CLIENT_NAME,
  COUNTRY,
  CURRENCY,
  END_DATE,
  HOURS_PER_WEEK,
  LANGUAGE,
  LEGAL_FIRST_NAME,
  LEGAL_LAST_NAME,
  PAYMENT_SCHEDULE,
  PROVINCE,
  SPECIAL_CONSIDERATIONS,
  START_DATE,
} from 'src/constant';

export type FormFieldName =
  | typeof START_DATE
  | typeof END_DATE
  | typeof COUNTRY
  | typeof PROVINCE
  | typeof ADDRESS
  | typeof CURRENCY
  | typeof CADENCE
  | typeof HOURS_PER_WEEK
  | typeof PAYMENT_SCHEDULE
  | typeof SPECIAL_CONSIDERATIONS
  | typeof LEGAL_FIRST_NAME
  | typeof LEGAL_LAST_NAME
  | typeof LANGUAGE
  | typeof CLIENT_NAME;

export type IFormControllerTypes = {
  name: FormFieldName;
  label?: string;
  required?: boolean;
};

export type IFormTypes = {
  clientDetails: {
    clientName: string;
  };
  consultantDetails: {
    legalFirstName: string;
    legalLastName: string;
    language: string;
  };
  contractDetails: {
    date: {
      startDate: string;
      endDate: string;
    };
    location: {
      country: string;
      province: string;
      address: string;
    };
    payRate: {
      currency: string;
      cadence: string;
      hoursPerWeak: number;
    };
    schedule: {
      paymentSchedule: string;
    };
    specialConsiderations: string;
  };
};
