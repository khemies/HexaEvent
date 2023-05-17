import api from "./ApiConfig";

export const beneficiariesCount = (year) => {
  return api.get(`donation-requests/beneficiaries/count?year=${year}`);
};

export const support = (year) => {
  return api.get(`donation-requests/support/total?year=${year}`);
};

export const getGender = (year) => {
  return api.get(`donation-requests/by-gender?year=${year}`);
};

export const byNationality = (year) => {
  return api.get(`donation-requests/by-nationality?year=${year}`);
};
export const moreThanOnce = (year) => {
  return api.get(`donation-requests/beneficiaries/more-than-once?year=${year}`);
};
export const totalDonationsDeposits = (year) => {
  return api.get(`donations-deposits/total?year=${year}`);
};
