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


