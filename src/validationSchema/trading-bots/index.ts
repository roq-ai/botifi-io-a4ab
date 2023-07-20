import * as yup from 'yup';

export const tradingBotValidationSchema = yup.object().shape({
  name: yup.string().required(),
  settings: yup.string().required(),
  performance: yup.string().required(),
  organization_id: yup.string().nullable(),
});
